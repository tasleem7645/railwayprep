/**
 * Pure-SVG Vector Diagram Plates for Class 10 Chemistry Ch 2: Acids, Bases & Salts (jhsc102)
 * Dual-theme calibrated: Dark Web UI (#070D1B) & Light A4 Print PDF (#ffffff).
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
    a: dark ? '0.42' : '1',
  };
}

export function renderC10Ch2AcidsDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.a;

  if (key === 'c10-ch2-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '2.1 सूचक व अभिक्रिया' : '2.1 Indicators & Rxns', s: hi ? 'लिटमस-हल्दी • H₂ व CO₂' : 'Litmus/Olfactory • H₂/CO₂', c: p.rose },
      { x: 145, t: hi ? '2.2 आयन सिद्धांत (aq)' : '2.2 Ions Only in Water', s: hi ? 'H₃O⁺/OH⁻ • तनुकरण ऊष्मा' : 'Dry HCl Fail • Dilution', c: p.blue },
      { x: 280, t: hi ? '2.3 pH स्केल (0–14)' : '2.3 pH Scale (0–14)', s: hi ? '1.2 जठर • 5.5 दाँत • 5.6 वर्षा' : 'Acid Rain 5.6 • Soil/Sting', c: p.green },
      { x: 415, t: hi ? '2.4 क्लोर-क्षार & सोडा' : '2.4 Chlor-Alkali & Soda', s: hi ? 'NaOH • Ca(ClO)₂ • NaHCO₃' : 'Brine -> Cl₂ + H₂ + NaOH', c: p.amber },
      { x: 550, t: hi ? '2.4.4 क्रिस्टल जल' : '2.4.4 Crystal Water', s: hi ? 'CuSO₄·5H₂O • जिप्सम-POP' : '10H₂O • 373K -> ½H₂O POP', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 122" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bm10c2_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="118" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 2 संपूर्ण मानचित्र — अम्ल, क्षारक एवं लवण (#1 रेलवे PYQ अध्याय!)' : 'Chapter 2 Blueprint — Acids, Bases & Salts (#1 Highest Railway PYQ Weightage!)'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="122" height="72" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 61}" y="60" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 61}" y="80" text-anchor="middle" font-size="8.2" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 123}" y1="70" x2="${n.x + 138}" y2="70" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#bm10c2_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'c10-ch2-reactions-flow') {
    return `
      <svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="296" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.rose.text}">${hi ? 'अम्ल व क्षारक की 4 अनिवार्य रासायनिक अभिक्रियाएँ + सूचक रंग चार्ट (क्रियाकलाप 2.1–2.9)' : 'Core Acid-Base Reactions + Litmus/Phenolphthalein/Methyl Orange Indicator Chart'}</text>

        <!-- Row 1: Indicator Strip -->
        <rect x="14" y="34" width="652" height="80" rx="10" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="340" y="51" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.purple.text}">${hi ? 'सूचक (Indicators) — अम्ल (Acid) बनाम क्षारक (Base) में रंग परिवर्तन' : 'Color Indicators — Acid vs Base Response Matrix (Table 2.1)'}</text>
        <text x="32" y="72" font-size="8.8" font-weight="700" fill="${p.ink}">• ${hi ? 'लिटमस (लिचेन/थैलोफाइटा):' : 'Litmus (Lichen):'}   <tspan fill="${p.rose.text}">${hi ? 'अम्ल -> नीला→लाल' : 'Acid: Blue→Red'}</tspan>   |   <tspan fill="${p.blue.text}">${hi ? 'क्षारक -> लाल→नीला' : 'Base: Red→Blue'}</tspan></text>
        <text x="32" y="89" font-size="8.8" font-weight="700" fill="${p.ink}">• ${hi ? 'फिनॉलफ्थेलिन / मेथिल ऑरेंज:' : 'Phenolphthalein / Methyl Orange:'}   <tspan fill="${p.amber.text}">Phenol: ${hi ? 'अम्ल रंगहीन, क्षारक गुलाबी' : 'Acid Colourless, Base PINK'}</tspan>  |  <tspan fill="${p.rose.text}">Methyl: ${hi ? 'अम्ल लाल, क्षारक पीला' : 'Acid RED, Base YELLOW'}</tspan></text>
        <text x="32" y="105" font-size="8.4" fill="${p.muted}">• ${hi ? 'हल्दी (Turmeric): क्षारक में भूरा-लाल | गंधीय सूचक (Olfactory): प्याज, वैनिला, लौंग तेल (क्षारक में गंध गायब!)' : 'Turmeric: Reddish-brown in soap/base | Olfactory: Onion, Vanilla essence, Clove oil'}</text>

        <!-- Row 2: 3 Key Reaction Boxes -->
        <rect x="14" y="124" width="210" height="106" rx="10" fill="${p.card}" stroke="${p.rose.stroke}" stroke-width="1.4"/>
        <text x="119" y="142" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.rose.text}">${hi ? '1. धातु से अभिक्रिया (H₂ पॉप ध्वनि)' : '1. + Active Metal -> Salt + H₂↑'}</text>
        <text x="119" y="160" text-anchor="middle" font-size="8.5" font-weight="700" fill="${p.ink}">Zn + H₂SO₄ -> ZnSO₄ + H₂↑</text>
        <text x="119" y="177" text-anchor="middle" font-size="8.5" font-weight="700" fill="${p.blue.text}">Zn + 2NaOH -> Na₂ZnO₂ + H₂↑</text>
        <text x="119" y="194" text-anchor="middle" font-size="8" fill="${p.muted}">${hi ? '(सोडियम जिंकेट; अम्ल की तरह क्षार से H₂!)' : '(Sodium zincate — Fig 2.1 Pop Test!)'}</text>
        <text x="119" y="216" text-anchor="middle" font-size="8" font-weight="700" fill="${p.amber.text}">${hi ? 'दही/खट्टे पदार्थ पीतल-ताँबे में न रखें!' : 'No curd in Brass/Copper vessels!'}</text>

        <rect x="235" y="124" width="210" height="106" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="340" y="142" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.blue.text}">${hi ? '2. कार्बोनेट + अम्ल -> CO₂ (चूना जल टेस्ट)' : '2. Carbonate/HCO₃⁻ -> Salt + CO₂↑'}</text>
        <text x="340" y="160" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.ink}">Na₂CO₃ / NaHCO₃ + HCl -> CO₂↑</text>
        <text x="340" y="177" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.teal.text}">Ca(OH)₂ + CO₂ -> CaCO₃↓ (दूधिया)</text>
        <text x="340" y="194" text-anchor="middle" font-size="8" fill="${p.muted}">${hi ? 'अधिक CO₂ -> Ca(HCO₃)₂ (रंगहीन विलेय!)' : 'Excess CO₂ -> Ca(HCO₃)₂ (soluble clear!)'}</text>
        <text x="340" y="216" text-anchor="middle" font-size="8" font-weight="700" fill="${p.amber.text}">${hi ? 'अंडे का कवच = CaCO₃ (अभ्यास 2)' : 'Egg-shell + HCl = CO₂ (Ex Q2)!'}</text>

        <rect x="456" y="124" width="210" height="106" rx="10" fill="${p.card}" stroke="${p.green.stroke}" stroke-width="1.4"/>
        <text x="561" y="142" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.green.text}">${hi ? '3. ऑक्साइड प्रकृति व उदासीनीकरण' : '3. Neutralization & Oxide Nature'}</text>
        <text x="561" y="160" text-anchor="middle" font-size="8.3" font-weight="700" fill="${p.ink}">H⁺(aq) + OH⁻(aq) -> H₂O(l)</text>
        <text x="561" y="177" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.teal.text}">${hi ? 'धात्विक ऑक्साइड = क्षारकीय (CuO+HCl नील-हरित)' : 'Metal Oxide = Basic (CuO -> CuCl₂ blue-green)'}</text>
        <text x="561" y="194" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.rose.text}">${hi ? 'अधात्विक ऑक्साइड = अम्लीय (CO₂, SO₂)' : 'Non-Metal Oxide = Acidic (CO₂ + Ca(OH)₂)'}</text>
        <text x="561" y="216" text-anchor="middle" font-size="8" font-weight="700" fill="${p.amber.text}">${hi ? 'तनुकरण: सदा अम्ल को धीरे-धीरे जल में डालें!' : 'Dilution: Always add ACID slowly to WATER!'}</text>

        <!-- Bottom strip: Act 2.8 & 2.9 -->
        <rect x="14" y="240" width="652" height="50" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="340" y="260" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.ink}">${hi ? 'जल अनिवार्य नियम (क्रियाकलाप 2.8–2.9): ग्लूकोज/एल्कोहल में H होने पर भी आयन (H₃O⁺) न बनने से न अम्ल, न विद्युत चालन!' : 'Water Rule (Act 2.8–2.9): Alcohol/Glucose contain H yet fail to form H⁺(aq) -> non-acidic & non-conducting!'}</text>
        <text x="340" y="278" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.amber.text}">${hi ? 'शुष्क HCl गैस + सूखा लिटमस = कोई रंग परिवर्तन नहीं | गीला लिटमस = लाल (जल में H₃O⁺ बनता है)!' : 'Dry HCl gas leaves Dry Litmus unchanged | Wet Litmus turns RED (H⁺ + H₂O -> H₃O⁺)!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch2-ph-scale-chart') {
    const stops = [
      { n: '0', c: '#b91c1c' }, { n: '1', c: '#dc2626' }, { n: '2', c: '#ea580c' }, { n: '3', c: '#f97316' },
      { n: '4', c: '#f59e0b' }, { n: '5', c: '#eab308' }, { n: '6', c: '#84cc16' }, { n: '7', c: '#16a34a' },
      { n: '8', c: '#14b8a6' }, { n: '9', c: '#06b6d4' }, { n: '10', c: '#0284c7' }, { n: '11', c: '#2563eb' },
      { n: '12', c: '#4f46e5' }, { n: '13', c: '#7c3aed' }, { n: '14', c: '#581c87' },
    ];
    return `
      <svg viewBox="0 0 680 285" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="281" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.green.text}">${hi ? 'चित्र 2.6 & 2.7 — pH स्केल (Potenz = शक्ति, 0–14), आयन सांद्रता एवं दैनिक परीक्षा मान' : 'Fig 2.6 & 2.7 — Universal pH Scale (0–14), H⁺/OH⁻ Variation & High-Yield Daily Reference Values'}</text>

        <!-- 15 pH colored tiles -->
        ${stops.map((s, i) => {
          const x = 18 + i * 43;
          return `<rect x="${x}" y="36" width="40" height="32" rx="5" fill="${s.c}"/>
                  <text x="${x + 20}" y="57" text-anchor="middle" font-size="11.5" font-weight="900" fill="#ffffff">${s.n}</text>`;
        }).join('')}

        <text x="18" y="84" font-size="8.6" font-weight="800" fill="${p.rose.text}">← ${hi ? 'बढ़ती अम्लता (उच्च H⁺ सांद्रता)' : 'Stronger Acid (High [H⁺])'}</text>
        <text x="339" y="84" text-anchor="middle" font-size="9" font-weight="800" fill="${p.green.text}">${hi ? 'उदासीन (7)' : 'Neutral (7.0)'}</text>
        <text x="662" y="84" text-anchor="end" font-size="8.6" font-weight="800" fill="${p.purple.text}">${hi ? 'बढ़ती क्षारीयता (उच्च OH⁻)' : 'Stronger Base (High [OH⁻])'} →</text>

        <!-- Key NCERT markers -->
        <rect x="14" y="96" width="320" height="176" rx="10" fill="${p.card}" stroke="${p.rose.stroke}" stroke-width="1.4"/>
        <text x="174" y="114" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.rose.text}">${hi ? 'NCERT चित्र 2.7 व जीवविज्ञान pH परीक्षा आँकड़े' : 'Exact NCERT Fig 2.7 & Biology pH Thresholds'}</text>
        <text x="26" y="134" font-size="8.7" font-weight="700" fill="${p.ink}">• <tspan fill="${p.rose.text}">1.2</tspan> : ${hi ? 'जठर रस (Gastric Juice / HCl — PYQ #21)' : 'Gastric Juice (~1.2, Stomach HCl)'}</text>
        <text x="26" y="152" font-size="8.7" font-weight="700" fill="${p.ink}">• <tspan fill="${p.amber.text}">2.2</tspan> : ${hi ? 'नींबू का रस (Citric acid)' : 'Lemon Juice (~2.2)'}</text>
        <text x="26" y="170" font-size="8.7" font-weight="700" fill="${p.ink}">• <tspan fill="${p.amber.text}">5.5</tspan> : ${hi ? 'मुँह < 5.5 -> दंत-क्षय (कैल्शियम हाइड्रोक्सीएपेटाइट)' : 'Mouth < 5.5 -> Tooth Enamel Decay'}</text>
        <text x="26" y="188" font-size="8.7" font-weight="700" fill="${p.ink}">• <tspan fill="${p.amber.text}">5.6</tspan> : ${hi ? 'वर्षा जल < 5.6 -> अम्लीय वर्षा (Acid Rain)' : 'Rain Water < 5.6 -> Acid Rain'}</text>
        <text x="26" y="206" font-size="8.7" font-weight="700" fill="${p.ink}">• <tspan fill="${p.green.text}">6.0 → &lt;6</tspan> : ${hi ? 'ताजा दूध (~6) -> दही (लैक्टिक अम्ल से घटा!)' : 'Fresh Milk (6) -> Curd (< 6 Lactic acid)'}</text>
        <text x="26" y="224" font-size="8.7" font-weight="700" fill="${p.ink}">• <tspan fill="${p.green.text}">7.0 / 7.4</tspan> : ${hi ? 'शुद्ध जल (7) | मानव शरीर (7.0–7.8) | रक्त (7.4)' : 'Pure Water (7) | Body (7.0–7.8) | Blood (7.4)'}</text>
        <text x="26" y="242" font-size="8.7" font-weight="700" fill="${p.ink}">• <tspan fill="${p.blue.text}">10 / 14</tspan> : ${hi ? 'मिल्क ऑफ मैग्नीशिया (10) | 1M NaOH (~14)' : 'Milk of Magnesia (10) | NaOH (~14)'}</text>
        <text x="26" y="261" font-size="8.2" fill="${p.muted}">${hi ? 'शुक्र ग्रह के घने बादल: H₂SO₄ (सल्फ्यूरिक अम्ल) से निर्मित!' : 'Venus clouds: Thick white-yellow H₂SO₄!'}</text>

        <!-- Salt Family pH Card -->
        <rect x="346" y="96" width="320" height="176" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="506" y="114" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.blue.text}">${hi ? 'भाग 2.4.2 — लवणों का pH एवं जनक अम्ल-क्षारक नियम' : 'Section 2.4.2 — Hydrolysis pH of Salts (Parent Strength)'}</text>
        <text x="358" y="138" font-size="8.8" font-weight="700" fill="${p.green.text}">${hi ? '1. प्रबल अम्ल + प्रबल क्षारक -> उदासीन लवण (pH = 7):' : '1. Strong Acid + Strong Base -> Neutral (pH = 7):'}</text>
        <text x="366" y="155" font-size="8.4" fill="${p.ink}">NaCl (HCl + NaOH), KNO₃, Na₂SO₄</text>

        <text x="358" y="180" font-size="8.8" font-weight="700" fill="${p.rose.text}">${hi ? '2. प्रबल अम्ल + दुर्बल क्षारक -> अम्लीय लवण (pH < 7):' : '2. Strong Acid + Weak Base -> Acidic (pH < 7):'}</text>
        <text x="366" y="197" font-size="8.4" fill="${p.ink}">NH₄Cl (HCl + NH₄OH), CuSO₄, AlCl₃, ZnSO₄</text>

        <text x="358" y="222" font-size="8.8" font-weight="700" fill="${p.purple.text}">${hi ? '3. दुर्बल अम्ल + प्रबल क्षारक -> क्षारीय लवण (pH > 7):' : '3. Weak Acid + Strong Base -> Basic Salt (pH > 7):'}</text>
        <text x="366" y="239" font-size="8.4" fill="${p.ink}">Na₂CO₃, NaHCO₃ (H₂CO₃+NaOH), CH₃COONa (pH~9!)</text>
        <text x="506" y="262" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.amber.text}">${hi ? 'ट्रिक: जो "प्रबल" (Strong) होगा, विलयन का स्वभाव उसी का!' : 'Rule: Stronger parent dominates the resulting Salt pH!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch2-chloralkali-salts') {
    return `
      <svg viewBox="0 0 680 305" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ca_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="301" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.amber.text}">${hi ? 'चित्र 2.8 — क्लोर-क्षार प्रक्रिया (NaCl से 5 औद्योगिक रसायन) & क्रिस्टलन का जल (POP/जिप्सम)' : 'Fig 2.8 — Chlor-Alkali Brine Tree (All 5 Industrial Chemicals) & Water of Crystallization'}</text>

        <!-- Brine Electrolysis Top -->
        <rect x="14" y="34" width="652" height="106" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="340" y="52" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.blue.text}">${hi ? 'क्लोरो-क्षार विद्युत अपघटन: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g)↑ + H₂(g)↑' : 'Chlor-Alkali Brine Electrolysis: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + Cl₂(g)↑ + H₂(g)↑'}</text>

        <rect x="26" y="62" width="196" height="68" rx="8" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.4"/>
        <text x="124" y="79" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.green.text}">${hi ? 'एनोड (+): Cl₂ गैस' : 'ANODE (+): Chlorine (Cl₂)'}</text>
        <text x="124" y="96" text-anchor="middle" font-size="8" fill="${p.ink}">${hi ? '• जल स्वच्छता, स्वीमिंग पूल, कीटनाशक' : '• Water sanitation, PVC, CFC'}</text>
        <text x="124" y="112" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.green.text}">${hi ? '• + सूखा बुझा चूना -> विरंजक चूर्ण!' : '• + Dry Ca(OH)₂ -> Bleaching Powder!'}</text>

        <rect x="242" y="62" width="196" height="68" rx="8" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.4"/>
        <text x="340" y="79" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.rose.text}">${hi ? 'कैथोड (−): H₂ गैस' : 'CATHODE (−): Hydrogen (H₂)'}</text>
        <text x="340" y="96" text-anchor="middle" font-size="8" fill="${p.ink}">${hi ? '• रॉकेट/स्वच्छ ईंधन (Fuels)' : '• Clean fuel, Margarine oils'}</text>
        <text x="340" y="112" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.rose.text}">${hi ? '• मार्गरीन, खाद हेतु अमोनिया (NH₃)' : '• Ammonia for Fertilizers!'}</text>

        <rect x="458" y="62" width="196" height="68" rx="8" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="556" y="79" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.purple.text}">${hi ? 'कैथोड के पास: NaOH घोल' : 'NEAR CATHODE: NaOH (aq)'}</text>
        <text x="556" y="96" text-anchor="middle" font-size="8" fill="${p.ink}">${hi ? '• धातु से ग्रीज हटाना, साबुन-अपमार्जक' : '• De-greasing metals, Soaps'}</text>
        <text x="556" y="112" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.purple.text}">${hi ? '• कागज निर्माण व कृत्रिम फाइबर' : '• Paper making & Artificial fibres'}</text>

        <!-- Bottom Left: Bleaching Powder, Baking Soda, Washing Soda -->
        <rect x="14" y="150" width="320" height="142" rx="10" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="174" y="168" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.amber.text}">${hi ? 'तीन सोडियम/कैल्शियम लवण (पृ. 33–35 समीकरण)' : 'Bleaching Powder, Baking Soda & Washing Soda Reactions'}</text>
        <text x="24" y="188" font-size="8.4" font-weight="700" fill="${p.teal.text}">${hi ? '1. विरंजक चूर्ण:' : '1. Bleaching:'} Ca(ClO)₂ (New 2026) / CaOCl₂</text>
        <text x="32" y="203" font-size="8" fill="${p.ink}">2Ca(OH)₂ + 2Cl₂ -> Ca(ClO)₂ + 2H₂O + CaCl₂</text>

        <text x="24" y="224" font-size="8.4" font-weight="700" fill="${p.amber.text}">${hi ? '2. बेकिंग सोडा:' : '2. Baking Soda:'} NaHCO₃ (NaCl+H₂O+CO₂+NH₃)</text>
        <text x="32" y="239" font-size="8" fill="${p.ink}">${hi ? '+ टार्टरिक अम्ल = बेकिंग पाउडर (स्पंजी केक) | सोडा-अम्ल अग्निशामक' : 'Heat -> Na₂CO₃ | + Tartaric acid = Baking powder (CO₂)'}</text>

        <text x="24" y="261" font-size="8.4" font-weight="700" fill="${p.blue.text}">${hi ? '3. धावन सोडा:' : '3. Washing Soda:'} Na₂CO₃ · 10H₂O</text>
        <text x="32" y="277" font-size="8" fill="${p.ink}">${hi ? 'पुनः क्रिस्टलीकरण | काँच-साबुन-कागज | स्थायी कठोरता हटाना' : 'Recrystallized Na₂CO₃ | Glass, Soap, Paper, Borax, Water softening'}</text>

        <!-- Bottom Right: Water of Crystallization & POP -->
        <rect x="346" y="150" width="320" height="142" rx="10" fill="${p.card}" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="506" y="168" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.teal.text}">${hi ? 'क्रिस्टलन का जल (2.4.4): नीला थोथा एवं जिप्सम ↔ POP' : 'Water of Crystallization (2.4.4): CuSO₄·5H₂O & Gypsum ↔ POP'}</text>
        <text x="358" y="191" font-size="8.6" font-weight="700" fill="${p.blue.text}">CuSO₄·5H₂O (${hi ? 'नीला क्रिस्टल' : 'Blue'}) <tspan fill="${p.rose.text}">—Δ→</tspan> CuSO₄ (${hi ? 'श्‍वेत' : 'White'}) + 5H₂O</text>
        <text x="358" y="207" font-size="8" fill="${p.muted}">${hi ? '2–3 बूँद जल डालने पर नीला रंग तुरंत लौट आता है (क्रियाकलाप 2.15)!' : 'Adding 2–3 water drops restores bright blue instantly (Act 2.15)!'}</text>

        <rect x="358" y="220" width="296" height="58" rx="8" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.3"/>
        <text x="506" y="238" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.ink}">${hi ? 'जिप्सम' : 'Gypsum'}: CaSO₄·2H₂O  ⇄  <tspan fill="${p.amber.text}">373 K (100°C)</tspan>  ⇄  CaSO₄·½H₂O (POP)</text>
        <text x="506" y="255" text-anchor="middle" font-size="8.1" font-weight="700" fill="${p.purple.text}">POP + 1½ H₂O -> ${hi ? 'कठोर जिप्सम (हड्डी जोड़ प्लास्टर, मूर्तियाँ)' : 'Hard solid Gypsum (Fracture cast!)'}</text>
        <text x="506" y="270" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? '(½ H₂O = दो CaSO₄ इकाइयों के बीच 1 जल अणु की साझेदारी!)' : '(Half H₂O = Two formula units of CaSO₄ share one H₂O!)'}</text>
      </svg>`;
  }

  return '';
}
