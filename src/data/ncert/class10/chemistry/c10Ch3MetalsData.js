/**
 * Class 10 NCERT Science (2026–27 Edition — jhsc103.pdf, Pages 41–63) + Railway CBT Deep-Dive
 * Chapter 3: Metals & Non-Metals (धातु एवं अधातु) — Gold Standard v3 (42 PYQ Hits!)
 * Complete Coverage: 3.1 Physical Properties & 6 CBT Exceptions (`Hg/Br, Ga/Cs, Li/Na/K, I₂, Diamond, Graphite`) + Act 3.8 Litmus ->
 * 3.2 Chemical Properties (`Burning Cu/Al, Amphoteric Al₂O₃ & ZnO, Anodising Box, Kerosene K/Na, Cold/Hot/Steam Water Ca/Mg float & 3Fe+4H₂O→Fe₃O₄+4H₂, Dilute HCl, HNO₃ Oxidizing Exception Mg/Mn, Aqua Regia 3:1, Reactivity Series K→Au`) ->
 * 3.3 Ionic Bonding (`NaCl & MgCl₂ Dot Transfer, Table 3.4 MP/BP, Hard/Brittle, Solubility & Molten/Aq Conductivity`) ->
 * 3.4 Metallurgy (`Minerals/Ores/Gangue, Low HgS Cinnabar / Cu₂S, Medium Roasting 2ZnS vs Calcination ZnCO₃, C & MnO₂/Al Displacement, Thermite Fe₂O₃+2Al Railway Rail Welding, High Molten NaCl Electrolysis, Fig 3.12 Cu Electrorefining + Anode Mud`) ->
 * 3.5 Corrosion (`Ag₂S Black, CuCO₃ Green, Fe Rust`), Act 3.14 (`Tubes A/B/C`), Galvanisation (`Sacrificial Zn`), Alloys (`Steel 0.05% C, Stainless Ni/Cr, Brass Cu+Zn, Bronze Cu+Sn, Solder Pb+Sn, Amalgam, 22K Gold, Delhi Iron Pillar 1600 yrs/8m/6000kg`).
 * All 14 Activities (`3.1–3.14`), 15 In-Text Qs, 16 Solved Exercises verified vs jhsc1an (`1.d, 2.c, 3.a, 4.c`), 24 Pure Chemistry RRB PYQs.
 */

export const C10_CH3_METALS_DATA = {
  id: 'c10-chem-ch3',
  classId: 'class10',
  subjectId: 'chemistry',
  subjectLabel: { en: 'Chemistry', hi: 'रसायन विज्ञान (Chemistry)' },
  chapterNumber: 3,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 3: Metals & Non-Metals (CBT Edition)',
  blueprintSvgKey: 'c10-ch3-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Physical Exceptions (Hg, Ga/Cs, Graphite, Ductility) & Amphoteric Oxides', hi: 'भौतिक अपवाद (Hg/Br, Ga/Cs, I₂, ग्रेफाइट) एवं उभयधर्मी ऑक्साइड' }, pct: 26 },
    { label: { en: 'Reactivity Series (`K→Au`), Steam/Cold Water, `HNO₃` Trap & Aqua Regia', hi: 'सक्रियता श्रेणी (`K→Au`), भाप-जल क्रिया, `HNO₃` अपवाद व एक्वा रेजिया' }, pct: 28 },
    { label: { en: 'Ionic Lattice (`NaCl/MgCl₂` MP/Conductivity) & Roasting vs Calcination / Thermite', hi: 'आयनिक यौगिक गुण व धातुकर्म (भर्जन-निस्तापन, थर्मिट, Cu शोधन)' }, pct: 26 },
    { label: { en: 'Corrosion (`Ag₂S`, Green Cu, Act 3.14), Galvanisation & Alloys (`Brass/Bronze/Solder`)', hi: 'संक्षारण, यशदलेपन (`Zn`) व मिश्रातु (पीतल/काँसा/सोल्डर/22K)' }, pct: 20 },
  ],
  title: {
    en: 'Chapter 3: Metals & Non-Metals',
    hi: 'अध्याय 3: धातु एवं अधातु',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • Physical Exceptions, Reactivity Series, HNO₃/Aqua Regia, Ionic Solids, Metallurgy & Alloys',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • भौतिक अपवाद, सक्रियता श्रेणी, एक्वा रेजिया, आयनिक आबंध, भर्जन-निस्तापन, थर्मिट, शोधन व मिश्रातु',
  },
  metrics: {
    pages: 23,
    activities: 14,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 16,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-chem-ch3/hero-metals-nonmetals.webp',
    caption: {
      en: 'Metals & Non-Metals Concept Studio: Lustrous Metals & Crystalline Iodine/Sulfur (`Sec 3.1`), Molten Thermite Welding (`Sec 3.4.4`), Electrolytic Copper Refining Cell (`Fig 3.12`) & Ionic Crystal Lattice + Alloys (`Sec 3.3–3.5`).',
      hi: 'धातु एवं अधातु स्टूडियो: धात्विक चमक व चमकीला आयोडीन/सल्फर (`भाग 3.1`), थर्मिट अभिक्रिया से रेल जोड़ (`भाग 3.4.4`), ताँबा वैद्युतअपघटनी शोधन (`चित्र 3.12`) एवं आयनिक जालक व मिश्रातु गियर।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Physical Exceptions (`3.1`)**: Pure metals are **lustrous, hard, malleable (`Au & Ag top`), ductile (`1g Gold → 2 km wire!`), thermal/electrical conductors (`Ag & Cu top; Pb & Hg poor heat!`), and sonorous**. **Non-metal liquid = `Bromine`**, **Metal liquid = `Mercury` (`Hg`)**. **Melt on palm (`low MP`)**: **`Gallium` (`Ga`) & `Caesium` (`Cs`)**. **Knife-soft alkali metals (`low density/MP`)**: **`Li, Na, K`**. **Lustrous non-metal**: **`Iodine`**. **Carbon allotropes**: **Diamond** (`hardest natural, ultra-high MP/BP`) vs **Graphite** (`ONLY non-metal conductor of electricity!`).',
      hi: '**भौतिक अपवाद (`3.1`)**: सोना-चाँदी सर्वाधिक **आघातवर्ध्य**; **सोना सर्वाधिक तन्य (`1 ग्राम से 2 km तार`)**; **सिल्वर व कॉपर ऊष्मा के सर्वोत्तम चालक (`लेड व मर्करी कुचालक`)**। **द्रव धातु = मर्करी (`Hg`)** पर **द्रव अधातु = ब्रोमीन (`Br`)**! हथेली पर पिघलें = **गैलियम (`Ga`) व सीज़ियम (`Cs`)**। चाकू से कटें = **क्षारीय धातुएँ (`Li, Na, K`)**। **चमकीली अधातु = आयोडीन (`I₂`)**; सबसे कठोर प्राकृतिक = **हीरा**; विद्युत सुचालक अधातु = **ग्रेफाइट**!',
    },
    {
      en: '**Chemical Traps (`3.2`)**: **Amphoteric Oxides** react with **BOTH acids & bases (`Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O`)**: **`Al₂O₃` & `ZnO`**! **Anodising**: clean Aluminium object is made **ANODE** in dil. **`H₂SO₄`** forming thick protective `Al₂O₃` layer (`readily dyed`). **Water rules**: `K/Na` catch fire in cold water (`stored in kerosene`); **`Ca` (cold water) & `Mg` (hot water) FLOAT** because `H₂` bubbles stick to metal! `Al, Fe, Zn` react ONLY with **STEAM** (`3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂`). **`HNO₃` oxidises `H₂ → H₂O`** (`NO H₂ gas!`) **EXCEPT very dilute `HNO₃` with `Mg` or `Mn`**! **Aqua Regia = `3 Conc. HCl : 1 Conc. HNO₃`** dissolves **Gold & Platinum**!',
      hi: '**रासायनिक अपवाद (`3.2`)**: **उभयधर्मी ऑक्साइड (`Al₂O₃` व `ZnO`)** अम्ल व क्षार दोनों से लवण+जल बनाते हैं (`Al₂O₃+2NaOH → 2NaAlO₂+H₂O`)! **एनोडीकरण**: साफ `Al` को **ऐनोड** बनाकर तनु `H₂SO₄` अपघटन से मोटी `Al₂O₃` परत चढ़ती है। **जल क्रिया**: `K/Na` ठंडे जल में आग पकड़ें (किरोसिन में सुरक्षा); **`Ca` व `Mg` `H₂` बुलबुले चिपकने से तैरते हैं**; `Al, Fe, Zn` केवल **भाप** से (`3Fe + 4H₂O → Fe₃O₄ + 4H₂`)। **`HNO₃` प्रबल ऑक्सीकारक** होने से `H₂` नहीं देता — अपवाद केवल **`Mg` व `Mn` + अति तनु `HNO₃`**! **एक्वा रेजिया = `3 सांद्र HCl : 1 सांद्र HNO₃`**, जो **सोना व प्लैटिनम** गला देता है!',
    },
    {
      en: '**Ionic Solids & Metallurgy (`3.3–3.4`)**: Ionic compounds (`NaCl`, `MgCl₂` formed by electron transfer metal -> non-metal) form rigid aggregates (`NOT discrete molecules!`): **hard & brittle (`like-charge repulsion under pressure`)**, **high MP/BP (`CaO = 2850 K`, `NaCl = 1074 K`)**, soluble in **water (`insoluble in kerosene/petrol`)**, conduct ONLY when **molten or aqueous (`NOT solid!`)**. Metallurgy: **Top (`K, Na, Ca, Mg, Al`)** = **electrolysis of molten salts** (`high O₂ affinity prevents C reduction!`); **Medium (`Zn, Fe, Pb, Mn`)** = Sulphide **Roasting (`+ excess air → SO₂`)** vs Carbonate **Calcination (`limited air → CO₂`)** -> C/Al reduction (**Thermite `Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃` welds railway tracks!**); **Low (`HgS` Cinnabar, `Cu₂S`)** = air heating alone. **Cu Refining**: Impure `Cu` = Anode, pure strip = Cathode, **Anode Mud** collects insoluble impurities below.',
      hi: '**आयनिक व धातुकर्म (`3.3–3.4`)**: आयनिक यौगिक (`NaCl, MgCl₂`) विपरीत आयनों का समुच्चय हैं: **कठोर पर भंगुर**, **उच्च गलनांक (`CaO = 2850 K`, `NaCl = 1074 K`)**, **जल में विलेय (किरोसिन में नहीं)**, तथा **केवल गलित व जलीय अवस्था में विद्युत सुचालक** (ठोस में नहीं)! निष्कर्षण: **उच्च (`K–Al`)** = गलित लवण का **विद्युत-अपघटन**; **मध्यम (`Zn–Fe`)** = सल्फाइड का **भर्जन** (`अधिक वायु → SO₂`) व कार्बोनेट का **निस्तापन** (`सीमित वायु → CO₂`), फिर कार्बन या **थर्मिट (`Fe₂O₃+2Al → 2Fe(l)+Al₂O₃`)** से रेल पटरी जोड़; **निम्न (`HgS सिनाबार`, `Cu₂S`)** = केवल वायु में तापन। **परिष्करण**: अशुद्ध `Cu` **ऐनोड**, शुद्ध पट्टी **कैथोड**, व नीचे **ऐनोड पंक**!',
    },
    {
      en: '**Corrosion, Act 3.14 & Alloys (`3.5`)**: **Silver turns BLACK (`Ag₂S`)** reacting with air sulfur; **Copper turns GREEN (`basic copper carbonate`)** with moist `CO₂`; Iron needs **BOTH air + water (`Act 3.14`: Tube A rusts, Tube B boiled+oil no O₂ & Tube C anhydrous `CaCl₂` dry air stay rust-free!)**. **Galvanisation**: Zn coating protects iron **EVEN IF scratched** (`Zn corrodes preferentially` — Group D PYQ!). **Pure Iron (`too soft when hot`)** + `0.05% C` = hard Steel; **`Fe + Ni + Cr` = Stainless Steel** (`no rust!`); **24K vs 22K Gold (`22 Au + 2 Cu/Ag`)**; **Brass (`Cu+Zn`)** & **Bronze (`Cu+Sn`)** are poor electrical conductors; **Solder (`Pb+Sn`)** has **low MP** to weld electrical wires; **Amalgam = metal + Hg**! **Delhi Iron Pillar**: **1600 yrs old, `8 m` tall, `6 tonnes (6000 kg)`**.',
      hi: '**संक्षारण व मिश्रातु (`3.5`)**: चाँदी हवा के सल्फर से **काली (`Ag₂S`)**, कॉपर आर्द्र `CO₂` से **हरा (बेसिक कॉपर कार्बोनेट)**, लोहा **वायु + जल दोनों** से जंग खाता है (`क्र. 3.14`: उबले पानी+तेल `B` व निर्जल `CaCl₂` शुष्क वायु `C` में जंग नहीं!)। **यशदलेपन**: खरोंच के बाद भी जस्ता लोहे से पहले संक्षारित होकर उसे बचाता है। शुद्ध लोहे में **`~0.05%` कार्बन** से कठोर इस्पात व **`Ni + Cr` से स्टेनलेस स्टील** बनता है! **पीतल (`Cu+Zn`) व काँसा (`Cu+Sn`)** कुचालक; **सोल्डर (`Pb+Sn`)** निम्न गलनांक हेतु तार जोड़ने में; **अमलगम (`+ पारद Hg`)**; **`22 कैरेट` सोना (`22Au + 2 Cu/Ag`)**; **दिल्ली लौह स्तंभ = `1600` वर्ष पुराना, `8 m` ऊँचा, `6000 kg` भार**!',
    },
  ],
  sections: [
    {
      id: 'physical-properties-exceptions',
      number: '3.1',
      flowDiagramKey: 'c10-ch3-blueprint-mindmap',
      title: {
        en: 'Physical Properties of Metals & Non-Metals (`3.1`) + All NCERT Exceptions (`Hg/Br, Ga/Cs, Li/Na/K, I₂, Graphite`)',
        hi: 'धातु एवं अधातु के भौतिक गुणधर्म (`3.1`), सभी परीक्षा अपवाद (`Hg/Br, Ga/Cs, Li/Na/K, I₂, ग्रेफाइट`) व ऑक्साइड प्रकृति (`क्र. 3.8`)',
      },
      summaryTag: {
        en: 'NCERT Pages 41–44 • Activities 3.1–3.8, 1g Gold = 2 km, Pb/Hg Heat Poor & Acidic vs Basic Oxides',
        hi: 'NCERT पृ. 41–44 • क्रियाकलाप 3.1–3.8, 1g Au → 2km तार, लेड-मर्करी कुचालक व लिटमस परीक्षण',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Five Classical Metallic Properties (`Lustre, Malleability, Ductility, Conductors, Sonority`) & Key Non-Metals',
            hi: '1. धातुओं के पाँच मुख्य भौतिक गुण (`धात्विक चमक, आघातवर्ध्यता, तन्यता, चालकता, ध्वानिकता`) एवं अधातु परिचय (`3.1.1–3.1.2`)',
          },
          conceptStory: {
            en: 'Elements classify sharply into Metals and Non-Metals, yet physical traits carry famous **NCERT Exceptions** loved by RRB examiners! When sandpaper cleans dull oxide coatings off Iron, Copper, Aluminium & Magnesium (`Act 3.1`), every pure metal gleams with **==Metallic Lustre (`धात्विक चमक`)==**. Next compare five benchmark properties:\n• **Malleability (`आघातवर्ध्यता`, Act 3.3)**: Beating metals with a hammer flattens them into thin sheets (`==Gold & Silver== are the most malleable metals!`).\n• **Ductility (`तन्यता`, Act 3.4)**: Drawing a metal into a thin wire — **==Gold (`Au`) is the MOST ductile metal (`Tech 2024 Shift 17 PYQ`)==**: NCERT highlights that a tiny **`1 gram` of gold draws into a `2 km` long wire**!\n• **Thermal & Electrical Conduction (`Act 3.5–3.6`, Fig 3.1–3.2)**: Heating a pin-waxed `Al/Cu` wire melts wax without melting metal (`high MP`). **==Silver (`Ag`) & Copper (`Cu`)== are the BEST heat conductors**, whereas **==Lead (`Pb`) & Mercury (`Hg`)== are POOR conductors of heat** (`In-Text p.44 Q1(iv)!`). Home electric wires use insulating **PVC (`Polyvinyl Chloride`) or rubber** coating for shock safety. Striking hard surfaces produces a ringing chime (**==Sonorous / ध्वानिक==**, hence school bells).\n• **Non-Metals (`3.1.2`)**: Far fewer than metals (`C, S, I₂, O₂, H₂`). Only **==Bromine (`Br₂`) is a LIQUID non-metal at room temperature==** (`all other non-metals are solids or gases!`), and **==Activity 3.8 Litmus Proof==**: burning Magnesium yields alkaline **`MgO`** turning **red litmus blue** (`Metal oxides are generally BASIC`), while burning Sulfur yields **`SO₂`** dissolving to acidic gas/sulfurous acid turning **blue litmus red** (`Most non-metal oxides are ACIDIC`)!',
            hi: 'दैनिक उपयोग के तत्व धातु व अधातु में बँटते हैं (`3.1`): रेगमाल से साफ़ करने पर शुद्ध धातु सतह चमकती है इसे **==धात्विक चमक (`Metallic Lustre`)==** कहते हैं (`क्र. 3.1`)। धातुओं के प्रमुख भौतिक गुण समझें:\n• **आघातवर्ध्यता (`Malleability`, क्र. 3.3)**: हथौड़े से पीटकर पतली चादर बनाना — **==सोना (`Au`) और चाँदी (`Ag`) सर्वाधिक आघातवर्ध्य==** हैं।\n• **तन्यता (`Ductility`, क्र. 3.4)**: पतले तार के रूप में खींचने की क्षमता — **==सोना सर्वाधिक तन्य (`Most Ductile`) धातु है (`1 ग्राम सोने से 2 km लंबा तार!`, Tech 2024 Shift 17 PYQ)==**।\n• **ऊष्मा व विद्युत चालकता (`क्र. 3.5–3.6`, चित्र 3.1–3.2)**: मोम लगी पिन के प्रयोग में धातु तार बिना पिघले (`उच्च गलनांक`) पिन गिरा देता है — **==सिल्वर व कॉपर ऊष्मा के सर्वश्रेष्ठ सुचालक==** हैं, जबकि इनकी तुलना में **==लेड (`Pb`) व मर्करी (`Hg`) ऊष्मा के कुचालक==** हैं (`पृ. 44 Q1(iv)`)! घरेलू तारों पर बिजली झटके से बचाने हेतु **`PVC` या रबड़** का आवरण रहता है; कठोर सतह पर बजने के कारण स्कूल की घंटी **ध्वानिक (`Sonorous`)** धातु की बनती है।\n• **अधातु (`3.1.2`)**: इनकी संख्या कम है — **==ब्रोमीन (`Br`) एकमात्र द्रव अधातु है==**, शेष ठोस या गैस हैं! **क्रियाकलाप 3.8**: मैग्नीशियम की राख जल में घोलने पर **क्षारकीय ऑक्साइड** लाल लिटमस नीला करता है (`अधिकांश धातु ऑक्साइड क्षारकीय`), जबकि सल्फर का धुआँ जल संग **अम्लीय ऑक्साइड** बना नीला लिटमस लाल करता है!',
          },
          realImage: {
            url: '/ncert-notes/class10-chem-ch3/real/sodium-metal-cut.webp',
            title: { en: 'Real Asset (`Act 3.2`): Knife-Cut Alkali Metal — Shiny Freshly Sliced Sodium (`Na`)', hi: 'असली प्रयोगशाला दृश्य (`क्र. 3.2`): चाकू से कटा चमकीला सोडियम धातु (`Na` — क्षारीय अपवाद)' },
            caption: {
              en: 'Normally hard metals resist blades (`Fe, Cu, Al`), yet Alkali Metals (Lithium, Sodium, Potassium) are so soft (`low density & low MP`) that a kitchen/lab knife slices them cleanly exposing fresh silvery lustre (`NCERT p.42 & 44`)!',
              hi: 'सामान्यतः धातुएँ कठोर होती हैं, परंतु क्षारीय धातुएँ (`Li, Na, K`) इतनी मुलायम होती हैं कि इन्हें चाकू से काटा जा सकता है; काटते ही ताज़ा कटा सिरा शुद्ध धात्विक चमक दिखाता है (`NCERT पृ. 42, 44`)।',
            },
          },
          viralTrick: {
            en: '**6 Physical Exceptions Lock (“Hg-Br | Ga-Cs | Li-Na-K | I₂ | C-Graphite”)**: Liquids: **`Hg` (Metal)** vs **`Br` (Non-Metal)**. Melt on **Palm**: **`Ga & Cs`**. **Knife-cut soft + low density**: **`Li, Na, K`**. **Lustrous Non-Metal**: **`Iodine`**. **Hardest**: **`Diamond`**; **Conducts**: **`Graphite`**!',
            hi: '**6 अपवाद ट्रिक**: **द्रव** = `Hg` (धातु) / `Br` (अधातु) • **हथेली पर पिघले** = `Ga` व `Cs` (गैलियम-सीज़ियम) • **चाकू से कटे** = `Li-Na-K` (ली-ना-के) • **चमकीली अधातु** = आयोडीन • **कठोरतम** = हीरा • **सुचालक अधातु** = ग्रेफाइट!',
          },
          trapAlert: {
            en: '**Exam `-0.33` Trap**: NEVER answer **Aluminium (`Al`) or Copper (`Cu`)** as “best conductor of heat” over **Silver (`Ag`)** (`p.42`), and remember **`Pb` (`Lead`) + `Hg` (`Mercury`)** are poor heat conductors! Also **Carbon allotropes (`Diamond` vs `Graphite`)** differ sharply in conductivity (`only Graphite conducts`).',
            hi: '**सावधानी (-0.33 Trap)**: ऊष्मा के सर्वोत्तम चालक पूछे जाने पर **चाँदी व ताँबा (`Ag > Cu`)** चुनें, और ऊष्मा का कुचालक धातु **सीसा (`Pb`) व पारा (`Hg`)** हैं — यह प्रश्न सीधे `NCERT पृ. 44` से कई शिफ्टों में आया है!',
          },
          inlinePyqIds: ['pyq-c3-14', 'pyq-c3-15'],
        },
      ],
    },
    {
      id: 'chemical-properties-reactivity-series',
      number: '3.2',
      flowDiagramKey: 'c10-ch3-reactivity-water-acid-flow',
      svgLab: 'metals-reactivity-metallurgy-lab',
      title: {
        en: 'Chemical Properties of Metals (`Air/Amphoteric/Anodising`, `Water/Steam`, `Dil. Acids/HNO₃/Aqua Regia`) & Reactivity Series',
        hi: 'धातुओं के रासायनिक गुणधर्म (`वायु/उभयधर्मी/एनोडीकरण`, `जल/भाप`, `अम्ल/HNO₃/एक्वा रेजिया`) व सक्रियता श्रेणी (`3.2`)',
      },
      summaryTag: {
        en: 'NCERT Pages 45–50 • Eq 3Fe+4H₂O→Fe₃O₄+4H₂, Al₂O₃+NaOH→NaAlO₂, K/Na Kerosene, Ca/Mg Floating & K→Au Table 3.2',
        hi: 'NCERT पृ. 45–50 • उभयधर्मी समीकरण, किरोसिन सुरक्षा, Ca/Mg तैरना, भाप क्रिया, अम्लराज 3:1 व सारणी 3.2',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Burning Metals in Air (`3.2.1`): Copper Black `CuO`, Amphoteric Oxides (`Al₂O₃, ZnO`), Alkalis (`Na₂O/K₂O`), Anodising & Kerosene',
            hi: '1. वायु में दहन (`3.2.1`): काला `CuO`, उभयधर्मी ऑक्साइड (`Al₂O₃, ZnO`), जल विलेय क्षार एवं एनोडीकरण (`Anodising`)',
          },
          conceptStory: {
            en: 'Almost all metals combine with `O₂` yielding **Metal Oxides (`Activity 3.9`)**, e.g. heated shiny copper coats with **==black Copper(II) Oxide `2Cu + O₂ → 2CuO`==**, while Aluminium yields **`4Al + 3O₂ → 2Al₂O₃`**. Now check the **3 top CBSE/RRB rules from Pages 46–47**:\n• **==Amphoteric Oxides (`उभयधर्मी ऑक्साइड`)==**: Usually metal oxides are basic, yet **==Aluminium Oxide (`Al₂O₃`) and Zinc Oxide (`ZnO`)== behave BOTH acidic and basic**, reacting with BOTH acids AND alkalis to yield salt + water (`RRB Tech 2024 Shift 21 PYQ`): **`Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O`** AND **`Al₂O₃ + 2NaOH → 2NaAlO₂ (Sodium Aluminate) + H₂O`**!\n• **Water Solubility & Kerosene Storage**: Most metal oxides are water-insoluble (`except Na₂O & K₂O dissolving to give NaOH & KOH alkalis!`). Because **`K` and `Na` catch fire spontaneously in open air**, they are **immersed in ==kerosene oil==** (`p.46 & p.50 Q1`). Meanwhile `Mg, Al, Zn, Pb` self-passivate with a thin protective oxide film (`why reactive Al still serves for cooking utensils — Ex Q14c!`); iron bars don’t burn hot (`iron filings sparkle vigorously in flame!`); and **`Ag & Au` resist oxygen even at ultra-high temperatures** (`Ex Q14a`).\n• **NCERT Box (`p.47`): ==Anodising (`एनोडीकरण`)==**: Making a clean **Aluminium article the ANODE (`+`)** during electrolysis of **dilute Sulphuric Acid (`H₂SO₄`)** liberates **Oxygen gas at anode**, reacting with `Al` (`Group D 2025 Shifts 26 & 40 PYQs!`) to thicken its corrosion-proof **`Al₂O₃` coat**, which can even be dyed vibrantly!',
            hi: 'लगभग सभी धातुएँ ऑक्सीजन से मिलकर **धातु ऑक्साइड** बनाती हैं (`क्र. 3.9`): ताँबे को गरम करने पर **==काला कॉपर(II) ऑक्साइड (`2Cu+O₂→2CuO`)==** तथा `Al` से `Al₂O₃` बनता है। **पृष्ठ 46–47 के 3 अचूक नियम**:\n• **==उभयधर्मी ऑक्साइड (`Amphoteric Oxides`)==**: सामान्यतः धातु ऑक्साइड क्षारकीय होते हैं, परंतु **==ऐलुमिनियम ऑक्साइड (`Al₂O₃`) एवं जिंक ऑक्साइड (`ZnO`)== अम्ल व क्षार दोनों से क्रिया कर लवण व जल बनाते हैं** (`Tech 2024 PYQ`): `Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O` तथा `Al₂O₃ + 2NaOH → 2NaAlO₂ (सोडियम ऐलुमिनेट) + H₂O`।\n• **जल घुलनशीलता व किरोसिन सुरक्षा**: अधिकांश धातु ऑक्साइड जल में अविलेय हैं (`अपवाद: Na₂O व K₂O घुलकर क्रमशः NaOH व KOH क्षार देते हैं`)। **पोटैशियम (`K`) व सोडियम (`Na`)** खुले में तुरंत आग पकड़ने से **==किरोसिन तेल में डुबोकर==** रखे जाते हैं! `Mg, Al, Zn, Pb` पर ऑक्साइड की पतली परत पुनः ऑक्सीकरण रोकती है (`इसी कारण Al बर्तन बनते हैं — Ex Q14c`)। गरम करने पर लोहा जलता नहीं पर **लौह चूर्ण** ज्वाला में तेजी से दहन करता है; **सिल्वर व गोल्ड** अत्यधिक ताप पर भी `O₂` से क्रिया नहीं करते।\n• **==एनोडीकरण (`Anodising`, पृ. 47 बॉक्स)==**: साफ **`Al` की वस्तु को ऐनोड** बनाकर **तनु `H₂SO₄` का विद्युत-अपघटन** करने पर **ऐनोड पर मुक्त `O₂` गैस** `Al` से मिलकर मोटी, टिकाऊ व रंगने-योग्य `Al₂O₃` परत बनाती है (`Group D Shifts 26 & 40`)!',
          },
          realImage: {
            url: '/ncert-notes/class10-chem-ch3/real/cinnabar-hgs-ore.webp',
            title: { en: 'Real Specimen (`Sec 3.4.3`): Natural Crimson Cinnabar (`HgS`) — Low-Reactivity Mercury Ore', hi: 'असली खनिज नमूना (`3.4.3`): गहरे लाल रंग का सिनाबार (`HgS`) — पारे (`Mercury`) का प्रमुख सल्फाइड अयस्क' },
            caption: {
              en: 'Mercury lies near the bottom of Reactivity Series Table 3.2 (above Ag & Au): Cinnabar (HgS) ore needs only air roasting (→ HgO → Hg(l)) without any reducing agent like Carbon (`NCERT p.56 & Group D Shift 15 PYQ`).',
              hi: 'सिनाबार (`HgS`) मर्करी (पारद) का अयस्क है जो सक्रियता श्रेणी में नीचे स्थित है; केवल वायु में गरम (भर्जन) करने से पहले `HgO` व फिर तरल पारद (`Hg(l)`) प्राप्त हो जाता है।',
            },
          },
          inlinePyqIds: ['pyq-c3-6', 'pyq-c3-8', 'pyq-c3-17'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Water/Steam Tiers, Floating `Ca/Mg`, `HNO₃` Exception, `Aqua Regia (3:1)` & Reactivity Series (`K→Au`)',
            hi: '2. जल/भाप व तनु अम्ल से क्रिया, `Ca/Mg` तैरना, `HNO₃` अपवाद, एक्वा रेजिया (`3:1`) तथा सक्रियता श्रेणी (`3.2.2–3.2.5`)',
          },
          conceptStory: {
            en: 'Study how **`Water` (`Act 3.10`), `Acids` (`Act 3.11`), and `Salt Displacements` (`Act 3.12`)** rank metals accurately into **Table 3.2 Reactivity Series (`K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au`)**:\n• **Four Water Reactivity Tiers (`p.47–48`, Fig 3.3)**: (1) **Cold water (`violent + exothermic`)**: **`K` & `Na`** immediately ignite escaping `H₂` (`2K + 2H₂O → 2KOH + H₂ + heat`); (2) **Cold water (`gentler`)**: **`Ca`** (`Ca + 2H₂O → Ca(OH)₂ + H₂`, no fire — **==Calcium FLOATS because `H₂` gas bubbles stick onto its surface==**!); (3) **Hot water ONLY**: **`Mg`** (`Mg + 2H₂O → Mg(OH)₂ + H₂` — **==Magnesium also FLOATS due to clinging `H₂` bubbles==**!); (4) **STEAM ONLY (`no reaction with cold or hot water`)**: **`Al, Zn, Fe`** forming metal oxides + `H₂`: **`2Al + 3H₂O(g) → Al₂O₃ + 3H₂`** and **==`3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`==**! Meanwhile **`Pb, Cu, Ag, Au` NEVER react with water or steam** (`Ex Q16`: why hot-water tanks use **Copper**, not Steel/Iron!).\n• **Dilute Acid Test (`Act 3.11`: `Mg > Al > Zn > Fe`; `Cu` gives NO bubbles/temp rise!) + `HNO₃` Exception (`p.49 Box`)**: Metals above `[H]` liberate `H₂` from dil. `HCl`/`H₂SO₄`, **EXCEPT Nitric Acid (`HNO₃`)**: being a **strong OXIDISING AGENT**, `HNO₃` instantly oxidises `H₂ → H₂O` while reducing itself to **`N₂O`, `NO`, or `NO₂`**! The **ONLY two metals giving `H₂` with VERY DILUTE `HNO₃` are ==`Magnesium (Mg)` and `Manganese (Mn)`==**!\n• **==Aqua Regia (`रॉयल जल / अम्लराज`)== (`p.49 Box`)**: Freshly mixed **==`3 parts Conc. HCl : 1 part Conc. HNO₃`==** — a fuming corrosive reagent dissolving noble metals **==Gold & Platinum==** (`explains Ex Q15 goldsmith weight-loss fraud!`).\n• **Displacement (`Act 3.12`, Fig 3.4)**: More reactive `A` displaces less reactive `B` from salt solutions (`Fe + CuSO₄ → FeSO₄ + Cu`; `Zn + CuCl₂ → ZnCl₂ + Cu`).',
            hi: '**क्रियाकलाप 3.10 (जल/भाप)**, **3.11 (अम्ल)** व **3.12 (विस्थापन)** मिलकर **सारणी 3.2 सक्रियता श्रेणी (`K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au`)** तय करते हैं:\n• **जल व भाप के 4 स्तर (`पृ. 47–48`, चित्र 3.3)**: (1) **`K` व `Na`** ठंडे जल से ऊष्माक्षेपी क्रिया कर मुक्त `H₂` को तुरंत प्रज्वलित कर देते हैं; (2) **`Ca`** ठंडे जल से धीमी क्रिया में **`H₂` बुलबुलों के सतह पर चिपकने से तैरने लगता है**; (3) **`Mg`** केवल **गर्म जल** से `Mg(OH)₂ + H₂` बना **तैरने लगता है**; (4) **`Al, Fe, Zn`** न ठंडे न गर्म जल से, बल्कि केवल **भाप (`Steam`) से क्रिया कर ऑक्साइड (`2Al+3H₂O→Al₂O₃+3H₂` व ==`3Fe+4H₂O(g)→Fe₃O₄+4H₂`==)** देते हैं! जबकि **`Pb, Cu, Ag, Au` जल से बिल्कुल क्रिया नहीं करते** (`इसी कारण गर्म पानी की टंकी ताँबे से बनती है, इस्पात से नहीं — अभ्यास Q16`)।\n• **अम्ल व `HNO₃` अपवाद (`क्र. 3.11`, पृ. 49 बॉक्स)**: तनु `HCl` से वेग क्रम **`Mg > Al > Zn > Fe`** (`Cu` कोई क्रिया नहीं करता)। **नाइट्रिक अम्ल (`HNO₃`) प्रबल ऑक्सीकारक होने से सामान्य धातुओं संग `H₂` नहीं देता** — यह `H₂` को जल बनाकर स्वयं `N₂O, NO, NO₂` में अपचयित होता है, **अपवाद केवल ==मैग्नीशियम (`Mg`) व मैंगनीज (`Mn`)== अति तनु `HNO₃` से `H₂` देते हैं!**\n• **==एक्वा रेजिया (`Aqua Regia / रॉयल जल`, पृ. 49 बॉक्स)==**: ताज़ा **`3 भाग सांद्र HCl : 1 भाग सांद्र HNO₃`** का मिश्रण — **सोना (`Au`) व प्लैटिनम (`Pt`)** गलाने में समर्थ (`अभ्यास Q15 का सुनार ठगी रहस्य!`)।',
          },
          viralTrick: {
            en: '**Kashi Nath Ka Mali Aloo Zara Fike Pakata Hai, Kaun Hai Aage Aao**: `K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au`! Remember **`3 HCl : 1 HNO₃` (`alphabet H-Cl shorter = 3 parts!`)** & **`Mg + Mn` alone crack dil. `HNO₃`!**',
            hi: '**सक्रियता श्रेणी सूत्र (“काशी नाथ का माली आलू ज़रा फीके पकाता है, कौन है आगे आओ”)**: `K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au`! **`HNO₃` से `H₂` सिर्फ “मन-मग” (`Mn, Mg`) निकालें!** एक्वा रेजिया = **`3 HCl + 1 HNO₃`** (`HCl` में 3 अक्षर तो अनुपात 3)!',
          },
          inlinePyqIds: ['pyq-c3-1', 'pyq-c3-3', 'pyq-c3-20', 'pyq-c3-22', 'pyq-c3-23'],
        },
      ],
    },
    {
      id: 'ionic-compounds-metallurgy',
      number: '3.3–3.4',
      flowDiagramKey: 'c10-ch3-ionic-metallurgy-flowchart',
      title: {
        en: 'Ionic Bonding (`NaCl, MgCl₂, Table 3.4`) & Complete Metallurgy (`Ores, Roasting/Calcination, Thermite, Electrorefining`)',
        hi: 'आयनिक यौगिक (`NaCl, MgCl₂`, सारणी 3.4 गुणधर्म) एवं संपूर्ण धातुकर्म (`भर्जन, निस्तापन, थर्मिट रेल जोड़, विद्युत-अपघटनी परिष्करण`)',
      },
      summaryTag: {
        en: 'NCERT Pages 51–58 • Fig 3.5–3.12, CaO 2850K, Gangue, Cinnabar HgS, ZnS/ZnCO₃, Molten NaCl & Anode Mud',
        hi: 'NCERT पृ. 51–58 • चित्र 3.5–3.12, CaO 2850K, गैंग, सिनाबार, भर्जन-निस्तापन, थर्मिट व ऐनोड पंक',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Ionic (`Electrovalent`) Compounds (`Sec 3.3`): Electron Transfer (`NaCl`, `MgCl₂`) & All 4 Properties (`Table 3.4`)',
            hi: '1. आयनिक / वैद्युत संयोजक यौगिक (`3.3`): इलेक्ट्रॉन स्थानांतरण (`NaCl, MgCl₂`) व 4 गुणधर्म (`सारणी 3.4`, `क्र. 3.13`)',
          },
          conceptStory: {
            en: 'Noble gases (`He:2, Ne:2,8, Ar:2,8,8`) possess filled outer octets and stay chemically inert. Metals hold `1–3` extra valence e⁻ (`Na: 2,8,1; Mg: 2,8,2`), so transferring e⁻ to non-metals (`Cl: 2,8,7` -> `Cl⁻: 2,8,8`) produces **==Ionic / Electrovalent Compounds==** bound by strong electrostatic attraction (**Fig 3.5–3.6** — critical note: **`NaCl` is an aggregate of oppositely charged ions, NOT a discrete molecule!**). Activity 3.13 + Table 3.4 prove four core rules:\n1) **Hard & Brittle**: Strong inter-ionic forces yield hard solids (`never liquid!`) — hammering shifts ion layers so **like charges align and repel**, shattering crystals cleanly (**Group D Shift 19 PYQ**).\n2) **Very High MP & BP**: Memorize **Table 3.4**: `LiCl (887 K / 1600 K)`, `MgCl₂ (981 K / 1685 K)`, `CaCl₂ (1045 K / 1900 K)`, **`NaCl` (`1074 K / 1686 K`)**, and highest **`CaO` (`2850 K / 3120 K`)**!\n3) **Solubility**: Soluble in **water**, INSOLUBLE in organic solvents like **petrol and kerosene** (`Group D & Tech Shift 22 PYQs`).\n4) **Conduction**: **Solid `NaCl` NEVER conducts** (`ions locked rigid!`) — conduct ONLY in **molten state** (`heat breaks electrostatic attraction -> ions flow`) OR **aqueous solution**!',
            hi: 'उत्कृष्ट गैसें (`He:2, Ne:2,8, Ar:2,8,8`) अष्टक पूर्ण होने से निष्क्रिय हैं। धातु इलेक्ट्रॉन त्यागकर धनायन (`Na → Na⁺ + e⁻`; `Mg → Mg²⁺ + 2e⁻`) और अधातु ग्रहण कर ऋणायन (`Cl + e⁻ → Cl⁻`) बनाते हैं (`चित्र 3.5–3.6`) — **ध्यान दें: `NaCl` अणु नहीं बल्कि विपरीत आयनों का समुच्चय (`Aggregate`) है!** **सारणी 3.4 व क्रियाकलाप 3.13 से 4 मुख्य गुणधर्म**:\n1) **कठोर पर भंगुर (`Hard yet Brittle`)**: प्रबल आकर्षण से ठोस व कठोर, पर दाब डालने पर आयन परतें खिसककर समान आवेश प्रतिकर्षण से टुकड़ों में टूट जाती हैं (`Group D Shift 19`)।\n2) **उच्च गलनांक व क्वथनांक (`सारणी 3.4`)**: `LiCl (887K)`, `MgCl₂ (981K)`, `CaCl₂ (1045K)`, **`NaCl (1074K / 1686K)`**, व सर्वोच्च **`CaO (2850K / 3120K)`**।\n3) **घुलनशीलता**: जल में विलेय, परंतु किरोसिन व पेट्रोल में अविलेय।\n4) **विद्युत चालकता (`Tech Shift 22 Trap!`)**: **ठोस अवस्था में कुचालक** (दृढ़ संरचना से आयन गति असंभव), पर **गलित व जलीय विलयन में सुचालक**!',
          },
          realImage: {
            url: '/ncert-notes/class10-chem-ch3/real/electrolytic-copper-crystals.webp',
            secondaryUrl: '/ncert-notes/class10-chem-ch3/real/bauxite-aluminium-ore.webp',
            title: { en: 'Metallurgy Duo (`3.4.5–3.4.6`): Pure Cathode Electrolytic Copper Crystals & Bauxite (`Al₂O₃`) Ore', hi: 'धातुकर्म जोड़ी (`3.4.5–3.4.6`): कैथोड पर प्राप्त शुद्ध विद्युत-अपघटनी कॉपर क्रिस्टल व उच्च-सक्रिय बॉक्साइट (`Al₂O₃`) अयस्क' },
            caption: {
              en: 'Left: Ultra-pure dendritic Copper grown at the cathode in acidified CuSO₄ electrolytic refining (`Fig 3.12`). Right: Pisolitic Bauxite ore yielding Al₂O₃, reduced ONLY via electrolysis because Aluminium binds O₂ tighter than Carbon (`Sec 3.4.5 & ALP CBT-2 PYQ`).',
              hi: 'बायाँ: अम्लीकृत `CuSO₄` विद्युत-अपघटनी परिष्करण से कैथोड पर जमा शुद्ध कॉपर क्रिस्टल (`चित्र 3.12`)। दायाँ: बॉक्साइट अयस्क (`Al₂O₃`), जिसे केवल गलित विद्युत-अपघटन से निकाला जाता है क्योंकि `Al` की `O₂` से बंधुता कार्बन से अधिक है।',
            },
          },
          inlinePyqIds: ['pyq-c3-5', 'pyq-c3-9', 'pyq-c3-18', 'pyq-c3-21', 'pyq-c3-24'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Extraction tiers (`Minerals/Ores/Gangue`, Roasting vs Calcination, Thermite Rail Join, Molten `NaCl` Electrolysis & Cu Anode Mud)',
            hi: '2. अयस्क से शुद्ध धातु (`खनिज-गैंग`, भर्जन-निस्तापन, थर्मिट रेल संधि, गलित `NaCl` अपघटन व `Cu` ऐनोड पंक, `3.4`)',
          },
          conceptStory: {
            en: 'Earth’s crust (`& seawater NaCl/MgCl₂`) holds **Minerals (`खनिज`)**; minerals from which a metal is **profitably extracted** are **Ores (`अयस्क`)** contaminated with soil/sand **==Gangue (`गैंग`)==**. After concentrating gangue off, extraction follows **3 reactivity bands (`Fig 3.9–3.10`)**:\n• **Low Tier (`Hg, Cu`) — Heating in Air**: **Cinnabar (`HgS`)** roasts: `2HgS + 3O₂ → 2HgO + 2SO₂`, then `2HgO —Heat→ 2Hg(l) + O₂`. Likewise `Cu₂S`: `2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂`, then `2Cu₂O + Cu₂S → 6Cu + SO₂` (**Group D Shift 15**).\n• **Medium Tier (`Fe, Zn, Pb, Mn`) — Roast/Calcine then Reduce**: Since oxides reduce easier than sulfides/carbonates (`Ex Q14d`): **==Roasting (`भर्जन`)==** heats **Sulphide ores in EXCESS air** (`2ZnS + 3O₂ → 2ZnO + 2SO₂↑`), whereas **==Calcination (`निस्तापन`)==** heats **Carbonate ores in LIMITED air** (`ZnCO₃ → ZnO + CO₂↑`)! Reduce `ZnO` with Carbon (`ZnO + C → Zn + CO`) OR use reactive displacement (`Na, Ca, Al` reducing `MnO₂`: `3MnO₂ + 4Al → 3Mn(l) + 2Al₂O₃ + heat`). Flagship railway exam reaction (**Fig 3.11**): **==Thermite Reaction `Fe₂O₃(s) + 2Al(s) → 2Fe(l) + Al₂O₃(s) + Heat`==** pours molten iron directly to **weld cracked railway tracks & machine parts**!\n• **Top Tier (`K, Na, Ca, Mg, Al`)**: **Carbon CANNOT reduce these** because their **affinity for oxygen exceeds Carbon’s** (`p.57`)! Extracted via **electrolysis of molten chlorides/oxides**: `Na⁺ + e⁻ → Na` at **Cathode (−)**; `2Cl⁻ → Cl₂ + 2e⁻` at **Anode (+)** (`Al` via `Al₂O₃`).\n• **Electrolytic Refining (`3.4.6`, Fig 3.12, `Ex Q8`)**: For `Cu, Zn, Sn, Ni, Ag, Au` -> **Impure Metal = ANODE (`+`)**, **Thin Pure Strip = CATHODE (`−`)**, **Metal Salt (`acidified CuSO₄`) = ELECTROLYTE**. Soluble impurities enter solution while insoluble impurities (`Au/Ag/Pt`) drop beneath the anode as **==Anode Mud (`एनोड पंक`)==**!',
            hi: 'भूपर्पटी के तत्व/यौगिक **खनिज (`Minerals`)** हैं; जिनसे धातु का लाभकारी निष्कर्षण हो वे **अयस्क (`Ores`)**, और इनमें मिली मिट्टी-रेत अशुद्धियाँ **==गैंग (`Gangue`)==** कहलाती हैं (`चित्र 3.10`)। सांद्रण के बाद **तीन वर्ग (`3.4.3–3.4.6`)**:\n• **निम्न श्रेणी (`Hg, Cu`)**: **सिनाबार (`HgS`)** को वायु में गरम कर `HgO`, फिर अधिक तापन से तरल मर्करी (`Hg(l)`) मिलता है; इसी प्रकार `Cu₂S` से स्वतः अपचयन द्वारा ताँबा (`6Cu`) प्राप्त होता है (`Group D Shift 15`)।\n• **मध्यम श्रेणी (`Zn, Fe, Pb, Mn`)**: सल्फाइड/कार्बोनेट की बजाय ऑक्साइड से अपचयन आसान है (`अभ्यास Q14d`)। **==भर्जन (`Roasting`)==**: सल्फाइड अयस्क को **अधिक वायु** में गरम करना (`2ZnS+3O₂ → 2ZnO+2SO₂↑`)। **==निस्तापन (`Calcination`)==**: कार्बोनेट अयस्क को **सीमित वायु** में गरम करना (`ZnCO₃ → ZnO+CO₂↑`)। आगे `C` (`ZnO+C → Zn+CO`) या `Al` विस्थापन से अपचयन: **==थर्मिट अभिक्रिया (`Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + ऊष्मा`, चित्र 3.11)==** इतनी ऊष्माक्षेपी है कि लोहा गलित रूप में निकलकर **रेल की पटरियों की दरारें व मशीनी पुर्जे जोड़ता** है!\n• **उच्च श्रेणी (`K–Al`)**: इनकी **`O₂` के प्रति बंधुता कार्बन से अधिक** होने से `C` से अपचयन नहीं हो सकता! इन्हें गलित क्लोराइड/ऑक्साइड (`Al₂O₃` बॉक्साइट) के **विद्युत-अपघटन** से **कैथोड (`−`)** पर प्राप्त करते हैं (`Na⁺ + e⁻ → Na`; एनोड पर `Cl₂`)।\n• **वैद्युतअपघटनी परिष्करण (`3.4.6`, चित्र 3.12, `Q8`)**: **अशुद्ध धातु का एनोड (`+`)**, **शुद्ध पतली पट्टी का कैथोड (`−`)**, **अम्लीकृत `CuSO₄` विद्युत-अपघट्य** — शुद्ध ताँबा कैथोड पर जमता है व अविलेय अशुद्धियाँ तली पर **==एनोड पंक (`Anode Mud`)==** बनाती हैं!',
          },
          viralTrick: {
            en: '**Roast-S = Air+ (`SO₂`) | Calcine-C = Air− (`CO₂`)** (`C-C` Carbonates go to Calcination releasing `CO₂`!). **Electrolysis Polarity (`3.4.5–3.4.6`)**: **Cat**hode (`−`) ALWAYS deposits **pure metal cation (`Cu²⁺ / Na⁺`)**!',
            hi: '**“स-भ, क-नि” ट्रिक**: **स**ल्फाइड → **भ**र्जन (अधिक वायु + `SO₂`)! **का**र्बोनेट (`CO₃`) → **नि**स्तापन (सीमित वायु + `CO₂`)! वैद्युत अपघटन व परिष्करण में **कैथोड (`−`) पर सदैव शुद्ध धातु** जमती है!',
          },
          inlinePyqIds: ['pyq-c3-4', 'pyq-c3-12'],
        },
      ],
    },
    {
      id: 'corrosion-prevention-alloys',
      number: '3.5',
      flowDiagramKey: 'c10-ch3-refining-rust-alloys-diagram',
      title: {
        en: 'Corrosion (`Ag₂S, Green Cu, Fe Rust`), Act 3.14 (`Air+Water`), Galvanisation & Alloys (`Steel, Brass, Bronze, Solder, Amalgam, Iron Pillar`)',
        hi: 'संक्षारण (`Ag₂S काला, कॉपर हरा, जंग`), क्र. 3.14, यशदलेपन तथा मिश्रातु (`इस्पात, पीतल, काँसा, सोल्डर, अमलगम, दिल्ली स्तंभ`)',
      },
      summaryTag: {
        en: 'NCERT Pages 58–61 • Fig 3.13 CaCl₂/Oil Tubes, Tin vs Zinc Cans Ex Q4, 24K→22K Gold & Low-Conductivity Alloys',
        hi: 'NCERT पृ. 58–61 • चित्र 3.13, टिन बनाम जिंक खाद्य डिब्बे (Q4), 22 कैरेट सोना व 1600 वर्ष पुराना लौह स्तंभ',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Three Metals Corroding Differently, Activity 3.14 Rust Proof & Sacrificial Galvanisation',
            hi: '1. चाँदी-कॉपर-लोहा संक्षारण अंतर, क्रियाकलाप 3.14 (`A, B, C`) तथा खरोंच के बाद भी यशदलेपन सुरक्षा (`3.5.1`)',
          },
          conceptStory: {
            en: 'Review NCERT’s **exact three corrosion equations (`p.58–59`)** plus **Activity 3.14 (`Fig 3.13`)**:\n• **Silver (`चाँदी`)**: Reacts with **atmospheric Sulphur** -> forms **==black `Silver Sulphide (Ag₂S)`==** coating.\n• **Copper (`ताँबा`)**: Reacts slowly with **moist atmospheric `CO₂`** -> loses brown shine under a **==GREEN coat of basic Copper Carbonate (`CuCO₃·Cu(OH)₂`)==** (`why sour lemon/tamarind acid cleans tarnished copper vessels — Ex Q13`: acid dissolves basic carbonate leaving clean metallic copper!).\n• **Iron (`लोहा`)**: **Activity 3.14 (`Fig 3.13`)** keeps clean nails in 3 corked tubes: **Tube A (`water + air`) RUSTS**, **Tube B (`boiled distilled water losing dissolved O₂ + 1 mL floating oil sealing air`) = NO RUST**, **Tube C (`dry air + anhydrous CaCl₂ drying agent`) = NO RUST**! Proves **BOTH oxygen AND moisture (`water`) are mandatory** for rusting!\n• **Prevention & ==Galvanisation (`यशदलेपन`)== (`p.59–60` Boxes)**: Painting, oiling, greasing, chrome-plating, anodising, alloying, OR coating steel with Zinc (`Galvanisation`). **Huge Exam Question (`Group D Shift 34 & NCERT Box`)**: Why does galvanised iron **STAY PROTECTED EVEN AFTER THE ZINC COAT IS BROKEN/SCRATCHED**? Because **Zinc (`more reactive than Iron!`) corrodes preferentially (`sacrificial oxidation`), sparing Iron underneath**! Also notice **`Ex Q4`**: Food cans are coated with **Tin (`Sn`) rather than Zinc (`Zn`)** because **Zinc is MORE reactive than Tin** and would react with food acids!',
            hi: 'अध्याय की **तीनों संक्षारण अभिक्रियाएँ (`पृ. 58–59`)**:\n• **सिल्वर (`चाँदी`)**: वायु में उपस्थित **सल्फर** से क्रिया कर **==काली परत (सिल्वर सल्फ़ाइड `Ag₂S`)==** बनती है।\n• **कॉपर (`ताँबा`)**: वायु में **आर्द्र `CO₂`** से क्रिया कर भूरे से **==हरे रंग का बेसिक कॉपर कार्बोनेट==** बनाता है (**अभ्यास Q13**: नींबू/इमली का खट्टा अम्ल इस क्षारकीय कार्बोनेट परत को घोलकर ताँबा चमका देता है!)।\n• **लोहा (`जंग — क्र. 3.14`, चित्र 3.13)**: तीन नलियाँ `A` (`जल+वायु → जंग लगा ✓`), `B` (`उबला आसवित जल + 1 mL तेल वायु रोकने हेतु → जंग नहीं ✗`), व `C` (`शुष्क वायु + निर्जल कैल्सियम क्लोराइड `CaCl₂` नमी सोखने हेतु → जंग नहीं ✗`) — सिद्ध करता है कि **जंग लगने हेतु वायु और नमी दोनों अनिवार्य** हैं!\n• **सुरक्षा व ==यशदलेपन (`Galvanisation`)==**: पेंट, तेल, ग्रीज, क्रोमियम लेपन, एनोडीकरण व **जस्ते (`Zn`) की परत (यशदलेपन)**! **प्रमुख परीक्षा प्रश्न (`Group D Shift 34` व `पृ. 60 बॉक्स`)**: जिंक परत टूटने पर भी लोहा सुरक्षित क्यों रहता है? क्योंकि लोहे से अधिक सक्रिय होने के कारण **जिंक अधिमानतः पहले संक्षारित होता है**! और खाद्य डिब्बों में जस्ते की जगह **टिन (`Sn`)** लेपन होता है क्योंकि **जिंक टिन से अधिक अभिक्रियाशील है** (`अभ्यास Q4`)!',
          },
          realImage: {
            url: '/ncert-notes/class10-chem-ch3/real/galvanized-zinc-spangle.webp',
            title: { en: 'Real Material (`Sec 3.5.1`): Hot-Dip Galvanised Steel Showing Metallic Zinc Crystalline Spangle', hi: 'असली सामग्री (`3.5.1`): यशदलेपित इस्पात सतह — लोहे की रक्षा करती क्रिस्टलीय जस्ते (`Zn`) की परत' },
            caption: {
              en: 'Zinc forms an adherent spangled barrier over steel sheets and continues safeguarding exposed steel even if scratched because Zinc is more reactive than Iron (`Group D Shift 34 PYQ`).',
              hi: 'लोहे व इस्पात पर जस्ते (`Zn`) की पतली परत चढ़ाने को यशदलेपन कहते हैं; खरोंच लगने पर भी जस्ता प्राथमिकता से संक्षारित होकर लोहे को जंग से बचाता है।',
            },
          },
          inlinePyqIds: ['pyq-c3-7'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Alloys (`Steel 0.05% C, Stainless Ni/Cr, Brass, Bronze, Solder, Amalgam, 22K Gold`) & 1600-Yr Delhi Iron Pillar',
            hi: '2. मिश्रातु (`इस्पात, स्टेनलेस, पीतल, काँसा, सोल्डर, अमलगम, 22K सोना`) एवं दिल्ली लौह स्तंभ (`पृ. 60`)',
          },
          conceptStory: {
            en: '**==Alloys (`मिश्रातु`)==** are **homogeneous mixtures** of two or more metals (`or metal + non-metal`) made by melting the primary metal and dissolving others in fixed proportions (`considered mixtures because they retain constituent properties & allow variable compositions — NTPC Shift 15 PYQ!`). Crucially, **ALLOYS HAVE LOWER ELECTRICAL CONDUCTIVITY AND LOWER MELTING POINT THAN PURE METALS (`NCERT p.60`!)**:\n• **Iron (`~0.05% Carbon`)** -> hard/strong **Steel** (`pure iron stretches too softly when hot!`); **`Fe + Nickel (Ni) + Chromium (Cr)` = Stainless Steel** (`hard & rustless!`).\n• **24K Gold (`soft`)** -> India uses **22-Carat Gold** (`22 parts pure Au + 2 parts Cu or Ag` for hardness).\n• **Brass (`पीतल`)** = `Copper + Zinc (Cu + Zn)` | **Bronze (`काँसा`)** = `Copper + Tin (Cu + Sn)` (`poor conductors vs pure Cu wiring`) | **Manganin** (`Cu-based alloy used for precision standard resistors — NTPC Shift 51`).\n• **Solder (`सोल्डर`)** = **`Lead + Tin (Pb + Sn)`** (`VERY LOW melting point -> welding electrical wires!` — **ALP CBT-2 PYQ**).\n• **Amalgam (`अमलगम`)**: Any alloy containing **Mercury (`Hg`)**!\n• **Ancient Indian Metallurgy (`p.60 Box`)**: **Iron Pillar near Qutub Minar, Delhi (`1600 years old`)** stands **`8 m` high**, weighs **`6 tonnes (6000 kg)`**, and remains remarkably rust-resistant!',
            hi: 'दो या अधिक धातुओं (या धातु+अधातु) का **समांगी मिश्रण ==मिश्रातु (`Alloy`)==** कहलाता है (`इसे मिश्रण इसलिए मानते हैं क्योंकि यह घटकों के गुण दर्शाता है व संघटन परिवर्ती हो सकता है — NTPC 2025 PYQ`)। **महत्वपूर्ण नियम (`पृ. 60`)**: **शुद्ध धातु की अपेक्षा मिश्रातु की विद्युत चालकता व गलनांक कम होता है (`जबकि उच्च प्रतिरोधकता व उच्च ताप पर ऑक्सीकृत न होने से तापन अवयवों में उपयोगी — Group D Shift 1`)**!\n• **लोहा (`Fe`)**: शुद्ध लोहा बहुत नर्म होने से लगभग **`0.05% कार्बन`** मिलाकर कठोर इस्पात बनाया जाता है; **निकैल (`Ni`) व क्रोमियम (`Cr`)** मिलाने से **स्टेनलेस इस्पात** (जंग-रहित) बनता है।\n• **सोना (`22 कैरेट`)**: **24 कैरेट** अत्यंत नर्म है, अतः **`22 भाग सोना + 2 भाग ताँबा/चाँदी`** मिलाकर आभूषण बनाते हैं।\n• **पीतल (`Brass`) = `Cu + Zn`** | **काँसा (`Bronze`) = `Cu + Sn`** (`Tech Shift 23 PYQ` — दोनों विद्युत के कुचालक जबकि शुद्ध `Cu` परिपथ में प्रयुक्त) | **मैंगनीन** (`ताँबा आधारित मानक प्रतिरोधक मिश्रातु`)।\n• **सोल्डर (`Solder`) = `सीसा (Pb) + टिन (Sn)`** (`अत्यंत निम्न गलनांक — विद्युत तारों की परस्पर वेल्डिंग हेतु`)।\n• **अमलगम (`Amalgam`)**: यदि मिश्रातु में एक धातु **पारद (`Hg`)** हो!\n• **दिल्ली स्थित लौह स्तंभ (`कुतुबमीनार के निकट`)**: लगभग **`1600` वर्ष पुराना**, **`8 m` ऊँचा**, **`6 टन (6000 kg)`** भार वाला जंग-रोधी चमत्कार!',
          },
          viralTrick: {
            en: '**“पीता-जी / काँस-टी / सी-टी-सोल्ड”**: **पीत**ल (`Brass`) = `Cu + Zn (जी)`! **काँस** (`Bronze`) = `Cu + Sn (टिन — ‘ज’ जेड ‘काँसा’ में ‘Z’ नहीं आएगा!)`! **सोल्ड**र = `सीसा (Pb) + टिन (Sn)`! **स्टेनलेस** = `Fe + Cr (को) + Ni (नहीं जंग = Ni)`!',
            hi: '**“पीताजी = पीतल (ताँबा+जिंक) | काँसा = कॉपर+टिन (`Sn`) | सोल्डर = सीसा+टिन (`Pb+Sn`)”**! याद रहे **काँसा में `Z` (`Zn`) नहीं होता** (`यह हमेशा टिन Sn है`)!',
          },
          inlinePyqIds: ['pyq-c3-2', 'pyq-c3-10', 'pyq-c3-11', 'pyq-c3-19'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Liquid Non-Metal (`Br`) vs Liquid Metal (`Hg`) & Palm Metals (`Ga/Cs`)', hi: 'द्रव धातु (`Hg`) बनाम द्रव अधातु (`Br`) एवं हथेली धातु (`Ga, Cs`)' },
      left: { en: 'Mercury (`Hg`) is liquid metal; Gallium & Caesium melt on hand (`30 °C`)', hi: 'मर्करी (`Hg`) एकमात्र द्रव धातु; गैलियम (`Ga`) व सीज़ियम (`Cs`) हथेली पर पिघलें!' },
      right: { en: 'Bromine (`Br₂`) is ONLY liquid non-metal; Iodine = lustrous; Graphite conducts', hi: 'ब्रोमीन (`Br`) एकमात्र द्रव अधातु; आयोडीन चमकीला व ग्रेफाइट सुचालक अधातु है!' },
    },
    {
      pair: { en: 'Roasting (`Sulphide`) vs Calcination (`Carbonate`)', hi: 'भर्जन (`Roasting`) बनाम निस्तापन (`Calcination`)' },
      left: { en: 'Roasting: Sulphide (`ZnS`) heated in EXCESS air -> `ZnO + SO₂↑`', hi: 'भर्जन: सल्फाइड अयस्क को अधिक वायु में तापन (`SO₂↑` मुक्त)!' },
      right: { en: 'Calcination: Carbonate (`ZnCO₃`) heated in LIMITED air -> `ZnO + CO₂↑`', hi: 'निस्तापन: कार्बोनेट अयस्क को सीमित वायु में तापन (`CO₂↑` मुक्त)!' },
    },
    {
      pair: { en: 'Dilute `HNO₃` Exception (`Mg, Mn`) vs Aqua Regia (`3 HCl : 1 HNO₃`)', hi: '`HNO₃` अपवाद (`Mg, Mn`) बनाम एक्वा रेजिया (`3 HCl : 1 HNO₃`)' },
      left: { en: 'Strong oxidiser `HNO₃` gives `H₂O` instead of `H₂` — ONLY `Mg & Mn` give `H₂` in very dil. `HNO₃`!', hi: '`HNO₃` के साथ `H₂` केवल `Mg` व `Mn` (अति तनु में) देते हैं, अन्य धातुएँ `H₂O` बनाती हैं!' },
      right: { en: 'Aqua Regia mixes `3 Conc. HCl : 1 Conc. HNO₃` to dissolve Gold & Platinum', hi: 'एक्वा रेजिया = `3 भाग सांद्र HCl : 1 भाग सांद्र HNO₃`, जो `Au/Pt` गला देता है!' },
    },
    {
      pair: { en: 'Brass (`Cu + Zn`) vs Bronze (`Cu + Sn`) vs Solder (`Pb + Sn`)', hi: 'पीतल (`Cu+Zn`) बनाम काँसा (`Cu+Sn`) बनाम सोल्डर (`Pb+Sn`)' },
      left: { en: 'Brass = `Cu+Zn`; Bronze = `Cu+Sn` (statues/poor electric conductors)', hi: 'पीतल = `Cu + Zn` | काँसा = `Cu + Sn` (दोनों शुद्ध ताँबे से कम सुचालक)' },
      right: { en: 'Solder = `Pb+Sn` (low melting point -> welds electrical wires); Amalgam = `+Hg`', hi: 'सोल्डर = `Pb + Sn` (निम्न गलनांक, तार वेल्डिंग); अमलगम = किसी भी धातु संग `Hg`!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Metallurgy Hero • Delhi', hi: 'प्राचीन भारतीय धातुकर्म' },
      name: { en: 'Ancient Indian Iron-Workers (~1600 yrs ago)', hi: 'प्राचीन भारतीय लौह कर्मी (`दिल्ली लौह स्तंभ`)' },
      country: { en: 'Qutub Minar Complex, Delhi (`p.60`)', hi: 'कुतुबमीनार परिसर, दिल्ली (`NCERT पृ. 60`)' },
      fact: {
        en: 'Forged the famous **8 m tall, 6-tonne (`6000 kg`)** Iron Pillar over **1600 years ago** using a specialized surface anti-rust process studied worldwide!',
        hi: 'लगभग **1600 वर्ष पूर्व `8 m` ऊँचा व `6 टन (6000 kg)`** भारी लौह स्तंभ बनाया जो आज भी जंग-रोधी बना हुआ है!',
      },
    },
    {
      badge: { en: 'Electrolysis Founder • 1807', hi: 'वैद्युतअपघटनी पृथक्करण • 1807' },
      name: { en: 'Sir Humphry Davy', hi: 'सर हम्फ्री डेवी (`Humphry Davy`)' },
      country: { en: 'United Kingdom', hi: 'ब्रिटेन (`रसायन विज्ञान`)' },
      fact: {
        en: 'First isolated highly reactive top-tier alkali/alkaline metals **Potassium (`K`) and Sodium (`Na`)** (`later Ca, Mg`) by electrolysing fused salts — matching NCERT Sec 3.4.5!',
        hi: 'गलित लवणों के वैद्युतअपघटन द्वारा सर्वाधिक अभिक्रियाशील **पोटैशियम (`K`) व सोडियम (`Na`)** का प्रथम बार निष्कर्षण किया (`भाग 3.4.5 सिद्धांत`)।',
      },
    },
    {
      badge: { en: 'Aluminothermic Process • 1895', hi: 'थर्मिट रेल वेल्डिंग • 1895' },
      name: { en: 'Hans Goldschmidt', hi: 'हंस गोल्डश्मिट (`Thermite Process`)' },
      country: { en: 'Germany (`NCERT Sec 3.4.4`)', hi: 'जर्मनी (`भाग 3.4.4 — रेेल संधि`)' },
      fact: {
        en: 'Patented exothermic **Aluminothermic (`Thermite`)** reduction (`Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃`) still used universally to fuse heavy railway tracks cleanly (`Fig 3.11`)!',
        hi: '**`Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃`** ऊष्माक्षेपी थर्मिट विधि विकसित की, जिसका उपयोग आज भी रेलवे ट्रैक की दरारें जोड़ने में होता है (`चित्र 3.11`)।',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-sodium-cut',
      figRef: { en: 'NCERT Act 3.2 (`Alkali Exception`)', hi: 'NCERT क्र. 3.2 — क्षारीय धातु अपवाद' },
      title: { en: 'Freshly Knife-Cut Silver-Lustrous Sodium (`Na`) Stored Under Kerosene', hi: 'चाकू से कटा चमकीला सोडियम (`Na`) — कोमलता व किरोसिन सुरक्षा' },
      imageUrl: '/ncert-notes/class10-chem-ch3/real/sodium-metal-cut.webp',
      hotspots: [
        { en: '`Li, Na, K` are soft enough to cut with a knife and react violently with cold water/air (`kept under kerosene`).', hi: '`Li, Na, K` चाकू से कटने योग्य मुलायम हैं व हवा/पानी संग तुरंत आग पकड़ने से किरोसिन तेल में रखे जाते हैं।' },
      ],
    },
    {
      id: 'vis-cinnabar-hgs',
      figRef: { en: 'NCERT Sec 3.4.3 (`Mercury Ore`)', hi: 'NCERT 3.4.3 — सिनाबार (`HgS`) अयस्क' },
      title: { en: 'Crimson Cinnabar (`HgS`) — Low-Reactivity Mercury Sulfide Ore', hi: 'चमकीला लाल सिनाबार (`HgS`) — पारे का सल्फाइड अयस्क' },
      imageUrl: '/ncert-notes/class10-chem-ch3/real/cinnabar-hgs-ore.webp',
      hotspots: [
        { en: 'Low in reactivity series: roasted in air (`HgS + O₂ -> HgO`), then heated directly to liquid Mercury (`Hg`).', hi: 'सक्रियता श्रेणी में नीचे स्थित: केवल वायु में भर्जन से `HgO` व अधिक तापन से तरल पारद (`Hg`) प्राप्त होता है।' },
      ],
    },
    {
      id: 'vis-galena-pbs',
      figRef: { en: 'NCERT Sec 3.4 (`Medium Sulfide Ore`)', hi: 'NCERT 3.4 — गैलेना (`PbS`) व पाइराइट' },
      title: { en: 'Metallic Cubic Galena (`PbS`) Crystals — Mid-Tier Sulfide Mineral', hi: 'घनाकार गैलेना (`PbS`) क्रिस्टल — लेड का सल्फाइड अयस्क' },
      imageUrl: '/ncert-notes/class10-chem-ch3/real/galena-pbs-ore.webp',
      hotspots: [
        { en: 'Medium-tier sulphide ores undergo excess-air Roasting to oxide before Carbon reduction (`p.57`).', hi: 'मध्यम सक्रियता श्रेणी के सल्फाइड अयस्कों को पहले भर्जन से ऑक्साइड में बदलकर फिर कार्बन से अपचयित करते हैं।' },
      ],
    },
    {
      id: 'vis-bauxite-ore',
      figRef: { en: 'NCERT Sec 3.4.5 (`High-Tier Ore`)', hi: 'NCERT 3.4.5 — बॉक्साइट (`Al₂O₃`) अयस्क' },
      title: { en: 'Natural Bauxite (`Al₂O₃·2H₂O`) Ore Requiring Electrolytic Reduction', hi: 'बॉक्साइट अयस्क — उच्च अभिक्रियाशील ऐलुमिनियम का स्रोत' },
      imageUrl: '/ncert-notes/class10-chem-ch3/real/bauxite-aluminium-ore.webp',
      hotspots: [
        { en: 'Carbon cannot reduce `Al₂O₃` because Al binds oxygen stronger than C; molten electrolysis yields pure Al (`ALP CBT-2 PYQ`).', hi: '`Al` की ऑक्सीजन बंधुता कार्बन से अधिक होने से इसे गलित विद्युत-अपघटन से निकाला जाता है (`ALP PYQ`)।' },
      ],
    },
    {
      id: 'vis-copper-crystal',
      figRef: { en: 'NCERT Fig 3.12 (`Electrorefining`)', hi: 'NCERT चित्र 3.12 — ताँबे का शोधन' },
      title: { en: 'Pure Electrolytic Copper Crystals Grown on Cathode (`99.9%+ Pure`)', hi: 'अम्लीकृत `CuSO₄` परिष्करण से कैथोड पर जमा शुद्ध कॉपर क्रिस्टल' },
      imageUrl: '/ncert-notes/class10-chem-ch3/real/electrolytic-copper-crystals.webp',
      hotspots: [
        { en: 'Impure Copper = Anode; Pure strip = Cathode; insoluble Au/Ag drop below Anode as Anode Mud (`Ex Q8`).', hi: 'अशुद्ध धातु एनोड व शुद्ध पट्टी कैथोड बनती है; अविलेय अशुद्धियाँ तली पर एनोड पंक के रूप में बैठती हैं।' },
      ],
    },
    {
      id: 'vis-galvanized-zinc',
      figRef: { en: 'NCERT Sec 3.5.1 (`Galvanisation`)', hi: 'NCERT 3.5.1 — यशदलेपन (`Zn` परत)' },
      title: { en: 'Hot-Dip Galvanised Steel Showing Protective Zinc Crystalline Spangle', hi: 'यशदलेपित इस्पात सतह — जंग-रोधी जिंक (`Zn`) क्रिस्टलीय आवरण' },
      imageUrl: '/ncert-notes/class10-chem-ch3/real/galvanized-zinc-spangle.webp',
      hotspots: [
        { en: 'Even if scratched, Zinc is more reactive than Iron and oxidises first (`sacrificial protection`, `Group D Shift 34`).', hi: 'जिंक परत क्षतिग्रस्त होने पर भी `Zn` लोहे से अधिक सक्रिय होने से पहले संक्षारित हो लोहे की रक्षा करता है!' },
      ],
    },
  ],
  activities: [
    {
      num: '3.1',
      title: { en: 'Activity 3.1: Fresh Sandpaper Metallic Lustre (`p.41`)', hi: 'क्रियाकलाप 3.1: रेगमाल से रगड़कर धात्विक चमक परीक्षण (`पृ. 41`)' },
      materials: { en: 'Fe, Cu, Al, Mg samples + sandpaper', hi: 'आयरन, कॉपर, ऐलुमिनियम, मैग्नीशियम नमूने व रेगमाल' },
      steps: { en: 'Inspect dull stored surfaces of `Fe, Cu, Al, Mg`, then rub firmly with **sandpaper** to strip surface tarnish/oxide.', hi: 'सभी नमूनों की मूल सतह देखें, फिर रेगमाल से रगड़कर सतह साफ करें व चमक देखें।' },
      examTakeaway: { en: 'Pure clean metallic surfaces display **==Metallic Lustre (`धात्विक चमक`)==** (`among non-metals ONLY Iodine is lustrous!`).', hi: 'शुद्ध रूप में धातु सतह चमकदार होती है (**धात्विक चमक**); अधातुओं में अपवाद केवल **आयोडीन** चमकीला है।' },
      predictQuestion: {
        prompt: { en: 'Why does sandpaper restore bright shine on old Al or Cu strips (`Act 3.1`)?', hi: 'पुराने कॉपर या ऐलुमिनियम टुकड़े रेगमाल से रगड़ने पर क्यों चमकने लगते हैं?' },
        options: { en: ['Sandpaper adds silver polish', 'It scrapes off the dull surface oxide/carbonate tarnish exposing pure metal lustre', 'It heats and melts surface metal', 'Air oxygen coats them shinier'], hi: ['रेगमाल चाँदी चढ़ाता है', 'ऊपरी ऑक्साइड/मलीन परत हटने से शुद्ध धातु की चमक प्रकट होती है', 'धातु पिघलती है', 'हवा से चमक आती है'] },
        correctIndex: 1,
        reason: { en: 'Air forms a dull tarnish layer over metals; abrading it restores characteristic pure metallic lustre.', hi: 'वायु से बनी मलीन ऑक्साइड परत रगड़ने पर हट जाती है और शुद्ध धातु चमक उठती है।' },
      },
    },
    {
      num: '3.2',
      title: { en: 'Activity 3.2: Hardness Test & Knife-Cut Sodium Exception (`p.42`)', hi: 'क्रियाकलाप 3.2: कठोरता जाँच एवं चाकू से सोडियम काटने का अपवाद (`पृ. 42`)' },
      materials: { en: 'Fe, Cu, Al, Mg, Sodium (`tongs + filter paper + watch-glass`), sharp knife', hi: 'लोहा, ताँबा, ऐलुमिनियम, सोडियम (चिमटा व फिल्टर पेपर सहित), तेज चाकू' },
      steps: { en: 'Try cutting `Fe, Cu, Al, Mg` with a sharp blade (`fail`); grip Sodium with **tongs**, dry kerosene gently between **filter-paper folds**, slice on watch-glass.', hi: 'सामान्य धातुओं को चाकू से काटने की कोशिश करें, फिर चिमटे से सोडियम सुखाकर वॉच-ग्लास पर चाकू से काटें।' },
      examTakeaway: { en: 'Metals are generally **hard** (`differing metal-to-metal`), EXCEPT soft Alkali Metals (**`Li, Na, K`**) easily cut with a knife!', hi: 'धातुएँ सामान्यतः कठोर हैं, पर अपवाद क्षारीय धातुएँ (**`Li, Na, K`**) चाकू से आसानी से कट जाती हैं!' },
      predictQuestion: {
        prompt: { en: 'Which group of metals on the periodic table is soft enough to cut with a knife (`p.44 & In-Text p.44 Q1`)?', hi: 'निम्न में से कौन-सी धातुओं का समूह चाकू से आसानी से काटा जा सकता है?' },
        options: { en: ['Fe, Cu, Zn', 'Li, Na, K (Alkali metals)', 'Ag, Au, Pt', 'Al, Pb, Hg'], hi: ['लोहा, ताँबा, जस्ता', 'लीथियम, सोडियम, पोटैशियम (क्षार धातु)', 'चाँदी, सोना, प्लैटिनम', 'Al, Pb, Hg'] },
        correctIndex: 1,
        reason: { en: 'Alkali metals (`Li, Na, K`) have low densities and weak metallic bonding making them knife-soft.', hi: 'क्षारीय धातुओं (`Li, Na, K`) का घनत्व व गलनांक कम होता है जिससे ये चाकू से कटती हैं।' },
      },
    },
    {
      num: '3.3',
      title: { en: 'Activity 3.3: Hammering Thin Sheets (`Malleability — Au & Ag Top`, `p.42`)', hi: 'क्रियाकलाप 3.3: हथौड़े से पतली चादर बनाना (`आघातवर्ध्यता`, `पृ. 42`)' },
      materials: { en: 'Pieces of Fe, Zn, Pb, Cu, iron block, hammer', hi: 'आयरन, जिंक, लेड, कॉपर के टुकड़े, लोहे का ब्लॉक, हथौड़ा' },
      steps: { en: 'Place each metal piece on an iron block and strike **4–5 times with a hammer**, noting flattening without shattering.', hi: 'प्रत्येक धातु टुकड़े को लोहे के ब्लॉक पर रखकर हथौड़े से 4–5 बार प्रहार कर आकार परिवर्तन नोट करें।' },
      examTakeaway: { en: 'Ability of metals to be beaten into thin sheets = **==Malleability (`आघातवर्ध्यता`)==**; **Gold & Silver** top all metals (`unlike brittle non-metals`)!', hi: 'पीटकर पतली चादर बनने का गुण **आघातवर्ध्यता** है — **सोना व चाँदी सर्वाधिक आघातवर्ध्य** धातुएँ हैं (`Tech 2024 Shift 13`)।' },
      predictQuestion: {
        prompt: { en: 'Which property allows Iron or Gold to be hammered into thin foil sheets without cracking?', hi: 'किस गुणधर्म के कारण धातु को पीटकर बिना टूटे पतली चादर बनाई जा सकती है?' },
        options: { en: ['Sonority', 'Brittleness', 'Malleability', 'Low density'], hi: ['ध्वानिकता', 'भंगुरता', 'आघातवर्ध्यता (Malleability)', 'निम्न घनत्व'] },
        correctIndex: 2,
        reason: { en: 'Malleability converts metal blocks into sheets; Gold & Silver exhibit highest malleability.', hi: 'आघातवर्ध्यता से धातु की चादरें बनती हैं (उदाहरण: चाँदी का वर्क / स्वर्ण पत्र)।' },
      },
    },
    {
      num: '3.4',
      title: { en: 'Activity 3.4: Drawing Wires (`Ductility: 1g Au → 2 km`, `p.42`)', hi: 'क्रियाकलाप 3.4: पतले तार खींचना (`तन्यता: 1g Au → 2 km`, `पृ. 42`)' },
      materials: { en: 'Everyday copper, aluminium & iron wire examples', hi: 'दैनिक जीवन के कॉपर, ऐलुमिनियम व आयरन तार' },
      steps: { en: 'List daily metallic wires and compare wire-drawing limits across Copper, Aluminium & Gold.', hi: 'दैनिक उपयोग के तारों की सूची बनाकर तन्यता गुणधर्म की तुलना करें।' },
      examTakeaway: { en: 'Drawing metals into thin wires = **==Ductility (`तन्यता`)==**; **Gold (`Au`) is MOST ductile (`1 g → 2 km wire!`)**.', hi: 'तार खींचने की क्षमता **तन्यता** है; **सोना सर्वाधिक तन्य** है — मात्र **`1 ग्राम` सोने से `2 km` लंबा तार** बनता है (`Tech Shift 17`)!' },
      predictQuestion: {
        prompt: { en: 'Approximately how long a thin wire can be drawn from just `1 gram` of pure Gold (`NCERT p.42`)?', hi: 'मात्र `1 ग्राम` सोने से कितना लंबा पतला तार खींचा जा सकता है (`NCERT पृ. 42`)?' },
        options: { en: ['20 metres', '200 metres', '2 kilometres (2 km)', '20 kilometres'], hi: ['20 मीटर', '200 मीटर', '2 किलोमीटर (2 km)', '20 किलोमीटर'] },
        correctIndex: 2,
        reason: { en: 'Direct NCERT p.42 highlight: 1 gram of Gold draws into a 2 km wire!', hi: 'अक्षरशः NCERT पृ. 42: 1 ग्राम सोने से 2 km लंबा तार बनाया जा सकता है।' },
      },
    },
    {
      num: '3.5',
      title: { en: 'Activity 3.5: Thermal Conduction & High MP (`Fig 3.1`, `p.43`)', hi: 'क्रियाकलाप 3.5: ऊष्मा सुचालकता एवं उच्च गलनांक जाँच (`चित्र 3.1`, `पृ. 43`)' },
      materials: { en: 'Al/Cu wire, clamp stand, pin, wax, burner', hi: 'ऐलुमिनियम या कॉपर तार, क्लैंप स्टैंड, पिन, मोम, बर्नर' },
      steps: { en: 'Clamp metal wire horizontally, fix a pin with **wax** at far free end, heat wire near clamp with burner.', hi: 'स्टैंड में Al/Cu तार क्लैंप कर खुले सिरे पर मोम से पिन चिपकाएँ और क्लैंप के पास गरम करें।' },
      examTakeaway: { en: 'Heat travels rapidly down wire dropping pin WITHOUT melting wire (`Metals conduct heat + high MP`; **`Ag & Cu` best; `Pb & Hg` poor!**).', hi: 'बिना तार पिघले (`उच्च गलनांक`) पिन गिरना सिद्ध करता है कि धातु **ऊष्मा के सुचालक** हैं (`Ag, Cu सर्वश्रेष्ठ; Pb, Hg कुचालक`)!' },
      predictQuestion: {
        prompt: { en: 'What proves `Al` or `Cu` wire has both good thermal conductivity AND high melting point in Fig 3.1?', hi: 'चित्र 3.1 में तार की ऊष्मा चालकता व उच्च गलनांक दोनों कैसे सिद्ध होते हैं?' },
        options: { en: ['Wax melts and pin falls quickly while wire remains solid unmelted', 'Wire catches blue flame instantly', 'Pin melts into wire', 'Stand turns cold'], hi: ['मोम पिघलकर पिन गिरती है पर धातु तार बिना द्रवित हुए ठोस बना रहता है', 'तार तुरंत जल जाता है', 'पिन धातु में मिल जाती है', 'स्टैंड ठंडा पड़ता है'] },
        correctIndex: 0,
        reason: { en: 'Conducted heat reaches far end melting low-MP wax long before metal approaches melting temperature.', hi: 'ऊष्मा चालन से दूर सिरे का मोम पिघलता है जबकि उच्च गलनांक के कारण तार ठोस रहता है।' },
      },
    },
    {
      num: '3.6',
      title: { en: 'Activity 3.6: Electric Circuit Conductivity Bulb Test (`Fig 3.2`, `p.43`)', hi: 'क्रियाकलाप 3.6: विद्युत परिपथ चालकता जाँच व `PVC` आवरण (`चित्र 3.2`, `पृ. 43`)' },
      materials: { en: 'Battery, bulb, clips A/B, switch, test metal strips', hi: 'बैटरी, बल्ब, क्लिप A/B, स्विच व जाँच धातु नमूने' },
      steps: { en: 'Clamp each metal test sample between terminals A & B in a series bulb circuit (`Fig 3.2`) and close switch.', hi: 'चित्र 3.2 परिपथ के टर्मिनल A व B के बीच प्रत्येक धातु टुकड़ा लगाकर बल्ब जलने का प्रेक्षण करें।' },
      examTakeaway: { en: 'Bulb glows brightly -> **Metals conduct electricity** (`wire coated in PVC/rubber for insulation`; ringing metals = **Sonorous**!).', hi: 'बल्ब जलने से धातुओं की **विद्युत चालकता** सिद्ध होती है (सुरक्षा हेतु तारों पर **`PVC`/रबड़** चढ़ाई जाती है)!' },
      predictQuestion: {
        prompt: { en: 'Why are copper household wiring cables coated with `PVC` (`Polyvinyl Chloride`) or rubber (`p.43`)?', hi: 'घरों तक बिजली पहुँचाने वाले ताँबे के तारों पर `PVC` या रबड़ की परत क्यों चढ़ी होती है?' },
        options: { en: ['To increase copper ductility', 'PVC/rubber acts as an electrical insulator preventing shock hazards', 'To make cables sonorous', 'To lower melting point'], hi: ['तन्यता बढ़ाने हेतु', 'PVC/रबड़ विद्युतरोधी होने से करंट व शॉर्ट-सर्किट से सुरक्षा देते हैं', 'ध्वनि उत्पन्न करने हेतु', 'गलनांक घटाने हेतु'] },
        correctIndex: 1,
        reason: { en: 'High-conductivity copper inside must be insulated externally with non-conducting PVC/rubber.', hi: 'ताँबा सुचालक है और PVC विद्युत कुचालक आवरण बनकर स्पर्श सुरक्षा देता है।' },
      },
    },
    {
      num: '3.7',
      title: { en: 'Activity 3.7: Testing Non-Metals (`Carbon/Coal/Graphite, S, I₂`) in Table 3.1 (`p.44`)', hi: 'क्रियाकलाप 3.7: अधातुओं (`ग्रेफाइट, सल्फर, आयोडीन`) पर भौतिक परीक्षण दोहराव (`पृ. 44`)' },
      materials: { en: 'Coal/graphite rod, sulfur lump, iodine crystals + hammer + Fig 3.2 circuit', hi: 'कोयला/ग्रेफाइट, सल्फर, आयोडीन नमूने + हथौड़ा व विद्युत परिपथ' },
      steps: { en: 'Repeat lustre, hardness, hammering (`S/Coal shatter!`), wire-drawing, and bulb-circuit checks on `C, S, I₂`.', hi: 'इन अधातुओं के साथ चमक, कठोरता, आघातवर्ध्यता (`सल्फर टूटे`) व चालकता जाँच (`ग्रेफाइट सुचालक`) दोहराएँ।' },
      examTakeaway: { en: 'Non-metals are **non-malleable, non-ductile, brittle (`shatter`), poor conductors** — EXCEPT **==Iodine (`lustrous`)==**, **==Diamond (`hardest`)==**, **==Graphite (`conducts!`)==**!', hi: 'अधातु भंगुर व कुचालक होते हैं — प्रमुख अपवाद: **आयोडीन (चमकीला), हीरा (कठोरतम), ग्रेफाइट (विद्युत सुचालक)**!' },
      predictQuestion: {
        prompt: { en: 'Which non-metal sample in Activity 3.7 lights the electric circuit bulb AND which shows shiny metallic lustre?', hi: 'क्रियाकलाप 3.7 में कौन-सा अधातु परिपथ का बल्ब जलाता है तथा कौन-सा चमकीला दिखता है?' },
        options: { en: ['Sulfur burns bulb; Bromine shines', 'Graphite conducts to light bulb; Iodine shows lustre', 'Diamond lights bulb; Sulfur shines', 'None conduct or shine'], hi: ['सल्फर जलाए; ब्रोमीन चमके', 'ग्रेफाइट बल्ब जलाता है; आयोडीन चमकीला दिखता है', 'हीरा जलाए; सल्फर चमके', 'कोई नहीं'] },
        correctIndex: 1,
        reason: { en: 'Graphite (carbon allotrope) is an electrical conductor and Iodine is the lustrous non-metal!', hi: 'ग्रेफाइट विद्युत सुचालक अधातु है और आयोडीन में प्राकृतिक चमक होती है।' },
      },
    },
    {
      num: '3.8',
      title: { en: 'Activity 3.8: Mg Ribbon vs Sulfur Powder Oxide Litmus Acid-Base Test (`p.44–45`)', hi: 'क्रियाकलाप 3.8: `MgO` (क्षारकीय) बनाम `SO₂` (अम्लीय) ऑक्साइड लिटमस परीक्षण (`पृ. 44`)' },
      materials: { en: 'Mg ribbon, sulfur powder, water, red & blue litmus papers', hi: 'मैग्नीशियम पट्टी, सल्फर चूर्ण, जल, लाल व नीला लिटमस पत्र' },
      steps: { en: 'Burn Mg ribbon -> dissolve ash in water -> test red/blue litmus. Burn S -> trap gas in inverted test tube + shake with water -> test litmus.', hi: 'Mg जलाकर राख जल में घोल लिटमस जाँचें; फिर सल्फर जलाकर परखनली में धुआँ इकट्ठा कर जल में मिला लिटमस जाँचें।' },
      examTakeaway: { en: 'Metal solution (`Mg(OH)₂`) turns **red litmus BLUE (`BASIC`)**; Non-metal solution (`H₂SO₃`) turns **blue litmus RED (`ACIDIC`)**!', hi: 'अधिकांश धातु ऑक्साइड जल में घुलकर **क्षारकीय (`लाल→नीला`)**, जबकि अधातु ऑक्साइड **अम्लीय (`नीला→लाल`)** विलयन बनाते हैं!' },
      predictQuestion: {
        prompt: { en: 'What color change occurs on moist red & blue litmus dipped in dissolved burned Sulfur gas solution (`Act 3.8`)?', hi: 'सल्फर दहन से निकली गैस के जलीय विलयन में लिटमस पर क्या प्रभाव होता है (`क्र. 3.8`)?' },
        options: { en: ['Red turns Blue (Basic)', 'Blue turns Red (Acidic)', 'Both turn green', 'No change on moist litmus'], hi: ['लाल → नीला (क्षारीय)', 'नीला → लाल (अम्लीय)', 'हरा होता है', 'कोई बदलाव नहीं'] },
        correctIndex: 1,
        reason: { en: 'Sulfur forms acidic SO₂ / sulfurous acid in water turning moist blue litmus RED (`Ex Q9`).', hi: 'अधातु सल्फर का ऑक्साइड `SO₂` जल संग अम्लीय विलयन बनाता है जो नीले लिटमस को लाल करता है।' },
      },
    },
    {
      num: '3.9',
      title: { en: 'Activity 3.9: Burning Metals Over Flame (`K/Na, Mg, Al, Zn, Fe Filings, Cu, Ag/Au`, `p.45–47`)', hi: 'क्रियाकलाप 3.9: धातुओं का वायु में दहन व ज्वाला-ऑक्साइड क्रम (`पृ. 45–47`)' },
      materials: { en: 'Samples of Al, Cu, Fe, Pb, Mg, Zn, Na, tongs, eye goggles, burner', hi: 'Al, Cu, Fe, Pb, Mg, Zn, Na नमूने, चिमटा, सुरक्षा चश्मा, बर्नर' },
      steps: { en: 'Under teacher supervision with safety goggles, heat each metal in burner flame, observe flame colour, rate & oxide crust.', hi: 'शिक्षक निरीक्षण में प्रत्येक धातु को ज्वाला में गरम कर ज्वाला का रंग, दहन तीव्रता व ऑक्साइड परत नोट करें।' },
      examTakeaway: { en: '**`Na`** burns fiercely; **`Mg`** white flare; **`Al/Zn/Pb`** coat with protective oxide; **iron bar won’t burn while `Fe filings` sparkle**; **`Cu`** gets **black `CuO`**; **`Ag/Au` NO rxn**!', hi: '`Na` तुरंत जले, `Mg` श्वेत लौ दे, **लौह चूर्ण** ज्वाला में तेजी से जले, **ताँबे पर काला `CuO`** बने व `Ag/Au` उच्च ताप पर भी क्रिया नहीं करते!' },
      predictQuestion: {
        prompt: { en: 'What happens when shiny Copper is heated directly in a Bunsen burner flame (`p.46`)?', hi: 'वायु में ताँबे (कॉपर) को ज्वाला पर गरम करने से सतह पर कौन-सी परत चढ़ती है?' },
        options: { en: ['White flaky MgO layer', 'Black layer of Copper(II) oxide (CuO)', 'Green CuCO₃', 'Copper evaporates'], hi: ['सफेद MgO', 'काले रंग की कॉपर(II) ऑक्साइड (CuO) परत', 'हरी परत', 'ताँबा भाप बन जाता है'] },
        correctIndex: 1,
        reason: { en: '2Cu + O₂ → 2CuO forms a black copper(II) oxide crust (`p.46 Eq`).', hi: '`2Cu + O₂ → 2CuO`: गरम कॉपर पर काले रंग के कॉपर(II) ऑक्साइड की परत बनती है।' },
      },
    },
    {
      num: '3.10',
      title: { en: 'Activity 3.10: Metals with Cold Water, Hot Water & Steam Rig (`Fig 3.3`, `p.47–48`)', hi: 'क्रियाकलाप 3.10: ठंडा जल, गर्म जल व भाप उपकरण से धातु क्रिया (`चित्र 3.3`, `पृ. 47–48`)' },
      materials: { en: 'Beakers of cold & hot H₂O, metal pieces (`K..Au`), boiling tube, water-soaked glass wool, inverted jar (`Fig 3.3`)', hi: 'ठंडे/गर्म जल बीकर, धातु नमूने, गीला काँच तंतु, क्वथन नली व उल्टा जार (`चित्र 3.3`)' },
      steps: { en: 'Test cold water first (`note fire/floating`), move non-reactors to hot water, test remaining metals in **steam tube (`Fig 3.3`)**.', hi: 'पहले ठंडे जल, फिर गर्म जल और अंत में चित्र 3.3 में भाप (`गीले काँच तंतु को गरम कर`) से क्रिया जाँचें।' },
      examTakeaway: { en: 'Order: **`K/Na` (cold+fire) > `Ca` (cold, floats) > `Mg` (hot, floats) > `Al, Zn, Fe` (steam only -> `Fe₃O₄ + 4H₂`) > `Pb, Cu, Ag, Au` (NONE!)**.', hi: '`K/Na` ठंडे जल में आग; `Ca/Mg` `H₂` चिपकने से तैरें; `Al, Fe, Zn` केवल भाप से ऑक्साइड व `H₂` दें; `Cu, Ag, Au` बिल्कुल क्रिया नहीं करते!' },
      predictQuestion: {
        prompt: { en: 'Which balanced iron oxide forms when Iron reacts with STEAM in Fig 3.3 (`NCERT Eq p.48`)?', hi: 'चित्र 3.3 में गरम आयरन पर भाप गुजारने से आयरन का कौन-सा ऑक्साइड बनता है (`पृ. 48`)?' },
        options: { en: ['FeO', 'Fe₃O₄ (3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂)', 'Fe(OH)₃', 'No reaction happens'], hi: ['FeO', 'Fe₃O₄ (3Fe + 4H₂O → Fe₃O₄ + 4H₂)', 'Fe(OH)₃', 'कोई क्रिया नहीं'] },
        correctIndex: 1,
        reason: { en: 'Iron + steam forms mixed iron(II,III) oxide Fe₃O₄ and H₂ gas (`also Chapter 1 flagship balancing Eq!`).', hi: 'भाप संग आयरन `Fe₃O₄` व `H₂` गैस बनाता है (`3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂`)।' },
      },
    },
    {
      num: '3.11',
      title: { en: 'Activity 3.11: Dilute `HCl` Bubble Rate & Temperature Test (`p.48–49`)', hi: 'क्रियाकलाप 3.11: तनु `HCl` संग बुलबुले व ऊष्माक्षेपण दर (`पृ. 48–49`)' },
      materials: { en: 'Mg, Al, Zn, Fe, Cu (`NO Na/K — dangerous!`), dil. `HCl`, thermometers', hi: 'साफ Mg, Al, Zn, Fe, Cu (`Na/K नहीं!`), तनु `HCl` परखनलियाँ, थर्मामीटर' },
      steps: { en: 'Sandpaper metals, drop into `dil. HCl` with suspended thermometers, compare bubble speed and peak temp (`skip K/Na safely!`).', hi: 'धातुओं को तनु `HCl` में डाल थर्मामीटर से अधिकतम ताप व `H₂` बुलबुलों की दर नोट करें (`Na/K वर्जित`)।' },
      examTakeaway: { en: 'Rate & Exotherm order: **==`Mg > Al > Zn > Fe`==**; **Copper shows NO bubbles & NO temp rise** (`below [H]`!).', hi: 'अभिक्रियाशीलता व ऊष्माक्षेपी दर क्रम **`Mg > Al > Zn > Fe`** घटती है; **कॉपर तनु `HCl` संग कोई अभिक्रिया नहीं करता**!' },
      predictQuestion: {
        prompt: { en: 'Which metal produces fastest bubbles AND highest thermometer temperature with dil. `HCl` in Activity 3.11 (`Mg, Al, Zn, Fe, Cu`)?', hi: 'क्रियाकलाप 3.11 में तनु `HCl` संग किस धातु में सर्वाधिक बुलबुले व अधिकतम तापमान दर्ज होता है?' },
        options: { en: ['Copper (Cu)', 'Iron (Fe)', 'Zinc (Zn)', 'Magnesium (Mg)'], hi: ['कॉपर (Cu)', 'आयरन (Fe)', 'जिंक (Zn)', 'मैग्नीशियम (Mg)'] },
        correctIndex: 3,
        reason: { en: 'Decreasing order of H₂ evolution & exothermicity in Act 3.11 is Mg > Al > Zn > Fe (Cu = zero).', hi: 'क्रियाकलाप 3.11 अनुसार क्रम `Mg > Al > Zn > Fe` है, अतः मैग्नीशियम सबसे तेज व ऊष्माक्षेपी है।' },
      },
    },
    {
      num: '3.12',
      title: { en: 'Activity 3.12: Copper Wire in `FeSO₄` vs Iron Nail in `CuSO₄` (`Fig 3.4`, `p.49–50`)', hi: 'क्रियाकलाप 3.12: लवण विलयन विस्थापन जाँच (`चित्र 3.4`, `पृ. 49–50`)' },
      materials: { en: 'Clean copper wire in `FeSO₄(aq)`, iron nail in `CuSO₄(aq)`, test tubes', hi: '`FeSO₄` घोल में ताँबे का तार व `CuSO₄` घोल में लोहे की कील (`20 मिनट`)' },
      steps: { en: 'Place `Cu` wire in `FeSO₄` tube and `Fe` nail in blue `CuSO₄` tube (`Fig 3.4`); inspect after `20 minutes`.', hi: 'दोनों परखनलियों को स्टैंड में रखकर 20 मिनट बाद रंग व सतह का निरीक्षण करें।' },
      examTakeaway: { en: 'ONLY `Fe + CuSO₄` reacts (`more reactive Fe displaces Cu`), turning blue pale green (`FeSO₄`) with brown Cu coat (`ALP Shift 3`).', hi: 'केवल `Fe` वाली परखनली में विस्थापन होता है क्योंकि लोहा ताँबे से अधिक अभिक्रियाशील है (`Cu + FeSO₄` कोई क्रिया नहीं)!' },
      predictQuestion: {
        prompt: { en: 'Which tube shows a visible chemical displacement after 20 min in Fig 3.4?', hi: 'चित्र 3.4 की किस परखनली में 20 मिनट बाद विस्थापन अभिक्रिया दिखती है?' },
        options: { en: ['Copper wire inside FeSO₄ solution', 'Iron nail inside blue CuSO₄ solution', 'Both tubes react equally', 'Neither reacts'], hi: ['FeSO₄ में कॉपर तार', 'नीले CuSO₄ में लोहे की कील', 'दोनों में', 'किसी में नहीं'] },
        correctIndex: 1,
        reason: { en: 'Fe lies above Cu in Reactivity Series, displacing Cu from CuSO₄ while Cu cannot displace Fe.', hi: 'आयरन कॉपर से ऊपर होने के कारण उसे विस्थापित कर भूरा ताँबा व हल्का हरा `FeSO₄` बनाता है।' },
      },
    },
    {
      num: '3.13',
      title: { en: 'Activity 3.13: Ionic Salts (`NaCl, KI, BaCl₂`) Melting, Solubility & Bulb Conduction (`Fig 3.7–3.8`)', hi: 'क्रियाकलाप 3.13: लवणों का गलनांक, जल/किरोसिन विलेयता एवं चालकता (`चित्र 3.7–3.8`)' },
      materials: { en: '`NaCl, KI, BaCl₂`, metal spatula (`Fig 3.7`), water, petrol/kerosene, graphite-electrode beaker (`Fig 3.8`)', hi: 'NaCl, KI, BaCl₂, स्पैचुला (`चित्र 3.7`), जल, पेट्रोल, किरोसिन, ग्रेफाइट छड़ परिपथ (`चित्र 3.8`)' },
      steps: { en: 'Heat salt on spatula (`note high MP / flame colour`), test solubility in water vs petrol/kerosene, test conductivity in aqueous soln (`Fig 3.8`).', hi: 'स्पैचुला पर लवण गरम करें (`नहीं पिघले`), जल व पेट्रोल/किरोसिन में घोलें, और जलीय घोल में बल्ब चालकता जाँचें।' },
      examTakeaway: { en: 'Ionic salts have **high MP (`don’t melt on spatula`), dissolve in WATER (`insoluble in kerosene/petrol`), conduct ONLY molten or aqueous (`solid non-conductor!`)**.', hi: 'आयनिक लवण **जल में विलेय** (पेट्रोल-किरोसिन में अविलेय), उच्च गलनांक वाले व **केवल गलित/जलीय रूप में सुचालक** हैं (`Tech Shift 22`)!' },
      predictQuestion: {
        prompt: { en: 'Why does the bulb light up in Fig 3.8 when graphite electrodes dip into `NaCl(aq)` instead of solid salt crystals?', hi: 'चित्र 3.8 में ठोस `NaCl` के बजाय जलीय विलयन में बल्ब क्यों जल उठता है?' },
        options: { en: ['Water softens graphite', 'Aqueous solution has free mobile Na⁺ & Cl⁻ ions to carry current', 'Salt melts at 25 °C', 'Kerosene increases ions'], hi: ['पानी ग्रेफाइट गलाता है', 'जलीय घोल में मुक्त `Na⁺` व `Cl⁻` आयन गति कर विद्युत चालन करते हैं', 'नमक 25 °C पर पिघलता है', 'किरोसिन से चालकता आती है'] },
        correctIndex: 1,
        reason: { en: 'Solid ionic lattice locks ions; dissolving or melting frees ions to migrate toward opposite electrodes.', hi: 'ठोस में आयन बँधे होते हैं, पर विलयन/गलित में आयन स्वतंत्र गति करने से करंट बहता है।' },
      },
    },
    {
      num: '3.14',
      title: { en: 'Activity 3.14: Three Test Tubes A (`Air+H₂O`), B (`Boiled+Oil`), C (`CaCl₂`) Rusting Test (`Fig 3.13`, `p.59`)', hi: 'क्रियाकलाप 3.14: लोहे पर जंग की आवश्यक शर्तें (`परखनलियाँ A, B, C — चित्र 3.13`, `पृ. 59`)' },
      materials: { en: '3 clean iron nails, water, boiled distilled H₂O + `1 mL oil`, anhydrous `CaCl₂`, corks', hi: '3 साफ कीलें, सामान्य जल, उबला आसुत जल + `1 mL तेल`, निर्जल `CaCl₂`, कॉर्क' },
      steps: { en: 'Tube A: nails + water (`air+water`). Tube B: nails + **boiled distilled water + `1 mL oil`** (`oil seals air out`). Tube C: nails + **anhydrous `CaCl₂`** (`absorbs air moisture`). Wait a few days.', hi: 'A में पानी व हवा; B में उबले पानी (`घुली हवा निकली`) पर 1 mL तेल की परत; C में निर्जल `CaCl₂` (शुष्क कर्मक) रख कॉर्क लगाएँ।' },
      examTakeaway: { en: '**ONLY Tube A rusts!** (`B lacks dissolved air; C lacks moisture`) -> **Both air (`O₂`) AND water/moisture are necessary for iron rusting!**', hi: 'केवल **परखनली A की कीलों पर जंग लगता है** (`B में वायु नहीं, C में नमी नहीं`) — अतः **जंग हेतु वायु व जल दोनों अनिवार्य** हैं!' },
      predictQuestion: {
        prompt: { en: 'In Activity 3.14, what is the purpose of adding `1 mL oil` over boiled distilled water in Tube B & `CaCl₂` in Tube C?', hi: 'क्रियाकलाप 3.14 में B नली में तेल व C में निर्जल `CaCl₂` डालने का उद्देश्य क्या है?' },
        options: { en: ['Oil rusts iron faster; CaCl₂ adds water', 'Oil prevents air dissolving into water; Anhydrous CaCl₂ absorbs moisture leaving dry air', 'Oil cleans grease; CaCl₂ melts nails', 'Both act as acids'], hi: ['तेल जंग बढ़ाता है', 'तेल वायु को जल में घुलने से रोकता है; निर्जल CaCl₂ हवा की नमी सोख लेता है', 'तेल कील साफ करता है', 'दोनों अम्ल हैं'] },
        correctIndex: 1,
        reason: { en: 'Isolating air in Tube B and moisture in Tube C proves BOTH factors together cause iron rust in Tube A.', hi: 'तेल घुलित ऑक्सीजन रोकता है व `CaCl₂` नमी सोखता है — जिससे केवल पानी व केवल शुष्क हवा में जंग न लगना सिद्ध हो!' },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-3-1',
      title: {
        en: 'Metals vs Non-Metals Physical & Chemical Contrast + Every NCERT Exception (`Sec 3.1`)',
        hi: 'धातु बनाम अधातु: भौतिक एवं रासायनिक तुलना तथा सभी NCERT परीक्षा अपवाद (`सारणी 3.1`)',
      },
      headers: {
        en: ['Property / Test', 'Metals (`General Behavior`)', 'Non-Metals (`General Behavior`)', 'Mandatory Exam Exception!'],
        hi: ['गुणधर्म / जाँच', 'धातु (`सामान्य व्यवहार`)', 'अधातु (`सामान्य व्यवहार`)', 'अनिवार्य परीक्षा अपवाद (`PYQ`)'],
      },
      rows: [
        [{ en: '**State at Room Temp**', hi: '**कमरे के ताप पर अवस्था**' }, { en: 'Hard solids (`high density/MP`)', hi: 'कठोर ठोस (`उच्च गलनांक`)' }, { en: 'Solids or Gases (`soft/brittle`)', hi: 'ठोस या गैस (`भंगुर`)' }, { en: '**`Hg` liquid metal | `Br` liquid non-metal | `Ga/Cs` melt on palm!**', hi: '**`Hg` द्रव धातु | `Br` द्रव अधातु | `Ga/Cs` हथेली पर पिघलें!**' }],
        [{ en: '**Lustre & Hardness**', hi: '**चमक व कठोरता**' }, { en: 'Metallic lustre; very hard (`cutting fails`)', hi: 'चमकीली सतह; अत्यंत कठोर' }, { en: 'Dull (`non-lustrous`); brittle', hi: 'चमकहीन व भंगुर' }, { en: '**`Iodine` lustrous non-metal | `Li, Na, K` knife-soft | `Diamond` hardest**', hi: '**आयोडीन चमकीली अधातु | `Li, Na, K` चाकू से कटें | हीरा कठोरतम**' }],
        [{ en: '**Malleable / Ductile / Sonorous**', hi: '**चादर, तार व ध्वानिकता**' }, { en: 'High (`Au & Ag top; 1g Au → 2 km!`)', hi: 'उच्च (`Au सर्वाधिक तन्य — 1g→2km`)' }, { en: 'Neither malleable nor ductile (`shatter`)', hi: 'न चादर न तार (टूट जाते हैं)' }, { en: '**Carbon `C₆₀`/Diamond/Graphite** allotropes share chemical properties', hi: '**सोना-चाँदी सर्वाधिक आघातवर्ध्य व तन्य (`Tech 2024 Shift 17`)**' }],
        [{ en: '**Heat & Electric Conductivity**', hi: '**ऊष्मा एवं विद्युत चालकता**' }, { en: 'Good conductors (`Ag & Cu top heat!`)', hi: 'उत्तम सुचालक (`Ag, Cu सर्वश्रेष्ठ`)' }, { en: 'Insulators / non-conductors', hi: 'विद्युत व ऊष्मा के कुचालक' }, { en: '**`Pb & Hg` POOR heat metals | `Graphite` conducts electricity!**', hi: '**`Pb व Hg` ऊष्मा के कुचालक धातु | `ग्रेफाइट` विद्युत सुचालक अधातु!**' }],
        [{ en: '**Oxides & Electron Role (`Act 3.8`)**', hi: '**ऑक्साइड प्रकृति व आयन**' }, { en: '**Electropositive (`lose e⁻ → +`)**; **Basic Oxides**', hi: '**विद्युत धनात्मक (`+`)**; **क्षारकीय ऑक्साइड**' }, { en: '**Electronegative (`gain e⁻ → −`)**; **Acidic/Neutral**', hi: '**विद्युत ऋणात्मक (`−`)**; **अम्लीय/उदासीन**' }, { en: '**`Al₂O₃` & `ZnO` are AMPHOTERIC (`Acid+Base`)** (`Tech Shift 21`)', hi: '**`Al₂O₃` व `ZnO` उभयधर्मी (`अम्ल व क्षार दोनों से क्रिया`)!**' }],
      ],
    },
    {
      id: 'tbl-3-2',
      title: {
        en: 'Master Reaction Matrix: Air, Water/Steam & Dilute Acids Across Reactivity Tiers (`Sec 3.2`)',
        hi: 'धातुओं की वायु, ठंडे/गर्म जल/भाप तथा तनु अम्ल व `HNO₃` अभिक्रिया सारणी (`भाग 3.2`)',
      },
      headers: {
        en: ['Reactivity Band / Metals', 'Air (`O₂`) Behavior', 'Water / Steam (`Act 3.10`)', 'Dilute Acids & Key Rule'],
        hi: ['धातु वर्ग', 'वायु (`O₂`) से क्रिया', 'जल / भाप अभिक्रिया (`क्र. 3.10`)', 'तनु अम्ल व परीक्षा मुख्य नियम'],
      },
      rows: [
        [{ en: '**`K, Na`** (`Top`)', hi: '**`K, Na`** (`शीर्ष`)' }, { en: 'Ignite violently (`store in Kerosene!`)', hi: 'तुरंत आग पकड़े (**किरोसिन में सुरक्षा**)' }, { en: '**Cold water** -> violent, `H₂` catches fire!', hi: '**ठंडे जल** से विस्फोटक — `H₂` जले' }, { en: 'Too dangerous for `Act 3.11`; `Na₂O/K₂O` water-soluble alkalis', hi: 'ऑक्साइड जल में घुल `NaOH / KOH` बनाते' }],
        [{ en: '**`Ca, Mg`** (`High`)', hi: '**`Ca, Mg`** (`उच्च`)' }, { en: '`Mg` dazzling white flame; thin oxide crust', hi: '`Mg` श्वेत लौ संग `MgO`' }, { en: '`Ca` (**cold**), `Mg` (**hot**): **BOTH FLOAT** (`H₂` clings!)', hi: '`Ca` (ठंडा), `Mg` (गर्म): **`H₂` चिपकने से तैरें!**' }, { en: '**`Mg` & `Mn` + very dil. `HNO₃` ALONE evolve `H₂`!** (`p.49`)', hi: '**केवल `Mg` व `Mn` अति तनु `HNO₃` संग `H₂` देते हैं!**' }],
        [{ en: '**`Al, Zn, Fe`** (`Mid`)', hi: '**`Al, Zn, Fe`** (`मध्यम`)' }, { en: '`Al₂O₃/ZnO` (**Amphoteric**); `Fe` filings sparkle', hi: '`Al₂O₃, ZnO` **उभयधर्मी**; लौह चूर्ण दहन' }, { en: '**STEAM ONLY**: **`3Fe+4H₂O(g)→Fe₃O₄+4H₂`**', hi: '**केवल भाप से**: `3Fe+4H₂O → Fe₃O₄+4H₂`' }, { en: 'Bubble speed: **`Mg > Al > Zn > Fe`** (`Act 3.11`)', hi: '`HCl` संग वेग क्रम: **`Mg > Al > Zn > Fe`**' }],
        [{ en: '**`Pb, Cu, Hg, Ag, Au`** (`Low`)', hi: '**`Pb, Cu, Hg, Ag, Au`** (`निम्न`)' }, { en: '`Cu` coats **black `CuO`**; `Ag/Au` ZERO reaction', hi: '`Cu` काला **`CuO`** बनाए; `Ag/Au` कोई क्रिया नहीं' }, { en: '**ZERO reaction** even with hot steam (`Ex Q16`)', hi: 'भाप से भी **कोई अभिक्रिया नहीं** (`Q16`)' }, { en: '`Cu` no `H₂` in dil. `HCl`; **`Au/Pt` ONLY in Aqua Regia `3:1`**', hi: '`Cu` तनु अम्ल से `H₂` नहीं; **`Au/Pt` केवल एक्वा रेजिया `3:1` में**!' }],
      ],
    },
    {
      id: 'tbl-3-3',
      title: {
        en: 'Complete Metallurgy Roadmap: Tier -> Ore Type -> Furnace Process & Balanced Equation (`Sec 3.4`)',
        hi: 'संपूर्ण धातुकर्म सारणी: श्रेणी, अयस्क प्रकार, भर्जन/निस्तापन/विद्युत-अपघटन व समीकरण (`भाग 3.4`)',
      },
      headers: {
        en: ['Reactivity Tier', 'Typical Ores', 'Industrial Extraction Method', 'Key Balanced Equation / Output'],
        hi: ['सक्रियता वर्ग', 'प्रमुख अयस्क', 'औद्योगिक निष्कर्षण विधि', 'संतुलित समीकरण व मुख्य बिंदु'],
      },
      rows: [
        [{ en: '**High (`K, Na, Ca, Mg, Al`)**', hi: '**उच्च (`K, Na, Ca, Mg, Al`)**' }, { en: 'Molten Chlorides & **Bauxite (`Al₂O₃`)**', hi: 'गलित क्लोराइड व **बॉक्साइट (`Al₂O₃`)**' }, { en: '**Electrolytic Reduction** (`never C!`)', hi: '**गलित लवण का विद्युत-अपघटन**' }, { en: '**Cathode (`−`)**: `Na⁺ + e⁻ → Na` | **Anode (`+`)**: `Cl₂↑`', hi: '**कैथोड पर धातु**, एनोड पर `Cl₂` (`O₂` बंधुता अधिक — `p.57`)' }],
        [{ en: '**Medium Sulphide (`Zn, Pb`)**', hi: '**मध्यम सल्फाइड (`ZnS, PbS`)**' }, { en: 'Zinc Blende (`ZnS`), Galena (`PbS`)', hi: 'जिंक ब्लेंड (`ZnS`), गैलेना (`PbS`)' }, { en: '**Roasting** (`excess O₂`) -> C reduction', hi: '**भर्जन** (`अधिक वायु`) → कार्बन अपचयन' }, { en: '`2ZnS + 3O₂ → 2ZnO + 2SO₂↑`; `ZnO + C → Zn + CO`', hi: '`2ZnS + 3O₂ → 2ZnO + 2SO₂↑` फिर `C` से `Zn`' }],
        [{ en: '**Medium Carbonate (`Zn`) & Thermite (`Fe/Mn`)**', hi: '**मध्यम कार्बोनेट व थर्मिट**' }, { en: 'Calamine (`ZnCO₃`), Hematite (`Fe₂O₃`), `MnO₂`', hi: 'कैलामाइन (`ZnCO₃`), `Fe₂O₃`, `MnO₂`' }, { en: '**Calcination** (`limited air`) / Al Thermite', hi: '**निस्तापन** (`सीमित वायु`) व **थर्मिट**' }, { en: '`ZnCO₃ → ZnO + CO₂↑`; **`Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃`**', hi: '`Fe₂O₃+2Al → 2Fe(l)+Al₂O₃` (**रेल पटरी जोड़!**)' }],
        [{ en: '**Low (`Hg, Cu`) & Refining**', hi: '**निम्न (`Hg, Cu`) व परिष्करण**' }, { en: '**Cinnabar (`HgS`)**, `Cu₂S`, Native `Au/Ag`', hi: '**सिनाबार (`HgS`)**, `Cu₂S`, स्वतंत्र `Au/Pt`' }, { en: 'Heating in air + **Electrorefining**', hi: 'वायु तापन + **वैद्युतअपघटनी शोधन**' }, { en: '`2HgS+3O₂→2HgO` -> `2Hg(l)+O₂` | **Anode Mud** (`Au/Ag`)', hi: '**अशुद्ध `Cu` एनोड**, **शुद्ध कैथोड** (`अम्लीकृत CuSO₄`)' }],
      ],
    },
    {
      id: 'tbl-3-4',
      title: {
        en: 'NCERT Table 3.4: Melting & Boiling Points (K) and Key Rules of Ionic Compounds (`Sec 3.3.1`)',
        hi: 'NCERT सारणी 3.4: आयनिक यौगिकों के गलनांक, क्वथनांक (K) व प्रमुख चार गुणधर्म (`भाग 3.3.1`)',
      },
      headers: {
        en: ['Ionic Compound', 'Melting Point (`K`)', 'Boiling Point (`K`)', 'Structure / Conduction Rule'],
        hi: ['आयनिक यौगिक', 'गलनांक (`K`)', 'क्वथनांक (`K`)', 'संरचना व चालकता मुख्य तथ्य'],
      },
      rows: [
        [{ en: '**`NaCl` (`Table Salt`)**', hi: '**`NaCl` (`साधारण नमक`)**' }, { en: '**`1074 K`** (`Tech Shift 6`)', hi: '**`1074 K`** (`Tech Shift 6 PYQ`)' }, { en: '**`1686 K`**', hi: '**`1686 K`**' }, { en: 'Aggregate of `[Na⁺][Cl⁻]`; conducts **aqueous/molten ONLY**', hi: 'विपरीत आयनों का समुच्चय; **ठोस में कुचालक**, गलित/जलीय में सुचालक' }],
        [{ en: '**`LiCl`**', hi: '**`LiCl`**' }, { en: '`887 K` (`lowest in Table 3.4`)', hi: '`887 K` (`सारणी 3.4 में न्यूनतम`)' }, { en: '`1600 K`', hi: '`1600 K`' }, { en: 'Water-soluble; **insoluble in petrol & kerosene**', hi: 'जल में विलेय; पेट्रोल व किरोसिन में अविलेय' }],
        [{ en: '**`CaCl₂`**', hi: '**`CaCl₂` (Anhyd. Drying Agent!)**' }, { en: '`1045 K`', hi: '`1045 K`' }, { en: '`1900 K`', hi: '`1900 K`' }, { en: 'Anhydrous `CaCl₂` absorbs water vapor in **`Act 3.14` Tube C**!', hi: 'निर्जल `CaCl₂` **`क्र. 3.14` नली C में शुष्क कर्मक** है!' }],
        [{ en: '**`CaO` (`Quick Lime`)**', hi: '**`CaO` (`बिना बुझा चूना`)**' }, { en: '**`2850 K` (`HIGHEST!`)**', hi: '**`2850 K` (`सारणी में सर्वोच्च!`)**' }, { en: '**`3120 K`**', hi: '**`3120 K`**' }, { en: '**Ex Q3**: high-MP Oxide soluble in water -> `Ca(OH)₂`', hi: '**अभ्यास Q3**: उच्च गलनांक व जल विलेय ऑक्साइड (`Ca`)' }],
        [{ en: '**`MgCl₂`**', hi: '**`MgCl₂`**' }, { en: '`981 K` (`2 Cl⁻ per Mg²⁺`)', hi: '`981 K` (`Mg²⁺ + 2Cl⁻`, चित्र 3.6)' }, { en: '`1685 K`', hi: '`1685 K`' }, { en: 'Brittle crystal (`pressure repels like charges`, `Shift 19`)', hi: 'दाब पर भंगुर (`प्रतिकर्षण`, `Shift 19`) व कठोर ठोस' }],
      ],
    },
    {
      id: 'tbl-3-5',
      title: {
        en: 'Master Corrosion Products & Essential Exam Alloys Composition Table (`Sec 3.5`, Pages 58–60)',
        hi: 'संक्षारण उत्पाद एवं सभी परीक्षा-उपयोगी मिश्रातु (Alloys) संघटन मास्टर तालिका (`पृ. 58–60`)',
      },
      headers: {
        en: ['Alloy / Corrosion Target', 'Exact Composition / Reactant', 'Characteristic Property (`NCERT p.58–60`)', 'Primary Application / PYQ Fact'],
        hi: ['मिश्रातु / संक्षारण पदार्थ', 'सटीक संघटन / कारक', 'विशिष्ट गुणधर्म (`NCERT पृ. 58–60`)', 'मुख्य उपयोग व परीक्षा तथ्य'],
      },
      rows: [
        [{ en: '**Stainless Steel / Steel**', hi: '**इस्पात व स्टेनलेस इस्पात**' }, { en: 'Steel: `Fe + ~0.05% C` | Stainless: **`Fe + Ni + Cr`**', hi: 'इस्पात: `Fe+0.05% C` | स्टेनलेस: **`Fe + Ni + Cr`**' }, { en: 'Hard, strong & **DOES NOT RUST** (`pure Fe too soft!`)', hi: 'कठोर, प्रबल एवं **जंग-रोधी**' }, { en: 'Utensils, surgical steel, construction', hi: 'बर्तन, उपकरण व मजबूत ढाँचे' }],
        [{ en: '**Brass (`पीतल`)**', hi: '**पीतल (`Brass`)**' }, { en: '**Copper + Zinc (`Cu + Zn`)**', hi: '**ताँबा + जस्ता (`Cu + Zn`)**' }, { en: '**Poor conductor** of electricity (`< pure Cu`)', hi: 'शुद्ध ताँबे से **कम विद्युत चालकता व गलनांक**' }, { en: 'Musical horns, fittings, valves', hi: 'सजावट, नल व वाद्ययंत्र' }],
        [{ en: '**Bronze (`काँसा`)**', hi: '**काँसा (`Bronze`)**' }, { en: '**Copper + Tin (`Cu + Sn`)** (`Tech Shift 23`)', hi: '**ताँबा + टिन (`Cu + Sn`)** (`Tech Shift 23`)' }, { en: 'Hard, corrosion-proof, **poor electric conductor**', hi: 'कठोर, संक्षारण-रोधी, विद्युत कुचालक' }, { en: 'Statues, medals, bells (`Manganin = Cu resistor`)', hi: 'मूर्तियाँ, पदक, घंटे' }],
        [{ en: '**Solder (`सोल्डर`) & Amalgam**', hi: '**सोल्डर व अमलगम**' }, { en: 'Solder: **`Lead + Tin (Pb + Sn)`** | Amalgam: **`+ Hg`**', hi: 'सोल्डर: **`सीसा + टिन (Pb + Sn)`** | अमलगम: **`+ पारद (Hg)`**' }, { en: 'Solder has **VERY LOW melting point**!', hi: 'सोल्डर का **गलनांक अत्यंत कम** होता है!' }, { en: '**Welding electrical wires together** (`60% Sn : 40% Pb`)', hi: 'विद्युत व इलेक्ट्रॉनिक तार जोड़ने हेतु (`ALP CBT-2`)' }],
        [{ en: '**22-Carat Gold & Corrosion Coats**', hi: '**22K सोना व संक्षारण परतें**' }, { en: '`22 Au + 2 Cu/Ag` | `Ag₂S` black | `CuCO₃·Cu(OH)₂` green', hi: '`22 Au + 2 Cu/Ag` | `Ag₂S` काला | `Cu` हरा कार्बोनेट' }, { en: '`24K` too soft; `Zn` galvanising sacrifices before `Fe`!', hi: '`24K` अत्यंत नर्म; यशदलेपन में `Zn` पहले संक्षारित हो' }, { en: 'Delhi Pillar: **`1600 yrs`, `8 m`, `6000 kg`** rustless', hi: 'दिल्ली लौह स्तंभ: **`1600 वर्ष, 8m, 6000kg`**' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.44 Q1',
      q: { en: 'Give an example of a metal which (i) is liquid at room temperature, (ii) can be easily cut with a knife, (iii) is the best conductor of heat, (iv) is a poor conductor of heat.', hi: 'ऐसी धातु का उदाहरण दीजिए जो— (i) कमरे के ताप पर द्रव होती है, (ii) चाकू से आसानी से काटी जा सकती है, (iii) ऊष्मा की सबसे अच्छी चालक होती है, (iv) ऊष्मा की कुचालक होती है।' },
      a: { en: '**(i)** **Mercury (`Hg`)**; **(ii)** **Sodium / Potassium / Lithium (`Na, K, Li`)**; **(iii)** **Silver (`Ag`)** (`followed by Cu`); **(iv)** **Lead (`Pb`)** (`and Mercury Hg`)!', hi: '**(i)** **मर्करी / पारद (`Hg`)**; **(ii)** **सोडियम (`Na`) / पोटैशियम (`K`)**; **(iii)** **सिल्वर / चाँदी (`Ag`)**; **(iv)** **लेड / सीसा (`Pb`)** व पारद (`Hg`)।' },
    },
    {
      num: 'p.44 Q2',
      q: { en: 'Explain the meanings of malleable and ductile.', hi: 'आघातवर्ध्य तथा तन्य का अर्थ बताइए।' },
      a: { en: '**Malleable (`आघातवर्ध्य`)**: Metal property allowing hammering into **thin sheets without breaking** (`Au & Ag top`). **Ductile (`तन्य`)**: Metal property allowing stretching into **thin wires** (`1g Gold → 2 km wire!`).', hi: '**आघातवर्ध्य**: पीटकर **पतली चादरों** में ढलने का गुण (`सोना व चाँदी सर्वाधिक`)। **तन्य**: खींचकर **पतले तार** बनने की क्षमता (`1g सोने से 2 km तार`)।' },
    },
    {
      num: 'p.50 Q1',
      q: { en: 'Why is sodium kept immersed in kerosene oil?', hi: 'सोडियम को किरोसिन में डुबोकर क्यों रखा जाता है?' },
      a: { en: 'Sodium (`& K`) sits at the top of the reactivity series and **reacts vigorously with atmospheric oxygen & moisture**, catching accidental fire — **kerosene oil seals off air and water** safely.', hi: 'सोडियम अत्यंत अभिक्रियाशील होने से खुले में **ऑक्सीजन व नमी संग तुरंत आग पकड़ लेता है** — आकस्मिक आग रोकने हेतु इसे **किरोसिन तेल** में डुबोकर रखते हैं।' },
    },
    {
      num: 'p.50 Q2',
      q: { en: 'Write equations for the reactions of (i) iron with steam, (ii) calcium and potassium with water.', hi: 'इन अभिक्रियाओं के लिए समीकरण लिखिए— (i) भाप के साथ आयरन, (ii) जल के साथ कैल्सियम तथा पोटैशियम।' },
      a: { en: '**(i)** `3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`\n**(ii)** Calcium: `Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g)` | Potassium: `2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g) + Thermal energy`.', hi: '**(i)** `3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`\n**(ii)** कैल्सियम: `Ca(s) + 2H₂O(l) → Ca(OH)₂(aq) + H₂(g)` | पोटैशियम: `2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g) + ऊष्मीय ऊर्जा`।' },
    },
    {
      num: 'p.50 Q3',
      q: { en: 'Four samples A, B, C, D added to FeSO₄, CuSO₄, ZnSO₄, AgNO₃ show: A (`No rxn FeSO₄, Displaces CuSO₄`), B (`Displaces FeSO₄, No rxn ZnSO₄`), C (`Displaces AgNO₃ ONLY`), D (`NO reaction anywhere`). Find: (i) most reactive, (ii) B in CuSO₄, (iii) decreasing order.', hi: 'धातु A (`CuSO₄ विस्थापित, FeSO₄ नहीं`), B (`FeSO₄ विस्थापित, ZnSO₄ नहीं`), C (`केवल AgNO₃ विस्थापित`), D (`कहीं कोई अभिक्रिया नहीं`): (i) सबसे अधिक अभिक्रियाशील? (ii) B को `CuSO₄` में डालने पर क्या होगा? (iii) घटता क्रम?' },
      a: { en: '**(i) Most reactive = `B`** (`ONLY B displaces Iron, whereas Zn beats B -> Zn > B > Fe!`); **(ii)** Placing `B` into blue **`CuSO₄(aq)` will DISPLACE Copper**, fading blue colour and coating brown Cu (`since B > Fe > Cu`); **(iii) Decreasing reactivity order = `B > A > C > D`**!', hi: '**(i)** सबसे अधिक अभिक्रियाशील = **`B`** (`यह अकेली Fe को विस्थापित करती है`); **(ii)** `B` नीले **`CuSO₄` से कॉपर को विस्थापित** कर नीला रंग गायब व लाल-भूरा निक्षेप बनाएगी; **(iii)** घटता क्रम = **`B > A > C > D`**!' },
    },
    {
      num: 'p.50 Q4',
      q: { en: 'Which gas is produced when dilute hydrochloric acid is added to a reactive metal? Write the chemical reaction when iron reacts with dilute `H₂SO₄`.', hi: 'अभिक्रियाशील धातु को तनु हाइड्रोक्लोरिक अम्ल में डाला जाता है तो कौन-सी गैस निकलती है? आयरन के साथ तनु `H₂SO₄` की रासायनिक अभिक्रिया लिखिए।' },
      a: { en: '**Hydrogen (`H₂`) gas** is produced! Iron + dil. Sulphuric acid: **`Fe(s) + H₂SO₄(aq) → FeSO₄(aq) + H₂(g)`**.', hi: '**हाइड्रोजन (`H₂`) गैस** निकलती है। समीकरण: **`Fe(s) + H₂SO₄(aq) → FeSO₄(aq) + H₂(g)`**।' },
    },
    {
      num: 'p.50 Q5',
      q: { en: 'What would you observe when zinc is added to a solution of iron(II) sulphate? Write the chemical reaction.', hi: 'जिंक को आयरन(II) सल्फेट के विलयन में डालने से क्या होता है? इसकी रासायनिक अभिक्रिया लिखिए।' },
      a: { en: 'Zinc is more reactive than Iron (`Table 3.2`) -> **light green colour fades to colorless `ZnSO₄` and grey-black Iron deposits**: **`Zn(s) + FeSO₄(aq) → ZnSO₄(aq) + Fe(s)`**.', hi: 'जिंक लोहे से अधिक अभिक्रियाशील होने से **आयरन को विस्थापित कर हल्का हरा रंग गायब** कर देता है: **`Zn(s) + FeSO₄(aq) → ZnSO₄(aq) + Fe(s)`**।' },
    },
    {
      num: 'p.54 Q1',
      q: { en: '(i) Write electron-dot structures for Na, O and Mg. (ii) Show formation of `Na₂O` and `MgO` by transfer of electrons. (iii) What ions exist in them?', hi: '(i) सोडियम, ऑक्सीजन एवं मैग्नीशियम के लिए इलेक्ट्रॉन-बिंदु संरचना लिखिए। (ii) इलेक्ट्रॉन स्थानांतरण से `Na₂O` व `MgO` का निर्माण दर्शाइए। (iii) इनमें कौन से आयन उपस्थित हैं?' },
      a: { en: '**(i)** `Na·` (`1` valence dot), `:O:` (`6` dots), `Mg:` (`2` dots). **(ii)** Two `Na` atoms each donate `1 e⁻` to `1 O` atom -> **`Na₂O`**: `(Na⁺)₂[:O:]²⁻`; One `Mg` atom transfers `2 e⁻` directly to `O` -> **`MgO`**: `Mg²⁺[:O:]²⁻`. **(iii)** `Na₂O` ions: **`Na⁺ & O²⁻`**; `MgO` ions: **`Mg²⁺ & O²⁻`**!', hi: '**(i)** `Na` (`1` बिंदु), `O` (`6` बिंदु), `Mg` (`2` बिंदु)। **(ii)** **`Na₂O`**: `2 Na` एक-एक `e⁻` एक `O` को दें (`(Na⁺)₂ O²⁻`); **`MgO`**: `Mg` दोनों `2e⁻` `O` को दे (`Mg²⁺ O²⁻`)। **(iii)** आयन: क्रमशः **`Na⁺ व O²⁻`** तथा **`Mg²⁺ व O²⁻`**!' },
    },
    {
      num: 'p.54 Q2',
      q: { en: 'Why do ionic compounds have high melting points?', hi: 'आयनिक यौगिकों का गलनांक उच्च क्यों होता है?' },
      a: { en: 'Considerable thermal energy is needed to overcome the **strong inter-ionic electrostatic attraction** binding oppositely charged cations and anions in the 3D lattice (`e.g. CaO = 2850 K, NaCl = 1074 K`).', hi: 'मजबूत **अंतर-आयनिक स्थिर वैद्युत आकर्षण बल** को तोड़ने के लिए ऊष्मा ऊर्जा की पर्याप्त मात्रा आवश्यक होती है (`जैसे NaCl = 1074 K, CaO = 2850 K`)।' },
    },
    {
      num: 'p.59 Q1',
      q: { en: 'Define the terms: (i) Mineral, (ii) Ore, (iii) Gangue.', hi: 'निम्न पदों की परिभाषा दीजिए— (i) खनिज, (ii) अयस्क, (iii) गैंग।' },
      a: { en: '**(i) Mineral**: Naturally occurring elements/compounds inside Earth’s crust. **(ii) Ore**: Minerals containing high percentage of a metal making extraction **economically profitable** (`every ore is a mineral, not vice versa!`). **(iii) Gangue**: Earthy soil, sand & rocky impurities contaminating mined ores.', hi: '**(i) खनिज**: भूपर्पटी में प्राकृतिक रूप से पाए जाने वाले तत्व/यौगिक। **(ii) अयस्क**: वे खनिज जिनसे किसी धातु का लाभकारी निष्कर्षण संभव हो। **(iii) गैंग**: अयस्कों में मौजूद मिट्टी, रेत आदि की अशुद्धियाँ।' },
    },
    {
      num: 'p.59 Q2',
      q: { en: 'Name two metals which are found in nature in the free state.', hi: 'दो धातुओं के नाम बताइए जो प्रकृति में मुक्त अवस्था में पाई जाती हैं।' },
      a: { en: '**Gold (`Au`) and Platinum (`Pt`)** (`or Silver Ag / Copper Cu`, at the bottom of the reactivity series — **Tech 2024 Shift 2 PYQ**!).', hi: '**सोना (`Gold — Au`) तथा प्लैटिनम (`Pt`)** (`या चाँदी व कॉपर` — कम सक्रिय होने से स्वतंत्र अवस्था में मिलते हैं)।' },
    },
    {
      num: 'p.59 Q3',
      q: { en: 'What chemical process is used for obtaining a metal from its oxide?', hi: 'धातु को उसके ऑक्साइड से प्राप्त करने के लिए किस रासायनिक प्रक्रम का उपयोग किया जाता है?' },
      a: { en: '**Reduction (`अपचयन`)**: Using **Heating alone** (`low reactivity: HgO`), **Carbon / Reactive metal displacement** (`medium reactivity: ZnO+C / Fe₂O₃+Al`), or **Electrolytic reduction** (`high reactivity: molten Al₂O₃`).', hi: '**अपचयन (`Reduction`)** प्रक्रम का उपयोग होता है (कम सक्रिय ऑक्साइड केवल तापन से, मध्यम कार्बन या `Al` विस्थापन से तथा उच्च गलित विद्युत-अपघटन से)।' },
    },
    {
      num: 'p.60 Q1',
      q: { en: 'Metallic oxides of Zinc, Magnesium and Copper are heated with Zinc, Magnesium and Copper metals. In which cases will displacement reactions take place?', hi: 'जिंक, मैग्नीशियम एवं कॉपर के ऑक्साइडों को जिंक, मैग्नीशियम तथा कॉपर धातुओं संग गरम करने पर किस स्थिति में विस्थापन अभिक्रिया घटित होगी?' },
      a: { en: 'Since Reactivity = **`Mg > Zn > Cu`**: **(1)** **`Zinc Oxide + Mg` -> YES ✓** (`Mg + ZnO → MgO + Zn`); **(2)** **`Magnesium Oxide` + any (`Zn/Mg/Cu`) -> NO ✗** (`Mg tops all three!`); **(3)** **`Copper Oxide + Zn` -> YES ✓** (`Zn + CuO → ZnO + Cu`) AND **`Copper Oxide + Mg` -> YES ✓** (`Mg + CuO → MgO + Cu`). (`3 cases total out of 9!`)', hi: 'चूँकि सक्रियता क्रम **`Mg > Zn > Cu`** है, अतः केवल 3 स्थितियों में विस्थापन होगा: **(1) जिंक ऑक्साइड + मैग्नीशियम** (`Mg` विस्थापित करे), **(2) कॉपर ऑक्साइड + जिंक**, व **(3) कॉपर ऑक्साइड + मैग्नीशियम** (`MgO` में कोई विस्थापन नहीं होगा)!' },
    },
    {
      num: 'p.60 Q2',
      q: { en: 'Which metals do not corrode easily?', hi: 'कौन सी धातु आसानी से संक्षारित नहीं होती है?' },
      a: { en: '**Gold (`Au`) and Platinum (`Pt`)** (`least reactive noble metals sitting at bottom of Reactivity Series`).', hi: '**गोल्ड (`सोना`) तथा प्लैटिनम** (सक्रियता श्रेणी में सबसे नीचे होने से आसानी से संक्षारित नहीं होतीं)।' },
    },
    {
      num: 'p.60 Q3',
      q: { en: 'What are alloys?', hi: 'मिश्रातु क्या होते हैं?' },
      a: { en: 'An **Alloy (`मिश्रातु`)** is a **homogeneous mixture** of two or more metals (`or metal + non-metal`) enhancing hardness, strength & rust resistance (`e.g. Brass Cu+Zn, Bronze Cu+Sn, Solder Pb+Sn, Stainless Steel Fe+Ni+Cr`).', hi: 'दो या अधिक धातुओं (या एक धातु व अधातु) का **समांगी मिश्रण** जिसे मूल धातु को पिघलाकर निश्चित अनुपात में अन्य तत्व घोलकर बनाया जाता है (`जैसे पीतल, काँसा, सोल्डर, स्टेनलेस स्टील`)।' },
    },
  ],
  exercises: [
    {
      num: '1',
      type: 'mcq',
      q: { en: 'Which of the following pairs will give displacement reactions?', hi: 'निम्नलिखित में कौन-सा युगल विस्थापन अभिक्रिया प्रदर्शित करता है?' },
      options: {
        en: ['NaCl solution and copper metal', 'MgCl₂ solution and aluminium metal', 'FeSO₄ solution and silver metal', 'AgNO₃ solution and copper metal'],
        hi: ['NaCl विलयन एवं कॉपर धातु', 'MgCl₂ विलयन एवं ऐलुमिनियम धातु', 'FeSO₄ विलयन एवं सिल्वर धातु', 'AgNO₃ विलयन एवं कॉपर धातु'],
      },
      correctIndex: 3, // Verified jhsc1an line 7: 1. (d)
      a: { en: '**Option (d)**: Look at Table 3.2 — Copper lies **above Silver (`Cu > Ag`)**, so Cu cleanly displaces Ag (`Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag`), whereas `Cu < Na`, `Al < Mg`, `Ag < Fe`.', hi: '**विकल्प (d)**: सक्रियता श्रेणी में **कॉपर सिल्वर से ऊपर (`Cu > Ag`)** है अतः `Cu` विलयन से चाँदी को विस्थापित कर देगा (`jhsc1an: 1.(d)` सत्यापित)।' },
    },
    {
      num: '2',
      type: 'mcq',
      q: { en: 'Which of the following methods is suitable for preventing an iron frying pan from rusting?', hi: 'लोहे के फ्राइंग पैन (frying pan) को जंग से बचाने के लिए निम्नलिखित में से कौन-सी विधि उपयुक्त है?' },
      options: {
        en: ['Applying grease', 'Applying paint', 'Applying a coating of zinc', 'All of the above'],
        hi: ['ग्रीज़ लगाकर', 'पेंट लगाकर', 'जिंक की परत चढ़ाकर', 'ऊपर के सभी'],
      },
      correctIndex: 2, // Verified jhsc1an line 7: 2. (c)! Huge CBT Trap: paint/grease burn off hot frying pan!
      a: { en: '**Option (c) (`Verified NCERT Official Key: jhsc1an 2.(c)` — HUGE TRAP!)**: A **frying pan gets heated to cook food**! Grease melts into food and paint peels/burns off on stove fire — ONLY **Zinc coating (`Galvanisation`)** suits a hot frying pan (`always check frying pan -> ONLY (c)!`).', hi: '**विकल्प (c) (`सत्यापित NCERT उत्तरकुंजी 2.(c) — बड़ा परीक्षा जाल!`)**: **फ्राइंग पैन** को खाना पकाने हेतु आग पर गरम करते हैं जहाँ ग्रीज पिघलेगा और पेंट जलेगा — अतः केवल **जिंक की परत (`यशदलेपन`)** उपयुक्त है!' },
    },
    {
      num: '3',
      type: 'mcq',
      q: { en: 'An element reacts with oxygen to give a compound with a high melting point. This compound is also soluble in water. The element is likely to be:', hi: 'कोई धातु ऑक्सीजन के साथ अभिक्रिया कर उच्च गलनांक वाला यौगिक निर्मित करती है। यह यौगिक जल में विलेय है। यह तत्व क्या हो सकता है?' },
      options: {
        en: ['Calcium', 'Carbon', 'Silicon', 'Iron'],
        hi: ['कैल्सियम', 'कार्बन', 'सिलिकन', 'लोहा'],
      },
      correctIndex: 0, // Verified jhsc1an line 7: 3. (a)
      a: { en: '**Option (a) Calcium (`CaO`, MP `2850 K`, Table 3.4!)**: Calcium reacts with `O₂` -> ionic **`CaO` (`2850 K` MP)** dissolving cleanly in water to **`Ca(OH)₂`**! (`CO₂` is gas; `SiO₂` & `Fe₂O₃` are water-insoluble!).', hi: '**विकल्प (a) कैल्सियम (`Ca`)**: `CaO` (आयनिक, गलनांक **`2850 K`**, सारणी 3.4) जल में घुलकर `Ca(OH)₂` देता है जबकि `SiO₂` व लौह ऑक्साइड जल में अविलेय हैं (`3.(a)`)!' },
    },
    {
      num: '4',
      type: 'mcq',
      q: { en: 'Food cans are coated with tin and not with zinc because:', hi: 'खाद्य पदार्थ के डिब्बों पर जिंक की बजाय टिन का लेप होता है, क्योंकि—' },
      options: {
        en: ['zinc is costlier than tin', 'zinc has a higher melting point than tin', 'zinc is more reactive than tin', 'zinc is less reactive than tin'],
        hi: ['टिन की अपेक्षा जिंक मँहगा है', 'टिन की अपेक्षा जिंक का गलनांक अधिक है', 'टिन की अपेक्षा जिंक अधिक अभिक्रियाशील है', 'टिन की अपेक्षा जिंक कम अभिक्रियाशील है'],
      },
      correctIndex: 2, // Verified jhsc1an line 7: 4. (c)
      a: { en: '**Option (c) (`jhsc1an 4.(c)`)**: **Zinc is more reactive than Tin (`Sn`)**, so zinc would react with acidic food inside cans forming harmful zinc salts!', hi: '**विकल्प (c) (`सत्यापित 4.(c)`)**: टिन की अपेक्षा **जिंक अधिक अभिक्रियाशील** होने के कारण भोजन के अम्लों से अभिक्रिया कर खाद्य को विषाक्त कर सकता है।' },
    },
    {
      num: '5',
      q: { en: 'You are given a hammer, a battery, a bulb, wires and a switch. (a) How distinguish metals vs non-metals? (b) Assess usefulness of these tests.', hi: 'आपको एक हथौड़ा, बैटरी, बल्ब, तार एवं स्विच दिया गया है— (a) धातु-अधातु विभेद कैसे करेंगे? (b) इन परीक्षणों की उपयोगिताओं का आकलन कीजिए।' },
      a: { en: '**(a)** Hammering **flattens metals into sheets (`Malleable`)** vs shattering non-metals (`Brittle`). Wiring sample into battery-bulb circuit **lights bulb ONLY for metals (`Conductors`)**. **(b) Limits**: Graphite (`non-metal`) also conducts electricity (`Act 3.7`), and `Na/K` smash softly/react cleanly — showing why chemical tests are also vital.', hi: '**(a)** हथौड़े से धातु **चादर (आघातवर्ध्य)** बनेंगी पर अधातु टूट जाएँगे; बैटरी-बल्ब परिपथ में धातु रखने पर **बल्ब जलेगा**। **(b) सीमाएँ**: ग्रेफाइट अधातु होकर भी सुचालक है और सोडियम कठोर नहीं — अतः केवल भौतिक जाँच अपवादों के कारण पर्याप्त नहीं।' },
    },
    {
      num: '6',
      q: { en: 'What are amphoteric oxides? Give two examples of amphoteric oxides.', hi: 'उभयधर्मी ऑक्साइड क्या होते हैं? दो उभयधर्मी ऑक्साइडों का उदाहरण दीजिए।' },
      a: { en: 'Metal oxides reacting with **BOTH acids AND bases** to produce salt & water are **Amphoteric Oxides (`उभयधर्मी`)**. Examples: **(1) Aluminium Oxide (`Al₂O₃`)** & **(2) Zinc Oxide (`ZnO`)**.', hi: 'ऐसे धातु ऑक्साइड जो **अम्ल व क्षारक दोनों** से अभिक्रिया कर लवण व जल बनाते हैं (**उभयधर्मी ऑक्साइड**)। उदाहरण: **`Al₂O₃` व `ZnO`**।' },
    },
    {
      num: '7',
      q: { en: 'Name two metals which will displace hydrogen from dilute acids, and two metals which will not.', hi: 'दो धातुओं के नाम बताइए जो तनु अम्ल से हाइड्रोजन को विस्थापित कर देंगी तथा दो धातुएँ जो ऐसा नहीं कर सकतीं।' },
      a: { en: '**Displace `H₂`** (`above [H]`): **Zinc (`Zn`) & Magnesium (`Mg`)** (`or Iron, Al`). **Do NOT displace `H₂`** (`below [H]`): **Copper (`Cu`) & Silver (`Ag`)** (`or Gold`).', hi: '**विस्थापित करने वाली (`[H]` से ऊपर)**: **जिंक (`Zn`) व मैग्नीशियम (`Mg`)**। **न करने वाली (`[H]` से नीचे)**: **कॉपर (`Cu`) व सिल्वर (`Ag`)**।' },
    },
    {
      num: '8',
      q: { en: 'In the electrolytic refining of a metal `M`, what would you take as the anode, the cathode and the electrolyte?', hi: 'किसी धातु `M` के विद्युत अपघटनी परिष्करण में आप ऐनोड, कैथोड एवं विद्युत अपघट्य किसे बनाएँगे?' },
      a: { en: '**Anode (`+`)**: Thick block of **impure metal `M`**; **Cathode (`−`)**: Thin strip of **pure metal `M`**; **Electrolyte**: **Aqueous water-soluble salt solution of metal `M`** (`acidified, like CuSO₄ for Copper`).', hi: '**ऐनोड (`+`)**: **अशुद्ध धातु `M`** की मोटी छड़; **कैथोड (`−`)**: **शुद्ध धातु `M`** की पतली पट्टी; **विद्युत-अपघट्य**: धातु `M` का **जलीय लवण विलयन**।' },
    },
    {
      num: '9',
      q: { en: 'Pratyush took sulphur powder on a spatula and heated it (`collected gas by inverting a test tube`). (a) Action of gas on (i) dry litmus paper, (ii) moist litmus paper? (b) Write balanced chemical equation.', hi: 'प्रत्यूष ने सल्फर चूर्ण गरम कर उल्टी परखनली में गैस एकत्र की: (a) इस गैस की क्रिया (i) सूखे लिटमस, (ii) आर्द्र लिटमस पर क्या होगी? (b) संतुलित रासायनिक समीकरण लिखिए।' },
      a: { en: '**(a)** Gas collected = **`SO₂`**: **(i) Dry litmus -> NO color change** (`ions H⁺ require water!`); **(ii) Moist BLUE litmus -> turns RED** (`H₂SO₃` acidic). **(b)** `S(s) + O₂(g) → SO₂(g)` and `SO₂(g) + H₂O(l) → H₂SO₃(aq)`.', hi: '**(a)** निकली **`SO₂`** गैस: **(i) सूखे लिटमस पर कोई प्रभाव नहीं** (`जल बिना आयन नहीं बनते`), **(ii) आर्द्र नीले लिटमस को लाल कर देगी**। **(b)** `S(s) + O₂(g) → SO₂(g)`; `SO₂ + H₂O → H₂SO₃`।' },
    },
    {
      num: '10',
      q: { en: 'State two ways to prevent the rusting of iron.', hi: 'लोहे को जंग से बचाने के लिए दो तरीके बताइए।' },
      a: { en: '**(1) Galvanisation (`यशदलेपन`)**: Coating iron with Zinc (`protects even when scratched!`); **(2) Painting / Oiling / Greasing / Chrome-plating / Alloying** (`e.g. Stainless steel Fe+Ni+Cr`).', hi: '**(1) यशदलेपन**: लोहे पर जिंक की परत चढ़ाकर; **(2) पेंट, तेल/ग्रीज लगाकर या मिश्रातु (`स्टेनलेस स्टील`) बनाकर**।' },
    },
    {
      num: '11',
      q: { en: 'What type of oxides are formed when non-metals combine with oxygen?', hi: 'ऑक्सीजन के साथ संयुक्त होकर अधातुएँ कैसा ऑक्साइड बनाती हैं?' },
      a: { en: '**Acidic oxides** (`like SO₂, CO₂`, dissolving to acids turning blue litmus red) or **Neutral oxides** (`like CO, H₂O, NO` — NCERT p.62 "What you have learnt" point!).', hi: '**अम्लीय ऑक्साइड (`SO₂, CO₂`)** या **उदासीन ऑक्साइड (`CO, H₂O`)** (`पृ. 62 सारांश वाक्य`)।' },
    },
    {
      num: '12',
      q: { en: 'Give reasons: (a) `Pt, Au, Ag` make jewellery. (b) `Na, K, Li` stored under oil. (c) `Al` very reactive yet makes cooking utensils. (d) Carbonate & sulphide ores converted into oxides.', hi: 'कारण बताइए: (a) `Pt, Au, Ag` आभूषण हेतु, (b) `Na, K, Li` तेल के अंदर संग्रह, (c) `Al` अत्यधिक सक्रिय पर खाना पकाने के बर्तन, (d) कार्बोनेट व सल्फाइड अयस्कों का ऑक्साइड में परिवर्तन।' },
      a: { en: '**(a)** Highly lustrous, malleable, ductile & non-corrosive (`bottom of series`); **(b)** Catch fire in air/moisture instantly -> oil isolates them; **(c)** Forms tough self-sealing non-corrosive `Al₂O₃` protective coat + great heat conductor; **(d)** **Reducing a metal oxide** is chemically much easier than directly reducing sulphides/carbonates!', hi: '**(a)** चमकीले, आघातवर्ध्य, तन्य व संक्षारण-रहित; **(b)** वायु/नमी से तुरंत आग पकड़ते हैं; **(c)** `Al` पर `Al₂O₃` की पतली रक्षक परत बन जाती है व ऊष्मा का उत्तम चालक है; **(d)** सल्फाइड व कार्बोनेट की तुलना में **ऑक्साइड से धातु का अपचयन आसान** होता है (`पृ. 57`)।' },
    },
    {
      num: '13',
      q: { en: 'You must have seen tarnished copper vessels being cleaned with lemon or tamarind juice. Explain why these sour substances are effective in cleaning.', hi: 'आपने ताँबे के मलीन बर्तन को नींबू या इमली के रस से साफ करते देखा होगा। ये खट्टे पदार्थ प्रभावी क्यों हैं?' },
      a: { en: 'Tarnished green coat on copper is **basic Copper Carbonate (`CuCO₃·Cu(OH)₂`)**. Citric/tartaric acids in lemon/tamarind **neutralize & dissolve the basic carbonate coat**, leaving pure shiny copper unharmed!', hi: 'ताँबे पर जमी हरी परत **क्षारकीय (बेसिक) कॉपर कार्बोनेट** की होती है; नींबू/इमली का खट्टा अम्ल इस क्षारकीय परत को उदासीन कर घोल देता है जिससे ताँबा पुनः चमक उठता है।' },
    },
    {
      num: '14',
      q: { en: 'Differentiate between metal and non-metal on the basis of their chemical properties.', hi: 'रासायनिक गुणधर्मों के आधार पर धातुओं एवं अधातुओं में विभेद कीजिए।' },
      a: { en: '**Metals**: Electropositive (`lose e⁻`), form **basic/amphoteric oxides**, metals above `[H]` **displace `H₂` from dil. acids & react with water/steam**. **Non-Metals**: Electronegative (`gain e⁻`), form **acidic/neutral oxides**, **never displace `H₂` from acids**, form covalent hydrides (`e.g. H₂S, NH₃`).', hi: '**धातु**: विद्युत धनात्मक (`e⁻ त्याग`), क्षारकीय/उभयधर्मी ऑक्साइड, `[H]` से ऊपर तनु अम्लों से **`H₂` विस्थापित**। **अधातु**: विद्युत ऋणात्मक (`e⁻ ग्रहण`), अम्लीय/उदासीन ऑक्साइड, अम्लों से `H₂` विस्थापित **नहीं** करतीं व सहसंयोजी हाइड्राइड बनाती हैं।' },
    },
    {
      num: '15',
      q: { en: 'A man went door to door posing as a goldsmith promising shine on dull gold bangles (`lost drastic weight!`). Can you investigate the nature of his solution?', hi: 'एक नकली सुनार ने मलीन सोने के कंगन चमकाने हेतु एक विशेष विलयन में डाले जिससे कंगन चमके पर वजन अत्यंत कम हो गया। उस विलयन की प्रकृति बताइए।' },
      a: { en: 'His liquid was **Aqua Regia (`रॉयल जल / अम्लराज` — `3 Conc. HCl : 1 Conc. HNO₃`)**: it literally **dissolved the outer layer of pure Gold**, restoring fresh underlying shine while stealing valuable gold in solution!', hi: 'वह विलयन **एक्वा रेजिया (`3 सांद्र HCl : 1 सांद्र HNO₃`)** था — जिसने कंगन की बाहरी **सोने की परत को घोल दिया**, जिससे कंगन चमके पर सोना विलयन में चले जाने से वजन कम हो गया!' },
    },
    {
      num: '16',
      q: { en: 'Give reasons why copper is used to make hot water tanks and not steel (an alloy of iron).', hi: 'गर्म जल का टैंक बनाने में ताँबे का उपयोग होता है, परंतु इस्पात (लोहे की मिश्रातु) का नहीं। इसका कारण बताइए।' },
      a: { en: '**Copper (`below [H]`) NEVER reacts with cold, hot water OR steam**, whereas **Iron in steel reacts actively with hot water/steam (`3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂`)** corroding hot-water tanks!', hi: '**ताँबा (`[H]` से नीचे) ठंडे, गर्म जल या भाप से बिल्कुल क्रिया नहीं करता**, जबकि **इस्पात में मौजूद लोहा भाप से क्रिया कर संक्षारित हो जाता है** (`3Fe + 4H₂O → Fe₃O₄ + 4H₂`)!' },
    },
  ],
  flashcards: [
    { front: { en: 'Liquid Metal vs Liquid Non-Metal & Two Palm-Melting Metals?', hi: 'द्रव धातु, द्रव अधातु एवं हथेली पर पिघलने वाली 2 धातुएँ?' }, back: { en: 'Liquid Metal = **`Hg` (`Mercury`)** | Liquid Non-Metal = **`Br₂` (`Bromine`)** | Melt on Palm = **`Gallium` (`Ga`) & `Caesium` (`Cs`)**!', hi: 'द्रव धातु = **मर्करी (`Hg`)** | द्रव अधातु = **ब्रोमीन (`Br`)** | हथेली पर पिघलें = **गैलियम (`Ga`) व सीज़ियम (`Cs`)**!' } },
    { front: { en: '1g Gold Wire Length (`Ductility`) & Non-Metal Exceptions (`Lustre/Conduct`)?', hi: '1g सोने के तार की लंबाई, चमकीली अधातु एवं सुचालक अधातु?' }, back: { en: '`1g Au → 2 km wire` (`Au most ductile & malleable`); **Iodine** is lustrous; **Graphite** conducts electricity!', hi: '`1 ग्राम सोना → 2 km तार`! **आयोडीन** चमकीली व **ग्रेफाइट** विद्युत सुचालक अधातु है!' } },
    { front: { en: 'Two Amphoteric Oxides (`both Acid & Base`) + Anodising Electrode?', hi: 'दो उभयधर्मी ऑक्साइड एवं एनोडीकरण में ऐलुमिनियम कौन-सा इलेक्ट्रोड बनता है?' }, back: { en: '**`Al₂O₃` & `ZnO`** (`Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O`). In **Anodising**, Al is **ANODE (`+`)** in dil. `H₂SO₄` -> thick oxide coat!', hi: '**`Al₂O₃` व `ZnO`** (`अम्ल व क्षार दोनों से क्रिया`)। **एनोडीकरण** में `Al` **ऐनोड (`+`)** बनकर मोटी `Al₂O₃` परत पाता है!' } },
    { front: { en: 'Which Metals FLOAT on water & Which Metal Reacts ONLY with Steam?', hi: 'कौन-सी 2 धातुएँ जल पर तैरती हैं व कौन केवल भाप से क्रिया करती हैं?' }, back: { en: '**`Ca` (cold) & `Mg` (hot)** float due to `H₂` bubbles sticking! **`Al, Fe, Zn`** react ONLY with **Steam (`3Fe+4H₂O→Fe₃O₄+4H₂`)**!', hi: '**`Ca` व `Mg`** सतह पर `H₂` बुलबुले चिपकने से तैरते हैं; **`Al, Fe, Zn`** केवल **भाप** से (`Fe₃O₄`) देते हैं!' } },
    { front: { en: 'Dilute `HNO₃` Exception & Exact Ratio of Aqua Regia (`Royal Water`)?', hi: '`HNO₃` अपवाद धातुएँ तथा एक्वा रेजिया का सटीक अनुपात?' }, back: { en: 'Only **`Mg & Mn` give `H₂` with very dil. `HNO₃`** (`others H₂O`!). **Aqua Regia = `3 Conc. HCl : 1 Conc. HNO₃`** (`dissolves Au & Pt`)!', hi: 'केवल **`Mg` व `Mn` अति तनु `HNO₃` संग `H₂`** देते हैं! **एक्वा रेजिया = `3 सांद्र HCl : 1 सांद्र HNO₃`**!' } },
    { front: { en: 'Complete Reactivity Series Top to Bottom & Best Heat Conductors?', hi: 'सक्रियता श्रेणी (शीर्ष से तल) एवं ऊष्मा के सर्वश्रेष्ठ व कुचालक धातु?' }, back: { en: '**`K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au`**. Heat: **Best `Ag/Cu`**, **Poor `Pb/Hg`**!', hi: '**`K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au`**! ऊष्मा: **सर्वोत्तम `Ag/Cu`**, **कुचालक `Pb/Hg`**!' } },
    { front: { en: 'Table 3.4 Ionic Rules (`Highest MP? Solid vs Molten?`)', hi: 'आयनिक यौगिक गुण (`सारणी 3.4`): उच्चतम गलनांक व चालकता शर्त?' }, back: { en: '**`CaO` = `2850 K`** (`NaCl = 1074 K`). Water-soluble (`kerosene-insoluble`), **conducts ONLY molten or aqueous (`solid NO`)**!', hi: '**`CaO` = `2850 K`** (`NaCl = 1074 K`)। जल में विलेय, **केवल गलित/जलीय रूप में सुचालक** (ठोस में नहीं)!' } },
    { front: { en: 'Roasting (`HgS/ZnS`) vs Calcination (`ZnCO₃`) vs Thermite Reaction?', hi: 'भर्जन (`Roasting`) बनाम निस्तापन (`Calcination`) बनाम थर्मिट समीकरण?' }, back: { en: 'Roast (`excess air`): `2ZnS+3O₂→2ZnO+2SO₂` | Calcine (`limited air`): `ZnCO₃→ZnO+CO₂` | **Thermite**: `Fe₂O₃+2Al→2Fe(l)+Al₂O₃`!', hi: '**भर्जन** (अधिक वायु: सल्फाइड), **निस्तापन** (सीमित वायु: कार्बोनेट), **थर्मिट**: `Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃` (रेल पटरी जोड़)!' } },
    { front: { en: 'Act 3.14 Tubes A/B/C & Why Scratched Galvanised Iron Still Resists Rust?', hi: 'क्र. 3.14 (`A/B/C`) व जिंक परत टूटने पर भी यशदलेपन कैसे लोहा बचाता है?' }, back: { en: 'Only Tube A (`Air+H₂O`) rusts (`B oil blocks O₂; C CaCl₂ absorbs water`). Even scratched, **Zn is more reactive and corrodes before Fe**!', hi: 'केवल नली A (`जल+वायु`) में जंग लगा; खरोंच पर भी **`Zn` पहले संक्षारित होकर लोहे को बचाता है**!' } },
    { front: { en: 'Compositions: Brass vs Bronze vs Solder vs Stainless Steel & Delhi Iron Pillar?', hi: 'पीतल, काँसा, सोल्डर, स्टेनलेस स्टील व दिल्ली लौह स्तंभ आँकड़े?' }, back: { en: 'Brass `Cu+Zn` | Bronze `Cu+Sn` | **Solder `Pb+Sn` (`low MP`)** | Stainless `Fe+Ni+Cr` | Pillar: **`1600 yrs, 8 m, 6000 kg`**!', hi: 'पीतल `Cu+Zn` | काँसा `Cu+Sn` | **सोल्डर `Pb+Sn` (`निम्न MP`)** | स्टेनलेस `Fe+Ni+Cr` | स्तंभ: **`1600 वर्ष, 8m, 6000 kg`**!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-c3-1',
      examTag: 'RRB ALP 2025 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.2.5): Reactivity Series vs Iron Sulphate',
      question: {
        en: 'A student has four strips: magnesium, copper, aluminum, and zinc. If each is placed in a solution of iron sulfate, which will show no reaction based on the reactivity series?',
        hi: 'एक छात्र के पास मैग्नीशियम, कॉपर, ऐलुमिनियम और जिंक की चार पट्टियाँ हैं। यदि प्रत्येक को आयरन सल्फेट के विलयन में रखा जाए, तो सक्रियता श्रेणी के आधार पर कौन-सी पट्टी कोई अभिक्रिया नहीं दर्शाएगी?',
      },
      options: {
        en: ['Copper', 'Aluminum', 'Zinc', 'Magnesium'],
        hi: ['कॉपर', 'ऐलुमिनियम', 'जिंक', 'मैग्नीशियम'],
      },
      correctIndex: 0,
      solution: {
        en: 'Reactivity order (`Table 3.2`): `Mg > Al > Zn > Fe > Cu`. Only **Copper (`Cu`)** sits below Iron so it **cannot displace Fe from `FeSO₄`**!',
        hi: 'सक्रियता क्रम `Mg > Al > Zn > Fe > Cu` है — केवल **कॉपर (`Cu`)** आयरन से नीचे होने के कारण कोई अभिक्रिया नहीं दिखाएगा।',
      },
    },
    {
      id: 'pyq-c3-2',
      examTag: 'RRB Group D 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.5.1): Heating Element Alloys',
      question: {
        en: 'Why are alloys preferred for the heating elements in devices like toasters?',
        hi: 'टोस्टर जैसे उपकरणों में तापन अवयवों के लिए मिश्रधातुओं को क्यों प्राथमिकता दी जाती है?',
      },
      options: {
        en: ['They are insulators', 'They have higher resistivity and do not oxidise readily at high temperatures', 'They are good electrical conductors with low resistivity', 'They have a low melting point'],
        hi: ['क्योंकि वे विद्युतरोधी होते हैं', 'क्योंकि उनकी प्रतिरोधकता उच्च होती है और वे उच्च ताप पर आसानी से ऑक्सीकृत नहीं होते हैं', 'क्योंकि वे निम्न प्रतिरोधकता के साथ विद्युत सुचालक होते हैं', 'उनका गलनांक निम्न होता है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Alloys combine **higher electrical resistivity** (`generating heat I²Rt cleanly`) with resistance to high-temperature oxidation (`burning`), unlike pure metals!',
        hi: 'मिश्रातुओं की प्रतिरोधकता उच्च होती है और वे उच्च ताप पर शीघ्र ऑक्सीकृत (`दहन`) नहीं होतीं, अतः हीटिंग अवयवों हेतु उत्तम हैं।',
      },
    },
    {
      id: 'pyq-c3-3',
      examTag: 'RRB Group D 2025 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.2.3 & 3.2.5): Metals Below [H] & Dilute Acids',
      question: {
        en: 'Read the following statements and choose the correct option. Statement I: All metals in the reactivity series can displace hydrogen from dilute acids to form hydrogen gas. Statement II: Metals below hydrogen in the reactivity series do not produce hydrogen gas with dilute acids.',
        hi: 'नीचे दिए गए कथनों को पढ़ें और सही विकल्प चुनें। कथन I: सक्रियता श्रेणी की सभी धातुएँ तनु अम्लों से हाइड्रोजन को विस्थापित कर हाइड्रोजन गैस बना सकती हैं। कथन II: सक्रियता श्रेणी में हाइड्रोजन से नीचे स्थित धातुएँ तनु अम्लों के साथ हाइड्रोजन गैस नहीं बनाती हैं।',
      },
      options: {
        en: [
          'Statement I is true, Statement II is true, but Statement II is not the correct explanation of Statement I.',
          'Statement I is false, but Statement II is true.',
          'Statement I is true, but Statement II is false.',
          'Statement I is true, Statement II is true, and Statement II is the correct explanation of Statement I.',
        ],
        hi: [
          'कथन I सही है और कथन II भी सही है, लेकिन कथन II, कथन I की सही व्याख्या नहीं करता है।',
          'कथन I असत्य है, लेकिन कथन II सत्य है।',
          'कथन I सत्य है, लेकिन कथन II असत्य है।',
          'कथन I सत्य है, कथन II सत्य है, तथा कथन II, कथन I की सही व्याख्या है।',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Metals below Hydrogen (`Cu, Hg, Ag, Au`) CANNOT displace `H₂` from dilute acids (`p.61`). Thus Statement I is FALSE and Statement II is TRUE!',
        hi: 'हाइड्रोजन से नीचे स्थित धातुएँ (`Cu, Hg, Ag, Au`) तनु अम्ल से `H₂` विस्थापित नहीं कर पातीं — अतः कथन I असत्य और कथन II सत्य है।',
      },
    },
    {
      id: 'pyq-c3-4',
      examTag: 'RRB Group D 2025 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.4.3): Low Reactivity Metallurgy (`Hg/Cu`)',
      question: {
        en: 'Metals low in the reactivity series, such as copper and mercury, are extracted by:',
        hi: 'सक्रियता श्रेणी में नीचे रखी गई धातुएँ, जैसे कॉपर और मर्करी, किस प्रकार निष्कर्षित की जाती हैं?',
      },
      options: {
        en: [
          'roasting in air to convert sulphide ores into oxides, followed by heating',
          'reduction with carbon at high temperatures',
          'displacement using more reactive metals',
          'electrolysis of their molten ores',
        ],
        hi: [
          'सल्फाइड अयस्कों को ऑक्साइडों में बदलने के लिए वायु में भर्जन, उसके बाद गर्म करके',
          'उच्च तापमान पर कार्बन के साथ अपचयन',
          'अधिक अभिक्रियाशील धातुओं का उपयोग करके विस्थापन',
          'उनके पिघले हुए अयस्कों के विद्युत-अपघटन',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim **NCERT `Sec 3.4.3` (`p.56`)**: Oxides of `Hg` (`from HgS Cinnabar`) and `Cu` (`from Cu₂S`) reduce to pure metal **simply by heating in air**!',
        hi: 'सटीक `NCERT भाग 3.4.3`: कम अभिक्रियाशील सल्फाइड अयस्कों (`HgS, Cu₂S`) को वायु में भर्जन से ऑक्साइड बना केवल गर्म करके धातु प्राप्त होती है।',
      },
    },
    {
      id: 'pyq-c3-5',
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.3.1): Ionic Solid Hardness & Brittleness',
      question: {
        en: 'Which of the following best explains why ionic compounds are hard but brittle?',
        hi: 'निम्नलिखित में से कौन-सा कथन सर्वोत्तम तरीके से यह वर्णन करता है कि आयनिक यौगिक कठोर लेकिन भंगुर क्यों होते हैं?',
      },
      options: {
        en: ['They are liquids at room temperature', 'They have a metallic lattice', 'Strong attractions make them hard; shifting layers break them apart', 'Weak attractions make them soft and flexible'],
        hi: ['वे कक्ष ताप पर तरल होते हैं', 'उनमें धात्विक जालक होती है', 'प्रबल आकर्षण उन्हें कठोर बना देते हैं; परतों के स्थानांतरण से वे अलग हो जाते हैं', 'दुर्बल आकर्षण उन्हें मृदु और लचीला बना देता है'],
      },
      correctIndex: 2,
      solution: {
        en: 'Strong electrostatic attraction makes crystals **hard** (`p.54`), while applying pressure shifts ionic layers so like charges repel, making them **brittle**.',
        hi: 'प्रबल आकर्षण से आयनिक ठोस **कठोर** होते हैं, पर दाब से आयन परतें खिसकने पर समान आवेश प्रतिकर्षण के कारण टुकड़ों में टूट (**भंगुर**) जाते हैं।',
      },
    },
    {
      id: 'pyq-c3-6',
      examTag: 'RRB Group D 2025 Shift 26',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Box p.47): Anodising Anode Reaction',
      question: {
        en: 'What happens at the anode during anodising?',
        hi: 'एनोडीकरण (`Anodising`) के दौरान एनोड पर क्या होता है?',
      },
      options: {
        en: ['Nitrogen gas reacts with aluminium to form oxide', 'Carbon dioxide reacts with aluminium to form oxide', 'Oxygen gas reacts with aluminium to form oxide', 'Hydrogen gas reacts with aluminium to form oxide'],
        hi: ['नाइट्रोजन गैस ऐलुमिनियम के साथ अभिक्रिया करके ऑक्साइड बनाती है', 'कार्बन डाइऑक्साइड ऐलुमिनियम संग ऑक्साइड बनाती है', 'ऑक्सीजन गैस ऐलुमिनियम के साथ अभिक्रिया करके ऑक्साइड बनाती है', 'हाइड्रोजन गैस ऐलुमिनियम संग ऑक्साइड बनाती है'],
      },
      correctIndex: 2,
      solution: {
        en: 'Exact **NCERT `p.47 Box`**: **Oxygen gas evolved at the anode reacts with Aluminium** forming a thicker protective **`Al₂O₃`** coat!',
        hi: 'अक्षरशः **NCERT `पृ. 47`**: एनोड पर उत्सर्जित **ऑक्सीजन गैस ऐलुमिनियम** संग मिलकर मोटी **`Al₂O₃` परत** बनाती है।',
      },
    },
    {
      id: 'pyq-c3-7',
      examTag: 'RRB Group D 2025 Shift 34',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Box p.60): Sacrificial Galvanisation',
      question: {
        en: 'Why does galvanisation protect iron even when the zinc layer is damaged?',
        hi: 'जिंक की परत क्षतिग्रस्त होने पर भी यशदलेपन (`galvanisation`) में लोहा जंग से सुरक्षित क्यों रहता है?',
      },
      options: {
        en: ['Zinc reacts faster with water', 'Zinc corrodes preferentially', 'Zinc prevents oxygen contact', 'Zinc increases iron hardness'],
        hi: ['जिंक जल के साथ अधिक तेजी से अभिक्रिया करता है', 'जिंक अधिमानतः संक्षारित होता है', 'जिंक ऑक्सीजन के संपर्क को रोकता है', 'जिंक लोहे की कठोरता बढ़ाता है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Since Zinc is **higher in reactivity than Iron (`Zn > Fe`)**, **Zinc corrodes preferentially (`sacrificial protection`)** even if the coat breaks (`NCERT p.60 Box`).',
        hi: 'लोहे की तुलना में जिंक अधिक सक्रिय (`Zn > Fe`) होने से परत खरोंच होने के बाद भी **जिंक प्राथमिकता से संक्षारित** होकर लोहे की रक्षा करता है!',
      },
    },
    {
      id: 'pyq-c3-8',
      examTag: 'RRB Group D 2025 Shift 40',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Box p.47): Principle of Anodising Aluminium',
      question: {
        en: 'Anodising is a process used to improve the appearance and durability of aluminium articles. Which of the following statements best explains the principle behind anodising?',
        hi: 'ऐनोडीकरण एक ऐसी प्रक्रिया है जिसका उपयोग ऐलुमिनियम की वस्तुओं के स्वरूप और टिकाऊपन को बेहतर बनाने के लिए किया जाता है। निम्नलिखित में से कौन-सा कथन ऐनोडीकरण के सिद्धांत को सर्वोत्तम तरीके से वर्णित करता है?',
      },
      options: {
        en: [
          'Aluminium is coated with zinc to prevent rusting.',
          'Aluminium is made the cathode in electrolysis to reduce oxide layer.',
          'Aluminium is made the anode and oxidised to form a thicker protective oxide layer.',
          'Aluminium is dipped in alkali to increase its reactivity.',
        ],
        hi: [
          'जंग लगने से बचाने के लिए ऐलुमिनियम को जस्ते से लेपित किया जाता है।',
          'ऑक्साइड परत को कम करने के लिए विद्युत-अपघटन में ऐलुमिनियम को कैथोड बनाया जाता है।',
          'ऐलुमिनियम को एनोड बनाया जाता है और ऑक्सीकृत करके मोटी सुरक्षात्मक ऑक्साइड परत बनाई जाती है।',
          'ऐलुमिनियम की अभिक्रियाशीलता बढ़ाने के लिए उसे क्षार में डुबोया जाता है।',
        ],
      },
      correctIndex: 2,
      solution: {
        en: 'Clean Aluminium acts as the **anode** in dil. `H₂SO₄`, getting oxidised by evolved `O₂` to create a durable dye-ready oxide barrier (`p.47`).',
        hi: 'ऐनोडीकरण में साफ ऐलुमिनियम को **ऐनोड** बनाकर तनु `H₂SO₄` संग विद्युत-अपघटन द्वारा मोटी सुरक्षात्मक ऑक्साइड परत बनाई जाती है।',
      },
    },
    {
      id: 'pyq-c3-9',
      examTag: 'RRB Group D 2025 Shift 45',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.3.1): Ionic Compound Melting/Boiling Points',
      question: {
        en: 'Which property is most commonly observed in ionic compounds like sodium chloride?',
        hi: 'सोडियम क्लोराइड जैसे आयनिक यौगिकों में सर्वाधिक कौन-सा गुणधर्म पाया जाता है?',
      },
      options: {
        en: ['Low melting and boiling points', 'High electrical conductivity in solid state', 'High melting and boiling points', 'Poor electrical conductivity in molten state'],
        hi: ['निम्न गलनांक और क्वथनांक', 'ठोस अवस्था में उच्च विद्युत चालकता', 'उच्च गलनांक और क्वथनांक', 'गलित अवस्था में दुर्बल विद्युत चालकता'],
      },
      correctIndex: 2,
      solution: {
        en: 'Strong electrostatic attraction gives `NaCl` **high MP (`1074 K`) & BP (`1686 K`)** (`Table 3.4`), zero solid conduction, and strong molten conduction.',
        hi: 'प्रबल अंतर-आयनिक आकर्षण के कारण `NaCl` व अन्य आयनिक यौगिकों का **गलनांक (`1074 K`) व क्वथनांक (`1686 K`) उच्च** होता है।',
      },
    },
    {
      id: 'pyq-c3-10',
      examTag: 'RRB NTPC UG 2024 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.5.1): Why Alloy Is a Mixture',
      question: {
        en: 'Why is an alloy considered a mixture even though it cannot be separated by physical methods?',
        hi: 'भौतिक विधियों द्वारा पृथक न किए जा सकने पर भी मिश्रधातु को मिश्रण क्यों माना जाता है?',
      },
      options: {
        en: [
          'It shows the properties of its constituents and can have variable composition.',
          'Alloys are always magnetic because they contain metals with a fixed composition.',
          'It contains only one type of element in vapor form.',
          'It is formed only by non-metals.',
        ],
        hi: [
          'यह अपने संघटकों के गुणधर्मों को प्रदर्शित करती है और इसका संघटन परिवर्ती हो सकता है।',
          'मिश्रधातुएँ सदैव चुम्बकीय होती हैं क्योंकि इनमें निश्चित संघटन वाली धातुएँ होती हैं।',
          'इसमें वाष्प रूप में केवल एक ही प्रकार का तत्व होता है।',
          'यह केवल अधातुओं से ही बनती है।',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Unlike fixed-formula chemical compounds, alloys retain **constituent properties and permit variable composition** (`Brass ~70/30 Cu-Zn`), making them homogeneous mixtures (`NCERT Class 9 & 10 p.60`).',
        hi: 'निश्चित सूत्र वाले यौगिक के विपरीत, मिश्रधातु अपने अवयवों के गुण दिखाती है व संघटन बदल सकता है — अतः यह समांगी मिश्रण है।',
      },
    },
    {
      id: 'pyq-c3-11',
      examTag: 'RRB NTPC UG 2024 Shift 51',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.5.1) + Physics: Copper-Based Resistor Alloy',
      question: {
        en: 'Which copper-based alloy is a preferred material for making standard resistors because of its high resistivity and low temperature coefficient?',
        hi: 'किस ताँबा-आधारित मिश्रधातु को अपनी उच्च प्रतिरोधकता और निम्न ताप गुणांक के कारण मानक प्रतिरोधक बनाने के लिए वरीय माना जाता है?',
      },
      options: {
        en: ['Brass', 'Tungsten', 'Alnico', 'Manganin'],
        hi: ['पीतल', 'टंगस्टन', 'ऐल्निको', 'मैंगनीन'],
      },
      correctIndex: 3,
      solution: {
        en: '**Manganin** (`Cu + Mn + Ni`) matches NCERT’s rule (`p.60`): alloys show lower conductivity / higher resistivity and barely change resistance with temperature.',
        hi: '**मैंगनीन** (`ताँबा आधारित मिश्रातु`) उच्च प्रतिरोधकता व अति-न्यून ताप गुणांक के कारण मानक प्रतिरोधकों हेतु उपयुक्त है।',
      },
    },
    {
      id: 'pyq-c3-12',
      examTag: 'RRB ALP CBT-2 2026 Fitter S1',
      section: 'Metallurgy',
      subject: 'General Science & Trade',
      topic: 'NCERT Ch 3 (Sec 3.4.5): Bauxite Ore & Aluminium Oxide',
      question: {
        en: 'Aluminium oxide abrasive is produced from:',
        hi: 'ऐलुमिनियम ऑक्साइड अपघर्षक निम्नलिखित में से किससे उत्पन्न होता है?',
      },
      options: {
        en: ['Zinc ore', 'Copper ore', 'Bauxite ore', 'Iron ore'],
        hi: ['जस्ता अयस्क', 'ताम्र अयस्क', 'बॉक्साइट अयस्क', 'लौह अयस्क'],
      },
      correctIndex: 2,
      solution: {
        en: '**Bauxite (`Al₂O₃·2H₂O`)** is the primary ore of **Aluminium (`Al₂O₃`)**, extracted cleanly via electrolytic reduction (`Sec 3.4.5`)!',
        hi: '**बॉक्साइट (`Al₂O₃·2H₂O`)** ऐलुमिनियम व ऐलुमिना का मुख्य अयस्क है, जिससे वैद्युतअपघटन द्वारा `Al` प्राप्त होता है।',
      },
    },
    {
      id: 'pyq-c3-13',
      examTag: 'RRB ALP CBT-2 2026 Fitter S2',
      section: 'Alloys',
      subject: 'General Science & Trade',
      topic: 'NCERT Ch 3 (Box p.60): Solder `Pb + Sn` Low Melting Point',
      question: {
        en: 'Which solder composition is most suitable for joining delicate electronic components requiring a low melting point and reliable electrical connections?',
        hi: 'निम्न गलनांक और विश्वसनीय विद्युत संयोजन की आवश्यकता वाले कोमल इलेक्ट्रॉनिक घटकों को जोड़ने के लिए कौन-सा सोल्डर संघटन सर्वाधिक उपयुक्त है?',
      },
      options: {
        en: [
          'Copper-based solder with 95% copper, 5% tin',
          'Silver solder with 2% silver, 97% tin, 1% copper',
          'Lead solder with 70% lead and 30% tin',
          'Tin-lead solder with 60% tin and 40% lead',
        ],
        hi: [
          '95% कॉपर, 5% टिन वाला कॉपर-आधारित सोल्डर',
          '2% सिल्वर, 97% टिन, 1% कॉपर वाला सिल्वर सोल्डर',
          '70% लेड और 30% टिन वाला लेड सोल्डर',
          '60% टिन और 40% लेड वाला टिन-लेड सोल्डर',
        ],
      },
      correctIndex: 3,
      solution: {
        en: '**NCERT Box `p.60`**: **Solder is an alloy of Lead (`Pb`) and Tin (`Sn`)** with a **very low melting point**, ideal for welding delicate electrical wires & joints (`60% Sn : 40% Pb`)!',
        hi: '**NCERT `पृ. 60` बॉक्स**: **सोल्डर सीसा (`Pb`) व टिन (`Sn`) की मिश्रातु** है जिसका **गलनांक अत्यंत कम** होता है (`60% Sn : 40% Pb` इलेक्ट्रॉनिक वेल्डिंग हेतु उत्तम)।',
      },
    },
    {
      id: 'pyq-c3-14',
      examTag: 'RRB Tech Gr-III 2024 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.1.1): Malleability, Ductility & Heat Conduction',
      question: {
        en: 'Which of the following statements is/are correct? 1. Some metals can be beaten into thin sheets. This property is called malleability. 2. Metals can be drawn into thin wires. 3. Metals are good conductors of heat.',
        hi: 'निम्नलिखित में से कौन-सा/कौन-से कथन सही है/हैं? 1. कुछ धातुओं को पीटकर पतली चादर बनाया जा सकता है। इस गुणधर्म को आघातवर्ध्यता कहा जाता है। 2. धातुओं को खींचकर पतले तार बनाए जा सकते हैं। 3. धातुएँ ऊष्मा की सुचालक होती हैं।',
      },
      options: {
        en: ['Only 1 and 3', '1, 2 and 3', 'Only 1 and 2', 'Only 1'],
        hi: ['केवल 1 और 3', '1, 2 और 3', 'केवल 1 और 2', 'केवल 1'],
      },
      correctIndex: 1,
      solution: {
        en: 'ALL THREE (**1: Malleability, 2: Ductility, 3: Good thermal conductivity**) are verbatim textbook metallic traits (`NCERT Pages 42–43`, Activities 3.3–3.5)!',
        hi: 'तीनों कथन (आघातवर्ध्यता, तन्यता एवं ऊष्मा सुचालकता) अक्षरशः NCERT क्रियाकलाप `3.3–3.5` के प्रमुख गुण हैं!',
      },
    },
    {
      id: 'pyq-c3-15',
      examTag: 'RRB Tech Gr-III 2024 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.1.1): Most Ductile Metal (`1g → 2 km`)',
      question: {
        en: 'Which of the following metals is most ductile?',
        hi: 'निम्नलिखित में से कौन-सी धातु सर्वाधिक तन्य (`ductile`) है?',
      },
      options: {
        en: ['Lithium', 'Gold', 'Lead', 'Sodium'],
        hi: ['लिथियम (Lithium)', 'सोना (Gold)', 'लेड (Lead)', 'सोडियम (Sodium)'],
      },
      correctIndex: 1,
      solution: {
        en: 'Word-for-word **NCERT `p.42`**: **Gold (`Au`) is the MOST ductile metal** — a wire **`2 km` long** can be drawn from **`1 gram` of gold**!',
        hi: 'सटीक `NCERT पृ. 42`: **सोना (`Gold`) सबसे अधिक तन्य धातु है** (`1 ग्राम सोने से 2 km लंबा तार खींचा जा सकता है!`)।',
      },
    },
    {
      id: 'pyq-c3-16',
      examTag: 'RRB Tech Gr-III 2024 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.4.1): Free / Native State Metals',
      question: {
        en: 'According to the reactivity series of metals, which metal pair is found in native state?',
        hi: 'धातुओं की सक्रियता श्रेणी के अनुसार कौन-सा धातु युग्म मूल (`प्राकृतिक`) अवस्था में पाया जाता है?',
      },
      options: {
        en: ['Gold and platinum', 'Sodium and potassium', 'Calcium and aluminium', 'Calcium and magnesium'],
        hi: ['गोल्ड और प्लैटिनम', 'सोडियम और पोटैशियम', 'कैल्शियम और एलुमिनियम', 'कैल्शियम और मैग्नीशियम'],
      },
      correctIndex: 0,
      solution: {
        en: '**`p.55`**: Least reactive bottom metals — **Gold (`Au`) and Platinum (`Pt`)** — stay uncombined in native/free state (`while K, Na, Ca, Mg, Al NEVER exist free!`).',
        hi: '**`NCERT पृ. 55`**: सबसे कम अभिक्रियाशील **गोल्ड व प्लैटिनम** प्रकृति में मुक्त अवस्था में मिलते हैं (`K–Al कभी स्वतंत्र नहीं`)।',
      },
    },
    {
      id: 'pyq-c3-17',
      examTag: 'RRB Tech Gr-III 2024 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.2.1): Amphoteric Oxide Example',
      question: {
        en: 'Which of the following oxides is amphoteric in nature?',
        hi: 'निम्नलिखित में से कौन-सा ऑक्साइड उभयधर्मी (`amphoteric`) प्रकृति का होता है?',
      },
      options: {
        en: ['Sodium peroxide', 'Copper oxide', 'Calcium oxide', 'Aluminium oxide'],
        hi: ['सोडियम परॉक्साइड', 'कॉपर ऑक्साइड', 'कैल्शियम ऑक्साइड', 'एलुमिनियम ऑक्साइड'],
      },
      correctIndex: 3,
      solution: {
        en: '**Aluminium Oxide (`Al₂O₃`)** and **Zinc Oxide (`ZnO`)** behave as **Amphoteric Oxides** reacting with BOTH `HCl` and `NaOH` (`p.46`).',
        hi: '**ऐलुमिनियम ऑक्साइड (`Al₂O₃`)** व **जिंक ऑक्साइड (`ZnO`)** अम्ल और क्षार दोनों से क्रिया करने वाले **उभयधर्मी ऑक्साइड** हैं (`पृ. 46`)।',
      },
    },
    {
      id: 'pyq-c3-18',
      examTag: 'RRB Tech Gr-III 2024 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.3.1): Solid Ionic Compounds Non-Conduction',
      question: {
        en: 'Which of the following statements regarding ionic compounds is INCORRECT?',
        hi: 'आयनिक यौगिकों के संबंध में निम्नलिखित में से कौन-सा कथन गलत (`INCORRECT`) है?',
      },
      options: {
        en: [
          'Ionic compounds are generally soluble in water.',
          'Ionic compounds are solids.',
          'Ionic compounds have a high melting point.',
          'Ionic compounds in solid state conduct electricity.',
        ],
        hi: [
          'आयनिक यौगिक सामान्यतः जल में घुलनशील होते हैं।',
          'आयनिक यौगिक ठोस होते हैं।',
          'आयनिक यौगिकों का गलनांक उच्च होता है।',
          'आयनिक यौगिक ठोस अवस्था में विद्युत का चालन करते हैं।',
        ],
      },
      correctIndex: 3,
      solution: {
        en: '**NCERT `p.54 (iv)`**: Ionic compounds in **SOLID state do NOT conduct electricity** because rigid lattice locks ion movement (`conduct ONLY molten or aqueous!`).',
        hi: '**`NCERT पृ. 54`**: **ठोस अवस्था में आयनों की गति असंभव** होने से आयनिक यौगिक ठोस रूप में विद्युत का चालन **नहीं** करते (`केवल गलित या जलीय घोल में`)!',
      },
    },
    {
      id: 'pyq-c3-19',
      examTag: 'RRB Tech Gr-III 2024 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Box p.60): Alloy Bronze (`Cu + Sn`)',
      question: {
        en: 'Identify the name of an alloy formed when mix of copper and tin (`Cu` and `Sn`)?',
        hi: 'ताँबे और टिन (`Cu` और `Sn`) के मिश्रण से बनने वाली मिश्र धातु का नाम क्या है?',
      },
      options: {
        en: ['Bronze', 'Gold', 'Brass', 'Solder'],
        hi: ['काँसा (Bronze)', 'सोना', 'पीतल (Brass)', 'सोल्डर (Solder)'],
      },
      correctIndex: 0,
      solution: {
        en: '**`Cu + Sn` = Bronze (`काँसा`)** (`while Brass = Cu + Zn` and `Solder = Pb + Sn`, **NCERT p.60 Box**)!',
        hi: '**`Cu + Sn` = काँसा (`Bronze`)**, जबकि `Cu + Zn` = पीतल (`Brass`) और `Pb + Sn` = सोल्डर है (`पृ. 60`)!',
      },
    },
    {
      id: 'pyq-c3-20',
      examTag: 'RRB Tech Gr-III 2024 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Table 3.2): Most Reactive Metal',
      question: {
        en: 'Which of the following is the most reactive metal in the reactivity series?',
        hi: 'निम्नलिखित में से कौन-सी धातु सक्रियता श्रेणी में सबसे अधिक अभिक्रियाशील धातु है?',
      },
      options: {
        en: ['Potassium', 'Zinc', 'Sodium', 'Gold'],
        hi: ['पोटैशियम (Potassium)', 'जिंक (Zinc)', 'सोडियम (Sodium)', 'सोना (Gold)'],
      },
      correctIndex: 0,
      solution: {
        en: '**Potassium (`K`)** sits at the very TOP of Reactivity Series **Table 3.2 (`p.50`)** above Sodium (`K > Na > Ca > ... > Au`).',
        hi: 'सारणी 3.2 (`पृ. 50`) में **पोटैशियम (`K`)** सबसे शीर्ष पर अर्थात् सर्वाधिक अभिक्रियाशील धातु है!',
      },
    },
    {
      id: 'pyq-c3-21',
      examTag: 'RRB Tech Gr-III 2024 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.3): Ionic Compound Example',
      question: {
        en: 'Which of the following is an example of an ionic compound?',
        hi: 'निम्नलिखित में से कौन-सा आयनिक यौगिक का एक उदाहरण है?',
      },
      options: {
        en: ['Turmeric', 'Sugar', 'Glucose', 'Table salt'],
        hi: ['हल्दी (Turmeric)', 'चीनी (Sugar)', 'ग्लूकोज़ (Glucose)', 'खाने का नमक (Table salt)'],
      },
      correctIndex: 3,
      solution: {
        en: '**Table salt (`Sodium Chloride, NaCl`)** is NCERT’s textbook ionic aggregate formed by electron transfer `Na → Na⁺ + e⁻` and `Cl + e⁻ → Cl⁻` (`Sugar & Glucose are covalent`).',
        hi: '**खाने का नमक (`सोडियम क्लोराइड — NaCl`)** प्रमुख आयनिक यौगिक है (`चीनी व ग्लूकोज़ सहसंयोजी हैं`)।',
      },
    },
    {
      id: 'pyq-c3-22',
      examTag: 'RRB Tech Gr-III 2024 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.2.5): Reactivity Displacement Test',
      question: {
        en: 'According to the reactivity series, which chemical reaction is possible?',
        hi: 'सक्रियता श्रेणी के अनुसार, निम्न में से कौन-सी रासायनिक अभिक्रिया संभव है?',
      },
      options: {
        en: ['3Cu + FeCl₃ → 3CuCl₂ + Fe', 'Zn + CuCl₂ → ZnCl₂ + Cu', '3Ag + AlCl₃ → 3AgCl + Al', 'Cu + ZnCl₂ → CuCl₂ + Zn'],
        hi: ['3Cu + FeCl₃ → 3CuCl₂ + Fe', 'Zn + CuCl₂ → ZnCl₂ + Cu', '3Ag + AlCl₃ → 3AgCl + Al', 'Cu + ZnCl₂ → CuCl₂ + Zn'],
      },
      correctIndex: 1,
      solution: {
        en: 'Zinc lies well above Copper (`Zn > Cu` in Table 3.2), so **only `Zn + CuCl₂ → ZnCl₂ + Cu` succeeds**, while `Cu` (`below Fe/Zn`) and `Ag` (`below Al`) cannot displace!',
        hi: 'जिंक कॉपर से अधिक सक्रिय (`Zn > Cu`) होने से केवल **`Zn + CuCl₂ → ZnCl₂ + Cu`** विस्थापन अभिक्रिया संभव है (`बाकी उल्टी हैं`)!',
      },
    },
    {
      id: 'pyq-c3-23',
      examTag: 'RRB Tech Gr-III 2024 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Table 3.2): Most & Least Reactive Metal Pair',
      question: {
        en: 'Which pair in the reactivity series represents the most and least reactive metal pairs?',
        hi: 'सक्रियता श्रेणी में कौन-सा युग्म सबसे अधिक और सबसे कम अभिक्रियाशील धातु युग्म को दर्शाता है?',
      },
      options: {
        en: ['Magnesium and gold', 'Sodium and gold', 'Potassium and gold', 'Calcium and gold'],
        hi: ['मैग्नीशियम और सोना', 'सोडियम और सोना', 'पोटैशियम और सोना', 'कैल्शियम और सोना'],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim **Table 3.2 (`p.50`)** endpoints: Top = **Potassium (`K`, most reactive)** & Bottom = **Gold (`Au`, least reactive)**!',
        hi: 'सारणी 3.2 (`पृ. 50`) के दोनों सिरे: शीर्ष = **पोटैशियम (`K`, सर्वाधिक)** और तल = **सोना (`Au`, सबसे कम अभिक्रियाशील)**!',
      },
    },
    {
      id: 'pyq-c3-24',
      examTag: 'RRB Tech Gr-III 2024 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 3 (Sec 3.3): Ionic Electron Transfer Direction',
      question: {
        en: 'Which of the following statements is true for an ionic compound?',
        hi: 'आयनिक यौगिक के लिए निम्नलिखित में से कौन-सा कथन सत्य है?',
      },
      options: {
        en: [
          'In an ionic compound, the transfer of electrons takes place from a metal to a metal.',
          'In an ionic compound, the transfer of electrons takes place from a metal to a non-metal.',
          'In an ionic compound, the transfer of electrons takes place from a non-metal to a metal.',
          'In an ionic compound, the transfer of electrons takes place from a non-metal to a non-metal.',
        ],
        hi: [
          'आयनिक यौगिक में, इलेक्ट्रॉनों का स्थानांतरण एक धातु से एक धातु में होता है।',
          'आयनिक यौगिक में, इलेक्ट्रॉनों का स्थानांतरण एक धातु से एक अधातु में होता है।',
          'आयनिक यौगिक में, इलेक्ट्रॉनों का स्थानांतरण एक अधातु से एक धातु में होता है।',
          'आयनिक यौगिक में, इलेक्ट्रॉनों का स्थानांतरण एक अधातु से एक अधातु में होता है।',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Exact **NCERT `p.53` definition**: Compounds formed by **transfer of electrons from a METAL (`cation +`) to a NON-METAL (`anion −`)** are **Ionic / Electrovalent Compounds**!',
        hi: 'अक्षरशः **NCERT `पृ. 53`**: **धातु से अधातु में इलेक्ट्रॉन के स्थानांतरण** से बने यौगिक आयनिक या वैद्युत संयोजक यौगिक कहलाते हैं!',
      },
    },
  ],
};

export default C10_CH3_METALS_DATA;
