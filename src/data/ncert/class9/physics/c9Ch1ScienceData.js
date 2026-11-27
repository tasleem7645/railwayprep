/**
 * Class 9 NCERT Science (2026–27 Edition — ihsc101.pdf, Pages 1–7) + RRB Measurement & SI Units Deep-Dive
 * Chapter 1: Entering the World of Secondary Science (अन्वेषण — माध्यमिक विज्ञान के संसार में प्रवेश) — Gold Standard v3 (New 2026–27 Ch 1!)
 * Complete Coverage: Observation Lens & Model Compass -> Simplifying Reality & Scientific Models (`Ex 1.1 Cricket Sixer`, `Act 1.1 Bicycle`) ->
 * Pioneer Meghnad Saha (`Indian Stamp, Hot-Gas Star Ionisation`) -> Scientific Symbols (`m, v, F, I`), Math Language & Speed of Light `c = 299792458 m/s` (`Latin celeritas`) ->
 * International SI Standards (`Fig 1.1 Kilogram` & `22,300 kg vs lb/L -> 15,000 L fuel crash`) + All 7 Base & Key Derived SI Units ->
 * Law vs Theory vs Fundamental Principle, Measurable Predictions (`Ex 1.2 Rain`), Limits & Total Solar Eclipse (`Fig 1.2`) ->
 * Order-of-Magnitude Reasoning (`2000–2500 kcal Rice Fig 1.3`, `Ex 1.3 Daily Air 10,000 L vs 8,640 L`) & Interdisciplinary Science (`Surgical Mask Fig 1.4`).
 * Activity `1.1`, 4 In-Text Qs (`Think & Answer + Ex 1.1–1.3`), 12 Exercises & 24 Pure RRB SI/Units/Constants PYQs.
 */

export const C9_CH1_SCIENCE_DATA = {
  id: 'c9-phy-ch1',
  classId: 'class9',
  subjectId: 'physics',
  subjectLabel: { en: 'Physics & Foundation', hi: 'भौतिक विज्ञान एवं विज्ञान आधार' },
  chapterNumber: 1,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 1: Entering the World of Secondary Science (CBT Edition)',
  blueprintSvgKey: 'c9-ch1-blueprint-mindmap',
  weightageBars: [
    { label: { en: '7 SI Base Units (`m, kg, s, A, K, mol, cd`), Derived Equivalents & `°C ↔ K` (`0.004 km → 4 m`)', hi: '7 मूल SI मात्रक (`m, kg, s, A, K, mol, cd`), व्युत्पन्न मात्रक (`N, J, Pa, G`) व `°C ↔ K`' }, pct: 38 },
    { label: { en: 'Speed of Light Constant `c = 299,792,458 m/s` (`celeritas`), Foucault 1862 & Aviation Fuel Unit Case', hi: 'प्रकाश वेग `c` (`299,792,458 m/s`, लैटिन `celeritas`), फूको व `22,300 kg` विमान त्रुटि' }, pct: 22 },
    { label: { en: 'Scientific Models (`Ex 1.1, Act 1.1`), Meghnad Saha Ionisation & Law vs Theory vs Principle', hi: 'वैज्ञानिक मॉडल (`उदा. 1.1`), मेघनाद साहा आयनन एवं नियम बनाम सिद्धांत बनाम आधारभूत सिद्धांत' }, pct: 22 },
    { label: { en: 'Predictions (`Ex 1.2`), Solar Eclipse Proof (`Fig 1.2`), Fermi Air Estimation (`Ex 1.3`) & Mask Fusion (`Fig 1.4`)', hi: 'वैज्ञानिक पूर्वानुमान, सूर्य ग्रहण परीक्षण (`चित्र 1.2`), श्वसन आकलन (`10,000 L`) व मास्क एकता' }, pct: 18 },
  ],
  title: {
    en: 'Chapter 1: Entering the World of Secondary Science',
    hi: 'अध्याय 1: अन्वेषण — माध्यमिक विज्ञान के संसार में प्रवेश',
  },
  subtitle: {
    en: 'New 2026–27 NCERT Edition • Models, Meghnad Saha, c = 299792458 m/s, 7 SI Base Units, Laws vs Theories & 24 SI/Measurement PYQs',
    hi: 'नया 2026–27 NCERT अध्याय 1 संपूर्ण गहराई • वैज्ञानिक मॉडल, मेघनाद साहा, प्रकाश वेग c, 7 SI मात्रक व 24 रेलवे PYQs',
  },
  metrics: {
    pages: 7,
    activities: 1,
    tables: 4,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 12,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class9-phy-ch1/hero-science-world.webp',
    caption: {
      en: 'Secondary Science Inquiry Bench: Observation Magnifying Lens & Model Compass, Precision Standard Kilogram Mass (`Fig 1.1`), Prism Light Speed `c` & Layered Earth System.',
      hi: 'अन्वेषण प्रयोगशाला (`नया 2026–27 NCERT`): सूक्ष्म अवलोकन आवर्धक लेंस व दिशासूचक, अंतर्राष्ट्रीय किलोग्राम मानक (`चित्र 1.1`), प्रकाश वेग `c` व परतदार पृथ्वी मॉडल।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Models & Meghnad Saha (`p.1–2`)**: Textbook icons: **Magnifying lens** (`close observation`) + **Compass** (`model direction & limits`). Scientists build **simplified models** by keeping critical variables (`ball mass, speed, direction` in **Ex 1.1 Cricket Sixer**) and ignoring tiny noise (`bat brand, colour, negligible air drag`). **Meghnad Saha** simplified stars as **hot ionised gas (`T, P, ionisation`)** proving **star colour depends directly on star temperature**!',
      hi: '**वैज्ञानिक मॉडल व मेघनाद साहा (`पृ. 1–2`)**: **आवर्धक लेंस** = सूक्ष्म अवलोकन; **दिशासूचक** = सही मॉडल व सीमाएँ। सरल मॉडल में अनावश्यक विवरण (`बल्ले का ब्रांड, रंग` — **उदा. 1.1**) छोड़ मुख्य चर (`द्रव्यमान, चाल, दिशा`) रखते हैं। **मेघनाद साहा** ने तारे को **उष्ण गैस (`ताप, दाब, आयनन`)** मान सिद्ध किया कि **तारों का रंग उनके तापमान से जुड़ा है**!',
    },
    {
      en: '**Constants & SI Safety (`p.3`)**: Standard symbols: **`m`** (`mass`), **`v`** (`velocity`), **`F`** (`force`), **`I`** (`current`). **Speed of light in vacuum `c = 299,792,458 m/s`** (`symbol c from Latin **celeritas** = speed`; **Foucault 1862** first measured precisely via rotating mirror). Aviation disaster lesson: calculating `22,300 kg` jet fuel using **`lb/L` instead of `kg/L`** caused **`15,000 L` fuel shortage** -> global **SI Units** (`7 base units: m, kg, s, A, K, mol, cd`) prevent conversion catastrophes!',
      hi: '**प्रतीक, प्रकाश वेग `c` व SI मानक (`पृ. 3`)**: प्रतीक **`m, v, F, I`**। **निर्वात में प्रकाश वेग `c = 299,792,458 m/s`** (प्रतीक **`c` लैटिन शब्द `celeritas` = गति** से; **1862 फूको** ने घूर्णन दर्पण से मापा)। **`22,300 kg`** विमान ईंधन की गणना `kg/L` के बजाय **`lb/L`** में करने से **`15,000 लीटर` कमी** हो गई — इसलिए मानक **7 मूल SI मात्रक** (`m, kg, s, A, K, mol, cd`) अनिवार्य हैं!',
    },
    {
      en: '**Law vs Theory vs Principle + Myths (`p.4–5`)**: **Law (`नियम`)** describes a regular pattern (`Newton’s Laws -> bus sudden brake jerk`). **Theory (`सिद्धांत`)** is NEVER a guess — a carefully tested explanation of WHY patterns occur (`Atomic Theory`). **Fundamental Principle (`आधारभूत सिद्धांत`)** guides broad cases (`Conservation of Energy`). **Total Solar Eclipse (`Fig 1.2`)**: purely shadow play with **zero chemical/biological harm to food**! Weather chaos: small `T/P` shifts reduce multi-day forecast accuracy.',
      hi: '**नियम बनाम सिद्धांत बनाम आधारभूत सिद्धांत (`पृ. 4–5`)**: **नियम (`Law`)** = पैटर्न वर्णन (`न्यूटन गति नियम`); **सिद्धांत (`Theory`)** = अनुमान नहीं, प्रमाण-आधारित **क्यों?** की व्याख्या (`परमाणु सिद्धांत`); **आधारभूत सिद्धांत (`Principle`)** = व्यापक नियम (`ऊर्जा संरक्षण`)। **सूर्य ग्रहण (`चित्र 1.2`)**: केवल छाया का खेल, **भोजन खराब होने का कोई वैज्ञानिक प्रमाण नहीं**!',
    },
    {
      en: '**Fermi Estimation & No Boundaries (`p.6–7`)**: Daily adult energy need **`2,000–2,500 kcal`**. **Daily Breathing Check (`Ex 1.3`)**: `12–15 breaths/min × 1440 min` ≈ **`20,000 breaths/day` × `0.5 L` (`balloon check`) = `~10,000 L/day`** (`cross-check: 8,640 L/day`). Real problems have NO strict subject walls: a **Surgical Mask (`Fig 1.4`)** unites **Physics** (`electrostatic attraction`), **Chemistry** (`polymers`), **Biology** (`virus size`), and **Maths** (`airflow efficiency`)!',
      hi: '**तर्कसंगत अनुमान व अंतःविषय एकता (`पृ. 6–7`)**: दैनिक ऊर्जा आवश्यकता **`2000–2500 kcal`**। **दैनिक श्वसन अनुमान (`उदा. 1.3`)**: `12–15 श्वास/min × 1440 min ≈ 20,000 श्वास × 0.5 L` = **`~10,000 L/दिन`** (`गुब्बारा जाँच 8,640 L`)। **शल्य मास्क (`चित्र 1.4`)** में **भौतिकी (`स्थैतिक आकर्षण`), रसायन (`बहुलक रेशे`), जीवविज्ञान (`विषाणु आमाप`) व गणित (`वायुप्रवाह दक्षता`)** सभी मिलकर काम करते हैं!',
    },
  ],
  sections: [
    {
      id: 'models-symbols-constants-si',
      number: '1.1–1.2',
      flowDiagramKey: 'c9-ch1-blueprint-mindmap',
      diagramKey: 'c9-ch1-models-law-theory-diagram',
      title: {
        en: 'Scientific Models (`Ex 1.1, Act 1.1`), Meghnad Saha Ionisation, Scientific Language (`c = 299,792,458 m/s`) & SI Units (`22,300 kg` Fuel Lesson)',
        hi: 'वैज्ञानिक मॉडल (`उदा. 1.1`), मेघनाद साहा आयनन, प्रतीक व प्रकाश वेग `c` (`299,792,458 m/s`) एवं अंतर्राष्ट्रीय SI मात्रक (`विमान ईंधन सबक`)',
      },
      summaryTag: {
        en: 'NCERT Pages 1–3 • Observation Lens & Model Compass, Meghnad Saha Stamp Box, Latin Celeritas c & International Kilogram',
        hi: 'NCERT पृ. 1–3 • आवर्धक लेंस व दिशासूचक, मेघनाद साहा डाक टिकट बॉक्स, प्रकाश वेग c व किलोग्राम (चित्र 1.1)',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Purposeful Exploration: Simplified Models (`Ex 1.1`) & Astrophysicist Meghnad Saha (`p.1–2`)',
            hi: '1. माध्यमिक अन्वेषण, सरल मॉडल निर्माण (`उदा. 1.1`) व भारतीय खगोलभौतिकविद मेघनाद साहा (`पृ. 1–2`)',
          },
          conceptStory: {
            en: 'Look closely at the frame around every page number in the new NCERT textbook (`p.1`): a **Magnifying Lens** (`symbolic of micro-observation & noticing subtle hidden patterns`) plus a **Compass** (`reminding us exploration isn’t aimless wandering — we must choose appropriate models, ask testable questions & recognise model limits`).\n• **==Why Do Scientists Build Models by Ignoring Details (`p.2`)?==** Nature is hugely complex. So **Physics** treats a moving car as a **single point**, **Chemistry** pictures atoms/molecules as **spheres & bonds**, **Biology** highlights key organelles, and **Geography/Earth Science** represents Earth as a **smooth layered sphere**. Omitting tiny factors (`like air resistance in initial gravity study or single cells when studying heart pumping`) is **deliberate simplification, NOT an error!**\n  - **Example 1.1 (`Cricket Sixer Model`)**: Want to predict if a struck ball clears the boundary? **KEEP**: ball mass, strike speed & launch direction; **OMIT**: bat brand, ball colour, pitch grass, negligible drag & seam spin.\n• **==Pioneer Spotlight: Meghnad Saha (`Indian Postage Stamp Box, p.2`)==**: When physicist **Meghnad Saha** studied starlight spectra, he didn’t model every atom and nuclear reaction inside a star. Instead, he treated stellar matter purely as a **HOT GAS** and focused solely on **Temperature (`T`), Pressure (`P`), and Ionisation (`formation of atomic ions`)** (`famous Saha Ionisation Equation`) — revealing deeply how **star colour is tied directly to stellar temperature**!',
            hi: 'नई NCERT कक्षा 9 पुस्तक के हर पृष्ठ क्रमांक के चारों ओर दो प्रतीक बने हैं: **आवर्धक लेंस (`सूक्ष्म अवलोकन व पैटर्न पहचान`)** और **दिशासूचक यंत्र (`उपयुक्त मॉडल चुनना, सही प्रश्न पूछना व विचारों की सीमा जानना`)**।\n• **==मॉडल बनाते समय कुछ विवरणों की उपेक्षा क्यों की जाती है (`पृ. 2`)?==** प्रकृति अत्यंत जटिल है। अतः **भौतिकी** में गतिशील कार को **एक बिंदु**, **रसायन** में अणुओं को **गोलों व आबंधों**, और **पृथ्वी विज्ञान** में पृथ्वी को **परतों वाले समतल गोले** से दर्शाते हैं। गुरुत्व समझने में प्रारंभिक वायु प्रतिरोध छोड़ना या हृदय पंपन में एकल कोशिकाओं की उपेक्षा **त्रुटि नहीं, बल्कि विषय को सरल बनाने का जानबूझकर किया चयन है!**\n  - **उदाहरण 1.1 (`क्रिकेट छक्का मॉडल`)**: **शामिल करें** — गेंद का द्रव्यमान, गति व दिशा; **छोड़ दें** — बल्ले का ब्रांड, गेंद का रंग, घास मात्रा व नगण्य वायु/सीम घूर्णन।\n• **==मेघनाद साहा (`भारतीय डाक टिकट बॉक्स, पृ. 2`)==**: जब भौतिकविद **मेघनाद साहा** ने तारों के प्रकाश का अध्ययन किया, तो उन्होंने प्रत्येक परमाणु व अभिक्रिया को छोड़ तारे को केवल एक **उष्ण गैस (`Hot Gas`)** माना और **केवल तापमान (`T`), दाब (`P`) व आयन बनने (`आयनन`)** पर ध्यान केंद्रित किया — इससे सिद्ध हुआ कि **तारों का रंग उनके ताप से गहराई से जुड़ा होता है**!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch1/real/meghnad_saha.webp',
            secondaryUrl: '/ncert-notes/class9-phy-ch1/real/prism_optics.webp',
            title: { en: 'Dr. Meghnad Saha (`Ionised Stellar Spectra Pioneer`) & Optical Prism Showing Wavelength / Light Speed `c`', hi: 'मेघनाद साहा (`तारों का रंग-ताप संबंध व आयनन समीकरण`) एवं प्रकाश वेग `c` / स्पेक्ट्रम' },
            caption: {
              en: 'Left: Astrophysicist Meghnad Saha (`p.2` stamp feature) linked stellar spectral lines directly to hot gas temperature & ionisation. Right: Light dispersion and fixed speed c (`299,792,458 m/s`) studied via optical media.',
              hi: 'बायाँ: प्रसिद्ध भारतीय भौतिकविद मेघनाद साहा जिन्होंने तारे को उष्ण आयनित गैस मानकर तारे के रंग-ताप का रहस्य खोला। दायाँ: प्रकाश वेग `c` व वर्णक्रम प्रयोग।',
            },
          },
          inlinePyqIds: ['pyq-c9p1-11', 'pyq-c9p1-17'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Precise Language, Maths as Reasoning, `c = 299,792,458 m/s` (`Celeritas`) & SI Standard Lessons (`22,300 kg` Jet Fuel Error)',
            hi: '2. विज्ञान की सटीक भाषा व गणित, प्रकाश वेग `c` (`299,792,458 m/s`) तथा `22,300 kg` विमान ईंधन SI त्रुटि (`चित्र 1.1`)',
          },
          conceptStory: {
            en: 'Science uses universal symbols (`m` for mass, `v` for velocity, `F` for force, `I` for electric current) + exact definitions (`"force", "work", "cell", "reaction"` mean something strict unlike casual speech!). And mathematics in science isn’t rote memorisation — it is a **concise logical language expressing how quantities relate**:\n• **Curiosity Box (`p.3`): Why Symbol `c` for Speed of Light?** Chosen from international convention — from Latin **==“celeritas” (`meaning swiftness / speed`)==**! In SI today, vacuum speed of light is a **==fixed fundamental constant: `299,792,458 m/s` (`≈ 3 × 10⁸ m/s`)==** (`first measured accurately in 1862 by Jean Bernard Léon Foucault using a rotating mirror — NTPC PYQ!`).\n• **Go Further Case (`p.3`): The Aviation Fuel Unit-Conversion Crash (`Gimli Glider`)!** A passenger aircraft required **`22,300 kg`** of fuel, yet the ground crew miscalculated fuel density using **pounds per litre (`lb/L`) instead of kilograms per litre (`kg/L`)** -> leaving the aircraft **`15,000 litres` short of fuel** mid-flight! Only a skillful **emergency glide landing (`फिसलन के साथ आपातकालीन अवतरण`)** saved every life!\n• **Curiosity Box (`p.3`, Fig 1.1)**: Why is **`1 kg`** (`kilogram`) identical everywhere (`from market vegetable scales Fig 1.1 to analytical balances`)? Global **International System (`SI`)** guarantees reproducibility, fair commerce, and zero unit disasters!',
            hi: 'विज्ञान में प्रयुक्त शब्द (`बल, कार्य, कोशिका, अभिक्रिया`) बोलचाल से भिन्न सटीक अर्थ रखते हैं; भौतिक राशियों को मानक प्रतीकों (**`m` = द्रव्यमान, `v` = वेग, `F` = बल, `I` = विद्युत धारा**) व **SI मात्रकों** से लिखते हैं। गणित भी केवल गणना नहीं बल्कि राशियों के संबंध समझने की भाषा है!\n• **जिज्ञासा-सूत्र (`पृ. 3`): प्रकाश के वेग को ‘c’ से क्यों निरूपित करते हैं?** यह लैटिन शब्द **==सेलेरिटास (`celeritas`: गति)==** से लिया अंतर्राष्ट्रीय प्रतीक है। वर्तमान SI प्रणाली में निर्वात में प्रकाश की गति एक **==निश्चित भौतिक स्थिरांक: `299,792,458 m/s` (`≈ 3 × 10⁸ m/s`)==** के रूप में परिभाषित है (`1862 में लियोन फूको ने घूर्णन दर्पण से प्रथम सटीक मापन किया` — RRB NTPC PYQ)! ध्यान रखें: माध्यम बदलने पर चाल घटती है (**`v_वायु > v_जल > v_काँच`**, Tech Shift 20)।\n• **आइए, और आगे बढ़ें (`पृ. 3`): वायुयान ईंधन की गलत गणना!** एक यात्री विमान को **`22,300 kg`** ईंधन चाहिए था, पर ग्राउंड क्रू ने घनत्व की गणना **`kg/L` के स्थान पर `पाउंड/लीटर (lb/L)`** में कर दी -> विमान में **`15,000 लीटर` ईंधन कम** रह गया और मध्य उड़ान में इंजन बंद होने पर फिसलन के साथ आपात लैंडिंग करनी पड़ी! इसी कारण **सभी वैज्ञानिक व तकनीकी कार्यों में मानक SI इकाइयाँ अनिवार्य हैं** (`चित्र 1.1`: बाज़ार तराजू से प्रयोगशाला तुला तक 1 kg सर्वत्र समान)!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch1/real/kilogram.webp',
            secondaryUrl: '/ncert-notes/class9-phy-ch1/real/analytical_balance.webp',
            title: { en: 'Real Mass Standards (`Fig 1.1`, p.3): Hexagonal Kilogram Weights & Precision Analytical Lab Balance', hi: 'वास्तविक द्रव्यमान मानक (`चित्र 1.1`, पृ. 3): मानक किलोग्राम बाट एवं उच्च-सटीक विश्लेषणात्मक तुला' },
            caption: {
              en: 'Left: Everyday market standard iron weights guaranteeing 1 kg uniformity everywhere. Right: High-precision laboratory balance displaying mass to 0.0001 g (`10⁻⁷ kg`) under SI traceability.',
              hi: 'बायाँ: व्यापार व दैनिक जीवन में निष्पक्षता हेतु समान 1 kg मानक बाट। दायाँ: वैज्ञानिक प्रयोगों हेतु परिष्कृत मापन करने वाली आधुनिक विश्लेषणात्मक तुला।',
            },
          },
          inlinePyqIds: ['pyq-c9p1-4', 'pyq-c9p1-18', 'pyq-c9p1-24'],
        },
      ],
    },
    {
      id: 'laws-theories-estimation-mask',
      number: '1.3–1.4',
      flowDiagramKey: 'c9-ch1-si-units-constants-diagram',
      svgLab: 'science-method-units-lab',
      diagramKey: 'c9-ch1-estimation-interdisciplinary-diagram',
      title: {
        en: 'Laws vs Theories vs Principles (`p.4`), 7 SI Units & Derived Matrix, Predictions (`Ex 1.2–1.3`), Solar Eclipse Myth & Mask Fusion (`Fig 1.4`)',
        hi: 'नियम बनाम सिद्धांत (`पृ. 4`), सभी 7 मूल/व्युत्पन्न SI मात्रक, सन्निकट अनुमान (`उदा. 1.3`), सूर्य ग्रहण जाँच (`चित्र 1.2`) व मास्क एकता (`चित्र 1.4`)',
      },
      summaryTag: {
        en: 'NCERT Pages 4–7 • Self-Correcting Theories, Rain & Weather Chaos, Daily Air 10,000 L / Rice 2500 kcal & All RRB SI PYQs',
        hi: 'NCERT पृ. 4–7 • सूर्य ग्रहण मिथक खंडन, 10,000 L श्वसन, 2000–2500 kcal चावल, शल्य मास्क के 4 विषय व सभी RRB SI PYQ',
      },
      blocks: [
        {
          type: 'conceptStory',
          heading: {
            en: '1. Scientific Law vs Theory vs Fundamental Principle + Testing Viral Claims (`Solar Eclipse Fig 1.2`, Ex 1.2 Rain)',
            hi: '1. नियम, सिद्धांत व आधारभूत सिद्धांत में भेद + वैज्ञानिक पूर्वानुमान (`उदा. 1.2`) व सूर्य ग्रहण मिथक खंडन (`चित्र 1.2`)',
          },
          conceptStory: {
            en: 'Three distinct terms appear everywhere in Physics & Chemistry (`p.4`) — NEVER confuse them in exams:\n• **Law (`नियम`)**: Describes **WHAT consistent pattern** happens (`words or formula`), e.g., **Newton’s Laws of Motion** explaining forward jerk when a moving bus brakes abruptly.\n• **Theory (`सिद्धांत`)**: Goes a step further to explain **WHY those patterns arise** — built from accumulated evidence & strict testing (`NEVER an untested guess!` e.g., **Atomic Theory** explaining how molecules form). **Crucial Science Feature**: NO theory is final or beyond questioning; when sharper data mismatches a prediction, scientists revise or reject models using **EVIDENCE, never personal opinion**!\n• **Fundamental Principle (`आधारभूत सिद्धांत`)**: Broad universal principle spanning diverse phenomena (`e.g. **Conservation of Energy** while climbing stairs`).\n• **Measurable Predictions (`Ex 1.2`, p.4–5)**: “Black clouds = rain” is vague (`only Yes/No`). Better scientific questions ask **measurable metrics**: *Current humidity % (`e.g. 80%`), wind speed/direction, temperature drop*. **Why do weather forecasts still fail after days?** Weather depends on coupled variables (`temperature, pressure, humidity, wind`); tiny shifts compound rapidly (`short-term hours/days reliable, longer range drops`).\n• **Viral Social-Media Claim Test (`p.5`, Fig 1.2)**: *Does eating food during a Solar Eclipse cause harm?* Asking testable physical/chemical questions proves a **==Total Solar Eclipse is purely a play of shadows (`केवल छायाओं का खेल`)==** — NO physical, chemical, or biological food spoilage occurs!',
            hi: 'माध्यमिक विज्ञान के तीन आधार स्तंभ (`पृ. 4` — अंतर सदैव याद रखें):\n1) **नियम (`Law`)**: प्रकृति में बार-बार दिखने वाले **नियमित पैटर्न का वर्णन** (`शब्दों या गणितीय समीकरण में`) — जैसे **न्यूटन के गति नियम** (`चलती बस अचानक रुकने पर आगे झटका लगना`)।\n2) **सिद्धांत (`Theory`)**: एक कदम आगे बढ़कर स्पष्ट करता है कि **ये पैटर्न क्यों उत्पन्न होते हैं** (`समय के साथ एकत्रित प्रमाणों पर आधारित`) — जैसे **परमाणु सिद्धांत**। ध्यान रखें: **सिद्धांत का अर्थ बिना परीक्षण का अनुमान नहीं होता**! नए प्रमाण मिलने पर इनमें सुधार/अस्वीकृति *“मत” से नहीं अपितु साक्ष्य से* होती है — यही विज्ञान को विश्वसनीय बनाता है।\n3) **आधारभूत सिद्धांत (`Fundamental Principle`)**: व्यापक मूल विचार जो विविध स्थितियों में लागू हो — जैसे **सीढ़ियाँ चढ़ते समय ऊर्जा संरक्षण का सिद्धांत**!\n• **उदाहरण 1.2 (`वर्षा पूर्वानुमान`)**: *“काले बादल हैं”* के बजाय **मापन योग्य प्रश्न** पूछें — *“आज आर्द्रता स्तर (`क्या 80% है?`), वायु गति/दिशा व ताप गिरावट कैसी है?”*। मौसम के कई कारक (`ताप, दाब, आर्द्रता, वायु`) सूक्ष्म बदलाव से समय साथ विशाल परिवर्तन कर देते हैं, अतः दीर्घकालिक मौसम अनुमान कठिन होता है (`पृ. 5`)।\n• **वायरल दावा जाँच (`चित्र 1.2`, पृ. 5)**: *क्या ग्रहण में भोजन हानिकारक होता है?* सरल जाँच से सिद्ध होता है कि **==सूर्य ग्रहण केवल छायाओं का खेल (`Shadow play`) है==** — तापमान या भोजन में हानि का कोई **भौतिक, रासायनिक या जैविक प्रमाण नहीं है**!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch1/real/solar_eclipse.webp',
            secondaryUrl: '/ncert-notes/class9-phy-ch1/real/surgical_mask.webp',
            title: { en: 'Total Solar Eclipse Shadow Geometry (`Fig 1.2`, p.5) & 4-Branch Surgical Mask Fusion (`Fig 1.4`, p.7)', hi: 'खग्रास सूर्य ग्रहण (`चित्र 1.2` — केवल छाया घटना) एवं शल्य चिकित्सा मास्क (`चित्र 1.4` — 4 विषयों का संगम)' },
            caption: {
              en: 'Left (`Fig 1.2`): Total solar eclipse is purely alignment geometry casting Earth-Moon shadows — zero toxicity occurs in food. Right (`Fig 1.4`): Surgical masks prove real science needs Physics (electrostatics), Chemistry (polymers), Biology (virus size) & Maths (filtration flow) together!',
              hi: 'बायाँ (`चित्र 1.2`): सूर्य ग्रहण मात्र छायाओं का खेल है जिसका भोजन की शुद्धता पर कोई रासायनिक/जैविक दुष्प्रभाव नहीं। दायाँ (`चित्र 1.4`): एक मास्क भौतिकी, रसायन, जीवविज्ञान व गणित चारों के समन्वय से काम करता है!',
            },
          },
          inlinePyqIds: ['pyq-c9p1-1', 'pyq-c9p1-2', 'pyq-c9p1-3', 'pyq-c9p1-19'],
        },
        {
          type: 'conceptStory',
          heading: {
            en: '2. Sanity Check Estimations (`Ex 1.3`: `10,000 L` Daily Air & Monthly Rice `Fig 1.3`) + Science Without Borders (`Fig 1.4`)',
            hi: '2. सन्निकट अनुमान (`उदा. 1.3`: प्रतिदिन `10,000 L` वायु व `2500 kcal` चावल) एवं विज्ञान की सीमा-रहित एकता (`चित्र 1.4`)',
          },
          conceptStory: {
            en: 'Notice how strong scientists check calculations FIRST using rough common-sense **order-of-magnitude estimates (`सन्निकट मान आकलन`)** (`p.5–6`):\n1) **Family Monthly Rice Problem (`Fig 1.3`)**: Average adult daily energy need ≈ **`2,000–2,500 kcal`**. Estimating from `100 g` cooked rice catches absurd mistakes immediately: **`100 g` rice for 4 people for a month is way too small**, while several tonnes is ridiculously huge!\n2) **==Solved Example 1.3 (`p.6`): How Many Litres of Air Do You Breathe Per Day?==**\n   - **Method 1 (`Breaths`)**: Resting rate ≈ **`12–15 breaths/min`** × `1,440 min/day` (`60 × 24`) ≈ **`18,000–22,000 breaths/day` (`~20,000`)**. Inflating a `2 L` rubber balloon takes **`4–5 breaths`** ⇒ `1 breath` ≈ **`0.5 L`** ⇒ Daily air **`20,000 × 0.5 L = ~10,000 litres/day`**!\n   - **Method 2 (`Cross-Check via Inflation Time`)**: If 1 balloon (`2 L`) inflates in `20 s` (`3 balloons/min`) ⇒ `3 × 2 L × 1,440 min` = **`8,640 litres/day`** (`reassuringly close to 10,000 L!`).\n3) **No Walls Inside Nature (`p.6–7`, Fig 1.4)**: Divisions (`Physics, Chemistry, Biology, Earth Science`) only organise human study — nature knows NO borders! Explaining **climate change, new medicines, or Covid-19 Surgical Masks (`चित्र 1.4`)** requires combining **Physics (`particle motion + electrostatic attraction`)**, **Chemistry (`synthetic polymer fibre properties`)**, **Biology (`virus size & transmission`)**, and **Maths (`airflow filtration efficiency`)**!',
            hi: 'वैज्ञानिक चिंतन में सटीक गणना से पहले **सन्निकट अनुमान (`Sanity Check`)** से जाँच करते हैं कि उत्तर व्यावहारिक है या नहीं (`पृ. 5–6`):\n1) **मासिक चावल आकलन (`चित्र 1.3`)**: एक औसत वयस्क को दैनिक लगभग **`2,000–2,500 kcal`** ऊर्जा चाहिए — इस अनुमान से पता चल जाता है कि 4 सदस्यों के 1 माह हेतु `100 g` बहुत कम और कुछ टन अत्यधिक होगा।\n2) **==उदाहरण 1.3 (`पृ. 6`): एक दिन में कितने लीटर वायु श्वास में लेते हैं?==**\n   - **विधि 1**: विश्राम में **`12–15 श्वास/मिनट`** × `1,440 मिनट/दिन` (`60×24`) ≈ **`18–22 हज़ार (~20,000 श्वास/दिन)`**। `2 L` गुब्बारा भरने में `4–5 श्वास` ⇒ `1 श्वास ≈ 0.5 L` ⇒ दैनिक आयतन = **`~10,000 लीटर`**!\n   - **विधि 2 (`क्रॉस-जाँच`)**: 20 सेकंड में 1 गुब्बारा (`3 गुब्बारे/मिनट`) × `2 L` × `1440` = **`~8,640 लीटर`** (`10,000 L के समीप, तर्कसंगत!`)।\n3) **प्रकृति में कोई विभाजन रेखा नहीं (`पृ. 6–7`, चित्र 1.4)**: भौतिकी, रसायन, जीवविज्ञान व पृथ्वी विज्ञान केवल हमारी सुविधा के नाम हैं। **सर्जिकल मास्क (`चित्र 1.4`)** समझने में **भौतिकी (`कण गति व वैद्युत स्थैतिक आकर्षण`), रसायन (`बहुलक रेशों के गुण`), जीवविज्ञान (`विषाणु आमाप`) व गणित (`निस्पंदन दक्षता मॉडल`)** चारों एकसाथ काम करते हैं!',
          },
          viralTrick: {
            en: '**SI Units & Ch 1 Memory Code**: **7 Base SI**: **“My Kind Sister Always Keeps Many Candles”** (**m**etre, **k**g, **s**ec, **A**mpere, **K**elvin, **mol**e, **cd** candela)! Speed of light **`c`** (`Latin celeritas`) = **`299,792,458 m/s`**! Daily air = **`10,000 L`** (`20,000 × 0.5 L`)!',
            hi: '**7 मूल SI ट्रिक**: **m (`मीटर`), kg (`किग्रा`), s (`सेकंड`), A (`एम्पियर`), K (`केल्विन`), mol (`मोल`), cd (`कैंडेला`)**! प्रकाश वेग **`c`** (`celeritas`) = **`299,792,458 m/s`** | **दैनिक श्वास = `~10,000 L` (`8,640 L` क्रॉस-जाँच)**!',
          },
          inlinePyqIds: ['pyq-c9p1-5', 'pyq-c9p1-6', 'pyq-c9p1-7', 'pyq-c9p1-8', 'pyq-c9p1-9', 'pyq-c9p1-10', 'pyq-c9p1-12', 'pyq-c9p1-13', 'pyq-c9p1-14', 'pyq-c9p1-15', 'pyq-c9p1-16', 'pyq-c9p1-20', 'pyq-c9p1-21', 'pyq-c9p1-22', 'pyq-c9p1-23'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: { en: 'Scientific Law (`नियम`) vs Theory (`सिद्धांत`) vs Fundamental Principle (`आधारभूत सिद्धांत`)', hi: 'वैज्ञानिक नियम (`Law`) बनाम सिद्धांत (`Theory`) बनाम आधारभूत सिद्धांत (`Principle`)' },
      left: { en: 'Law: Concise summary/formula of WHAT recurring pattern occurs (`e.g. Newton’s Laws of Motion`)', hi: 'नियम: अवलोकन के नियमित पैटर्न का वर्णन (`जैसे न्यूटन गति नियम से बस ब्रेक का झटका`)' },
      right: { en: 'Theory: Evidence-backed explanation of WHY patterns happen (`Atomic Theory`); Principle: Broad conservation laws!', hi: 'सिद्धांत: अनुमान नहीं बल्कि साक्ष्य से “क्यों?” का कारण (`परमाणु सिद्धांत`); आधारभूत सिद्धांत: ऊर्जा संरक्षण!' },
    },
    {
      pair: { en: 'Deliberate Model Simplification (`Ex 1.1`) vs Experimental Mistake (`p.2`)', hi: 'मॉडल में जानबूझकर उपेक्षा (`उदा. 1.1`) बनाम प्रायोगिक त्रुटि (`पृ. 2`)' },
      left: { en: 'Model Simplification: Skipping bat brand, ball colour or mild air drag first so core physics stays crystal-clear', hi: 'सरलीकरण: मुख्य प्रभाव समझने हेतु ब्रांड, रंग या नगण्य वायु प्रतिरोध छोड़ना (`त्रुटि नहीं, सटीकता बाद में जुड़ती!`)' },
      right: { en: 'Actual Mistake: Mixing unit systems (`lb/L instead of kg/L` in `22,300 kg` jet fuel case -> `15,000 L` short!)', hi: 'वास्तविक त्रुटि: मानक मात्रकों में गड़बड़ी (`kg/L` के बजाय `lb/L` प्रयोग से `15,000 L` ईंधन कम रह जाना)!' },
    },
    {
      pair: { en: 'Temperature Difference (`ΔK = Δ°C`, ALP) vs Absolute Conversion (`K = °C + 273`)', hi: 'ताप अंतर (`ΔK = Δ°C`) बनाम निरपेक्ष ताप रूपांतरण (`K = °C + 273`)' },
      left: { en: 'Fixed Temperature Reading: 37°C = 37 + 273 = 310 K | 25°C = 298 K | 0°C = 273 K', hi: 'सीधा पाठ्यांक परिवर्तन: 37°C = 310 K | 25°C = 298 K (`Tech Shift 12`) | 0°C = 273 K' },
      right: { en: 'Temperature CHANGE (15°C → 35°C): Step size is 1:1 ⇒ Change = 20°C = 20 K (Do NOT add 273 to ΔT!)', hi: 'ताप परिवर्तन (15°C से 35°C): अंतर में 273 नहीं जोड़ते — सीधा 35 − 15 = 20 K (`ALP 2025 Shift 1`!)' },
    },
    {
      pair: { en: 'Mass (`kg`) vs Weight (`Newton`) & Work/Energy (`Joule`) vs Pressure (`Pascal`)', hi: 'द्रव्यमान (`kg`) vs भार (`N`) तथा कार्य/ऊर्जा (`Joule`) vs दाब (`Pascal`)' },
      left: { en: 'Mass stays constant (kg); Weight = m·g is gravitational force measured in NEWTON (N = kg·m·s⁻²)', hi: 'द्रव्यमान सदैव किग्रा (kg) में; भार एक बल है जिसका मात्रक न्यूटन (N) है (`Tech 2024 Shift 12`)' },
      right: { en: 'Work, KE & PE share JOULE (J = N·m = W·s); Pressure is Force/Area = PASCAL (Pa = N·m⁻² — Group D 44!)', hi: 'कार्य व सभी ऊर्जा = जूल (J = N·m = W·s); दाब = पास्कल (Pa = N·m⁻² — `Group D Shift 44`)!' },
    },
  ],
  pioneers: [
    {
      badge: { en: 'Indian Astrophysicist & Ionisation Law (`p.2` Stamp)', hi: 'भारतीय भौतिकविद (`डाक टिकट सम्मान, पृ. 2`)' },
      name: { en: 'Dr. Meghnad Saha (`1893–1956`)', hi: 'डॉ. मेघनाद साहा (`1893–1956`)' },
      country: { en: 'India (`NCERT Class 9 Ch 1, p.2`)', hi: 'भारत (`NCERT कक्षा 9 अध्याय 1, पृ. 2`)' },
      fact: {
        en: 'Ignored tracking individual atomic collisions inside stars; modelled stars as **hot gases** governed by **temperature, pressure & atomic ionisation** — linking **starlight colour directly to temperature**!',
        hi: 'तारे के भीतर प्रत्येक परमाणु/अभिक्रिया का मॉडल बनाने के बजाय तारे को **उष्ण गैस** मानकर केवल ताप, दाब व आयनन द्वारा सिद्ध किया कि **तारों का रंग उनके ताप से जुड़ा होता है**।',
      },
    },
    {
      badge: { en: 'Speed of Light Experiment (`NTPC 2025` + Ch 1 Box)', hi: 'प्रकाश वेग मापन (`NTPC PYQ` व पृ. 3 बॉक्स)' },
      name: { en: 'Léon Foucault (`1862`) & SI Fixed `c` Standard', hi: 'लियोन फूको (`1862` घूर्णन दर्पण) व SI मानक `c`' },
      country: { en: 'France / BIPM (`NCERT p.3`)', hi: 'फ्रांस / अंतर्राष्ट्रीय ब्यूरो (`NCERT पृ. 3`)' },
      fact: {
        en: 'Foucault (`1862`) obtained the first accurate light speed using a **rotating mirror**; today vacuum `c` (`from Latin celeritas`) is fixed internationally as **`299,792,458 m/s`**.',
        hi: '`1862` में फूको ने घूर्णन दर्पण से प्रकाश वेग का पहला सटीक मान प्राप्त किया; आज SI ने `c` (`celeritas`) को **`299,792,458 m/s`** निश्चित किया है।',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-meghnad-saha',
      figRef: { en: 'NCERT p.2 Scientist Box', hi: 'NCERT पृ. 2 — डॉ. मेघनाद साहा' },
      title: { en: 'Dr. Meghnad Saha — Simplified Hot-Gas Star Ionisation Model (`Hot Gas -> Star Temp`)', hi: 'डॉ. मेघनाद साहा — तारे को उष्ण आयनित गैस मानकर रंग-ताप संबंध खोजकर्ता' },
      imageUrl: '/ncert-notes/class9-phy-ch1/real/meghnad_saha.webp',
      hotspots: [
        { en: 'Modelled stellar atmosphere focusing purely on Temperature, Pressure & Ionisation instead of every atom.', hi: 'केवल ताप, दाब व परमाणुओं के आयनन पर ध्यान दे सरल मॉडल की शक्ति दिखाई!' },
      ],
    },
    {
      id: 'vis-kilogram-weights',
      figRef: { en: 'NCERT Fig 1.1 (`Kilogram Trade Uniformity`)', hi: 'NCERT चित्र 1.1 — सर्वमान्य किलोग्राम मानक' },
      title: { en: 'Standard Cast-Iron Kilogram Masses Ensuring Fair Global Measurements (`SI`)', hi: 'संपूर्ण विश्व में निष्पक्ष व्यापार व मापन सुनिश्चित करते मानक किलोग्राम बाट' },
      imageUrl: '/ncert-notes/class9-phy-ch1/real/kilogram.webp',
      hotspots: [
        { en: '1 kg stays strictly identical worldwide unlike local units; avoids conversions mishaps (`22,300 kg flight case`).', hi: '`1 kg` सर्वत्र समान रहता है जिससे `22,300 kg` विमान ईंधन जैसी रूपांतरण त्रुटियाँ टलती हैं।' },
      ],
    },
    {
      id: 'vis-analytical-balance',
      figRef: { en: 'NCERT Sec 1.2 (`Repeated Precision Observation`)', hi: 'NCERT पृ. 4 — परिष्कृत प्रयोगशाला मापन' },
      title: { en: 'Precision Laboratory Analytical Balance (`Sub-Milligram SI Traceable Weighing`)', hi: 'प्रयोगशाला में अत्यंत सटीक (`0.0001 g` तक) द्रव्यमान मापने की विश्लेषणात्मक तुला' },
      imageUrl: '/ncert-notes/class9-phy-ch1/real/analytical_balance.webp',
      hotspots: [
        { en: 'Repeating observations with finer SI measurement lets scientists refine or reject scientific models fairly.', hi: 'प्रेक्षणों की पुनरावृत्ति और सूक्ष्मतर मापन वैज्ञानिक मॉडलों का परीक्षण व परिष्करण करते हैं।' },
      ],
    },
    {
      id: 'vis-prism-light-speed',
      figRef: { en: 'NCERT p.3 Box (`c = 299,792,458 m/s`)', hi: 'NCERT पृ. 3 — प्रकाश वेग `c` (`celeritas`)' },
      title: { en: 'Optical Light Beam Showing Fixed Vacuum Speed `c` & Medium Slowing (`n = c/v`)', hi: 'प्रकाश किरण व माध्यम में वेग परिवर्तन (`निर्वात c = 299,792,458 m/s`, वायु > जल > काँच)' },
      imageUrl: '/ncert-notes/class9-phy-ch1/real/prism_optics.webp',
      hotspots: [
        { en: 'Symbol c (`Latin celeritas`) denotes universal constant; Group D Shift 20 tests v(water) > v(glass).', hi: 'लैटिन `celeritas` से आया प्रतीक `c`; काँच से जल में प्रकाश चाल अधिक (`अभ्यास/PYQ`)!' },
      ],
    },
    {
      id: 'vis-solar-eclipse',
      figRef: { en: 'NCERT Fig 1.2 (`Solar Eclipse Inquiry Box`)', hi: 'NCERT चित्र 1.2 — खग्रास सूर्य ग्रहण जाँच' },
      title: { en: 'Total Solar Eclipse (`Pure Shadow Alignment — Debunking Food Spoilage Myths`)', hi: 'खग्रास सूर्य ग्रहण: मात्र छायाओं का खेल (`भोजन खराब न होने का वैज्ञानिक प्रमाण`)' },
      imageUrl: '/ncert-notes/class9-phy-ch1/real/solar_eclipse.webp',
      hotspots: [
        { en: 'No physical, chemical or biological change damages food kept under eclipse shadow (`p.5`).', hi: 'ग्रहण छाया में रखे भोजन पर किसी भौतिक, रासायनिक या जैविक क्षति का कोई प्रमाण नहीं (`पृ. 5`)।' },
      ],
    },
    {
      id: 'vis-surgical-mask',
      figRef: { en: 'NCERT Fig 1.4 (`Interdisciplinary Mask Science`)', hi: 'NCERT चित्र 1.4 — 4 विज्ञान शाखाओं का मास्क उदाहरण' },
      title: { en: 'Surgical Face Mask Uniting Physics, Chemistry, Biology & Mathematics (`p.7`)', hi: 'भौतिकी, रसायन, जीवविज्ञान व गणित चारों के समन्वय से कार्य करता शल्य मास्क' },
      imageUrl: '/ncert-notes/class9-phy-ch1/real/surgical_mask.webp',
      hotspots: [
        { en: 'Physics: electrostatic trapping | Chem: polymers | Bio: virus size | Math: airflow efficiency modelling.', hi: 'भौतिकी (स्थैतिक आकर्षण) + रसायन (बहुलक) + जीवविज्ञान (विषाणु आकार) + गणित (वायुप्रवाह दक्षता)!' },
      ],
    },
  ],
  activities: [
    {
      num: '1.1',
      title: { en: 'Activity 1.1: Build a Simplified Model for Bicycle Travel Time From School to Home (`p.2`)', hi: 'क्रियाकलाप 1.1: विद्यालय से घर तक साइकिल पहुँचने के समय का सरल मॉडल तैयार करना (`पृ. 2`)' },
      materials: { en: 'Notebook, map distance route estimate, stopwatch, average cycling speed & traffic signal stops count', hi: 'नोटबुक, मार्ग दूरी अनुमान, स्टॉपवॉच, औसत साइकिल चाल एवं प्रमुख ट्रैफिक मोड़' },
      steps: { en: 'List factors that could relate to ride time (`distance, speed, uphill slope, red lights, cycle colour, road trees`). Decide strictly which few variables determine arrival time and omit irrelevant noise; explain WHY skipping tiny details helps.', hi: 'साइकिल समय से जुड़े संभावित कारक लिखें (`दूरी, साइकिल चाल, चढ़ाई, ट्रैफिक सिग्नल, घंटी का रंग, किनारे के पेड़`)। तय करें कि किन्हें मॉडल में रखें व किन्हें जानबूझकर अनदेखा करें और क्यों लाभदायक है।' },
      examTakeaway: { en: 'A good initial model captures **`distance` & `average speed`** (`t = d / v`) while ignoring cycle colour, bell sound, or random leaf fall — proving intentional omission creates actionable predictions first before adding hills/wind later!', hi: 'प्रारंभिक सफल मॉडल केवल **दूरी व औसत चाल (`t = d/v`)** पर ध्यान देता है व रंग, घंटी आदि अनदेखा करता है — सरल मॉडल से ही सटीक वैज्ञानिक आधार बनता है!' },
      predictQuestion: {
        prompt: { en: 'In Activity 1.1, when modelling bicycle ride time from school to home, why is skipping details like cycle colour & shoe brand useful?', hi: 'क्रियाकलाप 1.1 में साइकिल से घर पहुँचने का मॉडल बनाते समय कुछ विवरण (`रंग, ब्रांड, पेड़`) छोड़ देना क्यों उपयोगी होता है?' },
        options: { en: ['It avoids error calculations permanently', 'It deliberately simplifies the real system so main cause-effect relationships stay solvable first', 'Cycle colour changes friction dynamically', 'Equations only work on triangles'], hi: ['गलतियाँ छुपाने के लिए', 'वास्तविक प्रणाली को पर्याप्त सरल बनाकर मुख्य कारण-परिणाम संबंध आसानी से हल करने हेतु', 'रंग घर्षण बदल देता है', 'समीकरण केवल त्रिभुजों पर लगते हैं'] },
        correctIndex: 1,
        reason: { en: 'Verbatim p.2: Simplifying assumptions are deliberate, NOT mistakes — helping extract core answers before refining accuracy.', hi: 'सटीक `NCERT पृ. 2`: ये चयन त्रुटियाँ नहीं बल्कि विषय को सरल बनाकर मुख्य उत्तर पाने के लिए जानबूझकर किए जाते हैं।' },
      },
    },
  ],
  tables: [
    {
      id: 'tbl-9-1',
      title: {
        en: 'All 7 Fundamental SI Base Quantities, Symbols & International Standards (`Foundation for All 9th–10th`)',
        hi: 'सभी 7 अंतर्राष्ट्रीय मूल SI भौतिक राशियाँ, मात्रक एवं मानक प्रतीक (`कक्षा 9–10 आधार`)',
      },
      headers: {
        en: ['Base Physical Quantity', 'SI Base Unit Name', 'Exact SI Symbol', 'NCERT / RRB CBT Exam Note'],
        hi: ['मूल भौतिक राशि', 'SI मूल मात्रक का नाम', 'सटीक SI प्रतीक', 'NCERT / रेलवे परीक्षा तथ्य'],
      },
      rows: [
        [{ en: '**Length (`लंबाई`)**', hi: '**लंबाई (`Length`)**' }, { en: 'Metre (`मीटर`)', hi: 'मीटर (`Metre`)' }, { en: '**`m`**', hi: '**`m`**' }, { en: '`0.004 km = 4 m` (`ALP CBT-2 Shift 1 PYQ`)', hi: '`0.004 km = 4 m` (`ALP CBT-2 Shift 1`)' }],
        [{ en: '**Mass (`द्रव्यमान`)**', hi: '**द्रव्यमान (`Mass`)**' }, { en: 'Kilogram (`किलोग्राम`)', hi: 'किलोग्राम (`Kilogram`)' }, { en: '**`kg`**', hi: '**`kg`**' }, { en: 'Weight uses **Newton (`N`)**, NOT kg! (`22,300 kg` fuel box)', hi: 'भार का मात्रक **न्यूटन (`N`)**, `kg` नहीं (`22,300 kg` केस)' }],
        [{ en: '**Time (`समय`)**', hi: '**समय (`Time`)**' }, { en: 'Second (`सेकंड`)', hi: 'सेकंड (`Second`)' }, { en: '**`s`**', hi: '**`s`**' }, { en: 'Also `c = 299,792,458 m/s` sets light metre (`p.3`)', hi: '`c = 299,792,458 m/s` (`पृ. 3` प्रकाश वेग स्थिरांक)' }],
        [{ en: '**Electric Current (`विद्युत धारा`)**', hi: '**विद्युत धारा (`Current`, प्रतीक `I`)**' }, { en: 'Ampere (`एम्पियर`)', hi: 'एम्पियर (`Ampere`)' }, { en: '**`A`**', hi: '**`A`**' }, { en: 'Symbol **`I`** (`p.3`); unit **`A`** (`15 A / 5 A` home lines)', hi: 'प्रतीक **`I`** (`पृ. 3`); मात्रक **`A`** (`15 A / 5 A`)' }],
        [{ en: '**Thermodynamic Temperature (`ताप`)**', hi: '**ऊष्मागतिक ताप (`Temperature`)**' }, { en: 'Kelvin (`केल्विन`)', hi: 'केल्विन (`Kelvin`)' }, { en: '**`K`**', hi: '**`K`**' }, { en: '`37°C = 310 K`, `298 K = 25°C`, `ΔT(K) = ΔT(°C)`!', hi: '`37°C = 310 K`, `298 K = 25°C`, `ΔT(K) = ΔT(°C)`!' }],
        [{ en: '**Amount of Substance (`पदार्थ मात्रा`)**', hi: '**पदार्थ की मात्रा (`Amount`)**' }, { en: 'Mole (`मोल`)', hi: 'मोल (`Mole`)' }, { en: '**`mol`**', hi: '**`mol`**' }, { en: '1 mole = `6.022 × 10²³` particles (`Avogadro number`)', hi: '1 मोल = `6.022 × 10²³` कण (`एवोगैड्रो संख्या`)' }],
        [{ en: '**Luminous Intensity (`ज्योति तीव्रता`)**', hi: '**ज्योति तीव्रता (`Luminous Intensity`)**' }, { en: 'Candela (`कैंडेला`)', hi: 'कैंडेला (`Candela`)' }, { en: '**`cd`**', hi: '**`cd`**' }, { en: 'Classic 7th SI base unit trap in Railway GS!', hi: 'रेलवे GS में प्रमुख 7वाँ मूल SI मात्रक प्रश्न!' }],
      ],
    },
    {
      id: 'tbl-9-2',
      title: {
        en: 'High-Frequency Derived SI Units, Base Equivalents & Unitless Traps (`RRB 2024–26 Exact Hits`)',
        hi: 'रेलवे में सर्वाधिक पूछे जाने वाले व्युत्पन्न SI मात्रक व मात्रकहीन अपवाद (`RRB 2024–26`)',
      },
      headers: {
        en: ['Physical Quantity', 'Derived SI Unit', 'Fundamental SI Form', 'RRB CBT PYQ Shift Reference'],
        hi: ['भौतिक राशि', 'व्युत्पन्न SI मात्रक', 'मूल SI मात्रकों में रूप', 'RRB CBT परीक्षा संदर्भ'],
      },
      rows: [
        [{ en: '**Average Velocity (`औसत वेग`)**', hi: '**औसत वेग (`Displacement/Time`)**' }, { en: '`m/s` (`m s⁻¹`)', hi: '`m/s` (`मीटर प्रति सेकंड`)' }, { en: '`m·s⁻¹`', hi: '`m·s⁻¹`' }, { en: '**ALP CBT-2 Shift 1**: Total Displacement / Total Time', hi: '**ALP CBT-2 Shift 1**: कुल विस्थापन / कुल समय' }],
        [{ en: '**Acceleration (`त्वरण a`)**', hi: '**त्वरण (`Acceleration`)**' }, { en: '`m s⁻²`', hi: '`m s⁻²`' }, { en: '`m·s⁻²`', hi: '`m·s⁻²`' }, { en: '**Tech Gr-III Shift 16**: `Δv / Δt`', hi: '**Tech Gr-III Shift 16**: वेग परिवर्तन / समय' }],
        [{ en: '**Force (`बल F = ma`) & Weight (`W`)**', hi: '**बल व भार (`Force & Weight`)**' }, { en: '**Newton (`N`)**', hi: '**न्यूटन (`N`)**' }, { en: '**`kg·m·s⁻²`**', hi: '**`kg·m·s⁻²`**' }, { en: '**Group D Shifts 38, 40 & Tech Shift 12** (`k = 1`)', hi: '**Group D Shifts 38, 40 व Tech 12** (`k = 1`)' }],
        [{ en: '**Momentum (`संवेग p = mv`)**', hi: '**संवेग (`Momentum`)**' }, { en: '`kg m s⁻¹` (`N·s`)', hi: '`kg m s⁻¹`' }, { en: '`kg·m·s⁻¹`', hi: '`kg·m·s⁻¹`' }, { en: '**Tech Gr-III Shift 14**: Mass × Velocity', hi: '**Tech Gr-III Shift 14**: द्रव्यमान × वेग' }],
        [{ en: '**Work, KE & PE (`कार्य व ऊर्जा`)**', hi: '**कार्य, गतिज व स्थितिज ऊर्जा**' }, { en: '**Joule (`J`)** (`1 kWh = 3.6 MJ`)', hi: '**जूल (`J`)** (`1 kWh = 3.6 MJ`)' }, { en: '**`N·m = W·s = kg·m²·s⁻²`**', hi: '**`N·m = W·s = kg·m²·s⁻²`**' }, { en: '**Group D Shifts 13, 18, 26, 44** (**Pascal ≠ Work!**)', hi: '**Group D 13, 18, 26, 44** (**पास्कल ≠ कार्य!**)' }],
        [{ en: '**Pressure (`दाब P = F/A`)**', hi: '**दाब (`Pressure`)**' }, { en: '**Pascal (`Pa`)**', hi: '**पास्कल (`Pa`)**' }, { en: '**`N·m⁻² = kg·m⁻¹·s⁻²`**', hi: '**`N·m⁻² = kg·m⁻¹·s⁻²`**' }, { en: '**Tech Gr-III Shifts 6 & 21**', hi: '**Tech Gr-III Shifts 6 व 21** (`1 N/m²`)' }],
        [{ en: '**Universal Gravitation `G` (`Nm²/kg²`)**', hi: '**सार्वत्रिक गुरुत्व `G`**' }, { en: '`N·m²·kg⁻²`', hi: '`N·m²·kg⁻²`' }, { en: '`m³·kg⁻¹·s⁻²`', hi: '`m³·kg⁻¹·s⁻²`' }, { en: '**Tech Gr-III Shifts 13 & 23**', hi: '**Tech Gr-III Shifts 13 व 23**' }],
        [{ en: '**Refractive Index (`अपवर्तनांक n`)**', hi: '**अपवर्तनांक (`n = c/v`)**' }, { en: '**Unitless (`मात्रकहीन`)**', hi: '**इकाई रहित (`Unitless`)**' }, { en: 'Dimensionless ratio', hi: 'समान वेगों का अनुपात' }, { en: '**Tech Gr-III Shift 3**; Magnetic Flux = **Weber** / `B` = **Tesla**', hi: '**Tech Shift 3**; फ्लक्स = **वेबर**, `B` = **टेस्ला**' }],
      ],
    },
    {
      id: 'tbl-9-3',
      title: {
        en: 'Core Terminology of Secondary Science (`Law, Theory, Principle, Hypothesis, Model, Estimation`) — NCERT p.1–6',
        hi: 'माध्यमिक विज्ञान के प्रमुख शब्द (`मॉडल, नियम, सिद्धांत, आधारभूत सिद्धांत व अनुमान`) — NCERT पृ. 1–6',
      },
      headers: {
        en: ['Term in NCERT Ch 1', 'Exact Scientific Meaning', 'Textbook Example Cited', 'Opposite Trap to Avoid'],
        hi: ['NCERT अध्याय 1 शब्द', 'सटीक वैज्ञानिक अर्थ', 'पाठ्यपुस्तक उदाहरण (`पृ. 2–6`)', 'भ्रम निवारण / अपवाद'],
      },
      rows: [
        [{ en: '**Scientific Model (`मॉडल`)**', hi: '**वैज्ञानिक मॉडल (`Model`)**' }, { en: 'Simplified representation focusing on essential aspects of a system', hi: 'किसी प्रश्न हेतु मुख्य बिंदुओं तक सीमित सरल प्रतिरूप' }, { en: 'Dot car, layered Earth, **Ex 1.1 Sixer**, **Meghnad Saha hot gas**', hi: 'बिंदु कार, **क्रिकेट छक्का (`1.1`)**, **साहा उष्ण गैस**' }, { en: 'Skipping tiny factors is intentional, **NOT an error**!', hi: 'छोटे कारक छोड़ना जानबूझकर होता है — **त्रुटि नहीं!**' }],
        [{ en: '**Scientific Law (`नियम`)**', hi: '**वैज्ञानिक नियम (`Law`)**' }, { en: 'Observed regular pattern in nature (`words / math`)', hi: 'प्रकृति के नियमित पैटर्न का वर्णन (`शब्द/समीकरण`)' }, { en: '**Newton’s Laws of Motion** (`bus brakes -> forward jerk`)', hi: '**न्यूटन गति नियम** (`बस अचानक रुकने पर झटका`)' }, { en: 'Tells **WHAT** happens systematically', hi: 'क्रमबद्ध रूप से **क्या होता है** बताता है' }],
        [{ en: '**Scientific Theory (`सिद्धांत`)**', hi: '**वैज्ञानिक सिद्धांत (`Theory`)**' }, { en: 'Tested, evidence-based explanation of **WHY** patterns happen', hi: 'परीक्षण व साक्ष्य आधारित **“क्यों?”** का स्पष्टीकरण' }, { en: '**Atomic Theory** (`how molecules form`)', hi: '**परमाणु सिद्धांत** (`अणु कैसे बनते हैं`)' }, { en: 'NEVER means a guess; **revisable** upon new data (`never dogma!`)', hi: 'कभी अनुमान नहीं; **नए प्रमाणों से सुधार योग्य**!' }],
        [{ en: '**Fundamental Principle (`आधारभूत सिद्धांत`)**', hi: '**आधारभूत सिद्धांत (`Principle`)**' }, { en: 'Broad rule governing multiple contexts & transformations', hi: 'विविध परिस्थितियों पर लागू व्यापक मूल विचार' }, { en: '**Conservation of Energy** (`climbing stairs`)', hi: '**ऊर्जा संरक्षण का सिद्धांत** (`सीढ़ियाँ चढ़ना`)' }, { en: 'Crosses Physics, Chemistry & Biology boundaries', hi: 'भौतिकी, रसायन व जीवविज्ञान तीनों पर लागू' }],
        [{ en: '**Approx Estimation (`सन्निकट आकलन`)**', hi: '**अनुमान आधारित तर्क (`पृ. 5–6`)**' }, { en: 'Reasonable order-of-magnitude check before exact numbers', hi: 'सटीक गणना से पहले उत्तर की व्यावहारिक जाँच' }, { en: '**Rice `2000–2500 kcal`** | **Ex 1.3 Air `~10,000 L` / `8,640 L`**', hi: '**चावल `2500 kcal`** | **उदा. 1.3 श्वसन `10,000 L` (`8,640 L`)**' }, { en: 'Catches wild mistakes (`like 15,000 L fuel errors`!) immediately', hi: '`15,000 L` जैसी बड़ी भूलों को तुरंत पकड़ लेता है' }],
      ],
    },
    {
      id: 'tbl-9-4',
      title: {
        en: 'No Borders in Science: Interdisciplinary Fusion Grid (`Mask Fig 1.4, Climate & Think Q3`)',
        hi: 'अंतःविषय विज्ञान: मास्क (`चित्र 1.4`), प्रेशर कुकर व वास्तविक समस्याओं में सभी शाखाओं का संगम',
      },
      headers: {
        en: ['Science Discipline', 'Role in Surgical Mask (`Fig 1.4`)', 'Role in Everyday Examples (`Think Q3`)', 'Cross-Domain Reality (`p.7`)'],
        hi: ['विज्ञान की शाखा', 'सर्जिकल मास्क में भूमिका (`चित्र 1.4`)', 'दैनिक उदाहरणों में योगदान (`अभ्यास 3`)', 'प्रकृति की एकता (`पृ. 7`)'],
      },
      rows: [
        [{ en: '**Physics (`भौतिकी`)**', hi: '**भौतिकी (`Physics`)**' }, { en: 'Particle motion & **electrostatic attraction** trapping dust/aerosols', hi: 'कणीय गति एवं **वैद्युत स्थैतिक आकर्षण** से कण रोकना' }, { en: 'Pressure valve (`cooker`), EM signals (`phone`), braking (`traffic`)', hi: 'कुकर दाब/ऊष्मा, मोबाइल EM तरंग, ट्रैफिक ब्रेक व गति' }, { en: 'Sets energy, pressure & wave laws', hi: 'ऊर्जा, दाब व तरंग नियम निर्धारित करे' }],
        [{ en: '**Chemistry (`रसायन विज्ञान`)**', hi: '**रसायन (`Chemistry`)**' }, { en: 'Properties of non-woven **polymer fibres** (`polypropylene`)', hi: '**बहुलक (`Polymer`) रेशों** के रासायनिक गुणधर्म' }, { en: 'Aluminium/steel corrosion, Lithium-ion battery, fuel exhaust combustion', hi: 'धातु मिश्रधातु, मोबाइल लिथियम बैटरी, वाहन ईंधन दहन' }, { en: 'Designs new medicines & materials', hi: 'नवीन औषधियों व पदार्थों का निर्माण' }],
        [{ en: '**Biology (`जीव विज्ञान`)**', hi: '**जीवविज्ञान (`Biology`)**' }, { en: '**Virus size** & droplet respiratory behaviour (`Covid-19`)', hi: '**विषाणु की आमाप** एवं श्वसन संचरण प्रकृति' }, { en: 'Food nutrients (`cooker`), eye safety (`screen`), lung CO (`pollution`)', hi: 'पोषक तत्व पाचन, नेत्र/कर्ण स्वास्थ्य व प्रदूषण प्रभाव' }, { en: 'Protects health across biosphere', hi: 'जैवमंडल व मानव स्वास्थ्य की रक्षा' }],
        [{ en: '**Mathematics (`गणित`)**', hi: '**गणित (`Mathematics`)**' }, { en: 'Modelling **airflow pressure drop & filtration efficiency**', hi: '**वायुप्रवाह और निस्यंदन (`Filtration`) दक्षता** का प्रतिरूपण' }, { en: 'Thermal timing, wireless Fourier algorithms, green-light signal cycle', hi: 'पकाने का समय अनुपात, संचार गणना, सिग्नल समय चक्र' }, { en: 'Language uniting equations & predictions!', hi: 'समीकरणों व पूर्वानुमानों को जोड़ने की सशक्त भाषा!' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'Ex 1.1 (p.2)',
      q: { en: 'Example 1.1 — A Cricket Shot: If you want to build a simple model predicting whether a struck ball crosses the boundary for a six without bouncing, which details should you include and which should you leave out?', hi: 'उदाहरण 1.1 — क्रिकेट का एक शॉट: कल्पना कीजिए कि एक क्रिकेट की गेंद को छक्का लगाने के लिए बल्ले से मारा जाता है। यदि आप इसका एक सरल मॉडल तैयार करना चाहते हैं तो आप इसमें कौन-से विवरण सम्मिलित करेंगे और किन विवरणों को अनावश्यक मानकर छोड़ देंगे?' },
      a: { en: '**Include (`essential`)**: **Mass of the ball**, its **launch speed**, and **direction/angle struck** (`which decide projectile range`). **Omit (`minimal effect`)**: **Brand of bat, colour of ball, grass height on pitch**, and tiny first-pass effects like **air resistance, spin, or seam stitching** (`which can be added later for finer precision`).', hi: '**सम्मिलित करें (`महत्वपूर्ण`)**: गेंद का **द्रव्यमान**, उसकी **प्रारंभिक गति** तथा **किस दिशा/कोण में मारा गया है**। **छोड़ दें (`नगण्य प्रभाव`)**: **बल्ले का ब्रांड, गेंद का रंग, मैदान पर घास की मात्रा** तथा प्रारंभिक सरल मॉडल में **वायु प्रतिरोध, गेंद का घूर्णन और सीम की सिलाई** (अधिक सटीकता हेतु इन्हें बाद में जोड़ा जा सकता है)।' },
    },
    {
      num: 'Ex 1.2 (p.4)',
      q: { en: 'Example 1.2 — How should we frame scientifically testable predictions? Varsha tells Meghna: “It will rain this afternoon because the clouds look black.” What better questions could Meghna ask to make this prediction scientifically testable?', hi: 'उदाहरण 1.2 — हम पूर्वानुमान किस प्रकार लगाएँ? वर्षा ने मेघना को बताया, “आज दोपहर में वर्षा होगी क्योंकि बादल काले दिखाई दे रहे हैं।” इस पूर्वानुमान को वैज्ञानिक रूप से परीक्षण योग्य बनाने हेतु मेघना क्या प्रश्न पूछ सकती है?' },
      a: { en: 'Good scientific questions rest on **measurable evidence & past patterns** (`avoid mere Yes/No`). Meghna can ask: *What was the sky condition during past rainfall? What is today’s **humidity % (`was it 80% earlier?`)**? What are current **wind speed & direction**? Has **temperature dropped** as it did before past rain?*', hi: 'उत्तम वैज्ञानिक प्रश्न केवल *हाँ/ना* नहीं बल्कि **मापन योग्य प्रमाण व पिछले पैटर्न** पर आधारित होते हैं। मेघना पूछ सकती है: *जब पिछली बार वर्षा हुई तो आकाश कैसा था? आज **आर्द्रता का स्तर (`%`, क्या पहले 80% थी?)** कितना है? **वायु की गति व दिशा** क्या है? क्या **तापमान में पहले जैसी गिरावट** आई है?*' },
    },
    {
      num: 'Ex 1.3 (p.6)',
      q: { en: 'Example 1.3 — Estimate approximately how many litres of air you breathe in a single day. (Compare via resting rate & balloon inflation!)', hi: 'उदाहरण 1.3 — अनुमान लगाइए कि एक दिन में आप कितने लीटर वायु श्वास में लेते हैं। (विश्राम श्वसन दर एवं गुब्बारा फुलाने से तुलना सहित)' },
      a: { en: '**Method 1**: At rest, we take **`12–15 breaths/min`** × `1,440 min/day` ≈ **`20,000 breaths/day`**. Filling a **`2 L` balloon** takes **`4–5 breaths`**, so `1 breath` ≈ **`0.5 L`**. Total daily air ≈ `20,000 × 0.5 L` = **`10,000 litres/day`**! **Cross-check (`Method 2`)**: Inflating `1` balloon (`2 L`) in `20 s` = `3 balloons/min` ⇒ `3 × 2 L × 1,440 min` = **`8,640 litres/day`** — remarkably consistent!', hi: '**विधि 1**: विश्राम में **`12–15 श्वास/मिनट`** × `1,440 मिनट/दिन` (`60×24`) ≈ **`20,000 श्वास/दिन`**। `2 L` गुब्बारा `4–5 श्वास` में भरता है ⇒ `1 श्वास ≈ 0.5 L` ⇒ दैनिक आयतन ≈ `20,000 × 0.5 L` = **`10,000 लीटर/दिन`**! **क्रॉस-जाँच**: यदि 20 सेकंड में `1` गुब्बारा भरें (`3 गुब्बारे/मिनट`), तो `3 × 2 L × 1440` = **`8,640 लीटर/दिन`** — जो अनुमान के अत्यंत समीप है!' },
    },
    {
      num: 'p.3 Box Q1',
      q: { en: 'Think & Answer (`p.3`): Recall a recent prediction made by you or your family (`such as a cricket match result`). Was it based on evidence and logical reasoning, or a wild guess? How could scientific thinking improve it?', hi: 'सोचिए और बताइए (`पृ. 3`): उस पूर्वानुमान के विषय में विचार कीजिए जो आपने या परिवार के किसी सदस्य ने किया हो (`जैसे क्रिकेट मैच परिणाम`)। क्या वह प्रमाण व तर्क पर आधारित था या मात्र अनुमान पर? वैज्ञानिक सोच उसमें कैसे सुधार ला सकती है?' },
      a: { en: 'An emotional gut-feeling guess ignores facts. Applying **scientific thinking** analyses past performance stats, pitch report, player current form (`fitness & recent strike rate`), weather/dew conditions & bowling match-ups — converting random guessing into **evidence-based probability**.', hi: 'सामान्य अनुमान भावनाओं पर आधारित होता है। **वैज्ञानिक सोच** जोड़ने पर पिछले रिकॉर्ड, पिच की नमी, खिलाड़ियों के वर्तमान आंकड़े व मौसम जैसे **मापन योग्य प्रमाण** देख कर अधिक तर्कसंगत और सटीक पूर्वानुमान लगाया जा सकता है।' },
    },
  ],
  exercises: [
    {
      num: '1',
      q: { en: 'Textbook Q2 (`p.6`): Describe one daily-life situation where an approximate (`estimated`) answer is completely sufficient, and one situation where a highly precise exact value is strictly required.', hi: 'सोचिए और बताइए 2 (`पृ. 6`): एक ऐसी स्थिति का वर्णन कीजिए जहाँ केवल अनुमानित उत्तर पर्याप्त हो, तथा एक ऐसी स्थिति जहाँ अत्यंत सटीक मान की आवश्यकता हो।' },
      a: { en: '**Approximate suffices**: Buying vegetables/groceries monthly rice (`~25 kg`), gauging commute arrival time (`~20 min`), or estimating daily `~10,000 L` air inhaled (`Ex 1.3`). **Exact value mandatory**: **Aircraft jet fuel calculation (`22,300 kg kg/L`, p.3)**, **medical dosage/insulin shots**, orbital rocket telemetry (`c = 299,792,458 m/s`), and gold/chemical titration weighing.', hi: '**अनुमान पर्याप्त**: परिवार के लिए मासिक चावल खरीदना, स्कूल आने का अनुमानित समय (`~20 min`) या दैनिक `~10,000 L` श्वसन। **सटीक मान अनिवार्य**: **विमान ईंधन गणना (`22,300 kg`, पृ. 3)**, **चिकित्सा दवा की खुराक**, अंतरिक्ष यान प्रक्षेपण (`प्रकाश वेग c`) एवं रासायनिक प्रयोगशाला मापन!' },
    },
    {
      num: '2',
      q: { en: 'Textbook Q3 (`p.7`): Pick a daily-use object or situation (`Pressure Cooker, Smartphone, or Traffic Jam`) and show how at least two (`ideally Physics, Chemistry, Biology, Earth Science & Maths`) connect together.', hi: 'सोचिए और बताइए 3 (`पृ. 7`): किसी दैनिक वस्तु (`प्रेशर कुकर / मोबाइल फोन`) या समस्या (`ट्रैफिक जाम`) को चुनिए और दर्शाइए कि भौतिकी, रसायन, जीवविज्ञान व गणित की कम-से-कम दो शाखाएँ परस्पर कैसे जुड़ी हैं।' },
      a: { en: '**Example — Pressure Cooker (`प्रेशर कुकर`)**: **(i) Physics**: Sealed steam raises internal pressure (`P ↑`), elevating water’s boiling point above `100°C` so heat cooks faster + safety weight valve. **(ii) Chemistry**: Food starch gelatinisation & protein denaturation reactions accelerate at higher temperature; aluminium/stainless steel resists acid corrosion. **(iii) Biology**: Kills harmful microbes safely while preserving vitamins. **(iv) Maths**: Ratio of steam valve area/weight (`P = F/A`) & cooking time reduction.', hi: '**उदाहरण — प्रेशर कुकर**: **(i) भौतिकी**: बंद वाष्प दाब बढ़ाकर जल का क्वथनांक `100°C` से ऊपर ले जाता है (तेज उबलन + सीटी भार संतुलन)। **(ii) रसायन**: उच्च ताप पर स्टार्च व प्रोटीन पकाने की रासायनिक अभिक्रियाएँ तीव्र व धातु संक्षारण-रोधी होती हैं। **(iii) जीवविज्ञान**: सूक्ष्मजीव नष्ट होकर सुरक्षित पोषक भोजन मिलता है। **(iv) गणित**: `P = F/A` से वाल्व क्षेत्रफल-भार अनुपात की गणना!' },
    },
    {
      num: '3',
      q: { en: 'Why is ignoring minor variables (`like air drag when first studying falling bodies`) in a scientific model NOT considered a mistake?', hi: 'वैज्ञानिक मॉडल बनाते समय कुछ विवरणों (`जैसे मुक्त पतन के प्रारंभिक अध्ययन में वायु प्रतिरोध`) को छोड़ देना त्रुटि क्यों नहीं माना जाता?' },
      a: { en: 'Because natural systems contain too many simultaneous interactions (`p.2`). **Deliberate simplification** strips secondary clutter to reveal the primary dominant law cleanly (`gravity -> acceleration`); additional corrections (`drag/spin`) are added systematically afterward (`Ex 1.1`).', hi: 'क्योंकि वास्तविक जगत अत्यंत जटिल है (`NCERT पृ. 2`)। प्रारंभ में छोटे प्रभाव छोड़ कर **मुख्य कारण-परिणाम नियम** को सरल व हल करने योग्य बनाया जाता है — फिर अधिक सटीकता के लिए अतिरिक्त कारक जोड़े जाते हैं।' },
    },
    {
      num: '4',
      q: { en: 'Explain how Meghnad Saha applied model simplification to understand starlight spectra (`p.2`).', hi: 'मेघनाद साहा ने तारों के प्रकाश को समझने के लिए सरलीकृत मॉडल का उपयोग किस प्रकार किया (`पृ. 2`)?' },
      a: { en: 'Instead of modelling every individual atom, nuclear fusion reaction, and motion inside a star, **Meghnad Saha** idealised star matter simply as a **hot gas**, concentrating solely on **temperature, pressure & atomic ionisation** (`revealing how stellar colours reveal star temperatures`).', hi: 'तारे के भीतर प्रत्येक परमाणु व अभिक्रिया की गिनती छोड़ कर मेघनाद साहा ने तारों के पदार्थ को केवल एक **उष्ण गैस (`Hot Gas`)** माना और **तापमान, दाब व परमाणुओं के आयनन** पर ध्यान केंद्रित कर सिद्ध किया कि **तारों का रंग उनके तापमान से जुड़ा होता है**।' },
    },
    {
      num: '5',
      q: { en: 'Explain why scientific theories are never “mere guesses” and why scientific failure or falsification is considered a strength (`p.4–5`).', hi: 'विज्ञान में सिद्धांत को “केवल अनुमान” क्यों नहीं कहते और नए प्रमाणों से किसी सिद्धांत का असफल होना विज्ञान की कमजोरी के बजाय शक्ति क्यों है (`पृ. 4–5`)?' },
      a: { en: 'A **scientific theory** (`e.g. Atomic Theory`) explains **WHY** patterns happen using **repeated experiments and strict evidence**. When sharper measurements uncover mismatches, scientists revise/discard ideas strictly by **evidence rather than personal opinion**, making science continuously **self-correcting and trustworthy**!', hi: '**वैज्ञानिक सिद्धांत** सावधान परीक्षण, साक्ष्य व विवेचनात्मक जाँच पर आधारित स्पष्टीकरण होता है (`अनुमान नहीं`)। जब अधिक सटीक मापन से कोई सिद्धांत विफल होता है, तो वैज्ञानिक “मत” के बजाय **प्रमाण के आधार पर उसे सुधारते** हैं — यही आत्म-सुधार विज्ञान को विश्वसनीय बनाता है!' },
    },
    {
      num: '6',
      q: { en: 'Solar Eclipse Inquiry (`Fig 1.2`, p.5): What scientific conclusion proves that eating food kept outside during a solar eclipse is NOT harmful?', hi: 'खग्रास सूर्य ग्रहण जांच (`चित्र 1.2`, पृ. 5): वैज्ञानिक प्रश्नों के आधार पर सिद्ध कीजिए कि ग्रहण काल में भोजन खराब क्यों नहीं होता?' },
      a: { en: 'A **solar eclipse is purely a play of shadows (`alignment blocking sunlight temporarily`)**. Asking whether temperature changes drastically or whether food kept in eclipse shadow deteriorates yields **NO physical, chemical, or biological evidence** of spoilage (`p.5`).', hi: '**सूर्य ग्रहण केवल छायाओं का खेल है**। ग्रहण छाया में तापमान व रासायनिक/जैविक गुणों की जाँच करने पर भोजन के खराब होने या हानिकारक होने का **कोई भौतिक, रासायनिक या जैविक प्रमाण नहीं मिलता** (`पृ. 5`)।' },
    },
    {
      num: '7',
      q: { en: 'Why did a passenger aircraft nearly crash despite fueling for **`22,300 kg`** (`NCERT p.3`)? What lesson does this teach?', hi: 'यात्री विमान में **`22,300 kg`** ईंधन की आवश्यकता होने पर भी मध्य उड़ान ईंधन समाप्त क्यों हुआ और इससे क्या सीख मिलती है (`पृ. 3`)?' },
      a: { en: 'The ground crew mistakenly computed fuel volume using density in **pounds per litre (`lb/L`) instead of kilograms per litre (`kg/L`)**, leaving **`15,000 litres` too little fuel** onboard (`forcing an emergency glide landing`). **Lesson**: Universal **SI units** stop lethal unit-conversion mistakes!', hi: 'कर्मचारियों ने घनत्व को **`kg/L` के बजाय `पाउंड/लीटर (lb/L)`** में गणना कर दी, जिससे विमान में **`15,000 लीटर` कम ईंधन** भरा गया व आपात अवतरण करना पड़ा। **सीख**: विश्व में एकसमान **मानक SI मात्रक** त्रुटियों से बचाते हैं!' },
    },
    {
      num: '8',
      q: { en: 'State the symbol origin (`Latin term`) and exact defined SI value of the speed of light in vacuum (`p.3`). Who first measured it accurately in 1862?', hi: 'निर्वात में प्रकाश के वेग के प्रतीक **`c`** की लैटिन उत्पत्ति व निश्चित SI मान लिखिए (`पृ. 3`)। 1862 में इसका प्रथम सटीक मापन किसने किया?' },
      a: { en: 'Symbol **`c`** comes from the Latin word **“celeritas”** (`meaning speed / swiftness`). Its fixed physical constant value in SI = **`299,792,458 m/s`**. French physicist **Léon Foucault (`1862`)** achieved the first accurate terrestrial speed of light measurement via rotating mirror (`RRB NTPC PYQ`).', hi: 'प्रतीक **`c`** लैटिन शब्द **सेलेरिटास (`celeritas` = गति)** से लिया गया है तथा इसका निश्चित SI मान **`299,792,458 m/s`** है। सन् `1862` में **लियोन फूको** ने घूर्णन दर्पण उपकरण से इसका प्रथम सटीक मान प्राप्त किया था।' },
    },
    {
      num: '9',
      q: { en: 'Solved Numerical (`RRB ALP / Tech Basis`): (`i`) Convert `37°C` & `298 K` across SI Temperature scale; (`ii`) Find temperature change in Kelvin if water warms from `15°C` to `35°C`.', hi: 'रेलवे आंकिक हल: (`i`) `37°C` को केल्विन में एवं `298 K` को सेल्सियस में बदलें; (`ii`) `15°C` से `35°C` गर्म करने पर केल्विन में ताप परिवर्तन क्या होगा?' },
      a: { en: '`(i)` `T(K) = °C + 273` ⇒ `37°C = 37 + 273` = **`310 K`**; `298 K = 298 − 273` = **`25°C`**. `(ii)` Interval size matches 1:1 ⇒ `ΔT = 35 − 15` = **`20 K`** (`NEVER add 273 to a difference!`).', hi: '`(i)` `37 + 273` = **`310 K`**; `298 − 273` = **`25°C`**। `(ii)` ताप **परिवर्तन** में `273` नहीं जोड़ते ⇒ `ΔT = 35 − 15` = **`20 K`** (`ALP 2025 Shift 1`)!' },
    },
    {
      num: '10',
      q: { en: 'Solved Numerical (`SI Prefix & Area Report — ALP 2025`): Express (`i`) `0.004 km` in SI length, (`ii`) `120 m × 75 m` field area in SI units, and (`iii`) `1 kWh` in Joules.', hi: 'SI रूपांतरण हल: (`i`) `0.004 km` को SI मात्रक में लिखें; (`ii`) `120 m × 75 m` खेत का SI क्षेत्रफल; (`iii`) `1 kWh` का जूल में मान।' },
      a: { en: '`(i)` `0.004 km × 1000 m/km` = **`4 m`** (`SI base unit is metre, not cm/mm`). `(ii)` `120 m × 75 m` = **`9,000 m²`**. `(iii)` `1 kWh = 1000 W × 3600 s` = **`3.6 × 10⁶ J`**!', hi: '`(i)` `0.004 × 1000` = **`4 m`** (`लंबाई का मूल SI मात्रक मीटर`)। `(ii)` `120 × 75` = **`9,000 m²`**। `(iii)` `1 kWh` = **`3.6 × 10⁶ J`**!' },
    },
    {
      num: '11',
      q: { en: 'Break down the derived SI units of **Force (`1 N`)**, **Work/Energy (`1 J`)**, **Pressure (`1 Pa`)**, **Momentum (`p`)**, and **Universal Gravity Constant (`G`)** into fundamental SI units.', hi: '**बल (`N`), कार्य/ऊर्जा (`J`), दाब (`Pa`), संवेग (`p`) एवं सार्वत्रिक गुरुत्वाकर्षण स्थिरांक (`G`)** के SI मात्रक लिखिए।' },
      a: { en: '• **Force (`N`)** = **`kg·m·s⁻²`** | **Work/Energy (`J`)** = `N·m` = **`kg·m²·s⁻²`** (`NOT Pascal!`)\n• **Pressure (`Pa`)** = **`N·m⁻²`** = `kg·m⁻¹·s⁻²` | **Momentum** = **`kg·m·s⁻¹`**\n• **Universal Gravity `G = F r² / (m₁ m₂)`** = **`N·m²·kg⁻²`** (`Tech Shifts 13, 23`)!', hi: '• **बल (`N`)**: **`kg·m·s⁻²`** | **कार्य/ऊर्जा (`J`)**: `N·m = W·s = kg·m²·s⁻²` (`पास्कल नहीं!`)\n• **दाब (`Pa`)**: **`N·m⁻²`** | **संवेग**: **`kg·m·s⁻¹`**\n• **गुरुत्वाकर्षण `G`**: **`N·m²·kg⁻²`** (`Tech Gr-III Shifts 13, 23`)!' },
    },
    {
      num: '12',
      q: { en: 'Why does estimating `~100 g` cooked rice for a family for one month fail a plausibility check (`Fig 1.3`, p.6)?', hi: 'एक माह तक 4 सदस्यों के परिवार हेतु `100 g` चावल पर्याप्त होने का अनुमान व्यावहारिक रूप से अमान्य क्यों है (`चित्र 1.3`, पृ. 6)?' },
      a: { en: 'An average adult requires roughly **`2,000–2,500 kcal` per day**, meaning a 4-person household needs `8,000–10,000 kcal` daily (`~2,40,000–3,00,000 kcal/month`). `100 g` rice offers under `~400 kcal`, failing immediately as impossibly tiny, whereas several tonnes would be absurdly large — **logical estimation catches impossible numbers!**', hi: 'एक औसत वयस्क को प्रतिदिन **`2,000–2,500 kcal`** ऊर्जा चाहिए (`4 सदस्य ≈ 8,000–10,000 kcal/दिन`)। `100 g` चावल से इतनी कम ऊर्जा मिलती है कि 1 माह तो क्या एक समय का भोजन भी न बने — अतः सन्निकट अनुमान असंभव मानों को तुरंत पकड़ लेता है!' },
    },
  ],
  flashcards: [
    { front: { en: 'Textbook Margin Symbols (`Magnifying Lens` & `Compass`, p.1)?', hi: 'पुस्तक पृष्ठ के दोनों प्रतीकों (`आवर्धक लेंस` व `दिशासूचक`) का अर्थ?' }, back: { en: '**Magnifying Lens**: close observation & subtle patterns | **Compass**: purposeful direction, right model selection & knowing limits!', hi: '**आवर्धक लेंस**: सूक्ष्म अवलोकन व पैटर्न समझना | **दिशासूचक**: सही मॉडल चुनना, सही प्रश्न पूछना व विचारों की सीमा जानना!' } },
    { front: { en: 'Why Ignore Some Details in Models (`Ex 1.1` & `Act 1.1`)?', hi: 'मॉडल में कुछ विवरणों की जानबूझकर उपेक्षा (`उदा. 1.1`) क्यों करते हैं?' }, back: { en: 'Deliberate simplification (**NOT a mistake**!): skips minor variables (`bat brand, colour`) to isolate core variables (`mass, speed, angle`) first.', hi: 'यह **त्रुटि नहीं बल्कि स्मार्ट सरलीकरण** है — अनावश्यक शोर छोड़ पहले मुख्य संबंध (`द्रव्यमान, गति, दिशा`) हल करने के लिए!' } },
    { front: { en: 'How Did Meghnad Saha Model Stars (`p.2` Stamp Feature)?', hi: 'डॉ. मेघनाद साहा ने तारे का सरल मॉडल कैसे बनाया (`पृ. 2`)?' }, back: { en: 'Treated stellar matter as a **Hot Gas**, studying strictly **Temperature, Pressure & Ionisation** -> linked **star colour directly to temperature**!', hi: 'तारे को **उष्ण गैस** मानकर केवल **तापमान, दाब व परमाणुओं के आयनन** पर ध्यान दे **तारों के रंग और तापमान** का संबंध सिद्ध किया!' } },
    { front: { en: 'Origin & Exact Defined Value of Speed of Light `c` (`p.3`)?', hi: 'प्रकाश वेग प्रतीक `c` की उत्पत्ति, मान व प्रथम सटीक मापनकर्ता?' }, back: { en: '`c` from Latin **“celeritas” (`speed`)** | Vacuum `c` = **`299,792,458 m/s`** (`Foucault 1862` rotating mirror measured accurately; `v_air > v_water > v_glass`)!', hi: 'लैटिन शब्द **सेलेरिटास (`celeritas` = गति)** से `c` | निश्चित मान = **`299,792,458 m/s`** (`1862 में फूको ने घूर्णन दर्पण से मापा`)!' } },
    { front: { en: '22,300 kg Aircraft Fuel Disaster Lesson (`p.3`) & 7 SI Base Units?', hi: '`22,300 kg` विमान ईंधन दुर्घटना कारण एवं सभी 7 मूल SI मात्रक?' }, back: { en: 'Used **`lb/L` instead of `kg/L`** -> **`15,000 L` fuel short**! **7 SI Base**: **`m, kg, s, A, K, mol, cd`** (`keep units universal`)!', hi: '`kg/L` के बजाय **`lb/L`** से **`15,000 L` ईंधन कम**! **7 मूल SI मात्रक**: **`m, kg, s, A, K, mol, cd`**!' } },
    { front: { en: 'Scientific Law vs Theory vs Fundamental Principle (`p.4`)?', hi: 'वैज्ञानिक नियम (`Law`), सिद्धांत (`Theory`) व आधारभूत सिद्धांत (`Principle`) अंतर?' }, back: { en: '**Law**: observed pattern (`Newton’s Laws`) | **Theory**: evidence-tested **WHY** (`Atomic Theory`) | **Principle**: broad rule (`Energy Conservation`)!', hi: '**नियम**: पैटर्न वर्णन (`न्यूटन गति नियम`) | **सिद्धांत**: साक्ष्य-आधारित कारण (`परमाणु सिद्धांत`) | **आधारभूत सिद्धांत**: ऊर्जा संरक्षण!' } },
    { front: { en: 'Why Weather Forecasts Degrade & Total Solar Eclipse Verdict (`p.5`)?', hi: 'मौसम पूर्वानुमान अनिश्चितता व सूर्य ग्रहण भोजन मिथक सच (`पृ. 5`)?' }, back: { en: 'Tiny `T/P/humidity/wind` shifts amplify over days (`Ex 1.2`). **Total Solar Eclipse (`Fig 1.2`)**: purely shadow geometry — **ZERO food spoilage evidence**!', hi: 'ताप/दाब/आर्द्रता में सूक्ष्म बदलाव समय साथ बड़े हो जाते हैं। **सूर्य ग्रहण (`चित्र 1.2`)**: मात्र छाया का खेल, भोजन हानि का **कोई प्रमाण नहीं**!' } },
    { front: { en: 'Daily Energy (`Rice Fig 1.3`) & Daily Air Breathed (`Ex 1.3`) Estimates?', hi: 'दैनिक कैलोरी (`चावल चित्र 1.3`) व प्रतिदिन श्वसन वायु (`उदा. 1.3`)?' }, back: { en: 'Adult energy ≈ **`2,000–2,500 kcal/day`** | Resting air = `20,000 breaths × 0.5 L` = **`~10,000 L/day`** (`Balloon inflation check = 8,640 L`)!', hi: 'दैनिक ऊर्जा ≈ **`2000–2500 kcal`** | श्वास वायु = `20,000 × 0.5 L` = **`~10,000 L/दिन`** (`गुब्बारा क्रॉस-जाँच: 8,640 L`)!' } },
    { front: { en: 'How Does a Surgical Mask (`Fig 1.4`) Unite 4 Branches of Science?', hi: 'सर्जिकल मास्क (`चित्र 1.4`) में विज्ञान की चारों शाखाएँ कैसे जुड़ती हैं?' }, back: { en: '**Physics** (`electrostatic attraction`), **Chemistry** (`polymer fibres`), **Biology** (`virus size`), **Maths** (`airflow filtration model`)!', hi: '**भौतिकी (`स्थैतिक आकर्षण`), रसायन (`बहुलक रेशे`), जीवविज्ञान (`विषाणु आमाप`) व गणित (`निस्पंदन मॉडल`)**!' } },
    { front: { en: 'Top 5 RRB SI Traps: `G`, `Pa`, `J`, `Refractive Index n`, `ΔK`?', hi: 'RRB के 5 शीर्ष SI जाल (`G, Pa, J, n, ΔK`)?' }, back: { en: '`G = N·m²·kg⁻²` | `Pa = N·m⁻²` (`≠ Work`) | `Work/Energy = Joule (N·m = W·s)` | `n = Unitless` | `ΔT(K) = ΔT(°C)` (`+273 only for static reading`)!', hi: '`G = N·m²·kg⁻²` | `दाब = पास्कल` | `कार्य/ऊर्जा = जूल` | `अपवर्तनांक = मात्रकहीन` | `ΔT(K) = ΔT(°C)`!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-c9p1-1',
      examTag: 'RRB ALP 2025 CBT-2 Part A (28 Jul 2026 Shift 1)',
      section: 'Basic Science & Engineering',
      subject: 'Physics',
      topic: 'NCERT Ch 1 (SI Base Unit Kelvin): Temperature Difference Trap',
      question: {
        en: 'A sample of water is heated from `15 degrees Celsius` to `35 degrees Celsius`. What is the temperature change in Kelvin?',
        hi: '`15 डिग्री सेल्सियस` वाले एक प्रतिदर्श जल को `35 डिग्री सेल्सियस` तक गर्म किया जाता है। तापमान परिवर्तन (`केल्विन में`) कितना है?',
      },
      options: {
        en: ['The temperature change is 20 K', 'The temperature change is 30 K', 'The temperature change is 50 K', 'The temperature change is 15 K'],
        hi: ['तापमान परिवर्तन 20 K है', 'तापमान परिवर्तन 30 K है', 'तापमान परिवर्तन 50 K है', 'तापमान परिवर्तन 15 K है'],
      },
      correctIndex: 0,
      solution: {
        en: '**Classic RRB Kelvin Interval Trap!** Because `1 K` change equals `1°C` step size identically (`T₂ - T₁ = (35+273) - (15+273)`), the **change in temperature is `35 - 15 = 20 K`** (`never add 273 to ΔT!`).',
        hi: '**बेहतरीन रेलवे केल्विन जाल!** सेल्सियस व केल्विन पैमाने पर `1°` का अंतर बराबर होता है, अतः तापमान में **परिवर्तन = `35 − 15 = 20 K`** (`अंतर में 273 नहीं जोड़ते!`)।',
      },
    },
    {
      id: 'pyq-c9p1-2',
      examTag: 'RRB ALP 2025 CBT-2 Part A (28 Jul 2026 Shift 1)',
      section: 'Basic Science & Engineering',
      subject: 'Physics',
      topic: 'NCERT Ch 1 (Sec 1.2): Precise Quantity Definition & SI Unit',
      question: {
        en: 'Which of the following statements correctly describes average velocity and its SI unit?',
        hi: 'निम्नलिखित में से कौन-सा कथन, औसत वेग और उसके SI मात्रक का सटीक वर्णन करता है?',
      },
      options: {
        en: [
          'Average velocity is total displacement divided by total time, and its unit is metre per second (`m/s`)',
          'Average velocity is total distance divided by total time, and its unit is metre per second',
          'Average velocity is total distance divided by total time, and its unit is kilometre per hour',
          'Average velocity is total displacement divided by total time, and its unit is kilometre per hour',
        ],
        hi: [
          'औसत वेग कुल विस्थापन को कुल समय से भाग देने पर प्राप्त होता है, और इसका मात्रक मीटर प्रति सेकंड (`m/s`) होता है',
          'औसत वेग कुल दूरी को कुल समय से भाग देने पर प्राप्त होता है, और इसका मात्रक मीटर प्रति सेकंड होता है',
          'औसत वेग कुल दूरी को कुल समय से भाग देने पर प्राप्त होता है, और इसका मात्रक किलोमीटर प्रति घंटा होता है',
          'औसत वेग कुल विस्थापन को कुल समय से भाग देने पर प्राप्त होता है, और इसका मात्रक किलोमीटर प्रति घंटा होता है',
        ],
      },
      correctIndex: 0,
      solution: {
        en: 'Exact scientific definitions (`NCERT p.3`) distinguish velocity (`Displacement / Time`) from speed (`Distance / Time`), and SI speed/velocity unit is **metre per second (`m/s`)**!',
        hi: 'विज्ञान की सटीक भाषा (`पृ. 3`) अनुसार औसत वेग = **कुल विस्थापन / कुल समय**, तथा मानक **SI मात्रक मीटर प्रति सेकंड (`m/s`)** है।',
      },
    },
    {
      id: 'pyq-c9p1-3',
      examTag: 'RRB ALP 2025 CBT-2 Part A (28 Jul 2026 Shift 1)',
      section: 'Basic Science & Engineering',
      subject: 'Physics',
      topic: 'NCERT Ch 1 (SI Unit Kelvin): Body Temperature Conversion',
      question: {
        en: 'A thermometer shows a reading of `37 degrees Celsius`. What is the corresponding temperature in Kelvin?',
        hi: 'एक तापमापी `37 डिग्री सेल्सियस` का पाठ्यांक दर्शाता है। केल्विन में संगत तापमान कितना होगा?',
      },
      options: {
        en: ['310 K', '320 K', '300 K', '270 K'],
        hi: ['310 K', '320 K', '300 K', '270 K'],
      },
      correctIndex: 0,
      solution: {
        en: 'Using SI Thermodynamic Temperature scale (`K = °C + 273`): **`37 + 273 = 310 K`** (`human normal body temperature`).',
        hi: 'SI केल्विन सूत्र `K = °C + 273` से: **`37 + 273 = 310 K`**!',
      },
    },
    {
      id: 'pyq-c9p1-4',
      examTag: 'RRB ALP 2025 CBT-2 Part A (28 Jul 2026 Shift 1)',
      section: 'Science & Measurement',
      subject: 'Physics',
      topic: 'NCERT Ch 1 (SI Reporting Standards): 0.004 km -> 4 m',
      question: {
        en: 'A laboratory record shows a distance of `0.004 kilometres` between two points. How should this be written strictly in SI base units of length for a scientific report?',
        hi: 'प्रयोगशाला के रिकॉर्ड में दो बिंदुओं के बीच की दूरी `0.004 किलोमीटर` दर्शाई गई है। वैज्ञानिक रिपोर्ट के लिए इसे लंबाई के मूल SI मात्रकों में किस प्रकार लिखा जाना चाहिए?',
      },
      options: {
        en: ['400 cm', '4 m', '4000 mm', '0.4 m'],
        hi: ['400 cm', '4 m', '4000 mm', '0.4 m'],
      },
      correctIndex: 1,
      solution: {
        en: 'SI base unit of length is strictly **metre (`m`)** (`NOT cm or mm`): `0.004 km × 1000 m/km` = **`4 m`**!',
        hi: 'लंबाई का मानक SI मूल मात्रक **मीटर (`m`)** है: `0.004 × 1000` = **`4 m`**!',
      },
    },
    {
      id: 'pyq-c9p1-5',
      examTag: 'RRB ALP 2025 CBT-2 Part A (28 Jul 2026 Shift 2)',
      section: 'Basic Science & Measurement',
      subject: 'Physics',
      topic: 'NCERT Ch 1 (SI Derived Area): Rectangular Field',
      question: {
        en: 'If a rectangular field is measured to be `120 metres` long and `75 metres` wide, what is its area in SI units?',
        hi: 'यदि किसी आयताकार क्षेत्र की लंबाई `120 मीटर` और चौड़ाई `75 मीटर` मापी जाती है, तो उसका क्षेत्रफल SI मात्रक में कितना होगा?',
      },
      options: {
        en: ['19500 square metres', '15000 square metres', '1800 square metres', '9000 square metres'],
        hi: ['19500 वर्ग मीटर', '15000 वर्ग मीटर', '1800 वर्ग मीटर', '9000 वर्ग मीटर'],
      },
      correctIndex: 3,
      solution: {
        en: 'Area `A = length × breadth = 120 m × 75 m` = **`9,000 square metres (`m²`)`**!',
        hi: 'क्षेत्रफल `A = 120 m × 75 m` = **`9,000 वर्ग मीटर (`m²`)`**!',
      },
    },
    {
      id: 'pyq-c9p1-6',
      examTag: 'RRB Group D 2025 (09 Aug 2026 Shift 13)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'Derived SI Unit: Potential Energy = Joule',
      question: {
        en: 'The numerical value of an object’s potential energy is measured in which SI unit?',
        hi: 'किसी वस्तु की स्थितिज ऊर्जा का संख्यात्मक मान किस SI मात्रक में मापा जाता है?',
      },
      options: {
        en: ['Pascal (Pa)', 'Watt (W)', 'Joule (J)', 'Newton (N)'],
        hi: ['पास्कल (Pa)', 'वाट (W)', 'जूल (J)', 'न्यूटन (N)'],
      },
      correctIndex: 2,
      solution: {
        en: 'Every form of energy (`Potential Energy = mgh`, Kinetic Energy, Work) has the same SI unit: **Joule (`J`)**!',
        hi: 'स्थितिज ऊर्जा सहित सभी ऊर्जा व कार्य का SI मात्रक **जूल (`J`)** है (`Watt` शक्ति का व `Pascal` दाब का मात्रक है)।',
      },
    },
    {
      id: 'pyq-c9p1-7',
      examTag: 'RRB Group D 2025 (10 Aug 2026 Shift 18)',
      section: 'SI Units & Dimensions',
      subject: 'Physics',
      topic: 'SI Consistency: Work & Kinetic Energy',
      question: {
        en: 'A student calculates the work done on an object and its kinetic energy. In which SI unit should both quantities be expressed?',
        hi: 'एक विद्यार्थी किसी वस्तु पर किए गए कार्य और उसकी गतिज ऊर्जा की गणना करता है। इन दोनों राशियों को किस SI मात्रक में व्यक्त किया जाना चाहिए?',
      },
      options: {
        en: ['Joule (J)', 'Watt (W)', 'Newton (N)', 'Pascal (Pa)'],
        hi: ['जूल (J)', 'वाट (W)', 'न्यूटन (N)', 'पास्कल (Pa)'],
      },
      correctIndex: 0,
      solution: {
        en: 'By Work-Energy equivalence, both **Work (`F·d`)** and **Kinetic Energy (`½mv²`)** are measured in **Joule (`J`)** (`1 J = 1 N·m = kg·m²·s⁻²`).',
        hi: 'कार्य-ऊर्जा प्रमेय अनुसार कार्य और गतिज ऊर्जा दोनों का SI मात्रक **जूल (`J`)** है!',
      },
    },
    {
      id: 'pyq-c9p1-8',
      examTag: 'RRB Group D 2025 (13 Aug 2026 Shift 26)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'Energy Commercial Unit -> SI Joules (`1 kWh = 3.6 MJ`)',
      question: {
        en: 'Which expression correctly represents the commercial unit of electrical energy (`1 kWh`) in terms of SI unit joules?',
        hi: 'कौन-सा व्यंजक विद्युत ऊर्जा की व्यावसायिक यूनिट (`1 किलोवॉट घंटा`) को SI मात्रक जूल के पदों में सही ढंग से निरूपित करता है?',
      },
      options: {
        en: ['1 kilowatt hour = 360 joules', '1 kilowatt hour = 1.6 × 10⁶ joules', '1 kilowatt hour = 1000 joules', '1 kilowatt hour = 3.6 × 10⁶ joules'],
        hi: ['1 किलोवॉट घंटा = 360 जूल', '1 किलोवॉट घंटा = 1.6 × 10⁶ जूल', '1 किलोवॉट घंटा = 1000 जूल', '1 किलोवॉट घंटा = 3.6 × 10⁶ जूल'],
      },
      correctIndex: 3,
      solution: {
        en: '`1 kWh = 1000 W × 3600 s = 3,600,000 J` = **`3.6 × 10⁶ joules`** (`3.6 MJ`)!',
        hi: '`1 kWh = 1000 J/s × 3600 s` = **`3.6 × 10⁶ जूल`**!',
      },
    },
    {
      id: 'pyq-c9p1-9',
      examTag: 'RRB Group D 2025 (19 Aug 2026 Shift 38)',
      section: 'SI Units & Dimensions',
      subject: 'Physics',
      topic: 'Base SI Decomposition of 1 Newton (`kg·m·s⁻²`)',
      question: {
        en: 'If the unit of force is newton, which combination of fundamental SI units makes up one newton?',
        hi: 'यदि बल का मात्रक न्यूटन है, तो मूल SI मात्रकों का कौन-सा संयोजन एक न्यूटन बनाता है?',
      },
      options: {
        en: ['Kilogram metre per second squared', 'Kilogram per metre per second', 'Kilogram metre per second', 'Metre per kilogram per second squared'],
        hi: ['किलोग्राम मीटर प्रति वर्ग सेकंड', 'किलोग्राम प्रति मीटर प्रति सेकंड', 'किलोग्राम मीटर प्रति सेकंड', 'मीटर प्रति किलोग्राम प्रति वर्ग सेकंड'],
      },
      correctIndex: 0,
      solution: {
        en: 'From `F = m × a`: `1 N = 1 kg × 1 m/s²` = **`kilogram metre per second squared (`kg·m·s⁻²`)`**!',
        hi: 'सूत्र `F = m·a` से `1 न्यूटन` = **`किलोग्राम मीटर प्रति वर्ग सेकंड (`kg·m·s⁻²`)`**!',
      },
    },
    {
      id: 'pyq-c9p1-10',
      examTag: 'RRB Group D 2025 (20 Aug 2026 Shift 40)',
      section: 'General Science',
      subject: 'Physics',
      topic: 'Definition Choice of Newton Making `k = 1`',
      question: {
        en: 'Which of the following best describes why the SI unit of force is defined as one newton (`1 N`)?',
        hi: 'निम्नलिखित में से कौन-सा कथन सर्वोत्तम रूप से स्पष्ट करता है कि बल के SI मात्रक को न्यूटन के रूप में क्यों चुना गया है?',
      },
      options: {
        en: [
          'It makes mass and acceleration equal in value',
          'It makes the proportionality constant k in “F = k ma” equal to 1',
          'It changes the physical value of acceleration',
          'It removes velocity units completely',
        ],
        hi: [
          'यह द्रव्यमान और त्वरण को मान में बराबर बनाता है',
          'यह सूत्र “F = k ma” में स्थिरांक k को 1 के बराबर बनाता है',
          'यह त्वरण के मान को बदलता है',
          'यह वेग की गणना को हटा देता है',
        ],
      },
      correctIndex: 1,
      solution: {
        en: 'Choosing `1 N = force accelerating 1 kg by 1 m/s²` fixes constant **`k = 1`** in `F = k ma`, simplifying calculations cleanly to `F = ma`!',
        hi: 'अंतर्राष्ट्रीय मानक (`k = 1`) चुनने से आनुपातिकता स्थिरांक `k = 1` होकर सूत्र सरल रूप में `F = ma` बन जाता है!',
      },
    },
    {
      id: 'pyq-c9p1-11',
      examTag: 'RRB Group D 2025 (21 Aug 2026 Shift 44)',
      section: 'SI Units & Dimensions',
      subject: 'Physics',
      topic: 'Non-Unit Exclusion Trap for Work (`Pascal`)',
      question: {
        en: 'Which of the following is NOT a correct unit of work done?',
        hi: 'निम्नलिखित में से कौन-सा किए गए कार्य का सही मात्रक नहीं है?',
      },
      options: {
        en: ['newton-metre', 'pascal', 'watt-second', 'joule'],
        hi: ['न्यूटन-मीटर (`N·m`)', 'पास्कल (`Pa`)', 'वाट-सेकंड (`W·s`)', 'जूल (`J`)'],
      },
      correctIndex: 1,
      solution: {
        en: '`1 Joule = 1 N·m = 1 W·s` (`all 3 measure work/energy`). **Pascal (`N/m²`) is the SI unit of PRESSURE (`F/A`), NOT work**!',
        hi: '`न्यूटन-मीटर`, `वाट-सेकंड` व `जूल` सभी कार्य के तुल्य मात्रक हैं, जबकि **पास्कल (`Pa = N/m²`) दाब का मात्रक है**!',
      },
    },
    {
      id: 'pyq-c9p1-12',
      examTag: 'RRB NTPC UG 2024 (01 Sep 2025 Shift 3)',
      section: 'General Science — Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 1 (p.3 `c` Curiosity Box): First Accurate Speed of Light',
      question: {
        en: 'Who obtained the first accurate terrestrial value of the speed of light (`c`) using a rotating mirror apparatus in 1862?',
        hi: '1862 में घूर्णन दर्पण उपकरण का उपयोग करके प्रकाश की चाल (`c`) का प्रथम सटीक मान किसने प्राप्त किया था?',
      },
      options: {
        en: ['Albert A. Michelson', 'Marie Alfred Cornu', 'Jean Bernard Léon Foucault', 'Charles Wheatstone'],
        hi: ['अल्बर्ट ए. माइकलसन', 'मैरी अल्फ्रेड कॉर्नू', 'जीन बर्नार्ड लियोन फूको (Foucault)', 'चार्ल्स व्हीटस्टोन'],
      },
      correctIndex: 2,
      solution: {
        en: 'In **1862**, French physicist **Jean Bernard Léon Foucault** measured `c` accurately with a rotating mirror (`modern exact SI defined value: c = 299,792,458 m/s`, NCERT Ch 1 p.3).',
        hi: 'सन् **1862** में फ्रांसीसी भौतिकविद **लियोन फूको (`Foucault`)** ने घूर्णन दर्पण विधि से प्रकाश चाल (`c`) का प्रथम सटीक मान प्राप्त किया!',
      },
    },
    {
      id: 'pyq-c9p1-13',
      examTag: 'RRB Tech Gr-III 2024 (27 Dec 2024 Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'Mass vs Weight SI Units (`kg vs N`)',
      question: {
        en: 'What is the SI unit of mass and weight of a body, respectively?',
        hi: 'किसी पिंड के द्रव्यमान और भार का SI मात्रक क्रमशः क्या है?',
      },
      options: {
        en: ['kg, s', 'kg, kg', 'kg, N', 'gm, N'],
        hi: ['kg, s', 'kg, kg', 'kg, N', 'gm, N'],
      },
      correctIndex: 2,
      solution: {
        en: 'SI unit of **Mass (`amount of matter`) = `kg`** (`Ch 1 Fig 1.1`), whereas **Weight (`gravitational force W = mg`) = `Newton (N)`**!',
        hi: '**द्रव्यमान** का SI मात्रक **किलोग्राम (`kg`)** तथा **भार (`गुरुत्व बल mg`)** का SI मात्रक **न्यूटन (`N`)** होता है!',
      },
    },
    {
      id: 'pyq-c9p1-14',
      examTag: 'RRB Tech Gr-III 2024 (27 Dec 2024 Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'Kelvin to Celsius Lab Conversion (`298 K`)',
      question: {
        en: 'A student in the lab observes the temperature of water on the Kelvin scale as `298 K`. What is the correct conversion on the Celsius scale?',
        hi: 'प्रयोगशाला में एक छात्र ने केल्विन इकाई में पानी का तापमान `298 K` देखा। सेल्सियस इकाई में परिवर्तित होकर यह कितना होगा?',
      },
      options: {
        en: ['32 °C', '28 °C', '25 °C', '30 °C'],
        hi: ['32 °C', '28 °C', '25 °C', '30 °C'],
      },
      correctIndex: 2,
      solution: {
        en: 'Celsius = `T(K) - 273` ⇒ `298 - 273` = **`25 °C`** (`standard room temperature`)!',
        hi: '`°C = K − 273 = 298 − 273` = **`25 °C`**!',
      },
    },
    {
      id: 'pyq-c9p1-15',
      examTag: 'RRB Tech Gr-III 2024 (27 Dec 2024 Shift 2)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'Electrical Resistance SI Unit (`Ohm`) & Temperature Factor',
      question: {
        en: 'Which of the following statements is/are NOT correct? (i) Resistance of a conductor is independent of temperature. (ii) More voltage across an ohmic resistor gives more current. (iii) The SI unit of resistance is ohm.',
        hi: 'निम्नलिखित में से कौन-सा/कौन-से कथन सही नहीं है/हैं? (i) किसी चालक का प्रतिरोध ताप पर निर्भर नहीं करता है। (ii) प्रतिरोधक पर अधिक वोल्टता से अधिक धारा बहती है। (iii) प्रतिरोध का SI मात्रक ओम है।',
      },
      options: {
        en: ['Only (ii)', 'Both (ii) and (iii)', 'Only (i)', 'Both (i) and (ii)'],
        hi: ['केवल (ii)', '(ii) और (iii) दोनों', 'केवल (i)', '(i) और (ii) दोनों'],
      },
      correctIndex: 2,
      solution: {
        en: 'Statement **`(i)` is FALSE**: electrical resistance of metallic conductors **depends directly on temperature** (`increases on heating`), while `(ii)` and `(iii)` (`SI unit = ohm Ω`) are completely true!',
        hi: 'कथन **`(i)` गलत है**: धातु चालकों का प्रतिरोध तापमान बढ़ाने पर बढ़ता है; शेष `(ii)` व `(iii)` (`प्रतिरोध का SI मात्रक ओम`) सत्य हैं!',
      },
    },
    {
      id: 'pyq-c9p1-16',
      examTag: 'RRB Tech Gr-III 2024 (27 Dec 2024 Shift 3)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'Derived SI Unit: Linear Momentum (`kg·m·s⁻¹`)',
      question: {
        en: 'What is the SI unit of linear momentum (`p = m × v`)?',
        hi: 'संवेग (`p = m × v`) का SI मात्रक क्या है?',
      },
      options: {
        en: ['kg m s', 'kg m⁻¹ s⁻¹', 'kg m s⁻¹', 'kg m'],
        hi: ['kg m s', 'kg m⁻¹ s⁻¹', 'kg m s⁻¹', 'kg m'],
      },
      correctIndex: 2,
      solution: {
        en: 'Momentum `p = Mass (kg) × Velocity (m s⁻¹)` = **`kg m s⁻¹`**!',
        hi: 'संवेग = द्रव्यमान (`kg`) × वेग (`m s⁻¹`) = **`kg m s⁻¹`**!',
      },
    },
    {
      id: 'pyq-c9p1-17',
      examTag: 'RRB Tech Gr-III 2024 (28 Dec 2024 Shift 2)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'Derived SI Unit: Acceleration (`m s⁻²`)',
      question: {
        en: 'What is the SI unit of acceleration?',
        hi: 'त्वरण (`Acceleration`) का SI मात्रक क्या है?',
      },
      options: {
        en: ['m s⁻²', 'm s⁻¹', 'm s', 'm s²'],
        hi: ['m s⁻²', 'm s⁻¹', 'm s', 'm s²'],
      },
      correctIndex: 0,
      solution: {
        en: 'Acceleration = change in velocity (`m s⁻¹`) / time (`s`) = **`m s⁻²`** (`metre per second squared`).',
        hi: 'त्वरण = वेग परिवर्तन / समय ⇒ **`m s⁻²`**!',
      },
    },
    {
      id: 'pyq-c9p1-18',
      examTag: 'RRB Tech Gr-III 2024 (29 Dec 2024 Shift 3)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'NCERT Ch 1 (`c`): Speed of Light Comparison Across Media',
      question: {
        en: 'Comparing optical media, the speed of light is _______ (`vacuum c = 299,792,458 m/s`).',
        hi: 'विभिन्न माध्यमों की तुलना में, प्रकाश की चाल (`निर्वात में c = 299,792,458 m/s`) _______ होती है।',
      },
      options: {
        en: ['greater in glass than in water', 'greater in water than in air', 'greater in water than in glass', 'identical in air, glass and water'],
        hi: ['पानी की तुलना में काँच में अधिक', 'हवा की तुलना में पानी में अधिक', 'काँच की तुलना में पानी में अधिक', 'हवा, काँच और पानी में हमेशा एक समान'],
      },
      correctIndex: 2,
      solution: {
        en: 'Optical density rises from Air (`~3×10⁸ m/s`) -> Water (`~2.25×10⁸ m/s`) -> Glass (`~2.0×10⁸ m/s`), so light travels **greater/faster in water than in glass**!',
        hi: 'वायु (`n≈1`) > जल (`n=1.33, 2.25×10⁸ m/s`) > काँच (`n=1.5, 2×10⁸ m/s`) — अतः प्रकाश की चाल **काँच की तुलना में पानी में अधिक** होती है!',
      },
    },
    {
      id: 'pyq-c9p1-19',
      examTag: 'RRB Tech Gr-III 2024 (30 Dec 2024 Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'Derived SI Unit: Pressure Base Expression (`N m⁻²`)',
      question: {
        en: 'What is the SI unit of pressure (`Force / Area`)?',
        hi: 'दाब (`बल / क्षेत्रफल`) का SI मात्रक क्या है?',
      },
      options: {
        en: ['N m⁻¹', 'N', 'N m', 'N m⁻²'],
        hi: ['N m⁻¹', 'N', 'N m', 'N m⁻²'],
      },
      correctIndex: 3,
      solution: {
        en: 'Pressure `P = Force (N) / Area (m²)` = **`N m⁻²`** (`known as 1 Pascal Pa`)!',
        hi: 'दाब = बल (`N`) / क्षेत्रफल (`m²`) = **`N m⁻²`** (`पास्कल`)!',
      },
    },
    {
      id: 'pyq-c9p1-20',
      examTag: 'RRB Tech Gr-III 2024 (27 Dec & 30 Dec 2024)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'Universal Gravitation Constant G (`N m²/kg²`)',
      question: {
        en: 'What is the SI unit of universal gravitational constant G (`from F = G m₁m₂ / r²`)?',
        hi: 'सार्वत्रिक गुरुत्वाकर्षण स्थिरांक G (`F = G m₁m₂ / r²`) का SI मात्रक क्या है?',
      },
      options: {
        en: ['N m² / kg²', 'N m² / kg⁻¹', 'N kg m²', 'N m² / kg s⁻¹'],
        hi: ['N m² / kg²', 'N m² / kg⁻¹', 'N kg m²', 'N m² / kg s⁻¹'],
      },
      correctIndex: 0,
      solution: {
        en: 'Rearranging `G = F · r² / (m₁ · m₂)` gives **`N m² / kg²`** (`N m² kg⁻²`, numeric value `6.67 × 10⁻¹¹`)!',
        hi: 'सूत्र `G = F·r² / (m₁·m₂)` से SI मात्रक = **`N m² / kg²`** (`N m² kg⁻²`)!',
      },
    },
    {
      id: 'pyq-c9p1-21',
      examTag: 'RRB Tech Gr-III 2024 (23 Dec 2024 Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'Dimensionless Quantity Trap: Refractive Index (`n = c/v`)',
      question: {
        en: 'What is the SI unit of refractive index (`ratio c / v`)?',
        hi: 'अपवर्तनांक (`प्रकाशीय अनुपात c / v`) की इकाई क्या है?',
      },
      options: {
        en: ['m³', 'Unitless (`no unit`)', 'm/s²', 'm/s'],
        hi: ['m³', 'इकाई रहित (`Unitless`)', 'm/s²', 'm/s'],
      },
      correctIndex: 1,
      solution: {
        en: 'Refractive index `n = c / v` (`ratio of two speeds`) cancels `(m/s) / (m/s)` cleanly -> completely **Unitless (`मात्रकहीन`)**!',
        hi: 'अपवर्तनांक `n = c / v` दो समान चालों का अनुपात होने से मात्रक कट जाते हैं — यह **इकाई रहित (`Unitless`)** राशि है!',
      },
    },
    {
      id: 'pyq-c9p1-22',
      examTag: 'RRB Tech Gr-III 2024 (24 Dec 2024 Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'Named SI Unit of Pressure (`Pascal`)',
      question: {
        en: 'Which of the following is the named SI unit of pressure (`1 N m⁻²`)?',
        hi: 'निम्नलिखित में से कौन-सा दाब (`1 N m⁻²`) का SI मात्रक है?',
      },
      options: {
        en: ['Kelvin', 'Pascal', 'Cubic metre', 'Newton'],
        hi: ['केल्विन (Kelvin)', 'पास्कल (Pascal)', 'घन मीटर', 'न्यूटन (Newton)'],
      },
      correctIndex: 1,
      solution: {
        en: '`1 Pascal (Pa) = 1 N/m²` is the SI unit of **Pressure**; **Kelvin** measures temperature (`7th/Base SI`), and **Newton** measures force.',
        hi: '**पास्कल (`Pascal`)** दाब का मानक SI मात्रक है (`केल्विन = ताप`, `न्यूटन = बल`)।',
      },
    },
    {
      id: 'pyq-c9p1-23',
      examTag: 'RRB Tech Gr-III 2024 (26 Dec 2024 Shift 1)',
      section: 'Physics',
      subject: 'Physics',
      topic: 'SI Unit of Electromotive Force (`Volt`)',
      question: {
        en: 'What is the SI unit of electromotive force (`EMF — energy supplied per unit charge`)?',
        hi: 'विद्युत वाहक बल (`EMF`) की मानक इकाई क्या है?',
      },
      options: {
        en: ['Second', 'Volt', 'Ampere', 'Newton'],
        hi: ['सेकंड', 'वोल्ट (Volt)', 'एम्पीयर', 'न्यूटन'],
      },
      correctIndex: 1,
      solution: {
        en: 'Despite the word “force” (`a classic name-trap!`), **EMF** is electrical energy/work per unit charge (`W/Q`) measured in **Volt (`V`)** (`NOT Newton!`).',
        hi: '**महत्वपूर्ण नाम-जाल:** “बल” शब्द होने पर भी EMF (`W/Q`) वास्तव में **विभवांतर ऊर्जा प्रति कूलॉम** है जिसका SI मात्रक **वोल्ट (`Volt`)** है (`न्यूटन नहीं!`)।',
      },
    },
    {
      id: 'pyq-c9p1-24',
      examTag: 'RRB ALP 2025 CBT-2 (28 Jul 2026 Shift 2)',
      section: 'Science & Trade Physics',
      subject: 'Physics',
      topic: 'Electromagnetic SI Pair: Magnetic Flux Density (`Tesla`)',
      question: {
        en: 'The SI unit of magnetic flux density (`B`) is: (`while magnetic flux Φ is measured in Weber`)',
        hi: 'चुंबकीय फ्लक्स घनत्व (`B`) का SI मात्रक क्या है? (`जबकि चुंबकीय फ्लक्स Φ का मात्रक वेबर होता है`)',
      },
      options: {
        en: ['Ampere-turn', 'Henry', 'Weber', 'Tesla'],
        hi: ['एम्पियर-टर्न (Ampere-turn)', 'हेनरी (Henry)', 'वेबर (Weber)', 'टेस्ला (Tesla)'],
      },
      correctIndex: 3,
      solution: {
        en: 'Magnetic Flux (`Φ`) = **Weber (`Wb`)** | **Magnetic Flux Density (`B = Φ / A`)** = **Tesla (`T = Wb/m²`)** | Inductance (`L`) = **Henry (`H`)**!',
        hi: 'चुंबकीय फ्लक्स (`Φ`) का मात्रक **वेबर**, जबकि **चुंबकीय फ्लक्स घनत्व (`B = Φ/A`)** का SI मात्रक **टेस्ला (`Tesla`)** है!',
      },
    },
  ],
};
export default C9_CH1_SCIENCE_DATA;
