/**
 * Pure-SVG Vector Diagram Engine for Maths Chapter 1:
 * Number System, Divisibility, HCF–LCM, Unit Digit / C9 & VBODMAS.
 * Works identically on Dark UI and Light Printable A4 PDF!
 */

function getPalette(theme = 'dark') {
  const dark = theme === 'dark';
  return {
    bg: dark ? '#070D1B' : '#ffffff',
    card: dark ? '#0F172A' : '#f8fafc',
    ink: dark ? '#F8FAFC' : '#0f172a',
    muted: dark ? '#CBD5E1' : '#334155',
    border: dark ? '#334155' : '#cbd5e1',
    teal: { fill: dark ? '#064E3B' : '#ecfdf5', stroke: dark ? '#14B8A6' : '#0d9488', text: dark ? '#5EEAD4' : '#0f766e' },
    blue: { fill: dark ? '#0C4A6E' : '#eff6ff', stroke: dark ? '#38BDF8' : '#2563eb', text: dark ? '#7DD3FC' : '#1d4ed8' },
    amber: { fill: dark ? '#78350F' : '#fffbeb', stroke: dark ? '#F59E0B' : '#d97706', text: dark ? '#FDE68A' : '#92400e' },
    purple: { fill: dark ? '#4C1D95' : '#faf5ff', stroke: dark ? '#A855F7' : '#9333ea', text: dark ? '#E9D5FF' : '#6b21a8' },
    rose: { fill: dark ? '#881337' : '#fff1f2', stroke: dark ? '#FB7185' : '#e11d48', text: dark ? '#FECDD3' : '#9f1239' },
    green: { fill: dark ? '#14532D' : '#f0fdf4', stroke: dark ? '#22C55E' : '#16a34a', text: dark ? '#86EFAC' : '#166534' },
    alpha: dark ? '0.42' : '1',
  };
}

export function renderMathsCh1DiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.alpha;

  if (key === 'ch1-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '1.1 संख्या वर्गीकरण' : '1.1 Number Tree', s: hi ? 'अभाज्य, परिमेय, √N नियम' : 'Primes, Co-Prime, p/q', c: p.teal },
      { x: 145, t: hi ? '1.2 विभाज्यता (2–99)' : '1.2 Divisibility', s: hi ? '8, 9, 11, 72, 88, 99' : 'Composite Splits', c: p.blue },
      { x: 280, t: hi ? '1.3 इकाई अंक व C9' : '1.3 Unit Digit & C9', s: hi ? 'चक्रियता + शेषफल' : 'Cyclicity + Remainders', c: p.amber },
      { x: 415, t: hi ? '1.4–1.5 HCF & LCM' : '1.4–1.5 HCF & LCM', s: hi ? 'भिन्न, घंटी व शेष केस' : 'Fractions & Remainder', c: p.green },
      { x: 550, t: hi ? '1.6–1.7 VBODMAS' : '1.6–1.7 Simplification', s: hi ? 'बार दशमलव + करणी' : 'Bar Decimal & Surds', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="m1Arr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="116" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11.2" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 1 रोडमैप: बेसिक से रेलवे CBT टॉपर (Complete Architecture)' : 'Chapter 1 Learning Map: Zero-to-Topper RRB CBT Engine'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="32" width="120" height="72" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.5"/>
          <text x="${n.x + 60}" y="58" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 60}" y="78" text-anchor="middle" font-size="8.6" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 121}" y1="68" x2="${n.x + 133}" y2="68" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#m1Arr_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'ch1-number-tree') {
    return `
      <svg viewBox="0 0 680 285" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="281" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12" font-weight="800" fill="${p.teal.text}">${hi ? 'वास्तविक संख्याओं का संपूर्ण वर्गीकरण वृक्ष (Number Classification Tree)' : 'Complete Real Number Classification Tree'}</text>
        <!-- Root -->
        <rect x="235" y="34" width="210" height="36" rx="8" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.6"/>
        <text x="340" y="51" text-anchor="middle" font-size="11" font-weight="800" fill="${p.ink}">${hi ? 'वास्तविक संख्याएँ (Real: R)' : 'Real Numbers (R)'}</text>
        <text x="340" y="64" text-anchor="middle" font-size="8.5" fill="${p.muted}">${hi ? 'संख्या रेखा पर हर मान (-∞ से +∞)' : 'Rational + Irrational on Number Line'}</text>
        <line x1="290" y1="70" x2="175" y2="96" stroke="${p.border}" stroke-width="1.5"/>
        <line x1="390" y1="70" x2="520" y2="96" stroke="${p.border}" stroke-width="1.5"/>
        <!-- Rational vs Irrational -->
        <rect x="55" y="96" width="245" height="44" rx="8" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="177" y="114" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.ink}">${hi ? 'परिमेय (Rational Q = p/q, q≠0)' : 'Rational Numbers (Q = p/q, q ≠ 0)'}</text>
        <text x="177" y="130" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'सांत व आवर्त दशमलव: 0, -5, 22/7, 0.333...' : 'Terminating or Repeating: 22/7, 0.3̅, -5, 0'}</text>

        <rect x="395" y="96" width="255" height="44" rx="8" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.5"/>
        <text x="522" y="114" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.ink}">${hi ? 'अपरिमेय (Irrational ≠ p/q)' : 'Irrational Numbers (≠ p/q)'}</text>
        <text x="522" y="130" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'असांत-अनावर्त: π, √2, √3, e, 0.101001...' : 'Non-terminating Non-repeating: π, √2, √3, e'}</text>

        <!-- Integers under Rational -->
        <line x1="177" y1="140" x2="177" y2="164" stroke="${p.border}" stroke-width="1.5"/>
        <rect x="45" y="164" width="265" height="38" rx="8" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="177" y="180" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.ink}">${hi ? 'पूर्णांक (Integers Z): ..., -2, -1, 0, 1, 2, ...' : 'Integers (Z): ..., -2, -1, 0, 1, 2, ...'}</text>
        <text x="177" y="194" text-anchor="middle" font-size="8.5" fill="${p.muted}">${hi ? 'शून्य (0) सम संख्या है; न धनात्मक न ऋणात्मक!' : 'Note: 0 is an EVEN integer (neither +ve nor -ve)'}</text>

        <!-- Whole & Natural -->
        <line x1="177" y1="202" x2="115" y2="225" stroke="${p.border}" stroke-width="1.4"/>
        <line x1="177" y1="202" x2="255" y2="225" stroke="${p.border}" stroke-width="1.4"/>
        <rect x="20" y="225" width="145" height="44" rx="8" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.4"/>
        <text x="92" y="242" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">${hi ? 'पूर्ण संख्या (Whole W)' : 'Whole Numbers (W)'}</text>
        <text x="92" y="257" text-anchor="middle" font-size="8.8" fill="${p.muted}">{ 0, 1, 2, 3, ... }</text>

        <rect x="180" y="225" width="160" height="44" rx="8" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="260" y="242" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">${hi ? 'प्राकृत संख्या (Natural N)' : 'Natural Numbers (N)'}</text>
        <text x="260" y="257" text-anchor="middle" font-size="8.8" fill="${p.muted}">{ 1, 2, 3, 4, ... }</text>

        <!-- Prime vs Composite Trap Box on Right Bottom -->
        <rect x="365" y="164" width="295" height="105" rx="9" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="512" y="182" text-anchor="middle" font-size="10" font-weight="800" fill="${p.amber.text}">${hi ? '🔥 रेलवे टॉपर तथ्य (Prime / Co-Prime Trap)' : '🔥 RRB Gold Rules (Prime & Co-Prime)'}</text>
        <text x="378" y="200" font-size="8.9" font-weight="700" fill="${p.ink}">${hi ? '• 1 न अभाज्य है न भाज्य (केवल 1 गुणनखंड)!' : '• 1 is NEITHER Prime NOR Composite!'}</text>
        <text x="378" y="216" font-size="8.9" font-weight="700" fill="${p.ink}">${hi ? '• 2 सबसे छोटी व एकमात्र सम अभाज्य संख्या है!' : '• 2 is ONLY Even Prime (smallest prime)'}</text>
        <text x="378" y="232" font-size="8.9" font-weight="700" fill="${p.ink}">${hi ? '• 4 सबसे छोटी भाज्य (9 सबसे छोटी विषम भाज्य)!' : '• 4 = Smallest Composite | 9 = Smallest Odd Comp.'}</text>
        <text x="378" y="248" font-size="8.9" font-weight="700" fill="${p.ink}">${hi ? '• 1–100 में कुल 25 अभाज्य (1–50: 15, 51–100: 10)' : '• Primes 1–100: Total 25 (1–50: 15, 51–100: 10)'}</text>
        <text x="378" y="263" font-size="8.9" font-weight="700" fill="${p.teal.text}">${hi ? '• सह-अभाज्य (Co-Prime): HCF = 1 (जैसे 8 व 15)' : '• Co-Prime Pair: HCF(a, b) = 1 (e.g. 8 & 15, 9 & 16)'}</text>
      </svg>`;
  }

  if (key === 'ch1-divisibility-map') {
    const cards = [
      { n: '2, 4, 8, 16', desc: hi ? 'अंतिम 1, 2, 3, 4 अंक देखें' : 'Check Last 1, 2, 3, 4 Digits', ex: '17688 -> 688/8=86', c: p.teal },
      { n: '3 & 9', desc: hi ? 'सभी अंकों का योग 3 या 9 से कटे' : 'Sum of Digits ÷ 3 or 9', ex: '285219 -> Sum=27 ÷ 9', c: p.blue },
      { n: '11 (Star)', desc: hi ? 'सम-विषम स्थानों के योग का अंतर = 0, 11...' : '|Odd - Even Place Sum| = 0, 11', ex: '(2+5+1)-(8+2+9) = -11', c: p.amber },
      { n: '72 (8 × 9)', desc: hi ? 'सह-अभाज्य जोड़े: 8 व 9 दोनों चेक करें' : 'Split Co-Prime: Test 8 & 9', ex: 'Last 3 digits ÷ 8 & Sum ÷ 9', c: p.purple },
      { n: '88 (8 × 11)', desc: hi ? '8 (अंतिम 3 अंक) व 11 (अंतर) दोनों!' : 'Test Last 3 (÷8) + Alt Sum (÷11)', ex: '17688 ÷ 24 -> Check 8 & 3', c: p.green },
      { n: '7, 13 & Osc.', desc: hi ? '7: अंतिम अंक×2 घटाएं | 1001 = 7×11×13' : '3-digit alt block diff | 1001=7·11·13', ex: 'xyzxyz always ÷ 7, 11, 13', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 218" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="214" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.amber.text}">${hi ? 'विभाज्यता मास्टर चार्ट (Divisibility & Composite Co-Prime Splitting Rule)' : 'Master Divisibility Rules & Co-Prime Splitting (72, 88, 99, 24)'}</text>
        ${cards.map((card, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 14 + col * 222;
          const y = 34 + row * 86;
          return `
            <rect x="${x}" y="${y}" width="208" height="76" rx="9" fill="${card.c.fill}" fill-opacity="${a}" stroke="${card.c.stroke}" stroke-width="1.5"/>
            <text x="${x + 12}" y="${y + 21}" font-size="11.5" font-weight="900" fill="${p.ink}">${card.n}</text>
            <text x="${x + 12}" y="${y + 40}" font-size="9" font-weight="700" fill="${p.muted}">${card.desc}</text>
            <rect x="${x + 10}" y="${y + 48}" width="188" height="20" rx="5" fill="${p.bg}" stroke="${card.c.stroke}" stroke-opacity="0.4"/>
            <text x="${x + 16}" y="${y + 61}" font-size="8.6" font-weight="700" fill="${card.c.text}">${card.ex}</text>
          `;
        }).join('')}
      </svg>`;
  }

  if (key === 'ch1-vbodmas-ladder') {
    const steps = [
      { k: 'V', n: hi ? 'रेखा कोष्ठक (Vinculum)' : 'Vinculum Bar', ex: '8 - 5̄ -> (8-5) FIRST!', c: p.rose },
      { k: 'B', n: hi ? 'कोष्ठक: ( ) → { } → [ ]' : 'Brackets: ( ) -> { } -> [ ]', ex: 'Inner -> Curly -> Square', c: p.amber },
      { k: 'O', n: hi ? 'का (Of) = पहले गुणा!' : 'Of (का / Order xⁿ)', ex: '12 ÷ 3 of 2 = 12 ÷ 6 = 2', c: p.purple },
      { k: 'D/M', n: hi ? 'भाग ÷ फिर गुणा × (Left→Right)' : 'Div ÷ then Mul × (L -> R)', ex: '18 ÷ 3 × 2 = 6 × 2 = 12', c: p.blue },
      { k: 'A/S', n: hi ? 'जोड़ + व घटाव - (अंत में)' : 'Add + then Subtract -', ex: 'Collect +ve then -ve', c: p.teal },
    ];
    return `
      <svg viewBox="0 0 680 156" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="152" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.blue.text}">${hi ? 'VBODMAS प्राथमिकता सीढ़ी (सावधान: "का/Of" हमेशा ÷ से पहले हल होता है!)' : 'VBODMAS Priority Staircase ("Of" binds tighter than Division ÷!)'}</text>
        ${steps.map((s, i) => {
          const x = 12 + i * 133;
          return `
            <rect x="${x}" y="35" width="124" height="106" rx="9" fill="${s.c.fill}" fill-opacity="${a}" stroke="${s.c.stroke}" stroke-width="1.5"/>
            <circle cx="${x + 62}" cy="56" r="14" fill="${p.bg}" stroke="${s.c.stroke}" stroke-width="1.6"/>
            <text x="${x + 62}" y="60" text-anchor="middle" font-size="11" font-weight="900" fill="${s.c.text}">${s.k}</text>
            <text x="${x + 62}" y="84" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.ink}">${s.n}</text>
            <text x="${x + 62}" y="106" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.muted}">${s.ex}</text>
            <text x="${x + 62}" y="129" text-anchor="middle" font-size="8.2" font-weight="800" fill="${s.c.text}">${hi ? `चरण ${i + 1}` : `Priority ${i + 1}`}</text>
          `;
        }).join('')}
      </svg>`;
  }

  if (key === 'ch1-hcf-lcm-map') {
    return `
      <svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="206" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.green.text}">${hi ? 'HCF बनाम LCM — वेन आरेख, भिन्न सूत्र एवं 4 प्रमुख शेषफल केस' : 'HCF vs LCM Venn Diagram, Fraction Rules & 4 Classic Remainder Cases'}</text>
        <!-- Left Venn: e.g. 12 and 18 -->
        <rect x="14" y="34" width="235" height="162" rx="10" fill="${p.card}" stroke="${p.border}"/>
        <text x="131" y="52" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.ink}">${hi ? 'वेन चित्र: 12 = 2²×3, 18 = 2×3²' : 'Prime Venn: A=12 (2·2·3), B=18 (2·3·3)'}</text>
        <circle cx="96" cy="106" r="44" fill="${p.blue.fill}" fill-opacity="0.45" stroke="${p.blue.stroke}" stroke-width="1.8"/>
        <circle cx="166" cy="106" r="44" fill="${p.amber.fill}" fill-opacity="0.45" stroke="${p.amber.stroke}" stroke-width="1.8"/>
        <text x="72" y="109" text-anchor="middle" font-size="13" font-weight="900" fill="${p.blue.text}">2</text>
        <text x="131" y="109" text-anchor="middle" font-size="12" font-weight="900" fill="${p.green.text}">2 × 3</text>
        <text x="190" y="109" text-anchor="middle" font-size="13" font-weight="900" fill="${p.amber.text}">3</text>
        <text x="131" y="168" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.green.text}">HCF (Overlap) = 2×3 = 6</text>
        <text x="131" y="185" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.blue.text}">LCM (Total Union) = 2×6×3 = 36</text>

        <!-- Right Cheat Cases -->
        <rect x="262" y="34" width="404" height="162" rx="10" fill="${p.teal.fill}" fill-opacity="0.22" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="276" y="54" font-size="10.2" font-weight="800" fill="${p.teal.text}">${hi ? '🎯 4 सूत्र जिनसे हर RRB HCF-LCM प्रश्न 10 सेकंड में हल होता है:' : '🎯 4 Golden RRB HCF–LCM Formulas:'}</text>
        <text x="276" y="76" font-size="9.2" font-weight="700" fill="${p.ink}">1. A × B = HCF × LCM   |   ${hi ? 'अनुपात' : 'Ratio'} a:b -> Nos = Ha, Hb; LCM = Hab</text>
        <text x="276" y="99" font-size="9.2" font-weight="700" fill="${p.ink}">2. ${hi ? 'भिन्न' : 'Fraction'}: HCF = HCF(Num)/LCM(Den) | LCM = LCM(Num)/HCF(Den)</text>
        <text x="276" y="122" font-size="9.2" font-weight="700" fill="${p.ink}">3. ${hi ? 'समान शेष (अज्ञात)' : 'Same Unknown Rem'} (x,y,z) -> HCF(|x-y|, |y-z|, |z-x|)</text>
        <text x="276" y="145" font-size="9.2" font-weight="700" fill="${p.ink}">4. ${hi ? 'अलग-अलग शेष r1, r2...' : 'Fixed Diff k = d - r'} -> ${hi ? 'छोटी संख्या' : 'Number'} = LCM(d1, d2, ...) - k</text>
        <text x="276" y="172" font-size="9" font-weight="800" fill="${p.amber.text}">${hi ? '⚠️ दशमलव (1.3, 7.6, 0.13): पहले ×100 से पूर्णांक (130, 760, 13) बनाएं!' : '⚠️ Decimals (1.3, 7.6, 0.13): Equalize decimal places (×100) -> Solve -> ÷100!'}</text>
      </svg>`;
  }

  // Unit Digit & C9
  return `
    <svg viewBox="0 0 680 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
      <rect x="2" y="2" width="676" height="181" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
      <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.purple.text}">${hi ? 'इकाई अंक चक्र (Unit Digit Cyclicity) + डिजिटल सम (C9 = 3-सेकंड चेक)' : 'Unit Digit Cyclicity Groups + Digital Sum (C9 Mod-9 Check)'}</text>
      <rect x="14" y="34" width="205" height="136" rx="9" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.4"/>
      <text x="116" y="54" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.teal.text}">Cycle = 1 (No Change)</text>
      <text x="116" y="80" text-anchor="middle" font-size="18" font-weight="900" fill="${p.ink}">0, 1, 5, 6</text>
      <text x="116" y="106" text-anchor="middle" font-size="9" fill="${p.muted}">${hi ? 'घात (n ≥ 1) कुछ भी हो,' : 'For ANY power n ≥ 1,'}</text>
      <text x="116" y="122" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">${hi ? 'इकाई अंक वही रहता है!' : 'Unit digit stays SAME!'}</text>
      <text x="116" y="146" text-anchor="middle" font-size="8.6" fill="${p.teal.text}">e.g. (2025)⁹⁹ -> 5</text>

      <rect x="235" y="34" width="210" height="136" rx="9" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
      <text x="340" y="54" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.amber.text}">Cycle = 2 (Odd / Even)</text>
      <text x="340" y="80" text-anchor="middle" font-size="18" font-weight="900" fill="${p.ink}">4 &amp; 9</text>
      <text x="340" y="106" text-anchor="middle" font-size="9" font-weight="700" fill="${p.ink}">4^Odd = 4  |  4^Even = 6</text>
      <text x="340" y="124" text-anchor="middle" font-size="9" font-weight="700" fill="${p.ink}">9^Odd = 9  |  9^Even = 1</text>
      <text x="340" y="148" text-anchor="middle" font-size="8.6" fill="${p.amber.text}">${hi ? 'सिर्फ घात सम/विषम देखें!' : 'Only check Power Odd vs Even!'}</text>

      <rect x="461" y="34" width="205" height="136" rx="9" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
      <text x="563" y="54" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.blue.text}">Cycle = 4 (Divide n by 4)</text>
      <text x="563" y="80" text-anchor="middle" font-size="18" font-weight="900" fill="${p.ink}">2, 3, 7, 8</text>
      <text x="563" y="106" text-anchor="middle" font-size="9" fill="${p.muted}">${hi ? 'अंतिम 2 अंकों को 4 से भाग दें:' : 'Divide last 2 digits of n by 4:'}</text>
      <text x="563" y="123" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">${hi ? 'शेष r=0 हो तो घात 4 लें!' : 'If remainder = 0, use power 4!'}</text>
      <text x="563" y="146" text-anchor="middle" font-size="8.6" fill="${p.blue.text}">7^2025 -> 25÷4 r=1 -> 7¹ = 7</text>
    </svg>`;
}
