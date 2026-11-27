/**
 * Dual-Theme Pure Vector Diagrams for Class 9 Chemistry Ch 9: Particulate Nature of Matter
 * Covers: (1) Chapter Blueprint Mindmap, (2) Conservation of Mass Open vs Sealed Flask + Constant Proportions,
 *         (3) Covalent Electron Sharing vs Ionic Na+Cl- 3D Crystal Lattice, (4) Criss-Cross Formulae + Formula Unit Mass
 */

function palette(theme = 'dark') {
  const dark = theme !== 'light';
  return {
    bg: dark ? '#08111e' : '#f8fafc',
    panel: dark ? '#0f1b2e' : '#ffffff',
    panelAlt: dark ? '#132238' : '#f1f5f9',
    border: dark ? '#29405e' : '#cbd5e1',
    text: dark ? '#f1f5f9' : '#0f172a',
    muted: dark ? '#94a3b8' : '#475569',
    teal: dark ? '#2dd4bf' : '#0d9488',
    cyan: dark ? '#38bdf8' : '#0284c7',
    amber: dark ? '#fbbf24' : '#d97706',
    rose: dark ? '#fb7185' : '#e11d48',
    emerald: dark ? '#34d399' : '#059669',
    violet: dark ? '#a78bfa' : '#7c3aed',
  };
}

export function renderC9Ch9ParticulateDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const c = palette(theme);
  const hi = lang === 'hi';

  if (key === 'c9-ch9-blueprint-mindmap') {
    return `<svg viewBox="0 0 880 420" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <defs>
    <marker id="arr9bp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="${c.teal}" />
    </marker>
  </defs>
  <text x="440" y="28" text-anchor="middle" fill="${c.teal}" font-size="16" font-weight="800">${hi ? 'अध्याय 9: द्रव्य का परमाण्विक आधार — 4 मुख्य परीक्षा स्तंभ' : 'Ch 9 Blueprint: Particulate Nature of Matter — 4 Core Pillars'}</text>
  <rect x="295" y="168" width="290" height="72" rx="16" fill="${c.panel}" stroke="${c.teal}" stroke-width="2.5" />
  <text x="440" y="198" text-anchor="middle" fill="${c.text}" font-size="14" font-weight="800">${hi ? 'रासायनिक संयोग के नियम व सूत्र' : 'Laws, Bonds, Formulae & Mass'}</text>
  <text x="440" y="220" text-anchor="middle" fill="${c.muted}" font-size="11.5">${hi ? 'NCERT Ch 9 (पृ. 161–183) • कुल 33+ PYQ क्षेत्र' : 'NCERT Ch 9 (p.161–183) • Complete CBT Concept Map'}</text>

  <line x1="330" y1="168" x2="220" y2="132" stroke="${c.teal}" stroke-width="2" marker-end="url(#arr9bp)" />
  <line x1="550" y1="168" x2="660" y2="132" stroke="${c.cyan}" stroke-width="2" marker-end="url(#arr9bp)" />
  <line x1="330" y1="240" x2="220" y2="278" stroke="${c.amber}" stroke-width="2" marker-end="url(#arr9bp)" />
  <line x1="550" y1="240" x2="660" y2="278" stroke="${c.emerald}" stroke-width="2" marker-end="url(#arr9bp)" />

  <rect x="24" y="52" width="380" height="92" rx="12" fill="${c.panelAlt}" stroke="${c.teal}" stroke-width="1.8" />
  <text x="40" y="76" fill="${c.teal}" font-size="13" font-weight="800">${hi ? '1. रासायनिक संयोग व डाल्टन सिद्धांत (9.1–9.3)' : '1. Mass Conservation, Constant Prop & Dalton'}</text>
  <text x="40" y="97" fill="${c.text}" font-size="11.5">${hi ? '• द्रव्यमान संरक्षण (लवाइजिए 1789): बंद निकाय में अभिकारक = उत्पाद' : '• Conservation (Lavoisier 1789): Sealed Mass Reactants = Products'}</text>
  <text x="40" y="115" fill="${c.text}" font-size="11.5">${hi ? '• स्थिर अनुपात (प्राउस्ट): जल में H:O = 1:8; सिनेबार 86.22% Hg : 13.78% S' : '• Constant Prop (Proust): H₂O mass ratio = 1:8, CO₂ = 3:8, NH₃ = 14:3'}</text>
  <text x="40" y="133" fill="${c.muted}" font-size="11">${hi ? '• डाल्टन (1808): परमाणु अविभाज्य, सरल पूर्णांक अनुपात में जुड़ें' : '• Dalton (1808): Indivisible atoms rearrange in whole-number ratios'}</text>

  <rect x="476" y="52" width="380" height="92" rx="12" fill="${c.panelAlt}" stroke="${c.cyan}" stroke-width="1.8" />
  <text x="492" y="76" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? '2. परमाणु संयोजन: सहसंयोजी vs आयनिक आबंध (9.4)' : '2. Chemical Bonding: Covalent vs Ionic (9.4)'}</text>
  <text x="492" y="97" fill="${c.text}" font-size="11.5">${hi ? '• अष्टक (8 e⁻) / द्विक (K=2 e⁻) पूर्ण करने हेतु कम-ऊर्जा स्थायित्व' : '• Octet (8 e⁻) / Duplet (K=2) stability rule lower energy'}</text>
  <text x="492" y="115" fill="${c.text}" font-size="11.5">${hi ? '• सहसंयोजी (साझेदारी): H₂ (एकल), O₂ (द्वि), H₂O, CO₂, PCl₃, SF₆' : '• Covalent (Sharing): H–H single, O=O double, HCl, H₂S, NH₃'}</text>
  <text x="492" y="133" fill="${c.muted}" font-size="11">${hi ? '• आयनिक (स्थानांतरण): Na⁺ + Cl⁻ → 3-D क्रिस्टल जालक (1:6 समन्वय)' : '• Ionic (Transfer): Na⁺ cation + Cl⁻ anion → 3D crystal lattice'}</text>

  <rect x="24" y="274" width="380" height="114" rx="12" fill="${c.panelAlt}" stroke="${c.amber}" stroke-width="1.8" />
  <text x="40" y="298" fill="${c.amber}" font-size="13" font-weight="800">${hi ? '3. संयोजकता व तिर्यक रासायनिक सूत्र लेखन (9.5)' : '3. Valency, Criss-Cross & Nomenclature (9.5)'}</text>
  <text x="40" y="319" fill="${c.text}" font-size="11.5">${hi ? '• आयन नियम: धनायन पहले (Na⁺), ऋणायन बाद (-ide); सरलतम अनुपात' : '• Cation first, anion next (-ide); HCF simplify equal charges (MgO)'}</text>
  <text x="40" y="337" fill="${c.text}" font-size="11.5">${hi ? '• बहुपरमाणुक कोष्ठक: ≥2 आयन पर () आवश्यक — Ca(OH)₂, Al₂(SO₄)₃' : '• Brackets when polyatomic count ≥ 2: Ca(OH)₂, Al₂(SO₄)₃, (NH₄)₂SO₄'}</text>
  <text x="40" y="355" fill="${c.text}" font-size="11.5">${hi ? '• उपसर्ग (सहसंयोजी): mono, di, tri, tetra, penta, hexa (N₂O₅, SF₆)' : '• Prefixes (covalent): CO monoxide, N₂O₅ dinitrogen pentoxide, H₂S'}</text>
  <text x="40" y="373" fill="${c.muted}" font-size="11">${hi ? '• आयरन Fe²⁺(फे रस)/Fe³⁺(फे रिक), कॉपर Cu⁺(क्यूप्रस)/Cu²⁺(क्यूप्रिक)' : '• Variable: Fe²⁺(ferrous)/Fe³⁺(ferric), Cu⁺(cuprous)/Cu²⁺(cupric)'}</text>

  <rect x="476" y="274" width="380" height="114" rx="12" fill="${c.panelAlt}" stroke="${c.emerald}" stroke-width="1.8" />
  <text x="492" y="298" fill="${c.emerald}" font-size="13" font-weight="800">${hi ? '4. गुणधर्म, चालकता व आण्विक/सूत्र द्रव्यमान (9.6–9.8)' : '4. Conductivity, Melting Pt & Masses u (9.6–9.8)'}</text>
  <text x="492" y="319" fill="${c.text}" font-size="11.5">${hi ? '• आयनिक (NaCl, CuSO₄): जल में विलेय/चालक, ठोस कुचालक, उच्च गलनांक' : '• Ionic: High MP/BP, soluble in water, conduct when molten/aq ONLY'}</text>
  <text x="492" y="337" fill="${c.text}" font-size="11.5">${hi ? '• सहसंयोजी (चीनी, कर्पूर, नैफ्थलीन): जल में कुचालक, निम्न गलनांक' : '• Covalent (sugar, camphor, naphthalene): Non-conductors in water'}</text>
  <text x="492" y="355" fill="${c.text}" font-size="11.5">${hi ? '• आण्विक द्रव्यमान: H₂O=18u, CO₂=44u, HNO₃=63u, CH₄=16u' : '• Molecular Mass: H₂O=18u, CO₂=44u, HNO₃=63u, NH₃=17u'}</text>
  <text x="492" y="373" fill="${c.muted}" font-size="11">${hi ? '• सूत्र इकाई द्रव्यमान: Na₂O=62u, CaCl₂=111u, (NH₄)₂SO₄=132u, Ca(NO₃)₂=164u' : '• Formula Unit: ZnO=81u, Na₂O=62u, KCl=74.5u, Ca(NO₃)₂=164u'}</text>
</svg>`;
  }

  if (key === 'c9-ch9-conservation-flask-diagram') {
    return `<svg viewBox="0 0 880 390" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.teal}" font-size="15.5" font-weight="800">${hi ? 'द्रव्यमान संरक्षण प्रयोग (क्र. 9.2 व 9.3) तथा स्थिर अनुपात नियम (चित्र 9.2–9.5)' : 'Law of Conservation of Mass (Act 9.2–9.3) & Constant Proportions'}</text>

  <!-- Open vs Sealed Flask Setup -->
  <rect x="20" y="44" width="510" height="328" rx="12" fill="${c.panel}" stroke="${c.border}" stroke-width="1.5" />
  <text x="275" y="68" text-anchor="middle" fill="${c.amber}" font-size="13" font-weight="800">${hi ? 'प्रयोग 9.2: सिरका + बेकिंग सोडा (NaHCO₃ → CO₂↑ गैस)' : 'Act 9.2: Vinegar + Baking Soda (CO₂ Gas Escapes vs Sealed)'}</text>

  <!-- Open Flask Left -->
  <rect x="38" y="84" width="225" height="270" rx="10" fill="${c.panelAlt}" stroke="${c.rose}" stroke-width="1.6" />
  <text x="150" y="106" text-anchor="middle" fill="${c.rose}" font-size="12" font-weight="800">${hi ? 'व्यवस्था 1: खुला फ्लास्क (त्रुटि जाल!)' : 'Setup 1: Open Flask (PYQ Trap!)'}</text>
  <polygon points="128,132 172,132 194,232 106,232" fill="${c.bg}" stroke="${c.cyan}" stroke-width="2" />
  <polygon points="111,210 189,210 194,232 106,232" fill="${c.cyan}" fill-opacity="0.28" />
  <path d="M 142 128 Q 134 114 146 104 M 158 128 Q 168 114 156 102" fill="none" stroke="${c.rose}" stroke-width="2" stroke-dasharray="3,2" />
  <text x="150" y="148" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="700">${hi ? 'CO₂ गैस बाहर निकलती है!' : 'CO₂ Gas Escapes!'}</text>
  <rect x="92" y="236" width="116" height="32" rx="6" fill="${c.bg}" stroke="${c.rose}" />
  <text x="150" y="256" text-anchor="middle" fill="${c.rose}" font-size="12" font-weight="800">${hi ? '122.10 g (कम भार!)' : '122.10 g (Mass drops)'}</text>
  <text x="150" y="294" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? 'नियम उल्लंघन नहीं — केवल' : 'Law NOT violated! Escaping'}</text>
  <text x="150" y="311" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? 'उड़ती CO₂ गैस तोली नहीं गई' : 'CO₂ gas wasn’t weighed'}</text>
  <text x="150" y="335" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? '(Group D 2025 Shift 16 PYQ)' : '(Group D 2025 Shift 16 PYQ)'}</text>

  <!-- Sealed Balloon Flask Right -->
  <rect x="282" y="84" width="230" height="270" rx="10" fill="${c.panelAlt}" stroke="${c.emerald}" stroke-width="1.8" />
  <text x="397" y="106" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? 'व्यवस्था 2: बंद गुब्बारा (सत्य नियम)' : 'Setup 2: Sealed Balloon (Conserved)'}</text>
  <ellipse cx="397" cy="129" rx="28" ry="18" fill="${c.emerald}" fill-opacity="0.25" stroke="${c.emerald}" stroke-width="2" />
  <text x="397" y="133" text-anchor="middle" fill="${c.emerald}" font-size="10" font-weight="800">CO₂</text>
  <polygon points="376,148 418,148 440,232 354,232" fill="${c.bg}" stroke="${c.teal}" stroke-width="2" />
  <polygon points="360,210 434,210 440,232 354,232" fill="${c.teal}" fill-opacity="0.28" />
  <rect x="339" y="236" width="116" height="32" rx="6" fill="${c.bg}" stroke="${c.emerald}" />
  <text x="397" y="256" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">124.50 g = 124.50 g</text>
  <text x="397" y="294" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? 'लवाइजिए (1789): बंद निकाय में' : 'Lavoisier (1789): Sealed total'}</text>
  <text x="397" y="311" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? 'अभिकारक द्रव्यमान = उत्पाद द्रव्यमान' : 'mass BEFORE = mass AFTER!'}</text>
  <text x="397" y="335" text-anchor="middle" fill="${c.amber}" font-size="10.5">${hi ? 'क्र. 9.3: Na₂SO₄+BaCl₂ → BaSO₄↓ (बिना गैस)' : 'Act 9.3: BaSO₄↓ white ppt (no gas)'}</text>

  <!-- Right Panel: Law of Constant Proportions (Proust) -->
  <rect x="546" y="44" width="314" height="328" rx="12" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.6" />
  <text x="703" y="68" text-anchor="middle" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? 'स्थिर अनुपात का नियम (जोसेफ प्राउस्ट)' : 'Law of Constant Proportions (Proust)'}</text>
  <text x="703" y="88" text-anchor="middle" fill="${c.muted}" font-size="11">${hi ? 'यौगिक में तत्व सदैव निश्चित द्रव्यमान अनुपात में:' : 'Fixed mass ratio regardless of source:'}</text>

  <!-- Bars -->
  <text x="564" y="122" fill="${c.text}" font-size="11.5" font-weight="700">H₂O (H : O = 1 : 8)</text>
  <rect x="564" y="130" width="30" height="22" rx="4" fill="${c.cyan}" />
  <rect x="596" y="130" width="240" height="22" rx="4" fill="${c.teal}" />
  <text x="579" y="145" text-anchor="middle" fill="#08111e" font-size="10" font-weight="800">1g H</text>
  <text x="716" y="145" text-anchor="middle" fill="#08111e" font-size="10.5" font-weight="800">8g Oxygen (88.9%)</text>

  <text x="564" y="182" fill="${c.text}" font-size="11.5" font-weight="700">CO₂ (C : O = 12 : 32 = 3 : 8)</text>
  <rect x="564" y="190" width="74" height="22" rx="4" fill="${c.amber}" />
  <rect x="640" y="190" width="196" height="22" rx="4" fill="${c.teal}" />
  <text x="601" y="205" text-anchor="middle" fill="#08111e" font-size="10" font-weight="800">12g C (3)</text>
  <text x="738" y="205" text-anchor="middle" fill="#08111e" font-size="10.5" font-weight="800">32g O (8) → 44u</text>

  <text x="564" y="242" fill="${c.text}" font-size="11.5" font-weight="700">NH₃ (N : H = 14 : 3)</text>
  <rect x="564" y="250" width="222" height="22" rx="4" fill="${c.violet}" />
  <rect x="788" y="250" width="48" height="22" rx="4" fill="${c.cyan}" />
  <text x="675" y="265" text-anchor="middle" fill="#08111e" font-size="10.5" font-weight="800">14g N</text>
  <text x="812" y="265" text-anchor="middle" fill="#08111e" font-size="10" font-weight="800">3g H</text>

  <text x="564" y="302" fill="${c.text}" font-size="11.5" font-weight="700">${hi ? 'सिनेबार HgS (प्राचीन लाल वर्णक)' : 'Cinnabar HgS (Fig 9.5 Hingula)'}</text>
  <rect x="564" y="310" width="234" height="22" rx="4" fill="${c.rose}" />
  <rect x="800" y="310" width="36" height="22" rx="4" fill="${c.amber}" />
  <text x="681" y="325" text-anchor="middle" fill="#08111e" font-size="10.5" font-weight="800">86.22% Mercury (Hg)</text>
  <text x="818" y="325" text-anchor="middle" fill="#08111e" font-size="9" font-weight="800">13.78%</text>
  <text x="703" y="356" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="700">${hi ? 'PYQ जाल: केवल यौगिकों पर लागू, मिश्रण पर नहीं!' : 'Trap: Compounds ONLY — NOT Mixtures!'}</text>
</svg>`;
  }

  if (key === 'c9-ch9-covalent-ionic-lattice-diagram') {
    return `<svg viewBox="0 0 880 400" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.cyan}" font-size="15.5" font-weight="800">${hi ? 'इलेक्ट्रॉन साझेदारी (सहसंयोजी आबंध) बनाम स्थानांतरण (आयनिक क्रिस्टल जालक 9.4)' : 'Covalent Electron Sharing vs Ionic Transfer & NaCl 3D Lattice (Sec 9.4)'}</text>

  <!-- Left: Covalent Bonding -->
  <rect x="20" y="42" width="415" height="340" rx="12" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.6" />
  <text x="227" y="66" text-anchor="middle" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? 'सहसंयोजी आबंध: इलेक्ट्रॉनों की साझेदारी (अधातु + अधातु)' : 'Covalent Bond: Sharing Electron Pairs'}</text>

  <!-- H2 Single Bond -->
  <rect x="36" y="80" width="184" height="122" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <circle cx="102" cy="136" r="32" fill="none" stroke="${c.cyan}" stroke-width="1.8" />
  <circle cx="152" cy="136" r="32" fill="none" stroke="${c.cyan}" stroke-width="1.8" />
  <text x="90" y="140" text-anchor="middle" fill="${c.text}" font-size="12" font-weight="800">H</text>
  <text x="164" y="140" text-anchor="middle" fill="${c.text}" font-size="12" font-weight="800">H</text>
  <circle cx="127" cy="128" r="3.8" fill="${c.amber}" />
  <circle cx="127" cy="144" r="3.8" fill="${c.teal}" />
  <text x="128" y="186" text-anchor="middle" fill="${c.teal}" font-size="11" font-weight="700">${hi ? 'H₂ (H–H एकल आबंध)' : 'H₂ (H–H Single Bond)'}</text>

  <!-- O2 Double Bond -->
  <rect x="234" y="80" width="184" height="122" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <circle cx="298" cy="136" r="34" fill="none" stroke="${c.emerald}" stroke-width="1.8" />
  <circle cx="354" cy="136" r="34" fill="none" stroke="${c.emerald}" stroke-width="1.8" />
  <text x="282" y="140" text-anchor="middle" fill="${c.text}" font-size="12" font-weight="800">O</text>
  <text x="370" y="140" text-anchor="middle" fill="${c.text}" font-size="12" font-weight="800">O</text>
  <circle cx="326" cy="122" r="3.5" fill="${c.amber}" />
  <circle cx="326" cy="131" r="3.5" fill="${c.amber}" />
  <circle cx="326" cy="141" r="3.5" fill="${c.teal}" />
  <circle cx="326" cy="150" r="3.5" fill="${c.teal}" />
  <text x="326" y="186" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="700">${hi ? 'O₂ (O=O द्वि-आबंध, 2 युग्म)' : 'O₂ (O=O Double Bond)'}</text>

  <!-- H2O + CO2 Examples -->
  <rect x="36" y="216" width="382" height="150" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="227" y="238" text-anchor="middle" fill="${c.text}" font-size="12" font-weight="800">${hi ? 'प्रमुख NCERT सहसंयोजी यौगिक (चित्र 9.9–9.10)' : 'NCERT Compound Molecules (Fig 9.9–9.10)'}</text>
  <circle cx="110" cy="278" r="17" fill="${c.rose}" fill-opacity="0.28" stroke="${c.rose}" stroke-width="1.8" />
  <text x="110" y="282" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="800">O</text>
  <circle cx="80" cy="306" r="11" fill="${c.cyan}" fill-opacity="0.3" stroke="${c.cyan}" />
  <text x="80" y="310" text-anchor="middle" fill="${c.text}" font-size="10" font-weight="800">H</text>
  <circle cx="140" cy="306" r="11" fill="${c.cyan}" fill-opacity="0.3" stroke="${c.cyan}" />
  <text x="140" y="310" text-anchor="middle" fill="${c.text}" font-size="10" font-weight="800">H</text>
  <text x="110" y="335" text-anchor="middle" fill="${c.muted}" font-size="10.5">H₂O (H–O–H)</text>

  <circle cx="242" cy="284" r="14" fill="${c.amber}" fill-opacity="0.28" stroke="${c.amber}" stroke-width="1.8" />
  <text x="242" y="288" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="800">O</text>
  <line x1="256" y1="281" x2="278" y2="281" stroke="${c.teal}" stroke-width="2" />
  <line x1="256" y1="287" x2="278" y2="287" stroke="${c.teal}" stroke-width="2" />
  <circle cx="294" cy="284" r="15" fill="${c.teal}" fill-opacity="0.28" stroke="${c.teal}" stroke-width="1.8" />
  <text x="294" y="288" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="800">C</text>
  <line x1="309" y1="281" x2="331" y2="281" stroke="${c.teal}" stroke-width="2" />
  <line x1="309" y1="287" x2="331" y2="287" stroke="${c.teal}" stroke-width="2" />
  <circle cx="346" cy="284" r="14" fill="${c.amber}" fill-opacity="0.28" stroke="${c.amber}" stroke-width="1.8" />
  <text x="346" y="288" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="800">O</text>
  <text x="294" y="335" text-anchor="middle" fill="${c.muted}" font-size="10.5">CO₂ (O=C=O) • NH₃ • HCl</text>
  <text x="227" y="356" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? 'निम्न गलनांक/क्वथनांक • जलीय विलयन में विद्युत कुचालक (चीनी/कर्पूर)' : 'Low MP/BP • Non-conductors even when dissolved (Sugar)'}</text>

  <!-- Right: Ionic Electron Transfer + 3D Crystal Lattice -->
  <rect x="446" y="42" width="414" height="340" rx="12" fill="${c.panel}" stroke="${c.amber}" stroke-width="1.6" />
  <text x="653" y="66" text-anchor="middle" fill="${c.amber}" font-size="13" font-weight="800">${hi ? 'आयनिक आबंध: e⁻ स्थानांतरण व 3-D NaCl जालक (9.4.2)' : 'Ionic Bond: Electron Transfer + 3D Crystal Lattice'}</text>

  <!-- Transfer row -->
  <rect x="462" y="80" width="382" height="106" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="530" y="106" text-anchor="middle" fill="${c.text}" font-size="12.5" font-weight="800">Na (2,8,1)</text>
  <text x="530" y="124" text-anchor="middle" fill="${c.muted}" font-size="10.5">11p⁺, 11e⁻</text>
  <path d="M 564 114 Q 608 90 648 114" fill="none" stroke="${c.amber}" stroke-width="2" />
  <text x="606" y="96" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="800">−1 e⁻ → +1 e⁻</text>
  <text x="688" y="106" text-anchor="middle" fill="${c.text}" font-size="12.5" font-weight="800">Cl (2,8,7)</text>
  <text x="688" y="124" text-anchor="middle" fill="${c.muted}" font-size="10.5">17p⁺, 17e⁻</text>
  <text x="653" y="152" text-anchor="middle" fill="${c.emerald}" font-size="13" font-weight="800">Na⁺ (2,8) + Cl⁻ (2,8,8) → NaCl (${hi ? 'विद्युतस्थैतिक बल' : 'Electrostatic'})</text>
  <text x="653" y="172" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'धातु धनायन (+) बनाएं • अधातु ऋणायन (-) बनाएं' : 'Metals lose e⁻ (Cation) • Non-metals gain e⁻ (Anion)'}</text>

  <!-- 3D Lattice grid -->
  <rect x="462" y="200" width="382" height="166" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="653" y="220" text-anchor="middle" fill="${c.teal}" font-size="12" font-weight="800">${hi ? 'त्रिविमीय NaCl जालक (प्रत्येक Na⁺ 6 Cl⁻ से घिरा)' : '3D NaCl Lattice (1 Na⁺ surrounded by 6 Cl⁻ ions)'}</text>
  <!-- 3x3 alternating ion grid -->
  <line x1="560" y1="246" x2="740" y2="246" stroke="${c.border}" stroke-width="2" />
  <line x1="560" y1="286" x2="740" y2="286" stroke="${c.border}" stroke-width="2" />
  <line x1="560" y1="326" x2="740" y2="326" stroke="${c.border}" stroke-width="2" />
  <line x1="585" y1="236" x2="585" y2="334" stroke="${c.border}" stroke-width="2" />
  <line x1="650" y1="236" x2="650" y2="334" stroke="${c.border}" stroke-width="2" />
  <line x1="715" y1="236" x2="715" y2="334" stroke="${c.border}" stroke-width="2" />
  <circle cx="585" cy="246" r="12" fill="${c.amber}" /><text x="585" y="250" text-anchor="middle" fill="#08111e" font-size="10" font-weight="800">Na⁺</text>
  <circle cx="650" cy="246" r="15" fill="${c.teal}" /><text x="650" y="250" text-anchor="middle" fill="#08111e" font-size="10.5" font-weight="800">Cl⁻</text>
  <circle cx="715" cy="246" r="12" fill="${c.amber}" /><text x="715" y="250" text-anchor="middle" fill="#08111e" font-size="10" font-weight="800">Na⁺</text>
  <circle cx="585" cy="286" r="15" fill="${c.teal}" /><text x="585" y="290" text-anchor="middle" fill="#08111e" font-size="10.5" font-weight="800">Cl⁻</text>
  <circle cx="650" cy="286" r="12" fill="${c.amber}" /><text x="650" y="290" text-anchor="middle" fill="#08111e" font-size="10" font-weight="800">Na⁺</text>
  <circle cx="715" cy="286" r="15" fill="${c.teal}" /><text x="715" y="290" text-anchor="middle" fill="#08111e" font-size="10.5" font-weight="800">Cl⁻</text>
  <circle cx="585" cy="326" r="12" fill="${c.amber}" /><text x="585" y="330" text-anchor="middle" fill="#08111e" font-size="10" font-weight="800">Na⁺</text>
  <circle cx="650" cy="326" r="15" fill="${c.teal}" /><text x="650" y="330" text-anchor="middle" fill="#08111e" font-size="10.5" font-weight="800">Cl⁻</text>
  <circle cx="715" cy="326" r="12" fill="${c.amber}" /><text x="715" y="330" text-anchor="middle" fill="#08111e" font-size="10" font-weight="800">Na⁺</text>
  <text x="653" y="356" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="700">${hi ? 'ठोस = कुचालक (आयन बंधे) • गलित/जलीय विलयन = सुचालक! (अभ्यास Q14)' : 'Solid = Insulator (ions locked) • Molten / Aqueous = Conductor!'}</text>
</svg>`;
  }

  if (key === 'c9-ch9-crisscross-mass-diagram') {
    return `<svg viewBox="0 0 880 400" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.amber}" font-size="15.5" font-weight="800">${hi ? 'तिर्यक रासायनिक सूत्र (Criss-Cross), कोष्ठक नियम एवं सूत्र इकाई द्रव्यमान (9.5, 9.7–9.8)' : 'Criss-Cross Formula Rules, Brackets & Formula Unit Mass (Sec 9.5, 9.7–9.8)'}</text>

  <!-- 4 Criss-Cross Boxes -->
  <rect x="20" y="42" width="198" height="172" rx="10" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.6" />
  <text x="119" y="64" text-anchor="middle" fill="${c.cyan}" font-size="12" font-weight="800">${hi ? '1. सामान्य आयन' : '1. Simple Ion Pair'}</text>
  <text x="82" y="96" text-anchor="middle" fill="${c.text}" font-size="16" font-weight="800">Ca</text>
  <text x="156" y="96" text-anchor="middle" fill="${c.text}" font-size="16" font-weight="800">Cl</text>
  <text x="82" y="138" text-anchor="middle" fill="${c.amber}" font-size="14" font-weight="800">2+</text>
  <text x="156" y="138" text-anchor="middle" fill="${c.teal}" font-size="14" font-weight="800">1−</text>
  <line x1="92" y1="126" x2="146" y2="104" stroke="${c.teal}" stroke-width="1.8" />
  <line x1="146" y1="126" x2="92" y2="104" stroke="${c.amber}" stroke-width="1.8" />
  <text x="119" y="172" text-anchor="middle" fill="${c.emerald}" font-size="16" font-weight="800">CaCl₂</text>
  <text x="119" y="196" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? '1 लिखा नहीं जाता' : 'Subscript 1 omitted'}</text>

  <rect x="234" y="42" width="198" height="172" rx="10" fill="${c.panel}" stroke="${c.amber}" stroke-width="1.6" />
  <text x="333" y="64" text-anchor="middle" fill="${c.amber}" font-size="12" font-weight="800">${hi ? '2. समान संयोजकता कटती है' : '2. Cancel Equal Charges'}</text>
  <text x="296" y="96" text-anchor="middle" fill="${c.text}" font-size="16" font-weight="800">Mg</text>
  <text x="370" y="96" text-anchor="middle" fill="${c.text}" font-size="16" font-weight="800">O</text>
  <text x="296" y="138" text-anchor="middle" fill="${c.amber}" font-size="14" font-weight="800">2+</text>
  <text x="370" y="138" text-anchor="middle" fill="${c.teal}" font-size="14" font-weight="800">2−</text>
  <line x1="306" y1="126" x2="360" y2="104" stroke="${c.teal}" stroke-width="1.8" />
  <line x1="360" y1="126" x2="306" y2="104" stroke="${c.amber}" stroke-width="1.8" />
  <text x="333" y="172" text-anchor="middle" fill="${c.emerald}" font-size="16" font-weight="800">Mg₂O₂ → MgO</text>
  <text x="333" y="196" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? '2 से भाग देकर सरल अनुपात' : 'Simplify Ca₂(CO₃)₂ → CaCO₃'}</text>

  <rect x="448" y="42" width="198" height="172" rx="10" fill="${c.panel}" stroke="${c.emerald}" stroke-width="1.6" />
  <text x="547" y="64" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? '3. बहुपरमाणुक कोष्ठक ()' : '3. Polyatomic Brackets'}</text>
  <text x="506" y="96" text-anchor="middle" fill="${c.text}" font-size="16" font-weight="800">Al</text>
  <text x="586" y="96" text-anchor="middle" fill="${c.text}" font-size="15" font-weight="800">SO₄</text>
  <text x="506" y="138" text-anchor="middle" fill="${c.amber}" font-size="14" font-weight="800">3+</text>
  <text x="586" y="138" text-anchor="middle" fill="${c.teal}" font-size="14" font-weight="800">2−</text>
  <line x1="518" y1="126" x2="572" y2="104" stroke="${c.teal}" stroke-width="1.8" />
  <line x1="572" y1="126" x2="518" y2="104" stroke="${c.amber}" stroke-width="1.8" />
  <text x="547" y="172" text-anchor="middle" fill="${c.emerald}" font-size="15.5" font-weight="800">Al₂(SO₄)₃</text>
  <text x="547" y="196" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? 'Al(OH)₃ सही, AlOH₃ गलत!' : 'Al(OH)₃ — NEVER AlOH₃'}</text>

  <rect x="662" y="42" width="198" height="172" rx="10" fill="${c.panel}" stroke="${c.violet}" stroke-width="1.6" />
  <text x="761" y="64" text-anchor="middle" fill="${c.violet}" font-size="12" font-weight="800">${hi ? '4. सहसंयोजी उपसर्ग' : '4. Covalent Prefixes'}</text>
  <text x="761" y="95" text-anchor="middle" fill="${c.text}" font-size="11.5">CO → ${hi ? 'मोनोक्साइड' : 'Monoxide'}</text>
  <text x="761" y="117" text-anchor="middle" fill="${c.text}" font-size="11.5">PCl₃ → ${hi ? 'ट्राइक्लोराइड' : 'Trichloride'}</text>
  <text x="761" y="139" text-anchor="middle" fill="${c.text}" font-size="11.5">CCl₄ → ${hi ? 'टेट्राक्लोराइड' : 'Tetrachloride'}</text>
  <text x="761" y="161" text-anchor="middle" fill="${c.text}" font-size="11.5">N₂O₅ → ${hi ? 'पेंटॉक्साइड' : 'Pentoxide'}</text>
  <text x="761" y="185" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="800">SF₆ → ${hi ? 'हेक्साफ्लुओराइड' : 'Hexafluoride'}</text>
  <text x="761" y="203" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'प्रथम H पर उपसर्ग नहीं (H₂S)' : 'No prefix for H₂S'}</text>

  <!-- Bottom Molecular & Formula Unit Mass Solved Cards -->
  <rect x="20" y="230" width="840" height="154" rx="12" fill="${c.panelAlt}" stroke="${c.teal}" stroke-width="1.6" />
  <text x="440" y="255" text-anchor="middle" fill="${c.teal}" font-size="13.5" font-weight="800">${hi ? 'आण्विक एवं सूत्र इकाई द्रव्यमान (u) — सर्वाधिक पूछे जाने वाले NCERT + RRB PYQ प्रश्न' : 'Molecular & Formula Unit Mass (u) — High-Yield NCERT + RRB PYQ Problems'}</text>

  <rect x="36" y="270" width="256" height="96" rx="8" fill="${c.panel}" stroke="${c.border}" />
  <text x="164" y="292" text-anchor="middle" fill="${c.cyan}" font-size="12.5" font-weight="800">CO₂ &amp; HNO₃ (${hi ? 'आण्विक' : 'Molecular'})</text>
  <text x="164" y="316" text-anchor="middle" fill="${c.text}" font-size="11.5">CO₂ = 12 + (16 × 2) = 44 u</text>
  <text x="164" y="336" text-anchor="middle" fill="${c.text}" font-size="11.5">HNO₃ = 1 + 14 + (16 × 3) = 63 u</text>
  <text x="164" y="355" text-anchor="middle" fill="${c.muted}" font-size="10.5">H₂O=18u • NH₃=17u • CH₄=16u</text>

  <rect x="312" y="270" width="256" height="96" rx="8" fill="${c.panel}" stroke="${c.border}" />
  <text x="440" y="292" text-anchor="middle" fill="${c.amber}" font-size="12.5" font-weight="800">Ca(NO₃)₂ &amp; CaCl₂ (${hi ? 'सूत्र इकाई' : 'Formula Unit'})</text>
  <text x="440" y="316" text-anchor="middle" fill="${c.text}" font-size="11.5">CaCl₂ = 40 + (35.5 × 2) = 111 u</text>
  <text x="440" y="336" text-anchor="middle" fill="${c.text}" font-size="11.5">Ca(NO₃)₂ = 40 + 2×(14+48) = 164 u</text>
  <text x="440" y="355" text-anchor="middle" fill="${c.muted}" font-size="10.5">ZnO=81u • Na₂O=62u • KCl=74.5u</text>

  <rect x="588" y="270" width="256" height="96" rx="8" fill="${c.panel}" stroke="${c.border}" />
  <text x="716" y="292" text-anchor="middle" fill="${c.emerald}" font-size="12.5" font-weight="800">(NH₄)₂SO₄ &amp; Mg(OH)₂</text>
  <text x="716" y="316" text-anchor="middle" fill="${c.text}" font-size="11.5">(NH₄)₂SO₄ = 2×(14+4)+32+64 = 132 u</text>
  <text x="716" y="336" text-anchor="middle" fill="${c.text}" font-size="11.5">Mg(OH)₂ = 24 + 2×(16+1) = 58 u</text>
  <text x="716" y="355" text-anchor="middle" fill="${c.muted}" font-size="10.5">NH₄NO₃=80u • H₃PO₄=98u • NaHCO₃=84u</text>
</svg>`;
  }

  return '';
}
