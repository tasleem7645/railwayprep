/**
 * Print + Web Adaptive Vector Plates for Class 9 Biology Ch 3: Tissues in Action (क्रियाशील ऊतक).
 */

export function renderCh3TissueDiagramSvg(key, { hi, p, a, theme }) {
  if (key === 'ch3-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '3.1 पादप vs जंतु' : '3.1 Plant vs Animal', s: hi ? 'स्थिर बनाम गतिशील' : 'Fixed vs Motile', c: p.teal },
      { x: 145, t: hi ? '3.2.1–3 विभज्योतक' : '3.2.1–3 Meristem', s: hi ? 'शीर्षस्थ, पार्श्व, अंतर्वेशी' : 'Apical, Lateral, Intercal.', c: p.green },
      { x: 280, t: hi ? '3.2.4 स्थायी ऊतक' : '3.2.4 Permanent', s: hi ? 'सरल (3) + जाइलम-फ्लोएम' : 'Simple + Vascular', c: p.amber },
      { x: 415, t: hi ? '3.3 जंतु ऊतक (4)' : '3.3 Animal (4)', s: hi ? 'उपकला, संयोजी, पेशी, तंत्रिका' : 'Epith/Conn/Musc/Nerve', c: p.blue },
      { x: 550, t: hi ? '3.4–3.6 कंकाल+संवर्धन' : '3.4–3.6 Skeleton', s: hi ? '4 संधियाँ + F.C. Steward' : 'Joints + Totipotency', c: p.purple },
    ];
    return `
      <svg viewBox="0 0 680 118" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="c3Arr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="114" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="21" text-anchor="middle" font-size="11.2" font-weight="800" fill="${p.teal.text}">${hi ? 'संपूर्ण अध्याय मानचित्र (Chapter 3 Learning Blueprint)' : 'Complete Chapter 3 Study Blueprint'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="32" width="120" height="68" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 60}" y="57" text-anchor="middle" font-size="10" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 60}" y="76" text-anchor="middle" font-size="8.8" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 121}" y1="66" x2="${n.x + 133}" y2="66" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#c3Arr_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'meristem-locations-tree') {
    return `
      <svg viewBox="0 0 680 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="181" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.green.text}">${hi ? 'विभज्योतक ऊतक (Meristematic) के 3 क्षेत्र एवं विभेदन (Differentiation)' : '3 Meristematic Growth Zones & Permanent Differentiation'}</text>

        <!-- Stylized Stem with 3 Meristem Zones -->
        <rect x="75" y="42" width="44" height="122" rx="10" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="2"/>
        <!-- Apical Tip -->
        <ellipse cx="97" cy="42" rx="22" ry="11" fill="${p.rose.stroke}" fill-opacity="0.75"/>
        <!-- Intercalary Nodes -->
        <rect x="73" y="84" width="48" height="9" rx="3" fill="${p.amber.stroke}"/>
        <rect x="73" y="122" width="48" height="9" rx="3" fill="${p.amber.stroke}"/>
        <!-- Lateral Cambium Ring Stripes -->
        <line x1="81" y1="60" x2="81" y2="156" stroke="${p.blue.stroke}" stroke-width="3.5" stroke-dasharray="6 3"/>
        <line x1="113" y1="60" x2="113" y2="156" stroke="${p.blue.stroke}" stroke-width="3.5" stroke-dasharray="6 3"/>

        <text x="150" y="46" font-size="9.5" font-weight="800" fill="${p.rose.text}">1. ${hi ? 'शीर्षस्थ (Apical) → लंबाई वृद्धि (प्ररोह व मूलाग्र)' : '1. Apical -> Length growth at Root & Shoot tips'}</text>
        <text x="150" y="92" font-size="9.5" font-weight="800" fill="${p.amber.text}">2. ${hi ? 'अंतर्वेशी (Intercalary) → पर्वसंधि/पत्ती आधार, घास पुनरुद्भवन' : '2. Intercalary -> Nodes / Grass regrowth'}</text>
        <text x="150" y="130" font-size="9.5" font-weight="800" fill="${p.blue.text}">3. ${hi ? 'पाश्‍र्व (Lateral / Cambium) → तने की परिधि/मोटाई + वार्षिक वलय' : '3. Lateral / Cambium -> Stem girth & Annual Rings'}</text>

        <rect x="442" y="34" width="224" height="136" rx="10" fill="${p.card}" stroke="${p.border}"/>
        <text x="554" y="54" text-anchor="middle" font-size="10" font-weight="900" fill="${p.teal.text}">${hi ? 'विभज्योतक कोशिका लक्षण' : 'Meristem Cell Features'}</text>
        <text x="454" y="75" font-size="9" fill="${p.ink}">• ${hi ? 'अत्यंत सक्रिय विभाजन क्षमता' : 'Continuous active mitosis'}</text>
        <text x="454" y="93" font-size="9" fill="${p.ink}">• ${hi ? 'पतली सेल्युलोस भित्ति + सघन द्रव्य' : 'Thin walls + dense cytoplasm'}</text>
        <text x="454" y="111" font-size="9" fill="${p.ink}">• ${hi ? 'बड़ा स्पष्ट केंद्रक' : 'Large prominent nucleus'}</text>
        <text x="454" y="129" font-size="9" font-weight="800" fill="${p.rose.text}">• ${hi ? 'रसधानी अनुपस्थित (No Vacuole!)' : 'Vacuoles ABSENT ✓'}</text>
        <text x="454" y="150" font-size="8.6" font-weight="700" fill="${p.purple.text}">→ ${hi ? 'विभेदन के बाद = स्थायी ऊतक' : 'Differentiation -> Permanent'}</text>
      </svg>`;
  }

  if (key === 'simple-permanent-trio') {
    const cards = [
      { x: 10, t: hi ? '1. मृदूतक (Parenchyma)' : '1. Parenchyma', s1: hi ? '• सजीव, पतली भित्ति, बड़े रिक्त स्थान' : '• Living, thin wall, loose spaces', s2: hi ? '• भोजन भंडारण + प्रकाश संश्लेषण' : '• Food store + Chlorenchyma', s3: hi ? '• जलीय पौधे = वायूतक (Aerenchyma)' : '• Aquatic = Aerenchyma float', c: p.green },
      { x: 235, t: hi ? '2. श्लेषोतक (Collenchyma)' : '2. Collenchyma', s1: hi ? '• सजीव, कोनों पर पेक्टिन से मोटी भित्ति' : '• Living, irregular Pectin corners', s2: hi ? '• अंतराकोशिकीय स्थान बहुत कम' : '• Very little intercellular space', s3: hi ? '• बिना टूटे लचीलापन (प्रतान/पर्णवृंत)' : '• Bending flexibility (Stem/Stalk)', c: p.amber },
      { x: 460, t: hi ? '3. दृढ़ोतक (Sclerenchyma)' : '3. Sclerenchyma', s1: hi ? '• अधिकांश मृत + लिग्निन मोटी भित्ति' : '• Mostly DEAD + Lignin wall', s2: hi ? '• कोई आंतरिक स्थान नहीं (कठोर)' : '• Zero lumen/internal space', s3: hi ? '• नारियल जटा, अखरोट छिलका, जूट' : '• Coconut husk, nutshells, hardness', c: p.rose },
    ];
    return `
      <svg viewBox="0 0 680 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="136" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.green.text}">${hi ? 'सहायक सरल स्थायी ऊतक त्रयी + बाह्यत्वचा (Cuticle / Suberin Cork)' : 'Simple Permanent Tissues Trio & Epidermis / Cork Shield'}</text>
        ${cards.map((b) => `
          <rect x="${b.x}" y="30" width="210" height="96" rx="10" fill="${b.c.fill}" fill-opacity="${a}" stroke="${b.c.stroke}" stroke-width="1.6"/>
          <text x="${b.x + 105}" y="49" text-anchor="middle" font-size="10.2" font-weight="900" fill="${b.c.text}">${b.t}</text>
          <text x="${b.x + 10}" y="70" font-size="9" font-weight="700" fill="${p.ink}">${b.s1}</text>
          <text x="${b.x + 10}" y="89" font-size="9" fill="${p.ink}">${b.s2}</text>
          <text x="${b.x + 10}" y="109" font-size="8.8" font-weight="800" fill="${b.c.text}">${b.s3}</text>
        `).join('')}
      </svg>`;
  }

  if (key === 'xylem-phloem-vascular') {
    return `
      <svg viewBox="0 0 680 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="151" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.blue.text}">${hi ? 'जटिल स्थायी (संवहन) ऊतक: जाइलम (जल ↑) बनाम फ्लोएम (भोजन ↕) — दोनों में कौन सजीव/मृत?' : 'Complex Vascular Bundles: Xylem (Water Up ↑) vs Phloem (Food ↕ Bidirectional)'}</text>

        <rect x="12" y="30" width="320" height="112" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.8"/>
        <text x="172" y="49" text-anchor="middle" font-size="11" font-weight="900" fill="${p.blue.text}">💧 ${hi ? 'जाइलम / दारु (Xylem — जल व खनिज ↑)' : '💧 Xylem (Water & Minerals Upward ↑)'}</text>
        <text x="24" y="69" font-size="9.2" fill="${p.ink}">• 4 ${hi ? 'घटक: वाहिनिका, वाहिका, जाइलम तंतु (मृत) + मृदूतक' : 'Parts: Tracheids, Vessels, Fibers (DEAD) + Parenchyma'}</text>
        <text x="24" y="88" font-size="9.2" font-weight="800" fill="${p.green.text}">• ${hi ? 'एकमात्र जीवित घटक: जाइलम मृदूतक ✓' : 'ONLY Living Part: Xylem Parenchyma ✓'}</text>
        <text x="24" y="107" font-size="9.2" fill="${p.ink}">• ${hi ? 'बल: वाष्पोत्सर्जन खिंचाव (Transpiration Pull)' : 'Force: Transpiration Pull (unidirectional upwards)'}</text>
        <text x="24" y="126" font-size="8.8" fill="${p.muted}">• ${hi ? 'पुराने जाइलम में अपशिष्ट राल (Resin) व गोंद संचित' : 'Old xylem stores plant wastes as Resins & Gums'}</text>

        <rect x="348" y="30" width="320" height="112" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.8"/>
        <text x="508" y="49" text-anchor="middle" font-size="11" font-weight="900" fill="${p.amber.text}">🍬 ${hi ? 'फ्लोएम / पोषवाह (Phloem — भोजन ↕)' : '🍬 Phloem (Sucrose & Amino Acids ↕)'}</text>
        <text x="360" y="69" font-size="9.2" fill="${p.ink}">• 4 ${hi ? 'घटक: चालनी नलिका, सहचर कोशिका, मृदूतक (जीवित) + तंतु' : 'Sieve Tubes, Companion Cells, Parenchyma (LIVING) + Fibres'}</text>
        <text x="360" y="88" font-size="9.2" font-weight="800" fill="${p.rose.text}">• ${hi ? 'एकमात्र मृत घटक: फ्लोएम तंतु (रेशे) ✗' : 'ONLY Dead Part: Phloem Fibres (Bast/Jute) ✗'}</text>
        <text x="360" y="107" font-size="9.2" fill="${p.ink}">• ${hi ? 'सुक्रोज लोडिंग: ATP ऊर्जा से सक्रिय परिवहन (Osmotic water)' : 'ATP Active Sugar Loading -> Companion cells regulate'}</text>
        <text x="360" y="126" font-size="8.8" fill="${p.muted}">• ${hi ? 'दोनों दिशाओं (ऊपर-नीचे) में पत्तियों से जड़/कलियों तक वाहन' : 'Translocation to growing buds & storage roots'}</text>
      </svg>`;
  }

  if (key === 'epithelial-5-types') {
    const types = [
      { x: 10, t: hi ? '1. सरल शल्की' : '1. Squamous', l: hi ? 'फेफड़े, रक्त नली' : 'Alveoli / Blood vessels', w: hi ? 'द्रुत विसरण' : 'Fast exchange', c: p.blue },
      { x: 142, t: hi ? '2. स्तरित शल्की' : '2. Stratified', l: hi ? 'त्वचा, मुख, ग्रासनली' : 'Skin / Mouth / Esoph.', w: hi ? 'घर्षण व रोगाणु रक्षा' : 'Multi-layer guard', c: p.rose },
      { x: 274, t: hi ? '3. घनाकार/स्तंभी' : '3. Cuboidal', l: hi ? 'वृक्क नली, लार/स्वेद ग्रंथि' : 'Kidney tubules / Glands', w: hi ? 'स्रवण (Secretion)' : 'Enzyme/Sweat', c: p.amber },
      { x: 406, t: hi ? '4. संवेदी पक्ष्माभी' : '4. Ciliated', l: hi ? 'नासाछिद्र, कान, श्वासनली' : 'Nose / Ear / Bronchi', w: hi ? 'श्लेष्म/ध्वनि संवेद' : 'Sensory / Cilia push', c: p.purple },
      { x: 538, t: hi ? '5. आंत्र स्तंभाकार' : '5. Columnar Villi', l: hi ? 'छोटी आँत अस्तर' : 'Small Intestine', w: hi ? 'पोषक अवशोषण' : 'Nutrient absorption', c: p.green },
    ];
    return `
      <svg viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="116" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.blue.text}">${hi ? 'उपकला ऊतक के 5 प्रकार (तालिका 3.2) — रेशेदार आधार झिल्ली (Basement Membrane) पर स्थित' : '5 Epithelial Tissues (NCERT Table 3.2) Resting on Fibrous Basement Membrane'}</text>
        ${types.map((t) => `
          <rect x="${t.x}" y="30" width="124" height="76" rx="9" fill="${t.c.fill}" fill-opacity="${a}" stroke="${t.c.stroke}" stroke-width="1.5"/>
          <text x="${t.x + 62}" y="48" text-anchor="middle" font-size="9.4" font-weight="900" fill="${t.c.text}">${t.t}</text>
          <text x="${t.x + 62}" y="66" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.ink}">${t.l}</text>
          <text x="${t.x + 62}" y="84" text-anchor="middle" font-size="8.4" fill="${p.muted}">${t.w}</text>
        `).join('')}
      </svg>`;
  }

  if (key === 'connective-blood-bone-joint') {
    return `
      <svg viewBox="0 0 680 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="151" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.rose.text}">${hi ? 'संयोजी ऊतक (Connective Tissue): तरल (रक्त), कठोर (अस्थि/उपास्थि) एवं कंडरा बनाम स्नायु' : 'Connective Tissues: Blood Matrix, Bone vs Cartilage, and Tendon vs Ligament'}</text>

        <rect x="10" y="30" width="212" height="112" rx="10" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.6"/>
        <text x="116" y="48" text-anchor="middle" font-size="10" font-weight="900" fill="${p.rose.text}">🩸 ${hi ? 'रक्त (तरल संयोजी ऊतक)' : '🩸 Blood (Fluid Matrix)'}</text>
        <text x="20" y="67" font-size="8.9" font-weight="700" fill="${p.ink}">• ${hi ? 'प्लाज्मा (55% आयतन — तरल भाग)' : 'Plasma (55% Liquid volume)'}</text>
        <text x="20" y="84" font-size="8.9" fill="${p.ink}">• ${hi ? 'निर्मित तत्व (45%): RBC (O₂, ~4 माह)' : 'Formed (45%): RBC (~120d)'}</text>
        <text x="20" y="101" font-size="8.9" fill="${p.ink}">• ${hi ? 'WBC (संक्रमण सुरक्षा/मवाद) + बिंबाणु' : 'WBC (Immunity) + Platelets (Clot)'}</text>
        <text x="20" y="122" font-size="8.5" font-weight="700" fill="${p.rose.text}">• ${hi ? 'हीमोग्लोबिन = लौह-समृद्ध प्रोटीन' : 'Hemoglobin = Fe-rich protein'}</text>

        <rect x="234" y="30" width="212" height="112" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <text x="340" y="48" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber.text}">🦴 ${hi ? 'अस्थि बनाम उपास्थि' : '🦴 Bone vs Cartilage'}</text>
        <text x="244" y="67" font-size="8.9" font-weight="700" fill="${p.ink}">• ${hi ? 'अस्थि (Osteocytes): Ca + P कठोर' : 'Bone (Osteocyte): Ca + P hard'}</text>
        <text x="244" y="84" font-size="8.9" fill="${p.ink}">• ${hi ? 'वयस्क भार का 12–15%; मज्जा में Stem Cell' : '12–15% mass; Marrow stem cells'}</text>
        <text x="244" y="101" font-size="8.9" font-weight="700" fill="${p.teal.text}">• ${hi ? 'उपास्थि (Chondrocytes): नरम व लचीली' : 'Cartilage (Chondrocyte): Flexible'}</text>
        <text x="244" y="122" font-size="8.5" fill="${p.muted}">${hi ? 'कान, नाक सिरा व श्वासनली के C-वलय' : 'Ear pinna, Nose & Trachea rings'}</text>

        <rect x="458" y="30" width="212" height="112" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.6"/>
        <text x="564" y="48" text-anchor="middle" font-size="10" font-weight="900" fill="${p.teal.text}">🔗 ${hi ? 'कंडरा बनाम स्नायु (CBT Trap!)' : '🔗 Tendon vs Ligament'}</text>
        <text x="468" y="68" font-size="9.2" font-weight="800" fill="${p.ink}">• ${hi ? 'कंडरा (Tendon): पेशी ↔ अस्थि' : 'Tendon: Muscle ↔ Bone'}</text>
        <text x="468" y="84" font-size="8.6" fill="${p.muted}">  ${hi ? '(कम लचीला, पेशी बल अस्थि तक)' : '(Strong fibrous, pulls bone)'}</text>
        <text x="468" y="106" font-size="9.2" font-weight="800" fill="${p.rose.text}">• ${hi ? 'स्नायु (Ligament): अस्थि ↔ अस्थि' : 'Ligament: Bone ↔ Bone'}</text>
        <text x="468" y="123" font-size="8.6" fill="${p.muted}">  ${hi ? '(लचीला; संधि विस्थापन रोकता है)' : '(Elastic; stabilizes joint limits)'}</text>
      </svg>`;
  }

  if (key === 'muscle-3-types') {
    return `
      <svg viewBox="0 0 680 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="136" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.amber.text}">${hi ? 'तीनों पेशी ऊतकों की संरचना (चित्र 3.13): रेखित बनाम चिकनी बनाम हृद पेशी' : '3 Muscular Tissues (NCERT Fig 3.13): Skeletal vs Smooth vs Cardiac'}</text>

        <rect x="10" y="30" width="212" height="96" rx="9" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.6"/>
        <text x="116" y="48" text-anchor="middle" font-size="10" font-weight="900" fill="${p.rose.text}">1. ${hi ? 'कंकाल / रेखित पेशी' : '1. Skeletal / Striated'}</text>
        <text x="20" y="67" font-size="8.9" fill="${p.ink}">• ${hi ? 'आकार: लंबी, बेलनाकार, अशाखित' : 'Long, cylindrical, UNBRANCHED'}</text>
        <text x="20" y="84" font-size="8.9" font-weight="800" fill="${p.ink}">• ${hi ? 'केंद्रक: बहुकेंद्रकी + गहरी धारियाँ' : 'Multinucleated + Dark stripes'}</text>
        <text x="20" y="102" font-size="8.9" font-weight="800" fill="${p.green.text}">• ${hi ? 'नियंत्रण: ऐच्छिक (हाथ-पैर)' : 'Control: VOLUNTARY (Limbs)'}</text>

        <rect x="234" y="30" width="212" height="96" rx="9" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.6"/>
        <text x="340" y="48" text-anchor="middle" font-size="10" font-weight="900" fill="${p.amber.text}">2. ${hi ? 'चिकनी / अरेखित पेशी' : '2. Smooth / Unstriated'}</text>
        <text x="244" y="67" font-size="8.9" fill="${p.ink}">• ${hi ? 'आकार: तर्कु रूप (नुकीले सिरे)' : 'Spindle-shaped (pointed ends)'}</text>
        <text x="244" y="84" font-size="8.9" font-weight="800" fill="${p.ink}">• ${hi ? 'केंद्रक: एकल केंद्रक, धारियाँ नहीं' : 'Uninucleate, NO striations'}</text>
        <text x="244" y="102" font-size="8.9" font-weight="800" fill="${p.rose.text}">• ${hi ? 'अनैच्छिक: आँत, आमाशय, आँख पुतली' : 'Involuntary: Stomach, Gut, Iris'}</text>

        <rect x="458" y="30" width="212" height="96" rx="9" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.6"/>
        <text x="564" y="48" text-anchor="middle" font-size="10" font-weight="900" fill="${p.purple.text}">3. ${hi ? 'हृदय पेशी (Cardiac)' : '3. Cardiac Muscle'}</text>
        <text x="468" y="67" font-size="8.9" fill="${p.ink}">• ${hi ? 'आकार: बेलनाकार एवं शाखित तंतु' : 'Cylindrical & BRANCHED network'}</text>
        <text x="468" y="84" font-size="8.9" font-weight="800" fill="${p.ink}">• ${hi ? 'एकल केंद्रक + हल्की धारियाँ + ढेरों Mito' : '1 Nucleus + Faint stripes + Rich Mito'}</text>
        <text x="468" y="102" font-size="8.9" font-weight="800" fill="${p.teal.text}">• ${hi ? 'अनैच्छिक: जीवनभर बिना थके धड़कन' : 'Involuntary, NEVER fatigues ✓'}</text>
      </svg>`;
  }

  if (key === 'neuron-synapse-diagram') {
    return `
      <svg viewBox="0 0 680 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="nrArr_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.blue.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="136" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.blue.text}">${hi ? 'तंत्रिका कोशिका (Neuron — चित्र 3.14) एवं आवेग संचरण पथ (Synapse तक)' : 'Neuron Anatomy (Fig 3.14) & Electrical Impulse Pathway across Synapse'}</text>

        <!-- Dendrites -->
        <path d="M40 50 L85 75 M36 80 L85 78 M45 106 L85 82" stroke="${p.teal.stroke}" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Soma / Cell Body -->
        <circle cx="112" cy="78" r="28" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="2.2"/>
        <circle cx="112" cy="78" r="9" fill="${p.rose.stroke}"/>
        <!-- Long Axon -->
        <line x1="140" y1="78" x2="310" y2="78" stroke="${p.amber.stroke}" stroke-width="7" stroke-linecap="round"/>
        <!-- Axon Terminal branches + Synaptic Cleft -->
        <path d="M310 78 L345 55 M310 78 L350 78 M310 78 L345 101" stroke="${p.purple.stroke}" stroke-width="2.5"/>
        <circle cx="350" cy="55" r="4" fill="${p.purple.stroke}"/>
        <circle cx="354" cy="78" r="4" fill="${p.purple.stroke}"/>
        <circle cx="350" cy="101" r="4" fill="${p.purple.stroke}"/>

        <text x="54" y="40" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.teal.text}">${hi ? 'द्रुमिका (Dendrite)' : 'Dendrites'}</text>
        <text x="112" y="122" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.blue.text}">${hi ? 'कोशिका-काय (1 केंद्रक)' : 'Cell Body (1 Nucleus)'}</text>
        <text x="225" y="64" text-anchor="middle" font-size="9" font-weight="800" fill="${p.amber.text}">${hi ? 'तंत्रिकाक्ष (Axon — लंबा तंतु)' : 'Axon (Signal Cable)'}</text>
        <text x="342" y="122" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.purple.text}">${hi ? 'एक्सॉन टर्मिनल → सिनेप्स' : 'Terminal → Synaptic Cleft'}</text>

        <rect x="385" y="34" width="282" height="90" rx="9" fill="${p.card}" stroke="${p.border}"/>
        <text x="526" y="53" text-anchor="middle" font-size="9.8" font-weight="900" fill="${p.teal.text}">${hi ? 'आवेग प्रवाह (Exam Sequence)' : 'Signal Direction (PYQ Chain)'}</text>
        <text x="526" y="73" text-anchor="middle" font-size="9" font-weight="800" fill="${p.ink}">${hi ? 'द्रुमिका → कोशिका-काय → तंत्रिकाक्ष → सिनेप्स' : 'Dendrite -> Cell Body -> Axon -> Synapse'}</text>
        <text x="526" y="92" text-anchor="middle" font-size="8.6" fill="${p.muted}">${hi ? '• दो न्यूरॉन के बीच अंतराल = अंतर्ग्रथित विदर (Synaptic Cleft)' : '• Gap between two neurons = Synaptic Cleft'}</text>
        <text x="526" y="110" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.rose.text}">${hi ? '• संवेदनशील छुईमुई पौधे में तंत्रिका ऊतक नहीं होता!' : '• Note: Mimosa (plants) have ZERO nervous tissue!'}</text>
      </svg>`;
  }

  if (key === 'joints-skeleton-totipotency') {
    return `
      <svg viewBox="0 0 680 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <rect x="2" y="2" width="676" height="151" rx="12" fill="${p.bg}" stroke="${p.border}"/>
        <text x="340" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="${p.purple.text}">${hi ? 'मानव शरीर की 4 प्रमुख संधियाँ (Joints) + कंकाल एवं पादप पूर्णशक्तता (F.C. Steward 1958)' : '4 Skeletal Joints (Sec 3.5), Spine/Ribs & Carrot Phloem Totipotency'}</text>

        <rect x="10" y="30" width="155" height="112" rx="9" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.5"/>
        <text x="87" y="48" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.green.text}">1. ${hi ? 'कंदुक-खल्लिका' : 'Ball & Socket'}</text>
        <text x="87" y="69" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">${hi ? 'कंधा एवं कूल्हा' : 'Shoulder & Hip'}</text>
        <text x="87" y="88" text-anchor="middle" font-size="8.5" fill="${p.muted}">${hi ? 'सभी दिशाओं व गोल गति' : '360° all-plane rotation'}</text>
        <text x="87" y="109" text-anchor="middle" font-size="8.3" fill="${p.green.text}">${hi ? 'कंधा + जत्रुकास्थि (मेखला)' : 'Shoulder + Clavicle'}</text>

        <rect x="175" y="30" width="155" height="112" rx="9" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="252" y="48" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.blue.text}">2. ${hi ? 'कोर संधि (Hinge)' : 'Hinge Joint'}</text>
        <text x="252" y="69" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">${hi ? 'कोहनी, घुटना, टखना' : 'Elbow, Knee, Ankle'}</text>
        <text x="252" y="88" text-anchor="middle" font-size="8.5" fill="${p.muted}">${hi ? 'कब्जे जैसी 1 ही तल गति' : '1-plane back & forth'}</text>
        <text x="252" y="109" text-anchor="middle" font-size="8.3" fill="${p.blue.text}">${hi ? 'रक्षा: जानुफलक (Patella)' : 'Knee shield = Patella'}</text>

        <rect x="340" y="30" width="155" height="112" rx="9" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="417" y="48" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.amber.text}">3. ${hi ? 'धुराग्र व 4. अचल' : 'Pivot & Fixed'}</text>
        <text x="417" y="69" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.ink}">${hi ? 'धुराग्र = गर्दन–खोपड़ी' : 'Pivot = Neck–Skull'}</text>
        <text x="417" y="88" text-anchor="middle" font-size="8.8" font-weight="700" fill="${p.rose.text}">${hi ? 'अचल (Fixed) = खोपड़ी' : 'Fixed = Skull Cranium'}</text>
        <text x="417" y="109" text-anchor="middle" font-size="8.3" fill="${p.muted}">${hi ? '12 जोड़ी पसलियाँ + गद्दी डिस्क' : '12 Rib pairs + Cartilage disc'}</text>

        <rect x="505" y="30" width="165" height="112" rx="9" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.5"/>
        <text x="587" y="48" text-anchor="middle" font-size="9.5" font-weight="900" fill="${p.purple.text}">🌱 ${hi ? 'स्टीवर्ड 1958 + किरीट रोग' : 'Steward 1958 + Gall'}</text>
        <text x="587" y="68" text-anchor="middle" font-size="8.6" font-weight="700" fill="${p.ink}">${hi ? 'गाजर फ्लोएम -> नया पौधा' : 'Carrot phloem -> Whole plant'}</text>
        <text x="587" y="87" text-anchor="middle" font-size="8.4" fill="${p.muted}">${hi ? 'निर्विभेदन → पुनःविभेदन' : 'Dediff. -> Rediff.'}</text>
        <text x="587" y="108" text-anchor="middle" font-size="8.3" font-weight="700" fill="${p.rose.text}">${hi ? 'Agrobacterium = जीन वाहक' : 'Crown Gall Vector ✓'}</text>
      </svg>`;
  }

  return '';
}
