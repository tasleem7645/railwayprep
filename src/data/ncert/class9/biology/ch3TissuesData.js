/**
 * Class 9 NCERT (2026-27 New Edition — ihsc103.pdf, Pages 28–47) + Railway CBT Deep-Dive Edition
 * Chapter 3: Tissues in Action (क्रियाशील ऊतक) — Gold Standard v3 from Day 1
 * Zero 3rd-party mentions, full teacher explanations, bilingual scientific terminology,
 * 9 Print+Web Vector Plates, Real Wikimedia Histology Slides, 5 Activities with Predictors & 24 Dated RRB PYQs.
 */

export const CH3_TISSUES_DATA = {
  id: 'c9-bio-ch3',
  classId: 'class9',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology', hi: 'जीव विज्ञान (Biology)' },
  chapterNumber: 3,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 3: Tissues in Action (Complete CBT Edition)',
  blueprintSvgKey: 'ch3-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Plant Simple & Vascular Tissues', hi: 'पादप सरल व जाइलम-फ्लोएम ऊतक' }, pct: 38 },
    { label: { en: 'Animal Epithelial, Blood & Connective', hi: 'उपकला, रक्त, अस्थि व कंडरा/स्नायु' }, pct: 28 },
    { label: { en: 'Muscular & Nervous Tissue (Neuron)', hi: 'पेशी व तंत्रिका ऊतक (न्यूरॉन)' }, pct: 22 },
    { label: { en: 'Meristems, Joints & Totipotency', hi: 'विभज्योतक, संधियाँ व पूर्णशक्तता' }, pct: 12 },
  ],
  title: {
    en: 'Chapter 3: Tissues in Action (Plant, Animal, Skeleton & Joints)',
    hi: 'अध्याय 3: क्रियाशील ऊतक — पादप, जंतु, संधियाँ व कंकाल तंत्र',
  },
  subtitle: {
    en: 'Complete Teacher Lecture Notes • Meristems, Xylem-Phloem, Epithelial/Connective/Muscle/Nerve, Joints, F.C. Steward & 24 Verified RRB PYQs',
    hi: 'शिक्षक व्याख्या सहित संपूर्ण गहराई • 9 वेक्टर चित्र, असली ऊतक माइक्रोग्राफ, प्रयोग पूर्वानुमान, ब्रांडेड A4 PDF व 24 रेलवे PYQ',
  },
  metrics: {
    pages: 20,
    activities: 5,
    tables: 7,
    svgLabs: 0,
    hdVisuals: 9,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },

  hero: {
    imageUrl: '/ncert-notes/class9-bio-ch3/hero-tissues-anatomy.webp',
    caption: {
      en: 'Division of labour across multicellular life: helical xylem–phloem plant transport beside striated muscles, RBCs & firing neurons.',
      hi: 'बहुकोशिकीय जीवन में श्रम-विभाजन: पादप जाइलम-फ्लोएम संवहन के साथ मानव पेशी तंतु, लाल रक्त कणिकाएँ व तंत्रिका जाल।',
    },
  },

  quickRevision60Sec: [
    {
      en: '**Tissue**: Group of cells with common origin/structure performing a specialized function (**Division of Labour**).',
      hi: '**ऊतक (Tissue):** समान संरचना व कार्य करने वाली कोशिकाओं का समूह जो शरीर में **श्रम विभाजन (Division of Labour)** लाता है।',
    },
    {
      en: '**Meristems** (**NO Vacuoles**, thin walls, dense cytoplasm, large nucleus): **Apical** (length), **Intercalary** (nodes/grass), **Lateral / Cambium** (girth + tree annual rings).',
      hi: '**विभज्योतक (`रसधानी अनुपस्थित`)**: **शीर्षस्थ** (लंबाई), **अंतर्वेशी** (पर्वसंधि/घास पुनरुद्भवन), **पाश्‍र्व/एधा** (मोटाई + वार्षिक वलय)।',
    },
    {
      en: '**Parenchyma** (living storage; **Aerenchyma** floats; **Chlorenchyma** photosynthesis) | **Collenchyma** (**Pectin** corners -> bending flexibility) | **Sclerenchyma** (**Lignin**, **DEAD**, coconut husk/nuts).',
      hi: '**मृदूतक** (भंडारण; **वायूतक** प्लवन) | **श्लेषोतक** (**पेक्टिन** कोने → लचीलापन) | **दृढ़ोतक** (**लिग्निन**, **मृत** → नारियल जटा व कठोर छिलके)।',
    },
    {
      en: '**Xylem** (water UP; **ONLY Xylem Parenchyma is living**; rest dead) | **Phloem** (sucrose/amino acids bidirectional; **ONLY Phloem Fibres are dead**; Companion cells regulate Sieve Tubes).',
      hi: '**जाइलम** (जल परिवहन ↑; **केवल मृदूतक जीवित**) | **फ्लोएम** (भोजन वाहन ↕; **केवल फ्लोएम तंतु मृत**; सहचर कोशिकाएँ चालनी नलिका का नियमन करती हैं)।',
    },
    {
      en: '**Connective Trio**: **Blood** ($55\\%$ Plasma + $45\\%$ RBC/WBC/Platelets) | **Bone** (`Osteocytes`, Ca+P) vs **Cartilage** (`Chondrocytes`, trachea rings/ear) | **Tendon** (`Muscle ↔ Bone`) vs **Ligament** (`Bone ↔ Bone`).',
      hi: '**संयोजी ऊतक**: **रक्त** ($55\\%$ प्लाज्मा) | **अस्थि (`Ca+P`)** vs **उपास्थि** (`Chondrocyte`, कंठ वलय) | **कंडरा (Tendon)** = पेशी↔अस्थि vs **स्नायु (Ligament)** = अस्थि↔अस्थि।',
    },
    {
      en: '**Muscles**: **Skeletal** (striped, multi-nucleated, voluntary) vs **Smooth** (spindle, 1 nucleus, unstriped, involuntary) vs **Cardiac** (branched, 1 nucleus, non-fatiguing Heart). **Neuron**: Dendrite -> Body -> Axon -> **Synapse**.',
      hi: '**पेशियाँ**: **रेखित** (अशाखित, बहुकेंद्रकी, ऐच्छिक) | **चिकनी** (तर्कु, अरेखित, 1 केंद्रक, अनैच्छिक) | **हृद** (शाखित, 1 केंद्रक, अथक)। **न्यूरॉन**: द्रुमिका → काय → तंत्रिकाक्ष → **सिनेप्स**।',
    },
  ],

  sections: [
    {
      id: 'plant-vs-animal-tissue',
      number: '3.1',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Why Cells Form Tissues, Division of Labour & Plant vs Animal Tissue Contrasts',
        hi: 'ऊतक क्यों बनते हैं? श्रम विभाजन और पादप बनाम जंतु ऊतक में मूल अंतर (बी.जी.एल. स्वामी)',
      },
      summaryTag: { en: 'NCERT Pages 28–29 • Foundation', hi: 'NCERT पृष्ठ 28–29 • आधारभूत अवधारणा' },
      blocks: [
        {
          heading: {
            en: '1. Multicellular Hierarchy, B.G.L. Swamy & Structural Differences Between Plants & Animals',
            hi: '1. श्रम विभाजन की आवश्यकता, पादप-जंतु ऊतक अंतर एवं भारतीय वैज्ञानिक बी.जी.एल. स्वामी',
          },
          conceptStory: {
            en: 'While an organism like Amoeba accomplishes feeding, gas exchange, and movement within ONE cell, complex animals and trees assign distinct chores to specialized cell groups called Tissues (ऊतक)—producing dramatic efficiency through Division of Labour (श्रम विभाजन). Notice why Plant Tissues differ sharply from Animal Tissues: plants sit fixed in soil and depend heavily on supportive dead lignified tissue and thick cell walls to stay upright against wind, with active growth confined permanently to specific meristem zones. Animals migrate constantly in search of food (except sessile sponges), stay wall-free for flexible movement, consume far higher energy, and grow uniformly across the entire organism up to adulthood!',
            hi: 'अमीबा जैसे एककोशिकीय जीव में समस्त क्रियाएँ एक ही कोशिका करती है, किंतु मानव व विशाल वृक्ष जैसे बहुकोशिकीय जीवों में **समान संरचना और विशेष कार्य वाली कोशिकाओं के समूह ऊतक (Tissue)** बनाते हैं। इससे **श्रम विभाजन (Division of Labour)** उत्पन्न होता है और शरीर की कार्यक्षमता कई गुना बढ़ जाती है — जैसे जंतुओं में पेशीय ऊतक गति देते हैं, तंत्रिका ऊतक संदेश पहुँचाते हैं, तथा पादपों में **जाइलम (दारु)** जल व **फ्लोएम (पोषवाह)** भोजन का परिवहन करता है।\n**पादप और जंतु ऊतक भिन्न क्यों हैं?** अधिकांश पादप एक स्थान पर स्थिर रहते हैं, अतः उन्हें सीधे खड़े रहने के लिए अधिक **मृत व दृढ़ अवलंब ऊतकों** तथा कोशिका भित्ति की आवश्यकता होती है। इसके विपरीत जंतु भोजन की खोज में चलते हैं *(सिर्फ स्पंज जैसे कुछ जंतु अचल हैं)*, अतः जंतु ऊतकों में कोशिका भित्ति नहीं होती, अधिकांश ऊतक जीवित होते हैं और उनकी वृद्धि पूरे शरीर में एकसमान होती है (पौधों जैसी केवल कुछ बिंदुओं तक सीमित नहीं)।',
          },
          bullets: [
            {
              en: '**==Organization Hierarchy:==** **Cell** (`कोशिका`) → **Tissue** (`ऊतक`) → **Organ** (`अंग`) → **Organ System** (`अंग-तंत्र`) → **Organism** (`जीव`).',
              hi: '**==शरीर का संगठन पदानुक्रम:==** **कोशिका** → **ऊतक** → **अंग** → **अंग-तंत्र** → **संपूर्ण जीव**।',
            },
            {
              en: '**==Growth Pattern Difference (`Group D 2025 Shift 46`):==** Plants possess **localized active dividing regions (Meristems)** growing throughout life, whereas Animals grow **uniformly** across organs up to maturity without localized eternal tips.',
              hi: '**==वृद्धि पैटर्न में अंतर (Group D 2025):==** पादपों में वृद्धि केवल **कुछ विशिष्ट क्षेत्रों (विभज्योतक)** तक सीमित होकर जीवनभर चलती है, जबकि जंतुओं में वृद्धि पूरे शरीर में एकसमान व निश्चित आयु तक होती है।',
            },
            {
              en: '**==Scientist Highlight (`B.G.L. Swamy` — NCERT Page 29):==** Renowned Indian botanist noted for plant morphology & anatomy research; authored the celebrated Kannada book ***"Hasuru Honnu"*** blending botany, satire & Western Ghats travels—winner of the **1978 Central Sahitya Akademi Award (`केंद्र साहित्य अकादमी पुरस्कार`)**!',
              hi: '**==वैज्ञानिक परिचय (`बी.जी.एल. स्वामी` — NCERT पृष्ठ 29):==** पादप आकारिकी एवं शरीर रचना विज्ञान के प्रसिद्ध भारतीय वनस्पति विज्ञानी। इनकी लोकप्रिय कन्नड़ पुस्तक ***"हसुरु होन्नु (Hasuru Honnu)"*** (पश्चिमी घाट के वनस्पति भ्रमण, व्यंग्य व लोककथाओं का संगम) को वर्ष **1978 में केंद्र साहित्य अकादमी पुरस्कार** प्राप्त हुआ।',
            },
          ],
          inlinePyqIds: [1, 14],
        },
      ],
    },

    {
      id: 'meristematic-tissues',
      number: '3.2.1–3.2.3',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Plant Growth: Meristematic Tissues (Apical, Lateral, Intercalary) & Tree Rings',
        hi: 'पादपों में वृद्धि: तीनों विभज्योतक ऊतक (शीर्षस्थ, पार्श्व व अंतर्वेशी) एवं वार्षिक वृद्धि वलय',
      },
      summaryTag: { en: 'NCERT Pages 29–31 + Real Tree Rings Plate', hi: 'NCERT पृष्ठ 29–31 + वार्षिक वलय चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Three Dividing Zones & Why Meristem Cells Lack Vacuoles',
            hi: '1. विभज्योतक के 3 प्रकार, प्याज जड़ प्रयोग व इनमें रसधानी क्यों नहीं होती?',
          },
          conceptStory: {
            en: 'Why does a sapling stretch skyward, a tree trunk thicken year after year, and trimmed lawn grass bounce right back? Plants localize all mitotic division inside Meristematic Tissues (विभज्योतक ऊतक)—and NCERT divides them into 3 anatomical zones. **Apical Meristem** sits at root and shoot tips adding length (proven by Activity 3.1: cutting 1 cm off Jar B root tips stops elongation immediately!). **Lateral Meristem (Cambium ring)** wraps around stems expanding circumference/girth and forming concentric **Annual Growth Rings** (wider during wet favourable seasons, narrower during droughts—allowing scientists to read tree age and past climate!). **Intercalary Meristem** sits at leaf bases and stem **Nodes (`पर्वसंधि`)** bordering **Internodes (`पर्व`)**—causing trimmed hedges to branch thickly and grazed grass to sprout swiftly. Crucially, Meristem cells divide non-stop, so they pack **thin cellulose walls, dense cytoplasm, prominent nuclei**, zero gaps, and **NO Vacuoles** (since vacuoles store water/wastes and hamper rapid cell split!). Once meristem daughters lose division ability and specialize for transport/support, the process is called **Differentiation (`विभेदन`)**.',
            hi: 'पौधे में लंबाई बढ़ाने, तने की मोटाई बढ़ाने व कटाई के बाद पुनः उगने के लिए सक्रिय विभाजनकारी **विभज्योतक ऊतक (Meristematic Tissue)** तीन प्रमुख स्थानों पर स्थित होता है:\n1. **शीर्षस्थ विभज्योतक (Apical Meristem):** यह **जड़ व प्ररोह (तने) के अग्रभाग** पर रहकर लंबाई में वृद्धि करता है (क्रियाकलाप 3.1 में जार ख के मूलाग्र 1 cm काटते ही जड़ बढ़ना बंद हो जाती है)।\n2. **पाश्‍र्व विभज्योतक (Lateral Meristem / एधा):** तने या जड़ की परिधि के चारों ओर एक वलय के रूप में रहकर **व्यास व मोटाई (Girth)** बढ़ाता है। इससे लकड़ी की अनुप्रस्थ काट में **वार्षिक वृद्धि वलय (Annual Rings)** बनते हैं — इन्हें गिनकर वृक्ष की आयु व जलवायु का अनुमान लगाया जाता है!\n3. **अंतर्वेशी विभज्योतक (Intercalary Meristem):** पत्ती के आधार अथवा **पर्वसंधि (Node)** के ठीक ऊपर पर्व (Internode) के आधार पर स्थित होता है। यही बाड़ की छँटाई पर नई शाखाएँ निकालता है और घास चरने/कटने के बाद पुनः उगाता है।\n**विभज्योतक में रसधानी क्यों नहीं होती?** ये कोशिकाएँ लगातार तेजी से बंटती रहती हैं; इन्हें जल/अपशिष्ट भंडारण की नहीं बल्कि सघन कोशिकाद्रव्य व बड़े केंद्रक की जरूरत होती है। जब ये विभाजन क्षमता खोकर स्थायी रूप व कार्य धारण कर लेती हैं, तो इस प्रक्रिया को **विभेदन (Differentiation)** कहते हैं।',
          },
          bullets: [
            {
              en: '**==Exam Profile of Meristem Cells (`Tech Gr-III 2024 + Group D 2025`):==** Small, tightly packed without intercellular spaces, **thin cellulose cell walls, dense cytoplasm, large prominent nucleus, NO vacuoles**.',
              hi: '**==विभज्योतक कोशिकाओं के 5 पक्के लक्षण (PYQ):==** (1) **पतली सेल्युलोस भित्ति**, (2) **सघन कोशिकाद्रव्य**, (3) **बड़ा व स्पष्ट केंद्रक**, (4) **अंतराकोशिकीय अंतराल नहीं**, (5) **रसधानी अनुपस्थित (No Vacuoles)**।',
            },
            {
              en: '**==Node vs Internode (`पर्वसंधि vs पर्व`):==** **Node (`पर्वसंधि`)** = stem point where leaves/branches sprout (sugarcane buds!). **Internode (`पर्व`)** = smooth stem gap between two adjacent nodes *(Exercise Q10 explains why sugarcane cuttings without a node fail to sprout!)*',
              hi: '**पर्वसंधि बनाम पर्व (`अभ्यास प्रश्न 10 — गन्ने की कलम`):** **पर्वसंधि (Node)** तने का वह बिंदु है जहाँ से शाखा/पत्ती व नई कोंपल निकलती है; दो पर्वसंधियों के बीच का भाग **पर्व (Internode)** कहलाता है।',
            },
          ],
          diagramKey: 'meristem-locations-tree',
          realImage: {
            url: '/ncert-notes/class9-bio-ch3/real/tree-rings.webp',
            title: {
              en: 'Annual Growth Rings in Tree Trunk Cross-Section (Lateral Meristem Activity — Fig 3.4)',
              hi: 'असली वृक्ष तने की अनुप्रस्थ काट: पाश्‍र्व विभज्योतक द्वारा बने वार्षिक वृद्धि वलय (चित्र 3.4)',
            },
            caption: {
              en: 'Wide concentric rings indicate lush favourable seasons; narrow tight rings indicate drought/stress — counting rings reveals exact tree age!',
              hi: 'चौड़े वलय अनुकूल वर्षा वर्ष और संकरे वलय प्रतिकूल परिस्थितियाँ दर्शाते हैं — वलय गिनकर वृक्ष की आयु ज्ञात की जाती है।',
            },
          },
          inlinePyqIds: [2, 3, 4],
        },
      ],
    },

    {
      id: 'plant-permanent-tissues',
      number: '3.2.4',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Plant Permanent Tissues: Epidermis & Cork, Parenchyma/Collenchyma/Sclerenchyma, Xylem & Phloem',
        hi: 'स्थायी पादप ऊतक: बाह्यत्वचा व काग (Suberin), मृदूतक-श्लेषोतक-दृढ़ोतक तथा जाइलम-फ्लोएम',
      },
      summaryTag: { en: 'NCERT Pages 31–34 + Sun-Stem Micrograph', hi: 'NCERT पृष्ठ 31–34 + तना स्लाइड चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Protective Tissues (Epidermis, Cuticle, Stomata & Cork Suberin) + 3 Simple Supportive Tissues',
            hi: '1. सुरक्षात्मक ऊतक (बाह्यत्वचा, उपत्वचा, काग-सुबेरिन) एवं सरल स्थायी ऊतक त्रयी',
          },
          conceptStory: {
            en: 'Looking at a Sunflower (*Helianthus annuus*) stem cross-section (Fig 3.7), a single protective tile-like outer skin called the **Epidermis (`बाह्यत्वचा`)** wraps the whole plant. Epidermal cells secrete a waxy waterproof **Cutin** blanket known as the **Cuticle (`उपत्वचा`)**—thick in desert xerophytes to check transpiration loss & block fungi, while underground root epidermis grows single-cell projections called **Root Hairs (`मूलरोम`)** expanding water absorption! On leaves, **Stomata (`रंध्र`)** flanked by Guard Cells regulate $CO_2$/O₂ exchange and evaporative **Transpiration (`वाष्पोत्सर्जन`)** (which drives xylem pull and flushes wastes). As woody trees thicken via lateral meristem, outer cells convert into **Cork Cambium (`काग एधा`)**, forming compact **dead Cork cells (`काग`)** rich in waterproof waxy **Suberin (`सुबेरिन`)** sealing out gases & water as tree bark!\nBeneath epidermis sit **Simple Permanent Tissues** (built from ONE cell type): **Parenchyma** (living storage + photosynthesis in **Chlorenchyma** + floating air chambers in aquatic **Aerenchyma**), **Collenchyma** (living with irregular **Pectin** corners giving flexible bending to coriander stalks & climbers), and **Sclerenchyma** (uniform **Lignin**-thickened **DEAD** cells with ZERO internal lumen giving coconut coir & walnut shells concrete-like toughness!).',
            hi: 'सूरजमुखी (*Helianthus annuus*) के तने की अनुप्रस्थ काट में तीन मुख्य कार्यशील स्थायी ऊतक वर्ग दिखते हैं:\n**(i) सुरक्षात्मक ऊतक — बाह्यत्वचा व काग:** पौधे की सबसे बाहरी चपटी, संहत एकल परत **बाह्यत्वचा (Epidermis)** कहलाती है। इसकी बाहरी सतह पर मोमी **क्यूटिन (Cutin)** की परत जिसे **उपत्वचा (Cuticle)** कहते हैं, मरुस्थलीय पौधों में मोटी होकर जल-हानि व परजीवी संक्रमण रोकती है (किंतु जलमग्न पौधों में मोटी उपत्वचा हानिकारक होगी क्योंकि जल-गैस विनिमय रुकेगा)। जड़ों में बाल जैसे **मूलरोम** अवशोषण सतह बढ़ाते हैं, और पत्तियों के **रंध्र (Stomata)** वाष्पोत्सर्जन व गैस विनिमय करते हैं। वृक्ष के बड़े होने पर बाहरी **काग एधा (Cork Cambium)** मृत व **सुबेरिन (Suberin)** युक्त **काग (Cork)** कोशिकाएँ बनाती है जो जल व गैसों के लिए अपारगम्य होकर पेड़ की **छाल (Bark)** बनाती हैं।\n**(ii) सहायक ऊतक — 3 सरल स्थायी ऊतक:**\n• **मृदूतक (Parenchyma):** पतली भित्ति वाली **सजीव** कोशिकाएँ जिनके बीच बड़े **अंतराकोशिकीय अवकाश** होते हैं। मुख्य कार्य भोजन भंडारण व प्रकाश-संश्लेषण (**हरितमृदूतक / Chlorenchyma**) है; जलीय पौधों में बड़ी वायु गुहिकाएँ तैरने में मदद करती हैं जिन्हें **वायूतक (Aerenchyma)** कहते हैं।\n• **श्लेषोतक / स्थूलकोण ऊतक (Collenchyma):** **सजीव** लंबी कोशिकाएँ जिनके कोने रबर जैसे लचीले रसायन **पेक्टिन (Pectin)** से असमान रूप से मोटे होते हैं — इसी कारण धनिया के डंठल, लताएँ व युवा तने **बिना टूटे मुड़ (लचीलापन)** सकते हैं!\n• **दृढ़ोतक (Sclerenchyma):** **लिग्निन (Lignin)** जमा होने से मोटी भित्ति वाली अधिकांश **मृत (Dead)** कोशिकाएँ जिनमें कोई आंतरिक खाली स्थान नहीं होता — यह **नारियल के रेशे, अखरोट के कठोर छिलके व बीज आवरण** को काष्ठीय मजबूती देती हैं।',
          },
          bullets: [
            {
              en: '**==Guard Cell Stomata Rule (`Tech Gr-III 2024`):==** When water enters Guard Cells by osmosis -> they **SWELL (`फूलती हैं`)** curving outward so the stomatal pore **OPENS**! Water exit shrinks them shut *(Desert plants open stomata at cool night hours to fix $CO_2$ and conserve water!)*.',
              hi: '**==रंध्र खुलने का नियम (Tech Gr-III 2024):==** जब द्वारकोशिकाओं में जल प्रवेश करता है, तो वे **फूलकर मुड़ती हैं और रंध्र खुल जाते हैं**। *(मरुस्थलीय पौधे जल बचाने हेतु रात के ठंडे समय में रंध्र खोलकर $CO_2$ संचित करते हैं!)*',
            },
          ],
          diagramKey: 'simple-permanent-trio',
          realImage: {
            url: '/ncert-notes/class9-bio-ch3/real/sclerenchyma-cells.webp',
            title: {
              en: 'Real Plant Stem Tissue Histology: Thick-Walled Mechanical vs Thin Storage Cells',
              hi: 'असली सूक्ष्मदर्शी ऊतक दृश्य: पादप तने में मोटी भित्ति वाले दृढ़ एवं पतली भित्ति वाले कोशिका स्तर',
            },
            caption: {
              en: 'Contrasting lignified thick mechanical walls (Sclerenchyma/vessels) with loosely arranged living parenchyma.',
              hi: 'पादप तने में मोटी लिग्निन भित्ति युक्त यांत्रिक ऊतक एवं पतली भित्ति वाले मृदूतक का वास्तविक दृश्य।',
            },
          },
          inlinePyqIds: [5, 6, 7, 8],
        },
        {
          heading: {
            en: '2. Complex Vascular Tissues (Xylem vs Phloem), 3 Tissue Systems & Anther Culture',
            hi: '2. जटिल संवहन ऊतक (जाइलम बनाम फ्लोएम), 3 पादप ऊतक तंत्र एवं परागकोष संवर्धन',
          },
          conceptStory: {
            en: 'How does water reach a 50-metre tall eucalyptus crown against gravity, and how does sugar travel from leaves back down to underground potato tubers? Plants assemble Complex Permanent Tissues (built from multiple cooperating cell types) into two separate pipelines! **Xylem (`जाइलम / दारु`)** acts as an upward passive water & mineral plumbing pipe driven by evaporative **Transpiration Pull (`वाष्पोत्सर्जन खिंचाव`)**: 3 of its 4 components (Tracheids, Vessels, Xylem Fibres) are lignified **DEAD tubes**, while **Xylem Parenchyma is its ONLY living cell type**. In contrast, **Phloem (`फ्लोएम / पोषवाह`)** moves dissolved Sucrose and Amino Acids **both up and down (Bidirectional Translocation)**; 3 of its 4 parts (**Sieve Tubes** with perforated end-plates, metabolic **Companion Cells** using ATP energy to load/unload sugar creating osmotic inflow, and **Phloem Parenchyma** storing resins/tannins/latex) are **LIVING**, while only **Phloem Fibres are DEAD**! Together, plants organize all tissues into **Dermal, Ground, and Vascular Tissue Systems**.',
            hi: 'एक से अधिक प्रकार की कोशिकाओं से बने संवहन ऊतक दो स्वतंत्र पाइपलाइन तंत्र बनाते हैं:\n• **जाइलम / दारु (Xylem — जल व खनिज संवहन ↑):** यह जड़ों से पत्तियों तक ऊपर की ओर केवल एक दिशा में जल व खनिज ले जाता है, जिसका मुख्य प्रेरक बल **वाष्पोत्सर्जन खिंचाव (Transpiration Pull)** है। इसके 4 घटकों (**वाहिनिका, वाहिका, जाइलम तंतु व जाइलम मृदूतक**) में **जाइलम मृदूतक एकमात्र जीवित घटक** है; शेष तीनों **मृत व मोटी भित्ति** वाले हैं *(पुराने जाइलम में अपशिष्ट **राल/गोंद** संचित होते हैं)*।\n• **फ्लोएम / पोषवाह (Phloem — भोजन संवहन ↕):** यह पत्तियों में बने घुलनशील भोजन (**सुक्रोज व ऐमीनो अम्ल**) को जड़ों व बढ़ती कलियों तक ऊपर-नीचे दोनों दिशाओं में पहुँचाता है। इसमें **चालनी नलिकाएँ (`Sieve Tubes` — सिरे-से-सिरे जुड़ी छिद्रित जीवित कोशिकाएँ), सहचर कोशिकाएँ (`Companion Cells` — चालनी नलिका में शर्करा भारण/अभारण का नियमन), फ्लोएम मृदूतक (भोज्य, राल, टैनिन व रबड़क्षीर/लेटेक्स संचय)** तीनों **जीवित** होते हैं, जबकि केवल **फ्लोएम तंतु (रेशे)** ही **मृत** होता है!',
          },
          bullets: [
            {
              en: '**==3 Plant Tissue Systems (`Fig 3.10`):==** (1) **Dermal (`त्वचीय`)** = Outer protection & water conservation. (2) **Ground (`भरण`)** = Bulk plant body between dermis & vascular bundle (`Parenchyma + Collenchyma + Sclerenchyma`). (3) **Vascular (`संवहन`)** = Transport (`Xylem + Phloem`).',
              hi: '**==पादप के 3 प्रमुख ऊतक तंत्र (चित्र 3.10):==** (1) **त्वचीय ऊतक तंत्र** (बाहरी सुरक्षा व जल बचाव), (2) **भरण ऊतक तंत्र** (मृदूतक, श्लेषोतक व दृढ़ोतक से बना मुख्य भाग), (3) **संवहन ऊतक तंत्र** (जाइलम व फ्लोएम)।',
            },
            {
              en: '**==Indian Botanists (`Sipra Guha-Mukherjee & S.C. Maheshwari`, Box p.34):==** Pioneered **Anther Culture (`परागकोष संवर्धन`)**—culturing pollen grains on artificial sterile nutrients to grow **whole plants** directly from male anther tissues, accelerating modern crop breeding!',
              hi: '**==भारतीय वैज्ञानिक (`सिप्रा गुहा मुखर्जी व एस.सी. माहेश्वरी`, पृष्ठ 34):==** इन्होंने **परागकोष संवर्धन (Anther Culture)** द्वारा कृत्रिम पोषक माध्यम में एक परागकोष से **संपूर्ण पादप** विकसित कर आधुनिक फसल सुधार में ऐतिहासिक योगदान दिया।',
            },
          ],
          diagramKey: 'xylem-phloem-vascular',
          realImage: {
            url: '/ncert-notes/class9-bio-ch3/real/xylem-phloem-stem.webp',
            title: {
              en: 'Real Sunflower (*Helianthus*) Stem Micrograph Showing Wide Xylem Vessels & Phloem Rings',
              hi: 'असली सूरजमुखी तने की अनुप्रस्थ काट (चित्र 3.7): मोटे लाल जाइलम वाहिका वलय एवं संवहन बंडल',
            },
            caption: {
              en: 'Large thick-walled red-stained lignified Xylem vessels carry water upwards surrounded by ground parenchyma.',
              hi: 'लाल रंग से रंजित चौड़ी, मोटी भित्ति वाली जाइलम वाहिकाएँ व उनके चारों ओर स्थित भरण ऊतक स्पष्ट दिख रहे हैं।',
            },
          },
          viralTrick: {
            en: '**Xylem vs Phloem Alive/Dead Hack:**\n• **Xylem** has ONLY 1 living cell -> **Xylem Parenchyma** (Other 3 DEAD)\n• **Phloem** has ONLY 1 dead cell -> **Phloem Fibres** (Other 3 LIVING)!',
            hi: '**जीवित/मृत पहचानने का अचूक सूत्र:**\n• **जाइलम में सिर्फ 1 जीवित** = **जाइलम मृदूतक** (बाकी 3 मृत)\n• **फ्लोएम में सिर्फ 1 मृत** = **फ्लोएम तंतु / रेशे** (बाकी 3 जीवित)!',
          },
          inlinePyqIds: [9, 10, 11, 12, 13],
        },
      ],
    },

    {
      id: 'animal-epithelial-connective',
      number: '3.3.1–3.3.2',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Animal Tissues Part 1: Epithelial (5 Types + Basement Membrane) & Connective (Blood, Bone, Cartilage, Tendon/Ligament)',
        hi: 'जंतु ऊतक भाग 1: उपकला (5 प्रकार व आधार झिल्ली) तथा संयोजी ऊतक (रक्त, अस्थि, उपास्थि, कंडरा व स्नायु)',
      },
      summaryTag: { en: 'NCERT Pages 34–37 + Blood & Bone Micrographs', hi: 'NCERT पृष्ठ 34–37 + रक्त व अस्थि चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Epithelial Tissue — Tight Continuous Sheets Resting on Basement Membrane',
            hi: '1. उपकला ऊतक (Epithelial Tissue) — सुरक्षात्मक आस्तर व 5 प्रकार (तालिका 3.2)',
          },
          conceptStory: {
            en: 'Why do harmful germs fail to invade straight into your flesh when dust or bacteria touch your skin or throat? Because **Epithelial Tissue (`उपकला ऊतक`)** forms tightly cemented, uninterrupted sheets with virtually zero intercellular gaps—covering external **Skin** and lining every internal hollow cavity (Mouth, Oesophagus, Blood Vessels, Alveoli, Intestine, Kidney tubules). All epithelial sheets rest upon an underlying non-cellular fibrous protein layer called the **Basement Membrane (`आधार झिल्ली`, Group D 2025!)** separating epithelium from connective tissue below. Depending on each organ’s task, epithelium changes cell geometry: wafer-thin single-layer **Squamous** permits ultra-fast gas/fluid diffusion in lung alveoli & capillaries, whereas multi-layered **Stratified Squamous** absorbs friction on exposed Skin, Mouth, and Oesophagus!',
            hi: '**उपकला ऊतक (Epithelial Tissue)** शरीर का बाहरी सुरक्षात्मक आवरण (**त्वचा**) तथा मुँह, ग्रासनली, फेफड़ों, रक्त वाहिकाओं, आँत व वृक्क नलिकाओं का भीतरी आस्तर बनाता है। इसकी कोशिकाएँ बिना किसी खाली अंतराल के अत्यंत सघन व संहत रूप से सटी होती हैं — यही संरचना रोगाणुओं के प्रवेश को रोकती है व जल-हानि कम करती है। उपकला ऊतक नीचे स्थित संयोजी ऊतकों से एक रेशेदार बाह्यकोशिकीय परत जिसे **आधार झिल्ली (Basement Membrane — Group D 2025!)** कहते हैं, द्वारा अलग रहता है। याद रखें: यह ऊतक पदार्थों का विनिमय, सुरक्षा, स्रवण और अवशोषण करता है — परंतु **रक्त कोशिकाओं का निर्माण नहीं करता**!',
          },
          bullets: [
            {
              en: '**==5 Epithelial Specializations (`NCERT Table 3.2`):==**\n1. **Simple Squamous (शल्की — Exchange):** Single flat tile layer -> **Lung Alveoli & Blood Vessels** (`rapid diffusion`).\n2. **Stratified Squamous (स्तरित — Guard):** Multi-layered stacked -> **Skin, Mouth, Oesophagus** (`friction & infection shield`).\n3. **Cuboidal / Columnar (`घनाकार/स्तंभी` — Secretion):** **Kidney Tubules** (`Cuboidal` — Group D 2025!), **Salivary/Sweat glands & Stomach**.\n4. **Ciliated Sensory (`संवेदी पक्ष्माभी`):** Hair-like **Cilia** -> **Nasal passage, Taste buds, Inner Ear** (`smell, taste, sound & balance`).\n5. **Tall Columnar Villi (`आंत्र स्तंभाकार` — Absorption):** Single layer of tall pillar cells -> **Small Intestine** (`absorbs nutrients & water`).',
              hi: '**==उपकला के 5 कार्य-आधारित प्रकार (तालिका 3.2 — ALP 2025 Match PYQ):==**\n1. **सरल शल्की (विनिमय):** चपटी कोशिकाओं की 1 परत → **फेफड़े की कूपिकाएँ व रक्त वाहिकाएँ**।\n2. **स्तरित शल्की (सुरक्षा):** कोशिकाओं की अनेक परतें → **त्वचा, मुँह व ग्रासनली** (घर्षण व रोगाणु सुरक्षा)।\n3. **घनाकार (स्रवण):** **वृक्क नलिकाएँ (`Kidney Tubules` — PYQ), लार ग्रंथि, स्वेद ग्रंथि व आमाशय**।\n4. **संवेदी पक्ष्माभी:** रोम जैसे **पक्ष्माभ (Cilia)** → **नासाछिद्र, स्वाद कलिकाएँ व आंतरिक कर्ण** (गंध, स्वाद, ध्वनि, संतुलन)।\n5. **स्तंभाकार (अवशोषण):** लंबी स्तंभ-जैसी कोशिकाएँ → **छोटी आँत का आस्तर** (पोषक तत्व व जल अवशोषण)।',
            },
          ],
          diagramKey: 'epithelial-5-types',
          inlinePyqIds: [15, 16, 17],
        },
        {
          heading: {
            en: '2. Connective Tissues (Fluid Blood Matrix, Hard Bone vs Soft Cartilage, Tendon vs Ligament)',
            hi: '2. संयोजी ऊतक: तरल रक्त (55% प्लाज्मा), अस्थि बनाम उपास्थि (Chondrocyte) व कंडरा बनाम स्नायु',
          },
          conceptStory: {
            en: 'Connective Tissues bind, cushion, anchor, and link distant body organs together! What makes Blood liquid while Bone is rock-hard? Not the cells themselves, but the surrounding **Extracellular Matrix (`आधात्री`)**: in **Blood**, cells float in watery liquid **Plasma** (`55%` of volume); in **Bone**, star-shaped **Osteocytes (`अस्थिअणु`)** sit locked inside a rigid matrix calcified with **Calcium & Phosphorus (`Ca + P`)** salts; in **Cartilage**, **Chondrocytes (`उपास्थिअणु`)** rest inside a pliable gelatinous protein-sugar matrix forming smooth shock-absorbing joint pads, flexible Ear/Nose tips, and **C-shaped rings of cartilage preventing the windpipe (Trachea) from collapsing**! Finally, dense fibrous straps stitch bones and muscles: **Tendons (`कंडरा`)** transmit force from **Muscle to Bone**, while flexible **Ligaments (`स्नायु`)** tie **Bone to Bone** preventing over-stretching dislocation.',
            hi: 'जो ऊतक शरीर के विभिन्न अंगों को आपस में जोड़ते और सहारा देते हैं, **संयोजी ऊतक (Connective Tissue)** कहलाते हैं। इनके बीच के पदार्थ को **आधात्री (Matrix)** कहते हैं जो रक्त में तरल तो अस्थियों में अत्यंत कठोर होता है:\n• **रक्त (Blood — तरल संयोजी ऊतक):** कुल आयतन का **$55\\%$ तरल प्लाज्मा** तथा **$45\\%$ निर्मित तत्व** होते हैं — (1) **लाल रक्त कोशिकाएँ (RBC):** लौह-युक्त प्रोटीन **हीमोग्लोबिन** के कारण लाल रंग व $O_2$ परिवहन, जीवनकाल ~**4 महीने (~120 दिन)**; (2) **श्वेत रक्त कोशिकाएँ (WBC):** संक्रमण क्षेत्र में एकत्र होकर जीवाणुओं से लड़ती हैं व मवाद/शोथ में भाग लेती हैं; (3) **बिंबाणु (Platelets):** चोट पर **रक्त का थक्का** जमाती हैं।\n• **अस्थि (Bone) बनाम उपास्थि (Cartilage):** अस्थि कोशिकाएँ (**Osteocytes**) **कैल्शियम व फॉस्फोरस** युक्त कठोर आधात्री में होती हैं; जबकि उपास्थि कोशिकाएँ (**Chondrocytes**) नरम प्रोटीन-शर्करा आधात्री में रहकर **कान, नाक के सिरे, अस्थियों के गद्दीदार सिरों और श्वासनली (कंठ) के C-आकार वलयों (वायु मार्ग को पिचकने से रोकने हेतु)** का निर्माण करती हैं!\n• **कंडरा (Tendon) बनाम स्नायु (Ligament):** **कंडरा** = **माँसपेशी को अस्थि से जोड़ती है** (गति बल संचरण); **स्नायु** = **अस्थि को अस्थि से जोड़ता है** (संधि की स्थिरता व सीमा तय कर विस्थापन रोकता है)।',
          },
          diagramKey: 'connective-blood-bone-joint',
          realImage: {
            url: '/ncert-notes/class9-bio-ch3/real/human-blood-smear.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch3/real/compact-bone.webp',
            title: {
              en: 'Real Human Blood Smear (RBCs, Lobed WBCs & Platelets) & Compact Bone Osteons',
              hi: 'असली सूक्ष्मदर्शी चित्र: मानव रक्त (RBC, WBC व बिंबाणु) तथा सघन अस्थि की हैवर्सियन संरचना',
            },
            caption: {
              en: 'Left: Enucleated biconcave red RBCs alongside dark-purple nucleated WBCs in liquid plasma. Right: Calcified bone osteon rings with Osteocytes.',
              hi: 'बाएँ: रक्त स्मीयर में केंद्रक-रहित गोल RBC एवं गहरे बैंगनी केंद्रक युक्त WBC। दाएँ: अस्थि में कैल्शियम-फॉस्फोरस युक्त अस्थिअणु वलय।',
            },
          },
          viralTrick: {
            en: '**Zero-Confusion Formulas:**\n• **M-T-B:** **M**uscle — **T**endon — **B**one!\n• **B-L-B:** **B**one — **L**igament — **B**one *(L = Link Bone-to-Bone)*!\n• **Cartilage Cells:** **Chondro**cytes | **Bone Cells:** **Osteo**cytes!',
            hi: '**अचूक स्मृति सूत्र:**\n• **पेशी + अस्थि = कंडरा (Tendon)** | **अस्थि + अस्थि = स्नायु (Ligament)**!\n• **उपास्थि** कोशिका = **Chondrocyte** | **अस्थि** कोशिका = **Osteocyte**!',
          },
          inlinePyqIds: [18, 19, 20],
        },
      ],
    },

    {
      id: 'animal-muscular-nervous',
      number: '3.3.3–3.3.4',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Animal Tissues Part 2: Muscular Tissues (Skeletal, Smooth, Cardiac) & Nervous Tissue (Neuron + Synapse)',
        hi: 'जंतु ऊतक भाग 2: तीनों पेशी ऊतक (रेखित, चिकनी, हृद) तथा तंत्रिका ऊतक (न्यूरॉन एवं सिनेप्स)',
      },
      summaryTag: { en: 'NCERT Pages 37–38 + Muscle & Neuron Plates', hi: 'NCERT पृष्ठ 37–38 + पेशी व न्यूरॉन चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Muscular Tissue — How Contraction & Relaxation Produce Voluntary & Involuntary Action',
            hi: '1. पेशीय ऊतक (कंकाल, चिकनी व हृदय पेशी) की संरचना, केंद्रक संख्या व कार्य अंतर',
          },
          conceptStory: {
            en: 'All movement in the body—sprinting, writing, peristalsis inside your gut, and steady heartbeats—comes from **Muscular Tissue (`पेशीय ऊतक`)** built of elongated contractile cells called **Muscle Fibres (`पेशी तंतु`)** rich in contractile proteins. Notice NCERT divides muscles into three unmistakable profiles! **Skeletal / Striated Muscles (`कंकाल / रेखित पेशियाँ`)** obey conscious will (**Voluntary**, e.g. lifting weights or running) and appear as long, cylindrical, **unbranched, multinucleated** bundles showing alternating light-dark stripes. **Smooth / Unstriated Muscles (`चिकनी पेशियाँ`)** work automatically without conscious thought (**Involuntary**, slowly pushing food down stomach/intestine) with pointed **spindle-shaped, uninucleate, stripeless** cells. **Cardiac Muscles (`हृदय पेशियाँ`)** exist EXCLUSIVELY in the Heart: **cylindrical, branched, uninucleate** fibres packed with dense Mitochondria & rich blood vessels, pumping rhythmically from birth to death **without ever fatiguing**!',
            hi: 'शरीर की प्रत्येक गति लंबे, संकुचनशील **पेशी तंतुओं (Muscle Fibres)** से बने **पेशीय ऊतक** के सिकुड़ने और फैलने से उत्पन्न होती है। शरीर में यह 3 रूपों में मिलता है:\n1. **कंकाल / रेखित पेशियाँ (Skeletal / Striated Muscles):** हमारे सचेत नियंत्रण में (**ऐच्छिक गतियाँ** — दौड़ना, लिखना, भार उठाना) कार्य करती हैं व हड्डियों से जुड़ी होती हैं। इनके तंतु **लंबे, बेलनाकार, अशाखित, बहुकेंद्रकी (अनेक केंद्रक वाले)** तथा **हल्की-गहरी धारियों (पट्टियों)** वाले होते हैं।\n2. **चिकनी / अरेखित पेशियाँ (Smooth Muscles):** बिना सचेत नियंत्रण (**अनैच्छिक गतियाँ** — आमाशय, आँत में भोजन का खिसकना, रक्त नलिकाएँ व आँख की पुतली) के स्वतः कार्य करती हैं। इनकी कोशिकाएँ **तर्कु रूप (Spindle-shaped — सिरों से नुकीली), एकल केंद्रक युक्त व धारियाँ-रहित** होती हैं।\n3. **हृदय पेशियाँ (Cardiac Muscles):** **केवल हृदय** में पाई जाती हैं। इनके तंतु **बेलनाकार, शाखित (Branched), एकल केंद्रक एवं हल्की धारियों** वाले होते हैं। प्रचुर **माइटोकॉन्ड्रिया व रक्त आपूर्ति** होने के कारण ये **बिना थके जीवनपर्यंत लयबद्ध धड़कन** बनाए रखती हैं!',
          },
          diagramKey: 'muscle-3-types',
          realImage: {
            url: '/ncert-notes/class9-bio-ch3/real/striated-muscle.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch3/real/cardiac-muscle.webp',
            title: {
              en: 'Real Histology Slides: Striated Skeletal Muscle Fibres vs Branched Cardiac Muscle',
              hi: 'असली पेशी स्लाइड: बहुकेंद्रकी रेखित कंकाल पेशी (बाएँ) बनाम शाखित हृद पेशी (दाएँ)',
            },
            caption: {
              en: 'Left: Long parallel striated skeletal fibres showing clear light/dark bands & multiple nuclei along the edge. Right: Branched cardiac heart muscle network.',
              hi: 'बाएँ: समानांतर रेखित कंकाल पेशी तंतु (धारियाँ व किनारे पर अनेक केंद्रक स्पष्ट)। दाएँ: हृदय की शाखित पेशियाँ।',
            },
          },
          inlinePyqIds: [21],
        },
        {
          heading: {
            en: '2. Nervous Tissue — Neuron Structure, Nerve Bundle & Electrical Impulse via Synaptic Cleft',
            hi: '2. तंत्रिका ऊतक (न्यूरॉन — द्रुमिका, कोशिका-काय, तंत्रिकाक्ष एवं अंतर्ग्रथित विदर / Synapse)',
          },
          conceptStory: {
            en: 'Touch a hot vessel by accident—and your hand snaps back BEFORE you finish thinking! Neither voluntary nor involuntary muscles can pull independently; BOTH obey electrical commands (**Nerve Impulses**) delivered instantaneously by **Nervous Tissue (`तंत्रिका ऊतक`)** forming Brain, Spinal Cord & Nerves. Its functional cells are specialized **Neurons (`तंत्रिका कोशिका`)**, NOT nephrons! Each Neuron contains three linked zones: short branched antennae called **Dendrites (`द्रुमिका`)** that catch incoming stimulus, a **Cell Body (`कोशिका-काय`)** housing ONE prominent nucleus that processes signals, and ONE extra-long insulated wire called the **Axon (`तंत्रिकाक्ष`)** ending at **Axon Terminals** facing a microscopic junction gap—the **Synaptic Cleft (`सिनेप्स`)**—to pass impulses directly to the next neuron or muscle! Notice also: many long nerve fibres tied together by **Connective Tissue** form a peripheral **Nerve (`तंत्रिका`)**!',
            hi: 'गर्म वस्तु छूते ही हाथ पीछे हटना या व्यायाम करते समय हृदय का तेज धड़कना **तंत्रिका ऊतक** (मस्तिष्क, मेरुरज्जु व तंत्रिकाएँ) के नियंत्रण व समन्वय से होता है। पेशियाँ स्वतंत्र कार्य न करके तंत्रिका ऊतक से ही संकेत पाती हैं।\nइसकी क्रियात्मक इकाई **तंत्रिका कोशिका या न्यूरॉन (Neuron)** होती है जिसके 3 मुख्य भाग हैं:\n1. **द्रुमिका (Dendrite):** सबसे पहले बाहरी या दूसरे न्यूरॉन से **सूचना/आवेग प्राप्त करने वाले छोटे, शाखित तंतु**।\n2. **कोशिका-काय (Cell Body):** इसमें **एकल केंद्रक** होता है जो कोशिकीय गतिविधियाँ नियंत्रित करता है *(ग़लती से भी "अनेक केंद्रक" या "नेफ्रॉन" न समझें — नेफ्रॉन वृक्क/किडनी की इकाई है!)*।\n3. **तंत्रिकाक्ष (Axon) व एक्सॉन टर्मिनल:** कोशिका-काय से आवेग को दूर ले जाने वाला **एकल लंबा तंतु** जो सिरों (टर्मिनल) पर समाप्त होता है। दो न्यूरॉन के मध्य का सूक्ष्म अंतराल जहाँ आवेग अंतरित होता है, **सिनेप्स / अंतर्ग्रथित विदर (Synaptic Cleft — NTPC UG 2025!)** कहलाता है। *(संयोजी ऊतक द्वारा अनेक तंत्रिका तंतुओं को साथ बांधने से एक **तंत्रिका / Nerve** बनती है)*।',
          },
          diagramKey: 'neuron-synapse-diagram',
          realImage: {
            url: '/ncert-notes/class9-bio-ch3/real/neuron-smear.webp',
            title: {
              en: 'Real Golgi-Stained Pyramidal Neuron: Dendritic Branches, Cell Body & Axon (CC0)',
              hi: 'असली गॉल्जी-रंजित न्यूरॉन माइक्रोग्राफ: शाखित द्रुमिका, कोशिका-काय एवं लंबा तंत्रिकाक्ष',
            },
            caption: {
              en: 'True branching neural architecture demonstrating one Axon alongside radiating Dendrites receiving inputs.',
              hi: 'वास्तविक तंत्रिका कोशिका में सघन द्रुमिका शाखाएँ तथा संदेश ले जाने वाला लंबा तंत्रिकाक्ष स्पष्ट दिख रहा है।',
            },
          },
          trapAlert: {
            en: '**2 Huge CBT Traps (`Group D & Tech Gr-III 2024`):** (1) **Neurons** belong to Nervous tissue whereas **Nephrons (`वृक्काणु`)** are Kidney filtration units! (2) Neuron Cell Body has only **ONE nucleus** (never "many nuclei"). (3) Touch-me-not plant (*Mimosa*) folding uses osmotic turgor shifts—**plants have NO nervous tissue**!',
            hi: '**-0.33 Trap Alert:** (1) तंत्रिका की इकाई **न्यूरॉन (Neuron)** है, जबकि वृक्क/किडनी की इकाई **नेफ्रॉन (Nephron)** है! (2) न्यूरॉन के कोशिका-काय में **केवल 1 केंद्रक** होता है। (3) छुईमुई (संवेदनशील पादप) के मुड़ने में **कोई तंत्रिका ऊतक नहीं** होता।',
          },
          inlinePyqIds: [22, 23, 24],
        },
      ],
    },

    {
      id: 'musculoskeletal-steward-crown-gall',
      number: '3.4–3.6',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Musculoskeletal System, 4 Joints, Axial Skeleton, Bone Marrow, F.C. Steward (1958) & Crown Gall',
        hi: 'पेशी-कंकाल तंत्र, 4 संधियाँ, अस्थि मज्जा, एफ.सी. स्टीवर्ड (1958 पूर्णशक्तता) व किरीट पिटिका रोग',
      },
      summaryTag: { en: 'NCERT Pages 38–43 • New 2026-27 Complete Syllabus', hi: 'NCERT पृष्ठ 38–43 • नया 2026-27 पाठ्यक्रम' },
      blocks: [
        {
          heading: {
            en: '1. Musculoskeletal Percentages, 4 Skeletal Joints, Spine Cartilage Discs, Rib Cage & Stem Cells',
            hi: '1. 4 प्रकार की अस्थि संधियाँ, मेरुदंड व पसली पिंजर, अस्थि मज्जा Stem Cells एवं योग',
          },
          conceptStory: {
            en: 'Inside our body, muscles contract and pull bones via tendons across **Joints (`संधियाँ`)** under nervous control. NCERT quantifies adult body composition cleanly: **Adult Bone Skeleton averages 12–15%** of total body weight, while **Skeletal Muscle accounts for ~40–50% in adult males and ~30–40% in adult females**! Joints themselves are precision-engineered hinges allowing distinct planes of freedom: (1) **Ball & Socket Joint** (upper arm bone ball fits into shoulder cavity reinforced by Collarbone/`जत्रुकास्थि` girdle, rotating forward/back/sideways/circles), (2) **Hinge Joint** (door-hinge single-plane bend at **Elbow, Knee** shielded by kneecap **Patella / `जानुफलक`**, and Fingers/Ankle), (3) **Pivot Joint** (Skull meets top **Spine / Vertebral Column** letting you nod Yes/No side-to-side), and (4) **Fixed Joint** (fused interlocking flat Cranium bones safeguarding Brain, Eyes & Ears). Protection stems from the **Axial Skeleton**: **Cartilage Discs** cushion adjacent vertebrae defending the delicate Spinal Cord, while **12 pairs of Ribs (`पसली पिंजर`)** attach anteriorly to the **Sternum (`उरोस्थि`)** via elastic cartilage so the rib cage expands dynamically during breathing!',
            hi: '**पेशी-कंकाल तंत्र** (अस्थियाँ, पेशियाँ, संधियाँ, उपास्थि, कंडरा व स्नायु) तंत्रिका तंत्र के निर्देश में कार्य करता है। औसत वयस्क मानव के कुल भार का लगभग **12–15% अस्थि कंकाल**, तथा वयस्क पुरुषों में लगभग **40–50%** व वयस्क महिलाओं में **30–40%** मांसपेशियाँ होती हैं।\n**4 प्रमुख संधियाँ (Joints — चित्र 3.16):**\n1. **कंदुक-खल्लिका संधि (Ball & Socket):** कंधे व कूल्हे में — गोल सिरा उथले गड्ढे में फिट होकर आगे-पीछे, बगल और गोलाकार गति देता है *(कंधा जत्रुकास्थि / Collarbone से जुड़कर मेखला बनाता है)*।\n2. **कोर संधि (Hinge Joint):** कोहनी, घुटना और टखना — दरवाजे के कब्जे की तरह केवल एक दिशा (तल) में मुड़ती है *(घुटने की रक्षा **जानुफलक / Patella** अस्थि करती है)*।\n3. **धुराग्र संधि (Pivot Joint):** खोपड़ी को मेरुदंड से जोड़कर गर्दन की ऊपर-नीचे व दाएँ-बाएँ गति कराती है।\n4. **अचल संधि (Fixed Joint):** खोपड़ी की चपटी हड्डियाँ जो बिल्कुल नहीं हिलतीं और मस्तिष्क, आँखों व कानों की सुरक्षा करती हैं।\n**कंकाल तंत्र:** रीढ़ की हड्डी (**मेरुदंड**) छोटी कशेरुकाओं से बनी है जिनके बीच गद्दीदार **उपास्थि चक्रिका (Cartilage Disc)** मेरुरज्जु को चोट से बचाती है। वक्ष में **12 जोड़ी पसलियाँ** आगे **उरोस्थि (Sternum)** से लचीली उपास्थि द्वारा जुड़कर **पसली पिंजर** बनाती हैं जो हृदय-फेफड़ों की रक्षा व श्वसन के समय फैलने में सहायक है!',
          },
          bullets: [
            {
              en: '**==NCERT Box (`आइए, और चिंतन करें p.40` — Bone Marrow Stem Cells):==** **Bone Marrow (`अस्थि मज्जा`)** houses unspecialized **Stem Cells (`मूल कोशिकाएँ`)** capable of dividing to create new blood cells; **Bone Marrow Transplant** supplies healthy donor stem cells curing blood cancers like **Leukemia (`ल्यूकेमिया`)** & genetic disorders like **Thalassemia (`थैलेसीमिया`)**!',
              hi: '**==अस्थि मज्जा व मूल कोशिका प्रत्यारोपण (NCERT पृष्ठ 40):==** अस्थि मज्जा में विशेष **मूल कोशिकाएँ (Stem Cells)** होती हैं जो नई रक्त कोशिकाएँ बनाती हैं। **अस्थि मज्जा प्रत्यारोपण** द्वारा स्वस्थ दाता की मूल कोशिकाएँ देकर **ल्यूकेमिया (रक्त कैंसर)** एवं **थैलेसीमिया** रोगियों का उपचार किया जाता है।',
            },
            {
              en: '**==Yoga & Posture Box (`Science & Society p.41`):==** Practised globally with **International Yoga Day** celebrated every year on **21 June**, improving spinal flexibility, respiratory vital capacity & bone-joint endurance.',
              hi: '**योग एवं स्वास्थ्य (`21 जून` — अंतरराष्ट्रीय योग दिवस):** सही मुद्रा व नियमित योगाभ्यास (*जैसे सूर्यनमस्कार*) अस्थियों की सुदृढ़ता, संधि लचीलेपन व श्वसन क्षमता में वृद्धि करता है।',
            },
          ],
          diagramKey: 'joints-skeleton-totipotency',
        },
        {
          heading: {
            en: '2. F.C. Steward (1958 Carrot Phloem Totipotency) & Agrobacterium Crown Gall Biotech',
            hi: '2. एफ.सी. स्टीवर्ड (1958 — गाजर फ्लोएम से पूर्ण पादप) तथा एग्रोबैक्टीरियम किरीट पिटिका रोग',
          },
          conceptStory: {
            en: 'NCERT ends Chapter 3 with two extraordinary bridges to biotechnology:\nFirst, **F.C. Steward (1958)** became the first scientist to prove plant Totipotency physically! Isolating $2\\text{ mg}$ tissue discs from mature **Carrot Phloem (`गाजर का संवहन फ्लोएम`)** into liquid sugar + hormone nutrient media under agitation & proper **Light + Air** (Table 3.6 showed **+20% fresh biomass gain** ONLY when Liquid medium + Nutrients + Light + Air were ALL combined!), single suspended phloem cells **Dedifferentiated (`निर्विभेदित` — regained mitotic power)**, split into plant embryos, and **Redifferentiated (`पुनःविभेदित`)** on agar into roots, shoots & full mature carrot plants!\nSecond, **Crown Gall (`किरीट पिटिका रोग`, Fig 3.20)** occurs in nature when soil bacterium ***Agrobacterium tumefaciens*** injects its own bacterial DNA into stem cells causing fast uncontrolled tumour-like galls—modern scientists turned *Agrobacterium* into nature’s genetic delivery truck inserting desirable crop-improvement genes cleanly into plants!',
            hi: '**एफ.सी. स्टीवर्ड प्रयोग (1958 — एक कोशिका से पूर्ण जीव):** स्टीवर्ड पहले वैज्ञानिक थे जिन्होंने प्रयोगशाला में **गाजर के परिपक्व संवहन फ्लोएम** की एक अकेली कोशिका से संपूर्ण नया पौधा विकसित करके **पूर्णशक्तता (Totipotency)** सिद्ध की! उन्होंने गाजर जड़ के $2\\text{ mg}$ टुकड़ों को शर्करा व हार्मोन युक्त तरल पोषक माध्यम में उचित **प्रकाश और वायु** की उपस्थिति में संवर्धित किया (**तालिका 3.6:** केवल **तरल माध्यम + पोषक तत्व + प्रकाश + वायु** की पूर्ण उपस्थिति में ताजे भार में **$20\\%$ वृद्धि** दर्ज हुई, जबकि वायु के अभाव या ठोस माध्यम की प्रतिकूल दशा में भार कम हुआ)। इससे सिद्ध हुआ कि कुछ पादप कोशिकाएँ पहले **निर्विभेदित (Dedifferentiate — विभाजन क्षमता पुनः पाना)** होकर अविभेदित पिंड बनाती हैं और फिर **पुनःविभेदित (Redifferentiate)** होकर जड़-प्ररोह व वयस्क पादप बना लेती हैं।\n**किरीट पिटिका रोग (Crown Gall) व जीन तकनीक:** प्रकृति में ***एग्रोबैक्टीरियम ट्यूमिफेशियंस (Agrobacterium tumefaciens)*** जीवाणु अपनी आनुवंशिक सामग्री पादप तने में स्थानांतरित कर अनियंत्रित विभाजन से गाँठें (गॉल) पैदा करता है — इसी प्राकृतिक क्षमता का उपयोग आज वैज्ञानिक फसलों की **रोग-प्रतिरोधी किस्में व मूल्‍यवान पादप रसायन** बनाने के लिए वांछित जीन प्रविष्ट करने में करते हैं!',
          },
          inlinePyqIds: [11, 12],
        },
      ],
    },
  ],

  confusionBreakers: [
    {
      pair: { en: 'Collenchyma vs Sclerenchyma', hi: 'श्लेषोतक (Collenchyma) बनाम दृढ़ोतक (Sclerenchyma)' },
      left: { en: 'LIVING cells + Pectin corner thickening -> Bending flexibility without breaking (tendrils, stalks).', hi: 'सजीव कोशिकाएँ + कोनों पर पेक्टिन → बिना टूटे लचीलापन (प्रतान, धनिया व युवा तने)।' },
      right: { en: 'MOSTLY DEAD + Uniform Lignin coat + Zero lumen -> Rigid toughness (coconut husk, walnut shell).', hi: 'अधिकांश मृत + लिग्निन मोटी भित्ति → कठोरता व यांत्रिक शक्ति (नारियल जटा, अखरोट छिलका)।' },
    },
    {
      pair: { en: 'Xylem vs Phloem Direction & Living Elements', hi: 'जाइलम बनाम फ्लोएम (जीवित/मृत व प्रवाह दिशा)' },
      left: { en: 'Xylem = Water/Minerals UP ONLY (Transpiration Pull); ONLY Xylem Parenchyma living (3 dead!).', hi: 'जाइलम = जल/खनिज केवल ऊपर; सिर्फ जाइलम मृदूतक जीवित (वाहिनिका, वाहिका, तंतु मृत)।' },
      right: { en: 'Phloem = Sucrose/Amino Acids Bidirectional (↑↓); ONLY Phloem Fibres dead (3 living!).', hi: 'फ्लोएम = भोजन ऊपर-नीचे दोनों ओर; सिर्फ फ्लोएम तंतु मृत (चालनी, सहचर, मृदूतक जीवित)।' },
    },
    {
      pair: { en: 'Tendon vs Ligament', hi: 'कंडरा (Tendon) बनाम स्नायु (Ligament)' },
      left: { en: 'Tendon joins MUSCLE to BONE (tough limited-elasticity force transmitter).', hi: 'कंडरा (Tendon) = मांसपेशी को अस्थि (Muscle to Bone) से जोड़ती है।' },
      right: { en: 'Ligament joins BONE to BONE (elastic cord stabilizing joint limits).', hi: 'स्नायु (Ligament) = अस्थि को अस्थि (Bone to Bone) से जोड़ता है।' },
    },
    {
      pair: { en: 'Apical vs Intercalary vs Lateral Meristem', hi: 'शीर्षस्थ बनाम अंतर्वेशी बनाम पाश्‍र्व विभज्योतक' },
      left: { en: 'Apical = Tips (Length); Intercalary = Nodes/Leaf base (Branches/Grazed grass regrowth).', hi: 'शीर्षस्थ = लंबाई; अंतर्वेशी = पर्वसंधि/घास पुनरुद्भवन।' },
      right: { en: 'Lateral Meristem (Cambium) = Stem Ring (Increases Girth / Diameter + Annual Rings).', hi: 'पाश्‍र्व (Cambium) = तने व जड़ की परिधि/मोटाई बढ़ाना व वार्षिक वलय।' },
    },
    {
      pair: { en: 'Bone vs Cartilage Matrix & Cells', hi: 'अस्थि बनाम उपास्थि कोशिकाएँ व आधात्री' },
      left: { en: 'Bone (Osteocytes): Rigid solid Ca & Phosphorus matrix; 12–15% adult weight.', hi: 'अस्थि (Osteocytes): कैल्शियम व फॉस्फोरस की कठोर ठोस आधात्री।' },
      right: { en: 'Cartilage (Chondrocytes): Soft pliable protein-sugar matrix; ear, nose, trachea rings.', hi: 'उपास्थि (Chondrocytes): नरम लचीली आधात्री; कान, नाक व श्वासनली के वलय।' },
    },
    {
      pair: { en: 'Neuron vs Nephron', hi: 'न्यूरॉन (Neuron) बनाम नेफ्रॉन (Nephron)' },
      left: { en: 'Neuron = Structural & functional unit of Nervous System (1 nucleus in cell body).', hi: 'न्यूरॉन = तंत्रिका ऊतक की इकाई (कोशिका-काय में 1 केंद्रक)।' },
      right: { en: 'Nephron (`वृक्काणु`) = Filtration unit of Kidneys (Covered by Cuboidal Epithelium in tubules!).', hi: 'नेफ्रॉन = वृक्क (Kidney) की निस्यंदन इकाई (घनाकार उपकला द्वारा आस्तरित)।' },
    },
  ],

  pioneers: [
    {
      name: { en: 'Prof. B.G.L. Swamy', hi: 'प्रो. बी.जी.एल. स्वामी (1918–1980)' },
      country: { en: 'India • Botany & Anatomy', hi: 'भारत • पादप आकारिकी एवं शरीर रचना विज्ञान' },
      badge: { en: 'Sahitya Akademi 1978', hi: 'साहित्य अकादमी 1978' },
      fact: {
        en: 'Celebrated Indian plant anatomist; authored Kannada masterpiece ***"Hasuru Honnu"*** blending botany & Western Ghats lore (**1978 Central Sahitya Akademi Award**).',
        hi: 'प्रसिद्ध भारतीय वनस्पति विज्ञानी — कन्नड़ पुस्तक ***"हसुरु होन्नु"*** (वनस्पति, व्यंग्य व पश्चिमी घाट यात्रा वर्णन) के लिए 1978 साहित्य अकादमी पुरस्कार प्राप्त।',
      },
    },
    {
      name: { en: 'Sipra Guha-Mukherjee & S.C. Maheshwari', hi: 'सिप्रा गुहा मुखर्जी एवं एस.सी. माहेश्वरी' },
      country: { en: 'India • University of Delhi', hi: 'भारत • पादप ऊतक संवर्धन' },
      badge: { en: 'Anther Culture Breakthrough', hi: 'परागकोष संवर्धन खोज' },
      fact: {
        en: 'Developed **whole complete plants directly via Anther Culture** in sterile artificial nutrient media — transforming crop improvement!',
        hi: 'प्रयोगशाला में कृत्रिम पोषक द्वारा **परागकोष संवर्धन (Anther Culture)** से संपूर्ण पादप विकसित कर कृषि विज्ञान में क्रांति लाई।',
      },
    },
    {
      name: { en: 'Frederick Campion Steward (1958)', hi: 'एफ.सी. स्टीवर्ड (1958)' },
      country: { en: 'Cornell • Plant Physiology', hi: 'पादप कार्यिकी • पूर्णशक्तता प्रमाण' },
      badge: { en: 'Carrot Phloem -> Whole Plant', hi: 'गाजर फ्लोएम से पूर्ण पादप' },
      fact: {
        en: 'First to experimentally regenerate an entire mature **Carrot** plant from a SINGLE isolated root **Phloem cell**, proving **Dedifferentiation -> Totipotency**!',
        hi: 'गाजर के संवहन **फ्लोएम की एकल कोशिका** से तरल पोषक माध्यम में नया पूर्ण पौधा उगाकर **निर्विभेदन व पूर्णशक्तता** सिद्ध की।',
      },
    },
  ],

  visualGallery: [
    {
      id: 'vis-xylem-rings',
      figRef: { en: 'Figures 3.4 & 3.7 (Lateral Meristem & Vascular Cut)', hi: 'चित्र 3.4 एवं 3.7 (वार्षिक वलय व संवहन बंडल)' },
      title: {
        en: 'Annual Wood Growth Rings & Sunflower Stem Xylem Vessel Rings',
        hi: 'वृक्ष के तने के वार्षिक वृद्धि वलय एवं सूरजमुखी जाइलम वाहिका अनुप्रस्थ काट',
      },
      imageUrl: '/ncert-notes/class9-bio-ch3/real/tree-rings.webp',
      hotspots: [
        { en: 'Lateral Meristem (Cambium ring) builds new concentric wood every year -> counting rings measures tree age!', hi: 'पाश्‍र्व विभज्योतक प्रतिवर्ष संकेंद्री वलय जोड़ता है — इन्हें गिनकर वृक्ष की आयु मापी जाती है।' },
        { en: 'Favourable rainy summers make wide rings; dry stress seasons form tight narrow bands.', hi: 'अनुकूल मौसम में चौड़े व प्रतिकूल वर्ष में संकरे वलय बनते हैं।' },
      ],
    },
    {
      id: 'vis-blood-bone',
      figRef: { en: 'Figure 3.12 (Connective Tissues)', hi: 'चित्र 3.12 (संयोजी ऊतक स्मीयर)' },
      title: {
        en: 'Human Blood Smear (55% Plasma + 45% RBC/WBC/Platelets) vs Solid Bone Matrix',
        hi: 'मानव रक्त स्मीयर (प्लाज्मा, लाल व श्वेत रक्त कोशिकाएँ) तथा अस्थि संरचना',
      },
      imageUrl: '/ncert-notes/class9-bio-ch3/real/human-blood-smear.webp',
      hotspots: [
        { en: 'Fluid Matrix (**Plasma 55%**); Formed Elements (**45%**: RBC carry Hemoglobin ~4 months; WBC fight infection; Platelets clot wounds).', hi: 'तरल आधात्री (**प्लाज्मा 55%**) + निर्मित तत्व (**45%**): RBC (4 माह जीवन), WBC (प्रतिरक्षा), बिंबाणु (रक्त थक्का)।' },
      ],
    },
    {
      id: 'vis-muscle-neuron',
      figRef: { en: 'Figures 3.13 & 3.14 (Muscle & Nervous Tissue)', hi: 'चित्र 3.13 एवं 3.14 (पेशी एवं तंत्रिका)' },
      title: {
        en: 'Striated Skeletal Fibres & Branching Neuron Histology',
        hi: 'असली रेखित कंकाल पेशी तंतु एवं शाखित तंत्रिका कोशिका (न्यूरॉन)',
      },
      imageUrl: '/ncert-notes/class9-bio-ch3/real/striated-muscle.webp',
      hotspots: [
        { en: 'Skeletal muscles: Unbranched, Cylindrical, Multi-nucleated, Striated, Voluntary.', hi: 'कंकाल पेशी: बेलनाकार, अशाखित, बहुकेंद्रकी, रेखित एवं ऐच्छिक।' },
        { en: 'Neuron relays signals smoothly: **Dendrite -> Cell Body -> Axon -> Synaptic Cleft**.', hi: 'न्यूरॉन आवेग मार्ग: **द्रुमिका → कोशिका-काय → तंत्रिकाक्ष → सिनेप्स**।' },
      ],
    },
  ],

  activities: [
    {
      num: '3.1',
      title: { en: 'Onion Bulb Jar Apical Root Growth vs Tip Removal Experiment', hi: 'दो प्याज जार प्रयोग — मूलाग्र काटने पर लंबाई वृद्धि रुकना (चित्र 3.1–3.2)' },
      materials: { en: '2 glass/Coplin jars with water, 2 similar onion bulbs, scissors, mm scale', hi: 'पानी से भरे 2 जार (क व ख), 2 समान प्याज कंद, कैंची व स्केल' },
      steps: {
        en: '1. Measure daily root growth for Days 1–3 in both Jar A & Jar B (record in Table 3.1).\n2. On **Day 3**, snip **~1 cm off Jar B root tips** (leaving Jar A untouched).\n3. Measure length Days 4–7 & plot graph (Fig 3.2).',
        hi: '1. पहले, दूसरे और तीसरे दिन दोनों जार क व ख की जड़ों की लंबाई तालिका 3.1 में लिखें।\n2. **तीसरे दिन जार ख की जड़ों के सिरों (मूलाग्र) को लगभग 1 cm काट दें** (जार क को ज्यों का त्यों रखें)।\n3. चौथे से सातवें दिन तक लंबाई नापकर ग्राफ बनाएं (चित्र 3.2)।',
      },
      examTakeaway: { en: 'Jar A roots grow continuously, whereas **Jar B STOPS growing once tips are snipped**, proving active division resides strictly at **Apical Meristem** root tips!', hi: 'जार ख के मूलाग्र काटते ही जड़ों की वृद्धि रुक जाती है, जबकि जार क बढ़ता रहता है — यह **शीर्षस्थ विभज्योतक (Apical Meristem)** की उपस्थिति सिद्ध करता है!' },
      predictQuestion: {
        prompt: { en: 'What happens to Jar B onion roots from Day 4 onward after cutting 1 cm off the tips?', hi: 'तीसरे दिन जार ख के मूलाग्र 1 cm काटने के बाद चौथे दिन से जड़ों की लंबाई पर क्या प्रभाव पड़ेगा?' },
        options: { en: ['Roots grow twice as fast', 'Roots stop growing further in length', 'Roots branch from tips immediately'], hi: ['दोगुनी तेजी से बढ़ेंगी', 'लंबाई में वृद्धि बंद हो जाएगी', 'सिरों से तुरंत मोटी हो जाएँगी'] },
        correctIndex: 1,
        reason: { en: 'Snipping the 1 cm root tips removes Apical Meristem dividing cells, arresting elongation completely.', hi: 'मूलाग्र काटने से शीर्षस्थ विभज्योतक की विभाजनशील कोशिकाएँ हट जाती हैं, अतः लंबाई बढ़ना रुक जाता है।' },
      },
    },
    {
      num: '3.2',
      title: { en: 'Daily Blood Observations Mapped to Plasma, RBC, WBC & Platelets (Table 3.3)', hi: 'दैनिक रक्त अनुभव — थक्का बनना, संक्रमण मवाद व व्यायाम पर तेज सांस (तालिका 3.3)' },
      materials: { en: 'Student self-observation across cut clot, skin infection & exercise flushing', hi: 'दैनिक अनुभव: त्वचा कटना, संक्रमण शोथ तथा दौड़/व्यायाम के अवलोकन' },
      steps: {
        en: '1. Small cut bleeds red -> clots shortly (**Platelets**).\n2. Skin infection turns red/swollen with pus (**WBCs** rush to fight microbes).\n3. Exercise speeds breathing & reddens face (increased blood flow supplying extra **$O_2$** to working muscles).',
        hi: '1. थोड़ा कटने पर लाल रक्त बहकर थोड़ी देर में थक्का बनाता है (**बिंबाणु / Platelets**)।\n2. त्वचा संक्रमण पर लालिमा, सूजन व मवाद आता है (**श्वेत रक्त कोशिकाएँ / WBC**)।\n3. दौड़ते समय तेज साँस व चेहरा लाल होता है क्योंकि पेशियों को अधिक $O_2$ पहुँचाने हेतु रक्त प्रवाह बढ़ता है।',
      },
      examTakeaway: { en: 'Blood = Fluid Connective Tissue ($55\\%$ liquid Plasma + $45\\%$ RBC/WBC/Platelets); RBC lifespan ~**4 months (120 days)** carrying iron-rich **Haemoglobin**.', hi: 'रक्त = **$55\\%$ प्लाज्मा + $45\\%$ निर्मित तत्व**। RBC (हीमोग्लोबिन, 4 माह आयु) → $O_2$; WBC → सुरक्षा/मवाद; बिंबाणु → थक्का!' },
      predictQuestion: {
        prompt: { en: 'Which blood component forms a clot to seal a small skin cut and prevent excessive bleeding?', hi: 'त्वचा के थोड़े कट जाने पर चोट के स्थान पर रक्त का थक्का (स्कंदन) कौन बनाता है?' },
        options: {
          en: ['Red Blood Cells (RBC)', 'Plasma Fluid (55%)', 'Platelets (Thrombocytes)'],
          hi: ['लाल रक्त कोशिका (RBC)', 'प्लाज्मा तरल (55%)', 'बिंबाणु (Platelets)'],
        },
        correctIndex: 2,
        reason: { en: '**Platelets (`बिंबाणु`)** release clotting factors at injury sites; RBCs transport $O_2$ and WBCs fight infection.', hi: '**बिंबाणु (Platelets)** चोट पर रक्त का थक्का जमाने में सहायक होते हैं।' },
      },
    },
    {
      num: '3.3',
      title: { en: 'Touch-and-Test Joint & Connective Tissues (Bone, Cartilage, Tendon, Ligament — Table 3.4)', hi: 'स्पर्श व गति प्रयोग — अस्थि, उपास्थि, कंडरा व स्नायु की पहचान (तालिका 3.4)' },
      materials: { en: 'Self-check of elbow, bent ear/nose, forearm-fingers tendon & seated leg extension', hi: 'कोहनी, कान/नाक दबाना, अग्रबाहु-अँगुली चाल व कुर्सी पर पैर उठाना' },
      steps: {
        en: '1. Touch Elbow -> hard/rigid (**Bone**).\n2. Bend Ear/Nose -> snaps back flexibly (**Cartilage**).\n3. Move fingers while feeling forearm -> feel taut **Tendon** pulling bone via muscle.\n4. Lift seated leg till knee limit stops excess rotation -> **Ligament** stability!',
        hi: '1. कोहनी छूने पर कठोर (**अस्थि**)।\n2. कान/नाक मोड़ने पर नरम व पुनः आकार में आना (**उपास्थि**)।\n3. अँगुलियाँ हिलाने पर अग्रबाहु में खिंचाव (**कंडरा — पेशी को अस्थि से जोड़ती है**)।\n4. पैर अधिकतम उठाने पर संधि सीमा व विस्थापन रोकना (**स्नायु — अस्थि को अस्थि से जोड़ता है**)।',
      },
      examTakeaway: { en: 'Bone = hard Ca+P protection | Cartilage = shock pad cushion | Tendon = Muscle↔Bone | Ligament = Bone↔Bone.', hi: 'अस्थि (`Ca+P`) सहारा; उपास्थि गद्दी; कंडरा = पेशी↔अस्थि; स्नायु = अस्थि↔अस्थि!' },
      predictQuestion: {
        prompt: { en: 'When you bend your ear pinna gently and release it, which tissue lets it snap back smoothly?', hi: 'अपने कान को दबाने और छोड़ने पर वह किस लचीले संयोजी ऊतक के कारण पुनः अपने आकार में लौट आता है?' },
        options: { en: ['Compact Bone', 'Cartilage (Chondrocytes)', 'Striated Muscle'], hi: ['अस्थि (Bone)', 'उपास्थि (Cartilage)', 'रेखित पेशी'] },
        correctIndex: 1,
        reason: { en: 'Flexible **Cartilage (`उपास्थि`)** bends easily and returns smoothly to its resting shape.', hi: 'नरम व लचीली **उपास्थि (Cartilage)** कान, नाक व संधि सिरों को गद्दीदार लचीलापन देती है।' },
      },
    },
    {
      num: '3.4',
      title: { en: 'Calculating Personal Bone Mass (12–15%) & Muscle Mass (30–50%) Percentage', hi: 'अपने शरीर के कुल भार में अस्थि (12–15%) व मांसपेशी (30–50%) द्रव्यमान की गणना' },
      materials: { en: 'Weighing scale + Indian adult reference percentages', hi: 'तुला (भार मशीन) व आयु/लिंग आधारित संदर्भ प्रतिशत' },
      steps: {
        en: 'Multiply total body weight (kg) by **Adult Skeleton ratio (12–15%)** and **Muscle ratio (~40–50% adult males / ~30–40% adult females)**.',
        hi: 'कुल शरीर भार को अस्थि प्रतिशत (**12–15%**) व पेशी प्रतिशत (**पुरुष 40–50%, महिला 30–40%**) से गुणा करके कक्षा के साथियों से तुलना करें।',
      },
      examTakeaway: { en: 'Direct numeric fact from NCERT Page 39: **Adult human bones weigh 12–15%** of total body mass!', hi: 'NCERT प्रत्यक्ष आँकड़ा (पृष्ठ 39): वयस्क मानव कंकाल कुल भार का **लगभग 12–15%** होता है।' },
      predictQuestion: {
        prompt: { en: 'Roughly what percentage of an adult human’s total body weight comes from the bone skeleton?', hi: 'औसतन वयस्क मानव के शरीर के कुल भार का लगभग कितना प्रतिशत भाग अस्थियों से बना होता है?' },
        options: { en: ['12–15%', '35–45%', '60–70%'], hi: ['12–15%', '35–45%', '60–70%'] },
        correctIndex: 0,
        reason: { en: 'Average adult human skeleton accounts for **12–15%** of body weight; muscles make up 30–50%.', hi: 'अस्थि द्रव्यमान **12–15%** तथा पेशी द्रव्यमान पुरुषों में 40–50% व महिलाओं में 30–40% होता है।' },
      },
    },
    {
      num: '3.5',
      title: { en: 'Testing Body Joint Motion Ranges Across 7 Regions (Table 3.5)', hi: 'शरीर के 7 भागों में गति परीक्षण व संधि वर्गीकरण (तालिका 3.5)' },
      materials: { en: 'Observing elbow, shoulder, knee, neck, fingers, toes & wrist movements', hi: 'कोहनी, कंधा, घुटना, गर्दन, अँगुलियाँ, पैर की अँगुलियाँ व कलाई' },
      steps: {
        en: 'Test full rotation vs partial tilt vs hinge bend vs immobility across joints to classify Ball & Socket, Hinge, Pivot & Fixed joints.',
        hi: 'पूर्ण घुमाव, आंशिक घुमाव व झुकाव/मुड़ने का परीक्षण करके कंदुक-खल्लिका, कोर, धुराग्र व अचल संधियों में अंतर पहचानें।',
      },
      examTakeaway: { en: 'Shoulder = Ball & Socket (360° full spin); Elbow/Knee = Hinge (1 plane only); Neck = Pivot; Skull = Fixed (Zero movement).', hi: 'कंधा = कंदुक-खल्लिका (पूर्ण घुमाव) | कोहनी/घुटना = कोर (1 दिशा) | गर्दन = धुराग्र | खोपड़ी = अचल।' },
      predictQuestion: {
        prompt: { en: 'Why can your shoulder spin a full circle while your elbow ONLY bends & straightens like a door?', hi: 'कंधा चारों तरफ गोल घूम सकता है जबकि कोहनी केवल एक दरवाजे के कब्जे की तरह मुड़ती और सीधी होती है — क्यों?' },
        options: { en: ['Shoulder = Hinge | Elbow = Pivot', 'Shoulder = Ball & Socket | Elbow = Hinge', 'Both are Fixed Joints'], hi: ['कंधा = कोर | कोहनी = धुराग्र', 'कंधा = कंदुक-खल्लिका | कोहनी = कोर संधि', 'दोनों अचल संधियाँ हैं'] },
        correctIndex: 1,
        reason: { en: 'Rounded humerus head fits shallow shoulder socket (**Ball & Socket**), whereas Elbow bends in one plane (**Hinge**)!', hi: 'कंधे में **कंदुक-खल्लिका (Ball & Socket)** और कोहनी में एक ही तल वाली **कोर (Hinge)** संधि होती है!' },
      },
    },
  ],

  tables: [
    {
      id: 'table-3-meristems',
      title: { en: 'Meristematic Tissues Comparison (Location & Role)', hi: 'तीनों विभज्योतक ऊतकों की तुलना (स्थान एवं मुख्य कार्य)' },
      headers: {
        en: ['Meristem Type', 'Exact Location', 'Growth Role', 'Visual Example'],
        hi: ['विभज्योतक प्रकार', 'स्थिति (कहाँ होता है)', 'वृद्धि कार्य', 'दैनिक उदाहरण'],
      },
      rows: [
        [{ en: 'Apical (`शीर्षस्थ`)', hi: 'शीर्षस्थ विभज्योतक' }, { en: 'Growing tips of roots & stems', hi: 'जड़ एवं तने के अग्रभाग (शीर्ष)' }, { en: 'Increases LENGTH (Primary)', hi: 'लंबाई में वृद्धि' }, { en: 'Onion root tips (Activity 3.1)', hi: 'प्याज मूलाग्र (क्रियाकलाप 3.1)' }],
        [{ en: 'Lateral / Cambium (`पाश्‍र्व`)', hi: 'पाश्‍र्व विभज्योतक (एधा)' }, { en: 'Circular ring along stem/root sides', hi: 'तने व जड़ की परिधि के चारों ओर' }, { en: 'Increases GIRTH / Diameter (Secondary)', hi: 'मोटाई/व्यास वृद्धि + वार्षिक वलय' }, { en: 'Tree bark & annual wood rings', hi: 'सागवान वार्षिक वलय व काग एधा' }],
        [{ en: 'Intercalary (`अंतर्वेशी`)', hi: 'अंतर्वेशी विभज्योतक' }, { en: 'Base of leaves or internodes near Nodes', hi: 'पत्ती आधार / पर्वसंधि के ठीक ऊपर' }, { en: 'New branches & fast regrowth', hi: 'नई शाखाएँ व घास का पुनः उगना' }, { en: 'Grazed grass, trimmed hedge, sugarcane node', hi: 'घास कटाई, उद्यान बाड़ व गन्ने की कलम' }],
      ],
    },
    {
      id: 'table-3-simple-perm',
      title: { en: 'Simple Permanent Tissues: Parenchyma vs Collenchyma vs Sclerenchyma', hi: 'सरल स्थायी ऊतक तुलना: मृदूतक, श्लेषोतक एवं दृढ़ोतक' },
      headers: {
        en: ['Feature', 'Parenchyma (मृदूतक)', 'Collenchyma (श्लेषोतक)', 'Sclerenchyma (दृढ़ोतक)'],
        hi: ['विशेषता', 'मृदूतक (Parenchyma)', 'श्लेषोतक (Collenchyma)', 'दृढ़ोतक (Sclerenchyma)'],
      },
      rows: [
        [{ en: 'Cell Status', hi: 'कोशिका अवस्था' }, { en: 'Living ✓', hi: 'सजीव ✓' }, { en: 'Living ✓', hi: 'सजीव ✓' }, { en: 'Mostly DEAD ✗', hi: 'अधिकांश मृत ✗' }],
        [{ en: 'Cell Wall Chemistry', hi: 'भित्ति व मोटाई' }, { en: 'Thin Cellulose wall', hi: 'पतली सेल्युलोस भित्ति' }, { en: 'Uneven **Pectin** corners', hi: 'कोनों पर **पेक्टिन** से असमान मोटी' }, { en: 'Uniform thick **Lignin** coat', hi: 'चारों ओर **लिग्निन** से अत्यंत मोटी' }],
        [{ en: 'Intercellular Spaces', hi: 'कोशिकीय अवकाश' }, { en: 'Large spaces (Air sacs = **Aerenchyma**)', hi: 'बड़े रिक्त स्थान ✓ (वायूतक)' }, { en: 'Very little space', hi: 'बहुत कम स्थान' }, { en: 'NONE (Zero internal space)', hi: 'कोई आंतरिक स्थान नहीं ✗' }],
        [{ en: 'Core Function', hi: 'मुख्य कार्य व उदाहरण' }, { en: 'Food store, Photosynthesis (**Chlorenchyma**), aquatic float', hi: 'भोजन संचय व प्लवन (जलीय पौधे)' }, { en: 'Elastic support & bending (Stalks, tendrils)', hi: 'बिना टूटे लचीलापन (धनिया, प्रतान)' }, { en: 'Hardness/strength (Coconut husk, nutshells)', hi: 'कठोरता व यांत्रिक शक्ति (नारियल जटा, अखरोट)' }],
      ],
    },
    {
      id: 'table-3-vascular',
      title: { en: 'Complex Vascular Tissues: Xylem vs Phloem', hi: 'जटिल संवहन ऊतक सारणी: जाइलम (दारु) बनाम फ्लोएम (पोषवाह)' },
      headers: {
        en: ['Parameter', 'Xylem (`जाइलम`)', 'Phloem (`फ्लोएम`)'],
        hi: ['तुलना बिंदु', 'जाइलम / दारु (Xylem)', 'फ्लोएम / पोषवाह (Phloem)'],
      },
      rows: [
        [{ en: 'Substance Carried', hi: 'परिवहन पदार्थ' }, { en: 'Water & dissolved Soil Minerals', hi: 'जल एवं घुले हुए खनिज लवण' }, { en: 'Soluble Sucrose (food) & Amino Acids' , hi: 'घुलनशील शर्करा (भोजन) व ऐमीनो अम्ल' }],
        [{ en: 'Flow Direction & Force', hi: 'दिशा एवं प्रेरक बल' }, { en: 'Unidirectional Upward (Roots -> Leaves); Transpiration Pull', hi: 'केवल ऊपर की ओर; वाष्पोत्सर्जन खिंचाव' }, { en: 'Bidirectional (↑↓); Active ATP loading by Companion cells', hi: 'ऊपर-नीचे दोनों दिशाओं में; ATP ऊर्जा द्वारा' }],
        [{ en: '4 Component Cells', hi: '4 घटक कोशिकाएँ' }, { en: 'Tracheids, Vessels, Xylem Fibres (**Dead**) + Parenchyma', hi: 'वाहिनिका, वाहिका, तंतु (**मृत**) + जाइलम मृदूतक' }, { en: 'Sieve Tubes, Companion Cells, Parenchyma (**Living**) + Fibres', hi: 'चालनी नलिका, सहचर कोशिका, मृदूतक (**जीवित**) + तंतु' }],
        [{ en: 'Living vs Dead Rule', hi: 'जीवित बनाम मृत अपवाद' }, { en: '**ONLY Xylem Parenchyma is living!**', hi: '**एकमात्र जीवित = जाइलम मृदूतक**' }, { en: '**ONLY Phloem Fibres are dead!**', hi: '**एकमात्र मृत = फ्लोएम तंतु**' }],
      ],
    },
    {
      id: 'table-3-2-epithelial',
      title: { en: 'NCERT Table 3.2 — 5 Epithelial Tissue Types, Structures & Locations', hi: 'NCERT तालिका 3.2 — विभिन्न उपकला ऊतकों की संरचना, कार्य एवं शरीर में स्थान' },
      headers: {
        en: ['Type & Role', 'Cell Structure', 'Exact Organ Location'],
        hi: ['प्रकार व प्रकार्य', 'संरचना', 'शरीर में स्थान'],
      },
      rows: [
        [{ en: 'Exchange (`Simple Squamous`)', hi: 'विनिमय — सरल शल्की' }, { en: 'Single layer of thin flat cells for rapid diffusion', hi: 'पतली, चपटी कोशिकाओं की एकल परत' }, { en: 'Blood vessels & Lung Alveoli lining', hi: 'रक्त वाहिकाओं व फेफड़ों के ऊतकों का आस्तर' }],
        [{ en: 'Protection (`Stratified Squamous`)', hi: 'सुरक्षा — स्तरित शल्की' }, { en: 'Many stacked compact layers resisting friction', hi: 'अनेक चपटी व संहत परतें' }, { en: 'Outer Skin, Mouth & Oesophagus', hi: 'बाहरी त्वचा, मुँह व ग्रासनली (Oesophagus)' }],
        [{ en: 'Secretion (`Cuboidal / Columnar`)', hi: 'स्रवण — घनाकार / स्तंभी' }, { en: 'Cube/pillar cells making mucus, saliva, sweat, enzymes', hi: 'घनाकार (Cuboidal) या स्तंभाकार ग्रंथिल कोशिकाएँ' }, { en: 'Kidney tubules, Salivary/Sweat glands & Stomach', hi: 'वृक्क नलिकाएँ, लार/स्वेद ग्रंथि व आमाशय आस्तर' }],
        [{ en: 'Sensory (`Ciliated Receptor`)', hi: 'संवेदी — रोम पक्ष्माभी' }, { en: 'Specialized receptor cells with hair-like cilia', hi: 'रोम जैसे पक्ष्माभ वाली संवेदी ग्राही कोशिकाएँ' }, { en: 'Nasal cavities, Taste buds & Inner Ear', hi: 'नासाछिद्र, स्वाद-कलिकाएँ व आंतर कर्ण' }],
        [{ en: 'Absorption (`Intestinal Columnar`)', hi: 'अवशोषण — आंत्र स्तंभाकार' }, { en: 'Single layer of tall pillar cells with hair-like microvilli', hi: 'रोम जैसी संरचना सहित लंबी स्तंभ-जैसी कोशिकाएँ' }, { en: 'Small Intestine lining (Nutrient uptake)', hi: 'छोटी आँत का आस्तर (पोषक व जल अवशोषण)' }],
      ],
    },
    {
      id: 'table-3-muscles',
      title: { en: 'Animal Muscles Comparison: Skeletal vs Smooth vs Cardiac', hi: 'तीनों पेशी ऊतकों का तुलनात्मक विवरण (रेखित, चिकनी व हृद)' },
      headers: {
        en: ['Property', 'Skeletal / Striated', 'Smooth / Unstriated', 'Cardiac'],
        hi: ['अंतर बिंदु', 'कंकाल / रेखित पेशी', 'चिकनी / अरेखित पेशी', 'हृदय पेशी (Cardiac)'],
      },
      rows: [
        [{ en: 'Cell Shape & Branching', hi: 'आकार व शाखन' }, { en: 'Long cylindrical, UNBRANCHED', hi: 'लंबी बेलनाकार, अशाखित' }, { en: 'Spindle-shaped (pointed ends)', hi: 'तर्कु रूप (नुकीले सिरे)' }, { en: 'Cylindrical, BRANCHED fibers', hi: 'बेलनाकार एवं शाखित तंतु' }],
        [{ en: 'Nuclei & Striations', hi: 'केंद्रक व धारियाँ' }, { en: 'Multinucleated + Dark stripes', hi: 'बहुकेंद्रकी + गहरी-हल्की धारियाँ' }, { en: '1 Nucleus + NO stripes', hi: 'एकल केंद्रक + धारियाँ नहीं' }, { en: '1 Nucleus + Faint stripes', hi: 'एकल केंद्रक + हल्की धारियाँ' }],
        [{ en: 'Conscious Control & Site', hi: 'नियंत्रण व स्थान' }, { en: 'VOLUNTARY (Arms, legs, tongue)', hi: 'ऐच्छिक (हाथ-पैर, जीभ)' }, { en: 'INVOLUNTARY (Stomach, intestine, iris)', hi: 'अनैच्छिक (आमाशय, आँत, आँख)' }, { en: 'INVOLUNTARY, NEVER fatigues (Heart ONLY)', hi: 'अनैच्छिक, जीवनभर अथक (केवल हृदय)' }],
      ],
    },
    {
      id: 'table-3-6-steward',
      title: { en: 'NCERT Table 3.6 — F.C. Steward (1958) Carrot Phloem Culture Conditions', hi: 'NCERT तालिका 3.6 — एफ.सी. स्टीवर्ड (1958): प्रकाश, वायु एवं माध्यम का प्रभाव' },
      headers: {
        en: ['Light', 'Air (Oxygen)', 'Nutrient Medium', 'Change in Fresh Cell Mass (mg)'],
        hi: ['प्रकाश', 'वायु', 'पोषक माध्यम का संघटन', 'कोशिकाओं के ताजा भार में वृद्धि'],
      },
      rows: [
        ['Present ✓', 'Absent ✗', { en: 'Solid Medium + Nutrients', hi: 'ठोस माध्यम + पोषक तत्व' }, { en: 'Decreased ✗', hi: 'कम हुआ ✗' }],
        ['Present ✓', 'Present ✓', { en: 'Liquid Medium + Nutrients (Aerated)', hi: 'तरल माध्यम + पोषक तत्व (हिलाने सहित)' }, { en: '+20% Increase ✓ (Optimal Biomass!)', hi: '20% वृद्धि हुई ✓ (सर्वाधिक जैव मात्रा!)' }],
        ['Present ✓', 'Present ✓', { en: 'Unsterilized/Imbalanced control mix', hi: 'प्रतिकूल ठहरा हुआ माध्यम (कमी सहित)' }, { en: 'Decreased ✗', hi: 'कम हुआ ✗' }],
      ],
    },
    {
      id: 'table-3-7-teak',
      title: { en: 'NCERT Table 3.7 — Teak Tree Age vs DBH Diameter vs Annual Rings', hi: 'NCERT तालिका 3.7 — सागवान के वृक्ष की आयु, तने का व्यास व वार्षिक वलय' },
      headers: {
        en: ['Age (Years)', 'Breast-Height Diameter DBH (cm)', 'Number of Annual Rings'],
        hi: ['सागवान वृक्ष की आयु (वर्ष)', 'आवक्ष व्यास DBH (cm)', 'निर्मित वार्षिक वलयों की संख्या'],
      },
      rows: [
        ['5', '4', '5'],
        ['10', '8', '10'],
        ['20', '24', '20'],
        ['25', '28', '25'],
        ['30', '32', '30'],
        ['40', '40', '40'],
      ],
    },
  ],

  inTextQuestions: [
    {
      num: 'Think 1 (p.33)',
      q: { en: 'Coconut husk fibres feel stiff & brittle whereas coriander petioles bend smoothly. Why?', hi: 'नारियल के रेशे के तंतु कठोर और भंगुर होते हैं जबकि धनिए के पर्णवृंत नरम और लचीले होते हैं — कारण?' },
      a: { en: 'Coconut husk is composed of **Sclerenchyma** (dead cells heavily thickened by **Lignin**), whereas coriander leaf stalks contain living **Collenchyma** (`श्लेषोतक`) thickened unevenly with **Pectin** giving supple bending flexibility.', hi: 'नारियल के रेशे में **लिग्निन युक्त मृत दृढ़ोतक (Sclerenchyma)** होता है जो उसे कठोर व भंगुर बनाता है। धनिए के पर्णवृंत में **पेक्टिन युक्त सजीव श्लेषोतक (Collenchyma)** होता है जो नरम व लचीलापन देता है।' },
    },
    {
      num: 'Think 2 (p.34)',
      q: { en: 'Why is a thick waxy Cuticle helpful on desert plants yet harmful for fully submerged aquatic plants?', hi: 'मरुस्थल के पादपों में मोटी उपत्वचा (Cuticle) लाभदायक एवं जलमग्न पादपों के लिए हानिकारक क्यों है?' },
      a: { en: 'In hot deserts, thick waxy cuticle stops fatal water evaporation (transpiration); however, submerged aquatic plants absorb water, dissolved gases ($CO_2/O_2$) & minerals directly across their leaf surfaces—a waterproof cuticle would suffocate them!', hi: 'मरुस्थलीय पौधों में मोटी मोमी उपत्वचा वाष्पोत्सर्जन से पानी की बर्बादी रोकती है। इसके विपरीत, पानी में डूबे पौधे अपनी पूरी सतह से जल व घुली गैसें सोखते हैं — उन पर मोटी मोमी परत होने से श्वसन व पोषण रुक जाएगा!' },
    },
    {
      num: 'Think 3 (p.34)',
      q: { en: 'How do Xylem "dead" tubes cooperate with upper living leaf cells to haul water upwards against gravity?', hi: 'जाइलम की "मृत" कोशिकाएँ ऊपरी पत्तियों की सजीव कोशिकाओं के साथ मिलकर गुरुत्वाकर्षण के विपरीत जल को ऊपर कैसे पहुँचाती हैं?' },
      a: { en: 'Evaporation of water vapour from living leaf **Stomata (`Transpiration`)** creates negative suction tension (**Transpiration Pull**), continuously hauling an unbroken column of water up hollow dead lignified Xylem Tracheids & Vessels!', hi: 'पत्तियों के रंध्रों से होने वाला **वाष्पोत्सर्जन (Transpiration)** ऊपर एक खिंचाव-चूषण बल (**वाष्पोत्सर्जन खिंचाव**) उत्पन्न करता है जो खोखली मृत जाइलम नलिकाओं से जल स्तंभ को लगातार ऊपर खींचता रहता है।' },
    },
    {
      num: 'Think 4 (p.34)',
      q: { en: 'What would happen if stems and leaves had NO Stomata at all?', hi: 'यदि तने या पत्तियों की बाह्यत्वचा में रंध्र (Stomata) न हों तो क्या होगा?' },
      a: { en: '$CO_2$ intake halts (stopping **Photosynthesis**), oxygen exchange drops, **Transpiration** halts (halting xylem water/mineral upward pull & cooling), and plants rapidly starve & overheat.', hi: 'पौधे $CO_2$ व $O_2$ विनिमय नहीं कर पाएंगे (प्रकाश-संश्लेषण बंद), वाष्पोत्सर्जन रुकने से जड़ों से ऊपर जल/खनिज खिंचाव व तापमान नियंत्रण समाप्त हो जाएगा!' },
    },
    {
      num: 'Think 5 (p.40)',
      q: { en: 'Identify which joints & movements operate in classical & folk Indian dance mudras (Fig 3.17).', hi: 'भारत के शास्त्रीय व लोक नृत्य मुद्राओं (चित्र 3.17) में प्रयुक्त प्रमुख संधियों एवं गतियों की पहचान कीजिए।' },
      a: { en: '**Neck tilts:** Pivot joint (`धुराग्र`). **Raised rotating arms/hips:** Ball & Socket joints (`कंदुक-खल्लिका`). **Bent elbows & knees:** Hinge joints (`कोर संधि`).', hi: '**गर्दन मुड़ना:** धुराग्र संधि | **ऊपर उठी व घूमती भुजाएँ/कूल्हा:** कंदुक-खल्लिका संधि | **मुड़ी कोहनी व घुटना:** कोर (Hinge) संधि।' },
    },
  ],

  exercises: [
    { num: 1, q: { en: '[MCQ • Ans: (iii)] Which cellular features let Meristematic tissues divide repeatedly?', hi: '[MCQ • उत्तर: (iii)] विभज्योतक ऊतक की कौन-सी विशेषताएँ बार-बार विभाजन संभव बनाती हैं?' }, a: { en: 'Option **(iii)**: **Thin cell walls, dense cytoplasm, large prominent nucleus** (and absent vacuoles).', hi: 'विकल्प **(iii)**: **पतली भित्तियाँ, सघन कोशिकाद्रव्य और बड़ा व स्पष्ट केंद्रक** (रसधानी अनुपस्थित)।' } },
    { num: 2, q: { en: '[MCQ • Ans: (ii)] A plant fails to transport food from leaves down to roots — which tissue is faulty?', hi: '[MCQ • उत्तर: (ii)] यदि कोई पादप पत्तियों से जड़ों तक भोजन नहीं पहुँचा पा रहा है तो कौन-सा ऊतक बाधित है?' }, a: { en: 'Option **(ii)**: **Phloem (`फ्लोएम / पोषवाह`)** (translocates soluble sugars & amino acids).', hi: 'विकल्प **(ii)**: **फ्लोएम (Phloem)** पत्तियों में बना भोजन पौधे के अन्य भागों तक पहुँचाता है।' } },
    { num: 3, q: { en: '[MCQ • Ans: (iii)] Why are internal organ-lining Epithelia often just 1 or a few cells thick?', hi: '[MCQ • उत्तर: (iii)] जंतुओं के आंतरिक अंगों को आस्तरित करने वाले उपकला ऊतक प्रायः एक या कुछ कोशिका मोटाई के क्यों होते हैं?' }, a: { en: 'Option **(iii)**: To permit **rapid exchange / diffusion** of gases, nutrients & fluids across thin sheets (e.g. Lung Alveoli & Intestine).', hi: 'विकल्प **(iii)**: उनसे होकर **पदार्थों के त्वरित आदान-प्रदान (विसरण व अवशोषण)** को सुगम बनाने के लिए।' } },
    { num: 4, q: { en: 'Straight-leg vs bent-knee jumping (Fig 3.21): compare ankle, knee & hip positions.', hi: 'सीधी टाँग vs घुटने मोड़कर कूदना (चित्र 3.21): टखने, घुटने व कूल्हे की स्थिति की तुलना करें।' }, a: { en: 'Straight-leg landing sends jarring shock straight up bones; natural bending at **Ankle & Knee Hinge joints** plus **Hip Ball-and-Socket flexion** absorbs landing impact safely using tendons, muscles & cartilage cushions!', hi: 'टाँग सीधी रखने से कूदने का झटका सीधे अस्थियों पर पड़ता है। सामान्य कूद में टखने व घुटने की **कोर संधि** तथा कूल्हे की **कंदुक-खल्लिका संधि** मुड़कर पेशियों व उपास्थि गद्दी की मदद से आघात सोख लेती हैं।' } },
    { num: 5, q: { en: '[MCQ • Ans: (ii)] Which joint type acts when bending your knees and ankles?', hi: '[MCQ • उत्तर: (ii)] जब आप अपने घुटने और टखने मोड़ते हैं तो किस प्रकार की संधि का उपयोग होता है?' }, a: { en: 'Option **(ii)**: **Hinge Joint (`कोर संधि`)** — bends in one plane only.', hi: 'विकल्प **(ii)**: **कोर संधि (Hinge Joint)** जो एक ही तल में मुड़ती है।' } },
    { num: 6, q: { en: 'Assertion–Reason Scenarios (I–IV): Pick (i) Both T & R explains A | (ii) Both T, R not expl. | (iii) A True, R False | (iv) A False, R True.', hi: 'अभिकथन–कारण प्रश्न (I–IV): (i) दोनों सत्य+सही व्याख्या | (ii) दोनों सत्य, व्याख्या नहीं | (iii) A सत्य, R असत्य | (iv) A असत्य, R सत्य।' }, a: { en: '**(I) -> (iii)** [A True: Epithelium lines lung exchange; R False: Alveoli use SINGLE flat squamous layer speeding diffusion, not multi-tall layers!]\n**(II) -> (i)** [Cardiac muscles never tire BECAUSE they hold abundant Mitochondria & rich blood supply!]\n**(III) -> (iv)** [A False: Tendons link Muscle to Bone, NOT Bone-to-Bone (`Ligaments` do); R True: Tendons are strong connective tissue transmitting muscle force to bone!]\n**(IV) -> (iii)** [A True: Hinge moves in one plane; R False: bone ends don’t glide in every direction like Ball & Socket!]', hi: '**(I) → (iii)** [अभिकथन सत्य, कारण असत्य — फेफड़ों में एकल शल्की उपकला होती है जो विसरण तेज करती है!]\n**(II) → (i)** [दोनों सत्य व सही व्याख्या — प्रचुर माइटोकॉन्ड्रिया व रक्त से हृदय पेशी नहीं थकती!]\n**(III) → (iv)** [अभिकथन असत्य (`कंडरा पेशी-अस्थि को जोड़ती है, अस्थि-अस्थि को नहीं`), कारण सत्य!]\n**(IV) → (iii)** [अभिकथन सत्य (`कोर संधि केवल 1 तल गति`), कारण असत्य!]' } },
    { num: 7, q: { en: 'Teak Growth Table 3.7 Analysis (`Age vs DBH vs Rings`): State relation & identify girth tissue.', hi: 'सागवान तालिका 3.7 विश्लेषण: आयु, व्यास DBH व वार्षिक वलय का संबंध तथा परिधि वृद्धि वाला ऊतक बताएं।' }, a: { en: '(i) Stem diameter (DBH) rises steadily over decades alongside growth. (ii) **1 Annual Ring forms strictly per 1 Year** (`5 yr = 5 rings`, `40 yr = 40 rings`), correlating directly with rising tree girth. (iii) **Lateral Meristem (`Cambium / पाश्‍र्व विभज्योतक`)** situated in a ring around trunk circumference drives secondary girth expansion!', hi: '(i)–(ii) प्रति वर्ष ठीक **1 वार्षिक वलय** जुड़ता है (`5 वर्ष = 5 वलय; 40 वर्ष = 40 वलय`) और वलय बढ़ने के साथ तने का व्यास भी बढ़ता है। (iii) यह वृद्धि तने की परिधि पर स्थित **पाश्‍र्व विभज्योतक (Lateral Meristem / एधा)** द्वारा होती है!' } },
    { num: 8, q: { en: 'Elephant strips Bark around tree trunk (Fig 3.22). Answer (i)–(iv) on disrupted tissues.', hi: 'हाथी द्वारा वृक्ष की छाल बुरी तरह उखाड़ने पर (चित्र 3.22) प्रभावित कार्य व ऊतक बताइए (i)–(iv)।' }, a: { en: '(i) Removing protective Cork/Bark & inner **Phloem** blocks downward **food transport** to roots and exposes wood to desiccation/infection. (ii) Deeper injury destroys **Lateral Meristem (Cambium)** halting trunk widening/healing, then damages **Xylem**. (iii) Severe damage to sub-bark xylem blocks upward **water & mineral conduction**, starving crown & killing the tree. (iv) Assumes complete radial girdling around circumference (partial patch stripping still allows lateral flow elsewhere).', hi: '(i) छाल व निचले **फ्लोएम** हटने से जड़ों तक **भोजन परिवहन** व सुरक्षा रुकती है। (ii) अधिक गहराई से **पाश्‍र्व विभज्योतक (एधा)** व **जाइलम** क्षतिग्रस्त होता है। (iii) जाइलम नष्ट होने पर ऊपर पत्तियों तक **जल व खनिज संवहन** रुक जाएगा और वृक्ष सूख सकता है। (iv) यह पूर्ण गोलाकार छाल उतरने के अनुमान पर आधारित है।' } },
    { num: 9, q: { en: 'Sapling mango stem bends in monsoon winds without snapping. Name tissue; what if replaced by Sclerenchyma?', hi: 'आम के पौधे का तना मानसून हवाओं में झुकता है पर टूटता नहीं — ऊतक पहचानें; दृढ़ोतक से बदलने पर क्या होगा?' }, a: { en: '**Collenchyma (`श्लेषोतक`)** gives bending flexibility via living pectin corners! If replaced entirely by **Sclerenchyma (`दृढ़ोतक`)**, young flexible stems turn stiff, rigid & brittle—snapping sharply in strong wind.', hi: '**श्लेषोतक (Collenchyma)** लचीलापन देता है! यदि इसे **दृढ़ोतक (Sclerenchyma)** से बदल दिया जाए तो युवा तना कठोर व भंगुर हो जाएगा और तेज हवा में झुकने के बजाय **टूट जाएगा**!' } },
    { num: 10, q: { en: 'Sugarcane Cutting A (internode piece only) fails while Cutting B (with Node/bud) grows (Fig 3.23). Why?', hi: 'गन्ने की कलम ख में अंकुरण हुआ पर कलम क में नहीं हुआ (चित्र 3.23) — कारण व प्रायोगिक नियंत्रण?' }, a: { en: '(i)–(ii) **Cutting B contains a Node (`पर्वसंधि`)** housing active dividing **Intercalary Meristem (`अंतर्वेशी विभज्योतक`)** & axillary buds capable of sprouting shoots/roots; Cutting A is purely internode tissue lacking meristem! (iii) Measured bud length & shoot sprouts per week. (iv) Keep soil type, moisture, cutting length, light & variety identical.', hi: '(i)–(ii) **प्रकार ख में पर्वसंधि (Node)** उपस्थित थी जहाँ विभाजनशील **अंतर्वेशी विभज्योतक** होता है (कलम क में पर्वसंधि नहीं थी)। (iii) अंकुर लंबाई व नए कल्लों की संख्या मापी गई। (iv) मृदा, जल, ताप, प्रकाश व गन्ने की मोटाई एक समान रखने चाहिए।' } },
    { num: 11, q: { en: 'Rohan calls all tissues "identical cell groups"; Rajeev counters "different in Complex Tissues". Clarify!', hi: 'रोहन व राजीव की चर्चा ("सरल ऊतक समान कोशिकाओं से बना है किंतु जटिल ऊतक भिन्न कोशिकाओं से") पर वैज्ञानिक स्पष्टीकरण दीजिए।' }, a: { en: '**Rajeev clarifies NCERT accurately:** **Simple tissues** (Parenchyma/Collenchyma/Sclerenchyma) consist of **ONE uniform cell type**, whereas **Complex tissues** (**Xylem & Phloem**) unite **MORE than one structurally distinct cell type** (e.g., Tracheids + Vessels + Fibres + Parenchyma) acting together for one common transport goal!', hi: '**राजीव का तर्क बिल्कुल सही है:** **सरल ऊतक** एक ही प्रकार की कोशिकाओं से बने होते हैं, जबकि **जटिल स्थायी ऊतक (जाइलम व फ्लोएम)** एक से अधिक भिन्न प्रकार की कोशिकाओं से मिलकर बने होते हैं जो एक साझा परिवहन कार्य पूरा करती हैं!' } },
    { num: 12, q: { en: 'Coconut husk makes sturdy mats. Which tissue provides rigidity? Why can\'t living Parenchyma do this?', hi: 'नारियल के रेशे चटाई बनाने के काम आते हैं — यह दृढ़ता किस ऊतक से आती है? सजीव मृदूतक यह काम क्यों नहीं कर सकता?' }, a: { en: '**Sclerenchyma fibres** coated tightly in **Lignin** (dead, dense, non-rotting strength). Living **Parenchyma** has thin cellulose walls, high water/cytoplasm content & loose spaces -> too soft & decays rapidly!', hi: '**दृढ़ोतक (Sclerenchyma)** में **लिग्निन** के जमाव से मोटी व कठोर भित्ति होती है। सजीव **मृदूतक** पतली भित्ति व जल-युक्त कोशिकाओं से बना होने के कारण नरम व भंगुर है, जिससे मजबूत चटाई नहीं बन सकती।' } },
    { num: 13, q: { en: 'Vibha says "Meristems are ONLY at root & shoot tips". Is she right? What counter-question teaches her?', hi: 'विभा कहती है — "विभज्योतक केवल जड़ व प्ररोह के शीर्ष पर होते हैं।" क्या यह कथन सत्य है?' }, a: { en: '**Statement is FALSE:** Besides **Apical Meristem** at tips, plants ALSO carry **Lateral Meristem (Cambium)** widening tree trunks and **Intercalary Meristem** at grass bases & stem nodes! Neha can ask: *"If dividing tissue were only at tips, how do tree trunks grow thicker every year and trimmed grass regrow cleanly?"*', hi: '**कथन असत्य है:** शीर्ष के अलावा तने की मोटाई बढ़ाने वाला **पाश्‍र्व विभज्योतक** तथा पर्वसंधि पर **अंतर्वेशी विभज्योतक** भी होता है! नेहा पूछ सकती है: *"यदि विभाजन केवल शीर्ष पर होता, तो पेड़ का तना मोटा कैसे होता और घास कटने पर दुबारा कैसे उगती?"*' } },
    { num: 14, q: { en: 'Equal-sized Plant vs Animal Cell: Which has a larger Vacuole and what assumptions apply?', hi: 'समान आमाप की पादप व जंतु कोशिका में किसकी रसधानी बड़ी होगी और क्यों?' }, a: { en: '(i) **Plant cell** contains a vastly larger central vacuole ($50\\text{--}90\\%$ volume) to hold cell sap & maintain **turgor rigidity** keeping plants erect without a skeleton. (ii) Assumes both compared cells are **mature, differentiated** cells (remember dividing root-tip meristem cells have tiny/no vacuoles!).', hi: '(i) **पादप कोशिका** में विशाल केंद्रीय रसधानी होती है ताकि जल-दबाव (स्फीति) से पादप को दृढ़ता मिल सके। (ii) पूर्वानुमान यह है कि दोनों तुलना की गई कोशिकाएँ **परिपक्व** हैं (न कि विभाजित होती विभज्योतक कोशिकाएँ)।' } },
    { num: 15, q: { en: 'Critique: "Every plant tissue performs ONLY one specific task." Cite real counter-examples!', hi: 'कथन जांचें: "प्रत्येक पादप ऊतक केवल एक विशिष्ट कार्य करता है।" — उदाहरणों सहित विवेचना करें।' }, a: { en: '**Statement is only partly true; many plant tissues are multi-functional:** Green **Parenchyma (Chlorenchyma)** simultaneously stores food AND photosynthesizes (while **Aerenchyma** supports floating!); **Epidermis** blocks germs AND reduces water loss via Cuticle AND exchanges gases via Stomata; **Xylem** transports water/minerals AND provides stiff mechanical support!', hi: '**कई पादप ऊतक एक से अधिक कार्य करते हैं:** **मृदूतक** भंडारण के साथ प्रकाश-संश्लेषण व प्लवन करता है; **जाइलम** जल संवहन के साथ पादप को यांत्रिक दृढ़ता देता है; **बाह्यत्वचा** सुरक्षा, जल बचाव व रंध्रों से गैस विनिमय सभी करती है!' } },
  ],

  flashcards: [
    { front: { en: 'B.G.L. Swamy Award-Winning Book?', hi: 'बी.जी.एल. स्वामी की साहित्य अकादमी पुस्तक?' }, back: { en: 'Hasuru Honnu (1978 Central Sahitya Akademi)', hi: 'हसुरु होन्नु (1978 केंद्र साहित्य अकादमी पुरस्कार)' } },
    { front: { en: 'Why do Meristems have NO Vacuoles?', hi: 'विभज्योतक में रसधानी क्यों नहीं होती?' }, back: { en: 'Rapid continuous mitosis needs dense cytoplasm, not storage sap', hi: 'निरंतर सक्रिय विभाजन हेतु सघन कोशिकाद्रव्य की आवश्यकता' } },
    { front: { en: 'Chemical in Collenchyma vs Sclerenchyma vs Cork?', hi: 'श्लेषोतक, दृढ़ोतक व काग में जमा रसायन?' }, back: { en: 'Collenchyma = Pectin | Sclerenchyma = Lignin | Cork = Suberin', hi: 'श्लेषोतक = पेक्टिन | दृढ़ोतक = लिग्निन | काग = सुबेरिन' } },
    { front: { en: 'Only Living in Xylem vs Only Dead in Phloem?', hi: 'जाइलम में 1 जीवित vs फ्लोएम में 1 मृत घटक?' }, back: { en: 'Xylem = Parenchyma (Live) | Phloem = Phloem Fibres (Dead)', hi: 'जाइलम मृदूतक (जीवित) | फ्लोएम तंतु/रेशे (मृत)' } },
    { front: { en: 'Kidney Tubules vs Small Intestine vs Skin Epithelium?', hi: 'वृक्क नलिका, छोटी आँत व त्वचा उपकला?' }, back: { en: 'Kidney = Cuboidal | Intestine = Columnar | Skin = Stratified Squamous', hi: 'वृक्क = घनाकार | आँत = स्तंभाकार | त्वचा = स्तरित शल्की' } },
    { front: { en: 'Tendon vs Ligament?', hi: 'कंडरा (Tendon) बनाम स्नायु (Ligament)?' }, back: { en: 'Tendon = Muscle ↔ Bone | Ligament = Bone ↔ Bone', hi: 'कंडरा = पेशी ↔ अस्थि | स्नायु = अस्थि ↔ अस्थि' } },
    { front: { en: 'Cartilage Cells vs Bone Cells?', hi: 'उपास्थि बनाम अस्थि कोशिका नाम?' }, back: { en: 'Cartilage = Chondrocytes | Bone = Osteocytes (Ca + P)', hi: 'उपास्थि = Chondrocytes | अस्थि = Osteocytes' } },
    { front: { en: 'Adult Body Weight %: Bone vs Male/Female Muscle?', hi: 'शरीर भार में अस्थि व पेशी प्रतिशत?' }, back: { en: 'Bone = 12–15% | Muscle = 40–50% Men, 30–40% Women', hi: 'अस्थि = 12–15% | पेशी = 40–50% पुरुष, 30–40% महिला' } },
    { front: { en: 'Gap between Two Neurons?', hi: 'दो न्यूरॉन के मध्य संपर्क अंतराल?' }, back: { en: 'Synapse / Synaptic Cleft (Dendrite -> Body -> Axon -> Synapse)', hi: 'सिनेप्स / अंतर्ग्रथित विदर (Synaptic Cleft)' } },
    { front: { en: 'Who grew Carrot plant from 1 Phloem cell (1958)?', hi: '1958 में गाजर फ्लोएम कोशिका से पूरा पौधा किसने बनाया?' }, back: { en: 'F.C. Steward (+20% fresh mass in aerated liquid + light + nutrients)', hi: 'एफ.सी. स्टीवर्ड (निर्विभेदन व पूर्णशक्तता प्रमाण)' } },
  ],

  pyqBank: [
    {
      id: 1,
      examTag: 'RRB Group D 2025 Shift 46',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: {
        en: 'Which of the following is correct about growth pattern in plants and animal cells?',
        hi: 'पादप और जंतु कोशिकाओं में वृद्धि पैटर्न के बारे में निम्नलिखित में से कौन-सा कथन सही है?',
      },
      options: {
        en: ['Animals grow only at tips continuously', 'Both plants and animals grow continuously at tips', 'Plants have a specific growth region containing dividing tissues.', 'Plants have uniform whole-body growth without localized meristems'],
        hi: ['जंतुओं में वृद्धि जीवनभर केवल सिरों पर होती है', 'दोनों में वृद्धि समान सिरों पर होती है', 'पादपों में विभाजनकारी ऊतकों युक्त विशिष्ट वृद्धि क्षेत्र होते हैं', 'पादपों में पूरे शरीर में बिना विभज्योतक के वृद्धि होती है'],
      },
      correctIndex: 2,
      solution: { en: 'Plants restrict cell division primarily to localized Meristematic regions, whereas animals exhibit uniform body growth.', hi: 'पादपों में वृद्धि विशिष्ट क्षेत्रों (विभज्योतक ऊतकों) तक सीमित होती है।' },
    },
    {
      id: 2,
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: {
        en: 'If a student wants to observe cells actively dividing to increase the length of a plant stem or root, which tissue should they examine?',
        hi: 'यदि कोई विद्यार्थी पौधे के तने या जड़ की लंबाई बढ़ाने के लिए सक्रिय रूप से विभाजित हो रही कोशिकाओं को देखना चाहता है, तो उसे किस ऊतक की जांच करनी चाहिए?',
      },
      options: { en: ['Intercalary meristem', 'Permanent tissue', 'Apical meristem', 'Lateral meristem'], hi: ['अंतर्वेशी विभज्योतक', 'स्थायी ऊतक', 'शीर्षस्थ विभज्योतक (Apical Meristem)', 'पार्श्विक विभज्योतक'] },
      correctIndex: 2,
      solution: { en: 'Apical meristems reside at growing tips of roots & stems to increase linear length.', hi: 'शीर्षस्थ विभज्योतक जड़ और तने के सिरों पर उपस्थित होकर लंबाई बढ़ाता है।' },
    },
    {
      id: 3,
      examTag: 'RRB Group D 2025 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'To increase the width or girth of a tree trunk, cells divide around the stem in a ring. Which tissue performs this?', hi: 'वृक्ष के तने की चौड़ाई या परिधि (girth) बढ़ाने के लिए कोशिकाएँ तने के चारों ओर वलयाकार विभाजन करती हैं — यह कौन-सा ऊतक है?' },
      options: { en: ['Intercalary meristem', 'Apical meristem', 'Lateral meristem', 'Sclerenchyma'], hi: ['अंतर्वेशी विभज्योतक', 'शीर्षस्थ विभज्योतक', 'पाश्‍र्व विभज्योतक (Lateral Meristem / Cambium)', 'दृढ़ोतक'] },
      correctIndex: 2,
      solution: { en: 'Lateral meristem (Cambium ring) increases radial stem/root diameter & produces annual rings.', hi: 'पाश्‍र्व विभज्योतक तने और जड़ की परिधि/मोटाई बढ़ाता है।' },
    },
    {
      id: 4,
      examTag: 'RRB Group D 2025 Shift 26',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Which characteristics are true for the cells of meristematic tissue?', hi: 'विभज्योतक ऊतक की कोशिकाओं के संबंध में निम्नलिखित में से कौन-से लक्षण सत्य हैं?' },
      options: {
        en: ['Dead with lignin walls & big vacuoles', 'Thick impermeable suberin walls', 'Loose cells with large air spaces', 'Very active, prominent nuclei, dense cytoplasm and thin cellulose walls (No vacuoles)'],
        hi: ['लिग्निन भित्ति व बड़ी रसधानी युक्त मृत कोशिकाएँ', 'सुबेरिन युक्त मोटी भित्ति', 'बड़े वायु अवकाश वाली शिथिल कोशिकाएँ', 'अत्यधिक क्रियाशील, स्पष्ट केंद्रक, सघन कोशिकाद्रव्य व पतली सेल्युलोस भित्ति'],
      },
      correctIndex: 3,
      solution: { en: 'Meristematic cells lack vacuoles and feature thin walls, dense cytoplasm & prominent nuclei to divide rapidly.', hi: 'विभज्योतक कोशिकाएँ सक्रिय विभाजन हेतु पतली भित्ति, सघन द्रव्य व बड़े केंद्रक रखती हैं (रसधानी रहित)।' },
    },
    {
      id: 5,
      examTag: 'RRB Group D 2025 Shift 47',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'A horticulturist wants to breed aquatic plants that float better. Which tissue modification should be enhanced?', hi: 'एक उद्यानविद् बेहतर तैरने वाले जलीय पादप विकसित करना चाहता है — ऊतक के किस रूपांतरण पर ध्यान देना चाहिए?' },
      options: { en: ['Reducing spaces in parenchyma', 'Irregular thickening in collenchyma', 'Aerenchyma formation', 'Chlorophyll increase in collenchyma'], hi: ['मृदूतक अवकाश कम करना', 'श्लेषोतक में असमान स्थूलन', 'वायूतक (Aerenchyma) निर्माण', 'श्लेषोतक में पर्णहरित वृद्धि'] },
      correctIndex: 2,
      solution: { en: 'Aerenchyma is modified Parenchyma containing large air cavities providing buoyancy to aquatic plants.', hi: 'वायूतक (Aerenchyma) बड़ी वायु गुहिकाएँ बनाकर जलीय पौधों को प्लवन में सहायता करता है।' },
    },
    {
      id: 6,
      examTag: 'RRB Group D 2025 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'A plant stem bends easily without breaking; examination reveals living tissue beneath epidermis. Which tissue gives this flexibility?', hi: 'पौधे का तना बिना टूटे आसानी से मुड़ जाता है; बाह्यत्वचा के ठीक नीचे किस सरल स्थायी ऊतक से यह लचीलापन मिलता है?' },
      options: { en: ['Sclerenchyma', 'Parenchyma', 'Collenchyma', 'Epidermis'], hi: ['दृढ़ोतक', 'मृदूतक', 'श्लेषोतक / कोलेन्काइमा (Collenchyma)', 'बाह्यत्वचा'] },
      correctIndex: 2,
      solution: { en: 'Collenchyma has irregular Pectin thickenings at cell corners allowing stems & tendrils to bend safely.', hi: 'पेक्टिन स्थूलन के कारण श्लेषोतक (Collenchyma) तनों को बिना टूटे मुड़ने का लचीलापन देता है।' },
    },
    {
      id: 7,
      examTag: 'RRB Group D 2025 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Dead structures are often hard and rigid. Which simple permanent tissue is mainly made of dead cells providing mechanical strength?', hi: 'मृत संरचनाएँ प्रायः कठोर व दृढ़ होती हैं — कौन-सा सरल स्थायी ऊतक मुख्यतः मृत कोशिकाओं से बना होकर पादप को यांत्रिक शक्ति देता है?' },
      options: { en: ['Epidermis', 'Sclerenchyma', 'Parenchyma', 'Meristematic tissue'], hi: ['बाह्यत्वचा', 'दृढ़ोतक (Sclerenchyma)', 'मृदूतक', 'विभज्योतक'] },
      correctIndex: 1,
      solution: { en: 'Sclerenchyma walls are uniformly lignified, making cells dead & hollow-less for rigid mechanical strength.', hi: 'लिग्निन जमा होने से दृढ़ोतक की कोशिकाएँ मृत व अत्यंत कठोर होकर यांत्रिक शक्ति प्रदान करती हैं।' },
    },
    {
      id: 8,
      examTag: 'RRB Tech Gr-III 2024 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'When water enters into guard cells, guard cells ______ and the stomatal pore ______.', hi: 'जब पानी द्वारकोशिकाओं में प्रवेश करता है, तो द्वारकोशिकाएँ ______ और रंध्र ______।' },
      options: { en: ['swell; opens', 'shrink; closes', 'swell; shrinks', 'shrink; opens'], hi: ['फूल/उभर जाती हैं; खुल जाते हैं', 'सिकुड़ती हैं; बंद होते हैं', 'फूलती हैं; सिकुड़ते हैं', 'सिकुड़ती हैं; खुलते हैं'] },
      correctIndex: 0,
      solution: { en: 'Water entry inflates Guard cells making them turgid & curved apart, opening the stomatal pore.', hi: 'जल प्रवेश से द्वारकोशिकाएँ फूलकर मुड़ती हैं और रंध्र खुल जाते हैं।' },
    },
    {
      id: 9,
      examTag: 'RRB Group D 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'What is the main force pulling water upward through Xylem in tall trees?', hi: 'ऊँचे वृक्षों में वह मुख्य बल क्या है जो जाइलम के माध्यम से जल को ऊपर की ओर खींचता है?' },
      options: { en: ['Transpiration pull', 'Root pressure', 'Capillary action', 'Diffusion'], hi: ['वाष्पोत्सर्जन खिंचाव (Transpiration pull)', 'मूल दाब', 'केशिका क्रिया', 'विसरण'] },
      correctIndex: 0,
      solution: { en: 'Daytime stomatal evaporation sets up suction Transpiration Pull driving upward xylem sap.', hi: 'रंध्रों से वाष्पोत्सर्जन द्वारा उत्पन्न खिंचाव जाइलम जल को ऊँचे वृक्षों तक खींचता है।' },
    },
    {
      id: 10,
      examTag: 'RRB Tech Gr-III 2024 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Which of the following are cells of Phloem?', hi: 'निम्नलिखित में से कौन-सी फ्लोएम की कोशिकाएँ हैं?' },
      options: { en: ['Tracheids and vessels', 'Sieve tubes and companion cells', 'Tracheids and companion cells', 'Sieve cells and vessels'], hi: ['वाहिनिका व वाहिका', 'चालनी नलिका और सहचर कोशिकाएँ', 'वाहिनिका और सहचर', 'चालनी व वाहिका'] },
      correctIndex: 1,
      solution: { en: 'Phloem has Sieve tubes, Companion cells, Phloem parenchyma & Phloem fibres (Tracheids/Vessels belong to Xylem!).', hi: 'चालनी नलिकाएँ व सहचर कोशिकाएँ फ्लोएम के घटक हैं (वाहिनिका-वाहिका जाइलम में हैं)।' },
    },
    {
      id: 11,
      examTag: 'RRB Tech Gr-III 2024 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'In Phloem, which of the following cells are DEAD cells?', hi: 'फ्लोएम में निम्नलिखित में से कौन-सी कोशिकाएँ मृत होती हैं?' },
      options: { en: ['Sieve cells', 'Companion cells', 'Phloem fibres', 'Phloem parenchyma'], hi: ['चालनी कोशिकाएँ', 'सहचर कोशिकाएँ', 'फ्लोएम रेशे (Phloem fibres)', 'फ्लोएम मृदूतक'] },
      correctIndex: 2,
      solution: { en: 'Among Phloem’s 4 parts, ONLY Phloem Fibres are dead; Sieve tubes, Companion cells & Parenchyma stay living!', hi: 'फ्लोएम में केवल फ्लोएम तंतु (रेशे) मृत होते हैं, शेष तीनों जीवित होते हैं।' },
    },
    {
      id: 12,
      examTag: 'RRB ALP 2026 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'How do companion cells contribute to the function of sieve tubes?', hi: 'सहचर कोशिकाएँ, चालनी नलिकाओं के कार्य में किस प्रकार योगदान करती हैं?' },
      options: { en: ['They monitor loading and unloading of sugars', 'Provide rigid mechanical bark support', 'Regulate latex storage inside sieve pores', 'Store resins only'], hi: ['वे शर्करा के भारण और अभारण की निगरानी करती हैं', 'कठोर छाल बनाती हैं', 'लेटेक्स संचय करती हैं', 'राल भंडारित करती हैं'] },
      correctIndex: 0,
      solution: { en: 'Specialized Companion cells supply ATP & control active loading/unloading of sucrose into Sieve Tubes.', hi: 'सहचर कोशिकाएँ चालनी नलिकाओं में शर्करा के भारण-अभारण व कोशिकीय कार्यों का नियमन करती हैं।' },
    },
    {
      id: 13,
      examTag: 'RRB Tech Gr-III 2024 Shift 8 [Statement PYQ]',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Identify the INCORRECT statement about complex permanent tissue.', hi: 'जटिल स्थायी ऊतक के संबंध में गलत कथन पहचानिए।' },
      options: {
        en: ['Cells in complex tissue work together for one common function.', 'Complex tissue includes parenchyma and collenchyma.', 'There is more than one type of cell in complex tissue.', 'Vascular bundles are characteristic of complex tissues.'],
        hi: ['कोशिकाएँ मिलकर एक साझा कार्य करती हैं', 'जटिल ऊतक में पैरेंकाइमा और कॉलेंकाइमा शामिल हैं', 'एक से अधिक प्रकार की कोशिकाएँ होती हैं', 'संवहन बंडल इसकी विशेषता हैं'],
      },
      correctIndex: 1,
      solution: { en: 'Parenchyma & Collenchyma are SIMPLE permanent tissues (1 cell type); Complex tissues are Xylem & Phloem.', hi: 'मृदूतक (Parenchyma) और श्लेषोतक (Collenchyma) सरल स्थायी ऊतक हैं, जटिल नहीं!' },
    },
    {
      id: 14,
      examTag: 'RRB Group D 2025 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Where is the Intercalary Meristem commonly located in plants?', hi: 'पादपों में अंतर्वेशी विभज्योतक सामान्यतः कहाँ स्थित होता है?' },
      options: { en: ['At root & shoot tips', 'At the base of leaves or internodes', 'On outer edges only', 'Inside dead cork bark'], hi: ['मूलाग्र व प्ररोहाग्र पर', 'पत्तियों या पर्व (पर्वसंधि) के आधार पर', 'बाहरी किनारों पर', 'मृत काग छाल में'] },
      correctIndex: 1,
      solution: { en: 'Intercalary meristem stays near nodes / leaf bases, driving grass & hedge regrowth.', hi: 'अंतर्वेशी विभज्योतक पत्तियों के आधार या पर्वसंधि के समीप स्थित होता है।' },
    },
    {
      id: 15,
      examTag: 'RRB Group D 2025 Shift 43 [Statement PYQ]',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: {
        en: 'Statement A: Cells of epithelial tissue are tightly packed.\nStatement B: Fibrous basement membrane separates epithelium from underlying tissue.\nChoose correct option:',
        hi: 'कथन A: उपकला ऊतक की कोशिकाएँ दृढ़ता से पैक होती हैं।\nकथन B: रेशेदार आधार झिल्ली उपकला को अंतर्निहित ऊतक से अलग करती है।\nसही विकल्प चुनें:',
      },
      options: {
        en: ['A is incorrect, B is correct', 'Both A and B are incorrect', 'A is correct, B is incorrect', 'Both Statement A and Statement B are correct'],
        hi: ['कथन A गलत, B सही', 'A और B दोनों गलत', 'कथन A सही, B गलत', 'कथन A और कथन B दोनों सही हैं'],
      },
      correctIndex: 3,
      solution: { en: 'Both statements are 100% accurate—tight epithelial junctions block pathogens and rest upon an extracellular fibrous Basement Membrane.', hi: 'कथन A और B दोनों पूर्णतः सत्य हैं।' },
    },
    {
      id: 16,
      examTag: 'RRB ALP 2025 Shift 2 [Match PYQ]',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: {
        en: 'Match Epithelial Tissue with Location:\nI. Cuboidal Epithelium | II. Columnar Epithelium | III. Squamous Epithelium\nA. Lining of intestine | B. Skin | C. Lining of kidney tubules',
        hi: 'सुमेलित कीजिए:\nI. घनाकार उपकला | II. स्तंभाकार उपकला | III. शल्की उपकला\nA. आँत का आस्तर | B. त्वचा | C. वृक्क नलिकाओं का आस्तर',
      },
      options: { en: ['I-B; II-C; III-A', 'I-C; II-A; III-B', 'I-A; II-B; III-C', 'I-A; II-C; III-B'], hi: ['I-B; II-C; III-A', 'I-C; II-A; III-B', 'I-A; II-B; III-C', 'I-A; II-C; III-B'] },
      correctIndex: 1,
      solution: { en: 'Kidney tubules = Cuboidal (I-C); Small Intestine = Columnar (II-A); Outer Skin = Stratified Squamous (III-B).', hi: 'I-C (घनाकार = वृक्क), II-A (स्तंभाकार = आँत), III-B (शल्की = त्वचा)।' },
    },
    {
      id: 17,
      examTag: 'RRB Group D 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Which of the following is NOT a function of epithelial tissues?', hi: 'निम्नलिखित में से कौन-सा उपकला ऊतकों का कार्य नहीं है?' },
      options: { en: ['Protection from microbes', 'Absorption of nutrients', 'Formation of red blood cells', 'Secretion of enzymes/mucus'], hi: ['रोगाणुओं से सुरक्षा', 'पोषक तत्वों का अवशोषण', 'लाल रक्त कोशिकाओं (RBC) का निर्माण', 'एंजाइम व श्लेष्म स्रवण'] },
      correctIndex: 2,
      solution: { en: 'RBCs are produced by Red Bone Marrow stem cells (connective tissue), NEVER by epithelial sheets!', hi: 'RBC का निर्माण अस्थि मज्जा (संयोजी ऊतक) में होता है, उपकला ऊतक द्वारा नहीं!' },
    },
    {
      id: 18,
      examTag: 'RRB Group D 2025 Shift 32',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Blood is a connective tissue linking body systems. What is the liquid matrix suspending blood cells?', hi: 'रक्त एक संयोजी ऊतक है — वह तरल आधात्री (Matrix) क्या है जिसमें रक्त कोशिकाएँ निलंबित रहती हैं?' },
      options: { en: ['Platelets', 'Plasma', 'Cytoplasm', 'Haemoglobin'], hi: ['बिंबाणु', 'प्लाज्मा (Plasma)', 'कोशिकाद्रव्य', 'हीमोग्लोबिन'] },
      correctIndex: 1,
      solution: { en: 'Straw-coloured fluid Plasma forms 55% of blood volume suspending RBCs, WBCs & Platelets.', hi: 'रक्त का $55\\%$ तरल मैट्रिक्स प्लाज्मा कहलाता है।' },
    },
    {
      id: 19,
      examTag: 'RRB Group D 2025 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'The cells of cartilage tissue are specifically termed ________.', hi: 'उपास्थि (Cartilage) की कोशिकाओं को विशेष रूप से क्या कहा जाता है?' },
      options: { en: ['Osteocytes', 'Chondrocytes', 'Fibroblasts', 'Adipocytes'], hi: ['अस्थिअणु (Osteocytes)', 'उपास्थिअणु (Chondrocytes)', 'रेशकोरक', 'वसाकोशिका'] },
      correctIndex: 1,
      solution: { en: 'Cartilage cells = Chondrocytes; Bone cells = Osteocytes; Fat-storing cells = Adipocytes.', hi: 'उपास्थि कोशिकाएँ Chondrocytes व अस्थि कोशिकाएँ Osteocytes कहलाती हैं।' },
    },
    {
      id: 20,
      examTag: 'RRB Group D 2025 Shift 29 & Tech Gr-III 2024 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Two high-frequency facts: What connects muscle to bone AND what stops the throat air-passage from collapsing?', hi: 'पेशियों को अस्थियों से कौन जोड़ता है तथा कंठ में वायु-मार्ग को पिचकने से कौन रोकता है?' },
      options: { en: ['Ligament & Smooth muscle', 'Bone & Epithelium', 'Tendon & Rings of Cartilage', 'Areolar & Plasma'], hi: ['स्नायु व चिकनी पेशी', 'अस्थि व उपकला', 'कंडरा (Tendon) व उपास्थि के वलय (Rings of Cartilage)', 'प्लाज्मा व वसा'] },
      correctIndex: 2,
      solution: { en: 'Tendon attaches Muscle to Bone; C-shaped Rings of Cartilage keep human trachea open even when air pressure drops.', hi: 'कंडरा पेशी-अस्थि को जोड़ती है तथा उपास्थि वलय श्वासनली को पिचकने से बचाते हैं।' },
    },
    {
      id: 21,
      examTag: 'RRB Tech Gr-III 2024 Shift 23 [Statement PYQ]',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Identify the INCORRECT statement about muscle tissue.', hi: 'पेशी ऊतक के बारे में गलत कथन पहचानिए।' },
      options: {
        en: ['Muscle tissues are made up of cuboidal cells.', 'Skeletal muscles have multiple nuclei & striations.', 'Smooth muscles are unstriated & involuntary.', 'Cardiac muscles are branched & never fatigue.'],
        hi: ['पेशी ऊतक घनाकार कोशिकाओं से बने होते हैं', 'कंकाल पेशियों में अनेक केंद्रक व धारियाँ होती हैं', 'चिकनी पेशियाँ अरेखित व अनैच्छिक होती हैं', 'हृद पेशियाँ शाखित व अथक होती हैं'],
      },
      correctIndex: 0,
      solution: { en: 'Muscular tissue consists of elongated Muscle Fibres (never cuboidal epithelial cells!).', hi: 'पेशी ऊतक लंबी पेशी तंतु कोशिकाओं से बने होते हैं, घनाकार कोशिकाओं से नहीं!' },
    },
    {
      id: 22,
      examTag: 'RRB Group D 2025 Shift 46 [Statement PYQ]',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: {
        en: 'Which statements about nervous tissue are correct?\n(i) Nervous tissues are made of neurons.\n(ii) Neurons have one axon and many dendrites.\n(iii) Nerve impulses pass along nerve fibres.',
        hi: 'तंत्रिका ऊतक के संबंध में कौन-से कथन सही हैं?\n(i) तंत्रिका ऊतक न्यूरॉन से बने होते हैं।\n(ii) न्यूरॉन में एक तंत्रिकाक्ष व कई द्रुमिका होती हैं।\n(iii) तंत्रिका आवेग तंत्रिका तंतुओं से गुजरते हैं।',
      },
      options: { en: ['(i) and (iii) only', '(ii) and (iii) only', '(i), (ii) & (iii)', '(i) and (ii) only'], hi: ['केवल (i) और (iii)', 'केवल (ii) और (iii)', '(i), (ii) और (iii) सभी', 'केवल (i) और (ii)'] },
      correctIndex: 2,
      solution: { en: 'All 3 statements (i), (ii) & (iii) accurately describe Neurons & Nervous Tissue.', hi: 'कथन (i), (ii) और (iii) तीनों पूर्णतः सत्य हैं।' },
    },
    {
      id: 23,
      examTag: 'RRB Group D 2025 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'Identify the FALSE statement related to nervous tissue.', hi: 'तंत्रिका ऊतक से संबंधित गलत कथन की पहचान कीजिए।' },
      options: {
        en: ['Nerve impulses travel along nerve fibres.', 'Nervous tissue includes brain and spinal cord.', 'An axon is a single long neural process.', 'The cells of nervous tissue are referred to as nephrons.'],
        hi: ['तंत्रिकावेग तंत्रिका तंतुओं से संचरित होते हैं', 'तंत्रिका ऊतक में मेरुरज्जु शामिल है', 'तंत्रिकाक्ष एकल लंबा भाग है', 'तंत्रिका ऊतक की कोशिकाओं को नेफ्रॉन/वृक्काणु कहते हैं'],
      },
      correctIndex: 3,
      solution: { en: 'Nervous tissue cells are Neurons (Nephrons are Kidney filtration tubules!).', hi: 'तंत्रिका कोशिकाएँ न्यूरॉन हैं, नेफ्रॉन (वृक्काणु) गुर्दे की इकाई है।' },
    },
    {
      id: 24,
      examTag: 'RRB NTPC UG 2025 Shift 40',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Bio Ch 3: Tissues',
      question: { en: 'What is the correct name for the microscopic gap between two neurons where impulses relay?', hi: 'दो न्यूरॉन के मध्य का सूक्ष्म अंतराल जहाँ आवेग संप्रेषण होता है, क्या कहलाता है?' },
      options: { en: ['Synaptic cleft', 'Axonal gap', 'Dendritic cleft', 'Node gap'], hi: ['अंतर्ग्रथित विदर (Synaptic cleft / Synapse)', 'तंत्रिकाक्ष अंतराल', 'द्रुमिका विदर', 'पर्व अंतराल'] },
      correctIndex: 0,
      solution: { en: 'Impulse crosses from Axon Terminal of one neuron across the Synaptic Cleft (Synapse) to the next Dendrite.', hi: 'आवेग एक एक्सॉन टर्मिनल से **सिनेप्स / अंतर्ग्रथित विदर (Synaptic cleft)** के पार अगले न्यूरॉन में जाता है।' },
    },
  ],
};
