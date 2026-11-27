/**
 * Class 10 NCERT (2026–27 Edition — jhsc101.pdf, Pages 1–18) + Railway CBT Deep-Dive Edition
 * Chapter 1: Chemical Reactions & Equations (रासायनिक अभिक्रियाएँ एवं समीकरण) — Gold Standard v3 (57 Hits!)
 * Complete NCERT Coverage: 1.0–1.1 Four Signs of Reaction, MgO Dazzling Flame, Word/Skeletal Eq, Hit-&-Trial 7-Step Balancing (`3Fe+4H₂O`), States `(s/l/aq/g)` & Conditions (`340 atm`, `Sunlight/Chlorophyll`) ->
 * 1.2.1 Combination & Exothermic (`CaO+H₂O`, Whitewashing `Ca(OH)₂+CO₂→CaCO₃` 2–3 days luster, Respiration, Compost) ->
 * 1.2.2 Thermal (`FeSO₄·7H₂O`, `CaCO₃`, `2Pb(NO₃)₂ NO₂ brown fumes`), Electrolytic (`2H₂O → 2H₂:O₂ 2:1`), Photolytic (`2AgCl/2AgBr` B&W photography) & Endothermic (`Ba(OH)₂+NH₄Cl`) ->
 * 1.2.3–1.2.4 Displacement (`Fe+CuSO₄ blue→green`, `Zn`, `Pb`) & Double Displacement / Precipitate (`Na₂SO₄+BaCl₂→BaSO₄ white ppt`, `Pb(NO₃)₂+2KI→PbI₂ yellow ppt`) ->
 * 1.2.5–1.3 Redox (`2Cu+O₂`, `CuO+H₂`, `ZnO+C`, `MnO₂+4HCl`), Corrosion (`Fe rust`, `Ag black`, `Cu green`) & Rancidity (`Antioxidants`, `N₂ chip flush`).
 * All 11 Activities (1.1–1.11 + Ba(OH)₂ + Group Beaker p.18), All 8 In-Text Qs, All 20 Exercises verified against jhsc1an.pdf, & 24 Verbatim RRB PYQs.
 */

export const C10_CH1_RXN_DATA = {
  id: 'c10-chem-ch1',
  classId: 'class10',
  subjectId: 'chemistry',
  subjectLabel: { en: 'Chemistry', hi: 'रसायन विज्ञान (Chemistry)' },
  chapterNumber: 1,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 1: Chemical Reactions & Equations (CBT Edition)',
  blueprintSvgKey: 'c10-ch1-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Thermal, Electrolytic (2:1) & Photolytic (AgCl) Decomposition Equations', hi: 'ऊष्मीय (FeSO₄/Pb(NO₃)₂), वैद्युत (2:1) व प्रकाशिक (AgCl) वियोजन' }, pct: 30 },
    { label: { en: 'Displacement (Fe+CuSO₄) & Double Displacement Precipitates (BaSO₄, PbI₂)', hi: 'विस्थापन (Fe+CuSO₄) व द्विविस्थापन अवक्षेपण (BaSO₄ श्वेत, PbI₂ पीला)' }, pct: 26 },
    { label: { en: 'Redox Reactions (CuO+H₂, ZnO+C, MnO₂+4HCl) + Oxidised vs Reduced', hi: 'रेडॉक्स अभिक्रियाएँ (CuO, ZnO, MnO₂) व उपचयन-अपचयन पहचान' }, pct: 24 },
    { label: { en: 'Combination/Exothermic (Lime Whitewash CaCO₃), Balancing, Corrosion & Rancidity', hi: 'संयोजन-ऊष्माक्षेपी (सफेदी CaCO₃), संतुलन, संक्षारण व विकृतगंधिता' }, pct: 20 },
  ],
  title: {
    en: 'Chapter 1: Chemical Reactions & Equations',
    hi: 'अध्याय 1: रासायनिक अभिक्रियाएँ एवं समीकरण',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • Hit-&-Trial Balancing, 5 Reaction Types, Color/Ppt Matrix, Redox, Corrosion & 24 PYQs',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • समीकरण संतुलन, सभी 5 अभिक्रिया प्रकार, अवक्षेप रंग, रेडॉक्स, संक्षारण व 24 रेलवे PYQ',
  },
  metrics: {
    pages: 18,
    activities: 12,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 20,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-chem-ch1/hero-chemical-reactions.webp',
    caption: {
      en: 'Chemical Reactions Lab Bench: Dazzling white Magnesium combustion (`Act 1.1`), `2:1 H₂:O₂` Water Electrolysis (`Act 1.7`), golden-yellow `PbI₂` precipitate (`Act 1.2`) & half-oxidized black `CuO` disc (`Act 1.11`).',
      hi: 'रासायनिक अभिक्रिया प्रयोगशाला बेंच: श्वेत लौ संग मैग्नीशियम दहन (`क्र. 1.1`), `2:1` जल वैद्युतअपघटन (`क्र. 1.7`), पीला लेड आयोडाइड अवक्षेप (`क्र. 1.2`) एवं काले कॉपर ऑक्साइड की परत (`क्र. 1.11`)।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**4 Signs, Balancing & Conditions (`1.0–1.1`)**: A chemical reaction shows any of **Change in state, Change in colour, Evolution of gas, or Change in temperature** (`RRB Tech 2024`). Clean `3–4 cm Mg` ribbon with sandpaper before burning to scrape off protective **`MgO` (`magnesium oxide`)** coating (`Act 1.1` white ash). Equations follow **Law of Conservation of Mass** (`Hit-&-Trial: 3Fe + 4H₂O(g steam!) → Fe₃O₄ + 4H₂`). Conditions: **`CO + 2H₂ —340 atm→ CH₃OH(l)`**, **`6CO₂ + 12H₂O —Sunlight/Chlorophyll→ C₆H₁₂O₆ + 6O₂ + 6H₂O`**.',
      hi: '**4 लक्षण, समीकरण संतुलन व शर्तें (`1.0–1.1`)**: रासायनिक अभिक्रिया के **4 लक्षण**: अवस्था परिवर्तन, रंग परिवर्तन, गैस उत्सर्जन व ताप परिवर्तन। मैग्नीशियम रिबन (`3–4 cm`) को जलाने से पहले रेगमाल से साफ करते हैं ताकि जमी **`MgO` परत** हट जाए। द्रव्यमान संरक्षण नियम से **हिट-एंड-ट्रायल (`3Fe + 4H₂O(भाप) → Fe₃O₄ + 4H₂`)**; विशेष शर्तें: **`CO + 2H₂ —340 atm→ CH₃OH`**, प्रकाश संश्लेषण में **`12H₂O` व सूर्यप्रकाश/क्लोरोफिल**।',
    },
    {
      en: '**Combination & Exothermic (`1.2.1`)**: **`CaO(s) (Quick Lime) + H₂O(l) → Ca(OH)₂(aq) (Slaked Lime) + Heat`**. Used for wall whitewashing -> reacts slowly over **2–3 days** with air `CO₂` forming **shiny marble-like `CaCO₃`**! Other exothermic changes: **Burning `CH₄` (`1.17`), Burning coal, Respiration (`C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy`), and Vegetable Composting**. (*Contrast: Photosynthesis & `Ba(OH)₂ + 2NH₄Cl` are ENDOTHERMIC!*).',
      hi: '**संयोजन एवं ऊष्माक्षेपी (`1.2.1`)**: **बिना बुझा चूना (`CaO`) + जल → बुझा चूना (`Ca(OH)₂`) + ऊष्मा**। दीवार पुताई में यह `CO₂` से अभिक्रिया कर **2–3 दिन में संगमरमर जैसा चमकदार `CaCO₃`** बनाता है। **श्वसन, प्राकृतिक गैस (`CH₄`) दहन तथा शाक-सब्जियों का कंपोस्ट बनना ऊष्माक्षेपी (`Exothermic`)** हैं (`प्रकाश संश्लेषण व Ba(OH)₂+NH₄Cl ऊष्माशोषी हैं!`)।',
    },
    {
      en: '**Three Types of Decomposition (`1.2.2` — ALL Endothermic!)**: **(1) Thermal (`Heat`)**: **`2FeSO₄(s)`** (`green crystal FeSO₄·7H₂O loses water`) **`→ Fe₂O₃(s brown solid) + SO₂↑ + SO₃↑`** (`burning sulfur odor!`); **`CaCO₃ → CaO + CO₂`** (`cement manufacture`); **`2Pb(NO₃)₂ → 2PbO + 4NO₂(BROWN fumes!) + O₂`**. **(2) Electrolytic**: **`2H₂O + dil. H₂SO₄ → 2H₂(g at Cathode -)` : `O₂(g at Anode +)`** in **`2:1` volume ratio**! **(3) Photolytic**: **`2AgCl(s) / 2AgBr(s) —Sunlight→ 2Ag(grey) + Cl₂/Br₂`** (`Black & White Photography!`).',
      hi: '**तीन प्रकार का वियोजन (`1.2.2` — सभी ऊष्माशोषी!)**: **(1) ऊष्मीय**: हरा **`FeSO₄·7H₂O` → लाल-भूरा `Fe₂O₃` + गंधक गंध वाली `SO₂ + SO₃` गैस**; **`CaCO₃ → CaO + CO₂`** (`सीमेंट`); **`2Pb(NO₃)₂ → 2PbO + 4NO₂ (भूरा धुआँ!) + O₂`**। **(2) वैद्युतअपघटन (`क्र. 1.7`)**: **`H₂O + तनु H₂SO₄`** से **कैथोड पर 2 गुना `H₂`** व **ऐनोड पर 1 गुना `O₂`**! **(3) प्रकाश वियोजन**: श्वेत **`AgCl` व `AgBr`** सूर्यप्रकाश में **धूसर (`Grey`)** हो जाते हैं (`श्याम-श्वेत फोटोग्राफी!`)।',
    },
    {
      en: '**Displacement & Double Displacement Precipitates (`1.2.3–1.2.4`)**: **More reactive `Fe, Zn, Pb` displace `Cu`** -> `Fe + CuSO₄(blue) → FeSO₄(faded/light green) + Cu(reddish-brown coat)` (`Act 1.9`); **Thermite `Fe₂O₃ + 2Al → Al₂O₃ + 2Fe`** = Displacement (`Ex Q2`)! **Ion Exchange (`Double Displacement`)**: `Na₂SO₄ + BaCl₂ → BaSO₄↓(WHITE ppt) + 2NaCl` (`Act 1.10`); `Pb(NO₃)₂ + 2KI → PbI₂↓(YELLOW ppt) + 2KNO₃` (`Act 1.2`). Acid-base neutralization (`HCl + NaOH`) is also Double Displacement!',
      hi: '**विस्थापन एवं द्विविस्थापन अवक्षेपण (`1.2.3–1.2.4`)**: **`Fe, Zn, Pb` कॉपर से अधिक सक्रिय हैं** → नीला `CuSO₄` लोहे की कील संग हल्का हरा `FeSO₄` बन जाता है व कील पर **भूरा ताँबा** जमा होता है; `Fe₂O₃ + 2Al` (`थर्मिट`) भी विस्थापन है। **आयन विनिमय**: **`Na₂SO₄ + BaCl₂ → सफेद `BaSO₄` अवक्षेप** (`क्र. 1.10`); **`Pb(NO₃)₂ + 2KI → पीला `PbI₂` अवक्षेप** (`क्र. 1.2`)।',
    },
    {
      en: '**Redox, Corrosion & Rancidity (`1.2.5–1.3`)**: **Oxidation** = Gain of `O` / Loss of `H`; **Reduction** = Loss of `O` / Gain of `H`. Memorize: **`Cu + O₂ → 2CuO(black)`**, then **`+ H₂ → Cu(brown) + H₂O`** (`Act 1.11`); **`ZnO + C → Zn + CO`**; **`MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂`**. **Corrosion Colors (`p.14`)**: **Iron -> reddish-brown rust**; **Silver -> black coating (`Ag₂S`)**; **Copper -> green coating**. Stop **Rancidity (`oxidation of fats/oils`)** via **antioxidants**, airtight jars & **flushing chips bags with `N₂` gas**!',
      hi: '**रेडॉक्स, संक्षारण व विकृतगंधिता (`1.2.5–1.3`)**: `2Cu(भूरा) + O₂ → 2CuO(काला)`, फिर `+ H₂ → Cu(भूरा) + H₂O`; `ZnO + C → Zn + CO`; `MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂`। **संक्षारण रंग (`पृ. 14`)**: **लोहा = लालिमायुक्त भूरी परत (जंग)**; **चाँदी = काली परत**; **ताँबा = हरी परत**। तेल-वसा के उपचयन (**विकृतगंधिता**) से बचाने को **प्रति-ऑक्सीकारक (`Antioxidants`), वायुरोधी डिब्बे व चिप्स थैली में `N₂` गैस** भरते हैं!',
    },
  ],
  sections: [
    {
      id: 'chemical-equations-balancing',
      number: '1.1',
      flowDiagramKey: 'c10-ch1-blueprint-mindmap',
      realImage: {
        imageUrl: '/ncert-notes/class10-chem-ch1/real/magnesium-ribbon-burning.webp',
        caption: {
          en: 'Activity 1.1: Pre-cleaned Magnesium ribbon burning with a blinding dazzling white flame in oxygen, collecting white powder of Magnesium Oxide (`2Mg + O₂ → 2MgO`) inside a watch glass.',
          hi: 'क्रियाकलाप 1.1: रेगमाल से साफ किए मैग्नीशियम रिबन का ऑक्सीजन में चमकदार श्वेत ज्वाला संग दहन, जिससे वॉच ग्लास में श्वेत मैग्नीशियम ऑक्साइड (`MgO`) चूर्ण बनता है।',
        },
      },
      title: {
        en: '4 Observable Signs of Reaction (`Act 1.1–1.3`), Skeletal vs Balanced Equations & Hit-&-Trial Method (`3Fe + 4H₂O`)',
        hi: 'रासायनिक अभिक्रिया के 4 लक्षण (`क्र. 1.1–1.3`), कंकाली बनाम संतुलित समीकरण एवं हिट-एंड-ट्रायल विधि',
      },
      summaryTag: {
        en: 'NCERT Pages 1–6 • Why Clean Mg Ribbon, Law of Mass Conservation, 7-Step Balancing & Conditions (s/l/aq/g, 340 atm)',
        hi: 'NCERT पृ. 1–6 • मैग्नीशियम की सफाई, द्रव्यमान संरक्षण, 7 चरण संतुलन, (s/l/aq/g) संकेत व 340 atm शर्तें',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Everyday Changes, Activities `1.1–1.3` & the Four Signals That Prove a Reaction Occurred',
            hi: '1. दैनिक जीवन की अभिक्रियाएँ, क्रियाकलाप `1.1–1.3` तथा अभिक्रिया सिद्ध करने वाले 4 मुख्य लक्षण',
          },
          content: {
            en: 'Look at six daily events on **NCERT Page 1**: milk souring at summer room temp, an iron tawa/pan/nail rusting in humid air, fermentation of grapes, cooking food, food digestion, and breathing respiration — whenever the **nature and identity of the starting substance change**, a **chemical reaction** has happened! Three classroom activities (`Act 1.1–1.3`) reveal the **==four sure observations proving a chemical reaction (`RRB Tech 2024 Shift 10 PYQ`)==**: **(i) Change in state** (`solid Mg + gas O₂ -> white powder MgO`), **(ii) Change in colour** (`Act 1.2: colorless Lead Nitrate + colorless Potassium Iodide -> bright YELLOW Lead Iodide PbI₂ precipitate!`), **(iii) Evolution of a gas** (`Act 1.3: Zinc granules + dil. H₂SO₄/HCl -> H₂ gas bubbles!`), and **(iv) Change in temperature** (`flask in Act 1.3 turns warm / exothermic!`). ⚠️ **Most-Asked NCERT In-Text Question (`p.6 Q1`)**: Why do we rub a `3–4 cm` **Magnesium ribbon** with sandpaper before burning? Because reactive Mg forms a stubborn protective layer of **Magnesium Oxide (`or carbonate`)** from moist air that blocks fresh contact with `O₂` — scraping cleans it so **`2Mg(s) + O₂(g) → 2MgO(s)`** ignites cleanly with a dazzling white flame (`always hold away from eyes with spectacles!`).',
            hi: '**NCERT पृष्ठ 1** के 6 दैनिक उदाहरण — गर्मियों में दूध का फटना, नम वायु में लोहे के तवे/कील पर जंग, अंगूर का किण्वन, भोजन पकना, पाचन व श्वसन — जब भी पदार्थ की **प्रकृति व पहचान बदलती है**, रासायनिक अभिक्रिया होती है! क्रियाकलाप `1.1–1.3` से **==अभिक्रिया होने के 4 निश्चित प्रेक्षण==** मिलते हैं (`RRB Tech 2024 PYQ`): **(i) अवस्था में परिवर्तन**, **(ii) रंग में परिवर्तन** (`क्र. 1.2: रंगहीन लेड नाइट्रेट + KI से **पीला लेड आयोडाइड अवक्षेप**`), **(iii) गैस का निकास** (`क्र. 1.3: दानेदार जस्ता + तनु H₂SO₄/HCl से H₂ बुलबुले`), व **(iv) तापमान में परिवर्तन** (`फ्लास्क गर्म होना`)। ⚠️ **प्रमुख परीक्षा प्रश्न (`पृ. 6 Q1`)**: `3–4 cm` मैग्नीशियम रिबन को जलाने से पहले **रेगमाल से साफ** क्यों करते हैं? ताकि उसकी सतह पर वायु/नमी से जमी **मैग्नीशियम ऑक्साइड की निष्क्रिय परत** हट जाए व धातु स्वतंत्र रूप से चमकदार श्वेत लौ संग जलकर श्वेत चूर्ण (`MgO`) दे सके!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Skeletal vs Balanced Equations (`Law of Conservation of Mass`), Hit-&-Trial Rules, States `(s/l/aq/g)` & `340 atm`',
            hi: '2. ढाँचा बनाम संतुलित समीकरण, हिट-एंड-ट्रायल नियम, अवस्था `(s/l/aq/g)` एवं `340 atm` शर्तें (`समी. 1.1–1.12`)',
          },
          content: {
            en: 'Writing **"Magnesium + Oxygen → Magnesium oxide"** is a lengthy **Word Equation (`Eq 1.1`)**: reactants on the **LHS** (`joined by +`), products on the **RHS**, arrow showing direction. Swapping names for chemical symbols makes **`Mg + O₂ → MgO` (`Eq 1.2`)** — called an unbalanced **==Skeletal Chemical Equation (`ढाँचा रासायनिक समीकरण`)==** because O atoms (`2 vs 1`) violate the Class 9 **==Law of Conservation of Mass==** (`atoms are neither created nor destroyed; mass & atom count of EVERY element must match before and after!`). Notice `Zn + H₂SO₄ → ZnSO₄ + H₂` (`Eq 1.3`) is already naturally balanced (`Zn:1, H:2, S:1, O:4`). For unbalanced ones like `Fe + H₂O → Fe₃O₄ + H₂`, use the **NCERT 7-Step Hit-&-Trial Method (`p.3–5`)**: **(Step 1)** Put boxes around each formula (`NEVER alter formula subscripts inside boxes — i.e., write 4H₂O, NEVER H₂O₄!`); **(Step 3)** Start balancing the **element with maximum atoms in the biggest formula** (`Oxygen in Fe₃O₄: 4 on RHS -> 4H₂O`); then H (`8 -> 4H₂`); then Fe (`3Fe`) -> **`3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)` (`Eq 1.10`)**! Watch that tiny state symbol on `H₂O`: **`H₂O(g)`** proves **water is used as STEAM (`भाप`)** (`NCERT p.5` favorite CBT point!), while **`(s)` solid, `(l)` liquid, `(aq)` aqueous water solution**. Reaction conditions sit on the arrow: **`CO(g) + 2H₂(g) —340 atm→ CH₃OH(l)` (`Eq 1.11`)** and Photosynthesis **`6CO₂(aq) + 12H₂O(l) —Sunlight & Chlorophyll→ C₆H₁₂O₆(aq) + 6O₂(aq) + 6H₂O(l)` (`Eq 1.12`)**!',
            hi: 'तीर के बाईं ओर **अभिकारक** तथा दाईं ओर **उत्पाद** लिखते हैं। **समीकरण `(1.2)`: `Mg + O₂ → MgO`** असंतुलित **==ढाँचा समीकरण (`Skeletal Equation`)==** है क्योंकि दोनों ओर द्रव्यमान बराबर नहीं। **==द्रव्यमान संरक्षण के नियम==** अनुसार प्रत्येक तत्व के परमाणुओं की संख्या दोनों ओर समान रखनी अनिवार्य है (`Zn + H₂SO₄ → ZnSO₄ + H₂` पहले से संतुलित है)। **`Fe + H₂O → Fe₃O₄ + H₂`** को **7-चरणीय हिट-एंड-ट्रायल विधि** से हल करते समय पहले हर सूत्र के चारों ओर **बॉक्स बनाते हैं** (`सूत्र के अंदर अंक कभी न बदलें — 4H₂O लिखें, H₂O₄ नहीं!`), फिर सबसे अधिक परमाणु वाले यौगिक (`Fe₃O₄` में `4 O`) से शुरू करते हैं → **`3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)` (`समी. 1.10`)**। यहाँ **`H₂O(g)`** दर्शाता है कि **जल का उपयोग भाप (`Steam`) के रूप में हुआ है**! ठोस `(s)`, द्रव `(l)`, गैस `(g)`, जलीय घोल `(aq)` के अलावा तीर के ऊपर/नीचे दाब-उत्प्रेरक शर्तें लिखते हैं: **`CO(g) + 2H₂(g) —340 atm→ CH₃OH(l)` (`1.11`)** व प्रकाश संश्लेषण **`6CO₂ + 12H₂O —सूर्यप्रकाश/क्लोरोफिल→ C₆H₁₂O₆ + 6O₂ + 6H₂O` (`1.12`)**।',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Balancing Guardrail: Box Rule & Why `H₂O(g)` Shows Up on `3Fe + 4H₂O`',
            hi: 'संतुलन सावधानी सूत्र: गुणांक बाहर + भाप का रहस्य `H₂O(g)`',
          },
          content: {
            en: '1) **Never touch subscripts** inside formulas (`O₂` can’t become `O` in `Mg + O -> MgO`; multiply `2MgO` outside!). 2) **`H₂O(g)`** = **Steam** (`3Fe + 4H₂O(g)`), **`H₂O(l)`** = **Liquid water** (`CaO + H₂O(l)`). 3) Methanol synthesis condition = **`340 atm`** (`Eq 1.11`)!',
            hi: '1) सूत्र अंदर का सबस्क्रिप्ट (`O₂, Fe₃O₄`) कभी न बदलें — केवल आगे गुणांक लगाएँ! 2) **`H₂O(g)`** मतलब **भाप (`3Fe + 4H₂O(g)`)**, जबकि **`H₂O(l)`** तरल जल (`CaO + H₂O(l)`)। 3) मेथेनॉल संश्लेषण दाब = **`340 atm`** (`समी. 1.11`)!',
          },
        },
      ],
    },
    {
      id: 'combination-decomposition-reactions',
      number: '1.2.1–1.2.2',
      flowDiagramKey: 'c10-ch1-balancing-combination-decomp',
      svgLab: 'chemical-reactions-balance-lab',
      realImage: {
        imageUrl: '/ncert-notes/class10-chem-ch1/real/silver-chloride-photolysis.webp',
        caption: {
          en: 'Activity 1.8 Photolytic Decomposition: White crystalline Silver Chloride (`AgCl`) progressively decomposes into metallic grey-brown Silver (`Ag`) and Chlorine gas (`2AgCl → 2Ag + Cl₂`) upon sunlight exposure.',
          hi: 'क्रियाकलाप 1.8 प्रकाशिक वियोजन: श्वेत सिल्वर क्लोराइड (`AgCl`) सूर्य के प्रकाश में क्रमिक वियोजित होकर धूसर चाँदी धातु (`Ag`) व क्लोरीन गैस बनाता है (`2AgCl → 2Ag + Cl₂`)।',
        },
      },
      title: {
        en: 'Combination & Exothermic (`Lime Whitewash CaCO₃, Respiration`) vs 3 Decomposition Types (`Thermal, Electrolytic 2:1, Photo AgCl`)',
        hi: 'संयोजन व ऊष्माक्षेपी (`चूना सफेदी CaCO₃, श्वसन`) बनाम 3 वियोजन प्रकार (`ऊष्मीय, वैद्युत 2:1, प्रकाशिक AgCl`)',
      },
      summaryTag: {
        en: 'NCERT Pages 6–10 • Eq 1.13–1.23, Activities 1.4–1.8, FeSO₄·7H₂O, Brown NO₂, 2:1 Cathode/Anode & Ba(OH)₂/NH₄Cl Endotherm',
        hi: 'NCERT पृ. 6–10 • समी. 1.13–1.23, क्र. 1.4–1.8, हरा FeSO₄, भूरा NO₂ धुआँ, 2:1 जल अपघटन व शीतल Ba(OH)₂+NH₄Cl',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Combination (`A + B → C`), Lime Whitewashing Chemistry (`CaO → Ca(OH)₂ → CaCO₃`) & Exothermic Life Processes',
            hi: '1. संयोजन अभिक्रिया (`1.2.1`), दीवार सफेदी में संगमरमर चमक (`2–3 दिन`) एवं श्वसन-कंपोस्ट ऊष्माक्षेपी क्रियाएँ',
          },
          content: {
            en: 'No single atom transmutes into another element; chemical reactions simply **break and remake bonds**! When **two or more reactants (`elements or compounds`) unite into a SINGLE product**, it is a **==Combination Reaction (`संयोजन अभिक्रिया`)==** (`e.g. Burning Coal C + O₂ → CO₂`, `Water 2H₂ + O₂ → 2H₂O`, `Burning Mg 2Mg + O₂ → 2MgO`, `CaO + H₂O → Ca(OH)₂`). Study **Activity 1.4 (`Eq 1.13–1.14`, **100% CBT favorite!**)**: Adding water slowly to **Quick Lime / Calcium Oxide (`CaO` — बिना बुझा चूना)** reacts **vigorously, heating up the beaker** (`exothermic!`), forming **Slaked Lime / Calcium Hydroxide (`Ca(OH)₂(aq)` — बुझा हुआ चूना)**. Notice **NCERT “Do You Know?” Box (`p.7`) + In-Text Q1 (`p.10`)**: This `Ca(OH)₂` solution is brushed on walls for **whitewashing (`सफेदी`)** -> over **2 to 3 days**, it reacts slowly with atmospheric **`CO₂`** to coat walls with a **shiny marble layer of `CaCO₃`** (`Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)` — and yes, **marble’s formula is also `CaCO₃`**!). Also memorize NCERT’s **exothermic** list (`Heat/Energy released alongside product`): **(i) Burning Natural Gas** `CH₄ + 2O₂ → CO₂ + 2H₂O + Energy`, **(ii) Cellular Respiration (`1.18`)** `C₆H₁₂O₆(aq) + 6O₂(aq) → 6CO₂ + 6H₂O + Energy` (`digested rice/potato/bread glucose oxidises in cells`), **(iii) Decomposition of vegetable matter into compost (`शाक-सब्जियों का कंपोस्ट बनना`)** (`and dilution of strong acids — RRB Tech 2024 PYQ`), whereas **Photosynthesis is ENDOTHERMIC (`absorbs light energy`)**!',
            hi: 'जब दो या अधिक अभिकारक (तत्व या यौगिक) मिलकर **केवल एकल उत्पाद (`Single product`)** बनाएँ, तो वह **==संयोजन अभिक्रिया==** है (`C + O₂ → CO₂`; `2H₂ + O₂ → 2H₂O`)। **क्रियाकलाप 1.4 (`समी. 1.13–1.14`, पृ. 10 Q1 भी!)**: बीकर में **बिना बुझा चूना (`CaO` — Quick Lime)** लेकर जल डालने पर तीव्र अभिक्रिया से **अत्यधिक ऊष्मा** निकलती है और **बुझा हुआ चूना (`Ca(OH)₂` — Slaked Lime)** बनता है। **रोचक NCERT बॉक्स (`पृ. 7`)**: इस `Ca(OH)₂` से दीवार की **सफेदी** करने पर यह हवा की `CO₂` संग धीमी अभिक्रिया कर **2–3 दिन में `CaCO₃` की चमकदार परत** बनाता है (**संगमरमर का रासायनिक सूत्र भी `CaCO₃` है!**)। **ऊष्माक्षेपी (`Exothermic`, ऊष्मा मुक्त) के प्रमुख NCERT उदाहरण**: **प्राकृतिक गैस (`CH₄`) दहन**, **श्वसन (`C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ऊर्जा` — पाचन से बने ग्लूकोज का ऑक्सीकरण)**, **शाक-सब्जियों से कंपोस्ट खाद बनना**, व प्रबल अम्ल का तनुकरण (`RRB Tech 2024` में **प्रकाश संश्लेषण ऊष्माक्षेपी नहीं, ऊष्माशोषी है!**)।',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. All Three Decomposition Pathways (`Thermal Δ, Electrolysis 2:1, Sunlight AgCl/AgBr`) & Chilling Endothermic `Ba(OH)₂ + NH₄Cl`',
            hi: '2. वियोजन के तीनों ऊर्जा मार्ग (`ऊष्मा, विद्युत, सूर्यप्रकाश`) एवं ठंडा ऊष्माशोषी `Ba(OH)₂ + NH₄Cl` परीक्षण (`पृ. 8–10`)',
          },
          content: {
            en: '**==Decomposition (`वियोजन`)==** is the exact opposite of combination (`Ex Q11`): a **single reactant breaks into two or more simpler substances** — and requires **energy (`Heat, Light, or Electricity`)**, making decomposition reactions **Endothermic (`ऊष्माशोषी`, RRB Group D Shift 9 & 25: does NOT need oxygen!)**:\n• **(A) Thermal Decomposition (`Heat Δ`)**: (1) **`Act 1.5` Heating `2g` Ferrous Sulphate (`FeSO₄·7H₂O`) crystals**: First loses crystal water (`7H₂O`) turning from **light green** -> colorless/white, then decomposes via **`2FeSO₄(s) —Heat→ Fe₂O₃(s) + SO₂(g) + SO₃(g)` (`Eq 1.19`)** leaving reddish-brown ferric oxide solid and **characteristic smell of burning sulfur** (`SO₂ & SO₃` gases — *Note: `H₂SO₄` is NOT formed, RRB Tech 2024 Shift 12 PYQ! Never point boiling-tube mouth at anyone!*). (2) **`Eq 1.20` Limestone (`CaCO₃`)**: `CaCO₃(s) —Heat→ CaO(s quicklime!) + CO₂(g)` (**used in cement manufacture!** *(Note: Hindi PDF p.9 mistakenly prints "बुझा हुआ चूना" under CaO, while text & p.7 confirm CaO is Quick Lime / बिना बुझा चूना!)*). (3) **`Act 1.6` Lead Nitrate (`2g Pb(NO₃)₂`)**: `2Pb(NO₃)₂(s) —Heat→ 2PbO(s yellow residue) + 4NO₂(g) + O₂(g)` (`Eq 1.21`) releasing **dense BROWN fumes of Nitrogen Dioxide (`NO₂`)** (`RRB Tech 2024 Shift 10 PYQ`)!\n• **(B) Electrolytic Decomposition (`Act 1.7`, Fig 1.6)**: Plastic mug, two **Carbon (`Graphite`) electrodes**, **6V battery**, water + **few drops of dilute `H₂SO₄`** (`to make water conductive!`), two inverted graduated water-filled test tubes -> gases displace water cleanly: **`2H₂O(l) → 2H₂(g) + O₂(g)`**. **Exact Volume Ratio (`In-Text p.10 Q2`)**: **Hydrogen (`H₂`) collects at the CATHODE (`negative terminal`) in DOUBLE volume (`2:1`)** relative to **Oxygen (`O₂`) at the ANODE (`positive`)**, because water has 2 H atoms per 1 O atom! Candle test: `H₂` burns with pop; `O₂` brightens flame.\n• **(C) Photolytic Decomposition (`Act 1.8`, Fig 1.7)**: `2g` white **Silver Chloride (`AgCl`)** in sunlight turns **GREY (`Ag metal`)**: **`2AgCl(s) —Sunlight→ 2Ag(s) + Cl₂(g)` (`Eq 1.22`)**; similarly **Silver Bromide (`2AgBr —Sunlight→ 2Ag + Br₂`, Eq 1.23)** — both used in **Black & White Photography** (`Group D Shift 48 & Tech Shift 4`)!\n• **Bonus Endothermic Bench Activity (`NCERT p.10 bottom`)**: Mix **`2g Barium Hydroxide Ba(OH)₂` + `1g Ammonium Chloride NH₄Cl`** with glass rod (`Ba(OH)₂ + 2NH₄Cl → BaCl₂ + 2NH₃ + 2H₂O`) -> touch test-tube bottom -> it feels **ICE COLD (`absorbs ambient heat = Endothermic!`)**!',
            hi: '**==वियोजन अभिक्रिया (`संयोजन की ठीक विपरीत`)==** में एकल अभिकर्मक टूटकर दो या अधिक छोटे उत्पाद बनाता है। इसके लिए **ऊष्मा, प्रकाश या विद्युत ऊर्जा** चाहिए (ऑक्सीजन जरूरी नहीं — `Group D Shift 16`) अतः ये **ऊष्माशोषी (`Endothermic`)** होती हैं:\n• **(A) ऊष्मीय वियोजन**: **(i) `क्र. 1.5` फेरस सल्फेट (`FeSO₄·7H₂O`) तापन**: पहले क्रिस्टल जल त्यागकर हरा रंग बदलता है, फिर **`2FeSO₄(s) —ऊष्मा→ Fe₂O₃(s लाल-भूरा ठोस) + SO₂↑ + SO₃↑` (`1.19`)** गंधक जलने जैसी तीखी गंध देता है (`H₂SO₄ नहीं बनता — Tech 2024 PYQ!`)। **(ii) `समी. 1.20` चूना पत्थर**: **`CaCO₃(s) —ऊष्मा→ CaO(s बिना बुझा चूना) + CO₂(g)`** — **सीमेंट उद्योग** में उपयोगी (*पुस्तक पृष्ठ 9 पर `CaO` के नीचे मुद्रण त्रुटि से "बुझा हुआ" लिखा है जबकि वास्तव में वह **बिना बुझा चूना / Quick Lime** है!*)। **(iii) `क्र. 1.6` लेड नाइट्रेट**: **`2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(भूरा धुआँ!) + O₂`** — निकलने वाला भूरा धुआँ **`NO₂`** का है (`Tech 2024 PYQ`)!\n• **(B) वैद्युतअपघटन (`क्र. 1.7`, चित्र 1.6)**: प्लास्टिक मग में कार्बन/ग्रेफाइट इलेक्ट्रोड, **`6V` बैटरी** व जल में चालकता हेतु कुछ बूँद **तनु `H₂SO₄`** डालें → **कैथोड (`-`) पर `H₂` गैस की मात्रा ऐनोड (`+`) पर `O₂` से दोगुनी (`2:1`)** होती है क्योंकि जल में `H:O = 2:1` है (`पृ. 10 Q2`)!\n• **(C) प्रकाशिक वियोजन (`क्र. 1.8`)**: श्वेत **`2AgCl` या `2AgBr`** सूर्यप्रकाश में **धूसर (`Grey`) सिल्वर धातु** में टूटते हैं — इनका उपयोग **श्याम-श्वेत फोटोग्राफी (`Black & White Photography`)** में होता है!\n• **विशेष ऊष्माशोषी प्रयोग (`पृ. 10`)**: **`2g` बेरियम हाइड्रॉक्साइड + `1g` अमोनियम क्लोराइड** मिलाने पर परखनली **बिल्कुल ठंडी** हो जाती है (ऊष्मा अवशोषित होने से **ऊष्माशोषी अभिक्रिया**)!',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Railway Super-Memory Trio: `NO₂ = Brown`, `H₂:O₂ = Cathode 2 : Anode 1`, `AgCl/AgBr = B&W Photo`',
            hi: 'रिवीजन ट्रिक: “क-ह-दो” (कैथोड-हाइड्रोजन-दोगुनी) + `NO₂` भूरा धुआँ + `FeSO₄` दो सल्फर गैसें',
          },
          content: {
            en: '**`Ca-H₂-2`**: **Cat**hode holds **`H₂`** (`+ charge H⁺ migrates to - Cathode!`) at **`2×`** volume vs **Anode `O₂`**. **`Pb(NO₃)₂` -> `4NO₂`** gives **Brown Fumes**; **`2FeSO₄`** gives **BOTH `SO₂ + SO₃` (`never H₂SO₄`)**; **`AgCl / AgBr`** = **Grey Silver (`B&W Photo`)**!',
            hi: '**“क-ह-दो”**: **कै**थोड पर **हा**इड्रोजन (`H₂`) **दो**गुने आयतन में (ऐनोड पर `O₂` आधा)! **`Pb(NO₃)₂`** से **भूरा `NO₂` धुआँ**, **`FeSO₄`** से **`Fe₂O₃ + SO₂ + SO₃`** (`H₂SO₄` कभी नहीं!), तथा **`AgCl/AgBr`** = **श्याम-श्वेत फोटोग्राफी**!',
          },
        },
      ],
    },
    {
      id: 'displacement-redox-corrosion-rancidity',
      number: '1.2.3–1.3.2',
      flowDiagramKey: 'c10-ch1-displacement-precipitation',
      realImage: {
        imageUrl: '/ncert-notes/class10-chem-ch1/real/lead-iodide-yellow-crystals.webp',
        caption: {
          en: 'Activity 1.2 & p.12 Double Displacement: Golden-yellow hexagonal Lead(II) Iodide (`PbI₂↓`) precipitate crystals formed immediately upon mixing aqueous `Pb(NO₃)₂` and `KI`.',
          hi: 'क्रियाकलाप 1.2 व पृ. 12: जलीय लेड (II) नाइट्रेट (`Pb(NO₃)₂`) तथा पोटैशियम आयोडाइड (`KI`) मिलाने पर तुरंत बनने वाले चमकीले पीले लेड आयोडाइड (`PbI₂`) अवक्षेप के षट्कोणीय क्रिस्टल।',
        },
      },
      title: {
        en: 'Displacement (`Fe+CuSO₄`), Double Displacement (`BaSO₄/PbI₂`), Redox Trio (`CuO/ZnO/MnO₂`) & Corrosion/Rancidity',
        hi: 'विस्थापन (`Fe+CuSO₄`), द्विविस्थापन (`BaSO₄/PbI₂`), रेडॉक्स (`CuO/ZnO/MnO₂`), संक्षारण व विकृतगंधिता',
      },
      summaryTag: {
        en: 'NCERT Pages 11–18 • Activities 1.9–1.11, Group p.18 Activity, Silver Refining, Tarnish Colors & Nitrogen Flushing',
        hi: 'NCERT पृ. 11–18 • क्र. 1.9–1.11, बीकर समूह प्रयोग, सिल्वर शोधन, धातु संक्षारण रंग व चिप्स में N₂',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Displacement (`1.2.3`) vs Double Displacement Precipitation (`1.2.4`) — Colors & Ion Swapping Rules',
            hi: '1. विस्थापन (`1.2.3`: नीला→हल्का हरा) बनाम द्विविस्थापन व अवक्षेपण (`1.2.4`: सफेद `BaSO₄`, पीला `PbI₂`)',
          },
          content: {
            en: '**`1.2.3` Single Displacement (`Act 1.9`, Fig 1.8)**: Scrub 3 iron nails clean with sandpaper; keep one nail + **Tube A (`10 mL CuSO₄`)** as control, and dip 2 tied nails in **Tube B (`CuSO₄`) for `20 min`**. Observation: **Deep blue `CuSO₄` fades (`light greenish FeSO₄`)** and a **reddish-brown copper layer deposits on iron nails (`Group D Shift 31 PYQ`)**: **`Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)` (`Eq 1.24`)**. Equally reactive **`Zn` & `Pb`** displace Copper (`Zn + CuSO₄ → ZnSO₄ + Cu`; `Pb + CuCl₂ → PbCl₂ + Cu`, `Eq 1.25–1.26`), while **Copper (`least reactive among Zn, Fe, Pb, Cu — Tech Shift 8 PYQ`) CANNOT displace Fe or Zn**, though **Cu displaces Silver from `AgNO₃` in Silver Refining (`Ex Q14`: `2AgNO₃ + Cu → Cu(NO₃)₂ + 2Ag`)**! Also remember **`Ex Q2` Thermite**: `Fe₂O₃ + 2Al → Al₂O₃ + 2Fe` is a **Displacement Reaction**! Now contrast **`1.2.4` Double Displacement (`exchange of ions between reactants`) + ==Precipitation (`अवक्षेपण` — produces insoluble solid `precipitate`!)==**: **(1) `Act 1.10` (`Eq 1.27`, Fig 1.9)**: Mix `3 mL Na₂SO₄(aq)` + `3 mL BaCl₂(aq)` -> `Ba²⁺` & `SO₄²⁻` exchange ions to form an instant **WHITE insoluble precipitate of Barium Sulphate (`BaSO₄↓`)** + soluble `2NaCl(aq)` (`Tech 2024 PYQ`). **(2) `Act 1.2` + `p.12` Review**: **`Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂↓(s) + 2KNO₃(aq)`** yields a vibrant **YELLOW precipitate of Lead(II) Iodide (`PbI₂`)**! Also remember **Neutralization (`HCl + NaOH → NaCl + H₂O`)** and **`Na₂CO₃ + CaCl₂ → CaCO₃↓(white) + 2NaCl` (`Group D Shift 27 PYQ`)** are **Double Displacement Reactions** (`NOT single displacement — ALP Shift 1`)!',
            hi: '**`1.2.3` विस्थापन अभिक्रिया (`क्र. 1.9`, चित्र 1.8)**: परखनली B के `10 mL` नीले `CuSO₄` विलयन में `20 मिनट` लोहे की दो साफ कीलें डुबोने पर **विलयन का नीला रंग मलीन (`हल्का हरा FeSO₄`)** हो जाता है तथा **कीलों पर लाल-भूरी ताँबे (`Cu`) की परत** चढ़ जाती है: **`Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)` (`1.24`)**। इसी प्रकार **`Zn` व `Pb`** भी कॉपर से अधिक सक्रिय होने से उसे विस्थापित करते हैं (`1.25–1.26`), जबकि इन चारों में **ताँबा सबसे कम सक्रिय** है (`Tech Shift 8`) — पर हाँ, **कॉपर `AgNO₃` से चाँदी को विस्थापित करता है (`सिल्वर शोधन, Ex Q14`)**! थर्मिट `Fe₂O₃ + 2Al → Al₂O₃ + 2Fe` भी **विस्थापन अभिक्रिया** है (`Ex Q2`)। **`1.2.4` द्विविस्थापन (`आयनों का आदान-प्रदान`) एवं अवक्षेपण**: अविलेय ठोस पदार्थ बनने को **अवक्षेप (`Precipitate`)** कहते हैं — **(1) `क्र. 1.10` (`समी. 1.27`)**: `Na₂SO₄ + BaCl₂` से **`Ba²⁺` व `SO₄²⁻` मिलकर सफेद अविलेय `BaSO₄` अवक्षेप** देते हैं (`+ 2NaCl`); **(2) `क्र. 1.2` (`पृ. 12`)**: `Pb(NO₃)₂ + 2KI` से **पीला `PbI₂` अवक्षेप** बनता है! उदासीनीकरण (`HCl + NaOH`) भी द्विविस्थापन है (`ALP Shift 1`)।',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Redox (`Oxidation + Reduction Eq 1.28–1.32`), Metal Corrosion Colors (`p.14`) & Rancidity Shield (`1.3.2`)',
            hi: '2. रेडॉक्स (`उपचयन + अपचयन समी. 1.28–1.32`), संक्षारण रंग (`पृ. 14`) तथा विकृतगंधिता से बचाव (`1.3.2`)',
          },
          content: {
            en: 'Inside **`Act 1.11` (`Fig 1.10`)**: heat `1g` shiny brown **Copper powder** in a china dish -> oxygen adds forming a **black coating of Copper(II) Oxide (`2Cu + O₂ —Heat→ 2CuO`, Eq 1.28 — also `Ex Q17`!**). Pass **`H₂` gas** over hot black `CuO` -> **`CuO + H₂ —Heat→ Cu + H₂O` (`Eq 1.29`)** turns the black coat **shiny brown copper again**! Here **`CuO` lost oxygen (`Reduced`)** while **`H₂` gained oxygen (`Oxidised`)** -> because oxidation & reduction ALWAYS occur hand in hand (`Group D Shift 34`), NCERT calls this a **==Redox Reaction==** (`Eq 1.30–1.32`): **(i) Oxidation** = gain of Oxygen OR loss of Hydrogen; **(ii) Reduction** = loss of Oxygen OR gain of Hydrogen! Master all 3 NCERT redox equations: **`CuO + H₂`**; **`ZnO + C → Zn + CO`** (`ZnO reduced, C oxidised`); **`MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂`** (`MnO₂ loses O = reduced; HCl loses H = oxidised!`) + Burning Mg (`Mg oxidised to MgO`). Finally, two real-world oxidations (`Sec 1.3`): **(1) ==Corrosion (`संक्षारण`, `1.3.1`)==**: Metals attacked by moisture/acids develop **Iron -> reddish-brown rust**, **Silver -> BLACK coating (`Ag₂S`)**, **Copper -> GREEN coating**, costing crores on bridges, ships, iron railings & car bodies (`prevented by painting, oiling/greasing & Zinc Galvanisation — ALP Shift 9 PYQ!`). **(2) ==Rancidity (`विकृतगंधिता`, `1.3.2`)==**: Oils/fats get oxidized over time turning foul in taste & smell -> prevented by adding **antioxidants**, storing in **airtight containers (`Ex Q19`)**, and **flushing chip bags (`चिप्स की थैली`) with less-active Nitrogen (`N₂`) gas** after removing oxygen!',
            hi: '**`क्र. 1.11` (`चित्र 1.10` व `Ex Q17` भी!)**: चायना डिश में चमकदार भूरा **कॉपर चूर्ण (`X`) गरम करने पर ऑक्सीजन जुड़कर काले रंग का कॉपर (II) ऑक्साइड (`2CuO`, काला यौगिक) बनता है**! इस गर्म काले `CuO` पर **`H₂` गैस** भेजने से **`CuO + H₂ → Cu + H₂O` (`1.29`)** द्वारा पुनः **भूरा ताँबा** मिल जाता है (`CuO` अपचयित; `H₂` उपचयित)! अतः जिस अभिक्रिया में एक अभिकारक **उपचयित (`+O` या `-H`)** व दूसरा **अपचयित (`-O` या `+H`)** हो, उसे **==रेडॉक्स अभिक्रिया==** कहते हैं — तीनों मुख्य NCERT उदाहरण: **`CuO + H₂`**, **`ZnO + C → Zn + CO`** (`ZnO अपचयित, C उपचयित`), **`MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂`** (`MnO₂ अपचयित, HCl उपचयित`)। दैनिक जीवन में उपचयन के दो प्रभाव (`1.3`): **(1) ==संक्षारण (`1.3.1`)==**: अम्ल व आर्द्रता के संपर्क में **लोहा = लालिमायुक्त भूरी परत (जंग)**, **चाँदी = काली परत (`Ag₂S`)**, **ताँबा = हरी परत** (`पेंट, तेल/ग्रीस व जिंक यशदलेपन/Galvanisation से बचाव`)। **(2) ==विकृतगंधिता (`1.3.2`)==**: तेल व वसा उपचयित होकर गंध व स्वाद बदल देते हैं -> रोकने हेतु **प्रति-ऑक्सीकारक (`Antioxidants`) मिलाना, वायुरोधी बर्तन में रखना, व चिप्स थैलियों में से ऑक्सीजन निकालकर कम सक्रिय नाइट्रोजन (`N₂`) भरना (`Ex Q19`)**!',
          },
        },
        {
          type: 'examTraps',
          title: {
            en: 'Group p.18 Exothermic/Endothermic Beaker Lab + Reactivity Series Watch (`K>Na>Ca>Mg>Al>Zn>Fe>Pb>H>Cu>Ag`)',
            hi: 'सामूहिक प्रयोग (`पृ. 18`) ऊष्माक्षेपी-ऊष्माशोषी तुलना एवं सक्रियता क्रम नोट (`Zn, Fe, Pb > Cu > Ag`)',
          },
          content: {
            en: '**NCERT p.18 Group Activity**: Stir 2 spatulas into 4 beakers (`A: K₂SO₄ + H₂O`, `B: NH₄NO₃ + H₂O`, `C: Anhydrous CuSO₄ + H₂O`, `D: Iron filings + CuSO₄`): **Beaker B (`NH₄NO₃ dissolving`) cools sharply (`ENDOTHERMIC`)**, while **Beaker C (`hydration of white anhydrous CuSO₄ to blue CuSO₄·5H₂O`) & Beaker D (`Fe + CuSO₄ displacement`) warm up (`EXOTHERMIC`)**! Reactivity order in Ch 1: **`Al > Zn > Fe > Pb > Cu > Ag`** (`Cu cannot displace Zn/Fe, yet Cu displaces Ag!`).',
            hi: '**सामूहिक प्रयोग (`पृ. 18`)**: चार बीकरों `A (K₂SO₄+जल), B (अमोनियम नाइट्रेट+जल), C (निर्जल CuSO₄+जल), D (लोहे की छीलन+CuSO₄)` में **B (`NH₄NO₃` घुलना) तापमान गिराता (`ऊष्माशोषी`)** है, जबकि **C (निर्जल `CuSO₄` का जलयोजन) व D (`Fe+CuSO₄` विस्थापन) तापमान बढ़ाते (`ऊष्माक्षेपी`)** हैं! सक्रियता: **`Al > Zn > Fe > Pb > Cu > Ag`**।',
          },
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      title: {
        en: 'TRAP 1 (`Ex Q1`): In `2PbO + C → 2Pb + CO₂`, Is "Lead" Reduced or "Lead Oxide (`PbO`)"? Always Name the REACTANT!',
        hi: 'जाल 1 (`अभ्यास Q1`): `2PbO + C → 2Pb + CO₂` में “सीसा (`Pb`)” अपचयित नहीं बल्कि “लेड ऑक्साइड (`PbO`)” अपचयित होता है!',
      },
      wrong: {
        en: 'Saying "(a) Lead (`Pb`) is getting reduced" and "(b) Carbon dioxide (`CO₂`) is getting oxidised".',
        hi: 'कथन (a) ‘सीसा अपचयित हो रहा है’ व (b) ‘CO₂ उपचयित हो रहा है’ को सही मान लेना।',
      },
      right: {
        en: '**Official NCERT Key `Ex Q1` (`i`)**: BOTH `(a)` and `(b)` are **INCORRECT**! Oxidation & reduction always act ON **REACTANTS (`LHS`)**, NOT products (`RHS`): **Lead Oxide (`PbO`, statement d) is reduced -> `Pb`**, and **Carbon (`C`, statement c) is oxidised -> `CO₂`**!',
        hi: '**आधिकारिक NCERT उत्तर `(i)`**: कथन `(a)` व `(b)` **असत्य** हैं क्योंकि उपचयन-अपचयन सदैव **अभिकारक (`LHS`)** पर होता है, उत्पाद (`RHS`) पर नहीं! अतः **लेड ऑक्साइड (`PbO`, d) अपचयित** तथा **कार्बन (`C`, c) उपचयित** हो रहा है!',
      },
    },
    {
      title: {
        en: 'TRAP 2: Quick Lime (`CaO`) vs Slaked Lime (`Ca(OH)₂`) vs Limestone/Marble (`CaCO₃`) + Hindi p.9 Print Glitch!',
        hi: 'जाल 2: बिना बुझा चूना (`CaO`), बुझा चूना (`Ca(OH)₂`) व संगमरमर (`CaCO₃`) में अंतर (NCERT मुद्रण त्रुटि सुधार)!',
      },
      wrong: {
        en: 'Confusing `CaO` (Quick Lime) as Slaked Lime, or thinking `Ca(OH)₂` itself dries instantly into `Ca(OH)₂` white gloss.',
        hi: '`CaO` को बुझा हुआ चूना समझना (जैसे NCERT पृ. 9 समी. 1.20 के नीचे गलत प्रिंट है!) या सफेदी में `CaO` लगाना।',
      },
      right: {
        en: '**`CaO`** = **Quick Lime (`बिना बुझा चूना`)** (`used in whitewash prep & cement`); **`Ca(OH)₂`** = **Slaked Lime (`बुझा हुआ चूना`)** (`solution applied on walls — p.10 Q1`); **`CaCO₃`** = **Limestone/Marble (`चूना पत्थर / संगमरमर`)** (`formed shiny on walls after 2–3 days with air CO₂!`).',
        hi: '**`CaO` = बिना बुझा चूना (`Quick Lime`)**, **`Ca(OH)₂` = बुझा हुआ चूना (`Slaked Lime`, दीवार सफेदी विलयन — पृ. 10 Q1)**, तथा **`CaCO₃` = संगमरमर/चूना पत्थर** (`जो हवा की CO₂ से 2–3 दिन बाद दीवार पर चमक लाता है!`)।',
      },
    },
    {
      title: {
        en: 'TRAP 3: Photosynthesis Is ENDOTHERMIC, While Respiration & Vegetable Composting Are EXOTHERMIC!',
        hi: 'जाल 3: प्रकाश संश्लेषण ऊष्माशोषी (`Endothermic`), जबकि श्वसन व कंपोस्ट खाद ऊष्माक्षेपी (`Exothermic`) हैं!',
      },
      wrong: {
        en: 'Thinking all decomposition/compost reactions are endothermic (`no!`) OR thinking all biochemical equations like photosynthesis release heat.',
        hi: 'कंपोस्ट विघटन को ऊष्माशोषी समझना या प्रकाश संश्लेषण को ऊष्माक्षेपी मान लेना।',
      },
      right: {
        en: '**NCERT p.7**: Decomposition of vegetable matter into **Compost**, **Respiration (`C₆H₁₂O₆ + 6O₂`)**, and burning natural gas are **EXOTHERMIC** (`release heat`), whereas **Photosynthesis (`absorbs sunlight`)** and `Ba(OH)₂ + 2NH₄Cl` (`turns tube cold`) are **ENDOTHERMIC** (`Tech 2024 Shift 14 PYQ`)!',
        hi: '**साग-सब्जियों का कंपोस्ट बनना तथा श्वसन दोनों ऊष्माक्षेपी** हैं (`NCERT पृ. 7`), जबकि **प्रकाश संश्लेषण (`सूर्य ऊर्जा सोखना`)** व `Ba(OH)₂ + NH₄Cl` **ऊष्माशोषी** हैं (`RRB Tech 2024 PYQ`)!',
      },
    },
    {
      title: {
        en: 'TRAP 4: In Water Electrolysis (`Act 1.7`), Which Electrode Collects DOUBLE Gas (`H₂`) & Why Acid Drops?',
        hi: 'जाल 4: जल के वैद्युतअपघटन में दोगुनी गैस (`H₂`) किस इलेक्ट्रोड पर आती है और `H₂SO₄` क्यों डालते हैं?',
      },
      wrong: {
        en: 'Putting Hydrogen (`2x`) on Anode (`+`) OR thinking `O₂` is double volume (`2:1`).',
        hi: 'ऐनोड पर `H₂` या दोगुने आयतन में `O₂` को चुन लेना।',
      },
      right: {
        en: 'Pure water conducts poorly -> add few drops **dil. `H₂SO₄`**. Positively charged `H⁺` reduces at **CATHODE (`−`)** forming **DOUBLE volume `H₂` (`2:1`)**, while `O₂` forms at **ANODE (`+`)** (`Eq: 2H₂O → 2H₂ + O₂`, `In-Text p.10 Q2`)!',
        hi: 'शुद्ध जल अल्प चालक है अतः तनु **`H₂SO₄`** डालते हैं। धनावेशित `H⁺` आयन ऋण **कैथोड (`−`)** पर जाकर **दोगुनी `H₂` (`2:1` आयतन)** व धन **ऐनोड (`+`)** पर आधी `O₂` देते हैं (`पृ. 10 Q2`)!',
      },
    },
    {
      title: {
        en: 'TRAP 5: Silver Tarnish Is BLACK (`Ag₂S`), Copper Patina Is GREEN, Brown Fumes Are `NO₂`, White/Yellow Ppts `BaSO₄ / PbI₂`!',
        hi: 'जाल 5: संक्षारण व अवक्षेप रंग याद रखें — चाँदी काली, ताँबा हरा, `NO₂` भूरा धुआँ, `BaSO₄` श्वेत, `PbI₂` पीला!',
      },
      wrong: {
        en: 'Mixing up black Copper Oxide (`CuO`, on heating) with green Copper corrosion patina, or calling silver rust brown.',
        hi: 'ताँबे की हरी संक्षारण परत (`नमी/CO₂`) और गरम करने पर बनी काली `CuO` परत (`क्र. 1.11`) को आपस में मिला देना!',
      },
      right: {
        en: '**Moist Air Corrosion (`p.14`)**: Iron = **Reddish-brown rust**, Silver = **Black**, Copper = **Green** (`basic carbonate`)! By contrast, **Heating Cu in dry burner flame (`Act 1.11 / Ex Q17`)** yields **BLACK `CuO`**; **heating `Pb(NO₃)₂`** yields **BROWN `NO₂` fumes**; **`BaSO₄`** = **White ppt**; **`PbI₂`** = **Yellow ppt**!',
        hi: '**साधारण नमी संक्षारण (`पृ. 14`)**: लोहा = **लाल-भूरा**, चाँदी = **काला**, ताँबा = **हरा**! जबकि बर्नर पर **ताँबा गरम करने (`क्र. 1.11 / Ex Q17`) से काला `CuO`** बनता है; `Pb(NO₃)₂` से **भूरा `NO₂` धुआँ**, `BaSO₄` = **सफेद अवक्षेप**, व `PbI₂` = **पीला अवक्षेप**!',
      },
    },
  ],
  pioneers: [
    {
      name: { en: 'Antoine Lavoisier (`Mass Conservation Law Basis`)', hi: 'एंटोनी लावोज़िए (`द्रव्यमान संरक्षण नियम आधार`)' },
      country: { en: 'France (`NCERT Sec 1.1.2 p.3`)', hi: 'फ्रांस (NCERT पृष्ठ 3)' },
      badge: { en: 'Balance Equations Foundation', hi: 'समीकरण संतुलन का आधार' },
      fact: {
        en: 'Established that matter is neither created nor destroyed in a chemical reaction (`total reactant mass = total product mass`) — the exact rule demanding every chemical equation be balanced.',
        hi: 'सिद्ध किया कि किसी रासायनिक अभिक्रिया में द्रव्यमान का न तो सृजन होता है न विनाश — इसी आधार पर दोनों ओर परमाणु संख्या संतुलित की जाती है।',
      },
    },
    {
      name: { en: 'Humphry Davy & Michael Faraday (`Electrolysis Foundation`)', hi: 'हम्फ्री डेवी व फैराडे (`वैद्युतअपघटन सिद्धांत`)' },
      country: { en: 'Royal Institution London (`Sec 1.2.2`)', hi: 'लंदन (NCERT पृष्ठ 9–10)' },
      badge: { en: 'Electrolytic Decomposition Laws', hi: 'वैद्युत वियोजन आधार' },
      fact: {
        en: 'Pioneered electrolytic decomposition using DC currents (`split water 2H₂:1O₂ & reactive alkali salts`), directly explaining Activity 1.7’s cathode/anode gas liberation.',
        hi: 'विद्युत धारा से यौगिकों के अपघटन (`वैद्युतअपघटन`) के नियम दिए जो क्रियाकलाप 1.7 में कैथोड `H₂` व ऐनोड `O₂` के `2:1` निष्कासन को समझाते हैं।',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-mg-burn',
      figRef: { en: 'NCERT Activity 1.1 / Fig 1.1 (`Magnesium Oxidation`)', hi: 'NCERT क्रियाकलाप 1.1 / चित्र 1.1 — मैग्नीशियम दहन' },
      title: {
        en: 'Magnesium Ribbon Ignited in Oxygen: Blinding White Flame Converting Metal Mg into White `MgO` Powder',
        hi: 'वायु में मैग्नीशियम रिबन का चमकदार श्वेत ज्वाला संग दहन → श्वेत `MgO` चूर्ण (`2Mg + O₂ → 2MgO`)',
      },
      imageUrl: '/ncert-notes/class10-chem-ch1/real/magnesium-ribbon-burning.webp',
      hotspots: [
        {
          en: 'Cleaned with sandpaper first (`p.6 Q1`) to strip surface `MgO`; classic combination + exothermic oxidation reaction!',
          hi: 'रेगमाल से साफ कर ऑक्साइड परत हटाने पर तेज श्वेत लौ से जलकर सफेद `MgO` राख वॉच ग्लास में मिलती है।',
        },
      ],
    },
    {
      id: 'vis-pbi2-ppt',
      figRef: { en: 'NCERT Activity 1.2 & p.12 (`Golden-Yellow Precipitate`)', hi: 'NCERT क्रियाकलाप 1.2 व पृ. 12 — पीला `PbI₂` अवक्षेप' },
      title: {
        en: 'Double Displacement Precipitation: Hexagonal Golden-Yellow `PbI₂` Crystals Formed from `Pb(NO₃)₂(aq) + 2KI(aq)`',
        hi: 'द्विविस्थापन अवक्षेपण: रंगहीन `Pb(NO₃)₂ + 2KI` मिलाने पर प्राप्त चमकीला पीला `PbI₂` अवक्षेप',
      },
      imageUrl: '/ncert-notes/class10-chem-ch1/real/lead-iodide-yellow-crystals.webp',
      hotspots: [
        {
          en: 'NCERT `p.12` explicitly revisits Activity 1.2: Yellow precipitate = Lead(II) Iodide (`PbI₂↓`) formed by ion exchange!',
          hi: 'पृष्ठ 12 के प्रश्न का सटीक उत्तर: पीला अवक्षेप **लेड आयोडाइड (`PbI₂`)** का है व यह द्विविस्थापन है!',
        },
      ],
    },
    {
      id: 'vis-agcl-photo',
      figRef: { en: 'NCERT Activity 1.8 / Fig 1.7 (`Photolysis & B&W Photo`)', hi: 'NCERT क्रियाकलाप 1.8 / चित्र 1.7 — प्रकाशिक वियोजन' },
      title: {
        en: 'Photolytic Decomposition of `AgCl`: White Powder Turning Grey Metallic Silver in Sunlight (`2AgCl → 2Ag + Cl₂`)',
        hi: 'सूर्यप्रकाश में `AgCl` का श्वेत से धूसर (`Grey`) चाँदी में वियोजन (`श्याम-श्वेत फोटोग्राफी`)',
      },
      imageUrl: '/ncert-notes/class10-chem-ch1/real/silver-chloride-photolysis.webp',
      hotspots: [
        {
          en: 'Both `2AgCl` and `2AgBr` photodecompose to grey Silver in sunlight -> widely used in traditional Black & White photography (`Group D PYQ`).',
          hi: '`2AgCl` व `2AgBr` दोनों सूर्यप्रकाश से धूसर चाँदी में बदलते हैं — श्याम-श्वेत फोटोग्राफी व `Group D Shift 48` प्रश्न!',
        },
      ],
    },
    {
      id: 'vis-cu-ag-disp',
      figRef: { en: 'NCERT Sec 1.2.3 & Ex Q14 (`Metal Displacement`)', hi: 'NCERT 1.2.3 व अभ्यास Q14 — विस्थापन अभिक्रिया' },
      title: {
        en: 'Single Displacement (`Copper + AgNO₃` Refining Test): More Reactive Copper Deposits Silver Crystals & Turns Solution Blue',
        hi: 'विस्थापन (`कॉपर + सिल्वर नाइट्रेट` शोधन, Ex Q14): अधिक सक्रिय ताँबा विलयन से चाँदी विस्थापित कर नीला घोल बनाता है',
      },
      imageUrl: '/ncert-notes/class10-chem-ch1/real/copper-silver-displacement.webp',
      hotspots: [
        {
          en: '`2AgNO₃(aq) + Cu(s) → Cu(NO₃)₂(aq blue) + 2Ag(s)` (`Ex Q14`) mirrors how `Fe` displaces `Cu` from blue `CuSO₄` (`Act 1.9`).',
          hi: 'अभ्यास Q14 समीकरण: `Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag` (`ताँबा चाँदी से अधिक, पर Fe/Zn से कम सक्रिय है`)।',
        },
      ],
    },
    {
      id: 'vis-rust',
      figRef: { en: 'NCERT Sec 1.3.1 (`Corrosion / Rusting of Iron`)', hi: 'NCERT भाग 1.3.1 — संक्षारण व लोहे पर जंग' },
      title: {
        en: 'Reddish-Brown Flaky Iron Rust Coating (`Corrosion`): Acid & Moisture Attack Weakening Bridges, Railings & Vehicles',
        hi: 'लोहे पर लालिमायुक्त भूरा संक्षारण (`जंग`): नमी व अम्ल के संपर्क में धातु का दुर्बल होना (`Group D Shift 20 PYQ`)',
      },
      imageUrl: '/ncert-notes/class10-chem-ch1/real/iron-rust-corrosion.webp',
      hotspots: [
        {
          en: 'Prevented by painting (`Ex Q18`), oiling, or Zinc **Galvanisation** (`coating with a more reactive metal — ALP 2025 PYQ`).',
          hi: 'पेंट (`Ex Q18`), ग्रीस या अधिक क्रियाशील **जिंक विलेपन (यशदलेपन)** से वायु-नमी का संपर्क टूटकर जंग रुकती है।',
        },
      ],
    },
  ],
  activities: [
    {
      id: 'act-1-1',
      title: { en: 'Activity 1.1: Burning Clean Magnesium Ribbon in Air (`p.1`, `Fig 1.1`)', hi: 'क्रियाकलाप 1.1: साफ मैग्नीशियम रिबन का वायु में दहन (`पृ. 1`, `चित्र 1.1`)' },
      setup: { en: 'Rub a `3–4 cm` Mg ribbon with sandpaper, hold in tongs away from eyes (`wear goggles`) over burner, and collect ash on a watch glass.', hi: '`3–4 cm` Mg रिबन रेगमाल से रगड़कर चिमटे से पकड़ बर्नर पर जलाएँ (`चश्मा पहन आँख से दूर रखें`) व राख वॉच ग्लास में लें।' },
      observation: { en: 'Burns with a **dazzling white flame (`चमकदार श्वेत लौ`)**, turning into white powder of **Magnesium Oxide (`2Mg + O₂ → 2MgO`)** — state change + combination + exothermic oxidation!', hi: '**चमकदार श्वेत लौ** संग जलकर सफेद **मैग्नीशियम ऑक्साइड (`MgO`)** चूर्ण बनता है!' },
      predictQuestion: {
        question: { en: 'Why is magnesium ribbon rubbed with sandpaper BEFORE burning (`In-Text p.6 Q1`)?', hi: 'वायु में जलाने से पहले मैग्नीशियम रिबन को रेगमाल से साफ क्यों किया जाता है (`पृ. 6 Q1`)?' },
        options: { en: ['To cool the burner flame', 'To remove the protective MgO/oxide layer on its surface', 'To convert Mg into liquid', 'To add nitrogen gas coating'], hi: ['लौ ठंडी रखने हेतु', 'सतह पर जमी MgO की रक्षी परत हटाने हेतु', 'Mg को द्रव बदलने हेतु', 'नाइट्रोजन चढ़ाने हेतु'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-2',
      title: { en: 'Activity 1.2: Lead Nitrate + Potassium Iodide (`Yellow Precipitate`, `p.2 & p.12`)', hi: 'क्रियाकलाप 1.2: लेड नाइट्रेट व पोटैशियम आयोडाइड से पीला अवक्षेप (`पृ. 2, 12`)' },
      setup: { en: 'Add aqueous Potassium Iodide (`KI`) solution into aqueous Lead(II) Nitrate (`Pb(NO₃)₂`) solution inside a test tube.', hi: 'परखनली में लेड नाइट्रेट (`Pb(NO₃)₂`) घोल लेकर उसमें पोटैशियम आयोडाइड (`KI`) घोल मिलाएँ।' },
      observation: { en: 'Colorless solutions instantly produce an insoluble **bright YELLOW precipitate of Lead Iodide (`PbI₂↓`)**: `Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃` (**Double Displacement Precipitation**)!', hi: 'तुरंत **पीला अविलेय लेड आयोडाइड (`PbI₂`) अवक्षेप** बनता है (`द्विविस्थापन + रंग परिवर्तन का सटीक प्रमाण`)!' },
      predictQuestion: {
        question: { en: 'Mixing aqueous `Pb(NO₃)₂` and `KI` yields a bright yellow precipitate of (`NCERT p.12`):', hi: '`Pb(NO₃)₂` और `KI` विलयन मिलाने पर बनने वाला पीला अवक्षेप किस यौगिक का होता है (`पृ. 12`)?' },
        options: { en: ['Potassium nitrate (KNO₃)', 'Lead(II) iodide (PbI₂)', 'Lead(II) oxide (PbO)', 'Iodine crystals only'], hi: ['पोटैशियम नाइट्रेट', 'लेड आयोडाइड (PbI₂)', 'लेड ऑक्साइड', 'केवल आयोडीन'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-3',
      title: { en: 'Activity 1.3: Zinc Granules + Dilute `H₂SO₄ / HCl` (`Gas & Heat Test`, `p.2`, `Fig 1.2`)', hi: 'क्रियाकलाप 1.3: दानेदार जस्ते पर तनु `H₂SO₄ / HCl` (`गैस व ताप परिवर्तन`, `चित्र 1.2`)' },
      setup: { en: 'Place zinc granules in a conical flask, pour dilute `HCl` or `H₂SO₄` carefully, observe bubbles & touch flask base.', hi: 'फ्लास्क में दानेदार जिंक लेकर तनु `HCl` या `H₂SO₄` डालें और बुदबुदाहट तथा फ्लास्क का ताप स्पर्श करें।' },
      observation: { en: 'Rapid **`H₂` gas bubbles** evolve around zinc (`Zn + H₂SO₄ → ZnSO₄ + H₂↑`, Exothermic **Displacement**) and **conical flask gets noticeably WARM (`temp change`)**!', hi: 'जिंक दानों के पास तेज **`H₂` गैस बुलबुले** निकलते हैं व **फ्लास्क गरम हो जाता है (`ताप में वृद्धि + विस्थापन`)**!' },
      predictQuestion: {
        question: { en: 'What happens in Activity 1.3 (`and Exercise Q3 Iron + dil. HCl`) when active metal Zn/Fe reacts with dil. acid?', hi: 'दानेदार जिंक या लौह-चूर्ण (`Ex Q3`) पर तनु अम्ल डालने से क्या बनता है?' },
        options: { en: ['O₂ gas and water', 'H₂ gas and metal salt (ZnSO₄ / FeCl₂)', 'Cl₂ gas and metal hydroxide', 'No reaction happens'], hi: ['O₂ गैस व जल', 'हाइड्रोजन गैस व लवण (ZnSO₄ / FeCl₂)', 'Cl₂ व हाइड्रॉक्साइड', 'कोई अभिक्रिया नहीं'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-4',
      title: { en: 'Activity 1.4: Quick Lime (`CaO`) + Water Vigorous Heat (`p.6–7`, `Fig 1.3`)', hi: 'क्रियाकलाप 1.4: बिना बुझा चूना (`CaO`) + जल से बुझा चूना व ऊष्माक्षेपण (`चित्र 1.3`)' },
      setup: { en: 'Place Calcium Oxide (`CaO`) in a beaker, slowly pour water, and touch the outside wall of the beaker.', hi: 'बीकर में थोड़ा कैल्शियम ऑक्साइड (`CaO`) लेकर धीरे-धीरे जल मिलाएँ और बीकर के बाहर स्पर्श करें।' },
      observation: { en: 'Reactants combine vigorously (`CaO + H₂O → Ca(OH)₂ + Heat`): beaker becomes **very HOT** (`Combination + Exothermic`, *Tech 2024 Shift 12 PYQ*)!', hi: 'तीव्र अभिक्रिया से **अत्यधिक ऊष्मा** निकलती है जिससे बीकर बहुत गरम हो जाता है (`संयोजन + ऊष्माक्षेपी अभिक्रिया`)!' },
      predictQuestion: {
        question: { en: 'Which compound is used on walls for whitewashing after mixing Quick Lime `CaO` in water (`In-Text p.10 Q1`)?', hi: 'बिना बुझा चूना (`CaO`) पानी में घोलने पर दीवारों की सफेदी हेतु किसका विलयन बनता है?' },
        options: { en: ['CaCO₃ dissolved directly', 'Slaked lime Ca(OH)₂ solution', 'CaCl₂ powder', 'NaOH flakes'], hi: ['सीधे CaCO₃ घोल', 'बुझा हुआ चूना Ca(OH)₂ विलयन', 'CaCl₂ चूर्ण', 'NaOH'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-5',
      title: { en: 'Activity 1.5: Heating Green Ferrous Sulphate Crystals (`p.8`, `Fig 1.4`)', hi: 'क्रियाकलाप 1.5: हरे फेरस सल्फेट क्रिस्टलों को गर्म करना (`पृ. 8`, `चित्र 1.4`)' },
      setup: { en: 'Heat `2g` light-green **`FeSO₄·7H₂O`** crystals in a dry boiling tube (`mouth pointed away!`); gently waft escaping odor toward nose.', hi: 'शुष्क क्वथन नली में `2g` हरे `FeSO₄` क्रिस्टल गरम करें (`नली का मुँह अपनी/पड़ोसी ओर न करें!`) व गंध सूँघें।' },
      observation: { en: 'Crystals lose water (`7H₂O`), green turns brown solid **`Fe₂O₃` (Ferric Oxide)** + choking burning-sulfur gases **`SO₂` & `SO₃`** (`Thermal Decomposition Eq 1.19`).', hi: 'हरा रंग बदलकर लाल-भूरा ठोस **`Fe₂O₃`** बचता है व गंधक जलने जैसी **`SO₂ + SO₃` गैसें** निकलती हैं (`ऊष्मीय वियोजन 1.19`)।' },
      predictQuestion: {
        question: { en: 'Which substance is NOT formed when ferrous sulphate crystals are strongly heated (`RRB Tech 2024 Shift 12`)?', hi: 'फेरस सल्फेट को गर्म करने पर इनमें से कौन-सा यौगिक नहीं बनता है (`Tech 2024 PYQ`)?' },
        options: { en: ['Ferric oxide (Fe₂O₃)', 'Sulphur dioxide (SO₂)', 'Sulphur trioxide (SO₃)', 'Sulphuric acid (H₂SO₄)'], hi: ['फेरिक ऑक्साइड', 'सल्फर डाइऑक्साइड', 'सल्फर ट्राइऑक्साइड', 'सल्फ्यूरिक अम्ल (H₂SO₄)'] },
        correctIndex: 3,
      },
    },
    {
      id: 'act-1-6',
      title: { en: 'Activity 1.6: Thermal Decomposition of Lead Nitrate (`Brown NO₂ Fumes`, `p.9`, `Fig 1.5`)', hi: 'क्रियाकलाप 1.6: लेड नाइट्रेट का तापन व भूरे `NO₂` धुएँ का उत्सर्जन (`चित्र 1.5`)' },
      setup: { en: 'Heat `2g` white Lead Nitrate powder (`Pb(NO₃)₂`) held with tongs over a burner flame.', hi: 'क्वथन नली में `2g` लेड नाइट्रेट चूर्ण लेकर चिमटे से पकड़ ज्वाला के ऊपर गरम करें।' },
      observation: { en: 'Crackling sound + **brown fumes of Nitrogen Dioxide (`NO₂`)** pour out alongside `O₂` and yellow solid **`PbO`**: `2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂`.', hi: 'चटकने की आवाज संग **तीव्र भूरे रंग का नाइट्रोजन डाइऑक्साइड (`NO₂`) धुआँ** व पीला `PbO` बनता है (`समी. 1.21`)!' },
      predictQuestion: {
        question: { en: 'Heating `Pb(NO₃)₂` crystals evolves dense brown fumes belonging to which gas (`Tech 2024 Shift 10`)?', hi: 'लेड नाइट्रेट के वियोजन से निकलने वाला भूरा धुआँ किस गैस का होता है (`Tech 2024`)?' },
        options: { en: ['N₂O nitrous oxide', 'NO₂ nitrogen dioxide', 'O₂ oxygen', 'H₂ hydrogen'], hi: ['N₂O', 'NO₂ (नाइट्रोजन डाइऑक्साइड)', 'O₂', 'H₂'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-7',
      title: { en: 'Activity 1.7: Water Electrolysis `2H₂ : 1O₂` Gas Volumes (`p.9–10`, `Fig 1.6`)', hi: 'क्रियाकलाप 1.7: जल का वैद्युतअपघटन — `2:1` गैस आयतन व मोमबत्ती जाँच (`चित्र 1.6`)' },
      setup: { en: 'Fit two carbon/graphite electrodes into rubber stoppers at the bottom of a plastic mug, connect `6V` battery, fill water + **few drops dil. `H₂SO₄`**, invert two water-filled tubes.', hi: 'प्लास्टिक मग में दो ग्रेफाइट रॉड को `6V` बैटरी से जोड़ें, जल व **कुछ बूँद तनु `H₂SO₄`** डालकर दो पानी-भरी परखनलियाँ उल्टी रखें।' },
      observation: { en: '**`H₂` at Cathode (`−`) has TWICE the volume of `O₂` at Anode (`+`)** (`2H₂O → 2H₂ + O₂`, `In-Text p.10 Q2`); burning candle pops `H₂` and glows brighter in `O₂`!', hi: '**कैथोड (`−`) पर `H₂` गैस ऐनोड (`+`) की `O₂` से ठीक दोगुनी (`2:1`)** जमा होती है; तीली `H₂` में पॉप संग जलती है!' },
      predictQuestion: {
        question: { en: 'In Activity 1.7 electrolysis of water, which gas has DOUBLE volume and at which electrode?', hi: 'क्रियाकलाप 1.7 में दोगुने आयतन वाली गैस कौन-सी है व किस इलेक्ट्रोड पर इकट्ठी होती है?' },
        options: { en: ['Oxygen at Cathode (−)', 'Hydrogen at Cathode (−)', 'Hydrogen at Anode (+)', 'Equal volumes at both'], hi: ['कैथोड पर ऑक्सीजन', 'कैथोड पर हाइड्रोजन (`H₂` — 2 गुना)', 'ऐनोड पर हाइड्रोजन', 'दोनों पर बराबर'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-8',
      title: { en: 'Activity 1.8: Sunlight Photolysis of Silver Chloride (`B&W Photo`, `p.10`, `Fig 1.7`)', hi: 'क्रियाकलाप 1.8: सूर्यप्रकाश में `AgCl` का धूसर चाँदी में प्रकाश-वियोजन (`चित्र 1.7`)' },
      setup: { en: 'Place `2g` white Silver Chloride (`AgCl`) powder on a china dish under direct sunlight (`plus review p.10 bottom Ba(OH)₂ + NH₄Cl chill test`).', hi: 'चायना डिश में `2g` श्वेत `AgCl` रखकर कुछ देर तेज धूप में रख दें (`व पृ. 10 पर Ba(OH)₂ + NH₄Cl ठंडा परीक्षण करें`)।' },
      observation: { en: 'White `AgCl` turns **grey metallic Silver** releasing `Cl₂` (`2AgCl → 2Ag + Cl₂`); **same for `2AgBr`**, powering **Black & White Photography**. Meanwhile **`Ba(OH)₂ + 2NH₄Cl`** cools tube bottom -> **Endothermic**!', hi: 'सफेद `AgCl` धूप में **धूसर (`Grey`) सिल्वर** बन जाता है (`2AgBr` भी श्याम-श्वेत फोटोग्राफी में प्रयुक्त)। वहीं **`Ba(OH)₂ + NH₄Cl`** परखनली को **ठंडा (ऊष्माशोषी)** करता है!' },
      predictQuestion: {
        question: { en: 'Why does white `AgCl` turn grey in sunlight (`Group D Shift 48 & Tech Shift 4`)?', hi: 'सूर्यप्रकाश में श्वेत सिल्वर क्लोराइड धूसर (`Grey`) क्यों हो जाता है?' },
        options: { en: ['AgCl absorbs nitrogen from air', 'Photolytic decomposition yields grey metallic Silver (Ag) + Cl₂', 'It melts into liquid chloride', 'Oxidation produces black Ag₂O'], hi: ['हवा से N₂ सोखने से', 'प्रकाशिक वियोजन से धूसर सिल्वर धातु (`Ag`) व `Cl₂` बनने के कारण', 'क्लोराइड पिघलने से', 'काला ऑक्साइड बनने से'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-9',
      title: { en: 'Activity 1.9: Iron Nails in Blue Copper Sulphate (`Displacement`, `p.11`, `Fig 1.8`)', hi: 'क्रियाकलाप 1.9: नीले `CuSO₄` घोल में लोहे की कील (`रंग व निक्षेप परीक्षण`, `चित्र 1.8`)' },
      setup: { en: 'Sandpaper 3 clean iron nails; keep 1 nail + Tube A (`10 mL CuSO₄`) untouched, suspend 2 nails in Tube B (`CuSO₄`) for `20 min`.', hi: '3 साफ कीलों में से 1 कील व परखनली A (`CuSO₄`) तुलना हेतु अलग रखकर, 2 कीलों को परखनली B (`CuSO₄`) में `20 मिनट` डुबोएँ।' },
      observation: { en: 'Tube B blue color **fades to light green (`FeSO₄`)** while nails coat with **reddish-brown copper (`Cu`)**: `Fe + CuSO₄ → FeSO₄ + Cu` (`In-Text p.15 Q1 & Group D Shift 31`).', hi: 'परखनली B का नीला रंग फीका (`हल्का हरा FeSO₄`) हो जाता है व कील पर **लाल-भूरा ताँबा** चढ़ जाता है (`पृ. 15 Q1`)।' },
      predictQuestion: {
        question: { en: 'Why does the deep blue colour of `CuSO₄` fade when an iron nail is dipped in it (`p.15 Q1`)?', hi: 'लोहे की कील डुबोने पर `CuSO₄` विलयन का नीला रंग मलीन/फीका क्यों पड़ जाता है?' },
        options: { en: ['Copper coats Fe, evaporating all water', 'More reactive Iron displaces Copper forming light-green FeSO₄ solution', 'Iron neutralizes sulfuric acid into blue gas', 'Sunlight bleaches CuSO₄'], hi: ['पानी उड़ जाने से', 'अधिक सक्रिय लोहा कॉपर को विस्थापित कर हल्का हरा FeSO₄ बनाता है', 'अम्ल उदासीन होने से', 'धूप से रंग उड़ता है'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-10',
      title: { en: 'Activity 1.10: `Na₂SO₄` + `BaCl₂` Instant White Precipitate (`p.12`, `Fig 1.9`)', hi: 'क्रियाकलाप 1.10: `Na₂SO₄` व `BaCl₂` से श्वेत `BaSO₄` अवक्षेप (`पृ. 12`, `चित्र 1.9`)' },
      setup: { en: 'Mix `3 mL` aqueous Sodium Sulphate (`Na₂SO₄`) and `3 mL` aqueous Barium Chloride (`BaCl₂`).', hi: 'परखनली में `3 mL` सोडियम सल्फेट व `3 mL` बेरियम क्लोराइड विलयन आपस में मिलाएँ।' },
      observation: { en: '**Insoluble white precipitate of Barium Sulphate (`BaSO₄↓`)** settles cleanly while `2NaCl(aq)` stays dissolved — via exchange of **`Ba²⁺` and `SO₄²⁻` ions** (`Double Displacement`).', hi: '**`Ba²⁺` व `SO₄²⁻` आयनों के विनिमय** से तुरंत जल में **अविलेय श्वेत `BaSO₄` अवक्षेप** बनता है (`द्विविस्थापन अभिक्रिया 1.27`)।' },
      predictQuestion: {
        question: { en: 'In `Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2NaCl(aq)`, which product forms the white insoluble solid (`Tech Shift 2`)?', hi: 'दी गई अभिक्रिया में सफेद अघुलनशील ठोस अवक्षेप कौन-सा पदार्थ है (`Tech 2024 PYQ`)?' },
        options: { en: ['Sodium chloride (NaCl)', 'Barium sulphate (BaSO₄)', 'Sodium sulphate (Na₂SO₄)', 'Barium oxide'], hi: ['सोडियम क्लोराइड', 'बेरियम सल्फेट (`BaSO₄`)', 'सोडियम सल्फेट', 'बेरियम ऑक्साइड'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-11',
      title: { en: 'Activity 1.11: Heating Copper Powder Black `CuO` & Reversing with `H₂` (`p.12–13`, `Fig 1.10`)', hi: 'क्रियाकलाप 1.11: ताँबा गरम कर काला `CuO` बनाना व `H₂` से पुनः भूरा ताँबा (`पृ. 12–13`)' },
      setup: { en: 'Heat `1g` brown copper powder in a china dish over burner (`Part 1`); then pass `H₂` gas over hot black product (`Part 2`).', hi: 'चायना डिश में `1g` कॉपर चूर्ण गरम करें (`भाग 1`), फिर बने काले पदार्थ पर `H₂` गैस प्रवाहित करें (`भाग 2`)।' },
      observation: { en: 'Part 1: Copper oxidizes to **black `CuO` (`2Cu + O₂ → 2CuO`)** (`Ex Q17`). Part 2: **`H₂` reduces `CuO` back into shiny brown Copper + `H₂O`** (`Redox Eq 1.29`)!', hi: 'भाग 1: कॉपर चूर्ण पर **काला `CuO`** बनता है (`Ex Q17`)। भाग 2: **`H₂` गुजारने से पुनः भूरा ताँबा (`Cu`) व जल** बनता है (`रेडॉक्स 1.29`)!' },
      predictQuestion: {
        question: { en: 'Shiny brown element “X” heated in air turns black (`NCERT Ex Q17`). Identify “X” and the black compound:', hi: 'चमकदार भूरे तत्व ‘X’ को वायु में गरम करने पर वह काला हो जाता है (`Ex Q17`) — ‘X’ व काला यौगिक है:' },
        options: { en: ['X = Iron, Black = FeSO₄', 'X = Copper (Cu), Black = Copper(II) Oxide (CuO)', 'X = Silver, Black = Ag₂O', 'X = Lead, Black = PbO₂'], hi: ['X = आयरन, काला = FeSO₄', 'X = कॉपर (ताँबा), काला = कॉपर (II) ऑक्साइड (CuO)', 'X = चाँदी, काला = Ag₂O', 'X = सीसा, काला = PbO₂'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-1-12-group',
      title: { en: 'Group Lab (`NCERT p.18`): 4-Beaker Temperature Check (`K₂SO₄, NH₄NO₃, CuSO₄, Fe+CuSO₄`)', hi: 'सामूहिक प्रयोग (`पृ. 18`): 4 बीकरों में ऊष्माक्षेपी बनाम ऊष्माशोषी तापमान जाँच' },
      setup: { en: 'Add 2 spatulas each of `K₂SO₄` (Beaker A water), `NH₄NO₃` (B water), anhydrous `CuSO₄` (C water), and iron filings (`D` in `CuSO₄` soln); record temp before/after.', hi: 'चार बीकरों A (`K₂SO₄+जल`), B (`अमोनियम नाइट्रेट+जल`), C (`निर्जल CuSO₄+जल`) व D (`लोहे की छीलन + CuSO₄ घोल`) का पहले व बाद का तापमान नापें।' },
      observation: { en: '**B (`NH₄NO₃` dissolving)** drops temperature markedly -> **Endothermic**; **C (`hydration of CuSO₄`)** and **D (`Fe+CuSO₄ displacement`)** raise temperature -> **Exothermic**!', hi: '**बीकर B (`NH₄NO₃` विलेयन)** तापमान घटाकर **ऊष्माशोषी** दर्शाता है, जबकि **C (जलयोजन) व D (`Fe+CuSO₄`) तापमान बढ़ाकर ऊष्माक्षेपी** सिद्ध करते हैं!' },
      predictQuestion: {
        question: { en: 'Which beaker mixture in the `p.18` Group Activity turns cold (`Endothermic reaction`)?', hi: 'पृष्ठ 18 के सामूहिक बीकर प्रयोग में कौन-सी क्रिया तापमान गिराकर ऊष्माशोषी गुण दर्शाती है?' },
        options: { en: ['Anhydrous CuSO₄ dissolving in water (Beaker C)', 'Iron filings added to CuSO₄ (Beaker D)', 'Ammonium nitrate (NH₄NO₃) dissolving in water (Beaker B)', 'Quick lime (CaO) added to water'], hi: ['निर्जल CuSO₄ + जल (C)', 'लोहा + CuSO₄ (D)', 'जल में अमोनियम नाइट्रेट (NH₄NO₃) घुलना (B)', 'CaO + जल'] },
        correctIndex: 2,
      },
    },
  ],
  tables: [
    {
      id: 'tbl-1-1',
      title: {
        en: 'Chemical Equations Essentials: 4 Reaction Signs, State Symbols & Conditions (`NCERT Sec 1.0–1.1`)',
        hi: 'रासायनिक समीकरण के आधार: 4 लक्षण, भौतिक अवस्था संकेत `(s/l/aq/g)` एवं प्रमुख तीर-शर्तें',
      },
      headers: {
        en: ['Element / Concept', 'NCERT Symbol / Value', 'Exact Reaction Example (`NCERT p.2–6`)', 'Railway Exam Trap Note'],
        hi: ['तत्व / अवधारणा', 'NCERT संकेत / मान', 'सटीक समीकरण उदाहरण (`पृ. 2–6`)', 'रेलवे परीक्षा मुख्य नोट'],
      },
      rows: [
        [{ en: '**4 Indicators**', hi: '**अभिक्रिया के 4 लक्षण**' }, { en: 'State, Color, Gas, Temp', hi: 'अवस्था, रंग, गैस, तापमान' }, { en: 'Any one confirms chemical reaction occurred (`Act 1.1–1.3`)', hi: 'इनमें से कोई भी परिवर्तन अभिक्रिया सिद्ध करता है (`Tech PYQ`)' }, { en: 'Physical state change alone (`melted wax`) isn’t always chemical without new product!', hi: 'अभिक्रिया में नया पदार्थ बनना अनिवार्य है!' }],
        [{ en: '**State Symbols**', hi: '**भौतिक अवस्था संकेत**' }, { en: '`(s)` Solid, `(l)` Liquid, `(aq)` Aqueous, `(g)` Gas', hi: '`(s)` ठोस, `(l)` द्रव, `(aq)` जलीय, `(g)` गैस' }, { en: '**`3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`** (`Eq 1.10`)', hi: '**`3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`** (`1.10`)' }, { en: '**`H₂O(g)` means STEAM**, NOT liquid water! (`Eq 1.10`)', hi: '**`H₂O(g)` भाप (Steam)** दर्शाता है, तरल जल नहीं!' }],
        [{ en: '**Arrow Conditions**', hi: '**तीर शर्तें (ताप/दाब/प्रकाश)**' }, { en: '`340 atm` | `Sunlight / Chlorophyll`', hi: '`340 atm` | `सूर्यप्रकाश / क्लोरोफिल`' }, { en: '`CO + 2H₂ —340 atm→ CH₃OH` (`1.11`); Photosynthesis (`1.12`)', hi: '`CO+2H₂ → CH₃OH (340 atm)`; `6CO₂+12H₂O → C₆H₁₂O₆+6O₂+6H₂O`' }, { en: 'Check `12H₂O` -> gives `6H₂O` back on RHS (`Eq 1.12`)!', hi: 'समी. 1.12 में LHS `12H₂O` व RHS `6H₂O` संतुलित रहता है!' }],
      ],
    },
    {
      id: 'tbl-1-2',
      title: {
        en: 'Master Balanced Equations Bank (`All Chapter 1 Questions & Key CBSE/RRB Picks`)',
        hi: 'संपूर्ण अध्याय 1 के अति-महत्वपूर्ण संतुलित रासायनिक समीकरण (`पृ. 4–17`)',
      },
      headers: {
        en: ['Word Statement / Source', 'Balanced Chemical Equation', 'Reaction Type'],
        hi: ['अभिक्रिया विवरण / स्रोत', 'संतुलित रासायनिक समीकरण', 'अभिक्रिया प्रकार'],
      },
      rows: [
        [{ en: 'Burning Magnesium (`Act 1.1`)', hi: 'मैग्नीशियम दहन (`क्र. 1.1`)' }, { en: '**`2Mg(s) + O₂(g) → 2MgO(s)`**', hi: '**`2Mg(s) + O₂(g) → 2MgO(s)`**' }, { en: 'Combination + Exothermic + Oxidation', hi: 'संयोजन + ऊष्माक्षेपी + उपचयन' }],
        [{ en: 'Iron + Steam (`Sec 1.1.2 Eq 1.10`)', hi: 'आयरन + भाप (`समी. 1.10`)' }, { en: '**`3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`**', hi: '**`3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`**' }, { en: 'Hit-&-Trial Flagship (`Redox`)', hi: 'हिट-एंड-ट्रायल मुख्य समीकरण' }],
        [{ en: 'Barium chloride + Aluminium sulphate (`p.6 Q2`)', hi: 'बेरियम क्लोराइड + ऐलुमिनियम सल्फेट (`पृ. 6 Q2`)' }, { en: '**`3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄↓ + 2AlCl₃`**', hi: '**`3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄↓ + 2AlCl₃`**' }, { en: 'Double Displacement (White ppt)', hi: 'द्विविस्थापन (सफेद अवक्षेप)' }],
        [{ en: 'Nitrogen + Hydrogen -> Ammonia (`Ex Q5a`)', hi: 'नाइट्रोजन + हाइड्रोजन → अमोनिया (`अभ्यास Q5a`)' }, { en: '**`N₂(g) + 3H₂(g) → 2NH₃(g)`**', hi: '**`N₂(g) + 3H₂(g) → 2NH₃(g)`**' }, { en: 'Combination', hi: 'संयोजन' }],
        [{ en: 'H₂S combustion in air (`Ex Q5b`)', hi: 'हाइड्रोजन सल्फाइड दहन (`अभ्यास Q5b`)' }, { en: '**`2H₂S(g) + 3O₂(g) → 2H₂O(l) + 2SO₂(g)`**', hi: '**`2H₂S(g) + 3O₂(g) → 2H₂O(l) + 2SO₂(g)`**' }, { en: 'Redox Combustion', hi: 'रेडॉक्स / दहन' }],
        [{ en: 'Silver Refining (`Copper + AgNO₃`, `Ex Q14`)', hi: 'सिल्वर शोधन (`कॉपर + AgNO₃`, `Q14`)' }, { en: '**`2AgNO₃(aq) + Cu(s) → Cu(NO₃)₂(aq) + 2Ag(s)`**', hi: '**`2AgNO₃(aq) + Cu(s) → Cu(NO₃)₂(aq) + 2Ag(s)`**' }, { en: 'Single Displacement', hi: 'विस्थापन' }],
      ],
    },
    {
      id: 'tbl-1-3',
      title: {
        en: 'Three Types of Decomposition Reactions (`Sec 1.2.2`: Thermal, Electrolytic, Photolytic)',
        hi: 'वियोजन अभिक्रिया के तीनों प्रकार: ऊष्मीय, वैद्युत एवं प्रकाशिक (`भाग 1.2.2`, `समी. 1.19–1.23`)',
      },
      headers: {
        en: ['Decomposition Mode', 'Balanced NCERT Equation', 'Distinctive Observation / Industrial Use'],
        hi: ['वियोजन प्रकार (ऊर्जा)', 'संतुलित NCERT समीकरण', 'प्रमुख प्रेक्षण व औद्योगिक उपयोग'],
      },
      rows: [
        [{ en: '**Thermal 1 (`Act 1.5`)**', hi: '**ऊष्मीय 1 (`क्र. 1.5`)**' }, { en: '`2FeSO₄(s) —Δ→ Fe₂O₃(s) + SO₂↑ + SO₃↑`', hi: '`2FeSO₄(s) —ऊष्मा→ Fe₂O₃(s) + SO₂↑ + SO₃↑`' }, { en: 'Green `FeSO₄·7H₂O` loses water -> brown solid + **burning sulfur smell** (`NO H₂SO₄!`)', hi: 'हरा क्रिस्टल जल खोकर भूरा `Fe₂O₃` व **गंधक जैसी `SO₂/SO₃`** देता है' }],
        [{ en: '**Thermal 2 (`Limestone`)**', hi: '**ऊष्मीय 2 (`चूना पत्थर`)**' }, { en: '`CaCO₃(s) —Δ→ CaO(s) + CO₂(g)`', hi: '`CaCO₃(s) —ऊष्मा→ CaO(s) + CO₂(g)`' }, { en: 'Quick lime `CaO` -> **used in Cement industry**!', hi: '**बिना बुझा चूना (`CaO`)** व `CO₂` → **सीमेंट उद्योग** में उपयोग!' }],
        [{ en: '**Thermal 3 (`Act 1.6`)**', hi: '**ऊष्मीय 3 (`क्र. 1.6`)**' }, { en: '`2Pb(NO₃)₂(s) —Δ→ 2PbO(s) + 4NO₂(g) + O₂(g)`', hi: '`2Pb(NO₃)₂(s) —ऊष्मा→ 2PbO(s) + 4NO₂(g) + O₂(g)`' }, { en: 'Emits dense **BROWN fumes of `NO₂`** (`Tech Shift 10`)!', hi: '**भूरे रंग का `NO₂` धुआँ** व पीला `PbO` बनता है (`Tech Shift 10`)!' }],
        [{ en: '**Electrolytic (`Act 1.7`)**', hi: '**वैद्युतअपघटन (`क्र. 1.7`)**' }, { en: '`2H₂O(l) —6V DC→ 2H₂(g) + O₂(g)`', hi: '`2H₂O(l) —विद्युत→ 2H₂(g) + O₂(g)`' }, { en: '**Cathode `H₂` (`2 vol`) : Anode `O₂` (`1 vol`)** + dil. `H₂SO₄` conductor!', hi: '**कैथोड पर 2 आयतन `H₂` : ऐनोड पर 1 आयतन `O₂`**!' }],
        [{ en: '**Photolytic (`Act 1.8`)**', hi: '**प्रकाशिक (`क्र. 1.8`)**' }, { en: '`2AgCl / 2AgBr —Sunlight→ 2Ag + Cl₂ / Br₂`', hi: '`2AgCl / 2AgBr —सूर्यप्रकाश→ 2Ag + Cl₂ / Br₂`' }, { en: 'Turns **GREY (`Ag metal`)** -> **Black & White Photography**!', hi: 'श्वेत `AgCl` **धूसर (`Grey`)** हो जाता है — **श्याम-श्वेत फोटोग्राफी**!' }],
      ],
    },
    {
      id: 'tbl-1-4',
      title: {
        en: 'Color Changes & Precipitate Matrix (`Must-Know Lab Table for RRB CBT!`)',
        hi: 'प्रमुख रंग परिवर्तन एवं अवक्षेप तालिका (`रेलवे परीक्षा अचूक सारणी`)',
      },
      headers: {
        en: ['Experiment / Reactants', 'Before Appearance', 'After Product & Visual Change', 'NCERT Eq / Activity'],
        hi: ['प्रयोग / अभिकारक', 'प्रारंभिक रूप/रंग', 'अंतिम उत्पाद एवं दृश्य परिवर्तन', 'NCERT स्रोत'],
      },
      rows: [
        [
          { en: '`Fe(s) + CuSO₄(aq)`', hi: '`Fe + CuSO₄(aq)`' },
          { en: 'Deep blue soln + grey nail', hi: 'गहरा नीला घोल + धूसर कील' },
          { en: 'Pale **light green `FeSO₄`** + **brown `Cu` on nail**', hi: '**नीला रंग फीका (हरा `FeSO₄`)** + कील पर **भूरा ताँबा**' },
          { en: 'Act 1.9 / Eq 1.24', hi: 'क्र. 1.9 / समी. 1.24' },
        ],
        [
          { en: '`Pb(NO₃)₂ + 2KI`', hi: 'दो रंगहीन घोल (`Pb(NO₃)₂+KI`)' },
          { en: 'Two clear colorless solutions', hi: 'दो पारदर्शी रंगहीन विलयन' },
          { en: 'Bright **YELLOW precipitate (`PbI₂↓`)**', hi: 'चमकीला **पीला अवक्षेप (`PbI₂↓`)**' },
          { en: 'Act 1.2 / p.12', hi: 'क्र. 1.2 / पृ. 12' },
        ],
        [
          { en: '`Na₂SO₄ + BaCl₂`', hi: '`Na₂SO₄ + BaCl₂`' },
          { en: 'Two clear colorless solutions', hi: 'दो पारदर्शी रंगहीन विलयन' },
          { en: 'Insoluble **WHITE precipitate (`BaSO₄↓`)**', hi: 'अघुलनशील **श्वेत अवक्षेप (`BaSO₄↓`)**' },
          { en: 'Act 1.10 / Eq 1.27', hi: 'क्र. 1.10 / समी. 1.27' },
        ],
        [
          { en: '`2Cu + O₂` -> `+ H₂`', hi: '`2Cu + O₂` फिर `+ H₂`' },
          { en: 'Shiny brown Copper powder', hi: 'चमकदार भूरा ताँबा चूर्ण' },
          { en: 'Heat -> **BLACK `CuO`**; `+ H₂` -> back to **brown `Cu`**!', hi: 'तापन पर **काला `CuO`**; `+ H₂` से पुनः **भूरा `Cu`**!' },
          { en: 'Act 1.11 / Ex Q17', hi: 'क्र. 1.11 / Ex Q17' },
        ],
      ],
    },
    {
      id: 'tbl-1-5',
      title: {
        en: 'Redox Reactions (`Eq 1.29–1.32`), Metal Corrosion Tarnish & Rancidity Prevention (`Sec 1.2.5–1.3`)',
        hi: 'रेडॉक्स युग्म (`समी. 1.29–1.32`), संक्षारण परत के रंग एवं विकृतगंधिता निवारण',
      },
      headers: {
        en: ['Reaction / Phenomenon', 'Oxidised (`Loses H / Gains O`)', 'Reduced (`Loses O / Gains H`)', 'Exam Key Fact / Prevention'],
        hi: ['प्रक्रिया / समीकरण', 'उपचयित (`+O / -H`)', 'अपचयित (`-O / +H`)', 'मुख्य परीक्षा तथ्य / रोकथाम'],
      },
      rows: [
        [{ en: '**`CuO + H₂ → Cu + H₂O`**', hi: '**`CuO + H₂ → Cu + H₂O`**' }, { en: '`H₂` -> `H₂O`', hi: '`H₂` (`ऑक्सीजन जुड़ा`)' }, { en: '`CuO` -> `Cu`', hi: '`CuO` (`ऑक्सीजन हटी`)' }, { en: 'Recovers brown copper (`In-Text p.15 Q3ii`)', hi: 'काले `CuO` से पुनः भूरा ताँबा (`पृ. 15 Q3`)' }],
        [{ en: '**`ZnO + C → Zn + CO`**', hi: '**`ZnO + C → Zn + CO`**' }, { en: '`C` -> `CO`', hi: '`C` (`CO में बदला`)' }, { en: '`ZnO` -> `Zn`', hi: '`ZnO` (`Zn में अपचयित`)' }, { en: '`ZnO` loses oxygen (`Group D Shift 22 PYQ`)', hi: 'जिंक ऑक्साइड का अपचयन (`Group D PYQ`)' }],
        [{ en: '**`MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂`**', hi: '**`MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂`**' }, { en: '`HCl` -> `Cl₂` (`lost H`)', hi: '`HCl` (`-H` होकर `Cl₂`)' }, { en: '`MnO₂` -> `MnCl₂` (`lost O`)', hi: '`MnO₂` (`-O` होकर `MnCl₂`)' }, { en: 'HCl loses H -> Oxidised (`Group D Shift 8`)', hi: '`MnO₂` ने ऑक्सीजन त्यागी (`Group D Shift 8`)' }],
        [{ en: '**Corrosion (`Fe, Ag, Cu`)**', hi: '**धातु संक्षारण (`Fe, Ag, Cu`)**' }, { en: 'Metals slowly oxidise in moist/acid air', hi: 'नमी/अम्ल से धातुओं का धीमा उपचयन' }, { en: 'Colors: **Fe=Red-brown, Ag=Black, Cu=Green**', hi: 'रंग: **लोहा=लाल-भूरा, चाँदी=काला, ताँबा=हरा**' }, { en: 'Prevent via **Paint, Oil, Zinc Galvanisation**', hi: 'पेंट, तेल/ग्रीस या **जिंक यशदलेपन** से रोकें!' }],
        [{ en: '**Rancidity (`Fats/Oils`)**', hi: '**विकृतगंधिता (`तेल व वसा`)**' }, { en: 'Oil & fats oxidise -> bad smell/taste', hi: 'तेल व वसा उपचयित होकर गंध-स्वाद बदलते हैं' }, { en: 'Prevent: **Antioxidants**, airtight jars', hi: 'बचाव: **प्रति-ऑक्सीकारक**, वायुरोधी पात्र' }, { en: '**Flush chips packets with `N₂` (`inert`)**', hi: '**चिप्स की थैली में `O₂` हटा `N₂` भरते हैं (`Ex Q19`)**' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.6 Q1',
      q: { en: 'Why should a magnesium ribbon be cleaned before burning in air?', hi: 'वायु में जलाने से पहले मैग्नीशियम रिबन को साफ क्यों किया जाता है?' },
      a: { en: 'Magnesium reacts slowly with moist atmospheric oxygen forming a protective coating of **Magnesium Oxide (`or carbonate`)** on its surface. Rubbing with sandpaper **removes this unreactive oxide layer** so pure Mg burns smoothly with air `O₂`.', hi: 'मैग्नीशियम वायु की नमी व ऑक्सीजन से अभिक्रिया कर सतह पर **मैग्नीशियम ऑक्साइड (`MgO`) की परत** बना लेता है, जो आगे दहन को रोकती है। रेगमाल से साफ करने पर यह परत हटती है व रिबन आसानी से जलता है।' },
    },
    {
      num: 'p.6 Q2',
      q: { en: 'Write balanced chemical equations for: `(i)` Hydrogen + Chlorine -> Hydrogen chloride `(ii)` Barium chloride + Aluminium sulphate -> Barium sulphate + Aluminium chloride `(iii)` Sodium + Water -> Sodium hydroxide + Hydrogen.', hi: 'निम्नलिखित रासायनिक अभिक्रियाओं के लिए संतुलित समीकरण लिखिए — `(i)` हाइड्रोजन + क्लोरीन → हाइड्रोजन क्लोराइड `(ii)` बेरियम क्लोराइड + ऐलुमिनियम सल्फेट → बेरियम सल्फेट + ऐलुमिनियम क्लोराइड `(iii)` सोडियम + जल → सोडियम हाइड्रॉक्साइड + हाइड्रोजन।' },
      a: { en: '**`(i)`** `H₂(g) + Cl₂(g) → 2HCl(g)` | **`(ii)`** `3BaCl₂(aq) + Al₂(SO₄)₃(aq) → 3BaSO₄(s)↓ + 2AlCl₃(aq)` | **`(iii)`** `2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)`.', hi: '**`(i)`** `H₂ + Cl₂ → 2HCl` | **`(ii)`** `3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄↓ + 2AlCl₃` | **`(iii)`** `2Na + 2H₂O → 2NaOH + H₂`।' },
    },
    {
      num: 'p.6 Q3',
      q: { en: 'Write a balanced chemical equation with state symbols for: `(i)` Barium chloride and sodium sulphate in water react to give insoluble barium sulphate and sodium chloride solution `(ii)` Sodium hydroxide (`aq`) reacts with hydrochloric acid (`aq`) to produce sodium chloride (`aq`) and water.', hi: 'अवस्था के संकेतों के साथ संतुलित समीकरण लिखिए — `(i)` जल में `BaCl₂` तथा `Na₂SO₄` मिलकर `NaCl(aq)` व अविलेय `BaSO₄` अवक्षेप देते हैं `(ii)` `NaOH(aq) + HCl(aq)` से `NaCl(aq)` तथा जल बनता है।' },
      a: { en: '**`(i)`** `BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)` (`white ppt!`) | **`(ii)`** `NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)` (`neutralization + double displacement!`).', hi: '**`(i)`** `BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)` (`सफेद अवक्षेप`) | **`(ii)`** `NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)`।' },
    },
    {
      num: 'p.10 Q1',
      q: { en: 'A solution of a substance ‘X’ is used for whitewashing. `(i)` Name substance ‘X’ and write its formula. `(ii)` Write the reaction of substance ‘X’ with water.', hi: 'किसी पदार्थ ‘X’ के विलयन का उपयोग सफेदी करने के लिए होता है — `(i)` ‘X’ का नाम व सूत्र लिखिए `(ii)` ‘X’ की जल के साथ अभिक्रिया लिखिए।' },
      a: { en: '**`(i)`** Substance ‘X’ is **Calcium Oxide (`Quick Lime / बिना बुझा चूना`)**, formula **`CaO`** (*dissolved in water forming `Ca(OH)₂` whitewash slurry!*). **`(ii)`** **`CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat`** (`exothermic combination`).', hi: '**`(i)`** पदार्थ ‘X’ = **कैल्शियम ऑक्साइड (`बिना बुझा चूना`)**, सूत्र **`CaO`** (`जिसका जलीय घोल Ca(OH)₂ सफेदी करता है`)। **`(ii)`** **`CaO(s) + H₂O(l) → Ca(OH)₂(aq) + ऊष्मा`**।' },
    },
    {
      num: 'p.10 Q2',
      q: { en: 'Why is the amount of gas collected in one of the test tubes in Activity 1.7 double of the amount collected in the other? Name this gas.', hi: 'क्रियाकलाप 1.7 में एक परखनली में एकत्रित गैस की मात्रा दूसरी से दोगुनी क्यों है? उस गैस का नाम बताइए।' },
      a: { en: 'Water (`H₂O`) contains **2 atoms of Hydrogen for every 1 atom of Oxygen**: `2H₂O(l) —Electrolysis→ 2H₂(g) + O₂(g)`. Hence **Hydrogen (`H₂`)**, collected at the **Cathode (`−`)**, has **twice the gas volume** of Oxygen (`O₂`) at the Anode (`+`).', hi: 'जल (`H₂O`) में हाइड्रोजन व ऑक्सीजन **2:1** के अनुपात में होते हैं (`2H₂O → 2H₂ + O₂`) — अतः **हाइड्रोजन (`H₂`) गैस** (कैथोड पर) ऑक्सीजन की तुलना में **दोगुने आयतन** में एकत्रित होती है!' },
    },
    {
      num: 'p.15 Q1',
      q: { en: 'Why does the colour of copper sulphate solution change when an iron nail is dipped in it?', hi: 'जब लोहे की कील को कॉपर सल्फेट के विलयन में डुबोया जाता है तो विलयन का रंग क्यों बदल जाता है?' },
      a: { en: '**Iron is more reactive than Copper**, so Iron displaces Copper from `CuSO₄` forming **light-green Ferrous Sulphate (`FeSO₄`)** and brown Cu on the nail: **`Fe(s) + CuSO₄(aq blue) → FeSO₄(aq light green) + Cu(s)`**.', hi: '**आयरन कॉपर से अधिक अभिक्रियाशील होने के कारण** कॉपर सल्फेट के विलयन से कॉपर को विस्थापित कर देता है, जिससे नीला रंग हल्के हरे **`FeSO₄`** में बदल जाता है (`Fe + CuSO₄ → FeSO₄ + Cu`)।' },
    },
    {
      num: 'p.15 Q2',
      q: { en: 'Give an example of a double displacement reaction other than the one given in Activity 1.10 (`Na₂SO₄ + BaCl₂`).', hi: 'क्रियाकलाप 1.10 से भिन्न द्विविस्थापन अभिक्रिया का एक उदाहरण दीजिए।' },
      a: { en: '**Lead Nitrate + Potassium Iodide (`Activity 1.2`)**: **`Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s yellow ppt) + 2KNO₃(aq)`** (`or NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)`, `or Na₂CO₃ + CaCl₂ → CaCO₃↓ + 2NaCl`).', hi: '**लेड (II) नाइट्रेट + पोटैशियम आयोडाइड (`क्र. 1.2`)**: **`Pb(NO₃)₂ + 2KI → PbI₂↓ (पीला अवक्षेप) + 2KNO₃`** (या `AgNO₃ + NaCl → AgCl↓ + NaNO₃`)।' },
    },
    {
      num: 'p.15 Q3',
      q: { en: 'Identify the substances that are oxidised and the substances reduced in: `(i)` `4Na(s) + O₂(g) → 2Na₂O(s)` `(ii)` `CuO(s) + H₂(g) → Cu(s) + H₂O(l)`.', hi: 'उपचयित तथा अपचयित पदार्थों की पहचान कीजिए: `(i)` `4Na + O₂ → 2Na₂O` `(ii)` `CuO + H₂ → Cu + H₂O`।' },
      a: { en: '**`(i)`** **Sodium (`Na`) is oxidised** to `Na₂O` (`gains O`); **Oxygen (`O₂`) is reduced**. **`(ii)`** **Hydrogen (`H₂`) is oxidised** to `H₂O`; **Copper(II) Oxide (`CuO`) is reduced** to `Cu` (`loses O`).', hi: '**`(i)`** **`Na` उपचयित** व **`O₂` अपचयित**। **`(ii)`** **`H₂` उपचयित** (`+O` → `H₂O`) व **`CuO` अपचयित** (`-O` → `Cu`)!' },
    },
  ],
  exercises: [
    {
      num: 'Ex Q1',
      q: { en: 'Which statements about `2PbO(s) + C(s) → 2Pb(s) + CO₂(g)` are INCORRECT? `(a)` Lead is getting reduced `(b)` Carbon dioxide is getting oxidised `(c)` Carbon is getting oxidised `(d)` Lead oxide is getting reduced. `(i) (a) and (b)` `(ii) (a) and (c)` `(iii) (a), (b) and (c)` `(iv) all`.', hi: '`2PbO(s) + C(s) → 2Pb(s) + CO₂(g)` के संबंध में कौन-सा कथन असत्य है? `(a)` सीसा अपचयित हो रहा है `(b)` `CO₂` उपचयित हो रहा है `(c)` कार्बन उपचयित हो रहा है `(d)` लेड ऑक्साइड अपचयित हो रहा है: `(i) (a) एवं (b)` `(ii) (a) एवं (c)` `(iii) (a), (b) एवं (c)` `(iv) सभी`।' },
      a: { en: '**`(i)` `(a)` and `(b)` (`Official NCERT Answer Key verified!`)**: **Reactant `PbO` (`NOT product Pb!`) is reduced** and **reactant `C` (`NOT product CO₂!`) is oxidised** — making `(a)` and `(b)` incorrect (`while (c) and (d) are true`).', hi: '**`(i)` `(a)` एवं `(b)` (`NCERT उत्तरकुंजी से सत्यापित`)** — क्योंकि अपचयन-उपचयन सदैव अभिकारक (`PbO व C`) का होता है, उत्पाद (`Pb व CO₂`) का नहीं!' },
    },
    {
      num: 'Ex Q2',
      q: { en: '`Fe₂O₃ + 2Al → Al₂O₃ + 2Fe` — The above reaction is an example of a: `(a)` combination `(b)` double displacement `(c)` decomposition `(d)` displacement reaction.', hi: '`Fe₂O₃ + 2Al → Al₂O₃ + 2Fe` ऊपर दी गई अभिक्रिया किस प्रकार की है — `(a)` संयोजन `(b)` द्विविस्थापन `(c)` वियोजन `(d)` विस्थापन अभिक्रिया।' },
      a: { en: '**`(d)` Displacement reaction (`NCERT Key verified!`)** — more reactive Aluminium (`Al`) displaces Iron (`Fe`) from `Fe₂O₃` (`highly exothermic Thermite rail-welding reaction!`).', hi: '**`(d)` विस्थापन अभिक्रिया (`NCERT उत्तरकुंजी सत्यापित`)** — अधिक सक्रिय ऐलुमिनियम (`Al`) ने `Fe₂O₃` से आयरन (`Fe`) को विस्थापित कर दिया।' },
    },
    {
      num: 'Ex Q3',
      q: { en: 'What happens when dilute hydrochloric acid is added to iron filings? `(a)` Hydrogen gas and iron chloride are produced `(b)` Chlorine gas and iron hydroxide `(c)` No reaction `(d)` Iron salt and water.', hi: 'लौह-चूर्ण पर तनु हाइड्रोक्लोरिक अम्ल डालने से क्या होता है? `(a)` हाइड्रोजन गैस एवं आयरन क्लोराइड `(b)` क्लोरीन गैस व हाइड्रॉक्साइड `(c)` कोई क्रिया नहीं `(d)` लवण व जल।' },
      a: { en: '**`(a)` Hydrogen gas and Iron(II) Chloride (`FeCl₂`) are produced (`NCERT Key verified!`)**: `Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)↑`.', hi: '**`(a)` हाइड्रोजन गैस एवं आयरन क्लोराइड (`FeCl₂`) बनता है (`NCERT उत्तरकुंजी सत्यापित`)**: `Fe + 2HCl → FeCl₂ + H₂↑`।' },
    },
    {
      num: 'Ex Q4',
      q: { en: 'What is a balanced chemical equation? Why should chemical equations be balanced?', hi: 'संतुलित रासायनिक समीकरण क्या है? रासायनिक समीकरण को संतुलित करना क्यों आवश्यक है?' },
      a: { en: 'A chemical equation with **equal numbers of atoms of each element on BOTH sides (`LHS & RHS`)** is **balanced**. It MUST be balanced to satisfy the **Law of Conservation of Mass** (`total mass of products must equal total mass of reactants`).', hi: 'वह रासायनिक समीकरण जिसके दोनों ओर प्रत्येक तत्व के परमाणुओं की संख्या समान हो **संतुलित समीकरण** कहलाता है। **द्रव्यमान संरक्षण नियम** (`अभिकारक द्रव्यमान = उत्पाद द्रव्यमान`) की पालना हेतु समीकरण संतुलित करना आवश्यक है।' },
    },
    {
      num: 'Ex Q5',
      q: { en: 'Translate & balance: `(a)` Hydrogen + Nitrogen -> Ammonia `(b)` `H₂S` burns in air -> water + `SO₂` `(c)` `BaCl₂ + Al₂(SO₄)₃ → AlCl₃ + BaSO₄↓` `(d)` `K + H₂O → KOH + H₂`.', hi: 'संतुलित समीकरण लिखें: `(a)` नाइट्रोजन + हाइड्रोजन → अमोनिया `(b)` `H₂S` का वायु में दहन → जल + `SO₂` `(c)` `BaCl₂` + ऐलुमिनियम सल्फेट → `AlCl₃ + BaSO₄↓` `(d)` पोटैशियम + जल → `KOH + H₂`।' },
      a: { en: '**`(a)`** `3H₂(g) + N₂(g) → 2NH₃(g)` | **`(b)`** `2H₂S(g) + 3O₂(g) → 2H₂O(l) + 2SO₂(g)` | **`(c)`** `3BaCl₂(aq) + Al₂(SO₄)₃(aq) → 2AlCl₃(aq) + 3BaSO₄(s)↓` | **`(d)`** `2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)`.', hi: '**`(a)`** `N₂ + 3H₂ → 2NH₃` | **`(b)`** `2H₂S + 3O₂ → 2H₂O + 2SO₂` | **`(c)`** `3BaCl₂ + Al₂(SO₄)₃ → 2AlCl₃ + 3BaSO₄↓` | **`(d)`** `2K + 2H₂O → 2KOH + H₂`।' },
    },
    {
      num: 'Ex Q6',
      q: { en: 'Balance: `(a)` `HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + H₂O` `(b)` `NaOH + H₂SO₄ → Na₂SO₄ + H₂O` `(c)` `NaCl + AgNO₃ → AgCl + NaNO₃` `(d)` `BaCl₂ + H₂SO₄ → BaSO₄ + HCl`.', hi: 'संतुलित कीजिए: `(a)` `HNO₃ + Ca(OH)₂` `(b)` `NaOH + H₂SO₄` `(c)` `NaCl + AgNO₃` `(d)` `BaCl₂ + H₂SO₄`।' },
      a: { en: '**`(a)`** `2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O` | **`(b)`** `2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O` | **`(c)`** `NaCl + AgNO₃ → AgCl↓ + NaNO₃` (`already balanced 1:1!`) | **`(d)`** `BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl`.', hi: '**`(a)`** `2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O` | **`(b)`** `2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O` | **`(c)`** पहले से संतुलित | **`(d)`** `BaCl₂ + H₂SO₄ → BaSO₄ + 2HCl`।' },
    },
    {
      num: 'Ex Q7',
      q: { en: 'Write balanced equations: `(a)` Calcium hydroxide + `CO₂ →` Calcium carbonate + water `(b)` Zinc + Silver nitrate -> Zinc nitrate + Silver `(c)` Aluminium + Copper chloride -> Aluminium chloride + Copper `(d)` Barium chloride + Potassium sulphate -> Barium sulphate + Potassium chloride.', hi: 'संतुलित रासायनिक समीकरण लिखिए: `(a)` `Ca(OH)₂ + CO₂` `(b)` `Zn + AgNO₃` `(c)` `Al + CuCl₂` `(d)` `BaCl₂ + K₂SO₄`।' },
      a: { en: '**`(a)`** `Ca(OH)₂ + CO₂ → CaCO₃ + H₂O` | **`(b)`** `Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag` | **`(c)`** `2Al + 3CuCl₂ → 2AlCl₃ + 3Cu` | **`(d)`** `BaCl₂ + K₂SO₄ → BaSO₄↓ + 2KCl`.', hi: '**`(a)`** `Ca(OH)₂ + CO₂ → CaCO₃ + H₂O` | **`(b)`** `Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag` | **`(c)`** `2Al + 3CuCl₂ → 2AlCl₃ + 3Cu` | **`(d)`** `BaCl₂ + K₂SO₄ → BaSO₄↓ + 2KCl`।' },
    },
    {
      num: 'Ex Q8',
      q: { en: 'Write balanced equation AND identify reaction type: `(a)` `KBr(aq) + BaI₂(aq) → KI(aq) + BaBr₂(s)` `(b)` `ZnCO₃(s) → ZnO(s) + CO₂(g)` `(c)` `H₂(g) + Cl₂(g) → HCl(g)` `(d)` `Mg(s) + HCl(aq) → MgCl₂(aq) + H₂(g)`.', hi: 'संतुलित समीकरण व प्रकार लिखें: `(a)` `KBr + BaI₂` `(b)` `ZnCO₃ → ZnO + CO₂` `(c)` `H₂ + Cl₂ → HCl` `(d)` `Mg + HCl`।' },
      a: { en: '**`(a)`** `2KBr + BaI₂ → 2KI + BaBr₂(s)` (**Double Displacement**) | **`(b)`** `ZnCO₃ → ZnO + CO₂` (**Thermal Decomposition**) | **`(c)`** `H₂ + Cl₂ → 2HCl` (**Combination**) | **`(d)`** `Mg + 2HCl → MgCl₂ + H₂` (**Displacement**).', hi: '**`(a)`** `2KBr + BaI₂ → 2KI + BaBr₂` (**द्विविस्थापन**) | **`(b)`** `ZnCO₃ → ZnO + CO₂` (**वियोजन**) | **`(c)`** `H₂ + Cl₂ → 2HCl` (**संयोजन**) | **`(d)`** `Mg + 2HCl → MgCl₂ + H₂` (**विस्थापन**)।' },
    },
    {
      num: 'Ex Q9',
      q: { en: 'What does one mean by exothermic and endothermic reactions? Give examples.', hi: 'ऊष्माक्षेपी एवं ऊष्माशोषी अभिक्रिया का क्या अर्थ है? उदाहरण दीजिए।' },
      a: { en: '**Exothermic**: Releases heat alongside products (`CH₄ + 2O₂ → CO₂ + 2H₂O + Heat`; `Respiration`; `CaO + H₂O`). **Endothermic**: Absorbs heat/light/electrical energy (`CaCO₃ + Heat → CaO + CO₂`; `Ba(OH)₂ + 2NH₄Cl`; `Photosynthesis`).', hi: '**ऊष्माक्षेपी**: उत्पाद संग ऊष्मा मुक्त (`CH₄ दहन, श्वसन, CaO+H₂O`)। **ऊष्माशोषी**: ऊर्जा का अवशोषण (`CaCO₃ वियोजन, प्रकाश संश्लेषण, Ba(OH)₂+NH₄Cl`)।' },
    },
    {
      num: 'Ex Q10',
      q: { en: 'Why is respiration considered an exothermic reaction? Explain.', hi: 'श्वसन को ऊष्माक्षेपी अभिक्रिया क्यों कहते हैं? वर्णन कीजिए।' },
      a: { en: 'During digestion, carbohydrates (`rice, potato, bread`) break down into **Glucose (`C₆H₁₂O₆`)**, which combines with cellular `O₂` to **release large biological energy**: **`C₆H₁₂O₆(aq) + 6O₂(aq) → 6CO₂(aq) + 6H₂O(l) + Energy`**. Hence Respiration is **Exothermic**!', hi: 'पाचन से भोजन का कार्बोहाइड्रेट **ग्लूकोज** में टूटकर कोशिकाओं में **`O₂` से संयोग कर प्रचुर ऊर्जा मुक्त** करता है: `C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ऊर्जा` — अतः श्वसन **ऊष्माक्षेपी अभिक्रिया** है।' },
    },
    {
      num: 'Ex Q11',
      q: { en: 'Why are decomposition reactions called the opposite of combination reactions? Write equations.', hi: 'वियोजन अभिक्रिया को संयोजन अभिक्रिया के विपरीत क्यों कहा जाता है? समीकरण लिखिए।' },
      a: { en: 'In **Combination**, two+ reactants unite into **one product** (`2H₂ + O₂ → 2H₂O + Energy`). In **Decomposition**, **one reactant splits** (`absorbing energy`) into two+ simpler products (`2H₂O —Electric→ 2H₂ + O₂`).', hi: '**संयोजन** में दो+ पदार्थ जुड़कर **एक उत्पाद** बनाते (`2H₂+O₂ → 2H₂O`) जबकि **वियोजन** में ऊर्जा लेकर **एकल पदार्थ दो+ भागों में टूटता** (`2H₂O → 2H₂+O₂`) — अतः ठीक विपरीत हैं!' },
    },
    {
      num: 'Ex Q12',
      q: { en: 'Write one equation each for decomposition reactions where energy is supplied in the form of heat, light or electricity.', hi: 'उन वियोजन अभिक्रियाओं के एक-एक समीकरण लिखिए जिनमें ऊष्मा, प्रकाश एवं विद्युत के रूप में ऊर्जा प्रदान की जाती है।' },
      a: { en: '**Heat**: `CaCO₃(s) —Δ→ CaO(s) + CO₂(g)` | **Light**: `2AgCl(s) —Sunlight→ 2Ag(s) + Cl₂(g)` | **Electricity**: `2H₂O(l) —DC→ 2H₂(g) + O₂(g)`.', hi: '**ऊष्मा**: `CaCO₃ → CaO + CO₂` | **प्रकाश**: `2AgCl → 2Ag + Cl₂` | **विद्युत**: `2H₂O → 2H₂ + O₂`।' },
    },
    {
      num: 'Ex Q13',
      q: { en: 'What is the difference between displacement and double displacement reactions? Write equations.', hi: 'विस्थापन एवं द्विविस्थापन अभिक्रियाओं में क्या अंतर है? समीकरण लिखिए।' },
      a: { en: '**Displacement**: A more reactive element **displaces** a less reactive element from its salt (`Fe + CuSO₄ → FeSO₄ + Cu`). **Double Displacement**: Two reactants **exchange ions** forming two new compounds (`often a precipitate`: `Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl`).', hi: '**विस्थापन**: अधिक सक्रिय तत्व कम सक्रिय को यौगिक से हटाता है (`Fe + CuSO₄ → FeSO₄ + Cu`)। **द्विविस्थापन**: दो यौगिक **आयनों का आदान-प्रदान** करते हैं (`Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl`)।' },
    },
    {
      num: 'Ex Q14',
      q: { en: 'In the refining of silver, the recovery of silver from silver nitrate solution involved displacement by copper metal. Write down the reaction involved.', hi: 'सिल्वर के शोधन में `AgNO₃` विलयन से सिल्वर प्राप्त करने हेतु कॉपर धातु द्वारा विस्थापन किया जाता है — अभिक्रिया लिखिए।' },
      a: { en: '**`2AgNO₃(aq) + Cu(s) → Cu(NO₃)₂(aq) + 2Ag(s)`** — Copper is above Silver in reactivity, displacing metallic Silver while turning solution pale blue!', hi: '**`Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s)`** — कॉपर चाँदी से अधिक सक्रिय होने से चाँदी को विस्थापित कर देता है।' },
    },
    {
      num: 'Ex Q15',
      q: { en: 'What do you mean by a precipitation reaction? Explain by giving examples.', hi: 'अवक्षेपण अभिक्रिया से आप क्या समझते हैं? उदाहरण देकर समझाइए।' },
      a: { en: 'Any reaction forming an **insoluble solid (`precipitate`)** that separates out of aqueous solution is a **Precipitation Reaction** (`e.g. Na₂SO₄ + BaCl₂ → BaSO₄↓ white ppt + 2NaCl`; `Pb(NO₃)₂ + 2KI → PbI₂↓ yellow ppt + 2KNO₃`).', hi: 'जिस अभिक्रिया में जल में **अविलेय ठोस पदार्थ (`अवक्षेप`)** बनता है उसे **अवक्षेपण अभिक्रिया** कहते हैं (`उदा. BaSO₄ श्वेत अवक्षेप व PbI₂ पीला अवक्षेप`)।' },
    },
    {
      num: 'Ex Q16',
      q: { en: 'Explain the following in terms of gain or loss of oxygen with two examples each: `(a)` Oxidation `(b)` Reduction.', hi: 'ऑक्सीजन के योग या ह्रास के आधार पर व्याख्या व दो-दो उदाहरण दीजिए: `(a)` उपचयन `(b)` अपचयन।' },
      a: { en: '**`(a)` Oxidation (`Gain of O`)**: `2Cu + O₂ → 2CuO`; `C + O₂ → CO₂`. **`(b)` Reduction (`Loss of O`)**: `CuO + H₂ → Cu + H₂O`; `ZnO + C → Zn + CO`.', hi: '**`(a)` उपचयन (ऑक्सीजन वृद्धि)**: `2Cu+O₂→2CuO`, `C+O₂→CO₂`। **`(b)` अपचयन (ऑक्सीजन ह्रास)**: `CuO+H₂→Cu+H₂O`, `ZnO+C→Zn+CO`।' },
    },
    {
      num: 'Ex Q17',
      q: { en: 'A shiny brown coloured element ‘X’ on heating in air becomes black in colour. Name the element ‘X’ and the black coloured compound formed.', hi: 'एक भूरे रंग का चमकदार तत्व ‘X’ वायु में गरम करने पर काले रंग का हो जाता है — ‘X’ व उस काले यौगिक का नाम बताइए।' },
      a: { en: 'Element ‘X’ = **Copper (`Cu`)**; Black compound = **Copper(II) Oxide (`CuO`)** (`Activity 1.11 Eq 1.28: 2Cu + O₂ —Heat→ 2CuO`).', hi: 'तत्व ‘X’ = **कॉपर / ताँबा (`Cu`)**, तथा काला यौगिक = **कॉपर (II) ऑक्साइड (`CuO`)** (`क्र. 1.11`)।' },
    },
    {
      num: 'Ex Q18',
      q: { en: 'Why do we apply paint on iron articles?', hi: 'लोहे की वस्तुओं को हम पेंट क्यों करते हैं?' },
      a: { en: 'Paint forms a protective barrier that **cuts off contact between Iron surface and moist air/oxygen (`moisture & acids`)**, preventing oxidation (**rusting / corrosion**, `ALP & Group D PYQ`).', hi: 'पेंट लोहे की सतह पर सुरक्षा परत बनाकर **नमी व वायु (ऑक्सीजन) का संपर्क रोकता है**, जिससे लोहे पर जंग नहीं लगता।' },
    },
    {
      num: 'Ex Q19',
      q: { en: 'Oil and fat containing food items are flushed with nitrogen. Why?', hi: 'तेल एवं वसायुक्त खाद्य पदार्थों को नाइट्रोजन से प्रभावित क्यों किया जाता है?' },
      a: { en: 'Flushing packs (`e.g. potato chips`) with **less-reactive Nitrogen (`N₂`)** drives out Oxygen so fats/oils **do NOT get oxidised (`preventing rancidity`, bad odor & spoilage)** (`Group D Shift 42 PYQ`).', hi: 'ऑक्सीजन हटाकर **कम सक्रिय नाइट्रोजन (`N₂`)** भरने से तेल व वसा का उपचयन रुक जाता है, जिससे **विकृतगंधिता (`Rancidity`)** नहीं होती!' },
    },
    {
      num: 'Ex Q20',
      q: { en: 'Explain with one example each: `(a)` Corrosion `(b)` Rancidity.', hi: 'प्रत्येक का एक उदाहरण सहित वर्णन करें: `(a)` संक्षारण `(b)` विकृतगंधिता।' },
      a: { en: '**`(a)` Corrosion**: Slow eating away of metals by ambient moisture/acids (`Iron -> red-brown rust`, `Silver -> black`, `Copper -> green`). **`(b)` Rancidity**: Aerial oxidation of oils/fats altering smell & taste (`stale fried snacks -> stopped via antioxidants & N₂`).', hi: '**`(a)` संक्षारण**: नमी/अम्ल से धातुओं की परत खराब होना (`लोहे पर जंग, चाँदी काली`)। **`(b)` विकृतगंधिता**: वसा/तेल उपचयित होकर गंध-स्वाद बदलना (`तले चिप्स खराब होना → N₂ से बचाव`)।' },
    },
  ],
  flashcards: [
    { front: { en: 'Why is `3–4 cm` Mg ribbon cleaned with sandpaper before burning (`p.6 Q1`)?', hi: 'जलाने से पहले `Mg` रिबन को रेगमाल से साफ क्यों करते हैं (`पृ. 6 Q1`)?' }, back: { en: 'To remove the surface **`MgO` (`Magnesium Oxide`)** coating formed with air so fresh Mg burns cleanly!', hi: 'वायु से बनी निष्क्रिय **मैग्नीशियम ऑक्साइड (`MgO`) परत** हटाने हेतु।' } },
    { front: { en: 'In `3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`, what does `(g)` on `H₂O` signify?', hi: '`3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)` में `H₂O` संग `(g)` क्या दर्शाता है?' }, back: { en: 'Water reacts as **STEAM (`भाप`)**, NOT liquid water! Notice coefficients `3, 4, 1, 4`.', hi: 'इस अभिक्रिया में जल का उपयोग **भाप (`Steam`)** के रूप में हुआ है!' } },
    { front: { en: 'Condition on arrow for `CO(g) + 2H₂(g) → CH₃OH(l)` (`Eq 1.11`)?', hi: '`CO(g) + 2H₂(g) → CH₃OH(l)` (`1.11`) के तीर पर क्या दाब-शर्त लिखी जाती है?' }, back: { en: '**`340 atm`** high pressure! (`Photosynthesis Eq 1.12 uses Sunlight + Chlorophyll`).', hi: '**`340 atm`** दाब! (`प्रका. संश्लेषण समी. 1.12 में सूर्यप्रकाश/क्लोरोफिल`)।' } },
    { front: { en: 'Whitewash sequence (`Eq 1.13–1.14`): Quick Lime -> Slaked Lime -> Marble?', hi: 'सफेदी की दोनों अभिक्रियाएँ: बिना बुझा चूना → बुझा चूना → संगमरमर चमक?' }, back: { en: '`CaO + H₂O → Ca(OH)₂ + Heat`; after **2–3 days** with `CO₂`: `Ca(OH)₂ + CO₂ → CaCO₃(shiny marble) + H₂O`!', hi: '`CaO+H₂O → Ca(OH)₂`, फिर 2–3 दिन में `+CO₂ → CaCO₃` (संगमरमर चमक)!' } },
    { front: { en: 'Products & smell of heating green `FeSO₄·7H₂O` (`Act 1.5 Eq 1.19`)?', hi: 'हरा `FeSO₄·7H₂O` गरम करने पर क्या उत्पाद व गंध बनती है (`क्र. 1.5`)?' }, back: { en: '**Brown solid `Fe₂O₃` + `SO₂(g)` + `SO₃(g)`** (`burning sulfur odor`; **NO `H₂SO₄`**!).', hi: '**भूरा `Fe₂O₃` ठोस + गंधक गंध वाली `SO₂ + SO₃` गैसें** (`H₂SO₄` नहीं बनता!)।' } },
    { front: { en: 'Color of `NO₂` fumes from heating `Pb(NO₃)₂` (`Act 1.6 Eq 1.21`)?', hi: 'लेड नाइट्रेट गरम करने पर `NO₂` धुएँ का रंग कैसा होता है (`क्र. 1.6`)?' }, back: { en: '**Dense BROWN fumes!** Eq: `2Pb(NO₃)₂ —Δ→ 2PbO + 4NO₂(g) + O₂(g)`.', hi: '**भूरा (`Brown`) धुआँ!** `2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂`।' } },
    { front: { en: 'Water Electrolysis (`Act 1.7`): Gas Volume Ratio, Cathode & Acid drops?', hi: 'जल वैद्युतअपघटन (`क्र. 1.7`): कैथोड पर गैस व `H₂:O₂` अनुपात?' }, back: { en: '**`H₂` at Cathode (`−`) = `2×` volume of `O₂` at Anode (`+`)**! Few drops **dil. `H₂SO₄`** make water conduct.', hi: '**कैथोड पर `H₂` दोगुनी (`2:1`) व ऐनोड पर `O₂`**; चालकता हेतु **तनु `H₂SO₄`** बूँदें।' } },
    { front: { en: 'Colors of 2 Classic Precipitates (`Act 1.2 PbI₂` vs `Act 1.10 BaSO₄`)?', hi: 'दो प्रमुख अवक्षेप रंग: `PbI₂` (`क्र. 1.2`) बनाम `BaSO₄` (`क्र. 1.10`)?' }, back: { en: '**`PbI₂` = Bright YELLOW ppt** | **`BaSO₄` = Insoluble WHITE ppt** (`Double Displacement`).', hi: '**`PbI₂` = पीला अवक्षेप** | **`BaSO₄` = श्वेत अवक्षेप** (`दोनों द्विविस्थापन`)।' } },
    { front: { en: 'Corrosion Tarnish Colors: Iron vs Silver vs Copper (`NCERT p.14`)?', hi: 'संक्षारण के बाद लोहा, चाँदी व ताँबे पर किस रंग की परत चढ़ती है?' }, back: { en: '**Iron** = Reddish-brown rust | **Silver** = **BLACK** (`Ag₂S`) | **Copper** = **GREEN** patina (`whereas dry heating Cu -> BLACK CuO!`).', hi: '**लोहा = लाल-भूरा** | **चाँदी = काला** | **ताँबा = हरा** (`पर गरम करने पर काला CuO`)!' } },
    { front: { en: 'Which gas is flushed in chips packets & WHY (`Sec 1.3.2 & Ex Q19`)?', hi: 'चिप्स की थैलियों में कौन-सी गैस भरी जाती है व क्यों (`पृ. 14`)?' }, back: { en: '**Nitrogen (`N₂`)** — less-active gas displaces `O₂` to stop **fat/oil oxidation (`Rancidity`)**!', hi: 'कम सक्रिय **नाइट्रोजन (`N₂`)** — ऑक्सीजन हटाकर तेल-वसा के उपचयन (**विकृतगंधिता**) को रोकती है!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-c1-1',
      examTag: 'RRB ALP 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.2.3–1.2.4): Displacement vs Neutralization',
      question: { en: 'Which reaction is NOT a displacement reaction?', hi: 'निम्न में से कौन-सी अभिक्रिया, विस्थापन अभिक्रिया नहीं है?' },
      options: {
        en: ['Zn + H₂SO₄ → ZnSO₄ + H₂', 'HCl + NaOH → NaCl + H₂O', 'Na + H₂O → NaOH + H₂', 'Fe + CuSO₄ → FeSO₄ + Cu'],
        hi: ['Zn + H₂SO₄ → ZnSO₄ + H₂', 'HCl + NaOH → NaCl + H₂O', 'Na + H₂O → NaOH + H₂', 'Fe + CuSO₄ → FeSO₄ + Cu'],
      },
      correctIndex: 1,
      solution: {
        en: '`HCl + NaOH → NaCl + H₂O` exchanges `H⁺/OH⁻/Na⁺/Cl⁻` ions -> **Neutralization (`Double Displacement`)**, NOT single displacement!',
        hi: '`HCl + NaOH` आयन-विनिमय (**द्विविस्थापन / उदासीनीकरण**) अभिक्रिया है, एकल विस्थापन नहीं।',
      },
    },
    {
      id: 'pyq-c1-2',
      examTag: 'RRB ALP 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.3.1): Best Corrosion Prevention',
      question: {
        en: 'A metal object exposed to a humid environment starts corroding. Which of the following methods would be the most effective and long-lasting in preventing corrosion?',
        hi: 'आर्द्रता वाले वातावरण में धातु की वस्तु में जंग लगने लगती है। जंग को रोकने के लिए निम्नलिखित में से कौन-सी विधि सबसे प्रभावी और लंबे समय तक चलने वाली होगी?',
      },
      options: {
        en: ['Periodically wiping the surface with oil', 'Applying a single coat of paint', 'Coating with a more reactive metal like zinc', 'Wrapping the metal with a dry cloth to prevent moisture exposure'],
        hi: ['समय-समय पर पृष्ठ को तेल से पोंछना', 'पेंट का एक कोट लगाना', 'ज़िंक जैसी अधिक क्रियाशील धातु से विलेपन करना', 'नमी के संपर्क में आने से रोकने के लिए धातु को सूखे कपड़े में लपेटना'],
      },
      correctIndex: 2,
      solution: {
        en: '**Galvanisation (`zinc coating`)** provides sacrificial protection (`Zn` corrodes preferentially even if scratched) -> lasts far longer than oil/single paint.',
        hi: '**ज़िंक विलेपन (`Galvanisation`)** अधिक क्रियाशील धातु का बलिदानी रक्षा-आवरण बनाकर दीर्घकालिक जंग रोकथाम देता है।',
      },
    },
    {
      id: 'pyq-c1-3',
      examTag: 'RRB ALP 2025 CBT Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Activity 1.7): Water Electrolysis',
      question: { en: 'Why is electrolysis of water classified as a decomposition reaction?', hi: 'जल के विद्युत-अपघटन को अपघटन अभिक्रिया के रूप में क्यों वर्गीकृत किया जाता है?' },
      options: {
        en: ['Electricity heats the water', 'Water splits into hydrogen and oxygen', 'Hydrogen replaces oxygen', 'Oxygen combines with electrodes'],
        hi: ['विद्युत जल को तप्त करती है', 'जल हाइड्रोजन और ऑक्सीजन में विभक्त हो जाता है', 'हाइड्रोजन, ऑक्सीजन को प्रतिस्थापित करता है', 'ऑक्सीजन, इलेक्ट्रोड के साथ संयोजित हो जाती है'],
      },
      correctIndex: 1,
      solution: {
        en: 'A single reactant (`H₂O`) breaks via DC electrical energy into two simpler products (`2H₂ + O₂`, `2:1 volume`) -> **Electrolytic Decomposition**.',
        hi: 'एकल अभिकारक `H₂O` विद्युत ऊर्जा से `H₂` व `O₂` में विभक्त होता है -> **वैद्युत वियोजन (अपघटन)**।',
      },
    },
    {
      id: 'pyq-c1-4',
      examTag: 'RRB Group D 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.2.2): Decomposition Identification',
      question: {
        en: 'Consider the reactions: `(I) CaCO₃(s) —Heat→ CaO(s) + CO₂(g)`, `(II) 2AgCl(s) —Sunlight→ 2Ag(s) + Cl₂(g)`, `(III) 2H₂O(l) —Electric current→ 2H₂(g) + O₂(g)`, `(IV) Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)`. Which correctly represent decomposition reactions?',
        hi: 'अभिक्रियाओं पर विचार करें: `(I) CaCO₃(s) —ताप→ CaO + CO₂`, `(II) 2AgCl —सूर्यप्रकाश→ 2Ag + Cl₂`, `(III) 2H₂O —विद्युत→ 2H₂ + O₂`, `(IV) Fe + CuSO₄ → FeSO₄ + Cu`। इनमें कौन-सी अपघटन अभिक्रियाएँ हैं?',
      },
      options: {
        en: ['Only I and II reactions', 'Only II and III reactions', 'Only III and IV reactions', 'Only I, II and III reactions'],
        hi: ['केवल अभिक्रियाएँ I और II', 'केवल अभिक्रियाएँ II और III', 'केवल अभिक्रियाएँ III और IV', 'केवल अभिक्रियाएँ I, II और III'],
      },
      correctIndex: 3,
      solution: {
        en: '**I (`Thermal`), II (`Photolytic`) & III (`Electrolytic`)** are all NCERT decomposition modes; **IV (`Fe+CuSO₄`)** is single **Displacement**.',
        hi: 'I (`ऊष्मीय`), II (`प्रकाशिक`) व III (`वैद्युत`) तीनों वियोजन अभिक्रियाएँ हैं, जबकि IV (`Fe + CuSO₄`) विस्थापन है।',
      },
    },
    {
      id: 'pyq-c1-5',
      examTag: 'RRB Group D 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Act 1.10 Eq 1.27): Double Displacement Basis',
      question: {
        en: 'Consider `Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2NaCl(aq)`. Which statement best justifies classifying this reaction as a double displacement reaction?',
        hi: '`Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2NaCl(aq)` को द्वि-विस्थापन अभिक्रिया के रूप में कौन-सा कथन सर्वोत्तम स्पष्ट करता है?',
      },
      options: {
        en: ['Exchange of ions produces two new compounds', 'One metal displaces another from compound', 'Heat causes compound to break into products', 'Reactants combine forming only one product'],
        hi: ['आयनों के विनिमय से दो नए यौगिक बनते हैं', 'एक धातु यौगिक से दूसरे को विस्थापित करती है', 'ऊष्मा यौगिक को उत्पादों में विभक्त करती है', 'अभिक्रियक संयोजित होकर केवल एक उत्पाद बनाते हैं'],
      },
      correctIndex: 0,
      solution: {
        en: '`Ba²⁺` and `SO₄²⁻` exchange partners with `Na⁺/Cl⁻` producing insoluble `BaSO₄↓` & `2NaCl` (`NCERT p.12`).',
        hi: 'अभिकारकों के मध्य **आयनों के आदान-प्रदान** से दो नए यौगिक (`BaSO₄` व `NaCl`) बनते हैं (`पृ. 12`)।',
      },
    },
    {
      id: 'pyq-c1-6',
      examTag: 'RRB Group D 2025 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.2.2): Decomposition Core Feature',
      question: {
        en: 'What fundamental change distinguishes a decomposition reaction from other types of chemical reactions?',
        hi: 'निम्नलिखित में से कौन-सा मूलभूत परिवर्तन अपघटन अभिक्रिया को अन्य रासायनिक अभिक्रियाओं से पृथक करता है?',
      },
      options: {
        en: ['One element replaces another element', 'Two substances combine to form one', 'One compound breaks into simpler substances', 'Ions exchange places in solution'],
        hi: ['एक तत्व द्वारा दूसरे तत्व का प्रतिस्थापन', 'दो पदार्थों के संयोजन से एक पदार्थ का निर्माण', 'एक यौगिक का सरल पदार्थों में टूटना', 'विलयन में आयनों का विनिमय'],
      },
      correctIndex: 2,
      solution: {
        en: 'In decomposition, **a single compound splits into two or more simpler substances** (`via heat, light, or electricity`).',
        hi: 'वियोजन (अपघटन) में सदैव **एक एकल यौगिक दो या अधिक सरल पदार्थों में टूटता है**।',
      },
    },
    {
      id: 'pyq-c1-7',
      examTag: 'RRB Group D 2025 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.3.1): Conditions Accelerating Corrosion',
      question: {
        en: 'Which of the following conditions accelerate the corrosion of metals the most?',
        hi: 'निम्नलिखित में से कौन-सी स्थिति धातुओं के संक्षारण को सबसे अधिक त्वरित करती है?',
      },
      options: {
        en: ['Pure water and sunlight', 'Dry air and low temperature', 'Moist air and presence of salts or acids', 'Vacuum and darkness'],
        hi: ['शुद्ध जल और सूर्य का प्रकाश', 'शुष्क वायु और निम्न तापमान', 'आर्द्र वायु और लवणों या अम्लों की उपस्थिति', 'निर्वात और अंधकार'],
      },
      correctIndex: 2,
      solution: {
        en: 'Exact NCERT `p.14` factors: attack by ambient **moisture (`आर्द्रता`) and acids/salts** dramatically speeds up metal corrosion.',
        hi: 'सटीक NCERT `पृ. 14`: **आर्द्र वायु व अम्ल/लवण** धातु संक्षारण को सर्वाधिक तेज करते हैं।',
      },
    },
    {
      id: 'pyq-c1-8',
      examTag: 'RRB Group D 2025 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.3.1): Rusting Observation',
      question: {
        en: 'Which of the following observations correctly represents corrosion of a metal?',
        hi: 'निम्नलिखित में से कौन-सा प्रेक्षण धातु के संक्षारण को सही ढंग से दर्शाता है?',
      },
      options: {
        en: ['Iron develops reddish-brown surface layer', 'Aluminium breaks under mechanical load', 'Copper wire melts when strongly heated', 'Silver dissolves completely in water'],
        hi: ['आयरन पर लाल-भूरे रंग की पृष्ठ परत बन जाती है', 'ऐलुमिनियम यांत्रिक लोड के कारण टूट जाता है', 'कॉपर के तार का अत्यधिक तापन करने पर पिघल जाता है', 'चाँदी जल में पूरी तरह घुल जाती है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `Sec 1.3.1`**: exposed iron gradually develops a **reddish-brown powder layer (`rusting`)**.',
        hi: 'सटीक NCERT `पृ. 14`: लोहे पर **लालिमायुक्त भूरे रंग की परत (`जंग`)** चढ़ना संक्षारण का मुख्य उदाहरण है।',
      },
    },
    {
      id: 'pyq-c1-9',
      examTag: 'RRB Group D 2025 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.2.1): Combination vs Heat Energy',
      question: {
        en: 'Which of the following statements correctly explains the relation between a combination reaction and energy?',
        hi: 'कौन-सा कथन संयोजन अभिक्रिया और ऊर्जा के बीच संबंध को सही ढंग से वर्णित करता है?',
      },
      options: {
        en: ['Combination reactions neither release nor absorb energy', 'All combination reactions release heat', 'All combination reactions must absorb heat', 'Many combination reactions are exothermic, though some can be endothermic'],
        hi: ['संयोजन अभिक्रियाएँ न तो ऊर्जा निर्मुक्त करती हैं न अवशोषित', 'सभी संयोजन अभिक्रियाएँ ऊष्मा निर्मुक्त करती हैं', 'सभी संयोजन ऊष्मा अवशोषित करती हैं', 'कई संयोजन अभिक्रियाएँ ऊष्माक्षेपी होती हैं, हालाँकि कुछ ऊष्माशोषी भी हो सकती हैं'],
      },
      correctIndex: 3,
      solution: {
        en: 'Most (`e.g. CaO+H₂O, 2Mg+O₂, C+O₂`) release heat (**exothermic**), yet not ALL (`like NO formation N₂+O₂ → 2NO` absorbs heat)!',
        hi: 'अधिकांश संयोजन अभिक्रियाएँ (`CaO+H₂O, C+O₂`) ऊष्माक्षेपी होती हैं, परंतु सभी नहीं (कुछ `N₂+O₂` ऊष्माशोषी भी हैं)!',
      },
    },
    {
      id: 'pyq-c1-10',
      examTag: 'RRB Group D 2025 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Eq 1.31): Reduction in `ZnO + C`',
      question: {
        en: 'Consider `ZnO(s) + C(s) → Zn(s) + CO(g)`. Which of the following correctly identifies the substance undergoing reduction?',
        hi: '`ZnO(s) + C(s) → Zn(s) + CO(g)` अभिक्रिया में किस पदार्थ का अपचयन होता है?',
      },
      options: {
        en: ['CO produced during oxidation', 'ZnO loses oxygen forming Zn', 'ZnO converted into zinc metal', 'Carbon gains oxygen forming CO'],
        hi: ['ऑक्सीकरण के दौरान CO उत्पन्न होती है', 'ZnO ऑक्सीजन का त्याग कर Zn बनाता है', 'ZnO जिंक धातु में परिवर्तित होता है', 'कार्बन ऑक्सीजन ग्रहण कर CO बनाता है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim NCERT `Eq 1.31`: **Zinc Oxide (`ZnO`) loses oxygen -> reduced to Zn**, whereas Carbon gains oxygen -> oxidised to `CO`.',
        hi: 'सटीक NCERT `समी. 1.31`: **`ZnO` ऑक्सीजन त्यागकर `Zn` में अपचयित** तथा कार्बन `CO` में उपचयित होता है।',
      },
    },
    {
      id: 'pyq-c1-11',
      examTag: 'RRB Group D 2025 Shift 27',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.2.4): White `CaCO₃` Double Displacement',
      question: {
        en: 'A chemist mixes two colorless aqueous solutions X and Y forming white insoluble calcium carbonate Z instantly. Which pair of solutions was most likely used?',
        hi: 'दो रंगहीन विलयन X और Y मिलाने पर अविलेय श्वेत कैल्शियम कार्बोनेट Z बनता है — कौन-सा विलयन युग्म प्रयुक्त हुआ?',
      },
      options: {
        en: ['ZnSO₄ and FeCl₂', 'Na₂CO₃ and CaCl₂', 'HCl and NaOH', 'NaCl and KNO₃'],
        hi: ['ZnSO₄ और FeCl₂', 'Na₂CO₃ और CaCl₂', 'HCl और NaOH', 'NaCl और KNO₃'],
      },
      correctIndex: 1,
      solution: {
        en: '**`Na₂CO₃(aq) + CaCl₂(aq) → CaCO₃↓(s white ppt) + 2NaCl(aq)`** via double-displacement ion exchange!',
        hi: '**`Na₂CO₃ + CaCl₂`** आयन विनिमय कर तुरंत अविलेय श्वेत **`CaCO₃` अवक्षेप** देते हैं!',
      },
    },
    {
      id: 'pyq-c1-12',
      examTag: 'RRB Group D 2025 Shift 29',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Eq 1.14): Whitewash `CO₂` Reaction Product',
      question: {
        en: 'When carbon dioxide gas is passed through lime water (`calcium hydroxide solution`), it produces a white precipitate which is of:',
        hi: 'जब `CO₂` गैस को चूने के पानी (`कैल्शियम हाइड्रॉक्साइड विलयन`) से गुजारा जाता है, तो यह _________ का श्वेत अवक्षेप उत्पन्न करता है।',
      },
      options: {
        en: ['calcium oxide', 'calcium hydrogen carbonate', 'calcium carbonate', 'calcium sulphate'],
        hi: ['कैल्शियम ऑक्साइड', 'कैल्शियम हाइड्रोजन कार्बोनेट', 'कैल्शियम कार्बोनेट', 'कैल्शियम सल्फेट'],
      },
      correctIndex: 2,
      solution: {
        en: '`Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s white ppt) + H₂O(l)` (`NCERT Eq 1.14`, identical to chalk/marble).',
        hi: '`Ca(OH)₂ + CO₂ → CaCO₃ (सफेद अवक्षेप) + H₂O` (`समी. 1.14`) — कैल्शियम कार्बोनेट!',
      },
    },
    {
      id: 'pyq-c1-13',
      examTag: 'RRB Group D 2025 Shift 31',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Activity 1.9): Iron + `CuSO₄` Proof',
      question: {
        en: 'Which visible change confirms displacement reaction when iron reacts with copper sulphate solution?',
        hi: 'जब आयरन, कॉपर सल्फेट विलयन से अभिक्रिया करता है तो कौन-सा दृश्य परिवर्तन विस्थापन की पुष्टि करता है?',
      },
      options: {
        en: ['Colourless gas evolves rapidly', 'Solution temperature drops suddenly', 'White precipitate forms instantly', 'Reddish-brown copper deposits appear'],
        hi: ['रंगहीन गैस तेजी से विकसित होती है', 'विलयन का तापमान अचानक गिरता है', 'तुरंत सफेद अवक्षेप बनता है', 'लाल-भूरा कॉपर निक्षेप दिखाई देता है'],
      },
      correctIndex: 3,
      solution: {
        en: '`Fe + CuSO₄ → FeSO₄(faded green) + Cu` -> copper metal precipitates as a **reddish-brown deposit** on the iron nail (`Act 1.9`).',
        hi: 'कील पर **लाल-भूरे ताँबे (`Cu`) का निक्षेप** व नीला रंग हल्का हरा होना विस्थापन सिद्ध करता है (`क्र. 1.9`)।',
      },
    },
    {
      id: 'pyq-c1-14',
      examTag: 'RRB Group D 2025 Shift 34',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.2.5): Coupled Redox Nature',
      question: {
        en: 'Why do oxidation and reduction reactions always occur together in chemical changes?',
        hi: 'रासायनिक परिवर्तनों में ऑक्सीकरण और अपचयन अभिक्रियाएँ सदैव एक साथ क्यों होती हैं?',
      },
      options: {
        en: ['Reaction must be balanced', 'Energy conservation law demands it', 'Products must be neutral', 'One substance loses what another gains'],
        hi: ['अभिक्रिया के संतुलित होने के लिए', 'ऊर्जा संरक्षण नियम के कारण', 'उत्पादों के उदासीन होने के लिए', 'क्योंकि एक पदार्थ जिसका परित्याग करता है, उसे दूसरा पदार्थ ग्रहण करता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'In any Redox transfer, whatever oxygen/electrons one reactant gives up is **simultaneously accepted by the partner reactant**.',
        hi: 'एक अभिकारक जो ऑक्सीजन/इलेक्ट्रॉन त्यागता (`अपचयित`) है, दूसरा अभिकारक ठीक वही ग्रहण (`उपचयित`) कर लेता है!',
      },
    },
    {
      id: 'pyq-c1-15',
      examTag: 'RRB Group D 2025 Shift 42',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.3.2 & Ex Q19): Preventing Rancidity',
      question: {
        en: 'Which condition will slow down rancidity in oily food items?',
        hi: 'कौन-सी स्थिति तैलीय खाद्य पदार्थों में विकृतगंधिता को धीमा कर देगी?',
      },
      options: {
        en: ['Storage at high temperature', 'Presence of moisture', 'Storage in airtight containers flushed with nitrogen', 'Exposure to sunlight'],
        hi: ['उच्च तापमान पर भंडारण', 'आर्द्रता की उपस्थिति', 'नाइट्रोजन से भरे हुए वायुरोधी पात्रों में भंडारण', 'सूर्य के प्रकाश में रखना'],
      },
      correctIndex: 2,
      solution: {
        en: 'Exact **NCERT `Sec 1.3.2`**: replacing oxygen with unreactive **Nitrogen (`N₂`) inside airtight packs** blocks fat oxidation (`rancidity`).',
        hi: 'सटीक `भाग 1.3.2`: **वायुरोधी पात्र व नाइट्रोजन (`N₂`) गैस** ऑक्सीजन हटाकर विकृतगंधिता रोकते हैं।',
      },
    },
    {
      id: 'pyq-c1-16',
      examTag: 'RRB Group D 2025 Shift 48',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Activity 1.8): Sunlight Photolysis Specificity',
      question: {
        en: 'A chemist keeps calcium carbonate, silver chloride, and lead nitrate exposed to sunlight. Which compound/s show/s a visible change?',
        hi: 'एक रसायनज्ञ कैल्शियम कार्बोनेट, सिल्वर क्लोराइड और लेड नाइट्रेट को सूर्यप्रकाश में रखता है — कौन-सा यौगिक दृश्य परिवर्तन दर्शाएगा?',
      },
      options: {
        en: ['Only lead nitrate', 'Only calcium carbonate', 'Only silver chloride', 'All three compounds'],
        hi: ['केवल लेड नाइट्रेट', 'केवल कैल्शियम कार्बोनेट', 'केवल सिल्वर क्लोराइड', 'तीनों यौगिक'],
      },
      correctIndex: 2,
      solution: {
        en: '`CaCO₃` and `Pb(NO₃)₂` need intense **burner heat** (`Thermal`), whereas **ONLY Silver Chloride (`AgCl`)** photodecomposes into grey Ag in **sunlight** (`Act 1.8`)!',
        hi: '`CaCO₃` व `Pb(NO₃)₂` को बर्नर ऊष्मा चाहिए, जबकि **केवल सिल्वर क्लोराइड (`AgCl`)** सूर्यप्रकाश में धूसर हो जाता है!',
      },
    },
    {
      id: 'pyq-c1-17',
      examTag: 'RRB Group D 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Eq 1.29): `CuO + H₂` Redox',
      question: {
        en: 'Consider `CuO(s) + H₂(g) → Cu(s) + H₂O(l)`. Which option correctly identifies the oxidation-reduction changes?',
        hi: '`CuO(s) + H₂(g) → Cu(s) + H₂O(l)` में होने वाले ऑक्सीकरण-अपचयन परिवर्तन की सही पहचान करें:',
      },
      options: {
        en: ['Hydrogen oxidised while CuO reduced', 'Hydrogen reduced while CuO oxidised', 'Copper oxidised while H₂ reduced', 'Copper and hydrogen both oxidised'],
        hi: ['हाइड्रोजन ऑक्सीकृत होता है जबकि CuO अपचयित होता है', 'हाइड्रोजन अपचयित होता है जबकि CuO ऑक्सीकृत होता है', 'कॉपर ऑक्सीकृत जबकि H₂ अपचयित', 'दोनों ऑक्सीकृत'],
      },
      correctIndex: 0,
      solution: {
        en: '`H₂` gains oxygen (`oxidised -> H₂O`) while black `CuO` loses oxygen (`reduced -> brown Cu`, `NCERT Eq 1.29`).',
        hi: 'सटीक `समी. 1.29`: **`H₂` उपचयित** (`H₂O` में) और **`CuO` अपचयित** (`Cu` में) होता है।',
      },
    },
    {
      id: 'pyq-c1-18',
      examTag: 'RRB Group D 2025 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Eq 1.32): `MnO₂ + 4HCl` Reduction',
      question: {
        en: 'Consider `MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂`. Based on oxygen-hydrogen definition of redox, which substance undergoes reduction?',
        hi: '`MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂` में ऑक्सीजन-हाइड्रोजन परिभाषा अनुसार किसका अपचयन होता है?',
      },
      options: {
        en: ['Hydrogen chloride loses hydrogen', 'Chlorine gas forms by oxidation', 'Manganese dioxide loses oxygen', 'Water forms after oxygen gain'],
        hi: ['हाइड्रोजन क्लोराइड हाइड्रोजन त्यागता है', 'ऑक्सीकरण से क्लोरीन गैस बनती है', 'मैंगनीज डाइऑक्साइड ऑक्सीजन का त्याग करता है', 'ऑक्सीजन लब्धि के बाद जल बनता है'],
      },
      correctIndex: 2,
      solution: {
        en: '**`MnO₂` loses Oxygen to become `MnCl₂` (`Reduction`)**, while `HCl` loses Hydrogen to become `Cl₂` (`Oxidation`) — `Eq 1.32`!',
        hi: '**`MnO₂` ऑक्सीजन त्यागकर `MnCl₂` में अपचयित** होता है व `HCl` से `Cl₂` उपचयित (`समी. 1.32`)!',
      },
    },
    {
      id: 'pyq-c1-19',
      examTag: 'RRB Tech Gr-III 2024 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Act 1.6 Eq 1.21): `NO₂` Brown Fumes',
      question: {
        en: 'During the decomposition reaction of lead nitrate, the observed brown colour fumes are of which gas?',
        hi: 'लेड नाइट्रेट की अपघटन अभिक्रिया के दौरान भूरे रंग का धुआँ किस गैस का होता है?',
      },
      options: {
        en: ['Nitrogen gas', 'Hydrogen gas', 'Nitrogen dioxide gas', 'Ozone gas'],
        hi: ['नाइट्रोजन गैस', 'हाइड्रोजन गैस', 'नाइट्रोजन डाइऑक्साइड गैस', 'ओजोन गैस'],
      },
      correctIndex: 2,
      solution: {
        en: '`2Pb(NO₃)₂(s) —Δ→ 2PbO(s) + 4NO₂(g) + O₂(g)`: brown fumes = **Nitrogen dioxide (`NO₂`)** (`Activity 1.6`).',
        hi: 'क्रियाकलाप 1.6: भूरा धुआँ **नाइट्रोजन डाइऑक्साइड (`NO₂`) गैस** का होता है।',
      },
    },
    {
      id: 'pyq-c1-20',
      examTag: 'RRB Tech Gr-III 2024 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.0): Signs of Chemical Reaction',
      question: {
        en: 'Which observable changes indicate a chemical reaction has occurred? `(a)` Formation of gas `(b)` Formation of precipitates `(c)` Change in physical state `(d)` Colour change',
        hi: 'किन प्रत्यक्ष परिवर्तनों से संकेत मिलता है कि रासायनिक अभिक्रिया हुई है? `(a)` गैस बनना `(b)` अवक्षेप `(c)` भौतिक अवस्था परिवर्तन `(d)` रंग परिवर्तन',
      },
      options: {
        en: ['All (a), (b), (c) and (d)', 'Only (c) and (d)', 'Only (a), (b) and (c)', 'Only (a) and (b)'],
        hi: ['सभी (a), (b), (c) और (d)', 'केवल (c) और (d)', 'केवल (a), (b) और (c)', 'केवल (a) और (b)'],
      },
      correctIndex: 0,
      solution: {
        en: 'Direct NCERT `p.2` bullets (`+ temp change`): gas, precipitates (`like BaSO₄/PbI₂`), state change & color change ALL confirm chemical reactions!',
        hi: 'NCERT `पृ. 2` अनुसार गैस, अवक्षेप, अवस्था परिवर्तन, रंग व ताप परिवर्तन सभी रासायनिक अभिक्रिया के सूचक हैं।',
      },
    },
    {
      id: 'pyq-c1-21',
      examTag: 'RRB Tech Gr-III 2024 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Act 1.5 Eq 1.19): Heating `FeSO₄`',
      question: {
        en: 'Which of the following compounds is NOT formed when ferrous sulphate is heated?',
        hi: 'फेरस सल्फेट को गर्म करने पर निम्नलिखित में से कौन-सा यौगिक नहीं बनता है?',
      },
      options: {
        en: ['Sulphuric acid', 'Ferric oxide', 'Sulphur trioxide', 'Sulphur dioxide'],
        hi: ['सल्फ्यूरिक अम्ल', 'फेरिक ऑक्साइड', 'सल्फर ट्राइऑक्साइड', 'सल्फर डाइऑक्साइड'],
      },
      correctIndex: 0,
      solution: {
        en: '`2FeSO₄(s) —Δ→ Fe₂O₃(s) + SO₂(g) + SO₃(g)` (`Eq 1.19`) yields ONLY ferric oxide + `SO₂` + `SO₃` (`no H₂SO₄ acid!`).',
        hi: 'फेरस सल्फेट के ऊष्मीय वियोजन से `Fe₂O₃, SO₂ व SO₃` बनते हैं — **सल्फ्यूरिक अम्ल नहीं बनता!**',
      },
    },
    {
      id: 'pyq-c1-22',
      examTag: 'RRB Tech Gr-III 2024 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.2.1–1.2.2): Exothermic vs Photosynthesis',
      question: {
        en: 'Which of the following reactions is NOT an exothermic reaction?',
        hi: 'निम्नलिखित में से कौन-सी अभिक्रिया ऊष्माक्षेपी (`Exothermic`) अभिक्रिया नहीं है?',
      },
      options: {
        en: ['Photosynthesis', 'Respiration', 'Dilution of a strong acid', 'Burning of natural gas'],
        hi: ['प्रकाश संश्लेषण (Photosynthesis)', 'श्वसन (Respiration)', 'किसी प्रबल अम्ल का तनुकरण', 'प्राकृतिक गैस का जलना'],
      },
      correctIndex: 0,
      solution: {
        en: 'Respiration, burning `CH₄` & strong-acid dilution release heat (**Exothermic**); **Photosynthesis (`Eq 1.12`) absorbs solar energy (`Endothermic`)**!',
        hi: '**प्रकाश संश्लेषण (`पृ. 6`)** सौर ऊर्जा अवशोषित करने वाली **ऊष्माशोषी** क्रिया है, ऊष्माक्षेपी नहीं!',
      },
    },
    {
      id: 'pyq-c1-23',
      examTag: 'RRB Tech Gr-III 2024 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Act 1.10): Solid Precipitate `BaSO₄`',
      question: {
        en: 'Which substance is in solid form in: `Sodium sulphate + barium chloride → sodium chloride + barium sulphate`?',
        hi: 'दी गई अभिक्रिया में कौन-सा पदार्थ ठोस (`अवक्षेप`) रूप में है: `सोडियम सल्फेट + बेरियम क्लोराइड → सोडियम क्लोराइड + बेरियम सल्फेट`?',
      },
      options: {
        en: ['Barium sulphate', 'Sodium sulphate', 'Sodium chloride', 'Barium chloride'],
        hi: ['बेरियम सल्फेट', 'सोडियम सल्फेट', 'सोडियम क्लोराइड', 'बेरियम क्लोराइड'],
      },
      correctIndex: 0,
      solution: {
        en: '`Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ + 2NaCl(aq)`: **Barium sulphate** forms the insoluble white solid precipitate.',
        hi: '**बेरियम सल्फेट (`BaSO₄(s)`)** जल में अविलेय ठोस श्वेत अवक्षेप के रूप में नीचे बैठता है।',
      },
    },
    {
      id: 'pyq-c1-24',
      examTag: 'RRB Tech Gr-III 2024 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 1 (Sec 1.2.3): Least Reactive Metal',
      question: {
        en: 'From Copper, Iron, Zinc and Lead, which one is least reactive towards displacement reaction?',
        hi: 'दी गई धातुओं में से कौन-सी विस्थापन अभिक्रिया के प्रति सबसे कम अभिक्रियाशील है: ताँबा (`Copper`), लोहा, जस्ता और सीसा?',
      },
      options: {
        en: ['Iron', 'Lead', 'Iron and zinc', 'Copper'],
        hi: ['लोहा (आयरन)', 'सीसा (लेड)', 'लोहा और जस्ता', 'ताँबा (कॉपर)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Exact NCERT `Sec 1.2.3 Eq 1.24–1.26`: **`Fe, Zn` & `Pb`** ALL displace Copper (`Zn > Fe > Pb > Cu`), making **Copper** least reactive of the four!',
        hi: 'NCERT `समी. 1.24–1.26`: `Fe, Zn` व `Pb` तीनों कॉपर को विस्थापित करते हैं — अतः **ताँबा (`Copper`)** सबसे कम अभिक्रियाशील है!',
      },
    },
  ],
};
