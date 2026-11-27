/**
 * Dual-Theme Pure Vector Diagrams for Class 9 Biology Ch 11: Reproduction — Continuity of Life
 * Covers: (1) Chapter Blueprint Mindmap, (2) Asexual Modes + Mitosis vs Meiosis (46->23),
 *         (3) Complete Flower Structure, Pollination Agents & Seed/Fruit Formation,
 *         (4) Human Reproductive Systems, 28-Day Menstrual Cycle & XX/XY Sex Determination
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

export function renderC9Ch11ReproductionDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const c = palette(theme);
  const hi = lang === 'hi';

  if (key === 'c9-ch11-blueprint-mindmap') {
    return `<svg viewBox="0 0 880 420" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <defs>
    <marker id="arr11bp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="${c.emerald}" />
    </marker>
  </defs>
  <text x="440" y="28" text-anchor="middle" fill="${c.emerald}" font-size="16" font-weight="800">${hi ? 'अध्याय 11: जनन — जीवन की निरंतरता — 4 मुख्य परीक्षा स्तंभ' : 'Ch 11 Blueprint: Reproduction — Continuity of Life'}</text>
  <rect x="295" y="168" width="290" height="72" rx="16" fill="${c.panel}" stroke="${c.emerald}" stroke-width="2.5" />
  <text x="440" y="198" text-anchor="middle" fill="${c.text}" font-size="14" font-weight="800">${hi ? 'अलैंगिक व लैंगिक जनन तंत्र' : 'Continuity & Variation Mechanisms'}</text>
  <text x="440" y="220" text-anchor="middle" fill="${c.muted}" font-size="11.5">${hi ? 'NCERT Ch 11 (पृ. 208–227) • कुल 39+ PYQ क्षेत्र' : 'NCERT Ch 11 (p.208–227) • Complete CBT Blueprint'}</text>

  <line x1="330" y1="168" x2="220" y2="132" stroke="${c.emerald}" stroke-width="2" marker-end="url(#arr11bp)" />
  <line x1="550" y1="168" x2="660" y2="132" stroke="${c.cyan}" stroke-width="2" marker-end="url(#arr11bp)" />
  <line x1="330" y1="240" x2="220" y2="278" stroke="${c.amber}" stroke-width="2" marker-end="url(#arr11bp)" />
  <line x1="550" y1="240" x2="660" y2="278" stroke="${c.rose}" stroke-width="2" marker-end="url(#arr11bp)" />

  <rect x="24" y="48" width="380" height="98" rx="12" fill="${c.panelAlt}" stroke="${c.emerald}" stroke-width="1.8" />
  <text x="40" y="72" fill="${c.emerald}" font-size="13" font-weight="800">${hi ? '1. अलैंगिक जनन व कायिक प्रवर्धन (11.1)' : '1. Asexual & Vegetative Propagation (11.1)'}</text>
  <text x="40" y="93" fill="${c.text}" font-size="11.5">${hi ? '• एकल जनक (समसूत्री विभाजन) → आनुवंशिक क्लोन संतति' : '• Single parent (Mitosis) → genetically identical clones'}</text>
  <text x="40" y="111" fill="${c.text}" font-size="11.5">${hi ? '• पादप: आलू, ब्रायोफिलम पत्ती, कर्तन, कलम, परतन, ऊतक संवर्धन' : '• Plants: Bryophyllum leaves, Cutting (45–60°), Grafting, Tissue Culture'}</text>
  <text x="40" y="129" fill="${c.muted}" font-size="11">${hi ? '• यीस्ट/हाइड्रा: मुकुलन | राइजोपस/ऐस्पर्जिलस: बीजाणु (लुई पाश्चर)' : '• Yeast/Hydra: Budding | Rhizopus/Aspergillus: Spores (Pasteur)'}</text>

  <rect x="476" y="48" width="380" height="98" rx="12" fill="${c.panelAlt}" stroke="${c.cyan}" stroke-width="1.8" />
  <text x="492" y="72" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? '2. अर्धसूत्री विभाजन व पुष्प में जनन (11.2)' : '2. Meiosis (46→23) & Flower Reproduction'}</text>
  <text x="492" y="93" fill="${c.text}" font-size="11.5">${hi ? '• अर्धसूत्री विभाजन: युग्मक गुणसूत्र आधे (23) व विभिन्नताएँ' : '• Meiosis halves chromosome count (46→23) + creates variation'}</text>
  <text x="492" y="111" fill="${c.text}" font-size="11.5">${hi ? '• पुष्प 4 चक्र: बाह्यदल, दल, पुंकेसर (नर), स्त्रीकेसर (मादा)' : '• 4 Floral Whorls: Sepal, Petal, Stamen (♂), Pistil (♀)'}</text>
  <text x="492" y="129" fill="${c.muted}" font-size="11">${hi ? '• निषेचन बाद: बीजांड → बीज | अंडाशय → फल (पी. माहेश्वरी)' : '• Post-Fertilisation: Ovule → Seed | Ovary → Fruit (P. Maheshwari)'}</text>

  <rect x="24" y="274" width="380" height="114" rx="12" fill="${c.panelAlt}" stroke="${c.amber}" stroke-width="1.8" />
  <text x="40" y="298" fill="${c.amber}" font-size="13" font-weight="800">${hi ? '3. परागण व जंतुओं में जनन विविधता (11.2–11.4)' : '3. Pollination Strategies & Animal Modes'}</text>
  <text x="40" y="319" fill="${c.text}" font-size="11.5">${hi ? '• स्व बनाम पर-परागण (क्र. 11.6); मदार/डेंडेलियन पवन बीज प्रकीर्णन' : '• Self (Tomato/Wheat) vs Cross (Papaya); Wind vs Insect pollination'}</text>
  <text x="40" y="337" fill="${c.text}" font-size="11.5">${hi ? '• वायु (मक्का/गेहूँ): हल्के लाखों पराग, पंखदार वर्तिकाग्र' : '• Wind (Maize/Wheat): 5–10 lakh pollen vs Insect: sticky/nectar'}</text>
  <text x="40" y="355" fill="${c.text}" font-size="11.5">${hi ? '• बाह्य निषेचन: मछली/मेंढक (हजारों अंडे) vs आंतरिक: पक्षी/स्तनधारी' : '• External (Fish/Frog: high eggs, low survival) vs Internal'}</text>
  <text x="40" y="373" fill="${c.muted}" font-size="11">${hi ? '• लार्वा (तितली/मेंढक) में कम पीतक — भोजन कर वयस्क रूपांतरण' : '• Larva (Butterfly/Frog) feeds externally before metamorphosis'}</text>

  <rect x="476" y="274" width="380" height="114" rx="12" fill="${c.panelAlt}" stroke="${c.rose}" stroke-width="1.8" />
  <text x="492" y="298" fill="${c.rose}" font-size="13" font-weight="800">${hi ? '4. मानव जनन, रजोधर्म व गर्भनिरोधन (11.5)' : '4. Human Gametes, Menstrual Cycle & STI Safety'}</text>
  <text x="492" y="319" fill="${c.text}" font-size="11.5">${hi ? '• वृषण (वृषणकोश ठंडा ताप) → शुक्रवाहिनी; अंडाशय → डिंबवाहिनी निषेचन' : '• Testes (Scrotum cooler) | Oviduct Fertilisation → Uterus'}</text>
  <text x="492" y="337" fill="${c.text}" font-size="11.5">${hi ? '• 28-दिन चक्र: दिन 1–5 रजोधर्म, दिन 14 अंडोत्सर्ग; लिंग = पिता X/Y' : '• 28-Day Cycle: Ovulation Day 14 | Father X/Y determines sex'}</text>
  <text x="492" y="355" fill="${c.text}" font-size="11.5">${hi ? '• IVF: डॉ. सुभाष मुखोपाध्याय (1978 दुर्गा) | CDRI साप्ताहिक गैर-हार्मोन गोली' : '• IVF Pioneer: S. Mukhopadhyay (1978) | CDRI Lucknow non-steroid pill'}</text>
  <text x="492" y="373" fill="${c.muted}" font-size="11">${hi ? '• कंडोम STI (HIV/सुजाक) रोके; कॉपर-T, शुक्र/डिंब नसबंदी' : '• Barrier (Condom blocks STIs), Copper-T, Surgical vas/tubectomy'}</text>
</svg>`;
  }

  if (key === 'c9-ch11-asexual-meiosis-diagram') {
    return `<svg viewBox="0 0 880 400" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.emerald}" font-size="15.5" font-weight="800">${hi ? 'अलैंगिक विधियाँ (कायिक, मुकुलन, बीजाणु) बनाम समसूत्री एवं अर्धसूत्री विभाजन (46 → 23)' : 'Asexual Propagation, Budding, Spores vs Mitosis & Meiosis (46 → 23)'}</text>

  <!-- Left: Asexual & Horticulture -->
  <rect x="20" y="44" width="420" height="338" rx="12" fill="${c.panel}" stroke="${c.emerald}" stroke-width="1.6" />
  <text x="230" y="68" text-anchor="middle" fill="${c.emerald}" font-size="13" font-weight="800">${hi ? 'अलैंगिक जनन: एकल जनक → समरूप संतति (क्लोन)' : 'Asexual Reproduction: Single Parent → Clones'}</text>

  <rect x="36" y="82" width="188" height="136" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="130" y="102" text-anchor="middle" fill="${c.amber}" font-size="11.5" font-weight="800">${hi ? '1. पादप कायिक प्रवर्धन' : '1. Plant Propagation'}</text>
  <text x="48" y="122" fill="${c.text}" font-size="10.8">${hi ? '• ब्रायोफिलम: पत्ती कोर पादपक' : '• Bryophyllum: Leaf notches'}</text>
  <text x="48" y="140" fill="${c.text}" font-size="10.8">${hi ? '• आलू/अदरक: भूमिगत तना' : '• Potato/Ginger: Underground stem'}</text>
  <text x="48" y="158" fill="${c.text}" font-size="10.8">${hi ? '• कर्तन: 45°–60° कोण पर रोपण' : '• Cutting (45°–60°), Layering'}</text>
  <text x="48" y="176" fill="${c.text}" font-size="10.8">${hi ? '• कलम: जड़ स्टॉक A + कलम B' : '• Grafting (Stock A + Scion B)'}</text>
  <text x="48" y="194" fill="${c.teal}" font-size="10.5" font-weight="700">${hi ? '• ऊतक संवर्धन: विषाणु-मुक्त शीर्षस्थ' : '• Tissue Culture: Virus-free tips'}</text>

  <rect x="236" y="82" width="188" height="136" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="330" y="102" text-anchor="middle" fill="${c.cyan}" font-size="11.5" font-weight="800">${hi ? '2. मुकुलन एवं बीजाणु' : '2. Budding & Spore Sacs'}</text>
  <ellipse cx="290" cy="144" rx="20" ry="26" fill="${c.cyan}" fill-opacity="0.25" stroke="${c.cyan}" stroke-width="2" />
  <circle cx="310" cy="128" r="10" fill="${c.teal}" fill-opacity="0.35" stroke="${c.teal}" stroke-width="2" />
  <text x="300" y="186" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'यीस्ट व हाइड्रा (मुकुलन)' : 'Yeast & Hydra Budding'}</text>
  <line x1="382" y1="172" x2="382" y2="128" stroke="${c.amber}" stroke-width="2.5" />
  <circle cx="382" cy="122" r="12" fill="${c.amber}" fill-opacity="0.3" stroke="${c.amber}" stroke-width="1.8" />
  <circle cx="378" cy="119" r="2" fill="${c.amber}" /><circle cx="386" cy="124" r="2" fill="${c.amber}" /><circle cx="382" cy="126" r="2" fill="${c.amber}" />
  <text x="382" y="186" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'राइजोपस बीजाणु' : 'Rhizopus Spores'}</text>
  <text x="330" y="206" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? '25–35°C नमी में वृद्धि (फ्रिज धीमा करे)' : '25–35°C moist growth (Fridge slows)'}</text>

  <rect x="36" y="232" width="388" height="134" rx="10" fill="${c.panelAlt}" stroke="${c.rose}" stroke-width="1.5" />
  <text x="230" y="254" text-anchor="middle" fill="${c.rose}" font-size="12" font-weight="800">${hi ? 'कृषि लाभ एवं सीमा (अभ्यास Q4, Q7, Q9)' : 'Clonal Advantage & Vulnerability (Ex Q4, Q7, Q9)'}</text>
  <text x="50" y="276" fill="${c.text}" font-size="11">${hi ? '✓ वांछित गुणों वाले समरूप पौधों (जैसे केला ऊतक संवर्धन) का तीव्र उत्पादन' : '✓ Rapid identical high-yield crops preserving desired fruit/flower traits'}</text>
  <text x="50" y="296" fill="${c.text}" font-size="11">${hi ? '✗ आनुवंशिक विविधता शून्य होने से किसी एक रोग से पूरी फसल नष्ट हो सकती है!' : '✗ Zero variation → one pathogen can wipe out the ENTIRE crop together!'}</text>
  <text x="50" y="316" fill="${c.muted}" font-size="10.5">${hi ? '• लुई पाश्चर: स्वतः जनन असत्य — जीवन सदैव पूर्व-विद्यमान जीवन से उत्पन्न' : '• Louis Pasteur: Life always arises from pre-existing life (Germ Theory)'}</text>
  <text x="50" y="336" fill="${c.muted}" font-size="10.5">${hi ? '• कवक लाभ: पेनिसिलिन, एमॉक्सिसिलिन एंटीबायोटिक व अपशिष्ट भारी-धातु सफाई' : '• Beneficial Fungi: Penicillin/Amoxicillin antibiotics + pollutant cleanup'}</text>

  <!-- Right: Mitosis vs Meiosis -->
  <rect x="456" y="44" width="404" height="338" rx="12" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.6" />
  <text x="658" y="68" text-anchor="middle" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? 'समसूत्री (अलैंगिक 2n→2n) बनाम अर्धसूत्री (युग्मक 2n→n)' : 'Mitosis (2n → 2n) vs Meiosis (2n → n Gametes)'}</text>

  <rect x="472" y="82" width="372" height="110" rx="10" fill="${c.panelAlt}" stroke="${c.teal}" />
  <text x="658" y="102" text-anchor="middle" fill="${c.teal}" font-size="11.5" font-weight="800">${hi ? 'समसूत्री विभाजन (Mitosis — वृद्धि व अलैंगिक जनन)' : 'Mitosis: Identical Diploid Cells (Growth & Clones)'}</text>
  <circle cx="536" cy="144" r="24" fill="${c.teal}" fill-opacity="0.22" stroke="${c.teal}" stroke-width="2" />
  <text x="536" y="148" text-anchor="middle" fill="${c.text}" font-size="12" font-weight="800">2n (46)</text>
  <line x1="566" y1="144" x2="624" y2="128" stroke="${c.teal}" stroke-width="2" />
  <line x1="566" y1="144" x2="624" y2="160" stroke="${c.teal}" stroke-width="2" />
  <circle cx="654" cy="124" r="18" fill="${c.teal}" fill-opacity="0.22" stroke="${c.teal}" stroke-width="2" />
  <text x="654" y="128" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="800">2n (46)</text>
  <circle cx="654" cy="164" r="18" fill="${c.teal}" fill-opacity="0.22" stroke="${c.teal}" stroke-width="2" />
  <text x="654" y="168" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="800">2n (46)</text>
  <text x="760" y="138" text-anchor="middle" fill="${c.muted}" font-size="10.5">${hi ? '2 समरूप संतति' : '2 Clone cells'}</text>
  <text x="760" y="156" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? 'समान गुणसूत्र' : 'Same chromosome #'}</text>

  <rect x="472" y="204" width="372" height="162" rx="10" fill="${c.panelAlt}" stroke="${c.amber}" stroke-width="1.6" />
  <text x="658" y="224" text-anchor="middle" fill="${c.amber}" font-size="11.5" font-weight="800">${hi ? 'अर्धसूत्री विभाजन (Meiosis — केवल युग्मक निर्माण 11.2.1)' : 'Meiosis (Gametogenesis): Halves Count + Variation'}</text>
  <circle cx="526" cy="272" r="24" fill="${c.amber}" fill-opacity="0.22" stroke="${c.amber}" stroke-width="2" />
  <text x="526" y="276" text-anchor="middle" fill="${c.text}" font-size="12" font-weight="800">2n=46</text>
  <path d="M 556 272 L 606 250 M 556 272 L 606 296" stroke="${c.amber}" stroke-width="2" />
  <circle cx="634" cy="250" r="15" fill="${c.cyan}" fill-opacity="0.28" stroke="${c.cyan}" stroke-width="1.8" />
  <text x="634" y="254" text-anchor="middle" fill="${c.text}" font-size="10" font-weight="800">n=23</text>
  <circle cx="634" cy="296" r="15" fill="${c.rose}" fill-opacity="0.28" stroke="${c.rose}" stroke-width="1.8" />
  <text x="634" y="300" text-anchor="middle" fill="${c.text}" font-size="10" font-weight="800">n=23</text>
  <text x="752" y="256" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">23 + 23 → 46 (Zygote)</text>
  <text x="752" y="274" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'निषेचन से पुनः 46 गुणसूत्र' : 'Restores diploid 46 count'}</text>
  <text x="658" y="330" text-anchor="middle" fill="${c.text}" font-size="10.8">${hi ? 'क्र. 11.4 मनका मॉडल: 3 जोड़ी गुणसूत्र → 2³ = 8 नए संयोजन!' : 'Act 11.4 Bead Rule: Just 3 pairs = 8 combinations (23 pairs = huge variation!)'}</text>
  <text x="658" y="350" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? 'विभिन्नता = परिवर्तित परिवेश में जाति उत्तरजीविता व विकास' : 'Variation aids adaptation & survival across changing environments'}</text>
</svg>`;
  }

  if (key === 'c9-ch11-flower-pollination-diagram') {
    return `<svg viewBox="0 0 880 400" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.amber}" font-size="15.5" font-weight="800">${hi ? 'संपूर्ण पुष्प की संरचना, परागण (स्व vs पर) तथा बीजांड→बीज व अंडाशय→फल (11.2.2–11.2.5)' : 'Complete Flower Anatomy, Pollination & Fertilisation Transformation (Sec 11.2)'}</text>

  <!-- Left: Flower Cutaway -->
  <rect x="20" y="42" width="440" height="340" rx="12" fill="${c.panel}" stroke="${c.amber}" stroke-width="1.6" />
  <text x="240" y="64" text-anchor="middle" fill="${c.amber}" font-size="12.5" font-weight="800">${hi ? 'पुष्प के 4 मुख्य भाग व पराग नलिका निषेचन (चित्र 11.10, 11.14)' : '4 Floral Whorls & Pollen Tube Fertilisation (Fig 11.10, 11.14)'}</text>

  <!-- Petals -->
  <path d="M 160 250 Q 95 145 168 112 Q 210 165 210 245 Z" fill="${c.rose}" fill-opacity="0.22" stroke="${c.rose}" stroke-width="1.8" />
  <path d="M 320 250 Q 385 145 312 112 Q 270 165 270 245 Z" fill="${c.rose}" fill-opacity="0.22" stroke="${c.rose}" stroke-width="1.8" />
  <!-- Sepals -->
  <path d="M 215 292 Q 160 288 148 312 Q 186 308 220 302 Z" fill="${c.emerald}" fill-opacity="0.35" stroke="${c.emerald}" stroke-width="1.5" />
  <path d="M 265 292 Q 320 288 332 312 Q 294 308 260 302 Z" fill="${c.emerald}" fill-opacity="0.35" stroke="${c.emerald}" stroke-width="1.5" />
  <!-- Stamens -->
  <line x1="210" y1="265" x2="184" y2="154" stroke="${c.amber}" stroke-width="2" />
  <ellipse cx="182" cy="148" rx="11" ry="6" fill="${c.amber}" />
  <line x1="270" y1="265" x2="296" y2="154" stroke="${c.amber}" stroke-width="2" />
  <ellipse cx="298" cy="148" rx="11" ry="6" fill="${c.amber}" />
  <!-- Pistil -->
  <ellipse cx="240" cy="122" rx="18" ry="7" fill="${c.teal}" fill-opacity="0.4" stroke="${c.teal}" stroke-width="2" />
  <rect x="233" y="129" width="14" height="92" fill="${c.teal}" fill-opacity="0.2" stroke="${c.teal}" stroke-width="1.8" />
  <ellipse cx="240" cy="258" rx="34" ry="38" fill="${c.teal}" fill-opacity="0.25" stroke="${c.teal}" stroke-width="2.2" />
  <!-- Ovules & Pollen tube -->
  <circle cx="240" cy="252" r="11" fill="${c.cyan}" fill-opacity="0.35" stroke="${c.cyan}" stroke-width="1.6" />
  <circle cx="240" cy="276" r="9" fill="${c.cyan}" fill-opacity="0.35" stroke="${c.cyan}" stroke-width="1.6" />
  <circle cx="240" cy="116" r="4.5" fill="${c.amber}" />
  <path d="M 240 121 L 240 242" stroke="${c.amber}" stroke-width="2" stroke-dasharray="4,2" />

  <!-- Labels -->
  <text x="122" y="102" text-anchor="middle" fill="${c.rose}" font-size="11" font-weight="700">${hi ? 'दल (पंखुड़ी)' : 'Petal (attract insects)'}</text>
  <text x="114" y="148" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="700">${hi ? 'परागकोश (नर)' : 'Anther (Pollen)'}</text>
  <text x="350" y="120" text-anchor="middle" fill="${c.teal}" font-size="11" font-weight="800">${hi ? 'वर्तिकाग्र (Stigma)' : 'Stigma (sticky)'}</text>
  <text x="355" y="185" text-anchor="middle" fill="${c.teal}" font-size="11" font-weight="700">${hi ? 'वर्तिका व पराग नलिका' : 'Style + Pollen tube'}</text>
  <text x="366" y="256" text-anchor="middle" fill="${c.cyan}" font-size="11" font-weight="800">${hi ? 'अंडाशय → फल' : 'Ovary → Fruit'}</text>
  <text x="366" y="274" text-anchor="middle" fill="${c.amber}" font-size="11" font-weight="800">${hi ? 'बीजांड → बीज' : 'Ovule → Seed'}</text>
  <text x="112" y="328" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="700">${hi ? 'बाह्यदल (कली रक्षा)' : 'Sepal (protects bud)'}</text>
  <text x="240" y="362" text-anchor="middle" fill="${c.text}" font-size="10.8">${hi ? 'पी. माहेश्वरी: "भारतीय भ्रूणविज्ञान के जनक" (पात्रे पादप निषेचन)' : 'P. Maheshwari: Father of Indian Embryology (in-vitro plant fertilisation)'}</text>

  <!-- Right: Pollination Modes + Table 11.3 -->
  <rect x="476" y="42" width="384" height="340" rx="12" fill="${c.panel}" stroke="${c.teal}" stroke-width="1.6" />
  <text x="668" y="64" text-anchor="middle" fill="${c.teal}" font-size="12.5" font-weight="800">${hi ? 'परागण युक्तियाँ, क्र. 11.6 थैली जाँच व तालिका 11.3' : 'Pollination Types, Agents & Pollen Budget (Table 11.3)'}</text>

  <rect x="492" y="78" width="352" height="92" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="506" y="98" fill="${c.cyan}" font-size="11.5" font-weight="800">${hi ? 'स्व-परागण vs पर-परागण (अभ्यास Q11 ✓)' : 'Self vs Cross-Pollination (Ex Q11)'}</text>
  <text x="506" y="117" fill="${c.text}" font-size="10.8">${hi ? '• स्व-परागण: टमाटर (परागकोश वर्तिकाग्र ढके), गेहूँ (परागण बाद खिले)' : '• Self: same flower/plant (Tomato enclosed stamens, Wheat opens late)'}</text>
  <text x="506" y="135" fill="${c.text}" font-size="10.8">${hi ? '• पर-परागण: पपीता (नर-मादा वृक्ष अलग), मक्का संकर (अधिक विविधता!)' : '• Cross: another plant (Papaya separate sex trees; maximizes variation)'}</text>
  <text x="506" y="153" fill="${c.rose}" font-size="10.5" font-weight="700">${hi ? '• क्र. 11.6: पुंकेसर निकाल थैली बंद कली में फल नहीं बनता!' : '• Act 11.6 Proof: Emasculated + bagged bud fails to set fruit!'}</text>

  <rect x="492" y="182" width="352" height="106" rx="10" fill="${c.panelAlt}" stroke="${c.amber}" />
  <text x="506" y="202" fill="${c.amber}" font-size="11.5" font-weight="800">${hi ? '4 परागण माध्यम व अनुकूली लक्षण (11.2.4)' : '4 Pollination Agents & Flower Adaptations'}</text>
  <text x="506" y="220" fill="${c.text}" font-size="10.8">${hi ? '1. वायु (गेहूँ/मक्का/चावल): हल्के असंख्य पराग + पंखदार वर्तिकाग्र' : '1. Wind (Wheat/Maize/Rice): light dust-like pollen, feathery stigma'}</text>
  <text x="506" y="238" fill="${c.text}" font-size="10.8">${hi ? '2. जल (वैलिसनेरिया/हाइड्रिला): जलधाराओं द्वारा पराग वहन' : '2. Water (Vallisneria/Hydrilla): carried via pond water currents'}</text>
  <text x="506" y="256" fill="${c.text}" font-size="10.8">${hi ? '3. कीट (गुड़हल/सूरजमुखी): चमकदार दल, मकरंद, सुगंध, चिपचिपे पराग' : '3. Insects: bright petals, scent, nectar, sticky/spiky pollen'}</text>
  <text x="506" y="274" fill="${c.text}" font-size="10.8">${hi ? '4. पक्षी (कोरल ट्री/गुड़हल): शकरखोरा (सनबर्ड), बबूना (व्हाइट-आई)' : '4. Birds (Coral tree): Sunbird, Indian White-eye; Night blooms = White!'}</text>

  <rect x="492" y="298" width="352" height="72" rx="10" fill="${c.panelAlt}" stroke="${c.emerald}" />
  <text x="668" y="318" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">${hi ? 'तालिका 11.3: पराग बनाम बीज अनुपात' : 'Table 11.3: Pollen-to-Seed Strategy Contrast'}</text>
  <text x="668" y="337" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'वायु (मक्का): 5–10 लाख पराग → केवल 50–200 बीज' : 'Wind Grass: 500,000–1,000,000 pollen → only 50–200 seeds'}</text>
  <text x="668" y="355" text-anchor="middle" fill="${c.amber}" font-size="10.5">${hi ? 'कीट (सूरजमुखी): 20–40 हजार पराग → 800–1000 बीज (उच्च दक्षता!)' : 'Insect Sunflower: 20,000–40,000 pollen → 800–1000 seeds (Targeted!)'}</text>
</svg>`;
  }

  if (key === 'c9-ch11-human-repro-cycle-diagram') {
    return `<svg viewBox="0 0 880 400" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.rose}" font-size="15.5" font-weight="800">${hi ? 'मानव जनन तंत्र, 28-दिवसीय रजोधर्म चक्र (चित्र 11.21) एवं लिंग निर्धारण (XX / XY)' : 'Human Reproductive Pathways, 28-Day Menstrual Cycle & Sex Determination'}</text>

  <!-- Left: Male & Female Gamete Pathways + Size Contrast -->
  <rect x="20" y="42" width="410" height="340" rx="12" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.6" />
  <text x="225" y="64" text-anchor="middle" fill="${c.cyan}" font-size="12.5" font-weight="800">${hi ? 'नर एवं मादा जनन मार्ग (11.5.2–11.5.5)' : 'Male & Female Organs + Zygote Implantation'}</text>

  <rect x="36" y="78" width="378" height="90" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="50" y="98" fill="${c.amber}" font-size="11.5" font-weight="800">${hi ? 'नर तंत्र (चित्र 11.18):' : 'Male System (Fig 11.18):'}</text>
  <text x="50" y="117" fill="${c.text}" font-size="10.8">${hi ? '• वृषण (वृषणकोश में कम ताप) → शुक्राणु (23 गुणसूत्र) + हार्मोन' : '• Testes (Scrotum cooler temp) → Sperm (23 chr) + hormone'}</text>
  <text x="50" y="135" fill="${c.text}" font-size="10.8">${hi ? '• शुक्रवाहिनी → मूत्रमार्ग (मूत्र व शुक्राणु का उभय मार्ग)' : '• Vas deferens → Urethra (shared passage for urine & sperm)'}</text>
  <text x="50" y="153" fill="${c.teal}" font-size="10.5" font-weight="700">${hi ? '• शुक्राशय व प्रोस्टेट ग्रंथियाँ: तरल व पोषण स्राव (ALP Shift 5 ✓)' : '• Seminal Vesicles + Prostate: nourish & energize sperm!'}</text>

  <rect x="36" y="178" width="378" height="106" rx="10" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="50" y="198" fill="${c.rose}" font-size="11.5" font-weight="800">${hi ? 'मादा तंत्र व निषेचन (चित्र 11.19–11.20):' : 'Female System & Fertilisation (Fig 11.19–11.20):'}</text>
  <text x="50" y="217" fill="${c.text}" font-size="10.8">${hi ? '• 1 जोड़ी अंडाशय (प्रति माह 1 अंडाणु 23 chr + हार्मोन)' : '• Pair of Ovaries (1 mature Ovum / month + hormones)'}</text>
  <text x="50" y="235" fill="${c.emerald}" font-size="11" font-weight="800">${hi ? '• निषेचन स्थल: डिंबवाहिनी (अंडवाहिनी / Fallopian tube) → युग्मनज (46)' : '• Fertilisation Site: OVIDUCT (Fallopian tube) → Zygote (46)'}</text>
  <text x="50" y="253" fill="${c.text}" font-size="10.8">${hi ? '• अंतर्रोपण (Implantation): गर्भाशय के रक्त-समृद्ध आस्तर में (गर्भावस्था)' : '• Implantation inside thick Uterus lining marks clinical pregnancy'}</text>
  <text x="50" y="271" fill="${c.muted}" font-size="10.2">${hi ? '• शुक्राणु: सूक्ष्म, लाखों, पूँछयुक्त गतिशील | अंडाणु: बड़ा, अचल, संचित भोजन' : '• Sperm (millions, motile tail, no yolk) vs Ovum (large, immobile, food)'}</text>

  <rect x="36" y="294" width="378" height="74" rx="10" fill="${c.panelAlt}" stroke="${c.violet}" />
  <text x="225" y="314" text-anchor="middle" fill="${c.violet}" font-size="11.5" font-weight="800">${hi ? 'शिशु का लिंग निर्धारण (केवल पिता के X या Y पर निर्भर!)' : 'Biological Sex Determination (100% Decided by Father!)'}</text>
  <text x="225" y="335" text-anchor="middle" fill="${c.text}" font-size="11.5" font-weight="700">${hi ? 'माँ (XX) सदैव X दे + पिता (XY) → X (XX बालिका) या Y (XY बालक)' : 'Mother (XX) always gives X  +  Father Sperm: 50% X → XX (Girl) | 50% Y → XY (Boy)'}</text>
  <text x="225" y="354" text-anchor="middle" fill="${c.amber}" font-size="10">${hi ? 'गर्भ में लिंग परीक्षण कानूनी अपराध है (संतुलित लिंगानुपात अनिवार्य)' : 'Prenatal sex determination is strictly banned by law in India'}</text>

  <!-- Right: 28-Day Menstrual Cycle + Pregnancy + Contraception -->
  <rect x="446" y="42" width="414" height="340" rx="12" fill="${c.panel}" stroke="${c.rose}" stroke-width="1.6" />
  <text x="653" y="64" text-anchor="middle" fill="${c.rose}" font-size="12.5" font-weight="800">${hi ? '28-दिवसीय रजोधर्म चक्र (चित्र 11.21) एवं स्वास्थ्य तथ्य' : '28-Day Menstrual Cycle (Fig 11.21) & Contraception'}</text>

  <!-- 4 Cycle Cards -->
  <rect x="462" y="80" width="184" height="78" rx="8" fill="${c.panelAlt}" stroke="${c.rose}" />
  <text x="554" y="100" text-anchor="middle" fill="${c.rose}" font-size="11.5" font-weight="800">${hi ? 'दिन 1–5: रजोधर्म (3–7 दिन)' : 'Days 1–5: Menstruation'}</text>
  <text x="554" y="118" text-anchor="middle" fill="${c.text}" font-size="10.2">${hi ? 'निषेचन न होने पर गर्भाशय आस्तर' : 'Thick uterus lining + blood'}</text>
  <text x="554" y="134" text-anchor="middle" fill="${c.text}" font-size="10.2">${hi ? 'व रक्त का निस्तारण (उम्र 10–50)' : 'shed (ages ~10–14 to ~50)'}</text>

  <rect x="660" y="80" width="184" height="78" rx="8" fill="${c.panelAlt}" stroke="${c.cyan}" />
  <text x="752" y="100" text-anchor="middle" fill="${c.cyan}" font-size="11.5" font-weight="800">${hi ? 'दिन 6–14: पुनर्निर्माण' : 'Days 6–14: Lining Rebuilds'}</text>
  <text x="752" y="118" text-anchor="middle" fill="${c.text}" font-size="10.2">${hi ? 'अंडाशय में अंडाणु परिपक्व हो व' : 'Ovum matures in ovary &'}</text>
  <text x="752" y="134" text-anchor="middle" fill="${c.text}" font-size="10.2">${hi ? 'गर्भाशय की दीवार तैयार होती है' : 'uterine wall regrows steadily'}</text>

  <rect x="462" y="170" width="184" height="78" rx="8" fill="${c.panelAlt}" stroke="${c.amber}" stroke-width="1.8" />
  <text x="554" y="190" text-anchor="middle" fill="${c.amber}" font-size="11.5" font-weight="800">${hi ? 'लगभग दिन 14: अंडोत्सर्ग!' : 'Day ~14: Ovulation!'}</text>
  <text x="554" y="208" text-anchor="middle" fill="${c.text}" font-size="10.2">${hi ? 'परिपक्व अंडाणु डिंबवाहिनी में' : 'Egg released into oviduct'}</text>
  <text x="554" y="224" text-anchor="middle" fill="${c.text}" font-size="10.2">${hi ? '(लगभग 1 दिन जीवनक्षम)' : '(viable ~1 day; Ex Q13 variable!)'}</text>

  <rect x="660" y="170" width="184" height="78" rx="8" fill="${c.panelAlt}" stroke="${c.emerald}" />
  <text x="752" y="190" text-anchor="middle" fill="${c.emerald}" font-size="11.5" font-weight="800">${hi ? 'दिन 15–28: रक्त-समृद्ध तैयार' : 'Days 15–28: Thick Wall'}</text>
  <text x="752" y="208" text-anchor="middle" fill="${c.text}" font-size="10.2">${hi ? 'निषेचन हो तो रोपण (9 माह गर्भ' : 'Awaits zygote; if unfertilised'}</text>
  <text x="752" y="224" text-anchor="middle" fill="${c.text}" font-size="10.2">${hi ? '3 त्रिमास, 9वें सप्ताह से गर्भ)' : 'breaks down around Day 28'}</text>

  <!-- Contraception & Indian Innovation box -->
  <rect x="462" y="260" width="382" height="108" rx="10" fill="${c.panelAlt}" stroke="${c.teal}" />
  <text x="653" y="280" text-anchor="middle" fill="${c.teal}" font-size="11.5" font-weight="800">${hi ? 'गर्भनिरोधन, STI सुरक्षा एवं भारतीय योगदान (पृ. 220–223)' : 'Contraception, STI Protection & Indian Breakthroughs'}</text>
  <text x="476" y="299" fill="${c.text}" font-size="10.5">${hi ? '• अवरोध (कंडोम): केवल यही अनियोजित गर्भ + STI (HIV/सिफिलिस/सुजाक) दोनों रोके!' : '• Condom Barrier: ONLY method reducing both pregnancy AND STIs (HIV/Gonorrhoea)'}</text>
  <text x="476" y="317" fill="${c.text}" font-size="10.5">${hi ? '• गोलियाँ (CDRI लखनऊ Saheli साप्ताहिक गैर-हार्मोनल!), कॉपर-T, नसबंदी' : '• Oral Pills (CDRI Lucknow world-1st non-steroidal pill!), Copper-T, Surgery'}</text>
  <text x="476" y="335" fill="${c.text}" font-size="10.5">${hi ? '• IVF: सुभाष मुखोपाध्याय (1978 दुर्गा) | ASHA (10 लाख+ समुदाय नायिकाएँ)' : '• IVF (Mukhopadhyay 1978 Durga) | ASHA (10L+ health workers) | 97°F–100.3°F'}</text>
  <text x="476" y="353" fill="${c.amber}" font-size="10.2">${hi ? '• स्वच्छता: 4–6 घंटे में पैड बदलें, जननांग केवल जल से धोएँ (साबुन संतुलन बिगाड़े)' : '• Hygiene: Change pads 4–6 hr; wash with plain water; never flush used pads'}</text>
</svg>`;
  }

  return '';
}
