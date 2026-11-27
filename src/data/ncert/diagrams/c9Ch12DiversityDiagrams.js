/**
 * Dual-Theme Pure Vector Diagrams for Class 9 Biology Ch 12: Diversity in the Living World & Classification
 * Covers: (1) Chapter Blueprint Mindmap, (2) 2->3->4->5 Kingdom + Woese 3-Domain Tree,
 *         (3) 5 Divisions of Plantae Progression (Thallophyta -> Angiosperms + Lichen),
 *         (4) Animalia Non-Chordata/Vertebrata Heart & Complexity + 7-Rank Taxonomic Hierarchy
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

export function renderC9Ch12DiversityDiagramSvg(key, { lang = 'hi', theme = 'dark' } = {}) {
  const c = palette(theme);
  const hi = lang === 'hi';

  if (key === 'c9-ch12-blueprint-mindmap') {
    return `<svg viewBox="0 0 880 420" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <defs>
    <marker id="arr12bp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="${c.emerald}" />
    </marker>
  </defs>
  <text x="440" y="28" text-anchor="middle" fill="${c.emerald}" font-size="16" font-weight="800">${hi ? 'अध्याय 12: जीवजगत का स्वरूप — विविधता व वर्गीकरण — 4 परीक्षा स्तंभ' : 'Ch 12 Blueprint: Diversity in the Living World & Classification'}</text>
  <rect x="295" y="168" width="290" height="72" rx="16" fill="${c.panel}" stroke="${c.emerald}" stroke-width="2.5" />
  <text x="440" y="198" text-anchor="middle" fill="${c.text}" font-size="14" font-weight="800">${hi ? '5 जगत, वर्गीकरण व संरक्षण' : '5 Kingdoms, Phyla & Binomial Rules'}</text>
  <text x="440" y="220" text-anchor="middle" fill="${c.muted}" font-size="11.5">${hi ? 'NCERT Ch 12 (पृ. 228–251) • कुल 45+ PYQ क्षेत्र' : 'NCERT Ch 12 (p.228–251) • Restored 2026-27 CBT Core'}</text>

  <line x1="330" y1="168" x2="220" y2="132" stroke="${c.emerald}" stroke-width="2" marker-end="url(#arr12bp)" />
  <line x1="550" y1="168" x2="660" y2="132" stroke="${c.cyan}" stroke-width="2" marker-end="url(#arr12bp)" />
  <line x1="330" y1="240" x2="220" y2="278" stroke="${c.amber}" stroke-width="2" marker-end="url(#arr12bp)" />
  <line x1="550" y1="240" x2="660" y2="278" stroke="${c.rose}" stroke-width="2" marker-end="url(#arr12bp)" />

  <rect x="24" y="48" width="380" height="98" rx="12" fill="${c.panelAlt}" stroke="${c.emerald}" stroke-width="1.8" />
  <text x="40" y="72" fill="${c.emerald}" font-size="13" font-weight="800">${hi ? '1. भारत की जैव विविधता व ऐतिहासिक वर्गीकरण (12.1–12.5)' : '1. Hotspots, Endemics & Kingdom History (12.1–12.5)'}</text>
  <text x="40" y="93" fill="${c.text}" font-size="11.5">${hi ? '• 4 हॉटस्पॉट: पश्चिमी घाट, हिमालय, भारत-बर्मा, सुंडालैंड' : '• 4 Hotspots: W. Ghats, Himalaya, Indo-Burma, Sundaland'}</text>
  <text x="40" y="111" fill="${c.text}" font-size="11.5">${hi ? '• स्थानिक: नीलगिरि तहर, सिंह-पुच्छ मकाक, नीलकुरिंजी (12 वर्ष)' : '• Endemic: Nilgiri Tahr, Lion-tailed Macaque, Nepenthes'}</text>
  <text x="40" y="129" fill="${c.muted}" font-size="11">${hi ? '• अरस्तू → लिनियस (1758) → हेकेल → कोपलैंड → व्हिटेकर (1969)' : '• Aristotle → Linnaeus 1758 → Haeckel → Copeland → Whittaker 1969'}</text>

  <rect x="476" y="48" width="380" height="98" rx="12" fill="${c.panelAlt}" stroke="${c.cyan}" stroke-width="1.8" />
  <text x="492" y="72" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? '2. मोनेरा, प्रोटिस्टा, कवक व पादप 5 वर्ग (12.6.1–12.6.4)' : '2. Monera, Protista, Fungi & 5 Plant Divisions'}</text>
  <text x="492" y="93" fill="${c.text}" font-size="11.5">${hi ? '• मोनेरा: प्राक्केंद्रकी | प्रोटिस्टा: एककोशिक सुकेंद्रकी (अमीबा/यूग्लीना)' : '• Monera (Prokaryote) | Protista (1-cell Eukaryote) | Fungi (Chitin)'}</text>
  <text x="492" y="111" fill="${c.text}" font-size="11.5">${hi ? '• कवक: काइटिन भित्ति, मृतजीवी | लाइकेन: शैवाल+कवक (वायु सूचक)' : '• Thallo (Algae) → Bryo (Amphibians) → Pterido (1st Xylem/Phloem)'}</text>
  <text x="492" y="129" fill="${c.muted}" font-size="11">${hi ? '• अनावृतबीजी (शंकु, नग्न बीज) → आवृतबीजी (फूल व फल में बीज)' : '• Gymnosperms (Naked seeds, cones) → Angiosperms (Fruits, Monocot/Dicot)'}</text>

  <rect x="24" y="274" width="380" height="114" rx="12" fill="${c.panelAlt}" stroke="${c.amber}" stroke-width="1.8" />
  <text x="40" y="298" fill="${c.amber}" font-size="13" font-weight="800">${hi ? '3. जंतु जगत: अकशेरुकी व कशेरुकी संघ (12.6.5)' : '3. Kingdom Animalia: 8 Non-Chordata + 5 Vertebrata'}</text>
  <text x="40" y="319" fill="${c.text}" font-size="11.5">${hi ? '• पॉरीफेरा (छिद्रिल) → नाइडेरिया (ऊतक) → प्लेटीहेल्मिंथीज (चपटे)' : '• Porifera (pores) → Cnidaria (stinging) → Platy → Nematoda'}</text>
  <text x="40" y="337" fill="${c.text}" font-size="11.5">${hi ? '• एनेलिडा (खंडयुक्त) → आर्थ्रोपोडा (काइटिन, सबसे बड़ा संघ)' : '• Annelida (coelom) → Arthropoda (largest phylum!) → Mollusca'}</text>
  <text x="40" y="355" fill="${c.text}" font-size="11.5">${hi ? '• इकाइनोडर्मेटा (CaCO₃ कंटक) → प्रोटोकॉर्डेटा (एम्फिऑक्सस)' : '• Echinodermata (CaCO₃ spines) → Protochordata (Amphioxus)'}</text>
  <text x="40" y="373" fill="${c.muted}" font-size="11">${hi ? '• मत्स्य (2 कक्ष) → उभयचर/सरीसृप (3 कक्ष) → पक्षी/स्तनधारी (4 कक्ष)' : '• Heart Chambers: Pisces 2 → Amphibia/Reptilia 3 → Aves/Mammalia 4'}</text>

  <rect x="476" y="274" width="380" height="114" rx="12" fill="${c.panelAlt}" stroke="${c.rose}" stroke-width="1.8" />
  <text x="492" y="298" fill="${c.rose}" font-size="13" font-weight="800">${hi ? '4. द्विपद नामकरण, 3-डोमेन व जीवाश्म/फुमडी (12.7–12.10)' : '4. Hierarchy, Binomial Rules, 3 Domains & Fossils'}</text>
  <text x="492" y="319" fill="${c.text}" font-size="11.5">${hi ? '• 7 स्तर: जगत → संघ → वर्ग → गण → कुल → वंश → जाति' : '• 7 Ranks: Kingdom → Phylum/Division → Class → Order → Family → Genus → Species'}</text>
  <text x="492" y="337" fill="${c.text}" font-size="11.5">${hi ? '• द्विपद (लिनियस): वंश बड़ा अक्षर, जाति छोटा (Panthera tigris)' : '• Binomial: Capital Genus + lowercase species (Pisum sativum)'}</text>
  <text x="492" y="355" fill="${c.text}" font-size="11.5">${hi ? '• कार्ल वूज (1977): 3 डोमेन — बैक्टीरिया, आर्किया, यूकैरिया' : '• Carl Woese (1977): 3 Domains via DNA (Bacteria, Archaea, Eukarya)'}</text>
  <text x="492" y="373" fill="${c.muted}" font-size="11">${hi ? '• जीवाश्म: बीरबल साहनी (लखनऊ) | बैंगनी मेंढक | लोकटक फुमडी (संगाई)' : '• Fossils: Birbal Sahni | Purple Frog (2003) | Keibul Lamjao Phumdis (Sangai)'}</text>
</svg>`;
  }

  if (key === 'c9-ch12-five-kingdom-tree-diagram') {
    return `<svg viewBox="0 0 880 390" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.cyan}" font-size="15.5" font-weight="800">${hi ? 'व्हिटेकर का 5-जगत वर्गीकरण (1969) एवं कार्ल वूज 3-डोमेन (1977) निर्णय वृक्ष' : 'Whittaker 5-Kingdom Flowchart (1969) & Woese 3-Domain DNA Split (1977)'}</text>

  <!-- Root -->
  <rect x="330" y="42" width="220" height="36" rx="8" fill="${c.panel}" stroke="${c.cyan}" stroke-width="2" />
  <text x="440" y="65" text-anchor="middle" fill="${c.text}" font-size="13" font-weight="800">${hi ? 'समस्त सजीव (अकोशिकीय वायरस बाहर!)' : 'All Living Organisms (Viruses Acellular!)'}</text>

  <line x1="380" y1="78" x2="140" y2="108" stroke="${c.amber}" stroke-width="2" />
  <line x1="500" y1="78" x2="600" y2="108" stroke="${c.emerald}" stroke-width="2" />

  <!-- Prokaryote branch -->
  <rect x="28" y="108" width="236" height="252" rx="12" fill="${c.panelAlt}" stroke="${c.amber}" stroke-width="1.8" />
  <text x="146" y="132" text-anchor="middle" fill="${c.amber}" font-size="13.5" font-weight="800">${hi ? '1. मोनेरा (प्रोकैरियोट्स)' : '1. MONERA (Prokaryotes)'}</text>
  <text x="146" y="152" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? 'झिल्ली-बद्ध केंद्रक व अंग अनुपस्थित' : 'No nuclear membrane / organelles'}</text>
  <rect x="44" y="166" width="204" height="58" rx="8" fill="${c.panel}" stroke="${c.border}" />
  <text x="146" y="185" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="700">${hi ? 'पेप्टिडोग्लाइकैन भित्ति (बैक्टीरिया)' : 'Bacteria + Cyanobacteria'}</text>
  <text x="146" y="203" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'राम बख्श सिंह (1957 सीतापुर बायोगैस)' : 'Gram Baksh 1957 Biogas + Stromatolites'}</text>
  <text x="146" y="218" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'सायनोजीवाणु: O₂ प्रकाश संश्लेषी!' : 'Cyanobacteria: O₂ photosynthesis!'}</text>
  <rect x="44" y="236" width="204" height="108" rx="8" fill="${c.panel}" stroke="${c.rose}" />
  <text x="146" y="256" text-anchor="middle" fill="${c.rose}" font-size="11.5" font-weight="800">${hi ? 'कार्ल वूज (1977): DNA आधारित 3 डोमेन' : 'Woese (1977): 3-Domain DNA Split'}</text>
  <text x="146" y="276" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? '1. बैक्टीरिया (Bacteria — सामान्य)' : '1. Bacteria (true bacteria)'}</text>
  <text x="146" y="294" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? '2. आर्किया (Archaea — अति चरम आवास!)' : '2. Archaea (extremophiles, diff cell wall)'}</text>
  <text x="146" y="312" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? '3. यूकैरिया (Eukarya — चारों सुकेंद्रकी)' : '3. Eukarya (Protista+Fungi+Plantae+Anim)'}</text>
  <text x="146" y="332" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'क्रम: 2(लिनियस)→3(हेकेल)→4(कोपलैंड)→5(व्हिटेकर)' : '2(Linnaeus)→3(Haeckel)→4(Copeland)→5(Whittaker)'}</text>

  <!-- Eukaryote branch -->
  <rect x="284" y="108" width="572" height="252" rx="12" fill="${c.panelAlt}" stroke="${c.emerald}" stroke-width="1.8" />
  <text x="570" y="132" text-anchor="middle" fill="${c.emerald}" font-size="13.5" font-weight="800">${hi ? 'सुकेंद्रकी (यूकैरियोट्स — वास्तविक केंद्रक व कोशिकांग उपस्थित)' : 'EUKARYOTES (Membrane-Bound Nucleus & Organelles)'}</text>

  <!-- Protista -->
  <rect x="302" y="150" width="170" height="194" rx="10" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.6" />
  <text x="387" y="172" text-anchor="middle" fill="${c.cyan}" font-size="13" font-weight="800">${hi ? '2. प्रोटिस्टा' : '2. PROTISTA'}</text>
  <text x="387" y="191" text-anchor="middle" fill="${c.text}" font-size="10.5" font-weight="700">${hi ? 'एककोशिकीय सुकेंद्रकी' : 'Unicellular Eukaryote'}</text>
  <text x="387" y="212" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• अमीबा: कूटपाद (पादाभ)' : '• Amoeba: Pseudopodia'}</text>
  <text x="387" y="230" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• पैरामीशियम: पक्ष्माभ (Cilia)' : '• Paramecium: Cilia'}</text>
  <text x="387" y="248" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• यूग्लीना: कशाभ + दोनों पोषण!' : '• Euglena: Flagellum + mixotroph'}</text>
  <text x="387" y="266" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• क्लैमाइडोमोनास: हरी भित्ति' : '• Chlamydomonas: cell wall'}</text>
  <text x="387" y="294" text-anchor="middle" fill="${c.amber}" font-size="10" font-weight="700">${hi ? 'क्र. 12.5: सूखी घास फांट!' : 'Act 12.5: Hay Infusion!'}</text>
  <text x="387" y="314" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? '2-जगत में अमीबा रखने पर भ्रम!' : 'Solved 2-kingdom Amoeba puzzle!'}</text>

  <!-- Fungi -->
  <rect x="486" y="150" width="175" height="194" rx="10" fill="${c.panel}" stroke="${c.violet}" stroke-width="1.6" />
  <text x="573" y="172" text-anchor="middle" fill="${c.violet}" font-size="13" font-weight="800">${hi ? '3. कवक (फंजाई)' : '3. FUNGI'}</text>
  <text x="573" y="191" text-anchor="middle" fill="${c.text}" font-size="10.5" font-weight="700">${hi ? 'अवशोषी मृतजीवी परपोषी' : 'Saprotrophic Absorptive'}</text>
  <text x="573" y="212" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? 'भित्ति = काइटिन (Chitin)!' : 'Cell Wall = CHITIN!'}</text>
  <text x="573" y="232" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'क्लोरोफिल रहित, बहुकोशिकीय' : 'No chlorophyll; mycelial hyphae'}</text>
  <text x="573" y="250" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '(अपवाद: यीस्ट एककोशिकीय!)' : '(Exception: Yeast 1-celled!)'}</text>
  <text x="573" y="272" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'राइजोपस, पेनिसिलियम, एगरिकस' : 'Rhizopus, Penicillium, Agaricus'}</text>
  <text x="573" y="294" text-anchor="middle" fill="${c.teal}" font-size="10" font-weight="700">${hi ? 'मशरूम फसल: 30–45 दिन' : 'Mushroom cycle: 30–45 days'}</text>
  <text x="573" y="314" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'कवक+शैवाल = लाइकेन (SO₂ सूचक)' : 'Fungi+Algae = Lichen (bioindicator)'}</text>

  <!-- Plantae & Animalia -->
  <rect x="675" y="150" width="166" height="92" rx="10" fill="${c.panel}" stroke="${c.emerald}" stroke-width="1.6" />
  <text x="758" y="172" text-anchor="middle" fill="${c.emerald}" font-size="13" font-weight="800">${hi ? '4. पादप (प्लांटी)' : '4. PLANTAE'}</text>
  <text x="758" y="191" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'सेल्युलोज़ भित्ति + क्लोरोफिल' : 'Cellulose wall + Chlorophyll'}</text>
  <text x="758" y="209" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'बहुकोशिकीय स्वपोषी (5 वर्ग)' : 'Multicellular Autotroph (5 divs)'}</text>
  <text x="758" y="227" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '(अपवाद कीटभक्षी: घटपर्णी)' : '(Nepenthes catches insects for N)'}</text>

  <rect x="675" y="252" width="166" height="92" rx="10" fill="${c.panel}" stroke="${c.rose}" stroke-width="1.6" />
  <text x="758" y="274" text-anchor="middle" fill="${c.rose}" font-size="13" font-weight="800">${hi ? '5. जंतु (ऐनिमेलिया)' : '5. ANIMALIA'}</text>
  <text x="758" y="293" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? 'कोशिका भित्ति अनुपस्थित!' : 'NO Cell Wall + Motile!'}</text>
  <text x="758" y="311" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'बहुकोशिकीय अंतर्ग्रहण परपोषी' : 'Multicellular Ingestive Heterotroph'}</text>
  <text x="758" y="329" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? 'पॉरीफेरा से स्तनधारी संघ तक' : 'Porifera → Chordata (Vertebrates)'}</text>
</svg>`;
  }

  if (key === 'c9-ch12-plantae-five-divisions-diagram') {
    return `<svg viewBox="0 0 880 370" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.emerald}" font-size="15.5" font-weight="800">${hi ? 'जगत पादप के 5 प्रभाग (अविभेदित थैलस से पुष्पीय आवृतबीजी तक विकास क्रम)' : 'Evolutionary Ladder: 5 Divisions of Kingdom Plantae (12.6.4)'}</text>

  <!-- Step 1 -->
  <rect x="18" y="50" width="158" height="238" rx="10" fill="${c.panel}" stroke="${c.cyan}" stroke-width="1.8" />
  <text x="97" y="72" text-anchor="middle" fill="${c.cyan}" font-size="12.5" font-weight="800">${hi ? '1. थैलोफाइटा' : '1. Thallophyta'}</text>
  <text x="97" y="92" text-anchor="middle" fill="${c.text}" font-size="10.5" font-weight="700">${hi ? 'अविभेदित थैलस' : 'No Root/Stem/Leaf'}</text>
  <text x="97" y="116" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• मुख्यतः जलीय शैवाल' : '• Mostly aquatic algae'}</text>
  <text x="97" y="136" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• संवहन ऊतक नहीं' : '• No xylem/phloem'}</text>
  <text x="97" y="156" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• कोई बीज/पुष्प नहीं' : '• No seeds or flowers'}</text>
  <rect x="30" y="182" width="134" height="88" rx="8" fill="${c.panelAlt}" />
  <text x="97" y="202" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? 'उदा: स्पाइरोगाइरा' : 'Ex: Spirogyra'}</text>
  <text x="97" y="220" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'यूलोथ्रिक्स, कारा' : 'Ulothrix, Chara'}</text>
  <text x="97" y="244" text-anchor="middle" fill="${c.amber}" font-size="9.5">${hi ? 'लाइकेन = शैवाल + कवक' : 'Lichen = Algae + Fungi'}</text>
  <text x="97" y="259" text-anchor="middle" fill="${c.muted}" font-size="9">${hi ? '(प्रदूषण जैव-सूचक)' : '(Clean-air bioindicator)'}</text>

  <!-- Step 2 -->
  <rect x="188" y="50" width="158" height="238" rx="10" fill="${c.panel}" stroke="${c.teal}" stroke-width="1.8" />
  <text x="267" y="72" text-anchor="middle" fill="${c.teal}" font-size="12.5" font-weight="800">${hi ? '2. ब्रायोफाइटा' : '2. Bryophyta'}</text>
  <text x="267" y="92" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? 'पादप जगत के उभयचर' : 'Amphibians of Plants'}</text>
  <text x="267" y="116" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• तना/पत्ती सदृश काय' : '• Stem/leaf-like + Rhizoids'}</text>
  <text x="267" y="136" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• संवहन ऊतक अनुपस्थित!' : '• NO xylem/phloem!'}</text>
  <text x="267" y="156" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• निषेचन हेतु जल अनिवार्य' : '• Water needed for gametes'}</text>
  <rect x="200" y="182" width="134" height="88" rx="8" fill="${c.panelAlt}" />
  <text x="267" y="202" text-anchor="middle" fill="${c.teal}" font-size="10.5" font-weight="700">${hi ? 'उदा: मॉस (फ्यूनेरिया)' : 'Ex: Moss (Funaria)'}</text>
  <text x="267" y="220" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'मार्केंशिया, रिक्सिया' : 'Marchantia, Riccia'}</text>
  <text x="267" y="246" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'नम दीवारों/चट्टानों पर गलीचे' : 'Green mats on damp rocks'}</text>

  <!-- Step 3 -->
  <rect x="358" y="50" width="160" height="238" rx="10" fill="${c.panel}" stroke="${c.emerald}" stroke-width="1.8" />
  <text x="438" y="72" text-anchor="middle" fill="${c.emerald}" font-size="12.5" font-weight="800">${hi ? '3. टेरिडोफाइटा' : '3. Pteridophyta'}</text>
  <text x="438" y="92" text-anchor="middle" fill="${c.text}" font-size="10.5" font-weight="700">${hi ? 'प्रथम संवहनी भू-पादप' : '1st Vascular Land Plants'}</text>
  <text x="438" y="116" text-anchor="middle" fill="${c.emerald}" font-size="10" font-weight="700">${hi ? '• जाइलम व फ्लोएम उपस्थित!' : '• True Root, Stem, Leaf!'}</text>
  <text x="438" y="136" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• बीजाणु से जनन (बीज नहीं!)' : '• Spores (Sorii) — NO Seeds'}</text>
  <text x="438" y="156" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• निषेचन में जल निर्भरता' : '• Water needed to fertilise'}</text>
  <rect x="370" y="182" width="136" height="88" rx="8" fill="${c.panelAlt}" />
  <text x="438" y="202" text-anchor="middle" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? 'उदा: फर्न (टेरिस)' : 'Ex: Fern (Pteridium)'}</text>
  <text x="438" y="220" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'मार्सीलिया, हॉर्सटेल' : 'Marsilea, Equisetum'}</text>
  <text x="438" y="246" text-anchor="middle" fill="${c.amber}" font-size="9.5">${hi ? 'क्र. 12.6–12.7 फर्न पत्ती!' : 'Act 12.6–12.7 Fern Sori!'}</text>

  <!-- Step 4 -->
  <rect x="530" y="50" width="160" height="238" rx="10" fill="${c.panel}" stroke="${c.amber}" stroke-width="1.8" />
  <text x="610" y="72" text-anchor="middle" fill="${c.amber}" font-size="12.5" font-weight="800">${hi ? '4. अनावृतबीजी' : '4. Gymnosperms'}</text>
  <text x="610" y="92" text-anchor="middle" fill="${c.text}" font-size="10.5" font-weight="700">${hi ? 'नग्न बीज (बिना फल!)' : 'Naked Seeds (In Cones)'}</text>
  <text x="610" y="116" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• बहुवर्षीय काष्ठीय वृक्ष' : '• Perennial woody evergreens'}</text>
  <text x="610" y="136" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• नर/मादा शंकु (Cones)' : '• Needles resist drought!'}</text>
  <text x="610" y="156" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• पुष्प/अंडाशय अनुपस्थित' : '• No flower/ovary fruit wall'}</text>
  <rect x="542" y="182" width="136" height="88" rx="8" fill="${c.panelAlt}" />
  <text x="610" y="202" text-anchor="middle" fill="${c.amber}" font-size="10.5" font-weight="700">${hi ? 'उदा: पाइन (चीड़)' : 'Ex: Pine, Deodar'}</text>
  <text x="610" y="220" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'साइकस, देवदार (सदाबहार)' : 'Cycas (living fossil)'}</text>
  <text x="610" y="246" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'सुई पत्तियाँ वाष्पोत्सर्जन घटाएँ' : 'Pollen travels by wind'}</text>

  <!-- Step 5 -->
  <rect x="702" y="50" width="160" height="238" rx="10" fill="${c.panel}" stroke="${c.rose}" stroke-width="1.8" />
  <text x="782" y="72" text-anchor="middle" fill="${c.rose}" font-size="12.5" font-weight="800">${hi ? '5. आवृतबीजी' : '5. Angiosperms'}</text>
  <text x="782" y="92" text-anchor="middle" fill="${c.text}" font-size="10.5" font-weight="700">${hi ? 'फल के भीतर बंद बीज' : 'Seeds Inside Fruits'}</text>
  <text x="782" y="116" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• सर्वाधिक विकसित पुष्पी पादप' : '• Flowering, max diversity'}</text>
  <text x="782" y="136" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• एकबीजपत्री: गेहूँ/मक्का' : '• Monocot (1): Wheat/Maize'}</text>
  <text x="782" y="156" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• द्विबीजपत्री: मटर/आम/चना' : '• Dicot (2): Pea, Mango'}</text>
  <rect x="714" y="182" width="136" height="88" rx="8" fill="${c.panelAlt}" />
  <text x="782" y="202" text-anchor="middle" fill="${c.rose}" font-size="10.5" font-weight="700">${hi ? 'हॉर्टस मलाबारिकस' : 'Hortus Malabaricus'}</text>
  <text x="782" y="220" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? 'वैद्य इट्टी अचुतन (720 पौधे)' : 'Itti Achuthan (720 plants!)'}</text>
  <text x="782" y="246" text-anchor="middle" fill="${c.muted}" font-size="9.5">${hi ? 'गुलमोहर, सरसों, चावल' : 'Gulmohar, Mustard, Rice'}</text>

  <!-- Bottom summary bar -->
  <rect x="18" y="304" width="844" height="50" rx="10" fill="${c.panelAlt}" stroke="${c.emerald}" stroke-width="1.4" />
  <text x="440" y="325" text-anchor="middle" fill="${c.emerald}" font-size="12" font-weight="800">${hi ? 'PYQ ट्रिक: क्रिप्टोगैम (बीज रहित: थैलो + ब्रायो + टेरिडो) vs फैनरोगैम (बीज युक्त: जिम्नो + एंजियो)' : 'Exam Quick Key: Cryptogams (Seedless: Thallo + Bryo + Pterido) vs Phanerogams (Seeds: Gymno + Angio)'}</text>
  <text x="440" y="344" text-anchor="middle" fill="${c.muted}" font-size="11">${hi ? 'प्रथम संवहनी ऊतक = टेरिडोफाइटा | नग्न बीज = जिम्नोस्पर्म | पादप उभयचर = ब्रायोफाइटा | रेशेदार जड़ व समानांतर शिरा = एकबीजपत्री' : '1st Vascular = Pteridophyta | Naked Seeds = Gymnosperms | Fibrous root + parallel venation = Monocots; Taproot + reticulate = Dicots'}</text>
</svg>`;
  }

  if (key === 'c9-ch12-animalia-chordata-hierarchy-diagram') {
    return `<svg viewBox="0 0 880 410" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:${c.bg};border-radius:14px;font-family:system-ui,-apple-system,sans-serif">
  <text x="440" y="26" text-anchor="middle" fill="${c.amber}" font-size="15.5" font-weight="800">${hi ? 'जंतु जगत (अकशेरुकी संघ → कशेरुकी हृदय) एवं 7-स्तरीय वर्गीकरण पदानुक्रम' : 'Kingdom Animalia Progression, Vertebrate Hearts & 7-Rank Hierarchy'}</text>

  <!-- Left: Invertebrates + Vertebrates -->
  <rect x="20" y="44" width="490" height="346" rx="12" fill="${c.panel}" stroke="${c.amber}" stroke-width="1.6" />
  <text x="265" y="68" text-anchor="middle" fill="${c.amber}" font-size="13" font-weight="800">${hi ? 'कशेरुकी नॉन-कॉर्डेटा → प्रोटोकॉर्डेटा → 5 कशेरुकी वर्ग' : '8 Non-Chordata Phyla → Protochordata → 5 Vertebrata'}</text>

  <rect x="34" y="82" width="224" height="36" rx="7" fill="${c.panelAlt}" />
  <text x="44" y="104" fill="${c.text}" font-size="10.5">${hi ? '1. पॉरीफेरा: छिद्र व नाल तंत्र (24,000 L/दिन)' : '1. Porifera: Sponges, canal filter system'}</text>
  <rect x="270" y="82" width="226" height="36" rx="7" fill="${c.panelAlt}" />
  <text x="280" y="104" fill="${c.text}" font-size="10.5">${hi ? '2. नाइडेरिया: ऊतक स्तर, दंश कोशिका (हाइड्रा)' : '2. Cnidaria: Tissue grade, stinging (Hydra)'}</text>

  <rect x="34" y="126" width="224" height="36" rx="7" fill="${c.panelAlt}" />
  <text x="44" y="148" fill="${c.text}" font-size="10.5">${hi ? '3. प्लेटीहेल्मिंथीज: चपटे कृमि, हुक-चूषक (टेपवर्म)' : '3. Platyhelminthes: Flatworms, bilateral'}</text>
  <rect x="270" y="126" width="226" height="36" rx="7" fill="${c.panelAlt}" />
  <text x="280" y="148" fill="${c.text}" font-size="10.5">${hi ? '4. निमेटोडा: गोलकृमि, दो देह-द्वार (एस्केरिस)' : '4. Nematoda: Roundworms, 2-way tube gut'}</text>

  <rect x="34" y="170" width="224" height="36" rx="7" fill="${c.panelAlt}" />
  <text x="44" y="192" fill="${c.text}" font-size="10.5">${hi ? '5. एनेलिडा: वास्तविक देहगुहा व खंड (केंचुआ)' : '5. Annelida: True coelom, segments (Earthworm)'}</text>
  <rect x="270" y="170" width="226" height="36" rx="7" fill="${c.panelAlt}" stroke="${c.emerald}" />
  <text x="280" y="192" fill="${c.emerald}" font-size="10.5" font-weight="700">${hi ? '6. आर्थ्रोपोडा: संधिपाद, काइटिन (सबसे बड़ा!)' : '6. Arthropoda: Largest! Jointed + Chitin'}</text>

  <rect x="34" y="214" width="224" height="36" rx="7" fill="${c.panelAlt}" />
  <text x="44" y="236" fill="${c.text}" font-size="10.5">${hi ? '7. मोलस्का: कोमल देह, कवच, पेशीय पाद (घोंघा)' : '7. Mollusca: Soft body, CaCO₃ shell, foot'}</text>
  <rect x="270" y="214" width="226" height="36" rx="7" fill="${c.panelAlt}" />
  <text x="280" y="236" fill="${c.text}" font-size="10.5">${hi ? '8. इकाइनोडर्मेटा: समुद्री, शूल त्वचा (स्टारफिश)' : '8. Echinodermata: Spiny CaCO₃ marine endoskeleton'}</text>

  <!-- Chordata box -->
  <rect x="34" y="262" width="462" height="114" rx="10" fill="${c.panelAlt}" stroke="${c.rose}" stroke-width="1.5" />
  <text x="265" y="282" text-anchor="middle" fill="${c.rose}" font-size="12" font-weight="800">${hi ? 'कॉर्डेटा: पृष्ठरज्जु + पृष्ठ तंत्रिका रज्जु (एम्फिऑक्सस → 5 कशेरुकी)' : 'Chordata (Notochord + Dorsal Nerve Cord): 5 Vertebrate Classes'}</text>
  <text x="265" y="304" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? '• मत्स्य (Pisces): 2-कक्षीय हृदय, क्लोम, असमतापी (रोहू/शार्क)' : '• Pisces: 2-chamber heart, gills, cold-blooded'}</text>
  <text x="265" y="322" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? '• उभयचर (3 कक्ष, श्लेष्म त्वचा) | सरीसृप (3 कक्ष, मगरमच्छ अपवाद 4!)' : '• Amphibia: 3-chamber (moist skin) | Reptilia: 3-chamber (Crocodile=4!)'}</text>
  <text x="265" y="340" text-anchor="middle" fill="${c.text}" font-size="10.5">${hi ? '• पक्षी (4 कक्ष, खोखली हड्डियाँ, समतापी) | स्तनधारी (4 कक्ष, स्तन ग्रंथि)' : '• Aves: 4-chamber, feathers, warm-blooded | Mammalia: 4-chamber, milk/hair'}</text>
  <text x="265" y="362" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '(बैंगनी मेंढक नासिकाबैट्राकस 2003 व संगाई केइबुल लामजाओ संरक्षण!)' : '(Indian Fauna: Nasikabatrachus sahyadrensis 2003 & Loktak Sangai)'}</text>

  <!-- Right: 7-Rank Taxonomic Hierarchy -->
  <rect x="526" y="44" width="334" height="346" rx="12" fill="${c.panel}" stroke="${c.violet}" stroke-width="1.6" />
  <text x="693" y="68" text-anchor="middle" fill="${c.violet}" font-size="13" font-weight="800">${hi ? '7-स्तरीय पदानुक्रम व द्विपद नाम (लिनियस)' : '7-Rank Taxonomic Pyramid & Binomial Rules'}</text>

  <rect x="550" y="84" width="286" height="24" rx="5" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="693" y="100" text-anchor="middle" fill="${c.text}" font-size="11" font-weight="700">${hi ? '1. जगत (Kingdom) — सर्वाधिक लक्षण भेद (Animalia)' : '1. Kingdom — Broadest Group (Animalia)'}</text>
  <rect x="564" y="114" width="258" height="24" rx="5" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="693" y="130" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? '2. संघ / प्रभाग (Phylum / Division) — Chordata' : '2. Phylum (Animals) / Division (Plants)'}</text>
  <rect x="578" y="144" width="230" height="24" rx="5" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="693" y="160" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? '3. वर्ग (Class) — Mammalia' : '3. Class — Mammalia / Dicotyledonae'}</text>
  <rect x="592" y="174" width="202" height="24" rx="5" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="693" y="190" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? '4. गण (Order) — Carnivora' : '4. Order — Carnivora / Fabales'}</text>
  <rect x="606" y="204" width="174" height="24" rx="5" fill="${c.panelAlt}" stroke="${c.border}" />
  <text x="693" y="220" text-anchor="middle" fill="${c.text}" font-size="11">${hi ? '5. कुल (Family) — Felidae' : '5. Family — Felidae / Fabaceae'}</text>
  <rect x="620" y="234" width="146" height="24" rx="5" fill="${c.panelAlt}" stroke="${c.cyan}" />
  <text x="693" y="250" text-anchor="middle" fill="${c.cyan}" font-size="11" font-weight="700">${hi ? '6. वंश (Genus) — Panthera' : '6. Genus — Panthera (Capital P)'}</text>
  <rect x="634" y="264" width="118" height="26" rx="5" fill="${c.panelAlt}" stroke="${c.emerald}" stroke-width="1.5" />
  <text x="693" y="281" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">${hi ? '7. जाति — tigris' : '7. Species — tigris'}</text>

  <rect x="544" y="302" width="298" height="74" rx="8" fill="${c.panelAlt}" stroke="${c.emerald}" />
  <text x="693" y="321" text-anchor="middle" fill="${c.emerald}" font-size="11" font-weight="800">${hi ? 'द्विपद नियम (जैसे: मटर Pisum sativum):' : 'Binomial Rule (Tiger: Panthera tigris):'}</text>
  <text x="693" y="339" text-anchor="middle" fill="${c.text}" font-size="10">${hi ? '• लैटिन में इटैलिक (या हाथ से लिखते समय अलग-अलग रेखांकन)' : '• Italics in print, separately underlined by hand'}</text>
  <text x="693" y="357" text-anchor="middle" fill="${c.muted}" font-size="10">${hi ? '• प्रथम नाम वंश (बड़ा अक्षर), द्वितीय नाम जाति (छोटा अक्षर)' : '• Below Genus → Species, max shared traits!'}</text>
</svg>`;
  }

  return '';
}
