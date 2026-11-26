/**
 * Class 9 NCERT (2026-27 New Edition — ihsc102.pdf, Pages 8-27) + Nirman+ Railway Boosters
 * Gold Standard v2: Dual-Depth (Beginners Desi Samajh + Super-Intelligent Ranker Edge),
 * Viral Mnemonics, Highlighted Micro-Bullets, Real Micrographs/Portraits & Inline PYQs.
 */

export const CH2_CELL_DATA = {
  id: 'c9-bio-ch2',
  classId: 'class9',
  subjectId: 'biology',
  chapterNumber: 2,
  sourceCode: 'Class 9 NCERT 2026–27 (Ch 2) + Nirman+ RRB Boosters',
  title: {
    en: 'Chapter 2: Cell — The Fundamental Unit of Life',
    hi: 'अध्याय 2: कोशिका — जीवन की निर्माण इकाई',
  },
  subtitle: {
    en: 'Beginner-to-Ranker Master Edition • Simple Hinglish Clarity, Viral Memory Hacks, Real Micrographs & Dated RRB PYQs',
    hi: 'सरल भाषा + टॉपर डेप्थ • देसी ट्रिक्स, असली माइक्रोस्कोप चित्र, सभी क्रियाकलाप व रेलवे PYQ सीधे टॉपिक के नीचे',
  },
  metrics: {
    pages: 20,
    activities: 5,
    tables: 4,
    svgLabs: 4,
    hdVisuals: 13,
    exercisesSolved: 16,
    pyqsMatched: 18,
  },

  hero: {
    imageUrl: '/ncert-notes/class9-bio-ch2/hero-cell-origins.webp',
    caption: {
      en: 'From Ladakh geothermal hot springs to Bacteria, Plant & Animal Cells under modern lenses.',
      hi: 'लद्दाख के गर्म जल स्रोतों से पहली कोशिका की शुरुआत — जीवाणु, पादप और जंतु कोशिका का पूरा संसार।',
    },
  },

  quickRevision60Sec: [
    {
      en: 'Eye limit $= 0.1\\text{ mm}$ at $25\\text{ cm}$. Electron Microscope sees down to **nanometre** ($1\\text{ nm} = 10^{-9}\\text{ m}$).',
      hi: 'आँख से ==$0.1\\text{ mm}$== तक ही अलग दिखता है ($25\\text{ cm}$ पर)। **इलेक्ट्रॉन सूक्ष्मदर्शी** ==नैनोमीटर ($10^{-9}\\text{ m}$)== तक दिखाता है।',
    },
    {
      en: '**Hooke (1665)** saw dead Cork cells; **Leeuwenhoek (1674)** saw first living cell; **Robert Brown (1831)** Nucleus; **Purkinje (1839)** Protoplasm.',
      hi: '**रॉबर्ट हुक (1665)**: मृत कॉर्क कोशिका | **ल्यूवेनहॉक (1674)**: पहली ==जीवित कोशिका== | **रॉबर्ट ब्राउन (1831)**: केंद्रक | **पुरकिंजे (1839)**: जीवद्रव्य।',
    },
    {
      en: 'Plasma membrane is **$7\\text{--}10\\text{ nm}$** **Selectively Permeable** (Lipid + Protein); Cell wall is **Freely Permeable** (**Cellulose** in plants; absent in animals & *Mycoplasma*).',
      hi: 'कोशिका झिल्ली ==$7\\text{--}10\\text{ nm}$== मोटी, **वरणात्मक (चुनिंदा) पारगम्य**। **कोशिका भित्ति** ==पूर्ण पारगम्य== (पादपों में **सेल्युलोस**; जंतु व *माइकोप्लाज्मा* में नहीं)।',
    },
    {
      en: '**Hypo = Hippo 🦛 (Cell Swells)** | **Hyper = Dehydrated (Shrinks / Plasmolysis)** | **Iso = Equal (No change)**.',
      hi: '**अल्पपरासारी (Hypo) = फूलेगी 🦛** | **अतिपरासारी (Hyper) = पिचकेगी / जीवद्रव्य कुंचन** | **समपरासारी (Iso) = बराबर रहेगा**।',
    },
    {
      en: '**N-M-P** (**Nucleus, Mitochondria, Plastids**) have **Double Membrane + Own DNA**. **Mitochondria** makes **ATP** (Glycolysis -> Krebs Cycle). **Ribosomes**: Prok `70S` vs Euk `80S`.',
      hi: '**N-M-P** (केंद्रक, माइटोकॉन्ड्रिया, लवक) = **दोहरी झिल्ली + खुद का DNA**। **राइबोसोम**: प्रोकैरियोट में `70S`, यूकैरियोट में `80S` (बिना झिल्ली)।',
    },
    {
      en: '**Mitosis** = 2 exact body cells (`2n -> 2n`, wound healing). **Meiosis** = 4 sex gametes (`2n -> n`, Testes/Ovaries/Anthers). **PCD** stops webbed fingers & tumours.',
      hi: '**समसूत्री (Mitosis)** = 2 एक जैसी कोशिकाएँ (चोट भरना)। **अर्धसूत्री (Meiosis)** = 4 युग्मक आधे गुणसूत्र के साथ। **PCD** से अंगुलियाँ अलग बनती हैं व कैंसर रुकता है।',
    },
  ],

  sections: [
    {
      id: 'origin-organization',
      number: '2.0',
      flowDiagramKey: 'org-hierarchy',
      svgLab: null,
      title: {
        en: 'Origin of Life, BSIP Hot Springs & Body Organization',
        hi: 'जीवन की शुरुआत कहाँ से हुई? (लद्दाख के उष्ण स्रोत व शरीर का ढांचा)',
      },
      summaryTag: { en: 'NCERT Pages 8–9 • Basic Context', hi: 'NCERT पृष्ठ 8–9 • आसान शुरुआत' },
      blocks: [
        {
          heading: {
            en: '1. How Did the Very First Cell Form in Hot Water?',
            hi: '1. पृथ्वी पर पहली कोशिका गर्म पानी में कैसे बनी?',
          },
          desiIntuition: {
            en: 'Think of Earth 3.5 billion years ago like a **pressure cooker of hot mineral pools**. Heat-loving bacteria survived near boiling springs, and a thin mineral shell protected early life chemicals—becoming the first cell boundary!',
            hi: 'कल्पना कीजिए 3.5 अरब साल पहले पृथ्वी पर कोई समुद्र शांत नहीं था — बल्कि जगह-जगह **उबलते हुए गर्म पानी के कुंड** थे! उन्हीं खौलते कुंडों के पास खनिज की एक पतली परत ने जीवन के शुरुआती कणों को ढककर **पहली कोशिका झिल्ली** बनाई।',
          },
          bullets: [
            {
              en: 'Life originated in **water**, likely shallow mineral-rich pools / geothermal **hot springs** (~**3.5 billion years ago**).',
              hi: 'वैज्ञानिकों के अनुसार जीवन की उत्पत्ति **जल** (खासकर ~**3.5 अरब वर्ष पहले** के गर्म जलकुंडों) में हुई।',
            },
            {
              en: '**==Puga Valley Hot Springs (Ladakh)==:** Even in freezing Ladakh climate, water stays near boiling point; inhabited by **Thermophiles** (`तापरागी जीवाणु` — heat-loving single-celled bacteria).',
              hi: '**==पुगा घाटी उष्ण स्रोत (लद्दाख)==:** ठंडे लद्दाख में भी यहाँ पानी लगभग उबलता रहता है; इसमें **तापरागी जीवाणु (Thermophiles)** यानी गर्मी पसंद करने वाले एककोशिकीय जीव रहते हैं।',
            },
            {
              en: '**==Birbal Sahni Institute of Palaeosciences (BSIP), Lucknow==:** Discovered rapid **$CaCO_3$ (Calcium Carbonate)** deposits around hot springs shielded early organic molecules from radiation & helped build the first protective membrane.',
              hi: '**==बीरबल साहनी पुराविज्ञान संस्थान (लखनऊ)==:** वैज्ञानिकों ने पाया कि इन स्रोतों के पास **कैल्शियम कार्बोनेट ($CaCO_3$)** की परत ने शुरुआती जैविक अणुओं को विकिरण से बचाया और पहली झिल्ली बनाने में मदद की।',
            },
          ],
          viralTrick: {
            en: '**Map Hack:** **Puga Valley** = Ladakh (India) boiling pool -> **Thermo** (Heat) + **Phile** (Lover) -> Protected by **$CaCO_3$ (Chalk/Marble mineral)** found by **Lucknow BSIP**!',
            hi: '**याद करने का जुगाड़:** **लद्दाख की पुगा घाटी** में उबलता पानी -> **Thermo (गर्मी) + Phile (प्यार)** = तापरागी जीवाणु -> रक्षा की **चूना-पत्थर ($CaCO_3$)** ने (**लखनऊ BSIP** खोज)!',
          },
          inlinePyqIds: [],
        },
        {
          heading: {
            en: '2. Building Blocks: Cell -> Tissue -> Organ -> System',
            hi: '2. घर की ईंट की तरह: कोशिका से पूरा शरीर कैसे बनता है?',
          },
          desiIntuition: {
            en: 'Just as **Brick -> Wall -> Room -> House**, in living bodies **Cell -> Tissue -> Organ -> Organ System -> Body**!',
            hi: 'जैसे **ईंट → दीवार → कमरा → पूरा मकान** बनता है, ठीक वैसे ही हर जीव में **कोशिका → ऊतक → अंग → अंग-तंत्र → पूरा शरीर** बनता है!',
          },
          bullets: [
            {
              en: '**Unicellular (`एककोशिकीय`)**: Whole organism = just **1 cell** doing eating, breathing, waste removal (e.g., **Bacteria, Yeast, Amoeba, Paramecium**).',
              hi: '**एककोशिकीय जीव:** पूरा शरीर सिर्फ **==1 अकेली कोशिका==** से बना (जैसे **जीवाणु, यीस्ट, अमीबा, पैरामीशियम**)।',
            },
            {
              en: '**Multicellular (`बहुकोशिकीय`)**: Millions of cells divide labour (e.g., **Plants, Fish, Birds, Humans**).',
              hi: '**बहुकोशिकीय जीव:** लाखों कोशिकाएँ मिलकर अलग-अलग काम बाँट लेती हैं (जैसे **पेड़-पौधे, मछली, पक्षी, इंसान**)।',
            },
            {
              en: '**NCERT Example (Respiratory System):** Similar cells form **Tissue** -> Organs (**Nostrils + Nasal cavity + Trachea + Lungs**) team up as the **Respiratory System**.',
              hi: '**उदाहरण (श्वसन तंत्र):** एक जैसे काम वाली कोशिकाएँ = **ऊतक** → कई ऊतक = **अंग** → नाक, श्वासनली व फेफड़े मिलकर बनाते हैं **श्वसन तंत्र**।',
            },
          ],
          topperEdge: {
            en: '**⭐ NCERT+ Booster (Tech Gr-III PYQ):** Branch studying cells = **Cytology (`साइटोलॉजी`)** | Division of labour first starts at cell organelles inside unicellular organisms and tissues in multicellular organisms.',
            hi: '**⭐ टॉपर बूस्टर (Nirman Batch):** कोशिका का अध्ययन = **साइटोलॉजी (Cytology)** कहलाता है। भले शरीर बड़ा हो जाए, पर जीवन की असली संरचनात्मक व कार्यात्मक इकाई **कोशिका** ही रहती है।',
          },
          inlinePyqIds: [16, 17],
        },
      ],
    },

    {
      id: 'studying-cells',
      number: '2.1',
      svgLab: 'microscope-scale',
      svgLabTitle: {
        en: 'Interactive Lab 1: Human Eye vs Optical & Electron Microscope Scale (Fig 2.1 & 2.2)',
        hi: 'इंटरैक्टिव लैब 1: आँख की सीमा vs लाइट और इलेक्ट्रॉन सूक्ष्मदर्शी (स्लाइडर सहित)',
      },
      title: {
        en: 'Microscopy, Unit Maths & Pioneers (Hooke, Leeuwenhoek, Brown, Purkinje)',
        hi: 'इतनी छोटी कोशिका को कैसे देखते हैं? सूक्ष्मदर्शी, मात्रक व वैज्ञानिक खोजें',
      },
      summaryTag: { en: 'Section 2.1 • Pages 9–11 + Real Hooke Plate', hi: 'भाग 2.1 • पृष्ठ 9–11 + असली 1665 हुक चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Why Naked Eyes Fail ($0.1\\text{ mm}$ Limit) & Lens Formula',
            hi: '1. नंगी आँख की सीमा ($0.1\\text{ mm}$) और सूक्ष्मदर्शी का जादू',
          },
          desiIntuition: {
            en: 'Make two tiny dots very close on paper—closer than **$0.1\\text{ mm}$** (hair thickness!), your eye blends them into 1 dot. Convex lenses bend light to separate & magnify them **100×**!',
            hi: 'कागज पर दो बारीक बिंदु बहुत पास बनाएं — अगर उनके बीच दूरी **एक बाल की मोटाई ($0.1\\text{ mm}$)** से कम हुई तो आँखें दोनों को एक ही मान लेती हैं। **उत्तल लेंस** उन्हें बड़ा करके साफ अलग दिखाता है!',
          },
          bullets: [
            {
              en: '**==Eye Resolving Limit:==** **$0.1\\text{ mm}$** when held at human eye near point (**==$25\\text{ cm}$==**).',
              hi: '**==मानव नेत्र की विभेदन सीमा:==** स्पष्ट देखने की न्यूनतम दूरी (**$25\\text{ cm}$**) पर **$0.1\\text{ mm}$**।',
            },
            {
              en: '**Compound Light Microscope:** Uses **visible light + 2 convex lenses** (**Eyepiece `नेत्रिका`** × **Objective `अभिदृश्यक`** $10\\times, 40\\times$). Example: $10\\times \\text{ eye} \\times 10\\times \\text{ obj} = \\mathbf{100\\times}$ magnification!',
              hi: '**प्रकाश सूक्ष्मदर्शी:** इसमें दो उत्तल लेंस (**नेत्रिका × अभिदृश्यक लेंस**) होते हैं। यदि दोनों $10\\times$ हैं, तो वस्तु **$10 \\times 10 = 100$ गुना** बड़ी दिखेगी।',
            },
            {
              en: '**3 Microscope Pillars:** **Resolution (`विभेदन`)** clarity, **Contrast (`विपर्यास`)** brightness difference, **Magnification (`आवर्धन`)** zoom.',
              hi: '**सूक्ष्मदर्शी के 3 स्तंभ:** **विभेदन (Resolution)** = धुंधलापन हटाकर साफ दिखाना, **विपर्यास (Contrast)** = भागों के रंग/चमक में अंतर, **आवर्धन (Magnification)** = बड़ा करना।',
            },
            {
              en: '**==Electron Microscope (EM):==** Fires an **electron beam** instead of light -> zooms down to **nanometre scale** ($1\\text{ nm} = 10^{-9}\\text{ m}$). Shows viruses, ribosomes, DNA & **SEM image of *Colocasia* leaf Stomata (`Fig 2.4`)**!',
              hi: '**==इलेक्ट्रॉन सूक्ष्मदर्शी (EM):==** यह प्रकाश की जगह **इलेक्ट्रॉन की किरण (Beam)** फेंकता है और **नैनोमीटर ($10^{-9}\\text{ m}$)** तक दिखाता है — जैसे *कोलोकेशिया* पत्ती के रंध्र (चित्र 2.4)।',
            },
            {
              en: '**Conversion Formula:** $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$ | $1\\text{ }\\mu\\text{m} = 10^{-6}\\text{ m}$ | $1\\text{ nm} = 10^{-9}\\text{ m} = 0.000001\\text{ mm}$.',
              hi: '**यूनिट रूपांतरण:** $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$ | $1\\text{ nm} = 10^{-9}\\text{ m} = 0.000001\\text{ mm}$।',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/hooke-cork-1665.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch2/real/hooke-microscope-1665.webp',
            title: {
              en: 'Original 1665 Cork Plate & Hooke Compound Microscope (Public Domain — Micrographia)',
              hi: 'असली 1665 चित्र: रॉबर्ट हुक द्वारा देखा गया कॉर्क (मधुमक्खी के छत्ते जैसे कोष्ठ) एवं उनका सूक्ष्मदर्शी',
            },
            caption: {
              en: 'Left: Honeycomb chambers ("Cellulae") observed in oak bark cork by Hooke (1665). Right: His self-made 200-300X compound microscope.',
              hi: 'बाएं: रॉबर्ट हुक ने कॉर्क (पेड़ की छाल) में ऐसे छोटे कमरे देखे जिन्हें "सेल" नाम दिया। दाएं: हुक का खुद बनाया 200–300X सूक्ष्मदर्शी।',
            },
          },
        },
        {
          heading: {
            en: '2. Discovery Timeline — All 4 Names Asked in RRB!',
            hi: '2. कोशिका की ऐतिहासिक खोजें (रेलवे में चारों नाम बार-बार आते हैं)',
          },
          desiIntuition: {
            en: 'Remember the difference: Hooke only saw **empty dead walls** like empty jail cells; **Leeuwenhoek** saw **living swimming pond bacteria** 9 years later!',
            hi: 'अंतर समझिए: **हुक** ने सिर्फ मरी हुई खाली ईंटों जैसे कमरे देखे थे (मृत कोशिका); **ल्यूवेनहॉक** ने पहली बार तालाब के पानी में हिलती-डुलती **जीवित कोशिका** देखी!',
          },
          bullets: [
            {
              en: '**==1665 — Robert Hooke:==** Examined thin dead **Cork slice** (tree bark) under self-made **$200\\text{--}300\\times$** microscope -> named honeycomb rooms **"Cell"**.',
              hi: '**==1665 — रॉबर्ट हुक:==** पेड़ की छाल (**कॉर्क के टुकड़े**) में स्व-निर्मित $200\\text{--}300\\times$ सूक्ष्मदर्शी से पहली बार **मृत कोशिका** देखी और `"Cell"` नाम दिया।',
            },
            {
              en: '**==1674 — Antonie van Leeuwenhoek (Nirman+):==** Improved lens & saw the **FIRST LIVING CELL** (free-living bacteria/protozoa in pond water).',
              hi: '**==1674 — एंटोनी वॉन ल्यूवेनहॉक (Nirman+):==** तालाब के पानी में सबसे पहली **जीवित कोशिका (Living Cell)** देखी।',
            },
            {
              en: '**==1831 — Robert Brown (Nirman+):==** Discovered the central **Nucleus (`केंद्रक`)** inside orchid plant cells.',
              hi: '**==1831 — रॉबर्ट ब्राउन (Nirman+):==** कोशिका के अंदर **केंद्रक (Nucleus)** की खोज की।',
            },
            {
              en: '**==1839 — J. E. Purkinje (ALP PYQ!):==** Coined the term **Protoplasm (`जीवद्रव्य`)** for the living fluid substance inside the cell.',
              hi: '**==1839 — जे. ई. पुरकिंजे (ALP प्रश्न!):==** कोशिका के भीतर भरे जीवित तरल पदार्थ को **"प्रोटोप्लाज्म / जीवद्रव्य"** नाम दिया।',
            },
          ],
          viralTrick: {
            en: '**Timeline Trick — "Hu-Lee-Bra-Pur" (हु-ली-ब्रा-पुर):** **1665 Hooke** (Dead Cork) → **1674 Leeuwenhoek** (Live!) → **1831 Brown** (Brain/Nucleus) → **1839 Purkinje** (P = Protoplasm)!',
            hi: '**वायरल ट्रिक — "हु-ली-ब्रा-पुर":** `1665` **हु**क (मृत कॉर्क) → `1674` **ली**वेनहॉक (जीवित) → `1831` **ब्रा**उन (केंद्रक/Brain) → `1839` **पुर**किंजे (**P = Protoplasm / जीवद्रव्य**)!',
          },
          inlinePyqIds: [13, 18],
        },
      ],
    },

    {
      id: 'plasma-membrane-osmosis',
      number: '2.2.1',
      svgLab: 'osmosis-bilayer',
      svgLabTitle: {
        en: 'Interactive Lab 2: Live Osmosis & Fluid-Mosaic Bilayer Simulator (Fig 2.6 & 2.7)',
        hi: 'इंटरैक्टिव लैब 2: परासरण (फूलना vs पिचकना) और लिपिड द्विपरत एनिमेशन',
      },
      title: {
        en: 'Plasma Membrane, Diffusion, Osmosis & 3 Solutions',
        hi: 'कोशिका झिल्ली (स्मार्ट गेटकीपर), विसरण व परासरण (3 तरह के घोल)',
      },
      summaryTag: { en: 'Section 2.2.1 • Pages 11–13', hi: 'भाग 2.2.1 • पृष्ठ 11–13' },
      blocks: [
        {
          heading: {
            en: '1. Plasma Membrane (Smart Gatekeeper) & Diffusion vs Osmosis',
            hi: '1. प्लाज्मा झिल्ली (स्मार्ट चौकीदार) + विसरण बनाम परासरण',
          },
          desiIntuition: {
            en: '**Diffusion** = spraying perfume in a room corner; fragrance spreads automatically across air **without needing any wall/membrane**. **Osmosis** = **special water-only diffusion** through a **smart sieve (plasma membrane)**—like raisins swelling overnight in plain water!',
            hi: '**सरल समझ:** कमरे के कोने में **अगरबत्ती जलाने पर धुआँ/खुशबू पूरे कमरे में फैल जाना = विसरण (Diffusion)** (यहाँ किसी झिल्ली की ज़रूरत नहीं)। लेकिन **रात भर पानी में भीगी किशमिश का फूल जाना = परासरण (Osmosis)**, क्योंकि यहाँ केवल **जल** एक चुनिंदा झिल्ली के आर-पार गया!',
          },
          bullets: [
            {
              en: '**==Selectively Permeable (`वरणात्मक / चुनिंदा पारगम्य`):==** Outer thin membrane (**$7\\text{--}10\\text{ nm}$** thick) present in ALL cells (Plant, Animal, Bacteria). Lets $O_2, CO_2$ (in **lung alveoli**) & water pass, while blocking sugar/salt solute!',
              hi: '**==चुनिंदा (वरणात्मक) पारगम्य झिल्ली:==** **$7\\text{--}10\\text{ nm}$** पतली यह झिल्ली **हर कोशिका** में होती है। यह केवल ज़रूरी पदार्थ ($O_2, CO_2$ फेफड़ों की कूपिकाओं में, व जल) को अंदर-बाहर जाने देती है, नमक/चीनी को रोक लेती है।',
            },
            {
              en: '**Plant Water Uptake:** Plant roots absorb soil water continuously by **Osmosis**.',
              hi: 'पौधों की जड़ें मिट्टी से पानी **परासरण (Osmosis)** द्वारा ही सोखती हैं।',
            },
            {
              en: '**Moong Seed Box Trap (NCERT):** If soaked swollen Moong seeds (12h water) are dropped into strong salt water -> water exits by **exosmosis** and seeds **shrink**!',
              hi: '**NCERT बॉक्स सवाल:** 12 घंटे पानी में भीगे फूले हुए मूंग के बीजों को गाढ़े नमक के घोल में रखने पर अंदर का पानी बाहर निकल जाएगा (**बहिःपरासरण**) और बीज **सिकुड़ जाएंगे**!',
            },
          ],
          topperEdge: {
            en: '**⭐ Ranker + Nirman+ Boosters:** 1) **Fluid-Mosaic Model** (`Singer & Nicolson`): Phospholipid bilayer (**Hydrophilic/water-loving heads OUT**, **Hydrophobic/water-fearing tails IN**) + **Proteins act as Gatekeeper channels**. 2) **Endocytosis** (`Amoeba`): Plasma membrane is flexible, letting *Amoeba* engulf food particles!',
            hi: '**⭐ टॉपर बूस्टर:** **तरल-मोजेक मॉडल:** वसा (लिपिड) की 2 परतें — **पानी से प्यार करने वाला सिर (Hydrophilic Head) बाहर** व **पानी से डरने वाली पूँछें (Hydrophobic Tail) अंदर**; बीच में **प्रोटीन गेटकीपर** तैरते हैं। झिल्ली लचीली होने से ही **अमीबा** **एंडोसाइटोसिस (Endocytosis)** द्वारा भोजन निगलता है!',
          },
          inlinePyqIds: [4],
        },
        {
          heading: {
            en: '2. What Happens in 3 Solution Concentrations? (Fig 2.6)',
            hi: '2. अलग-अलग सांद्रता वाले 3 विलयन (घोल) का कोशिका पर असर',
          },
          bullets: [
            {
              en: '**1. ==Hypotonic Solution (`अल्पपरासारी`):==** Water outside is HIGHER (solute is LOWER than inside cell) -> water rushes **INTO cell** -> **Cell SWELLS (`फूलती है`)**.',
              hi: '**1. ==अल्पपरासारी (Hypotonic):==** बाहर पानी ज़्यादा (नमक/चीनी कम) → पानी अंदर जाएगा → **कोशिका फूल जाएगी (Swells)**।',
            },
            {
              en: '**2. ==Isotonic Solution (`समपरासारी`):==** Equal solute/water inside & outside -> water moves equally both ways -> **ZERO net change** (`सामान आकार`).',
              hi: '**2. ==समपरासारी (Isotonic):==** अंदर और बाहर पानी-नमक बराबर → बराबर आना-जाना → **आकार बिल्कुल नहीं बदलेगा**।',
            },
            {
              en: '**3. ==Hypertonic Solution (`अतिपरासारी`):==** Outside solute is HIGHER (like $20\\%$ salt/sugar / pickle brine) -> water rushes **OUT** -> **Cell SHRINKS (`सिकुड़ती है`)**.',
              hi: '**3. ==अतिपरासारी (Hypertonic):==** बाहर नमक/चीनी बहुत ज़्यादा (जैसे $20\\%$ चीनी या अचार का घोल) → पानी बाहर निकलेगा → **कोशिका सिकुड़ जाएगी (Shrinks)**।',
            },
          ],
          viralTrick: {
            en: '**Never-Forget Tonicity Hack:**\n• **Hypo** sounds like **Hippo 🦛** -> Big, fat, **SWOLLEN** cell!\n• **Hyper** -> When a person gets **Hyper**, they lose cool/water -> Cell **SHRINKS**!\n• **Iso** = **I-Same-O** -> **NO change**!',
            hi: '**वायरल देसी ट्रिक:**\n• **Hypo (हाइपो) = Hippo 🦛 (दरियाई घोड़ा)** → कोशिका **मोटा/फूल** जाएगी!\n• **Hyper (हाइपर)** = ज़्यादा गुस्सा/गर्मी में पसीना (**पानी बाहर**) → कोशिका **पिचक/सिकुड़** जाएगी!\n• **Iso (आइसो)** = **बराबर** → कोई बदलाव नहीं!',
          },
          inlinePyqIds: [5],
        },
      ],
    },

    {
      id: 'cell-wall',
      number: '2.2.2',
      flowDiagramKey: 'cell-wall-permeability',
      svgLab: null,
      title: {
        en: 'Cell Wall, Plasmolysis, Activity 2.3 Stains & Cellular Flexibility',
        hi: 'कोशिका भित्ति (सुरक्षा कवच), जीवद्रव्य कुंचन और प्याज-गाल स्लाइड',
      },
      summaryTag: { en: 'Section 2.2.2 • Pages 13–14 + Real Onion/Cheek Slides', hi: 'भाग 2.2.2 • पृष्ठ 13–14 + असली माइक्रोस्कोप चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Why Plants/Fungi/Bacteria Have a Cell Wall (And Animals Don\'t)',
            hi: '1. पौधों, कवक और जीवाणु में कोशिका भित्ति क्यों होती है?',
          },
          desiIntuition: {
            en: 'Animals can walk indoors during rain or storms; **plants stand rooted outside 24×7**! So nature gave plants an outer wooden **Cellulose armor** (`कोशिका भित्ति`), while animals stayed wall-free for flexible movement (`Cellular Flexibility`).',
            hi: 'जानवर व इंसान आंधी-तूफान-बारिश में घर के अंदर भाग सकते हैं, पर **पेड़-पौधे एक ही जगह खड़े रहकर सब झेलते हैं!** इसलिए भगवान ने पौधों की झिल्ली के बाहर **सेल्युलोस की मज़बूत दीवार (Cell Wall)** दी — जबकि जंतु कोशिकाओं में दीवार न होने से वे आसानी से आकार बदल (लचीलापन) सकती हैं!',
          },
          bullets: [
            {
              en: '**Where Found:** Present in **==Plants, Fungi, and Bacteria==**; **ABSENT** in Animal cells (and **==*Mycoplasma*==**!).',
              hi: '**कहाँ मिलती है:** **==पादप, कवक (Fungi) और जीवाणु==** में; जंतु कोशिका (व अपवाद **==माइकोप्लाज्मा==** बिना भित्ति वाला सूक्ष्मजीव) में **नहीं** होती।',
            },
            {
              en: '**Chemical Composition (PYQ Gold):** Plants = **==Cellulose==** (glucose carbohydrate chain; acts as **==Roughage (`रुक्षांश`)==** aiding human digestion) | Fungi (`Nirman+`) = **Chitin (`काइटिन`)**.',
              hi: '**किससे बनी होती है (PYQ):** पादपों में **==सेल्युलोस==** (अनेक ग्लूकोस से बना कार्बोहाइड्रेट; हमारे खाने में **रुक्षांश/रेशे** का काम करता है) | कवकों में **काइटिन** से।',
            },
            {
              en: '**==-0.33 Trap — Permeability Difference:==** Plasma membrane is **Selectively Permeable**, whereas Cell Wall is **==Freely Permeable==** (lets water & dissolved soil minerals enter roots freely!).',
              hi: '**==-0.33 Trap (सावधान!):==** **कोशिका झिल्ली** चुनिंदा पदार्थों को जाने देती है, लेकिन **कोशिका भित्ति ==पूर्ण पारगम्य (Freely Permeable)==** होती है — तभी जड़ें मिट्टी से पानी-खनिज सोख पाती हैं।',
            },
            {
              en: '**==Plasmolysis (`जीवद्रव्य कुंचन`):==** Put Onion/*Rhoeo* leaf in **$20\\%$ Sugar solution** -> water escapes by osmosis -> inner living contents shrink away **while outer Cell Wall keeps its rectangular frame intact**! Animal cheek cells lack a wall so they shrivel entirely.',
              hi: '**==जीवद्रव्य कुंचन (Plasmolysis):==** प्याज/*रोइओ* पत्ती को $20\\%$ चीनी घोल में डालने पर पानी बाहर निकलता है — **बाहरी भित्ति ज्यों की त्यों रहती है, पर अंदर का पूरा द्रव्य सिकुड़कर दीवार से दूर हट जाता है!**',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/real-onion-cells.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch2/real/cheek-cells.webp',
            title: {
              en: 'Real Microscope Comparison: Onion Peel Cells vs Human Cheek Epithelial Cells',
              hi: 'असली माइक्रोस्कोप तुलना: प्याज की झिल्ली (नियमित ईंट जैसी भित्ति) बनाम मानव गाल कोशिका (असमान झिल्ली)',
            },
            caption: {
              en: 'Left (CC BY 4.0): Rigid rectangular brick-wall Onion epidermis (in class lab stained pink with Safranin). Right (CC BY 4.0): Irregular Methylene-Blue stained Human cheek cells (No cell wall!).',
              hi: 'बाएं: ईंट की दीवार जैसी नियमित प्याज झिल्ली (प्रयोगशाला में सैफ्रेनीन से गुलाबी रंजित)। दाएं: मेथिलीन ब्लू से रंजित मानव गाल की अनियमित कोशिका (भित्ति नहीं!)।',
            },
          },
          viralTrick: {
            en: '**Activity Stain Hack (`ALP 2025 Tested!`):**\n• **P**lant Onion/*Rhoeo* peel = **S**afranin (Pink/Red) 🧅\n• **M**outh/Cheek animal cell = **M**ethylene Blue (**M = M!**) 💙\n• **ALP Trap:** **Cytoplasm** takes **VERY LITTLE** stain; **Nucleus** stains dark!',
            hi: '**अभिरंजक (Stain) वायरल ट्रिक:**\n• **प्याज / पादप** = **सैफ्रेनीन** (गुलाबी/लाल) 🧅\n• **मुँह (Mouth/Cheek)** = **मेथिलीन ब्लू** (`M से Mouth, M से Methylene Blue`) 💙\n• **ALP PYQ:** स्लाइड में **केंद्रक गहरा** रंगता है, जबकि **कोशिकाद्रव्य हल्का (Very Little)** रंग पकड़ता है!',
          },
          inlinePyqIds: [3, 6, 15],
        },
      ],
    },

    {
      id: 'prokaryote-vs-eukaryote',
      number: '2.3',
      svgLab: 'cell-explorer',
      svgLabTitle: {
        en: 'Interactive Lab 3: 3-in-1 Cell Explorer — Plant vs Animal vs Bacterium (Tap Organelles!)',
        hi: 'इंटरैक्टिव लैब 3: पादप vs जंतु vs जीवाणु कोशिका (किसी भी भाग को टच करके जानें)',
      },
      title: {
        en: 'Prokaryotic vs Eukaryotic Cells, Viruses/Prions & Cytoskeleton',
        hi: 'पूर्वकेंद्रकी vs सुकेंद्रकी कोशिका, विषाणु/प्रोसंक व कोशिका-पंजर (Cytoskeleton)',
      },
      summaryTag: { en: 'Section 2.3 • Pages 14–15 • Direct 2025 PYQs', hi: 'भाग 2.3 • पृष्ठ 14–15 • सीधा 2025 PYQ' },
      blocks: [
        {
          heading: {
            en: '1. Prokaryote (`प्रोकैरयोट`) vs Eukaryote (`यूकैरयोट`) — Nucleus Decides!',
            hi: '1. पूर्वकेंद्रकी (Prokaryotic) बनाम सुकेंद्रकी (Eukaryotic) कोशिका',
          },
          desiIntuition: {
            en: '**Prokaryote (Primitive Bacteria)** = a 1-room studio apartment where everything mixes on one open floor (NO walled bedrooms/organelles, NO envelope around DNA!). **Eukaryote (Plant/Animal/Fungi)** = a modern multi-room house with separate locked rooms (**organelles**) and a master office (**Nucleus**).',
            hi: '**सरल समझ:** **प्रोकैरयोटिक (जीवाणु)** एक **बिना दीवारों वाले 1-रूम हॉल** जैसा है जहाँ सारे काम खुले में ही होते हैं — न केंद्रक पर लिफाफा (झिल्ली), न अलग-अलग कमरे! जबकि **यूकैरयोटिक (पादप/जंतु)** एक **बड़े बंगले** जैसा है जिसमें हर काम के लिए अलग झिल्ली वाले कमरे (**कोशिकांग**) और सुरक्षित **केंद्रक (Nucleus)** होता है।',
          },
          bullets: [
            {
              en: '**Prokaryotic (`Pro = Before/Primitive, Karyon = Nucleus`):** Diameter **$1\\text{--}10\\text{ }\\mu\\text{m}$**, usually **unicellular bacteria/cyanobacteria**. NO nuclear membrane & NO membrane-bound organelles! **Only ==1 circular chromosome==** naked in region called **==Nucleoid (`आद्य केंद्रक / केंद्रकाभ`)==**.',
              hi: '**पूर्वकेंद्रकी / प्रोकैरयोट (`Pro = पुराना, Karyon = केंद्रक`):** आकार छोटा (**$1\\text{--}10\\text{ }\\mu\\text{m}$**), जैसे जीवाणु। इनमें केंद्रक झिल्ली व झिल्ली वाले कोशिकांग **नहीं** होते। **केवल ==1 गोल गुणसूत्र==** होता है जिसे **केंद्रकाभ (Nucleoid)** कहते हैं।',
            },
            {
              en: '**Eukaryotic (`Eu = True`):** Diameter **$10\\text{--}100\\text{ }\\mu\\text{m}$**, **Plants, Animals, Fungi, Protists, Algae**. Well-defined membrane-bound nucleus, multiple chromosomes & membrane-bound organelles.',
              hi: '**सुकेंद्रकी / यूकैरयोट (`Eu = असली`):** आकार बड़ा (**$10\\text{--}100\\text{ }\\mu\\text{m}$**), जैसे पादप, जंतु, कवक। इनमें **सुस्पष्ट झिल्ली वाला केंद्रक** व सभी कोशिकांग होते हैं।',
            },
          ],
          topperEdge: {
            en: '**⭐ Nirman+ Ribosome Rule (`70S` vs `80S`):** Even Prokaryotes MUST synthesize proteins—so they DO have **Ribosomes** (`70S` = `50S` large + `30S` small)! Eukaryotes have larger **`80S` (`60S + 40S`)** in cytoplasm (and `70S` inside Mitochondria/Chloroplast!).',
            hi: '**⭐ टॉपर बूस्टर (Nirman Batch):** प्रोकैरियोटिक में भले कोई झिल्ली वाला कोशिकांग न हो, पर **राइबोसोम ज़रूर होता है (`70S = 50S + 30S`)**! यूकैरियोट में **`80S (60S + 40S)`** राइबोसोम पाया जाता है।',
          },
          inlinePyqIds: [12],
        },
        {
          heading: {
            en: '2. NCERT Box Goldmine: Virus/Viroid/Prion + Cytoskeleton & Cell Inclusions',
            hi: '2. NCERT बॉक्स खजाना: विषाणु, विषाणुभ, प्रोसंक और कोशिका-पंजर (Group D 2025 PYQ)',
          },
          bullets: [
            {
              en: '**Acellular (Non-Cellular) Infectious Agents (No light-microscope view, Cell Theory fails on them!):**\n• **Virus (`विषाणु`):** Genetic material (DNA or RNA) **+** **Protein Coat**\n• **Viroid (`विषाणुभ`):** **Genetic material ONLY** (NO protein coat!)\n• **Prion (`प्रोसंक`):** **Misfolded Protein ONLY** (NO DNA/RNA!)',
              hi: '**अकोशिकीय संक्रामक कारक (इन पर कोशिका सिद्धांत लागू नहीं होता!):**\n• **विषाणु (Virus):** आनुवंशिक पदार्थ (DNA/RNA) **+** **प्रोटीन का खोल**\n• **विषाणुभ (Viroids):** सिर्फ आनुवंशिक पदार्थ (**प्रोटीन खोल नहीं**!)\n• **प्रोसंक (Prions):** सिर्फ बिगड़ा/मुड़ा हुआ प्रोटीन (**कोई DNA/RNA नहीं**!)',
            },
            {
              en: '**==Cytoskeleton (`कोशिका-पंजर` — Direct 2025 PYQ!):==** Ultra-fine protein filament network inside eukaryotic cytoplasm (only visible under Electron Microscope). Maintains **cell shape, mechanical support, motility & intracellular transport**!',
              hi: '**==कोशिका-पंजर (Cytoskeleton — Group D 2025 PYQ!):==** यूकैरियोटिक कोशिकाओं में अत्यंत पतले तंतुओं का कंकाल-जाल (केवल इलेक्ट्रॉन सूक्ष्मदर्शी से दिखता है) जो **कोशिका का आकार, सहारा, गति व आंतरिक परिवहन** संभालता है।',
            },
            {
              en: '**Cell Inclusions (`कोशिका अंतरंगक`):** Non-living stored food/minerals inside plant cytoplasm like **Starch** or **Calcium Oxalate / Silica crystals**.',
              hi: '**कोशिका अंतरंगक:** पौधों के कोशिकाद्रव्य में संचित निर्जीव कण, जैसे **मंड (Starch)** या **कैल्शियम ऑक्सलेट / सिलिका के क्रिस्टल**।',
            },
          ],
          viralTrick: {
            en: '**V-V-P Trick:** **V**irus = Gene + Protein | **V**ir**oid** = `"O protein"` (Gene Only) | **Pr**ion = **`Pr`otein Only** (Zero Gene)!',
            hi: '**याद रखने का शॉर्टकट:** **विषाणु** = दोनों (Gene + प्रोटीन) | **विषाणुभ (Viroid)** = प्रोटीन **गायब** | **प्रोसंक (Prion)** = **`P` से सिर्फ Protein** (DNA/RNA गायब)!',
          },
          inlinePyqIds: [1],
        },
      ],
    },

    {
      id: 'nucleus-endomembrane',
      number: '2.3.1-A',
      flowDiagramKey: 'endomembrane-highway',
      svgLab: null,
      title: {
        en: 'Organelles Part 1: Nucleus, Chromosomes, RBC Trap, ER -> Golgi -> Lysosomes',
        hi: 'कोशिकांग भाग 1: केंद्रक (CEO), गुणसूत्र, RBC अपवाद व फैक्टरी-डाकघर-सफाई तंत्र',
      },
      summaryTag: { en: 'Section 2.3.1 • Pages 16–17 + Camillo Golgi Portrait', hi: 'भाग 2.3.1 • पृष्ठ 16–17 + असली गॉल्जी चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Nucleus (CEO), DNA/Genes & Enucleated Mature RBC Exception',
            hi: '1. केंद्रक (कोशिका का दिमाग), गुणसूत्र व परिपक्व RBC अपवाद',
          },
          desiIntuition: {
            en: 'The **Nucleus** is the **Factory CEO Office** storing the master rulebook (**DNA**). When a cell isn\'t dividing, the DNA lies like tangled noodles (**Chromatin**). Right before division, it neatly packs into tight suitcases called **Chromosomes**!',
            hi: '**केंद्रक (Nucleus)** कोशिका का **मुख्य CEO ऑफिस** है जहाँ जीवन की पूरी नियम-किताब (**DNA**) रखी होती है। आराम की अवस्था में यह उलझे धागों (**क्रोमेटिन**) जैसा दिखता है, लेकिन कोशिका बंटने के समय साफ-सुथरे **छड़ाकार गुणसूत्रों (Chromosomes)** में बंध जाता है!',
          },
          bullets: [
            {
              en: '**Double Nuclear Membrane + Nuclear Pores:** Controls transport between nucleus & cytoplasm. Inside sits dense round **Nucleolus (`केंद्रिका`)** which builds **ribosomal subunits**.',
              hi: '**दोहरी केंद्रक झिल्ली + केंद्रक छिद्र:** पदार्थों को अंदर-बाहर जाने देते हैं। भीतर गोल **केंद्रिका (Nucleolus)** राइबोसोम बनाने वाली फैक्टरी है।',
            },
            {
              en: '**Chromosomes = DNA + Proteins:** Visible **ONLY during cell division**! Functional segments of DNA controlling traits = **==Genes (`जीन`)==**.',
              hi: '**गुणसूत्र = DNA + विशेष प्रोटीन:** केवल विभाजन के समय दिखाई देते हैं! DNA के क्रियात्मक खंड जो लक्षण तय करते हैं = **==जीन (Genes)==**।',
            },
            {
              en: '**==Box Trap — Mature Human RBC (`लाल रक्त कोशिका`):==** Has **NO Nucleus** so it can pack more **Haemoglobin** for $O_2$ delivery! Trade-off: cannot divide or repair itself -> dies in **~120 days**.',
              hi: '**==बॉक्स अपवाद — परिपक्व मानव RBC:==** इसमें **केंद्रक नहीं होता** ताकि ज्यादा से ज्यादा **हीमोग्लोबिन ($O_2$ ढोने के लिए)** भरा जा सके! नुकसान: खुद की मरम्मत/विभाजन नहीं कर पाती और **~120 दिन** में नष्ट हो जाती है।',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/camillo-golgi.webp',
            title: {
              en: 'Camillo Golgi (Discovered Golgi Apparatus in Barn Owl Nerve Cells, 1898 — Public Domain)',
              hi: 'वैज्ञानिक कैमिलो गॉल्जी (1898 में श्वेत उल्लू / Barn Owl की तंत्रिका कोशिका में गॉल्जीकाय खोजा)',
            },
            caption: {
              en: 'Italian scientist Camillo Golgi used silver staining to visualize stacked sacs rejected by skeptics until Electron Microscopy confirmed them!',
              hi: 'कैमिलो गॉल्जी की खोज पर शुरू में कई वैज्ञानिकों ने संदेह किया, पर दशकों बाद इलेक्ट्रॉन सूक्ष्मदर्शी ने इसे सही साबित किया।',
            },
          },
        },
        {
          heading: {
            en: '2. Manufacturing -> Packaging -> Cleanup Pipeline (Ribosome -> ER -> Golgi -> Lysosome)',
            hi: '2. सामान बनना (राइबोसोम/ER) -> पैक होना (गॉल्जी) -> सफाई (लाइसोसोम)',
          },
          desiIntuition: {
            en: 'Think of an Amazon Warehouse inside your cell: **Ribosomes/ER** manufacture goods (Proteins/Fats), **Golgi Apparatus** acts as the **Courier Post Office** packing & shipping vesicles, and **Lysosomes** act as the **Garbage Recycler / Suicide Squad**!',
            hi: 'इसे एक **फैक्टरी + अमेज़न वेयरहाउस** की तरह समझें:\n1️⃣ **राइबोसोम व ER** सामान (प्रोटीन/वसा) बनाते हैं,\n2️⃣ **गॉल्जीकाय (डाकघर)** उसे पैक करके सही जगह भेजता है, और\n3️⃣ **लाइसोसोम (सफाईकर्मी)** कचरे व खराब मशीनों को गला कर साफ रखता है!',
          },
          bullets: [
            {
              en: '**Ribosomes (`Protein Factory`):** No membrane! Free in cytoplasm or stuck to ER -> **Protein synthesis**.',
              hi: '**राइबोसोम (प्रोटीन फैक्टरी):** बिना झिल्ली के कण जो **प्रोटीन** बनाते हैं।',
            },
            {
              en: '**Endoplasmic Reticulum (ER — `निर्माणशाला`, 2 types):**\n• **==RER (Rough / खुरदुरी ER):==** Studded with Ribosomes -> makes & secretes **Proteins** (e.g., pancreatic glands).\n• **==SER (Smooth / चिकनी ER):==** NO ribosomes -> makes/stores **Lipids (Fats) & Hormones** + **detoxifies poisons/drugs in liver (`Nirman+ PYQ!`)**. *(Trap Ex Q11: SER does NOT make cellulose!)*',
              hi: '**अंतर्द्रव्यी जालिका (ER — 2 प्रकार):**\n• **==RER (खुरदुरी):==** सतह पर राइबोसोम लगे होने से खुरदुरी -> **प्रोटीन** बनाती है।\n• **==SER (चिकनी):==** राइबोसोम नहीं -> **वसा (Lipids) व हार्मोन** बनाती है + **यकृत (लिवर) में जहर व दवाओं को निष्क्रिय (Detoxify) करती है (`Nirman+`)**। *(अभ्यास प्रश्न Trap: SER सेल्युलोस नहीं बनाती!)*',
            },
            {
              en: '**Golgi Apparatus (`Post Office`, 1898):** Stacked flat membrane sacs (cisternae) discovered in **Barn Owl nerve cells** -> modifies, sorts & packs ER material into **vesicles**; **builds Lysosomes**!',
              hi: '**गॉल्जी उपकरण (कोशिका का डाकघर):** **कैमिलो गॉल्जी (1898, श्वेत उल्लू)** ने खोजा -> चपटी थैलियों की ढेरी जो सामान पैक करती है और **लाइसोसोम बनाती है**!',
            },
            {
              en: '**Lysosomes (`Suicidal / Disposal Bags`):** Single-membrane digestive enzyme sacs -> clean waste & broken organelles; digest own cell if burst! **Sperm Acrosome Box:** Human sperm carries lysosomal enzymes to dissolve egg outer layer for fertilisation!',
              hi: '**लाइसोसोम / लयनकाय (आत्महत्या की थैली):** पाचक एंजाइमों से भरी थैली जो कचरे को पचाती है (कोशिका फटने पर खुद को पचा लेती है)। **शुक्राणु बॉक्स:** मानव शुक्राणु में इसके एंजाइम अंडाणु की बाहरी परत गलाकर निषेचन कराते हैं!',
            },
          ],
          inlinePyqIds: [8, 10, 11],
        },
      ],
    },

    {
      id: 'mitochondria-plastids-vacuoles',
      number: '2.3.1-B',
      flowDiagramKey: 'mito-plastid-power',
      svgLab: null,
      title: {
        en: 'Organelles Part 2: Mitochondria (ATP), 3 Plastids, Vacuoles & Synthetic DNA',
        hi: 'कोशिकांग भाग 2: माइटोकॉन्ड्रिया (बिजलीघर), 3 लवक, रसधानी व संश्लेषित DNA',
      },
      summaryTag: { en: 'Section 2.3.1 • Pages 18–20 + Real TEM & Chloroplast Photos', hi: 'भाग 2.3.1 • पृष्ठ 18–20 + असली TEM व हरितलवक फोटो' },
      blocks: [
        {
          heading: {
            en: '1. Mitochondria (`Powerhouse`) & Plastids — Semi-Autonomous DNA Twins',
            hi: '1. माइटोकॉन्ड्रिया (ऊर्जा केंद्र) और लवक — दोनों में खुद का DNA!',
          },
          desiIntuition: {
            en: 'Notice why **Mitochondria** and **Chloroplasts** act like mini independent factories inside a city: unlike other organelles, **both have their own DNA and 70S ribosomes**, suggesting they evolved from ancient bacteria living inside bigger cells!',
            hi: 'याद रखें: **माइटोकॉन्ड्रिया** शहर का **पावरहाउस** है जहाँ खाना जलकर बिजली (**ATP**) बनती है, और **हरितलवक** पौधे की **सोलर किचन** है जहाँ धूप से खाना बनता है! कमाल की बात यह कि इन दोनों के पास **अपना खुद का DNA और राइबोसोम** होता है!',
          },
          bullets: [
            {
              en: '**==Mitochondria (`सूत्रकणिका` — Discovered Altman 1894, Nirman+):==** Smooth porous outer membrane + deeply folded inner membrane **==Cristae (`अंतःकटक`)==** expanding surface area for chemical reactions! Glucose respiration (**Cytoplasm Glycolysis -> Mitochondria Krebs Cycle -> ==ATP==**, Energy Currency) happens here.',
              hi: '**==माइटोकॉन्ड्रिया (पावरहाउस):==** दोहरी झिल्ली — बाहरी चिकनी व छिद्रित, भीतरी झिल्ली अँगुली जैसे **==अंतःकटक (Cristae)==** में मुड़ी (सतह बढ़ाने हेतु)। यहाँ श्वसन से ग्लूकोस टूटकर **==ATP (ऐडेनोसिन ट्राइफॉस्फेट — ऊर्जा की मुद्रा)==** बनता है।',
            },
            {
              en: '**==3 Types of Plastids (PLANT CELLS ONLY, Double Membrane):==**\n• **Chloroplast (`हरितलवक`):** Green **Chlorophyll** pigment discs inside semi-fluid **==Stroma (`पीठिका`)==** -> makes sugar + stores starch grains.\n• **Chromoplast (`वर्णीलवक`):** Yellow/orange/red pigments in flowers & fruits -> attracts insects/animals for **pollination & seed dispersal**.\n• **Leucoplast (`अवर्णी लवक`):** **Colourless** -> stores **starch, oil & proteins** (e.g., **potato & *Colocasia*/अरबी roots**)!',
              hi: '**==लवक के 3 प्रकार (केवल पादप कोशिकाओं में):==**\n• **हरितलवक (Chloroplast):** अर्ध-तरल **==पीठिका (Stroma)==** में पर्णहरित चक्रिकाएँ → **प्रकाश-संश्लेषण (भोजन निर्माण)**।\n• **वर्णीलवक (Chromoplast):** फूलों-फलों को पीला/नारंगी/लाल रंग देता है → **परागण व बीज प्रकीर्णन** हेतु कीटों को आकर्षित करता है।\n• **अवर्णी लवक (Leucoplast):** **रंगहीन** → **स्टार्च, तेल व प्रोटीन संचय** (जैसे आलू व अरबी की जड़ों में)!',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/mitochondrion-tem.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch2/real/chloroplasts-leaf.webp',
            title: {
              en: 'Real Electron & Leaf Microscopy: Mammalian Mitochondria (TEM) & Green Chloroplasts',
              hi: 'असली प्रयोगशाला दृश्य: इलेक्ट्रॉन सूक्ष्मदर्शी से माइटोकॉन्ड्रिया (बाएं) और पत्ती में हरे लवक (दाएं)',
            },
            caption: {
              en: 'Left (Public Domain TEM): Real folded inner Cristae maximizing ATP generation surface area. Right (CC BY-SA): Green chlorophyll-rich Chloroplasts inside polygonal plant cell walls.',
              hi: 'बाएं: असली माइटोकॉन्ड्रिया की मुड़ी हुई भीतरी परत (Cristae)। दाएं: पादप कोशिकाओं के अंदर हरे हरितलवक।',
            },
          },
          viralTrick: {
            en: '**2 Super-Hit Tricks:**\n• **Own DNA Club = "N-M-P"** -> **N**ucleus, **M**itochondria, **P**lastid!\n• **Plastid Trio = "C-C-L":** **Ch**loro = **H**ara (Kitchen) | **Ch**romo = **C**olour (Paint Box) | **L**euco = **L**ocker (रंगहीन गोदाम — आलू/अरबी)!',
            hi: '**2 वायरल ट्रिक (100% मार्क्स):**\n• **अपना DNA किसके पास? = "N-M-P"** (`Nucleus` केंद्रक, `Mitochondria`, `Plastid` लवक)!\n• **3 लवक ट्रिक:** **ह**रित = हरा खाना | **व**र्णी = **रं**ग (फूल-फल) | **अ**वर्णी = **लॉकर** (आलू-अरबी में गोदाम)!',
          },
          inlinePyqIds: [8, 9],
        },
        {
          heading: {
            en: '2. Vacuoles (Storage Tank + Tonoplast) & Craig Venter 2010 Synthetic DNA',
            hi: '2. रसधानी (पादप टंकी व मुरझाना) और क्रेग वेंटर (2010) का संश्लेषित DNA',
          },
          bullets: [
            {
              en: '**Vacuoles (`रसधानी`):** Mature plant cell has **ONE giant central vacuole** (can occupy $50\\text{--}90\\%$ volume!) bound by single membrane (**==Tonoplast, Nirman+==**) filled with watery **Cell Sap** (water, minerals, sugars, wastes). Keeps plant firm (**turgid**); water loss causes **wilting (`मुरझाना`)**. Animal vacuoles are **very small (`ALP 2025!`)**.',
              hi: '**रसधानी:** पादप कोशिका में **एक बड़ी केंद्रीय रसधानी** (एकल झिल्ली जिसे **टोनोप्लास्ट** कहते हैं) होती है जिसमें **कोशिका-रस** भरा होता है — यही पौधे को सख्त रखती है (पानी घटने पर पौधा मुरझाता है)। जंतुओं में रसधानी **बहुत छोटी** होती है (`ALP 2025`)।',
            },
            {
              en: '**J. Craig Venter Box (2010):** Chemically synthesized entire DNA genome of bacterium **==*Mycoplasma mycoides*==** in lab & inserted it into another bacterial shell (whose own DNA was removed) -> cell grew & divided cleanly under synthetic DNA orders, proving **DNA controls everything**!',
              hi: '**जे. क्रेग वेंटर प्रयोग (2010):** वैज्ञानिकों ने **माइकोप्लाज्मा माइकोइड्स** जीवाणु का पूरा DNA प्रयोगशाला में कृत्रिम रूप से बनाया और बिना DNA वाली दूसरी कोशिका में डाला — कोशिका नए DNA के अनुसार बढ़ने और बंटने लगी!',
            },
          ],
          inlinePyqIds: [7],
        },
      ],
    },

    {
      id: 'cell-division',
      number: '2.4',
      svgLab: 'mitosis-meiosis',
      svgLabTitle: {
        en: 'Interactive Lab 4: Animated Mitosis vs Meiosis Step Simulator (Fig 2.18 & 2.19)',
        hi: 'इंटरैक्टिव लैब 4: समसूत्री (Mitosis) बनाम अर्धसूत्री (Meiosis) स्टेप एनिमेशन',
      },
      title: {
        en: 'Cell Division (Mitosis & Meiosis), Root-Tip Lab, A.K. Sharma & Tissue Culture',
        hi: 'कोशिका विभाजन (समसूत्री व अर्धसूत्री), मूलाग्र प्रयोग, डॉ. अरुण शर्मा व ऊतक संवर्धन',
      },
      summaryTag: { en: 'Section 2.4 • Pages 20–22 + Real Mitosis Slide', hi: 'भाग 2.4 • पृष्ठ 20–22 + असली कोशिका विभाजन स्लाइड' },
      blocks: [
        {
          heading: {
            en: '1. Why Do Cells Divide Instead of Growing Giant? (~1% Daily Replacement!)',
            hi: '1. चोट लगने पर त्वचा खुद कैसे जुड़ जाती है? समसूत्री व अर्धसूत्री विभाजन',
          },
          desiIntuition: {
            en: 'Humans replace **hundreds of billions (~1%) of body cells every single day**! Two division modes:\n• **Mitosis (`सम = बराबर`)** is like **photocopying 1 ID card into 2 identical copies** for skin repair & body growth.\n• **Meiosis (`अर्ध = आधा`)** happens **ONLY in sex organs** to split chromosomes in **half ($46 \\to 23$)** so Mother egg ($23$) + Father sperm ($23$) make a normal $46$-chromosome baby!',
            hi: 'मानव शरीर रोज़ **सैकड़ों अरब कोशिकाएँ (~$1\\%$)** बदलता है! दोनों विभाजन आसानी से समझें:\n• **समसूत्री (`सम = बराबर`)**: **1 से 2 बिल्कुल एक जैसी फोटोकॉपी** बनना (घाव भरने व लंबाई बढ़ने हेतु)।\n• **अर्धसूत्री (`अर्ध = आधा`)**: **सिर्फ जनन अंगों में 1 से 4 युग्मक** बनना जहाँ गुणसूत्र **आधे ($46 \\to 23$)** रह जाते हैं ताकि निषेचन पर बच्चे में फिर $46$ पूरे हो जाएँ!',
          },
          bullets: [
            {
              en: '**Mitosis (`समसूत्री`, 1 step -> 2 identical $2n$ cells):** Used for somatic growth, skin cut healing, maintenance & asexual reproduction; single human zygote multiplies into trillions via mitosis. **Error effect:** Uncontrolled mitosis causes **Tumours** & abnormal somatic chromosome numbers.',
              hi: '**समसूत्री (1 चरण -> 2 समान कोशिकाएँ, $2n \\to 2n$):** शरीर वृद्धि, कटने-छिलने की मरम्मत व अलैंगिक जनन के लिए। **त्रुटि होने पर:** अनियंत्रित विभाजन से **अर्बुद (Tumour/गाँठ)** बन सकता है।',
            },
            {
              en: '**Meiosis (`अर्धसूत्री`, 2 steps -> 4 gametes with $n$ chromosomes & half DNA):** Occurs **ONLY in reproductive organs** (Human **Testes -> Sperm**, **Ovaries -> Ovum**; Plant **Anthers -> Pollen**, **Ovary -> Egg**). Creates **genetic variation** (why siblings look similar yet unique!). **Error effect:** Genetic disorders, developmental defects, miscarriage or reduced fertility.',
              hi: '**अर्धसूत्री (2 चरण -> 4 युग्मक आधे DNA के साथ, $2n \\to n$):** केवल जनन अंगों (**वृषण में शुक्राणु, अंडाशय में अंडाणु; पादप परागकोश में परागकण**) में होता है और **आनुवंशिक विविधता** लाता है। **त्रुटि होने पर:** आनुवंशिक विकार या गर्भपात की समस्या हो सकती है।',
            },
            {
              en: '**Scientist Box (`Arun Kumar Sharma`) & Tissue Culture:** Noted Indian botanist famous for **chromosome research**, plant taxonomy & cytological methods (**Shanti Swarup Bhatnagar & Padma Bhushan awardee**). **Animal Tissue Culture:** Growing isolated animal cells outside the body in sterile **nutrient broth** with controlled temperature, pH & humidity for medicines & vaccines.',
              hi: '**वैज्ञानिक-परिचय (`प्रो. अरुण कुमार शर्मा`):** गुणसूत्रों पर शोध के लिए प्रसिद्ध भारतीय वनस्पतिशास्त्री — **शांति स्वरूप भटनागर पुरस्कार व पद्म भूषण** प्राप्त। **कोशिका संवर्धन (Tissue Culture):** शरीर के बाहर नियंत्रित ताप, pH व नमी में पोषक माध्यम में कोशिकाएँ उगाकर दवाइयाँ व टीके बनाना।',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/real-root-mitosis.webp',
            title: {
              en: 'Real Microscope Slide: Onion Root Tip Dividing Cells (Prophase, Metaphase, Anaphase, Telophase — CC0)',
              hi: 'असली माइक्रोस्कोप स्लाइड (क्रियाकलाप 2.5): प्याज की जड़ (मूलाग्र) में विभाजन की चारों अवस्थाएँ',
            },
            caption: {
              en: 'Real meristematic onion root-tip squash (matching NCERT Activity 2.5 using Aceto-alcohol 1:3 fixative, dil. HCl softening & Aceto-carmine chromosome stain).',
              hi: 'सक्रिय रूप से बंटती प्याज मूलाग्र कोशिकाएँ — प्रयोगशाला में एसीटो-ऐल्कोहॉल (1:3), तनु HCl और एसीटो-कार्मिन से तैयार स्लाइड।',
            },
          },
          inlinePyqIds: [14],
        },
      ],
    },

    {
      id: 'cell-theory-cancer-pcd',
      number: '2.5',
      flowDiagramKey: 'cell-theory-cancer-pcd',
      svgLab: null,
      title: {
        en: 'Cell Theory, Haberlandt Totipotency, Contact Inhibition, Cancer & PCD',
        hi: 'कोशिका सिद्धांत, पूर्णशक्तता (Totipotency), कैंसर और प्रोग्राम्ड डेथ (PCD)',
      },
      summaryTag: { en: 'Section 2.5 • Pages 23–24 + Real Portraits', hi: 'भाग 2.5 • पृष्ठ 23–24 + असली वैज्ञानिक चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Classical Cell Theory (Schleiden, Schwann & Virchow)',
            hi: '1. कोशिका सिद्धांत (3 जर्मन वैज्ञानिक जिन्होंने नियम बनाया)',
          },
          bullets: [
            {
              en: '**1838 — Matthias Schleiden:** German botanist -> all **plants** are made of cells.',
              hi: '**1838 — मैथियास श्लीडेन (वनस्पतिशास्त्री):** सभी **पौधे** कोशिकाओं से बने हैं।',
            },
            {
              en: '**1839 — Theodor Schwann:** German zoologist -> all **animals** are made of cells (`Schwann sounded like Swan/हंस -> Animals!`).',
              hi: '**1839 — थियोडोर श्वान (प्राणिशास्त्री):** सभी **जंतु** कोशिकाओं से बने हैं *(ट्रिक: `Swan = हंस = जंतु`!)*।',
            },
            {
              en: '**1855 — Rudolf Virchow:** Extended theory (*"Omnis cellula e cellula"*) -> **all new cells arise ONLY from pre-existing cells**.',
              hi: '**1855 — रुडोल्फ़ विरचो:** जोड़ा कि **नई कोशिकाएँ केवल पहले से मौजूद (पूर्वविद्यमान) कोशिकाओं से बनती हैं**।',
            },
            {
              en: '**Gottlieb Haberlandt (1902 — Box):** Austrian botanist proposed **==Totipotency (`पूर्णशक्तता`)==** — any living plant cell can regenerate an entire plant with nutrients! Foundation of **Plant Tissue Culture**.',
              hi: '**गॉटलीब हैबरलैंड्ट (1902):** बताया कि कोई भी जीवित पादप कोशिका सही पोषण मिलने पर **पूरा नया पौधा** बना सकती है — इसे **==पूर्णशक्तता (Totipotency)==** कहते हैं!',
            },
          ],
          realImage: {
            url: '/ncert-notes/class9-bio-ch2/real/schleiden.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch2/real/virchow.webp',
            title: {
              en: 'Matthias Schleiden (1838) & Rudolf Virchow (1855) — Historical Portraits (Public Domain)',
              hi: 'असली ऐतिहासिक चित्र: मैथियास श्लीडेन (बाएं) एवं रुडोल्फ़ विरचो (दाएं)',
            },
            caption: {
              en: 'Together with zoologist Theodor Schwann (1839), they established the Classical Cell Theory (Exception: Viruses are acellular!).',
              hi: 'थियोडोर श्वान के साथ इन्होंने कोशिका सिद्धांत दिया (अपवाद: विषाणु कोशिकीय नहीं होते!)।',
            },
          },
        },
        {
          heading: {
            en: '2. Contact Inhibition, Tumours (Cancer) & Programmed Cell Death (PCD)',
            hi: '2. संपर्क अवरोध, कैंसर (अर्बुद) और क्रमादेशित कोशिका मृत्यु (PCD)',
          },
          desiIntuition: {
            en: 'Healthy cells are polite neighbours: when they touch the next cell they **stop multiplying (`Contact Inhibition`)**, and when old/unwanted they quietly self-retire (**`PCD`**)—that\'s how PCD carves gaps between fingers in the womb! **Cancer cells lose both brakes** and pile up uncontrollably.',
            hi: 'स्वस्थ कोशिकाएँ बहुत अनुशासित होती हैं: पड़ोसी कोशिका से छूते ही वे बढ़ना रोक देती हैं (**संपर्क अवरोध**), और काम खत्म होने पर खुद नष्ट हो जाती हैं (**PCD** — जैसे गर्भ में अँगुलियों के बीच की अतिरिक्त कोशिकाएँ मिटने से हमारी अलग-अलग अँगुलियाँ बनती हैं!)। **कैंसर कोशिकाएँ ये ब्रेक खो देती हैं** और अनियंत्रित भीड़ (**अर्बुद/Tumour**) बनाती हैं!',
          },
          bullets: [
            {
              en: '**Contact Inhibition (`संपर्क अवरोध`):** Normal animal cells stop dividing upon touching neighbours. **Plant cells do NOT show contact inhibition** due to rigid cell walls.',
              hi: '**संपर्क अवरोध:** सामान्य जंतु कोशिकाएँ आपस में छूते ही विभाजन रोक देती हैं। **पादप कोशिकाएँ** दृढ़ भित्ति के कारण ऐसा नहीं दर्शातीं।',
            },
            {
              en: '**Tumours & Cancer:** Cancer cells ignore stops -> uncontrolled division forms **Benign (`सुदम्य` — localized)** or **Malignant (`दुर्दम` — invades & spreads)** tumours.',
              hi: '**कैंसर:** अनियंत्रित विभाजन से **अर्बुद (गाँठ)** बनते हैं — **सुदम्य** (एक जगह सीमित) या **दुर्दम** (पूरे शरीर में फैलने वाले)।',
            },
            {
              en: '**==Programmed Cell Death (PCD — Group D 2025 PYQ!):==** Genetically controlled self-destruction needed for normal organ sculpting (eliminates embryo webbing between fingers), quality control & immunity.',
              hi: '**==क्रमादेशित कोशिका मृत्यु (PCD — Group D 2025 PYQ!):==** आनुवंशिक नियंत्रण से होने वाली उपयोगी मृत्यु जो भ्रूण में अँगुलियाँ अलग करने व शरीर की सुरक्षा के लिए ज़रूरी है।',
            },
          ],
          inlinePyqIds: [2],
        },
      ],
    },
  ],

  confusionBreakers: [
    {
      pair: { en: 'Diffusion vs Osmosis', hi: 'विसरण (Diffusion) बनाम परासरण (Osmosis)' },
      left: { en: 'Any state (Solid/Liquid/Gas) moves High -> Low; NO membrane needed.', hi: 'कोई भी कण (गैस/द्रव/ठोस) उच्च से निम्न सांद्रता; किसी झिल्ली की ज़रूरत नहीं।' },
      right: { en: 'ONLY Water moves across a Selectively Permeable Membrane.', hi: 'सिर्फ जल के अणु वरणात्मक पारगम्य झिल्ली के पार जाते हैं।' },
    },
    {
      pair: { en: 'Cell Wall vs Plasma Membrane Permeability', hi: 'कोशिका भित्ति बनाम कोशिका झिल्ली पारगम्यता' },
      left: { en: 'Cell Wall = Freely Permeable (dead/rigid Cellulose in plants).', hi: 'कोशिका भित्ति = पूर्ण पारगम्य (सभी जल व खनिज जा सकते हैं; सेल्युलोस की बनी)।' },
      right: { en: 'Plasma Membrane = Selectively Permeable (living Lipid+Protein bilayer).', hi: 'कोशिका झिल्ली = चुनिंदा/वरणात्मक पारगम्य (लिपिड + प्रोटीन)।' },
    },
    {
      pair: { en: 'Chromatin vs Chromosomes', hi: 'क्रोमेटिन बनाम गुणसूत्र (Chromosome)' },
      left: { en: 'Non-dividing cell: entangled thread-like DNA + protein mesh.', hi: 'जब कोशिका बंट नहीं रही हो तो उलझे धागे जैसा क्रोमेटिन।' },
      right: { en: 'Dividing cell ONLY: condensed rod-shaped structures.', hi: 'केवल विभाजन के समय सिमटकर छड़ाकार गुणसूत्र बनते हैं।' },
    },
    {
      pair: { en: 'Prokaryotic 70S vs Eukaryotic 80S Ribosome', hi: '70S बनाम 80S राइबोसोम (Nirman+)' },
      left: { en: '70S (50S + 30S) -> Bacteria + inside Mitochondria/Chloroplast.', hi: '70S (50S + 30S) -> जीवाणुओं तथा माइटोकॉन्ड्रिया/हरितलवक के भीतर।' },
      right: { en: '80S (60S + 40S) -> Eukaryotic cytoplasm & RER.', hi: '80S (60S + 40S) -> यूकैरियोटिक कोशिकाद्रव्य व RER पर।' },
    },
  ],

  pioneers: [
    {
      name: { en: 'Robert Hooke (1665)', hi: 'रॉबर्ट हुक (1665)' },
      country: { en: 'England • Book: Micrographia', hi: 'इंग्लैंड • पुस्तक: माइक्रोग्राफिया' },
      badge: { en: 'First Cell (Dead Cork)', hi: 'पहली कोशिका खोज' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/hooke-microscope-1665.webp',
      fact: {
        en: 'Used self-made $200\\text{--}300\\times$ compound microscope on thin dead **Cork slice** -> named box rooms **"Cell"**.',
        hi: 'स्व-निर्मित $200\\text{--}300\\times$ सूक्ष्मदर्शी से कॉर्क की छाल में खाली बक्से देखे और **"सेल"** नाम दिया।',
      },
    },
    {
      name: { en: 'Antonie van Leeuwenhoek (1674)', hi: 'एंटोनी वॉन ल्यूवेनहॉक (1674)' },
      country: { en: 'Netherlands • Nirman+ Boost', hi: 'नीदरलैंड्स • रेलवे बूस्टर' },
      badge: { en: 'First LIVING Cell', hi: 'पहली जीवित कोशिका' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/leeuwenhoek.webp',
      fact: {
        en: 'Crafted superior single-lens microscopes and observed the **first living cells** (pond bacteria/protozoa) — called Father of Microbiology.',
        hi: 'तालाब के पानी में पहली बार **जीवित कोशिका (जीवाणु/प्रोटोजोआ)** देखी। सूक्ष्मजैविकी के जनक।',
      },
    },
    {
      name: { en: 'Schleiden (1838), Schwann (1839) & Virchow (1855)', hi: 'श्लीडेन, श्वान एवं विरचो' },
      country: { en: 'German Trio', hi: 'जर्मन वैज्ञानिक त्रयी' },
      badge: { en: 'Cell Theory Pillars', hi: 'कोशिका सिद्धांत' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/schwann.webp',
      fact: {
        en: 'Schleiden (Plants = cells), Schwann (Animals = cells), Virchow ("New cells come ONLY from pre-existing cells").',
        hi: 'श्लीडेन (पादप कोशिका), श्वान (जंतु कोशिका) व विरचो (नई कोशिका पूर्वविद्यमान कोशिका से बनती है)।',
      },
    },
    {
      name: { en: 'Camillo Golgi (1898)', hi: 'कैमिलो गॉल्जी (1898)' },
      country: { en: 'Italy • Nobel Laureate', hi: 'इटली • नोबेल विजेता' },
      badge: { en: 'Golgi Apparatus', hi: 'गॉल्जीकाय' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/camillo-golgi.webp',
      fact: {
        en: 'Identified stacked cisternae in **Barn Owl nerve cells** via silver staining; confirmed decades later by Electron Microscopy.',
        hi: '**श्वेत उल्लू (Barn Owl)** की तंत्रिका कोशिका में विशेष अभिरंजन से गॉल्जी उपकरण की खोज की।',
      },
    },
    {
      name: { en: 'Gottlieb Haberlandt (1902)', hi: 'गॉटलीब हैबरलैंड्ट (1902)' },
      country: { en: 'Austria • Botanist', hi: 'ऑस्ट्रिया • वनस्पतिशास्त्री' },
      badge: { en: 'Totipotency', hi: 'पूर्णशक्तता (Totipotency)' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/schleiden.webp',
      fact: {
        en: 'Proposed any living mature plant cell can regenerate a whole plant with right nutrients — foundation of **Plant Tissue Culture**.',
        hi: 'सुझाव दिया कि एक अकेली जीवित पादप कोशिका सही पोषण से पूरा पौधा बना सकती है (ऊतक संवर्धन की नींव)।',
      },
    },
    {
      name: { en: 'Arun Kumar Sharma & J. Craig Venter (2010)', hi: 'प्रो. अरुण कुमार शर्मा व जे. क्रेग वेंटर' },
      country: { en: 'India + Synthetic Genomics', hi: 'भारत + संश्लेषिक DNA (2010)' },
      badge: { en: 'Modern Milestones', hi: 'आधुनिक मील के पत्थर' },
      photoUrl: '/ncert-notes/class9-bio-ch2/real/virchow.webp',
      fact: {
        en: '**A.K. Sharma:** Padma Bhushan & Bhatnagar winner for plant chromosome studies. **J. Craig Venter (2010):** Built synthetic *Mycoplasma mycoides* DNA that booted a live bacterial shell.',
        hi: '**डॉ. अरुण शर्मा:** पादप गुणसूत्र शोध हेतु पद्म भूषण व भटनागर पुरस्कार। **क्रेग वेंटर (2010):** कृत्रिम *माइकोप्लाज्मा* DNA से जीवित कोशिका चलाकर दिखाई।',
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
          hi: 'प्रकाश के बजाय इलेक्ट्रॉन पुंज से **$1\\text{ nm}$** स्तर तक की संरचनाएं साफ दिखती हैं।',
        },
        {
          en: 'Colocasia lower surface shows bean-shaped **Guard Cells** around **Stomatal pores** ($0.05\\text{ mm}$ scale).',
          hi: '*कोलोकेशिया* पत्ती की निचली सतह पर **रंध्र (Stomata)** और द्वार कोशिकाएँ दिखती हैं।',
        },
      ],
    },
    {
      id: 'vis-onion-cheek',
      figRef: { en: 'Figures 2.8 & 2.9 (Activity 2.3)', hi: 'चित्र 2.8 एवं 2.9 (क्रियाकलाप 2.3)' },
      title: {
        en: 'Safranin Onion Peel vs 20% Sugar Plasmolysis vs Methylene Blue Cheek Cells',
        hi: 'सैफ्रेनीन प्याज झिल्ली बनाम 20% चीनी में जीवद्रव्य कुंचन बनाम मेथिलीन ब्लू गाल कोशिका',
      },
      imageUrl: '/ncert-notes/class9-bio-ch2/onion-cheek-microscopy.webp',
      hotspots: [
        {
          en: 'Left Circle (**Safranin Pink**): Rigid brick-like rectangular plant Onion / *Rhoeo* cells.',
          hi: 'बायाँ (**सैफ्रेनीन**): ईंट की तरह सजी हुई कठोर पादप कोशिकाएँ।',
        },
        {
          en: 'Middle Circle (**20% Sugar**): **Plasmolysis** — outer Cell Wall intact while inner cell content shrinks!',
          hi: 'मध्य (**20% चीनी घोल**): **जीवद्रव्य कुंचन** — भित्ति वैसी ही है, अंदर का द्रव्य सिकुड़ गया!',
        },
        {
          en: 'Right Circle (**Methylene Blue**): Irregular animal cheek epithelial cells (**no cell wall**).',
          hi: 'दायाँ (**मेथिलीन ब्लू**): अनियमित आकार की मानव गाल कोशिकाएँ (**भित्ति अनुपस्थित**)।',
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
          hi: 'रसायन अनुपात: **एसीटो-ऐल्कोहॉल (एसिटिक अम्ल : एथेनॉल :: 1 : 3)** में 24 घंटे -> **70% एथेनॉल** संरक्षण।',
        },
        {
          en: 'Softening + Stain: Dilute **HCl** (1–2 drops, 10–15 min) -> **Aceto-carmine stain** + gentle spirit-lamp heating.',
          hi: 'नरम करना व रंजन: तनु **HCl** से कोमल करके **एसीटो-कार्मिन** अभिरंजक और हल्की आँच से गुणसूत्र दिखते हैं।',
        },
      ],
    },
  ],

  activities: [
    {
      num: '2.1',
      title: { en: 'Estimating Cell Size Under Microscope (Onion Peel)', hi: 'सूक्ष्मदर्शी से कोशिका के वास्तविक आकार का हिसाब लगाना' },
      materials: { en: 'Compound Microscope, transparent mm scale, onion slide', hi: 'प्रकाश सूक्ष्मदर्शी, मिलीमीटर (mm) पारदर्शी स्केल, प्याज स्लाइड' },
      steps: {
        en: '1. Measure circular view diameter with mm scale (e.g. $5\\text{ mm} = 5000\\text{ }\\mu\\text{m}$).\n2. Count onion cells lined along that diameter (e.g. $25$ cells).\n3. Size $= 5000\\text{ }\\mu\\text{m} / 25 = 200\\text{ }\\mu\\text{m}$. Total zoom $= 10\\times \\times 10\\times = 100\\times$.',
        hi: '1. गोल दिखने वाले दायरे का व्यास नापें (मान लें $5\\text{ mm} = 5000\\text{ }\\mu\\text{m}$)।\n2. अब सीधी लाइन में कुल कोशिकाएँ गिनें (मान लें $25$)।\n3. एक कोशिका $= 5000 / 25 = 200\\text{ }\\mu\\text{m}$। कुल आवर्धन ($10\\times \\times 10\\times$) $= 100$ गुना।',
      },
      examTakeaway: { en: 'Formula: $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$. Cell size $= \\text{Diameter in }\\mu\\text{m} / \\text{Cell count}$.', hi: 'सूत्र: $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$। कोशिका आमाप = माइक्रोमीटर में व्यास ÷ कोशिका संख्या।' },
    },
    {
      num: '2.2',
      title: { en: 'Potato Cube Osmosis (Plain Water vs 20% Salt/Sugar)', hi: 'आलू के टुकड़ों द्वारा परासरण प्रयोग (सादा पानी बनाम 20% घोल)' },
      materials: { en: '2 equal potato cubes, balance, plain water & 20% salt/sugar solution', hi: 'समान आकार के 2 आलू के टुकड़े, तराजू, सादा पानी व 20% नमक/चीनी घोल' },
      steps: {
        en: '1. Weigh both cubes before putting into Beaker A (water) and Beaker B (20% solution).\n2. Wait 1 hour undisturbed & re-weigh.',
        hi: '1. पहले दोनों टुकड़ों का वजन नाप लें। बीकर क (सादा पानी) व बीकर ख (20% नमक/चीनी) में डालें।\n2. 1 घंटे बाद फिर से वजन व आकार नापें।',
      },
      examTakeaway: { en: 'Beaker A (Hypotonic) swells & gains weight; Beaker B (Hypertonic) shrinks & loses weight because membrane passes water, not sugar/salt.', hi: 'बीकर क (सादा पानी) वाला आलू फूलेगा व भारी होगा; बीकर ख (20% घोल) वाला सिकुड़ेगा व हल्का होगा।' },
    },
    {
      num: '2.3',
      title: { en: 'Onion/Rhoeo (Safranin) vs Cheek (Methylene Blue) + 20% Sugar Plasmolysis', hi: 'प्याज (सैफ्रेनीन) बनाम गाल कोशिका (मेथिलीन ब्लू) + जीवद्रव्य कुंचन' },
      materials: { en: 'Onion/Rhoeo peel + Safranin | Cheek swab + Methylene Blue | 20% sugar drop', hi: 'प्याज/रोइओ छिलका + सैफ्रेनीन | गाल खुरचन + मेथिलीन ब्लू | 20% चीनी घोल' },
      steps: {
        en: '1. Stain plant peel with **Safranin** (brick-like rigid boxes); stain human cheek cells with **Methylene Blue** (irregular shape).\n2. Add 20% sugar for 30 min -> Plant protoplasm shrinks inside rigid wall (**Plasmolysis**); Cheek cell shrivels completely.',
        hi: '1. पादप झिल्ली को **सैफ्रेनीन** से रंगें (ईंट जैसे डिब्बे दिखेंगे); गाल की कोशिकाओं को **मेथिलीन ब्लू** से (अनियमित आकार)।\n2. $20\\%$ चीनी डालने पर पादप की भित्ति स्थिर रहकर अंदर का द्रव्य सिकुड़ता है (**जीवद्रव्य कुंचन**), जबकि गाल की कोशिका पूरी पिचक जाती है।',
      },
      examTakeaway: { en: 'Plant = Safranin | Cheek = Methylene Blue. Cytoplasm stains very lightly while Nucleus stains dark!', hi: 'प्याज = सैफ्रेनीन | गाल = मेथिलीन ब्लू। कोशिकाद्रव्य हल्का रंजित व केंद्रक गहरा दिखता है।' },
    },
    {
      num: '2.4',
      title: { en: 'Comparing Bacterium, Plant & Animal Cell Models (Tables 2.1 & 2.2)', hi: 'जीवाणु, पादप और जंतु कोशिका की संरचना तुलना (तालिका 2.1 व 2.2)' },
      materials: { en: 'Labeled Prokaryotic, Plant & Animal diagrams', hi: 'जीवाणु, पादप व जंतु कोशिका आरेख' },
      steps: {
        en: 'Check each of 6 structural features (Membrane, Wall, Cytoplasm, Nucleus, Nucleoid, Organelles) and record in Table 2.1.',
        hi: 'तीनों में कोशिका झिल्ली, भित्ति, द्रव्य, केंद्रक, केंद्रकाभ व कोशिकांगों की उपस्थिति-अनुपस्थिति तालिका 2.1 में भरें।',
      },
      examTakeaway: { en: 'Universal to ALL 3: Plasma Membrane + Cytoplasm + Ribosomes. Wall in Bacteria & Plants (chemically different!).', hi: 'तीनों में कॉमन: प्लाज्मा झिल्ली + कोशिकाद्रव्य + राइबोसोम। भित्ति जीवाणु व पादप में है, जंतु में नहीं।' },
    },
    {
      num: '2.5',
      title: { en: 'Onion Root Tip Mitosis Squash Slide Prep', hi: 'प्याज की जड़ (मूलाग्र) में समसूत्री विभाजन देखने का प्रयोग' },
      materials: { en: 'Onion bulb jar (5–6d), Aceto-alcohol (1:3), 70% ethanol, dil. HCl, Aceto-carmine stain', hi: 'जार में उगा प्याज, एसीटो-ऐल्कोहॉल (1:3), 70% एथेनॉल, तनु HCl, एसीटो-कार्मिन' },
      steps: {
        en: '1. Grow 2–3 cm roots; fix 24h in Aceto-alcohol (Glacial acetic acid : Ethanol :: 1:3) -> preserve in 70% Ethanol.\n2. Soften with 1–2 drops dil. HCl (10–15 min), stain with Aceto-carmine (warm gently), squash under coverslip.',
        hi: '1. 5–6 दिन में उगी जड़ों को 1:3 एसीटो-ऐल्कोहॉल में 24h रखकर 70% एथेनॉल में सहेजें।\n2. तनु HCl से नरम कर **एसीटो-कार्मिन** से रंगें व हल्का गर्म कर अँगूठे से दबाकर विभाजन अवस्थाएँ देखें।',
      },
      examTakeaway: { en: 'Why root tip? Meristematic root-tip cells divide non-stop showing Interphase through Telophase!', hi: 'मूलाग्र ही क्यों? जड़ के शीर्ष की कोशिकाएँ लगातार विभाजित होती रहती हैं।' },
    },
  ],

  tables: [
    {
      id: 'table-2-1',
      title: { en: 'NCERT Table 2.1 — Bacteria vs Plant vs Animal Cell', hi: 'NCERT तालिका 2.1 — जीवाणु बनाम पादप बनाम जंतु कोशिका' },
      headers: {
        en: ['#', 'Structure', 'Bacteria (Prok.)', 'Plant Cell', 'Animal Cell'],
        hi: ['क्र.', 'कोशिका भाग', 'जीवाणु', 'पादप कोशिका', 'जंतु कोशिका'],
      },
      rows: [
        ['1', { en: 'Plasma Membrane', hi: 'कोशिका झिल्ली' }, { en: 'Present ✓', hi: 'हाँ ✓' }, { en: 'Present ✓', hi: 'हाँ ✓' }, { en: 'Present ✓', hi: 'हाँ ✓' }],
        ['2', { en: 'Cell Wall', hi: 'कोशिका भित्ति' }, { en: 'Present ✓', hi: 'हाँ ✓' }, { en: 'Cellulose ✓', hi: 'हाँ (सेल्युलोस) ✓' }, { en: 'Absent ✗', hi: 'नहीं ✗' }],
        ['3', { en: 'Cytoplasm', hi: 'कोशिकाद्रव्य' }, { en: 'Present ✓', hi: 'हाँ ✓' }, { en: 'Present ✓', hi: 'हाँ ✓' }, { en: 'Present ✓', hi: 'हाँ ✓' }],
        ['4', { en: 'True Membrane Nucleus', hi: 'झिल्ली वाला केंद्रक' }, { en: 'Absent ✗', hi: 'नहीं ✗' }, { en: 'Present ✓', hi: 'हाँ ✓' }, { en: 'Present ✓', hi: 'हाँ ✓' }],
        ['5', { en: 'Nucleoid (Naked DNA)', hi: 'केंद्रकाभ (खुला DNA)' }, { en: 'Present ✓', hi: 'हाँ ✓' }, { en: 'Absent ✗', hi: 'नहीं ✗' }, { en: 'Absent ✗', hi: 'नहीं ✗' }],
        ['6', { en: 'Membrane Organelles', hi: 'झिल्ली वाले कोशिकांग' }, { en: 'Absent ✗', hi: 'नहीं ✗' }, { en: 'Present (+Plastids) ✓', hi: 'हाँ (+लवक) ✓' }, { en: 'Present (No Plastids) ✓', hi: 'हाँ (लवक नहीं) ✓' }],
      ],
    },
    {
      id: 'table-2-2',
      title: { en: 'NCERT Table 2.2 — Prokaryotic vs Eukaryotic (+ Nirman+ 70S/80S & Chromosome Row)', hi: 'NCERT तालिका 2.2 — प्रोकैरियोटिक बनाम यूकैरियोटिक (+ 70S/80S बूस्टर)' },
      headers: {
        en: ['Feature', 'Prokaryotic Cell', 'Eukaryotic Cell'],
        hi: ['विशेषता', 'पूर्वकेंद्रकी (Prokaryotic)', 'सुकेंद्रकी (Eukaryotic)'],
      },
      rows: [
        [{ en: 'Genetic Region', hi: 'आनुवंशिक क्षेत्र' }, { en: 'Nucleoid (Naked, No membrane)', hi: 'केंद्रकाभ (बिना झिल्ली वाला)' }, { en: 'True Membrane-bound Nucleus', hi: 'झिल्ली से बंद असली केंद्रक' }],
        [{ en: 'Typical Diameter', hi: 'सामान्य व्यास' }, { en: '1 to 10 µm', hi: '1 से 10 µm' }, { en: '10 to 100 µm', hi: '10 से 100 µm' }],
        [{ en: 'Chromosomes', hi: 'गुणसूत्र संख्या' }, { en: 'Single (1 circular DNA)', hi: 'केवल 1 (एकल गुणसूत्र)' }, { en: 'More than 1 (Linear)', hi: 'एक से अधिक' }],
        [{ en: 'Ribosomes (Nirman+)', hi: 'राइबोसोम (Nirman+)' }, { en: '70S (50S + 30S)', hi: '70S (50S + 30S)' }, { en: '80S (60S + 40S)', hi: '80S (60S + 40S)' }],
        [{ en: 'Membrane Organelles', hi: 'झिल्ली वाले कोशिकांग' }, { en: 'Absent', hi: 'अनुपस्थित' }, { en: 'Present (Mitochondria, ER, Golgi...)', hi: 'उपस्थित' }],
      ],
    },
    {
      id: 'table-organelles-master',
      title: { en: 'Pro Master Organelles Table (Membranes, Own DNA & Railway Nicknames)', hi: 'सभी कोशिकांगों की मास्टर सारणी (झिल्ली, DNA व परीक्षा उपनाम)' },
      headers: {
        en: ['Organelle', 'Membrane Count', 'Own DNA?', 'Key Work', 'PYQ Alias'],
        hi: ['कोशिकांग', 'झिल्ली', 'स्वयं DNA?', 'मुख्य काम', 'परीक्षा उपनाम'],
      },
      rows: [
        [{ en: 'Nucleus', hi: 'केंद्रक' }, { en: 'Double', hi: 'दोहरी' }, { en: 'Yes ✓', hi: 'हाँ ✓' }, { en: 'Cell control & heredity genes', hi: 'नियंत्रण व वंशागति' }, { en: 'Brain / CEO', hi: 'नियंत्रण कक्ष' }],
        [{ en: 'Mitochondria', hi: 'माइटोकॉन्ड्रिया' }, { en: 'Double (Cristae)', hi: 'दोहरी' }, { en: 'Yes (+70S) ✓', hi: 'हाँ ✓' }, { en: 'Respiration -> ATP energy', hi: 'श्वसन से ATP ऊर्जा' }, { en: 'Powerhouse', hi: 'ऊर्जा केंद्र / बिजलीघर' }],
        [{ en: 'Plastids (Plants)', hi: 'लवक (केवल पादप)' }, { en: 'Double', hi: 'दोहरी' }, { en: 'Yes (+70S) ✓', hi: 'हाँ ✓' }, { en: 'Chloro/Chromo/Leucoplast', hi: 'भोजन, रंग व भंडारण' }, { en: 'Plant Kitchen/Pantry', hi: 'पादप रसोई' }],
        [{ en: 'Ribosome', hi: 'राइबोसोम' }, { en: 'None (0)', hi: 'कोई नहीं (0)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'Protein making (Palade 1955)', hi: 'प्रोटीन निर्माण' }, { en: 'Protein Factory', hi: 'प्रोटीन फैक्टरी' }],
        [{ en: 'ER (RER / SER)', hi: 'अंतर्द्रव्यी जालिका' }, { en: 'Single (1)', hi: 'एकल (1)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'RER: Protein | SER: Fat+Detox', hi: 'RER: प्रोटीन | SER: वसा' }, { en: 'Workshop', hi: 'निर्माणशाला' }],
        [{ en: 'Golgi Apparatus', hi: 'गॉल्जी उपकरण' }, { en: 'Single (1)', hi: 'एकल (1)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'Modify, pack & form Lysosomes', hi: 'पैकेजिंग व लाइसोसोम निर्माण' }, { en: 'Post Office', hi: 'कोशिका डाकघर' }],
        [{ en: 'Lysosome', hi: 'लाइसोसोम' }, { en: 'Single (1)', hi: 'एकल (1)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'Clean-up digestive enzymes', hi: 'कचरा पाचन / सफाई' }, { en: 'Suicide Bag', hi: 'आत्महत्या की थैली' }],
        [{ en: 'Vacuole', hi: 'रसधानी' }, { en: 'Single (Tonoplast)', hi: 'एकल (टोनोप्लास्ट)' }, { en: 'No ✗', hi: 'नहीं ✗' }, { en: 'Cell sap storage & plant rigidity', hi: 'कोशिका-रस व दृढ़ता' }, { en: 'Storage Tank', hi: 'भंडार टैंक' }],
      ],
    },
    {
      id: 'table-division-compare',
      title: { en: 'Mitosis vs Meiosis Comparison', hi: 'समसूत्री बनाम अर्धसूत्री विभाजन' },
      headers: { en: ['Feature', 'Mitosis', 'Meiosis'], hi: ['अंतर बिंदु', 'समसूत्री (Mitosis)', 'अर्धसूत्री (Meiosis)'] },
      rows: [
        [{ en: 'Where?', hi: 'कहाँ होता है?' }, { en: 'Body (Somatic) cells', hi: 'शरीर की कायिक कोशिकाओं में' }, { en: 'Reproductive organs ONLY', hi: 'केवल जनन अंगों में' }],
        [{ en: 'Outcome', hi: 'कुल नई कोशिकाएँ' }, { en: '2 Identical cells ($2n \\to 2n$)', hi: '2 समान कोशिकाएँ ($2n \\to 2n$)' }, { en: '4 Gametes ($2n \\to n$ Half DNA)', hi: '4 युग्मक ($2n \\to n$ आधा DNA)' }],
        [{ en: 'Purpose', hi: 'मुख्य उद्देश्य' }, { en: 'Growth & Wound Repair', hi: 'वृद्धि और चोट की मरम्मत' }, { en: 'Sexual gametes & Variation', hi: 'लैंगिक जनन व विविधता' }],
      ],
    },
  ],

  inTextQuestions: [
    {
      num: 'Think 1 (p.14)',
      q: { en: 'Why do stationary plants need a cell wall while mobile animals do not?', hi: 'पौधे हिल-डुल नहीं सकते, तो उन्हें कोशिका भित्ति की ज़रूरत क्यों होती है?' },
      a: { en: 'Plants stay rooted outdoors facing wind, rain & osmotic swelling, needing rigid cellulose cell walls; mobile animals skip walls for cellular flexibility.', hi: 'पौधे आंधी-बारिश से भाग नहीं सकते, इसलिए सुरक्षा व खड़े रहने के लिए दृढ़ सेल्युलोस भित्ति ज़रूरी है। जंतुओं में न होने से उन्हें लचीलापन मिलता है।' },
    },
    {
      num: 'Think 2 (p.14)',
      q: { en: 'What happens if plant cell wall became as flexible as plasma membrane?', hi: 'अगर पादप कोशिका भित्ति झिल्ली की तरह मुलायम हो जाए तो क्या होगा?' },
      a: { en: 'Stems & leaves lose rigidity, plants wilt/collapse, and cells may burst in pure water.', hi: 'पौधे सीधे खड़े नहीं रह पाएंगे, मुरझा जाएंगे और शुद्ध पानी में फूलकर फट भी सकते हैं।' },
    },
    {
      num: 'Think 3 (p.14)',
      q: { en: 'Why weigh both potato cubes before soaking in water & salt solution?', hi: 'आलू के टुकड़ों को घोल में डालने से पहले उनका वजन तौलना क्यों ज़रूरी है?' },
      a: { en: 'Without baseline initial weight, net water gain or loss via osmosis cannot be calculated.', hi: 'शुरुआती वजन जाने बिना हम यह नहीं नाप पाएंगे कि पानी अंदर जाने/निकलने से कितना भार बढ़ा या घटा।' },
    },
    {
      num: 'Think 4 (p.19)',
      q: { en: 'Do white flowers contain any plastid pigments? Why?', hi: 'क्या सफेद फूलों में कोई रंगीन वर्णक होता है? कारण बताएं।' },
      a: { en: 'No coloured pigments—white petals have colourless leucoplasts/spaces reflecting all visible wavelengths equally.', hi: 'नहीं, उनमें रंगीन वर्णीलवक नहीं होते; प्रकाश की सभी किरणें परावर्तित होने से वे सफेद दिखते हैं।' },
    },
    {
      num: 'Think 5 (p.19)',
      q: { en: 'Identify clues: (i) dense round control centre, (ii) ER mesh from nuclear coat, (iii) rod-shaped ATP & kitchen organelles.', hi: 'पहचानें: (i) गोल नियंत्रण केंद्र, (ii) केंद्रक से फैला जाल, (iii) छड़ाकार ऊर्जा/रसोई अंग।' },
      a: { en: '(i) Nucleus, (ii) Endoplasmic Reticulum, (iii) Mitochondria & Chloroplast — test yourself in Interactive Lab 3 above!', hi: '(i) केंद्रक, (ii) अंतर्द्रव्यी जालिका (ER), (iii) माइटोकॉन्ड्रिया व हरितलवक — ऊपर लैब 3 में टच करके देखें!' },
    },
    {
      num: 'Think 6 (p.22)',
      q: { en: 'Why do cells have many tiny mitochondria rather than 1 giant mitochondrion? Relate to surface area.', hi: 'कोशिका में 1 बड़े के बजाय कई छोटे माइटोकॉन्ड्रिया क्यों होते हैं? सतह क्षेत्रफल से जोड़ें।' },
      a: { en: 'Multiple tiny mitochondria yield drastically higher total surface area for rapid ATP synthesis & immediate local delivery across cytoplasm.', hi: 'कई छोटे माइटोकॉन्ड्रिया का कुल सतह क्षेत्रफल बहुत ज्यादा होता है, जिससे तेजी से ATP बनता है और हर हिस्से में तुरंत पहुँचता है।' },
    },
    {
      num: 'Think 7 (p.22)',
      q: { en: 'If skin cells used Meiosis instead of Mitosis when cut, what would happen?', hi: 'अगर कटने पर त्वचा की कोशिकाएँ समसूत्री के बजाय अर्धसूत्री विभाजन करने लगें तो?' },
      a: { en: 'Daughter skin cells would carry half chromosomes (`n`) and fail to rebuild identical healthy skin tissue.', hi: 'नई कोशिकाओं में आधे गुणसूत्र रह जाएंगे और वे पुरानी जैसी नहीं होंगी — घाव ठीक नहीं भर पाएगा!' },
    },
  ],

  exercises: [
    { num: 1, q: { en: 'Contrast: (i) Membrane vs Cell wall permeability, (ii) RER vs SER structure, (iii) Chloroplast vs Chromoplast.', hi: 'अंतर: (i) झिल्ली व भित्ति की पारगम्यता, (ii) RER व SER संरचना, (iii) हरितलवक व वर्णीलवक।' }, a: { en: '(i) Membrane = Selectively permeable; Wall = Freely permeable. (ii) RER has attached ribosomes; SER lacks ribosomes. (iii) Chloroplast has green Chlorophyll; Chromoplast has coloured pigments.', hi: '(i) झिल्ली चुनिंदा पारगम्य, भित्ति पूर्ण पारगम्य। (ii) RER पर राइबोसोम जुड़े होते हैं, SER चिकनी (बिना राइबोसोम)। (iii) हरितलवक में हरा पर्णहरित, वर्णीलवक में अन्य चटक रंग।' } },
    { num: 2, q: { en: '[MCQ • Ans: (iii)] Cell X swells in water; Cell Y shrinks in salt solution. Explain.', hi: '[MCQ • उत्तर: (iii)] कोशिका X शुद्ध जल में फूली और Y नमक के घोल में पिचकी — कारण?' }, a: { en: 'Option (iii): Water moved into X and out of Y across the plasma membrane by osmosis.', hi: 'विकल्प (iii): झिल्ली के पार परासरण से जल X में अंदर गया और Y से बाहर निकला।' } },
    { num: 3, q: { en: 'Fig 2.20 Label Match (Plant Cell (क)-(छ) roles (i)–(vii)).', hi: 'चित्र 2.20 मिलान: पादप कोशिका के भागों के कार्य पहचानें।' }, a: { en: '(i) Control = Nucleus; (ii) Respiration = Mitochondria; (iii) Storage/Turgidity = Vacuole; (iv) Outer separator = Plasma Membrane; (v) Rigidity = Cell Wall; (vi) Packaging = Golgi Apparatus; (vii) Food synthesis = Chloroplast.', hi: '(i) नियंत्रण = केंद्रक; (ii) श्वसन = माइटोकॉन्ड्रिया; (iii) भंडारण = रसधानी; (iv) बाहरी सीमा = प्लाज्मा झिल्ली; (v) दृढ़ता = कोशिका भित्ति; (vi) पैकिंग = गॉल्जीकाय; (vii) भोजन = हरितलवक।' } },
    { num: 4, q: { en: '[MCQ • Ans: (i)] In Plant Cell & Absent in Animal Cell?', hi: '[MCQ • उत्तर: (i)] पादप में उपस्थित व जंतु में अनुपस्थित का सही जोड़ा?' }, a: { en: 'Option (i): Leucoplast (in Plants) | Cell Wall (Absent in Animals).', hi: 'विकल्प (i): अवर्णी लवक (पादप में) | कोशिका भित्ति (जंतु में अनुपस्थित)।' } },
    { num: 5, q: { en: 'Renu says roots have plastids; Rohit denies since roots don\'t photosynthesize. Who is right?', hi: 'रेणु कहती हैं जड़ों में भी लवक होते हैं, रोहित मना करता है। कौन सही है?' }, a: { en: 'Renu! Underground roots (potato, colocasia) contain colourless **Leucoplasts** storing starch/oils/proteins.', hi: 'रेणु सही हैं! जड़ों में हरे हरितलवक नहीं होते, लेकिन भोजन संचय करने वाले **रंगहीन अवर्णी लवक (Leucoplasts)** होते हैं।' } },
    { num: 6, q: { en: 'Compare Mitochondria & Chloroplasts.', hi: 'माइटोकॉन्ड्रिया और हरितलवक में समानता व अंतर?' }, a: { en: 'Similar: Double membrane + own DNA & ribosomes. Different: Mitochondria in plants & animals make ATP from glucose; Chloroplasts in plants ONLY make food using sunlight.', hi: 'समानता: दोनों दोहरी झिल्ली वाले और दोनों में खुद का DNA व राइबोसोम। अंतर: माइटोकॉन्ड्रिया ऊर्जा (ATP) बनाते हैं; हरितलवक केवल पादपों में धूप से खाना बनाते हैं।' } },
    { num: 7, q: { en: '[MCQ • Ans: (ii)] Which pair of organelles both contain DNA?', hi: '[MCQ • उत्तर: (ii)] किस जोड़े में दोनों के पास DNA होता है?' }, a: { en: 'Option (ii): Mitochondria and Nucleus.', hi: 'विकल्प (ii): माइटोकॉन्ड्रिया और केंद्रक!' } },
    { num: 8, q: { en: 'Carrot A in water stays crisp; Carrot B in salt water turns rubbery/soft after 24h.', hi: 'गाजर प्रयोग (चित्र 2.21): पानी में गाजर कड़क रहती है, नमक के घोल में रबर जैसी नरम क्यों हो जाती है?' }, a: { en: '(i) Testing osmosis/turgor in plant tissue. (ii) Improve by measuring initial/final weight & size. (iii) Salt pulls water out by osmosis, dropping cell turgor pressure.', hi: '(i) परासरण जांच। (ii) सुधार: शुरू और अंत का वजन व लंबाई मापना। (iii) नमक के घोल से पानी बाहर निकलने पर कोशिका की सख्ती खत्म हो जाती है।' } },
    { num: 9, q: { en: 'Bacteria vs Animal presence check: Chromosome, Nucleus, Mitochondria, Golgi, Chromoplast.', hi: 'जीवाणु बनाम जंतु: गुणसूत्र, केंद्रक, माइटोकॉन्ड्रिया, गॉल्जी, वर्णीलवक किसमें हैं?' }, a: { en: 'Chromosome: Both (1 naked vs linear). True Nucleus/Mitochondria/Golgi: Animal only. Chromoplast: Absent in BOTH (Plants only)!', hi: 'गुणसूत्र: दोनों में | केंद्रक, माइटोकॉन्ड्रिया, गॉल्जी: सिर्फ जंतु में | वर्णीलवक: दोनों में नहीं (केवल पौधों में)!' } },
    { num: 10, q: { en: '4-Potato Cups in water: Cup A Empty, Cup B Sugar, Cup C Salt, Cup D BOILED Potato + Sugar.', hi: '4 आलू कप प्रयोग: कप क खाली, कप ख चीनी, कप ग नमक, कप घ उबला आलू + चीनी।' }, a: { en: '(i) Water collects in B & C via osmosis across living potato cells. (ii) Cup A is experimental Control. (iii) Cup D is BOILED -> heat killed living cells/membranes so NO osmosis occurs!', hi: '(i) ख और ग में जीवित कोशिकाओं द्वारा परासरण से पानी ऊपर आता है। (ii) कप क तुलना (Control) है। (iii) कप घ उबले आलू का है जिससे कोशिकाएं मर गईं और परासरण नहीं हुआ!' } },
    { num: 11, q: { en: 'Identify INCORRECT match: (i) Ribosome=Protein, (ii) SER=Lipid & Cellulose, (iii) Lysosome=Digest waste.', hi: 'गलत जोड़ा पहचानें: (i) राइबोसोम=प्रोटीन, (ii) SER=लिपिड व सेल्युलोस, (iii) लाइसोसोम=पाचन।' }, a: { en: 'Pair (ii) is mismatched scientifically: SER makes Lipids & Hormones (NOT cellulose!). *(NCERT back key prints (iii) cleanly in text context, remember SER != cellulose!)*', hi: 'वैज्ञानिक रूप से (ii) गलत है क्योंकि SER वसा व हार्मोन बनाती है, सेल्युलोस नहीं!' } },
    { num: 12, q: { en: 'If all mitochondria are removed from a eukaryotic cell?', hi: 'कोशिका से सभी माइटोकॉन्ड्रिया निकाल दें तो क्या होगा?' }, a: { en: 'ATP production halts -> energy-dependent transport, synthesis & division stop -> cell dies.', hi: 'ATP ऊर्जा बनना बंद हो जाएगी और सारे काम रुक कर कोशिका मर जाएगी।' } },
    { num: 13, q: { en: 'What stops human tumours? Do plants get tumours?', hi: 'मानव में अर्बुद (गाँठ) कैसे रुकते हैं? क्या पौधों में भी हो सकते हैं?' }, a: { en: 'Contact Inhibition (& PCD) stop over-division in humans. Plants lack contact inhibition; microbes can cause localized galls without malignant metastasis.', hi: 'मनुष्य में संपर्क अवरोध व PCD अर्बुद रोकते हैं। पौधों में जीवाणुओं से स्थानीय गाँठ बन सकती है पर फैलने वाला कैंसर नहीं होता।' } },
    { num: 14, q: { en: 'Which organelles make & ship Plasma Membrane lipids & proteins?', hi: 'कोशिका झिल्ली के प्रोटीन व लिपिड कौन बनाकर झिल्ली तक भेजता है?' }, a: { en: 'RER (Ribosomes -> Proteins) + SER (Lipids) -> Golgi Apparatus packs into vesicles -> Plasma Membrane.', hi: 'RER (प्रोटीन) + SER (वसा) -> गॉल्जीकाय पैक करके पुटिकाओं द्वारा प्लाज्मा झिल्ली तक पहुँचाता है।' } },
    { num: 15, q: { en: 'If gametes were formed by Mitosis instead of Meiosis?', hi: 'यदि शुक्राणु/अंडाणु समसूत्री विभाजन से बनने लगें तो?' }, a: { en: 'Chromosomes would double every generation (`2n -> 4n -> 8n`) + zero meiotic variation.', hi: 'हर पीढ़ी में गुणसूत्र दोगुने हो जाएंगे व विविधता खत्म हो जाएगी।' } },
    { num: 16, q: { en: 'Case Study: Farmer Deepa makes Amla/Lemon pickles & jam using excess salt/sugar to extend shelf life.', hi: 'केस स्टडी: किसान दीपा आंवले-नींबू का अचार/मुरब्बा ज़्यादा नमक व चीनी डालकर बनाती है — विज्ञान बताएं!' }, a: { en: 'Osmotic Preservation: Hypertonic salt/sugar pulls water out of bacteria & fungi via osmosis, killing microbes and curbing post-harvest waste sustainably.', hi: 'परासरण संरक्षण: अधिक नमक/चीनी सूक्ष्मजीवों व कवकों का पानी बाहर खींचकर उन्हें नष्ट कर देती है — खाना सुरक्षित रहता है व बर्बादी रुकती है।' } },
  ],

  flashcards: [
    { front: { en: 'Eye Limit & Near Point', hi: 'आँख की विभेदन सीमा' }, back: { en: '$0.1\\text{ mm}$ at $25\\text{ cm}$', hi: '$25\\text{ cm}$ पर $0.1\\text{ mm}$' } },
    { front: { en: 'Onion Peel Stain vs Cheek Cell Stain', hi: 'प्याज बनाम गाल स्लाइड का रंग' }, back: { en: 'Onion = Safranin | Cheek = Methylene Blue', hi: 'प्याज = सैफ्रेनीन | गाल = मेथिलीन ब्लू' } },
    { front: { en: 'N-M-P = Own DNA Organelles', hi: 'अपना DNA किन 3 में है?' }, back: { en: 'Nucleus, Mitochondria, Plastids', hi: 'केंद्रक, माइटोकॉन्ड्रिया, लवक' } },
    { front: { en: 'Who saw 1st Living Cell vs Named Protoplasm?', hi: 'पहली जीवित कोशिका vs जीवद्रव्य नाम?' }, back: { en: 'Leeuwenhoek (1674) vs Purkinje (1839)', hi: 'ल्यूवेनहॉक (1674) बनाम पुरकिंजे (1839)' } },
    { front: { en: 'Hypo vs Hyper Solution', hi: 'अल्प बनाम अतिपरासारी' }, back: { en: 'Hypo = Swells 🦛 | Hyper = Shrinks/Plasmolysis', hi: 'अल्प = फूलेगी 🦛 | अति = पिचकेगी/कुंचन' } },
    { front: { en: 'Ribosomes: Prokaryote vs Eukaryote', hi: 'प्रोकैरियोट बनाम यूकैरियोट राइबोसोम' }, back: { en: '70S (50S+30S) vs 80S (60S+40S)', hi: '70S बनाम 80S' } },
    { front: { en: 'Virus vs Viroid vs Prion', hi: 'विषाणु, विषाणुभ व प्रोसंक' }, back: { en: 'Virus = Gene+Protein | Viroid = Gene Only | Prion = Protein Only', hi: 'विषाणु = दोनों | विषाणुभ = सिर्फ Gene | प्रोसंक = सिर्फ प्रोटीन' } },
    { front: { en: 'Who gave Totipotency (1902)?', hi: 'पूर्णशक्तता (1902) किसने दी?' }, back: { en: 'Gottlieb Haberlandt (Plant Tissue Culture)', hi: 'गॉटलीब हैबरलैंड्ट' } },
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
        hi: 'निम्नलिखित में से कौन-सी कोशिका संरचना मुख्य रूप से सुकेंद्रकी कोशिकाओं के आकार को बनाए रखने और सहारा देने के लिए उत्तरदायी है?',
      },
      options: { en: ['DNA', 'Cell Sap', 'Cytoskeleton', 'Nucleoid'], hi: ['DNA', 'कोशिका रस', 'कोशिका-पंजर (Cytoskeleton)', 'केंद्रकाभ'] },
      correctIndex: 2,
      solution: { en: 'Cytoskeleton is the ultra-fine filament mesh maintaining cell shape & internal transport.', hi: 'सुकेंद्रकी कोशिकाओं में पतले तंतुओं का जाल कोशिका-पंजर आकार व सहारा बनाए रखता है।' },
    },
    {
      id: 2,
      examTag: 'RRB Group D 2025 Shift 40',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: {
        en: 'A eukaryotic cell that performs its functions and undergoes programmed cell death when no longer required is best described as a __________.',
        hi: 'एक सुकेंद्रकी कोशिका जो काम पूरा कर आवश्यकता न रहने पर क्रमादेशित कोशिका मृत्यु (PCD) से गुजरती है, उसे क्या कहते हैं?',
      },
      options: { en: ['Tumour cell', 'Malignant cell', 'Normal cell', 'Bacterial cell'], hi: ['अर्बुद कोशिका', 'दुर्दम कोशिका', 'सामान्य कोशिका (Normal cell)', 'जीवाणु कोशिका'] },
      correctIndex: 2,
      solution: { en: 'Normal cells undergo controlled PCD when unwanted; cancer cells lose this brake.', hi: 'सामान्य कोशिकाएँ आवश्यकता न होने पर PCD से नष्ट होती हैं।' },
    },
    {
      id: 3,
      examTag: 'RRB Group D 2025 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Complete the Analogy: Plant : Rigid Cell Wall :: Animal : __________', hi: 'पादप : दृढ़ कोशिका भित्ति :: जंतु : __________' },
      options: { en: ['Lignified support', 'Cellular flexibility', 'Photosynthetic tissues', 'Fixed position'], hi: ['लिग्निन सहारा', 'कोशिकीय नम्यता (Cellular flexibility)', 'प्रकाशसंश्लेषी ऊतक', 'निश्चित स्थिति'] },
      correctIndex: 1,
      solution: { en: 'No cell wall gives animal cells flexible shape change.', hi: 'कोशिका भित्ति न होने से जंतु कोशिकाओं को लचीलापन मिलता है।' },
    },
    {
      id: 4,
      examTag: 'RRB ALP 2025 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'On the basis of function, the plasma membrane is ________ in nature.', hi: 'कार्य के आधार पर, प्लाज्मा झिल्ली प्रकृति में ________ होती है।' },
      options: { en: ['fully non-permeable', 'fully permeable', 'semi-permeable', 'selectively permeable'], hi: ['पूर्णतः अपारगम्य', 'पूर्णतः पारगम्य', 'अर्ध-पारगम्य', 'वरणात्मक / चुनिंदा पारगम्य'] },
      correctIndex: 3,
      solution: { en: 'Plasma membrane selectively permits essential solutes while blocking others.', hi: 'प्लाज्मा झिल्ली केवल चुनिंदा पदार्थों को ही आने-जाने देती है।' },
    },
    {
      id: 5,
      examTag: 'RRB Group D 2025 Shift 30',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Hypotonic solution : Cell Swells :: Hypertonic solution : _______.', hi: 'अल्पपरासारी विलयन : कोशिका फूलती है :: अतिपरासारी विलयन : _______' },
      options: { en: ['Cell Shrinks', 'Cell Divides', 'Cell becomes rigid', 'Cell stays same'], hi: ['कोशिका सिकुड़ जाती है', 'कोशिका बंटती है', 'कोशिका सख्त होती है', 'कोशिका समान रहती है'] },
      correctIndex: 0,
      solution: { en: 'In hypertonic solution water leaves the cell causing shrinkage.', hi: 'अतिपरासारी घोल में जल बाहर निकलने से कोशिका सिकुड़ती है।' },
    },
    {
      id: 6,
      examTag: 'RRB Tech Gr-III 2024 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'When plant cells lose water by osmosis, the contents shrink away from the cell wall; this is known as _______.', hi: 'पादप कोशिका से पानी निकलने पर अंदर का द्रव्य भित्ति से अलग सिकुड़ जाता है; इसे _____ कहते हैं।' },
      options: { en: ['Diffusion', 'Active Transport', 'Plasmolysis', 'Passive Transport'], hi: ['विसरण', 'सक्रिय परिवहन', 'जीवद्रव्य कुंचन (Plasmolysis)', 'निष्क्रिय परिवहन'] },
      correctIndex: 2,
      solution: { en: 'Pulling away of protoplast from cell wall during water loss = Plasmolysis.', hi: 'कोशिका भित्ति से जीवद्रव्य का सिकुड़कर अलग होना जीवद्रव्य कुंचन कहलाता है।' },
    },
    {
      id: 7,
      examTag: 'RRB ALP 2025 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which type of cell has very small vacuoles?', hi: 'किस प्रकार की कोशिका में बहुत छोटी रसधानियां होती हैं?' },
      options: { en: ['Plant cell', 'Bacterial cell', 'Animal cell', 'Fungal cell'], hi: ['पादप कोशिका', 'जीवाणु कोशिका', 'जंतु कोशिका', 'कवक कोशिका'] },
      correctIndex: 2,
      solution: { en: 'Animal cells have tiny temporary vacuoles compared to one giant plant central vacuole.', hi: 'जंतु कोशिकाओं में रसधानी बहुत छोटी होती है।' },
    },
    {
      id: 8,
      examTag: 'RRB Tech Gr-III 2024 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'What similarities do plastids share with mitochondria?', hi: 'लवक (Plastids) और माइटोकॉन्ड्रिया में क्या समानता है?' },
      options: { en: ['Only in plants', 'Contain chlorophyll', 'Produce ATP', 'Both contain their own DNA and ribosomes'], hi: ['केवल पादपों में', 'दोनों में क्लोरोफिल', 'ATP बनाते हैं', 'दोनों में अपना DNA और राइबोसोम होते हैं'] },
      correctIndex: 3,
      solution: { en: 'Only Nucleus, Mitochondria & Plastids carry own DNA!', hi: 'माइटोकॉन्ड्रिया व लवक दोनों में खुद का DNA व राइबोसोम होते हैं।' },
    },
    {
      id: 9,
      examTag: 'RRB ALP 2025 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which function of mitochondria makes it the powerhouse of the cell?', hi: 'माइटोकॉन्ड्रिया का कौन-सा काम इसे कोशिका का बिजलीघर बनाता है?' },
      options: { en: ['Generation of ATP', 'Generation of enzymes', 'Generation of heat', 'Generation of NADPH'], hi: ['ATP का उत्पादन', 'एंजाइम बनाना', 'ऊष्मा बनाना', 'NADPH बनाना'] },
      correctIndex: 0,
      solution: { en: 'Mitochondria release cellular energy in the form of ATP molecules.', hi: 'माइटोकॉन्ड्रिया श्वसन से ऊर्जा मुद्रा ATP बनाती है।' },
    },
    {
      id: 10,
      examTag: 'RRB ALP 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'What happens when lysosomes in a cell burst?', hi: 'कोशिका में लाइसोसोम के फटने पर क्या होता है?' },
      options: { en: ["Enzymes digest the cell's own components", 'Digest foreign particles only', 'Cell becomes hyperactive', 'Division speeds up'], hi: ['एंजाइम कोशिका के अपने घटकों को ही पचा लेते हैं', 'केवल बाहरी कण पचाते हैं', 'कोशिका तेज होती है', 'विभाजन बढ़ता है'] },
      correctIndex: 0,
      solution: { en: 'Bursting releases hydrolytic enzymes causing self-digestion ("suicide bags").', hi: 'पाचक एंजाइम फूटकर अपनी ही कोशिका को पचा देते हैं।' },
    },
    {
      id: 11,
      examTag: 'RRB Tech Gr-III 2024 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'RER looks rough under microscope because ______ are attached to its surface.', hi: 'खुरदुरी अंतर्द्रव्यी जालिका (RER) की सतह पर ______ जुड़े होते हैं।' },
      options: { en: ['chromosomes', 'lysosomes', 'protein particles', 'ribosomes'], hi: ['गुणसूत्र', 'लाइसोसोम', 'प्रोटीन कण', 'राइबोसोम (Ribosomes)'] },
      correctIndex: 3,
      solution: { en: 'Ribosomes dot RER for active protein manufacture.', hi: 'राइबोसोम जुड़े होने से RER खुरदुरी दिखती है।' },
    },
    {
      id: 12,
      examTag: 'RRB Tech Gr-III 2024 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Select the correct characteristic of a prokaryotic cell.', hi: 'प्रोकैरियोटिक कोशिका के बारे में सही कथन चुनें।' },
      options: { en: ['Membrane-bound organelles present', 'It has a single chromosome', 'More than one chromosome', 'Nuclear membrane present'], hi: ['झिल्ली वाले कोशिकांग होते हैं', 'इसमें एकल (Single) गुणसूत्र होता है', 'अनेक गुणसूत्र होते हैं', 'केंद्रक झिल्ली होती है'] },
      correctIndex: 1,
      solution: { en: 'Prokaryotes carry 1 circular DNA molecule inside naked Nucleoid.', hi: 'प्रोकैरियोट में बिना झिल्ली वाला केवल 1 गुणसूत्र (केंद्रकाभ) होता है।' },
    },
    {
      id: 13,
      examTag: 'RRB Group D 2025 Shift 38',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which material did Robert Hooke use to first discover "cells" in 1665?', hi: 'रॉबर्ट हुक ने 1665 में कोशिका खोजने के लिए किसका उपयोग किया?' },
      options: { en: ['Onion peel', 'Leaf surface', 'Cork slice', 'Human cheek'], hi: ['प्याज झिल्ली', 'पत्ती की सतह', 'कॉर्क की काट (Cork slice)', 'गाल कोशिका'] },
      correctIndex: 2,
      solution: { en: 'Hooke observed box-like walls in dead cork slices.', hi: 'हुक ने पेड़ की छाल से बने कॉर्क के पतले टुकड़े को देखा था।' },
    },
    {
      id: 14,
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Plant cell with prominent nucleus, dense cytoplasm & NO visible vacuoles performs ______.', hi: 'स्पष्ट केंद्रक, गाढ़ा कोशिकाद्रव्य और बिना रसधानी वाली पादप कोशिका क्या काम करती है?' },
      options: { en: ['Active cell division and growth', 'Structural support only', 'Water storage', 'Mineral transport'], hi: ['सक्रिय कोशिका विभाजन और वृद्धि', 'केवल सहारा देना', 'पानी संचय', 'खनिज परिवहन'] },
      correctIndex: 0,
      solution: { en: 'Actively dividing meristematic root-tip cells don\'t waste room on big vacuoles.', hi: 'लगातार विभाजित होने वाली विभज्योतक कोशिकाओं में बड़ी रसधानी नहीं होती।' },
    },
    {
      id: 15,
      examTag: 'RRB ALP 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Lightly stained region enclosed by plasma membrane in onion & cheek slide is:', hi: 'प्याज व गाल की स्लाइड में झिल्ली से घिरा हल्का रंजित क्षेत्र क्या कहलाता है?' },
      options: { en: ['Cytoplasm', 'Cell wall', 'Nucleus', 'Vacuole'], hi: ['कोशिकाद्रव्य (Cytoplasm)', 'कोशिका भित्ति', 'केंद्रक', 'रसधानी'] },
      correctIndex: 0,
      solution: { en: 'Nucleus stains darkly while jelly cytoplasm retains light stain.', hi: 'केंद्रक गहरा रंगता है और कोशिकाद्रव्य हल्का रंजित रहता है।' },
    },
    {
      id: 16,
      examTag: 'Nirman+ RRB Group-D 22-08-2022',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which of the following is true about Cell Theory?', hi: 'कोशिका सिद्धांत के बारे में निम्न में से कौन-सा कथन सत्य है?' },
      options: { en: ['Does not apply to fungi', 'Does not apply to Virus', 'Does not apply to algae', 'Does not apply to bacteria'], hi: ['कवक पर लागू नहीं', 'वायरस (विषाणु) पर लागू नहीं होता', 'शैवाल पर लागू नहीं', 'जीवाणु पर लागू नहीं'] },
      correctIndex: 1,
      solution: { en: 'Viruses are acellular non-living outside host -> exception to Cell Theory!', hi: 'विषाणु अकोशिकीय हैं अतः इन पर कोशिका सिद्धांत लागू नहीं होता।' },
    },
    {
      id: 17,
      examTag: 'Nirman+ RRB NTPC / ALP Repeat',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Which scientist coined the term "Protoplasm" for the living fluid substance of the cell?', hi: 'कोशिका के जीवित तरल पदार्थ के लिए "प्रोटोप्लाज्म (जीवद्रव्य)" शब्द किसने दिया?' },
      options: { en: ['Robert Hooke', 'Purkinje', 'Camillo Golgi', 'Robert Brown'], hi: ['रॉबर्ट हुक', 'जे. ई. पुरकिंजे (Purkinje)', 'कैमिलो गॉल्जी', 'रॉबर्ट ब्राउन'] },
      correctIndex: 1,
      solution: { en: 'J. E. Purkinje (1839) named protoplasm; Robert Brown (1831) discovered Nucleus.', hi: 'पुरकिंजे ने 1839 में प्रोटोप्लाज्म (जीवद्रव्य) नाम दिया।' },
    },
    {
      id: 18,
      examTag: 'Nirman+ RRB NTPC / Group-D PYQ',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 2: Cell',
      question: { en: 'Who first observed FREE LIVING cells (bacteria/protozoa) under a microscope in 1674?', hi: '1674 में सबसे पहली जीवित कोशिका किसने देखी थी?' },
      options: { en: ['Robert Hooke', 'Antonie van Leeuwenhoek', 'Schleiden', 'Schwann'], hi: ['रॉबर्ट हुक', 'एंटोनी वॉन ल्यूवेनहॉक', 'श्लीडेन', 'श्वान'] },
      correctIndex: 1,
      solution: { en: 'Hooke (1665) saw dead cork cells; Leeuwenhoek (1674) saw living cells in pond water!', hi: 'हुक ने मृत कॉर्क देखा था, जबकि ल्यूवेनहॉक (1674) ने तालाब में जीवित कोशिका देखी।' },
    },
  ],
};
