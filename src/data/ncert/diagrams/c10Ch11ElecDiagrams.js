/**
 * Pure-SVG Vector Diagram Plates for Class 10 Physics Chapter 11:
 * Electricity (विद्युत — jhsc111, New NCERT 2026–27 Edition)
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

export function renderC10Ch11ElecDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.a;

  if (key === 'c10-ch11-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '11.1–11.2 धारा व विभव' : '11.1–11.2 I & Voltage', s: hi ? 'I=Q/t (A) • V=W/Q (V)' : '1C=6×10¹⁸e⁻ • V=W/Q', c: p.teal },
      { x: 145, t: hi ? '11.3–11.4 प्रतीक व ओम' : '11.3–11.4 Symbols & Ohm', s: hi ? '11 प्रतीक • V=IR (सरल रेखा)' : '11 Symbols • V-I Linear', c: p.blue },
      { x: 280, t: hi ? '11.5 प्रतिरोधकता (ρ)' : '11.5 R = ρ·l/A & Alloys', s: hi ? 'Ω·m • तार खींचने पर n²R' : 'Unit Ω·m • Alloys > Metals', c: p.amber },
      { x: 415, t: hi ? '11.6 श्रेणी व पार्श्वक्रम' : '11.6 Series vs Parallel', s: hi ? 'Rs=ΣR • 1/Rp=Σ(1/R)' : 'Home = Parallel (Same V)', c: p.purple },
      { x: 550, t: hi ? '11.7–11.8 तापन व kWh' : '11.7–11.8 Heat & Power', s: hi ? 'H=I²Rt • P=VI • 3.6×10⁶J' : 'H=I²Rt • 1 kWh = 3.6 MJ', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 124" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bm11_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="120" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 11 संपूर्ण मानचित्र — विद्युत (New NCERT 2026–27 • #3 सर्वाधिक PYQ)' : 'Chapter 11 Complete Blueprint — Electricity (2026–27 • #3 Highest PYQ)'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="122" height="74" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 61}" y="61" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 61}" y="82" text-anchor="middle" font-size="8.2" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 123}" y1="71" x2="${n.x + 138}" y2="71" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#bm11_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'c10-ch11-symbols-ohms-law') {
    return `
      <svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="arO11_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="326" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.teal.text}">${hi ? '11.3–11.4 सभी 11 NCERT परिपथ प्रतीक (Table 11.1), ओम का नियम V–I ग्राफ व एमीटर बनाम वोल्टमीटर' : '11.3–11.4 All 11 NCERT Circuit Symbols (Table 11.1), Ohm’s Law V–I Graph & Meter Traps'}</text>

        <!-- Left: 11 Circuit Symbols -->
        <rect x="14" y="34" width="356" height="282" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="192" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.blue.text}">${hi ? 'सारणी 11.1 — 11 मानक विद्युत परिपथ प्रतीक' : 'Table 11.1 — 11 Standard Circuit Symbols'}</text>

        <!-- 1. Cell -->
        <text x="26" y="76" font-size="8.2" font-weight="700" fill="${p.ink}">1. ${hi ? 'सेल (Cell)' : 'Electric Cell'}</text>
        <line x1="120" y1="73" x2="146" y2="73" stroke="${p.ink}" stroke-width="1.5"/>
        <line x1="146" y1="63" x2="146" y2="83" stroke="${p.amber.stroke}" stroke-width="2"/>
        <line x1="154" y1="68" x2="154" y2="78" stroke="${p.ink}" stroke-width="3"/>
        <line x1="154" y1="73" x2="180" y2="73" stroke="${p.ink}" stroke-width="1.5"/>

        <!-- 2. Battery -->
        <text x="200" y="76" font-size="8.2" font-weight="700" fill="${p.ink}">2. ${hi ? 'बैटरी' : 'Battery'}</text>
        <line x1="256" y1="73" x2="270" y2="73" stroke="${p.ink}" stroke-width="1.4"/>
        <line x1="270" y1="63" x2="270" y2="83" stroke="${p.amber.stroke}" stroke-width="1.8"/><line x1="276" y1="68" x2="276" y2="78" stroke="${p.ink}" stroke-width="2.6"/>
        <line x1="286" y1="63" x2="286" y2="83" stroke="${p.amber.stroke}" stroke-width="1.8"/><line x1="292" y1="68" x2="292" y2="78" stroke="${p.ink}" stroke-width="2.6"/>
        <line x1="292" y1="73" x2="340" y2="73" stroke="${p.ink}" stroke-width="1.4"/>

        <!-- 3. Open Key -->
        <text x="26" y="114" font-size="8.2" font-weight="700" fill="${p.ink}">3. ${hi ? 'खुली कुंजी' : 'Open Switch'}</text>
        <line x1="120" y1="111" x2="142" y2="111" stroke="${p.ink}" stroke-width="1.5"/><text x="145" y="115" font-size="12" fill="${p.teal.text}">( )</text><line x1="164" y1="111" x2="182" y2="111" stroke="${p.ink}" stroke-width="1.5"/>

        <!-- 4. Closed Key -->
        <text x="200" y="114" font-size="8.2" font-weight="700" fill="${p.ink}">4. ${hi ? 'बंद कुंजी' : 'Closed Key'}</text>
        <line x1="266" y1="111" x2="286" y2="111" stroke="${p.ink}" stroke-width="1.5"/><text x="288" y="115" font-size="12" fill="${p.teal.text}">(•)</text><line x1="308" y1="111" x2="338" y2="111" stroke="${p.ink}" stroke-width="1.5"/>

        <!-- 5. Wire Joint -->
        <text x="26" y="152" font-size="8.2" font-weight="700" fill="${p.ink}">5. ${hi ? 'तार संधि' : 'Wire Joint'}</text>
        <line x1="120" y1="149" x2="182" y2="149" stroke="${p.ink}" stroke-width="1.5"/><line x1="151" y1="149" x2="151" y2="165" stroke="${p.ink}" stroke-width="1.5"/><circle cx="151" cy="149" r="3" fill="${p.amber.stroke}"/>

        <!-- 6. Wire Crossing -->
        <text x="200" y="152" font-size="8.2" font-weight="700" fill="${p.ink}">6. ${hi ? 'बिना संधि क्रॉस' : 'No-Join Cross'}</text>
        <line x1="268" y1="154" x2="336" y2="154" stroke="${p.ink}" stroke-width="1.5"/><line x1="302" y1="136" x2="302" y2="148" stroke="${p.ink}" stroke-width="1.5"/><path d="M 302 148 A 6 6 0 0 1 302 160" fill="none" stroke="${p.ink}" stroke-width="1.5"/><line x1="302" y1="160" x2="302" y2="168" stroke="${p.ink}" stroke-width="1.5"/>

        <!-- 7. Bulb -->
        <text x="26" y="192" font-size="8.2" font-weight="700" fill="${p.ink}">7. ${hi ? 'विद्युत बल्ब' : 'Electric Bulb'}</text>
        <line x1="120" y1="189" x2="140" y2="189" stroke="${p.ink}" stroke-width="1.5"/><circle cx="152" cy="189" r="11" fill="none" stroke="${p.amber.stroke}" stroke-width="1.6"/><path d="M 146 189 Q 152 179 158 189" fill="none" stroke="${p.amber.stroke}" stroke-width="1.6"/><line x1="163" y1="189" x2="182" y2="189" stroke="${p.ink}" stroke-width="1.5"/>

        <!-- 8. Resistor -->
        <text x="200" y="192" font-size="8.2" font-weight="700" fill="${p.ink}">8. ${hi ? 'प्रतिरोधक (R)' : 'Resistor (R)'}</text>
        <polyline points="266,189 278,189 283,182 290,196 297,182 304,196 311,182 318,196 323,189 340,189" fill="none" stroke="${p.rose.stroke}" stroke-width="1.8"/>

        <!-- 9. Rheostat -->
        <text x="26" y="232" font-size="8.2" font-weight="700" fill="${p.ink}">9. ${hi ? 'धारा नियंत्रक' : 'Rheostat'}</text>
        <polyline points="120,231 128,231 133,224 140,238 147,224 154,238 161,224 168,238 173,231 182,231" fill="none" stroke="${p.green.stroke}" stroke-width="1.7"/>
        <line x1="136" y1="242" x2="168" y2="218" stroke="${p.amber.stroke}" stroke-width="1.6" marker-end="url(#arO11_${theme})"/>

        <!-- 10. Ammeter & 11. Voltmeter -->
        <text x="26" y="274" font-size="8.2" font-weight="700" fill="${p.ink}">10. ${hi ? 'एमीटर (+ / −)' : 'Ammeter (A)'}</text>
        <line x1="118" y1="271" x2="136" y2="271" stroke="${p.ink}" stroke-width="1.4"/><circle cx="150" cy="271" r="12" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.6"/><text x="150" y="275" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">A</text><line x1="162" y1="271" x2="180" y2="271" stroke="${p.ink}" stroke-width="1.4"/>

        <text x="200" y="274" font-size="8.2" font-weight="700" fill="${p.ink}">11. ${hi ? 'वोल्टमीटर' : 'Voltmeter (V)'}</text>
        <line x1="274" y1="271" x2="290" y2="271" stroke="${p.ink}" stroke-width="1.4"/><circle cx="304" cy="271" r="12" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.6"/><text x="304" y="275" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">V</text><line x1="316" y1="271" x2="334" y2="271" stroke="${p.ink}" stroke-width="1.4"/>
        <text x="192" y="305" text-anchor="middle" font-size="8.3" font-weight="700" fill="${p.amber.text}">${hi ? '★ धारा दिशा: बैटरी (+) से (−) की ओर (इलेक्ट्रॉन गति के विपरीत!)' : '★ Current Flow: (+) to (−) Battery Terminal (Opposite to e⁻ Flow!)'}</text>

        <!-- Right: Ohm's Law V-I Graph + Meter Traps -->
        <rect x="382" y="34" width="284" height="172" rx="10" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="524" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.amber.text}">${hi ? 'ओम का नियम (1827): नियत ताप पर V ∝ I (Fig 11.3)' : 'Ohm’s Law (Constant T): V ∝ I (Fig 11.3 Graph)'}</text>
        <line x1="422" y1="166" x2="640" y2="166" stroke="${p.ink}" stroke-width="1.6"/>
        <line x1="422" y1="68" x2="422" y2="166" stroke="${p.ink}" stroke-width="1.6"/>
        <line x1="422" y1="166" x2="616" y2="76" stroke="${p.teal.stroke}" stroke-width="2.6"/>
        <circle cx="422" cy="166" r="3" fill="${p.amber.stroke}"/>
        <text x="408" y="84" font-size="8.5" font-weight="800" fill="${p.ink}">V</text>
        <text x="644" y="169" font-size="8.5" font-weight="800" fill="${p.ink}">I</text>
        <text x="530" y="138" font-size="9" font-weight="800" fill="${p.teal.text}">${hi ? 'ढाल Slope = V / I = R (Ω)' : 'Slope = V / I = Resistance (R)'}</text>
        <text x="524" y="186" text-anchor="middle" font-size="8.3" font-weight="700" fill="${p.ink}">${hi ? 'मूल बिंदु (0,0) से गुजरती सीधी सरल रेखा • 1 Ω = 1 V / 1 A' : 'Straight Line Through Origin • 1 Ω = 1 V / 1 A'}</text>

        <!-- Bottom Right: Ammeter vs Voltmeter -->
        <rect x="382" y="216" width="284" height="100" rx="10" fill="${p.card}" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="524" y="234" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.teal.text}">${hi ? 'मापक यंत्र जाल (★ RRB Favorite)' : 'Ammeter vs Voltmeter Exam Comparison'}</text>
        <rect x="392" y="242" width="128" height="64" rx="7" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.2"/>
        <text x="456" y="257" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.blue.text}">${hi ? 'एमीटर (Current I)' : 'Ammeter (Current I)'}</text>
        <text x="456" y="274" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'सदैव श्रेणीक्रम (Series)' : 'Always SERIES'}</text>
        <text x="456" y="290" text-anchor="middle" font-size="8" font-weight="700" fill="${p.green.text}">${hi ? 'न्यूनतम प्रतिरोध (आदर्श ≈ 0)' : 'Very Low R (Ideal ≈ 0)'}</text>

        <rect x="528" y="242" width="128" height="64" rx="7" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.2"/>
        <text x="592" y="257" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.purple.text}">${hi ? 'वोल्टमीटर (Voltage V)' : 'Voltmeter (Voltage V)'}</text>
        <text x="592" y="274" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'सदैव पार्श्वक्रम (Parallel)' : 'Always PARALLEL'}</text>
        <text x="592" y="290" text-anchor="middle" font-size="8" font-weight="700" fill="${p.rose.text}">${hi ? 'उच्च प्रतिरोध (आदर्श = ∞)' : 'High R (Ideal = ∞)'}</text>
      </svg>`;
  }

  if (key === 'c10-ch11-series-parallel-resistivity') {
    return `
      <svg viewBox="0 0 680 318" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="314" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.teal.text}">${hi ? '11.5–11.6 प्रतिरोध R = ρ(l/A) बनाम प्रतिरोधकता ρ, श्रेणीक्रम बनाम पार्श्वक्रम परिपथ संयोजन' : '11.5–11.6 Resistance R = ρ(l/A) vs Resistivity ρ, Series vs Parallel Combinations'}</text>

        <!-- Panel 1: Series Circuit -->
        <rect x="14" y="34" width="320" height="150" rx="10" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="174" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.amber.text}">${hi ? 'श्रेणीक्रम (Series — Fig 11.6): एकल धारा पथ' : 'Series Circuit (Fig 11.6): Single Current Path'}</text>
        <line x1="48" y1="86" x2="72" y2="86" stroke="${p.ink}" stroke-width="1.8"/>
        <rect x="72" y="76" width="46" height="20" rx="4" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/><text x="95" y="90" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.ink}">R₁</text>
        <line x1="118" y1="86" x2="148" y2="86" stroke="${p.ink}" stroke-width="1.8"/>
        <rect x="148" y="76" width="46" height="20" rx="4" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/><text x="171" y="90" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.ink}">R₂</text>
        <line x1="194" y1="86" x2="224" y2="86" stroke="${p.ink}" stroke-width="1.8"/>
        <rect x="224" y="76" width="46" height="20" rx="4" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/><text x="247" y="90" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.ink}">R₃</text>
        <line x1="270" y1="86" x2="296" y2="86" stroke="${p.ink}" stroke-width="1.8"/>
        <text x="174" y="122" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">Rs = R₁ + R₂ + R₃  (V = V₁ + V₂ + V₃)</text>
        <text x="174" y="142" text-anchor="middle" font-size="8.4" font-weight="700" fill="${p.teal.text}">${hi ? '✓ सभी में धारा I समान | Rs सबसे बड़े R से भी अधिक' : '✓ SAME Current I | Rs > Greatest Single R'}</text>
        <text x="174" y="162" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.rose.text}">${hi ? '✗ हानि: 1 बल्ब फ्यूज होने पर पूरा परिपथ बंद (लड़ियाँ)!' : '✗ Defect: 1 Bulb Fuses → ENTIRE Circuit Stops!'}</text>

        <!-- Panel 2: Parallel Circuit -->
        <rect x="346" y="34" width="320" height="150" rx="10" fill="${p.card}" stroke="${p.green.stroke}" stroke-width="1.4"/>
        <text x="506" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.green.text}">${hi ? 'पार्श्वक्रम (Parallel — Fig 11.7): घरेलू परिपथ ★' : 'Parallel Circuit (Fig 11.7): Home Wiring ★'}</text>
        <line x1="418" y1="68" x2="418" y2="112" stroke="${p.ink}" stroke-width="1.8"/>
        <line x1="594" y1="68" x2="594" y2="112" stroke="${p.ink}" stroke-width="1.8"/>
        <line x1="382" y1="90" x2="418" y2="90" stroke="${p.ink}" stroke-width="1.8"/>
        <line x1="594" y1="90" x2="630" y2="90" stroke="${p.ink}" stroke-width="1.8"/>
        <line x1="418" y1="68" x2="594" y2="68" stroke="${p.ink}" stroke-width="1.5"/>
        <line x1="418" y1="90" x2="594" y2="90" stroke="${p.ink}" stroke-width="1.5"/>
        <line x1="418" y1="112" x2="594" y2="112" stroke="${p.ink}" stroke-width="1.5"/>
        <rect x="478" y="60" width="56" height="15" rx="3" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}"/><text x="506" y="71" text-anchor="middle" font-size="8" font-weight="800" fill="${p.ink}">R₁ (I₁)</text>
        <rect x="478" y="82" width="56" height="15" rx="3" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}"/><text x="506" y="93" text-anchor="middle" font-size="8" font-weight="800" fill="${p.ink}">R₂ (I₂)</text>
        <rect x="478" y="104" width="56" height="15" rx="3" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}"/><text x="506" y="115" text-anchor="middle" font-size="8" font-weight="800" fill="${p.ink}">R₃ (I₃)</text>
        <text x="506" y="136" text-anchor="middle" font-size="9.3" font-weight="800" fill="${p.ink}">1/Rp = 1/R₁ + 1/R₂ + 1/R₃  (I = I₁ + I₂ + I₃)</text>
        <text x="506" y="155" text-anchor="middle" font-size="8.3" font-weight="700" fill="${p.green.text}">${hi ? '✓ सभी पर वोल्टता V समान | Rp सबसे छोटे R से भी कम!' : '✓ SAME Voltage V | Rp < Smallest Single R!'}</text>
        <text x="506" y="172" text-anchor="middle" font-size="8.1" font-weight="700" fill="${p.teal.text}">${hi ? '✓ अलग स्विच व 1 खराब होने पर भी अन्य चलते रहते हैं' : '✓ Independent Switches & Own Current Need!'}</text>

        <!-- Bottom: R = rho l/A & Stretching vs Resistivity -->
        <rect x="14" y="194" width="652" height="112" rx="10" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="340" y="212" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.purple.text}">${hi ? '11.5 प्रतिरोध के 4 कारक व प्रतिरोधकता (R = ρ · l / A | ρ मात्रक = Ω·m)' : '11.5 Factors Affecting Resistance & Resistivity (R = ρ · l / A | ρ SI Unit = Ω·m)'}</text>
        <rect x="28" y="224" width="200" height="70" rx="8" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.2"/>
        <text x="128" y="242" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.blue.text}">${hi ? 'लंबाई (l) व मोटाई (A)' : 'Length (l) & Thickness (A)'}</text>
        <text x="128" y="259" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'R ∝ l | R ∝ 1/A (A = πr²)' : 'R ∝ l | R ∝ 1/A (A = πr²)'}</text>
        <text x="128" y="276" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'व्यास 2× करने पर R = 1/4 गुना!' : 'Doubling diameter → R drops to 1/4!'}</text>

        <rect x="242" y="224" width="200" height="70" rx="8" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.2"/>
        <text x="342" y="242" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.rose.text}">${hi ? 'प्रतिरोधकता ρ केवल 2 पर निर्भर' : 'Resistivity ρ Depends ONLY on 2'}</text>
        <text x="342" y="259" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? '1) पदार्थ की प्रकृति  2) ताप (T)' : '1) Material Nature  2) Temp (T)'}</text>
        <text x="342" y="276" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'तार खींचने/काटने से ρ नहीं बदलता! (R’=n²R)' : 'Stretching never changes ρ! (R’ = n²R)'}</text>

        <rect x="456" y="224" width="196" height="70" rx="8" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.2"/>
        <text x="554" y="242" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.amber.text}">${hi ? 'Table 11.2 टॉप चालक-मिश्रातु' : 'Table 11.2 Conductors & Alloys'}</text>
        <text x="554" y="259" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'सर्वोत्तम: Ag (1.60e-8) > Cu > Al' : 'Best: Ag (1.60e-8) > Cu (1.62e-8)'}</text>
        <text x="554" y="276" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'निक्रोम = Ni+Cr+Mn+Fe (हीटर-इस्तरी)' : 'Nichrome Alloy: High ρ, No Oxidation!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch11-joule-heating-power') {
    return `
      <svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="306" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.teal.text}">${hi ? '11.7–11.8 जूल तापन नियम (H = I²Rt), बल्ब व फ्यूज, विद्युत शक्ति (P) व व्यापारिक मात्रक (1 kWh = 3.6×10⁶ J)' : '11.7–11.8 Joule Heating (H = I²Rt), Bulb & Fuse, Electric Power (P) & Commercial 1 kWh = 3.6×10⁶ J'}</text>

        <!-- Panel 1: Joule Heating & 3 Applications -->
        <rect x="14" y="34" width="320" height="262" rx="10" fill="${p.card}" stroke="${p.rose.stroke}" stroke-width="1.4"/>
        <text x="174" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.rose.text}">${hi ? 'जूल का तापन नियम: H = VIt = I²Rt = (V²/R)t' : 'Joule’s Law of Heating: H = VIt = I²Rt = (V²/R)t'}</text>
        <rect x="28" y="64" width="292" height="44" rx="8" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.2"/>
        <text x="174" y="82" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.ink}">${hi ? 'H ∝ I² (धारा दुगुनी → ऊष्मा 4×) | H ∝ R | H ∝ t' : 'H ∝ I² (2× Current → 4× Heat!) | H ∝ R | H ∝ t'}</text>
        <text x="174" y="99" text-anchor="middle" font-size="8.2" fill="${p.muted}">${hi ? 'नियत V पर पार्श्वक्रम में कम R वाला अधिक गर्म (V²t/R)!' : 'Fixed V → Use V²t/R; Fixed I → Use I²Rt!'}</text>

        <rect x="28" y="120" width="292" height="50" rx="8" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.2"/>
        <text x="174" y="138" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.amber.text}">${hi ? '1) बल्ब तंतु: टंगस्टन (गलनांक 3380 °C) ★ PYQ' : '1) Incandescent Bulb: Tungsten Filament (3380 °C)'}</text>
        <text x="174" y="156" text-anchor="middle" font-size="8.1" font-weight="700" fill="${p.ink}">${hi ? 'अक्रिय गैसें N₂ + Ar भरते हैं ताकि तंतु ऑक्सीकृत न हो!' : 'Filled with inert Nitrogen (N₂) + Argon (Ar) to prevent oxidation!'}</text>

        <rect x="28" y="180" width="292" height="50" rx="8" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.2"/>
        <text x="174" y="198" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.blue.text}">${hi ? '2) सुरक्षा फ्यूज तार: श्रेणीक्रम + निम्न गलनांक!' : '2) Safety Fuse Wire: Series + Low Melting Point!'}</text>
        <text x="174" y="216" text-anchor="middle" font-size="8.1" font-weight="700" fill="${p.ink}">${hi ? 'Pb–Sn मिश्रातु • अधिक धारा पर पिघलकर परिपथ तोड़ता है' : 'Pb–Sn / Al-Cu-Pb • Melts immediately on overcurrent!'}</text>

        <rect x="28" y="240" width="292" height="44" rx="8" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.2"/>
        <text x="174" y="257" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.teal.text}">${hi ? '3) हीटर/इस्तरी: निक्रोम (उच्च ρ + उच्च ताप पर दहन नहीं)' : '3) Toaster/Iron: Nichrome (High ρ + Non-oxidizing)'}</text>
        <text x="174" y="274" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">${hi ? 'डोरी मोटा ताँबा = कम R अतः डोरी गर्म नहीं होती (p.210 Q1)' : 'Copper cord low R stays cool while coil turns red-hot!'}</text>

        <!-- Panel 2: Electric Power & kWh -->
        <rect x="346" y="34" width="320" height="262" rx="10" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="506" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.purple.text}">${hi ? '11.8 विद्युत शक्ति (P) एवं 1 kWh ("यूनिट") गणना' : '11.8 Electric Power (P) & Commercial Unit (1 kWh)'}</text>
        <rect x="360" y="64" width="292" height="58" rx="8" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.2"/>
        <text x="506" y="83" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">P = W/t = V·I = I²R = V²/R</text>
        <text x="506" y="100" text-anchor="middle" font-size="8.3" font-weight="700" fill="${p.purple.text}">${hi ? 'SI मात्रक: वाट (1 W = 1 V·A = 1 J/s) | 1 kW = 1000 W' : 'SI Unit: Watt (1 W = 1 V·A = 1 J/s) | Note: P ≠ IR!'}</text>
        <text x="506" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="${p.rose.text}">${hi ? 'सावधानी: IR² व IR शक्ति के गलत सूत्र हैं (Ex Q2)!' : 'Exam Trap (Ex Q2): IR² is NOT electric power!'}</text>

        <rect x="360" y="132" width="292" height="72" rx="8" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.2"/>
        <text x="506" y="151" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.green.text}">${hi ? '1 kWh (1 बोर्ड यूनिट) = 3.6 × 10⁶ जूल (J) ★' : '1 kWh ("1 Unit") = 3.6 × 10⁶ Joules (J) ★'}</text>
        <text x="506" y="170" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.ink}">1000 W × 3600 s = 36,00,000 J = 3.6 MJ</text>
        <text x="506" y="189" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.green.text}">${hi ? 'बिल यूनिट = (कुल वाट × घंटे/दिन × दिन) ÷ 1000' : 'Units (kWh) = (Watt × Hours/day × Days) ÷ 1000'}</text>

        <rect x="360" y="214" width="292" height="70" rx="8" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.2"/>
        <text x="506" y="233" text-anchor="middle" font-size="9" font-weight="800" fill="${p.amber.text}">${hi ? 'बल्ब वोल्टता ड्रॉप जाल (NCERT Ex Q3 — 220V→110V)' : 'Bulb Voltage Drop Shortcut (Ex Q3 — 220V→110V)'}</text>
        <text x="506" y="252" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.ink}">${hi ? '220 V; 100 W को 110 V (आधे V) पर चलाने पर:' : 'Bulb rated 220 V; 100 W run at 110 V (V halved):'}</text>
        <text x="506" y="270" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.rose.text}">${hi ? 'P_new = P_rated × (V_new / V_rated)² = 100 × (½)² = 25 W!' : 'P_new = P_rated × (V_new / V_rated)² = 100 × (½)² = 25 W!'}</text>
      </svg>`;
  }

  return '';
}
