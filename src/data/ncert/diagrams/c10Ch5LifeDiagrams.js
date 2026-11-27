/**
 * Pure-SVG Vector Diagram Plates for Class 10 Biology Chapter 5:
 * Life Processes (जैव प्रक्रम — jhsc105, NCERT 2026–27 Edition)
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

export function renderC10Ch5LifeDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.a;

  if (key === 'c10-ch5-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '5.1 जैव प्रक्रम व 5.2 पोषण' : '5.1–5.2 Nutrition & Stomata', s: hi ? 'रंध्र • मरुस्थली CO₂ • पेप्सिन/पित्त' : 'Chlorophyll • Guard Cells • Villi', c: p.green },
      { x: 145, t: hi ? '5.3 श्वसन व ATP (चित्र 5.8)' : '5.3 Respiration (Fig 5.8)', s: hi ? 'यीस्ट/पेशी/माइटोकॉन्ड्रिया • 80 m²' : 'Pyruvate 3 Paths • 30.5 kJ ATP', c: p.amber },
      { x: 280, t: hi ? '5.4.1 मानव हृदय व दाब' : '5.4.1 Heart & Vessels', s: hi ? '4 कोष्ठ दोहरा परिसंचरण • 120/80' : '4 Chambers • Valves • Platelets', c: p.rose },
      { x: 415, t: hi ? '5.4.2 जाइलम व फ्लोएम' : '5.4.2 Plant Transport', s: hi ? 'वाष्पोत्सर्जन कर्षण vs ATP स्थानांतरण' : 'Xylem Up vs Phloem 2-Way ATP', c: p.teal },
      { x: 550, t: hi ? '5.5 नेफ्रॉन व अपोहन' : '5.5 Excretion & Plants', s: hi ? '180L→1-2L पुनरवशोषण • रेजिन' : 'Glomerulus • Reabsorb • Resins', c: p.blue },
    ];
    return `
      <svg viewBox="0 0 680 124" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bm5_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.green.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="120" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.green.text}">${hi ? 'अध्याय 5 संपूर्ण मानचित्र — जैव प्रक्रम (पोषण, श्वसन, वहन व उत्सर्जन • NCERT 2026–27)' : 'Chapter 5 Master Blueprint — Life Processes (Nutrition, Respiration, Transport & Excretion)'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="122" height="74" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 61}" y="60" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 61}" y="82" text-anchor="middle" font-size="7.3" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 123}" y1="71" x2="${n.x + 138}" y2="71" stroke="${p.green.stroke}" stroke-width="2" marker-end="url(#bm5_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'c10-ch5-respiration-digestion-flow') {
    return `
      <svg viewBox="0 0 680 292" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ar5a_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="288" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.amber.text}">${hi ? 'ग्लूकोज़ विखंडन के 3 पथ (NCERT चित्र 5.8) एवं मानव पाचन एंजाइम सारणी (5.2.4)' : 'Three Pathways of Glucose Breakdown (NCERT Fig 5.8) & Digestive Enzyme Map (5.2.4)'}</text>

        <!-- Left: Fig 5.8 Three Pathways -->
        <rect x="12" y="34" width="366" height="208" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="195" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.amber.text}">${hi ? '1. ग्लूकोज़ (6C) → पायरूवेट (3C) + 3 ऊर्जा पथ' : '1. Glucose (6C) → Pyruvate (3C) → 3 Fate Pathways'}</text>

        <rect x="24" y="62" width="124" height="36" rx="7" fill="${p.card}" stroke="${p.teal.stroke}"/>
        <text x="86" y="77" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.teal.text}">${hi ? 'ग्लूकोज़ (6-C)' : 'Glucose (6-C)'}</text>
        <text x="86" y="91" text-anchor="middle" font-size="7.2" fill="${p.muted}">${hi ? 'कोशिकाद्रव्य में →' : 'In Cytoplasm →'}</text>

        <rect x="24" y="108" width="124" height="36" rx="7" fill="${p.card}" stroke="${p.amber.stroke}"/>
        <text x="86" y="123" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.amber.text}">${hi ? 'पायरूवेट (3-C)' : 'Pyruvate (3-C)'}</text>
        <text x="86" y="137" text-anchor="middle" font-size="7.2" fill="${p.ink}">${hi ? '+ थोड़ी ऊर्जा' : 'All organisms share this!'}</text>

        <rect x="166" y="60" width="202" height="50" rx="7" fill="${p.card}" stroke="${p.purple.stroke}"/>
        <text x="267" y="75" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.purple.text}">${hi ? '① ऑक्सीजन अनुपस्थिति (यीस्ट किण्वन)' : '① Absent O₂ (Yeast Fermentation)'}</text>
        <text x="267" y="90" text-anchor="middle" font-size="7.6" font-weight="700" fill="${p.ink}">${hi ? 'इथेनॉल (2-C) + CO₂ + कम ऊर्जा' : 'Ethanol (2-C) + CO₂ + low Energy'}</text>
        <text x="267" y="103" text-anchor="middle" font-size="7" fill="${p.muted}">${hi ? 'अवायवीय (चूने का पानी दूधिया — क्र. 5.5)' : 'Anaerobic (turns limewater milky)'}</text>

        <rect x="166" y="116" width="202" height="50" rx="7" fill="${p.card}" stroke="${p.rose.stroke}"/>
        <text x="267" y="131" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.rose.text}">${hi ? '② ऑक्सीजन का अभाव (पेशी कोशिका)' : '② Lack of O₂ (Human Muscle Cells)'}</text>
        <text x="267" y="146" text-anchor="middle" font-size="7.6" font-weight="700" fill="${p.ink}">${hi ? 'लैक्टिक अम्ल (3-C) + ऊर्जा' : 'Lactic Acid (3-C) + Energy'}</text>
        <text x="267" y="159" text-anchor="middle" font-size="7" fill="${p.rose.text}">${hi ? 'संचय से मांसपेशियों में क्रैम्प (ऐंठन)!' : 'Buildup causes muscle cramps!'}</text>

        <rect x="166" y="172" width="202" height="56" rx="7" fill="${p.card}" stroke="${p.green.stroke}"/>
        <text x="267" y="187" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.green.text}">${hi ? '③ ऑक्सीजन उपस्थिति (माइटोकॉन्ड्रिया)' : '③ Presence of O₂ (Mitochondria)'}</text>
        <text x="267" y="202" text-anchor="middle" font-size="7.6" font-weight="800" fill="${p.ink}">${hi ? 'CO₂ + H₂O + उच्च ATP ऊर्जा!' : 'CO₂ + H₂O + High ATP Energy!'}</text>
        <text x="267" y="218" text-anchor="middle" font-size="7" fill="${p.muted}">ADP + Pi → ATP (30.5 kJ/mol per bond)</text>

        <!-- Right: Enzyme & Digestion Flow -->
        <rect x="388" y="34" width="280" height="208" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="528" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.blue.text}">${hi ? '2. पाचन मार्ग व प्रमुख एंजाइम (5.2.4)' : '2. Human Digestive Gland Cascade'}</text>
        <rect x="398" y="60" width="260" height="38" rx="7" fill="${p.card}" stroke="${p.teal.stroke}"/>
        <text x="528" y="75" text-anchor="middle" font-size="7.9" font-weight="800" fill="${p.teal.text}">${hi ? 'मुख: लार एमिलेस → मंड (Starch) को शर्करा' : 'Mouth: Salivary Amylase → Starch to Sugar'}</text>
        <text x="528" y="90" text-anchor="middle" font-size="7.2" fill="${p.muted}">${hi ? 'ग्रसिका: क्रमाकुंचक गति (Peristalsis) द्वारा नीचे' : 'Oesophagus pushes via Peristaltic movement'}</text>

        <rect x="398" y="104" width="260" height="44" rx="7" fill="${p.card}" stroke="${p.rose.stroke}"/>
        <text x="528" y="119" text-anchor="middle" font-size="7.9" font-weight="800" fill="${p.rose.text}">${hi ? 'आमाशय (जठर ग्रंथि): HCl + पेप्सिन + श्लेष्मा' : 'Stomach (Gastric): HCl + Pepsin + Mucus'}</text>
        <text x="528" y="136" text-anchor="middle" font-size="7.2" fill="${p.ink}">${hi ? 'HCl अम्लीय माध्यम बनाता (पेप्सिन सक्रिय) | श्लेष्मा रक्षक' : 'HCl activates Pepsin (Protein); Mucus shields wall'}</text>

        <rect x="398" y="154" width="260" height="76" rx="7" fill="${p.card}" stroke="${p.amber.stroke}"/>
        <text x="528" y="170" text-anchor="middle" font-size="7.9" font-weight="800" fill="${p.amber.text}">${hi ? 'क्षुद्रांत्र (पूर्ण पाचन व दीर्घरोम अवशोषण!)' : 'Small Intestine (Complete Digestion + Villi)'}</text>
        <text x="528" y="185" text-anchor="middle" font-size="7.3" fill="${p.ink}">${hi ? '• यकृत पित्त: भोजन क्षारीय + वसा इमल्सीकरण' : '• Bile (Liver): Alkaline pH + Emulsifies fats'}</text>
        <text x="528" y="200" text-anchor="middle" font-size="7.3" fill="${p.ink}">${hi ? '• अग्न्याशय: ट्रिप्सिन (प्रोटीन) + लाइपेज (वसा)' : '• Pancreas: Trypsin (Protein) + Lipase (Fat)'}</text>
        <text x="528" y="216" text-anchor="middle" font-size="7.3" font-weight="700" fill="${p.teal.text}">${hi ? '• आंत्र रस → अमीनो अम्ल, ग्लूकोज़, वसा अम्ल+ग्लिसरॉल' : '• Intestinal Juice -> Amino Acids, Glucose, Fatty Acids'}</text>

        <rect x="12" y="248" width="656" height="30" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="267" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.green.text}">${hi ? '📌 मरुद्भिद पौधे रात में CO₂ संचित करते हैं | शाकाहारी की क्षुद्रांत्र लंबी (सेल्युलोज़) व मांसाहारी की छोटी!' : '📌 Hot Facts: Desert plants take CO₂ at NIGHT | Herbivores have LONGER small intestine (Cellulose vs Meat)!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch5-heart-plant-transport') {
    return `
      <svg viewBox="0 0 680 282" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ar5b_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.rose.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="278" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.rose.text}">${hi ? 'दोहरा परिसंचरण (4 कोष्ठीय हृदय, रक्तचाप 120/80) बनाम पादप परिवहन (जाइलम व फ्लोएम)' : 'Double Circulation (4 Heart Chambers, 120/80 BP) vs Plant Transport (Xylem & Phloem)'}</text>

        <!-- Left: Double Circulation -->
        <rect x="12" y="34" width="336" height="200" rx="10" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.5"/>
        <text x="180" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.rose.text}">${hi ? '1. मानव दोहरा परिसंचरण (चित्र 5.10–5.11)' : '1. Human Double Circulation (Fig 5.10–5.11)'}</text>

        <rect x="24" y="60" width="150" height="58" rx="7" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="99" y="75" text-anchor="middle" font-size="8" font-weight="800" fill="${p.blue.text}">${hi ? 'दायाँ भाग (CO₂ युक्त रक्त)' : 'Right Side (Deoxygenated)'}</text>
        <text x="99" y="90" text-anchor="middle" font-size="7.3" fill="${p.ink}">${hi ? 'शरीर (महाशिरा) → दायाँ अलिंद' : 'Vena Cava → Right Atrium'}</text>
        <text x="99" y="105" text-anchor="middle" font-size="7.3" fill="${p.ink}">${hi ? '→ दायाँ निलय → फुफ्फुसीय धमनी→फेफड़े' : '→ R. Ventricle → Pulm Artery→Lungs'}</text>

        <rect x="186" y="60" width="150" height="58" rx="7" fill="${p.card}" stroke="${p.rose.stroke}"/>
        <text x="261" y="75" text-anchor="middle" font-size="8" font-weight="800" fill="${p.rose.text}">${hi ? 'बायाँ भाग (O₂ युक्त रक्त)' : 'Left Side (Oxygenated)'}</text>
        <text x="261" y="90" text-anchor="middle" font-size="7.3" fill="${p.ink}">${hi ? 'फेफड़े → फुफ्फुसीय शिरा → बायाँ अलिंद' : 'Lungs → Pulm Vein → Left Atrium'}</text>
        <text x="261" y="105" text-anchor="middle" font-size="7.3" fill="${p.ink}">${hi ? '→ बायाँ निलय → महाधमनी→शरीर!' : '→ L. Ventricle → Aorta→Body!'}</text>

        <rect x="24" y="126" width="312" height="98" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="180" y="142" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.amber.text}">${hi ? 'कोष्ठ संख्या: मछली (2 — एकल) | उभयचर/सरीसृप (3) | पक्षी/स्तनधारी (4)' : 'Chambers: Fish (2, Single) | Amphibian/Reptile (3) | Bird/Mammal (4)'}</text>
        <text x="180" y="159" text-anchor="middle" font-size="7.4" fill="${p.ink}">${hi ? '• निलय की पेशीय भित्ति मोटी (पूरे शरीर में उच्च दाब से पंप करना!)' : '• Ventricle walls MUCH THICKER than Atria (high pressure pumping)'}</text>
        <text x="180" y="175" text-anchor="middle" font-size="7.4" fill="${p.ink}">${hi ? '• धमनी: मोटी भित्ति, वाल्व नहीं | शिरा: पतली भित्ति, वाल्व युक्त!' : '• Artery: thick elastic, NO valves | Vein: thin walls + VALVES'}</text>
        <text x="180" y="191" text-anchor="middle" font-size="7.4" fill="${p.teal.text}">${hi ? '• BP 120/80 mmHg (स्फाईग्मोमैनोमीटर) | प्लेटलेट्स थक्का जमाएँ' : '• BP 120/80 mmHg (Sphygmomanometer) | Lymph carries gut fat!'}</text>
        <text x="180" y="207" text-anchor="middle" font-size="7.2" fill="${p.muted}">${hi ? '• लसीका (रंगहीन, कम प्रोटीन) छोटी आँत से पची वसा ढोती है' : '• Lymph (colorless, low protein) drains tissue fluid + absorbed fats'}</text>

        <!-- Right: Xylem vs Phloem -->
        <rect x="358" y="34" width="310" height="200" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="513" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.teal.text}">${hi ? '2. पादप संवहन ऊतक (5.4.2): जाइलम बनाम फ्लोएम' : '2. Plant Vascular Tubes (5.4.2): Xylem vs Phloem'}</text>

        <rect x="370" y="60" width="286" height="80" rx="7" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="513" y="76" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.blue.text}">${hi ? 'A) जाइलम (Xylem): केवल ऊपर की ओर ↑ (जल + खनिज)' : 'A) Xylem: Unidirectional ↑ (Water & Minerals)'}</text>
        <text x="513" y="93" text-anchor="middle" font-size="7.4" fill="${p.ink}">${hi ? '• वाहिनिका व वाहिका से निर्मित (भौतिक बल, कोई ATP खर्च नहीं)' : '• Tracheids & Vessels (physical forces — zero ATP used!)'}</text>
        <text x="513" y="109" text-anchor="middle" font-size="7.4" fill="${p.amber.text}">${hi ? '• रात में: मूल दाब (आयन → परासरण जल प्रवेश)' : '• At Night: Root Pressure pushes water column up'}</text>
        <text x="513" y="125" text-anchor="middle" font-size="7.4" font-weight="800" fill="${p.teal.text}">${hi ? '• दिन में: वाष्पोत्सर्जन कर्षण (Transpiration Pull — प्रमुख बल!)' : '• By Day: Transpiration Pull (evaporative suction) dominates!'}</text>

        <rect x="370" y="148" width="286" height="76" rx="7" fill="${p.card}" stroke="${p.green.stroke}"/>
        <text x="513" y="164" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.green.text}">${hi ? 'B) फ्लोएम (Phloem): द्वि-दिशिक ↑↓ स्थानांतरण (भोजन)' : 'B) Phloem: Bidirectional ↑↓ Translocation (Food)'}</text>
        <text x="513" y="181" text-anchor="middle" font-size="7.4" fill="${p.ink}">${hi ? '• विलेय प्रकाश संश्लेषण उत्पाद (सुक्रोज) व अमीनो अम्ल परिवहन' : '• Transports Sucrose + Amino Acids via Sieve tube + Companion cell'}</text>
        <text x="513" y="197" text-anchor="middle" font-size="7.4" font-weight="800" fill="${p.rose.text}">${hi ? '• ATP ऊर्जा का उपयोग कर परासरण दाब बढ़ाता है (सक्रिय परिवहन!)' : '• Actively loads sucrose using ATP -> raises osmotic pressure!'}</text>
        <text x="513" y="213" text-anchor="middle" font-size="7.2" fill="${p.muted}">${hi ? '• बसंत में जड़ की संचित शर्करा ऊपर कलिकाओं में भेजता है' : '• Moves stored root sugars upward to growing buds in spring'}</text>

        <rect x="12" y="242" width="656" height="28" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="260" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.blue.text}">${hi ? '📌 अपवाद: सभी धमनियाँ O₂ रक्त ले जाती हैं सिवाय फुफ्फुसीय धमनी (CO₂युक्त) के; फुफ्फुसीय शिरा O₂ रक्त हृदय में लाती है!' : '📌 Exception Rule: Pulmonary Artery carries deoxygenated blood, while Pulmonary Vein brings oxygenated blood to LA!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch5-excretion-nephron-plant') {
    return `
      <svg viewBox="0 0 680 278" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ar5c_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.blue.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="274" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.blue.text}">${hi ? 'मानव उत्सर्जन, वृक्काणु (नेफ्रॉन: 180 L→1–2 L), कृत्रिम वृक्क (अपोहन) एवं पादप उत्सर्जन (5.5)' : 'Human Excretion, Nephron Filtration (180L → 1–2L), Dialysis Difference & Plant Waste (5.5)'}</text>

        <!-- Left: Human Excretion & Nephron -->
        <rect x="12" y="34" width="356" height="196" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="190" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.blue.text}">${hi ? '1. वृक्काणु (Nephron = वृक्क की आधारी निस्यंदन इकाई)' : '1. Human Urinary System & Nephron Filtration'}</text>

        <rect x="24" y="60" width="332" height="44" rx="7" fill="${p.card}" stroke="${p.teal.stroke}"/>
        <text x="190" y="76" text-anchor="middle" font-size="8" font-weight="800" fill="${p.teal.text}">${hi ? 'अंग: 1 जोड़ा वृक्क (उदर में रीढ़ दोनों ओर!) → 1 जोड़ा मूत्रवाहिनी → 1 मूत्राशय → 1 मूत्रमार्ग' : 'Parts: Pair Kidneys (ABDOMEN!) → Pair Ureters → 1 Bladder → 1 Urethra'}</text>
        <text x="190" y="93" text-anchor="middle" font-size="7.3" fill="${p.rose.text}">${hi ? '⚠️ ध्यान दें: मूत्रवाहिनी 2 (युग्म) पर मूत्रमार्ग 1 (अयुग्मित) होता है! (Tech 2024)' : '⚠️ Trap: Kidneys & Ureters are PAIRED; Bladder & Urethra are UNPAIRED (1 each)!'}</text>

        <rect x="24" y="112" width="332" height="108" rx="7" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="34" y="128" font-size="8" font-weight="800" fill="${p.blue.text}">${hi ? '• केशिकागुच्छ (Glomerulus) + बोमन संपुट:' : '• Bowman’s Capsule & Glomerulus Ultrafiltration:'}</text>
        <text x="34" y="143" font-size="7.4" fill="${p.ink}">${hi ? 'रक्त से यूरिया, यूरिक अम्ल, ग्लूकोज़, अमीनो अम्ल व जल का प्रारंभिक निस्यंदन (180 L/दिन!)' : 'Filters ~180 L/day initial filtrate in healthy adult!'}</text>
        <text x="34" y="161" font-size="8" font-weight="800" fill="${p.green.text}">${hi ? '• नलिका में चयनात्मक पुनरवशोषण (Selective Reabsorption):' : '• Tubular Selective Reabsorption (ALP Shift 5 PYQ!):'}</text>
        <text x="34" y="176" font-size="7.4" fill="${p.ink}">${hi ? 'ग्लूकोज़, अमीनो अम्ल, उपयोगी लवण व जल वापस शरीर में सोख लिए जाते हैं → केवल 1–2 L मूत्र!' : 'Reabsorbs Glucose, Amino Acids, Salts & Water → only 1–2 L urine!'}</text>
        <text x="34" y="195" font-size="7.5" font-weight="800" fill="${p.amber.text}">${hi ? '• कृत्रिम वृक्क / अपोहन (Dialysis): सम-परासारी विलयन में विसरण — पर पुनरवशोषण नहीं!' : '• Dialysis (Artificial Kidney): Removes urea via diffusion, NO reabsorption!'}</text>

        <!-- Right: Plant Excretion 5.5.2 -->
        <rect x="378" y="34" width="290" height="196" rx="10" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.5"/>
        <text x="523" y="51" text-anchor="middle" font-size="9.6" font-weight="800" fill="${p.green.text}">${hi ? '2. पादपों में उत्सर्जन की 5 युक्तियाँ (5.5.2)' : '2. Five Ways Plants Remove Wastes (5.5.2)'}</text>

        <rect x="390" y="62" width="266" height="158" rx="8" fill="${p.card}" stroke="${p.green.stroke}"/>
        <text x="402" y="81" font-size="8" font-weight="700" fill="${p.teal.text}">${hi ? '1. प्रकाश संश्लेषण उपोत्पाद O₂ एवं श्वसन CO₂ (रंध्र से)' : '1. Excess O₂ (photosynthesis) & CO₂ via Stomata'}</text>
        <text x="402" y="102" font-size="8" font-weight="700" fill="${p.blue.text}">${hi ? '2. अतिरिक्त जल का निष्कासन: वाष्पोत्सर्जन (Transpiration)' : '2. Excess Water removed via Transpiration'}</text>
        <text x="402" y="123" font-size="8" font-weight="700" fill="${p.amber.text}">${hi ? '3. कोशिकीय रिक्तिका (Vacuole) में अपशिष्ट संचय' : '3. Stored inside Cellular Vacuoles & old dead cells'}</text>
        <text x="402" y="144" font-size="8" font-weight="700" fill="${p.rose.text}">${hi ? '4. गिरती पुरानी पत्तियों द्वारा अपशिष्ट त्यागना' : '4. Shed in old falling leaves'}</text>
        <text x="402" y="165" font-size="8" font-weight="800" fill="${p.purple.text}">${hi ? '5. पुराने जाइलम में रेज़िन व गोंद रूप में संचय (+ मृदा में)' : '5. Resins & Gums in OLD XYLEM + Soil excretion!'}</text>
        <text x="402" y="190" font-size="7.4" fill="${p.muted}">${hi ? '(Tech 2024 Shift 9 में पादप अपशिष्ट पर तीनों कथन सही पूछे गए!)' : '(All 3 statements asked directly in RRB Tech 2024 Shift 9!)'}</text>

        <rect x="12" y="238" width="656" height="30" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="257" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.amber.text}">${hi ? '📌 तुलना: फेफड़े CO₂ छानते हैं | कूपिका सतह = ~80 m² | बिना हीमोग्लोबिन पैर तक O₂ विसरण में ~3 वर्ष लगेंगे!' : '📌 Cool NCERT Numbers: Alveoli area ≈ 80 m² | Diffusion alone from lung to toe would take ≈ 3 years without Haemoglobin!'}</text>
      </svg>`;
  }

  return '';
}
