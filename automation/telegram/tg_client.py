"""Shared Telegram Bot API client and persistent state helpers (no hardcoded secrets)."""

import json
import os
from pathlib import Path
import requests

REPO_ROOT = Path(__file__).resolve().parents[2]
STATE_FILE = Path(__file__).resolve().parent / 'state.json'
DATA_DIR = REPO_ROOT / 'src' / 'data'

SITE_URL = os.getenv('SITE_URL', 'https://railwayprep.com').rstrip('/')
BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN', '').strip()
CHANNEL_ID = os.getenv('TELEGRAM_CHANNEL_ID', '-1002047409648').strip()
GROUP_ID = os.getenv('TELEGRAM_GROUP_ID', '-1002815379745').strip()
ADMIN_CHAT_ID = os.getenv('TELEGRAM_ADMIN_CHAT_ID', '').strip()


DEFAULT_STATE = {
    'sent_pyq_uids': [],
    'seen_notices': [],
    'capsule_index': 0,
    'card_index': 0,
    'last_update_id': 0,
    'notified_payment_ids': [],
    'notified_report_ids': [],
}


def load_state():
    if STATE_FILE.exists():
        try:
            data = json.loads(STATE_FILE.read_text(encoding='utf-8'))
            for k, v in DEFAULT_STATE.items():
                data.setdefault(k, v if not isinstance(v, list) else list(v))
            return data
        except Exception:
            pass
    return {k: (list(v) if isinstance(v, list) else v) for k, v in DEFAULT_STATE.items()}


def save_state(state):
    # Keep lists bounded cleanly
    state['sent_pyq_uids'] = state.get('sent_pyq_uids', [])[-5000:]
    state['seen_notices'] = state.get('seen_notices', [])[-1000:]
    state['notified_payment_ids'] = state.get('notified_payment_ids', [])[-500:]
    state['notified_report_ids'] = state.get('notified_report_ids', [])[-500:]
    STATE_FILE.write_text(json.dumps(state, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')


def tg_api(method, payload=None, files=None, timeout=20):
    if not BOT_TOKEN:
        raise RuntimeError('TELEGRAM_BOT_TOKEN env var is missing.')
    url = f'https://api.telegram.org/bot{BOT_TOKEN}/{method}'
    if files:
        resp = requests.post(url, data=payload or {}, files=files, timeout=timeout)
    else:
        resp = requests.post(url, json=payload or {}, timeout=timeout)
    data = resp.json()
    if not data.get('ok'):
        raise RuntimeError(f'Telegram API {method} failed: {data}')
    return data['result']


def send_message(chat_id, text, reply_markup=None, parse_mode='HTML', disable_preview=True, reply_to=None):
    payload = {
        'chat_id': chat_id,
        'text': text,
        'parse_mode': parse_mode,
        'disable_web_page_preview': disable_preview,
    }
    if reply_markup:
        payload['reply_markup'] = reply_markup
    if reply_to:
        payload['reply_to_message_id'] = reply_to
    return tg_api('sendMessage', payload)


def send_poll(chat_id, question, options, correct_option_id, explanation='', reply_markup=None):
    payload = {
        'chat_id': chat_id,
        'question': question[:300],
        'options': [{'text': str(opt)[:100]} for opt in options],
        'type': 'quiz',
        'correct_option_id': int(correct_option_id),
        'is_anonymous': True,
    }
    if explanation:
        payload['explanation'] = str(explanation)[:200]
    if reply_markup:
        payload['reply_markup'] = reply_markup
    return tg_api('sendPoll', payload)


def send_photo(chat_id, photo_path, caption='', reply_markup=None, parse_mode='HTML'):
    payload = {
        'chat_id': chat_id,
        'caption': caption[:1024],
        'parse_mode': parse_mode,
    }
    if reply_markup:
        payload['reply_markup'] = json.dumps(reply_markup)
    with open(photo_path, 'rb') as fp:
        return tg_api('sendPhoto', payload=payload, files={'photo': fp})
