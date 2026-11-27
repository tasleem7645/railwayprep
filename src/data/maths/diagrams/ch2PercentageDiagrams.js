/**
 * Pure-SVG Vector Diagram Engine for Maths Chapter 2: Percentage (%)
 * Smart Board Crisp Edition — Devanagari Hindi + English Math Terms, Zero Text Clipping.
 */

function getPalette(theme = 'dark') {
  const dark = theme === 'dark';
  return {
    bg: dark ? '#070E1C' : '#ffffff',
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

export function renderMathsCh2DiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.alpha;

  if (key === 'ch2-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '2.1 भिन्न ↔ %' : '2.1 Fraction ↔ %', s: '1/2..1/16 + Base', c: p.teal },
      { x: 145, t: hi ? '2.2 AB नियम' : '2.2 AB Rule', s: hi ? 'कीमत × खपत = स्थिर' : 'Price × Qty = Const', c: p.blue },
      { x: 280, t: hi ? '2.3 क्रमिक %' : '2.3 Successive %', s: hi ? 'a+b+ab/100 व रेश्यो' : 'Formula + Chain', c: p.amber },
      { x: 415, t: hi ? '2.4 आय व शेष' : '2.4 Income/Save', s: hi ? 'भारित व एलिगेशन' : 'Weighted + Allig', c: p.green },
      { x: 550, t: hi ? '2.5–2.7 परीक्षा/चुनाव' : '2.5–2.7 Exam/Vote', s: hi ? 'अंक, वेन, मिश्रण' : 'Marks, Venn, Mix', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 116" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="m2Arr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="112" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 2: प्रतिशत (%) स्मार्ट बोर्ड रोडमैप (टैप करके सीधे मॉड्यूल खोलें)' : 'Ch 2: Percentage (%) Complete Smart Board Roadmap'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="31" width="120" height="70" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.5"/>
          <text x="${n.x + 60}" y="55" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 60}" y="76" text-anchor="middle" font-size="8.2" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 121}" y1="66" x2="${n.x + 133}" y2="66" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#m2Arr_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'ch2-fraction-wheel') {
    const items = [
      { f: '1/2', pct: '50%', c: p.teal },
      { f: '1/3', pct: '33.33%', c: p.teal },
      { f: '1/4', pct: '25%', c: p.teal },
      { f: '1/5', pct: '20%', c: p.teal },
      { f: '1/6', pct: '16⅔%', c: p.blue },
      { f: '1/7', pct: '14.28%', c: p.blue },
      { f: '1/8', pct: '12.5%', c: p.blue },
      { f: '1/9', pct: '11.11%', c: p.blue },
      { f: '1/11', pct: '9.09%', c: p.amber },
      { f: '1/12', pct: '8⅓%', c: p.amber },
      { f: '3/8', pct: '37.5%', c: p.purple },
      { f: '5/8', pct: '62.5%', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 186" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="182" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.teal.text}">${hi ? 'स्वर्णिम भिन्न ↔ प्रतिशत चार्ट (बिना पेन उठाए 2-सेकंड गणना)' : 'Golden Fraction ↔ Percentage Chart (Mental Speed Key)'}</text>
        ${items.map((it, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const x = 14 + col * 165;
          const y = 33 + row * 46;
          return `
            <rect x="${x}" y="${y}" width="154" height="38" rx="8" fill="${it.c.fill}" fill-opacity="${a}" stroke="${it.c.stroke}" stroke-width="1.3"/>
            <text x="${x + 42}" y="${y + 24}" text-anchor="middle" font-size="12.5" font-weight="900" fill="${p.ink}">${it.f}</text>
            <text x="${x + 74}" y="${y + 23}" text-anchor="middle" font-size="11" font-weight="800" fill="${it.c.text}">=</text>
            <text x="${x + 114}" y="${y + 24}" text-anchor="middle" font-size="11.5" font-weight="900" fill="${it.c.text}">${it.pct}</text>
          `;
        }).join('')}
      </svg>`;
  }

  if (key === 'ch2-ab-constant') {
    const pairs = [
      { up: '+25% (+1/4)', dn: '−20% (−1/5)', c: p.teal },
      { up: '+33⅓% (+1/3)', dn: '−25% (−1/4)', c: p.blue },
      { up: '+20% (+1/5)', dn: '−16⅔% (−1/6)', c: p.amber },
      { up: '+50% (+1/2)', dn: '−33⅓% (−1/3)', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 165" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="161" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber.text}">${hi ? 'AB स्थिर गुणनफल नियम (A × B = Constant) — 1-सेकंड संतुलन ट्रिक' : 'AB Constant Product Rule (A × B = Constant) — 1-Sec Balance Key'}</text>
        <rect x="14" y="32" width="652" height="32" rx="8" fill="${p.card}" stroke="${p.teal.stroke}" stroke-width="1.2"/>
        <text x="340" y="52" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.ink}">${hi ? 'यदि A में +x/y की वृद्धि ⇒ B में x/(x+y) की कमी  |  यदि A में −x/y की कमी ⇒ B में x/(y−x) की वृद्धि!' : 'If A rises by +x/y ⇒ B drops by x/(x+y)  |  If A drops by −x/y ⇒ B rises by x/(y−x)!'}</text>
        ${pairs.map((pr, i) => {
          const x = 14 + i * 165;
          return `
            <rect x="${x}" y="74" width="154" height="76" rx="9" fill="${pr.c.fill}" fill-opacity="${a}" stroke="${pr.c.stroke}" stroke-width="1.4"/>
            <text x="${x + 77}" y="97" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.green.text}">↑ ${pr.up}</text>
            <line x1="${x + 25}" y1="110" x2="${x + 129}" y2="110" stroke="${p.border}" stroke-width="1.2"/>
            <text x="${x + 77}" y="132" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.rose.text}">↓ ${pr.dn}</text>
          `;
        }).join('')}
      </svg>`;
  }

  if (key === 'ch2-successive-chain') {
    return `
      <svg viewBox="0 0 680 176" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="172" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.purple.text}">${hi ? 'क्रमिक परिवर्तन (Successive %) की 3 स्मार्ट बोर्ड विधियाँ' : '3 Smart Board Methods for Successive Percentage Change'}</text>
        <rect x="14" y="34" width="205" height="126" rx="9" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="116" y="53" text-anchor="middle" font-size="10" font-weight="800" fill="${p.teal.text}">${hi ? '1. सीधा सूत्र (2 क्रमिक)' : '1. Direct Formula (2 Steps)'}</text>
        <text x="116" y="79" text-anchor="middle" font-size="12" font-weight="900" fill="${p.ink}">a + b + (a·b)/100</text>
        <text x="116" y="103" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'कमी के लिए (−) चिह्न रखें' : 'Use (−) sign for decrease'}</text>
        <text x="116" y="128" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.teal.text}">उदा. +30%, −20% ⇒ +4%</text>

        <rect x="237" y="34" width="206" height="126" rx="9" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="340" y="53" text-anchor="middle" font-size="10" font-weight="800" fill="${p.amber.text}">${hi ? '2. रेश्यो चेन (3+ या भिन्न)' : '2. Ratio Chain (3+ / Mixed)'}</text>
        <text x="340" y="79" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.ink}">10→11 | 5→6 | 4→5</text>
        <text x="340" y="103" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'आमने-सामने काटें → गुणन' : 'Cross-cancel then multiply'}</text>
        <text x="340" y="128" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.amber.text}">+10%,+20%,+25% ⇒ 20→33 (+65%)</text>

        <rect x="461" y="34" width="205" height="126" rx="9" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.4"/>
        <text x="563" y="53" text-anchor="middle" font-size="10" font-weight="800" fill="${p.rose.text}">${hi ? '3. समान +x% व −x%' : '3. Equal +x% &amp; −x%'}</text>
        <text x="563" y="79" text-anchor="middle" font-size="13" font-weight="900" fill="${p.ink}">− (x² / 100)%</text>
        <text x="563" y="103" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'सदैव कमी / हानि होती है!' : 'ALWAYS a Net Decrease!'}</text>
        <text x="563" y="128" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.rose.text}">+30% &amp; −30% ⇒ −9%</text>
      </svg>`;
  }

  if (key === 'ch2-income-alligation') {
    return `
      <svg viewBox="0 0 680 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="181" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.green.text}">${hi ? 'आय–व्यय–बचत: "कुल %" बनाम "शेष का (Remaining)" व Alligation ट्रिक' : 'Income–Savings: Direct Sum vs "Remaining" Chain + Alligation Cross'}</text>

        <rect x="14" y="33" width="320" height="136" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="174" y="52" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.blue.text}">${hi ? 'केस A vs केस B (10 सेकंड अंतर पहचान)' : 'Type A (Direct) vs Type B ("Of Remaining")'}</text>
        <text x="26" y="75" font-size="8.7" font-weight="700" fill="${p.ink}">${hi ? '1. सीधा जोड़ (किराया 25%, भोजन 35%):' : '1. Direct Total (Rent 25%, Food 35%):'}</text>
        <text x="26" y="92" font-size="8.5" font-weight="700" fill="${p.teal.text}">${hi ? '   सीधे जोड़ें → 60% खर्च ⇒ 40% बचत!' : '   Add directly → 60% Spent ⇒ 40% Saved!'}</text>
        <line x1="26" y1="104" x2="322" y2="104" stroke="${p.border}" stroke-dasharray="3,3"/>
        <text x="26" y="124" font-size="8.7" font-weight="700" fill="${p.ink}">${hi ? '2. शेष का (10% व शेष का 50%):' : '2. Chain (10% then 50% of remaining):'}</text>
        <text x="26" y="142" font-size="8.5" font-weight="700" fill="${p.amber.text}">${hi ? '   गुणा चेन: I × 0.90 × 0.50 = शेष (45%)' : '   Multiply Leftovers: I × (9/10) × (1/2) = Left'}</text>

        <rect x="346" y="33" width="320" height="136" rx="10" fill="${p.teal.fill}" fill-opacity="0.22" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="506" y="52" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.teal.text}">${hi ? 'Alligation Cross (बचत % 4 सेकंड में)' : 'Alligation Cross (Find Savings % in 4 Sec)'}</text>
        <text x="410" y="76" text-anchor="middle" font-size="9.2" font-weight="900" fill="${p.blue.text}">Exp +16%</text>
        <text x="600" y="76" text-anchor="middle" font-size="9.2" font-weight="900" fill="${p.amber.text}">Sav +40%</text>
        <line x1="435" y1="84" x2="575" y2="128" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <line x1="575" y1="84" x2="435" y2="128" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <rect x="466" y="96" width="80" height="22" rx="6" fill="${p.bg}" stroke="${p.teal.stroke}"/>
        <text x="506" y="110" text-anchor="middle" font-size="9" font-weight="900" fill="${p.ink}">Inc +22%</text>
        <text x="410" y="142" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">40−22 = 18</text>
        <text x="506" y="142" text-anchor="middle" font-size="9" font-weight="900" fill="${p.teal.text}">Ratio 3 : 1</text>
        <text x="600" y="142" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">22−16 = 6</text>
        <text x="506" y="160" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.green.text}">${hi ? 'बचत = 1 / (3+1) = 25% (Group D PYQ!)' : 'Savings = 1 / (3+1) = 25% (Zero Algebra!)'}</text>
      </svg>`;
  }

  return `
    <svg viewBox="0 0 680 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
      <rect x="2" y="2" width="676" height="181" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
      <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.blue.text}">${hi ? 'परीक्षा पास-फेल स्केल, वेन आरेख व चुनाव मतदाता फ़नल' : 'Exam Pass Scoreline Ruler, Venn Sets &amp; Election Funnel'}</text>

      <rect x="14" y="33" width="320" height="136" rx="10" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
      <text x="174" y="52" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.amber.text}">${hi ? 'पास/फेल अंतर ट्रिक (Scoreline Ruler)' : 'Pass-Fail Gap Trick (Tech Gr-III Hot Type)'}</text>
      <line x1="36" y1="88" x2="312" y2="88" stroke="${p.teal.stroke}" stroke-width="3"/>
      <circle cx="80" cy="88" r="5" fill="${p.rose.stroke}"/>
      <circle cx="174" cy="88" r="6" fill="${p.amber.stroke}"/>
      <circle cx="272" cy="88" r="5" fill="${p.green.stroke}"/>
      <text x="80" y="74" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.rose.text}">120 (−78)</text>
      <text x="174" y="74" text-anchor="middle" font-size="8.5" font-weight="900" fill="${p.amber.text}">Pass 55%</text>
      <text x="272" y="74" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.green.text}">+b%</text>
      <text x="174" y="114" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.ink}">55% = 120 + 78 = 198 ⇒ Max = 360!</text>
      <text x="174" y="135" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.muted}">${hi ? 'यदि एक फेल (−) व दूसरा पास (+) ⇒ (% अंतर = अंक योग)' : 'One fails (−f), one passes (+p) ⇒ Δ% = (f + p)!'}</text>

      <rect x="346" y="33" width="320" height="136" rx="10" fill="${p.purple.fill}" fill-opacity="0.22" stroke="${p.purple.stroke}" stroke-width="1.4"/>
      <text x="506" y="52" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.purple.text}">${hi ? '2-सेट वेन आरेख व चुनाव मतदाता चेन' : '2-Set Venn Formula &amp; Election Funnel'}</text>
      <circle cx="465" cy="95" r="32" fill="${p.blue.fill}" fill-opacity="0.45" stroke="${p.blue.stroke}" stroke-width="1.6"/>
      <circle cx="515" cy="95" r="32" fill="${p.amber.fill}" fill-opacity="0.45" stroke="${p.amber.stroke}" stroke-width="1.6"/>
      <text x="448" y="98" text-anchor="middle" font-size="9" font-weight="900" fill="${p.blue.text}">A</text>
      <text x="490" y="98" text-anchor="middle" font-size="8.5" font-weight="900" fill="${p.ink}">A∩B</text>
      <text x="532" y="98" text-anchor="middle" font-size="9" font-weight="900" fill="${p.amber.text}">B</text>
      <text x="506" y="141" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.ink}">100% = Pass(A) + Pass(B) − Both + Fail_Both</text>
      <text x="506" y="158" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.teal.text}">${hi ? 'चुनाव अंतर = (विजेता% − हारने वाला%) × वैध मत' : 'Election Margin = (Winner% − Loser%) × Valid Votes'}</text>
    </svg>`;
}
