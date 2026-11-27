/**
 * Pure-SVG Vector Diagram Plates for Class 9 Chemistry Chapter 5:
 * Exploring Mixtures & Their Separation (ihsc105, New NCERT 2026–27 Edition)
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

export function renderCh5MixDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.a;

  if (key === 'ch5-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '5.1 समांगी बनाम विषमांगी' : '5.1 Mix Classification', s: hi ? 'विलयन (एकसमान) vs परत/कण' : 'Homogeneous vs Heterogeneous', c: p.teal },
      { x: 145, t: hi ? '5.2 सांद्रता व विलेयता' : '5.2 % Conc & Solubility', s: hi ? 'm/m • 0.9% m/v • v/v • वक्र' : '%m/m • 0.9% m/v • %v/v • Curve', c: p.blue },
      { x: 280, t: hi ? '5.3 समांगी पृथक्करण' : '5.3 Homogeneous Sep.', s: hi ? 'क्रिस्टल • आसवन ≥25°C • वर्णलेखन' : 'Crystal • Distill • Chromato.', c: p.purple },
      { x: 415, t: hi ? '5.4 विषमांगी व मिश्रातु' : '5.4 Heterogeneous & Alloy', s: hi ? 'कीप • ऊर्ध्वपातन • अपकेंद्रण/स्कंदन' : 'Funnel • Sublim. • Centrifuge', c: p.amber },
      { x: 550, t: hi ? '5.5 कोलॉइड व टिंडल' : '5.5 Colloid & Tyndall', s: hi ? '1–1000nm • पायस (O/W, W/O)' : '1–1000nm • O/W vs W/O', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 124" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bm5_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="120" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 5 संपूर्ण मानचित्र — मिश्रण एवं उनके पृथक्करण (New NCERT 2026–27)' : 'Chapter 5 Blueprint — Exploring Mixtures & Their Separation (2026–27 NCERT)'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="122" height="74" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 61}" y="60" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 61}" y="82" text-anchor="middle" font-size="7.9" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 123}" y1="71" x2="${n.x + 138}" y2="71" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#bm5_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'ch5-solution-colloid-suspension') {
    return `
      <svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs>
          <marker id="ar5a_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="${p.rose.stroke}"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="676" height="296" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="${p.teal.text}">${hi ? 'विलयन vs कोलॉइड vs निलंबन — कण आकार व टिंडल प्रभाव (चित्र 5.3 व 5.23)' : 'Solution vs Colloid vs Suspension — Particle Size & Tyndall Effect (Fig 5.3, 5.23)'}</text>

        <!-- Laser pointer left -->
        <rect x="14" y="106" width="52" height="24" rx="5" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.6"/>
        <text x="40" y="121" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.rose.text}">LASER</text>
        <line x1="66" y1="118" x2="108" y2="118" stroke="${p.rose.stroke}" stroke-width="3"/>

        <!-- Beaker 1: True Solution -->
        <rect x="108" y="42" width="166" height="196" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.6"/>
        <text x="191" y="61" text-anchor="middle" font-size="11" font-weight="800" fill="${p.blue.text}">${hi ? 'A. वास्तविक विलयन (Solution)' : 'A. True Solution (Salt/Water)'}</text>
        <text x="191" y="77" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">${hi ? 'कण < 1 nm • समांगी • पारदर्शी' : 'Size < 1 nm • Homogeneous'}</text>
        <rect x="136" y="88" width="110" height="78" rx="6" fill="${p.bg}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="191" y="114" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.muted}">${hi ? 'कोई किरण पथ नहीं!' : 'NO Visible Path!'}</text>
        <text x="191" y="132" text-anchor="middle" font-size="8" font-weight="800" fill="${p.rose.text}">${hi ? 'टिंडल प्रभाव: ❌ अनुपस्थित' : 'Tyndall Effect: ❌ Absent'}</text>
        <text x="191" y="152" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'कण नग्न नेत्र/फिल्टर से अनभिज्ञ' : 'Not visible; passes filter'}</text>
        <text x="191" y="185" text-anchor="middle" font-size="8" font-weight="600" fill="${p.ink}">${hi ? 'स्थिर: कण तली में नहीं बैठते' : 'Stable: Does NOT settle'}</text>
        <text x="191" y="201" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'उदा.: नमक-जल, सिरका, सोडा, CuSO₄' : 'Ex: NaCl/CuSO₄ aq, Vinegar, Brass'}</text>
        <text x="191" y="218" text-anchor="middle" font-size="7.8" font-weight="700" fill="${p.blue.text}">${hi ? 'पृथक्करण: आसवन / क्रिस्टलीकरण' : 'Sep: Crystallization / Distill'}</text>

        <!-- Laser gap between 1 and 2 -->
        <line x1="246" y1="118" x2="294" y2="118" stroke="${p.rose.stroke}" stroke-width="2" stroke-dasharray="4 3"/>

        <!-- Beaker 2: Colloid -->
        <rect x="288" y="42" width="182" height="196" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.6"/>
        <text x="379" y="61" text-anchor="middle" font-size="11" font-weight="800" fill="${p.purple.text}">${hi ? 'B. कोलॉइड (Colloid)' : 'B. Colloid (Milk/Water)'}</text>
        <text x="379" y="77" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">${hi ? 'कण 1–1000 nm • छद्म समांगी' : 'Size 1–1000 nm • Heterogeneous!'}</text>
        <rect x="322" y="88" width="114" height="78" rx="6" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <!-- Visible scattered cone -->
        <polygon points="322,113 436,104 436,132 322,123" fill="${p.rose.stroke}" fill-opacity="0.45"/>
        <line x1="322" y1="118" x2="436" y2="118" stroke="${p.rose.stroke}" stroke-width="4"/>
        <circle cx="348" cy="112" r="2" fill="${p.amber.stroke}"/><circle cx="378" cy="123" r="2" fill="${p.amber.stroke}"/><circle cx="408" cy="114" r="2" fill="${p.amber.stroke}"/>
        <text x="379" y="152" text-anchor="middle" font-size="8" font-weight="800" fill="${p.teal.text}">${hi ? 'टिंडल प्रभाव: ✅ स्पष्ट शंकु!' : 'Tyndall: ✅ Clear Cone!'}</text>
        <text x="379" y="185" text-anchor="middle" font-size="8" font-weight="600" fill="${p.ink}">${hi ? 'स्थिर: बिना हिलाए नहीं बैठते' : 'Stable: Does NOT settle'}</text>
        <text x="379" y="201" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'साधारण फिल्टर पार, पर अपकेंद्रण अलग' : 'Passes filter; Centrifuge works'}</text>
        <text x="379" y="218" text-anchor="middle" font-size="7.8" font-weight="700" fill="${p.purple.text}">${hi ? 'उदा.: दूध, रक्त, कोहरा, धुआँ, सॉस' : 'Ex: Milk, Blood, Fog, Smoke'}</text>

        <!-- Laser between 2 and 3 -->
        <line x1="436" y1="118" x2="484" y2="118" stroke="${p.rose.stroke}" stroke-width="2" stroke-dasharray="4 3"/>

        <!-- Beaker 3: Suspension -->
        <rect x="484" y="42" width="182" height="196" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <text x="575" y="61" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber.text}">${hi ? 'C. निलंबन (Suspension)' : 'C. Suspension (Chalk/Mud)'}</text>
        <text x="575" y="77" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">${hi ? 'कण > 1000 nm • विषमांगी' : 'Size > 1000 nm • Heterogeneous'}</text>
        <rect x="518" y="88" width="114" height="78" rx="6" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <line x1="518" y1="118" x2="575" y2="118" stroke="${p.rose.stroke}" stroke-width="3.5" marker-end="url(#ar5a_${theme})"/>
        <!-- Coarse particles settling -->
        <circle cx="536" cy="106" r="3.5" fill="${p.amber.stroke}"/><circle cx="566" cy="126" r="3.5" fill="${p.amber.stroke}"/><circle cx="598" cy="111" r="3.5" fill="${p.amber.stroke}"/>
        <circle cx="536" cy="158" r="3.5" fill="${p.amber.stroke}"/><circle cx="552" cy="160" r="3.5" fill="${p.amber.stroke}"/><circle cx="574" cy="159" r="3.5" fill="${p.amber.stroke}"/><circle cx="595" cy="160" r="3.5" fill="${p.amber.stroke}"/><circle cx="614" cy="159" r="3.5" fill="${p.amber.stroke}"/>
        <text x="575" y="148" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.amber.text}">${hi ? 'हिलाने पर ✅ • बैठने पर ❌' : 'Tyndall till settled!'}</text>
        <text x="575" y="185" text-anchor="middle" font-size="8" font-weight="600" fill="${p.ink}">${hi ? 'अस्थायी: कण तली में बैठते हैं' : 'Unstable: Settles on standing'}</text>
        <text x="575" y="201" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'नग्न नेत्र व निस्यंदन दोनों से अलग' : 'Visible + Filter Paper Separates'}</text>
        <text x="575" y="218" text-anchor="middle" font-size="7.8" font-weight="700" fill="${p.amber.text}">${hi ? 'उदा.: पंकिल जल, रेत, चॉक-जल' : 'Ex: Muddy water, Sand, Chalk'}</text>

        <!-- Bottom Emulsion Strip -->
        <rect x="14" y="248" width="652" height="40" rx="9" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.3"/>
        <text x="340" y="264" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.teal.text}">${hi ? 'पायस (Emulsion = द्रव + द्रव कोलॉइड • NCERT पृ. 88) — पायसी कारक: दूध में प्रोटीन / जल-तेल में साबुन' : 'Emulsion (Liquid-in-Liquid Colloid • NCERT p.88) — Stabilized by Emulsifier (Protein in Milk / Soap)'}</text>
        <text x="340" y="280" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.ink}">${hi ? 'जल में तेल (O/W): दूध, बॉडी लोशन, वैनिशिंग क्रीम  |  तेल में जल (W/O): मक्खन, कोल्ड क्रीम' : 'Oil-in-Water (O/W): Milk, Body Lotion, Vanishing Cream  |  Water-in-Oil (W/O): Butter, Cold Cream'}</text>
      </svg>`;
  }

  if (key === 'ch5-homogeneous-sep') {
    return `
      <svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs>
          <marker id="ar5h_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="676" height="306" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="23" text-anchor="middle" font-size="13" font-weight="800" fill="${p.teal.text}">${hi ? 'समांगी मिश्रण पृथक्करण: क्रिस्टलीकरण, आसवन (क-ख-ग), प्रभाजी आसवन व कागज वर्णलेखिकी' : 'Homogeneous Separation: Crystallization, Distillation (NCERT Fig 5.26), Fractional & Chromatography'}</text>

        <!-- Panel 1: Crystallization -->
        <rect x="12" y="34" width="166" height="222" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="95" y="52" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.blue.text}">${hi ? '1. क्रिस्टलीकरण' : '1. Crystallization'}</text>
        <text x="95" y="67" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'गर्म संतृप्त CuSO₄ + जल' : 'Hot Sat. CuSO₄ + 1 drop H₂SO₄'}</text>
        <path d="M95 72 L95 88" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#ar5h_${theme})"/>
        <rect x="26" y="92" width="138" height="34" rx="6" fill="${p.card}" stroke="${p.border}"/>
        <text x="95" y="106" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'छानकर धीरे-धीरे शीतलन' : 'Filter & Slow Room Cool'}</text>
        <text x="95" y="120" text-anchor="middle" font-size="7.6" fill="${p.blue.text}">${hi ? 'बड़े चमकदार नीले क्रिस्टल!' : 'Large pure triclinic crystals'}</text>
        <rect x="26" y="134" width="138" height="44" rx="6" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}"/>
        <text x="95" y="149" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.amber.text}">${hi ? 'वाष्पीकरण से श्रेष्ठ क्यों?' : 'Why Better than Evap?'}</text>
        <text x="95" y="162" text-anchor="middle" font-size="7.3" fill="${p.ink}">${hi ? 'चीनी झुलसती नहीं, अशुद्धियाँ' : 'Heat-sensitive solids safe;'}</text>
        <text x="95" y="173" text-anchor="middle" font-size="7.3" fill="${p.ink}">${hi ? 'विलयन में ही रह जाती हैं!' : 'solids stay free of impurities'}</text>
        <rect x="26" y="186" width="138" height="60" rx="6" fill="${p.card}" stroke="${p.border}"/>
        <text x="95" y="201" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.teal.text}">${hi ? 'प्राचीन भारतीय नमक:' : 'Ancient India Salt Craft:'}</text>
        <text x="95" y="216" text-anchor="middle" font-size="7.6" fill="${p.ink}">${hi ? 'पांगा (Panga): उबालकर' : 'Panga: boiling brine'}</text>
        <text x="95" y="230" text-anchor="middle" font-size="7.6" fill="${p.ink}">${hi ? 'करकच (Karkach): वाष्पीकरण' : 'Karkach: solar evap'}</text>

        <!-- Panel 2: Distillation NCERT Fig 5.26 -->
        <rect x="188" y="34" width="308" height="222" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="342" y="52" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.purple.text}">${hi ? '2. सरल आसवन (ΔT ≥ 25 °C) बनाम प्रभाजी (ΔT < 25 °C)' : '2. Simple (ΔT ≥ 25°C) vs Fractional Distillation (ΔT < 25°C)'}</text>
        <!-- Flask क -->
        <circle cx="242" cy="144" r="24" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.8"/>
        <rect x="236" y="88" width="12" height="34" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <line x1="242" y1="74" x2="242" y2="112" stroke="${p.rose.stroke}" stroke-width="2"/>
        <text x="206" y="148" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber.text}">क</text>
        <text x="242" y="182" text-anchor="middle" font-size="7.5" font-weight="700" fill="${p.ink}">${hi ? 'आसवन फ्लास्क + बर्नर' : 'Distillation Flask (A)'}</text>
        <!-- Condenser ख -->
        <line x1="248" y1="100" x2="386" y2="144" stroke="${p.teal.stroke}" stroke-width="2.5"/>
        <rect x="275" y="96" width="90" height="22" rx="4" transform="rotate(17.5 320 107)" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="330" y="90" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber.text}">ख (${hi ? 'जल संघनित्र' : 'Condenser'})</text>
        <text x="330" y="142" text-anchor="middle" font-size="7.3" font-weight="700" fill="${p.teal.text}">${hi ? 'नीचे से ठंडा जल प्रवेश -> ऊपर निकास' : 'Cold Water IN bottom -> OUT top'}</text>
        <!-- Receiver ग -->
        <polygon points="390,178 416,178 408,148 398,148" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <text x="444" y="168" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber.text}">ग</text>
        <text x="412" y="191" text-anchor="middle" font-size="7.4" font-weight="700" fill="${p.ink}">${hi ? 'कम B.P. आसुत द्रव' : 'Lower-BP Distillate'}</text>

        <rect x="198" y="198" width="288" height="50" rx="6" fill="${p.card}" stroke="${p.border}"/>
        <text x="342" y="213" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.purple.text}">${hi ? 'टेबल 5.5 नियम: सरल = एसीटोन(56°C)+जल(100°C), ऐल्कोहॉल(78°C)+क्लोरोफॉर्म(61°C)? अंतर 17°C -> प्रभाजी!' : 'Table 5.5: Simple (ΔT≥25°C) = Acetone 56° + Water 100° | Fractional = Alcohol 78° + Benzene 80°!'}</text>
        <text x="342" y="227" text-anchor="middle" font-size="7.5" fill="${p.ink}">${hi ? 'कन्नौज ‘देग-भापका’ विधि = मिट्टी का इत्र (सोंधी सुगंध)  |  प्रभाजी = पेट्रोलियम शोधन' : 'Kannauj Deg-Bhapka = Mitti Attar Distillation | Petroleum Fractional Tower -> LPG, Petrol, Diesel'}</text>
        <text x="342" y="241" text-anchor="middle" font-size="7.4" font-weight="700" fill="${p.muted}">${hi ? 'Ex Q15 उत्तर: सरल आसवन से (क) जल+एसीटोन (Δ44°C) व (ख) जल+नमक पृथक होंगे!' : 'Ex Q15 Key: Simple handles Water+Acetone & Salt Water; Fractionating col needed for ΔT < 25°C'}</text>

        <!-- Panel 3: Paper Chromatography -->
        <rect x="506" y="34" width="162" height="222" rx="10" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.5"/>
        <text x="587" y="52" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.green.text}">${hi ? '3. कागज वर्णलेखिकी' : '3. Chromatography'}</text>
        <text x="587" y="66" text-anchor="middle" font-size="7.6" fill="${p.muted}">${hi ? 'Chroma (रंग) + Graphein' : 'Chroma (color) + Graphein'}</text>
        <rect x="556" y="74" width="62" height="128" rx="4" fill="${p.bg}" stroke="${p.border}" stroke-width="1.4"/>
        <!-- Solvent pool at bottom -->
        <rect x="557" y="182" width="60" height="19" fill="${p.blue.fill}" fill-opacity="0.65"/>
        <!-- Pencil baseline above solvent -->
        <line x1="560" y1="168" x2="614" y2="168" stroke="${p.muted}" stroke-width="1.4" stroke-dasharray="3 2"/>
        <!-- Ink dots separating -->
        <circle cx="587" cy="168" r="3" fill="${p.ink}"/>
        <ellipse cx="587" cy="142" rx="7" ry="4" fill="${p.amber.stroke}"/>
        <ellipse cx="587" cy="118" rx="7" ry="4" fill="${p.rose.stroke}"/>
        <ellipse cx="587" cy="94" rx="7" ry="4" fill="${p.blue.stroke}"/>
        <text x="587" y="215" text-anchor="middle" font-size="7.6" font-weight="800" fill="${p.ink}">${hi ? 'रेखा पेंसिल से (2 cm ऊपर)' : 'Pencil line 2cm ABOVE water!'}</text>
        <text x="587" y="229" text-anchor="middle" font-size="7.3" fill="${p.muted}">${hi ? 'अधिक विलेय रंजक सबसे ऊपर,' : 'Faster/more soluble climbs'}</text>
        <text x="587" y="242" text-anchor="middle" font-size="7.3" fill="${p.green.text}">${hi ? 'पुष्प वर्णक व 2% लवण जल भी!' : 'highest; Spinach/Flower dyes'}</text>

        <rect x="12" y="264" width="656" height="34" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="285" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.amber.text}">${hi ? '⚠️ मुख्य जाल प्रश्न: क्रोमैटोग्राफी में प्रारंभिक जल स्तर हमेशा स्याही बिंदु (पेंसिल रेखा) से नीचे रहना चाहिए (सोचिए और बताइए 6-iii असत्य!)' : '⚠️ Classic Exam Trap: Solvent level MUST remain BELOW the sample ink spot initially (Think Q6-iii)'}</text>
      </svg>`;
  }

  if (key === 'ch5-heterogeneous-sep') {
    return `
      <svg viewBox="0 0 680 288" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="284" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="23" text-anchor="middle" font-size="13" font-weight="800" fill="${p.teal.text}">${hi ? 'विषमांगी मिश्रण पृथक्करण (कीप, ऊर्ध्वपातन, अपकेंद्रण, स्कंदन) एवं मिश्रधातु' : 'Heterogeneous Separation (Funnel, Sublimation, Centrifuge, Coagulation) & Alloys'}</text>

        <!-- Q1 Funnel -->
        <rect x="12" y="34" width="158" height="190" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="91" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.amber.text}">${hi ? '1. पृथक्कारी कीप' : '1. Separating Funnel'}</text>
        <polygon points="56,64 126,64 98,128 84,128" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <polygon points="62,68 120,68 112,88 70,88" fill="#eab308" fill-opacity="0.7"/>
        <polygon points="71,90 111,90 98,126 84,126" fill="#38bdf8" fill-opacity="0.65"/>
        <text x="91" y="82" text-anchor="middle" font-size="7.5" font-weight="800" fill="${p.ink}">${hi ? 'तेल (हल्का)' : 'Oil (Top)'}</text>
        <text x="91" y="108" text-anchor="middle" font-size="7.5" font-weight="800" fill="${p.ink}">${hi ? 'जल (भारी)' : 'Water (Low)'}</text>
        <text x="91" y="148" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'दो अमिश्रणीय द्रव' : 'Immiscible Liquids'}</text>
        <text x="91" y="164" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'सिद्धांत: घनत्व अंतर!' : 'Principle: Density diff.'}</text>
        <text x="91" y="180" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'तेल 910 g/L < जल 1000 g/L' : 'Oil 910 g/L < Water 1000'}</text>
        <text x="91" y="196" text-anchor="middle" font-size="7.5" font-weight="700" fill="${p.amber.text}">${hi ? 'Ex Q5: तेल ऊपरी परत' : 'Ex Q5: Oil stays on TOP'}</text>

        <!-- Q2 Sublimation -->
        <rect x="178" y="34" width="160" height="190" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="258" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.purple.text}">${hi ? '2. ऊर्ध्वपातन (Sublimation)' : '2. Sublimation & Deposition'}</text>
        <polygon points="258,64 220,126 296,126" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.6"/>
        <circle cx="258" cy="64" r="5" fill="${p.ink}"/>
        <path d="M226 128 Q258 148 290 128 Z" fill="${p.rose.fill}" stroke="${p.rose.stroke}" stroke-width="1.4"/>
        <text x="258" y="114" text-anchor="middle" font-size="7.5" font-weight="800" fill="${p.ink}">${hi ? 'रुई डाट • निक्षेपण' : 'Pure Camphor Deposit'}</text>
        <text x="258" y="156" text-anchor="middle" font-size="8" font-weight="700" fill="${p.purple.text}">${hi ? 'ठोस ⇄ सीधे वाष्प (बिना द्रव)' : 'Solid ⇄ Gas Directly!'}</text>
        <text x="258" y="173" text-anchor="middle" font-size="7.5" fill="${p.ink}">${hi ? 'कपूर, नैफ्थलीन, शुष्क बर्फ (CO₂)' : 'Camphor, Naphthalene, Dry Ice'}</text>
        <text x="258" y="189" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'नोट: ठंडा हो पुनः ठोस = निक्षेपण' : 'Vapor -> Solid = Deposition'}</text>
        <text x="258" y="205" text-anchor="middle" font-size="7.4" font-weight="700" fill="${p.amber.text}">${hi ? 'Ex 11 क्रम: ऊर्ध्वपातन→घुलन→निस्यंदन' : 'Ex 11: Sublim -> Dissolve -> Filter'}</text>

        <!-- Q3 Centrifugation -->
        <rect x="346" y="34" width="160" height="190" rx="10" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.5"/>
        <text x="426" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.rose.text}">${hi ? '3. अपकेंद्रण (पेपरफ्यूज)' : '3. Centrifuge & Paperfuge'}</text>
        <rect x="412" y="64" width="28" height="72" rx="8" fill="${p.card}" stroke="${p.rose.stroke}" stroke-width="1.6"/>
        <rect x="413" y="65" width="26" height="32" fill="#fde68a"/>
        <rect x="413" y="97" width="26" height="8" fill="#cbd5e1"/>
        <rect x="413" y="105" width="26" height="30" fill="#e11d48"/>
        <text x="426" y="83" text-anchor="middle" font-size="7" font-weight="800" fill="#0f172a">${hi ? 'प्लाज्मा' : 'Plasma'}</text>
        <text x="426" y="122" text-anchor="middle" font-size="7" font-weight="800" fill="#ffffff">RBC</text>
        <text x="426" y="156" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'तीव्र घूर्णन (अपकेंद्रीय बल)' : 'Centrifugal Spin Force'}</text>
        <text x="426" y="173" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'भारी RBC तली में; हल्का प्लाज्मा ऊपर' : 'Heavy RBC bottom, Plasma top'}</text>
        <text x="426" y="189" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'पेपरफ्यूज: बिना बिजली मलेरिया जांच' : 'Paperfuge: off-grid diagnosis'}</text>
        <text x="426" y="205" text-anchor="middle" font-size="7.4" font-weight="700" fill="${p.rose.text}">${hi ? 'लोक नृत्य: फुगड़ी (मराठी) / कीकली' : 'Phugadi / Kikali spin analogy'}</text>

        <!-- Q4 Coagulation -->
        <rect x="514" y="34" width="154" height="190" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="591" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.teal.text}">${hi ? '4. स्कंदन (Coagulation)' : '4. Coagulation & Alum'}</text>
        <rect x="556" y="66" width="70" height="66" rx="6" fill="${p.card}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <circle cx="576" cy="118" r="5" fill="${p.amber.stroke}"/><circle cx="590" cy="121" r="6" fill="${p.amber.stroke}"/><circle cx="606" cy="118" r="5" fill="${p.amber.stroke}"/>
        <text x="591" y="90" text-anchor="middle" font-size="7.6" font-weight="800" fill="${p.teal.text}">${hi ? '+ फिटकरी (Alum)' : '+ Alum Crystal'}</text>
        <text x="591" y="103" text-anchor="middle" font-size="7.2" fill="${p.ink}">${hi ? 'सूक्ष्म कीचड़ गुच्छे' : 'Clumps fine silt'}</text>
        <text x="591" y="156" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'स्कंदक -> गुच्छे -> अवसादन' : 'Coagulant -> Flocs -> Settle'}</text>
        <text x="591" y="173" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'पंकिल जल: फिटकरी (Alum)' : 'Muddy water: Alum coagulant'}</text>
        <text x="591" y="189" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'दूध → पनीर: नींबू/सिरका अम्ल' : 'Milk -> Paneer: Acid/Vinegar'}</text>
        <text x="591" y="205" text-anchor="middle" font-size="7.4" font-weight="700" fill="${p.teal.text}">${hi ? 'फिर निस्तारण या निस्यंदन!' : 'Follow with Decant / Filter'}</text>

        <!-- Bottom Alloys Strip -->
        <rect x="12" y="232" width="656" height="44" rx="9" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.3"/>
        <text x="340" y="250" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.blue.text}">${hi ? 'मिश्रधातु (Alloys = ठोस समांगी विलयन! भौतिक विधि से पृथक नहीं, पर परिवर्ती संघटन कारण मिश्रण — NTPC 2025 PYQ)' : 'Alloys (Solid Homogeneous Solutions! Show constituent properties -> classified as Mixtures — NTPC 2025 PYQ)'}</text>
        <text x="340" y="266" text-anchor="middle" font-size="8.4" font-weight="700" fill="${p.ink}">${hi ? 'पीतल (Brass): ~80% Cu + 20% Zn  |  काँसा (Bronze): ~80% Cu + 20% Sn  |  स्टेनलेस स्टील: Fe + C (0.03–0.8%) + Cr (16–18%) + Ni (10–14%) + Mo (2–3%)' : 'Brass: ~80% Cu + 20% Zn  |  Bronze: ~80% Cu + 20% Sn  |  Stainless Steel: Fe + C (0.03–0.8%) + Cr (16–18%) + Ni (10–14%) + Mo (2–3%)'}</text>
      </svg>`;
  }

  return '';
}
