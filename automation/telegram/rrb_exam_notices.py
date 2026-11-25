"""Auto-post verified RRB & Central Railway Exam Notices (Admit Card, Answer Key, Vacancy, Result)."""

import argparse
import hashlib
import html
import re
from urllib.parse import quote_plus
import feedparser
import requests

from tg_client import CHANNEL_ID, SITE_URL, load_state, save_state, send_message

# Official & high-signal Railway exam news RSS feeds
FEED_URLS = [
    f"https://news.google.com/rss/search?q={quote_plus('RRB ALP OR RRB NTPC OR RRB Group D OR RRB Technician OR RPF CEN notice OR admit card OR answer key OR result')}&hl=en-IN&gl=IN&ceid=IN:en",
    f"https://news.google.com/rss/search?q={quote_plus('site:rrbapply.gov.in OR site:indianrailways.gov.in RRB recruitment notice')}&hl=en-IN&gl=IN&ceid=IN:en",
    "https://www.freejobalert.com/feed/",
]

RAILWAY_TERMS = (
    'rrb', 'railway', 'alp', 'loco pilot', 'group d', 'ntpc', 'rpf',
    'technician', 'rrb je', 'cen ', 'level-1', 'level 1', 'paramedical',
)

ACTION_TERMS = (
    'notification', 'vacancy', 'vacancies', 'recruitment', 'admit card',
    'hall ticket', 'city intimation', 'exam date', 'schedule', 'answer key',
    'objection', 'result', 'cutoff', 'cut off', 'scorecard', 'score card',
    'apply', 'syllabus', 'dv ', 'medical', 'pet ', 'corrigendum',
)

IGNORE_TERMS = (
    'accident', 'derail', 'crash', 'ticket price', 'vande bharat food',
    'passenger', 'parcel', 'freight', 'cricket', 'share price', 'stock',
)


def normalize_id(title, link):
    clean = re.sub(r'[^a-z0-9]+', ' ', (title or '').lower()).strip()
    return hashlib.sha1(f"{clean}|{link}".encode('utf-8')).hexdigest()[:16]


def is_relevant_railway_notice(title, summary=''):
    blob = f"{title} {summary}".lower()
    if any(bad in blob for bad in IGNORE_TERMS):
        return False
    has_rail = any(t in blob for t in RAILWAY_TERMS)
    has_action = any(t in blob for t in ACTION_TERMS)
    return has_rail and has_action


def fetch_candidate_notices(limit_per_feed=15):
    items = []
    headers = {'User-Agent': 'Mozilla/5.0 (compatible; RailwayPrepNoticeBot/1.0)'}
    for url in FEED_URLS:
        try:
            r = requests.get(url, headers=headers, timeout=15)
            parsed = feedparser.parse(r.content)
            for entry in parsed.entries[:limit_per_feed]:
                title = (entry.get('title') or '').strip()
                link = (entry.get('link') or '').strip()
                published = (entry.get('published') or '').strip()
                summary = re.sub(r'<[^>]+>', ' ', entry.get('summary') or '').strip()
                if not title or not link:
                    continue
                if is_relevant_railway_notice(title, summary):
                    # Strip Google News "- Source" noise safely while retaining source badge
                    parts = title.rsplit(' - ', 1)
                    headline = parts[0].strip()
                    source = parts[1].strip() if len(parts) == 2 else 'Exam Portal'
                    items.append({
                        'uid': normalize_id(headline, link),
                        'headline': headline,
                        'source': source,
                        'link': link,
                        'published': published,
                    })
        except Exception as e:
            print(f'Notice feed warn ({url[:50]}): {e}')
    return items


def run(dry_run=False, max_posts=2):
    state = load_state()
    seen = set(state.get('seen_notices', []))
    fresh = []
    batch_uids = set()

    for item in fetch_candidate_notices():
        if item['uid'] not in seen and item['uid'] not in batch_uids:
            fresh.append(item)
            batch_uids.add(item['uid'])

    if not fresh:
        print('No new RRB exam notices found.')
        return

    to_post = fresh[:max_posts]
    for item in to_post:
        msg = (
            "🚨 <b>Railway Exam Update / Notice Alert</b>\n\n"
            f"📢 <b>{html.escape(item['headline'])}</b>\n"
            f"📰 <i>Source: {html.escape(item['source'])}</i>\n"
            + (f"🗓 <i>{html.escape(item['published'][:25])}</i>\n\n" if item['published'] else '\n')
            + "✅ <i>Official portal par verify karein aur tayyari ke liye Free Bilingual CBT Mock lagayein!</i>"
        )
        markup = {
            'inline_keyboard': [
                [{'text': '📰 Read Full Notice / Details', 'url': item['link']}],
                [
                    {'text': '🚀 Attempt Free CBT Mock', 'url': f'{SITE_URL}/?utm_source=tg_notice#mock-tests'},
                    {'text': '🔍 Practice PYQ Bank', 'url': f'{SITE_URL}/?utm_source=tg_notice#pyq-explorer'},
                ],
            ]
        }

        if dry_run:
            print('DRY_RUN NOTICE:', item['uid'], '->', item['headline'])
        else:
            send_message(CHANNEL_ID, msg, reply_markup=markup)
            print('POSTED NOTICE:', item['headline'])

        state.setdefault('seen_notices', []).append(item['uid'])

    if not dry_run:
        save_state(state)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    parser.add_argument('--max-posts', type=int, default=2)
    args = parser.parse_args()
    run(dry_run=args.dry_run, max_posts=args.max_posts)
