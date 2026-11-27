/**
 * Pure-SVG Vector Diagram Plates for Class 10 Chemistry Chapter 4:
 * Carbon & Its Compounds (jhsc104, NCERT 2026–27 Edition)
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

export function renderC10Ch4CarbonDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.a;

  if (key === 'c10-ch4-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '4.1 सहसंयोजी व अपररूप' : '4.1 Covalent & Allotropes', s: hi ? 'C⁴± नहीं! हीरा/ग्रेफाइट/C₆₀' : 'No C⁴± • Diamond/Graphite/C₆₀', c: p.blue },
      { x: 145, t: hi ? '4.2 शृंखलन व समावयवी' : '4.2 Catenation & Isomers', s: hi ? 'C-C प्रबल • वलय • समजातीय (-CH₂-)' : 'C-C • Rings • Homologous 14u', c: p.teal },
      { x: 280, t: hi ? '4.2.5 प्रकार्यात्मक व IUPAC' : '4.2.5 Functional & IUPAC', s: hi ? '-OH, -CHO, -CO-, -COOH' : 'Halo/ol/al/one/oic/ene/yne', c: p.purple },
      { x: 415, t: hi ? '4.3 चार मुख्य अभिक्रियाएँ' : '4.3 Four Core Reactions', s: hi ? 'दहन • KMnO₄ • Ni+H₂ • Cl₂/UV' : 'Combust • Oxid • Add • Subst', c: p.amber },
      { x: 550, t: hi ? '4.4–4.5 एथेनॉल व साबुन' : '4.4–4.5 Ethanol & Soaps', s: hi ? '443K एथीन • एस्टर • मिसेल' : 'Dehydr 443K • Ester • Micelle', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 124" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bm4_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="120" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 4 संपूर्ण मानचित्र — कार्बन एवं उसके यौगिक (NCERT 2026–27)' : 'Chapter 4 Blueprint — Carbon & Its Compounds (NCERT 2026–27)'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="122" height="74" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 61}" y="60" text-anchor="middle" font-size="9.0" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 61}" y="82" text-anchor="middle" font-size="7.8" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 123}" y1="71" x2="${n.x + 138}" y2="71" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#bm4_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'c10-ch4-allotropes-bonding') {
    return `
      <svg viewBox="0 0 680 288" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="284" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="23" text-anchor="middle" font-size="13" font-weight="800" fill="${p.blue.text}">${hi ? 'सहसंयोजी आबंधन (H₂, O₂, N₂, CH₄) एवं कार्बन के 3 क्रिस्टलीय अपररूप' : 'Covalent Bonds (H₂, O₂, N₂, CH₄) & 3 Carbon Allotropes'}</text>

        <!-- Left panel: Single/Double/Triple covalent -->
        <rect x="12" y="34" width="194" height="202" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="109" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="${p.teal.text}">${hi ? 'सहसंयोजी आबंध प्रकार' : 'Covalent Bond Types'}</text>
        <text x="109" y="72" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.ink}">H—H (${hi ? '1ल आबंध' : 'Single'}, He 2e⁻)</text>
        <text x="109" y="96" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.blue.text}">O=O (${hi ? 'द्वि-आबंध' : 'Double'}, L=6e⁻+2)</text>
        <text x="109" y="120" text-anchor="middle" font-size="9.2" font-weight="800" fill="${p.purple.text}">N≡N (${hi ? 'त्रि-आबंध' : 'Triple'}, L=5e⁻+3)</text>
        <line x1="24" y1="134" x2="194" y2="134" stroke="${p.border}" stroke-dasharray="3 2"/>
        <text x="109" y="153" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">CH₄ (${hi ? 'मेथेन, CNG/बायोगैस' : 'Methane, Tetrahedral'})</text>
        <text x="109" y="170" text-anchor="middle" font-size="8" fill="${p.muted}">${hi ? 'C (6): 2,4 → 4 संयोजक इलेक्ट्रॉन' : 'C(Z=6): 2,4 -> Tetravalent'}</text>
        <text x="109" y="189" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.amber.text}">${hi ? 'Ex Q1: एथेन (C₂H₆) = 7 सहसंयोजी आबंध' : 'Ex Q1: Ethane C₂H₆ = 7 bonds!'}</text>
        <text x="109" y="206" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'दुर्बल अंतरआण्विक बल → निम्न M.P./B.P.' : 'Weak intermol. forces -> Low MP/BP'}</text>
        <text x="109" y="222" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'आयन नहीं बनते → विद्युत के कुचालक' : 'No ions -> Poor conductor'}</text>

        <!-- Diamond -->
        <rect x="214" y="34" width="146" height="202" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="287" y="52" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.blue.text}">${hi ? '1. हीरा (Diamond)' : '1. Diamond'}</text>
        <!-- Tetrahedral node visual -->
        <circle cx="287" cy="95" r="7" fill="${p.blue.stroke}"/>
        <circle cx="258" cy="118" r="5" fill="${p.ink}"/><circle cx="316" cy="118" r="5" fill="${p.ink}"/><circle cx="287" cy="66" r="5" fill="${p.ink}"/><circle cx="287" cy="128" r="5" fill="${p.ink}"/>
        <line x1="287" y1="95" x2="258" y2="118" stroke="${p.blue.stroke}" stroke-width="2"/>
        <line x1="287" y1="95" x2="316" y2="118" stroke="${p.blue.stroke}" stroke-width="2"/>
        <line x1="287" y1="95" x2="287" y2="66" stroke="${p.blue.stroke}" stroke-width="2"/>
        <line x1="287" y1="95" x2="287" y2="128" stroke="${p.blue.stroke}" stroke-width="2"/>
        <text x="287" y="152" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.ink}">${hi ? '1 C ↔ 4 अन्य C परमाणु' : '1 C bound to 4 other C'}</text>
        <text x="287" y="168" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'दृढ़ 3D चतुष्फलकीय जाली' : 'Rigid 3D tetrahedral network'}</text>
        <text x="287" y="185" text-anchor="middle" font-size="7.8" font-weight="700" fill="${p.amber.text}">${hi ? 'सर्वाधिक कठोर प्राकृतिक पदार्थ' : 'Hardest natural substance'}</text>
        <text x="287" y="202" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.rose.text}">${hi ? 'मुक्त e⁻ ❌ → विद्युत कुचालक!' : 'No free e⁻ -> Insulator!'}</text>
        <text x="287" y="218" text-anchor="middle" font-size="7.3" fill="${p.muted}">${hi ? 'उच्च ताप-दाब पर संश्लेषित हीरा भी!' : 'Synth diamond @ extreme P,T'}</text>

        <!-- Graphite -->
        <rect x="368" y="34" width="150" height="202" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="443" y="52" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.amber.text}">${hi ? '2. ग्रेफाइट (Graphite)' : '2. Graphite'}</text>
        <!-- Layered Hexagons -->
        <polygon points="418,74 443,66 468,74 468,90 443,98 418,90" fill="none" stroke="${p.amber.stroke}" stroke-width="1.8"/>
        <polygon points="418,108 443,100 468,108 468,124 443,132 418,124" fill="none" stroke="${p.amber.stroke}" stroke-width="1.8"/>
        <line x1="418" y1="90" x2="418" y2="108" stroke="${p.muted}" stroke-dasharray="2 2"/>
        <line x1="468" y1="90" x2="468" y2="108" stroke="${p.muted}" stroke-dasharray="2 2"/>
        <text x="443" y="152" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.ink}">${hi ? '1 C ↔ 3 C (1 द्वि-आबंध)' : '1 C bound to 3 C in layer'}</text>
        <text x="443" y="168" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'षट्कोणीय समतल फिसलने वाली परतें' : 'Sliding hexagonal 2D sheets'}</text>
        <text x="443" y="185" text-anchor="middle" font-size="7.8" font-weight="700" fill="${p.ink}">${hi ? 'चिकना व फिसलनशील (पेंसिल/स्नेहक)' : 'Smooth & slippery lubricant'}</text>
        <text x="443" y="202" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.green.text}">${hi ? 'विस्थानीकृत e⁻ ✅ → सुचालक!' : 'Mobile e⁻ ✅ -> CONDUCTOR!'}</text>
        <text x="443" y="218" text-anchor="middle" font-size="7.3" fill="${p.muted}">${hi ? 'अपवाद: अधातु फिर भी विद्युत सुचालक' : 'Non-metal that conducts!'}</text>

        <!-- Fullerene -->
        <rect x="526" y="34" width="142" height="202" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="597" y="52" text-anchor="middle" font-size="10.2" font-weight="800" fill="${p.purple.text}">${hi ? '3. फुलेरीन (C₆₀)' : '3. Fullerene (C₆₀)'}</text>
        <circle cx="597" cy="96" r="28" fill="${p.card}" stroke="${p.purple.stroke}" stroke-width="1.8"/>
        <polygon points="597,81 609,90 605,104 589,104 585,90" fill="${p.purple.fill}" stroke="${p.purple.stroke}" stroke-width="1.4"/>
        <line x1="597" y1="68" x2="597" y2="81" stroke="${p.purple.stroke}"/><line x1="609" y1="90" x2="622" y2="86" stroke="${p.purple.stroke}"/><line x1="585" y1="90" x2="572" y2="86" stroke="${p.purple.stroke}"/>
        <text x="597" y="152" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.ink}">${hi ? '60 कार्बन फुटबॉल संरचना' : '60 Carbon Football Shape'}</text>
        <text x="597" y="168" text-anchor="middle" font-size="7.6" fill="${p.muted}">${hi ? 'आर्किटेक्ट बकमिंस्टर फुलर गुंबद' : 'Buckminster Fuller dome'}</text>
        <text x="597" y="185" text-anchor="middle" font-size="7.6" fill="${p.muted}">${hi ? '20 षट्भुज + 12 पंचभुज फलक' : '20 Hexagons + 12 Pentagons'}</text>
        <text x="597" y="203" text-anchor="middle" font-size="7.6" font-weight="700" fill="${p.purple.text}">${hi ? 'तीनों के रासायनिक गुण समान,' : 'Same chemical reactivity (→CO₂),'}</text>
        <text x="597" y="218" text-anchor="middle" font-size="7.6" fill="${p.muted}">${hi ? 'भौतिक गुण अत्यंत भिन्न!' : 'vastly different physical props!'}</text>

        <rect x="12" y="244" width="656" height="34" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="265" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.amber.text}">${hi ? '📌 मुख्य डेटा: भूपर्पटी में कार्बन = 0.02% (खनिज/कोयला), वायुमंडल में CO₂ = 0.03% • ग्रेफाइट में 1 कार्बन = 3 आबंध + मुक्त इलेक्ट्रॉन!' : '📌 Earth Crust Carbon = 0.02% | Atmospheric CO₂ = 0.03% | Graphite conducts electricity via 4th delocalized electron!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch4-functional-iupac') {
    return `
      <svg viewBox="0 0 680 296" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="292" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.purple.text}">${hi ? 'प्रकार्यात्मक समूह (सारणी 4.3–4.4), समावयवी, वलय व 4 मुख्य रासायनिक अभिक्रियाएँ' : 'Functional Groups (Table 4.3–4.4), Isomers, Rings & 4 Chemical Reactions'}</text>

        <!-- Left: Functional Groups & Nomenclature -->
        <rect x="12" y="34" width="332" height="202" rx="10" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="178" y="51" text-anchor="middle" font-size="10" font-weight="800" fill="${p.purple.text}">${hi ? 'A. प्रकार्यात्मक समूह व IUPAC (उदा. प्रोपेन C₃)' : 'A. Functional Groups & Suffixes (C₃ Examples)'}</text>
        <text x="24" y="70" font-size="8.2" font-weight="700" fill="${p.ink}">1. Halo (—Cl / —Br): Prefix chloro-/bromo- → Chloropropane</text>
        <text x="24" y="88" font-size="8.2" font-weight="700" fill="${p.blue.text}">2. Alcohol (—OH): Suffix -ol → Propanol (C₃H₇OH)</text>
        <text x="24" y="106" font-size="8.2" font-weight="700" fill="${p.teal.text}">3. Aldehyde (—CHO): Suffix -al → Propanal (CH₃CH₂CHO)</text>
        <text x="24" y="124" font-size="8.2" font-weight="700" fill="${p.amber.text}">4. Ketone (&gt;C=O): Suffix -one → Propanone (CH₃COCH₃)</text>
        <text x="24" y="142" font-size="8.2" font-weight="700" fill="${p.rose.text}">5. Carboxylic Acid (—COOH): -oic acid → Propanoic acid</text>
        <text x="24" y="160" font-size="8.2" font-weight="700" fill="${p.green.text}">6. Alkene (C=C, -ene, CₙH₂ₙ) | Alkyne (C≡C, -yne, CₙH₂ₙ₋₂)</text>
        <line x1="24" y1="170" x2="332" y2="170" stroke="${p.border}" stroke-dasharray="3 2"/>
        <text x="178" y="186" text-anchor="middle" font-size="8" font-weight="800" fill="${p.ink}">${hi ? 'समजातीय अंतर = –CH₂– (14 u) • समकार्यात्मक गुण समान!' : 'Homologous step = –CH₂– (14 u) | Same Chemical Properties!'}</text>
        <text x="178" y="203" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'समावयवी: ब्यूटेन (C₄H₁₀)=2, पेन्टेन (C₅H₁₂)=3!' : 'Structural Isomers: Butane=2, Pentane=3!'}</text>
        <text x="178" y="220" text-anchor="middle" font-size="7.8" font-weight="700" fill="${p.teal.text}">${hi ? 'वलय: साइक्लोहेक्सेन C₆H₁₂ (संतृप्त) vs बेन्जीन C₆H₆ (असंतृप्त 3 C=C)' : 'Rings: Cyclohexane C₆H₁₂ (Single) vs Benzene C₆H₆ (3 C=C)'}</text>

        <!-- Right: 4 Key Reactions -->
        <rect x="354" y="34" width="314" height="202" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="511" y="51" text-anchor="middle" font-size="10" font-weight="800" fill="${p.amber.text}">${hi ? 'B. चार मुख्य कार्बन अभिक्रियाएँ (NCERT 4.3)' : 'B. Four Core Organic Reactions (NCERT 4.3)'}</text>

        <rect x="364" y="60" width="294" height="36" rx="6" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="372" y="75" font-size="8.2" font-weight="800" fill="${p.blue.text}">${hi ? '1. दहन (Combustion)' : '1. Combustion → CO₂ + H₂O + Heat/Light'}</text>
        <text x="372" y="89" font-size="7.5" fill="${p.ink}">${hi ? 'संतृप्त = स्वच्छ नीली लौ | असंतृप्त/अपूर्ण दहन = पीली कज्जली लौ!' : 'Saturated = Clean Blue Flame | Unsaturated/Blocked air = Yellow Soot!'}</text>

        <rect x="364" y="102" width="294" height="38" rx="6" fill="${p.card}" stroke="${p.rose.stroke}"/>
        <text x="372" y="117" font-size="8.2" font-weight="800" fill="${p.rose.text}">${hi ? '2. ऑक्सीकरण (Oxidation • ऑक्सीकारक)' : '2. Oxidation (Alk. KMnO₄ or Acid K₂Cr₂O₇ + Heat)'}</text>
        <text x="372" y="131" font-size="7.5" fill="${p.ink}">CH₃CH₂OH + 2[O] → CH₃COOH (${hi ? 'बैंगनी रंग उड़ना = ऑक्सीकरण!' : 'Purple KMnO₄ fades!'})</text>

        <rect x="364" y="146" width="294" height="40" rx="6" fill="${p.card}" stroke="${p.green.stroke}"/>
        <text x="372" y="161" font-size="8.2" font-weight="800" fill="${p.green.text}">${hi ? '3. संकलन / हाइड्रोजनीकरण (Addition)' : '3. Hydrogenation (Ni / Pd Catalyst + H₂)'}</text>
        <text x="372" y="176" font-size="7.5" fill="${p.ink}">${hi ? 'असंतृप्त (वनस्पति तेल) + H₂ → संतृप्त वसा (ब्रोमीन जल रंगहीन परीक्षण!)' : 'Alkene + H₂ → Alkane (Veg Oil → Ghee; Decolorizes Br₂ water!)'}</text>

        <rect x="364" y="192" width="294" height="36" rx="6" fill="${p.card}" stroke="${p.purple.stroke}"/>
        <text x="372" y="207" font-size="8.2" font-weight="800" fill="${p.purple.text}">${hi ? '4. प्रतिस्थापन (Substitution • सूर्यप्रकाश)' : '4. Substitution (Saturated Alkanes + Cl₂ + Sunlight)'}</text>
        <text x="372" y="221" font-size="7.5" fill="${p.ink}">CH₄ + Cl₂ —(hν)→ CH₃Cl + HCl (${hi ? 'असंतृप्त योगज, संतृप्त प्रतिस्थापन!' : 'Alkanes substitute!'})</text>

        <rect x="12" y="244" width="656" height="40" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="261" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.teal.text}">${hi ? '🏆 कार्बनिक रसायन जन्म (1828): फ्रेडरिक वोहलर ने अकार्बनिक अमोनियम सायनेट से प्रयोगशाला में ‘यूरिया’ बनाकर जीवन-शक्ति सिद्धांत खारिज किया!' : '🏆 Historical Note (1828): Friedrich Wöhler synthesized UREA from Ammonium Cyanate, disproving the Vital Force Theory!'}</text>
        <text x="340" y="276" text-anchor="middle" font-size="7.8" fill="${p.muted}">${hi ? 'नोट: कार्बाइड, कार्बोनेट (CO₃²⁻) व बाइकार्बोनेट (HCO₃⁻) लवण अकार्बनिक वर्ग में ही रहते हैं।' : 'Note: Carbides, Carbonates & Bicarbonates remain studied under Inorganic Chemistry.'}</text>
      </svg>`;
  }

  if (key === 'c10-ch4-ethanol-soap-micelle') {
    return `
      <svg viewBox="0 0 680 286" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="282" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.teal.text}">${hi ? 'एथेनॉल, एथेनॉइक अम्ल, एस्टरीकरण-साबुनीकरण एवं साबुन मिसेल क्रियाविधि (चित्र 4.12)' : 'Ethanol, Ethanoic Acid, Esterification-Saponification & Soap Micelle Action (Fig 4.12)'}</text>

        <!-- Left: Ethanol + Ethanoic Reactions -->
        <rect x="12" y="34" width="356" height="202" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="190" y="51" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.blue.text}">${hi ? 'एथेनॉल (C₂H₅OH) बनाम एथेनॉइक अम्ल (CH₃COOH)' : 'Ethanol vs Ethanoic Acid Master Flow'}</text>

        <text x="22" y="70" font-size="8" font-weight="800" fill="${p.ink}">• + 2Na → 2CH₃CH₂O⁻Na⁺ + H₂↑ (${hi ? 'सोडियम एथॉक्साइड + पॉप H₂' : 'Sodium ethoxide + H₂'})</text>
        <text x="22" y="88" font-size="8" font-weight="800" fill="${p.amber.text}">• + Conc. H₂SO₄ @ 443 K (170°C) → CH₂=CH₂ + H₂O (${hi ? 'निर्जलीकरण' : 'Dehydration!'})</text>
        <text x="22" y="106" font-size="7.8" fill="${p.rose.text}">• ${hi ? 'मेथेनॉल (ज़हरीला)→मेथेनैल→नेत्रहीनता! नीला रंग = विकृत एल्कोहल' : 'Methanol -> Methanal -> Blindness! Blue Denatured Alcohol'}</text>
        <line x1="22" y1="115" x2="356" y2="115" stroke="${p.border}" stroke-dasharray="3 2"/>
        <text x="22" y="132" font-size="8" font-weight="800" fill="${p.green.text}">• ${hi ? 'सिरका = 3–4% (या 5–8%) CH₃COOH • शुद्ध M.P. = 290 K (ग्लैशल अम्ल)' : 'Vinegar = 3–4% CH₃COOH • Pure freezes @ 290 K (Glacial Acetic Acid)'}</text>
        <text x="22" y="150" font-size="8" font-weight="700" fill="${p.ink}">• + Na₂CO₃ / NaHCO₃ → CH₃COONa + H₂O + CO₂↑ (${hi ? 'अम्ल-एल्कोहल परीक्षण!' : 'Alcohol vs Acid Test!'})</text>
        <line x1="22" y1="160" x2="356" y2="160" stroke="${p.border}" stroke-dasharray="3 2"/>
        <text x="22" y="177" font-size="8.2" font-weight="800" fill="${p.purple.text}">• ${hi ? 'एस्टरीकरण:' : 'Esterification:'} CH₃COOH + C₂H₅OH —(अम्ल)→ CH₃COOC₂H₅ (${hi ? 'मीठी गंध' : 'Sweet Ester'})</text>
        <text x="22" y="195" font-size="8.2" font-weight="800" fill="${p.teal.text}">• ${hi ? 'साबुनीकरण:' : 'Saponification:'} ${hi ? 'एस्टर' : 'Ester'} + NaOH → C₂H₅OH + CH₃COONa (${hi ? 'साबुन निर्माण' : 'Soap salt!'})</text>
        <text x="22" y="216" font-size="7.6" fill="${p.muted}">${hi ? 'एथेनॉल = टिंचर आयोडीन, कफ सिरप, गन्ने के शीरे (Molasses) से स्वच्छ ईंधन' : 'Uses: Tincture iodine, cough syrup, clean sugarcane bio-fuel'}</text>

        <!-- Right: Micelle Diagram -->
        <rect x="378" y="34" width="290" height="202" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="523" y="51" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.amber.text}">${hi ? 'साबुन मिसेल संरचना (चित्र 4.12)' : 'Soap Micelle Cleaning Action (Fig 4.12)'}</text>

        <!-- Central oil droplet -->
        <circle cx="523" cy="112" r="18" fill="${p.amber.stroke}" fill-opacity="0.8"/>
        <text x="523" y="115" text-anchor="middle" font-size="7.6" font-weight="900" fill="#0f172a">${hi ? 'तैल मैल' : 'OIL DIRT'}</text>

        <!-- Radial tails + hydrophilic heads (8 spokes) -->
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = +(523 + Math.cos(rad) * 19).toFixed(1);
          const y1 = +(112 + Math.sin(rad) * 19).toFixed(1);
          const x2 = +(523 + Math.cos(rad) * 44).toFixed(1);
          const y2 = +(112 + Math.sin(rad) * 44).toFixed(1);
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${p.ink}" stroke-width="2"/><circle cx="${x2}" cy="${y2}" r="4.5" fill="${p.blue.stroke}" stroke="${p.ink}" stroke-width="1"/>`;
        }).join('')}

        <text x="523" y="175" text-anchor="middle" font-size="7.9" font-weight="800" fill="${p.blue.text}">${hi ? '● नीला सिरा = जलरागी (–COO⁻Na⁺, जल के प्रति आकर्षण)' : '● Blue Head = Hydrophilic Ionic (Loves Water)'}</text>
        <text x="523" y="191" text-anchor="middle" font-size="7.9" font-weight="800" fill="${p.ink}">${hi ? '— पूँछ = जलविरागी (हाइड्रोकार्बन, तेल-मैल अंदर फँसाए)' : '— Tail = Hydrophobic Hydrocarbon Chain (Traps Oil)'}</text>
        <text x="523" y="207" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'मिसेल कोलॉइड बनाते हैं (टिंडल प्रभाव से बादल जैसा घोल)' : 'Forms cloudy colloid (ion repulsion stops settling)'}</text>
        <text x="523" y="223" text-anchor="middle" font-size="7.4" font-weight="700" fill="${p.rose.text}">${hi ? 'नोट: एथेनॉल में साबुन घुलने पर मिसेल नहीं बनेगा (Ex Q8)!' : 'No micelle in pure ethanol solvent (Ex Q8)!'}</text>

        <rect x="12" y="244" width="656" height="32" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="264" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.rose.text}">${hi ? '🚿 कठोर जल नियम (Act 4.11–4.12): साबुन + Ca²⁺/Mg²⁺ = दही जैसा सफेद स्कम | अपमार्जक (सल्फोनेट/अमोनियम लवण) = कठोर जल में भी भरपूर झाग!' : '🚿 Hard Water: Soap + Ca²⁺/Mg²⁺ → Insoluble Scum | Detergent (Sulfonate/Ammonium salts) → Rich Lather even in Hard Water!'}</text>
      </svg>`;
  }

  return '';
}
