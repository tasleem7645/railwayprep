/**
 * Class 10 NCERT (2026-27 New Edition — jhsc109.pdf, Pages 148–177) + Railway CBT Deep-Dive Edition
 * Chapter 9: Light — Reflection and Refraction (प्रकाश — परावर्तन तथा अपवर्तन) — Gold Standard v3 (#2 Highest PYQ Chapter!)
 * Complete 2026-27 NCERT Coverage: 9.1 Reflection Laws & Plane Mirror -> 9.2 Spherical Mirrors (Concave/Convex, R=2f,
 * Table 9.1 6-Cases, Table 9.2 2-Cases, Uses, New Cartesian Sign Convention, Mirror Formula & m=-v/u) ->
 * 9.3 Refraction (Activities 9.7–9.10 Glass Slab Lateral Shift, Snell’s Law, Table 9.3 Absolute Refractive Index n=c/v) ->
 * Spherical Lenses (Table 9.4–9.5, Lens Formula 1/v - 1/u = 1/f, m=+v/u, Power Dioptre P=1/f & Combination P=P1+P2).
 * All 13 Activities (9.1–9.13), All 14 In-Text Qs, All 17 Exercises verified against jhsc1an.pdf, & 24 Verbatim RRB PYQs.
 */

export const C10_CH9_LIGHT_DATA = {
  id: 'c10-phy-ch9',
  classId: 'class10',
  subjectId: 'physics',
  subjectLabel: { en: 'Physics', hi: 'भौतिक विज्ञान (Physics)' },
  chapterNumber: 9,
  sourceCode: 'Class 10 NCERT (2026–27) • Ch 9: Light — Reflection & Refraction (CBT Edition)',
  blueprintSvgKey: 'c10-ch9-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Spherical Mirrors (6+2 Ray Cases, Uses, 1/v+1/u=1/f, m=-v/u)', hi: 'गोलीय दर्पण (6+2 स्थितियाँ, उपयोग, दर्पण सूत्र व आवर्धन)' }, pct: 38 },
    { label: { en: 'Spherical Lenses & Dioptre Power (1/v-1/u=1/f, P=1/f, P=P₁+P₂)', hi: 'गोलीय लेंस (लेंस सूत्र, आवर्धन +v/u, डाइऑप्टर व संयोजन)' }, pct: 32 },
    { label: { en: 'Refractive Index (n=c/v), Table 9.3 (Diamond 2.42) & Snell’s Law', hi: 'अपवर्तनांक (n=c/v), हीरा 2.42, स्नेल नियम व काँच स्लैब' }, pct: 20 },
    { label: { en: 'Reflection Laws, R=2f & New Cartesian Sign Convention', hi: 'परावर्तन नियम, R=2f, समतल दर्पण व कार्तीय चिह्न परिपाटी' }, pct: 10 },
  ],
  title: {
    en: 'Chapter 9: Light — Reflection & Refraction',
    hi: 'अध्याय 9: प्रकाश — परावर्तन तथा अपवर्तन',
  },
  subtitle: {
    en: 'Complete 2026-27 NCERT Deep-Dive (#2 PYQ Chapter) • Mirror & Lens Formulas, 6+2 Ray Diagrams, Cartesian Signs, n=c/v, Dioptres & 24 PYQs',
    hi: 'नया 2026-27 NCERT संपूर्ण गहराई (#2 सर्वाधिक PYQ अध्याय) • दर्पण-लेंस सूत्र, 6+2 किरण आरेख, स्नेल नियम, डाइऑप्टर व 24 PYQ',
  },
  metrics: {
    pages: 30,
    activities: 13,
    tables: 6,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 17,
    pyqsMatched: 24,
  },
  hero: {
    imageUrl: '/ncert-notes/class10-phy-ch9/hero-light-optics.webp',
    caption: {
      en: 'Optical Physics Bench: Concave parabolic mirror (cyan beams reflecting to F), Biconvex converging lens (amber beams refracting to F), and Optical glass block lateral refraction.',
      hi: 'प्रकाशिकी प्रयोगशाला: अवतल दर्पण से परावर्तित होकर फोकस पर मिलती नीली किरणें, उत्तल लेंस से अपवर्तित सुनहरी किरणें व काँच स्लैब द्वारा पाश्‍विक विस्थापन।',
    },
  },
  quickRevision60Sec: [
    {
      en: '**Mirrors (`9.2`)**: **Concave (`अवतल`)** converges rays, `f < 0`, **Torch/Headlight/Solar Furnace/Shaving/Dentist**; **`P–F` gives Virtual, Erect & Enlarged (`m > +1`)**! **Convex (`उत्तल`)** diverges rays, `f > 0`, **ALWAYS forms Virtual, Erect & Diminished (`0 < m < +1`)** -> **Car Wing/Rear-view Mirror** (`wide field of view`). Remember **`R = 2f`**!',
      hi: '**दर्पण सारांश (`9.2`)**: **अवतल (`f −ve`)** = अभिसारी (टॉर्च, हेडलाइट, सौर भट्टी, शेविंग, दंत चिकित्सक; **P–F के बीच आभासी, सीधा व बड़ा**)! **उत्तल (`f +ve`)** = अपसारी (**सदैव आभासी, सीधा व छोटा**, चौड़ा दृष्टि क्षेत्र -> **वाहन पश्‍च-दृश्य दर्पण**)। संबंध: **`R = 2f`**!',
    },
    {
      en: '**New Cartesian Signs (`9.2.3 & 9.3.6`)**: Light ALWAYS enters left -> right. **`u` is ALWAYS negative (`u < 0`)**. Left (`−x`) / Downward real inverted (`−y`) = **Negative**; Right (`+x`) / Upward virtual erect (`+y`) = **Positive**. Concave (`Mirror or Lens`) `f = −ve`; Convex (`Mirror or Lens`) `f = +ve`!',
      hi: '**नई कार्तीय चिह्न परिपाटी**: प्रकाश बाएँ से दाएँ आपतित। **`u` सदैव ऋणात्मक (`−ve`)**। मुख्य अक्ष के ऊपर (`+y`) सीधा-आभासी = **धनात्मक**, नीचे (`−y`) वास्तविक-उलटा = **ऋणात्मक**। **अवतल (दर्पण व लेंस दोनों) की `f (−)`** तथा **उत्तल (दर्पण व लेंस दोनों) की `f (+)`**!',
    },
    {
      en: '**Mirror vs Lens Equations (`ZERO Confusion!`)**: Mirror: **`1/v + 1/u = 1/f`**, **`m = h’/h = −v/u`**. Lens: **`1/v − 1/u = 1/f`**, **`m = h’/h = +v/u`**. **`m < 0` => Real & Inverted**; **`m > 0` => Virtual & Erect**; **`|m| = 1` (`at C or 2F₁`) => Same Size**!',
      hi: '**दर्पण बनाम लेंस सूत्र (महा-अंतर)**: दर्पण: **`1/v + 1/u = 1/f`**, **`m = −v/u`**। लेंस: **`1/v − 1/u = 1/f`**, **`m = +v/u`**। **`m` ऋणात्मक = वास्तविक व उलटा**; **`m` धनात्मक = आभासी व सीधा**; **`|m| = 1` (`C` या `2F₁` पर) = समान आकार**!',
    },
    {
      en: '**Refraction, Snell & Table 9.3 (`9.3.1–9.3.2`)**: **Rarer -> Denser** slows light & bends **TOWARDS normal**; **Denser -> Rarer** speeds up & bends **AWAY from normal**. **`sin i / sin r = constant = n₂₁ = v₁/v₂`**, **`n = c/v`** (`unitless`, `c = 3×10⁸ m/s`). **Air `1.0003` | Water `1.33` | Crown Glass `1.52` | Diamond `2.42` (`max n, min speed 1.24×10⁸ m/s`)**. Frequency (`f`) **NEVER changes**!',
      hi: '**अपवर्तन व स्नेल नियम**: **विरल → सघन**: चाल घटती है व **अभिलंब की ओर** मुड़ती है; **सघन → विरल**: चाल बढ़ती है व **अभिलंब से दूर** हटती है। **`sin i / sin r = स्थिरांक`**, **`n = c/v` (`मात्रकहीन`)**। वायु **`1.0003`**, जल **`1.33`**, क्राउन काँच **`1.52`**, **हीरा `2.42` (सर्वाधिक अपवर्तनांक, चाल न्यूनतम `1.24×10⁸ m/s`)**। आवृत्ति अपरिवर्तित!',
    },
    {
      en: '**Lenses & Dioptre Power (`9.3.3–9.3.8`)**: **Convex Lens (`+D`)** behaves image-wise like Concave Mirror (`except at O, ray goes undeviated!`); **Concave Lens (`−D`)** ALWAYS forms **Virtual, Erect & Diminished** image (`like Convex Mirror`). Power: **`P = 1 / f(m) = 100 / f(cm)`** (`1 D = 1 m⁻¹`), Combined Power **`P = P₁ + P₂ + ...`**!',
      hi: '**लेंस एवं डाइऑप्टर क्षमता (`9.3.8`)**: **उत्तल लेंस (`+D`)** के 6 प्रतिबिंब अवतल दर्पण जैसे (केवल **प्रकाशिक केंद्र O से किरण बिना विचलन सीधी** निकलती है); **अवतल लेंस (`−D`)** सदैव **आभासी, सीधा व छोटा**। क्षमता **`P = 1/f(m) = 100/f(cm)`** (मात्रक **`डाइऑप्टर D = m⁻¹`**); संपर्क संयोजन **`P = P₁ + P₂`**!',
    },
  ],
  sections: [
    {
      id: 'reflection-spherical-mirrors',
      number: '9.1–9.2',
      flowDiagramKey: 'c10-ch9-mirror-rays-cases',
      svgLab: 'optics-ray-lens-lab',
      title: {
        en: 'Laws of Reflection, Plane Mirror & Spherical Mirrors (Concave / Convex Ray Cases, Uses, Mirror Formula)',
        hi: 'प्रकाश का परावर्तन, समतल दर्पण व गोलीय दर्पण (अवतल/उत्तल किरण आरेख, उपयोग, चिह्न परिपाटी व दर्पण सूत्र)',
      },
      summaryTag: {
        en: 'NCERT Pages 148–160 • Reflection, R = 2f, Tables 9.1 & 9.2, Mirror Formula & m = −v/u',
        hi: 'NCERT पृ. 148–160 • परावर्तन नियम, R = 2f, सारणी 9.1–9.2, कार्तीय चिह्न व दर्पण सूत्र',
      },
      blocks: [
        {
          heading: {
            en: 'A) Nature of Light, Two Laws of Reflection & Plane Mirror (`Sec 9.1 & Did You Know`)',
            hi: 'A) प्रकाश की दोहरी प्रकृति, परावर्तन के दो नियम एवं समतल दर्पण (`अनुभाग 9.1 व यह भी जानिए`)',
          },
          conceptStory: {
            en: 'We see objects when light reflects off them into our eyes, and see through transparent media because light transmits through them. ==Straight-line propagation (Rectilinear Ray)== explains sharp shadows, EXCEPT when light meets an obstacle much smaller than its wavelength — light bends around corners in a phenomenon called **Diffraction (`विवर्तन`)**, proving light has wave properties (`while photoelectric interaction needs quantum wave-particle duality`!). Every polished reflecting surface — plane OR curved — obeys **two universal Laws of Reflection (`9.1`)**: `(1)` **Angle of incidence equals angle of reflection (`∠i = ∠r`)**; `(2)` **Incident ray, Normal at point of incidence, and Reflected ray all lie in the same plane**. A **Plane Mirror (`समतल दर्पण`)** ALWAYS produces a **Virtual & Erect (`आभासी तथा सीधा`)**, **Laterally Inverted (`पाश्‍वर् परिवर्तित` — left looks right!)** image of **exact same size (`m = +1`)**, located **as far behind the mirror as the object is in front (`|v| = |u|`)** (`Plane mirror focal length f = ∞, Power P = 0 D`!).',
            hi: 'प्रकाश जब किसी वस्तु से परावर्तित होकर हमारी आँखों में प्रवेश करता है, तभी वह दिखाई देती है। छोटा स्रोत अपारदर्शी वस्तु की तीक्ष्ण छाया बनाता है क्योंकि प्रकाश **सरल रेखीय पथ (`प्रकाश किरण`)** में चलता है, परंतु यदि मार्ग में **अत्यंत छोटी वस्तु** आ जाए तो प्रकाश किनारों पर मुड़ने की प्रवृत्ति दिखाता है — इसे ==**प्रकाश का विवर्तन (`Diffraction`)**== कहते हैं (आधुनिक क्वांटम सिद्धांत में प्रकाश तरंग और कण दोनों गुण रखता है)! ==**परावर्तन के दो नियम**== समतल सहित सभी गोलीय पृष्ठों पर लागू होते हैं: `(i)` **आपतन कोण = परावर्तन कोण (`∠i = ∠r`)**, और `(ii)` **आपतित किरण, आपतन बिंदु पर अभिलंब तथा परावर्तित किरण तीनों एक ही तल में होते हैं**। **समतल दर्पण** द्वारा बना प्रतिबिंब सदैव ==**आभासी, सीधा, बिंब के बराबर, दर्पण के पीछे उतनी ही दूरी पर तथा पाश्‍वर् परिवर्तित (`Lateral Inversion`)**== (`m = +1`) होता है!',
          },
          bullets: [
            { en: '**Normal Incidence (`∠i = 0°`)**: Ray striking perpendicularly retraces back along the normal (`∠r = 0°`, total angle deviation = `180°`).', hi: '**अभिलंब आपतन (`∠i = 0°`)**: दर्पण पर लंबवत गिरने वाली किरण उसी पथ से वापस लौट जाती है (`∠r = 0°`)।' },
            { en: '**Lateral Inversion (`पाश्‍वर् परिवर्तन`)**: Left side of object appears right in plane mirror (`why AMBULANCE is mirror-printed`)!', hi: '**पाश्‍वर् परिवर्तन**: बायाँ भाग दायाँ और दायाँ भाग बायाँ दिखता है (`इसीलिए एम्बुलेंस शब्द उलटा लिखा होता है`)!' },
          ],
          viralTrick: {
            en: 'Mnemonic **`V-E-S-L` for Plane Mirror**: **V**irtual, **E**rect, **S**ame size (`m = +1`, `|v| = |u|`), **L**aterally inverted!',
            hi: 'ट्रिक **समतल दर्पण = `आ-सी-ब-पा`**: **आ**भासी, **सी**धा, **ब**राबर आकार (`m = +1`), **पा**श्‍वर् परिवर्तित (`f = ∞`)!',
          },
        },
        {
          heading: {
            en: 'B) Spherical Mirrors (`9.2`): Pole, Focus, Centre of Curvature, Aperture & `R = 2f`',
            hi: 'B) गोलीय दर्पण शब्दावली (`9.2`): ध्रुव (P), वक्रता केंद्र (C), मुख्य फोकस (F), द्वारक व `R = 2f`',
          },
          conceptStory: {
            en: 'Take a shiny spoon (`Activity 9.1`): its **inward curved inner face** behaves like a **Concave Mirror (`अवतल दर्पण` — reflecting surface curved inwards toward centre of sphere)**, whereas its **bulging outward back** acts like a **Convex Mirror (`उत्तल दर्पण` — reflecting surface curved outwards)**. Memorize these exact 5 geometric terms from NCERT Section `9.2`: `(1)` **Pole `P` (`ध्रुव`)**: geometric centre ON the reflecting surface; `(2)` **Centre of Curvature `C` (`वक्रता केंद्र`)**: centre of the hollow sphere of which the mirror is a part — lies **in FRONT** of a Concave mirror and **BEHIND** a Convex mirror (`NOT part of the mirror surface!`); `(3)` **Radius of Curvature `R` (`PC`)**: radius of that sphere; `(4)` **Principal Axis (`मुख्य अक्ष`)**: straight line through `P` & `C` (always normal at `P`); `(5)` **Aperture `MN` (`द्वारक`)**: diameter of circular reflecting rim; `(6)` **Principal Focus `F` (`मुख्य फोकस`)**: point on principal axis where parallel rays actually converge (**Concave**) or appear to diverge from (**Convex**) after reflection! For small-aperture mirrors (`aperture << R`), `F` is the exact midpoint of `PC`, giving ==**the #1 mirror geometry law**==: **`R = 2f` (or `f = R / 2`)**!',
            hi: 'चमकदार चम्मच (`क्रियाकलाप 9.1`) इसका श्रेष्ठ उदाहरण है: चम्मच का **अंदर की ओर वक्रित भाग अवतल दर्पण (`Concave Mirror`)** तथा **बाहर उभरा भाग उत्तल दर्पण (`Convex Mirror`)** जैसा है। प्रमुख पद (`9.2`): `(1)` **ध्रुव `P`**: परावर्तक पृष्ठ का मध्य बिंदु (सतह पर स्थित); `(2)` **वक्रता केंद्र `C`**: उस खोखले गोले का केंद्र जिसका दर्पण भाग है (अवतल में **सामने**, उत्तल में **पीछे**; यह दर्पण का भाग नहीं है!); `(3)` **वक्रता त्रिज्या `R = PC`**; `(4)` **मुख्य अक्ष**: `P` व `C` को मिलाने वाली रेखा; `(5)` **द्वारक `MN`**: परावर्तक पृष्ठ के वृत्ताकार सीमा का व्यास; `(6)` **मुख्य फोकस `F`**: मुख्य अक्ष के समांतर आने वाली किरणें परावर्तन के बाद अवतल में **वास्तव में मिलती हैं** जबकि उत्तल में **`F` से अपसरित होती प्रतीत** होती हैं! छोटे द्वारक के गोलीय दर्पणों में `F`, `P` और `C` का ==**ठीक मध्य बिंदु**== होता है: **`R = 2f` (अर्थात `f = R / 2`)**!',
          },
          inlinePyqIds: ['pyq-light-1', 'pyq-light-2', 'pyq-light-3'],
        },
        {
          heading: {
            en: 'C) Concave vs Convex Mirror Ray Diagrams (`Table 9.1 & 9.2`) & Real-Life Applications',
            hi: 'C) अवतल दर्पण की 6 स्थितियाँ (`सारणी 9.1`), उत्तल दर्पण (`सारणी 9.2`) व दैनिक उपयोग',
          },
          diagramKey: 'c10-ch9-mirror-rays-cases',
          conceptStory: {
            en: 'Any **2 of the 4 standard rays** suffice to locate an image: `(i)` **Parallel to axis -> passes/diverges from `F`**; `(ii)` **Via `F` -> emerges parallel**; `(iii)` **Via `C` (`normal to mirror, 90°`) -> retraces same path backwards**; `(iv)` **Obliquely to Pole `P` -> reflects symmetrically (`∠i = ∠r`)**. Look at the magic pattern of **Concave Mirror `6 Cases`** (`Table 9.1`): As you walk the object closer from `∞` towards `F`, the real inverted image marches outward from `F` towards `∞` AND grows bigger! Case-1 `At ∞ -> F (point)`; Case-2 `Beyond C -> Between F & C (diminished)`; Case-3 ==**Same-Size Case at `C`**== (`u = −2f -> v = −2f, real & inverted, m = −1`); Case-4 `Between C & F -> Beyond C (magnified)`; Case-5 `At F -> At ∞ (highly enlarged — produces parallel searchlight beam!)`; Case-6 ==**Between `P & F` -> BEHIND mirror (Virtual, Erect & Magnified)**==! Why **Concave Applications**? Torches, searchlights & car headlights (`bulb at F => parallel beam`), **Shaving & Dentist mirrors (`tooth inside P–F => big erect view!`)**, **Solar furnaces** (`focus parallel sunlight onto crucible creating extreme heat, like Mont-Louis furnace`). Contrast with **Convex Mirror (`Table 9.2`)**: NO MATTER where the object stands (`∞` or finite `P–∞`), image is ==**ALWAYS Virtual, Erect & Diminished between `P` and `F`**== (`0 < m < +1`) — therefore chosen globally as **Vehicle Side/Wing Rear-View Mirrors** (`always upright image + curved outward for MUCH wider Field of View than plane mirrors!`).',
            hi: 'प्रतिबिंब स्थान निकालने को केवल 2 किरणें पर्याप्त हैं (`Fig 9.3–9.6`): `(i)` समांतर किरण `→ F` से, `(ii)` `F` वाली किरण `→` समांतर, `(iii)` `C` से जाने वाली किरण अभिलंब होने से **उसी पथ पर वापस**, `(iv)` `P` पर तिरछी आपतित बराबर कोण पर परावर्तित। **अवतल दर्पण की 6 स्थितियाँ (`सारणी 9.1`)**: बिंब को `∞` से `F` की ओर लाने पर प्रतिबिंब `F` से `∞` की ओर बड़ा होता भागता है — `(1) ∞ → F (बिंदुवत)`; `(2) C से परे → F–C बीच (छोटा)`; **`(3) C पर → C पर समान आकार (वास्तविक-उलटा, m = −1)`**; `(4) C–F बीच → C से परे (बड़ा)`; `(5) F पर → ∞ (समांतर किरण पुंज — टॉर्च/सर्चलाइट/हेडलाइट)`; ==**`(6) P और F के बीच → दर्पण के पीछे आभासी, सीधा व बड़ा` (शेविंग दर्पण व दंत चिकित्सक)**==! बड़े अवतल दर्पण **सौर भट्टियों** में सूर्य की किरणें केंद्रित करते हैं। वहीं **उत्तल दर्पण (`सारणी 9.2`)**: बिंब कहीं भी हो, प्रतिबिंब **सदैव `P` व `F` के बीच आभासी, सीधा व छोटा (`0 < m < +1`)** बनता है — इसी वक्रता से अत्यंत विशाल **दृष्टि क्षेत्र (`Wide FOV`)** मिलता है, इसलिए ==**वाहनों के पश्‍च-दृश्य (`Rear-view Wing Mirror`)**== में इसका उपयोग होता है (समतल दर्पण का दृश्य क्षेत्र संकरा है व अवतल दूर की गाड़ी को उलटा कर देगा)!',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch9/real/solar-concave.webp',
            secondaryUrl: '/ncert-notes/class10-phy-ch9/real/convex-side-mirror.webp',
            title: {
              en: 'Real Engineering Gallery: Giant Parabolic Concave Solar Concentrator (`Mont-Louis`) vs Convex Wing Mirror (`Wide FOV`)',
              hi: 'वास्तविक विज्ञान गेलरी: विशाल परवलयाकार अवतल सौर भट्टी दर्पण बनाम वाहन का उत्तल पश्‍च-दृश्य दर्पण (चौड़ा दृष्टि क्षेत्र)',
            },
            caption: {
              en: 'Left: Giant concave parabolic solar furnace converging parallel sunbeams onto focus `F`. Right: Convex lower wing mirror warning "Objects in mirror are closer than they appear" gives an erect, diminished, extra-wide traffic view compared to the flat top plane mirror!',
              hi: 'बायाँ: समांतर सौर किरणों को फोकस F पर केंद्रित करती अवतल सौर भट्टी। दायाँ: उत्तल साइड मिरर हमेशा सीधा, छोटा पर अत्यधिक चौड़ा दृश्य दिखाता है ("Objects in mirror are closer than they appear")!',
            },
          },
          inlinePyqIds: ['pyq-light-5', 'pyq-light-6', 'pyq-light-7', 'pyq-light-8', 'pyq-light-9', 'pyq-light-10', 'pyq-light-11'],
        },
        {
          heading: {
            en: 'D) New Cartesian Sign Convention, Mirror Formula (`1/v + 1/u = 1/f`) & Magnification (`m = −v/u`)',
            hi: 'D) नई कार्तीय चिह्न परिपाटी (`9.2.3`), दर्पण सूत्र (`1/v + 1/u = 1/f`) एवं आवर्धन (`m = −v/u`)',
          },
          conceptStory: {
            en: 'Always place Pole `P` at graph origin `(0, 0)` with light travelling **Left -> Right**: `(1)` Object `AB` stands on the left -> ==**`u` is ALWAYS negative**== (`u < 0`); `(2)` All left distances (`−x`) are **negative** -> Concave Mirror `f < 0, R < 0`; Real image on front screen `v < 0`; `(3)` All right distances (`+x`) are **positive** -> Convex Mirror `f > 0, R > 0`; Virtual image behind mirror `v > 0`; `(4)` Upright heights (`+y`, object `h` or virtual `h’`) are **positive**; Inverted real heights (`−y`, `h’`) are **negative**. Plugging signed values into the universal **Mirror Formula (`Eq 9.1`)**: **`1/v + 1/u = 1/f`** (`shortcut: v = (u·f)/(u − f)`!). Linear ==**Mirror Magnification (`Eq 9.2–9.3`)**==: **`m = h’ / h = −v / u`**. Check signs carefully: if `m = −2`, minus means **Real & Inverted**, `2` means **twice as tall**; if `m = +1/3`, plus means **Virtual & Erect**, `1/3` means **diminished (`Convex mirror!`)**; if `m = +2.3`, plus & `>1` proves ==**Concave mirror (`between P & F`)**==! Note **NCERT Exercise Q9**: even if half a mirror or lens is covered with black paper, ==**full image still forms**== (only brightness drops)!',
            hi: 'ध्रुव `P` को ग्राफ का मूल बिंदु `(0,0)` मानें (`प्रकाश बाएँ → दाएँ`): `(1)` बिंब सदा बाएँ होता है, अतः **`u` सदैव ऋणात्मक (`−ve`)**; `(2)` बाईं ओर मापी दूरी `−ve` (अतः **अवतल दर्पण की `f` व `R` ऋणात्मक** तथा वास्तविक प्रतिबिंब की **`v` ऋणात्मक**); `(3)` दाईं ओर `+ve` (**उत्तल दर्पण की `f` व `R` धनात्मक** व आभासी `v` धनात्मक); `(4)` ऊपर `+h` (सीधा), नीचे `−h’` (उलटा वास्तविक)। **दर्पण सूत्र**: **`1/v + 1/u = 1/f`** (`शॉर्टकट: v = uf / (u − f)`)। ==**दर्पण आवर्धन (`Magnification`)**==: **`m = h’/h = −v/u`**। यदि **`m < 0`** तो प्रतिबिंब **वास्तविक व उलटा**; यदि **`m > 0`** तो **आभासी व सीधा** (`m = +2.3` => अवतल दर्पण `P–F`; `0 < m < +1` => उत्तल दर्पण; `m = +1` => समतल दर्पण)! **महत्वपूर्ण (`Ex Q9 / Shift 16 PYQ`)**: यदि दर्पण या लेंस का आधा भाग काले कागज से ढक दें, तो भी **संपूर्ण प्रतिबिंब बनेगा**, बस उसकी **तीव्रता/चमक घट जाएगी**!',
          },
          inlinePyqIds: ['pyq-light-4', 'pyq-light-12', 'pyq-light-13', 'pyq-light-14', 'pyq-light-15'],
        },
      ],
    },
    {
      id: 'refraction-snell-indices',
      number: '9.3.1–9.3.2',
      flowDiagramKey: 'c10-ch9-refraction-snell-slab',
      title: {
        en: 'Refraction Through Glass Slab, Snell’s Law, Speed Change & Refractive Index Table (9.3)',
        hi: 'प्रकाश का अपवर्तन, काँच स्लैब (पाश्‍विक विस्थापन), स्नेल का नियम एवं अपवर्तनांक सारणी (9.3)',
      },
      summaryTag: {
        en: 'NCERT Pages 160–165 • Lateral Shift, sin i / sin r = const, n = c/v & Optical vs Mass Density Trap',
        hi: 'NCERT पृ. 160–165 • पेंसिल/सिक्का मुड़ना, स्लैब निर्गत किरण, स्नेल नियम, हीरा n=2.42 व घनत्व जाल',
      },
      blocks: [
        {
          heading: {
            en: 'A) Why Light Bends: Optical Density, Glass Slab Lateral Shift & Two Laws of Refraction (`9.3.1`)',
            hi: 'A) प्रकाश क्यों मुड़ता है? विरल-सघन नियम, आयताकार काँच स्लैब व अपवर्तन के नियम (`9.3.1`)',
          },
          conceptStory: {
            en: 'Put a pencil half in water (`Act 9.7–9.9`) — it looks **bent at the air-water interface**; a coin in a bucket appears raised! Why? Light travels at different speeds in different transparent media (`fastest in vacuum: c = 3 × 10⁸ m/s`). When light enters **obliquely (`तिरछा`)** from **Optically Rarer -> Optically Denser medium (`e.g. Air -> Water or Glass`)**, speed decreases and the ray bends ==**TOWARDS the normal (`∠r < ∠i`)**==. Leaving **Denser -> Rarer (`Glass -> Air`)**, speed increases and the ray bends ==**AWAY from the normal (`∠e > ∠r₁`)**==! Note: if incident **perpendicularly (`∠i = 0°`)**, it goes **straight without bending** (`even though speed changes!`). In a **Rectangular Glass Slab (`Fig 9.10, Act 9.10`)**, bending at parallel faces `AB` (`air->glass`) and `CD` (`glass->air`) is **equal and opposite**, so the **emergent ray `O’H` emerges strictly PARALLEL to the incident ray (`∠e = ∠i`)**, merely shifted sideways by **Lateral Displacement (`पाश्‍विक विस्थापन`)**! Two **Laws of Refraction**: `(i)` Incident ray, Refracted ray & Normal at incidence point lie in the same plane; `(ii)` **Snell’s Law (`0° < i < 90°`)**: **`sin i / sin r = constant = n₂₁`**! Note that **wavelength (`λ`) and speed (`v`) change**, while **frequency (`f`) NEVER changes** during refraction!',
            hi: 'पानी में डूबी पेंसिल मुड़ी दिखती है तथा तली में रखा सिक्का ऊपर उठा (`क्रियाकलाप 9.7–9.9`) प्रतीत होता है क्योंकि एक पारदर्शी माध्यम से दूसरे में **तिरछा प्रवेश** करने पर **प्रकाश की चाल बदलने से दिशा बदल जाती है** (यही **अपवर्तन** है)। मूल मंत्र: **(1) विरल → सघन (वायु → जल/काँच)**: चाल घटती है व किरण ==**अभिलंब की ओर झुकती (`∠r < ∠i`)**== है; **(2) सघन → विरल**: चाल बढ़ती है व किरण ==**अभिलंब से दूर हटती**== है; **(3) यदि `∠i = 0°` (अभिलंबवत आपतन)**: किरण बिना मुड़े सीधी निकल जाती है (चाल फिर भी बदलती है)! **आयताकार काँच के स्लैब (`चित्र 9.10`)** में विपरीत फलक `AB` व `CD` पर मुड़ने का परिमाण समान व विपरीत होने से ==**निर्गत किरण (`O’H`) आपतित किरण के ठीक समांतर**== निकलती है (`∠e = ∠i`), केवल थोड़ा **पाश्‍विक विस्थापन (`Lateral Displacement`)** होता है! **स्नेल का नियम (`Eq 9.4`)**: निश्चित रंग व माध्यम युग्म के लिए **`sin i / sin r = स्थिरांक` (`n₂₁`)**। अपवर्तन में **चाल (`v`) व तरंगदैर्ध्य (`λ`) बदलती है पर आवृत्ति (`f`) कभी नहीं बदलती!**',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch9/real/pencil-water-refraction.webp',
            secondaryUrl: '/ncert-notes/class10-phy-ch9/real/diamond-refraction.webp',
            title: {
              en: 'Refraction in Action: Water-Pencil Apparent Bending (`Act 9.7–9.8`) vs Diamond Highest `n = 2.42` (`Table 9.3`)',
              hi: 'अपवर्तन प्रमाण: पानी में मुड़ी पेंसिल (`क्रियाकलाप`) तथा सर्वाधिक अपवर्तनांक वाला हीरा (`n = 2.42`, चमक)',
            },
            caption: {
              en: 'Left: Rays from submerged pencil bend away from normal leaving water -> pencil appears displaced & broken at interface. Right: Diamond holds max Table 9.3 refractive index (`2.42`), slowing light to `1.24×10⁸ m/s` for brilliant internal brilliance.',
              hi: 'बायाँ: पानी से हवा में आते समय किरण अभिलंब से दूर हटती है जिससे पेंसिल टूटी/मुड़ी दिखती है। दायाँ: हीरे का निरपेक्ष अपवर्तनांक सर्वाधिक `2.42` है (`चाल = 1.24×10⁸ m/s`)!',
            },
          },
          inlinePyqIds: ['pyq-light-16', 'pyq-light-17'],
        },
        {
          heading: {
            en: 'B) Absolute Refractive Index (`n = c/v`), Table 9.3 Values & Optical vs Mass Density Trap',
            hi: 'B) निरपेक्ष अपवर्तनांक (`n = c/v`), सारणी 9.3 के सभी मान व प्रकाशिक बनाम द्रव्यमान घनत्व जाल',
          },
          conceptStory: {
            en: '**Relative Refractive Index (`n₂₁`)** = `v₁ / v₂` (`speed in medium 1 / speed in medium 2`), while `n₁₂ = v₂ / v₁ = 1 / n₂₁`. When Medium 1 is **Vacuum or Air (`c ≈ 3 × 10⁸ m/s`)**, it is called ==**Absolute Refractive Index**==: **`n = c / v`**. Since `n` is a ratio of two speeds, it is **strictly UNITLESS (`मात्रकहीन`)** and always **`> 1`** for transparent liquids/solids because `v < c`! **RRB Exam Favourite Trap (`NCERT Do You Know p.164`)**: **Optical Density (`प्रकाशिक घनत्व` ∝ refractive index `n`) is NOT Mass Density!** Look at **Kerosene (`n = 1.44`) vs Water (`n = 1.33`)**: Kerosene has **LOWER mass density** (`so kerosene floats ON top of water!`), YET Kerosene has **HIGHER refractive index (`1.44 > 1.33`)**, meaning Kerosene is **OPTICALLY DENSER** than water (`light slows down more in kerosene than in water`)! Remember the speed rule: **`Higher n => Slower Light (v = c/n)`**. Among Water (`1.33`), Kerosene (`1.44`) and Turpentine (`1.47`), light travels **FASTEST in Water** (`lowest n`) and **SLOWEST in Diamond (`n = 2.42 -> v = 3/2.42 = 1.24 × 10⁸ m/s`)**!',
            hi: '**सापेक्ष अपवर्तनांक `n₂₁ = v₁ / v₂`** (माध्यम 1 में चाल / माध्यम 2 में चाल)। जब प्रथम माध्यम निर्वात/वायु (`c = 3×10⁸ m/s`) हो, तो ==**निरपेक्ष अपवर्तनांक**== **`n = c / v`** कहलाता है। चूँकि यह दो चालों का अनुपात है, यह **पूर्णतः मात्रकहीन (`Unitless`)** राशि है और ठोस-द्रवों के लिए सदैव **`> 1`** होता है। **सबसे खतरनाक परीक्षा जाल (`NCERT पृ. 164`)**: **प्रकाशिक घनत्व (`Optical Density`) और द्रव्यमान घनत्व (`Mass Density`) समान नहीं हैं!** जैसे: **किरोसिन का द्रव्यमान घनत्व जल से कम है (`इसलिए जल पर तैरता है`)**, परंतु इसका अपवर्तनांक **`1.44`** जल (**`1.33`**) से अधिक है — अतः **किरोसिन, जल की तुलना में प्रकाशिक सघन है!** सीधा मंत्र: **`जितना अधिक n, उतनी कम प्रकाश की चाल` (`v = c/n`)**। जल (`1.33`), किरोसिन (`1.44`), तारपीन (`1.47`) में प्रकाश **सबसे तेज जल में**, तथा **हीरे (`n = 2.42`) में सबसे धीमा (`1.24 × 10⁸ m/s`)** चलता है!',
          },
          inlinePyqIds: ['pyq-light-18'],
        },
      ],
    },
    {
      id: 'spherical-lenses-power',
      number: '9.3.3–9.3.8',
      flowDiagramKey: 'c10-ch9-lens-power-comparison',
      title: {
        en: 'Spherical Lenses (Convex & Concave 6+2 Cases), Lens Formula (`1/v − 1/u = 1/f`), Magnification (`+v/u`) & Dioptre Power',
        hi: 'गोलीय लेंस (उत्तल व अवतल 6+2 स्थितियाँ), लेंस सूत्र (`1/v − 1/u = 1/f`), आवर्धन (`+v/u`) व डाइऑप्टर शक्ति',
      },
      summaryTag: {
        en: 'NCERT Pages 165–177 • Ray via Optical Centre O, Tables 9.4–9.5, Dioptre P = 1/f(m) & P = P₁ + P₂',
        hi: 'NCERT पृ. 165–177 • प्रकाशिक केंद्र O नियम, सारणी 9.4–9.5, डाइऑप्टर शक्ति एवं लेंस संयोजन',
      },
      blocks: [
        {
          heading: {
            en: 'A) Convex (`Converging, +D`) vs Concave (`Diverging, −D`) Lenses & Three Lens Ray Rules (`9.3.3–9.3.5`)',
            hi: 'A) उत्तल (`अभिसारी`) बनाम अवतल (`अपसारी`) लेंस एवं तीन किरण आरेख नियम (`9.3.3–9.3.5`)',
          },
          conceptStory: {
            en: 'A spherical lens is a transparent medium bound by two surfaces (at least one spherical). **Double Convex Lens (`उत्तल लेंस`)**: ==**thicker at middle, thinner at edges**== — converges parallel rays to focal point `F₂`, burning sunlight onto paper (`Act 9.11`). **Double Concave Lens (`अवतल लेंस`)**: ==**thicker at edges, thinner in middle**== — diverges parallel rays appearing to come from `F₁`! Three key **Lens Terms & Ray Rules**: `(1)` **Optical Centre `O` (`प्रकाशिक केंद्र`)**: central point of lens — ==**any ray passing through `O` emerges WITHOUT ANY deviation!**== (`Eq Fig 9.15 — direct PYQ!`); `(2)` Two principal foci `F₁` & `F₂` (`distance OF₁ = OF₂ = f`) and `2F₁, 2F₂` (`note: textbook writes 2F because lens curves don’t always have F = R/2 unless both sides equal air/glass!`); `(3)` **Ray || Principal Axis** converges through `F₂` (`convex`) or diverges as if from `F₁` (`concave`). **Convex Lens `6 Cases` (`Table 9.4`)** mirror Concave Mirror’s 6 cases (`just swap C->2F₁, F->F₁, and real images form on opposite right side +v`!): `2F₁` gives **real, inverted & exact same size (`m = −1`, e.g. `NCERT p.174 Q2: needle at 50 cm!`)**; **`F₁–O` (`between focus and O`) gives Virtual, Erect & Enlarged** (`Dictionary Magnifier, Ex Q6 = 5 cm convex lens!`). **Concave Lens (`Table 9.5`)** ALWAYS produces ==**Virtual, Erect & Diminished**== between `F₁` & `O` (`0 < m < +1`)!',
            hi: 'दो गोलीय (या एक समतल व एक गोलीय) पृष्ठों से घिरा पारदर्शी माध्यम **लेंस** है: **द्वि-उत्तल लेंस (`Convex`)** ==**बीच में मोटा व किनारों पर पतला**== होता है और किरणों को **अभिसरित (`Converge`)** करता है (`क्रियाकलाप 9.11: सूर्य प्रकाश से कागज जलाना`)। **द्वि-अवतल लेंस (`Concave`)** ==**किनारों पर मोटा व बीच में पतला**== होता है और किरणों को **अपसरित (`Diverge`)** करता है! **3 लेंस किरण नियम (`9.3.5`)**: `(i)` मुख्य अक्ष के समांतर किरण अपवर्तन के बाद उत्तल में `F₂` से जाती है (अवतल में `F₁` से आती प्रतीत); `(ii)` फोकस दिशा की किरण समांतर निकलती है; `(iii)` ==**प्रकाशिक केंद्र `O` से गुजरने वाली किरण बिना किसी विचलन के सीधी निकल जाती है**==! **उत्तल लेंस की 6 स्थितियाँ (`सारणी 9.4`)** अवतल दर्पण की बिल्कुल फोटोकॉपी हैं (बस `C` की जगह `2F₁`, `F` की जगह `F₁` और वास्तविक प्रतिबिंब दाईं ओर `+v`!): **`2F₁` पर रखने से `2F₂` पर समान आकार (`m = −1`)** बनता है; तथा **`F₁` और `O` के बीच रखने पर उसी ओर आभासी, सीधा व बड़ा प्रतिबिंब (`आवर्धक लेंस / शब्दकोष छोटे अक्षर पढ़ना Ex Q6`)** बनता है! **अवतल लेंस (`सारणी 9.5`)** किसी भी दूरी पर ==**सदैव आभासी, सीधा व छोटा प्रतिबिंब (`0 < m < +1`)**== बनाता है!',
          },
          realImage: {
            url: '/ncert-notes/class10-phy-ch9/real/convex-lens-inverted.webp',
            title: {
              en: 'Real Optical Proof: Biconvex Lens Forming a Real & Inverted (`उलटा`) Image of a Distant House (`Beyond 2F₁`)',
              hi: 'प्रत्यक्ष प्रमाण: उत्तल लेंस द्वारा दूर स्थित मकान का उलटा एवं वास्तविक प्रतिबिंब निर्माण (`Case 2`)',
            },
            caption: {
              en: 'Looking through a converging convex lens at a distant house (`object beyond 2F₁`), you literally see the inverted sky at bottom and upside-down red roof — classic NCERT Table 9.4 proof!',
              hi: 'उत्तल लेंस से दूर की वस्तु देखने पर आसमान नीचे और लाल छत उलटी दिखाई देती है — वास्तविक व उलटे प्रतिबिंब (`सारणी 9.4`) का प्रत्यक्ष उदाहरण!',
            },
          },
          inlinePyqIds: ['pyq-light-19', 'pyq-light-20', 'pyq-light-21', 'pyq-light-22'],
        },
        {
          heading: {
            en: 'B) Lens Formula (`1/v − 1/u = 1/f`), Lens Magnification (`m = +v/u`) & Dioptre Power (`P = 1/f`, `P = P₁ + P₂`)',
            hi: 'B) लेंस सूत्र (`1/v − 1/u = 1/f`), आवर्धन (`m = +v/u`) एवं लेंस की क्षमता / डाइऑप्टर संयोजन (`9.3.7–9.3.8`)',
          },
          conceptStory: {
            en: 'All distances are measured from Optical Centre `O` (`u < 0` always!). **Convex Lens focal length `f > 0` (`+`)**; **Concave Lens focal length `f < 0` (`−`)**. Compare carefully with mirrors: ==**Lens Formula (`Eq 9.8`)**== uses a MINUS sign (`1/v − 1/u = 1/f`, shortcut `v = (u·f)/(u + f)`), and ==**Lens Magnification (`Eq 9.10`)**== uses a PLUS sign (`m = h’/h = +v/u`)! Look how sign logic stays 100% consistent: for Convex Lens forming real inverted image on right (`v > 0, u < 0`), `m = (+v)/(−u) = negative` (`inverted!`); for virtual erect image on same left side (`v < 0, u < 0`), `m = (−v)/(−u) = positive` (`erect!`). ==**Power of a Lens (`9.3.8`)**== measures degree of convergence/divergence — shorter `f` bends light steeper so greater power: **`P = 1 / f(in metres) = 100 / f(in cm)`**. **SI Unit = Dioptre (`D`, `1 D = 1 m⁻¹`)**: focal length `1 m` gives `1 D`! **Convex Lens Power = POSITIVE (`+D`)**, **Concave Lens Power = NEGATIVE (`−D`)**. For lenses placed in contact (`cameras, microscopes, optician trial frames`): ==**Combined Contact Lens Power**== is **`P_net = P₁ + P₂ + P₃ + ...`** and **`1/F_net = 1/f₁ + 1/f₂`** (watch out: always assign **minus sign** to a diverging/concave lens!).',
            hi: 'लेंस में सभी दूरियाँ **प्रकाशिक केंद्र `O`** से मापी जाती हैं (`u` सदैव ऋणात्मक)। **उत्तल लेंस `f (+)`**; **अवतल लेंस `f (−)`**। ==**लेंस सूत्र (`Eq 9.8`)**==: **`1/v − 1/u = 1/f`** (यहाँ बीच में **ऋण `−`** है, जबकि दर्पण में **`+`** था!)। ==**लेंस आवर्धन (`Eq 9.10`)**==: **`m = h’/h = +v/u`** (दर्पण में `−v/u` था!)। ==**लेंस की क्षमता (`Power, 9.3.8`)**==: किसी लेंस द्वारा किरणों को अभिसरित/अपसरित करने की मात्रा: **`P = 1 / f(मीटर) = 100 / f(cm)`**। **SI मात्रक = डाइऑप्टर (`Dioptre, D`, `1 D = 1 m⁻¹`)**: `1 मीटर` फोकस दूरी वाले लेंस की क्षमता `1 D` होती है। **उत्तल लेंस = `+D`**, **अवतल लेंस = `−D`**। ==**संपर्क में रखे लेंसों का संयोजन**== (कैमरा, सूक्ष्मदर्शी, चश्मा परीक्षण फ्रेम): **`P = P₁ + P₂ + P₃ + ...`** तथा **`1/F = 1/f₁ + 1/f₂`** (`अपसारी/अवतल लेंस का मान सदैव ऋणात्मक चिह्न सहित रखें!`)।',
          },
          inlinePyqIds: ['pyq-light-23', 'pyq-light-24'],
        },
      ],
    },
  ],
  confusionBreakers: [
    {
      pair: {
        en: 'Mirror Formula & `m` vs Lens Formula & `m` (`The #1 Sign Trap!`)',
        hi: 'दर्पण सूत्र व `m` बनाम लेंस सूत्र व `m` (`#1 चिह्न गलती`)',
      },
      trap: {
        en: 'Mixing up `+` and `−` (`1/v + 1/u` vs `1/v − 1/u`, and `−v/u` vs `+v/u`) between mirrors and lenses!',
        hi: 'दर्पण में `1/v − 1/u` लगा देना या लेंस आवर्धन में `-v/u` लिख देना!',
      },
      truth: {
        en: '**Mirror** has **`+`** (`1/v + 1/u = 1/f`) & **`m = −v/u`**. **Lens** has **`−`** (`1/v − 1/u = 1/f`) & **`m = +v/u`**! Notice they always carry OPPOSITE signs between the formula and magnification!',
        hi: '**दर्पण** में जोड़ (**`1/v + 1/u = 1/f`**) तो आवर्धन में घटाव (**`m = −v/u`**)! **लेंस** में घटाव (**`1/v − 1/u = 1/f`**) तो आवर्धन में जोड़ (**`m = +v/u`**)! दोनों सदैव उलटे चिह्न रखते हैं।',
      },
    },
    {
      pair: {
        en: 'Concave Mirror vs Concave Lens (`Who Converges / Diverges?`)',
        hi: 'अवतल दर्पण बनाम अवतल लेंस (`अभिसारी बनाम अपसारी उलटफेर`)',
      },
      trap: {
        en: 'Assuming all "Concave" optical devices converge OR all "Convex" devices converge!',
        hi: 'यह समझ लेना कि "अवतल" का मतलब हमेशा अभिसारी या हमेशा अपसारी होता है!',
      },
      truth: {
        en: '**Concave MIRROR = CONVERGING**, **Convex MIRROR = DIVERGING**. Lenses are the **EXACT OPPOSITE** (`in air`): **Convex LENS = CONVERGING (`+D`)**, **Concave LENS = DIVERGING (`−D`)**! (`What stays SAME? Concave mirror & Concave lens BOTH have NEGATIVE focal length f < 0; Convex mirror & Convex lens BOTH have POSITIVE f > 0!`)',
        hi: '**अवतल दर्पण = अभिसारी**, **उत्तल दर्पण = अपसारी**; पर लेंस ठीक उल्टे हैं: **उत्तल लेंस = अभिसारी (`+D`)**, **अवतल लेंस = अपसारी (`−D`)**! (समान क्या रहता है? **दोनों अवतल की `f < 0` और दोनों उत्तल की `f > 0`!**)',
      },
    },
    {
      pair: {
        en: 'Magnification `m = +2.3` vs `m = +0.5` (`Which Mirror?`)',
        hi: 'आवर्धन `m = +2.3` बनाम `m = +0.5` (`कौन-सा दर्पण?`)',
      },
      trap: {
        en: 'Seeing `+` sign and blindly ticking Convex or Plane mirror without checking `|m|`!',
        hi: 'आवर्धन में `+` चिह्न देखकर बिना मान (`|m|`) जाँचे उत्तल या समतल टिक कर देना!',
      },
      truth: {
        en: '`+` means virtual & erect, made by all 3 mirrors — look at size **`|m|`**: **`m = +1` -> Plane mirror**; **`0 < m < +1` (`diminished`, e.g. `+0.5`) -> Convex mirror**; **`m > +1` (`magnified`, e.g. `+2.3`) -> Concave mirror** (`object between P & F`)!',
        hi: 'तीनों दर्पण `+` आवर्धन (सीधा-आभासी) बना सकते हैं! मान `|m|` देखें: **`m = +1` -> समतल दर्पण**; **`0 < m < +1` (छोटा, जैसे `+0.4`) -> उत्तल दर्पण**; **`m > +1` (बड़ा, जैसे `+2.3`) -> अवतल दर्पण (`P–F`)**!',
      },
    },
    {
      pair: {
        en: 'Half-Covered Mirror or Convex Lens (`Black Paper Test — Ex Q9`)',
        hi: 'दर्पण या लेंस का आधा भाग काले कागज से ढकना (`अभ्यास Q9`)',
      },
      trap: {
        en: 'Thinking covering the lower half of a lens/mirror produces only half an image!',
        hi: 'सोचना कि आधा लेंस/दर्पण ढकने पर प्रतिबिंब भी आधा कट कर दिखेगा!',
      },
      truth: {
        en: '**FULL complete image is still formed** at the exact same position! Light from EVERY point of the object passes through the uncovered half too — **only image brightness/intensity decreases by half**!',
        hi: '**पूरा व पूर्ण प्रतिबिंब उसी स्थान पर बनता है!** वस्तु के प्रत्येक बिंदु से आने वाली किरणें खुले आधे भाग से भी गुजरती हैं — **केवल प्रतिबिंब की चमक/तीव्रता घटती है**!',
      },
    },
    {
      pair: {
        en: 'Optical Density vs Mass Density (`Kerosene vs Water — p.164`)',
        hi: 'प्रकाशिक घनत्व बनाम द्रव्यमान घनत्व (`किरोसिन व जल`)',
      },
      trap: {
        en: 'Thinking light travels slower in water (`1.0 g/cm³`) than kerosene (`0.8 g/cm³`) because water is heavier.',
        hi: 'पानी को भारी समझकर यह मान लेना कि पानी में प्रकाश किरोसिन से धीमा चलेगा!',
      },
      truth: {
        en: 'Light bending depends on **Refractive Index `n` (`optical density`)**, NOT mass density! **Kerosene (`n = 1.44`) is optically denser than Water (`n = 1.33`)**, so light travels **SLOWER in kerosene (`2.08×10⁸ m/s`)** than water (`2.25×10⁸ m/s`), even though kerosene floats on water!',
        hi: 'प्रकाश की चाल **अपवर्तनांक `n` (प्रकाशिक घनत्व)** पर निर्भर करती है, द्रव्यमान घनत्व पर नहीं! **किरोसिन (`n = 1.44`) जल (`1.33`) से प्रकाशिक सघन है**, अतः पानी पर तैरने के बावजूद किरोसिन में प्रकाश **अधिक धीमा** चलता है!',
      },
    },
    {
      pair: {
        en: 'Power in `cm` vs `metres` (`P = 1/f vs 100/f`) + `Ex Q6` Print Key Note',
        hi: 'डाइऑप्टर गणना में `f (cm)` गलती व `अभ्यास Q6` उत्तर कुंजी सावधानी',
      },
      trap: {
        en: 'Computing `P = 1 / (−25 cm) = −0.04 D` directly in centimetres!',
        hi: 'सीधे सेंटीमीटर में `1 / (−25) = −0.04 D` निकाल देना (RRB का प्रिय गलत विकल्प)!',
      },
      truth: {
        en: '**ALWAYS convert `f` to metres first (`or use P = 100 / f_cm`)**: `f = −25 cm = −0.25 m -> P = 100/(−25) = −4.0 D`! Also note on **NCERT Ex Q6 (reading tiny dictionary letters)**: real physics & RRB exams select **5 cm Convex Lens (`+20 D` strongest magnifier, option c)**, though some NCERT prints misprint `(b)`.',
        hi: '**सदैव `f` को मीटर में बदलें या `P = 100 / f(cm)` लगाएँ**: `−25 cm → 100/(−25) = −4 D`! साथ ही **NCERT अभ्यास Q6** (शब्दकोष के छोटे अक्षर पढ़ने हेतु): भौतिक विज्ञान व रेलवे परीक्षा में सही उत्तर **5 cm फोकस दूरी का उत्तल लेंस (विकल्प c, +20 D)** है (यद्यपि `jhsc1an.pdf` कुंजी में `6.(b)` मुद्रण त्रुटि छपी है)।',
      },
    },
  ],
  pioneers: [
    {
      name: { en: 'Willebrord Snellius (`1621 Snell’s Law`)', hi: 'विलेब्रोर्ड स्नेल (`1621 अपवर्तन का नियम`)' },
      country: { en: 'Dutch Astronomer & Mathematician', hi: 'डच गणितज्ञ व खगोलशास्त्री' },
      badge: { en: 'sin i / sin r = Constant (n₂₁)', hi: 'sin i / sin r = स्थिरांक (n₂₁)' },
      fact: {
        en: 'Formulated the exact trigonometric ratio linking angle of incidence `i` and angle of refraction `r` (`Eq 9.4`), forming the mathematical foundation of every lens, prism & optical fibre.',
        hi: 'आपतन कोण व अपवर्तन कोण की ज्या (`sine`) के बीच स्थिर अनुपात (`sin i / sin r = n₂₁`) स्थापित किया, जिस पर लेंस, प्रिज्म व ऑप्टिकल फाइबर आधारित हैं।',
      },
    },
    {
      name: { en: 'René Descartes (`New Cartesian Coordinate Sign System`)', hi: 'रेने देकार्ते (`नई कार्तीय चिह्न परिपाटी`)' },
      country: { en: 'French Mathematician & Philosopher', hi: 'फ्रांसीसी गणितज्ञ (निर्देशांक ज्यामिति के जनक)' },
      badge: { en: 'Origin at Pole P / Optical Centre O', hi: 'ध्रुव P / केंद्र O को मूल बिंदु (0,0)' },
      fact: {
        en: 'His 2D coordinate grid gives us NCERT’s New Cartesian Sign Convention (`−x` left, `+x` right, `+y` up, `−y` down) making `1/v ± 1/u = 1/f` universal across all mirrors and lenses!',
        hi: 'इनके 2D निर्देशांक अक्षों (`−x`, `+x`, `+y`, `−y`) से ही NCERT की नई कार्तीय चिह्न परिपाटी बनी, जिससे सभी दर्पणों व लेंसों के संख्यात्मक हल अचूक निकलते हैं!',
      },
    },
    {
      name: { en: 'Léon Foucault (`1862 Rotating Mirror Speed of Light`)', hi: 'लियों फूको (`1862 प्रकाश की सटीक चाल मापन`)' },
      country: { en: 'French Physicist • Rotating Mirror Apparatus', hi: 'फ्रांसीसी भौतिक विज्ञानी (NTPC PYQ!)' },
      badge: { en: 'Measured c ≈ 2.98×10⁸ m/s & Proved v_water < v_air', hi: 'जल में चाल वायु से कम सिद्ध की!' },
      fact: {
        en: 'Used a high-speed rotating mirror in 1862 (`asked in RRB NTPC 2025!`) to pin down the speed of light and proved experimentally that light slows down inside water (`confirming refractive index > 1`).',
        hi: '1862 में घूर्णी दर्पण उपकरण से प्रकाश की सटीक चाल मापी (`NTPC PYQ!`) और प्रयोग द्वारा सिद्ध किया कि जल में प्रकाश वायु से धीमा चलता है (`n > 1`)।',
      },
    },
    {
      name: { en: 'Agra Fort Optical Wall Mirror (`NCERT Act 9.6 Feature`)', hi: 'आगरा किला उत्तल दर्पण (`NCERT क्रियाकलाप 9.6`)' },
      country: { en: 'Historical Indian Optics Architecture', hi: 'भारतीय स्थापत्य एवं प्रकाशिकी अजूबा' },
      badge: { en: 'Full-Length Taj Mahal in One Tiny Convex Mirror!', hi: 'एक छोटे उत्तल दर्पण में संपूर्ण ताजमहल का प्रतिबिंब!' },
      fact: {
        en: 'Explicitly cited in NCERT Class 10 (`p.155`): a small curved convex mirror mounted on a wall inside Agra Fort captures the ENTIRE tall marble Taj Mahal upright in one frame (`something no flat mirror of that small size can do!`).',
        hi: 'NCERT पृ. 155 में विशेष उल्लेखित: आगरा किले की दीवार में लगा एक छोटा उत्तल दर्पण विशाल ताजमहल का **पूर्ण-लंबाई का सीधा प्रतिबिंब** एक साथ दिखाता है!',
      },
    },
  ],
  visualGallery: [
    {
      id: 'vis-solar-concave',
      figRef: { en: 'NCERT Sec 9.2.2 (Concave Mirror Solar Furnace Application)', hi: 'NCERT 9.2.2 — अवतल दर्पण: सौर भट्टी अनुप्रयोग' },
      title: { en: 'Parabolic Concave Solar Furnace Mirror Concentrating Sunlight onto Focus F', hi: 'सूर्य की समांतर किरणों को फोकस F पर केंद्रित करती विशाल अवतल सौर भट्टी' },
      imageUrl: '/ncert-notes/class10-phy-ch9/real/solar-concave.webp',
      hotspots: [
        { en: 'Concave surfaces converge distant parallel sunlight (`u = ∞ -> v = F`) producing intense thermal energy at the focal point.', hi: 'अवतल दर्पण अनंत से आने वाली समांतर सौर किरणों को मुख्य फोकस F पर अभिकेंद्रित कर अत्यधिक ऊष्मा उत्पन्न करता है।' },
      ],
    },
    {
      id: 'vis-convex-mirror',
      figRef: { en: 'NCERT Table 9.2 & Vehicle Rear-View Application (`p.155`)', hi: 'NCERT सारणी 9.2 — वाहन का उत्तल पश्‍च-दृश्य दर्पण' },
      title: { en: 'Split Vehicle Wing Mirror: Plane Mirror Top vs Convex Mirror Bottom (`Wide Field of View`)', hi: 'वाहन साइड मिरर: ऊपर समतल बनाम नीचे उत्तल दर्पण (विशाल दृष्टि क्षेत्र व सीधा-छोटा प्रतिबिंब)' },
      imageUrl: '/ncert-notes/class10-phy-ch9/real/convex-side-mirror.webp',
      hotspots: [
        { en: 'Lower convex mirror always keeps vehicles upright, diminished & fits far more traffic lane width than the upper plane glass.', hi: 'उत्तल दर्पण सदैव सीधा, छोटा प्रतिबिंब व बाहर की ओर वक्रता के कारण विशाल ट्रैफिक दृश्य क्षेत्र प्रदान करता है।' },
      ],
    },
    {
      id: 'vis-pencil-refraction',
      figRef: { en: 'NCERT Sec 9.3 (`p.160`) & Activities 9.7–9.8', hi: 'NCERT अनुभाग 9.3 (`पृ. 160`) व क्रियाकलाप 9.7–9.8' },
      title: { en: 'Pencil Partially Immersed in Water Appearing Bent & Displaced Due to Refraction', hi: 'जल में आंशिक डूबी पेंसिल का वायु-जल अंतरापृष्ठ पर मुड़ी तथा उठी हुई प्रतीत होना' },
      imageUrl: '/ncert-notes/class10-phy-ch9/real/pencil-water-refraction.webp',
      hotspots: [
        { en: 'Rays from underwater tip speed up and bend AWAY from normal entering air — fooling our eye into seeing a raised, bent pencil.', hi: 'पानी से वायु में आते समय किरण चाल बढ़कर अभिलंब से दूर मुड़ती है, जिससे डूबा हिस्सा ऊपर व टेढ़ा दिखता है।' },
      ],
    },
    {
      id: 'vis-convex-lens',
      figRef: { en: 'NCERT Table 9.4 & Activity 9.12 (`Real Inverted Image`)', hi: 'NCERT सारणी 9.4 व क्रियाकलाप 9.12 (उत्तल लेंस वास्तविक प्रतिबिंब)' },
      title: { en: 'Convex Lens Forming a Crisp Real & Inverted (`Upside-Down`) Diminished Image of Distant House', hi: 'उत्तल लेंस द्वारा दूर स्थित मकान का स्पष्ट वास्तविक व उलटा प्रतिबिंब' },
      imageUrl: '/ncert-notes/class10-phy-ch9/real/convex-lens-inverted.webp',
      hotspots: [
        { en: 'When object is beyond 2F₁, a converging lens forms a real, inverted (`m < 0`), smaller image between F₂ and 2F₂.', hi: 'बिंब 2F₁ से परे होने पर उत्तल लेंस F₂–2F₂ के बीच वास्तविक व उलटा (आकाश नीचे, छत ऊपर!) प्रतिबिंब बनाता है।' },
      ],
    },
    {
      id: 'vis-diamond',
      figRef: { en: 'NCERT Table 9.3 (`Highest Refractive Index n = 2.42`)', hi: 'NCERT सारणी 9.3 (`सर्वाधिक अपवर्तनांक हीरा n = 2.42`)' },
      title: { en: 'Cut Diamond (`n = 2.42`, Minimum Light Speed `1.24 × 10⁸ m/s`)', hi: 'हीरा (`n = 2.42`, प्रकाश की न्यूनतम चाल `1.24 × 10⁸ m/s`)' },
      imageUrl: '/ncert-notes/class10-phy-ch9/real/diamond-refraction.webp',
      hotspots: [
        { en: 'Highest material index in Table 9.3: light slows by 2.42× relative to vacuum (`v = 3×10⁸ / 2.42 ≈ 1.24×10⁸ m/s`).', hi: 'सारणी 9.3 में सर्वाधिक अपवर्तनांक `2.42` होने से इसमें प्रकाश की चाल निर्वात की तुलना में `2.42` गुना घट जाती है।' },
      ],
    },
  ],
  activities: [
    {
      num: '9.1',
      title: { en: 'Curved Shining Spoon — First-Hand Concave vs Convex Mirror (`p.149`)', hi: 'चमकदार चम्मच के दोनों पृष्ठों से अवतल व उत्तल दर्पण प्रतिबिंब तुलना (`पृ. 149`)' },
      materials: { en: 'Large clean curved shining stainless-steel spoon', hi: 'बड़ी चमकदार वक्रित स्टील की चम्मच' },
      steps: { en: 'Look at your face on the inner curved surface (`hollow side`) and slowly pull the spoon away; then flip to the outward bulging surface and repeat.', hi: 'चम्मच के अंदर धँसे पृष्ठ में चेहरा देख धीरे-धीरे दूर ले जाएं; फिर पलटकर उभरे बाहरी पृष्ठ पर दोहराएं।' },
      examTakeaway: { en: 'Inner hollow face = **Concave** (`erect when very close, flips INVERTED as you move away!`); Outer bulging face = **Convex** (`ALWAYS erect & smaller at any distance!`) — asked verbatim in **Tech Gr-III Shift 6**!', hi: 'अंदर धँसा भाग = **अवतल** (पास बड़ा-सीधा, दूर जाने पर **उलटा**!); उभरा भाग = **उत्तल** (**हर दूरी पर सदैव सीधा व छोटा**)! सीधे **Tech Gr-III** में पूछा गया!' },
      predictQuestion: {
        prompt: { en: 'When you pull the hollow front side of a spoon beyond its focal point away from your face, your image becomes:', hi: 'चम्मच के सामने वाले अंदरूनी भाग को चेहरे से दूर (`F` से आगे) ले जाने पर आपका प्रतिबिंब कैसा हो जाएगा?' },
        options: {
          en: ['Erect and enlarged forever', 'Inverted and real', 'Always virtual and diminished'],
          hi: ['सदैव सीधा व बड़ा', 'उलटा तथा वास्तविक (अवतल दर्पण गुण)', 'सदैव आभासी व छोटा'],
        },
        correctIndex: 1,
        reason: { en: 'Once face distance `u > f`, concave mirror switches from virtual-erect (`P–F`) to real-inverted!', hi: 'फोकस दूरी से बाहर आते ही अवतल दर्पण वास्तविक व उलटा प्रतिबिंब बना देता है।' },
      },
    },
    {
      num: '9.2',
      title: { en: 'Finding Concave Mirror Focal Length by Burning Paper with Sunlight (`p.150`)', hi: 'अवतल दर्पण से सूर्य प्रकाश संकेंद्रण कर फोकस दूरी ज्ञात करना (`पृ. 150`)' },
      materials: { en: 'Concave mirror, white sheet of paper, sunlight (`Warning: NEVER look directly at Sun!`)', hi: 'अवतल दर्पण, सफेद कागज (चेतावनी: सूर्य को सीधे न देखें)' },
      steps: { en: 'Direct parallel sunrays off a concave mirror onto paper until the sharpest, brightest tiny dot appears; hold steady for 2 minutes.', hi: 'अवतल दर्पण से परावर्तित सूर्य किरणों को कागज पर तीक्ष्ण चमकदार बिंदु आने तक आगे-पीछे समायोजित कर स्थिर रखें।' },
      examTakeaway: { en: 'The bright spot is a **real inverted tiny image of the Sun** at **Principal Focus `F`**; mirror-to-paper distance ≈ focal length `f`, and heat concentration ignites smoke/fire!', hi: 'कागज का चमकदार बिंदु **फोकस `F` पर बना सूर्य का वास्तविक, उलटा व बिंदुवत प्रतिबिंब** है (`दर्पण से दूरी ≈ फोकस दूरी f`), जिससे ऊष्मा संकेंद्रित होकर कागज सुलगने लगता है!' },
      predictQuestion: {
        prompt: { en: 'Sun rays converge to a bright spot `30 cm` in front of a concave mirror (`Tech Gr-III 2024`). Its focal length `f` & `R` are:', hi: 'सूर्य किरणें अवतल दर्पण के सामने `30 cm` पर केंद्रित होती हैं। दर्पण की `f` व `R` क्या है?' },
        options: {
          en: ['f = −15 cm, R = −30 cm', 'f = −30 cm, R = −60 cm', 'f = +30 cm, R = +60 cm'],
          hi: ['f = −15 cm, R = −30 cm', 'f = −30 cm, R = −60 cm', 'f = +30 cm, R = +60 cm'],
        },
        correctIndex: 1,
        reason: { en: 'Distant Sun rays focus at `f = −30 cm`, hence centre of curvature `R = 2f = −60 cm` (`where same-size image forms!`).', hi: 'सूर्य अनंत पर है, अतः संकेंद्रण बिंदु ही फोकस `f = −30 cm` और `R = 2f = −60 cm`!' },
      },
    },
    {
      num: '9.3',
      title: { en: 'Table-Line Optical Bench Experiment: All 6 Concave Mirror Positions (`p.151`)', hi: 'मेज पर चॉक-रेखा प्रयोग: अवतल दर्पण की सभी 6 स्थितियों का परदा परीक्षण (`पृ. 151`)' },
      materials: { en: 'Concave mirror (`known f`), stand, chalk lines at P, F, C (`PF = FC = f`), lit candle, paper screen', hi: 'अवतल दर्पण, मोमबत्ती, परदा व P, F, C चॉक रेखाएं (`PF = FC = f`)' },
      steps: { en: 'Place glowing candle sequentially far beyond C, at C, between F & C, at F, and between P & F; move paper screen to catch sharp images.', hi: 'जलती मोमबत्ती को क्रमशः `>C`, `C`, `C–F`, `F` व `P–F` पर रख परदे पर स्पष्ट प्रतिबिंब खोजें।' },
      examTakeaway: { en: '**Exactly ONE position fails to appear on screen**: when candle is between **`P & F`** (`Virtual & Erect behind mirror — look directly inside the mirror!`); at **`F`**, parallel rays yield no screen spot.', hi: '**`P व F` के बीच रखने पर प्रतिबिंब परदे पर कभी नहीं मिलता** क्योंकि वह दर्पण के पीछे **आभासी व सीधा** बनता है (सीधे दर्पण में दिखता है)!' },
      predictQuestion: {
        prompt: { en: 'In which candle position of Activity 9.3 can NO image be caught on the paper screen yet an enlarged upright flame is seen inside the mirror?', hi: 'किस स्थिति में मोमबत्ती का प्रतिबिंब परदे पर प्राप्त नहीं होगा, पर दर्पण के अंदर सीधा व बड़ा दिखेगा?' },
        options: {
          en: ['At C', 'Between C and F', 'Between P and F'],
          hi: ['C पर', 'C और F के बीच', 'P और F के बीच'],
        },
        correctIndex: 2,
        reason: { en: '`u < f` (`P–F` interval) produces an erect virtual magnified image behind the concave mirror.', hi: 'ध्रुव P व फोकस F के बीच रखने पर ही आभासी व सीधा बड़ा प्रतिबिंब दर्पण के पीछे बनता है।' },
      },
    },
    {
      num: '9.4',
      title: { en: 'Drawing 2-Ray Geometries Matching NCERT Table 9.1 (`p.154`)', hi: 'सारणी 9.1 की प्रत्येक स्थिति हेतु स्वच्छ किरण आरेख सत्यापन (`पृ. 154`)' },
      materials: { en: 'Compass, ruler, pencil, notebook (`any 2 of the 4 standard rays`)', hi: 'परकार, स्केल व सारणी 9.1 की 6 स्थितियाँ' },
      steps: { en: 'Construct scale ray diagrams using parallel/F/C/P rays and match intersections against Table 9.1 sizes & inversions.', hi: 'चार किरण नियमों में से किन्हीं दो किरणों का उपयोग कर सभी 6 प्रतिबिंबों की स्थिति व आकार जांचें।' },
      examTakeaway: { en: 'Moving object closer from `∞ -> F` pushes real image away `F -> ∞` and **monotonically enlarges `|m|`** (`asked in ALP 2025 Shift 1`).', hi: 'बिंब `∞` से `F` की ओर आने पर प्रतिबिंब दर्पण से दूर भागता जाता है और आकार में क्रमशः बड़ा होता जाता है (`ALP 2025 Shift 1` PYQ)!' },
      predictQuestion: {
        prompt: { en: 'Moving a candle from beyond C towards F of a concave mirror causes the real image to:', hi: 'बिंब को C से आगे (परे) से फोकस F की ओर लाने पर वास्तविक प्रतिबिंब में क्या परिवर्तन होता है?' },
        options: {
          en: ['Shrink and move towards F', 'Grow larger and move away from the mirror', 'Become erect immediately'],
          hi: ['छोटा होकर फोकस के करीब आता है', 'बड़ा होता जाता है और दर्पण से दूर भागता है', 'सीधा व आभासी हो जाता है'],
        },
        correctIndex: 1,
        reason: { en: 'As `|u|` shrinks toward `|f|`, `|v|` & magnification `|m|=v/u` grow rapidly (`ALP 2025`).', hi: 'वस्तु जैसे-जैसे फोकस की ओर बढ़ती है, प्रतिबिंब अनंत की ओर भागते हुए बड़ा होता जाता है।' },
      },
    },
    {
      num: '9.5',
      title: { en: 'Convex Mirror Pencil Test — Effect of Object Distance (`p.155`)', hi: 'उत्तल दर्पण पेंसिल प्रयोग: वस्तु को दूर ले जाने का प्रभाव (`पृ. 155`)' },
      materials: { en: 'Convex mirror (`in left hand`), upright pencil (`in right hand`)', hi: 'उत्तल दर्पण व सीधी खड़ी पेंसिल' },
      steps: { en: 'Hold pencil upright in front of convex mirror; observe orientation & size, then slowly move pencil farther away while watching whether the image approaches `F`.', hi: 'पेंसिल का प्रतिबिंब देखकर उसे धीरे-धीरे दर्पण से दूर ले जाएं और आकार व स्थिति में परिवर्तन देखें।' },
      examTakeaway: { en: 'Convex mirror ALWAYS yields an **erect, diminished** image; as pencil moves away (`u -> -∞`), the image **shrinks smaller and glides closer towards virtual Focus `F`** behind the mirror!', hi: 'पेंसिल दूर ले जाने पर उत्तल दर्पण का **सीधा प्रतिबिंब और छोटा होते हुए फोकस `F` के निकट** खिसकता जाता है (पर कभी उलटा नहीं होता)!' },
      predictQuestion: {
        prompt: { en: 'When an upright pencil is moved slowly farther away from a convex mirror, its image:', hi: 'उत्तल दर्पण से पेंसिल को धीरे-धीरे दूर ले जाने पर प्रतिबिंब पर क्या प्रभाव पड़ता है?' },
        options: {
          en: ['Turns inverted after C', 'Gets smaller and moves closer to Focus F behind mirror', 'Grows larger beyond 2F'],
          hi: ['C के बाद उलटा हो जाता है', 'अधिक छोटा होता है और फोकस F के निकट आ जाता है', 'अधिक बड़ा होकर 2F से दूर चला जाता है'],
        },
        correctIndex: 1,
        reason: { en: 'Moving `u -> −∞` drives convex mirror virtual image to the point focus `F` (`Table 9.2`).', hi: 'अधिक दूरी पर प्रतिबिंब आभासी बिंदु-आकार लेते हुए फोकस F के करीब पहुँचता है।' },
      },
    },
    {
      num: '9.6',
      title: { en: 'Full-Length Distant Tree Test Across Plane, Concave & Convex Mirrors (`p.155`)', hi: 'पूरे पेड़ का एक साथ पूर्ण प्रतिबिंब — समतल, अवतल व उत्तल तुलना (`पृ. 155`)' },
      materials: { en: 'Small Plane, Concave & Convex mirrors facing a tall distant tree or building', hi: 'समतल, अवतल व उत्तल छोटे दर्पण व सामने स्थित लंबा पेड़/भवन' },
      steps: { en: 'Try capturing the entire full-height image of a tall distant tree in small mirrors of all three types (`just like Agra Fort Taj Mahal mirror!`).', hi: 'तीनों छोटे दर्पणों में दूर खड़े पूरे ऊँचे पेड़ का पूर्ण-लंबाई प्रतिबिंब एक साथ देखने का प्रयास करें।' },
      examTakeaway: { en: 'ONLY a small **Convex Mirror** captures the full height upright cleanly (`widest field of view` due to outward curvature — **why cars use convex wing mirrors!**).', hi: 'केवल एक छोटा **उत्तल दर्पण** ही पूरे ऊँचे पेड़ या ताजमहल का **पूर्ण-लंबाई का सीधा प्रतिबिंब** दिखा पाता है — यही वाहन साइड मिरर में इसकी जीत का कारण है!' },
      predictQuestion: {
        prompt: { en: 'Why is a small convex mirror mounted in Agra Fort to view the entire Taj Mahal (`and on car sides`)?', hi: 'आगरा किले की दीवार व वाहनों में समतल की जगह उत्तल दर्पण को क्यों प्राथमिकता दी जाती है?' },
        options: {
          en: ['Magnifies distant objects', 'Forms always-erect image with much wider field of view', 'Eliminates lateral inversion'],
          hi: ['यह दूर की वस्तु को बड़ा दिखाता है', 'सदैव सीधा प्रतिबिंब एवं बाहर वक्रता से विशाल दृष्टि क्षेत्र देता है', 'पाश्‍वर् परिवर्तन समाप्त कर देता है'],
        },
        correctIndex: 1,
        reason: { en: 'Outward curvature bends peripheral rays into the eye, giving a wide upright field of view (`NCERT p.155`).', hi: 'बाहर की ओर उभरे पृष्ठ से दृष्टि क्षेत्र बहुत बढ़ जाता है और प्रतिबिंब हमेशा सीधा रहता है।' },
      },
    },
    {
      num: '9.7–9.8',
      title: { en: 'Coin-in-Bucket & Rising-Coin Bowl Refraction Experiment (`p.161`)', hi: 'बाल्टी व पानी भरे कटोरे में सिक्के का ऊपर उठा दिखाई देना (`क्रियाकलाप 9.7–9.8`)' },
      materials: { en: 'Coin, opaque shallow bowl, water jug', hi: 'एक सिक्का, उथला कटोरा व जल' },
      steps: { en: 'Place coin in empty bowl and step back until edge just hides the coin; keep eye still and let a friend pour water gently.', hi: 'कटोरे के किनारे से सिक्का ठीक ओझल होने तक पीछे हटें; आँख स्थिर रखकर जल भरें।' },
      examTakeaway: { en: 'Coin **reappears** as water pours in! Light leaving water (`denser -> air rarer`) bends **AWAY from normal**, making apparent depth look shallower than real depth!', hi: 'पानी डालते ही सिक्का पुनः दिखने लगता है क्योंकि पानी से वायु (`सघन → विरल`) में जाने वाली किरण **अभिलंब से दूर मुड़ती** है, जिससे तली व सिक्का ऊपर उठा आभास होता है!' },
      predictQuestion: {
        prompt: { en: 'A hidden coin in an empty cup reappears when water is poured because light rays leaving water:', hi: 'कटोरे में जल डालने पर अदृश्य सिक्का दिखने लगता है क्योंकि जल से वायु में निकलती किरणें:' },
        options: {
          en: ['Bend towards the normal', 'Bend away from the normal due to refraction', 'Undergo diffraction around bowl rim'],
          hi: ['अभिलंब की ओर झुकती हैं', 'अपवर्तन से अभिलंब से दूर हटकर हमारी आँख तक पहुँचती हैं', 'किनारे से विवर्तित होती हैं'],
        },
        correctIndex: 1,
        reason: { en: 'Denser -> rarer interface bends rays away from the normal, creating a raised virtual image (`Act 9.8`).', hi: 'सघन (जल) से विरल (वायु) में जाते समय अभिलंब से दूर हटने के कारण सिक्का ऊपर उठा दिखाई देता है।' },
      },
    },
    {
      num: '9.9–9.10',
      title: { en: 'Thick Ink Line & 4-Pin Rectangular Glass Slab Path Tracking (`p.161–162`)', hi: 'स्याही रेखा व 4 पिन द्वारा आयताकार काँच स्लैब अपवर्तन प्रयोग (`9.9–9.10`)' },
      materials: { en: 'Rectangular glass slab ABCD, 4 identical pins (E, F, G, H), white sheet, protractor', hi: 'आयताकार काँच का स्लैब ABCD, 4 ऑलपिन (E, F, G, H), सफेद कागज' },
      steps: { en: 'Trace slab ABCD, fix pins E–F obliquely on AB side, view through opposite face CD to align pins G–H collinearly, remove slab & connect ray path.', hi: 'स्लैब के एक तरफ पिन E,F गाड़ कर विपरीत फलक CD से देखते हुए G,H को एक सीध में लगाएँ और किरण आरेख मिलाएँ।' },
      examTakeaway: { en: '`E–F` (`incident`) is **parallel to `G–H` (`emergent`)** (`∠i = ∠e`), shifted sideways by **lateral displacement**; when slab sits **perpendicular (`90°`)** to an ink line (`Act 9.9`), **NO sideways bending occurs** — line only looks slightly raised!', hi: '**आपतित किरण `EF` और निर्गत किरण `GH` आपस में समांतर (`∠i = ∠e`)** रहती हैं और बस थोड़ा **पाश्‍विक विस्थापन** होता है; लंबवत (`90°`) रखने पर रेखा में कोई टेढ़ापन नहीं, केवल उठी हुई दिखती है!' },
      predictQuestion: {
        prompt: { en: 'When a rectangular glass slab lies over an ink line at `∠i = 0°` (`normal incidence`), the line under the slab:', hi: 'स्याही की रेखा पर काँच का स्लैब ठीक लंबवत (`∠i = 0°`) रखकर ऊपर से देखने पर रेखा कैसी दिखती है?' },
        options: {
          en: ['Bends sharply sideways', 'Appears slightly raised with zero lateral bending', 'Disappears completely'],
          hi: ['तेजी से टेढ़ी मुड़ती है', 'बिना मुड़े सीधी पर थोड़ी ऊपर उठी प्रतीत होती है', 'पूरी तरह अदृश्य हो जाती है'],
        },
        correctIndex: 1,
        reason: { en: 'At `∠i = 0°` (`sin 0° = 0 => ∠r = 0°`), ray enters unbent sideways, while vertical viewing still creates apparent shift (`Act 9.9`).', hi: 'अभिलंबवत आपतन पर बगल में कोई झुकाव नहीं होता, केवल ऊपर से आभासी उभार दिखता है।' },
      },
    },
    {
      num: '9.11–9.12',
      title: { en: 'Convex Lens Sun Paper Burn & 5-Line Optical Bench Cases (`p.166–167`)', hi: 'उत्तल लेंस से कागज जलाना व 2F₁–F₁–O–F₂–2F₂ प्रतिबिंब प्रयोग (`9.11–9.12`)' },
      materials: { en: 'Convex lens, lens stand, chalk (`5 lines: 2F₁, F₁, O, F₂, 2F₂`), candle, screen', hi: 'उत्तल लेंस, 5 समांतर चॉक रेखाएं (2F₁, F₁, O, F₂, 2F₂), मोमबत्ती, परदा' },
      steps: { en: 'First measure `f` by focusing sunlight onto paper until it smokes (`Act 9.11`); then test candle across `>2F₁`, `2F₁`, `F₁–2F₁`, `F₁` & `F₁–O` (`Act 9.12`).', hi: 'सूर्य प्रकाश से लगभग `f` निकालें (`9.11`); फिर सभी 5 स्थितियों पर मोमबत्ती रख परदे पर प्रतिबिंब मापें (`9.12`)।' },
      examTakeaway: { en: 'At **`2F₁`**: **Real, inverted, exact same size at `2F₂`**; between **`F₁` and `O`**: **NO screen image** — instead look THROUGH the lens to see a **Virtual, Erect, Enlarged (`magnifying glass`)** image on the same object side!', hi: '**`2F₁` पर रखने से दूसरी ओर `2F₂` पर समान आकार का वास्तविक-उलटा प्रतिबिंब**; **`F₁` व `O` के बीच रखने पर लेंस में सीधे देखने पर उसी ओर बड़ा व सीधा (आवर्धक लेंस)** दिखेगा!' },
      predictQuestion: {
        prompt: { en: 'A convex lens forms a real, inverted image of a needle `50 cm` away of exact SAME size as needle (`NCERT p.174`). Needle distance `u` and lens Power `P` are:', hi: 'उत्तल लेंस से सुई का समान आकार का वास्तविक उलटा प्रतिबिंब `50 cm` दूर बनता है। सुई की दूरी व लेंस की क्षमता क्या होगी?' },
        options: {
          en: ['u = −25 cm, P = +2 D', 'u = −50 cm (at 2F₁), P = +4.0 D', 'u = −100 cm, P = −4 D'],
          hi: ['u = −25 cm, P = +2 D', 'u = −50 cm (2F₁ पर), f = +25 cm, P = +4.0 D', 'u = −100 cm, P = −4 D'],
        },
        correctIndex: 1,
        reason: { en: 'Same-size real convex lens image occurs at `2F`: `|u| = |v| = 50 cm = 2f => f = +25 cm = +0.25 m => P = 1/0.25 = +4.0 D`!', hi: 'समान आकार तभी संभव है जब `u` व `v` दोनों `2f` (`50 cm`) पर हों, अतः `f = 25 cm = 0.25 m` और `P = +4.0 D`!' },
      },
    },
    {
      num: '9.13',
      title: { en: 'Concave Lens Bench Experiment — Why Image Never Reaches Screen (`p.168`)', hi: 'अवतल लेंस प्रयोग: क्या कभी परदे पर प्रतिबिंब बन सकता है? (`क्रियाकलाप 9.13`)' },
      materials: { en: 'Concave lens on stand, burning candle, screen', hi: 'अवतल लेंस, मोमबत्ती, परदा' },
      steps: { en: 'Place glowing candle at various distances in front of concave lens; try catching an image on screen behind it, then look through the lens directly.', hi: 'अवतल लेंस के सामने मोमबत्ती रख दूसरी तरफ परदे पर प्रतिबिंब लेने का प्रयास करें; विफल होने पर सीधे लेंस में देखें।' },
      examTakeaway: { en: 'Impossible to catch on screen! A diverging concave lens **ALWAYS forms a Virtual, Erect & Diminished image** between `F₁` & `O` (`approaching tiny dot at F₁ as candle goes far away`).', hi: 'अवतल लेंस परदे पर **कभी वास्तविक प्रतिबिंब नहीं बनाता**! बिंब कहीं भी रहे, यह **सदैव सीधा, आभासी व वस्तु से छोटा** ही बनता है!' },
      predictQuestion: {
        prompt: { en: 'As you move a burning candle very far (`towards infinity`) from a concave lens, the virtual image size:', hi: 'अवतल लेंस से मोमबत्ती को बहुत दूर ले जाने पर उसके आभासी प्रतिबिंब के आकार में क्या बदलाव आता है?' },
        options: {
          en: ['Grows larger and flips inverted', 'Shrinks further approaching a tiny point at F₁', 'Equals object height at 2F₁'],
          hi: ['बड़ा होकर उलटा हो जाता है', 'अत्यधिक छोटा होता हुआ फोकस F₁ के बिंदु आकार तक सिमट जाता है', '2F₁ पर समान आकार का हो जाता है'],
        },
        correctIndex: 1,
        reason: { en: 'Concave lens image always lies between `O` & `F₁` and shrinks down toward point size at `F₁` at infinity (`Table 9.5`).', hi: 'अवतल लेंस का प्रतिबिंब दूरी बढ़ने पर और छोटा होकर फोकस `F₁` की ओर सिमट जाता है।' },
      },
    },
  ],
  tables: [
    {
      id: 'table-9-1-concave-mirror',
      title: { en: 'NCERT Table 9.1 — Complete 6 Image Cases of a Concave Mirror (`Always Know Magnification Too!`)', hi: 'NCERT सारणी 9.1 — अवतल दर्पण द्वारा बनी सभी 6 स्थितियों की संपूर्ण तालिका' },
      headers: {
        en: ['Object Position', 'Image Position', 'Relative Size (`m`)', 'Nature of Image', 'Exam / Real Use'],
        hi: ['बिंब की स्थिति', 'प्रतिबिंब की स्थिति', 'आकार (`आवर्धन m`)', 'प्रतिबिंब की प्रकृति', 'उपयोग / परीक्षा नोट'],
      },
      rows: [
        [{ en: '1. At Infinity (`∞`)', hi: '1. अनंत पर (`∞`)' }, { en: 'At Focus `F` (`v = f`)', hi: 'फोकस `F` पर' }, { en: 'Highly diminished, point (`|m| << 1`)', hi: 'अत्यधिक छोटा, बिंदुवत' }, { en: 'Real & Inverted (`m < 0`)', hi: 'वास्तविक एवं उलटा' }, { en: 'Solar furnace focus dot (`Act 9.2`)', hi: 'सौर भट्टी व कागज जलाना' }],
        [{ en: '2. Beyond `C` (`u > 2f`)', hi: '2. `C` से परे (`u > 2f`)' }, { en: 'Between `F` & `C`', hi: '`F` तथा `C` के बीच' }, { en: 'Diminished (`-1 < m < 0`)', hi: 'छोटा (`-1 < m < 0`)' }, { en: 'Real & Inverted', hi: 'वास्तविक एवं उलटा' }, { en: 'Image smaller than object', hi: 'छोटा वास्तविक प्रतिबिंब' }],
        [{ en: '3. **At `C`** (`u = −2f`)', hi: '3. **`C` पर** (`u = −2f`)' }, { en: '**At `C`** (`v = −2f`)', hi: '**`C` पर ही** (`v = −2f`)' }, { en: '**Same Size (`m = −1`) ★**', hi: '**समान साइज़ (`m = −1`) ★**' }, { en: 'Real & Inverted', hi: 'वास्तविक एवं उलटा' }, { en: '**#1 RRB Favorite Case!**', hi: '**सर्वाधिक पूछा जाने वाला प्रश्न!**' }],
        [{ en: '4. Between `C` & `F`', hi: '4. `C` व `F` के बीच' }, { en: 'Beyond `C`', hi: '`C` से परे' }, { en: 'Enlarged (`m < −1`)', hi: 'विवर्धित / बड़ा (`m < −1`)' }, { en: 'Real & Inverted', hi: 'वास्तविक एवं उलटा' }, { en: 'Projector / Magnified screen', hi: 'परदे पर बड़ा वास्तविक प्रतिबिंब' }],
        [{ en: '5. At Focus `F`', hi: '5. फोकस `F` पर' }, { en: 'At Infinity (`∞`)', hi: 'अनंत पर (`∞`)' }, { en: 'Infinitely enlarged (`|m| -> ∞`)', hi: 'अत्यधिक बड़ा' }, { en: 'Real & Inverted (Parallel beam)', hi: 'वास्तविक उलटा (समांतर पुंज)' }, { en: '**Torch, Searchlight, Car Headlight**', hi: '**टॉर्च, सर्चलाइट व कार हेडलाइट**' }],
        [{ en: '6. **Between `P` & `F`** (`|u| < |f|`)', hi: '6. **`P` और `F` के बीच**' }, { en: '**Behind Mirror** (`v > 0`)', hi: '**दर्पण के पीछे (`v > 0`)**' }, { en: '**Enlarged (`m > +1`) ★**', hi: '**विवर्धित (`m > +1`) ★**' }, { en: '**Virtual & Erect**', hi: '**आभासी तथा सीधा ★**' }, { en: '**Dentist Mirror & Shaving Mirror**', hi: '**दंत चिकित्सक व शेविंग दर्पण**' }],
      ],
    },
    {
      id: 'table-9-2-convex-mirror',
      title: { en: 'NCERT Table 9.2 — Image Formation by a Convex Mirror (`Always Virtual, Erect & Diminished`)', hi: 'NCERT सारणी 9.2 — उत्तल दर्पण द्वारा निर्मित प्रतिबिंब (`सदैव आभासी, सीधा व छोटा`)' },
      headers: {
        en: ['Object Position', 'Image Position', 'Size (`m`)', 'Nature', 'Key Railway Takeaway'],
        hi: ['बिंब की स्थिति', 'प्रतिबिंब की स्थिति', 'साइज़ (`m`)', 'प्रकृति', 'प्रमुख परीक्षा निष्कर्ष'],
      },
      rows: [
        [{ en: '1. At Infinity (`∞`)', hi: '1. अनंत पर (`∞`)' }, { en: 'At Focus `F` **behind mirror**', hi: 'दर्पण के पीछे **फोकस `F` पर**' }, { en: 'Point-sized (`m -> +0`)', hi: 'अत्यधिक छोटा बिंदु आकार' }, { en: 'Virtual & Erect', hi: 'आभासी व सीधा' }, { en: 'Used to find virtual `f = +R/2` (`Shift 14 PYQ`)', hi: '`R = 50 cm → f = +25 cm` दर्पण के पीछे' }],
        [{ en: '2. Anywhere between `∞` & Pole `P`', hi: '2. `∞` और ध्रुव `P` के बीच कहीं भी' }, { en: 'Between `P` & `F` **behind mirror**', hi: 'दर्पण के पीछे **`P` व `F` के बीच**' }, { en: 'Diminished (`0 < m < +1`)', hi: 'छोटा (`0 < m < +1`)' }, { en: 'Virtual & Erect', hi: 'आभासी व सीधा' }, { en: '**Car Rear-View Wing Mirror & Traffic Security**', hi: '**वाहन पश्‍च-दृश्य व ट्रैफिक सुरक्षा दर्पण**' }],
      ],
    },
    {
      id: 'table-9-3-refractive-index',
      title: { en: 'NCERT Table 9.3 COMPLETE — Absolute Refractive Indices & Light Speeds (`c = 3×10⁸ m/s`)', hi: 'NCERT सारणी 9.3 संपूर्ण — विभिन्न माध्यमों का निरपेक्ष अपवर्तनांक (`n`) व प्रकाश चाल (`v = c/n`)' },
      headers: {
        en: ['Material Medium', 'Refractive Index (`n`)', 'Approx Speed `v` (`×10⁸ m/s`)', 'Optical Density Exam Note'],
        hi: ['द्रव्यात्मक माध्यम', 'अपवर्तनांक (`n`)', 'चाल `v = c/n` (`×10⁸ m/s`)', 'परीक्षा महत्व'],
      },
      rows: [
        [{ en: 'Air (`वायु`)', hi: 'वायु (`Air`)' }, { en: '**1.0003**', hi: '**1.0003**' }, { en: '`3.00` (`min n` in Table 9.3)', hi: '`3.00` (सारणी में न्यूनतम n)' }, { en: 'Lowest optical density in Table 9.3 (`fastest speed`)', hi: 'सारणी में सबसे कम अपवर्तनांक / सर्वाधिक चाल' }],
        [{ en: 'Ice (`बर्फ`)', hi: 'बर्फ (`Ice`)' }, { en: '1.31', hi: '1.31' }, { en: '`2.29`', hi: '`2.29`' }, { en: 'Slightly rarer optically than liquid water', hi: 'जल से थोड़ा प्रकाशिक विरल' }],
        [{ en: '**Water (`जल`) ★**', hi: '**जल (`Water`) ★**' }, { en: '**1.33** (`4/3`)', hi: '**1.33** (`4/3`)' }, { en: '`2.25`', hi: '`2.25`' }, { en: 'Fastest among Water/Kerosene/Turpentine (`p.165 Q4`)', hi: 'किरोसिन/तारपीन से तेज (`1.33×` धीमा)' }],
        [{ en: 'Alcohol (`एल्कोहल`)', hi: 'एल्कोहल' }, { en: '1.36', hi: '1.36' }, { en: '`2.21`', hi: '`2.21`' }, { en: 'Denser optically than water', hi: 'जल से प्रकाशिक सघन' }],
        [{ en: '**Kerosene (`किरोसिन`) ★**', hi: '**किरोसिन ★**' }, { en: '**1.44**', hi: '**1.44**' }, { en: '`2.08`', hi: '`2.08`' }, { en: 'Classic trap: lower mass density yet `n > 1.33`!', hi: 'जल पर तैरता है पर जल से अधिक अपवर्तनांक!' }],
        [{ en: 'Fused Quartz (`संगलित क्वार्ट्ज`)', hi: 'संगलित क्वार्ट्ज' }, { en: '1.46', hi: '1.46' }, { en: '`2.05`', hi: '`2.05`' }, { en: 'UV-transparent optical lab quartz', hi: 'प्रयोगशाला प्रकाशीय क्वार्ट्ज' }],
        [{ en: 'Turpentine Oil (`तारपीन तेल`)', hi: 'तारपीन का तेल' }, { en: '1.47', hi: '1.47' }, { en: '`2.04`', hi: '`2.04`' }, { en: 'Slower light than kerosene & water', hi: 'किरोसिन व जल दोनों से धीमा प्रकाश' }],
        [{ en: 'Benzene (`बेंजीन`)', hi: 'बेंजीन' }, { en: '1.50', hi: '1.50' }, { en: '`2.00`', hi: '`2.00`' }, { en: 'Matches standard glass `n = 1.50 -> v = 2×10⁸`', hi: '`n=1.5` पर चाल `2×10⁸ m/s`' }],
        [{ en: '**Crown Glass (`क्राउन काँच`)**', hi: '**क्राउन काँच**' }, { en: '**1.52**', hi: '**1.52**' }, { en: '`1.97`', hi: '`1.97`' }, { en: 'Standard optical spectacle & slab glass', hi: 'सामान्य काँच स्लैब व चश्मा लेंस' }],
        [{ en: 'Canada Balsam / Rock Salt', hi: 'कनाडा बालसम / खनिज नमक' }, { en: '1.53 / 1.54', hi: '1.53 / 1.54' }, { en: '`1.96 / 1.95`', hi: '`1.96 / 1.95`' }, { en: 'Microscope mounting resin / halite', hi: 'सूक्ष्मदर्शी स्लाइड गोंद / सेंधा नमक' }],
        [{ en: 'CS₂ (`कार्बन डाइसल्फाइड`)', hi: 'कार्बन डाइसल्फाइड' }, { en: '1.63', hi: '1.63' }, { en: '`1.84`', hi: '`1.84`' }, { en: 'High-dispersion dense organic solvent', hi: 'उच्च विक्षेपण द्रव' }],
        [{ en: 'Dense Flint Glass (`फ्लिंट काँच`)', hi: 'सघन फ्लिंट काँच' }, { en: '1.65', hi: '1.65' }, { en: '`1.82`', hi: '`1.82`' }, { en: 'Used in high-dispersion optical prisms', hi: 'प्रिज्म निर्माण का भारी काँच' }],
        [{ en: 'Ruby / Sapphire (`माणिक्य/नीलम`)', hi: 'रूबी / नीलम' }, { en: '1.71 / 1.77', hi: '1.71 / 1.77' }, { en: '`1.75 / 1.69`', hi: '`1.75 / 1.69`' }, { en: 'Corundum crystalline gemstones', hi: 'कठोर क्रिस्टलीय रत्न' }],
        [{ en: '**Diamond (`हीरा`) ★**', hi: '**हीरा (`Diamond`) ★**' }, { en: '**2.42** (`MAX!`)', hi: '**2.42** (`सर्वाधिक!`)' }, { en: '**`1.24`** (`MIN!`)', hi: '**`1.24`** (`न्यूनतम!`)' }, { en: '**Highest Table 9.3 `n` (`#1 Exam Numerical`)**', hi: '**सर्वाधिक अपवर्तनांक व सबसे धीमा प्रकाश (`1.24×10⁸ m/s`)**' }],
      ],
    },
    {
      id: 'table-9-4-convex-lens',
      title: { en: 'NCERT Table 9.4 — Complete 6 Image Cases of a Convex Lens (`+D Converging`)', hi: 'NCERT सारणी 9.4 — उत्तल लेंस द्वारा निर्मित प्रतिबिंब की सभी 6 स्थितियाँ' },
      headers: {
        en: ['Object Position', 'Image Position', 'Relative Size (`m`)', 'Nature', 'Quick Comparison with Mirrors'],
        hi: ['बिंब की स्थिति', 'प्रतिबिंब की स्थिति', 'साइज़ (`m`)', 'प्रकृति', 'दर्पण से समानता'],
      },
      rows: [
        [{ en: '1. At Infinity (`∞`)', hi: '1. अनंत पर (`∞`)' }, { en: 'At Focus `F₂`', hi: 'फोकस `F₂` पर' }, { en: 'Point-sized (`|m| << 1`)', hi: 'बिंदु आकार, अत्यधिक छोटा' }, { en: 'Real & Inverted', hi: 'वास्तविक व उलटा' }, { en: 'Sun focal paper-burn (`Act 9.11`)', hi: 'अवतल दर्पण स्थिति 1 समान' }],
        [{ en: '2. Beyond `2F₁`', hi: '2. `2F₁` से परे' }, { en: 'Between `F₂` & `2F₂`', hi: '`F₂` और `2F₂` के बीच' }, { en: 'Diminished (`-1 < m < 0`)', hi: 'छोटा' }, { en: 'Real & Inverted', hi: 'वास्तविक व उलटा' }, { en: 'Camera distant shot', hi: 'कैमरा व नेत्र दूर वस्तु' }],
        [{ en: '3. **At `2F₁`**', hi: '3. **`2F₁` पर**' }, { en: '**At `2F₂`**', hi: '**`2F₂` पर**' }, { en: '**Same Size (`m = −1`) ★**', hi: '**समान साइज़ (`m = −1`) ★**' }, { en: 'Real & Inverted', hi: 'वास्तविक व उलटा' }, { en: 'Concave Mirror `At C` analog!', hi: 'अवतल दर्पण `C` के समान!' }],
        [{ en: '4. Between `F₁` & `2F₁`', hi: '4. `F₁` व `2F₁` के बीच' }, { en: 'Beyond `2F₂`', hi: '`2F₂` से परे' }, { en: 'Enlarged (`m < −1`)', hi: 'बड़ा / विवर्धित' }, { en: 'Real & Inverted', hi: 'वास्तविक व उलटा' }, { en: 'Cinema / Slide projector', hi: 'सिनेमा व स्लाइड प्रोजेक्टर' }],
        [{ en: '5. At Focus `F₁`', hi: '5. फोकस `F₁` पर' }, { en: 'At Infinity (`∞`)', hi: 'अनंत पर' }, { en: 'Infinitely large', hi: 'अत्यधिक बड़ा' }, { en: 'Real & Inverted', hi: 'वास्तविक व उलटा' }, { en: 'Parallel light collimator', hi: 'अवतल दर्पण `F` समान' }],
        [{ en: '6. **Between `F₁` & `O` ★**', hi: '6. **`F₁` और `O` के बीच ★**' }, { en: '**Same side as object** (`v < 0`)', hi: '**बिंब की ही ओर (`v < 0`)**' }, { en: '**Enlarged (`m > +1`) ★**', hi: '**बड़ा (`m > +1`) ★**' }, { en: '**Virtual & Erect**', hi: '**आभासी व सीधा ★**' }, { en: '**Magnifier / Watchmaker / Dictionary `5cm`**', hi: '**आवर्धक लेंस व घड़ीसाज़ लेंस**' }],
      ],
    },
    {
      id: 'table-9-5-concave-lens',
      title: { en: 'NCERT Table 9.5 — Concave Lens Image Cases (`Always Virtual, Erect & Diminished`)', hi: 'NCERT सारणी 9.5 — अवतल लेंस द्वारा निर्मित प्रतिबिंब (`सदैव आभासी, सीधा व छोटा`)' },
      headers: {
        en: ['Object Position', 'Image Position', 'Relative Size', 'Nature of Image'],
        hi: ['बिंब की स्थिति', 'प्रतिबिंब की स्थिति', 'सापेक्ष साइज़', 'प्रतिबिंब की प्रकृति'],
      },
      rows: [
        [{ en: '1. At Infinity (`∞`)', hi: '1. अनंत पर (`∞`)' }, { en: 'At Focus `F₁` (same side)', hi: 'फोकस `F₁` पर (बिंब ओर)' }, { en: 'Highly diminished, point (`m -> +0`)', hi: 'अत्यधिक छोटा, बिंदुवत' }, { en: 'Virtual & Erect (`m > 0`)' , hi: 'आभासी तथा सीधा' }],
        [{ en: '2. Between `∞` & Optical Centre `O`', hi: '2. `∞` और `O` के बीच कहीं भी' }, { en: 'Between `F₁` & `O` (`same side`)', hi: '`F₁` और `O` के बीच (उसी ओर)' }, { en: 'Diminished (`0 < m < +1`)', hi: 'छोटा (`0 < m < +1`)' }, { en: 'Virtual & Erect (`Myopia lens!`)', hi: 'आभासी व सीधा (निकट दृष्टि चश्मा!)' }],
      ],
    },
    {
      id: 'table-9-6-formula-cheatsheet',
      title: { en: 'Railway Exam Master Formula & Sign Convention Sheet (`All 7 Equations in One Glance`)', hi: 'रेलवे परीक्षा महा-सत्र व चिह्न परिपाटी शीट (`सभी 7 सूत्र एक नजर में`)' },
      headers: {
        en: ['Physical Quantity', 'Mirror Formula / Value', 'Lens Formula / Value', 'Exam Caution'],
        hi: ['भौतिक राशि / सूत्र', 'गोलीय दर्पण हेतु', 'गोलीय लेंस हेतु', 'रेलवे परीक्षा सावधानी'],
      },
      rows: [
        [{ en: 'Radius & Focus (`R, f`)', hi: 'वक्रता व फोकस' }, { en: '`R = 2f` (`f = R/2`)', hi: '`R = 2f` (`f = R/2`)' }, { en: 'Two foci `F₁, F₂`; Optical Centre `O`', hi: 'दो फोकस `F₁, F₂` व केंद्र `O`' }, { en: 'Concave `f (−)` | Convex `f (+)` (BOTH!)', hi: 'अवतल `f (−)` | उत्तल `f (+)` (दोनों में!)' }],
        [{ en: 'Fundamental Equation', hi: 'मुख्य सूत्र' }, { en: '**`1/v + 1/u = 1/f`**', hi: '**`1/v + 1/u = 1/f`**' }, { en: '**`1/v − 1/u = 1/f`**', hi: '**`1/v − 1/u = 1/f`**' }, { en: '`u` is ALWAYS negative (`u < 0`)', hi: '`u` सदैव ऋणात्मक लिया जाता है' }],
        [{ en: 'Magnification (`m`)', hi: 'आवर्धन (`m`)' }, { en: '**`m = h’/h = −v/u`**', hi: '**`m = h’/h = −v/u`**' }, { en: '**`m = h’/h = +v/u`**', hi: '**`m = h’/h = +v/u`**' }, { en: '`−m` Real Inverted; `+m` Virtual Erect', hi: '`−m` वास्तविक-उलटा; `+m` आभासी-सीधा' }],
        [{ en: 'Lens Power (`D`) & Combo', hi: 'लेंस क्षमता व संयोजन' }, { en: 'Plane Mirror `P = 0 D`', hi: 'समतल दर्पण `P = 0 D`' }, { en: '**`P = 1/f(m) = 100/f(cm)`**; `P = P₁+P₂`', hi: '**`P = 1/f(m) = 100/f(cm)`**; `P = P₁+P₂`' }, { en: 'SI Unit `Dioptre (1 D = 1 m⁻¹)`', hi: 'फोकस दूरी सदैव मीटर में बदलें!' }],
        [{ en: 'Snell & Refractive Index', hi: 'स्नेल व अपवर्तनांक' }, { en: 'Law: `∠i = ∠r`', hi: 'परावर्तन: `∠i = ∠r`' }, { en: '**`n₂₁ = sin i/sin r = v₁/v₂`; `n = c/v`**', hi: '**`n₂₁ = sin i/sin r = v₁/v₂`; `n = c/v`**' }, { en: 'Unitless; Diamond max `2.42`', hi: 'मात्रकहीन; हीरा सर्वाधिक `2.42`' }],
      ],
    },
  ],
  inTextQuestions: [
    {
      num: 'p.156 Q1',
      q: { en: 'Define the principal focus of a concave mirror.', hi: 'अवतल दर्पण के मुख्य फोकस की परिभाषा लिखिए।' },
      a: { en: 'Light rays travelling parallel to the principal axis of a concave mirror, after reflection, actually converge/meet at a single point on the principal axis — this point is the **principal focus (`F`)** of the concave mirror (`f < 0`).', hi: 'अवतल दर्पण के मुख्य अक्ष के समांतर आपतित प्रकाश किरणें परावर्तन के पश्‍चात मुख्य अक्ष के जिस बिंदु पर वास्तव में मिलती (अभिसरित होती) हैं, उसे अवतल दर्पण का **मुख्य फोकस (`F`)** कहते हैं।' },
    },
    {
      num: 'p.156 Q2',
      q: { en: 'The radius of curvature of a spherical mirror is `20 cm`. What is its focal length?', hi: 'एक गोलीय दर्पण की वक्रता त्रिज्या `20 cm` है। इसकी फोकस दूरी क्या होगी?' },
      a: { en: 'Given `R = 20 cm`. Using **`R = 2f` -> `f = R / 2 = 20 / 2 = 10 cm`**.', hi: 'चूँकि छोटा द्वारक दर्पण हेतु **`f = R / 2`**, अतः **`f = 20 / 2 = 10 cm`**।' },
    },
    {
      num: 'p.156 Q3',
      q: { en: 'Name a mirror that can give an erect and enlarged image of an object.', hi: 'उस दर्पण का नाम बताइए, जो बिंब का सीधा तथा आवर्धित प्रतिबिंब बना सके।' },
      a: { en: '**Concave mirror (`अवतल दर्पण`)** — specifically when the object is placed **between its Pole `P` and Principal Focus `F`** (`Table 9.1 Case 6, m > +1`, used by dentists & for shaving!).', hi: '**अवतल दर्पण** — जब बिंब को इसके ध्रुव `P` और मुख्य फोकस `F` के बीच रखा जाए (`सारणी 9.1 स्थिति 6: आभासी, सीधा व विवर्धित`)!' },
    },
    {
      num: 'p.156 Q4',
      q: { en: 'Why do we prefer a convex mirror as a rear-view mirror in vehicles?', hi: 'हम वाहनों में उत्तल दर्पण को पश्‍च-दृश्य दर्पण के रूप में वरीयता क्यों देते हैं?' },
      a: { en: 'Two NCERT reasons: `(1)` It **ALWAYS produces an erect (though diminished) image** regardless of vehicle distance; `(2)` Because it curves outwards, it offers a **much wider field of view** than plane/concave mirrors, letting drivers monitor more traffic behind.', hi: 'दो कारण: `(1)` यह सदैव **सीधा** (यद्यपि छोटा) प्रतिबिंब बनाता है; `(2)` बाहर की ओर वक्रित होने से इसका **दृष्टि-क्षेत्र (Field of View) बहुत अधिक** होता है जिससे पीछे का विशाल यातायात सुरक्षित दिखता है।' },
    },
    {
      num: 'p.159 Q1',
      q: { en: 'Find the focal length of a convex mirror whose radius of curvature is `32 cm`.', hi: 'उस उत्तल दर्पण की फोकस दूरी ज्ञात कीजिए, जिसकी वक्रता-त्रिज्या `32 cm` है।' },
      a: { en: 'For a convex mirror, `R = +32 cm`. Therefore **`f = R / 2 = +32 / 2 = +16 cm`**.', hi: 'उत्तल दर्पण की वक्रता त्रिज्या `R = +32 cm`, अतः फोकस दूरी **`f = R / 2 = +32 / 2 = +16 cm`**।' },
    },
    {
      num: 'p.159 Q2',
      q: { en: 'A concave mirror produces three times magnified (enlarged) real image of an object placed at `10 cm` in front of it. Where is the image located?', hi: 'कोई अवतल दर्पण आमने-सामने `10 cm` की दूरी पर रखे किसी बिंब का तीन गुणा आवर्धित (बड़ा) वास्तविक प्रतिबिंब बनाता है। प्रतिबिंब दर्पण से कितनी दूरी पर है?' },
      a: { en: 'Given `u = −10 cm`; **real & magnified `3x` => `m = −3` (`negative for real inverted!`)**. Since `m = −v / u` -> `−3 = −v / (−10)` -> **`v = −30 cm`** (`30 cm in front of mirror on object side`).', hi: 'दिया है `u = −10 cm` और वास्तविक 3 गुना बड़ा होने से **`m = −3`**। सूत्र `m = −v/u` से `−3 = −v/(−10)` `→` **`v = −30 cm`** (दर्पण के सामने `30 cm` की दूरी पर)।' },
    },
    {
      num: 'p.165 Q1',
      q: { en: 'A ray of light travelling in air enters obliquely into water. Does the light ray bend towards the normal or away from the normal? Why?', hi: 'वायु में गमन करती प्रकाश की एक किरण जल में तिरछी प्रवेश करती है। क्या प्रकाश किरण अभिलंब की ओर झुकेगी अथवा अभिलंब से दूर हटेगी? बताइए क्यों?' },
      a: { en: 'It bends **TOWARDS the normal**, because water (`n = 1.33`) is **optically denser** than air (`n = 1.0003`), so light’s speed decreases upon entering water.', hi: 'यह **अभिलंब की ओर झुकेगी**, क्योंकि जल (`n = 1.33`) वायु (`1.0003`) की अपेक्षा **प्रकाशिक सघन** माध्यम है तथा इसमें प्रवेश करने पर प्रकाश की चाल घट जाती है।' },
    },
    {
      num: 'p.165 Q2',
      q: { en: 'Light enters from air to glass having refractive index `1.50`. What is the speed of light in the glass? (`c = 3 × 10⁸ m/s`)', hi: 'प्रकाश वायु से `1.50` अपवर्तनांक की काँच की प्लेट में प्रवेश करता है। काँच में प्रकाश की चाल कितनी है? (निर्वात में चाल `3 × 10⁸ m/s`)' },
      a: { en: 'Using `n = c / v` -> **`v = c / n = (3 × 10⁸) / 1.50 = 2.0 × 10⁸ m/s`** (`remember this exact number!`).', hi: 'सूत्र `n = c / v` से **`v = (3 × 10⁸) / 1.50 = 2 × 10⁸ m/s`**।' },
    },
    {
      num: 'p.165 Q3',
      q: { en: 'Find out, from Table 9.3, the medium having highest optical density. Also find the medium with lowest optical density.', hi: 'सारणी 9.3 से अधिकतम प्रकाशिक घनत्व के माध्यम तथा न्यूनतम प्रकाशिक घनत्व के माध्यम को ज्ञात कीजिए।' },
      a: { en: 'Optical density rises directly with refractive index `n`: **Highest optical density = Diamond (`n = 2.42`)**; **Lowest optical density = Air (`n = 1.0003`)**.', hi: 'अधिक अपवर्तनांक = अधिक प्रकाशिक घनत्व: **अधिकतम = हीरा (`n = 2.42`)**; **न्यूनतम = वायु (`n = 1.0003`)**।' },
    },
    {
      num: 'p.165 Q4',
      q: { en: 'You are given kerosene, turpentine and water. In which of these does the light travel fastest? Use Table 9.3.', hi: 'आपको किरोसिन, तारपीन का तेल तथा जल दिए गए हैं। इनमें से किसमें प्रकाश सबसे अधिक तीव्र गति से चलता है? सारणी 9.3 का उपयोग कीजिए।' },
      a: { en: 'Light travels **FASTEST in the medium with lowest refractive index `n`** (`since v = c/n`): Water `1.33` < Kerosene `1.44` < Turpentine `1.47` -> **Water (`2.25 × 10⁸ m/s`)**!', hi: '`v = c/n` के अनुसार सबसे कम `n` वाले माध्यम में चाल सर्वाधिक होगी: जल (`1.33`) < किरोसिन (`1.44`) < तारपीन (`1.47`), अतः प्रकाश **जल में सबसे तेज** चलेगा!' },
    },
    {
      num: 'p.165 Q5',
      q: { en: 'The refractive index of diamond is `2.42`. What is the meaning of this statement?', hi: 'हीरे का अपवर्तनांक `2.42` है। इस कथन का क्या अभिप्राय है?' },
      a: { en: 'It means the **ratio of speed of light in air/vacuum to the speed of light in diamond is `2.42`** (`or light travels 2.42 times slower in diamond, ~1.24 × 10⁸ m/s, than in vacuum`).', hi: 'इसका अर्थ है कि **वायु/निर्वात में प्रकाश की चाल और हीरे में प्रकाश की चाल का अनुपात `2.42` है** (अर्थात हीरे में प्रकाश की चाल निर्वात से `2.42` गुना घट कर `≈ 1.24 × 10⁸ m/s` हो जाती है)।' },
    },
    {
      num: 'p.174 Q1',
      q: { en: 'Define 1 dioptre of power of a lens.', hi: 'किसी लेंस की 1 डाइऑप्टर क्षमता को परिभाषित कीजिए।' },
      a: { en: '**1 Dioptre (`1 D = 1 m⁻¹`)** is the power of a lens whose **focal length is strictly `1 metre`** (`convex +1 D, concave −1 D`).', hi: '**1 डाइऑप्टर (`1 D = 1 m⁻¹`)** उस लेंस की क्षमता है जिसकी **फोकस दूरी `1 मीटर`** हो।' },
    },
    {
      num: 'p.174 Q2',
      q: { en: 'A convex lens forms a real and inverted image of a needle at a distance of `50 cm` from it. Where is the needle placed in front of the convex lens if the image is equal to the size of the object? Also, find the power of the lens.', hi: 'कोई उत्तल लेंस किसी सुई का वास्तविक तथा उलटा प्रतिबिंब उस लेंस से `50 cm` दूर बनाता है। सुई कहाँ रखी है यदि प्रतिबिंब समान साइज का है? लेंस की क्षमता भी ज्ञात कीजिए।' },
      a: { en: 'Equal-size real inverted image by convex lens happens only at `2F₁ -> 2F₂` (`m = −1 => v = −u`). Since `v = +50 cm`, needle is at **`u = −50 cm` (`50 cm in front`)**; and `2f = 50 cm` -> **`f = +25 cm = +0.25 m`** -> **`P = 1 / 0.25 = +4.0 D`**!', hi: 'उत्तल लेंस समान साइज़ का वास्तविक प्रतिबिंब `2F` पर बनाता है: अतः `v = +50 cm = 2f` होने से सुई **`u = −50 cm`** (सामने `50 cm` पर) रखी है। अतः **`f = +25 cm = +0.25 m`**, और क्षमता **`P = 1/0.25 = +4.0 D`**!' },
    },
    {
      num: 'p.174 Q3',
      q: { en: 'Find the power of a concave lens of focal length `2 m`.', hi: '`2 m` फोकस दूरी वाले किसी अवतल लेंस की क्षमता ज्ञात कीजिए।' },
      a: { en: 'Concave lens has negative focal length: `f = −2 m`. Therefore **`P = 1 / f = 1 / (−2) = −0.5 D`**.', hi: 'अवतल लेंस की फोकस दूरी `f = −2 m`। अतः क्षमता **`P = 1 / (−2) = −0.5 D`**।' },
    },
  ],
  exercises: [
    {
      num: 1,
      q: { en: 'Which one of the following materials cannot be used to make a lens? (a) Water (b) Glass (c) Plastic (d) Clay', hi: 'निम्न में से कौन-सा पदार्थ लेंस बनाने के लिए प्रयुक्त नहीं किया जा सकता? (a) जल (b) काँच (c) प्लास्टिक (d) मिट्टी' },
      a: { en: '**(d) Clay (`मिट्टी`)** — Verified against official NCERT Answer Key (`jhsc1an.pdf`). A lens requires a **transparent medium** allowing refraction; clay is completely opaque!', hi: '**(d) मिट्टी** (`आधिकारिक NCERT उत्तरमाला सत्यापित`) — लेंस हेतु प्रकाश आर-पार गुजरने वाला पारदर्शी पदार्थ चाहिए, जबकि मिट्टी अपारदर्शी है।' },
    },
    {
      num: 2,
      q: { en: 'The image formed by a concave mirror is observed to be virtual, erect and larger than the object. Where should be the position of the object? (a) Between F and C (b) At C (c) Beyond C (d) Between pole P and principal focus F', hi: 'किसी बिंब का अवतल दर्पण द्वारा बना प्रतिबिंब आभासी, सीधा तथा बिंब से बड़ा पाया गया। वस्तु की स्थिति कहाँ होनी चाहिए? (a) F और C के बीच (b) C पर (c) C से परे (d) ध्रुव P तथा मुख्य फोकस F के बीच' },
      a: { en: '**(d) Between pole `P` and principal focus `F`** (`jhsc1an.pdf` verified). This is Table 9.1 Case 6 (`dentist & shaving mirror zone`).', hi: '**(d) दर्पण के ध्रुव तथा मुख्य फोकस के बीच** (`आधिकारिक उत्तरमाला सत्यापित` — सारणी 9.1 स्थिति 6)!' },
    },
    {
      num: 3,
      q: { en: 'Where should an object be placed in front of a convex lens to get a real image of the size of the object? (a) At F (b) At twice the focal length (c) At ∞ (d) Between O and F', hi: 'किसी बिंब का वास्तविक तथा समान साइज़ का प्रतिबिंब प्राप्त करने के लिए बिंब को उत्तल लेंस के सामने कहाँ रखें? (a) फोकस पर (b) फोकस दूरी की दोगुनी दूरी पर (c) अनंत पर (d) O और F के बीच' },
      a: { en: '**(b) At twice the focal length (`2F₁`)** (`jhsc1an.pdf` verified). Object at `2F₁` produces real inverted image of exact same size at `2F₂`.', hi: '**(b) फोकस दूरी की दोगुनी दूरी पर (`2F₁`)** (`आधिकारिक उत्तरमाला सत्यापित`)।' },
    },
    {
      num: 4,
      q: { en: 'A spherical mirror and a thin spherical lens have each a focal length of `−15 cm`. The mirror and the lens are likely to be: (a) both concave (b) both convex (c) mirror concave, lens convex (d) mirror convex, lens concave', hi: 'किसी गोलीय दर्पण तथा किसी पतले गोलीय लेंस दोनों की फोकस दूरियाँ `−15 cm` हैं। दर्पण तथा लेंस संभवतः हैं: (a) दोनों अवतल (b) दोनों उत्तल (c) दर्पण अवतल, लेंस उत्तल (d) दर्पण उत्तल, लेंस अवतल' },
      a: { en: '**(a) Both concave (`दोनों अवतल`)** (`jhsc1an.pdf` verified). Under Cartesian sign convention, **both Concave Mirror and Concave Lens have negative focal length (`f < 0`)**!', hi: '**(a) दोनों अवतल** (`आधिकारिक उत्तरमाला सत्यापित`) — कार्तीय परिपाटी में अवतल दर्पण व अवतल लेंस दोनों की फोकस दूरी ऋणात्मक (`f < 0`) होती है।' },
    },
    {
      num: 5,
      q: { en: 'No matter how far you stand from a mirror, your image appears erect. The mirror is likely to be: (a) only plane (b) only concave (c) only convex (d) either plane or convex', hi: 'किसी दर्पण से आप चाहे कितनी ही दूरी पर खड़े हों, आपका प्रतिबिंब सदैव सीधा प्रतीत होता है। संभवतः दर्पण है: (a) केवल समतल (b) केवल अवतल (c) केवल उत्तल (d) या तो समतल अथवा उत्तल' },
      a: { en: '**(d) Either plane or convex (`या तो समतल अथवा उत्तल`)** (`jhsc1an.pdf` verified). Both plane (`m = +1`) and convex (`0 < m < +1`) mirrors ALWAYS form virtual erect images at any distance.', hi: '**(d) या तो समतल अथवा उत्तल** (`आधिकारिक उत्तरमाला सत्यापित`) — दोनों सदैव आभासी व सीधा प्रतिबिंब बनाते हैं।' },
    },
    {
      num: 6,
      q: { en: 'Which of the following lenses would you prefer to use while reading small letters found in a dictionary? (a) Convex `50 cm` (b) Concave `50 cm` (c) Convex `5 cm` (d) Concave `5 cm`', hi: 'किसी शब्दकोष में पाए गए छोटे अक्षरों को पढ़ते समय आप निम्नलिखित में से कौन-सा लेंस पसंद करेंगे? (a) `50 cm` उत्तल (b) `50 cm` अवतल (c) `5 cm` उत्तल (d) `5 cm` अवतल' },
      a: { en: '**(c) A convex lens of focal length `5 cm`** (`+20 D` strongest magnifying power! Concave lenses always diminish text). *Exam Alert: Note that the raw `jhsc1an.pdf` 2026-27 print carries an old misprint `(b)`, whereas CBSE & RRB exams strictly award **`(c) 5 cm convex lens`**!*', hi: '**(c) `5 cm` फोकस दूरी का एक उत्तल लेंस** — अक्षर बड़ा दिखाने हेतु अभिसारी उत्तल लेंस चाहिए व छोटी `f` (`5 cm`, क्षमता `+20 D`) अधिक आवर्धन देती है। *नोट: `jhsc1an.pdf` उत्तरमाला में मुद्रण त्रुटि `(b)` छपी है पर भौतिक विज्ञान व रेलवे परीक्षा में अचूक सही उत्तर `(c)` है!*' },
    },
    {
      num: 7,
      q: { en: 'We wish to obtain an erect image of an object, using a concave mirror of focal length `15 cm`. What should be the range of distance of the object from the mirror? What is the nature of the image? Is it larger or smaller than the object?', hi: '`15 cm` फोकस दूरी के एक अवतल दर्पण का उपयोग करके हम किसी बिंब का सीधा प्रतिबिंब बनाना चाहते हैं। बिंब का दर्पण से दूरी का परिसर क्या होना चाहिए? प्रतिबिंब की प्रकृति, आकार व किरण आरेख बताइए।' },
      a: { en: '(`jhsc1an.pdf`: **distance `< 15 cm`; virtual; magnified**): Place the object **between Pole `P` and Focus `F`**, i.e., **distance `> 0 cm` and `< 15 cm`** in front of the mirror (`Table 9.1 Case 6`). Image nature = **Virtual and Erect** (behind mirror), Size = **Larger (magnified)** than object.', hi: '(`jhsc1an.pdf`: **दूरी `15 cm` से कम; आभासी; विवर्धित**): बिंब को ध्रुव `P` व फोकस `F` के बीच अर्थात **दर्पण से `0 cm` से `15 cm` से कम दूरी** पर रखना होगा। प्रतिबिंब **आभासी, सीधा तथा वस्तु से बड़ा** (दर्पण के पीछे) बनेगा।' },
    },
    {
      num: 8,
      q: { en: 'Name the type of mirror used in: (a) Headlights of a car (b) Side/rear-view mirror of a vehicle (c) Solar furnace. Support with reason.', hi: 'निम्नलिखित स्थितियों में प्रयुक्त दर्पण का प्रकार कारण सहित बताइए: (a) कार का अग्र-दीप (हेडलाइट) (b) वाहन का पाश्‍वर्/पश्‍च-दृश्य दर्पण (c) सौर भट्टी।' },
      a: { en: '**(a) Headlights: Concave mirror** — bulb at `F` reflects out as a powerful **parallel beam** lighting far ahead. **(b) Side/rear-view: Convex mirror** — always forms an **erect image** and provides a **much wider field of view**. **(c) Solar furnace: Large Concave mirror** — converges parallel Sun rays cleanly onto **Focus `F`**, generating intense heat!', hi: '**(a) कार हेडलाइट: अवतल दर्पण** (फोकस `F` पर स्थित बल्ब से शक्तिशाली **समांतर किरण पुंज** मिलता है); **(b) वाहन पश्‍च-दृश्य: उत्तल दर्पण** (सदैव **सीधा प्रतिबिंब** व विशाल **दृष्टि क्षेत्र**); **(c) सौर भट्टी: बड़ा अवतल दर्पण** (सूर्य की समांतर किरणों को `F` पर केंद्रित कर उच्च ताप पैदा करने हेतु)।' },
    },
    {
      num: 9,
      q: { en: 'One-half of a convex lens is covered with a black paper. Will this lens produce a complete image of the object? Verify and explain.', hi: 'किसी उत्तल लेंस का आधा भाग काले कागज से ढक दिया गया है। क्या यह लेंस किसी बिंब का पूरा प्रतिबिंब बना पाएगा? व्याख्या कीजिए।' },
      a: { en: '**Yes (`हाँ` — verified in `jhsc1an.pdf`)!** Covering half a lens blocks only half the rays, NOT any part of the object: rays from **every point of the object still pass through the uncovered half** and converge cleanly to form the **FULL complete image** — only its **brightness/intensity drops to half**!', hi: '**हाँ (`jhsc1an.pdf` सत्यापित)!** आधा लेंस ढकने पर भी वस्तु के **प्रत्येक भाग से आने वाली किरणें खुले आधे भाग से अपवर्तित होकर संपूर्ण प्रतिबिंब बनाती हैं**; अंतर केवल इतना होता है कि **प्रतिबिंब की तीव्रता/चमक घट (आधी) जाती है**!' },
    },
    {
      num: 10,
      q: { en: 'An object `5 cm` in length is held `25 cm` away from a converging lens of focal length `10 cm`. Find the position, size and nature of the image formed.', hi: '`5 cm` लंबा कोई बिंब `10 cm` फोकस दूरी के किसी अभिसारी लेंस से `25 cm` दूरी पर रखा जाता है। प्रतिबिंब की स्थिति, साइज़ तथा प्रकृति ज्ञात कीजिए।' },
      a: { en: 'Given `h = +5 cm`, `u = −25 cm`, converging `f = +10 cm`. Lens Formula `1/v = 1/f + 1/u = 1/10 + 1/(−25) = (5 − 2)/50 = 3/50` -> **`v = +50/3 = +16.67 cm` (`16.7 cm on opposite side`, matches `jhsc1an`)**! Magnification `m = v/u = (50/3)/(−25) = −2/3` -> **`h’ = m·h = (−2/3)×5 = −3.33 cm`** (`3.3 cm, diminished`). Nature: **Real & Inverted** (`between F₂ & 2F₂`).', hi: 'अभिसारी लेंस `f = +10 cm`, `u = −25 cm`, `h = +5 cm`। लेंस सूत्र से `1/v = 1/10 − 1/25 = 3/50` `→` **`v = +16.67 cm` (`16.7 cm लेंस के दूसरी ओर`)**। `m = v/u = (50/3)/(−25) = −2/3`, अतः **`h’ = 5 × (−2/3) = −3.33 cm`** (`3.3 cm`, बिंब से छोटा, **वास्तविक एवं उलटा**)।' },
    },
    {
      num: 11,
      q: { en: 'A concave lens of focal length `15 cm` forms an image `10 cm` from the lens. How far is the object placed from the lens?', hi: '`15 cm` फोकस दूरी का कोई अवतल लेंस किसी बिंब का प्रतिबिंब लेंस से `10 cm` दूरी पर बनाता है। बिंब लेंस से कितनी दूरी पर स्थित है?' },
      a: { en: 'Concave lens always forms virtual image on object side: `f = −15 cm`, `v = −10 cm`. Using `1/u = 1/v − 1/f = 1/(−10) − 1/(−15) = −3/30 + 2/30 = −1/30` -> **`u = −30 cm`** (`30 cm in front of lens`, matches `jhsc1an`)!', hi: 'अवतल लेंस में `f = −15 cm`, `v = −10 cm`। सूत्र `1/u = 1/v − 1/f = −1/10 + 1/15 = −1/30` `→` **`u = −30 cm`** (बिंब लेंस के सामने **`30 cm`** पर रखा है)।' },
    },
    {
      num: 12,
      q: { en: 'An object is placed at a distance of `10 cm` from a convex mirror of focal length `15 cm`. Find the position and nature of the image.', hi: '`15 cm` फोकस दूरी के किसी उत्तल दर्पण से कोई बिंब `10 cm` दूरी पर रखा है। प्रतिबिंब की स्थिति तथा प्रकृति ज्ञात कीजिए।' },
      a: { en: 'Convex mirror: `f = +15 cm`, `u = −10 cm`. Mirror formula: `1/v = 1/f − 1/u = 1/15 − 1/(−10) = (2 + 3)/30 = 5/30 = 1/6` -> **`v = +6.0 cm` behind the mirror** (`matches jhsc1an`). `m = −v/u = −6/(−10) = +0.6` -> **Virtual, Erect & Diminished**!', hi: 'उत्तल दर्पण `f = +15 cm`, `u = −10 cm`। दर्पण सूत्र से `1/v = 1/15 + 1/10 = 5/30 = 1/6` `→` **`v = +6.0 cm` (दर्पण के पीछे)**; `m = +0.6` अतः **आभासी, सीधा व छोटा**!' },
    },
    {
      num: 13,
      q: { en: 'The magnification produced by a plane mirror is `+1`. What does this mean?', hi: 'एक समतल दर्पण द्वारा उत्पन्न आवर्धन `+1` है। इसका क्या अर्थ है?' },
      a: { en: '(`jhsc1an.pdf` Q13): **`|m| = 1`** means **image size equals object size (`h’ = h`)**; **`+` sign** means **image is virtual and erect** (formed symmetrically behind the plane mirror)!', hi: '(`jhsc1an.pdf` Q13): **`|m| = 1`** दर्शाता है कि प्रतिबिंब का साइज़ **बिंब के साइज़ के बराबर** (`h’ = h`) है, और **`+` चिह्न** दर्शाता है कि प्रतिबिंब **आभासी तथा सीधा** है!' },
    },
    {
      num: 14,
      q: { en: 'An object `5.0 cm` in length is placed at `20 cm` in front of a convex mirror of radius of curvature `30 cm`. Find the position of image, its nature and size.', hi: '`5.0 cm` लंबाई का कोई बिंब `30 cm` वक्रता त्रिज्या के किसी उत्तल दर्पण के सामने `20 cm` दूरी पर रखा गया है। प्रतिबिंब की स्थिति, प्रकृति तथा साइज़ ज्ञात कीजिए।' },
      a: { en: '`h = +5.0 cm`, `u = −20 cm`, `R = +30 cm => f = +15 cm`. Mirror Formula: `1/v = 1/15 + 1/20 = 7/60` -> **`v = +60/7 = +8.57 cm` (`≈ 8.6 cm` behind mirror)**. `h’ = h·(−v/u) = 5 × (60/7)/20 = +15/7 = +2.14 cm` (*note: textbook key rounds to `2.2 cm`*!). Nature: **Virtual, Erect & Diminished**.', hi: '`h = +5.0 cm`, `u = −20 cm`, `f = R/2 = +15 cm`। `1/v = 1/15 + 1/20 = 7/60` `→` **`v = +8.57 cm` (`≈ 8.6 cm` दर्पण के पीछे)**। `h’ = 5 × (+8.57)/20 = +2.14 cm` (*NCERT उत्तरमाला में `2.2 cm` सन्निकट*) — **आभासी, सीधा व बिंब से छोटा**!' },
    },
    {
      num: 15,
      q: { en: 'An object of size `7.0 cm` is placed at `27 cm` in front of a concave mirror of focal length `18 cm`. At what distance from the mirror should a screen be placed for a sharp focused image? Find size and nature.', hi: '`7.0 cm` साइज़ का कोई बिंब `18 cm` फोकस दूरी के अवतल दर्पण के सामने `27 cm` दूरी पर रखा है। परदे को कितनी दूरी पर रखें? प्रतिबिंब का साइज़ व प्रकृति बताइए।' },
      a: { en: '`h = +7.0 cm`, `u = −27 cm`, concave `f = −18 cm`. Mirror formula: `1/v = 1/(−18) − 1/(−27) = (−3 + 2)/54 = −1/54` -> **`v = −54 cm` (`screen placed 54 cm on object side`, `jhsc1an` Q15)**! `m = −(−54)/(−27) = −2` -> **`h’ = −2 × 7 = −14.0 cm` (`Real, Inverted & Enlarged 2×`)**!', hi: '`h = +7.0 cm`, `u = −27 cm`, `f = −18 cm`। `1/v = −1/18 + 1/27 = −1/54` `→` **`v = −54 cm`** (परदा बिंब की ओर `54 cm` दूर)। `m = −(−54)/(−27) = −2` `→` **`h’ = −14.0 cm`** (**आवर्धित, वास्तविक व उलटा**)! ' },
    },
    {
      num: 16,
      q: { en: 'Find the focal length of a lens of power `−2.0 D`. What type of lens is this?', hi: 'उस लेंस की फोकस दूरी ज्ञात कीजिए, जिसकी क्षमता `−2.0 D` है। यह किस प्रकार का लेंस है?' },
      a: { en: '`f = 1 / P = 1 / (−2.0) = −0.50 m` (`−50 cm`, matches `jhsc1an` Q16). Because `f` & `P` are **negative**, it is a **Concave (diverging) lens (`अवतल लेंस`)**!', hi: '`f = 1/P = 1/(−2.0) = −0.50 m` (`−50 cm`, `jhsc1an` Q16)। ऋणात्मक चिह्न होने से यह **अवतल (अपसारी) लेंस** है!' },
    },
    {
      num: 17,
      q: { en: 'A doctor has prescribed a corrective lens of power `+1.5 D`. Find the focal length of the lens. Is the prescribed lens diverging or converging?', hi: 'कोई डॉक्टर `+1.5 D` क्षमता का संशोधक लेंस निर्धारित करता है। लेंस की फोकस दूरी ज्ञात कीजिए। यह अभिसारी है अथवा अपसारी?' },
      a: { en: '`f = 1 / P = 1 / (+1.5) = +2/3 = +0.67 m` (`+66.7 cm`, matches `jhsc1an` Q17). Positive `f & P` means it is a **Converging (Convex) lens (`अभिसारी / उत्तल लेंस`)**!', hi: '`f = 1/(+1.5) = +0.67 m` (`+66.7 cm`, `jhsc1an` Q17)। धनात्मक चिह्न से यह **अभिसारी (उत्तल) लेंस** है!' },
    },
  ],
  flashcards: [
    { front: { en: 'Relation between Radius of Curvature `R` & Focal Length `f`?', hi: 'गोलीय दर्पण में वक्रता त्रिज्या `R` व फोकस दूरी `f` में संबंध?' }, back: { en: 'R = 2f (so f = R / 2; midpoint between P and C)!', hi: 'R = 2f (या f = R / 2; F ठीक P और C के बीच में स्थित)!' } },
    { front: { en: 'Which mirror/lens ALWAYS gives a Virtual, Erect & Diminished image?', hi: 'कौन-से दर्पण और लेंस सदैव आभासी, सीधा व छोटा प्रतिबिंब बनाते हैं?' }, back: { en: 'Convex Mirror & Concave Lens (both give 0 < m < +1 always)!', hi: 'उत्तल दर्पण (Convex Mirror) व अवतल लेंस (Concave Lens)!' } },
    { front: { en: 'Object position for Virtual, Erect & MAGNIFIED image in Concave Mirror & Convex Lens?', hi: 'अवतल दर्पण व उत्तल लेंस में आभासी, सीधा व बड़ा (विवर्धित) प्रतिबिंब कब बनता है?' }, back: { en: 'Inside Focus (`P–F` for concave mirror; `O–F₁` for convex lens)!', hi: 'फोकस के भीतर (`P–F` दर्पण / `O–F₁` लेंस) -> दंत चिकित्सक व मैग्नीफायर!' } },
    { front: { en: 'Sign of `f` for Concave vs Convex (BOTH Mirrors AND Lenses)?', hi: 'अवतल व उत्तल की फोकस दूरी `f` का कार्तीय चिह्न (दर्पण व लेंस दोनों)?' }, back: { en: 'Concave (Mirror & Lens) = NEGATIVE (−); Convex (Mirror & Lens) = POSITIVE (+)!', hi: 'दोनों अवतल की `f = (−)` | दोनों उत्तल की `f = (+)`! (बिंब `u` हमेशा `−`!)' } },
    { front: { en: 'Compare Mirror Formula + `m` vs Lens Formula + `m`!', hi: 'दर्पण सूत्र/आवर्धन बनाम लेंस सूत्र/आवर्धन में चिह्न अंतर?' }, back: { en: 'Mirror: 1/v + 1/u = 1/f & m = −v/u | Lens: 1/v − 1/u = 1/f & m = +v/u!', hi: 'दर्पण में (+) तो m = −v/u | लेंस में (−) तो m = +v/u!' } },
    { front: { en: 'Effect of covering HALF of a convex lens or concave mirror with black paper?', hi: 'लेंस या दर्पण का आधा भाग काले कागज से ढक देने पर प्रतिबिंब पर क्या प्रभाव?' }, back: { en: 'FULL image still forms at same spot; ONLY intensity/brightness reduces!', hi: 'पूरा प्रतिबिंब उसी स्थान पर बनता है, बस उसकी चमक/तीव्रता घट जाती है!' } },
    { front: { en: 'SI Unit of Refractive Index `n` + Max `n` material (`Table 9.3`)?', hi: 'अपवर्तनांक `n` का मात्रक क्या है व सर्वाधिक `n` किसका है?' }, back: { en: 'Unitless! Max `n` = Diamond (`2.42`, speed ≈ 1.24×10⁸ m/s)!', hi: 'मात्रकहीन! सर्वाधिक = हीरा (`2.42`, चाल `1.24×10⁸ m/s`)!' } },
    { front: { en: 'Which ray passes UNDEVIATED through a thin spherical lens?', hi: 'पतले लेंस के किस बिंदु से गुजरने वाली किरण बिना मुड़े सीधी निकलती है?' }, back: { en: 'Ray passing through Optical Centre `O` (`Fig 9.15`)!', hi: 'प्रकाशिक केंद्र `O` से गुजरने वाली किरण!' } },
    { front: { en: 'SI Unit & formula for Power of a Lens (`with P = +4.5D and diverging 3D combo`)?', hi: 'लेंस क्षमता का मात्रक व संपर्क संयोजन सूत्र (`P₁ + P₂`)?' }, back: { en: 'Dioptre (`D = 1/f in m = 100/f_cm`); Combo = +4.5 + (−3.0) = +1.5 D!', hi: 'डाइऑप्टर (`1 D = 1 m⁻¹`); संयोजन: `P = P₁ + P₂` (`+4.5 − 3.0 = +1.5 D`)!' } },
    { front: { en: 'Why is Kerosene (`n = 1.44`) optically denser than Water (`n = 1.33`) yet floats on water?', hi: 'किरोसिन पानी पर तैरता है फिर भी पानी से प्रकाशिक सघन क्यों कहलाता है?' }, back: { en: 'Optical density = `n` (`higher n slows light more`), independent of mass density!', hi: 'प्रकाशिक घनत्व अपवर्तनांक `n` (`1.44 > 1.33`) से तय होता है, द्रव्यमान घनत्व से नहीं!' } },
  ],
  pyqBank: [
    {
      id: 'pyq-light-1',
      examTag: 'RRB Tech Gr-III 2024 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Act 9.1): Spoon Curved Mirror',
      question: {
        en: 'When you look at the front side of a table spoon, an inverted image of yours is formed. The front side of table spoon works as a:',
        hi: 'जब आप चम्मच के सामने वाले भाग को देखते हैं, तो चम्मच में आपका एक उलटा प्रतिबिंब बनता है। चम्मच का सामने वाला भाग ________ की तरह कार्य करता है?',
      },
      options: {
        en: ['plane mirror', 'concave lens', 'convex mirror', 'concave mirror'],
        hi: ['समतल दर्पण', 'अवतल लेंस', 'उत्तल दर्पण', 'अवतल दर्पण'],
      },
      correctIndex: 3,
      solution: {
        en: 'Direct NCERT **Activity 9.1**: inward hollow side curves inwards like a **concave mirror** (forming an inverted real image once your face is outside focus `F`)!',
        hi: 'सीधा NCERT **क्रियाकलाप 9.1**: चम्मच का अंदरूनी धँसा भाग **अवतल दर्पण** की तरह कार्य करता है (`F` से बाहर होने पर उलटा प्रतिबिंब बनता है)।',
      },
    },
    {
      id: 'pyq-light-2',
      examTag: 'RRB Tech Gr-III 2024 Shift 4',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Sec 9.2): R = 2f Formula',
      question: {
        en: 'The focal length of a spherical mirror is 12 cm, then the radius of curvature of this mirror will be:',
        hi: 'एक गोलीय दर्पण की फोकस दूरी 12 cm है, तो इस दर्पण की वक्रता त्रिज्या क्या होगी?',
      },
      options: {
        en: ['24 cm', '3 cm', '2 cm', '6 cm'],
        hi: ['24 cm', '3 cm', '2 cm', '6 cm'],
      },
      correctIndex: 0,
      solution: {
        en: 'Using **`R = 2f = 2 × 12 = 24 cm`** (`NCERT Sec 9.2`).',
        hi: 'सूत्र **`R = 2f = 2 × 12 = 24 cm`**!',
      },
    },
    {
      id: 'pyq-light-3',
      examTag: 'RRB Group D 2025 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9: Convex Mirror Focus Distance',
      question: {
        en: 'A convex mirror has a radius of curvature of 50 cm. A parallel beam of light strikes the mirror. At what distance from the pole does the reflected beam appear to diverge?',
        hi: 'एक उत्तल दर्पण की वक्रता त्रिज्या 50 cm है। प्रकाश की एक समांतर किरण-पुंज दर्पण पर पड़ती है। परावर्तित किरण-पुंज, ध्रुव से कितनी दूरी पर अपसारित होती हुई प्रतीत होती है?',
      },
      options: {
        en: ['10 cm behind the mirror', '25 cm behind the mirror', '25 cm in front of the mirror', '50 cm in front of the mirror'],
        hi: ['दर्पण के पीछे 10 cm', 'दर्पण के पीछे 25 cm', 'दर्पण के सामने 25 cm', 'दर्पण के सामने 50 cm'],
      },
      correctIndex: 1,
      solution: {
        en: 'Parallel rays diverge from Principal Focus `F`: **`f = +R/2 = +50/2 = +25 cm`** (`+` sign places it **25 cm behind the convex mirror**)!',
        hi: 'समांतर किरणें मुख्य फोकस `F` से अपसरित प्रतीत होती हैं: **`f = +R/2 = +25 cm`** अर्थात **दर्पण के पीछे `25 cm`**!',
      },
    },
    {
      id: 'pyq-light-4',
      examTag: 'RRB Tech Gr-III 2024 Shift 22',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Sec 9.2.3): Focal Length Sign',
      question: {
        en: 'Which mirror has negative focal length?',
        hi: 'किस दर्पण की फोकस दूरी ऋणात्मक होती है?',
      },
      options: {
        en: ['Concave', 'Plane mirror', 'Convex', 'Both convex and concave'],
        hi: ['अवतल', 'समतल दर्पण', 'उत्तल', 'उत्तल और अवतल दोनों'],
      },
      correctIndex: 0,
      solution: {
        en: 'Principal focus of a **Concave mirror** lies on the left (`−x`, reflecting side) -> **`f < 0`**, whereas convex is `+` and plane mirror has `f = ∞`.',
        hi: '**अवतल दर्पण** का मुख्य फोकस बाईं ओर (`−x` दिशा) में स्थित होता है, अतः **`f` ऋणात्मक** होती है।',
      },
    },
    {
      id: 'pyq-light-5',
      examTag: 'RRB ALP 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9: Concave Mirror Uses',
      question: {
        en: 'A concave mirror is used in torches and car headlights because it:',
        hi: 'टॉर्च और कार की हेडलाइट में अवतल दर्पण का उपयोग किया जाता है क्योंकि यह _______ ।',
      },
      options: {
        en: ['Always forms virtual images', 'Reduces the brightness of light', 'Scatters light in all directions', 'Can produce a parallel beam of light'],
        hi: ['सदैव आभासी प्रतिबिंब निर्मित करता है', 'प्रकाश की द्युति को कम करता है', 'प्रकाश को सभी दिशाओं में प्रकीर्णित करता है', 'प्रकाश की एक समानांतर किरण पुंज उत्पन्न कर सकता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Placing the bulb at focus `F` of a concave reflector sends out a **powerful parallel beam of light** (`NCERT Sec 9.2.2 Uses`).',
        hi: 'अवतल दर्पण के फोकस `F` पर बल्ब रखने से परावर्तन के बाद **प्रकाश का शक्तिशाली समांतर किरण पुंज** आगे जाता है (`NCERT पृ. 154`)।',
      },
    },
    {
      id: 'pyq-light-6',
      examTag: 'RRB Tech Gr-III 2024 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Table 9.1): Same-Size Image',
      question: {
        en: 'Where should the object be placed around the concave mirror to ensure that the size of the image is the same as the size of the object?',
        hi: 'यह सुनिश्चित करने के लिए कि प्रतिबिंब का आकार वस्तु के आकार के समान है, अवतल दर्पण के आस-पास वस्तु को कहां रखा जाना चाहिए?',
      },
      options: {
        en: ['At C, centre of curvature', 'Between focus F and pole P', 'At focus F', 'Between focus F and centre of curvature C'],
        hi: ['वक्रता केंद्र C पर', 'फोकस F और ध्रुव P के बीच', 'फोकस F पर', 'फोकस F और वक्रता केंद्र C के बीच'],
      },
      correctIndex: 0,
      solution: {
        en: '**At Centre of Curvature `C`** (`u = −2f`), the image forms **at `C` itself (`v = −2f`)**, exact same size (`m = −1`), real & inverted (`Table 9.1 Case 3`).',
        hi: '**वक्रता केंद्र `C` पर** रखने से प्रतिबिंब भी `C` पर ही **समान आकार (`m = −1`)**, वास्तविक व उलटा बनता है!',
      },
    },
    {
      id: 'pyq-light-7',
      examTag: 'RRB Tech Gr-III 2024 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Act 9.2 + R=2f)',
      question: {
        en: 'Rays of the Sun converge at a point of 30 cm in front of a concave mirror. Where should the object be placed so that the size of the image is equal to the size of the object?',
        hi: 'सूर्य की किरणें एक अवतल दर्पण के सामने 30 cm के बिंदु पर अभिसरित होती हैं। वस्तु को कहां रखा जाना चाहिए ताकि प्रतिबिंब का साइज़ बिंब के साइज़ के बराबर हो?',
      },
      options: {
        en: ['Between 30 and 60 cm in front of the mirror', '30 cm in front of the mirror', 'More than 30 cm in front of the mirror', '60 cm in front of the mirror'],
        hi: ['दर्पण के सामने 30 से 60 cm के बीच', 'दर्पण के सामने 30 cm पर', 'दर्पण के सामने 30 cm से अधिक दूरी पर', 'दर्पण के सामने 60 cm पर'],
      },
      correctIndex: 3,
      solution: {
        en: 'Sun convergence gives **`f = 30 cm`**. Equal-size image occurs at `C`, i.e., **`R = 2f = 2 × 30 = 60 cm in front of the mirror`**!',
        hi: 'सूर्य संकेंद्रण बिंदु से **`f = 30 cm`** मिला। समान आकार के लिए बिंब को `C = 2f = 2 × 30 =` **`60 cm` पर** रखना होगा!',
      },
    },
    {
      id: 'pyq-light-8',
      examTag: 'RRB ALP 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Table 9.1): Image Shift Trend',
      question: {
        en: 'If an object is moved from beyond the center of curvature towards the focus in front of a concave mirror, the image _______.',
        hi: 'यदि किसी बिंब को वक्रता केंद्र से आगे अवतल दर्पण के सामने फोकस की ओर ले जाया जाता है, तो प्रतिबिंब __________।',
      },
      options: {
        en: ['becomes larger and moves away from the mirror', 'becomes smaller and moves closer to the mirror', 'becomes virtual and moves towards the mirror', 'remains the same size and position'],
        hi: ['बड़ा हो जाता है और दर्पण से दूर चला जाता है', 'छोटा हो जाता है और दर्पण के करीब चला जाता है', 'आभासी हो जाता है और दर्पण की ओर चला जाता है', 'उसी आकार और स्थिति में रहता है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Table 9.1 sequence: `>C -> C -> C–F` marches the real image outward (`F–C -> C -> >C`) while steadily **enlarging** it!',
        hi: 'बिंब के फोकस `F` की ओर आने पर प्रतिबिंब लगातार **बड़ा होते हुए दर्पण से दूर (अनंत की ओर)** चला जाता है (`सारणी 9.1`)!',
      },
    },
    {
      id: 'pyq-light-9',
      examTag: 'RRB Group D 2025 Shift 43',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9: Dentist Concave Mirror P–F',
      question: {
        en: 'A dentist uses a concave mirror of focal length 20 cm to examine a patient’s tooth. If the tooth is placed 5 cm from the mirror, what is the magnification produced?',
        hi: 'एक दंत-चिकित्सक 20 cm फोकस दूरी वाले अवतल दर्पण का उपयोग करके एक मरीज के दांत की जांच करता है। यदि दांत, दर्पण से 5 cm की दूरी पर स्थित हो, तो उत्पन्न आवर्धन कितना होगा?',
      },
      options: {
        en: ['1.33', '0.75', '0.5', '1.67'],
        hi: ['1.33', '0.75', '0.5', '1.67'],
      },
      correctIndex: 0,
      solution: {
        en: '`f = −20 cm`, `u = −5 cm`. `1/v = 1/(−20) − 1/(−5) = 3/20` -> `v = +20/3 cm`. Magnification **`m = −v/u = −(20/3)/(−5) = +4/3 = +1.33`** (`erect enlarged tooth view!`).',
        hi: '`f = −20 cm`, `u = −5 cm`। `1/v = −1/20 + 1/5 = 3/20` `→` `v = +20/3 cm`। आवर्धन **`m = −v/u = +4/3 = +1.33`**!',
      },
    },
    {
      id: 'pyq-light-10',
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Ex Q9 Principle): Partially Covered Mirror',
      question: {
        en: 'An object is placed at the center of curvature of a concave mirror. If the mirror is now partially covered with an opaque material, what change will occur in the image?',
        hi: 'अवतल दर्पण के वक्रता केंद्र पर एक वस्तु रखी है। यदि दर्पण को अब एक अपारदर्शी पदार्थ से आंशिक रूप से ढक दिया जाए, तो प्रतिबिंब में क्या बदलाव आएगा?',
      },
      options: {
        en: ['The image will disappear completely', 'The image will remain at the same position but will become less bright', 'The image will shift closer to the mirror and become smaller', 'The image will move farther from the mirror and become inverted'],
        hi: ['प्रतिबिंब पूरी तरह से लुप्त हो जाएगा।', 'प्रतिबिंब अपनी जगह पर ही रहेगा, लेकिन धुंधला (कम चमकीला) हो जाएगा।', 'प्रतिबिंब दर्पण के करीब आ जाएगा और छोटा हो जाएगा।', 'प्रतिबिंब दर्पण से अधिक दूर चला जाएगा और उल्टा हो जाएगा।'],
      },
      correctIndex: 1,
      solution: {
        en: 'Same principle as **NCERT Ex Q9**: full image still forms at `C` using rays off the uncovered surface, ONLY **brightness decreases**!',
        hi: 'संपूर्ण प्रतिबिंब उसी स्थान पर (खुले हिस्से से परावर्तित किरणों द्वारा) बनेगा, केवल उसकी **चमक/तीव्रता कम हो जाएगी**!',
      },
    },
    {
      id: 'pyq-light-11',
      examTag: 'RRB ALP 2025 Shift 4',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Table 9.2): Convex Mirror Image',
      question: {
        en: 'If an object is placed between infinity and the pole (P) in front of a convex mirror, what type of image will be formed?',
        hi: 'यदि किसी उत्तल दर्पण के सामने अनंत और ध्रुव (P) के बीच एक वस्तु रखी जाए, तो किस प्रकार का प्रतिबिंब बनेगा?',
      },
      options: {
        en: ['Virtual, erect, and diminished (smaller in size)', 'Real, erect, and same size as the object', 'Real, inverted, and diminished', 'Real, inverted, and enlarged'],
        hi: ['आभासी, सीधा और छोटा (साइज़ में छोटा)', 'वास्तविक, सीधा, और वस्तु के समान साइज़', 'वास्तविक, उल्टा और छोटा', 'वास्तविक, उल्टा और विवर्धित'],
      },
      correctIndex: 0,
      solution: {
        en: 'Direct **NCERT Table 9.2**: a convex mirror ALWAYS produces a **virtual, erect and diminished** image between `P` and `F`!',
        hi: 'सीधा **सारणी 9.2**: उत्तल दर्पण सदैव **आभासी, सीधा और छोटा** प्रतिबिंब बनाता है!',
      },
    },
    {
      id: 'pyq-light-12',
      examTag: 'RRB Group D 2025 Shift 29',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Ex 9.1): Convex Mirror Numerical',
      question: {
        en: 'A traffic surveillance camera uses a convex mirror with a radius of curvature of 2 m. Where will the image of a car located 3 m from the mirror appear?',
        hi: 'यातायात निगरानी कैमरा में 2 m वक्रता त्रिज्या वाले उत्तल दर्पण का उपयोग किया जाता है। दर्पण से 3 m दूरी पर स्थित कार का प्रतिबिंब कहाँ दिखाई देगा?',
      },
      options: {
        en: ['0.12 m in front of the mirror', '0.75 m behind the mirror', '3 m in front of the mirror', '3 m behind the mirror'],
        hi: ['दर्पण के सामने 0.12 m', 'दर्पण के पीछे 0.75 m', 'दर्पण के सामने 3 m', 'दर्पण के पीछे 3 m'],
      },
      correctIndex: 1,
      solution: {
        en: '`f = +R/2 = +1.0 m`, `u = −3.0 m`. Mirror Formula: `1/v = 1/1 − 1/(−3) = 4/3` -> **`v = +3/4 = +0.75 m` (`0.75 m behind mirror`)**!',
        hi: '`f = +1 m`, `u = −3 m`। `1/v = 1/1 + 1/3 = 4/3` `→` **`v = +0.75 m` (दर्पण के पीछे)**!',
      },
    },
    {
      id: 'pyq-light-13',
      examTag: 'RRB Group D 2025 Shift 15',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Sec 9.2.3): Cartesian Sign of u',
      question: {
        en: 'When measuring the object distance for a spherical mirror, as per the New Cartesian Sign Convention, which sign is assigned if the object is placed in front of the mirror?',
        hi: 'गोलीय दर्पण के लिए नई कार्तीय चिह्न परिपाटी के अनुसार, यदि वस्तु दर्पण के सामने स्थित हो, तो वस्तु दूरी के लिए कौन-सा चिह्न निर्धारित किया जाता है?',
      },
      options: {
        en: ['No sign is assigned', 'Variable sign is assigned', 'Positive sign is assigned', 'Negative sign is assigned'],
        hi: ['कोई चिह्न निर्धारित नहीं किया जाता है', 'परिवर्ती चिह्न निर्धारित किया जाता है', 'धनात्मक चिह्न निर्धारित किया जाता है', 'ऋणात्मक चिह्न निर्धारित किया जाता है'],
      },
      correctIndex: 3,
      solution: {
        en: 'Object always sits on the left of Pole `P` (`against incident light direction`) -> **`u` is ALWAYS negative (`−ve`)**!',
        hi: 'बिंब सदा दर्पण के बाईं ओर (`−x`) रखा जाता है, अतः बिंब दूरी **`u` सदैव ऋणात्मक** होती है।',
      },
    },
    {
      id: 'pyq-light-14',
      examTag: 'RRB Group D 2025 Shift 11',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Sec 9.2.4): Mirror Magnification',
      question: {
        en: 'A student places an object 15 cm in front of a concave mirror of focal length 10 cm. If the image formed is real, what is the magnification produced by the mirror?',
        hi: 'कोई विद्यार्थी 10 cm फोकस दूरी के किसी अवतल दर्पण के सामने 15 cm दूरी पर एक बिंब रखता है। यदि बनने वाला प्रतिबिंब वास्तविक है, तो दर्पण द्वारा उत्पन्न आवर्धन कितना है?',
      },
      options: {
        en: ['−2', '−1', '+ 1', '+ 2'],
        hi: ['−2', '−1', '+ 1', '+ 2'],
      },
      correctIndex: 0,
      solution: {
        en: '`f = −10 cm`, `u = −15 cm`. `1/v = −1/10 + 1/15 = −1/30 => v = −30 cm`. Mirror `m = −v/u = −(−30)/(−15) =` **`−2`** (`2× inverted real`)!',
        hi: '`f = −10 cm`, `u = −15 cm` `→` `v = −30 cm`। दर्पण आवर्धन **`m = −v/u = −(−30)/(−15) = −2`**!',
      },
    },
    {
      id: 'pyq-light-15',
      examTag: 'RRB Tech Gr-III 2024 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9: Identify Mirror from m = +2.3',
      question: {
        en: 'If the magnification of any mirror is +2.3, which type of mirror is it?',
        hi: 'यदि किसी दर्पण का आवर्धन +2.3 है, तो वह किस प्रकार का दर्पण है?',
      },
      options: {
        en: ['Planoconvex mirror', 'Concave mirror', 'Convex mirror', 'Plane mirror'],
        hi: ['समतल-उत्तल दर्पण', 'अवतल दर्पण', 'उत्तल दर्पण', 'समतल दर्पण'],
      },
      correctIndex: 1,
      solution: {
        en: '`+` means erect, and `2.3 > 1` means **magnified**. ONLY a **Concave mirror (`object between P & F`)** produces virtual erect magnification `> +1` (`Plane gives +1, Convex gives < +1`)!',
        hi: '`+` का अर्थ सीधा व `2.3 > 1` का अर्थ आवर्धित है — केवल **अवतल दर्पण (`P–F` स्थिति)** ही `+1` से बड़ा आवर्धन दे सकता है!',
      },
    },
    {
      id: 'pyq-light-16',
      examTag: 'RRB Tech Gr-III 2024 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Sec 9.3.2): Refractive Index Unit',
      question: {
        en: 'What is the unit of refractive index?',
        hi: 'अपवर्तनांक की इकाई क्या है?',
      },
      options: {
        en: ['$\\text{m}^3$', 'Unitless', '$\\text{m/s}^2$', 'm/s'],
        hi: ['$\\text{m}^3$', 'इकाई रहित', '$\\text{m/s}^2$', 'm/s'],
      },
      correctIndex: 1,
      solution: {
        en: 'Refractive index `n = c/v` is a ratio of two identical speed units (`m/s ÷ m/s`), hence strictly **dimensionless / Unitless** (`मात्रकहीन`)!',
        hi: 'दो समान चालों का अनुपात होने से अपवर्तनांक **मात्रकहीन (Unitless)** राशि है!',
      },
    },
    {
      id: 'pyq-light-17',
      examTag: 'RRB Group D 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Eq 9.7): n = c / v',
      question: {
        en: 'The speed of a light ray changes from 3 x 10⁸ m/s in air to 2 x 10⁸ m/s in a transparent solid. What is the refractive index of the solid with respect to air? (Take the refractive index of air as 1.)',
        hi: 'प्रकाश किरण की चाल वायु में 3 × 10⁸ m/s से बदलकर किसी पारदर्शी ठोस में 2 × 10⁸ m/s हो जाती है। वायु के सापेक्ष ठोस का अपवर्तनांक कितना होगा? (वायु का अपवर्तनांक 1 लीजिए।)',
      },
      options: {
        en: ['1.5', '1.7', '1.2', '1.4'],
        hi: ['1.5', '1.7', '1.2', '1.4'],
      },
      correctIndex: 0,
      solution: {
        en: '`n = c / v = (3 × 10⁸) / (2 × 10⁸) =` **`1.5`** (`exact inverse of NCERT p.165 Q2!`).',
        hi: 'सूत्र **`n = c/v = (3×10⁸)/(2×10⁸) = 1.5`**!',
      },
    },
    {
      id: 'pyq-light-18',
      examTag: 'RRB Group D 2025 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Table 9.3 + p.165 Q5): Diamond Speed',
      question: {
        en: 'A diamond has an absolute refractive index of 2.42. If the speed of light in vacuum is 3 x 10⁸ m/s, which value best estimates the speed of light in diamond?',
        hi: 'हीरे का निरपेक्ष अपवर्तनांक 2.42 है। यदि निर्वात में प्रकाश की चाल 3 × 10⁸ m/s है, तो कौन-सा मान हीरे में प्रकाश की चाल का सर्वोत्तम रूप से आकलन करता है?',
      },
      options: {
        en: ['1.24 x 10⁸ m/s', '1.5 x 10⁸ m/s', '2 x 10⁸ m/s', '1 x 10⁸ m/s'],
        hi: ['1.24 x 10⁸ m/s', '1.5 x 10⁸ m/s', '2 x 10⁸ m/s', '1 x 10⁸ m/s'],
      },
      correctIndex: 0,
      solution: {
        en: '`v = c / n = (3 × 10⁸) / 2.42 =` **`1.24 × 10⁸ m/s`** (`lowest light speed in NCERT Table 9.3!`).',
        hi: '`v = c/n = 3×10⁸ / 2.42 =` **`1.24 × 10⁸ m/s`** (सारणी 9.3 में सबसे धीमी प्रकाश चाल)!',
      },
    },
    {
      id: 'pyq-light-19',
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Fig 9.15): Ray via Optical Centre',
      question: {
        en: 'If a ray of light passes through the optical center of a thin spherical lens, what is the path of the emergent ray?',
        hi: 'यदि प्रकाश किरण किसी पतले गोलीय लेंस के प्रकाशिक केंद्र से होकर गुजरती है, तो निर्गत किरण का पथ क्या होता है?',
      },
      options: {
        en: ['It reflects back along its original path', 'It continues in the same direction without deviation', 'It is absorbed by the lens material', 'It bends towards the principal axis'],
        hi: ['यह अपने मूल पथ के अनुदिश वापस परावर्तित हो जाती है', 'यह बिना किसी विचलन के उसी दिशा में आगे बढ़ती है', 'यह लेंस के पदार्थ द्वारा अवशोषित कर ली जाती है', 'यह मुख्य अक्ष की ओर मुड़ जाती है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Direct NCERT **Section 9.3.3 & Fig 9.15**: a ray through Optical Centre `O` emerges **straight without any deviation**!',
        hi: 'सीधा NCERT **चित्र 9.15**: प्रकाशिक केंद्र `O` से गुजरने वाली किरण **बिना किसी विचलन के सीधी** निकल जाती है!',
      },
    },
    {
      id: 'pyq-light-20',
      examTag: 'RRB ALP 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Sec 9.3.3): Double Concave Lens Shape',
      question: {
        en: 'Which of the following statements correctly describes a double concave lens?',
        hi: 'निम्नलिखित में से कौन-सा कथन, द्वि-अवतल लेंस का सही वर्णन करता है?',
      },
      options: {
        en: ['It is equally thick at the center and edges; it neither converges nor diverges light.', 'It is used to focus light to a single point.', 'It is thicker at the edges and thinner in the middle; it diverges light rays.', 'It is thinner at the edges and thicker in the middle; it converges light rays.'],
        hi: ['यह केंद्र और किनारों पर समान रूप से मोटा होता है; यह प्रकाश की किरणों को न तो अभिसरित करता है और न ही अपसरित करता है।', 'इसका उपयोग प्रकाश को एकल बिंदु पर केंद्रित करने के लिए किया जाता है।', 'यह किनारों पर मोटा और बीच में पतला होता है; यह प्रकाश किरणों को अपसरित करता है।', 'यह किनारों पर पतला और बीच में मोटा होता है; यह प्रकाश की किरणों को अभिसरित करता है।'],
      },
      correctIndex: 2,
      solution: {
        en: 'NCERT `p.165`: Double concave lens is **thicker at edges, thinner in middle**, acting as a **diverging lens (`−D`)**!',
        hi: 'NCERT पृ. 165: द्वि-अवतल लेंस **बीच से पतला व किनारों से मोटा** होता है और प्रकाश को **अपसरित** करता है।',
      },
    },
    {
      id: 'pyq-light-21',
      examTag: 'RRB Group D 2025 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Table 9.4 Case 6): Convex Magnifier',
      question: {
        en: 'Which statement best describes the image formed by a convex lens when the object is placed between the focal point and the optical center of the lens?',
        hi: 'जब किसी वस्तु (बिंब) को उत्तल लेंस के फोकस बिंदु और प्रकाशिक केंद्र के बीच रखा जाता है, तो लेंस द्वारा बनने वाले प्रतिबिंब का सबसे सही वर्णन कौन-सा कथन करता है?',
      },
      options: {
        en: ['The image is virtual, upright and larger than the object.', 'The image is virtual, inverted and smaller than the object.', 'The image is real, upright and larger than the object.', 'The image is real, inverted and smaller than the object.'],
        hi: ['प्रतिबिंब आभासी, सीधा और वस्तु से बड़ा होता है।', 'प्रतिबिंब आभासी, उलटा और वस्तु से छोटा होता है।', 'प्रतिबिंब वास्तविक, सीधा और वस्तु से बड़ा होता है।', 'प्रतिबिंब वास्तविक, उल्टा और वस्तु से छोटा होता है।'],
      },
      correctIndex: 0,
      solution: {
        en: 'Object between `F₁` & `O` in a convex lens forms a **virtual, upright (`erect`) & larger** image on the same side (`magnifying glass`)!',
        hi: '`F₁` व `O` के बीच रखने पर उत्तल लेंस उसी ओर **आभासी, सीधा व वस्तु से बड़ा** प्रतिबिंब बनाता है (आवर्धक लेंस सिद्धांत)!',
      },
    },
    {
      id: 'pyq-light-22',
      examTag: 'RRB ALP 2025 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Table 9.5): Concave Lens Image',
      question: {
        en: 'No matter where an object is placed in front of it, a concave lens always forms an image that is:',
        hi: 'अवतल लेंस के सामने किसी वस्तु को कहीं भी रखा जाए, वह हमेशा ______________ प्रतिबिंब बनाता है।',
      },
      options: {
        en: ['Virtual, inverted, and enlarged', 'Real, inverted, and enlarged', 'Virtual, erect, and diminished', 'Real, erect, and same size'],
        hi: ['आभासी, उल्टा और विवर्धित', 'वास्तविक, उल्टा और विवर्धित', 'आभासी, सीधा और छोटा', 'वास्तविक, सीधा और समान साइज़'],
      },
      correctIndex: 2,
      solution: {
        en: 'Direct **NCERT Table 9.5 conclusion (`p.168`)**: Concave lens ALWAYS produces a **virtual, erect and diminished** image!',
        hi: 'सीधा **NCERT पृ. 168 निष्कर्ष**: अवतल लेंस सदैव **आभासी, सीधा और छोटा** प्रतिबिंब बनाता है!',
      },
    },
    {
      id: 'pyq-light-23',
      examTag: 'RRB Group D 2025 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Sec 9.3.7–9.3.8): Lens Formula + Power',
      question: {
        en: 'A convex lens forms a real, inverted image three times larger than the object. If the object is placed 30 cm from the lens, what is the closest approximate value of the power of the lens?',
        hi: 'एक उत्तल लेंस बिंब (वस्तु) से तीन गुना बड़ा एक वास्तविक, उल्टा प्रतिबिंब बनाता है। यदि वस्तु को लेंस से 30 cm की दूरी पर रखा जाए, तो लेंस की क्षमता का निकटतम अनुमानित मान क्या होगा?',
      },
      options: {
        en: ['+3.2 D', '+4.44 D', '+1 D', '+2 D'],
        hi: ['+3.2 D', '+4.44 D', '+1 D', '+2 D'],
      },
      correctIndex: 1,
      solution: {
        en: 'Real inverted `3×` => **`m = −3 = +v/u`**, with `u = −30 cm` -> **`v = +90 cm`**. `1/f = 1/90 − 1/(−30) = 4/90` -> `f = 22.5 cm = +0.225 m` -> **`P = 1/0.225 = +4.44 D`**!',
        hi: '`m = −3 = +v/u`, `u = −30 cm` से **`v = +90 cm`**। `1/f = 1/90 + 1/30 = 4/90` `→` `f = +22.5 cm` `→` **`P = 100/22.5 = +4.44 D`**!',
      },
    },
    {
      id: 'pyq-light-24',
      examTag: 'RRB Group D 2025 Shift 35',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Ch 9 (Sec 9.3.8): Combined Lens Focal Length',
      question: {
        en: 'Two lenses, one converging with focal length 12 cm and one diverging with focal length −18 cm, are placed in contact. What is the combined focal length of this lens system?',
        hi: 'दो लेंस इस प्रकार हैं कि एक 12 cm फोकस दूरी वाले अभिसारी लेंस और दूसरे −18 cm फोकस दूरी वाले अपसारी लेंस को संपर्क में रखा जाता है, तो इस लेंस निकाय की संयुक्त फोकस दूरी ज्ञात कीजिए।',
      },
      options: {
        en: ['16 cm', '8 cm', '7.2 cm', '36 cm'],
        hi: ['16 cm', '8 cm', '7.2 cm', '36 cm'],
      },
      correctIndex: 3,
      solution: {
        en: '`P = P₁ + P₂` => **`1/F = 1/f₁ + 1/f₂ = 1/12 + 1/(−18) = (3 − 2)/36 = 1/36`** -> **`F = +36 cm`** (behaves as converging combination)!',
        hi: 'संपर्क सूत्र **`1/F = 1/f₁ + 1/f₂ = 1/12 − 1/18 = 1/36`** `→` **`F = +36 cm`** (संपूर्ण निकाय अभिसारी होगा)!',
      },
    },
  ],
};
