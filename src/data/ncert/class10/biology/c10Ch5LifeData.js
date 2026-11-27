/**
 * Class 10 NCERT (2026–27 Edition — jhsc105.pdf, Pages 88–110) + Railway CBT Deep-Dive Edition
 * Chapter 5: Life Processes (जैव प्रक्रम) — Gold Standard v3 (47 PYQ Hits!)
 * Complete NCERT Coverage: 5.1 Molecular Movement & Living Maintenance ->
 * 5.2 Nutrition (`Autotrophic 3 Steps, Desert Night CO₂, Guard Cells/Stomata, Variegated Leaf/KOH/Salivary Amylase`, Heterotrophic Saprotrophic/Parasitic, Amoeba/Paramoecium Cilia, Human Digestion: Amylase, HCl/Pepsin/Mucus, Liver Bile Emulsification, Pancreas Trypsin/Lipase, Villi, Colon, Dental Caries/Plaque) ->
 * 5.3 Respiration (`Glucose→Pyruvate Cytoplasm -> Yeast Ethanol / Muscle Lactic Acid / Mitochondria CO₂+H₂O+ATP 30.5 kJ/mol`, Plant Gas Diffusion Night vs Day, Aquatic Fish Breathing Rate, Trachea Cartilage Rings, Smoking Cilia Destruction, Alveoli 80 m², Residual Volume, Haemoglobin 3-yr Diffusion Fact) ->
 * 5.4 Transport (`Blood Plasma/RBC/Platelets, 4-Chamber Double Circulation vs 3 Amphibian/Reptile vs 2 Fish, Thicker Ventricles, 120/80 mmHg Sphygmomanometer, Arteries vs Veins vs Capillaries, Lymph Fat Transport`, `Xylem Root Pressure + Transpiration Pull` vs `Phloem Bidirectional ATP Translocation`) ->
 * 5.5 Excretion (`Abdominal Kidneys, Ureter/Bladder/Single Urethra, Nephron Glomerulus/Bowman's Capsule/180 L→1–2 L Selective Reabsorption, Artificial Kidney Hemodialysis No-Reabsorption`, `Plant 5 Excretion Methods: O₂/Transpiration/Vacuoles/Leaves/Resins & Gums in Old Xylem`, Organ Donation).
 * All 8 Activities (5.1–5.8), All 21 In-Text Qs, All 13 Exercises verified against jhsc1an.pdf, & 24 Verbatim RRB PYQs.
 */

export const C10_CH5_LIFE_DATA = {
  id: 'c10-bio-ch5',
  classId: 'class10',
  subjectId: 'biology',
  subjectLabel: { en: 'Biology', hi: 'जीव विज्ञान (Biology)' },
  chapterNumber: 5,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 5: Life Processes (CBT Edition)',
  blueprintSvgKey: 'c10-ch5-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Photosynthesis, Guard Cells, Human Digestive Glands & Villi', hi: 'प्रकाश संश्लेषण, रंध्र, मानव पाचन ग्रंथियाँ (HCl/पित्त/ट्रिप्सिन) व दीर्घरोम' }, pct: 28 },
    { label: { en: 'Respiration (Pyruvate 3 Pathways Fig 5.8, ATP 30.5 kJ, Alveoli & Haemoglobin)', hi: 'श्वसन (पायरूवेट के 3 पथ चित्र 5.8, ATP, कूपिका व हीमोग्लोबिन)' }, pct: 26 },
    { label: { en: '4-Chamber Double Circulation, 120/80 BP, Lymph, Xylem & ATP Phloem', hi: 'दोहरा परिसंचरण (120/80 BP, लसीका), जाइलम वाष्पोत्सर्जन व फ्लोएम (ATP)' }, pct: 26 },
    { label: { en: 'Excretion (Nephron 180L→1–2L Reabsorption, Dialysis & Plant Resins/Gums)', hi: 'उत्सर्जन (नेफ्रॉन 180L→1–2L पुनरवशोषण, अपोहन व पादप रेज़िन-गोंद)' }, pct: 20 },
  ],
  title: {
    en: 'Chapter 5: Life Processes',
    hi: 'अध्याय 5: जैव प्रक्रम',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • Nutrition, Respiration, Double Circulation, Plant Transport & Nephron Excretion',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • पोषण, पाचन, श्वसन (चित्र 5.8), हृदय-परिसंचरण, पादप वहन व नेफ्रॉन उत्सर्जन',
  },
  metrics: {
    pages: 23,
    activities: 8,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 13,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-bio-ch5/hero-life-processes.webp',
    caption: {
      en: 'Life Processes Concept Bench: Turgid chlorophyllous Guard Cells (`Stomata`), Stomach & Intestinal Villi (`Digestion`), 4-Chambered Double-Circulation Heart, & Renal Bowman’s Glomerulus + Lung Alveoli.',
      hi: 'जैव प्रक्रम स्टूडियो: हरितलवक युक्त द्वार कोशिकाएँ (`रंध्र`), आमाशय-क्षुद्रांत्र दीर्घरोम (`पाचन`), चार-कोष्ठीय दोहरा परिसंचरण हृदय एवं वृक्क ग्लोमेरुलस-फुफ्फुस कूपिका।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Living Criteria & Nutrition (`5.1–5.2`)**: Invisible **molecular movements** define life (`viruses show none outside host cells!`). **Photosynthesis (`3 Steps`)**: `(i)` Chlorophyll absorbs sunlight -> `(ii)` light splits `H₂O` -> `(iii)` `CO₂` reduces to carbohydrate (`stored as Starch in plants vs Glycogen in humans!`). **Desert plants** absorb `CO₂` at **NIGHT**! Water enters **guard cells -> swell -> stoma opens** (`KOH absorbs CO₂ in Act 5.2`). **Paramoecium** takes food at a fixed spot via **cilia**.',
      hi: '**सजीव लक्षण व पोषण (`5.1–5.2`)**: **आणविक गति** जीवन का असली प्रमाण है (`विषाणु कोशिका के बाहर अक्रिय`)। **प्रकाश संश्लेषण के 3 चरण**: क्लोरोफिल द्वारा प्रकाश अवशोषण → जल विखंडन → `CO₂` का कार्बोहाइड्रेट में अपचयन (**पौधों में मंड/स्टार्च व मानव में ग्लाइकोजन रूप में संचय**)। मरुद्भिद पौधे **रात में `CO₂`** लेते हैं! जल प्रवेश से **द्वार कोशिका फूलती है व रंध्र खुलता है**।',
    },
    {
      en: '**Human Digestion (`5.2.4`)**: **Salivary Amylase** (`starch -> simple sugar`); **Oesophagus Peristalsis**; **Stomach Gastric Glands** (`HCl acidic pH for Pepsin; Mucus shields stomach wall`); **Herbivores have LONGER small intestine** (`cellulose!`) than Carnivores. In **Small Intestine** (`complete digestion`): **Liver Bile** (`alkaline medium + fat emulsification`) -> **Pancreas** (`Trypsin -> protein; Lipase -> fats`) -> **Intestinal Juice** (`Amino acids, Glucose, Fatty acids + Glycerol`) -> **Villi** absorb (`Colon` absorbs water). **Dental caries**: sugar bacteria acid softens enamel under dental plaque!',
      hi: '**मानव पाचन (`5.2.4`)**: **लार एमिलेस** (`मंड → शर्करा`); **क्रमाकुंचन**; **आमाशय जठर ग्रंथि**: `HCl` (अम्लीय माध्यम), **पेप्सिन** (प्रोटीन), **श्लेष्मा** (दीवार सुरक्षा)। **शाकाहारियों की क्षुद्रांत्र लंबी (`सेल्युलोज़`)** होती है। **क्षुद्रांत्र** में पूर्ण पाचन: **पित्त रस (`क्षारीय + वसा इमल्सीकरण`)**, **अग्न्याशय (`ट्रिप्सिन + लाइपेज`)**, व **आंत्र रस (`अमीनो अम्ल, ग्लूकोज़, वसा अम्ल+ग्लिसरॉल`)** → **दीर्घरोम (`Villi`)** अवशोषण व **बृहदांत्र** जल सोखती है।',
    },
    {
      en: '**Respiration & Fig 5.8 (`5.3`)**: First step (`ALL cells`): **Glucose (`6C`) -> Pyruvate (`3C`) in Cytoplasm**. Then: **(a) Yeast (No O₂)** -> Ethanol (`2C`) + `CO₂`; **(b) Muscle Lack O₂** -> **Lactic Acid (`3C`, causes cramps!)**; **(c) Mitochondria (`+ O₂`)** -> `CO₂ + H₂O + High ATP` (**`30.5 kJ/mol`** per terminal phosphate broken!). Fish breathe faster (`low dissolved O₂`). **Trachea Cartilage Rings** prevent collapse; **Alveoli = `~80 m²`**; **Haemoglobin** in RBCs avoids **3-year** `O₂` diffusion lag (`CO₂ travels dissolved in plasma`).',
      hi: '**श्वसन व चित्र 5.8 (`5.3`)**: **ग्लूकोज़ (`6C`) → पायरूवेट (`3C`) कोशिकाद्रव्य में**। आगे: **(1) यीस्ट (अनुपस्थिति)** = इथेनॉल (`2C`) + `CO₂`; **(2) पेशियाँ (अभाव)** = **लैक्टिक अम्ल (`3C`, क्रैम्प)**; **(3) माइटोकॉन्ड्रिया (उपस्थिति)** = `CO₂ + H₂O + अधिक ATP` (**`30.5 kJ/mol`**)। मछलियाँ तेज श्वास लेती हैं; कंठ में **उपास्थि वलय** मार्ग न चिपकने दें; कूपिका क्षेत्र **~`80 m²`**; बिना **हीमोग्लोबिन** के पैर तक विसरण में **`3 वर्ष`** लगेंगे!',
    },
    {
      en: '**Circulation & Plant Transport (`5.4`)**: **4 Chambers** (`Fish: 2, Single | Amphibian/Reptile: 3 | Bird/Mammal: 4 Double` for warm-blooded high energy!). **Ventricles** have thicker walls than atria. **Normal BP = `120/80 mmHg`** (`Sphygmomanometer`). **Veins have VALVES** (`no thick walls`); **Platelets** clot leaks; **Lymph (`low protein`) carries intestinal fats**. Plants: **Xylem** moves water/minerals **UP only** (`Night: Root Pressure; Day: Transpiration Pull`); **Phloem** (`sieve tubes + companion cells`) translocates **sucrose & amino acids BOTH ways via ATP**!',
      hi: '**परिसंचरण व पादप वहन (`5.4`)**: कोष्ठ: **मछली `2` (एकल) | उभयचर/सरीसृप `3` | पक्षी/स्तनधारी `4` (दोहरा)**। निलय भित्ति मोटी होती है। **रक्तदाब = `120/80 mmHg` (`स्फाईग्मोमैनोमीटर`)**; **शिराओं में वाल्व**; **प्लेटलेट्स थक्का**; **लसीका** छोटी आँत से वसा ढोती है। **जाइलम** (`केवल ऊपर ↑` — रात मूल दाब, दिन **वाष्पोत्सर्जन कर्षण**); **फ्लोएम** (`दोनों दिशा ↑↓` — **ATP द्वारा सुक्रोज व अमीनो अम्ल** स्थानांतरण)!',
    },
    {
      en: '**Excretion (`5.5`)**: Kidneys sit in **abdomen** (`1 pair kidney, 1 pair ureters, 1 bladder, 1 UNPAIRED urethra!`). **Nephron** (`Bowman’s capsule + Glomerulus`) creates **`180 L/day` initial filtrate**, selectively reabsorbing **glucose, amino acids, salts & water** -> **`1–2 L/day` urine**. **Artificial Kidney (`Hemodialysis`) removes urea cleanly by diffusion WITHOUT reabsorption**. Plants excrete via **`O₂`, Transpiration, Vacuoles, Falling leaves, & Resins/Gums in OLD Xylem (`+ root soil`)**.',
      hi: '**उत्सर्जन (`5.5`)**: वृक्क **उदर** में (`2 वृक्क, 2 मूत्रवाहिनी, 1 मूत्राशय, 1 मूत्रमार्ग`)। **नेफ्रॉन** प्रतिदिन **`180 L` प्रारंभिक निस्यंद** छानकर **ग्लूकोज़, अमीनो अम्ल, लवण व जल के चयनात्मक पुनरवशोषण** के बाद **केवल `1–2 L` मूत्र** निकालता है। **कृत्रिम वृक्क (`अपोहन`)** में **पुनरवशोषण नहीं होता**! पौधे `O₂`, वाष्पोत्सर्जन, रिक्तिका, पत्तियाँ व **पुराने जाइलम में रेज़िन-गोंद** रूप में अपशिष्ट त्यागते हैं।',
    },
  ],
  sections: [
    {
      id: 'nutrition-autotrophic-heterotrophic',
      number: '5.1–5.2.3',
      flowDiagramKey: 'c10-ch5-blueprint-mindmap',
      realImage: {
        imageUrl: '/ncert-notes/class10-bio-ch5/real/stomata-guard-cells-sem.webp',
        caption: {
          en: 'Scanning Electron Micrograph of Leaf Epidermal Stoma (`Fig 5.3`): Two kidney-shaped guard cells swell when absorbing water (`turgid`) to open the stomatal pore for `CO₂` exchange & transpiration.',
          hi: 'पत्ती की निचली सतह पर रंध्र का इलेक्ट्रॉन सूक्ष्मदर्शी दृश्य (`चित्र 5.3`): जल प्रवेश पर दो सेम आकार की द्वार कोशिकाएँ फूलकर गैसीय विनिमय व वाष्पोत्सर्जन हेतु रंध्र खोलती हैं।',
        },
      },
      title: {
        en: 'Molecular Life Maintenance (`5.1`), Photosynthesis, Desert Plants, Stomata Guard Cells & Amoeba/Paramoecium Nutrition',
        hi: 'आणविक जीवन अनुरक्षण (`5.1`), स्वपोषी प्रकाश संश्लेषण, मरुद्भिद रात `CO₂`, रंध्र एवं अमीबा-पैरामीशियम पोषण (`5.2.1–5.2.3`)',
      },
      summaryTag: {
        en: 'NCERT Pages 88–94 • Fig 5.1–5.5, Activities 5.1 (Chlorophyll) & 5.2 (KOH CO₂), Starch vs Glycogen & Soil Nitrogen',
        hi: 'NCERT पृ. 88–94 • चित्र 5.1–5.5, क्रियाकलाप 5.1–5.2, स्टार्च vs ग्लाइकोजन व मृदा से नाइट्रेट',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Why Invisible Molecular Movement Defines Life & Autotrophic Photosynthesis (`3 Events + Desert Plants`)',
            hi: '1. जीवन की पहचान (अदृश्य आणविक गति + विषाणु अपवाद) तथा प्रकाश संश्लेषण के 3 प्रमुख चरण',
          },
          content: {
            en: 'Visible motion (`running, chewing cud, plant growth`) isn’t enough to define life — living tissues require continuous **repair & maintenance (`अनुरक्षण`, `Group D Shift 11`)** driven by invisible **molecular movements (`अणुओं की गतियाँ`)** even during sleep! *(Note NCERT p.88: **Viruses show ZERO molecular motion until they infect a living cell** — sparking the living/non-living debate!)*. Because large multicellular organisms cannot reach all internal cells via slow simple diffusion (`In-Text p.89 Q1`), specialized **nutrition, respiration, transport, and excretion systems** evolved. In **==Autotrophic Nutrition (`स्वपोषी पोषण`, green plants & some bacteria)==**: **`6CO₂ + 12H₂O —Sunlight/Chlorophyll→ C₆H₁₂O₆ + 6O₂ + 6H₂O`**. Excess plant glucose is stored as **==Starch (`मंड`)==**, whereas excess human energy is stored as **==Glycogen (`ग्लाइकोजन`)==** (`NCERT p.91 & Group D Shift 17 PYQ!`). Memorize **ALL THREE Photosynthesis Events (`p.91`)**: **`(i)` Absorption of light energy by chlorophyll** (`inside chloroplasts, Fig 5.1`); **`(ii)` Conversion of light -> chemical energy AND splitting of water (`H₂O`) into Hydrogen & Oxygen** (`Group D Shift 3`); **`(iii)` Reduction of `CO₂` to Carbohydrates**. Crucially, steps need NOT happen sequentially right away: **==Desert plants absorb `CO₂` at NIGHT==**, prepare an intermediate acid compound, and let daytime chlorophyll use sunlight to complete sugar synthesis (`Group D Shift 37 PYQ!`). Don’t forget raw soil minerals (`water, N, P, Fe, Mg`): Nitrogen enters as **inorganic nitrates/nitrites** or organic compounds fixed by **bacteria** (`used for protein synthesis!`).',
            hi: 'केवल बाह्य गति (`दौड़ना, जुगाली, वृद्धि`) सजीव होने का पूर्ण प्रमाण नहीं है — सोते समय भी शरीर में टूट-फूट की मरम्मत व अनुरक्षण हेतु **==अदृश्य आणविक गतियाँ==** चलती रहती हैं (**विषाणु किसी कोशिका को संक्रमित करने से पहले आणविक गति नहीं दिखाते** — `पृ. 88`)! बहुकोशिकीय जीवों में सभी कोशिकाएँ पर्यावरण के सीधे संपर्क में न होने से साधारण विसरण अपर्याप्त रहता है (`पृ. 89 Q1`)। **==स्वपोषी पोषण (`सभी हरे पौधे व कुछ जीवाणु`)==**: प्रकाश संश्लेषण से बने कार्बोहाइड्रेट पौधों में **==मंड (`Starch`)==** तथा हमारे शरीर में **==ग्लाइकोजन==** के रूप में संचित होते हैं (`पृ. 91`)। **प्रकाश संश्लेषण की 3 घटनाएँ**: `(i)` क्लोरोफिल द्वारा प्रकाश ऊर्जा अवशोषण, `(ii)` प्रकाश ऊर्जा का रासायनिक ऊर्जा में रूपांतरण व **जल अणु का हाइड्रोजन और ऑक्सीजन में अपघटन** (`Group D Shift 3`), `(iii)` **`CO₂` का कार्बोहाइड्रेट में अपचयन**। **महत्वपूर्ण अपवाद**: **==मरुद्भिद (`Desert`) पौधे रात में `CO₂` लेते हैं==** व मध्यवर्ती उत्पाद बनाकर दिन में क्लोरोफिल से अंतिम उत्पाद बनाते हैं (`Group D Shift 37 PYQ`)! पौधे मिट्टी से जल संग **नाइट्रोजन (`अकार्बनिक नाइट्रेट/नाइट्राइट व जीवाणु-निर्मित कार्बनिक रूप`), फॉस्फोरस, लोहा व मैग्नीशियम** लेते हैं।',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Stomata Guard Cell Mechanics (`Act 5.1–5.2`), Heterotrophic Fungal/Parasitic Modes & Amoeba vs Paramoecium',
            hi: '2. रंध्र द्वार-कोशिका क्रिया (`क्र. 5.1–5.2`), विषमपोषी (कवक/अमरबेल) तथा अमीबा बनाम पैरामीशियम पोषण (`चित्र 5.5`)',
          },
          content: {
            en: 'Tiny leaf-surface pores (**==Stomata / रंध्र, Fig 5.3==**) handle most photosynthetic gas exchange (`alongside stem, root & leaf surfaces!`), though vast water also escapes through them. Guard cells open/close the pore **strictly by osmotic water flow (`RRB Tech 2024 Shift 11 PYQ`)**: **Water flows INTO guard cells -> cells SWELL -> stomatal pore OPENS**; **water exits -> guard cells SHRINK -> pore CLOSES**. Two landmark proofs (`p.91–93`): **`Act 5.1`** destarches a variegated **money-plant/croton** leaf for 3 days dark, puts in sunlight 6h, boils in water & **hot alcohol bath (`removes green chlorophyll cleanly!`)**, then dips in iodine -> **ONLY previously green spots turn blue-black** (`Chlorophyll needed!`); **`Act 5.2`** seals twin bell jars with **Vaseline** placing **Potassium Hydroxide (`KOH`)** beside Plant A (`KOH absorbs CO₂!`) -> leaves from the KOH jar fail iodine test (`CO₂ needed!`). Next contrast **Heterotrophic (`5.2.2–5.2.3`)**: **(a) External digestion & absorption**: **Bread moulds (`फफूँदी`), Yeast, Mushrooms** (`fungi`); **(b) Parasitic without killing host**: **Cuscuta (`अमरबेल`), Ticks (`किलनी`), Lice (`जूँ`), Leeches (`लीच`), Tapeworms (`फीताकृमि`)** (`NCERT p.94!` ); **(c) Unicellular contrast (`Fig 5.5`)**: **Amoeba** takes food across its whole cell via temporary finger-like extensions (**==Pseudopodia / कूटपाद==**) fusing into a **food vacuole (`खाद्य रिक्तिका`)**, whereas **==Paramoecium==** has a definite shape and sweeps food to a **specific mouth spot using ==Cilia (`पक्ष्याभ`)==**!',
            hi: 'पत्ती के **==रंध्र (`Stomata`, चित्र 5.3)==** अधिकांश गैस विनिमय करते हैं (पर जल की भी भारी हानि होती है, यद्यपि तना-जड़ सतह से भी विनिमय होता है)। **द्वार कोशिकाओं में जल अंदर जाने पर वे फूलकर रंध्र खोलती हैं, व सिकुड़ने पर रंध्र बंद करती हैं** (`Tech 2024 Shift 11`)। **`क्र. 5.1` (मनीप्लांट/क्रोटन की शबलित पत्ती)**: 3 दिन अँधेरे में मंड-रहित कर 6 घंटे धूप में रखें, उबालें व फिर **जल ऊष्मक में अल्कोहल में उबालकर क्लोरोफिल निकालें** — तनु आयोडीन से केवल हरे भागों में मंड (नीला-काला) सिद्ध होता है। **`क्र. 5.2`**: वैसलीन से सील बेलजार के पास रखा **पोटैशियम हाइड्रॉक्साइड (`KOH`) `CO₂` सोख लेता है** जिससे उस पौधे में मंड नहीं बनता! **विषमपोषी (`5.2.2–5.2.3`)**: (1) **शरीर बाहर विघटन कर अवशोषण**: फफूँदी, यीस्ट, मशरूम (`कवक`); (2) **बिना मारे परजीवी पोषण**: **अमरबेल (`Cuscuta`), किलनी, जूँ, लीच, फीताकृमि**; (3) **अमीबा** पूरे पृष्ठ से अस्थायी **==कूटपाद (`पादाभ`)==** द्वारा **खाद्य रिक्तिका** में पाचन करता है, जबकि **==पैरामीशियम==** निश्चित आकार वाला जीव है जो पूरी सतह के **==पक्ष्याभ (`Cilia`)==** की गति से भोजन एक **विशिष्ट स्थान** पर ग्रहण करता है!',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Double Stomata & Starch Exam Hacks (`Act 5.1–5.2`)',
            hi: 'रंध्र एवं मंड परीक्षण शॉर्टकट (`KOH + अल्कोहल बाथ`)',
          },
          content: {
            en: '**`3` Reasons behind Act 5.1–5.2 steps**: **3 days dark** = destarch leaf | **Boiling alcohol water bath** = dissolve chlorophyll cleanly without direct flame catching fire! | **`KOH` dish** = absorb **`CO₂`** | **Plant store = Starch** vs **Human store = Glycogen**!',
            hi: '1) **3 दिन अँधेरा** = पत्ती मंड-रहित | 2) **जल ऊष्मक में अल्कोहल** = क्लोरोफिल निकालना (सीधी आँच से आग न लगे!) | 3) **`KOH`** = बेलजार की **`CO₂` सोखना** | 4) पौधा संचय = **स्टार्च/मंड**, मानव संचय = **ग्लाइकोजन**!',
          },
        },
      ],
    },
    {
      id: 'human-digestion-respiration',
      number: '5.2.4–5.3',
      flowDiagramKey: 'c10-ch5-respiration-digestion-flow',
      svgLab: 'life-processes-system-lab',
      realImage: {
        imageUrl: '/ncert-notes/class10-bio-ch5/real/intestinal-villi-histology.webp',
        caption: {
          en: 'Microscopic Cross-Section of Small Intestinal Villi (`Sec 5.2.4`): Finger-like mucosal projections richly supplied with capillaries maximize surface area for absorbing glucose, amino acids & fatty acids.',
          hi: 'क्षुद्रांत्र के दीर्घरोम (`Villi`) की सूक्ष्मदर्शी काट: रुधिर वाहिकाओं के सघन जाल युक्त ये अँगुली जैसे प्रवर्ध पचे हुए भोजन के अवशोषण का सतही क्षेत्रफल अत्यधिक बढ़ा देते हैं।',
        },
      },
      title: {
        en: 'Human Alimentary Canal (`HCl, Bile, Trypsin, Villi, Plaque`) & Cellular Respiration (`Fig 5.8 Pyruvate, 30.5 kJ ATP, Alveoli 80 m²`)',
        hi: 'मानव पाचन नाल (`लार, HCl-पेप्सिन, पित्त, ट्रिप्सिन, दीर्घरोम, दंत क्षय`) व श्वसन (`चित्र 5.8 पायरूवेट पथ, ATP 30.5 kJ, कूपिका 80 m²`)',
      },
      summaryTag: {
        en: 'NCERT Pages 94–101 • Digestive Table, Cellulose Intestine Length, Limewater 5.4/Yeast 5.5/Fish 5.6, Cilia & Haemoglobin',
        hi: 'NCERT पृ. 94–101 • पाचन एंजाइम, शाकाहारी आंत्र लंबाई, क्र. 5.3–5.6, सिलिया-धूम्रपान व हीमोग्लोबिन 3 वर्ष तथ्य',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Every Human Digestive Organ & Gland (`Salivary Amylase -> Gastric HCl/Pepsin -> Bile/Pancreas -> Villi/Colon -> Dental Caries`)',
            hi: '1. मुख से गुदा तक मानव पाचन नाल, सभी ग्रंथियों के एंजाइम, क्षुद्रांत्र लंबाई एवं दंतक्षरण (`पृ. 94–96`)',
          },
          content: {
            en: 'Trace the **Alimentary Canal (`mouth to anus`, Fig 5.6)**: **(1) Mouth**: Teeth crush uniformly; **Salivary glands (`लाला ग्रंथि`)** secrete **==Salivary Amylase (`लार एमिलेस`)==** breaking complex **starch -> simple sugar (`demonstrated by Iodine color staying unchanged vs purple in Control Tube B — Salivary Activity p.94!`)**, mixed thoroughly by muscular tongue. **(2) Oesophagus**: Rhythmic **==Peristaltic movement (`क्रमाकुंचक गति`)==** pushes food smoothly through the entire gut. **(3) Stomach (`J-shaped muscular organ`)**: Wall **==Gastric glands (`जठर ग्रंथियाँ`)==** release three secretions (`RRB Tech 2024 Shift 3 PYQ!`): **Hydrochloric Acid (`HCl`)** (`creates acidic medium activating Pepsin + kills germs`), **==Pepsin==** (`protein digestion`), and **==Mucus (`श्लेष्मा`)==** (`shields stomach lining from acid — linked to acidity!`). Sphincter muscle regulates exit into small intestine. **(4) Small Intestine (`longest & coiled`)**: **Herbivores (`cow/deer`) need a MUCH LONGER small intestine to digest plant CELLULOSE**, whereas **Carnivores (`tiger`) eat easily-digested meat -> shorter small intestine** (`p.95!`). Inside small intestine (**site of COMPLETE carbohydrate, protein & fat digestion**): **Liver Bile Juice (`पित्तरस`, stored in gall bladder)** contains NO digestive enzymes yet makes acidic food **ALKALINE** (`for pancreatic enzymes`) AND **emulsifies large fat globules into tiny droplets (`ALP Shift 6`)**; **Pancreas** secretes **==Trypsin (`प्रोटीन`)==** & **==Lipase (`इमल्सीकृत वसा`)==**; **Intestinal juice (`आंत्र रस`)** finishes converting **Proteins -> Amino acids**, **Complex Carbs -> Glucose**, **Fats -> Fatty acids + Glycerol**. Inner wall finger-like **==Villi (`दीर्घरोम`)==** packed with blood capillaries vastly expand absorptive surface area (`Tech 2024 Shifts 2 & 11`), before **Large Intestine (`Colon`)** villi absorb excess water and anal sphincter removes feces. **Dental Caries Box (`p.96`)**: Bacteria digest leftover sugars into **acid** softening **enamel & dentine (`demineralization`)** trapped beneath sticky **dental plaque (`Blocks alkaline saliva from neutralizing acid!`)** — brush after meals!',
            hi: 'आहार नाल (`मुख से गुदा`, चित्र 5.6): **(1) मुखगुहा**: लार ग्रंथि का **==लार एमिलेस==** जटिल **मंड (`Starch`) को सरल शर्करा** में तोड़ता है (पृ. 94 क्रियाकलाप)। **(2) ग्रसिका**: **==क्रमाकुंचक गति (`Peristalsis`)==** भोजन को नीचे धकेलती है। **(3) आमाशय (`जठर ग्रंथियाँ`, Tech 2024 Shift 3 PYQ)**: **हाइड्रोक्लोरिक अम्ल (`HCl`)** (अम्लीय माध्यम बनाकर **पेप्सिन** सक्रिय करे), **==पेप्सिन==** (प्रोटीन पाचन), तथा **==श्लेष्मा (`Mucus`)==** (आमाशय की आंतरिक अस्तर की अम्ल से रक्षा)। अवरोधिनी पेशी से निकास। **(4) क्षुद्रांत्र (`सबसे लंबा कुंडलित भाग`, पूर्ण पाचन स्थल!)**: **घास खाने वाले शाकाहारियों को सेल्युलोज़ पचाने हेतु लंबी क्षुद्रांत्र** चाहिए, जबकि बाघ जैसे मांसाहारियों की छोटी होती है (`पृ. 95`)! **यकृत का पित्तरस (`पित्ताशय में संचित`, बिना एंजाइम!)** भोजन को **क्षारीय** बनाता व बड़ी वसा गोलिकाओं का **इमल्सीकरण** करता है (`ALP Shift 6`)। **अग्न्याशय** **==ट्रिप्सिन (`प्रोटीन`)==** व **==लाइपेज (`इमल्सीकृत वसा`)==** देता है। **आंत्र रस** प्रोटीन → **अमीनो अम्ल**, कार्बोहाइड्रेट → **ग्लूकोज़**, वसा → **वसा अम्ल व ग्लिसरॉल** में बदलता है। भीतरी **==दीर्घरोम (`Villi`)==** अवशोषण सतह बढ़ाते हैं; **बृहदांत्र (`Colon`)** अतिरिक्त जल सोखती है। **दंतक्षरण बॉक्स (`पृ. 96`)**: जीवाणु शर्करा से अम्ल बना **दंत-प्लाक** के नीचे इनैमल व डैंटीन गलाते हैं (प्लाक लार को अम्ल उदासीन करने से रोकता है)!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Pyruvate Three-Way Split (`Fig 5.8`), `ATP (30.5 kJ/mol)`, Cartilage Rings, Smoking Cilia, `80 m²` Alveoli & `3-Year` Diffusion',
            hi: '2. पायरूवेट के 3 पथ (`चित्र 5.8`), `ATP (30.5 kJ/mol)`, उपास्थि वलय, धूम्रपान-सिलिया, `80 m²` कूपिका व हीमोग्लोबिन (`5.3`)',
          },
          content: {
            en: 'Exhaled air carries far higher `CO₂` (`turns limewater milky fast — Act 5.4`) than room air; yeast fermentation of sugar/fruit juice also turns limewater milky releasing ethanol (`Act 5.5`). All living cells begin respiration by splitting **6-C Glucose -> two 3-C ==Pyruvate (`पायरूवेट`)== molecules in CYTOPLASM (`Tech 2024 Shift 17 PYQ`)** — then diverge into **3 NCERT pathways (`Fig 5.8`, *top CBT questions!*)**: **(1) Absence of O₂ (`Yeast`)**: -> **Ethanol (`2-C`) + `CO₂` + Low Energy** (*Anaerobic Fermentation*); **(2) Lack of O₂ (`Human Muscle Cells during sudden sprint`)**: -> **Lactic Acid (`3-C`) + Energy** (*Lactic acid buildup causes **Muscle Cramps**!* — `Tech Shift 3`); **(3) Presence of O₂ (`Mitochondria`, *NCERT Ex Q4!*)**: -> **`CO₂ + H₂O` + High Energy**. That released energy turns `ADP + Inorganic Phosphate -> ATP` (**Energy Currency of Cell**; breaking ATP’s terminal phosphate bond with water releases **`30.5 kJ/mol`**, powering muscle contraction, protein synthesis & nerve impulses!). Compare gas exchange: Plants swap `O₂/CO₂` via stomata/intercellular airspaces (`night: net CO₂ release; day: respiration CO₂ reused in photosynthesis -> net O₂ release!`). Aquatic **Fish (`Act 5.6`)** pump water forcibly past gills breathing **far faster** than land animals because dissolved `O₂` in water is tiny! Humans (`Fig 5.9`): Nostrils hair/mucus filter dust -> Throat/Trachea lined by **==Rings of Cartilage (`उपास्थि के वलय`)==** (`ensure air passage NEVER collapses!`) -> Bronchioles -> balloon-like **==Alveoli (`कूपिका`, ~`80 m²` total surface area!)==** surrounded by capillaries; diaphragm flattens & ribs lift on inhaling, while lungs ALWAYS keep a **residual volume (`अवशिष्ट आयतन`)** so `O₂/CO₂` transfer never runs out of time. **(Box p.100!)**: Tobacco **Smoking destroys protective respiratory ==Cilia==**, letting dust/smoke/germs reach lungs -> infection/cough/**Lung Cancer** (`Smokeless tobacco / gutka drives oral cancer!`). Finally **`p.101` Fact**: Without **Haemoglobin** (`respiratory pigment in RBCs` — whereas **`CO₂` is water-soluble so travels dissolved in blood!**), plain diffusion of one `O₂` molecule from lungs to your big toe would take **~`3 years`**!',
            hi: 'निःश्वास (`क्र. 5.4`) व यीस्ट किण्वन (`क्र. 5.5`) दोनों चूने के पानी को दूधिया कर `CO₂` सिद्ध करते हैं। सभी जीवों में पहला चरण: **कोशिकाद्रव्य में `6C` ग्लूकोज़ → `3C` ==पायरूवेट (`Pyruvate`)==** (`Tech Shift 17`)। आगे **चित्र 5.8 के 3 पथ**: **(1) अवायवीय (यीस्ट, `O₂` अनुपस्थित)** = इथेनॉल (`2C`) + `CO₂` + कम ऊर्जा; **(2) पेशी कोशिका (`O₂` अभाव)** = **लैक्टिक अम्ल (`3C`) + ऊर्जा (`पेशी क्रैम्प का कारण!`)**; **(3) वायवीय (माइटोकॉन्ड्रिया, `Ex Q4`)** = `CO₂ + H₂O` + प्रचुर **ATP** (`ADP + अकार्बनिक फॉस्फेट से निर्मित — अंतस्थ बंध टूटने पर **30.5 kJ/mol** ऊर्जा मिलती है!`)। पौधों में दिन में श्वसन-`CO₂` प्रकाश संश्लेषण में खप जाती (केवल `O₂` निकलती), पर रात में `CO₂` निष्कासन मुख्य होता है। मछलियाँ जल में कम घुली `O₂` कारण तेजी से क्लोम चलाती हैं (`क्र. 5.6`)। मानव श्वसन (`चित्र 5.9`): श्वासनली में **==उपास्थि वलय (`Rings of Cartilage`)==** नली को पिचकने से रोकते हैं; **धूम्रपान ऊपरी सिलिया (`Cilia`) नष्ट कर** फेफड़ों के कैंसर-संक्रमण का कारण बनता है (`पृ. 100 बॉक्स`); अंतस्थ गुब्बारे जैसी **==कूपिका (`Alveoli`)==** फैलाने पर **`~80 वर्ग मीटर`** क्षेत्र बनाती हैं; फेफड़ों में सदैव **अवशिष्ट आयतन** रहता है। **हीमोग्लोबिन (`RBC में`)** `O₂` ढोता (`विलेय CO₂ रुधिर में घुलकर जाती`); बिना हीमोग्लोबिन फेफड़े से पैर के अँगूठे तक विसरण में **`~3 वर्ष`** लगते (`पृ. 101`)!',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Digestive Enzyme & Pyruvate Super-Table Lock (`HCl -> Bile Neutralize -> Trypsin`)',
            hi: 'एंजाइम ट्रिक: “मा-पे-बा-ट्री-ला” + `30.5 kJ` व `80 m²` पक्के अंक',
          },
          content: {
            en: '**Amylase** (Mouth, Starch) -> **Pepsin** (Stomach + HCl, Protein) -> **Bile** (`Alkaline + Fat Emulsifier`, Liver, NO enzyme!) -> **Trypsin** (`Protein`) + **Lipase** (`Fat`, Pancreas). Numbers: **`ATP = 30.5 kJ/mol` | `Alveoli = 80 m²` | `No Haemoglobin lag = 3 years`**!',
            hi: '**मुख** (`एमिलेस`) → **आमाशय** (`HCl + पेप्सिन`) → **यकृत पित्त** (`क्षारीय व वसा इमल्सीकरण`, कोई एंजाइम नहीं!) → **अग्न्याशय** (`ट्रिप्सिन + लाइपेज`) → **क्षुद्रांत्र दीर्घरोम**। प्रमुख NCERT आँकड़े: **`ATP 30.5 kJ/mol` | कूपिका `80 m²` | विसरण समय `3 वर्ष`**!',
          },
        },
      ],
    },
    {
      id: 'human-plant-transportation',
      number: '5.4',
      flowDiagramKey: 'c10-ch5-heart-plant-transport',
      realImage: {
        imageUrl: '/ncert-notes/class10-bio-ch5/real/xylem-phloem-vascular-bundle.webp',
        caption: {
          en: 'Stained Plant Vascular Bundle (`Sec 5.4.2`): Wide lignified Xylem vessels (`mineral-water conduction upward via transpiration pull`) paired alongside living sieve-tube Phloem (`ATP-driven bidirectional sucrose translocation`).',
          hi: 'पादप संवहन बंडल की सूक्ष्मदर्शी काट (`भाग 5.4.2`): चौड़ी जाइलम वाहिकाएँ (जल व खनिज का ऊर्ध्व वहन) एवं साथ जुड़ी जीवित फ्लोएम चालनी नलिकाएँ (ATP ऊर्जा से भोजन का द्विदिशिक स्थानांतरण)।',
        },
      },
      title: {
        en: '4-Chambered Double Circulation (`BP 120/80, Lymph, Platelets`), Vertebrate Hearts & Plant Transport (`Xylem vs ATP Phloem`)',
        hi: 'दोहरा परिसंचरण (`4-कोष्ठीय हृदय, 120/80 रक्तचाप, लसीका`), कशेरुकी हृदय एवं पादप परिवहन (`जाइलम बनाम ATP फ्लोएम`)',
      },
      summaryTag: {
        en: 'NCERT Pages 101–106 • Activity 5.7–5.8, Ventricle Wall Thickness, Arteries vs Veins, Root Pressure vs Transpiration Pull',
        hi: 'NCERT पृ. 101–106 • क्रियाकलाप 5.7–5.8, निलय भित्ति, धमनी-शिरा अंतर व फ्लोएम सक्रिय परिवहन',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Blood, 4-Chamber Double Circulation, `120/80` Blood Pressure, Valves & Lymph (`Sec 5.4.1`)',
            hi: '1. रक्त (प्लाज्मा/प्लेटलेट्स), 4-कोष्ठीय हृदय, दोहरा परिसंचरण, रक्तचाप `120/80`, धमनी-शिरा व लसीका (`5.4.1`)',
          },
          content: {
            en: 'Blood = fluid matrix **==Plasma==** (`transports dissolved food, CO₂ & nitrogenous wastes, salts` — `Group D Shift 32`) + suspended cells (`RBCs carry O₂ via haemoglobin`). Inside our fist-sized muscular **Heart (`Fig 5.10–5.11`)**: **Left Atrium** relaxes receiving **oxygenated blood from lungs via Pulmonary Vein** (`Group D Shift 44`) -> contracts into **Left Ventricle** -> pumps out through **Aorta** to the whole body! Simultaneously, deoxygenated blood from body (`via Vena Cava`) fills **Right Atrium** -> **Right Ventricle** -> **Pulmonary Artery -> Lungs**. **Three critical CBT rules (`p.102–104`)**: **(1) Ventricles (`especially Left`) have MUCH thicker muscular walls than Atria** because ventricles pump blood at high pressure throughout body organs (`ALP 2025 & Group D Shift 2`), while **valves prevent backflow**; **(2) Vertebrate chamber logic**: **Mammals & Birds (`4 chambers`, Double Circulation — blood enters heart TWICE per full loop)** keep `O₂` & `CO₂` blood strictly separate to generate high energy maintaining **constant warm body temperature**, **Amphibians & most Reptiles (`3 chambers`)** allow slight mixing, and **Fish (`2 chambers`, Single Circulation)** pump blood straight from gills to body; **(3) Arteries (`thick elastic walls, high pressure away from heart, NO valves`) vs Veins (`thin walls, carry toward heart WITH VALVES for one-way flow!`) vs Capillaries (`1-cell-thick exchange vessels`)**. **Normal Blood Pressure (`Sphygmomanometer`)** = **`120 mmHg` Systolic (`प्रकुंचन`) / `80 mmHg` Diastolic (`अनुशिथिलन`)** (`arteriole constriction raises resistance -> Hypertension`). **Platelets** plug leaks to prevent pressure drop; **==Lymph (`लसीका` / tissue fluid)==** escapes capillary pores (`colorless, less protein than plasma`), carries **digested & absorbed Fat from Small Intestine (`NCERT p.104`!)**, and drains excess fluid back into big veins.',
            hi: 'रक्त = तरल **==प्लाज्मा==** (`विलेय भोजन, CO₂ व नाइट्रोजनी अपशिष्ट वहन`, `Group D Shift 32`) + कणिकाएँ (`RBC + प्लेटलेट्स`)। **मुट्ठी आकार हृदय (`चित्र 5.10–5.11`)**: **फुफ्फुसीय शिरा** फेफड़ों से **`O₂`-युक्त रक्त बाएँ अलिंद** में लाती है (`Group D Shift 44`) → **बायाँ निलय** इसे **महाधमनी** से शरीर में भेजता है; वहीं **महाशिरा** से `CO₂`-युक्त रक्त **दाएँ अलिंद → दाएँ निलय → फुफ्फुसीय धमनी** से फेफड़ों में जाता है। **प्रमुख नियम**: **(1) निलय की पेशीय भित्ति अलिंद से मोटी होती है** क्योंकि इन्हें उच्च दाब पर रक्त पंप करना होता है (`ALP 2025`), तथा **वाल्व विपरीत प्रवाह रोकते हैं**। **(2) कोष्ठ अंतर**: **पक्षी व स्तनधारी (`4 कोष्ठ`, दोहरा परिसंचरण)** स्थिर शरीर ताप बनाए रखने हेतु `O₂` व `CO₂` रक्त को पूर्णतः पृथक रखते हैं; **उभयचर व अधिकांश सरीसृप (`3 कोष्ठ`)**; **मछलियाँ (`2 कोष्ठ`, एकल चक्र)**। **(3) धमनी** (मोटी लचीली भित्ति, वाल्व नहीं) बनाम **शिरा** (पतली भित्ति, **एकदिशिक प्रवाह हेतु वाल्व युक्त!**) बनाम **केशिका** (`1-कोशिकीय मोटी विनिमय दीवार`)। **सामान्य रक्तदाब (`स्फाईग्मोमैनोमीटर`) = `120 mm` प्रकुंचन / `80 mm` अनुशिथिलन (`पारा`)**; धमनिका सिकुड़न से **अति तनाव (`Hypertension`)**। **प्लेटलेट्स** रक्त का थक्का जमाती हैं; रंगहीन व अल्प-प्रोटीन **==लसीका (`Lymph`)== क्षुद्रांत्र द्वारा अवशोषित पची वसा का वहन** करती है (`पृ. 104`)!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Plant Transport (`5.4.2`): Dead Xylem (`Root Pressure Night + Transpiration Pull Day`) vs ATP Phloem Translocation',
            hi: '2. पादप परिवहन (`5.4.2`): जाइलम (`रात्रि मूल दाब + दिन वाष्पोत्सर्जन कर्षण`) बनाम फ्लोएम (`ATP सक्रिय स्थानांतरण`)',
          },
          content: {
            en: 'Because plants stay fixed (`no locomotion`) and have many dead cells, their energy need is low and transport runs slower along two **independent vascular tubes**:\n• **==Xylem (`जाइलम` — Tracheids & Vessels, UNIDIRECTIONAL upward only ↑)==**: Moves **soil water + inorganic minerals**. Two forces drive it (`physical forces — NO ATP spent at xylem tubes!`): **(i) Root Pressure** — root cells actively absorb soil ions creating a concentration difference -> soil water diffuses continuously into root xylem (`especially effective at NIGHT!`); **(ii) ==Transpiration Pull (`वाष्पोत्सर्जन कर्षण`, Act 5.8 potted plant under polythene, Fig 5.12)==** — daytime evaporation through open leaf stomata creates a suction pull drawing water smoothly up tallest trees (`+ helps regulate plant temperature!` — `Group D Shift 9 & Tech Shift 8`).\n• **==Phloem (`फ्लोएम` — Sieve tubes + Companion cells, BIDIRECTIONAL up & down ↑↓)==**: Conducts **==Translocation (`स्थानांतरण`)==** of soluble **photosynthesis products (`Sucrose`) + Amino acids** (`ALP Shift 6, Group D Shift 18 & Tech Shift 18`) to root storage organs, fruits, seeds & growing regions (`e.g. root sugar pushed UP to spring buds! — Group D Shift 16`). Unlike Xylem, **Phloem loading is an ACTIVE process spending ==`ATP` energy==** (`Group D Shift 13`) -> raises osmotic pressure inside phloem -> water rushes in pushing nutrients toward lower-pressure sinks (`Group D Shift 28`)!',
            hi: 'पौधे प्रचलन नहीं करते व अनेक मृत ऊतक रखते हैं, अतः इनमें दो **स्वतंत्र संवहन नलिकाएँ** (`Group D Shift 26`) कार्य करती हैं:\n• **==जाइलम (`वाहिनिका + वाहिका`, केवल ऊपर की ओर ↑)==**: मृदा से **जल व खनिज लवण** ले जाता है (कोई ATP खर्च नहीं!)। **(1) मूल दाब (`रात्रि में विशेष प्रभावी`)**: जड़ द्वारा आयन लेने से सांद्रता अंतर बनता है जिससे मिट्टी से जल खिंचता है; **(2) ==वाष्पोत्सर्जन कर्षण (`दिन में प्रमुख प्रेरक बल`, चित्र 5.12, क्र. 5.8)==**: रंध्रों से जल वाष्प के रूप में निकलने (`वाष्पोत्सर्जन`) से ऊपर की ओर **चूषण खिंचाव** बनता है व ताप नियमन भी होता है (`Group D Shift 9 व Tech Shift 8`)।\n• **==फ्लोएम (`चालनी नलिका व साथी कोशिका`, दोनों दिशाएँ ↑↓)==**: पत्तियों के विलेय **प्रकाश संश्लेषण उत्पादों (`सुक्रोज`) व अमीनो अम्लों** का **==स्थानांतरण (`Translocation`)==** जड़ों, फलों, बीजों व बसंत की कलिकाओं तक करता है (`ALP Shift 6 & Group D Shift 16`)। जाइलम के विपरीत, **फ्लोएम में सुक्रोज ==`ATP` ऊर्जा उपयोग== से स्थानांतरित होता है (`सक्रिय परिवहन`)**, जिससे परासरण दाब बढ़ता है व जल प्रवेश कर दाब से भोजन को कम-दाब ऊतकों तक पहुँचाता है (`Group D Shift 13, 28`)!',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Vessel Exception & Plant Transport Polarity Trick (`A-W-V` & `Xy-Up / Phlo-Both ATP`)',
            hi: 'धमनी-शिरा अपवाद एवं जाइलम-फ्लोएम ध्रुवीयता सूत्र',
          },
          content: {
            en: '1) **Vein has VALVES (`V` -> `V`)** carrying low-pressure blood back to heart (`except Pulmonary Vein carries O₂-rich blood!`). 2) **Artery (`A` -> Away from heart)** thick-walled (`Pulmonary Artery exception carries CO₂!`). 3) **Xylem = ↑ Up ONLY (Water, Transpiration Pull)** | **Phloem = ↑↓ Both ways (Food/Amino acids, needs `ATP`)**!',
            hi: '1) **शिरा = `V` से `Valves` युक्त** (कम दाब; अपवाद **फुफ्फुसीय शिरा `O₂`** लाती है); **धमनी** = मोटी भित्ति (`फुफ्फुसीय धमनी CO₂` ले जाती है)। 2) **जाइलम = केवल ऊपर (`जल`, वाष्पोत्सर्जन)** | **फ्लोएम = ऊपर+नीचे दोनों (`भोजन/सुक्रोज`, `ATP` खर्च)**!',
          },
        },
      ],
    },
    {
      id: 'excretion-human-plants',
      number: '5.5',
      flowDiagramKey: 'c10-ch5-excretion-nephron-plant',
      realImage: {
        imageUrl: '/ncert-notes/class10-bio-ch5/real/kidney-glomerulus-sem.webp',
        caption: {
          en: 'Scanning Electron Micrograph (`1000x`) of a Renal Glomerulus vascular tuft inside Bowman’s capsule filtering ~`180 L/day` blood filtrate.',
          hi: 'वृक्काणु (नेफ्रॉन) के केशिकागुच्छ (`Glomerulus`) का 1000x इलेक्ट्रॉन सूक्ष्मदर्शी दृश्य: बोमन संपुट के भीतर रक्त से यूरिया व प्रारंभिक निस्यंद (`180 L/दिन`) छानने वाला पतली केशिकाओं का गुच्छ।',
        },
      },
      title: {
        en: 'Human Excretion (`Abdominal Kidneys, Nephron 180L→1–2L, Dialysis`) & Plant Waste Methods (`O₂, Leaves, Old Xylem Resins`)',
        hi: 'मानव उत्सर्जन (`वृक्क, नेफ्रॉन 180L→1–2L चयनात्मक पुनरवशोषण, अपोहन`) एवं पादप उत्सर्जन युक्तियाँ + अंगदान (`5.5`)',
      },
      summaryTag: {
        en: 'NCERT Pages 107–110 • Fig 5.13–5.14, Single vs Paired Urinary Parts, Hemodialysis Missing Step & Organ Donation Box',
        hi: 'NCERT पृ. 107–110 • चित्र 5.13–5.14, युग्मित बनाम एकल अंग, कृत्रिम वृक्क अपोहन व अंगदान',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Human Urinary System (`Pair Kidneys/Ureters, 1 Bladder/Urethra`), Nephron Selective Reabsorption & Dialysis Contrast',
            hi: '1. मानव उत्सर्जन अंग (`उदर स्थिति व 2-2-1-1 नियम`), नेफ्रॉन (`180 L → 1–2 L`) तथा कृत्रिम वृक्क अपोहन में मुख्य अंतर',
          },
          content: {
            en: 'Metabolic chemical reactions leave behind toxic nitrogenous wastes (**Urea, Uric acid**) alongside `CO₂` (`removed by lungs`). Unicellular organisms diffuse wastes straight from cell surface, while Humans (`Fig 5.13`) use: **1 Pair Kidneys** (`located in **ABDOMEN** on either side of backbone — NOT thoracic! *RRB Tech 2024 Shift 10 trap!*) -> **1 Pair Ureters** -> **1 Urinary Bladder** (`muscular, under **nervous control** so we hold/control urination!`) -> **1 Urethra (`UNPAIRED` — Tech Shift 5 & 14 PYQ!)**. Each kidney packs millions of filtration units called **==Nephrons (`वृक्काणु`, Fig 5.14)==**: **(1)** Thin-walled capillary cluster **==Glomerulus (`केशिकागुच्छ`)==** nestled inside cup-shaped **==Bowman’s Capsule (`बोमन संपुट`)==** filters blood -> initial filtrate holds wastes plus vital **glucose, amino acids, salts & abundant water**; **(2)** As filtrate flows down the coiled tubule, **==Selective Reabsorption (`चयनात्मक पुनरवशोषण`, ALP CBT Shift 5)==** recovers glucose, amino acids, salts and needed water! **Stunning NCERT Data (`p.108`)**: Initial daily filtrate = **`180 Litres/day`**, yet actual urine excreted = **ONLY `1–2 Litres/day`** (`reabsorption adjusts with body hydration & dissolved waste load!`, *In-Text p.109 Q3*). **Artificial Kidney / ==Hemodialysis (`अपोहन`)== Box**: Semi-permeable tubes immersed in isotonic **dialyzing fluid (`same osmotic pressure as blood, zero nitrogen waste`)** draw urea out by diffusion before pumping clean blood back — **Key NCERT Difference**: **==NO reabsorption occurs in an artificial kidney==**! *(Organ Donation Box p.109: cornea, kidneys, heart, liver, pancreas, lungs, intestine & bone marrow can be donated irrespective of age/gender after brain death, and partial kidney/liver/lung while alive!)*',
            hi: 'रक्त से **यूरिया या यूरिक अम्ल** जैसे नाइट्रोजनी वर्ज्य हटाना **उत्सर्जन** है (`CO₂ फेफड़ों से निकलती है`)। **मानव उत्सर्जन तंत्र (`चित्र 5.13`)**: **1 जोड़ा वृक्क (`उदर` में रीढ़ के दोनों ओर — वक्षीय नहीं, Tech Shift 10 PYQ!)**, **1 जोड़ा मूत्रवाहिनी**, **1 पेशीय मूत्राशय (`तंत्रिका नियंत्रण` में होने से मूत्र निकासी नियंत्रित रहती है!)**, व **1 मूत्रमार्ग (`अयुग्मित` — Tech Shift 5 व 14 PYQ!)**। प्रत्येक वृक्क में लाखों **==वृक्काणु (`नेफ्रॉन`, चित्र 5.14)==** होते हैं: कप रूपी **==बोमन संपुट==** के भीतर पतली भित्ति वाला **==केशिकागुच्छ (`Glomerulus`)==** रक्त छानकर प्रारंभिक निस्यंद (`ग्लूकोज़, अमीनो अम्ल, लवण व जल सहित`) बनाता है; फिर नलिका में आगे बढ़ने पर **==चयनात्मक पुनरवशोषण==** द्वारा आवश्यक ग्लूकोज़, अमीनो अम्ल, लवण व शरीर की जरूरत अनुसार जल वापस सोख लिए जाते हैं (`ALP Shift 5`)! **महत्वपूर्ण आँकड़े (`पृ. 108`)**: स्वस्थ वयस्क में प्रतिदिन **`180 लीटर` प्रारंभिक निस्यंद** बनता है पर पुनरवशोषण कारण **केवल `1–2 लीटर` मूत्र** निकलता है! **कृत्रिम वृक्क (`अपोहन / Dialysis`)**: अर्धपारगम्य नलिकाओं से रक्त को सम-परासारी अपोहन द्रव में गुजारकर विसरण द्वारा यूरिया निकाला जाता है — परंतु **==अपोहन यंत्र में कोई पुनरवशोषण नहीं होता==**!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Plant Excretion (`Sec 5.5.2`): Five Smart Strategies Including Vacuoles & Old Xylem Resins/Gums',
            hi: '2. पादपों में उत्सर्जन के 5 अनूठे तरीके (`O₂/वाष्पोत्सर्जन, रिक्तिका, गिरती पत्तियाँ, रेज़िन-गोंद व मृदा`)',
          },
          content: {
            en: 'Plants lack kidneys or bladders — instead **NCERT Sec 5.5.2 (`p.108`)** lists **FIVE distinct plant excretion tactics (`directly asked verbatim in RRB Tech 2024 Shift 9!`)**: **(1)** Excess **Oxygen (`O₂`) from photosynthesis** (`and respiration CO₂`) released through stomata (`plus excess **water** via **Transpiration**`); **(2)** Many plant tissues contain dead cells so wastes pack safely inside **Cellular Vacuoles (`कोशिकीय रिक्तिका`)**; **(3)** Wastes concentrate inside **old leaves that drop off (`गिरने वाली पत्तियाँ`)**; **(4)** Sticky wastes are stored permanently as **==Resins and Gums (`रेज़िन तथा गोंद`) especially inside OLD XYLEM==**; **(5)** Plants also excrete minor wastes directly into surrounding **soil** around roots.',
            hi: 'पौधे जंतुओं से भिन्न **5 स्मार्ट विधियों** से अपशिष्ट हटाते हैं (`RRB Tech 2024 Shift 9 सीधा बहु-कथन PYQ`): **(1)** प्रकाश संश्लेषण जनित **अतिरिक्त `O₂`**, श्वसन `CO₂`, तथा अतिरिक्त जल का **वाष्पोत्सर्जन (`Transpiration`)** द्वारा त्याग; **(2)** कोशिकीय **रिक्तिका (`Vacuole`)** में अपशिष्ट संचय; **(3)** पुरानी **गिरती पत्तियों** में संचित कर झाड़ना; **(4)** **==रेज़िन (`Resins`) तथा गोंद (`Gums`)== रूप में विशेषतः ==पुराने जाइलम (`Old Xylem`)== में संचय**; तथा **(5)** जड़ों के माध्यम से कुछ अपशिष्ट सीधे **आस-पास की मृदा में उत्सर्जित** करना!',
          },
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      title: {
        en: 'TRAP 1: Plant Glucose Reserve = STARCH vs Human Reserve = GLYCOGEN; Desert Plants Absorb `CO₂` at NIGHT!',
        hi: 'जाल 1: पौधों में ऊर्जा संचय = स्टार्च (`मंड`) पर मानव में = ग्लाइकोजन; मरुद्भिद रात में `CO₂` सोखते हैं!',
      },
      wrong: {
        en: 'Saying plants store glycogen or thinking desert cacti open stomata in blazing noon sun for `CO₂`.',
        hi: 'पौधों में ग्लाइकोजन संचय बताना या सोचना कि मरुस्थलीय पौधे केवल दिन में `CO₂` लेते हैं।',
      },
      right: {
        en: '**NCERT p.91**: Plants store surplus carbs as **Starch**, animals/humans as **Glycogen**. And **Desert plants take in `CO₂` at NIGHT** (`closing stomata by day to save water!`), holding an intermediate until sunlit chlorophyll converts it (`Group D Shift 37`).',
        hi: 'पौधे **मंड (`Starch`)** व जंतु **ग्लाइकोजन** संचित करते हैं। मरुद्भिद पौधे दिन में जल हानि बचाने को **रात में `CO₂` लेकर** मध्यवर्ती यौगिक बनाते हैं और दिन में सूर्यप्रकाश से शर्करा बनाते हैं (`Group D PYQ`)!',
      },
    },
    {
      title: {
        en: 'TRAP 2: Bile Juice Contains ZERO Digestive Enzymes Yet Is Vital (`Alkaline pH + Emulsifies Fats`) + Longer Herbivore Gut!',
        hi: 'जाल 2: यकृत के पित्तरस में कोई एंजाइम नहीं होता — फिर भी यह अम्ल को क्षारीय व वसा का इमल्सीकरण करता है!',
      },
      wrong: {
        en: 'Picking Bile Juice as a fat-digesting "enzyme" (`that is Pancreatic LIPASE!`) OR saying tigers have longer intestines than cows.',
        hi: 'पित्तरस को एंजाइम मान लेना (वसा पाचन एंजाइम लाइपेज है!) या बाघ की क्षुद्रांत्र को गाय से लंबी बताना।',
      },
      right: {
        en: '**Liver Bile** (`stored in Gall Bladder`) turns stomach chyme **alkaline** (`activating Trypsin`) and **emulsifies fat globules (`physical breakdown!`, `ALP Shift 6`)**. Actual enzymatic digestion of fats is done by **Lipase**. Also **Herbivores have MUCH longer small intestines (`Cellulose digestion!`)** than carnivores (`p.95`)!',
        hi: 'पित्तरस में पाचक एंजाइम नहीं होते; यह केवल **भोजन को क्षारीय** कर **वसा गोलिकाओं का इमल्सीकरण (`छोटी गोलियाँ बनाना`)** करता है (`एंजाइम पाचन लाइपेज करता है!`)। **शाकाहारियों की क्षुद्रांत्र सेल्युलोज़ पाचन कारण लंबी** होती है!',
      },
    },
    {
      title: {
        en: 'TRAP 3: Yeast Makes Ethanol (`2-C`) + `CO₂`, Muscle Makes Lactic Acid (`3-C`), Mitochondria Makes `CO₂ + H₂O` (`Pyruvate = 3-C`!)',
        hi: 'जाल 3: यीस्ट (`इथेनॉल 2C`) बनाम पेशी (`लैक्टिक अम्ल 3C`) बनाम माइटोकॉन्ड्रिया (`CO₂ + H₂O + उच्च ATP`, चित्र 5.8)!',
      },
      wrong: {
        en: 'Confusing `CO₂` as being released during muscle lactic-acid buildup OR putting pyruvate breakdown in Chloroplasts.',
        hi: 'मांसपेशियों में लैक्टिक अम्ल संग `CO₂` निकलना मान लेना या पायरूवेट ऑक्सीकरण हरितलवक में चुनना (`Tech Shift 13`)!',
      },
      right: {
        en: '**Glycolysis in Cytoplasm** (`All life`) turns `6-C` Glucose -> `3-C` **Pyruvate**. Only **Yeast fermentation (`No O₂`)** yields `2-C` Ethanol + `CO₂`; **Muscle lack of `O₂`** produces `3-C` **Lactic Acid ONLY** (`causes cramps, no CO₂!`); **Aerobic Mitochondria (`Ex Q4`)** produces `CO₂ + H₂O + ATP (30.5 kJ/mol)`!',
        hi: 'कोशिकाद्रव्य में `6C` ग्लूकोज़ → `3C` **पायरूवेट**। यीस्ट में `2C` इथेनॉल + `CO₂`; **पेशियों में केवल `3C` लैक्टिक अम्ल** (कोई `CO₂` नहीं!); तथा **माइटोकॉन्ड्रिया (`Ex Q4`)** में `CO₂ + H₂O + ATP (30.5 kJ/mol)` बनता है!',
      },
    },
    {
      title: {
        en: 'TRAP 4: Pulmonary Artery & Vein Break the Rule! Plus Phloem (`ATP, Bidirectional`) vs Xylem (`Physical, Up Only`)',
        hi: 'जाल 4: फुफ्फुसीय धमनी व शिरा अपवाद! एवं फ्लोएम (`ATP + द्विदिशिक`) बनाम जाइलम (`ऊपर मात्र`)',
      },
      wrong: {
        en: 'Assuming ALL arteries carry oxygenated blood and ALL veins carry deoxygenated blood, OR thinking Phloem only moves down.',
        hi: 'सभी धमनियों को शुद्ध (`O₂`) रक्त वाहक समझना या सोचना कि फ्लोएम केवल नीचे भोजन भेजता है।',
      },
      right: {
        en: '**Pulmonary ARTERY** carries **deoxygenated** blood from RV -> Lungs; **Pulmonary VEIN** carries **OXYGENATED** blood from Lungs -> LA (`Group D Shift 44`). In plants, **Xylem** moves water **UP ONLY**, whereas **Phloem translocates UP & DOWN (`spring root -> buds!`) actively spending ATP**!',
        hi: '**फुफ्फुसीय धमनी** दाएँ निलय से `CO₂`-रक्त फेफड़ों में ले जाती है, व **फुफ्फुसीय शिरा** `O₂`-रक्त बाएँ अलिंद में लाती है! **फ्लोएम `ATP` ऊर्जा से ऊपर व नीचे दोनों ओर** (`बसंत में जड़ → कली`) भोजन भेजता है!',
      },
    },
    {
      title: {
        en: 'TRAP 5: Kidneys Sit in ABDOMEN (`Single Bladder & Single Urethra`), & Dialysis Has NO Reabsorption (`Unlike Nephron 180L→1–2L!`)',
        hi: 'जाल 5: वृक्क उदर में (`वक्ष में नहीं!`), मूत्रमार्ग केवल `1` (अयुग्मित), तथा अपोहन (`Dialysis`) में पुनरवशोषण नहीं होता!',
      },
      wrong: {
        en: 'Saying kidneys sit in thoracic region (`false!`), saying Urethra is paired (`false!`), or saying Dialysis performs reabsorption (`false!`).',
        hi: 'वृक्क को वक्षीय क्षेत्र में या मूत्रमार्ग को युग्मित (2) समझना, या अपोहन में पुनरवशोषण होना मान लेना।',
      },
      right: {
        en: '**NCERT p.107–108**: Kidneys = pair in **abdomen** (`Tech Shift 10`); Ureters = pair (`2`); Bladder = **unpaired (`1`)**; **Urethra = UNPAIRED (`1`)** (`Tech Shift 14`). Healthy nephrons filter **`180 L`** and selectively **reabsorb ~99%**, whereas **Hemodialysis does ZERO reabsorption (`only urea diffusion`)**!',
        hi: 'वृक्क **उदर** में (`2`), मूत्रवाहिनी `2`, पर **मूत्राशय (`1`) व मूत्रमार्ग (`1`) अयुग्मित** होते हैं! नेफ्रॉन में `180 L` से `99%` **पुनरवशोषण** होता है, जबकि **कृत्रिम वृक्क (`अपोहन`) में कोई पुनरवशोषण नहीं होता (`पृ. 108`)**!',
      },
    },
  ],
  pioneers: [
    {
      name: { en: 'William Harvey (`Double Circulation Discoverer`)', hi: 'विलियम हार्वे (`दोहरा रक्त परिसंचरण खोजकर्ता`)' },
      country: { en: 'England (`Sec 5.4.1 Cardiac Cycle Basis`)', hi: 'इंग्लैंड (NCERT भाग 5.4.1 आधार)' },
      badge: { en: 'Closed Double Heart Loop', hi: 'बंद दोहरा परिसंचरण तंत्र' },
      fact: {
        en: 'Proved the heart pumps blood in a closed double circuit through arteries (`high pressure`) and valved veins returning to separate atria.',
        hi: 'सिद्ध किया कि हृदय एक बंद परिपथ में धमनियों व वाल्व-युक्त शिराओं द्वारा रक्त को पूरे शरीर में पंप करता है।',
      },
    },
    {
      name: { en: 'Willem Kolff (`Artificial Kidney / Dialysis Pioneer`)', hi: 'विलेम कोल्फ (`कृत्रिम वृक्क / अपोहन जनक`)' },
      country: { en: 'Netherlands (`Sec 5.5.1 Box`)', hi: 'नीदरलैंड्स (NCERT पृ. 108 बॉक्स)' },
      badge: { en: 'Hemodialysis Machine', hi: 'रक्त अपोहन (डायलिसिस) तकनीक' },
      fact: {
        en: 'Pioneered semi-permeable dialysis tubing filtering nitrogenous urea out of renal-failure blood via isotonic diffusion (`without nephron reabsorption`).',
        hi: 'अर्धपारगम्य झिल्ली नलिकाओं द्वारा रक्त से यूरिया को सम-परासारी अपोहन द्रव में छानने की कृत्रिम वृक्क तकनीक विकसित की।',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-stomata-sem',
      figRef: { en: 'NCERT Fig 5.3 (`Open Stoma & Guard Cells SEM`)', hi: 'NCERT चित्र 5.3 — द्वार कोशिकाएँ व रंध्र छिद्र (SEM)' },
      title: {
        en: 'Electron Micrograph of Stomatal Pore: Swollen Bean-Shaped Guard Cells Open Pore for `CO₂` Entry & Transpiration',
        hi: 'पत्ती रंध्र का SEM दृश्य: जल प्रवेश पर फूली हुई द्वार कोशिकाएँ प्रकाश संश्लेषण हेतु `CO₂` विनिमय व वाष्पोत्सर्जन द्वार खोलती हुई',
      },
      imageUrl: '/ncert-notes/class10-bio-ch5/real/stomata-guard-cells-sem.webp',
      hotspots: [
        {
          en: 'Guard cells contain chloroplasts (`Fig 5.1/5.3`); water intake opens the pore (`turgid`), water loss closes it (`flaccid`).',
          hi: 'द्वार कोशिकाओं में हरितलवक होते हैं; जल भीतर जाने पर रंध्र खुलता व बाहर जाने पर बंद होता है (`Tech 2024 Shift 11`)।',
        },
      ],
    },
    {
      id: 'vis-villi-hist',
      figRef: { en: 'NCERT Sec 5.2.4 (`Small Intestine Absorptive Villi`)', hi: 'NCERT 5.2.4 — क्षुद्रांत्र दीर्घरोम (`Villi`) अनुप्रस्थ काट' },
      title: {
        en: 'Stained Histology of Small Intestinal Villi: Finger-Like Projections Packed with Capillaries & Lacteals (`High Surface Area`)',
        hi: 'क्षुद्रांत्र के दीर्घरोम (`अंकुर`): रुधिर व लसीका वाहिकाओं से भरपूर प्रवर्ध जो पचे भोजन का अवशोषण सतह क्षेत्र बढ़ाते हैं',
      },
      imageUrl: '/ncert-notes/class10-bio-ch5/real/intestinal-villi-histology.webp',
      hotspots: [
        {
          en: 'Increases small intestine surface area dramatically (`Tech 2024 Shifts 2 & 11`); Lymph inside villi absorbs digested fat (`p.104`).',
          hi: 'क्षुद्रांत्र में पूर्ण पाचन के बाद दीर्घरोम ग्लूकोज़-अमीनो अम्ल रक्त में व वसा लसीका (`Lymph`) में अवशोषित करते हैं।',
        },
      ],
    },
    {
      id: 'vis-alveoli-sac',
      figRef: { en: 'NCERT Sec 5.3 / Fig 5.9 (`Lung Alveoli Air Sacs`)', hi: 'NCERT 5.3 / चित्र 5.9 — फेफड़ों के कूपिका कोश (`Alveoli`)' },
      title: {
        en: 'Microscopic Pulmonary Alveolar Network: Thin-Walled Gas-Exchange Air Sacs Spanning `~80 m²` Total Area (`p.101`)',
        hi: 'मानव फेफड़ों के गुब्बारे समान कूपिका कोश (`Alveoli`): फैलाने पर `~80 वर्ग मीटर` पतली विसरण सतह (`O₂–CO₂` विनिमय)',
      },
      imageUrl: '/ncert-notes/class10-bio-ch5/real/lung-alveolar-sac-histology.webp',
      hotspots: [
        {
          en: 'Alveolar walls carry rich capillary networks (`Tech 2024 Shift 11`) exchanging `O₂` (`bound to RBC Haemoglobin`) and dissolved `CO₂` by **Diffusion**.',
          hi: 'कूपिकाओं की पतली भित्ति में सघन केशिका जाल द्वारा विसरण से `O₂` (हीमोग्लोबिन में) व `CO₂` का विनिमय होता है।',
        },
      ],
    },
    {
      id: 'vis-xylem-phloem',
      figRef: { en: 'NCERT Sec 5.4.2 (`Xylem Vessels & Sieve-Tube Phloem`)', hi: 'NCERT 5.4.2 — पादप संवहन ऊतक (जाइलम व फ्लोएम)' },
      title: {
        en: 'Micrograph of Vascular Bundle: Giant Water-Conducting Xylem Vessels Alongside Living ATP-Driven Phloem Sieve Tubes',
        hi: 'पादप संवहन बंडल: खनिज-जल ले जाने वाली बड़ी जाइलम वाहिकाएँ (`ऊपर ↑`) एवं ATP ऊर्जा से भोजन ढोने वाला फ्लोएम (`दोनों दिशा ↑↓`)',
      },
      imageUrl: '/ncert-notes/class10-bio-ch5/real/xylem-phloem-vascular-bundle.webp',
      hotspots: [
        {
          en: 'Xylem pulls water up via Transpiration Pull (`day`) + Root Pressure (`night`); Phloem pumps sucrose actively via ATP (`Shift 13`).',
          hi: 'दिन में वाष्पोत्सर्जन कर्षण जाइलम को खींचता है, जबकि फ्लोएम `ATP` उपयोग कर परासरण दाब से सुक्रोज व अमीनो अम्ल भेजता है।',
        },
      ],
    },
    {
      id: 'vis-glomerulus-sem',
      figRef: { en: 'NCERT Fig 5.14 (`Renal Glomerulus 1000x SEM`)', hi: 'NCERT चित्र 5.14 — वृक्काणु केशिकागुच्छ (`Glomerulus 1000x SEM`)' },
      title: {
        en: 'Scanning Electron Micrograph of Renal Glomerulus: Thin Capillary Tuft Inside Bowman’s Capsule Generating `180 L/day` Filtrate',
        hi: 'बोमन संपुट में स्थित केशिकागुच्छ (`Glomerulus`) का 1000x SEM चित्र: प्रतिदिन `180 लीटर` प्रारंभिक निस्यंद छानने वाला केशिका जाल',
      },
      imageUrl: '/ncert-notes/class10-bio-ch5/real/kidney-glomerulus-sem.webp',
      hotspots: [
        {
          en: 'Filters nitrogenous urea + water + glucose + amino acids; downstream tubules selectively reabsorb ~99% leaving just `1–2 L` urine!',
          hi: 'प्रारंभिक निस्यंद से ग्लूकोज़, अमीनो अम्ल व जल का वृक्क नलिका में चयनात्मक पुनरवशोषण होकर केवल `1–2 L` मूत्र बनता है।',
        },
      ],
    },
  ],
  activities: [
    {
      id: 'act-5-1',
      title: { en: 'Activity 5.1: Chlorophyll Necessity on Variegated Leaf (`p.91–92`, `Fig 5.2`)', hi: 'क्रियाकलाप 5.1: शबलित पत्ती (मनीप्लांट/क्रोटन) में क्लोरोफिल आवश्यकता परीक्षण (`चित्र 5.2`)' },
      setup: { en: 'Keep potted **money-plant/croton** in dark room **3 days** (`destarch`), expose to sun **6 hrs**, trace green regions on paper, boil leaf in water -> **boil in alcohol using water bath** -> dip in **dilute iodine** & rinse.', hi: 'मनीप्लांट/क्रोटन को **3 दिन अँधेरे** में (मंड-रहित), फिर **6 घंटे धूप** में रखें; हरी आकृति ट्रेस कर उबलते पानी और फिर **जल ऊष्मक में अल्कोहल** में उबालकर **तनु आयोडीन** में डालें।' },
      observation: { en: 'Hot alcohol bleaches out green chlorophyll (`alcohol turns green; leaf turns pale`); iodine turns **ONLY originally green regions BLUE-BLACK (`starch present!`)**.', hi: 'अल्कोहल क्लोरोफिल घोलकर हरा हो जाता है व आयोडीन से केवल **मूल रूप से हरे भाग ही नीले-काले** होते हैं — सिद्ध करता है कि प्रकाश संश्लेषण हेतु क्लोरोफिल अनिवार्य है!' },
      predictQuestion: {
        question: { en: 'Why is the leaf-containing alcohol beaker heated inside a WATER BATH in Activity 5.1 (`NCERT p.92`)?', hi: 'क्रियाकलाप 5.1 में अल्कोहल वाले बीकर को सीधे बर्नर के बजाय जल ऊष्मक (`Water bath`) में क्यों गरम करते हैं?' },
        options: { en: ['Alcohol is flammable and catches fire if heated on bare flame', 'Alcohol boils only at 200 °C', 'To add more starch to water', 'To preserve green chlorophyll inside leaf'], hi: ['अल्कोहल ज्वलनशील है और सीधी लौ से आग पकड़ सकता है', 'अल्कोहल 200 °C पर उबलता है', 'स्टार्च बढ़ाने हेतु', 'क्लोरोफिल बचाने हेतु'] },
        correctIndex: 0,
      },
    },
    {
      id: 'act-5-2',
      title: { en: 'Activity 5.2: Bell Jar + `KOH` Proof That `CO₂` Is Essential (`p.92–93`, `Fig 5.4`)', hi: 'क्रियाकलाप 5.2: बेलजार व पोटैशियम हाइड्रॉक्साइड (`KOH`) से `CO₂` आवश्यकता परीक्षण (`चित्र 5.4`)' },
      setup: { en: 'Destarch 2 potted plants in dark 3 days; keep **`KOH` watch glass** next to Plant `(a)`, seal both bell jars with **Vaseline** on glass plates, place in sunlight **2 hours**, test leaves with iodine.', hi: 'दो मंड-रहित पौधों को काँच पट्टिका पर रख पौधे `(a)` पास **वॉच ग्लास में `KOH`** रखें, बेलजार को **वैसलीन** से वायुरोधी कर 2 घंटे धूप में रख मंड परीक्षण करें।' },
      observation: { en: '**`KOH` absorbs all `CO₂`** inside jar `(a)` -> Plant `(a)` leaf shows **NO blue-black starch** (`stays pale`), while Plant `(b)` (`has CO₂`) turns blue-black!', hi: '**`KOH` जार (a) की सारी `CO₂` अवशोषित** कर लेता है — अतः केवल `(b)` की पत्ती में मंड बनता है (प्रकाश संश्लेषण हेतु **`CO₂` अनिवार्य**!)।' },
      predictQuestion: {
        question: { en: 'What is the exact role of Potassium Hydroxide (`KOH`) inside the watch glass in Activity 5.2 (`Fig 5.4`)?', hi: 'क्रियाकलाप 5.2 के बेलजार प्रयोग (`चित्र 5.4`) में वॉच ग्लास में रखे पोटैशियम हाइड्रॉक्साइड (`KOH`) का क्या कार्य है?' },
        options: { en: ['Releases oxygen inside jar', 'Absorbs carbon dioxide (CO₂) completely inside the jar', 'Supplies mineral nitrogen to soil', 'Blocks sunlight rays'], hi: ['ऑक्सीजन उत्पन्न करना', 'बेलजार के अंदर की कार्बन डाइऑक्साइड (`CO₂`) को अवशोषित करना', 'नाइट्रोजन देना', 'धूप रोकना'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-3',
      title: { en: 'Activity 5.3 (`printed as 5.2 on p.94`): Salivary Amylase Breaks Down Starch (`Iodine Test`)', hi: 'क्रियाकलाप 5.3 (`पृ. 94`): लार (`लार एमिलेस`) द्वारा मंड (`Starch`) का शर्करा में पाचन' },
      setup: { en: 'Put `1 mL` `1%` starch solution in Tubes A and B; add `1 mL` fresh saliva ONLY to Tube A (`wait 20–30 min`), then add dilute iodine drops to both.', hi: 'परखनली A व B में `1 mL` `1% मंड घोल` लें; केवल A में `1 mL लार` डालकर `20–30 मिनट` रखें, फिर दोनों में तनु आयोडीन डालें।' },
      observation: { en: 'Tube B (`no saliva -> starch intact`) turns **deep blue-black**; **Tube A stays colorless/brownish** because **Salivary Amylase** digested starch into **simple sugars**!', hi: 'परखनली B में मंड रहने से गहरा **नीला-काला** रंग आता है, जबकि A में **लार एमिलेस ने मंड को सरल शर्करा में तोड़ देने से रंग नहीं बदलता**!' },
      predictQuestion: {
        question: { en: 'Why does Tube A (`1% starch + saliva`) fail to turn blue-black with iodine after `30 min` (`p.94`)?', hi: '30 मिनट बाद `लार + मंड` वाली परखनली A आयोडीन से नीली-काली क्यों नहीं होती?' },
        options: { en: ['Saliva turns iodine acidic', 'Salivary amylase enzyme digested starch into simple sugars', 'Saliva boiled all starch out', 'Tube A lacked HCl'], hi: ['लार आयोडीन को अम्लीय करती है', 'लार एमिलेस एंजाइम ने मंड को सरल शर्करा में खंडित कर दिया', 'मंड उड़ गया', 'HCl की कमी थी'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-4',
      title: { en: 'Activity 5.4: Exhaled Breath vs Syringe Air in Fresh Limewater (`p.97`, `Fig 5.7`)', hi: 'क्रियाकलाप 5.4: चूने के पानी में निःश्वास बनाम पिचकारी वायु (`CO₂` परीक्षण, `चित्र 5.7`)' },
      setup: { en: 'Blow exhaled breath via tube into Tube A (`fresh limewater`); push room air using syringe/pichkari into Tube B (`fresh limewater`); compare times to turn milky.', hi: 'परखनली A के ताजे चूने पानी में मुँह की फूँक (`निःश्वास`) व B में पिचकारी से सामान्य हवा भेजकर दूधिया होने का समय नोट करें।' },
      observation: { en: '**Exhaled breath turns limewater milky MUCH FASTER (`just seconds!`)** than atmospheric air (`~0.03% CO₂`), proving human cellular respiration exhales concentrated `CO₂`!', hi: 'निःश्वास वाली नली A **अतिशीघ्र दूधिया** हो जाती है, जो सिद्ध करता है कि श्वसन से निकली हवा में **`CO₂` की मात्रा अधिक** होती है!' },
      predictQuestion: {
        question: { en: 'Which gas in exhaled breath turns fresh limewater `Ca(OH)₂` milky quickly in Activity 5.4?', hi: 'क्रियाकलाप 5.4 में फूँक द्वारा चूने के पानी को तुरंत दूधिया करने वाली गैस कौन-सी है?' },
        options: { en: ['O₂ gas', 'N₂ gas', 'CO₂ (Carbon dioxide)', 'Water vapour'], hi: ['ऑक्सीजन', 'नाइट्रोजन', 'कार्बन डाइऑक्साइड (`CO₂`)', 'जलवाष्प'] },
        correctIndex: 2,
      },
    },
    {
      id: 'act-5-5',
      title: { en: 'Activity 5.5: Yeast Fermentation of Sugar/Juice (`Anaerobic CO₂ + Ethanol`, `p.97`)', hi: 'क्रियाकलाप 5.5: यीस्ट किण्वन (`अवायवीय श्वसन` — `CO₂ + इथेनॉल`, `पृ. 97`)' },
      setup: { en: 'Mix **yeast + fruit juice/sugar solution** in a corked test tube connected via bent glass tube into **fresh limewater**.', hi: 'फल रस/चीनी घोल में यीस्ट डाल कॉर्क लगी मुड़ी काँच नली को ताजे चूने के पानी वाली परखनली से जोड़ें।' },
      observation: { en: 'Fermentation splits pyruvate anaerobically into **Ethanol (`2-C`) + `CO₂`**, turning limewater **milky** (`Anaerobic Respiration`).', hi: 'यीस्ट में बिना ऑक्सीजन पायरूवेट **इथेनॉल + `CO₂`** में टूटता है जिससे चूने का पानी **दूधिया** हो जाता है!' },
      predictQuestion: {
        question: { en: 'Anaerobic fermentation of pyruvate in yeast yields which two products (`Tech 2024 Shift 13 & 15`)?', hi: 'यीस्ट में किण्वन के दौरान पायरूवेट किन दो प्रमुख उत्पादों में बदलता है?' },
        options: { en: ['Lactic acid + Water', 'Ethanol (2-C) + CO₂', 'Glucose + O₂', 'Acetic acid + H₂'], hi: ['लैक्टिक अम्ल + जल', 'इथेनॉल (2-C) + CO₂', 'ग्लूकोज़ + O₂', 'ऐसीटिक अम्ल + H₂'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-6',
      title: { en: 'Activity 5.6: Aquatic Fish Mouth/Gill Operculum Breathing Rate vs Human (`p.99`)', hi: 'क्रियाकलाप 5.6: मछली की क्लोम/मुँह श्वास दर बनाम मनुष्य तुलना (`पृ. 99`)' },
      setup: { en: 'Watch an aquarium fish counting how many times it opens/closes mouth & gill cover (`operculum`) per minute; compare with your own breathing rate (`~15–18/min`).', hi: 'एक्वेरियम की मछली के प्रति मिनट मुँह व क्लोम प्रच्छद खोलने की संख्या गिनें और अपनी श्वास दर से तुलना करें।' },
      observation: { en: '**Fish breathe FAR FASTER per minute** than land mammals because **dissolved oxygen in water is vastly lower** than oxygen percentage in air (`21%`)!', hi: 'मछलियाँ **बहुत तेज श्वास लेती हैं** क्योंकि **जल में विलेय ऑक्सीजन की मात्रा वायुमंडलीय `O₂` से बहुत कम** होती है (`पृ. 99`)!' },
      predictQuestion: {
        question: { en: 'Why is the breathing rate of aquatic organisms like fish MUCH faster than terrestrial organisms (`In-Text p.101 Q1`)?', hi: 'जलीय जीवों (मछली) की श्वास दर स्थलीय जीवों की अपेक्षा इतनी तेज क्यों होती है (`पृ. 101 Q1`)?' },
        options: { en: ['Amount of dissolved oxygen in water is fairly low compared to oxygen in air', 'Water contains excess haemoglobin', 'Fish lack mitochondria', 'Gill capillaries carry glucose directly'], hi: ['जल में विलेय ऑक्सीजन की मात्रा वायु की `O₂` की तुलना में बहुत कम होती है', 'जल में हीमोग्लोबिन है', 'मछलियों में माइटोकॉन्ड्रिया नहीं', 'क्लोम शर्करा ढोते हैं'] },
        correctIndex: 0,
      },
    },
    {
      id: 'act-5-7',
      title: { en: 'Activity 5.7: Human & Animal Haemoglobin Normal Ranges (`p.101`)', hi: 'क्रियाकलाप 5.7: मानव (बच्चे, पुरुष, महिला) एवं पशुओं में हीमोग्लोबिन सामान्य परिसर जाँच (`पृ. 101`)' },
      setup: { en: 'Survey local health clinic for normal Haemoglobin ranges in children, adult men, and women (`and compare cattle/calf ranges at vet clinic`).', hi: 'स्वास्थ्य केंद्र में बच्चों, पुरुष व महिला में हीमोग्लोबिन की सामान्य मात्रा (`तथा पशु चिकित्सालय में गाय/भैंस/बछड़े में`) पता करें।' },
      observation: { en: 'Adult human men typically range higher (`~14–18 g/dL`) than women (`~12–16 g/dL`), while low Hb causes **oxygen deficiency (`Anaemia`)** (`Ex Q10`)!', hi: 'सामान्यतः वयस्क पुरुषों में महिला व बच्चों से कुछ अधिक हीमोग्लोबिन (`~12–18 g/dL`) होता है; कमी से **रक्ताल्पता व थकान** होती है (`अभ्यास Q10`)!' },
      predictQuestion: {
        question: { en: 'What physiological consequence occurs from severe Haemoglobin deficiency in humans (`NCERT Ex Q10`)?', hi: 'हमारे शरीर में हीमोग्लोबिन की कमी होने का मुख्य परिणाम क्या होगा (`अभ्यास Q10`)?' },
        options: { en: ['Blood clots faster in arteries', 'Reduced O₂ supply to tissues causing tiredness, breathlessness & anaemia', 'Increased CO₂ absorption in stomata', 'Higher blood pressure instantly'], hi: ['धमनी में थक्का', 'ऊतकों को `O₂` आपूर्ति घटने से एनीमिया, थकान व ऊर्जा की कमी', 'रंध्र बंद होना', 'उच्च रक्तचाप'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-5-8',
      title: { en: 'Activity 5.8: Potted Plant vs Stick Polythene Transpiration Test (`p.105–106`)', hi: 'क्रियाकलाप 5.8: गमले के पौधे व छड़ी की प्लास्टिक शीट वाष्पोत्सर्जन जाँच (`पृ. 105`)' },
      setup: { en: 'Take 2 pots with equal moist soil (`one with live plant, one with dry stick`), seal soil surfaces with plastic sheets (`blocking soil evaporation`), cover both pots wholly under transparent plastic domes in sun.', hi: 'एक पौधे वाले गमले व एक छड़ी वाले गमले की मिट्टी प्लास्टिक से ढककर (`वाष्पन रोक`), दोनों को ऊपर से अलग प्लास्टिक शीट से ढक धूप में रखें।' },
      observation: { en: '**Inner plastic walls around the LIVE PLANT bead with water droplets** (`whereas dry stick pot remains dry`) — directly proving aerial plant parts lose vapor via **Transpiration** (`generating Xylem suction pull`)!', hi: 'केवल **जीवित पौधे वाले पॉलीथीन के भीतर जल की बूँदें** दिखती हैं (`छड़ी वाले में नहीं`) — सिद्ध करता है कि पौधे **वाष्पोत्सर्जन (`Transpiration`)** करते हैं!' },
      predictQuestion: {
        question: { en: 'Why is soil surface sealed with plastic first in Activity 5.8 before covering the whole potted plant?', hi: 'क्रियाकलाप 5.8 में पहले गमले की मिट्टी को प्लास्टिक शीट से क्यों ढका जाता है?' },
        options: { en: ['So moisture evaporating directly from damp soil is blocked, proving drops came ONLY from plant leaves', 'To stop root growth', 'To absorb oxygen from soil', 'To block sunlight into leaves'], hi: ['ताकि गीली मिट्टी का सीधा वाष्पन रुक सके और पत्तियों से वाष्पोत्सर्जन सिद्ध हो', 'जड़ रोकने हेतु', 'ऑक्सीजन रोकने हेतु', 'धूप रोकने हेतु'] },
        correctIndex: 0,
      },
    },
  ],
  tables: [
    {
      id: 'tbl-5-1',
      title: {
        en: 'Autotrophic vs Heterotrophic Nutrition & Plant vs Animal Reserves (`NCERT Sec 5.2`)',
        hi: 'स्वपोषी बनाम विषमपोषी पोषण, अमीबा/पैरामीशियम एवं संचित ऊर्जा तुलना (`भाग 5.2`)',
      },
      headers: {
        en: ['Nutrition Criterion', 'Autotrophic (`Plants / Some Bacteria`)', 'Heterotrophic (`Animals, Fungi, Cuscuta`)'],
        hi: ['पोषण मापदंड', 'स्वपोषी (`पौधे व कुछ जीवाणु`)', 'विषमपोषी (`जंतु, कवक, परजीवी`)'],
      },
      rows: [
        [{ en: '**Raw Inputs & Energy**', hi: '**कच्ची सामग्री व स्रोत**' }, { en: '`CO₂` + `H₂O` + **Sunlight + Chlorophyll** (`Ex Q3: All`)', hi: '`CO₂` + `H₂O` + **सूर्यप्रकाश + क्लोरोफिल** (`Ex Q3`)' }, { en: 'Complex organic food synthesized by autotrophs (`broken down via enzymes`)', hi: 'तैयार जटिल कार्बनिक पदार्थ (`एंजाइम द्वारा खंडन`)' }],
        [{ en: '**Reserve Energy Form**', hi: '**संचित ऊर्जा रूप**' }, { en: '**Starch (`मंड`)** (`Group D Shift 17`)', hi: '**मंड / स्टार्च (`Starch`)** (`Group D PYQ`)' }, { en: '**Glycogen (`ग्लाइकोजन`)** in animals/humans (`p.91`)', hi: '**ग्लाइकोजन (`Glycogen`)** मानव/जंतुओं में (`पृ. 91`)' }],
        [{ en: '**Special Variants & Parasites**', hi: '**विशेष उदाहरण व परजीवी**' }, { en: '**Desert plants** take `CO₂` at **NIGHT** -> intermediate -> sugar by day (`Shift 37`)', hi: '**मरुद्भिद पौधे रात में `CO₂`** लेकर मध्यवर्ती यौगिक बनाते हैं (`Shift 37`)' }, { en: 'Fungi digest outside; **Cuscuta, ticks, lice, leeches, tapeworms** are **parasites**; *Amoeba* uses pseudopodia, *Paramoecium* uses cilia (`p.92`)', hi: 'कवक बाहर पाचन; **अमरबेल, जूँ, लीच, फीताकृमि परजीवी**; *अमीबा* पादाभ व *पैरामीशियम* पक्ष्माभ (`cilia`) उपयोग करे (`पृ. 92`)' }],
      ],
    },
    {
      id: 'tbl-5-2',
      title: {
        en: 'Master Human Digestive Glands, Secretions, Optimal pH & Products (`NCERT Sec 5.2.4`)',
        hi: 'मानव पाचन तंत्र: अंग, पाचक रस, एंजाइम, माध्यम (`pH`) व अंतिम उत्पाद सारणी (`भाग 5.2.4`)',
      },
      headers: {
        en: ['Organ & Gland', 'Secretion / Enzyme', 'Medium & Substrate -> Final Product', 'CBT Key Point'],
        hi: ['अंग व ग्रंथि', 'स्राव / एंजाइम', 'माध्यम व क्रिया → अंतिम उत्पाद', 'रेलवे परीक्षा तथ्य'],
      },
      rows: [
        [{ en: '**Mouth (`Salivary Glands`)**', hi: '**मुख (`लाला ग्रंथि`)**' }, { en: '**Salivary Amylase (`लार एमिलेस`)**', hi: '**लार एमिलेस**' }, { en: 'Breaks complex **Starch -> Simple Sugar** (`Act 5.3`)', hi: 'जटिल **मंड → सरल शर्करा** (`पृ. 94`)' }, { en: 'Dental caries: bacteria + sugar -> acid erodes enamel!', hi: 'मीठे से जीवाणु अम्ल बना **दंतक्षय** करते हैं' }],
        [{ en: '**Stomach (`Gastric Glands`)**', hi: '**आमाशय (`जठर ग्रंथियाँ`)**' }, { en: '**`HCl` + Pepsin + Mucus**', hi: '**`HCl` + पेप्सिन + श्लेष्मा**' }, { en: '**Acidic** medium activates **Pepsin -> Proteins**; Mucus protects wall', hi: '`HCl` से **अम्लीय माध्यम** (`पेप्सिन प्रोटीन पचाए`), श्लेष्मा सुरक्षा करे' }, { en: '**Tech 2024 Shift 3 & 18 PYQ**', hi: '**Tech 2024 Shift 3 व 18 PYQ**' }],
        [{ en: '**Liver (`via Gall Bladder`)**', hi: '**यकृत (`पित्ताशय में संचित`)**' }, { en: '**Bile Juice & Salts (`NO enzymes!`)**', hi: '**पित्तरस व लवण (`कोई एंजाइम नहीं!`)**' }, { en: 'Turns food **ALKALINE** + **emulsifies large fat globules** (`ALP Shift 6`)', hi: 'भोजन **क्षारीय** करे + **वसा इमल्सीकरण** (`ALP Shift 6`)' }, { en: 'Required before Pancreas can work!', hi: 'अग्न्याशय एंजाइम हेतु क्षारीय माध्यम जरूरी!' }],
        [{ en: '**Pancreas (`अग्न्याशय`)**', hi: '**अग्न्याशयिक रस**' }, { en: '**Trypsin** + **Lipase**', hi: '**ट्रिप्सिन** + **लाइपेज**' }, { en: 'Alkaline: **Trypsin -> Proteins** | **Lipase -> Emulsified Fats**', hi: 'क्षारीय माध्यम: **ट्रिप्सिन (प्रोटीन)** व **लाइपेज (वसा)**' }, { en: 'Secreted into small intestine (`Tech Shift 13`)', hi: 'स्रोत: अग्न्याशय (`Tech Shift 13 PYQ`)' }],
        [{ en: '**Small Intestine (`Villi`)**', hi: '**क्षुद्रांत्र (`आंत्र रस + दीर्घरोम`)**' }, { en: 'Intestinal Enzymes + **Villi**', hi: 'आंत्र रस + **दीर्घरोम**' }, { en: '**Proteins->Amino acids, Carbs->Glucose, Fats->Fatty acids + Glycerol**', hi: 'प्रोटीन→**अमीनो अम्ल**, कार्ब→**ग्लूकोज़**, वसा→**वसा अम्ल+ग्लिसरॉल**' }, { en: 'Longest in Herbivores (`Cellulose!`); Colon absorbs water', hi: 'शाकाहारी में लंबी; **दीर्घरोम सतह क्षेत्र** बढ़ाते (`Ex Q5`)' }],
      ],
    },
    {
      id: 'tbl-5-3',
      title: {
        en: 'Glucose Breakdown Pathways (`Fig 5.8`), ATP & Human Respiratory Anatomy (`Sec 5.3`)',
        hi: 'ग्लूकोज़ विखंडन के तीन पथ (`चित्र 5.8`), ATP ऊर्जा व मानव श्वसन मुख्य तथ्य (`भाग 5.3`)',
      },
      headers: {
        en: ['Pathway / Feature', 'Site & Oxygen Condition', 'End Products & Energy Yield', 'NCERT / RRB PYQ Highlight'],
        hi: ['श्वसन पथ / संरचना', 'स्थान व ऑक्सीजन शर्त', 'अंतिम उत्पाद व ऊर्जा', 'NCERT व परीक्षा तथ्य'],
      },
      rows: [
        [{ en: '**Glycolysis Step 1**', hi: '**प्रथम चरण (`साझा पथ`)**' }, { en: '**Cytoplasm** (`all organisms`)', hi: '**कोशिकाद्रव्य**' }, { en: '`6-C Glucose` -> `3-C Pyruvate`', hi: '`6C ग्लूकोज़` → **`3C पायरूवेट`**' }, { en: '**Tech 2024 Shift 17 & 6 PYQ**', hi: '**Tech 2024 Shift 17 व 6 PYQ**' }],
        [{ en: '**1. Anaerobic Fermentation**', hi: '**1. अवायवीय (यीस्ट किण्वन)**' }, { en: 'Yeast (`Absence of O₂`)', hi: 'यीस्ट (**`O₂` अनुपस्थित**)' }, { en: '**Ethanol (`2-C`) + `CO₂` + Low Energy**', hi: '**इथेनॉल (`2-C`) + `CO₂` + कम ऊर्जा**' }, { en: 'Turns limewater milky (`Act 5.5`)', hi: 'चूना पानी दूधिया (`क्र. 5.5`)' }],
        [{ en: '**2. Anaerobic Muscle**', hi: '**2. पेशी अवायवीय**' }, { en: 'Human muscle cells (`Lack of O₂`)', hi: 'मानव पेशियाँ (**`O₂` अभाव**)' }, { en: '**Lactic Acid (`3-C`) + Energy** (`NO CO₂!`)', hi: '**लैक्टिक अम्ल (`3-C`) + ऊर्जा**' }, { en: 'Sudden buildup causes **muscle cramps** (`Tech Shift 3`)!', hi: 'तेज गतिविधि से पेशी **क्रैम्प (ऐंठन)** (`Tech Shift 3`)' }],
        [{ en: '**3. Aerobic Respiration**', hi: '**3. वायवीय श्वसन**' }, { en: '**Mitochondria** (`Presence of O₂`)', hi: '**माइटोकॉन्ड्रिया** (`O₂` उपस्थित)' }, { en: '**`CO₂ + H₂O` + High Energy (`ATP`)**', hi: '**`CO₂ + H₂O` + उच्च ATP ऊर्जा**' }, { en: '**NCERT Ex Q4 + `30.5 kJ/mol` per ATP bond!**', hi: '**Ex Q4 + ATP बंध से `30.5 kJ/mol`!**' }],
        [{ en: '**Human Breathing Mechanics**', hi: '**मानव श्वसन अंग विशेषताएँ**' }, { en: 'Trachea, **Alveoli**, RBC **Haemoglobin**', hi: 'श्वासनली, **कूपिका**, **हीमोग्लोबिन**' }, { en: 'Cartilage rings (`no collapse`) | **Alveoli = `~80 m²`** | Residual Vol.', hi: 'उपास्थि वलय | **कूपिका `~80 m²`** | अवशिष्ट आयतन' }, { en: '**Smoking destroys Cilia** | Without Hb, O₂ needs **3 years**!', hi: '**धूम्रपान सिलिया नष्ट करे** | बिना Hb विसरण **`3 वर्ष`**!' }],
      ],
    },
    {
      id: 'tbl-5-4',
      title: {
        en: 'Circulatory System: Vessels, Heart Chambers, Lymph & Xylem vs Phloem (`Sec 5.4`)',
        hi: 'हृदय कोष्ठ, रक्त वाहिकाएँ, लसीका तथा पादप जाइलम बनाम फ्लोएम अंतर (`भाग 5.4`)',
      },
      headers: {
        en: ['Transport Component', 'Structure & Valves / Chambers', 'Direction & Substance Carried', 'Key Force / Exam Exception'],
        hi: ['परिवहन अंग/ऊतक', 'संरचना / वाल्व / कोष्ठ', 'दिशा व वाहित पदार्थ', 'प्रमुख बल / परीक्षा अपवाद'],
      },
      rows: [
        [{ en: '**Vertebrate Hearts**', hi: '**कशेरुकी हृदय कोष्ठ**' }, { en: 'Fish **`2`** | Amphibian/Reptile **`3`** | Bird/Mammal **`4`**', hi: 'मछली **`2`** | उभयचर/सरीसृप **`3`** | पक्षी/स्तनधारी **`4`**' }, { en: '4 chambers give **Double Circulation** & clean `O₂`', hi: '4 कोष्ठ से **दोहरा परिसंचरण** व उच्च ऊर्जा' }, { en: 'Needed to maintain **constant body temp** (`p.103`)', hi: 'पक्षी व स्तनधारी को स्थिर ताप हेतु अनिवार्य (`पृ. 103`)' }],
        [{ en: '**Arteries vs Veins vs Capillaries**', hi: '**धमनी बनाम शिरा बनाम केशिका**' }, { en: 'Artery: **thick/NO valves** | Vein: **thin/+VALVES** | Capillary: **1-cell**', hi: 'धमनी: मोटी भित्ति | शिरा: **वाल्व युक्त** | केशिका: **1-कोशिकीय**' }, { en: 'Artery: Heart->Body (`BP 120/80`) | Vein: Body->Heart', hi: 'धमनी: हृदय→अंग (`120/80`) | शिरा: अंग→हृदय' }, { en: '**Pulm Artery = `CO₂`**, **Pulm Vein = `O₂`** (`Shift 44`)!', hi: '**फुफ्फुसीय धमनी (`CO₂`)** व **फुफ्फुसीय शिरा (`O₂`)** अपवाद!' }],
        [{ en: '**Lymph & Platelets**', hi: '**लसीका व प्लेटलेट्स**' }, { en: 'Lymph: colorless interstitial fluid (`less protein`)', hi: 'लसीका: रंगहीन ऊतक तरल (`अल्प प्रोटीन`)' }, { en: 'Lymph transports **absorbed intestinal Fats** (`p.104`)', hi: 'लसीका **क्षुद्रांत्र से पची वसा** वहन करती है' }, { en: '**Platelets** clot leaks preventing pressure loss', hi: '**प्लेटलेट्स** रक्त थक्का बना दाब बनाए रखें' }],
        [{ en: '**Xylem (`Ex Q2 & Q12`)**', hi: '**जाइलम (`अभ्यास Q2, Q12`)**' }, { en: 'Tracheids & Vessels (`dead channels`)', hi: 'वाहिनिका व वाहिकाएँ' }, { en: '**UNIDIRECTIONAL ↑ UP**: Soil Water + Minerals', hi: '**केवल ऊपर की ओर ↑**: जल व खनिज लवण' }, { en: '**Night: Root Pressure** | **Day: Transpiration Pull** (`Shift 9`)', hi: 'रात **मूल दाब** | दिन **वाष्पोत्सर्जन कर्षण** (बिना ATP)' }],
        [{ en: '**Phloem (`Ex Q12`)**', hi: '**फ्लोएम (`अभ्यास Q12`)**' }, { en: 'Sieve tubes + Companion cells (`fibres dead`)', hi: 'चालनी नलिका + साथी कोशिका' }, { en: '**BIDIRECTIONAL ↑↓**: **Sucrose + Amino Acids**', hi: '**दोनों दिशाएँ ↑↓**: **सुक्रोज + अमीनो अम्ल**' }, { en: '**ACTIVE transport via `ATP`** -> osmotic pull (`Shift 13, 28`)!', hi: '**`ATP` से सक्रिय स्थानांतरण** → परासरण दाब (`Shift 13, 28`)!' }],
      ],
    },
    {
      id: 'tbl-5-5',
      title: {
        en: 'Excretion in Humans (`Nephron vs Dialysis`) & 5 Plant Waste Mechanisms (`Sec 5.5`)',
        hi: 'मानव उत्सर्जन (`नेफ्रॉन बनाम कृत्रिम अपोहन`) एवं पादप अपशिष्ट निष्कासन सारणी (`भाग 5.5`)',
      },
      headers: {
        en: ['System / Process', 'Anatomical Parts / Mechanism', 'Quantitative Value / Substances', 'NCERT / RRB CBT Highlight'],
        hi: ['तंत्र / प्रक्रम', 'अंग व क्रियाविधि', 'मात्रात्मक आँकड़े / पदार्थ', 'NCERT व परीक्षा तथ्य'],
      },
      rows: [
        [{ en: '**Human Urinary Tract**', hi: '**मानव उत्सर्जन मार्ग (`चित्र 5.13`)**' }, { en: '2 Kidneys (**abdomen**) -> 2 Ureters -> 1 Bladder -> **1 Urethra**', hi: '2 वृक्क (**उदर**) → 2 मूत्रवाहिनी → 1 मूत्राशय → **1 मूत्रमार्ग**' }, { en: 'Removes nitrogenous **Urea & Uric acid** (`CO₂ via lungs`)', hi: 'नाइट्रोजनी **यूरिया/यूरिक अम्ल** व अतिरिक्त लवण निष्कासन' }, { en: 'Bladder is under **nervous control**; **Urethra is UNPAIRED!** (`Shift 14`)', hi: '**मूत्राशय तंत्रिका नियंत्रित | मूत्रमार्ग अयुग्मित (`Shift 14`)!**' }],
        [{ en: '**Nephron Filtration**', hi: '**वृक्काणु (`नेफ्रॉन`, चित्र 5.14)**' }, { en: 'Glomerulus + Bowman’s Capsule -> Tubule Reabsorption', hi: 'केशिकागुच्छ + बोमन संपुट → नलिका **पुनरवशोषण**' }, { en: '**`180 L/day` Filtrate** -> **`1–2 L/day` Urine**!', hi: '**`180 L` प्रारंभिक निस्यंद** → **`1–2 L` मूत्र**!' }, { en: 'Selectively reabsorbs **Glucose, Amino acids, Salts, Water** (`ALP 5`)', hi: 'ग्लूकोज़, अमीनो अम्ल, लवण व जल वापस सोखे (`ALP Shift 5`)' }],
        [{ en: '**Artificial Kidney (`Dialysis`)**', hi: '**कृत्रिम वृक्क (`अपोहन`)**' }, { en: 'Semi-permeable tubes bathed in isotonic urea-free fluid', hi: 'अर्धपारगम्य नलिकाओं से सम-परासारी विलयन में विसरण' }, { en: 'Nitrogenous urea diffuses cleanly out of patient blood', hi: 'रक्त से यूरिया अपोहन द्रव में विसरित' }, { en: '**CRITICAL DIFF (`p.108`)**: **NO Reabsorption in Dialysis!**', hi: '**मुख्य अंतर (`पृ. 108`)**: अपोहन में **पुनरवशोषण नहीं होता**!' }],
        [{ en: '**Plant Excretion (`5.5.2`)**', hi: '**पादप उत्सर्जन (`भाग 5.5.2`)**' }, { en: 'Stomata + Vacuoles + Dead cells + Roots', hi: 'रंध्र + कोशिका रिक्तिका + पत्तियाँ + पुराना जाइलम' }, { en: '`O₂`, Transpiration water, **Falling leaves**, **Resins & Gums**', hi: '`O₂`, वाष्पोत्सर्जन, गिरती पत्तियाँ, **पुराने जाइलम में रेज़िन-गोंद**' }, { en: 'Also excretes some wastes into surrounding **soil** (`Tech Shift 9`)', hi: 'कुछ अपशिष्ट सीधे **मृदा** में त्यागता है (`Tech Shift 9`)!' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.89 Q1',
      q: { en: 'Why is diffusion insufficient to meet the oxygen requirements of multicellular organisms like humans?', hi: 'हमारे जैसे बहुकोशिकीय जीवों में ऑक्सीजन की आवश्यकता पूरी करने में विसरण क्यों अपर्याप्त है?' },
      a: { en: 'In large multicellular bodies, **not all cells sit in direct contact with the outer environment** (`unlike single-celled Amoeba`). Slow diffusion alone would take **~3 years (`p.101`)** to move `O₂` from lungs to toes, making specialized respiratory & circulatory organs essential.', hi: 'बहुकोशिकीय जीवों की **सभी कोशिकाएँ आस-पास के पर्यावरण के सीधे संपर्क में नहीं रहतीं**, अतः धीमा विसरण शरीर की गहराई तक आवश्यक ऑक्सीजन (`O₂`) नहीं पहुँचा सकता (`अकेले विसरण से पैर तक O₂ पहुँचने में ~3 वर्ष लगेंगे!`)।' },
    },
    {
      num: 'p.89 Q2',
      q: { en: 'What criteria do we use to decide whether something is alive?', hi: 'कोई वस्तु सजीव है, इसका निर्धारण करने के लिए हम किस मापदंड का उपयोग करेंगे?' },
      a: { en: 'Visible movement (`breathing, growth, locomotion`) PLUS the definitive internal benchmark: **continuous invisible molecular movements (`अणुओं की गति`)** required for tissue repair and organization (`Note: viruses lack these outside host cells`).', hi: 'दृश्य गति (`श्वसन, वृद्धि`) तथा सबसे निर्णायक प्रमाण — **शरीर की मरम्मत व अनुरक्षण हेतु लगातार होने वाली अदृश्य आणविक गतियाँ** (`पृ. 88`)!' },
    },
    {
      num: 'p.89 Q3',
      q: { en: 'What are outside raw materials used for by an organism?', hi: 'किसी जीव द्वारा किन कच्ची सामग्रियों का उपयोग किया जाता है?' },
      a: { en: 'Carbon-based **Food (`energy + body-building molecules`)**, **Oxygen (`O₂`)** for oxidizing food in respiration, **Water (`medium for reactions`)**, and mineral salts (`Autotrophs use CO₂, H₂O, sunlight & soil N/P/Fe/Mg`).', hi: 'ऊर्जा एवं वृद्धि हेतु **कार्बन आधारित भोजन**, श्वसन हेतु **ऑक्सीजन (`O₂`)**, तथा **जल व खनिज लवण** (स्वपोषी पौधे बाहर से `CO₂`, जल, सूर्यप्रकाश व मिट्टी से खनिज लेते हैं)।' },
    },
    {
      num: 'p.89 Q4',
      q: { en: 'What processes would you consider essential for maintaining life?', hi: 'जीवन के अनुरक्षण के लिए आप किन प्रक्रमों को आवश्यक मानेंगे?' },
      a: { en: 'Four fundamental maintenance **Life Processes (`जैव प्रक्रम`)**: **(1) Nutrition**, **(2) Respiration**, **(3) Transportation**, and **(4) Excretion** (`+ control/repair`).', hi: 'जीवन के अनुरक्षण हेतु चार अनिवार्य जैव प्रक्रम: **(1) पोषण**, **(2) श्वसन**, **(3) वहन (परिसंचरण)** तथा **(4) उत्सर्जन**।' },
    },
    {
      num: 'p.96 Q1',
      q: { en: 'What are the differences between autotrophic nutrition and heterotrophic nutrition?', hi: 'स्वयंपोषी पोषण तथा विषमपोषी पोषण में क्या अंतर है?' },
      a: { en: '**Autotrophic**: Organisms (`green plants/some bacteria`) make organic food from inorganic `CO₂ + H₂O` using **sunlight & chlorophyll** (`producers`). **Heterotrophic**: Organisms (`animals, fungi, parasites`) depend directly/indirectly on autotrophs eating complex food digested by **enzymes** (`no chlorophyll`).', hi: '**स्वपोषी**: हरे पौधे `CO₂`, जल, क्लोरोफिल व सूर्यप्रकाश से स्वयं भोजन (`स्टार्च`) बनाते हैं। **विषमपोषी**: जंतु व कवक भोजन हेतु प्रत्यक्ष/परोक्ष रूप से स्वपोषियों पर निर्भर रहकर जटिल भोजन को एंजाइम द्वारा सरल बनाते हैं।' },
    },
    {
      num: 'p.96 Q2',
      q: { en: 'Where do plants get each of the raw materials required for photosynthesis?', hi: 'प्रकाश संश्लेषण के लिए आवश्यक कच्ची सामग्री पौधा कहाँ से प्राप्त करता है?' },
      a: { en: '**(i) `CO₂`**: Air via **stomata** (`desert plants absorb at night!`); **(ii) Water (`+ N, P, Fe, Mg`)**: Absorbed from **soil by roots**; **(iii) Light Energy**: Sunlight captured by **chlorophyll** in chloroplasts.', hi: '**(i) `CO₂`**: वायुमंडल से **रंध्रों (`Stomata`)** द्वारा; **(ii) जल व खनिज**: जड़ों द्वारा **मृदा** से; **(iii) ऊर्जा**: **सूर्यप्रकाश** जिसे **हरितलवक का क्लोरोफिल** अवशोषित करता है।' },
    },
    {
      num: 'p.96 Q3',
      q: { en: 'What is the role of the acid (`HCl`) in our stomach?', hi: 'हमारे आमाशय में अम्ल (`HCl`) की भूमिका क्या है?' },
      a: { en: '**(1)** Gastric **`HCl` creates an ACIDIC medium** needed to activate protein-digesting **Pepsin enzyme**; **(2)** Kills harmful microbes entering with food (`while Mucus protects stomach lining from HCl`).', hi: '**(1)** आमाशय में **अम्लीय माध्यम** तैयार करता है जो प्रोटीन-पाचक **पेप्सिन एंजाइम की क्रिया हेतु अनिवार्य** है; **(2)** भोजन संग आए हानिकारक जीवाणुओं को नष्ट करता है।' },
    },
    {
      num: 'p.96 Q4',
      q: { en: 'What is the function of digestive enzymes?', hi: 'पाचक एंजाइमों का क्या कार्य है?' },
      a: { en: 'Digestive enzymes act as **biological catalysts (`जैव-उत्प्रेरक`)** that break **complex insoluble food molecules into small water-soluble absorbable molecules** (`Amylase: Starch->Sugar; Pepsin/Trypsin: Protein->Amino acids; Lipase: Fats->Fatty acids + Glycerol`).', hi: 'पाचक एंजाइम **जैव-उत्प्रेरक** बनकर जटिल अघुलनशील भोजन (`कार्बोहाइड्रेट, प्रोटीन, वसा`) को सरल अवशोषण-योग्य छोटे अणुओं (`ग्लूकोज़, अमीनो अम्ल, वसा अम्ल+ग्लिसरॉल`) में खंडित करते हैं।' },
    },
    {
      num: 'p.96 Q5',
      q: { en: 'How is the small intestine designed to absorb digested food?', hi: 'पचे हुए भोजन को अवशोषित करने के लिए क्षुद्रांत्र को कैसे अभिकल्पित किया गया है?' },
      a: { en: 'The inner lining carries **millions of finger-like projections called Villi (`दीर्घरोम`)** creating a massive **absorptive surface area**, packed with **abundant blood vessels (`& lymph vessels`)** delivering absorbed nutrients straight to all body cells (`Tech 2024 PYQ`).', hi: 'क्षुद्रांत्र के आंतरिक अस्तर पर अनेक अँगुली जैसे प्रवर्ध **दीर्घरोम (`Villi`)** होते हैं जो **अवशोषण का सतही क्षेत्रफल** अत्यधिक बढ़ा देते हैं और सघन रुधिर वाहिकाओं द्वारा भोजन प्रत्येक कोशिका तक पहुँचाते हैं।' },
    },
    {
      num: 'p.101 Q1',
      q: { en: 'What advantage over an aquatic organism does a terrestrial organism have with regard to obtaining oxygen for respiration?', hi: 'श्वसन के लिए ऑक्सीजन प्राप्त करने की दिशा में एक जलीय जीव की अपेक्षा स्थलीय जीव किस प्रकार लाभप्रद है?' },
      a: { en: 'Atmosphere holds rich **gaseous `O₂` (`~21%`)**, whereas water holds **very low dissolved `O₂`**. Thus terrestrial animals absorb oxygen slowly and effortlessly (`lower breathing rate`), while fish must pump water rapidly across gills.', hi: 'वायुमंडल में ऑक्सीजन की मात्रा प्रचुर है जबकि जल में विलेय `O₂` बहुत कम है — अतः स्थलीय जीवों को कम श्वास दर में पर्याप्त ऑक्सीजन मिल जाती है, जबकि जलीय जीवों को तेज साँस लेनी पड़ती है।' },
    },
    {
      num: 'p.101 Q2',
      q: { en: 'What are the different ways in which glucose is oxidised to provide energy in various organisms?', hi: 'ग्लूकोज़ के ऑक्सीकरण से भिन्न जीवों में ऊर्जा प्राप्त करने के विभिन्न पथ क्या हैं?' },
      a: { en: 'First, **`6-C` Glucose -> `3-C` Pyruvate in Cytoplasm**. Then **3 paths (`Fig 5.8`)**: **(1) Absence of `O₂` (`Yeast`)** -> Ethanol (`2-C`) + `CO₂` + Energy; **(2) Lack of `O₂` (`Muscle cells`)** -> **Lactic Acid (`3-C`)** + Energy; **(3) Presence of `O₂` (`Mitochondria`)** -> `CO₂ + H₂O` + High ATP Energy.', hi: 'कोशिकाद्रव्य में `6C` ग्लूकोज़ → `3C` पायरूवेट बनता है, फिर 3 पथ: **(1) यीस्ट (`O₂` बिना)**: इथेनॉल + `CO₂` + कम ऊर्जा; **(2) पेशियाँ (`O₂` अभाव)**: लैक्टिक अम्ल + ऊर्जा; **(3) माइटोकॉन्ड्रिया (`O₂` उपस्थिति)**: `CO₂ + H₂O` + उच्च ATP ऊर्जा।' },
    },
    {
      num: 'p.101 Q3',
      q: { en: 'How is oxygen and carbon dioxide transported in human beings?', hi: 'मनुष्यों में ऑक्सीजन तथा कार्बन डाइऑक्साइड का परिवहन कैसे होता है?' },
      a: { en: '**Oxygen (`O₂`)** binds with high affinity to the red respiratory pigment **Haemoglobin (`inside RBCs`)**, whereas **`CO₂` is far more soluble in water** so it is mainly transported in **dissolved form in blood plasma**.', hi: '**ऑक्सीजन (`O₂`)** लाल रुधिर कणिकाओं में उपस्थित श्वसन वर्णक **हीमोग्लोबिन** से जुड़कर ऊतकों तक जाती है, जबकि **`CO₂` जल में अधिक विलेय** होने से मुख्यतः **रुधिर प्लाज्मा में घुली अवस्था** में परिवहित होती है।' },
    },
    {
      num: 'p.101 Q4',
      q: { en: 'How are the lungs designed in human beings to maximise the area for exchange of gases?', hi: 'गैसों के विनिमय के लिए मानव-फुफ्फुस में अधिकतम क्षेत्रफल को कैसे अभिकल्पित किया है?' },
      a: { en: 'Within lungs, air passages branch into finer **bronchioles** ending in millions of thin-walled balloon-like **Alveoli (`कूपिका`)** laced with capillaries — unfolded, human alveoli cover **`~80 m²` (`NCERT p.101`)** for rapid diffusion!', hi: 'फुफ्फुस के भीतर श्वसन नलिकाएँ छोटी होकर करोड़ों गुब्बारे जैसी पतली **कूपिकाओं (`Alveoli`)** में समाप्त होती हैं, जिनमें सघन केशिका जाल होता है — फैलाने पर इनकी कुल विनिमय सतह **`~80 वर्ग मीटर`** होती है!' },
    },
    {
      num: 'p.106 Q1',
      q: { en: 'What are the components of the transport system in human beings? What are the functions of these components?', hi: 'मानव में वहन तंत्र के घटक कौन से हैं? इन घटकों के क्या कार्य हैं?' },
      a: { en: '**(1) Heart**: Muscular 4-chamber pump pushing blood separately (`O₂` & `CO₂`); **(2) Blood**: Plasma (`transports food, CO₂, salts, urea`), RBCs (`O₂` via haemoglobin), WBCs (`defense`), **Platelets** (`clot leaks`); **(3) Blood Vessels**: **Arteries** (`away`), **Veins** (`valved return`), **Capillaries** (`1-cell exchange`); **(4) Lymph**: Drains interstitial fluid & carries **digested intestinal fats**.', hi: '**(1) हृदय**: दोहरा पंपन अंग; **(2) रुधिर**: प्लाज्मा (भोजन/CO₂/अपशिष्ट), RBC (हीमोग्लोबिन संग `O₂`), प्लेटलेट्स (`थक्का बनाना`); **(3) रुधिर वाहिकाएँ**: धमनी, वाल्वयुक्त शिरा व केशिका; **(4) लसीका**: ऊतक तरल व पची वसा का वहन।' },
    },
    {
      num: 'p.106 Q2',
      q: { en: 'Why is it necessary to separate oxygenated and deoxygenated blood in mammals and birds?', hi: 'स्तनधारी तथा पक्षियों में ऑक्सीजनित तथा विऑक्सीजनित रुधिर को अलग करना क्यों आवश्यक है?' },
      a: { en: 'Mammals & birds are **warm-blooded (`high constant energy demand` to regulate constant body temperature)** — strict septum separation prevents mixing so tissues receive **highly efficient `O₂` supply**.', hi: 'पक्षी व स्तनधारी जंतुओं को अपने **शरीर का स्थिर तापक्रम बनाए रखने हेतु निरंतर उच्च ऊर्जा** चाहिए, अतः शुद्ध `O₂` रक्त को `CO₂`-रक्त से अलग रखना उच्च ऑक्सीजन दक्षता के लिए अनिवार्य है (`पृ. 103`)।' },
    },
    {
      num: 'p.106 Q3',
      q: { en: 'What are the components of the transport system in highly organised plants?', hi: 'उच्च संगठित पादप में वहन तंत्र के घटक क्या हैं?' },
      a: { en: 'Two independent vascular conducting tubes: **(1) Xylem (`tracheids & vessels`)** conducting soil water & minerals upward; **(2) Phloem (`sieve tubes & companion cells`)** translocating soluble sugars (`sucrose`) & amino acids everywhere.', hi: 'दो स्वतंत्र संवहन ऊतक: **(1) जाइलम (`वाहिनिका व वाहिका`)** — जल व खनिज वहन; **(2) फ्लोएम (`चालनी नलिका व साथी कोशिका`)** — पत्तियों के भोजन व अमीनो अम्ल का स्थानांतरण।' },
    },
    {
      num: 'p.106 Q4',
      q: { en: 'How are water and minerals transported in plants?', hi: 'पादप में जल और खनिज लवण का वहन कैसे होता है?' },
      a: { en: 'Continuous root-stem-leaf **Xylem** channels carry them via two physical pulls: **(i) Root Pressure (`at night`)** from active soil ion uptake drawing osmotic water in; **(ii) Transpiration Pull (`by day`)** as water evaporates from stomata sucking water upward (`Fig 5.12`).', hi: 'जड़, तना व पत्तियों की सतत जाइलम वाहिकाओं में **रात्रि में मूल दाब** (`आयन अवशोषण → परासरण`) तथा **दिन में रंध्रों से वाष्पोत्सर्जन द्वारा उत्पन्न चूषण कर्षण** जल व खनिज को ऊपर खींचता है।' },
    },
    {
      num: 'p.106 Q5',
      q: { en: 'How is food transported in plants?', hi: 'पादप में भोजन का स्थानांतरण कैसे होता है?' },
      a: { en: '**Phloem** performs bidirectional **Translocation** (`sieve tubes + companion cells`): **Sucrose is loaded actively into phloem spending `ATP`**, raising **osmotic pressure** so water enters and drives nutrients smoothly toward lower-pressure tissues (`roots, fruits, spring buds`).', hi: '**फ्लोएम** द्वारा पत्तियों के खाद्य (`सुक्रोज`) व अमीनो अम्ल का दोनों दिशाओं में **स्थानांतरण** होता है: **ATP ऊर्जा से सुक्रोज फ्लोएम में जाने पर परासरण दाब बढ़ता है**, जिससे जल अंदर आकर भोजन को कम-दाब वाले अंगों (फल, जड़, कलिकाएँ) में भेज देता है!' },
    },
    {
      num: 'p.109 Q1',
      q: { en: 'Describe the structure and functioning of nephrons.', hi: 'वृक्काणु (`नेफ्रॉन`) की रचना तथा क्रियाविधि का वर्णन कीजिए।' },
      a: { en: '**Structure (`Fig 5.14`)**: Cup-shaped **Bowman’s Capsule** enclosing a thin-walled capillary cluster (**Glomerulus**) leading into a **renal tubule** and **collecting duct**. **Function**: High-pressure filtration squeezes urea, water, salts, glucose & amino acids (`180 L/day`) into Bowman’s cup; flowing down the tubule, **useful glucose, amino acids, salts & needed water undergo Selective Reabsorption**, leaving **1–2 L urine**!', hi: '**रचना**: कप जैसा **बोमन संपुट**, अंदर पतली केशिकाओं का **केशिकागुच्छ (`Glomerulus`)**, आगे नलिका व संग्राहक वाहिनी। **क्रिया**: रक्त से यूरिया, लवण, ग्लूकोज़ व जल (`180 L/दिन`) छनता है; नलिका में **ग्लूकोज़, अमीनो अम्ल, लवण व जल का चयनात्मक पुनरवशोषण** होकर शेष `1–2 L` मूत्र संग्राहक में जाता है।' },
    },
    {
      num: 'p.109 Q2',
      q: { en: 'What are the methods used by plants to get rid of excretory products?', hi: 'उत्सर्जी उत्पाद से छुटकारा पाने के लिए पादप किन विधियों का उपयोग करते हैं?' },
      a: { en: '**(1)** Release photosynthetic **`O₂` & respiratory `CO₂`** via stomata; **(2)** Shed excess water via **Transpiration**; **(3)** Pack wastes inside **Cellular Vacuoles**; **(4)** Store in **falling dead leaves**; **(5)** Store **Resins & Gums in old Xylem** + excrete gently into soil (`Tech 2024 PYQ`).', hi: '**(1)** रंध्रों से **`O₂`/`CO₂`** व **वाष्पोत्सर्जन से अतिरिक्त जल** त्यागना; **(2)** **रिक्तिकाओं** में संचय; **(3)** पुरानी **गिरती पत्तियों** से बाहर करना; **(4)** **पुराने जाइलम में रेज़िन व गोंद** रूप में संग्रह तथा मृदा में उत्सर्जन!' },
    },
    {
      num: 'p.109 Q3',
      q: { en: 'How is the amount of urine produced regulated?', hi: 'मूत्र बनने की मात्रा का नियमन किस प्रकार होता है?' },
      a: { en: 'Regulated by **water reabsorption** inside the nephron tubule, depending strictly on **two factors (`p.108`)**: `(1)` **how much excess water** is present in the body, and `(2)` **how much dissolved nitrogenous waste** needs to be excreted.', hi: 'मूत्र की मात्रा वृक्काणु नलिका में जल पुनरवशोषण पर निर्भर करती है, जो दो बातों से तय होती है: **(1) शरीर में उपलब्ध अतिरिक्त जल की मात्रा**, तथा **(2) कितना विलेय नाइट्रोजनी वर्ज्य पदार्थ उत्सर्जित करना है (`पृ. 108`)**।' },
    },
  ],
  exercises: [
    {
      num: 'Ex Q1',
      q: { en: 'The kidneys in human beings are a part of the system for: `(a)` nutrition `(b)` respiration `(c)` excretion `(d)` transportation.', hi: 'मनुष्य में वृक्क एक तंत्र का भाग है जो संबंधित है — `(a)` पोषण `(b)` श्वसन `(c)` उत्सर्जन `(d)` परिवहन।' },
      a: { en: '**`(c)` Excretion (`NCERT Key verified!`)** — kidneys filter soluble nitrogenous urea/uric acid via nephrons.', hi: '**`(c)` उत्सर्जन (`NCERT उत्तरकुंजी सत्यापित`)**।' },
    },
    {
      num: 'Ex Q2',
      q: { en: 'The xylem in plants are responsible for: `(a)` transport of water `(b)` transport of food `(c)` transport of amino acids `(d)` transport of oxygen.', hi: 'पादप में जाइलम उत्तरदायी है — `(a)` जल का वहन `(b)` भोजन का वहन `(c)` अमीनो अम्ल का वहन `(d)` ऑक्सीजन का वहन।' },
      a: { en: '**`(a)` Transport of water (`and dissolved minerals — NCERT Key verified!`)**.', hi: '**`(a)` जल का वहन (`NCERT उत्तरकुंजी सत्यापित`)**।' },
    },
    {
      num: 'Ex Q3',
      q: { en: 'The autotrophic mode of nutrition requires: `(a)` carbon dioxide and water `(b)` chlorophyll `(c)` sunlight `(d)` all of the above.', hi: 'स्वपोषी पोषण के लिए आवश्यक है — `(a)` `CO₂` तथा जल `(b)` क्लोरोफिल `(c)` सूर्य का प्रकाश `(d)` उपरोक्त सभी।' },
      a: { en: '**`(d)` All of the above (`NCERT Key verified!`)**.', hi: '**`(d)` उपरोक्त सभी (`NCERT उत्तरकुंजी सत्यापित`)**।' },
    },
    {
      num: 'Ex Q4',
      q: { en: 'The breakdown of pyruvate to give carbon dioxide, water and energy takes place in: `(a)` cytoplasm `(b)` mitochondria `(c)` chloroplast `(d)` nucleus.', hi: 'पायरूवेट के विखंडन से यह `CO₂`, जल तथा ऊर्जा देता है और यह क्रिया होती है — `(a)` कोशिकाद्रव्य `(b)` माइटोकॉन्ड्रिया `(c)` हरितलवक `(d)` केंद्रक।' },
      a: { en: '**`(b)` Mitochondria (`NCERT Key verified!`)** — whereas initial `Glucose -> Pyruvate` happens in cytoplasm.', hi: '**`(b)` माइटोकॉन्ड्रिया (`NCERT उत्तरकुंजी सत्यापित`)**।' },
    },
    {
      num: 'Ex Q5',
      q: { en: 'How are fats digested in our bodies? Where does this process take place?', hi: 'हमारे शरीर में वसा का पाचन कैसे होता है? यह प्रक्रम कहाँ होता है?' },
      a: { en: 'Fat digestion finishes strictly in the **Small Intestine (`क्षुद्रांत्र`)**: First, **Bile salts (`liver`) emulsify large fat globules** into tiny droplets increasing enzyme surface area; then **Pancreatic Lipase** + **Intestinal Juice** break emulsified fats into absorbable **Fatty Acids + Glycerol** (`absorbed via lymph lacteals in villi`).', hi: 'यह प्रक्रम **क्षुद्रांत्र (`छोटी आँत`)** में होता है: पहले **यकृत के पित्त लवण** बड़ी वसा गोलिकाओं को **इमल्सीकृत** कर छोटे कण बनाते हैं, फिर अग्न्याशय का **लाइपेज** व आंत्र रस इन्हें **वसा अम्ल व ग्लिसरॉल** में बदल देते हैं।' },
    },
    {
      num: 'Ex Q6',
      q: { en: 'What is the role of saliva in the digestion of food?', hi: 'भोजन के पाचन में लार की क्या भूमिका है?' },
      a: { en: '**(1)** Moistens crushed food so muscular tongue & delicate gut swallow smoothly; **(2)** Contains **Salivary Amylase (`लार एमिलेस`)** enzyme converting complex **starch -> simple sugar** right inside the mouth (`Act 5.3`).', hi: '**(1)** भोजन को गीला व चिकना बनाती है जिससे निगलना सरल हो; **(2)** इसमें मौजूद **लार एमिलेस एंजाइम** जटिल मंड को मुख में ही **सरल शर्करा** में बदलता है।' },
    },
    {
      num: 'Ex Q7',
      q: { en: 'What are the necessary conditions for autotrophic nutrition and what are its byproducts?', hi: 'स्वपोषी पोषण के लिए आवश्यक परिस्थितियाँ कौन-सी हैं और उसके उपोत्पाद क्या हैं?' },
      a: { en: '**Conditions**: **`CO₂`, Water, Sunlight & Chlorophyll**. **Main product**: Glucose (`stored as Starch`); **Byproduct**: **Oxygen (`O₂`) gas** (`+ water molecules`).', hi: '**परिस्थितियाँ**: `CO₂`, जल, सूर्यप्रकाश व क्लोरोफिल। **उपोत्पाद**: **ऑक्सीजन (`O₂`)** (`तथा ग्लूकोज़ व जल`)।' },
    },
    {
      num: 'Ex Q8',
      q: { en: 'What are the differences between aerobic and anaerobic respiration? Name some organisms that use the anaerobic mode.', hi: 'वायवीय तथा अवायवीय श्वसन में क्या अंतर हैं? कुछ जीवों के नाम लिखिए जिनमें अवायवीय श्वसन होता है।' },
      a: { en: '**Aerobic**: Needs **`O₂`**, occurs in **mitochondria**, complete glucose oxidation to **`CO₂ + H₂O`**, yields **high ATP** (`humans, plants`). **Anaerobic**: **No `O₂`**, occurs in **cytoplasm**, incomplete breakdown to **Ethanol/`CO₂` or Lactic Acid**, low energy. **Examples**: **Yeast**, certain **bacteria & tapeworms** (`+ human muscles under temporary O₂ lack`).', hi: '**वायवीय**: `O₂` आवश्यक, माइटोकॉन्ड्रिया में पूर्ण विखंडन (`CO₂+जल`) व **अधिक ऊर्जा**। **अवायवीय**: बिना `O₂`, कोशिकाद्रव्य में अपूर्ण विखंडन (**इथेनॉल/`CO₂` या लैक्टिक अम्ल**) व कम ऊर्जा — **उदाहरण**: **यीस्ट (`Yeast`), कुछ जीवाणु, परजीवी कृमि**।' },
    },
    {
      num: 'Ex Q9',
      q: { en: 'How are the alveoli designed to maximise the exchange of gases?', hi: 'गैसों के अधिकतम विनिमय के लिए कूपिकाएँ किस प्रकार अभिकल्पित हैं?' },
      a: { en: 'Millions of microscopic **balloon-like alveoli** (`~80 m²` area when spread flat!) possess ultra-thin permeable walls lined tightly by an **extensive network of blood capillaries** for rapid `O₂`/`CO₂` diffusion (`Tech 2024 Shift 11`).', hi: 'लाखों गुब्बारे जैसी सूक्ष्म **कूपिकाओं की पतली भित्ति** पर रुधिर केशिकाओं का व्यापक जाल होता है, जो **~`80 m²`** विशाल विसरण सतह प्रदान करती हैं।' },
    },
    {
      num: 'Ex Q10',
      q: { en: 'What would be the consequences of a deficiency of haemoglobin in our bodies?', hi: 'हमारे शरीर में हीमोग्लोबिन की कमी के क्या परिणाम हो सकते हैं?' },
      a: { en: '**Haemoglobin (`in RBCs`)** binds and carries `O₂` from lungs to tissues. Deficiency (**Anaemia**) sharply lowers blood oxygen-carrying capacity -> causing fatigue, weakness, breathlessness & reduced cellular energy (`remember without Hb diffusion takes 3 years!`).', hi: 'हीमोग्लोबिन की कमी (**एनीमिया**) से फेफड़ों से कोशिकाओं तक **ऑक्सीजन संवहन क्षमता घट जाएगी**, जिससे थकान, कमजोरी, साँस फूलना व कम ऊर्जा उत्पादन होगा।' },
    },
    {
      num: 'Ex Q11',
      q: { en: 'Describe double circulation of blood in human beings. Why is it necessary?', hi: 'मनुष्य में दोहरा परिसंचरण की व्याख्या कीजिए। यह क्यों आवश्यक है?' },
      a: { en: 'In every complete body cycle, blood passes through the heart **TWICE (`Fig 5.11`)**: **(1)** Right Atrium/Ventricle pump deoxygenated blood -> Lungs (`Pulmonary Circuit`) & Pulmonary Vein brings `O₂` blood back to Left Atrium; **(2)** Left Ventricle pumps `O₂` blood via Aorta -> Body (`Systemic Circuit`). **Necessity**: **4 chambers stop `O₂/CO₂` mixing**, supplying top energy for warm-blooded homeostasis (`p.103`).', hi: 'रक्त एक पूर्ण चक्र में हृदय से **दो बार गुजरता है**: दायाँ भाग विऑक्सीजनित रक्त फेफड़ों में भेजता है, और बायाँ भाग फेफड़ों से आया शुद्ध `O₂` रक्त महाधमनी द्वारा पूरे शरीर में पंप करता है। **आवश्यकता**: उच्च ऊर्जा वाले **पक्षी व स्तनधारी शरीर का तापमान स्थिर रखने हेतु शुद्ध व अशुद्ध रक्त को पृथक** रखना अनिवार्य है!' },
    },
    {
      num: 'Ex Q12',
      q: { en: 'What are the differences between the transport of materials in xylem and phloem?', hi: 'जाइलम तथा फ्लोएम में पदार्थों के वहन में क्या अंतर है?' },
      a: { en: '**Xylem**: Transports **water & soil minerals**, **UNIDIRECTIONAL upward only**, uses **physical forces (`Root pressure & Transpiration pull`, NO ATP)** inside dead tracheids/vessels. **Phloem**: Translocates **soluble sucrose & amino acids**, **BIDIRECTIONAL (`up & down`)**, uses **living sieve tubes + companion cells spending `ATP`**!', hi: '**जाइलम**: जल व खनिज, **केवल ऊपर की ओर (`एकदिशिक`)**, बिना ATP के भौतिक बल (**मूल दाब व वाष्पोत्सर्जन कर्षण**)। **फ्लोएम**: भोजन (`सुक्रोज`) व अमीनो अम्ल, **दोनों दिशाएँ (`द्विदिशिक ↑↓`)**, जीवित चालनी नलिकाओं में **`ATP` ऊर्जा व परासरण दाब** द्वारा!' },
    },
    {
      num: 'Ex Q13',
      q: { en: 'Compare the functioning of alveoli in the lungs and nephrons in the kidneys with respect to their structure and functioning.', hi: 'फुफ्फुस में कूपिकाओं की तथा वृक्क में वृक्काणु (`नेफ्रॉन`) की रचना तथा क्रियाविधि की तुलना कीजिए।' },
      a: { en: '**Similarity**: Both are microscopic high-surface-area thin-walled units packed with dense **blood capillary networks** removing waste (`CO₂` vs `Urea`). **Differences**: **Alveoli** (`balloon sacs in lungs`) exchange **gases (`O₂ in, CO₂ out`) via simple diffusion**; **Nephrons** (`Bowman’s capsule + glomerulus + coiled tubules in kidneys`) remove **liquid nitrogenous urea (`180 L filtrate -> 1–2 L urine`) via pressure ultrafiltration + selective tubular reabsorption**.', hi: '**समानता**: दोनों में पतली भित्ति व सघन केशिका जाल से विशाल कार्य-क्षेत्र मिलता है। **अंतर**: **कूपिका** फेफड़ों में गुब्बारे जैसी रचना है जो विसरण से **गैसें (`O₂/CO₂`) बदलती** है, जबकि **नेफ्रॉन** वृक्क की नलिकाकार इकाई है जो उच्च दाब निस्यंदन + **चयनात्मक पुनरवशोषण** द्वारा रक्त से तरल **यूरिया (`180 L → 1–2 L मूत्र`)** अलग करती है!' },
    },
  ],
  flashcards: [
    { front: { en: 'What proves Viruses are non-living outside a host (`p.88`) & Plant vs Animal carbohydrate storage?', hi: 'विषाणु सजीव/निर्जीव विवाद का कारण एवं पौधे vs जंतु में कार्बोहाइड्रेट संचय रूप?' }, back: { en: 'Viruses show **NO molecular movement** until infecting a cell! Plants store **Starch**, Humans store **Glycogen**.', hi: 'कोशिका बाहर **आणविक गति नहीं**! पौधों में **मंड/स्टार्च** व मानव में **ग्लाइकोजन** संचय।' } },
    { front: { en: 'Which plants take in `CO₂` at NIGHT & how do guard cells open stomata?', hi: 'कौन-से पौधे रात में `CO₂` लेते हैं व रंध्र कैसे खुलते हैं?' }, back: { en: '**Desert plants** take `CO₂` at night -> intermediate! Water enters guard cells -> **swell (`turgid`) -> pore opens** (`Tech Shift 11`).', hi: '**मरुद्भिद पौधे** रात में `CO₂` लेते हैं! जल प्रवेश से द्वार कोशिका फूलती है और रंध्र खुलता है।' } },
    { front: { en: 'Act 5.1 Alcohol Bath + Act 5.2 `KOH` Watch Glass purpose?', hi: 'क्रियाकलाप 5.1 में अल्कोहल व 5.2 में `KOH` का क्या कार्य है?' }, back: { en: 'Boiling **alcohol (`water bath`)** extracts chlorophyll; **`KOH`** inside bell jar absorbs **`CO₂`** proving both are essential!', hi: 'अल्कोहल पत्ती का क्लोरोफिल हटाता है; **`KOH` `CO₂` अवशोषित** करता है।' } },
    { front: { en: 'Role of Stomach `HCl` vs Liver Bile Juice vs Pancreatic Trypsin (`p.95–96`)?', hi: 'आमाशय का `HCl`, यकृत पित्तरस व अग्न्याशय ट्रिप्सिन का मुख्य कार्य?' }, back: { en: '**`HCl`** makes acidic pH for **Pepsin**; **Bile** makes food **alkaline + emulsifies fats (`no enzymes`)**; **Trypsin** digests **proteins**!', hi: '`HCl`: अम्लीय माध्यम (`पेप्सिन`); **पित्त**: क्षारीय + वसा इमल्सीकरण; **ट्रिप्सिन**: प्रोटीन पाचन।' } },
    { front: { en: 'Fig 5.8 Pyruvate (`3-C`) splits in Cytoplasm -> Mitochondria -> Muscle -> Yeast?', hi: 'पायरूवेट (`3C`) यीस्ट, पेशी कोशिका व माइटोकॉन्ड्रिया में क्या बनाता है (`चित्र 5.8`)?' }, back: { en: '**Yeast**: Ethanol (`2C`)+`CO₂`; **Muscle (`low O₂`)**: Lactic acid (`3C`, cramps); **Mitochondria (`+O₂`)**: `CO₂+H₂O+ATP` (**`30.5 kJ/mol`**)!', hi: '**यीस्ट**: इथेनॉल+`CO₂`; **पेशी**: लैक्टिक अम्ल (`क्रैम्प`); **माइटोकॉन्ड्रिया**: `CO₂+H₂O+ATP (30.5 kJ/mol)`!' } },
    { front: { en: '3 Awesome NCERT Numbers: Alveoli Surface Area, `O₂` Diffusion without Hb, & Nephron Filtrate?', hi: '3 अद्भुत NCERT आँकड़े: कूपिका क्षेत्र, बिना हीमोग्लोबिन विसरण समय व नेफ्रॉन निस्यंद?' }, back: { en: 'Alveoli = **`~80 m²`** | Lung-to-toe without Haemoglobin = **`~3 years`** | Initial nephron filtrate = **`180 L/day -> 1–2 L` urine**!', hi: 'कूपिका = **`80 m²`** | बिना Hb विसरण = **`3 वर्ष`** | नेफ्रॉन = **`180 L → 1–2 L` मूत्र**!' } },
    { front: { en: 'Heart Chambers: Fish vs Amphibian/Reptile vs Bird/Mammal & Why Ventricles Thick?', hi: 'मछली, उभयचर व पक्षी/मानव हृदय में कोष्ठ संख्या व निलय भित्ति मोटी क्यों?' }, back: { en: 'Fish **`2` (`Single`)** | Amphibian/Reptile **`3`** | Bird/Mammal **`4` (`Double`, warm-blooded energy)**. Ventricles pump high pressure!', hi: 'मछली **`2`** | उभयचर/सरीसृप **`3`** | पक्षी/स्तनधारी **`4`** (`स्थिर ताप हेतु`); निलय उच्च दाब से पंप करते हैं!' } },
    { front: { en: 'Arteries vs Veins vs Capillaries + Blood Pressure (`120/80`) Instrument + Lymph?', hi: 'धमनी-शिरा अंतर, रक्तदाब यंत्र एवं लसीका (`Lymph`) का विशिष्ट कार्य?' }, back: { en: 'Artery (`no valves`) vs Veins (**`VALVES`**). BP = **`120/80 mmHg`** (**Sphygmomanometer**). **Lymph** carries **absorbed gut Fats**!', hi: 'शिरा में **वाल्व**! BP = `120/80 mmHg` (**स्फाईग्मोमैनोमीटर**)। **लसीका** छोटी आँत से वसा ले जाती है!' } },
    { front: { en: 'Xylem Forces (`Night vs Day`) vs Phloem Mechanism & Energy Need?', hi: 'जाइलम जल गति (`दिन vs रात`) बनाम फ्लोएम भोजन स्थानांतरण प्रक्रिया?' }, back: { en: 'Xylem (**Up only ↑**): **Night = Root Pressure** | **Day = Transpiration Pull**. Phloem (**Up+Down ↑↓**): Active **ATP loading -> osmotic water push**!', hi: 'जाइलम (`ऊपर ↑`): रात **मूल दाब**, दिन **वाष्पोत्सर्जन कर्षण**; फ्लोएम (`दोनों ओर ↑↓`): **ATP सक्रिय लोडिंग**!' } },
    { front: { en: 'Nephron (`Reabsorption ✓`) vs Dialysis (`NO Reabsorption`) + 5 Plant Wastes?', hi: 'नेफ्रॉन बनाम कृत्रिम अपोहन अंतर एवं पादप उत्सर्जन के 5 तरीके?' }, back: { en: '**Dialysis filters urea without reabsorption** (`p.108`). Plants remove `O₂`, Transpiration vapor, **Vacuoles**, falling leaves & **Resins/Gums in old Xylem**!', hi: '**अपोहन में पुनरवशोषण नहीं होता**! पौधे `O₂`, वाष्पोत्सर्जन, रिक्तिका, पत्तियाँ व **पुराने जाइलम में रेज़िन-गोंद** जमा करते हैं!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-b5-1',
      examTag: 'RRB ALP 2025 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.2): Phloem Translocation',
      question: {
        en: 'Which of the following processes is responsible for the transportation of soluble products formed by photosynthesis in different parts of plant?',
        hi: 'पौधे के विभिन्न भागों में प्रकाश संश्लेषण द्वारा निर्मित विलेय उत्पादों के परिवहन हेतु निम्नलिखित में से कौन-सी प्रक्रिया उत्तरदायी है?',
      },
      options: {
        en: ['Termination', 'Translocation', 'Transpiration', 'Assimilation'],
        hi: ['समापन (Termination)', 'स्थानांतरण (Translocation)', 'वाष्पोत्सर्जन (Transpiration)', 'स्वांगीकरण (Assimilation)'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim **NCERT `p.106`**: transport of soluble photosynthesis products (`sucrose + amino acids`) by **Phloem** is called **Translocation**.',
        hi: 'सटीक NCERT (`पृ. 106`): फ्लोएम द्वारा प्रकाश संश्लेषण के विलेय उत्पादों का वहन **स्थानांतरण (`Translocation`)** कहलाता है।',
      },
    },
    {
      id: 'pyq-b5-2',
      examTag: 'RRB ALP 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.1): Thick Ventricle Walls',
      question: {
        en: 'Thicker muscular walls are present in the ventricles of the heart due to which of the following reasons?',
        hi: 'निम्नलिखित में से किस कारण, हृदय के निलय में मोटी पेशीय भित्तियाँ मौजूद होती हैं?',
      },
      options: {
        en: ['To pump blood with high pressure', 'To receive blood from the body and lungs', 'To control heartbeat and rhythm', 'To store blood before it enters the atria'],
        hi: ['उच्च दाब के साथ रक्त को पंप करने के लिए', 'शरीर और फेफड़ों से रक्त प्राप्त करने के लिए', 'हृदय स्पंद और लय को नियंत्रित करने के लिए', 'रक्त को आलिंद में प्रवेश करने से पहले भंडारित करने के लिए'],
      },
      correctIndex: 0,
      solution: {
        en: 'Unlike receiving atria, **ventricles pump blood to distant organs** (`NCERT p.102`), requiring thick muscular walls to generate high pressure.',
        hi: 'अलिंद केवल रक्त ग्रहण करते हैं जबकि निलय को उच्च दाब संग पूरे शरीर/फेफड़ों में रक्त भेजना होता है, अतः निलय भित्ति मोटी होती है (`पृ. 102`)।',
      },
    },
    {
      id: 'pyq-b5-3',
      examTag: 'RRB ALP 2025 CBT Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.1): Photosynthesis Conditions',
      question: {
        en: 'Which condition will favour maximum photosynthesis?',
        hi: 'निम्नलिखित में से कौन-सी स्थिति, अधिकतम प्रकाश संश्लेषण को प्रेरित करेगी?',
      },
      options: {
        en: ['High light intensity, adequate CO₂, optimum temperature', 'Low light intensity, high CO₂, low temperature', 'High oxygen, low light intensity, high temperature', 'Low CO₂, high light intensity, optimum temperature'],
        hi: ['उच्च प्रकाश तीव्रता, पर्याप्त CO₂, इष्टतम तापमान', 'निम्न प्रकाश तीव्रता, उच्च CO₂, निम्न तापमान', 'उच्च ऑक्सीजन, निम्न प्रकाश तीव्रता, उच्च तापमान', 'निम्न CO₂, उच्च प्रकाश तीव्रता, इष्टतम तापमान'],
      },
      correctIndex: 0,
      solution: {
        en: 'Strong sunlight (`energy input`), adequate **`CO₂` (`carbon source`)**, and optimum enzyme temperature together maximize photosynthesis rate.',
        hi: 'तीव्र प्रकाश, पर्याप्त `CO₂` तथा इष्टतम एंजाइम तापमान मिलकर प्रकाश संश्लेषण की दर को अधिकतम करते हैं।',
      },
    },
    {
      id: 'pyq-b5-4',
      examTag: 'RRB ALP 2025 CBT Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.4): Bile Salt Emulsification',
      question: {
        en: 'How does bile juice help in the digestion process in the small intestine?',
        hi: 'पित्त रस, छोटी आंत में पाचन प्रक्रिया में कैसे सहायता करता है?',
      },
      options: {
        en: ['It digests proteins into amino acids', 'It secretes digestive enzymes', 'It absorbs nutrients into blood vessels', 'It emulsifies fats into smaller globules'],
        hi: ['यह प्रोटीन का ऐमीनो अम्ल में पाचन करता है', 'यह पाचक एंजाइमों का स्राव करता है', 'यह पोषक तत्वों को रक्त वाहिकाओं में अवशोषित करता है', 'यह वसा को छोटी गोलिकाओं में इमल्सीकृत करता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Exact **NCERT `p.95`**: **Bile juice (`no enzymes!`)** makes food alkaline AND **emulsifies large fat globules** so pancreatic lipase acts efficiently.',
        hi: 'सटीक NCERT `पृ. 95`: पित्तरस बड़ी वसा गोलिकाओं को **छोटी गोलिकाओं में इमल्सीकृत** कर एंजाइम क्रियाशीलता बढ़ाता है।',
      },
    },
    {
      id: 'pyq-b5-5',
      examTag: 'RRB Group D 2025 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.2): ATP Loading into Phloem',
      question: {
        en: 'What is the primary mechanism by which sucrose moves into phloem tissue in plants?',
        hi: 'पादपों में सुक्रोज किस प्राथमिक प्रक्रिया द्वारा फ्लोएम ऊतक में प्रवेश करता है?',
      },
      options: {
        en: ['Osmosis through a semi-permeable membrane', 'Facilitated diffusion via carrier proteins', 'Simple diffusion along the gradient', 'Active transport with energy from ATP'],
        hi: ['अर्द्ध-पारगम्य झिल्ली के माध्यम से परासरण', 'वाहक प्रोटीन के माध्यम से सुगम विसरण', 'प्रवणता के अनुदिश सरल विसरण', 'ATP से ऊर्जा के साथ सक्रिय परिवहन'],
      },
      correctIndex: 3,
      solution: {
        en: 'Exact **NCERT `p.106`**: *"Material like sucrose is transferred into phloem tissue using energy from **`ATP`**"* (**Active Transport**)!',
        hi: 'सटीक NCERT (`पृ. 106`): सुक्रोज फ्लोएम ऊतक में **`ATP` से प्राप्त ऊर्जा** द्वारा सक्रिय परिवहन से प्रवेश करता है!',
      },
    },
    {
      id: 'pyq-b5-6',
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.2): Spring Bud Translocation',
      question: {
        en: 'Which process would be directly affected if a plant’s phloem were blocked during spring?',
        hi: 'यदि वसंत ऋतु के दौरान किसी पादप का फ्लोएम अवरुद्ध हो जाए, तो कौन-सी प्रक्रिया प्रत्यक्ष रूप से प्रभावित होगी?',
      },
      options: {
        en: ['Water transport from roots to leaves would decrease', 'Roots would not absorb sufficient nutrients from soil', 'Leaves would be unable to perform gas exchange', 'Buds would fail to receive sugars needed for growth'],
        hi: ['जड़ों से पत्तियों तक जल का परिवहन कम हो जाएगा', 'जड़ें मृदा से पर्याप्त पोषकों को अवशोषित नहीं करेंगी', 'पत्तियाँ गैस विनिमय करने में असमर्थ होंगी', 'कलिकाओं की वृद्धि के लिए आवश्यक शर्करा प्राप्त नहीं होगी'],
      },
      correctIndex: 3,
      solution: {
        en: 'Picked straight from **NCERT `p.106` last lines**: in spring, sugar stored in root/stem moves via phloem up to **buds needing energy to grow**!',
        hi: 'सीधे NCERT `पृ. 106` अंतिम पंक्ति से: बसंत में जड़/तने की संचित शर्करा फ्लोएम द्वारा **वृद्धिशील कलिकाओं (`Buds`)** को भेजी जाती है!',
      },
    },
    {
      id: 'pyq-b5-7',
      examTag: 'RRB Group D 2025 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.1): Starch Reserve in Plants',
      question: {
        en: 'In plants, carbohydrates produced during photosynthesis are stored in which form?',
        hi: 'पादपों में, प्रकाश-संश्लेषण के दौरान निर्मित कार्बोहाइड्रेट किस रूप में संग्रहीत होते हैं?',
      },
      options: {
        en: ['Cellulose', 'Protein', 'Starch', 'Glycogen'],
        hi: ['सेलुलोस', 'प्रोटीन', 'स्टार्च (मंड)', 'ग्लाइकोजन'],
      },
      correctIndex: 2,
      solution: {
        en: 'Plants store unused carbohydrates as **Starch (`मंड`)** (`whereas humans/animals store them as Glycogen`, `NCERT p.91`).',
        hi: 'पौधे अतिरिक्त कार्बोहाइड्रेट **स्टार्च (`मंड`)** रूप में संचित करते हैं (`जबकि मानव में ग्लाइकोजन`)।',
      },
    },
    {
      id: 'pyq-b5-8',
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.1): Primary Role of Stomata',
      question: {
        en: 'What is the primary function of stomata in plant leaves during photosynthesis?',
        hi: 'प्रकाश संश्लेषण के दौरान पौधों की पत्तियों में रंध्र (`stomata`) का प्राथमिक कार्य क्या होता है?',
      },
      options: {
        en: ['Allow gaseous exchange', 'Prevent entry of CO₂', 'Maintain constant leaf temperature', 'Absorption of Oxygen'],
        hi: ['गैसीय विनिमय की अनुमति देना', 'CO₂ के प्रवेश को रोकना', 'पत्ती का तापमान स्थिर रखना', 'ऑक्सीजन का अवशोषण'],
      },
      correctIndex: 0,
      solution: {
        en: 'Massive gaseous exchange (`CO₂` intake & `O₂` exit) for photosynthesis occurs across leaf **stomata** (`NCERT p.92`).',
        hi: 'पत्ती की सतह पर रंध्र मुख्यतः **गैसीय विनिमय (`CO₂` व `O₂`)** हेतु खुले-बंद होते हैं (`पृ. 92`)।',
      },
    },
    {
      id: 'pyq-b5-9',
      examTag: 'RRB Group D 2025 Shift 24',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.3 Fig 5.8): Aerobic Pyruvate Products',
      question: {
        en: 'During aerobic respiration in animals, the breakdown of a three-carbon pyruvate molecule produces carbon dioxide and _______.',
        hi: 'जंतुओं में वायवीय श्वसन के दौरान, तीन-कार्बन वाले पायरूवेट अणु के विघटन से कार्बन डाइऑक्साइड और _______ उत्पन्न होता है।',
      },
      options: {
        en: ['Glucose', 'Ethanol', 'Lactic acid', 'Water'],
        hi: ['ग्लूकोज़', 'एथेनॉल', 'लैक्टिक अम्ल', 'जल'],
      },
      correctIndex: 3,
      solution: {
        en: 'In mitochondria with oxygen (`Fig 5.8`), 3-C Pyruvate breaks into `CO₂`, **Water (`H₂O`)**, and large energy (`ATP`).',
        hi: 'ऑक्सीजन की उपस्थिति में माइटोकॉन्ड्रिया के भीतर पायरूवेट से `CO₂`, **जल (`Water`)** व अधिक ऊर्जा बनती है।',
      },
    },
    {
      id: 'pyq-b5-10',
      examTag: 'RRB Group D 2025 Shift 28',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.2): Osmotic Flow into Phloem',
      question: {
        en: 'What is the primary reason water moves into the phloem tissue after sucrose is actively loaded into it in plants?',
        hi: 'पौधों में सुक्रोज के फ्लोएम ऊतक में सक्रिय रूप से लोड होने के बाद, जल के उसमें प्रवेश करने का मुख्य कारण क्या है?',
      },
      options: {
        en: ['The increase in osmotic pressure draws water into the phloem', 'Water moves to phloem due to root pressure buildup', 'Pressure equalizes between phloem and xylem tissues', 'Increased ATP usage raises the temperature in the phloem'],
        hi: ['परासरण दाब में वृद्धि फ्लोएम में जल खींचती है', 'मूलों के दाब के कारण जल फ्लोएम में जाता है', 'फ्लोएम और जाइलम के बीच दाब बराबर होता है', 'ATP उपयोग से ताप बढ़ता है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.106`**: active sucrose loading **increases the osmotic pressure of the phloem tissue causing water to move into it**!',
        hi: 'सटीक NCERT `पृ. 106`: फ्लोएम में सुक्रोज प्रवेश से **परासरण दाब बढ़ जाता है जिससे जल अंदर आ जाता है**!',
      },
    },
    {
      id: 'pyq-b5-11',
      examTag: 'RRB Group D 2025 Shift 30',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Fig 5.8 / Ex Q4): Aerobic Site',
      question: {
        en: 'In animal cells, the breakdown of pyruvate using oxygen during aerobic respiration occurs in the _______.',
        hi: 'जंतु कोशिकाओं में, वायवीय श्वसन के दौरान ऑक्सीजन का उपयोग करके पायरूवेट का विघटन किसमें होता है?',
      },
      options: {
        en: ['Nucleus', 'Cytoplasm', 'Mitochondria', 'Ribosome'],
        hi: ['केंद्रक', 'कोशिकाद्रव्य', 'सूत्रकणिका (Mitochondria)', 'राइबोसोम'],
      },
      correctIndex: 2,
      solution: {
        en: 'Identical to **NCERT Ex Q4 (`p.110`)**: Aerobic oxidation of pyruvate happens inside **Mitochondria**!',
        hi: 'सीधा NCERT अभ्यास Q4 (`पृ. 97, 110`): `O₂` की उपस्थिति में पायरूवेट का विघटन **माइटोकॉन्ड्रिया (`सूत्रकणिका`)** में होता है!',
      },
    },
    {
      id: 'pyq-b5-12',
      examTag: 'RRB Group D 2025 Shift 32',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.1): Fluid Matrix of Blood',
      question: {
        en: 'Blood is a connective tissue because it links different body systems. What is the liquid matrix in which blood cells are suspended?',
        hi: 'रक्त एक संयोजी ऊतक है, क्योंकि यह शरीर के विभिन्न तंत्रों को जोड़ता है। वह तरल मैट्रिक्स क्या है जिसमें रक्त कोशिकाएँ निलंबित रहती हैं?',
      },
      options: {
        en: ['Platelets', 'Plasma', 'Cytoplasm', 'Haemoglobin'],
        hi: ['प्लेटलेट्स', 'प्लाज्मा', 'साइटोप्लाज्म', 'हीमोग्लोबिन'],
      },
      correctIndex: 1,
      solution: {
        en: '**Plasma** (`NCERT p.102`): fluid medium suspending blood cells and transporting dissolved food, `CO₂` & nitrogenous waste.',
        hi: 'रक्त का तरल माध्यम **प्लाज्मा** है जिसमें कोशिकाएँ निलंबित रहती हैं (`पृ. 102`)।',
      },
    },
    {
      id: 'pyq-b5-13',
      examTag: 'RRB Group D 2025 Shift 37',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.1): Desert Plant Night CO₂',
      question: {
        en: 'A desert plant absorbs carbon dioxide at night and uses it during the day for photosynthesis. Which property of photosynthesis does this illustrate?',
        hi: 'एक मरुस्थलीय पौधा रात में कार्बन डाइऑक्साइड को अवशोषित करता है और प्रकाश संश्लेषण के लिए दिन में इसका उपयोग करता है। यह प्रकाश संश्लेषण के किस गुण को दर्शाता है?',
      },
      options: {
        en: ['Water is unnecessary for photosynthesis in desert plants', 'Carbon dioxide is not required for photosynthesis in desert plants', 'Photosynthesis can involve intermediate compounds stored for later use', 'Photosynthesis occurs only at night in desert plants'],
        hi: ['मरुस्थलीय पौधों में प्रकाश संश्लेषण हेतु जल अनावश्यक है', 'मरुस्थलीय पौधों को `CO₂` आवश्यक नहीं है', 'प्रकाश संश्लेषण में बाद में उपयोग के लिए संग्रहीत मध्यवर्ती यौगिक शामिल हो सकते हैं', 'प्रकाश संश्लेषण केवल रात में होता है'],
      },
      correctIndex: 2,
      solution: {
        en: 'Exact **NCERT `p.91`**: Three photosynthesis events needn’t run back-to-back — desert plants store a **night-time intermediate** until sunlight activates chlorophyll!',
        hi: 'सटीक NCERT `पृ. 91`: मरुद्भिद रात में `CO₂` लेकर **मध्यवर्ती यौगिक** बनाते हैं जिसे दिन में क्लोरोफिल द्वारा अंतिम उत्पाद में बदलते हैं!',
      },
    },
    {
      id: 'pyq-b5-14',
      examTag: 'RRB Group D 2025 Shift 44',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.1): Oxygenated Return Vessel',
      question: {
        en: 'In double circulation, which vessel delivers oxygenated blood to the heart?',
        hi: 'द्वि-परिसंचरण में, निम्नलिखित में से कौन-सी वाहिका ऑक्सीजनित रक्त को हृदय तक पहुँचाती है?',
      },
      options: {
        en: ['Pulmonary vein', 'Pulmonary artery', 'Aorta', 'Vena cava'],
        hi: ['फुफ्फुसी शिरा', 'फुफ्फुसी धमनी', 'महाधमनी', 'महाशिरा'],
      },
      correctIndex: 0,
      solution: {
        en: '**Pulmonary Vein (`फुफ्फुसीय शिरा`)** brings **oxygenated blood from lungs into the Left Atrium** (`the famous vein exception!`, `Fig 5.10–5.11`).',
        hi: '**फुफ्फुसीय शिरा** फेफड़ों से **ऑक्सीजन-युक्त रक्त** बाएँ अलिंद में पहुँचाती है (अन्य शिराओं का अपवाद!)।',
      },
    },
    {
      id: 'pyq-b5-15',
      examTag: 'RRB Group D 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.4.2): Xylem Transpiration Pull',
      question: {
        en: 'What is the main force that pulls water upward through the xylem in tall trees?',
        hi: 'ऊँचे वृक्षों में वह मुख्य बल क्या है जो जाइलम के माध्यम से जल को ऊपर की ओर खींचता है?',
      },
      options: {
        en: ['Transpiration pull', 'Root pressure', 'Capillary action', 'Diffusion'],
        hi: ['वाष्पोत्सर्जन खिंचाव', 'मूल दाब', 'केशिका क्रिया', 'विसरण'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.106`**: while Root Pressure assists at night, during day when stomata open, **Transpiration Pull** is the MAJOR driving force upward!',
        hi: 'सटीक NCERT `पृ. 106`: दिन में रंध्र खुलने पर **वाष्पोत्सर्जन कर्षण (`Transpiration pull`)** ही ऊँचे पेड़ों में जल चढ़ाने वाला मुख्य प्रेरक बल है!',
      },
    },
    {
      id: 'pyq-b5-16',
      examTag: 'RRB NTPC UG 2025 Shift 36',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.3): Alveoli Gas Exchange Process',
      question: {
        en: 'The exchange of gases at the alveoli and tissues occurs by which process?',
        hi: 'एल्वियोली (`कूपिका`) और ऊतकों में गैसों का आदान-प्रदान किस प्रक्रिया द्वारा होता है?',
      },
      options: {
        en: ['Osmosis', 'Decantation', 'Diffusion', 'Filtration'],
        hi: ['परासरण', 'निस्तारण', 'विसरण (`Diffusion`)', 'निस्यंदन'],
      },
      correctIndex: 2,
      solution: {
        en: '`O₂` and `CO₂` cross thin one-cell alveolar/capillary membranes purely down concentration gradients by **Diffusion** (`NCERT Sec 5.3`).',
        hi: 'कूपिकाओं व केशिकाओं के मध्य `O₂` और `CO₂` का विनिमय सांद्रता प्रवणता के अनुसार **विसरण (`Diffusion`)** से होता है।',
      },
    },
    {
      id: 'pyq-b5-17',
      examTag: 'RRB Tech Gr-III 2024 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.4): Small Intestine Villi',
      question: {
        en: 'Select the correct option related to the function of villi in the small intestine.',
        hi: 'छोटी आँत में अंकुर (`villi / दीर्घरोम`) के कार्य से संबंधित सही विकल्प का चयन कीजिए।',
      },
      options: {
        en: ['Protection from acid', 'Helps in excretion', 'Secretion of minerals', 'Increases absorptive surface area'],
        hi: ['अम्ल से सुरक्षा करता है', 'उत्सर्जन में सहायता करता है', 'खनिजों का स्राव करता है', 'अवशोषण सतह क्षेत्र को बढ़ाता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Finger-like **Villi** inside the small intestine dramatically expand **surface area for food absorption** (`NCERT p.95 & In-Text Q5`).',
        hi: 'दीर्घरोम अवशोषण का **सतही क्षेत्रफल अत्यधिक बढ़ाते हैं** (`पृ. 95 व प्रश्‍न 5`)।',
      },
    },
    {
      id: 'pyq-b5-18',
      examTag: 'RRB Tech Gr-III 2024 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.1): Guard Cell Osmosis',
      question: {
        en: 'When water enters into the guard cells, the guard cells ______ and the stomatal pore ______.',
        hi: 'जब पानी द्वारकोशिकाओं में प्रवेश करता है, तो द्वारकोशिकाएँ ______ और रंध्र ______।',
      },
      options: {
        en: ['swell; opens', 'shrink; closes', 'swell; shrinks', 'shrink; opens'],
        hi: ['फूल जाती हैं; खुल जाते हैं', 'सिकुड़ती हैं; बंद हो जाते हैं', 'फूल जाती हैं; सिकुड़ जाते हैं', 'सिकुड़ती हैं; खुल जाते हैं'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.92`**: *"The guard cells **swell** when water flows into them, causing the stomatal pore to **open**"*!',
        hi: 'सटीक NCERT `पृ. 92`: जल अंदर जाने पर द्वार कोशिकाएँ **फूल जाती हैं और रंध्र का छिद्र खुल जाता है**!',
      },
    },
    {
      id: 'pyq-b5-19',
      examTag: 'RRB Tech Gr-III 2024 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Fig 5.8): Pyruvate Statements Trap',
      question: {
        en: 'Which statements are correct related to respiration? `(i)` Pyruvate becomes ethanol + CO₂ in yeast fermentation. `(ii)` Breakdown of pyruvate using oxygen takes place in chloroplast. `(iii)` In muscle cells, pyruvate converts into lactic acid.',
        hi: 'श्वसन से संबंधित कौन-सा/से कथन सही है/हैं? `(i)` यीस्ट किण्वन में पायरूवेट इथेनॉल व `CO₂` बनता है। `(ii)` `O₂` से पायरूवेट का विखंडन हरित लवक में होता है। `(iii)` पेशी कोशिकाओं में पायरूवेट लैक्टिक अम्ल बनता है।',
      },
      options: {
        en: ['Only (i) and (iii)', '(i), (ii) and (iii)', 'Only (i) and (ii)', 'Only (i)'],
        hi: ['केवल (i) और (iii)', '(i), (ii) और (iii)', 'केवल (i) और (ii)', 'केवल (i)'],
      },
      correctIndex: 0,
      solution: {
        en: 'Statements `(i)` & `(iii)` are exact NCERT Fig 5.8; **`(ii)` is FALSE** because aerobic pyruvate breakdown occurs in **Mitochondria (`NOT chloroplast!`)**.',
        hi: '`(i)` व `(iii)` सत्य हैं; **`(ii)` गलत** है क्योंकि वायवीय विखंडन **माइटोकॉन्ड्रिया** में होता है (`हरितलवक में नहीं`)!',
      },
    },
    {
      id: 'pyq-b5-20',
      examTag: 'RRB Tech Gr-III 2024 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.4): Trypsin Secreting Gland',
      question: {
        en: 'Which of the following glands secretes trypsin enzyme?',
        hi: 'निम्नलिखित में से कौन-सी ग्रंथि ट्रिप्सिन एंजाइम का स्राव करती है?',
      },
      options: {
        en: ['Pancreas', 'Salivary gland', 'Liver', 'Gastric gland'],
        hi: ['अग्न्याशय (Pancreas)', 'लार ग्रंथि (Salivary gland)', 'यकृत (Liver)', 'जठर ग्रंथि (Gastric gland)'],
      },
      correctIndex: 0,
      solution: {
        en: 'Pancreatic juice from **Pancreas** supplies **Trypsin** (`proteins` in alkaline pH) and **Lipase** (`emulsified fats`) (`NCERT p.95`).',
        hi: '**अग्न्याशय (`Pancreas`)** अग्न्याशयिक रस स्रावित करता है जिसमें प्रोटीन पाचन हेतु **ट्रिप्सिन** होता है (`पृ. 95`)।',
      },
    },
    {
      id: 'pyq-b5-21',
      examTag: 'RRB Tech Gr-III 2024 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Fig 5.13): Urinary System Pairs',
      question: {
        en: 'Which of the following is INCORRECTLY matched related to the excretory system of humans?',
        hi: 'मनुष्यों के उत्सर्जन तंत्र से संबंधित निम्नलिखित में से कौन-सा विकल्प सुमेलित नहीं है?',
      },
      options: {
        en: ['Ureter - a pair', 'Urinary bladder - unpaired', 'Kidney - a pair', 'Urethra - a pair'],
        hi: ['मूत्रवाहिनी - एक युग्म', 'मूत्राशय - अयुग्मित', 'वृक्क - एक युग्म', 'मूत्रमार्ग - एक युग्म'],
      },
      correctIndex: 3,
      solution: {
        en: 'Exact **NCERT `p.107`**: **a pair of kidneys, a pair of ureters, a urinary bladder (`1`), and a urethra (`1` — UNPAIRED, NOT a pair!)**.',
        hi: 'सटीक NCERT `पृ. 107`: एक जोड़ा वृक्क, एक जोड़ा मूत्रवाहिनी, **एक मूत्राशय व एक मूत्रमार्ग** (`अयुग्मित`)!',
      },
    },
    {
      id: 'pyq-b5-22',
      examTag: 'RRB Tech Gr-III 2024 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.3 Fig 5.8): Glucose -> Pyruvate Site',
      question: {
        en: 'Where is glucose converted into pyruvate?',
        hi: 'ग्लूकोज़, पायरूवेट में कहाँ परिवर्तित होता है?',
      },
      options: {
        en: ['Mitochondria', 'Ribosome', 'Golgi-complex', 'Cytoplasm'],
        hi: ['सूत्रकणिका (Mitochondria)', 'राइबोसोम (Ribosome)', 'गॉल्जीकाय (Golgi-complex)', 'कोशिका द्रव्य (Cytoplasm)'],
      },
      correctIndex: 3,
      solution: {
        en: 'First step (`6-C Glucose -> 3-C Pyruvate`, common to both aerobic and anaerobic pathways) ALWAYS occurs in **Cytoplasm** (`NCERT p.97`).',
        hi: 'ग्लूकोज़ से पायरूवेट बनने का प्रथम चरण सदैव **कोशिकाद्रव्य (`Cytoplasm`)** में संपन्न होता है (`पृ. 97`)।',
      },
    },
    {
      id: 'pyq-b5-23',
      examTag: 'RRB Tech Gr-III 2024 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.2.4): Stomach Gastric Glands',
      question: {
        en: 'In the digestive system, which of the following releases hydrochloric acid, a protein digesting enzyme called pepsin, and mucus?',
        hi: 'पाचन तंत्र में, निम्नलिखित में से कौन हाइड्रोक्लोरिक अम्ल, पेप्सिन नामक प्रोटीन पाचक एंजाइम और श्लेष्मा (`mucus`) छोड़ता है?',
      },
      options: {
        en: ['Gastric glands', 'Pancreas', 'Gall bladder', 'Salivary glands'],
        hi: ['जठर ग्रंथियाँ (Gastric glands)', 'अग्न्याशय (Pancreas)', 'पित्ताशय (Gall bladder)', 'लार ग्रंथियाँ (Salivary glands)'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `p.95`**: digestion in stomach is carried out by **Gastric Glands** releasing **`HCl` + Pepsin + Mucus**.',
        hi: 'सटीक NCERT `पृ. 95`: आमाशय की भित्ति में स्थित **जठर ग्रंथियाँ** `HCl`, पेप्सिन व श्लेष्मा का स्रावण करती हैं।',
      },
    },
    {
      id: 'pyq-b5-24',
      examTag: 'RRB Tech Gr-III 2024 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 5 (Sec 5.5.2): Plant Excretion Strategies',
      question: {
        en: 'Which are correct for how plants get rid of waste material? `A.` Excess water removed by transpiration. `B.` Waste stored in leaves that fall off. `C.` Resins & gums stored especially in old xylem.',
        hi: 'पादपों में अपशिष्ट निष्कासन के संबंध में कौन-सा सही है? `A.` वाष्पोत्सर्जन द्वारा अतिरिक्त जल त्यागना। `B.` अपशिष्ट गिरने वाली पत्तियों में जमा। `C.` पुराने जाइलम में रेज़िन व गोंद रूप में संचय।',
      },
      options: {
        en: ['Both A and B', 'Both A and C', 'Both B and C', 'A, B and C'],
        hi: ['A और B, दोनों', 'A और C, दोनों', 'B और C, दोनों', 'A, B और C'],
      },
      correctIndex: 3,
      solution: {
        en: 'Word-for-word **NCERT `Sec 5.5.2` (`p.108`)**: ALL THREE (`transpiration, falling leaves & resins/gums in old xylem`) are plant waste methods!',
        hi: 'अक्षरशः NCERT `पृ. 108` (`भाग 5.5.2`): पादप वाष्पोत्सर्जन, गिरती पत्तियों तथा **पुराने जाइलम में रेज़िन-गोंद** तीनों तरीकों से अपशिष्ट त्यागते हैं!',
      },
    },
  ],
};
