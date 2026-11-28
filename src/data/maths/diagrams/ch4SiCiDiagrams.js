/**
 * Pure-SVG Vector Diagram Engine for Maths Chapter 4: Simple & Compound Interest + Installments
 * Smart Board Crisp Edition — Devanagari Hindi + English Math Terms, Dual Theme (Dark UI & Light PDF).
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

export function renderMathsCh4DiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.alpha;

  if (key === 'ch4-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '4.1 साधारण ब्याज' : '4.1 SI Engine', s: hi ? 'R×T% व k-गुना' : 'RT% & k-Times', c: p.teal },
      { x: 145, t: hi ? '4.2 CI की 4 विधि' : '4.2 CI 4-Way', s: hi ? 'रेश्यो, ट्री, दर व क्रमिक' : 'Ratio, Tree & Rate', c: p.blue },
      { x: 280, t: hi ? '4.3 छमाही/तिमाही' : '4.3 Comp Freq', s: hi ? 'r/2, 2n व r/4, 4n' : 'Half & Quarterly', c: p.amber },
      { x: 415, t: hi ? '4.4 CI − SI अंतर' : '4.4 CI−SI Diff', s: hi ? '2 व 3 वर्ष + P=a²/b' : '2/3 Yr + P=a²/b', c: p.rose },
      { x: 550, t: hi ? '4.5–4.7 किस्त/बंट' : '4.5–4.7 Install', s: hi ? 'k^n समय व आयु विभाजन' : 'Exp Times & EMI', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 116" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="m4Arr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="112" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 4: साधारण एवं चक्रवृद्धि ब्याज + किस्त — स्मार्ट बोर्ड रोडमैप' : 'Ch 4: Simple & Compound Interest + Installments — Smart Board Roadmap'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="31" width="120" height="70" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.5"/>
          <text x="${n.x + 60}" y="55" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 60}" y="76" text-anchor="middle" font-size="8.0" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 121}" y1="66" x2="${n.x + 133}" y2="66" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#m4Arr_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'ch4-si-scaling-times') {
    return `
      <svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="166" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.teal.text}">${hi ? 'साधारण ब्याज (SI): रेखीय अंतराल व "k-गुना" नियम तुलना' : 'Simple Interest (SI): Constant Annual Gap & "k-Times" Comparison'}</text>
        <rect x="16" y="34" width="318" height="120" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="175" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.teal.text}">${hi ? '1) k-गुना नियम: R × T = (k − 1) × 100' : '1) Sum Becomes k Times: R × T = (k − 1) × 100'}</text>
        <text x="175" y="77" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">${hi ? 'दोगुना (2×) ⇒ कुल ब्याज = 100%' : 'Doubles (2×) ⇒ Earned SI = 100%'}</text>
        <text x="175" y="98" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.amber.text}">20% ⇒ T = 100/20 = 5 Yrs  |  8 Yrs ⇒ R = 12.5%</text>
        <text x="175" y="120" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.rose.text}">${hi ? 'जाल: 7% मासिक दर (per month) को ÷12 न करें!' : 'Trap: NEVER divide "per month" rate by 12!'}</text>
        <text x="175" y="139" text-anchor="middle" font-size="8.8" font-weight="600" fill="${p.muted}">${hi ? '7% प्रति माह (9 माह) = सीधे 63% ब्याज' : '7% per month for 9 months = Direct 63% SI'}</text>

        <rect x="346" y="34" width="318" height="120" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="505" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.blue.text}">${hi ? '2) दो मिश्रधन (t₁ में A₁, t₂ में A₂)' : '2) Two SI Amounts (A₁ in t₁, A₂ in t₂)'}</text>
        <text x="505" y="77" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">${hi ? 'प्रति वर्ष SI = (A₂ − A₁) ÷ (t₂ − t₁)' : '1-Year SI = (A₂ − A₁) ÷ (t₂ − t₁)'}</text>
        <text x="505" y="98" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.green.text}">${hi ? '5 वर्ष: ₹21,500 | 8 वर्ष: ₹26,000' : '5 Yrs: ₹21,500 | 8 Yrs: ₹26,000'}</text>
        <text x="505" y="118" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.amber.text}">${hi ? '3 वर्ष SI = ₹4,500 ⇒ 1 वर्ष = ₹1,500' : '3-Yr Gap = ₹4,500 ⇒ ₹1,500 / yr'}</text>
        <text x="505" y="139" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.ink}">${hi ? 'मूलधन = 21,500 − 5(1,500) = ₹14,000!' : 'Principal = 21,500 − 5(1,500) = ₹14,000!'}</text>
      </svg>`;
  }

  if (key === 'ch4-ci-4methods-tree') {
    return `
      <svg viewBox="0 0 680 182" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="178" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber.text}">${hi ? 'चक्रवृद्धि ब्याज (CI): 3-वर्ष गोल्डन ट्री (3a + 3b + c) बनाम रेश्यो घात' : 'Compound Interest (CI): 3-Yr Tree (3a + 3b + c) vs Ratio Powers'}</text>
        <rect x="16" y="34" width="318" height="132" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="175" y="54" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.amber.text}">${hi ? '1) गोल्डन ब्याज ट्री (P → 3 वर्ष)' : '1) Golden 3-Year Interest Tree (P)'}</text>
        <text x="175" y="75" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.ink}">${hi ? 'वर्ष 1:' : 'Year 1:'}   [ a ]   (Simple Interest / yr)</text>
        <text x="175" y="95" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.green.text}">${hi ? 'वर्ष 2:' : 'Year 2:'}   [ a ] + [ b ]   (b = r% of a)</text>
        <text x="175" y="115" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.blue.text}">${hi ? 'वर्ष 3:' : 'Year 3:'}   [ a ] + [ 2b ] + [ c ]   (c = r% of b)</text>
        <text x="175" y="138" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.rose.text}">2-Yr Diff = b  |  3-Yr Diff = 3b + c</text>
        <text x="175" y="156" text-anchor="middle" font-size="8.6" font-weight="600" fill="${p.muted}">${hi ? 'यदि 2-Yr SI व CI ज्ञात हो: P = a² / b सीधा सूत्र!' : 'Given 2-Yr SI & CI: Principal P = a² / b!'}</text>

        <rect x="346" y="34" width="318" height="132" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="505" y="54" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.teal.text}">${hi ? '2) मानक प्रभावी दर व घन अनुपात शॉर्टकट्स' : '2) Ready-to-Use Effective % & Cube Powers'}</text>
        <text x="505" y="77" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.ink}">5% (1/20): 2 Yr = 400→441 (10.25%) | 3 Yr = 15.7625%</text>
        <text x="505" y="98" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.amber.text}">10% (1/10): 2 Yr = 21% | 3 Yr = 33.1% | 4 Yr = 46.41%</text>
        <text x="505" y="119" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.blue.text}">20% (1/5): 2 Yr = 25→36 (44%) | 3 Yr = 125→216 (72.8%)</text>
        <text x="505" y="140" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.purple.text}">4% (1/25): 2 Yr = 8.16% | 6%: 12.36% | 8%: 16.64%</text>
        <text x="505" y="158" text-anchor="middle" font-size="8.5" font-weight="600" fill="${p.muted}">${hi ? '2 वर्ष में A₁:A₂ देखते ही वर्ग (a²:b²), 3 वर्ष में घन (a³:b³) जांचें!' : 'Check squares (a²:b²) for 2 Yrs, cubes (a³:b³) for 3 Yrs!'}</text>
      </svg>`;
  }

  if (key === 'ch4-halfyearly-quarterly') {
    return `
      <svg viewBox="0 0 680 165" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="161" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.blue.text}">${hi ? 'संयोजन आवृत्ति (Compounding Frequency): अर्धवार्षिक व तिमाही नियम' : 'Compounding Frequency Engine: Half-Yearly & Quarterly Conversion'}</text>
        <rect x="16" y="34" width="206" height="116" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="119" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.teal.text}">${hi ? 'वार्षिक (Annually)' : 'Annually (1× / yr)'}</text>
        <text x="119" y="79" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.ink}">Rate = r%   |   Cycles = n</text>
        <text x="119" y="104" text-anchor="middle" font-size="9" font-weight="700" fill="${p.muted}">1 Yr @ 8% ⇒ 8.00%</text>
        <text x="119" y="128" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.green.text}">${hi ? 'आधार तुलना बेंचमार्क' : 'Standard Benchmark'}</text>

        <rect x="237" y="34" width="206" height="116" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="340" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.amber.text}">${hi ? 'अर्धवार्षिक (Half-Yearly)' : 'Half-Yearly (6 Months)'}</text>
        <text x="340" y="79" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.ink}">Rate = r/2  |  Cycles = 2n</text>
        <text x="340" y="104" text-anchor="middle" font-size="9" font-weight="700" fill="${p.muted}">1 Yr @ 8% ⇒ 4%+4% = 8.16%</text>
        <text x="340" y="128" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.amber.text}">8.16 : 8 = 51 : 50 Ratio!</text>

        <rect x="458" y="34" width="206" height="116" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="561" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.purple.text}">${hi ? 'तिमाही (Quarterly)' : 'Quarterly (3 Months)'}</text>
        <text x="561" y="79" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.ink}">Rate = r/4  |  Cycles = 4n</text>
        <text x="561" y="104" text-anchor="middle" font-size="9" font-weight="700" fill="${p.muted}">1 Yr @ 40% ⇒ 10% × 4 = 46.41%</text>
        <text x="561" y="128" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.purple.text}">40% Quarterly = (10→11)⁴ = +46.41%</text>
      </svg>`;
  }

  if (key === 'ch4-ci-si-diff-2yr3yr') {
    return `
      <svg viewBox="0 0 680 165" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="161" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.rose.text}">${hi ? '2 वर्ष बनाम 3 वर्ष (CI − SI) अंतर के सभी रेलवे शॉर्टकट सूत्र' : '2-Year vs 3-Year (CI − SI) Difference — Complete Shortcut Formulas'}</text>
        <rect x="16" y="34" width="318" height="116" rx="10" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.5"/>
        <text x="175" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.rose.text}">${hi ? '2 वर्ष अंतर: Diff₂ = P × (r / 100)²' : '2-Yr Diff: Diff₂ = P × (r / 100)²'}</text>
        <text x="175" y="77" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.ink}">${hi ? 'प्रतिशत में अंतर = (r² / 100)%' : 'Percentage Gap = (r² / 100)%'}</text>
        <text x="175" y="99" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.amber.text}">10% ⇒ 1%  |  12% ⇒ 1.44%  |  5% ⇒ 0.25%</text>
        <text x="175" y="121" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.green.text}">${hi ? 'दर R% निकालना: R = 100 × √(Diff / P)' : 'Find Rate R%: R = 100 × √(Diff / P)'}</text>
        <text x="175" y="140" text-anchor="middle" font-size="8.6" font-weight="600" fill="${p.muted}">P=₹20,000, Diff=₹162 ⇒ √(81) = 9%!</text>

        <rect x="346" y="34" width="318" height="116" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="505" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.purple.text}">${hi ? '3 वर्ष अंतर: Diff₃ = P(r/100)² × (3 + r/100)' : '3-Yr Diff: Diff₃ = P(r/100)² × (3 + r/100)'}</text>
        <text x="505" y="77" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.ink}">Diff₃ = (CI₃ − SI₃)   |   Diff₃ / Diff₂ = (300 + r) / 100</text>
        <text x="505" y="99" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.amber.text}">10% ⇒ 3.1%  |  20% ⇒ 12.8% (72.8% − 60%)</text>
        <text x="505" y="121" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.blue.text}">${hi ? 'उदाहरण: 20% पर 3Yr Diff = ₹624 ⇒ 12.8% = 624' : 'Ex: 20% 3-Yr Diff = ₹624 ⇒ 12.8% = 624'}</text>
        <text x="505" y="140" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">${hi ? 'मूलधन P = 624 × 1000 / 128 = ₹4,875!' : 'Principal P = 624 × 1000 / 128 = ₹4,875!'}</text>
      </svg>`;
  }

  // ch4-split-installment
  return `
    <svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
      <rect x="2" y="2" width="676" height="166" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
      <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.teal.text}">${hi ? 'CI में k^n गुना समय नियम, समान परिपक्वता विभाजन व किस्त (Installment) नियम' : 'CI Exponential Time (k^n), Equal-Maturity Split & Installment Engine'}</text>
      <rect x="16" y="34" width="318" height="120" rx="10" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.5"/>
      <text x="175" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.green.text}">${hi ? '1) CI में समय घात नियम व आयु-विभाजन' : '1) CI k^n Rule & Grandson Age Split'}</text>
      <text x="175" y="76" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.ink}">${hi ? 't वर्ष में k गुना ⇒ m×t वर्ष में k^m गुना!' : 'k times in t yrs ⇒ k^m times in m×t yrs!'}</text>
      <text x="175" y="97" text-anchor="middle" font-size="9.1" font-weight="800" fill="${p.rose.text}">${hi ? 'सावधान ("कितने और वर्ष?"): 40 − 10 = 30 वर्ष!' : 'Trap ("How many MORE yrs?"): 40 − 10 = 30!'}</text>
      <text x="175" y="118" text-anchor="middle" font-size="9.1" font-weight="700" fill="${p.blue.text}">${hi ? 'समान राशि (अंतर Δt वर्ष): बड़ा अनुपात = (1+r)^Δt' : 'Equal Final Share (Age gap Δt): Ratio = 1 : (1+r)^Δt'}</text>
      <text x="175" y="138" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.muted}">${hi ? '13 बनाम 14 वर्ष @ 10% ⇒ छोटा : बड़ा = 10 : 11' : 'Age 13 vs 14 @ 10% ⇒ Younger : Elder = 10 : 11'}</text>

      <rect x="346" y="34" width="318" height="120" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
      <text x="505" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.amber.text}">${hi ? '2) मासिक SI EMI बनाम वार्षिक CI किस्त' : '2) Monthly SI EMI vs Annual CI Installment'}</text>
      <text x="505" y="76" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">${hi ? 'मासिक EMI = (मूलधन + कुल SI) ÷ महीने' : 'Monthly SI EMI = (P + Total SI) ÷ Months'}</text>
      <text x="505" y="97" text-anchor="middle" font-size="9.1" font-weight="700" fill="${p.blue.text}">${hi ? '₹15L @ 7%, 5 वर्ष ⇒ 15L×1.35 ÷ 60 = ₹33,750' : '₹15L @ 7%, 5 Yrs ⇒ 20,25,000 ÷ 60 = ₹33,750'}</text>
      <text x="505" y="118" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.purple.text}">${hi ? 'CI किस्त (10% वार्षिक): किस्त बराबर करें!' : 'Annual CI Installment (@ r% = a/b): Equalize X!'}</text>
      <text x="505" y="138" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.muted}">${hi ? '10:11 (×11 = 110:121) + 100:121 ⇒ 210 → 121+121' : 'Yr 1: 10→11 (110:121), Yr 2: 100→121 ⇒ P=210, E=121'}</text>
    </svg>`;
}
