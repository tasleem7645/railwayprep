/**
 * Pure-SVG Vector Diagram Engine for Maths Chapter 1 (Smart Board Crisp Edition).
 * Clean margins & scannable English+Hindi coaching labels — zero text clipping on mobile or A4 PDF.
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

export function renderMathsCh1DiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.alpha;

  if (key === 'ch1-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '1.1 संख्या परिवार' : '1.1 Number Tree', s: 'Prime, Co-Prime, p/q', c: p.teal },
      { x: 145, t: hi ? '1.2 विभाज्यता' : '1.2 Divisibility', s: '8, 9, 11, 72, 88, 99', c: p.blue },
      { x: 280, t: hi ? '1.3 इकाई अंक व C9' : '1.3 Unit Digit & C9', s: hi ? 'चक्र + नवंक योग' : 'Cycle + Digital Sum', c: p.amber },
      { x: 415, t: '1.4–1.5 HCF & LCM', s: hi ? 'गुणनखंड + शेषफल' : 'Factors + Remainder', c: p.green },
      { x: 550, t: '1.6–1.7 VBODMAS', s: hi ? 'बार p/q + करणी' : 'Bar p/q + Surds', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 116" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="m1Arr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="112" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 1 स्मार्ट बोर्ड मानचित्र (सीधे जाने हेतु नीचे टैप करें)' : 'Chapter 1 Complete Smart Board Roadmap'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="31" width="120" height="70" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.5"/>
          <text x="${n.x + 60}" y="56" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 60}" y="76" text-anchor="middle" font-size="8.4" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 121}" y1="66" x2="${n.x + 133}" y2="66" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#m1Arr_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'ch1-number-tree') {
    return `
      <svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="276" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'Number System Tree (संख्या परिवार चार्ट)' : 'Real Number System Classification Tree'}</text>
        <rect x="225" y="34" width="230" height="36" rx="8" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.6"/>
        <text x="340" y="50" text-anchor="middle" font-size="10.8" font-weight="800" fill="${p.ink}">Real Numbers (वास्तविक R)</text>
        <text x="340" y="63" text-anchor="middle" font-size="8.4" fill="${p.muted}">All numbers from −∞ to +∞</text>
        <line x1="280" y1="70" x2="175" y2="95" stroke="${p.border}" stroke-width="1.5"/>
        <line x1="400" y1="70" x2="520" y2="95" stroke="${p.border}" stroke-width="1.5"/>

        <rect x="40" y="95" width="265" height="44" rx="8" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="172" y="113" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.ink}">Rational Q = p/q (q ≠ 0)</text>
        <text x="172" y="128" text-anchor="middle" font-size="8.4" fill="${p.muted}">Terminating / Repeating: 0, -5, 22/7, 0.3̅</text>

        <rect x="385" y="95" width="265" height="44" rx="8" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.5"/>
        <text x="517" y="113" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.ink}">Irrational (अपरिमेय ≠ p/q)</text>
        <text x="517" y="128" text-anchor="middle" font-size="8.4" fill="${p.muted}">Non-ending &amp; Non-repeating: π, √2, √3, e</text>

        <line x1="172" y1="139" x2="172" y2="162" stroke="${p.border}" stroke-width="1.5"/>
        <rect x="40" y="162" width="265" height="38" rx="8" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="172" y="178" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">Integers (Z): ..., -2, -1, 0, 1, 2, ...</text>
        <text x="172" y="192" text-anchor="middle" font-size="8.3" fill="${p.muted}">0 is an EVEN integer (not +ve or -ve)</text>

        <line x1="172" y1="200" x2="100" y2="222" stroke="${p.border}" stroke-width="1.4"/>
        <line x1="172" y1="200" x2="255" y2="222" stroke="${p.border}" stroke-width="1.4"/>
        <rect x="20" y="222" width="150" height="44" rx="8" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.4"/>
        <text x="95" y="240" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.ink}">Whole Numbers (W)</text>
        <text x="95" y="255" text-anchor="middle" font-size="8.6" fill="${p.muted}">{ 0, 1, 2, 3, ... }</text>

        <rect x="182" y="222" width="160" height="44" rx="8" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="262" y="240" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.ink}">Natural Numbers (N)</text>
        <text x="262" y="255" text-anchor="middle" font-size="8.6" fill="${p.muted}">{ 1, 2, 3, 4, ... }</text>

        <rect x="362" y="162" width="298" height="104" rx="9" fill="${p.card}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
        <text x="511" y="180" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.amber.text}">🔥 RRB Topper Facts (Prime &amp; Co-Prime)</text>
        <text x="374" y="198" font-size="8.7" font-weight="700" fill="${p.ink}">• 1 is NEITHER Prime NOR Composite!</text>
        <text x="374" y="214" font-size="8.7" font-weight="700" fill="${p.ink}">• 2 = ONLY Even Prime (smallest prime)</text>
        <text x="374" y="230" font-size="8.7" font-weight="700" fill="${p.ink}">• 4 = Smallest Composite | 9 = Odd Composite</text>
        <text x="374" y="246" font-size="8.7" font-weight="700" fill="${p.ink}">• Primes 1–100 = 25 (1–50: 15, 51–100: 10)</text>
        <text x="374" y="261" font-size="8.7" font-weight="700" fill="${p.teal.text}">• Co-Prime Pair: HCF = 1 (e.g. 8 &amp; 15)</text>
      </svg>`;
  }

  if (key === 'ch1-divisibility-map') {
    const cards = [
      { n: '2, 4, 8, 16', desc: hi ? 'अंतिम 1, 2, 3, 4 अंक देखें' : 'Check Last 1, 2, 3, 4 Digits', ex: '17688 → 688÷8 = 86 ✓', c: p.teal },
      { n: '3 &amp; 9', desc: hi ? 'अंकों का योग ÷ 3 या 9' : 'Sum of Digits ÷ 3 or 9', ex: '285219 → Sum 27 ÷ 9 ✓', c: p.blue },
      { n: '11 (Star Rule)', desc: hi ? '|विषम − सम स्थान योग| = 0, 11' : '|Odd Pos − Even Pos| = 0, 11', ex: '(2+5+1)−(8+2+9) = -11 ✓', c: p.amber },
      { n: '72 (8 × 9)', desc: hi ? 'पहले 8, फिर 9 जाँचें' : 'Check 8 First, Then 9', ex: 'Last 3 ÷ 8 &amp; Sum ÷ 9', c: p.purple },
      { n: '88 (8 × 11)', desc: hi ? 'पहले 8 (Last 3), फिर 11' : 'Check 8 (Last 3) + 11 Rule', ex: '17688 ÷ 24 → Check 8 &amp; 3', c: p.green },
      { n: '7, 13 &amp; 1001', desc: hi ? '|3-अंकीय ब्लॉक अंतर| ÷ 7 / 13' : '|3-Digit Block Diff| ÷ 7 / 13', ex: 'xyzxyz हमेशा ÷ 7, 11, 13', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 212" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="208" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber.text}">${hi ? 'विभाज्यता स्मार्ट बोर्ड चार्ट (Co-Prime: 72, 88, 99, 24)' : 'Divisibility Smart Board Chart (Co-Prime Splits: 72, 88, 99, 24)'}</text>
        ${cards.map((card, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 14 + col * 222;
          const y = 33 + row * 84;
          return `
            <rect x="${x}" y="${y}" width="208" height="74" rx="9" fill="${card.c.fill}" fill-opacity="${a}" stroke="${card.c.stroke}" stroke-width="1.5"/>
            <text x="${x + 12}" y="${y + 20}" font-size="11" font-weight="900" fill="${p.ink}">${card.n}</text>
            <text x="${x + 12}" y="${y + 38}" font-size="8.6" font-weight="700" fill="${p.muted}">${card.desc}</text>
            <rect x="${x + 10}" y="${y + 46}" width="188" height="20" rx="5" fill="${p.bg}" stroke="${card.c.stroke}" stroke-opacity="0.4"/>
            <text x="${x + 16}" y="${y + 59}" font-size="8.4" font-weight="700" fill="${card.c.text}">${card.ex}</text>
          `;
        }).join('')}
      </svg>`;
  }

  if (key === 'ch1-vbodmas-ladder') {
    const steps = [
      { k: 'V', n: hi ? 'Vinculum (बार)' : 'Vinculum (Bar)', ex: '12 − 8−5̄ → (8−5)=3', c: p.rose },
      { k: 'B', n: hi ? 'कोष्ठक क्रम' : 'Brackets Order', ex: '( ) → { } → [ ]', c: p.amber },
      { k: 'O', n: hi ? 'Of (का / Order)' : 'Of (का / Order)', ex: '12÷3 of 2 = 12÷6 = 2', c: p.purple },
      { k: 'D/M', n: hi ? '÷ फिर × (L → R)' : '÷ then × (L → R)', ex: '18 ÷ 3 × 2 = 6 × 2 = 12', c: p.blue },
      { k: 'A/S', n: hi ? '+ और − (अंतिम)' : '+ and − (Final)', ex: hi ? '+ अलग, − अलग जोड़ें' : 'Collect +ve then −ve', c: p.teal },
    ];
    return `
      <svg viewBox="0 0 680 152" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="148" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.blue.text}">${hi ? 'VBODMAS प्राथमिकता क्रम ("Of / का" हमेशा ÷ से पहले हल होता है!)' : 'VBODMAS Priority Order ("Of" / का हमेशा ÷ से पहले हल होता है!)'}</text>
        ${steps.map((s, i) => {
          const x = 12 + i * 133;
          return `
            <rect x="${x}" y="34" width="124" height="104" rx="9" fill="${s.c.fill}" fill-opacity="${a}" stroke="${s.c.stroke}" stroke-width="1.5"/>
            <circle cx="${x + 62}" cy="54" r="13" fill="${p.bg}" stroke="${s.c.stroke}" stroke-width="1.6"/>
            <text x="${x + 62}" y="58" text-anchor="middle" font-size="10.5" font-weight="900" fill="${s.c.text}">${s.k}</text>
            <text x="${x + 62}" y="81" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.ink}">${s.n}</text>
            <text x="${x + 62}" y="102" text-anchor="middle" font-size="8" font-weight="700" fill="${p.muted}">${s.ex}</text>
            <text x="${x + 62}" y="126" text-anchor="middle" font-size="8" font-weight="800" fill="${s.c.text}">${hi ? 'क्रम #' : 'Priority #'}${i + 1}</text>
          `;
        }).join('')}
      </svg>`;
  }

  if (key === 'ch1-hcf-lcm-map') {
    return `
      <svg viewBox="0 0 680 205" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="201" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.green.text}">${hi ? 'HCF बनाम LCM वेन आरेख, भिन्न सूत्र व 4 शेषफल नियम' : 'HCF vs LCM Venn Diagram, Fraction Rules &amp; 4 Remainder Formulas'}</text>
        <rect x="14" y="33" width="232" height="158" rx="10" fill="${p.card}" stroke="${p.border}"/>
        <text x="130" y="50" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.ink}">12 (2·2·3) vs 18 (2·3·3)</text>
        <circle cx="95" cy="102" r="40" fill="${p.blue.fill}" fill-opacity="0.45" stroke="${p.blue.stroke}" stroke-width="1.8"/>
        <circle cx="163" cy="102" r="40" fill="${p.amber.fill}" fill-opacity="0.45" stroke="${p.amber.stroke}" stroke-width="1.8"/>
        <text x="72" y="105" text-anchor="middle" font-size="12" font-weight="900" fill="${p.blue.text}">2</text>
        <text x="129" y="105" text-anchor="middle" font-size="11" font-weight="900" fill="${p.green.text}">2 × 3</text>
        <text x="186" y="105" text-anchor="middle" font-size="12" font-weight="900" fill="${p.amber.text}">3</text>
        <text x="130" y="162" text-anchor="middle" font-size="9" font-weight="800" fill="${p.green.text}">HCF (Overlap) = 2×3 = 6</text>
        <text x="130" y="179" text-anchor="middle" font-size="9" font-weight="800" fill="${p.blue.text}">LCM (Union) = 36</text>

        <rect x="258" y="33" width="408" height="158" rx="10" fill="${p.teal.fill}" fill-opacity="0.22" stroke="${p.teal.stroke}" stroke-width="1.4"/>
        <text x="270" y="52" font-size="9.8" font-weight="800" fill="${p.teal.text}">${hi ? '🎯 4 प्रमुख RRB HCF–LCM सूत्र:' : '🎯 4 Golden RRB HCF–LCM Formulas:'}</text>
        <text x="270" y="74" font-size="8.7" font-weight="700" fill="${p.ink}">1. A × B = HCF × LCM  |  ${hi ? 'अनुपात' : 'Ratio'} a:b → LCM = H·a·b</text>
        <text x="270" y="96" font-size="8.7" font-weight="700" fill="${p.ink}">2. ${hi ? 'भिन्न' : 'Fraction'}: HCF = HCF(Num)/LCM(Den) | LCM = LCM(Num)/HCF(Den)</text>
        <text x="270" y="118" font-size="8.7" font-weight="700" fill="${p.ink}">3. ${hi ? 'समान अज्ञात शेष' : 'Same Unknown Rem'} (x,y,z) → HCF(|x−y|, |y−z|, |z−x|)</text>
        <text x="270" y="140" font-size="8.7" font-weight="700" fill="${p.ink}">4. ${hi ? 'निश्चित अंतर' : 'Fixed Diff'} k = d − r → LCM(divisors) × m − k</text>
        <text x="270" y="168" font-size="8.6" font-weight="800" fill="${p.amber.text}">⚠️ Decimals (1.3, 7.6, 0.13): ×100 → 130, 760, 13 → ÷100!</text>
      </svg>`;
  }

  return `
    <svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
      <rect x="2" y="2" width="676" height="176" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
      <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.purple.text}">${hi ? 'इकाई अंक चक्र (Unit Digit Cyclicity) + Digital Sum (C9 ट्रिक)' : 'Unit Digit Cyclicity Groups + Digital Sum (C9 Mod-9 Shortcut)'}</text>
      <rect x="14" y="33" width="205" height="132" rx="9" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.4"/>
      <text x="116" y="53" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.teal.text}">${hi ? 'चक्र = 1 (अपरिवर्तित)' : 'Cycle = 1 (Fixed)'}</text>
      <text x="116" y="79" text-anchor="middle" font-size="17" font-weight="900" fill="${p.ink}">0, 1, 5, 6</text>
      <text x="116" y="104" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'किसी भी घात n ≥ 1 के लिए' : 'For ANY power n ≥ 1'}</text>
      <text x="116" y="120" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.ink}">${hi ? 'इकाई अंक कभी नहीं बदलता!' : 'Unit Digit NEVER changes!'}</text>
      <text x="116" y="144" text-anchor="middle" font-size="8.4" fill="${p.teal.text}">उदा. (2025)⁹⁹ → 5</text>

      <rect x="235" y="33" width="210" height="132" rx="9" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.4"/>
      <text x="340" y="53" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.amber.text}">${hi ? 'चक्र = 2 (सम / विषम)' : 'Cycle = 2 (Odd / Even)'}</text>
      <text x="340" y="79" text-anchor="middle" font-size="17" font-weight="900" fill="${p.ink}">4 &amp; 9</text>
      <text x="340" y="104" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">4^Odd = 4  |  4^Even = 6</text>
      <text x="340" y="122" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">9^Odd = 9  |  9^Even = 1</text>
      <text x="340" y="146" text-anchor="middle" font-size="8.4" fill="${p.amber.text}">${hi ? 'बस घात विषम/सम जाँचें!' : 'Just check Power Odd/Even!'}</text>

      <rect x="461" y="33" width="205" height="132" rx="9" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.4"/>
      <text x="563" y="53" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.blue.text}">${hi ? 'चक्र = 4 (घात ÷ 4)' : 'Cycle = 4 (Power ÷ 4)'}</text>
      <text x="563" y="79" text-anchor="middle" font-size="17" font-weight="900" fill="${p.ink}">2, 3, 7, 8</text>
      <text x="563" y="104" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? 'अंतिम 2 अंक को 4 से भाग दें' : 'Divide last 2 digits by 4'}</text>
      <text x="563" y="121" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.ink}">${hi ? 'शेष = 0 आए तो घात 4 लें!' : 'If rem = 0, use power 4!'}</text>
      <text x="563" y="144" text-anchor="middle" font-size="8.4" fill="${p.blue.text}">7^2025 → 25÷4 r=1 → 7¹ = 7</text>
    </svg>`;
}
