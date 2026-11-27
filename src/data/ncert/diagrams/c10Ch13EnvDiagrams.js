/**
 * Pure-SVG Vector Diagram Plates for Class 10 Biology Chapter 13:
 * Our Environment (हमारा पर्यावरण — jhsc113, NCERT 2026–27 Edition)
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

export function renderC10Ch13EnvDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const hi = lang !== 'en';
  const p = getPalette(theme);
  const a = p.a;

  if (key === 'c10-ch13-blueprint-mindmap') {
    const nodes = [
      { x: 10, t: hi ? '13.1 पारितंत्र घटक' : '13.1 Ecosystem Parts', s: hi ? 'जैव (उत्पादक/उपभोक्ता/अपघटक)+अजैव' : 'Biotic + Abiotic • Natural/Artif.', c: p.green },
      { x: 145, t: hi ? '13.1.1 आहार शृंखला व जाल' : '13.1.1 Chains & Web', s: hi ? 'एकल पथ vs शाखित जाल स्थायित्व' : '3–4 Steps • Food Web Resilience', c: p.teal },
      { x: 280, t: hi ? '1% व 10% ऊर्जा नियम' : '1% Sun & 10% Law', s: hi ? 'सदैव एकदिशिक! 90% ऊष्मा ह्रास' : 'Unidirectional Flow Upward', c: p.amber },
      { x: 415, t: hi ? 'जैव-आवर्धन (DDT)' : 'Biomagnification', s: hi ? 'शीर्ष (मानव) में अधिकतम विष संचय!' : 'Highest at Top Trophic Level', c: p.rose },
      { x: 550, t: hi ? '13.2 ओजोन व कचरा' : '13.2 Ozone & Waste', s: hi ? 'O₃ UV रक्षा • CFC 1987 • एंजाइम' : 'O₃/CFC 1987 • Enzymes • Plastic', c: p.blue },
    ];
    return `
      <svg viewBox="0 0 680 124" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="bm13_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.teal.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="120" rx="12" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="${p.teal.text}">${hi ? 'अध्याय 13 संपूर्ण मानचित्र — हमारा पर्यावरण (NCERT 2026–27 • #6 PYQ अध्याय)' : 'Chapter 13 Blueprint — Our Environment (NCERT 2026–27 • Top PYQ Chapter)'}</text>
        ${nodes.map((n, i) => `
          <rect x="${n.x}" y="34" width="122" height="74" rx="10" fill="${n.c.fill}" fill-opacity="${a}" stroke="${n.c.stroke}" stroke-width="1.6"/>
          <text x="${n.x + 61}" y="60" text-anchor="middle" font-size="9.0" font-weight="800" fill="${p.ink}">${n.t}</text>
          <text x="${n.x + 61}" y="82" text-anchor="middle" font-size="7.7" font-weight="600" fill="${p.muted}">${n.s}</text>
          ${i < 4 ? `<line x1="${n.x + 123}" y1="71" x2="${n.x + 138}" y2="71" stroke="${p.teal.stroke}" stroke-width="2" marker-end="url(#bm13_${theme})"/>` : ''}
        `).join('')}
      </svg>`;
  }

  if (key === 'c10-ch13-trophic-10pct-pyramid') {
    return `
      <svg viewBox="0 0 680 288" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ar13a_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.amber.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="284" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="23" text-anchor="middle" font-size="13" font-weight="800" fill="${p.amber.text}">${hi ? '1% सौर अवशोषण, 10% ऊर्जा स्थानांतरण नियम एवं एकदिशिक ऊर्जा प्रवाह (चित्र 13.2 व 13.4)' : '1% Solar Capture, 10% Energy Law & Unidirectional Trophic Pyramid (Fig 13.2 & 13.4)'}</text>

        <!-- Pyramid Tiers (Left 360px) -->
        <polygon points="150,48 250,48 268,90 132,90" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.6"/>
        <text x="200" y="67" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.rose.text}">${hi ? 'T4 तृतीय उपभोक्ता (शीर्ष मांसाहारी)' : 'T4 Tertiary Consumer (Top)'}</text>
        <text x="200" y="81" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">10 J (10% of T3)</text>

        <polygon points="126,95 274,95 294,137 106,137" fill="${p.purple.fill}" fill-opacity="${a}" stroke="${p.purple.stroke}" stroke-width="1.6"/>
        <text x="200" y="114" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.purple.text}">${hi ? 'T3 द्वितीयक उपभोक्ता (छोटे मांसाहारी)' : 'T3 Secondary Consumer'}</text>
        <text x="200" y="128" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">100 J (10% of T2)</text>

        <polygon points="100,142 300,142 322,184 78,184" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.6"/>
        <text x="200" y="161" text-anchor="middle" font-size="8.8" font-weight="800" fill="${p.blue.text}">${hi ? 'T2 प्राथमिक उपभोक्ता (शाकाहारी)' : 'T2 Primary Consumer (Herbivore)'}</text>
        <text x="200" y="175" text-anchor="middle" font-size="8" font-weight="700" fill="${p.ink}">1,000 J (10% of T1)</text>

        <polygon points="70,189 330,189 354,231 46,231" fill="${p.green.fill}" fill-opacity="${a}" stroke="${p.green.stroke}" stroke-width="1.8"/>
        <text x="200" y="208" text-anchor="middle" font-size="9" font-weight="800" fill="${p.green.text}">${hi ? 'T1 उत्पादक / स्वपोषी (हरे पौधे व नील-हरित शैवाल)' : 'T1 Producers / Autotrophs (Plants & Blue-Green Algae)'}</text>
        <text x="200" y="222" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.amber.text}">10,000 J (ONLY 1% of 10,00,000 J Sunlight!)</text>

        <!-- Side Heat Loss Arrows -->
        <text x="366" y="74" font-size="7.6" font-weight="700" fill="${p.rose.text}">→ 90% ${hi ? 'ऊष्मा/जैविक क्रिया ह्रास' : 'Lost as Heat'}</text>
        <text x="366" y="120" font-size="7.6" font-weight="700" fill="${p.purple.text}">→ 90% ${hi ? 'ऊष्मा व पाचन में ह्रास' : 'Lost as Heat'}</text>
        <text x="366" y="166" font-size="7.6" font-weight="700" fill="${p.blue.text}">→ 90% ${hi ? 'ऊष्मा/वृद्धि में व्यय' : 'Lost as Heat'}</text>
        <text x="366" y="212" font-size="7.6" font-weight="700" fill="${p.amber.text}">☀ 99% ${hi ? 'सौर ऊर्जा परावर्तित/अनुपयोगी' : 'Sunlight unused'}</text>

        <!-- Right Card: 3 Ecosystem Chains & Rules -->
        <rect x="498" y="46" width="168" height="186" rx="10" fill="${p.card}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="582" y="64" text-anchor="middle" font-size="9.5" font-weight="800" fill="${p.teal.text}">${hi ? '3 NCERT आहार शृंखलाएँ (चित्र 13.1)' : '3 NCERT Food Chains (Fig 13.1)'}</text>
        <text x="508" y="84" font-size="8" font-weight="700" fill="${p.green.text}">${hi ? 'a) वन: वृक्ष → हिरण → शेर/बाघ' : 'a) Forest: Tree → Deer → Tiger'}</text>
        <text x="508" y="106" font-size="7.8" font-weight="700" fill="${p.amber.text}">${hi ? 'b) घासस्थल: घास→टिड्डा→मेंढक→साँप→बाज' : 'b) Grass→Hopper→Frog→Snake→Eagle'}</text>
        <text x="508" y="128" font-size="8" font-weight="700" fill="${p.blue.text}">${hi ? 'c) तालाब: शैवाल→केकड़ा→मछली→बगुला' : 'c) Pond: Algae → Prawn → Fish → Crane'}</text>
        <line x1="508" y1="142" x2="656" y2="142" stroke="${p.border}" stroke-dasharray="3 2"/>
        <text x="582" y="160" text-anchor="middle" font-size="8" font-weight="800" fill="${p.rose.text}">${hi ? 'केवल 3–4 पोषी स्तर क्यों?' : 'Why Only 3–4 Trophic Steps?'}</text>
        <text x="582" y="176" text-anchor="middle" font-size="7.5" fill="${p.ink}">${hi ? 'प्रत्येक चरण पर 90% ह्रास से 4थे' : '90% drop each step leaves'}</text>
        <text x="582" y="190" text-anchor="middle" font-size="7.5" fill="${p.ink}">${hi ? 'स्तर के बाद उपयोगी ऊर्जा नगण्य!' : 'almost zero usable energy after T4!'}</text>
        <text x="582" y="212" text-anchor="middle" font-size="7.8" font-weight="800" fill="${p.teal.text}">${hi ? 'निचले स्तर (उत्पादक) पर संख्या सर्वाधिक!' : 'Largest Population Always at Base!'}</text>

        <rect x="12" y="242" width="656" height="34" rx="8" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}"/>
        <text x="340" y="263" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.teal.text}">${hi ? '📌 ऊर्जा प्रवाह सदैव एकदिशिक (Unidirectional) है: शाकाहारी से ऊर्जा कभी वापस पौधों या सूर्य को नहीं लौटती!' : '📌 Energy Flow Is Strictly UNIDIRECTIONAL: Energy captured by autotrophs NEVER returns back to solar input or lower levels!'}</text>
      </svg>`;
  }

  if (key === 'c10-ch13-foodweb-biomagnification') {
    return `
      <svg viewBox="0 0 680 286" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ar13b_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.rose.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="282" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.rose.text}">${hi ? 'जैविक आवर्धन (Biomagnification), आहार जाल व अपघटक पोषण चक्र' : 'Biological Magnification Pyramid, Food Web Stability & Decomposer Mineral Cycle'}</text>

        <!-- Left: Biomagnification Inverse Contrast -->
        <rect x="12" y="34" width="320" height="202" rx="10" fill="${p.rose.fill}" fill-opacity="${a}" stroke="${p.rose.stroke}" stroke-width="1.5"/>
        <text x="172" y="51" text-anchor="middle" font-size="10" font-weight="800" fill="${p.rose.text}">${hi ? 'जैव आवर्धन: ऊपर जाने पर रसायन सांद्रता बढ़ती है!' : 'Biomagnification: Persistent Toxins Magnify UPWARD!'}</text>

        <rect x="28" y="64" width="288" height="28" rx="6" fill="${p.card}" stroke="${p.rose.stroke}" stroke-width="1.8"/>
        <text x="172" y="82" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.rose.text}">${hi ? 'मानव / बाज (शीर्ष उपभोक्ता T4): 🔴 सर्वाधिक सांद्रता!' : 'Human / Eagle (Top Consumer T4): 🔴 HIGHEST DDT/Pesticide!'}</text>

        <rect x="52" y="100" width="240" height="26" rx="6" fill="${p.card}" stroke="${p.amber.stroke}"/>
        <text x="172" y="117" text-anchor="middle" font-size="8.2" font-weight="700" fill="${p.amber.text}">${hi ? 'बड़ी मछली / सर्प (T3): अधिक संचित' : 'Large Fish / Snake (T3): High accumulation'}</text>

        <rect x="76" y="134" width="192" height="26" rx="6" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="172" y="151" text-anchor="middle" font-size="8" font-weight="700" fill="${p.blue.text}">${hi ? 'कीट / मेंढक / छोटी मछली (T2)' : 'Herbivore / Small Fish (T2): Medium ppm'}</text>

        <rect x="98" y="168" width="148" height="26" rx="6" fill="${p.card}" stroke="${p.green.stroke}"/>
        <text x="172" y="185" text-anchor="middle" font-size="8" font-weight="700" fill="${p.green.text}">${hi ? 'जल/पौधे/गेहूँ (T1): 0.02 ppm प्रवेश' : 'Water/Plants (T1): 0.02 ppm entry'}</text>

        <text x="172" y="213" text-anchor="middle" font-size="7.6" font-weight="800" fill="${p.ink}">${hi ? 'क्यों? रसायन अजैवनिम्नीकरणीय हैं — पानी से धुलकर नहीं निकलते!' : 'Why? Pesticides are Non-Biodegradable — Washing cannot remove!'}</text>
        <text x="172" y="227" text-anchor="middle" font-size="7.3" fill="${p.muted}">${hi ? 'विरोधाभास: ऊर्जा ऊपर घटती है (↓) पर विष ऊपर बढ़ता है (↑)!' : 'Contrast: Usable Energy drops UP (↓), Toxin ppm rises UP (↑)!'}</text>

        <!-- Right: Food Web & Decomposers -->
        <rect x="342" y="34" width="326" height="202" rx="10" fill="${p.teal.fill}" fill-opacity="${a}" stroke="${p.teal.stroke}" stroke-width="1.5"/>
        <text x="505" y="51" text-anchor="middle" font-size="10" font-weight="800" fill="${p.teal.text}">${hi ? 'आहार जाल स्थायित्व एवं अपघटक (जीवाणु + कवक)' : 'Food Web Stability & Decomposer Mineral Replenishment'}</text>

        <rect x="356" y="64" width="298" height="62" rx="8" fill="${p.card}" stroke="${p.green.stroke}"/>
        <text x="505" y="81" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.green.text}">${hi ? '1. अपघटक (सफाईकर्मी — मृत अवशेष अपमार्जन)' : '1. Decomposers (Bacteria & Fungi — Sec 13.1)'}</text>
        <text x="505" y="97" text-anchor="middle" font-size="7.8" fill="${p.ink}">${hi ? 'जटिल कार्बनिक अवशेष → सरल अकार्बनिक खनिज (मृदा में पुनःपूर्ति!)' : 'Complex dead organic matter → Simple inorganic soil minerals!'}</text>
        <text x="505" y="113" text-anchor="middle" font-size="7.5" fill="${p.amber.text}">${hi ? 'अनुपस्थिति में मृत शरीर जमा व पौधों को खनिज मिलना बंद (पृ. 231)' : 'Without them: waste piles up & soil nutrient replenishment stops!'}</text>

        <rect x="356" y="134" width="298" height="92" rx="8" fill="${p.card}" stroke="${p.blue.stroke}"/>
        <text x="505" y="151" text-anchor="middle" font-size="8.6" font-weight="800" fill="${p.blue.text}">${hi ? '2. प्राकृतिक बनाम कृत्रिम पारितंत्र (NCERT पृ. 230–231)' : '2. Natural vs Artificial Ecosystems (Group D PYQ)'}</text>
        <text x="505" y="168" text-anchor="middle" font-size="8" font-weight="700" fill="${p.teal.text}">${hi ? 'प्राकृतिक (स्व-निर्वाह): वन, तालाब, झील (नियमित सफाई जरूरी नहीं)' : 'Natural: Forest, Pond, Lake (self-sustaining via decomposers)'}</text>
        <text x="505" y="184" text-anchor="middle" font-size="8" font-weight="700" fill="${p.amber.text}">${hi ? 'मानव-निर्मित (कृत्रिम): खेत, बगीचा, जल जीवशाला (Aquarium)' : 'Artificial (Human-Made): Crop Field, Garden, Aquarium!'}</text>
        <text x="505" y="201" text-anchor="middle" font-size="7.4" fill="${p.muted}">${hi ? 'जल जीवशाला की सफाई बार-बार जरूरी क्योंकि प्राकृतिक अपघटक कम हैं!' : 'Aquarium needs periodic cleaning (too few natural decomposers)'}</text>
        <text x="505" y="217" text-anchor="middle" font-size="7.6" font-weight="800" fill="${p.purple.text}">${hi ? 'आहार जाल: वैकल्पिक भोजन मार्ग देने से पारितंत्र स्थायी रहता है!' : 'Food Web offers alternative prey routes -> higher ecosystem stability!'}</text>

        <rect x="12" y="244" width="656" height="32" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="264" text-anchor="middle" font-size="8.5" font-weight="800" fill="${p.amber.text}">${hi ? '📌 ध्यान दें: तालाब/झील = प्राकृतिक पारितंत्र | खेत/बगीचा/जल जीवशाला = मानव-निर्मित कृत्रिम पारितंत्र (`Group D 2025 Shift 47 PYQ`)' : '📌 Exam Hot Tip: Pond/Forest/Lake = Natural | Crop-field/Garden/Aquarium = Artificial (`Group D 2025 Shift 47 PYQ`)'}</text>
      </svg>`;
  }

  if (key === 'c10-ch13-ozone-waste-cycle') {
    return `
      <svg viewBox="0 0 680 284" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:system-ui,sans-serif;">
        <defs><marker id="ar13o_${theme}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1 L10 5 L0 9 z" fill="${p.blue.stroke}"/></marker></defs>
        <rect x="2" y="2" width="676" height="280" rx="14" fill="${p.bg}" stroke="${p.border}" stroke-width="1.2"/>
        <text x="340" y="22" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.blue.text}">${hi ? 'ओजोन परत निर्माण-क्षरण (CFC / 1987 UNEP) एवं एंजाइम-आधारित कचरा प्रबंधन' : 'Ozone Layer Formation/Depletion (CFC / 1987 UNEP) & Enzyme Waste Specifics'}</text>

        <!-- Top Left: Ozone Chemistry -->
        <rect x="12" y="34" width="340" height="198" rx="10" fill="${p.blue.fill}" fill-opacity="${a}" stroke="${p.blue.stroke}" stroke-width="1.5"/>
        <text x="182" y="51" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.blue.text}">${hi ? '1. समतापमंडल ओजोन (O₃) रक्षा बनाम विष' : '1. Stratospheric Ozone (O₃) Shield vs Poison'}</text>
        <rect x="24" y="60" width="316" height="44" rx="7" fill="${p.card}" stroke="${p.teal.stroke}"/>
        <text x="182" y="77" text-anchor="middle" font-size="9" font-weight="800" fill="${p.teal.text}">Step 1: O₂ —(High-Energy UV)→ O + O</text>
        <text x="182" y="95" text-anchor="middle" font-size="9" font-weight="800" fill="${p.blue.text}">Step 2: O + O₂ → O₃ (${hi ? 'ओजोन अणु — 3 ऑक्सीजन परमाणु' : 'Ozone molecule'})</text>

        <text x="182" y="122" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.rose.text}">${hi ? '⚠️ भू-स्तर पर ओजोन एक घातक विष है, पर ऊपरी वायुमंडल में जीवनरक्षक!' : '⚠️ Deadly poison at ground level, yet life-saving UV shield aloft!'}</text>
        <text x="182" y="139" text-anchor="middle" font-size="7.8" fill="${p.ink}">${hi ? 'सूर्य से हानिकारक पराबैंगनी (UV) रोककर मानव में त्वचा कैंसर से बचाती है।' : 'Blocks harmful Solar UV radiation -> prevents Skin Cancer in humans.'}</text>
        <line x1="24" y1="150" x2="340" y2="150" stroke="${p.border}" stroke-dasharray="3 2"/>
        <text x="182" y="166" text-anchor="middle" font-size="8.2" font-weight="800" fill="${p.amber.text}">${hi ? 'क्षरण कारण (1980 से): क्लोरोफ्लुओरोकार्बन (CFCs)' : '1980s Depletion Cause: Chlorofluorocarbons (CFCs)'}</text>
        <text x="182" y="182" text-anchor="middle" font-size="7.7" fill="${p.muted}">${hi ? 'स्रोत: रेफ्रिजरेटर (शीतलन) व अग्निशमन (Fire extinguishers)' : 'Sources: Refrigerants (fridges) & fire extinguishers'}</text>
        <text x="182" y="200" text-anchor="middle" font-size="8" font-weight="800" fill="${p.green.text}">${hi ? '1987 UNEP समझौता: CFC उत्पादन 1986 स्तर पर सीमित (फ्रीज़)!' : '1987 UNEP Agreement: Froze CFC production at 1986 levels!'}</text>
        <text x="182" y="218" text-anchor="middle" font-size="7.5" fill="${p.ink}">${hi ? 'अब सभी कंपनियों के लिए CFC-रहित फ्रिज बनाना अनिवार्य है।' : 'Now mandatory worldwide for all firms to build CFC-free fridges.'}</text>

        <!-- Top Right: Waste Enzymes & Train Cups -->
        <rect x="362" y="34" width="306" height="198" rx="10" fill="${p.amber.fill}" fill-opacity="${a}" stroke="${p.amber.stroke}" stroke-width="1.5"/>
        <text x="515" y="51" text-anchor="middle" font-size="9.8" font-weight="800" fill="${p.amber.text}">${hi ? '2. एंजाइम विशिष्टता व कचरा (NCERT पृ. 235–238)' : '2. Enzyme Specificity & Waste Disposal (p.235–238)'}</text>
        <text x="515" y="70" text-anchor="middle" font-size="8" font-weight="800" fill="${p.ink}">${hi ? 'कोयला खाने से ऊर्जा क्यों नहीं मिलती? → एंजाइम विशिष्ट हैं!' : 'Why eating coal gives ZERO energy? Enzymes are SPECIFIC!'}</text>
        <text x="515" y="88" text-anchor="middle" font-size="7.8" fill="${p.green.text}">${hi ? '✅ जैव-निम्नीकरणीय: छिलके, कागज, लकड़ी, सूती, चमड़ा (Ex Q1)' : '✅ Biodegradable: Peels, Paper, Wood, Flowers, Leather (Ex Q1)'}</text>
        <text x="515" y="105" text-anchor="middle" font-size="7.8" fill="${p.rose.text}">${hi ? '❌ अजैव-निम्नीकरणीय: प्लास्टिक थैली, बबल पैक, काँच, DDT' : '❌ Non-biodegradable: Plastic bags, Bubble pack, Bottles (ALP)'}</text>
        <line x1="372" y1="118" x2="656" y2="118" stroke="${p.border}" stroke-dasharray="3 2"/>
        <text x="515" y="135" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.purple.text}">${hi ? 'रेलगाड़ी चाय कप केस स्टडी (NCERT पृ. 238):' : 'Train Disposable Cup Case Study (NCERT p.238):'}</text>
        <text x="515" y="153" text-anchor="middle" font-size="7.6" fill="${p.ink}">${hi ? '1. प्लास्टिक कप → सस्ता/स्वच्छ, पर सदियों तक प्रदूषण' : '1. Plastic Cup → cheap/hygienic, yet permanent plastic litter'}</text>
        <text x="515" y="169" text-anchor="middle" font-size="7.6" fill="${p.ink}">${hi ? '2. कुल्हड़ (मिट्टी) → लाखों कप हेतु उर्वर उपजाऊ मिट्टी नष्ट!' : '2. Kulhad (Clay) → destroyed huge fertile topsoil volume!'}</text>
        <text x="515" y="186" text-anchor="middle" font-size="7.9" font-weight="800" fill="${p.teal.text}">${hi ? '3. कागज के डिस्पोजेबल कप → जैव-निम्नीकरणीय सर्वोत्तम हल!' : '3. Paper Cups → biodegradable eco-friendly replacement!'}</text>
        <text x="515" y="212" text-anchor="middle" font-size="7.5" fill="${p.muted}">${hi ? 'E-waste में भारी धातुएँ (Pb, Hg, Cd) सुरक्षापूर्वक निपटानी चाहिए।' : 'E-waste holds toxic heavy metals requiring careful disposal.'}</text>

        <rect x="12" y="240" width="656" height="32" rx="8" fill="${p.card}" stroke="${p.border}"/>
        <text x="340" y="260" text-anchor="middle" font-size="8.4" font-weight="800" fill="${p.teal.text}">${hi ? '📌 टिप: जैवनिम्नीकरणीय कचरे का भी अधिक जमाव दुर्गंध, मक्खियाँ व मीथेन/रोग फैला सकता है (Ex Q8) — अतः खाद/पुनर्चक्रण करें!' : '📌 Ex Q8 Note: Excess biodegradable waste STILL harms if left piled uncomposted (foul odor, flies, disease vectors)!'}</text>
      </svg>`;
  }

  return '';
}
