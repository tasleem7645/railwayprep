/**
 * Pure-SVG Vector Diagram Plates for Class 10 Physics Chapter 9:
 * Light — Reflection and Refraction (jhsc109, New NCERT 2026–27 Edition)
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

export function renderC10Ch9LightDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.a;

  if (key === 'c10-ch9-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '9.1–9.2 परावर्तन व दर्पण' : '9.1–9.2 Reflection & R=2f', s: hi ? '∠i=∠r • अवतल/उत्तल • P,F,C' : '∠i=∠r • Pole, Focus, C', c: p.teal },
      { x: 145, t: hi ? '9.2.1–2 किरण आरेख' : '9.2.1–2 Mirror Images', s: hi ? 'अवतल 6 स्थितियाँ • उत्तल 2' : 'Concave 6 Cases • Convex 2', c: p.blue },
      { x: 280, t: hi ? '9.2.3–4 दर्पण सूत्र (+)' : '9.2.3–4 Mirror Formula', s: hi ? '1/v+1/u=1/f • m=-v/u' : '1/v+1/u=1/f • u always (−)', c: p.amber },
      { x: 415, t: hi ? '9.3.1–2 अपवर्तन व स्नेल' : '9.3.1–2 Snell & n = c/v', s: hi ? 'स्लैब विस्थापन • हीरा n=2.42' : 'Glass Slab • Table 9.3 Index', c: p.purple },
      { x: 550, t: hi ? '9.3.3–8 लेंस व डाइऑप्टर' : '9.3.3–8 Lens & Power (D)', s: hi ? '1/v-1/u=1/f • P=1/f(m)' : 'P = P₁+P₂ • m = +v/u', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 124" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bm9_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="120" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 9 संपूर्ण मानचित्र — प्रकाश: परावर्तन तथा अपवर्तन (New NCERT 2026–27)' : 'Chapter 9 Complete Blueprint — Light: Reflection & Refraction (2026–27)'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="122" height="74" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 61}" y="61" text-anchor="middle" font-size="9.4" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 61}" y="82" text-anchor="middle" font-size="8.2" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 123}" y1="71" x2="${n.x + 138}" y2="71" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#bm9_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'c10-ch9-mirror-rays-cases') {
    return `
      <svg viewBox="0 0 680 348" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs>
          <marker id="arB9_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.blue.stroke}"/></marker>
          <marker id="arA9_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker>
          <marker id="arG9_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.green.stroke}"/></marker>
          <marker id="arR9_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.rose.stroke}"/></marker>
        </defs>
        <rect x="2" y="2" width="676" height="344" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.teal.text}">${hi ? 'गोलीय दर्पण: 4 किरण नियम, अवतल 6 स्थितियाँ, उत्तल दर्पण एवं नई कार्तीय चिह्न परिपाटी' : 'Spherical Mirrors: 4 Ray Rules, Concave 6-Case Shorthand, Convex & New Cartesian Signs'}</text>

        <!-- Panel 1: 4 Standard Mirror Ray Rules -->
        <rect x="14" y="34" width="320" height="148" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="174" y="51" text-anchor="middle" font-size="10" font-weight="800" fill="${p.blue.text}">${hi ? '1) अवतल दर्पण 4 किरण नियम (Fig 9.3–9.6)' : '1) Concave Mirror 4 Principal Ray Rules'}</text>
        <!-- Principal axis -->
        <line x1="28" y1="115" x2="318" y2="115" stroke="${p.muted}" stroke-width="1.2"/>
        <!-- Concave curve (inward reflecting, shaded right) -->
        <path d="M 272 64 Q 296 115 272 168" fill="none" stroke="${p.ink}" stroke-width="2.6"/>
        <path d="M 278 68 L 284 74 M 283 84 L 289 90 M 285 100 L 291 106 M 285 116 L 291 122 M 283 132 L 289 138 M 278 148 L 284 154" stroke="${p.muted}" stroke-width="1.2"/>
        <!-- C, F, P points -->
        <circle cx="132" cy="115" r="3" fill="${p.ink}"/><text x="132" y="130" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">C</text>
        <circle cx="208" cy="115" r="3" fill="${p.amber.stroke}"/><text x="208" y="130" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.amber.text}">F</text>
        <circle cx="284" cy="115" r="3" fill="${p.ink}"/><text x="294" y="128" font-size="9.5" font-weight="800" fill="${p.ink}">P</text>
        <!-- Rule 1: Parallel -> F -->
        <line x1="40" y1="80" x2="279" y2="80" stroke="${p.amber.stroke}" stroke-width="1.7" marker-end="url(#arA9_${theme})"/>
        <line x1="279" y1="80" x2="178" y2="130" stroke="${p.amber.stroke}" stroke-width="1.7" marker-end="url(#arA9_${theme})"/>
        <text x="112" y="75" font-size="8.2" font-weight="700" fill="${p.amber.text}">${hi ? '(i) || अक्ष → F से' : '(i) || Axis → via F'}</text>
        <!-- Rule 3: Through C -> Retraces C -->
        <line x1="88" y1="154" x2="275" y2="90" stroke="none"/>
        <line x1="100" y1="102" x2="278" y2="146" stroke="${p.green.stroke}" stroke-width="1.6" stroke-dasharray="4 2" marker-end="url(#arG9_${theme})"/>
        <text x="112" y="156" font-size="8.2" font-weight="700" fill="${p.green.text}">${hi ? '(iii) C से आपतित → C पर वापस (90°)' : '(iii) Via C → Retraces back (90°)'}</text>
        <text x="310" y="168" text-anchor="end" font-size="8" font-weight="700" fill="${p.muted}">${hi ? 'R = 2f (PF = FC)' : 'R = 2f (PF = FC)'}</text>

        <!-- Panel 2: Concave 6-Position Exam Matrix -->
        <rect x="346" y="34" width="320" height="148" rx="10" fill="${p.card}" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="506" y="51" text-anchor="middle" font-size="10" font-weight="800" fill="${p.teal.text}">${hi ? '2) अवतल 6-स्थिति ट्रिक: बिंब करीब आए → प्रतिबिंब दूर व बड़ा!' : '2) Concave 6-Case Ladder: Object Inward → Image Out & Larger'}</text>
        <line x1="358" y1="62" x2="654" y2="62" stroke="${p.border}" stroke-width="1"/>
        <text x="364" y="77" font-size="8.4" font-weight="700" fill="${p.ink}">1. ∞</text><text x="415" y="77" font-size="8.4" fill="${p.muted}">→</text><text x="435" y="77" font-size="8.4" font-weight="700" fill="${p.teal.text}">${hi ? 'F पर | बिंदुवत, वास्तविक-उलटा' : 'At F | Point-size, Real-Inv'}</text>
        <text x="364" y="94" font-size="8.4" font-weight="700" fill="${p.ink}">2. &gt; C</text><text x="415" y="94" font-size="8.4" fill="${p.muted}">→</text><text x="435" y="94" font-size="8.4" font-weight="700" fill="${p.teal.text}">${hi ? 'F–C बीच | छोटा, वास्तविक-उलटा' : 'Between F–C | Diminished, Real'}</text>
        <rect x="358" y="99" width="296" height="17" rx="4" fill="${p.amber.fill}" fill-opacity="${a}"/>
        <text x="364" y="111" font-size="8.4" font-weight="800" fill="${p.amber.text}">3. At C</text><text x="415" y="111" font-size="8.4" fill="${p.amber.text}">→</text><text x="435" y="111" font-size="8.4" font-weight="800" fill="${p.amber.text}">${hi ? 'C पर | समान आकार (m = -1) ★ PYQ' : 'At C | Same Size (m = -1) ★ PYQ'}</text>
        <text x="364" y="129" font-size="8.4" font-weight="700" fill="${p.ink}">4. C–F</text><text x="415" y="129" font-size="8.4" fill="${p.muted}">→</text><text x="435" y="129" font-size="8.4" font-weight="700" fill="${p.blue.text}">${hi ? 'C से परे | बड़ा (Pro/Headlight)' : 'Beyond C | Enlarged, Real-Inv'}</text>
        <text x="364" y="145" font-size="8.4" font-weight="700" fill="${p.ink}">5. At F</text><text x="415" y="145" font-size="8.4" fill="${p.muted}">→</text><text x="435" y="145" font-size="8.4" font-weight="700" fill="${p.blue.text}">${hi ? '∞ पर | अत्यधिक बड़ा (टॉर्च किरण)' : 'At ∞ | Infinite (Torch beam)'}</text>
        <rect x="358" y="151" width="296" height="19" rx="4" fill="${p.rose.fill}" fill-opacity="${a}"/>
        <text x="364" y="164" font-size="8.4" font-weight="800" fill="${p.rose.text}">6. P–F</text><text x="415" y="164" font-size="8.4" fill="${p.rose.text}">→</text><text x="435" y="164" font-size="8.4" font-weight="800" fill="${p.rose.text}">${hi ? 'दर्पण के पीछे | आभासी, सीधा, बड़ा (दंत)★' : 'Behind | Virtual, Erect, Big (Dentist)★'}</text>

        <!-- Panel 3: Convex Mirror (Rear-View) -->
        <rect x="14" y="192" width="320" height="142" rx="10" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="174" y="209" text-anchor="middle" font-size="10" font-weight="800" fill="${p.purple.text}">${hi ? '3) उत्तल दर्पण: सदैव आभासी, सीधा व छोटा (चौड़ा दृश्य क्षेत्र)' : '3) Convex Mirror: Always Virtual, Erect & Diminished (Wide FOV)'}</text>
        <line x1="26" y1="274" x2="320" y2="274" stroke="${p.muted}" stroke-width="1.2"/>
        <!-- Convex curve (outward left, shaded inner right) -->
        <path d="M 192 222 Q 168 274 192 324" fill="none" stroke="${p.ink}" stroke-width="2.6"/>
        <circle cx="180" cy="274" r="3" fill="${p.ink}"/><text x="172" y="287" font-size="9" font-weight="800" fill="${p.ink}">P</text>
        <circle cx="240" cy="274" r="3" fill="${p.amber.stroke}"/><text x="240" y="288" text-anchor="middle" font-size="9" font-weight="800" fill="${p.amber.text}">F</text>
        <circle cx="300" cy="274" r="3" fill="${p.ink}"/><text x="300" y="288" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">C</text>
        <!-- Object arrow AB at x=75 -->
        <line x1="76" y1="274" x2="76" y2="232" stroke="${p.blue.stroke}" stroke-width="2.4" marker-end="url(#arB9_${theme})"/>
        <text x="70" y="229" font-size="8.5" font-weight="800" fill="${p.blue.text}">AB</text>
        <!-- Parallel ray & diverge -->
        <line x1="76" y1="234" x2="181" y2="234" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <line x1="181" y1="234" x2="132" y2="205" stroke="${p.amber.stroke}" stroke-width="1.6" marker-end="url(#arA9_${theme})"/>
        <line x1="181" y1="234" x2="240" y2="274" stroke="${p.amber.stroke}" stroke-width="1.2" stroke-dasharray="3 2"/>
        <!-- Ray toward C -->
        <line x1="76" y1="234" x2="177" y2="252" stroke="${p.green.stroke}" stroke-width="1.4"/>
        <line x1="177" y1="252" x2="300" y2="274" stroke="${p.green.stroke}" stroke-width="1.2" stroke-dasharray="3 2"/>
        <!-- Erect image A'B' between P and F -->
        <line x1="208" y1="274" x2="208" y2="258" stroke="${p.rose.stroke}" stroke-width="2.2" marker-end="url(#arR9_${theme})"/>
        <text x="208" y="253" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.rose.text}">A'B'</text>
        <text x="174" y="324" text-anchor="middle" font-size="8.5" font-weight="700" fill="${p.purple.text}">${hi ? 'वाहन साइड मिरर: f हमेशा +ve • 0 < m < +1' : 'Vehicle Wing Mirror: f always +ve • 0 < m < +1'}</text>

        <!-- Panel 4: New Cartesian Sign Convention -->
        <rect x="346" y="192" width="320" height="142" rx="10" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="506" y="209" text-anchor="middle" font-size="10" font-weight="800" fill="${p.amber.text}">${hi ? '4) नई कार्तीय चिह्न परिपाटी (Fig 9.9 — मूल बिंदु P/O)' : '4) New Cartesian Sign Convention (Origin P or O)'}</text>
        <line x1="364" y1="270" x2="648" y2="270" stroke="${p.ink}" stroke-width="1.4"/>
        <line x1="506" y1="218" x2="506" y2="322" stroke="${p.ink}" stroke-width="1.4" stroke-dasharray="4 3"/>
        <circle cx="506" cy="270" r="3.5" fill="${p.amber.stroke}"/>
        <text x="515" y="264" font-size="8.5" font-weight="800" fill="${p.ink}">P(0,0)</text>
        <!-- Incident ray -->
        <line x1="376" y1="227" x2="460" y2="227" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#arG9_${theme})"/>
        <text x="418" y="222" text-anchor="middle" font-size="8" font-weight="800" fill="${p.teal.text}">${hi ? 'आपतित प्रकाश (बाएँ → दाएँ)' : 'Incident Light (Left → Right)'}</text>
        <!-- Left (-ve) & Right (+ve) boxes -->
        <rect x="364" y="278" width="128" height="24" rx="5" fill="${p.rose.fill}" fill-opacity="${a}"/>
        <text x="428" y="294" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.rose.text}">${hi ? 'बाएँ (x < 0): u हमेशा (−)' : 'Left (−x): u always (−)'}</text>
        <rect x="518" y="278" width="136" height="24" rx="5" fill="${p.green.fill}" fill-opacity="${a}"/>
        <text x="586" y="294" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.green.text}">${hi ? 'दाएँ (x > 0): दूरी (+)' : 'Right (+x): Virtual Mirror (+)'}</text>
        <text x="514" y="232" font-size="8.4" font-weight="800" fill="${p.green.text}">↑ +h (${hi ? 'सीधा/आभासी' : 'Erect'})</text>
        <text x="514" y="317" font-size="8.4" font-weight="800" fill="${p.rose.text}">↓ −h’ (${hi ? 'उलटा/वास्तविक' : 'Inverted'})</text>
        <text x="364" y="324" font-size="8.2" font-weight="700" fill="${p.amber.text}">${hi ? 'अवतल f = (−) | उत्तल f = (+)' : 'Concave f = (−) | Convex f = (+)'}</text>
      </svg>`;
  }

  if (key === 'c10-ch9-refraction-snell-slab') {
    const idxBars = [
      { name: hi ? 'वायु (Air)' : 'Air', n: '1.0003', v: '3.00', w: 72, c: p.teal },
      { name: hi ? 'जल (Water)' : 'Water', n: '1.33', v: '2.25', w: 96, c: p.blue },
      { name: hi ? 'किरोसिन' : 'Kerosene', n: '1.44', v: '2.08', w: 104, c: p.green },
      { name: hi ? 'क्राउन काँच' : 'Crown Glass', n: '1.52', v: '1.97', w: 112, c: p.amber },
      { name: hi ? 'हीरा ★' : 'Diamond ★', n: '2.42', v: '1.24', w: 178, c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 308" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs>
          <marker id="arSl_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker>
          <marker id="arSlT_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker>
        </defs>
        <rect x="2" y="2" width="676" height="304" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.teal.text}">${hi ? '9.3.1–9.3.2 काँच स्लैब अपवर्तन (पाश्‍विक विस्थापन), स्नेल नियम एवं अपवर्तनांक सारणी (9.3)' : '9.3.1–9.3.2 Glass Slab Lateral Shift, Snell’s Law & Refractive Index Table (9.3)'}</text>

        <!-- Left Panel: Rectangular Glass Slab Refraction -->
        <rect x="14" y="34" width="320" height="260" rx="10" fill="${p.card}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
        <text x="174" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.blue.text}">${hi ? 'आयताकार काँच का स्लैब (Fig 9.10)' : 'Rectangular Glass Slab (Fig 9.10)'}</text>
        <!-- Slab ABCD -->
        <rect x="64" y="106" width="220" height="84" rx="4" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.8"/>
        <text x="58" y="102" font-size="9" font-weight="800" fill="${p.ink}">A</text><text x="288" y="102" font-size="9" font-weight="800" fill="${p.ink}">B</text>
        <text x="58" y="201" font-size="9" font-weight="800" fill="${p.ink}">C</text><text x="288" y="201" font-size="9" font-weight="800" fill="${p.ink}">D</text>
        <text x="236" y="138" font-size="8.6" font-weight="800" fill="${p.blue.text}">${hi ? 'सघन: काँच (n=1.5)' : 'Denser: Glass'}</text>
        <!-- Normal 1 NN' at O(136,106) -->
        <line x1="136" y1="68" x2="136" y2="198" stroke="${p.muted}" stroke-width="1.2" stroke-dasharray="4 3"/>
        <!-- Normal 2 MM' at O'(168,190) -->
        <line x1="168" y1="120" x2="168" y2="250" stroke="${p.muted}" stroke-width="1.2" stroke-dasharray="4 3"/>
        <!-- Incident ray EF to O -->
        <line x1="88" y1="68" x2="136" y2="106" stroke="${p.amber.stroke}" stroke-width="2.2" marker-end="url(#arSl_${theme})"/>
        <text x="90" y="92" font-size="8.2" font-weight="800" fill="${p.amber.text}">i₁</text>
        <!-- Dotted original path -->
        <line x1="136" y1="106" x2="262" y2="206" stroke="${p.amber.stroke}" stroke-width="1.2" stroke-dasharray="4 3"/>
        <!-- Refracted ray O -> O' (bends toward normal) -->
        <line x1="136" y1="106" x2="168" y2="190" stroke="${p.teal.stroke}" stroke-width="2.2" marker-end="url(#arSlT_${theme})"/>
        <text x="148" y="135" font-size="8.2" font-weight="800" fill="${p.teal.text}">r₁</text>
        <!-- Emergent ray O' -> H (parallel to EF, away from normal) -->
        <line x1="168" y1="190" x2="232" y2="241" stroke="${p.amber.stroke}" stroke-width="2.2" marker-end="url(#arSl_${theme})"/>
        <text x="200" y="232" font-size="8.2" font-weight="800" fill="${p.amber.text}">e (∠e = ∠i₁)</text>
        <!-- Lateral displacement bracket -->
        <line x1="196" y1="212" x2="218" y2="172" stroke="${p.rose.stroke}" stroke-width="1.8"/>
        <text x="242" y="217" font-size="8.2" font-weight="800" fill="${p.rose.text}">${hi ? 'पाश्‍विक विस्थापन' : 'Lateral Shift'}</text>
        <text x="174" y="266" text-anchor="middle" font-size="8.5" font-weight="700" fill="${p.ink}">${hi ? 'विरल → सघन: अभिलंब की ओर | सघन → विरल: अभिलंब से दूर' : 'Rarer → Denser: Toward Normal | Denser → Rarer: Away'}</text>
        <text x="174" y="282" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.teal.text}">${hi ? 'निर्गत किरण आपतित के समांतर (∠i = 0° पर कोई विचलन नहीं!)' : 'Emergent Ray || Incident Ray (At ∠i=0°, Zero Bending!)'}</text>

        <!-- Right Panel: Snell & Refractive Index Chart -->
        <rect x="346" y="34" width="320" height="260" rx="10" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="506" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.purple.text}">${hi ? 'स्नेल नियम & प्रकाशिक घनत्व (Table 9.3)' : 'Snell’s Law & Refractive Index Chart (Table 9.3)'}</text>
        <rect x="360" y="62" width="292" height="44" rx="8" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.2"/>
        <text x="506" y="79" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">sin i / sin r = n₂₁ = v₁ / v₂  |  n = c / v  (c = 3×10⁸ m/s)</text>
        <text x="506" y="96" text-anchor="middle" font-size="8.4" font-weight="700" fill="${p.amber.text}">${hi ? 'मात्रकहीन राशि (Unitless) • आवृत्ति (f) कभी नहीं बदलती!' : 'Unitless Quantity • Frequency (f) NEVER Changes!'}</text>

        ${idxBars.map((b, idx) => {
          const y = 122 + idx * 30;
          return `
            <text x="360" y="${y + 13}" font-size="8.8" font-weight="800" fill="${p.ink}">${b.name}</text>
            <rect x="434" y="${y}" width="${b.w}" height="18" rx="4" fill="${b.c.fill}" fill-opacity="${a}" stroke="${b.c.stroke}" stroke-width="1.2"/>
            <text x="${439 + b.w}" y="${y + 13}" font-size="8.5" font-weight="800" fill="${b.c.text}">n=${b.n} (v=${b.v})</text>
          `;
        }).join('')}
        <text x="506" y="280" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.rose.text}">${hi ? '★ किरोसिन (n=1.44) जल (1.33) से प्रकाशिक सघन, पर तैरता है!' : '★ Kerosene (n=1.44) is optically denser than Water (1.33), less mass density!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch9-lens-power-comparison') {
    return `
      <svg viewBox="0 0 680 326" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs>
          <marker id="arL_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker>
          <marker id="arLT_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker>
        </defs>
        <rect x="2" y="2" width="676" height="322" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.8" font-weight="800" fill="${p.teal.text}">${hi ? '9.3.3–9.3.8 उत्तल बनाम अवतल लेंस, दर्पण बनाम लेंस सूत्र व डाइऑप्टर शक्ति (P = 1/f)' : '9.3.3–9.3.8 Convex vs Concave Lens, Mirror vs Lens Formula & Dioptre Power'}</text>

        <!-- Panel 1: Convex & Concave Lenses -->
        <rect x="14" y="34" width="320" height="162" rx="10" fill="${p.card}" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="174" y="51" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.teal.text}">${hi ? 'उत्तल (अभिसारी +D) व अवतल (अपसारी −D) लेंस' : 'Convex (Converging +D) vs Concave (Diverging −D)'}</text>
        <!-- Convex Lens top half -->
        <line x1="26" y1="90" x2="184" y2="90" stroke="${p.muted}" stroke-width="1.1"/>
        <path d="M 100 62 Q 116 90 100 118 Q 84 90 100 62 Z" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.8"/>
        <circle cx="100" cy="90" r="2.5" fill="${p.ink}"/><text x="92" y="102" font-size="8" font-weight="800" fill="${p.ink}">O</text>
        <circle cx="154" cy="90" r="2.8" fill="${p.amber.stroke}"/><text x="154" y="103" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.amber.text}">F₂(+)</text>
        <line x1="36" y1="74" x2="100" y2="74" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <line x1="100" y1="74" x2="174" y2="97" stroke="${p.amber.stroke}" stroke-width="1.6" marker-end="url(#arL_${theme})"/>
        <line x1="36" y1="106" x2="100" y2="106" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <line x1="100" y1="106" x2="174" y2="83" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <text x="100" y="128" text-anchor="middle" font-size="8" font-weight="700" fill="${p.blue.text}">${hi ? 'बीच मोटा → अभिसारी' : 'Thick Middle → Converges'}</text>

        <!-- Concave Lens right side -->
        <line x1="196" y1="90" x2="326" y2="90" stroke="${p.muted}" stroke-width="1.1"/>
        <path d="M 250 62 Q 260 90 250 118 L 270 118 Q 260 90 270 62 Z" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.8"/>
        <circle cx="218" cy="90" r="2.8" fill="${p.amber.stroke}"/><text x="218" y="103" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.amber.text}">F₁(−)</text>
        <line x1="204" y1="74" x2="260" y2="74" stroke="${p.teal.stroke}" stroke-width="1.6"/>
        <line x1="260" y1="74" x2="316" y2="56" stroke="${p.teal.stroke}" stroke-width="1.6" marker-end="url(#arLT_${theme})"/>
        <line x1="218" y1="90" x2="260" y2="74" stroke="${p.teal.stroke}" stroke-width="1.2" stroke-dasharray="3 2"/>
        <text x="260" y="128" text-anchor="middle" font-size="8" font-weight="700" fill="${p.rose.text}">${hi ? 'किनारे मोटे → अपसारी' : 'Thick Edges → Diverges'}</text>
        <text x="174" y="152" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.ink}">${hi ? '★ प्रकाशिक केंद्र (O) से जाने वाली किरण बिना मुड़े सीधी निकलती है!' : '★ Ray via Optical Centre (O) emerges UNDEVIATED!'}</text>
        <text x="174" y="172" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.green.text}">${hi ? 'अवतल लेंस व उत्तल दर्पण: दोनों सदैव आभासी, सीधा व छोटा प्रतिबिंब बनाते हैं' : 'Concave Lens & Convex Mirror: Always Virtual, Erect & Diminished'}</text>

        <!-- Panel 2: Mirror vs Lens Zero-Confusion Table -->
        <rect x="346" y="34" width="320" height="162" rx="10" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="506" y="51" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.amber.text}">${hi ? 'महा-तुलना: दर्पण सूत्र (+) बनाम लेंस सूत्र (−) [चिह्न जाल तोड़]' : 'Master Comparison: Mirror (+) vs Lens (−) Formula & Signs'}</text>
        <rect x="358" y="60" width="144" height="124" rx="8" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.2"/>
        <text x="430" y="77" text-anchor="middle" font-size="9" font-weight="800" fill="${p.blue.text}">${hi ? 'गोलीय दर्पण (Mirror)' : 'Spherical Mirror'}</text>
        <text x="430" y="98" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">1/v + 1/u = 1/f</text>
        <text x="430" y="118" text-anchor="middle" font-size="9" font-weight="800" fill="${p.rose.text}">m = h’/h = −v/u</text>
        <text x="430" y="140" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.ink}">${hi ? 'अवतल f (−) • उत्तल f (+)' : 'Concave f (−) • Convex f (+)'}</text>
        <text x="430" y="159" text-anchor="middle" font-size="8" font-weight="600" fill="${p.muted}">${hi ? 'माप: ध्रुव P से • R = 2f' : 'Ref: Pole P • R = 2f'}</text>

        <rect x="510" y="60" width="144" height="124" rx="8" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.2"/>
        <text x="582" y="77" text-anchor="middle" font-size="9" font-weight="800" fill="${p.purple.text}">${hi ? 'गोलीय लेंस (Lens)' : 'Spherical Lens'}</text>
        <text x="582" y="98" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">1/v − 1/u = 1/f</text>
        <text x="582" y="118" text-anchor="middle" font-size="9" font-weight="800" fill="${p.green.text}">m = h’/h = +v/u</text>
        <text x="582" y="140" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.ink}">${hi ? 'उत्तल f (+) • अवतल f (−)' : 'Convex f (+) • Concave f (−)'}</text>
        <text x="582" y="159" text-anchor="middle" font-size="8" font-weight="600" fill="${p.muted}">${hi ? 'माप: प्रकाशिक केंद्र O से' : 'Ref: Optical Centre O'}</text>

        <!-- Bottom Strip: Dioptre Power & Combination -->
        <rect x="14" y="206" width="652" height="106" rx="10" fill="${p.card}" stroke="${p.rose.stroke}" stroke-width="1.4"/>
        <text x="340" y="224" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.rose.text}">${hi ? '9.3.8 लेंस की क्षमता (Power of Lens): P = 1 / f(मीटर) = 100 / f(cm) | SI मात्रक: डाइऑप्टर (1 D = 1 m⁻¹)' : '9.3.8 Power of a Lens: P = 1 / f(metres) = 100 / f(cm) | SI Unit: Dioptre (1 D = 1 m⁻¹)'}</text>
        <rect x="28" y="236" width="196" height="62" rx="8" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.2"/>
        <text x="126" y="254" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.green.text}">${hi ? 'उत्तल लेंस = +D (अभिसारी)' : 'Convex Lens = +D Power'}</text>
        <text x="126" y="271" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.ink}">f = +50 cm = +0.5 m → P = +2.0 D</text>
        <text x="126" y="286" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'छोटी f = अधिक मोड़ (अधिक +D)' : 'Smaller f = Stronger Bending'}</text>

        <rect x="242" y="236" width="196" height="62" rx="8" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.2"/>
        <text x="340" y="254" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.rose.text}">${hi ? 'अवतल लेंस = −D (अपसारी)' : 'Concave Lens = −D Power'}</text>
        <text x="340" y="271" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.ink}">f = −25 cm = −0.25 m → P = −4.0 D</text>
        <text x="340" y="286" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'f हमेशा मीटर में बदलकर 1/f करें!' : 'Always convert f into METRES!'}</text>

        <rect x="456" y="236" width="196" height="62" rx="8" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.2"/>
        <text x="554" y="254" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.amber.text}">${hi ? 'संपर्क लेंस संयोजन (P = P₁ + P₂)' : 'Contact Lens Combination'}</text>
        <text x="554" y="271" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.ink}">+2.0 D + (−0.25 D) = +1.75 D</text>
        <text x="554" y="286" text-anchor="middle" font-size="7.8" fill="${p.muted}">1/F = 1/f₁ + 1/f₂ (f=+12,−18 → +36 cm)</text>
      </svg>`;
  }

  return '';
}
