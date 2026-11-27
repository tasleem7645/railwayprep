/**
 * Class 10 NCERT (2026-27 New Edition — jhsc102.pdf, Pages 19–40) + Railway CBT Deep-Dive Edition
 * Chapter 2: Acids, Bases & Salts (अम्ल, क्षारक एवं लवण) — Gold Standard v3 (#1 Highest PYQ Chapter!)
 * Complete 2026-27 NCERT Coverage: Table 2.1 Indicators (All 9 Chemicals) & Olfactory -> Metal/Carbonate/Oxide Rxns ->
 * Aqueous Ionization (Act 2.8-2.9 Dry HCl) & Exothermic Dilution -> Universal pH Scale (0-14), Table 2.2 & 2.3 ->
 * Chlor-Alkali Brine Plant, Bleaching Powder Ca(ClO)2 (2026-27 Update + legacy CaOCl2), Baking Soda/Powder,
 * Washing Soda (10H2O), Copper Sulphate Water of Crystallization & Gypsum <-> Plaster of Paris (373K).
 * All 19 In-Text Qs, All 15 Exercises verified against jhsc1an.pdf, & 24 Verbatim RRB PYQs.
 */

export const C10_CH2_ACIDS_DATA = {
  id: 'c10-chem-ch2',
  classId: 'class10',
  subjectId: 'chemistry',
  subjectLabel: { en: 'Chemistry', hi: 'रसायन विज्ञान (Chemistry)' },
  chapterNumber: 2,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 2: Acids, Bases & Salts (CBT Edition)',
  blueprintSvgKey: 'c10-ch2-blueprint-mindmap',
  weightageBars: [
    { label: { en: '5 Industrial Salts (Chlor-Alkali, Bleaching, Baking, Washing, POP)', hi: 'क्लोर-क्षार, विरंजक चूर्ण Ca(ClO)₂, बेकिंग-धावन सोडा व POP' }, pct: 40 },
    { label: { en: 'Universal pH Scale (0–14), Gastric/Rain/Tooth pH & Natural Acids', hi: 'pH स्केल (1.2 जठर, 5.5 दंत, 5.6 वर्षा) एवं प्राकृतिक अम्ल' }, pct: 28 },
    { label: { en: 'Indicators (Litmus, Phenolphthalein, Methyl Orange, Olfactory)', hi: 'सूचक (लिटमस, फिनॉल्फथेलिन, मेथिल ऑरेंज व गंधीय सूचक)' }, pct: 18 },
    { label: { en: 'H₂ Pop Test, CO₂ Limewater, Oxides & Salt Hydrolysis pH', hi: 'H₂-पॉप टेस्ट, CO₂ चूना-जल, ऑक्साइड प्रकृति व लवण pH' }, pct: 14 },
  ],
  title: {
    en: 'Chapter 2: Acids, Bases & Salts',
    hi: 'अध्याय 2: अम्ल, क्षारक एवं लवण',
  },
  subtitle: {
    en: 'Complete 2026-27 NCERT Deep-Dive (#1 PYQ Chapter) • All 9 Lab Solutions, pH Scale, Chlor-Alkali, Ca(ClO)₂, Baking/Washing Soda, POP & 24 PYQs',
    hi: 'नया 2026-27 NCERT संपूर्ण गहराई (#1 सर्वाधिक PYQ अध्याय) • सूचक, आयन, pH स्केल, क्लोर-क्षार, विरंजक चूर्ण, सोडा-POP, सभी 15 अभ्यास व 24 PYQ',
  },
  metrics: {
    pages: 22,
    activities: 10,
    tables: 6,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },

  hero: {
    imageUrl: '/ncert-notes/class10-chem-ch2/hero-acids-bases-salts.webp',
    caption: {
      en: 'Phenolphthalein magenta indicator & blue-to-red litmus test, zinc-acid hydrogen bubbles, rainbow pH scale (1–14), and hydrated blue CuSO₄·5H₂O vs Gypsum crystals.',
      hi: 'फिनॉल्फथेलिन गुलाबी सूचक व लिटमस परीक्षण, जिंक-अम्ल हाइड्रोजन बुलबुले, pH इंद्रधनुषी स्केल (1–14) तथा नीले CuSO₄·5H₂O व जिप्सम क्रिस्टलों का दृश्य।',
    },
  },

  quickRevision60Sec: [
    {
      en: '**Indicators (`Table 2.1` + Natural)**: **Litmus** (purple dye from **Thallophyta Lichen**) — Acid turns **Blue -> Red**, Base turns **Red -> Blue**. **Phenolphthalein**: Acid `Colourless`, Base **`PINK`**. **Methyl Orange**: Acid **`RED`**, Base **`YELLOW`**. **Turmeric**: Base -> Reddish-brown. **Olfactory (`Act 2.1`)**: **Onion, Vanilla, Clove oil** (`lose scent in Base!`).',
      hi: '**सूचक (`तालिका 2.1`)**: **लिटमस** (**थैलोफाइटा लिचेन** से प्राप्त बैंगनी रंजक) — अम्ल में **नीला → लाल**, क्षारक में **लाल → नीला**। **फिनॉल्फथेलिन**: अम्ल `रंगहीन`, क्षारक **`गुलाबी`**! **मेथिल ऑरेंज**: अम्ल **`लाल`**, क्षारक **`पीला`**! **हल्दी**: क्षार में भूरा-लाल। **गंधीय सूचक**: **प्याज, वैनिला, लौंग का तेल** (`क्षार में गंध नष्ट!`)।',
    },
    {
      en: '**5 Core Chemical Equations**: `Metal + Acid/Base -> Salt + H₂↑ (pop sound; Zn+NaOH -> Na₂ZnO₂)`. `Carbonate/HCO₃⁻ + HCl -> Salt + CO₂↑` (**milky limewater `CaCO₃↓`, excess -> clear `Ca(HCO₃)₂`**). **Metal Oxides (`CuO`) are BASIC** (`CuCl₂` blue-green); **Non-Metal Oxides (`CO₂`) are ACIDIC**! **Dilution:** Add **ACID slowly into WATER** (`highly exothermic!`).',
      hi: '**5 मुख्य समीकरण**: `धातु + अम्ल/क्षार → H₂↑` (फट-फट ध्वनि; `Zn+2NaOH → Na₂ZnO₂ सोडियम जिंकेट`)। `कार्बोनेट/HCO₃⁻ + अम्ल → CO₂↑` (**चूना जल दूधिया `CaCO₃`, अधिक CO₂ → रंगहीन `Ca(HCO₃)₂`**)। **धात्विक ऑक्साइड = क्षारकीय (`CuO`)**; **अधात्विक = अम्लीय (`CO₂`)**! **तनुकरण:** सदा **अम्ल को धीरे-धीरे जल में डालें** (`अत्यंत ऊष्माक्षेपी`)!',
    },
    {
      en: '**pH Scale (`Potenz` = Power, `0–14`)**: **`pH < 7` Acidic (`high [H⁺]`)**, **`pH = 7` Neutral**, **`pH > 7` Basic (`high [OH⁻]`)**. Exam Numbers: **Stomach HCl = `1.2`**, **Lemon = `2.2`**, **Tooth decay `< 5.5` (`Calcium hydroxyapatite`)**, **Acid rain `< 5.6`**, **Fresh Milk = `6.0`**, **Body = `7.0–7.8`**, **Blood = `7.4`**, **Milk of Magnesia `Mg(OH)₂` Antacid = `10`**, **`1M NaOH` = `14`**!',
      hi: '**pH स्केल (`पुसांस = शक्ति`, 0–14)**: **जठर रस = `1.2`**, **नींबू = `2.2`**, **दंत-क्षय `< 5.5`** (`कैल्शियम हाइड्रोक्सीएपेटाइट`), **अम्ल वर्षा `< 5.6`**, **ताजा दूध = `6`**, **मानव शरीर = `7.0–7.8`**, **रक्त = `7.4`**, **मिल्क ऑफ मैग्नीशिया `[Mg(OH)₂]` एंटैसिड = `10`**, **`NaOH` = `14`**! **शुक्र बादल = `H₂SO₄`**!',
    },
    {
      en: '**Chlor-Alkali & 2026 NCERT Formulas**: Brine electrolysis: `2NaCl + 2H₂O ->` **NaOH** + **Cl₂ (`Anode +`)** + **H₂ (`Cathode −`)**. **Bleaching Powder**: **New 2026 NCERT writes `Ca(ClO)₂`** (`2Ca(OH)₂ + 2Cl₂ -> Ca(ClO)₂ + 2H₂O + CaCl₂`; legacy `CaOCl₂`). **Baking Soda**: **`NaHCO₃`** (`+ Tartaric acid = Baking powder`). **Washing Soda**: **`Na₂CO₃·10H₂O`** (`removes permanent water hardness!`).',
      hi: '**क्लोर-क्षार व प्रमुख यौगिक**: ब्राइन विद्युत अपघटन $\\to$ **Cl₂ (एनोड +)**, **H₂ (कैथोड −)**, **NaOH (कैथोड पास)**। **विरंजक चूर्ण:** नया 2026 NCERT सूत्र **`Ca(ClO)₂`** (पुराना `CaOCl₂`)! **बेकिंग सोडा:** **`NaHCO₃`** (`+ टार्टरिक अम्ल = बेकिंग पाउडर`)। **धावन सोडा:** **`Na₂CO₃·10H₂O`** (`स्थायी जल कठोरता दूर करने में`)!',
    },
    {
      en: '**Water of Crystallization (`2.4.4`)**: **Blue Copper Sulphate `CuSO₄·5H₂O`** (`5 H₂O`) -> heats into **WHITE anhydrous `CuSO₄`** -> adds `H₂O` turns **BLUE back** (`dry looking crystals aren’t wet — not completely dry!`). **Gypsum (`CaSO₄·2H₂O`)** heated at **`373 K`** -> **Plaster of Paris (`CaSO₄·½H₂O`)** (`two CaSO₄ share 1 H₂O`, casts fractured bones, airtight dry storage mandatory!).',
      hi: '**क्रिस्टलन का जल (`2.4.4`)**: **नीला कॉपर सल्फेट (`CuSO₄·5H₂O`)** गर्म करने पर **श्‍वेत (`CuSO₄`)** व जल डालने पर पुन: नीला! **जिप्सम (`CaSO₄·2H₂O`)** को **`373 K`** पर गर्म करने से **प्लास्टर ऑफ पेरिस (`CaSO₄·½H₂O`)** बनता है (`1½ H₂O` मिलाने पर पुन: कठोर जिप्सम — हड्डी प्लास्टर व आर्द्र-रोधी पात्र में भंडारण)!',
    },
  ],

  sections: [
    {
      id: 'indicators-chemical-reactions',
      number: '2.1',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Indicators (Litmus, Synthetic, Olfactory) & Core Acid/Base Reactions (`2.1.1–2.1.6`)',
        hi: 'सूचक (लिटमस, फिनॉल्फथेलिन, मेथिल ऑरेंज, गंधीय) एवं अम्ल-क्षारक की सभी अभिक्रियाएँ (`2.1`)',
      },
      summaryTag: { en: 'NCERT Pages 19–23 + Table 2.1 Complete + Activities 2.1–2.7 + H₂ & CO₂ Limewater Tests', hi: 'NCERT पृष्ठ 19–23 + तालिका 2.1 (9 विलयन) + क्रियाकलाप 2.1–2.7 + H₂ व CO₂ जाँच' },
      blocks: [
        {
          heading: {
            en: '1. Natural, Synthetic & Olfactory Indicators — How Litmus, Turmeric, Onion & Vanilla Identify Acids & Bases',
            hi: '1. प्राकृतिक, संश्लेषित और गंधीय सूचक — लिटमस (लिचेन), हल्दी, लाल पत्ता गोभी, वैनिला व लौंग तेल',
          },
          conceptStory: {
            en: 'Acids taste sour and turn **Blue Litmus -> RED**, while Bases (`क्षारक`) taste bitter, feel soapy (`alkalis`), and turn **Red Litmus -> BLUE**. Rather than tasting corrosive lab chemicals, chemists use **Acid-Base Indicators (`अम्ल-क्षारक सूचक`)**—color dyes or scent compounds changing noticeably across acidic vs basic media:\n• **Natural Visual Indicators (`NCERT p.19 & 39`):** Pure **Litmus** solution is a **PURPLE dye** extracted from **Lichen** plants (`Thallophyta` division!). **Turmeric (`हल्दी`)** turns **Reddish-Brown (`भूरा-लाल`)** when alkaline soap touches a curry stain—washing away excess soap with lots of water flips it **Yellow** again! **Red Cabbage leaf juice (`Fig right`), Petunia, Hydrangea & Geranium flower petals** (`even Beetroot extract!`) serve as natural indicators.\n• **Synthetic Indicators (`Table 2.1`):** **Phenolphthalein (`फिनॉल्फथेलिन`)** stays **Colourless** in acid yet flares **Bright Pink (`गुलाबी`)** in base; **Methyl Orange (`मेथिल ऑरेंज`)** turns **Red** in acid and **Yellow** in base!\n• **Olfactory Indicators (`गंधीय सूचक — Act 2.1`):** For visually impaired testers or scent assays, **chopped Onion, dilute Vanilla essence & Clove oil** keep their characteristic odour in Acid (`HCl`) while **LOSING smell in Base (`NaOH`)** (`Tech Gr-III Shift 1 PYQ!`). *(Test-tube puzzle `p.19`: With ONLY Red Litmus among 3 tubes `[Distilled water, Acid, Base]`, dip Red into all 3 -> whichever turns BLUE = Base; dip that same newly BLUE strip into the other two -> whichever turns RED = Acid, leaving neutral Water!)*',
            hi: 'अम्लों का स्वाद खट्टा होता है व वे **नीले लिटमस को लाल** करते हैं, जबकि क्षारक कड़वे व साबुन जैसे चिकने होते हैं तथा **लाल लिटमस को नीला** करते हैं। प्रयोगशाला के खतरनाक रसायनों को चखे बिना पहचानने हेतु तीन प्रकार के **सूचक (`Indicators`)** प्रयुक्त होते हैं:\n• **प्राकृतिक सूचक (`पृष्ठ 19`):** शुद्ध **लिटमस** एक **बैंगनी (Purple)** रंग का रंजक है जो **थैलोफाइटा समूह के लिचेन (`Lichen`)** पौधे से प्राप्त होता है! श्वेत कपड़े पर लगे **हल्दी के दाग** पर क्षारीय साबुन रगड़ने से वह **भूरा-लाल** हो जाता है व अधिक पानी से धोने पर पुनः **पीला** पड़ जाता है। साथ ही **लाल पत्ता गोभी (`फोटो देखें`), हायड्रेंजिया, पिटूनिया, जेरानियम व चुकंदर** भी प्राकृतिक सूचक हैं।\n• **संश्लेषित सूचक (`तालिका 2.1`):** **फिनॉल्फथेलिन** अम्ल में **रंगहीन** व क्षार में **गुलाबी**; जबकि **मेथिल ऑरेंज** अम्ल में **लाल** व क्षार में **पीला** रंग देता है।\n• **गंधीय सूचक (`Olfactory Indicators — क्रियाकलाप 2.1`):** **बारीक कटे प्याज के कपड़े की पट्टी, तनु वैनिला एसेंस व लौंग का तेल (`Clove oil`)** अम्लीय (`HCl`) माध्यम में अपनी गंध बनाए रखते हैं पर **क्षारक (`NaOH`) में उनकी गंध समाप्त हो जाती है (`Tech Gr-III PYQ`)**!',
          },
          realImage: {
            url: '/ncert-notes/class10-chem-ch2/real/red-cabbage-beaker.webp',
            title: {
              en: 'Natural Red Cabbage Indicator Spectrum Across pH (`NCERT Do You Know p.19 & Project p.39`)',
              hi: 'लाल पत्ता गोभी का प्राकृतिक सूचक स्पेक्ट्रम — अम्ल में गुलाबी-लाल से क्षारक में नीला-हरा-पीला रंग!',
            },
            caption: {
              en: 'Anthocyanin pigment inside red cabbage shifts smoothly from bright crimson in acid through purple neutral to blue/green/yellow in NaOH/NH₄OH bases.',
              hi: 'लाल पत्ता गोभी का निचोड़ विभिन्न pH वाले अम्ल, उदासीन लवण व NaOH/NH₄OH क्षारकों में इंद्रधनुषी रंग परिवर्तन दर्शाता है।',
            },
          },
          inlinePyqIds: [1],
        },
        {
          heading: {
            en: '2. Metal + Acid/Base (`H₂` Pop Test), Carbonates (`CO₂` Limewater), Neutralization & Oxide Nature (`2.1.2–2.1.6`)',
            hi: '2. धातु से H₂ पॉप जाँच, कार्बोनेट से CO₂ चूना-जल परीक्षण, उदासीनीकरण एवं ऑक्साइडों की प्रकृति (`2.1.2–2.1.6`)',
          },
          conceptStory: {
            en: 'Master the **five reaction families** (`Activities 2.3–2.7`) every Railway CBT paper loves:\n1. **Metal + Acid -> Salt + Hydrogen (`Fig 2.1`):** Dilute $H_2SO_4$ + Zinc granules yields **Hydrogen bubbles (`$Zn + H_2SO_4 \\to ZnSO_4 + H_2\\uparrow$`)** which ignite cleanly with a sharp **POP sound** (`why curd/sour pickles NEVER store in Brass or Copper vessels—acids react creating toxic soluble metal salts!`). With bases (`Act 2.4`), only active amphoteric metals like Zinc react cleanly when warmed: **$2NaOH + Zn \\to Na_2ZnO_2\\text{ (`Sodium Zincate`)} + H_2\\uparrow$**!\n2. **Metal Carbonate / Hydrogencarbonate + Acid -> Salt + Water + $CO_2$ (`Fig 2.2`, Limestone/Chalk/Marble & Egg-shell `Ex Q2`!):** Both **$Na_2CO_3 + 2HCl \\to 2NaCl + H_2O + CO_2\\uparrow$** and **$NaHCO_3 + HCl \\to NaCl + H_2O + CO_2\\uparrow$** release brisk effervescent **$CO_2$** (which extinguishes a burning candle). Bubbling $CO_2$ through **Limewater (`$Ca(OH)_2$`):** First turns **MILKY** via insoluble white precipitate **`$CaCO_3$` (`$Ca(OH)_2 + CO_2 \\to CaCO_3\\downarrow + H_2O$`)**; bubbling **EXCESS $CO_2$** turns it **CLEAR/SOLUBLE** again via **`$Ca(HCO_3)_2$`**!\n3. **Neutralization (`Act 2.6`):** Acid + Base $\\to$ Salt + Water (`$H^+ + OH^- \\to H_2O$`; e.g., $NaOH + HCl \\to NaCl + H_2O$, reversing pink phenolphthalein!).\n4. **Metallic Oxides = BASIC (`Act 2.7`):** Black $CuO + 2HCl \\to CuCl_2 + H_2O$ dissolves turning solution **Blue-Green (`नील-हरित`)**—mirroring Base + Acid! **Non-Metallic Oxides = ACIDIC (`Sec 2.1.6`):** Acidic $CO_2 + \\text{Base } Ca(OH)_2 \\to \\text{Salt } CaCO_3 + H_2O$!',
            hi: 'अम्लों व क्षारकों की **पाँच अनिवार्य अभिक्रिया शृंखलाएँ (`क्रियाकलाप 2.3–2.7`)**:\n1. **अम्ल/क्षारक + धातु → लवण + $H_2\\uparrow$ (`चित्र 2.1`):** दानेदार जिंक + तनु $H_2SO_4 \\to ZnSO_4 + H_2\\uparrow$; साबुन बुलबुलों के पास जलती मोमबत्ती ले जाने पर **फट-फट (`Pop`) ध्वनि** के साथ $H_2$ जलती है! गर्म करने पर `2NaOH + Zn` $\\to$ **सोडियम जिंकेट (`$Na_2ZnO_2$`)** + `$H_2$` बनता है (परंतु यह हर धातु संग संभव नहीं)। *खट्टा दही/अचार पीतल या ताँबे के बर्तनों में रखने से अम्ल विषैले धात्विक लवण बना देते हैं!*\n2. **कार्बोनेट / हाइड्रोजनकार्बोनेट + अम्ल → लवण + $H_2O$ + $CO_2\\uparrow$ (`चित्र 2.2`):** **चूना-पत्थर, खड़िया, संगमरमर व अंडे का कवच** सभी **$CaCO_3$** हैं! बुदबुदाहट से निकली $CO_2$ जलती मोमबत्ती बुझा देती है व **चूने के पानी (`$Ca(OH)_2$`)** को श्वेत अवक्षेप **`$CaCO_3$`** बनाकर **दूधिया (`Milky`)** कर देती है; **अत्यधिक $CO_2$ प्रवाहित करने पर विलेय `$Ca(HCO_3)_2$`** बनकर दूधियापन गायब हो जाता है!\n3. **उदासीनीकरण (`क्रियाकलाप 2.6`):** $\\text{अम्ल} + \\text{क्षारक} \\to \\text{लवण} + \\text{जल}$ (`$H^+ + OH^- \\to H_2O$`)।\n4. **धात्विक ऑक्साइड = क्षारकीय (`2.1.5`):** काला **कॉपर ऑक्साइड (`$CuO$`) + $2HCl$ $\\to CuCl_2 + H_2O$** बनाकर विलयन को **नील-हरित (`Blue-Green`)** कर देता है! **अधात्विक ऑक्साइड = अम्लीय (`2.1.6`):** जैसे $CO_2 + Ca(OH)_2 \\to CaCO_3 + H_2O$!',
          },
          diagramKey: 'c10-ch2-reactions-flow',
          inlinePyqIds: [18],
        },
      ],
    },

    {
      id: 'ions-aqueous-ph-daily-life',
      number: '2.2–2.3',
      flowDiagramKey: null,
      svgLab: 'acids-bases-ph-lab',
      title: {
        en: 'Why Water Creates $H_3O^+/OH^-$ Ions, Safe Acid Dilution & Everyday pH (`0–14`) Mastery',
        hi: 'जलीय विलयन में आयन (`H₃O⁺/OH⁻`), सुरक्षित अम्ल तनुकरण एवं दैनिक जीवन में pH (`0–14`) का महत्व',
      },
      summaryTag: { en: 'NCERT Pages 24–31 + Act 2.8–2.12 + Rainwater vs Distilled Water + pH Chart + Table 2.3', hi: 'NCERT पृष्ठ 24–31 + क्रियाकलाप 2.8–2.12 + pH मान व सारणी 2.3' },
      blocks: [
        {
          heading: {
            en: '1. Why Glucose/Alcohol Don’t Conduct (`Act 2.8`), Dry HCl Mystery (`Act 2.9`), Alkalis & Exothermic Dilution (`Act 2.10`)',
            hi: '1. ग्लूकोज/एल्कोहल अम्ल क्यों नहीं (`2.8`), शुष्क HCl गैस प्रयोग (`2.9`), क्षार व अम्ल तनुकरण सावधानी (`2.10`)',
          },
          conceptStory: {
            en: '**Why ALL Acids Behave Similarly Yet Alcohol Doesn’t (`Act 2.8, Fig 2.3`):** Dissolving `HCl` or `H₂SO₄` illuminates the `6V` bulb because **aqueous ions carry electricity** (`cation H⁺ + anions Cl⁻, NO₃⁻, SO₄²⁻, CH₃COO⁻`). **Glucose (`C₆H₁₂O₆`) and Alcohol (`C₂H₅OH`) contain plenty of Hydrogen, YET fail to dissociate $H^+(aq)$ ions—so bulbs stay OFF and solutions are NOT acidic!** Likewise, **Distilled water (`pH 7`, zero dissolved ionic salts)** fails to conduct whereas **Rainwater** holds trace dissolved carbonic/atmospheric acids forming conductive ions (`Ex Q7`)!\n**Water Is Mandatory (`Act 2.9, Fig 2.4`):** Dry **HCl gas** (`NaCl + conc. H₂SO₄` through calcium chloride drying tube) **DOES NOT turn DRY blue litmus red**! Only **WET litmus** turns red because $H^+$ cannot exist free alone—it joins water forming **Hydronium ions (`$H_3O^+$`)**: **`$HCl + H_2O \\to H_3O^+ + Cl^-$`**!\n• **Bases vs Alkalis (`p.26`):** Bases release **`$OH^-(aq)$`** ions in water (`NaOH, KOH, Mg(OH)₂`). **NOT all bases dissolve in water — water-soluble bases are specially termed ALKALIS (`क्षार`)** (`bitter, soapy, corrosive—never touch/taste!`).\n• **Golden Dilution Safety Rule (`Act 2.10, Fig 2.5`):** Dissolving concentrated $H_2SO_4$/$HNO_3$/$NaOH$ in water is **HIGHLY EXOTHERMIC** (`beaker gets hot!`). **ALWAYS add ACID slowly dropwise to WATER with constant stirring**—pouring water directly onto concentrated acid flashes local steam causing violent splash burns & glass cracking! **Dilution** reduces **$H_3O^+$ or $OH^-$ concentration per unit volume**.',
            hi: '**क्रियाकलाप 2.8 (`चित्र 2.3`):** `6V` बैटरी परिपथ में तनु `HCl` व `H₂SO₄` रखने पर बल्ब जलता है क्योंकि वे जलीय विलयन में मुक्त **आयन (`H⁺` धनायन + `Cl⁻/SO₄²⁻` ऋणायन)** उत्पन्न करते हैं; जबकि **ग्लूकोज व एल्कोहल** में हाइड्रोजन होने पर भी वे **`H⁺(aq)` आयन नहीं बनाते**, अतः वे अम्ल नहीं व विद्युत चालन भी नहीं करते! इसी कारण आयन-रहित **आसवित जल कुचालक**, जबकि घुले अम्लों से **वर्षा जल सुचालक** होता है (`अभ्यास 7`)।\n• **क्रियाकलाप 2.9 (`शुष्क HCl गैस`, चित्र 2.4):** श्वेत ठोस `NaCl` में सांद्र `H₂SO₄` डालने से निकली **शुष्क HCl गैस से सूखे नीले लिटमस का रंग नहीं बदलता** — केवल **आर्द्र (`नम`) लिटमस लाल होता है**, क्योंकि बिना जल के $H^+$ मुक्त नहीं होता और जल संग जुड़कर **हाइड्रोनियम आयन (`$H_3O^+$`)** बनाता है!\n• **क्षारक बनाम क्षार (`p.26`):** जल में **`OH⁻(aq)`** देने वाले व **जल में घुलनशील क्षारक को क्षार (`Alkali`)** कहते हैं (`सभी क्षारक जल में घुलनशील नहीं होते!`)।\n• **अम्ल तनुकरण नियम (`क्रियाकलाप 2.10`, चित्र 2.5):** जल में सांद्र अम्ल घोलना **अत्यंत ऊष्माक्षेपी** है — अतः सदा **अम्ल को धीरे-धीरे हिलाते हुए जल में मिलाना चाहिए**, कभी जल को अम्ल में नहीं (अन्यथा मिश्रण आस्फलित होकर बाहर उछलकर जला सकता है और बीकर चटक सकता है)! **तनुकरण (`Dilution`)** करने पर प्रति इकाई आयतन **`H₃O⁺ / OH⁻` की सांद्रता घटती** है।',
          },
          bullets: [
            {
              en: '**==1M Strong vs Weak Acid (`p.28`):==** Equal molarity `1M HCl` ionizes nearly `100%` (high `$H^+$` -> **Strong Acid**; vigourous `Mg` fizzing `Ex Q10`), whereas `1M CH₃COOH` Acetic acid ionizes weakly (`less $H^+$` -> **Weak Acid**)!',
              hi: '**==प्रबल बनाम दुर्बल अम्ल (`पृ. 28`):==** समान सांद्रता पर `HCl` अधिक `H⁺` देता है (**प्रबल अम्ल** — `Mg` संग तेज बुदबुदाहट `Ex Q10`), जबकि `CH₃COOH` बहुत कम `H⁺` देता है (**दुर्बल अम्ल**)!',
            },
          ],
          inlinePyqIds: [],
        },
        {
          heading: {
            en: '2. Universal pH Scale (`Potenz 0–14`), Tooth Enamel, Acid Rain, Bee/Nettle Stings & Natural Acids (`Table 2.3`)',
            hi: '2. pH स्केल (0–14), दंत-क्षय (5.5), अम्ल वर्षा (5.6), मधुमक्खी/नेटल डंक (डॉक पौधा) एवं प्राकृतिक अम्ल (सारणी 2.3)',
          },
          conceptStory: {
            en: '**pH Scale (`Sec 2.3, Fig 2.6–2.7`):** Here **`p`** stands for German ***Potenz*** (`Power`). `pH` runs inversely with **`[H⁺]`** from **`0`** (`very acidic`) through **`7`** (`neutral water`) to **`14`** (`very alkaline, high [OH⁻]`)! Remember ALL **five life-critical pH rules (`Sec 2.3.1`)**:\n1. **Living Range & Acid Rain:** Human body operates strictly inside **`pH 7.0 – 7.8`** (`blood ~7.4`, `Tech Gr-III PYQ!`). When rainwater drops below **`pH 5.6`**, it becomes **Acid Rain (`अम्लीय वर्षा`)**, harming aquatic river life! *(Bonus Astronomy box: Planet **Venus** is wrapped in thick white-yellowish clouds of **Sulphuric Acid $H_2SO_4$**!)*\n2. **Digestion & Antacids:** Stomach produces **`HCl` (`gastric juice ~1.2`)** safely aiding digestion; hyperacidity indigestion pain is relieved by mild bases called **Antacids**, notably **Milk of Magnesia (`$Mg(OH)_2$`, `pH ~10`)** (`and Baking Soda NaHCO₃`)!\n3. **Tooth Decay (`pH < 5.5`):** Tooth **enamel** is the **hardest substance in the human body**, made of crystalline calcium phosphate **Calcium Hydroxyapatite (`कैल्शियम हाइड्रोक्सीएपेटाइट`)**! Mouth bacteria ferment food sugars into acid dropping **`pH < 5.5`**, corroding enamel—**alkaline toothpaste** neutralizes excess acid!\n4. **Plant & Animal Chemical Defense (`NCERT Table 2.3 + Nettle Box`):** **Ant & Bee sting + Nettle plant hair** inject **Methanoic (`Formic`) acid** (`HCOOH`) causing fiery burning—treated with mild **Baking soda** (`bee`), OR traditionally by rubbing leaves of the **Dock plant** (`क्षारीय प्रकृति`) growing right beside wild nettle! Memorize **Table 2.3**: Vinegar = **Acetic**, Orange/Lemon = **Citric**, Tamarind = **Tartaric**, Tomato = **Oxalic**, Sour milk/Curd = **Lactic**!',
            hi: '**pH स्केल (`भाग 2.3`, चित्र 2.6–2.7):** यहाँ **`p`** जर्मन शब्द ***पुसांस (Potenz = शक्ति)*** का सूचक है! हाइड्रोनियम आयन `$H_3O^+$` जितना अधिक होगा, pH उतना ही **कम** होगा (`0 = अति अम्लीय`, `7 = उदासीन`, `14 = अति क्षारीय`)!\n• **दैनिक जीवन के 5 अनिवार्य pH तथ्य (`2.3.1`):**\n  1. **शरीर व अम्लीय वर्षा:** हमारा शरीर **`7.0 से 7.8 pH` (`रक्त 7.4`)** के बीच कार्य करता है। वर्षा जल का pH **`5.6 से कम`** हो जाने पर वह **अम्लीय वर्षा** कहलाता है। *(शुक्र ग्रह के मोटे श्वेत-पीले बादल **सल्फ़्यूरिक अम्ल $H_2SO_4$** से बने हैं!)*\n  2. **पाचन व एंटैसिड:** आमाशय **`HCl` (`जठर रस pH ~1.2`)** बनाता है; अपच की जलन में **मिल्क ऑफ मैग्नीशिया (`$Mg(OH)_2$`, `pH 10`)** जैसा **एंटैसिड** आधिक्य अम्ल को उदासीन करता है।\n  3. **दंत-क्षय (`pH < 5.5`):** मुँह का pH **`5.5 से कम`** होते ही दाँतों का इनैमल — जो **शरीर का सबसे कठोर पदार्थ `कैल्शियम हाइड्रोक्सीएपेटाइट` (कैल्शियम फॉस्फेट क्रिस्टल)** है — संक्षारित होने लगता है (`क्षारीय दंत-मंजन बचाव करता है`)।\n  4. **पशु-पौधों की आत्मरक्षा (`सारणी 2.3`):** मधुमक्खी व चींटी के डंक तथा **नेटल (`Nettle`) पादप के बालों** में **मेथैनॉइक अम्ल (`फार्मिक अम्ल`)** होता है! इस जलन को **बेकिंग सोडा** अथवा पहाड़ों में नेटल के पास उगने वाले क्षारीय **डॉक पौधे (`Dock plant`) की पत्ती** रगड़कर ठीक किया जाता है।\n  5. **सारणी 2.3 (कण्ठस्थ सूची):** सिरका = **ऐसीटिक**, संतरा/नींबू = **सिट्रिक**, इमली = **टार्टरिक**, टमाटर = **ऑक्सैलिक**, दही/खट्टा दूध = **लैक्टिक अम्ल**!',
          },
          diagramKey: 'c10-ch2-ph-scale-chart',
          realImage: {
            url: '/ncert-notes/class10-chem-ch2/real/stinging-nettle.webp',
            title: {
              en: 'Stinging Nettle Trichome Needles (`NCERT Box p.30`) Injecting Methanoic Acid + Dock Leaf Antidote',
              hi: 'नेटल पादप के काँच-सदृश डंक रोम (`NCERT पृ. 30`) जो मेथैनॉइक अम्ल छोड़ते हैं',
            },
            caption: {
              en: 'Micro-needle stinging hairs break cleanly upon touch releasing irritating methanoic acid — traditionally neutralized using basic Dock plant leaves nearby.',
              hi: 'स्पर्श करते ही ये सूक्ष्म डंक त्वचा में मेथैनॉइक अम्ल प्रविष्ट कर देते हैं जिसका पारंपरिक उपचार पास उगने वाली क्षारीय डॉक पत्ती से किया जाता है।',
            },
          },
          inlinePyqIds: [7, 8, 9, 10, 11, 12],
        },
      ],
    },

    {
      id: 'chloralkali-salts-water-crystallization',
      number: '2.4',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Salt pH Families, Chlor–Alkali Brine Plant, 5 Key Compounds (`Ca(ClO)₂`, Soda, POP) & Crystal Water',
        hi: 'लवण परिवार व pH, क्लोर-क्षार प्रक्रिया, 5 प्रमुख यौगिक (विरंजक, सोडा, POP) तथा क्रिस्टलन का जल (`2.4`)',
      },
      summaryTag: { en: 'NCERT Pages 31–36 + New 2026 Bleaching Ca(ClO)₂ + Brine Electrolysis + Gypsum 373K POP + CuSO₄·5H₂O', hi: 'NCERT पृष्ठ 31–36 + नया विरंजक चूर्ण Ca(ClO)₂ + धावन/बेकिंग सोडा + 373K POP व CuSO₄·5H₂O' },
      blocks: [
        {
          heading: {
            en: '1. Salt Hydrolysis pH (`Table 2.4`), Dandi Rock Salt & Chlor–Alkali Electrolysis (`Fig 2.8`)',
            hi: '1. लवणों का pH (`भाग 2.4.2`), खनिज नमक / दांडी यात्रा एवं क्लोर-क्षार विद्युत अपघटन (`चित्र 2.8`)',
          },
          conceptStory: {
            en: '**Salt Families & Salt pH (`Sec 2.4.1–2.4.2`):** Salts sharing identical positive OR negative radicals form a family (`NaCl & Na₂SO₄` = Sodium family; `NaCl & KCl` = Chloride family). Check **Salt Solution pH Rule (`Table 2.4`):**\n• **Strong Acid + Strong Base -> Neutral Salt (`pH = 7`):** `NaCl, KNO₃, Na₂SO₄`.\n• **Strong Acid + Weak Base -> Acidic Salt (`pH < 7`):** `NH₄Cl, CuSO₄, AlCl₃, ZnSO₄`.\n• **Weak Acid + Strong Base -> Basic Salt (`pH > 7`):** `CH₃COONa, Na₂CO₃, NaHCO₃`!\n**Common Salt Raw Material (`Sec 2.4.3`, p.32):** Beyond sea evaporation, vast solid underground deposits of brownish impure crystals (**Rock Salt / खनिज नमक**) formed when ancient seas dried ages ago—mined like coal (`and Gandhi’s Dandi March made Salt an icon of India’s freedom struggle!`). Passing electricity through aqueous Brine (`लवण जल`) drives the **Chlor–Alkali Process (`Fig 2.8`)**: **`$2NaCl(aq) + 2H_2O(l) \\to 2NaOH(aq) + Cl_2(g)\\uparrow + H_2(g)\\uparrow$`**!\nRemember EXACT electrode locations (`ALP 2025 #1 PYQ`!): **Chlorine gas (`$Cl_2$`) escapes at ANODE `(+)`** (`water sanitation, swimming pools, PVC, CFC, pesticides, bleaching powder`); **Hydrogen gas (`$H_2$`) escapes at CATHODE `(−)`** (`clean fuel, margarine, ammonia fertilizers`); and **Sodium Hydroxide (`$NaOH$`) alkali forms near CATHODE** (`metal degreasing, soaps/detergents, paper, artificial fibres`)!',
            hi: '**लवण परिवार व pH नियम (`2.4.1–2.4.2`):** समान धन या ऋण मूलक वाले लवण एक परिवार बनाते हैं (`जैसे NaCl व KCl = क्लोराइड परिवार`)। **जल में लवण का pH (`सारणी 2.4`):**\n1. प्रबल अम्ल + प्रबल क्षारक (`HCl + NaOH`) $\\to$ **उदासीन (`pH = 7`: `NaCl, KNO₃, Na₂SO₄`)**।\n2. प्रबल अम्ल + दुर्बल क्षारक (`HCl + NH₄OH`) $\\to$ **अम्लीय (`pH < 7`: `NH₄Cl, AlCl₃, CuSO₄`)**।\n3. प्रबल क्षारक + दुर्बल अम्ल (`NaOH + H₂CO₃`) $\\to$ **क्षारीय (`pH > 7`: `Na₂CO₃, NaHCO₃, CH₃COONa`)**!\n• **खनिज नमक व दांडी यात्रा (`पृ. 32`):** युगों पहले समुद्र सूखने से बने भूरे क्रिस्टलीय **खनिज नमक (`Rock Salt`)** को कोयले की तरह खोदा जाता है (`महात्मा गाँधी का दांडी मार्च नमक सत्याग्रह का प्रतीक रहा`)!\n• **क्लोर-क्षार प्रक्रिया (`चित्र 2.8`):** जलीय `NaCl` (ब्राइन) में विद्युत धारा प्रवाहित करने पर **$2NaCl(aq) + 2H_2O(l) \\to 2NaOH(aq) + Cl_2(g) + H_2(g)$** बनता है:\n  – **ऐनोड `(+)` पर `Cl₂` गैस** (`जल स्वच्छता, PVC, कीटनाशक, विरंजक चूर्ण`); **कैथोड `(−)` पर `H₂` गैस** (`ईंधन, मार्गरीन, खाद हेतु NH₃`); **कैथोड के पास `NaOH` घोल** (`ग्रीज हटाने, साबुन-अपमार्जक, कागज, कृत्रिम फाइबर`)!',
          },
          realImage: {
            url: '/ncert-notes/class10-chem-ch2/real/sambhar-salt-lake.webp',
            title: {
              en: 'Solar Salt Extraction Pans (`Sambhar Lake, Rajasthan`) — Source of Raw Brine (`NaCl`)',
              hi: 'सौर वाष्पीकरण नमक झील (`सांभर, राजस्थान`) — रासायनिक उद्योगों का कच्चा माल NaCl',
            },
            caption: {
              en: 'Common salt obtained via brine evaporation & mined rock-salt beds acts as feedstock for NaOH, Bleaching Powder, Baking Soda & Washing Soda.',
              hi: 'साधारण नमक से ही क्लोर-क्षार द्वारा NaOH तथा विरंजक चूर्ण, बेकिंग सोडा व धावन सोडा जैसे सभी औद्योगिक रसायन तैयार होते हैं।',
            },
          },
          inlinePyqIds: [2, 3, 4, 5],
        },
        {
          heading: {
            en: '2. Bleaching Powder (`Ca(ClO)₂`), Baking/Washing Soda & Water of Crystallization (`CuSO₄·5H₂O` vs Gypsum–POP `373 K`)',
            hi: '2. विरंजक चूर्ण (Ca(ClO)₂), बेकिंग/धावन सोडा एवं क्रिस्टलन का जल (नीला थोथा व जिप्सम–POP 373K)',
          },
          conceptStory: {
            en: 'Memorize EVERY preparation equation, formula & industrial use cleanly:\n• **Bleaching Powder (`विरंजक चूर्ण`):** Chlorine from chlor-alkali reacts with **dry slaked lime [`Ca(OH)₂`]**. *NEW 2026-27 NCERT Formula (`p.33 & In-Text Q1`):* **`$Ca(ClO)_2$` (`$2Ca(OH)_2 + 2Cl_2 \\to Ca(ClO)_2 + 2H_2O + CaCl_2$`)** *(legacy formula: `$CaOCl_2$`)*. Uses: bleaching cotton/linen/wood-pulp/laundry, **oxidising agent** (`Tech Gr-III PYQ!`), disinfecting drinking water (`NOT water hardness removal!`).\n• **Baking Soda (`$NaHCO_3$`, p.33–34):** Prep: **`$NaCl + H_2O + CO_2 + NH_3 \\to NH_4Cl + NaHCO_3$`**. Mild non-corrosive basic salt; heating decomposes it (`$2NaHCO_3 \\to Na_2CO_3 + H_2O + CO_2$`). Uses: (1) Mixed with **Tartaric acid (`टार्टरिक अम्ल`)** makes **Baking Powder** giving **$CO_2$** for soft spongy cakes/bread! (2) Mild Antacid; (3) **Soda-Acid Fire Extinguisher (`Fig 2.10`)**!\n• **Washing Soda (`$Na_2CO_3 \\cdot 10H_2O$`, p.34):** Recrystallizing heated $Na_2CO_3$ (`$Na_2CO_3 + 10H_2O \\to Na_2CO_3 \\cdot 10H_2O$`). Uses: glass, soap & paper industries (`Group D Shift 24 PYQ!`), manufacturing **Borax**, domestic cleaner, and **removing PERMANENT hardness of water**!\n• **Water of Crystallization (`2.4.4`, Fig 2.9):** Fixed $H_2O$ molecules within one formula unit of crystal! Dry-looking blue **$CuSO_4 \\cdot 5H_2O$** turns **WHITE** when heated (`steam condenses inside tube`), restoring **BLUE** immediately on `2–3` drops of water! **Gypsum (`$CaSO_4 \\cdot 2H_2O$`)** loses water at **`373 K`** forming **Plaster of Paris (`$CaSO_4 \\cdot \\frac{1}{2}H_2O$`, Calcium Sulphate Hemihydrate)** (`two CaSO₄ units share 1 H₂O`!). Mixing POP with `1½ H₂O` locks back into solid **Gypsum** for fractured bone casts, toys, decor & smooth surfaces (`MUST store POP in moisture-proof airtight containers` — `Ex Q13`!).',
            hi: 'परीक्षा के दृष्टिकोण से **4 सर्वाधिक महत्वपूर्ण यौगिक व क्रिस्टलन जल (`पृष्ठ 33–36`)**:\n1. **विरंजक चूर्ण (`नया 2026 NCERT सूत्र: Ca(ClO)₂` | पुराना `CaOCl₂`):** शुष्क बुझे चूने `$Ca(OH)_2$` पर क्लोरीन प्रवाहित करने पर `$2Ca(OH)_2 + 2Cl_2 \\to Ca(ClO)_2 + 2H_2O + CaCl_2$`! उपयोग: सूती-लिनेन/कागज लुगदी/लाउंड्री विरंजन, उद्योगों में **उपचायक (`ऑक्सीकारक`, Tech Gr-III PYQ)** व पेयजल जीवाणुनाशन (*जल की कठोरता दूर करने में नहीं!*)\n2. **बेकिंग सोडा (`$NaHCO_3$`):** निर्माण = **`$NaCl + H_2O + CO_2 + NH_3 \\to NH_4Cl + NaHCO_3$`**, गर्म करने पर **`$Na_2CO_3 + H_2O + CO_2$`**! दुर्बल असंक्षारक क्षारीय लवण। उपयोग: (1) इसमें **टार्टरिक अम्ल** मिलाने से **बेकिंग पाउडर** बनता है जो `$CO_2$` से केक को स्पंजी बनाता है; (2) एंटैसिड; (3) **सोडा-अम्ल अग्निशामक (`चित्र 2.10`)**!\n3. **धोने का सोडा (`$Na_2CO_3 \\cdot 10H_2O$`):** `Na₂CO₃` के पुन: क्रिस्टलीकरण से बनता है। उपयोग: काँच, साबुन व कागज उद्योग (`PYQ #21`), **बोरेक्स** निर्माण, घरेलू सफाई व **जल की स्थायी कठोरता हटाने** में!\n4. **क्रिस्टलन का जल (`भाग 2.4.4`, चित्र 2.9):** किसी लवण के एक सूत्र इकाई में जुड़े निश्चित जल अणु — जैसे शुष्क दिखने वाले नीले **`$CuSO_4 \\cdot 5H_2O$`** में `5 H₂O` (`गर्म करने पर सफेद निर्जल CuSO₄; जल डालते ही फिर नीला!`) और **जिप्सम (`$CaSO_4 \\cdot 2H_2O$`)** में `2 H₂O`! जिप्सम को **`373 K`** पर गर्म करने से **प्लास्टर ऑफ पेरिस (`$CaSO_4 \\cdot \\frac{1}{2}H_2O$`, कैल्शियम सल्फेट अर्धहाइड्रेट)** बनता है (जहाँ **दो `CaSO₄` इकाइयाँ एक जल अणु साझा** करती हैं), जो `1½ H₂O` मिलते ही पुन: कठोर **जिप्सम** बनकर टूटी हड्डियों के प्लास्टर, खिलौनों व सजावट में काम आता है!',
          },
          diagramKey: 'c10-ch2-chloralkali-salts',
          realImage: {
            url: '/ncert-notes/class10-chem-ch2/real/gypsum-selenite.webp',
            title: {
              en: 'Natural Gypsum Crystal (`CaSO₄·2H₂O`) — Heated at `373 K` -> Plaster of Paris (`CaSO₄·½H₂O`)',
              hi: 'प्राकृतिक जिप्सम क्रिस्टल (`CaSO₄·2H₂O`) — जिसे 373 K पर गर्म कर प्लास्टर ऑफ पेरिस बनाते हैं',
            },
            caption: {
              en: 'Contains two water molecules of crystallization per formula unit; heating loses 1.5 H₂O forming quick-setting white Plaster of Paris powder.',
              hi: 'इसमें क्रिस्टलन के 2 जल अणु होते हैं; `373 K` ताप पर निर्जलीकरण से श्वेत POP चूर्ण तथा पानी मिलाकर फिर से कठोर जिप्सम बनता है।',
            },
          },
          viralTrick: {
            en: '**Formula Water Numbers Lock (`PYQ Guarantees`):** Copper Sulphate **`5`** (`5H₂O`), Gypsum **`2`** (`2H₂O`), Plaster of Paris **`½`** (`½H₂O` — `373 K`!), Washing Soda **`10`** (`10H₂O`)! Baking Powder = **`Baking Soda + Tartaric Acid`** (`CO₂` makes cake rise — NO bitter taste!).',
            hi: '**क्रिस्टल जल-अणु महाट्रिक:** नीला थोथा **`5`** (`5H₂O`) | जिप्सम **`2`** (`2H₂O`) | POP **`½`** (`½H₂O`, `373 K`!) | धावन सोडा **`10`** (`10H₂O`)! याद रखें: बेकिंग पाउडर में **टार्टरिक अम्ल** सोडियम कार्बोनेट की कड़वाहट उदासीन करता है!',
          },
          inlinePyqIds: [14, 15, 16, 17, 19, 20, 21, 22, 23, 24],
        },
      ],
    },
  ],

  confusionBreakers: [
    {
      pair: { en: 'Adding Water to Conc. Acid vs Acid to Water (`Act 2.10`)', hi: 'अम्ल में जल डालना बनाम जल में अम्ल (`क्रियाकलाप 2.10`)' },
      trap: { en: 'Thinking dilution works identically either way (`water poured into bottle acid`).', hi: 'सांद्र अम्ल की बोतल में सीधे पानी डालकर तनु करना।' },
      truth: { en: 'Water into acid generates sudden concentrated heat flashing liquid acid out onto skin/eyes (`or cracks beaker`)! **ALWAYS pour ACID slowly into WATER while stirring**!', hi: 'अम्ल में जल डालने पर अत्यधिक स्थानीय ऊष्मा से मिश्रण आस्फलित होकर बाहर आ सकता है; सदा **अम्ल को धीरे-धीरे हिलाते हुए जल में मिलाएं**!' },
    },
    {
      pair: { en: 'Hydrogen-Containing Compounds vs True Acids (`Glucose/Alcohol Act 2.8`)', hi: 'सभी हाइड्रोजन-युक्त यौगिक अम्ल नहीं होते (`ग्लूकोज / एल्कोहल`)' },
      trap: { en: 'Assuming $C_6H_{12}O_6$ or $C_2H_5OH$ conducts electricity and turns litmus red because they hold Hydrogen!', hi: 'ग्लूकोज (`C₆H₁₂O₆`) व एल्कोहल (`C₂H₅OH`) में `H` देखकर उन्हें अम्ल/सुचालक मान लेना।' },
      truth: { en: 'Acidity requires releasing **`$H^+(aq) / H_3O^+$`** ions in water (`Act 2.8 & 2.9`)! Glucose/alcohol do NOT ionize, failing bulb glow (`and dry HCl gas leaves dry litmus unchanged`)!', hi: 'अम्लत्व केवल जलीय विलयन में **`H⁺(aq) / H₃O⁺` आयन** बनाने से आता है — ग्लूकोज/एल्कोहल व शुष्क HCl गैस आयन नहीं बनातीं!' },
    },
    {
      pair: { en: 'All Bases vs Water-Soluble Alkalis (`p.26`)', hi: 'सभी क्षारक (Bases) बनाम जल-विलेय क्षार (Alkalis)' },
      trap: { en: 'Saying every Metal Oxide/Hydroxide Base dissolves freely in water.', hi: 'प्रत्येक क्षारक (`जैसे CuO या Fe(OH)₃`) को जल में घुलनशील क्षार समझ लेना।' },
      truth: { en: '**Water-soluble bases ONLY are called ALKALIS (`क्षार`, e.g., `NaOH, KOH, NH₄OH`)**; insoluble bases like `CuO` are Bases, NOT Alkalis! (`All alkalis are bases, NOT all bases are alkalis!`)', hi: 'केवल **जल में घुलनशील क्षारक ही `क्षार (Alkali)`** कहलाते हैं (`NaOH, KOH`); सभी क्षार क्षारक होते हैं पर सभी क्षारक जल में नहीं घुलते!' },
    },
    {
      pair: { en: 'Milkman Adding Baking Soda to Fresh Milk (`NCERT Ex Q12`)', hi: 'दूध में थोड़ा बेकिंग सोडा मिलाने पर दही देरी से क्यों जमता है (`अभ्यास 12`)?' },
      trap: { en: 'Thinking adding Baking Soda speeds up curd formation or turns milk acidic.', hi: 'बेकिंग सोडा से दही जल्दी जमता है या दूध का pH 6 से घटता है मान लेना।' },
      truth: { en: 'Fresh milk (`pH 6`) turns acidic & spoils via lactic acid. Baking soda shifts pH slightly **alkaline (`> 7`)** neutralizing early lactic acid -> **bacteria take MUCH LONGER making enough acid for curd (`pH ~4.5`)**!', hi: 'ताजा दूध (`pH 6`) का मान क्षारीय सोडा थोड़ा **बढ़ा (`> 7`)** देता है, जिससे दूध फटने से बचता है और बनने वाला शुरुआती लैक्टिक अम्ल उदासीन होते रहने से **दही जमने में अधिक समय** लगता है!' },
    },
    {
      pair: { en: 'Bleaching Powder Formula (`New 2026 Ca(ClO)₂` vs Legacy `CaOCl₂`)', hi: 'विरंजक चूर्ण का नया 2026 NCERT सूत्र (`Ca(ClO)₂`) बनाम पुराना (`CaOCl₂`)' },
      trap: { en: 'Failing to recognize `Ca(ClO)₂` (`NCERT 2026–27 p.33–36`) OR missing `CaOCl₂` in older PYQ options.', hi: 'नए NCERT प्रश्न `Ca(ClO)₂` को न पहचान पाना या पुराने पेपर के `CaOCl₂` में भ्रमित होना।' },
      truth: { en: '2026–27 NCERT formally writes **`Ca(ClO)₂`** (`2Ca(OH)₂ + 2Cl₂ -> Ca(ClO)₂ + CaCl₂ + 2H₂O`), while older Railway tests also show **`CaOCl₂`** — BOTH represent **Bleaching Powder**! *(Also NEVER confuse `NaHCO₃ Baking` with `Na₂CO₃·10H₂O Washing`!)*', hi: 'नया 2026-27 NCERT पृष्ठ 33 व प्रश्न 1 में **`Ca(ClO)₂`** लिखा है और पुराने रेलवे सेटों में **`CaOCl₂`** मिलता है — दोनों **विरंजक चूर्ण** के नाम हैं!' },
    },
    {
      pair: { en: 'Salt Solution pH = 7 Always? (`NH₄Cl vs Na₂CO₃`)', hi: 'क्या सभी लवणों का pH सदैव 7 (उदासीन) होता है?' },
      trap: { en: 'Thinking every Salt (`lavan`) tests strictly neutral `pH = 7` on pH paper.', hi: 'लवण (`Salt`) शब्द देखते ही सभी लवण विलयनों का pH 7 मान लेना।' },
      truth: { en: '**`NaCl` = 7 (`strong+strong`)**; **`NH₄Cl / AlCl₃ / CuSO₄` < 7 (`acidic salt`)**; **`Na₂CO₃ / CH₃COONa / NaHCO₃` > 7 (`basic salt — pH ~9`, PYQ!)**!', hi: 'केवल प्रबल+प्रबल लवण (`NaCl, KNO₃`) उदासीन (`7`) होते हैं; **`NH₄Cl, AlCl₃, CuSO₄` अम्लीय (`< 7`)** व **`Na₂CO₃, CH₃COONa` क्षारीय (`> 7`)** होते हैं!' },
    },
  ],

  pioneers: [
    {
      name: { en: 'S. P. L. Sørensen (`1909 pH Scale`) — `Potenz` Notation', hi: 'एस. पी. एल. सोरेन्सन (`pH स्केल` — जर्मन पुसांस / Potenz शक्ति)' },
      country: { en: 'Carlsberg Laboratory • Quantifying [H⁺] Power `0–14`', hi: 'कार्ल्सबर्ग प्रयोगशाला • [H₃O⁺] सांद्रता का 0–14 मापन' },
      badge: { en: 'pH = Potenz (`Power`) of Hydrogen Ions', hi: 'pH में p = Potenz (हाइड्रोजन आयन शक्ति)' },
      fact: {
        en: 'Featured in NCERT Sec 2.3 (`p.27`): German word ***Potenz*** means *"Power"* (`0 = highest acid acidity` through `7 = neutral` to `14 = strongest alkali`).',
        hi: 'NCERT पृ. 27 अनुसार pH में `p` जर्मन शब्द ***पुसांस (Potenz = शक्ति)*** से आया है जो किसी विलयन में `$H^+$` आयन की शक्ति को `0` से `14` तक दर्शाता है!',
      },
    },
    {
      name: { en: 'Mahatma Gandhi — Dandi Salt March (`Salt Raw Feedstock Box p.32`)', hi: 'महात्मा गाँधी — दांडी नमक सत्याग्रह (`साधारण नमक ऐतिहासिक खंड पृ. 32`)' },
      country: { en: 'Indian Freedom Struggle • Common Salt (`NaCl`) Civic Symbol', hi: 'भारतीय स्वतंत्रता संग्राम • दैनिक जीवन व रसायनों का कच्चा माल' },
      badge: { en: 'Sea Evaporation + Ancient Rock Salt Mines -> 5 Key Chemicals', hi: 'समुद्री व खनिज नमक → 5 औद्योगिक रसायनों की जननी' },
      fact: {
        en: 'Highlighted on NCERT `p.32`: Beyond India’s freedom movement (`Dandi March`), simple neutral **NaCl** serves as raw starting feedstock for `NaOH`, Bleaching Powder, Baking Soda & Washing Soda!',
        hi: 'NCERT पृ. 32 बॉक्स: स्वतंत्रता संग्राम के प्रतीक **साधारण नमक (`NaCl`)** से ही हमारे दैनिक जीवन के प्रमुख औद्योगिक रसायन (`NaOH`, विरंजक चूर्ण, बेकिंग व धावन सोडा) बनाए जाते हैं।',
      },
    },
    {
      name: { en: 'Acid-Base Coevolution in Nature (`Nettle & Dock Symbiosis p.30`)', hi: 'प्रकृति में उदासीनीकरण (`नेटल व डॉक पौधे का सह-अस्तित्व पृ. 30`)' },
      country: { en: 'Ecological Self-Defense & Traditional Herb Cure', hi: 'जंगली वनस्पति आत्मरक्षा एवं पारंपरिक आयुर्वेदिक उपचार' },
      badge: { en: 'Methanoic Acid Sting + Natural Basic Leaf Cure', hi: 'मेथैनॉइक अम्ल डंक + क्षारीय डॉक पत्ती द्वारा प्राकृतिक राहत' },
      fact: {
        en: 'NCERT `Do You Know? (p.30)` showcases natural chemistry: wild Nettle sting injects Methanoic acid, while alkaline **Dock plants** naturally grow right alongside it serving as an instant folk remedy!',
        hi: 'NCERT पृ. 30 बॉक्स: जंगलों में उगने वाले नेटल के डंकनुमा बाल मेथैनॉइक अम्ल छोड़ते हैं, और प्रकृति ने ठीक उसी के बगल में क्षारीय **डॉक पौधे** उगाकर तुरंत प्राकृतिक इलाज दिया है!',
      },
    },
  ],

  visualGallery: [
    {
      id: 'vis-red-cabbage',
      figRef: { en: 'Do You Know p.19 & Project I p.39 (Natural Universal Color)', hi: 'पृष्ठ 19 व सामूहिक क्रियाकलाप (प्राकृतिक लाल पत्ता गोभी सूचक)' },
      title: { en: 'Red Cabbage Pigment Colour Gradient Across Acid, Neutral KCl, NaHCO₃ & KOH', hi: 'लाल पत्ता गोभी निचोड़ का अम्ल, उदासीन KCl, बेकिंग सोडा व क्षारक KOH में रंग परिवर्तन' },
      imageUrl: '/ncert-notes/class10-chem-ch2/real/red-cabbage-beaker.webp',
      hotspots: [
        { en: 'Natural botanical extract clearly differentiates H₃PO₄/Citric acid (crimson), KCl (violet), NaHCO₃ (blue-green), and KOH (yellow)!', hi: 'प्राकृतिक रंजक अम्ल में गहरा गुलाबी-लाल, उदासीन में बैंगनी व क्षारक में नीला-हरा-पीला रंग दिखाता है।' },
      ],
    },
    {
      id: 'vis-nettle-hairs',
      figRef: { en: 'NCERT Do You Know? p.30 (Methanoic Acid Stinging Trichomes)', hi: 'वैज्ञानिक बॉक्स पृ. 30 (नेटल पादप के डंक बाल — मेथैनॉइक अम्ल)' },
      title: { en: 'Stinging Nettle Trichome Needles — Methanoic Acid (`HCOOH`) Injection', hi: 'नेटल पादप के सूक्ष्म डंक रोम — मेथैनॉइक अम्ल स्राव व डॉक पौधे से उदासीनीकरण' },
      imageUrl: '/ncert-notes/class10-chem-ch2/real/stinging-nettle.webp',
      hotspots: [
        { en: 'Same methanoic acid present in ant & bee stings causes burning pain neutralized by baking soda or wild Dock plant leaves.', hi: 'चींटी व मधुमक्खी डंक के समान मेथैनॉइक अम्ल छोड़ता है; बेकिंग सोडा या डॉक पत्ती इसे उदासीन करती है।' },
      ],
    },
    {
      id: 'vis-sambhar-salt',
      figRef: { en: 'Section 2.4.3 p.32 (Sea/Brine Salt Evaporation & Chlor-Alkali Feedstock)', hi: 'भाग 2.4.3 पृ. 32 (लवण-जल वाष्पीकरण एवं क्लोर-क्षार कच्चा माल)' },
      title: { en: 'Sambhar Brine Salt Pans — Starting Feedstock (`NaCl`) for 5 Chemical Industries', hi: 'सांभर नमक झील वाष्पीकरण क्षेत्र — `NaCl` (5 औद्योगिक रसायनों का मूल कच्चा माल)' },
      imageUrl: '/ncert-notes/class10-chem-ch2/real/sambhar-salt-lake.webp',
      hotspots: [
        { en: 'Electrolysis of aqueous NaCl brine supplies Cl₂ (`Anode`), H₂ (`Cathode`), NaOH, Bleaching Powder, Baking Soda & Washing Soda!', hi: 'लवण-जल (`Brine`) के विद्युत अपघटन से क्लोर-क्षार प्रक्रिया में NaOH, Cl₂ व H₂ बनते हैं।' },
      ],
    },
    {
      id: 'vis-gypsum-crystal',
      figRef: { en: 'Section 2.4.4 p.35–36 (Gypsum CaSO₄·2H₂O -> POP @ 373 K)', hi: 'भाग 2.4.4 पृ. 35–36 (जिप्सम CaSO₄·2H₂O व 373 K पर प्लास्टर ऑफ पेरिस)' },
      title: { en: 'Crystalline Gypsum Mineral (`CaSO₄·2H₂O`) — Water of Crystallization Source', hi: 'जिप्सम खनिज क्रिस्टल (`CaSO₄·2H₂O`) — क्रिस्टलन के 2 जल अणु' },
      imageUrl: '/ncert-notes/class10-chem-ch2/real/gypsum-selenite.webp',
      hotspots: [
        { en: 'Dry-looking crystalline Gypsum locks two H₂O molecules per CaSO₄ formula; heating @ 373 K yields quick-setting Plaster of Paris (`CaSO₄·½H₂O`).', hi: '`373 K` पर गर्म करने से डेढ़ जल अणु निकल कर सफेद POP चूर्ण (`CaSO₄·½H₂O`) बनता है।' },
      ],
    },
  ],

  activities: [
    {
      num: '2.1',
      title: { en: 'Table 2.1 Indicator Assay Across 9 Lab Acids/Bases & Olfactory Onion/Vanilla/Clove Test (`p.20`)', hi: '9 प्रयोगशाला विलयनों पर लिटमस/फिनॉल्फथेलिन/मेथिल ऑरेंज एवं प्याज-वैनिला गंधीय परीक्षण (`2.1`)', },
      materials: { en: 'HCl, H₂SO₄, HNO₃, CH₃COOH, NaOH, Ca(OH)₂, KOH, Mg(OH)₂, NH₄OH + 4 indicators + chilled onion strip, vanilla, clove oil', hi: '4 अम्ल + 5 क्षारक नमूने, 4 सूचक व फ्रिज में रखी प्याज पट्टी, वैनिला एसेंस, लौंग का तेल' },
      steps: {
        en: 'Test watch-glass drops against Red/Blue Litmus, Phenolphthalein & Methyl Orange (`Table 2.1`); separately drop HCl vs NaOH onto chilled onion cloth, vanilla & clove oil checking odour retention.',
        hi: 'प्रत्येक विलयन की बूँद पर चारों सूचक व प्याज-कपड़े, वैनिला एवं लौंग तेल की गंध का अम्ल बनाम क्षार प्रभाव दर्ज करें।',
      },
      examTakeaway: { en: 'Phenolphthalein glows **PINK ONLY in Bases**; Methyl Orange is **RED in Acid & YELLOW in Base**; Olfactory indicators **lose smell in Bases (`NaOH`)** while retaining smell in Acids!', hi: 'फिनॉल्फथेलिन क्षार में **गुलाबी** व मेथिल ऑरेंज अम्ल में **लाल** / क्षार में **पीला**; प्याज, वैनिला व लौंग तेल **क्षार में अपनी गंध खो देते** हैं!' },
      predictQuestion: {
        prompt: { en: 'Which synthetic/olfactory indicator pair correctly turns PINK in `NH₄OH` base and LOSES smell completely in `NaOH`?', hi: '`NH₄OH` क्षारीय विलयन में गुलाबी रंग व `NaOH` में अपनी विशिष्ट गंध खोने वाला सही युग्म कौन-सा है?' },
        options: { en: ['Methyl orange + HCl', 'Phenolphthalein + Vanilla essence', 'Blue litmus + Sugar'], hi: ['मेथिल ऑरेंज + HCl', 'फिनॉल्फथेलिन (गुलाबी) + वैनिला एसेंस (गंध नष्ट)', 'नीला लिटमस + शर्करा'] },
        correctIndex: 1,
        reason: { en: 'Bases turn colourless phenolphthalein pink and mask vanilla/onion/clove odours (`NCERT Act 2.1 + Tech Gr-III PYQ`)!', hi: 'क्षारक फिनॉल्फथेलिन को गुलाबी करते हैं तथा गंधीय सूचकों (वैनिला/प्याज/लौंग) की गंध समाप्त कर देते हैं।' },
      },
    },
    {
      num: '2.3 & 2.4',
      title: { en: 'Zinc Granules + Dilute H₂SO₄ vs Warm NaOH (`Fig 2.1 Hydrogen Bubble Pop Test`)', hi: 'जिंक कण + तनु H₂SO₄ बनाम गर्म NaOH (`चित्र 2.1 हाइड्रोजन फट-फट दहन जाँच`)', },
      materials: { en: 'Test tube, Zinc granules, dil. H₂SO₄ / warm NaOH, delivery tube into soap dish, burning candle', hi: 'परखनली, दानेदार जिंक, तनु सल्फ्यूरिक अम्ल / NaOH घोल, साबुन विलयन व जलती मोमबत्ती' },
      steps: {
        en: 'Pass escaping gas bubbles into soap water forming gas-filled bubbles; bring burning candle near rising soap bubbles!',
        hi: 'निकलती गैस को साबुन के घोल में प्रवाहित कर बने बुलबुलों के पास जलती मोमबत्ती ले जाएँ व ध्वनि सुनें।',
      },
      examTakeaway: { en: 'Hydrogen bubbles explode cleanly with a sharp **POP sound (`फट-फट ध्वनि`)**! Zinc works with BOTH acid (`ZnSO₄ + H₂`) & hot `NaOH` (`Sodium Zincate Na₂ZnO₂ + H₂`, not all metals do!).', hi: 'हाइड्रोजन से भरे साबुन के बुलबुले **फट-फट (Pop) ध्वनि** के साथ जलते हैं; जिंक गर्म `NaOH` के साथ भी **सोडियम जिंकेट (`Na₂ZnO₂`) + H₂** बनाता है!' },
      predictQuestion: {
        prompt: { en: 'Warming Zinc granules with aqueous `NaOH` produces Hydrogen gas plus which Sodium salt (`Act 2.4 Eq`)?', hi: 'दानेदार जिंक को `NaOH` के साथ गर्म करने पर हाइड्रोजन गैस व कौन-सा लवण बनता है (`क्रियाकलाप 2.4`)?' },
        options: { en: ['Sodium Oxide (`Na₂O`)', 'Sodium Zincate (`Na₂ZnO₂`)', 'Sodium Carbonate (`Na₂CO₃`)'], hi: ['सोडियम ऑक्साइड', 'सोडियम जिंकेट (`Na₂ZnO₂`)', 'सोडियम कार्बोनेट'] },
        correctIndex: 1,
        reason: { en: '$2NaOH(aq) + Zn(s) \\to Na_2ZnO_2(s) + H_2(g)\\uparrow$ (`NCERT Page 21`)!', hi: '$2NaOH + Zn \\to Na_2ZnO_2\\text{ (सोडियम जिंकेट)} + H_2\\uparrow$ (`पृष्ठ 21`)!' },
      },
    },
    {
      num: '2.5',
      title: { en: 'Metal Carbonate/Bicarbonate + HCl -> `CO₂` Limewater Milkiness & Excess Clear Test (`Fig 2.2`)', hi: 'धातु कार्बोनेट/हाइड्रोजनकार्बोनेट + HCl से CO₂ व चूना-जल दूधिया जाँच (`चित्र 2.2`)', },
      materials: { en: 'Two tubes A (`Na₂CO₃`) & B (`NaHCO₃`), 2 mL dil. HCl, fresh Limewater `Ca(OH)₂`', hi: 'दो परखनलियाँ A (`Na₂CO₃`) व B (`NaHCO₃`), तनु HCl व ताजा चूने का पानी `Ca(OH)₂`' },
      steps: {
        en: 'Add dil. HCl; pipe brisk effervescing gas into fresh limewater (`turns milky!`); keep bubbling EXCESS gas (`milkiness vanishes!`).',
        hi: 'तनु HCl मिलाकर निकली बुदबुदाहट वाली गैस को चूने के पानी में भेजें व अधिक देर तक प्रवाहित कर बदलाव नोट करें।',
      },
      examTakeaway: { en: 'Initial **$CO_2$ forms insoluble white `$CaCO_3$` precipitate**; bubbling EXCESS `$CO_2$` converts precipitate into **soluble colorless `$Ca(HCO_3)_2$`**!', hi: 'प्रारंभिक `CO₂` से अघुलनशील श्वेत **`CaCO₃` (दूधिया)** बनता है; अधिक `CO₂` पर जल में विलेय **`Ca(HCO₃)₂`** बन जाने से दूधियापन समाप्त हो जाता है!' },
      predictQuestion: {
        prompt: { en: 'Why does milky limewater turn crystal CLEAR again when EXCESS `$CO_2$` is bubbled continuously?', hi: 'चूने के पानी में अधिक समय तक `CO₂` गैस गुजारने पर दूधिया रंग पुनः पारदर्शी क्यों हो जाता है?' },
        options: { en: ['Turns back to NaOH', 'Insoluble `CaCO₃` turns into **water-soluble `Ca(HCO₃)₂`**', 'Evaporates immediately'], hi: ['पुनः NaOH में बदलने से', 'श्वेत `CaCO₃` जल में **विलेयशील `Ca(HCO₃)₂`** में बदल जाता है!', 'सारा जल वाष्प बनने से'] },
        correctIndex: 1,
        reason: { en: '$CaCO_3(s) + H_2O(l) + CO_2(g) \\to Ca(HCO_3)_2(aq)$ (`soluble`, `NCERT p.22`)!', hi: '$CaCO_3 + H_2O + CO_2 \\to Ca(HCO_3)_2\\text{ (जल में विलेय)}$ (`पृष्ठ 22`)!' },
      },
    },
    {
      num: '2.6 & 2.7',
      title: { en: 'Phenolphthalein Neutralization Titration & Black `CuO` + HCl Blue-Green Salt (`p.22–23`)', hi: 'फिनॉल्फथेलिन उदासीनीकरण अनुमापन एवं काला `CuO` + HCl नील-हरित विलयन प्रयोग (`2.6–2.7`)', },
      materials: { en: 'NaOH soln, phenolphthalein drops, dil. HCl dropper; copper(II) oxide powder + HCl', hi: 'NaOH घोल, फिनॉल्फथेलिन, तनु HCl ड्रॉपर; काला कॉपर ऑक्साइड (`CuO`) चूर्ण' },
      steps: {
        en: '1. Turn NaOH pink with phenolphthalein -> drop HCl till pink vanishes -> add 1 drop NaOH bringing pink back!\n2. Stir black CuO slowly in dil. HCl watching crystal solution shift.',
        hi: '1. NaOH + फिनॉल्फथेलिन (गुलाबी) में बूंद-बूंद HCl डालें फिर 1 बूँद NaOH से गुलाबीपन जाँचें।\n2. काले `CuO` में धीरे-धीरे तनु HCl मिलाकर रंग बदलना देखें।',
      },
      examTakeaway: { en: 'Reversible pink titration proves `$H^+ + OH^- \\to H_2O$`! And `CuO + 2HCl -> CuCl₂ (Blue-Green) + H₂O` proves **Metal Oxides behave as BASIC Oxides**!', hi: 'रंग का आना-जाना उदासीनीकरण प्रमाणित करता है; तथा `CuO + 2HCl -> CuCl₂` (**नील-हरित**) सिद्ध करता है कि **धात्विक ऑक्साइड क्षारकीय** होते हैं!' },
      predictQuestion: {
        prompt: { en: 'Dissolving black Copper(II) oxide powder in dilute `HCl` turns the solution what characteristic colour (`Act 2.7`)?', hi: 'काले कॉपर ऑक्साइड (`CuO`) में तनु हाइड्रोक्लोरिक अम्ल मिलाने पर बना कॉपर(II) क्लोराइड विलयन किस रंग का दिखता है?' },
        options: { en: ['Brick Red', 'Blue-Green (`नील-हरित`)', 'Bright Yellow'], hi: ['ईंट जैसा लाल', 'नील-हरित (`Blue-Green`)', 'चमकीला पीला'] },
        correctIndex: 1,
        reason: { en: 'NCERT `p.23`: Formation of **Copper(II) Chloride (`CuCl₂`)** yields a distinct **blue-green (`नील-हरित`)** solution!', hi: 'अभिक्रिया में **कॉपर (II) क्लोराइड (`CuCl₂`)** बनने से विलयन **नील-हरित** हो जाता है (`पृष्ठ 23`)!' },
      },
    },
    {
      num: '2.8 & 2.9',
      title: { en: 'Electrical Conduction Circuit (`HCl vs Glucose/Alcohol`) & Dry HCl Gas Guard-Tube Test (`Fig 2.3–2.4`)', hi: 'विद्युत चालन जाँच (`HCl बनाम ग्लूकोज/एल्कोहल`) तथा शुष्क HCl गैस + आर्द्र लिटमस प्रयोग (`2.8–2.9`)', },
      materials: { en: '6V battery, bulb, switch, two nails on cork, dil. HCl/H₂SO₄, glucose, ethanol; solid NaCl + conc. H₂SO₄ + CaCl₂ guard tube + dry/wet blue litmus', hi: '6V बैटरी, बल्ब, कील कॉर्क, HCl, ग्लूकोज, एल्कोहल; ठोस NaCl, सांद्र H₂SO₄, CaCl₂ रक्षक नली व सूखा/गीला नीला लिटमस' },
      steps: {
        en: '1. Test 6V circuit bulb glow in HCl & H₂SO₄ vs Glucose & Ethanol.\n2. Pass HCl gas (through humid-guard CaCl₂) sequentially onto DRY blue litmus, then WET blue litmus.',
        hi: '1. HCl, ग्लूकोज व एल्कोहल में बल्ब जलना जाँचें।\n2. NaCl+H₂SO₄ से बनी HCl गैस (आर्द्र मौसम में CaCl₂ से सुखाकर) को पहले सूखे, फिर गीले नीले लिटमस पर गुजारें।',
      },
      examTakeaway: { en: 'Bulb glows ONLY in Acids/Bases (**free aqueous ions**) while Glucose/Alcohol stay un-ionized dark! **ONLY Wet Litmus turns RED** because $HCl$ splits into `$H_3O^+ + Cl^-$` solely in water!', hi: 'बल्ब केवल अम्ल/क्षार में जलता है (ग्लूकोज/एल्कोहल आयन न बनने से नहीं!) और **केवल आर्द्र (गीला) लिटमस लाल** होता है क्योंकि `$H_3O^+$` केवल जल में बनता है!' },
      predictQuestion: {
        prompt: { en: 'In a humid laboratory (`Act 2.9 Teacher Note`), why is evolved `HCl` gas routed through a tube containing **anhydrous Calcium Chloride (`CaCl₂`)**?', hi: 'अत्यधिक आर्द्र मौसम में `क्रियाकलाप 2.9` के दौरान HCl गैस को **कैल्शियम क्लोराइड (`CaCl₂`) नली** से क्यों गुजारा जाता है?' },
        options: { en: ['To colour HCl blue', 'To **absorb moisture & DRY the HCl gas** completely!', 'To convert HCl into NaOH'], hi: ['गैस को नीला रंग देने', 'गैस में मौजूद नमी सोखकर **उसे पूरी तरह शुष्क रखने हेतु**!', 'HCl को NaOH बनाने'] },
        correctIndex: 1,
        reason: { en: 'Anhydrous `CaCl₂` acts as a drying agent removing stray atmospheric moisture so dry-gas inactivity is demonstrated cleanly (`p.25`)!', hi: 'निर्जल कैल्शियम क्लोराइड (`CaCl₂`) आर्द्रता सोखकर गैस को शुष्क करता है जिससे बिना जल `H⁺` न निकलने का प्रमाण स्पष्ट दिखे (`पृ. 25`)।' },
      },
    },
    {
      num: '2.10',
      title: { en: 'Conc. `H₂SO₄` / `NaOH` in Water Dilution Thermal Check (`Warning Triangle Fig 2.5`)', hi: 'जल में सांद्र `H₂SO₄` / `NaOH` घोलने पर ऊष्माक्षेपी ताप परीक्षण (`चित्र 2.5 चेतावनी`)', },
      materials: { en: 'Beaker with 10 mL water, dropper conc. H₂SO₄ or NaOH pellets, stir rod', hi: '10 mL जल भरा बीकर, सांद्र सल्फ्यूरिक अम्ल ड्रॉपर / NaOH गोलियाँ' },
      steps: {
        en: 'Swirl water beaker continuously adding just a few drops of conc. acid slowly; immediately touch beaker bottom checking temperature!',
        hi: 'बीकर में रखे 10 mL जल को हिलाते हुए कुछ बूँदें सांद्र `H₂SO₄` डालें और तली को छूकर तापमान महसूस करें।',
      },
      examTakeaway: { en: 'Beaker heats up strongly (**Exothermic reaction**)! Adding water to conc. acid splashes boiling acid dangerously—so **ALWAYS add ACID slowly into WATER**!', hi: 'बीकर गर्म हो जाता है (**अत्यंत ऊष्माक्षेपी**)! अतः सदा **सांद्र अम्ल को धीरे-धीरे जल में मिलाना** चाहिए, न कि जल को अम्ल में!' },
      predictQuestion: {
        prompt: { en: 'As you dilute a `HCl` solution by slowly swirling it into extra water, what happens to the **`[H₃O⁺]` ion concentration PER UNIT VOLUME**?', hi: 'अम्ल विलयन का तनुकरण (`Dilution`) करने पर प्रति इकाई आयतन में **`H₃O⁺` आयनों की सांद्रता** पर क्या प्रभाव पड़ता है?' },
        options: { en: ['Increases sharply', 'Decreases per unit volume (`dilution`)', 'Stays identical'], hi: ['तेजी से बढ़ती है', 'प्रति इकाई आयतन में **कमी हो जाती है (`तनुकरण`)**!', 'अपरिवर्तित रहती है'] },
        correctIndex: 1,
        reason: { en: 'Dilution adds solvent volume spreading the fixed number of acid ions thinner -> per-unit-volume **`[H₃O⁺]` decreases** (`NCERT p.27`)!', hi: 'जल बढ़ाने से आयन अधिक आयतन में फैल जाते हैं, जिससे **प्रति इकाई आयतन सांद्रता घट जाती है (`तनुकरण`)**!' },
      },
    },
    {
      num: '2.11 & 2.12',
      title: { en: 'Universal pH Paper Assay (`Table 2.2`, 10 Substances) & Garden Soil pH Check (`p.28–29`)', hi: 'सार्वत्रिक pH पत्र से 10 दैनिक विलयनों (`सारणी 2.2`) व बगीचे की मिट्टी का pH परीक्षण', },
      materials: { en: 'Universal indicator strips, pre/post meal saliva, lemon, aerated drink, carrot, coffee, tomato, tap water, 1M NaOH/HCl, 2 g garden soil filtrate', hi: 'सार्वत्रिक pH पत्र, भोजन पूर्व/पश्चात लार, नींबू, वातित पेय, टमाटर, कॉफी, जल व 2g मिट्टी निस्यंद' },
      steps: {
        en: 'Match soaked paper colors against reference spectrum (`Fig 2.6`) for all `10` Table `2.2` liquids & soil filtrate (`2 g soil shaken in 5 mL water -> filtered`).',
        hi: 'सारणी 2.2 के सभी 10 द्रवों तथा पानी में घोली गई मिट्टी के निस्यंद पर pH पत्र का रंग व प्रकृति दर्ज करें।',
      },
      examTakeaway: { en: 'Post-meal mouth saliva grows **slightly acidic** from bacterial sugar fermentation (`dropping toward pH 5.5 -> tooth decay`); healthy garden crops demand near-neutral optimal soil pH!', hi: 'भोजन के बाद शर्करा निम्नीकरण से मुँह का pH थोड़ा अम्लीय होता है (`5.5 से नीचे दंत-क्षय!`); अच्छी फसल हेतु मिट्टी का विशिष्ट इष्टतम pH जरूरी है!' },
      predictQuestion: {
        prompt: { en: 'If a farmer discovers her field soil turned too **ACIDIC (`pH 4.8`)**, which NCERT soil additives treat it effectively (`p.31 Q4`)?', hi: 'यदि खेत की मिट्टी अत्यधिक **अम्लीय (`pH 4.8`)** हो जाए, तो किसान को क्या मिलाना चाहिए (`पृ. 31 प्रश्न 4`)?' },
        options: { en: ['Vinegar & Tamarind', 'Quicklime (`CaO`), Slaked lime (`Ca(OH)₂`), or Chalk (`CaCO₃`)', 'Hydrochloric acid'], hi: ['सिरका व इमली', 'बिना बुझा चूना (`CaO`), बुझा चूना (`Ca(OH)₂`) या चॉक (`CaCO₃`)', 'हाइड्रोक्लोरिक अम्ल'] },
        correctIndex: 1,
        reason: { en: 'All three (`CaO`, `Ca(OH)₂`, `CaCO₃`) are basic/alkaline compounds that neutralize excess soil acidity cleanly!', hi: 'तीनों क्षारकीय प्रकृति के होने से मिट्टी की अतिरिक्त अम्लता को उदासीन कर देते हैं!' },
      },
    },
    {
      num: '2.13 & 2.14',
      title: { en: 'Salt Family Grouping (`Act 2.13`) & Distilled-Water Salt Hydrolysis pH Assay (`Table 2.4`)', hi: 'लवण परिवार पहचान (`2.13`) तथा विभिन्न लवणों का pH जाँच प्रयोग (`क्रियाकलाप 2.14 & सारणी 2.4`)', },
      materials: { en: 'NaCl, KNO₃, AlCl₃, ZnSO₄, CuSO₄, CH₃COONa, Na₂CO₃, NaHCO₃ dissolved ONLY in Distilled Water + pH paper', hi: 'NaCl, KNO₃, AlCl₃, ZnSO₄, CuSO₄, CH₃COONa, Na₂CO₃, NaHCO₃ (केवल आसवित जल में) व pH पत्र' },
      steps: {
        en: 'Group salts by shared cations/anions (`Act 2.13`); dissolve salts cleanly in **distilled water** (`avoid tap water mineral interference!`) and read litmus + pH (`Act 2.14`).',
        hi: 'समान मूलक अनुसार परिवार बनाएं; सभी लवणों को **केवल आसवित जल** में घोलकर उनका pH व जनक अम्ल-क्षारक पहचानें।',
      },
      examTakeaway: { en: '`NaCl & KNO₃` test **`pH 7` (`neutral`)**; `AlCl₃, ZnSO₄, CuSO₄` test **`< 7` (`acidic`)**; `CH₃COONa, Na₂CO₃, NaHCO₃` test **`> 7` (`basic`)**!', hi: 'प्रबल-प्रबल (`NaCl, KNO₃`) = **`pH 7`**; प्रबल अम्ल-दुर्बल क्षार (`AlCl₃, CuSO₄, ZnSO₄`) = **`pH < 7`**; प्रबल क्षार-दुर्बल अम्ल (`Na₂CO₃, CH₃COONa`) = **`pH > 7`**!' },
      predictQuestion: {
        prompt: { en: 'Using **Sodium Acetate (`CH₃COONa`)** in distilled water, what parent acid & base formed it and will pH sit below, at, or above 7?', hi: 'सोडियम एसीटेट (`CH₃COONa`) किस अम्ल व क्षारक से बना है और इसका जलीय pH क्या होगा (`तालिका 2.4`)?' },
        options: { en: ['Strong acid + Weak base -> pH < 7', 'Weak Acetic acid (`CH₃COOH`) + Strong Base (`NaOH`) -> **pH > 7 (Basic ~9!)**', 'Strong + Strong -> pH = 7'], hi: ['प्रबल अम्ल + दुर्बल क्षार → pH < 7', 'दुर्बल ऐसीटिक अम्ल + प्रबल क्षार `NaOH` → **pH > 7 (क्षारीय ~9!)**', 'दोनों प्रबल → pH = 7'] },
        correctIndex: 1,
        reason: { en: 'Strong `NaOH` overpowers weak `CH₃COOH`, yielding a Basic Salt (`pH > 7`, `Group D Shift 46 PYQ!`)!', hi: 'प्रबल क्षार (`NaOH`) के प्रभाव से सोडियम एसीटेट का pH `7 से अधिक` (~9, क्षारीय) होता है!' },
      },
    },
    {
      num: '2.15',
      title: { en: 'Heating Blue Copper Sulphate (`CuSO₄·5H₂O`) -> White Anhydrous Salt + Reversible Drops (`Fig 2.9`)', hi: 'नीले कॉपर सल्फेट (`CuSO₄·5H₂O`) को गर्म कर क्रिस्टलन का जल हटाना व वापस नीला करना (`2.15`)', },
      materials: { en: 'Dry boiling tube, test-tube tongs, Bunsen burner, blue Copper Sulphate crystals (`CuSO₄·5H₂O`), dropper of water', hi: 'शुष्क क्वथन नली, चिमटा, बर्नर, कॉपर सल्फेट के नीले क्रिस्टल व जल ड्रॉपर' },
      steps: {
        en: 'Heat dry-looking blue crystals over flame checking tube walls for water droplets & colour change; cool and sprinkle `2–3 drops` of water onto white powder!',
        hi: 'शुष्क क्वथन नली में क्रिस्टल गर्म कर दीवार पर पानी की बूँदें व रंग परिवर्तन देखें; ठंडा कर 2–3 बूँद जल डालें।',
      },
      examTakeaway: { en: 'Driving off `5H₂O` bleaches blue crystals **WHITE** (`and condenses water droplets inside glass`); adding 2–3 water drops **re-hydrates back to vivid BLUE** instantly!', hi: 'क्रिस्टलन के 5 जल अणु निकलते ही **नीला रंग श्‍वेत** हो जाता है व नली की दीवार पर पानी की बूँदें दिखती हैं; **2–3 बूँद जल डालते ही नीला रंग लौट आता है**!' },
      predictQuestion: {
        prompt: { en: 'Dry crystals of Washing Soda (`Na₂CO₃·10H₂O`) & Gypsum (`CaSO₄·2H₂O`) feel dry to touch—why (`NCERT p.35`)?', hi: 'हाथ से छूने पर शुष्क लगने वाले धावन सोडा (`10H₂O`) व कॉपर सल्फेट (`5H₂O`) क्रिस्टल गीले (आर्द्र) क्यों नहीं दिखते?' },
        options: { en: ['Water formula number is fake', 'Water of crystallization is **chemically bound fixed inside crystal lattice** (`NOT free wet liquid!`)', 'Sun dried them'], hi: ['अणुसूत्र काल्पनिक हैं', '**क्रिस्टलन का जल क्रिस्टल जालक में रासायनिक रूप से बंधा** होता है (`गीला मुक्त जल नहीं`)!', 'धूप से सूख जाता है'] },
        correctIndex: 1,
        reason: { en: 'Water of crystallization (`e.g., 10H₂O, 5H₂O, 2H₂O`) sits stoichiometrically bound inside dry solid crystal structures—released only on heating!', hi: 'क्रिस्टलन के जल अणु लवण की एक सूत्र इकाई के भीतर रासायनिक रूप से बंधे होते हैं, अतः क्रिस्टल देखने में पूर्णतः शुष्क रहते हैं।' },
      },
    },
    {
      num: 'Project II',
      title: { en: 'DIY Soda-Acid Fire Extinguisher (`NaHCO₃ + Dilute H₂SO₄ Ignition Bottle Fig 2.10`)', hi: 'सोडा-अम्ल अग्निशामक मॉडल (`NaHCO₃ + तनु सल्फ्यूरिक अम्ल से CO₂` — चित्र 2.10)', },
      materials: { en: 'Wash bottle (`20 mL NaHCO₃ soln`), hanging small ignition tube (`dil. H₂SO₄`) on thread, nozzle, candle', hi: 'धावन बोतल (`20 mL NaHCO₃`), धागे से लटकी `H₂SO₄` ज्वलन नली, नोजल व जलती मोमबत्ती' },
      steps: {
        en: 'Close nozzle stopper tightly & tilt bottle mixing H₂SO₄ with NaHCO₃ -> point pressurized fizzing nozzle toward a burning candle!',
        hi: 'बोतल बंद कर झुकाने से दोनों विलयन मिलते हैं — नोजल से निकलती बुदबुदाहट जलती मोमबत्ती की ओर करें।',
      },
      examTakeaway: { en: 'Acid-bicarbonate reaction generates dense blanket of non-supporter **`$CO_2$` gas**, displacing Oxygen & immediately snuffing flames (`Group D Shift 33 PYQ!`)!', hi: 'तुरंत बनी भारी **`CO₂` गैस** ऑक्सीजन का संपर्क काटकर (विस्थापित कर) आग को बुझा देती है (`Group D Shift 33 PYQ!`)।' },
      predictQuestion: {
        prompt: { en: 'Why is Sodium Hydrogencarbonate (`Baking Soda NaHCO₃`) chosen over `Na₂CO₃` in fire extinguishers (`Group D Shift 3`)?', hi: 'अग्निशामक यंत्रों में सोडियम कार्बोनेट की तुलना में **बेकिंग सोडा (`NaHCO₃`)** को प्राथमिकता क्यों दी जाती है?' },
        options: { en: ['Releases Oxygen', 'Reacts rapidly & effortlessly with acid releasing abundant `CO₂` gas!', 'Forms icy foam directly'], hi: ['ऑक्सीजन गैस बनाता है', 'अम्ल के साथ अत्यंत आसानी व शीघ्रता से भरपूर **`CO₂` गैस** मुक्त करता है!', 'सीधे बर्फ बना देता है'] },
        correctIndex: 1,
        reason: { en: '`NaHCO₃` decomposes easily even on mild acid contact (`1 mol acid -> 1 mol CO₂` swiftly), starving fire of Oxygen cleanly!', hi: 'बेकिंग सोडा अम्ल से तुरंत अभिक्रिया करके तेजी से `CO₂` मुक्त करता है जो ऑक्सीजन को विस्थापित कर आग बुझाती है (`पृष्ठ 34 व 39`)!' },
      },
    },
  ],

  tables: [
    {
      id: 'table-2-1-indicators-all-9',
      title: { en: 'NCERT Table 2.1 COMPLETE — All 9 Acids & Bases Across All 4 Indicators (`Color Key Verified!`)', hi: 'NCERT सारणी 2.1 संपूर्ण हल — सभी 9 प्रयोगशाला अम्लों व क्षारकों का चारों सूचकों पर सटीक रंग परिवर्तन' },
      headers: {
        en: ['Test Solution (`Formula`)', 'Nature', 'Red Litmus', 'Blue Litmus', 'Phenolphthalein', 'Methyl Orange'],
        hi: ['विलयन का नमूना (`सूत्र`)', 'प्रकृति', 'लाल लिटमस', 'नीला लिटमस', 'फिनॉल्फथेलिन', 'मेथिल ऑरेंज'],
      },
      rows: [
        [{ en: 'HCl, H₂SO₄, HNO₃, CH₃COOH (`4 Acids`)', hi: 'HCl, H₂SO₄, HNO₃, CH₃COOH (`4 अम्ल`)' }, { en: 'Acidic (`< 7`)', hi: 'अम्लीय' }, { en: 'No change (`Red`)', hi: 'कोई बदलाव नहीं' }, { en: '**RED**', hi: '**लाल**' }, { en: '**Colourless**', hi: '**रंगहीन**' }, { en: '**RED**', hi: '**लाल / गहरा गुलाबी**' }],
        [{ en: 'NaOH, KOH, Ca(OH)₂, Mg(OH)₂, NH₄OH (`5 Bases`)', hi: 'NaOH, KOH, Ca(OH)₂, Mg(OH)₂, NH₄OH (`5 क्षारक`)' }, { en: 'Basic (`> 7`)', hi: 'क्षारकीय' }, { en: '**BLUE**', hi: '**नीला**' }, { en: 'No change (`Blue`)', hi: 'कोई बदलाव नहीं' }, { en: '**PINK (`गुलाबी`)**', hi: '**गुलाबी (`Pink`)**' }, { en: '**YELLOW (`पीला`)**', hi: '**पीला (`Yellow`)**' }],
      ],
    },
    {
      id: 'table-2-2-ph-reference',
      title: { en: 'NCERT Table 2.2 & Fig 2.7 COMPLETE — Everyday Reference pH Chart (`Exam Memorization`)', hi: 'NCERT सारणी 2.2 व चित्र 2.7 — दैनिक पदार्थों के मानक pH मान व प्रकृति संपूर्ण सूची' },
      headers: {
        en: ['Substance / Biological Medium', 'Approx. NCERT pH (`Color`)', 'Acidic / Neutral / Basic (`CBT Key Note`)'],
        hi: ['पदार्थ / जैविक माध्यम', 'लगभग मानक pH', 'प्रकृति व परीक्षा टिप्पणी'],
      },
      rows: [
        [{ en: '1M HCl / Gastric Juice (`जठर रस`)', hi: '1M HCl / जठर रस' }, { en: '**`~0 – 1.2`** (`Deep Red`)', hi: '**`~0 – 1.2`** (`गहरा लाल`)' }, { en: 'Strong Acid (`Stomach digestion HCl — PYQ #21`)' }],
        [{ en: 'Lemon Juice / Clear Aerated Drink / Vinegar', hi: 'नींबू का रस / रंगहीन वातित पेय / सिरका' }, { en: '**`~2.2 – 3.5`** (`Red-Orange`)', hi: '**`~2.2 – 3.5`** (`लाल-नारंगी`)' }, { en: 'Acidic (`Citric / Carbonic / Acetic acid`)' }],
        [{ en: 'Coffee / Tomato Juice / Carrot Juice', hi: 'कॉफी / टमाटर का रस / गाजर का रस' }, { en: '**`~4.1 – 6.0`** (`Orange-Yellow`)', hi: '**`~4.1 – 6.0`** (`पीला`)' }, { en: 'Mildly Acidic (`Oxalic in Tomato; <5.5 Mouth Tooth Decay!`)' }],
        [{ en: 'Saliva (Before meal vs After meal) & Fresh Milk', hi: 'लार (`भोजन पहले ~7.4, बाद ~5.8`) / ताजा दूध' }, { en: '**`Before ~7.4 | After ~5.8 | Milk ~6.0`**', hi: '**`पहले 7.4 | बाद 5.8 | दूध 6`**' }, { en: 'After meal & milk acidity (`Milk -> Curd pH drops < 6`)' }],
        [{ en: 'Distilled / Tap Water & Human Blood (`Body 7.0–7.8`)', hi: 'शुद्ध जल (`7.0`) | शरीर (`7.0–7.8`) | रक्त' }, { en: '**`7.0`** (`Green`) | **`7.4`** (`Blood`)', hi: '**`7.0`** (`हरा`) | रक्त **`7.4`**' }, { en: 'Neutral Water (`no ions -> insulator!`); Healthy blood (`7.4`)' }],
        [{ en: 'Milk of Magnesia `[Mg(OH)₂]` & `1M NaOH`', hi: 'मिल्क ऑफ मैग्नीशिया `[Mg(OH)₂]` व `1M NaOH`' }, { en: '**`10.0`** (`Blue`) | **`~14.0`** (`Violet`)', hi: '**`10.0`** (`नीला`) | **`14.0`** (`बैंगनी`)' }, { en: 'Mild Antacid Base (`10`) vs Strongest Alkali (`14`)' }],
      ],
    },
    {
      id: 'table-2-3-natural-acids',
      title: { en: 'NCERT Table 2.3 Exact — Naturally Occurring Organic Acids (`All 8 Sources!`)', hi: 'NCERT सारणी 2.3 संपूर्ण — प्राकृतिक स्रोतों में उपस्थित कार्बनिक अम्ल' },
      headers: {
        en: ['Natural Source (`Left Column`)', 'Acid Present', 'Natural Source (`Right Column`)', 'Acid Present'],
        hi: ['प्राकृतिक स्रोत', 'उपस्थित अम्ल', 'प्राकृतिक स्रोत', 'उपस्थित अम्ल'],
      },
      rows: [
        [{ en: 'Vinegar (`सिरका`)', hi: 'सिरका' }, { en: '**Acetic acid** (`CH₃COOH`)', hi: '**एसीटिक अम्ल**' }, { en: 'Sour Milk / Curd (`खट्टा दूध/दही`)', hi: 'खट्टा दूध (दही)' }, { en: '**Lactic acid**', hi: '**लैक्टिक अम्ल**' }],
        [{ en: 'Orange (`संतरा`)', hi: 'संतरा' }, { en: '**Citric acid**', hi: '**सिट्रिक अम्ल**' }, { en: 'Lemon (`नींबू`)', hi: 'नींबू' }, { en: '**Citric acid**', hi: '**सिट्रिक अम्ल**' }],
        [{ en: 'Tamarind (`इमली`)', hi: 'इमली' }, { en: '**Tartaric acid**', hi: '**टार्टरिक अम्ल**' }, { en: 'Ant Sting (`चींटी का डंक`)', hi: 'चींटी का डंक (`मधुमक्खी भी`)' }, { en: '**Methanoic / Formic acid**', hi: '**मेथैनॉइक अम्ल**' }],
        [{ en: 'Tomato (`टमाटर`)', hi: 'टमाटर' }, { en: '**Oxalic acid**', hi: '**ऑक्सैलिक अम्ल**' }, { en: 'Nettle Sting (`नेटल का डंक`)', hi: 'नेटल का डंक (`डॉक पौधा इलाज`)' }, { en: '**Methanoic / Formic acid**', hi: '**मेथैनॉइक अम्ल**' }],
      ],
    },
    {
      id: 'table-2-4-salt-hydrolysis',
      title: { en: 'NCERT Table 2.4 & Activity 2.13–2.14 — Salt Parent Identification & Aqueous pH', hi: 'NCERT सारणी 2.4 व क्रियाकलाप 2.14 — प्रमुख लवणों का pH, जनक अम्ल एवं क्षारक' },
      headers: {
        en: ['Salt Sample (`Formula`)', 'Parent Acid + Base', 'Solution pH (`Rule`)'],
        hi: ['लवण का नाम (`रासायनिक सूत्र`)', 'प्रयुक्त जनक अम्ल + क्षारक', 'विलयन का pH व प्रकृति'],
      },
      rows: [
        [{ en: 'Sodium Chloride (`NaCl`) / Potassium Nitrate (`KNO₃`) / `Na₂SO₄`', hi: 'सोडियम क्लोराइड (`NaCl`) / `KNO₃` / `Na₂SO₄`' }, { en: 'Strong Acid (`HCl/HNO₃/H₂SO₄`) + Strong Base (`NaOH/KOH`)', hi: 'प्रबल अम्ल + प्रबल क्षारक' }, { en: '**`pH = 7`** (**Neutral / उदासीन**)' }],
        [{ en: 'Ammonium Chloride (`NH₄Cl`) / `AlCl₃` / `ZnSO₄` / `CuSO₄`', hi: 'अमोनियम क्लोराइड (`NH₄Cl`) / `AlCl₃` / `ZnSO₄` / `CuSO₄`' }, { en: 'Strong Acid (`HCl/H₂SO₄`) + Weak Base (`NH₄OH/Cu(OH)₂/Al(OH)₃`)', hi: 'प्रबल अम्ल + दुर्बल क्षारक' }, { en: '**`pH < 7`** (**Acidic / अम्लीय**)' }],
        [{ en: 'Sodium Carbonate (`Na₂CO₃`) / Sodium Acetate (`CH₃COONa`) / `NaHCO₃`', hi: 'सोडियम कार्बोनेट (`Na₂CO₃`) / सोडियम ऐसीटेट / `NaHCO₃`' }, { en: 'Weak Acid (`H₂CO₃/CH₃COOH`) + Strong Base (`NaOH`)', hi: 'दुर्बल अम्ल + प्रबल क्षारक' }, { en: '**`pH > 7`** (**Basic / क्षारकीय**, ~8–11)' }],
      ],
    },
    {
      id: 'table-2-5-five-compounds',
      title: { en: '5 Industrial Salts from NaCl: Formulas (`2026 NCERT!`), Preparation & Top CBT Uses', hi: 'साधारण नमक (NaCl) से बने 5 औद्योगिक यौगिक — सूत्र, निर्माण समीकरण एवं समस्त परीक्षा उपयोग' },
      headers: {
        en: ['Common & Chemical Name', 'Exact Formula', 'NCERT Preparation Reaction', 'Must-Know Exam Uses'],
        hi: ['प्रचलित व रासायनिक नाम', 'मानक सूत्र', 'NCERT निर्माण समीकरण', 'प्रमुख परीक्षा उपयोग'],
      },
      rows: [
        [{ en: 'Caustic Soda (`Sodium Hydroxide`)', hi: 'कास्टिक सोडा (`सोडियम हाइड्रॉक्साइड`)' }, { en: '**$NaOH$**', hi: '**$NaOH$**' }, { en: '$2NaCl(aq)+2H_2O \\to 2NaOH+Cl_2(\\text{Anode})+H_2(\\text{Cathode})$', hi: 'क्लोर-क्षार: कैथोड पर $H_2$, एनोड पर $Cl_2$' }, { en: 'Metal de-greasing, Soap, Detergent, Paper, Artificial fibres!' }],
        [{ en: 'Bleaching Powder (`Calcium Hypochlorite`)', hi: 'विरंजक चूर्ण (`नया 2026 सूत्र`)' }, { en: '**$Ca(ClO)_2$** (`legacy: CaOCl₂`)', hi: '**$Ca(ClO)_2$** (`पुराना CaOCl₂`)' }, { en: '$2Ca(OH)_2 + 2Cl_2 \\to Ca(ClO)_2 + 2H_2O + CaCl_2$', hi: 'शुष्क बुझा चूना `[Ca(OH)₂]` + `Cl₂` गैस' }, { en: 'Bleaching cotton/linen/pulp/laundry, **Oxidising agent**, Water disinfection!' }],
        [{ en: 'Baking Soda (`Sodium Hydrogencarbonate`)', hi: 'बेकिंग सोडा (`सोडियम बाइकार्बोनेट`)' }, { en: '**$NaHCO_3$**', hi: '**$NaHCO_3$**' }, { en: '$NaCl+H_2O+CO_2+NH_3 \\to NH_4Cl+NaHCO_3$', hi: 'गर्म करने पर $Na_2CO_3 + H_2O + CO_2$' }, { en: 'Crispy pakoras, **+ Tartaric acid = Baking powder**, Antacid, Soda-Acid fire extinguisher!' }],
        [{ en: 'Washing Soda (`Sodium Carbonate Decahydrate`)', hi: 'धोने का सोडा (`धावन सोडा`)' }, { en: '**$Na_2CO_3 \\cdot 10H_2O$**', hi: '**$Na_2CO_3 \\cdot 10H_2O$**' }, { en: '$Na_2CO_3 + 10H_2O \\to Na_2CO_3\\cdot 10H_2O$', hi: 'बेकिंग सोडा गर्म कर `Na₂CO₃` का पुन: क्रिस्टलीकरण' }, { en: 'Glass, Soap & Paper (`PYQ!`), **Borax** production, Cleaning, **Removes Permanent Water Hardness**!' }],
        [{ en: 'Plaster of Paris (`Calcium Sulphate Hemihydrate`)', hi: 'प्लास्टर ऑफ पेरिस (`POP`)' }, { en: '**$CaSO_4 \\cdot \\frac{1}{2}H_2O$**', hi: '**$CaSO_4 \\cdot \\frac{1}{2}H_2O$**' }, { en: '$CaSO_4\\cdot 2H_2O \\xrightarrow{373\\text{ K}} CaSO_4\\cdot\\frac{1}{2}H_2O + 1\\frac{1}{2}H_2O$', hi: 'जिप्सम को `373 K` पर गर्म करके (जल $\\to$ कठोर जिप्सम)' }, { en: 'Setting fractured bones, Toys, Decor, Smoothing walls (`store airtight!`)!' }],
      ],
    },
    {
      id: 'table-2-6-crystallization-hydrates',
      title: { en: 'Water of Crystallization Complete Hydrates Table (`Sec 2.4.4`)', hi: 'क्रिस्टलन के जल अणुओं की संपूर्ण तालिका (`भाग 2.4.4`)' },
      headers: {
        en: ['Hydrated Salt Name', 'Formula (`Fixed Water Units`)', 'Water Count', 'Heating / Rehydration Change'],
        hi: ['जलीय लवण नाम', 'मानक सूत्र', 'जल अणु संख्या', 'गर्म / जल मिलाने पर परिवर्तन'],
      },
      rows: [
        [{ en: 'Hydrated Copper Sulphate (`Blue Vitriol`)', hi: 'नीला कॉपर सल्फेट (`नीला थोथा`)' }, { en: '$CuSO_4 \\cdot 5H_2O$', hi: '$CuSO_4 \\cdot 5H_2O$' }, { en: '**`5`**', hi: '**`5`**' }, { en: 'Blue turns **WHITE (`CuSO₄`)** when heated; 2–3 water drops restore Blue!' }],
        [{ en: 'Washing Soda', hi: 'धावन सोडा' }, { en: '$Na_2CO_3 \\cdot 10H_2O$', hi: '$Na_2CO_3 \\cdot 10H_2O$' }, { en: '**`10`**', hi: '**`10`**' }, { en: '10 molecules bound cleanly; dry solid crystals (not damp/wet!).' }],
        [{ en: 'Gypsum', hi: 'जिप्सम' }, { en: '$CaSO_4 \\cdot 2H_2O$', hi: '$CaSO_4 \\cdot 2H_2O$' }, { en: '**`2`**', hi: '**`2`**' }, { en: 'Heated @ **`373 K`** -> loses `1½ H₂O` forming white POP powder!' }],
        [{ en: 'Plaster of Paris (`POP`)', hi: 'प्लास्टर ऑफ पेरिस' }, { en: '$CaSO_4 \\cdot \\frac{1}{2}H_2O$', hi: '$CaSO_4 \\cdot \\frac{1}{2}H_2O$' }, { en: '**`½`** (`1 H₂O` shared by 2 `CaSO₄`)', hi: '**`½`** (`आधा अणु`)' }, { en: 'Mixing `1½ H₂O` hardens rapidly back to rock-solid Gypsum!' }],
      ],
    },
  ],

  inTextQuestions: [
    { num: 'Think Q1 (p.19)', q: { en: 'Three test tubes hold Distilled Water, Acid, and Base; ONLY one Red Litmus strip is given. How do you identify all three?', hi: 'पृष्ठ 19 प्रश्न 1: तीन परखनलियों में आसवित जल, अम्लीय व क्षारीय विलयन हैं। केवल एक लाल लिटमस पत्र से तीनों की पहचान कैसे करेंगे?' }, a: { en: 'Dip Red Litmus sequentially into all three tubes: **tube turning strip BLUE = Base**. Now dip that **BLUE strip** into the remaining two: **tube turning it back to RED = Acid**; the untouched **third tube leaving BLUE unchanged = Distilled Water**!', hi: 'लाल लिटमस को बारी-बारी तीनों में डालें — **जो उसे नीला करे वह क्षारकीय विलयन है**। अब उस **नीले हुए लिटमस** को शेष दो में डालें — **जो उसे फिर लाल कर दे वह अम्लीय**, तथा जिसमें **रंग न बदले वह उदासीन आसवित जल** है!' } },
    { num: 'Think Q2 (p.23)', q: { en: 'Why shouldn’t curd and sour substances be stored in Brass or Copper vessels?', hi: 'पृष्ठ 23 प्रश्न 1: पीतल एवं ताँबे के बर्तनों में दही एवं खट्टे पदार्थ क्यों नहीं रखने चाहिए?' }, a: { en: 'Curd (`lactic acid`) and sour foods contain organic acids which react chemically with copper and brass (`Cu–Zn alloy`), producing **toxic metallic salts & hydrogen** that spoil food and cause food poisoning!', hi: 'दही (लैक्टिक अम्ल) व खट्टे पदार्थों में अम्ल होते हैं जो ताँबे व पीतल धातु से अभिक्रिया करके **विषैले धातु लवण** बनाते हैं, जिससे भोजन खराब व स्वास्थ्य के लिए हानिकारक हो जाता है।' } },
    { num: 'Think Q3 (p.23)', q: { en: 'Which gas usually evolves when an acid reacts with a metal? Illustrate cleanly with reaction & test.', hi: 'पृष्ठ 23 प्रश्न 2: धातु के साथ अम्ल की अभिक्रिया में सामान्यतः कौन-सी गैस निकलती है? उदाहरण व जाँच बताएं।' }, a: { en: '**Hydrogen gas (`$H_2$`)** evolves! Example: $Zn(s) + H_2SO_4(aq) \\to ZnSO_4(aq) + H_2(g)\\uparrow$. **Test:** Pipe bubbles into soap water & hold a burning candle nearby -> burns with a **sharp POP sound**!', hi: '**हाइड्रोजन (`$H_2$`) गैस** निकलती है (`उदा: Zn + H₂SO₄ -> ZnSO₄ + H₂↑`)। जाँच हेतु गैस को साबुन के घोल से गुजारकर बुलबुलों के पास जलती मोमबत्ती लाने पर वह **फट-फट ध्वनि** के साथ जलती है!' } },
    { num: 'Think Q4 (p.23)', q: { en: 'Metal compound `A` reacts with dil. HCl releasing brisk gas that extinguishes a burning candle. If Calcium Chloride forms, write balanced equation.', hi: 'पृष्ठ 23 प्रश्न 3: धातु यौगिक ‘A’ तनु HCl से बुदबुदाहट द्वारा जलती मोमबत्ती बुझाने वाली गैस व कैल्शियम क्लोराइड बनाता है। संतुलित समीकरण लिखें।' }, a: { en: 'Gas extinguishing candle = **$CO_2$**; compound `A` = **Calcium Carbonate (`$CaCO_3$`)**.\nEquation: **$CaCO_3(s) + 2HCl(aq) \\to CaCl_2(aq) + H_2O(l) + CO_2(g)\\uparrow$**!', hi: 'यौगिक A **कैल्शियम कार्बोनेट (`CaCO₃`)** है एवं गैस **CO₂** है:\nसमीकरण: **$CaCO_3(s) + 2HCl(aq) \\to CaCl_2(aq) + H_2O(l) + CO_2(g)\\uparrow$**!' } },
    { num: 'Think Q5–Q7 (p.27)', q: { en: 'p.27 Q1–Q3: Why are HCl/HNO₃ acidic in water while Alcohol/Glucose aren’t? Why do aqueous acids conduct electricity? Why doesn’t dry HCl gas turn dry litmus red?', hi: 'पृष्ठ 27 प्रश्न 1–3: HCl/HNO₃ अम्लीय हैं पर ग्लूकोज-एल्कोहल क्यों नहीं? जलीय अम्ल विद्युत चालन क्यों करते हैं? शुष्क HCl शुष्क लिटमस क्यों नहीं बदलती?' }, a: { en: '**(1)** HCl & HNO₃ ionize producing free **$H^+(aq)/H_3O^+$**, whereas Alcohol/Glucose do not release `H⁺` ions. **(2)** Free dissolved **ions (`H₃O⁺`, `Cl⁻`, etc.)** carry electric charge! **(3)** Without water, dry HCl molecules CANNOT dissociate `$H^+$` ions (`no H₃O⁺`)!', hi: '**(1)** HCl/HNO₃ जल में **$H^+(aq)$** आयन बनाते हैं जबकि ग्लूकोज-एल्कोहल आयनीकृत नहीं होते। **(2)** मुक्त आयनों के प्रवाह से विद्युत चालन होता है। **(3)** जल की अनुपस्थिति में शुष्क HCl से `H⁺` अलग नहीं हो पाते!' } },
    { num: 'Think Q8–Q10 (p.27)', q: { en: 'p.27 Q4–Q6: Why add Acid to Water (not Water to Acid)? How does dilution affect `[H₃O⁺]`? How does adding excess base affect `[OH⁻]`?', hi: 'पृष्ठ 27 प्रश्न 4–6: अम्ल को जल में क्यों मिलाते हैं? तनुकरण पर `[H₃O⁺]` व आधिक्य क्षारक मिलाने पर `[OH⁻]` सांद्रता पर क्या प्रभाव पड़ेगा?' }, a: { en: '**(4)** Dissolution is fiercely exothermic; adding water into acid boils liquid splashing acid out & cracking glass! **(5)** Adding water lowers **`[H₃O⁺]` per unit volume (`dilution`)**. **(6)** Dissolving excess solid/strong `NaOH` **INCREASES `[OH⁻]` concentration per unit volume**!', hi: '**(4)** ऊष्माक्षेपी विस्फोट/छींटों से बचने हेतु अम्ल को धीरे जल में डालते हैं। **(5)** तनुकरण से प्रति इकाई आयतन **`H₃O⁺` सांद्रता घटती है**। **(6)** आधिक्य क्षारक (`NaOH`) मिलाने पर **`OH⁻` सांद्रता बढ़ जाती है** (`जबतक संतृप्त न हो`)!' } },
    { num: 'Think Q11–Q14 (p.31)', q: { en: 'p.31 Q1–Q4: (1) Solution A `pH=6` vs B `pH=8`—more `[H⁺]`, acid vs base? (2) Effect of `[H⁺]`? (3) Do basic solutions have `H⁺(aq)` too? (4) Acidic soil treatment with CaO/Ca(OH)₂/CaCO₃?', hi: 'पृष्ठ 31 प्रश्न 1–4: (1) `pH 6` बनाम `pH 8` — `[H⁺]` व प्रकृति? (2) `H⁺` सांद्रता का प्रभाव? (3) क्या क्षार में भी `H⁺` होते हैं? (4) किसान चूना/चॉक कब उपयोग करेगा?' }, a: { en: '**(1) Solution A (`pH=6`) has MORE `[H⁺]`** & is **Acidic**; **B (`pH=8`) is Basic**. **(2)** Higher `[H⁺]` increases acidity & lowers pH! **(3) YES!** Basic solutions still contain small `[H⁺](aq)` ions (`water auto-ionization`), yet **`[OH⁻] >> [H⁺]`**, keeping them alkaline! **(4)** Farmer adds basic `CaO`, `Ca(OH)₂`, or `CaCO₃` ONLY when field soil turns **excessively ACIDIC**!', hi: '**(1) विलयन A (`pH 6`) में अधिक `[H⁺]`** व यह **अम्लीय** है; **B (`pH 8`) क्षारकीय**। **(2)** `[H⁺]` बढ़ने पर अम्लता बढ़ती व pH घटता है। **(3) हाँ**, क्षारकीय विलयनों में भी `H⁺` होते हैं किंतु **`OH⁻` की सांद्रता बहुत अधिक** होने से वे क्षारकीय होते हैं! **(4)** जब मिट्टी **अत्यधिक अम्लीय** हो जाए!' } },
    { num: 'Think Q15–Q19 (p.36)', q: { en: 'p.36 Q1–Q5: (1) Common name of `Ca(ClO)₂`? (2) Reactant with `Cl₂` making bleaching powder? (3) Sodium compound softening hard water? (4) Effect + eq of heating `NaHCO₃`? (5) Eq of POP + water!', hi: 'पृष्ठ 36 प्रश्न 1–5: (1) `Ca(ClO)₂` का प्रचलित नाम? (2) क्लोरीन से क्रिया कर विरंजक चूर्ण बनाने वाला पदार्थ? (3) कठोर जल मृदु करने वाला सोडियम यौगिक? (4) `NaHCO₃` गर्म करने का समीकरण? (5) POP + जल समीकरण!' }, a: { en: '**(1) Bleaching Powder (`विरंजक चूर्ण`, 2026 NCERT!)**. **(2) Dry Slaked Lime [`Ca(OH)₂`]**. **(3) Washing Soda (`$Na_2CO_3 \\cdot 10H_2O$`)**. **(4)** Decomposes into Sodium Carbonate, Water & `$CO_2$`: **$2NaHCO_3 \\xrightarrow{\\Delta} Na_2CO_3 + H_2O + CO_2\\uparrow$**! **(5)** Sets into hard Gypsum: **$CaSO_4\\cdot\\frac{1}{2}H_2O + 1\\frac{1}{2}H_2O \\to CaSO_4\\cdot 2H_2O$**!', hi: '**(1) विरंजक चूर्ण (`Bleaching Powder`)**। **(2) शुष्क बुझा हुआ चूना [`Ca(OH)₂`]**। **(3) धोने का सोडा (`Na₂CO₃·10H₂O`)**। **(4) `$2NaHCO_3 \\xrightarrow{\\text{ऊष्मा}} Na_2CO_3 + H_2O + CO_2$`!** **(5) `$CaSO_4\\cdot\\frac{1}{2}H_2O + 1\\frac{1}{2}H_2O \\to CaSO_4\\cdot 2H_2O$ (कठोर जिप्सम)**!' } },
  ],

  exercises: [
    { num: 1, q: { en: 'Ex Q1: A solution turns Red Litmus BLUE—its probable pH is: `(a) 1`, `(b) 4`, `(c) 5`, `(d) 10`?', hi: 'अभ्यास 1: कोई विलयन लाल लिटमस को नीला कर देता है, इसका pH संभवतः क्या होगा — `(a) 1, (b) 4, (c) 5, (d) 10`?' }, a: { en: '**`(d) 10`!** Turning Red Litmus BLUE proves the solution is **Basic (`alkaline`, pH > 7)**.', hi: '**`(d) 10`!** लाल लिटमस को नीला करने का अर्थ विलयन क्षारकीय है (`pH > 7`)!' } },
    { num: 2, q: { en: 'Ex Q2: Solution reacts with crushed egg-shells evolving a gas that turns limewater milky. Solution contains: `(a) NaCl`, `(b) HCl`, `(c) LiCl`, `(d) KCl`?', hi: 'अभ्यास 2: कोई विलयन अंडे के पिसे कवच से अभिक्रिया कर चूने के पानी को दूधिया करने वाली गैस बनाता है — विलयन में क्या है (`a-d`)?' }, a: { en: '**`(b) HCl`!** Egg-shell consists of Calcium Carbonate (**`$CaCO_3$`**), which reacts with Acid **`HCl`** releasing **$CO_2$** that turns limewater milky.', hi: '**`(b) HCl`!** अंडे का कवच `CaCO₃` है जो अम्ल **`HCl`** से क्रिया कर `CO₂` गैस देता है!' } },
    { num: 3, q: { en: 'Ex Q3: `10 mL` of `NaOH` is completely neutralized by `8 mL` of `HCl`. How much of the SAME `HCl` solution neutralizes `20 mL` of the SAME `NaOH`? `(a) 4 mL`, `(b) 8 mL`, `(c) 12 mL`, `(d) 16 mL`?', hi: 'अभ्यास 3: `10 mL NaOH` विलयन `8 mL HCl` से पूर्णतः उदासीन होता है। `20 mL NaOH` को उदासीन करने हेतु कितना HCl लगेगा?' }, a: { en: '**`(d) 16 mL`!** Direct proportional stoichiometry: doubling `NaOH` (`10 -> 20 mL`) requires doubling `HCl` (`8 × 2 = 16 mL`)!', hi: '**`(d) 16 mL`!** `NaOH` की मात्रा दोगुनी (`10 → 20 mL`) करने पर आवश्यक HCl भी ठीक दोगुना (`8 × 2 = 16 mL`) होगा!' } },
    { num: 4, q: { en: 'Ex Q4: Medicine used for treating indigestion (`अम्लता/अपच`) is: `(a) Antibiotic`, `(b) Analgesic`, `(c) Antacid`, `(d) Antiseptic`?', hi: 'अभ्यास 4: अपच का उपचार करने हेतु प्रयुक्त औषधि है — `(a) एंटीबायोटिक`, `(b) एनालजेसिक`, `(c) एंटैसिड`, `(d) एंटीसेप्टिक`?' }, a: { en: '**`(c) Antacid` (`ऐन्टैसिड`)**, e.g., **Milk of Magnesia (`$Mg(OH)_2$`)** or Baking Soda (`$NaHCO_3$`), neutralizing excess stomach HCl.', hi: '**`(c) ऐन्टैसिड (Antacid)`** — जैसे **मिल्क ऑफ मैग्नीशिया `[Mg(OH)₂]`**!' } },
    { num: 5, q: { en: 'Ex Q5: Write word + balanced chemical equations: `(a)` dil. H₂SO₄ + Zn, `(b)` dil. HCl + Mg, `(c)` dil. H₂SO₄ + Al powder, `(d)` dil. HCl + Iron filings.', hi: 'अभ्यास 5 (शब्द व संतुलित समीकरण): (a) तनु H₂SO₄ + Zn, (b) तनु HCl + Mg, (c) तनु H₂SO₄ + Al चूर्ण, (d) तनु HCl + लौह रेतन।' }, a: { en: '(a) $Zn + H_2SO_4 \\to ZnSO_4 + H_2\\uparrow$\n(b) $Mg + 2HCl \\to MgCl_2 + H_2\\uparrow$\n(c) $2Al + 3H_2SO_4 \\to Al_2(SO_4)_3 + 3H_2\\uparrow$\n(d) $Fe + 2HCl \\to FeCl_2 + H_2\\uparrow$', hi: '(a) जिंक + सल्फ्यूरिक अम्ल $\\to$ जिंक सल्फेट + H₂ ($Zn + H_2SO_4 \\to ZnSO_4 + H_2$)\n(b) मैग्नीशियम + 2HCl $\\to MgCl_2 + H_2$\n(c) $2Al + 3H_2SO_4 \\to Al_2(SO_4)_3 + 3H_2$\n(d) $Fe + 2HCl \\to FeCl_2 + H_2$' } },
    { num: 6, q: { en: 'Ex Q6: Compounds like Alcohol & Glucose contain Hydrogen yet aren’t categorized as Acids. Describe an activity proving this.', hi: 'अभ्यास 6: एल्कोहल एवं ग्लूकोज में हाइड्रोजन होते हुए भी उनका वर्गीकरण अम्ल में क्यों नहीं होता — क्रियाकलाप द्वारा सिद्ध करें।' }, a: { en: 'Run **Activity 2.8 (`Fig 2.3`)**: Insert two nails on a cork inside a beaker connected to a `6V` battery + bulb + switch. Fill with `HCl` -> **bulb glows brightly** (`free H⁺ & Cl⁻ ions`); replace cleanly with Glucose/Alcohol -> **bulb NEVER glows**, proving they stay un-ionized without freeing `$H^+(aq)$`!', hi: '**क्रियाकलाप 2.8 (`चित्र 2.3`):** 6V बैटरी व बल्ब परिपथ युक्त बीकर में पहले `HCl` डालने पर **बल्ब जल उठता है** (`मुक्त H⁺ व Cl⁻ आयन`), परंतु **ग्लूकोज या एल्कोहल में बल्ब नहीं जलता** — सिद्ध होता है कि ये जल में **`H⁺(aq)` आयन मुक्त नहीं करते**!' } },
    { num: 7, q: { en: 'Ex Q7: Why doesn’t Distilled Water conduct electricity whereas Rain Water does?', hi: 'अभ्यास 7: आसवित जल विद्युत का चालक क्यों नहीं होता, जबकि वर्षा जल होता है?' }, a: { en: '**Distilled water (`pure H₂O`)** lacks dissolved mineral/ionic salts -> virtually zero free ions -> **non-conductor**. **Rainwater** dissolves atmospheric gases (`CO₂ -> H₂CO₃ carbonic acid`, etc.), creating free **ions** (`H⁺, HCO₃⁻`) carrying current!', hi: '**आसवित जल** पूर्णतः शुद्ध होने से उसमें घुले हुए आयनिक लवण/अम्ल नहीं होते अतः मुक्त आयन शून्य रहते हैं; जबकि **वर्षा जल** में वायुमंडलीय `CO₂` आदि घुलकर अम्लीय आयन बना देते हैं जिनसे विद्युत प्रवाहित होती है!' } },
    { num: 8, q: { en: 'Ex Q8: Why don’t dry acids (dry HCl gas) exhibit acidic behavior without water?', hi: 'अभ्यास 8: जल की अनुपस्थिति में अम्ल (`शुष्क HCl गैस`) का व्यवहार अम्लीय क्यों नहीं होता?' }, a: { en: 'Acidity depends strictly on forming aqueous **`$H^+(aq) / H_3O^+$`** ions (`Act 2.9`). Without water molecules to stabilize hydronium ions, HCl gas molecules stay unionized and leave dry blue litmus unchanged!', hi: 'अम्लीय गुण केवल जलीय विलयन में **`H⁺(aq) / H₃O⁺`** आयन बनने से प्रकट होते हैं। जल के बिना HCl के अणु वियोजित न हो पाने से वे शुष्क लिटमस का रंग नहीं बदलते!' } },
    { num: 9, q: { en: 'Ex Q9: Solutions A, B, C, D, E have pH `4, 1, 11, 7, 9`. Identify `(a)` Neutral, `(b)` Strongly alkaline, `(c)` Strongly acidic, `(d)` Weakly acidic, `(e)` Weakly alkaline + Increasing `[H⁺]` order.', hi: 'अभ्यास 9: विलयन A(`4`), B(`1`), C(`11`), D(`7`), E(`9`) में से (a) उदासीन, (b) प्रबल क्षारीय, (c) प्रबल अम्लीय, (d) दुर्बल अम्लीय, (e) दुर्बल क्षारीय चुनें व `H⁺` सांद्रता के आरोही क्रम लिखें।' }, a: { en: '**(a) `D (7)`**, **(b) `C (11)`**, **(c) `B (1)`**, **(d) `A (4)`**, **(e) `E (9)`**.\n**Increasing `[H⁺]` concentration** (`highest pH first -> lowest pH last!`): **`C (11) < E (9) < D (7) < A (4) < B (1)`**!', hi: '**(a) D(`7`), (b) C(`11`), (c) B(`1`), (d) A(`4`), (e) E(`9`)**।\n`[H⁺]` का बढ़ता (आरोही) क्रम: **`11 (C) < 9 (E) < 7 (D) < 4 (A) < 1 (B)`**!' } },
    { num: 10, q: { en: 'Ex Q10: Equal Mg strips sit in Tube A (`HCl`) & Tube B (`CH₃COOH`) of identical volume/molarity. Where does fizzing occur MORE vigorously and why?', hi: 'अभ्यास 10: समान Mg पट्टी परखनली A (`HCl`) व B (`CH₃COOH`, समान मात्रा व सांद्रता) में डाली गई। किसमें तेज बुदबुदाहट होगी व क्यों?' }, a: { en: '**Tube A (`HCl`)** fizzes far more vigorously! Because **HCl is a Strong Acid** ionizing completely into far higher **`[H⁺]`** ion concentration than weak Acetic acid (`CH₃COOH`), accelerating `Mg + 2HCl -> MgCl₂ + H₂↑`!', hi: '**परखनली A (`HCl`) में अधिक तेजी से बुदबुदाहट (`H₂`) होगी**, क्योंकि **HCl प्रबल अम्ल** होने से समान सांद्रता पर `CH₃COOH` की तुलना में बहुत अधिक **`H⁺` आयन** उत्पन्न करता है!' } },
    { num: 11, q: { en: 'Ex Q11: Fresh milk has `pH 6`. How will its pH change when it turns into curd? Explain.', hi: 'अभ्यास 11: ताजे दूध का pH मान `6` होता है। दही बन जाने पर इसके pH मान में क्या परिवर्तन होगा? समझाइए।' }, a: { en: 'As milk curdles into curd, **Lactic Acid** forms—increasing acidity (`more [H⁺]`) and **DROPPING pH BELOW 6** (`typically ~4.5–5.5`)!', hi: 'दही बनने पर बैक्टीरिया **लैक्टिक अम्ल** उत्पन्न करते हैं जिससे अम्लता बढ़ने के कारण **pH घटकर 6 से कम** (`लगभग 4.5–5.5`) हो जाएगा!' } },
    { num: 12, q: { en: 'Ex Q12: A milkman adds a pinch of Baking Soda to fresh milk: `(a)` Why shift pH slightly alkaline (`from 6`)? `(b)` Why does this milk take LONGER to set as curd?', hi: 'अभ्यास 12: ग्वाला ताजे दूध में थोड़ा बेकिंग सोडा मिलाता है — (a) pH `6` से थोड़ा क्षारीय क्यों बनाता है? (b) इसे दही बनने में अधिक समय क्यों लगता है?' }, a: { en: '**(a)** Shifting slightly above `6` (`mildly alkaline`) neutralizes early lactic acid production, **preventing milk from turning sour/spoiling fast**. **(b)** To turn into curd, lactic bacteria must first produce extra lactic acid just to **neutralize the added Baking Soda** before acidifying milk down to curdling pH (`taking much longer!`)!', hi: '**(a)** ताकि दूध में बनने वाला प्रारंभिक लैक्टिक अम्ल उदासीन होता रहे व दूध जल्दी खट्टा/खराब न हो।\n**(b)** दही जमाने हेतु लैक्टिक अम्ल को पहले मिलाए गए क्षारीय **बेकिंग सोडा को उदासीन करना पड़ता है**, जिससे अम्लीकरण में अधिक समय लगता है!' } },
    { num: 13, q: { en: 'Ex Q13: Why MUST Plaster of Paris (`CaSO₄·½H₂O`) be stored in moisture-proof containers?', hi: 'अभ्यास 13: प्लास्टर ऑफ पेरिस को आर्द्र-रोधी (moisture-proof) बर्तन में क्यों रखा जाना चाहिए?' }, a: { en: 'If exposed to moisture/water vapour, Plaster of Paris quickly absorbs `1½ H₂O` and sets irreversibly into a **rock-hard solid mass of Gypsum (`$CaSO_4\\cdot 2H_2O$`)**, rendering the stored powder useless for molding/casting!', hi: 'नमी के संपर्क में आते ही POP जल अवशोषित करके **$CaSO_4\\cdot\\frac{1}{2}H_2O + 1\\frac{1}{2}H_2O \\to CaSO_4\\cdot 2H_2O$ (कठोर जिप्सम)** बन कर जम जाता है व अनुपयोगी हो जाता है!' } },
    { num: 14, q: { en: 'Ex Q14: What is a Neutralization reaction? Give two balanced examples.', hi: 'अभ्यास 14: उदासीनीकरण अभिक्रिया क्या है? दो संतुलित उदाहरण दीजिए।' }, a: { en: 'An Acid and a Base react cancelling each other’s properties to yield **Salt & Water** (`$H^+ + OH^- \\to H_2O$`):\n1. **$NaOH(aq) + HCl(aq) \\to NaCl(aq) + H_2O(l)$**\n2. **$KOH(aq) + HNO_3(aq) \\to KNO_3(aq) + H_2O(l)$**', hi: 'जब अम्ल व क्षारक परस्पर क्रिया कर एक-दूसरे के प्रभाव को समाप्त कर **लवण एवं जल** बनाते हैं (`$H^+ + OH^- \\to H_2O$`):\n1. `$NaOH + HCl \\to NaCl + H_2O$`\n2. `$2KOH + H_2SO_4 \\to K_2SO_4 + 2H_2O$`' } },
    { num: 15, q: { en: 'Ex Q15: List two important uses EACH of Washing Soda and Baking Soda.', hi: 'अभ्यास 15: धोने का सोडा एवं बेकिंग सोडा के दो-दो प्रमुख उपयोग बताएं।' }, a: { en: '**Washing Soda (`Na₂CO₃·10H₂O`):** (1) **Glass, soap & paper industries** (`& borax`); (2) **Removing permanent hardness of water** (`& cleaning`).\n**Baking Soda (`NaHCO₃`):** (1) **Antacid ingredient** (`& crispy pakoras / baking powder with tartaric acid`); (2) **Soda-Acid Fire Extinguisher**!', hi: '**धोने का सोडा:** (1) काँच, साबुन व कागज उद्योग में; (2) जल की स्थायी कठोरता हटाने व घरेलू सफाई में।\n**बेकिंग सोडा:** (1) टार्टरिक अम्ल संग **बेकिंग पाउडर** व एंटैसिड औषधि के रूप में; (2) **सोडा-अम्ल अग्निशामक** यंत्रों में!' } },
  ],

  flashcards: [
    { front: { en: 'Plant & Division source of Litmus solution (`original colour`)?', hi: 'लिटमस विलयन किस पौधे व समूह से मिलता है (मूल रंग)?' }, back: { en: 'Lichen (Thallophyta division) • Original pure dye = PURPLE!', hi: 'लिचेन (थैलोफाइटा समूह) • उदासीन मूल रंग = बैंगनी (Purple)!' } },
    { front: { en: 'Phenolphthalein vs Methyl Orange colours in Acid & Base?', hi: 'फिनॉल्फथेलिन व मेथिल ऑरेंज का अम्ल बनाम क्षार में रंग?' }, back: { en: 'Phenolphthalein: Acid Colourless, Base PINK | Methyl: Acid RED, Base YELLOW', hi: 'फिनॉल: अम्ल रंगहीन, क्षार गुलाबी | मेथिल ऑरेंज: अम्ल लाल, क्षार पीला' } },
    { front: { en: 'New 2026 NCERT Formula vs Legacy Formula for Bleaching Powder?', hi: 'विरंजक चूर्ण का नया 2026 NCERT सूत्र व निर्माण अभिक्रिया?' }, back: { en: 'Ca(ClO)₂ [2026 NCERT] / CaOCl₂ [legacy] • Dry Ca(OH)₂ + Cl₂!', hi: 'Ca(ClO)₂ [नया 2026] / CaOCl₂ [पुराना] • शुष्क Ca(OH)₂ + Cl₂!' } },
    { front: { en: 'Brine Electrolysis (`Chlor-Alkali`) products at Anode vs Cathode?', hi: 'क्लोर-क्षार (Brine) अपघटन में एनोड (+) व कैथोड (−) पर क्या निकलता है?' }, back: { en: 'Anode (+): Cl₂ gas | Cathode (−): H₂ gas + NaOH nearby!', hi: 'एनोड (+): Cl₂ गैस | कैथोड (−): H₂ गैस (पास ही NaOH घोल)!' } },
    { front: { en: 'CRITICAL pH Marks: Gastric, Tooth Decay, Acid Rain, Blood?', hi: '4 पक्के परीक्षा pH: जठर रस, दंत-क्षय, अम्ल वर्षा, रक्त?' }, back: { en: 'Gastric 1.2 | Tooth Decay <5.5 | Acid Rain <5.6 | Blood 7.4 (Body 7.0–7.8)!', hi: 'जठर 1.2 | दंत-क्षय <5.5 | अम्ल वर्षा <5.6 | रक्त 7.4 (शरीर 7.0–7.8)!' } },
    { front: { en: 'Hardest Substance in Human Body (Tooth Enamel chemical)?', hi: 'मानव शरीर का सबसे कठोर पदार्थ (दाँत इनैमल रासायनिक नाम)?' }, back: { en: 'Calcium Hydroxyapatite (crystalline calcium phosphate)!', hi: 'कैल्शियम हाइड्रोक्सीएपेटाइट (कैल्शियम फॉस्फेट का क्रिस्टलीय रूप)!' } },
    { front: { en: 'Acid in Ant Sting, Nettle Hair, Tomato & Tamarind?', hi: 'चींटी/नेटल डंक, टमाटर व इमली में कौन-सा अम्ल पाया जाता है?' }, back: { en: 'Sting: Methanoic | Tomato: Oxalic | Tamarind: Tartaric | Curd: Lactic!', hi: 'डंक: मेथैनॉइक | टमाटर: ऑक्सैलिक | इमली: टार्टरिक | दही: लैक्टिक!' } },
    { front: { en: 'What is Baking Powder (`vs Baking Soda`)?', hi: 'बेकिंग सोडा व बेकिंग पाउडर में मुख्य अंतर क्या है?' }, back: { en: 'Baking Powder = Baking Soda (NaHCO₃) + Edible Tartaric Acid!', hi: 'बेकिंग पाउडर = बेकिंग सोडा (NaHCO₃) + टार्टरिक अम्ल का मिश्रण!' } },
    { front: { en: 'Washing Soda formula & Water Hardness role?', hi: 'धावन सोडा का सूत्र व कठोर जल में उपयोग?' }, back: { en: 'Na₂CO₃ · 10H₂O • Removes PERMANENT hardness of water!', hi: 'Na₂CO₃ · 10H₂O • जल की स्थायी कठोरता हटाने में प्रयुक्त!' } },
    { front: { en: 'Gypsum vs Plaster of Paris temperature & hydration reaction?', hi: 'जिप्सम से Plaster of Paris किस ताप पर बनता है व सूत्र अंतर?' }, back: { en: 'Gypsum (2H₂O) heated @ 373 K -> POP (½H₂O) | + 1½ H₂O -> hard Gypsum!', hi: 'जिप्सम (2H₂O) 373 K पर → POP (½H₂O) | + 1½ H₂O → कठोर जिप्सम!' } },
  ],

  pyqBank: [
    {
      id: 1,
      examTag: 'RRB Tech Gr-III 2024 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Olfactory Indicators',
      question: {
        en: 'Which of the following is the olfactory indicator to check the acidic or basic nature of the substance?',
        hi: 'निम्नलिखित में से कौन पदार्थ की अम्लीय या क्षारीय प्रकृति की जांच करने के लिए गंधीय सूचक (olfactory indicator) है?',
      },
      options: {
        en: ['Red litmus', 'Phenolphthalein', 'Methyl orange', 'Vanilla essence'],
        hi: ['लाल लिटमस (Red litmus)', 'फीनॉल्फ्थेलीन (Phenolphthalein)', 'मेथिल ऑरेंज (Methyl orange)', 'वेनिला एसेंस (Vanilla essence)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Vanilla essence, chopped onion, and clove oil act as olfactory indicators (`losing odour in base NaOH`, NCERT Act 2.1).',
        hi: 'वैनिला एसेंस, प्याज और लौंग का तेल गंधीय सूचक हैं जिनकी गंध क्षारक में गायब हो जाती है (क्रियाकलाप 2.1)।',
      },
    },
    {
      id: 2,
      examTag: 'RRB ALP 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Chlor-Alkali',
      question: {
        en: 'During the chlor-alkali process, which of the following statements is correct regarding the products formed at different electrodes?',
        hi: 'क्लोर-क्षार प्रक्रिया के दौरान, विभिन्न इलेक्ट्रोडों पर निर्मित होने वाले उत्पादों के संबंध में निम्नलिखित में से कौन- सा कथन सही है?',
      },
      options: {
        en: [
          'Sodium hydroxide and hydrogen gas both form at the anode.',
          'Chlorine gas is released at the cathode and hydrogen gas at the anode.',
          'Hydrogen gas is released at the cathode and chlorine gas at the anode.',
          'Sodium hydroxide is formed at the anode and chlorine gas at the cathode.',
        ],
        hi: [
          'ऐनोड पर सोडियम हाइड्रॉक्साइड और हाइड्रोजन गैस, दोनों निर्मित होती हैं।',
          'कै थोड पर क्लोरीन गैस तथा ऐनोड पर हाइड्रोजन गैस विमुक्त होती है।',
          'कै थोड पर हाइड्रोजन गैस तथा ऐनोड पर क्लोरीन गैस विमुक्त होती है।',
          'ऐनोड पर सोडियम हाइड्रॉक्साइड और कै थोड पर क्लोरीन गैस निर्मित होती है।',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'In brine electrolysis (`NCERT Fig 2.8`), **`H₂` (`+` cation H⁺ reduced) forms at negative Cathode**, while **`Cl₂` (`−` anion Cl⁻ oxidized) forms at positive Anode**!',
        hi: 'क्लोर-क्षार प्रक्रिया में **कैथोड पर हाइड्रोजन (`H₂`) गैस व ऐनोड पर क्लोरीन (`Cl₂`) गैस** मुक्त होती है (चित्र 2.8)।',
      },
    },
    {
      id: 3,
      examTag: 'RRB Group D 2025 Shift 38',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Chlor-Alkali Cathode',
      question: {
        en: 'Which of the following is a product formed at the cathode during the electrolysis of brine?',
        hi: 'निम्नलिखित में से कौन - सा , लवण - जल (brine) के विद्युत - अपघटन के दौरान कै थोड पर बनने वाला उत्पाद है ?',
      },
      options: {
        en: ['Sodium metal', 'Hydrogen gas', 'Chlorine gas', 'Oxygen gas'],
        hi: ['सोडियम धातु', 'हाइड्रोजन गैस', 'क्लोरीन गैस', 'ऑक्सीजन गैस'],
      },
      correctIndex: 1,
      solution: {
        en: 'Hydrogen gas releases cleanly at the Cathode alongside aqueous `NaOH` (`NCERT Sec 2.4.3 p.33`).',
        hi: 'लवण-जल (Brine) के विद्युत अपघटन में कैथोड पर **हाइड्रोजन गैस** बनती है (`पृष्ठ 33`)।',
      },
    },
    {
      id: 4,
      examTag: 'RRB Tech Gr-III 2024 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Chlor-Alkali Equation',
      question: {
        en: 'Which products are formed in the chlor-alkali process when electricity is passed through an aqueous sodium chloride solution?\n$\\text{NaCl(aq)} + \\text{H}_2\\text{O(l)} \\rightarrow \\text{Products}$',
        hi: 'जब जलीय सोडियम क्लोराइड विलयन से बिजली प्रवाहित की जाती है तो क्लोर-क्षार प्रक्रिया (chlor-alkali process) में कौन-से उत्पाद बनते हैं?\n$\\text{NaCl(जलीय)} + \\text{H}_2\\text{O(l)} \\rightarrow \\text{उत्पाद}$',
      },
      options: {
        en: ['$\\text{NaHCO}_3 + \\text{Cl}_2$', '$\\text{NaCl} + \\text{H}_2$', '$\\text{H}_2 + \\text{O}_2$', '$\\text{NaOH} + \\text{H}_2 + \\text{Cl}_2$'],
        hi: ['$\\text{NaHCO}_3 + \\text{Cl}_2$', '$\\text{NaCl} + \\text{H}_2$', '$\\text{H}_2 + \\text{O}_2$', '$\\text{NaOH} + \\text{H}_2 + \\text{Cl}_2$'],
      },
      correctIndex: 3,
      solution: {
        en: 'Full reaction: $2NaCl(aq) + 2H_2O(l) \\to 2NaOH(aq) + H_2(g) + Cl_2(g)$ (`NCERT p.33`).',
        hi: 'संपूर्ण क्लोर-क्षार उत्पाद: **$\\text{NaOH} + \\text{H}_2 + \\text{Cl}_2$** (`पृष्ठ 33`)।',
      },
    },
    {
      id: 5,
      examTag: 'RRB Tech Gr-III 2024 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Chlor-Alkali Balanced Equation',
      question: {
        en: 'Select the correct chemical reaction that represents the chlor-alkali process.',
        hi: 'उस सही रासायनिक अभिक्रिया का चयन कीजिए जो क्लोर-क्षार प्रक्रिया (chlor-alkali process) को दर्शाती है।',
      },
      options: {
        en: [
          '$2\\text{KCl(aq)} + 2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{KOH(aq)} + \\text{Cl}_2\\text{(g)} + \\text{H}_2\\text{(g)}$',
          '$2\\text{MgCl}_2\\text{(aq)} + 2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{Mg(OH)}_2\\text{(aq)} + \\text{Cl}_2\\text{(g)} + \\text{H}_2\\text{(g)}$',
          '$2\\text{CaCl}_2\\text{(aq)} + 2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{Ca(OH)}_2\\text{(aq)} + \\text{Cl}_2\\text{(g)} + \\text{H}_2\\text{(g)}$',
          '$2\\text{NaCl(aq)} + 2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{NaOH(aq)} + \\text{Cl}_2\\text{(g)} + \\text{H}_2\\text{(g)}$',
        ],
        hi: [
          '$2\\text{KCl(aq)} + 2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{KOH(aq)} + \\text{Cl}_2\\text{(g)} + \\text{H}_2\\text{(g)}$',
          '$2\\text{MgCl}_2\\text{(aq)} + 2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{Mg(OH)}_2\\text{(aq)} + \\text{Cl}_2\\text{(g)} + \\text{H}_2\\text{(g)}$',
          '$2\\text{CaCl}_2\\text{(aq)} + 2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{Ca(OH)}_2\\text{(aq)} + \\text{Cl}_2\\text{(g)} + \\text{H}_2\\text{(g)}$',
          '$2\\text{NaCl(aq)} + 2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{NaOH(aq)} + \\text{Cl}_2\\text{(g)} + \\text{H}_2\\text{(g)}$',
        ],
      },
      correctIndex: 3,
      solution: {
        en: 'Exact balanced NCERT equation (`p.33`): $2NaCl(aq) + 2H_2O(l) \\to 2NaOH(aq) + Cl_2(g) + H_2(g)$.',
        hi: 'NCERT पृ. 33 मानक समीकरण: $2\\text{NaCl(aq)} + 2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{NaOH(aq)} + \\text{Cl}_2\\text{(g)} + \\text{H}_2\\text{(g)}$।',
      },
    },
    {
      id: 6,
      examTag: 'RRB Tech Gr-III 2024 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: pH Scale',
      question: {
        en: 'The pH value of the neutral solution is ________.',
        hi: 'उदासीन विलयन का pH मान ______ होता है।',
      },
      options: { en: ['7', '5', '14', '0'], hi: ['7', '5', '14', '0'] },
      correctIndex: 0,
      solution: {
        en: 'Neutral solutions (`[H⁺] = [OH⁻]`) sit cleanly at **`pH = 7`** (`NCERT Fig 2.6`).',
        hi: 'किसी भी उदासीन विलयन का मानक pH मान **`7`** होता है।',
      },
    },
    {
      id: 7,
      examTag: 'RRB Tech Gr-III 2024 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: pH Ion Scale',
      question: {
        en: 'Which of the following ion concentrations is measured by the pH scale?',
        hi: 'निम्नलिखित में से किस आयन सांद्रताओं को pH पैमाने पर मापा जाता है?',
      },
      options: {
        en: ['$\\text{Na}^+$ ion concentration', '$\\text{F}^-$ ion concentration', '$\\text{Cl}^-$ ion concentration', '$\\text{H}^+$ ion concentration'],
        hi: ['$\\text{Na}^+$ आयन सांद्रता', '$\\text{F}^-$ आयन सांद्रता', '$\\text{Cl}^-$ आयन सांद्रता', '$\\text{H}^+$ आयन सांद्रता'],
      },
      correctIndex: 3,
      solution: {
        en: 'pH scale directly measures Hydrogen ion `$\\text{H}^+(aq)$` concentration (`Sec 2.3 p.27`).',
        hi: 'pH पैमाना विलयन में हाइड्रोजन आयन (**`$\\text{H}^+$`**) सांद्रता को मापता है।',
      },
    },
    {
      id: 8,
      examTag: 'RRB Tech Gr-III 2024 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: pH Definition',
      question: {
        en: 'Select the option that completes the given sentence correctly.\nThe pH scale is used to measure the level of ________ of a solution.',
        hi: 'निम्नलिखित में से उस विकल्प का चयन कीजिए जो दिए गए वाक्य को सही ढंग से पूरा करता है।\npH पैमाने का उपयोग किसी विलयन के ________ स्तर को मापने के लिए किया जाता है।',
      },
      options: {
        en: ['acidity or basicity', 'pollution', 'density', 'volume'],
        hi: ['अम्लता या क्षारीयता', 'प्रदूषण', 'घनत्व', 'आयतन'],
      },
      correctIndex: 0,
      solution: {
        en: 'pH scale quantifies solution **acidity or basicity** across `0–14` (`NCERT p.27–28`).',
        hi: 'pH पैमाना विलयन की **अम्लता या क्षारीयता** का स्तर मापता है (`0–14`)।',
      },
    },
    {
      id: 9,
      examTag: 'RRB Tech Gr-III 2024 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Gastric pH',
      question: {
        en: 'The pH of gastric juice is ______.',
        hi: 'जठर रस का pH मान ______ होता है।',
      },
      options: { en: ['1.2', '2.2', '7.4', '10.0'], hi: ['1.2', '2.2', '7.4', '10.0'] },
      correctIndex: 0,
      solution: {
        en: 'Exact NCERT Fig 2.7 (`p.28`) numbers: **Gastric juice = `1.2`**, Lemon = `2.2`, Blood = `7.4`, Milk of Magnesia = `10.0`!',
        hi: 'NCERT चित्र 2.7 मान: **जठर रस = `1.2`**, नींबू = `2.2`, रक्त = `7.4`, मिल्क ऑफ मैग्नीशिया = `10`!',
      },
    },
    {
      id: 10,
      examTag: 'RRB Tech Gr-III 2024 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Biological pH Ranges',
      question: {
        en: 'Which of the following pairs is correct in terms of pH values?\n(a) Tooth decay in humans: pH of mouth > 5.5\n(b) pH range of human body: 7.0 to 7.8\n(c) Acid rain: pH of rain water > 8',
        hi: 'pH मान के संदर्भ में निम्नलिखित में से कौन-सा युग्म सही है?\n(a) मनुष्यों में दंत क्षय: मुंह का pH > 5.5\n(b) मानव शरीर की pH सीमा: 7.0 से 7.8\n(c) अम्ल वर्षा: वर्षा जल का pH > 8',
      },
      options: {
        en: ['Only (b) is correct.', 'Only (c) is correct.', 'Only (a) is correct.', '(a), (b) and (c) are correct.'],
        hi: ['केवल (b) सही है।', 'केवल (c) सही है।', 'केवल (a) सही है।', '(a), (b) और (c) सही हैं।'],
      },
      correctIndex: 0,
      solution: {
        en: 'Human body works in `7.0–7.8` `(b TRUE)`! Both Tooth decay (`< 5.5`, NOT `>5.5`) and Acid rain (`< 5.6`, NOT `>8`) flipped signs (`NCERT Sec 2.3.1`).',
        hi: 'मानव शरीर **`7.0 से 7.8`** सीमा में कार्य करता है (`b सत्य`); दंत-क्षय (`<5.5`) व अम्ल वर्षा (`<5.6`) होती है!',
      },
    },
    {
      id: 11,
      examTag: 'RRB Tech Gr-III 2024 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: pH 10 Ions',
      question: {
        en: 'A student in a lab noted the pH value of a solution to be 10. Which of the following statements is correct about a solution?',
        hi: 'प्रयोगशाला में एक छात्र ने एक विलयन का pH मान 10 लिखा। उस विलयन के बारे में निम्नलिखित में से कौन-सा कथन सही है?',
      },
      options: {
        en: [
          'A solution is basic with a high hydrogen ion concentration.',
          'A solution is basic with a high hydroxide ion concentration.',
          'A solution is acidic with a high hydrogen ion concentration.',
          'A solution is acidic with a high hydroxide ion concentration.',
        ],
        hi: [
          'हाइड्रोजन आयन की उच्च सांद्रता वाला विलयन क्षारीय होता है।',
          'हाइड्रॉक्साइड आयन की उच्च सांद्रता वाला विलयन क्षारीय होता है।',
          'हाइड्रोजन आयन की उच्च सांद्रता वाला विलयन अम्लीय होता है।',
          'हाइड्रॉक्साइड आयन की उच्च सांद्रता वाला विलयन अम्लीय होता है।',
        ],
      },
      correctIndex: 1,
      solution: {
        en: '`pH = 10 (> 7)` indicates a Basic solution possessing **high Hydroxide (`$OH^-$`) ion concentration** (`NCERT Fig 2.6`).',
        hi: 'pH `10` (`>7`) दर्शाता है कि विलयन **उच्च हाइड्रॉक्साइड (`OH⁻`) आयन सांद्रता युक्त क्षारीय** है।',
      },
    },
    {
      id: 12,
      examTag: 'RRB Group D 2025 Shift 46',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Bee Sting Cure',
      question: {
        en: 'Which substance would best help neutralize the burning sensation caused by a bee sting containing methanoic acid?',
        hi: 'मेथेनोइक अम्ल युक्त मधुमक्खी के डंक के कारण दाह संवेदन (burning sensation) को निष्प्रभावित करने में कौन - सा पदार्थ सर्वाधिक सहायक होगा ?',
      },
      options: {
        en: ['Tamarind solution', 'Mild baking soda solution', 'Mild vinegar solution', 'Lemon juice'],
        hi: ['इमली का विलयन', 'तनु बेकिंग सोडा विलयन', 'तनु सिरका विलयन', 'नींबू का रस'],
      },
      correctIndex: 1,
      solution: {
        en: 'NCERT `p.30` directly prescribes mild basic **Baking Soda (`$NaHCO_3$`)** to neutralize Methanoic acid from bee stings!',
        hi: 'NCERT पृ. 30: मेथैनॉइक अम्ल के डंक को शांत करने हेतु दुर्बल क्षारक **बेकिंग सोडा** उपयोग होता है।',
      },
    },
    {
      id: 13,
      examTag: 'RRB Tech Gr-III 2024 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Antacid',
      question: {
        en: 'Which of the following compounds is used as an antacid?',
        hi: 'निम्नलिखित में से किस यौगिक का उपयोग प्रति-अम्ल (antacid) के रूप में किया जाता है?',
      },
      options: {
        en: ['Calcium oxide', 'Magnesium hydroxide', 'Sodium chloride', 'Calcium hydroxide'],
        hi: ['कैल्शियम ऑक्साइड', 'मैग्नेशियम हाइड्रॉक्साइड', 'सोडियम क्लोराइड', 'कैल्शियम हाइड्रॉक्साइड'],
      },
      correctIndex: 1,
      solution: {
        en: '**Magnesium Hydroxide (`Milk of Magnesia`, $Mg(OH)_2$)** is the mild NCERT-featured stomach antacid (`p.30 & Fig 2.7`)!',
        hi: 'अपच व पेट की अम्लता दूर करने हेतु दुर्बल क्षारक **मैग्नीशियम हाइड्रॉक्साइड (`मिल्क ऑफ मैग्नीशिया`)** का उपयोग होता है!',
      },
    },
    {
      id: 14,
      examTag: 'RRB Tech Gr-III 2024 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Bleaching Powder Prep',
      question: {
        en: 'Which of the following is treated with dry slaked lime [$\\text{Ca(OH)}_2$] to make bleaching powder?',
        hi: 'विरंजन-चूर्ण बनाने के लिए निम्नलिखित में से किसे शुष्क बुझे हुए चूने [$\\text{Ca(OH)}_2$] के साथ उपचारित किया जाता है?',
      },
      options: {
        en: ['Carbon dioxide gas', 'Hydrogen gas', 'Chlorine gas', 'Water'],
        hi: ['कार्बन डाइऑक्साइड गैस', 'हाइड्रोजन गैस', 'क्लोरीन गैस', 'जल'],
      },
      correctIndex: 2,
      solution: {
        en: 'Dry slaked lime `$Ca(OH)_2$` reacts with **`Chlorine gas ($Cl_2$)`** yielding Bleaching Powder [`Ca(ClO)₂` / `CaOCl₂`] (`NCERT p.33`).',
        hi: 'शुष्क बुझे चूने `$Ca(OH)_2$` पर **क्लोरीन गैस (`Cl₂`)** की क्रिया से विरंजक चूर्ण बनता है (`पृष्ठ 33`)।',
      },
    },
    {
      id: 15,
      examTag: 'RRB Group D 2025 Shift 26',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Bleaching Powder Action',
      question: {
        en: 'Which gas released from bleaching powder is primarily responsible for its bleaching and disinfecting action?',
        hi: 'विरंजक चूर्ण से मुक्त होने वाली कौन - सी गैस प्राथमिक रूप से उसकी विरंजन और रोगाणुनाशन (disinfecting) क्रिया के लिए उत्तरदायी है ?',
      },
      options: {
        en: ['Oxygen (O₂)', 'Hydrogen chloride (HCl)', 'Carbon dioxide (CO₂)', 'Chlorine (Cl₂)'],
        hi: ['ऑक्सीजन (O₂)', 'हाइड्रोजन क्लोराइड (HCl)', 'कार्बन डाइऑक्साइड (CO₂)', 'क्लोरीन (Cl₂)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Available **Chlorine (`Cl₂`)** provides powerful oxidising bleaching & drinking-water disinfecting action.',
        hi: 'विरंजक चूर्ण से मुक्त **क्लोरीन (`Cl₂`) गैस** विरंजन एवं जल जीवाणुनाशन के लिए उत्तरदायी होती है।',
      },
    },
    {
      id: 16,
      examTag: 'RRB Tech Gr-III 2024 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Bleaching Powder Role',
      question: {
        en: 'In chemical industries, bleaching powder is used as:',
        hi: 'रासायनिक उद्योगों में विरंजन-चूर्ण का उपयोग किस रूप में किया जाता है?',
      },
      options: {
        en: ['a dehydrating agent', 'a fire extinguisher', 'a reducing agent', 'an oxidising agent'],
        hi: ['एक निर्जलीकरण अभिकर्मक', 'एक अग्निशामक यंत्र', 'एक अपचायक अभिकर्मक', 'एक ऑक्सीकरण अभिकर्मक'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim NCERT `p.33` Use `(ii)`: Used across chemical industries as an **oxidising agent (`उपचायक`)**!',
        hi: 'NCERT पृ. 33 उपयोग `(ii)`: रासायनिक उद्योगों में एक **उपचायक (`ऑक्सीकरण अभिकर्मक`)** के रूप में!',
      },
    },
    {
      id: 17,
      examTag: 'RRB Group D 2025 Shift 45',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Bleaching Powder Uses Check',
      question: {
        en: 'Which of the following is NOT a use of bleaching powder?',
        hi: 'निम्नलिखित में से क्या , विरंजक चूर्ण का एक उपयोग नहीं है ?',
      },
      options: {
        en: ['Bleaching cotton and linen', 'Manufacturing chloroform', 'Removing hardness of water', 'Disinfecting drinking water'],
        hi: ['कपास और लिनेन को विरंजित करना', 'क्लोरोफॉर्म का विनिर्माण', 'जल की कठोरता को दूर करना', 'पेय जल को विसंक्रमित करना'],
      },
      correctIndex: 2,
      solution: {
        en: '**Removing permanent water hardness** is done by **Washing Soda (`Na₂CO₃·10H₂O`)**, NOT Bleaching Powder!',
        hi: 'जल की स्थायी कठोरता हटाने का कार्य **धोने का सोडा (`Na₂CO₃`)** करता है, विरंजक चूर्ण नहीं!',
      },
    },
    {
      id: 18,
      examTag: 'RRB Group D 2025 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Baking Soda Synthesis',
      question: {
        en: 'During the preparation of baking soda in the laboratory, which gas is essential for its formation along with ammonia and water?',
        hi: 'प्रयोगशाला में बेकिंग सोडा तैयार करने के दौरान , अमोनिया और जल के साथ - साथ कौन - सी गैस इसके निर्माण के लिए आवश्यक है ?',
      },
      options: { en: ['Hydrogen', 'Carbon dioxide', 'Nitrogen', 'Oxygen'], hi: ['हाइड्रोजन', 'कार्बन डाइऑक्साइड', 'नाइट्रोजन', 'ऑक्सीजन'] },
      correctIndex: 1,
      solution: {
        en: '$NaCl + H_2O + \\mathbf{CO_2} + NH_3 \\to NH_4Cl + NaHCO_3$ (`NCERT p.34`).',
        hi: '$NaCl + H_2O + \\mathbf{CO_2} + NH_3 \\to NH_4Cl + NaHCO_3$ (कार्बन डाइऑक्साइड आवश्यक है)।',
      },
    },
    {
      id: 19,
      examTag: 'RRB Group D 2025 Shift 33',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Baking Soda Fire Extinguisher',
      question: {
        en: 'Baking soda is commonly used in fire extinguishers because it releases a specific gas when heated. What is the gas released and how does it help extinguish fires?',
        hi: 'बेकिंग सोडा का उपयोग सामान्यतः अग्निशामक यंत्रों में किया जाता है क्योंकि यह गर्म होने पर एक विशिष्ट गैस मोचित करता है। कौन - सी गैस मोचित होती है और आग बुझाने में यह किस प्रकर सहायता करता है ?',
      },
      options: {
        en: [
          'It releases carbon dioxide, which displaces oxygen and stops combustion',
          'It releases nitrogen, which cools the burning material',
          'It releases oxygen, which smothers the fire and prevents it from spreading',
          'It releases sulfur dioxide, which reacts with the flames',
        ],
        hi: [
          'यह कार्बन डाइऑक्साइड मोचित करता है, जो ऑक्सीजन को विस्थापित करता है और दहन को रोकता है।',
          'यह नाइट्रोजन मोचित करता है, जो जलते हुए पदार्थ को ठंडा करता है।',
          'यह ऑक्सीजन मोचित करता है, जो आग को बुझा देता है और इसे फैलने से रोकता है।',
          'यह सल्फर डाइऑक्साइड मोचित करता है, जो ज्वाला के साथ अभिक्रिया करता है।',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Soda-acid extinguishers (`Fig 2.10`) release dense **$CO_2$** gas, cutting off Oxygen supply and stopping combustion.',
        hi: 'सोडा-अम्ल अग्निशामकों में बेकिंग सोडा से निकली **कार्बन डाइऑक्साइड (`CO₂`)** ऑक्सीजन को विस्थापित कर दहन रोकती है।',
      },
    },
    {
      id: 20,
      examTag: 'RRB Tech Gr-III 2024 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Baking Powder',
      question: {
        en: 'Which of the following edible acids is added to baking soda for making baking powder?',
        hi: 'बेकिंग पाउडर (baking powder) बनाने के लिए बेकिंग सोडा (baking soda) में निम्नलिखित में से कौन-सा खाद्य अम्ल मिलाया जाता है?',
      },
      options: {
        en: ['Vinegar', 'Lactic acid', 'Tartaric acid', 'Sodium chloride'],
        hi: ['सिरका (Vinegar)', 'दुग्धाम्ल (Lactic acid)', 'टारटरिक अम्ल (Tartaric acid)', 'सोडियम क्लोराइड (Sodium chloride)'],
      },
      correctIndex: 2,
      solution: {
        en: 'Exact NCERT `p.34`: **Baking powder** = Baking soda (`$NaHCO_3$`) + mild edible **Tartaric acid (`टार्टरिक अम्ल`)**!',
        hi: 'NCERT पृ. 34: **बेकिंग पाउडर** बेकिंग सोडा एवं **टार्टरिक अम्ल** (मंद खाद्य अम्ल) का मिश्रण है।',
      },
    },
    {
      id: 21,
      examTag: 'RRB Group D 2025 Shift 24',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Washing Soda Uses',
      question: {
        en: 'Sodium carbonate (washing soda) is used in which of the following industries? a. glass b. soap c. paper',
        hi: 'सोडियम कार्बोनेट ( वाशिंग सोडा ) का उपयोग निम्नलिखित में से किस उद्योग में किया जाता है ? a. कांच b. साबुन c. कागज',
      },
      options: {
        en: ['Only b and c', 'Only a and c', 'Only a and b', 'a, b and c'],
        hi: ['केवल b और c', 'केवल a और c', 'केवल a और b', 'a, b और c'],
      },
      correctIndex: 3,
      solution: {
        en: 'Verbatim NCERT `p.35` Use `(i)`: Used across **ALL THREE** — Glass, Soap & Paper industries (`a, b and c`)!',
        hi: 'NCERT पृ. 35 उपयोग `(i)`: धावन सोडा **काँच, साबुन एवं कागज तीनों उद्योगों** में उपयोग होता है।',
      },
    },
    {
      id: 22,
      examTag: 'RRB Tech Gr-III 2024 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Washing Soda Formula',
      question: {
        en: 'What is the chemical composition of washing soda?',
        hi: 'धावन सोडा का रासायनिक संघटन क्या है?',
      },
      options: {
        en: ['$\\text{Al}_2(\\text{CO}_3)_3.10\\text{H}_2\\text{O}$', '$\\text{Na}_2\\text{SO}_4.10\\text{H}_2\\text{O}$', '$\\text{Al}_2(\\text{SO}_4)_3.10\\text{H}_2\\text{O}$', '$\\text{Na}_2\\text{CO}_3.10\\text{H}_2\\text{O}$'],
        hi: ['$\\text{Al}_2(\\text{CO}_3)_3.10\\text{H}_2\\text{O}$', '$\\text{Na}_2\\text{SO}_4.10\\text{H}_2\\text{O}$', '$\\text{Al}_2(\\text{SO}_4)_3.10\\text{H}_2\\text{O}$', '$\\text{Na}_2\\text{CO}_3.10\\text{H}_2\\text{O}$'],
      },
      correctIndex: 3,
      solution: {
        en: 'Sodium Carbonate Decahydrate: **`$\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$`** (`10` molecules water of crystallization, NCERT p.34).',
        hi: 'धावन सोडा का रासायनिक संघटन **$\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$** (`10` जल अणु) है।',
      },
    },
    {
      id: 23,
      examTag: 'RRB Tech Gr-III 2024 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: Plaster of Paris Preparation',
      question: {
        en: 'Plaster of Paris is prepared when:',
        hi: 'प्लास्टर ऑफ पेरिस का निर्माण तब होता है, जब ______।',
      },
      options: {
        en: [
          'gypsum is heated at 373 K and it loses water molecules',
          'ammonia is heated at 373 K and it loses water molecules',
          'soda lime is heated at 373 K and it loses water molecules',
          'brine is heated at 373 K and it loses water molecules',
        ],
        hi: [
          'जिप्सम को 373 K ताप पर गर्म किया जाता है, और इसमें से पानी के अणु नष्ट हो जाते हैं।',
          'अमोनिया को 373 K ताप पर गर्म किया जाता है, और इसमें से पानी के अणु नष्ट हो जाते हैं।',
          'सोडा चूना (soda lime) को 373 K ताप पर गर्म किया जाता है, और इसमें से पानी के अणु नष्ट हो जाते हैं।',
          'लवण जल (brine) को 373 K ताप पर गर्म किया जाता है, और इसमें से पानी के अणु नष्ट हो जाते हैं।',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Gypsum (`$CaSO_4\\cdot 2H_2O$`) heated strictly at **`373 K`** sheds `1.5 H₂O`, producing Plaster of Paris (`$CaSO_4\\cdot \\frac{1}{2}H_2O$`, NCERT p.36).',
        hi: '**जिप्सम (`CaSO₄·2H₂O`) को `373 K` ताप पर गर्म** करने से जल के अणु निकल कर **प्लास्टर ऑफ पेरिस (`CaSO₄·½H₂O`)** बनता है (`पृष्ठ 36`)।',
      },
    },
    {
      id: 24,
      examTag: 'RRB Group D 2025 Shift 42',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 10 Chem Ch 2: POP Rehydration',
      question: {
        en: 'When Plaster of Paris (CaSO₄·½H₂O) is mixed with water, it becomes hard. Which process is responsible for this hardening?',
        hi: 'जब प्लास्टर ऑफ पेरिस (CaSO₄·½H₂O) को जल के साथ मिलाया जाता है , तो यह कठोर हो जाता है। इस कठोरण के लिए कौन - सा प्रक्रम उत्तरदायी है ?',
      },
      options: {
        en: ['Rehydration to form gypsum', 'Oxidation of calcium ions', 'Neutralization between acid and base', 'Dehydration of calcium sulphate'],
        hi: ['जिप्सम निर्माण के लिए पुनर्जलयोजन', 'कै ल्शियम आयनों का ऑक्सीकरण', 'अम्ल और क्षारक के बीच उदासीनीकरण', 'कै ल्शियम सल्फे ट का निर्जलीकरण'],
      },
      correctIndex: 0,
      solution: {
        en: 'POP rehydrates with `1½ H₂O` turning rapidly into interlocking crystalline **Gypsum (`$CaSO_4\\cdot 2H_2O$`)** hard cast!',
        hi: 'जल मिलाने पर **पुनर्जलयोजन** द्वारा कठोर **जिप्सम (`CaSO₄·2H₂O`)** क्रिस्टल जालक बन जाता है (`पृष्ठ 36`)!',
      },
    },
  ],
};
