/**
 * Class 9 NCERT (New 2026–27 Edition — ihsc105.pdf, Pages 72–93) + Railway CBT Deep-Dive Edition
 * Chapter 5: Exploring Mixtures & Their Separation (मिश्रण एवं उनके पृथक्करण का अन्वेषण) — Gold Standard v3 (#4 PYQ Chapter)
 * Complete 2026–27 NCERT Coverage: 5.1 Homogeneous vs Heterogeneous -> 5.2 Solutions, %m/m, %m/v (0.9% Saline), %v/v, ORS (Dr. Dilip Mahalanabis), Solubility Curves ->
 * 5.3 Crystallization (CuSO₄, Ancient Indian Panga/Karkach Salt), Simple Distillation (ΔT ≥ 25 °C, Kannauj Deg-Bhapka), Fractional Distillation (Petroleum), Paper Chromatography ->
 * 5.4 Separating Funnel, Sublimation & Deposition, Alloys (Brass/Bronze/Stainless Steel), Suspensions, Centrifugation (Paperfuge), Coagulation (Alum/Paneer) ->
 * 5.5 Colloids (1–1000 nm), Emulsions (O/W vs W/O) & Tyndall Effect + Kidney/Sewage/Recycling.
 * All 9 Activities (5.1–5.9), All 5 Tables (5.1–5.5), All 10 Think Qs, All 15 Exercises verified against ihsc1an.pdf, & 24 Verbatim RRB PYQs.
 */

export const CH5_MIXTURES_DATA = {
  id: 'c9-chem-ch5',
  classId: 'class9',
  subjectId: 'chemistry',
  subjectLabel: { en: 'Chemistry', hi: 'रसायन विज्ञान (Chemistry)' },
  chapterNumber: 5,
  sourceCode: 'Class 9 NCERT Curiosity (2026–27) • Ch 5: Exploring Mixtures & Their Separation',
  blueprintSvgKey: 'ch5-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Solution vs Colloid (1–1000 nm) vs Suspension (>1000 nm) & Tyndall Effect', hi: 'विलयन vs कोलॉइड (1–1000 nm) vs निलंबन व टिंडल प्रभाव' }, pct: 36 },
    { label: { en: 'Homogeneous vs Heterogeneous Mixtures & Emulsions (O/W vs W/O)', hi: 'समांगी-विषमांगी मिश्रण व पायस (दूध vs मक्खन)' }, pct: 26 },
    { label: { en: 'Separation Techniques (Distillation ≥25°C, Fractional <25°C, Sublimation, Funnel)', hi: 'पृथक्करण (सरल/प्रभाजी आसवन, ऊर्ध्वपातन, वर्णलेखन, कीप)' }, pct: 24 },
    { label: { en: 'Concentration (%m/m, 0.9% m/v Saline, %v/v), Solubility & Alloys (Cu+Zn, Cu+Sn)', hi: 'सांद्रता प्रतिशत, विलेयता ताप-नियम व मिश्रातु (पीतल/काँसा)' }, pct: 14 },
  ],
  title: {
    en: 'Chapter 5: Exploring Mixtures & Their Separation',
    hi: 'अध्याय 5: मिश्रण एवं उनके पृथक्करण का अन्वेषण',
  },
  subtitle: {
    en: 'New 2026–27 Curiosity Edition (#4 High-Yield Chapter) • True/Colloid/Suspension, Tyndall, % m/m–m/v–v/v, Crystallization, Distillation, Paperfuge & 24 Verbatim PYQs',
    hi: 'नया 2026–27 जिज्ञासा NCERT संपूर्ण गहराई (#4 सर्वाधिक PYQ) • टिंडल प्रभाव, सांद्रता, क्रिस्टलीकरण, देग-भापका, पेपरफ्यूज व 24 रेलवे PYQ',
  },
  metrics: {
    pages: 22,
    activities: 9,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class9-chem-ch5/hero-mixtures-separation.webp',
    caption: {
      en: 'Analytical Chemistry Lab Bench: Invisible red laser beam in clear true solution illuminating a glowing Tyndall scattering cone inside a cloudy colloid, beside sapphire-blue CuSO₄ crystals, paper chromatography dye strip & Liebig condenser coil.',
      hi: 'रसायन विश्लेषणात्मक बेंच: पारदर्शी विलयन से अदृश्य गुजरती लेसर किरण और कोलॉइड में चमकता टिंडल शंकु, नीले कॉपर सल्फेट क्रिस्टल, कागज वर्णलेखिकी पट्टी व काँच का संघनित्र।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Three Mixture Classes (`Size Test`)**: **True Solution (`< 1 nm`)** -> uniform/homogeneous, invisible, NO filter trapping, **NO settling**, **NO Tyndall effect** (`Salt water, Vinegar, Soda water, Brass/Bronze`). **Colloid (`1–1000 nm`)** -> *looks homogeneous, ACTUALLY HETEROGENEOUS* (`Milk, Blood, Fog, Smoke, Tomato Sauce`), passes ordinary filter paper, **DOES NOT settle**, **YES Tyndall cone**. **Suspension (`> 1000 nm`)** -> heterogeneous (`Muddy water, Chalk in water, Sand`), naked-eye visible, trapped by filter paper, **settles down on standing** (`shows Tyndall only while shaken`).',
      hi: '**तीन मिश्रण वर्ग (`आकार परीक्षण`)**: **वास्तविक विलयन (`< 1 nm`)** → समांगी, अदृश्य, फिल्टर पार, नहीं बैठता, **टिंडल प्रभाव ❌ नहीं** (`नमक-जल, सिरका, सोडा, पीतल`)। **कोलॉइड (`1–1000 nm`)** → दिखता समांगी पर **वास्तव में विषमांगी!** (`दूध, रक्त, कोहरा, धुआँ`), **नहीं बैठता (स्थिर)**, **टिंडल प्रभाव ✅ हाँ**। **निलंबन (`> 1000 nm`)** → विषमांगी (`पंकिल जल, चॉक-जल`), **नीचे बैठता है (अस्थायी)**, निस्यंदन से अलग।',
    },
    {
      en: '**Concentration & Solubility Traps (`5.2`)**: **`% m/m = [Solute mass / (Solute + Solvent mass)] × 100`** (`Total mass in denominator! e.g. 20g in 80g water = 20/100 = 20%`). **`0.9% m/v` medical NaCl saline** (`0.9 g salt per 100 mL solution`) is isotonic/safe for blood. **Solid solubility in liquids GENERALLY INCREASES with temperature** (`KNO₃: 21->167 g`), whereas **Gas solubility in liquids DECREASES with temperature** and **INCREASES with pressure** (`soda bottle CO₂`).',
      hi: '**सांद्रता व विलेयता सूत्र**: **`% m/m = (विलेय द्रव्यमान / कुल विलयन द्रव्यमान) × 100`** (हर में विलेय+विलायक दोनों जोड़ें!)। अस्पताल **लवणीय विलयन = `0.9% m/v NaCl`**। ताप बढ़ने पर द्रव में **ठोस विलेयता बढ़ती है** (जैसे `KNO₃`), परंतु **गैस विलेयता घटती है**; **उच्च दाब** से सोडा जल में `CO₂` विलेयता बढ़ती है।',
    },
    {
      en: '**Simple (`ΔT ≥ 25 °C`) vs Fractional (`ΔT < 25 °C`) & Chromatography**: Separate **miscible liquids** with `ΔT ≥ 25 °C` (`Acetone 56 °C + Water 100 °C -> ΔT = 44 °C`) or volatile solvent + salt by **Simple Distillation** (`Condenser water enters bottom, exits top!`). Use **Fractional Distillation** for `ΔT < 25 °C` (`Ethanol 78 °C + Benzene 80 °C; Crude Petroleum fractions`). **Paper Chromatography** (`Act 5.5`): **Pencil baseline `2 cm` up**, spot kept **ABOVE solvent level**; most soluble dye climbs highest!',
      hi: '**सरल बनाम प्रभाजी आसवन व वर्णलेखिकी**: मिश्रणीय द्रवों में क्वथनांक अंतर **`≥ 25 °C` हो तो सरल आसवन** (`ऐसीटोन 56° + जल 100°`) और **`< 25 °C` हो तो प्रभाजी आसवन** (`ऐल्कोहॉल 78° + बेंजीन 80°; पेट्रोलियम शोधन`)। **कागज वर्णलेखिकी**: पेंसिल से रेखा व **विलायक स्तर स्याही बिंदु से नीचे** रखते हैं (अधिक घुलनशील रंग सबसे ऊपर)।',
    },
    {
      en: '**Heterogeneous Separation Arsenal (`5.4`)**: **Separating Funnel**: immiscible liquids by density (`Mustard oil 910 g/L floats ABOVE water 1000 g/L`). **Sublimation/Deposition**: solid `⇄` vapor directly (`Camphor, Naphthalene, Dry Ice CO₂`). **Centrifugation (`Paperfuge`)**: rapid spin separates heavy RBCs to bottom & plasma top; **Coagulation**: **Alum (`फिटकरी`)** clumps silt to settle; acid (`lemon/vinegar`) coagulates milk protein into **paneer**.',
      hi: '**विषमांगी पृथक्करण विधियाँ**: **पृथक्कारी कीप**: अमिश्रणीय द्रव घनत्व से (`तेल ऊपर, जल नीचे`)। **ऊर्ध्वपातन/निक्षेपण**: ठोस `⇄` सीधे वाष्प (`कपूर, नैफ्थलीन, शुष्क बर्फ`)। **अपकेंद्रण (`पेपरफ्यूज`)**: रक्त से प्लाज्मा व RBC पृथक। **स्कंदन**: पंकिल जल में **फिटकरी**, व दूध में नींबू/सिरका से पनीर।',
    },
    {
      en: '**Alloys & Emulsions Hotspots**: **Alloys = homogeneous solid mixtures** (`cannot separate physically, still mixtures since properties retained & variable ratio!`): **Brass (`पीतल`) ≈ 80% Cu + 20% Zn** (`Cu:Zn`), **Bronze (`काँसा`) ≈ 80% Cu + 20% Sn**, **Stainless Steel = Fe + C (0.03–0.8%) + Cr (16–18%) + Ni (10–14%) + Mo (2–3%)**. **Emulsions (`Liquid-Liquid Colloids`)**: **O/W (`जल में तेल`)** = `Milk, Body lotion, Vanishing cream`; **W/O (`तेल में जल`)** = `Butter, Cold cream`.',
      hi: '**मिश्रधातु एवं पायस PYQ खजाना**: मिश्रधातु घटकों के गुण व परिवर्ती अनुपात कारण मिश्रण हैं: **पीतल ≈ 80% Cu + 20% Zn**, **काँसा ≈ 80% Cu + 20% Sn**, **स्टेनलेस स्टील = Fe + C + Cr + Ni + Mo**। **पायस (Emulsion)**: **जल में तेल (`O/W`)** = `दूध, बॉडी लोशन, वैनिशिंग क्रीम`; **तेल में जल (`W/O`)** = `मक्खन, कोल्ड क्रीम`।',
    },
  ],
  sections: [
    {
      id: 'mixtures-conc-solubility-crystallization',
      number: '5.1–5.3.1',
      flowDiagramKey: 'ch5-homogeneous-sep',
      svgLab: 'mixtures-separation-lab',
      realImage: {
        imageUrl: '/ncert-notes/class9-chem-ch5/real/cuso4-crystals.webp',
        caption: {
          en: 'Pure Sapphire-Blue Triclinic Copper(II) Sulfate Crystals obtained by Slow Cooling Crystallization (NCERT Activity 5.3 & Fig 5.8).',
          hi: 'मंद शीतलन द्वारा क्रिस्टलीकरण से प्राप्त शुद्ध नीले कॉपर सल्फेट के चमकदार क्रिस्टल (क्रियाकलाप 5.3 व चित्र 5.8)।',
        },
      },
      title: {
        en: 'Classification of Mixtures, Solutions, `% m/m / m/v / v/v`, ORS, Solubility Curves & Crystallization',
        hi: 'मिश्रण वर्गीकरण, विलयन सांद्रता (`% m/m, m/v, v/v`), ORS, विलेयता वक्र व क्रिस्टलीकरण',
      },
      summaryTag: {
        en: 'NCERT Pages 72–79 • Solute/Solvent, Dr. Dilip Mahalanabis ORS, 0.9% Saline, Solubility Temp Rule & Panga/Karkach Salt',
        hi: 'NCERT पृ. 72–79 • विलेय-विलायक, डॉ. दिलीप महालनोबिस ORS, 0.9% लवणीय जल, विलेयता ग्राफ व पांगा-करकच नमक',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Classroom Story: First Sip = Last Sip (`Homogeneous`) vs Separate Layers (`Heterogeneous`)',
            hi: '1. कक्षा व्याख्या: प्रथम घूँट से अंतिम घूँट तक समान स्वाद (समांगी) बनाम असमान परतें (विषमांगी)',
          },
          content: {
            en: 'Imagine stirring sugar or common salt into water: whether you taste the top sip or the very last drop, the sweetness is identical (`Single uniform composition & single visible phase`). Such a uniform mixture is a **==Homogeneous Mixture (समांगी मिश्रण) or Solution (विलयन)==** (`other examples: vinegar = acetic acid in water; soda water = CO₂ in water; clean air = N₂+O₂; CuSO₄ solution; Brass/Bronze alloys`). A true solution is **ALWAYS homogeneous**. Now stir **sand or chalk into water**, or pour **oil over water**: particles or separate layers remain distinct with **non-uniform composition**. That is a **==Heterogeneous Mixture (विषमांगी मिश्रण)==** (`sand + water, oil + water, iron filings + sulfur, smoke = solid in gas, fog = water droplets in gas, milk, blood`). Notice **two ingredients decide a Solution**: **==Solvent (विलायक)==** (present in **larger amount**, does the dissolving, e.g., water) + **==Solute (विलेय)==** (present in **smaller amount**, gets dissolved, e.g., sugar/salt).',
            hi: 'कल्पना कीजिए कि आप जल में चीनी या नमक घोलते हैं — पहला घूँट लें या अंतिम, दोनों समान मीठे लगते हैं! ऐसा मिश्रण जिसका ==संघटन और स्वरूप आदि से अंत तक एकसमान== हो, **==समांगी मिश्रण (Homogeneous Mixture) अथवा विलयन (Solution)==** कहलाता है (`उदाहरण: सिरका, सोडा जल, स्वच्छ वायु, कॉपर सल्फेट विलयन, पीतल व काँसा मिश्रधातु`)। एक वास्तविक विलयन **सदैव समांगी** होता है। इसके विपरीत जब हम **जल में रेत, चॉक या सरसों का तेल** मिलाते हैं, तो घटक अलग-अलग दिखाई देते हैं या परत बना लेते हैं — इसे **==विषमांगी मिश्रण (Heterogeneous Mixture)==** कहते हैं (`रेत-जल, तेल-जल, लोहा-गंधक, धुआँ, कोहरा, दुग्ध, रक्त`)। किसी विलयन के दो भाग होते हैं: वह घटक जो घोलता है व अधिक मात्रा में हो **==विलायक (Solvent)==** (जैसे जल) कहलाता है, और जो घुलता है तथा कम मात्रा में हो **==विलेय (Solute)==** कहलाता है।',
          },
        },
        {
          type: 'examTrap',
          title: {
            en: '2. Why Exact Concentration & `0.9% m/v Saline` Save Lives (`ORS + Dr. Dilip Mahalanabis`)',
            hi: '2. विलयन की सांद्रता, डॉ. दिलीप महालनोबिस (ORS) व अस्पताल `0.9% m/v` लवणीय विलयन',
          },
          content: {
            en: 'Mixing random amounts of salt and sugar in water gives saltwater—**NOT Oral Rehydration Solution (`ORS`)**! Indian pediatrician **==Dr. Dilip Mahalanabis==** standardized and popularized the life-saving **WHO ORS formula** to treat deadly dehydration from diarrhea and cholera, saving millions of lives worldwide (`NCERT p.74 note: random sweet drinks from market are NOT ORS!`). Similarly, hospitals use **==`0.9% m/v` Sodium Chloride (`NaCl`) Saline==** (`0.9 g salt dissolved to make 100 mL total solution`) because this matches blood plasma osmotic balance safely! **Three Concentration Formulas (`Eq 5.1–5.3`):** (1) **Mass-by-Mass `(% m/m or % w/w)`** = **`(Mass of solute / Total mass of solution) × 100`** (`Denominator MUST add Solute + Solvent! Wait Trap: 10g salt + 90g water => solution = 100g => 10% m/m, NOT 10/90! Used for solids like Milk powder, spices, baked flour`). (2) **Mass-by-Volume `(% m/v)`** = **`(Mass of solute in g / Volume of solution in mL) × 100`** (`5% glucose, 0.9% medical saline`). (3) **Volume-by-Volume `(% v/v)`** = **`(Volume of liquid solute / Total volume of solution) × 100`** (`5% acetic acid white vinegar = 5 mL glacial acetic acid + water up to 100 mL; perfumes, 1 mL pesticide in 100 mL = 1% v/v`).',
            hi: 'पानी में मनमर्जी से चीनी-नमक घोलने पर ==ओरल रिहाइड्रेशन सॉल्यूशन (ORS)== नहीं बनता! भारतीय शिशुरोग विशेषज्ञ **==डॉ. दिलीप महालनोबिस==** ने हैजा व अतिसार से निर्जलीकरण रोकने हेतु **ORS** का सूत्रीकरण व प्रचार किया, जिसे **WHO** द्वारा अपनाकर लाखों जीवन बचाए गए (`बाज़ार के मीठे पेय ORS नहीं हैं!`)। इसी प्रकार अस्पतालों में प्रयुक्त ड्रिप **==`0.9% m/v` सोडियम क्लोराइड (`NaCl`) लवणीय विलयन==** होता है (`100 mL विलयन में 0.9 g नमक`), जो रुधिर के लिए पूरी तरह सुरक्षित (समपरासारी) है। **तीन मुख्य सांद्रता सूत्र:** (1) **`% m/m` (उद्योग में `% w/w`) = `(विलेय द्रव्यमान / कुल विलयन द्रव्यमान) × 100`** (`ध्यान दें: हर में विलेय + विलायक जोड़कर कुल विलयन द्रव्यमान लेना अनिवार्य है! जैसे 10 g नमक + 90 g जल = 100 g विलयन -> 10% m/m`)। (2) **`% m/v` = `(विलेय g / विलयन mL) × 100`** (`दवाइयाँ व `5%` ग्लूकोस`)। (3) **`% v/v` = `(विलेय आयतन mL / कुल विलयन आयतन mL) × 100`** (`सिरका = 5% v/v ऐसीटिक अम्ल; इत्र`)।',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '3. Solubility Rules (`Solid vs Gas`), Fig 5.6 Curves & Crystallization (`Ancient Panga/Karkach + CuSO₄`)',
            hi: '3. विलेयता के नियम (ठोस बनाम गैस), विलेयता वक्र, क्रिस्टलीकरण एवं भारत का पांगा-करकच नमक',
          },
          content: {
            en: 'The **maximum solute** that dissolves in `100 g` (or `100 mL`) of solvent at a **fixed temperature** is its **==Solubility (विलेयता)==**; beyond this point, extra salt sinks undissolved and the liquid is a **==Saturated Solution (संतृप्त विलयन)==** (`RRB Tech Gr-III PYQ`). **Golden Railway Rule on Temperature & Pressure (`Group D 2025 PYQ`)**: For **solids in liquids**, solubility **GENERALLY INCREASES with temperature** (`e.g. Table 5.4: KNO₃ shoots from 21 g at 10 °C to 167 g at 80 °C, whereas NaCl barely rises 36 -> 37 g`). For **gases in liquids**, solubility **DECREASES with temperature** (`warm soda goes flat fast!`) and **INCREASES under high pressure** (`NTPC 2025 PYQ: CO₂ sealed under high pressure in soft drinks!`). When you **slowly cool** a hot saturated solution (`Fig 5.6: cooling Compound Y from 287 g at 60 °C to 241 g at 40 °C precipitates 46 g pure solid!`), ordered geometric solids called **==Crystals (क्रिस्टल)==** form — this is **==Crystallization (क्रिस्टलीकरण)==** (`Act 5.3: blue CuSO₄ + 1 drop dil. H₂SO₄ to suppress side reactions; slow cooling builds BIG shiny crystals whereas ice-quenching builds tiny poor crystals!`). Nature grows huge crystals in **==Mawsmai Cave (Sohra/Cherrapunji)==** and crystalline **Quartz (`स्फटिक`)**, rock salt, frost, snowflakes, and sugar candy (`मिश्री`). **India’s Scientific Heritage (`p.79`)**: Coastal Indian communities traditionally harvested salt crystals as **==Panga salt (`पांगा` — boiling concentrated sea brine)==** and **==Karkach salt (`करकच` — solar evaporation)==**.',
            hi: 'किसी निश्चित ताप पर `100 g` (या `100 mL`) विलायक में घुलने वाली विलेय की अधिकतम मात्रा **==विलेयता (Solubility)==** कहलाती है और वह विलयन जिसमें और विलेय न घुल सके, **==संतृप्त विलयन (Saturated Solution)==** कहलाता है। **रेलवे परीक्षा का सर्वकालिक नियम:** ताप बढ़ाने पर जल में अधिकांश **==ठोसों की विलेयता बढ़ती है==** (`तालिका 5.4: KNO₃ 10°C पर 21g से 80°C पर 167g हो जाता है, जबकि NaCl 36g से 37g लगभग स्थिर`) — परंतु जल में **==गैसों की विलेयता ताप बढ़ने पर घटती है==** व **उच्च दाब बढ़ाने पर बढ़ती है** (`इसलिए शीतल पेय उच्च दाब पर CO₂ के साथ सील किए जाते हैं`)! जब हम उच्च ताप पर बने संतृप्त विलयन को **धीरे-धीरे ठंडा** करते हैं, तो अतिरिक्त विलेय एक नियमित ज्यामितीय आकार के शुद्ध ठोस अर्थात् **==क्रिस्टल (Crystals)==** के रूप में अलग हो जाता है — इसे **==क्रिस्टलीकरण==** कहते हैं (`क्रियाकलाप 5.3: CuSO₄ में तनु H₂SO₄ की 1 बूँद अवांछित अभिक्रिया रोकने हेतु; हिमशीतित जल में तेजी से ठंडा करने पर क्रिस्टल छोटे व विकृत बनते हैं, जबकि कक्ष ताप पर बड़े व चमकदार!`)। प्रकृति में सोहरा (चेरापूंजी) की **==मावसमाई गुफा (`Mawsmai Cave`)==**, **स्फटिक (`Quartz`)**, सेंधा नमक, तुषार (पाला) व मिश्री क्रिस्टलों के उदाहरण हैं। प्राचीन भारत के तटीय क्षेत्रों में खारे जल को उबालकर **==‘पांगा’ नमक==** व वाष्पीकरण द्वारा **==‘करकच’ नमक==** के क्रिस्टल बनाए जाते थे।',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Railway Shortcut: Crystallization Beats Evaporation 3 Ways (`Act 5.3`)',
            hi: 'परीक्षा ट्रिक: वाष्पीकरण की तुलना में क्रिस्टलीकरण 3 कारणों से श्रेष्ठ क्यों?',
          },
          content: {
            en: 'Why do labs prefer **Crystallization** over simple boiling evaporation (`Think Q6-iv & Ex Q9`)? (1) **Soluble impurities remain dissolved** in the mother liquor rather than sticking to the dry solid; (2) **Heat-sensitive substances like sugar do NOT char/decompose** on gentle cooling; (3) Produces **uniform, pure, well-shaped geometric crystals** (`Remember: Crystallization separates pure soluble solid, whereas Distillation recovers BOTH liquid solvent and solute!`).',
            hi: '1. **घुलनशील अशुद्धियाँ विलयन में ही छनकर शेष रह जाती हैं** (सूखने पर चिपकती नहीं)। 2. **चीनी जैसे ताप-संवेदनशील ठोस झुलसते/अपघटित नहीं होते।** 3. बड़े व शुद्ध ज्यामितीय क्रिस्टल बनते हैं (`जबकि वाष्पीकरण में सारा विलायक उड़ जाता है और अशुद्धियाँ ठोस के साथ बची रह जाती हैं`)।',
          },
        },
      ],
    },
    {
      id: 'distillation-chromatography-funnel-sublimation',
      number: '5.3.2–5.4.2',
      flowDiagramKey: 'ch5-heterogeneous-sep',
      realImage: {
        imageUrl: '/ncert-notes/class9-chem-ch5/real/liebig-condenser.webp',
        caption: {
          en: 'Glass Water Condenser condensing pure lower-boiling vapor back into liquid distillate drops (NCERT Section 5.3.2 & Fig 5.12 / 5.26).',
          hi: 'जल संघनित्र (Condenser) के भीतर वाष्प के पुनः ठंडा होकर शुद्ध आसुत द्रव की बूँदों में बदलने का वास्तविक दृश्य।',
        },
      },
      title: {
        en: 'Simple & Fractional Distillation, Petroleum Refining, Chromatography, Separating Funnel, Sublimation & Alloys',
        hi: 'सरल व प्रभाजी आसवन, देग-भापका, कागज वर्णलेखिकी, पृथक्कारी कीप, ऊर्ध्वपातन व मिश्रधातुएँ',
      },
      summaryTag: {
        en: 'NCERT Pages 80–85 • ΔT ≥ 25 °C Rule, Table 5.5, Kannauj Mitti-Attar, Ink Capillary & Brass/Bronze/Steel',
        hi: 'NCERT पृ. 80–85 • ΔT ≥ 25°C नियम, कन्नौज देग-भापका इत्र, पेट्रोलियम प्रभाज, स्याही वर्णलेखिकी, कीप, कपूर व पीतल/काँसा',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Distillation (`ΔT ≥ 25 °C`), Kannauj `Deg-Bhapka`, Petroleum Refining (`ΔT < 25 °C`) & Chromatography',
            hi: '1. सरल आसवन (`ΔT ≥ 25 °C`), कन्नौज देग-भापका इत्र, प्रभाजी आसवन व कागज वर्णलेखिकी',
          },
          content: {
            en: 'If you want to recover **liquid solvent** (or separate two **miscible liquids**), use **==Distillation (आसवन)==**. **Strict Boiling-Point Rule (`NCERT p.80`)**: Simple Distillation works cleanly when boiling points differ by **==at least 25 °C (`ΔT ≥ 25 °C`)==** — e.g., **Acetone (`56 °C`) + Water (`100 °C`) -> `ΔT = 44 °C`**. Lower-boiling acetone vaporizes first into the **==Water Condenser (`जल संघनित्र — Ex Q15 ख`)==** (`cooling water flows IN at the bottom and OUT at the top`) and drips as pure **distillate** into the conical flask (`ग`), leaving higher-boiling liquid in the distillation flask (`क`). **Heritage Note (`p.81`)**: **Kannauj (Uttar Pradesh)** — India’s Perfume Capital (`इत्र राजधानी`) — crafts **Mitti-Attar (`मिट्टी का इत्र — earthy petrichor aroma`)** using a traditional copper still distillation method called **==Deg-Bhapka (`देग-भापका विधि`)==**. When miscible liquids differ by **==less than 25 °C (`ΔT < 25 °C`)==** (`e.g. Alcohol 78 °C + Benzene 80 °C -> ΔT = 2 °C; Alcohol 78 °C + Chloroform 61 °C -> ΔT = 17 °C; or Crude Petroleum`), industrial towers use **==Fractional Distillation (प्रभाजी आसवन)==** (`Fig 5.14: Petroleum gas/LPG at top -> Petrol -> Kerosene/Aviation fuel -> Diesel -> Lubricating oil -> Bitumen at bottom`). For trace colored dyes (`Activity 5.5`), **==Paper Chromatography==** (`Chroma = color, Graphein = writing`) separates ink, **green food dye in `2% m/v` salt solution**, spinach chlorophyll, or flower pigments based on **differential solubility and interaction with filter paper**.',
            hi: 'जब दो **मिश्रणीय द्रवों (`Miscible liquids`)** को बिना किसी को खोए अलग करना हो (या लवणीय जल से शुद्ध आसुत जल पाना हो), तब **==आसवन (Distillation)==** अपनाते हैं। **अनिवार्य NCERT शर्त (`पृ. 80`):** सरल आसवन हेतु दोनों द्रवों के क्वथनांक में **==कम-से-कम `25 °C` (`ΔT ≥ 25 °C`) का अंतर==** होना चाहिए — जैसे **ऐसीटोन (`56 °C`) व जल (`100 °C`), अंतर `44 °C`**। इसमें कम क्वथनांक वाला द्रव पहले भाप बनकर **==जल संघनित्र (`ख`)==** में ठंडा होता है और शुद्ध द्रव के रूप में ग्राह्य फ्लास्क (`ग`) में जमा हो जाता है। भारत की इत्र राजधानी **कन्नौज (`उ.प्र.`)** में वर्षा की सोंधी खुशबू वाला **‘मिट्टी का इत्र’** पारंपरिक **==‘देग-भापका विधि’==** (आसवन) से पीढ़ी-दर-पीढ़ी बनाया जाता है! जब द्रवों के क्वथनांकों में **`25 °C` से कम अंतर (`ΔT < 25 °C`)** हो (जैसे **ऐल्कोहॉल `78 °C` + बेंजीन `80 °C`** या **कच्चा पेट्रोलियम**), तो **==प्रभाजी आसवन (Fractional Distillation)==** प्रयुक्त होता है (`चित्र 5.14: ऊपर से नीचे क्रमशः LPG गैस → पेट्रोल → केरोसीन → डीजल → स्नेहक तेल → बिटुमिन`)। रंगों/स्याही को अलग करने हेतु **==कागज वर्णलेखिकी (`Paper Chromatography`)==** (`यूनानी Chroma = रंग, Graphein = लिखना`) प्रयुक्त होती है (`2% m/v NaCl` विलयन में हरा खाद्य रंग या पालक/पुष्प के वर्णक भी अलग किए जा सकते हैं)।',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Immiscible Funnel, Sublimation & Deposition, Multi-Step Mixtures & Alloys (`Brass, Bronze, Steel`)',
            hi: '2. पृथक्कारी कीप, ऊर्ध्वपातन-निक्षेपण एवं मिश्रधातुएँ (पीतल, काँसा व स्टेनलेस स्टील)',
          },
          content: {
            en: 'Mixtures with visible layers or distinct solid chunks yield to physical property tricks (`Sec 5.4`): (1) **==Separating Funnel (पृथक्कारी कीप)==** separates **immiscible liquids** (`oil + water`) using **density difference** — **Mustard oil (`~910 g/L`) floats on top; denser water (`1000 g/L`) sits below and drains out first** via the stopcock (`Think: If two immiscible liquids had IDENTICAL density, they would NOT separate cleanly into top/bottom layers!`). (2) **==Sublimation (ऊर्ध्वपातन) & Deposition (निक्षेपण)==** (`Act 5.7 + Fig 5.17`): Heating a China dish under an inverted cotton-plugged funnel makes **==Camphor (`कपूर`), Naphthalene (`नैफ्थलीन`), or Dry Ice (`solid CO₂` — used in ice-cream storage!)==** turn **directly from Solid into Vapor below its melting point** without ever becoming liquid! On hitting the cooler funnel neck, vapor condenses **directly back into Solid**, called **==Deposition (निक्षेपण)==**, leaving sand behind. Notice **gases mix almost uniformly (`Homogeneous air`, `Rocket propellant H₂ + O₂`)**, EXCEPT when solid/liquid particulates float in gas (`smoke, fog, dust = Heterogeneous`). Finally, **==Alloys (मिश्रधातुएँ)==** are **homogeneous mixtures** of metals (`or metal + non-metal`) made by melting together — e.g. **Brass (`पीतल`: ~80% Cu + 20% Zn)**, **Bronze (`काँसा`: ~80% Cu + 20% Sn)**, and **Stainless Steel (`Fe + 0.03–0.8% C + 16–18% Cr + 10–14% Ni + 2–3% Mo`)** (`RRB NTPC 2025 PYQ: Even though alloys cannot be separated physically, they are mixtures because they show constituent properties and have variable compositions!`).',
            hi: 'विषमांगी मिश्रणों के पृथक्करण हेतु घटक के विशेष भौतिक गुण का प्रयोग करते हैं: (1) **==पृथक्कारी कीप (`Separating Funnel`)==** दो **अमिश्रणीय द्रवों** (जैसे सरसों का तेल + जल) को उनके **==घनत्व के अंतर==** से अलग करती है (`हल्का तेल ऊपरी परत बनाता है; भारी जल निचली परत बनकर स्टॉपकॉक से पहले निकलता है`)। (2) **==ऊर्ध्वपातन (`Sublimation`) व निक्षेपण (`Deposition`)==** (`क्रियाकलाप 5.7`): जब **==कपूर, नैफ्थलीन या शुष्क बर्फ (`ठोस CO₂`, आइसक्रीम भंडारण में प्रयुक्त)==** को रेत में से गर्म किया जाता है, तो वे गलनांक से कम ताप पर **बिना द्रव बने सीधे ठोस से वाष्प (`ऊर्ध्वपातन`)** बनते हैं तथा ठंडी कीप की दीवार पर बिना द्रव बने **वापस ठोस (`निक्षेपण`)** के रूप में जम जाते हैं! अधिकांश **गैस मिश्रण समांगी** होते हैं (`वायु; रॉकेट ईंधन H₂ + O₂`), पर धुआँ/कोहरा/धूल विषमांगी हैं। अंततः, पिघली अवस्था में मिलाए गए दो या अधिक धातुओं (या धातु+अधातु) के **समांगी ठोस विलयन** **==मिश्रधातु (`Alloys`)==** कहलाते हैं (`भौतिक विधि से अलग न होने पर भी इन्हें मिश्रण माना जाता है क्योंकि ये घटकों के गुण दर्शाते हैं और संघटन परिवर्ती हो सकता है — NTPC 2025 PYQ`)! उदाहरण: **पीतल ≈ 80% Taँबा + 20% जिंक**, **काँसा ≈ 80% ताँबा + 20% टिन**, तथा **स्टेनलेस स्टील (`Fe + 0.03–0.8% C + 16–18% Cr + 10–14% Ni + 2–3% Mo`)**।',
          },
        },
        {
          type: 'examTrap',
          title: {
            en: 'Railway CBT Traps: `Chromatography Level`, `Acetone-Alcohol`, & `Sand-Salt-Naphthalene Sequence`',
            hi: 'रेलवे CBT मुख्य जाल: क्रोमैटोग्राफी जल स्तर, चित्र 5.25 क्रम व मिश्रण त्रि-पद्धति',
          },
          content: {
            en: 'Trap 1 (`Think Q6-iii`): At the start of Paper Chromatography, the **water/solvent line MUST be BELOW the ink dot** — dipping the ink dot into water washes all dye directly into the jar instead of separating upward! Trap 2 (`Ex Q11 — Fig 5.25`): Given **Sand + Salt + Naphthalene**, **Picture 1 (Sublimation)** removes Naphthalene FIRST (`otherwise heating later vaporizes it`), THEN add water -> **Picture 3 (Filtration)** traps Sand on paper -> **Picture 2 (Evaporation)** dries pure Salt! Trap 3 (`Ex Q15`): **Ethanol `78 °C` + Chloroform `61 °C`** (`Δ = 17 °C < 25 °C`) CANNOT be separated cleanly by simple distillation!',
            hi: '1. कागज वर्णलेखिकी में विलायक स्तर **सदैव स्याही बिंदु व पेंसिल रेखा से नीचे** होना चाहिए (अन्यथा स्याही जार में ही घुल जाएगी — *सोचिए 6-iii असत्य!*). 2. **रेत + नमक + नैफ्थलीन (`Ex Q11`)**: पहले `चित्र 1` (ऊर्ध्वपातन) से नैफ्थलीन अलग करें → फिर जल मिलाकर `चित्र 3` (निस्यंदन) से रेत छानें → अंत में `चित्र 2` (वाष्पन) से नमक प्राप्त करें! 3. **ऐल्कोहॉल (`78°C`) + क्लोरोफॉर्म (`61°C`)** का अंतर केवल `17°C` (`<25°C`) है अतः सरल नहीं, **प्रभाजी आसवन** चाहिए।',
          },
        },
      ],
    },
    {
      id: 'suspensions-centrifuge-coagulation-colloids-tyndall',
      number: '5.4.3–5.5',
      flowDiagramKey: 'ch5-solution-colloid-suspension',
      realImage: {
        imageUrl: '/ncert-notes/class9-chem-ch5/real/tyndall-laser-beakers.webp',
        caption: {
          en: 'Laboratory Tyndall Effect Proof: Red laser path disappears in clear True Solutions (left/right) but glows vividly inside the Colloid beaker (center) due to light scattering by 1–1000 nm particles.',
          hi: 'टिंडल प्रभाव प्रयोग: किनारे वाले शुद्ध पारदर्शी विलयनों में किरण पथ अदृश्य रहता है, जबकि बीच के कोलॉइड गिलास में `1–1000 nm` कणों द्वारा प्रकाश प्रकीर्णन से लेसर पथ चमक उठता है।',
        },
      },
      title: {
        en: 'Suspensions, Centrifugation (`Paperfuge`), Coagulation (`Alum/Paneer`), Colloids (`1–1000 nm`), Emulsions & Tyndall Effect',
        hi: 'निलंबन, अपकेंद्रण (`पेपरफ्यूज`), स्कंदन (`फिटकरी/पनीर`), कोलॉइड (`1–1000 nm`), पायस व टिंडल प्रभाव',
      },
      summaryTag: {
        en: 'NCERT Pages 85–89 • John Tyndall, Disperse Phase/Medium, O/W vs W/O Emulsion, Phugadi/Kikali, Blood Banks & Kidneys',
        hi: 'NCERT पृ. 85–89 • जॉन टिंडल, परिक्षिप्त प्रावस्था-माध्यम, पायस, रक्त बैंक, गुर्दे (किडनी) व जल शोधन',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Suspensions (`> 1000 nm`), Centrifugation (`Phugadi` / `Paperfuge`) & Coagulation (`Alum` / `Paneer`)',
            hi: '1. निलंबन (`> 1000 nm`), अपकेंद्रण (`पेपरफ्यूज`) एवं स्कंदन (`फिटकरी व दूध से पनीर`)',
          },
          content: {
            en: 'Stir chalk powder, sawdust, tea leaves, or mud into water: particles remain suspended across the liquid and are **==visible to the naked eye (`diameter > 1000 nm`)==** — this unstable heterogeneous mixture is a **==Suspension (निलंबन)==** (`RRB Tech Gr-III 2024 & Group D 2025 TOP PYQ`). Leave it undisturbed and gravity pulls particles to the bottom (`settles down`), and ordinary filter paper traps them. Notice that muddy water *still* stays cloudy after filtration because **ultra-fine clay particles slip right through paper pores**! How do labs & waterworks rescue that? By two methods: **(A) ==Centrifugation (अपकेंद्रण)==** (`NCERT Fig 5.19`): Just like the spin-circle children’s game (**Phugadi** in Marathi / **Kikali** in Punjabi), rapid spinning throws **denser/heavier particles radially outward** to the bottom while keeping **lighter liquid at the top** — separating **Blood Plasma, Platelets+WBC buffy coat, and heavy bottom RBCs**, cream from milk, and spin-dry clothes! **Medical Innovation (`p.86`)**: A low-cost hand-spun cardboard-and-string toy centrifuge called **==Paperfuge==** runs without electricity to diagnose **malaria and anemia** in remote villages! **(B) ==Coagulation (स्कंदन)==** (`Fig 5.21`): Adding white crystalline **==Alum (`फिटकरी`)==** acts as a **coagulant**, clumping ultra-fine suspended dirt into heavy flocs that undergo **sedimentation** and can then be decanted/filtered. At home, adding **acid (`lemon juice or vinegar`) coagulates milk protein to make Paneer (`पनीर`)**!',
            hi: 'जब ठोस कण जल में घुलते नहीं बल्कि नग्न आँखों से दिखाई देते हुए तैरते रहते हैं (`कण व्यास > 1000 nm`), तो उस अस्थायी विषमांगी मिश्रण को **==निलंबन (`Suspension`)==** कहते हैं (`रेत-जल, चॉक चूर्ण, पंकिल जल, चाय पत्तियाँ`)। इसे शांत रखने पर कण गुरुत्वाकर्षण से **नीचे बैठ जाते हैं** (`निस्यंदन से भी पृथक हो जाते हैं`)। परंतु कीचड़ के अतिसूक्ष्म कण फिल्टर पेपर के छिद्रों से भी पार निकलकर जल को धुँधला रखते हैं — इन्हें हटाने की दो मुख्य विधियाँ हैं: **(क) ==अपकेंद्रण (`Centrifugation`)==**: मराठी खेल **‘फुगड़ी’** या पंजाबी **‘कीकली’** की तरह नलिका को अति तीव्र घुमाने पर अपकेंद्रीय बल भारी कणों को तली/बाहर फेंकता है और हल्का द्रव ऊपर रहता है (`उदा.: रक्त बैंक में भारी लाल रक्त कणिकाएँ नीचे, मध्य में प्लेटलेट-WBC व ऊपर हल्का प्लाज्मा पृथक करना!`)। बिना बिजली के गत्ते-धागे से बना **==‘पेपरफ्यूज’ (`Paperfuge`)==** दूरस्थ क्षेत्रों में मलेरिया व ऐनीमिया जाँच में क्रांतिकारी है! **(ख) ==स्कंदन (`Coagulation`)==**: धुँधले जल में **==फिटकरी (`Alum` — स्कंदक)==** मिलाने पर सूक्ष्म कण चिपककर भारी गुच्छे बना लेते हैं और अवसादन से नीचे बैठ जाते हैं। घर पर दूध में नींबू/सिरका (अम्ल) डालकर **==पनीर (`प्रोटीन का स्कंदन`)==** बनाना इसी सिद्धांत का उदाहरण है!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Colloids (`1–1000 nm`), Two Components (`Phase/Medium`), Emulsions & Tyndall Effect (`John Tyndall`)',
            hi: '2. कोलॉइड (`1–1000 nm`), परिक्षिप्त प्रावस्था/माध्यम, पायस व टिंडल प्रभाव',
          },
          content: {
            en: 'Between solutions (`< 1 nm`) and suspensions (`> 1000 nm`) sits **==Colloids (`1–1000 nm` particle diameter)==** — e.g., **==Milk, Blood, Ice Cream, Tomato Sauce, Fog, Smoke==**. **#1 Repeated RRB Trap**: Colloids **LOOK uniform/homogeneous** to the naked eye, **DO NOT settle down (`stable`)**, and **pass through ordinary filter paper**, **YET ARE HETEROGENEOUS MIXTURES** (`NTPC UG 2025, Tech Gr-III 2024, Group D 2025`)! Instead of solute/solvent, a colloid has a **==Dispersed Phase (`परिक्षिप्त प्रावस्था` — the tiny suspended particles/droplets, e.g. blood cells or butterfat)==** and a **==Dispersion Medium (`परिक्षेपण माध्यम` — the continuous surrounding medium, e.g. blood plasma)==**. When light passes through a colloid or freshly stirred suspension, the `1–1000 nm` particles **scatter the beam (`प्रकाश का प्रकीर्णन`)**, making its **path clearly visible** — the **==Tyndall Effect (टिंडल प्रभाव)==**, discovered by **==John Tyndall==** (`Examples: sunlit forest mist canopy, dusty beam in a dark room pinhole, stadium floodlights, foggy city air`). **Emulsions (`पायस — NCERT p.88`)**: Special colloids where **BOTH phase and medium are LIQUIDS** — **==Oil-in-Water (`O/W`: Milk, Body Lotion, Vanishing Cream)==** vs **==Water-in-Oil (`W/O`: Butter, Cold Cream)==**, stabilized by an **==Emulsifier (`पायसी कारक` — protein in milk/butter; soap between oil & water!)==**. **Everyday Separation (`p.89`)**: Inside our body, **==Kidneys==** separate waste from blood; sewage treatment plants use sedimentation + coagulation + filtration; municipal bins separate **Dry waste (`paper, glass, plastic, metal`)** vs **Wet compostable waste** (`plus researchers recovering Lithium from old phone/laptop batteries!`).',
            hi: 'विलयन (`< 1 nm`) व निलंबन (`> 1000 nm`) के बीच **==कोलॉइड (`1–1000 nm` व्यास)==** आते हैं — जैसे **==दुग्ध, रक्त, आइसक्रीम, टमाटर सॉस, कोहरा व धुआँ==**। **रेलवे परीक्षा का #1 प्रश्न:** कोलॉइड देखने में समांगी प्रतीत होते हैं, शांत रखने पर **नीचे नहीं बैठते**, और फिल्टर से नहीं छनते — फिर भी वे **==विषमांगी मिश्रण (`Heterogeneous`)==** होते हैं (`RRB Tech 2024, NTPC 2025, Group D 2025`)! कोलॉइड के दो घटक **==परिक्षिप्त प्रावस्था (`Dispersed Phase` — निलंबित कण जैसे रक्त कोशिकाएँ)==** व **==परिक्षेपण माध्यम (`Dispersion Medium` — जैसे रक्त प्लाज्मा)==** कहलाते हैं। कोलॉइडी कणों द्वारा प्रकाश की किरण का प्रकीर्णन कर मार्ग दृश्य बनाने की घटना **==टिंडल प्रभाव (`Tyndall Effect`, वैज्ञानिक जॉन टिंडल)==** कहलाती है (`उदा.: घने जंगल की पत्तियों से छनती सूर्य किरणें, अंधेरे कमरे में छेद से आता प्रकाश पुंज, स्टेडियम की फ्लड लाइट्स`)। जब कोलॉइड की दोनों प्रावस्थाएँ **द्रव** हों तो उसे **==पायस (`Emulsion`)==** कहते हैं: **(i) जल में तेल (`O/W`): दुग्ध, बॉडी लोशन, वैनिशिंग क्रीम**, तथा **(ii) तेल में जल (`W/O`): मक्खन, कोल्ड क्रीम** — इन्हें दूध में **प्रोटीन** व तेल-जल में **साबुन** जैसे **पायसी कारक** स्थिर रखते हैं। हमारे शरीर में **==गुर्दे (Kidneys)==** रक्त से अपशिष्ट पृथक करते हैं, सीवेज संयंत्र जल शुद्ध करते हैं, सूखा/गीला कचरा छंटता है और पुरानी बैटरियों से **लिथियम** पुनः प्राप्त किया जा रहा है!',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Ultra-Compact RRB Cheat Code: Size `< 1 : 1–1000 : > 1000 nm` & Emulsion `O/W vs W/O`',
            hi: 'रिवीजन ट्रिक: आकार पैमाना व ‘दूध O/W — मक्खन W/O’ पायस अंतर',
          },
          content: {
            en: '**Scale**: `< 1 nm` = Solution (**No Tyndall, No Filter, No Settle**) -> `1–1000 nm` = Colloid (**YES Tyndall**, No Filter, No Settle, **Heterogeneous!**) -> `> 1000 nm` = Suspension (Tyndall while stirred, **YES Filter**, **YES Settle**). **Emulsion**: **Milk/Body Lotion** are **water-washable** -> water is outside medium (**Oil-in-Water `O/W`**); **Butter/Cold Cream** feel oily/greasy -> oil/fat is outside medium (**Water-in-Oil `W/O`**)! (`RRB Tech 2024 Face Cream = Emulsion!`).',
            hi: '**आकार याद रखें**: `< 1` विलयन (टिंडल ❌, बैठे ❌) | `1–1000` कोलॉइड (टिंडल ✅, बैठे ❌, *विषमांगी!*) | `> 1000` निलंबन (फ़िल्टर ✅, बैठे ✅)। **पायस ट्रिक**: **दूध व वैनिशिंग क्रीम** पानी में तुरंत घुलते हैं (अधिक भाग जल = **जल में तेल `O/W`**); **मक्खन व कोल्ड क्रीम** चिकने होते हैं (बाहरी भाग वसा/तेल = **तेल में जल `W/O`**)!',
          },
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      title: {
        en: 'TRAP 1: Colloid Looks Homogeneous -> Actually HETEROGENEOUS!',
        hi: 'जाल 1: कोलॉइड (दूध/रक्त) समांगी दिखता है, पर उत्तर विषमांगी लगाएँ!',
      },
      wrong: {
        en: 'Calling Milk or Blood a "Homogeneous Solution" because particles don’t settle or show in filter paper.',
        hi: 'कण नीचे न बैठने के कारण दूध या रक्त को समांगी (Homogeneous) मान लेना।',
      },
      right: {
        en: 'Because particles (`1–1000 nm`) scatter light (**Tyndall effect**) & remain distinct phases under ultramicroscope, **Colloid IS a HETEROGENEOUS Mixture** (`NCERT Table 5.2 + 5+ RRB PYQs!`).',
        hi: '`1–1000 nm` आकार के कण अलग प्रावस्था बनाते हैं व टिंडल प्रभाव दर्शाते हैं — अतः **कोलॉइड सदैव विषमांगी मिश्रण (`Heterogeneous`) है**!',
      },
    },
    {
      title: {
        en: 'TRAP 2: `% m/m` Denominator = `Solute + Solvent` (NOT Solvent Alone!)',
        hi: 'जाल 2: `% m/m` सूत्र में नीचे केवल विलायक नहीं, कुल विलयन लिखें!',
      },
      wrong: {
        en: 'Dividing `30 g sugar / 80 g water = 37.5%` in Ex Q14(c) or `10 / 90 = 11.1%` in Ex 5.1.',
        hi: '`80 g` पानी में `30 g` चीनी के लिए `30/80 = 37.5%` निकालना।',
      },
      right: {
        en: 'Total Solution Mass = `30 + 80 = 110 g` -> **`(30 / 110) × 100 = 27.27% m/m`** (`NCERT Answer Key p.271 verified!`).',
        hi: 'कुल विलयन द्रव्यमान = `30 + 80 = 110 g` -> **`(30/110)×100 = 27.27% m/m`** (`NCERT उत्तरकुंजी पृष्ट 271 से सत्यापित!`).',
      },
    },
    {
      title: {
        en: 'TRAP 3: Alloy CANNOT Be Separated Physically — Why Is It STILL a Mixture (`NTPC 2025`)?',
        hi: 'जाल 3: मिश्रधातु भौतिक विधि से अलग नहीं होती, फिर भी मिश्रण क्यों?',
      },
      wrong: {
        en: 'Thinking Brass (`Cu + Zn`) or Bronze (`Cu + Sn`) is a chemical "Compound".',
        hi: 'पीतल या काँसा को रासायनिक यौगिक (Compound) समझ लेना।',
      },
      right: {
        en: 'Alloys (**1**) **retain properties of their constituent metals** and (**2**) can have **variable composition** (`NCERT p.84 + NTPC 2025 PYQ`) -> classified as **Homogeneous Solid Mixtures**!',
        hi: 'मिश्रधातु में धातुएँ रासायनिक बंध नहीं बनातीं; यह अपने घटकों के गुण दर्शाती है और इनका अनुपात परिवर्ती हो सकता है -> **ठोस समांगी मिश्रण**!',
      },
    },
    {
      title: {
        en: 'TRAP 4: Gas vs Solid Solubility With Rising Temperature (`Group D 2025`)',
        hi: 'जाल 4: ताप बढ़ने पर ठोस बनाम गैस की जल में विलेयता!',
      },
      wrong: {
        en: 'Assuming ALL substances dissolve more when you heat water.',
        hi: 'यह सोचना कि गरम पानी में ठोस व गैस दोनों अधिक घुलते हैं।',
      },
      right: {
        en: '**Solid in Liquid**: solubility **INCREASES** with temperature (`KNO₃`). **Gas in Liquid**: solubility **DECREASES** with temperature (`aquatic fish suffocate in hot shallow water; cold soda holds more CO₂!`).',
        hi: '**ठोस की विलेयता ताप बढ़ने पर बढ़ती है**, परंतु **गैसों की विलेयता ताप बढ़ने पर घटती है** (`तालाब गरम होने पर जल में O₂ कम होने से मछलियाँ सतह पर आती हैं; ठंडे सोडा में अधिक CO₂ घुलती है`)!',
      },
    },
    {
      title: {
        en: 'TRAP 5: Simple (`ΔT ≥ 25 °C`) vs Fractional Distillation (`ΔT < 25 °C`) & Chromatography Pencil Line',
        hi: 'जाल 5: `25 °C` आसवन सीमा एवं वर्णलेखिकी की पेंसिल रेखा',
      },
      wrong: {
        en: 'Using simple distillation for Alcohol (`78°C`) + Benzene (`80°C`), or drawing the chromatography baseline in pen ink.',
        hi: 'ऐल्कोहॉल (`78°`)+बेंजीन (`80°`) को सरल आसवन से अलग करना या क्रोमैटोग्राफी रेखा स्याही-पेन से खींचना।',
      },
      right: {
        en: '**Simple distillation fails below `25 °C` difference** -> use **Fractional Distillation**. And chromatography baseline **MUST be drawn in PENCIL (`graphite insoluble`) ABOVE the solvent surface**!',
        hi: '`25 °C` से कम अंतर पर **प्रभाजी आसवन** अनिवार्य है। क्रोमैटोग्राफी रेखा **हमेशा पेंसिल से (`अघुलनशील ग्रेफाइट`)** व **विलायक स्तर से ऊपर** खींचें!',
      },
    },
  ],
  pioneers: [
    {
      name: { en: 'John Tyndall (`19th Century Physicist`)', hi: 'जॉन टिंडल (`प्रकाश प्रकीर्णन अग्रदूत`)' },
      country: { en: 'Irish Physicist (`Sec 5.5`)', hi: 'आयरिश भौतिकविद् (NCERT 5.5)' },
      badge: { en: 'Tyndall Effect Discovery', hi: 'टिंडल प्रभाव के खोजकर्ता' },
      fact: {
        en: 'First explained how fine colloidal & aerosol particles (`1–1000 nm`) scatter a narrow light beam cleanly, making its cone visible in fog, forest mist, and milk (`NCERT p.88`).',
        hi: 'सर्वप्रथम समझाया कि कोलाइडी कण प्रकाश किरण पुंज को प्रकीर्णित कर उसका मार्ग दृश्य बनाते हैं — इसी से धुंध, कोहरे व दूध में किरण पथ दिखता है।',
      },
    },
    {
      name: { en: 'Dr. Dilip Mahalanabis (`Indian Pediatrician`)', hi: 'डॉ. दिलीप महालनोबिस (`भारतीय शिशुरोग विशेषज्ञ`)' },
      country: { en: 'India • ORS Revolution (`Sec 5.2.1`)', hi: 'भारत • ORS क्रांति (NCERT 5.2.1)' },
      badge: { en: 'Standardized Life-Saving ORS', hi: 'WHO द्वारा प्रचलित जीवनरक्षक ORS' },
      fact: {
        en: 'Formulated and championed Oral Rehydration Solution (`ORS` — exact salt + sugar ratio in water) to save millions of lives from cholera & diarrhea dehydration (`NCERT p.74`).',
        hi: 'हैजा व अतिसार से होने वाले निर्जलीकरण के उपचार हेतु निश्चित सांद्रता वाला ORS विकसित व लोकप्रिय किया, जिसने विश्वभर में लाखों जीवन बचाए।',
      },
    },
    {
      name: { en: 'Traditional Coastal Salt Harvesters (`Panga & Karkach`)', hi: 'भारतीय तटीय नमक शिल्प (`पांगा एवं करकच`)' },
      country: { en: 'India’s Heritage Knowledge (`p.79`)', hi: 'भारत का वैज्ञानिक योगदान' },
      badge: { en: 'Ancient Salt Crystallization', hi: 'पारंपरिक क्रिस्टलीकरण विज्ञान' },
      fact: {
        en: 'Coastal Indian communities engineered crystal sizes through two distinct methods: boiling concentrated brine (**Panga salt**) and open solar evaporation (**Karkach salt**).',
        hi: 'सांद्र समुद्री खारे जल को उबालकर **‘पांगा’ नमक** व सूर्य-तापन वाष्पीकरण द्वारा **‘करकच’ नमक** के विभिन्न आकार वाले क्रिस्टल बनाए जाते थे।',
      },
    },
    {
      name: { en: 'Kannauj Perfumers (`Deg-Bhapka Method`)', hi: 'कन्नौज इत्र शिल्प (`देग-भापका आसवन`)' },
      country: { en: 'Kannauj, Uttar Pradesh (`p.81`)', hi: 'कन्नौज, उ.प्र. • भारत की इत्र राजधानी' },
      badge: { en: 'Traditional Steam Distillation', hi: 'सदियों पुरानी भाप-आसवन कला' },
      fact: {
        en: 'Perfumers in Kannauj distill baked earth chips in traditional copper stills (**Deg-Bhapka**) to capture the iconic first-rain petrichor essence (**Mitti-ka-Attar**).',
        hi: 'वर्षा की पहली बूंदों जैसी मिट्टी की सोंधी सुगंध (**मिट्टी का इत्र**) आज भी पारंपरिक ताँबे के देग-भापका आसवन से विश्व स्तर पर तैयार की जाती है।',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-tyndall-laser',
      figRef: { en: 'NCERT Fig 5.3 & 5.23 (`Laser Test`)', hi: 'NCERT चित्र 5.3 व 5.23 — लेसर परीक्षण' },
      title: {
        en: 'Laser Scattering Comparison: True Solution (Invisible Beam) vs Colloid (Glowing Tyndall Cone)',
        hi: 'शुद्ध विलयन (अदृश्य किरण) बनाम कोलॉइड (चमकीला टिंडल शंकु)',
      },
      imageUrl: '/ncert-notes/class9-chem-ch5/real/tyndall-laser-beakers.webp',
      hotspots: [
        {
          en: 'Colloidal particles (`1–1000 nm`) scatter laser light sideways toward the viewer’s eye, whereas `< 1 nm` dissolved ions/molecules do not.',
          hi: '`1–1000 nm` कोलॉइड कण प्रकाश को पार्श्व दिशा में प्रकीर्णित करते हैं; `< 1 nm` विलयन कण ऐसा नहीं कर सकते।',
        },
      ],
    },
    {
      id: 'vis-tyndall-forest',
      figRef: { en: 'NCERT Opening Q3 (`p.72` Forest Sunlight)', hi: 'NCERT पृ. 72 प्रश्न 3 — वनाच्छादित किरणें' },
      title: {
        en: 'Morning Sunbeams Streaming Through Dense Forest Canopy Mist (Natural Tyndall Effect)',
        hi: 'घने वृक्ष की पत्तियों के बीच कोहरे/धूल से सूर्य प्रकाश का प्राकृतिक टिंडल प्रकीर्णन',
      },
      imageUrl: '/ncert-notes/class9-chem-ch5/real/tyndall-forest-rays.webp',
      hotspots: [
        {
          en: 'Tiny water droplets and dust suspended as an aerosol colloid in morning forest air scatter shafts of sunlight visibly.',
          hi: 'प्रातःकालीन वन वायु में तैरती सूक्ष्म जल-बूंदें (कोलॉइड) सूर्य प्रकाश के मार्ग को चमकदार किरणों में बदल देती हैं।',
        },
      ],
    },
    {
      id: 'vis-cuso4-crystals',
      figRef: { en: 'NCERT Act 5.3 & Fig 5.8 (`Crystallization`)', hi: 'NCERT क्रियाकलाप 5.3 — क्रिस्टलीकरण' },
      title: {
        en: 'Deep Blue Geometric Copper Sulfate Crystals Formed by Slow Room-Temperature Cooling',
        hi: 'धीरे-धीरे शीतलन द्वारा निर्मित शुद्ध नीले कॉपर सल्फेट क्रिस्टल',
      },
      imageUrl: '/ncert-notes/class9-chem-ch5/real/cuso4-crystals.webp',
      hotspots: [
        {
          en: 'Slow room cooling lets particles arrange into large faceted crystals while soluble impurities stay left behind in filtrate.',
          hi: 'धीमे शीतलन से बड़े ज्यामितीय क्रिस्टल बनते हैं व अशुद्धियाँ विलयन में ही छनकर शेष रहती हैं।',
        },
      ],
    },
    {
      id: 'vis-liebig-condenser',
      figRef: { en: 'NCERT Fig 5.12 & 5.26(ख) (`Distillation`)', hi: 'NCERT चित्र 5.12 व 5.26 — जल संघनित्र' },
      title: {
        en: 'Water-Cooled Glass Condenser Condensing Lower-Boiling Vapors Back into Pure Liquid',
        hi: 'आसवन प्रक्रिया में वाष्प को पुनः शुद्ध द्रव में संघनित करता जल संघनित्र',
      },
      imageUrl: '/ncert-notes/class9-chem-ch5/real/liebig-condenser.webp',
      hotspots: [
        {
          en: 'Cold water jacket cools escaping vapors (`ΔT ≥ 25 °C` like Acetone `56 °C` over Water `100 °C`) cleanly into pure distillate.',
          hi: 'बाहरी शीतल जल जैकेट वाष्प की गुप्त ऊष्मा सोखकर उसे पुनः शुद्ध द्रव (`आसुत`) में परिवर्तित करता है।',
        },
      ],
    },
    {
      id: 'vis-paper-chrom',
      figRef: { en: 'NCERT Act 5.5 & Fig 5.15 (`Paper Chromatography`)', hi: 'NCERT क्रियाकलाप 5.5 — कागज वर्णलेखिकी' },
      title: {
        en: 'Black Ink Separating Into Red & Green Component Dye Bands by Differential Solubility',
        hi: 'कागज वर्णलेखिकी में विलायक के साथ ऊपर चढ़कर अलग होते स्याही के विभिन्न रंग',
      },
      imageUrl: '/ncert-notes/class9-chem-ch5/real/paper-chromatography.webp',
      hotspots: [
        {
          en: 'Dye more soluble in the rising mobile solvent and less tightly held by paper climbs higher toward the solvent front.',
          hi: 'जो वर्णक विलायक में अधिक घुलनशील होता है और कागज से कम चिपकता है, वह केशिकत्व से सबसे ऊपर पहुँचता है।',
        },
      ],
    },
  ],
  activities: [
    {
      id: 'act-5-1',
      title: { en: 'Activity 5.1: Three-Beaker Laser Beam, Settling & Filtration Test (`p.73`)', hi: 'क्रियाकलाप 5.1: तीन बीकर (`A` नमक, `B` चॉक, `C` दूध) — लेसर व छानन जाँच' },
      setup: {
        en: 'Take 3 beakers (`50 mL` water each): **A = Common Salt**, **B = Chalk Powder**, **C = Few drops of Milk**. Shine a **laser pointer** perpendicularly from the side (`safety: never look straight at laser!`), leave standing, then filter all three.',
        hi: 'तीन 100 mL बीकरों में 50 mL जल लेकर: **क = नमक**, **ख = चॉक चूर्ण**, **ग = दूध की कुछ बूँदें** घोलें। लंबवत लेसर डालें, कुछ देर शांत छोड़ें व निस्यंदन करें।',
      },
      observation: {
        en: '**A (`Solution`)**: Transparent, **NO laser beam visible**, never settles, zero residue on filter paper. **B (`Suspension`)**: Chalk visible, laser beam visible **till particles settle to bottom**, chalk residue trapped on paper. **C (`Colloid`)**: Looks uniform, **does NOT settle**, **bright Tyndall cone visible**, passes through filter paper.',
        hi: '**क (विलयन)**: पारदर्शी, लेसर पथ अदृश्य, नीचे नहीं बैठता, फिल्टर पार। **ख (निलंबन)**: कण दृश्य, नीचे बैठ जाते हैं, फिल्टर पर चॉक अवशेष बचता है। **ग (कोलॉइड)**: तली में नहीं बैठता, फिल्टर से निकल जाता है, पर **स्पष्ट टिंडल शंकु** दिखता है!',
      },
      predictQuestion: {
        question: { en: 'Which beaker passes completely through filter paper YET makes the laser beam clearly glow inside?', hi: 'कौन-सा बीकर छानने पर फिल्टर पेपर से निकल जाता है, फिर भी लेसर पथ को चमकीला दिखाता है?' },
        options: {
          en: ['Beaker A (Salt solution)', 'Beaker B (Chalk water)', 'Beaker C (Dilute Milk)', 'None of these'],
          hi: ['बीकर क (नमक विलयन)', 'बीकर ख (चॉक जल)', 'बीकर ग (दुग्ध + जल)', 'इनमें से कोई नहीं'],
        },
        correctIndex: 2,
      },
    },
    {
      id: 'act-5-2',
      title: { en: 'Activity 5.2: Food Pack % Concentrations & Solubility Curves (`Fig 5.6`, `p.74–77`)', hi: 'क्रियाकलाप 5.2: पैकेट लेबल % सांद्रता व विलेयता वक्र (`चित्र 5.6`)' },
      setup: {
        en: 'Compare commercial pack composition (`milk powder % m/m`, `5% m/v glucose`, `5% v/v vinegar`) and analyze **Fig 5.6** curves (`Compound A "क"` vs `Compound B "ख"` in `100 g` water across `10–80 °C`).',
        hi: 'दुग्ध पाउडर (`% m/m`), `5% m/v` ग्लूकोस, `5% v/v` सिरका लेबल पढ़कर **चित्र 5.6** में यौगिक ‘क’ और ‘ख’ के विलेयता वक्रों की तुलना करें।',
      },
      observation: {
        en: 'Compound `B (ख)` (`287 g @ 60 °C -> 241 g @ 40 °C`) rises much more steeply than `A (क)` (`~35–60 g`). Therefore, at `20 °C` and `60 °C`, solubility at `20 °C` is **LESS than** at `60 °C` for both solids, and rising temperature boosts `ख` far more than `क`. Cooling `100 g` saturated `ख` from `60 °C -> 40 °C` precipitates **`287 - 241 = 46 g`** pure crystals!',
        hi: 'यौगिक ‘क’ व ‘ख’ दोनों की `20°C` पर विलेयता `60°C` से **कम** है; ताप बढ़ाने पर **‘ख’ की विलेयता में ‘क’ की अपेक्षा बहुत अधिक वृद्धि** होती है। `60°C` पर `287 g` संतृप्त ‘ख’ को `40°C` (`241 g`) ठंडा करने पर **`46 g` क्रिस्टल** बाहर निकलते हैं!',
      },
      predictQuestion: {
        question: { en: 'If saturated `Compound B` at 60 °C (287 g / 100g water) slowly cools to 40 °C (solubility 241 g), how much crystal separates?', hi: '60°C पर `287 g` संतृप्त यौगिक ‘ख’ विलयन को `40°C` (विलेयता `241 g`) तक ठंडा करने पर कितना ठोस पृथक होगा?' },
        options: {
          en: ['241 g', '46 g pure crystals', '287 g', 'Zero'],
          hi: ['241 g', '46 g शुद्ध क्रिस्टल', '287 g', 'शून्य'],
        },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-3',
      title: { en: 'Activity 5.3: Pure Copper Sulfate Crystal Growth & Ice vs Room Cooling (`p.78`)', hi: 'क्रियाकलाप 5.3: कॉपर सल्फेट क्रिस्टल निर्माण एवं तीव्र बनाम मंद शीतलन' },
      setup: {
        en: 'Dissolve `1 g CuSO₄` + **`25 mL` water** + **1 drop dilute `H₂SO₄`** (`suppresses unwanted hydrolysis/reactions`) on a **water bath**, saturate by adding more `CuSO₄`, filter while hot, cover with watch glass & cool undisturbed (`Plus: compare half cooled in ice bath vs half at room temp!`).',
        hi: 'जल-ऊष्मक पर `25 mL` जल में `1 g CuSO₄` व **1 बूँद तनु `H₂SO₄`** (अवांछित अभिक्रिया रोकने हेतु) डालकर संतृप्त करें, गर्म अवस्था में छानें, वॉच ग्लास से ढककर धीरे-धीरे ठंडा होने दें।',
      },
      observation: {
        en: '**Slow cooling at room temperature** gives ions ample time to stack cleanly into **large, brilliant blue crystals**; **rapid ice-water chilling** yields tiny, distorted crystals! Spreading `1–2 mL` saturated `CuSO₄` on a lamination sheet evaporates too fast, making only tiny crusts.',
        hi: '**कक्ष ताप पर मंद शीतलन** से बड़े, सुंदर व चमकदार नीले क्रिस्टल बनते हैं; **हिमशीतित जल में तीव्र ठंडा** करने पर छोटे व अनियमित क्रिस्टल प्राप्त होते हैं!',
      },
      predictQuestion: {
        question: { en: 'Why is 1 drop of dilute `H₂SO₄` added while preparing `CuSO₄` crystals in Activity 5.3?', hi: 'क्रियाकलाप 5.3 में कॉपर सल्फेट क्रिस्टल बनाते समय 1 बूँद तनु सल्फ्यूरिक अम्ल क्यों मिलाया जाता है?' },
        options: {
          en: ['To turn the crystals green', 'To prevent unwanted chemical reactions and aid pure crystal growth', 'To lower the freezing point below 0 °C', 'To increase density above oil'],
          hi: ['क्रिस्टल को हरा करने के लिए', 'अवांछित अभिक्रियाओं को अवरुद्ध कर शुद्ध क्रिस्टल निर्माण में सहायता हेतु', 'हिमांक घटाने के लिए', 'घनत्व बढ़ाने हेतु'],
        },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-4',
      title: { en: 'Activity 5.4: Sea Water Salt Crystallization — `Panga` vs `Karkach` (`p.79`, `Fig 5.9`)', hi: 'क्रियाकलाप 5.4: समुद्री जल से नमक क्रिस्टलीकरण — ‘पांगा’ एवं ‘करकच’' },
      setup: {
        en: 'Examine **Fig 5.9** stages showing seawater trapped in shallow coastal pans evaporating until saturated brine yields white salt crystals (`plus compare India’s coastal Panga vs Karkach salt craft`).',
        hi: 'चित्र 5.9 में उथली क्यारियों में समुद्री जल के सूर्य-तापन से संतृप्त होकर नमक क्रिस्टल बनने के चरणों का वर्णन कीजिए।',
      },
      observation: {
        en: 'As water evaporates, salt concentration crosses saturation and NaCl precipitates as cubic crystals. Traditionally in coastal India, **Panga salt** was boiled out of concentrated brine while **Karkach salt** formed via solar evaporation.',
        hi: 'जल वाष्पित होने पर लवण सांद्रता संतृप्त बिंदु पार कर जाती है और शुद्ध नमक क्रिस्टल बन जाते हैं — भारत में **उबालने से पांगा** व **सौर वाष्पीकरण से करकच** नमक बनता था।',
      },
      predictQuestion: {
        question: { en: 'In India’s traditional coastal salt making, which salt was obtained specifically by BOILING concentrated seawater brine?', hi: 'प्राचीन भारत की तटीय पद्धति में समुद्र के सांद्र खारे जल को उबालकर कौन-सा नमक प्राप्त किया जाता था?' },
        options: {
          en: ['Karkach salt', 'Panga salt', 'Epsom salt', 'Potash alum'],
          hi: ['करकच नमक', 'पांगा नमक', 'एप्सम लवण', 'पोटाश फिटकरी'],
        },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-5',
      title: { en: 'Activity 5.5: Paper Chromatography of Black Ink & Food Dyes (`p.82`, `Fig 5.15`)', hi: 'क्रियाकलाप 5.5: काली स्याही व खाद्य रंग की कागज वर्णलेखिकी' },
      setup: {
        en: 'Cut a `3 cm` strip of chromatography/filter paper, draw a **PENCIL line `2 cm` from the bottom**, spot **black sketch-pen ink** in the middle, and suspend in a gas jar so **water/solvent stays BELOW the ink dot**. (`Variant: Green food color in 2% m/v salt water, or spinach/petals in alcohol`).',
        hi: '`3 cm` चौड़ी पट्टी पर नीचे से `2 cm` ऊपर **पेंसिल से क्षैतिज रेखा** खींचकर काली स्याही का बिंदु लगाएँ तथा इसे जार में ऐसे लटकाएँ कि **जल स्तर स्याही बिंदु से नीचे** रहे (`या 2% m/v लवण जल में हरा रंग`)।',
      },
      observation: {
        en: 'Water climbs paper fibers by **capillary action** and separates black ink into distinct color bands because **more water-soluble, less tightly adsorbed dyes move higher faster**!',
        hi: 'जल केशिकत्व द्वारा ऊपर चढ़ता है व काली स्याही विभिन्न रंगों के धब्बों में बंट जाती है — **विलायक में अधिक विलेय घटक सबसे ऊपर** पहुँचता है!',
      },
      predictQuestion: {
        question: { en: 'In paper chromatography (Act 5.5), why MUST the baseline be drawn with a pencil AND kept above the water surface?', hi: 'कागज वर्णलेखिकी में रेखा पेंसिल से क्यों खींचते हैं और स्याही बिंदु जल स्तर से ऊपर क्यों रखते हैं?' },
        options: {
          en: ['Pen ink would smear/dissolve in solvent, and immersing the spot washes dyes into the jar before rising', 'Pencil reacts with water to produce blue gas', 'Pen paper prevents capillary climb', 'Graphite increases boiling point by 25 °C'],
          hi: ['पेन की स्याही विलायक में घुल जाएगी, और बिंदु डुबोने से रंग ऊपर बढ़ने के बजाय जार के पानी में घुल जाएगा', 'पेंसिल जल से अभिक्रिया करती है', 'स्याही से केशिकत्व रुकता है', 'ग्रेफाइट क्वथनांक बढ़ाता है'],
        },
        correctIndex: 0,
      },
    },
    {
      id: 'act-5-6',
      title: { en: 'Activity 5.6: Separating Funnel for Mustard Oil & Water (`p.83`, `Fig 5.16`)', hi: 'क्रियाकलाप 5.6: पृथक्कारी कीप द्वारा सरसों के तेल व जल का पृथक्करण' },
      setup: {
        en: 'Pour `5 mL` mustard oil + `20 mL` water into a `50 mL` separating funnel and let stand undisturbed (`plus ask: what happens to two immiscible liquids of identical density?`).',
        hi: '50 mL पृथक्कारी कीप में `5 mL` सरसों का तेल व `20 mL` जल मिलाकर स्टैंड पर स्थिर रखें।',
      },
      observation: {
        en: 'Two sharp layers form due to immiscibility and density difference: **yellow mustard oil (`~0.91 g/mL`) floats ABOVE**, **clear water (`1.0 g/mL`) sinks BELOW**. Open stopcock slowly to drain water first, discard thin interface zone, collect pure oil separately.',
        hi: 'दो स्पष्ट परतें बनती हैं: **हल्का पीला तेल ऊपर** व **भारी जल नीचे**। स्टॉपकॉक खोलकर पहले जल निकालें, बीच का मिश्रित अंश अलग करें, फिर शुद्ध तेल एकत्र करें!',
      },
      predictQuestion: {
        question: { en: 'In a separating funnel containing mustard oil and water, which component settles as the LOWER layer and exits FIRST?', hi: 'सरसों के तेल और जल की पृथक्कारी कीप में कौन-सी परत नीचे रहती है और पहले बाहर निकलती है?' },
        options: {
          en: ['Mustard oil (higher density)', 'Water (higher density)', 'Both drain mixed evenly', 'Carbon dioxide layer'],
          hi: ['सरसों का तेल', 'जल (उच्च घनत्व के कारण)', 'दोनों साथ निकलते हैं', 'कार्बन डाइऑक्साइड परत'],
        },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-7',
      title: { en: 'Activity 5.7: Sublimation & Deposition of Camphor / Naphthalene (`p.84`, `Fig 5.17`)', hi: 'क्रियाकलाप 5.7: कपूर व रेत के मिश्रण का ऊर्ध्वपातन एवं निक्षेपण' },
      setup: {
        en: 'Place crushed **camphor (`or naphthalene`) + sand** in a China dish on wire gauge + tripod, cover with an **inverted glass funnel whose stem is plugged with cotton wool**, and heat gently.',
        hi: 'चीनी मिट्टी की प्याली में **कपूर + रेत** लेकर तार जाली पर रखें, ऊपर **रुई की डाट लगी उल्टी काँच की कीप** ढकें और गर्म करें।',
      },
      observation: {
        en: 'Camphor sublimes directly from **Solid -> Vapor** (`below M.P. without melting!`) and undergoes **Deposition** back to pure **white solid crystals inside the cool funnel wall**, leaving sand in the dish.',
        hi: 'कपूर बिना द्रव बने **सीधे ठोस से वाष्प (ऊर्ध्वपातन)** बनता है व ठंडी कीप की भीतरी दीवार पर **पुनः श्वेत ठोस (निक्षेपण)** के रूप में जम जाता है; रेत प्याली में शेष रहती है।',
      },
      predictQuestion: {
        question: { en: 'What is the direct reverse cooling transition from VAPOR back to SOLID without passing through a liquid phase called?', hi: 'वाष्प के ठंडा होकर बिना द्रव बने सीधे ठोस में बदलने की प्रक्रिया क्या कहलाती है?' },
        options: {
          en: ['Sublimation', 'Deposition (निक्षेपण)', 'Evaporation', 'Coagulation'],
          hi: ['ऊर्ध्वपातन', 'निक्षेपण (Deposition)', 'वाष्पीकरण', 'स्कंदन'],
        },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-8',
      title: { en: 'Activity 5.8: DIY Cardboard & Thread `Paperfuge` Centrifuge Model (`p.86`, `Fig 5.20`)', hi: 'क्रियाकलाप 5.8: गत्ते की चकती व धागे से ‘पेपरफ्यूज’ अपकेंद्रित्र मॉडल निर्माण' },
      setup: {
        en: 'Thread strong string through two central holes in a stiff cardboard disc (`with blood-capillary sample taped radially — inspired by Phugadi / Kikali spinning!`) and twist-pull rapidly.',
        hi: 'मराठी खेल ‘फुगड़ी’ व पंजाबी ‘कीकली’ की तरह गत्ते की चकती व मोटे धागे से एक हस्तचालित लघु अपकेंद्रित्र (‘पेपरफ्यूज’) बनाकर घुमाएँ।',
      },
      observation: {
        en: 'Centrifugal spin pushes **denser/heavier suspended particles radially outward** to tube tips, separating heavy RBCs from lighter plasma in minutes **without electricity** for malaria/anemia diagnosis.',
        hi: 'तीव्र घूर्णन से भारी कण बाहर की ओर तली में सिमटते हैं — **बिना बिजली के भी** यह मलेरिया व ऐनीमिया जैसी चिकित्सीय जाँच संभव बनाता है!',
      },
      predictQuestion: {
        question: { en: 'Which force principle does the low-cost `Paperfuge` exploit to separate dense RBCs from lighter blood plasma?', hi: 'कम लागत वाला ‘पेपरफ्यूज’ रक्त से भारी लाल कणिकाओं व हल्के प्लाज्मा को अलग करने हेतु किस सिद्धांत पर कार्य करता है?' },
        options: {
          en: ['Differential boiling points', 'Centrifugal force during rapid circular rotation', 'Capillary paper dye adsorption', 'Sublimation below melting point'],
          hi: ['क्वथनांक अंतर', 'तीव्र वृत्तीय घूर्णन में अपकेंद्रीय बल (Centrifugation)', 'केशिकत्व वर्णन', 'ऊर्ध्वपातन'],
        },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-9',
      title: { en: 'Activity 5.9: Complete Master Comparison Matrix (`Table 5.1`, `p.88`)', hi: 'क्रियाकलाप 5.9: तालिका 5.1 पूर्ण करना — विलयन, निलंबन व कोलॉइड तुलना' },
      setup: {
        en: 'Compare all **6 NCERT criteria** (`Nature, Particle size, Naked-eye visibility, Filtration, Settling/Sedimentation, Tyndall effect`) side-by-side across **Solution, Suspension, and Colloid** (`see Table 5.1 below`).',
        hi: 'विलयन, निलंबन व कोलॉइड के 6 प्रमुख गुणों (`प्रकृति, कण आकार, दृश्यता, निस्यंदन, तलछट, टिंडल प्रभाव`) को तालिका 5.1 में भरकर तुलना करें।',
      },
      observation: {
        en: '**Key Contrast**: Only **Solution** is truly homogeneous (`< 1 nm`, NO Tyndall). **Colloid (`1–1000 nm`)** looks homogeneous & never settles (`like Solution`), YET is heterogeneous & shows Tyndall (`like Suspension`)!',
        hi: 'केवल **विलयन** समांगी (`< 1 nm`, टिंडल ❌) है; **कोलॉइड (`1–1000 nm`)** न तो बैठता है न छनता है, फिर भी यह **विषमांगी** है व प्रबल टिंडल प्रभाव दिखाता है!',
      },
      predictQuestion: {
        question: { en: 'Which mixture matches: Heterogeneous + Particles DO NOT settle + Passes filter paper + Shows Tyndall Effect?', hi: 'निम्न विशेषताएँ किससे मेल खाती हैं: विषमांगी + कण नीचे न बैठें + फिल्टर पार + टिंडल प्रभाव दिखाए?' },
        options: {
          en: ['True Solution', 'Colloid', 'Suspension', 'Pure Compound'],
          hi: ['वास्तविक विलयन', 'कोलॉइड', 'निलंबन', 'शुद्ध यौगिक'],
        },
        correctIndex: 1,
      },
    },
  ],
  tables: [
    {
      id: 'tbl-5-1',
      title: {
        en: 'NCERT Table 5.1 & 5.2 Complete Solution: True Solution vs Suspension vs Colloid (`6` Properties)',
        hi: 'NCERT तालिका 5.1 व 5.2 संपूर्ण हल: विलयन, निलंबन एवं कोलॉइड के गुणधर्म व उदाहरण',
      },
      headers: {
        en: ['Property (Table 5.1 / 5.2)', 'True Solution', 'Suspension', 'Colloid'],
        hi: ['गुणधर्म (तालिका 5.1 / 5.2)', 'वास्तविक विलयन', 'निलंबन (Suspension)', 'कोलॉइड (Colloid)'],
      },
      rows: [
        [
          { en: '**1. Nature**', hi: '**1. प्रकृति (समांगी/विषमांगी)**' },
          { en: '**Homogeneous** (single uniform phase)', hi: '**समांगी मिश्रण** (एकल एकरूप प्रावस्था)' },
          { en: '**Heterogeneous** (non-uniform)', hi: '**विषमांगी मिश्रण** (असमान संघटन)' },
          { en: '**Heterogeneous** (appears homogeneous!)', hi: '**विषमांगी मिश्रण** (दिखता समांगी!)' },
        ],
        [
          { en: '**2. Particle Size**', hi: '**2. कणों का आकार (व्यास)**' },
          { en: '**Smallest (`< 1 nm`)**', hi: '**सबसे छोटा (`< 1 nm`)**' },
          { en: '**Largest (`> 1000 nm`)**', hi: '**सबसे बड़ा (`> 1000 nm`)**' },
          { en: '**Intermediate (`1–1000 nm`)**', hi: '**मध्यम (`1–1000 nm`)**' },
        ],
        [
          { en: '**3. Naked-Eye Visibility**', hi: '**3. दृश्यता (नग्न नेत्र)**' },
          { en: 'Cannot be seen', hi: 'दिखाई नहीं देते (पारदर्शी)' },
          { en: 'Clearly **visible**', hi: 'नग्न आँखों से **स्पष्ट दृश्य**' },
          { en: 'Cannot be seen directly', hi: 'नग्न आँखों से अदृश्य' },
        ],
        [
          { en: '**4. Ordinary Filtration**', hi: '**4. निस्यंदन द्वारा पृथक्करण**' },
          { en: '**Cannot** be separated (`passes filter`)', hi: '**नहीं** (फिल्टर पेपर पार)' },
          { en: '**YES**, easily trapped on filter paper', hi: '**हाँ**, आसानी से पृथक हो जाते हैं' },
          { en: '**Cannot** be separated (`needs Centrifuge`)', hi: '**नहीं** (फिल्टर पार; केवल अपकेंद्रण से)' },
        ],
        [
          { en: '**5. Stability / Settling**', hi: '**5. नि:सादन / तली में बैठना**' },
          { en: '**Stable**: Do NOT settle down', hi: '**स्थिर**: नीचे नहीं बैठते' },
          { en: '**Unstable**: Settle down on standing', hi: '**अस्थायी**: शांत रखने पर नीचे बैठ जाते हैं' },
          { en: '**Stable**: Do NOT settle down', hi: '**स्थिर**: शांत रखने पर नीचे नहीं बैठते' },
        ],
        [
          { en: '**6. Tyndall Effect**', hi: '**6. टिंडल प्रभाव (प्रकाश प्रकीर्णन)**' },
          { en: '**NO** (too small to scatter)', hi: '**नहीं दर्शाते**' },
          { en: '**YES while stirred** (`stops after settling`)', hi: '**हिलाने पर हाँ** (बैठने पर समाप्त)' },
          { en: '**YES — Clear bright cone!**', hi: '**हाँ — स्पष्ट चमकदार किरण शंकु!**' },
        ],
        [
          { en: '**7. NCERT Table 5.2 Examples**', hi: '**7. प्रमुख उदाहरण (तालिका 5.2)**' },
          { en: 'Salt water, Sugar water, `CuSO₄`, Vinegar, **Brass**, Air', hi: 'नमक-जल, चीनी-जल, `CuSO₄`, सिरका, **पीतल**, वायु' },
          { en: 'Sand in water, Muddy water, Chalk powder in water', hi: 'जल में रेत, पंकिल जल (कीचड़), चॉक चूर्ण' },
          { en: 'Milk, Blood, Butter, Smoke, Fog, Ice cream, Sauce', hi: 'दूध, रक्त, मक्खन, धुआँ, कोहरा, सॉस' },
        ],
      ],
    },
    {
      id: 'tbl-5-2',
      title: {
        en: 'Concentration Formulas (`% m/m`, `% m/v`, `% v/v`), Emulsions & NCERT Alloys Summary',
        hi: 'सांद्रता सूत्र (`% m/m, % m/v, % v/v`), पायस (`O/W vs W/O`) एवं मिश्रधातु सारणी',
      },
      headers: {
        en: ['Category / Mixture', 'Formula / Composition', 'Exact Value / NCERT Example', 'Railway Exam Hotspot'],
        hi: ['वर्ग / मिश्रण', 'सूत्र / रासायनिक संघटन', 'सटीक मान / उदाहरण', 'रेलवे परीक्षा मुख्य बिंदु'],
      },
      rows: [
        [
          { en: '**Mass % (`% m/m` / `% w/w`)**', hi: '**द्रव्यमान % (`% m/m`, `% w/w`)**' },
          { en: `(Solute Mass / Solution Mass) × 100`, hi: `(विलेय द्रव्यमान / कुल विलयन द्रव्यमान) × 100` },
          { en: `10g salt + 90g water -> 10% m/m; Ex 14(C): 30/(30+80)=27.27%`, hi: `10g नमक+90g जल=10%; Ex 14(ग): 30/110 = 27.27%` },
          { en: 'Total Solution = Solute + Solvent!', hi: 'हर में सदैव कुल विलयन द्रव्यमान रखें!' },
        ],
        [
          { en: '**Mass/Vol % (`% m/v`)**', hi: '**द्रव्यमान-आयतन % (`% m/v`)**' },
          { en: `(Solute Mass g / Solution Vol mL) × 100`, hi: `(विलेय g / विलयन आयतन mL) × 100` },
          { en: `Hospital Saline = 0.9% m/v NaCl; 5% Glucose`, hi: `मेडिकल सेलाइन = 0.9% m/v NaCl (रक्त हेतु सुरक्षित)` },
          { en: 'Measured in 100 mL solution (`medicines`)', hi: 'दवाइयों व प्रयोगशालाओं में उपयोगी' },
        ],
        [
          { en: '**Volume % (`% v/v`)**', hi: '**आयतन-आयतन % (`% v/v`)**' },
          { en: `(Solute Vol mL / Solution Vol mL) × 100`, hi: `(विलेय आयतन mL / कुल विलयन mL) × 100` },
          { en: `White Vinegar = 5% v/v Acetic Acid; Think Q2 = 20% v/v`, hi: `सिरका = 5% v/v ऐसीटिक अम्ल; Think Q2 = 20%` },
          { en: 'Used for 2 miscible liquids (`perfume`)', hi: 'दो मिश्रणीय द्रवों (इत्र, सिरका) हेतु' },
        ],
        [
          { en: '**Brass (`पीतल` Alloy)**', hi: '**पीतल (`Brass`) मिश्रधातु**' },
          { en: `~80% Copper (Cu) + 20% Zinc (Zn)`, hi: `लगभग 80% ताँबा (Cu) + 20% जिंक (Zn)` },
          { en: 'Solid homogeneous mixture; Ex 4(ii): 70% Cu in 120g = 84g Cu, 36g Zn', hi: 'ठोस समांगी विलयन; 120g (70% Cu) में 84g Cu + 36g Zn' },
          { en: 'Retains component properties -> Mixture (`NTPC 2025`)', hi: 'परिवर्ती संघटन + घटक गुण कारण यह मिश्रण है' },
        ],
        [
          { en: '**Bronze (`काँसा` Alloy)**', hi: '**काँसा (`Bronze`) मिश्रधातु**' },
          { en: `~80% Copper (Cu) + 20% Tin (Sn)`, hi: `लगभग 80% ताँबा (Cu) + 20% टिन (Sn)` },
          { en: 'Solid homogeneous alloy (`Statues, Bushings`)', hi: 'प्रतिमाएँ व इंजन बुशिंग निर्माण (`RRB Tech 2024`)' },
          { en: 'Cu + Sn = Bronze (`RRB Tech 2024 PYQ`)', hi: 'ताँबा + टिन = काँसा (`RRB Tech 2024 PYQ`)' },
        ],
        [
          { en: '**Stainless Steel**', hi: '**स्टेनलेस स्टील (जंग-रोधी)**' },
          { en: `Fe + C (0.03–0.8%) + Cr (16–18%) + Ni (10–14%) + Mo (2–3%)`, hi: `Fe + C (0.03–0.8%) + Cr (16–18%) + Ni (10–14%) + Mo (2–3%)` },
          { en: 'Rust-resistant, strong structural steel', hi: 'मजबूत एवं जंग-रोधी इस्पात' },
          { en: 'Cr & Ni prevent rusting in surgical/kitchen steel', hi: 'क्रोमियम व निकेल जंग लगने से बचाते हैं' },
        ],
        [
          { en: '**Emulsions (`O/W vs W/O`)**', hi: '**पायस (`O/W बनाम W/O` कोलॉइड)**' },
          { en: `Liquid-in-Liquid Colloid + Emulsifier (Protein / Soap)`, hi: `द्रव-द्रव कोलॉइड + पायसी कारक (प्रोटीन/साबुन)` },
          { en: `O/W: Milk, Body Lotion, Vanishing Cream | W/O: Butter, Cold Cream`, hi: `O/W: दूध, बॉडी लोशन, वैनिशिंग क्रीम | W/O: मक्खन, कोल्ड क्रीम` },
          { en: 'Face cream = Emulsion (`RRB Tech 2024`)', hi: 'फेस क्रीम एक पायस (`Emulsion`) है!' },
        ],
      ],
    },
    {
      id: 'tbl-5-3',
      title: {
        en: 'NCERT Table 5.3 Official Separation Solutions (Ex Q7 — All 7 Mixtures Solved)',
        hi: 'NCERT तालिका 5.3 संपूर्ण हल (अभ्यास प्रश्न 7 — सभी 7 मिश्रण एवं कारण)',
      },
      headers: {
        en: ['Mixture (NCERT Table 5.3)', 'Best Separation Method', 'Scientific Principle / Reason'],
        hi: ['मिश्रण (तालिका 5.3)', 'पृथक्करण की उपयुक्त विधि', 'चयन का वैज्ञानिक कारण'],
      },
      rows: [
        [
          { en: '1. Mud from muddy water', hi: '1. पंकिल जल से पंक (कीचड़)' },
          { en: '**Coagulation (Alum) + Sedimentation + Decantation / Filtration**', hi: '**फिटकरी द्वारा स्कंदन + अवसादन + निस्तारण/निस्यंदन**' },
          { en: 'Coarse mud settles on standing; alum clumps ultra-fine clay flocs so they settle and filter cleanly.', hi: 'भारी कण बैठ जाते हैं तथा फिटकरी सूक्ष्म कीचड़ कणों को भारी गुच्छों में जमाकर नीचे बैठा देती है।' },
        ],
        [
          { en: '2. Plasma from blood sample', hi: '2. रक्त प्रतिदर्श में अन्य घटकों से प्लाज्मा' },
          { en: '**Centrifugation** (`or Paperfuge`)', hi: '**अपकेंद्रण** (`अथवा पेपरफ्यूज`)' },
          { en: 'Rapid spinning pushes denser RBCs/WBCs to bottom while lighter liquid plasma stays on top (cannot use filter paper!).', hi: 'तीव्र घूर्णन से भारी RBC तली में चले जाते हैं व हल्का प्लाज्मा ऊपर अलग हो जाता है (साधारण फिल्टर विफल रहता है)।' },
        ],
        [
          { en: '3. Naphthalene and sand', hi: '3. नैफ्थलीन और रेत' },
          { en: '**Sublimation**', hi: '**ऊर्ध्वपातन** (`Sublimation`)' },
          { en: 'Naphthalene sublimes directly from solid -> vapor (`and deposits on cool funnel`), while non-volatile sand remains in dish.', hi: 'नैफ्थलीन सीधे ठोस से वाष्प बनकर कीप पर निक्षेपित हो जाता है जबकि रेत नीचे शेष रहती है।' },
        ],
        [
          { en: '4. Chalk powder and common salt', hi: '4. चॉक चूर्ण और साधारण नमक' },
          { en: '**Dissolve in water -> Filtration -> Evaporation / Crystallization**', hi: '**जल में घोलकर निस्यंदन → वाष्पन/क्रिस्टलीकरण**' },
          { en: 'Salt dissolves in water; insoluble chalk stays on filter paper (`residue`). Evaporate/crystallize filtrate to recover salt.', hi: 'नमक घुल जाता है जबकि अघुलनशील चॉक फिल्टर पत्र पर रुक जाती है; निस्यंद को सुखाकर शुद्ध नमक पा लें।' },
        ],
        [
          { en: '5. Common salt and water', hi: '5. साधारण नमक और जल' },
          { en: '**Simple Distillation** (`if want both water + salt`) or **Evaporation** (`salt only`)', hi: '**सरल आसवन** (`दोनों पाने हेतु`) अथवा **वाष्पीकरण** (`केवल नमक हेतु`)' },
          { en: 'Water boils off at 100 °C and condenses back pure in receiver flask, leaving solid salt (`high M.P.`) in boiling flask.', hi: 'जल 100 °C पर वाष्पित व संघनित होकर शुद्ध आसुत देता है, जबकि नमक फ्लास्क में बच जाता है।' },
        ],
        [
          { en: '6. Water and oil', hi: '6. जल और तेल' },
          { en: '**Separating Funnel**', hi: '**पृथक्कारी कीप** (`Separating Funnel`)' },
          { en: 'Oil and water are **immiscible** and have different densities (`lighter oil floats upper, water settles below`).', hi: 'तेल व जल अमिश्रणीय हैं तथा घनत्व भिन्न होने से हल्का तेल ऊपर व भारी जल नीचे अलग परत बनाते हैं।' },
        ],
        [
          { en: '7. Flower pigments', hi: '7. पुष्प के वर्णक' },
          { en: '**Paper Chromatography**', hi: '**कागज वर्णलेखिकी** (`Paper Chromatography`)' },
          { en: 'Different colored pigments travel at different speeds up the paper depending on solubility in alcohol/water & paper attraction.', hi: 'विभिन्न रंगीन वर्णक विलायक (जल/ऐल्कोहॉल) में अपनी भिन्न विलेयता के कारण कागज पर अलग-अलग ऊँचाई तक जाकर पृथक होते हैं।' },
        ],
      ],
    },
    {
      id: 'tbl-5-4',
      title: {
        en: 'NCERT Table 5.4: Solubility of 4 Salts in Water (`grams dissolved per 100 g water` vs Temp °C)',
        hi: 'NCERT तालिका 5.4: विभिन्न तापमानों पर 4 लवणों की विलेयता (प्रति `100 g` जल में ग्राम)',
      },
      headers: {
        en: ['Salt (`in 100 g H₂O`)', '10 °C', '20 °C', '30 °C', '40 °C', '60 °C', '80 °C'],
        hi: ['लवण (`प्रति 100 g जल`)', '10 °C', '20 °C', '30 °C', '40 °C', '60 °C', '80 °C'],
      },
      rows: [
        [
          { en: '**Potassium Nitrate (`KNO₃`)**', hi: '**पोटैशियम नाइट्रेट (`KNO₃`)**' },
          { en: '21 g', hi: '21' },
          { en: '32 g', hi: '32' },
          { en: '45 g', hi: '45' },
          { en: '**62 g** (`Ex 13-i: 50g = 31g`)', hi: '**62** (`50g में 31g`)' },
          { en: '106 g', hi: '106' },
          { en: '**167 g** (`8× jump!`)', hi: '**167** (`सर्वाधिक वृद्धि!`)' },
        ],
        [
          { en: '**Sodium Chloride (`NaCl`)**', hi: '**सोडियम क्लोराइड (`NaCl`)**' },
          { en: '36 g', hi: '36' },
          { en: '36 g', hi: '36' },
          { en: '36.3 g', hi: '36.3' },
          { en: '36.5 g', hi: '36.5' },
          { en: '37 g', hi: '37' },
          { en: '**37 g** (`Nearly flat`)', hi: '**37** (`लगभग अपरिवर्तित`)' },
        ],
        [
          { en: '**Potassium Chloride (`KCl`)**', hi: '**पोटैशियम क्लोराइड (`KCl`)**' },
          { en: '35 g', hi: '35' },
          { en: '35 g', hi: '35' },
          { en: '37.4 g', hi: '37.4' },
          { en: '40 g', hi: '40' },
          { en: '46 g', hi: '46' },
          { en: '**54 g** (`Cools->Crystals!`)', hi: '**54** (`ठंडा होने पर क्रिस्टल`)' },
        ],
        [
          { en: '**Ammonium Chloride (`NH₄Cl`)**', hi: '**अमोनियम क्लोराइड (`NH₄Cl`)**' },
          { en: '24 g', hi: '24' },
          { en: '37 g', hi: '37' },
          { en: '41 g', hi: '41' },
          { en: '41 g', hi: '41' },
          { en: '55 g', hi: '55' },
          { en: '**66 g**', hi: '**66**' },
        ],
      ],
    },
    {
      id: 'tbl-5-5',
      title: {
        en: 'NCERT Table 5.5: Boiling Points of Pure Liquids & Method Decision (`Ex Q15` Reference)',
        hi: 'NCERT तालिका 5.5: कुछ यौगिकों के क्वथनांक व पृथक्करण विधि चयन (अभ्यास प्रश्न 15)',
      },
      headers: {
        en: ['Compound / Mixture Pair', 'Boiling Point / ΔT', 'Selected Separation Method', 'NCERT Ex Q15 / Exam Explanation'],
        hi: ['द्रव / मिश्रण युग्म', 'क्वथनांक / अंतर (ΔT)', 'उपयुक्त पृथक्करण विधि', 'NCERT प्रश्न 15 व परीक्षा व्याख्या'],
      },
      rows: [
        [
          { en: 'Acetone + Water', hi: 'ऐसीटोन + जल' },
          { en: `56 °C vs 100 °C (ΔT = 44 °C ≥ 25 °C)`, hi: `56 °C व 100 °C (ΔT = 44 °C ≥ 25 °C)` },
          { en: '**Simple Distillation (`Apparatus स`)**', hi: '**सरल आसवन (`उपकरण स`)**' },
          { en: 'Large gap (`44 °C`); acetone vaporizes clean first.', hi: 'बड़ा क्वथनांक अंतर; ऐसीटोन पहले वाष्पित होता है।' },
        ],
        [
          { en: 'Water + Common Salt', hi: 'जल + साधारण नमक' },
          { en: `Water 100 °C vs Salt >1400 °C`, hi: `जल 100 °C व नमक (अवाष्पशील ठोस)` },
          { en: '**Simple Distillation (`or Evap`)**', hi: '**सरल आसवन (`अथवा वाष्पन`)**' },
          { en: 'Volatile water distills over, salt stays behind (`Ex Q15 kh`).', hi: 'जल शुद्ध आसुत बनकर अलग व नमक फ्लास्क में शेष।' },
        ],
        [
          { en: 'Alcohol (Ethanol) + Acetone', hi: 'ऐल्कोहॉल + ऐसीटोन' },
          { en: `78 °C vs 56 °C (ΔT = 22 °C < 25 °C)`, hi: `78 °C व 56 °C (ΔT = 22 °C < 25 °C)` },
          { en: '**Fractional Distillation**', hi: '**प्रभाजी आसवन**' },
          { en: 'Gap < `25 °C` cutoff -> simple distillation mixes vapors.', hi: '`25 °C` से कम अंतर होने पर प्रभाजी स्तंभ आवश्यक।' },
        ],
        [
          { en: 'Alcohol + Chloroform', hi: 'ऐल्कोहॉल + क्लोरोफॉर्म' },
          { en: `78 °C vs 61 °C (ΔT = 17 °C < 25 °C)`, hi: `78 °C व 61 °C (ΔT = 17 °C < 25 °C)` },
          { en: '**Fractional Distillation**', hi: '**प्रभाजी आसवन**' },
          { en: 'Close boiling points require multi-stage condensation.', hi: 'निकट क्वथनांक हेतु सरल आसवन अनुपयुक्त।' },
        ],
        [
          { en: 'Alcohol + Benzene', hi: 'ऐल्कोहॉल + बेंजीन' },
          { en: `78 °C vs 80 °C (ΔT = 2 °C < 25 °C)`, hi: `78 °C व 80 °C (ΔT = 2 °C < 25 °C)` },
          { en: '**Fractional Distillation** (`or Azeotrope`)', hi: '**प्रभाजी आसवन**' },
          { en: 'Only `2 °C` difference (`Ex Q15 ch` impossible by simple still).', hi: 'केवल `2 °C` अंतर; सरल आसवन से पृथक नहीं होगा।' },
        ],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'Think & Tell 1 (p.76)',
      q: {
        en: 'A common talcum powder contains `4% m/m` zinc oxide (antiseptic). How much zinc oxide is present in `300 g` of talcum powder?',
        hi: 'किसी साधारण टैल्कम पाउडर में `4% m/m` जिंक ऑक्साइड (पूतिरोधी) है। `300 g` टैल्कम पाउडर में जिंक ऑक्साइड की कितनी मात्रा उपस्थित है?',
      },
      a: {
        en: '**`12 g`** (`NCERT Key verified`). Calculation: `Mass of ZnO = (4 / 100) × 300 g = 12 g`.',
        hi: '**`12 g`** (`NCERT उत्तरकुंजी से सत्यापित`)। गणना: `जिंक ऑक्साइड का द्रव्यमान = (4 / 100) × 300 g = 12 g`।',
      },
    },
    {
      num: 'Think & Tell 2 (p.76)',
      q: {
        en: 'To prepare a `150 mL` glass of orange drink, you add 2 tablespoons (`15 mL` each) of concentrated juice to water. What is the `% v/v` concentration?',
        hi: 'एक गिलास `150 mL` संतरे का रस तैयार करने के लिए यदि प्रत्येक `15 mL` माप के 2 बड़े चम्मच सांद्र रस को जल में मिलाया जाए, तो विलयन की `% v/v` सांद्रता क्या होगी?',
      },
      a: {
        en: '**`20% v/v`** (`NCERT Key verified`). Solute juice = `2 × 15 = 30 mL`; Total solution = `150 mL` -> **`(30 / 150) × 100 = 20% v/v`**.',
        hi: '**`20% v/v`** (`NCERT उत्तरकुंजी से सत्यापित`)। सांद्र रस (विलेय) = `2 × 15 = 30 mL`; कुल विलयन = `150 mL` -> **`(30 / 150) × 100 = 20% v/v`**।',
      },
    },
    {
      num: 'Think & Tell 3 (p.76)',
      q: {
        en: 'Vinegar contains `5% v/v` acetic acid. Glacial acetic acid is liquid `100%` acetic acid. How would you prepare `100 mL` (or `1 L`) of vinegar from glacial acetic acid?',
        hi: 'सिरका में `5% v/v` ऐसीटिक अम्ल होता है व ग्लैशल ऐसीटिक अम्ल `100%` शुद्ध ऐसीटिक अम्ल द्रव है। आप ग्लैशल ऐसीटिक अम्ल से सिरका कैसे बनाएँगे?',
      },
      a: {
        en: 'Measure **`5 mL` of glacial (`100%`) acetic acid** and carefully add water until the total volume reaches **`100 mL`** (`or 50 mL acid made up to 1000 mL`), then stir uniformly (`Safety: add acid slowly to water!`).',
        hi: '`5 mL` ग्लैशल ऐसीटिक अम्ल को जल में मिलाकर कुल आयतन `100 mL` कर लें (या `1 लीटर` सिरका हेतु `50 mL` अम्ल को `950 mL` जल में मिलाकर भली-भाँति हिलाएँ)।',
      },
    },
    {
      num: 'Think & Tell 4 (p.79)',
      q: {
        en: 'Referring to solubility curves in Fig 5.6, if equal masses of hot saturated solutions of Compound `A (क)` and `B (ख)` cool from `80 °C -> 60 °C`, which deposits more solid?',
        hi: 'चित्र 5.6 के आधार पर यदि यौगिक ‘क’ और ‘ख’ के गर्म संतृप्त विलयनों के समान द्रव्यमान को `80 °C` से `60 °C` तक ठंडा किया जाए, तो किस विलयन से अधिक ठोस निक्षेपित होगा?',
      },
      a: {
        en: '**Compound `B (ख)`** precipitates far more crystals because its solubility curve is much steeper with temperature — dropping sharply between `80 °C` and `60 °C`, whereas `Compound A (क)` changes gradually.',
        hi: '**यौगिक ‘ख’ (`B`)** के विलयन से कहीं अधिक ठोस निक्षेपित होगा, क्योंकि `80°C` से `60°C` के बीच ‘ख’ का विलेयता वक्र अत्यंत तीव्रता से नीचे गिरता है जबकि ‘क’ में अंतर बहुत कम रहता है।',
      },
    },
    {
      num: 'Think & Tell 5 (p.79)',
      q: {
        en: 'Does increasing or decreasing the rate of evaporation change the size of common salt crystals? Explain.',
        hi: 'वाष्पीकरण की दर बढ़ाने अथवा घटाने पर साधारण नमक के क्रिस्टलों के आकार में क्या कोई परिवर्तन होगा? व्याख्या कीजिए।',
      },
      a: {
        en: '**Yes!** **Slow evaporation (`decreasing rate`)** lets Na+ and Cl⁻ ions align orderly -> forming **large, well-defined crystals**. **Fast evaporation (`heating hard`)** forces rapid precipitation -> creating **tiny, powdery/irregular crystals**.',
        hi: '**हाँ!** वाष्पीकरण की दर **धीमी** रखने पर कणों को व्यवस्थित जुड़ने का समय मिलता है जिससे **बड़े व स्पष्ट क्रिस्टल** बनते हैं; **तेज उबालने/वाष्पीकरण** पर अत्यंत **छोटे व अनियमित दाने** बनते हैं।',
      },
    },
    {
      num: 'Think & Tell 6 (p.82)',
      q: {
        en: 'True or False (correct the false ones): `(i)` Salt from salt solution separates by evaporation/distillation; `(ii)` Distillation works for two liquids with equal B.P.; `(iii)` Chromatography water starts above ink dot; `(iv)` Evaporation and crystallization are identical.',
        hi: 'सत्य/असत्य बताकर गलत कथन सुधारें: `(i)` नमक-जल से वाष्पीकरण या आसवन से नमक अलग हो सकता है; `(ii)` समान क्वथनांक वाले द्रव भी आसवन से पृथक होते हैं; `(iii)` क्रोमैटोग्राफी में जल स्तर बिंदु से ऊपर हो; `(iv)` वाष्पीकरण व क्रिस्टलीकरण समान हैं।',
      },
      a: {
        en: '**(i) TRUE**. **(ii) FALSE** — simple distillation requires **at least `25 °C` difference** in boiling points. **(iii) FALSE** — initial solvent level **MUST stay BELOW the ink spot**. **(iv) FALSE** — evaporation removes all water leaving impurities/risking charring, while crystallization grows pure solid from cooling saturated solution.',
        hi: '**(i) सत्य**। **(ii) असत्य** — आसवन हेतु क्वथनांकों में कम से कम `25 °C` अंतर चाहिए। **(iii) असत्य** — प्रारंभिक विलायक स्तर स्याही बिंदु से **नीचे** होना चाहिए। **(iv) असत्य** — वाष्पीकरण में अशुद्धियाँ शेष रह जाती हैं जबकि क्रिस्टलीकरण से शुद्ध ठोस क्रिस्टल बनते हैं।',
      },
    },
    {
      num: 'Think & Tell 7 (p.84)',
      q: {
        en: 'Why do immiscible liquids form two separate layers inside a separating funnel?',
        hi: 'अमिश्रणीय द्रव पृथक्कारी कीप में दो पृथक परतें क्यों बनाते हैं?',
      },
      a: {
        en: 'They are **mutually insoluble (`do not mix at molecular level`)** and have **different densities**: gravity pulls the **denser liquid down** as the bottom layer while pushing the **less dense liquid up** as the top layer.',
        hi: 'परस्पर अविलेय होने व **घनत्व में अंतर** के कारण अधिक घनत्व वाला भारी द्रव नीचे बैठ जाता है तथा कम घनत्व वाला हल्का द्रव ऊपर अलग परत बना लेता है।',
      },
    },
    {
      num: 'Think & Tell 8 (p.84)',
      q: {
        en: 'Is sublimation different from evaporation? Justify your answer.',
        hi: 'क्या ऊर्ध्वपातन, वाष्पीकरण से भिन्न है? पुष्टि कीजिए।',
      },
      a: {
        en: '**Yes!** **Evaporation** converts a **LIQUID -> vapor** slowly from its surface below boiling point (`e.g. drying wet clothes`). **Sublimation** converts a **SOLID directly -> vapor** below melting point without any intermediate liquid state (`e.g. camphor, naphthalene, dry ice`).',
        hi: '**हाँ!** **वाष्पीकरण** में **द्रव से वाष्प** बनती है (कथनांक से कम पर), जबकि **ऊर्ध्वपातन** में **ठोस बिना द्रव अवस्था में आए सीधे वाष्प** में बदलता है (जैसे कपूर व शुष्क बर्फ)।',
      },
    },
    {
      num: 'Think & Tell 9 (p.88)',
      q: {
        en: 'Clouds consist of tiny water droplets or ice crystals floating in air. Based on solutions, suspensions, and colloids, classify clouds and justify why.',
        hi: 'बादलों का निर्माण वायु में सूक्ष्म जल-बूँदों या हिमक्रिप्टलों से होता है। बादल किस प्रकार के मिश्रण हैं और क्यों?',
      },
      a: {
        en: 'Clouds are **Aerosol Colloids (`heterogeneous mixture`)**: tiny liquid water/ice particles (`1–1000 nm`) remain dispersed in gaseous air **without settling quickly** and **scatter sunlight (`Tyndall effect`)**.',
        hi: 'बादल एक **कोलॉइड (ऐरोसॉल — विषमांगी मिश्रण)** हैं क्योंकि इनमें अतिसूक्ष्म जल-बूँदें (`1–1000 nm`) वायु में बिखरी रहती हैं, आसानी से नीचे नहीं बैठतीं व प्रकाश का प्रकीर्णन करती हैं।',
      },
    },
    {
      num: 'Think & Tell 10 (p.88)',
      q: {
        en: 'Why do cities whose air has high smoke and dust frequently appear hazy?',
        hi: 'जिन नगरों की वायु में अधिक धुआँ और धूल होते हैं, वे प्रायः धुँधले क्यों दिखाई देते हैं?',
      },
      a: {
        en: 'Smoke and fine dust suspended in air form a **heterogeneous colloid/aerosol** that **scatters incoming sunlight in all directions (`Tyndall Effect`)**, blurring distant objects and making city air look hazy.',
        hi: 'वायु में निलंबित धुएँ व धूल के सूक्ष्म कण सूर्य के प्रकाश को चारों ओर प्रकीर्णित (**टिंडल प्रभाव**) कर देते हैं, जिससे दृश्यता कम हो जाती है और नगर धुँधला दिखता है।',
      },
    },
  ],
  exercises: [
    {
      num: 'Ex Q1',
      q: {
        en: 'Which mixture set correctly classifies homogeneous & heterogeneous mixtures? `(i)` Air-Homo, Milk-Hetero, Sugar sol-Homo, Smoke-Homo `(ii)` Brass-Hetero, Fog-Hetero, Vinegar-Hetero, Muddy water-Homo `(iii)` CuSO₄ sol-Homo, Salt sol-Homo, Milk-Homo, Bronze-Homo `(iv)` Muddy water-Hetero, Milk-Hetero, Blood-Hetero, Brass-Homo.',
        hi: 'सही समांगी व विषमांगी वर्गीकरण चुनें: `(i)` वायु-समांगी, दूध-विषमांगी, चीनी विलयन-समांगी, धुआँ-समांगी `(ii)` पीतल-विषमांगी... `(iii)` दूध-समांगी... `(iv)` पंकिल जल-विषमांगी, दुग्ध-विषमांगी, रक्त-विषमांगी, पीतल-समांगी।',
      },
      a: {
        en: '**Correct Option: `(iv)`** (`NCERT Key verified`). Muddy water (suspension), Milk (colloid), and Blood (colloid) are all **heterogeneous**; **Brass (`Cu+Zn` alloy)** is a solid **homogeneous** mixture!',
        hi: '**सही उत्तर: `(iv)`** (`NCERT उत्तरकुंजी से सत्यापित`)। पंकिल जल, दूध व रक्त तीनों **विषमांगी** हैं, जबकि **पीतल मिश्रधातु एक समांगी मिश्रण** है!',
      },
    },
    {
      num: 'Ex Q2',
      q: {
        en: 'Which mixtures show Tyndall effect: `(a)` Air + dust, `(b)` `CuSO₄` + water, `(c)` Starch + water, `(d)` Acetone + water? Options: `(i) a & b` `(ii) b & d` `(iii) a & c` `(iv) c & d`.',
        hi: 'टिंडल प्रभाव कौन दर्शाते हैं: `(क)` वायु+धूल, `(ख)` कॉपर सल्फेट+जल, `(ग)` स्टार्च+जल, `(घ)` ऐसीटोन+जल? विकल्प: `(i)` क व ख `(ii)` ख व घ `(iii)` क व ग `(iv)` ग व घ।',
      },
      a: {
        en: '**Correct Option: `(iii)` (`a and c`)** (`NCERT Key verified`). Air+dust (aerosol) and **Starch+water** (colloid) scatter light; `CuSO₄` and `Acetone+water` are clear true solutions (no Tyndall).',
        hi: '**सही उत्तर: `(iii)` (क और ग)** (`NCERT उत्तरकुंजी से सत्यापित`)। धूल-वायु व **स्टार्च-जल** कोलॉइड हैं अतः टिंडल प्रभाव दर्शाते हैं; `CuSO₄` व ऐसीटोन-जल वास्तविक विलयन हैं।',
      },
    },
    {
      num: 'Ex Q3',
      q: {
        en: 'Classify the given phrases (`NCERT Table 5.2`): `< 1 nm`, `1–1000 nm`, `> 1000 nm`, `settle down`, `don’t settle`, `scatter light`, `transparent`, `filterable`, `salt solution`, `milk`, `sand in water`, `smoke`, `butter`, `brass` into Solution, Suspension & Colloid.',
        hi: 'बॉक्स के वाक्यांशों से तालिका 5.2 (विलयन, निलंबन व कोलॉइड) को पूर्ण कीजिए (`कण आकार, निस्यंदन, टिंडल प्रभाव व उदाहरण`)।',
      },
      a: {
        en: '**Solution**: `< 1 nm`, transparent, uniform, don’t settle, not filterable -> *Salt solution, Brass*. **Suspension**: `> 1000 nm`, heterogeneous, settles down, filterable -> *Sand in water, Mud*. **Colloid**: `1–1000 nm`, heterogeneous, don’t settle, not filterable, scatters light -> *Milk, Smoke, Butter*. (`Complete breakdown in Table 5.1 above!`)',
        hi: '**विलयन**: `<1 nm`, पारदर्शी, कण समान वितरित, नहीं बैठते, नमक विलयन व पीतल। **निलंबन**: `>1000 nm`, विषमांगी, नीचे बैठते, निस्यंदन से पृथक, जल में रेत व कीचड़। **कोलॉइड**: `1–1000 nm`, विषमांगी, नहीं बैठते, प्रकाश प्रकीर्णन, दूध, धुआँ व मक्खन।',
      },
    },
    {
      num: 'Ex Q4',
      q: {
        en: '`(i)` Cake recipe mixes `420 g` flour + `75 g` sugar + `5 g` baking soda (`NaHCO₃`). Find concentration of each component. `(ii)` Brass has `70%` Cu by mass. Calculate mass of Copper & Zinc in `120 g` brass.',
        hi: '`(i)` केक मिश्रण में `420 g` मैदा, `75 g` चीनी व `5 g` सोडियम हाइड्रोजनकार्बोनेट है — प्रत्येक की सांद्रता ज्ञात करें। `(ii)` `70%` ताँबा वाले `120 g` पीतल में कॉपर व जिंक का द्रव्यमान निकालें।',
      },
      a: {
        en: '**`(i)` Total mass = `420 + 75 + 5 = 500 g` -> `% m/m`: Flour = `(420/500)×100 = 84%`; Sugar = `(75/500)×100 = 15%`; Baking Soda = `(5/500)×100 = 1%`**. **`(ii)` Copper = `(70/100)×120 = 84 g`; Zinc = `120 - 84 = 36 g`** (`NCERT Key verified!`).',
        hi: '**`(i)` कुल = `500 g` -> `% m/m`: मैदा = `84%`, चीनी = `15%`, सोडियम हाइड्रोजनकार्बोनेट = `1%`**। **`(ii)` कॉपर = `70% × 120 = 84 g`, जिंक = `120 - 84 = 36 g`** (`NCERT उत्तरकुंजी से सत्यापित!`)।',
      },
    },
    {
      num: 'Ex Q5',
      q: {
        en: 'An edible oil pack says `1 L (910 g)`. Mixed with water (`1000 g/L`), will it form a layer? Which stays on top? How will you separate them?',
        hi: 'खाद्य तेल पर `1 L (910 g)` लिखा है। जल में मिलाने पर क्या परत बनेगी? कौन ऊपर रहेगा और किस उपकरण से पृथक करेंगे?',
      },
      a: {
        en: '**Yes, two separate layers form** (`immiscible`). **Oil (`density 0.91 g/mL`) floats ON TOP** because it is lighter than water (`1.0 g/mL`). Separate using a **Separating Funnel (`diagram Fig 5.16`)**: open stopcock to drain lower water layer first, leaving oil above.',
        hi: '**हाँ, दो पृथक परतें बनेंगी** (अमिश्रणीय)। **तेल (`घनत्व 0.91 g/mL`) ऊपर रहेगा** क्योंकि यह जल (`1.0 g/mL`) से हल्का है। इन्हें **पृथक्कारी कीप (`चित्र 5.16`)** द्वारा स्टॉपकॉक से निचला जल निकालकर अलग करेंगे।',
      },
    },
    {
      num: 'Ex Q6',
      q: {
        en: 'Assertion (A): Solutions do NOT show Tyndall effect. Reason (R): Size of particles in a solution is greater than `100 nm`, so they cannot scatter light.',
        hi: 'अभिकथन (A): विलयन टिंडल प्रभाव नहीं दर्शाते हैं। कारण (R): विलयन के कणों का आकार `100 nm` से बड़ा होता है, अतः वे प्रकाश प्रकीर्णन नहीं करते।',
      },
      a: {
        en: '**Correct Option: `(iii)` — Assertion (A) is TRUE, but Reason (R) is FALSE** (`NCERT Key verified`). Particle size in true solution is **less than `1 nm` (`< 1 nm`, NOT > 100 nm!)**, which is too tiny to scatter light.',
        hi: '**सही उत्तर: `(iii)` — अभिकथन सत्य है परंतु कारण असत्य है** (`NCERT उत्तरकुंजी से सत्यापित`)। वास्तविक विलयन के कण `100 nm` से बड़े नहीं, बल्कि **`1 nm` से भी छोटे (`< 1 nm`)** होते हैं!',
      },
    },
    {
      num: 'Ex Q7',
      q: {
        en: 'Suggest separation method & reason for all 7 mixtures in **NCERT Table 5.3** (`muddy water`, `plasma from blood`, `naphthalene+sand`, `chalk+salt`, `salt+water`, `water+oil`, `flower pigments`).',
        hi: '**तालिका 5.3** में दिए गए सभी 7 मिश्रणों की उपयुक्त पृथक्करण विधि व चयन का कारण स्पष्ट कीजिए।',
      },
      a: {
        en: 'Muddy water -> **Coagulation (Alum) + Filtration/Decantation**; Blood plasma -> **Centrifugation**; Naphthalene+sand -> **Sublimation**; Chalk+salt -> **Dissolve+Filter+Evaporate**; Salt+water -> **Distillation/Evap**; Water+oil -> **Separating Funnel**; Flower pigments -> **Paper Chromatography**. (`Full Table 5.3 matrix above!`)',
        hi: 'पंकिल जल → **स्कंदन (फिटकरी)+निस्यंदन**; प्लाज्मा → **अपकेंद्रण**; नैफ्थलीन+रेत → **ऊर्ध्वपातन**; चॉक+नमक → **जल में घोल+छानन+वाष्पन**; नमक+जल → **आसवन**; जल+तेल → **पृथक्कारी कीप**; पुष्प वर्णक → **कागज वर्णलेखिकी**।',
      },
    },
    {
      num: 'Ex Q8',
      q: {
        en: 'A mixture contains two miscible liquids `A (60 °C)` and `B (90 °C)`. Suggest the separation method & diagram.',
        hi: 'मिश्रण में दो मिश्रणीय द्रव `क (60 °C)` व `ख (90 °C)` हैं। पृथक्करण विधि व चित्र सुझाइए।',
      },
      a: {
        en: '**Simple Distillation (`Apparatus Fig 5.12`)**. Because the two liquids are miscible and their boiling-point difference is `90 - 60 = 30 °C` (`≥ 25 °C`), liquid **`A (60 °C)`** boils, passes through the water condenser, and collects as pure distillate first.',
        hi: '**सरल आसवन (`चित्र 5.12`)**। चूँकि दोनों मिश्रणीय द्रवों के क्वथनांक में अंतर `90 - 60 = 30 °C` (`≥ 25 °C`) है, अतः `60°C` वाला द्रव ‘क’ पहले वाष्पित व संघनित होकर शुद्ध एकत्र होगा।',
      },
    },
    {
      num: 'Ex Q9',
      q: {
        en: 'Compare **Evaporation, Crystallization, and Distillation**. When do you prefer each method?',
        hi: '**वाष्पीकरण, क्रिस्टलीकरण एवं आसवन** की तुलना कीजिए। किस स्थिति में किसे प्राथमिकता देंगे?',
      },
      a: {
        en: '**Evaporation**: fast drying to get cheap solid (`salt pans`), loses solvent & traps soluble impurities. **Crystallization**: slow cooling for **ultra-pure heat-sensitive solids** (`sugar, CuSO₄`) — removes dissolved impurities. **Distillation**: recovers **BOTH pure liquid solvent AND solute** (`or separates miscible liquids with ΔT ≥ 25 °C`).',
        hi: '**वाष्पीकरण**: सस्ता ठोस (`नमक`) पाने हेतु जब विलायक बचाना न हो; अशुद्धियाँ संग रहती हैं। **क्रिस्टलीकरण**: शुद्ध ठोस (`CuSO₄`, चीनी) पाने हेतु — अशुद्धियाँ छन जाती हैं व झुलसन नहीं होती। **आसवन**: जब **शुद्ध द्रव विलायक भी वापस पाना हो** या `≥25°C` अंतर वाले 2 द्रव पृथक करने हों।',
      },
    },
    {
      num: 'Ex Q10',
      q: {
        en: 'Blood is a colloid. `(i)` What happens if blood behaved like a true suspension in the body? `(ii)` Identify dispersed phase & dispersion medium in blood.',
        hi: 'रक्त कोलॉइडी मिश्रण है। `(i)` यदि रक्त शरीर में शुद्ध निलंबन की भाँति व्यवहार करे तो क्या होगा? `(ii)` रक्त में परिक्षिप्त प्रावस्था व परिक्षेपण माध्यम बताइए।',
      },
      a: {
        en: '**`(i)` Blood cells would settle under gravity, clumping and blocking blood vessels/capillaries**, cutting off oxygen & nutrient transport (fatal!). **`(ii)` Dispersed phase = RBCs, WBCs, Platelets (`plus suspended proteins`); Dispersion medium = liquid Blood Plasma**. ',
        hi: '**`(i)` यदि रक्त निलंबन होता तो कणिकाएँ तली में बैठकर रक्त वाहिनियों (केशिकाओं) को अवरुद्ध कर देतीं**, जिससे `O₂` व पोषक परिवहन रुककर मृत्यु हो जाती! **`(ii)` परिक्षिप्त प्रावस्था = RBC, WBC, प्लेटलेट्स; परिक्षेपण माध्यम = तरल प्लाज्मा**।',
      },
    },
    {
      num: 'Ex Q11',
      q: {
        en: 'From Fig 5.25 (`Pic 1: inverted funnel over heated dish; Pic 2: open heated dish; Pic 3: funnel filtration`), give the **exact sequence** to separate **Sand + Common Salt + Naphthalene**.',
        hi: 'चित्र 5.25 (ख) (`1 = उल्टी कीप से तापन, 2 = खुली प्याली में वाष्पन, 3 = फिल्टर कीप छानन`) के आधार पर **रेत + नमक + नैफ्थलीन** अलग करने का सही क्रम लिखिए।',
      },
      a: {
        en: '**Exact Sequence (`Fig 5.25 verified`):** **Step 1 -> Pic `1` (`Sublimation`)**: gently heat mixture to sublime & collect pure Naphthalene inside inverted funnel. **Step 2 -> Dissolve sand+salt in water, then Pic `3` (`Filtration`)**: Sand stays on filter paper (`residue`), aqueous Salt passes cleanly (`filtrate`). **Step 3 -> Pic `2` (`Evaporation`)**: evaporate water from filtrate to recover dry Common Salt!',
        hi: '**सही क्रम (`चित्र 5.25 से सत्यापित`):** **चरण 1 (चित्र `1` — ऊर्ध्वपातन)** से नैफ्थलीन अलग करें → शेष रेत+नमक को जल में घोलकर **चरण 2 (चित्र `3` — निस्यंदन)** से रेत छान लें → अंत में **चरण 3 (चित्र `2` — वाष्पन)** द्वारा नमक जल सुखाकर शुद्ध नमक प्राप्त करें!',
      },
    },
    {
      num: 'Ex Q12',
      q: {
        en: 'Why is distillation an effective method for separating a mixture of water and acetone?',
        hi: 'जल और ऐसीटोन के मिश्रण को पृथक करने के लिए आसवन एक प्रभावी विधि क्यों है?',
      },
      a: {
        en: 'Acetone (`56 °C`) and water (`100 °C`) are miscible liquids with a **wide boiling-point difference of `44 °C` (`≥ 25 °C` NCERT requirement)**. Heating to `~56 °C` vaporizes acetone completely before significant water boils, allowing clean condensation of pure acetone.',
        hi: 'ऐसीटोन (`56 °C`) व जल (`100 °C`) मिश्रणीय हैं पर उनके क्वथनांकों में **`44 °C` (`≥ 25 °C`) का पर्याप्त अंतर** है — इसलिए ऐसीटोन पहले वाष्पित व संघनित होकर शुद्ध अलग हो जाता है।',
      },
    },
    {
      num: 'Ex Q13',
      q: {
        en: 'Using Table 5.4 (`p.92`): `(i)` Mass of `KNO₃` needed for saturated solution in `50 g` water at `40 °C`; `(ii)` Student cools `80 °C` saturated `KCl` to `25 °C` — what does he observe? `(iii)` Compare solubility change (`10–80 °C`) across all 4 salts.',
        hi: 'तालिका 5.4 से: `(i)` `40°C` पर `50 g` जल में संतृप्त `KNO₃` हेतु द्रव्यमान? `(ii)` `80°C` संतृप्त `KCl` को `25°C` पर ठंडा करने पर क्या दिखेगा? `(iii)` चारों लवणों की `10–80°C` विलेयता परिवर्तन की तुलना करें।',
      },
      a: {
        en: '**`(i)` At `40 °C`, `KNO₃` = `62 g` per `100 g` water -> for `50 g` water = **`31 g`**. **`(ii)`** Solubility of `KCl` drops from **`54 g` (`80 °C`) to ~`36 g` (`25 °C`)** -> **`~18 g` pure white `KCl` crystals precipitate out**. **`(iii)`** Solid salt solubility generally rises with heat: **`KNO₃` increases sharply (`21->167 g`)**, `NH₄Cl` rises steeply (`24->66 g`), `KCl` rises moderately (`35->54 g`), while **`NaCl` stays nearly constant (`36->37 g`)**.',
        hi: '**`(i)` `40°C` पर `100 g` में `62 g`, अतः `50 g` में **`31 g`** `KNO₃` चाहिए। **`(ii)`** `KCl` विलेयता `80°C (54g)` से `25°C (~36g)` घटने पर अतिरिक्त **`~18 g` शुद्ध `KCl` क्रिस्टल** तली में अलग होते दिखेंगे। **`(iii)`** ताप से ठोस विलेयता बढ़ती है: `KNO₃ (21→167g)` में सर्वाधिक, `NH₄Cl (24→66g)` व `KCl (35→54g)` में मध्यम, पर `NaCl (36→37g)` लगभग स्थिर रहती है।',
      },
    },
    {
      num: 'Ex Q14',
      q: {
        en: 'Three students prepare sugar solutions: **A** (`20 g` sugar + `80 g` water), **B** (`20 g` sugar + `100 g` water), **C** (`30 g` sugar + `80 g` water). Calculate `% m/m` of each & identify most concentrated.',
        hi: 'तीन विद्यार्थी चीनी विलयन बनाते हैं: **क** (`80g` जल+`20g` चीनी), **ख** (`100g` जल+`20g` चीनी), **ग** (`80g` जल+`30g` चीनी)। `% m/m` निकालें व सबसे सांद्र बताएँ।',
      },
      a: {
        en: '**Student A**: `(20 / 100) × 100 = 20%`; **Student B**: `(20 / 120) × 100 = 16.67%`; **Student C**: `(30 / 110) × 100 = 27.27%`. **Most concentrated: Student `C`** (`maximum solute mass per unit solution mass`, `NCERT Key verified!`).',
        hi: '**विद्यार्थी क = `20%`**; **ख = `16.67%`**; **ग = `27.27%`** (`NCERT उत्तरकुंजी से सत्यापित`)। **सबसे अधिक सांद्र = विद्यार्थी ‘ग’** क्योंकि इसमें प्रति `100 g` विलयन में सर्वाधिक चीनी घुली है!',
      },
    },
    {
      num: 'Ex Q15',
      q: {
        en: 'Look at **Fig 5.26** (`Apparatus स`): `(i)` Identify separation method **`स`**; `(ii)` Label **`क, ख, ग`**; `(iii)` Using **Table 5.5**, which mixtures can be separated by method `स`: `(a)` Water–Acetone, `(b)` Water–Salt, `(c)` Acetone–Alcohol, `(d)` Sand–Salt, `(e)` Alcohol–Chloroform, `(f)` Alcohol–Benzene?',
        hi: '**चित्र 5.26** में: `(i)` तकनीक **`स`** पहचानें; `(ii)` **`क, ख, ग`** नामांकित करें; `(iii)` तालिका 5.5 (`जल 100°, ऐसीटोन 56°, ऐल्कोहॉल 78°, क्लोरोफॉर्म 61°, बेंजीन 80°`) के आधार पर कौन-से मिश्रण ‘स’ से अलग हो सकते हैं?',
      },
      a: {
        en: '**`(i)` `स` = Simple Distillation (`साधारण आसवन`)**. **`(ii)` `क` = Distillation Flask (`आसवन फ्लास्क`), `ख` = Water Condenser (`जल संघनित्र`), `ग` = Receiving Conical Flask (`ग्राह्य फ्लास्क`)**. **`(iii)` Separated cleanly by `स`**: **`(a)` Water–Acetone** (`ΔT = 44 °C ≥ 25 °C`) and **`(b)` Water–Salt** (volatile water + non-volatile salt). Note: `(c) 22°C`, `(e) 17°C`, `(f) 2°C` all have `ΔT < 25 °C` (`need Fractional Distillation!`); `(d) Sand–Salt` are solids (`dissolve+filter+evaporate`).',
        hi: '**`(i)` `स` = साधारण आसवन (`Simple Distillation`)**। **`(ii)` `क` = आसवन फ्लास्क, `ख` = जल संघनित्र, `ग` = शंक्वाकार ग्राह्य फ्लास्क**। **`(iii)` ‘स’ से पृथक होने वाले मिश्रण**: केवल **`(क)` जल–ऐसीटोन** (`अंतर 44°C ≥ 25°C`) व **`(ख)` जल–नमक**। (`(ग) 22°`, `(ङ) 17°`, `(च) 2°` में अंतर `< 25°C` होने से प्रभाजी आसवन चाहिए व `(घ)` रेत–नमक के लिए घोल+छानन+वाष्पन`)।',
      },
    },
  ],
  flashcards: [
    {
      front: { en: 'Exact diameter cutoffs (`nm`) for Solution vs Colloid vs Suspension?', hi: 'विलयन, कोलॉइड व निलंबन के सटीक कण व्यास (`nm`) सीमाएँ क्या हैं?' },
      back: { en: 'True Solution `< 1 nm` | Colloid `1–1000 nm` | Suspension `> 1000 nm`. (`Group D 2025: Suspension > Colloid > Solution!`)', hi: 'विलयन `< 1 nm` | कोलॉइड `1–1000 nm` | निलंबन `> 1000 nm`।' },
    },
    {
      front: { en: 'Hospital Intravenous Normal Saline concentration (`NCERT p.76`)?', hi: 'अस्पतालों में प्रयुक्त लवणीय विलयन (Normal Saline) की सांद्रता?' },
      back: { en: '**`0.9% m/v` NaCl** (`0.9 g Sodium Chloride per 100 mL solution` — safe & isotonic for human blood!).', hi: '**`0.9% m/v` NaCl** (`प्रति 100 mL में 0.9 g नमक` — रुधिर के लिए सुरक्षित)।' },
    },
    {
      front: { en: 'Who standardized `ORS` (`Oral Rehydration Solution`) in India (`NCERT p.74`)?', hi: 'भारत में `ORS` का सूत्रीकरण व विश्वव्यापी प्रचार किस वैज्ञानिक ने किया?' },
      back: { en: '**Dr. Dilip Mahalanabis** (`Indian Pediatrician`, saved millions from cholera & diarrhea dehydration via WHO).', hi: '**डॉ. दिलीप महालनोबिस** (भारतीय शिशुरोग विशेषज्ञ — अतिसार व हैजा उपचार)।' },
    },
    {
      front: { en: 'True or False: Colloid is a Homogeneous Mixture because particles never settle?', hi: 'क्या कोलॉइड (दूध/रक्त) एक समांगी मिश्रण है?' },
      back: { en: '**FALSE!** It **looks homogeneous** and never settles, YET it is a **HETEROGENEOUS mixture** (`scatters light — Tyndall effect`).', hi: '**असत्य!** यह केवल समांगी प्रतीत होता है — वास्तव में यह **विषमांगी मिश्रण** है (`RRB #1 Repeated PYQ!`)।' },
    },
    {
      front: { en: 'Boiling-point rule: Simple Distillation vs Fractional Distillation?', hi: 'सरल आसवन बनाम प्रभाजी आसवन के लिए क्वथनांक अंतर नियम क्या है?' },
      back: { en: '**Simple Distillation**: miscible liquids with **`ΔT ≥ 25 °C`** (`Acetone 56° + Water 100°`). **Fractional**: **`ΔT < 25 °C`** (`Alcohol 78° + Benzene 80°; Petroleum fractions`).', hi: '**सरल आसवन**: **`ΔT ≥ 25 °C`** (ऐसीटोन `56°` + जल `100°`); **प्रभाजी आसवन**: **`ΔT < 25 °C`** (पेट्रोलियम शोधन)।' },
    },
    {
      front: { en: 'Emulsion Types (`p.88`): Oil-in-Water (`O/W`) vs Water-in-Oil (`W/O`)?', hi: 'पायस (`Emulsion`) के दोनों प्रकार उदाहरण सहित बताइए।' },
      back: { en: '**O/W (`जल में तेल`)**: **Milk, Body Lotion, Vanishing Cream**. **W/O (`तेल में जल`)**: **Butter, Cold Cream**. Stabilizer: **Protein (`milk`) / Soap**.', hi: '**जल में तेल (`O/W`)**: दूध, बॉडी लोशन, वैनिशिंग क्रीम; **तेल में जल (`W/O`)**: मक्खन, कोल्ड क्रीम (पायसी कारक: प्रोटीन/साबुन)।' },
    },
    {
      front: { en: 'Exact Alloy Compositions (`p.84`): Brass vs Bronze vs Stainless Steel?', hi: 'मिश्रधातु पीतल, काँसा व स्टेनलेस स्टील के सटीक घटक व % (`p.84`)?' },
      back: { en: '**Brass (`पीतल`)**: ~80% **Cu** + 20% **Zn** | **Bronze (`काँसा`)**: ~80% **Cu** + 20% **Sn** | **Stainless Steel**: **Fe + C (0.03–0.8%) + Cr (16–18%) + Ni (10–14%) + Mo (2–3%)**.', hi: '**पीतल**: `~80% Cu + 20% Zn` | **काँसा**: `~80% Cu + 20% Sn` | **स्टेनलेस स्टील**: `Fe + C + Cr (16-18%) + Ni (10-14%) + Mo (2-3%)`।' },
    },
    {
      front: { en: 'Ancient Indian Salt Methods (`p.79`) & Kannauj Perfume Distillation (`p.81`)?', hi: 'प्राचीन भारतीय नमक विधियाँ व कन्नौज की इत्र विधि के नाम क्या हैं?' },
      back: { en: '**Panga salt** = boiling seawater brine; **Karkach salt** = solar evaporation. **Kannauj Mitti-ka-Attar** = traditional **Deg-Bhapka (`देग-भापका`) distillation**!', hi: '**पांगा नमक** = उबालकर; **करकच नमक** = सौर वाष्पीकरण द्वारा; कन्नौज का मिट्टी का इत्र = **देग-भापका आसवन विधि**!' },
    },
    {
      front: { en: 'Sublimation vs Deposition (`p.84`) — 3 classic examples?', hi: 'ऊर्ध्वपातन व निक्षेपण में अंतर व 3 उदाहरण बताइए।' },
      back: { en: '**Sublimation**: Solid -> Gas directly without melting (`Camphor, Naphthalene, Dry Ice CO₂`). **Deposition**: Vapor -> Solid directly on cooling!', hi: '**ऊर्ध्वपातन**: ठोस → सीधे वाष्प (`कपूर, नैफ्थलीन, शुष्क बर्फ CO₂`); **निक्षेपण**: वाष्प → सीधे ठोस में जमना!' },
    },
    {
      front: { en: 'How do Temperature & Pressure affect Gas vs Solid solubility in water?', hi: 'जल में ठोस बनाम गैस की विलेयता पर ताप व दाब का क्या प्रभाव पड़ता है?' },
      back: { en: '**Solids**: solubility **INCREASES** with temperature (`KNO₃`). **Gases**: solubility **DECREASES** with temperature, **INCREASES** with **Pressure** (`soda CO₂`).', hi: '**ठोस**: ताप बढ़ने पर विलेयता **बढ़ती है**; **गैस**: ताप बढ़ने पर **घटती है** व दाब बढ़ाने पर **बढ़ती है** (`सोडा जल CO₂`)।' },
    },
  ],
  pyqBank: [
    {
      id: 'pyq-mix-1',
      examTag: 'RRB ALP 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.1): Heterogeneous Mixture',
      question: {
        en: 'Which of the following best describes a heterogeneous mixture?',
        hi: 'निम्नलिखित में से कौन-सा, विषमांगी मिश्रण का सर्वोत्तम रूप से वर्णन करता है?',
      },
      options: {
        en: ['It has a single composition.', 'It cannot be separated physically.', 'It is a pure substance.', 'Its components are visibly distinct.'],
        hi: ['इसका एक ही संघटन है।', 'इसे भौतिक रूप से पृथक नहीं किया जा सकता है।', 'यह एक शुद्ध पदार्थ है।', 'इसके घटक स्पष्ट रूप से भिन्न होते हैं।'],
      },
      correctIndex: 3,
      solution: {
        en: 'Heterogeneous mixtures have **non-uniform composition** and **visibly distinct parts/layers** (`e.g. sand+water, oil+water`).',
        hi: 'विषमांगी मिश्रणों में असमान संघटन होता है व उनके **घटक स्पष्ट रूप से भिन्न दिखाई देते हैं**।',
      },
    },
    {
      id: 'pyq-mix-2',
      examTag: 'RRB ALP CBT-1 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.1): Heterogeneous Examples',
      question: {
        en: 'Given below are two statements. Read the statements carefully and select the correct option. Statement I: Mixtures that contain physically distinct parts and have non-uniform compositions are called heterogeneous mixtures. Statement II: Mixtures of sodium chloride and iron filings, salt and sulphur, and oil and water are examples of heterogeneous mixtures.',
        hi: 'नीचे दो कथन दिए गए हैं। कथनों को ध्यानपूर्वक पढ़िए और सही विकल्प चुनिए। कथन I: मिश्रण जिसमें भौतिक रूप से अलग-अलग भाग होते हैं और असमान संघटन होता है, विषमांग मिश्रण कहलाते हैं। कथन II: सोडियम क्लोराइड और लोहे के बुरादे, नमक और सल्फर, और तेल और जल के मिश्रण विषमांग मिश्रण के उदाहरण हैं।',
      },
      options: {
        en: ['Both Statements I and II are false.', 'Statement I is true but Statement II is false.', 'Statement I is false but Statement II is true.', 'Both Statements I and II are true.'],
        hi: ['कथन I और II दोनों असत्य हैं।', 'कथन I सत्य है लेकिन कथन II असत्य है।', 'कथन I असत्य है लेकिन कथन II सत्य है।', 'कथन I और II दोनों सत्य हैं।'],
      },
      correctIndex: 3,
      solution: {
        en: 'Both statements match exact NCERT definition and examples (`salt+Fe filings`, `salt+sulfur`, `oil+water`).',
        hi: 'दोनों कथन NCERT की सटीक परिभाषा व विषमांगी उदाहरणों के पूर्णतः अनुरूप सत्य हैं।',
      },
    },
    {
      id: 'pyq-mix-3',
      examTag: 'RRB ALP CBT-1 Shift 4',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.1): Homogeneous Mixture',
      question: {
        en: 'Which statement best describes a homogeneous mixture?',
        hi: 'निम्नलिखित में से कौन-सा कथन, समांगी मिश्रण का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: ['It forms layers that can be seen easily', 'It shows different properties and appearance in different areas', 'It has the same appearance and composition throughout', 'It contains substances visible to the naked eye'],
        hi: ['यह सरलता से देखी जा सकने वाली परतें बनाता है', 'यह अलग-अलग क्षेत्रों में अलग-अलग गुण और स्वरूप दर्शाता है', 'इसका समग्र स्वरूप और संघटन समान होता है', 'इसमें नग्न आंखों से दिखाई देने वाले पदार्थ होते हैं'],
      },
      correctIndex: 2,
      solution: {
        en: 'A **homogeneous mixture (solution)** has **uniform appearance and composition throughout** (`first sip = last sip`).',
        hi: 'समांगी मिश्रण का समग्र स्वरूप व संघटन **आदि से अंत तक बिल्कुल समान** रहता है।',
      },
    },
    {
      id: 'pyq-mix-4',
      examTag: 'RRB Group D 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2): Miscibility of Ethanol',
      question: {
        en: 'Which statement correctly describes the solubility of ethanol?',
        hi: 'कौन-सा कथन एथेनॉल की विलेयता का सही वर्णन करता है?',
      },
      options: {
        en: ['Completely miscible with water', 'Insoluble in water', 'Slightly soluble in water', 'Soluble only in acids'],
        hi: ['जल के साथ पूर्णतः मिश्रणीय', 'जल में अविलेय', 'जल में अल्प विलेय', 'केवल अम्लों में विलेय'],
      },
      correctIndex: 0,
      solution: {
        en: 'Ethanol (`alcohol`) mixes in all proportions with water (`miscible liquids`), separated only via distillation (`Table 5.5: 78 °C`).',
        hi: 'एथेनॉल **जल के साथ पूर्णतः मिश्रणीय** है (`तालिका 5.5` — ऐल्कोहॉल `78 °C`)।',
      },
    },
    {
      id: 'pyq-mix-5',
      examTag: 'RRB Group D 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.3): Suspension Characteristic',
      question: {
        en: 'Which of the following is a characteristic feature of a suspension?',
        hi: 'निम्नलिखित में से कौन-सा, निलंबन का एक विशिष्ट अभिलक्षण है?',
      },
      options: {
        en: ['The particles are too small to settle down on standing.', 'Suspension shows Tyndall effect but is transparent.', 'Particles can be seen with the naked eye and settle on standing.', 'It is a homogeneous mixture with solute dissolved uniformly.'],
        hi: ['कण इतने छोटे होते हैं कि स्थिर होने पर नीचे नहीं बैठते हैं।', 'निलंबन टिंडल प्रभाव दिखाता है लेकिन पारदर्शी होता है।', 'कणों को नग्न नेत्रों से देखा जा सकता है और स्थिर होने पर वे नीचे बैठ जाते हैं।', 'यह एक समांगी मिश्रण है जिसमें विलेय एकसमान रूप से विलीन हो जाता है।'],
      },
      correctIndex: 2,
      solution: {
        en: 'Suspension particles (`> 1000 nm`) are visible to the **naked eye** and **settle down when left undisturbed**.',
        hi: 'निलंबन के बड़े कण (`>1000 nm`) **नग्न नेत्रों से दृश्य** होते हैं तथा स्थिर रखने पर **नीचे बैठ जाते हैं**।',
      },
    },
    {
      id: 'pyq-mix-6',
      examTag: 'RRB Group D 2025 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Act 5.3): Copper Sulfate Solution',
      question: {
        en: 'A chemistry teacher prepares a mixture by dissolving copper sulfate in water until the solution is clear blue. Why is this considered a homogeneous mixture?',
        hi: 'एक रसायन विज्ञान शिक्षक, कॉपर सल्फेट को जल में विलीन करके एक मिश्रण तब तक तैयार करता है जब तक कि विलयन स्पष्ट रूप से नीला न हो जाए। इसे समांगी मिश्रण क्यों माना जाता है?',
      },
      options: {
        en: ['Copper sulfate crystals float on the surface of water', 'The mixture forms two distinct layers after stirring', 'Copper sulfate can be separated by filtration easily', 'The mixture appears as a single phase with no visible separation'],
        hi: ['क्योंकि कॉपर सल्फेट क्रिस्टल जल की सतह पर तैरते हैं', 'क्योंकि मिश्रण, विलोडन करने के बाद दो भिन्न-भिन्न परतें बनाता है', 'कॉपर सल्फेट को निस्यंदन द्वारा आसानी से पृथक किया जा सकता है', 'क्योंकि मिश्रण बिना किसी दृश्य पृथक्करण के एकल प्रावस्था के रूप में दिखाई देता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Dissolved `CuSO₄` disperses uniformly (`< 1 nm`), appearing as a **single clear blue phase** with zero boundary.',
        hi: 'पूर्ण घुलने पर `CuSO₄` जल में एकसमान वितरित होकर बिना किसी पृथक परत के **एकल प्रावस्था** बनाता है।',
      },
    },
    {
      id: 'pyq-mix-7',
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.3): Shaking a Suspension',
      question: {
        en: 'What occurs to the particles in the suspension when we shake it?',
        hi: 'जब हम निलंबन (suspension) को विलोडित करते हैं, तो उसके कणों में क्या घटित होता है?',
      },
      options: {
        en: ['It remains settled', 'It mixes temporarily and then settles', 'It forms a new substance', 'It dissolves permanently'],
        hi: ['वे तल में ही रहते हैं', 'वे अस्थायी रूप से मिश्रित होते हैं और फिर नीचे बैठ जाते हैं', 'वे एक नया पदार्थ बनाते हैं', 'वे स्थायी रूप से विलीन हो जाते हैं'],
      },
      correctIndex: 1,
      solution: {
        en: 'Suspensions are physically unstable: shaking disperses solid chunks **temporarily** before gravity settles them again.',
        hi: 'निलंबन अस्थायी मिश्रण है — हिलाने पर कण **अस्थायी रूप से तैरते** हैं व शांत होने पर पुनः नीचे बैठ जाते हैं।',
      },
    },
    {
      id: 'pyq-mix-8',
      examTag: 'RRB Group D 2025 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.1): Homogeneous Example',
      question: {
        en: 'Which of the following is an example of a homogeneous mixture?',
        hi: 'निम्नलिखित में से कौन-सा, समांगी मिश्रण का एक उदाहरण है?',
      },
      options: {
        en: ['Sand and water', 'Sugar dissolved in water', 'Oil and water', 'Iron filings and sulfur'],
        hi: ['रेत और जल', 'जल में विलीन शर्करा', 'तेल और जल', 'लोहे का बुरादा और सल्फर'],
      },
      correctIndex: 1,
      solution: {
        en: '**Sugar dissolved in water** forms a single uniform phase (`true solution`); the other three remain heterogeneous.',
        hi: '**जल में विलीन शर्करा** समांगी मिश्रण (विलयन) है; शेष तीनों स्पष्ट विषमांगी हैं।',
      },
    },
    {
      id: 'pyq-mix-9',
      examTag: 'RRB Group D 2025 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.4): Particle Size Order',
      question: {
        en: 'The correct decreasing order of the size of the particles in suspension, solution, and colloid is:',
        hi: 'निलंबन, विलयन और कोलॉइड में कणों के आमाप का सही घटता क्रम क्या है?',
      },
      options: {
        en: ['suspension > solution > colloid', 'suspension > colloid > solution', 'colloid > suspension > solution', 'solution > colloid > suspension'],
        hi: ['निलंबन > विलयन > कोलॉइड', 'निलंबन > कोलॉइड > विलयन', 'कोलॉइड > निलंबन > विलयन', 'विलयन > कोलॉइड > निलंबन'],
      },
      correctIndex: 1,
      solution: {
        en: 'Exact NCERT diameter scale (`Sec 5.4.4`): **Suspension (`> 1000 nm`) > Colloid (`1–1000 nm`) > True Solution (`< 1 nm`)**.',
        hi: 'NCERT कण आकार क्रम: **निलंबन (`> 1000 nm`) > कोलॉइड (`1–1000 nm`) > विलयन (`< 1 nm`)**।',
      },
    },
    {
      id: 'pyq-mix-10',
      examTag: 'RRB Group D 2025 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.1 & 5.4.1): Oil and Water',
      question: {
        en: 'A student mixes oil and water in a beaker and notices two separate layers. Which explanation best fits this observation?',
        hi: 'एक विद्यार्थी बीकर में तेल और जल मिलाता है और दो पृथक परतें देखता है। इस अवलोकन के लिए कौन-सी व्याख्या सबसे उपयुक्त है?',
      },
      options: {
        en: ['Oil and water form a heterogeneous mixture because their components are not uniformly distributed.', 'Oil and water chemically react to form a new compound.', 'Oil dissolves completely in water to form a uniform solution.', 'Oil and water form a homogeneous mixture with a single phase.'],
        hi: ['तेल और जल एक विषमांगी मिश्रण बनाते हैं क्योंकि उनके घटक समान रूप से वितरित नहीं होते हैं।', 'तेल और जल रासायनिक रूप से अभिक्रिया करके एक नया यौगिक बनाते हैं।', 'तेल, जल में पूरी तरह घुल जाता है और एक समान विलयन बनाता है।', 'तेल और जल एक ही अवस्था वाला समांगी मिश्रण बनाते हैं।'],
      },
      correctIndex: 0,
      solution: {
        en: 'Immiscible liquids (`oil + water`) create two density-separated non-uniform layers -> **heterogeneous mixture**.',
        hi: 'अमिश्रणीय होने कारण असमान दो परतें बनती हैं, अतः यह **विषमांगी मिश्रण** है।',
      },
    },
    {
      id: 'pyq-mix-11',
      examTag: 'RRB Group D 2025 Shift 30',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2): True Solution Properties',
      question: {
        en: 'Which of the following statements is true for homogeneous mixtures?',
        hi: 'समांगी मिश्रणों के लिए निम्नलिखित में से कौन-सा कथन सत्य है?',
      },
      options: {
        en: ['The particles of a solution are smaller and cannot be seen with the naked eye.', 'The components of the mixture can be separated by filtration.', 'They show the Tyndall effect.', 'The solute particles settle down when it is left undisturbed.'],
        hi: ['विलयन के कण लघुतर होते हैं और उन्हें नग्न आंखों से नहीं देखा जा सकता है।', 'मिश्रण के घटकों को निस्यंदन द्वारा पृथक्कृत किया जा सकता है।', 'वे टिन्डल प्रभाव को दर्शाते हैं।', 'जब विलेय को अविक्षुब्ध छोड़ दिया जाता है तो उसके कण नीचे बैठ जाते हैं।'],
      },
      correctIndex: 0,
      solution: {
        en: 'Solution particles (`< 1 nm`) are invisible to naked eyes, pass through filters, don’t settle, and do **NOT** show Tyndall effect.',
        hi: 'विलयन के कण `< 1 nm` होने कारण **नग्न नेत्रों से नहीं देखे जा सकते**; न ही वे बैठते या टिंडल प्रभाव दिखाते हैं।',
      },
    },
    {
      id: 'pyq-mix-12',
      examTag: 'RRB Group D 2025 Shift 33',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.1): Separating Funnel Criterion',
      question: {
        en: 'Which factor must be considered before using a separating funnel for two liquids?',
        hi: 'दो द्रवों के लिए पृथक्कारी कीप (separating funnel) का उपयोग करने से पूर्व किस कारक पर विचार किया जाना चाहिए?',
      },
      options: {
        en: ['The liquids must have strong odors', 'The liquids must have different colors', 'Both liquids have high boiling point', 'The liquids must be immiscible'],
        hi: ['द्रवों की गंध तेज होनी चाहिए', 'द्रवों के रंग भिन्न होने चाहिए', 'दोनों द्रवों का क्वथनांक उच्च होना चाहिए', 'द्रव अमिश्रणीय होने चाहिए'],
      },
      correctIndex: 3,
      solution: {
        en: 'Separating funnel (`Sec 5.4.1`) ONLY separates **immiscible liquids** of differing density (`e.g. oil + water`). Miscible liquids need distillation!',
        hi: 'पृथक्कारी कीप के लिए आवश्यक है कि दोनों **द्रव अमिश्रणीय हों** (तभी दो अलग परतें बनेंगी)।',
      },
    },
    {
      id: 'pyq-mix-13',
      examTag: 'RRB Group D 2025 Shift 38',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.3): Saturated Solution',
      question: {
        en: 'A student adds salt to water until no more salt dissolves and some salt remains undissolved at the bottom. What does this indicate?',
        hi: 'एक विद्यार्थी जल में तब तक लवण मिलाता है जब तक कि और लवण विलीन होना बंद न हो जाए तथा कुछ लवण बिना विलीन हुए नीचे बैठ जाए। यह क्या दर्शाता है?',
      },
      options: {
        en: ['Salt is completely insoluble in water', 'Salt has very low solubility in water', 'The solution formed is saturated salt solution', 'The solution formed is a colloidal solution'],
        hi: ['लवण, जल में पूर्णतः अविलेय है', 'जल में लवण की विलेयता बहुत कम होती है', 'निर्मित विलयन संतृप्त लवण विलयन है', 'निर्मित विलयन एक कोलॉइडी विलयन है'],
      },
      correctIndex: 2,
      solution: {
        en: 'At a given temperature, when no additional solute can dissolve, the solution has reached its **saturated state**.',
        hi: 'जब किसी ताप पर और विलेय न घुल पाए, तो वह **संतृप्त विलयन (Saturated Solution)** कहलाता है।',
      },
    },
    {
      id: 'pyq-mix-14',
      examTag: 'RRB Group D 2025 Shift 41',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Table 5.1): Tyndall + Settling',
      question: {
        en: 'Which of the following mixtures shows the Tyndall effect but the particles settle down on standing?',
        hi: 'निम्नलिखित में से कौन-सा मिश्रण टिंडल प्रभाव प्रदर्शित करता है, परंतु स्थिर रखने पर इसके कण नीचे बैठ जाते हैं?',
      },
      options: {
        en: ['Colloid', 'Suspension', 'Solution', 'Compound'],
        hi: ['कोलॉइड (Colloid)', 'निलंबन (Suspension)', 'विलयन (Solution)', 'यौगिक (Compound)'],
      },
      correctIndex: 1,
      solution: {
        en: 'Both colloids and freshly stirred suspensions show Tyndall effect, **ONLY suspensions settle down** on standing (`NCERT Table 5.1`).',
        hi: '**निलंबन** हिलाने पर टिंडल प्रभाव दिखाता है, पर शांत रखने पर इसके बड़े कण नीचे बैठ जाते हैं (कोलॉइड नहीं बैठता!)।',
      },
    },
    {
      id: 'pyq-mix-15',
      examTag: 'RRB Group D 2025 Shift 42',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.4): Colloid Nature',
      question: {
        en: 'A colloidal solution is a type of:',
        hi: 'कोलॉइडी विलयन एक प्रकार का __________ होता है।',
      },
      options: {
        en: ['Pure substance', 'True solution', 'Homogeneous mixture', 'Heterogeneous mixture'],
        hi: ['शुद्ध पदार्थ', 'वास्तविक विलयन', 'समांगी मिश्रण', 'विषमांगी मिश्रण'],
      },
      correctIndex: 3,
      solution: {
        en: 'Despite appearing uniform visually, a **colloidal solution is a heterogeneous mixture** (`dispersed phase + dispersion medium`).',
        hi: 'दिखने में समरूप होने पर भी कोलॉइडी विलयन **एक विषमांगी मिश्रण** होता है।',
      },
    },
    {
      id: 'pyq-mix-16',
      examTag: 'RRB Group D 2025 Shift 47',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.4): Identifying Non-Colloid',
      question: {
        en: 'Which of the following is NOT an example of a colloid?',
        hi: 'निम्नलिखित में से कौन-सा, कोलॉइड का एक उदाहरण नहीं है?',
      },
      options: {
        en: ['Ice cream', 'Blood', 'Milk', 'Sugar solution'],
        hi: ['आइसक्रीम', 'रक्त', 'दूध', 'शर्करा विलयन'],
      },
      correctIndex: 3,
      solution: {
        en: 'Ice cream, Blood, and Milk are NCERT examples (`p.87`); **Sugar solution** is a **True Solution (`< 1 nm`)**.',
        hi: 'आइसक्रीम, रक्त व दूध कोलॉइड हैं (`NCERT पृ. 87`), जबकि **शर्करा विलयन** एक वास्तविक विलयन है।',
      },
    },
    {
      id: 'pyq-mix-17',
      examTag: 'RRB Group D 2025 Shift 48',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.3): Solid vs Gas Solubility',
      question: {
        en: 'Which of the following statements about the solubility of solids and gases in liquids is generally CORRECT?',
        hi: 'द्रवों में ठोसों और गैसों की विलेयता के संबंध में निम्नलिखित में से कौन-सा कथन सामान्यतः सही है?',
      },
      options: {
        en: ['Solubility of solids in liquids increases, while that of gases in liquids decreases with an increase in temperature.', 'Solubility of both solids and gases in liquids increases with increase in temperature.', 'Solubility of both solids and gases in liquids decreases with increase in temperature.', 'Solubility of solids in liquids decreases, while that of gases in liquids increases with an increase in temperature.'],
        hi: ['तापमान में वृद्धि के साथ द्रवों में ठोसों की विलेयता में वृद्धि हो जाती है, जबकि द्रवों में गैसों की विलेयता में कमी हो जाती है', 'तापमान में वृद्धि के साथ द्रवों में ठोसों और गैसों दोनों की विलेयता में वृद्धि हो जाती है', 'तापमान में वृद्धि के साथ द्रवों में ठोसों और गैसों दोनों की विलेयता में कमी हो जाती है', 'तापमान में वृद्धि के साथ द्रवों में ठोसों की विलेयता में कमी हो जाती है, जबकि द्रवों में गैसों की विलेयता में वृद्धि हो जाती है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim NCERT Section 5.2.3 (`p.76`): Solid solubility in liquids **increases** with temperature, while Gas solubility **decreases**!',
        hi: 'सटीक NCERT नियम (`पृ. 76`): ताप बढ़ने पर ठोस विलेयता बढ़ती है, जबकि गैसों की विलेयता घटती है!',
      },
    },
    {
      id: 'pyq-mix-18',
      examTag: 'RRB NTPC UG 2025 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.2): Why Alloys Are Mixtures',
      question: {
        en: 'Why is an alloy considered a mixture even though it cannot be separated by physical methods?',
        hi: 'भौतिक विधियों द्वारा पृथक न किए जा सकने पर भी मिश्रधातु को मिश्रण क्यों माना जाता है?',
      },
      options: {
        en: ['It shows the properties of its constituents and can have variable composition.', 'Alloys are always magnetic because they contain metals with a fixed composition.', 'It contains only one type of element in vapor form.', 'It is formed only by non-metals.'],
        hi: ['यह अपने संघटकों के गुणधर्मों को प्रदर्शित करती है और इसकी संघटन परिवर्ती हो सकती है।', 'मिश्रधातुएं सदैव चुम्बकीय होती हैं क्योंकि इनमें निश्चित संघटन वाली धातुएं होती हैं।', 'इसमें वाष्प रूप में केवल एक ही प्रकार का तत्व होता है।', 'यह केवल अधातुओं से ही बनती है।'],
      },
      correctIndex: 0,
      solution: {
        en: 'Alloys show the individual properties of their component metals (`e.g. Cu + Zn in Brass`) and allow **variable percentage composition**.',
        hi: 'मिश्रधातु अपने घटकों के गुणधर्म दर्शाती है और इसका संघटन परिवर्ती हो सकता है, अतः यह **मिश्रण** है।',
      },
    },
    {
      id: 'pyq-mix-19',
      examTag: 'RRB NTPC UG 2025 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.1 & 5.2.3): Soda Water Gas Solubility',
      question: {
        en: 'Why are soft drink and soda water bottles sealed under high pressure in beverage industries?',
        hi: 'बेवरेज उद्योगों में शीतल पेय और सोडा जल की बोतलों को उच्च दाब पर क्यों सील किया जाता है?',
      },
      options: {
        en: ['To increase the temperature', 'To prevent freezing', 'To decrease the amount of sugar', 'To increase the solubility of carbon dioxide'],
        hi: ['ताप बढ़ाने के लिए', 'हिमीकरण से रोकने के लिए', 'शर्करा की मात्रा कम करने के लिए', 'कार्बन डाइऑक्साइड की विलेयता बढ़ाने के लिए'],
      },
      correctIndex: 3,
      solution: {
        en: 'Higher gas pressure forces more **`CO₂`** into water (`Henry’s law`), keeping soda water fizzy and homogeneous.',
        hi: 'उच्च दाब पर जल में **`CO₂` गैस की विलेयता बढ़ जाती है**।',
      },
    },
    {
      id: 'pyq-mix-20',
      examTag: 'RRB Tech Gr-III 2024 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.5): Tyndall Light Scattering',
      question: {
        en: 'Which of the following phenomena is responsible for Tyndall effect?',
        hi: 'निम्नलिखित में से कौन-सी घटना टिंडल प्रभाव के लिए जिम्मेदार है?',
      },
      options: {
        en: ['Refraction of light', 'Dispersion of light', 'Reflection of light', 'Scattering of light'],
        hi: ['प्रकाश का अपवर्तन', 'प्रकाश का विक्षेपण', 'प्रकाश का परावर्तन', 'प्रकाश का प्रकीर्णन'],
      },
      correctIndex: 3,
      solution: {
        en: '**Tyndall effect** (`NCERT Sec 5.5`) is the **scattering of light** by colloidal/fine suspended particles (`1–1000 nm`).',
        hi: 'टिंडल प्रभाव कोलाइडी कणों द्वारा **प्रकाश के प्रकीर्णन (`Scattering of light`)** के कारण उत्पन्न होता है।',
      },
    },
    {
      id: 'pyq-mix-21',
      examTag: 'RRB Tech Gr-III 2024 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.2 / 5.4.2): Brass % Composition Numerical',
      question: {
        en: 'The ratio of copper and zinc in brass is `13 : 7`. How much zinc will there be in `100 kg` of brass?',
        hi: 'पीतल में तांबे और जस्ते का अनुपात `13 : 7` है। `100 kg` पीतल में कितना जस्ता होगा?',
      },
      options: {
        en: ['14 kg', '42 kg', '35 kg', '70 kg'],
        hi: ['14 kg', '42 kg', '35 kg', '70 kg'],
      },
      correctIndex: 2,
      solution: {
        en: 'Zinc mass fraction = `7 / (13 + 7) = 7 / 20` -> **`(7 / 20) × 100 kg = 35 kg`** (`Copper = 65 kg`).',
        hi: 'जस्ते का भाग = `7 / (13+7) = 7/20` → **`(7/20) × 100 kg = 35 kg`**।',
      },
    },
    {
      id: 'pyq-mix-22',
      examTag: 'RRB Tech Gr-III 2024 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.2): Bronze Alloy',
      question: {
        en: 'Identify the name of an alloy formed when mix of copper and tin (`Cu` and `Sn`)?',
        hi: 'तांबे और टिन (`Cu` और `Sn`) के मिश्रण से बनने वाली मिश्र धातु का नाम क्या है?',
      },
      options: {
        en: ['Bronze', 'Gold', 'Brass', 'Solder'],
        hi: ['कांसा', 'सोना', 'पीतल', 'सोल्डर'],
      },
      correctIndex: 0,
      solution: {
        en: '**Bronze (`काँसा`)** = **Copper (`~80%`) + Tin (`~20%`)** (`whereas Brass = Cu + Zn, Solder = Pb + Sn`).',
        hi: '**काँसा (`Bronze`) = ताँबा (`Cu`) + टिन (`Sn`)**; जबकि पीतल = ताँबा + जिंक (`Zn`)।',
      },
    },
    {
      id: 'pyq-mix-23',
      examTag: 'RRB Tech Gr-III 2024 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.5): Face Cream Colloid Type',
      question: {
        en: 'Face cream belongs to which type of colloid form?',
        hi: 'फेस क्रीम किस प्रकार के कोलॉइड रूप से संबंधित है?',
      },
      options: {
        en: ['Emulsion', 'Foam', 'Solid', 'Gel'],
        hi: ['पायस (Emulsion)', 'झाग (Foam)', 'ठोस (Solid)', 'जेल (Gel)'],
      },
      correctIndex: 0,
      solution: {
        en: 'Creams (`vanishing cream O/W`, `cold cream W/O`), milk, butter & lotions are **Emulsions (`liquid in liquid`)** (`NCERT p.88`).',
        hi: 'फेस क्रीम, वैनिशिंग क्रीम, कोल्ड क्रीम, दूध व मक्खन **पायस (`Emulsion` — द्रव में द्रव कोलॉइड)** हैं।',
      },
    },
    {
      id: 'pyq-mix-24',
      examTag: 'RRB Tech Gr-III 2024 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.5): Tyndall Color Determinant',
      question: {
        en: 'What determines the colour of scattered light in the Tyndall effect?',
        hi: 'टिंडल प्रभाव में प्रकीर्णित प्रकाश का रंग किसके द्वारा निर्धारित होता है?',
      },
      options: {
        en: ['The angle of incidence of the incoming light.', 'The angle of refraction of the emerging light.', 'The distance between the source of light and the scattering particles.', 'The size of the scattering particles.'],
        hi: ['आपतित प्रकाश के आपतन कोण द्वारा।', 'निर्गत प्रकाश के अपवर्तन कोण द्वारा।', 'प्रकाश स्रोत और प्रकीर्णन कणों के बीच की दूरी द्वारा।', 'प्रकीर्णन कणों के आकार द्वारा।'],
      },
      correctIndex: 3,
      solution: {
        en: 'Very fine colloidal particles scatter shorter **blue** wavelengths best, while larger dust/fog particles scatter longer wavelengths (**white haze**).',
        hi: 'प्रकीर्णित प्रकाश का रंग **प्रकीर्णन कणों के आकार (`particle size`)** पर निर्भर करता है (अतिसूक्ष्म कण नीला व बड़े कण श्वेत प्रकाश फैलाते हैं)।',
      },
    },
  ],
};
