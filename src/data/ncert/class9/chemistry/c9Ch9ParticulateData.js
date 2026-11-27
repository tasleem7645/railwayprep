/**
 * Class 9 NCERT Science (2026–27 Edition — ihsc109.pdf, Pages 161–183) + Railway Chemistry Deep-Dive
 * Chapter 9: Particulate Nature of Matter (द्रव्य का परमाण्विक आधार) — Gold Standard v3
 * Complete Coverage: 9.1 Law of Conservation of Mass (Lavoisier 1789, Act 9.1–9.3: Open vs Sealed CO2 + Na2SO4+BaCl2->BaSO4 ppt) ->
 * 9.2 Law of Constant Proportions (Proust, H:O=1:8, CO2=3:8, CO=3:4, NH3=14:3, Cinnabar Hingula 86.22% Hg : 13.78% S) ->
 * 9.3 Dalton’s Atomic Theory (1808 Postulates) -> 9.4 Octet/Duplet Stability, Covalent Sharing (H2, Cl2, O2=double, HCl, H2O, CO2, NH3, H2S, Raja Ramanna Nuclear Energy),
 * IUPAC Covalent Prefixes (mono..hexa, vowel drop, H-first) & Ionic Transfer (Na+ Cl- 3D Crystal Lattice, 1:6 Coordination, Table 9.1 Monatomic/Polyatomic Ions) ->
 * 9.5 Criss-Cross Chemical Formulae + Bracket Rule Al2(SO4)3/Mg(OH)2/Al(OH)3 + HCF Simplification (MgO, CaCO3) ->
 * 9.6 Act 9.4 Solubility & Bulb Conductivity (Ionic Solid Insulator vs Aqueous/Molten Conductor; Covalent Low MP/Insulator) ->
 * 9.7–9.8 Molecular Mass (H2O 18u, CO2 44u, HNO3 63u, CH4 16u) & Formula Unit Mass (Na2O 62u, Ca(NO3)2 164u, KCl 74.5u, Mg(OH)2 58u, (NH4)2SO4 132u).
 * All 4 Activities, 24 Think & Answer Qs, 15 Exercises verified vs ihsc1an, 24 Pure RRB Chemistry PYQs.
 */

export const C9_CH9_PARTICULATE_DATA = {
  id: 'c9-chem-ch9',
  classId: 'class9',
  subjectId: 'chemistry',
  subjectLabel: { en: 'Chemistry', hi: 'रसायन विज्ञान (Chemistry)' },
  chapterNumber: 9,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 9: Particulate Nature of Matter (CBT Edition)',
  blueprintSvgKey: 'c9-ch9-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Conservation of Mass (Act 9.2–9.3, Closed vs Open), Constant Proportions & Dalton (1808)', hi: 'द्रव्यमान संरक्षण (क्र. 9.2–9.3), स्थिर अनुपात नियम व डाल्टन सिद्धांत (1808)' }, pct: 26 },
    { label: { en: 'Valency, Criss-Cross Chemical Formulae, Brackets & Polyatomic Ions (Table 9.1, Al₂(SO₄)₃, NH₄⁺)', hi: 'संयोजकता, तिर्यक रासायनिक सूत्र, कोष्ठक नियम व बहुपरमाणुक आयन (तालिका 9.1)' }, pct: 28 },
    { label: { en: 'Molecular Mass & Formula Unit Mass Numericals (H₂O 18u, CO₂ 44u, HNO₃ 63u, (NH₄)₂SO₄ 132u)', hi: 'आण्विक एवं सूत्र इकाई द्रव्यमान आंकिक प्रश्न (CaCl₂ 111u, Na₂O 62u, Ca(NO₃)₂ 164u)' }, pct: 26 },
    { label: { en: 'Covalent vs Ionic Bonding, 3D NaCl Lattice & Electrical Conductivity (Act 9.4 Bulb Test)', hi: 'सहसंयोजी बनाम आयनिक आबंध, 3-D NaCl क्रिस्टल जालक व विद्युत चालकता (क्र. 9.4)' }, pct: 20 },
  ],
  title: {
    en: 'Chapter 9: Particulate Nature of Matter — Laws, Formulae & Bonding',
    hi: 'अध्याय 9: द्रव्य का परमाण्विक आधार — रासायनिक संयोग, सूत्र व आबंधन',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive • Conservation & Constant Proportions, Criss-Cross Formulae, Ions, Ionic/Covalent Properties & Masses (`ihsc109`)',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई • द्रव्यमान संरक्षण व स्थिर अनुपात, तिर्यक सूत्र, बहुपरमाणुक आयन, आयनिक-सहसंयोजी गुण व द्रव्यमान (`u`)',
  },
  metrics: {
    pages: 23,
    activities: 4,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class9-chem-ch9/hero-particulate-matter.webp',
    caption: {
      en: 'Chemical Combination & Structure Lab (`NCERT Ch 9`): 3D Ionic NaCl Crystal Lattice (left), Hydrated Ions Conducting in Aqueous Beaker, Floating Covalent Molecules (`H₂O, CO₂, CH₄/NH₃`), and Analytical Mass Balance (`1789 Lavoisier Conservation`).',
      hi: 'रासायनिक आबंधन एवं द्रव्यमान प्रयोगशाला (`NCERT अध्याय 9`): 3-D आयनिक क्रिस्टल जालक, जलीय विलयन में मुक्त आयन, सहसंयोजी अणु एवं द्रव्यमान संरक्षण तुला (`लवाइजिए 1789`)।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Two Pillars of Chemical Combination (`9.1–9.3`)**: **(1) Law of Conservation of Mass (`Antoine Lavoisier, 1789`)**: Mass is neither created nor destroyed in any chemical reaction — sealed/corked vessels keep total mass unchanged (`Act 9.2 Balloon; Act 9.3 Na₂SO₄ + BaCl₂ -> BaSO₄↓`). **(2) Law of Constant / Definite Proportions (`Joseph Proust`)**: A pure compound ALWAYS has elements in a **fixed mass ratio regardless of source** (`Water H:O = 1:8`, `CO₂ C:O = 3:8`, `CO = 3:4`, `NH₃ = 14:3`, `Cinnabar Hingula = 86.22% Hg : 13.78% S`; NEVER applies to mixtures!). **Dalton’s Atomic Theory (`1808`)** explained both via indivisible atoms rearranging cleanly in whole-number ratios.',
      hi: '**रासायनिक संयोग के दो आधार-स्तंभ (`9.1–9.3`)**: **(1) द्रव्यमान संरक्षण नियम (`आन्त्वॉ लवाइजिए, 1789`)**: किसी रासायनिक अभिक्रिया में द्रव्य न तो उत्पन्न होता है न नष्ट (`बंद गुब्बारा क्र. 9.2; क्र. 9.3 में Na₂SO₄ + BaCl₂ → BaSO₄↓`)। **(2) स्थिर/निश्चित अनुपात नियम (`जोसेफ प्राउस्ट`)**: किसी भी स्रोत से प्राप्त शुद्ध यौगिक में तत्वों का **द्रव्यमान अनुपात सदैव निश्चित रहता है** (`जल 1:8`, `CO₂ 3:8`, `CO 3:4`, `NH₃ 14:3`, `सिनेबार हिंगुला 86.22% Hg : 13.78% S`; मिश्रण पर लागू नहीं!)। **जॉन डाल्टन (`1808`)** ने अविभाज्य परमाणुओं द्वारा इनकी व्याख्या की।',
    },
    {
      en: '**How Atoms Bond: Octet Stability (`9.4`)**: Atoms bond to achieve **8 valence e⁻ (`Octet`)** or **2 e⁻ in K-shell (`Duplet`)** lowering energy. **Covalent Bond (`Non-metal + Non-metal Sharing`)**: Single (`H–H, Cl–Cl, H–Cl, H₂O, NH₃, CH₄`) & Double (`O=O, O=C=O`). Naming uses Greek prefixes **`mono(1), di(2), tri(3), tetra(4), penta(5), hexa(6)`** with `-ide` (`CO monoxide [drop vowel], SF₆ sulfur hexafluoride, PCl₃, N₂O₅, H₂S skips prefix for H!`). **Ionic Bond (`Transfer`)**: Metals lose e⁻ -> **Cation (`Na⁺`)**; Non-metals gain e⁻ -> **Anion (`Cl⁻`)** forming **3-D electrostatic crystal lattices (`Na⁺ surrounded by 6 Cl⁻`)**!',
      hi: '**रासायनिक आबंधन (`9.4`)**: परमाणु **अष्टक (`8 e⁻`) या द्विक (`K=2 e⁻`)** पूर्ण कर कम ऊर्जा/स्थायित्व पाने को जुड़ते हैं। **सहसंयोजी आबंध (`साझेदारी`)**: एकल (`H₂, Cl₂, HCl, H₂O`) एवं द्वि-आबंध (`O₂`, `CO₂`)। नामकरण में **`मोनो(1), डाइ(2), ट्राइ(3), टेट्रा(4), पेंटा(5), हेक्सा(6)`** + `-ide` (`N₂O₅`, `SF₆`, पर प्रथम H पर उपसर्ग नहीं जैसे `H₂S`)। **आयनिक आबंध (`स्थानांतरण`)**: धातु `e⁻` त्यागकर **धनायन (`Na⁺`)** व अधातु ग्रहण कर **ऋणायन (`Cl⁻`)** बनाते हैं जो **प्रबल स्थिर-विद्युत बल से 3-D क्रिस्टल जालक (`1 Na⁺ के चारों ओर 6 Cl⁻`)** में बँधते हैं!',
    },
    {
      en: '**Criss-Cross Formulae & Properties (`9.5–9.6`)**: Write **Cation first, Anion second**, swap valencies, divide by common factor if needed (`Mg²⁺ O²⁻ -> MgO`, `Ca²⁺ CO₃²⁻ -> CaCO₃`), NEVER write charges in formula, and wrap **`>= 2` polyatomic ions in brackets `()`** (**`Al₂(SO₄)₃`**, **`Ca(OH)₂`**, **`Al(OH)₃`** — NEVER `AlOH₃`!). **Properties (`Act 9.4`)**: **Ionic (`NaCl, CuSO₄`)** dissolve in water, have **HIGH melting/boiling points**, insulate in **SOLID** state (`locked lattice ions`), yet **CONDUCT electricity when molten or aqueous**! **Covalent (`Sugar, Camphor, Naphthalene`)** have low MP/BP and NEVER ionize/conduct.',
      hi: '**तिर्यक रासायनिक सूत्र व गुणधर्म (`9.5–9.6`)**: पहले **धनायन (`+`)** फिर **ऋणायन (`−`)** लिख संयोजकताओं का तिर्यक करें; समान होने पर काटें (`MgO`, `CaCO₃`); **आवेश सूत्र में न लिखें**; यदि बहुपरमाणुक आयन की संख्या `≥ 2` हो तो **कोष्ठक `()` लगाएँ** (`Al₂(SO₄)₃`, `Ca(OH)₂`, `Al(OH)₃`)। **क्र. 9.4 गुण**: **आयनिक यौगिक (`NaCl, CuSO₄`)** जल में घुलनशील (पेट्रोल/किरोसिन में अघुलनशील), **उच्च गलनांक-क्वथनांक**, **ठोस में कुचालक**, पर **गलित व जलीय विलयन में सुचालक**! **सहसंयोजी (`चीनी, कर्पूर, नैफ्थलीन`)** कभी आयन न बना विद्युत कुचालक होते हैं।',
    },
    {
      en: '**Molecular Mass & Formula Unit Mass (`u`) (`9.7–9.8`)**: Sum atomic masses (**`H=1, C=12, N=14, O=16, Na=23, Mg=24, Al=27, P=31, S=32, Cl=35.5, K=39, Ca=40, Zn=65 u`**): Covalent **Molecular Mass**: **`H₂O=18 u`, `CH₄=16 u`, `NH₃=17 u`, `CO₂=44 u`, `HNO₃=63 u`, `H₃PO₄=98 u`**. Ionic compounds form 3D lattices (not single molecules), so use **Formula Unit Mass**: **`Na₂O=62 u`, `KCl=74.5 u`, `ZnO=81 u`, `Mg(OH)₂=58 u`, `NaHCO₃=84 u`, `NH₄NO₃=80 u`, `CaCl₂=111 u`, `(NH₄)₂SO₄=132 u`, `Ca(NO₃)₂=164 u`**!',
      hi: '**आण्विक एवं सूत्र इकाई द्रव्यमान (`u`, 9.7–9.8)**: सभी संघटक परमाणुओं का योग (**`H=1, C=12, N=14, O=16, Na=23, Mg=24, P=31, S=32, Cl=35.5, K=39, Ca=40, Zn=65 u`**)। **आण्विक द्रव्यमान (`सहसंयोजी`)**: **`H₂O=18u`, `CH₄=16u`, `NH₃=17u`, `CO₂=44u`, `HNO₃=63u`, `H₃PO₄=98u`**। आयनिक ठोस अणु नहीं 3-D क्रिस्टल बनाते हैं अतः इनका **सूत्र इकाई द्रव्यमान**: **`Na₂O=62u`, `KCl=74.5u`, `ZnO=81u`, `Mg(OH)₂=58u`, `NaHCO₃=84u`, `NH₄NO₃=80u`, `CaCl₂=111u`, `(NH₄)₂SO₄=132u`, `Ca(NO₃)₂=164u`**!',
    },
  ],
  sections: [
    {
      id: 'laws-conservation-constant-dalton',
      number: '9.1–9.3',
      flowDiagramKey: 'c9-ch9-blueprint-mindmap',
      diagramKey: 'c9-ch9-conservation-flask-diagram',
      title: {
        en: 'Laws of Chemical Combination (`Lavoisier Conservation` & `Proust Constant Proportions`) + Dalton’s Atomic Theory (`1808`)',
        hi: 'रासायनिक संयोग के नियम (`द्रव्यमान संरक्षण 1789` एवं `स्थिर अनुपात`) तथा जॉन डाल्टन का परमाणु सिद्धांत (`1808`)',
      },
      summaryTag: {
        en: 'NCERT Pages 161–168 • Activities 9.1–9.3, Closed vs Open Flasks, Water 1:8, Cinnabar 86.22%, Examples 9.1–9.3 & Dalton Postulates',
        hi: 'NCERT पृ. 161–168 • क्र. 9.1–9.3 (बंद गुब्बारा vs खुला फ्लास्क, BaSO₄↓ श्वेत अवक्षेप), जल 1:8, सिनेबार 86.22% व डाल्टन के अभिगृहीत',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Physical vs Chemical Mass Conservation (`Act 9.1–9.3`): Open Escape Trap vs Sealed Balloon & Precipitate Flasks',
            hi: '1. द्रव्यमान संरक्षण का नियम (`लवाइजिए 1789`): क्रियाकलाप 9.1–9.3 व खुले बनाम बंद फ्लास्क का परीक्षा रहस्य',
          },
          conceptStory: {
            en: 'Why do hydrogen (`flammable gas`) and oxygen (`supports combustion`) combine chemically to form liquid water (`non-combustible fire extinguisher!`)? Chemistry governs **how tiny particles combine and rearrange**! Start with **Activity 9.1** (`physical dissolution of NaCl salt in 50 mL water & cutting paper -> exact same total mass on digital balance`). Now track **Chemical Reactions**:\n• **==Law of Conservation of Mass (`Antoine Lavoisier, 1789`)==**: **Matter can neither be created nor destroyed in any chemical reaction** — total mass BEFORE reaction equals total mass AFTER reaction (`exact reactants mass equals products mass!`).\n• **Activity 9.2 Two-Setup Master Experiment (`Vinegar + Baking Soda NaHCO₃`)**:\n  1) **Setup 1 (`Open Flask + Empty Balloon beside`, Fig 9.2)**: Pouring baking soda from open/unattached balloon into acetic acid produces vigorous effervescence (**`CO₂ gas escapes`**) -> final digital balance reading **DROPS**! *Watch RRB Trap (`Group D Shift 16`)*: **Does this violate Conservation? NO!** Only gaseous `CO₂` escaped unweighed (`just like Think Q1 burning 10 g open-beaker ethanol completely into invisible CO₂ + H₂O vapour`!).\n  2) **Setup 2 (`Balloon Tied Tightly Over Flask Mouth`, Fig 9.3)**: Gas inflates the balloon **inside a closed system** -> digital balance stays **IDENTICAL** (`also zero error from powder sticking inside balloon, kept on pan!`).\n• **Activity 9.3 (`Open Beaker Still Works When NO Gas Forms`, Fig 9.4)**: Mixing 10 mL of `1% m/v` **Sodium Sulphate (`Na₂SO₄`)** + `1% m/v` **Barium Chloride (`BaCl₂`)** instantly gives a heavy **white precipitate of Barium Sulphate (`BaSO₄↓`) + `NaCl(aq)`** -> no gas escapes, so both flasks weighed together show **ZERO mass change (`Note ±1 last-digit balance uncertainty`)**!\n• **NCERT Example 9.1**: `4.0 g CaCO₃ + 2.92 g HCl = 6.92 g Reactants` -> `1.76 g CO₂ + 0.72 g H₂O + 4.44 g CaCl₂ = 6.92 g Products` (`identical!`).',
            hi: 'हाइड्रोजन (`ज्वलनशील गैस`) और ऑक्सीजन (`दहन सहायक`) मिलकर पानी (`अग्निशामक द्रव!`) कैसे बनाती हैं? **क्रियाकलाप 9.1** (`50 mL जल में नमक घोलना या कागज काटना` — भौतिक परिवर्तन में द्रव्यमान स्थिर) से आगे बढ़कर रासायनिक नियम समझें:\n• **==द्रव्यमान संरक्षण का नियम (`आन्त्वॉ लवाइजिए, 1789` — आधुनिक रसायन के जनक)==**: **किसी भी रासायनिक अभिक्रिया में द्रव्य का न तो सृजन किया जा सकता है और न ही विनाश** — अभिकारकों का कुल द्रव्यमान सदैव उत्पादों के कुल द्रव्यमान के बराबर होता है!\n• **क्रियाकलाप 9.2 के दो प्रयोगात्मक सेटअप (`20 mL सिरका + 2 g बेकिंग सोडा NaHCO₃`)**:\n  1) **प्रायोगिक व्यवस्था 1 (`खुला फ्लास्क`, चित्र 9.2)**: गुब्बारे से सोडा गिराकर खाली गुब्बारा पास रखने पर तीव्र बुदबुदाहट (**`CO₂ गैस हवा में मुक्त`**) से **अंतिम भार कम आता है**! *(रेलवे PYQ `Group D 16`: क्या नियम टूटा? **नहीं!** केवल `CO₂` गैस उड़कर तराजू से बाहर गई — जैसे प्रश्न 1 में खुले बीकर में 10 g एथेनॉल जलने पर धुआँ/वाष्प बन उड़ जाना!)*\n  2) **प्रायोगिक व्यवस्था 2 (`मुख पर बंधा गुब्बारा`, चित्र 9.3)**: उत्पन्न `CO₂` गुब्बारे को फुलाकर **संवृत (बंद) निकाय** में रहती है → **आरंभिक और अंतिम तुला पाठ्यांक ठीक समान रहते हैं!**\n• **क्रियाकलाप 9.3 (`सोडियम सल्फेट + बेरियम क्लोराइड`, चित्र 9.4)**: `1% m/v Na₂SO₄ + BaCl₂` मिलाने पर तुरंत **बेरियम सल्फेट (`BaSO₄`) का श्वेत अवक्षेप** बनता है (`कोई गैस नहीं निकलती, अतः खुले फ्लास्क में भी भार अपरिवर्तित!`)।\n• **उदाहरण 9.1 सत्यापन**: `4.0 g CaCO₃ + 2.92 g HCl (6.92 g)` ⇒ `1.76 g CO₂ + 0.72 g जल + 4.44 g CaCl₂ (6.92 g)` — दोनों पक्ष पूर्ण बराबर!',
          },
          realImage: {
            url: '/ncert-notes/class9-chem-ch9/real/antoine_lavoisier.webp',
            secondaryUrl: '/ncert-notes/class9-chem-ch9/real/analytical_balance.webp',
            title: { en: 'Antoine Lavoisier (`Father of Modern Chemistry, 1789`) & Precision Digital Analytical Balance (`Act 9.1–9.3`)', hi: 'आन्त्वॉ लवाइजिए (`आधुनिक रसायन के जनक, 1789`) एवं यथार्थ अंकीय तुला (`क्रियाकलाप 9.1–9.3`)' },
            caption: {
              en: 'Left: Lavoisier proved in 1789 that exact total mass remains invariant before and after chemical operations. Right: Precision balance (`±1 last-digit note in NCERT p.163`) verifies closed-vessel mass conservation.',
              hi: 'बायाँ: लवाइजिए जिन्होंने 1789 में द्रव्यमान संरक्षण प्रतिपादित किया। दायाँ: `Tare/Zero` बटन वाली प्रयोगशाला अंकीय तुला जिससे क्र. 9.2–9.3 के सूक्ष्म द्रव्यमान तोले गए।',
            },
          },
          inlinePyqIds: ['pyq-c9c9-2', 'pyq-c9c9-3', 'pyq-c9c9-4', 'pyq-c9c9-5', 'pyq-c9c9-6', 'pyq-c9c9-7'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Law of Constant Proportions (`Joseph Proust`), Hingula/Cinnabar (`Fig 9.5`) & Dalton’s Atomic Theory (`1808`)',
            hi: '2. स्थिर अनुपात का नियम (`जोसेफ लुई प्राउस्ट`), हिंगुला/सिनेबार (`चित्र 9.5`) तथा डाल्टन का परमाणु सिद्धांत (`1808`)',
          },
          conceptStory: {
            en: 'After mass conservation came a deeper question: *Why can’t water form by mixing random amounts of Hydrogen and Oxygen?*\n• **==Law of Constant / Definite Proportions (`Joseph Louis Proust`)==**: **In a chemical compound, constituent elements are ALWAYS combined in the same fixed proportion by mass**, regardless of source or preparation method (`Copper Carbonate tests`)!\n  - **Verified Ratios (`NCERT p.167`)**: Pure **Water (`H₂O`)** from river, borewell, or ocean ALWAYS decomposes in **`H : O = 1 : 8` mass ratio** (`9 g water -> 1 g H + 8 g O`; `Think Q2`: `20 g H₂ + 160 g O₂ -> 180 g H₂O`). **Carbon Dioxide (`CO₂`)** = `12 : 32 =` **`3 : 8`** (`Ex 9.2`: `2.4 g C` yields `8.8 g CO₂`). **Carbon Monoxide (`CO`)** = **`3 : 4`** (`Think Q4`: `9 g C` needs `12 g O`). **Ammonia (`NH₃`)** = **`14 : 3`**. **NaCl** = **`23 : 35.5`** (`Ex 9.3`: `46 g Na` reacts with `71 g Cl`).\n  - **Cultural Box — Hingula / Cinnabar (`Fig 9.5`, Mercury Sulfide)**: Ancient Indian alchemists (`Hingula`) & Latin cultures (`Cinnabar`) found this red pigment mineral ALWAYS breaks into **`86.22% Mercury` + `13.78% Sulfur`** by mass! *Warning*: True for **pure compounds ONLY, NEVER mixtures (`Think Q5`)**!\n• **==John Dalton’s Atomic Theory (`1808, Manchester`)==**: Built logically to explain BOTH laws via **5 Core Postulates (`p.168`)**:\n  1) All matter consists of tiny **indivisible particles called atoms (`participate in reactions`)**.\n  2) Atoms **cannot be created or destroyed** in chemical reactions (**Explains Conservation Law!** — `NTPC UG 2025 Shift 12`).\n  3) All atoms of a **given element** share identical mass & chemical properties; atoms of **different elements** differ in mass & properties (`Group D Shift 46`).\n  4) Atoms combine in **simple whole-number ratios** (**Explains Constant Proportions!** — `NTPC UG 2025 Shift 38`).\n  5) Relative number & kinds of atoms in a given compound stay constant.',
            hi: 'स्थिर अनुपात के नियम ने रासायनिक यौगिकों की बुनियाद रखी:\n• **==स्थिर / निश्चित अनुपात का नियम (`जोसेफ लुई प्राउस्ट — फ्रांसीसी रसायनज्ञ`)==**: **किसी भी शुद्ध रासायनिक यौगिक में तत्व सदैव द्रव्यमान के एक निश्चित अनुपात में संयोजित रहते हैं, चाहे यौगिक कहीं से या किसी भी विधि से प्राप्त हुआ हो (`कॉपर कार्बोनेट शोध`)!**\n  - **मुख्य परीक्षा अनुपात**: शुद्ध **जल (`H₂O`)** चाहे नदी, समुद्र या बोरवेल का हो, **`H : O = 1 : 8`** (`9 g जल में 1 g H + 8 g O`; प्रश्न 2 में `20 g H + 160 g O = 180 g जल`)! **CO₂** में `C : O = 12:32 =` **`3 : 8`** (`उदा. 9.2: 2.4 g C → 8.8 g CO₂`)। **CO** में **`3 : 4`** (`प्रश्न 4: 9 g C + 12 g O`)। **NH₃** में **`14 : 3`**। **NaCl** में **`23 : 35.5`** (`उदा. 9.3: 46 g Na हेतु 71 g Cl`)।\n  - **जिज्ञासा-सूत्र (`हिंगुला / सिनेबार`, चित्र 9.5)**: प्राचीन भारत में लाल रंग के रूप में प्रयुक्त **हिंगुला (`सिनेबार`)** को गर्म करने पर सदैव **`86.22% मर्करी` तथा `13.78% सल्फर`** प्राप्त होते हैं (`दोनों विषैले`)! *(याद रखें `प्रश्न 5`: यह नियम केवल यौगिकों पर लागू होता है, मिश्रणों पर नहीं!)*\n• **==जॉन डाल्टन का परमाणु सिद्धांत (`1808`, पृ. 168)==**: मेनचेस्टर के शिक्षक **डाल्टन (`1808` — NTPC Shift 57)** ने 5 अभिगृहीत (`Postulates`) दिए:\n  1) संपूर्ण द्रव्य अति सूक्ष्म कणों **परमाणुओं (`अविभाज्य`)** से बना है जो अभिक्रिया में भाग लेते हैं।\n  2) रासायनिक अभिक्रिया में परमाणु **न तो उत्पन्न होते हैं न ही नष्ट** (**द्रव्यमान संरक्षण की व्याख्या!** — `NTPC Shift 12`)।\n  3) एक ही तत्व के सभी परमाणुओं के द्रव्यमान व गुणधर्म समान, तथा **विभिन्न तत्वों के परमाणुओं के द्रव्यमान व गुणधर्म भिन्न** (`Group D Shift 46`)।\n  4) परमाणु **सरल पूर्णांकों के अनुपात** में जुड़कर यौगिक बनाते हैं (**निश्चित अनुपात की व्याख्या!** — `NTPC Shift 38`)।\n  5) किसी यौगिक में परमाणुओं की सापेक्ष संख्या व प्रकार सदैव निश्चित होते हैं।',
          },
          realImage: {
            url: '/ncert-notes/class9-chem-ch9/real/cinnabar.webp',
            secondaryUrl: '/ncert-notes/class9-chem-ch9/real/john_dalton.webp',
            title: { en: 'Cinnabar / Hingula (`HgS — 86.22% Hg : 13.78% S`, Fig 9.5) & John Dalton (`1808` Atomic Theory Pioneer)', hi: 'सिनेबार / हिंगुला खनिज (`HgS: 86.22% पारा, 13.78% गंधक`) तथा जॉन डाल्टन (`1808 परमाणु सिद्धांत`)' },
            caption: {
              en: 'Left (`Fig 9.5`): Natural crimson Cinnabar (`HgS`) pigment ALWAYS keeps 86.22% Hg : 13.78% S fixed proportion. Right: John Dalton whose 1808 atomic theory unified both combination laws.',
              hi: 'बायाँ (`चित्र 9.5`): प्राकृतिक लाल सिनेबार (`हिंगुला`) जिसमें मर्करी और सल्फर का द्रव्यमान अनुपात सदैव स्थिर रहता है। दायाँ: जॉन डाल्टन (`1808`)।',
            },
          },
          inlinePyqIds: ['pyq-c9c9-8', 'pyq-c9c9-9', 'pyq-c9c9-10', 'pyq-c9c9-11', 'pyq-c9c9-12', 'pyq-c9c9-13'],
        },
      ],
    },
    {
      id: 'bonding-covalent-ionic-nomenclature',
      number: '9.4–9.5',
      svgLab: 'chem-formula-valency-lab',
      diagramKey: 'c9-ch9-covalent-ionic-lattice-diagram',
      title: {
        en: 'Covalent Sharing, Ionic Transfer (`Na⁺Cl⁻` Lattice), Ion Tables & Criss-Cross Chemical Formula Writing (`9.4–9.5`)',
        hi: 'सहसंयोजी बनाम आयनिक आबंध (`3-D क्रिस्टल जालक`), आयन सारणी 9.1 एवं तिर्यक (`Criss-Cross`) रासायनिक सूत्र लेखन (`9.4–9.5`)',
      },
      summaryTag: {
        en: 'NCERT Pages 169–177 • Octet Rule, Raja Ramanna Nuclear Box, Covalent Prefixes, Monatomic/Polyatomic Ions & Bracket Parentheses',
        hi: 'NCERT पृ. 169–177 • अष्टक/द्विक नियम, राजा रमन्ना नाभिकीय ऊर्जा बॉक्स, IUPAC उपसर्ग, एकल/द्वि आबंध एवं कोष्ठक सूत्र नियम',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Octet Stability, Covalent Molecules (`H₂, Cl₂, O₂, HCl, H₂O`), Raja Ramanna Box & IUPAC Naming Prefixes (`9.4.1`)',
            hi: '1. अष्टक व द्विक स्थायित्व, सहसंयोजी आबंध (`H₂, O₂, H₂O`), राजा रमन्ना बॉक्स व सहसंयोजी नामकरण उपसर्ग (`9.4.1`)',
          },
          conceptStory: {
            en: 'A **Molecule (`अणु`)** is an **electrically neutral group** of `>= 1` atom capable of **independent existence** showing all chemical properties of that substance (`Noble gases like Helium/Neon Z=10 stay stable as single atoms because shells are ALREADY complete!`, `Think Q11`). Other atoms reach **lower total energy & Octet stability (`8 e⁻`, or `2 e⁻` in K-shell)** via a **Chemical Bond (`रासायनिक आबंध`)** in **TWO ways**:\n• **1) Covalent Bond (`इलेक्ट्रॉनों की साझेदारी`, Sec 9.4.1 — Non-metals share valence e⁻)**:\n  - **Element Molecules**: `H (1)` shares 1 pair -> **`H–H` Single Bond (`H₂`)** (`Fig 9.6`); `Cl (2,8,7)` shares 1 pair -> **`Cl–Cl` (`Cl₂`)** (`Fig 9.7`); **`F₂`** (`Think Q9`) shares 1 pair; **Oxygen (`2,6`)** needs 2 e⁻ so shares **TWO pairs** -> **`O=O` Double Bond (`O₂`, Fig 9.8)**; **Nitrogen (`2,5`)** shares **THREE pairs** -> **`N≡N` Triple Bond (`Think Q8`)**!\n  - **Compound Molecules**: `HCl` (`H–Cl` single bond, `Fig 9.9`), `H₂O` (`Oxygen shares 1 e⁻ with each of two H`, `Fig 9.10`), `H₂S`, `NH₃`, `CO₂` (`O=C=O` double bonds, `Think Q10`).\n  - **Science & Society (`Raja Ramanna p.171`)**: When atomic nuclei split/fuse (`Nuclear Energy`), tremendous energy releases to generate clean electricity & aid medicine/space — **Dr. Raja Ramanna** pioneered India’s peaceful nuclear energy programme!\n• **2) IUPAC Prefixes for Binary Covalent Compounds (`p.171–172`)**: Name first element normally, end second element in **`-ide`** using Greek count prefixes (**`mono-1, di-2, tri-3, tetra-4, penta-5, hexa-6`**):\n  - Omit `mono-` on FIRST element (`CO₂ = Carbon dioxide`, NOT monocarbon dioxide). Drop ending `a` or `o` before vowel oxygen (`CO = carbon monoxide`, NOT monooxide; **`N₂O₄ = dinitrogen tetroxide`**; **`N₂O₅ = dinitrogen pentoxide`**). Keep ending `i` (`di-oxide, tri-oxide`).\n  - **Hydrogen-First Exception**: Never add prefixes before Hydrogen (**`H₂S = Hydrogen sulfide`**, NOT dihydrogen sulfide)! Common names: `H₂O` (`Water`), `NH₃` (`Ammonia` / Nitrogen trihydride). Others: `CS₂` (`Carbon disulphide`), `PCl₃` (`Phosphorus trichloride`), `SF₆` (`Sulphur hexafluoride`).',
            hi: '**अणु (`Molecule`)** एक वैद्युत-उदासीन कण है जो स्वतंत्र अस्तित्व में रह सकता है व पदार्थ के सभी गुणधर्म दर्शाता है (`हीलियम/निऑन Z=10 पहले से पूर्ण अष्टक होने से एकपरमाणुक स्वतंत्र रहते हैं` — `प्रश्न 11`)। **बाह्यतम कोश में 8 इलेक्ट्रॉन (`अष्टक`) या K-कोश में 2 इलेक्ट्रॉन (`द्विक`)** पूर्ण करने व निकाय की ऊर्जा कम करने हेतु **रासायनिक आबंध (`Chemical Bond`)** दो प्रकार से बनता है:\n• **1) सहसंयोजी आबंध (`इलेक्ट्रॉनों की साझेदारी`, भाग 9.4.1)**:\n  - **तत्व अणु**: हाइड्रोजन (`K=1`) 1-1 `e⁻` साझा कर **`H–H` एकल आबंध (`H₂`)** (`चित्र 9.6`); क्लोरीन (`7 संयोजकता e⁻`) **`Cl–Cl` (`Cl₂`)** (`चित्र 9.7`); ऑक्सीजन (`6 e⁻`) **दो युग्म** साझा कर **`O=O` द्वि-आबंध (`O₂`, चित्र 9.8)**; नाइट्रोजन (`5 e⁻`) **तीन युग्म** साझा कर **`N≡N` त्रि-आबंध (`प्रश्न 8`)** बनाती है!\n  - **यौगिक अणु**: `HCl` (`चित्र 9.9`), `H₂O` (`जल चित्र 9.10`), `H₂S`, `NH₃`, `CO₂` (`O=C=O`, `प्रश्न 10`)।\n  - **भारतीय वैज्ञानिक सम्मान (`राजा रमन्ना`, पृ. 171)**: परमाणु नाभिकों के विखंडन/संलयन से अपार **नाभिकीय ऊर्जा** निकलती है — भारत में इसके शांतिपूर्ण उपयोग व ऊर्जा कार्यक्रम के विकास में **डॉ. राजा रमन्ना** का अग्रणी योगदान रहा!\n• **2) सहसंयोजी नामकरण नियम (`पृ. 171–172`)**: प्रथम तत्व का सामान्य नाम, दूसरे के अंत में **`-आइड (-ide)`** और संख्या हेतु उपसर्ग (**`मोनो-1, डाइ-2, ट्राइ-3, टेट्रा-4, पेंटा-5, हेक्सा-6`**) लगाएँ:\n  - पहले तत्व पर `mono-` नहीं लगाते (`CO = कार्बन मोनोक्साइड`, न कि `monooxide` — `o/a` स्वर हटते हैं जैसे `N₂O₄ टेट्रॉक्साइड`, `N₂O₅ पेंटॉक्साइड`, जबकि `i` नहीं हटता जैसे `डाइऑक्साइड`)।\n  - **हाइड्रोजन अपवाद**: यदि पहला तत्व `H` हो तो कभी उपसर्ग नहीं जुड़ता (`H₂S = हाइड्रोजन सल्फाइड`)! प्रचलित नाम: `H₂O` (`जल`), `NH₃` (`अमोनिया`), `CS₂` (`कार्बन डाइसल्फाइड`), `PCl₃`, `SF₆`।',
          },
          inlinePyqIds: ['pyq-c9c9-1', 'pyq-c9c9-14', 'pyq-c9c9-15'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Ionic Bonding, 3D Crystal Lattice (`NaCl 1:6`), Polyatomic Ions (`Table 9.1`) & Criss-Cross Formula Rules (`9.4.2–9.5`)',
            hi: '2. आयनिक आबंध (`Na⁺ Cl⁻` व 3-D जालक), बहुपरमाणुक आयन (`तालिका 9.1`) एवं तिर्यक रासायनिक सूत्र विधि (`9.4.2–9.5`)',
          },
          conceptStory: {
            en: 'When metals (`< 4 valence e⁻`, e.g., `Na: 2,8,1`) meet non-metals (`> 4 valence e⁻`, e.g., `Cl: 2,8,7`), **electrons transfer completely (`Sec 9.4.2`)**!\n• **Cations (`+`) & Anions (`−`)**:\n  - `Na` loses 1 valence `e⁻` (`11 p⁺ vs 10 e⁻`) → **Sodium Cation (`Na⁺`, stable `2,8`)** (`Fig 9.11`). Metals generally form **Cations**!\n  - `Cl` gains 1 `e⁻` (`17 p⁺ vs 18 e⁻`) → **Chloride Anion (`Cl⁻`, stable `2,8,8`)** (`Fig 9.12`). Sulphur (`2,8,6`) gains `2 e⁻` → **`S²⁻`** (`Oxygen -> O²⁻` `Think Q12`).\n  - **==Electrostatic Attraction & 3D Lattice (`Fig 9.13–9.14`)==**: Ionic compounds **NEVER exist as isolated single molecules** (`p.173 Curiosity Box`)! Inside solid **NaCl**, EVERY `Na⁺` is surrounded by **`6 Cl⁻` ions** and EVERY `Cl⁻` by **`6 Na⁺` ions** in a repeating **3-D crystal lattice**!\n• **Simple & Polyatomic Ions (`Table 9.1a,b`)**: **Cation goes FIRST, Anion SECOND** (`simple anions end in -ide`; **Polyatomic ions** = covalently bonded charged cluster behaving as ONE ion unit without `-ide`, e.g. `OH⁻` [exception `-ide`!], `NO₃⁻`, `HCO₃⁻`, `CO₃²⁻`, `SO₄²⁻`, `PO₄³⁻`, **`NH₄⁺`** [positive polyatomic!]). Watch variable-valency metals: **Ferrous `Fe²⁺` vs Ferric `Fe³⁺`**; **Cuprous `Cu⁺` vs Cupric `Cu²⁺`**!\n• **==Four Golden Rules of Criss-Cross Formula Writing (`Sec 9.5` — Use Lab Tab 1 Above!)==**:\n  1) Write symbols (`Cation first, Anion second`) and charges/valencies below them; NEVER show `+`/`−` charges in the final formula.\n  2) **Criss-Cross** magnitudes to subscripts (`Al³⁺` + `O²⁻` -> **`Al₂O₃`**; `Ca²⁺` + `Cl⁻` -> **`CaCl₂`**; `C⁴` + `Cl¹` -> **`CCl₄`**). Omit `1` (`HCl`, `NaCl`).\n  3) **Simplify Equal/Common Factors**: **`Mg²⁺` + `O²⁻` -> `Mg₂O₂` -> `MgO`**; **`Ca²⁺` + `CO₃²⁻` -> `Ca₂(CO₃)₂` -> `CaCO₃`**!\n  4) **Mandatory Bracket Rule (`()`)**: Use brackets whenever **`>= 2` polyatomic ions** are needed — **`Al(OH)₃`** (`NOT AlOH₃!`), **`Mg(OH)₂`**, **`Al₂(SO₄)₃`** (`2 Al, 3 S, 12 O` — `Group D Shift 15`), **`(NH₄)₂SO₄`**. If only `1` polyatomic ion is present (`NaNO₃, NaHCO₃`), NO brackets!',
            hi: 'जब धातु (`बाह्य कोश में <4 e⁻` जैसे `Na: 2,8,1`) की भेंट अधातु (`>4 e⁻` जैसे `Cl: 2,8,7`) से होती है, तब **इलेक्ट्रॉनों का पूर्ण स्थानांतरण** होता है (`भाग 9.4.2`):\n• **धनायन (`Cation +`) बनाम ऋणायन (`Anion −`)**:\n  - सोडियम (`11p⁺`) 1 इलेक्ट्रॉन त्यागकर (`10e⁻`) **सोडियम धनायन `Na⁺` (`2,8`)** बनता है (`चित्र 9.11`)। प्रायः **धातुएँ धनायन** बनाती हैं!\n  - क्लोरीन (`17p⁺`) 1 `e⁻` ग्रहण कर **क्लोराइड ऋणायन `Cl⁻` (`2,8,8`)** बनती है (`चित्र 9.12`); सल्फर 2 `e⁻` लेकर `S²⁻` व ऑक्सीजन `O²⁻` (`प्रश्न 12`) बनाती है।\n  - **==प्रबल स्थिर-विद्युत आकर्षण व 3-D क्रिस्टल जालक (`चित्र 9.13–9.14`)==**: आयनिक यौगिक एकल अणु नहीं बनाते! `NaCl` क्रिस्टल में **प्रत्येक `Na⁺` आयन 6 `Cl⁻` आयनों से** व प्रत्येक `Cl⁻` आयन 6 `Na⁺` से घिरा होकर नियमित **त्रिविमीय क्रिस्टल जालक (`Crystal Lattice`)** बनाता है (`Group D Shift 23`)।\n• **एकपरमाणुक एवं बहुपरमाणुक आयन (`तालिका 9.1`)**: पहले **धनायन** फिर **ऋणायन (`-आइड`)**; **बहुपरमाणुक आयन** जैसे `NH₄⁺`, `OH⁻` (`हाइड्रॉक्साइड`), `NO₃⁻` (`नाइट्रेट`), `HCO₃⁻`, `CO₃²⁻` (`कार्बोनेट`), `SO₄²⁻` (`सल्फेट`), `PO₄³⁻` एक इकाई जैसे व्यवहार करते हैं। परिवर्ती संयोजकता: **फेरस (`Fe²⁺`) vs फेरिक (`Fe³⁺`)**; **क्यूप्रस (`Cu⁺`) vs क्यूप्रिक (`Cu²⁺`)**!\n• **==तिर्यक सूत्र (`Criss-Cross`) के 4 अचूक नियम (`भाग 9.5` — ऊपर लैब टैब 1 में लाइव बनाएं!)==**:\n  1) पहले धनायन फिर ऋणायन लिख नीचे आवेश अंक लिखें (अंतिम सूत्र में आवेश `+`/`−` नहीं लिखते)।\n  2) अंकों को तिर्यक (`Criss-Cross`) कर पादांक में लिखें (`1` न लिखें): `Ca²⁺`+`Cl⁻` → **`CaCl₂`**; `Al³⁺`+`O²⁻` → **`Al₂O₃`**; `C⁴`+`Cl¹` → **`CCl₄`**।\n  3) **समान उभयनिष्ठ गुणनखंड काटें (`सरलतम अनुपात`)**: `Mg²⁺`+`O²⁻` (`Mg₂O₂`) → **`MgO`**; `Ca²⁺`+`CO₃²⁻` → **`CaCO₃`**।\n  4) **कोष्ठक नियम (`()`)**: यदि बहुपरमाणुक आयन की संख्या `2` या अधिक हो तो कोष्ठक अनिवार्य है — **`Al(OH)₃`** (`AlOH₃ गलत!`), **`Mg(OH)₂`**, **`Al₂(SO₄)₃`**, **`(NH₄)₂SO₄`**! (`1` आयन पर कोष्ठक नहीं जैसे `NaHCO₃` या `LiNO₃`)।',
          },
          realImage: {
            url: '/ncert-notes/class9-chem-ch9/real/sodium_chloride.webp',
            secondaryUrl: '/ncert-notes/class9-chem-ch9/real/ammonium_nitrate.webp',
            title: { en: 'Cubic Halite NaCl Lattice (`1 Na⁺ : 6 Cl⁻`, Fig 9.14) & Polyatomic Ammonium Nitrate Crystal (`NH₄⁺ NO₃⁻`, Ex Q8i)', hi: 'घनीय सोडियम क्लोराइड क्रिस्टल (`1 Na⁺ : 6 Cl⁻`, चित्र 9.14) व बहुपरमाणुक अमोनियम नाइट्रेट (`NH₄NO₃`) क्रिस्टल' },
            caption: {
              en: 'Left: Cubic cleavage of rock salt (`NaCl`) directly reflects its rigid 3-D ionic crystal lattice (`Fig 9.14`). Right: Alternating tetrahedral NH₄⁺ cations and planar NO₃⁻ anions packing an ionic fertilizer crystal (`NH₄NO₃ = 80 u`).',
              hi: 'बायाँ: घनीय सेंधा नमक (`NaCl`) क्रिस्टल जो प्रबल आयनिक जालक दर्शाता है। दायाँ: उर्वरक `NH₄NO₃` में बहुपरमाणुक `NH₄⁺` व `NO₃⁻` आयनों की त्रिविमीय व्यवस्था।',
            },
          },
          inlinePyqIds: ['pyq-c9c9-16', 'pyq-c9c9-17', 'pyq-c9c9-18', 'pyq-c9c9-19', 'pyq-c9c9-20'],
        },
      ],
    },
    {
      id: 'properties-conductivity-molecular-formula-mass',
      number: '9.6–9.8',
      diagramKey: 'c9-ch9-crisscross-mass-diagram',
      title: {
        en: 'Properties of Ionic vs Covalent Compounds (`Act 9.4 Conductivity/Solubility`), Molecular Mass & Formula Unit Mass (`u`)',
        hi: 'आयनिक बनाम सहसंयोजी यौगिकों के गुण (`विलेयता, गलनांक व विद्युत चालकता`), आण्विक द्रव्यमान एवं सूत्र इकाई द्रव्यमान (`u`)',
      },
      summaryTag: {
        en: 'NCERT Pages 177–180 • Activity 9.4 9V Bulb Test, Sugar/Camphor vs NaCl/CuSO₄, Ex 9.4–9.7, Think Q19–Q24 & Ex Q8/Q14',
        hi: 'NCERT पृ. 177–180 • क्र. 9.4 चालकता जाँच, चीनी/कर्पूर vs NaCl/CuSO₄, उदा. 9.4–9.7 (62u, 164u) एवं अभ्यास प्रश्न 8, 14',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Solubility, High vs Low Melting Point & Why Ionic Solutions Conduct While Solid Salts & Dissolved Sugar Don’t (`Act 9.4`)',
            hi: '1. विलेयता, गलनांक व विद्युत चालकता रहस्य (`क्र. 9.4`): ठोस NaCl व चीनी विलयन क्यों कुचालक, जबकि जलीय/गलित NaCl सुचालक?',
          },
          conceptStory: {
            en: 'Run **Activity 9.4 (`Table 9.2`, 9V Battery + Bulb Fig 9.15)** on five everyday samples — **`Camphor`, `Naphthalene`, `Sugar` (`Covalent`) vs `NaCl`, `CuSO₄` (`Ionic`, Fig 9.16–9.17)**:\n1) **Solubility (`like dissolves like`)**: **Ionic compounds (`NaCl, CuSO₄`)** dissolve readily in **water** (`insoluble in kerosene & petrol`); **Covalent camphor & naphthalene** do NOT dissolve in water yet **dissolve in kerosene & petrol**! *(Sugar dissolves in water too — special covalent exception — YET still fails to conduct!)*\n2) **==Why Does Bulb Glow ONLY in Aqueous / Molten Ionic Liquids? (`p.178–179 & Ex Q14`)==**: Electric conduction needs **MOBILE charged particles (`free ions`)**!\n  - In **Solid Ionic Crystals (`NaCl, CuSO₄`)**: Ions exist, YET **strong electrostatic lattice forces lock them rigidly in place** -> **Bulb OFF (`NON-CONDUCTOR`)**!\n  - Dissolve in **Water** or **Melt at High Temp (`गलित अवस्था`)**: Lattice breaks, freeing `Na⁺` & `Cl⁻` (`or Cu²⁺ & SO₄²⁻`) to migrate toward electrodes -> **==Bulb GLOWS BRIGHTLY (`Conductor`)==**!\n  - **Covalent Sugar Solution**: Dissolves cleanly as **neutral molecules (`ZERO ions!`)**, so **Bulb stays OFF** (`Camphor/Naphthalene also zero ions`)!\n3) **Melting & Boiling Points (`p.179`, `Group D Shift 45`)**: Strong inter-ionic forces give **Ionic compounds HIGH melting/boiling points**; weak inter-molecular attractions give **Covalent compounds LOW melting/boiling points**.',
            hi: '**क्रियाकलाप 9.4 (`तालिका 9.2`, 9V बैटरी व बल्ब चित्र 9.15)** पाँच नमूनों — **कर्पूर, नैफ्थलीन, चीनी (`सहसंयोजी`) बनाम सोडियम क्लोराइड, कॉपर सल्फेट (`आयनिक`)** पर करें:\n1) **विलेयता नियम**: **आयनिक यौगिक (`NaCl, CuSO₄`)** प्रायः **जल में विलेय** परंतु किरोसिन व पेट्रोल में अघुलनशील होते हैं। इसके विपरीत **कर्पूर व नैफ्थलीन** जल में अघुलनशील पर **किरोसिन और पेट्रोल में घुलनशील** हैं! *(चीनी अपवादस्वरूप जल में घुलती है, फिर भी बल्ब नहीं जलाती!)*\n2) **==विद्युत चालकता का सबसे बड़ा CBT प्रश्न (`पृ. 178–179 व अभ्यास Q14`)==**: विद्युत प्रवाह के लिए **मुक्त रूप से गतिशील आयन** अनिवार्य हैं!\n  - **ठोस आयनिक यौगिक (`ठोस NaCl / CuSO₄`)**: इनमें आयन तो होते हैं परंतु प्रबल जालक आकर्षण उन्हें **नियत स्थान पर बाँधे रखता है** → **बल्ब नहीं जलता (`ठोस अवस्था में कुचालक!`)**।\n  - **जल में घोलने या पिघलाने (`गलित अवस्था`) पर**: आयन जालक से टूटकर **गति हेतु स्वतंत्र** हो जाते हैं → **==बल्ब तेज चमकता है (`सुचालक!`)==**।\n  - **चीनी का जलीय विलयन**: चीनी जल में घुलकर भी **आयन नहीं बनाती** (उदासीन अणु) → **बल्ब नहीं जलता (`कुचालक`)**!\n3) **गलनांक एवं क्वथनांक (`Group D Shift 45`)**: प्रबल अंतर-आयनिक आकर्षण के कारण **आयनिक यौगिकों के गलनांक व क्वथनांक उच्च** होते हैं, जबकि सहसंयोजी यौगिकों के **निम्न** होते हैं।',
          },
          inlinePyqIds: ['pyq-c9c9-20'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Calculating Molecular Mass & Formula Unit Mass in Unified Atomic Mass Units `u` (`Sec 9.7–9.8`, Ex 9.4–9.7)',
            hi: '2. आण्विक द्रव्यमान (`Molecular Mass`) बनाम सूत्र इकाई द्रव्यमान (`Formula Unit Mass`) की गणना (`भाग 9.7–9.8`)',
          },
          conceptStory: {
            en: 'Why two names for essentially the exact same arithmetic sum? **NCERT `Sec 9.7–9.8`** makes this distinction crystal-clear (`p.179`):\n• **Molecular Mass (`आण्विक द्रव्यमान`) — For Discrete Covalent Molecules**: Sum atomic masses (`u`) of every atom in one molecule.\n  - **NCERT Example 9.4 — Water (`H₂O`)**: `(1×2) + (16×1)` = **`18 u`**.\n  - **NCERT Example 9.5 — Carbon Dioxide (`CO₂`)**: `(12×1) + (16×2)` = **`44 u`** (`Group D Shifts 3, 29`).\n  - **Think Q21 — Nitric Acid (`HNO₃`)**: `1 + 14 + (16×3) = 15 + 48` = **`63 u`** (`ihsc1an ✓`).\n  - **Think Q22 — Methane (`CH₄`)**: `12 + (1×4)` = **`16 u`**; **Ammonia (`NH₃`)**: `14 + 3` = **`17 u`**; **Phosphoric Acid (`H₃PO₄`, Ex Q8ii)**: `3 + 31 + 64` = **`98 u`**!\n• **Formula Unit Mass (`सूत्र इकाई द्रव्यमान`) — For 3-D Ionic Crystals**: Because `NaCl`, `Na₂O`, `Ca(NO₃)₂` form continuous 3-D lattices (`no discrete molecules`), we sum atomic masses of the **simplest whole-number Formula Unit (`Group D Shift 44`)**!\n  - **Ex 9.6 — `Na₂O`**: `(23×2) + 16 = 46 + 16` = **`62 u`** (`ZnO = 65 + 16 = 81 u`, `Group D Shift 1`).\n  - **Ex 9.7 — `Ca(NO₃)₂`**: `40 + [14 + (16×3)] × 2 = 40 + 62 × 2 = 40 + 124` = **`164 u`**! *(Multiply bracket contents cleanly before adding!)*\n  - **Think Q23 (`KCl`)**: `39 + 35.5` = **`74.5 u`** | **Think Q24 (`Mg(OH)₂`)**: `24 + 2 × (16 + 1)` = **`58 u`**!\n  - **Ex Q8**: **`NH₄NO₃` = `14+4+14+48 = 80 u`** | **`NaHCO₃` = `23+1+12+48 = 84 u`** | **`CaCl₂` = `40+71 = 111 u`** | **`(NH₄)₂SO₄` = `2(18)+32+64 = 132 u`** (`Group D Shifts 22, 37`)!',
            hi: 'दोनों में जोड़ने की गणित समान है, पर शब्द भेद NCERT में अत्यंत महत्वपूर्ण है (`पृ. 179–180`):\n• **आण्विक द्रव्यमान (`Molecular Mass` — सहसंयोजी अणुओं हेतु)**: एक अणु में उपस्थित सभी परमाणुओं के परमाणु द्रव्यमानों (`u`) का योग:\n  - **उदा. 9.4 जल (`H₂O`)**: `(1×2) + 16` = **`18 u`** | **उदा. 9.5 (`CO₂`)**: `12 + 32` = **`44 u`** (`Group D Shifts 3, 29`)।\n  - **सोचिए Q21 नाइट्रिक अम्ल (`HNO₃`)**: `1 + 14 + (16×3)` = **`63 u`** (`उत्तरमाला सत्यापित ✓`)।\n  - **सोचिए Q22 मेथेन (`CH₄`)**: `12 + 4` = **`16 u`** | **अमोनिया (`NH₃`)**: `14 + 3` = **`17 u`** (`Tech 3`) | **`H₃PO₄` (अभ्यास Q8ii)**: `3 + 31 + 64` = **`98 u`**!\n• **सूत्र इकाई द्रव्यमान (`Formula Unit Mass` — आयनिक यौगिकों हेतु)**: चूँकि आयनिक यौगिक स्वतंत्र अणु नहीं 3-D क्रिस्टल बनाते हैं (`चित्र 9.14`), अतः उनके सरलतम आयनिक अनुपात (`सूत्र इकाई`) के सभी परमाणुओं का योग लेते हैं (`Group D Shift 44`):\n  - **उदा. 9.6 (`Na₂O`)**: `(23×2) + 16` = **`62 u`** | **`ZnO`**: `65 + 16` = **`81 u`** (`Group D Shift 1`)।\n  - **उदा. 9.7 (`Ca(NO₃)₂`)**: `40 + [14 + (16×3)] × 2 = 40 + 124` = **`164 u`**! *(कोष्ठक के बाहर की संख्या से अंदर के हर परमाणु में गुणा करना न भूलें!)*\n  - **सोचिए Q23 (`KCl`)**: `39 + 35.5` = **`74.5 u`** | **Q24 (`Mg(OH)₂`)**: `24 + 2×(16+1)` = **`58 u`**!\n  - **अभ्यास Q8 व Group D**: **`NH₄NO₃ = 80 u`** | **`NaHCO₃ = 84 u`** | **`CaCl₂ = 111 u`** | **`(NH₄)₂SO₄ = 2×18 + 32 + 64 = 132 u`**!',
          },
          inlinePyqIds: ['pyq-c9c9-21', 'pyq-c9c9-22', 'pyq-c9c9-23', 'pyq-c9c9-24'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Open Flask CO₂ Loss (`Act 9.2 Setup 1`) vs True Mass Conservation (`Closed Vessel`)', hi: 'खुले फ्लास्क में भार घटना (`CO₂ पलायन`) बनाम वास्तविक द्रव्यमान संरक्षण नियम' },
      left: { en: 'Open Flask (`Vinegar + NaHCO₃` or burning Ethanol): Balance reading drops ONLY because invisible `CO₂ / H₂O` gas escapes!', hi: 'खुला फ्लास्क: उत्पन्न `CO₂` गैस हवा में उड़ने से तुला कम भार दिखाती है — द्रव्य नष्ट नहीं होता!' },
      right: { en: 'Sealed Balloon / Corked Vessel: Gas stays trapped inside -> Total mass BEFORE equals Total mass AFTER (`Lavoisier 1789`)!', hi: 'बंद गुब्बारा / कॉर्क फ्लास्क: गैस भीतर कैद रहती है → अभिक्रिया से पूर्व और बाद का कुल द्रव्यमान सदैव समान (`Group D 2, 26`)!' },
    },
    {
      pair: { en: 'Constant Proportions Law (`Compounds ONLY`) vs Mixtures (`Any Ratio`)', hi: 'स्थिर अनुपात नियम (`केवल शुद्ध यौगिक`) बनाम मिश्रण (`कोई भी अनुपात`)' },
      left: { en: 'COMPOUNDS (`H₂O 1:8`, `CO₂ 3:8`, `NH₃ 14:3`, `HgS 86.22:13.78`): Chemically bonded atoms ALWAYS fix the mass ratio!', hi: 'शुद्ध यौगिक (`H₂O, CO₂, NH₃`): रासायनिक आबंधन के कारण तत्व सदैव निश्चित द्रव्यमान अनुपात में (`स्रोत कुछ भी हो`)!' },
      right: { en: 'MIXTURES (`Think Q5` — salt + water or Fe + S): Stir 1 spoon or 5 spoons — ratio varies freely; Constant Law DOES NOT apply!', hi: 'मिश्रण (`नमक+पानी` या `चीनी+रेत`): कितनी भी मात्रा मिलाएँ, अनुपात निश्चित नहीं होता — स्थिर अनुपात नियम लागू नहीं (`सोचिए Q5`)!' },
    },
    {
      pair: { en: 'Solid Ionic `NaCl / CuSO₄` (`INSULATOR`) vs Aqueous / Molten Ionic vs Aqueous Sugar (`INSULATOR`)', hi: 'ठोस आयनिक लवण (`कुचालक`) बनाम गलित/जलीय आयनिक (`सुचालक`) बनाम चीनी विलयन (`कुचालक`)' },
      left: { en: 'Solid NaCl or Dissolved Sugar/Camphor: Solid keeps ions locked; Covalent sugar makes ZERO ions -> Bulb stays OFF!', hi: 'ठोस NaCl (`आयन बंधे`) एवं चीनी विलयन (`शून्य आयन` — केवल उदासीन अणु) दोनों में बल्ब नहीं जलता!' },
      right: { en: 'Aqueous or Molten Ionic (`NaCl/CuSO₄/MO`): Crystal lattice breaks freeing mobile cations + anions -> BULB GLOWS (`Ex Q14`)!', hi: 'गलित या जलीय NaCl/CuSO₄ में मुक्त धनायन व ऋणायन गतिशील होकर विद्युत प्रवाहित करते हैं (`अभ्यास Q14`)!' },
    },
    {
      pair: { en: 'Polyatomic Parentheses Trap: `Al(OH)₃` vs `AlOH₃` & `NH₄NO₃`', hi: 'बहुपरमाणुक कोष्ठक सावधानी: `Al(OH)₃` सही vs `AlOH₃` गलत!' },
      left: { en: 'WRONG `AlOH₃` means `1 Al, 1 O, 3 H` (`charge −1`, broken!). `Al(OH)₃` means **THREE `(OH)⁻` groups** balancing `Al³⁺`!', hi: 'गलत `AlOH₃` केवल `3 H` दर्शाता है; **`Al(OH)₃`** में पूरे **तीन हाइड्रॉक्साइड `OH⁻`** आयन `Al³⁺` से जुड़ते हैं (`पृ. 177 बॉक्स`)!' },
      right: { en: 'Single polyatomic ion (`cnt = 1`): NEVER wrap brackets — **`NaHCO₃`**, **`K₂CO₃`**, **`NH₄NO₃`** (`has 1 NH₄⁺ & 1 NO₃⁻`)!', hi: 'जब बहुपरमाणुक आयन की संख्या केवल **1** हो (`NaHCO₃, K₂CO₃, LiNO₃`), तब कोष्ठक नहीं लगाते!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Father of Modern Chemistry (`Law of Conservation 1789`)', hi: 'आधुनिक रसायन के जनक (`द्रव्यमान संरक्षण 1789`)' },
      name: { en: 'Antoine Lavoisier (`1743–1794`)', hi: 'आन्त्वॉ लवाइजिए (`Antoine Lavoisier`)' },
      country: { en: 'France (`NCERT Class 9 Ch 9 p.165`)', hi: 'फ्रांस (`NCERT कक्षा 9 पृ. 165`)' },
      fact: {
        en: 'Formulated the **Law of Conservation of Mass (`1789`)**: carefully weighing gases and reactants in closed operations proved *"an equal quantity of matter exists both before and after the operation"*!',
        hi: 'सन् **1789** में प्रत्येक रासायनिक संक्रिया से पूर्व व पश्चात द्रव्यमान की समानता सिद्ध कर **द्रव्यमान संरक्षण का नियम** प्रतिपादित किया!',
      },
    },
    {
      badge: { en: 'Law of Constant Proportions & Atomic Theory (`1799 / 1808`)', hi: 'निश्चित अनुपात व परमाणु सिद्धांत (`1799 / 1808`)' },
      name: { en: 'Joseph Proust & John Dalton (`1808`)', hi: 'जोसेफ प्राउस्ट एवं जॉन डाल्टन (`1808`)' },
      country: { en: 'France / England (`NCERT p.167–168`)', hi: 'फ्रांस / इंग्लैंड (`NCERT पृ. 167–168`)' },
      fact: {
        en: 'French chemist **Joseph Proust** showed Copper Carbonate & pure compounds keep fixed mass ratios regardless of source; English teacher **John Dalton (`1808`)** unified both laws in his landmark Atomic Theory (`NTPC UG Shift 57`)!',
        hi: 'फ्रांसीसी रसायनज्ञ **प्राउस्ट** ने स्थिर अनुपात का नियम दिया और मेनचेस्टर के शिक्षक **जॉन डाल्टन (`1808`)** ने अविभाज्य परमाणु सिद्धांत से दोनों नियमों की तर्कसंगत व्याख्या की!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-lavoisier',
      figRef: { en: 'NCERT Sec 9.1 (`Lavoisier Scientist Box p.165`)', hi: 'NCERT भाग 9.1 — वैज्ञानिक परिचय आन्त्वॉ लवाइजिए' },
      title: { en: 'Antoine Lavoisier — Father of Modern Chemistry & Mass Conservation (`1789`)', hi: 'आन्त्वॉ लवाइजिए — द्रव्यमान संरक्षण नियम (`1789`) के प्रतिपादक' },
      imageUrl: '/ncert-notes/class9-chem-ch9/real/antoine_lavoisier.webp',
      hotspots: [
        { en: 'Established quantitative closed-system weighing in chemistry (`Act 9.2–9.3`).', hi: 'रासायनिक अभिक्रियाओं में अभिकारक और उत्पाद द्रव्यमान की पूर्ण समतुल्यता सिद्ध की।' },
      ],
    },
    {
      id: 'vis-balance',
      figRef: { en: 'NCERT Activities 9.1–9.3 (`Fig 9.1–9.4`)', hi: 'NCERT क्रियाकलाप 9.1–9.3 — अंकीय तुला' },
      title: { en: 'Precision Laboratory Digital Balance Verifying Sealed Mass Invariance', hi: 'बंद निकाय में अभिक्रिया से पूर्व और बाद समान द्रव्यमान दर्शाती यथार्थ तुला' },
      imageUrl: '/ncert-notes/class9-chem-ch9/real/analytical_balance.webp',
      hotspots: [
        { en: 'Tare/Re-zero button eliminates flask mass; sealed balloon traps `CO₂` (`124.50 g = 124.50 g`).', hi: 'आधेय भार (`Tare`) बटन से फ्लास्क शून्य कर गुब्बारे बंद अभिक्रिया में सटीक द्रव्यमान संरक्षण परखते हैं।' },
      ],
    },
    {
      id: 'vis-cinnabar',
      figRef: { en: 'NCERT Fig 9.5 (`Curiosity Hingula Box p.167`)', hi: 'NCERT चित्र 9.5 — हिंगुला (सिनेबार) खनिज' },
      title: { en: 'Natural Red Cinnabar / Hingula (`HgS`): 86.22% Mercury : 13.78% Sulfur Fixed Ratio', hi: 'प्राचीन भारतीय लाल वर्णक सिनेबार (`हिंगुला HgS`) — निश्चित अनुपात का जीवंत उदाहरण' },
      imageUrl: '/ncert-notes/class9-chem-ch9/real/cinnabar.webp',
      hotspots: [
        { en: 'Ancient Indian & Latin civilizations saw Hingula ALWAYS decomposes to ~86.22% Hg & ~13.78% S.', hi: 'सिनेबार को गर्म करने पर सदैव 86.22% मर्करी व 13.78% सल्फर ही मिलते हैं (`जोसेफ प्राउस्ट नियम`)!' },
      ],
    },
    {
      id: 'vis-dalton',
      figRef: { en: 'NCERT Sec 9.3 (`Scientist Box p.168`)', hi: 'NCERT भाग 9.3 — जॉन डाल्टन (`1808`)' },
      title: { en: 'John Dalton (`1808` Atomic Theory Explaining Whole-Number Combinations)', hi: 'जॉन डाल्टन (`1808`) — परमाणु सिद्धांत व सरल पूर्णांक संयोग के प्रणेता' },
      imageUrl: '/ncert-notes/class9-chem-ch9/real/john_dalton.webp',
      hotspots: [
        { en: 'Taught in Manchester; published 1808 atomic postulates (`NTPC UG Shift 12, 38, 57 PYQs`).', hi: '1808 में प्रकाशित परमाणु सिद्धांत ने द्रव्यमान संरक्षण व निश्चित अनुपात दोनों को समझाया।' },
      ],
    },
    {
      id: 'vis-nacl-crystal',
      figRef: { en: 'NCERT Fig 9.14a & 9.16a (`NaCl Crystal Lattice`)', hi: 'NCERT चित्र 9.14 व 9.16 — सोडियम क्लोराइड क्रिस्टल' },
      title: { en: 'Cubic Halite (`NaCl`): 3-D Crystal Lattice (`Each Na⁺ Touches 6 Cl⁻`)', hi: 'त्रिविमीय आयनिक क्रिस्टल (`NaCl` में प्रत्येक Na⁺ 6 Cl⁻ से घिरा रहता है)' },
      imageUrl: '/ncert-notes/class9-chem-ch9/real/sodium_chloride.webp',
      hotspots: [
        { en: 'Solid at room temperature (`high MP/BP`), water-soluble & conducts when dissolved (`Group D Shifts 23, 45`).', hi: 'कक्ष ताप पर कठोर ठोस, उच्च गलनांक, ठोस में कुचालक पर जलीय/गलित अवस्था में विद्युत सुचालक!' },
      ],
    },
    {
      id: 'vis-nh4no3',
      figRef: { en: 'NCERT Table 9.1(b) & Ex Q8(i) (`NH₄NO₃ = 80 u`)', hi: 'NCERT तालिका 9.1 व अभ्यास Q8(i) — अमोनियम नाइट्रेट' },
      title: { en: 'Ammonium Nitrate (`NH₄NO₃`): Polyatomic Cation `NH₄⁺` & Anion `NO₃⁻` Fertilizer Crystal', hi: 'बहुपरमाणुक आयनों (`NH₄⁺` व `NO₃⁻`) से बना अमोनियम नाइट्रेट उर्वरक क्रिस्टल (`80 u`)' },
      imageUrl: '/ncert-notes/class9-chem-ch9/real/ammonium_nitrate.webp',
      hotspots: [
        { en: 'Formula unit mass = `14 + 4 + 14 + 48 = 80 u` (`Ex Q8(i)` verified in `ihsc1an`!).', hi: 'नाइट्रोजन उर्वरक `NH₄NO₃` का सूत्र इकाई द्रव्यमान = `80 u` (`अभ्यास Q8 i सत्यापित`)।' },
      ],
    },
  ],
  activities: [
    {
      num: '9.1',
      title: { en: 'Activity 9.1: Weighing Common Salt Dissolving in Water & Cut Paper (`Physical Mass Conservation`)', hi: 'क्रियाकलाप 9.1: जल में नमक घोलने व कागज काटने में कुल द्रव्यमान परीक्षण (`भौतिक परिवर्तन`)' },
      materials: { en: 'Digital balance (`tare`), 100 mL conical flask, 50 mL water, 1 spatula NaCl salt, paper & scissors', hi: 'अंकीय तुला (`Tare`), 100 mL शंक्वाकार फ्लास्क, 50 mL जल, नमक, कागज व कैंची' },
      steps: { en: 'Weigh empty flask + water -> add 1 tsp salt & weigh -> swirl until dissolved & reweigh! Also weigh whole sheet of paper vs cut strips together.', hi: '50 mL जल भरे फ्लास्क में नमक डाल हिलाकर घोलने से पहले व बाद में भार लिखें; इसी प्रकार पूरे कागज व कटे टुकड़ों का भार तुलना करें।' },
      examTakeaway: { en: 'Total mass remains **strictly UNCHANGED** across dissolving, cutting & state changes (**Physical Changes conserve total mass**!).', hi: 'घोलने व काटने जैसे **भौतिक परिवर्तनों में भी कुल द्रव्यमान बिल्कुल अपरिवर्तित रहता है**!' },
      predictQuestion: {
        prompt: { en: 'If `5.85 g` salt dissolves completely in `50.00 g` water inside a tared flask in Activity 9.1, total solution mass reads:', hi: 'क्र. 9.1 में `50.00 g` जल में `5.85 g` नमक पूर्णतः घोलने पर तुला का अंतिम पाठ्यांक क्या होगा?' },
        options: { en: ['44.15 g', '50.00 g', '55.85 g (`total conserved`)', '58.50 g'], hi: ['44.15 g', '50.00 g', '55.85 g (`कुल द्रव्यमान संरक्षित!`)', '58.50 g'] },
        correctIndex: 2,
        reason: { en: 'No matter dissolves into nothingness — total mass stays exact sum `50.00 + 5.85 = 55.85 g` (`p.162`).', hi: 'विलयन बनने पर विलेय + विलायक का कुल द्रव्यमान ठीक `50.00 + 5.85 = 55.85 g` रहता है!' },
      },
    },
    {
      num: '9.2',
      title: { en: 'Activity 9.2: Vinegar + Baking Soda (`NaHCO₃`) in Setup 1 (`Open`) vs Setup 2 (`Sealed Balloon`, Fig 9.2–9.3)', hi: 'क्रियाकलाप 9.2: सिरका + बेकिंग सोडा अभिक्रिया में खुला फ्लास्क बनाम बंधे गुब्बारे का भार मापन (`चित्र 9.2–9.3`)' },
      materials: { en: 'Digital balance, 100 mL conical flask, 20 mL vinegar/lemon juice, 2 g baking soda (`NaHCO₃`), balloon & thread', hi: 'अंकीय तुला, 100 mL शंक्वाकार फ्लास्क, 20 mL सिरका, 2 g बेकिंग सोडा, गुब्बारा व धागा' },
      steps: { en: 'Setup 1: Drop 2 g NaHCO₃ from balloon into open flask & put empty balloon beside on scale -> bubbles fizz, final mass DROPS! Setup 2: Tie balloon tightly on flask mouth BEFORE dropping soda -> balloon inflates, scale stays IDENTICAL!', hi: 'व्यवस्था 1: खुले फ्लास्क में सोडा डाल कर खाली गुब्बारा तुला पर रखें (भार कम!)। व्यवस्था 2: पहले धागे से गुब्बारा मुँह पर बाँध कर सोडा गिराएँ — गुब्बारा फूलता है और भार समान रहता है!' },
      examTakeaway: { en: 'Setup 1 drops **solely because gaseous `CO₂` escapes open air**; Setup 2 proves **Lavoisier Conservation Law (`1789`) when system is sealed (`keeping balloon on pan also prevents NaHCO₃ dust-sticking weighing error!`, NCERT Margin Note)**!', hi: 'खुले पात्र में `CO₂` गैस उड़ने से भार कम दिखता है; बंद गुब्बारा **गैस रोक कर लवाइजिए द्रव्यमान संरक्षण नियम सिद्ध करता है** (`गुब्बारे को तुला पर रखने से चिपके कणों की त्रुटि टलती है`)!' },
      predictQuestion: {
        prompt: { en: 'Why did Setup 2 of Activity 9.2 keep the balloon tied to the flask neck throughout weighing?', hi: 'क्रियाकलाप 9.2 की व्यवस्था 2 में फ्लास्क के मुँह पर गुब्बारा क्यों बाँधा गया था?' },
        options: { en: ['To add oxygen from air', 'To trap released CO₂ gas in a closed system verifying exact Conservation of Mass', 'To lower acid temperature', 'To absorb white precipitate'], hi: ['वायु की ऑक्सीजन मिलाने हेतु', 'उत्पन्न CO₂ गैस को बंद निकाय में रोककर द्रव्यमान संरक्षण सत्यापित करने हेतु', 'अम्ल ठंडा करने हेतु', 'अवक्षेप सोखने हेतु'] },
        correctIndex: 1,
        reason: { en: 'NCERT p.164–165 & Group D 2025 Shift 26: Corking/sealing prevents gas loss so total mass before & after matches exactly!', hi: 'सटीक `NCERT पृ. 165` व `Group D 26`: संवृत निकाय (`बंद गुब्बारा/कॉर्क`) में गैस बाहर न जाने से कुल द्रव्यमान बिल्कुल बराबर रहता है!' },
      },
    },
    {
      num: '9.3',
      title: { en: 'Activity 9.3: Mixing `Na₂SO₄(aq)` + `BaCl₂(aq)` Yielding White `BaSO₄↓` Precipitate (`Open Flask OK`, Fig 9.4)', hi: 'क्रियाकलाप 9.3: `Na₂SO₄` + `BaCl₂` मिश्रण से श्वेत `BaSO₄` अवक्षेप व खुले निकाय में द्रव्यमान संरक्षण (`चित्र 9.4`)' },
      materials: { en: 'Digital balance, two 100 mL flasks `A & B`, `10 mL` of `1% m/v Na₂SO₄`, `10 mL` of `1% m/v BaCl₂`', hi: 'अंकीय तुला, दो शंक्वाकार फ्लास्क `क` व `ख`, `1% Na₂SO₄` व `1% BaCl₂` विलयन (`10 mL प्रत्येक`)' },
      steps: { en: 'Zero balance, weigh BOTH flasks A & B together (`before`), pour solution B into A (`watch dense white BaSO₄ precipitate!`), then reweigh BOTH flasks A & B together on balance.', hi: 'दोनों फ्लास्कों `क` व `ख` को एक साथ तोलें; `ख` का विलयन `क` में मिला श्वेत अवक्षेप देखें; पुनः दोनों फ्लास्कों को एक साथ तोलें।' },
      examTakeaway: { en: 'Produces **white `BaSO₄↓` precipitate + `NaCl(aq)`**; works cleanly in an **OPEN system because NO gas evolves**, and weighing BOTH flasks eliminates residual drop transfer error (`p.165–166 Notes`)!', hi: '**बेरियम सल्फेट (`BaSO₄`) का श्वेत अवक्षेप** बनता है; कोई गैस न बनने से यह **खुले निकाय में भी द्रव्यमान संरक्षण दर्शाता है**, और दोनों फ्लास्क साथ तोलने से दीवार पर चिपकी बूँद की त्रुटि नहीं आती!' },
      predictQuestion: {
        prompt: { en: 'Why did Activity 9.3 keep empty flask `B` sitting right back on the digital pan during final weighing (`Fig 9.4b`)?', hi: 'क्र. 9.3 में विलयन उड़ेलने के बाद भी खाली फ्लास्क `ख` को पुनः तुला पर क्यों रखा जाता है?' },
        options: { en: ['To avoid weighing errors from tiny solution droplets clinging to flask `B`’s glass walls (`p.166 Note`)', 'Because BaCl₂ explodes without flask B', 'To reflect room light onto balance', 'Glass evaporates during precipitation'], hi: ['ताकि फ्लास्क `ख` की दीवारों पर चिपकी विलयन की सूक्ष्म बूँदों से भार मापन की त्रुटि न हो (`पृ. 166 टिप्पणी`)', 'विस्फोट रोकने हेतु', 'प्रकाश परावर्तन हेतु', 'काँच वाष्पित हो जाता है'] },
        correctIndex: 0,
        reason: { en: 'Verbatim NCERT p.166 margin note: prevents transfer loss errors AND reaction makes zero gas so open vessel works!', hi: 'सटीक `पृ. 166 टिप्पणी`: काँच की दीवार पर शेष बची सूक्ष्म बूँदों की त्रुटि से बचने हेतु दोनों फ्लास्क पुनः साथ तोलते हैं!' },
      },
    },
    {
      num: '9.4',
      title: { en: 'Activity 9.4: Solubility (`Water / Kerosene / Petrol`) & 9V Bulb Conductivity of Ionic vs Covalent Samples (`Fig 9.15`)', hi: 'क्रियाकलाप 9.4: जल/किरोसिन/पेट्रोल में विलेयता एवं `9V` बैटरी-बल्ब द्वारा विद्युत चालकता परीक्षण (`चित्र 9.15`)' },
      materials: { en: 'Camphor, Naphthalene, Sugar, NaCl, CuSO₄; Water, Kerosene, Petrol; `9V` battery, bulb, cardboard lid & 2 carbon/metal electrodes', hi: 'कर्पूर, नैफ्थलीन, चीनी, NaCl, CuSO₄; जल/किरोसिन/पेट्रोल; `9V` बैटरी, बल्ब, गत्ता व 2 इलेक्ट्रोड' },
      steps: { en: 'Test solubility of each sample in water/kerosene/petrol (`Table 9.2`). Then wire `9V` battery + bulb + two electrodes through cardboard cover; test solids FIRST (`zero glow!`), then aqueous solutions one by one!', hi: 'प्रत्येक नमूने की विलेयता जाँचें। फिर `9V` बैटरी-बल्ब परिपथ से पहले ठोस अवस्था और फिर जलीय विलयन की विद्युत चालकता परखें।' },
      examTakeaway: { en: '**Water dissolves `NaCl, CuSO₄, Sugar`**; **Kerosene/Petrol dissolve `Camphor, Naphthalene`**. Only **aqueous (or molten) IONIC `NaCl, CuSO₄`** glow the bulb (`mobile ions!`); solids & aqueous sugar (`no ions!`) do NOT conduct!', hi: '**आयनिक (`NaCl, CuSO₄`)** जल में घुलकर बल्ब जलाते हैं (`किरोसिन/पेट्रोल में अघुलनशील`); ठोस आयनिक एवं जल में घुली चीनी (`आयन अनुपस्थित`) बल्ब नहीं जलातीं; कर्पूर/नैफ्थलीन पेट्रोल व किरोसिन में घुलनशील!' },
      predictQuestion: {
        prompt: { en: 'Testing aqueous Sugar vs aqueous `CuSO₄` in Activity 9.4 (`Fig 9.15`): both dissolve in water, yet ONLY `CuSO₄` lights the bulb because:', hi: 'क्र. 9.4 में चीनी और कॉपर सल्फेट दोनों जल में घुलते हैं, फिर भी केवल `CuSO₄` विलयन ही बल्ब क्यों जलाता है?' },
        options: { en: ['Ionic `CuSO₄` releases mobile `Cu²⁺` & `SO₄²⁻` ions, whereas covalent sugar dissolves as neutral molecules (`no ions`)', 'Sugar destroys copper electrodes', '9V battery stops near sweet liquids', 'Sugar turns into petrol in water'], hi: ['आयनिक `CuSO₄` जल में मुक्त `Cu²⁺` व `SO₄²⁻` आयन बनाता है, जबकि सहसंयोजी चीनी आयन नहीं बनाती', 'चीनी इलेक्ट्रोड गला देती है', 'मीठे द्रव में बैटरी बंद हो जाती है', 'चीनी पेट्रोल बन जाती है'] },
        correctIndex: 0,
        reason: { en: 'Verbatim NCERT p.178: dissolving alone isn’t enough — free mobile IONS are required for electric conduction!', hi: 'सटीक `पृ. 178`: घुलने के बावजूद चीनी विलयन में आयन नहीं बनाती अतः विद्युत की कुचालक रहती है!' },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-9-chem-1',
      title: {
        en: 'Standard Monatomic & Polyatomic Ions With Valencies (`NCERT Table 9.1a & 9.1b`, p.174–175)',
        hi: 'मानक एकपरमाणुक एवं बहुपरमाणुक आयनों के प्रतीक व संयोजकताएँ (`NCERT तालिका 9.1 क एवं ख`)',
      },
      headers: {
        en: ['Ion Category', 'Positive Ions (`Cations`)', 'Negative Ions (`Anions`)', 'Key Valency / Name Trap'],
        hi: ['आयन श्रेणी', 'धनायन (`Cations +`)', 'ऋणायन (`Anions −`)', 'महत्वपूर्ण परीक्षा बिंदु / जाल'],
      },
      rows: [
        [
          { en: '**Monatomic Valency `1`**', hi: '**एकसंयोजी (`संयोजकता 1`)**' },
          { en: '`Na⁺`, `Li⁺`, `K⁺`, `Ag⁺`, **Cuprous `Cu⁺`**', hi: '`Na⁺`, `Li⁺`, `K⁺`, `Ag⁺`, **क्यूप्रस `Cu⁺`**' },
          { en: '`F⁻` (Fluoride), `Cl⁻` (Chloride), `Br⁻` (Bromide), `I⁻` (Iodide)', hi: 'फ्लुओराइड (`F⁻`), क्लोराइड (`Cl⁻`), ब्रोमाइड (`Br⁻`), आयोडाइड (`I⁻`)' },
          { en: 'Simple non-metal anions ALWAYS end in **`-ide`** (`-आइड`); `Cu⁺ = Cu₂O` (`Think Q17`)!', hi: 'सरल अधातु ऋणायन के अंत में **`-आइड (-ide)`** लगता है; क्यूप्रस ऑक्साइड `Cu₂O`!' },
        ],
        [
          { en: '**Monatomic Valency `2`**', hi: '**द्विसंयोजी (`संयोजकता 2`)**' },
          { en: '`Ca²⁺`, `Ba²⁺`, `Mg²⁺`, `Zn²⁺`, **Ferrous `Fe²⁺`**, **Cupric `Cu²⁺`**', hi: '`Ca²⁺`, `Ba²⁺`, `Mg²⁺`, `Zn²⁺`, **फेरस `Fe²⁺`**, **क्यूप्रिक `Cu²⁺`**' },
          { en: '**Oxide `O²⁻`**, **Sulphide `S²⁻`**, Nitride `N³⁻` (`3−`)', hi: '**ऑक्साइड `O²⁻`**, **सल्फाइड `S²⁻`**, नाइट्राइड `N³⁻` (`3−`)' },
          { en: '**Valency of O in `MgO` = 2** (`Group D Shift 27`); `Mg₃N₂` nitride (`Ex Q9`)!', hi: '**`MgO` में ऑक्सीजन की संयोजकता = `2`** (`Group D 27`); मैग्नीशियम नाइट्राइड `Mg₃N₂`!' },
        ],
        [
          { en: '**Monatomic Valency `3`**', hi: '**त्रिसंयोजी (`संयोजकता 3`)**' },
          { en: '**Aluminium `Al³⁺`**, **Ferric `Fe³⁺`** (`Ex Q5: Fe₂O₃`, `Q17: FeCl₃`)', hi: '**ऐलुमिनियम `Al³⁺`**, **फेरिक `Fe³⁺`** (`उदा. Q5: Fe₂O₃`, `Q17: FeCl₃`)' },
          { en: 'Nitride `N³⁻` (`Ex Q9: Li₃N`), Phosphide `P³⁻` (`P exhibits 3 or 5`, `Group D 32`)', hi: 'नाइट्राइड `N³⁻` (`Li₃N`), फॉस्फाइड (`फॉस्फोरस संयोजकता 3 या 5 — Group D 32`)' },
          { en: '`XCl₃` and `X₂O₃` prove element **`X` has valency 3** (`Group D Shift 39`)!', hi: '`XCl₃` व `X₂O₃` दोनों सूत्र **`X` की संयोजकता `3`** सिद्ध करते हैं (`Group D Shift 39`)!' },
        ],
        [
          { en: '**Polyatomic Valency `1`**', hi: '**बहुपरमाणुक (`संयोजकता 1`)**' },
          { en: '**Ammonium `NH₄⁺`** (`ONLY common + polyatomic in Table 9.1b!`)', hi: '**अमोनियम `NH₄⁺`** (`तालिका 9.1b का एकमात्र मुख्य बहुपरमाणुक धनायन!`)' },
          { en: '**Hydroxide `OH⁻`**, **Nitrate `NO₃⁻`**, **Hydrogencarbonate `HCO₃⁻`**', hi: '**हाइड्रॉक्साइड `OH⁻`**, **नाइट्रेट `NO₃⁻`**, **हाइड्रोजनकार्बोनेट `HCO₃⁻`**' },
          { en: 'Polyatomic ions usually do NOT end in `-ide` (`except OH⁻`!). `NaHCO₃` baking soda!', hi: 'प्रायः बहुपरमाणुक आयन `-ide` पर समाप्त नहीं होते (`OH⁻ अपवाद`!); `NH₄Cl`, `NaHCO₃`!' },
        ],
        [
          { en: '**Polyatomic Valency `2 & 3`**', hi: '**बहुपरमाणुक (`संयोजकता 2 व 3`)**' },
          { en: 'Combines with `NH₄⁺`, `Li⁺`, `Ca²⁺`, `Al³⁺`, `Cu²⁺` (`Ex Q10 Grid`)', hi: '`NH₄⁺`, `Li⁺`, `Al³⁺`, `Cu²⁺` के साथ तिर्यक संयोग (`अभ्यास Q10 सारणी`)' },
          { en: '**Carbonate `CO₃²⁻`**, **Sulphate `SO₄²⁻`**, **Phosphate `PO₄³⁻` (`3−`)**', hi: '**कार्बोनेट `CO₃²⁻`**, **सल्फे ट `SO₄²⁻`**, **फॉस्फेट `PO₄³⁻` (`3−`)**' },
          { en: 'Formula **`Al₂(SO₄)₃`**, **`(NH₄)₂SO₄`**, **`Al₂(CO₃)₃`**, **`Cu₃(PO₄)₂`** (`brackets required!`)', hi: 'कोष्ठक नियम: **`Al₂(SO₄)₃`**, **`(NH₄)₂SO₄`**, **`Al₂(CO₃)₃`**, **`Cu₃(PO₄)₂`**!' },
        ],
      ],
    },
    {
      id: 'tbl-9-chem-2',
      title: {
        en: 'Criss-Cross Chemical Formula Worked Bank (`Sec 9.5` + `Ex Q5, Q6, Q9, Q10` Verified vs `ihsc1an`)',
        hi: 'तिर्यक रासायनिक सूत्र अभ्यास बैंक (`भाग 9.5` + `अभ्यास Q5, Q6, Q9, Q10` उत्तरमाला सत्यापित)',
      },
      headers: {
        en: ['Compound Name', 'Cation / Anion Pair', 'Raw Cross -> Simplest Formula', 'Bracket / Simplification Rule Applied'],
        hi: ['यौगिक का नाम', 'धनायन व ऋणायन', 'तिर्यक प्रक्रिया → अंतिम सूत्र', 'कोष्ठक / सरलीकरण नियम'],
      },
      rows: [
        [
          { en: '**Calcium Chloride & Lime (`CaO`)**', hi: '**कैल्सियम क्लोराइड व कली चूना**' },
          { en: '`Ca²⁺` + `Cl⁻` | `Ca²⁺` + `O²⁻`', hi: '`Ca²⁺` + `Cl⁻` | `Ca²⁺` + `O²⁻`' },
          { en: '**`CaCl₂`** | `Ca₂O₂` -> **`CaO`**', hi: '**`CaCl₂`** | `Ca₂O₂` → **`CaO`**' },
          { en: 'Equal `2+, 2−` simplify by factor 2 -> `CaO` (`Ex Q5 ii`); `1` omitted in `CaCl₂`', hi: 'समान `2+, 2−` आपस में कटकर **`CaO`** बनाते हैं (`अभ्यास Q5 ii`)' },
        ],
        [
          { en: '**Aluminium Oxide & Hydroxide**', hi: '**ऐलुमिनियम ऑक्साइड व हाइड्रॉक्साइड**' },
          { en: '`Al³⁺` + `O²⁻` | `Al³⁺` + `OH⁻`', hi: '`Al³⁺` + `O²⁻` | `Al³⁺` + `OH⁻`' },
          { en: '**`Al₂O₃`** (`Group D 38`) | **`Al(OH)₃`**', hi: '**`Al₂O₃`** (`Group D 38`) | **`Al(OH)₃`**' },
          { en: '**NEVER `AlOH₃`!** Brackets show three `OH⁻` groups around `Al³⁺` (`p.177 Note`)', hi: '**`AlOH₃` गलत है!** `() ` दर्शाता है कि पूरे तीन `OH⁻` समूह `Al³⁺` से जुड़े हैं' },
        ],
        [
          { en: '**Aluminium Sulphate & Carbonate**', hi: '**ऐलुमिनियम सल्फेट व कार्बोनेट**' },
          { en: '`Al³⁺` + `SO₄²⁻` | `Al³⁺` + `CO₃²⁻`', hi: '`Al³⁺` + `SO₄²⁻` | `Al³⁺` + `CO₃²⁻`' },
          { en: '**`Al₂(SO₄)₃`** | **`Al₂(CO₃)₃`** (`Ex Q6 ii`)', hi: '**`Al₂(SO₄)₃`** | **`Al₂(CO₃)₃`** (`अभ्यास Q6 ii`)' },
          { en: 'Total atoms in `Al₂(SO₄)₃`: **`2 Al, 3 S, 12 O`** (`Group D 2025 Shift 15 PYQ`!)', hi: '`Al₂(SO₄)₃` में परमाणु: **`2 Al, 3 S, 12 O`** (`Group D 2025 Shift 15`!)' },
        ],
        [
          { en: '**Calcium Hydroxide & Nitrate**', hi: '**कैल्सियम हाइड्रॉक्साइड व नाइट्रेट**' },
          { en: '`Ca²⁺` + `OH⁻` | `Ca²⁺` + `NO₃⁻`', hi: '`Ca²⁺` + `OH⁻` | `Ca²⁺` + `NO₃⁻`' },
          { en: '**`Ca(OH)₂`** (`Tech 3`) | **`Ca(NO₃)₂`**', hi: '**`Ca(OH)₂`** (`Tech 3`) | **`Ca(NO₃)₂`**' },
          { en: 'Needed `2` polyatomic anions (`1` Ca²⁺ + `2×1⁻`) -> parentheses compulsory!', hi: '`Ca²⁺` के लिए दो एकल-ऋणात्मक बहुपरमाणुक आयन चाहिए → कोष्ठक अनिवार्य!' },
        ],
        [
          { en: '**Ammonium Salts (`Ex Q6iv, Q10`)**', hi: '**अमोनियम लवण (`Q6iv, Q10`)**' },
          { en: '`NH₄⁺` + `NO₃⁻ / SO₄²⁻ / PO₄³⁻`', hi: '`NH₄⁺` + `NO₃⁻ / SO₄²⁻ / PO₄³⁻`' },
          { en: '**`NH₄NO₃`**, **`(NH₄)₂SO₄`**, **`(NH₄)₃PO₄`**', hi: '**`NH₄NO₃`**, **`(NH₄)₂SO₄`**, **`(NH₄)₃PO₄`**' },
          { en: 'Bracket `(NH₄)` ONLY when count `>= 2`; **`NH₄Cl` & `NH₄NO₃`** need NO brackets!', hi: 'कोष्ठक `(NH₄)` केवल `≥2` होने पर (`(NH₄)₂SO₄`), `1` होने पर नहीं (`NH₄NO₃`)!' },
        ],
        [
          { en: '**Nitrides, Sulfides & Ferric (`Q5, Q9`)**', hi: '**नाइट्राइड, सल्फाइड व फेरिक (`Q5, Q9`)**' },
          { en: '`Mg²⁺/Li⁺` + `N³⁻` | `Fe³⁺` + `O²⁻/Cl⁻`', hi: '`Mg²⁺/Li⁺` + `N³⁻` | `Fe³⁺` + `O²⁻/Cl⁻`' },
          { en: '**`Mg₃N₂`**, **`Li₃N`**, **`Fe₂O₃`**, **`FeCl₃`**, **`Na₂S`**', hi: '**`Mg₃N₂`**, **`Li₃N`**, **`Fe₂O₃`**, **`FeCl₃`**, **`Na₂S`**' },
          { en: 'Nitrogen has valency **`3`** (`2,5 -> gains 3`); Ferric = **`Fe³⁺`**, Cuprous = **`Cu⁺` (`Cu₂O`)**', hi: 'नाइट्रोजन (`2,5`) संयोजकता `3`; फेरिक `Fe³⁺` (`Fe₂O₃`), क्यूप्रस `Cu⁺` (`Cu₂O`)' },
        ],
      ],
    },
    {
      id: 'tbl-9-chem-3',
      title: {
        en: 'Binary Covalent Naming Prefixes & Fixed Mass Ratios (`Sec 9.2 & 9.4.1c`)',
        hi: 'सहसंयोजी यौगिकों की उपसर्ग प्रणाली व स्थिर द्रव्यमान अनुपात सारणी (`भाग 9.2 व 9.4.1 ग`)',
      },
      headers: {
        en: ['Formula / Molecule', 'Correct IUPAC / NCERT Name', 'Fixed Mass Ratio / Bond Type', 'Special Rule / Exam Alert (`NCERT`)'],
        hi: ['रासायनिक सूत्र', 'सटीक NCERT नाम', 'स्थिर द्रव्यमान अनुपात / आबंध', 'विशेष नियम व परीक्षा चेतावनी'],
      },
      rows: [
        [
          { en: '**`H₂O`** (`Water`) / **`CO₂`**', hi: '**`H₂O`** (`जल`) / **`CO₂`**' },
          { en: 'Water / **Carbon dioxide**', hi: 'जल / **कार्बन डाइऑक्साइड**' },
          { en: '`H:O = 1:8` (`Single`) | `C:O = 3:8` (`Double O=C=O`)', hi: '`H:O = 1:8` (`एकल`) | `C:O = 3:8` (`द्वि-आबंध O=C=O`)' },
          { en: '`di-` keeps `i` before oxide (`dioxide`); NEVER `monocarbon dioxide` (`p.172`)', hi: '`di-` में `i` रहता है (`डाइऑक्साइड`); पहले तत्व पर `mono` नहीं लगाते (`पृ. 172`)' },
        ],
        [
          { en: '**`CO`** / **`N₂O₄`** / **`N₂O₅`**', hi: '**`CO`** / **`N₂O₄`** / **`N₂O₅`**' },
          { en: '**Carbon monoxide** / **Dinitrogen tetroxide** / **pentoxide**', hi: '**कार्बन मोनोक्साइड** / **डाइनाइट्रोजन टेट्रॉक्साइड** / **पेंटॉक्साइड**' },
          { en: '`CO`: `C:O = 3:4` (`Think Q4: 9g C -> 12g O`)', hi: '`CO`: `C:O = 3:4` (`प्रश्न 4: 9 g C से 12 g O जुड़ती है`)' },
          { en: '**Vowel Drop Rule**: ending `o` or `a` in prefix drops before vowel (`monoxide, pentoxide`!)', hi: '**स्वर लोप नियम**: `mono/tetra/penta` के अंत का `o/a` स्वर से पहले हट जाता है' },
        ],
        [
          { en: '**`SF₆`** / **`PCl₃`** / **`CCl₄`**', hi: '**`SF₆`** / **`PCl₃`** / **`CCl₄`**' },
          { en: '**Sulphur hexafluoride** / **Phosphorus trichloride** / **Carbon tetrachloride**', hi: '**सल्फर हेक्साफ्लुओराइड** / **फॉस्फोरस ट्राइक्लोराइड** / **कार्बन टेट्राक्लोराइड**' },
          { en: 'Covalent (`Hexa=6, Tri=3, Tetra=4` shared pairs)', hi: 'सहसंयोजी (`हेक्सा=6, ट्राइ=3, टेट्रा=4` साझा युग्म)' },
          { en: 'Prefixes also verified verbatim in `Think Q16 (ii) NO₂ Nitrogen dioxide` (`ihsc1an`)', hi: 'सोचिए Q16 सत्यापित: `NO₂` = नाइट्रोजन डाइऑक्साइड, `SF₆`, `PCl₃`' },
        ],
        [
          { en: '**`H₂S`** / **`NH₃`** (`Ammonia`)', hi: '**`H₂S`** / **`NH₃`** (`अमोनिया`)' },
          { en: '**Hydrogen sulphide** / **Ammonia** (`Nitrogen trihydride`)', hi: '**हाइड्रोजन सल्फाइड** / **अमोनिया**' },
          { en: '`NH₃` `N:H = 14:3` (`3` single `N–H` covalent bonds)', hi: '`NH₃` में `N:H = 14:3` (`3` एकल `N–H` सहसंयोजी आबंध)' },
          { en: '**H-First Exception (`p.172`)**: Never write `Dihydrogen sulphide` — skip prefix for initial `H`!', hi: '**हाइड्रोजन अपवाद**: सूत्र `H` से शुरू होने पर उपसर्ग नहीं लगाते (`H₂S = हाइड्रोजन सल्फाइड`)' },
        ],
      ],
    },
    {
      id: 'tbl-9-chem-4',
      title: {
        en: 'Ionic vs Covalent Compounds Comparison Matrix (`Activity 9.4 & Table 9.2`, p.178–179)',
        hi: 'आयनिक बनाम सहसंयोजी यौगिक — विलेयता, गलनांक एवं विद्युत चालकता तुलना (`क्र. 9.4 व तालिका 9.2`)',
      },
      headers: {
        en: ['Property Tested (`Sec 9.6`)', 'Ionic Compounds (`NaCl, CuSO₄`)', 'Covalent Compounds (`Camphor, Naphthalene, Sugar`)', 'RRB CBT Scientific Reason'],
        hi: ['परीक्षण गुणधर्म (`भाग 9.6`)', 'आयनिक यौगिक (`NaCl, CuSO₄`)', 'सहसंयोजी यौगिक (`कर्पूर, नैफ्थलीन, चीनी`)', 'वैज्ञानिक कारण व PYQ बिंदु'],
      },
      rows: [
        [
          { en: '**Bond & Structure**', hi: '**आबंध व संरचना**' },
          { en: '**Electron transfer** (`+`/`−` ions in 3D crystal lattice)', hi: '**इलेक्ट्रॉन स्थानांतरण** (`3-D क्रिस्टल जालक`)' },
          { en: '**Electron sharing** (discrete neutral molecules)', hi: '**इलेक्ट्रॉन साझेदारी** (स्वतंत्र उदासीन अणु)' },
          { en: 'Metals+Non-metals typically ionic; Non-metal pairs covalent (`NH₄⁺` ionic salts also!)', hi: 'धातु+अधातु प्रायः आयनिक; अधातु-अधातु सहसंयोजी!' },
        ],
        [
          { en: '**Solubility (`Water vs Petrol/Kerosene`)**', hi: '**विलेयता (`जल बनाम पेट्रोल/किरोसिन`)**' },
          { en: '**Soluble in Water**; **INSOLUBLE in Kerosene/Petrol**', hi: '**जल में घुलनशील**; **किरोसिन व पेट्रोल में अघुलनशील**' },
          { en: 'Camphor/Naphthalene **dissolve in Petrol/Kerosene** (`insoluble in water`; sugar soluble in water)', hi: 'कर्पूर/नैफ्थलीन **जल में अघुलनशील पर किरोसिन/पेट्रोल में विलेय** (चीनी जल में विलेय)' },
          { en: 'Polar water pulls ions apart (`hydrated ions`), whereas covalent waxes prefer organic solvents!', hi: 'ध्रुवीय जल आयनिक जालक तोड़ कर आयन अलग करता है (`Act 9.4`)!' },
        ],
        [
          { en: '**Conduction: SOLID State**', hi: '**विद्युत चालकता: ठोस अवस्था**' },
          { en: '**DOES NOT CONDUCT** (`Bulb OFF!`)', hi: '**विद्युत कुचालक (`बल्ब बंद!`)**' },
          { en: '**DOES NOT CONDUCT** (`Bulb OFF!`)', hi: '**विद्युत कुचालक (`बल्ब बंद!`)**' },
          { en: 'Solid ionic crystals lock `Na⁺`/`Cl⁻` rigidly via strong lattice attraction (`Ex Q14`!)', hi: 'ठोस अवस्था में आयन प्रबल स्थिर-विद्युत बल से बंधे रह गति नहीं कर सकते (`अभ्यास Q14`)' },
        ],
        [
          { en: '**Conduction: Aqueous / Molten**', hi: '**विद्युत चालकता: जलीय / गलित अवस्था**' },
          { en: '**CONDUCTS BRIGHTLY** (`Bulb ON!`)', hi: '**प्रबल विद्युत सुचालक (`बल्ब जलता है!`)**' },
          { en: '**DOES NOT CONDUCT** (`Even dissolved sugar = Bulb OFF!`)', hi: '**विद्युत कुचालक (`चीनी घुलकर भी बल्ब नहीं जलाती!`)**' },
          { en: 'Molten or dissolved ionic salts release **free mobile ions**; covalent sugar yields ZERO ions!', hi: 'गलित या जलीय आयनिक विलयन में आयन गति हेतु मुक्त होते हैं; चीनी में आयन ही नहीं बनते!' },
        ],
        [
          { en: '**Melting & Boiling Points**', hi: '**गलनांक एवं क्वथनांक**' },
          { en: '**HIGH** (`NaCl solid at room temp` — `Group D Shift 45`)', hi: '**उच्च (`NaCl` कमरे के ताप पर ठोस)** (`Group D Shift 45`)' },
          { en: '**LOW** (`camphor sublimes easily`)', hi: '**निम्न (`कर्पूर शीघ्र उड़ जाता है`)**' },
          { en: 'Huge thermal energy needed to overcome strong 3-D electrostatic lattice bonds!', hi: 'प्रबल अंतर-आयनिक आकर्षण तोड़ने हेतु अधिक ऊष्मा ऊर्जा आवश्यक!' },
        ],
      ],
    },
    {
      id: 'tbl-9-chem-5',
      title: {
        en: 'Master Atomic, Molecular & Formula Unit Mass Reference (`u`, NCERT Examples + Exercises + PYQs)',
        hi: 'आण्विक एवं सूत्र इकाई द्रव्यमान (`u`) संपूर्ण मास्टर सारणी (`NCERT उदा., अभ्यास व RRB PYQ`)',
      },
      headers: {
        en: ['Substance Formula', 'Class (`Molecular / Formula Unit`)', 'Exact Step-by-Step Sum (`u`)', 'Verified Answer (`ihsc1an / PYQ`)'],
        hi: ['पदार्थ व सूत्र', 'प्रकार (`आण्विक / सूत्र इकाई`)', 'चरणबद्ध गणना (`u`)', 'सत्यापित उत्तर (`उत्तरमाला / PYQ`)'],
      },
      rows: [
        [
          { en: '**`H₂O` & `CH₄` & `NH₃`**', hi: '**`H₂O`, `CH₄` व `NH₃`**' },
          { en: 'Molecular Mass (`Covalent`)', hi: 'आण्विक द्रव्यमान (`सहसंयोजी`)' },
          { en: '`H₂O: 2+16` | `CH₄: 12+4` | `NH₃: 14+3`', hi: '`H₂O: 2+16` | `CH₄: 12+4` | `NH₃: 14+3`' },
          { en: '**`18 u`** | **`16 u`** (`Q22 ✓`) | **`17 u`** (`Tech 3 22`)', hi: '**`18 u`** | **`16 u`** (`Q22 ✓`) | **`17 u`** (`Tech 3`)', },
        ],
        [
          { en: '**`CO₂` & `HNO₃` & `H₃PO₄`**', hi: '**`CO₂`, `HNO₃` व `H₃PO₄`**' },
          { en: 'Molecular Mass (`Covalent`)', hi: 'आण्विक द्रव्यमान (`अम्ल व गैस`)' },
          { en: '`12+32` | `1+14+48` | `3+31+64`', hi: '`12+32` | `1+14+48` | `3+31+64`' },
          { en: '**`44 u`** (`GD 3,29`) | **`63 u`** (`Q21 ✓`) | **`98 u`** (`Ex Q8ii ✓`)', hi: '**`44 u`** (`GD 3,29`) | **`63 u`** (`Q21 ✓`) | **`98 u`** (`अभ्यास Q8ii ✓`)', },
        ],
        [
          { en: '**`KCl` & `Mg(OH)₂` & `Na₂O` & `ZnO`**', hi: '**`KCl`, `Mg(OH)₂`, `Na₂O` व `ZnO`**' },
          { en: 'Formula Unit Mass (`Ionic`)', hi: 'सूत्र इकाई द्रव्यमान (`आयनिक`)' },
          { en: '`39+35.5` | `24+34` | `46+16` | `65+16`', hi: '`39+35.5` | `24+34` | `46+16` | `65+16`' },
          { en: '**`74.5 u`** (`Q23✓`) | **`58 u`** (`Q24✓`) | **`62 u`** | **`81 u`** (`GD 1`)', hi: '**`74.5 u`** (`Q23✓`) | **`58 u`** (`Q24✓`) | **`62 u`** | **`81 u`** (`GD 1`)', },
        ],
        [
          { en: '**`NH₄NO₃` & `NaHCO₃` & `CaCl₂`**', hi: '**`NH₄NO₃`, `NaHCO₃` व `CaCl₂`**' },
          { en: 'Formula Unit Mass (`Ionic`)', hi: 'सूत्र इकाई द्रव्यमान (`आयनिक`)' },
          { en: '`14+4+14+48` | `23+1+12+48` | `40+71`', hi: '`14+4+14+48` | `23+1+12+48` | `40+71`' },
          { en: '**`80 u`** (`Ex Q8i ✓`) | **`84 u`** (`Ex Q8iii ✓`) | **`111 u`** (`GD 22`)', hi: '**`80 u`** (`Q8i ✓`) | **`84 u`** (`Q8iii ✓`) | **`111 u`** (`GD 22`)' },
        ],
        [
          { en: '**`(NH₄)₂SO₄` & `Ca(NO₃)₂`**', hi: '**`(NH₄)₂SO₄` व `Ca(NO₃)₂`**' },
          { en: 'Formula Unit (`Polyatomic × 2`)', hi: 'सूत्र इकाई (`कोष्ठक सहित × 2`)' },
          { en: '`2×(14+4)+32+64` | `40 + 2×(14+48)`', hi: '`2×18+32+64` | `40 + 2×62`' },
          { en: '**`132 u`** (`Group D 37`) | **`164 u`** (`NCERT Ex 9.7`)', hi: '**`132 u`** (`Group D 37`) | **`164 u`** (`NCERT उदा. 9.7`)' },
        ],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.166 Q1',
      q: { en: 'A student burns `10 g` ethanol in an open beaker. No residue remains afterward. Does this violate the Law of Conservation of Mass? Explain.', hi: 'एक विद्यार्थी खुले बीकर में `10 g` एथेनॉल जलाता है और अभिक्रिया पूर्ण होने पर बीकर में कोई अवशेष शेष नहीं रहता — क्या द्रव्यमान संरक्षण नियम का उल्लंघन हुआ? व्याख्या कीजिए।' },
      a: { en: '**NO violation!** Burning ethanol reacts with air’s `O₂` to form **invisible gaseous Carbon Dioxide (`CO₂`) and Water Vapour (`H₂O`)**, which escape freely into the open room (`not weighed on pan`). In a sealed vessel, `(ethanol + O₂ consumed) = (CO₂ + H₂O formed)` strictly!', hi: '**बिल्कुल उल्लंघन नहीं हुआ!** दहन पर एथेनॉल हवा की `O₂` से क्रिया कर **गैसीय `CO₂` व जलवाष्प** बनाता है जो खुले बीकर से वायुमंडल में उड़ जाती हैं। यदि सभी गैसों को बंद पात्र में तोला जाए तो अभिकारक व उत्पाद द्रव्यमान ठीक बराबर रहेंगे!' },
    },
    {
      num: 'p.166 Q2',
      q: { en: '`20 g` Hydrogen reacts completely with `160 g` Oxygen. What mass of Water forms (`ihsc1an Verified ✓`)?', hi: 'जब `20 g` हाइड्रोजन `160 g` ऑक्सीजन से पूर्णतः अभिक्रिया करे तो जल की कितनी मात्रा का निर्माण होगा? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Answer (`ihsc1an ✓`): `180 g`!** By Law of Conservation of Mass, total product mass = `20 g + 160 g` = **`180 g`** (`ratio H:O = 20:160 = 1:8` exact!).', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`): `180 g`!** द्रव्यमान संरक्षण से कुल जल = `20 + 160` = **`180 g`** (`अनुपात भी 1:8 है`)!' },
    },
    {
      num: 'p.167 Q3',
      q: { en: 'In a compound, Sulphur (`40%`) and Oxygen (`60%`) combine by mass. If a sample holds `20 g` Sulphur, what mass of Oxygen preserves constant proportions (`ihsc1an ✓`)?', hi: 'किसी यौगिक में सल्फर `40%` और ऑक्सीजन `60%` है। यदि प्रतिदर्श में `20 g` सल्फर हो तो ऑक्सीजन का द्रव्यमान कितना होना चाहिए? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Answer (`ihsc1an ✓`): `30 g`!** Mass ratio `S : O = 40 : 60 = 2 : 3`. Thus for `20 g` Sulphur, Oxygen = `(60 / 40) × 20` = **`30 g`** (`SO₃` proportion!).', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`): `30 g`!** द्रव्यमान अनुपात `S:O = 40:60 = 2:3` ⇒ `20 g` सल्फर हेतु ऑक्सीजन = `(3/2) × 20` = **`30 g`**!' },
    },
    {
      num: 'p.167 Q4',
      q: { en: 'In Carbon Monoxide (`CO`), `C : O` mass ratio is `3 : 4`. How much Oxygen reacts with `9 g` Carbon (`ihsc1an ✓`)?', hi: 'कार्बन मोनोक्साइड (`CO`) में `C:O` द्रव्यमान अनुपात `3:4` है। `9 g` कार्बन से कितनी ऑक्सीजन संयोजन करेगी? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Answer (`ihsc1an ✓`): `12 g`!** Ratio `3 parts C : 4 parts O`. Scaling `× 3` (`3 × 3 = 9 g C`) gives Oxygen = `4 × 3` = **`12 g`**!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`): `12 g`!** `3 g` C से `4 g` O जुड़ती है ⇒ `9 g` C (`3 गुना`) से ऑक्सीजन = `4 × 3` = **`12 g`**!' },
    },
    {
      num: 'p.167 Q5',
      q: { en: 'Why is the Law of Constant Proportions valid ONLY for compounds and NOT for mixtures?', hi: 'स्थिर अनुपात का नियम केवल यौगिकों के लिए सत्य होता है परंतु मिश्रणों के लिए नहीं — कारण दीजिए।' },
      a: { en: 'Pure **compounds** form via chemical bonding of atoms in **fixed stoichiometric whole-number ratios** (`e.g. H₂O = 1:8 always`), whereas **mixtures** are mere physical blends where components can be mixed in **any variable proportion** (`e.g. dilute vs salty brine`).', hi: 'शुद्ध **यौगिकों** में तत्व रासायनिक आबंध द्वारा सदैव एक **निश्चित संख्या/द्रव्यमान अनुपात** में जुड़ते हैं (`जैसे जल में 1:8`), जबकि **मिश्रण** केवल भौतिक मेल हैं जिनमें घटकों को **किसी भी अनुपात** में मिलाया जा सकता है!' },
    },
    {
      num: 'p.167 Q6',
      q: { en: 'Students `X` and `Y` combine Copper & Oxygen in mass ratios `4 : 1` and `8 : 2` to form Copper Oxide. Do their results confirm Constant Proportions?', hi: 'दो विद्यार्थियों X और Y ने कॉपर व ऑक्सीजन को क्रमशः `4:1` तथा `8:2` के अनुपात में संयोजित कर कॉपर ऑक्साइड बनाया — क्या यह स्थिर अनुपात के नियम की पुष्टि करता है?' },
      a: { en: '**YES!** Dividing student Y’s ratio `8 : 2` by `2` simplifies directly to **`4 : 1`** — identical to student X (`Cu₂O` ratio)! Both obtained the exact same fixed mass ratio!', hi: '**जी हाँ!** `8 : 2` को सरल करने पर **`4 : 1`** ही प्राप्त होता है जो X के अनुपात के ठीक समान है — अतः स्थिर अनुपात नियम की पूर्ण पुष्टि होती है!' },
    },
    {
      num: 'p.168 Q7',
      q: { en: 'Assertion: `2 g` H combines with `16 g` O to form `18 g` H₂O. Reason: According to Dalton, atoms combine in simple whole-number ratios **by mass** to form compounds. Pick (`ihsc1an ✓`).', hi: 'अभिकथन: `2 g` H, `16 g` O से संयोजित होकर `18 g` जल बनाती है। कारण: डाल्टन के अनुसार परमाणु **द्रव्यमान के** सरल पूर्णांक अनुपात में संयोजन कर यौगिक बनाते हैं। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Answer (`ihsc1an ✓`): Option `(iii)` — Assertion is TRUE, Reason is FALSE!** Crucial distinction: Dalton stated atoms combine in simple whole-number ratios **by NUMBER of atoms (`e.g. 2 H : 1 O`)**, NOT directly by mass (`actual mass ratio 1:8` isn’t what defines Dalton’s atomic count rule)!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`): `(iii)` — अभिकथन सत्य है परंतु कारण असत्य है!** कारण की त्रुटि पकड़ें: डाल्टन ने परमाणु **संख्या (`2 H : 1 O`)** का सरल पूर्णांक अनुपात बताया था, न कि *द्रव्यमान* का सरल पूर्णांक अनुपात (`द्रव्यमान अनुपात तो 1:8 होता है`)!' },
    },
    {
      num: 'p.169 Q8',
      q: { en: 'Nitrogen has **`5` valence electrons**. Sketch/describe the covalent structure of a Nitrogen molecule (`N₂`).', hi: 'नाइट्रोजन में **पाँच संयोजकता इलेक्ट्रॉन** होते हैं। नाइट्रोजन अणु (`N₂`) की सहसंयोजी संरचना बताइए।' },
      a: { en: 'Each N atom (`2,5`) needs **`3` more electrons** to complete its octet (`8`). Two N atoms share **THREE pairs (`6 e⁻` shared, leaving 1 lone pair each)** creating a strong **Triple Covalent Bond: `N ≡ N`**!', hi: 'प्रत्येक N परमाणु (`2,5`) को अष्टक पूर्ण करने हेतु **`3 e⁻`** चाहिए; अतः दोनों N परमाणु परस्पर **तीन इलेक्ट्रॉन युग्मों** की साझेदारी कर **त्रि-सहसंयोजी आबंध (`N ≡ N`)** बनाते हैं!' },
    },
    {
      num: 'p.170 Q9',
      q: { en: 'Fluorine has atomic number **`Z = 9`**. Explain how a Fluorine molecule (`F₂`) forms.', hi: 'फ्लुओरीन का परमाणु क्रमांक `9` है। फ्लुओरीन अणु (`F₂`) के निर्माण की व्याख्या कीजिए।' },
      a: { en: 'Fluorine (`2,7`) has **`7` valence electrons**, needing **`1` more** for octet stability. Two F atoms share **one electron pair** forming a **Single Covalent Bond: `F — F`** (`F₂`).', hi: 'फ्लुओरीन (`2,7`) के बाह्यतम कोश में `7 e⁻` हैं; दोनों परमाणु एक-एक इलेक्ट्रॉन साझा कर **एकल सहसंयोजी आबंध (`F–F`)** द्वारा स्थायी `F₂` अणु बनाते हैं।' },
    },
    {
      num: 'p.171 Q10',
      q: { en: 'Show covalent bonding in: `(i)` `CO₂` `(ii)` `H₂S` `(iii)` `NH₃`.', hi: 'निम्नलिखित सहसंयोजी अणुओं का निर्माण दर्शाइए: `(i)` `CO₂`, `(ii)` `H₂S`, `(iii)` `NH₃`।' },
      a: { en: '• **`(i) CO₂`**: Carbon (`2,4`) shares 2 e⁻ pairs with EACH Oxygen (`2,6`) forming two double bonds: **`O = C = O`**.\n• **`(ii) H₂S`**: Sulphur (`2,8,6`) shares 1 e⁻ pair each with two H atoms: **`H — S — H`**.\n• **`(iii) NH₃`**: Nitrogen (`2,5`) shares 1 e⁻ pair with each of three H atoms: **`H–N(H)–H`** (`1 lone pair left on N`).', hi: '• **`(i) CO₂`**: कार्बन (`4 e⁻`) दोनों ऑक्सीजन (`6 e⁻`) से 2-2 इलेक्ट्रॉन साझा कर **`O = C = O`** बनाता है।\n• **`(ii) H₂S`**: सल्फर (`6 e⁻`) दो `H` से 1-1 इलेक्ट्रॉन साझा कर **`H–S–H`** बनाता है।\n• **`(iii) NH₃`**: नाइट्रोजन (`5 e⁻`) तीन `H` से 1-1 इलेक्ट्रॉन साझा कर अमोनिया बनाता है!' },
    },
    {
      num: 'p.171 Q11',
      q: { en: 'Why does Neon (`Atomic number 10`) NEITHER transfer NOR share its valence electrons?', hi: 'निऑन (`परमाणु क्रमांक 10`) अपने संयोजकता इलेक्ट्रॉनों को न तो स्थानांतरित करता है और न ही साझा करता है — व्याख्या कीजिए।' },
      a: { en: 'Neon’s electronic configuration is **`K=2, L=8`** — its outermost L-shell already contains a **complete stable Octet (`8 electrons`)**, so it has **zero valency** and remains chemically inert as free atoms!', hi: 'निऑन (`Z=10`) का विन्यास **`2, 8`** है — इसका बाह्यतम अष्टक (`8 e⁻`) **पूर्णतः भरा व अत्यंत स्थायी** है (`संयोजकता 0`), अतः इसे आबंध बनाने की आवश्यकता नहीं!' },
    },
    {
      num: 'p.173 Q12 & Q13',
      q: { en: 'Q12: What ion does Oxygen (`O`) form? Q13: Fill blanks (`Mg²⁺`, `Cl⁻` counts in Magnesium Chloride) (`ihsc1an ✓`).', hi: 'Q12: ऑक्सीजन (`O`) किस प्रकार का आयन बनाएगा? Q13: `MgCl₂` में रिक्त स्थानों की पूर्ति कीजिए (`उत्तरमाला सत्यापित ✓`)।' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n• **Q12**: Oxygen (`2,6`) gains `2 e⁻` forming **Oxide Anion `O²⁻`** (`ऋणायन`).\n• **Q13**: Cl gains `1 e⁻` forming **`Cl⁻`**; **`one (एक)`** `Mg²⁺` ion combines with **`two (दो)`** `Cl⁻` ions yielding **`MgCl₂`**!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n• **Q12**: ऑक्सीजन **ऋणायन `O²⁻`** बनाएगा (`2 e⁻` ग्रहण कर)।\n• **Q13**: क्लोरीन **`Cl⁻`** बनाती है; मैग्नीशियम का **`एक`** `Mg²⁺` आयन व क्लोरीन के **`दो`** `Cl⁻` आयन जुड़ कर **`MgCl₂`** बनाते हैं!' },
    },
    {
      num: 'p.173 Q14 & Q15',
      q: { en: 'Q14: Show cation/chloride formation for Potassium (`K`) & Calcium (`Ca`). Q15: Show how Sodium Sulphide (`Na₂S`) forms.', hi: 'Q14: पोटैशियम (`K`) व कैल्सियम (`Ca`) धनायन एवं उनके क्लोराइड कैसे बनते हैं? Q15: सोडियम सल्फाइड (`Na₂S`) का निर्माण दर्शाइए।' },
      a: { en: '• **Q14**: `K (2,8,8,1)` loses `1 e⁻ -> K⁺`, pairing with `1 Cl⁻` -> **`KCl`**. `Ca (2,8,8,2)` loses `2 e⁻ -> Ca²⁺`, pairing with `2 Cl⁻` -> **`CaCl₂`**.\n• **Q15**: **TWO Sodium atoms (`2,8,1`)** each transfer `1 e⁻` (`2 e⁻` total) to **ONE Sulphur atom (`2,8,6`)** giving `2 Na⁺` & `S²⁻` -> **`Na₂S`**!', hi: '• **Q14**: `K (2,8,8,1) → K⁺ + e⁻` से **`KCl`**; `Ca (2,8,8,2) → Ca²⁺ + 2e⁻` दो `Cl⁻` के साथ **`CaCl₂`** बनाता है।\n• **Q15**: **दो सोडियम परमाणु** एक-एक इलेक्ट्रॉन त्यागे (`2 Na⁺`), जिन्हें **एक सल्फर परमाणु (`2,8,6`)** ग्रहण कर `S²⁻` बनता है ⇒ **`Na₂S`**!' },
    },
    {
      num: 'p.177 Q16',
      q: { en: 'Write chemical names (`ihsc1an ✓`): `(i) CO₂`, `(ii) NO₂`, `(iii) SF₆`, `(iv) PCl₃`.', hi: 'रासायनिक नाम लिखिए (`उत्तरमाला सत्यापित ✓`): `(i) CO₂`, `(ii) NO₂`, `(iii) SF₆`, `(iv) PCl₃`।' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n`(i)` **Carbon dioxide (`कार्बन डाइऑक्साइड`)**\n`(ii)` **Nitrogen dioxide (`नाइट्रोजन डाइऑक्साइड`)**\n`(iii)` **Sulphur hexafluoride (`सल्फर हेक्साफ्लुओराइड`)**\n`(iv)` **Phosphorus trichloride (`फॉस्फोरस ट्राइक्लोराइड`)**.', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n`(i)` **कार्बन डाइऑक्साइड** | `(ii)` **नाइट्रोजन डाइऑक्साइड** | `(iii)` **सल्फर हेक्साफ्लुओराइड** | `(iv)` **फॉस्फोरस ट्राइक्लोराइड**!' },
    },
    {
      num: 'p.177 Q17 & Q18',
      q: { en: 'Q17 Formulae: `(i)` Sodium hydrogencarbonate, `(ii)` Sulphur dioxide, `(iii)` Ferric chloride, `(iv)` Cuprous oxide. Q18 Formulae: `(i)` `Fe³⁺ + OH⁻`, `(ii)` `K⁺ + CO₃²⁻` (`ihsc1an ✓`).', hi: 'Q17 सूत्र लिखिए (`i–iv`) व Q18: `(i) Fe³⁺ और OH⁻`, `(ii) K⁺ और CO₃²⁻` के सूत्र बताइए (`उत्तरमाला सत्यापित ✓`)।' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n• **Q17**: `(i)` **`NaHCO₃`** | `(ii)` **`SO₂`** | `(iii)` **`FeCl₃`** (`Fe³⁺`) | `(iv)` **`Cu₂O`** (`Cu⁺`!).\n• **Q18**: `(i)` **`Fe(OH)₃`** | `(ii)` **`K₂CO₃`**!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n• **Q17**: `(i)` **`NaHCO₃`** | `(ii)` **`SO₂`** | `(iii)` **`FeCl₃`** (`फेरिक Fe³⁺`) | `(iv)` **`Cu₂O`** (`क्यूप्रस Cu⁺`)!\n• **Q18**: `(i)` **`Fe(OH)₃`** | `(ii)` **`K₂CO₃`**!' },
    },
    {
      num: 'p.179 Q19 & Q20',
      q: { en: 'Q19: Solid conducts NOT in solid state, conducts when dissolved in water — bond type? Q20: Metal `X` (`2 e⁻` in valence M-shell) reacts with Oxygen (`ihsc1an ✓`): find `(i)` Formula, `(ii)` Bond type, `(iii)` Aqueous conductivity.', hi: 'Q19: ठोस में कुचालक पर जल में घुलने पर सुचालक यौगिक का आबंध? Q20: धातु X (बाह्यतम M कोश में 2 e⁻) ऑक्सीजन से जुड़ती है — `(i)` सूत्र, `(ii)` आबंध प्रकार, `(iii)` जलीय चालकता (`उत्तरमाला सत्यापित ✓`)।' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n• **Q19**: **Ionic Bond (`आयनिक आबंध`)**!\n• **Q20**: `X (2,8,2)` (`Mg`, valency `2+`) + `O²⁻`: **`(i)` `XO` / `MO` (`2:2` cancels!)**, **`(ii)` Ionic (`आयनिक`)**, **`(iii)` Conducts electricity in aqueous solution (`even if sparingly soluble!`, p.179)**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**:\n• **Q19**: **आयनिक आबंध**।\n• **Q20**: **`(i)` `MO`** (`M²⁺` व `O²⁻` में 2 कट कर `MO`/`MgO`), **`(ii)` आयनिक आबंध**, **`(iii)` जलीय विलयन में विद्युत का चालन करता है**!' },
    },
    {
      num: 'p.179–180 Q21–Q24',
      q: { en: 'Calculate masses (`ihsc1an ✓`): `Q21` `HNO₃` | `Q22` `CH₄` | `Q23` `KCl` | `Q24` `Mg(OH)₂`. (`H=1, C=12, N=14, O=16, Mg=24, Cl=35.5, K=39 u`)', hi: 'द्रव्यमान ज्ञात कीजिए (`उत्तरमाला सत्यापित ✓`): `Q21 HNO₃`, `Q22 CH₄`, `Q23 KCl`, `Q24 Mg(OH)₂`!' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n• **Q21 (`HNO₃`)**: `1 + 14 + (16×3)` = **`63 u`**.\n• **Q22 (`CH₄`)**: `12 + (1×4)` = **`16 u`**.\n• **Q23 (`KCl`)**: `39 + 35.5` = **`74.5 u`**.\n• **Q24 (`Mg(OH)₂`)**: `24 + 2×(16 + 1)` = **`58 u`**!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n• **Q21 (`HNO₃`)**: **`63 u`** | **Q22 (`CH₄`)**: **`16 u`** | **Q23 (`KCl`)**: **`74.5 u`** | **Q24 (`Mg(OH)₂`)**: **`58 u`**!' },
    },
  ],
  exercises: [
    {
      num: '1',
      q: { en: 'Element **`A`** has `1 e⁻` in its `3rd` shell (`K,L,M`). Element **`B`** has `6 e⁻` in its `2nd` shell (`K,L`). Find `(i)–(vi)` (`ihsc1an ✓`).', hi: 'तत्व `क (A)` के तीसरे कोश में `1 e⁻` व तत्व `ख (B)` के दूसरे कोश में `6 e⁻` हैं — आयन, आबंध व यौगिक सूत्र बताइए (`उत्तरमाला सत्यापित ✓`)।' },
      a: { en: '**Verified Solution (`ihsc1an ✓`)**: `(i)` A **loses `1 e⁻`** | `(ii)` **Cation `A⁺`** | `(iii)` B **gains `2 e⁻`** | `(iv)` **Anion `B²⁻`** | `(v)` **Ionic bond** | `(vi)` Criss-cross (`A⁺, B²⁻`) = **`A₂B`** (`just like Na₂O!`).', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**: `(i)` A **1 इलेक्ट्रॉन त्यागेगा** | `(ii)` **धनायन `A⁺`** | `(iii)` B **2 इलेक्ट्रॉन ग्रहण करेगा** | `(iv)` **ऋणायन `B²⁻`** | `(v)` **आयनिक आबंध** | `(vi)` सूत्र **`A₂B`**!' },
    },
    {
      num: '2',
      q: { en: 'Element `F` (`च`) has `6` valence e⁻ forming diatomic `F₂`; element `G` (`छ`) has `2 e⁻` in `2nd` shell. Find bonding & molecule structures.', hi: 'तत्व `च` के बाह्यतम कोश में `6 e⁻` हैं और द्विपरमाणुक अणु बनाता है; `छ` के दूसरे कोश में `2 e⁻` हैं। दोनों आबंध बताइए।' },
      a: { en: '• `F (Ch)` needs `2 e⁻` for octet so two `F` share **2 electron pairs** forming **`F = F` Double Covalent Bond** (`like O₂`).\n• `G (Chh)` (`Z=4`, config `2,2` -> `2` valence `e⁻`) transfers `2 e⁻` to `F` (`gains 2 e⁻`) forming **Ionic compound `GF` (`like BeO`!)**.', hi: '• तत्व `च` अष्टक पूर्ण करने हेतु 2-2 इलेक्ट्रॉन साझा कर **द्वि-सहसंयोजी अणु (`O=O` जैसा)** बनाता है।\n• तत्व `छ` (`विन्यास 2,2`) अपने 2 संयोजकता इलेक्ट्रॉन `च` को स्थानांतरित कर **आयनिक यौगिक `छच` (`BeO` जैसा)** बनाता है!' },
    },
    {
      num: '3',
      q: { en: 'To build an ionic compound with total `+6` and `−6` charge, pick the correct ion pair (`ihsc1an ✓`): (`i`) `2 Al³⁺, 3 Cl⁻` (`ii`) `3 Mg²⁺, 1 PO₄³⁻` (`iii`) `2 Fe³⁺, 3 O²⁻` (`iv`) `3 Ca²⁺, 2 SO₄²⁻`.', hi: 'कुल धन आवेश `6+` व ऋण आवेश `6−` वाला आयनिक यौगिक चुनिए (`उत्तरमाला सत्यापित ✓`): (`i`) `2Al³⁺, 3Cl⁻` (`ii`) `3Mg²⁺, 1PO₄³⁻` (`iii`) `2Fe³⁺, 3O²⁻` (`iv`) `3Ca²⁺, 2SO₄²⁻`।' },
      a: { en: '**Verified Answer: `(iii)` `2 Fe³⁺ and 3 O²⁻` (`Fe₂O₃`)!** Check charges: `2 × (+3) = +6` and `3 × (−2) = −6` (`perfect +6 / −6 electrical neutrality`!).', hi: '**सत्यापित उत्तर: `(iii)` `2 Fe³⁺ और 3 O²⁻` (`Fe₂O₃`)!** कुल आवेश: `2×(+3) = +6` एवं `3×(−2) = −6`!' },
    },
    {
      num: '4',
      q: { en: 'Select the TRUE statement (`correcting the false ones`, `ihsc1an ✓`): `(i)` elements made of molecules (`ii`) compound molecule has identical atoms (`iii`) `N₂` has 3 N atoms (`iv`) water has 2 H covalently bonded to 1 O.', hi: 'सही कथन चुनिए व गलत को सुधारिए (`उत्तरमाला सत्यापित ✓`)।' },
      a: { en: '**Verified Answer: `(iv)` is TRUE!** Corrections: `(i)` Elements consist of **same-type atoms** (many form molecules too); compounds consist of molecules/lattices of *different* elements. `(ii)` Compound molecules ALWAYS contain **different elements**. `(iii)` `N₂` has **2 N atoms** (`diatomic`), NOT 3.', hi: '**सत्यापित उत्तर: `(iv)` सत्य है!** सुधार: `(i)` तत्व एक ही प्रकार के परमाणुओं से तथा यौगिक भिन्न तत्वों के संयोजन से बनते हैं; `(ii)` यौगिक अणु में **विभिन्न** तत्वों के परमाणु होते हैं; `(iii)` नाइट्रोजन गैस (`N₂`) के एक अणु में **2** (3 नहीं) नाइट्रोजन परमाणु होते हैं!' },
    },
    {
      num: '5',
      q: { en: 'Write chemical formulae (`ihsc1an ✓`): `(i)` Aluminium nitrate, `(ii)` Calcium oxide, `(iii)` Ferric oxide.', hi: 'रासायनिक सूत्र लिखिए (`उत्तरमाला सत्यापित ✓`): `(i)` ऐलुमिनियम नाइट्रेट, `(ii)` कैल्सियम ऑक्साइड, `(iii)` फेरिक ऑक्साइड।' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n`(i)` **`Al(NO₃)₃`** (`Al³⁺, NO₃⁻`) | `(ii)` **`CaO`** (`Ca²⁺, O²⁻`) | `(iii)` **`Fe₂O₃`** (`Fe³⁺, O²⁻`).', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n`(i)` **`Al(NO₃)₃`** | `(ii)` **`CaO`** | `(iii)` **`Fe₂O₃`**!' },
    },
    {
      num: '6',
      q: { en: 'Write formulae for ion pairs (`ihsc1an ✓`): `(i) Ca²⁺ + Br⁻`, `(ii) Al³⁺ + CO₃²⁻`, `(iii) K⁺ + SO₄²⁻`, `(iv) NH₄⁺ + Cl⁻`.', hi: 'आयन युग्मों से बने सूत्र लिखिए (`उत्तरमाला सत्यापित ✓`): `(i)` Ca²⁺/Br⁻, `(ii)` Al³⁺/CO₃²⁻, `(iii)` K⁺/SO₄²⁻, `(iv)` NH₄⁺/Cl⁻।' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n`(i)` **`CaBr₂`** | `(ii)` **`Al₂(CO₃)₃`** | `(iii)` **`K₂SO₄`** | `(iv)` **`NH₄Cl`**.', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n`(i)` **`CaBr₂`** | `(ii)` **`Al₂(CO₃)₃`** | `(iii)` **`K₂SO₄`** | `(iv)` **`NH₄Cl`**!' },
    },
    {
      num: '7',
      q: { en: 'In `Fig 9.18`, which Bohr shell diagram correctly shows Chloride ion **`Cl⁻`** (`Z = 17` protons)? (`ihsc1an ✓`)', hi: 'चित्र 9.18 में कौन-सा आरेख **`Cl⁻`** आयन (`Z = 17`) को सही दर्शाता है? (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Answer: `(ii)` (`2, 8, 8` = `18 electrons` with `17 p⁺` in nucleus)!** Neutral `Cl` (`2,8,7`) gained 1 `e⁻` filling M-shell to 8 (`17 p⁺, 18 e⁻ -> net −1`).', hi: '**सत्यापित उत्तर: `(ii)` (`कक्ष विन्यास 2, 8, 8` = `18 e⁻`, नाभिक `17p⁺`)**!' },
    },
    {
      num: '8',
      q: { en: 'Calculate Formula Unit Mass (`ihsc1an ✓`): `(i)` Ammonium nitrate (`NH₄NO₃`), `(ii)` Phosphoric acid (`H₃PO₄`), `(iii)` Baking soda (`NaHCO₃`). (`P=31 u`)', hi: 'सूत्र इकाई द्रव्यमान ज्ञात कीजिए (`उत्तरमाला सत्यापित ✓`): `(i) NH₄NO₃`, `(ii) H₃PO₄`, `(iii) NaHCO₃`।' },
      a: { en: '**Verified Solutions (`ihsc1an ✓`)**:\n`(i)` **`NH₄NO₃`**: `14 + 4(1) + 14 + 3(16)` = **`80 u`**.\n`(ii)` **`H₃PO₄`**: `3(1) + 31 + 4(16)` = **`98 u`**.\n`(iii)` **`NaHCO₃`**: `23 + 1 + 12 + 3(16)` = **`84 u`**!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**:\n`(i)` **`80 u`** (`NH₄NO₃`) | `(ii)` **`98 u`** (`H₃PO₄`) | `(iii)` **`84 u`** (`NaHCO₃`)!' },
    },
    {
      num: '9',
      q: { en: 'Write compound formulae (`ihsc1an ✓`): `(i)` Mg + N, `(ii)` Li + N, `(iii)` Na + S, `(iv)` Al + O.', hi: 'संयोजन से बने सूत्र लिखिए (`उत्तरमाला सत्यापित ✓`): `(i)` Mg व N, `(ii)` Li व N, `(iii)` Na व S, `(iv)` Al व O।' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n`(i)` **`Mg₃N₂`** (`Mg²⁺, N³⁻`) | `(ii)` **`Li₃N`** (`Li⁺, N³⁻`) | `(iii)` **`Na₂S`** (`Na⁺, S²⁻`) | `(iv)` **`Al₂O₃`** (`Al³⁺, O²⁻`).', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**:\n`(i)` **`Mg₃N₂`** | `(ii)` **`Li₃N`** | `(iii)` **`Na₂S`** | `(iv)` **`Al₂O₃`**!' },
    },
    {
      num: '10',
      q: { en: 'Complete `Table 9.3` Cross Grid pairing `NH₄⁺, Li⁺, Al³⁺, Cu²⁺` with `NO₃⁻, SO₄²⁻, PO₄³⁻` (`ihsc1an ✓`).', hi: 'तालिका 9.3 (`NH₄⁺, Li⁺, Al³⁺, Cu²⁺` × `NO₃⁻, SO₄²⁻, PO₄³⁻`) के सभी 12 सूत्र पूर्ण कीजिए (`उत्तरमाला सत्यापित ✓`)।' },
      a: { en: '**Verified Complete 12-Cell Grid (`ihsc1an ✓`)**:\n• **`NH₄⁺`**: **`NH₄NO₃`**, **`(NH₄)₂SO₄`**, **`(NH₄)₃PO₄`**\n• **`Li⁺`**: **`LiNO₃`**, **`Li₂SO₄`**, **`Li₃PO₄`**\n• **`Al³⁺`**: **`Al(NO₃)₃`**, **`Al₂(SO₄)₃`**, **`AlPO₄`**\n• **`Cu²⁺`**: **`Cu(NO₃)₂`**, **`CuSO₄`**, **`Cu₃(PO₄)₂`**!', hi: '**संपूर्ण सत्यापित तालिका 9.3 (`उत्तरमाला ✓`)**:\n• **`NH₄⁺`**: `NH₄NO₃` | `(NH₄)₂SO₄` | `(NH₄)₃PO₄`\n• **`Li⁺`**: `LiNO₃` | `Li₂SO₄` | `Li₃PO₄`\n• **`Al³⁺`**: `Al(NO₃)₃` | `Al₂(SO₄)₃` | `AlPO₄`\n• **`Cu²⁺`**: `Cu(NO₃)₂` | `CuSO₄` | `Cu₃(PO₄)₂`!' },
    },
    {
      num: '11',
      q: { en: '`5.3 g` Sodium Carbonate reacts with `6.0 g` Acetic Acid producing `2.2 g` `CO₂`, `0.9 g` Water & `8.2 g` Sodium Acetate. Verify Conservation of Mass!', hi: '`5.3 g` सोडियम कार्बोनेट + `6.0 g` ऐसीटिक अम्ल → `2.2 g CO₂` + `0.9 g` जल + `8.2 g` सोडियम ऐसीटेट। द्रव्यमान संरक्षण सत्यापित करें!' },
      a: { en: '• **Reactants total** = `5.3 + 6.0` = **`11.3 g`**.\n• **Products total** = `2.2 + 0.9 + 8.2` = **`11.3 g`**.\nBoth match exactly (`11.3 g = 11.3 g`) -> **Law of Conservation of Mass confirmed!**', hi: '• **अभिकारक योग** = `5.3 + 6.0` = **`11.3 g`** | **उत्पाद योग** = `2.2 + 0.9 + 8.2` = **`11.3 g`** — दोनों ठीक समान (`द्रव्यमान संरक्षण सत्यापित!`)!' },
    },
    {
      num: '12',
      q: { en: 'A species has `11 protons`, `12 neutrons`, `10 electrons` (`ihsc1an ✓`): find `(i)` `Z` & `A`, `(ii)` ion type, `(iii)` configuration, `(iv)` name.', hi: 'किसी स्पीशीज में `11` प्रोटॉन, `12` न्यूट्रॉन व `10` इलेक्ट्रॉन हैं (`उत्तरमाला सत्यापित ✓`): `(i) Z व A`, `(ii)` प्रकृति, `(iii)` विन्यास व `(iv)` नाम लिखें।' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n`(i)` **`Z = 11`**, **`A = 11 + 12 = 23`** |\n`(ii)` **Cation (`धनायन`, net `+1`)** |\n`(iii)` **`2, 8`** (`10 e⁻`) |\n`(iv)` **Sodium cation (`Na⁺`)**!', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**: `(i)` **`Z = 11, A = 23`** | `(ii)` **धनायन** | `(iii)` **`2, 8`** | `(iv)` **सोडियम धनायन (`Na⁺`)**!' },
    },
    {
      num: '13',
      q: { en: 'Elements `A (2,8,5)` & `B (2,8,7)` (`ihsc1an ✓`): `(i)` More reactive? `(ii)` Bond type when reacting together? `(iii)` Compound formula?', hi: 'तत्व `क (2, 8, 5)` व `ख (2, 8, 7)` के लिए बताइए (`उत्तरमाला सत्यापित ✓`): `(i)` अधिक अभिक्रियाशील, `(ii)` आबंध प्रकार, `(iii)` सूत्र।' },
      a: { en: '**Verified Answers (`ihsc1an ✓`)**:\n`(i)` **`B (2,8,7)` (`ख`, needs only `1 e⁻` to complete octet!)** is more reactive.\n`(ii)` Both are non-metals -> **Covalent Bond** by sharing electrons.\n`(iii)` `A` valency = `3`, `B` valency = `1` -> **`AB₃`** (`like PCl₃`!).', hi: '**सत्यापित उत्तर (`उत्तरमाला ✓`)**: `(i)` **तत्व ख (`2,8,7`)** अधिक सक्रिय | `(ii)` इलेक्ट्रॉन साझेदारी से **सहसंयोजी आबंध** | `(iii)` सूत्र **`AB₃`** (`PCl₃ जैसा`!)।' },
    },
    {
      num: '14',
      q: { en: 'Assertion: Molten Copper Sulphate conducts electricity, solid does not. Reason: Ions are fixed in molten state and free to move in solid state (`ihsc1an ✓`).', hi: 'अभिकथन: गलित अवस्था में कॉपर सल्फेट विद्युत चालन करता है, ठोस में नहीं। कारण: गलित में आयन नियत जबकि ठोस में स्वतंत्र गति करते हैं। (`उत्तरमाला सत्यापित ✓`)' },
      a: { en: '**Verified Answer: `(iii)` — Assertion is TRUE, Reason is FALSE!** Exact opposite of Reason is true (`ions stay locked rigidly in solid crystals and break FREE to move in molten/aqueous states!`).', hi: '**सत्यापित उत्तर: `(iii)` — अभिकथन सत्य है, परंतु कारण असत्य है!** क्योंकि ठोस में आयन नियत बंधे होते हैं और गलित अवस्था में ही स्वतंत्र गति कर पाते हैं!' },
    },
    {
      num: '15',
      q: { en: 'Given protons: `²⁷Al (13 p⁺)`, `⁸⁰Br⁻ (35 p⁺)`, `²⁰¹Hg²⁺ (80 p⁺)` — find exact **electrons & neutrons** in each (`ihsc1an ✓`).', hi: '`²⁷Al (13 p⁺)`, `⁸⁰Br⁻ (35 p⁺)`, `²⁰¹Hg²⁺ (80 p⁺)` कणों में इलेक्ट्रॉन व न्यूट्रॉन संख्या ज्ञात कीजिए (`उत्तरमाला सत्यापित ✓`)।' },
      a: { en: '**Verified Solutions (`ihsc1an ✓`)**:\n• **`²⁷Al`**: `e⁻ = 13`, `n⁰ = 27 − 13` = **`14`** (`13 e⁻, 14 n⁰`).\n• **`⁸⁰Br⁻`**: `e⁻ = 35 + 1` = **`36`**, `n⁰ = 80 − 35` = **`45`** (`36 e⁻, 45 n⁰`).\n• **`²⁰¹Hg²⁺`**: `e⁻ = 80 − 2` = **`78`**, `n⁰ = 201 − 80` = **`121`** (`78 e⁻, 121 n⁰`)!', hi: '**सत्यापित हल (`उत्तरमाला ✓`)**:\n• **`²⁷Al`**: **इलेक्ट्रॉन `13`, न्यूट्रॉन `14`** |\n• **`⁸⁰Br⁻`**: **इलेक्ट्रॉन `36`, न्यूट्रॉन `45`** |\n• **`²⁰¹Hg²⁺`**: **इलेक्ट्रॉन `78`, न्यूट्रॉन `121`**!' },
    },
  ],
  flashcards: [
    { front: { en: 'Conservation of Mass (Year, Scientist & Open vs Sealed Trap)?', hi: 'द्रव्यमान संरक्षण नियम (वैज्ञानिक, वर्ष व खुले बनाम बंद फ्लास्क का रहस्य)?' }, back: { en: '**Antoine Lavoisier (1789)**: Reactants mass matches Products! **Open flask drops ONLY if gas (`CO₂`) escapes unweighed** (`Act 9.2`). Tied balloon / `BaSO₄↓` preserves reading!', hi: '**लवाइजिए (1789)**: अभिकारक व उत्पाद द्रव्यमान समान! खुले में केवल `CO₂` गैस उड़ने से भार कम दिखता है; बंद गुब्बारा / `BaSO₄↓` बराबर रखता है!' } },
    { front: { en: 'Constant Proportions (`Proust`) + 4 Ratios (`H₂O, CO₂, CO, Hingula`)?', hi: 'स्थिर अनुपात (`प्राउस्ट`) व `H₂O, CO₂, CO, हिंगुला` के अनुपात?' }, back: { en: 'Compounds ONLY (`NOT mixtures!`): **`H₂O = 1:8`** | **`CO₂ = 3:8`** | **`CO = 3:4`** | **`NH₃ = 14:3`** | **`Cinnabar HgS = 86.22% Hg : 13.78% S`** regardless of source!', hi: 'केवल शुद्ध यौगिकों पर लागू (`मिश्रण नहीं`): **`H₂O = 1:8`**, **`CO₂ = 3:8`**, **`CO = 3:4`**, **`NH₃ = 14:3`**, **`सिनेबार 86.22% Hg : 13.78% S`**!' } },
    { front: { en: 'Dalton’s Atomic Theory Year (`1808`) & Which Laws Each Explains?', hi: 'डाल्टन सिद्धांत (`1808`) से कौन-से दोनों नियम स्पष्ट होते हैं?' }, back: { en: 'Published **`1808`**. *Indivisible atoms neither created nor destroyed* -> **Conservation of Mass**; *Atoms combine in whole-number ratios* -> **Constant Proportions** (`NTPC 2025`)!', hi: 'प्रकाशन **`1808`**। परमाणु न बनें न नष्ट हों → **द्रव्यमान संरक्षण**; सरल पूर्णांकों में संयोग → **स्थिर अनुपात नियम** (`NTPC PYQ`)!' } },
    { front: { en: 'Covalent Single vs Double Bonds + Naming Prefixes (`N₂O₅, SF₆, H₂S`)?', hi: 'एकल बनाम द्वि-आबंध एवं सहसंयोजी उपसर्ग नियम (`N₂O₅, SF₆, H₂S`)?' }, back: { en: '**Single**: `H₂, Cl₂, HCl, H₂O`; **Double**: `O=O`, `O=C=O` (`CO₂`). Prefixes: `mono..hexa` (`drop o/a before O: N₂O₅ pentoxide`; **NO prefix on initial `H`** -> `H₂S = Hydrogen sulphide`)!', hi: '**एकल**: `H₂, Cl₂, H₂O`; **द्वि-आबंध**: `O₂, CO₂`। उपसर्ग में `o/a` स्वर से पूर्व हटें (`N₂O₅ पेंटॉक्साइड`); **प्रारंभिक `H` पर उपसर्ग नहीं** (`H₂S`)!' } },
    { front: { en: 'Ionic Crystal Structure (`NaCl 3D Lattice`) & Formula Unit Reason?', hi: 'आयनिक यौगिकों की 3-D जालक संरचना व सूत्र इकाई कारण?' }, back: { en: 'Metals give e⁻ (**Cation `+`**) to Non-metals (**Anion `−`**). `NaCl` makes NO isolated molecules — every **`Na⁺` is surrounded by 6 `Cl⁻`** in a rigid **3-D lattice**!', hi: 'धातु धनायन (`+`) व अधातु ऋणायन (`−`) बनाती हैं। `NaCl` एकल अणु नहीं बल्कि **3-D क्रिस्टल जालक (`1 Na⁺ : 6 Cl⁻`)** बनाता है!' } },
    { front: { en: 'Polyatomic Ion Formula Rules (`Brackets ()` & Equal Charge Cancellation)?', hi: 'बहुपरमाणुक आयन कोष्ठक `()` नियम व समान संयोजकता सरलीकरण?' }, back: { en: 'Wrap **`>= 2` polyatomic ions in `()`** -> **`Al(OH)₃`**, **`Al₂(SO₄)₃`**, **`(NH₄)₂SO₄`**! Divide common factors (`Mg²⁺O²⁻ -> MgO`, `Ca²⁺CO₃²⁻ -> CaCO₃`). NEVER write `+`/`−` in formula!', hi: 'दो या अधिक बहुपरमाणुक आयन पर **`()` अनिवार्य** (`Al(OH)₃, Al₂(SO₄)₃, (NH₄)₂SO₄`); समान संयोजकता काटें (`MgO, CaCO₃`)!' } },
    { front: { en: 'Variable Valency Ions (`Fe²⁺/Fe³⁺`, `Cu⁺/Cu²⁺`) & `NH₄⁺`?', hi: 'परिवर्ती संयोजकता आयन (`फेरस/फेरिक`, `क्यूप्रस/क्यूप्रिक`) एवं `NH₄⁺`?' }, back: { en: '**`Fe²⁺` Ferrous vs `Fe³⁺` Ferric (`FeCl₃, Fe₂O₃`)** | **`Cu⁺` Cuprous (`Cu₂O`) vs `Cu²⁺` Cupric (`CuSO₄`)** | **`NH₄⁺` Ammonium** (`+1 polyatomic cation!`).', hi: '**फेरस `Fe²⁺` / फेरिक `Fe³⁺` (`FeCl₃, Fe₂O₃`)** | **क्यूप्रस `Cu⁺` (`Cu₂O`) / क्यूप्रिक `Cu²⁺`** | **अमोनियम `NH₄⁺`** (+1 बहुपरमाणुक धनायन)!' } },
    { front: { en: 'Act 9.4 Solubility & 9V Bulb Conductivity (`Ionic vs Sugar/Camphor`)?', hi: 'क्र. 9.4 विलेयता व `9V` बल्ब चालकता परीक्षा सारांश?' }, back: { en: '**Ionic (`NaCl, CuSO₄`)**: water-soluble, **HIGH MP**, solid = **INSULATOR**, **molten/aq = CONDUCTOR**! **Covalent**: Camphor/Naphthalene dissolve in kerosene/petrol; **aqueous Sugar = ZERO ions = Bulb OFF**!', hi: '**आयनिक (`NaCl, CuSO₄`)**: जल में विलेय, उच्च गलनांक, ठोस कुचालक, **गलित/जलीय सुचालक**! **चीनी जल में घुलकर भी आयन न बनाने से कुचालक (`बल्ब बंद`)**!' } },
    { front: { en: 'Top 6 Exam Formula Unit & Molecular Masses (`u`) By Heart?', hi: 'शीर्ष 6 आण्विक व सूत्र इकाई द्रव्यमान (`u`) सीधे कंठस्थ रखें!' }, back: { en: '**`H₂O=18 u`** • **`CO₂=44 u`** • **`Mg(OH)₂=58 u`** • **`Na₂O=62 u`** • **`HNO₃=63 u`** • **`NH₄NO₃=80 u`** • **`CaCl₂=111 u`** • **`(NH₄)₂SO₄=132 u`** • **`Ca(NO₃)₂=164 u`**!', hi: '**`H₂O=18u`** • **`CO₂=44u`** • **`Mg(OH)₂=58u`** • **`Na₂O=62u`** • **`HNO₃=63u`** • **`NH₄NO₃=80u`** • **`CaCl₂=111u`** • **`(NH₄)₂SO₄=132u`** • **`Ca(NO₃)₂=164u`**!' } },
    { front: { en: 'Electron/Neutron Ion Trick (`Ex Q12 & Q15: ⁸⁰Br⁻, ²⁰¹Hg²⁺`)?', hi: 'आयन में इलेक्ट्रॉन व न्यूट्रॉन निकालने की शॉर्टकट ट्रिक (`अभ्यास Q12, Q15`)?' }, back: { en: 'Protons `p⁺ = Z` **never change**! **Neutrons `n⁰ = A − Z`**. Cation (`+k`) subtracts `k` e⁻ (`²⁰¹Hg²⁺: 80−2 = 78 e⁻, 121 n⁰`); Anion (`−k`) adds `k` e⁻ (`⁸⁰Br⁻: 35+1 = 36 e⁻, 45 n⁰`)!', hi: 'प्रोटॉन `Z` नहीं बदलते! **न्यूट्रॉन `= A − Z`**। **धनायन (`+`) में इलेक्ट्रॉन घटें** (`Hg²⁺ = 78 e⁻`), **ऋणायन (`−`) में बढ़ें** (`Br⁻ = 36 e⁻`)!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-c9c9-1',
      examTag: 'RRB ALP 2025 Cycle (Shift 5 Bilingual)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.4–9.5): Definition of Valency',
      question: {
        en: 'Which statement best describes the valency of an element?',
        hi: 'निम्नलिखित में से कौन-सा कथन किसी तत्व की संयोजकता का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: ['Total number of nucleons in the nucleus', 'Total number of protons in the nucleus of an atom', 'Difference between number of neutrons and protons in an atom', 'The combining capacity based on electrons lost, gained, or shared'],
        hi: ['यह नाभिक में न्यूक्लिऑन की कुल संख्या होती है', 'यह परमाणु के नाभिक में प्रोटॉन की कुल संख्या होती है', 'यह परमाणु में न्यूट्रॉन और प्रोटॉन की संख्या के बीच का अंतर होता है', 'यह त्यागे गए, ग्रहण किए गए या साझा किए गए इलेक्ट्रॉनों पर आधारित संयोजन क्षमता होती है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Valency represents an atom’s **combining capacity** determined by how many valence electrons it loses, gains, or shares to complete an octet/duplet (`Sec 9.4–9.5`).',
        hi: 'संयोजकता किसी तत्व की **संयोजन क्षमता** है जो अष्टक पूर्ण करने हेतु त्यागे, ग्रहण किए या साझा किए गए इलेक्ट्रॉनों पर निर्भर करती है।',
      },
    },
    {
      id: 'pyq-c9c9-2',
      examTag: 'RRB Group D 2025 (Shift 16 Bilingual)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Act 9.2): Open-System Gas Escape & Mass Conservation',
      question: {
        en: 'In a chemical reaction, `12 g` carbon reacts completely with `32 g` oxygen to form carbon dioxide. If only `40 g` of carbon dioxide is collected, what is the correct conclusion based on the Law of Conservation of Mass?',
        hi: 'एक रासायनिक अभिक्रिया में `12 g` कार्बन `32 g` ऑक्सीजन के साथ पूर्णतः अभिक्रिया करके कार्बन डाइऑक्साइड बनाता है। यदि केवल `40 g` `CO₂` एकत्रित होती है, तो द्रव्यमान संरक्षण नियम से सही निष्कर्ष क्या है?',
      },
      options: {
        en: ['The reaction is incomplete because 4 g mass is destroyed', 'Law of conservation does not apply to gas formation', 'Mass is always lost as energy so final mass drops', 'Carbon dioxide gas escaped during the reaction, so mass was not fully collected'],
        hi: ['अभिक्रिया अपूर्ण है क्योंकि 4 g द्रव्यमान नष्ट हो गया', 'द्रव्यमान संरक्षण नियम गैस निर्माण पर लागू नहीं होता', 'द्रव्यमान ऊर्जा बनकर घट जाता है', 'अभिक्रिया के दौरान कार्बन डाइऑक्साइड मुक्त हो गई, इसलिए पूरा द्रव्यमान एकत्रित नहीं हुआ'],
      },
      correctIndex: 3,
      solution: {
        en: 'Expected `CO₂ = 12 + 32 = 44 g`! Collecting `40 g` proves `4 g CO₂` escaped into air (exactly `Activity 9.2 Setup 1` in NCERT Ch 9 p.164!).',
        hi: 'कुल बनती `12 + 32 = 44 g` पर `40 g` मिलने का अर्थ है कि `4 g` `CO₂` गैस बाहर निकल गई (`क्रियाकलाप 9.2 व्यवस्था 1` जैसा!).',
      },
    },
    {
      id: 'pyq-c9c9-3',
      examTag: 'RRB Group D 2025 (Shift 2 Bilingual)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.1): Closed Glass Vessel Conservation of Mass',
      question: {
        en: 'A glass vessel contains a chemical reaction where no gas escapes or enters. According to the Law of Conservation of Mass, which situation is most accurate?',
        hi: 'किसी काँच के पात्र में रासायनिक अभिक्रिया होती है जिसमें न तो कोई गैस बाहर निकलती है और न ही प्रवेश करती है। द्रव्यमान संरक्षण के नियम के अनुसार कौन-सी स्थिति सबसे सटीक है?',
      },
      options: {
        en: ['Total mass after the reaction increases', 'Total mass after the reaction decreases', 'Mass before reaction is less than mass after reaction', 'Total mass before and after the reaction remains unchanged'],
        hi: ['अभिक्रिया के बाद कुल द्रव्यमान बढ़ जाता है', 'अभिक्रिया के बाद कुल द्रव्यमान कम हो जाता है', 'पहले का कुल द्रव्यमान बाद से कम होता है', 'अभिक्रिया से पहले और बाद का कुल द्रव्यमान अपरिवर्तित रहता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Lavoisier’s Law (`1789`): in a closed/sealed system (`Act 9.2 Setup 2`), total mass of reactants equals total mass of products!',
        hi: 'संवृत निकाय में अभिक्रिया से पहले और बाद का कुल द्रव्यमान सदैव बराबर व अपरिवर्तित रहता है (`लवाइजिए 1789`)।',
      },
    },
    {
      id: 'pyq-c9c9-4',
      examTag: 'RRB Group D 2025 (Shift 26 Bilingual)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Act 9.2): Corking / Sealing Reaction Flasks',
      question: {
        en: 'Why is the reaction flask corked during experiments verifying conservation of mass?',
        hi: 'द्रव्यमान संरक्षण को सत्यापित करने वाले प्रयोगों के दौरान अभिक्रिया फ्लास्क को कॉर्क या गुब्बारे से बंद क्यों किया जाता है?',
      },
      options: {
        en: ['To allow air circulation', 'To cool reaction mixture', 'To increase reaction speed', 'To prevent loss of matter'],
        hi: ['वायु परिसंचरण के लिए', 'मिश्रण को ठंडा करने के लिए', 'अभिक्रिया वेग बढ़ाने के लिए', 'पदार्थ की हानि (गैस पलायन) को रोकने के लिए'],
      },
      correctIndex: 3,
      solution: {
        en: 'Corking or sealing with a balloon (`Act 9.2 Setup 2`) stops produced gases from escaping so total mass stays on the balance (`p.165`).',
        hi: 'कॉर्क या गुब्बारा उत्पन्न गैस रूपी पदार्थ को बाहर जाने से रोककर कुल द्रव्यमान को तुला पर संरक्षित रखता है!',
      },
    },
    {
      id: 'pyq-c9c9-5',
      examTag: 'RRB Group D 2025 (Shift 18 Bilingual)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.1): Reaction Violating Conservation of Mass',
      question: {
        en: 'Which of the following chemical equations violates the Law of Conservation of Mass?',
        hi: 'निम्नलिखित में से कौन-सी अभिक्रिया (असंतुलित होने से) द्रव्यमान संरक्षण के नियम का उल्लंघन करती है?',
      },
      options: {
        en: ['2H₂ + O₂ → 2H₂O', '2Mg + O₂ → MgO', 'Ca + Cl₂ → CaCl₂', 'H₂ + Cl₂ → 2HCl'],
        hi: ['2H₂ + O₂ → 2H₂O', '2Mg + O₂ → MgO', 'Ca + Cl₂ → CaCl₂', 'H₂ + Cl₂ → 2HCl'],
      },
      correctIndex: 1,
      solution: {
        en: '`2Mg + O₂ → MgO` shows 2 Mg & 2 O atoms on the left vs only 1 Mg & 1 O atom on the right (`missing half the mass` — balanced form is `2Mg + O₂ → 2MgO`)!',
        hi: '`2Mg + O₂ → MgO` असंतुलित है (बाएँ 2 Mg, 2 O जबकि दाएँ 1 Mg, 1 O) अतः द्रव्यमान संरक्षण भंग होता दिखता है; सही समीकरण `2Mg + O₂ → 2MgO` है!',
      },
    },
    {
      id: 'pyq-c9c9-6',
      examTag: 'RRB Group D 2025 (Shift 35 Bilingual)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.1): Closed System Observation Violating Mass Law',
      question: {
        en: 'Which observation would violate the Law of Conservation of Mass in a closed system?',
        hi: 'निम्नलिखित में से कौन-सा अवलोकन किसी संवृत (बंद) निकाय में द्रव्यमान संरक्षण नियम के उल्लंघन को दर्शाएगा?',
      },
      options: {
        en: ['The mass of products is less than the mass of reactants', 'A white precipitate forms after mixing solutions', 'The colour of solution changes after reaction', 'The temperature of system increases'],
        hi: ['उत्पादों का द्रव्यमान अभिकारकों के द्रव्यमान से कम होना', 'विलयनों के बाद श्वेत अवक्षेप बनना', 'विलयन का रंग बदलना', 'निकाय के तापमान में वृद्धि होना'],
      },
      correctIndex: 0,
      solution: {
        en: 'In a truly sealed closed system, products mass MUST equal reactants mass (`precipitation as in Act 9.3, colour change, or heat NEVER violate mass conservation`)!',
        hi: 'बंद निकाय में उत्पादों का द्रव्यमान कभी अभिकारकों से कम नहीं हो सकता (`अवक्षेप बनना, रंग या ताप बदलाव सामान्य हैं`)।',
      },
    },
    {
      id: 'pyq-c9c9-7',
      examTag: 'RRB Technician Grade-III 2024 (Shift 9)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.1): Product Mass Calculation',
      question: {
        en: 'During a chemical reaction, `10 g` of substance `A` reacts completely with `15 g` of substance `B` to produce a new compound. By the Law of Conservation of Mass, what will be the total mass of the products?',
        hi: 'एक रासायनिक अभिक्रिया के समय `10 g` पदार्थ A, `15 g` पदार्थ B के साथ पूर्ण अभिक्रिया कर नया यौगिक बनाता है। द्रव्यमान संरक्षण नियम से उत्पाद का कुल द्रव्यमान कितना होगा?',
      },
      options: {
        en: ['10 g', '11 g', '25 g', '16 g'],
        hi: ['10 g', '11 g', '25 g', '16 g'],
      },
      correctIndex: 2,
      solution: {
        en: 'Total Reactant Mass = `10 g + 15 g` = **`25 g`** = Total Product Mass!',
        hi: 'अभिकारकों का कुल द्रव्यमान = `10 + 15` = **`25 g`** = उत्पादों का कुल द्रव्यमान!',
      },
    },
    {
      id: 'pyq-c9c9-8',
      examTag: 'RRB Technician Grade-III 2024 (Shift 23)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.2): Scientist of Constant Proportions',
      question: {
        en: 'Which of the following scientists proposed the "Law of Constant Proportions"?',
        hi: 'निम्नलिखित में से किस वैज्ञानिक ने "स्थिर अनुपात का नियम" प्रस्तावित किया?',
      },
      options: {
        en: ['Ernest Rutherford', 'E. Goldstein', 'J.J. Thomson', 'Joseph Proust'],
        hi: ['अर्नेस्ट रदरफोर्ड', 'ई. गोल्डस्टीन', 'जे. जे. थॉमसन', 'जोसेफ प्राउस्ट'],
      },
      correctIndex: 3,
      solution: {
        en: 'French chemist **Joseph Louis Proust** formulated the Law of Constant / Definite Proportions (`Sec 9.2`, p.167).',
        hi: 'फ्रांसीसी रसायनज्ञ **जोसेफ प्राउस्ट** ने स्थिर अनुपात का नियम (`भाग 9.2`, पृ. 167) प्रतिपादित किया।',
      },
    },
    {
      id: 'pyq-c9c9-9',
      examTag: 'RRB Group D 2025 (Shift 48 Bilingual)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.2): Constant Proportions Violation Check',
      question: {
        en: 'Which of the following observations would violate the Law of Constant Proportions?',
        hi: 'निम्नलिखित में से कौन-सा प्रेक्षण स्थिर अनुपात के नियम का उल्लंघन करेगा?',
      },
      options: {
        en: ['A sample of ammonia with nitrogen & hydrogen in 14:3 mass ratio', 'A sample of magnesium sulphide (`MgS`) with magnesium & sulphur in 4:3 mass ratio', 'A sample of sodium chloride with sodium & chlorine in 23:35.5 mass ratio', 'A sample of water with hydrogen & oxygen in 1:8 mass ratio'],
        hi: ['अमोनिया (`NH₃`) में नाइट्रोजन व हाइड्रोजन 14:3 अनुपात में', 'मैग्नीशियम सल्फाइड (`MgS`) में मैग्नीशियम व सल्फर 4:3 अनुपात में', 'सोडियम क्लोराइड (`NaCl`) में 23:35.5 अनुपात में', 'जल में हाइड्रोजन व ऑक्सीजन 1:8 अनुपात में'],
      },
      correctIndex: 1,
      solution: {
        en: 'Pure `NH₃ = 14:3`, `NaCl = 23:35.5`, `H₂O = 1:8` are exact! True Magnesium Sulphide (`MgS`: `Mg=24 u, S=32 u`) MUST have mass ratio `24:32 =` **`3:4`**, NEVER `4:3`!',
        hi: '`NH₃ (14:3)`, `NaCl (23:35.5)`, `H₂O (1:8)` सही हैं; किंतु `MgS` (`Mg=24, S=32`) में अनुपात **`3:4`** होना चाहिए (`4:3` गलत है)!',
      },
    },
    {
      id: 'pyq-c9c9-10',
      examTag: 'RRB NTPC UG 2025 (Shift 57)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.3): Dalton’s Atomic Theory Publication Year',
      question: {
        en: 'When did John Dalton publish his atomic theory holding that all elements are made of tiny indivisible particles?',
        hi: 'जॉन डाल्टन ने अपना परमाणु सिद्धांत, जिसके अनुसार सभी तत्व सूक्ष्म अविभाज्य कणों से बने हैं, कब प्रकाशित किया था?',
      },
      options: {
        en: ['1808', '1798', '1800', '1803'],
        hi: ['1808', '1798', '1800', '1803'],
      },
      correctIndex: 0,
      solution: {
        en: 'Verbatim NCERT Scientist Box p.168: John Dalton presented his Atomic Theory in the year **`1808`**.',
        hi: 'सटीक `NCERT पृ. 168`: जॉन डाल्टन ने सन् **`1808`** में अपना प्रसिद्ध परमाणु सिद्धांत प्रस्तुत किया।',
      },
    },
    {
      id: 'pyq-c9c9-11',
      examTag: 'RRB NTPC UG 2025 (Shift 12)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.3): Dalton Postulate Explaining Mass Conservation',
      question: {
        en: 'Which postulate of Dalton’s atomic theory reflects the Law of Conservation of Mass?',
        hi: 'डाल्टन के परमाणु सिद्धांत की कौन-सी परिकल्पना द्रव्यमान संरक्षण के नियम को दर्शाती है?',
      },
      options: {
        en: ['Atoms cannot be created or destroyed in a chemical reaction', 'All matter is made of indivisible particles called atoms', 'Atoms combine in simple whole-number ratios', 'Atoms of different elements have different masses'],
        hi: ['रासायनिक अभिक्रिया में परमाणुओं का न तो निर्माण किया जा सकता है न विनाश', 'सभी द्रव्य अविभाज्य परमाणुओं से बने हैं', 'परमाणु सरल पूर्णांक अनुपात में संयोजित होते हैं', 'विभिन्न तत्वों के परमाणुओं का द्रव्यमान भिन्न होता है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Since atoms are neither created nor destroyed (`only rearranged`), total mass stays invariant (`Sec 9.3`, p.168)!',
        hi: 'अभिक्रिया में परमाणु न बनते हैं न नष्ट होते हैं (केवल पुनर्व्यवस्थित होते हैं) — यही द्रव्यमान संरक्षण का आधार है!',
      },
    },
    {
      id: 'pyq-c9c9-12',
      examTag: 'RRB NTPC UG 2025 (Shift 38)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.3): Dalton Postulate Explaining Definite Proportions',
      question: {
        en: 'Which postulate of Dalton’s atomic theory explains the Law of Definite Proportions?',
        hi: 'डाल्टन के परमाणु सिद्धांत की कौन-सी परिकल्पना निश्चित अनुपात के नियम की व्याख्या करती है?',
      },
      options: {
        en: ['Atoms are indivisible and indestructible', 'Atoms of different elements have different masses', 'Atoms of same element are identical', 'Atoms combine in simple whole-number ratios to form compounds'],
        hi: ['परमाणु अविभाज्य व अविनाशी होते हैं', 'विभिन्न तत्वों के द्रव्यमान भिन्न होते हैं', 'समान तत्व के परमाणु समान होते हैं', 'परमाणु सरल पूर्ण-संख्या अनुपात में संयोजित होकर यौगिक बनाते हैं'],
      },
      correctIndex: 3,
      solution: {
        en: 'Atoms of elements combine in fixed simple whole-number ratios (`e.g. 2 H : 1 O in H₂O`), fixing constituent element masses (`Sec 9.3`)!',
        hi: 'किसी यौगिक में परमाणु सदैव सरल पूर्णांक संख्या में संयोग करते हैं, जिससे तत्वों का द्रव्यमान अनुपात स्वतः निश्चित रहता है!',
      },
    },
    {
      id: 'pyq-c9c9-13',
      examTag: 'RRB Group D 2025 (Shift 46)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.3): Dalton Postulate on Different Elements',
      question: {
        en: 'What does Dalton’s atomic theory state about atoms of DIFFERENT elements?',
        hi: 'डाल्टन का परमाणु सिद्धांत विभिन्न तत्वों के परमाणुओं के विषय में क्या बताता है?',
      },
      options: {
        en: ['They are identical in every aspect', 'They have different masses and chemical properties', 'They have different sizes but identical masses', 'They have identical masses but different shapes'],
        hi: ['वे प्रत्येक पक्ष में समान होते हैं', 'उनका द्रव्यमान और रासायनिक गुणधर्म भिन्न-भिन्न होते हैं', 'आकार भिन्न पर द्रव्यमान समान होता है', 'द्रव्यमान समान पर आकृति भिन्न होती है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Verbatim NCERT Postulate 4 (`p.168`): Atoms of different elements possess **different masses and chemical properties**.',
        hi: 'सटीक `NCERT अभिगृहीत 4 (पृ. 168)`: विभिन्न तत्वों के परमाणुओं के **द्रव्यमान एवं रासायनिक गुणधर्म भिन्न-भिन्न** होते हैं।',
      },
    },
    {
      id: 'pyq-c9c9-14',
      examTag: 'RRB Group D 2025 (Shift 27)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.4.2 & 9.5): Oxygen Valency in MgO',
      question: {
        en: 'What is the valency of Oxygen in Magnesium Oxide (`MgO`)?',
        hi: 'मैग्नीशियम ऑक्साइड (`MgO`) में ऑक्सीजन की संयोजकता क्या है?',
      },
      options: {
        en: ['Two (`O²⁻`, gains 2 e⁻)', 'One', 'Three', 'Four'],
        hi: ['दो (`O²⁻`)', 'एक', 'तीन', 'चार'],
      },
      correctIndex: 0,
      solution: {
        en: 'In `MgO`, both `Mg²⁺` and Oxide `O²⁻` carry valency **`2`** (`simplified from Mg₂O₂`, `NCERT p.176 & Table 9.1a`).',
        hi: '`MgO` में `Mg²⁺` व ऑक्साइड `O²⁻` दोनों की संयोजकता **`2`** है (`2 से भाग देकर MgO लिखा गया`, पृ. 176)!',
      },
    },
    {
      id: 'pyq-c9c9-15',
      examTag: 'RRB Group D 2025 (Shift 39)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.5): Deduced Valency From Formulae XCl₃ & X₂O₃',
      question: {
        en: 'An element `X` forms a chloride `XCl₃` and an oxide `X₂O₃`. Based on these formulae, what is the valency of `X`?',
        hi: 'एक तत्व `X` सूत्र `XCl₃` वाला क्लोराइड तथा `X₂O₃` वाला ऑक्साइड बनाता है। इसके आधार पर `X` की संयोजकता कितनी है?',
      },
      options: {
        en: ['3', '1', '2', '4'],
        hi: ['3', '1', '2', '4'],
      },
      correctIndex: 0,
      solution: {
        en: 'Criss-cross: `Cl⁻` (`valency 1`) gives `X₁Cl₃` -> `X` valency = **`3`**; `O²⁻` (`valency 2`) gives `X₂O₃` -> `X` valency = **`3`** (`just like Al³⁺ / Fe³⁺`!).',
        hi: '`XCl₃` में 1 Cl की संयोजकता 1 और `X₂O₃` में O की संयोजकता 2 से स्पष्ट है कि **`X` की संयोजकता `3`** है (`Al` व `Fe³⁺` जैसा)!',
      },
    },
    {
      id: 'pyq-c9c9-16',
      examTag: 'RRB Group D 2025 (Shift 15 Bilingual)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.5): Polyatomic Formula of Aluminium Sulphate',
      question: {
        en: 'A student wants to write the chemical formula for Aluminium Sulphate containing two `Al` atoms, three `S` atoms, and twelve `O` atoms. Which formula is right?',
        hi: 'ऐलुमिनियम सल्फेट का सही रासायनिक सूत्र क्या होगा जिसमें दो ऐलुमिनियम परमाणु, तीन सल्फर परमाणु तथा बारह ऑक्सीजन परमाणु उपस्थित हैं?',
      },
      options: {
        en: ['Al₂SO₄', 'Al₃(SO₄)₂', 'Al₂(SO₄)₃', 'Al(SO₄)₃'],
        hi: ['Al₂SO₄', 'Al₃(SO₄)₂', 'Al₂(SO₄)₃', 'Al(SO₄)₃'],
      },
      correctIndex: 2,
      solution: {
        en: 'Verbatim NCERT Worked Example (`p.177`): `Al³⁺` + `SO₄²⁻` criss-crosses to **`Al₂(SO₄)₃`** (`2 Al, 3 S, 3×4 = 12 O atoms`)!',
        hi: 'सटीक `NCERT पृ. 177 उदाहरण`: `Al³⁺` और `SO₄²⁻` के तिर्यक से **`Al₂(SO₄)₃`** बनता है (`2 Al, 3 S, 12 O`)!',
      },
    },
    {
      id: 'pyq-c9c9-17',
      examTag: 'RRB Technician Grade-III 2024 (Shift 19)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Ex Q10): Ammonium Sulphate Formula',
      question: {
        en: 'What is the correct chemical formula of Ammonium Sulphate?',
        hi: 'अमोनियम सल्फेट का सही रासायनिक सूत्र क्या है?',
      },
      options: {
        en: ['Ca₂SO₄', '(NH₄)SO₄', 'Na₂SO₄', '(NH₄)₂SO₄'],
        hi: ['Ca₂SO₄', '(NH₄)SO₄', 'Na₂SO₄', '(NH₄)₂SO₄'],
      },
      correctIndex: 3,
      solution: {
        en: 'Criss-cross `NH₄⁺` (`+1`) with Sulphate `SO₄²⁻` (`−2`) -> wrap 2 ammonium ions in brackets: **`(NH₄)₂SO₄`** (`NCERT Ex Q10 Table 9.3 ✓`)!',
        hi: '`NH₄⁺ (+1)` तथा `SO₄²⁻ (2−)` के तिर्यक से **`(NH₄)₂SO₄`** बनता है (`तालिका 9.3 सत्यापित ✓`)।',
      },
    },
    {
      id: 'pyq-c9c9-18',
      examTag: 'RRB Technician Grade-III 2024 (Shift 17)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.5): Polyatomic Bracket Formula Ca(OH)₂',
      question: {
        en: 'Which option represents the correct chemical formula of Calcium Hydroxide (`Slaked Lime`)?',
        hi: 'निम्नलिखित में से कौन-सा विकल्प कैल्सियम हाइड्रॉक्साइड (`बुझा हुआ चूना`) का सही रासायनिक सूत्र दर्शाता है?',
      },
      options: {
        en: ['NaOH', 'Mg(OH)₂', 'KOH', 'Ca(OH)₂'],
        hi: ['NaOH', 'Mg(OH)₂', 'KOH', 'Ca(OH)₂'],
      },
      correctIndex: 3,
      solution: {
        en: '`Ca²⁺` (`valency 2`) + Hydroxide `OH⁻` (`valency 1`) requires two `OH⁻` units inside brackets: **`Ca(OH)₂`**!',
        hi: '`Ca²⁺` व `OH⁻` की संयोजकताओं (`2` व `1`) से कोष्ठक सहित **`Ca(OH)₂`** सूत्र बनता है।',
      },
    },
    {
      id: 'pyq-c9c9-19',
      examTag: 'RRB Group D 2025 (Shift 38)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.5 & Ex Q9): Aluminium Oxide Formula',
      question: {
        en: 'Aluminium reacts with oxygen. Which chemical formula represents the product (`Aluminium Oxide`)?',
        hi: 'ऐलुमिनियम ऑक्सीजन के साथ अभिक्रिया करता है। बनने वाले उत्पाद (`ऐलुमिनियम ऑक्साइड`) को कौन-सा रासायनिक सूत्र निरूपित करता है?',
      },
      options: {
        en: ['Al₃O₂', 'Al₂O', 'AlO₂', 'Al₂O₃'],
        hi: ['Al₃O₂', 'Al₂O', 'AlO₂', 'Al₂O₃'],
      },
      correctIndex: 3,
      solution: {
        en: 'NCERT Worked Example (`p.176`) & `Ex Q9(iv)`: `Al³⁺` + `O²⁻` criss-crosses to **`Al₂O₃`**!',
        hi: '`Al³⁺` तथा `O²⁻` के तिर्यक से **`Al₂O₃`** प्राप्त होता है (`पृ. 176 व अभ्यास Q9 iv`)।',
      },
    },
    {
      id: 'pyq-c9c9-20',
      examTag: 'RRB Group D 2025 (Shifts 23 & 45)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.4.2 & 9.6): Ionic Lattice Solid & High Melting Point',
      question: {
        en: 'Which best explains why Sodium Chloride (`NaCl`) is solid at room temperature with a high melting and boiling point?',
        hi: 'सोडियम क्लोराइड (`NaCl`) कक्ष ताप पर ठोस होने के साथ-साथ उच्च गलनांक व क्वथनांक क्यों दर्शाता है?',
      },
      options: {
        en: ['It is held together by weak van der Waals forces', 'It forms discrete molecules held by covalent bonds', 'It conducts electricity in its rigid solid crystal', 'It has strong electrostatic attraction between oppositely charged ions in a 3-D lattice'],
        hi: ['इसमें कमजोर वैन डेर वाल्स बल होते हैं', 'यह सहसंयोजी बंध वाले अणु बनाता है', 'यह ठोस क्रिस्टल में विद्युत सुचालक होता है', 'इसमें विपरीत आवेशित आयनों के मध्य प्रबल स्थिर-विद्युत आकर्षण होता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Oppositely charged `Na⁺` and `Cl⁻` ions pack via **strong electrostatic forces** (`1 Na⁺ surrounded by 6 Cl⁻`, `Fig 9.14`), making them solid with **high MP/BP** and non-conducting until dissolved/melted!',
        hi: 'विपरीत आवेशित आयन प्रबल **स्थिर-विद्युत आकर्षण** से 3-D क्रिस्टल जालक में बँधते हैं, जिससे ठोस अवस्था व उच्च गलनांक/क्वथनांक मिलता है (`पृ. 173, 179`)।',
      },
    },
    {
      id: 'pyq-c9c9-21',
      examTag: 'RRB Group D 2025 (Shift 12) + Tech 3',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.7): Atomic vs Molecular Mass of Nitrogen Gas (N₂)',
      question: {
        en: 'If the molecular mass of Nitrogen gas (`N₂`) is `28 u`, what is the atomic mass of a single Nitrogen atom (`and molecular mass of NH₃ where H = 1 u`)?',
        hi: 'यदि नाइट्रोजन गैस (`N₂`) का आण्विक द्रव्यमान `28 u` है, तो एकल नाइट्रोजन परमाणु का परमाणु द्रव्यमान कितना होगा (`एवं NH₃ का आण्विक द्रव्यमान जहाँ H = 1 u`)?',
      },
      options: {
        en: ['N = 14 u ; NH₃ = 17 u', 'N = 21 u ; NH₃ = 10 u', 'N = 7 u ; NH₃ = 21 u', 'N = 28 u ; NH₃ = 42 u'],
        hi: ['N = 14 u ; NH₃ = 17 u', 'N = 21 u ; NH₃ = 10 u', 'N = 7 u ; NH₃ = 21 u', 'N = 28 u ; NH₃ = 42 u'],
      },
      correctIndex: 0,
      solution: {
        en: 'Since diatomic `N₂` has 2 N atoms (`28 / 2 = 14 u`), single **`N = 14 u`**. Ammonia `NH₃ = 14 + (1 × 3)` = **`17 u`** (`verified in Group D 12 & Tech 3 Shift 22`)!',
        hi: 'द्विपरमाणुक `N₂` के लिए `28 / 2 =` **`14 u`**! अतः अमोनिया `NH₃ = 14 + 3` = **`17 u`**!',
      },
    },
    {
      id: 'pyq-c9c9-22',
      examTag: 'RRB Group D 2025 (Shifts 1 & 3)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Ex 9.6 & Sec 9.8): Formula Unit Masses of ZnO & Na₂O',
      question: {
        en: 'Given atomic masses `Zn = 65 u`, `Na = 23 u`, `O = 16 u`, calculate the Formula Unit Masses of **`ZnO`** and **`Na₂O`** respectively:',
        hi: 'यदि परमाणु द्रव्यमान `Zn = 65 u`, `Na = 23 u` और `O = 16 u` हों, तो **`ZnO`** तथा **`Na₂O`** के सूत्र इकाई द्रव्यमान क्रमशः कितने होंगे?',
      },
      options: {
        en: ['ZnO = 81 u ; Na₂O = 39 u', 'ZnO = 81 u ; Na₂O = 62 u', 'ZnO = 48 u ; Na₂O = 62 u', 'ZnO = 18 u ; Na₂O = 62 u'],
        hi: ['ZnO = 81 u ; Na₂O = 39 u', 'ZnO = 81 u ; Na₂O = 62 u', 'ZnO = 48 u ; Na₂O = 62 u', 'ZnO = 18 u ; Na₂O = 62 u'],
      },
      correctIndex: 1,
      solution: {
        en: '`ZnO = 65 + 16 = 81 u`; `Na₂O` (`NCERT Example 9.6!`) = `(23 × 2) + 16 = 46 + 16` = **`62 u`** (`exact NCERT Ex 9.6 test!`).',
        hi: '`ZnO = 65 + 16 = 81 u` तथा `Na₂O` (`NCERT उदा. 9.6!`) = `46 + 16` = **`62 u`**!',
      },
    },
    {
      id: 'pyq-c9c9-23',
      examTag: 'RRB Group D 2025 (Shift 22)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.8): Formula Unit Mass of Calcium Chloride (CaCl₂)',
      question: {
        en: 'What is the Formula Unit Mass of Calcium Chloride (`CaCl₂`)? (`Atomic masses: Ca = 40 u, Cl = 35.5 u`)',
        hi: 'कैल्सियम क्लोराइड (`CaCl₂`) का सूत्र इकाई द्रव्यमान कितना है? (`Ca = 40 u, Cl = 35.5 u`)',
      },
      options: {
        en: ['71 u', '65 u', '111 u', '46 u'],
        hi: ['71 u', '65 u', '111 u', '46 u'],
      },
      correctIndex: 2,
      solution: {
        en: 'Formula unit mass of `CaCl₂` = `40 + (2 × 35.5) = 40 + 71` = **`111 u`**!',
        hi: '`CaCl₂` = `40 + (2 × 35.5) = 40 + 71` = **`111 u`**!',
      },
    },
    {
      id: 'pyq-c9c9-24',
      examTag: 'RRB Group D 2025 (Shift 37 & Tech 3 Shift 1)',
      section: 'General Science',
      subject: 'Chemistry',
      topic: 'NCERT Ch 9 (Sec 9.8): Formula Unit Mass of Ammonium Sulphate (NH₄)₂SO₄',
      question: {
        en: 'The Formula Unit Mass of Ammonium Sulphate, **`(NH₄)₂SO₄`**, is (`N=14, H=1, S=32, O=16 u`):',
        hi: 'अमोनियम सल्फेट, **`(NH₄)₂SO₄`**, का सूत्र इकाई द्रव्यमान (`Formula Unit Mass`) कितना है? (`N=14, H=1, S=32, O=16 u`)',
      },
      options: {
        en: ['114 u', '118 u', '132 u', '136 u'],
        hi: ['114 u', '118 u', '132 u', '136 u'],
      },
      correctIndex: 2,
      solution: {
        en: '`(NH₄)₂SO₄` contains `2 N (28)` + `8 H (8)` + `1 S (32)` + `4 O (64)` = `28 + 8 + 32 + 64` = **`132 u`**!',
        hi: '`(NH₄)₂SO₄` = `2×(14+4) + 32 + (4×16) = 36 + 32 + 64` = **`132 u`**!',
      },
    },
  ],
};
