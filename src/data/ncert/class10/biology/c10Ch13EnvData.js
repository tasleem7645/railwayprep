/**
 * Class 10 NCERT (2026–27 Edition — jhsc113.pdf, Pages 230–239) + Railway CBT Deep-Dive Edition
 * Chapter 13: Our Environment (हमारा पर्यावरण) — Gold Standard v3 (#6 PYQ Chapter — 62 Hits!)
 * Complete NCERT Coverage: 13.1 Ecosystem (Biotic + Abiotic, Natural vs Artificial, Producers/Consumers/Decomposers, Act 13.1–13.2) ->
 * 13.1.1 Food Chains & Webs (T1–T4 Trophic Levels, 1% Solar Capture, 10% Transfer Law, Unidirectional Flow, 3–4 Step Limit, Food Web Stability, Biomagnification, Act 13.3) ->
 * 13.2 How Activities Affect Environment -> 13.2.1 Stratospheric Ozone (O₂—UV→O+O; O+O₂→O₃, Ground Poison vs UV Shield, CFCs 1980s, 1987 UNEP Freeze @ 1986 Levels, Act 13.4) ->
 * 13.2.2 Garbage Management (Enzyme Specificity, Biodegradable vs Non-Biodegradable, Train Cups: Glass->Plastic->Kulhad->Paper, E-waste, Act 13.5–13.9).
 * All 9 Activities (13.1–13.9), All 7 In-Text Qs, All 9 Exercises verified against jhsc1an.pdf, & 24 Verbatim RRB PYQs.
 */

export const C10_CH13_ENV_DATA = {
  id: 'c10-bio-ch13',
  classId: 'class10',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology', hi: 'जीव विज्ञान (Biology)' },
  chapterNumber: 13,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 13: Our Environment (CBT Edition)',
  blueprintSvgKey: 'c10-ch13-blueprint-mindmap',
  weightageBars: [
    { label: { en: '10% Energy Law, 1% Solar Capture, Unidirectional Flow & Food Chains/Webs', hi: '1% सौर व 10% ऊर्जा नियम, एकदिशिक प्रवाह व आहार शृंखला/जाल' }, pct: 34 },
    { label: { en: 'Biomagnification (DDT / Pesticides Highest at Top Trophic Level)', hi: 'जैविक आवर्धन (पीड़कनाशी व DDT का शीर्ष उपभोक्ता में सर्वाधिक संचय)' }, pct: 24 },
    { label: { en: 'Stratospheric Ozone Shield (O₃/UV/Skin Cancer), CFCs & 1987 UNEP Protocol', hi: 'ओजोन परत (O₃/UV/त्वचा कैंसर), CFC क्षरण व 1987 UNEP समझौता' }, pct: 22 },
    { label: { en: 'Ecosystem Types (Natural vs Artificial), Decomposers & Biodegradable Waste', hi: 'प्राकृतिक बनाम कृत्रिम पारितंत्र, अपघटक व जैव-निम्नीकरणीय कचरा' }, pct: 20 },
  ],
  title: {
    en: 'Chapter 13: Our Environment',
    hi: 'अध्याय 13: हमारा पर्यावरण',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive (#6 Highest PYQ Chapter) • Ecosystem, 10% Law, Biomagnification, Ozone Shield & Waste',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई (#6 सर्वाधिक PYQ अध्याय) • पारितंत्र, 10% नियम, जैव-आवर्धन, ओजोन परत व 24 रेलवे PYQ',
  },
  metrics: {
    pages: 10,
    activities: 9,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 9,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-bio-ch13/hero-our-environment.webp',
    caption: {
      en: 'Our Environment Concept Studio: Self-sustaining aquatic food pyramid (10% energy flow upward), stratospheric O₃ shield deflecting solar UV rays, and decomposer nutrient recycling.',
      hi: 'हमारा पर्यावरण अवधारणा स्टूडियो: जलीय व स्थलीय आहार पिरामिड (ऊपर घटती 10% ऊर्जा), समतापमंडल की ओजोन (O₃) UV सुरक्षा ढाल एवं अपघटक पोषण चक्र।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Ecosystem Components & Types (`13.1`)**: An ecosystem = **Biotic (`plants, animals, microbes, humans`) + Abiotic (`temperature, rainfall, wind, soil, minerals`)**. **Natural Ecosystems** = Forest, Pond, Lake (`self-sustaining via decomposers`) vs **Artificial (`Human-Made`)** = **Crop-field, Garden, Aquarium** (`aquarium lacks enough natural decomposers -> needs periodic cleaning!`). **Producers** = Green plants & **Blue-green algae (`cyanobacteria`)**. **Decomposers (`Bacteria & Fungi`)** convert complex dead organic remains -> simple inorganic soil nutrients.',
      hi: '**पारितंत्र व संघटक (`13.1`)**: पारितंत्र = **जैव घटक (`पौधे, जंतु, सूक्ष्मजीव`) + अजैव घटक (`ताप, वर्षा, वायु, मृदा, खनिज`)**। **प्राकृतिक पारितंत्र** = वन, तालाब, झील | **कृत्रिम (मानव-निर्मित)** = **खेत, बगीचा, जल जीवशाला (`Aquarium`)** (`प्राकृतिक अपघटक कम होने से एक्वेरियम को बार-बार साफ करना पड़ता है!`)। **उत्पादक** = हरे पौधे + **नील-हरित शैवाल**; **अपघटक** = **जीवाणु व कवक**।',
    },
    {
      en: '**Food Chains, `1%` Solar & `10%` Transfer Law (`13.1.1`)**: Terrestrial leaves capture only **`~1%` of incident sunlight**. From one trophic level to the next, **`90%` is lost** (`heat to environment, digestion, work, growth/reproduction`) and only **`10%` passes upward**. Hence food chains stop after **only `3–4` steps**, organism numbers are **highest at producer (`T1`) level**, and **energy flow is strictly UNIDIRECTIONAL (`T1 -> T2 -> T3`, never returns to sun!)**.',
      hi: '**आहार शृंखला व `1% / 10%` ऊर्जा नियम (`13.1.1`)**: हरे पौधों की पत्तियाँ आपतित सौर ऊर्जा का केवल **`1%`** खाद्य में बदलती हैं। आगे प्रत्येक पोषी स्तर पर `90%` ऊष्मा/जैव कार्यों में खर्च होकर केवल **`10%`** ऊर्जा अगले स्तर को मिलती है — अतः शृंखला में **केवल `3–4` चरण** होते हैं, उत्पादकों की संख्या सर्वाधिक होती है, तथा **ऊर्जा प्रवाह सदैव एकदिशिक (`Unidirectional`)** रहता है।',
    },
    {
      en: '**Food Web & Biological Magnification**: Organisms feed in branching **Food Webs**, which provide **alternative food pathways -> high stability**. Meanwhile, non-biodegradable crop pesticides (`like DDT`) wash into soil/water, resist digestion/breakdown, and accumulate **progressively upward (`0.02 ppm -> highest in TOP humans/eagles!`)** — **==Biomagnification==** (`cannot be washed off grain/fruit/meat with water!`).',
      hi: '**आहार जाल व जैव आवर्धन**: अनेक शृंखलाएँ आपस में जुड़कर **आहार जाल (`Food Web`)** बनाती हैं जो वैकल्पिक भोजन मार्ग देकर स्थायित्व बढ़ाता है। इसके विपरीत, फसलों पर डाले गए **अजैव-निम्नीकरणीय रसायन (`DDT`)** प्रत्येक पोषी स्तर पर संचित होकर शीर्ष स्तर (`मानव/बाज`) में सर्वाधिक हो जाते हैं (**जैव-आवर्धन** — पानी से धोने पर भी नहीं हटते!)।',
    },
    {
      en: '**Stratospheric Ozone (`O₃`) Shield (`13.2.1`)**: Step 1: **`O₂ —(High UV)→ O + O`** | Step 2: **`O + O₂ → O₃`**. At **ground level**, `O₃` is a **deadly poison**, yet in the upper atmosphere (`stratosphere`) it blocks harmful **Solar UV rays** (`preventing Human Skin Cancer!`). Sharp depletion began in **`1980s`** due to synthetic **CFCs (`Chlorofluorocarbons` in refrigerators & fire extinguishers)** -> **`1987 UNEP Agreement`** froze CFC output at **`1986` levels** (`CFC-free fridges now mandatory worldwide!`).',
      hi: '**ओजोन परत (`O₃`) सुरक्षा व CFC (`13.2.1`)**: निर्माण: **`O₂ + UV → O + O`**, फिर **`O + O₂ → O₃`**। भू-स्तर पर ओजोन **घातक विष** है, परंतु समतापमंडल में यह **UV विकिरण रोककर त्वचा कैंसर से बचाती है**। `1980` के दशक में रेफ्रिजरेटर व अग्निशमन के **CFCs** से क्षरण बढ़ा -> **`1987 UNEP समझौते`** ने CFC उत्पादन **`1986` के स्तर पर स्थिर (`फ्रीज़`)** किया।',
    },
    {
      en: '**Enzyme Specificity & Waste Management (`13.2.2`)**: **Enzymes are substrate-specific** (`why eating coal gives zero energy, and bacteria cannot rot plastic!`). **Biodegradable** (`vegetable peels, paper, leather, cotton, flowers, wood, cake -> NCERT Ex Q1`) vs **Non-biodegradable** (`plastic bags, bubble pack, DDT, glass, metal — inert persistence`). **Train Tea Cup Evolution (`p.238`)**: Returnable glass -> plastic cup (`litter hazard`) -> **clay Kulhad** (`stripped fertile topsoil!`) -> **disposable Paper cups** (`biodegradable winner!`).',
      hi: '**एंजाइम विशिष्टता व कचरा (`13.2.2`)**: पाचन व अपघटन हेतु विशिष्ट एंजाइम चाहिए (अतः कोयला ऊर्जा नहीं देता व प्लास्टिक जीवाणुओं से नहीं सड़ता)। **जैव-निम्नीकरणीय** (`छिलके, कागज, लकड़ी, चमड़ा, सूती, केक — Ex Q1`) बनाम **अजैव-निम्नीकरणीय** (`प्लास्टिक, बबल पैक, काँच, DDT`)। **रेल चाय कप केस (`पृ. 238`)**: काँच -> प्लास्टिक -> **कुल्हड़ (`उपजाऊ मिट्टी नष्ट!`)** -> **कागज कप (`सर्वोत्तम जैव-निम्नीकरणीय`)**।',
    },
  ],
  sections: [
    {
      id: 'ecosystem-components-decomposers',
      number: '13.1',
      flowDiagramKey: 'c10-ch13-blueprint-mindmap',
      realImage: {
        imageUrl: '/ncert-notes/class10-bio-ch13/real/planted-aquarium-ecosystem.webp',
        caption: {
          en: 'Artificial Human-Made Ecosystem (`Planted Aquarium`, Activity 13.1): Aquatic plants supply O₂ & food, fish release CO₂/waste — yet unlike natural ponds, aquariums need manual cleaning due to fewer natural decomposers.',
          hi: 'मानव-निर्मित कृत्रिम पारितंत्र (`जल जीवशाला / Aquarium`, क्रियाकलाप 13.1): पौधे O₂ व भोजन देते हैं व मछलियाँ CO₂ छोड़ती हैं, परंतु अपघटकों की कमी से तालाब की अपेक्षा इसकी नियमित सफाई जरूरी है।',
        },
      },
      title: {
        en: 'Ecosystem Components (`Biotic + Abiotic`), Natural vs Artificial Ecosystems & Functional Roles (`Producers, Consumers, Decomposers`)',
        hi: 'पारितंत्र एवं उसके संघटक (`जैव + अजैव`), प्राकृतिक बनाम कृत्रिम पारितंत्र तथा उत्पादक-उपभोक्ता-अपघटक',
      },
      summaryTag: {
        en: 'NCERT Pages 230–231 • Activities 13.1–13.2, Garden vs Lake Trap & Decomposer Mineral Replenishment',
        hi: 'NCERT पृ. 230–231 • क्रियाकलाप 13.1–13.2, बगीचा/खेत/झील उदाहरण व अपघटक की अनिवार्य भूमिका',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. What Builds an Ecosystem? (`Biotic + Abiotic`) & Why Crop-Fields/Gardens Are ARTIFICIAL (`Group D 2025 PYQ`)',
            hi: '1. पारितंत्र की परिभाषा (`जैव + अजैव घटक`) एवं खेत-बगीचा कृत्रिम व तालाब-झील प्राकृतिक क्यों?',
          },
          content: {
            en: 'Step inside a garden (`rose, jasmine, sunflower, grass + frogs, insects, birds`) or walk beside a village pond: every living organism (`plants, animals, microbes, humans`) constantly interacts with non-living surroundings, together functioning as an **==Ecosystem (`पारितंत्र`)==** (`RRB Group D 2025 Shift 47 exact definition`). NCERT splits every ecosystem into two tightly coupled halves: **(1) ==Biotic Components (`जैव घटक`)==** = all living organisms; **(2) ==Abiotic Components (`अजैव घटक`)==** = physical factors including **temperature (`ताप`), rainfall (`वर्षा`), wind (`वायु`), soil (`मृदा`), and minerals (`खनिज`)** (`determining growth and reproduction of living members`). **Huge Railway CBT Classification Trap (`NCERT p.230`)**: **Forests (`वन`), Ponds (`तालाब`), and Lakes (`झील`)** are **==Natural Ecosystems (`प्राकृतिक पारितंत्र`)==** (`self-maintained without human engineering`), whereas **Gardens (`बगीचा`), Crop-Fields (`खेत`), and Aquariums (`जल जीवशाला`, Act 13.1)** are **==Human-Made / Artificial Ecosystems (`कृत्रिम पारितंत्र`)==** (`RRB Group D 2025 Shift 47 directly tested Crop-field as artificial against Pond/Forest/Lake!`). Remember Activity 13.1: adding aquatic plants + an aerator (`वातित्र/O₂ pump`) turns a jar of water and fish into a self-sustaining aquarium — yet **unlike natural ponds/lakes**, you MUST periodically clean an aquarium because **an aquarium lacks the rich natural decomposer community** that cleans a pond continuously!',
            hi: 'किसी क्षेत्र के सभी **सजीव (`पौधे, जंतु, सूक्ष्मजीव, मानव`)** और वातावरण के **भौतिक कारक** परस्पर अन्योन्यक्रिया कर प्रकृति में संतुलन बनाते हैं — इस संयुक्त प्रणाली को **==पारितंत्र (`Ecosystem`)==** कहते हैं (`RRB Group D 2025 Shift 47 सीधा PYQ`)। इसके दो मुख्य भाग हैं: **(1) ==जैव घटक (`Biotic`)==** = समस्त सजीव; **(2) ==अजैव घटक (`Abiotic`)==** = **ताप, वर्षा, वायु, मृदा एवं खनिज** आदि जो जीवों की वृद्धि-जनन नियंत्रित करते हैं। **परीक्षा की सबसे बड़ी क्लासिफिकेशन सूची (`NCERT पृ. 230`)**: **वन (`Forest`), तालाब (`Pond`), और झील (`Lake`)** **==प्राकृतिक पारितंत्र==** हैं, जबकि **बगीचा (`Garden`), खेत (`Crop-field`), और जल जीवशाला (`Aquarium`)** **==मानव-निर्मित / कृत्रिम पारितंत्र==** हैं (`Group D 2025 में “खेत” कृत्रिम पारितंत्र का सीधा प्रश्न पूछा गया!`)। क्रियाकलाप 13.1 बताता है कि जलीय पौधों व वायु पंप (`वातित्र`) संग एक्वेरियम स्वनिर्वाह बन सकता है, पर **तालाब/झील के विपरीत एक्वेरियम की समय-समय पर सफाई अनिवार्य है** क्योंकि उसमें **प्राकृतिक अपघटकों की पर्याप्त संख्या नहीं होती**!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Producers (`Plants + Blue-Green Algae`), Four Consumer Classes & Why Decomposers Are Nature’s Recyclers',
            hi: '2. उत्पादक (`हरे पौधे + नील-हरित शैवाल`), उपभोक्ता के 4 वर्ग व अपघटकों द्वारा मृदा खनिज पुनःपूर्ति',
          },
          content: {
            en: 'Based on **how organisms sustain life (`mode of nutrition`)**, NCERT divides biotic life into **three guilds**: **(1) ==Producers / Autotrophs (`उत्पादक / स्वपोषी`)==**: Organisms capable of converting **inorganic `CO₂` + water into organic sugar (`शर्करा`) and starch (`मंड`)** using **sunlight + chlorophyll (`photosynthesis`)**. ⚠️ **Don’t forget NCERT p.230’s twin list**: BOTH **All Green Plants (`सभी हरे पौधे`)** AND **Blue-Green Algae (`नील-हरित शैवाल / Cyanobacteria`)** are Producers! **(2) ==Consumers / Heterotrophs (`उपभोक्ता`)==**: All organisms depending directly or indirectly on producers for food (`RRB Group D 2025 Shift 40 verified Producers are NOT consumers!`), divided into **four sub-types**: **Herbivores (`शाकाहारी`, deer/goat)**, **Carnivores (`मांसाहारी`, tiger/frog)**, **Omnivores (`सर्वाहारी`, human/crow)**, and **Parasites (`परजीवी`, cuscuta/tapeworm)**. **(3) ==Decomposers / Microorganisms (`अपघटक / अपमार्जक`)==**: **Bacteria (`जीवाणु`) and Fungi (`कवक`)** that digest dead plant/animal remains, breaking down **complex organic substances (`जटिल कार्बनिक पदार्थ`) into simple inorganic nutrients (`सरल अकार्बनिक पदार्थ`)** which return to soil (`pH/minerals via mycelium & enzymatic decay`, `RRB Group D 2025 Shift 11, 17, 28, 41 PYQs`) to be reused by plants! Without decomposers (`Act 13.1 In-Text Q2`), carcasses and garbage would heap up endlessly and natural **soil replenishment (`मृदा की प्राकृतिक पुनःपूर्ति`) would halt**, starving producers.',
            hi: 'जीवन निर्वाह के आधार पर जीवों को तीन वर्गों में बाँटा गया है: **(1) ==उत्पादक / स्वपोषी (`Producers`)==**: जो **सूर्य के प्रकाश व क्लोरोफिल** की उपस्थिति में अकार्बनिक पदार्थों से **शर्करा एवं मंड (`कार्बनिक भोजन`)** बनाते हैं — इसमें **सभी हरे पौधे** के साथ **==नील-हरित शैवाल (`Blue-Green Algae`)==** भी शामिल हैं (`NCERT पृ. 230`)! **(2) ==उपभोक्ता (`Consumers`)==**: जो प्रत्यक्ष या परोक्ष रूप से उत्पादकों के भोजन पर निर्भर हों (`Group D Shift 40 में “उत्पादक” को उपभोक्ता वर्ग से अलग पूछा गया`)। मुख्य 4 वर्ग हैं — **शाकाहारी, मांसाहारी, सर्वाहारी एवं परजीवी (`Parasites`)**। **(3) ==अपघटक / अपमार्जक (`Decomposers`)==**: **जीवाणु एवं कवक (`Bacteria & Fungi`)** जैसे सूक्ष्मजीव मृत अवशेषों के **जटिल कार्बनिक पदार्थों को सरल अकार्बनिक खनिजों में बदलकर मिट्टी में वापस भेजते हैं** जिससे पौधे उन्हें पुनः उपयोग कर सकें। यदि अपघटक न हों (`प्रश्‍न 2`), तो **मृत शरीरों का अंबार लग जाएगा व मृदा की प्राकृतिक पुनःपूर्ति रुकने** से संपूर्ण जीवन चक्र थम जाएगा (`Group D 2025 के 4 शिफ्टों में यही भूमिका पूछी गई!`)।',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Instant Filter Hack: Artificial vs Natural + Why Aquariums Need Scrubbing',
            hi: 'तुरंत अंतर सूत्र: “खे-ब-ए” (कृत्रिम) बनाम “व-ता-झी” (प्राकृतिक) एवं अपघटक टेस्ट',
          },
          content: {
            en: '**Artificial Ecosystem = “C-G-A” (`Crop-field, Garden, Aquarium`)** — humans plant/stock them & natural decomposer balance is incomplete! **Natural Ecosystem = “F-P-L” (`Forest, Pond, Lake`)** — decomposers stay abundant, so nobody drains a forest or wild pond with a brush!',
            hi: '**कृत्रिम पारितंत्र = “खे-ब-ए” (`खेत, बगीचा, एक्वेरियम`)** — मानव निर्मित व नियंत्रित! **प्राकृतिक पारितंत्र = “व-ता-झी” (`वन, तालाब, झील`)** — अपघटक स्वयं सफाई कर पोषण पुनःपूर्ति करते रहते हैं!',
          },
        },
      ],
    },
    {
      id: 'food-chains-10pct-law-biomagnification',
      number: '13.1.1',
      flowDiagramKey: 'c10-ch13-trophic-10pct-pyramid',
      svgLab: 'ecosystem-energy-ozone-lab',
      realImage: {
        imageUrl: '/ncert-notes/class10-bio-ch13/real/pond-lily-frog-consumer.webp',
        caption: {
          en: 'Aquatic/Pond Food Chain Link (`NCERT Fig 13.1c`): Aquatic plants/algae capture ~1% sunlight -> insects/crab -> frog/small fish (`T3`) -> crane/snake (`T4`), each losing 90% energy upward.',
          hi: 'जलीय/तालाब आहार शृंखला की कड़ी (`चित्र 13.1c`): जलीय पौधे/शैवाल 1% सौर ऊर्जा स्थिर करते हैं → कीट/केकड़ा (`T2`) → मेंढक/मछली (`T3`) → बगुला/साँप (`T4`)।',
        },
      },
      title: {
        en: 'Food Chains, Trophic Levels, `1%` Solar & `10%` Energy Law, Food Web Stability & Biological Magnification (`DDT`)',
        hi: 'आहार शृंखला, पोषी स्तर, `1%` सौर व `10%` ऊर्जा नियम, एकदिशिक प्रवाह, आहार जाल तथा जैव-आवर्धन',
      },
      summaryTag: {
        en: 'NCERT Pages 231–234 • Fig 13.1–13.4 Numericals, 3–4 Step Limit, Food Web Branches & Top-Consumer Toxin Trap',
        hi: 'NCERT पृ. 231–234 • चित्र 13.1–13.4, न्यूमेरिकल प्रश्न, 3–4 स्तर सीमा, आहार जाल व DDT शीर्ष संचय',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Three Classic NCERT Food Chains (`Fig 13.1`), Four Trophic Levels (`Fig 13.2`) & Why Chains Stop at 3–4 Steps',
            hi: '1. तीन NCERT आहार शृंखलाएँ (`चित्र 13.1`), चार पोषी स्तर (`चित्र 13.2`) एवं शृंखला `3–4` चरणों तक ही क्यों?',
          },
          content: {
            en: 'A series of organisms feeding on one another forms a **==Food Chain (`आहार शृंखला`)==**, and **every step or link (`प्रत्येक चरण अथवा कड़ी`) is one ==Trophic Level (`पोषी स्तर`)==** (`Fig 13.2`, always verified at Base `T1` -> Top `T4`): **`T1` = Autotrophs/Producers** (`always at the start! — Group D 2025 Shift 1`) -> **`T2` = Herbivores / Primary Consumers** -> **`T3` = Small Carnivores / Secondary Consumers** -> **`T4` = Large Carnivores / Tertiary Consumers**. Memorize **NCERT Fig 13.1’s 3 chains**: **`(a) Forest`**: Tree -> Deer -> Tiger/Lion; **`(b) Grassland`**: Grass -> Grasshopper -> Frog -> Snake -> Eagle/Hawk; **`(c) Pond`**: Aquatic Plants/Algae -> Scorpions/Crabs/Prawns -> Small Fish -> Crane/Kingfisher. Now master NCERT’s **exact 5 Quantitative Energy Rules (`p.232–233`, super high-frequency RRB CBT numericals!)**: **(1) ==`~1%` Solar Capture==**: Terrestrial green plant leaves convert **ONLY `~1%` of falling sunlight** into chemical food energy (`NOT 10%! — massive exam trap!`); **(2) ==`10%` Average Transfer Law==**: At each eating step, **most energy (`~90%`) is lost as heat (`ऊष्मा`) to environment + digestion, work, growth & reproduction**, leaving an average of **ONLY `10%` of organic matter/energy** for the next consumer; **(3) ==Only `3–4` Steps==**: Because energy diminishes drastically at each jump (`so much loss!`), **negligible usable energy remains after the 4th trophic level (`ALP & Group D 2025 Shift 10 exact Qs!`)**; **(4) ==Population Pyramid==**: Individuals are **far more numerous at lower levels -> GREATEST at Producer (`T1`) level** (`Group D Shift 21: Grass >> Frogs/Hawks`); **(5) ==Strictly Unidirectional (`एकदिशिक`) Energy Flow (`Fig 13.4`)==**: Sunlight -> Producers -> Herbivores -> Carnivores -> Top Carnivores (`energy NEVER flows backward from herbivores back to plants or back to sun! — Group D 2025 Shift 20`)**.',
            hi: 'एक-दूसरे का आहार बनने वाले जीवों की शृंखला **==आहार शृंखला (`Food Chain`)==** बनाती है, और इसका प्रत्येक चरण **==पोषी स्तर (`Trophic Level`)==** कहलाता है (`चित्र 13.2`): **`T1` (प्रथम पोषी स्तर)** = स्वपोषी/उत्पादक (`सदैव शुरुआत में!`) → **`T2`** = शाकाहारी/प्राथमिक उपभोक्ता → **`T3`** = छोटे मांसाहारी/द्वितीयक उपभोक्ता → **`T4`** = बड़े मांसाहारी/तृतीय उपभोक्ता। **चित्र 13.1 के 3 उदाहरण**: `(a) वन`: वृक्ष → हिरण → बाघ; `(b) घास का मैदान`: घास → टिड्डा → मेंढक → साँप → बाज; `(c) तालाब`: शैवाल → बिच्छू/केकड़ा → छोटी मछली → बगुला। **ऊर्जा प्रवाह के 5 अचूक NCERT नियम (`पृ. 232–233`)**: **(1) ==`1%` सौर स्थिरीकरण==**: स्थलीय हरे पौधों की पत्तियाँ आपतित सौर प्रकाश का केवल **लगभग `1%` भाग** ही रासायनिक खाद्य ऊर्जा में बदलती हैं! **(2) ==`10%` ऊर्जा स्थानांतरण नियम==**: अगले स्तर तक पहुँचने में लगभग **90% ऊर्जा ऊष्मा व जैव कार्यों में ह्रास** हो जाती है और औसत **केवल `10%` ऊर्जा** ही अगले उपभोक्ता को उपलब्ध होती है। **(3) ==केवल `3–4` चरण सीमा==**: चौथे पोषी स्तर के बाद उपयोगी ऊर्जा अत्यंत नगण्य रह जाने से शृंखला सामान्यतः **3 या 4 चरणों की** ही होती है (`ALP व Group D 2025 PYQ`)। **(4) ==सर्वाधिक संख्या आधार पर==**: निचले पोषी स्तर अर्थात् **उत्पादकों (`T1`) की संख्या सर्वाधिक** होती है। **(5) ==सदैव एकदिशिक (`Unidirectional`) प्रवाह== (`चित्र 13.4`)**: उत्पादक से शाकाहारी को गई ऊर्जा कभी लौटकर स्वपोषी या सूर्य में वापस नहीं जाती!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Food Web Resilience (`Fig 13.3`) vs Inverse Biomagnification Trap (`0.02 ppm -> Top Human/Eagle!`)',
            hi: '2. आहार जाल का स्थायित्व (`चित्र 13.3`) बनाम जैव-आवर्धन (`ऊर्जा ↓ घटे पर DDT विष ↑ बढ़े!`)',
          },
          content: {
            en: 'In real nature, animals don’t eat just one species — each organism may be eaten by two or more predators and feeds on multiple sources, creating branching **==Food Webs (`आहार जाल`, Fig 13.3)==**. Why do **Food Webs make ecosystems FAR more stable than isolated Food Chains (`Group D 2025 Shifts 4 & 33 PYQs`)**? Because **food webs provide alternative feeding pathways** — yet removing a key link still triggers immediate shockwaves (`Group D Shift 45`: if all snakes vanish, frog numbers explode immediately!). Now notice the **scary inverse paradox (`Sec 13.1.1 end, p.234`)**: Energy drops by 10x going UP, while **toxic persistent chemicals MULTIPLY going UP (`==Biological Magnification / जैव-आवर्धन==`)**! How? Farmers spray chemical pesticides (`पीड़कनाशी`, e.g., **`DDT`**) to protect crops -> rain washes residues into **soil (`absorbed by crops with water/minerals`)** and **water bodies (`absorbed by aquatic plants/animals`)** -> these pollutants are **non-biodegradable (`not broken down or excreted quickly`)**, so they **accumulate progressively at every trophic step** (`e.g. Water 0.02 ppm -> Zooplankton -> Fish -> Eagle/Human!`). Since **Humans occupy the TOP trophic level** in almost every chain, **we accumulate the MAXIMUM toxin concentration** — measurable right inside **wheat, rice, vegetables, fruits & meat**, and **cannot simply be washed off with tap water (`Act 13.3 & In-Text p.234!`)**! Only **reducing chemical pesticide usage (`biopesticides/organic control`)** directly cuts biomagnification (`Group D Shift 13 PYQ`).',
            hi: 'प्रकृति में प्रायः प्रत्येक जीव दो या अधिक जीवों द्वारा खाया जाता है और अनेक जीवों का आहार करता है — अतः सीधी रेखा की जगह शाखान्वित **==आहार जाल (`Food Web`, चित्र 13.3)==** बनता है। **आहार जाल पारितंत्र को अधिक स्थायी बनाते हैं क्योंकि वे वैकल्पिक भोजन स्रोत देते हैं** (`Group D Shift 33 PYQ`)। अब सबसे बड़ा विरोधाभास समझें: ऊपर जाने पर **ऊर्जा घटती है (`↓ 10%`)**, जबकि **हानिकारक रसायन ऊपर जाने पर बढ़ते हैं (`↑ ==जैव आवर्धन / Biomagnification==`)**! फसलों पर छिड़के गए पीड़कनाशी (`जैसे DDT`) बहकर मिट्टी व जल स्रोतों में जाते हैं, जहाँ से पौधों व जलीय जीवों में प्रवेश करते हैं। चूँकि ये रसायन **अजैव-निम्नीकरणीय** होते हैं, अतः प्रत्येक पोषी स्तर पर उत्तरोत्तर संग्रहीत होते जाते हैं। किसी भी आहार शृंखला में **मनुष्य (या बाज) शीर्षस्थ होने से हमारे शरीर में यह रसायन सर्वाधिक सांद्रता में संचित** होते हैं (`गेहूँ, चावल, सब्जी, फल व मांस में मौजूद, जिन्हें केवल पानी से धोकर अलग नहीं किया जा सकता — पृ. 234!`)। इसे सीधे कम करने का उपाय फसलों पर **रासायनिक पीड़कनाशियों का उपयोग घटाना** है (`Group D Shift 13 PYQ`)।',
          },
        },
        {
          type: 'examTraps',
          title: {
            en: 'Numerical Worked Box (`1%` Sunlight vs `10%` Rule — Zero Mistake Formula)',
            hi: 'न्यूमेरिकल हल बॉक्स: सूर्य से पौधे (`1%`) बनाम पौधे से हिरण (`10%`) वाला सबसे खतरनाक रेलवे फँसाव!',
          },
          content: {
            en: '**Q:** Sunlight falling on grass = **`20,000 J`** (`or 1,000,000 J`). How much energy reaches **`Lion`** in `Grass -> Deer -> Lion`? **Step 1 (`Trap Step!`)**: Grass captures **ONLY `1%` of Sunlight**: `20,000 × 1/100 = 200 J` (`NOT 2,000 J!`). **Step 2 (`10% Law`)**: Deer gets `10%` of `200 J` = **`20 J`**. **Step 3 (`10% Law`)**: Lion gets `10%` of `20 J` = **`2 J`**! Conversely, if **`100 J` is given directly AT Producer (`Grass`)**, skip `1%` and simply divide by `10` per arrow (`Grass 100 J -> Deer 10 J -> Lion 1 J`).',
            hi: '**प्रश्न**: यदि घास पर पड़ने वाली **सौर ऊर्जा `20,000 J`** है, तो `घास → हिरण → शेर` में शेर को कितनी ऊर्जा मिलेगी? **चरण 1 (`असली ट्रैप!`)**: घास सौर प्रकाश का **केवल `1%`** लेती है = `20,000 × 1% = 200 J` (`2,000 J` नहीं!)। **चरण 2**: हिरण को `10%` = `20 J`। **चरण 3**: शेर को `10%` = **`2 J`**! *(ध्यान दें: यदि प्रश्न में सीधे ‘उत्पादक में `100 J` उपलब्ध है’ लिखा हो, तब प्रत्येक तीर पर सीधे ÷ 10 करें!)*',
          },
        },
      ],
    },
    {
      id: 'ozone-layer-cfc-garbage-enzymes',
      number: '13.2',
      flowDiagramKey: 'c10-ch13-ozone-waste-cycle',
      realImage: {
        imageUrl: '/ncert-notes/class10-bio-ch13/real/nasa-ozone-shield-antarctica.webp',
        caption: {
          en: 'Stratospheric Ozone (`O₃`) Depletion over Antarctica (NASA Satellite False-Color View): CFCs thinned the UV-absorbing shield in 1980s until the 1987 UNEP Montreal Freeze stabilized emissions.',
          hi: 'अंटार्कटिका के ऊपर समतापमंडलीय ओजोन (`O₃`) परत का अवक्षय (नासा उपग्रह चित्र): `1980` के दशक में CFCs से बनी इस क्षति को रोकने हेतु `1987 UNEP` समझौता हुआ।',
        },
      },
      title: {
        en: 'Stratospheric Ozone (`O₃`) Formation & CFC Depletion (`1987 UNEP`) + Enzyme Specificity & Waste Management (`Train Cups`)',
        hi: 'समतापमंडलीय ओजोन परत (`O₃`) क्षरण व `1987 UNEP` + एंजाइम विशिष्टता एवं कचरा प्रबंधन (`रेल कप केस`)',
      },
      summaryTag: {
        en: 'NCERT Pages 234–239 • Sec 13.2.1–13.2.2, Activities 13.4–13.9, O₃ UV Reactions, Plastic vs Bio & Kulhad Topsoil Loss',
        hi: 'NCERT पृ. 234–239 • भाग 13.2.1–13.2.2, क्रियाकलाप 13.4–13.9, O₃ समीकरण, एंजाइम नियम व रेल में डिस्पोजेबल कप',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Dual Nature of Ozone (`O₃`): Deadly Ground-Level Poison vs Life-Saving Stratospheric UV Shield (`Sec 13.2.1`)',
            hi: '1. ओजोन (`O₃`) का दोहरा रूप: भू-स्तर पर घातक विष, समतापमंडल में `UV` सुरक्षा कवच (`13.2.1`)',
          },
          content: {
            en: 'Compare normal **Oxygen (`O₂`)** (`essential for all aerobic respiration`) with triatomic **==Ozone (`O₃`, three oxygen atoms)==**: near Earth’s surface (`ground-level ozone/smog`), **`O₃` is a DEADLY POISON (`घातक विष`)**! Yet high up in the **stratosphere (`upper atmosphere`)**, Ozone performs a **life-saving shield role**: it **absorbs harmful Solar Ultraviolet (`UV`) radiation** that otherwise causes **==Skin Cancer (`त्वचा कैंसर`)==**, cataracts, and ecosystem damage (`ALP & Group D 2025 Shifts 19, 36, 38 exact PYQs!`). **How `O₃` forms (`Exact NCERT Equations p.235`)**: High-energy UV rays split `O₂` into two free oxygen atoms (**`O₂ —(UV)→ O + O`**), and each free `O` combines with another `O₂` molecule (**`O + O₂ → O₃`**). Around **`1980`**, scientists recorded a steep drop in stratospheric `O₃`, traced chiefly to synthetic **==Chlorofluorocarbons (`CFCs`)==** used as **refrigerants in refrigerators (`शीतलन`) and in fire extinguishers (`अग्निशमन`)** (`ALP CBT-2 & Group D Shift 4 PYQs`). In **`1987`**, the **United Nations Environment Programme (`UNEP — संयुक्त राष्ट्र पर्यावरण कार्यक्रम`)** forged a historic agreement to **freeze CFC production at `1986` levels (`Montreal Protocol`)**, making **CFC-free refrigerators mandatory** for global manufacturers!',
            hi: 'सामान्य **ऑक्सीजन (`O₂`, दो परमाणु)** सभी वायविक जीवों हेतु अनिवार्य है, जबकि तीन ऑक्सीजन परमाणु वाला **==ओजोन (`O₃`)== भू-स्तर पर एक घातक विष (`Deadly Poison`)** है! परंतु वायुमंडल के ऊपरी स्तर (**समतापमंडल**) में यही `O₃` सूर्य से आने वाली **हानिकारक पराबैंगनी (`UV`) विकिरण को सोखकर पृथ्वी को बचाती है** (`UV विकिरण से मानव में **त्वचा कैंसर** होता है — RRB Group D Shift 38 PYQ`)। **ओजोन निर्माण (`NCERT समीकरण पृ. 235`)**: उच्च-ऊर्जा UV विकिरण `O₂` को स्वतंत्र `O` परमाणुओं में तोड़ता है (**`O₂ —UV→ O + O`**), और फिर **`O + O₂ → O₃`** (`ओजोन`) बनता है। **`1980`** से ओजोन मात्रा में तीव्र गिरावट का मुख्य कारण मानव-संश्लेषित रसायन **==क्लोरोफ्लुओरोकार्बन (`CFCs`)==** निकला जिनका उपयोग **रेफ्रिजरेटर (`शीतलन`) व अग्निशमन (`Fire extinguishers`)** में होता था। फलतः **`1987` में संयुक्त राष्ट्र पर्यावरण कार्यक्रम (`UNEP`)** ने **CFC उत्पादन को `1986` के स्तर पर सीमित (`फ्रीज़`)** करने की सर्वानुमति बनायी और अब सभी कंपनियों हेतु **CFC-रहित फ्रिज** बनाना अनिवार्य है!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Why Bacteria Can’t Digest Plastic (`Enzyme Specificity`), Waste Classification & Train Cup Case Study (`Sec 13.2.2`)',
            hi: '2. प्लास्टिक अपघटन क्यों नहीं होता (`एंजाइम विशिष्टता`), कचरा वर्गीकरण व रेलगाड़ी चाय कप (`पृ. 235–238`)',
          },
          content: {
            en: '*(Note: The 2026–27 Hindi/English print edition retains a tiny numbering holdover `15.2.2` for **`13.2.2` Managing the Garbage we Produce** — cover every line carefully!)* Why do vegetable peels vanish in soil within days (`Act 13.5`) while plastic milk pouches sit untouched for centuries? Because **==Enzymes Are Specific in Their Action (`एंजाइम अपनी क्रिया में विशिष्ट होते हैं`)==** — breaking down a particular substance requires its matching **specific enzyme (`which is why eating coal gives humans ZERO energy! — NCERT p.236`)**. Microorganisms lack enzymes to break down man-made plastics, which respond only to slow physical heat/pressure. Therefore wastes fall into: **(a) ==Biodegradable (`जैव-निम्नीकरणीय`)==**: Broken down by **biological processes (`microbes/enzymes`)** — e.g., **spoiled food, vegetable/fruit peels, used tea leaves, paper, grass, flowers, wood, cotton, cake, leather (`NCERT Ex Q1 & ALP Shift 4`)**; **(b) ==Non-Biodegradable (`अजैव-निम्नीकरणीय`)==**: NOT broken down by biological processes (`persist inertly harming organisms, choking drains & causing biomagnification`) — e.g., **plastic bubble packs, milk pouches, medicine plastic bottles/strips, broken glass, metals, DDT**. Finally master **NCERT Box “Disposable Cups in Trains” (`p.238`)** & **`Act 13.9` E-waste**: Trains initially served tea in returnable **glass tumblers**, shifted to hygienic **disposable plastic cups** (`terrible waste burden`), tried clay **Kulhads (`कुल्हड़`)** (`abandoned because millions of daily kulhads destroyed vast quantities of fertile agricultural topsoil!`), and settled on **disposable paper cups (`biodegradable & hygienic!`)**. Likewise, electronic waste (`E-waste`, Act 13.9) holds hazardous heavy metals needing careful toxic disposal.',
            hi: '*(नोट: NCERT मुद्रण में शीर्षक `15.2.2` छपा होने के बावजूद यह अध्याय `13.2.2 कचरा प्रबंधन` का ही भाग है!)* भोजन की तरह प्रकृति में कचरा अपघटन भी **==एंजाइम विशिष्टता (`Specificity of Enzymes`)==** पर निर्भर है — किसी विशिष्ट पदार्थ के अपघटन हेतु विशिष्ट एंजाइम चाहिए (**इसीलिए कोयला खाने से मनुष्य को ऊर्जा नहीं मिल सकती — पृ. 236!**)। मानव-निर्मित प्लास्टिक हेतु जीवाणुओं-कवकों के पास एंजाइम न होने से वे सामान्य अवस्था में लंबे समय तक **अक्रिय (`Inert`)** बने रहते हैं। **दो वर्ग (`क्रियाकलाप 13.5`)**: **(1) ==जैव-निम्नीकरणीय (`Biodegradable`)==**: जैविक प्रक्रम द्वारा अपघटित (`सब्जी/फल छिलके, पत्तियाँ, चाय की पत्ती, कागज, लकड़ी, सूती, चमड़ा, फूल, केक — Ex Q1`)। **(2) ==अजैव-निम्नीकरणीय (`Non-Biodegradable`)==**: जैविक अपघटन असंभव (`प्लास्टिक थैली, बबल पैक, दूध पैकेट, दवा की बोतल/स्ट्रिप्स, काँच, DDT — ALP 2025 Shift 4`)। **रेलगाड़ियों में प्रयोज्य कप (`NCERT पृ. 238 बॉक्स`)**: पहले **काँच के गिलास** लौटाये जाते थे → स्वच्छता हेतु **प्लास्टिक डिस्पोजेबल कप** आए (गंभीर प्रदूषण) → विकल्प में **मिट्टी के कुल्हड़ (`Kulhad`)** आए, परंतु प्रतिदिन लाखों कुल्हड़ बनाने में **अत्यधिक उर्वर उपजाऊ मिट्टी नष्ट** होने से इन्हें बंद कर दिया गया → अंततः **कागज के डिस्पोजेबल कप (`जैव-निम्नीकरणीय व स्वच्छ`)** सर्वोत्तम साबित हुए! ई-कचरे (`Act 13.9`) में खतरनाक भारी धातुएँ भी विशेष सावधानी माँगती हैं।',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Railway Rapid Dates & Cup Order Hack: `1980–1986–1987` & `G -> P -> K -> Paper`',
            hi: 'रिवीजन ट्रिक: ओजोन वर्ष श्रृंखला (`1980 → 1986 → 1987 UNEP`) एवं रेल चाय कप क्रम',
          },
          content: {
            en: '**`1980`** (Ozone drop noticed) -> **`1987`** (**UNEP** protocol) froze CFCs at **`1986`** levels (`always remember: 1987 froze at 1986!`). Train Cups: **Glass** (washable) -> **Plastic** (persistent litter) -> **Kulhad** (killed fertile topsoil!) -> **Paper** (biodegradable winner!).',
            hi: '**ओजोन वर्ष सूत्र**: `1980` में क्षरण दिखा → **`1987` में UNEP समझौते** द्वारा CFC उत्पादन **`1986` के स्तर** पर रोका गया! रेल कप क्रम: **काँच → प्लास्टिक → कुल्हड़ (`उपजाऊ मिट्टी हानि`) → कागज कप (`जैव-निम्नीकरणीय विजेता`)**।',
          },
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      title: {
        en: 'TRAP 1: `1%` Sunlight Into Plants vs `10%` Up Food Chain (`Don’t Apply 10% to the Sun!`)',
        hi: 'जाल 1: सूर्य से पौधों में केवल `1%` ऊर्जा आती है (`10%` नियम केवल पौधों से आगे लागू होता है!)',
      },
      wrong: {
        en: 'Calculating plant energy as `10%` of incident solar energy (`e.g. 10,000 J solar -> 1,000 J plant`).',
        hi: 'सौर ऊर्जा पर सीधे `10%` लगाकर पौधों की ऊर्जा गिन लेना (`10,000 J सौर ऊर्जा → 1,000 J पौधा` मान लेना)।',
      },
      right: {
        en: '**NCERT p.232 Exact**: Terrestrial green leaves capture **ONLY `~1%` of falling sunlight** (`10,000 J -> 100 J plant`), and **THEN `10%` transfers per consumer hop** (`100 J -> 10 J herbivore -> 1 J carnivore`)!',
        hi: '**सटीक NCERT नियम (`पृ. 232`)**: हरी पत्तियाँ सूर्य प्रकाश का **केवल `1%`** लेती हैं (`10,000 → 100 J पौधा`); **इसके बाद ही** प्रत्येक उपभोक्ता स्तर पर **`10%`** (`100 → 10 → 1 J`) आगे बढ़ता है!',
      },
    },
    {
      title: {
        en: 'TRAP 2: Pond/Lake = NATURAL, while Garden/Crop-Field/Aquarium = ARTIFICIAL!',
        hi: 'जाल 2: तालाब व झील = प्राकृतिक पारितंत्र | खेत, बगीचा व एक्वेरियम = कृत्रिम पारितंत्र!',
      },
      wrong: {
        en: 'Thinking green Gardens or Crop-fields are Natural, or thinking Ponds with fish are Artificial.',
        hi: 'हरे-भरे खेत या बगीचे को प्राकृतिक समझ बैठना और तालाब को कृत्रिम मान लेना।',
      },
      right: {
        en: '**Forest, Pond & Lake (`वन, तालाब, झील`)** occur naturally with complete decomposer cycles (**Natural**); **Garden, Crop-field & Aquarium (`बगीचा, खेत, जल जीवशाला`)** are built/managed by humans (**Artificial** — *Group D 2025 Shift 47 PYQ*).',
        hi: '**वन, तालाब व झील** स्वतः संतुलित **प्राकृतिक पारितंत्र** हैं; जबकि **बगीचा, खेत व जल जीवशाला** मानव-निर्मित **कृत्रिम पारितंत्र** हैं (`Group D 2025 Shift 47 PYQ`)!',
      },
    },
    {
      title: {
        en: 'TRAP 3: Energy Drops Upward (`↓`), While DDT/Pesticides Magnify Upward (`↑`) & Water Washing Fails!',
        hi: 'जाल 3: ऊपर जाने पर ऊर्जा `↓` घटती है पर DDT/पीड़कनाशी `↑` बढ़ते हैं — और धोने से नहीं हटते!',
      },
      wrong: {
        en: 'Thinking carnivores get more energy OR thinking washing apples/wheat removes systemic pesticides.',
        hi: 'शीर्ष उपभोक्ता में अधिक ऊर्जा मानना या सोचना कि गेहूँ-सब्जी धोने से रसायन साफ हो जाते हैं।',
      },
      right: {
        en: '**Energy ALWAYS decreases (`10% rule`)** and flows **UNIDIRECTIONALLY**, while non-biodegradable **DDT/pesticides biomagnify UPWARD (`highest in top humans/eagles`)** inside tissues where **tap washing cannot remove them** (`NCERT p.234`)!',
        hi: 'ऊर्जा सदैव ऊपर जाते घटती (`↓ 10%`) व **एकदिशिक** रहती है, जबकि **जैव-आवर्धन** से अघुलनशील विष ऊपर बढ़ते (`↑`) व ऊतकों में बैठ जाते हैं जो पानी से धोकर भी नहीं निकलते!',
      },
    },
    {
      title: {
        en: 'TRAP 4: Ozone (`O₃`) Is BOTH a Ground Poison AND a Stratospheric Savior (`Depends on Altitude!`)',
        hi: 'जाल 4: ओजोन (`O₃`) भू-स्तर पर विष पर समतापमंडल में रक्षक (`ऊँचाई से तय होता है!`)',
      },
      wrong: {
        en: 'Calling ozone either completely harmless oxygen or always a greenhouse/harmful gas everywhere.',
        hi: 'ओजोन को हर जगह लाभदायक ऑक्सीजन समझना या समतापमंडलीय ओजोन को भी हानिकारक मान लेना।',
      },
      right: {
        en: 'Near Earth (**ground level**, `Group D Shift 41`), **`O₃` is a deadly poison (`lethal toxic pollutant`)**; in the **upper stratosphere**, `O₃` is vital for absorbing cancer-causing **UV rays (`Sec 13.2.1`)**!',
        hi: '**भू-स्तर (`वायुमंडल के निचले भाग`)** पर ओजोन एक **घातक विष** है (`Group D Shift 41`), परंतु **समतापमंडल** में यह **UV विकिरण रोककर त्वचा कैंसर से बचाती है**!',
      },
    },
    {
      title: {
        en: 'TRAP 5: Why Leather (`Ex Q1`) Is BIODEGRADABLE While "Biodegradable Waste Everywhere" STILL Harms (`Ex Q8`)!',
        hi: 'जाल 5: चमड़ा (`Ex Q1`) जैव-निम्नीकरणीय है! और सारा कचरा जैव-निम्नीकरणीय होने पर भी हानि क्यों? (`Ex Q8`)',
      },
      wrong: {
        en: 'Skipping option `(a) Grass, flowers & leather` in Ex Q1, OR thinking biodegradable piles cause zero harm.',
        hi: 'Ex Q1 में `चमड़ा` को अजैवनिम्नीकरणीय समझ छोड़ देना, या सोचना कि जैव-निम्नीकरणीय ढेर से कोई नुकसान नहीं।',
      },
      right: {
        en: '**Official NCERT Answer Key (`jhsc1an`)**: Leather (`animal hide`) IS biological/organic, so **ALL THREE `(a)`, `(c)` and `(d)`** in Ex Q1 are purely biodegradable! Yet (`Ex Q8`) huge uncomposted piles still release foul gases (`CH₄/H₂S`), breed flies/disease vectors, and pollute!',
        hi: '**आधिकारिक NCERT उत्तरकुंजी**: चमड़ा प्राकृतिक जैव उत्पाद है अतः Ex Q1 में **`(a)`, `(c)` व `(d)` तीनों** जैव-निम्नीकरणीय हैं! पर (`Ex Q8`) अधिक कचरा सड़ने से दुर्गंध, मक्खियाँ व रोग वाहक भी फैलते हैं!',
      },
    },
  ],
  pioneers: [
    {
      name: { en: 'Raymond Lindeman (`1942 Ten Percent Law Pioneer`)', hi: 'रेमंड लिंडमैन (`1942 दस प्रतिशत ऊर्जा नियम`)' },
      country: { en: 'American Ecologist (`Sec 13.1.1`)', hi: 'अमेरिकी पारिस्थितिकी विज्ञानी (भाग 13.1.1)' },
      badge: { en: '10% Trophic Transfer Law', hi: '10% पोषी ऊर्जा नियम' },
      fact: {
        en: 'Formulated the **10% ecological efficiency principle**, proving why ~90% energy dissipates as metabolic heat at every trophic jump (`limiting chains to 3–4 steps`).',
        hi: 'इन्होंने **10% ऊर्जा स्थानांतरण सिद्धांत** प्रतिपादित किया — कि क्यों प्रत्येक पोषी स्तर पर `~90%` ऊर्जा व्यय होने से शृंखला `3–4` स्तरों तक सीमित रहती है।',
      },
    },
    {
      name: { en: 'UNEP & Montreal Protocol (`1987 Ozone Accord`)', hi: 'UNEP एवं मॉन्ट्रियल प्रोटोकॉल (`1987 ओजोन समझौता`)' },
      country: { en: 'United Nations Environment Programme (`Sec 13.2.1`)', hi: 'संयुक्त राष्ट्र पर्यावरण कार्यक्रम (भाग 13.2.1)' },
      badge: { en: 'Froze CFCs at 1986 Levels', hi: 'CFC उत्पादन 1986 स्तर पर फ्रीज़' },
      fact: {
        en: 'Following rapid 1980s stratospheric ozone thinning by **CFCs**, the **1987 UNEP pact** froze global CFC manufacturing at **1986 levels**, mandating CFC-free refrigerators.',
        hi: '`1980` के दशक में CFCs से तेज ओजोन क्षरण के बाद **1987 के UNEP समझौते** ने विश्व भर में CFC उत्पादन को **1986 के स्तर पर सीमित** व फ्रिज हेतु CFC-मुक्त मानक अनिवार्य किया।',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-biosphere-jar',
      figRef: { en: 'NCERT Activity 13.1 (`Self-Sustaining Sealed Biosphere`)', hi: 'NCERT क्रियाकलाप 13.1 — स्वनिर्वाह बंद पारितंत्र' },
      title: {
        en: 'Closed Glass Ecosystem Jars: Balanced Producers (`Plants`), Moisture & Microbes Recycle Gas & Nutrients Using Only Light',
        hi: 'बंद काँच का स्वनिर्वाह पारितंत्र: केवल सूर्यप्रकाश से पौधे (`O₂/भोजन`) व सूक्ष्मजीव (`CO₂/खनिज`) चक्र चलाते रहते हैं',
      },
      imageUrl: '/ncert-notes/class10-bio-ch13/real/closed-biosphere-jars.webp',
      hotspots: [
        {
          en: 'Light enters -> autotrophs fix C into glucose (`1%` efficiency) while microbes/decomposers recycle gases & minerals continuously.',
          hi: 'प्रकाश अंदर जाता है (ऊर्जा एकदिशिक), जबकि पदार्थ व खनिज भीतर अपघटकों द्वारा पुनःचक्रित होते रहते हैं।',
        },
      ],
    },
    {
      id: 'vis-aquarium',
      figRef: { en: 'NCERT Sec 13.1 / Act 13.1 (`Human-Made Aquarium`)', hi: 'NCERT भाग 13.1 — मानव-निर्मित जल जीवशाला' },
      title: {
        en: 'Planted Freshwater Aquarium: Classic Human-Made Ecosystem Needing Periodic Cleaning (`Low Natural Decomposers`)',
        hi: 'जल जीवशाला (`Aquarium`): पौधे व मछली युक्त कृत्रिम पारितंत्र जिसे कम अपघटकों कारण नियमित सफाई चाहिए',
      },
      imageUrl: '/ncert-notes/class10-bio-ch13/real/planted-aquarium-ecosystem.webp',
      hotspots: [
        {
          en: 'NCERT Question (`p.231`): Unlike wild ponds/lakes, aquariums lack enough natural decomposers to break down fish waste safely.',
          hi: 'तालाब/झील (`प्राकृतिक`) के विपरीत, एक्वेरियम व खेत/बगीचा **कृत्रिम पारितंत्र** हैं।',
        },
      ],
    },
    {
      id: 'vis-pond-frog',
      figRef: { en: 'NCERT Fig 13.1c (`Pond Ecosystem Trophic Link`)', hi: 'NCERT चित्र 13.1c — तालाब पारितंत्र पोषी कड़ी' },
      title: {
        en: 'Natural Pond Producers & Amphibian Consumer: Lotus/Lily Leaves (`T1` Solar Fixation) & Frog (`T3` Carnivore Link)',
        hi: 'तालाब प्राकृतिक पारितंत्र: कमल/जलीय पादप (`T1 उत्पादक`) एवं कीटभक्षी मेंढक (`T3 द्वितीयक उपभोक्ता`)',
      },
      imageUrl: '/ncert-notes/class10-bio-ch13/real/pond-lily-frog-consumer.webp',
      hotspots: [
        {
          en: 'Ponds stay self-cleaning via bacteria & bottom fungi; frogs link herbivores/insects (`T2`) to snakes (`T4`) in Fig 13.1.',
          hi: 'तालाब प्राकृतिक पारितंत्र है; यहाँ `घास/शैवाल → कीट → मेंढक → साँप` पोषी शृंखला बनती है।',
        },
      ],
    },
    {
      id: 'vis-fungi-decomposer',
      figRef: { en: 'NCERT Sec 13.1 (`Decomposer Bacteria & Fungi`)', hi: 'NCERT भाग 13.1 — कवक व जीवाणु अपघटक' },
      title: {
        en: 'Saprophytic Forest Fungi Breaking Down Dead Wood: Converting Complex Organic Remains into Soil Minerals (`Group D PYQ`)',
        hi: 'मृत लकड़ी का अपघटन करते वन कवक (`Fungi`): जटिल कार्बनिक पदार्थों को सरल अकार्बनिक मृदा खनिज में बदलना',
      },
      imageUrl: '/ncert-notes/class10-bio-ch13/real/forest-fungi-decomposer.webp',
      hotspots: [
        {
          en: 'Without fungi & bacteria (`soil saprophytes`), dead wood/animals never rot and natural mineral replenishment of soil ceases.',
          hi: 'जीवाणु व कवक के बिना मृत जैव अवशेष सड़ेंगे नहीं और पौधों को मृदा से खनिज पुनः मिलना बंद हो जाएगा!',
        },
      ],
    },
    {
      id: 'vis-nasa-ozone',
      figRef: { en: 'NCERT Sec 13.2.1 (`Stratospheric Ozone Shield`)', hi: 'NCERT भाग 13.2.1 — समतापमंडलीय ओजोन क्षरण' },
      title: {
        en: 'Antarctic Ozone Hole (`NASA Nimbus/Aura Monitoring`): CFCs Catalyzed `O₃` Thinning -> Halted by `1987` UNEP Protocol',
        hi: 'अंटार्कटिका ओजोन छिद्र (`NASA उपग्रह माप`): रेफ्रिजरेटर के CFCs द्वारा `O₃` क्षरण व `1987 UNEP` रोकथाम',
      },
      imageUrl: '/ncert-notes/class10-bio-ch13/real/nasa-ozone-shield-antarctica.webp',
      hotspots: [
        {
          en: 'Upper-atmosphere `O₃` absorbs skin-cancer-causing UV rays (`ALP 2025 CBT-2`: refrigerants release chlorine catalysts breaking O₃!).',
          hi: 'प्रशीतक-द्रव्यों से निकलने वाले CFC पदार्थ समतापमंडल में ओजोन विघटन को उत्प्रेरित करते हैं (`ALP CBT-2 PYQ`)।',
        },
      ],
    },
  ],
  activities: [
    {
      id: 'act-13-1',
      title: { en: 'Activity 13.1: Building a Self-Sustaining Aquarium (`Human-Made Ecosystem`, `p.231`)', hi: 'क्रियाकलाप 13.1: स्वनिर्वाह जल जीवशाला (`Aquarium`) निर्माण व सफाई विश्लेषण' },
      setup: { en: 'Stock a large glass tank/jar with water, an oxygen pump (`aerator/वातित्र`), fish food, fish, and aquatic plants (`plus imagine leaving it uncleaned if fish/plants die`).', hi: 'बड़े जार में जल, मछलियाँ, वायु पंप (`वातित्र`), मछली भोजन व कुछ जलीय पौधे लगाएँ (`व सोचें कि मृत्यु पर सफाई न हो तो क्या होगा?`)।' },
      observation: { en: 'Plants supply `O₂` & food making it **self-sustaining** (`artificial ecosystem`), yet unlike **ponds/lakes**, it **needs periodic cleaning** because it lacks abundant natural **decomposers (`bacteria & fungi`)**!', hi: 'पौधों संग यह **स्वनिर्वाह मानव-निर्मित पारितंत्र** बनता है, परंतु तालाब/झील के विपरीत इसमें अपघटक कम होने से नियमित सफाई आवश्यक है; अपघटकों की अनुपस्थिति में मृदा पुनःपूर्ति रुक जाएगी!' },
      predictQuestion: {
        question: { en: 'Why do wild ponds/lakes NOT need manual cleaning like a home aquarium (`Activity 13.1`)?', hi: 'जंगली तालाबों/झीलों को घरेलू एक्वेरियम की तरह हाथ से साफ क्यों नहीं करना पड़ता (`क्रियाकलाप 13.1`)?' },
        options: { en: ['Ponds have zero bacteria', 'Ponds contain abundant natural decomposers (bacteria/fungi) recycling dead waste', 'Fishes eat only stones in ponds', 'Sunlight evaporates fish waste directly'], hi: ['तालाब में जीवाणु नहीं होते', 'तालाबों में प्राकृतिक अपघटक (जीवाणु व कवक) मृत अवशेषों को विघटित करते रहते हैं', 'तालाब की मछलियाँ कचरा नहीं बनातीं', 'सूर्यप्रकाश कचरा भाप बना देता है'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-13-2',
      title: { en: 'Activity 13.2: Predators in an Aquarium & Trophic Dependency (`p.231`)', hi: 'क्रियाकलाप 13.2: जलीय परभक्षी परीक्षण व न्यूनतम 3-चरणीय शृंखला निर्माण' },
      setup: { en: 'Ensure carnivorous aquatic animals that eat tankmates are NOT stocked together; map a 3-step eating chain (`A -> B -> C`) and evaluate if any one group is “most important”.', hi: 'ध्यान रखें कि एक-दूसरे को खाने वाले जलीय जंतु साथ न रखें; कम-से-कम तीन चरणों की जलीय शृंखला लिखें व चर्चा करें कि क्या कोई एक समूह सर्वाधिक महत्त्वपूर्ण है।' },
      observation: { en: 'Mixing carnivores wipes out prey; in balanced chains (`Algae -> Prawn -> Fish`), **NO single group works alone** (`producers need decomposers for minerals, consumers depend on producers!`).', hi: 'परभक्षी रखने पर छोटे जंतु खाए जाएँगे; संतुलित शृंखला (`शैवाल → झींगा/केकड़ा → मछली`) में **सभी स्तर परस्पर अन्योन्याश्रित** हैं — केवल एक समूह से तंत्र नहीं चलता।' },
      predictQuestion: {
        question: { en: 'If a predator fish is dropped into a peaceful herbivore tank (`Activity 13.2`), what breaks?', hi: 'शांत शाकाहारी मछलियों के टैंक में मांसाहारी जीव छोड़ देने से क्या प्रभावित होगा?' },
        options: { en: ['Smaller prey population collapses breaking the artificial balance', 'Producers stop doing photosynthesis in sunlight', 'Water turns into CFC gas', 'Minerals multiply infinitely'], hi: ['शिकार किए जाने वाले छोटे जंतु समाप्त होकर टैंक असंतुलित कर देंगे', 'उत्पादक प्रकाश संश्लेषण बंद कर देंगे', 'जल CFC बन जाएगा', 'खनिज अनंत हो जाएँगे'] },
        correctIndex: 0,
      },
    },
    {
      id: 'act-13-3',
      title: { en: 'Activity 13.3: Pesticide Residues in Food News & Biomagnification Control (`p.234`)', hi: 'क्रियाकलाप 13.3: खाद्य पदार्थों में पीड़कनाशी अवशेष, राज्य प्रतिबंध व बचाव उपाय' },
      setup: { en: 'Analyze news reports on unsafe pesticide levels in grains, fruits, vegetables & packaged food, state bans, sources, and mitigation.', hi: 'समाचारपत्रों में भोज्य पदार्थों में पीड़क रसायनों पर प्रतिबंध व उनके स्रोतों एवं कमी के उपायों का विश्लेषण करें।' },
      observation: { en: 'Excess farm spraying enters crops via soil/water, **biomagnifying up to meat/milk/humans**; bans on persistent toxins + **organic/biological pest control** curb human accumulation.', hi: 'रसायन मिट्टी/जल से अनाज, फल-सब्जी व मांस-दूध के माध्यम से मनुष्य तक पहुँचते हैं; **प्रतिबंध व जैविक पीड़क नियंत्रण** से ही शरीर में इनकी मात्रा घटेगी।' },
      predictQuestion: {
        question: { en: 'Why did states ban certain ready-made food/crop chemicals in Activity 13.3 (`NCERT p.234`)?', hi: 'क्रियाकलाप 13.3 में राज्यों द्वारा अत्यधिक पीड़क रसायनों पर रोक क्यों लगाई जाती है?' },
        options: { en: ['Simple tap washing removes them instantly', 'They are non-biodegradable and biomagnify into human body organs', 'They turn plastic into paper', 'They increase solar UV capture'], hi: ['सादा पानी उन्हें तुरंत धो देता है', 'वे अजैवनिम्नीकरणीय होकर जैव-आवर्धन द्वारा मानव शरीर में सर्वाधिक संचित होते हैं', 'वे प्लास्टिक को कागज बनाते हैं', 'वे सौर ऊर्जा बढ़ाते हैं'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-13-4',
      title: { en: 'Activity 13.4: Ozone-Depleting Chemicals & Montreal Hole Trends (`p.235`)', hi: 'क्रियाकलाप 13.4: ओजोन क्षरण रसायन, नियमन कानून व ओजोन-छिद्र प्रगति जाँच' },
      setup: { en: 'Investigate from library/news which gases deplete `O₃`, how international laws regulated them, and recent ozone-hole size changes.', hi: 'पुस्तकालय/समाचार से पता करें कि ओजोन क्षरण के उत्तरदायी रसायन कौन-से हैं और नियमन कानूनों से ओजोन-छिद्र आकार में क्या अंतर आया।' },
      observation: { en: '**CFCs (`plus halons/HCFCs`)** trigger catalytic `O₃` destruction; after the **`1987` UNEP Montreal Freeze (`1986` cap)**, atmospheric CFCs dropped and Antarctic ozone hole recovery has slowly begun!', hi: '**CFCs (`रेफ्रिजरेशन व अग्निशमन`)** मुख्य कारक थे; `1987 UNEP / मॉन्ट्रियल` रोकथाम से अब समतापमंडल की ओजोन परत धीमी पुनर्बहाली की ओर है।' },
      predictQuestion: {
        question: { en: 'In `1987`, UNEP forged a consensus among nations to freeze CFC manufacturing at which year’s production level?', hi: '1987 में UNEP में CFC उत्पादन को किस वर्ष के स्तर पर सीमित रखने की सर्वानुमति बनी (`NCERT पृ. 235`)?' },
        options: { en: ['1972 level', '1980 level', '1986 level', '1992 level'], hi: ['1972 स्तर', '1980 स्तर', '1986 स्तर', '1992 स्तर'] },
        correctIndex: 2,
      },
    },
    {
      id: 'act-13-5',
      title: { en: 'Activity 13.5: Garden Pit Burial Test (`15 cm` Soil Depth Over 15-Day Intervals, `p.236`)', hi: 'क्रियाकलाप 13.5: `15 cm` मिट्टी के गड्ढे में घरेलू कचरे का 15-दिवसीय अपघटन परीक्षण' },
      setup: { en: 'Bury daily kitchen waste (`spoiled food, vegetable peels, tea leaves`), empty milk pouch/carton, waste paper, empty medicine bottle/strips, bubble pack, old rags & broken shoes under **`15 cm` moist soil**; inspect every **15 days**.', hi: 'रसोई कचरा, दूध की थैली/डिब्बे, कागज, दवा की बोतल/स्ट्रिप्स, बबल पैक, फटे कपड़े व टूटे जूते **`15 cm` गहरी नम मिट्टी** में दबाकर हर 15 दिन अवलोकन करें।' },
      observation: { en: '**Vegetable peels, spoiled food & tea leaves rot fastest** (`biodegradable`), followed slowly by paper/cotton rags; **plastic bubble pack, milk pouches, medicine bottles/strips stay unchanged** (`non-biodegradable`)!', hi: '**सब्जियों के छिलके, संदूषित भोजन व चाय पत्ती अतिशीघ्र अपघटित** होते हैं (`कागज/कपड़ा धीरे`), जबकि **बबल पैक, दूध पैकेट व दवा की प्लास्टिक बोतलें लंबे समय तक अपरिवर्तित** रहती हैं!' },
      predictQuestion: {
        question: { en: 'In Activity 13.5’s soil-pit burial test, which group remains UNCHANGED after months (`ALP Shift 4`)?', hi: 'क्रियाकलाप 13.5 के मिट्टी गड्ढे में दबाने पर कौन-सा समूह महीनों बाद भी अपरिवर्तित रहता है (`ALP 2025 PYQ`)?' },
        options: { en: ['Vegetable peels, spoiled food & tea leaves', 'Waste paper & cotton rags', 'Plastic bubble pack, regular milk packets & medicine plastic bottles', 'Flowers & fallen garden leaves'], hi: ['सब्जियों के छिलके व चाय पत्ती', 'रद्दी कागज व सूती कपड़े', 'प्लास्टिक बबल पैक, दूध के पैकेट व दवा की प्लास्टिक बोतलें', 'फूल व पत्तियाँ'] },
        correctIndex: 2,
      },
    },
    {
      id: 'act-13-6',
      title: { en: 'Activity 13.6: Longevity of Plastics & "Biodegradable Plastics" Check (`p.236`)', hi: 'क्रियाकलाप 13.6: अजैवनिम्नीकरणीय आयु व ‘जैव-निम्नीकरणीय प्लास्टिक’ अध्ययन' },
      setup: { en: 'Research how many decades/centuries conventional plastics persist in soil/oceans and examine whether modern **biodegradable plastics (`like PLA/starch blends`)** still harm ecosystems.', hi: 'पता लगाएँ कि साधारण प्लास्टिक कितने वर्षों तक बना रहता है और क्या आज के ‘जैव-निम्नीकरणीय प्लास्टिक’ भी हानि पहुँचा सकते हैं।' },
      observation: { en: 'Conventional plastics persist **hundreds of years (`inert`)**; many "biodegradable" plastics need **industrial high-temp composting** rather than open soil/sea to break down cleanly!', hi: 'साधारण प्लास्टिक सैकड़ों वर्षों तक बना रहता है, और कई ‘जैव-निम्नीकरणीय प्लास्टिक’ भी बिना विशेष खाद-तापमान के सामान्य मिट्टी/समुद्र में तुरंत नहीं घुलते!' },
      predictQuestion: {
        question: { en: 'Why are synthetic plastics described in NCERT `Sec 13.2.2` as generally "inert" in soil?', hi: 'NCERT भाग 13.2.2 में प्लास्टिक जैसे पदार्थों को सामान्यतः "अक्रिय (`Inert`)" क्यों कहा गया है?' },
        options: { en: ['Bacteria possess zero specific enzymes to digest them biologically', 'Heat and pressure never touch plastic', 'Plastic dissolves quickly in rainwater', 'Plastic kills sunlight'], hi: ['सूक्ष्मजीवों के पास उन्हें अपघटित करने हेतु विशिष्ट एंजाइम नहीं होते', 'ऊष्मा और दाब का इन पर प्रभाव नहीं होता', 'प्लास्टिक बारिश में घुल जाता है', 'प्लास्टिक सूर्यप्रकाश नष्ट करता है'] },
        correctIndex: 0,
      },
    },
    {
      id: 'act-13-7',
      title: { en: 'Activity 13.7: Home & Classroom Waste Audit + Local Body Segregation (`p.237`)', hi: 'क्रियाकलाप 13.7: घर व कक्षा के दैनिक कचरे की गणना व पृथक्करण व्यवस्था' },
      setup: { en: 'Measure daily kg waste generated at home and school classroom; check how much is biodegradable vs whether Panchayat/Municipality/RWA separates dry vs wet bins.', hi: 'घर व कक्षा से प्रतिदिन निकलने वाले कचरे का मापन करें और देखें कि क्या नगरपालिका/पंचायत में जैव व अजैव कचरा अलग करने की व्यवस्था है।' },
      observation: { en: 'Most **classroom waste (`paper/pencil shavings/wrappers`)** and **kitchen peels** are compostable/recyclable if **segregated at source (`Green Wet vs Blue Dry bins`)** before dumping!', hi: 'यदि स्रोत पर ही **गीला (`हरा डस्टबिन`) व सूखा (`नीला डस्टबिन`) कचरा अलग** कर दिया जाए, तो जैविक भाग खाद और प्लास्टिक/कागज पुनर्चक्रण में जा सकते हैं।' },
      predictQuestion: {
        question: { en: 'What is the most effective household practice to reduce permanent landfill waste volume (`Group D Shift 46`)?', hi: 'अजैवनिम्नीकरणीय कचरे की मात्रा कम करने हेतु सबसे प्रभावी घरेलू व्यवहार क्या है (`Group D Shift 46 PYQ`)?' },
        options: { en: ['Bury all plastic inside soil', 'Dump mixed trash into ponds', 'Use reusable cloth bags & recyclable/segregated products', 'Use single-use disposable plates daily'], hi: ['सारा प्लास्टिक मिट्टी में मिलाना', 'मिश्रित कचरा जलाशय में फेंकना', 'पुनः उपयोग योग्य (कपड़े के थैले) व पुनर्चक्रणीय उत्पादों का प्रयोग करना', 'डिस्पोजेबल प्लास्टिक प्लेट बढ़ाना'] },
        correctIndex: 2,
      },
    },
    {
      id: 'act-13-8',
      title: { en: 'Activity 13.8: Local Sewage Treatment & Industrial Effluent Check (`p.237`)', hi: 'क्रियाकलाप 13.8: स्थानीय वाहित मल (`Sewage`) एवं औद्योगिक अपशिष्ट निपटान जाँच' },
      setup: { en: 'Survey local sewage pipelines and nearby factories to ensure untreated sewage or toxic factory effluents do NOT poison local rivers/soil.', hi: 'पता लगाएँ कि आपके क्षेत्र के जलाशय अनुपचारित वाहित मल या फैक्टरी अपशिष्ट से प्रदूषित तो नहीं हो रहे।' },
      observation: { en: 'Untreated sewage causes oxygen depletion & waterborne pathogens, while untreated industrial chemicals leach persistent **heavy metals/toxins (`soil & groundwater pollution -> biomagnification!`)**.', hi: 'अनुपचारित मल व औद्योगिक रसायन नदी-तालाब व मृदा को विषाक्त कर **जलीय जीवन व जैव-आवर्धन** संकट बढ़ाते हैं।' },
      predictQuestion: {
        question: { en: 'Why must sewage & industrial liquid wastes be treated BEFORE discharge into ponds/rivers (`Activity 13.8`)?', hi: 'वाहित मल व औद्योगिक तरल अपशिष्ट को जलाशयों में छोड़ने से पहले उपचारित क्यों करना चाहिए?' },
        options: { en: ['To prevent organic oxygen crash and non-biodegradable chemical pollution of water & soil', 'To increase plastic production', 'To deplete river ozone', 'To create Kulhads'], hi: ['जल व मृदा में जैविक व रासायनिक विषाक्त प्रदूषण रोकने हेतु', 'प्लास्टिक बढ़ाने हेतु', 'नदी ओजोन घटाने हेतु', 'कुल्हड़ बनाने हेतु'] },
        correctIndex: 0,
      },
    },
    {
      id: 'act-13-9',
      title: { en: 'Activity 13.9: Hazardous E-Waste Components & Plastic Recycling Impact (`p.238`)', hi: 'क्रियाकलाप 13.9: ई-कचरे (`E-Waste`) के विषैले घटक एवं प्लास्टिक पुनर्चक्रण का प्रभाव' },
      setup: { en: 'Investigate which hazardous elements exist in discarded electronics (`phones, batteries, TVs`) and how industrial plastic recycling works & affects the environment.', hi: 'पता लगाएँ कि इलेक्ट्रॉनिक वस्तुओं के निपटान में किन खतरनाक तत्वों से बचना जरूरी है व प्लास्टिक पुनर्चक्रण का पर्यावरण पर क्या प्रभाव होता है।' },
      observation: { en: 'E-waste holds toxic **heavy metals (`Lead, Mercury, Cadmium, Brominated flame retardants`)** leaking into groundwater if burnt/dumped; plastic recycling reduces virgin fossil demand though melting releases fumes/microplastics if unregulated.', hi: 'ई-कचरे में **सीसा (`Pb`), पारा (`Hg`), कैडमियम (`Cd`)** जैसे विषैले भारी तत्व होते हैं जो जलाने/दबाने पर जल-मृदा विषैली करते हैं; वहीं प्लास्टिक पुनर्चक्रण उपयोगी होने पर भी अनियंत्रित पिघलाने से धुआँ छोड़ सकता है।' },
      predictQuestion: {
        question: { en: 'Why shouldn’t old batteries, circuit boards & mobiles (`E-waste`, Act 13.9) be burnt in open trash?', hi: 'पुरानी बैटरियों व इलेक्ट्रॉनिक कचरे (`E-Waste`) को खुले कूड़े में क्यों नहीं जलाना चाहिए (`क्रियाकलाप 13.9`)?' },
        options: { en: ['They become biodegradable soil humus when burnt', 'They release toxic heavy metals & hazardous fumes contaminating air, soil & water', 'They generate stratospheric ozone O₃ cleanly', 'They attract earthworms'], hi: ['जलने पर वे जैविक खाद बन जाते हैं', 'वे विषैले भारी धातु व जहरीला धुआँ छोड़ कर वायु, जल व मृदा दूषित करते हैं', 'वे स्वच्छ समतापमंडलीय O₃ बनाते हैं', 'वे केंचुए बढ़ाते हैं'] },
        correctIndex: 1,
      },
    },
  ],
  tables: [
    {
      id: 'tbl-13-1',
      title: {
        en: 'Natural vs Artificial (`Human-Made`) Ecosystems (`NCERT Sec 13.1 & Group D 2025 PYQ`)',
        hi: 'प्राकृतिक बनाम कृत्रिम (मानव-निर्मित) पारितंत्र की संपूर्ण परीक्षा सारणी (`NCERT 13.1`)',
      },
      headers: {
        en: ['Feature', 'Natural Ecosystems', 'Artificial / Human-Made Ecosystems'],
        hi: ['विशेषता', 'प्राकृतिक पारितंत्र (`Natural`)', 'कृत्रिम / मानव-निर्मित (`Artificial`)'],
      },
      rows: [
        [{ en: '**NCERT Examples**', hi: '**NCERT सटीक उदाहरण**' }, { en: '**Forest (`वन`), Pond (`तालाब`), Lake (`झील`)**', hi: '**वन, तालाब, झील (`व-ता-झी`)**' }, { en: '**Crop-field (`खेत`), Garden (`बगीचा`), Aquarium (`जल जीवशाला`)**', hi: '**खेत, बगीचा, जल जीवशाला (`खे-ब-ए`)**' }],
        [{ en: '**Self-Sustaining & Cleaning**', hi: '**स्व-निर्वाह व सफाई**' }, { en: 'Self-regulated by rich natural **decomposer cycle** (`no manual cleaning`)', hi: 'भरपूर प्राकृतिक अपघटकों से **स्वतः साफ व संतुलित**' }, { en: 'Needs human fertilizer/water & **periodic cleaning** (`aquarium lacks decomposers!`)', hi: 'सिंचाई, खाद व **नियमित सफाई जरूरी** (`एक्वेरियम में अपघटक कम!`)' }],
        [{ en: '**RRB PYQ Trap**', hi: '**रेलवे परीक्षा फँसाव**' }, { en: 'High species diversity (`food web resilience`)', hi: 'अधिक जैव-विविधता व स्थायी आहार जाल' }, { en: '**Crop-field (`Group D Shift 47`)** is human-managed monoculture!', hi: '**खेत (`Crop-field`)** सदैव मानव-निर्मित (कृत्रिम) उत्तर चुनें!' }],
      ],
    },
    {
      id: 'tbl-13-2',
      title: {
        en: 'Four Trophic Levels, `1% / 10%` Energy Cascade & Inverse Biomagnification Numericals (`Sec 13.1.1`)',
        hi: 'पोषी स्तर (`T1–T4`), `1% सौर / 10% ऊर्जा` नियम एवं विपरीत जैव-आवर्धन तुलना सारणी',
      },
      headers: {
        en: ['Trophic Level (`Fig 13.2`)', 'Organism Guild & Example', 'Available Energy (`1%` Sun -> `10%` Hop)', 'Toxin Concentration (`Biomagnification`)'],
        hi: ['पोषी स्तर (`चित्र 13.2`)', 'जीव वर्ग व उदाहरण', 'उपलब्ध ऊर्जा (`1%` सौर → `10%` नियम)', 'DDT/रसायन सांद्रता (`जैव-आवर्धन`)'],
      },
      rows: [
        [{ en: '**1st Level (`T1` Base)**', hi: '**प्रथम पोषी स्तर (`T1`)**' }, { en: '**Producers / Autotrophs**: Green Plants & Blue-Green Algae (`Grass/Tree`)', hi: '**उत्पादक / स्वपोषी**: हरे पौधे, घास व नील-हरित शैवाल' }, { en: '**`10,000 J`** (`ONLY ~1% of 10,00,000 J sunlight!`); **Largest population!**', hi: '**`10,000 J`** (`10 लाख सौर ऊर्जा का केवल ~1%`); **सर्वाधिक संख्या!**' }, { en: '**Lowest** (`e.g. 0.02 ppm entry from water/soil`)', hi: '**न्यूनतम** (`उदा. 0.02 ppm प्रवेश`)' }],
        [{ en: '**2nd Level (`T2`)**', hi: '**द्वितीय पोषी स्तर (`T2`)**' }, { en: '**Primary Consumers (`Herbivores`)**: Deer, Grasshopper, Goat, Crab', hi: '**प्राथमिक उपभोक्ता (`शाकाहारी`)**: हिरण, टिड्डा, बकरी' }, { en: '**`1,000 J`** (`10% of T1`; 90% lost as heat/work)', hi: '**`1,000 J`** (`T1 का 10%`; 90% ऊष्मा ह्रास)' }, { en: 'Increases upward (`~0.2 ppm`, non-biodegradable persists)', hi: 'ऊपर जाते बढ़ी (`~0.2 ppm`)' }],
        [{ en: '**3rd Level (`T3`)**', hi: '**तृतीय पोषी स्तर (`T3`)**' }, { en: '**Secondary Consumers (`Small Carnivores`)**: Frog, Fox, Small Fish', hi: '**द्वितीयक उपभोक्ता (`छोटे मांसाहारी`)**: मेंढक, लोमड़ी, छोटी मछली' }, { en: '**`100 J`** (`10% of T2`)', hi: '**`100 J`** (`T2 का 10%`)' }, { en: 'High (`~2 ppm`, concentrates inside predator fat/tissue)', hi: 'उच्च (`~2 ppm`, ऊतकों में संचय)' }],
        [{ en: '**4th Level (`T4` Top)**', hi: '**चतुर्थ पोषी स्तर (`T4`)**' }, { en: '**Tertiary Consumers (`Top Carnivores`)**: Tiger, Snake, Eagle/Hawk, **Human**', hi: '**तृतीय उपभोक्ता (`शीर्ष`)**: बाघ, साँप, बाज व **मानव**' }, { en: '**`10 J`** (`ONLY 10% of T3` -> **why chains end at 3–4 steps!**)', hi: '**`10 J`** (**इसीलिए 4 चरण के बाद ऊर्जा नगण्य!**)' }, { en: '**MAXIMUM Concentration! (`e.g. >5 ppm -> Human/Eagle`)**', hi: '**अधिकतम (`शीर्ष मानव/गरुड़ में सर्वाधिक DDT!`)**' }],
      ],
    },
    {
      id: 'tbl-13-3',
      title: {
        en: 'Food Chain vs Food Web & Energy Flow vs Biomagnification Direction (`Exam Showdown`)',
        hi: 'आहार शृंखला बनाम आहार जाल तथा ऊर्जा प्रवाह बनाम जैव-आवर्धन दिशा अंतर',
      },
      headers: {
        en: ['Comparison Dimension', 'Food Chain (`Linear Path`)', 'Food Web (`Branched Network`)'],
        hi: ['तुलना बिंदु', 'आहार शृंखला (`रेखीय मार्ग`)', 'आहार जाल (`शाखित जाल`)'],
      },
      rows: [
        [
          { en: '**Structure (`p.232–233`)**', hi: '**संरचना (`चित्र 13.1 vs 13.3`)**' },
          { en: 'Single straight eating pathway (`A -> B -> C -> D`)', hi: 'एकल सीधी शृंखला (`एक-के-बाद-एक`)' },
          { en: 'Many **interconnected branching chains** (`Group D Shift 35`)', hi: 'अनेक **परस्पर जुड़ी शाखित आहार शृंखलाएँ** (`Group D Shift 35`)' },
        ],
        [
          { en: '**Ecosystem Stability**', hi: '**पारितंत्र स्थायित्व**' },
          { en: 'Unstable — removing 1 organism collapses upper chain!', hi: 'अस्थायी — 1 कड़ी हटने से ऊपरी शृंखला प्रभावित' },
          { en: '**High Stability** (`offers alternative food sources — Shift 33!`)', hi: '**अधिक स्थायी** (`वैकल्पिक खाद्य स्रोत प्रदान करता है — Shift 33!`)' },
        ],
        [
          { en: '**Energy vs Toxins Flow**', hi: '**ऊर्जा बनाम विष (`DDT`) प्रवाह**' },
          { en: 'Energy flows **unidirectionally** (`drops 90% per step ↓`)', hi: 'ऊर्जा **एकदिशिक घटती (`↓ 10%`)** व वापस नहीं लौटती' },
          { en: 'Multiple feeding paths, yet **non-biodegradable toxins (`DDT`) still magnify upward (`↑`)**!', hi: 'अनेक मार्ग होने पर भी **अजैव विष (`DDT`) शीर्ष स्तर पर सर्वाधिक संचित (`↑`)** होते हैं!' },
        ],
      ],
    },
    {
      id: 'tbl-13-4',
      title: {
        en: 'Oxygen (`O₂`) vs Ozone (`O₃`): Chemistry, Altitude Paradox & `1987` CFC Freeze (`Sec 13.2.1`)',
        hi: 'ऑक्सीजन (`O₂`) बनाम ओजोन (`O₃`), ऊँचाई विरोधाभास, CFC क्षरण एवं `1987` UNEP समझौता',
      },
      headers: {
        en: ['Parameter', 'Atmospheric Oxygen (`O₂`)', 'Stratospheric Ozone (`O₃`)', 'Ground-Level Ozone (`O₃`)'],
        hi: ['मानदंड', 'वायुमंडलीय ऑक्सीजन (`O₂`)', 'समतापमंडल ओजोन (`O₃`)', 'भू-स्तर ओजोन (`O₃`)'],
      },
      rows: [
        [
          { en: '**Atom Count & Synthesis**', hi: '**परमाणु व निर्माण**' },
          { en: '2 O atoms; photosynthetic byproduct', hi: '2 O परमाणु (`प्रकाश संश्लेषण`)' },
          { en: '**3 O atoms**: `O₂ —UV→ O+O; O+O₂ → O₃`', hi: '**3 O परमाणु**: `O₂ + UV → O+O; O+O₂ → O₃`' },
          { en: '3 O atoms formed from vehicle/industrial smog', hi: 'वाहन-उद्योग धुएँ से निर्मित `O₃`' },
        ],
        [
          { en: '**Biological Impact**', hi: '**जीवों पर प्रभाव**' },
          { en: 'Essential for **aerobic respiration**', hi: 'वायविक श्वसन हेतु अनिवार्य' },
          { en: '**UV Shield** -> prevents **Skin Cancer (`त्वचा कैंसर`)**', hi: '**UV रोककर त्वचा कैंसर से रक्षा**' },
          { en: '**Deadly Poison (`घातक विष`)**', hi: '**मनुष्य व पादप हेतु घातक विष!**' },
        ],
        [
          { en: '**Main Threat & Pact**', hi: '**खतरा व नियंत्रण**' },
          { en: 'Deforestation lowers natural balance', hi: 'वन विनाश से संतुलन प्रभावित' },
          { en: '**CFCs (`fridges/fire extinguishers`)** -> **1987 UNEP froze @ 1986 levels**', hi: '**CFCs (`1980s`) → 1987 UNEP ने 1986 स्तर पर रोका**' },
          { en: 'Stricter vehicle emission rules (`Shift 41 PYQ`)', hi: 'वाहन उत्सर्जन नियंत्रण (`Shift 41 PYQ`)' },
        ],
      ],
    },
    {
      id: 'tbl-13-5',
      title: {
        en: 'Biodegradable vs Non-Biodegradable Waste & Train Disposable Cup Evolution (`Sec 13.2.2 & p.238`)',
        hi: 'जैव-निम्नीकरणीय बनाम अजैव-निम्नीकरणीय कचरा एवं रेलगाड़ी चाय कप विकास (`पृ. 235–238`)',
      },
      headers: {
        en: ['Category / Case Study', 'Mechanism (`Enzymes`)', 'NCERT Examples & Pros/Cons', 'Verdict / Exam Fact'],
        hi: ['श्रेणी / केस स्टडी', 'क्रियाविधि (`एंजाइम`)', 'NCERT उदाहरण एवं गुण-दोष', 'परीक्षा निष्कर्ष'],
      },
      rows: [
        [
          { en: '**Biodegradable Waste**', hi: '**जैव-निम्नीकरणीय अपशिष्ट**' },
          { en: 'Microbial/specific **enzymes digest** into harmless compost/minerals', hi: 'सूक्ष्मजीवों के विशिष्ट **एंजाइम सरल पदार्थों में अपघटित** करते हैं' },
          { en: 'Peels, spoilt food, tea leaves, paper, flowers, wood, cotton, cake, **leather (`Ex Q1`)**', hi: 'सब्जी-फल छिलके, भोजन, चाय पत्ती, कागज, लकड़ी, पुष्प, सूती, केक, **चमड़ा (`Ex Q1`)**' },
          { en: '**Excess uncomposted piles still stink & spread flies/disease (`Ex Q8`)!**', hi: '**अधिक ढेर होने पर दुर्गंध व मक्खी-रोग फैलते हैं (`Ex Q8`)!**' },
        ],
        [
          { en: '**Non-Biodegradable Waste**', hi: '**अजैव-निम्नीकरणीय अपशिष्ट**' },
          { en: 'No microbial enzyme breaks them -> stay **inert** for centuries', hi: 'एंजाइम विशिष्टता कारण अपघटन असंभव — **अक्रिय (`Inert`)** बने रहते हैं' },
          { en: '**Plastic bags, bubble pack, milk pouches, medicine bottles, glass, DDT (`ALP Shift 4`)**', hi: '**प्लास्टिक थैली, बबल पैक, दूध पैकेट, दवा की बोतलें, काँच, DDT (`ALP Shift 4`)**' },
          { en: 'Causes persistent litter, choked soil/water & biomagnification', hi: 'दीर्घकालिक प्रदूषण व **जैव-आवर्धन** का मुख्य कारण' },
        ],
        [
          { en: '**Train Cups Step 1 & 2 (`Glass/Plastic`)**', hi: '**रेल कप 1 व 2 (`काँच/प्लास्टिक`)**' },
          { en: 'Returned washed Glass -> Single-use Plastic', hi: 'धुलकर वापस काँच गिलास → एकल-उपयोग प्लास्टिक कप' },
          { en: 'Plastic seemed hygienic/cheap, yet created non-biodegradable garbage mountains', hi: 'सस्ता-स्वच्छ लगा पर गैर-निम्नीकरणीय कचरे का गंभीर ढेर लगा' },
          { en: 'Replace with biodegradable or reusable items (`Act 13.7`)', hi: 'पुनः उपयोग योग्य व जैवनिम्नीकरणीय विकल्प आवश्यक' },
        ],
        [
          { en: '**Train Cups Step 3 vs 4 (`Kulhad vs Paper`)**', hi: '**रेल कप 3 बनाम 4 (`कुल्हड़ बनाम कागज`)**' },
          { en: 'Clay baking vs Cellulose paper degradation', hi: 'मिट्टी पकाना बनाम सेलुलोज कागज जैव-अपघटन' },
          { en: '**Kulhads** stripped huge volumes of **fertile topsoil**; **Paper cups** are **biodegradable**!', hi: 'लाखों **कुल्हड़ों से उर्वर उपजाऊ मिट्टी नष्ट** हुई; **कागज कप जैवनिम्नीकरणीय** हैं!' },
          { en: '**Paper Cups (`कागज के कप`)** beat both plastic & kulhad (`p.238`)', hi: '**कागज के डिस्पोजेबल कप** प्लास्टिक व कुल्हड़ दोनों से श्रेष्ठ (`पृ. 238`)' },
        ],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.234 Q1',
      q: { en: 'What are trophic levels? Give an example of a food chain and state the different trophic levels in it.', hi: 'पोषी स्तर क्या हैं? एक आहार शृंखला का उदाहरण दीजिए तथा इसमें विभिन्न पोषी स्तर बताइए।' },
      a: { en: 'Each feeding step/link in a food chain where energy transfers is a **trophic level** (`NCERT Fig 13.2`). Example (**Grassland Chain**): **Grass (`1st Trophic Level / Producer`) -> Grasshopper (`2nd / Herbivore, Primary Consumer`) -> Frog (`3rd / Small Carnivore, Secondary Consumer`) -> Snake (`4th / Large Carnivore, Tertiary Consumer`)**.', hi: 'आहार शृंखला का प्रत्येक चरण अथवा कड़ी एक **पोषी स्तर** बनाती है। उदाहरण: **घास (`प्रथम पोषी स्तर / उत्पादक`) → टिड्डा (`द्वितीय / प्राथमिक उपभोक्ता`) → मेंढक (`तृतीय / द्वितीयक उपभोक्ता`) → साँप (`चतुर्थ / तृतीय उपभोक्ता`)**।' },
    },
    {
      num: 'p.234 Q2',
      q: { en: 'What is the role of decomposers in the ecosystem?', hi: 'पारितंत्र में अपमार्जकों (अपघटकों) की क्या भूमिका है?' },
      a: { en: '**Decomposers (`bacteria and fungi`)** clean up dead plant/animal remains and waste by **converting complex organic matter into simple inorganic nutrients**, returning them to the **soil for natural replenishment and reuse by green plants (`producers`)**.', hi: '**अपघटक (`जीवाणु व कवक`)** मृत पौधों-जंतुओं के **जटिल कार्बनिक पदार्थों को सरल अकार्बनिक खनिजों में बदलकर मिट्टी में मिलाते हैं**, जिससे मृदा की प्राकृतिक पुनःपूर्ति होती है व पौधे इन्हें पुनः उपयोग कर पाते हैं।' },
    },
    {
      num: 'p.236 Q1',
      q: { en: 'Why are some substances biodegradable and some non-biodegradable?', hi: 'क्या कारण है कि कुछ पदार्थ जैव निम्नीकरणीय होते हैं और कुछ अजैव निम्नीकरणीय?' },
      a: { en: '**Enzymes are specific in their action!** Specific enzymes are needed to digest/break down a particular substrate (`just like coal gives zero energy if eaten`). Natural organic substances (`peels, cotton, paper`) match microbial enzymes (**biodegradable**), whereas man-made plastics resist microbial enzymes and stay **inert** (**non-biodegradable**).', hi: '**एंजाइम अपनी क्रिया में विशिष्ट होते हैं!** किसी विशेष पदार्थ के अपघटन हेतु विशिष्ट एंजाइम चाहिए (`जैसे कोयले से हमें ऊर्जा नहीं मिलती`)। प्राकृतिक जैव पदार्थों हेतु सूक्ष्मजीवों के पास एंजाइम होते हैं (**जैव-निम्नीकरणीय**), जबकि प्लास्टिक जैसे मानव-निर्मित पदार्थों हेतु एंजाइम न होने से वे **अजैव-निम्नीकरणीय** रहते हैं।' },
    },
    {
      num: 'p.236 Q2',
      q: { en: 'Give any two ways in which biodegradable substances would affect the environment.', hi: 'ऐसे दो तरीके सुझाइए, जिनमें जैव निम्नीकरणीय पदार्थ पर्यावरण को प्रभावित करते हैं।' },
      a: { en: '**(1) Positive**: Microbial decomposition enriches soil with **natural humus & mineral nutrients** (`organic compost/manure`). **(2) Negative (`if piled excessively`)**: Rotting releases **foul odor/gases (`CH₄, H₂S`)** and **breeds flies, mosquitoes & disease vectors** (`NCERT Ex Q8 link`).', hi: '**(1) लाभदायक**: सूक्ष्मजीव अपघटन से मृदा में **खनिज व जैविक खाद (`ह्यूमस`)** बढ़ता है। **(2) हानिकारक (`अधिक ढेर होने पर`)**: सड़ने पर **तीव्र दुर्गंध व मीथेन/गैसें** निकलती हैं तथा **मक्खी-मच्छर व रोग फैलाते हैं**।' },
    },
    {
      num: 'p.236 Q3',
      q: { en: 'Give any two ways in which non-biodegradable substances would affect the environment.', hi: 'ऐसे दो तरीके बताइए, जिनमें अजैव निम्नीकरणीय पदार्थ पर्यावरण को प्रभावित करते हैं।' },
      a: { en: '**(1) Persistent Pollution**: Inert materials (`plastics, glass`) choke drains, lower soil permeability & linger cleanly unrotted for centuries. **(2) Biological Magnification & Stratospheric Damage**: Non-biodegradable pesticides (`DDT`) concentrate to toxic levels in top humans, while **CFCs deplete stratospheric ozone (`O₃`)**.', hi: '**(1) दीर्घकालिक प्रदूषण**: प्लास्टिक/काँच सदियों तक अक्रिय रहकर नालियाँ व मृदा उर्वरता अवरुद्ध करते हैं। **(2) जैव-आवर्धन व ओजोन क्षरण**: DDT जैसे रसायन आहार शृंखला के शीर्ष पर विषैली मात्रा में जमा होते हैं व **CFCs ओजोन परत को नुकसान** पहुँचाते हैं।' },
    },
    {
      num: 'p.239 Q1',
      q: { en: 'What is ozone and how does it affect any ecosystem?', hi: 'ओजोन क्या है तथा यह किसी पारितंत्र को किस प्रकार प्रभावित करती है?' },
      a: { en: '**Ozone (`O₃`)** is a molecule formed of **three oxygen atoms** (`O₂ + UV -> O + O -> O₃`). Though **deadly poison near ground level**, in the **upper atmosphere (`stratosphere`)** it shields all living ecosystems from harmful **solar UV radiation** (`preventing skin cancer, cataracts & phytoplankton/crop damage`).', hi: '**ओजोन (`O₃`)** ऑक्सीजन के **तीन परमाणुओं से बना अणु** है। भू-स्तर पर यह घातक विष है, पर **ऊपरी वायुमंडल (`समतापमंडल`)** में सूर्य की हानिकारक **पराबैंगनी (`UV`) किरणों को रोककर** पारितंत्र के समस्त जीवों (`मानव में त्वचा कैंसर व फसलों`) की रक्षा करती है।' },
    },
    {
      num: 'p.239 Q2',
      q: { en: 'How can you help in reducing the problem of waste disposal? Give any two methods.', hi: 'आप कचरा निपटान की समस्या कम करने में क्या योगदान कर सकते हैं? किन्हीं दो तरीकों का वर्णन कीजिए।' },
      a: { en: '**(1) Source Segregation & Composting**: Separate **biodegradable (`kitchen peels, leaves -> garden compost pit`)** from **non-biodegradable (`recyclables -> Blue bin`)**. **(2) Reduce Single-Use & Recycle (`RRR`)**: Carry reusable **cloth bags** instead of polythene, avoid excess packaging (`use biodegradable paper cups in place of plastic`), and send plastics/metals/paper for recycling.', hi: '**(1) कचरा पृथक्करण व कंपोस्टिंग**: जैव-निम्नीकरणीय (`रसोई कचरा`) को अलग गड्ढे में **जैविक खाद (`कंपोस्ट`)** बनाएँ। **(2) एकल-उपयोग प्लास्टिक में कमी व पुनर्चक्रण**: पॉलीथीन की जगह **कपड़े का थैला** ले जाएँ व कागज/धातु/प्लास्टिक को **पुनर्चक्रण (`Recycle`)** हेतु अलग दें।' },
    },
  ],
  exercises: [
    {
      num: 'Ex Q1',
      q: { en: 'Which of the following groups contain only biodegradable items? `(a)` Grass, flowers and leather `(b)` Grass, wood and plastic `(c)` Fruit-peels, cake and lime-juice `(d)` Cake, wood and grass.', hi: 'निम्नलिखित में से कौन-से समूहों में केवल जैव निम्नीकरणीय पदार्थ हैं — `(a)` घास, पुष्प तथा चमड़ा `(b)` घास, लकड़ी तथा प्लास्टिक `(c)` फलों के छिलके, केक एवं नींबू का रस `(d)` केक, लकड़ी एवं घास।' },
      a: { en: '**`(a)`, `(c)` and `(d)` (`Verified Official NCERT Answer Key: jhsc1an`)**! Notice the question asks **“which groupS” (`plural!`)** — **leather, flowers, fruit-peels, cake, lime-juice, wood & grass** are ALL organic/biodegradable, whereas **`(b)` contains non-biodegradable plastic**!', hi: '**`(a)`, `(c)` एवं `(d)` (`आधिकारिक NCERT उत्तरकुंजी से सत्यापित`)!** प्रश्न बहुवचन “कौन-से समूहों” पूछता है — **घास, पुष्प, चमड़ा, फलों के छिलके, केक, नींबू रस व लकड़ी** सभी जैव-निम्नीकरणीय हैं; केवल `(b)` में प्लास्टिक है!' },
    },
    {
      num: 'Ex Q2',
      q: { en: 'Which of the following constitute a food-chain? `(a)` Grass, wheat and mango `(b)` Grass, goat and human `(c)` Goat, cow and elephant `(d)` Grass, fish and goat.', hi: 'निम्नलिखित से कौन आहार शृंखला का निर्माण करते हैं — `(a)` घास, गेहूँ तथा आम `(b)` घास, बकरी तथा मानव `(c)` बकरी, गाय तथा हाथी `(d)` घास, मछली तथा बकरी।' },
      a: { en: '**`(b)` Grass -> Goat -> Human (`NCERT Answer Key verified`)**! Only `(b)` forms a true **Producer -> Herbivore -> Omnivore** feeding transfer (`(a)` has all plants; `(c)` all herbivores; `(d)` goats don’t eat fish!).', hi: '**`(b)` घास, बकरी तथा मानव (`NCERT उत्तरकुंजी सत्यापित`)** — क्योंकि बकरी घास खाती है व मानव उत्पाद/मांस से पोषित है (`(a)` सभी पौधे; `(c)` सभी शाकाहारी; `(d)` बकरी मछली नहीं खाती)।' },
    },
    {
      num: 'Ex Q3',
      q: { en: 'Which of the following are environment-friendly practices? `(a)` Carrying cloth-bags to put purchases in while shopping `(b)` Switching off unnecessary lights and fans `(c)` Walking to school instead of getting your mother to drop you on her scooter `(d)` All of the above.', hi: 'निम्नलिखित में से कौन पर्यावरण-मित्र व्यवहार कहलाते हैं — `(a)` बाजार जाते समय कपड़े का थैला ले जाना `(b)` कार्य समाप्त हो जाने पर लाइट व पंखे बंद करना `(c)` माँ द्वारा स्कूटर से छोड़ने बजाय पैदल विद्यालय जाना `(d)` उपरोक्त सभी।' },
      a: { en: '**`(d)` All of the above (`NCERT Answer Key verified`)** — cloth bags replace polythene, switching off saves fossil electricity, and walking saves petrol emissions.', hi: '**`(d)` उपरोक्त सभी (`NCERT उत्तरकुंजी सत्यापित`)** — कपड़े का थैला प्लास्टिक रोकता है, बिजली व पेट्रोल बचाना सभी पर्यावरण-मित्र कदम हैं।' },
    },
    {
      num: 'Ex Q4',
      q: { en: 'What will happen if we kill all the organisms in one trophic level?', hi: 'क्या होगा यदि हम एक पोषी स्तर के सभी जीवों को समाप्त कर दें (मार डालें)?' },
      a: { en: 'Eliminating any entire trophic level **collapses ecological balance both above AND below**: organisms in the **next higher level (`predators`) starve and die out**, while populations in the **preceding lower level (`prey`) grow unchecked**, overgrazing/disrupting the entire ecosystem (`e.g. kill snakes -> frogs spike & eagles starve — Group D PYQ`).', hi: 'एक पोषी स्तर समाप्त होने पर **ऊपरी पोषी स्तर के जीव भूख से मरने लगेंगे**, जबकि **निचले पोषी स्तर के जीवों की संख्या अत्यधिक बढ़ जाएगी** — जिससे संपूर्ण पारितंत्र असंतुलित व नष्ट हो जाएगा (`जैसे सभी साँप मरने पर मेंढक अचानक बढ़ेंगे`)।' },
    },
    {
      num: 'Ex Q5',
      q: { en: 'Will the impact of removing all the organisms in a trophic level be different for different trophic levels? Can the organisms of any trophic level be removed without causing any damage to the ecosystem?', hi: 'क्या किसी पोषी स्तर के सभी सदस्यों को हटाने का प्रभाव भिन्न-भिन्न पोषी स्तरों के लिए अलग-अलग होगा? क्या किसी पोषी स्तर के जीवों को पारितंत्र को प्रभावित किए बिना हटाना संभव है?' },
      a: { en: '**Yes, impacts differ (`removing Producers T1 collapses the whole pyramid instantly via zero energy capture, whereas removing Top Carnivores T4 triggers herbivore overgrazing downstream`)**. **NO**, organisms of **ANY trophic level CANNOT be removed without damaging the ecosystem**, because every level links energy transfer and population control (`only complex food webs buffer partial losses briefly`).', hi: '**हाँ, प्रभाव भिन्न-भिन्न होगा**: यदि **उत्पादक (`T1`)** हटा दें तो ऊर्जा शून्य होकर पूरा तंत्र तुरंत ढह जाएगा, जबकि शीर्ष मांसाहारी हटने पर शाकाहारियों की भीड़ वनस्पति नष्ट कर देगी। **नहीं, किसी भी पोषी स्तर को पारितंत्र को हानि पहुँचाए बिना नहीं हटाया जा सकता**।' },
    },
    {
      num: 'Ex Q6',
      q: { en: 'What is biological magnification? Will the levels of this magnification be different at different levels of the ecosystem?', hi: 'जैविक आवर्धन (`Biological magnification`) क्या है? क्या पारितंत्र के विभिन्न स्तरों पर जैविक आवर्धन का प्रभाव भी भिन्न-भिन्न होगा?' },
      a: { en: '**Biological Magnification** is the progressive increase in concentration of non-biodegradable harmful chemicals (`like DDT/pesticides`) at successive higher trophic levels. **Yes, concentrations differ markedly**: **lowest in producers (`T1`)** and **HIGHEST in top-level consumers (`humans/eagles`)**!', hi: '**जैविक आवर्धन**: आहार शृंखला के प्रत्येक क्रमिक पोषी स्तर पर अजैवनिम्नीकरणीय रसायनों (`जैसे DDT`) की सांद्रता का बढ़ते जाना। **हाँ, इसका स्तर भिन्न-भिन्न होता है** — उत्पादकों (`T1`) में सबसे कम तथा **शीर्ष उपभोक्ता (`मानव/बाज`) में सर्वाधिक**!' },
    },
    {
      num: 'Ex Q7',
      q: { en: 'What are the problems caused by the non-biodegradable wastes that we generate?', hi: 'हमारे द्वारा उत्पादित अजैव निम्नीकरणीय कचरे से कौन-सी समस्याएँ उत्पन्न होती हैं?' },
      a: { en: '**(1) Unending Landfill Accumulation (`plastics/glass`)** choking drainage, spoiling scenic sites (`p.236`) and harming stray cattle. **(2) Water & Soil Contamination** blocking percolation. **(3) Biological Magnification (`pesticides/heavy metals`)** poisoning top consumers. **(4) Ozone Depletion (`CFCs`)** exposing Earth to UV rays.', hi: '**(1) कचरे के स्थायी ढेर** जो नालियाँ बंद कर जलभराव व मृदा हानि करते हैं। **(2) जैविक आवर्धन** जिससे विषैले रसायन खाद्य पदार्थों संग मानव शरीर में पहुँचते हैं। **(3) ओजोन परत क्षरण (`CFC`)** व मवेशियों/जलीय जीवों की मृत्यु।' },
    },
    {
      num: 'Ex Q8',
      q: { en: 'If all the waste we generate is biodegradable, will this have no impact on the environment?', hi: 'यदि हमारे द्वारा उत्पादित सारा कचरा जैव निम्नीकरणीय हो तो क्या इनका हमारे पर्यावरण पर कोई प्रभाव नहीं पड़ेगा?' },
      a: { en: '**False — it WILL still harm the environment if produced faster than microbes can decompose it!** Excess rotting piles emit **foul odors & toxic/greenhouse gases (`CH₄, H₂S, NH₃`)**, attract **disease-spreading flies, rats & mosquitoes**, and leach excess organic load causing water-body **algal blooms/oxygen depletion**!', hi: '**नहीं, पर्यावरण पर बुरा प्रभाव फिर भी पड़ेगा!** यदि कचरे की मात्रा प्राकृतिक अपघटन की गति से अधिक हो जाए तो इसके सड़ने से **तीव्र दुर्गंध, मीथेन गैस व मक्खी-मच्छर (`रोग वाहक`)** फैलेंगे तथा जलाशयों में ऑक्सीजन घटकर जल प्रदूषण होगा!' },
    },
    {
      num: 'Ex Q9',
      q: { en: 'Why is damage to the ozone layer a cause for concern? What steps are being taken to limit this damage?', hi: 'ओजोन परत की क्षति हमारे लिए चिंता का विषय क्यों है? इस क्षति को सीमित करने के लिए क्या कदम उठाए गए हैं?' },
      a: { en: '**Concern**: Thinning stratospheric ozone lets harmful **Solar UV radiation** reach Earth, triggering **Human Skin Cancer (`त्वचा कैंसर`)**, eye cataracts, immune suppression, and crop/plankton harm (`Sec 13.2.1`). **Steps Taken**: Under the **1987 UNEP Agreement (`Montreal Protocol`)**, nations agreed to **freeze CFC production at 1986 levels** and made **CFC-free refrigerators mandatory worldwide**!', hi: '**चिंता का कारण**: ओजोन परत पतली होने से सूर्य की **पराबैंगनी (`UV`) किरणें** पृथ्वी पर पहुँचकर **मानव में त्वचा कैंसर**, मोतियाबिंद व वनस्पतियों को भारी नुकसान पहुँचाएँगी। **कदम**: **1987 के UNEP समझौते** से विश्व भर में **CFC उत्पादन 1986 के स्तर पर रोका गया** व सभी कंपनियों के लिए **CFC-रहित रेफ्रिजरेटर** बनाना अनिवार्य किया गया।' },
    },
  ],
  flashcards: [
    { front: { en: 'Natural vs Artificial (`Human-Made`) Ecosystems (`NCERT p.230`)?', hi: 'प्राकृतिक बनाम कृत्रिम (मानव-निर्मित) पारितंत्र के सटीक NCERT उदाहरण?' }, back: { en: '**Natural**: Forest, Pond, Lake | **Artificial**: **Crop-field, Garden, Aquarium** (`Group D Shift 47`)!', hi: '**प्राकृतिक**: वन, तालाब, झील | **कृत्रिम**: **खेत, बगीचा, जल जीवशाला (`Aquarium`)**।' } },
    { front: { en: 'Which microbes act as Producers vs Decomposers (`p.230–231`)?', hi: 'कौन-से सूक्ष्मजीव उत्पादक व कौन-से अपघटक होते हैं?' }, back: { en: '**Producers**: Green Plants + **Blue-Green Algae (`Cyanobacteria`)** | **Decomposers**: **Bacteria & Fungi**.', hi: '**उत्पादक**: हरे पौधे + **नील-हरित शैवाल** | **अपघटक**: **जीवाणु एवं कवक**।' } },
    { front: { en: 'What % of incident SUNLIGHT do plant leaves capture (`p.232`)?', hi: 'हरे पौधों की पत्तियाँ आपतित सौर ऊर्जा का कितने % भोजन में बदलती हैं?' }, back: { en: '**ONLY `~1%` of falling solar energy!** (`NOT 10%` — `10%` starts from Plants -> Herbivores onward!).', hi: '**केवल लगभग `1%` भाग!** (`10%` नियम इसके बाद प्रत्येक उपभोक्ता चरण में लगता है)।' } },
    { front: { en: 'Why are food chains usually only `3–4` steps long (`ALP 2025`)?', hi: 'आहार शृंखलाओं में सामान्यतः केवल `3–4` चरण ही क्यों होते हैं (`ALP 2025`)?' }, back: { en: 'About **`90%` energy dissipates as heat/work** at each step (`10% Law`) -> almost ZERO usable energy survives past T4!', hi: 'प्रत्येक पोषी स्तर पर `90%` ऊर्जा ह्रास (`10% नियम`) से चौथे स्तर के बाद उपयोगी ऊर्जा नगण्य बचती है!' } },
    { front: { en: 'Direction of Energy Flow vs Matter/Minerals in ecosystems?', hi: 'पारितंत्र में ऊर्जा प्रवाह तथा खनिज/पदार्थ प्रवाह की दिशा कैसी होती है?' }, back: { en: '**Energy = Strictly UNIDIRECTIONAL (`T1 -> T4`, never returns to sun)** | **Minerals/Matter = Cyclic via Decomposers**!', hi: '**ऊर्जा प्रवाह = सदैव एकदिशिक (`Unidirectional`)** | **खनिज = अपघटकों द्वारा पुनःचक्रित**!' } },
    { front: { en: 'Why are Food Webs more stable than simple Food Chains (`Shift 33`)?', hi: 'आहार शृंखला की अपेक्षा आहार जाल पारितंत्र को अधिक स्थायी क्यों बनाते हैं?' }, back: { en: 'Food webs have branching links offering **alternative food sources**, buffering the ecosystem if one species drops!', hi: 'क्योंकि आहार जाल **वैकल्पिक खाद्य स्रोत** प्रदान करते हैं, जिससे एक जीव घटने पर भी तंत्र स्थिर रहता है!' } },
    { front: { en: 'Biomagnification: Which trophic level holds MAXIMUM DDT (`p.234`)?', hi: 'जैव-आवर्धन: `DDT` जैसे पीड़कनाशी किस स्तर में सर्वाधिक संचित होते हैं?' }, back: { en: '**TOP Consumer (`Humans / Eagle / Hawk`)** (`e.g. water 0.02 ppm -> highest in T4`); **cannot be washed off with water!**', hi: '**शीर्ष उपभोक्ता (`मानव / गरुड़ / बाज`)** में सर्वाधिक — व केवल पानी से धोने पर भी नहीं हटते!' } },
    { front: { en: 'Two reactions making Stratospheric Ozone (`O₃`, `p.235`) & Ground role?', hi: 'समतापमंडल में `O₃` निर्माण के दो चरण एवं भू-स्तर पर इसकी प्रकृति?' }, back: { en: '**`O₂ —UV→ O + O`** then **`O + O₂ → O₃`**. Ground-level `O₃` = **Deadly Poison**; Stratospheric `O₃` = **UV Skin-Cancer Shield**!', hi: '`O₂ + UV → O+O`, फिर `O + O₂ → O₃`। भू-स्तर पर **घातक विष**, पर समतापमंडल में **UV से त्वचा कैंसर रक्षक**!' } },
    { front: { en: 'CFC Depletion Year + UNEP Accord Year & Freeze Cap (`p.235`)?', hi: 'CFC से ओजोन क्षरण वर्ष एवं UNEP समझौता कब व किस स्तर पर हुआ?' }, back: { en: 'Sharp drop **`1980s`** (`CFCs in fridges/fire extinguishers`) -> **`1987` UNEP pact froze CFCs at `1986` levels!**', hi: '`1980` के दशक में क्षरण बढ़ा → **`1987 UNEP` समझौते ने CFC उत्पादन `1986` के स्तर पर फ्रीज़ किया!**' } },
    { front: { en: 'Why are plastics Non-Biodegradable & why did Trains switch Kulhads -> Paper (`p.236–238`)?', hi: 'प्लास्टिक अपघटन क्यों नहीं होता व रेलवे ने कुल्हड़ छोड़ कागज कप क्यों चुने?' }, back: { en: '**Enzymes are substrate-specific** (`no bacterial enzyme fits plastic`). **Kulhads** wasted **fertile topsoil**; **Paper cups** are biodegradable!', hi: '**एंजाइम विशिष्टता** कारण प्लास्टिक नहीं सड़ता; लाखों **कुल्हड़ों से उपजाऊ मिट्टी नष्ट** हो रही थी अतः **कागज कप** अपनाए गए!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-b13-1',
      examTag: 'RRB ALP 2025 CBT-2 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.2.1): Refrigerants & Ozone Depletion',
      question: {
        en: 'Why does restricting certain chemical refrigerants effectively reduce damage to the ozone layer?',
        hi: 'कुछ रासायनिक प्रशीतक-द्रव्यों को प्रतिबंधित करने से ओजोन परत को होने वाली क्षति में प्रभावी रूप से कमी क्यों आती है?',
      },
      options: {
        en: ['Refrigerants emit greenhouse gases that warm the stratosphere.', 'Refrigerants increase oxygen production, supporting ozone recovery.', 'Refrigerants release substances that catalyze ozone breakdown.', 'Refrigerants contain particles that absorb harmful UV light.'],
        hi: ['प्रशीतक-द्रव्य ग्रीनहाउस गैसें उत्सर्जित करते हैं जो समतापमंडल को गर्म करती हैं।', 'प्रशीतक-द्रव्य ऑक्सीजन उत्पादन को बढ़ाते हैं, जिससे ओजोन पुनःप्राप्ति में सहायता मिलती है।', 'प्रशीतक-द्रव्य ऐसे पदार्थ मुक्त करते हैं जो ओजोन विघटन को उत्प्रेरित करते हैं।', 'प्रशीतक-द्रव्यों में ऐसे कण होते हैं जो हानिकारक UV प्रकाश को अवशोषित करते हैं।'],
      },
      correctIndex: 2,
      solution: {
        en: 'CFC refrigerants release reactive chlorine species aloft that **catalyze stratospheric `O₃` breakdown** (`1987` UNEP Montreal ban stopped this destruction!).',
        hi: 'प्रशीतक-द्रव्यों (`CFCs`) से मुक्त होने वाले रसायन समतापमंडल में **ओजोन विघटन को उत्प्रेरित करते हैं**, इसलिए प्रतिबंध से क्षति घटती है।',
      },
    },
    {
      id: 'pyq-b13-2',
      examTag: 'RRB ALP 2025 Shift 4',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Activity 13.5): Non-Biodegradable Group',
      question: {
        en: 'Which of the following substance groups represents the non-biodegradable substances?',
        hi: 'निम्नलिखित में से कौन-सा पदार्थ समूह गैर-जैवनिम्ननीय पदार्थों का प्रतिनिधित्व करता है?',
      },
      options: {
        en: ['Spoilt food, vegetable peels, used tea leaves', 'Plastic bubble pack, regular milk packets, medicine plastic bottles', 'Grasses, spoilt food, vegetable peels', 'Vegetable peels, flowers, paper'],
        hi: ['खराब भोजन, सब्जियों के छिलके, इस्तेमाल की हुई चाय की पत्तियाँ', 'प्लास्टिक बबल पैक, दूध के सामान्य पैकेट, दवा की प्लास्टिक की बोतलें', 'घास, खराब भोजन, सब्जियों के छिलके', 'सब्जियों के छिलके, फूल, कागज'],
      },
      correctIndex: 1,
      solution: {
        en: 'Exact list from **NCERT Activity 13.5 (`p.236`)**: plastic bubble pack, milk pouches & plastic medicine bottles lack microbial enzymes (`non-biodegradable`)!',
        hi: '**NCERT क्रियाकलाप 13.5 (`पृ. 236`)** का सटीक समूह: प्लास्टिक बबल पैक, दूध के पैकेट व दवा की प्लास्टिक बोतलें सूक्ष्मजीवों द्वारा अपघटित नहीं होतीं!',
      },
    },
    {
      id: 'pyq-b13-3',
      examTag: 'RRB ALP 2025 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1.1): 3–4 Step Limit of Food Chains',
      question: {
        en: 'Why do food chains generally consist of only three or four steps?',
        hi: 'खाद्य श्रृंखलाओं में सामान्यतः केवल तीन या चार चरण क्यों होते हैं?',
      },
      options: {
        en: ['Only a few species exist in ecosystems', 'Herbivores outnumber carnivores', 'Significant energy loss occurs at each trophic level', 'Producers cannot make enough food'],
        hi: ['पारिस्थितिकी तंत्र में केवल कुछ ही प्रजातियाँ मौजूद होती हैं', 'मांसाहारी की तुलना में शाकाहारी की संख्या अधिक होती है', 'प्रत्येक पोषी स्तर पर ऊर्जा का काफी ह्रास होता है', 'उत्पादक पर्याप्त भोजन नहीं बना पाते हैं'],
      },
      correctIndex: 2,
      solution: {
        en: 'Only `~10%` transfers per step while `~90%` is lost (`heat/respiration`) -> after 3–4 steps virtually no usable energy remains (`NCERT p.232`).',
        hi: 'प्रत्येक चरण पर लगभग `90%` ऊर्जा का ह्रास (`केवल 10% स्थानांतरण`) होने से चौथे स्तर के बाद नगण्य ऊर्जा बचती है (`पृ. 232`)।',
      },
    },
    {
      id: 'pyq-b13-4',
      examTag: 'RRB Group D 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1.1): Start of Every Food Chain',
      question: {
        en: 'Which type of organisms is always found at the beginning of a food chain?',
        hi: 'खाद्य श्रृंखला की शुरुआत में सदैव किस प्रकार के जीव पाए जाते हैं?',
      },
      options: {
        en: ['Carnivore', 'Producer', 'Herbivore', 'Decomposer'],
        hi: ['मांसाहारी', 'उत्पादक', 'शाकाहारी', 'अपघटक'],
      },
      correctIndex: 1,
      solution: {
        en: '**Producers (`Autotrophs`: green plants & blue-green algae)** capture solar energy (`~1%`) forming the **1st Trophic Level (`T1`)** always at the start.',
        hi: '**उत्पादक (`स्वपोषी`)** सौर प्रकाश से भोजन बनाकर सदैव खाद्य शृंखला के **प्रथम पोषी स्तर** पर रहते हैं।',
      },
    },
    {
      id: 'pyq-b13-5',
      examTag: 'RRB Group D 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1.1): Why Toxins Magnify',
      question: {
        en: 'Why do non-biodegradable substances show biological magnification?',
        hi: 'गैर-जैवनिम्नीकरणीय पदार्थ जैविक आवर्धन क्यों प्रदर्शित करते हैं?',
      },
      options: {
        en: ['They provide energy to organisms', 'They are not taken up by organisms', 'They persist in organisms', 'They are broken down quickly by organisms'],
        hi: ['वे जीवों को ऊर्जा प्रदान करते हैं', 'उन्हें जीवों द्वारा ग्रहण नहीं किया जाता है', 'वे जीवों में बने रहते हैं', 'उन्हें जीवों द्वारा शीघ्र विघटित किया जाता है'],
      },
      correctIndex: 2,
      solution: {
        en: 'Because enzymes cannot degrade or excrete them quickly, persistent toxins (`like DDT`) stay in tissues and accumulate progressively upward.',
        hi: 'चूँकि ये रसायन विघटित नहीं हो पाते, अतः **जीवों के शरीर में संचित बने रहते हैं** और प्रत्येक स्तर पर बढ़ते जाते हैं।',
      },
    },
    {
      id: 'pyq-b13-6',
      examTag: 'RRB Group D 2025 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1): Role of Decomposers',
      question: {
        en: 'In an ecosystem, what is the role played by decomposers?',
        hi: 'किसी पारिस्थितिकी तंत्र में अपघटक क्या भूमिका निभाते हैं?',
      },
      options: {
        en: ['They synthesize food by photosynthesis', 'They break down dead organic matter', 'They transfer energy directly to carnivores', 'They regulate the water level in soil'],
        hi: ['वे प्रकाश संश्लेषण द्वारा भोजन का संश्लेषण करते हैं।', 'वे मृत कार्बनिक पदार्थों को विघटित करते हैं।', 'वे मांसाहारी जीवों को सीधे ऊर्जा स्थानांतरित करते हैं।', 'वे मृदा में जल स्तर को नियंत्रित करते हैं।'],
      },
      correctIndex: 1,
      solution: {
        en: 'Decomposers (`bacteria & fungi`) break down dead organic remains into simple inorganic soil nutrients (`NCERT p.231`).',
        hi: 'अपघटक जीवाणु व कवक **मृत कार्बनिक पदार्थों को विघटित** कर मिट्टी की पोषण पुनःपूर्ति करते हैं (`पृ. 231`)।',
      },
    },
    {
      id: 'pyq-b13-7',
      examTag: 'RRB Group D 2025 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1): Autotroph Carbon & Energy',
      question: {
        en: 'How do autotrophs fulfill their carbon and energy requirements?',
        hi: 'स्वपोषी अपनी कार्बन और ऊर्जा आवश्यकताओं को किस प्रकार पूर्ण करते हैं?',
      },
      options: {
        en: ['By respiration', 'By fermentation', 'By digestion', 'By photosynthesis'],
        hi: ['श्वसन द्वारा', 'किण्वन द्वारा', 'पाचन द्वारा', 'प्रकाश संश्लेषण द्वारा'],
      },
      correctIndex: 3,
      solution: {
        en: 'Autotrophs (`green plants & blue-green algae`) use sunlight + chlorophyll to fix inorganic `CO₂` & `H₂O` via **Photosynthesis**.',
        hi: 'स्वपोषी **प्रकाश संश्लेषण (`Photosynthesis`)** द्वारा अकार्बनिक पदार्थों से कार्बनिक भोजन (`ऊर्जा`) बनाते हैं।',
      },
    },
    {
      id: 'pyq-b13-8',
      examTag: 'RRB Group D 2025 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1.1): DDT Top Level Maximum',
      question: {
        en: 'In a food chain: `Grass → Grasshopper → Frog → Snake → Eagle`, the accumulation of `DDT` will be highest in _____________.',
        hi: 'खाद्य श्रृंखला: `घास → टिड्डा → मेंढक → सर्प → गरुड़` में, `DDT` का संचय सर्वाधिक __________ में होगा।',
      },
      options: {
        en: ['Frog', 'Eagle', 'Grass', 'Grasshopper'],
        hi: ['मेंढक', 'गरुड़', 'घास', 'टिड्डा'],
      },
      correctIndex: 1,
      solution: {
        en: 'Via **Biomagnification**, non-biodegradable DDT increases at every link, peaking in the top-most predator (**Eagle**)!',
        hi: 'जैव-आवर्धन के कारण प्रत्येक पोषी स्तर पर बढ़ता हुआ `DDT` सर्वाधिक शीर्ष उपभोक्ता (**गरुड़ / Eagle**) में संचित होगा।',
      },
    },
    {
      id: 'pyq-b13-9',
      examTag: 'RRB Group D 2025 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Activity 13.3): Reducing Biomagnification',
      question: {
        en: 'Which action taken by us can directly reduce biological magnification?',
        hi: 'हमारे द्वारा की गई कौन-सी कार्रवाई प्रत्यक्ष रूप से जैविक आवर्धन (`biological magnification`) को कम कर सकती है?',
      },
      options: {
        en: ['Washing the food grains thoroughly before use', 'Eating meat rather than food grains', 'Burning crop residues after harvesting', 'Reducing the use of chemical pesticides on crops'],
        hi: ['उपयोग करने से पहले अनाज को अच्छी तरह धो लेना', 'अनाज के स्थान पर मांस खाना', 'कटाई के बाद फसल के अवशेषों को जलाना', 'फसलों पर रासायनिक पीड़कनाशकों का उपयोग कम करना'],
      },
      correctIndex: 3,
      solution: {
        en: 'NCERT `p.234` explicitly warns that **washing grains cannot remove systemic pesticides** — only **cutting chemical pesticide usage** lowers biomagnification!',
        hi: 'NCERT `पृ. 234` स्पष्ट कहता है कि धोने से रसायन नहीं हटते; **रासायनिक पीड़कनाशकों का उपयोग कम करना** ही प्रत्यक्ष हल है।',
      },
    },
    {
      id: 'pyq-b13-10',
      examTag: 'RRB Group D 2025 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Fig 13.1a): Forest Food Chain Sequence',
      question: {
        en: 'Which of the following correctly represents a food chain?',
        hi: 'निम्नलिखित में से कौन-सा, खाद्य श्रृंखला को सटीक रूप से दर्शाता है?',
      },
      options: {
        en: ['Deer → Grass → Tiger', 'Tiger → Grass → Deer', 'Grass → Deer → Tiger', 'Grass → Tiger → Deer'],
        hi: ['हिरण → घास → बाघ', 'बाघ → घास → हिरण', 'घास → हिरण → बाघ', 'घास → बाघ → हिरण'],
      },
      correctIndex: 2,
      solution: {
        en: 'Exact NCERT `Fig 13.1(a)` direction of energy arrow ("is eaten by"): **Producer (`Grass`) -> Herbivore (`Deer`) -> Carnivore (`Tiger`)**.',
        hi: 'सटीक `चित्र 13.1(a)` क्रम: **घास (उत्पादक) → हिरण (शाकाहारी) → बाघ (मांसाहारी)**।',
      },
    },
    {
      id: 'pyq-b13-11',
      examTag: 'RRB Group D 2025 Shift 18',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1.1): 90% Heat Loss Per Level',
      question: {
        en: 'Most of the energy fixed by autotrophs is ______ at each trophic level.',
        hi: 'स्वपोषियों द्वारा स्थिर की गई अधिकांश ऊर्जा प्रत्येक पोषी स्तर पर _____________।',
      },
      options: {
        en: ['Utilized for locomotion', 'Stored in the organism', 'Lost to the environment as heat', 'Converted into organic matter'],
        hi: ['संचलन के लिए उपयोग की जाती है', 'जीव में संग्रहीत हो जाती है', 'ऊष्मा के रूप में पर्यावरण में नष्ट हो जाती है', 'कार्बनिक पदार्थ में परिवर्तित हो जाती है'],
      },
      correctIndex: 2,
      solution: {
        en: 'A massive share (`~90%` combined with respiration/work) of consumed energy is **lost to the environment as heat** (`NCERT p.232`), passing only `10%` upward.',
        hi: 'प्रत्येक स्तर पर अधिकांश (`~90%`) ऊर्जा **ऊष्मा के रूप में पर्यावरण में नष्ट (ह्रास)** हो जाती है (`पृ. 232`)।',
      },
    },
    {
      id: 'pyq-b13-12',
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.2.1): Main Function of Ozone',
      question: {
        en: 'What is the main function of the ozone layer in the upper part of the atmosphere?',
        hi: 'वायुमंडल के ऊपरी भाग में ओजोन परत का मुख्य कार्य क्या है?',
      },
      options: {
        en: ['Producing oxygen to support aerobic life', 'Absorbing ultraviolet radiation coming from the sun', 'Causing rainfall', 'Increasing atmospheric carbon dioxide levels'],
        hi: ['वायुजीवी जीवन को समर्थन प्रदान करने के लिए ऑक्सीजन उत्पन्न करना', 'सूर्य से आने वाली पराबैंगनी विकिरण को अवशोषित करना', 'वर्षा करना', 'वायुमंडलीय कार्बन डाइऑक्साइड के स्तर में वृद्धि करना'],
      },
      correctIndex: 1,
      solution: {
        en: 'Stratospheric **Ozone (`O₃`) shields Earth by absorbing harmful Solar UV radiation** (`preventing skin cancer`, `NCERT Sec 13.2.1`).',
        hi: 'ऊपरी वायुमंडल में ओजोन परत का मुख्य कार्य **सूर्य से आने वाली पराबैंगनी (`UV`) विकिरण को अवशोषित करना** है।',
      },
    },
    {
      id: 'pyq-b13-13',
      examTag: 'RRB Group D 2025 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Fig 13.4): Unidirectional Energy Flow',
      question: {
        en: 'Which of the following statements is correct about energy flow in an ecosystem?',
        hi: 'पारिस्थितिकी तंत्र में ऊर्जा प्रवाह के संबंध में निम्नलिखित में से कौन-सा कथन सही है?',
      },
      options: {
        en: ['Energy remains constant within the ecosystem', 'Most energy is used for building biomass within the ecosystem', 'Energy is recycled by decomposers within the ecosystem', 'Energy flows in one direction in the ecosystem'],
        hi: ['पारिस्थितिकी तंत्र में ऊर्जा स्थिर रहती है', 'पारिस्थितिकी तंत्र में अधिकांश ऊर्जा जैवभार निर्माण के लिए उपयोग होती है', 'पारिस्थितिकी तंत्र में अपघटकों द्वारा ऊर्जा का पुनर्चक्रण किया जाता है', 'पारिस्थितिकी तंत्र में ऊर्जा प्रवाह एकदिशीय होता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Exact **NCERT p.233 (`Fig 13.4`)**: **Energy flow is UNIDIRECTIONAL** — captured solar energy never returns back to plants from herbivores or to the sun (`unlike mineral recycling!`).',
        hi: 'सटीक NCERT `पृ. 233`: पारिस्थितिकी तंत्र में **ऊर्जा प्रवाह सदैव एकदिशीय (`Unidirectional`)** होता है (खनिज चक्रित होते हैं, ऊर्जा नहीं!)।',
      },
    },
    {
      id: 'pyq-b13-14',
      examTag: 'RRB Group D 2025 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Ex Q4 Applied): Food Web Removal Shock',
      question: {
        en: 'In a grassland food web, grass is eaten by rabbits and insects. Frogs eat insects, while foxes eat rabbits. If insect population declines sharply, which effect is most likely?',
        hi: 'घास स्थल के खाद्य जाल में, घास को खरगोश और कीट खाते हैं। मेंढक, कीटों को खाते हैं, जबकि लोमड़ियाँ, खरगोशों को खाती हैं। यदि कीटों की संख्या में तीव्र गिरावट आती है, तो सबसे संभावित प्रभाव क्या हो सकता है?',
      },
      options: {
        en: ['Fox population will increase rapidly', 'Frog population will suddenly decrease', 'Grass population will perish', 'Rabbit population will diminish'],
        hi: ['लोमड़ियों की संख्या तीव्रता से बढ़ेगी', 'मेंढकों की संख्या एकाएक कम हो जाएगी', 'घास समष्टि नष्ट हो जाएगी', 'खरगोशों की संख्या में ह्रास होगा'],
      },
      correctIndex: 1,
      solution: {
        en: 'Frogs rely directly on insects for food (`Ex Q4 principle`) -> sharp insect decline **immediately reduces the Frog population** (`starvation`).',
        hi: 'मेंढकों का भोजन **कीट** हैं — कीट घटते ही भोजन की कमी से **मेंढकों की संख्या तुरंत कम हो जाएगी**!',
      },
    },
    {
      id: 'pyq-b13-15',
      examTag: 'RRB Group D 2025 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1.1): Greatest Population at Producer Base',
      question: {
        en: 'In a grassland ecosystem, which organisms will show the largest number of individuals?',
        hi: 'किसी घास के मैदान के पारिस्थितिकी तंत्र में, किस जीव की संख्या सर्वाधिक होगी?',
      },
      options: {
        en: ['Frog', 'Hawk', 'Snake', 'Grass'],
        hi: ['मेंढक', 'बाज', 'सर्प', 'घास'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim NCERT **`p.232` final bullet**: **"There are generally a greater number of individuals at the lower trophic levels; the greatest number is of the producers (`Grass`)"**.',
        hi: 'सटीक NCERT `पृ. 232`: निचले पोषी स्तरों पर संख्या अधिक व **उत्पादक (`घास`) स्तर पर जीवों की संख्या सर्वाधिक** होती है!',
      },
    },
    {
      id: 'pyq-b13-16',
      examTag: 'RRB Group D 2025 Shift 29',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Fig 13.3): Food Web Statements',
      question: {
        en: 'Consider the following statements and select the correct option. Statement 1: Food chains in an ecosystem are interlinked to form a food web. Statement 2: Food webs show the interdependence of organisms.',
        hi: 'निम्नलिखित कथनों पर विचार कीजिए तथा सही विकल्प का चयन कीजिए। कथन 1: किसी पारितंत्र में खाद्य शृंखलाएँ अंतराबंधित होकर एक खाद्य जाल का निर्माण करती हैं। कथन 2: खाद्य जाल जीवों की परस्पर-निर्भरता को दर्शाते हैं।',
      },
      options: {
        en: ['Both statements are true', 'Both statements are false', 'Statement 1 is true and Statement 2 is false', 'Statement 1 is false and Statement 2 is true'],
        hi: ['दोनों कथन सत्य हैं', 'दोनों कथन असत्य हैं', 'कथन 1 सत्य है और कथन 2 असत्य है', 'कथन 1 असत्य है और कथन 2 सत्य है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Both statements accurately describe **NCERT `Sec 13.1.1` (`Fig 13.3`)**: branching chains form food webs showing multi-species interdependence.',
        hi: 'दोनों कथन पूर्णतः सत्य हैं (`भाग 13.1.1` व `चित्र 13.3`: शाखित आहार शृंखलाएँ जुड़कर जीवों की अन्योन्य-निर्भरता दर्शाती हैं)।',
      },
    },
    {
      id: 'pyq-b13-17',
      examTag: 'RRB Group D 2025 Shift 31',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1 Example): Garden Ecosystem Producers',
      question: {
        en: 'In a garden ecosystem with rose plants, jasmine plants, insects, snake, and birds, which group captures solar energy and converts it into food for other organisms?',
        hi: 'गुलाब के पौधों, चमेली के पौधों, कीटों, साँप और पक्षियों वाले बगीचे के पारिस्थितिकी तंत्र में कौन-सा समूह, सौर ऊर्जा को अवशोषित करके इसे अन्य जीवों के लिए खाद्य में रूपांतरित करता है?',
      },
      options: {
        en: ['Insects', 'Rose and Jasmine plants', 'Rose plant only', 'Birds'],
        hi: ['कीट', 'गुलाब और चमेली का पौधा', 'केवल गुलाब का पौधा', 'पक्षी'],
      },
      correctIndex: 1,
      solution: {
        en: 'Picked straight from **NCERT `p.230` garden paragraph**! Both green flowering plants (**Rose and Jasmine**) carry chlorophyll and act as **Producers**.',
        hi: 'सीधे **NCERT `पृ. 230` बगीचे उदाहरण** से लिया गया प्रश्न: **गुलाब और चमेली दोनों हरे पौधे** सौर ऊर्जा स्थिर कर उत्पादक का कार्य करते हैं।',
      },
    },
    {
      id: 'pyq-b13-18',
      examTag: 'RRB Group D 2025 Shift 33',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Fig 13.3): Why Food Webs Stabilize Ecosystems',
      question: {
        en: 'Food webs help in maintaining ecosystem stability because they:',
        hi: 'खाद्य जाल, पारिस्थितिकी तंत्र के स्थायित्व को बनाए रखने में सहायता करते हैं क्योंकि वे ___________।',
      },
      options: {
        en: ['stop energy flow', 'provide alternative food sources', 'reduce the number of consumers', 'increase competition'],
        hi: ['ऊर्जा प्रवाह को रोकते हैं', 'वैकल्पिक खाद्य स्रोत प्रदान करते हैं', 'उपभोक्ताओं की संख्या में कमी करते हैं', 'प्रतिस्पर्धा में वृद्धि करते हैं'],
      },
      correctIndex: 1,
      solution: {
        en: 'Branched feeding paths in a **Food Web (`Fig 13.3`)** guarantee **alternative food sources**, protecting consumers if any single prey drops.',
        hi: 'आहार जाल जीवों को **वैकल्पिक खाद्य स्रोत** देकर किसी एक प्रजाति के घटने पर भी स्थायित्व बनाए रखता है।',
      },
    },
    {
      id: 'pyq-b13-19',
      examTag: 'RRB Group D 2025 Shift 38',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.2.1): Harmful Effect of UV Rays',
      question: {
        en: 'The primary harmful effect of UV radiation on humans, if not blocked by the ozone layer, is:',
        hi: 'यदि ओजोन परत द्वारा UV विकिरण को अवरुद्ध नहीं किया जाता है, तो इसका मानव पर प्राथमिक हानिकारक प्रभाव क्या होता है?',
      },
      options: {
        en: ['anaemia', 'asthma', 'skin cancer', 'hypertension'],
        hi: ['एनीमिया', 'दमा', 'त्वचा कैंसर', 'अतिरक्तदाब'],
      },
      correctIndex: 2,
      solution: {
        en: 'Exact **NCERT `p.234` text**: solar UV radiation is highly damaging and **known to cause skin cancer in human beings (`त्वचा का कैंसर`)**.',
        hi: 'सटीक **NCERT `पृ. 234` पंक्ति**: सूर्य से आने वाली पराबैंगनी विकिरण मानव में **त्वचा कैंसर (`Skin Cancer`)** उत्पन्न करती है।',
      },
    },
    {
      id: 'pyq-b13-20',
      examTag: 'RRB Group D 2025 Shift 4',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.2.1): Chemical Causing Ozone Depletion',
      question: {
        en: 'Which of the following chemical compounds is mainly responsible for ozone depletion in the upper atmosphere?',
        hi: 'निम्नलिखित में से कौन-सा रासायनिक यौगिक, मुख्यतः उपरि वायुमंडल में ओजोन अवक्षय के लिए उत्तरदायी है?',
      },
      options: {
        en: ['Oxides of nitrogen', 'Chlorofluorocarbons', 'Sulphur dioxide', 'Methane'],
        hi: ['नाइट्रोजन के ऑक्साइड', 'क्लोरोफ्लोरोकार्बन', 'सल्फर डाइऑक्साइड', 'मेथेन'],
      },
      correctIndex: 1,
      solution: {
        en: 'Synthetic **Chlorofluorocarbons (`CFCs`)** from refrigerants and fire extinguishers caused the steep `1980s` decline (`capped by 1987 UNEP`).',
        hi: '**क्लोरोफ्लोरोकार्बन (`CFCs`)** उपरि वायुमंडल में ओजोन अवक्षय के मुख्य कारक हैं (`पृ. 235`)।',
      },
    },
    {
      id: 'pyq-b13-21',
      examTag: 'RRB Group D 2025 Shift 41',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.2.1): Ground-Level Ozone Spheres',
      question: {
        en: 'A city implements stricter vehicle emission norms, reducing smog and ground-level ozone formation. Which spheres of earth are directly influenced by this policy?',
        hi: 'एक शहर वाहनों के उत्सर्जन के कड़े नियम लागू करता है, जिससे धूम और भू-स्तर ओजोन (`ground-level ozone`) का बनना कम हो जाता है। इस नीति से पृथ्वी के कौन-से मंडल सीधे प्रभावित होते हैं?',
      },
      options: {
        en: ['Lithosphere and atmosphere', 'Atmosphere and biosphere', 'Lithosphere and hydrosphere', 'Hydrosphere and biosphere'],
        hi: ['स्थलमंडल और वायुमंडल', 'वायुमंडल और जैवमंडल', 'स्थलमंडल और जलमंडल', 'जलमंडल और जैवमंडल'],
      },
      correctIndex: 1,
      solution: {
        en: 'Cleaner air lowers **ground-level poisonous `O₃`/smog (`Atmosphere`)** while protecting living lungs/plants (`Biosphere`, since ground `O₃` is a **deadly poison**!).',
        hi: 'वाहन धुआँ व भू-स्तर विषैली `O₃` घटने से सीधे **वायुमंडल (`Atmosphere`) और जैवमंडल (`Biosphere`)** पर सकारात्मक प्रभाव पड़ता है।',
      },
    },
    {
      id: 'pyq-b13-22',
      examTag: 'RRB Group D 2025 Shift 45',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Ex Q4): Immediate Effect of Removing Snakes',
      question: {
        en: 'If all the snakes in a food chain disappear, what will be the immediate effect on the food chain?',
        hi: 'यदि किसी खाद्य श्रृंखला के सभी सर्प लुप्त हो जाते हैं, तो खाद्य श्रृंखला पर तात्कालिक प्रभाव क्या होगा?',
      },
      options: {
        en: ['Frog population will increase', 'Grass population will decrease', 'Tiger population will increase', 'Tree population will decrease'],
        hi: ['मेंढकों की समष्टि में वृद्धि होगी', 'घास की समष्टि में कमी होगी', 'बाघों की समष्टि में वृद्धि होगी', 'वृक्षों की समष्टि में कमी होगी'],
      },
      correctIndex: 0,
      solution: {
        en: 'In `Grass -> Grasshopper -> Frog -> Snake -> Eagle`, losing predator snakes immediately removes predation pressure -> **Frog population surges** (`Ex Q4`).',
        hi: '`घास → टिड्डा → मेंढक → साँप → बाज` में साँप हटते ही उनका शिकार (**मेंढकों की समष्टि**) तुरंत बढ़ने लगेगी!',
      },
    },
    {
      id: 'pyq-b13-23',
      examTag: 'RRB Group D 2025 Shift 47',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1): Artificial Ecosystem Recognition',
      question: {
        en: 'Which of the following is an example of an artificial ecosystem?',
        hi: 'निम्नलिखित में से कौन-सा कृत्रिम पारितंत्र का उदाहरण है?',
      },
      options: {
        en: ['Crop-field', 'Pond', 'Forest', 'Lake'],
        hi: ['खेत', 'तालाब', 'वन', 'झील'],
      },
      correctIndex: 0,
      solution: {
        en: 'Exact NCERT `p.230` distinction: **Forest, Pond, Lake = Natural**; **Gardens & Crop-fields (`खेत`) = Artificial (`human-made`)**!',
        hi: 'सटीक NCERT `पृ. 230`: **तालाब, वन, झील प्राकृतिक हैं, जबकि खेत (`Crop-field`) व बगीचा मानव-निर्मित कृत्रिम पारितंत्र हैं!**',
      },
    },
    {
      id: 'pyq-b13-24',
      examTag: 'RRB Group D 2025 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 13 (Sec 13.1.1): 0.02 ppm Chemical Biomagnification',
      question: {
        en: 'If a non-biodegradable chemical enters the food chain at a concentration of `0.02 ppm` in water, what will happen over time?',
        hi: 'यदि एक अजैव-निम्नीकरणीय रसायन जल में `0.02 ppm` की सांद्रता से खाद्य श्रृंखला में प्रवेश करता है, तो समय के साथ क्या होगा?',
      },
      options: {
        en: ['It will disappear completely from the ecosystem', 'It will show maximum accumulation at the highest trophic level', 'Its concentration will decrease at higher trophic levels', 'It will remain only within the producers'],
        hi: ['यह पारिस्थितिकी तंत्र से पूर्णतः लुप्त हो जाएगा', 'यह उच्चतम पोषी स्तरों पर अधिकतम संचयन दर्शाएगा', 'उच्चतम पोषी स्तरों पर इसकी सांद्रता कम हो जाएगी', 'यह केवल उत्पादकों तक ही सीमित रहेगा'],
      },
      correctIndex: 1,
      solution: {
        en: 'Classic **Biological Magnification** (`Sec 13.1.1`): starting at `0.02 ppm` in water, persistent chemicals multiply along every link to peak in **top carnivores/humans**!',
        hi: 'जैव-आवर्धन कारण `0.02 ppm` वाला रसायन क्रमशः संचित होकर **उच्चतम पोषी स्तर (`शीर्ष उपभोक्ता`) पर अधिकतम सांद्रता** दर्शाएगा!',
      },
    },
  ],
};
