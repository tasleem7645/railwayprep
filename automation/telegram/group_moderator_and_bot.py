"""Group Anti-Spam Moderator, /pyq Search Assistant, & Optional Admin Queue Notifier."""

import argparse
import html
import json
import os
import re
import requests

from tg_client import (
    ADMIN_CHAT_ID,
    DATA_DIR,
    GROUP_ID,
    SITE_URL,
    load_state,
    save_state,
    send_message,
    tg_api,
)

LINK_RE = re.compile(r'(https?://\S+|t\.me/\S+|telegram\.me/\S+|wa\.me/\S+)', re.IGNORECASE)
ALLOWED_DOMAINS = (
    'railwayprep.com',
    't.me/railwayprep',
    't.me/rrb_alerts_official',
    'indianrailways.gov.in',
    'rrb.indianrailways.gov.in',
    'rrbcdg.gov.in',
    'rrbapply.gov.in',
    'rrb.digialm.com',
)
SPAM_WORDS = ('crypto airdrop', 'betting', '1win', 'aviator', 'earn money fast', 'paid promo', 'dm for leaks', 'paper leak')


def is_allowed_text(text):
    lower = (text or '').lower()
    if any(bad in lower for bad in SPAM_WORDS):
        return False
    for match in LINK_RE.findall(lower):
        if not any(dom in match for dom in ALLOWED_DOMAINS):
            return False
    return True


def find_pyq_matches(keyword, limit=2):
    kw = (keyword or '').strip().lower()
    if not kw:
        return []
    hits = []
    files = sorted(list(DATA_DIR.glob('alp*.json')) + list((DATA_DIR / 'groupd').glob('*.json')))
    for fp in files:
        try:
            rows = json.loads(fp.read_text(encoding='utf-8'))
        except Exception:
            continue
        for q in rows:
            if not isinstance(q, dict):
                continue
            q_obj = q.get('question') or {}
            blob = f"{q_obj.get('en', '')} {q_obj.get('hi', '')} {q.get('topic', '')}".lower()
            if kw in blob:
                hits.append(q)
                if len(hits) >= limit:
                    return hits
    return hits


def handle_command(chat_id, text, reply_to=None):
    parts = (text or '').strip().split(maxsplit=1)
    cmd = parts[0].split('@')[0].lower()
    arg = parts[1].strip() if len(parts) > 1 else ''

    if cmd in ('/start', '/help'):
        msg = (
            "🚂 <b>RailwayPrep PRO Bot (@RailwayPrepOfficialBot)</b>\n\n"
            "Available Commands:\n"
            "• <code>/alerts</code> — Fastest 21-RRB Official Notices & PDFs (@RRB_Alerts_Official)\n"
            "• <code>/mock</code> — Free Official RRB ALP & Group D CBT Mocks\n"
            "• <code>/pyq Ohm</code> — Kisi bhi topic ke Official PYQs search karein\n"
            "• <code>/cutoff</code> — Expected Cutoff Meter & Shift Rank\n"
            "• <code>/pdf</code> — Bilingual Solved Shift PDFs"
        )
        send_message(chat_id, msg, reply_to=reply_to)
    elif cmd == '/alerts':
        send_message(
            chat_id,
            "🔔 <b>Fastest 21-RRB Real-Time Official Notices & Direct PDFs</b>\n"
            "Admit Card, Exam City, Answer Key, Result & Official Notice PDF (Page-1 Preview सहित) बिना किसी शोर के तुरंत पाएँ:",
            reply_markup={
                'inline_keyboard': [
                    [{'text': '🚨 Join @RRB_Alerts_Official', 'url': 'https://t.me/RRB_Alerts_Official'}],
                    [{'text': '📚 Daily Study & Polls (@RailwayPrep_Official)', 'url': 'https://t.me/RailwayPrep_Official'}],
                ]
            },
            reply_to=reply_to,
        )
    elif cmd == '/mock':
        send_message(
            chat_id,
            "🚀 <b>86+ Official Bilingual TCS CBT Mock Tests</b>\n"
            "• Shift-1 har exam me bilkul FREE (Bina login bhi!)\n"
            "• Shifts 2 & 3 Free Login ke baad!",
            reply_markup={
                'inline_keyboard': [[{'text': '📝 Open CBT Test Series', 'url': f'{SITE_URL}/?utm_source=tg_bot#mock-tests'}]]
            },
            reply_to=reply_to,
        )
    elif cmd == '/cutoff':
        send_message(
            chat_id,
            "📊 <b>Expected Cutoff Meter & Live Shift Rank</b>\n"
            "Test submit karte hi aapko Real-Time Percentile + UR/OBC/SC/ST Cutoff status dikhega!",
            reply_markup={
                'inline_keyboard': [[{'text': '📊 Check Shift Tests', 'url': f'{SITE_URL}/?utm_source=tg_bot#mock-tests'}]]
            },
            reply_to=reply_to,
        )
    elif cmd == '/pdf':
        send_message(
            chat_id,
            "📄 <b>Built-In Bilingual Solved Shift PDFs</b>\n"
            "Website par kisi bhi solved mock ya PYQ Explorer se A4 Solved Paper / Practice Sheet download karein.",
            reply_markup={
                'inline_keyboard': [[{'text': '🔍 Open PYQ & PDF Tools', 'url': f'{SITE_URL}/?utm_source=tg_bot#pyq-explorer'}]]
            },
            reply_to=reply_to,
        )
    elif cmd == '/pyq':
        if not arg:
            send_message(
                chat_id,
                "🔍 Topic naam likhein! Example: <code>/pyq Newton</code> ya <code>/pyq Trigonometry</code>",
                reply_markup={'inline_keyboard': [[{'text': '🔍 Open 5-Level PYQ Bank', 'url': f'{SITE_URL}/#pyq-explorer'}]]},
                reply_to=reply_to,
            )
            return
        hits = find_pyq_matches(arg, limit=2)
        if not hits:
            send_message(
                chat_id,
                f"🔍 <b>{html.escape(arg)}</b> ke liye website ke full 5-Level PYQ Explorer me search karein 👇",
                reply_markup={'inline_keyboard': [[{'text': '🔍 Search All PYQs on Website', 'url': f'{SITE_URL}/#pyq-explorer'}]]},
                reply_to=reply_to,
            )
            return
        lines = [f"🔍 <b>Top PYQs for '{html.escape(arg)}'</b>\n"]
        letters = ['A', 'B', 'C', 'D']
        for i, q in enumerate(hits, 1):
            q_obj = q.get('question') or {}
            opts = (q.get('options') or {}).get('hi') or (q.get('options') or {}).get('en') or []
            c_idx = int(q['correctIndexHi']) if q.get('correctIndexHi') is not None else int(q.get('correctIndex', 0))
            ans = opts[c_idx] if c_idx < len(opts) else ''
            q_txt = q_obj.get('hi') or q_obj.get('en') or ''
            lines.append(
                f"<b>{i}. [{html.escape(q.get('topic', 'PYQ'))}]</b>\n"
                f"{html.escape(q_txt[:220])}\n"
                f"✅ <i>Ans ({letters[c_idx]}): {html.escape(str(ans))}</i>\n"
            )
        send_message(
            chat_id,
            '\n'.join(lines),
            reply_markup={'inline_keyboard': [[{'text': '⚡ Practice Full Topic Quiz', 'url': f'{SITE_URL}/#pyq-explorer'}]]},
            reply_to=reply_to,
        )


def check_supabase_admin_queues(state, dry_run=False):
    sb_url = os.getenv('SUPABASE_URL', '').strip().rstrip('/')
    sb_key = os.getenv('SUPABASE_SERVICE_ROLE_KEY', '').strip()
    if not (sb_url and sb_key and ADMIN_CHAT_ID):
        return

    headers = {'apikey': sb_key, 'Authorization': f'Bearer {sb_key}'}
    seen_pay = set(state.get('notified_payment_ids', []))
    seen_rep = set(state.get('notified_report_ids', []))

    try:
        r_pay = requests.get(
            f"{sb_url}/rest/v1/pass_pro_payments?status=eq.pending&select=id,user_email,utr_or_payment_id,amount,created_at&order=created_at.desc&limit=20",
            headers=headers,
            timeout=15,
        )
        if r_pay.ok:
            for p in r_pay.json():
                pid = str(p.get('id'))
                if pid not in seen_pay:
                    msg = (
                        "💳 <b>New Pass Pro UPI Verification Request</b>\n"
                        f"• User: <code>{html.escape(str(p.get('user_email')))}</code>\n"
                        f"• UTR: <code>{html.escape(str(p.get('utr_or_payment_id')))}</code>\n"
                        f"• Amount: ₹{p.get('amount')}\n\n"
                        f"👉 Verify & Approve in Website Admin Queue: {SITE_URL}"
                    )
                    if not dry_run:
                        send_message(ADMIN_CHAT_ID, msg)
                    state.setdefault('notified_payment_ids', []).append(pid)
    except Exception as e:
        print('Admin payment check err:', e)

    try:
        r_rep = requests.get(
            f"{sb_url}/rest/v1/question_reports?status=eq.open&select=id,shift_title,question_no,issue_type,issue_note,reporter_email&order=created_at.desc&limit=20",
            headers=headers,
            timeout=15,
        )
        if r_rep.ok:
            for r in r_rep.json():
                rid = str(r.get('id'))
                if rid not in seen_rep:
                    msg = (
                        "🚩 <b>New Question Error Report</b>\n"
                        f"• Issue: <b>{html.escape(str(r.get('issue_type')))}</b>\n"
                        f"• Shift: {html.escape(str(r.get('shift_title') or 'PYQ'))} (Q.{r.get('question_no') or '-'})\n"
                        f"• Note: {html.escape(str(r.get('issue_note') or '-'))}\n"
                        f"• By: {html.escape(str(r.get('reporter_email') or 'Guest'))}"
                    )
                    if not dry_run:
                        send_message(ADMIN_CHAT_ID, msg)
                    state.setdefault('notified_report_ids', []).append(rid)
    except Exception as e:
        print('Admin report check err:', e)


def sweep_updates(dry_run=False):
    state = load_state()
    offset = int(state.get('last_update_id', 0)) + 1

    try:
        updates = tg_api('getUpdates', {'offset': offset, 'limit': 100, 'timeout': 2})
    except Exception as e:
        print('getUpdates warn:', e)
        updates = []

    max_uid = state.get('last_update_id', 0)
    for upd in updates:
        uid = int(upd.get('update_id', 0))
        if uid > max_uid:
            max_uid = uid
        msg = upd.get('message')
        if not msg:
            continue
        chat_id = msg['chat']['id']
        chat_type = msg['chat'].get('type', '')
        text = msg.get('text') or msg.get('caption') or ''
        from_user = msg.get('from') or {}
        is_anon_admin = bool(msg.get('sender_chat'))

        # Group Anti-Spam Guard
        if str(chat_id) == str(GROUP_ID) and not is_anon_admin and not from_user.get('is_bot'):
            if text and not is_allowed_text(text):
                if not dry_run:
                    try:
                        tg_api('deleteMessage', {'chat_id': chat_id, 'message_id': msg['message_id']})
                        print('DELETED_SPAM_MSG:', msg['message_id'])
                    except Exception:
                        pass
                continue

            if msg.get('new_chat_members') and not dry_run:
                names = ', '.join(m.get('first_name', 'Aspirant') for m in msg['new_chat_members'] if not m.get('is_bot'))
                if names:
                    send_message(
                        chat_id,
                        f"👋 Swagat hai <b>{html.escape(names)}</b>!\n"
                        f"Free CBT Mocks, Topic PYQs & Solved PDFs ke liye use karein <code>/mock</code> ya <code>/pyq</code>.",
                        reply_to=msg['message_id'],
                    )

        # Command Handler (Group or Private DM)
        if text.startswith('/') and (chat_type == 'private' or str(chat_id) == str(GROUP_ID)):
            if not dry_run:
                try:
                    handle_command(chat_id, text, reply_to=msg['message_id'])
                except Exception as e:
                    print('cmd err:', e)

    state['last_update_id'] = max_uid
    check_supabase_admin_queues(state, dry_run=dry_run)
    if not dry_run:
        save_state(state)
    print(f'SWEEP_COMPLETE updates={len(updates)} last_update_id={max_uid}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()
    sweep_updates(dry_run=args.dry_run)
