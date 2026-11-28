"""Real-time Official 21-RRB Notice Radar, Newspaper/PIB/FreeJobAlert Feed & Visual PDF Dispatcher.

Zero-stale-spam guarantee:
1. Primary layer scrapes all 21 official RRB boards (rrb.indianrailways.gov.in/<slug>) across
   Pre-Exam (notifications), Exam (E-Call Letters / City Slip), and Post-Exam (Objection / Result / Cut-Off).
2. Secondary layer monitors strictly <= 36h Railway breaking news (Google News HI/EN `when:1d`,
   FreeJobAlert Railway table with dd/mm/yyyy validation, PIB Railways RSS).
3. Strictly drops undated items, items older than max-age cutoff, IBPS/Bank false positives, and SEO clickbait.
4. Downloads official RRB PDFs, renders a branded Page-1 PNG preview via pdftoppm + Pillow,
   dispatches Photo + Official PDF document, and cross-links contextual RailwayPrep PRO mock/rank CTAs.
"""

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
import glob
import hashlib
import html
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
from urllib.parse import quote, quote_plus
import feedparser
import requests
import urllib3

from tg_client import (
    CHANNEL_ID,
    LIVE_CACHE_FILE,
    NOTICE_CHANNEL_ID,
    SITE_URL,
    load_state,
    save_state,
    send_document,
    send_message,
    send_photo,
)

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

IST = timezone(timedelta(hours=5, minutes=30))
RRB_BASE = 'https://rrb.indianrailways.gov.in'

RRB_BOARDS = [
    ('ahmedabad', 'RRB Ahmedabad'),
    ('ajmer', 'RRB Ajmer'),
    ('prayagraj', 'RRB Prayagraj'),
    ('bengaluru', 'RRB Bengaluru'),
    ('bhopal', 'RRB Bhopal'),
    ('bhubaneswar', 'RRB Bhubaneswar'),
    ('bilaspur', 'RRB Bilaspur'),
    ('chandigarh', 'RRB Chandigarh'),
    ('chennai', 'RRB Chennai'),
    ('gorakhpur', 'RRB Gorakhpur'),
    ('guwahati', 'RRB Guwahati'),
    ('jammu', 'RRB Jammu-Srinagar'),
    ('kolkata', 'RRB Kolkata'),
    ('malda', 'RRB Malda'),
    ('mumbai', 'RRB Mumbai'),
    ('muzaffarpur', 'RRB Muzaffarpur'),
    ('patna', 'RRB Patna'),
    ('ranchi', 'RRB Ranchi'),
    ('secunderabad', 'RRB Secunderabad'),
    ('siliguri', 'RRB Siliguri'),
    ('thiruvananthapuram', 'RRB Thiruvananthapuram'),
]

NEWS_FEEDS = [
    (
        'Google News HI (24h)',
        f"https://news.google.com/rss/search?q={quote_plus('(\"रेलवे भर्ती\" OR \"आरआरबी\" OR \"रेलवे बोर्ड\" OR \"एनटीपीसी\" OR \"ग्रुप डी\" OR \"एएलपी\") (नोटिस OR स्टेटस OR एडमिट OR रिजल्ट OR कटऑफ OR कोटा OR वैकेंसी OR परीक्षा) when:1d')}&hl=hi-IN&gl=IN&ceid=IN:hi",
    ),
    (
        'Google News EN (24h)',
        f"https://news.google.com/rss/search?q={quote_plus('(RRB OR RRC OR \"Railway Board\" OR \"Railway Recruitment\") (notice OR status OR \"admit card\" OR \"city intimation\" OR \"answer key\" OR result OR cutoff OR vacancy OR RBE OR quota OR schedule) when:1d')}&hl=en-IN&gl=IN&ceid=IN:en",
    ),
    (
        'PIB Railways',
        'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3',
    ),
]

RAILWAY_POSITIVE_RE = re.compile(
    r'(\brrb\b|\brrc\b|\brpf\b|\brbe\b|railway|\bdfccil\b|\bmrvc\b|\bmaha ?metro\b|\bdmrc\b|आरआरबी|रेलवे|एनटीपीसी|ग्रुप डी|एएलपी|लोको पायलट)',
    re.I,
)

ACTION_POSITIVE_RE = re.compile(
    r'(notification|vacancy|vacancies|recruitment|admit ?card|hall ?ticket|e-?call ?letter|city ?intimation|application ?status|exam ?date|schedule|re-?schedule|answer ?key|objection|result|cut ?off|cutoff|score ?card|scorecard|selection ?list|pet\b|pst\b|document ?verification|\bdv\b|corrigendum|enhancement|quota|\brbe\b|नोटिस|नोटिफिकेशन|भर्ती|वैकेंसी|एडमिट|स्टेटस|परीक्षा|आंसर|रिजल्ट|कटऑफ|कोटा|संशोधन)',
    re.I,
)

NOISE_REJECT_RE = re.compile(
    r'(\bibps\b|gramin bank|regional rural bank|office assistant|officer scale|bank po|bank clerk|\bsbi po\b|\bsbi clerk\b|\bhprca\b|\bcsir net\b|\bagniveer\b|army rally|accident|derail|crash|ticket price|vande bharat food|freight|share price|stock market|infinity offer|mahapack|coupon|testbook pass|course price|best books|preparation tips|how to prepare|salary and job profile|station name.*change|बदलेगा नाम)',
    re.I,
)

ZONE_SPECIFIC_CATEGORIES = ('exam results', 'selection list', 'cut off', 'cutoff', 'dv', 'document verification')

UA_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'Accept-Language': 'en-IN,en;q=0.9,hi;q=0.8',
}


def clean_text(raw_html):
    txt = re.sub(r'<[^>]+>', ' ', raw_html or '')
    return re.sub(r'\s+', ' ', html.unescape(txt)).strip()


def make_uid(*parts):
    joined = '|'.join(re.sub(r'\s+', ' ', str(p or '').lower()).strip() for p in parts)
    return hashlib.sha1(joined.encode('utf-8')).hexdigest()[:16]


def parse_dd_mm_yyyy_ist(s):
    m = re.search(r'(\d{2})[-/](\d{2})[-/](20\d{2})', str(s or ''))
    if not m:
        return None
    d, mo, y = int(m.group(1)), int(m.group(2)), int(m.group(3))
    # End-of-day IST so date-only official notices remain valid cleanly across full 48-60h window
    return datetime(y, mo, d, 23, 59, tzinfo=IST).astimezone(timezone.utc)


def parse_rss_dt_utc(entry):
    raw = (entry.get('published') or entry.get('updated') or '').strip()
    if raw:
        try:
            dt = parsedate_to_datetime(raw)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=timezone.utc)
            return dt.astimezone(timezone.utc)
        except Exception:
            pass
    st = entry.get('published_parsed') or entry.get('updated_parsed')
    if st:
        return datetime(*st[:6], tzinfo=timezone.utc)
    return None


def is_within_age(dt_utc, max_hours, now_utc=None):
    if dt_utc is None:
        return False
    now_utc = now_utc or datetime.now(timezone.utc)
    age_sec = (now_utc - dt_utc).total_seconds()
    return -7200 <= age_sec <= max_hours * 3600


def detect_exam_tag(text):
    t = (text or '').lower()
    if '06/2026' in t or '05/2025' in t or 'ntpc' in t or 'station master' in t or 'goods train manager' in t or 'train manager' in t or 'गुड्स ट्रेन मैनेजर' in t or 'ट्रेन मैनेजर' in t or 'एनटीपीसी' in t:
        return 'ntpc'
    if '01/2025' in t or '01/2026' in t or 'alp' in t or 'loco pilot' in t or 'एएलपी' in t or 'cbat' in t:
        return 'alp'
    if '09/2025' in t or '08/2024' in t or '10/2026' in t or 'group d' in t or 'level-1' in t or 'level 1' in t or 'ग्रुप डी' in t or 'rrc' in t:
        return 'groupd'
    if '02/2026' in t or 'technician' in t or 'टेक्नीशियन' in t:
        return 'technician'
    if '04/2026' in t or '03/2024' in t or 'rrb je' in t or 'je, dms' in t:
        return 'je'
    if '05/2026' in t or 'paramedical' in t or 'पैरामेडिकल' in t:
        return 'paramedical'
    if '09/2026' in t or 'isolated' in t or 'rpf' in t:
        return 'isolated_rpf'
    return 'railway'


def compute_event_fingerprint(title, dt_utc):
    blob = (title or '').lower()
    exam = detect_exam_tag(blob)
    if 'application status' in blob or 'स्टेटस' in blob:
        ev = 'app_status'
    elif 'admit card' in blob or 'e-call' in blob or 'call letter' in blob or 'एडमिट' in blob:
        ev = 'admit_card'
    elif 'city intimation' in blob or 'एग्जाम सिटी' in blob:
        ev = 'city_slip'
    elif 'answer key' in blob or 'objection tracker' in blob or 'response sheet' in blob or 'आंसर' in blob:
        ev = 'answer_key'
    elif 'result' in blob or 'selection list' in blob or 'रिजल्ट' in blob:
        ev = 'result'
    elif 'cut off' in blob or 'cutoff' in blob or 'कटऑफ' in blob:
        ev = 'cutoff'
    elif 'quota' in blob or 'कोटा' in blob or 'सीधी भर्ती' in blob or 'goods train manager' in blob or 'गुड्स ट्रेन मैनेजर' in blob:
        ev = 'quota_update'
    elif 'corrigendum' in blob or 'extension' in blob or 'enhancement' in blob:
        ev = 'corrigendum'
    elif 'exam date' in blob or 'schedule' in blob or 'परीक्षा' in blob:
        ev = 'exam_date'
    else:
        ev = re.sub(r'[^a-z0-9]+', '_', blob)[:32]
    day_bucket = dt_utc.astimezone(IST).strftime('%Y-%m-%d') if dt_utc else 'unknown'
    return f"{exam}:{ev}:{day_bucket}"


def _curl_fetch_bytes(url, referer, cookie_jar, max_time=14):
    """Fallback HTTP/1.1 fetch via system curl + shared cookie jar (when urllib3 fails)."""
    if not shutil.which('curl'):
        return None
    try:
        res = subprocess.run(
            [
                'curl', '-skL', '--http1.1',
                '--connect-timeout', '6', '--max-time', str(max_time),
                '-A', UA_HEADERS['User-Agent'],
                '-H', f'Accept-Language: {UA_HEADERS["Accept-Language"]}',
                '-H', f'Referer: {referer}',
                '-c', str(cookie_jar), '-b', str(cookie_jar),
                url,
            ],
            capture_output=True,
            timeout=max_time + 3,
        )
        if res.returncode == 0 and res.stdout:
            return res.stdout
    except Exception:
        pass
    return None


def fetch_board_recent_rows(slug, board_name, max_age_hours, now_utc, use_curl=False):
    """Fetch recent notices for one official RRB board via warm session + getdata."""
    portal_url = f'{RRB_BASE}/{slug}'
    found = []

    def get_text_with_mode(url, s=None, cookie_jar=None):
        if use_curl and cookie_jar is not None:
            raw = _curl_fetch_bytes(url, portal_url, cookie_jar, max_time=12)
            return raw.decode('utf-8', errors='replace') if raw else ''
        r = s.get(url, timeout=(6, 11))
        return r.text if r.status_code == 200 else ''

    s = requests.Session()
    s.headers.update({**UA_HEADERS, 'Referer': portal_url, 'Connection': 'keep-alive'})
    s.verify = False
    try:
        with tempfile.TemporaryDirectory() as jar_dir:
            cookie_jar = Path(jar_dir) / 'cookies.txt'
            html0 = get_text_with_mode(portal_url, s=s, cookie_jar=cookie_jar)
            if 'notificationsCollectData' not in html0:
                return found

            # Collect distinct /getdata?... links on homepage whose date badge is within max_age_hours
            cat_links = {}
            for href, inner in re.findall(r'<a[^>]+href="(/getdata\?[^"]+)"[^>]*>(.*?)</a>', html0, re.S | re.I):
                dt_m = re.search(r'\((\d{2}-\d{2}-20\d{2})\)', inner)
                if not dt_m:
                    continue
                dt_utc = parse_dd_mm_yyyy_ist(dt_m.group(1))
                if not is_within_age(dt_utc, max_age_hours, now_utc):
                    continue
                cat_links[html.unescape(href)] = dt_utc

            for rel_href in list(cat_links.keys())[:6]:
                q_part = rel_href.replace(' ', '%20')
                tab_html = get_text_with_mode(f'{RRB_BASE}{q_part}', s=s, cookie_jar=cookie_jar)
                if not tab_html or 'Request Rejected' in tab_html:
                    continue
                for row_html in re.findall(r'<tr[^>]*>(.*?)</tr>', tab_html, re.S | re.I)[1:]:
                    tds = [clean_text(td) for td in re.findall(r'<td[^>]*>(.*?)</td>', row_html, re.S | re.I)]
                    if len(tds) < 5:
                        continue
                    cen, category, title, pub_str = tds[1], tds[2], tds[3], tds[4]
                    dt_utc = parse_dd_mm_yyyy_ist(pub_str)
                    if not is_within_age(dt_utc, max_age_hours, now_utc):
                        continue

                    pdfs = []
                    for opt_val, opt_lbl in re.findall(r'<option[^>]+value="([^"]+)"[^>]*>(.*?)</option>', row_html, re.S | re.I):
                        if '.pdf' in opt_val.lower() or '/-/image/' in opt_val.lower():
                            full_pdf = opt_val if opt_val.startswith('http') else f'{RRB_BASE}{quote(opt_val, safe="/:-_.()~")}'
                            lbl = clean_text(opt_lbl) or 'Notice PDF'
                            pdfs.append((lbl, full_pdf))

                    ext_links = re.findall(r"confirmAndOpen\(['\"]([^'\"]+)['\"]\)", row_html)
                    ext_links = [u.replace('//EForms', '/EForms') for u in ext_links]

                    found.append({
                        'kind': 'official_rrb',
                        'slug': slug,
                        'board': board_name,
                        'cen': cen,
                        'category': category,
                        'title': title,
                        'pub_str': pub_str,
                        'dt_utc': dt_utc,
                        'portal_url': portal_url,
                        'pdfs': pdfs,
                        'ext_links': ext_links,
                    })
    except Exception as e:
        print(f'RRB board warn ({slug}): {type(e).__name__}')
    return found


def fetch_all_official_rrb(max_age_hours=48):
    now_utc = datetime.now(timezone.utc)
    raw_rows = []
    # Quick single-board connectivity probe (avoids multi-minute hang if runner IP is blocked)
    use_curl = False
    probe_ok = False
    try:
        r_chk = requests.get(f'{RRB_BASE}/chandigarh', headers=UA_HEADERS, timeout=(6, 10), verify=False)
        probe_ok = r_chk.status_code == 200 and 'notificationsCollectData' in r_chk.text
    except Exception:
        pass
    if not probe_ok:
        with tempfile.TemporaryDirectory() as td:
            raw_chk = _curl_fetch_bytes(f'{RRB_BASE}/chandigarh', f'{RRB_BASE}/chandigarh', Path(td) / 'c.txt', max_time=10)
            if raw_chk and b'notificationsCollectData' in raw_chk:
                probe_ok = True
                use_curl = True
    if not probe_ok:
        print('Official RRB portal unreachable from current runner IP — using fresh news/FreeJobAlert/PIB feeds.')
        return []

    pool = ThreadPoolExecutor(max_workers=4)
    try:
        futs = [pool.submit(fetch_board_recent_rows, slug, name, max_age_hours, now_utc, use_curl) for slug, name in RRB_BOARDS]
        try:
            for f in as_completed(futs, timeout=28):
                raw_rows.extend(f.result())
        except TimeoutError:
            print('Official RRB scan hit 28s time budget; continuing with boards already fetched.')
    finally:
        pool.shutdown(wait=False, cancel_futures=True)

    # Deduplicate central notices posted identically across 21 zones while preserving zone-specific Result/Cut-Off PDFs
    grouped = {}
    for row in raw_rows:
        norm_title = re.sub(r'\b(hindi version|english version|hindi|english)\b', '', row['title'].lower())
        norm_title = re.sub(r'[^a-z0-9]+', ' ', norm_title).strip()
        is_zone_specific = any(z in row['category'].lower() or z in norm_title for z in ZONE_SPECIFIC_CATEGORIES)
        g_key = f"{row['cen']}|{norm_title}|{row['pub_str']}|{row['slug'] if is_zone_specific else 'central'}"
        if g_key not in grouped:
            grouped[g_key] = {
                **row,
                'boards': [row['board']],
                'pdfs_map': {lbl: url for lbl, url in row['pdfs']},
                'all_ext': list(row['ext_links']),
                'is_zone_specific': is_zone_specific,
            }
        else:
            g = grouped[g_key]
            if row['board'] not in g['boards']:
                g['boards'].append(row['board'])
            for lbl, url in row['pdfs']:
                if lbl not in g['pdfs_map']:
                    g['pdfs_map'][lbl] = url
            for u in row['ext_links']:
                if u not in g['all_ext']:
                    g['all_ext'].append(u)
            # Prefer English wording cleanly if first variant was "(hindi version)"
            if 'hindi version' in g['title'].lower() and 'english' in row['title'].lower():
                g['title'] = re.sub(r'\s*\((?:English|hindi version)\)\s*', '', row['title'], flags=re.I).strip()

    items = []
    for g_key, g in grouped.items():
        clean_title = re.sub(r'\s*\((?:English|hindi version)\)\s*$', '', g['title'], flags=re.I).strip()
        board_label = g['boards'][0] if len(g['boards']) == 1 else f"All {len(g['boards'])} Official RRBs"
        items.append({
            'uid': make_uid('official', g['cen'], clean_title, g['pub_str'], g['slug'] if g['is_zone_specific'] else 'central'),
            'event_fp': compute_event_fingerprint(f"CEN {g['cen']} {g['category']} {clean_title}", g['dt_utc']),
            'kind': 'official_rrb',
            'cen': g['cen'],
            'category': g['category'],
            'headline': f"CEN {g['cen']}: {clean_title}",
            'source': board_label,
            'link': g['all_ext'][0] if g['all_ext'] else (list(g['pdfs_map'].values())[0] if g['pdfs_map'] else g['portal_url']),
            'portal_url': g['portal_url'],
            'ext_link': g['all_ext'][0] if g['all_ext'] else '',
            'pdfs_map': g['pdfs_map'],
            'published': g['pub_str'],
            'dt_utc': g['dt_utc'],
            'priority': 1,
        })
    return items


def fetch_freejobalert_railway(max_age_hours=36):
    items = []
    now_utc = datetime.now(timezone.utc)
    try:
        r = requests.get('https://www.freejobalert.com/railway-jobs/', headers=UA_HEADERS, timeout=12)
        if r.status_code != 200:
            return items
        for row_html in re.findall(r'<tr[^>]*>(.*?)</tr>', r.text, re.S | re.I):
            tds_raw = re.findall(r'<td[^>]*>(.*?)</td>', row_html, re.S | re.I)
            if len(tds_raw) < 3:
                continue
            tds = [clean_text(c) for c in tds_raw]
            dt_utc = parse_dd_mm_yyyy_ist(tds[0])
            if not is_within_age(dt_utc, max_age_hours, now_utc):
                continue
            row_blob = ' | '.join(tds)
            if NOISE_REJECT_RE.search(row_blob) or not RAILWAY_POSITIVE_RE.search(row_blob):
                continue
            link_m = re.search(r'href="(https?://[^"]+)"', row_html)
            if not link_m:
                continue
            headline = ' — '.join(c for c in tds[1:4] if c)
            items.append({
                'uid': make_uid('fja', headline, tds[0]),
                'event_fp': compute_event_fingerprint(headline, dt_utc),
                'kind': 'portal_news',
                'cen': '',
                'category': 'Railway Vacancy / Notice',
                'headline': headline[:180],
                'source': 'FreeJobAlert Railway',
                'link': link_m.group(1),
                'portal_url': 'https://www.freejobalert.com/railway-jobs/',
                'ext_link': '',
                'pdfs_map': {},
                'published': tds[0],
                'dt_utc': dt_utc,
                'priority': 2,
            })
    except Exception as e:
        print('FreeJobAlert Railway warn:', e)
    return items


def fetch_fresh_news_feeds(max_age_hours=36):
    items = []
    now_utc = datetime.now(timezone.utc)
    for src_tag, url in NEWS_FEEDS:
        try:
            r = requests.get(url, headers=UA_HEADERS, timeout=12)
            parsed = feedparser.parse(r.content)
            for entry in parsed.entries[:25]:
                title = (entry.get('title') or '').strip()
                link = (entry.get('link') or '').strip()
                summary = clean_text(entry.get('summary') or '')
                if not title or not link:
                    continue
                dt_utc = parse_rss_dt_utc(entry)
                if not is_within_age(dt_utc, max_age_hours, now_utc):
                    continue
                blob = f'{title} {summary}'
                if NOISE_REJECT_RE.search(blob):
                    continue
                if not (RAILWAY_POSITIVE_RE.search(blob) and ACTION_POSITIVE_RE.search(blob)):
                    continue

                parts = title.rsplit(' - ', 1)
                headline = parts[0].strip()
                publisher = parts[1].strip() if len(parts) == 2 else src_tag
                ist_str = dt_utc.astimezone(IST).strftime('%d %b %Y, %H:%M IST')
                items.append({
                    'uid': make_uid('news', headline, link),
                    'event_fp': compute_event_fingerprint(headline, dt_utc),
                    'kind': 'news',
                    'cen': '',
                    'category': 'Railway Breaking Update',
                    'headline': headline,
                    'source': publisher,
                    'link': link,
                    'portal_url': link,
                    'ext_link': '',
                    'pdfs_map': {},
                    'published': ist_str,
                    'dt_utc': dt_utc,
                    'priority': 3,
                })
        except Exception as e:
            print(f'News feed warn ({src_tag}): {e}')
    return items


def render_pdf_preview_png(pdf_path, out_png_path, badge_title):
    """Render Page 1 of an official RRB PDF with pdftoppm and add a crisp RailwayPrep header/footer."""
    if not shutil.which('pdftoppm'):
        return False
    try:
        from PIL import Image, ImageDraw, ImageFont

        with tempfile.TemporaryDirectory() as td:
            prefix = os.path.join(td, 'pg')
            subprocess.run(
                ['pdftoppm', '-png', '-r', '135', '-f', '1', '-l', '1', str(pdf_path), prefix],
                check=True,
                timeout=15,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
            pages = sorted(glob.glob(f'{prefix}*.png'))
            if not pages:
                return False
            src = Image.open(pages[0]).convert('RGB')
            # Clamp extreme widths while staying crisp
            max_w = 1400
            if src.width > max_w:
                new_h = int(src.height * (max_w / src.width))
                src = src.resize((max_w, new_h), Image.Resampling.LANCZOS)

            top_h, bot_h = 54, 46
            canvas = Image.new('RGB', (src.width, src.height + top_h + bot_h), '#FFFFFF')
            canvas.paste(src, (0, top_h))
            draw = ImageDraw.Draw(canvas)
            draw.rectangle([0, 0, canvas.width, top_h], fill='#0B1F33')
            draw.rectangle([0, canvas.height - bot_h, canvas.width, canvas.height], fill='#0F766E')

            font_hdr = ImageFont.load_default()
            font_ftr = font_hdr
            for fpath in (
                '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
                '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
                '/system/fonts/Roboto-Bold.ttf',
            ):
                if os.path.exists(fpath):
                    try:
                        font_hdr = ImageFont.truetype(fpath, 22)
                        font_ftr = ImageFont.truetype(fpath, 19)
                        break
                    except Exception:
                        pass

            draw.text((20, 14), f'VERIFIED OFFICIAL RRB NOTICE  |  {badge_title[:55]}', fill='#FBBF24', font=font_hdr)
            draw.text(
                (20, canvas.height - bot_h + 12),
                'RailwayPrep PRO Real-Time Radar  •  Free TCS CBT Mocks & Solved PDFs: railwayprep.com',
                fill='#ECFEFF',
                font=font_ftr,
            )
            canvas.save(out_png_path, format='PNG', optimize=True)
            return True
    except subprocess.TimeoutExpired:
        print('PDF render warn: pdftoppm timed out (>15s), falling back to text+PDF.')
        return False
    except Exception as e:
        print('PDF render warn:', e)
        return False


def download_official_pdfs(pdfs_map, tmp_dir, portal_url=f'{RRB_BASE}/chandigarh'):
    """Download valid official PDF files (max 15 MB each) using a warm RRB session cookie + curl fallback."""
    downloaded = []
    if not pdfs_map:
        return downloaded
    s = requests.Session()
    s.headers.update({**UA_HEADERS, 'Referer': portal_url, 'Connection': 'keep-alive'})
    s.verify = False
    jar_path = Path(tmp_dir) / 'dl_cookies.txt'
    use_curl = False
    try:
        s.get(portal_url, timeout=12)
    except Exception:
        use_curl = bool(_curl_fetch_bytes(portal_url, portal_url, jar_path, max_time=15))

    # Order cleanly: English first (best crisp PNG preview), then Hindi
    ordered = sorted(
        pdfs_map.items(),
        key=lambda kv: (0 if 'english' in kv[0].lower() else 1, kv[0]),
    )
    for lbl, url in ordered[:2]:
        try:
            content = b''
            if not use_curl:
                try:
                    r = s.get(url, timeout=22)
                    if r.status_code == 200:
                        content = r.content
                except Exception:
                    use_curl = True
            if use_curl or not content:
                if not jar_path.exists():
                    _curl_fetch_bytes(portal_url, portal_url, jar_path, max_time=15)
                content = _curl_fetch_bytes(url, portal_url, jar_path, max_time=25) or b''
            if content[:4] == b'%PDF' and len(content) <= 15 * 1024 * 1024:
                safe_name = re.sub(r'[^A-Za-z0-9._-]+', '_', url.split('/')[-2] if '/examsDocuments' in url else lbl)[:80]
                if not safe_name.lower().endswith('.pdf'):
                    safe_name += '.pdf'
                out_p = Path(tmp_dir) / safe_name
                out_p.write_bytes(content)
                downloaded.append((lbl, out_p, url))
        except Exception as e:
            print('PDF fetch warn:', url[:60], e)
    return downloaded


def build_notice_markup(item):
    rows = []
    if item.get('ext_link'):
        rows.append([{'text': '🔗 Direct Official Candidate Link (Digialm/Portal)', 'url': item['ext_link']}])
    rows.append([{'text': f"🌐 Official Source ({item['source'][:26]})", 'url': item['portal_url']}])
    rows.append([
        {'text': '🚀 Free CBT Mock', 'url': f'{SITE_URL}/?utm_source=tg_radar#mock-tests'},
        {'text': '🧠 Smart-Board PYQs', 'url': f'{SITE_URL}/?utm_source=tg_radar#pyq-explorer'},
    ])
    if str(NOTICE_CHANNEL_ID) != str(CHANNEL_ID):
        rows.append([{'text': '📚 Daily Study, Tricks & PDFs (@RailwayPrep_Official)', 'url': 'https://t.me/RailwayPrep_Official'}])
    return {'inline_keyboard': rows}


def format_caption(item):
    if item['kind'] == 'official_rrb':
        return (
            f"🚨 <b>OFFICIAL RRB REAL-TIME ALERT</b>\n\n"
            f"📌 <b>{html.escape(item['headline'])}</b>\n"
            f"🏛 <b>Board:</b> {html.escape(item['source'])}\n"
            f"📂 <b>Category:</b> {html.escape(item['category'])}\n"
            f"🗓 <b>Published Date:</b> {html.escape(item['published'])}\n\n"
            f"📄 <i>आधिकारिक नोटिस का विवरण नीचे संलग्न PDF व लिंक से तुरंत देखें!</i>"
        )
    return (
        f"📰 <b>RAILWAY EXAM BREAKING UPDATE</b>\n\n"
        f"📢 <b>{html.escape(item['headline'])}</b>\n"
        f"🏛 <b>Source:</b> {html.escape(item['source'])}\n"
        f"🗓 <b>Time:</b> {html.escape(item['published'])}\n\n"
        f"✅ <i>ताज़ा सरकारी सूचना — आधिकारिक पोर्टल व Free Bilingual TCS CBT Mock नीचे देखें!</i>"
    )


def gather_all_candidates(official_hours=48, news_hours=36):
    combined = fetch_all_official_rrb(official_hours) + fetch_freejobalert_railway(news_hours) + fetch_fresh_news_feeds(news_hours)
    # Prefer direct Official RRB (priority 1) and FreeJobAlert (priority 2) over secondary news blogs within the same freshness window!
    combined.sort(key=lambda x: (-x['priority'], x['dt_utc'].timestamp()), reverse=True)
    return combined


def update_live_cache(candidates):
    serializable = [
        {
            'uid': c['uid'],
            'kind': c['kind'],
            'cen': c['cen'],
            'category': c['category'],
            'headline': c['headline'],
            'source': c['source'],
            'link': c['link'],
            'published': c['published'],
            'dt_iso': c['dt_utc'].astimezone(IST).isoformat(),
        }
        for c in candidates[:25]
    ]
    LIVE_CACHE_FILE.write_text(json.dumps({'updated_at_ist': datetime.now(IST).isoformat(), 'notices': serializable}, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')


def run(dry_run=False, seed_only=False, max_posts=4, official_hours=48, news_hours=36):
    state = load_state()
    seen_uids = set(state.get('seen_notices', []))
    seen_fps = set(state.get('seen_notice_fps', []))

    candidates = gather_all_candidates(official_hours=official_hours, news_hours=news_hours)
    if not dry_run:
        update_live_cache(candidates)

    fresh = []
    batch_uids = set()
    batch_fps = set()
    for item in candidates:
        if item['uid'] in seen_uids or item['uid'] in batch_uids:
            continue
        # For news articles, deduplicate same-day identical topics; official zone PDFs stay unique
        if item['kind'] != 'official_rrb' and (item['event_fp'] in seen_fps or item['event_fp'] in batch_fps):
            continue
        fresh.append(item)
        batch_uids.add(item['uid'])
        if item['kind'] != 'official_rrb':
            batch_fps.add(item['event_fp'])

    if seed_only:
        for item in fresh:
            state.setdefault('seen_notices', []).append(item['uid'])
            state.setdefault('seen_notice_fps', []).append(item['event_fp'])
        save_state(state)
        print(f'SEEDED {len(fresh)} notices into state.json without posting.')
        return

    if not fresh:
        print('No new fresh (<=36h news / <=48h official) RRB notices found.')
        return

    to_post = fresh[:max_posts]
    target_chat = NOTICE_CHANNEL_ID
    print(f'Dispatching {len(to_post)} fresh notices (out of {len(fresh)} unseen, {len(candidates)} total) to chat={target_chat}...')

    for item in to_post:
        caption = format_caption(item)
        markup = build_notice_markup(item)

        if dry_run:
            print(
                f"DRY_RUN [{item['kind']}] ({item['published']}) {item['source']} -> {item['headline']}"
                + (f" | PDFs: {list(item['pdfs_map'].keys())}" if item['pdfs_map'] else '')
                + (f" | EXT: {item['ext_link'][:60]}" if item.get('ext_link') else '')
            )
            continue

        posted_via_photo = False
        if item['pdfs_map']:
            with tempfile.TemporaryDirectory() as td:
                dl_pdfs = download_official_pdfs(item['pdfs_map'], td, portal_url=item.get('portal_url') or f'{RRB_BASE}/chandigarh')
                if dl_pdfs:
                    preview_png = Path(td) / 'preview.png'
                    badge = f"CEN {item['cen']} • {item['published']}" if item['cen'] else item['published']
                    if render_pdf_preview_png(dl_pdfs[0][1], preview_png, badge):
                        send_photo(target_chat, str(preview_png), caption=caption, reply_markup=markup)
                        posted_via_photo = True
                    else:
                        send_message(target_chat, caption, reply_markup=markup)
                        posted_via_photo = True
                    # Attach actual official PDF document(s) right below the preview!
                    for lbl, pdf_path, _ in dl_pdfs:
                        doc_cap = f"📄 <b>Official Notice PDF ({html.escape(lbl)})</b> — {html.escape(item['headline'][:120])}"
                        send_document(target_chat, str(pdf_path), caption=doc_cap)

        if not posted_via_photo:
            send_message(target_chat, caption, reply_markup=markup)

        print('POSTED FRESH NOTICE:', item['headline'])
        state.setdefault('seen_notices', []).append(item['uid'])
        state.setdefault('seen_notice_fps', []).append(item['event_fp'])

    if not dry_run:
        save_state(state)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    parser.add_argument('--seed-only', action='store_true', help='Mark current candidates as seen without sending to Telegram')
    parser.add_argument('--max-posts', type=int, default=4)
    parser.add_argument('--official-hours', type=int, default=48)
    parser.add_argument('--news-hours', type=int, default=36)
    args = parser.parse_args()
    run(
        dry_run=args.dry_run,
        seed_only=args.seed_only,
        max_posts=args.max_posts,
        official_hours=args.official_hours,
        news_hours=args.news_hours,
    )
