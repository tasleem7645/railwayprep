/**
 * Pure-SVG Vector Diagram Engine for Maths Chapter 3: Profit, Loss, Discount & Dishonest Dealer
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

export function renderMathsCh3DiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.alpha;

  if (key === 'ch3-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '3.1 CP–SP–MP' : '3.1 CP–SP–MP', s: hi ? 'लाभ–हानि + मैजिक अनुपात' : 'P/L % + Ratio Key', c: p.teal },
      { x: 145, t: hi ? '3.2 क्रमिक बट्टा' : '3.2 Discount', s: hi ? 'd1+d2 व Buy X Free' : 'Succ D% + Free Item', c: p.blue },
      { x: 280, t: hi ? '3.3 वस्तु संतुलन' : '3.3 Article Eq', s: hi ? 'm CP = n SP व समान SP' : 'm CP=n SP + Same SP', c: p.amber },
      { x: 415, t: hi ? '3.4 बेईमान बाट' : '3.4 False Wt', s: hi ? 'गलत तौल रेश्यो चेन' : 'Weight Cheat Chain', c: p.rose },
      { x: 550, t: hi ? '3.5–3.7 क्रॉस/चेन' : '3.5–3.7 Shift/Lot', s: hi ? 'CP–SP बदलाव व लॉट' : 'Shift Cross + A→B→C', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 116" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="m3Arr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="112" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 3: लाभ, हानि, बट्टा व बेईमान दुकानदार — स्मार्ट बोर्ड रोडमैप' : 'Ch 3: Profit, Loss, Discount & Dishonest Dealer — Smart Board Roadmap'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="31" width="120" height="70" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.5"/>
          <text x="${n.x + 60}" y="55" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 60}" y="76" text-anchor="middle" font-size="8.0" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 121}" y1="66" x2="${n.x + 133}" y2="66" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#m3Arr_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'ch3-cp-sp-mp-triangle') {
    return `
      <svg viewBox="0 0 680 176" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="triArr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="172" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber.text}">${hi ? 'CP – SP – MP गोल्डन त्रिकोण व मैजिक अनुपात (100 − D) : (100 + P)' : 'CP – SP – MP Golden Triangle & Magic Ratio (100 − D) : (100 + P)'}</text>
        <rect x="28" y="38" width="166" height="62" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.6"/>
        <text x="111" y="61" text-anchor="middle" font-size="13" font-weight="900" fill="${p.ink}">CP</text>
        <text x="111" y="82" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.teal.text}">${hi ? 'क्रय मूल्य (सदैव 100% आधार)' : 'Cost Price (Base = 100%)'}</text>
        <rect x="257" y="38" width="166" height="62" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.6"/>
        <text x="340" y="61" text-anchor="middle" font-size="13" font-weight="900" fill="${p.ink}">SP</text>
        <text x="340" y="82" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.blue.text}">${hi ? 'विक्रय मूल्य (मध्यस्थ सेतु)' : 'Selling Price (Bridge)'}</text>
        <rect x="486" y="38" width="166" height="62" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <text x="569" y="61" text-anchor="middle" font-size="13" font-weight="900" fill="${p.ink}">MP</text>
        <text x="569" y="82" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.amber.text}">${hi ? 'अंकित मूल्य (छूट आधार)' : 'Marked Price (MRP)'}</text>
        <line x1="196" y1="69" x2="253" y2="69" stroke="${p.green.stroke}" stroke-width="2.2" marker-end="url(#triArr_${theme})"/>
        <text x="225" y="59" text-anchor="middle" font-size="9" font-weight="900" fill="${p.green.text}">+P% / −L%</text>
        <line x1="484" y1="69" x2="427" y2="69" stroke="${p.rose.stroke}" stroke-width="2.2" marker-end="url(#triArr_${theme})"/>
        <text x="455" y="59" text-anchor="middle" font-size="9" font-weight="900" fill="${p.rose.text}">−D% (on MP)</text>
        <rect x="28" y="114" width="624" height="46" rx="9" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <text x="340" y="134" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.purple.text}">CP : MP  =  (100 − D%) : (100 + P%)   |   ${hi ? 'या (100 − D%) : (100 − L%)' : 'or (100 − D%) : (100 − L%)'}</text>
        <text x="340" y="151" text-anchor="middle" font-size="9.2" font-weight="600" fill="${p.muted}">${hi ? 'उदाहरण: 15% छूट देकर 20% लाभ (CP = ₹153) ⇒ CP : MP = 85 : 120 = 17 : 24 ⇒ MP = 24×9 = ₹216!' : 'Ex: Allow 15% disc to gain 20% (CP=₹153) ⇒ CP : MP = 85 : 120 = 17 : 24 ⇒ MP = 24×9 = ₹216!'}</text>
      </svg>`;
  }

  if (key === 'ch3-discount-free-ladder') {
    return `
      <svg viewBox="0 0 680 168" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="164" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.blue.text}">${hi ? 'क्रमिक बट्टा व "Buy X Get Y Free" एकल छूट इंजन' : 'Successive Discounts & "Buy X Get Y Free" Net Discount Engine'}</text>
        <rect x="16" y="34" width="318" height="118" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="175" y="55" text-anchor="middle" font-size="10.5" font-weight="900" fill="${p.teal.text}">${hi ? '1) क्रमिक छूट (Successive Discount)' : '1) Two / Three Successive Discounts'}</text>
        <text x="175" y="77" text-anchor="middle" font-size="11" font-weight="800" fill="${p.ink}">Net D% = d1 + d2 − (d1 × d2)/100</text>
        <text x="175" y="99" text-anchor="middle" font-size="9.2" font-weight="600" fill="${p.muted}">${hi ? 'तुलना नियम (यदि d1+d2 समान हो):' : 'Comparison Rule (when d1+d2 is same):'}</text>
        <text x="175" y="117" text-anchor="middle" font-size="9.3" font-weight="800" fill="${p.amber.text}">${hi ? 'जहाँ गुणनफल (d1×d2) सबसे कम ⇒ ग्राहक को अधिक छूट!' : 'Smallest (d1×d2) product = MAX discount for Buyer!'}</text>
        <text x="175" y="137" text-anchor="middle" font-size="8.8" font-weight="600" fill="${p.muted}">10% flat (10%) > 2%+8% (9.84%) > 3%+7% (9.79%)</text>

        <rect x="346" y="34" width="318" height="118" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="505" y="55" text-anchor="middle" font-size="10.5" font-weight="900" fill="${p.amber.text}">${hi ? '2) Buy X Get Y Free (मुफ़्त वस्तु सूत्र)' : '2) Buy X Get Y Free Scheme Formula'}</text>
        <text x="505" y="79" text-anchor="middle" font-size="11.5" font-weight="900" fill="${p.ink}">Discount % = [ Free ÷ (Paid + Free) ] × 100</text>
        <text x="505" y="102" text-anchor="middle" font-size="9.5" font-weight="700" fill="${p.green.text}">${hi ? 'Buy 3 Get 1 Free = 1 / (3+1) = 1/4 = 25% छूट' : 'Buy 3 Get 1 Free = 1 / (3+1) = 1/4 = 25% Off'}</text>
        <text x="505" y="121" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.blue.text}">${hi ? 'Buy 6 Get 4 Free = 4 / (6+4) = 4/10 = 40% छूट' : 'Buy 6 Get 4 Free = 4 / (6+4) = 4/10 = 40% Off'}</text>
        <text x="505" y="139" text-anchor="middle" font-size="8.6" font-weight="600" fill="${p.muted}">${hi ? '+ अतिरिक्त d% छूट हो ⇒ रेश्यो चेन से गुणा करें' : '+ Extra Cash Discount d% ⇒ Multiply Ratio Factors'}</text>
      </svg>`;
  }

  if (key === 'ch3-article-same-sp') {
    return `
      <svg viewBox="0 0 680 172" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="168" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.purple.text}">${hi ? 'वस्तु-संख्या नियम (CP of m = SP of n) बनाम समान SP जाल' : 'Article Equilibrium (CP of m = SP of n) vs Same Selling Price Trap'}</text>
        <rect x="16" y="34" width="318" height="122" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="175" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.blue.text}">${hi ? 'वस्तु-संख्या वक्र (Cross-Price नियम)' : 'Article Count Rule (Cross Multiply)'}</text>
        <text x="175" y="77" text-anchor="middle" font-size="10.5" font-weight="800" fill="${p.ink}">m × CP = n × SP  ⇒  CP / SP = n / m</text>
        <text x="175" y="99" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.green.text}">${hi ? 'खरीदे 6 @ ₹5, बेचे 5 @ ₹6 (Qty पहले, ₹ बाद में):' : 'Buy 6 @ ₹5, Sell 5 @ ₹6 (Keep Qty×Price Cross):'}</text>
        <text x="175" y="118" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber.text}">CP = 5×5 = 25   |   SP = 6×6 = 36</text>
        <text x="175" y="138" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.ink}">${hi ? 'लाभ = (36−25)/25 × 100 = 44%!' : 'Gain = (36−25)/25 × 100 = 44%!'}</text>

        <rect x="346" y="34" width="318" height="122" rx="10" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.5"/>
        <text x="505" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.rose.text}">${hi ? 'समान विक्रय मूल्य (Same SP) vs समान क्रय (Same CP)' : 'Same SP (+x% & −x%) vs Same CP (+x% & −x%)'}</text>
        <text x="505" y="78" text-anchor="middle" font-size="10.5" font-weight="900" fill="${p.ink}">${hi ? '1) यदि दोनों का SP समान (+x%, −x%):' : '1) Both sold at SAME SP (+x%, −x%):'}</text>
        <text x="505" y="98" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.rose.text}">${hi ? 'सदैव (x² / 100)% हानि! (±5% ⇒ 0.25% हानि)' : 'ALWAYS LOSS of (x²/100)%! (±5% ⇒ 0.25% loss)'}</text>
        <text x="505" y="121" text-anchor="middle" font-size="10" font-weight="800" fill="${p.green.text}">${hi ? '2) यदि दोनों का CP समान (+x%, −x%):' : '2) Both bought at SAME CP (+x%, −x%):'}</text>
        <text x="505" y="140" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.muted}">${hi ? '0% — न लाभ न हानि! (समान आधार पर रद्द)' : '0% — No Profit, No Loss! (Exact Cancel)'}</text>
      </svg>`;
  }

  if (key === 'ch3-dishonest-scale') {
    return `
      <svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="dishArr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.green.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="166" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.rose.text}">${hi ? 'बेईमान दुकानदार मास्टर रेश्यो विधि (लगाया CP : कमाया SP)' : 'Dishonest Shopkeeper Single Ratio-Chain (Real CP : Real SP)'}</text>
        <rect x="20" y="34" width="295" height="68" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="167" y="55" text-anchor="middle" font-size="10" font-weight="900" fill="${p.teal.text}">${hi ? 'चरण 1: कम वजन देने पर अनुपात' : 'Step 1: Weight Cheating Ratio'}</text>
        <text x="167" y="75" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.ink}">CP : SP = Given Wt : Claimed Wt</text>
        <text x="167" y="92" text-anchor="middle" font-size="8.8" font-weight="600" fill="${p.muted}">${hi ? '1000g की जगह 800g ⇒ 800 : 1000 = 4 : 5 (+25%)' : 'Gives 800g for 1000g ⇒ 800 : 1000 = 4 : 5 (+25%)'}</text>

        <rect x="365" y="34" width="295" height="68" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="512" y="55" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber.text}">${hi ? 'चरण 2: घोषित मूल्य/लाभ % अनुपात' : 'Step 2: Claimed Markup / Loss %'}</text>
        <text x="512" y="75" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.ink}">CP : SP = 100 : (100 + Markup%)</text>
        <text x="512" y="92" text-anchor="middle" font-size="8.8" font-weight="600" fill="${p.muted}">${hi ? '+44% लाभ दावा व −10% कम बाट ⇒ (90:100)×(100:144)' : 'Claims +44% & 10% less wt ⇒ (90:100)×(100:144)'}</text>

        <rect x="20" y="114" width="640" height="42" rx="9" fill="${p.card}" stroke="${p.green.stroke}" stroke-width="1.4"/>
        <text x="340" y="133" text-anchor="middle" font-size="10.8" font-weight="900" fill="${p.green.text}">${hi ? 'NTPC UG PYQ: (90 : 100) × (100 : 144) = 90 : 144 = 5 : 8 ⇒ शुद्ध लाभ = +3/5 = 60%!' : 'NTPC UG PYQ: (90 : 100) × (100 : 144) = 90 : 144 = 5 : 8 ⇒ Net Gain = +3/5 = 60%!'}</text>
        <text x="340" y="149" text-anchor="middle" font-size="8.6" font-weight="600" fill="${p.muted}">${hi ? 'सदैव दाएं और बाएं अनुपातों को सीधा गुणा करें — कोई सूत्र रटने की आवश्यकता नहीं!' : 'Simply multiply left-column vs right-column ratios straight down — zero memorization!'}</text>
      </svg>`;
  }

  // ch3-shift-cross-method
  return `
    <svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
      <rect x="2" y="2" width="676" height="166" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
      <text x="340" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="${p.teal.text}">${hi ? 'CP–SP दोनों बदलने पर क्रॉस-गुणन विधि + विभाजित लॉट भारित नियम' : 'Both CP & SP Shifted Cross-Product + Weighted Lot Split Engine'}</text>
      <rect x="16" y="34" width="318" height="120" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
      <text x="175" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.purple.text}">${hi ? '1) 3-पंक्ति क्रॉस विधि (CP +₹a, SP −₹b)' : '1) Cross-Multiplication (Shift CP & SP)'}</text>
      <text x="175" y="77" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.ink}">${hi ? 'CP1 = x, SP1 = (1+p1)x ⇒ नया P2% समीकरण:' : 'Old Ratio (p1) vs New Ratio (p2):'}</text>
      <text x="175" y="99" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.amber.text}">x (p1 − p2) = (1 + p2)·ΔCP − ΔSP</text>
      <text x="175" y="121" text-anchor="middle" font-size="8.8" font-weight="600" fill="${p.muted}">${hi ? 'उदाहरण: +40%→+37.5%, CP+28, SP−84:' : 'Ex: +40%→+37.5%, CP+28, SP−84:'}</text>
      <text x="175" y="139" text-anchor="middle" font-size="9.3" font-weight="800" fill="${p.green.text}">0.025x = 1.375(28) + 84 = 122.5 ⇒ x = ₹4,900</text>

      <rect x="346" y="34" width="318" height="120" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
      <text x="505" y="55" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.blue.text}">${hi ? '2) भागों में बिक्री (Weighted Lot Formula)' : '2) Split-Lot Weighted Profit/Loss %'}</text>
      <text x="505" y="79" text-anchor="middle" font-size="10.2" font-weight="900" fill="${p.ink}">Net % = w1(+p1%) + w2(−L2%) / (w1 + w2)</text>
      <text x="505" y="102" text-anchor="middle" font-size="9.2" font-weight="700" fill="${p.green.text}">${hi ? '30 आम (+20%) + 20 आम (−10%) ⇒ अनुपात 3 : 2' : '30 Mangoes (+20%) + 20 (−10%) ⇒ Ratio 3 : 2'}</text>
      <text x="505" y="122" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber.text}">(3×20 − 2×10) / 5 = 40 / 5 = +8%!</text>
      <text x="505" y="141" text-anchor="middle" font-size="8.6" font-weight="600" fill="${p.muted}">${hi ? '₹ मान की कोई आवश्यकता नहीं — सीधे भारित औसत!' : 'Zero ₹ calculation needed — pure ratio weights!'}</text>
    </svg>`;
}
