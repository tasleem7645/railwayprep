/**
 * Pure-SVG Vector Diagram Plates for Class 10 Chemistry Chapter 1:
 * Chemical Reactions & Equations (रासायनिक अभिक्रियाएँ एवं समीकरण — jhsc101, NCERT 2026–27)
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

export function renderC10Ch1RxnDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.a;

  if (key === 'c10-ch1-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '1.1 समीकरण व संतुलन' : '1.1 Balancing Equations', s: hi ? '4 लक्षण • 3Fe+4H₂O • (s/l/g/aq)' : '4 Signs • Mass Law • 340 atm', c: p.teal },
      { x: 145, t: hi ? '1.2.1 संयोजन व ऊष्माक्षेपी' : '1.2.1 Combine & Exo', s: hi ? 'CaO+H₂O→Ca(OH)₂ • श्वसन' : 'Quicklime • Whitewash • Compost', c: p.green },
      { x: 280, t: hi ? '1.2.2 तीन वियोजन प्रकार' : '1.2.2 3 Decompositions', s: hi ? 'ऊष्मा (NO₂) • विद्युत (2:1) • सूर्य AgCl' : 'Thermal • Electro 2:1 • Photo AgCl', c: p.amber },
      { x: 415, t: hi ? '1.2.3–4 विस्थापन व अवक्षेप' : '1.2.3–4 Displace & Ppt', s: hi ? 'Fe+CuSO₄ • BaSO₄ श्वेत • PbI₂ पीला' : 'Fe/Zn>Cu • BaSO₄ • PbI₂ Yellow', c: p.blue },
      { x: 550, t: hi ? '1.2.5–1.3 रेडॉक्स व क्षरण' : '1.2.5–1.3 Redox & Rust', s: hi ? 'CuO/ZnO/MnO₂ • Ag काली • Cu हरी' : 'CuO+H₂ • Ag Black • Rancid N₂', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 124" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bm1_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="120" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 1 संपूर्ण मानचित्र — रासायनिक अभिक्रियाएँ एवं समीकरण (NCERT 2026–27)' : 'Chapter 1 Blueprint — Chemical Reactions & Equations (NCERT 2026–27)'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="122" height="74" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 61}" y="60" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 61}" y="82" text-anchor="middle" font-size="7.4" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 123}" y1="71" x2="${n.x + 138}" y2="71" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#bm1_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'c10-ch1-balancing-combination-decomp') {
    return `
      <svg viewBox="0 0 680 286" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ar1a_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="282" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.amber.text}">${hi ? 'सफेदी कैल्शियम चक्र (`1.13–1.14`) एवं वियोजन के 3 ऊर्जा स्रोत (`ऊष्मा, विद्युत, प्रकाश`)' : 'Quicklime Whitewash Cycle (Eq 1.13–1.14) & Three Energy Sources of Decomposition'}</text>

        <!-- Left: Whitewash Cycle + Exothermic vs Endothermic -->
        <rect x="12" y="34" width="290" height="200" rx="10" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.5"/>
        <text x="157" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.green.text}">${hi ? '1. संयोजन + ऊष्माक्षेपी व सफेदी चमक (पृ. 7)' : '1. Combination + Exothermic & Whitewash'}</text>
        <rect x="24" y="61" width="266" height="44" rx="7" fill="${p.card}" stroke="${p.teal.stroke}"/>
        <text x="157" y="79" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.teal.text}">CaO(s) + H₂O(l) → Ca(OH)₂(aq) + ${hi ? 'ऊष्मा' : 'Heat'}</text>
        <text x="157" y="96" text-anchor="middle" font-size="7.4" fill="${p.muted}">${hi ? 'बिना बुझा चूना → बुझा चूना (तेज ऊष्माक्षेपी!)' : 'Quick Lime → Slaked Lime (vigorous heat!)'}</text>

        <rect x="24" y="114" width="266" height="48" rx="7" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="157" y="132" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.blue.text}">Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O</text>
        <text x="157" y="149" text-anchor="middle" font-size="7.4" fill="${p.ink}">${hi ? '2–3 दिन में संगमरमर जैसी चमक (CaCO₃ परत)!' : 'Slowly forms shiny CaCO₃ layer (Marble formula!)'}</text>

        <text x="157" y="182" text-anchor="middle" font-size="7.7" font-weight="800" fill="${p.amber.text}">${hi ? 'ऊष्माक्षेपी: श्वसन, CH₄ दहन, कंपोस्ट खाद, प्रबल अम्ल तनुकरण' : 'Exothermic: Respiration, CH₄ Combustion, Veg Compost'}</text>
        <text x="157" y="199" text-anchor="middle" font-size="7.6" font-weight="800" fill="${p.purple.text}">${hi ? 'ऊष्माशोषी: प्रकाश संश्लेषण व Ba(OH)₂ + 2NH₄Cl (ठंडा!)' : 'Endothermic: Photosynthesis & Ba(OH)₂+NH₄Cl (Cold tube!)'}</text>
        <text x="157" y="218" text-anchor="middle" font-size="7.4" fill="${p.muted}">${hi ? 'दाब शर्त (1.11): CO + 2H₂ —340 atm→ CH₃OH' : 'Condition Eq 1.11: CO + 2H₂ —340 atm→ CH₃OH'}</text>

        <!-- Right: 3 Decompositions -->
        <rect x="314" y="34" width="354" height="200" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="491" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.amber.text}">${hi ? '2. तीन प्रकार की वियोजन अभिक्रियाएँ (सभी ऊष्माशोषी!)' : '2. Three Types of Decomposition (ALL Endothermic!)'}</text>

        <rect x="326" y="61" width="330" height="58" rx="7" fill="${p.card}" stroke="${p.rose.stroke}"/>
        <text x="491" y="77" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.rose.text}">${hi ? 'A) ऊष्मीय वियोजन (Heat Δ)' : 'A) Thermal Decomposition (Heat)'}</text>
        <text x="491" y="94" text-anchor="middle" font-size="7.7" fill="${p.ink}">• 2FeSO₄(s) → Fe₂O₃(s) + SO₂↑ + SO₃↑ (${hi ? 'हरा→श्वेत→भूरा' : 'Green→Brown'})</text>
        <text x="491" y="110" text-anchor="middle" font-size="7.7" fill="${p.ink}">• 2Pb(NO₃)₂ → 2PbO + 4NO₂ (${hi ? 'भूरा धुआँ!' : 'Brown fumes!'}) + O₂</text>

        <rect x="326" y="126" width="330" height="46" rx="7" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="491" y="142" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.blue.text}">${hi ? 'B) वैद्युतअपघटन (क्रियाकलाप 1.7: H₂O + तनु H₂SO₄)' : 'B) Electrolytic (Act 1.7: 2H₂O → 2H₂ + O₂)'}</text>
        <text x="491" y="159" text-anchor="middle" font-size="7.6" font-weight="700" fill="${p.ink}">${hi ? 'कैथोड (-) = H₂ (2 गुना आयतन!) | ऐनोड (+) = O₂ (1 भाग)' : 'Cathode (-) = H₂ (2× Volume!) | Anode (+) = O₂ (1×)'}</text>

        <rect x="326" y="179" width="330" height="46" rx="7" fill="${p.card}" stroke="${p.teal.stroke}"/>
        <text x="491" y="195" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.teal.text}">${hi ? 'C) प्रकाश वियोजन (श्याम-श्वेत फोटोग्राफी!)' : 'C) Photolytic (Black & White Photography!)'}</text>
        <text x="491" y="212" text-anchor="middle" font-size="7.7" fill="${p.ink}">2AgCl / 2AgBr —${hi ? 'सूर्यप्रकाश' : 'Sunlight'}→ 2Ag (${hi ? 'धूसर/Grey' : 'Grey'}) + Cl₂ / Br₂</text>

        <rect x="12" y="242" width="656" height="32" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="262" text-anchor="middle" font-size="8.3" font-weight="800" fill="${p.teal.text}">${hi ? '📌 हिट एंड ट्रायल नियम (पृ. 4): 3Fe(s) + 4H₂O(g/भाप) → Fe₃O₄(s) + 4H₂(g) — सूत्र के अंदर अंक नहीं, आगे गुणांक लगाएँ!' : '📌 Hit-&-Trial Rule: 3Fe(s) + 4H₂O(steam g) → Fe₃O₄(s) + 4H₂(g) — Never alter formula subscripts inside boxes!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch1-displacement-precipitation') {
    return `
      <svg viewBox="0 0 680 278" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ar1b_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.blue.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="274" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.blue.text}">${hi ? 'विस्थापन (लौह कील + CuSO₄) बनाम द्विविस्थापन एवं अवक्षेपण (BaSO₄ श्वेत व PbI₂ पीला)' : 'Single Displacement (Fe + CuSO₄) vs Double Displacement Precipitation (BaSO₄ & PbI₂)'}</text>

        <!-- Left: Single Displacement Act 1.9 -->
        <rect x="12" y="34" width="320" height="196" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="172" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.blue.text}">${hi ? '1. विस्थापन अभिक्रिया (क्रियाकलाप 1.9, चित्र 1.8)' : '1. Single Displacement (Activity 1.9, Fig 1.8)'}</text>
        <rect x="24" y="62" width="140" height="90" rx="8" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="94" y="80" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.blue.text}">${hi ? 'पहले (परखनली A)' : 'Before (Tube A)'}</text>
        <text x="94" y="100" text-anchor="middle" font-size="8" fill="${p.ink}">${hi ? 'नीला CuSO₄(aq)' : 'Deep Blue CuSO₄'}</text>
        <text x="94" y="118" text-anchor="middle" font-size="8" fill="${p.muted}">${hi ? '+ साफ चमकदार लोहे की कील' : '+ Clean Iron Nail'}</text>
        <text x="94" y="138" text-anchor="middle" font-size="7.5" fill="${p.blue.text}">${hi ? '20 मिनट डुबोने पर →' : 'After 20 min →'}</text>

        <rect x="178" y="62" width="142" height="90" rx="8" fill="${p.card}" stroke="${p.green.stroke}"/>
        <text x="249" y="80" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.green.text}">${hi ? 'बाद में (परखनली B)' : 'After (Tube B)'}</text>
        <text x="249" y="100" text-anchor="middle" font-size="8" fill="${p.green.text}">${hi ? 'नीला रंग फीका (हल्का हरा FeSO₄)' : 'Blue Fades → Greenish FeSO₄'}</text>
        <text x="249" y="118" text-anchor="middle" font-size="8" font-weight="800" fill="${p.rose.text}">${hi ? 'कील पर भूरा ताँबा (Cu) जमा!' : 'Reddish-brown Cu coats nail!'}</text>
        <text x="249" y="138" text-anchor="middle" font-size="7.3" fill="${p.muted}">Fe + CuSO₄ → FeSO₄ + Cu</text>

        <text x="172" y="172" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.ink}">${hi ? 'Zn > Fe > Pb > Cu > Ag (ज्यादा सक्रिय कम को हटाएगा!)' : 'Zn, Fe, Pb all displace Cu from salts; Cu displaces Ag!'}</text>
        <text x="172" y="190" text-anchor="middle" font-size="7.5" fill="${p.ink}">Zn + CuSO₄ → ZnSO₄ + Cu | Pb + CuCl₂ → PbCl₂ + Cu</text>
        <text x="172" y="210" text-anchor="middle" font-size="7.4" font-weight="700" fill="${p.amber.text}">Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag (Ex Q14 ${hi ? 'सिल्वर शोधन' : 'Silver Refining'})</text>

        <!-- Right: Double Displacement + Precipitation -->
        <rect x="342" y="34" width="326" height="196" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="505" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.amber.text}">${hi ? '2. द्विविस्थापन = आयन विनिमय + अविलेय अवक्षेप' : '2. Double Displacement = Ion Exchange + Ppt'}</text>

        <rect x="354" y="62" width="302" height="68" rx="8" fill="${p.card}" stroke="${p.teal.stroke}"/>
        <text x="505" y="79" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.teal.text}">${hi ? 'क्रियाकलाप 1.10 (चित्र 1.9 — श्वेत अवक्षेप!)' : 'Activity 1.10 (Fig 1.9 — White Precipitate!)'}</text>
        <text x="505" y="96" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄↓(s) + 2NaCl(aq)</text>
        <text x="505" y="114" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'Ba²⁺ व SO₄²⁻ मिलकर जल में अविलेय BaSO₄ (सफेद अवक्षेप) बनाते हैं' : 'Ba²⁺ + SO₄²⁻ swap ions forming insoluble white BaSO₄(s)'}</text>

        <rect x="354" y="138" width="302" height="78" rx="8" fill="${p.card}" stroke="${p.amber.stroke}"/>
        <text x="505" y="155" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.amber.text}">${hi ? 'क्रियाकलाप 1.2 (पृ. 12 — पीला अवक्षेप!)' : 'Activity 1.2 & p.12 Check (Yellow Precipitate!)'}</text>
        <text x="505" y="172" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂↓(s) + 2KNO₃(aq)</text>
        <text x="505" y="190" text-anchor="middle" font-size="7.6" font-weight="800" fill="${p.amber.text}">${hi ? 'लेड आयोडाइड (PbI₂) का चमकीला पीला अवक्षेप बनता है!' : 'Bright YELLOW precipitate of Lead(II) Iodide (PbI₂)!'}</text>
        <text x="505" y="206" text-anchor="middle" font-size="7.2" fill="${p.muted}">${hi ? 'उदासीनीकरण (HCl + NaOH) भी द्विविस्थापन अभिक्रिया है (ALP 2025)!' : 'Acid-Base neutralization (HCl+NaOH) is also Double Displacement!'}</text>

        <rect x="12" y="238" width="656" height="30" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="257" text-anchor="middle" font-size="8.3" font-weight="800" fill="${p.rose.text}">${hi ? '📌 ध्यान दें: थर्मिट अभिक्रिया Fe₂O₃ + 2Al → Al₂O₃ + 2Fe एक विस्थापन अभिक्रिया है (Ex Q2)!' : '📌 Exam Hotspot: Thermite Fe₂O₃ + 2Al → Al₂O₃ + 2Fe is a DISPLACEMENT reaction (NCERT Ex Q2)!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch1-redox-corrosion-rancidity') {
    return `
      <svg viewBox="0 0 680 282" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ar1r_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.purple.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="278" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.rose.text}">${hi ? 'रेडॉक्स (उपचयन + अपचयन समीकरण 1.28–1.32), धातु संक्षारण रंग एवं विकृतगंधिता' : 'Redox Reactions (Eq 1.28–1.32), Metal Corrosion Colors & Rancidity Prevention'}</text>

        <!-- Left: Redox Core -->
        <rect x="12" y="34" width="356" height="198" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="190" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.purple.text}">${hi ? '1. उपचयन (Oxidation) व अपचयन (Reduction) नियम' : '1. Oxygen/Hydrogen Redox Trio (Eq 1.28–1.32)'}</text>

        <rect x="24" y="60" width="160" height="44" rx="7" fill="${p.card}" stroke="${p.rose.stroke}"/>
        <text x="104" y="76" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.rose.text}">${hi ? 'उपचयन (Oxidation)' : 'Oxidation (+O / −H)'}</text>
        <text x="104" y="94" text-anchor="middle" font-size="7.5" fill="${p.ink}">${hi ? '+ O का जुड़ना या − H हटना' : 'Gain of O₂ OR Loss of H₂'}</text>

        <rect x="196" y="60" width="160" height="44" rx="7" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="276" y="76" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.blue.text}">${hi ? 'अपचयन (Reduction)' : 'Reduction (−O / +H)'}</text>
        <text x="276" y="94" text-anchor="middle" font-size="7.5" fill="${p.ink}">${hi ? '− O का हटना या + H जुड़ना' : 'Loss of O₂ OR Gain of H₂'}</text>

        <rect x="24" y="112" width="332" height="108" rx="7" fill="${p.card}" stroke="${p.border}"/>
        <text x="34" y="129" font-size="7.8" font-weight="800" fill="${p.teal.text}">① 2Cu (भूरा) + O₂ —Δ→ 2CuO (काला) [Act 1.11 | Ex Q17]</text>
        <text x="34" y="148" font-size="7.8" font-weight="700" fill="${p.ink}">② CuO + H₂ —Δ→ Cu + H₂O (CuO अपचयित; H₂ उपचयित)</text>
        <text x="34" y="167" font-size="7.8" font-weight="700" fill="${p.ink}">③ ZnO + C → Zn + CO (ZnO अपचयित; C उपचयित)</text>
        <text x="34" y="186" font-size="7.8" font-weight="700" fill="${p.ink}">④ MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂ (MnO₂ अपचयित)</text>
        <text x="34" y="206" font-size="7.4" font-weight="800" fill="${p.rose.text}">${hi ? '⚠️ Ex Q1: 2PbO + C → 2Pb + CO₂ में लेड ऑक्साइड (PbO) अपचयित, Pb नहीं!' : '⚠️ Ex Q1 Trap: PbO is reduced (NOT Pb!), C is oxidised (NOT CO₂!)'}</text>

        <!-- Right: Corrosion & Rancidity -->
        <rect x="378" y="34" width="290" height="198" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="523" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.teal.text}">${hi ? '2. संक्षारण (1.3.1) व विकृतगंधिता (1.3.2)' : '2. Corrosion (1.3.1) & Rancidity (1.3.2)'}</text>

        <rect x="390" y="60" width="266" height="86" rx="8" fill="${p.card}" stroke="${p.amber.stroke}"/>
        <text x="523" y="76" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.amber.text}">${hi ? 'अम्ल व आर्द्रता से धातु संक्षारण रंग (पृ. 14)' : 'Corrosion Tarnish Colors (NCERT p.14)'}</text>
        <text x="402" y="95" font-size="8" font-weight="700" fill="${p.rose.text}">${hi ? '• लोहा (Iron): लालिमायुक्त भूरी परत (जंग)' : '• Iron: Reddish-brown flaky layer (Rust)'}</text>
        <text x="402" y="112" font-size="8" font-weight="700" fill="${p.ink}">${hi ? '• चाँदी (Silver): काली परत (Ag₂S)' : '• Silver: Black coating (Ag₂S)'}</text>
        <text x="402" y="129" font-size="8" font-weight="700" fill="${p.green.text}">${hi ? '• ताँबा (Copper): हरी परत (बेसिक कार्बोनेट)' : '• Copper: Green patina coating'}</text>

        <rect x="390" y="154" width="266" height="66" rx="8" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="523" y="170" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.blue.text}">${hi ? 'विकृतगंधिता (Rancidity) बचाव:' : 'Rancidity Prevention (Fats Oxidation):'}</text>
        <text x="523" y="187" text-anchor="middle" font-size="7.6" fill="${p.ink}">${hi ? '1. प्रति-ऑक्सीकारक (Antioxidants) मिलाना' : '1. Add Antioxidants (BHA/BHT)'}</text>
        <text x="523" y="203" text-anchor="middle" font-size="7.6" font-weight="800" fill="${p.teal.text}">${hi ? '2. वायुरोधी डिब्बे व चिप्स में N₂ (कम सक्रिय गैस) भरना!' : '2. Airtight containers & Flush Chips with N₂ gas!'}</text>

        <rect x="12" y="240" width="656" height="30" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="259" text-anchor="middle" font-size="8.3" font-weight="800" fill="${p.amber.text}">${hi ? '📌 चिप्स थैली में नाइट्रोजन (N₂) क्यों भरते हैं? ताकि ऑक्सीजन हटे व तेल-वसा का उपचयन (विकृतगंधिता) न हो! (`Group D Shift 42`)' : '📌 Why N₂ gas inside chips bags? Flushing O₂ with less-active Nitrogen prevents fat oxidation / rancidity!'}</text>
      </svg>`;
  }

  return '';
}
