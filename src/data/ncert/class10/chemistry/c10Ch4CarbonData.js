/**
 * Class 10 NCERT (2026–27 Edition — jhsc104.pdf, Pages 64–87) + Railway CBT Deep-Dive Edition
 * Chapter 4: Carbon & Its Compounds (कार्बन एवं उसके यौगिक) — Gold Standard v3 (#5 PYQ Chapter — 64 Hits!)
 * Complete NCERT Coverage: 4.1 Covalent Bonding (H₂, O₂, N₂, CH₄, CO₂, S₈) & 3 Allotropes (Diamond, Graphite, C₆₀) ->
 * 4.2 Catenation, Tetravalency, Wöhler 1828 Urea, Saturated vs Unsaturated, Isomers (Butane 2 / Pentane 3), Rings (Cyclohexane vs Benzene), Functional Groups (Table 4.3), Homologous Series (-CH₂- / 14u), IUPAC Rules (Table 4.4) ->
 * 4.3 Combustion (Blue vs Sooty Flame), Oxidation (Alk. KMnO₄ / Acid K₂Cr₂O₇), Addition/Hydrogenation (Ni/Pd), Sunlight Substitution (Cl₂) ->
 * 4.4 Ethanol (Na -> H₂, 443K Conc. H₂SO₄ -> Ethene, Methanol Poisoning & Denatured Alcohol) & Ethanoic Acid (Glacial 290K, Esterification & Saponification, Carbonate CO₂) ->
 * 4.5 Soaps vs Detergents (Micelles, Hard Water Ca²⁺/Mg²⁺ Scum vs Sulfonate/Ammonium).
 * All 12 Activities (4.1–4.12), All 13 In-Text Qs, All 15 Exercises verified against jhsc1an.pdf, & 24 Verbatim RRB PYQs.
 */

export const C10_CH4_CARBON_DATA = {
  id: 'c10-chem-ch4',
  classId: 'class10',
  subjectId: 'chemistry',
  subjectLabel: { en: 'Chemistry', hi: 'रसायन विज्ञान (Chemistry)' },
  chapterNumber: 4,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 4: Carbon & Its Compounds (CBT Edition)',
  blueprintSvgKey: 'c10-ch4-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Hydrocarbons, Functional Groups, Homologous Series (-CH₂-) & IUPAC', hi: 'हाइड्रोकार्बन, प्रकार्यात्मक समूह, समजातीय श्रेणी व IUPAC नामकरण' }, pct: 32 },
    { label: { en: 'Carbon Reactions (Combustion, KMnO₄ Oxidation, Ni+H₂ Addition, 443K Dehydration)', hi: 'रासायनिक अभिक्रियाएँ (दहन, KMnO₄ ऑक्सीकरण, संकलन, 443K निर्जलीकरण)' }, pct: 28 },
    { label: { en: 'Allotropes (Diamond sp³ Insulator vs Graphite sp² Conductor vs C₆₀)', hi: 'कार्बन अपररूप (हीरा कुचालक बनाम ग्रेफाइट सुचालक व फुलेरीन C₆₀)' }, pct: 22 },
    { label: { en: 'Ethanol, Ethanoic Acid, Ester/Saponification & Soap Micelles / Hard Water', hi: 'एथेनॉल, एथेनॉइक अम्ल, एस्टर-साबुनीकरण व मिसेल / कठोर जल' }, pct: 18 },
  ],
  title: {
    en: 'Chapter 4: Carbon & Its Compounds',
    hi: 'अध्याय 4: कार्बन एवं उसके यौगिक',
  },
  subtitle: {
    en: 'Complete 2026–27 NCERT Deep-Dive (#5 Highest PYQ Chapter) • Allotropes, IUPAC, All 4 Reactions, Ethanol/Ester & Micelles',
    hi: 'नया 2026–27 NCERT संपूर्ण गहराई (#5 सर्वाधिक PYQ अध्याय) • अपररूप, IUPAC नामकरण, एथेनॉल-एस्टर, मिसेल व 24 रेलवे PYQ',
  },
  metrics: {
    pages: 24,
    activities: 12,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-chem-ch4/hero-carbon-compounds.webp',
    caption: {
      en: 'Carbon Allotropes & Reactivity Bench: Octahedral natural Diamond crystal, sparking layered Graphite electrodes, Buckminsterfullerene C₆₀ geodesic cage, organic ester flask & iridescent Bunsen combustion flame.',
      hi: 'कार्बन प्रयोगशाला बेंच: अष्टफलकीय हीरा क्रिस्टल, विद्युत चालन करते ग्रेफाइट इलेक्ट्रोड, C₆₀ फुलेरीन फुटबॉल संरचना, एस्टर फ्लास्क एवं बन्सेन दहन ज्वाला।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Carbon Bonding (`0.02% crust / 0.03% CO₂`) & Allotropes (`4.1`)**: Carbon (`Z=6: 2,4`) forms **covalent bonds ONLY** (`sharing electrons; NO C⁴⁻ or C⁴⁺!`). Covalent compounds have **low MP/BP** (`weak intermolecular forces`) and **don’t conduct electricity** (`no free ions`). **Diamond** (`1 C -> 4 C`, hardest, **insulator** `n=2.42`, critical angle `24.4°`) vs **Graphite** (`1 C -> 3 C + 1 double bond`, **conducts electricity!** slippery hexagonal sheets) vs **`C₆₀` Fullerene** (`Buckminster Fuller` dome, 20 hex + 12 pent).',
      hi: '**कार्बन आबंधन (`भूपर्पटी 0.02%, वायुमंडल CO₂ 0.03%`) व अपररूप**: कार्बन (`Z=6: 2,4`) `C⁴⁻` व `C⁴⁺` नहीं बना सकता अतः केवल **सहसंयोजी आबंध** बनाता है (निम्न गलनांक व विद्युत कुचालक)। **हीरा (`1 C–4 C`)** सर्वाधिक कठोर व कुचालक; **ग्रेफाइट (`1 C–3 C + द्वि-आबंध`)** चिकना व मुक्त इलेक्ट्रॉन से **विद्युत सुचालक**; **फुलेरीन (`C₆₀`)** बकमिंस्टरफुलर फुटबॉल संरचना।',
    },
    {
      en: '**Catenation, Rings, Isomers & Homologous Series (`4.2`)**: Wöhler (`1828`) killed Vital Force theory via **Urea** (`from NH₄CNO`). **Saturated** (`Alkane CnH₂n+₂`: single bonds, e.g. `C₂H₆ = 7 covalent bonds`) vs **Unsaturated** (`Alkene CnH₂n`, `Alkyne CnH₂n₋₂`). **Isomers**: Butane (`2`), Pentane (`3`). **Cyclohexane (`C₆H₁₂`, saturated ring)** vs **Benzene (`C₆H₆`, 3 C=C)**. Homologous members differ by **`–CH₂–` (`14 u` mass)** (`same functional group -> similar chemical props, rising BP/MP`).',
      hi: '**शृंखलन, समावयवी व समजातीय श्रेणी**: वोहलर (`1828`) ने यूरिया बनाकर जीवन-शक्ति सिद्धांत तोड़ा। **एल्केन (`CnH2n+2`)**, **एल्कीन (`CnH2n`)**, **एल्काइन (`CnH2n-2`)**। ब्यूटेन के **2**, पेन्टेन के **3** समावयवी। साइक्लोहेक्सेन (`C₆H₁₂`, एकल आबंध) vs बेन्जीन (`C₆H₆`)। समजातीय श्रेणी में क्रमिक अंतर **`–CH₂–` (`14 u`)** होता है (रासायनिक गुण समान!)।',
    },
    {
      en: '**IUPAC Functional Groups (`Tables 4.3–4.4`)**: Halo **`chloro-/bromo-` (Prefix)** | Alcohol **`–OH -> -ol`** | Aldehyde **`–CHO -> -al`** (`Methanal HCHO`) | Ketone **`>C=O -> -one`** (`Propanone C3 min`) | Carboxylic Acid **`–COOH -> -oic acid`**. Drop trailing `‘e’` when suffix starts with vowel (`propane -> propanone`)!',
      hi: '**प्रकार्यात्मक समूह व IUPAC**: हैलो (`पूर्वलग्न क्लोरो/ब्रोमो`) | ऐल्कोहॉल (`–OH → -ol`) | ऐल्डिहाइड (`–CHO → -al`) | कीटोन (`>C=O → -one`, 3C प्रोपेनोन से शुरू) | कार्बोक्सिलिक अम्ल (`–COOH → -oic acid`)। स्वर आने पर अंत का `‘e’` हटाते हैं!',
    },
    {
      en: '**4 Core Organic Reactions (`4.3`)**: **(1) Combustion**: Saturated = clean blue flame; Unsaturated / clogged stove air hole = yellow smoky soot (`pot blackens Ex Q3!`). **(2) Oxidation**: Ethanol + hot **Alk. `KMnO₄` / Acid `K₂Cr₂O₇`** (`Oxidizing agents`) -> **Ethanoic Acid**. **(3) Addition (`Hydrogenation`)**: Alkene/Veg Oil + `H₂` (**`Ni/Pd` catalyst**) -> Saturated Alkane/Ghee (`decolorizes orange Br₂ water`). **(4) Substitution**: Alkane + `Cl₂` + **Sunlight** (`CH₄ -> CH₃Cl + HCl`).',
      hi: '**4 मुख्य अभिक्रियाएँ**: **दहन**: संतृप्त → नीली लौ; असंतृप्त/छिद्र अवरुद्ध → पीली कज्जली लौ। **ऑक्सीकरण**: एथेनॉल + **क्षारीय `KMnO₄` / अम्लीय `K₂Cr₂O₇`** → एथेनॉइक अम्ल (`बैंगनी रंग उड़ना!`)। **योगज (हाइड्रोजनीकरण)**: असंतृप्त तेल + `H₂` (**Ni/Pd उत्प्रेरक**) → संतृप्त वसा (`ब्रोमीन जल रंगहीन!`)। **प्रतिस्थापन**: मेथेन + `Cl₂` + **सूर्यप्रकाश** → क्लोरोमेथेन।',
    },
    {
      en: '**Ethanol, Ethanoic Acid & Soaps (`4.4–4.5`)**: Ethanol + `Na -> C₂H₅ONa + H₂↑`; Ethanol + **Conc. `H₂SO₄` @ `443 K (170 °C)`** (`dehydrating agent`) -> **Ethene (`C₂H₄`)**. Methanol (`oxidizes to methanal`) causes blindness/death (`blue denatured spirit`). **Vinegar** = `3–4%` Ethanoic Acid (`MP 290 K = Glacial Acetic Acid`; gives `CO₂↑` with **`NaHCO₃ / Na₂CO₃`** unlike ethanol!). **Acid + Alcohol -> Sweet Ester (`Esterification`)**; **Ester + `NaOH` -> Alcohol + Soap (`Saponification`)**. **Micelles** trap oil inward in hydrophobic tails (`do NOT form in ethanol Ex Q8`). **Soap + Hard Water (`Ca²⁺/Mg²⁺`) -> Scum**; **Sulfonate/Ammonium Detergents -> Lather!**',
      hi: '**एथेनॉल, एथेनॉइक अम्ल व साबुन**: `443 K (170°C)` पर सांद्र `H₂SO₄` संग एथेनॉल का **निर्जलीकरण → एथीन**। मेथेनॉल से **नेत्रहीनता/मृत्यु** (नीला रंजक = **विकृत ऐल्कोहॉल**)। सिरका = `3–4%` ऐसीटिक अम्ल (`गलनांक 290 K = ग्लैशल`; `NaHCO₃` से `CO₂↑` परीक्षण)। **एस्टरीकरण ↔ साबुनीकरण**। साबुन में **जलरागी (`–COO⁻Na⁺`)** व **जलविरागी (`हाइड्रोकार्बन पूँछ`)** सिरे **मिसेल** बनाते हैं; कठोर जल में `Ca²⁺/Mg²⁺` स्कम बनाते हैं, पर **अपमार्जक** नहीं!',
    },
  ],
  sections: [
    {
      id: 'covalent-bonding-allotropes',
      number: '4.1',
      flowDiagramKey: 'c10-ch4-allotropes-bonding',
      realImage: {
        imageUrl: '/ncert-notes/class10-chem-ch4/real/graphite-hexagonal-crystal.webp',
        caption: {
          en: 'Natural metallic-lustrous hexagonal Graphite crystals embedded in quartz matrix — unlike Diamond, its 4th delocalized electron conducts electricity (NCERT Sec 4.1).',
          hi: 'क्वार्ट्ज़ में जड़े धात्विक चमक वाले षट्कोणीय ग्रेफाइट क्रिस्टल — हीरे के विपरीत, चौथे विस्थानीकृत इलेक्ट्रॉन के कारण यह विद्युत का सुचालक है (NCERT 4.1)।',
        },
      },
      title: {
        en: 'Covalent Bonding in Carbon (`No C⁴⁺/C⁴⁻`), Lewis Electron-Dot Molecules & 3 Allotropes (`Diamond, Graphite, C₆₀`)',
        hi: 'कार्बन में सहसंयोजी आबंधन (`C⁴± क्यों नहीं?`), इलेक्ट्रॉन-बिंदु संरचनाएँ एवं तीन क्रिस्टलीय अपररूप',
      },
      summaryTag: {
        en: 'NCERT Pages 64–68 • Crust 0.02% / Air 0.03%, Low MP/BP Table 4.1, H₂/O₂/N₂/CH₄/S₈ & Allotrope Physics vs Chemistry',
        hi: 'NCERT पृ. 64–68 • सारणी 4.1 गलनांक-क्वथनांक, H₂/O₂/N₂/CH₄/CO₂/S₈ बिंदु संरचना व हीरा-ग्रेफाइट-फुलेरीन',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Why `0.02%` Carbon Rules Life (`Table 4.1` & Why Carbon Never Forms `C⁴⁻` or `C⁴⁺` Ions)',
            hi: '1. अल्प मात्रा (`0.02%`) के बावजूद कार्बन सर्वव्यापी क्यों? एवं `C⁴⁻ / C⁴⁺` आयन न बनने का रहस्य',
          },
          content: {
            en: 'Earth’s crust holds just **`0.02%` Carbon** (`carbonates, hydrogen-carbonates, coal, petroleum`) and the atmosphere only **`0.03% CO₂`**, yet every living cell, food, medicine, cloth, and book rests on Carbon (`Act 4.1: non-metal/non-glass daily items burn to CO₂ turning limewater milky`). Looking at **NCERT Table 4.1** (`Acetic Acid: MP 290K / BP 391K; Chloroform: 209K / 334K; Ethanol: 156K / 351K; Methane: 90K / 111K`), organic compounds have **far lower melting/boiling points than ionic salts (`like NaCl ~1074 K`)** and are **poor conductors of electricity** (`no charged ions; weak intermolecular forces despite strong bonds INSIDE each molecule! — RRB Group D 2025 PYQ`). Why doesn’t Carbon (`Atomic No. Z = 6; K=2, L=4 valence e⁻`) form ionic bonds? (1) Gaining 4 e⁻ to form **`C⁴⁻`** leaves **6 protons straining to hold 10 electrons** (`unstable`); (2) Losing 4 e⁻ to form **`C⁴⁺`** with just 2 e⁻ around 6 protons demands **enormous ionization energy**! Thus Carbon solves its octet by **sharing valence electrons (`Covalent Bonding / सहसंयोजी आबंध`)**!',
            hi: 'भूपर्पटी में खनिजों (`कोयला, पेट्रोलियम, कार्बोनेट`) के रूप में केवल **==`0.02%` कार्बन==** तथा वायुमंडल में **==`0.03%` कार्बन डाइऑक्साइड==** है, फिर भी भोजन, वस्त्र, दवाइयाँ व सजीव संरचनाएँ कार्बन पर ही टिकी हैं! **सारणी 4.1** (`ऐसीटिक अम्ल गलनांक 290K / क्वथनांक 391K; क्लोरोफॉर्म 209K/334K; एथेनॉल 156K/351K; मेथेन 90K/111K`) से स्पष्ट है कि कार्बन यौगिकों के **==गलनांक-क्वथनांक आयनिक यौगिकों की तुलना में बहुत कम==** हैं व ये **==विद्युत के कुचालक==** हैं (`अणु के भीतर प्रबल आबंध पर अंतराआण्विक बल दुर्बल, और कोई आयन नहीं बनता — RRB Group D 2025 PYQ`)! कार्बन (`परमाणु संख्या 6; विन्यास 2,4`) आयनिक बंध क्यों नहीं बनाता? (i) 4 e⁻ लेकर **`C⁴⁻`** बनाने पर **6 प्रोटॉन वाले नाभिक हेतु 10 इलेक्ट्रॉन संभालना कठिन**; (ii) 4 e⁻ खोकर **`C⁴⁺`** बनाने में **अत्यधिक ऊर्जा** लगती है! अतः कार्बन अपने बाहरी इलेक्ट्रॉनों की **==साझेदारी कर सहसंयोजी आबंध (`Covalent Bond`)==** बनाता है!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Single, Double & Triple Covalent Molecules (`H₂, O₂, N₂, CH₄`) & Three Carbon Allotropes (`NCERT p.67`)',
            hi: '2. एकल, द्वि व त्रि-सहसंयोजी अणु (`H₂, O₂, N₂, CH₄, CO₂, S₈`) एवं कार्बन के तीन अपररूप',
          },
          content: {
            en: 'Look at classic shared-pair molecules: **Hydrogen (`H₂`)** shares **1 pair** (`single bond H–H`, matches Helium); **Chlorine (`Cl₂`)** shares **1 pair**; **Oxygen (`O₂`, 6 valence e⁻)** shares **2 pairs** (`double bond O=O`); **Nitrogen (`N₂`, 5 valence e⁻)** shares **3 pairs** (`triple bond N≡N`). **Ammonia (`NH₃`)** and **Water (`H₂O`)** contain single covalent bonds, while **Methane (`CH₄` — main component of Biogas & CNG!)** has Carbon sharing 4 electrons singly with 4 Hydrogens (**tetravalent**). Next come Carbon’s **==Three Allotropes (अपररूप)==** — **chemically identical** (`all burn in O₂ to form ONLY CO₂, heat & light! — Group D 2025 PYQ`), **physically poles apart** because of **how carbon atoms bond**: (1) **==Diamond (हीरा)==**: Each C bonds to **4 neighboring C atoms** into a **rigid 3D tetrahedral crystal** -> **hardest natural substance**, **ZERO free electrons -> non-conductor of electricity** (`Refractive index 2.42, critical angle 24.4°; artificial tiny diamonds synthesized under ultra-high pressure & temp`). (2) **==Graphite (ग्रेफाइट)==**: Each C bonds in a flat plane to **3 neighboring C atoms** (`one double bond satisfies tetravalency`) forming **stacked hexagonal sheets** that slide easily (`smooth, slippery lubricant/pencil`) + **4th mobile electron -> CONDUCTS ELECTRICITY (`non-metal exception!`)**. (3) **==Fullerene `C₆₀` (बकमिंस्टरफुलेरीन)==**: **60 C atoms arranged as a football sphere** (`20 hexagons + 12 pentagons`), named after American architect **Buckminster Fuller’s geodesic dome**!',
            hi: 'इलेक्ट्रॉनों की साझेदारी से: **हाइड्रोजन (`H₂`) व क्लोरीन (`Cl₂`)** में **==एकल आबंध==**, **ऑक्सीजन (`O₂`, बाहरी 6 e⁻)** में **==द्विआबंध== (`O=O`)**, तथा **नाइट्रोजन (`N₂`, बाहरी 5 e⁻)** में **==त्रिआबंध (`N≡N`)==** बनता है (`NH₃ व H₂O में एकल आबंध`)। **==मेथेन (`CH₄`, बायोगैस व CNG का प्रमुख घटक)==** में कार्बन **चतुःसंयोजक (`Tetravalent`)** होकर 4 H से जुड़ता है। प्रकृति में कार्बन के **==तीन मुख्य अपररूप==** हैं जिनके **रासायनिक गुण एकसमान (`दहन पर केवल CO₂ + ऊष्मा + प्रकाश`)** पर **भौतिक गुण परमाणुओं के आबंधन कारण अत्यंत भिन्न** हैं: (1) **==हीरा (`Diamond`)==**: प्रत्येक C **अन्य 4 कार्बन परमाणुओं** से जुड़कर **दृढ़ 3D चतुष्फलकीय संरचना** बनाता है -> **सर्वाधिक कठोर प्राकृतिक पदार्थ**, कोई मुक्त इलेक्ट्रॉन न होने से **==विद्युत का कुचालक==** (`अत्यधिक उच्च दाब-ताप पर संश्लेषित हीरे भी बनते हैं`)। (2) **==ग्रेफाइट (`Graphite`)==**: प्रत्येक C एक ही तल में **अन्य 3 C परमाणुओं** से जुड़ा (एक आबंध द्वि-आबंधी) होकर फिसलनदार **षट्कोणीय परतें** बनाता है -> चिकना, फिसलनशील एवं मुक्त इलेक्ट्रॉन के कारण **==अधातु होकर भी विद्युत का सुचालक!==** (3) **==बकमिंस्टरफुलेरीन (`C₆₀`)==**: फुटबॉल जैसा अणु (अमेरिकी आर्किटेक्ट बकमिंस्टर फुलर के जियोडेसिक गुंबद समान)।',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'Railway Exam Decoder: How Many Covalent Bonds in `C₂H₆` vs `C₂H₄` vs `CH₄`?',
            hi: 'परीक्षा ट्रिक: एथेन (`7 आबंध`), मेथेन (`4`) व एथीन (`6 इलेक्ट्रॉन-युग्म / 5 रेखा`) में कुल सहसंयोजी आबंध गिनें!',
          },
          content: {
            en: 'Count single bonds in Alkanes (`CnH2n+2`): **`Bonds = 3n + 1`**! Check: Methane `n=1 -> 4`, **Ethane `C₂H₆` `n=2 -> 3(2)+1 = 7` covalent bonds (`NCERT Ex Q1!`)**, Propane `C₃H₈` -> `10`. For **Ethene (`C₂H₄`)**: `4 C–H` single bonds + **`1 C=C` double bond (= 2 shared electron pairs)** = **`6` shared electron-pair bonds total** (`RRB Group D 2025 Shift 12 direct question -> ans: 6!`).',
            hi: 'ऐल्केन (`CnH2n+2`) में कुल सहसंयोजी आबंध गिनने का सीधा सूत्र = **`3n + 1`**: मेथेन (`n=1`) = `4`, **एथेन (`C₂H₆`, Ex Q1) = `7` सहसंयोजी आबंध**, प्रोपेन (`C₃H₈`) = `10`! वहीं **एथीन (`C₂H₄`)** में `4 C–H` एकल + `1 C=C` द्विआबंध (`2 युग्म`) = कुल **`6` आबंध युग्म** (`RRB Group D 2025 सीधा PYQ`)!',
          },
        },
      ],
    },
    {
      id: 'versatile-iupac-reactions',
      number: '4.2–4.3',
      flowDiagramKey: 'c10-ch4-functional-iupac',
      svgLab: 'carbon-allotrope-iupac-lab',
      realImage: {
        imageUrl: '/ncert-notes/class10-chem-ch4/real/bunsen-flame-combustion.webp',
        caption: {
          en: 'Combustion Progression in Bunsen Burner (`Activity 4.4`): Air hole closed (1: yellow smoky soot / incomplete combustion) -> full open air hole (4: roaring clean non-luminous blue complete combustion).',
          hi: 'बन्सेन बर्नर में दहन परीक्षण (क्रियाकलाप 4.4): वायु छिद्र बंद होने पर पीली कज्जली लौ (1 — अपूर्ण दहन) बनाम खुला छिद्र होने पर स्वच्छ नीली अदीप्त लौ (4 — पूर्ण दहन)।',
        },
      },
      title: {
        en: 'Versatile Carbon (`Catenation, Isomers, Functional Groups & IUPAC`) + All 4 Chemical Reactions',
        hi: 'कार्बन की सर्वतोमुखी प्रकृति (`शृंखलन, समावयवी, समजातीय श्रेणी, IUPAC`) एवं 4 रासायनिक अभिक्रियाएँ',
      },
      summaryTag: {
        en: 'NCERT Pages 68–79 • Wöhler Urea, Cyclohexane/Benzene, Heteroatoms, Alcohol/Aldehyde/Ketone/Acid & Blue vs Sooty Flame',
        hi: 'NCERT पृ. 68–79 • वोहलर यूरिया, साइक्लोहेक्सेन/बेन्जीन, विषम परमाणु, प्रकार्यात्मक समूह व दहन-ऑक्सीकरण-संकलन-प्रतिस्थापन',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Catenation + Tetravalency, Isomers (`Butane 2, Pentane 3`), Rings, Functional Groups & `–CH₂–` Homologous Series',
            hi: '1. शृंखलन, चतुःसंयोजकता, संरचनात्मक समावयन, समजातीय श्रेणी (`–CH₂–`) व IUPAC नामपद्धति',
          },
          content: {
            en: 'Why are carbon compounds numbered in **millions**? Due to **two unique powers (`In-Text p.76 Q2`)**: **(i) ==Catenation (`शृंखलन`)==** (`self-linking into long straight, branched, or ring chains; even Silicon only makes weak 7–8 atom chains whereas small Carbon radius makes C–C bonds ultra-strong and stable!`) and **(ii) ==Tetravalency (`चतुःसंयोजकता`)==** (`bonds strongly with H, O, N, S, Cl`). **Historical Breakthrough (`p.69`)**: In **1828**, **Friedrich Wöhler** synthesized **Urea** from inorganic **Ammonium Cyanate**, disproving the "Vital Force" theory (`except Carbides, Carbonates & Bicarbonates stay inorganic!`). Same formula **different structures = ==Structural Isomers (`संरचनात्मक समावयवी`)==** (`Butane C₄H₁₀ has 2; Pentane C₅H₁₂ has 3!`). Compare rings (`Fig 4.9–4.10`): **Cyclohexane (`C₆H₁₂`)** is a **saturated cyclic alkane** while **Benzene (`C₆H₆`)** is an **unsaturated aromatic ring with 3 alternating C=C double bonds** (`Wait PYQ [19]`: Cyclopropane **`C₃H₆`** matches formula `CnH2n` yet IS a **saturated ring**!). When **heteroatoms (`Cl, Br, O`)** replace H, they create **==Functional Groups (`प्रकार्यात्मक समूह`)==** that solely decide **chemical reactivity** regardless of chain length -> forming a **==Homologous Series (`समजातीय श्रेणी`)==** whose consecutive members step by **`–CH₂–` (`14 u`)** (`same general formula, same chemical behavior, gradually rising MP/BP as mass grows!`). **IUPAC Rule (`Table 4.4`)**: Prefix **`chloro-/bromo-`**, OR drop final `‘e’` and add suffix **`-ol` (Alcohol `–OH`)**, **`-al` (Aldehyde `–CHO`)**, **`-one` (Ketone `>C=O`, min C3 propanone)**, **`-oic acid` (Acid `–COOH`)**, or swap `-ane` -> **`-ene` / `-yne`**!',
            hi: 'लाखों कार्बन यौगिक बनने के **दो कारण** हैं: **(i) ==शृंखलन (`Catenation`)==** — कार्बन परमाणुओं के आपस में जुड़कर सीधी, शाखित व वलय शृंखलाएँ बनाने की अद्वितीय क्षमता (`सिलिकॉन केवल 7–8 परमाणु की अस्थायी शृंखला बना पाता है, जबकि छोटे परमाणु आकार से C–C बंध अत्यंत प्रबल व स्थायी होते हैं`), और **(ii) ==चतुःसंयोजकता (`Tetravalency`)==**। **ऐतिहासिक तथ्य (`1828`)**: **फ्रेडरिक वोहलर** ने अकार्बनिक **अमोनियम सायनेट से प्रयोगशाला में यूरिया** बनाकर ‘जीवन शक्ति सिद्धांत’ गलत सिद्ध किया (`अपवाद: कार्बाइड, कार्बोनेट व बाइकार्बोनेट अकार्बनिक माने जाते हैं`)। **==संरचनात्मक समावयवी==**: समान सूत्र पर भिन्न संरचना — **ब्यूटेन (`C₄H₁₀`) = `2`, पेन्टेन (`C₅H₁₂`) = `3`**! वलय संरचनाओं में **साइक्लोहेक्सेन (`C₆H₁₂`, संतृप्त)** व **बेन्जीन (`C₆H₆`, 3 द्विआबंध असंतृप्त)** प्रमुख हैं (`साइक्लोप्रोपेन C₃H₆ सूत्र होने पर भी संतृप्त वलय है — Group D 2025 PYQ!`)। कार्बन शृंखला में हाइड्रोजन हटाकर जुड़ने वाले परमाणु (**विषम परमाणु**) विशिष्ट **==प्रकार्यात्मक समूह==** बनाते हैं, और समान प्रकार्यात्मक समूह वाली शृंखला **==समजातीय श्रेणी (`Homologous Series`)==** कहलाती है जिसमें प्रत्येक क्रमिक पद में **`–CH₂–` (`14 u` द्रव्यमान)** का अंतर होता है (रासायनिक गुण समान, भौतिक गुण भार संग क्रमिक बढ़ते हैं)।',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Combustion (`Blue vs Yellow Flame`), Oxidation (`KMnO₄`), Hydrogenation (`Ni/Pd`) & UV Substitution (`Cl₂`)',
            hi: '2. चार मुख्य अभिक्रियाएँ: दहन (`नीली बनाम कज्जली लौ`), ऑक्सीकरण, हाइड्रोजनीकरण (`संकलन`) व प्रतिस्थापन',
          },
          content: {
            en: 'Master all **4 reaction classes (`Sec 4.3`)**: **(1) ==Combustion (`दहन`)==**: All carbon fuels burn in O₂ yielding `CO₂ + H₂O + heat + light` (`Coal/Petroleum trace S & N emit SO₂/NO₂ pollutants!`). **==Saturated hydrocarbons== burn with a CLEAN BLUE non-sooty flame**, whereas **==Unsaturated hydrocarbons== (`high C:H ratio` — naphthalene, camphor in Act 4.3)** or **limited air supply (`clogged gas stove inlets blackening cooking vessel bottoms! — Ex Q3`)** burn incompletely with a **YELLOW SOOTY flame**. Only vaporized gaseous substances produce a flame (`red-glowing charcoal has no flame once volatiles burn off!`). **(2) ==Oxidation (`ऑक्सीकरण`)==**: Warm Ethanol + **Alkaline `KMnO₄`** (`decolorizes from purple at first, persists once ethanol finishes — Act 4.5!`) or **Acidified `K₂Cr₂O₇`** (**Oxidizing Agents**) converts alcohol straight into **Ethanoic Acid (`CH₃COOH`)**. **(3) ==Addition / Hydrogenation (`संकलन`)==**: Only **unsaturated (`C=C / C≡C`)** molecules add `H₂` cleanly over **`Nickel` (`Ni`) or `Palladium` (`Pd`) catalyst** -> turning unhealthy? wait **healthy unsaturated liquid vegetable oils** into solid saturated fats (**Vanaspati Ghee** — NCERT notes *excess saturated animal fat is harmful*; unsaturated cooking oils are healthier; also unsaturated alkenes **decolorize orange Bromine water!** — *Ex Q14 & Group D 2025 PYQ*). **(4) ==Substitution (`प्रतिस्थापन`)==**: **Unreactive saturated alkanes** react cleanly only with **`Cl₂` in presence of SUNLIGHT**, swapping one H per Cl step-by-step (`CH₄ + Cl₂ -> CH₃Cl + HCl`).',
            hi: '**(1) ==दहन (`Combustion`)==**: सभी अपररूप व कार्बनिक ईंधन जलकर `CO₂ + ऊष्मा + प्रकाश` देते हैं (`कोयला/पेट्रोलियम में S व N से SO₂/NO₂ प्रदूषक बनते हैं`)। **==संतृप्त हाइड्रोकार्बन स्वच्छ नीली लौ==** के साथ जलते हैं, जबकि **==असंतृप्त हाइड्रोकार्बन (`अधिक कार्बन अनुपात` — नैफ्थलीन, कपूर)==** या वायु छिद्र बंद होने पर (अपूर्ण दहन से बर्तन काला होना — **अभ्यास प्रश्न 3**) **==पीली कज्जली/धुएँदार लौ==** देते हैं! ध्यान रहे, **केवल गैसीय/वाष्पशील पदार्थ ही ज्वाला देते हैं** (कोयला लाल होकर बिना ज्वाला ताप देता है)। **(2) ==ऑक्सीकरण==**: गर्म **क्षारीय `KMnO₄` (बैंगनी रंग उड़ता है)** या **अम्लीय `K₂Cr₂O₇`** (**ऑक्सीकारक**) एथेनॉल को एथेनॉइक अम्ल में बदलते हैं। **(3) ==संकलन / हाइड्रोजनीकरण (`Addition`)==**: **==निकैैल (`Ni`) या पैलेडियम (`Pd`) उत्प्रेरक==** संग असंतृप्त वनस्पति तेल `H₂` जोड़कर संतृप्त वसा बनाते हैं (`असंतृप्त यौगिक नारंगी ब्रोमीन जल को रंगहीन कर देते हैं` — **Ex Q14 व Group D 2025 PYQ!**)। **(4) ==प्रतिस्थापन (`Substitution`)==**: कम क्रियाशील संतृप्त ऐल्केन **सूर्य के प्रकाश में क्लोरीन (`Cl₂`)** से एक-एक H बदलते हैं (`CH₄ + Cl₂ → CH₃Cl + HCl`)।',
          },
        },
        {
          type: 'examTrap',
          title: {
            en: 'Coal vs Petroleum Formation (`p.78`) & Oxy-Acetylene Welding (`In-Text Q2`)',
            hi: 'कोयला व पेट्रोलियम की उत्पत्ति (`पृ. 78`) एवं वेल्डिंग में शुद्ध ऑक्सीजन-एथाइन क्यों?',
          },
          content: {
            en: '**Coal** formed over millions of years from **buried ancient land trees/ferns**, whereas **Oil & Natural Gas** formed from **ancient tiny marine plants/animals buried under ocean silt + bacterial pressure**. Also remember (`p.79 In-Text Q2`): Welding burns **pure Oxygen + Ethyne** (`blue high-heat flame`), **NEVER air + ethyne** (because ~79% N₂ dilutes O₂, causing smoky incomplete soot & insufficient heat!).',
            hi: '**कोयला** करोड़ों वर्ष पूर्व दबे स्थलीय **पेड़-पौधों व फर्न** से बना, जबकि **तेल व प्राकृतिक गैस** समुद्र-तल में गाद के नीचे दबे **समुद्री जीवों-पौधों** से! **वेल्डिंग (`पृ. 79`)** में एथाइन के साथ वायु नहीं बल्कि **शुद्ध ऑक्सीजन** मिलाते हैं ताकि अपूर्ण दहन व कालिख न हो और धातु पिघलाने लायक उच्च ताप मिले!',
          },
        },
      ],
    },
    {
      id: 'ethanol-ethanoic-soap-detergent',
      number: '4.4–4.5',
      flowDiagramKey: 'c10-ch4-ethanol-soap-micelle',
      realImage: {
        imageUrl: '/ncert-notes/class10-chem-ch4/real/soap-film-micelle.webp',
        caption: {
          en: 'Macro Soap Film Membrane (`Sec 4.5`): Amphiphilic soap molecules (`hydrophilic –COO⁻Na⁺ heads` + `hydrophobic alkyl tails`) self-assemble into micelles and emulsify greasy oil dirt cleanly.',
          hi: 'साबुन झिल्ली संरचना (NCERT 4.5): उभयधर्मी साबुन अणु (`जलरागी सिरा + जलविरागी पूँछ`) जल में मिसेल बनाकर तैलीय मैल को पायस रूप में बाहर निकालते हैं।',
        },
      },
      title: {
        en: 'Ethanol (`443 K` Dehydration, Methanol Danger), Ethanoic Acid (`Glacial, Ester, Saponification`) & Soap Micelles vs Detergents',
        hi: 'एथेनॉल (`443 K निर्जलीकरण`), एथेनॉइक अम्ल (`ग्लैशल, एस्टर-साबुनीकरण`), मिसेल व कठोर जल बनाम अपमार्जक',
      },
      summaryTag: {
        en: 'NCERT Pages 79–87 • Sodium H₂↑, Denatured Spirit, Molasses Biofuel, 290K Vinegar, Ca²⁺/Mg²⁺ Scum & Sulfonate Detergents',
        hi: 'NCERT पृ. 79–87 • Na से H₂↑, मेथेनॉल नेत्र-हानि, गन्ना शीरा ईंधन, 290K ग्लैशल, एस्टर इत्र, साबुनीकरण व स्कम',
      },
      blocks: [
        {
          type: 'conceptStory',
          title: {
            en: '1. Ethanol (`CH₃CH₂OH`) Reactions, `443 K` Ethene, Methanol Poisoning & Sugarcane Biofuel (`Sec 4.4.1`)',
            hi: '1. एथेनॉल के गुण (`443 K निर्जलीकरण`), मेथेनॉल विषाक्तता, विकृत ऐल्कोहॉल व गन्ना ईंधन',
          },
          content: {
            en: '**Ethanol (`MP 156 K, BP 351 K`)** is a liquid at room temp, mixes completely with water in all proportions (`miscible!`), and serves as a stellar solvent in **Tincture Iodine, Cough Syrups & Tonics**. While trace dilute ethanol induces drunkenness and pure/absolute ethanol can be **lethal** (`slows metabolism + depresses CNS`), even a tiny sip of **==Methanol (`CH₃OH`) causes permanent BLINDNESS & DEATH==** because the liver oxidizes methanol -> **Methanal**, rapidly **coagulating cell protoplasm** (like boiling egg white!) and destroying the **optic nerve (`चाक्षुष तंत्रिका`)**! Hence industrial ethanol is poisoned with methanol + colored **blue dye** = **==Denatured Alcohol (`विकृत ऐल्कोहॉल`)==**. Clean fuel note: **Sugarcane** converts sunlight efficiently into juice -> **molasses (`शीरा`)** fermented to ethanol -> **Clean Petrol Blend (`produces ONLY CO₂ + H₂O!`)**. **Two Hallmark Reactions of Ethanol**: (1) **`2Na + 2CH₃CH₂OH -> 2CH₃CH₂O⁻Na⁺ (Sodium Ethoxide) + H₂↑`** (`burns with pop sound! — Act 4.6`); (2) Heating ethanol at **==`443 K (170 °C)` with EXCESS Conc. `H₂SO₄`==** (**Dehydrating Agent**) strips `H₂O` off -> forming unsaturated **==Ethene== (`CH₂=CH₂`)** (`4–5 direct RRB Group D 2025 & Tech 2024 PYQs!`).',
            hi: '**एथेनॉल** कक्ष ताप पर द्रव है, जल में हर अनुपात में घुलता है और **टिंचर आयोडीन, कफ सिरप व टॉनिक** में विलायक है। थोड़ा तनु एथेनॉल नशा लाता है व **परिशुद्ध ऐल्कोहॉल** घातक हो सकता है (`उपापचय धीमा कर केंद्रीय तंत्रिका तंत्र कमजोर करता है`)। वहीं **==मेथेनॉल (`CH₃OH`) की अतिसूक्ष्म मात्रा भी जानलेवा व नेत्रहीन (`Optic nerve damage`)==** कर देती है क्योंकि यकृत में यह **मेथेनैल** बनकर कोशिकाओं के प्रोटोप्लाज्म को अंडे की भाँति जमा (स्कंदित) देता है! इसलिए औद्योगिक एथेनॉल में मेथेनॉल व **नीला रंग** मिलाकर **==विकृत ऐल्कोहॉल (`Denatured Alcohol`)==** बनाते हैं। गन्ने के रस से बने **शीरे (`Molasses`) के किण्वन** से प्राप्त एथेनॉल पेट्रोल में मिलाकर स्वच्छ ईंधन (केवल `CO₂+H₂O`) बनता है। **एथेनॉल की दो प्रमुख अभिक्रियाएँ:** (i) **सोडियम (`Na`) के साथ `CH₃CH₂O⁻Na⁺` (`सोडियम एथॉक्साइड`) + `H₂` गैस** (`पॉप ध्वनि`); (ii) **`443 K (170°C)` पर आधिक्य सांद्र `H₂SO₄` (`निर्जलीकारक`) से ==निर्जलीकरण → असंतृप्त एथीन (`C₂H₄`) + जल==** (`Group D 2025 का #1 प्रश्न`)!',
          },
        },
        {
          type: 'conceptStory',
          title: {
            en: '2. Ethanoic Acid (`290 K` Glacial Acetic Acid), Esterification, Saponification & Soaps vs Detergents (`4.4.2–4.5`)',
            hi: '2. एथेनॉइक अम्ल (`ग्लैशल 290 K`), एस्टरीकरण, साबुनीकरण, मिसेल व कठोर जल स्कम बनाम अपमार्जक',
          },
          content: {
            en: '**Ethanoic Acid (`Acetic Acid`, `CH₃COOH`)** is a **weak acid** (`unlike fully ionized HCl — compare via universal indicator pH, Act 4.7!`); its **`3–4%` aqueous solution = Vinegar (`सिरका`)** for pickling. Because pure acid freezes at **`290 K (16.8 °C)`** in cold winters, it is called **==Glacial Acetic Acid==**! Unlike ethanol, it reacts with `NaOH` (`-> CH₃COONa + H₂O`) and with **`Na₂CO₃ / NaHCO₃`** (`Act 4.9 -> brisk CO₂↑ turning limewater milky!`). **Magic Pair of Reactions**: **(A) ==Esterification (`एस्टरीकरण`, Act 4.8)==**: `CH₃COOH + C₂H₅OH` + conc. acid (`catalyst`) -> **sweet fruity-smelling Ester (`CH₃COOC₂H₅`, `–COO–` group — perfumes/flavorings!)**; **(B) ==Saponification (`साबुनीकरण`)==**: Boiling Ester with **`NaOH`** flips it back to Ethanol + **Sodium Carboxylate Salt** (**==Soap: Na/K salts of long-chain carboxylic acids==**!). How does **Soap clean (`Sec 4.5`)**? Each soap molecule has two opposite ends: a **water-loving Ionic head (`Hydrophilic / जलरागी –COO⁻Na⁺`)** and an **oil-loving Hydrocarbon tail (`Hydrophobic / जलविरागी`)**. Above critical concentration in water, tails cluster inward around oily dirt while ionic heads stick outward into water -> spherical colloidal **==Micelles (`मिसेल`, Fig 4.12)==** (`scatter light -> cloudy soap solution! Ion-ion repulsion keeps dirt suspended -> washes away when scrubbed! Note: NO micelles form in ethanol Ex Q8!`). **Hard Water (`Ca²⁺ / Mg²⁺` bicarbonates, sulfates, chlorides — Act 4.11–4.12)**: Soap reacts with `Ca²⁺/Mg²⁺` leaving **white curd-like insoluble SCUM (`स्कम`)**; **==Detergents (`सल्फोनिक या अमोनियम लवण Cl⁻/Br⁻ संग`)==** do NOT precipitate with `Ca²⁺/Mg²⁺` -> lather brilliantly in hard water (`shampoo / washing powders`)!',
            hi: '**एथेनॉइक अम्ल (`ऐसीटिक अम्ल`, `CH₃COOH`)** एक **दुर्बल अम्ल** है (HCl जैसे पूर्ण आयनित नहीं होता — *क्रियाकलाप 4.7*); इसके **`3–4%` विलयन को सिरका** कहते हैं और शुद्ध अम्ल **`290 K` पर शीतकाल में जम जाने के कारण ==ग्लैशल ऐसीटिक अम्ल==** कहलाता है। **दो प्रमुख अभिक्रियाएँ:** **(1) ==एस्टरीकरण==**: अम्ल उत्प्रेरक की उपस्थिति में `CH₃COOH + C₂H₅OH → CH₃COOC₂H₅` (**मीठी सुगंध वाला एस्टर `–COO–`**, इत्र व स्वाद कारक); **(2) ==साबुनीकरण==**: एस्टर को `NaOH` से अभिक्रिया कराने पर पुनः एथेनॉल व **कार्बोक्सिलिक अम्ल का सोडियम/पोटैशियम लवण (**==साबुन==**)** बनता है! **मिसेल द्वारा सफाई (`चित्र 4.12`)**: साबुन के दो छोर — **==जलरागी आयनिक सिरा (`बाहर जल की ओर`)==** तथा **==जलविरागी हाइड्रोकार्बन पूँछ (`अंदर तेल-मैल को घेरती हुई`)==** मिलकर **कोलॉइडी मिसेल** बनाते हैं (`इसलिए साबुन का घोल टिंडल प्रकीर्णन से बादल जैसा दिखता है व कपड़ा रगड़ने पर मैल पानी संग बह जाता है; एथेनॉल में मिसेल नहीं बनता`)! **कठोर जल समस्या (`क्रियाकलाप 4.11–4.12`)**: कठोर जल के `Ca²⁺/Mg²⁺` आयन साबुन से क्रिया कर **अघुलनशील दही जैसा स्कम (`Scum`)** बनाते हैं, जबकि **==अपमार्जक (`Detergents` — लंबी कार्बन शृंखला सल्फोनिक/अमोनियम लवण)==** `Ca²⁺/Mg²⁺` संग स्कम नहीं बनाते व कठोर जल में भी भरपूर झाग देते हैं!',
          },
        },
        {
          type: 'mnemonic',
          title: {
            en: 'One-Line Diagnostic Checklist: Ethanol vs Ethanoic Acid vs Alkene vs Alkane',
            hi: 'त्वरित पहचान कुंजी: एथेनॉल, एथेनॉइक अम्ल, संतृप्त व असंतृप्त परीक्षण',
          },
          content: {
            en: '**1. Add `NaHCO₃` (`baking soda`)**: Brisk `CO₂↑` bubbles -> **Ethanoic Acid**; no reaction -> **Ethanol**. **2. Add `Orange Bromine Water`**: Turns **colorless** -> **Unsaturated Alkene/Alkyne** (`vegetable oil`); stays orange -> **Saturated Alkane** (`butter/ghee`). **3. Add `Red/Blue Litmus` to Soap solution**: Turns **red litmus BLUE** (`Soap is basic/alkaline salt!`, *Ex Q11*).',
            hi: '1. **`NaHCO₃` से तेज `CO₂` बुदबुदाहट** = एथेनॉइक अम्ल (एल्कोहॉल से नहीं)। 2. **नारंगी ब्रोमीन जल रंगहीन** = असंतृप्त (`एल्कीन/एल्काइन`)। 3. **साबुन घोल पर लिटमस (`Ex Q11`)** = साबुन क्षारीय है अतः **लाल लिटमस को नीला** करेगा!',
          },
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      title: {
        en: 'TRAP 1: Graphite Conducts Electricity (`Non-Metal Exception`) Whereas Diamond Does NOT!',
        hi: 'जाल 1: हीरा (कुचालक) बनाम ग्रेफाइट (विद्युत का सुचालक अधातु अपवाद!)',
      },
      wrong: {
        en: 'Thinking both Diamond & Graphite insulate since both are pure non-metal Carbon (`or thinking Diamond conducts because it sparkles`).',
        hi: 'दोनों के अधातु कार्बन होने से ग्रेफाइट को भी कुचालक समझ लेना।',
      },
      right: {
        en: 'In Diamond all 4 valence electrons are locked in 4 C–C bonds (`insulator`). In **Graphite** each C bonds to only 3 C atoms, leaving **1 free delocalized electron** moving freely between hexagonal layers (`good conductor!`).',
        hi: 'हीरे में चारों इलेक्ट्रॉन 4 आबंधों में बँधे हैं (कुचालक); **ग्रेफाइट में प्रत्येक C केवल 3 C से जुड़ता है व चौथा मुक्त इलेक्ट्रॉन** धारा का सुगमता से चालन करता है!',
      },
    },
    {
      title: {
        en: 'TRAP 2: Why Is Ethanol a Non-Conductor Despite Polar `O–H` Bond (`Group D 2025`)?',
        hi: 'जाल 2: एथेनॉल ध्रुवीय व द्रव होने पर भी विद्युत का चालन क्यों नहीं करता?',
      },
      wrong: {
        en: 'Assuming pure liquid alcohols dissociate into H⁺/OH⁻ ions like NaOH or HCl.',
        hi: 'यह सोचना कि एथेनॉल भी अम्ल-क्षार की भाँति जल में आयन देता है।',
      },
      right: {
        en: 'Ethanol is a **covalent molecular compound (`shared e⁻ pairs`)** and **does NOT ionize (`no free ions`)** in water or pure state (`Table 4.1 / Group D 2025`).',
        hi: 'एथेनॉल एक **सहसंयोजी यौगिक** है जो विलयन में **आयनित नहीं होता** (मुक्त आयनों की अनुपस्थिति के कारण विद्युत कुचालक)!',
      },
    },
    {
      title: {
        en: 'TRAP 3: Ethene Covalent Bond Count (`6` Shared Pairs) vs Ethane (`7` Covalent Bonds)',
        hi: 'जाल 3: एथीन में `6` इलेक्ट्रॉन-युग्म आबंध (`Ex`/`PYQ`) बनाम एथेन में `7` आबंध!',
      },
      wrong: {
        en: 'Counting double bond `C=C` as "1 line" -> erroneously saying 5 covalent bonds in `C₂H₄`.',
        hi: 'एथीन (`C₂H₄`) के द्वि-आबंध को 1 गिनकर कुल 5 आबंध बता देना।',
      },
      right: {
        en: '**Ethane (`C₂H₆`) = 7 single covalent bonds** (`6 C–H + 1 C–C`, *Ex Q1*). **Ethene (`C₂H₄`) = 6 shared-pair covalent bonds total** (`4 C–H + 2 pairs in C=C double bond`, *RRB Group D 2025*).',
        hi: '**एथेन (`C₂H₆`)** में `7` एकल आबंध (`Ex Q1`); **एथीन (`C₂H₄`)** में `4 C–H` + `1` द्विआबंध (`2 युग्म`) = कुल **`6` आबंध युग्म** (`Group D 2025`)!',
      },
    },
    {
      title: {
        en: 'TRAP 4: Cyclopropane `C₃H₆` & Cyclohexane `C₆H₁₂` Match `CnH2n` Formula YET Are SATURATED!',
        hi: 'जाल 4: `CnH₂n` सूत्र वाले साइक्लोहेक्सेन/साइक्लोप्रोपेन ‘संतृप्त’ हैं (ऐल्कीन नहीं!)',
      },
      wrong: {
        en: 'Blindly labeling EVERY `C₃H₆` or `C₆H₁₂` formula as an unsaturated Alkene.',
        hi: '`C₃H₆` देखते ही उसे असंतृप्त प्रोपीन समझ लेना।',
      },
      right: {
        en: 'A closed carbon ring uses up 2 hydrogens without any `C=C` double bond! Thus **Cyclopropane (`C₃H₆`, *Group D 2025 PYQ*) & Cyclohexane (`C₆H₁₂`) are SATURATED cyclic alkanes** (`all C–C single bonds`), whereas Propene is unsaturated!',
        hi: 'बंद वलय बनाने में भी 2 H कम हो जाते हैं — अतः **साइक्लोप्रोपेन (`C₃H₆`) व साइक्लोहेक्सेन (`C₆H₁₂`) सभी एकल आबंध वाले संतृप्त वलय** हैं (`Group D 2025`)!',
      },
    },
    {
      title: {
        en: 'TRAP 5: Detergent CANNOT Detect Hard Water (`Soap Does!`) & Phenol `C₆H₅OH` Is NOT an Alcohol Homologue!',
        hi: 'जाल 5: अपमार्जक कठोर जल नहीं जाँच सकता व `C₆H₅OH` (फिनॉल) समजातीय नहीं!',
      },
      wrong: {
        en: 'Using detergent to test water hardness, OR counting aromatic `C₆H₅OH` with `CH₃OH/C₂H₅OH`.',
        hi: 'डिटरजेंट से कठोर जल का परीक्षण करना या `C₆H₅OH` को `CH₃OH` की समजातीय श्रेणी में मान लेना।',
      },
      right: {
        en: '**Detergents lather in BOTH soft and hard water** -> only **Soap** precipitates white scum in hard water (`In-Text Q1 p.84`). And **`C₆H₅OH` (aromatic Phenol)** does NOT fit `CnH₂n+₁OH` -> NOT homologous with Methanol/Ethanol/Propanol (`RRB Tech Gr-III 2024`).',
        hi: '**अपमार्जक कठोर व मृदु दोनों जल में झाग देता है** अतः कठोर जल जाँच हेतु **केवल साबुन** उपयोगी है (`पृ. 84`)। वहीं **`C₆H₅OH` ऐरोमैटिक फिनॉल** है, ऐलिफैटिक ऐल्कोहॉल (`CH₃OH, C₂H₅OH, C₃H₇OH`) की समजातीय श्रेणी से नहीं (`RRB Tech 2024`)!',
      },
    },
  ],
  pioneers: [
    {
      name: { en: 'Friedrich Wöhler (`1828 Organic Chemistry Pioneer`)', hi: 'फ्रेडरिक वोहलर (`1828 कार्बनिक रसायन जनक`)' },
      country: { en: 'Germany (`NCERT Sec 4.2 p.69`)', hi: 'जर्मनी (NCERT पृ. 69)' },
      badge: { en: 'Synthesized Urea in Lab', hi: 'प्रयोगशाला में प्रथम कार्बनिक यौगिक (यूरिया)' },
      fact: {
        en: 'Disproved the "Vital Force" myth in 1828 by synthesizing organic **Urea (`NH₂CONH₂`)** purely from inorganic **Ammonium Cyanate (`NH₄CNO`)**.',
        hi: '1828 में अकार्बनिक अमोनियम सायनेट से प्रथम कार्बनिक यौगिक **यूरिया** बनाकर यह सिद्ध किया कि कार्बनिक यौगिक हेतु ‘जीवन शक्ति’ आवश्यक नहीं।',
      },
    },
    {
      name: { en: 'Buckminster Fuller (`Geodesic Dome -> C₆₀`)', hi: 'बकमिंस्टर फुलर (`फुलेरीन C₆₀ नामकरण`)' },
      country: { en: 'American Architect (`NCERT p.68`)', hi: 'अमेरिकी आर्किटेक्ट (NCERT पृ. 68)' },
      badge: { en: 'Geodesic C₆₀ Inspiration', hi: 'C₆₀ फुटबॉल संरचना प्रेरणा' },
      fact: {
        en: 'The soccer-ball 60-carbon allotrope **`C₆₀` Fullerene** (`20 hexagons + 12 pentagons`) is named after Fuller’s iconic geodesic dome geometry.',
        hi: 'प्रथम पहचाने गए 60-कार्बन अपररूप `C₆₀` की संरचना अमेरिकी वास्तुकार बकमिंस्टर फुलर के जियोडेसिक गुंबद समान फुटबॉल जैसी होने से इसे ‘फुलेरीन’ नाम मिला।',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-diamond',
      figRef: { en: 'NCERT Sec 4.1 (`Diamond 3D Tetrahedral Allotrope`)', hi: 'NCERT 4.1 — हीरा (चतुष्फलकीय अपररूप)' },
      title: {
        en: 'Natural Diamond Crystal Specimen: Rigid `sp³` Lattice (`1 C -> 4 C`, Zero Free Electrons, Hardest Solid)',
        hi: 'प्राकृतिक हीरा क्रिस्टल (`1 C ↔ 4 C` दृढ़ 3D संरचना — ज्ञात सर्वाधिक कठोर व विद्युत कुचालक)',
      },
      imageUrl: '/ncert-notes/class10-chem-ch4/real/diamond-natural-crystal.webp',
      hotspots: [
        {
          en: 'All 4 valence electrons form tight tetrahedral covalent bonds — zero mobile electrons (`insulator`, `critical angle 24.4°`).',
          hi: 'सभी 4 संयोजक इलेक्ट्रॉन आबंधन में व्यस्त रहने से हीरा विद्युत का कुचालक व उच्च अपवर्तनांक (`2.42`) वाला होता है।',
        },
      ],
    },
    {
      id: 'vis-graphite',
      figRef: { en: 'NCERT Sec 4.1 (`Graphite Planar Hexagonal Sheets`)', hi: 'NCERT 4.1 — ग्रेफाइट (षट्कोणीय परतें)' },
      title: {
        en: 'Metallic-Lustrous Hexagonal Graphite Plates (`1 C -> 3 C + Mobile Electron = Electrical Conductor!`)',
        hi: 'चमकदार षट्कोणीय ग्रेफाइट क्रिस्टल (मुक्त इलेक्ट्रॉन कारण विद्युत सुचालक व फिसलनदार)',
      },
      imageUrl: '/ncert-notes/class10-chem-ch4/real/graphite-hexagonal-crystal.webp',
      hotspots: [
        {
          en: 'Slippery 2D hexagonal layers give lubricant/pencil utility while the 4th delocalized electron conducts current cleanly.',
          hi: 'फिसलती षट्कोणीय परतें चिकनाहट देती हैं और चौथा विस्थानीकृत इलेक्ट्रॉन इसे अधातु होते हुए भी सुचालक बनाता है।',
        },
      ],
    },
    {
      id: 'vis-buckyball',
      figRef: { en: 'NCERT Fig (`C₆₀ Buckminsterfullerene`)', hi: 'NCERT चित्र — बकमिंस्टरफुलेरीन C₆₀' },
      title: {
        en: 'Geodesic Buckminsterfullerene (`C₆₀`): 60 Carbon Atoms Arranged in Soccer-Ball Hexagons & Pentagons',
        hi: 'C₆₀ फुलेरीन की फुटबॉल संरचना (60 कार्बन परमाणु — बकमिंस्टर फुलर गुंबद समान)',
      },
      imageUrl: '/ncert-notes/class10-chem-ch4/real/buckminsterfullerene-c60.webp',
      hotspots: [
        {
          en: 'Despite drastically different crystal geometry vs Diamond & Graphite, all three allotropes burn in O₂ to form only CO₂.',
          hi: 'हीरे व ग्रेफाइट से भिन्न ज्यामिति के बावजूद तीनों शुद्ध कार्बन हैं और दहन पर समान `CO₂` देते हैं।',
        },
      ],
    },
    {
      id: 'vis-bunsen',
      figRef: { en: 'NCERT Activity 4.4 (`Complete vs Sooty Flame`)', hi: 'NCERT क्रियाकलाप 4.4 — बन्सेन दहन ज्वाला' },
      title: {
        en: 'Bunsen Air-Hole Combustion Progression: Smoky Yellow Incomplete (1) -> Clean Blue Complete (4)',
        hi: 'वायु-छिद्र नियंत्रण: अपूर्ण पीली कज्जली ज्वाला (1) से स्वच्छ नीली पूर्ण दहन ज्वाला (4)',
      },
      imageUrl: '/ncert-notes/class10-chem-ch4/real/bunsen-flame-combustion.webp',
      hotspots: [
        {
          en: 'Blocked stove air holes starve O₂ -> soot deposits on utensil bottoms (`Ex Q3`); open air supply yields non-luminous blue heat.',
          hi: 'स्टोव के वायु छिद्र बंद होने से ऑक्सीजन घटती है व बर्तन तली काली (`Ex Q3`) हो जाती है; पर्याप्त हवा में नीली लौ बनती है।',
        },
      ],
    },
    {
      id: 'vis-soap-micelle',
      figRef: { en: 'NCERT Sec 4.5 (`Soap Amphiphilic Surfactant Film`)', hi: 'NCERT 4.5 — साबुन झिल्ली व मिसेल' },
      title: {
        en: 'Iridescent Surfactant Soap Membrane Formed by Hydrophilic Ionic Heads & Hydrophobic Carbon Chains',
        hi: 'साबुन की इंद्रधनुषी झिल्ली (जलरागी आयनिक सिरा व जलविरागी हाइड्रोकार्बन पूँछ)',
      },
      imageUrl: '/ncert-notes/class10-chem-ch4/real/soap-film-micelle.webp',
      hotspots: [
        {
          en: 'Tails pull non-polar grease/oil into core micelles while negative carboxylate heads stay suspended in water (`colloid`).',
          hi: 'साबुन के मिसेल तेल की बूँद को केंद्र में कैद कर जल में कोलॉइडी पायस बनाकर मैल धो देते हैं।',
        },
      ],
    },
  ],
  activities: [
    {
      id: 'act-4-1',
      title: { en: 'Activity 4.1: Everyday Carbon Compound Audit (`p.64`)', hi: 'क्रियाकलाप 4.1: दैनिक वस्तुओं में कार्बन यौगिकों की पहचान' },
      setup: { en: 'Sort 10 morning items into Metal, Glass/Clay, and Other (`food, clothes, medicines, books`). Ask how to confirm carbon inside "Other" items.', hi: 'सुबह से प्रयुक्त 10 वस्तुओं को धातु, काँच/मिट्टी व अन्य (`भोजन, कपड़े, पुस्तक, दवा`) वर्गों में बाँटकर ‘अन्य’ में कार्बन होने का परीक्षण सोचें।' },
      observation: { en: 'Nearly all "Other" items are carbon compounds; burning them releases **`CO₂`** which turns limewater milky (`plus organic living structures all rest on carbon!`).', hi: 'लगभग सभी ‘अन्य’ वस्तुएँ कार्बन यौगिक हैं — इन्हें जलाने पर **`CO₂`** गैस निकलती है जो चूने के पानी को दूधिया कर देती है।' },
      predictQuestion: {
        question: { en: 'What exact percentage of carbon exists in Earth’s crust (`minerals/coal/petrol`) and air (`CO₂`) respectively?', hi: 'भूपर्पटी (खनिज/कोयला) और वायुमंडल (CO₂) में कार्बन की क्रमशः मात्रा कितनी है?' },
        options: { en: ['0.2% and 0.3%', '0.02% and 0.03%', '2.0% and 0.03%', '0.02% and 21%'], hi: ['0.2% व 0.3%', '0.02% व 0.03%', '2.0% व 0.03%', '0.02% व 21%'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-4-2',
      title: { en: 'Activity 4.2: Alcohol Homologous Step Difference (`p.74`)', hi: 'क्रियाकलाप 4.2: एल्कोहॉल समजातीय श्रेणी में सूत्र व द्रव्यमान अंतर' },
      setup: { en: 'Compare `(a) CH₃OH vs C₂H₅OH`, `(b) C₂H₅OH vs C₃H₇OH`, `(c) C₃H₇OH vs C₄H₉OH` in formula & molecular mass (`C=12u, H=1u`).', hi: 'मेथेनॉल से ब्यूटेनॉल तक के तीन युग्मों के आण्विक सूत्रों व आण्विक द्रव्यमान (`C=12u, H=1u`) का अंतर निकालें।' },
      observation: { en: 'Every consecutive pair differs identically by **`–CH₂–` group (`1 atom C + 2 atoms H`)** and **`14 u` (`12 + 2`) mass** -> confirming a **Homologous Series** (`alcohol family -OH`).', hi: 'तीनों युग्मों में क्रमशः **`–CH₂–` इकाई** एवं **`14 u` द्रव्यमान** का एकसमान अंतर मिलता है — यह एक समजातीय श्रेणी परिवार है!' },
      predictQuestion: {
        question: { en: 'Each successive member in any homologous series differs by what formula unit & atomic mass?', hi: 'किसी भी समजातीय श्रेणी के दो क्रमिक सदस्यों के बीच सूत्र व द्रव्यमान का कितना अंतर होता है?' },
        options: { en: ['–CH– and 13 u', '–CH₂– and 14 u', '–CH₃– and 15 u', '–C₂H₄– and 28 u'], hi: ['–CH– व 13 u', '–CH₂– व 14 u', '–CH₃– व 15 u', '–C₂H₄– व 28 u'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-4-3',
      title: { en: 'Activity 4.3: Flame & Soot Test (`Naphthalene, Camphor, Alcohol`, `p.76`)', hi: 'क्रियाकलाप 4.3: नैफ्थलीन, कपूर व एल्कोहॉल का दहन व कज्जल तश्तरी परीक्षण' },
      setup: { en: 'Burn naphthalene, camphor (`higher C% unsaturated`), and ethanol separately on a spatula; hold a metal plate above each flame.', hi: 'स्पैचुला पर नैफ्थलीन, कपूर व ऐल्कोहॉल जलाकर ज्वाला का रंग व ऊपर रखी धातु तश्तरी पर जमी कालिख देखें।' },
      observation: { en: '**Alcohol (ethanol)** burns with a **clean blue flame** (minimal/no soot on plate), while **Naphthalene & Camphor** burn with **yellow smoky flames leaving black carbon soot deposits** on the metal plate!', hi: '**ऐल्कोहॉल** स्वच्छ नीली लौ से जलता है (तश्तरी साफ रहती है), जबकि **नैफ्थलीन व कपूर** पीली धुएँदार लौ के साथ तश्तरी पर **काला कज्जल (कार्बन)** जमा करते हैं!' },
      predictQuestion: {
        question: { en: 'Which compound deposits thick black carbon soot on a metal plate held above its flame in Activity 4.3?', hi: 'क्रियाकलाप 4.3 में जलाने पर कौन-सा यौगिक पीली धुएँदार लौ व धातु तश्तरी पर काला कज्जल जमाता है?' },
        options: { en: ['Ethanol', 'Methane in full oxygen', 'Naphthalene / Camphor', 'Ethane'], hi: ['एथेनॉल', 'पर्याप्त ऑक्सीजन में मेथेन', 'नैफ्थलीन / कपूर', 'एथेन'] },
        correctIndex: 2,
      },
    },
    {
      id: 'act-4-4',
      title: { en: 'Activity 4.4: Bunsen Air-Hole Adjustment (`Blue vs Sooty Yellow`, `p.77`)', hi: 'क्रियाकलाप 4.4: बन्सेन बर्नर में वायु छिद्र से नीली बनाम पीली ज्वाला नियंत्रण' },
      setup: { en: 'Light a Bunsen burner and vary the bottom air-intake collar from closed to wide open.', hi: 'बन्सेन बर्नर जलाकर आधार पर स्थित वायु छिद्र को क्रमशः बंद व पूरा खोलकर ज्वाला देखें।' },
      observation: { en: '**Closed air hole** (`O₂ starved -> incomplete combustion`) -> **yellow sooty luminous flame**; **Open air hole** (`oxygen-rich complete combustion`) -> **clean hot blue flame** (`blocked domestic stove holes likewise blacken cooking pots!`).', hi: 'वायु छिद्र **बंद** करने पर अपूर्ण दहन से **पीली कज्जली लौ** तथा पूरा **खोलने** पर पर्याप्त ऑक्सीजन से **स्वच्छ नीली लौ** प्राप्त होती है!' },
      predictQuestion: {
        question: { en: 'If cooking pot bottoms turn black outdoors/on a gas stove (`Ex Q3`), what has happened?', hi: 'खाना बनाते समय बर्तन की तली बाहर से काली होने का क्या अर्थ है (`अभ्यास 3`)?' },
        options: { en: ['Fuel is burning completely', 'Air holes are blocked causing incomplete combustion', 'The food is fully cooked', 'Water inside fuel vaporized'], hi: ['ईंधन पूर्ण जल रहा है', 'वायु छिद्र बंद होने से ईंधन पूरी तरह नहीं जल रहा (अपूर्ण दहन)', 'भोजन पक गया', 'ईंधन गीला है'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-4-5',
      title: { en: 'Activity 4.5: Ethanol + Alkaline `KMnO₄` Oxidation (`p.78`)', hi: 'क्रियाकलाप 4.5: एथेनॉल का क्षारीय `KMnO₄` द्वारा ऑक्सीकरण' },
      setup: { en: 'Warm `3 mL` ethanol in a water bath and add `5% alkaline KMnO₄` dropwise.', hi: 'जल ऊष्मक में गर्म `3 mL` एथेनॉल में बूँद-बूँद करके `5% क्षारीय KMnO₄` विलयन डालें।' },
      observation: { en: 'Initially **purple `KMnO₄` decolorizes** as it oxidizes ethanol -> ethanoic acid; once all ethanol is consumed, extra `KMnO₄` keeps its purple color!', hi: 'प्रारंभ में `KMnO₄` का **बैंगनी रंग लुप्त** हो जाता है (एथेनॉल के ऑक्सीकरण कारण); सारा एथेनॉल समाप्त होने पर अतिरिक्त `KMnO₄` का बैंगनी रंग बना रहता है!' },
      predictQuestion: {
        question: { en: 'Why does purple color of initial drops of alkaline `KMnO₄` vanish when added to warm ethanol?', hi: 'गर्म एथेनॉल में `KMnO₄` की प्रारंभिक बूँदें डालने पर बैंगनी रंग क्यों उड़ जाता है?' },
        options: { en: ['KMnO₄ is used up oxidizing ethanol to ethanoic acid', 'KMnO₄ sublimes immediately', 'Ethanol reduces acid into methane gas', 'Water neutralizes purple dye'], hi: ['KMnO₄ एथेनॉल को एथेनॉइक अम्ल में ऑक्सीकृत करने में खर्च हो जाता है', 'KMnO₄ ऊर्ध्वपातित होता है', 'एथेनॉल मेथेन गैस बनाता है', 'जल बैंगनी रंग घोल देता है'] },
        correctIndex: 0,
      },
    },
    {
      id: 'act-4-6',
      title: { en: 'Activity 4.6: Ethanol + Metallic Sodium (`H₂` Pop Test, `p.80`)', hi: 'क्रियाकलाप 4.6: सोडियम व एथेनॉल अभिक्रिया — हाइड्रोजन पॉप परीक्षण' },
      setup: { en: 'Drop a rice-grain piece of dry Sodium (`teacher demo`) into absolute ethanol; test escaping gas with a burning splinter.', hi: 'परिशुद्ध एथेनॉल में चावल के दाने बराबर सोडियम टुकड़ा डालकर निकलती गैस के पास जलती तीली लाएँ।' },
      observation: { en: 'Brisk gas bubbles evolve: **`2Na + 2C₂H₅OH -> 2C₂H₅O⁻Na⁺ (Sodium Ethoxide) + H₂↑`**, burning with a sharp **`pop` sound** (`proving Hydrogen!`).', hi: 'तेजी से निकलती **`H₂` गैस जलती तीली से पॉप ध्वनि संग जलती है** तथा विलयन में सोडियम एथॉक्साइड (`CH₃CH₂O⁻Na⁺`) बनता है!' },
      predictQuestion: {
        question: { en: 'What are the products formed when sodium metal reacts cleanly with ethanol (`ALP 2025`)?', hi: 'जब सोडियम धातु एथेनॉल से अभिक्रिया करती है तो कौन-से दो उत्पाद बनते हैं?' },
        options: { en: ['Sodium carbonate + CO₂', 'Sodium ethoxide + Hydrogen gas', 'Sodium hydroxide + Oxygen', 'Sodium acetate + Methane'], hi: ['सोडियम कार्बोनेट + CO₂', 'सोडियम एथॉक्साइड + हाइड्रोजन गैस', 'सोडियम हाइड्रॉक्साइड + ऑक्सीजन', 'सोडियम ऐसीटेट + मेथेन'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-4-7',
      title: { en: 'Activity 4.7: Litmus & Universal pH Comparison (`CH₃COOH vs HCl`, `p.81`)', hi: 'क्रियाकलाप 4.7: लिटमस व सार्वत्रिक सूचक से `CH₃COOH` बनाम `HCl` तुलना' },
      setup: { en: 'Test dilute **Acetic Acid** vs dilute **Hydrochloric Acid (`HCl`)** with litmus paper and universal indicator strip.', hi: 'तनु ऐसीटिक अम्ल व तनु हाइड्रोक्लोरिक अम्ल की लिटमस व सार्वत्रिक सूचक (pH) से तुलना करें।' },
      observation: { en: '**BOTH turn blue litmus red**, yet **Universal Indicator shows HCl (`dark red, ~pH 1`) is a STRONG acid (`100% ionized`)**, while **Acetic acid (`yellow-orange, ~pH 4`) is a WEAK acid (`partially ionized`)**!', hi: 'दोनों नीले लिटमस को लाल करते हैं, परंतु **सार्वत्रिक सूचक स्पष्ट दर्शाता है कि `HCl` प्रबल अम्ल (पूर्ण आयनित) और ऐसीटिक अम्ल दुर्बल अम्ल** है!' },
      predictQuestion: {
        question: { en: 'Between universal indicator & litmus paper, which clearly distinguishes strong HCl from weak ethanoic acid?', hi: 'प्रबल `HCl` व दुर्बल एथेनॉइक अम्ल के बीच सामर्थ्य का अंतर किससे स्पष्ट पता चलता है?' },
        options: { en: ['Litmus paper alone', 'Universal pH indicator', 'Distilled water', 'Phenolphthalein colorless test'], hi: ['केवल लिटमस पत्र', 'सार्वत्रिक सूचक (Universal Indicator)', 'आसुत जल', 'रंगहीन सूचक'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-4-8',
      title: { en: 'Activity 4.8: Sweet Ester Synthesis in Water Bath (`p.81`, `Fig 4.`)', hi: 'क्रियाकलाप 4.8: जल ऊष्मक में एथेनॉल + ग्लैशल अम्ल से मीठे एस्टर का निर्माण' },
      setup: { en: 'Heat `1 mL` absolute ethanol + `1 mL` glacial acetic acid + few drops **Conc. `H₂SO₄`** in a **water bath** (`5 min`), then pour into `20–50 mL` water and smell.', hi: '`1-1 mL` एथेनॉल व ग्लैशल ऐसीटिक अम्ल में कुछ बूँद सांद्र `H₂SO₄` डालकर जल ऊष्मक में 5 मिनट गरम कर जल में उड़ेलकर सूँघें।' },
      observation: { en: 'A pleasant **sweet fruity fragrance** rises due to **Ethyl Ethanoate Ester (`CH₃COOC₂H₅`)** (`acid-catalyzed Esterification`).', hi: 'मीठी फल जैसी सुगंध वाला **एस्टर (`CH₃COOC₂H₅`)** निर्मित होता है — जिसका उपयोग इत्र व स्वाद कारक में होता है!' },
      predictQuestion: {
        question: { en: 'Heating ethanol + ethanoic acid with conc. `H₂SO₄` yields a sweet-smelling compound belonging to which group?', hi: 'एथेनॉल व एथेनॉइक अम्ल को सांद्र `H₂SO₄` संग गरम करने पर बनी मीठी गंध किस वर्ग के यौगिक की होती है?' },
        options: { en: ['Ketone (–CO–)', 'Ester (–COO–)', 'Aldehyde (–CHO)', 'Haloalkane (–Cl)'], hi: ['कीटोन', 'एस्टर (–COO–)', 'ऐल्डिहाइड', 'हैलोऐल्केन'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-4-9',
      title: { en: 'Activity 4.9: Ethanoic Acid + `Na₂CO₃ / NaHCO₃` Carbonate Test (`p.82`)', hi: 'क्रियाकलाप 4.9: एथेनॉइक अम्ल + कार्बोनेट/बाइकार्बोनेट द्वारा `CO₂` जाँच' },
      setup: { en: 'Add `2 mL` dilute ethanoic acid to `Na₂CO₃` (then repeat with `NaHCO₃`); pass evolved gas into fresh limewater.', hi: 'सोडियम कार्बोनेट व सोडियम हाइड्रोजनकार्बोनेट में तनु एथेनॉइक अम्ल डालकर निकलती गैस को ताजे चूने के पानी में भेजें।' },
      observation: { en: 'Brisk effervescence of **`CO₂` turns fresh limewater milky** (`CaCO₃` ppt) cleanly (`CH₃COOH + NaHCO₃ -> CH₃COONa + H₂O + CO₂↑`).', hi: 'तीव्र बुदबुदाहट संग निकली **`CO₂` गैस चूने के पानी को दूधिया** कर देती है — यह अम्ल पहचान का पक्का प्रमाण है!' },
      predictQuestion: {
        question: { en: 'Adding `NaHCO₃` distinguishes Ethanoic acid from Ethanol because ONLY Ethanoic acid evolves:', hi: 'बेकिंग सोडा (`NaHCO₃`) से एथेनॉइक अम्ल व एथेनॉल में अंतर दिखता है क्योंकि केवल अम्ल उत्सर्जित करता है:' },
        options: { en: ['H₂ gas', 'CO₂ gas turning limewater milky', 'O₂ gas', 'Cl₂ fumes'], hi: ['H₂ गैस', 'CO₂ गैस (चूना जल दूधिया करने वाली)', 'O₂ गैस', 'Cl₂ वाष्प'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-4-10',
      title: { en: 'Activity 4.10: Oil + Water Emulsion & Micelle Action (`p.83`, `Fig 4.12`)', hi: 'क्रियाकलाप 4.10: तेल + जल + साबुन विलयन से पायस व मिसेल निर्माण' },
      setup: { en: 'Shake Tube `A` (`10 mL` water + `1 drop` cooking oil) and Tube `B` (`same + few drops soap solution`) identically and let rest.', hi: 'परखनली A (`जल+तेल`) व परखनली B (`जल+तेल+साबुन`) को समान हिलाकर स्थिर रखें।' },
      observation: { en: 'In **Tube A**, oil quickly floats back into a **separate layer** first; in **Tube B**, **soap micelles emulsify oil droplets** uniformly keeping them mixed much longer!', hi: '**परखनली A में तेल तुरंत अलग परत बना लेता है**, जबकि **परखनली B में साबुन के मिसेल तेल को पायस रूप में काफी देर मिलाए रखते हैं**!' },
      predictQuestion: {
        question: { en: 'In a soap micelle suspended in water (`Fig 4.12`), which end faces INWARD toward the oily dirt?', hi: 'जल में बने साबुन मिसेल (`चित्र 4.12`) में कौन-सा सिरा भीतर तैलीय मैल की ओर रहता है?' },
        options: { en: ['Hydrophilic ionic head (–COO⁻Na⁺)', 'Hydrophobic hydrocarbon carbon tail', 'Sodium metal ion only', 'Hydroxide ion (OH⁻)'], hi: ['जलरागी आयनिक सिरा', 'जलविरागी हाइड्रोकार्बन पूँछ', 'सोडियम आयन', 'हाइड्रॉक्साइड आयन'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-4-11',
      title: { en: 'Activity 4.11: Distilled vs Hard Water Soap Foam & White Scum (`p.85`)', hi: 'क्रियाकलाप 4.11: आसुत बनाम कठोर जल में साबुन का झाग व सफेद स्कम' },
      setup: { en: 'Shake equal soap drops in `10 mL` distilled/rainwater vs `10 mL` hard handpump/well water (`or Ca²⁺/Mg²⁺ salt solution`).', hi: 'आसुत/वर्षा जल व कठोर हैंडपंप जल (`या Ca²⁺/Mg²⁺ लवण विलयन`) में साबुन घोल डालकर हिलाएँ।' },
      observation: { en: '**Distilled water** yields **abundant lather**; **Hard water** yields scant foam and a **white curd-like insoluble precipitate (`SCUM`)** as soap reacts with `Ca²⁺/Mg²⁺` ions!', hi: 'आसुत जल में **अधिक झाग** बनता है, जबकि **कठोर जल में सफेद दही जैसा अघुलनशील पदार्थ (`स्कम`)** बनता है!' },
      predictQuestion: {
        question: { en: 'Which dissolved ions in hard water react with soap to form insoluble white curd-like `scum`?', hi: 'कठोर जल में उपस्थित किन आयनों की साबुन से अभिक्रिया कारण सफेद दही जैसा ‘स्कम’ बनता है?' },
        options: { en: ['Na⁺ and K⁺ ions', 'Ca²⁺ and Mg²⁺ ions', 'Cl⁻ and SO₄²⁻ alone', 'CO₂ gas dissolved'], hi: ['Na⁺ व K⁺', 'Ca²⁺ व Mg²⁺ आयन', 'केवल क्लोराइड', 'घुली CO₂'] },
        correctIndex: 1,
      },
    },
    {
      id: 'act-4-12',
      title: { en: 'Activity 4.12: Hard Water Scum Rescue — Soap vs Synthetic Detergent (`p.85`)', hi: 'क्रियाकलाप 4.12: कठोर जल में साबुन बनाम अपमार्जक (Detergent) तुलना' },
      setup: { en: 'Add 5 drops Soap in `10 mL` hard water (Tube 1) and 5 drops Detergent in `10 mL` hard water (Tube 2) and shake.', hi: 'दोनों में `10 mL` कठोर जल लेकर एक में 5 बूँद साबुन घोल व दूसरे में 5 बूँद अपमार्जक घोल डालकर हिलाएँ।' },
      observation: { en: '**Soap tube** forms white curd **scum** with weak foam; **Detergent (`sulfonate/ammonium salts`)** does **NOT react insolubly with `Ca²⁺/Mg²⁺`**, producing **rich lather without scum**!', hi: 'साबुन वाली नली में सफेद स्कम बनता है; **अपमार्जक (`सल्फोनिक/अमोनियम लवण`) `Ca²⁺/Mg²⁺` से अवक्षेप नहीं बनाता अतः कठोर जल में भी भरपूर झाग बनता है**!' },
      predictQuestion: {
        question: { en: 'Synthetic detergents work effectively even in hard water because their charged ends are usually:', hi: 'अपमार्जक कठोर जल में भी प्रभावी बने रहते हैं क्योंकि वे लंबी कार्बन शृंखला वाले होते हैं:' },
        options: { en: ['Sodium/Potassium carboxylate soaps', 'Sulfonate or Ammonium salts (that don’t ppt Ca²⁺/Mg²⁺)', 'Dilute acetic acid esters', 'Pure mineral oils'], hi: ['सोडियम कार्बोक्सिलेट साबुन', 'सल्फोनिक या अमोनियम लवण (जो Ca²⁺/Mg²⁺ से अवक्षेप न बनाएँ)', 'ऐसीटिक एस्टर', 'खनिज तेल'] },
        correctIndex: 1,
      },
    },
  ],
  tables: [
    {
      id: 'tbl-4-1',
      title: {
        en: 'NCERT Table 4.1: Melting & Boiling Points of Common Carbon Compounds (`vs High-MP Ionic Compounds`)',
        hi: 'NCERT तालिका 4.1: कार्बन के कुछ सहसंयोजी यौगिकों के निम्न गलनांक एवं क्वथनांक (`K` में)',
      },
      headers: {
        en: ['Carbon Compound', 'Formula', 'Melting Point (K)', 'Boiling Point (K)', 'Key NCERT / CBT Point'],
        hi: ['कार्बन यौगिक', 'रासायनिक सूत्र', 'गलनांक (K)', 'क्वथनांक (K)', 'परीक्षा मुख्य तथ्य'],
      },
      rows: [
        [
          { en: 'Acetic Acid (Ethanoic)', hi: 'ऐसीटिक एसिड (एथेनॉइक अम्ल)' },
          { en: 'CH₃COOH', hi: 'CH₃COOH' },
          { en: '**290 K (`16.8 °C`)**', hi: '**290 K** (`जाड़े में जमे`)' },
          { en: '391 K (`118 °C`)', hi: '391 K' },
          { en: 'Freezes in winter -> **Glacial Acetic Acid**', hi: 'ठंड में जमने से **ग्लैशल ऐसीटिक अम्ल** कहते हैं' },
        ],
        [
          { en: 'Chloroform', hi: 'क्लोरोफॉर्म' },
          { en: 'CHCl₃', hi: 'CHCl₃' },
          { en: '209 K', hi: '209 K' },
          { en: '334 K (`61 °C`)', hi: '334 K (`61 °C`)' },
          { en: 'Made via methane chlorination', hi: 'प्रतिस्थापन अभिक्रिया उत्पाद' },
        ],
        [
          { en: 'Ethanol', hi: 'एथेनॉल' },
          { en: 'CH₃CH₂OH', hi: 'CH₃CH₂OH' },
          { en: '156 K', hi: '156 K' },
          { en: '**351 K (`78 °C`)**', hi: '**351 K (`78 °C`)**' },
          { en: 'Liquid at RT; dehydrated @ **443 K** -> Ethene', hi: 'कक्ष ताप पर द्रव; `443 K` पर एथीन देता है' },
        ],
        [
          { en: 'Methane', hi: 'मेथेन' },
          { en: 'CH₄', hi: 'CH₄' },
          { en: '90 K', hi: '90 K' },
          { en: '111 K', hi: '111 K' },
          { en: 'Weak intermolecular force; Biogas & CNG chief gas', hi: 'दुर्बल अंतरआण्विक बल; CNG व बायोगैस घटक' },
        ],
      ],
    },
    {
      id: 'tbl-4-2',
      title: {
        en: 'NCERT Table 4.2: Saturated Alkane Homologous Series (`CnH₂n+₂`, `1–6` Carbons + Covalent Bond Count)',
        hi: 'NCERT तालिका 4.2: संतृप्त ऐल्केन समजातीय श्रेणी (`1–6` कार्बन, सूत्र, संरचना व आबंध संख्या)',
      },
      headers: {
        en: ['C Atoms (n)', 'Alkane Name', 'Formula (`CnH₂n+₂`)', 'Total Single Covalent Bonds (`3n+1`)'],
        hi: ['कार्बन संख्या (n)', 'नाम', 'आण्विक सूत्र (`CnH2n+2`)', 'कुल एकल सहसंयोजी आबंध (`3n+1`)'],
      },
      rows: [
        [{ en: '1', hi: '1' }, { en: 'Methane', hi: 'मेथेन' }, { en: 'CH₄', hi: 'CH₄' }, { en: '**4** (Tetrahedral; CNG/Biogas)', hi: '**4** (`CNG व बायोगैस मुख्य घटक`)' }],
        [{ en: '2', hi: '2' }, { en: 'Ethane', hi: 'एथेन' }, { en: 'C₂H₆', hi: 'C₂H₆' }, { en: '**7** (**NCERT Ex Q1 Exact Answer!**)', hi: '**7** (**अभ्यास प्रश्न 1 सटीक उत्तर!**)' }],
        [{ en: '3', hi: '3' }, { en: 'Propane', hi: 'प्रोपेन' }, { en: 'C₃H₈', hi: 'C₃H₈' }, { en: '10 (`LPG component`)', hi: '10 (`LPG घटक`)' }],
        [{ en: '4', hi: '4' }, { en: 'Butane', hi: 'ब्यूटेन' }, { en: 'C₄H₁₀', hi: 'C₄H₁₀' }, { en: '13 (**2 Structural Isomers**)', hi: '13 (**2 संरचनात्मक समावयवी**)' }],
        [{ en: '5', hi: '5' }, { en: 'Pentane', hi: 'पेन्टेन' }, { en: 'C₅H₁₂', hi: 'C₅H₁₂' }, { en: '16 (**3 Structural Isomers — In-Text Q1**)', hi: '16 (**3 समावयवी — पृ. 76 प्रश्न 1**)' }],
        [{ en: '6', hi: '6' }, { en: 'Hexane', hi: 'हेक्सेन' }, { en: 'C₆H₁₄', hi: 'C₆H₁₄' }, { en: '19 (`5 isomers`; cf. Cyclohexane C₆H₁₂)', hi: '19 (`तुलना: साइक्लोहेक्सेन C₆H₁₂`)' }],
      ],
    },
    {
      id: 'tbl-4-3',
      title: {
        en: 'NCERT Table 4.3 & 4.4 Combined: Heteroatoms, Functional Groups & IUPAC Nomenclature',
        hi: 'NCERT सारणी 4.3 व 4.4 संयुक्त: विषम परमाणु, प्रकार्यात्मक समूह, पूर्वलग्न/अनुलग्न एवं IUPAC उदाहरण',
      },
      headers: {
        en: ['Heteroatom / Bond', 'Class of Compound', 'Functional Group Formula', 'Prefix / Suffix & C₃ Example'],
        hi: ['विषम परमाणु / आबंध', 'यौगिकों का प्रकार', 'प्रकार्यात्मक समूह सूत्र', 'पूर्वलग्न/अनुलग्न व उदाहरण (C₃)'],
      },
      rows: [
        [{ en: 'Cl / Br', hi: 'Cl / Br' }, { en: 'Haloalkane', hi: 'हैलो-ऐल्केन' }, { en: '–Cl, –Br', hi: '—Cl, —Br' }, { en: '**Prefix `chloro-/bromo-`**: Chloropropane / Bromopropane', hi: '**पूर्वलग्न `क्लोरो-/ब्रोमो-`**: क्लोरोप्रोपेन / ब्रोमोप्रोपेन' }],
        [{ en: 'Oxygen', hi: 'ऑक्सीजन' }, { en: '1. Alcohol', hi: '1. ऐल्कोहॉल' }, { en: '–OH', hi: '—OH' }, { en: '**Suffix `-ol`**: Propanol (`CH₃CH₂CH₂OH`)', hi: '**अनुलग्न `-ol`**: प्रोपेनॉल (`C₃H₇OH`)' }],
        [{ en: 'Oxygen', hi: 'ऑक्सीजन' }, { en: '2. Aldehyde', hi: '2. ऐल्डिहाइड' }, { en: '–CHO (`–CH=O`)', hi: '—CHO' }, { en: '**Suffix `-al`**: Propanal (`CH₃CH₂CHO`)', hi: '**अनुलग्न `-al`**: प्रोपेनैल (`Butanal: Tech PYQ`)' }],
        [{ en: 'Oxygen', hi: 'ऑक्सीजन' }, { en: '3. Ketone (`always mid-chain!`)', hi: '3. कीटोन (`मध्य कार्बन पर`)' }, { en: '>C=O (`–CO–`)', hi: '—CO—' }, { en: '**Suffix `-one`**: Propanone (`CH₃COCH₃`, *Ex Q2 Butanone*)', hi: '**अनुलग्न `-one`**: प्रोपेनोन (`CH₃COCH₃`, *ब्यूटेनॉन Ex Q2*)' }],
        [{ en: 'Oxygen', hi: 'ऑक्सीजन' }, { en: '4. Carboxylic Acid', hi: '4. कार्बोक्सिलिक अम्ल' }, { en: '–COOH', hi: '—COOH' }, { en: '**Suffix `-oic acid`**: Propanoic acid (`C₂H₅COOH`)', hi: '**अनुलग्न `-oic acid`**: प्रोपेनॉइक अम्ल' }],
        [{ en: 'Carbon=Carbon', hi: 'C=C द्विआबंध' }, { en: '5. Alkene (`CnH₂n`)', hi: '5. ऐल्कीन (`CnH2n`)' }, { en: 'C=C double bond', hi: 'C=C' }, { en: '**Suffix `-ene`**: Propene (`C₃H₆`)', hi: '**अनुलग्न `-ene`**: प्रोपीन (`C₃H₆`)' }],
        [{ en: 'Carbon≡Carbon', hi: 'C≡C त्रिआबंध' }, { en: '6. Alkyne (`CnH₂n₋₂`)', hi: '6. ऐल्काइन (`CnH2n-2`)' }, { en: 'C≡C triple bond', hi: 'C≡C' }, { en: '**Suffix `-yne`**: Propyne (`C₃H₄`)', hi: '**अनुलग्न `-yne`**: प्रोपाइन (`C₃H₄`)' }],
      ],
    },
    {
      id: 'tbl-4-4',
      title: {
        en: 'Allotrope Showdown (`Diamond vs Graphite vs Fullerene C₆₀`) — Every Physical Difference',
        hi: 'कार्बन के तीनों अपररूपों (हीरा, ग्रेफाइट व फुलेरीन `C₆₀`) की संपूर्ण तुलनात्मक सारणी',
      },
      headers: {
        en: ['Feature', 'Diamond (`हीरा`)', 'Graphite (`ग्रेफाइट`)', 'Buckminsterfullerene (`C₆₀`)'],
        hi: ['विशेषता', 'हीरा (`Diamond`)', 'ग्रेफाइट (`Graphite`)', 'फुलेरीन (`C₆₀`)'],
      },
      rows: [
        [{ en: '**Bonding per C atom**', hi: '**प्रत्येक C का आबंधन**' }, { en: '4 single bonds (3D tetrahedral)', hi: 'अन्य **4 C** से दृढ़ 3D चतुष्फलकीय' }, { en: '3 bonds in layer (1 double bond)', hi: 'एक तल में **3 C** (एक द्विआबंध)' }, { en: 'Closed 60-C dome (`20 hex + 12 pent`)', hi: '60 कार्बन फुटबॉल पिंजरा' }],
        [{ en: '**Electrical Conductivity**', hi: '**विद्युत चालकता**' }, { en: '**Non-Conductor** (no free e⁻)', hi: '**कुचालक** (मुक्त e⁻ नहीं)' }, { en: '**Good Conductor!** (4th free e⁻)', hi: '**सुचालक!** (चौथा गतिशील e⁻)' }, { en: 'Low/molecular crystal', hi: 'आण्विक ठोस' }],
        [{ en: '**Hardness & Feel**', hi: '**कठोरता व स्पर्श**' }, { en: 'Hardest natural substance (`3D`)', hi: 'सर्वाधिक कठोर प्राकृतिक पदार्थ' }, { en: 'Smooth, slippery sliding sheets', hi: 'चिकना व फिसलनशील (परतें खिसकें)' }, { en: 'Soft dark molecular solid', hi: 'मृदु आण्विक गोलाकार क्रिस्टल' }],
        [{ en: '**Combustion Product**', hi: '**दहन उत्पाद (`+ O₂`)**' }, { en: 'Only `CO₂` + Heat + Light', hi: 'केवल `CO₂` + ऊष्मा + प्रकाश' }, { en: 'Only `CO₂` + Heat + Light', hi: 'केवल `CO₂` + ऊष्मा + प्रकाश' }, { en: 'Only `CO₂` + Heat + Light', hi: 'केवल `CO₂` + ऊष्मा + प्रकाश' }],
      ],
    },
    {
      id: 'tbl-4-5',
      title: {
        en: 'Must-Memorize Chemical Equations, Soap vs Detergent & Identification Tests',
        hi: 'प्रमुख कार्बन अभिक्रियाएँ, साबुन बनाम अपमार्जक व प्रयोगशाला पहचान परीक्षण',
      },
      headers: {
        en: ['Reaction / Test Name', 'Reagents & Conditions', 'Product / Observable Change', 'Railway CBT Relevance'],
        hi: ['अभिक्रिया / परीक्षण', 'अभिकारक व परिस्थिति', 'उत्पाद / दृश्य परिवर्तन', 'रेलवे परीक्षा तथ्य'],
      },
      rows: [
        [
          { en: '**Oxidation (`4.3.2`)**', hi: '**ऑक्सीकरण**' },
          { en: 'Ethanol + Alk. `KMnO₄` (or `K₂Cr₂O₇`) + Heat', hi: 'एथेनॉल + क्षारीय `KMnO₄` / `K₂Cr₂O₇` + ऊष्मा' },
          { en: 'Ethanoic Acid (`Purple fades!`)', hi: 'एथेनॉइक अम्ल (`बैंगनी रंग उड़े!`)' },
          { en: 'KMnO₄ acts as **Oxidizing Agent**', hi: 'KMnO₄ = प्रबल **ऑक्सीकारक**' },
        ],
        [
          { en: '**Addition / Hydrogenation**', hi: '**संकलन / हाइड्रोजनीकरण**' },
          { en: 'Unsaturated Oil + `H₂` (**`Ni / Pd` catalyst**)', hi: 'असंतृप्त तेल + `H₂` (**`Ni / Pd` उत्प्रेरक**)' },
          { en: 'Saturated Fat (`Vegetable Ghee`)', hi: 'संतृप्त वसा (`वनस्पति घी`)' },
          { en: 'Unsaturated decolorizes **Br₂ water**', hi: 'असंतृप्त यौगिक ब्रोमीन जल रंगहीन करें' },
        ],
        [
          { en: '**Substitution (`4.3.4`)**', hi: '**प्रतिस्थापन**' },
          { en: 'Methane (`CH₄`) + `Cl₂` + **Sunlight**', hi: 'मेथेन (`CH₄`) + `Cl₂` + **सूर्यप्रकाश**' },
          { en: '`CH₃Cl + HCl` (`chain reaction`)', hi: '`CH₃Cl + HCl` (क्रमानुसार प्रतिस्थापन)' },
          { en: 'Characteristic of **Alkanes**', hi: 'संतृप्त ऐल्केन की मुख्य अभिक्रिया' },
        ],
        [
          { en: '**Dehydration (`443 K`)**', hi: '**निर्जलीकरण (`443 K`)**' },
          { en: 'Ethanol + **Excess Conc. `H₂SO₄` @ `443 K`**', hi: 'एथेनॉल + **आधिक्य सांद्र `H₂SO₄` (`443 K`)**' },
          { en: '**Ethene (`C₂H₄`)** + `H₂O`', hi: '**एथीन (`C₂H₄`)** + `H₂O`' },
          { en: 'Top **Group D / Tech PYQ (`170 °C`)**', hi: '`443 K (170°C)` सर्वाधिक चर्चित PYQ!' },
        ],
        [
          { en: '**Esterification ↔ Saponification**', hi: '**एस्टरीकरण ↔ साबुनीकरण**' },
          { en: 'Acid + Alcohol (`H₂SO₄`) ↔ Ester + `NaOH`', hi: 'अम्ल+एल्कोहॉल (`H₂SO₄`) ↔ एस्टर + `NaOH`' },
          { en: 'Sweet **Ester** ↔ **Soap (`RCOONa`)** + Ethanol', hi: 'मीठी गंध **एस्टर** ↔ **साबुन** + एथेनॉल' },
          { en: 'Esters give fragrance; `NaOH` makes soap', hi: 'एस्टर = इत्र सुगंध; `+ NaOH` = साबुन!' },
        ],
        [
          { en: '**Soap vs Detergent (`4.5`)**', hi: '**साबुन बनाम अपमार्जक**' },
          { en: 'Hard water (`Ca²⁺, Mg²⁺` ions)', hi: 'कठोर जल (`Ca²⁺, Mg²⁺` लवण)' },
          { en: 'Soap = **White Scum**; Detergent = **Lather**', hi: 'साबुन = **सफेद स्कम**; अपमार्जक = **झाग**' },
          { en: 'Soap (`Na/K salt`) vs Sulfonate/`NH₄⁺`', hi: 'अपमार्जक कठोर जल में स्कम नहीं बनाता!' },
        ],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.68 Q1',
      q: { en: 'What would be the electron dot structure of carbon dioxide (`CO₂`)?', hi: 'कार्बन डाइऑक्साइड (`CO₂`) की इलेक्ट्रॉन बिंदु संरचना क्या होगी?' },
      a: { en: 'Central Carbon (`4` valence e⁻) shares **two pairs with each Oxygen (`6` valence e⁻)** forming two double covalent bonds: **`:O::C::O:` (`O=C=O`)**, fulfilling octets of all 3 atoms (`8` e⁻ each).', hi: 'केंद्रीय कार्बन दोनों ऑक्सीजन परमाणुओं के साथ दो-दो इलेक्ट्रॉनों की साझेदारी कर **द्वि-सहसंयोजी आबंध (`O=C=O`)** बनाता है (`प्रत्येक का अष्टक 8 e⁻ पूर्ण`)।' },
    },
    {
      num: 'p.68 Q2',
      q: { en: 'What would be the electron dot structure of a molecule of sulphur (`S₈` ring)?', hi: 'सल्फर के आठ परमाणुओं (`S₈`) से बने अणु की इलेक्ट्रॉन बिंदु संरचना क्या होगी?' },
      a: { en: 'Sulfur (`Z=16: 2,8,6`) needs 2 e⁻ for an octet. Eight S atoms join into a **puckered crown ring**, each sharing **one pair (`single bond`) with its two adjacent S neighbors**, leaving 2 lone pairs on every S atom.', hi: 'सल्फर (`बाहरी 6 e⁻`) के 8 परमाणु एक **मुकुट रूपी वलय (`अँगूठी`)** में जुड़ते हैं; प्रत्येक S अपने दोनों पड़ोसी S से 1-1 इलेक्ट्रॉन साझा कर एकल आबंध बनाता है।' },
    },
    {
      num: 'p.76 Q1',
      q: { en: 'How many structural isomers can you draw for pentane (`C₅H₁₂`)?', hi: 'पेन्टेन (`C₅H₁₂`) के लिए आप कितने संरचनात्मक समावयवों का चित्रण कर सकते हैं?' },
      a: { en: '**3 structural isomers**: `(1)` **`n-pentane`** (`5-C straight chain`), `(2)` **`Isopentane / 2-methylbutane`** (`4-C chain + 1 methyl branch`), and `(3)` **`Neopentane / 2,2-dimethylpropane`** (`3-C chain + 2 branches on middle C`).', hi: '**3 संरचनात्मक समावयवी**: (1) `n-पेन्टेन` (सीधी 5C शृंखला), (2) `आइसोपेन्टेन / 2-मेथिलब्यूटेन` (1 शाखा), (3) `नियोपेन्टेन / 2,2-डाइमेथिलप्रोपेन` (2 शाखाएँ)।' },
    },
    {
      num: 'p.76 Q2',
      q: { en: 'What are the two properties of carbon which lead to the huge number of carbon compounds we see around us?', hi: 'कार्बन के दो गुणधर्म कौन-से हैं जिनके कारण हमारे चारों ओर कार्बन यौगिकों की विशाल संख्या दिखाई देती है?' },
      a: { en: '**(1) Catenation (`शृंखलन`)**: unique self-linking ability creating long straight/branched/ring chains with strong `C–C` bonds; **(2) Tetravalency (`चतुःसंयोजकता`)**: valency of `4` allowing strong covalent bonds (`small atomic size!`) with C, H, O, N, S & halogens.', hi: '(1) **शृंखलन (`Catenation`)** — अन्य कार्बन परमाणुओं से जुड़कर लंबी/शाखित/वलय शृंखला बनाने का गुण; (2) **चतुःसंयोजकता (`Tetravalency`)** — 4 संयोजकता व छोटे परमाणु आकार कारण प्रबल आबंध निर्माण।' },
    },
    {
      num: 'p.76 Q3',
      q: { en: 'What will be the formula and electron dot structure of cyclopentane?', hi: 'साइक्लोपेन्टेन का सूत्र तथा इलेक्ट्रॉन बिंदु संरचना क्या होंगे?' },
      a: { en: 'Formula: **`C₅H₁₀`** (`saturated 5-carbon pentagon ring`, general ring formula `CnH2n`). Each of the 5 carbons shares 1 pair with 2 adjacent ring carbons and 1 pair each with **2 Hydrogens (`all single covalent bonds!`)**.', hi: 'सूत्र: **`C₅H₁₀`**। पांचों कार्बन एक पंचभुज वलय में आपस में एकल आबंध से जुड़ते हैं व प्रत्येक कार्बन से 2 हाइड्रोजन एकल आबंध द्वारा जुड़ते हैं।' },
    },
    {
      num: 'p.76 Q4',
      q: { en: 'Draw structures for: `(i)` Ethanoic acid `(ii)` Bromopentane* `(iii)` Butanone `(iv)` Hexanal. *Are structural isomers possible for bromopentane?', hi: 'संरचनाएँ बताएँ: `(i)` एथेनॉइक अम्ल `(ii)` ब्रोमोपेन्टेन* `(iii)` ब्यूटेनोन `(iv)` हेक्सेनैल। *क्या ब्रोमोपेन्टेन के समावयवी संभव हैं?' },
      a: { en: '**`(i)`** `CH₃–COOH` (`C=O & –OH`); **`(ii)`** `CH₃–CH₂–CH₂–CH₂–CH₂–Br` (*YES — **8 structural isomers** exist by shifting `-Br` to C1/C2/C3 and branching carbon skeleton!*); **`(iii)`** `CH₃–CO–CH₂–CH₃`; **`(iv)`** `CH₃–CH₂–CH₂–CH₂–CH₂–CHO`.', hi: '**`(i)`** `CH₃–COOH`; **`(ii)`** `C₅H₁₁–Br` (*हाँ — `-Br` का स्थान बदलने व शृंखला शाखित करने से समावयवी बनते हैं!*) **`(iii)`** `CH₃–CO–CH₂–CH₃`; **`(iv)`** `CH₃–(CH₂)₄–CHO`।' },
    },
    {
      num: 'p.76 Q5',
      q: { en: 'How would you name (`NCERT p.76 Fig`): `(i) CH₃–CH₂–Br` `(ii) H–C(=O)H` `(iii) CH₃–CH₂–CH₂–CH₂–C≡C–H`?', hi: 'नामकरण करें (`चित्र पृष्ठ 76`): `(i) CH₃–CH₂–Br`, `(ii) H–C(=O)H`, `(iii) CH₃–CH₂–CH₂–CH₂–C≡C–H`।' },
      a: { en: '**`(i)` Bromoethane (`ब्रोमोएथेन`)** (`2C + -Br`); **`(ii)` Methanal (`मेथेनैल` / Formaldehyde)** (`1C aldehyde`); **`(iii)` Hexyne / `Hex-1-yne` (`हेक्साइन`)** (`6C chain with triple bond at end!`).', hi: '**`(i)` ब्रोमोएथेन**; **`(ii)` मेथेनैल** (`1C ऐल्डिहाइड`); **`(iii)` हेक्साइन (`Hex-1-yne`)** (`6 कार्बन + त्रि-आबंध`)।' },
    },
    {
      num: 'p.79 Q1',
      q: { en: 'Why is the conversion of ethanol to ethanoic acid an oxidation reaction?', hi: 'एथेनॉल से एथेनॉइक अम्ल में परिवर्तन को ऑक्सीकरण अभिक्रिया क्यों कहते हैं?' },
      a: { en: 'Ethanol (`CH₃CH₂OH`, 1 oxygen, 6 H) gains **1 oxygen atom** and loses **2 hydrogen atoms** to form Ethanoic acid (`CH₃COOH`, 2 oxygens, 4 H). Both **addition of O & removal of H** define **Oxidation**!', hi: 'एथेनॉल (`CH₃CH₂OH`) के एथेनॉइक अम्ल (`CH₃COOH`) में बदलने पर अणु में **ऑक्सीजन जुड़ती है** व **हाइड्रोजन हटती है** — इसलिए यह **ऑक्सीकरण अभिक्रिया** है (`पृ. 79`)।' },
    },
    {
      num: 'p.79 Q2',
      q: { en: 'A mixture of oxygen and ethyne is burnt for welding. Why is a mixture of ethyne and air NOT used?', hi: 'ऑक्सीजन तथा एथाइन का दहन वेल्डिंग में किया जाता है — एथाइन तथा वायु के मिश्रण का उपयोग क्यों नहीं करते?' },
      a: { en: 'Air contains only ~`21% O₂` (`mixed with ~78% inert N₂`). Burning unsaturated ethyne (`C₂H₂`) in air causes **incomplete combustion -> yellow sooty smoke** and much **lower temperature**, whereas pure `O₂` produces an ultra-hot clean blue **oxy-acetylene welding flame**!', hi: 'वायु में ऑक्सीजन कम (~`21%`) होने से असंतृप्त एथाइन का **अपूर्ण दहन व अत्यधिक कज्जली काला धुआँ** निकलेगा तथा धातु पिघलाने लायक उच्च ताप नहीं मिलेगा — जबकि शुद्ध `O₂` से पूर्ण दहन व अत्यधिक ताप मिलता है!' },
    },
    {
      num: 'p.82 Q1',
      q: { en: 'How would you distinguish experimentally between an alcohol and a carboxylic acid?', hi: 'प्रयोग द्वारा आप एल्कोहॉल एवं कार्बोक्सिलिक अम्ल में कैसे अंतर कर सकते हैं?' },
      a: { en: '**(1) Baking Soda / Carbonate test**: Add `NaHCO₃` or `Na₂CO₃` -> **ONLY Carboxylic acid produces brisk `CO₂` effervescence** (`turning limewater milky`); Alcohol gives no reaction. **(2) Litmus test**: Acid turns blue litmus red; neutral alcohol shows no color change.', hi: '**(1) कार्बोनेट परीक्षण**: `NaHCO₃` डालने पर केवल **कार्बोक्सिलिक अम्ल तेज बुदबुदाहट संग `CO₂` गैस** देता है (जो चूना पानी दूधिया करे); एल्कोहॉल नहीं। **(2) लिटमस**: अम्ल नीला लिटमस लाल करता है, एल्कोहॉल उदासीन है।' },
    },
    {
      num: 'p.82 Q2',
      q: { en: 'What are oxidising agents?', hi: 'ऑक्सीकारक क्या हैं?' },
      a: { en: 'Substances capable of **adding oxygen** to (`or removing hydrogen from`) other substances — e.g., **Alkaline `KMnO₄`** and **Acidified `K₂Cr₂O₇`**, which oxidize alcohols into carboxylic acids (`NCERT Sec 4.3.2`).', hi: 'वे पदार्थ जिनमें अन्य पदार्थों को **ऑक्सीजन देने (या हाइड्रोजन हटाने)** की क्षमता होती है **ऑक्सीकारक (`Oxidising agents`)** कहलाते हैं — जैसे **क्षारीय `KMnO₄`** व **अम्लीकृत `K₂Cr₂O₇`**।' },
    },
    {
      num: 'p.84 Q1',
      q: { en: 'Would you be able to check if water is hard by using a detergent?', hi: 'क्या आप डिटरजेंट का उपयोग कर बता सकते हैं कि कोई जल कठोर है अथवा नहीं?' },
      a: { en: '**NO!** Synthetic detergents do NOT form insoluble scum with `Ca²⁺` or `Mg²⁺` ions — they produce **abundant lather in BOTH soft and hard water**. Only **Soap** distinguishes hard water by forming white curd-like scum!', hi: '**नहीं!** अपमार्जक कठोर जल के `Ca²⁺/Mg²⁺` संग स्कम नहीं बनाते, अतः मृदु व कठोर दोनों जल में समान झाग देते हैं — कठोर जल की जाँच केवल **साबुन** से संभव है!' },
    },
    {
      num: 'p.84 Q2',
      q: { en: 'Why is agitation (`beating on stone, brushing, or washing-machine tumble`) necessary to clean clothes after applying soap?', hi: 'साबुन लगाने के बाद कपड़ा साफ करने के लिए उसे रगड़ने/पटकने या वाशिंग मशीन में घुमाने की क्यों आवश्यकता होती है?' },
      a: { en: 'Soap micelles first trap oily dirt inside their hydrophobic cores; **mechanical agitation breaks oil-coated dirt loose** from fabric pores into water micelles so rinsing flushes them out cleanly!', hi: 'साबुन के मिसेल मैल को घेर लेते हैं, और **रगड़ने/हिलाने से यांत्रिक ऊर्जा मिलकर तैलीय मैल को रेशों से छुड़ाकर** जल-मिसेल में तैरने योग्य बनाती है, जिससे मैल पानी संग बह जाता है!' },
    },
  ],
  exercises: [
    {
      num: 'Ex Q1',
      q: { en: 'Ethane, with the molecular formula `C₂H₆`, has: `(a)` 6 covalent bonds `(b)` 7 covalent bonds `(c)` 8 covalent bonds `(d)` 9 covalent bonds.', hi: 'एथेन का आण्विक सूत्र `C₂H₆` है। इसमें: `(a)` 6 सहसंयोजक आबंध `(b)` 7 `(c)` 8 `(d)` 9 आबंध हैं।' },
      a: { en: '**`(b)` `7` covalent bonds** (`NCERT Key verified`). Count: `1` `C–C` single bond + `6` `C–H` single bonds = **`7` covalent bonds**.', hi: '**`(b)` 7 सहसंयोजक आबंध** (`NCERT उत्तरकुंजी से सत्यापित`)। `1 C–C` + `6 C–H` = कुल `7` आबंध।' },
    },
    {
      num: 'Ex Q2',
      q: { en: 'Butanone is a four-carbon compound with the functional group: `(a)` carboxylic acid `(b)` aldehyde `(c)` ketone `(d)` alcohol.', hi: 'ब्यूटेनॉन चतुर्-कार्बन यौगिक है जिसका प्रकार्यात्मक समूह है: `(a)` कार्बोक्सिलिक अम्ल `(b)` ऐल्डिहाइड `(c)` कीटोन `(d)` ऐल्कोहॉल।' },
      a: { en: '**`(c)` Ketone (`>C=O`)** (`NCERT Key verified`) — the IUPAC suffix **`-one`** always denotes a ketone (`CH₃–CO–CH₂–CH₃`).', hi: '**`(c)` कीटोन (`>C=O`)** (`NCERT उत्तरकुंजी से सत्यापित`) — अनुलग्न **`-one`** सदैव कीटोन समूह दर्शाता है।' },
    },
    {
      num: 'Ex Q3',
      q: { en: 'While cooking, if the bottom of the vessel is getting blackened on the outside, it means that: `(a)` food not cooked completely `(b)` fuel is not burning completely `(c)` fuel is wet `(d)` fuel burning completely.', hi: 'खाना बनाते समय यदि बर्तन की तली बाहर से काली हो रही है तो इसका मतलब है कि: `(a)` भोजन नहीं पका `(b)` ईंधन पूरी तरह नहीं जल रहा `(c)` ईंधन आर्द्र है `(d)` पूर्ण जल रहा है।' },
      a: { en: '**`(b)` The fuel is not burning completely** (`NCERT Key verified`) — clogged stove air inlets restrict `O₂`, creating unburnt soot (`yellow smoky flame`).', hi: '**`(b)` ईंधन पूरी तरह से नहीं जल रहा है** (`NCERT उत्तरकुंजी से सत्यापित`) — वायु छिद्र अवरुद्ध होने से अपूर्ण दहन व कालिख जमती है।' },
    },
    {
      num: 'Ex Q4',
      q: { en: 'Explain the nature of the covalent bond using the bond formation in `CH₃Cl`.', hi: '`CH₃Cl` में आबंध निर्माण का उपयोग कर सहसंयोजक आबंध की प्रकृति समझाइए।' },
      a: { en: 'Carbon (`4` valence e⁻) shares **1 electron with each of 3 Hydrogen atoms** (`completing H duplets`) and **1 electron with 1 Chlorine atom (`7` valence e⁻ -> octet 8)**. Because electrons are **mutually shared (`not transferred`)**, four strong **single covalent bonds** hold `CH₃Cl` electrically neutral with weak intermolecular forces.', hi: 'क्लोरोमेथेन (`CH₃Cl`) में कार्बन अपने 4 संयोजक इलेक्ट्रॉनों में से 3 की साझेदारी 3 H से और 1 की साझेदारी Cl से कर अष्टक पूरा करता है — परस्पर इलेक्ट्रॉन साझेदारी कारण यह उदासीन **एकल सहसंयोजी आबंध** है।' },
    },
    {
      num: 'Ex Q5',
      q: { en: 'Draw electron dot structures for: `(a)` Ethanoic acid `(b)` `H₂S` `(c)` Propanone `(d)` `F₂`.', hi: 'इलेक्ट्रॉन बिंदु संरचना समझाइए: `(a)` एथेनॉइक अम्ल `(b)` `H₂S` `(c)` प्रोपेनोन `(d)` `F₂`।' },
      a: { en: '**`(a)` `CH₃–C(=O)–OH`** (`C=O shares 2 pairs; –OH shares 1 each`); **`(b)` `H–S–H`** (`Sulfur 6 valence e⁻ shares 1 each with 2 H, leaving 2 lone pairs`); **`(c)` `CH₃–C(=O)–CH₃`** (`middle carbonyl double-bonded to O`); **`(d)` `F–F`** (`each F 7 valence e⁻ shares 1 pair`).', hi: '**`(a)` `CH₃COOH`** (`C=O द्वि-साझेदारी व –OH एकल`); **`(b)` `H–S–H`** (`S` के 2 बंध व 2 एकाकी युग्म); **`(c)` `CH₃COCH₃`** (`मध्य C=O द्विआबंध`); **`(d)` `F–F`** (`प्रत्येक F के 1 साझे युग्म + 3 एकाकी युग्म`)।' },
    },
    {
      num: 'Ex Q6',
      q: { en: 'What is a homologous series? Explain with an example.', hi: 'समजातीय श्रेणी क्या है? उदाहरण के साथ समझाइए।' },
      a: { en: 'A family of carbon compounds with the **same general formula and functional group**, where consecutive members differ by **`–CH₂–` (`14 u`)** — e.g., **Alkanes (`CH₄, C₂H₆, C₃H₈`)** or **Alcohols (`CH₃OH, C₂H₅OH, C₃H₇OH`)**. All share **identical chemical properties**, while **boiling/melting points rise steadily** with molecular mass.', hi: 'कार्बन यौगिकों की ऐसी शृंखला जिसमें **एक ही प्रकार्यात्मक समूह** हो व क्रमिक सदस्यों में **`–CH₂–` (`14 u`)** का अंतर हो (जैसे मेथेनॉल, एथेनॉल, प्रोपेनॉल) — सभी के रासायनिक गुण समान रहते हैं व अणुभार संग क्वथनांक बढ़ता है!' },
    },
    {
      num: 'Ex Q7',
      q: { en: 'How can ethanol and ethanoic acid be differentiated on the basis of their physical and chemical properties?', hi: 'भौतिक एवं रासायनिक गुणधर्मों के आधार पर एथेनॉल व एथेनॉइक अम्ल में अंतर स्पष्ट करें।' },
      a: { en: '**Physical**: **Ethanol** (`MP 156 K`, liquid in winter, pleasant spirit odor, neutral); **Ethanoic acid** (`MP 290 K` freezes -> *Glacial*, pungent vinegar smell). **Chemical**: **ONLY Ethanoic acid** turns **blue litmus red** and reacts with **`NaHCO₃ / Na₂CO₃`** releasing brisk **`CO₂` gas**; Ethanol does neither (`reacts only with active Na -> H₂↑`).', hi: '**भौतिक**: एथेनॉल (`गलनांक 156K`, मधुर गंध); एथेनॉइक अम्ल (`290K` जाड़े में जमे/ग्लैशल, सिरका गंध)। **रासायनिक**: केवल एथेनॉइक अम्ल नीला लिटमस लाल करता है व `Na₂CO₃ / NaHCO₃` से तेज `CO₂` गैस निकालता है।' },
    },
    {
      num: 'Ex Q8',
      q: { en: 'Why does micelle formation take place when soap is added to water? Will a micelle be formed in other solvents such as ethanol also?', hi: 'जब साबुन को जल में डाला जाता है तो मिसेल का निर्माण क्यों होता है? क्या एथेनॉल जैसे दूसरे विलायकों में भी मिसेल का निर्माण होगा?' },
      a: { en: 'Water attracts soap’s ionic **hydrophilic head (`–COO⁻Na⁺`)** while strongly repelling its non-polar **hydrophobic hydrocarbon tail** — forcing tails to hide together inward as spherical **micelles**. **In Ethanol: NO!** Both hydrophobic tail and soap dissolve comfortably in organic ethanol (`no hydrophobic repulsion`), so **no micelles form**!', hi: 'जल के अंदर जलविरागी हाइड्रोकार्बन पूँछ जल से बचने हेतु भीतर गुच्छे में छिपती है और जलरागी आयनिक सिरा बाहर जल की ओर रहता है — इस गुच्छे को मिसेल कहते हैं। **एथेनॉल में नहीं!** क्योंकि साबुन की पूँछ एथेनॉल में घुलनशील है, अतः वहाँ मिसेल नहीं बनता।' },
    },
    {
      num: 'Ex Q9',
      q: { en: 'Why are carbon and its compounds used as fuels for most applications?', hi: 'कार्बन एवं उसके यौगिकों का उपयोग अधिकतर अनुप्रयोगों में ईंधन के रूप में क्यों किया जाता है?' },
      a: { en: 'On burning in air/oxygen, carbon and hydrocarbons undergo highly **exothermic combustion**, liberating **large amounts of heat & light energy**, are easy to ignite/store (`coal, LPG, CNG`), and burn cleanly with sufficient O₂.', hi: 'वायु में दहन करने पर कार्बन तथा हाइड्रोकार्बन प्रचुर मात्रा में **ऊष्मा एवं प्रकाश ऊर्जा** मुक्त करते हैं, इनका कैलोरी मान उच्च होता है व सुगमता से नियंत्रित किए जा सकते हैं (`LPG, CNG, कोयला`)।' },
    },
    {
      num: 'Ex Q10',
      q: { en: 'Explain the formation of scum when hard water is treated with soap.', hi: 'कठोर जल को साबुन से उपचारित करने पर झाग (`स्कम`) के निर्माण को समझाइए।' },
      a: { en: 'Hard water contains dissolved **Calcium (`Ca²⁺`) and Magnesium (`Mg²⁺`)** salts (`bicarbonates, sulfates, chlorides`). These ions react with sodium/potassium carboxylate soap molecules (`R–COO⁻Na⁺`) forming **insoluble Calcium/Magnesium stearates (`white curd-like SCUM`)**, wasting soap before lather forms.', hi: 'कठोर जल में घुले **`Ca²⁺` व `Mg²⁺` लवण** साबुन के अणुओं संग अभिक्रिया कर **अघुलनशील सफेद दही जैसा अवक्षेप (`स्कम`)** बनाते हैं, जिससे झाग बनने से पहले बहुत सा साबुन व्यर्थ होता है।' },
    },
    {
      num: 'Ex Q11',
      q: { en: 'What change will you observe if you test soap with litmus paper (red and blue)?', hi: 'यदि आप लिटमस पत्र (लाल व नीला) से साबुन की जाँच करें तो आपका प्रेक्षण क्या होगा?' },
      a: { en: 'Soap (`salt of weak carboxylic acid + strong base NaOH`) is **alkaline/basic** in nature -> it turns **RED litmus paper BLUE**, while **blue litmus stays unchanged**.', hi: 'साबुन **क्षारीय (`Basic`)** प्रकृति का होता है (`प्रबल क्षार NaOH + दुर्बल वसीय अम्ल लवण`) — अतः **लाल लिटमस नीला** हो जाएगा और नीले लिटमस पर कोई असर नहीं होगा!' },
    },
    {
      num: 'Ex Q12',
      q: { en: 'What is hydrogenation? What is its industrial application?', hi: 'हाइड्रोजनीकरण क्या है? इसका औद्योगिक अनुप्रयोग क्या है?' },
      a: { en: '**Hydrogenation**: addition of hydrogen (`H₂`) across `C=C` / `C≡C` bonds of **unsaturated hydrocarbons** using **Nickel (`Ni`) or Palladium (`Pd`) catalyst** to form saturated compounds. **Industrial Use**: converting liquid **unsaturated vegetable oils** into semi-solid saturated fats (**Vanaspati Ghee / margarine**).', hi: '**हाइड्रोजनीकरण**: **`Ni` या `Pd` उत्प्रेरक** की उपस्थिति में असंतृप्त हाइड्रोकार्बनों में `H₂` जोड़कर संतृप्त यौगिक बनाना। **औद्योगिक उपयोग**: तरल **वनस्पति तेलों से वनस्पति घी (ठोस संतृप्त वसा)** तैयार करने में।' },
    },
    {
      num: 'Ex Q13',
      q: { en: 'Which of the following hydrocarbons undergo addition reactions: `C₂H₆, C₃H₈, C₃H₆, C₂H₂` and `CH₄`?', hi: 'दिए गए हाइड्रोकार्बन — `C₂H₆, C₃H₈, C₃H₆, C₂H₂` व `CH₄` में किसमें संकलन (योगज) अभिक्रिया होती है?' },
      a: { en: '**`C₃H₆` (`Propene`, alkene `C=C`)** and **`C₂H₂` (`Ethyne`, alkyne `C≡C`)** undergo addition reactions because **ONLY unsaturated hydrocarbons** hold double/triple bonds (`CH₄, C₂H₆, C₃H₈` are saturated alkanes!).', hi: '**`C₃H₆` (प्रोपीन) और `C₂H₂` (एथाइन)** में संकलन अभिक्रिया होगी क्योंकि केवल **असंतृप्त (`द्वि/त्रि-आबंध`) हाइड्रोकार्बन** ही योगज अभिक्रिया करते हैं (`शेष तीनों संतृप्त ऐल्केन हैं`)।' },
    },
    {
      num: 'Ex Q14',
      q: { en: 'Give a chemical test that can be used to differentiate between saturated and unsaturated hydrocarbons.', hi: 'संतृप्त एवं असंतृप्त हाइड्रोकार्बनों के बीच रासायनिक अंतर समझने के लिए एक परीक्षण बताइए।' },
      a: { en: '**Bromine Water Test (`NCERT / Group D 2025`)**: Add orange-brown bromine water separately -> **Unsaturated hydrocarbon (`e.g. ethene/veg oil`) DECOLORIZES bromine water** (`addition reaction`), whereas **Saturated hydrocarbon (`ethane/butter`) leaves it orange** (`alternatively burn: unsaturated -> yellow soot vs saturated -> clean blue flame`).', hi: '**ब्रोमीन जल परीक्षण**: असंतृप्त हाइड्रोकार्बन (या वनस्पति तेल) **नारंगी ब्रोमीन जल को रंगहीन** कर देता है, जबकि संतृप्त हाइड्रोकार्बन में रंग नहीं उड़ता (`या दहन: संतृप्त = नीली लौ, असंतृप्त = पीली कज्जली लौ`)।' },
    },
    {
      num: 'Ex Q15',
      q: { en: 'Explain the mechanism of the cleaning action of soaps.', hi: 'साबुन की सफाई प्रक्रिया की क्रियाविधि समझाइए।' },
      a: { en: 'Soap (`R–COO⁻Na⁺`) molecules surround oily stains on cloth forming **micelles**: the **hydrophobic hydrocarbon tails** dissolve into oil/grease inward while the **hydrophilic ionic heads** face water outward (`forming an emulsion`). Scrubbing dislodges dirt-filled micelles from fabric so rinsing removes them (`hydrophilic repulsion prevents clumping!`).', hi: 'साबुन अणु के **जलविरागी सिरे मैल की तेल बूँद के भीतर** व **जलरागी आयनिक सिरे बाहर जल की ओर** रहकर गोलाकार **मिसेल** बनाते हैं जिससे पानी में पायस बनता है। रगड़ने पर मैल-भरे मिसेल रेशों से छूटकर पानी में घुल-बह जाते हैं!' },
    },
  ],
  flashcards: [
    { front: { en: 'Earth crust Carbon % vs Atmospheric `CO₂` % (`NCERT p.64`)?', hi: 'भूपर्पटी में कार्बन % व वायुमंडल में `CO₂` % कितना है?' }, back: { en: '**`0.02%`** carbon in Earth crust (`minerals, coal, oil`) | **`0.03%`** `CO₂` in atmosphere.', hi: 'भूपर्पटी में **`0.02%` कार्बन** | वायुमंडल में **`0.03% CO₂`**।' } },
    { front: { en: 'Why does Graphite conduct electricity while Diamond does NOT?', hi: 'ग्रेफाइट विद्युत सुचालक पर हीरा कुचालक क्यों है?' }, back: { en: 'Diamond: 4 bonds/C (`0 free e⁻`). **Graphite: 3 bonds/C -> 1 delocalized free e⁻** moves between layers!', hi: 'हीरे में `4` आबंध (`0 मुक्त e⁻`)। **ग्रेफाइट में `3` आबंध + `1` मुक्त इलेक्ट्रॉन** धारा ले जाता है!' } },
    { front: { en: 'Total covalent bonds in Ethane (`C₂H₆`) vs Ethene (`C₂H₄`)?', hi: 'एथेन (`C₂H₆`) व एथीन (`C₂H₄`) में कुल सहसंयोजी आबंध युग्म?' }, back: { en: 'Ethane (`Ex Q1`): **`7` covalent bonds** | Ethene (`Group D 2025`): **`6` shared-pair bonds** (`4 C–H + 2 C=C`).', hi: 'एथेन (`Ex Q1`): **`7` आबंध** | एथीन (`Group D`): **`6` साझा युग्म**।' } },
    { front: { en: 'General Formulas: Alkane vs Alkene vs Alkyne & Homologous step?', hi: 'ऐल्केन, ऐल्कीन व ऐल्काइन के सामान्य सूत्र व समजातीय अंतर?' }, back: { en: 'Alkane **`CnH2n+2`** | Alkene **`CnH2n`** | Alkyne **`CnH2n-2`** | Consecutive step = **`–CH₂–` (`14 u`)**.', hi: 'ऐल्केन `CnH2n+2` | ऐल्कीन `CnH2n` | ऐल्काइन `CnH2n-2` | अंतर **`–CH₂–` (`14 u`)**।' } },
    { front: { en: 'Reaction: Ethanol + Excess Conc. `H₂SO₄` at `443 K` (`170 °C`)?', hi: '`443 K` पर आधिक्य सांद्र `H₂SO₄` संग एथेनॉल गरम करने पर क्या बनता है?' }, back: { en: '**Dehydration -> Ethene (`CH₂=CH₂`) + `H₂O`** (`Conc. H₂SO₄` acts as **Dehydrating Agent**).', hi: '**निर्जलीकरण द्वारा असंतृप्त एथीन (`CH₂=CH₂`) + जल** बनता है।' } },
    { front: { en: 'Oxidizing Agents turning Ethanol -> Ethanoic Acid (`Act 4.5`)?', hi: 'एथेनॉल को एथेनॉइक अम्ल में बदलने वाले दो प्रमुख ऑक्सीकारक कौन-से हैं?' }, back: { en: '**Alkaline `KMnO₄` + Heat** (`purple color fades`) OR **Acidified `K₂Cr₂O₇` + Heat**.', hi: '**क्षारीय `KMnO₄` (`बैंगनी रंग उड़ता है`)** अथवा **अम्लीकृत `K₂Cr₂O₇` + ऊष्मा**।' } },
    { front: { en: 'Glacial Acetic Acid MP & `Vinegar` concentration (`p.81`)?', hi: 'ग्लैशल ऐसीटिक अम्ल का गलनांक व सिरके में % सांद्रता?' }, back: { en: 'Pure `CH₃COOH` freezes at **`290 K`** (`Glacial`); **Vinegar = `3–4%` Acetic Acid** in water.', hi: 'शुद्ध अम्ल **`290 K`** पर जमता है; **सिरका = `3–4%` ऐसीटिक अम्ल**।' } },
    { front: { en: 'Esterification vs Saponification equations (`p.82`)?', hi: 'एस्टरीकरण व साबुनीकरण अभिक्रियाओं में मुख्य अंतर?' }, back: { en: '**Esterification**: `CH₃COOH + C₂H₅OH -> Ester (–COO–, sweet)` | **Saponification**: `Ester + NaOH -> Alcohol + Soap`!', hi: 'अम्ल + एल्कोहॉल → **मीठा एस्टर**; एस्टर + `NaOH` → **साबुन + एल्कोहॉल (`साबुनीकरण`)**!' } },
    { front: { en: 'Why is Methanol deadly & why is industrial ethanol colored blue?', hi: 'मेथेनॉल घातक क्यों है व विकृत ऐल्कोहॉल किसे कहते हैं?' }, back: { en: 'Liver oxidizes **Methanol -> Methanal**, coagulating cells & ruining **Optic Nerve (`blindness`)**! Adding methanol + **blue dye = Denatured Alcohol**.', hi: 'मेथेनॉल यकृत में **मेथेनैल** बनकर जीवद्रव्य जमाता है व **नेत्रहीन** करता है; नीले रंजक वाला औद्योगिक घोल **विकृत ऐल्कोहॉल** है!' } },
    { front: { en: 'Litmus color of Soap solution & Hard Water `Ca²⁺/Mg²⁺` effect?', hi: 'साबुन का लिटमस प्रभाव व कठोर जल (`Ca²⁺/Mg²⁺`) संग अभिक्रिया?' }, back: { en: 'Soap is **alkaline** -> turns **red litmus BLUE**. Hard water `Ca²⁺/Mg²⁺` + Soap = **White Scum** (`use Sulfonate/NH₄⁺ Detergents!`).', hi: 'साबुन क्षारीय होने से **लाल लिटमस को नीला** करता है; कठोर जल संग सफेद **स्कम** (अपमार्जक स्कम नहीं बनाते)।' } },
  ],
  pyqBank: [
    { id: 'pyq-c4-1', examTag: 'RRB ALP 2025 Shift 3', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.4.1): Ethanol + Sodium', question: { en: 'What is the product when ethanol reacts with sodium?', hi: 'जब एथेनॉल सोडियम के साथ अभिक्रिया करता है तो क्या उत्पाद बनता है?' }, options: { en: ['Sodium oxide and water evolve during the reaction with ethanol only.', 'Sodium carbonate and hydrogen gas evolve during the reaction with ethanol.', 'Sodium ethoxide and hydrogen gas evolve during the reaction with ethanol.', 'Sodium hydroxide and oxygen gas evolve during the reaction with ethanol.'], hi: ['एथेनॉल के साथ अभिक्रिया के दौरान केवल सोडियम ऑक्साइड और जल निर्मित होता है।', 'एथेनॉल के साथ अभिक्रिया के दौरान सोडियम कार्बोनेट और हाइड्रोजन गैस निकलती हैं।', 'एथेनॉल के साथ अभिक्रिया के दौरान सोडियम एथॉक्साइड और हाइड्रोजन गैस निकलती हैं।', 'एथेनॉल के साथ अभिक्रिया के दौरान सोडियम हाइड्रॉक्साइड और ऑक्सीजन गैस निकलती हैं।'] }, correctIndex: 2, solution: { en: '`2Na + 2CH₃CH₂OH -> 2CH₃CH₂O⁻Na⁺ (Sodium Ethoxide) + H₂↑` (`NCERT Act 4.6`).', hi: '`2Na + 2C₂H₅OH → 2C₂H₅ONa (सोडियम एथॉक्साइड) + H₂↑` (`क्रियाकलाप 4.6`)।' } },
    { id: 'pyq-c4-2', examTag: 'RRB ALP 2025 Shift 8', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.4.1): Ethanol Effects', question: { en: 'Which of the following correctly describes the effect of consuming ethanol?', hi: 'निम्नलिखित में से कौन-सा एथेनॉल के सेवन के प्रभाव का सही वर्णन करता है?' }, options: { en: ['Long-term consumption of diluted ethanol has no health impact on humans', 'Absolute alcohol in any amount causes minor intoxication without severe effects', 'Small amounts of absolute alcohol are safe, but diluted ethanol is always fatal', 'Small amounts of dilute ethanol cause drunkenness, whereas absolute alcohol can be lethal'], hi: ['तनुकृत एथेनॉल के दीर्घकालिक सेवन से मनुष्यों के स्वास्थ्य पर कोई प्रभाव नहीं पड़ता है।', 'किसी भी मात्रा में परिशुद्ध ऐल्कोहॉल से मामूली मादकता होती है, लेकिन इसके गंभीर दुष्प्रभाव नहीं होते हैं।', 'परिशुद्ध ऐल्कोहॉल की कम मात्रा सुरक्षित होती है, लेकिन तनुकृत एथेनॉल सदैव घातक होता है।', 'कम मात्रा में तनु एथेनॉल भी मत्तता का कारण बनता है, जबकि परिशुद्ध ऐल्कोहॉल घातक हो सकता है।'] }, correctIndex: 3, solution: { en: 'Exact NCERT `p.80`: Dilute ethanol causes drunkenness (`depresses CNS`), while pure/absolute alcohol can be fatal.', hi: 'सटीक NCERT `पृ. 80`: तनु एथेनॉल मत्तता/नशा लाता है और शुद्ध एथेनॉल की थोड़ी मात्रा भी जानलेवा हो सकती है।' } },
    { id: 'pyq-c4-3', examTag: 'RRB ALP CBT-1 Shift 2', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.3.2): Oxidation by Alk. KMnO₄', question: { en: 'Ethanol oxidises in the presence of hot alkaline `KMnO₄` to form _________.', hi: 'गर्म क्षारीय `KMnO₄` की उपस्थिति में, एथेनॉल ऑक्सीकृत होकर _______ का निर्माण करता है।' }, options: { en: ['Ethanal', 'Ethanoic acid', 'Ethyl acetate', 'Acetone'], hi: ['ऐथेनल (Ethanal)', 'एथेनोइक अम्ल (Ethanoic acid)', 'एथिल ऐसीटेट (Ethyl acetate)', 'ऐसीटोन (Acetone)'] }, correctIndex: 1, solution: { en: 'Hot alkaline **`KMnO₄`** (`or acidified K₂Cr₂O₇`) oxidizes **Ethanol -> Ethanoic Acid (`CH₃COOH`)**.', hi: 'गर्म क्षारीय `KMnO₄` एथेनॉल का ऑक्सीकरण कर सीधे **एथेनॉइक अम्ल (`CH₃COOH`)** बनाता है।' } },
    { id: 'pyq-c4-4', examTag: 'RRB ALP CBT-1 Shift 6', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.2): Catenation', question: { en: 'The ability of carbon to form chains gives rise to a homologous series of compounds in which the same functional group is attached to carbon chains of different lengths, is known as:', hi: 'कार्बन की श्रृंखला बनाने की क्षमता के कारण समजातीय यौगिकों की एक श्रेणी बनती है जिसमें एक ही प्रकार्यात्मक समूह अलग-अलग लंबाई की कार्बन श्रृंखलाओं से जुड़ा होता है, इसे किस रूप में जाना जाता है?' }, options: { en: ['addition', 'substitution', 'elimination', 'catenation'], hi: ['योगज', 'प्रतिस्थापन', 'विलोपन', 'शृंखलन'] }, correctIndex: 3, solution: { en: '**Catenation (`शृंखलन`)** is carbon’s unique self-linking ability to build chains, branches, and rings.', hi: 'कार्बन द्वारा स्वयं के परमाणुओं से जुड़कर शृंखला बनाने की क्षमता **शृंखलन (`Catenation`)** कहलाती है।' } },
    { id: 'pyq-c4-5', examTag: 'RRB ALP CBT-1 Shift 8', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Table 4.3): Aldehyde Group', question: { en: 'Which of the following belongs to an aldehyde group?', hi: 'निम्नलिखित में से कौन-सा, ऐल्डिहाइड समूह से संबंधित है?' }, options: { en: ['HCOOH', 'CH₃CH₂OH', 'CH₃CHO', 'CH₃COOH'], hi: ['HCOOH', 'CH₃CH₂OH', 'CH₃CHO', 'CH₃COOH'] }, correctIndex: 2, solution: { en: '**`CH₃CHO` (Ethanal)** has the **`–CHO` Aldehyde** functional group (`whereas HCOOH/CH₃COOH = Acid, CH₃CH₂OH = Alcohol`).', hi: '**`CH₃CHO` (ऐथेनैल)** में ऐल्डिहाइड (`–CHO`) समूह उपस्थित है।' } },
    { id: 'pyq-c4-6', examTag: 'RRB Group D 2025 Shift 10', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.3.4): Methane Chlorination', question: { en: 'Statement I: When methane reacts with chlorine in the presence of sunlight, hydrogen atoms in methane are gradually replaced by chlorine atoms. Statement II: The reaction between methane and chlorine is called an addition reaction.', hi: 'कथन I: जब सूर्य के प्रकाश की उपस्थिति में मेथेन क्लोरीन के साथ अभिक्रिया करती है, तो मेथेन में मौजूद हाइड्रोजन परमाणु धीरे-धीरे क्लोरीन परमाणुओं द्वारा प्रतिस्थापित हो जाते हैं। कथन II: मेथेन और क्लोरीन के बीच होने वाली इस अभिक्रिया को योगज अभिक्रिया कहा जाता है।' }, options: { en: ['Both statements are incorrect.', 'Only Statement II is correct.', 'Both statements are correct.', 'Only Statement I is correct.'], hi: ['दोनों कथन गलत हैं।', 'केवल कथन II सही है।', 'दोनों कथन सही हैं।', 'केवल कथन I सही है।'] }, correctIndex: 3, solution: { en: 'Statement I is TRUE; Statement II is FALSE because it is a **Substitution Reaction** (`not addition!`).', hi: 'कथन I सत्य है पर कथन II असत्य है क्योंकि यह **प्रतिस्थापन अभिक्रिया** है, योगज नहीं!' } },
    { id: 'pyq-c4-7', examTag: 'RRB Group D 2025 Shift 10', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.4.2): Saponification', question: { en: 'How does saponification relate to soap formation?', hi: 'साबुनीकरण साबुन निर्माण से किस प्रकार संबंधित है?' }, options: { en: ['Saponification produces sodium or potassium salts of long chain carboxylic acids, which are soaps', 'Saponification is unrelated to soap production', 'Saponification produces only esters used in flavoring', 'Saponification makes ethanol for cleaning'], hi: ['साबुनीकरण से लंबी शृंखला वाले कार्बोक्सिलिक अम्लों के सोडियम या पोटैशियम लवण बनते हैं, जो साबुन होते हैं।', 'साबुनीकरण का साबुन उत्पादन से कोई संबंध नहीं है।', 'साबुनीकरण से केवल एस्टर बनते हैं जिनका उपयोग सुवासकारी पदार्थों में किया जाता है।', 'साबुनीकरण से सफाई के लिए एथेनॉल निर्मित होता है।'] }, correctIndex: 0, solution: { en: 'Alkaline hydrolysis (`+ NaOH`) of esters yields **Na/K salts of long-chain carboxylic acids (`soaps`)**.', hi: 'साबुनीकरण से लंबी शृंखला वाले **कार्बोक्सिलिक अम्लों के Na/K लवण (साबुन)** बनते हैं।' } },
    { id: 'pyq-c4-8', examTag: 'RRB Group D 2025 Shift 12', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.2.1): Covalent Bonds in Ethene', question: { en: 'The number of bonds formed in ethene (`C₂H₄`) is:', hi: 'एथीन (`ethene`) में बनने वाले आबंधों की संख्या बताइए।' }, options: { en: ['3', '5', '4', '6'], hi: ['3', '5', '4', '6'] }, correctIndex: 3, solution: { en: 'Ethene (`H₂C=CH₂`) contains `4` `C–H` single covalent bonds + `1` `C=C` double bond (`2 shared e⁻ pairs`) = **`6` shared-pair bonds total**.', hi: '`4 C–H` एकल आबंध + `1 C=C` द्विआबंध (`2 युग्म`) = कुल **`6` सहसंयोजी आबंध युग्म**।' } },
    { id: 'pyq-c4-9', examTag: 'RRB Group D 2025 Shift 14', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.3.1): Flame Type Comparison', question: { en: 'Which of the following statements correctly explains why saturated hydrocarbons burn with a blue flame, while unsaturated hydrocarbons tend to burn with a yellow, sooty flame?', hi: 'निम्नलिखित में से कौन-सा कथन स्पष्ट करता है कि संतृप्त हाइड्रोकार्बन नीली लौ के साथ क्यों जलते हैं, जबकि असंतृप्त पीली कालिख लौ से?' }, options: { en: ['Unsaturated hydrocarbons contain more oxygen, which leads to incomplete combustion.', 'Saturated hydrocarbons react with nitrogen in the air to prevent soot formation.', 'Saturated hydrocarbons have weaker bonds, so they burn more completely.', 'Unsaturated hydrocarbons have a higher carbon-to-hydrogen ratio, leading to incomplete combustion and soot formation.'], hi: ['असंतृप्त हाइड्रोकार्बन में अधिक ऑक्सीजन होती है, जिसके कारण उनका अपूर्ण दहन होता है।', 'संतृप्त हाइड्रोकार्बन वायु में नाइट्रोजन से अभिक्रिया करके कालिख रोकते हैं।', 'संतृप्त हाइड्रोकार्बन में दुर्बल आबंध होते हैं, इसलिए वे अधिक पूर्ण जलते हैं।', 'असंतृप्त हाइड्रोकार्बन में कार्बन-हाइड्रोजन अनुपात अधिक होता है, जिससे अपूर्ण दहन व कालिख बनती है।'] }, correctIndex: 3, solution: { en: 'Higher **C:H percentage ratio** in alkenes/alkynes causes incomplete oxygen utilization -> glowing soot particles (`yellow smoky flame`).', hi: 'असंतृप्त हाइड्रोकार्बनों में **कार्बन-हाइड्रोजन अनुपात अधिक** होने से अपूर्ण दहन व कालिख वाली पीली लौ निकलती है।' } },
    { id: 'pyq-c4-10', examTag: 'RRB Group D 2025 Shift 15', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.4.1): Dehydration of Ethanol', question: { en: 'What happens when ethanol is heated with excess concentrated sulphuric acid at `170 °C` (`443 K`)?', hi: 'जब एथेनॉल को `170 °C` (`443 K`) पर आधिक्य सांद्र सल्फ्यूरिक अम्ल के साथ गर्म किया जाता है, तो क्या होता है?' }, options: { en: ['Carbon dioxide is released', 'Methane is formed as a gas', 'Ethene is formed by dehydration', 'Ethanoic acid is formed'], hi: ['कार्बन डाइऑक्साइड मुक्त होती है', 'गैस के रूप में मेथेन बनता है', 'निर्जलन के फलस्वरूप एथीन बनता है', 'एथेनॉइक अम्ल बनता है'] }, correctIndex: 2, solution: { en: 'Excess conc. `H₂SO₄` at `443 K` removes `H₂O` from `CH₃CH₂OH` producing **`CH₂=CH₂` (`Ethene`)** (`NCERT p.80`).', hi: 'सांद्र `H₂SO₄` निर्जलीकारक बन **`443 K` पर एथेनॉल से एथीन (`C₂H₄`)** बनाता है।' } },
    { id: 'pyq-c4-11', examTag: 'RRB Group D 2025 Shift 17', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.2.2): Saturated Ring C₃H₆', question: { en: 'Which saturated hydrocarbon has the molecular formula `C₃H₆`?', hi: 'किस संतृप्त हाइड्रोकार्बन का आण्विक सूत्र `C₃H₆` होता है?' }, options: { en: ['cyclopropane', 'propane', 'propene', 'propyne'], hi: ['साइक्लोप्रोपेन', 'प्रोपेन', 'प्रोपीन', 'प्रोपाइन'] }, correctIndex: 0, solution: { en: '**Cyclopropane (`C₃H₆`)** is a closed 3-carbon triangle using **only single C–C covalent bonds** -> saturated cyclic alkane!', hi: '**साइक्लोप्रोपेन (`C₃H₆`)** में तीनों कार्बन एकल आबंध से बंद त्रिभुज वलय बनाते हैं अतः यह संतृप्त है (`प्रोपीन असंतृप्त`)।' } },
    { id: 'pyq-c4-12', examTag: 'RRB Group D 2025 Shift 21', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.1): Why Ethanol Insulates', question: { en: 'Which of the following best explains why ethanol conducts electricity poorly despite being a liquid and having a polar `O–H` bond?', hi: 'कौन-सा कथन स्पष्ट करता है कि एथेनॉल द्रव व ध्रुवीय `O–H` आबंध होने पर भी विद्युत का अल्प चालन क्यों करता है?' }, options: { en: ['It decomposes in water into CO₂ and H₂O', 'It is a covalent compound and does not ionize in solution', 'It dissociates completely into ions in water', 'It is a weak base that accepts protons'], hi: ['यह जल में CO₂ और H₂O में अपघटित हो जाता है', 'यह एक सहसंयोजक यौगिक है और विलयन में आयनित नहीं होता है', 'यह जल में पूरी तरह आयनों में विघटित हो जाता है', 'यह एक दुर्बल क्षार है'], }, correctIndex: 1, solution: { en: 'Covalent molecular structure does **NOT dissociate into free ions**, leaving no mobile charge carriers (`Sec 4.1`).', hi: 'एथेनॉल एक **सहसंयोजक यौगिक** है जो विलयन में **आयनित नहीं होता**!' } },
    { id: 'pyq-c4-13', examTag: 'RRB Group D 2025 Shift 22', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.1): Low MP of Covalent Compounds', question: { en: 'Why do covalent compounds generally have low melting points?', hi: 'सहसंयोजक यौगिकों का गलनांक सामान्यतः निम्न क्यों होता है?' }, options: { en: ['Because their intermolecular forces are weak', 'Because their bonds within molecules are weak', 'Because they are composed of metals', 'Because their molecules are large'], hi: ['क्योंकि उनके अंतराआण्विक बल दुर्बल होते हैं', 'क्योंकि अणुओं के भीतर आबंध दुर्बल होते हैं', 'क्योंकि वे धातुओं से बने हैं', 'क्योंकि उनके अणु बड़े हैं'] }, correctIndex: 0, solution: { en: 'Intramolecular covalent bonds are strong, **intermolecular attractions BETWEEN molecules are weak** (`NCERT p.67`) -> low MP/BP!', hi: 'अणुओं के भीतर आबंध प्रबल होते हैं, परंतु **अंतराआण्विक बल दुर्बल** होने से गलनांक कम होता है!' } },
    { id: 'pyq-c4-14', examTag: 'RRB Group D 2025 Shift 24', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Act 4.5): KMnO₄ Color Fading', question: { en: 'A student heats ethanol with alkaline potassium permanganate. Which observation confirms that the oxidation process occurred?', hi: 'एक विद्यार्थी एथेनॉल को क्षारीय पोटैशियम परमैंगनेट के साथ गर्म करता है। कौन-सा अवलोकन पुष्टि करता है कि ऑक्सीकरण प्रक्रिया हुई?' }, options: { en: ['evolution of a gas with a burning smell', 'formation of a sweet-smelling ester', 'no change in color or smell', 'purple color of KMnO₄ fades and a sharp-smelling liquid forms'], hi: ['जलने की गंध वाली गैस निकलना', 'मीठी गंध वाला एस्टर बनना', 'कोई रंग या गंध परिवर्तन नहीं', 'KMnO₄ का बैंगनी रंग फीका पड़ता है और तीखी गंध वाला तरल बनता है'] }, correctIndex: 3, solution: { en: '`KMnO₄` purple fades as it reduces while turning ethanol into sharp vinegar-smelling **ethanoic acid** (`Act 4.5`).', hi: 'प्रारंभिक `KMnO₄` का बैंगनी रंग फीका पड़ना व तीखी सिरके जैसी गंध वाले अम्ल का बनना ऑक्सीकरण की पुष्टि है!' } },
    { id: 'pyq-c4-15', examTag: 'RRB Group D 2025 Shift 26', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.4.2): Ester Functional Group', question: { en: 'Which functional group is found in esters?', hi: 'एस्टर में कौन-सा प्रकार्यात्मक समूह पाया जाता है?' }, options: { en: ['–NH₂', '–COO–', '–OH', '–COOH'], hi: ['–NH₂', '–COO–', '–OH', '–COOH'] }, correctIndex: 1, solution: { en: 'Esters carry the **`–COO–`** (`R–CO–OR’`) group, formed by reacting carboxylic acid + alcohol.', hi: 'एस्टर यौगिकों में **`–COO–`** प्रकार्यात्मक समूह पाया जाता है।' } },
    { id: 'pyq-c4-16', examTag: 'RRB Group D 2025 Shift 3', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.4.2): Ethanoic Acid Tests', question: { en: 'Which of the following statements is true about ethanoic acid?', hi: 'एथेनॉइक अम्ल के संबंध में निम्नलिखित में से कौन-सा कथन सत्य है?' }, options: { en: ['It is used to sweeten food due to its sugar content', 'It has a soapy feel and bitter taste', 'It does not dissolve in water', 'It turns blue litmus red and reacts with carbonates to produce CO₂'], hi: ['शर्करा के कारण भोजन मीठा करता है', 'साबुन जैसा स्पर्श व कड़वा स्वाद', 'जल में अविलेय है', 'यह नीले लिटमस को लाल करता है और कार्बोनेट से अभिक्रिया कर CO₂ बनाता है'] }, correctIndex: 3, solution: { en: '`CH₃COOH` (`weak acid`) dissolves cleanly in water, turns blue litmus red, and gives brisk `CO₂` with `Na₂CO₃ / NaHCO₃`.', hi: 'एथेनॉइक अम्ल नीला लिटमस लाल करता है व सोडियम कार्बोनेट से **`CO₂` गैस** मुक्त करता है (`क्रियाकलाप 4.7–4.9`)।' } },
    { id: 'pyq-c4-17', examTag: 'RRB Group D 2025 Shift 33', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.4.2): Esterification Reaction', question: { en: 'What type of reaction occurs when ethanoic acid reacts with ethanol in the presence of an acid catalyst?', hi: 'जब एथेनॉइक अम्ल एक अम्ल उत्प्रेरक की उपस्थिति में एथेनॉल से अभिक्रिया करता है, तो किस प्रकार की अभिक्रिया होती है?' }, options: { en: ['Esterification reaction', 'Combustion reaction', 'Saponification reaction', 'Neutralization reaction'], hi: ['एस्टरीकरण अभिक्रिया', 'दहन अभिक्रिया', 'साबुनीकरण अभिक्रिया', 'उदासीनीकरण अभिक्रिया'] }, correctIndex: 0, solution: { en: 'Carboxylic acid + Alcohol + acid catalyst -> Sweet-smelling Ester (`Esterification`, `Act 4.8`).', hi: 'अम्ल + एल्कोहॉल (अम्ल उत्प्रेरक) → एस्टर + जल (**एस्टरीकरण अभिक्रिया**)।' } },
    { id: 'pyq-c4-18', examTag: 'RRB Group D 2025 Shift 35', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Ex Q14): Bromine Water Test', question: { en: 'What visible change occurs when bromine water is added to ethene?', hi: 'जब ब्रोमीन जल को एथीन में मिलाया जाता है, तो कौन-सा दृश्य परिवर्तन प्रदर्शित होता है?' }, options: { en: ['The solution turns blue after addition reaction', 'A white precipitate forms in the water after addition reaction', 'The bromine water remains orange after reaction', 'The bromine water changes from orange to colorless'], hi: ['विलयन नीला हो जाता है', 'जल में श्वेत अवक्षेप बनता है', 'ब्रोमीन जल नारंगी बना रहता है', 'ब्रोमीन जल का रंग नारंगी से रंगहीन हो जाता है'] }, correctIndex: 3, solution: { en: 'Bromine adds across the `C=C` double bond of ethene -> **orange-brown bromine water turns colorless** (`test for unsaturation!`).', hi: 'एथीन का द्वि-आबंध ब्रोमीन से योग कर **नारंगी ब्रोमीन जल को रंगहीन** कर देता है!' } },
    { id: 'pyq-c4-19', examTag: 'RRB Group D 2025 Shift 36', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.3.1): Allotrope Combustion', question: { en: 'The combustion of carbon allotropes, like diamond and graphite, produces:', hi: 'हीरा और ग्रेफाइट जैसे कार्बन-अपररूपों के दहन से ______ उत्पन्न होता है।' }, options: { en: ['only carbon dioxide', 'only carbon dioxide and heat', 'only carbon dioxide and light', 'carbon dioxide, heat and light'], hi: ['केवल कार्बन डाइऑक्साइड', 'केवल कार्बन डाइऑक्साइड और ऊष्मा', 'केवल कार्बन डाइऑक्साइड और प्रकाश', 'कार्बन डाइऑक्साइड, ऊष्मा और प्रकाश'] }, correctIndex: 3, solution: { en: 'Verbatim NCERT `Sec 4.3.1`: Carbon in all allotropic forms burns in oxygen to yield **`CO₂` + Heat + Light**!', hi: 'सटीक NCERT (`पृ. 76`): कार्बन अपने सभी अपररूपों में दहन कर **`CO₂`, ऊष्मा और प्रकाश** देता है!' } },
    { id: 'pyq-c4-20', examTag: 'RRB Group D 2025 Shift 37', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Table 4.2): Alkane General Formula', question: { en: 'What is the general formula for alkanes with `n` carbon atoms?', hi: '`n` कार्बन परमाणुओं वाले ऐल्केन का सामान्य सूत्र क्या है?' }, options: { en: ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'CnH2n+1'], hi: ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'CnH2n+1'] }, correctIndex: 0, solution: { en: '**Alkanes**: **`CnH2n+2`** (`Alkenes: CnH2n`; `Alkynes: CnH2n-2`).', hi: 'संतृप्त ऐल्केन का सामान्य सूत्र **`CnH2n+2`** है।' } },
    { id: 'pyq-c4-21', examTag: 'RRB Group D 2025 Shift 38', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.5): Soap Micelle Core', question: { en: 'In a comparison between two soap solutions, one containing oil droplets and the other without, which is more likely to have well-developed micelles?', hi: 'तेल की बूंदों वाले और बिना तेल वाले दो साबुन विलयनों में से किसमें सुविकसित मिसेल बनने की अधिक संभावना है?' }, options: { en: ['The solution without oil because soap cannot form micelles with oil.', 'Neither solution because micelles cannot exist in aqueous solutions.', 'Both solutions because micelles never interact with oily substances.', 'The solution containing oil droplets because hydrophobic cores trap oil.'], hi: ['बिना तेल वाले में, क्योंकि साबुन तेल संग मिसेल नहीं बनाता', 'दोनों में नहीं', 'दोनों में बराबर क्योंकि मिसेल तेल से अंतःक्रिया नहीं करते', 'तेल की बूंदों वाले विलयन में, क्योंकि हाइड्रोफोबिक कोर तेल को ट्रैप कर लेते हैं'] }, correctIndex: 3, solution: { en: 'Soap’s hydrophobic hydrocarbon tails cluster naturally around non-polar oil droplets inside well-developed micelles (`Fig 4.12`).', hi: 'तेल की बूंदों के चारों ओर जलविरागी पूँछें आसानी से संगठित होकर सुविकसित मिसेल बना लेती हैं!' } },
    { id: 'pyq-c4-22', examTag: 'RRB Group D 2025 Shift 46', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.1): Diamond vs Graphite Conductivity', question: { en: 'Why does diamond not conduct electricity while graphite does?', hi: 'हीरा विद्युत का चालन क्यों नहीं करता है जबकि ग्रेफाइट विद्युत का चालन करता है?' }, options: { en: ['Fullerenes have mobile electrons in cages', 'Amorphous carbon contains delocalized electrons', 'All electrons in diamond are involved in bonding', 'Diamond has layers that slide and conduct'], hi: ['फुलेरीन के पिंजरों में गतिशील इलेक्ट्रॉन होते हैं', 'अक्रिस्टलीय कार्बन में विस्थानीकृत इलेक्ट्रॉन होते हैं', 'हीरे के सभी इलेक्ट्रॉन आबंधन में शामिल होते हैं', 'हीरे में फिसलन परतें होती हैं'] }, correctIndex: 2, solution: { en: 'In diamond every carbon uses all 4 valence electrons in covalent bonds (`0` free e⁻); in graphite the 4th delocalized electron conducts!', hi: 'हीरे में सभी 4 संयोजक इलेक्ट्रॉन आबंधन में शामिल होते हैं (कोई मुक्त e⁻ नहीं), जबकि ग्रेफाइट में 1 मुक्त इलेक्ट्रॉन होता है!' } },
    { id: 'pyq-c4-23', examTag: 'RRB Group D 2025 Shift 6', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.1): Tetrahedral Diamond', question: { en: 'Which of the following is the carbon allotrope having a tetrahedral structure?', hi: 'निम्नलिखित में से कौन-सा, चतुष्फलकीय संरचना वाला कार्बन अपररूप है?' }, options: { en: ['Graphite', 'Diamond', 'Fullerene', 'Graphene'], hi: ['ग्रेफाइट', 'हीरा', 'फुलेरीन', 'ग्राफीन'] }, correctIndex: 1, solution: { en: '**Diamond (`हीरा`)** links each carbon to 4 carbons in a **rigid 3D tetrahedral geometry**.', hi: '**हीरा** 3D चतुष्फलकीय जाली वाला कार्बन अपररूप है।' } },
    { id: 'pyq-c4-24', examTag: 'RRB Tech Gr-III 2024 Shift 13', section: 'General Science', subject: 'General Science', topic: 'NCERT Ch 4 (Sec 4.2.4): Homologous Series Trap', question: { en: 'Among the following which is NOT a homologous compound as compared to others?', hi: 'निम्नलिखित में से कौन-सा अन्य की तुलना में एक समजातीय यौगिक नहीं है?' }, options: { en: ['CH₃OH', 'C₃H₇OH', 'C₂H₅OH', 'C₆H₅OH'], hi: ['CH₃OH', 'C₃H₇OH', 'C₂H₅OH', 'C₆H₅OH'] }, correctIndex: 3, solution: { en: '`CH₃OH, C₂H₅OH, C₃H₇OH` follow **`CnH₂n+₁OH`** stepping by `–CH₂–`; **`C₆H₅OH` (Phenol)** is an aromatic compound outside the chain series!', hi: '`CH₃OH, C₂H₅OH, C₃H₇OH` `CnH₂n+₁OH` ऐल्कोहॉल समजातीय श्रेणी के हैं; **`C₆H₅OH` (फिनॉल)** ऐरोमैटिक होने से इस श्रेणी का नहीं है!' } },
  ],
};
