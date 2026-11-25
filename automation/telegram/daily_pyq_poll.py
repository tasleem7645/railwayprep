"""Auto-post non-repeating bilingual PYQ Quiz Polls from src/data shift banks."""

import argparse
import html
import json
import random
import re
from pathlib import Path

from tg_client import (
    CHANNEL_ID,
    DATA_DIR,
    SITE_URL,
    load_state,
    save_state,
    send_message,
    send_poll,
)


def clean_text(val):
    if not val:
        return ''
    text = re.sub(r'\s+', ' ', str(val)).strip()
    return text


def iter_all_questions():
    files = sorted(
        list(DATA_DIR.glob('alp*.json'))
        + list((DATA_DIR / 'groupd').glob('*.json'))
        + list((DATA_DIR / 'trades').glob('*.json'))
    )
    for fp in files:
        try:
            rows = json.loads(fp.read_text(encoding='utf-8'))
        except Exception:
            continue
        if not isinstance(rows, list):
            continue
        for q in rows:
            if not isinstance(q, dict):
                continue
            if q.get('image') or q.get('image_hi'):
                continue
            qid = q.get('shiftQuestionNo') or q.get('id')
            uid = f'{fp.stem}:{qid}'
            q_obj = q.get('question') or {}
            opts_obj = q.get('options') or {}
            if not isinstance(q_obj, dict) or not isinstance(opts_obj, dict):
                continue
            q_hi = clean_text(q_obj.get('hi'))
            q_en = clean_text(q_obj.get('en'))
            # Skip complex Markdown table prompts from poll mode
            if '|' in q_hi or '|' in q_en:
                continue
            opts_hi = [clean_text(o) for o in (opts_obj.get('hi') or [])]
            opts_en = [clean_text(o) for o in (opts_obj.get('en') or [])]
            if len(opts_hi) < 2 or len(opts_en) < 2:
                continue
            yield {
                'uid': uid,
                'file': fp.stem,
                'section': clean_text(q.get('section') or q.get('subject') or 'Railway PYQ'),
                'topic': clean_text(q.get('topic') or 'Official PYQ'),
                'q_hi': q_hi,
                'q_en': q_en,
                'opts_hi': opts_hi[:4],
                'opts_en': opts_en[:4],
                'correct_en': int(q.get('correctIndex', 0)),
                'correct_hi': int(q['correctIndexHi']) if q.get('correctIndexHi') is not None else int(q.get('correctIndex', 0)),
                'solution': q.get('solution') or {},
            }


def build_poll_payload(item):
    tag = f"[{item['section']} • {item['topic']}]"
    both_q = f"{tag}\n🇮🇳 {item['q_hi']}\n🇬🇧 {item['q_en']}"

    # Case 1: Fits Telegram native Poll limits directly (bilingual question + Hindi/English concise options)
    can_native_opts_hi = all(1 <= len(o) <= 95 for o in item['opts_hi'])
    can_native_opts_en = all(1 <= len(o) <= 95 for o in item['opts_en'])

    sol = item['solution']
    exp_text = clean_text(sol.get('hi') or sol.get('en') or sol.get('keyConcept') or 'RailwayPrep Official Answer Key')
    if len(exp_text) > 195:
        exp_text = exp_text[:192] + '...'

    if len(both_q) <= 295 and can_native_opts_hi:
        return {
            'mode': 'native_bilingual',
            'intro_html': None,
            'poll_question': both_q,
            'poll_options': item['opts_hi'],
            'correct_idx': item['correct_hi'],
            'explanation': exp_text,
        }

    if len(f"{tag}\n{item['q_hi']}") <= 295 and can_native_opts_hi:
        return {
            'mode': 'native_hi',
            'intro_html': None,
            'poll_question': f"{tag}\n{item['q_hi']}",
            'poll_options': item['opts_hi'],
            'correct_idx': item['correct_hi'],
            'explanation': exp_text,
        }

    # Case 2: Detailed/long question -> Send rich full bilingual HTML message + A/B/C/D quiz poll!
    letters = ['A', 'B', 'C', 'D']
    opts_lines = []
    for idx in range(len(item['opts_hi'])):
        hi_o = html.escape(item['opts_hi'][idx])
        en_o = html.escape(item['opts_en'][idx] if idx < len(item['opts_en']) else '')
        label = hi_o if hi_o == en_o or not en_o else f'{hi_o} / {en_o}'
        opts_lines.append(f"<b>{letters[idx]})</b> {label}")

    intro_html = (
        f"🎯 <b>Official PYQ Challenge</b> | <code>{html.escape(item['section'])}</code>\n"
        f"📌 <i>Topic: {html.escape(item['topic'])}</i>\n\n"
        f"🇮🇳 {html.escape(item['q_hi'])}\n"
        f"🇬🇧 <i>{html.escape(item['q_en'])}</i>\n\n"
        + '\n'.join(opts_lines)
        + '\n\n👇 <i>Niche poll me sahi option chunein!</i>'
    )
    poll_opts = [f"Option {letters[i]}" for i in range(len(item['opts_hi']))]
    return {
        'mode': 'card_plus_abcd',
        'intro_html': intro_html,
        'poll_question': f"Answer Choose Karein ({item['topic'][:60]}) 👆",
        'poll_options': poll_opts,
        'correct_idx': item['correct_hi'],
        'explanation': exp_text,
    }


def pick_question(sent_uids):
    sent_set = set(sent_uids)
    candidates = [q for q in iter_all_questions() if q['uid'] not in sent_set]
    if not candidates:
        candidates = list(iter_all_questions())
    if not candidates:
        return None
    # Prefer native poll items 70% of the time for maximum Telegram engagement
    native = [
        q for q in candidates
        if len(f"[{q['section']} • {q['topic']}]\n{q['q_hi']}") <= 290
        and all(len(o) <= 95 for o in q['opts_hi'])
    ]
    pool = native if (native and random.random() < 0.75) else candidates
    return random.choice(pool)


def run(dry_run=False):
    state = load_state()
    item = pick_question(state.get('sent_pyq_uids', []))
    if not item:
        print('No eligible questions found in src/data.')
        return

    payload = build_poll_payload(item)
    cta_markup = {
        'inline_keyboard': [
            [
                {'text': '⚡ Practice 10 More Topic PYQs', 'url': f'{SITE_URL}/?utm_source=tg_pyq#pyq-explorer'},
                {'text': '🚀 Free CBT Mock', 'url': f'{SITE_URL}/?utm_source=tg_pyq#mock-tests'},
            ]
        ]
    }

    if dry_run:
        print('DRY_RUN PICKED:', item['uid'], '| mode=', payload['mode'])
        if payload['intro_html']:
            print('INTRO:\n', payload['intro_html'][:400])
        print('POLL_Q:', payload['poll_question'])
        print('POLL_OPTS:', payload['poll_options'])
        print('CORRECT_IDX:', payload['correct_idx'])
        print('EXPLANATION:', payload['explanation'])
        return

    if payload['intro_html']:
        send_message(CHANNEL_ID, payload['intro_html'])
        send_poll(
            CHANNEL_ID,
            payload['poll_question'],
            payload['poll_options'],
            payload['correct_idx'],
            explanation=payload['explanation'],
            reply_markup=cta_markup,
        )
    else:
        send_poll(
            CHANNEL_ID,
            payload['poll_question'],
            payload['poll_options'],
            payload['correct_idx'],
            explanation=payload['explanation'],
            reply_markup=cta_markup,
        )

    state.setdefault('sent_pyq_uids', []).append(item['uid'])
    save_state(state)
    print(f"POSTED PYQ POLL: {item['uid']} ({payload['mode']})")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()
    run(dry_run=args.dry_run)
