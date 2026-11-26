/**
 * Pure-SVG Vector Diagram Plates for Class 9 Physics Chapter 6: Effect of Forces on Motion (ihsc106)
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
    grid: dark ? '#1E293B' : '#e2e8f0',
    teal: { fill: dark ? '#064E3B' : '#ecfdf5', stroke: dark ? '#14B8A6' : '#0d9488', text: dark ? '#5EEAD4' : '#0f766e' },
    blue: { fill: dark ? '#0C4A6E' : '#eff6ff', stroke: dark ? '#38BDF8' : '#2563eb', text: dark ? '#7DD3FC' : '#1d4ed8' },
    amber: { fill: dark ? '#78350F' : '#fffbeb', stroke: dark ? '#F59E0B' : '#d97706', text: dark ? '#FDE68A' : '#92400e' },
    purple: { fill: dark ? '#4C1D95' : '#faf5ff', stroke: dark ? '#A855F7' : '#9333ea', text: dark ? '#E9D5FF' : '#6b21a8' },
    rose: { fill: dark ? '#881337' : '#fff1f2', stroke: dark ? '#FB7185' : '#e11d48', text: dark ? '#FECDD3' : '#9f1239' },
    green: { fill: dark ? '#14532D' : '#f0fdf4', stroke: dark ? '#22C55E' : '#16a34a', text: dark ? '#86EFAC' : '#166534' },
    a: dark ? '0.42' : '1',
  };
}

export function renderCh6ForcesDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.fillAlpha || p.a;

  if (key === 'ch6-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '6.1–6.3 बल व घर्षण' : '6.1–6.3 Force & Friction', s: hi ? 'संतुलित (0) बनाम असंतुलित' : 'Net Force & Spring N', c: p.teal },
      { x: 145, t: hi ? '6.4 प्रथम नियम (जड़त्व)' : '6.4 Newton I & Inertia', s: hi ? 'गैलीलियो • m ∝ जड़त्व' : 'Galileo • Zero a when F=0', c: p.blue },
      { x: 280, t: hi ? '6.5 द्वितीय नियम (F=ma)' : '6.5 Newton II (F = ma)', s: hi ? 'संवेग p=mv • आवेग F·t' : 'Momentum & Impulse', c: p.amber },
      { x: 415, t: hi ? '6.6 तृतीय नियम (युग्म)' : '6.6 Newton III Pairs', s: hi ? '2 अलग वस्तु • रॉकेट/नाव' : 'Diff Bodies • Recoil', c: p.rose },
      { x: 550, t: hi ? '6.7 जुड़ा निकाय & ग्राफ' : '6.7 Linked System & Ex', s: hi ? 'a=F/(m₁+m₂) • Fig 6.41' : 'Tension T • Ex 10–15', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 122" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bm6_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="118" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 6 संपूर्ण मानचित्र — गति पर बलों का प्रभाव (New NCERT 2026–27)' : 'Chapter 6 Complete Blueprint — Effect of Forces on Motion'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="122" height="72" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 61}" y="60" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 61}" y="80" text-anchor="middle" font-size="8.4" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 123}" y1="70" x2="${n.x + 138}" y2="70" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#bm6_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'balanced-vs-unbalanced-fbd') {
    return `
      <svg viewBox="0 0 680 315" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs>
          <marker id="arB_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.blue.stroke}"/></marker>
          <marker id="arR_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.rose.stroke}"/></marker>
          <marker id="arG_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.green.stroke}"/></marker>
          <marker id="arA_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker>
        </defs>
        <rect x="2" y="2" width="676" height="311" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12" font-weight="800" fill="${p.teal.text}">${hi ? 'चित्र 6.4, 6.6 & 6.11 — संतुलित बनाम असंतुलित बल एवं घर्षण मुक्त-पिंड आरेख (FBD)' : 'Fig 6.4, 6.6 & 6.11 — Balanced vs Unbalanced Forces & Surface Friction Free-Body Diagram'}</text>

        <!-- Panel 1: Balanced vs Unbalanced Forces (Ex 6.1) -->
        <rect x="14" y="34" width="320" height="128" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="174" y="52" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.blue.text}">${hi ? 'संतुलित (F_net = 0) बनाम असंतुलित बल (Ex 6.1)' : 'Balanced (F_net = 0) vs Unbalanced Net Force (Ex 6.1)'}</text>
        <!-- Balanced -->
        <text x="24" y="75" font-size="9" font-weight="700" fill="${p.green.text}">${hi ? 'संतुलित:' : 'Balanced:'}</text>
        <line x1="128" y1="73" x2="92" y2="73" stroke="${p.blue.stroke}" stroke-width="2.2" marker-end="url(#arB_${theme})"/>
        <rect x="130" y="61" width="34" height="22" rx="4" fill="${p.green.fill}" stroke="${p.green.stroke}" stroke-width="1.3"/>
        <text x="147" y="75" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.ink}">m</text>
        <line x1="166" y1="73" x2="202" y2="73" stroke="${p.blue.stroke}" stroke-width="2.2" marker-end="url(#arB_${theme})"/>
        <text x="108" y="66" text-anchor="middle" font-size="8.2" fill="${p.muted}">10 N</text>
        <text x="184" y="66" text-anchor="middle" font-size="8.2" fill="${p.muted}">10 N</text>
        <text x="272" y="75" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.green.text}">${hi ? 'F_net = 0 (a = 0)' : 'F_net = 0 (a = 0)'}</text>

        <!-- Ex 6.1 (a) same direction -->
        <text x="24" y="108" font-size="9" font-weight="700" fill="${p.amber.text}">Ex 6.1(a):</text>
        <rect x="92" y="95" width="34" height="22" rx="4" fill="${p.amber.fill}" stroke="${p.amber.stroke}" stroke-width="1.3"/>
        <text x="109" y="109" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.ink}">m</text>
        <line x1="128" y1="101" x2="176" y2="101" stroke="${p.amber.stroke}" stroke-width="2.2" marker-end="url(#arA_${theme})"/>
        <line x1="128" y1="112" x2="158" y2="112" stroke="${p.blue.stroke}" stroke-width="2.2" marker-end="url(#arB_${theme})"/>
        <text x="184" y="104" font-size="8" fill="${p.muted}">10N + 6N</text>
        <text x="275" y="109" text-anchor="middle" font-size="9" font-weight="800" fill="${p.amber.text}">${hi ? '16 N दाईं ओर' : '16 N Right'}</text>

        <!-- Ex 6.1 (b) opposing -->
        <text x="24" y="142" font-size="9" font-weight="700" fill="${p.rose.text}">Ex 6.1(b):</text>
        <line x1="128" y1="140" x2="98" y2="140" stroke="${p.rose.stroke}" stroke-width="2.2" marker-end="url(#arR_${theme})"/>
        <rect x="130" y="128" width="34" height="22" rx="4" fill="${p.rose.fill}" stroke="${p.rose.stroke}" stroke-width="1.3"/>
        <text x="147" y="142" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.ink}">m</text>
        <line x1="166" y1="140" x2="210" y2="140" stroke="${p.green.stroke}" stroke-width="2.5" marker-end="url(#arG_${theme})"/>
        <text x="112" y="133" text-anchor="middle" font-size="8" fill="${p.muted}">6 N</text>
        <text x="190" y="133" text-anchor="middle" font-size="8" fill="${p.muted}">10 N</text>
        <text x="275" y="142" text-anchor="middle" font-size="9" font-weight="800" fill="${p.rose.text}">${hi ? '4 N दाईं ओर' : '4 N Right'}</text>

        <!-- Panel 2: Free-Body Diagram on Surface (Fig 6.11) -->
        <rect x="346" y="34" width="320" height="178" rx="10" fill="${p.card}" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="506" y="52" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.teal.text}">${hi ? 'क्षैतिज सतह पर बल संतुलन (चित्र 6.11 FBD)' : 'Complete Block Free-Body Diagram (Fig 6.11)'}</text>
        <line x1="370" y1="162" x2="642" y2="162" stroke="${p.border}" stroke-width="3"/>
        <!-- Normal upward -->
        <line x1="506" y1="112" x2="506" y2="66" stroke="${p.blue.stroke}" stroke-width="2.4" marker-end="url(#arB_${theme})"/>
        <text x="515" y="80" font-size="8.8" font-weight="700" fill="${p.blue.text}">${hi ? 'अभिलंब बल (N)' : 'Normal Force (N)'}</text>
        <!-- Weight downward -->
        <line x1="506" y1="162" x2="506" y2="196" stroke="${p.purple.stroke}" stroke-width="2.4" marker-end="url(#arR_${theme})"/>
        <text x="515" y="192" font-size="8.8" font-weight="700" fill="${p.purple.text}">${hi ? 'गुरुत्व / भार (mg)' : 'Weight (mg = N)'}</text>
        <!-- Block -->
        <rect x="470" y="112" width="72" height="48" rx="6" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.8"/>
        <text x="506" y="140" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.ink}">m = 25 kg</text>
        <!-- Friction left -->
        <line x1="468" y1="152" x2="394" y2="152" stroke="${p.rose.stroke}" stroke-width="2.4" marker-end="url(#arR_${theme})"/>
        <text x="418" y="143" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.rose.text}">${hi ? 'घर्षण (50 N)' : 'Friction f (50 N)'}</text>
        <!-- Applied Push right -->
        <line x1="544" y1="136" x2="628" y2="136" stroke="${p.green.stroke}" stroke-width="2.8" marker-end="url(#arG_${theme})"/>
        <text x="596" y="128" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.green.text}">${hi ? 'प्रयुक्त बल (55 N)' : 'Push F (55 N)'}</text>
        <text x="506" y="205" text-anchor="middle" font-size="8.5" font-weight="700" fill="${p.amber.text}">${hi ? 'ऊर्ध्वाधर N = mg (संतुलित) | क्षैतिज F_net = 55 − 50 = 5 N (Ex 6.5)' : 'Vertical N = mg cancels | Horizontal F_net = 55 − 50 = 5 N (Ex 6.5)'}</text>

        <!-- Panel 3: Activity 6.1 Surfaces & Fig 6.7 Couple -->
        <rect x="14" y="172" width="320" height="130" rx="10" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="174" y="190" text-anchor="middle" font-size="10" font-weight="800" fill="${p.amber.text}">${hi ? 'क्रियाकलाप 6.1–6.2 — सतह घर्षण बनाम तय दूरी' : 'Activity 6.1–6.2 — Surface Friction vs Coin Glide'}</text>
        <text x="26" y="213" font-size="8.8" font-weight="700" fill="${p.rose.text}">${hi ? '1. लकड़ी / सीमेंट (अधिक घर्षण):' : '1. Wood / Cement (High f):'}</text>
        <rect x="180" y="204" width="46" height="10" rx="3" fill="${p.rose.stroke}"/>
        <text x="234" y="213" font-size="8.4" fill="${p.muted}">${hi ? 'कम दूरी' : 'Short stop'}</text>
        <text x="26" y="237" font-size="8.8" font-weight="700" fill="${p.amber.text}">${hi ? '2. पटलित मेज (मध्यम घर्षण):' : '2. Laminated Table (Medium):'}</text>
        <rect x="180" y="228" width="82" height="10" rx="3" fill="${p.amber.stroke}"/>
        <text x="268" y="237" font-size="8.4" fill="${p.muted}">${hi ? 'अधिक दूरी' : 'Longer'}</text>
        <text x="26" y="261" font-size="8.8" font-weight="700" fill="${p.green.text}">${hi ? '3. पॉलिश मार्बल/टाइल (न्यूनतम):' : '3. Polished Marble/Tile (Low):'}</text>
        <rect x="180" y="252" width="128" height="10" rx="3" fill="${p.green.stroke}"/>
        <text x="174" y="286" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.ink}">${hi ? 'कम घर्षण -> कम तुला पाठ्यांक व धीमा वेग-ह्रास (गैलीलियो शून्य घर्षण विचार!)' : 'Zero friction -> zero deceleration -> eternal constant velocity (Galileo)'}</text>

        <!-- Panel 4: Inertia vs Mass & Turning Effect (Fig 6.7) -->
        <rect x="346" y="220" width="320" height="82" rx="10" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="506" y="239" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.purple.text}">${hi ? 'अतिरिक्त टिप्पणियाँ: जड़त्व व घूर्णन युग्म (चित्र 6.7)' : 'Inertia Scale & Couple Turning Effect (Fig 6.7)'}</text>
        <text x="506" y="258" text-anchor="middle" font-size="8.7" fill="${p.ink}">${hi ? '• जड़त्व (Inertia) ∝ द्रव्यमान (m): भारी ट्रक बनाम कार (Tech Gr-III)' : '• Inertia ∝ Mass (m): Heavier object strongly resists velocity change'}</text>
        <text x="506" y="275" text-anchor="middle" font-size="8.7" fill="${p.muted}">${hi ? '• बड़े पिंड के विपरीत सिरों पर समान-विपरीत बल -> घूर्णन (साइकिल हैंडल/नल)' : '• Equal & opposite forces at opposite ends of bar/tap produce rotation!'}</text>
        <text x="506" y="292" text-anchor="middle" font-size="8.5" font-weight="700" fill="${p.teal.text}">${hi ? '• नियत वेग = त्वरण 0 -> परिणामी बल F_net = 0 N (उदा. 6.2 & 6.3)' : '• Rest OR Constant Straight Velocity => a = 0 => F_net = 0 N!'}</text>
      </svg>`;
  }

  if (key === 'newton-second-impulse-graphs') {
    return `
      <svg viewBox="0 0 680 315" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="311" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.amber.text}">${hi ? 'न्यूटन II नियम: आवेग (F·t = Δp), सुरक्षा गद्दा & अभ्यास 6.37 / 6.40 / 6.41 ग्राफ हल' : 'Newton II: Impulse Cushioning (F·Δt = Δp) & Solved NCERT Graphs (Fig 6.37, 6.40, 6.41)'}</text>

        <!-- Left: Impulse F-t spike vs cushioned catch/airbag -->
        <rect x="14" y="34" width="214" height="134" rx="10" fill="${p.card}" stroke="${p.rose.stroke}" stroke-width="1.4"/>
        <text x="121" y="52" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.rose.text}">${hi ? 'आवेग सुरक्षा: F = Δp / Δt' : 'Impact Reduction: F = Δp / Δt'}</text>
        <line x1="34" y1="138" x2="212" y2="138" stroke="${p.border}" stroke-width="1.5"/>
        <line x1="34" y1="62" x2="34" y2="138" stroke="${p.border}" stroke-width="1.5"/>
        <!-- Sharp spike -->
        <path d="M40 138 Q56 64 72 138 Z" fill="${p.rose.fill}" fill-opacity="0.7" stroke="${p.rose.stroke}" stroke-width="2"/>
        <text x="86" y="76" font-size="7.8" font-weight="700" fill="${p.rose.text}">${hi ? 'कम समय Δt -> घातक बल!' : 'Short Δt -> Huge F!'}</text>
        <!-- Cushioned wide curve -->
        <path d="M44 138 Q122 104 202 138 Z" fill="${p.green.fill}" fill-opacity="0.7" stroke="${p.green.stroke}" stroke-width="2"/>
        <text x="135" y="113" text-anchor="middle" font-size="7.8" font-weight="700" fill="${p.green.text}">${hi ? 'लंबा Δt -> सुरक्षित!' : 'Long Δt -> Soft Force!'}</text>
        <text x="121" y="156" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.ink}">${hi ? 'एयरबैग, क्रिकेट कैच, फोम रेत (समान Δp)' : 'Airbag, Cricket Catch, Sand Pit'}</text>

        <!-- Middle: Ex Q6 (Fig 6.37 x-t curves A B C D) -->
        <rect x="236" y="34" width="210" height="134" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="341" y="52" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.blue.text}">${hi ? 'अभ्यास 6 (चित्र 6.37) — x-t ग्राफ पहचान' : 'Ex Q6 (Fig 6.37) — Which feels F_net?'}</text>
        <!-- 4 small x-t sketches -->
        <line x1="250" y1="110" x2="282" y2="110" stroke="${p.border}" stroke-width="1.2"/><line x1="250" y1="68" x2="250" y2="110" stroke="${p.border}" stroke-width="1.2"/>
        <line x1="250" y1="110" x2="280" y2="74" stroke="${p.muted}" stroke-width="2"/><text x="266" y="124" text-anchor="middle" font-size="8" fill="${p.muted}">A (v const)</text>

        <line x1="296" y1="110" x2="328" y2="110" stroke="${p.border}" stroke-width="1.2"/><line x1="296" y1="68" x2="296" y2="110" stroke="${p.border}" stroke-width="1.2"/>
        <line x1="296" y1="88" x2="328" y2="88" stroke="${p.muted}" stroke-width="2"/><text x="312" y="124" text-anchor="middle" font-size="8" fill="${p.muted}">B (rest)</text>

        <rect x="336" y="63" width="48" height="68" rx="6" fill="${p.green.fill}" fill-opacity="0.35" stroke="${p.green.stroke}" stroke-width="1.3"/>
        <line x1="344" y1="110" x2="376" y2="110" stroke="${p.border}" stroke-width="1.2"/><line x1="344" y1="68" x2="344" y2="110" stroke="${p.border}" stroke-width="1.2"/>
        <path d="M344 110 Q365 108 376 70" fill="none" stroke="${p.green.stroke}" stroke-width="2.5"/><text x="360" y="124" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.green.text}">C (a ≠ 0 ✓)</text>

        <line x1="394" y1="110" x2="426" y2="110" stroke="${p.border}" stroke-width="1.2"/><line x1="394" y1="68" x2="394" y2="110" stroke="${p.border}" stroke-width="1.2"/>
        <line x1="394" y1="74" x2="426" y2="110" stroke="${p.muted}" stroke-width="2"/><text x="410" y="124" text-anchor="middle" font-size="8" fill="${p.muted}">D (-v const)</text>
        <text x="341" y="155" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.green.text}">${hi ? 'केवल वक्र C त्वरित है -> असंतुलित बल C पर!' : 'Only curve C bends (accelerates) -> Net Force on C!'}</text>

        <!-- Right: Ex Q11 (Fig 6.41 v-t = 25 N) -->
        <rect x="454" y="34" width="212" height="134" rx="10" fill="${p.card}" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="560" y="52" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.teal.text}">${hi ? 'अभ्यास 11 (चित्र 6.41): F = 25 N हल' : 'Ex Q11 (Fig 6.41): Slope a -> F = 25 N'}</text>
        <line x1="484" y1="126" x2="640" y2="126" stroke="${p.border}" stroke-width="1.5"/>
        <line x1="484" y1="62" x2="484" y2="126" stroke="${p.border}" stroke-width="1.5"/>
        <line x1="484" y1="106" x2="626" y2="66" stroke="${p.teal.stroke}" stroke-width="2.6"/>
        <circle cx="484" cy="106" r="3" fill="${p.amber.stroke}"/><text x="472" y="109" text-anchor="end" font-size="7.8" fill="${p.ink}">10</text>
        <circle cx="555" cy="86" r="3" fill="${p.amber.stroke}"/><text x="472" y="88" text-anchor="end" font-size="7.8" fill="${p.ink}">20</text>
        <circle cx="626" cy="66" r="3" fill="${p.amber.stroke}"/><text x="472" y="69" text-anchor="end" font-size="7.8" fill="${p.ink}">30</text>
        <text x="555" y="137" text-anchor="middle" font-size="7.8" fill="${p.muted}">4s</text>
        <text x="626" y="137" text-anchor="middle" font-size="7.8" fill="${p.muted}">8s</text>
        <text x="560" y="156" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.teal.text}">a = (30−10)/8 = 2.5 -> F = 10×2.5 = 25 N</text>

        <!-- Bottom Row: Ex Q10 (Fig 6.40 a vs m -> Constant Force 10 N) + Formula Box -->
        <rect x="14" y="178" width="320" height="124" rx="10" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="174" y="196" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.purple.text}">${hi ? 'अभ्यास 10 (चित्र 6.40): a-m वक्र से F-m ग्राफ (F = 10 N नियत!)' : 'Ex Q10 (Fig 6.40): a–m Hyperbola -> Constant Force F = 10 N!'}</text>
        <!-- Left curve -->
        <line x1="36" y1="274" x2="144" y2="274" stroke="${p.border}" stroke-width="1.4"/><line x1="36" y1="210" x2="36" y2="274" stroke="${p.border}" stroke-width="1.4"/>
        <path d="M46 212 Q64 256 138 265" fill="none" stroke="${p.purple.stroke}" stroke-width="2.4"/>
        <text x="95" y="226" font-size="7.8" fill="${p.muted}">(1,10), (2,5), (5,2)</text>
        <text x="90" y="288" text-anchor="middle" font-size="8" fill="${p.muted}">${hi ? 'a vs m (व्युत्क्रमानुपाती)' : 'a ∝ 1/m Curve'}</text>
        <text x="166" y="248" text-anchor="middle" font-size="14" font-weight="800" fill="${p.amber.text}">→</text>
        <!-- Right constant F line -->
        <line x1="194" y1="274" x2="318" y2="274" stroke="${p.border}" stroke-width="1.4"/><line x1="194" y1="210" x2="194" y2="274" stroke="${p.border}" stroke-width="1.4"/>
        <line x1="194" y1="234" x2="314" y2="234" stroke="${p.green.stroke}" stroke-width="2.6"/>
        <text x="254" y="227" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.green.text}">F = m·a = 10 N</text>
        <text x="254" y="288" text-anchor="middle" font-size="8" fill="${p.green.text}">${hi ? 'F-m ग्राफ: क्षैतिज सीधी रेखा!' : 'F–m Plot: Flat Horizontal Line'}</text>

        <!-- Formula & Units Mastery Card -->
        <rect x="346" y="178" width="320" height="124" rx="10" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="506" y="196" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.amber.text}">${hi ? 'संवेग, बल व 1 न्यूटन (1 N) परीक्षा सूत्र पैक' : 'Momentum, Newton II & 1 N Formula Capsule'}</text>
        <text x="360" y="218" font-size="9" font-weight="700" fill="${p.ink}">• ${hi ? 'संवेग (Momentum)' : 'Momentum'}: p = m·v  |  SI: kg·m·s⁻¹ (${hi ? 'सदिश राशि' : 'Vector'})</text>
        <text x="360" y="238" font-size="9" font-weight="700" fill="${p.teal.text}">• ${hi ? 'न्यूटन II नियम' : 'Newton II'}: F = Δp/t = m·a  |  1 N = 1 kg·m·s⁻²</text>
        <text x="360" y="258" font-size="9" font-weight="700" fill="${p.amber.text}">• ${hi ? 'आवेग (Impulse)' : 'Impulse'}: J = F × Δt = Δp  |  1 N ≈ 100 g ${hi ? 'हथेली भार' : 'mass'}</text>
        <text x="360" y="278" font-size="8.6" fill="${p.muted}">• ${hi ? 'सैन्य/बचत नोट: k = 1 बनाने हेतु SI में बल मात्रक न्यूटन चुना गया (PYQ 18)!' : 'SI chose newton specifically to keep constant k = 1 in F = kma!'}</text>
      </svg>`;
  }

  if (key === 'newton-third-two-body-system') {
    return `
      <svg viewBox="0 0 680 305" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs>
          <marker id="n3G_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.green.stroke}"/></marker>
          <marker id="n3R_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.rose.stroke}"/></marker>
          <marker id="n3B_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.blue.stroke}"/></marker>
        </defs>
        <rect x="2" y="2" width="676" height="301" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.rose.text}">${hi ? 'न्यूटन तृतीय नियम (2 अलग वस्तुएँ: नाव, रॉकेट, बंदूक प्रतिक्षेप) & जुड़ा निकाय तनाव (Sec 6.7)' : 'Newton III (Action-Reaction on 2 Distinct Bodies) & Two-Block String Tension (Sec 6.7)'}</text>

        <!-- Panel 1: Action Reaction Pair Check (Boat + Gun Recoil) -->
        <rect x="14" y="34" width="320" height="126" rx="10" fill="${p.card}" stroke="${p.rose.stroke}" stroke-width="1.4"/>
        <text x="174" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.rose.text}">${hi ? 'नियम 3: बल बराबर पर त्वरण द्रव्यमान पर निर्भर!' : 'Law 3: Forces Equal, Accelerations Differ (Ex 6.7–6.8)'}</text>
        <!-- Gun Recoil Ex 6.8 -->
        <rect x="34" y="70" width="90" height="22" rx="4" fill="${p.blue.fill}" stroke="${p.blue.stroke}" stroke-width="1.3"/>
        <text x="79" y="84" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.ink}">${hi ? 'बंदूक (5 kg)' : 'Gun (5 kg)'}</text>
        <line x1="126" y1="81" x2="180" y2="81" stroke="${p.green.stroke}" stroke-width="2.4" marker-end="url(#n3G_${theme})"/>
        <circle cx="192" cy="81" r="6" fill="${p.amber.stroke}"/>
        <text x="242" y="84" font-size="8.4" font-weight="700" fill="${p.ink}">${hi ? 'गोली (0.1 kg): a = 20 m/s²' : 'Bullet 0.1kg: a = 20 m/s²'}</text>
        <line x1="34" y1="81" x2="18" y2="81" stroke="${p.rose.stroke}" stroke-width="2.4" marker-end="url(#n3R_${theme})"/>
        <text x="174" y="109" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.rose.text}">${hi ? 'दोनों पर बल 2 N समान; परंतु हल्की गोली (0.1 kg) को 20 m/s² और भारी बंदूक (5 kg) को 0.4 m/s²!' : 'Both feel 2 N Force! Light Bullet jumps 20 m/s² vs Heavy Gun recoils only 0.4 m/s²!'}</text>
        <text x="174" y="129" text-anchor="middle" font-size="8.3" fill="${p.muted}">${hi ? '• नाविक नाव से आगे कूदे (Ex Q7) -> नाव विपरीत (पीछे) जाती है!' : '• Sailor jumps forward onto shore -> Boat pushed backward (Ex Q7)!'}</text>
        <text x="174" y="146" text-anchor="middle" font-size="8.3" fill="${p.teal.text}">${hi ? '• दो भिन्न वस्तुओं पर लगने के कारण ये बल परस्पर निरस्त नहीं होते!' : '• Pair acts on TWO DIFFERENT objects -> forces NEVER cancel out!'}</text>

        <!-- Panel 2: Rocket & Chandrayaan-3 Retro-thrust -->
        <rect x="346" y="34" width="320" height="126" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="506" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.blue.text}">${hi ? 'रॉकेट प्रमोचन & चंद्रयान-3 विक्रम लैंडर (पृष्ठ 109)' : 'Rocket Launch & Chandrayaan-3 Retro-Thrust (p.109)'}</text>
        <!-- Rocket shape -->
        <rect x="404" y="76" width="24" height="40" rx="5" fill="${p.blue.fill}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <polygon points="404,76 416,60 428,76" fill="${p.teal.stroke}"/>
        <line x1="416" y1="60" x2="416" y2="46" stroke="${p.green.stroke}" stroke-width="2.4" marker-end="url(#n3G_${theme})"/>
        <line x1="416" y1="118" x2="416" y2="144" stroke="${p.rose.stroke}" stroke-width="2.6" marker-end="url(#n3R_${theme})"/>
        <text x="444" y="84" font-size="8.5" font-weight="700" fill="${p.green.text}">${hi ? 'ऊपर बल (> भार) -> उड़ान!' : 'Upward Reaction Force > mg'}</text>
        <text x="444" y="104" font-size="8.5" font-weight="700" fill="${p.rose.text}">${hi ? 'नीचे निष्कासित गैसें (क्रिया)' : 'Downward Exhaust Gas (Action)'}</text>
        <text x="444" y="128" font-size="8.2" fill="${p.amber.text}">${hi ? 'विक्रम लैंडर: गति की दिशा में गैस -> ब्रेक!' : 'Vikram Lander: Gas forward -> Slows down!'}</text>
        <text x="506" y="150" text-anchor="middle" font-size="8.2" fill="${p.muted}">${hi ? 'संपर्क (पैर-जमीन) तथा असंपर्क (चुंबक, आवेश, फल-पृथ्वी) सभी में लागू!' : 'Holds for BOTH Contact & Non-Contact Forces (Magnet, Electrostatics, Gravity)!'}</text>

        <!-- Panel 3 (Bottom full width): Two-Block Linked System (Sec 6.7 + Ex Q15) -->
        <rect x="14" y="170" width="652" height="122" rx="10" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="340" y="189" text-anchor="middle" font-size="10.4" font-weight="800" fill="${p.purple.text}">${hi ? 'भाग 6.7 व अभ्यास 15 — डोरी से जुड़े 2 पिंडों का निकाय (System Formula: आंतरिक तनाव T रद्द!)' : 'Section 6.7 & Ex Q15 — Coupled Two-Body System (Internal Tension T Cancels Out!)'}</text>
        <line x1="36" y1="242" x2="390" y2="242" stroke="${p.border}" stroke-width="2.5"/>
        <!-- Block 2 -->
        <rect x="66" y="206" width="66" height="35" rx="6" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.6"/>
        <text x="99" y="227" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">m₂ (Trolley)</text>
        <!-- String Tension T -->
        <line x1="133" y1="224" x2="205" y2="224" stroke="${p.amber.stroke}" stroke-width="2.5"/>
        <text x="169" y="216" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.amber.text}">${hi ? 'तनाव T (आंतरिक)' : 'Tension T'}</text>
        <!-- Block 1 -->
        <rect x="206" y="206" width="68" height="35" rx="6" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.6"/>
        <text x="240" y="227" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">m₁ (Harrow)</text>
        <!-- External Pull F -->
        <line x1="276" y1="224" x2="362" y2="224" stroke="${p.green.stroke}" stroke-width="2.8" marker-end="url(#n3G_${theme})"/>
        <text x="322" y="216" text-anchor="middle" font-size="9" font-weight="800" fill="${p.green.text}">${hi ? 'बाह्य बल F' : 'External Pull F'}</text>

        <!-- Equations Right Side -->
        <text x="530" y="214" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.ink}">${hi ? 'संयुक्त त्वरण:' : 'System Accel:'}  a = F / (m₁ + m₂)   (Eq 6.4)</text>
        <text x="530" y="234" text-anchor="middle" font-size="9" font-weight="700" fill="${p.amber.text}">${hi ? 'डोरी में तनाव:' : 'String Tension:'}  T = m₂ · a = m₂F / (m₁ + m₂)</text>
        <text x="530" y="256" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.purple.text}">${hi ? 'अभ्यास 15 (ट्रैक्टर-ट्रॉली):' : 'Ex Q15 Shortcut:'}  a_total = (a₁ · a₂) / (a₁ + a₂)</text>
        <text x="340" y="280" text-anchor="middle" font-size="8.4" fill="${p.muted}">${hi ? 'टिप्पणी: m₁+m₂ को एक इकाई मानने पर आंतरिक तनाव (+T और −T) आपस में कट जाते हैं; केवल बाह्य बल F गिना जाता है!' : 'Tip: Treat m₁+m₂ as ONE single system — internal T cancels cleanly, leaving only external F!'}</text>
      </svg>`;
  }

  return '';
}
