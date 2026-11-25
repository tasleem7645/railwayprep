"""Daily Morning GK/Science Capsules, Branded Formula Image Cards, and Sunday Mega Challenges."""

import argparse
import html
import tempfile
from pathlib import Path

from tg_client import (
    CHANNEL_ID,
    REPO_ROOT,
    SITE_URL,
    load_state,
    save_state,
    send_message,
    send_photo,
)

CAPSULES = [
    {
        'title': '⚡ Physics SI Units & Measuring Instruments (Most Asked in RRB ALP/Group D)',
        'points': [
            '<b>Resistance (प्रतिरोध):</b> Ohm (Ω) | <b>Resistivity:</b> Ohm-metre (Ω·m)',
            '<b>Electric Power (शक्ति):</b> Watt (J/s) | <b>Commercial Energy:</b> kWh (1 Unit = 3.6×10⁶ J)',
            '<b>Luminous Intensity:</b> Candela (cd) | <b>Magnetic Flux:</b> Weber (Wb)',
            '<b>Ammeter:</b> Current (Series me) | <b>Voltmeter:</b> Voltage (Parallel me)',
            '<b>Hydrometer:</b> Relative Density | <b>Hygrometer:</b> Atmospheric Humidity',
        ],
    },
    {
        'title': '🧪 Important Chemical Formulas & Common Names',
        'points': [
            '<b>Baking Soda:</b> NaHCO₃ (Sodium Bicarbonate — antacid & fire extinguisher)',
            '<b>Washing Soda:</b> Na₂CO₃·10H₂O (Sodium Carbonate Decahydrate)',
            '<b>Bleaching Powder:</b> CaOCl₂ (Calcium Oxychloride)',
            '<b>Plaster of Paris (POP):</b> CaSO₄·½H₂O | <b>Gypsum:</b> CaSO₄·2H₂O',
            '<b>Laughing Gas:</b> N₂O (Nitrous Oxide) | <b>Quicklime:</b> CaO',
        ],
    },
    {
        'title': '🚂 Indian Railway Static GK (Top Exam Facts)',
        'points': [
            '<b>Total Railway Zones:</b> 18+ (South Coast Railway HQ: Visakhapatnam)',
            '<b>First Train in India:</b> 16 April 1853, Mumbai (Bori Bunder) to Thane (34 km)',
            '<b>Longest Railway Platform:</b> Hubballi (SSS Hubballi Jn, Karnataka — 1,507 m)',
            '<b>National Rail Museum:</b> New Delhi | <b>Railway Staff College (NAIR):</b> Vadodara',
            '<b>Gauge Width:</b> Broad Gauge = 1.676 m | Meter Gauge = 1.000 m',
        ],
    },
    {
        'title': '🩺 Vitamins & Deficiency Diseases (Biology High-Yield)',
        'points': [
            '<b>Vitamin A (Retinol):</b> Night Blindness (रतौंधी) & Xerophthalmia',
            '<b>Vitamin B1 (Thiamine):</b> Beri-Beri | <b>B12 (Cobalamin):</b> Pernicious Anemia (Cobalt metal)',
            '<b>Vitamin C (Ascorbic Acid):</b> Scurvy (मसूड़ों से खून) — Water Soluble',
            '<b>Vitamin D (Calciferol):</b> Rickets (बच्चों में) & Osteomalacia (बड़ों में)',
            '<b>Vitamin K (Phylloquinone):</b> Blood Clotting failure (रक्त का थक्का न जमना)',
        ],
    },
    {
        'title': '📐 Mensuration & Train Speed Shortcuts (Math Revision)',
        'points': [
            '<b>km/h → m/s:</b> × (5/18) | <b>m/s → km/h:</b> × (18/5)',
            '<b>Same Direction Crossing:</b> Relative Speed = |S₁ - S₂|',
            '<b>Average Speed (Equal Distance):</b> 2·S₁·S₂ / (S₁ + S₂)',
            '<b>Cylinder Volume:</b> πr²h | <b>Cone Volume:</b> ⅓πr²h | <b>Sphere:</b> ⁴⁄₃πr³',
            '<b>Net % Change (a% & b%):</b> a + b + (a×b)/100',
        ],
    },
    {
        'title': '📜 Indian Constitution Articles Frequently Asked in RRB',
        'points': [
            '<b>Article 14–18:</b> Right to Equality | <b>Art 17:</b> Abolition of Untouchability',
            '<b>Article 21A:</b> Free & Compulsory Education (86th Amendment, 2002)',
            '<b>Article 32:</b> Constitutional Remedies (Heart & Soul of Constitution)',
            '<b>Article 51A:</b> Fundamental Duties (Added by 42nd Amendment, Swaran Singh Committee)',
            '<b>Article 110:</b> Money Bill (Speaker certifies) | <b>Art 324:</b> Election Commission',
        ],
    },
]

FORMULA_CARDS = [
    {
        'tag': 'PHYSICS FORMULA CARD',
        'title': "Ohm's Law, Resistance & Power",
        'lines': [
            '1. V = I x R   (Potential Difference = Current x Resistance)',
            '2. R = rho x (L / A)   (Stretch n times => R_new = n^2 x R)',
            '3. Series Req = R1 + R2 + R3  (Current I same)',
            '4. Parallel 1/Req = 1/R1 + 1/R2  (Voltage V same)',
            '5. Power P = V x I = I^2 x R = V^2 / R',
            '6. Heat H = I^2 x R x t  (Joules Law of Heating)',
            '7. 1 Unit (1 kWh) = 3.6 x 10^6 Joules',
        ],
        'footer': 'Practice 50+ Electricity PYQs Free -> railwayprep.com/#pyq-explorer',
    },
    {
        'tag': 'MATHS FORMULA CARD',
        'title': 'Percentage, Profit-Loss & SI / CI',
        'lines': [
            '1. Profit% = (Profit / CP) x 100',
            '2. SP = MP x (100 - Discount%) / 100',
            '3. MP / CP = (100 + Profit%) / (100 - Discount%)',
            '4. Successive % = x + y + (xy / 100)',
            '5. SI = (P x R x T) / 100',
            '6. 2-Yr CI - SI Difference = P x (R / 100)^2',
            '7. 3-Yr CI - SI Diff = P x (R/100)^2 x (3 + R/100)',
        ],
        'footer': 'Attempt Pure Maths CBT Sectionals -> railwayprep.com/#mock-tests',
    },
    {
        'tag': 'PHYSICS OPTICS CARD',
        'title': 'Mirrors, Lenses & Sign Convention',
        'lines': [
            '1. Mirror Formula:  1/f = 1/v + 1/u   (Magnification m = -v/u)',
            '2. Lens Formula:    1/f = 1/v - 1/u   (Magnification m = +v/u)',
            '3. Focal Length:    f = R / 2  (Concave f = -ve, Convex f = +ve)',
            '4. Lens Power (D):  P = 1 / f(in meters)  [Unit: Dioptre]',
            '5. Myopia (Near):   Concave Lens  | Hypermetropia: Convex Lens',
            '6. Snell Law:       n = sin(i) / sin(r) = c / v',
        ],
        'footer': 'Solve Light & Optics RRB ALP PYQs -> railwayprep.com/#pyq-explorer',
    },
    {
        'tag': 'TRIGONOMETRY CARD',
        'title': 'Identities & Value Table Shortcut',
        'lines': [
            '1. sin^2(A) + cos^2(A) = 1',
            '2. sec^2(A) - tan^2(A) = 1   => (secA + tanA) = 1 / (secA - tanA)',
            '3. cosec^2(A) - cot^2(A) = 1 => (cosecA + cotA) = 1 / (cosecA - cotA)',
            '4. Max/Min of a*sinA + b*cosA = +/- sqrt(a^2 + b^2)',
            '5. If A + B = 90 deg: sinA = cosB, tanA*tanB = 1',
            '6. Height & Distance: 30-60-90 sides = 1 : sqrt(3) : 2',
        ],
        'footer': 'Trigonometry PYQ Quiz (10 Qs) -> railwayprep.com/#pyq-explorer',
    },
]


def render_card_png(card, out_path):
    from PIL import Image, ImageDraw, ImageFont

    W, H = 1080, 1080
    img = Image.new('RGB', (W, H), '#070B18')
    draw = ImageDraw.Draw(img)

    # Outer accent border & card surface
    draw.rounded_rectangle([36, 36, W - 36, H - 36], radius=40, fill='#0D1426', outline='#14B8A6', width=4)
    draw.rounded_rectangle([72, 72, 460, 130], radius=18, fill='#0F766E')

    try:
        font_tag = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 26)
        font_title = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 44)
        font_line = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf', 28)
        font_foot = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 25)
    except Exception:
        font_tag = ImageFont.load_default()
        font_title = font_tag
        font_line = font_tag
        font_foot = font_tag

    draw.text((96, 86), card['tag'], fill='#FFFFFF', font=font_tag)
    draw.text((W - 360, 86), 'RailwayPrep PRO', fill='#FBBF24', font=font_tag)

    draw.text((76, 175), card['title'], fill='#FFFFFF', font=font_title)
    draw.line([76, 250, W - 76, 250], fill='#1E293B', width=3)

    y = 290
    for ln in card['lines']:
        draw.rounded_rectangle([72, y - 10, W - 72, y + 66], radius=16, fill='#111B33', outline='#1E293B', width=2)
        draw.text((96, y + 12), ln, fill='#E2E8F0', font=font_line)
        y += 96

    draw.rounded_rectangle([72, H - 148, W - 72, H - 72], radius=20, fill='#134E4A', outline='#2DD4BF', width=2)
    draw.text((96, H - 124), card['footer'], fill='#99F6E4', font=font_foot)
    img.save(out_path, format='PNG')


def post_capsule(state, dry_run=False):
    idx = state.get('capsule_index', 0) % len(CAPSULES)
    cap = CAPSULES[idx]
    msg = (
        f"📚 <b>{cap['title']}</b>\n\n"
        + '\n'.join(f"• {pt}" for pt in cap['points'])
        + "\n\n🔖 <i>Save / Forward this capsule for quick exam revision!</i>"
    )
    markup = {
        'inline_keyboard': [
            [
                {'text': '⚡ Play Daily Rapid Quiz', 'url': f'{SITE_URL}/?utm_source=tg_capsule#daily-quiz'},
                {'text': '🔍 PYQ Explorer', 'url': f'{SITE_URL}/?utm_source=tg_capsule#pyq-explorer'},
            ]
        ]
    }
    if dry_run:
        print('DRY_RUN CAPSULE:', cap['title'])
        return
    send_message(CHANNEL_ID, msg, reply_markup=markup)
    state['capsule_index'] = (idx + 1) % len(CAPSULES)
    save_state(state)
    print('POSTED CAPSULE:', cap['title'])


def post_formula_card(state, dry_run=False):
    idx = state.get('card_index', 0) % len(FORMULA_CARDS)
    card = FORMULA_CARDS[idx]
    caption = (
        f"🧠 <b>{html.escape(card['title'])}</b> ({html.escape(card['tag'])})\n\n"
        f"👉 Is topic ke official Railway PYQs solve karne ke liye niche click karein!\n"
        f"💬 Doubts: @RailwayPrepDiscuss"
    )
    markup = {
        'inline_keyboard': [
            [
                {'text': '🔍 Practice Related PYQs', 'url': f'{SITE_URL}/?utm_source=tg_card#pyq-explorer'},
                {'text': '🚀 Free CBT Mock', 'url': f'{SITE_URL}/?utm_source=tg_card#mock-tests'},
            ]
        ]
    }
    if dry_run:
        print('DRY_RUN CARD:', card['title'])
        return
    try:
        with tempfile.NamedTemporaryFile(suffix='.png') as tmp:
            render_card_png(card, tmp.name)
            send_photo(CHANNEL_ID, tmp.name, caption=caption, reply_markup=markup)
    except ImportError:
        # Clean text fallback if Pillow is unavailable
        text = (
            f"📌 <b>{html.escape(card['tag'])} — {html.escape(card['title'])}</b>\n\n"
            + '\n'.join(f"<code>{html.escape(l)}</code>" for l in card['lines'])
            + f"\n\n🌐 {SITE_URL}/#pyq-explorer"
        )
        send_message(CHANNEL_ID, text, reply_markup=markup)
    state['card_index'] = (idx + 1) % len(FORMULA_CARDS)
    save_state(state)
    print('POSTED FORMULA CARD:', card['title'])


def post_sunday_challenge(dry_run=False):
    msg = (
        "🏆 <b>Sunday All-India RRB Live Shift Challenge!</b>\n\n"
        "Aaj apni All-India preparation check karein Official TCS iON pattern par:\n\n"
        "✅ <b>Free Official Shift-1 CBT Mock</b> (+1 / -0.33 Negative Marking)\n"
        "📊 <b>Live Shift Leaderboard & Category Cutoff Meter (UR/OBC/SC/ST)</b>\n"
        "📄 <b>Download Bilingual Solved Shift PDF</b>\n"
        "🏅 Test finish karne ke baad apna <b>Score Card</b> @RailwayPrepDiscuss me share karein!"
    )
    markup = {
        'inline_keyboard': [
            [{'text': '🔥 Start Sunday CBT Challenge Now', 'url': f'{SITE_URL}/?utm_source=tg_sunday#mock-tests'}],
            [
                {'text': '🔍 5-Level PYQ Bank', 'url': f'{SITE_URL}/?utm_source=tg_sunday#pyq-explorer'},
                {'text': '💬 Share Rank in Group', 'url': 'https://t.me/RailwayPrepDiscuss'},
            ],
        ]
    }
    if dry_run:
        print('DRY_RUN SUNDAY CHALLENGE READY')
        return
    send_message(CHANNEL_ID, msg, reply_markup=markup)
    print('POSTED SUNDAY CHALLENGE')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--mode', choices=['capsule', 'card', 'sunday'], required=True)
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()

    st = load_state()
    if args.mode == 'capsule':
        post_capsule(st, dry_run=args.dry_run)
    elif args.mode == 'card':
        post_formula_card(st, dry_run=args.dry_run)
    elif args.mode == 'sunday':
        post_sunday_challenge(dry_run=args.dry_run)
