/**
 * Class 9 NCERT (2026-27 New Edition — ihsc102.pdf, Pages 8–27) + Railway CBT Deep-Dive Edition
 * Gold Standard v3: Classroom Teacher Explanations, Standard Hindi + English Scientific Terms,
 * Zero 3rd-party Branding, Print+Web Labeled Vector Plates, Interactive Labs, Activity Predictors & 24 Verified Dated RRB PYQs.
 */

export const CH2_CELL_DATA = {
  id: 'c9-bio-ch2',
  classId: 'class9',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology', hi: 'जीव विज्ञान (Biology)' },
  chapterNumber: 2,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 2: Cell (Complete CBT Edition)',
  blueprintSvgKey: 'ch2-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Cell Organelles & ATP', hi: 'कोशिकांग व ATP ऊर्जा' }, pct: 44 },
    { label: { en: 'Membrane, Wall & Osmosis', hi: 'झिल्ली, भित्ति व परासरण' }, pct: 26 },
    { label: { en: 'Prok. vs Euk., Nucleus & DNA', hi: 'प्रोकैरियोट, केंद्रक व DNA/RNA' }, pct: 16 },
    { label: { en: 'Discoveries & Cell Division', hi: 'खोजें, सूक्ष्मदर्शी व विभाजन' }, pct: 14 },
  ],
  title: {
    en: 'Chapter 2: Cell — The Fundamental Unit of Life',
    hi: 'अध्याय 2: कोशिका — जीवन की निर्माण इकाई (कोशिका विज्ञान)',
  },
  subtitle: {
    en: 'Classroom Deep-Dive Edition • Complete Mechanism Explanations, Bilingual Terms, 10 Vector Anatomy Plates, Real Micrographs & 24 Dated RRB PYQs',
    hi: 'शिक्षक व्याख्या सहित संपूर्ण गहराई • मानक हिन्दी + अंग्रेजी वैज्ञानिक शब्द, 10 वेक्टर चित्र, सभी क्रियाकलाप व 24 रेलवे CBT PYQ',
  },
  metrics: {
    pages: 20,
    activities: 5,
    tables: 6,
    svgLabs: 4,
    hdVisuals: 16,
    exercisesSolved: 16,
    pyqsMatched: 24,
  },

  hero: {
    imageUrl: '/ncert-notes/class9-bio-ch2/hero-cell-origins.webp',
    caption: {
      en: 'From Puga Valley geothermal springs to Bacteria, Plant & Animal Cells with complete internal anatomy.',
      hi: 'लद्दाख के उष्ण स्रोतों से प्रथम कोशिका की उत्पत्ति — जीवाणु, पादप और जंतु कोशिका का संपूर्ण वैज्ञानिक अध्ययन।',
    },
  },

  quickRevision60Sec: [
    {
      en: 'Study of Cell = **Cytology (`साइटोलॉजी`)**. Human eye resolution limit $= \\mathbf{0.1\\text{ mm}}$ at $25\\text{ cm}$; Electron Microscope sees down to **nanometre** ($1\\text{ nm} = 10^{-9}\\text{ m}$).',
      hi: 'कोशिका का अध्ययन = **साइटोलॉजी (Cytology)**। मानव नेत्र की विभेदन सीमा ==$0.1\\text{ mm}$ ($25\\text{ cm}$ पर)==; इलेक्ट्रॉन सूक्ष्मदर्शी **नैनोमीटर ($10^{-9}\\text{ m}$)** तक दिखाता है।',
    },
    {
      en: '**Hooke (1665)**: Dead cork cell | **Leeuwenhoek (1674)**: First living cell | **Brown (1831)**: Nucleus | **Purkinje (1839)**: Protoplasm ($80\\%$ water) | **Virchow (1855)**: *Omnis cellula e cellula*.',
      hi: '**हुक (1665)**: मृत कॉर्क | **ल्यूवेनहॉक (1674)**: जीवित कोशिका | **ब्राउन (1831)**: केंद्रक | **पुरकिंजे (1839)**: जीवद्रव्य | **विरचो (1855)**: पूर्वविद्यमान कोशिका से नई कोशिका।',
    },
    {
      en: '**Plasma Membrane**: $7\\text{--}10\\text{ nm}$, **Selectively Permeable** (Lipid + Protein). **Cell Wall**: **Freely Permeable** (**Cellulose** in Plants; **Peptidoglycan** in Bacteria; **Chitin** in Fungi; absent in Animals & *Mycoplasma*).',
      hi: '**कोशिका झिल्ली**: $7\\text{--}10\\text{ nm}$, **वरणात्मक पारगम्य**। **कोशिका भित्ति**: **पूर्ण पारगम्य** (**सेल्युलोस** पादप में, **पेप्टिडोग्लाइकन** जीवाणु में, **काइटिन** कवक में; जंतु व *माइकोप्लाज्मा* में अनुपस्थित)।',
    },
    {
      en: '**Hypotonic**: Endosmosis (Cell swells / plant becomes turgid) | **Isotonic**: Equilibrium (No net change) | **Hypertonic**: Exosmosis (Cell shrinks / Plant shows **Plasmolysis**).',
      hi: '**अल्पपरासारी (Hypotonic)**: जल अंदर → कोशिका फूलती है | **समपरासारी (Isotonic)**: बराबर आदान-प्रदान | **अतिपरासारी (Hypertonic)**: जल बाहर → संकुचन / **जीवद्रव्य कुंचन (Plasmolysis)**।',
    },
    {
      en: '**Own DNA Club**: Nucleus, Mitochondria (`Krebs Cycle, ATP`), Plastids (`Chloro / Chromo / Leucoplast`). **Ribosomes**: Prokaryote **`70S` (`50S+30S`)** vs Eukaryote **`80S` (`60S+40S`)**. **Lysosome**: De Duve; missing in RBC -> dead RBC cleared in **Spleen**.',
      hi: '**स्वयं DNA युक्त कोशिकांग**: केंद्रक, माइटोकॉन्ड्रिया (`क्रेब्स चक्र → ATP`), लवक। **राइबोसोम**: प्रोकैरियोट `70S` vs यूकैरियोट `80S`। **लाइसोसोम** (डी डूवे): RBC में नहीं होता अतः मृत RBC **प्लीहा (Spleen)** में नष्ट होती हैं।',
    },
    {
      en: '**DNA**: Double helix (`Watson & Crick`, `A=T`, `G≡C`); **RNA**: Single strand (`Ribose + Uracil`). **Mitosis**: $2n \\to 2 \\times (2n)$ growth/repair | **Meiosis**: $2n \\to 4 \\times (n)$ gametes + **Crossing Over (Prophase I)**.',
      hi: '**DNA**: द्वि-कुंडलिनी (`A=T, G≡C`); **RNA**: एक-रज्जु (`राइबोस + यूरेसिल`)। **समसूत्री**: 2 समान कोशिकाएँ ($2n \\to 2n$) | **अर्धसूत्री**: 4 युग्मक ($2n \\to n$, Prophase-I में **Crossing Over**)।',
    },
  ],

  sections: [
    {
      id: 'origin-organization',
      number: '2.0',
      flowDiagramKey: 'org-hierarchy',
      svgLab: null,
      title: {
        en: 'Origin of the First Cell, Body Organization & Cellular Extremes',
        hi: 'जीवन की उत्पत्ति, शरीर का संगठनात्मक स्तर और प्रमुख कोशिका तथ्य',
      },
      summaryTag: { en: 'NCERT Pages 8–9 + Fundamental Cytology', hi: 'NCERT पृष्ठ 8–9 + आधारभूत कोशिका विज्ञान' },
      blocks: [
        {
          heading: {
            en: '1. How Did the First Cell Emerge on Early Earth? (Puga Valley & BSIP Lucknow)',
            hi: '1. पृथ्वी पर प्रथम कोशिका की उत्पत्ति कैसे हुई? (लद्दाख के उष्ण स्रोत एवं BSIP लखनऊ)',
          },
          conceptStory: {
            en: 'Before multicellular animals or plants existed, Earth around 3.5 billion years ago had extreme heat, volcanic activity, and harsh ultraviolet radiation. Rather than open oceans alone, many scientists propose life emerged in small mineral-rich geothermal pools where warm temperature drove rapid chemical reactions. In India, the Puga Valley hot springs in Ladakh mimic those ancient conditions—remaining close to boiling despite freezing surroundings—and support ancient heat-loving unicellular bacteria called Thermophiles. Researchers at Lucknow’s Birbal Sahni Institute of Palaeosciences (BSIP) demonstrated that Calcium Carbonate (CaCO₃) rapidly precipitates around these hot springs, forming mineral sheaths that shielded primitive organic molecules from radiation and helped assemble the first protective cell membrane.',
            hi: 'लगभग 3.5 अरब वर्ष पूर्व प्रारंभिक पृथ्वी पर अत्यधिक ताप, ज्वालामुखी सक्रियता और हानिकारक विकिरण (Radiation) विद्यमान था। वैज्ञानिक समुदाय यह मानता है कि जीवन की उत्पत्ति महासागरों के बजाय छोटे, खनिज-समृद्ध जलकुंडों जैसे **उष्ण स्रोतों (Hot Springs)** में हुई होगी। भारत में **लद्दाख की पुगा घाटी (Puga Valley)** के उष्ण स्रोत ठंडी जलवायु के बावजूद जल के क्वथनांक (लगभग $100^\\circ\\text{C}$) के करीब तापमान बनाए रखते हैं, जहाँ **तापरागी जीवाणु (Thermophiles)** जीवित रहते हैं। लखनऊ स्थित **बीरबल साहनी पुराविज्ञान संस्थान (BSIP)** के वैज्ञानिकों ने पाया कि इन स्रोतों के चारों ओर **कैल्शियम कार्बोनेट ($CaCO_3$)** की परत तेजी से बनती है — जिसने प्रारंभिक कार्बनिक अणुओं को विकिरण से बचाकर **प्रथम सुरक्षात्मक कोशिका झिल्ली** बनाने में सहायता की।',
          },
          bullets: [
            {
              en: '**==Origin Medium:==** Life originated in **Water (`जल`)** (~**3.5 billion years ago**) inside dynamic shallow mineral pools / hydrothermal hot springs.',
              hi: '**==उत्पत्ति का माध्यम:==** जीवन की शुरुआत लगभग **3.5 अरब वर्ष पूर्व** खनिज-युक्त **जल** (उष्ण जल स्रोतों) में हुई।',
            },
            {
              en: '**==Puga Valley Hot Springs (Ladakh, India):==** Near boiling water harbouring unicellular heat-loving bacteria known as **Thermophiles (`तापरागी जीवाणु`)**.',
              hi: '**==पुगा घाटी उष्ण स्रोत (लद्दाख):==** जल के क्वथनांक के बराबर ताप पर यहाँ एककोशिकीय **तापरागी जीवाणु (Thermophiles)** पाए जाते हैं।',
            },
            {
              en: '**==BSIP Lucknow Discovery:==** Rapid **Calcium Carbonate ($CaCO_3$)** mineral deposits protected early biomolecules from UV radiation and stabilized the first cell boundary membrane.',
              hi: '**==BSIP लखनऊ अनुसंधान:==** तीव्र गति से जमा **कैल्शियम कार्बोनेट ($CaCO_3$)** ने प्रारंभिक अणुओं को विकिरण से सुरक्षित रखकर प्रथम झिल्ली के निर्माण में योगदान दिया।',
            },
          ],
          viralTrick: {
            en: '**Place-Chemical Pair:** **Ladakh Puga Valley** -> **Thermophiles** (`Thermo` = Heat, `Phile` = Loving) -> Shielded by **Calcium Carbonate ($CaCO_3$)** discovered by **BSIP, Lucknow**.',
            hi: '**परीक्षा स्मृति सूत्र:** **पुगा घाटी (लद्दाख)** → **तापरागी जीवाणु (Thermophiles)** → रक्षा परत **कैल्शियम कार्बोनेट ($CaCO_3$)** → शोध संस्थान **BSIP (लखनऊ)**।',
          },
          inlinePyqIds: [16],
        },
        {
          heading: {
            en: '2. Levels of Organization, Fundamental Cytology & World Cell Extremes',
            hi: '2. शरीर की संरचनात्मक इकाई, साइटोलॉजी व विश्व/मानव की प्रमुख कोशिकाएँ',
          },
          conceptStory: {
            en: 'A single brick cannot shelter a family, yet thousands organized into walls, rooms, and floors form a complete building. Biology follows the exact same hierarchy: a single Cell is the basic structural and functional unit of life. Similar specialized cells unite into Tissues (ऊतक), distinct tissues collaborate to build Organs (अंग, such as the nose, nasal cavity, trachea, and lungs), and coordinating organs form an Organ System (अंग-तंत्र, like the Respiratory System). Even inside complex multicellular humans, every physiological activity—breathing, muscle contraction, nerve signaling, energy synthesis—still happens inside individual cells.',
            hi: 'जिस प्रकार ईंटों से दीवारें, दीवारों से कमरे और कमरों से पूरा भवन बनता है, उसी प्रकार सभी जीवों का निर्माण **कोशिका (Cell)** से होता है। समान संरचना व कार्य वाली कोशिकाएँ मिलकर **ऊतक (Tissue)** बनाती हैं; विभिन्न ऊतक मिलकर **अंग (Organ — जैसे नासा रंध्र, श्वासनली व फेफड़े)** बनाते हैं; और अनेक अंग आपस में जुड़कर **अंग-तंत्र (Organ System — जैसे श्वसन तंत्र)** का निर्माण करते हैं। यद्यपि शरीर बड़े तंत्रों में बंटा होता है, फिर भी संरचना और कार्य की **मूलभूत इकाई (Structural & Functional Unit)** सदैव कोशिका ही रहती है।',
          },
          bullets: [
            {
              en: '**Unicellular vs Multicellular Organisms:** Organisms like **Bacteria, Yeast, *Amoeba*, and *Paramecium*** perform digestion, respiration & excretion within **ONE cell**. Plants, animals & fungi show **Division of Labour (`श्रम विभाजन`)** across specialized tissues & organs.',
              hi: '**एककोशिकीय बनाम बहुकोशिकीय जीव:** **जीवाणु, यीस्ट, अमीबा एवं पैरामीशियम** में समस्त जैविक क्रियाएँ एक ही कोशिका में होती हैं, जबकि बहुकोशिकीय जीवों में **श्रम विभाजन (Division of Labour)** पाया जाता है।',
            },
            {
              en: '**==Cytology & Living-Cell Terms (CBT Essential):==** Scientific study of cells = **Cytology (`कोशिका विज्ञान`)**; Death of damaged/diseased cells by injury = **Necrosis (`नेक्रोसिस`)** (contrast with controlled normal death **Apoptosis / PCD**).',
              hi: '**==प्रमुख वैज्ञानिक शब्द (CBT Essentials):==** कोशिका का अध्ययन = **साइटोलॉजी (Cytology)**; रोग या चोट से अनियंत्रित कोशिका मृत्यु = **नेक्रोसिस (Necrosis)** (जबकि नियंत्रित प्राकृतिक मृत्यु **Apoptosis / PCD** कहलाती है)।',
            },
            {
              en: '**==Universal & Human Cell Extremes (Direct Exam Questions):==**\n• **Smallest Living Cell:** ***Mycoplasma gallisepticum*** (~$0.1\\text{--}0.3\\text{ }\\mu\\text{m}$, has NO cell wall!)\n• **Largest Single Cell:** **Ostrich Egg (`शुतुरमुर्ग का अंडा`)** (~$170\\text{ mm} \\times 135\\text{ mm}$)\n• **Longest Human Cell:** **Neuron / Nerve Cell (`तंत्रिका कोशिका`)** (up to $1\\text{ m}$ long; **no Centrosome** -> cannot divide or repair after brain injury!)\n• **Largest Human Cell:** **Ovum / Egg (`अंडाणु`)** | **Smallest Human Cell:** **Sperm (`शुक्राणु`)** *(RBCs also among smallest)*\n• **Fastest Regenerating Human Organ:** **Liver (`यकृत / जिगर`)** (rapid mitotic regeneration restores damaged tissue!).',
              hi: '**==प्रमुख कोशिकीय कीर्तिमान (बार-बार पूछे जाने वाले प्रश्न):==**\n• **सबसे छोटी जीवित कोशिका:** ***माइकोप्लाज्मा (Mycoplasma)*** (इसमें कोशिका भित्ति नहीं होती!)\n• **सबसे बड़ी एकल कोशिका:** **शुतुरमुर्ग का अंडा (Ostrich Egg)**\n• **मानव शरीर की सबसे लंबी कोशिका:** **तंत्रिका कोशिका (Neuron)** — इसमें **तारककाय (Centrosome) अनुपस्थित** होने के कारण कोशिका विभाजन नहीं होता; अतः मस्तिष्क की गंभीर चोट स्वतः ठीक नहीं होती।\n• **मानव में सबसे बड़ी कोशिका:** **अंडाणु (Ovum)** | **मानव में सबसे छोटी कोशिका:** **शुक्राणु (Sperm)**\n• **सबसे तेज कोशिका विभाजन / पुनरुद्भवन:** **यकृत (Liver)** की कोशिकाएँ अपनी क्षति की पूर्ति सबसे तेजी से करती हैं।',
            },
          ],
          topperEdge: {
            en: '**Amoeba vs Paramecium Nutrition Trap (2025 Group D):** Both are single-celled Protists, YET **Amoeba** changes shape using temporary false feet (**Pseudopodia / `पादाभ`**) anywhere on surface (**Endocytosis**), whereas **Paramecium** has a rigid definite shape and sweeps food to ONE fixed spot using hair-like **Cilia (`पक्ष्माभ`)**!',
            hi: '**अमीबा बनाम पैरामीशियम पोषण अंतर (Group D 2025):** दोनों एककोशिकीय हैं, किंतु **अमीबा** अनियमित आकार में **अस्थायी पादाभ (Pseudopodia)** से सतह के किसी भी हिस्से से भोजन निगलता है, जबकि **पैरामीशियम** निश्चित आकार का होकर पूरे पृष्ठ पर लगे **पक्ष्माभ (Cilia)** की गति से भोजन को एक **निश्चित मुख-स्थल** तक लाता है।',
          },
          trapAlert: {
            en: 'Read carefully whether the exam asks for **LONGEST** vs **LARGEST** cell: **Largest human cell = Ovum (`अंडाणु`)**, whereas **Longest human cell = Neuron (`तंत्रिका कोशिका`)**!',
            hi: 'प्रश्न को ध्यान से पढ़ें: मानव में **सबसे बड़ी (Largest)** कोशिका = **अंडाणु (Ovum)**, जबकि **सबसे लंबी (Longest)** कोशिका = **तंत्रिका कोशिका (Neuron)** है!',
          },
          inlinePyqIds: [1, 17, 18],
        },
      ],
    },

    {
      id: 'studying-cells',
      number: '2.1',
      flowDiagramKey: 'pioneer-timeline',
      svgLab: 'microscope-scale',
      svgLabTitle: {
        en: 'Interactive Lab 1: Resolution Scale & Light Microscope Magnification Simulator (Fig 2.1 & 2.2)',
        hi: 'इंटरैक्टिव लैब 1: सूक्ष्मदर्शी स्केल एवं आवर्धन सिम्युलेटर (चित्र 2.1 व 2.2)',
      },
      title: {
        en: 'Microscopy Limits, Electron Micrographs & Historical Pioneers (1665–1855)',
        hi: 'कोशिका का अध्ययन: सूक्ष्मदर्शी की कार्यप्रणाली, मात्रक व ऐतिहासिक खोजें',
      },
      summaryTag: { en: 'Section 2.1 • Pages 9–11 + Archival Plates', hi: 'भाग 2.1 • पृष्ठ 9–11 + ऐतिहासिक चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Why Naked Eyes Cannot See Cells (0.1 mm Limit), Lens Formula & Electron Microscopes',
            hi: '1. नंगी आँख की विभेदन सीमा (0.1 mm), प्रकाश बनाम इलेक्ट्रॉन सूक्ष्मदर्शी',
          },
          conceptStory: {
            en: 'Place two tiny ink dots side-by-side at your eye’s clearest reading distance (25 cm). Once the gap drops below 0.1 mm (roughly the width of a human hair), light rays from both points hit the same retinal spot and merge into a single dot—this threshold (0.1 mm) is the Human Eye Resolving Limit (मानव नेत्र की विभेदन सीमा). Because typical plant and animal cells measure 10 to 100 µm (smaller than 0.1 mm = 100 µm), biology needed optics! A Compound Light Microscope bends visible light through two Convex Lenses—the lower Objective Lens (10×, 40×) near the glass slide and the upper Eyepiece Lens (10×) near your eye—giving Total Magnification = Eyepiece × Objective. Yet visible light waves cannot sharply resolve viruses, DNA strands, or membrane proteins below ~200 nm, so scientists invented the Electron Microscope, which replaces visible light with a narrow Electron Beam to visualize structures down to 1 nanometre (10⁻⁹ m).',
            hi: 'कागज पर दो अति निकट बिंदु बनाकर उन्हें अपनी आँख के स्पष्ट दर्शन की न्यूनतम दूरी (**$25\\text{ cm}$**) पर देखें। जब दोनों बिंदुओं के बीच दूरी **$0.1\\text{ mm}$** से कम हो जाती है, तो नंगी आँख उन्हें अलग नहीं देख पाती — इसी न्यूनतम अंतर को **मानव नेत्र की विभेदन सीमा (`0.1 mm = 100 µm`)** कहते हैं। अधिकांश कोशिकाएँ इस सीमा से छोटी होती हैं, इसलिए सूक्ष्मदर्शी का विकास हुआ। **संयुक्त प्रकाश सूक्ष्मदर्शी (Compound Light Microscope)** में दृश्य प्रकाश तथा **दो उत्तल लेंसों (Convex Lenses)** — नीचे स्लाइड के पास **अभिदृश्यक लेंस (`Objective`, $10\\times, 40\\times$)** व ऊपर आँख के पास **नेत्रिका लेंस (`Eyepiece`, $10\\times$)** — के संयोजन से कुल आवर्धन $= \\text{नेत्रिका} \\times \\text{अभिदृश्यक}$ प्राप्त होता है। किंतु विषाणु, राइबोसोम या DNA इतने सूक्ष्म होते हैं कि प्रकाश से नहीं दिखते; अतः वैज्ञानिक **इलेक्ट्रॉन सूक्ष्मदर्शी (Electron Microscope)** में प्रकाश की जगह **इलेक्ट्रॉन पुंज (Electron Beam)** का प्रयोग कर **नैनोमीटर ($10^{-9}\\text{ m}$)** स्तर तक स्पष्ट चित्र देखते हैं।',
          },
          bullets: [
            {
              en: '**==3 Core Microscopy Pillars (`NCERT Page 11`):==**\n1. **Resolution (`विभेदन`)**: Ability to distinguish two close structures clearly as separate.\n2. **Contrast (`विपर्यास`)**: Brightness/colour difference between specimen parts (enhanced using stains).\n3. **Magnification (`आवर्धन`)**: Optical zoom $= \\text{Eyepiece } \\times \\text{ Objective}$ (e.g., $10\\times \\times 10\\times = 100\\times$; $10\\times \\times 40\\times = 400\\times$).',
              hi: '**==सूक्ष्मदर्शी की 3 मुख्य विशेषताएँ (NCERT पृष्ठ 11):==**\n1. **विभेदन (Resolution):** दो समीपस्थ भागों को धुंधलेपन के बिना अलग-अलग व स्पष्ट दिखाने का माप।\n2. **विपर्यास (Contrast):** किसी वस्तु के विभिन्न भागों की चमक/रंग (द्युति) में अंतर।\n3. **आवर्धन (Magnification):** प्रतिबिंब को बड़ा करना ($= \\text{नेत्रिका} \\times \\text{अभिदृश्यक}$)।',
            },
            {
              en: '**==Unit Conversion Math (`Activity 2.1`):==** $1\\text{ m} = 10^3\\text{ mm}$ | $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$ | $1\\text{ }\\mu\\text{m} = 10^{-6}\\text{ m}$ | $1\\text{ nm} = 10^{-9}\\text{ m} = 0.000001\\text{ mm}$. Example: If microscope field diameter $= 5\\text{ mm} = 5000\\text{ }\\mu\\text{m}$ with $25$ onion cells across it, cell width $= 5000 / 25 = 200\\text{ }\\mu\\text{m}$.',
              hi: '**==मात्रक रूपांतरण एवं क्रियाकलाप 2.1 सूत्र:==** $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$ | $1\\text{ nm} = 10^{-9}\\text{ m}$ (1 मीटर का एक अरबवाँ भाग $= 0.000001\\text{ mm}$)। उदाहरण: यदि दृश्य क्षेत्र का व्यास $5\\text{ mm}$ ($5000\\text{ }\\mu\\text{m}$) है और व्यास पर $25$ कोशिकाएँ दिखें, तो एक कोशिका $= 5000 / 25 = \\mathbf{200\\text{ }\\mu\\text{m}}$।',
            },
            {
              en: '**SEM (*Scanning Electron Microscope*) NCERT Example (`Fig 2.4`):** Shows crisp 3D surface topography of **Stomata (`रंध्र`)** surrounded by kidney/bean-shaped Guard Cells on the underside of a ***Colocasia* (`अरबी`) leaf**.',
              hi: '**क्रमवीक्षण इलेक्ट्रॉन सूक्ष्मदर्शी (SEM — चित्र 2.4):** इसकी सहायता से *कोलोकेशिया* (अरबी) की पत्ती की निचली सतह पर उपस्थित **रंध्रों (Stomata)** की त्रि-आयामी सतह स्पष्ट दिखाई देती है।',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/hooke-cork-1665.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch2/real/hooke-microscope-1665.webp',
            title: {
              en: 'Archival 1665 Cork Drawing & Robert Hooke Compound Microscope (Micrographia)',
              hi: 'ऐतिहासिक 1665 प्रमाण: रॉबर्ट हुक द्वारा कॉर्क में देखे गए कोष्ठ (बाएँ) व स्व-निर्मित सूक्ष्मदर्शी (दाएँ)',
            },
            caption: {
              en: 'Left: Dead oak-bark cork honeycomb compartments Hooke named "Cells". Right: His self-built 200–300X optical microscope (Public Domain).',
              hi: 'बाएँ: रॉबर्ट हुक द्वारा कॉर्क में देखे गए मधुमक्खी के छत्ते जैसे मृत कोष्ठ ("Cell")। दाएँ: हुक का 200–300X आवर्धन वाला स्व-निर्मित सूक्ष्मदर्शी।',
            },
          },
          inlinePyqIds: [2, 19],
        },
        {
          heading: {
            en: '2. Complete Discovery Pioneers (Hooke, Leeuwenhoek, Brown & Purkinje)',
            hi: '2. कोशिका विज्ञान के ऐतिहासिक वैज्ञानिक एवं खोजें (1665 – 1839)',
          },
          conceptStory: {
            en: 'Do not mix up who discovered dead vs living cells or coined Nucleus vs Protoplasm! In 1665, English physicist Robert Hooke published Micrographia describing empty honeycomb chambers in dead oak-bark cork using a self-built 200–300× microscope—so Hooke discovered the FIRST CELL (dead cell wall) and is called Father of Cytology. Nine years later in 1674, Dutch lensmaker Antonie van Leeuwenhoek crafted superior single lenses and observed living, moving single-celled bacteria and protozoa in pond water—earning the title Father of Bacteriology & Microbiology. Over a century later, Scottish botanist Robert Brown identified the dense central Nucleus inside orchid cells (1831), and Czech physiologist J. E. Purkinje coined Protoplasm (जीवद्रव्य) in 1839 for the living semifluid matrix inside cells—which Thomas Huxley famously termed the "Physical Basis of Life".',
            hi: 'परीक्षा में वैज्ञानिकों के योगदान का क्रम और अंतर अत्यंत महत्वपूर्ण है। वर्ष **1665** में **रॉबर्ट हुक (Robert Hooke)** ने अपनी पुस्तक *माइक्रोग्राफिया* में स्व-निर्मित $200\\text{--}300\\times$ सूक्ष्मदर्शी द्वारा **मृत कॉर्क (पेड़ की छाल)** के पतले टुकड़े में बक्से जैसे कोष्ठ देखे और उन्हें **\'सेल (Cell)\'** नाम दिया — इन्हें **Father of Cytology** कहते हैं। इसके बाद वर्ष **1674** में **एंटोनी वॉन ल्यूवेनहॉक (Leeuwenhoek)** ने उन्नत लेंसों से तालाब के जल में पहली बार **जीवित (मुक्त) कोशिका / जीवाणु** को देखा — इन्हें **जीवाणु विज्ञान का जनक (Father of Bacteriology)** कहा जाता है। तत्पश्चात **1831** में **रॉबर्ट ब्राउन (Robert Brown)** ने कोशिका के भीतर **केंद्रक (Nucleus)** की खोज की, तथा **1839** में **जे. ई. पुरकिंजे (J. E. Purkinje)** ने कोशिका में भरे जीवित तरल पदार्थ को **जीवद्रव्य (Protoplasm)** नाम दिया।',
          },
          bullets: [
            {
              en: '**==1665 — Robert Hooke:==** Observed thin dead **Cork slice** (`कोर्क`) -> coined term **"Cell"**; Father of Cytology.',
              hi: '**==1665 — रॉबर्ट हुक:==** **कॉर्क (मृत कोशिका)** के टुकड़े में पहली बार कोशिका देखी और `"Cell"` नाम दिया।',
            },
            {
              en: '**==1674 — Antonie van Leeuwenhoek:==** Discovered **first FREE-LIVING cell** (pond water bacteria/protozoa); Father of Bacteriology.',
              hi: '**==1674 — एंटोनी वॉन ल्यूवेनहॉक:==** तालाब के जल में सबसे पहली **जीवित कोशिका** की खोज की।',
            },
            {
              en: '**==1831 — Robert Brown:==** Discovered the **Nucleus (`केंद्रक`)** inside plant orchid cells.',
              hi: '**==1831 — रॉबर्ट ब्राउन:==** कोशिका के मध्य में स्थित **केंद्रक (Nucleus)** की खोज की।',
            },
            {
              en: '**==1839 — J. E. Purkinje (Protoplasm = 80% Water):==** Named **Protoplasm (`जीवद्रव्य`)**; comprises **Cytoplasm + Nucleoplasm** and protects cells from drying; called **"Physical Basis of Life"** by Huxley.',
              hi: '**==1839 — जे. ई. पुरकिंजे (जीवद्रव्य = 80% जल):==** इसे **जीवद्रव्य (Protoplasm)** नाम दिया; हैक्सले ने इसे **"जीवन का भौतिक आधार"** कहा। यह दो भागों (**कोशिकाद्रव्य + केंद्रकद्रव्य**) से मिलकर बनता है और कोशिका को सूखने से बचाता है।',
            },
          ],
          viralTrick: {
            en: '**4-Pioneer Sequence ("H-L-B-P"):** **1665 Hooke** (Dead Cork) → **1674 Leeuwenhoek** (Living pond bacteria) → **1831 Brown** (Nucleus / Cell Brain) → **1839 Purkinje** (**P** for **P**rotoplasm).',
            hi: '**ऐतिहासिक क्रम सूत्र ("हु-ली-ब्रा-पुर"):** `1665` **हुक** (मृत कॉर्क) → `1674` **ल्यूवेनहॉक** (जीवित कोशिका) → `1831` **ब्राउन** (केंद्रक) → `1839` **पुरकिंजे** (**P = Protoplasm / जीवद्रव्य**)।',
          },
          inlinePyqIds: [20, 21],
        },
      ],
    },

    {
      id: 'plasma-membrane-osmosis',
      number: '2.2.1',
      svgLab: 'osmosis-bilayer',
      svgLabTitle: {
        en: 'Interactive Lab 2: Live Osmosis, Plasmolysis & Fluid-Mosaic Bilayer Simulator (Fig 2.6, 2.7, 2.9)',
        hi: 'इंटरैक्टिव लैब 2: परासरण (फूलना/सिकुड़ना) एवं तरल-मोजेक झिल्ली मॉडल',
      },
      title: {
        en: 'Plasma Membrane (Fluid-Mosaic Model), Diffusion, Osmosis & 3 Solutions',
        hi: 'कोशिका झिल्ली (तरल-मोजेक संरचना), विसरण, परासरण व 3 विलयन प्रकार',
      },
      summaryTag: { en: 'Section 2.2.1 • Pages 11–13', hi: 'भाग 2.2.1 • पृष्ठ 11–13' },
      blocks: [
        {
          heading: {
            en: '1. Why Plasma Membrane Is Called "Selectively Permeable" & Diffusion vs Osmosis',
            hi: '1. प्लाज्मा झिल्ली (वरणात्मक पारगम्य आवरण), विसरण व परासरण का अंतर',
          },
          conceptStory: {
            en: 'Every living cell—bacterial, fungal, plant, or animal—is wrapped in an ultra-thin Plasma Membrane (प्लाज्मा / कोशिका झिल्ली) that separates internal cell chemistry from the surrounding world. It is Selectively Permeable (वरणात्मक रूप से पारगम्य): essential small molecules like O₂, CO₂ (as across lung alveoli), and H₂O cross easily along concentration differences, while unwanted ions or large sugar/salt molecules are tightly regulated. How do molecules cross? In general Diffusion (विसरण), particles of gas, dye, or solute spread spontaneously from higher concentration to lower concentration—requiring NO membrane at all (e.g., perfume scent spreading across a room). Osmosis (परासरण) is a specialized water-only diffusion across a selectively permeable membrane: free water molecules move from a dilute region (higher water concentration / fewer solutes) into a concentrated region (lower water concentration / more solutes) until equilibrium.',
            hi: 'प्रत्येक जीवित कोशिका (जीवाणु, कवक, पादप या जंतु) के चारों ओर एक अत्यंत पतला आवरण होता है जिसे **कोशिका झिल्ली या प्लाज्मा झिल्ली (Plasma Membrane)** कहते हैं। यह **वरणात्मक रूप से पारगम्य (Selectively Permeable)** होती है — अर्थात यह आवश्यक गैसों ($O_2, CO_2$, जैसे फेफड़ों की कूपिकाओं में) व जल को तो अंदर-बाहर जाने देती है, किंतु हानिकारक या बड़े विलेय कणों (नमक/चीनी) को रोक लेती है। पदार्थों के इस आवागमन में दो प्रक्रियाएँ मुख्य हैं: **विसरण (Diffusion)** में किसी भी माध्यम (गैस, द्रव या ठोस) के कण बिना किसी झिल्ली की सहायता के उच्च सांद्रता से निम्न सांद्रता की ओर फैलते हैं (जैसे वायु में सुगंध फैलना)। इसके विपरीत, **परासरण (Osmosis)** एक विशेष प्रकार का विसरण है जिसमें **केवल जल के अणु** किसी **वरणात्मक पारगम्य झिल्ली के आर-पार** तनु विलयन (जहाँ जल अधिक, विलेय कम) से सांद्र विलयन (जहाँ जल कम, विलेय अधिक) की ओर गति करते हैं।',
          },
          bullets: [
            {
              en: '**==Fluid-Mosaic Model (`Singer & Nicolson`, Fig 2.7 — Thickness $7\\text{--}10\\text{ nm}$):==** Built of **Phospholipid Bilayer (`लिपिड द्विपरत`)** + embedded **Proteins**. Lipid molecules have **Hydrophilic (water-loving) heads OUT** and **Hydrophobic (water-fearing) tails IN**; because lipids move/flip laterally it is **Fluid**, and proteins scattered like tiles acting as **Gatekeeper Channels** give the **Mosaic** appearance!',
              hi: '**==तरल-मोजेक संरचना (Fluid-Mosaic Model — मोटाई $7\\text{--}10\\text{ nm}$):==** यह **लिपिड (वसा) और प्रोटीन** से बनी होती है। इसमें लिपिड की दो परतें होती हैं जिनके **जल-आकर्षी शीर्ष (Hydrophilic Head) बाहर** और **जल-प्रतिकर्षी पूँछें (Hydrophobic Tail) भीतर** होती हैं। चूँकि अणु पार्श्व गति व पलट सकते हैं इसलिए यह **तरल (Fluid)** है, तथा **प्रोटीन अणु मोजेक की टाइलों की भाँति धँसकर द्वारपाल (Gatekeepers)** की तरह परिवहन नियंत्रित करते हैं।',
            },
            {
              en: '**Plant Root Water Absorption (`RRB Group D 2025`):==** Plant root hair cells continuously absorb soil water strictly through **Osmosis**, NOT active ATP pumping!',
              hi: '**==पौधों की जड़ों द्वारा जल अवशोषण (RRB Group D 2025):==** पौधों के मूल रोम मिट्टी से जल मुख्यतः **परासरण (Osmosis)** प्रक्रिया द्वारा ग्रहण करते हैं।',
            },
            {
              en: '**Endocytosis Flexibility (`Amoeba`):==** Because animal/amoeba plasma membrane is flexible and lacks a cell wall, *Amoeba* engulfs external food by membrane folding (**Endocytosis**) using temporary **Pseudopodia**.',
              hi: '**एंडोसाइटोसिस (Endocytosis):** झिल्ली के लचीलेपन के कारण ही **अमीबा** जैसे एककोशिकीय जीव बाहरी वातावरण से खाद्य कणों को निगल पाते हैं।',
            },
          ],
          topperEdge: {
            en: '**Moong Seed NCERT Box Application:** If dry Moong seeds are soaked in plain water for 12 hours (they swell by **Endosmosis**) and then shifted into a concentrated salt/sugar solution -> water quickly leaves the cells by **Exosmosis**, causing the swollen seeds to **shrink/wrinkle**!',
            hi: '**NCERT बॉक्स अनुप्रयोग (मूंग बीज प्रयोग):** यदि 12 घंटे पानी में भिगोकर फुलाए गए मूंग के बीजों को किसी **गाढ़े (सांद्र) नमक/चीनी के विलयन** में रख दिया जाए, तो **बहिःपरासरण (Exosmosis)** के कारण जल बीजों से बाहर निकल जाएगा और वे सिकुड़ जाएंगे।',
          },
          inlinePyqIds: [4, 22],
        },
        {
          heading: {
            en: '2. Effect of Hypotonic, Isotonic & Hypertonic Solutions on Living Cells (Fig 2.6)',
            hi: '2. सांद्रता के आधार पर 3 प्रकार के विलयन और कोशिका पर उनका प्रभाव',
          },
          conceptStory: {
            en: 'In NCERT Activity 2.2, two identical weighed potato cubes are placed in Beaker A (plain water) and Beaker B (20% salt/sugar solution). After one hour, Beaker A’s potato becomes heavier and firmer while Beaker B’s potato turns lighter and shrunken. Why? Everything depends on comparing external solute concentration against the intracellular cell sap! Whenever external solute concentration is lower than inside the cell, water concentration outside is relatively higher, forcing water INTO the cell (Hypotonic). When both match, water enters and leaves at identical rates with zero net volume change (Isotonic). When the outer bath has excess salt or sugar (like 20% brine or pickle syrup), water is drawn OUT of the cell (Hypertonic), causing rapid cell shrinkage.',
            hi: 'जब किसी जीवित पादप या जंतु कोशिका को अलग-अलग सांद्रता वाले नमक या चीनी के घोल में रखा जाता है, तो शुद्ध जल का प्रवाह हमेशा **तनु माध्यम से सांद्र माध्यम** की ओर होता है। आइए तीनों परिस्थितियों का वैज्ञानिक कारण समझें:\n1. **अल्पपरासारी विलयन (Hypotonic Solution):** जब बाहरी माध्यम में विलेय (नमक/चीनी) की सांद्रता कम और जल के अणु अधिक होते हैं, तो **अंतःपरासरण (Endosmosis)** द्वारा जल तेजी से कोशिका में प्रवेश करता है। फलतः **कोशिका फूल जाती है** (अत्यधिक जल भरने से भित्ति-रहित जंतु कोशिका फट भी सकती है, जबकि पादप कोशिका **स्फीत/Turgid** होकर दृढ़ रहती है)।\n2. **समपरासारी विलयन (Isotonic Solution):** जब बाहर और भीतर विलेय की सांद्रता समान होती है, तो जितनी मात्रा में जल अंदर आता है उतनी ही मात्रा में बाहर जाता है — अतः कोशिका के **आकार व भार में कोई शुद्ध परिवर्तन नहीं** होता (गतिक संतुलन)।\n3. **अतिपरासारी विलयन (Hypertonic Solution):** जब बाहरी विलयन अत्यंत सांद्र होता है (जैसे **20% चीनी या नमक का घोल / अचार का मुरब्बा**), तो अंदर से जल तेजी से बाहर निकलता है (**बहिःपरासरण / Exosmosis**) और कोशिका **संकुचित (Shrink)** हो जाती है।',
          },
          bullets: [
            {
              en: '**1. ==Hypotonic (`अल्पपरासारी`):==** External Solute $<$ Intracellular Solute -> Net Water moves **INTO Cell** -> Cell **SWELLS**.',
              hi: '**1. ==अल्पपरासारी (Hypotonic):==** कोशिकाबाह्य विलेय सांद्रता $<$ अंतःकोशिकीय सांद्रता → जल अंदर आएगा → **कोशिका फूलेगी**।',
            },
            {
              en: '**2. ==Isotonic (`समपरासारी`):==** External Solute $=$ Intracellular Solute -> Equal bidirectional flow -> **ZERO net weight/size change**.',
              hi: '**2. ==समपरासारी (Isotonic):==** कोशिकाबाह्य सांद्रता $=$ अंतःकोशिकीय सांद्रता → समान आदान-प्रदान → **आकार अपरिवर्तित**।',
            },
            {
              en: '**3. ==Hypertonic (`अतिपरासारी`):==** External Solute $>$ Intracellular Solute -> Net Water moves **OUT** -> Cell **SHRINKS** (basis of pickles/jams preservation against bacteria & fungi!).',
              hi: '**3. ==अतिपरासारी (Hypertonic):==** कोशिकाबाह्य सांद्रता $>$ अंतःकोशिकीय सांद्रता → जल बाहर निकलेगा → **कोशिका सिकुड़ जाएगी** *(इसी सिद्धांत से अधिक नमक/चीनी डालकर अचार व मुरब्बे में जीवाणुओं-कवकों को रोका जाता है!)*।',
            },
          ],
          viralTrick: {
            en: '**Prefix Recall Key:** **Hypo-** = Below solute outside -> water pours in (**Swelling**); **Iso-** = Equal (**Same size**); **Hyper-** = Excess solute outside -> water pulled out (**Shrinking**).',
            hi: '**परीक्षा स्मृति सूत्र:** **अल्प (Hypo)** = बाहर विलेय कम (पानी अंदर → फूलना) | **सम (Iso)** = समान (कोई बदलाव नहीं) | **अति (Hyper)** = बाहर नमक/चीनी अधिक (पानी बाहर → पिचकना)।',
          },
          inlinePyqIds: [5],
        },
      ],
    },

    {
      id: 'cell-wall',
      number: '2.2.2',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Cell Wall Chemistry, Plasmolysis, Activity 2.3 Stains & Cellular Flexibility',
        hi: 'कोशिका भित्ति, रासायनिक अंतर, जीवद्रव्य कुंचन (Plasmolysis) व स्लाइड अभिरंजन',
      },
      summaryTag: { en: 'Section 2.2.2 • Pages 13–14 + Real Micrographs', hi: 'भाग 2.2.2 • पृष्ठ 13–14 + असली स्लाइड चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Cell Wall vs Plasma Membrane & Why Cellulose / Chitin / Peptidoglycan Differ',
            hi: '1. पादप, कवक व जीवाणु में कोशिका भित्ति की आवश्यकता, संरचना व पारगम्यता',
          },
          conceptStory: {
            en: 'Because plants remain anchored in one spot, they endure strong winds, seasonal rain, and huge osmotic water uptake without walking to shelter. Nature therefore surrounds every plant plasma membrane with a tough non-living outer jacket—the Cell Wall (कोशिका भित्ति)—which keeps leaves crisp, stems upright, and cells safe from osmotic bursting. Animal cells intentionally lack a cell wall so that muscle, blood, and cheek cells can bend and shift shape flexibly (**Cellular Flexibility**). Notice a classic Railway trap: while both plant, fungal, and bacterial cells possess cell walls, each kingdom builds its wall from a different chemical macromolecule! And functionally, the Cell Wall is Freely Permeable (पूर्ण पारगम्य) rather than selectively permeable, letting soil water and dissolved nutrients reach the root cell membrane effortlessly.',
            hi: 'पादप एक स्थान से दूसरे स्थान पर गति नहीं कर सकते; अतः वायु, वर्षा और परासरण दाब जैसी प्रतिकूल परिस्थितियों को सहन करने के लिए उनमें कोशिका झिल्ली के बाहर एक अतिरिक्त दृढ़ व निर्जीव आवरण होता है जिसे **कोशिका भित्ति (Cell Wall)** कहते हैं। यह पौधे को आकार, कठोरता व सीधा खड़ा रहने का सहारा देती है और शुद्ध जल में कोशिका को फटने से बचाती है। इसके विपरीत, **जंतु कोशिकाओं में कोशिका भित्ति नहीं होती**, जिससे उन्हें **कोशिकीय नम्यता (Cellular Flexibility)** प्राप्त होती है और जंतु ऊतक आसानी से गति व आकार परिवर्तन कर सकते हैं।\nध्यान रखने योग्य तथ्य यह है कि **पादप, कवक (Fungi) तथा जीवाणु (Bacteria)** तीनों में कोशिका भित्ति मिलती है, परंतु तीनों का **रासायनिक संघटन अलग-अलग** होता है!',
          },
          bullets: [
            {
              en: '**==Kingdom Cell-Wall Chemistry (High-Yield Exam Gold):==**\n• **Plants (`पादप`):** Made of **Cellulose (`सेल्युलोस`)** — a tough polymer of glucose units; acts as essential dietary **Roughage (`रुक्षांश / रेशे`)** aiding human digestion!\n• **Fungi (`कवक / Yeast-Mushroom`):** Made of **Chitin (`काइटिन`)** *(Tested in RRB Group D 2025 Shift 9!)*.\n• **Bacteria (`जीवाणु`):** Made of **Peptidoglycan (`पेप्टिडोग्लाइकन`)** *(Exceptions: **Animals** and tiny bacteria ***Mycoplasma*** lack cell walls!)*',
              hi: '**==विभिन्न जीवों की कोशिका भित्ति के पदार्थ (अत्यंत महत्वपूर्ण CBT तथ्य):==**\n• **पादप कोशिका:** **==सेल्युलोस (Cellulose)==** से बनी (अनेक ग्लूकोस इकाइयों का कार्बोहाइड्रेट; हमारे भोजन में **रुक्षांश / Roughage** के रूप में पाचन में सहायक)।\n• **कवक (Fungi):** **==काइटिन (Chitin)==** की बनी होती है *(RRB Group D 2025 Shift 9 में पूछा गया!)*।\n• **जीवाणु (Bacteria):** **==पेप्टिडोग्लाइकन (Peptidoglycan)==** की बनी होती है *(अपवाद: जंतु कोशिका व सबसे छोटे जीव **माइकोप्लाज्मा** में भित्ति नहीं होती)*।',
            },
            {
              en: '**==Plasmolysis (`जीवद्रव्य कुंचन` — Activity 2.3):==** When *Rhoeo* or onion peel cells are flooded with **$20\\%$ concentrated sugar solution**, water exits by exosmosis -> living **plasma membrane + cytoplasm pull inward away from the rigid cell wall**, while the outer box-like cellulose wall retains its exact outer boundary! Boiled cells lose living membrane semipermeability so they CANNOT perform plasmolysis/osmosis (`NCERT Exercise Q10`).',
              hi: '**==जीवद्रव्य कुंचन (Plasmolysis — क्रियाकलाप 2.3):==** जब *रोइओ (क्रेडल लिली)* या प्याज की कोशिकाओं पर **$20\\%$ चीनी का घोल** डाला जाता है, तो बहिःपरासरण से जल बाहर निकल जाता है — **बाहरी सेल्युलोस भित्ति ज्यों की त्यों बनी रहती है, पर अंदर का पूरा जीवद्रव्य सिकुड़कर भित्ति से अलग हट जाता है!** *(उबली/मृत कोशिकाओं में झिल्ली नष्ट हो जाने से परासरण नहीं होता)*।',
            },
            {
              en: '**==Laboratory Stain Selection (`ALP 2025 Tested`):==** **Onion / Plant slides** are stained pink-red with **Safranin (`सैफ्रेनीन`)**, whereas transparent **Human Cheek Epithelial cells** are stained blue with **Methylene Blue (`मेथिलीन ब्लू`)**. Notice: the **Nucleus** takes deep stain while the **Cytoplasm** stays very lightly stained.',
              hi: '**==प्रयोगशाला अभिरंजक नियम (ALP 2025 में पूछा गया):==** पादप/प्याज की झिल्ली को **सैफ्रेनीन (Safranin)** से और पारदर्शी मानव कपोल (गाल) कोशिकाओं को **मेथिलीन ब्लू (Methylene Blue)** से रंगा जाता है। स्लाइड में **केंद्रक गहरा रंग** लेता है जबकि **कोशिकाद्रव्य हल्का रंजित** रहता है।',
            },
          ],
          diagramKey: 'cell-wall-permeability',
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/real-onion-cells.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch2/real/cheek-cells.webp',
            title: {
              en: 'Real Laboratory Microscopy: Brick-Like Onion Epidermis vs Irregular Human Cheek Cells',
              hi: 'असली सूक्ष्मदर्शी दृश्य: नियमित प्याज की झिल्ली (बाएँ) बनाम अनियमित मानव गाल कोशिकाएँ (दाएँ)',
            },
            caption: {
              en: 'Left: Rigid rectangular Plant cell walls stained evenly. Right: Wall-less flexible Animal Cheek cells (Nucleus dark, Cytoplasm lightly stained).',
              hi: 'बाएँ: ईंट जैसी नियमित कोशिका भित्ति युक्त पादप कोशिकाएँ (सैफ्रेनीन)। दाएँ: बिना भित्ति वाली लचीली गाल कोशिकाएँ (मेथिलीन ब्लू)।',
            },
          },
          trapAlert: {
            en: 'Cell Membrane is **Selectively Permeable**, whereas Cell Wall is **Freely Permeable**. Never mark Cell Wall as selectively permeable or Cellulose in Fungi!',
            hi: '**-0.33 Trap:** **कोशिका झिल्ली** `वरणात्मक पारगम्य` है, जबकि **कोशिका भित्ति** `पूर्ण पारगम्य` होती है! कवक (Fungi) की भित्ति `काइटिन` की होती है, सेल्युलोस की नहीं।',
          },
          inlinePyqIds: [3, 6, 15, 23],
        },
      ],
    },

    {
      id: 'prokaryote-vs-eukaryote',
      number: '2.3',
      flowDiagramKey: 'prok-euk-venn',
      svgLab: 'cell-explorer',
      svgLabTitle: {
        en: 'Interactive Lab 3: 3-in-1 Cell Explorer — Plant vs Animal vs Bacterium (Tap Parts!)',
        hi: 'इंटरैक्टिव लैब 3: पादप बनाम जंतु बनाम जीवाणु कोशिका एक्सप्लोरर (टैप करें)',
      },
      title: {
        en: 'Prokaryotes vs Eukaryotes, Plant vs Animal Venn, Viruses/Prions & Cytoskeleton',
        hi: 'पूर्वकेंद्रकी बनाम सुकेंद्रकी, विषाणु/विषाणुभ/प्रोसंक व कोशिका-पंजर (Cytoskeleton)',
      },
      summaryTag: { en: 'Section 2.3 • Pages 14–15 • Statement PYQs', hi: 'भाग 2.3 • पृष्ठ 14–15 • उच्च-स्तरीय प्रश्न' },
      blocks: [
        {
          heading: {
            en: '1. Prokaryotic vs Eukaryotic Blueprint + 70S vs 80S Ribosomes',
            hi: '1. पूर्वकेंद्रकी (Prokaryotic) एवं सुकेंद्रकी (Eukaryotic) कोशिका तथा 70S/80S अंतर',
          },
          conceptStory: {
            en: 'Under an Electron Microscope, every cellular organism falls into one of two architectural blueprints based on whether its genetic DNA is enclosed in a membrane. In Prokaryotes (Greek: Pro = before/primitive, Karyon = nucleus) such as bacteria and blue-green algae (Cyanobacteria), there is NO nuclear membrane and NO membrane-bound organelles like Mitochondria, ER, or Golgi; a single circular DNA strand lies naked in a region called the Nucleoid, and reactions happen directly in the cytoplasm. In Eukaryotes (Eu = true, Karyon = nucleus)—including Protists, Fungi, Plants, and Animals—a double nuclear membrane safely houses multiple chromosomes, while internal compartments divide metabolic labour efficiently.',
            hi: 'केंद्रक झिल्ली की उपस्थिति और आंतरिक विभाजन के आधार पर संसार की सभी कोशिकाएँ दो वर्गों में बाँटी जाती हैं:\n• **पूर्वकेंद्रकी / प्रोकैरियोटिक (`Pro = पूर्व/प्राचीन, Karyon = केंद्रक`):** जीवाणु और नील-हरित शैवाल (सायनोबैक्टीरिया) जैसी आदिम कोशिकाओं में केंद्रक के चारों ओर झिल्ली नहीं होती और न ही कोई झिल्ली-आबद्ध कोशिकांग (माइटोकॉन्ड्रिया, ER, गॉल्जी) होते हैं। इनका **एकल गोल गुणसूत्र** सीधे कोशिकाद्रव्य के एक खुले क्षेत्र जिसे **केंद्रकाभ / आद्य केंद्रक (Nucleoid)** कहते हैं, में पड़ा रहता है।\n• **सुकेंद्रकी / यूकैरियोटिक (`Eu = वास्तविक`):** पादप, जंतु, कवक व प्रजीव (Protista) की बड़ी कोशिकाओं में **दोहरी झिल्ली वाला सुस्पष्ट केंद्रक**, अनेक गुणसूत्र और अलग-अलग झिल्ली वाले कोशिकांग कार्य करते हैं।',
          },
          bullets: [
            {
              en: '**Prokaryotic Numbers & Size:** Tiny diameter **$1\\text{--}10\\text{ }\\mu\\text{m}$**, almost always unicellular, possesses **Single (`1`) circular chromosome** in **Nucleoid**.',
              hi: '**पूर्वकेंद्रकी माप व गुणसूत्र:** छोटा व्यास (**$1\\text{--}10\\text{ }\\mu\\text{m}$**), प्रायः एककोशिकीय, **केवल 1 एकल गोल गुणसूत्र** जो केंद्रकाभ में होता है।',
            },
            {
              en: '**Eukaryotic Numbers & Size:** Larger **$10\\text{--}100\\text{ }\\mu\\text{m}$** diameter, unicellular (Protists/Yeast) or multicellular, **more than 1 linear chromosome** + membrane-bound organelles.',
              hi: '**सुकेंद्रकी माप व गुणसूत्र:** बड़ा व्यास (**$10\\text{--}100\\text{ }\\mu\\text{m}$**), एककोशिकीय या बहुकोशिकीय, **एक से अधिक गुणसूत्र** व समस्त कोशिकांग उपस्थित।',
            },
            {
              en: '**==Plant vs Animal Cell Internal Contrast (`Venn Below`):==** Plants feature **Rigid Cellulose Wall + Plastids + ONE Large Central Vacuole** (pushing Nucleus slightly to periphery) + **Cell Plate division**. Animals feature **Flexible no-wall boundary + Centrosome with 2 Centrioles + active Lysosomes + Tiny Vacuoles**.',
              hi: '**==पादप बनाम जंतु कोशिका (नीचे वेन आरेख देखें):==** पादप कोशिका में **सेल्युलोस भित्ति, लवक (हरितलवक आदि) व विशाल केंद्रीय रसधानी** होती है। जंतु कोशिका में **भित्ति व लवक नहीं** होते, किंतु **तारककाय (Centrosome)** व बड़ी संख्या में **लाइसोसोम** पाए जाते हैं।',
            },
          ],
          diagramKey: 'plant-animal-venn',
          topperEdge: {
            en: '**Ribosome Sedimentation Subunits (`70S` vs `80S`):** Even Prokaryotes require proteins to survive—so Ribosomes ARE present in Prokaryotes! However, **Prokaryotes carry smaller `70S` ribosomes (`50S + 30S` subunits)**, whereas **Eukaryotic cytoplasm carries larger `80S` ribosomes (`60S + 40S` subunits)**. Here `S` = **Svedberg / Sedimentation Coefficient** *(measuring centrifuge settling speed, NOT additive arithmetic!)*',
            hi: '**राइबोसोम उपइकाई नियम (`70S` बनाम `80S`):** प्रोकैरियोटिक कोशिकाओं में भी प्रोटीन बनाने हेतु राइबोसोम पाए जाते हैं, परंतु वे छोटे **`70S` (`50S + 30S`)** प्रकार के होते हैं (जबकि यूकैरियोटिक कोशिकाद्रव्य में बड़े **`80S` (`60S + 40S`)** राइबोसोम होते हैं)। यहाँ `S` = **स्वेडबर्ग / अवसादन गुणांक (Sedimentation Coefficient)** है।',
          },
          inlinePyqIds: [12, 24],
        },
        {
          heading: {
            en: '2. NCERT Box Goldmine: Viruses, Viroids, Prions, Cytoskeleton & Cell Inclusions',
            hi: '2. NCERT विशेष बॉक्स: विषाणु, विषाणुभ, प्रोसंक, कोशिका-पंजर व कोशिका अंतरंगक',
          },
          conceptStory: {
            en: 'NCERT highlights three fascinating borderland exceptions and two structural components directly targeted in 2025 Railway Group D exams. First, Viruses, Viroids, and Prions are Acellular (Non-cellular / अकोशिकीय) infectious particles far too tiny for light microscopes—and because they lack cytoplasm or self-metabolism, Classical Cell Theory does NOT apply to them! Second, inside eukaryotic cytoplasm lies an ultra-thin dynamic protein-filament scaffold visible only via Electron Microscope—the Cytoskeleton (कोशिका-पंजर)—acting like steel girders supporting shape, organelle highways, and cell motion. Third, non-living nutrient/mineral deposits inside plant cells are classified as Cell Inclusions (कोशिका अंतरंगक).',
            hi: 'NCERT के विशेष बॉक्सों में वर्णित ये सूक्ष्म अंतर परीक्षा में सीधे पूछे जाते हैं:\n1. **अकोशिकीय संक्रामक कारक (Acellular Infectious Agents):** विषाणु, विषाणुभ और प्रोसंक में वास्तविक कोशिका संरचना नहीं होती, अतः इन पर **कोशिका सिद्धांत लागू नहीं होता** और इन्हें सामान्य प्रकाश सूक्ष्मदर्शी से नहीं देखा जा सकता।\n2. **कोशिका-पंजर (Cytoskeleton):** यूकैरियोटिक कोशिकाओं के भीतर अत्यंत पतले प्रोटीन तंतुओं का जाल जो केवल इलेक्ट्रॉन सूक्ष्मदर्शी से दिखता है — यह **कोशिका के आकार, यांत्रिक स्थिरता, गति और आंतरिक परिवहन** को संभालता है।',
          },
          bullets: [
            {
              en: '**==Acellular Infectious Trio (`NCERT Box p.15`):==**\n• **Virus (`विषाणु`):** Nucleic acid (**DNA or RNA**) **+** outer **Protein Coat (Capsid)**.\n• **Viroid (`विषाणुभ`):** Infectious **RNA / Genetic material ONLY** (NO protein coat!).\n• **Prion (`प्रोसंक`):** Infectious **abnormally folded Protein ONLY** (ZERO DNA or RNA!).',
              hi: '**==अकोशिकीय त्रयी (NCERT पृष्ठ 15):==**\n• **विषाणु (Virus):** आनुवंशिक सामग्री (DNA या RNA) **+** **प्रोटीन आवरण**।\n• **विषाणुभ (Viroids):** केवल आनुवंशिक सामग्री (**प्रोटीन आवरण अनुपस्थित**)।\n• **प्रोसंक (Prions):** केवल असामान्य रूप से मुड़े/अपवलित **प्रोटीन** (**आनुवंशिक सामग्री अनुपस्थित**)।',
            },
            {
              en: '**==Cytoskeleton (`कोशिका-पंजर` — Group D 2025 Shift 34):==** Microfilament & microtubule protein network inside **eukaryotic cells** providing **mechanical support, fixed contour & internal transport**.',
              hi: '**==कोशिका-पंजर (Cytoskeleton — Group D 2025):==** सुकेंद्रकी कोशिकाओं को **संरचनात्मक स्थिरता, निश्चित आकार, गति एवं आंतरिक परिवहन** में सहायता प्रदान करने वाला तंतु-जाल।',
            },
            {
              en: '**Cell Inclusions (`कोशिका अंतरंगक`):** Non-living stored cytoplasmic particles in plants, such as **Starch grains**, **Calcium Oxalate crystals**, or **Silica crystals**.',
              hi: '**कोशिका अंतरंगक (Cell Inclusions):** पादप कोशिकाद्रव्य में संचित निर्जीव पदार्थ, जैसे **मंड (Starch)** तथा **कैल्शियम ऑक्सलेट या सिलिका क्रिस्टल**।',
            },
          ],
          viralTrick: {
            en: '**Acronyms:** **Vi**rus = Gene + Protein | **Vir-o-id** = Zero protein (`Gene Only`) | **Pr-ion** = **`Pr`otein Only** (Zero Gene)!',
            hi: '**स्मृति सूत्र:** **विषाणु (Virus)** = दोनों (DNA/RNA + प्रोटीन) | **विषाणुभ (Viroid)** = केवल आनुवंशिक पदार्थ | **प्रोसंक (Prion)** = **`प्र` से केवल प्रोटीन**!',
          },
          inlinePyqIds: [1],
        },
      ],
    },

    {
      id: 'nucleus-dna-rna',
      number: '2.3.1-A',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Nucleus, Chromosomes, DNA vs RNA, Central Dogma & Mature RBC Exception',
        hi: 'केंद्रक (नियंत्रण कक्ष), गुणसूत्र संरचना, DNA बनाम RNA, केंद्रीय सिद्धांत व RBC अपवाद',
      },
      summaryTag: { en: 'Section 2.3.1 • Page 16 + Deep Nucleic Acids', hi: 'भाग 2.3.1 • पृष्ठ 16 + आनुवंशिकी गहराई' },
      blocks: [
        {
          heading: {
            en: '1. Nucleus Structure, Chromosome Anatomy & Mature Enucleated RBC Trap',
            hi: '1. केंद्रक (कोशिका का दिमाग), गुणसूत्र की संरचना और परिपक्व RBC का रहस्य',
          },
          conceptStory: {
            en: 'Every eukaryotic factory needs a central command office holding its master instruction manual—that role belongs to the Nucleus (केंद्रक), enclosed by a Double Nuclear Membrane (द्विपरती केंद्रक झिल्ली) punctured by Nuclear Pores that shuttle RNA and ribosomal pieces into the cytoplasm. Inside sits a dense spherical sub-organelle—the Nucleolus (केंद्रिका)—which manufactures ribosomal subunits (rRNA + proteins). In a non-dividing resting cell, genetic DNA + histone proteins lie relaxed like a tangled net called Chromatin (क्रोमेटिन). Only when a cell enters division does Chromatin tightly coil into distinct rod-shaped Chromosomes (गुणसूत्र, named by Waldeyer), ensuring DNA copies separate accurately without snapping!',
            hi: 'रॉबर्ट ब्राउन (1831) द्वारा खोजा गया **केंद्रक (Nucleus)** कोशिका का **नियंत्रण कक्ष (Control Centre / Brain)** है, जो समस्त उपापचयी व आनुवंशिक क्रियाओं का संचालन करता है (इसमें लगभग $80\\%$ प्रोटीन एवं DNA होता है)। इसके चारों ओर **द्विपरती केंद्रक झिल्ली** होती है जिसमें छोटे **केंद्रक छिद्र (Nuclear Pores)** कोशिकाद्रव्य से पदार्थों के आदान-प्रदान का मार्ग बनाते हैं। केंद्रक के भीतर एक सघन गोल पिंड **केंद्रिका (Nucleolus)** होता है जहाँ **राइबोसोम की उपइकाइयों** का संश्लेषण होता है।\nजब कोशिका विभाजित नहीं हो रही होती, तब आनुवंशिक पदार्थ धागों के उलझे जाल अर्थात **क्रोमेटिन (Chromatin)** के रूप में होता है। कोशिका विभाजन आरंभ होते ही यही क्रोमेटिन संगठित होकर छड़ाकार **गुणसूत्रों (Chromosomes)** का रूप ले लेता है!',
          },
          bullets: [
            {
              en: '**==Chromosome Parts (Waldeyer):==** Paired sister **Chromatids** joined at a narrow waist called the **Centromere (`सेंट्रोमियर`)** (`p-arm` short, `q-arm` long); protective end caps = **Telomeres (`टेलोमियर`)**, upper knob tip = **Satellite**.',
              hi: '**==गुणसूत्र संरचना (नामकरण: वाल्डेयर / Waldeyer):==** दो क्रोमेटिड जिस मध्य बिंदु पर जुड़ते हैं उसे **सेंट्रोमियर (Centromere)**, सिरों को **टेलोमियर (Telomere)** तथा ऊपरी गोल सिरे को **सैटेलाइट (Satellite)** कहते हैं। क्रोमेटिन में DNA तथा विशेष **हिस्टोन (Histone) प्रोटीन** होते हैं।',
            },
            {
              en: '**==Genes (`जीन`):==** Functional segments of DNA located on chromosomes that carry coded hereditary traits from parents to offspring.',
              hi: '**==जीन (Genes — Tech Gr-III 2024):==** गुणसूत्रों पर स्थित DNA के क्रियात्मक खंड जो माता-पिता से अगली पीढ़ी में आनुवंशिक लक्षण पहुँचाते हैं।',
            },
            {
              en: '**==Enucleated Mature Human RBC Exception (`NCERT Box + Group D 2025`):==** Mature mammalian **Red Blood Cells (RBCs)** eject/lack a Nucleus (Enucleated) solely to maximize internal room for **Haemoglobin (`हीमोग्लोबिन`)** $O_2$ transport! Consequently, mature RBCs **cannot divide or repair DNA damage** and die in **~120 days**.',
              hi: '**==परिपक्व मानव लाल रक्त कोशिका (RBC) अपवाद:==** मानव की परिपक्व RBC **केंद्रक-रहित (Enucleated)** होती हैं ताकि उनमें अधिकाधिक **हीमोग्लोबिन** भर सके और शरीर को ज्यादा $O_2$ मिल सके। केंद्रक न होने से यह अपनी मरम्मत या विभाजन नहीं कर पातीं और लगभग **120 दिन** में नष्ट हो जाती हैं।',
            },
          ],
          diagramKey: 'nucleus-chromosome-dna',
          trapAlert: {
            en: 'Exam Question: *When are Chromosomes seen as distinct rod-like structures?* **ONLY during Cell Division** (`Group D 2025 & Tech Gr-III 2024`); in a resting non-dividing cell, DNA stays as uncoiled **Chromatin**!',
            hi: 'सावधान: गुणसूत्र केवल **कोशिका विभाजन के समय** ही छड़ाकार संरचना के रूप में दिखाई देते हैं; विश्राम (गैर-विभाजित) अवस्था में यह **क्रोमेटिन पदार्थ** के रूप में रहते हैं!',
          },
          inlinePyqIds: [11, 13],
        },
        {
          heading: {
            en: '2. DNA vs RNA Chemical Blueprint & Central Dogma (Replication -> Transcription -> Translation)',
            hi: '2. DNA बनाम RNA की रासायनिक संरचना व केंद्रीय सिद्धांत (Replication → Transcription → Translation)',
          },
          conceptStory: {
            en: 'Inside every chromosome lies Deoxyribonucleic Acid (DNA)—first isolated chemically by Friedrich Miescher (and observed by Altmann/Kossel studies), structurally solved as a Double Helix by James Watson and Francis Crick in 1953 (winning the 1962 Nobel Prize!), and artificially synthesized in the test tube by Indian-origin Nobel laureate Dr. Har Gobind Khorana. DNA is a long polymer of repeating Nucleotides—each Nucleotide containing 3 pieces: a Pentose Sugar (Deoxyribose in DNA, Ribose in RNA), a Phosphate group (rich in Phosphorus element!), and a Nitrogenous Base. While DNA preserves permanent master genetic blueprints as a double ladder, Ribonucleic Acid (RNA) works as a single-stranded mobile copy directing protein manufacture at ribosomes!',
            hi: '**डीएनए (DNA — Deoxyribonucleic Acid)** आनुवंशिक लक्षणों का प्रमुख वाहक तथा **न्यूक्लियोटाइड (Nucleotide)** का बहुलक (Polymer) है जिसमें **फॉस्फोरस (P)** तत्व प्रमुख रूप से होता है। प्रत्येक न्यूक्लियोटाइड तीन घटकों से बनता है: **पेंटोज शर्करा** (**DNA में डीऑक्सीराइबोस**, **RNA में राइबोस**), **फॉस्फेट समूह**, तथा **नाइट्रोजन क्षार (Nitrogenous Bases — प्यूरीन `A, G` व पिरीमिडीन `C, T/U`)**। DNA का प्रसिद्ध **द्वि-कुंडलिनी मॉडल (Double Helix)** **वाटसन एवं क्रिक** ने दिया (1962 नोबेल पुरस्कार), तथा प्रयोगशाला में कृत्रिम जीन संश्लेषण **डॉ. हरगोबिंद खुराना** ने किया।\nकोशिका में सूचना का प्रवाह इसी क्रमिक पथ से चलता है: **DNA से DNA बनना = प्रतिकृति (Replication)**, **DNA से RNA बनना = अनुलेखन (Transcription)**, कुछ विषाणुओं में **RNA से पुनः DNA = रिवर्स ट्रांसक्रिप्शन**, और अंत में **RNA से प्रोटीन बनना = अनुवादन (Translation)** कहलाता है।',
          },
          bullets: [
            {
              en: '**==DNA Base-Pairing Rule (Watson & Crick):==** **Adenine (`A`)** pairs with **Thymine (`T`)** by **Double Hydrogen Bond ($A = T$)**; **Guanine (`G`)** pairs with **Cytosine (`C`)** by **Triple Hydrogen Bond ($G \\equiv C$)**.',
              hi: '**==DNA नाइट्रोजन क्षार बंधन नियम:==** **ऐडीनीन ($A$) व थायमीन ($T$)** के मध्य **द्वि-हाइड्रोजन बंध ($A = T$)** होता है, जबकि **ग्वानीन ($G$) व साइटोसीन ($C$)** के मध्य **त्रि-हाइड्रोजन बंध ($G \\equiv C$)** होता है।',
            },
            {
              en: '**==RNA (Ribonucleic Acid — Single-Stranded):==** Contains **Ribose Sugar** and replaces Thymine (`T`) with **==Uracil (`U`)==**! Works in protein synthesis via 3 specialized types:\n1. **m-RNA (Messenger):** Carries genetic message from nuclear DNA to ribosome.\n2. **t-RNA (Transfer):** Transports specific amino acids (`20 amino acids = 1 protein` pool) to ribosome.\n3. **r-RNA (Ribosomal):** Structural & catalytic core of the ribosome assembly line.',
              hi: '**==RNA (एक-रज्जु / Single Stranded):==** इसमें **राइबोस शर्करा** होती है तथा **थायमीन ($T$) के स्थान पर यूरेसिल ($U$)** पाया जाता है। प्रोटीन संश्लेषण में इसके 3 रूप कार्य करते हैं:\n1. **m-RNA (संदेशवाहक):** केंद्रक से आवश्यक अमीनो अम्लों का क्रम लेकर आता है।\n2. **t-RNA (स्थानांतरण):** कोशिकाद्रव्य से अमीनो अम्ल लाकर राइबोसोम तक पहुँचाता है।\n3. **r-RNA (राइबोसोमल):** राइबोसोम में प्रोटीन निर्माण की अंतिम इकाई पूर्ण करता है।',
            },
            {
              en: '**==India DNA Fingerprinting HQ:==** **Centre for DNA Fingerprinting and Diagnostics (CDFD)** is situated in **Hyderabad** (used in forensics, paternity & identity verification from blood, hair follicle, saliva or skin cells).',
              hi: '**==भारत में DNA फिंगरप्रिंटिंग केंद्र:==** **हैदराबाद (CDFD)** में स्थित है — अपराध विज्ञान व पैतृकता पहचान हेतु रक्त, लार, बाल या त्वचा कोशिका से DNA परीक्षण किया जाता है।',
            },
          ],
          inlinePyqIds: [11, 20],
        },
      ],
    },

    {
      id: 'endomembrane-system',
      number: '2.3.1-B',
      flowDiagramKey: 'endomembrane-highway',
      svgLab: null,
      title: {
        en: 'Endomembrane Pipeline: Ribosomes -> ER (RER/SER) -> Golgi -> Lysosomes & Spleen',
        hi: 'कोशिका का अंतःझिल्लिका तंत्र: राइबोसोम, ER, गॉल्जीकाय व लाइसोसोम (प्लीहा सहित)',
      },
      summaryTag: { en: 'Section 2.3.1 • Page 17 + Camillo Golgi Portrait', hi: 'भाग 2.3.1 • पृष्ठ 17 + गॉल्जी चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Protein & Lipid Assembly Line: Ribosomes + Endoplasmic Reticulum (RER vs SER)',
            hi: '1. निर्माणशाला: राइबोसोम ("प्रोटीन फैक्टरी") तथा अंतर्द्रव्यी जालिका (RER व SER)',
          },
          conceptStory: {
            en: 'Just as a modern factory builds spare parts on one floor, routes them through conveyors, packs them in a dispatch center, and recycles defective pieces—eukaryotic cells link four structures into a seamless Endomembrane Supply Chain. First, Ribosomes (discovered by George Palade in 1955)—minute membrane-less granules either floating freely or anchored onto the outer membrane of the Endoplasmic Reticulum—read mRNA codes to stitch amino acids into proteins. The Endoplasmic Reticulum (ER) forms a vast membrane-tunnel network directly continuous with the outer nuclear envelope! Depending on whether ribosomes sit on its walls, ER splits into two specialized workshops.',
            hi: 'कोशिका के भीतर जैव अणुओं के निर्माण और परिवहन के लिए एक सुव्यवस्थित सप्लाई-चेन कार्य करती है। **राइबोसोम** (खोज: जॉर्ज पैलेड, 1955) कोशिका का सबसे छोटा तथा **झिल्ली-रहित (Membrane-less)** अंग है, जो प्रोटीन संश्लेषण करने के कारण **"प्रोटीन की फैक्टरी"** कहलाता है। वहीं **अंतर्द्रव्यी जालिका (ER)** बाहरी केंद्रक झिल्ली से सीधे जुड़कर पूरे कोशिकाद्रव्य में नलिकाओं का आंतरिक कंकाल व परिवहन मार्ग बनाती है। कार्य एवं राइबोसोम की उपस्थिति के आधार पर यह दो प्रकार की होती है:',
          },
          bullets: [
            {
              en: '**==RER (Rough / खुरदुरी ER):==** Studded with attached ribosomes (looking rough under Electron Microscopy) -> active site for **Protein synthesis & secretion** (abundant in enzyme-secreting **pancreatic gland cells**).',
              hi: '**==रुक्ष / खुरदुरी अंतर्द्रव्यी जालिका (RER):==** इसकी सतह पर राइबोसोम जुड़े होने से यह सूक्ष्मदर्शी में खुरदुरी दिखती है। यह **प्रोटीन निर्माण व स्रवण** (जैसे अग्न्याशय ग्रंथि कोशिकाएँ) में प्रमुख है।',
            },
            {
              en: '**==SER (Smooth / चिकनी ER):==** Free of ribosomes (smooth surface) -> synthesizes & stores **Lipids (Fats) & Steroid Hormones**, participates in **Membrane Biogenesis** along with RER proteins, and **detoxifies poisons & drugs in vertebrate liver (`यकृत`) cells**!',
              hi: '**==चिकनी अंतर्द्रव्यी जालिका (SER):==** इस पर राइबोसोम अनुपस्थित होते हैं। यह **वसा (Lipids) व हार्मोन का संश्लेषण/भंडारण** करती है, झिल्ली निर्माण (**Membrane Biogenesis**) में भाग लेती है, तथा कशेरुकी **यकृत (Liver) की कोशिकाओं में विष व दवाओं का निराविषीकरण (Detoxification)** करती है।',
            },
          ],
          trapAlert: {
            en: '**NCERT Exercise Q11 Trap:** SER synthesizes **Lipids and Hormones**, NEVER Cellulose! Cellulose is synthesized separately for the plant cell wall.',
            hi: '**अभ्यास प्रश्न 11 सावधानी:** चिकनी अंतर्द्रव्यी जालिका (SER) **वसा (Lipids)** बनाती है — **सेल्युलोस का संश्लेषण नहीं** करती!',
          },
          inlinePyqIds: [10, 14, 24],
        },
        {
          heading: {
            en: '2. Post Office & Clean-Up Squad: Golgi Apparatus, Lysosomes & Spleen Graveyard',
            hi: '2. पैकेजिंग डाकघर (गॉल्जीकाय) एवं सफाई तंत्र (लाइसोसोम व RBC प्लीहा कब्रिस्तान)',
          },
          conceptStory: {
            en: 'Raw proteins and lipids made inside ER vesicles travel to the Golgi Apparatus—a neat stack of flattened membrane pouches (Cisternae) first visualized in 1898 by Italian neuroscientist Camillo Golgi inside Barn Owl nerve cells using silver nitrate staining. Early microscopists doubted his drawings until Electron Microscopy confirmed the Golgi stacks decades later! Just like a central Post Office, Golgi receives unfinished ER proteins, modifies sugar chains, sorts them by destination, seals them inside transport vesicles (shipping some to the Plasma Membrane), and manufactures Lysosomes. Lysosomes (discovered by Christian de Duve) hold potent acidic digestive/hydrolytic enzymes inside a single protective membrane: they clear cellular garbage and worn organelles, dissolve egg outer layers using Sperm Acrosome enzymes during fertilisation, or digest the entire cell itself if fatally damaged ("Suicide Bags").',
            hi: 'ER में बने प्रोटीन और लिपिड सीधे **गॉल्जी उपकरण (Golgi Apparatus)** में भेजे जाते हैं, जिसकी खोज **1898** में इटली के वैज्ञानिक **कैमिलो गॉल्जी** ने **श्वेत उल्लू (Barn Owl)** की तंत्रिका कोशिकाओं में विशेष सिल्वर अभिरंजन से की थी। दशकों बाद इलेक्ट्रॉन सूक्ष्मदर्शी ने इस चपटी थैलियों (Cisternae) की ढेरी की पुष्टि की। यह कोशिका के **"डाकघर"** की तरह काम करता है — पदार्थों को रूपांतरित व वर्गीकृत कर पुटिकाओं में पैक करता है, परिवहन/स्रवण कराता है, तथा **लाइसोसोम का निर्माण** करता है।\n**लाइसोसोम / लयनकाय (खोज: डी डूवे):** एकल झिल्ली से घिरा यह थैला शक्तिशाली **जल-अपघटक (Hydrolytic) पाचक एंजाइमों** से भरा रहता है जो अपशिष्ट व जीर्ण अंगों को पचाता है; पूरी कोशिका क्षतिग्रस्त होने पर फटकर स्वयं को नष्ट कर देने के कारण इसे **"आत्महत्या की थैली (Suicide Bag / Atom Bomb of Cell)"** कहते हैं।',
          },
          bullets: [
            {
              en: '**==Sperm Acrosome Box (`NCERT जिज्ञासा-सूत्र p.18`):==** The tip (**Acrosome**) of human sperm contains **lysosomal digestive enzymes** that dissolve the egg’s protective outer coat so **fertilisation** can occur!',
              hi: '**==शुक्राणु बॉक्स तथ्य (NCERT पृष्ठ 18):==** मानव शुक्राणु के शीर्ष पर **लाइसोसोमीय एंजाइम** होते हैं जो अंडाणु के संपर्क में आकर उसकी बाहरी परत को विघटित करते हैं और **निषेचन** संभव बनाते हैं।',
            },
            {
              en: '**==Why Dead RBCs End Up in the Spleen (`CBT High-Yield Mechanism`):==** Mature mammalian **RBCs have NO Lysosomes** (nor nucleus!). Therefore, worn-out 120-day-old RBCs cannot self-digest and are instead trapped and broken down inside the **Spleen (`प्लीहा / तिल्ली`)**, giving Spleen its famous exam title: **"Graveyard of RBCs"**!',
              hi: '**==मृत RBC का निस्तारण व प्लीहा (Spleen):==** परिपक्व मानव **RBC में लाइसोसोम नहीं पाया जाता**; अतः लगभग 120 दिन का जीवनकाल पूरा होने के बाद मृत RBC **प्लीहा (Spleen / तिल्ली)** में जाकर नष्ट होते हैं — इसी कारण प्लीहा को **"RBC का कब्रिस्तान"** कहा जाता है।',
            },
          ],
          diagramKey: 'endomembrane-highway',
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/camillo-golgi.webp',
            title: {
              en: 'Camillo Golgi (1898 Barn Owl Discovery — Nobel Laureate, Public Domain)',
              hi: 'वैज्ञानिक कैमिलो गॉल्जी — 1898 में श्वेत उल्लू की तंत्रिका कोशिकाओं में गॉल्जीकाय की खोज',
            },
            caption: {
              en: 'Pioneered black reaction silver staining ("la reazione nera") allowing visualization of stacked Golgi cisternae.',
              hi: 'कैमिलो गॉल्जी ने विशेष सिल्वर अभिरंजन द्वारा इस तंतु-जाल का अवलोकन किया जिसे बाद में गॉल्जी उपकरण नाम मिला।',
            },
          },
          inlinePyqIds: [9, 10, 23],
        },
      ],
    },

    {
      id: 'mitochondria-plastids-vacuoles',
      number: '2.3.1-C',
      flowDiagramKey: 'mito-plastid-power',
      svgLab: null,
      title: {
        en: 'Mitochondria (ATP), Plastids (Chloro/Chromo/Leuco), Pigments Table, Vacuoles & Synthetic DNA',
        hi: 'माइटोकॉन्ड्रिया (ऊर्जा केंद्र), 3 लवक, पादप वर्णक, रसधानी (Tonoplast) व संश्लेषित DNA',
      },
      summaryTag: { en: 'Section 2.3.1 • Pages 18–20 + TEM & Leaf Plates', hi: 'भाग 2.3.1 • पृष्ठ 18–20 + असली TEM चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Mitochondria Cutaway (Altmann/Benda) — Krebs Cycle & ATP Currency',
            hi: '1. माइटोकॉन्ड्रिया / सूत्रकणिका — अंतःकटक (Cristae), क्रेब्स चक्र व ATP ऊर्जा',
          },
          conceptStory: {
            en: 'A factory can only run its machines if its power station delivers steady electricity—inside eukaryotic cells, that Powerhouse (कोशिका का ऊर्जा केंद्र / शक्तिगृह) is the Mitochondrion (observed by Richard Altmann in 1894, named Mitochondria by Carl Benda). Glucose initially splits in the Cytoplasm into Pyruvate (**Glycolysis**, anaerobic—yields little energy). Inside Mitochondria in the presence of oxygen (**Aerobic Cellular Respiration**), Pyruvate enters the **Krebs Cycle** inside the liquid Matrix and electron transport along deeply folded inner walls called **Cristae (अंतःकटक)** to generate rich stores of **ATP (Adenosine Triphosphate)** — the universal Energy Currency! Why folded Cristae? Folds dramatically multiply surface area inside a tiny oval capsule so thousands of ATP-synthesizing reaction sites operate simultaneously.',
            hi: '**माइटोकॉन्ड्रिया (सूत्रकणिका — खोज: अल्टमैन, नामकरण: सी. बेंडा)** को **कोशिका का ऊर्जा केंद्र / बिजलीघर (Powerhouse of the Cell)** कहते हैं क्योंकि यह भोजन के ऑक्सीकरण से कोशिका की अधिकांश ऊर्जा पैदा करती है। श्वसन के पहले चरण (**ग्लाइकोलाइसिस**) में कोशिकाद्रव्य के अंदर ग्लूकोस से पाइरूवेट बनता है; फिर ऑक्सीजन की उपस्थिति में वह पाइरूवेट माइटोकॉन्ड्रिया में प्रवेश करता है जहाँ **क्रेब्स चक्र (Krebs Cycle)** चलता है और ऊर्जा **ATP (ऐडेनोसिन ट्राइफॉस्फेट — ऊर्जा की मुद्रा)** के अणुओं के रूप में संचित हो जाती है।\nप्रत्येक माइटोकॉन्ड्रिया **दोहरी झिल्ली** से घिरा होता है: **बाहरी झिल्ली चिकनी और छिद्रित** होती है, जबकि **भीतरी झिल्ली अँगुली जैसे उभारों में अंतर्वलित (मुड़ी)** होती है जिन्हें **अंतःकटक (Cristae)** कहते हैं — यह मुड़ाव रासायनिक अभिक्रियाओं के लिए **पृष्ठीय क्षेत्रफल** कई गुना बढ़ाकर तीव्र ATP उत्पादन संभव बनाता है!',
          },
          bullets: [
            {
              en: '**==Endosymbiosis Clue (`Semi-Autonomous Organelles` — Tech Gr-III 2024):==** Both **Mitochondria** and **Plastids** contain **circular DNA + `70S` bacterial-type Ribosomes**, allowing them to replicate and build some of their own proteins independently!',
              hi: '**==अर्ध-स्वायत्त अंगक (Semi-Autonomous — Tech Gr-III PYQ):==** **माइटोकॉन्ड्रिया एवं लवक** दोनों में **स्वयं का DNA तथा `70S` राइबोसोम** उपस्थित होते हैं, जिससे वे कुछ आवश्यक प्रोटीन स्वयं बना लेते हैं — यह दर्शाता है कि इन्होंने प्राचीन एककोशिकीय जीवाणुओं के साथ सहजीवी विकास (Evolution) साझा किया है।',
            },
            {
              en: '**Surface Area Insight (`NCERT Think Q6`):==** Cells maintain hundreds of small mitochondria rather than 1 giant mitochondrion because splitting into tiny units gives **vastly larger total surface area-to-volume ratio** for rapid ATP reactions & fast local diffusion across cytoplasm!',
              hi: '**पृष्ठीय क्षेत्रफल सिद्धांत (सोचिए प्रश्न 6):** कोशिका में 1 विशाल माइटोकॉन्ड्रिया की बजाय अनेक छोटे माइटोकॉन्ड्रिया होने से कुल **सतह क्षेत्रफल बहुत अधिक** बढ़ जाता है और हर भाग को तुरंत ATP मिलता है।',
            },
          ],
          diagramKey: 'mitochondria-cutaway',
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/mitochondrion-tem.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch2/real/chloroplasts-leaf.webp',
            title: {
              en: 'Authentic Electron & Leaf Micrographs: Mammalian Mitochondrion (TEM) & Plant Chloroplasts',
              hi: 'असली प्रयोगशाला चित्र: इलेक्ट्रॉन सूक्ष्मदर्शी से माइटोकॉन्ड्रिया (बाएँ) एवं पादप कोशिकाओं में हरितलवक (दाएँ)',
            },
            caption: {
              en: 'Left (TEM Public Domain): Folded inner Cristae maximizing ATP-generating membrane surface. Right (CC BY-SA): Disc-packed Chloroplasts inside leaf cells.',
              hi: 'बाएँ: असली माइटोकॉन्ड्रिया की मुड़ी हुई अंतःकटक (Cristae) परत। दाएँ: पादप कोशिका भित्तियों के अंदर हरे हरितलवक।',
            },
          },
          inlinePyqIds: [7, 8, 22],
        },
        {
          heading: {
            en: '2. Plastids (Plants Only: Chloro / Chromo / Leuco + Pigments), Vacuoles & Synthetic DNA',
            hi: '2. लवक के 3 प्रकार (हरित, वर्णी, अवर्णी व वर्णक), रसधानी व संश्लेषित DNA (क्रेग वेंटर 2010)',
          },
          conceptStory: {
            en: 'While animals eat food from outside, plants synthesize sugars indoors using solar energy inside specialized double-membraned Plant-ONLY organelles called Plastids (लवक — largest organelles of plant cells!). Based on pigments and function, Plastids take three forms: green Chloroplasts trapping sunlight, colourful Chromoplasts attracting insects for pollination & seed dispersal, and colourless Leucoplasts storing reserve starch, oils, or proteins underground in roots/tubers (explaining why potatoes and Colocasia roots still carry abundant plastids despite having zero chlorophyll!). Meanwhile, mature plant cells devote 50–90% of their room to ONE huge Central Vacuole wrapped in a selectively permeable Tonoplast membrane: water filling its Cell Sap creates internal Turgor Pressure that keeps stems upright—so dehydration collapses vacuole turgor and wilts leaves immediately.',
            hi: 'पादप कोशिकाओं का **सबसे बड़ा कोशिकांग लवक (Plastid)** होता है, जो **केवल पादप कोशिकाओं (जंतु में नहीं)** में पाया जाता है और यह भी दोहरी झिल्ली व स्वयं के DNA युक्त होता है। कार्य व वर्णक के आधार पर इसके **तीन प्रकार** हैं:\n1. **हरितलवक (Chloroplast):** इसमें हरा वर्णक **पर्णहरित / क्लोरोफिल (मैग्नीशियम युक्त)** अर्ध-तरल **पीठिका (Stroma)** के भीतर चक्रिका जैसी **थाइलेकॉइड / ग्रेना** संरचनाओं में रहता है, जो प्रकाश ऊर्जा सोखकर **प्रकाश-संश्लेषण (भोजन व मंड संचय)** करता है।\n2. **वर्णीलवक (Chromoplast — `Chroma = रंग`):** इनमें पर्णहरित के अलावा पीले, नारंगी व लाल रंग के वर्णक होते हैं जो फूलों की पंखुड़ियों व फलों को चटक रंग देकर **परागणकारियों (कीट-पक्षी) को आकर्षित करने व बीज प्रकीर्णन** में मदद करते हैं।\n3. **अवर्णी लवक (Leucoplast — `Leucos = रंगहीन`):** ये रंगहीन होकर **आलू, अरबी (कोलोकेशिया) की जड़ों और बीजों में स्टार्च (मंड), तेल व प्रोटीन का भंडारण** करते हैं।',
          },
          bullets: [
            {
              en: '**==Plant Chromoplast Pigments (`Direct Exam Fact`):==** Tomato / Red Chilli = **Lycopene (`लाइकोपीन`)** | Carrot = **Beta-Carotene (`कैरोटीन`)** | Beetroot = **Betanin (`बीटानिन`)** | Yellow fruits/Turmeric = **Xanthophyll (`ज़ैंथोफिल`)** *(And white flowers reflect all wavelengths equally using Leucoplasts/air spaces—zero coloured pigments! `NCERT Think Q4`)*.',
              hi: '**==प्रमुख पादप फल/सब्जी वर्णक (अति-महत्वपूर्ण RRB तथ्य):==** टमाटर/लाल मिर्च = **लाइकोपीन** | गाजर = **कैरोटीन** | चुकंदर = **बीटानिन (Betanin)** | पीला रंग/हल्दी = **ज़ैंथोफिल (Xanthophyll)**। *(सफेद फूलों में कोई रंगीन वर्णक नहीं होता; सभी किरणें परावर्तित होने से सफेद दिखते हैं)*।',
            },
            {
              en: '**==Vacuoles & Tonoplast (`रसधानी` — ALP 2025):==** Single selectively permeable membrane (**Tonoplast**) enclosing **Cell Sap** (water, minerals, sugars, wastes). One giant central vacuole keeps plant **turgid** (loss = **Wilting / मुरझाना**). Animal cells have **very small, temporary vacuoles**.',
              hi: '**==रसधानी एवं टोनोप्लास्ट (ALP 2025):==** पादप कोशिका में **एक बड़ी केंद्रीय रसधानी** एकल झिल्ली (**टोनोप्लास्ट**) से घिरी होती है जिसमें **कोशिका-रस** भरा रहता है; यही जल-दबाव से पौधे को कड़क रखती है (पानी घटने पर पौधा मुरझा जाता है)। **जंतु कोशिकाओं में रसधानियाँ अत्यंत छोटी** होती हैं।',
            },
            {
              en: '**==Synthetic Biology Milestone (`NCERT जिज्ञासा-सूत्र — J. Craig Venter, 2010`):==** Mapped complete DNA sequence of simple bacterium ***Mycoplasma mycoides*** via computer, chemically synthesized an exact artificial DNA copy in lab, and transplanted it into an enucleated host bacterium -> cell booted up, grew & divided following the **synthetic DNA** instructions, proving DNA directly runs cell life!',
              hi: '**==संश्लेषिक जीवविज्ञान प्रयोग (जे. क्रेग वेंटर, 2010):==** *माइकोप्लाज्मा माइकोइड्स* जीवाणु का पूरा DNA अनुक्रम पढ़कर प्रयोगशाला में **कृत्रिम DNA** बनाया गया और बिना DNA वाले दूसरे जीवाणु ढाँचे में प्रवेश कराया गया — वह कोशिका नए संश्लेषित DNA के अनुसार बढ़ने और विभाजित होने लगी (अर्थात DNA ही संपूर्ण कोशिका जीवन नियंत्रित करता है)।',
            },
          ],
          diagramKey: 'plastid-chloroplast-tree',
          viralTrick: {
            en: '**Own-DNA Club ("N-M-P"):** Only **N**ucleus, **M**itochondria, and **P**lastids possess their own DNA. All other organelles (ER, Golgi, Lysosome, Vacuole, Ribosome) have ZERO DNA!',
            hi: '**परीक्षा स्मृति सूत्र ("N-M-P"):** केवल तीन कोशिकांगों — **केंद्रक (Nucleus), माइटोकॉन्ड्रिया व लवक (Plastids)** — में ही स्वयं का **DNA** पाया जाता है!',
          },
          inlinePyqIds: [7, 8, 17],
        },
      ],
    },

    {
      id: 'cell-division',
      number: '2.4',
      flowDiagramKey: 'centrosome-division-flow',
      svgLab: 'mitosis-meiosis',
      svgLabTitle: {
        en: 'Interactive Lab 4: Animated Mitosis vs Meiosis Step Simulator (Fig 2.18 & 2.19)',
        hi: 'इंटरैक्टिव लैब 4: समसूत्री बनाम अर्धसूत्री विभाजन स्टेप एनिमेशन',
      },
      title: {
        en: 'Centrosome & Cell Division (Amitosis, Mitosis, Meiosis), Root-Tip Lab & A.K. Sharma',
        hi: 'तारककाय (Centrosome), कोशिका विभाजन (असूत्री, समसूत्री, अर्धसूत्री) व डॉ. अरुण शर्मा',
      },
      summaryTag: { en: 'Section 2.4 • Pages 20–22 + Mitosis Slide', hi: 'भाग 2.4 • पृष्ठ 20–22 + असली विभाजन स्लाइड' },
      blocks: [
        {
          heading: {
            en: '1. Centrosome vs Plant Cell Plate & Complete Comparison of Amitosis, Mitosis & Meiosis',
            hi: '1. तारककाय (Centrosome) तथा विभाजन के 3 प्रकार: असूत्री, समसूत्री व अर्धसूत्री',
          },
          conceptStory: {
            en: 'Even though an adult human feels permanent, your body silently replaces hundreds of billions of worn-out cells (~1% of total cell count) every single day, healing skin cuts and regenerating hair or gut lining! In animal cells, this orderly division is orchestrated by the **Centrosome (`तारककाय`)**, discovered by **Theodor Boveri**—housing two cylindrical **Centrioles** arranged at 90° that spin out spindle fibres pulling chromosomes apart. Mature nerve cells (Neurons) lack a centrosome, which is why brain neurons cannot divide after damage! Plants also lack centrosomes and divide instead by forming an equatorial **Cell Plate** across the middle. Eukaryotic cells divide sequentially via the controlled **Cell Cycle (`कोशिका चक्र`)** into two core divisions alongside primitive prokaryotic **Amitosis**:',
            hi: 'हमारे शरीर में प्रतिदिन अनुमानित रूप से कुल कोशिकाओं की लगभग **$1\\%$ (सैकड़ों अरब)** पुरानी या क्षतिग्रस्त कोशिकाएँ विभाजन द्वारा प्रतिस्थापित होती हैं — तभी कटने पर त्वचा जुड़ती है व बाल उगते हैं। जंतु कोशिकाओं में कोशिका विभाजन का मुख्य संचालन **तारककाय (Centrosome — खोज: टी. बोवेरी)** करता है जिसमें परस्पर लंबवत **दो तारककेंद्र (Two Centrioles)** होते हैं (मस्तिष्क की तंत्रिका कोशिकाओं में यह नहीं होने से वे विभाजन नहीं कर पातीं)। पादप कोशिकाओं में तारककाय के स्थान पर **कोशिका पट्टिका (Cell Plate)** से विभाजन होता है।\nकोशिका विभाजन प्रमुखतः **तीन प्रकार** से होता है:',
          },
          bullets: [
            {
              en: '**1. ==Amitosis (`असूत्री विभाजन` — Primitive):==** Direct constriction of cell nucleus & cytoplasm without spindle fibres or chromosome condensation -> occurs in **Bacteria, Prokaryotes & some lower unicellular organisms**.',
              hi: '**1. ==असूत्री विभाजन (Amitosis):==** जीवाणु, विषाणु-प्रभावित निम्न एककोशिकीय व प्रोकैरियोटिक जीवों में बिना तर्कु तंतु बने मातृ कोशिका बीच से धँसकर सीधे **दो भागों** में बँट जाती है।',
            },
            {
              en: '**2. ==Mitosis (`समसूत्री विभाजन` — Growth & Repair, $2n \\to 2 \\times 2n$):==** Occurs in **99% body (Somatic) cells** (`कायिक कोशिका`). Parent cell replicates DNA and divides once through sequential stages (**Prophase → Metaphase → Anaphase → Telophase**, `Karyokinesis` nuclear split followed by `Cytokinesis`) into **==2 genetically identical daughter cells==** with the SAME chromosome count (`46 -> 46`). Drives embryonic multiplication from 1 single zygote to trillions of cells, **wound healing, regeneration (e.g., lizard tail)** & asexual reproduction. *Error:* Uncontrolled mitosis leads to **Tumours / abnormal chromosome counts**.',
              hi: '**2. ==समसूत्री विभाजन (Mitosis — $2n \\to 2 \\times 2n$):==** शरीर की **$99\\%$ कायिक (Somatic) कोशिकाओं** में होता है। इसमें एक मातृ कोशिका विभाजित होकर **==बिल्कुल समान DNA व समान गुणसूत्र संख्या वाली 2 संतति कोशिकाएँ==** बनाती है (**अवस्थाएँ: प्रोफेज़ → मेटाफेज़ → एनाफेज़ → टेलोफेज़**)। यह शारीरिक वृद्धि, चोट भरने, छिपकली की पूँछ के **पुनरुद्भवन** व अलैंगिक जनन के लिए आवश्यक है *(त्रुटि से अनियंत्रित अर्बुद/Tumour बनता है)*।',
            },
            {
              en: '**3. ==Meiosis (`अर्धसूत्री विभाजन` — Gametes Only, $2n \\to 4 \\times n$):==** Occurs **STRICTLY inside reproductive organs** (Human **Testes -> Sperm**, **Ovaries -> Ovum**; Plant **Anthers -> Pollen**, **Ovary -> Egg cell**). Involves **TWO sequential divisions**:\n• *Meiosis I (Reductional):* Chromosomes split to **HALF (`46 -> 23`)**; homologous exchange (**==Crossing Over==** during its longest phase, **Prophase I**) generates **genetic variation**!\n• *Meiosis II (Equational):* Resembles mitosis, generating **==4 haploid gametes (`n`)==** each with half DNA. When Sperm (`n=23`) + Ovum (`n=23`) fuse at fertilisation, original diploid count (`2n=46`) is restored! *Error:* Causes chromosomal genetic disorders (`Down/Turner/Klinefelter syndromes`), miscarriage or infertility.',
              hi: '**3. ==अर्धसूत्री विभाजन (Meiosis — $2n \\to 4 \\times n$):==** **केवल जनन अंगों की कोशिकाओं** (नर वृषण में **शुक्राणु**, मादा अंडाशय में **अंडाणु**; पादप परागकोश में **परागकण** व अंडाशय में **अंड कोशिका**) में **दो क्रमिक चरणों** में होता है:\n• *प्रथम विभाजन:* गुणसूत्र संख्या घटकर **आधी ($2n \\to n$)** हो जाती है; इसकी सबसे लंबी **Prophase अवस्था में ==Crossing Over (जीन विनिमय)==** होता है जिससे संतानों में **आनुवंशिक विविधता** आती है!\n• *द्वितीय विभाजन:* समसूत्री जैसा होकर अंततः **==4 युग्मक कोशिकाएँ (आधे DNA युक्त)==** बनती हैं। त्रुटि होने पर **आनुवंशिक सिंड्रोम (विकार), गर्भपात या प्रजनन कमी** होती है।',
            },
            {
              en: '**Prof. Arun Kumar Sharma (`वैज्ञानिक-परिचय p.22`):** Renowned Indian botanist & cytogeneticist who pioneered practical lab techniques to study **plant chromosomes**; honoured with the **Shanti Swarup Bhatnagar Prize & Padma Bhushan**.',
              hi: '**डॉ. अरुण कुमार शर्मा (`वैज्ञानिक-परिचय पृष्ठ 22`):** गुणसूत्रों (विशेषकर पादप वर्गिकी व कोशिकीय विधियों) पर शोध हेतु विख्यात भारतीय वनस्पतिशास्त्री — **शांति स्वरूप भटनागर पुरस्कार व पद्म भूषण** से सम्मानित।',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/real-root-mitosis.webp',
            title: {
              en: 'Real Microscope Slide (Activity 2.5): Meristematic Onion Root Tip Dividing Cells',
              hi: 'असली प्रयोगशाला स्लाइड (क्रियाकलाप 2.5): प्याज के वर्धनशील मूलाग्र में समसूत्री विभाजन की अवस्थाएँ',
            },
            caption: {
              en: 'Fixed with Aceto-alcohol (Glacial acetic acid : Ethanol :: 1:3) for 24h, stored in 70% Ethanol, softened in dil. HCl & stained pink with Aceto-carmine.',
              hi: 'एसीटो-ऐल्कोहॉल (`1:3`) स्थिरीकरण, तनु HCl व एसीटो-कार्मिन अभिरंजन द्वारा तैयार वास्तविक प्याज मूलाग्र स्लाइड।',
            },
          },
          inlinePyqIds: [13, 14, 15],
        },
      ],
    },

    {
      id: 'cell-theory-cancer-pcd',
      number: '2.5',
      flowDiagramKey: 'cell-theory-cancer-pcd',
      svgLab: null,
      title: {
        en: 'Cell Theory (1838–1855), Totipotency (1902), Tissue Culture, Contact Inhibition, Cancer & PCD',
        hi: 'कोशिका सिद्धांत, पूर्णशक्तता (1902), ऊतक संवर्धन, संपर्क अवरोध, कैंसर व क्रमादेशित मृत्यु (PCD)',
      },
      summaryTag: { en: 'Section 2.5 • Pages 23–24 + Portraits', hi: 'भाग 2.5 • पृष्ठ 23–24 + ऐतिहासिक चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Classical Cell Theory, Totipotency & Modern Animal Tissue Culture',
            hi: '1. पुरातनी कोशिका सिद्धांत (श्लीडेन-श्वान-विरचो), पूर्णशक्तता व ऊतक संवर्धन तकनीक',
          },
          conceptStory: {
            en: 'Two German scientists independently noticed a unifying law in 1838–39: Botanist Matthias Schleiden (1838) established that all plant tissues consist of cells, and Zoologist Theodor Schwann (1839) demonstrated that all animal bodies are likewise composed of cells (and discovered the thin outer plasma membrane). Still, neither explained *how new cells originate*—until Rudolf Virchow declared in 1855 *"Omnis cellula e cellula"* ("all new cells arise ONLY from pre-existing living cells"). Later in 1902, Austrian botanist Gottlieb Haberlandt revealed a breathtaking power inside plant cells: **Totipotency (`पूर्णशक्तता`)**, proving any single living mature plant cell given balanced sterile nutrition can regenerate a complete new plant—founding **Plant Tissue Culture**! Similarly, **Animal Tissue Culture** grows isolated animal cells externally inside sterile, temperature-, humidity- & pH-regulated nutrient media to manufacture vaccines, antibodies, and medicines.',
            hi: 'जर्मन वनस्पतिशास्त्री **मैथियास श्लीडेन (1838)** ने सिद्ध किया कि सभी पादप कोशिकाओं से बने हैं, तथा जर्मन प्राणिशास्त्री **थियोडोर श्वान (1839)** ने पाया कि सभी जंतु भी कोशिकाओं से ही निर्मित हैं — इन दोनों ने मिलकर मूल **कोशिका सिद्धांत (Cell Theory)** प्रतिपादित किया। वर्ष **1855** में **रुडोल्फ़ विरचो (Rudolf Virchow)** ने इसका विस्तार करते हुए कहा कि **नई कोशिकाएँ केवल पूर्वविद्यमान कोशिकाओं के विभाजन से ही उत्पन्न होती हैं (*Omnis cellula e cellula*)**।\nवर्ष **1902** में ऑस्ट्रियाई वनस्पतिशास्त्री **गॉटलीब हैबरलैंड्ट** ने **पूर्णशक्तता (Totipotency)** की अवधारणा दी — अर्थात अनुकूल पोषक माध्यम मिलने पर एक परिपक्व जीवित पादप कोशिका से भी **संपूर्ण पादप** विकसित हो सकता है, जिससे **पादप ऊतक संवर्धन (Tissue Culture)** का जन्म हुआ। आज जंतु कोशिका संवर्धन द्वारा निर्जमीकृत (Sterilized), ताप/pH/नमी-नियंत्रित पोषक माध्यम में भोजन, जैव-रसायन, औषधियाँ व **टीके (Vaccines)** तैयार किए जाते हैं।',
          },
          bullets: [
            {
              en: '**==3 Postulates of Classical Cell Theory:==** (1) Every living organism is made of one or more cells. (2) Cell is the basic structural & functional unit of life. (3) All cells originate solely from **pre-existing cells** *(Virchow 1855)*.',
              hi: '**==कोशिका सिद्धांत के 3 मुख्य नियम:==** (1) सभी सजीव एक या अधिक कोशिकाओं से बने हैं। (2) कोशिका संरचना व कार्य की मूल इकाई है। (3) सभी कोशिकाएँ **पूर्वविद्यमान कोशिकाओं** से बनती हैं।',
            },
            {
              en: '**Exception to Cell Theory (`Group-D Repeat Question`):==** **Viruses, Viroids & Prions** lack cellular machinery and replicate ONLY inside host cells—hence Cell Theory fails on them!',
              hi: '**==कोशिका सिद्धांत का अपवाद:==** **विषाणु (Virus), विषाणुभ व प्रोसंक** अकोशिकीय हैं और मेजबान कोशिका के बाहर निर्जीव रहते हैं — अतः इन पर कोशिका सिद्धांत लागू नहीं होता।',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/schleiden.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch2/real/virchow.webp',
            title: {
              en: 'Matthias Schleiden (1838) & Rudolf Virchow (1855) — Architects of Cell Theory (PD)',
              hi: 'ऐतिहासिक चित्र: मैथियास श्लीडेन (बाएँ) व रुडोल्फ़ विरचो (दाएँ) — कोशिका सिद्धांत के जनक',
            },
            caption: {
              en: 'Alongside zoologist Theodor Schwann (1839), their work unified microbes, plants & humans under one biological law.',
              hi: 'थियोडोर श्वान के साथ इन्होंने सिद्ध किया कि जीवाणु से लेकर विशाल वृक्ष व मनुष्य तक सभी कोशिकाओं से निर्मित हैं।',
            },
          },
          inlinePyqIds: [16, 19],
        },
        {
          heading: {
            en: '2. Contact Inhibition, Tumours (Benign vs Malignant) & Programmed Cell Death (PCD)',
            hi: '2. संपर्क अवरोध, कैंसर अर्बुद (सुदम्य बनाम दुर्दम) एवं क्रमादेशित कोशिका मृत्यु (PCD)',
          },
          conceptStory: {
            en: 'Why do healthy cells stop growing when your cut skin finishes healing, instead of growing forever into a giant lump? Normal animal cells obey a built-in safety switch called **Contact Inhibition (`संपर्क अवरोध`)**: the moment dividing cells touch neighbouring cells tightly, they arrest division! Equally crucial is **Programmed Cell Death / Apoptosis (`क्रमादेशित कोशिका मृत्यु` / PCD)**—an orderly, genetically scheduled self-retirement when cells grow old, mutated, or obsolete. During human embryonic development inside the womb, PCD selectively clears away tissue webbing between fingers so five separate digits emerge cleanly! **Cancer cells lose both brakes**: ignoring contact signals, they divide endlessly into masses called **Tumours (`अर्बुद`)**.',
            hi: 'स्वस्थ शरीर में कोशिकाओं की वृद्धि दो सख्त नियमों से नियंत्रित होती है:\n1. **संपर्क अवरोध (Contact Inhibition):** सामान्य जंतु कोशिकाएँ विभाजित होते समय जैसे ही पड़ोसी कोशिकाओं के संपर्क में आती हैं, विभाजन स्वयं रोक लेती हैं। *(पादप कोशिकाएँ अपनी कठोर भित्ति के कारण ऐसा संपर्क अवरोध नहीं दर्शातीं।)*\n2. **क्रमादेशित कोशिका मृत्यु (Programmed Cell Death / PCD):** जब कोई कोशिका पुरानी या अनावश्यक हो जाती है, तो वह आनुवंशिक रूप से नियंत्रित व्यवस्थित मृत्यु से गुजरती है। इसी प्रक्रिया के कारण **भ्रूण के विकास में अँगुलियों के बीच की अवांछित कोशिकाएँ हटती हैं** (इसके बिना अँगुलियाँ जालीदार/आपस में जुड़ी रह जातीं)।\nजब कोशिकाएँ यह नियंत्रण खो देती हैं, तो वे अनियंत्रित होकर **कैंसर अर्बुद (Tumours)** बना लेती हैं।',
          },
          bullets: [
            {
              en: '**==Benign vs Malignant Tumours (`NCERT जिज्ञासा-सूत्र p.23`):==**\n• **Benign Tumour (`सुदम्य अर्बुद`):** Remains strictly localized at its origin site (does not invade distant tissues).\n• **Malignant / Cancerous Tumour (`दुर्दम अर्बुद`):** Rapidly invades adjacent tissues and spreads through blood/lymph to distant organs (**Metastasis**) forming new tumours!',
              hi: '**==सुदम्य बनाम दुर्दम अर्बुद (NCERT पृष्ठ 23):==**\n• **सुदम्य (Benign):** एक ही स्थान तक सीमित रहता है व आसपास नहीं फैलता।\n• **दुर्दम (Malignant — वास्तविक कैंसर):** निकटवर्ती ऊतकों में प्रवेश कर शरीर के अन्य भागों तक फैलकर नए अर्बुद बनाता है।',
            },
            {
              en: '**Plant Tumours (`Exercise Q13 Concept`):==** Because plants lack contact inhibition and circular blood systems, bacteria/insects can trigger localized crown **galls/swellings** on plant stems, yet they do NOT spread destructively as malignant metastasis across the plant.',
              hi: '**पादपों में अर्बुद (अभ्यास प्रश्न 13):** पौधों में संपर्क अवरोध नहीं होता; सूक्ष्मजीवों से स्थानीय गाँठ बन सकती है किंतु जंतुओं जैसा फैलने वाला दुर्दम कैंसर नहीं होता।',
            },
          ],
          inlinePyqIds: [2, 3, 21, 22],
        },
      ],
    },
  ],

  confusionBreakers: [
    {
      pair: { en: 'Diffusion vs Osmosis', hi: 'विसरण (Diffusion) बनाम परासरण (Osmosis)' },
      left: { en: 'Any molecule/gas/solute spreads High -> Low; NO membrane required (e.g. lung gas exchange, ink in water).', hi: 'गैस, द्रव या ठोस के कण उच्च से निम्न सांद्रता; झिल्ली की आवश्यकता नहीं (जैसे फेफड़ों में $O_2/CO_2$)।' },
      right: { en: 'Strictly WATER molecules cross a Selectively Permeable Membrane from dilute to concentrated side.', hi: 'केवल जल के अणु वरणात्मक पारगम्य झिल्ली के पार तनु से सांद्र विलयन की ओर जाते हैं।' },
    },
    {
      pair: { en: 'Cell Wall vs Plasma Membrane Permeability', hi: 'कोशिका भित्ति बनाम कोशिका झिल्ली पारगम्यता' },
      left: { en: 'Cell Wall = Freely Permeable (dead Cellulose / Chitin / Peptidoglycan shield).', hi: 'कोशिका भित्ति = पूर्ण पारगम्य (सभी जल व घुलित खनिज आर-पार जा सकते हैं)।' },
      right: { en: 'Plasma Membrane = Selectively Permeable (living $7\\text{--}10\\text{ nm}$ Lipid+Protein bilayer).', hi: 'कोशिका झिल्ली = वरणात्मक/चुनिंदा पारगम्य ($7\\text{--}10\\text{ nm}$ लिपिड व प्रोटीन)।' },
    },
    {
      pair: { en: 'Cell Wall Chemistry Across Kingdoms', hi: 'पादप, कवक व जीवाणु भित्ति में रासायनिक अंतर' },
      left: { en: 'Plants = Cellulose (Roughage in human food) | Bacteria = Peptidoglycan.', hi: 'पादप = सेल्युलोस (आहार में रुक्षांश) | जीवाणु = पेप्टिडोग्लाइकन।' },
      right: { en: 'Fungi = Chitin | Absent completely in Animal cells & *Mycoplasma*.', hi: 'कवक (Fungi) = काइटिन | जंतु कोशिका व *माइकोप्लाज्मा* में भित्ति अनुपस्थित।' },
    },
    {
      pair: { en: 'Prokaryotic 70S vs Eukaryotic 80S Ribosomes', hi: '70S बनाम 80S राइबोसोम (S = स्वेडबर्ग गुणांक)' },
      left: { en: '70S (50S + 30S) -> Bacteria, Nucleoid cells & INSIDE Mitochondria / Plastids.', hi: '70S (50S + 30S) -> जीवाणुओं तथा माइटोकॉन्ड्रिया एवं हरितलवक के भीतर।' },
      right: { en: '80S (60S + 40S) -> Eukaryotic cytoplasm and attached onto Rough ER (RER).', hi: '80S (60S + 40S) -> यूकैरियोटिक कोशिकाद्रव्य तथा खुरदुरी ER पर।' },
    },
    {
      pair: { en: 'Largest vs Longest Human Cell', hi: 'मानव की सबसे बड़ी बनाम सबसे लंबी कोशिका' },
      left: { en: 'Largest Human Cell = Female Ovum (`अंडाणु`) [Overall world: Ostrich Egg].', hi: 'मानव में सबसे बड़ी कोशिका = अंडाणु (Ovum) [विश्व में: शुतुरमुर्ग का अंडा]।' },
      right: { en: 'Longest Human Cell = Neuron (`तंत्रिका कोशिका`, up to 1 m; lacks Centrosome!).', hi: 'मानव में सबसे लंबी कोशिका = तंत्रिका कोशिका (Neuron; तारककाय नहीं होने से विभाजन नहीं)।' },
    },
    {
      pair: { en: 'Necrosis vs Apoptosis (PCD)', hi: 'नेक्रोसिस बनाम क्रमादेशित मृत्यु (Apoptosis/PCD)' },
      left: { en: 'Necrosis = Accidental/diseased cell death from trauma, toxins or lack of oxygen.', hi: 'नेक्रोसिस = चोट, रोग या जहर से होने वाली असामान्य व अनियंत्रित कोशिका मृत्यु।' },
      right: { en: 'PCD / Apoptosis = Genetically programmed self-cleanup (e.g. separates embryo fingers!).', hi: 'PCD = शरीर के संतुलन व भ्रूण की अँगुलियाँ अलग करने हेतु आनुवंशिक रूप से नियंत्रित मृत्यु।' },
    },
  ],

  pioneers: [
    {
      name: { en: 'Robert Hooke (1665)', hi: 'रॉबर्ट हुक (1665)' },
      country: { en: 'England • Book: Micrographia', hi: 'इंग्लैंड • पुस्तक: माइक्रोग्राफिया' },
      badge: { en: 'First Cell (Dead Cork)', hi: 'Father of Cytology' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/hooke-microscope-1665.webp',
      fact: {
        en: 'Used self-made $200\\text{--}300\\times$ compound microscope on thin dead **Cork slice** -> named box-like rooms **"Cell"**.',
        hi: 'स्व-निर्मित $200\\text{--}300\\times$ सूक्ष्मदर्शी से कॉर्क की छाल में खाली कोष्ठ देखे और **"सेल"** नाम दिया।',
      },
    },
    {
      name: { en: 'Antonie van Leeuwenhoek (1674)', hi: 'एंटोनी वॉन ल्यूवेनहॉक (1674)' },
      country: { en: 'Netherlands • Microbiology Pioneer', hi: 'नीदरलैंड्स • जीवाणु विज्ञान जनक' },
      badge: { en: 'First LIVING Cell', hi: 'पहली जीवित कोशिका' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/leeuwenhoek.webp',
      fact: {
        en: 'Crafted superior single-lens microscopes and observed **first free-living cells** (bacteria & protozoa in pond water).',
        hi: 'तालाब के जल में पहली बार **जीवित कोशिका (जीवाणु/प्रोटोजोआ)** देखी।',
      },
    },
    {
      name: { en: 'Schleiden (1838), Schwann (1839) & Virchow (1855)', hi: 'श्लीडेन, श्वान एवं विरचो' },
      country: { en: 'German Trio', hi: 'जर्मन वैज्ञानिक त्रयी' },
      badge: { en: 'Classical Cell Theory', hi: 'कोशिका सिद्धांत' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/schwann.webp',
      fact: {
        en: 'Schleiden (Plants = cells), Schwann (Animals = cells), Virchow ("*Omnis cellula e cellula*" — from pre-existing cells).',
        hi: 'श्लीडेन (पादप कोशिका), श्वान (जंतु कोशिका) व विरचो (नई कोशिका पूर्वविद्यमान कोशिका से बनती है)।',
      },
    },
    {
      name: { en: 'Camillo Golgi (1898)', hi: 'कैमिलो गॉल्जी (1898)' },
      country: { en: 'Italy • Nobel Laureate', hi: 'इटली • नोबेल विजेता' },
      badge: { en: 'Golgi Apparatus', hi: 'गॉल्जी उपकरण' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/camillo-golgi.webp',
      fact: {
        en: 'Discovered stacked cisternae in **Barn Owl nerve cells** using silver staining ("black reaction"); confirmed later by EM.',
        hi: '**श्वेत उल्लू (Barn Owl)** की तंत्रिका कोशिका में सिल्वर अभिरंजन द्वारा गॉल्जीकाय की खोज की।',
      },
    },
    {
      name: { en: 'Gottlieb Haberlandt (1902)', hi: 'गॉटलीब हैबरलैंड्ट (1902)' },
      country: { en: 'Austria • Botanist', hi: 'ऑस्ट्रिया • वनस्पतिशास्त्री' },
      badge: { en: 'Totipotency', hi: 'पूर्णशक्तता (Totipotency)' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/schleiden.webp',
      fact: {
        en: 'Demonstrated that any mature living plant cell can regenerate a full plant under right nutrition -> **Plant Tissue Culture**.',
        hi: 'बताया कि एक जीवित पादप कोशिका सही पोषण से संपूर्ण पादप बना सकती है (ऊतक संवर्धन की नींव)।',
      },
    },
    {
      name: { en: 'A.K. Sharma, Watson-Crick & J.C. Venter', hi: 'डॉ. अरुण शर्मा, वाटसन-क्रिक व क्रेग वेंटर' },
      country: { en: 'Modern Cytogenetics & DNA', hi: 'आधुनिक आनुवंशिकी एवं संश्लेषिक DNA' },
      badge: { en: 'India + DNA Milestones', hi: 'आधुनिक मील के पत्थर' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/virchow.webp',
      fact: {
        en: '**A.K. Sharma:** Padma Bhushan & Bhatnagar winner for plant chromosome studies. **Watson & Crick (1953):** DNA Double Helix. **Venter (2010):** Built synthetic *Mycoplasma mycoides* genome.',
        hi: '**डॉ. अरुण शर्मा:** पादप गुणसूत्र शोध हेतु पद्म भूषण व भटनागर सम्मान। **वाटसन-क्रिक:** DNA डबल हेलिक्स। **क्रेग वेंटर (2010):** कृत्रिम जीवाणु DNA निर्माण।',
      },
    },
  ],

  visualGallery: [
    {
      id: 'vis-sem-stomata',
      figRef: { en: 'Figures 2.3 & 2.4', hi: 'चित्र 2.3 एवं 2.4' },
      title: {
        en: 'Scanning Electron Microscope (SEM) & Colocasia Leaf Stomata Micrograph',
        hi: 'इलेक्ट्रॉन सूक्ष्मदर्शी (SEM) एवं कोलोकेशिया पत्ती के रंध्र (Stomata)',
      },
      imageUrl: '/ncert-notes/class9-bio-ch2/sem-colocasia-stomata.webp',
      hotspots: [
        {
          en: 'Electron Beam replaces visible light -> resolves down to **nanometre** ($10^{-9}\\text{ m}$) scale.',
          hi: 'प्रकाश के बजाय इलेक्ट्रॉन पुंज से **$1\\text{ nm}$** स्तर तक की सूक्ष्म संरचनाएं स्पष्ट दिखती हैं।',
        },
        {
          en: '*Colocasia* lower surface reveals bean-shaped **Guard Cells** surrounding **Stomatal pores** ($0.05\\text{ mm}$ scale).',
          hi: '*कोलोकेशिया* पत्ती की निचली सतह पर **रंध्र (Stomata)** और द्वार कोशिकाएँ दिखाई देती हैं।',
        },
      ],
    },
    {
      id: 'vis-onion-cheek',
      figRef: { en: 'Figures 2.8 & 2.9 (Activity 2.3)', hi: 'चित्र 2.8 एवं 2.9 (क्रियाकलाप 2.3)' },
      title: {
        en: 'Safranin Onion Peel vs 20% Sugar Plasmolysis vs Methylene Blue Cheek Cells',
        hi: 'सैफ्रेनीन प्याज झिल्ली बनाम 20% चीनी जीवद्रव्य कुंचन बनाम मेथिलीन ब्लू गाल कोशिका',
      },
      imageUrl: '/ncert-notes/class9-bio-ch2/onion-cheek-microscopy.webp',
      hotspots: [
        {
          en: 'Left (**Safranin Pink**): Rigid brick-like rectangular plant Onion / *Rhoeo* epidermis with Cell Wall.',
          hi: 'बायाँ (**सैफ्रेनीन**): ईंट की तरह सजी हुई कठोर कोशिका भित्ति युक्त पादप कोशिकाएँ।',
        },
        {
          en: 'Middle (**20% Sugar**): **Plasmolysis** — outer Cellulose wall stays firm while inner cytoplasm contracts inward!',
          hi: 'मध्य (**20% चीनी घोल**): **जीवद्रव्य कुंचन** — भित्ति स्थिर है, अंदर का जीवद्रव्य संकुचित हो गया!',
        },
        {
          en: 'Right (**Methylene Blue**): Irregular animal cheek epithelial cells (**no cell wall**, dark Nucleus, light Cytoplasm).',
          hi: 'दायाँ (**मेथिलीन ब्लू**): अनियमित आकार की मानव गाल कोशिकाएँ (**भित्ति अनुपस्थित**, केंद्रक गहरा रंजित)।',
        },
      ],
    },
    {
      id: 'vis-root-mitosis',
      figRef: { en: 'Figures 2.16 & 2.17 (Activity 2.5)', hi: 'चित्र 2.16 एवं 2.17 (क्रियाकलाप 2.5)' },
      title: {
        en: 'Onion Root-Tip Jar & Aceto-Carmine Stained Mitotic Stages',
        hi: 'प्याज की बढ़ती जड़ें एवं एसीटो-कार्मिन से रंजित समसूत्री विभाजन अवस्थाएँ',
      },
      imageUrl: '/ncert-notes/class9-bio-ch2/onion-root-mitosis.webp',
      hotspots: [
        {
          en: 'Fixative Ratio: **Aceto-alcohol (`Glacial Acetic Acid : Ethanol :: 1 : 3`)** for 24h -> store in **70% Ethanol**.',
          hi: 'स्थिरीकरण अनुपात: **एसीटो-ऐल्कोहॉल (ग्लेशियल एसिटिक अम्ल : एथेनॉल :: 1 : 3)** में 24h -> **70% एथेनॉल** संरक्षण।',
        },
        {
          en: 'Softening + Stain: Dilute **HCl** (1–2 drops, 10–15 min) -> **Aceto-carmine stain** + gentle spirit-lamp heating.',
          hi: 'नरम करना व रंजन: तनु **HCl** से कोमल कर **एसीटो-कार्मिन** व हल्की आँच से गुणसूत्र अवस्थाएँ दिखती हैं।',
        },
      ],
    },
  ],

  activities: [
    {
      num: '2.1',
      title: { en: 'Estimating Cell Size Under Microscope (Onion Peel)', hi: 'सूक्ष्मदर्शी द्वारा कोशिका के वास्तविक आमाप का अनुमान लगाना' },
      materials: { en: 'Compound Microscope, transparent mm scale, onion slide', hi: 'प्रकाश सूक्ष्मदर्शी, मिलीमीटर (mm) पारदर्शी मापनी, प्याज झिल्ली स्लाइड' },
      steps: {
        en: '1. Measure circular view diameter with mm scale (e.g., $5\\text{ mm} = 5000\\text{ }\\mu\\text{m}$).\n2. Count onion cells lined straight across diameter (e.g., $25$ cells).\n3. Real cell size $= 5000\\text{ }\\mu\\text{m} / 25 = 200\\text{ }\\mu\\text{m}$. Total zoom $= 10\\times \\times 10\\times = 100\\times$.',
        hi: '1. गोल दिखने वाले दृश्य क्षेत्र का व्यास मापें (उदा. $5\\text{ mm} = 5000\\text{ }\\mu\\text{m}$)।\n2. व्यास के अनुदिश सीधी रेखा में उपस्थित प्याज कोशिकाएँ गिनें (उदा. $25$)।\n3. एक कोशिका का आमाप $= 5000 / 25 = 200\\text{ }\\mu\\text{m}$। कुल आवर्धन ($10\\times \\times 10\\times$) $= 100$ गुना।',
      },
      examTakeaway: { en: 'Formula: $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$. Cell size $= \\text{Field diameter }(\\mu\\text{m}) \\div \\text{Cells along diameter}$.', hi: 'सूत्र: $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$। कोशिका आमाप = माइक्रोमीटर में व्यास ÷ कोशिकाओं की संख्या।' },
      predictQuestion: {
        prompt: { en: 'If field diameter is $4\\text{ mm}$ and $20$ cells lie across it, what is 1 cell width?', hi: 'यदि दृश्य क्षेत्र का व्यास $4\\text{ mm}$ हो और सीधी रेखा में $20$ कोशिकाएँ दिखें, तो 1 कोशिका का आकार?' },
        options: { en: ['100 µm', '200 µm', '400 µm'], hi: ['100 µm', '200 µm', '400 µm'] },
        correctIndex: 1,
        reason: { en: '$4\\text{ mm} = 4000\\text{ }\\mu\\text{m}$; therefore $4000 / 20 = \\mathbf{200\\text{ }\\mu\\text{m}}$!', hi: '$4\\text{ mm} = 4000\\text{ }\\mu\\text{m}$; अतः $4000 / 20 = \\mathbf{200\\text{ }\\mu\\text{m}}$!' },
      },
    },
    {
      num: '2.2',
      title: { en: 'Potato Cube Osmosis (Plain Water vs 20% Salt/Sugar)', hi: 'आलू के टुकड़ों द्वारा परासरण प्रयोग (सादा जल बनाम 20% नमक/चीनी)' },
      materials: { en: '2 equal potato cubes, balance, Beaker A (water) & Beaker B (20% solution)', hi: 'समान आकार के 2 आलू के टुकड़े, तुला, बीकर क (सादा जल) व बीकर ख (20% नमक/चीनी)' },
      steps: {
        en: '1. Weigh both cubes before immersing in Beaker A (water) and Beaker B (20% solution).\n2. Wait 1 hour undisturbed & measure final mass.',
        hi: '1. प्रारंभिक भार तौल कर बीकर क (साधारण जल) व बीकर ख ($20\\%$ नमक/चीनी) में 1 घंटे रखें।\n2. एक घंटे पश्चात् दोनों का अंतिम भार मापकर अंतर निकालें।',
      },
      examTakeaway: { en: 'Beaker A (Hypotonic) absorbs water & gains weight; Beaker B (Hypertonic) loses water by exosmosis and shrinks.', hi: 'बीकर क (सादा जल) का आलू जल अंदर आने से भारी व बड़ा होगा; बीकर ख ($20\\%$ घोल) का आलू जल बाहर निकलने से सिकुड़ेगा व हल्का होगा।' },
      predictQuestion: {
        prompt: { en: 'After 1h in 20% sugar solution (Beaker B), potato weight will:', hi: '20% चीनी के विलयन (बीकर ख) में 1 घंटे बाद आलू के टुकड़े के भार में क्या परिवर्तन होगा?' },
        options: { en: ['Increase (Endosmosis)', 'Decrease (Exosmosis)', 'Stay identical'], hi: ['बढ़ जाएगा (अंतःपरासरण)', 'कम हो जाएगा (बहिःपरासरण)', 'समान रहेगा'] },
        correctIndex: 1,
        reason: { en: '$20\\%$ sugar outside is Hypertonic -> water exits living potato cells via osmosis -> weight decreases.', hi: 'बाहर गाढ़ा घोल (अतिपरासारी) होने से जल आलू से बाहर निकलता है, अतः भार घटता है।' },
      },
    },
    {
      num: '2.3',
      title: { en: 'Onion/Rhoeo (Safranin) vs Cheek (Methylene Blue) + 20% Sugar Plasmolysis', hi: 'प्याज (सैफ्रेनीन) बनाम मानव कपोल (मेथिलीन ब्लू) + जीवद्रव्य कुंचन' },
      materials: { en: 'Onion/Rhoeo peel + Safranin | Cheek swab + Methylene Blue | 20% sugar drop', hi: 'प्याज/रोइओ झिल्ली + सैफ्रेनीन | गाल खुरचन + मेथिलीन ब्लू | 20% चीनी घोल' },
      steps: {
        en: '1. Stain plant peel with **Safranin** (box-like rigid cell walls); stain human cheek cells with **Methylene Blue** (irregular border).\n2. Wait 30 min in 20% sugar solution -> Plant protoplasm shrinks inward away from intact cell wall (**Plasmolysis**); Cheek cell shrivels entirely.',
        hi: '1. पादप झिल्ली को **सैफ्रेनीन** से (नियमित बॉक्स आकार) व मानव कपोल को **मेथिलीन ब्लू** से अभिरंजित करें (अनियमित आकार)।\n2. $20\\%$ चीनी घोल में 30 मिनट बाद पादप भित्ति स्थिर रहकर अंदर का द्रव्य सिकुड़ता है (**जीवद्रव्य कुंचन**), जबकि कपोल कोशिका पूरी संकुचित हो जाती है।',
      },
      examTakeaway: { en: 'Plant slide = Safranin | Animal Cheek = Methylene Blue. Nucleus stains DARK while Cytoplasm stains VERY LIGHTLY (`ALP 2025!`).', hi: 'प्याज = सैफ्रेनीन | मानव गाल = मेथिलीन ब्लू। केंद्रक गहरा रंगता है और कोशिकाद्रव्य हल्का (`ALP 2025`)।' },
      predictQuestion: {
        prompt: { en: 'Which region appears MOST lightly stained in a cheek cell slide under light microscope?', hi: 'मेथिलीन ब्लू से रंजित गाल की कोशिका में झिल्ली से घिरा कौन-सा भाग सबसे हल्का रंजित दिखता है?' },
        options: { en: ['Nucleus', 'Cytoplasm', 'Cell Wall'], hi: ['केंद्रक (Nucleus)', 'कोशिकाद्रव्य (Cytoplasm)', 'कोशिका भित्ति'] },
        correctIndex: 1,
        reason: { en: 'Nucleus absorbs deep blue stain; Cytoplasm remains lightly stained (Direct ALP 2025 Shift 9 question!).', hi: 'केंद्रक गहरा रंजित होता है, जबकि कोशिकाद्रव्य हल्का रंजित रहता है (ALP 2025 Shift 9)!' },
      },
    },
    {
      num: '2.4',
      title: { en: 'Structural Audit: Bacterium vs Plant vs Animal Cell (Table 2.1)', hi: 'जीवाणु, पादप और जंतु कोशिका की संरचना तुलना (तालिका 2.1)' },
      materials: { en: 'Prokaryotic Bacteria, Plant & Animal comparison diagrams', hi: 'जीवाणु, पादप एवं जंतु कोशिका के नामांकित आरेख' },
      steps: {
        en: 'Verify each of 6 structures (Membrane, Wall, Cytoplasm, True Nucleus, Nucleoid, Membrane Organelles) across Bacteria, Plant & Animal models.',
        hi: 'तीनों कोशिका मॉडलों में झिल्ली, भित्ति, कोशिकाद्रव्य, सुस्पष्ट केंद्रक, केंद्रकाभ एवं झिल्ली-आबद्ध कोशिकांगों की तुलना करें।',
      },
      examTakeaway: { en: 'Shared by ALL 3: Plasma Membrane + Cytoplasm + Ribosomes. Wall in Bacteria & Plants (chemically distinct!); absent in Animals.', hi: 'तीनों में समान: कोशिका झिल्ली + कोशिकाद्रव्य + राइबोसोम। भित्ति जीवाणु व पादप में है पर जंतु में नहीं।' },
      predictQuestion: {
        prompt: { en: 'Which single feature is present in ALL THREE — Bacteria, Plant, and Animal cells?', hi: 'जीवाणु, पादप और जंतु — इन तीनों प्रकार की कोशिकाओं में कौन-सी संरचना अनिवार्य रूप से पाई जाती है?' },
        options: { en: ['Cell Wall', 'True Nucleus with Nuclear Membrane', 'Plasma Membrane & Ribosomes'], hi: ['कोशिका भित्ति', 'केंद्रक झिल्ली वाला सुस्पष्ट केंद्रक', 'प्लाज्मा झिल्ली एवं राइबोसोम'] },
        correctIndex: 2,
        reason: { en: 'Animals lack a Cell Wall; Bacteria lack a True Nucleus; ALL living cells have Plasma Membrane + Cytoplasm + Ribosomes!', hi: 'जंतु में भित्ति नहीं और जीवाणु में केंद्रक झिल्ली नहीं — पर प्लाज्मा झिल्ली व राइबोसोम तीनों में होते हैं।' },
      },
    },
    {
      num: '2.5',
      title: { en: 'Onion Root Tip Meristem Squash (Mitosis Stages Observation)', hi: 'प्याज की वर्धनशील जड़ों (मूलाग्र) में समसूत्री विभाजन अवस्थाओं का अवलोकन' },
      materials: { en: 'Onion bulb jar (5–6 days), Aceto-alcohol (1:3), 70% ethanol, dil. HCl, Aceto-carmine stain', hi: 'जल में उगा प्याज कंद, एसीटो-ऐल्कोहॉल (1:3), 70% एथेनॉल, तनु HCl, एसीटो-कार्मिन' },
      steps: {
        en: '1. Cut 2–3 cm new roots; fix 24h in Aceto-alcohol (Glacial acetic acid : Ethanol :: 1:3) -> preserve in 70% Ethanol.\n2. Soften tissue with 1–2 drops dil. HCl (10–15 min), wash, stain with **Aceto-carmine**, gently warm & thumb-squash under coverslip.',
        hi: '1. 5–6 दिन में उगी 2–3 cm जड़ों को एसीटो-ऐल्कोहॉल (ग्लेशियल एसिटिक अम्ल : एथेनॉल :: 1:3) में 24 घंटे रखकर 70% एथेनॉल में सहेजें।\n2. तनु HCl से ऊतक नरम कर **एसीटो-कार्मिन** डालें, हल्का गर्म करके अँगूठे से धीरे दबाकर विभाजन अवस्थाएँ देखें।',
      },
      examTakeaway: { en: 'Why onion root tip? Meristematic cells at root tip have prominent nuclei, dense cytoplasm & NO vacuoles (`Group D 2025 + Tech Gr-III 2024`) to divide rapidly!', hi: 'मूलाग्र में विभज्योतक कोशिकाएँ सक्रिय विभाजन करती हैं — इनमें स्पष्ट केंद्रक, सघन कोशिकाद्रव्य व रसधानी का अभाव होता है (`Group D 2025`)!' },
      predictQuestion: {
        prompt: { en: 'Which chemical ratio prepares Aceto-alcohol fixative in NCERT Activity 2.5?', hi: 'क्रियाकलाप 2.5 में एसीटो-ऐल्कोहॉल तैयार करने हेतु ग्लेशियल एसिटिक अम्ल : एथेनॉल का सही अनुपात क्या है?' },
        options: { en: ['1 : 3', '3 : 1', '1 : 1'], hi: ['1 : 3', '3 : 1', '1 : 1'] },
        correctIndex: 0,
        reason: { en: 'Aceto-alcohol fixative = Glacial Acetic Acid : Ethanol :: 1 : 3 (stored later in 70% Ethanol).', hi: 'एसीटो-ऐल्कोहॉल = ग्लेशियल एसिटिक अम्ल : एथेनॉल :: 1 : 3 तथा संरक्षण 70% एथेनॉल में!' },
      },
    },
  ],

  tables: [
    {
      id: 'table-2-1',
      title: { en: 'NCERT Table 2.1 — Structural Audit: Bacterium vs Plant vs Animal Cell', hi: 'NCERT तालिका 2.1 — संरचना के आधार पर जीवाणु, पादप एवं जंतु कोशिका की तुलना' },
      headers: {
        en: ['#', 'Cell Structure', 'Bacteria (Prok.)', 'Plant Cell', 'Animal Cell'],
        hi: ['क्र.', 'कोशिका संरचनाएँ', 'जीवाणु कोशिका', 'पादप कोशिका', 'जंतु कोशिका'],
      },
      rows: [
        ['1', { en: 'Plasma Membrane', hi: 'कोशिका झिल्ली' }, { en: 'Present ✓', hi: 'उपस्थित ✓' }, { en: 'Present ✓', hi: 'उपस्थित ✓' }, { en: 'Present ✓', hi: 'उपस्थित ✓' }],
        ['2', { en: 'Cell Wall', hi: 'कोशिका भित्ति' }, { en: 'Peptidoglycan ✓', hi: 'उपस्थित (पेप्टिडोग्लाइकन) ✓' }, { en: 'Cellulose ✓', hi: 'उपस्थित (सेल्युलोस) ✓' }, { en: 'Absent ✗', hi: 'अनुपस्थित ✗' }],
        ['3', { en: 'Cytoplasm', hi: 'कोशिकाद्रव्य' }, { en: 'Present ✓', hi: 'उपस्थित ✓' }, { en: 'Present ✓', hi: 'उपस्थित ✓' }, { en: 'Present ✓', hi: 'उपस्थित ✓' }],
        ['4', { en: 'Well-Defined Membrane Nucleus', hi: 'सुस्पष्ट केंद्रक (झिल्ली से घिरा)' }, { en: 'Absent ✗', hi: 'अनुपस्थित ✗' }, { en: 'Present ✓', hi: 'उपस्थित ✓' }, { en: 'Present ✓', hi: 'उपस्थित ✓' }],
        ['5', { en: 'Nucleoid (Membrane-less DNA)', hi: 'आद्य केंद्रक / केंद्रकाभ (झिल्ली रहित)' }, { en: 'Present ✓', hi: 'उपस्थित ✓' }, { en: 'Absent ✗', hi: 'अनुपस्थित ✗' }, { en: 'Absent ✗', hi: 'अनुपस्थित ✗' }],
        ['6', { en: 'Membrane-Bound Organelles', hi: 'झिल्ली-आबद्ध कोशिकांग' }, { en: 'Absent ✗', hi: 'अनुपस्थित ✗' }, { en: 'Present (+Plastids) ✓', hi: 'उपस्थित (+लवक) ✓' }, { en: 'Present (+Centrosome) ✓', hi: 'उपस्थित (+तारककाय) ✓' }],
      ],
    },
    {
      id: 'table-2-2',
      title: { en: 'NCERT Table 2.2 — Prokaryotic vs Eukaryotic Complete Contrast (+ Ribosome Rule)', hi: 'NCERT तालिका 2.2 — पूर्वकेंद्रकी एवं सुकेंद्रकी कोशिका के मध्य तुलना' },
      headers: {
        en: ['Feature', 'Prokaryotic Cell (पूर्वकेंद्रकी)', 'Eukaryotic Cell (सुकेंद्रकी)'],
        hi: ['विशेषताएँ', 'पूर्वकेंद्रकी कोशिका (Prokaryotic)', 'सुकेंद्रकी कोशिका (Eukaryotic)'],
      },
      rows: [
        [{ en: 'Genetic Material Region', hi: 'आनुवंशिक क्षेत्र' }, { en: 'Nucleoid (Membrane-less naked DNA)', hi: 'आद्य केंद्रक / केंद्रकाभ (उपस्थित, झिल्ली नहीं)' }, { en: 'True Membrane-bound Nucleus', hi: 'सुस्पष्ट केंद्रक (द्विपरती केंद्रक झिल्ली युक्त)' }],
        [{ en: 'Typical Diameter', hi: 'सामान्य कोशिका व्यास' }, { en: '1 to 10 µm', hi: '1 से 10 µm' }, { en: '10 to 100 µm', hi: '10 से 100 µm' }],
        [{ en: 'Cells per Organism', hi: 'जीव में कोशिका संख्या' }, { en: 'Usually Unicellular (e.g., Bacteria, Cyanobacteria)', hi: 'सामान्यतः एककोशिकीय' }, { en: 'Unicellular or Multicellular (Protists, Fungi, Plants, Animals)', hi: 'एककोशिकीय या बहुकोशिकीय' }],
        [{ en: 'Chromosome Count', hi: 'गुणसूत्र संख्या' }, { en: 'Single (1 circular DNA)', hi: 'केवल 1 (एकल गुणसूत्र)' }, { en: 'More than 1 (Linear DNA + Histones)', hi: 'एक से अधिक गुणसूत्र' }],
        [{ en: 'Ribosome Type', hi: 'राइबोसोम प्रकार' }, { en: '70S (50S + 30S subunits)', hi: '70S (50S + 30S)' }, { en: '80S (60S + 40S) [+ 70S in Mito/Plastid]', hi: '80S (60S + 40S) [+ Mito/लवक में 70S]' }],
        [{ en: 'Membrane-Bound Organelles', hi: 'झिल्ली-आबद्ध कोशिकांग' }, { en: 'Absent', hi: 'अनुपस्थित' }, { en: 'Present (Mitochondria, ER, Golgi, Lysosome...)', hi: 'उपस्थित' }],
      ],
    },
    {
      id: 'table-organelles-master',
      title: { en: 'Master Organelles Sheet: Membrane Count, Own DNA, Function & Exam Nickname', hi: 'सभी कोशिकांगों की मास्टर सारणी (झिल्ली संख्या, स्वयं का DNA व परीक्षा उपनाम)' },
      headers: {
        en: ['Organelle', 'Membrane', 'Own DNA?', 'Core Function', 'Exam Nickname'],
        hi: ['कोशिकांग', 'झिल्ली', 'स्वयं DNA?', 'मुख्य कार्य', 'परीक्षा उपनाम'],
      },
      rows: [
        [{ en: 'Nucleus', hi: 'केंद्रक' }, { en: 'Double (with Pores)', hi: 'दोहरी (छिद्रयुक्त)' }, { en: 'Yes ✓', hi: 'हाँ ✓' }, { en: 'Master control, genes & chromatin storage', hi: 'कोशिका नियंत्रण व वंशागति' }, { en: 'Control Centre / Brain', hi: 'कोशिका का दिमाग' }],
        [{ en: 'Mitochondria', hi: 'माइटोकॉन्ड्रिया' }, { en: 'Double (Folded Cristae)', hi: 'दोहरी (अंतःकटक)' }, { en: 'Yes (+70S) ✓', hi: 'हाँ ✓' }, { en: 'Aerobic respiration (Krebs) -> ATP synthesis', hi: 'श्वसन से ATP निर्माण' }, { en: 'Powerhouse', hi: 'ऊर्जा केंद्र / बिजलीघर' }],
        [{ en: 'Plastids (Plants)', hi: 'लवक (केवल पादप)' }, { en: 'Double', hi: 'दोहरी' }, { en: 'Yes (+70S) ✓', hi: 'हाँ ✓' }, { en: 'Chloro (Food), Chromo (Colour), Leuco (Store)', hi: 'भोजन, रंग एवं भंडारण' }, { en: 'Plant Kitchen & Pantry', hi: 'पादप रसोई व गोदाम' }],
        [{ en: 'Ribosome', hi: 'राइबोसोम' }, { en: 'Membrane-less (0)', hi: 'झिल्ली-रहित (0)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'Protein synthesis (Palade 1955)', hi: 'प्रोटीन संश्लेषण' }, { en: 'Protein Factory', hi: 'प्रोटीन की फैक्टरी' }],
        [{ en: 'ER (RER / SER)', hi: 'अंतर्द्रव्यी जालिका' }, { en: 'Single (1)', hi: 'एकल (1)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'RER: Proteins | SER: Lipids + Liver Detox', hi: 'RER: प्रोटीन | SER: वसा/Detox' }, { en: 'Workshop / Passageway', hi: 'निर्माणशाला' }],
        [{ en: 'Golgi Apparatus', hi: 'गॉल्जी उपकरण' }, { en: 'Single (1)', hi: 'एकल (1)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'Modify, sort, package vesicles & build Lysosomes', hi: 'पैकेजिंग व लाइसोसोम निर्माण' }, { en: 'Post Office', hi: 'कोशिका का डाकघर' }],
        [{ en: 'Lysosome', hi: 'लाइसोसोम' }, { en: 'Single (1)', hi: 'एकल (1)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'Hydrolytic clean-up; Sperm Acrosome; Absent in RBC', hi: 'अपशिष्ट पाचन; RBC में अनुपस्थित' }, { en: 'Suicide Bag / Clean-Up', hi: 'आत्महत्या की थैली' }],
        [{ en: 'Vacuole', hi: 'रसधानी' }, { en: 'Single (Tonoplast)', hi: 'एकल (टोनोप्लास्ट)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'Stores Cell Sap & keeps plant cells turgid', hi: 'कोशिका-रस व पादप दृढ़ता' }, { en: 'Storage Tank', hi: 'भंडार टैंक' }],
        [{ en: 'Centrosome (Animals)', hi: 'तारककाय (जंतु)' }, { en: 'Membrane-less (2 Centrioles)', hi: 'झिल्ली-रहित' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'Animal cell division (Absent in Neurons & Plants)', hi: 'जंतु कोशिका विभाजन (तंत्रिका में नहीं)' }, { en: 'Division Spindle Organizer', hi: 'विभाजन संचालक' }],
      ],
    },
    {
      id: 'table-pigments',
      title: { en: 'Plant Pigments & Stored Leucoplasts (Railway High-Yield Table)', hi: 'प्रमुख पादप वर्णक एवं भंडारण लवक (रेलवे परीक्षा विशेष सारणी)' },
      headers: {
        en: ['Crop / Plant Part', 'Plastid Class', 'Specific Pigment / Nutrient', 'Key Exam Function'],
        hi: ['फल / सब्जी / भाग', 'लवक का प्रकार', 'विशिष्ट वर्णक / संचित पदार्थ', 'परीक्षा बिंदु'],
      },
      rows: [
        [{ en: 'Green Leaf (Chlorophyll)', hi: 'हरी पत्ती (पर्णहरित)' }, { en: 'Chloroplast', hi: 'हरितलवक' }, { en: 'Chlorophyll-a/b (Magnesium central atom)', hi: 'पर्णहरित (केंद्र में Mg धातु)' }, { en: 'Sunlight absorption & photosynthesis', hi: 'सूर्य प्रकाश से भोजन निर्माण' }],
        [{ en: 'Tomato / Red Chilli', hi: 'टमाटर / लाल मिर्च' }, { en: 'Chromoplast', hi: 'वर्णीलवक' }, { en: 'Lycopene (`लाइकोपीन`)', hi: 'लाइकोपीन (Lycopene)' }, { en: 'Red pigment attracts frugivores', hi: 'लाल रंग व बीज प्रकीर्णन' }],
        [{ en: 'Carrot (`गाजर`)', hi: 'गाजर (Carrot)' }, { en: 'Chromoplast', hi: 'वर्णीलवक' }, { en: 'Carotene (`कैरोटीन` -> Vit A precursor)', hi: 'कैरोटीन (विटामिन A का पूर्वगामी)' }, { en: 'Bright orange pigment', hi: 'नारंगी रंग प्रदान करना' }],
        [{ en: 'Beetroot (`चुकंदर`)', hi: 'चुकंदर (Beetroot)' }, { en: 'Vacuole/Chromoplast', hi: 'रंगीन वर्णक' }, { en: 'Betanin / Betacyanin (`बीटानिन`)', hi: 'बीटानिन (Betanin)' }, { en: 'Deep purple-red pigment', hi: 'गहरा लाल-बैंगनी रंग' }],
        [{ en: 'Yellow Fruits / Flowers', hi: 'पीले फल / पत्तियाँ' }, { en: 'Chromoplast', hi: 'वर्णीलवक' }, { en: 'Xanthophyll (`ज़ैंथोफिल`)', hi: 'ज़ैंथोफिल (Xanthophyll)' }, { en: 'Attracts pollinators (bees/insects)', hi: 'परागणकारियों को आकर्षित करना' }],
        [{ en: 'Potato / Colocasia Root', hi: 'आलू / अरबी (जड़ व कंद)' }, { en: 'Leucoplast (Amyloplast)', hi: 'अवर्णी लवक' }, { en: 'Starch, Oils & Storage Proteins', hi: 'स्टार्च, वसा व प्रोटीन भंडारण' }, { en: 'Colourless underground food storage', hi: 'भूमिगत रंगहीन भोजन भंडार' }],
      ],
    },
    {
      id: 'table-chromosomes',
      title: { en: 'Chromosome Numbers (2n) in Key Organisms + Sex Determination', hi: 'प्रमुख जीवों में गुणसूत्र संख्या (2n) एवं मानव लिंग निर्धारण' },
      headers: {
        en: ['Organism', 'Diploid (2n) Total', 'Pairs', 'Notable CBT Fact'],
        hi: ['जीव / प्रजाति', 'कुल गुणसूत्र (2n)', 'जोड़े', 'परीक्षा तथ्य'],
      },
      rows: [
        [{ en: 'Human (*Homo sapiens*)', hi: 'मनुष्य (Human)' }, '46', '23 pairs', { en: '22 Autosomes + 1 Sex pair (`44+XY` Male, `44+XX` Female)', hi: '44 कायिक + 2 लिंग गुणसूत्र (`XY`=पुत्र, `XX`=पुत्री)' }],
        [{ en: 'Garden Pea (*Pisum sativum*)', hi: 'मटर (Pea)' }, '14', '7 pairs', { en: 'Used by Gregor Mendel for 7 traits!', hi: 'मेंडल के आनुवंशिक प्रयोगों का आधार' }],
        [{ en: 'Onion (`प्याज`)', hi: 'प्याज (Onion)' }, '16', '8 pairs', { en: 'Studied in Activity 2.5 Root-Tip Mitosis', hi: 'क्रियाकलाप 2.5 मूलाग्र स्लाइड में प्रयुक्त' }],
        [{ en: 'Fruit Fly (*Drosophila*)', hi: 'फल मक्खी (Drosophila)' }, '8', '4 pairs', { en: 'Classic genetics lab organism', hi: 'आनुवंशिकी शोध की प्रसिद्ध मक्खी' }],
        [{ en: 'Rice / Tomato', hi: 'धान (चावल) / टमाटर' }, '24', '12 pairs', { en: 'Important staple crop count', hi: 'प्रमुख कृषि फसल प्रश्न' }],
        [{ en: 'Potato / Chimpanzee', hi: 'आलू / चिम्पांजी' }, '48', '24 pairs', { en: '2 more chromosomes than Humans!', hi: 'मनुष्य से मात्र 1 जोड़ा (2) अधिक' }],
        [{ en: 'Dog (`कुत्ता`)', hi: 'कुत्ता (Dog)' }, '78', '39 pairs', { en: 'High mammalian count example', hi: 'उच्च स्तनधारी गुणसूत्र उदाहरण' }],
      ],
    },
    {
      id: 'table-division-compare',
      title: { en: 'Complete Comparison: Amitosis vs Mitosis vs Meiosis', hi: 'असूत्री, समसूत्री एवं अर्धसूत्री विभाजन का तुलनात्मक अध्ययन' },
      headers: {
        en: ['Parameter', 'Amitosis', 'Mitosis', 'Meiosis'],
        hi: ['तुलना बिंदु', 'असूत्री (Amitosis)', 'समसूत्री (Mitosis)', 'अर्धसूत्री (Meiosis)'],
      },
      rows: [
        [{ en: 'Where it Occurs?', hi: 'कहाँ होता है?' }, { en: 'Bacteria / Prokaryotes', hi: 'जीवाणु व निम्न एककोशिकीय' }, { en: 'Somatic / Body cells (99%)', hi: 'शरीर की कायिक कोशिकाएँ (99%)' }, { en: 'Reproductive organs ONLY (Germ cells)', hi: 'केवल जनन अंग (वृषण/अंडाशय/परागकोश)' }],
        [{ en: 'Daughter Cells Formed', hi: 'कुल संतति कोशिकाएँ' }, '2', { en: '2 Identical cells ($2n \\to 2n$)', hi: '2 समान कोशिकाएँ ($2n \\to 2n$)' }, { en: '4 Gametes ($2n \\to n$ Half DNA)', hi: '4 युग्मक ($2n \\to n$ आधा DNA)' }],
        [{ en: 'Crossing Over / Variation', hi: 'विविधता / Crossing Over?' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'No ✗ (Exact clone)', hi: 'नहीं ✗ (समान प्रतिलिपि)' }, { en: 'Yes ✓ (Prophase-I)', hi: 'हाँ ✓ (Prophase-I में Crossing Over)' }],
        [{ en: 'Biological Role', hi: 'मुख्य उद्देश्य' }, { en: 'Rapid microbial fission', hi: 'तीव्र सरल गुणन' }, { en: 'Growth, Wound Healing & Regeneration', hi: 'शारीरिक वृद्धि व घाव मरम्मत' }, { en: 'Gametes, Sexual Reproduction & Variation', hi: 'युग्मक निर्माण व आनुवंशिक विविधता' }],
      ],
    },
  ],

  inTextQuestions: [
    {
      num: 'Think 1 (p.14)',
      q: { en: 'Why do stationary plants need a cell wall while mobile animals do not?', hi: 'पौधे एक स्थान पर स्थिर रहते हैं; गतिशील जंतुओं की अपेक्षा उनमें कोशिका भित्ति की आवश्यकता के संबंध में तर्क दीजिए।' },
      a: { en: 'Stationary plants face continuous wind, rain, temperature extremes, and osmotic swelling without moving indoors, so a rigid **cellulose cell wall** prevents bursting and keeps stems upright. Animals migrate away from stress and require **cellular flexibility** without a stiff outer box for muscle contraction and movement.', hi: 'पेड़-पौधे मौसम (आंधी, वर्षा) से बचकर भाग नहीं सकते, अतः सुरक्षा, सीधा खड़े रहने व जल भरने पर फटने से बचने के लिए दृढ़ **सेल्युलोस कोशिका भित्ति** आवश्यक है। जंतुओं में भित्ति न होने से कोशिकाओं को **लचीलापन (Cellular Flexibility)** मिलता है जो गति व ऊतक कार्यप्रणाली में सहायक है।' },
    },
    {
      num: 'Think 2 (p.14)',
      q: { en: 'What happens if plant cell wall became as flexible as the plasma membrane?', hi: 'यदि किसी पादप कोशिका की कोशिका भित्ति, कोशिका झिल्ली के समान लचीली हो जाए तो क्या परिणाम होंगे?' },
      a: { en: 'Plants would lose mechanical strength, stems/leaves would wilt and collapse, and cells in rainwater (hypotonic) could over-swell and burst!', hi: 'पादप कोशिकाओं की संरचनात्मक दृढ़ता समाप्त हो जाएगी — तने व पत्तियाँ सीधी न रहकर मुरझा जाएँगी तथा शुद्ध जल में फूलकर फट भी सकती हैं।' },
    },
    {
      num: 'Think 3 (p.14)',
      q: { en: 'Why weigh potato cubes BEFORE placing them into different test liquids (Activity 2.2)?', hi: 'आलू के टुकड़ों को विभिन्न तरल पदार्थों में रखने से पूर्व उनके आरंभिक भार का मापन क्यों महत्वपूर्ण है?' },
      a: { en: 'Without a recorded initial baseline mass, net water gain (endosmosis) or loss (exosmosis) after soaking cannot be scientifically measured or compared.', hi: 'प्रारंभिक भार जाने बिना यह मापना संभव नहीं होगा कि परासरण के बाद आलू के भीतर कितना जल प्रवेश हुआ (भार वृद्धि) या बाहर निकला (भार हानि)।' },
    },
    {
      num: 'Think 4 (p.19)',
      q: { en: 'Do white flower petals contain any coloured plastid pigments? Explain why they appear white.', hi: 'क्या सफेद फूलों में कोई वर्णक होता है? कारण बताइए।' },
      a: { en: 'No—white petals lack coloured Chromoplasts/Chlorophyll. They carry colourless Leucoplasts and tiny intercellular air pockets that reflect all visible light wavelengths equally, appearing white.', hi: 'नहीं, सफेद फूलों में कोई रंगीन वर्णीलवक नहीं होता। इनमें रंगहीन अवर्णी लवक व प्रकाश परावर्तित करने वाली संरचनाएँ होती हैं जो दृश्य प्रकाश के सभी रंगों को बराबर परावर्तित कर सफेद दिखाई देती हैं।' },
    },
    {
      num: 'Think 5 (p.19)',
      q: { en: 'Identify & sketch clues: (i) dense spherical control center, (ii) network extending from nuclear membrane, (iii) rod-shaped respiration & photosynthesis centers.', hi: 'संकेतों से पहचानें: (i) सघन गोल नियंत्रण केंद्र, (ii) केंद्रक आवरण से फैला जाल, (iii) छड़ाकार ऊर्जा व भोजन केंद्र।' },
      a: { en: '(i) **Nucleus**, (ii) **Endoplasmic Reticulum (ER)**, (iii) **Mitochondria** & **Chloroplast** (verify visually inside Interactive Lab 3 above!).', hi: '(i) **केंद्रक (Nucleus)**, (ii) **अंतर्द्रव्यी जालिका (ER)**, (iii) **माइटोकॉन्ड्रिया व हरितलवक** — ऊपर इंटरैक्टिव लैब 3 में प्रत्येक भाग पर टैप करके देखें!' },
    },
    {
      num: 'Think 6 (p.22)',
      q: { en: 'Why do eukaryotic cells contain numerous small mitochondria rather than 1 huge mitochondrion? Relate to surface area.', hi: 'एक कोशिका में 1 विशाल माइटोकॉन्ड्रिया की अपेक्षा अनेक छोटे-छोटे माइटोकॉन्ड्रिया क्यों होते हैं? पृष्ठीय क्षेत्रफल से संबंधित करें।' },
      a: { en: 'Dividing volume into hundreds of small mitochondria creates a dramatically **larger total surface area** for enzymatic ATP reactions and enables rapid ATP distribution throughout cytoplasm.', hi: 'कई छोटे माइटोकॉन्ड्रिया होने से कुल **पृष्ठीय क्षेत्रफल** कई गुना बढ़ जाता है जिससे तीव्र ATP उत्पादन होता है और कोशिका के हर हिस्से को तुरंत ऊर्जा उपलब्ध होती है।' },
    },
    {
      num: 'Think 7 (p.22)',
      q: { en: 'If skin cells underwent Meiosis instead of Mitosis when cut, what would happen to wound repair?', hi: 'यदि त्वचा की कोशिकाएँ कटने पर समसूत्री के बजाय अर्धसूत्री विभाजन करने लगें तो क्या होगा?' },
      a: { en: 'Wound healing would fail because newly generated cells would contain **half chromosomes (`n`)** instead of exact diploid genetic copies (`2n`) required to restore identical skin tissue.', hi: 'नई त्वचा कोशिकाओं में गुणसूत्र आधे (`n`) रह जाएँगे और वे मूल कायिक कोशिकाओं जैसी नहीं रहेंगी — जिससे घाव की सही मरम्मत संभव नहीं हो पाएगी।' },
    },
  ],

  exercises: [
    { num: 1, q: { en: 'Contrast: (i) Plasma membrane vs Cell wall permeability, (ii) RER vs SER structure, (iii) Chloroplast vs Chromoplast pigments.', hi: 'संकेतों के आधार पर अंतर स्पष्ट कीजिए: (i) कोशिका झिल्ली और कोशिका भित्ति (पारगम्यता), (ii) RER और SER (संरचना), (iii) हरितलवक और वर्णीलवक (वर्णक)।' }, a: { en: '(i) Plasma membrane = **Selectively Permeable**; Cell wall = **Freely Permeable**. (ii) RER has **ribosomes attached** (rough); SER **lacks ribosomes** (smooth). (iii) Chloroplast contains green **Chlorophyll**; Chromoplast holds non-green **red/orange/yellow pigments** (carotenoids, lycopene, xanthophyll).', hi: '(i) कोशिका झिल्ली **वरणात्मक पारगम्य**, जबकि कोशिका भित्ति **पूर्ण पारगम्य** होती है। (ii) RER की सतह पर **राइबोसोम जुड़े** होते हैं, जबकि SER पर राइबोसोम नहीं होते। (iii) हरितलवक में हरा **पर्णहरित (Chlorophyll)** होता है, जबकि वर्णीलवक में लाल/नारंगी/पीले अन्य वर्णक होते हैं।' } },
    { num: 2, q: { en: '[NCERT MCQ • Ans: (iii)] Cell X in pure water swells; Cell Y in strong salt shrinks. Which explanation is accurate?', hi: '[MCQ • उत्तर: (iii)] कोशिका X शुद्ध जल में फूलती है और कोशिका Y नमक के सांद्र विलयन में संकुचित होती है — सही स्पष्टीकरण?' }, a: { en: 'Option **(iii)**: Water entered Cell X and exited Cell Y across the plasma membrane via **osmosis**.', hi: 'विकल्प **(iii)**: कोशिका झिल्ली के माध्यम से परासरण द्वारा जल कोशिका X में प्रवेश कर गया और कोशिका Y से बाहर चला गया।' } },
    { num: 3, q: { en: 'Fig 2.20 Label Match: Plant cell parts (i)–(vii) with organelle roles.', hi: 'चित्र 2.20 मिलान: पादप कोशिका के भागों को उनके कार्यों (i)–(vii) से सुमेलित कीजिए।' }, a: { en: '(i) Control all activities = **Nucleus**; (ii) Cellular respiration site = **Mitochondria**; (iii) Storage + turgidity = **Vacuole**; (iv) Separates cell from environment = **Plasma Membrane**; (v) Structural rigidity = **Cell Wall**; (vi) Packages/stores ER products = **Golgi Apparatus**; (vii) Helps make food = **Chloroplast**.', hi: '(i) सभी गतिविधियों का नियंत्रण = **केंद्रक**; (ii) कोशिकीय श्वसन स्थल = **माइटोकॉन्ड्रिया**; (iii) भंडारण व दृढ़ता = **रसधानी**; (iv) परिवेश से पृथक आवरण = **प्लाज्मा झिल्ली**; (v) संरचनात्मक दृढ़ता = **कोशिका भित्ति**; (vi) ER सामग्री पैकिंग = **गॉल्जी उपकरण**; (vii) भोजन निर्माण = **हरितलवक**।' } },
    { num: 4, q: { en: '[NCERT MCQ • Ans: (i)] Identify pair PRESENT in Plant Cell & ABSENT in Animal Cell.', hi: '[MCQ • उत्तर: (i)] पादप कोशिका में उपस्थित तथा जंतु कोशिका में अनुपस्थित का सही युग्म चुनिए।' }, a: { en: 'Option **(i)**: **Leucoplast** (`अवर्णी लवक`, in Plants) and **Cell Wall** (`कोशिका भित्ति`, Absent in Animals).', hi: 'विकल्प **(i)**: पादप में उपस्थित = **अवर्णी लवक** | जंतु में अनुपस्थित = **कोशिका भित्ति**।' } },
    { num: 5, q: { en: 'Renu argues plant roots contain plastids; Rohit argues roots cannot photosynthesize so they have NO plastids. Who is right?', hi: 'रेणु कहती हैं पौधों की जड़ों में भी लवक होते हैं, जबकि रोहित इसे नकारता है। कौन सही है? औचित्य सिद्ध कीजिए।' }, a: { en: '**Renu is right!** Underground roots lack green Chloroplasts, yet store carbohydrates, oils & proteins using **colourless Leucoplasts** (such as in potato & *Colocasia* roots).', hi: '**रेणु सही हैं!** भूमिगत जड़ों में प्रकाश-संश्लेषण करने वाला हरा हरितलवक भले न हो, परंतु उनमें मंड (स्टार्च), तेल व प्रोटीन का भंडारण करने वाले **रंगहीन अवर्णी लवक (Leucoplasts)** उपस्थित होते हैं।' } },
    { num: 6, q: { en: 'Discuss structural and functional similarities and differences between Mitochondria and Chloroplasts.', hi: 'माइटोकॉन्ड्रिया और हरितलवक पादप कोशिका के दो महत्वपूर्ण कोशिकांग हैं — समानता और अंतर स्पष्ट कीजिए।' }, a: { en: '**Similarities:** Both have a **double membrane**, contain **their own DNA and `70S` ribosomes**, and synthesize some self-proteins. **Differences:** Mitochondria occur in **both plants & animals** and perform respiration breaking food to release **ATP**, whereas Chloroplasts occur **only in photosynthetic plants/algae** and trap sunlight to manufacture **sugar/starch**.', hi: '**समानताएँ:** दोनों में दोहरी झिल्ली, स्वयं का DNA तथा `70S` राइबोसोम होते हैं। **अंतर:** माइटोकॉन्ड्रिया पादप व जंतु दोनों में ग्लूकोस विखंडन द्वारा **ATP ऊर्जा** बनाते हैं, जबकि हरितलवक केवल पादपों में सूर्य प्रकाश द्वारा **भोजन (शर्करा/स्टार्च)** संश्लेषित करते हैं।' } },
    { num: 7, q: { en: '[NCERT MCQ • Ans: (ii)] Which pair of cell organelles both contain DNA?', hi: '[MCQ • उत्तर: (ii)] निम्नलिखित में से कोशिकांगों के किस जोड़े में दोनों के पास DNA होता है?' }, a: { en: 'Option **(ii)**: **Mitochondria and Nucleus** (Plastids also have DNA, though Ribosomes paired in Option i do not).', hi: 'विकल्प **(ii)**: **माइटोकॉन्ड्रिया एवं केंद्रक** (क्योंकि विकल्प i में दिया राइबोसोम DNA-रहित होता है)।' } },
    { num: 8, q: { en: 'Carrot A in water stays crisp; Carrot B in salt water turns rubbery/soft after 24h (Fig 2.21). Answer (i)–(iii).', hi: 'गाजर प्रयोग (चित्र 2.21): साधारण जल में रखी गाजर कड़क रहती है जबकि नमक घोल में 24 घंटे बाद नरम व लचीली क्यों हो जाती है?' }, a: { en: '(i) Testing hypothesis of **osmosis & cellular turgor**. (ii) Improve experiment by measuring **initial vs final mass & length** of equal carrot cylinders + adding control isotonic setup. (iii) Salt solution is **hypertonic**, drawing water out via exosmosis, dropping internal vacuole turgor pressure and making carrot soft.', hi: '(i) यह परासरण व कोशिकीय स्फीति की परिकल्पना जांचने का प्रयोग है। (ii) सुधार: प्रयोग से पूर्व व पश्चात् गाजर के टुकड़ों का भार व लंबाई मापना। (iii) सांद्र नमक विलयन अतिपरासारी होने से गाजर से जल बाहर निकल जाता है और रसधानी दबाव कम होने से गाजर नरम हो जाती है।' } },
    { num: 9, q: { en: 'Mark presence/absence in Bacterium vs Animal cell: Chromosome, Nucleus, Mitochondria, Golgi, Chromoplast.', hi: 'जीवाणु और जंतु कोशिका में उपस्थिति/अनुपस्थिति बताइए: गुणसूत्र, केंद्रक, माइटोकॉन्ड्रिया, गॉल्जी उपकरण, वर्णीलवक।' }, a: { en: '**Chromosome:** Present in both (1 circular nucleoid vs linear pairs). **True Nucleus, Mitochondria & Golgi:** Animal ✓ / Bacteria ✗. **Chromoplast:** Absent in BOTH (Plants only)!', hi: '**गुणसूत्र:** दोनों में उपस्थित (जीवाणु में 1 आद्य, जंतु में अनेक) | **केंद्रक, माइटोकॉन्ड्रिया, गॉल्जीकाय:** केवल जंतु में उपस्थित | **वर्णीलवक:** दोनों में अनुपस्थित (केवल पादप में)!' } },
    { num: 10, q: { en: '4 Potato Cups in water beaker (Fig 2.22): A Empty, B Sugar, C Salt, D BOILED Potato + Sugar.', hi: '4 आलू कप प्रयोग (चित्र 2.22): क खाली, ख चीनी, ग नमक, घ उबला आलू + चीनी। (i)–(iii) हल करें।' }, a: { en: '(i) In living cups **B & C**, higher sugar/salt solute creates osmotic pull drawing water through living membranes into hollows. (ii) **Cup A** acts as an empty experimental **Control** proving water does not simply leak up on its own. (iii) Boiled **Cup D** has heat-killed cells/denatured membranes, halting osmosis!', hi: '(i) जीवित कप **ख व ग** में चीनी/नमक के कारण बाहरी जल परासरण द्वारा खोखले भाग में एकत्र हो जाता है। (ii) **कप क** नियंत्रण (Control) हेतु है। (iii) **कप घ उबला आलू** है — उबालने से जीवित कोशिकाएँ व झिल्ली नष्ट हो गईं अतः परासरण नहीं हुआ!' } },
    { num: 11, q: { en: 'Identify the mismatched pair: (i) Ribosome — Protein, (ii) SER — Lipid & Cellulose, (iii) Lysosome — Digest foreign matter.', hi: 'असुमेलित युग्म पहचानिए: (i) राइबोसोम—प्रोटीन, (ii) चिकनी ER—लिपिड व सेल्युलोस, (iii) लाइसोसोम—पाचन।' }, a: { en: 'Pair **(ii) is scientifically INCORRECT**: Smooth ER synthesizes **Lipids and Hormones**, NOT cellulose!', hi: 'युग्म **(ii) गलत** है — चिकनी ER **लिपिड व हार्मोन** बनाती है, सेल्युलोस नहीं!' } },
    { num: 12, q: { en: 'What happens if ALL mitochondria are removed from a eukaryotic cell?', hi: 'यदि किसी सुकेंद्रकी कोशिका से सभी माइटोकॉन्ड्रिया निकाल दिए जाएँ तो क्या परिणाम होगा?' }, a: { en: 'Aerobic ATP production stops completely -> active transport, protein/lipid synthesis & cell division halt -> cell rapidly dies.', hi: 'ऑक्सी श्वसन व ATP ऊर्जा उत्पादन रुक जाएगा जिससे सभी जैव क्रियाएँ व मरम्मत बंद होकर कोशिका मृत हो जाएगी।' } },
    { num: 13, q: { en: 'What checks tumour formation in humans? Can plants develop tumours too?', hi: 'मानव शरीर में अर्बुद के निर्माण को कौन-सी परिघटना रोकती है? क्या पौधों में भी अर्बुद बन सकते हैं?' }, a: { en: '**Contact Inhibition** & **Programmed Cell Death (PCD)** inhibit uncontrolled tumours in humans. Plants lack contact inhibition; certain bacteria/insects can trigger localized crown galls/swellings on plant stems without spreading malignant cancer.', hi: 'मानव में **संपर्क अवरोध व क्रमादेशित कोशिका मृत्यु (PCD)** अर्बुद रोकते हैं। पादपों में संपर्क अवरोध नहीं होता; सूक्ष्मजीवों के संक्रमण से स्थानीय गाँठ (Galls) बन सकती हैं, पर फैलने वाला कैंसर नहीं होता।' } },
    { num: 14, q: { en: 'Which organelles build Plasma Membrane lipids & proteins? Trace pathway from synthesis to membrane.', hi: 'कोशिका झिल्ली बनाने वाले प्रोटीन व लिपिड किन कोशिकांगों में बनते हैं? झिल्ली तक पहुँचने का पथ लिखें।' }, a: { en: '1. **RER Ribosomes** make Membrane Proteins & **SER** makes Phospholipids. 2. Sent inside transport vesicles to **Golgi Apparatus** for modification & sorting. 3. Golgi secretory vesicles bud off and fuse with **Plasma Membrane** (**Membrane Biogenesis**).', hi: '1. **RER के राइबोसोम** प्रोटीन तथा **SER** लिपिड (वसा) बनाती है। 2. ये दोनों **गॉल्जी उपकरण** में रूपांतरित होकर पुटिकाओं में पैक होते हैं। 3. स्रावी पुटिकाएँ **प्लाज्मा झिल्ली** से जुड़कर झिल्ली निर्माण (Biogenesis) पूर्ण करती हैं।' } },
    { num: 15, q: { en: 'What would happen if reproductive gametes were generated by Mitosis instead of Meiosis?', hi: 'यदि युग्मक (शुक्राणु/अंडाणु) अर्धसूत्री के बजाय समसूत्री विभाजन द्वारा बनाए जाएँ तो क्या होगा?' }, a: { en: 'Gametes would carry diploid (`2n = 46`) DNA instead of haploid (`n = 23`), causing chromosome number to double every single generation (`2n -> 4n -> 8n`) + eliminating genetic variation.', hi: 'युग्मकों में गुणसूत्र आधे नहीं रह पाएंगे; निषेचन पर हर नई पीढ़ी में गुणसूत्र संख्या दोगुनी (`46 → 92 → 184`) होती जाएगी व आनुवंशिक विविधता समाप्त हो जाएगी।' } },
    { num: 16, q: { en: 'Case Study (p.27): Farmer Deepa preserves surplus Amla & Lemon into pickles/murabba using high salt/sugar. Explain science (i)–(iv).', hi: 'केस स्टडी (पृष्ठ 27): कृषक दीपा आंवला-नींबू बचाने हेतु अधिक नमक, चीनी या गुड़ से अचार व मुरब्बा बनाती है — वैज्ञानिक विश्लेषण (i)–(iv)।' }, a: { en: '(i) Uses **Osmosis / Osmotic Food Preservation**. (ii) High salt/sugar creates a **Hypertonic environment** pulling water out of spoiling bacteria/fungi by exosmosis, killing microbes. (iii) Healthy recipe: Lemon/ginger brine with turmeric + spices or jaggery-preserved amla with minimal refined sugar. (iv) Demonstrates scientific temper, waste minimization & sustainable farmer income.', hi: '(i) **परासरण परिरक्षण (Osmotic Preservation)**। (ii) अधिक नमक/चीनी **अतिपरासारी** माध्यम बनाकर जीवाणुओं-कवकों का जल बाहर खींचकर उन्हें नष्ट कर देती है। (iii) स्वास्थ्यवर्धक विकल्प: गुड़-आंवला मुरब्बा या हल्दी-नींबू अचार। (iv) वैज्ञानिक सोच, खाद्य सुरक्षा व अपशिष्ट में कमी के मूल्य दर्शाए गए हैं।' } },
  ],

  flashcards: [
    { front: { en: 'Study of Cell vs Uncontrolled Cell Death', hi: 'कोशिका का अध्ययन बनाम अनियंत्रित मृत्यु?' }, back: { en: 'Cytology vs Necrosis (Normal = PCD / Apoptosis)', hi: 'साइटोलॉजी बनाम नेक्रोसिस (नियंत्रित = PCD)' } },
    { front: { en: 'Smallest Cell vs Longest Human Cell', hi: 'सबसे छोटी कोशिका बनाम सबसे लंबी मानव कोशिका?' }, back: { en: 'Mycoplasma (No Wall!) vs Neuron (No Centrosome!)', hi: 'माइकोप्लाज्मा बनाम तंत्रिका कोशिका (Neuron)' } },
    { front: { en: 'Fungi Cell Wall vs Bacterial Cell Wall', hi: 'कवक बनाम जीवाणु की कोशिका भित्ति?' }, back: { en: 'Fungi = Chitin | Bacteria = Peptidoglycan', hi: 'कवक = काइटिन | जीवाणु = पेप्टिडोग्लाइकन' } },
    { front: { en: 'Protoplasm (80% Water) Coined By?', hi: 'जीवद्रव्य नाम व "जीवन का भौतिक आधार" कथन?' }, back: { en: 'Coined: Purkinje (1839) | Quote: Huxley', hi: 'नाम: पुरकिंजे (1839) | कथन: हैक्सले' } },
    { front: { en: 'Ribosomes: Prokaryote vs Eukaryote', hi: 'प्रोकैरियोट बनाम यूकैरियोट राइबोसोम?' }, back: { en: '70S (50S+30S) vs 80S (60S+40S) • S = Svedberg', hi: '70S बनाम 80S (`S = अवसादन गुणांक`)' } },
    { front: { en: 'DNA Base Bonds vs RNA Substitution', hi: 'DNA के बंधन व RNA में कौन-सा क्षार बदलता है?' }, back: { en: 'DNA: A=T (2) & G≡C (3) | RNA: Uracil replaces Thymine', hi: 'DNA: A=T, G≡C | RNA: थायमीन की जगह यूरेसिल (U)' } },
    { front: { en: 'Why are dead RBCs destroyed in Spleen?', hi: 'मृत RBC को प्लीहा (Spleen) में क्यों नष्ट किया जाता है?' }, back: { en: 'Mature RBC has NO Lysosome & NO Nucleus (~120 days life)', hi: 'RBC में लाइसोसोम (और केंद्रक) नहीं होते → प्लीहा कब्रिस्तान' } },
    { front: { en: 'Tomato vs Carrot vs Beetroot Pigments', hi: 'टमाटर, गाजर व चुकंदर में वर्णक?' }, back: { en: 'Tomato: Lycopene | Carrot: Carotene | Beet: Betanin', hi: 'टमाटर: लाइकोपीन | गाजर: कैरोटीन | चुकंदर: बीटानिन' } },
    { front: { en: 'Onion Peel Stain vs Cheek Cell Stain', hi: 'प्याज झिल्ली बनाम गाल स्लाइड अभिरंजक?' }, back: { en: 'Onion = Safranin | Cheek = Methylene Blue', hi: 'प्याज = सैफ्रेनीन | गाल = मेथिलीन ब्लू' } },
    { front: { en: 'Totipotency (1902) & Plant Tissue Culture', hi: 'पूर्णशक्तता (Totipotency, 1902) के जनक?' }, back: { en: 'Gottlieb Haberlandt', hi: 'गॉटलीब हैबरलैंड्ट (ऑस्ट्रिया)' } },
  ],

  pyqBank: [
    {
      id: 1,
      examTag: 'RRB Group D 2025 Shift 34',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Which of the following cell structures is mainly responsible for providing support and maintaining the shape of eukaryotic cells?',
        hi: 'निम्नलिखित में से कौन-सी कोशिका संरचना मुख्य रूप से सुकेंद्रकी कोशिकाओं के आकार को बनाए रखने और आलंब प्रदान करने के लिए उत्तरदायी है?',
      },
      options: { en: ['DNA', 'Cell Sap', 'Cytoskeleton', 'Nucleoid'], hi: ['DNA', 'कोशिका रस', 'कोशिका-पंजर (Cytoskeleton)', 'केंद्रकाभ'] },
      correctIndex: 2,
      solution: { en: 'Cytoskeleton forms a fine protein-filament meshwork inside eukaryotic cells maintaining shape, support & transport.', hi: 'यूकैरियोटिक कोशिकाओं में अत्यंत पतले तंतुओं का जाल कोशिका-पंजर (Cytoskeleton) आकार व स्थिरता बनाए रखता है।' },
    },
    {
      id: 2,
      examTag: 'RRB Group D 2025 Shift 40',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'A eukaryotic cell that performs its functions and undergoes programmed cell death when no longer required is best described as a __________.',
        hi: 'एक सुकेंद्रकी कोशिका जो अपने कार्यों को करती है और आवश्यकता न होने पर प्रोगामीकृत कोशिका मृत्यु (Programmed Cell Death) से गुजरती है, उसे क्या कहते हैं?',
      },
      options: { en: ['Tumour cell', 'Malignant cell', 'Normal cell', 'Bacterial cell'], hi: ['अर्बुद कोशिका', 'दुर्दम कोशिका', 'सामान्य कोशिका (Normal cell)', 'जीवाणु कोशिका'] },
      correctIndex: 2,
      solution: { en: 'Normal healthy cells undergo controlled PCD when unwanted; cancer cells lose this control.', hi: 'सामान्य कोशिकाएँ आवश्यकता न रहने पर क्रमादेशित मृत्यु (PCD) से नष्ट होती हैं।' },
    },
    {
      id: 3,
      examTag: 'RRB Group D 2025 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Complete the Analogy. Plant : Rigid Cell Wall :: Animal : __________', hi: 'सादृश्य को पूर्ण कीजिए। पादप : दृढ़ कोशिका भित्ति :: जंतु : __________' },
      options: { en: ['Lignified support', 'Cellular flexibility', 'Photosynthetic tissues', 'Fixed position'], hi: ['लिग्निकृत सहारा', 'कोशिकीय नम्यता (Cellular flexibility)', 'प्रकाशसंश्लेषी ऊतक', 'निश्चित स्थिति'] },
      correctIndex: 1,
      solution: { en: 'Absence of cell wall imparts cellular flexibility to animal cells for movement.', hi: 'कोशिका भित्ति के अभाव में जंतु कोशिकाओं को कोशिकीय नम्यता (लचीलापन) प्राप्त होता है।' },
    },
    {
      id: 4,
      examTag: 'RRB ALP 2025 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'On the basis of function, the plasma membrane is ________ in nature.', hi: 'कार्य के आधार पर, प्लाज्मा झिल्ली प्रकृति में ________ होती है।' },
      options: { en: ['fully non-permeable', 'fully permeable', 'semi-permeable', 'selectively permeable'], hi: ['पूर्णतः अपारगम्य', 'पूर्णतः पारगम्य', 'अर्ध-पारगम्य', 'वरणात्मक / चयनात्मक पारगम्य'] },
      correctIndex: 3,
      solution: { en: 'Plasma membrane is selectively permeable—permitting essential ions/water while blocking unwanted solutes.', hi: 'प्लाज्मा झिल्ली वरणात्मक पारगम्य होती है जो चुनिंदा पदार्थों को ही आर-पार जाने देती है।' },
    },
    {
      id: 5,
      examTag: 'RRB Group D 2025 Shift 30',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Complete the analogy. Dye in water : Diffusion :: Roots absorbing water : ___________.', hi: 'सादृश्य पूर्ण कीजिए। जल में रंजक : विसरण :: जड़ों द्वारा जल का अवशोषण : ___________' },
      options: { en: ['Evaporation', 'Osmosis', 'Photosynthesis', 'Filtration'], hi: ['वाष्पीकरण', 'परासरण (Osmosis)', 'प्रकाश संश्लेषण', 'निस्यंदन'] },
      correctIndex: 1,
      solution: { en: 'Soil water enters plant root-hair cells across plasma membranes strictly via Osmosis.', hi: 'जड़ों की कोशिकाएँ मिट्टी से जल परासरण (Osmosis) द्वारा अवशोषित करती हैं।' },
    },
    {
      id: 6,
      examTag: 'RRB Tech Gr-III 2024 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'When plant cells lose water by osmosis, the contents shrink away from the cell wall; this is known as _______.', hi: 'जब पादप कोशिका में परासरण द्वारा पानी की हानि होती है, तो आंतरिक पदार्थ संकुचित होकर भित्ति से दूर हो जाते हैं; इसे _____ कहते हैं।' },
      options: { en: ['Diffusion', 'Active Transport', 'Plasmolysis', 'Passive Transport'], hi: ['विसरण', 'सक्रिय परिवहन', 'जीवद्रव्य कुंचन (Plasmolysis)', 'निष्क्रिय परिवहन'] },
      correctIndex: 2,
      solution: { en: 'Contraction of cytoplasm/protoplast away from rigid cell wall during hypertonic water loss is Plasmolysis.', hi: 'बाहरी कोशिका भित्ति से जीवद्रव्य का सिकुड़कर अलग होना जीवद्रव्य कुंचन कहलाता है।' },
    },
    {
      id: 7,
      examTag: 'RRB Tech Gr-III 2024 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'What similarities do plastids share with mitochondria?', hi: 'लवक (Plastids) और सूत्रकणिका (Mitochondria) में क्या समानताएँ हैं?' },
      options: { en: ['Both are present only in plant cells.', 'Both contain chlorophyll.', 'Both produce ATPs.', 'Both contain their own DNA and ribosomes.'], hi: ['दोनों केवल पादप कोशिकाओं में होते हैं', 'दोनों में क्लोरोफिल होता है', 'दोनों ATP बनाते हैं', 'दोनों में अपना DNA और राइबोसोम होते हैं'] },
      correctIndex: 3,
      solution: { en: 'Mitochondria & Plastids are semi-autonomous double-membrane organelles possessing their own DNA and 70S ribosomes.', hi: 'माइटोकॉन्ड्रिया एवं लवक दोनों में स्वयं का DNA व 70S राइबोसोम पाए जाते हैं।' },
    },
    {
      id: 8,
      examTag: 'RRB ALP 2025 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which of the following functions of mitochondria makes it a powerhouse of the cell?', hi: 'माइटोकॉन्ड्रिया का निम्नलिखित में से कौन-सा कार्य इसे कोशिका का बिजलीघर बनाता है?' },
      options: { en: ['Generation of ATP', 'Generation of enzymes', 'Generation of heat', 'Generation of NADPH'], hi: ['ATP का उत्पादन', 'एंजाइमों का उत्पादन', 'ऊष्मा का उत्पादन', 'NADPH का उत्पादन'] },
      correctIndex: 0,
      solution: { en: 'Mitochondria release aerobic respiratory energy in the form of ATP (energy currency).', hi: 'माइटोकॉन्ड्रिया कोशिकीय श्वसन द्वारा ऊर्जा मुद्रा ATP उत्पन्न करता है।' },
    },
    {
      id: 9,
      examTag: 'RRB ALP 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which of the following events happens when lysosomes in a cell burst?', hi: 'कोशिका में लाइसोसोम के फटने पर निम्नलिखित में से कौन-सी घटना घटित होती है?' },
      options: { en: ["Enzymes digest the cell's own components", 'Enzymes digest foreign particles only', 'Cell becomes more active', 'Cell division increases'], hi: ['एंजाइम कोशिका के अपने घटकों को ही पचा लेते हैं', 'केवल बाहरी कण पचाते हैं', 'कोशिका अधिक सक्रिय होती है', 'कोशिका विभाजन बढ़ता है'] },
      correctIndex: 0,
      solution: { en: 'Bursting releases hydrolytic digestive enzymes leading to self-digestion ("suicide bags").', hi: 'पाचक एंजाइम फूटकर कोशिका के अपने ही घटकों को पचा देते हैं।' },
    },
    {
      id: 10,
      examTag: 'RRB Tech Gr-III 2024 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Rough endoplasmic reticulum looks rough under a microscope because it has particles called ______ attached to its surface.', hi: 'खुरदुरी अंतर्द्रव्यी जालिका सूक्ष्मदर्शी के नीचे खुरदुरी दिखाई देती है क्योंकि इसकी सतह पर ______ नामक कण जुड़े होते हैं।' },
      options: { en: ['chromosomes', 'lysosomes', 'protein particles', 'ribosomes'], hi: ['गुणसूत्र', 'लाइसोसोम', 'प्रोटीन कण', 'राइबोसोम (Ribosomes)'] },
      correctIndex: 3,
      solution: { en: 'Ribosomes dot RER surface for protein synthesis.', hi: 'राइबोसोम जुड़े होने के कारण RER खुरदुरी दिखती है।' },
    },
    {
      id: 11,
      examTag: 'RRB Group D 2025 Shift 45',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'The absence of a nucleus in mature RBCs provides more room for __________, which carries oxygen to the body.', hi: 'परिपक्व RBC में केंद्रक की अनुपस्थिति __________ के लिए अधिक स्थान प्रदान करती है, जो शरीर में ऑक्सीजन का वहन करता है।' },
      options: { en: ['Lysosomes', 'Chlorophyll', 'DNA', 'Hemoglobin'], hi: ['लाइसोसोम', 'क्लोरोफिल', 'DNA', 'हीमोग्लोबिन (Hemoglobin)'] },
      correctIndex: 3,
      solution: { en: 'Mature mammalian RBCs are enucleated to hold maximum Hemoglobin for oxygen transport.', hi: 'केंद्रक न होने से RBC में अधिक हीमोग्लोबिन भरता है और ऑक्सीजन परिवहन बढ़ता है।' },
    },
    {
      id: 12,
      examTag: 'RRB Tech Gr-III 2024 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Select the correct statement related to the characteristics of prokaryotic cell.', hi: 'प्रोकैरियोटिक कोशिका की विशेषताओं से संबंधित सही कथन का चयन कीजिए।' },
      options: { en: ['Membrane-bound cell organelles are present.', 'It has a single chromosome.', 'It has more than one chromosome.', 'Nuclear region is surrounded by nuclear membrane.'], hi: ['झिल्ली वाले कोशिकांग उपस्थित होते हैं', 'इसमें एक ही (एकल) गुणसूत्र होता है', 'एक से अधिक गुणसूत्र होते हैं', 'केंद्रक झिल्ली उपस्थित होती है'] },
      correctIndex: 1,
      solution: { en: 'Prokaryotes lack true nuclear envelope/organelles and possess 1 single circular DNA chromosome in Nucleoid.', hi: 'प्रोकैरियोट में केंद्रक झिल्ली नहीं होती और केवल 1 एकल गुणसूत्र होता है।' },
    },
    {
      id: 13,
      examTag: 'RRB Tech Gr-III 2024 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which of the following is the rod-shaped structure found in the nucleus only when the cell is about to divide?', hi: 'निम्नलिखित में से कौन-सी छड़ के आकार की संरचना है जो केंद्रक में केवल तभी पाई जाती है जब कोशिका विभाजित होने वाली होती है?' },
      options: { en: ['Chromosomes', 'Mitochondria', 'Chromatin', 'Lysosomes'], hi: ['गुणसूत्र (Chromosomes)', 'माइटोकॉन्ड्रिया', 'क्रोमैटिन', 'लाइसोसोम'] },
      correctIndex: 0,
      solution: { en: 'Entangled chromatin condenses into visible rod-like Chromosomes strictly during cell division.', hi: 'कोशिका विभाजन के समय क्रोमेटिन संघनित होकर छड़ाकार गुणसूत्रों में परिवर्तित हो जाता है।' },
    },
    {
      id: 14,
      examTag: 'RRB Group D 2025 Shift 40',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which organelle is physically continuous with the nuclear envelope?', hi: 'निम्नलिखित में से कौन-सा कोशिकांग भौतिक रूप से केंद्रकीय आवरण से जुड़ा होता है?' },
      options: { en: ['Lysosome', 'Golgi Body', 'Mitochondria', 'Endoplasmic Reticulum'], hi: ['लाइसोसोम', 'गॉल्जीकाय', 'माइटोकॉन्ड्रिया', 'अंतर्द्रव्यी जालिका (ER)'] },
      correctIndex: 3,
      solution: { en: 'ER extends directly from the outer membrane of the nuclear envelope throughout cytoplasm.', hi: 'अंतर्द्रव्यी जालिका (ER) बाहरी केंद्रक आवरण से प्रत्यक्ष जुड़ी होती है।' },
    },
    {
      id: 15,
      examTag: 'RRB ALP 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'In onion peel and human cheek cells, the lightly stained region enclosed by the cell membrane is called:', hi: 'प्याज की झिल्ली और मनुष्य के गाल की कोशिकाओं में, कोशिका झिल्ली से घिरे हल्के रंजित क्षेत्र को क्या कहा जाता है?' },
      options: { en: ['Cytoplasm', 'Cell wall', 'Nucleus', 'Vacuole'], hi: ['कोशिकाद्रव्य (Cytoplasm)', 'कोशिका भित्ति', 'केंद्रक', 'रसधानियाँ'] },
      correctIndex: 0,
      solution: { en: 'Nucleus stains darkly whereas surrounding jelly Cytoplasm stains lightly.', hi: 'केंद्रक गहरा रंग पकड़ता है जबकि कोशिकाद्रव्य हल्का रंजित रहता है।' },
    },
    {
      id: 16,
      examTag: 'RRB Tech Gr-III 2024 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which of the following scientists made the statement: “All cells arise from preexisting cells.”?', hi: 'निम्नलिखित में से किस वैज्ञानिक ने यह कथन दिया: "सभी कोशिकाओं का निर्माण पूर्ववर्ती कोशिकाओं से होता है"?' },
      options: { en: ['Purkinje', 'Rudolf Virchow', 'Robert Brown', 'Robert Hooke'], hi: ['पुरकिंजे', 'रुडोल्फ विर्चो (Rudolf Virchow)', 'रॉबर्ट ब्राउन', 'रॉबर्ट हुक'] },
      correctIndex: 1,
      solution: { en: 'Rudolf Virchow (1855) expanded Cell Theory with "Omnis cellula e cellula".', hi: 'रुडोल्फ़ विरचो (1855) ने बताया कि सभी कोशिकाएँ पूर्वविद्यमान कोशिकाओं से उत्पन्न होती हैं।' },
    },
    {
      id: 17,
      examTag: 'RRB ALP 2025 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which type of cell has very small vacuoles?', hi: 'किस प्रकार की कोशिका में बहुत छोटी रसधानियाँ होती हैं?' },
      options: { en: ['Plant cell', 'Bacterial cell', 'Animal cell', 'Fungal cell'], hi: ['पादप कोशिका', 'जीवाणु कोशिका', 'जंतु कोशिका (Animal cell)', 'कवक कोशिका'] },
      correctIndex: 2,
      solution: { en: 'Mature plant cells hold 1 giant central vacuole while animal cells have small, temporary vacuoles.', hi: 'जंतु कोशिकाओं में रसधानियाँ अत्यंत छोटी तथा पादपों में बहुत बड़ी होती हैं।' },
    },
    {
      id: 18,
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'A student observes a plant cell under a microscope and notes it has a prominent nucleus, dense cytoplasm, and no visible vacuoles. What is its most likely function?', hi: 'सूक्ष्मदर्शी से देखने पर एक पादप कोशिका में स्पष्ट केंद्रक, सघन कोशिकाद्रव्य और कोई दृश्यमान रसधानी नहीं है — इसका संभावित कार्य क्या है?' },
      options: { en: ['Active cell division and growth', 'Providing structural support', 'Storing water and nutrients', 'Transporting water and minerals'], hi: ['सक्रिय कोशिका विभाजन एवं वृद्धि', 'संरचनात्मक सहारा', 'जल भंडारण', 'जल-खनिज परिवहन'] },
      correctIndex: 0,
      solution: { en: 'Actively dividing meristematic root-tip cells lack large vacuoles and maintain dense cytoplasm + large nuclei.', hi: 'विभज्योतक कोशिकाएँ सक्रिय विभाजन करती हैं और उनमें बड़ी रसधानियाँ नहीं होतीं।' },
    },
    {
      id: 19,
      examTag: 'RRB Group D 2025 Shift 38',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which material did Robert Hooke use to first discover "cells" in 1665?', hi: 'रॉबर्ट हुक ने सर्वप्रथम "कोशिकाओं" की खोज करने के लिए किस पदार्थ का उपयोग किया था?' },
      options: { en: ['Onion peel', 'Leaf surface', 'Cork slice', 'Human cheek'], hi: ['प्याज का छिलका', 'पत्ती की सतह', 'कॉर्क की काट (Cork slice)', 'मानव कपोल'] },
      correctIndex: 2,
      solution: { en: 'Hooke observed dead oak-bark cork slices under his compound microscope in 1665.', hi: 'रॉबर्ट हुक ने 1665 में कॉर्क के पतले टुकड़े में मृत कोशिका की खोज की।' },
    },
    {
      id: 20,
      examTag: 'RRB Tech Gr-III 2024 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Who discovered free-living cells in pond water for the first time?', hi: 'तालाब के जल में पहली बार मुक्त जीवित कोशिकाओं की खोज किसने की?' },
      options: { en: ['Virchow in 1855', 'Robert Hooke in 1665', 'Leeuwenhoek in 1674', 'Robert Brown in 1831'], hi: ['1855 में विरचो', '1665 में रॉबर्ट हुक', '1674 में ल्यूवेनहॉक', '1831 में रॉबर्ट ब्राउन'] },
      correctIndex: 2,
      solution: { en: 'Antonie van Leeuwenhoek (1674) first observed live bacteria & protozoa in pond water.', hi: 'एंटोनी वॉन ल्यूवेनहॉक ने 1674 में तालाब के जल में पहली जीवित कोशिका देखी।' },
    },
    {
      id: 21,
      examTag: 'RRB Group D 2025 Shift 45',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Name the process of selective cell destruction that helps in the formation of separate fingers during embryonic development.', hi: 'भ्रूणीय विकास के दौरान अलग-अलग उंगलियों के निर्माण में सहायता करने वाली चयनात्मक कोशिका विनाश प्रक्रिया का नाम बताइए।' },
      options: { en: ['Programmed cell death', 'Mitosis', 'Meiosis', 'Plasmolysis'], hi: ['प्रोगामीकृत कोशिका मृत्यु (Programmed Cell Death)', 'समसूत्री विभाजन', 'अर्धसूत्री विभाजन', 'जीवद्रव्य कुंचन'] },
      correctIndex: 0,
      solution: { en: 'Genetically regulated PCD clears interdigital webbing during embryo formation.', hi: 'क्रमादेशित कोशिका मृत्यु (PCD) अँगुलियों के बीच की अतिरिक्त कोशिकाओं को हटाती है।' },
    },
    {
      id: 22,
      examTag: 'RRB Group D 2025 Shift 44',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which of the following pairs is INCORRECT?', hi: 'निम्नलिखित में से कौन-सा युग्म गलत है?' },
      options: { en: ['Embryo — Uses programmed cell death for shaping', 'Malignant — Tissue invasion', 'Cancer Cell — Controlled division', 'Normal Cell — Definite lifespan'], hi: ['भ्रूण — रूपण हेतु PCD का उपयोग', 'दुर्दम — ऊतक आक्रमण', 'कैंसर कोशिका — नियंत्रित विभाजन', 'सामान्य कोशिका — निश्चित जीवनकाल'] },
      correctIndex: 2,
      solution: { en: 'Cancer cells lose contact inhibition and divide UNCONTROLLABLY, not in a controlled manner!', hi: 'कैंसर कोशिकाओं में नियंत्रण समाप्त होकर अनियंत्रित विभाजन होता है।' },
    },
    {
      id: 23,
      examTag: 'RRB Tech Gr-III 2024 Shift 8 [Match PYQ]',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'Match the organelles with their functions:\n1. Cell wall | 2. Ribosomes | 3. Lysosomes | 4. Golgi apparatus\na. Digests waste & worn-out components | b. Gives plant structural strength | c. Protein manufacture site | d. Linked to lysosome production',
        hi: 'कोशिकांगों का उनके कार्यों से मिलान कीजिए:\n1. कोशिका भित्ति | 2. राइबोसोम | 3. लाइसोसोम | 4. गॉल्जी उपकरण\na. बाहरी व घिसे घटकों का पाचन | b. पादप को संरचनात्मक ताकत | c. प्रोटीन निर्माण स्थल | d. लाइसोसोम के उत्पादन से जुड़ा',
      },
      options: { en: ['1-b, 2-d, 3-c, 4-a', '1-b, 2-c, 3-a, 4-d', '1-a, 2-b, 3-c, 4-d', '1-c, 2-a, 3-d, 4-b'], hi: ['1-b, 2-d, 3-c, 4-a', '1-b, 2-c, 3-a, 4-d', '1-a, 2-b, 3-c, 4-d', '1-c, 2-a, 3-d, 4-b'] },
      correctIndex: 1,
      solution: { en: 'Cell Wall = structural strength (1-b); Ribosome = protein synthesis (2-c); Lysosome = waste digestion (3-a); Golgi = lysosome production (4-d).', hi: '1-b (भित्ति = ताकत), 2-c (राइबोसोम = प्रोटीन), 3-a (लाइसोसोम = पाचन), 4-d (गॉल्जी = लाइसोसोम निर्माण)।' },
    },
    {
      id: 24,
      examTag: 'RRB Group D 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'A patient has a chronic infection from a eukaryotic organism that reproduces via spores and has a chitin cell wall. Which type of organism is most likely responsible?',
        hi: 'एक रोगी ऐसे सुकेंद्रकी जीव के संक्रमण से ग्रसित है जो बीजाणुओं से प्रजनन करता है और जिसमें काइटिन कोशिका भित्ति होती है — यह कौन-सा जीव है?',
      },
      options: { en: ['Algae', 'Fungus', 'Protozoa', 'Bacteria'], hi: ['शैवाल', 'कवक (Fungus)', 'प्रोटोजोआ', 'जीवाणु'] },
      correctIndex: 1,
      solution: { en: 'Fungi are eukaryotic heterotrophs featuring a rigid Chitin cell wall and spore reproduction.', hi: 'कवक (Fungi) सुकेंद्रकी होते हैं जिनकी कोशिका भित्ति काइटिन से बनी होती है।' },
    },
  ],
};
