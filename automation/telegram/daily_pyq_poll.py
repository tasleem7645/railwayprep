"""Auto-post non-repeating bilingual Common-CBT PYQ Quiz Polls from src/data (excludes Part-B trades)."""

import argparse
import html
import json
import random
import re

from tg_client import (
    DATA_DIR,
    SITE_URL,
    STUDY_CHANNEL_ID,
    load_state,
    save_state,
    send_message,
    send_poll,
)


def clean_text(val):
    if not val:
        return ''
    txt = str(val)
    txt = txt.replace('$$', '').replace('$', '')
    txt = re.sub(r'(\d+)\s*\\frac\{([^{}]+)\}\{([^{}]+)\}', r'\1 \2/\3', txt)
    txt = re.sub(r'\\frac\{([^{}]+)\}\{([^{}]+)\}', r'\1/\2', txt)
    txt = re.sub(r'\\(?:mathbf|text|mathrm)\{([^{}]+)\}', r'\1', txt)
    txt = (
        txt.replace('\\times', '×')
        .replace('\\div', '÷')
        .replace('\\Rightarrow', '⇒')
        .replace('\\implies', '⇒')
        .replace('\\%', '%')
        .replace('\\approx', '≈')
        .replace('\\sqrt', '√')
        .replace('**', '')
        .replace('`', '')
    )
    return re.sub(r'\s+', ' ', txt).strip()


def clean_poll_explanation(sol):
    """Strip raw LaTeX/Markdown so Telegram's 200-char quiz lightbulb tooltip reads crisply."""
    if not isinstance(sol, dict):
        return 'RailwayPrep PRO Official Smart-Board Solution — railwayprep.com'
    opt_trick = sol.get('optionTrick')
    raw = ''
    if isinstance(opt_trick, dict):
        raw = opt_trick.get('hi') or opt_trick.get('en') or ''
    if not raw and isinstance(sol.get('methods'), list) and len(sol['methods']) >= 2:
        m2 = sol['methods'][-1]
        raw = (m2.get('steps') or {}).get('hi') or (m2.get('steps') or {}).get('en') or ''
    if not raw:
        raw = sol.get('hi') or sol.get('en') or sol.get('keyConcept') or 'RailwayPrep Official Answer Key'

    txt = clean_text(raw)
    if len(txt) > 195:
        txt = txt[:192] + '...'
    return txt or 'RailwayPrep PRO Official Answer Key'


def iter_all_questions():
    # Common CBT exams ONLY (ALP CBT-1/2 Part-A, Group D, NTPC UG, Technician Gr-3) — zero niche trade spam
    files = sorted(
        list(DATA_DIR.glob('alp*.json'))
        + list((DATA_DIR / 'groupd').glob('*.json'))
        + list((DATA_DIR / 'ntpcug').glob('*.json'))
        + list((DATA_DIR / 'tech3').glob('*.json'))
    )
    for fp in files:
        try:
            raw = json.loads(fp.read_text(encoding='utf-8'))
        except Exception:
            continue
        rows = raw if isinstance(raw, list) else (raw.get('questions') or [] if isinstance(raw, dict) else [])
        for idx, q in enumerate(rows):
            if not isinstance(q, dict):
                continue
            if q.get('image') or q.get('image_hi') or q.get('questionImage'):
                continue
            sec = clean_text(q.get('section') or q.get('subject') or 'Railway PYQ')
            # Exclude ITI Part-B Trade questions from the general Railway Study feed
            if sec.lower().startswith('part b:') or 'trade' in fp.stem.lower():
                continue
            qid = q.get('shiftQuestionNo') or q.get('id') or (idx + 1)
            uid = f'{fp.stem}:{qid}'
            q_obj = q.get('question') or {}
            opts_obj = q.get('options') or {}
            if not isinstance(q_obj, dict) or not isinstance(opts_obj, dict):
                continue
            q_hi = clean_text(q_obj.get('hi'))
            q_en = clean_text(q_obj.get('en'))
            if '|' in q_hi or '|' in q_en or len(q_hi) < 8:
                continue
            opts_hi = [clean_text(o) for o in (opts_obj.get('hi') or [])]
            opts_en = [clean_text(o) for o in (opts_obj.get('en') or [])]
            if len(opts_hi) < 2 or len(opts_en) < 2:
                continue
            sol = q.get('solution') or {}
            has_multi = isinstance(sol.get('methods'), list) and len(sol['methods']) >= 2
            yield {
                'uid': uid,
                'file': fp.stem,
                'section': sec,
                'topic': clean_text(q.get('topic') or 'Official PYQ'),
                'q_hi': q_hi,
                'q_en': q_en,
                'opts_hi': opts_hi[:4],
                'opts_en': opts_en[:4],
                'correct_en': int(q.get('correctIndex', 0)),
                'correct_hi': int(q['correctIndexHi']) if q.get('correctIndexHi') is not None else int(q.get('correctIndex', 0)),
                'solution': sol,
                'has_multi': has_multi,
            }


def build_poll_payload(item):
    tag = f"[{item['section']} • {item['topic']}]"
    both_q = f"{tag}\n🇮🇳 {item['q_hi']}\n🇬🇧 {item['q_en']}"
    can_native_opts_hi = all(1 <= len(o) <= 95 for o in item['opts_hi'])
    exp_text = clean_poll_explanation(item['solution'])

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
        + '\n\n👇 <i>नीचे पोल में सही विकल्प चुनें (2-Method Smart Solution लाइटबल्ब 💡 में देखें)!</i>'
    )
    poll_opts = [f"Option {letters[i]}" for i in range(len(item['opts_hi']))]
    return {
        'mode': 'card_plus_abcd',
        'intro_html': intro_html,
        'poll_question': f"सही उत्तर चुनें ({item['topic'][:60]}) 👆",
        'poll_options': poll_opts,
        'correct_idx': item['correct_hi'],
        'explanation': exp_text,
    }


def pick_question(sent_uids):
    sent_set = set(sent_uids)
    all_q = list(iter_all_questions())
    candidates = [q for q in all_q if q['uid'] not in sent_set]
    if not candidates:
        candidates = all_q
    if not candidates:
        return None
    # Strongly prefer multi-method Smart-Board solved questions when available, and native polls 75% of time
    solved = [q for q in candidates if q['has_multi']]
    base_pool = solved if (solved and random.random() < 0.70) else candidates
    native = [
        q for q in base_pool
        if len(f"[{q['section']} • {q['topic']}]\n{q['q_hi']}") <= 290
        and all(len(o) <= 95 for o in q['opts_hi'])
    ]
    pool = native if (native and random.random() < 0.75) else base_pool
    return random.choice(pool)


def run(dry_run=False):
    state = load_state()
    item = pick_question(state.get('sent_pyq_uids', []))
    if not item:
        print('No eligible questions found in src/data.')
        return

    payload = build_poll_payload(item)
    cta_rows = [
        [
            {'text': '⚡ Practice Smart-Board PYQs', 'url': f'{SITE_URL}/?utm_source=tg_pyq#pyq-explorer'},
            {'text': '🚀 Free CBT Mock', 'url': f'{SITE_URL}/?utm_source=tg_pyq#mock-tests'},
        ]
    ]
    cta_markup = {'inline_keyboard': cta_rows}

    if dry_run:
        print('DRY_RUN PICKED:', item['uid'], '| section=', item['section'], '| multi=', item['has_multi'], '| mode=', payload['mode'], '| target=', STUDY_CHANNEL_ID)
        if payload['intro_html']:
            print('INTRO:\n', payload['intro_html'][:400])
        print('POLL_Q:', payload['poll_question'])
        print('POLL_OPTS:', payload['poll_options'])
        print('CORRECT_IDX:', payload['correct_idx'])
        print('EXPLANATION:', payload['explanation'])
        return

    if payload['intro_html']:
        send_message(STUDY_CHANNEL_ID, payload['intro_html'])
        send_poll(
            STUDY_CHANNEL_ID,
            payload['poll_question'],
            payload['poll_options'],
            payload['correct_idx'],
            explanation=payload['explanation'],
            reply_markup=cta_markup,
        )
    else:
        send_poll(
            STUDY_CHANNEL_ID,
            payload['poll_question'],
            payload['poll_options'],
            payload['correct_idx'],
            explanation=payload['explanation'],
            reply_markup=cta_markup,
        )

    state.setdefault('sent_pyq_uids', []).append(item['uid'])
    save_state(state)
    print(f"POSTED PYQ POLL: {item['uid']} ({payload['mode']}) -> {STUDY_CHANNEL_ID}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()
    run(dry_run=args.dry_run)
