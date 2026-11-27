/**
 * Class 9 NCERT Science (2026–27 Edition — ihsc112.pdf, Pages 228–251) + Railway Biology Deep-Dive
 * Chapter 12: Diversity in the Living World & Classification (जीवजगत का स्वरूप — विविधता एवं वर्गीकरण) — Gold Standard v3
 * Restored in 2026–27 Syllabus!
 * Complete Coverage: 12.1–12.5 Endemic Indian Species (Nilgiri Tahr, Lion-tailed Macaque, Nepenthes khasiana, Neelakurinji 12-yr bloom),
 * 4 Indian Biodiversity Hotspots (Western Ghats, Himalaya, Indo-Burma, Sundaland), Sangam Tinai & Sacred Groves, Pakke Hornbill Nest Program (Act 12.2),
 * Historical Taxonomy: Aristotle (Habitat) -> Linnaeus 1758 (2-Kingdom) -> Haeckel 1866 (3-Kingdom Protista) -> Copeland 1938 (4-Kingdom Monera) -> R.H. Whittaker 1969 (5-Kingdom) ->
 * 12.6.1 Monera (Prokaryotes, Ram Baksh Singh 1957 Sitapur Biogas, Cyanobacteria Stromatolites) ->
 * 12.6.2 Protista (Act 12.5 Hay Infusion, Amoeba/Paramecium/Euglena/Chlamydomonas) ->
 * 12.6.3 Fungi (Chitin cell wall, Saprophytic Mycelium, Yeast exception, Mushroom 30–45d) & Lichens (SO₂ bioindicator) ->
 * 12.6.4 Plantae (Thallophyta -> Bryophyta Amphibians -> Pteridophyta 1st Vascular/Xylem-Phloem -> Gymnosperms Cones -> Angiosperms Monocot/Dicot + Hortus Malabaricus Itti Achuthan) ->
 * 12.6.5 Animalia 8 Non-Chordata Phyla (Porifera 24,000 L/day/kg -> Cnidaria -> Platyhelminthes -> Nematoda 2-opening gut -> Annelida -> Arthropoda largest/chitin -> Mollusca -> Echinodermata CaCO₃) +
 * Protochordata (Amphioxus) + 5 Vertebrata (Pisces 2ch -> Amphibia 3ch -> Reptilia 3ch/Croc 4 -> Aves 4ch -> Mammalia 4ch) + Mangrove Cyclone/KFD boxes ->
 * 12.7–12.10 7-Rank Hierarchy, Binomial Rules (Panthera tigris / Pisum sativum), Carl Woese 1977 3-Domain DNA Split, Fossils (Prof. Birbal Sahni BSIP), Purple Frog (2003), Loktak Phumdis (Sangai 1953).
 * All Activities (12.1–12.7), 10 Think Qs, 15 Solved Exercises (Ex 15 P..T verified vs ihsc1an), 5 Tables, 10 Flashcards, 24 Pure RRB PYQs.
 */

export const C9_CH12_DIVERSITY_DATA = {
  id: 'c9-bio-ch12',
  classId: 'class9',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology', hi: 'जीव विज्ञान (Biology)' },
  chapterNumber: 12,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 12: Diversity in the Living World & Classification (Restored CBT Core)',
  blueprintSvgKey: 'c9-ch12-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Indian Hotspots (4), Endemics (Nilgiri Tahr, Macaque), Kingdom Evolution (Aristotle→Whittaker 1969) & Woese 1977', hi: '4 हॉटस्पॉट, स्थानिक प्रजातियाँ (नीलगिरि तहर, सिंह-पुच्छ मकाक), वर्गीकरण इतिहास व कार्ल वूज 1977' }, pct: 22 },
    { label: { en: 'Monera (Prokaryotes/Biogas), Protista (Act 12.5 Cilia/Pseudopodia) & Fungi (Chitin Wall, Lichens, Mushroom)', hi: 'मोनेरा, प्रोटिस्टा (क्र. 12.5 सिलिया/पादाभ) एवं कवक (काइटिन भित्ति, मृतजीवी, लाइकेन)' }, pct: 26 },
    { label: { en: '5 Plantae Divisions: Thallophyta → Bryophyta (Amphibians) → Pteridophyta (Xylem) → Gymnosperms → Angiosperms', hi: 'पादप जगत के 5 प्रभाग: थैलोफाइटा → ब्रायोफाइटा → टेरिडोफाइटा → अनावृतबीजी → आवृतबीजी' }, pct: 28 },
    { label: { en: 'Animalia (Porifera to Arthropoda/Echinodermata + Heart Chambers), Binomial Rules & Birbal Sahni / Phumdis', hi: 'जंतु संघ (पॉरीफेरा से आर्थ्रोपोडा व 2/3/4 कक्षीय हृदय), द्विपद नामकरण, बीरबल साहनी व फुमडी (संगाई)' }, pct: 24 },
  ],
  title: {
    en: 'Chapter 12: Diversity in the Living World & Classification',
    hi: 'अध्याय 12: जीवजगत का स्वरूप — विविधता एवं वर्गीकरण',
  },
  subtitle: {
    en: 'Restored 2026–27 NCERT Gold Deep-Dive • 5-Kingdom Taxonomy, Plant & Animal Phyla, Binomial Rules, Fossils & Hotspots (`ihsc112`)',
    hi: '2026–27 पाठ्यक्रम में पुनः शामिल अध्याय • 5 जगत वर्गीकरण, पादप-जंतु संघ, द्विपद नियम, भारत के 4 हॉटस्पॉट व जीवाश्म (`ihsc112`)',
  },
  metrics: {
    pages: 24,
    activities: 7,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class9-bio-ch12/hero-diversity.webp',
    caption: {
      en: 'Five-Kingdom Biodiversity Synthesis (`NCERT Ch 12`): Prokaryotic Monera & Hay-Infusion Protists below, Chitin-walled Fungi & Lichens, 5 Evolutionary Plant Divisions (`Moss -> Fern -> Cycas Cone -> Blossom`), and Animalia Chordate Spectrum.',
      hi: 'पाँच जगत जैव विविधता विश्वकोश (`NCERT अध्याय 12`): मोनेरा व प्रोटिस्टा से लेकर काइटिन भित्ति कवक, पादपों के पाँच प्रभाग एवं अकशेरुकी-कशेरुकी जंतु जगत।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Biodiversity & Classification Chronology (`12.1–12.5`)**: Habitat variety drives evolution & endemism — India holds **4 Global Hotspots (`Western Ghats, Himalaya, Indo-Burma, Sundaland`)** with endemics like **Nilgiri Tahr, Lion-tailed Macaque, Nepenthes khasiana, Neelakurinji (`12-yr cycle`)**, protected via **Sangam Tinai landscapes, Sacred Groves & Pakke 4-Hornbill conservation**. **Taxonomy Timeline**: **Aristotle** (`habitat — failed whales/bats`) -> **Linnaeus `1758`** (`2-Kingdom: Plantae vs Animalia — Amoeba/Euglena mismatch!`) -> **Haeckel `1866`** (`3-Kingdom + Protista` — placed bacteria in Protista!) -> **Copeland `1938`** (`4-Kingdom + Monera`) -> **R.H. Whittaker `1969`** (**==5-Kingdom==**: Cell Type, Complexity, Nutrition, Reproduction, Phylogeny) -> **Carl Woese `1977`** (**3 Domains via DNA/rRNA**: `Bacteria, Archaea, Eukarya`)!',
      hi: '**जैव विविधता व वर्गीकरण का इतिहास (`12.1–12.5`)**: भारत में विश्व के **4 जैव विविधता हॉटस्पॉट (`पश्चिमी घाट, हिमालय, इंडो-बर्मा, सुंडालैंड`)** और स्थानिक जीव (**नीलगिरि तहर, सिंह-पुच्छ मकाक, घटपर्णी नेपेंथीस, नीलकुरिंजी 12-वर्षीय पुष्प**) हैं; संरक्षण में **संगम तिनई, पवित्र उपवन एवं पक्के हॉर्नबिल कार्यक्रम** प्रमुख हैं। **ऐतिहासिक क्रम**: **अरस्तू** (`आवास`) → **लिनियस `1758`** (`2 जगत — अमीबा/यूग्लीना भ्रम`) → **अर्न्स्ट हेकेल `1866`** (`3 जगत: प्रोटिस्टा जुड़ा, जीवाणु भी इसी में!`) → **कोपलैंड `1938`** (`4 जगत: मोनेरा जुड़ा`) → **आर.एच. व्हिटेकर `1969`** (**==5 जगत==**: कोशिका संरचना, संगठन, पोषण, जनन व वंशावली) → **कार्ल वूज `1977`** (**3 डोमेन**: `बैक्टीरिया, आर्किया, यूकैरिया`)!',
    },
    {
      en: '**Monera, Protista & Fungi (`12.6.1–12.6.3`)**: **Monera** = unicellular **prokaryotes** (`no membrane-bound nucleus`, `Bacteria + photosynthetic Cyanobacteria`; **Ram Baksh Singh `1957` Sitapur biogas**; **stromatolites** Rajasthan/MP). **Protista (`Act 12.5` hay infusion)** = unicellular **eukaryotes** (`membrane nucleus!`): *Amoeba* (`pseudopodia`), *Paramecium* (`cilia`), *Euglena* (`flagellum + photosynthetic+ingestive`), *Chlamydomonas* (`rigid wall`). **Fungi** = non-chlorophyllous, spore-forming saprotrophs with **==Chitin cell walls (`NOT cellulose`)==** absorbing via mycelium (*Agaricus mushroom `30–45d` crop*, *Rhizopus*, *Penicillium*; **Yeast** = unicellular exception); partner in **Lichens (`clean air SO₂ indicator`)**!',
      hi: '**मोनेरा, प्रोटिस्टा व कवक (`12.6.1–12.6.3`)**: **मोनेरा** = एककोशिक **प्राक्केंद्रकी (`केंद्रक झिल्ली नहीं`)** जीवाणु व प्रकाश संश्लेषी **सायनोजीवाणु** (**राम बख्श सिंह `1957` सीतापुर बायोगैस**; राजस्थान/MP **स्ट्रोमैटोलाइट** जीवाश्म)। **प्रोटिस्टा (`क्र. 12.5`)** = एककोशिक **सुकेंद्रकी**: *अमीबा* (`कूटपाद`), *पैरामीशियम* (`सिलिया`), *यूग्लीना* (`कशाभ + दोनों पोषण`), *क्लैमाइडोमोनास*। **कवक (`Fungi`)** = क्लोरोफिल-रहित परपोषी जिनकी **==कोशिका भित्ति काइटिन (`Chitin`) की होती है==** (*राइजोपस, पेनिसिलियम, मशरूम `30–45 दिन`*, अपवाद एककोशिक **यीस्ट**); शैवाल संग सहजीवी **लाइकेन** (`वायु प्रदूषण सूचक`) बनाते हैं!',
    },
    {
      en: '**Kingdom Plantae (`5 Divisions, 12.6.4`)**: **1. Thallophyta (`Spirogyra, Ulothrix, Chara`)** = undifferentiated aquatic thallus. **2. Bryophyta (`Marchantia, Moss`)** = **==Amphibians of Plant Kingdom==** (`stem/leaf-like + rhizoids, NO vascular xylem, need water to fertilise`). **3. Pteridophyta (`Ferns/Pteridium, Marsilea`, `Act 12.6–12.7`)** = **==FIRST vascular land plants (`true Xylem + Phloem`)==**, spore sori under leaves, STILL NO seeds & water-bound! **4. Gymnosperms (`Pine, Cycas`)** = **naked seeds in cones** + drought-hardy needle leaves (`no fruits`). **5. Angiosperms (`Pea, Gulmohar`)** = flowers + **seeds inside fruits** (`Monocots vs Dicots`; **`Hortus Malabaricus` by Itti Achuthan documented 720 medicinal plants**)!',
      hi: '**पादप जगत के 5 प्रभाग (`12.6.4`)**: **1. थैलोफाइटा** = अविभेदित जलीय शैवाल (*स्पाइरोगाइरा, कारा*)। **2. ब्रायोफाइटा (`मॉस, मार्केंशिया`)** = **==पादप जगत के उभयचर==** (`मूलाभास, जाइलम-फ्लोएम अनुपस्थित, निषेचन हेतु जल जरूरी`)। **3. टेरिडोफाइटा (`फर्न, मार्सीलिया`)** = **==प्रथम संवहनी भू-पादप (`जाइलम व फ्लोएम युक्त!`)==**, पत्ती नीचे बीजाणु सोराई (`क्र. 12.6`), बीज नहीं! **4. अनावृतबीजी (`चीड़, साइकस`)** = **शंकु में नग्न बीज (`फल नहीं`)**, सुई पत्तियाँ सूखारोधी। **5. आवृतबीजी (`मटर, गुलमोहर`)** = पुष्प व **फल में बंद बीज** (`एकबीजपत्री vs द्विबीजपत्री`; केरल की `720` औषधियों वाली ***हॉर्टस मलाबारिकस*** में वैद्य **इट्टी अचुतन** का योगदान)!',
    },
    {
      en: '**Animalia Phyla (`12.6.5`), Binomial Nomenclature (`12.7`) & Living Heritage (`12.9–12.10`)**: Invertebrates progress: **Porifera** (`pores, 24,000 L/day/kg`) -> **Cnidaria** (`tissue, Hydra`) -> **Platyhelminthes** (`bilateral flatworms, hooks`) -> **Nematoda** (`complete 2-opening gut`) -> **Annelida** (`true coelom segments`) -> **==Arthropoda (`Largest phylum! Chitin exoskeleton, jointed`)==** -> **Mollusca** (`soft foot, shell`) -> **Echinodermata** (`CaCO₃ spiny endoskeleton`) -> **Protochordata (`Amphioxus notochord`)** -> **Vertebrata** (**Pisces `2ch`**, **Amphibia `3ch`**, **Reptilia `3ch [Croc 4]`**, **Aves/Mammalia `4ch`**)! **7 Ranks**: `Kingdom -> Phylum/Division -> Class -> Order -> Family -> Genus -> Species`; **Binomial** = Capital *Genus* + lowercase *species* (*Panthera tigris*, *Pisum sativum*). Fossils = **Birbal Sahni (`BSIP Lucknow`)**; **Purple Frog (`2003`)**; **Loktak Phumdis / Keibul Lamjao (`Sangai deer`)**.',
      hi: '**जंतु संघ (`12.6.5`), द्विपद नामकरण व संरक्षण (`12.7–12.10`)**: **पॉरीफेरा** (`स्पंज, छिद्र व नाल तंत्र`) → **नाइडेरिया** (`ऊतक, हाइड्रा`) → **प्लेटीहेल्मिंथीज** (`चपटे कृमि`) → **निमेटोडा** (`दो मुख-गुदा द्वार पाचन पथ`) → **एनेलिडा** (`वास्तविक देहगुहा`) → **==आर्थ्रोपोडा (`सबसे बड़ा संघ! काइटिन बाह्यकंकाल, संधिपाद`)==** → **मोलस्का** (`कोमल देह व कवच`) → **इकाइनोडर्मेटा** (`CaCO₃ शूल अंतःकंकाल`) → **प्रोटोकॉर्डेटा (`एम्फिऑक्सस पृष्ठरज्जु`)** → **कशेरुकी (`मत्स्य 2, उभयचर 3, सरीसृप 3 [मगरमच्छ 4], पक्षी-स्तनधारी 4 कक्ष हृदय`)**! **7 स्तर**: `जगत→संघ→वर्ग→गण→कुल→वंश→जाति`; **द्विपद नियम**: *Panthera tigris*, *Pisum sativum*। जीवाश्म जनक: **बीरबल साहनी (`BSIP लखनऊ`)**; **बैंगनी मेंढक (`2003`)**; **लोकटक फुमडी / केइबुल लामजाओ (`संगाई नृत्यशील हिरण`)**!',
    },
  ],
  sections: [
    {
      id: 'biodiversity-hotspots-history',
      number: '12.1–12.5',
      flowDiagramKey: 'c9-ch12-blueprint-mindmap',
      diagramKey: 'c9-ch12-five-kingdom-tree-diagram',
      title: {
        en: 'Habitats, 4 Indian Hotspots, Sacred Heritage (`Tinai & Pakke`), Classification History (`Aristotle→Whittaker`) & Monera–Fungi',
        hi: 'आवास विविधता, भारत के 4 हॉटस्पॉट, वर्गीकरण का विकास क्रम (`अरस्तू → व्हिटेकर 1969`) तथा मोनेरा, प्रोटिस्टा व कवक',
      },
      summaryTag: {
        en: 'NCERT Pages 228–236 • Nilgiri Tahr, Lion-tailed Macaque, Nepenthes, Neelakurinji, Ram Baksh Biogas, Act 12.1–12.5 & Carl Woese 1977',
        hi: 'NCERT पृ. 228–236 • नीलगिरि तहर, मकाक, घटपर्णी, संगम तिनई, 1969 पाँच-जगत, क्र. 12.1–12.5 व कार्ल वूज 3-डोमेन',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Why Earth’s Life is So Diverse (`4 Hotspots & Endemics`) + How 2→3→4→5 Kingdoms Evolved (`Aristotle to Woese`)',
            hi: '1. भारत की स्थानिक जैव विविधता (`4 हॉटस्पॉट`) तथा 2 से 5 जगत वर्गीकरण का ऐतिहासिक विकास (`अरस्तू से कार्ल वूज`)',
          },
          conceptStory: {
            en: 'Variation over millions of generations generated millions of living forms (`Biodiversity` — **Act 12.1–12.4**). Varied habitats across mountains, deserts, rivers & coasts drive **==Endemism (`species restricted to ONE geographic area` — `NTPC UG 2025 Shift 14`)==**!\n• **4 Global Biodiversity Hotspots in India (`defined by high endemism + >70% habitat loss` — `Group D Shifts 19, 34`)**: **(1) Western Ghats (`UNESCO World Heritage`, Nilgiri Tahr, Lion-tailed Macaque, Neelakurinji blooming once every 12 years!)**, **(2) Himalaya**, **(3) Indo-Burma (`including NE India — Nepenthes khasiana pitcher plant`)**, and **(4) Sundaland (`Nicobar Islands`)**.\n• **Traditional Indian Conservation**: Ancient **Sangam *Tinai* system** (`5 ecological zones: Kurinji/Mullai/Marudam/Neydal/Palai`) and **Sacred Groves (`Orans/Kavus/Devrais`)** preserved fragile local habitats intact (`Group D 2025 Shift 15`). At **Pakke Tiger Reserve (`Arunachal Pradesh`, `Act 12.2`)**, local Nyishi community guards **4 Hornbill species** (`Great, Wreathed, Oriental Pied, Rufous-necked`) by protecting tall nesting trees!\n• **Classification Timeline (`Must Memorize Order!`)**:\n  1) **Aristotle**: Grouped animals crudely by *habitat* (`land/water/air`) — failed because **whales, seals, turtles, birds & bats** share habitats without biological similarity!\n  2) **Carolus Linnaeus (`1758`, `Systema Naturae`)**: **2 Kingdoms (`Plantae vs Animalia`)** based on locomotion & cell wall — failed completely over *Amoeba* (`unicellular + motile + heterotroph`, `Group D Shift 20`) & *Euglena*!\n  3) **Ernst Haeckel (`1866`)**: **3 Kingdoms — added `Protista`** (`NOTE: bacteria were placed inside Protista right after 3-kingdom system!` — `Group D Shift 13`).\n  4) **Herbert Copeland (`1938`)**: **4 Kingdoms — separated prokaryotic `Monera`**!\n  5) **==R.H. Whittaker (`1969`) — 5-Kingdom System==**: Classified ALL cellular life into **Monera, Protista, Fungi, Plantae, Animalia** using **5 criteria**: `(i)` Prokaryotic vs Eukaryotic cell, `(ii)` Unicellular vs Multicellular body, `(iii)` Cell wall presence/chemistry, `(iv)` Mode of Nutrition, `(v)` Evolutionary relatedness.\n  6) **Carl Woese (`1977`)**: Using **genetic/DNA sequences**, split prokaryotes into **Bacteria + Archaea (`extremophiles`)**, establishing **3 Domains (`Bacteria, Archaea, Eukarya`)**!',
            hi: 'पीढ़ियों के सूक्ष्म परिवर्तनों से विकसित विविधता को **जैव विविधता (`क्र. 12.1–12.4`)** कहते हैं। भारत में उच्च स्थानिकता व आवास क्षति वाले **4 वैश्विक जैव विविधता हॉटस्पॉट (`अतिक्षेत्र`)** हैं: **(1) पश्चिमी घाट** (**नीलगिरि तहर**, **सिंह-पुच्छ मकाक**, `12` वर्ष में खिलने वाला **नीलकुरिंजी**, बैंगनी मेंढक), **(2) हिमालय**, **(3) इंडो-बर्मा (`मेघालय का कीटभक्षी घटपर्णी नेपेंथीस खसियाना`)**, तथा **(4) सुंडालैंड (`निकोबार द्वीप`)**!\n• **भारतीय परंपराएँ**: तमिल साहित्य का **संगम तिनई (`5 पारिस्थितिक क्षेत्र`)** एवं **पवित्र उपवन (`देवराई/कावु/ओरण`)** स्थानीय पर्यावास बचाते रहे (`Group D Shift 15`)। **पक्के टाइगर रिज़र्व (`अरुणाचल प्रदेश`, क्र. 12.2)** में न्यीशी समुदाय व वन विभाग ने **4 हॉर्नबिल प्रजातियों** के घोंसले बचाए!\n• **वर्गीकरण विकास क्रम (`अति महत्वपूर्ण क्रम!`)**:\n  1) **अरस्तू**: केवल आवास (`जल/थल/नभ`) आधारित — भ्रामक क्योंकि व्हेल, कछुआ व चमगादड़ भिन्न होते हुए भी समान आवास में मिलते हैं!\n  2) **कैरोलस लिनियस (`1758`)**: **2 जगत (`पादप व जंतु`)** — *अमीबा* (`एककोशिक गतिशील परपोषी` — `Shift 20`) व *यूग्लीना* पर विफल!\n  3) **अर्न्स्ट हेकेल (`1866`)**: **3 जगत (`+ प्रोटिस्टा`)** — तब **जीवाणु प्रोटिस्टा में रखे गए थे (`Group D Shift 13`)**!\n  4) **कोपलैंड (`1938`)**: **4 जगत (`+ मोनेरा`)** प्रोकैरियोट्स हेतु अलग किया।\n  5) **==आर.एच. व्हिटेकर (`1969`) — 5 जगत वर्गीकरण==**: **(1) मोनेरा, (2) प्रोटिस्टा, (3) कवक, (4) पादप, (5) जंतु** — आधार: कोशिका प्रकृति (`प्राक्केंद्रकी/सुकेंद्रकी`), संगठन स्तर, कोशिका भित्ति, पोषण व विकास क्रम।\n  6) **कार्ल वूज (`1977`)**: **DNA/RNA तुलना** से मोनेरा को **बैक्टीरिया व आर्किया (`चरम आवास जीवाणु`)** में बाँट **3 डोमेन (`Bacteria, Archaea, Eukarya`)** बनाए!',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch12/real/nilgiri_tahr.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch12/real/lion_tailed_macaque.webp',
            title: { en: 'Western Ghats Endemic Treasures (`NCERT Fig 12.1`): Nilgiri Tahr (`Left`) & Lion-Tailed Macaque (`Right`)', hi: 'पश्चिमी घाट हॉटस्पॉट के स्थानिक जीव (`NCERT चित्र 12.1`): नीलगिरि तहर (`बायाँ`) व सिंह-पुच्छ मकाक (`दायाँ`)' },
            caption: {
              en: 'Found ONLY in high shola grasslands / rainforests of Western Ghats; habitat fragmentation threatens both endemics (`RRB Group D 2025 Shifts 29, 42`).',
              hi: 'केवल पश्चिमी घाट के शोला-वर्षावनों में सीमित स्थानिक प्रजातियाँ (`Group D 2025 Shifts 29, 42`); आवास विखंडन इनके अस्तित्व का मुख्य संकट है।',
            },
          },
          inlinePyqIds: ['pyq-c9c12-1', 'pyq-c9c12-2', 'pyq-c9c12-3', 'pyq-c9c12-4', 'pyq-c9c12-5', 'pyq-c9c12-6', 'pyq-c9c12-24'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Kingdoms 1–3 Deep Dive: `Monera` (`Sitapur Biogas`), `Protista` (`Act 12.5 Hay Infusion`), `Fungi` (`Chitin`) & `Lichens`',
            hi: '2. तीन प्रारंभिक जगत: `मोनेरा` (`सीतापुर बायोगैस`), `प्रोटिस्टा` (`क्र. 12.5 फांट`), `कवक` (`काइटिन भित्ति`) एवं `लाइकेन`',
          },
          conceptStory: {
            en: 'Master the microscopic triad cleanly separated by Whittaker (`NCERT p.232–236`):\n• **==Kingdom 1 — MONERA (`Unicellular Prokaryotes`)==**: Lack membrane-bound nucleus & organelles! Include Bacteria (*E. coli*, decomposers, biogas methanogens) AND **oxygenic photosynthetic Cyanobacteria (`Blue-green algae`, `Group D Shifts 2, 32, 48`)**. *India Spotlight*: In `1957`, **==Ram Baksh Singh (`Sitapur, UP`)==** founded India’s pioneering Gobar Gas Research Station using anaerobic bacteria (`biodigester` -> clean methane gas + organic slurry)! Fossilised layered bacterial limestone mats (**Stromatolites**) survive in **Rajasthan & Madhya Pradesh** (`>2–3` billion yrs old!).\n• **==Kingdom 2 — PROTISTA (`Unicellular Eukaryotes`)==**: Possess a **true membrane-bound nucleus** (`distinguishing them from Monera` — `Shift 44`) & organelles (`Act 12.5` hay-infusion drop under microscope, `Shift 40`): *Amoeba* (`changing shape with pseudopodia`), *Paramecium* (`covered in cilia sweeping food into oral groove` — `Shifts 27, 40`), *Euglena* (`whip flagellum — photosynthesizes in sunlight AND ingests food in dark!`), *Chlamydomonas* (`rigid green wall`).\n• **==Kingdom 3 — FUNGI (`Saprotrophic Decomposers`)==**: Eukaryotic, non-chlorophyllous, heterotrophs releasing digestive enzymes onto dead matter & absorbing nutrients via filamentous **mycelium (`hyphae`)** (`Shift 17`). Critical CBT Rule: **==Cell wall is made of CHITIN (`never cellulose` — `Group D Shift 9`)==**! Examples: *Rhizopus*, *Penicillium*, *Agaricus* (`button/oyster mushrooms harvested in 30–45 days on damp paddy straw`); **Yeast (`Saccharomyces`)** is a rare **unicellular fungus** (`Fungi` overall is largely multicellular — `Tech 3 Shift 22`)!\n• **Symbiosis Bonus — ==Lichens (`शैवाल + कवक सहजीवन`)==**: Fungal hyphae shield & supply minerals/water while green algae/cyanobacteria make sugar via photosynthesis. Ultra-sensitive to **SO₂ / industrial air pollution (`natural clean-air bioindicators`)**!',
            hi: 'व्हिटेकर के प्रथम तीन जगत सूक्ष्मजीवों की स्पष्ट पहचान कराते हैं (`NCERT पृ. 232–236`):\n• **==1. मोनेरा (`एककोशिकीय प्राक्केंद्रकी`)==**: झिल्ली-बद्ध केंद्रक व कोशिकांग पूर्णतः अनुपस्थित! जीवाणु एवं **प्रकाश संश्लेषी सायनोजीवाणु (`नील-हरित शैवाल`, `Shifts 2, 32, 48`)** दोनों शामिल। **भारतीय योगदान**: वर्ष `1957` में **==राम बख्श सिंह (`सीतापुर, उ.प्र.`)==** ने गोबर गैस अनुसंधान केंद्र की नींव रख अवायवीय जीवाणुओं से बायोगैस क्रांति की! **राजस्थान व मध्य प्रदेश** में सायनोजीवाणु निर्मित प्राचीन **स्ट्रोमैटोलाइट (`Stromatolites`)** चट्टानें पाई जाती हैं।\n• **==2. प्रोटिस्टा (`एककोशिकीय सुकेंद्रकी`)==**: सुस्पष्ट **झिल्ली-बद्ध केंद्रक उपस्थित** (`मोनेरा से मुख्य भेद`, `Shift 44`)! **क्र. 12.5 (`घास-फांट निरीक्षण`)**: **अमीबा** (`कूटपाद/पादाभ`), **पैरामीशियम** (`पक्ष्माभ / Cilia से भोजन धकेलना`, `Shifts 27, 40`), **यूग्लीना** (`कशाभ — स्वपोषी व परपोषी दोनों!`) तथा **क्लैमाइडोमोनास** (`हरित भित्ति`)!\n• **==3. कवक (`Fungi — मृतजीवी अपघटक`)==**: पर्णहरित-रहित सुकेंद्रकी जो कवकजाल (`Mycelium`) द्वारा मृत पदार्थों का बाह्य पाचन कर अवशोषण करते हैं (`Shift 17`)। **==इनकी कोशिका भित्ति काइटिन (`Chitin`) की बनी होती है (`सेल्युलोज़ नहीं!` — `Shift 9`)==**। *राइजोपस, पेनिसिलियम, एगरिकस मशरूम (`30–45 दिन` फसल चक्र)* बहुकोशिकीय हैं जबकि **यीस्ट (`Saccharomyces`)** एककोशिकीय अपवाद है (`Tech 3 Shift 22`)!\n• **लाइकेन (`सहजीविता`)**: कवक + शैवाल/सायनोजीवाणु की जुगलबंदी — **`SO₂` वायु प्रदूषण के प्रति संवेदनशील प्राकृ्तिक जैव-सूचक (`Bioindicators`)**!',
          },
          inlinePyqIds: ['pyq-c9c12-7', 'pyq-c9c12-8', 'pyq-c9c12-9', 'pyq-c9c12-10', 'pyq-c9c12-11', 'pyq-c9c12-12', 'pyq-c9c12-13', 'pyq-c9c12-14'],
        },
      ],
    },
    {
      id: 'plantae-animalia-diversity',
      number: '12.6.4–12.6.5',
      diagramKey: 'c9-ch12-plantae-five-divisions-diagram',
      svgLab: 'diversity-taxonomy-hierarchy-lab',
      svgLabTitle: {
        en: 'Interactive 3-in-1 Taxonomy Lab: 5 Kingdoms + Ex 15 Specimens, 5 Plant Divisions & Vertebrate Heart Explorer',
        hi: 'इंटरैक्टिव 3-इन-1 वर्गीकरण प्रयोगशाला: 5-जगत निर्णय व प्रश्न 15, पादप 5 प्रभाग एवं कशेरुकी हृदय',
      },
      title: {
        en: 'Kingdom Plantae (`5 Evolutionary Divisions`) & Kingdom Animalia (`8 Invertebrates → Protochordata → 5 Vertebrata`)',
        hi: 'जगत पादप के 5 प्रभाग (`थैलोफाइटा से आवृतबीजी`) एवं जगत जंतु (`पॉरीफेरा से कशेरुकी हृदय व मैंग्रोव/KFD संरक्षण`)',
      },
      summaryTag: {
        en: 'NCERT Pages 236–246 • Marchantia, Pteridium Act 12.6–12.7, Hortus Malabaricus Itti Achuthan, Porifera 24k L/d, Heart Chambers & 1999 Odisha Mangroves',
        hi: 'NCERT पृ. 236–246 • ब्रायो-टेरिडो-जिम्नो-एंजियो, हॉर्टस मलाबारिकस (इट्टी अचुतन), पॉरीफेरा से इकाइनोडर्मेटा व कशेरुकी हृदय कक्ष',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Kingdom Plantae Progression (`Thallophyta → Bryophyta → Pteridophyta → Gymnosperms → Angiosperms`) + *Hortus Malabaricus*',
            hi: '1. पादप जगत का क्रमिक विकास (`थैलो → ब्रायो → टेरिडो → जिम्नो → एंजियो`) तथा *हॉर्टस मलाबारिकस*',
          },
          conceptStory: {
            en: 'Plants (`multicellular cellulose-walled autotrophs` — rare N-supplement exception: insectivorous **Nepenthes**!) climbed land via **4 key innovations** (`NCERT p.236–239`):\n• **1. Thallophyta (`Algae`, `Shifts 11, 33`)**: Undifferentiated thallus (`ZERO true roots, stems, leaves`), aquatic, NO vascular tissues -> *Spirogyra, Ulothrix, Chara* (`ALP Match!`).\n• **2. Bryophyta (`Moss / Funaria, Marchantia, Riccia`)**: **==Amphibians of the Plant Kingdom (`Shift 28`)==** — simple stem/leaf-like body anchored by hair-like **rhizoids**, STILL **no xylem/phloem**, and water film mandatory for sperm swimming!\n• **3. Pteridophyta (`Ferns / Pteridium, Marsilea`, `Act 12.6–12.7`)**: **==FIRST true roots, stems, leaves + vascular tissues (`Xylem & Phloem`) (`Shift 17`)==**! Yet **NO flowers or seeds** — reproduce via brown **spore clusters (`sori`)** under fronds and still require damp moisture for fertilisation (`Shifts 24, 36`).\n• **4. Gymnosperms (`Pine, Deodar, Cycas`)**: True vascular conifers producing **naked seeds (`not inside ovaries/fruits`)** on woody **cones** (`Shifts 30, 43`); needle-shaped leaves with thick cuticle prevent water loss in droughts & mountains (`Group D Shift 6`)!\n• **5. Angiosperms (`Flowering Plants`)**: **Seeds enclosed inside fruits** formed by fertilised ovaries (`Shift 30`). Two sub-groups: **Monocots** (`1` cotyledon, parallel veins, fibrous roots — Rice, Wheat, Maize) & **Dicots** (`2` cotyledons, reticulate/net veins, taproot — Pea, Mustard, Mango, Gulmohar).\n• **Indian Botanical Heritage Box**: Legendary 17th-century Kerala treatise ***==Hortus Malabaricus==*** documented `720+` regional plant species led by Ayurvedic master **==Itti Achuthan Vaidyan==**!',
            hi: 'कोशिका भित्ति (`सेल्युलोज़`) व क्लोरोफिल युक्त बहुकोशिक स्वपोषी पादप (`अपवाद कीटभक्षी घटपर्णी नेपेंथीस`) 5 क्रमिक प्रभागों में बँटते हैं:\n• **1. थैलोफाइटा (`शैवाल`, `Group D Shifts 11, 33`)**: जड़-तना-पत्ती रहित अविभेदित थैलस (*स्पाइरोगाइरा, यूलोथ्रिक्स, कारा*), मुख्यतः जलीय।\n• **2. ब्रायोफाइटा (`मॉस/फ्यूनेरिया, मार्केंशिया, रिक्सिया`)**: **==पादप जगत के उभयचर==** — तने-पत्ती सदृश काय व **मूलाभास (`Rhizoids`, `Shift 28`)**, संवहनी ऊतक अनुपस्थित, निषेचन हेतु जल आवश्यक।\n• **3. टेरिडोफाइटा (`फर्न / टेरिडियम, मार्सीलिया`, `क्र. 12.6–12.7`)**: **==प्रथम वास्तविक जड़-तना-पत्ती एवं संवहनी ऊतक (`जाइलम व फ्लोएम`) युक्त भू-पादप==** (`Shift 17`)! पत्ती के नीचे भूरे **बीजाणुधानी गुच्छ (`सोराई`)** बनते हैं — परंतु **बीज न होने व जल-निर्भर जनन** से प्रसार सीमित रहता है (`Shifts 24, 36`)।\n• **4. अनावृतबीजी (`जिम्नोस्पर्म`: चीड़/पाइन, देवदार, साइकस)**: **नग्न बीज (`फल आवरण रहित`)** काष्ठीय **शंकुओं (`Cones`)** पर लगते हैं (`Shifts 30, 43`); सुई जैसी पत्तियाँ सूखे में जल हानि रोकती हैं (`Shift 6`)!\n• **5. आवृतबीजी (`एंजियोस्पर्म`)**: पुष्प व **फल के भीतर बंद बीज**। **एकबीजपत्री** (`1` बीजपत्र, समानांतर शिरा, रेशेदार जड़ — गेहूँ, मक्का) बनाम **द्विबीजपत्री** (`2` बीजपत्र, जालिकावत शिरा, मूसला जड़ — मटर, आम, गुलमोहर)। *गौरव तथ्य*: **17वीं सदी** की विख्यात ***==हॉर्टस मलाबारिकस==*** में आयुर्वेदाचार्य **==इट्टी अचुतन वैद्य==** ने `720` भारतीय औषधीय पादपों का दस्तावेजीकरण किया!',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch12/real/marchantia.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch12/real/pteridium_aquilinum.webp',
            title: { en: 'Plant Evolution Pair (`ALP Match`): Non-vascular `Marchantia` (`Bryophyta`) vs Vascular Seedless `Pteridium` Fern (`Pteridophyta`)', hi: 'पादप विकास युग्म (`ALP PYQ मिलान`): संवहन-रहित `मार्केंशिया` (`ब्रायोफाइटा`) बनाम प्रथम संवहनी `फर्न` (`टेरिडोफाइटा`)' },
            caption: {
              en: 'Left (`Bryophyta`): Flat thallus anchored by rhizoids on damp forest rocks (`Group D Shift 28`). Right (`Pteridophyta`): True vascular roots/fronds bearing underside spores (`Act 12.6–12.7`).',
              hi: 'बायाँ (`मार्केंशिया`): मूलाभास युक्त नम चट्टानी उभयचर पादप। दायाँ (`फर्न`): जाइलम-फ्लोएम युक्त प्रथम संवहनी बीजरहित पादप (`क्र. 12.6–12.7`)।',
            },
          },
          inlinePyqIds: ['pyq-c9c12-15', 'pyq-c9c12-16', 'pyq-c9c12-17', 'pyq-c9c12-18', 'pyq-c9c12-19', 'pyq-c9c12-20'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Animalia (`8 Invertebrates → Protochordata → 5 Vertebrata Hearts`), Mangrove Cyclone Buffer & KFD Alert',
            hi: '2. जंतु जगत के संघ (`पॉरीफेरा से कशेरुकी हृदय`), 1999 ओडिशा मैंग्रोव कवच व KFD वन्यजीव चेतावनी',
          },
          conceptStory: {
            en: 'Multicellular heterotrophs **without cell walls** (`Group D Shift 44`) split into non-chordates and chordates (`NCERT p.240–246`):\n• **8 Non-Chordata Phyla (`Simplest to Complex`)**:\n  1) **Porifera (`Sponges`, *Sycon*)**: Sessile aquatic bodies full of **pores & water-canal system** (`filtering up to 24,000 L water/day/kg`!).\n  2) **Cnidaria (`Hydra, Jellyfish, Corals`)**: Tissue-level organization, aquatic stinging tentacles, hollow gut cavity (`single opening`).\n  3) **Platyhelminthes (`Tapeworm, Planaria, Liver Fluke`)**: **Bilateral symmetry**, dorso-ventrally **flat**, organ-level without true coelom (`hooks/suckers` in parasites).\n  4) **==Nematoda (`Ascaris, Wuchereria`)==**: Cylindrical unsegmented roundworms; pseudocoelom; **first complete digestive tract with TWO openings (`mouth + anus`, allowing 1-way flow — `Group D Shift 12`)**!\n  5) **Annelida (`Earthworm, Leech`)**: True **body cavity (`coelom`)** + true internal metameric segments (`organ systems`).\n  6) **==Arthropoda (`Butterfly, Cockroach, Crab, Spider, Scorpion`)==**: **==LARGEST animal phylum on Earth==** — **jointed legs**, segmented body, tough **chitin exoskeleton** & open blood cavity.\n  7) **Mollusca (`Snail, Octopus, Mussel`)**: Soft unsegmented body, muscular foot & mantle often secreting protective calcareous (`CaCO₃`) shell.\n  8) **Echinodermata (`Starfish, Sea Urchin`)**: Exclusively marine; spiny calcareous **`CaCO₃` endoskeleton** & tube feet (`water-driven vascular system`).\n• **Chordata (`Notochord + Dorsal Nerve Cord + Gill slits`)**: Primitive marine **Protochordata** (*Amphioxus / Herdmania*) retain a flexible **notochord** rod -> **Vertebrata (`5 Classes`)** replace it with jointed vertebral column (`NCERT Table + Tech 3 Heart Qs`):\n  - **Pisces (`2ch`, gills, scales, ectotherm)** -> **Amphibia (`3ch`, slimy skin, `Tech 3 Shifts 13, 16`)** -> **Reptilia (`3ch` — *Crocodile 4ch exception!*, dry scales)** -> **Aves (`4ch`, hollow bones, feathers, warm-blooded)** -> **Mammalia (`4ch`, mammary milk, hair/pinnae, warm-blooded)**!\n• **Conservation Boxes (`p.242, 245`)**: Coastal **Mangrove stilt-roots** shielded **Odisha (`Bhitarkanika`)** against deadly surges in the **`1999 Super Cyclone`**, whereas clearing forests triggers deadly tick-borne **KFD (`Kyasanur Forest Disease / Monkey Fever`, Western Ghats)** outbreaks!',
            hi: '**कोशिका भित्ति रहित बहुकोशिकीय परपोषी (`Group D Shift 44`)** जंतु जगत दो भागों में बँटता है (`NCERT पृ. 240–246`):\n• **8 अकशेरुकी संघ (`नॉन-कॉर्डेटा`)**: **(1) पॉरीफेरा (`स्पंज`)**: शरीर में असंख्य छिद्र व नाल तंत्र (`प्रति किग्रा 24,000 लीटर/दिन जल छानने की क्षमता`)। **(2) नाइडेरिया (`हाइड्रा, जेलिफिश`)**: ऊतक स्तर व दंश कोशिकाएँ। **(3) प्लेटीहेल्मिंथीज (`फीताकृमि, प्लेनेरिया`)**: पृष्ठ-अधर से चपटे, द्विपार्श्व सममित व वास्तविक देहगुहा रहित। **==(4) निमेटोडा (`गोलकृमि / एस्केरिस`)==**: बेलनाकार शरीर तथा **प्रथम दो देह-द्वार (`मुख व गुदा`) वाला एकदिशिक पूर्ण पाचन पथ** (`Group D Shift 12`)! **(5) एनेलिडा (`केंचुआ, जोंक`)**: वास्तविक देहगुहा व खंडित शरीर। **==(6) आर्थ्रोपोडा (`तिलचट्टा, केकड़ा, मकड़ी, तितली`)==**: **==पृथ्वी का सबसे बड़ा जंतु संघ==** — संधिपाद पैर व मजबूत **काइटिन बाह्यकंकाल**! **(7) मोलस्का (`घोंघा, ऑक्टोपस`)**: कोमल शरीर, पेशीय पाद व कैल्सियम कवच। **(8) इकाइनोडर्मेटा (`स्टारफिश`)**: केवल समुद्री व **`CaCO₃` शूलयुक्त अंतःकंकाल**।\n• **कॉर्डेटा (`पृष्ठरज्जु व कशेरुक दंड`)**: समुद्री **प्रोटोकॉर्डेटा (`एम्फिऑक्सस`)** से लेकर **5 कशेरुकी वर्ग**: **मत्स्य** (`2 कक्ष हृदय, क्लोम, असमतापी`), **उभयचर** (`3 कक्ष हृदय, नम श्लेष्म त्वचा` — `Tech 3 Shifts 13, 16`), **सरीसृप** (`3 कक्ष — *अपवाद: मगरमच्छ में 4 कक्ष*`, सूखे शल्क), **पक्षी** (`4 कक्ष, खोखली हड्डियाँ, समतापी`) और **स्तनधारी** (`4 कक्ष, स्तन ग्रंथियाँ व बाह्य कर्ण, समतापी`)!\n• **पारिस्थितिक तथ्य**: **`1999` के ओडिशा महाचक्रवात** में तटीय **मैंग्रोव (`ज्वारीय वन`)** ने रक्षक दीवार का काम किया; जबकि वन विनाश से किलनी जनित **क्यासानूर वन रोग (`KFD / बंदर बुखार`, पश्चिमी घाट)** मानव बस्तियों में फैला!',
          },
          realImage: {
            url: '/ncert-notes/class9-bio-ch12/real/cycas.webp',
            secondaryUrl: '/ncert-notes/class9-bio-ch12/real/chameleon.webp',
            title: { en: 'Vascular Seeded `Cycas` (`Gymnosperm Cone`) & Dry-Scaled Ectotherm `Chameleon` (`Reptilia 3-Ch Heart`)', hi: 'नग्न शंकुधारी `साइकस` (`अनावृतबीजी`) एवं सूखे शल्क युक्त `गिरगिट` (`सरीसृप — 3 कक्ष हृदय`)' },
            caption: {
              en: 'Left (`Gymnosperm`): Naked seeds develop inside central cones without fruit cover (`Group D Shifts 30, 43`). Right (`Reptilia`): Keratin scales & 3-chambered heart adapt reptiles to dry terrestrial land.',
              hi: 'बायाँ (`साइकस`): शंकु में नग्न बीज व सूखारोधी पत्तियाँ। दायाँ (`गिरगिट`): शुष्क शल्कों व चर्मिल अंडों संग पूर्ण स्थलीय सरीसृप वर्ग।',
            },
          },
          inlinePyqIds: ['pyq-c9c12-21', 'pyq-c9c12-22', 'pyq-c9c12-23'],
        },
      ],
    },
    {
      id: 'hierarchy-binomial-domains-fossils',
      number: '12.7–12.10',
      diagramKey: 'c9-ch12-animalia-chordata-hierarchy-diagram',
      title: {
        en: '7-Rank Taxonomic Hierarchy, Linnaeus Binomial Rules (`Panthera tigris`), Woese 3-Domain (`1977`), Birbal Sahni Fossils & Loktak Phumdis',
        hi: '7-स्तरीय वर्गीकरण पदानुक्रम, द्विपद नामकरण (`Panthera tigris`), कार्ल वूज 3-डोमेन (`1977`), बीरबल साहनी व लोकटक फुमडी',
      },
      summaryTag: {
        en: 'NCERT Pages 246–251 • Tiger & Pea Full Ranks, Italics/Underline Rules, Bacteria/Archaea/Eukarya, Purple Frog 2003 & Sangai Deer 1953',
        hi: 'NCERT पृ. 246–251 • बाघ व मटर पदानुक्रम, इटैलिक/रेखांकन नियम, 3 डोमेन, बैंगनी मेंढक (2003) व केइबुल लामजाओ संगाई',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. 7-Rank Pyramid (`Kingdom → Species`), Binomial Syntax, Carl Woese (`1977`), Fossils (`Birbal Sahni`) & Indian Flagships',
            hi: '1. पदानुक्रम के 7 स्तर (`जगत → जाति`), द्विपद नियम, कार्ल वूज 3-डोमेन, बीरबल साहनी जीवाश्म व भारत की दुर्लभ धरोहर',
          },
          conceptStory: {
            en: 'Moving down Linnaeus’s **==7 Taxonomic Ranks (`K-P-C-O-F-G-S`)==** narrows group size while boosting shared traits:\n• **1. Kingdom (`जगत`) -> 2. Phylum (`Animals`) / Division (`Plants`) -> 3. Class (`वर्ग`) -> 4. Order (`गण`) -> 5. Family (`कुल`) -> 6. Genus (`वंश`) -> 7. Species (`जाति`)**! *(Mnemonic: **K**ing **P**hillip **C**ame **O**ver **F**or **G**ood **S**oup; **Species** members share max similarities & interbreed to give fertile offspring!)*\n  - **Indian Tiger**: Animalia -> Chordata -> Mammalia -> Carnivora -> Felidae -> ***Panthera*** -> ***tigris*** (`*Panthera tigris*`).\n  - **Garden Pea**: Plantae -> Angiospermae -> Dicotyledonae -> Fabales -> Fabaceae -> ***Pisum*** -> ***sativum*** (`*Pisum sativum*`).\n• **==4 Golden Rules of Binomial Nomenclature (`Linnaeus`)==**: (1) Universally Latin/Latinised two-word name (`Genus` + `species`) avoiding regional vernacular confusion; (2) **Genus starts with Capital letter** (`Panthera`); (3) **Species starts with small letter** (`tigris`); (4) **Italicised in typed print** OR **separately underlined (`Panthera` `tigris`)** when handwritten!\n• **Carl Woese (`1977`) 3-Domain Revision**: RNA/DNA comparison proved **Archaea (`extremophile microbes thriving in boiling vents & hypersaline lakes`)** have distinct cell-wall/lipid chemistry from ordinary **Bacteria**, placing ALL life into **Domains `Bacteria`, `Archaea`, and `Eukarya`**!\n• **Indian Paleobotany & Living Conservation (`12.9–12.10`, p.249–250)**:\n  - **Fossils**: **==Prof. Birbal Sahni (`BSIP Lucknow`)==** founded paleobotany in India (`Mandla Plant Fossils National Park, MP` displays million-year petrified wood).\n  - **Purple Frog (`Nasikabatrachus sahyadrensis`)**: Burrowing Western Ghats amphibian living fossil formally described in **`2003`**!\n  - **Loktak Lake Phumdis (`Manipur`)**: **Keibul Lamjao** is the world’s ONLY floating National Park protecting the endangered dancing **Sangai (`brow-antlered deer`, rediscovered in `1953`)**!',
            hi: 'वैज्ञानिक पदानुक्रम में ऊपर से नीचे जाने पर समान लक्षण बढ़ते जाते हैं (`K-P-C-O-F-G-S`):\n• **7 अनिवार्य स्तर**: **1. जगत (`Kingdom`) → 2. संघ (`Phylum — जंतु`) / प्रभाग (`Division — पादप`) → 3. वर्ग (`Class`) → 4. गण (`Order`) → 5. कुल (`Family`) → 6. वंश (`Genus`) → 7. जाति (`Species` — सर्वाधिक समान व प्रजनन-क्षम समूह!)**।\n  - **बाघ**: जंतु → कॉर्डेटा → मैमेलिया → कार्नीवोरा → फेलिडी → *Panthera* → *tigris*।\n  - **मटर**: पादप → एंजियोस्पर्म → डाइकॉट → फैबेल्स → फैबेसी → *Pisum* → *sativum*।\n• **==द्विपद नामकरण के 4 नियम (`लिनियस`)==**: (1) लैटिन या लैटिनकृत दो शब्द (`वंश + जाति`) ताकि विश्व में एक ही नाम रहे; (2) **वंश (`Genus`) का पहला अक्षर बड़ा (`Capital`)**; (3) **जाति (`species`) का पहला अक्षर छोटा (`lowercase`)**; (4) छपाई में **तिरछा (`Italics`)**, और हाथ से लिखते समय **दोनों के नीचे अलग-अलग रेखांकन**!\n• **कार्ल वूज (`1977`) का 3-डोमेन वर्गीकरण**: DNA/RNA अध्ययन से दिखा कि अत्यधिक गर्म स्रोतों/खारे जल के **आर्किया (`Archaea`)** की भित्ति सामान्य **बैक्टीरिया** से भिन्न है — अतः तीन महाडोमेन बने: **`बैक्टीरिया`, `आर्किया`, एवं `यूकैरिया`**!\n• **जीवाश्म व भारतीय संरक्षण धरोहर (`12.9–12.10`)**:\n  - **==प्रो. बीरबल साहनी==** (**भारतीय पुरावनस्पति विज्ञान के जनक, BSIP लखनऊ** व **मंडला पादप जीवाश्म उद्यान म.प्र.**) ने प्राचीन पादप जीवाश्मों का अध्ययन किया।\n  - **बैंगनी मेंढक (`नासिकाबैट्राकस सह्याद्रेंसिस`)**: पश्चिमी घाट का बिलकारी जीवित जीवाश्म जिसे **`2003`** में औपचारिक पहचान मिली।\n  - **लोकटक झील (`मणिपुर`) की तैरती फुमडी**: विश्व का एकमात्र तैरता राष्ट्रीय उद्यान **केइबुल लामजाओ** दुर्लभ **संगाई (`नृत्यशील हिरण`, `1953` में पुनः खोजा गया)** का अंतिम आवास है!',
          },
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Plantae (`Cellulose`) vs Fungi (`Chitin`) vs Monera (`Peptidoglycan`) Walls', hi: 'कोशिका भित्ति भेद (`पादप सेल्युलोज़` बनाम `कवक काइटिन` बनाम `मोनेरा`)' },
      left: { en: '**Plantae & Photosynthetic Protists (`Chlamydomonas`)**: Rigid **Cellulose** cell wall + chlorophyll (`autotrophs`).', hi: '**पादप व क्लैमाइडोमोनास**: **सेल्युलोज़ (`Cellulose`)** की कोशिका भित्ति व स्वपोषी क्लोरोफिल।' },
      right: { en: '**Fungi (`Mushrooms, Yeast`)**: Tough **Chitin** cell wall (`zero chlorophyll` — saprotrophs). **Monera (`Bacteria`)**: **Peptidoglycan** wall, NO nucleus!', hi: '**कवक (`फंजाई`)**: **काइटिन (`Chitin`)** की भित्ति (`मृतजीवी`), जबकि **मोनेरा** में पेप्टिडोग्लाइकैन व झिल्ली-रहित केंद्रक!' },
    },
    {
      pair: { en: 'Bryophyta (`Amphibians, No Xylem`) vs Pteridophyta (`1st Vascular, No Seeds`)', hi: 'ब्रायोफाइटा (`संवहन-रहित उभयचर`) बनाम टेरिडोफाइटा (`प्रथम जाइलम, बीज-रहित`)' },
      left: { en: '**Bryophyta (`Marchantia, Moss`)**: Rhizoids instead of true roots; **ZERO xylem/phloem**; water mandatory (`Shift 28`).', hi: '**ब्रायोफाइटा (`मॉस, मार्केंशिया`)**: केवल मूलाभास, **जाइलम-फ्लोएम अनुपस्थित**; निषेचन में जल निर्भरता।' },
      right: { en: '**Pteridophyta (`Ferns, Marsilea`)**: True roots, stems, leaves + **FIRST Xylem/Phloem** (`Shifts 17, 33`), yet **spores (`NO seeds!`)** & damp habitat needed.', hi: '**टेरिडोफाइटा (`फर्न`)**: प्रथम बार वास्तविक जड़-तना-पत्ती व **जाइलम-फ्लोएम उपस्थित** (`Shift 17`), पर बीज नहीं केवल बीजाणु!' },
    },
    {
      pair: { en: 'Vertebrate Heart Chambers (`Pisces 2`, `Amphibia 3`, `Crocodile 4!` Exception)', hi: 'कशेरुकी हृदय कक्ष (`2 → 3 → 4`, तथा `मगरमच्छ अपवाद!`)' },
      left: { en: '**Pisces (`Fish`) = 2 chambers** (`single pump`). **Amphibia (`Frogs`) & most Reptilia (`Lizards/Snakes`) = 3 chambers** (`Shift 13, 16`).', hi: '**मत्स्य = 2 कक्ष** (`गिल्स`)। **उभयचर व अधिकांश सरीसृप = 3 कक्ष** (`दो आलिंद + एक निलय`)।' },
      right: { en: '**Aves (`Birds`) & Mammalia (`Humans`) = 4 chambers** (`warm-blooded high energy`). *Reptile Trap*: **Crocodile has 4 chambers**!', hi: '**पक्षी व स्तनधारी = 4 कक्ष** (`समतापी उच्च ऊर्जा`)! *परीक्षा अपवाद*: सरीसृप होते हुए भी **मगरमच्छ (`Crocodile`) में 4 कक्ष** होते हैं!' },
    },
    {
      pair: { en: 'Protozoa (`Amoeba/Euglena`) vs Bacteria in Classification History (`1758 → 1969`)', hi: 'द्विजगत (`1758`) में अमीबा भ्रम व त्रिजगत (`1866`) में जीवाणु स्थान' },
      left: { en: '**2-Kingdom (`Linnaeus 1758`)** confused *Amoeba* (`unicellular + motile + wall-less heterotroph`, `Shift 20`) & *Euglena* (`photosynthesis + ingestion`).', hi: '**द्विजगत प्रणाली** में एककोशिक चलनशील परपोषी *अमीबा* व उभयधर्मी *यूग्लीना* को रखना कठिन था।' },
      right: { en: '**3-Kingdom (`Haeckel 1866`)** placed BOTH protists AND bacteria in **Protista** (`Shift 13`), until **Copeland `1938` (`Monera`)** & **Whittaker `1969`** separated prokaryotes!', hi: '**हेकेल (`1866`)** की त्रिजगत में पहले जीवाणु भी **प्रोटिस्टा** में रखे गए थे; बाद में कोपलैंड/व्हिटेकर ने मोनेरा अलग किया!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Father of Five-Kingdom Classification (`1969`)', hi: 'पाँच जगत वर्गीकरण के प्रणेता (`1969`)' },
      name: { en: 'Robert H. Whittaker (`1920–1980`)', hi: 'आर. एच. व्हिटेकर (`R.H. Whittaker`)' },
      country: { en: 'USA (`NCERT Ch 12 p.232`)', hi: 'अमेरिका (`NCERT कक्षा 9 पृ. 232`)' },
      fact: {
        en: 'Unified cellular biology, nutrition, cell wall chemistry & evolutionary phylogeny into **5 Kingdoms (`Monera, Protista, Fungi, Plantae, Animalia`)** in `1969` — universally adopted worldwide!',
        hi: 'सन् **1969** में कोशिकीय जटिलता, पोषण, भित्ति रसायन व विकास क्रम के आधार पर संपूर्ण सजीव जगत को **5 जगतों (`मोनेरा, प्रोटिस्टा, कवक, पादप, जंतु`)** में व्यवस्थित किया!',
      },
    },
    {
      badge: { en: 'Father of Indian Palaeobotany (`BSIP Lucknow`)', hi: 'भारतीय पुरावनस्पति विज्ञान के जनक (`BSIP लखनऊ`)' },
      name: { en: 'Prof. Birbal Sahni (`1891–1949`)', hi: 'प्रो. बीरबल साहनी (`1891–1949`)' },
      country: { en: 'India (`NCERT Class 9 Ch 12 p.249`)', hi: 'भारत (`NCERT कक्षा 9 पृ. 249`)' },
      fact: {
        en: 'Founded the **Birbal Sahni Institute of Palaeosciences (`Lucknow`)**, deciphering India’s ancient **Gondwana flora, glossopteris & petrified fossil trees** connecting continents across deep geological time!',
        hi: 'लखनऊ में **बीरबल साहनी पुरावनस्पति विज्ञान संस्थान (`BSIP`)** की स्थापना कर भारतीय जीवाश्म वृक्षों से महाद्वीपीय व पादप विकास इतिहास उजागर किया!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-tahr',
      figRef: { en: 'NCERT Fig 12.1 (`Endemic Nilgiri Tahr — Western Ghats Hotspot`)', hi: 'NCERT चित्र 12.1 — स्थानिक नीलगिरि तहर (`पश्चिमी घाट हॉटस्पॉट`)' },
      title: { en: 'Nilgiri Tahr (`Nilgiritragus hylocrius`) on Shola Mountain Cliffs', hi: 'नीलगिरि तहर — पश्चिमी घाट की अद्वितीय स्थानिक पर्वतीय प्रजाति' },
      imageUrl: '/ncert-notes/class9-bio-ch12/real/nilgiri_tahr.webp',
      hotspots: [
        { en: 'Endemic mountain ungulate surviving exclusively in Western Ghats high-altitude grasslands (`Group D Shift 29`).', hi: 'केवल पश्चिमी घाट के उच्च शोला घास मैदानों में मिलने वाली स्थानिक प्रजाति (`Group D Shift 29`)!' },
      ],
    },
    {
      id: 'vis-macaque',
      figRef: { en: 'NCERT Sec 12.1 (`Endemic Lion-Tailed Macaque`)', hi: 'NCERT भाग 12.1 — सिंह-पुच्छ मकाक (`पश्चिमी घाट`)' },
      title: { en: 'Endangered Lion-Tailed Macaque (`Macaca silenus`)', hi: 'सिंह-पुच्छ मकाक — वन विखंडन से संकटग्रस्त स्थानिक प्राइमेट' },
      imageUrl: '/ncert-notes/class9-bio-ch12/real/lion_tailed_macaque.webp',
      hotspots: [
        { en: 'Forest fragmentation in Western Ghats directly shrinks habitat of canopy-dwelling endemics (`Group D Shift 42`).', hi: 'पश्चिमी घाट के सदाबहार वनों का कटाव इस स्थानिक बंदर के लिए सबसे बड़ा संकट है (`Shift 42`)।' },
      ],
    },
    {
      id: 'vis-marchantia',
      figRef: { en: 'NCERT Sec 12.6.4 (`Bryophyta: Marchantia`)', hi: 'NCERT भाग 12.6.4 — ब्रायोफाइटा (`मार्केंशिया`)' },
      title: { en: '`Marchantia` — Damp-Habitat Amphibian of Plant Kingdom', hi: 'मार्केंशिया — बिना संवहनी ऊतक वाला पादप जगत का उभयचर' },
      imageUrl: '/ncert-notes/class9-bio-ch12/real/marchantia.webp',
      hotspots: [
        { en: 'Anchored by rhizoids on damp rocks; lacks xylem & phloem and relies on moisture films for fertilisation (`ALP Match`).', hi: 'नम शैलों पर मूलाभास से टिकता है; जाइलम-फ्लोएम अनुपस्थित पर निषेचन हेतु जल आवश्यक!' },
      ],
    },
    {
      id: 'vis-fern',
      figRef: { en: 'NCERT Act 12.6–12.7 (`Pteridophyta: Pteridium Fern`)', hi: 'NCERT क्र. 12.6–12.7 — टेरिडोफाइटा (`फर्न`)' },
      title: { en: 'Woodland Fern (`Pteridium`) — First True Vascular Cryptogam', hi: 'फर्न (`टेरिडियम`) — जाइलम व फ्लोएम युक्त प्रथम संवहनी भू-पादप' },
      imageUrl: '/ncert-notes/class9-bio-ch12/real/pteridium_aquilinum.webp',
      hotspots: [
        { en: 'True roots, stems & fronds with xylem/phloem yet reproduces via underside spore sori instead of seeds (`Shifts 17, 24`).', hi: 'वास्तविक जड़-तना-पत्ती व संवहनी ऊतक उपस्थित, किंतु बीज के स्थान पर पत्ती के नीचे बीजाणु बनते हैं!' },
      ],
    },
    {
      id: 'vis-cycas',
      figRef: { en: 'NCERT Sec 12.6.4 (`Gymnosperm: Cycas Cone`)', hi: 'NCERT भाग 12.6.4 — अनावृतबीजी (`साइकस शंकु`)' },
      title: { en: '`Cycas` (`Gymnosperm`) Producing Naked Ovules/Seeds Without Fruits', hi: 'साइकस — बिना फल आवरण के नग्न बीज बनाने वाला अनावृतबीजी पादप' },
      imageUrl: '/ncert-notes/class9-bio-ch12/real/cycas.webp',
      hotspots: [
        { en: 'No ovary wall = naked seeds (`Phanerogam`); tough leaves resist dry/wind-swept habitats (`Group D Shifts 30, 43`).', hi: 'अंडाशय भित्ति न होने से बीज नग्न रहते हैं (`जिम्नोस्पर्म`) और कठोर पत्तियाँ सूखा सहन करती हैं!' },
      ],
    },
    {
      id: 'vis-chameleon',
      figRef: { en: 'NCERT Sec 12.6.5 (`Vertebrata: Reptilia`)', hi: 'NCERT भाग 12.6.5 — कशेरुकी वर्ग सरीसृप (`गिरगिट`)' },
      title: { en: 'Dry-Scaled Terrestrial Chameleon (`Reptilia` — Ectotherm)', hi: 'गिरगिट (`सरीसृप वर्ग`) — सूखे शल्क, 3-कक्ष हृदय व चर्मिल अंडे' },
      imageUrl: '/ncert-notes/class9-bio-ch12/real/chameleon.webp',
      hotspots: [
        { en: 'Cold-blooded vertebrate with dry keratin scales & 3-chambered heart (`note Crocodile exception has 4 chambers`).', hi: 'असमतापी जंतु जिसमें जल हानि रोकने वाले सूखे शल्क व 3-कक्षीय हृदय (`अपवाद मगरमच्छ = 4`) होते हैं।' },
      ],
    },
  ],
  activities: [
    {
      num: '12.1',
      title: { en: 'Activity 12.1: Campus Biodiversity Mapping & Habitat Comparison Survey', hi: 'क्रियाकलाप 12.1: स्थानीय परिवेश जैव विविधता व आवास तुलना सर्वेक्षण' },
      materials: { en: 'Field notebook, magnifier, dichotomous observation chart (`forest grove vs garden/pond`)', hi: 'फील्ड नोटबुक, आवर्धक लेंस व तालिका (`उपवन/तालाब बनाम शुष्क क्षेत्र`)' },
      steps: {
        en: 'Catalogue visible insects, birds, herbs, mosses (`damp shade`) and ferns; compare number of unique species between undisturbed sacred/wooded patches vs concrete lawns.',
        hi: 'नम छायादार स्थान, तालाब किनारे व खुले लॉन में कीट, पक्षी, मॉस, फर्न एवं वृक्षों की प्रजाति संख्या की तुलना करें।',
      },
      examTakeaway: {
        en: 'Heterogeneous **undisturbed habitats** (`sacred groves, wetlands, hotspots`) support vastly higher **native & endemic species** than manicured monocultures!',
        hi: 'विविध **प्राकृतिक व पवित्र उपवन आवास** कृत्रिम एकल-फसल उद्यानों की तुलना में कहीं अधिक देशी व स्थानिक प्रजातियों को आश्रय देते हैं!',
      },
      predictQuestion: {
        prompt: { en: 'Comparing a concrete urban park vs a damp undisturbed sacred grove, which factor primarily increases total species count inside the grove?', hi: 'एक पक्के शहरी पार्क बनाम नम प्राकृतिक पवित्र उपवन (`Sacred grove`) में किस कारण उपवन में अधिक प्रजाति विविधता मिलती है?' },
        options: {
          en: ['Rich microhabitats (`damp rocks, litter, canopy layers`) without disturbance', 'Absence of soil decomposers', 'Uniform single-grass monoculture', 'Zero moisture availability'],
          hi: ['निरंतर मानव हस्तक्षेप बिना विविध सूक्ष्म-पर्यावास (`नम चट्टान, स्तरित वृक्ष, सड़ी पत्तियाँ`)', 'मृदा अपघटकों की अनुपस्थिति', 'केवल एक घास प्रजाति की उपस्थिति', 'पूर्ण शुष्कता'],
        },
        correctIndex: 0,
        reason: {
          en: 'Diverse microhabitats allow algae, bryophytes, fungi, arthropods & birds to coexist cleanly (`Group D Shift 13`).',
          hi: 'विविध सूक्ष्म-पर्यावास अलग-अलग पोषण व नमी आवश्यकताओं वाली सैकड़ों प्रजातियों को पनाह देते हैं!',
        },
      },
    },
    {
      num: '12.2',
      title: { en: 'Activity 12.2: Community Conservation Audit — Pakke 4 Hornbills, Sangam Tinai & Sacred Groves', hi: 'क्रियाकलाप 12.2: सामुदायिक संरक्षण मॉडल — पक्के टाइगर रिज़र्व (`4 हॉर्नबिल`) व संगम तिनई' },
      materials: { en: 'Case file on **Pakke Tiger Reserve (`Arunachal Pradesh`)**, Nyishi Hornbill Nest Adoption Programme & Sangam Tinai', hi: '**पक्के टाइगर रिज़र्व (`अरुणाचल प्रदेश`)** की 4 हॉर्नबिल प्रजातियों, पवित्र उपवनों व तिनई तंत्र का अध्ययन' },
      steps: {
        en: 'Examine how protecting single old fruiting canopy trees supports *Great, Wreathed, Oriental Pied & Rufous-necked Hornbills* as seed dispersers for the entire forest.',
        hi: 'जाँचें कि विशाल फलदार वृक्षों के घोंसले बचाकर न्यीशी समुदाय कैसे *4 हॉर्नबिल प्रजातियों* और पूरे वन पुनर्जनन को सुरक्षित करता है।',
      },
      examTakeaway: {
        en: 'Large frugivores like **Hornbills (`Forest Gardeners`)** disperse massive canopy tree seeds; local custodianship (`Sacred Groves / Pakke`) protects entire ecosystems!',
        hi: '**हॉर्नबिल** बड़े वन बीजों के मुख्य प्रकीर्णक हैं; सामुदायिक संरक्षण (`पवित्र उपवन / पक्के मॉडल`) संपूर्ण पारिस्थितिकी बचाता है!',
      },
      predictQuestion: {
        prompt: { en: 'How did Sangam-era **Tinai landscapes** and India’s traditional **Sacred Groves** aid long-term biodiversity conservation?', hi: 'प्राचीन संगम साहित्य के **तिनई वर्गीकरण** व भारत के **पवित्र उपवनों** ने जैव विविधता संरक्षण में कैसे मदद की?' },
        options: {
          en: ['They preserved locally diverse habitats & endemic species intact', 'They replaced native trees with foreign eucalyptus only', 'They drained coastal mangrove swamps', 'They restricted forests to monoculture farming'],
          hi: ['इन्होंने स्थानीय रूप से विविध प्राकृ्तिक आवासों व स्थानिक प्रजातियों को अक्षुण्ण बचाया', 'इन्होंने देशी वृक्षों की जगह विदेशी वृक्ष लगाए', 'इन्होंने मैंग्रोव वन सुखा दिए', 'इन्होंने एकल-फसल खेती अनिवार्य की'],
        },
        correctIndex: 0,
        reason: {
          en: 'Verified in **Group D 2025 Shift 15**: Sacred groves & *Tinai* ecologically partitioned and protected distinct native habitats!',
          hi: '**Group D 2025 Shift 15 में पूछा गया**: इन्होंने स्थानीय विविध आवासों का सांस्कृतिक सुरक्षा के माध्यम से संरक्षण किया!',
        },
      },
    },
    {
      num: '12.3',
      title: { en: 'Activity 12.3: Designing Dichotomous Keys & Testing Aristotle’s Habitat Grouping Flaw', hi: 'क्रियाकलाप 12.3: द्विजगत/आवास वर्गीकरण की त्रुटियाँ व द्विभाजी कुंजी (`Dichotomous Key`)' },
      materials: { en: 'Specimens list: Earthworm, Bat, Eagle, Whale, Octopus, Mushroom, Hibiscus', hi: 'सूची: केंचुआ, चमगादड़, बाज, व्हेल, ऑक्टोपस, मशरूम, गुड़हल' },
      steps: {
        en: 'Group specimens first purely by *Land/Water/Air habitat* (`Aristotle`), then contrast by *Cell Wall, Notochord, Hair/Mammary & Feathers*.',
        hi: 'पहले जंतुओं को केवल *स्थल/जल/वायु आवास* के आधार पर बाँटें, फिर कशेरुक, पंख व स्तन-ग्रंथि गुणों से तुलना करें।',
      },
      examTakeaway: {
        en: 'Habitat unites unrelated organisms (`Whale [Mammal] + Octopus [Mollusc] + Rohu [Fish]` in water!) — true taxonomy requires **fundamental body design, cellular & evolutionary traits**!',
        hi: 'आवास आधारित वर्गीकरण गलत समूह बनाता है (`व्हेल व ऑक्टोपस जल में होते हुए भी भिन्न हैं!`); सही वर्गीकरण **कोशिका व शारीरिक रचना** पर आधारित होता है!',
      },
      predictQuestion: {
        prompt: { en: 'Why did placing **Bats, Eagles and Honeybees** in one "Aerial Group" fail scientifically under modern taxonomy?', hi: '**चमगादड़ (`स्तनधारी`), बाज (`पक्षी`) और मधुमक्खी (`कीट`)** को एक "वायुचर समूह" में रखना वैज्ञानिक रूप से क्यों अस्वीकृत हुआ?' },
        options: {
          en: ['They share only flight habitat while differing totally in skeleton, wings, heart & cellular origin', 'None of them possess wings', 'All three belong to Kingdom Protista', 'Bats photosynthesize while eagles don’t'],
          hi: ['केवल उड़ान आवास समान है जबकि कंकाल, हृदय कक्ष व उत्पत्ति पूर्णतः भिन्न वर्गों की हैं', 'इनमें किसी के पंख नहीं हैं', 'तीनों प्रोटिस्टा जगत के हैं', 'चमगादड़ स्वपोषी है'],
        },
        correctIndex: 0,
        reason: {
          en: 'Bat is a 4-chambered viviparous **Mammal**, Eagle is a feathered **Bird**, and Bee is a chitinous **Arthropod**!',
          hi: 'चमगादड़ स्तनधारी, बाज पक्षी व मधुमक्खी आर्थ्रोपोड संघ से है — मात्र समान आवास/उड़ान से वंश नहीं बदलता!',
        },
      },
    },
    {
      num: '12.4',
      title: { en: 'Activity 12.4: Monocot vs Dicot Root, Leaf Venation & Seed Cotyledon Lab', hi: 'क्रियाकलाप 12.4: एकबीजपत्री (`Monocot`) बनाम द्विबीजपत्री (`Dicot`) तुलना प्रयोगशाला' },
      materials: { en: 'Soaked Gram/Pea (`dicot`) & Maize/Wheat (`monocot`) seeds, Grass & Hibiscus leaves, intact weed roots', hi: 'भीगा चना/मटर व मक्का/गेहूँ, घास व गुड़हल पत्ती तथा जड़ सहित नमूने' },
      steps: {
        en: 'Split seed coats to count **cotyledons (`1 vs 2`)**; examine leaf veins (`parallel vs net reticulate`) and wash roots gently (`fibrous tuft vs central taproot`).',
        hi: 'बीज खोलकर बीजपत्र (`1 या 2`) गिनें, पत्ती में शिराविन्यास (`समानांतर या जालिकावत`) तथा जड़ (`रेशेदार या मूसला`) का मिलान करें।',
      },
      examTakeaway: {
        en: '**Monocots** = `1` cotyledon + parallel venation + fibrous roots; **Dicots** = `2` cotyledons + reticulate venation + taproot!',
        hi: '**एकबीजपत्री** = `1` बीजपत्र + समानांतर शिरा + झकड़ा/रेशेदार जड़; **द्विबीजपत्री** = `2` बीजपत्र + जालिकावत शिरा + मूसला जड़!',
      },
      predictQuestion: {
        prompt: { en: 'A field specimen shows net-like reticulate leaf veins and a strong deep central taproot. How many cotyledons will its soaked seeds reveal?', hi: 'एक पौधे की पत्तियों में जालिकावत शिराविन्यास व गहरी मुख्य मूसला जड़ है। इसके भीगे बीज में कितने बीजपत्र निकलेंगे?' },
        options: { en: ['Two (`Dicot`)', 'One (`Monocot`)', 'Zero (`Fern`)', 'Three'], hi: ['दो (`द्विबीजपत्री`)', 'एक (`एकबीजपत्री`)', 'शून्य (`फर्न`)', 'तीन'] },
        correctIndex: 0,
        reason: {
          en: 'Taproot + reticulate venation cleanly diagnose **Dicotyledons (`2 cotyledons`, e.g., Pea, Mustard, Mango)**!',
          hi: 'मूसला जड़ व जालिकावत शिराविन्यास सदैव **द्विबीजपत्री (`2 बीजपत्र`)** पादपों का अचूक लक्षण है!',
        },
      },
    },
    {
      num: '12.5',
      title: { en: 'Activity 12.5: Microscopic Observation of Protista in Pond Water & Hay Infusion', hi: 'क्रियाकलाप 12.5: तालाब जल व सूखी घास-फांट (`Hay Infusion`) में प्रोटिस्टा सूक्ष्मदर्शन' },
      materials: { en: 'Pond/stagnant water with dry hay kept `3–4 days` at warmth, dropper, slide & compound microscope', hi: '`3–4 दिन` रखी सूखी घास-जल फांट, ड्रॉपर, काँच स्लाइड व संयुक्त सूक्ष्मदर्शी' },
      steps: {
        en: 'Place surface scum/hay-drop under cover slip at `100×–400×` to spot gliding cilia (`Paramecium`), oozing pseudopodia (`Amoeba`), and green whip-swimming `Euglena`!',
        hi: 'फांट की एक बूँद स्लाइड पर रखकर पक्ष्माभ गति (`पैरामीशियम`), कूटपाद (`अमीबा`) एवं हरे कशाभ युक्त `यूग्लीना` को देखें।',
      },
      examTakeaway: {
        en: '**Protista** contains wildly diverse **unicellular eukaryotes**: motile ingestors (`Amoeba/Paramecium`) + green flagellates (`Euglena`) sharing ONLY **one cell + membrane nucleus** (`Group D Shifts 40, 44`)!',
        hi: '**प्रोटिस्टा** में विविध पोषण व आकार वाले **एककोशिकीय सुकेंद्रकी** आते हैं (`अमीबा, पैरामीशियम, यूग्लीना`) — इनका मुख्य गुण **केंद्रक झिल्ली की उपस्थिति** है!',
      },
      predictQuestion: {
        prompt: { en: 'In Activity 12.5 hay infusion, a student tracks a slipper-shaped eukaryote darting via thousands of short hair-like projections beating food into an oral groove. Identify it:', hi: 'क्र. 12.5 में चप्पल जैसे आकार वाला एककोशिकीय सुकेंद्रकी अपने चारों ओर नन्हें बालों (`पक्ष्माभ`) से भोजन एक निश्चित स्थान तक लाता दिखता है। वह क्या है?' },
        options: { en: ['Paramecium (`Cilia`)', 'Amoeba (`Pseudopodia`)', 'Cyanobacterium (`Prokaryote`)', 'Yeast (`Fungus`)'], hi: ['पैरामीशियम (`पक्ष्माभ / Cilia`)', 'अमीबा (`पादाभ`)', 'सायनोबैक्टीरियम', 'यीस्ट'] },
        correctIndex: 0,
        reason: {
          en: 'Verified **Group D 2025 Shifts 7, 27, 40**: **Paramecium** uses **cilia** (`silia`), whereas *Amoeba* uses **pseudopodia**!',
          hi: '**पैरामीशियम** कोशिका सतह पर स्थित **पक्ष्माभ (`Cilia`)** की लयबद्ध गति से भोजन अंतर्ग्रहण करता है!',
        },
      },
    },
    {
      num: '12.6',
      title: { en: 'Activity 12.6: Fern Sori (`Pteridophyta`) & Gymnosperm Cone Structure Study', hi: 'क्रियाकलाप 12.6–12.7: फर्न की पत्ती के नीचे बीजाणु सोराई (`टेरिडोफाइटा`) व पाइन शंकु का अध्ययन' },
      materials: { en: 'Mature Fern frond showing brown underside dots (`Sori`), hand lens, & woody Pine/Cycas cone', hi: 'पीछे भूरे बीजाणु धब्बों (`सोराई`) वाली परिपक्व फर्न पत्ती, आवर्धक लेंस व चीड़ शंकु' },
      steps: {
        en: 'Inspect brown spore dots (**sori**) under mature fern leaf (`NEVER seeds!`), contrasting vascular fern stem against seed-bearing exposed cone scales of Pine!',
        hi: 'फर्न पत्ती की निचली सतह पर भूरे **सोराई (`बीजाणुधानी गुच्छ`)** देखें व चीड़ के शंकु पर बिना फल आवरण वाले **नग्न बीजों** से तुलना करें।',
      },
      examTakeaway: {
        en: 'Ferns (**Pteridophyta**) possess **true vascular tissues (`xylem & phloem`)** yet reproduce via microscopic **spores (`NOT seeds`)**; Pine (**Gymnosperms**) evolved true **naked seeds** on cones!',
        hi: 'फर्न (`टेरिडोफाइटा`) प्रथम **संवहनी (`जाइलम-फ्लोएम`) पादप** हैं पर इनमें **बीज नहीं बीजाणु** बनते हैं; जबकि अनावृतबीजी में **शंकु पर नग्न बीज** आते हैं!',
      },
      predictQuestion: {
        prompt: { en: 'Are the tiny brown powdery dots on the underside of mature Fern leaves (`Act 12.6`) true seeds or asexual/meiotic spores?', hi: 'क्र. 12.6 में परिपक्व फर्न पत्ती के नीचे दिखने वाले भूरे दानेदार बिंदु (`सोराई`) वास्तविक बीज हैं या सूक्ष्म बीजाणु?' },
        options: {
          en: ['Microscopic Spores inside sporangia (`Pteridophyta have NO seeds!`)', 'Fruits with two cotyledons', 'Naked Pine seeds', 'Animal insect eggs only'],
          hi: ['बीजाणुधानी (`सोराई`) में स्थित सूक्ष्म बीजाणु (`टेरिडोफाइटा में बीज नहीं होते!`)', 'द्विबीजपत्री फल', 'नग्न पाइन बीज', 'कीटों के अंडे'],
        },
        correctIndex: 0,
        reason: {
          en: 'Seedless vascular **Pteridophyta** form spore-packed **sporangia (`sori`)** under leaves (`Group D Shifts 17, 24`)!',
          hi: 'टेरिडोफाइटा संवहनी होते हुए भी **बीज-रहित** हैं व पत्ती नीचे **बीजाणुधानी (`सोराई`)** में बीजाणु बनाते हैं!',
        },
      },
    },
    {
      num: '12.7',
      title: { en: 'Activity 12.7: Binomial Nomenclature Audit & Woese 3-Domain Specimen Sort', hi: 'क्रियाकलाप 12.7: द्विपद नामकरण त्रुटि-जाँच एवं कार्ल वूज 3-डोमेन वर्गीकरण अभ्यास' },
      materials: { en: 'Sample names: *panthera Tigris*, *Homo Sapiens*, *Mangifera indica*, *Pisum sativum*', hi: 'त्रुटिपूर्ण व मानक नाम सूची + 3-डोमेन (`बैक्टीरिया, आर्किया, यूकैरिया`) कार्ड' },
      steps: {
        en: 'Spot syntax mistakes in incorrectly cased/non-italic names; sort hot-spring microbes (*Archaea*), soil decomposers (*Bacteria*) & fungi/plants/animals (*Eukarya*).',
        hi: 'नाम लिखने में बड़े/छोटे अक्षर व रेखांकन नियम की गलतियाँ सुधारें व गर्म झरने के रोगाणुओं को आर्किया डोमेन में अलग करें।',
      },
      examTakeaway: {
        en: '**Genus Capitalized, species lowercase, printed italics or handwritten separate underlines** (`Mangifera indica`, `Pisum sativum`)! Hot-spring extremophiles sit in **Domain `Archaea`** (`Carl Woese 1977`).',
        hi: '**प्रथम वंश कैपिटल, द्वितीय जाति स्मॉल अक्षर, छपाई में इटैलिक / हस्तलेखन में अलग-अलग रेखांकित** (`Pisum sativum`)! गर्म जल के सूक्ष्मजीव **`आर्किया` डोमेन** में हैं!',
      },
      predictQuestion: {
        prompt: { en: 'Which written scientific format strictly obeys Carolus Linnaeus’s Binomial Nomenclature rules for Mango (`printed text`)?', hi: 'मुद्रित पाठ (`Printed text`) में आम के वैज्ञानिक नाम को लिखने का कैरोलस लिनियस के नियमों के अनुसार सही स्वरूप कौन-सा है?' },
        options: {
          en: ['*Mangifera indica* (`Capital Genus + lowercase species, both italicised`)', '*mangifera Indica*', '*MANGIFERA INDICA*', 'Mangifera Indica (`both unformatted capitalised`)'],
          hi: ['*Mangifera indica* (`प्रथम वंश बड़ा अक्षर, द्वितीय जाति छोटा अक्षर, इटैलिक`)', '*mangifera Indica*', '*MANGIFERA INDICA*', 'Mangifera Indica (`दोनों बड़े अक्षर बिना तिरछे`)'],
        },
        correctIndex: 0,
        reason: {
          en: 'Rule 1–4 check: Capital **`M`**angifera + lowercase **`i`**ndica, italicised in print or underlined separately by hand!',
          hi: 'नियम: वंश का पहला अक्षर बड़ा (`M`), जाति का छोटा (`i`) तथा मुद्रण में तिरछा (`Italics`) अनिवार्य है!',
        },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-12-bio-1',
      title: { en: 'R.H. Whittaker’s 5-Kingdom Master Comparison (`1969` + `Woese 1977` Domains)', hi: 'व्हिटेकर के पाँच-जगत वर्गीकरण (`1969`) व कार्ल वूज 3-डोमेन की संपूर्ण तुलना सारणी' },
      headers: {
        en: ['Kingdom (`Woese Domain`)', 'Cell & Nuclear Membrane', 'Cell Wall Chemistry', 'Nutrition & Classic Examples'],
        hi: ['जगत (`वूज डोमेन`)', 'कोशिका प्रकार व केंद्रक', 'कोशिका भित्ति रसायन', 'पोषण विधा व प्रमुख NCERT उदाहरण'],
      },
      rows: [
        [
          { en: '**1. Monera** (`Bacteria & Archaea`)', hi: '**1. मोनेरा** (`बैक्टीरिया व आर्किया`)' },
          { en: 'Unicellular **Prokaryote** (`NO nuclear membrane`)', hi: 'एककोशिकीय **प्राक्केंद्रकी** (`झिल्ली-बद्ध केंद्रक नहीं!`)' },
          { en: 'Present (`Peptidoglycan` in Bacteria; distinct in Archaea)', hi: 'उपस्थित (`बैक्टीरिया: पेप्टिडोग्लाइकैन`; आर्किया भिन्न!)' },
          { en: 'Autotrophic (`Cyanobacteria`) OR Heterotrophic (*E. coli*, **Sitapur Biogas**)', hi: 'स्वपोषी (`सायनोजीवाणु`) या परपोषी (*ई.कोलाई*, **सीतापुर बायोगैस**)' },
        ],
        [
          { en: '**2. Protista** (`Domain Eukarya`)', hi: '**2. प्रोटिस्टा** (`डोमेन यूकैरिया`)' },
          { en: 'Unicellular **Eukaryote** (`true membrane nucleus`!)', hi: 'एककोशिकीय **सुकेंद्रकी** (`वास्तविक झिल्ली-बद्ध केंद्रक`!)' },
          { en: 'Absent in *Amoeba/Paramecium*; rigid wall in *Chlamydomonas*', hi: '*अमीबा/पैरामीशियम* में नहीं; *क्लैमाइडोमोनास* में दृढ़ भित्ति' },
          { en: 'Ingestive (`Amoeba` pseudopodia, `Paramecium` cilia) + Mixotroph (*Euglena*)', hi: 'विविध पोषण: कूटपाद (*अमीबा*), सिलिया (*पैरामीशियम*), कशाभ (*यूग्लीना*)' },
        ],
        [
          { en: '**3. Fungi** (`Domain Eukarya`)', hi: '**3. कवक (`Fungi`)**' },
          { en: 'Multicellular **Eukaryote** (`Exception: 1-cell Yeast`)', hi: 'बहुकोशिकीय **सुकेंद्रकी** (`अपवाद: एककोशिक यीस्ट!`)' },
          { en: '**==CHITIN (`काइटिन`)==** (`NEVER Cellulose`!)', hi: '**==काइटिन (`Chitin`)==** (`सेल्युलोज़ कभी नहीं!`)' },
          { en: '**Saprotrophic absorbers** via mycelium (*Mushroom 30–45d*, *Rhizopus*, *Penicillium*)', hi: 'कवकजाल द्वारा **मृतजीवी अवशोषण** (*मशरूम, राइजोपस, पेनिसिलियम*)' },
        ],
        [
          { en: '**4. Plantae** (`Domain Eukarya`)', hi: '**4. पादप (`Plantae`)**' },
          { en: 'Multicellular **Eukaryote** (`tissue/organ level`)', hi: 'बहुकोशिकीय **सुकेंद्रकी** (`ऊतक-अंग स्तर`)' },
          { en: '**Cellulose** + Chloroplasts', hi: '**सेल्युलोज़ (`Cellulose`)** + क्लोरोप्लास्ट' },
          { en: '**Photosynthetic Autotrophs** (`5 divisions`; rare **Nepenthes** traps insects for N)', hi: '**प्रकाश-संश्लेषी स्वपोषी** (`5 प्रभाग`; अपवाद घटपर्णी कीटभक्षी)' },
        ],
        [
          { en: '**5. Animalia** (`Domain Eukarya`)', hi: '**5. जंतु (`Animalia`)**' },
          { en: 'Multicellular **Eukaryote** (`organ-system level`)', hi: 'बहुकोशिकीय **सुकेंद्रकी** (`जटिल अंग तंत्र`)' },
          { en: '**ABSENT (`NO Cell Wall`!)**', hi: '**अनुपस्थित (`कोई कोशिका भित्ति नहीं`!)**' },
          { en: '**Holozoic / Ingestive Heterotrophs** + locomotion (*Sponges* to *Mammals*)', hi: '**अंतर्ग्रहण परपोषी** व गतिशील (*स्पंज* से *नीलगिरि तहर/मानव*)' },
        ],
      ],
    },
    {
      id: 'tbl-12-bio-2',
      title: { en: 'Five Divisions of Kingdom Plantae (`Thallophyta → Angiosperms`, NCERT Sec 12.6.4)', hi: 'जगत पादप के पाँचों प्रभागों (`थैलोफाइटा → आवृतबीजी`) की तुलनात्मक परीक्षा सारणी' },
      headers: {
        en: ['Plant Division (`Group`)', 'Body Differentiation & Vascular Tubes', 'Seeds / Flowers & Fertilisation Rule', 'NCERT Examples & Exam Tags'],
        hi: ['पादप प्रभाग', 'शारीरिक विभेदन व संवहन ऊतक', 'बीज / पुष्प व निषेचन नियम', 'प्रमुख उदाहरण व परीक्षा बिंदु'],
      },
      rows: [
        [
          { en: '**1. Thallophyta** (`Algae` — Cryptogam)', hi: '**1. थैलोफाइटा (`शैवाल`)**' },
          { en: 'Undifferentiated thallus (`NO roots/stems/leaves`, NO xylem)', hi: 'अविभेदित थैलस (`जड़-तना-पत्ती व संवहन ऊतक रहित`)' },
          { en: 'No seeds, no flowers; spores/fragmentation in water', hi: 'बीज व पुष्प नहीं; मुख्यतः जलीय' },
          { en: '*Spirogyra, Ulothrix, Chara* (`Group D Shifts 11, 33`; `Lichen` host!)', hi: '*स्पाइरोगाइरा, यूलोथ्रिक्स, कारा* (`लाइकेन का शैवाल साथी`)' },
        ],
        [
          { en: '**2. Bryophyta** (`Plant Amphibians`)', hi: '**2. ब्रायोफाइटा (`पादप उभयचर`)**' },
          { en: 'Stem/leaf-like + **rhizoids**; **NO xylem or phloem**', hi: 'तना-पत्ती सदृश काय व **मूलाभास**; संवहनी ऊतक नहीं' },
          { en: 'No seeds; **external water film mandatory** for fertilisation', hi: 'बीज नहीं; **निषेचन हेतु नमी/जल अनिवार्य**' },
          { en: '**Marchantia, Riccia, Funaria (`Moss`)** (`Group D 28`, `ALP Match`)', hi: '**मार्केंशिया, रिक्सिया, मॉस (`फ्यूनेरिया`)** (`हरी चट्टानी गलीचे`)' },
        ],
        [
          { en: '**3. Pteridophyta** (`1st Vascular`)', hi: '**3. टेरिडोफाइटा (`प्रथम संवहनी`)**' },
          { en: '**True Roots, Stems, Leaves + Xylem & Phloem!**', hi: '**वास्तविक जड़-तना-पत्ती + जाइलम व फ्लोएम उपस्थित!**' },
          { en: '**NO seeds (`spores in sori`)**; still **depends on water** for gametes', hi: '**बीज नहीं (`सोराई में बीजाणु`)**; जल पर निर्भर निषेचन' },
          { en: '**Ferns (`Pteridium`), Marsilea** (`Act 12.6–12.7`, `Shifts 17, 24`)', hi: '**फर्न (`टेरिडियम`), मार्सीलिया** (`क्र. 12.6`; प्रथम संवहनी!)' },
        ],
        [
          { en: '**4. Gymnosperms** (`Naked Seeds`)', hi: '**4. अनावृतबीजी (`जिम्नोस्पर्म`)**' },
          { en: 'Woody evergreen perennials; vascular + **drought needles**', hi: 'बहुवर्षीय काष्ठीय वृक्ष; सुई-पत्तियाँ सूखारोधी (`Shift 6`)' },
          { en: '**Naked seeds (`not in fruits`)** on cones; NO water needed for pollen!', hi: '**नग्न बीज (`फल नहीं`)** शंकुओं पर; जल-निर्भरता समाप्त!' },
          { en: '**Pine (`Pinus`), Deodar, Cycas** (`Shifts 6, 30, 43`)', hi: '**चीड़ (`पाइन`), देवदार, साइकस**' },
        ],
        [
          { en: '**5. Angiosperms** (`Flowering Plants`)', hi: '**5. आवृतबीजी (`एंजियोस्पर्म`)**' },
          { en: 'Vascular flowers & **Monocot (`1` cotyledon, fibrous)** vs **Dicot (`2`, taproot)**', hi: 'पुष्प व संवहनी ऊतक (`एकबीजपत्री` vs `द्विबीजपत्री`)' },
          { en: '**Seeds safely enclosed inside Fruits (`Ovary`)** -> max diversity!', hi: '**फल के भीतर सुरक्षित बंद बीज** (`सर्वाधिक विविधता`, `Shift 25`)' },
          { en: '*Pea, Mustard, Wheat, Gulmohar* (`Hortus Malabaricus` `720` spp)', hi: '*मटर, गेहूँ, गुलमोहर, सरसों* (`हॉर्टस मलाबारिकस`: **इट्टी अचुतन**)' },
        ],
      ],
    },
    {
      id: 'tbl-12-bio-3',
      title: { en: '8 Non-Chordata Animalia Phyla Progression Matrix (`NCERT Sec 12.6.5`)', hi: 'जंतु जगत के 8 अकशेरुकी (`नॉन-कॉर्डेटा`) संघों का क्रमिक तुलनात्मक चार्ट' },
      headers: {
        en: ['Phylum (`Order`)', 'Body Cavity / Symmetry & Germ Organisation', 'Signature Anatomical Feature', 'Canonical NCERT Examples'],
        hi: ['अकशेरुकी संघ', 'सममिति, स्तर व देहगुहा', 'अद्वितीय शारीरिक पहचान', 'प्रमुख उदाहरण व परीक्षा बिंदु'],
      },
      rows: [
        [
          { en: '**1. Porifera** (`Sponges`)', hi: '**1. पॉरीफेरा** (`स्पंज`)' },
          { en: 'Cellular level (`no tissues`), asymmetrical, non-motile', hi: 'कोशिकीय स्तर (`ऊतक नहीं`), असममित, अचल' },
          { en: 'Pores (`ostia`) & water **canal filter system** (`24,000 L/d/kg`)', hi: 'शरीर में छिद्र व जल **नाल तंत्र** (`जल निस्यंदन`)' },
          { en: '*Sycon, Spongilla, Euplectella*', hi: '*साइकॉन, स्पॉन्जिला*' },
        ],
        [
          { en: '**2. Cnidaria / Coelenterata**', hi: '**2. नाइडेरिया / सीलेंट्रेटा**' },
          { en: 'Tissue level, radial symmetry, single gastro-cavity opening', hi: 'ऊतक स्तर, अरीय सममिति, केवल एक मुख-गुहा' },
          { en: '**Stinging cells (`cnidoblasts`)** on tentacles; coral skeletons', hi: 'स्पर्शकों पर **दंश कोशिकाएँ** (`प्रवाल भित्तियाँ`)' },
          { en: '*Hydra, Jellyfish (`Aurelia`), Sea Anemone, Corals*', hi: '*हाइड्रा, जेलिफिश, कोरल (`प्रवाल`)*' },
        ],
        [
          { en: '**3. Platyhelminthes** & **4. Nematoda**', hi: '**3. प्लेटीहेल्मिंथीज** व **4. निमेटोडा**' },
          { en: 'Organ bilateral: Platy = flat acoelomate; Nematoda = pseudocoelom', hi: 'द्विपार्श्व सममित: चपटे (`देहगुहा नहीं`) बनाम गोलकृमि' },
          { en: 'Platy = **hooks/suckers**; Nematoda = **2-opening one-way digestive tube (`Shift 12`)**!', hi: 'प्लेटी = हुक/चूषक; **निमेटोडा = दो देह-द्वार (`मुख + गुदा`) पाचन!**' },
          { en: '*Tapeworm, Planaria* (`Platy`); *Ascaris, Wuchereria* (`Nematoda`)', hi: '*फीताकृमि, प्लेनेरिया*; *एस्केरिस गोलकृमि*' },
        ],
        [
          { en: '**5. Annelida** & **6. Arthropoda (`MAX`)**', hi: '**5. एनेलिडा** व **6. आर्थ्रोपोडा (`सबसे बड़ा संघ`)**' },
          { en: 'True **coelom** & organ-system level; bilateral segmented', hi: 'वास्तविक **देहगुहा (`Coelom`)** व अंग-तंत्र स्तर' },
          { en: 'Annelida = metameric rings; **Arthropoda = Jointed legs + CHITIN exoskeleton!**', hi: 'एनेलिडा = वास्तविक खंड; **आर्थ्रोपोडा = संधिपाद + काइटिन बाह्यकंकाल!**' },
          { en: '*Earthworm, Leech* (`Annelida`); *Crab, Butterfly, Spider* (`Arthropoda`)', hi: '*केंचुआ, जोंक*; *केकड़ा, तितली, मकड़ी, तिलचट्टा*' },
        ],
        [
          { en: '**7. Mollusca** & **8. Echinodermata**', hi: '**7. मोलस्का** व **8. इकाइनोडर्मेटा**' },
          { en: 'Soft bilateral unsegmented (`Mollusca`) vs Radial adult pentamerous (`Echino`)', hi: 'कोमल अखंड (`मोलस्का`) बनाम समुद्री पंच-अरीय (`इकाइनो`)' },
          { en: 'Mollusca = **muscular foot + CaCO₃ shell**; Echino = **spiny CaCO₃ endoskeleton!**', hi: 'मोलस्का = पेशीय पाद व कवच; इकाइनो = **`CaCO₃` शूल अंतःकंकाल!**' },
          { en: '*Snail, Octopus, Mussel*; *Starfish, Sea Urchin* (`exclusively marine!`)', hi: '*घोंघा, ऑक्टोपस, सीप*; *स्टारफिश (`केवल समुद्री!`)*' },
        ],
      ],
    },
    {
      id: 'tbl-12-bio-4',
      title: { en: 'Vertebrata 5 Classes + Protochordata (`Hearts, Thermoregulation & Exoskeleton`)', hi: 'कशेरुकी के 5 वर्ग + प्रोटोकॉर्डेटा (`हृदय कक्ष, सम/असमतापी व विशिष्ट गुण`)' },
      headers: {
        en: ['Chordata Group / Class', 'Heart Chambers & Blood Temp', 'Skin Cover & Respiratory Organ', 'Reproduction & Examples'],
        hi: ['कॉर्डेटा समूह / वर्ग', 'हृदय कक्ष व रक्त ताप', 'बाह्य आवरण व श्वसन अंग', 'जनन प्रकार व मुख्य उदाहरण'],
      },
      rows: [
        [
          { en: '**Protochordata** (`Sub-phylum`)', hi: '**प्रोटोकॉर्डेटा** (`आदि कॉर्डेट`)' },
          { en: 'No vertebral column yet; dorsal **notochord** present', hi: 'मेरुदंड नहीं, पर लचीला **पृष्ठरज्जु (`Notochord`)**' },
          { en: 'Marine soft/tunicate body; pharyngeal **gill slits**', hi: 'समुद्री शरीर; ग्रसनी **क्लोम दरारें**' },
          { en: '*Amphioxus (`Lancelet`), Herdmania*', hi: '*एम्फिऑक्सस, हर्डमानिया*' },
        ],
        [
          { en: '**1. Pisces** (`Fishes`)', hi: '**1. मत्स्य (`Pisces`)**' },
          { en: '**`2` Chambers** (`Cold-blooded`)', hi: '**`2` कक्ष** (`असमतापी`, एकल प्रवाह)' },
          { en: 'Streamlined wet **scales**; **Gills (`O₂` from water)**', hi: 'धारारेखित शल्क; **क्लोम (`Gills`)**' },
          { en: 'Oviparous external water eggs -> *Rohu, Catla, Shark (`cartilage`)*', hi: 'अंडज जल में; *रोहू, कतला, शार्क (`उपास्थि कंकाल`)*' },
        ],
        [
          { en: '**2. Amphibia** (`Frogs/Toads`)', hi: '**2. उभयचर (`Amphibia`)**' },
          { en: '**`3` Chambers** (`Cold-blooded`, `Tech 3 Shift 13`)', hi: '**`3` कक्ष** (`असमतापी` — `2` आलिंद + `1` निलय)' },
          { en: '**Slimy mucous scale-less skin**; **Gills (`larva`), Lungs + Skin**', hi: '**श्लेष्म नम त्वचा (`शल्क रहित`)**; लार्वा क्लोम + वयस्क फेफड़े/त्वचा' },
          { en: 'Shell-less eggs in water -> *Frog, Salamander,* ***Purple Frog (`2003`)***', hi: 'जल में कवच-रहित अंडे; *मेंढक,* ***बैंगनी मेंढक (`2003`)***' },
        ],
        [
          { en: '**3. Reptilia** (`Creepers`)', hi: '**3. सरीसृप (`Reptilia`)**' },
          { en: '**`3` Chambers** (**Crocodile = `4` Exception!**) (`Cold-blooded`)', hi: '**`3` कक्ष** (**अपवाद: मगरमच्छ = `4`!**) (`असमतापी`)' },
          { en: 'Dry keratin **epidermal scales**; **Lungs**', hi: 'सूखे **शल्क (`जल हानि रोधी`)**; केवल **फेफड़े**' },
          { en: 'Internal fertilisation, **leathery eggs on land** -> *Chameleon, Cobra, Crocodile*', hi: 'आंतरिक निषेचन, स्थल पर चर्मिल अंडे; *गिरगिट, साँप, कछुआ*' },
        ],
        [
          { en: '**4. Aves** & **5. Mammalia**', hi: '**4. पक्षी (`Aves`)** व **5. स्तनधारी (`Mammalia`)**' },
          { en: '**`4` Chambers** (`Warm-blooded Endotherms!`)', hi: '**`4` कक्ष** (`समतापी` — पूर्ण O₂/CO₂ पृथक्करण!)' },
          { en: 'Aves = **feathers + hollow bones**; Mammalia = **hair, ear pinnae, lungs**', hi: 'पक्षी = **पंख व खोखली अस्थियाँ**; स्तनधारी = **बाल, बाह्य कर्ण**' },
          { en: 'Aves oviparous (`Hornbill`); Mammals viviparous + **mammary glands** (*Human, Tahr, Sangai*)', hi: 'पक्षी अंडज (*हॉर्नबिल*); स्तनधारी **स्तन ग्रंथियाँ** व जरायुज (*संगाई*)' },
        ],
      ],
    },
    {
      id: 'tbl-12-bio-5',
      title: { en: '7-Rank Taxonomic Hierarchy Comparison & Ex 15 (`P–T`) Specimen Identification Key', hi: '7-स्तरीय वर्गीकरण (`बाघ व मटर`) एवं NCERT अभ्यास प्रश्न 15 (`P–T`) निर्णय कुंजी' },
      headers: {
        en: ['Taxonomic Rank / Ex 15 Code', 'Indian Tiger (`Animalia`)', 'Garden Pea (`Plantae`)', 'NCERT Ex 15 (`P–T`) Solution Key'],
        hi: ['पदानुक्रम स्तर / Q15 कोड', 'बाघ (`पैंथेरा टाइग्रिस`)', 'मटर (`पाइसम सैटाइवम`)', 'अभ्यास Q15 (`P–T`) सत्यापित कुंजी'],
      },
      rows: [
        [
          { en: '**Kingdom -> Phylum/Division**', hi: '**जगत → संघ / प्रभाग**' },
          { en: '`Animalia` -> `Chordata`', hi: '`ऐनिमेलिया` → `कॉर्डेटा`' },
          { en: '`Plantae` -> `Angiospermae`', hi: '`प्लांटी` → `एंजियोस्पर्मी`' },
          { en: '**Specimen `P`**: No true nucleus -> **Monera (`Q15 ii`)**!', hi: '**नमूना `P`**: वास्तविक केंद्रक नहीं → **मोनेरा (`Q15 ii`)**!' },
        ],
        [
          { en: '**Class -> Order -> Family**', hi: '**वर्ग → गण → कुल**' },
          { en: '`Mammalia` -> `Carnivora` -> `Felidae`', hi: '`मैमेलिया` → `कार्नीवोरा` → `फेलिडी`' },
          { en: '`Dicotyledonae` -> `Fabales` -> `Fabaceae`', hi: '`डाइकॉट` → `फैबेल्स` → `फैबेसी`' },
          { en: '**Specimen `Q`**: Multi-cell + Wall + Photo -> **Plantae (`Q15 i`)**!', hi: '**नमूना `Q`**: बहुकोशिक, भित्ति, प्रकाश संश्लेषण → **पादप (`Q15 i`)**!' },
        ],
        [
          { en: '**Genus (`Capital`) -> Species (`small`)**', hi: '**वंश (`बड़ा अक्षर`) → जाति (`छोटा अक्षर`)**' },
          { en: '***Panthera*** -> ***tigris***', hi: '***Panthera*** → ***tigris***' },
          { en: '***Pisum*** -> ***sativum***', hi: '***Pisum*** → ***sativum***' },
          { en: '**`R`** = Protista (`uni vs Q multi` **level of org.** `Q15 iii`); **`S`** = Animalia; **`T`** = **Virus (`Acellular Q15 v`)**!', hi: '**`R`** = प्रोटिस्टा (`Q` संग **संगठन स्तर** भेद); **`S`** = जंतु; **`T`** = **अकोशिकीय विषाणु (`Q15 v`)**!' },
        ],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'Think 1',
      q: { en: 'Why are **whales and bats** NOT grouped with fish and birds respectively, despite swimming in oceans and flying in air?', hi: 'महासागर में तैरने पर भी **व्हेल** को मछली में व हवा में उड़ने पर भी **चमगादड़** को पक्षी वर्ग में क्यों नहीं रखा जाता?' },
      a: { en: 'Both share deep vertebrate traits of **Class Mammalia** — **4-chambered warm-blooded hearts, lungs (`blowholes/nostrils`), mammary milk glands & hair**, whereas habitat/fins/wings are superficial!', hi: 'व्हेल व चमगादड़ दोनों में **स्तनधारी वर्ग** के मूल लक्षण (**4-कक्षीय समतापी हृदय, फेफड़ों से श्वसन, स्तन ग्रंथियाँ व जरायुज शिशु जन्म**) हैं — मात्र समान जल/वायु आवास से वंश नहीं बदलता!' },
    },
    {
      num: 'Think 2',
      q: { en: 'What makes a region qualify strictly as a **Global Biodiversity Hotspot** (`give India’s 4 hotspots`)?', hi: 'किसी क्षेत्र को **वैश्विक जैव विविधता हॉटस्पॉट (`अतिक्षेत्र`)** किस आधार पर घोषित किया जाता है? भारत के 4 हॉटस्पॉट लिखिए।' },
      a: { en: 'Two conditions (`Group D Shifts 19, 34`): `(1)` Exceptionally high count of **endemic species**, AND `(2)` Severe **habitat loss (`>70%` original vegetation degraded)**. India’s 4: **Western Ghats, Himalaya, Indo-Burma, Sundaland**.', hi: 'दो शर्तें (`Shift 19`): `(1)` अत्यंत उच्च **स्थानिक प्रजाति घनत्व**, और `(2)` **गंभीर आवास ह्रास (`>70%` क्षति)**। भारत में 4: **पश्चिमी घाट, हिमालय, इंडो-बर्मा, सुंडालैंड**।' },
    },
    {
      num: 'Think 3',
      q: { en: 'Why did Linnaeus’s 2-Kingdom system (`Plantae vs Animalia`) fail cleanly on **Euglena** & **Amoeba**?', hi: 'लिनियस की द्विजगत प्रणाली **यूग्लीना** एवं **अमीबा** का सटीक वर्गीकरण क्यों नहीं कर पाई?' },
      a: { en: '*Amoeba* is single-celled, lacks a rigid cell wall, yet moves & engulfs (`Shift 20`); *Euglena* lacks a rigid cell wall & swims by flagellum like animals while photosynthesizing via chlorophyll like plants (`solved by Haeckel’s Protista`)!', hi: '*अमीबा* एककोशिक व भित्ति-रहित चलनशील परपोषी है, जबकि *यूग्लीना* जंतुओं की भाँति तैरते हुए प्रकाश में पादपों समान प्रकाश संश्लेषण करता है (`हेकेल ने प्रोटिस्टा में सुधारा`)!' },
    },
    {
      num: 'Think 4',
      q: { en: 'Which single diagnostic feature immediately proves a tiny sample organism belongs to **Protista** rather than **Monera**?', hi: 'केवल किस एक सूक्ष्मदर्शी लक्षण से आप तुरंत सिद्ध करेंगे कि दिया गया एककोशिकीय जीव **मोनेरा नहीं बल्कि प्रोटिस्टा** है?' },
      a: { en: 'Presence of a **well-defined membrane-bound nucleus (`eukaryotic organisation`)** & membranous organelles (`Group D Shift 44`) — completely absent in prokaryotic Monera!', hi: '**झिल्ली-बद्ध वास्तविक केंद्रक (`सुकेंद्रकी संगठन`)** व कोशिकांगों की उपस्थिति (`Shift 44`), जो प्राक्केंद्रकी मोनेरा में पूर्णतः अनुपस्थित होता है!' },
    },
    {
      num: 'Think 5',
      q: { en: 'How do **Fungi (`mushrooms/bread mould`)** differ fundamentally from green **Algae (`Spirogyra`)** in cell wall & nutrition?', hi: '**कवक (`मशरूम/फफूँद`)** तथा हरे **शैवाल (`स्पाइरोगाइरा`)** में कोशिका भित्ति व पोषण की दृष्टि से मुख्य अंतर क्या है?' },
      a: { en: 'Algae have **cellulose cell walls & chlorophyll (`autotrophs`)**; Fungi have **==Chitin cell walls (`zero chlorophyll`)==** and are **saprotrophic heterotrophs** absorbing external-digested nutrients via **mycelium** (`Shift 9`)!', hi: 'शैवाल में **सेल्युलोज़ भित्ति व क्लोरोफिल (`स्वपोषी`)** होता है; जबकि कवक में **==काइटिन भित्ति (`क्लोरोफिल रहित`)==** होती है और ये **मृतजीवी परपोषी** हैं!' },
    },
    {
      num: 'Think 6',
      q: { en: 'Why are **Bryophytes (`Marchantia / Moss`)** famously called the *"Amphibians of the Plant Kingdom"*, whereas **Ferns (`Pteridophyta`)** are the first land pioneers?', hi: '**ब्रायोफाइटा (`मॉस/मार्केंशिया`)** को *"पादप जगत का उभयचर"* व **टेरिडोफाइटा (`फर्न`)** को प्रथम संवहनी भू-पादप क्यों कहते हैं?' },
      a: { en: 'Bryophytes colonised damp soil yet lack xylem/phloem & need surface water films so flagellated male gametes can swim to eggs; **Pteridophyta** evolved true roots, stems, leaves & **vascular xylem/phloem** (`yet remain seedless`)!', hi: 'ब्रायोफाइटा भूमि पर उगने पर भी संवहनी ऊतक-रहित हैं व निषेचन हेतु जल में तैरते युग्मकों पर निर्भर हैं; जबकि **फर्न (`टेरिडोफाइटा`)** में प्रथम बार **जाइलम-फ्लोएम व वास्तविक जड़-तना-पत्ती** विकसित हुए!' },
    },
    {
      num: 'Think 7',
      q: { en: 'Why are **Gymnosperms (`like Pine`)** much better adapted to drought & snowy mountain habitats than Ferns (`Pteridophyta`)?', hi: 'सूखे व बर्फीले पर्वतों में **अनावृतबीजी (`चीड़/देवदार`)**, **फर्न (`टेरिडोफाइटा`)** की तुलना में अधिक सफल क्यों हैं?' },
      a: { en: 'Gymnosperms have waxy **needle-like leaves restricting water loss (`Shift 6`)**, deep woody vascular roots, AND wind-dispersed pollen needing **NO external water for fertilisation** (`unlike ferns`, `Shift 43`)!', hi: 'अनावृतबीजी में **सुई जैसी पत्तियाँ वाष्पोत्सर्जन घटाती हैं (`Shift 6`)** तथा परागण हवा से होने के कारण **निषेचन हेतु जल की बाध्यता नहीं रहती (`Shift 43`)**!' },
    },
    {
      num: 'Think 8',
      q: { en: 'Which invertebrate phylum shows BOTH the **largest species count on Earth** AND a **chitinous exoskeleton**?', hi: 'पृथ्वी पर **सर्वाधिक प्रजाति संख्या** रखने वाला तथा **काइटिन बाह्यकंकाल** युक्त अकशेरुकी जंतु संघ कौन-सा है?' },
      a: { en: '**==Phylum Arthropoda==** (`jointed appendages`, segmented body, open circulatory hemocoel — *insects, crabs, spiders, scorpions*).', hi: '**==संघ आर्थ्रोपोडा (`Arthropoda`)==** — संधिपाद उपांग व काइटिन का बाह्यकंकाल इसकी प्रमुख विशेषता है।' },
    },
    {
      num: 'Think 9',
      q: { en: 'List the ascending number of **heart chambers** across **Pisces -> Amphibia -> Reptilia -> Aves/Mammalia** and state the single reptile exception!', hi: '**मत्स्य → उभयचर → सरीसृप → पक्षी/स्तनधारी** में हृदय कक्षों का क्रम तथा सरीसृप अपवाद लिखिए।' },
      a: { en: '**Pisces (`2`) -> Amphibia (`3`) -> Reptilia (`3` — *Exception: Crocodile has `4`!*) -> Aves (`4`) & Mammalia (`4`)** (`complete separation fuels warm-blooded metabolism`)!', hi: '**मत्स्य (`2`) → उभयचर (`3`) → सरीसृप (`3` — अपवाद: मगरमच्छ `4`!) → पक्षी (`4`) एवं स्तनधारी (`4`)**!' },
    },
    {
      num: 'Think 10',
      q: { en: 'Between **Class** and **Genus**, organisms in which taxonomic rank share MORE closely related traits? Name two flagship endangered Indian endemics from NCERT Sec `12.9–12.10`.', hi: '**वर्ग (`Class`)** और **वंश (`Genus`)** में से किस स्तर के जीवों में परस्पर अधिक समानता होगी? `12.9–12.10` से दो भारतीय धरोहर जीव बताइए।' },
      a: { en: '**Genus** sits much closer to Species than Class -> members share far more traits! Flagships: **Purple Frog (`Nasikabatrachus sahyadrensis`, `2003` Western Ghats)** & **Sangai dancing deer (`Keibul Lamjao floating Phumdis, Manipur`, rediscovered `1953`)**!', hi: 'जाति के अत्यंत निकट होने से **वंश (`Genus`)** के जीवों में सर्वाधिक समानता होगी! दो धरोहर जीव: **बैंगनी मेंढक (`2003`, पश्चिमी घाट)** व **संगाई हिरण (`केइबुल लामजाओ तैरती फुमडी, मणिपुर`, `1953`)**!' },
    },
  ],
  exercises: [
    {
      num: '1 (`ihsc1an: ii`)',
      q: { en: 'NCERT Ex 1 (`ihsc1an Key Verified: (ii)`): Which pair/option correctly identifies eukaryotic chitin-walled decomposers / damp-rock amphibians?', hi: 'अभ्यास 1 (`ihsc1an सत्यापित उत्तर: (ii)`): दिए गए लक्षणों के आधार पर सही वर्ग विकल्प चुनिए।' },
      a: { en: '**(ii)**: Organisms lacking chlorophyll with **chitin cell walls (`Fungi`)** / **Bryophyta** possessing rhizoids & requiring moisture films without vascular vessels!', hi: '**(ii)**: सही विकल्प — कवक की **काइटिन कोशिका भित्ति (`क्लोरोफिल-रहित मृतजीवी`)** व ब्रायोफाइटा की निषेचन जल निर्भरता को सटीक दर्शाता है।' },
    },
    {
      num: '2 (`ihsc1an: iii`)',
      q: { en: 'NCERT Ex 2 (`ihsc1an Key Verified: (iii)`): Identify the vascular **seedless** terrestrial division (`or largest chitin-jointed phylum`).', hi: 'अभ्यास 2 (`ihsc1an सत्यापित उत्तर: (iii)`): वास्तविक जड़-तना-पत्ती व संवहनी ऊतक युक्त **बीज-रहित** पादप समूह चुनिए।' },
      a: { en: '**(iii) Pteridophyta (`Ferns`)** — pioneers of **true roots, stems, leaves & xylem/phloem** yet reproducing cleanly via underside spores rather than seeds!', hi: '**(iii) टेरिडोफाइटा (`फर्न`)**: इनमें वास्तविक संवहनी ऊतक (`जाइलम व फ्लोएम`) होते हैं, पर बीज नहीं बनते केवल बीजाणु बनते हैं!' },
    },
    {
      num: '3',
      q: { en: 'Why did **Aristotle’s habitat-based grouping** create bizarre clusters while **Whittaker (`1969`)** achieved biological clarity?', hi: 'अरस्तू का आवास-आधारित वर्गीकरण क्यों विफल रहा और **व्हिटेकर (`1969`)** प्रणाली क्यों सफल मानी जाती है?' },
      a: { en: 'Aristotle lumped dolphins (`mammals`), sharks (`fish`) & squid (`molluscs`) merely by water living; **Whittaker** classified via **cell structure (`pro/eukaryote`), complexity, cell walls, nutrition & evolutionary ancestry**!', hi: 'अरस्तू ने व्हेल, शार्क व झींगे को केवल पानी में रहने के कारण साथ रख दिया; **व्हिटेकर (`1969`)** ने कोशिका प्रकार, संगठन, भित्ति रसायन, पोषण व विकास-संबंधों को आधार बनाया!' },
    },
    {
      num: '4',
      q: { en: 'Why are **Carl Woese’s (`1977`) 3 Domains** (`Bacteria, Archaea, Eukarya`) important today compared to grouping all prokaryotes inside Monera?', hi: 'सभी प्राक्केंद्रकियों को केवल मोनेरा में रखने की तुलना में **कार्ल वूज (`1977`) का 3-डोमेन वर्गीकरण** क्यों महत्वपूर्ण है?' },
      a: { en: 'Molecular RNA/DNA checks proved **Archaea (`extremophiles thriving in hot springs & salty vents`)** possess unique membranes/cell walls differing deeply from ordinary **Bacteria** — warranting their own Domain!', hi: 'आनुवंशिक (`DNA/RNA`) जाँच से सिद्ध हुआ कि अति विषम गर्म/खारे आवास के **आर्किया (`Archaea`)** सामान्य **बैक्टीरिया** से आण्विक रूप से भिन्न हैं, अतः 3 डोमेन बने!' },
    },
    {
      num: '5',
      q: { en: 'How do **Lichens** benefit both partners AND help municipal agencies monitor urban air purity?', hi: '**लाइकेन (`Lichen`)** अपने दोनों साझेदार जीवों को क्या लाभ देते हैं तथा शहर में वायु प्रदूषण जाँच में कैसे सहायक हैं?' },
      a: { en: 'Fungal mycelium absorbs water/minerals & shelters fragile **green algae/cyanobacteria**, which photosynthesize sugars for both (`mutualism`). Because lichens die quickly under **SO₂ polluted air**, their absence warns of pollution!', hi: 'कवक जल व खनिज शोषण कर आश्रय देता है और **शैवाल** प्रकाश संश्लेषण से भोजन बनाता है (`सहजीविता`)। यह **`SO₂` प्रदूषण** पर मर जाते हैं अतः स्वच्छ वायु के जैव-सूचक हैं!' },
    },
    {
      num: '6',
      q: { en: 'Contrast **Thallophyta, Bryophyta & Pteridophyta (`Cryptogams`)** vs **Gymnosperms & Angiosperms (`Phanerogams`)**.', hi: 'क्रिप्टोगैम (`थैलो, ब्रायो, टेरिडोफाइटा`) तथा फैनरोगैम (`जिम्नोस्पर्म व एंजियोस्पर्म`) में स्पष्ट तुलना कीजिए।' },
      a: { en: '**Cryptogams** lack seeds & flowers (`Spirogyra` lacks body organs; `Moss` lacks xylem; `Ferns` gain xylem/phloem yet produce spores). **Phanerogams** bear true **seeds** (`naked in Gymnosperm cones`; **enclosed in Angiosperm ovary fruits**)!', hi: '**क्रिप्टोगैम** में पुष्प व बीज नहीं होते (`थैलो → ब्रायो → टेरिडोफाइटा केवल संवहनी`); जबकि **फैनरोगैम** बीजधारी हैं (`अनावृतबीजी में नग्न` तथा `आवृतबीजी में फल के अंदर`)!' },
    },
    {
      num: '7',
      q: { en: 'Compare **Monocotyledons** vs **Dicotyledons** with three field-identifiable features + two Indian crops each.', hi: '**एकबीजपत्री (`Monocot`)** एवं **द्विबीजपत्री (`Dicot`)** पादपों में 3 स्पष्ट लक्षणों व दो-दो उदाहरणों सहित अंतर लिखिए।' },
      a: { en: '**Monocot (`Wheat, Rice, Maize`)**: `1` cotyledon, parallel leaf venation, fibrous adventitious roots. **Dicot (`Pea, Mustard, Mango`)**: `2` cotyledons, reticulate net leaf venation, deep taproot!', hi: '**एकबीजपत्री (`गेहूँ, धान, मक्का`)**: `1` बीजपत्र, समानांतर शिरा, रेशेदार जड़। **द्विबीजपत्री (`मटर, सरसों, आम`)**: `2` बीजपत्र, जालिकावत शिरा, मूसला जड़!' },
    },
    {
      num: '8',
      q: { en: 'Contrast **Platyhelminthes (`Flatworms`), Nematoda (`Roundworms`) & Annelida (`Earthworms`)** in gut openings, segmentation & coelom.', hi: '**प्लेटीहेल्मिंथीज (`चपटे`), निमेटोडा (`गोलकृमि`) तथा एनेलिडा (`केंचुआ`)** में पाचन द्वार, देहगुहा व खंडन के आधार पर अंतर लिखिए।' },
      a: { en: '**Platyhelminthes**: flat, **acoelomate**, incomplete `1`-opening gut (`parasitic hooks`). **Nematoda**: cylindrical, pseudocoelom, **complete 2-opening gut (`mouth + anus`, `Shift 12`)**. **Annelida**: true **coelom + internal ring segmentation**!', hi: '**प्लेटीहेल्मिंथीज**: चपटे, देहगुहा नहीं, एकल मुख द्वार। **निमेटोडा**: कूटदेहगुहा व **दो द्वार (`मुख+गुदा`) पूर्ण एकदिशिक पाचन**। **एनेलिडा**: वास्तविक देहगुहा व खंडित शरीर!' },
    },
    {
      num: '9',
      q: { en: 'Name ONE signature feature + ONE example each for: `(a) Porifera`, `(b) Mollusca`, and `(c) Echinodermata`.', hi: 'निम्नलिखित प्रत्येक संघ का एक विशिष्ट लक्षण व एक उदाहरण लिखिए: `(क) पॉरीफेरा`, `(ख) मोलस्का`, `(ग) इकाइनोडर्मेटा`।' },
      a: { en: '`(a)` **Porifera**: Canal filter pores (`24,000 L/d/kg`), *Sycon*; `(b)` **Mollusca**: Soft body + muscular foot + CaCO₃ shell, *Octopus/Snail*; `(c)` **Echinodermata**: Marine spiny **CaCO₃ endoskeleton**, *Starfish*!', hi: '`(क)` **पॉरीफेरा**: छिद्रिल व नाल तंत्र (`साइकॉन`); `(ख)` **मोलस्का**: कोमल देह व पेशीय पाद (`घोंघा/ऑक्टोपस`); `(ग)` **इकाइनोडर्मेटा**: समुद्री व शूलमय **`CaCO₃` अंतःकंकाल** (`स्टारफिश`)!' },
    },
    {
      num: '10',
      q: { en: 'Why are **Reptiles (`lizards`)** able to thrive in arid deserts unlike **Amphibians (`frogs`)**?', hi: '**उभयचर (`मेंढक`)** की तुलना में **सरीसृप (`छिपकली`)** शुष्क मरुस्थलों में सफलतापूर्वक कैसे जीवित रहते हैं?' },
      a: { en: 'Amphibians rely on moist slimy skin respiration & shell-less water eggs, whereas **Reptiles** carry waterproof **keratin scales**, lungs ONLY, and **leathery-shelled land eggs (`internal fertilisation`)**!', hi: 'उभयचर नम त्वचा व जलीय अंडों पर निर्भर हैं, जबकि **सरीसृपों** में जल-रोधी **सूखे शल्क**, पूर्ण **फेफड़े** तथा **आंतरिक निषेचन व स्थलीय कवच अंडे** होते हैं!' },
    },
    {
      num: '11',
      q: { en: 'Arrange **Order, Kingdom, Species, Family, Phylum, Genus, Class** strictly from MOST inclusive to MOST specific (`plus name India’s national animal in correct Binomial syntax`).', hi: 'दिए गए स्तरों को व्यापक से विशिष्ट क्रम में सजाइए व बाघ का सही वैज्ञानिक नाम लिखिए।' },
      a: { en: '**Kingdom -> Phylum -> Class -> Order -> Family -> Genus -> Species** (`K-P-C-O-F-G-S`). Tiger = ***Panthera tigris*** (`Capital P, lowercase t`, italicised / separately underlined!).', hi: '**जगत → संघ → वर्ग → गण → कुल → वंश → जाति**। बाघ = ***Panthera tigris*** (`पहला बड़ा, दूसरा छोटा व तिरछा/अलग रेखांकित`)!' },
    },
    {
      num: '12',
      q: { en: 'State all **4 rules of Binomial Nomenclature** and fix three errors in writing `"homo Sapiens"` on a blackboard.', hi: 'द्विपद नामकरण के **4 नियम** लिखें व ब्लैकबोर्ड पर लिखे गलत नाम `"homo Sapiens"` की तीन त्रुटियाँ सुधारें।' },
      a: { en: 'Errors in `"homo Sapiens"`: `(1)` Genus *`Homo`* must start Capital **`H`**; `(2)` species *`sapiens`* must start lowercase **`s`**; `(3)` handwritten chalk names must be **separately underlined** (`Homo` `sapiens`)!', hi: 'गलतियाँ: `(1)` वंश **`Homo`** का **`H` बड़ा** होगा; `(2)` जाति **`sapiens`** का **`s` छोटा** होगा; `(3)` हाथ से लिखते समय **दोनों शब्दों को अलग-अलग रेखांकित** करना अनिवार्य है!' },
    },
    {
      num: '13',
      q: { en: 'How did coastal **Mangroves (`1999 Odisha`)**, **Biogas research (`Ram Baksh Singh 1957`)**, and **Keibul Lamjao (`Manipur`)** show human–biodiversity links?', hi: '**`1999` ओडिशा मैंग्रोव, `1957` सीतापुर बायोगैस (`राम बख्श सिंह`) व केइबुल लामजाओ फुमडी** मानव व जैव विविधता संबंध कैसे दर्शाते हैं?' },
      a: { en: 'Mangroves cushioned lethal cyclone storm surges (`1999 Odisha`); beneficial anaerobic Monera convert cattle waste into clean fuel (`1957`); floating *Phumdi* mats keep **Sangai deer (`1953`)** alive as a living refuge!', hi: 'मैंग्रोव तटीय चक्रवाती लहरों से बचाते हैं (`1999`), मोनेरा जीवाणु अपशिष्ट से स्वच्छ बायोगैस बनाते हैं (`1957`), व फुमडी **संगाई हिरण (`1953`)** को आश्रय देते हैं!' },
    },
    {
      num: '14',
      q: { en: 'Why are **Viruses (`acellular agents`)** left COMPLETELY outside all 5 kingdoms of Whittaker (`1969`), and how are fossils studied in India?', hi: '**विषाणु (`Virus`)** व्हिटेकर के किसी भी 5 जगत में क्यों नहीं आते, तथा भारत में जीवाश्मों का अध्ययन कैसे होता है?' },
      a: { en: 'Viruses lack cellular cytoplasm/membranes (`pure nucleic acid + protein capsid`), acting inertly outside hosts until hijacking host machinery! In India, fossils (`ancient plant impressions, dinosaur/wood deposits`) are researched at **BSIP Lucknow (`founded by Prof. Birbal Sahni`)** & Mandla National Park.', hi: 'विषाणु **अकोशिकीय (`केवल आनुवंशिक पदार्थ + प्रोटीन आवरण`)** हैं जो परपोषी के बाहर निर्जीव क्रिस्टल समान रहते हैं। भारत में पादप जीवाश्म शोध **बीरबल साहनी संस्थान (`BSIP लखनऊ`)** व मंडला पार्क में होता है!' },
    },
    {
      num: '15 (`ihsc1an Specimens P–T Verified!`)',
      q: { en: 'Analyse the 5 mystery organisms (`P, Q, R, S, T` from NCERT Q15): **P** (`unicellular, no true nucleus, wall+`), **Q** (`multicellular, nucleus+, wall+, autotroph`), **R** (`unicellular, nucleus+`), **S** (`multicellular, nucleus+, wall-less, heterotroph`), **T** (`genetic material + protein coat only`). Answer `(i)–(v)` per `ihsc1an`!', hi: 'NCERT Q15 सारणी के अज्ञात जीवों `P, Q, R, S, T` को पहचानें व **`(i)–(v)`** उत्तर दें (`ihsc1an सत्यापित कुंजी`)।' },
      a: { en: '`(i)` **Specimen `Q`** belongs to **Kingdom Plantae** (`multicellular eukaryote with cell wall & photosynthesis`); `(ii)` Key difference of **`P` (`Monera`)** = **Lacks a true membrane-bound nucleus (`प्रोकैरियोटिक`)**; `(iii)` Key difference separating **`Q` vs `R` (`Protista`)** = **Level of organisation (`Multi-celled Q` vs `Single-celled R`)**; `(iv)` **`S` = Animalia** (`wall-less heterotroph`); `(v)` **`T` (`Virus`) = Acellular (`अकोशिकीय`)**, excluded from all 5 kingdoms!', hi: '`(i)` **जीव `Q`** (`पादप जगत`); `(ii)` **`P` (`मोनेरा`) में वास्तविक झिल्ली-बद्ध केंद्रक नहीं होता**; `(iii)` **`Q` (`बहुकोशिकीय`) व `R` (`एककोशिकीय प्रोटिस्टा`) में संगठन स्तर (`बहुकोशिक vs एककोशिक`) का भेद है**; `(iv)` **`S` = जंतु जगत**; `(v)` **`T` (`विषाणु`) = अकोशिकीय (`Acellular`)** होने से किसी 5 जगत में शामिल नहीं!' },
    },
  ],
  flashcards: [
    { front: { en: 'India’s `4` Global Biodiversity Hotspots & Endemic Examples?', hi: 'भारत के `4` जैव विविधता हॉटस्पॉट व प्रमुख स्थानिक जीव?' }, back: { en: '**Western Ghats (`Nilgiri Tahr, Lion-tailed Macaque, Neelakurinji 12yr`), Himalaya, Indo-Burma (`Nepenthes`), Sundaland** (`+70%` habitat loss criterion)!', hi: '**पश्चिमी घाट (`नीलगिरि तहर, सिंह-पुच्छ मकाक, नीलकुरिंजी 12 वर्ष`), हिमालय, इंडो-बर्मा (`घटपर्णी`), सुंडालैंड**!' } },
    { front: { en: 'Exact Kingdom Chronology (`Aristotle → Linnaeus → Haeckel → Copeland → Whittaker → Woese`)?', hi: 'वर्गीकरण इतिहास क्रम (`2 → 3 → 4 → 5 जगत व 3 डोमेन`)?' }, back: { en: '`Aristotle` (`habitat`) -> `Linnaeus 1758` (`2K`) -> `Haeckel 1866` (`3K Protista` — bacteria put in Protista!) -> `Copeland 1938` (`4K Monera`) -> `Whittaker 1969` (`5K`) -> `Carl Woese 1977` (`3 Domains`).', hi: '`अरस्तू` → `लिनियस 1758` (`2`) → `हेकेल 1866` (`3 प्रोटिस्टा`) → `कोपलैंड 1938` (`4 मोनेरा`) → `व्हिटेकर 1969` (`5`) → `वूज 1977` (`3 डोमेन`)!' } },
    { front: { en: 'Unique Traits of `Monera`, `Protista` & `Fungi` (`Wall + Nucleus + Bio-pioneers`)?', hi: '`मोनेरा, प्रोटिस्टा, कवक` की पहचान (`भित्ति, केंद्रक व प्रमुख उदाहरण`)?' }, back: { en: '`Monera` = Prokaryote (`Cyanobacteria`, **Ram Baksh 1957 biogas**); `Protista` = 1-cell Eukaryote (`Amoeba` pseudopodia, `Paramecium` cilia, `Euglena`); `Fungi` = **Chitin wall (`Yeast` = 1-cell exception)**.', hi: '`मोनेरा` = प्राक्केंद्रकी (**राम बख्श 1957 बायोगैस**); `प्रोटिस्टा` = 1-कोशिक सुकेंद्रकी (`अमीबा, पैरामीशियम, यूग्लीना`); `कवक` = **काइटिन भित्ति** (`लाइकेन` सहजीवन)!' } },
    { front: { en: 'Match 5 Plant Divisions (`Thallo -> Bryo -> Pterido -> Gymno -> Angio`)?', hi: 'पादप जगत के `5` प्रभाग व उनकी एक-पंक्ति पहचान?' }, back: { en: '`Thallo` = Thallus Algae (*Spirogyra*); `Bryo` = **Amphibians** (*Marchantia*, no xylem); `Pterido` = **1st Vascular Xylem/Phloem** (*Ferns*, spores); `Gymno` = **Naked cone seeds** (*Cycas/Pine*); `Angio` = **Fruits** (*Hortus Malabaricus*).', hi: '`थैलो` = शैवाल; `ब्रायो` = **पादप उभयचर** (*मार्केंशिया*); `टेरिडो` = **प्रथम जाइलम-फ्लोएम** (*फर्न*); `जिम्नो` = **नग्न बीज** (*साइकस/पाइन*); `एंजियो` = **फल में बीज**!' } },
    { front: { en: 'First Invertebrates for: `Pores`, `2-Opening Gut`, `Largest Phylum` & `Spiny Endoskeleton`?', hi: 'प्रथम अकशेरुकी पहचान: `छिद्र`, `2-द्वार पाचन`, `सबसे बड़ा संघ`, `शूल कंकाल`?' }, back: { en: '`Pores` = **Porifera** (`24k L/d/kg`); `2-Opening Gut` = **Nematoda** (`roundworms`); `Largest Phylum` = **Arthropoda** (`chitin + jointed legs`); `CaCO₃ Spines` = **Echinodermata** (*Starfish*).', hi: '`छिद्र` = **पॉरीफेरा**; `दो देह-द्वार` = **निमेटोडा**; `सबसे बड़ा` = **आर्थ्रोपोडा** (`काइटिन`); `CaCO₃ शूल` = **इकाइनोडर्मेटा** (*स्टारफिश*)!' } },
    { front: { en: 'Vertebrata Heart Chambers & Crocodile / Cold vs Warm Blood?', hi: 'कशेरुकी हृदय कक्ष (`Pisces → Mammalia`) व मगरमच्छ अपवाद?' }, back: { en: '**Pisces `2ch` (`cold`), Amphibia `3ch` (`cold`), Reptilia `3ch` (`Crocodile = 4ch!`), Aves `4ch` (`warm, hollow bones`), Mammalia `4ch` (`warm, milk glands`)**!', hi: '**मत्स्य `2`, उभयचर `3`, सरीसृप `3` (`अपवाद मगरमच्छ = 4!`), पक्षी व स्तनधारी `4` कक्ष (`समतापी`)**!' } },
    { front: { en: '7 Taxonomic Ranks (`K-P-C-O-F-G-S`) & Where Do Organisms Share Most Traits?', hi: 'वर्गीकरण के `7` स्तर व सर्वाधिक समानता किस स्तर पर होती है?' }, back: { en: '**Kingdom → Phylum/Division → Class → Order → Family → Genus → Species** (`Species` shares MAX shared traits & produces fertile young!).', hi: '**जगत → संघ/प्रभाग → वर्ग → गण → कुल → वंश → जाति** (`जाति` स्तर पर अधिकतम लक्षण समान होते हैं)!' } },
    { front: { en: '4 Golden Binomial Rules + Scientific Names of Tiger & Pea?', hi: 'द्विपद नामकरण के `4` नियम तथा बाघ व मटर के वैज्ञानिक नाम?' }, back: { en: '1. Capital **Genus** + lowercase **species**; 2. Latinised; 3. **Italics** in print; 4. **Separate underlines** by hand! Tiger = ***Panthera tigris***; Pea = ***Pisum sativum***!', hi: '1. वंश पहला बड़ा अक्षर, जाति छोटा; 2. लैटिन; 3. मुद्रण में तिरछा; 4. हस्तलेखन में अलग रेखांकन! बाघ: ***Panthera tigris***; मटर: ***Pisum sativum***!' } },
    { front: { en: '3 Indian Science / Conservation Pioneers & Dates (`Ch 12`)?', hi: 'अध्याय `12` के 3 प्रमुख भारतीय वैज्ञानिक व संरक्षण मील के पत्थर?' }, back: { en: '**Itti Achuthan** (*Hortus Malabaricus* `720` plants), **Prof. Birbal Sahni** (`BSIP Lucknow` Fossils), **Ram Baksh Singh** (`1957` Sitapur biogas), **Purple Frog `2003`**, **Sangai (`1953` Loktak Phumdis)**!', hi: '**इट्टी अचुतन** (`720` पादप), **प्रो. बीरबल साहनी** (`BSIP जीवाश्म`), **राम बख्श सिंह** (`1957` बायोगैस), **बैंगनी मेंढक (`2003`)**, **संगाई (`1953` फुमडी)**!' } },
    { front: { en: 'NCERT Ex 15 Specimens (`P, Q, R, S, T`) Quick Match Key?', hi: 'NCERT Q15 के पांच अज्ञात नमूने (`P, Q, R, S, T`) त्वरित उत्तर?' }, back: { en: '`P` = **Monera** (`no true nucleus`); `Q` = **Plantae** (`autotroph + wall`); `R` = **Protista** (`1-cell vs Q multi`); `S` = **Animalia** (`wall-less`); `T` = **Virus (`Acellular`)**!', hi: '`P` = मोनेरा (`वास्तविक केंद्रक नहीं`); `Q` = पादप; `R` = प्रोटिस्टा (`एककोशिक संगठन भेद`); `S` = जंतु; `T` = विषाणु (**अकोशिकीय**)!'} },
  ],
  pyqBank: [
    {
      id: 'pyq-c9c12-1',
      examTag: 'RRB Group D 2025 (Shift 13)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.1): Habitat Diversity & Endemism in India',
      question: {
        en: 'Which explanation best integrates the concepts of **habitat diversity and endemism** to explain why India supports extraordinarily high biodiversity?',
        hi: 'कौन-सा स्पष्टीकरण **पर्यावास विविधता और स्थानिकता (`endemism`)** की अवधारणाओं को जोड़ते हुए स्पष्ट करता है कि भारत में उच्च जैव-विविधता क्यों पाई जाती है?',
      },
      options: {
        en: [
          'Varied habitats create unique conditions for many endemic species',
          'A single uniform climate promotes species uniformity',
          'Focusing only on deserts enhances national diversity',
          'Exclusive monoculture agriculture increases species variety',
        ],
        hi: [
          'विविध पर्यावास कई स्थानिक प्रजातियों के लिए अनुकूल परिस्थितियाँ सृजित करते हैं',
          'एकल जलवायु प्रजातियों की एकरूपता बढ़ाती है',
          'केवल मरुस्थलों से ही जैव विविधता बढ़ती है',
          'अनन्य एकल-कृषि से प्रजातियों की विविधता बढ़ती है',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'India’s vast array of coastal mangroves, Western Ghats sholas, Himalayan glaciers & deserts creates specialized niches where unique **endemic species** evolve!',
        hi: 'भारत के हिमालय, थार मरुस्थल, तटीय मैंग्रोव व पश्चिमी घाट जैसे विविध आवास अद्वितीय **स्थानिक प्रजातियों** को विकसित होने की परिस्थिति देते हैं।',
      },
    },
    {
      id: 'pyq-c9c12-2',
      examTag: 'RRB Group D 2025 (Shifts 19 & 34)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.1–12.2): Biodiversity Hotspots & Western Ghats',
      question: {
        en: 'A conservation biologist notes a region (`like India’s Western Ghats`) containing unusually high unique endemic species alongside severe habitat loss (`>70%`). Which term describes this region?',
        hi: 'एक संरक्षण जीवविज्ञानी ऐसा क्षेत्र (`जैसे पश्चिमी घाट`) देखती हैं जहाँ विशिष्ट स्थानिक प्रजातियाँ प्रचुर हैं पर अधिकांश आवास नष्ट हो चुका है। यह क्षेत्र क्या कहलाता है?',
      },
      options: {
        en: ['Biodiversity hotspot', 'Generic biodiverse forest', 'Isolated ecological niche', 'Dry desert belt'],
        hi: ['जैव विविधता हॉटस्पॉट (`अतिक्षेत्र`)', 'सामान्य जैव विविधता वन', 'पारिस्थितिक निकेत', 'शुष्क मरुस्थलीय पट्टी'],
      },
      correctIndex: 0,
      solution: {
        en: 'Two strict criteria define a **Biodiversity Hotspot (`4 in India: Western Ghats, Himalaya, Indo-Burma, Sundaland`)**: rich endemism + major habitat loss!',
        hi: 'उच्च स्थानिकता व गंभीर आवास क्षरण वाले क्षेत्रों को **जैव विविधता हॉटस्पॉट** कहते हैं (`भारत में 4 हॉटस्पॉट हैं`)!',
      },
    },
    {
      id: 'pyq-c9c12-3',
      examTag: 'RRB Group D 2025 (Shifts 29 & 42)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.1): Endemic Conservation (Nilgiri Tahr & Lion-Tailed Macaque)',
      question: {
        en: 'Which conservation approach is most effective for protecting the endangered **Nilgiri tahr** (`or Lion-tailed macaque`), found exclusively in a narrow Indian mountain range?',
        hi: 'केवल एक विशिष्ट भारतीय पर्वतीय क्षेत्र में पाए जाने वाले **नीलगिरि तहर (`या सिंह-पुच्छ मकाक`)** के संरक्षण हेतु कौन-सा उपागम सबसे उपयुक्त होगा?',
      },
      options: {
        en: [
          'Prioritizing widespread cosmopolitan species elsewhere',
          'Relocating the entire wild population into arctic zoos',
          'Focusing strictly on conserving its endemic habitat in the Western Ghats',
          'Clearing native shola grasslands for commercial timber',
        ],
        hi: [
          'अन्य क्षेत्रों की सामान्य प्रजातियों को प्राथमिकता देना',
          'सभी जीवों को ध्रुवीय चिड़ियाघरों में भेजना',
          'पश्चिमी घाट में इसके स्थानिक प्राकृतिक पर्यावास के संरक्षण पर ध्यान केंद्रित करना',
          'शोला घास मैदान काटकर इमारती लकड़ी उगाना',
        ],
      },
      correctIndex: 2,
      solution: {
        en: '**Nilgiri tahr & Lion-tailed macaque (`Fig 12.1`)** depend tightly on undisturbed **Western Ghats shola-rainforest habitats** (`Group D Shifts 29, 42`).',
        hi: 'स्थानिक प्रजातियाँ अपने प्राकृतिक आवास के बिना नहीं बच सकतीं, अतः **पश्चिमी घाट के पर्यावास** की रक्षा सर्वोच्च प्राथमिकता है!',
      },
    },
    {
      id: 'pyq-c9c12-4',
      examTag: 'RRB Group D 2025 (Shift 15)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.2): Sangam Tinai & Sacred Groves Heritage',
      question: {
        en: 'In what fundamental way did ancient Tamil **Sangam *Tinai* classifications** and traditional **Sacred Groves (`Devrais/Kavus`)** help conserve India’s biodiversity?',
        hi: 'प्राचीन संगम साहित्य के **तिनई वर्गीकरण** और **पवित्र उपवनों (`Sacred Groves`)** ने भारत की जैव विविधता संरक्षण में किस प्रकार सहायता की?',
      },
      options: {
        en: [
          'They named every global microorganism scientifically',
          'They preserved locally diverse ecosystems and native habitats intact',
          'They maximized exotic cash-crop plantations',
          'They introduced foreign aquatic plants into forests',
        ],
        hi: [
          'उन्होंने सभी सूक्ष्मजीवों का द्विपद नामकरण किया',
          'उन्होंने स्थानीय रूप से विविध पारिस्थितिक आवासों को संरक्षित रखा',
          'उन्होंने विदेशी नकदी फसलों का उत्पादन बढ़ाया',
          'उन्होंने बाह्य विदेशी प्रजातियाँ वनों में बसाईं',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Cultural stewardship embedded in **Sangam Tinai landscapes** & **Sacred Groves** safeguarded community forests & water bodies from overexploitation!',
        hi: 'तिनई पारिस्थितिक परंपरा व पवित्र उपवनों ने स्थानीय प्राकृतिक वनों और जल स्रोतों की अबाध रक्षा सुनिश्चित की!',
      },
    },
    {
      id: 'pyq-c9c12-5',
      examTag: 'RRB Group D 2025 (Shift 13)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.4): Historical Placement of Bacteria Under Three-Kingdom System',
      question: {
        en: 'According to the historical development of classification systems (`NCERT Sec 12.4`), in which kingdom were **bacteria** temporarily placed immediately after Ernst Haeckel’s **three-kingdom system (`1866`)** was introduced?',
        hi: 'वर्गीकरण प्रणाली के ऐतिहासिक विकास के अनुसार, **तीन जगत प्रणाली (`अर्न्स्ट हेकेल 1866`)** लागू होने के ठीक बाद **जीवाणु (`bacteria`)** को किस जगत में रखा गया था?',
      },
      options: {
        en: ['Monera', 'Animalia', 'Protista', 'Plantae'],
        hi: ['मोनेरा (`Monera`)', 'ऐनिमेलिया (`Animalia`)', 'प्रोटिस्टा (`Protista`)', 'प्लांटी (`Plantae`)'],
      },
      correctIndex: 2,
      solution: {
        en: 'When **Haeckel (`1866`)** added **Protista** as the 3rd kingdom, ALL unicellular microbes — including bacteria — were placed into **Protista** until **Copeland (`1938`)** split out Monera!',
        hi: 'हेकेल द्वारा प्रोटिस्टा जोड़ते समय जीवाणु भी **प्रोटिस्टा** में रखे गए थे; बाद में कोपलैंड (`1938`) व व्हिटेकर (`1969`) ने उन्हें **मोनेरा** में अलग किया!',
      },
    },
    {
      id: 'pyq-c9c12-6',
      examTag: 'RRB Group D 2025 (Shift 20)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.4): Amoeba Failure Inside Two-Kingdom Taxonomy',
      question: {
        en: 'While reviewing early taxonomic history (`Linnaeus 1758`), which key feature of **Amoeba** created major confusion in assigning it cleanly inside the **two-kingdom system (`Plantae vs Animalia`)**?',
        hi: 'द्विजगत वर्गीकरण पद्धति (`two-kingdom system`) में **अमीबा** को रखने में प्रमुख असमंजस किस लक्षण के कारण उत्पन्न हुआ?',
      },
      options: {
        en: [
          'Amoeba is unicellular, moves actively, and is heterotrophic without a rigid plant wall',
          'Amoeba is multicellular, stationary, and has a cellulose cell wall',
          'Amoeba is autotrophic with large chloroplasts',
          'Amoeba produces spores inside woody cones',
        ],
        hi: [
          'अमीबा एककोशिकीय, गतिमान और कोशिका भित्ति-रहित परपोषी होता है',
          'अमीबा में कोशिका भित्ति होती है और वह स्थिर रहता है',
          'अमीबा क्लोरोफिल से अपना भोजन स्वयं बनाता है',
          'अमीबा शंकु में नग्न बीज उत्पन्न करता है',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Simple microscopic **unicellular** *Amoeba* differed deeply from complex multicellular animals yet moved and ingested heterotrophically — prompting creation of **Protista**!',
        hi: 'एककोशिकीय होते हुए भी *अमीबा* गतिशील व परपोषी था, जिससे द्विजगत प्रणाली की सीमाएँ उजागर हुईं!',
      },
    },
    {
      id: 'pyq-c9c12-7',
      examTag: 'RRB Group D 2025 (Shift 2)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.1): Photosynthetic Prokaryotes Placed in Monera',
      question: {
        en: 'A newly discovered microbe is **unicellular, prokaryotic (`lacks a membrane-bound nucleus`)**, yet performs **oxygenic photosynthesis**. Under Whittaker’s five-kingdom system, where is it placed?',
        hi: 'एक सूक्ष्मजीव **एककोशिकीय व प्रोकैरियोटिक (`झिल्ली-बद्ध केंद्रक का अभाव`)** है परंतु **प्रकाश संश्लेषण** करता है। पाँच जगत वर्गीकरण में इसे किस जगत में रखा जाएगा?',
      },
      options: {
        en: ['Protista', 'Fungi', 'Monera', 'Plantae'],
        hi: ['प्रोटिस्टा', 'फंजाई (`कवक`)', 'मोनेरा (`Monera`)', 'प्लांटी (`पादप`)'],
      },
      correctIndex: 2,
      solution: {
        en: 'ALL prokaryotic microbes lacking a nuclear membrane (`including photosynthetic Cyanobacteria`) belong strictly to **Kingdom Monera**!',
        hi: 'केंद्रक झिल्ली-रहित सभी एककोशिक प्राक्केंद्रकी (`जैसे प्रकाश संश्लेषी सायनोजीवाणु`) केवल **मोनेरा** में आते हैं!',
      },
    },
    {
      id: 'pyq-c9c12-8',
      examTag: 'RRB Group D 2025 (Shift 22)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.1): Sewage / Gut Prokaryotic Microbes in Monera',
      question: {
        en: 'Investigation of a waterborne outbreak identifies single-celled, **nucleus-lacking pathogens** multiplying rapidly in sewage and animal intestines. To which kingdom do they belong?',
        hi: 'एक प्रकोप जाँच में वाहित मल व आंत्र में पनपने वाले **एककोशिकीय, केंद्रक-रहित (`nucleus-lacking`) जीव** पाए गए। यह किस जगत से संबंधित हैं?',
      },
      options: {
        en: ['Kingdom Monera', 'Kingdom Plantae', 'Kingdom Protista', 'Kingdom Fungi'],
        hi: ['मोनेरा जगत', 'पादप जगत', 'प्रोटिस्टा जगत', 'कवक जगत'],
      },
      correctIndex: 0,
      solution: {
        en: '**Prokaryotic bacteria** thriving in sewage/intestines (`like E. coli / Vibrio`) lack membrane-bound nuclei -> **Kingdom Monera**!',
        hi: 'केंद्रक-रहित एककोशिक जीवाणु **मोनेरा जगत** के सदस्य हैं!',
      },
    },
    {
      id: 'pyq-c9c12-9',
      examTag: 'RRB Group D 2025 (Shifts 32 & 48)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.1): Shared Core Trait of Bacteria & Cyanobacteria',
      question: {
        en: 'Which fundamental cellular characteristic is **shared by both ordinary Bacteria and oxygen-producing Cyanobacteria**?',
        hi: '**सामान्य जीवाणु और सायनोजीवाणु (`नील-हरित शैवाल`)** दोनों में कौन-सी मूलभूत विशेषता साझा होती है?',
      },
      options: {
        en: [
          'Both reproduce by forming protected seeds',
          'Both possess well-defined nuclear membranes',
          'Both are single-celled prokaryotes (`Kingdom Monera`)',
          'Both have chitin fungal cell walls',
        ],
        hi: [
          'दोनों बीज बनाकर प्रजनन करते हैं',
          'दोनों में सुस्पष्ट झिल्ली-बद्ध केंद्रक होता है',
          'दोनों एककोशिकीय प्राक्केंद्रकी (`मोनेरा जगत`) हैं',
          'दोनों में काइटिन कोशिका भित्ति होती है',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Both lack nuclear membranes & organelles — hence both sit side by side as **single-celled prokaryotes in Kingdom Monera** (`Group D Shifts 32, 48`).',
        hi: 'जीवाणु व सायनोजीवाणु दोनों झिल्ली-बद्ध केंद्रक से रहित **एककोशिकीय प्राक्केंद्रकी (`Prokaryotes`)** हैं!',
      },
    },
    {
      id: 'pyq-c9c12-10',
      examTag: 'RRB Group D 2025 (Shifts 42 & 44)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.2): Distinguishing Protista from Monera',
      question: {
        en: 'A scientist isolates a microscopic **single-celled organism that swims with cilia** (`or oozes via pseudopodia`). Which key feature distinguishes it immediately from **Kingdom Monera**?',
        hi: 'एक वैज्ञानिक **एककोशिकीय यूकैरियोटिक जीव** (`जैसे सिलिया युक्त प्रजीव`) की पहचान करता है। पाँच जगत प्रणाली में कौन-सी मुख्य विशेषता इसे **मोनेरा** से अलग करती है?',
      },
      options: {
        en: [
          'Cell wall made purely of chitin',
          'Multicellular organ-system body',
          'Presence of a membrane-bound nucleus (`Eukaryote → Protista`)',
          'Absence of all genetic DNA',
        ],
        hi: [
          'काइटिन से बनी कोशिका भित्ति',
          'बहुकोशिकीय अंग-तंत्र संगठन',
          'झिल्ली-परिबद्ध वास्तविक केंद्रक की उपस्थिति (`सुकेंद्रकी → प्रोटिस्टा`)',
          'आनुवंशिक डीएनए की अनुपस्थिति',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Both Monera and Protista are unicellular, but **Protista possess a true membrane-bound nucleus (`eukaryotic`)** whereas Monera lack one (`Group D Shifts 42, 44`).',
        hi: 'दोनों एककोशिकीय होते हुए भी **प्रोटिस्टा में झिल्ली-बद्ध वास्तविक केंद्रक** होता है (`सुकेंद्रकी`), जबकि मोनेरा प्राक्केंद्रकी हैं!',
      },
    },
    {
      id: 'pyq-c9c12-11',
      examTag: 'RRB Group D 2025 (Shifts 26 & 40)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Act 12.5): Hay Infusion Protista Nutritional & Structural Diversity',
      question: {
        en: 'In an **Activity 12.5 hay infusion**, some single-celled eukaryotes look flexible & engulf food, while others (`like Euglena / Chlamydomonas`) are green or rigid. What conclusion does this demonstrate?',
        hi: 'घास-फांट (`क्र. 12.5`) के सूक्ष्म अवलोकन में कुछ एककोशिक जीव नम्य आकृति से भोजन निगलते हैं जबकि अन्य हरे/दृढ़ आवरण वाले हैं। इससे क्या निष्कर्ष निकलता है?',
      },
      options: {
        en: [
          'All Monera possess identical rigid chitin walls',
          'All unicellular organisms are prokaryotes',
          'Protists vary widely in cellular structure and mode of nutrition',
          'Chlorophyll is completely absent across all microbes',
        ],
        hi: [
          'सभी मोनेरा की कोशिका भित्ति काइटिन की होती है',
          'सभी प्रजीव प्राक्केंद्रकी होते हैं',
          'प्रोटिस्टा जीवों की संरचना और पोषण विधा में भारी विविधता होती है',
          'सूक्ष्मजीवों में क्लोरोफिल कभी नहीं पाया जाता',
        ],
      },
      correctIndex: 2,
      solution: {
        en: '**Kingdom Protista** spans heterotrophic *Amoeba/Paramecium*, mixotrophic flagellated *Euglena*, and autotrophic walled *Chlamydomonas*!',
        hi: 'प्रोटिस्टा जगत में परपोषी *अमीबा/पैरामीशियम*, स्वपोषी *क्लैमाइडोमोनास* एवं उभयधर्मी *यूग्लीना* — पोषण व संरचना की विशाल विविधता मिलती है!',
      },
    },
    {
      id: 'pyq-c9c12-12',
      examTag: 'RRB Group D 2025 (Shifts 7, 26, 27 & 40)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.2): Locomotory Food-Intake Organelles (Paramecium Cilia vs Amoeba Pseudopodia)',
      question: {
        en: 'How does **Paramecium** (`definite cell shape`) ensure food particles are swept into its fixed intake spot — and how does **Amoeba** differ?',
        hi: '**पैरामीशियम** भोजन कणों को अपने निश्चित अंतर्ग्रहण स्थल तक कैसे पहुँचाता है (`तथा अमीबा से कैसे भिन्न है`)?',
      },
      options: {
        en: [
          'Paramecium moves hair-like cilia across its surface; Amoeba engulfs via temporary pseudopodia',
          'Paramecium uses tentacles; Amoeba uses hollow chitin flagella',
          'Paramecium absorbs only dissolved nitrogen directly through root hairs',
          'Paramecium uses contractile hyphae while Amoeba forms fruiting cones',
        ],
        hi: [
          'पैरामीशियम सतह पर स्थित पक्ष्माभ (`cilia`) की गति से भोजन लाता है; अमीबा पादाभ (`pseudopodia`) बनाता है',
          'पैरामीशियम स्पर्शक व अमीबा कशाभ उपयोग करता है',
          'पैरामीशियम मूल रोमों से भोजन सोखता है',
          'पैरामीशियम कवकतंतु से पाचन करता है',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Four-shift RRB repeat (`Group D Shifts 7, 26, 27, 40`): **Paramecium uses `cilia`**, while **Amoeba** extends transient **`pseudopodia`**!',
        hi: 'अति-पुनरावृत्त PYQ: **पैरामीशियम = पक्ष्माभ (`Cilia`)** तथा **अमीबा = कूटपाद/पादाभ (`Pseudopodia`)**!',
      },
    },
    {
      id: 'pyq-c9c12-13',
      examTag: 'RRB Group D 2025 (Shifts 9 & 17)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.3): Chitin Cell Wall & Saprotrophic Mycelium of Fungi',
      question: {
        en: 'A eukaryotic organism decomposes dead forest logs via absorbent **mycelium (`hyphae`)**, reproduces by **spores**, and has a **chitin cell wall**. Identify its kingdom:',
        hi: 'एक सुकेंद्रकी जीव अपघटन द्वारा मृदा खनिज बढ़ाता है, बीजाणुओं से प्रजनन करता है तथा इसमें **काइटिन (`chitin`) कोशिका भित्ति** होती है। यह किस वर्ग का है?',
      },
      options: {
        en: ['Algae (`Thallophyta`)', 'Fungus (`Kingdom Fungi`)', 'Protozoa (`Protista`)', 'Monera (`Bacteria`)'],
        hi: ['शैवाल', 'कवक (`Fungus`)', 'प्रोटोजोआ', 'जीवाणु'],
      },
      correctIndex: 1,
      solution: {
        en: '**Chitin cell walls + saprophytic nutrient absorption via hyphae (`mycelium`) + spores** diagnose **Kingdom Fungi** (`Group D Shifts 9, 17`).',
        hi: '**काइटिन कोशिका भित्ति व माइसीलियम (`कवकजाल`) द्वारा पोषक अवशोषण** केवल **कवक जगत** की पहचान है!',
      },
    },
    {
      id: 'pyq-c9c12-14',
      examTag: 'RRB Tech 3 2024 (Shift 22)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.3): Kingdom Fungi Predominantly Multicellular Rule',
      question: {
        en: 'Which of the following taxonomic groups/organisms is **NOT predominantly a unicellular organism**?',
        hi: 'निम्नलिखित में से कौन एक **एककोशिकीय जीव (`Unicellular`) वर्ग नहीं** है (`एकल अपवाद को छोड़ अधिकांश बहुकोशिकीय हैं`)?',
      },
      options: {
        en: ['Fungi', 'Bacteria', 'Chlamydomonas', 'Paramecium'],
        hi: ['कवक (`Fungi`)', 'जीवाणु (`Bacteria`)', 'क्लैमाइडोमोनास (`Chlamydomonas`)', 'पैरामीशियम (`Paramecium`)'],
      },
      correctIndex: 0,
      solution: {
        en: '*Bacteria, Chlamydomonas & Paramecium* are strictly single-celled, whereas **Fungi** (`Rhizopus, Agaricus mushrooms`) are predominantly multicellular (`only Yeast is 1-celled!`).',
        hi: 'जीवाणु, क्लैमाइडोमोनास व पैरामीशियम एककोशिक हैं, जबकि **कवक (`Fungi`)** मुख्यतः बहुकोशिक कवकजाल वाले जीव हैं (`केवल यीस्ट अपवाद`)!',
      },
    },
    {
      id: 'pyq-c9c12-15',
      examTag: 'RRB Group D 2025 (Shifts 11 & 33)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.4): Thallophyta Undifferentiated Aquatic Algae',
      question: {
        en: 'A green, thread-like organism in a freshwater pond photosynthesizes yet has an **undifferentiated body lacking roots, stems, and leaves**. Which division does it belong to?',
        hi: 'मीठे जल के तालाब में पाया जाने वाला हरा सूत्रवत् पादप **जड़, तना और पत्तियों से रहित (`अविभेदित काय`)** होते हुए प्रकाश संश्लेषण करता है। इसका प्रभाग क्या है?',
      },
      options: {
        en: ['Thallophyta (`e.g. Spirogyra`)', 'Bryophyta', 'Pteridophyta', 'Gymnosperm'],
        hi: ['थैलोफाइटा (`जैसे स्पाइरोगाइरा`)', 'ब्रायोफाइटा', 'टेरिडोफाइटा', 'जिम्नोस्पर्म'],
      },
      correctIndex: 0,
      solution: {
        en: 'Algae (*Spirogyra, Ulothrix, Chara*) lack root/stem/leaf differentiation and lack vascular tubes -> **Division Thallophyta** (`Group D Shifts 11, 33`).',
        hi: 'जड़-तना-पत्ती रहित जलीय शैवाल (`स्पाइरोगाइरा`) **थैलोफाइटा** प्रभाग के अंतर्गत आते हैं!',
      },
    },
    {
      id: 'pyq-c9c12-16',
      examTag: 'RRB Group D 2025 (Shift 28)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.4): Bryophyta Rhizoids & Damp Mats',
      question: {
        en: 'A student notices green mats growing on damp forest rocks having **rhizoid-like anchorage threads** yet lacking true roots and vascular tissues. Which plant group do they represent?',
        hi: 'नम जंगल में चट्टानों पर उगने वाली हरी गलीचे जैसी वनस्पतियों में **मूलाभास (`rhizoids`)** तो हैं पर वास्तविक जड़ें व संवहनी ऊतक नहीं हैं। यह कौन-सा वर्ग है?',
      },
      options: {
        en: ['Pteridophyta', 'Thallophyta', 'Bryophyta (`Amphibians of Plant Kingdom`)', 'Gymnosperm'],
        hi: ['टेरिडोफाइटा', 'थैलोफाइटा', 'ब्रायोफाइटा (`पादप जगत के उभयचर`)', 'जिम्नोस्पर्म'],
      },
      correctIndex: 2,
      solution: {
        en: '**Bryophytes (`Marchantia, Funaria/Moss`)** form leafy/thalloid damp rock carpets with hair-like **rhizoids** and NO xylem/phloem!',
        hi: 'नम चट्टानों पर मूलाभास व संवहन-रहित उभयचर पादप **ब्रायोफाइटा (`मॉस, मार्केंशिया`)** कहलाते हैं।',
      },
    },
    {
      id: 'pyq-c9c12-17',
      examTag: 'RRB ALP 2025 (Shift 3 Bilingual)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.4): Matching Bryophyta, Pteridophyta & Thallophyta',
      question: {
        en: 'Match the following NCERT organisms with their exact Plantae divisions: `1. Marchantia | 2. Ferns | 3. Spirogyra` vs `A. Thallophyta | B. Bryophyta | C. Pteridophyta`:',
        hi: 'निम्नलिखित उदाहरणों का उनके सही पादप समूहों से मिलान कीजिए: `1. मार्केंशिया | 2. फर्न | 3. स्पाइरोगाइरा` बनाम `A. थैलोफाइटा | B. ब्रायोफाइटा | C. टेरिडोफाइटा`:',
      },
      options: {
        en: ['1-B, 2-A, 3-C', '1-B, 2-C, 3-A', '1-A, 2-B, 3-C', '1-C, 2-B, 3-A'],
        hi: ['1-B, 2-A, 3-C', '1-B, 2-C, 3-A', '1-A, 2-B, 3-C', '1-C, 2-B, 3-A'],
      },
      correctIndex: 1,
      solution: {
        en: '`1. Marchantia` = **B. Bryophyta**; `2. Ferns` = **C. Pteridophyta** (`first vascular`); `3. Spirogyra` = **A. Thallophyta** -> **1-B, 2-C, 3-A**!',
        hi: '**मार्केंशिया (`ब्रायोफाइटा`)**, **फर्न (`टेरिडोफाइटा`)**, तथा **स्पाइरोगाइरा (`थैलोफाइटा`)** ⇒ **`1-B, 2-C, 3-A`**!',
      },
    },
    {
      id: 'pyq-c9c12-18',
      examTag: 'RRB Group D 2025 (Shifts 17, 24, 36 & 39)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.4): Vascular Tissues (Xylem/Phloem) Without Seeds in Pteridophyta',
      question: {
        en: 'A plant specimen possesses **true vascular tissues (`xylem & phloem`)** yet produces **NO seeds** and **fails to reproduce if water is withheld** (`NCERT Act 12.6`). Identify its division:',
        hi: 'एक पादप नमूने में **संवहनी ऊतक (`जाइलम और फ्लोएम`)** तो पाए गए, किंतु इसमें **बीज नहीं** हैं और निषेचन हेतु **जल पर निर्भर** है। यह किस समूह से है?',
      },
      options: {
        en: ['Thallophyta', 'Gymnosperm', 'Bryophyta', 'Pteridophyta'],
        hi: ['थैलोफाइटा', 'जिम्नोस्पर्म (`अनावृतबीजी`)', 'ब्रायोफाइटा', 'टेरिडोफाइटा (`Pteridophyta`)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Four-shift RRB favourite (`Group D Shifts 17, 24, 36, 39`): **Pteridophyta (`Ferns, Marsilea`)** evolved first **xylem & phloem** yet rely on water & produce **spores (`no seeds`)**!',
        hi: '**टेरिडोफाइटा** प्रथम संवहनी ऊतक वाले पौधे हैं, किंतु बीजों की अनुपस्थिति और जल-निर्भर निषेचन इन्हें सीमित रखता है!',
      },
    },
    {
      id: 'pyq-c9c12-19',
      examTag: 'RRB Group D 2025 (Shifts 6 & 43)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.4): Gymnosperm Drought Needles & Unenclosed Seeds',
      question: {
        en: 'A researcher identifies a plant group with **needle-like drought-resistant leaves**, **no water requirement for fertilisation**, and **naked seeds NOT enclosed in fruits**. Which group is described?',
        hi: 'किसी पादप समूह में **सुई जैसी सूखारोधी पत्तियाँ**, निषेचन हेतु जल-स्वतंत्रता और **फलों में बंद न होने वाले नग्न बीज** हैं। यह कौन-सा समूह है?',
      },
      options: {
        en: ['Gymnosperms (`like Pine / Cycas`)', 'Pteridophytes', 'Bryophytes', 'Angiosperms'],
        hi: ['अनावृतबीजी (`Gymnosperms`)', 'टेरिडोफाइट', 'ब्रायोफाइट', 'आवृतबीजी'],
      },
      correctIndex: 0,
      solution: {
        en: '**Gymnosperms** (`naked-seeded cone conifers`) survive arid climates via narrow waxy **needle leaves** & wind-blown pollen (`Group D Shifts 6, 43`).',
        hi: '**अनावृतबीजी (`जिम्नोस्पर्म`)** के बीज शंकुओं में नग्न रहते हैं व सुई पत्तियाँ सूखे में जल बचाती हैं!',
      },
    },
    {
      id: 'pyq-c9c12-20',
      examTag: 'RRB Group D 2025 (Shifts 25 & 30)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.4): Cones (Gymnosperm) vs Enclosed Fruit Seeds (Angiosperm)',
      question: {
        en: 'Two vascular seed plants are compared: Plant `1` bears seeds openly on woody **cones**, while Plant `2` encloses seeds inside ripened **fruits (`flowers`)**. Identify them accurately:',
        hi: 'दो संवहनी बीज-धारी पादप: पहला **शंकु (`Cones`)** में नग्न बीज बनाता है जबकि दूसरे के बीज **फलों (`पुष्प`)** में बंद रहते हैं। यह कौन-से हैं?',
      },
      options: {
        en: [
          'First is Pteridophyte; Second is Bryophyte',
          'First is Bryophyte; Second is Gymnosperm',
          'First is Angiosperm; Second is Pteridophyte',
          'First is Gymnosperm; Second is Angiosperm',
        ],
        hi: [
          'पहला टेरिडोफाइट, दूसरा ब्रायोफाइट है',
          'पहला ब्रायोफाइट, दूसरा जिम्नोस्पर्म है',
          'पहला एंजियोस्पर्म, दूसरा टेरिडोफाइट है',
          'पहला जिम्नोस्पर्म (`अनावृतबीजी`), दूसरा एंजियोस्पर्म (`आवृतबीजी`) है',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Woody **cones (`naked seeds`) = Gymnosperms** (`gymno = naked`); **flowers + seeds inside fruits = Angiosperms** (`angio = covered vessel`, max terrestrial diversity — `Shifts 25, 30`)!',
        hi: 'शंकुधारी नग्न बीज **जिम्नोस्पर्म (`अनावृतबीजी`)** तथा पुष्प व फल के भीतर बीज **एंजियोस्पर्म (`आवृतबीजी`)** कहलाते हैं!',
      },
    },
    {
      id: 'pyq-c9c12-21',
      examTag: 'RRB Group D 2025 (Shift 44)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.5): Defining Criteria of Kingdom Animalia',
      question: {
        en: 'During a field study, a student examines a **multicellular eukaryote that completely lacks cell walls** and depends on ingesting other organisms for food. Which kingdom does it enter?',
        hi: 'एक विद्यार्थी ऐसे **बहुकोशिकीय सुकेंद्रकी जीव** का अवलोकन करता है जिसमें **कोशिका भित्ति पूर्णतः अनुपस्थित** है व भोजन हेतु दूसरों पर निर्भर है। यह किस जगत से संबंधित है?',
      },
      options: {
        en: ['Fungi', 'Monera', 'Plantae', 'Animalia'],
        hi: ['कवक', 'मोनेरा', 'प्लांटी (`पादप`)', 'ऐनिमेलिया (`जंतु जगत`)'],
      },
      correctIndex: 3,
      solution: {
        en: 'No cell wall + multicellular eukaryotic + heterotrophic ingestion = hallmark trio of **Kingdom Animalia**!',
        hi: '**कोशिका भित्ति का पूर्ण अभाव + बहुकोशिक सुकेंद्रकी परपोषण** केवल **जंतु जगत (`Animalia`)** की विशेषता है!',
      },
    },
    {
      id: 'pyq-c9c12-22',
      examTag: 'RRB Group D 2025 (Shift 12)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.5): Two-Opening Tube-Within-Tube Gut Innovation (Nematoda Onward)',
      question: {
        en: 'Analyzing invertebrate evolution (`NCERT Sec 12.6.5`), which structural innovation first enables **efficient, one-way food digestion and continuous waste elimination** (`as seen in Roundworms / Nematoda onward`)?',
        hi: 'अकशेरुकी प्राणियों के पाचन तंत्र विकास में कौन-सा संरचनात्मक परिवर्तन **दक्ष, एकदिशिक खाद्य प्रसंस्करण एवं अपशिष्ट निष्कासन** संभव बनाता है?',
      },
      options: {
        en: [
          'Development of two distinct body openings (`Mouth + Anus`)',
          'External body pores without gut',
          'Loss of bilateral symmetry',
          'Stinging cnidoblast tentacles',
        ],
        hi: [
          'दो भिन्न देह-द्वार (`मुख व गुदा`) का विकास',
          'बिना पाचन नाल के शरीर छिद्र',
          'द्विपार्श्व सममिति की समाप्ति',
          'दंश कोशिका स्पर्शक',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Earlier *Cnidaria & Platyhelminthes* had only `1` mouth-anus opening! From **Nematoda onward**, having **TWO openings (`mouth + anus`)** allowed assembly-line unidirectional digestion!',
        hi: 'निमेटोडा से पूर्व केवल एक द्वार था; **दो देह-द्वार (`मुख व गुदा`)** बनने से एक ही दिशा में लगातार पाचन व उत्सर्जन संभव हुआ!',
      },
    },
    {
      id: 'pyq-c9c12-23',
      examTag: 'RRB Tech 3 2024 (Shifts 13 & 16)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.6.5): Vertebrate Heart Chambers & Endoskeleton Support',
      question: {
        en: 'Which vertebrate class (`like frogs and toads`) possesses a **three-chambered heart (`2 atria + 1 ventricle`)** alongside internal skeletal vertebral support (`Group D 9 & Tech 3 13/16`)?',
        hi: 'निम्नलिखित में से किस कशेरुकी वर्ग के प्राणियों (`जैसे मेंढक`) के हृदय में **तीन प्रकोष्ठ (`Three-chambered heart`)** होते हैं?',
      },
      options: {
        en: ['Birds (`Aves` — 4)', 'Mammals (`Mammalia` — 4)', 'Fishes (`Pisces` — 2)', 'Amphibians (`Amphibia` — 3)'],
        hi: ['पक्षी (`4 कक्ष`)', 'स्तनधारी (`4 कक्ष`)', 'मछलियाँ (`2 कक्ष`)', 'उभयचर (`Amphibia` — 3 कक्ष)'],
      },
      correctIndex: 3,
      solution: {
        en: '**Amphibians (`Frogs`)** & most Reptiles (`except 4-chambered Crocodiles`) carry **`3`-chambered hearts**; Pisces have `2`, while warm-blooded Birds & Mammals have `4`!',
        hi: '**उभयचरों (`Amphibians`)** में **3-कक्षीय हृदय** होता है (`जबकि मछली में 2 तथा पक्षी/स्तनधारी/मगरमच्छ में 4`)!',
      },
    },
    {
      id: 'pyq-c9c12-24',
      examTag: 'RRB NTPC UG 2025 (Shift 14)',
      section: 'General Science',
      subject: 'Biology',
      topic: 'NCERT Ch 12 (Sec 12.1 & 12.10): Definition of Endemic Species (Nilgiri Tahr, Purple Frog, Sangai)',
      question: {
        en: 'What are **endemic species (`स्थानिक स्पीशीज`, like Western Ghats Purple Frog & Loktak’s Sangai deer)**?',
        hi: '**स्थानिक स्पीशीज (`Endemic species` — जैसे बैंगनी मेंढक व संगाई हिरण)** क्या होती हैं?',
      },
      options: {
        en: [
          'Species that migrated globally over all continents recently',
          'Common plants grown inside every home garden',
          'Species found naturally ONLY in one particular geographical area and nowhere else',
          'Invasive exotic pests imported from overseas',
        ],
        hi: [
          'सभी महाद्वीपों में हाल ही में प्रवासित प्रजातियाँ',
          'प्रत्येक वन और बगीचे में उगने वाले सामान्य पादप',
          'वे प्रजातियाँ जो प्राकृतिक रूप से केवल किसी एक विशिष्ट क्षेत्र में पाई जाती हैं, अन्यत्र नहीं',
          'विदेश से लाई गई आक्रामक प्रजातियाँ',
        ],
      },
      correctIndex: 2,
      solution: {
        en: '**Endemic species** occur strictly in a unique local habitat (`Nilgiri Tahr/Purple Frog in Western Ghats`, `Sangai deer ONLY in Loktak Keibul Lamjao Phumdis, Manipur`)!',
        hi: 'किसी सीमित व विशिष्ट भौगोलिक क्षेत्र तक सिमटी प्रजातियाँ **स्थानिक (`Endemic`)** कहलाती हैं (`जैसे लोकटक में संगाई या पश्चिमी घाट में नीलगिरि तहर`)!',
      },
    },
  ],
};
