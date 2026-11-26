/**
 * Class 9 NCERT (2026-27 New Edition — ihsc106.pdf, Pages 94–115) + Railway CBT Deep-Dive Edition
 * Chapter 6: Effect of Forces on Motion (गति पर बलों का प्रभाव) — Gold Standard v3
 * Complete 2026-27 NCERT Syllabus: Force Concept & Spring Balance -> Balanced/Unbalanced Net Force ->
 * Friction & Zero-Friction Thought Experiment -> Galileo & Newton I (Inertia) ->
 * Newton II (F = ma, Momentum p = mv, Impulse F·t = Δp, Airbags/Cricket Catch/Coconut) ->
 * Newton III (Action-Reaction on 2 Bodies: Rowing Boat, Walking Friction, PSLV/Vikram Lander, Recoil) ->
 * Section 6.7 Coupled Two-Body System (T & a = F/(m₁+m₂)).
 * All 7 Activities (6.1–6.7), all 10 Think Qs, all 16 Exercises verified against ihsc1an.pdf & 24 Verbatim RRB PYQs.
 */

export const CH6_FORCES_DATA = {
  id: 'c9-phy-ch6',
  classId: 'class9',
  subjectId: 'physics',
  subjectLabel: { en: 'Physics', hi: 'भौतिक विज्ञान (Physics)' },
  chapterNumber: 6,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 6: Effect of Forces on Motion (CBT Edition)',
  blueprintSvgKey: 'ch6-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Newton’s Second Law (F = ma), Momentum (p = mv) & Impulse', hi: 'न्यूटन II नियम (F = ma), संवेग (p = mv) व आवेग (F·Δt)' }, pct: 36 },
    { label: { en: 'Newton’s First Law, Inertia (∝ Mass) & Zero-Net-Force Graphs', hi: 'न्यूटन I नियम, जड़त्व (∝ द्रव्यमान) व शून्य-बल ग्राफ' }, pct: 26 },
    { label: { en: 'Newton’s Third Law Pairs (Rocket, Boat, Recoil, Magnets)', hi: 'न्यूटन III नियम (दो अलग पिंड: रॉकेट, नाव, बंदूक प्रतिक्षेप)' }, pct: 24 },
    { label: { en: 'Balanced/Unbalanced Forces, Friction FBD & Linked Bodies', hi: 'संतुलित/असंतुलित बल, घर्षण FBD व जुड़ा दो-पिंड निकाय' }, pct: 14 },
  ],
  title: {
    en: 'Chapter 6: Effect of Forces on Motion',
    hi: 'अध्याय 6: गति पर बलों का प्रभाव',
  },
  subtitle: {
    en: 'Complete 2026-27 NCERT Deep-Dive • Balanced/Unbalanced Net Force, Friction, Inertia, F = ma, Impulse/Airbags, Rocket/Vikram III, Two-Body T & 24 PYQs',
    hi: 'नया 2026-27 NCERT पाठ्यक्रम संपूर्ण गहराई • संतुलित/असंतुलित बल, घर्षण, जड़त्व, F=ma, आवेग-एयरबैग, रॉकेट-विक्रम लैंडर व 24 रेलवे PYQ',
  },
  metrics: {
    pages: 22,
    activities: 7,
    tables: 5,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 16,
    pyqsMatched: 24,
  },

  hero: {
    imageUrl: '/ncert-notes/class9-phy-ch6/hero-forces-motion.webp',
    caption: {
      en: 'Balanced vs unbalanced force vectors on a sliding block, cricket ball impulse deceleration & PSLV rocket thrust, and oar reaction ripples with Newton’s cradle.',
      hi: 'गुटके पर संतुलित व असंतुलित बल सदिश, क्रिकेट कैच आवेग सुरक्षा व रॉकेट प्रणोदन, तथा चप्पू की क्रिया-प्रतिक्रिया का वैज्ञानिक दृश्य।',
    },
  },

  quickRevision60Sec: [
    {
      en: '**Force & Net Force (`Sec 6.1–6.3`)**: **Vector quantity** (`magnitude + unit + direction`). Full name `newton` (**lowercase `n`**), symbol **`N`** (**CAPITAL**). Measured via **Spring Balance**. **Balanced Forces (`F_net = 0`)**: same direction ADDS (`F₁+F₂`); opposing SUBTRACTS (`|F₁−F₂|`). At constant straight-line velocity OR rest -> **`a = 0` & `F_net = 0 N`**!',
      hi: '**बल एवं परिणामी बल (`6.1–6.3`)**: **सदिश राशि**; SI मात्रक **newton** (`symbol CAPITAL N`, $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m s}^{-2}$, ~`100 g` द्रव्यमान पर बल)। समान दिशा बल जुड़ते हैं, विपरीत घटते हैं। **विराम या नियत वेग दोनों में परिणामी बल `F_net = 0 N` होता है!**',
    },
    {
      en: '**Newton’s First Law (`Inertia`, Sec 6.4)**: Founded on **Galileo Galilei’s** frictionless-plane thought experiments; **Newton (`1687`, *Principia*)** defined **Inertia** — **directly proportional to MASS (`m`)**! Zero net force -> **no velocity magnitude OR direction change** (`Example 6.3` flat `v-t`, straight line `x-t`).',
      hi: '**न्यूटन का प्रथम नियम (`जड़त्व नियम`, 1687)**: गैलीलियो के घर्षण-रहित विचार प्रयोग पर आधारित। यदि परिणामी बल शून्य हो तो विराम वस्तु विराम में और गतिशील वस्तु **सीधी रेखा में नियत वेग** से चलती रहती है। **जड़त्व $\\propto$ द्रव्यमान** (भारी वस्तु का जड़त्व अधिक)!',
    },
    {
      en: '**Newton’s Second Law (`F = ma` & Momentum, Sec 6.5)**: **Momentum $p = m v$** (`vector`, SI **`kg m s⁻¹`**). Rate of momentum change $\\propto$ Net Force: **$F = \\frac{\\Delta p}{t} = m a$** (`valid even for variable-mass rockets!`). SI chose **newton** so `$k = 1$` in `$F = k m a$` (`PYQ #14`)! Weight $= mg$ (`g = 9.8 m s⁻²`, independent of mass when free-falling!).',
      hi: '**न्यूटन का द्वितीय नियम (`F = ma` व संवेग `p = mv`)**: संवेग $p = mv$ (`सदिश`, मात्रक **`kg m s⁻¹`**)। संवेग परिवर्तन की दर परिणामी बल के समानुपाती है: **$F = ma = \\frac{\\Delta p}{t}$** (प्रमुख मात्रक **न्यूटन** इसलिए चुना गया ताकि `$F = kma$` में **`k = 1`** हो)!',
    },
    {
      en: '**Impulse Safety (`F·Δt = Δp`, Fig 6.18–6.20, 6.39)**: Increasing stopping time `Δt` reduces impact peak Force (`Cricket fielder pulling hands back`, `Car Airbags + Seatbelts`, `High-jump sand/foam pit`, `Bubble-wrap glass`)! Sudden short stop cracks a hard coconut (`Fig 6.20`).',
      hi: '**आवेग सुरक्षा नियम (`J = F·Δt = Δp`)**: संवेग परिवर्तन के लिए **संपर्क समय (`Δt`) बढ़ाने पर प्रहार बल घटता है** — जैसे क्रिकेटर का हाथ पीछे खींचना, कार में **एयरबैग व सीटबेल्ट**, ऊँची कूद में रेत/फोम गद्दा व काँच में बबल-रैप; जबकि अचानक रुकने पर बड़ा बल नारियल फोड़ देता है!',
    },
    {
      en: '**Newton’s Third Law & Linked System (`Sec 6.6–6.7`)**: Mutual forces are ALWAYS **equal & opposite (`F₁₂ = −F₂₁`)**, holding for **Contact & Non-Contact pairs** (`Magnets, Charges, Earth-Fruit`). They NEVER cancel because they act on **TWO DIFFERENT BODIES** (`Sailor/Boat, Bullet/Gun Recoil, PSLV/Chandrayaan-3 Vikram Retro-thrust`)! Linked bodies (`m₁+m₂`): **`a = F / (m₁+m₂)`** (`Ex Q15: a₁a₂ / (a₁+a₂)`)!',
      hi: '**न्यूटन का तृतीय नियम व जुड़ा निकाय (`6.6–6.7`)**: क्रिया व प्रतिक्रिया सदैव बराबर व विपरीत पर **दो भिन्न वस्तुओं पर** लगती हैं (निरस्त नहीं होतीं: **नाव-नाविक, बंदूक प्रतिक्षेप, रॉकेट व चंद्रयान-3 विक्रम लैंडर रेट्रो-थ्रस्ट**; चुंबक/गुरुत्व पर भी लागू)। जुड़े पिंडों (`m₁+m₂`) का त्वरण **`a = F/(m₁+m₂)`** (अभ्यास 15: $a_1 a_2/(a_1+a_2)$)!',
    },
  ],

  sections: [
    {
      id: 'force-balanced-friction',
      number: '6.1–6.3',
      flowDiagramKey: null,
      svgLab: 'forces-motion-lab',
      title: {
        en: 'Concept of Force, Balanced vs Unbalanced Net Force, Spring Balance & Friction FBD',
        hi: 'बल की अवधारणा, कमानीदार तुला, संतुलित बनाम असंतुलित बल एवं घर्षण मुक्त-पिंड आरेख (FBD)',
      },
      summaryTag: { en: 'NCERT Pages 94–99 + Example 6.1 + Activities 6.1–6.2 + Real Tug-of-War & Yoctonewton Box', hi: 'NCERT पृष्ठ 94–99 + उदाहरण 6.1 + क्रियाकलाप 6.1–6.2 + रस्साकशी संदर्भ' },
      blocks: [
        {
          heading: {
            en: '1. Push/Pull Vectors, SI Spelling Rule (`newton` vs `N`), Spring Balance & Net Force (`Ex 6.1`)',
            hi: '1. बल (सदिश), मात्रक नियम (newton बनाम N), कमानीदार तुला एवं परिणामी बल गणना (`उदा. 6.1`)',
          },
          conceptStory: {
            en: 'A **Force (`बल`)** can initiate motion from rest (`kicking a football`), change speed or direction (`cricket bat strike`), or deform shape (`squeezing a lemon`, Fig 6.1). Crucially, just like displacement, velocity, and acceleration (`Ch 4`), **Force is a VECTOR** (`magnitude + unit + specific direction`)! Whenever describing friction, magnetic attraction/repulsion, electrostatic force, gravity, or upward fluid buoyancy (`Fig 6.3b` floating ball: downward Gravity vs upward Upthrust), direction MUST be stated (`Changing magnitude OR direction alters its effect!`).\n• **SI Unit & Symbol Trap (`NCERT p.95`):** The SI unit is named **newton** — spelled with a **lowercase `n`** when written in full, yet denoted by **CAPITAL letter `N`**! A palm holding `100 g` mass pushes upward with **`~1 N`** (`Curiosity Box p.104`). Humans feel gentle millinewton (`10⁻³ N`) touches, while lab sensors (`as of 2026`) measure down to a mind-boggling **yoctonewton (`10⁻²⁴ N`)**! A **Spring Balance (`कमानीदार तुला`, Fig 6.2)** measures Weight (`mg`) as well as horizontal pulling forces.\n• **Balanced vs Unbalanced Forces (`Fig 6.4–6.7`):** **Balanced forces (`संतुलित बल`)** are equal in magnitude & opposite in direction on the same body -> **Net Force (`परिणामी बल`) $= 0\\text{ N}$**. When forces push the SAME way (`two friends pushing stalled car, Fig 6.5`), magnitudes ADD; when opposing asymmetrically, net force $= |F_1 - F_2|$ pointing along the larger force! Check **Example 6.1 (`10 N` & `6 N`)**: same right -> **`16 N right`**; `10 N` right vs `6 N` left -> **`4 N right`**; `6 N` right vs `10 N` left -> **`4 N left`**! Bonus note (`Fig 6.7`): Two equal opposite forces applied at opposite ends of a large wheel/tap rotate (`turn`) it!',
            hi: '**बल (Force)** वह भौतिक कारक है जो विरामावस्था को गति में ला सकता है, चाल या दिशा बदल सकता है अथवा आकार में परिवर्तन कर सकता है (`चित्र 6.1`: फुटबॉल किक, बल्ला प्रहार, नींबू निचोड़ना)। अध्याय 4 के वेग व त्वरण की भाँति **बल एक सदिश राशि (Vector)** है — इसके पूर्ण वर्णन हेतु परिमाण व मात्रक के साथ **दिशा** बताना अनिवार्य है (`परिमाण या दिशा बदलने पर प्रभाव बदल जाता है`)।\n• **SI मात्रक व वर्तनी नियम (`पृष्ठ 95`):** बल का SI मात्रक **न्यूटन** है — अंग्रेजी में पूरा नाम छोटे अक्षर से **`newton`**, पर प्रतीक सदा बड़े अक्षर **`N`** से लिखा जाता है! हाथ में `100 g` द्रव्यमान थामने पर ऊपर की ओर लगा बल लगभग **`1 N`** होता है (`पृष्ठ 104`); दैनिक स्पर्श बल मिलीन्यूटन (`10⁻³ N`) तथा आधुनिक प्रयोगशालाओं में **योक्टोन्यूटन (`10⁻²⁴ N`)** तक मापा जा चुका है। **कमानीदार तुला (`चित्र 6.2`)** से वस्तु के भार ($mg$) सहित किसी भी बल का परिमाण मापा जाता है।\n• **संतुलित बनाम असंतुलित बल (`चित्र 6.4–6.7`):** रस्साकशी में दोनों टीमें बराबर व विपरीत बल लगाएँ तो **संतुलित बल ($F_{\\text{net}} = 0$)**; एक पक्ष अधिक खींचे तो **असंतुलित परिणामी बल (`Net Force ≠ 0`)**! समान दिशा में बल जुड़ते हैं (`चित्र 6.5`) तथा विपरीत दिशा में घटकर बड़े बल की दिशा में कार्य करते हैं (**उदाहरण 6.1:** `10 N व 6 N` एक ओर $\\to \\mathbf{16\\text{ N}}$, विपरीत में **`4 N` बड़े बल की ओर**)! यदि किसी बड़े हैंडल (साइकिल हैंडल/टोटी, `चित्र 6.7`) के दो सिरों पर बराबर-विपरीत बल लगें तो वस्तु **घूर्णन** करने लगती है।',
          },
          bullets: [
            {
              en: '**==Newton Unit Scale Box (`p.95 & p.104`):==** Gentle finger touch `≈ 10⁻³ N (mN)` | `100 g` held on palm `≈ 1 N` | Tiny 2026 physics force sensor limit `≈ 10⁻²⁴ N (yoctonewton)`!',
              hi: '**==बल परिमाण पैमाना (`पृष्ठ 95 व 104`):==** हल्का स्पर्श $\\approx 10^{-3}\\text{ N}$ | हथेली पर `100 g` $\\approx 1\\text{ N}$ | 2026 वैज्ञानिक सीमा **योक्टोन्यूटन ($10^{-24}\\text{ N}$)**!',
            },
            {
              en: '**Floating Ball Equilibrium (`Fig 6.3b`):** Downward Weight (`mg`) balanced identically by upward Fluid Buoyancy (**Upthrust / उत्प्लावन**) -> `F_net = 0`.',
              hi: '**जल में तैरती गेंद (`चित्र 6.3 ख`):** नीचे लगता गुरुत्वाकर्षण व ऊपर लगता **उत्प्लावन बल** संतुलित होते हैं।',
            },
          ],
          diagramKey: 'balanced-vs-unbalanced-fbd',
          realImage: {
            url: '/ncert-notes/class9-phy-ch6/real/tug-of-war-team.webp',
            title: {
              en: 'Tug-of-War Dynamics (`NCERT Fig 6.4`) — Balanced Tie vs Unbalanced Acceleration',
              hi: 'रस्साकशी में बल संतुलन (`NCERT चित्र 6.4`) — बराबर बल (स्थिर) बनाम असमान बल (गति)',
            },
            caption: {
              en: 'When two opposing pulls match, net force is zero; as soon as one team pulls harder, net force F = F_large − F_small accelerates the rope.',
              hi: 'विपरीत दिशाओं में बराबर बल लगने पर रस्सी विस्थापित नहीं होती (`संतुलित`); अधिक बल लगते ही असंतुलित बल की दिशा में गति प्रारंभ होती है।',
            },
          },
          inlinePyqIds: [2, 3, 12],
        },
        {
          heading: {
            en: '2. Friction FBD (`Normal N = mg`), Activities 6.1–6.2 (`Surface Smoothness`) & Galileo’s Breakthrough',
            hi: '2. घर्षण FBD (अभिलंब बल N = mg), क्रियाकलाप 6.1–6.2 एवं गैलीलियो का शून्य-घर्षण विचार',
          },
          conceptStory: {
            en: 'Even on a heavy motionless block resting on a floor (`Fig 6.11`), TWO vertical forces act continuously—downward **Gravity (`mg`)** balanced strictly by upward surface **Normal Force (`अभिलंब बल N`)**! When you push horizontally (`Fig 6.10`), the block stays stationary until your applied push EXCEEDS horizontal opposing **Friction (`घर्षण बल`)**. Once sliding starts (`stopped pedalling cycle or kicked coin`), Friction acts opposite motion, steadily draining speed back to zero.\nCheck **Activities 6.1 & 6.2 (`Coin Stack & Wooden Block`)**: Pulling a stacked coin column identically (`pin C` on a stretched rubber band) across **Wood -> Cement -> Laminated Desk -> Polished Marble/Tile** produces progressively longer slide distances (`marble glides farthest!`)! Measuring sliding threshold horizontally with a **Spring Balance (`Activity 6.2, Fig 6.14`)** at constant slow velocity balances tension directly against friction (`less friction = lower spring reading = longest coin slide!`).\n**Historical Revolution (`Galileo Galilei`, 17th Century):** For centuries, thinkers wrongly believed continuous force was required to maintain constant motion. Through brilliant zero-friction thought experiments, **Galileo Galilei** proved frictionless horizontal bodies glide **at constant velocity forever** without pushing!',
            hi: 'फर्श पर धकेली जाती पेटिका (`चित्र 6.10–6.11`) पर क्षैतिज बल के अलावा दो ऊर्ध्वाधर बल भी होते हैं — नीचे **गुरुत्वीय भार ($mg$)** तथा ऊपर सतह द्वारा लंबवत **अभिलंब बल ($N$)**, जो परस्पर संतुलित रहते हैं! कोई स्थिर वस्तु तभी सरकना शुरू करती है जब आपका प्रयुक्त बल संपर्क सतहों के **विपरीत घर्षण बल** से अधिक होकर धनात्मक परिणामी बल बना दे (`जैसे ही बल हटाते हैं, घर्षण वेग घटाकर रोक देता है`)।\n• **क्रियाकलाप 6.1–6.2 निष्कर्ष (`चित्र 6.12–6.14`):** समान तनाव (`रबड़ बैंड बिंदु C`) से `10` रुपये के सिक्कों के ढेर को लकड़ी, सीमेंट, पटलित मेज व **पॉलिश संगमरमर/टाइल** पर छोड़ने पर संगमरमर पर घर्षण न्यूनतम होने से वह **सर्वाधिक दूरी** तय करता है; और कमानीदार तुला से लकड़ी के गुटके को नियत धीमे वेग से खींचने पर **तुला का पाठ्यांक ठीक घर्षण बल का माप** देता है (`कम पाठ्यांक = कम घर्षण = अधिक दूरी`)!\n• **गैलीलियो गैलिली क्रांति (17वीं सदी):** सदियों पुरानी भ्रांति थी कि वस्तु को लगातार चलाए रखने हेतु निरंतर बल चाहिए! **गैलीलियो** ने विचार प्रयोगों से सिद्ध किया कि यदि सतह पूर्णतः **घर्षण-रहित** हो, तो एक बार गतिमान वस्तु अनंत काल तक बिना किसी बाह्य बल के **नियत वेग** से चलती रहेगी!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch6/real/galileo-galilei.webp',
            title: {
              en: 'Galileo Galilei (`1564–1642`, Justus Sustermans `1636`) — Discoverer of Law of Inertia',
              hi: 'गैलीलियो गैलिली (`1564–1642`) — घर्षण-रहित गति एवं जड़त्व अवधारणा के प्रणेता',
            },
            caption: {
              en: 'Galileo’s horizontal plane thought experiments overturned ancient physics, forming the bedrock for Newton’s First Law.',
              hi: 'सत्रहवीं शताब्दी में गैलीलियो ने सिद्ध किया कि एकसमान सीधी गति बनाए रखने के लिए किसी निरंतर बल की आवश्यकता नहीं होती।',
            },
          },
          inlinePyqIds: [4, 15],
        },
      ],
    },

    {
      id: 'newton-first-second-momentum',
      number: '6.4–6.5',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Newton’s First Law (Inertia) & Second Law ($F = ma$, Momentum $p = mv$ & Impulse Airbags)',
        hi: 'न्यूटन का प्रथम नियम (जड़त्व) एवं द्वितीय नियम ($F = ma$, संवेग $p = mv$ व आवेग-एयरबैग)',
      },
      summaryTag: { en: 'NCERT Pages 100–106 + Principia 1687 + Activities 6.3–6.4 + Examples 6.2–6.6', hi: 'NCERT पृष्ठ 100–106 + प्रिंसिपिया 1687 + क्रियाकलाप 6.3–6.4 + उदाहरण 6.2–6.6' },
      blocks: [
        {
          heading: {
            en: '1. Newton’s First Law of Motion (`Law of Inertia`) & Graphs (`Examples 6.2–6.3`, Fig 6.15–6.16)',
            hi: '1. न्यूटन का प्रथम नियम (`जड़त्व का नियम`) तथा शून्य-बल ग्राफ (`उदाहरण 6.2–6.3`, चित्र 6.15–6.16)',
          },
          conceptStory: {
            en: 'Building on Galileo, **Sir Isaac Newton (`1687`, *Principia*)** used the term **Inertia (`जड़त्व`)**—an object’s natural tendency to oppose changes to its state of rest or uniform straight-line motion (**Inertia $\\propto$ Mass!** Heavy boxes/trucks resist motion strongly compared to empty carts!).\n**First Law Statement (`Sec 6.4`):** *An object stays at rest (`v = 0`) OR continues moving at constant velocity (`straight line, fixed speed & direction`) unless acted upon by a non-zero Net External Force.*\nLook closely at two huge exam traps solved in **Examples 6.2 & 6.3**:\n1. **Sliding Box at Constant Velocity (`Ex 6.2`):** Pushing forward with `F` equal to backward `Friction` makes **`F_net = 0`** -> the already moving box does **NOT** stop; it keeps gliding steadily at **constant velocity**!\n2. **Zero-Force Graphs (`Fig 6.15–6.16`):** **Rest**: `x-t` is flat horizontal, `v-t` lies on zero time axis. **Constant non-zero velocity**: `x-t` is an inclined **straight line**, while `v-t` is flat horizontal parallel to time axis (`a = 0`)!',
            hi: '**सर आइजैक न्यूटन (`1687`, *प्रिंसिपिया*)** ने अपनी विराम अथवा एकसमान गति की अवस्था में परिवर्तन का विरोध करने की वस्तुओं की प्रवृत्ति को **जड़त्व (Inertia)** नाम दिया (`जड़त्व केवल द्रव्यमान का माप है: अधिक द्रव्यमान = अधिक जड़त्व`)।\n**प्रथम नियम (`भाग 6.4`):** *प्रत्येक वस्तु अपनी विरामावस्था अथवा सीधी रेखा में एकसमान वेग की अवस्था बनाए रखती है, जब तक कि उस पर कोई असंतुलित परिणामी बाह्य बल कार्य न करे (`शून्य परिणामी बल → शून्य त्वरण a = 0`)।*\n• **उदाहरण 6.2 (परीक्षा-मर्म):** यदि कोई व्यक्ति किसी **चलते हुए बक्से** पर आगे की ओर ठीक घर्षण बल के बराबर बल लगाता है, तो दोनों बल संतुलित ($F_{\\text{net}} = 0$) होकर बक्से को रुकने नहीं देंगे बल्कि बक्सा **नियत वेग से चलता रहेगा**!\n• **उदाहरण 6.3 (`चित्र 6.15 व 6.16` ग्राफ):** शून्य परिणामी बल की दो संभव अवस्थाएँ हैं — (1) **विराम**: `x-t` समय के समानांतर व `v-t` शून्य अक्ष पर; (2) **नियत वेग**: `x-t` झुकी हुई सीधी रेखा व `v-t` समय-अक्ष के समानांतर सीधी रेखा!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch6/real/isaac-newton.webp',
            title: {
              en: 'Sir Isaac Newton (`1643–1727`, Portrait `1689`) — Author of *Principia* (`1687` Three Laws)',
              hi: 'सर आइजैक न्यूटन (`1643–1727`, चित्र `1689`) — *प्रिंसिपिया* (`1687`) गति के तीन नियम',
            },
            caption: {
              en: 'Defined Inertia and unified forces, mass, acceleration, momentum and action-reaction pairs into classical mechanics.',
              hi: 'वर्ष 1687 में जड़त्व अवधारणा व गति के तीनों सार्वभौमिक नियम प्रतिपादित किए; बल का मात्रक न्यूटन (N) इन्हीं के सम्मान में है।',
            },
          },
          inlinePyqIds: [5, 7, 23],
        },
        {
          heading: {
            en: '2. Newton’s Second Law (`F = ma`), Momentum (`p = mv`), Activities 6.3–6.4 & Impulse Safety (`Examples 6.4–6.6`)',
            hi: '2. न्यूटन द्वितीय नियम (F = ma व संवेग p = mv), क्रियाकलाप 6.3–6.4, आवेग-एयरबैग व उदाहरण 6.4–6.6',
          },
          conceptStory: {
            en: '**Activities 6.3 & 6.4 (`Carboard-Wheel Trolley + Pulley + Paper Cup Weights, Fig 6.17`)** prove experimentally using slow-motion video kinematics ($s = \\frac{1}{2}at^2 \\implies \\frac{a_1}{a_2} = \\frac{T_2^2}{T_1^2}$): (1) keeping trolley mass constant while doubling pulling cup weight raises acceleration (`a ∝ F`); (2) keeping pulling cup constant while doubling trolley mass halves acceleration (`a ∝ 1/m`). *(Small real-life deviations occur due to wheel bearing friction & timing precision!)*\n**Newton’s Second Law (`Sec 6.5`):** Net Force accelerates object along Force direction: **$a = \\frac{F}{m} \\implies \\mathbf{F = m \\cdot a}$** (`Eq 6.2`)! **1 newton (`1 N`)** accelerates **`1 kg`** at **`1 m s⁻²`**, chosen specifically so constant $k = 1$ in $F = kma$ (`Group D Shift 40`)! Free-fall gravity force **$F = mg$** gives identical **$g = 9.8\\text{ m s}^{-2} \\approx 10\\text{ m s}^{-2}$** independent of falling object mass!\n**Deeper Momentum Formulation (`Most Fundamental`):** **Momentum (`संवेग`) $p = m v$** (`vector`, SI **`kg m s⁻¹`**). Newton II states: **Rate of change of momentum $\\propto$ Net Force**, i.e., **$F = \\frac{\\Delta p}{\\Delta t}$** — valid even when **mass varies (`e.g., fuel-burning Rockets`)**! Rearranging **$F \\cdot \\Delta t = \\Delta p$** defines **Impulse (`आवेग`)**!\n• **Life-Saving Cushioning Applications (`p.104–105`):** Catching a fast cricket ball by **pulling hands backward (`Fig 6.18`)**, **inflating car Airbags (`Fig 6.19`) with seatbelts**, **sand/foam landing mats in high jump (`Fig 6.39`)**, or **bubble-wrapping glassware** ALL increase stopping time **$\\Delta t$**, drastically slashing deceleration & peak impact Force **$F = \\Delta p / \\Delta t$**! Conversely, smashing a coconut onto hard rock halts instantaneously (`tiny Δt -> massive impact crack`, `Fig 6.20`)!\n**NCERT Worked Numerals Checked:** `Ex 6.4` (`10+10+10 = 30 kg` barbell -> upward hold force `30 × 9.8 = 294 N`); `Ex 6.5` (`25 kg, f=50 N`: push `50 N -> s=0`; push `55 N -> F_net = 5 N -> a = 0.2 -> s(2s) = 0.4 m`); `Ex 6.6` (`1500 kg sports car v-t Fig 6.21`: `0-5s -> a=+2 -> +3000 N East`; `5-10s -> 0 N`; `10-15s -> a=-2 -> -3000 N West`)!',
            hi: '**क्रियाकलाप 6.3 व 6.4 (`गत्ता गाड़ी व घिरनी प्रयोग`, चित्र 6.17)** स्लो-मोशन समय ($s = \\frac{1}{2}at^2 \\implies \\frac{a_1}{a_2} = \\frac{T_2^2}{T_1^2}$) से सिद्ध करते हैं कि किसी पिंड का त्वरण परिणामी बल के **समानुपाती ($a \\propto F$)** व द्रव्यमान के **व्युत्क्रमानुपाती ($a \\propto 1/m$)** होता है (**`समीकरण 6.2: F = m·a`**)! **1 न्यूटन** वह बल है जो `1 kg` द्रव्यमान में `1 m s⁻²` त्वरण उत्पन्न करे (`F = kma` में **`k = 1`** रखने हेतु ही मात्रक न्यूटन चुना गया)! गुरुत्वीय बल **$F = mg$** में सभी वस्तुओं के लिए गुरुत्वीय त्वरण **$g = 9.8\\text{ m s}^{-2}$** (`लगभग 10 m s⁻²`) उनके द्रव्यमान से स्वतंत्र होता है।\n• **संवेग रूप (`सबसे व्यापक कथन`):** किसी वस्तु का **संवेग $p = mv$** (`सदिश`, SI मात्रक **`kg·m·s⁻¹`**)। **संवेग परिवर्तन की दर परिणामी बल के समानुपाती होती है (`F = Δp / Δt`)** — यह रूप रॉकेट जैसे **परिवर्ती द्रव्यमान** तंत्रों पर भी सत्य है! यहाँ गुणनफल **`आवेग (Impulse) J = F × Δt = Δp`** कहलाता है।\n• **आवेग के दैनिक व जीवनरक्षक अनुप्रयोग (`पृष्ठ 104–105`):**\n  1. क्रिकेट क्षेत्ररक्षक द्वारा गेंद पकड़ते समय **हाथ पीछे खींचना (`चित्र 6.18`)**, **कार एयरबैग + सीटबेल्ट (`चित्र 6.19`)**, ऊँची कूद का **रेत/फोम गद्दा (`चित्र 6.39`)**, व काँच पैकिंग में **बबल-रैप** — सब संपर्क समय **$\\Delta t$ बढ़ाकर** मंदन व प्रहार बल को अत्यंत कम कर चोट रोकते हैं।\n  2. ठीक उल्टा: ताजे नारियल को कठोर पत्थर पर तेज पटकने पर `Δt` अति सूक्ष्म होने से अचानक विशाल बल लगता है व नारियल टूट जाता है (`चित्र 6.20`)!\n• **NCERT हल उदाहरण:** `Ex 6.4` (`30 kg` डंड स्थिर पकड़ना $\\to 294\\text{ N}$ ऊपर); `Ex 6.5` (`25 kg, f=50 N`: `50 N → स्थिर`; `55 N → F_net=5 N → a=0.2 → 2s में s=0.4 m`); `Ex 6.6` (`1500 kg` स्पोर्ट्स कार: `0-5s → +3000 N पूर्व`, `5-10s → 0 N`, `10-15s → -3000 N पश्चिम`)।',
          },
          diagramKey: 'newton-second-impulse-graphs',
          inlinePyqIds: [1, 6, 9, 10, 11, 14, 19, 20, 21, 22],
        },
      ],
    },

    {
      id: 'newton-third-coupled-systems',
      number: '6.6–6.7',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Newton’s Third Law (ISRO Rocket, Vikram Lander, Boat, Gun Recoil) & Coupled Two-Body Tension',
        hi: 'न्यूटन का तृतीय नियम (PSLV रॉकेट, विक्रम लैंडर, नाव, बंदूक प्रतिक्षेप) व जुड़ा दो-पिंड निकाय (6.7)',
      },
      summaryTag: { en: 'NCERT Pages 107–115 + Activities 6.5–6.7 + Examples 6.7–6.8 + Coupled System Eq 6.4 + Tyre/Shoe Grip', hi: 'NCERT पृष्ठ 107–115 + क्रियाकलाप 6.5–6.7 + उदाहरण 6.7–6.8 + समीकरण 6.4' },
      blocks: [
        {
          heading: {
            en: '1. Action–Reaction Pairs Always Act on Two DIFFERENT Bodies — Contact, Walking Grip & Non-Contact Cases',
            hi: '1. क्रिया–प्रतिक्रिया युग्म (दो अलग पिंड), चलने में घर्षण की सहायता एवं संपर्क/असंपर्क बल',
          },
          conceptStory: {
            en: '**Activities 6.5 & 6.6 (`Rolling Chair Pushing Table Fig 6.23` & `Two Interlocked Spring Balances Fig 6.26`)** confirm an unbreakable law of nature (**Newton’s Third Law**): *Whenever object A pushes or pulls object B, object B simultaneously exerts an **EQUAL and OPPOSITE** force back on object A (`identical scale readings on linked spring balances!`).*\n**#1 Student Misconception Crushed:** *If Action & Reaction are equal & opposite, why don’t they cancel out leaving everything frozen at zero?* Because **they act on TWO DIFFERENT OBJECTS** (`canoe oar pushes water backward <-> water pushes oar+boat forward`, `Fig 6.28`; whereas balanced forces act on the SAME single object)! Check NCERT **Walking & Cycling (`Fig 6.24–6.25`)**: your foot pushes ground backward, so **Static/Forward Friction from ground pushes YOU forward**! Shoe sole grooves & tyre treads boost this forward grip—explaining slipping on ice/oil (`Science & Society p.107`). Similarly, climbing a coconut palm (`Fig 6.27`), sailor jumping onto shore pushing boat backward (`Ex Q7 Fig 6.38`), and **BOTH non-contact interactions (`Fig 6.31–6.33`)**: bar magnets, like-charged balloons, AND Earth–Fruit (`Ex 6.7`: equal pull `F` acts on both, yet vast Earth mass $M$ yields imperceptible $a = F/M$!).\nCheck **Example 6.8 (`Recoil`):** `0.1 kg` bullet fired by `2 N` from `5 kg` gun -> SAME `2 N` backward reaction force pushes the gun (`equal force!` NOT bullet more!). Yet differing masses make **bullet shoot forward at $2/0.1 = 20\\text{ m s}^{-2}$**, while heavy gun recoils gently at $2/5 = 0.4\\text{ m s}^{-2}$!',
            hi: '**क्रियाकलाप 6.5 (`पहिया कुर्सी द्वारा मेज धकेलना`, चित्र 6.23)** व **क्रियाकलाप 6.6 (`दो जुड़ी कमानीदार तुलाओं का समान पाठ्यांक`, चित्र 6.26)** सिद्ध करते हैं — **न्यूटन का तृतीय नियम (`भाग 6.6`):** *जब कोई एक वस्तु दूसरी वस्तु पर बल लगाती है तो दूसरी वस्तु भी उसी क्षण पहली वस्तु पर **बराबर परिमाण का बल विपरीत दिशा में** लगाती है।*\n• **सबसे बड़ा भ्रम (`निरस्त क्यों नहीं होते?`):** यदि दो बराबर-विपरीत बल **एक ही वस्तु** पर लगें (`जैसे मेज पर स्थिर रखी किताब`), तो वे संतुलित होकर कट जाते हैं; पर क्रिया-प्रतिक्रिया बल सदा **दो अलग-अलग वस्तुओं** पर लगते हैं (`जैसे डोंगी के चप्पू जल को पीछे धकेलते हैं और जल चप्पू-डोंगी को आगे!`), अतः वे एक-दूसरे को निरस्त **नहीं** करते।\n• **चलना व घर्षण (`चित्र 6.24–6.25`, विज्ञान एवं समाज):** चलते समय पैर जमीन को पीछे धकेलते हैं व जमीन का **घर्षण बल** आपको **आगे** धकेलता है! जूतों व टायरों में बने खाँचे इसी घर्षण को बढ़ाते हैं (बर्फ/गीले फर्श पर कम घर्षण से पैर फिसलता है)। इसी तरह **नारियल के पेड़ पर चढ़ना (`चित्र 6.27`)**, **नाव से नाविक का आगे कूदते ही नाव का पीछे हटना (`चित्र 6.38`)**, तथा **असंपर्क बल (`चित्र 6.31–6.33`):** दंड चुंबक, आवेशित गुब्बारे व फल-पृथ्वी (`उदा. 6.7` — दोनों पर बल समान पर पृथ्वी का विशाल द्रव्यमान होने से उसका त्वरण नगण्य) भी नियम 3 का पालन करते हैं!\n• **उदाहरण 6.8 (`बंदूक प्रतिक्षेप`):** `5 kg` बंदूक से `0.1 kg` गोली `2 N` से दागने पर बंदूक पर भी ठीक **`2 N`** पीछे बल लगता है! पर छोटे द्रव्यमान से गोली का त्वरण **`20 m s⁻²`** और भारी बंदूक का मात्र **`0.4 m s⁻²`** होता है!',
          },
          realImage: {
            url: '/ncert-notes/class9-phy-ch6/real/pslv-rocket-launch.webp',
            title: {
              en: 'ISRO PSLV Lift-off & Chandrayaan-3 Vikram Retro-Thrust (`NCERT Fig 6.30, p.109`)',
              hi: 'ISRO PSLV रॉकेट प्रमोचन व चंद्रयान-3 विक्रम लैंडर (`NCERT चित्र 6.30, पृष्ठ 109`)',
            },
            caption: {
              en: 'Downward exhaust gases push upward on the rocket exceeding its weight; Vikram lander fired gases forward in space to brake safely near Lunar South Pole!',
              hi: 'रॉकेट इंजन नीचे गैसें निष्कासित करता है जिससे ऊपर की प्रतिक्रिया (रॉकेट भार से अधिक) उसे अंतरिक्ष ले जाती है; विक्रम लैंडर ने आगे गैस छोड़ कर गति कम की!',
            },
          },
          inlinePyqIds: [8, 16, 17, 18, 24],
        },
        {
          heading: {
            en: '2. Rockets & Chandrayaan-3 (`Activity 6.7`), Section 6.7 Coupled System (`a = F/(m₁+m₂)`) & Wheel/Friction Insights',
            hi: '2. रॉकेट-विक्रम लैंडर (`क्रियाकलाप 6.7`), जुड़ा निकाय (भाग 6.7 व Ex Q15) तथा पहिया/घर्षण परियोजना तथ्य',
          },
          conceptStory: {
            en: '**Activity 6.7 (`Balloon-Straw-Thread Rocket Fig 6.29`) & Space Flight (`p.109`):** Notice rockets do **NOT** push against external air (`works in vacuum space too!` — `Think Q10`)! Stretched balloon/engine pushes exhaust gas out backward -> escaping exhaust gas kicks balloon/rocket forward identically by Newton III! Remarkably, to land gently near the **Moon’s South Pole**, **Chandrayaan-3’s Vikram Lander** fired engine exhaust **IN THE DIRECTION OF MOTION**, producing opposite retro-braking force cleanly!\n**Section 6.7 Coupled Multi-Body System (`Fig 6.34–6.35`):** Suppose external force **$F$** pulls block **`m₁`** tied by taut string (**Tension `T`**) to block **`m₂`** on a smooth floor. Treating `m₁ + m₂ + string` as **ONE SINGLE SYSTEM**, Newton III internal tensions **`+T` and `−T` cancel completely**, giving simple universal acceleration (**`Eq 6.4`**): **$a = \\frac{F}{m_1 + m_2}$** (while string tension equals $T = m_2 a$ and vertical normals balance weight $N_1 + N_2 = (m_1 + m_2)g$)! That instantly unlocks **Exercise Q15**: if force `F` accelerates `m₁` at $a_1$ and `m₂` at $a_2$, combined coupled mass accelerates at **$a = \\frac{a_1 a_2}{a_1 + a_2}$**!\n**Project & Boundary Notes (`p.115`):** Why did the **Wheel** transform history? Because **Rolling Friction < Sliding Friction < Static Friction**! Wrapping rope twice around a dock post multiplies holding friction **non-linearly (`exponential grip`, Fig 6.43)** anchoring giant ships safely! And Newton’s Laws remain exact everywhere from daily machines to planets, needing relativity/quantum corrections ONLY near **light speed** or **subatomic scales**.',
            hi: '**रॉकेट व अंतरिक्ष प्रणोदन (`क्रियाकलाप 6.7 व चित्र 6.30`):** रॉकेट बाहर की हवा पर दबाव बनाकर **नहीं** उड़ता (अतः निर्वात अंतरिक्ष में भी कार्य करता है, `सोचिए 10`)! इंजन नीचे गैस छोड़ता है और बाहर निकलती गैसें रॉकेट पर ऊपर बल लगाती हैं (`ऊपर का प्रतिक्रिया बल > रॉकेट भार`)। **चंद्रयान-3 के विक्रम लैंडर (`पृष्ठ 109`)** ने चंद्रमा के दक्षिणी ध्रुव पर उतरते समय अपनी **गति की ही दिशा में गैसें छोड़कर** गति कम (retro-braking) की थी!\n• **भाग 6.7 — डोरी से जुड़े दो पिंडों का निकाय (`चित्र 6.34–6.35`):** यदि घर्षण-रहित सतह पर डोरी (`तनाव T`) से जुड़े दो द्रव्यमानों `$m_1$` और `$m_2$` को बाह्य बल $F$ से खींचा जाए, तो दोनों को **एक संयुक्त निकाय** मानने पर डोरी का आंतरिक तनाव `$T$` कट जाता है और संपूर्ण निकाय का त्वरण (`समीकरण 6.4`): **$a = \\frac{F}{m_1 + m_2}$** मिलता है (`डोरी तनाव T = m₂·a`)! इसी से **अभ्यास 15 (ट्रैक्टर-ट्रॉली)** हल होता है: संयुक्त त्वरण **$a = \\frac{a_1 a_2}{a_1 + a_2}$**!\n• **परियोजना व आधुनिक सीमा ज्ञान (`पृष्ठ 115`):** **लोटनिक घर्षण (`Rolling`) < सर्पी (`Sliding`) < स्थैतिक घर्षण (`Static`)** होने के कारण पहिए का आविष्कार ऐतिहासिक क्रांति बना! खंभे पर रस्सी एक के बजाय कई फेरे लपेटने (`चित्र 6.43`) से घर्षण **अरैखिक (तेजी से) बढ़कर** विशाल समुद्री जहाजों को घाट पर थाम लेता है। न्यूटन के नियम दैनिक वस्तुओं से लेकर ग्रहों-तारों तक सटीक हैं — इनमें संशोधन केवल **प्रकाश वेग के निकट** या **अति सूक्ष्म परमाण्विक कणों** पर आवश्यक होता है।',
          },
          diagramKey: 'newton-third-two-body-system',
          realImage: {
            url: '/ncert-notes/class9-phy-ch6/real/vallam-kali-race.webp',
            title: {
              en: 'Kerala Vallam Kali Snake Boat Race (`NCERT Ex Q4 + Newton III Oar Reaction`)',
              hi: 'केरल वल्लुम कल्ली सर्प नौका दौड़ (`NCERT अभ्यास 4 व न्यूटन III चप्पू प्रतिक्रिया`)',
            },
            caption: {
              en: '95 rowers pushing water backward propel 19,000 N forward against 5 errant oars (1,000 N) -> 18,000 N forward net force!',
              hi: '95 नाविकों द्वारा जल को पीछे धकेलने से 19,000 N आगे बल व 5 विपरीत नाविकों के 1,000 N के अंतर से 18,000 N परिणामी बल आगे!',
            },
          },
          inlinePyqIds: [13],
        },
      ],
    },
  ],

  confusionBreakers: [
    {
      pair: { en: 'Newton Spelling (`newton` vs `N`) & Common Unit Trap', hi: 'मात्रक की वर्तनी (`newton` vs `N`) नियम' },
      trap: { en: 'Writing `"5 Newton"` capitalized in full OR `"5 n"` lowercase symbol.', hi: 'पूरा नाम `"Newton"` बड़े अक्षर में या प्रतीक `"n"` छोटे अक्षर में लिख देना।' },
      truth: { en: 'NCERT Explicit Box (`p.95 & 100`): Full unit starts **lowercase `newton`**, symbol MUST be **CAPITAL `N`** (`1 N = 1 kg m s⁻²`)!', hi: 'NCERT नियम (`पृ. 95 व 100`): पूरा नाम **छोटे अक्षर (`newton`)** से व प्रतीक **बड़े अक्षर (`N`)** से लिखें!' },
    },
    {
      pair: { en: 'Constant Velocity Requires Zero Force vs Continuous Force', hi: 'नियत वेग बनाए रखने हेतु निरंतर बल चाहिए या `F_net = 0`?' },
      trap: { en: 'Thinking an object gliding at steady speed `10 m/s` keeps feeling an active Net Force.', hi: 'यह सोचना कि समान वेग से चलती वस्तु को लगातार असंतुलित बल की आवश्यकता है।' },
      truth: { en: 'By **Galileo & Newton I (`Ex 6.2–6.3`)**, **Rest OR Constant Straight Velocity BOTH mean `a = 0` & `F_net = 0 N`**! Force is needed ONLY on rough ground to cancel friction!', hi: 'नियत वेग की गति में त्वरण $a = 0$ अतः **परिणामी बल `F_net = 0 N`**! केवल घर्षण को संतुलित करने हेतु बराबर बल लगाना पड़ता है (`उदा. 6.2`)।' },
    },
    {
      pair: { en: 'Newton III Action-Reaction Cancelling Illusion', hi: 'क्या क्रिया व प्रतिक्रिया बल परस्पर निरस्त (`0`) हो जाते हैं?' },
      trap: { en: 'Saying equal & opposite boat/gun forces cancel to zero -> nothing can ever move!', hi: 'बराबर-विपरीत होने से क्रिया और प्रतिक्रिया बलों को एक-दूसरे को काटने वाला मान लेना।' },
      truth: { en: 'Action acts on **Object B** while Reaction acts on **Object A** (**TWO DIFFERENT OBJECTS** -> `PYQ #24`)! Equal forces on ONE object are merely Balanced (`Fig 6.11`), NOT Action-Reaction!', hi: 'क्रिया व प्रतिक्रिया **सदैव दो अलग-अलग वस्तुओं पर** लगती हैं (`अतः कभी निरस्त नहीं होतीं`); एक ही वस्तु पर लगे बराबर-विपरीत बल केवल संतुलित बल कहलाते हैं!' },
    },
    {
      pair: { en: 'Gun vs Bullet / Earth vs Fruit: Who Experiences Larger FORCE?', hi: 'बंदूक बनाम गोली या फल बनाम पृथ्वी — किस पर अधिक "बल" लगता है?' },
      trap: { en: 'Thinking bullet feels MORE force than gun (`or loaded cart hits harder than empty cart — Ex Q9!`).', hi: 'गोली या खाली ठेले पर टकराव में अधिक बल लगना मानना (`अभ्यास 9 व उदा. 6.8 जाल!`)।' },
      truth: { en: '**FORCE Magnitude IS IDENTICAL (`Newton III`)** on bullet & gun (`and loaded vs empty cart Ex Q9`)! Only **Acceleration differs ($a = F/m$)** — smaller mass jumps fast (`20 m/s²` vs `0.4 m/s²`)!', hi: 'दोनों पर लगने वाला **बल बिल्कुल बराबर** होता है (`अभ्यास 9: दोनों ठेले बराबर बल लगाते हैं`)! केवल छोटे द्रव्यमान के कारण गोली/दिशासूचक सुई में अधिक **त्वरण** पैदा होता है।' },
    },
    {
      pair: { en: 'Mass–Inertia Relationship vs Speed–Inertia Myth', hi: 'जड़त्व `द्रव्यमान` पर निर्भर है या `वेग/चाल` पर?' },
      trap: { en: 'Saying a fast bullet has greater inertia than a stationary train engine.', hi: 'तेज गोली का जड़त्व खड़ी रेलगाड़ी से अधिक मान लेना (वह अधिक *संवेग* है, जड़त्व नहीं!)।' },
      truth: { en: '**Inertia depends EXCLUSIVELY on MASS (`m`)** (`Tech Gr-III PYQ #23`)! Whereas **Momentum ($p = mv$)** depends on BOTH Mass AND Velocity.', hi: '**जड़त्व केवल वस्तु के द्रव्यमान (`m`) के समानुपाती** होता है; जबकि **संवेग (`p = mv`)** द्रव्यमान व वेग दोनों पर निर्भर है!' },
    },
    {
      pair: { en: 'Walking / Rocket Thrust Medium Myth (`Needs Air to Push?`)', hi: 'पैदल चलने में घर्षण की दिशा & क्या रॉकेट हवा को धकेलकर उड़ता है?' },
      trap: { en: 'Thinking friction always opposes forward walking OR rockets push against atmospheric air.', hi: 'चलने में घर्षण को विपरीत मान लेना या रॉकेट को हवा पर धक्का मारकर उड़ता समझना।' },
      truth: { en: 'While walking (`Fig 6.25`), foot pushes floor back so **Floor Friction pushes YOU FORWARD**! And Rockets accelerate cleanly in **vacuum space (`Think Q10`)** by pushing against their own **downward exhaust gas**!', hi: 'चलते समय पैर जमीन को पीछे धकेलता है अतः **घर्षण बल आपको आगे धकेलता है (`चित्र 6.25`)**! रॉकेट निर्वात में भी अपनी ही **उत्सर्जित गैस की प्रतिक्रिया** से उड़ता है!' },
    },
  ],

  pioneers: [
    {
      name: { en: 'Galileo Galilei (1564–1642)', hi: 'गैलीलियो गैलिली (1564–1642)' },
      country: { en: 'Italian Physicist & Astronomer • NCERT Bio Box p.100', hi: 'इतालवी भौतिक विज्ञानी • गैलीलियो जड़त्व प्रयोग (पृ. 100)' },
      badge: { en: 'Overturned Zero-Force Motion Myth • Thought Experiments', hi: 'नियत गति हेतु बल-अनाश्यकता व घर्षण-रहित विचार प्रयोग' },
      fact: {
        en: 'Featured in NCERT (`p.100`): Used brilliant zero-friction thought experiments in the 17th century to prove objects moving along horizontal frictionless tracks persist indefinitely at constant velocity.',
        hi: 'NCERT पृ. 100 के अनुसार 17वीं शताब्दी में विचार प्रयोगों द्वारा सिद्ध किया कि यदि सभी गति अवरोध (घर्षण) हटा दिए जाएँ तो क्षैतिज तल पर वस्तु अनिश्चित काल तक नियत वेग से चलती रहेगी।',
      },
    },
    {
      name: { en: 'Sir Isaac Newton (1643–1727)', hi: 'सर आइजैक न्यूटन (1643–1727)' },
      country: { en: 'English Physicist & Mathematician • Principia (`1687`)', hi: 'अंग्रेज वैज्ञानिक • प्रिंसिपिया (`1687`) व SI मात्रक सम्मान' },
      badge: { en: '3 Laws of Motion • Inertia (`p.100 & 115`)', hi: 'गति के तीन नियम • जड़त्व अवधारणा (`पृष्ठ 100`) ' },
      fact: {
        en: 'Coined **"Inertia"** and published the Three Laws of Motion in **`1687` (*Principia*)**, unifying terrestrial & celestial dynamics. Honoured with SI force unit **newton (`N`)**!',
        hi: 'सन् **`1687`** में *प्रिंसिपिया* ग्रंथ में जड़त्व व गति के तीनों नियम प्रतिपादित किए; बल का SI मात्रक **न्यूटन (`N`)** इन्हीं के सम्मान में रखा गया है (`पृ. 100`)।',
      },
    },
    {
      name: { en: 'ISRO Launch & Chandrayaan-3 Vikram Team (`2023`)', hi: 'ISRO रॉकेट प्रमोचन एवं चंद्रयान-3 विक्रम लैंडर (2023)' },
      country: { en: 'Indian Aerospace Engineering • NCERT Sec 6.6 p.109', hi: 'भारतीय अंतरिक्ष अनुसंधान • पृष्ठ 109 प्रत्यक्ष उदाहरण' },
      badge: { en: 'Newton III Exhaust & Lunar Retro-Braking (`Fig 6.30`)', hi: 'न्यूटन III प्रणोदन व चंद्र दक्षिण ध्रुव पर गति-मंदक प्रज्वलन' },
      fact: {
        en: 'Highlighted on NCERT `p.109`: During soft landing near the Moon’s South Pole, Vikram Lander fired thrusters **in its direction of motion**, using equal opposite reaction thrust to slow down safely in vacuum!',
        hi: 'NCERT पृष्ठ 109 विशेष: चंद्रयान-3 के **विक्रम लैंडर** ने अंतरिक्ष में अपनी गति की ही दिशा में गैसें निष्कासित कर विपरीत प्रतिक्रिया बल से वेग कम करते हुए दक्षिणी ध्रुव पर सफल लैंडिंग की!',
      },
    },
  ],

  visualGallery: [
    {
      id: 'vis-tug-of-war',
      figRef: { en: 'Figure 6.4 (Balanced & Unbalanced Pulls)', hi: 'चित्र 6.4 संदर्भ (संतुलित बनाम असंतुलित रस्साकशी)' },
      title: { en: 'Tug-of-War Net Force Match — Opposing Vector Addition', hi: 'रस्साकशी मुकाबला — विपरीत दिशा बलों का परिणामी प्रभाव (`F₁ − F₂`)' },
      imageUrl: '/ncert-notes/class9-phy-ch6/real/tug-of-war-team.webp',
      hotspots: [
        { en: 'Zero rope motion when team tensions match (`F_net = 0`); net displacement starts strictly toward larger force!', hi: 'दोनों दल बराबर बल लगाएँ तो रस्सी स्थिर (`संतुलित`); एक पक्ष का बल अधिक होते ही उस दिशा में त्वरण!' },
      ],
    },
    {
      id: 'vis-galileo',
      figRef: { en: 'NCERT Bio Box p.100 (Galileo Galilei)', hi: 'वैज्ञानिक परिचय पृ. 100 (गैलीलियो गैलिली)' },
      title: { en: 'Galileo Galilei — Ideal Frictionless Motion & Inertia Pioneer', hi: 'गैलीलियो गैलिली — शून्य-घर्षण विचार प्रयोग व जड़त्व आधार' },
      imageUrl: '/ncert-notes/class9-phy-ch6/real/galileo-galilei.webp',
      hotspots: [
        { en: 'Showed constant-velocity linear motion needs NO net pushing force once friction vanishes.', hi: 'सिद्ध किया कि घर्षण अनुपस्थित होने पर नियत वेग बनाए रखने हेतु बाह्य बल आवश्यक नहीं।' },
      ],
    },
    {
      id: 'vis-isaac-newton',
      figRef: { en: 'NCERT Bio Box p.100 & Project p.115 (Isaac Newton)', hi: 'वैज्ञानिक परिचय पृ. 100 (सर आइजैक न्यूटन)' },
      title: { en: 'Sir Isaac Newton (`1687` Principia) — Three Laws & SI Unit (`N`)', hi: 'सर आइजैक न्यूटन (`प्रिंसिपिया 1687`) — गति के 3 सार्वभौमिक नियम' },
      imageUrl: '/ncert-notes/class9-phy-ch6/real/isaac-newton.webp',
      hotspots: [
        { en: 'Formulated F=ma, Momentum p=mv and Action-Reaction mechanics governing everything from sports to planets.', hi: 'संवेग व त्वरण से जुड़े गति के तीनों नियमों से पृथ्वी व ग्रहों की गति की संपूर्ण व्याख्या की।' },
      ],
    },
    {
      id: 'vis-pslv-launch',
      figRef: { en: 'Figure 6.30 & Science/ISRO Box p.109 (Rocket Propulsion)', hi: 'चित्र 6.30 संदर्भ (`ISRO PSLV प्रमोचन एवं विक्रम लैंडर`)' },
      title: { en: 'ISRO PSLV Lift-Off — Downward Exhaust Gas Drives Upward Thrust', hi: 'ISRO PSLV प्रक्षेपण — नीचे निकलती गैस की प्रतिक्रिया से ऊपर उड़ान' },
      imageUrl: '/ncert-notes/class9-phy-ch6/real/pslv-rocket-launch.webp',
      hotspots: [
        { en: 'Hot exhaust pushes downward (`Action`) while equal opposite gas force pushes rocket upward exceeding weight (`> mg`)!', hi: 'नीचे की ओर निकलती उच्च-वेग गैसें रॉकेट पर ऊपर की ओर भार से अधिक प्रतिक्रिया बल लगाकर उड़ान भरती हैं।' },
      ],
    },
  ],

  activities: [
    {
      num: '6.1',
      title: { en: 'Rubber-Band Taped Coin Stack Across 4 Surfaces (`Wood, Cement, Laminated, Marble` — Fig 6.12)', hi: 'रबड़ बैंड व `10₹` सिक्कों के ढेर से 4 सतहों पर घर्षण तुलना (`चित्र 6.12`)', },
      materials: { en: 'Four ₹10 coins taped vertically, firm rubber band, tape, Wood/Cement/Laminated/Marble surfaces', hi: 'टेप से चिपके चार `₹10` सिक्के, मजबूत रबड़ बैंड, लकड़ी, सीमेंट, पटलित मेज व संगमरमर/टाइल' },
      steps: {
        en: 'Stretch band identically between fixed pins A–B back to same release mark C on each flat surface; launch stack cleanly & record stopping distances!',
        hi: 'प्रत्येक समतल सतह पर समान A, B व C चिह्न बनाकर रबड़ बैंड को ठीक C तक खींचकर सिक्कों का ढेर छोड़ें व रुकने तक तय दूरी मापें।',
      },
      examTakeaway: { en: 'Identical launch push produces shortest stop on rough wood/cement and longest glide on **polished Marble/Tile** (`lowest surface friction -> slowest deceleration`, Fig 6.13)!', hi: 'पॉलिश किए **संगमरमर/टाइल पर घर्षण न्यूनतम** होने से वेग धीरे-धीरे घटता है और सिक्कों का ढेर **सर्वाधिक दूरी** तय करता है!' },
      predictQuestion: {
        prompt: { en: 'In Galileo’s ideal extension of Activity 6.1 (`zero friction horizontal floor`), what happens once the stack leaves the rubber band?', hi: 'यदि क्रियाकलाप 6.1 को शून्य घर्षण वाली पूर्णतः चिकनी क्षैतिज सतह पर किया जाए तो रबड़ से छूटने के बाद क्या होगा (`पृ. 99`)?' },
        options: { en: ['Stops in half distance', 'Moves forever at CONSTANT velocity without stopping!', 'Accelerates faster infinitely'], hi: ['आधी दूरी पर रुकेगा', 'बिना रुके सदैव **नियत वेग** से गतिमान रहेगा!', 'लगातार तेज होता जाएगा'] },
        correctIndex: 1,
        reason: { en: 'Zero friction means zero opposing Net Force (`F_net = 0`) -> zero deceleration -> constant straight-line velocity forever (`Newton I`)!', hi: 'शून्य घर्षण पर गति रोकने वाला कोई परिणामी बल नहीं होता, अतः वस्तु **सदैव नियत वेग से गतिशील** रहेगी!' },
      },
    },
    {
      num: '6.2',
      title: { en: 'Spring Balance Sliding-Force Measurement Across Activity 6.1 Surfaces (`Fig 6.14`)', hi: 'कमानीदार तुला से उन्हीं 4 सतहों के घर्षण बल का प्रत्यक्ष मापन (`चित्र 6.14`)', },
      materials: { en: 'Spring balance (`zeroed horizontally`) hooked to a wooden block across all 4 floors', hi: 'कमानीदार तुला (`क्षैतिज शून्य जाँच`) व हुक लगा लकड़ी का गुटका' },
      steps: {
        en: 'Pull slowly horizontally until block glides at steady constant velocity across each floor -> record spring scale reading (`N`)!',
        hi: 'प्रत्येक सतह पर गुटके को नियत मंद गति से खींचते समय कमानीदार तुला का पाठ्यांक (`N`) लिखें व दूरी से तुलना करें।',
      },
      examTakeaway: { en: 'At steady velocity (`a = 0`), spring pull **EXACTLY equals Friction (`F_pull = f`)**: polished marble shows lowest Newtons (`and longest coin distance in 6.1`)!', hi: 'नियत वेग की स्थिति में तुला का पाठ्यांक ठीक घर्षण बल के बराबर होता है — जिस सतह पर दूरी अधिकतम थी वहाँ तुला पाठ्यांक **न्यूनतम** आता है!' },
      predictQuestion: {
        prompt: { en: 'While pulling a wooden block at constant steady velocity reading `12 N` on the spring balance, what is the Friction Force & Net Force?', hi: 'गुटके को `नियत वेग` से खींचते समय कमानीदार तुला `12 N` दिखाती है — घर्षण बल व परिणामी बल बताएं!' },
        options: { en: ['Friction = 0 N, Net = 12 N', 'Friction = 12 N opposite, Net Force = 0 N!', 'Friction = 24 N, Net = 12 N'], hi: ['घर्षण 0 N, परिणामी 12 N', 'घर्षण = `12 N विपरीत`, परिणामी बल = `0 N`!', 'घर्षण 24 N, परिणामी 12 N'] },
        correctIndex: 1,
        reason: { en: 'Constant velocity implies zero acceleration -> `F_net = 0` -> opposing friction matches `12 N` pull identically (`Ex 6.2 & Ex Q1`)!', hi: 'नियत वेग $\\implies a = 0 \\implies$ परिणामी बल `0 N`, अतः पीछे लगता घर्षण ठीक `12 N` प्रयुक्त बल के बराबर है (`अभ्यास 1`)!' },
      },
    },
    {
      num: '6.3',
      title: { en: 'Trolley + Pulley + Paper Cup Weights: Acceleration ∝ Force (`Slow-Mo Analysis`, Fig 6.17)', hi: 'गाड़ी-घिरनी व कागज-गिलास प्रयोग: नियत द्रव्यमान पर त्वरण ∝ बल (`क्रियाकलाप 6.3`)', },
      materials: { en: 'Cardboard cart with ball-bearing wheels, pencils, pipe pulley, string, paper cup, coins, smartphone slow-mo & balance', hi: 'बॉल बेयरिंग पहिया गाड़ी, धागा, पाइप घिरनी, कागज गिलास, सिक्के व स्लो-मोशन कैमरा' },
      steps: {
        en: 'Measure traverse time `T₁` pulling empty/light cup across fixed table length `s`. Double hanging cup mass (`doubling F`) keeping cart untouched -> measure shorter `T₂`!',
        hi: 'नियत दूरी $s$ पार करने का समय `T₁` स्लो-मोशन से नापें; अब गाड़ी बदले बिना लटकते गिलास का भार/बल दोगुना कर नया समय `T₂` दर्ज करें (`a₁/a₂ = T₂²/T₁²`)।',
      },
      examTakeaway: { en: 'Higher pulling cup weight slashes crossing time (`T₂ < T₁`) via $s=\\frac{1}{2}aT^2$ -> proves **Acceleration increases with Net Force (`a ∝ F`)**!', hi: 'खींचने वाला भार बढ़ाने से समय घटता है और त्वरण बढ़ता है — सिद्ध करता है कि समान द्रव्यमान के लिए **`a ∝ F`** (`न्यूटन II`)!' },
      predictQuestion: {
        prompt: { en: 'If hanging weight doubles Force from `F` to `2F` ideally, what happens to travel time `T` for the same distance `s` (`u = 0`)?', hi: 'यदि समान दूरी $s$ ($u=0$) के लिए आदर्श स्थिति में बल $F$ से दोगुना (`2F`) कर दें तो समय $T$ पर क्या प्रभाव पड़ेगा?' },
        options: { en: ['Halves (`T/2`)', 'Drops by `1/√2` (acceleration doubles `a ∝ F`)', 'Doubles (`2T`)'], hi: ['आधा (`T/2`)', '`1/√2` गुना होगा (क्योंकि $a$ दोगुना व $s = \\frac{1}{2}aT^2$)', 'दोगुना (`2T`)'] },
        correctIndex: 1,
        reason: { en: 'Doubling force doubles `a`, so from $s = \\frac{1}{2}aT^2$, time scales by $1/\\sqrt{2}$ (`~0.71 T₁`)!', hi: 'बल दोगुना करने पर $a$ दोगुना होता है, अतः $s=\\frac{1}{2}aT^2$ से नया समय $T_2 = T_1/\\sqrt{2}$ होगा!' },
      },
    },
    {
      num: '6.4',
      title: { en: 'Doubling Cart Mass Under Constant Cup Force: Acceleration ∝ 1/Mass (`NCERT p.103`)', hi: 'नियत बल पर गाड़ी का द्रव्यमान दोगुना करना: त्वरण ∝ 1/द्रव्यमान (`क्रियाकलाप 6.4`)', },
      materials: { en: 'Same trolley-pulley track + extra weights added inside trolley + fixed hanging cup mass', hi: 'वही घिरनी गाड़ी सेटअप + गाड़ी के अंदर अतिरिक्त बाट व स्थिर गिलास भार' },
      steps: {
        en: 'Keep hanging pulling cup UNCHANGED; double trolley total mass & time same track distance `s` in slow motion.',
        hi: 'खींचने वाले गिलास का भार बिल्कुल न बदलें; गाड़ी में भार डालकर कुल द्रव्यमान दोगुना करें व नया समय नापें।',
      },
      examTakeaway: { en: 'Heavier trolley crosses slower (`less acceleration!`) under IDENTICAL Force -> proves **`a ∝ 1/m`** (`Newton II: F = ma`)!', hi: 'समान बल लगाने पर भी भारी गाड़ी को कम त्वरण मिलता है — सिद्ध करता है कि दिया गया बल उत्पन्न त्वरण **`द्रव्यमान के व्युत्क्रमानुपाती (a ∝ 1/m)`** होता है!' },
      predictQuestion: {
        prompt: { en: 'Why did measured cart acceleration slightly undercut exact `2×` or `0.5×` textbook ratios in Activities 6.3–6.4 (`p.104 Box`)?', hi: 'क्रियाकलाप 6.3–6.4 में वास्तविक मापा त्वरण ठीक दोगुना या आधा क्यों नहीं मिल पाता (`जिज्ञासा-सूत्र पृ. 104`)?' },
        options: { en: ['Gravity disappears sideways', 'Rolling friction on wheels & minor timing measurement errors', 'Newton II fails for cardboard'], hi: ['गुरुत्व समाप्त हो जाता है', 'पहियों-सतह के मध्य **घर्षण बल** तथा मापन त्रुटियाँ', 'गत्ते पर नियम लागू नहीं होता'] },
        correctIndex: 1,
        reason: { en: 'Curiosity Box (`p.104`): Real wheels still experience axle/surface friction opposing cup pull slightly!', hi: 'पृष्ठ 104 बॉक्स: वास्तविक प्रयोग में पहियों व सतह के बीच मौजूद घर्षण व मापन त्रुटि आदर्श अनुपात को थोड़ा बदलती हैं।' },
      },
    },
    {
      num: '6.5',
      title: { en: 'Rolling-Chair Push & Pull Against Heavy Table (`Action–Reaction Demo`, Fig 6.23)', hi: 'पहियेदार कुर्सी से भारी मेज को धकेलना व खींचना (`क्रिया-प्रतिक्रिया`, चित्र 6.23)', },
      materials: { en: 'Low-friction wheeled office/lab chair + heavy immovable table', hi: 'पहियों वाली कुर्सी व एक भारी मेज' },
      steps: {
        en: 'Lift feet clear off floor; (1) push table forward -> watch chair direction; (2) pull table toward you -> watch chair motion!',
        hi: 'पैर जमीन से ऊपर उठाकर (1) मेज को आगे धकेलें व (2) अपनी ओर खींचें — अपनी कुर्सी की गति की दिशा देखें।',
      },
      examTakeaway: { en: 'Pushing table forward moves chair **BACKWARD**; pulling table toward you moves chair **FORWARD** -> mutual forces always point opposite (`Newton III`)!', hi: 'मेज को आगे धकेलने पर कुर्सी **पीछे** जाती है व मेज को खींचने पर **आगे** — हर क्रिया में मेज ने आप पर बराबर विपरीत बल लगाया!' },
      predictQuestion: {
        prompt: { en: 'Sitting on a skate/rolling chair with feet lifted, pushing forward on a solid wall accelerates you in which direction?', hi: 'पहिया-कुर्सी पर पैर उठाकर दीवार को आगे जोर से धकेलने पर आप किस दिशा में गति करेंगे?' },
        options: { en: ['Forward into wall', 'Directly BACKWARD away from wall (`equal opposite wall reaction`)', 'Sideways vertically'], hi: ['दीवार की ओर आगे', 'दीवार से दूर **ठीक पीछे की ओर** (प्रतिक्रिया बल द्वारा)', 'बाहर ऊपर की ओर'] },
        correctIndex: 1,
        reason: { en: 'Your forward push on wall (`Action`) triggers equal opposite wall push backward on you (`Reaction`) moving your wheeled chair!', hi: 'दीवार पर आगे लगाई क्रिया के विपरीत दीवार आपके हाथों को पीछे धकेलती है!' },
      },
    },
    {
      num: '6.6',
      title: { en: 'Two Interlocked Spring Balances: Proof of Equal Force Magnitude (`Fig 6.26`)', hi: 'दो आपस में जुड़ी कमानीदार तुलाएँ: बराबर परिमाण सत्यापन (`चित्र 6.26`)', },
      materials: { en: 'Two identical calibrated spring balances hooked end-to-end (`one anchored fixed`)', hi: 'दो सर्वसम कमानीदार तुलाएँ (एक हुक आपस में व एक सिरा स्थिर)' },
      steps: {
        en: 'Anchor left balance A fixed (`wall/hand`); pull right balance B horizontally across different forces `10 N, 20 N, 35 N` -> compare readings simultaneously!',
        hi: 'एक तुला को स्थिर पकड़कर दूसरी तुला के मुक्त सिरे को अलग-अलग बलों से खींचें व दोनों का पाठ्यांक मिलाएं।',
      },
      examTakeaway: { en: 'Both balances **ALWAYS display IDENTICAL readings** at every pull level -> direct visual proof that **`|Force A on B| = |Force B on A|` (`Newton III`)**!', hi: 'दोनों तुलाओं का पाठ्यांक **प्रत्येक बार बिल्कुल बराबर** रहता है — सीधा प्रमाण कि क्रिया व प्रतिक्रिया परिमाण में सदा समान होते हैं!' },
      predictQuestion: {
        prompt: { en: 'If Spring Balance B pulls Balance A rightward with `24 N`, what does Balance A read simultaneously?', hi: 'यदि दाईं कमानीदार तुला B को `24 N` से खींचा जाए तो स्थिर जुड़ी तुला A का पाठ्यांक कितना होगा?' },
        options: { en: ['`0 N` (since anchored stationary)', '`24 N` (identical equal-opposite action-reaction)', '`48 N` (doubled)'], hi: ['`0 N` (स्थिर बंधी होने से)', '`24 N` (समान और विपरीत क्रिया-प्रतिक्रिया)', '`48 N`'] },
        correctIndex: 1,
        reason: { en: 'Activity 6.6 directly verifies both scales ALWAYS match (`24 N` & `24 N` opposite)!', hi: 'क्रियाकलाप 6.6 अनुसार जुड़ी दोनों तुलाएँ सदैव समान मान (`24 N`) दर्शाती हैं।' },
      },
    },
    {
      num: '6.7',
      title: { en: 'Balloon–Straw–String Rocket Thrust Experiment (`Principle of Space Rockets`, Fig 6.29)', hi: 'गुब्बारा–स्ट्रॉ–धागा रॉकेट प्रयोग (`रॉकेट प्रणोदन सिद्धांत`, चित्र 6.29)', },
      materials: { en: 'Large inflated balloon, drinking straw, adhesive tape, taut horizontal string between two hooks', hi: 'बड़ा गुब्बारा, ड्रिंकिंग स्ट्रॉ, टेप व दो कीलों के बीच तना लंबा धागा' },
      steps: {
        en: 'Thread string through taped straw under inflated balloon (`pinched shut`); release nozzle and observe opposing motion vs escaping air jet!',
        hi: 'फूले गुब्बारे की पीठ पर स्ट्रॉ चिपका कर धागा गुजारें; अब मुँह खोलें व निकलती हवा तथा गुब्बारे की दिशा देखें।',
      },
      examTakeaway: { en: 'Squeezed elastic rubber pushes air backward (`Action`); **escaping air drives balloon forward (`Reaction`)**—identical principle launches rockets & slows **Chandrayaan-3 Vikram Lander**!', hi: 'पीछे निकलती हवा (`क्रिया`) के विपरीत **गुब्बारे पर आगे प्रतिक्रिया बल** लगता है — यही **रॉकेट उड़ान** व विक्रम लैंडर ब्रेकिंग का सिद्धांत है!' },
      predictQuestion: {
        prompt: { en: 'A rocket blasts off vertically from Sriharikota (`or brakes Moon lander`). What directly pushes the rocket upward?', hi: 'श्रीहरिकोटा से रॉकेट उड़ते समय रॉकेट को ऊपर कौन-सा बल धकेलता है?' },
        options: { en: ['Air pressure under ground launchpad only', 'Equal opposite **Reaction Force of downwardly ejected hot gases** (`> rocket weight`)', 'Magnetic repulsion from Earth poles'], hi: ['केवल भूमि की हवा का दबाव', 'नीचे निष्कासित गर्म गैसों पर लगाए बल की **ऊपरी प्रतिक्रिया (`> भार`)**', 'पृथ्वी का चुंबकीय प्रतिकर्षण'] },
        correctIndex: 1,
        reason: { en: 'Action = Engine pushes exhaust gases down; Reaction = Exhaust gases push Rocket up (`works in vacuum space too`, `Fig 6.30`)!', hi: 'रॉकेट इंजन गैसों को नीचे धकेलता है और गैसें रॉकेट को ऊपर धकेलती हैं (इसलिए यह निर्वात में भी कार्य करता है)!' },
      },
    },
  ],

  tables: [
    {
      id: 'table-6-force-types-units',
      title: { en: 'Core Mechanics Quantities: Definitions, Vectors, Formulas & SI Units (`NCERT Ch 6`)', hi: 'अध्याय 6 की प्रमुख भौतिक राशियाँ, सूत्र, सदिश प्रकृति व SI मात्रक तालिका' },
      headers: {
        en: ['Quantity', 'Formula', 'Scalar / Vector', 'SI Unit (`Rule`) & CBT Key Fact'],
        hi: ['भौतिक राशि', 'मानक सूत्र', 'अदिश / सदिश', 'SI मात्रक व परीक्षा तथ्य'],
      },
      rows: [
        [{ en: 'Force (`बल`)', hi: 'बल (`Force`)' }, { en: '$F = m \\cdot a$ (`Weight = mg`)', hi: '$F = ma$ (`भार = mg`)' }, { en: '**Vector (`सदिश`)**', hi: '**सदिश (`Vector`)**' }, { en: '**`newton` (`N`)** $= 1\\text{ kg m s}^{-2}$; `100 g` weight ≈ **`1 N`** (`Yoctonewton = 10⁻²⁴ N`)' }],
        [{ en: 'Momentum (`संवेग`)', hi: 'संवेग (`Momentum`)' }, { en: '$p = m \\cdot v$', hi: '$p = mv$' }, { en: '**Vector** (`along v`)', hi: '**सदिश** (`वेग दिशा`)' }, { en: '**`kg m s⁻¹`** (rate $\\Delta p/\\Delta t = \\text{Net Force}$ — `Tech Gr-III 2024`)' }],
        [{ en: 'Impulse (`आवेग`)', hi: 'आवेग (`Impulse`)' }, { en: '$J = F \\cdot \\Delta t = \\Delta p$', hi: '$J = F \\times \\Delta t = \\Delta p$' }, { en: '**Vector** (`along F`)', hi: '**सदिश** (`बल दिशा`)' }, { en: '**`N·s`** or **`kg m s⁻¹`** (`same dimensions as Momentum!`)' }],
        [{ en: 'Inertia (`जड़त्व`)', hi: 'जड़त्व (`Inertia`)' }, { en: 'Qualitative measure `∝ Mass (m)`', hi: '`द्रव्यमान के समानुपाती`' }, { en: 'Property (`NOT a force!`)', hi: 'पिंड का मूल गुणधर्म' }, { en: 'Assessed via **Mass (`kg`)** (`heavy stone/truck has max Inertia`!)' }],
      ],
    },
    {
      id: 'table-6-newton-laws-summary',
      title: { en: 'Newton’s Three Laws of Motion (`1687 Principia`) — Statement, Meaning & Landmark Examples', hi: 'न्यूटन के गति के तीनों नियम (`1687`) — कथन, गणितीय रूप एवं प्रमुख परीक्षा उदाहरण' },
      headers: {
        en: ['Law Name', 'Exact NCERT Formulation (`p.100, 104, 108`)', 'Equation / Condition', 'Signature Textbook & Railway Examples'],
        hi: ['गति नियम', 'NCERT मानक कथन', 'समीकरण / शर्त', 'पुस्तक व रेलवे परीक्षा में पूछे गए उदाहरण'],
      },
      rows: [
        [{ en: '**First Law** (`Inertia`)', hi: '**प्रथम नियम** (`जड़त्व`)' }, { en: 'Rest or constant straight-line velocity persists unless **Net Force ≠ 0**', hi: 'शून्य परिणामी बल पर विराम व नियत वेग अवस्था अक्षुण्ण रहती है' }, { en: '$F_{\\text{net}} = 0 \\iff a = 0$', hi: '$F_{\\text{net}} = 0 \\iff a = 0$' }, { en: 'Stationary book on table, smooth-surface glide, car passenger jerk on sudden brake/start (`PYQ #6, #7, #19`)' }],
        [{ en: '**Second Law** (`Acceleration / Momentum`)', hi: '**द्वितीय नियम** (`संवेग व F=ma`)' }, { en: 'Rate of momentum change $\\propto$ Net Force along force direction', hi: 'त्वरण परिणामी बल के समानुपाती, द्रव्यमान के व्युत्क्रमानुपाती' }, { en: '$F = ma = \\frac{\\Delta p}{\\Delta t}$ (`k=1`)', hi: '$F = ma = \\frac{\\Delta p}{\\Delta t}$' }, { en: 'Cricket fielder pulling hands back (`Fig 6.18`), Car Airbags (`Fig 6.19`), High-jump foam pit, Truck vs Car push (`PYQ #2, #8, #12, #25`)' }],
        [{ en: '**Third Law** (`Action–Reaction`)', hi: '**तृतीय नियम** (`क्रिया-प्रतिक्रिया`)' }, { en: 'Object A pushes B -> B simultaneously exerts **equal & opposite** force on A', hi: 'दो वस्तुओं पर सदा **समान व विपरीत** बल (`अलग वस्तुओं पर`)' }, { en: '$\\vec{F}_{AB} = -\\vec{F}_{BA}$', hi: '$\\vec{F}_{AB} = -\\vec{F}_{BA}$ (`2 अलग पिंड`)' }, { en: 'PSLV rocket launch (`Fig 6.30`), Chandrayaan-3 Vikram braking, Gun recoil, Rowing boat / Sailor shore jump (`PYQ #10, #16, #22, #40`)' }],
      ],
    },
    {
      id: 'table-6-net-force-cases',
      title: { en: 'Net Force (`F_net`) & Motion State Decision Matrix (`Examples 6.1–6.6 + Ex Q6`)', hi: 'परिणामी बल (`F_net`) व गति की स्थिति पहचान मैट्रिक्स (`उदाहरण व ग्राफ नियम`)' },
      headers: {
        en: ['Applied Forces Configuration', 'Net Force Formula', 'Acceleration & Velocity Behaviour'],
        hi: ['आरोपित बलों की स्थिति', 'परिणामी बल सूत्र', 'त्वरण व वेग पर प्रभाव'],
      },
      rows: [
        [{ en: 'Two equal opposite forces on ONE body (`10 N vs 10 N`)', hi: 'एक वस्तु पर समान व विपरीत बल (`10 N vs 10 N`)' }, { en: '**$F_{\\text{net}} = 0\\text{ N}$** (`Balanced`)', hi: '**$0\\text{ N}$** (`संतुलित`)' }, { en: '$a = 0$ — if at rest stays at rest; if moving stays at **CONSTANT velocity** (`Ex 6.2`)!' }],
        [{ en: 'Two aligned forces (`Ex 6.1 a`: `10 N` & `6 N` right)', hi: 'एक ही दिशा में बल (`उदा. 6.1 क`: `10 N व 6 N`)' }, { en: '**$F_{\\text{net}} = F_1 + F_2 = 16\\text{ N}$** right', hi: '**$10 + 6 = 16\\text{ N}$** दाएँ' }, { en: 'Accelerates rightward ($a = 16/m$), speed increases (`flat upward v-t line`).' }],
        [{ en: 'Unequal opposite (`Ex 6.1 b`: `10 N` vs `6 N`; `Ex 6.5`: `55 N vs 50 N`)', hi: 'असमान विपरीत बल (`55 N` बनाम `50 N` घर्षण)' }, { en: '**$F_{\\text{net}} = 10 - 6 = 4\\text{ N}$** (`along larger`)', hi: '**$55 - 50 = 5\\text{ N}$** बड़े बल की ओर' }, { en: 'Accelerates in larger-force direction (`parabolic curved x-t graph = Object C`, Ex Q6!).' }],
        [{ en: 'Coupled `m₁ + m₂` pulled by `F` (`Sec 6.7`)', hi: 'डोरी से जुड़े दो पिंडों (`m₁ + m₂`) पर बाह्य बल $F$' }, { en: 'Internal Tension `T` cancels -> External **$F$** moves both', hi: 'आंतरिक तनाव $T$ रद्द $\\implies$ बाह्य बल $F$' }, { en: 'Shared system acceleration **$a = \\frac{F}{m_1 + m_2}$**; Tension **$T = m_2 a$**!' }],
      ],
    },
    {
      id: 'table-6-worked-examples',
      title: { en: 'All NCERT Worked Examples (`Ex 6.1–6.8`) & Numerical Solutions Cheat Sheet', hi: 'NCERT अध्याय 6 के समस्त हल उदाहरण (`6.1 से 6.8`) त्वरित पुनरावलोकन' },
      headers: {
        en: ['Example #', 'Given Problem Scenario', 'Formula Applied & Exact Result'],
        hi: ['उदाहरण सं.', 'दिया गया प्रश्न परिदृश्य', 'प्रयुक्त सूत्र व सटीक उत्तर'],
      },
      rows: [
        [{ en: 'Ex 6.1–6.3', hi: 'उदा. 6.1–6.3' }, { en: '`10N/6N` Net Force (`6.1`), Push `= f` moving (`6.2`), `F_net=0` graphs (`6.3`)', hi: '`10N/6N` परिणामी बल, `F=f` गतिमान, शून्य-बल ग्राफ' }, { en: '`16 N` or `4 N`; Constant velocity continues; Rest (`flat x-t`) / Uniform (`inclined straight x-t`)!' }],
        [{ en: 'Ex 6.4 (`Weightlifter`)', hi: 'उदा. 6.4 (`भारोत्तोलक`)' }, { en: '`10 kg` bar + `10 kg` + `10 kg` discs = **`30 kg`** held motionless', hi: 'कुल `30 kg` भार दंड हाथ में स्थिर (`चित्र 6.8`)' }, { en: '$F_{\\text{up}} = mg = 30 \\times 9.8 = \\mathbf{294\\text{ N}}$ upward!' }],
        [{ en: 'Ex 6.5 (`25 kg Box`)', hi: 'उदा. 6.5 (`25 kg गुटका`)' }, { en: 'Max `f = 50 N`: push **(i) `50 N`**, **(ii) `55 N`** -> displacement in `2 s`', hi: 'अधिकतम घर्षण `50 N`: `(i) 50 N`, `(ii) 55 N` पर `2 s` दूरी' }, { en: '**(i)** Balanced -> `0 m`. **(ii)** `F_net = 5 N` -> `a = 5/25 = 0.2` -> **`s = ½(0.2)(2²) = 0.4 m`**!' }],
        [{ en: 'Ex 6.6 (`1500 kg Car`)', hi: 'उदा. 6.6 (`1500 kg कार`)' }, { en: '`v-t` (`Fig 6.21`): `0→10 m/s` (`0–5s`), steady (`5–10s`), `10→0` (`10–15s`)', hi: 'स्पोर्ट्स कार ग्राफ (`0–5s, 5–10s, 10–15s` बल)' }, { en: '`0–5s`: **`+3000 N` East** | `5–10s`: **`0 N`** | `10–15s`: **`−3000 N` West**!' }],
        [{ en: 'Ex 6.7–6.8 (`Newton III`)', hi: 'उदा. 6.7–6.8 (`प्रतिक्षेप`)' }, { en: 'Earth vs Fruit (`6.7`) + `0.1 kg` bullet & `5 kg` gun under **`2 N`** (`6.8`)', hi: 'फल-पृथ्वी आकर्षण + `5 kg` बंदूक से `0.1 kg` गोली (`2 N`)' }, { en: 'Force `2 N` identical on BOTH; Gun **$a = 2/5 = 0.4\\text{ m s}^{-2}$**, Bullet **$a = 2/0.1 = 20\\text{ m s}^{-2}$**!' }],
      ],
    },
    {
      id: 'table-6-impulse-practical',
      title: { en: 'Impulse ($F \\cdot \\Delta t = \\Delta p$) & Friction/Action-Reaction Daily Phenomena', hi: 'दैनिक जीवन एवं खेलों में आवेग, घर्षण व क्रिया-प्रतिक्रिया अनुप्रयोग तालिका' },
      headers: {
        en: ['Everyday Phenomenon', 'Physical Mechanism (`NCERT Ref`)', 'Exam Question Answer Key'],
        hi: ['दैनिक / वैज्ञानिक घटना', 'भौतिक सिद्धांत (`NCERT संदर्भ`)', 'परीक्षा में सही उत्तर पहचान'],
      },
      rows: [
        [{ en: 'Cricket fielder pulling hands back (`Fig 6.18`) / Airbags (`Fig 6.19`) / Foam mat (`Fig 6.39`)', hi: 'कैच लेते समय हाथ पीछे / कार एयरबैग / ऊँची कूद रेत-फोम गद्दा' }, { en: 'Maximizes stopping interval **`Δt`** -> minimizes deceleration & average impact force **`F = Δp/Δt`**', hi: '**संपर्क समय (`Δt`) बढ़ता है** $\\implies$ त्वरण व चोट लगाने वाला बल तेजी से घटता है!' }, { en: 'Newton **2nd Law** (`Rate of momentum change`)' }],
        [{ en: 'Coconut cracked in single sharp floor strike (`Fig 6.20`)', hi: 'कठोर फर्श पर पटकते ही नारियल का तुरंत टूट जाना' }, { en: 'Stops almost instantly (**tiny `Δt`**) -> creates huge decelerating Force breaking shell!', hi: 'अति सूक्ष्म समय `Δt` में रुकने से विशाल प्रहार बल उत्पन्न होता है।' }, { en: 'Short `Δt` -> Large Peak Force (`Newton II`)' }],
        [{ en: 'Shoe grooves, tyre treads & rope wrapped around dock bollard (`Fig 6.43`)', hi: 'जूतों/टायरों में खाँचे व खंभे पर कई फेरे रस्सी (`चित्र 6.43`)' }, { en: 'Walking/tyre friction pushes forward; multiple wraps multiply grip non-linearly!', hi: 'खाँचे घर्षण बढ़ाकर आगे धकेलने में मदद करते हैं; अधिक फेरे से पकड़ गुणोत्तर बढ़ती है।' }, { en: 'Friction can ASSIST motion (`Newton III`)' }],
        [{ en: 'PSLV Rocket (`p.109`), Vikram Lander braking, Firehose push (`Think Q9`), Sailor boat jump (`Ex Q7`)', hi: 'रॉकेट, विक्रम लैंडर, दमकल पाइप धक्का, नाव से कूद' }, { en: 'High-speed backward gas/water/jump triggers equal opposite forward/backward reaction!', hi: 'गैस/जल/नाविक की क्रिया के विपरीत दूसरे पिंड पर समान प्रतिक्रिया बल।' }, { en: 'Newton **3rd Law** (`2 separate bodies`)' }],
      ],
    },
  ],

  inTextQuestions: [
    { num: 'Think Q1', q: { en: 'Think Q1 (`p.97`, Fig 6.8): A weightlifter raises a barbell overhead and holds it STILL in the air. List the two forces acting on it—are they balanced?', hi: 'सोचिए 1 (`पृ.97`, चित्र 6.8): एक भारोत्तोलक भार दंड को ऊपर उठाकर स्थिर पकड़े रखती है। दंड पर लगने वाले दो बल लिखें — क्या ये संतुलित हैं?' }, a: { en: 'Two forces act vertically: **(1) Downward Gravitational Force (`Weight = mg`)** by Earth, and **(2) Equal Upward Holding Force** applied by her hands (`294 N` in Ex 6.4). Since barbell stays stationary (`a = 0`), **YES — both forces are strictly BALANCED (`Net Force = 0 N`)**!', hi: 'दंड पर दो बल हैं: **(1) नीचे की ओर गुरुत्वीय भार ($mg$)** और **(2) भारोत्तोलक द्वारा ऊपर की ओर लगाया गया बराबर बल**। चूँकि दंड स्थिर (`a = 0`) है, अतः ये दोनों बल **पूर्णतः संतुलित (`F_net = 0 N`)** हैं!' } },
    { num: 'Think Q2', q: { en: 'Think Q2 (`p.97`, Fig 6.9): Two arm-wrestlers R (`left`) and S (`right`) clasp hands; suddenly hands tip forward toward YOU (`towards player R’s side / out of page — R vs S`). Are forces balanced? Who pushed harder?', hi: 'सोचिए 2 (`पृ.97`, चित्र 6.9): दो खिलाड़ी R व S पंजा-कुश्ती लड़ रहे हैं; हाथ आगे झुकने के क्षण क्या बल संतुलित हैं? किस खिलाड़ी ने अधिक बल लगाया?' }, a: { en: '**NO, forces are UNBALANCED** (`hands accelerated into movement!`). According to NCERT Answer Key (`ihsc1an`), **Player `S` applied greater force**, creating a non-zero net force tipping the arm cleanly!', hi: '**जी नहीं**, बल संतुलित **नहीं** हैं क्योंकि हाथ गति कर झुक गए! आधिकारिक NCERT उत्तर कुंजी (`ihsc1an`) अनुसार **खिलाड़ी `S` ने अधिक बल लगाया** जिससे परिणामी बल उत्पन्न हुआ!' } },
    { num: 'Think Q3', q: { en: 'Think Q3 (`p.101`): An object is moving at CONSTANT velocity. Is any Net Force acting on it?', hi: 'सोचिए 3 (`पृ.101`): एक वस्तु नियत वेग से गति कर रही है। क्या उस पर कोई परिणामी बल कार्य कर रहा है?' }, a: { en: '**NO!** Constant velocity (`fixed speed + fixed straight direction`) means acceleration $a = 0$, so by Newton I & II, **Net Force $= m \\times 0 = \\mathbf{0\\text{ N}}$** (`zero net force!`)!', hi: '**जी नहीं (`0 N`)!** नियत वेग (`अपरिवर्तित परिमाण व दिशा`) का अर्थ है त्वरण शून्य ($a=0$), अतः वस्तु पर कोई परिणामी बल कार्य **नहीं** कर रहा है!' } },
    { num: 'Think Q4', q: { en: 'Think Q4 (`p.101`): If NO Net Force acts on an object, which states are possible? (i) At rest stays at rest; (ii) Already moving continues at constant velocity; (iii) Moves with constant acceleration.', hi: 'सोचिए 4 (`पृ.101`): यदि वस्तु पर कोई परिणामी बल न लग रहा हो, तो कौन-सी स्थितियाँ संभव हैं? (i) विराम में ही रहेगी, (ii) नियत वेग से चलती रहेगी, (iii) नियत त्वरण से चलेगी।' }, a: { en: '**`(i)` and `(ii)` ONLY!** Without non-zero Net Force, velocity cannot change (`(iii) constant acceleration is IMPOSSIBLE since a = F_net / m = 0`).', hi: '**केवल `(i)` और `(ii)` संभव हैं!** शून्य परिणामी बल पर वस्तु में कोई त्वरण (`स्थिति iii`) उत्पन्न नहीं हो सकता (`आधिकारिक उत्तर कुंजी प्रमाणित`)।' } },
    { num: 'Think Q5', q: { en: 'Think Q5 (`p.101`): In real life, forces act everywhere yet how can an object achieve ZERO Net Force? Give an everyday example.', hi: 'सोचिए 5 (`पृ.101`): दैनिक जीवन में अनेक बल लगते हुए भी वस्तु पर परिणामी बल शून्य कैसे प्राप्त किया जा सकता है? एक उदाहरण दें।' }, a: { en: 'Apply **multiple forces whose vector sum balances to zero**! Example (`Ex 6.2`): Pushing a moving wooden box horizontally with `50 N` forward while surface Friction pulls `50 N` backward (while `Normal = mg` vertically) -> all forces act simultaneously, yet **Net Force $= 0\\text{ N}$** (`steady motion`)!', hi: 'अनेक बल लगाकर यदि वे परस्पर बराबर व विपरीत संतुलित हो जाएँ तो परिणामी बल शून्य हो सकता है! उदाहरण: **उदाहरण 6.2** — गतिमान बक्से पर आगे `50 N` धक्का व पीछे `50 N` घर्षण (तथा ऊपर अभिलंब व नीचे भार) एक-दूसरे को संतुलित कर `F_net = 0 N` बना देते हैं।' } },
    { num: 'Think Q6', q: { en: 'Think Q6 (`p.106`): A `100 g` toy car moves steadily at constant velocity `0.5 m s⁻¹`. Find the Net Force acting on the toy car.', hi: 'सोचिए 6 (`पृ.106`): `100 g` द्रव्यमान की खिलौना कार `0.5 m s⁻¹` के **नियत वेग** से चल रही है। कार पर लगने वाला परिणामी बल कितना है?' }, a: { en: '**`0 N`!** Watch out for the numerical trap (`100 g` and `0.5 m/s` are distractors!): because velocity is **CONSTANT**, acceleration $a = 0 \\implies F_{\\text{net}} = 0.1 \\times 0 = \\mathbf{0\\text{ N}}$!', hi: '**`0 N` (`शून्य न्यूटन`)!** संख्याओं का जाल न पकड़ें — क्योंकि कार **नियत वेग** से चल रही है, अतः त्वरण $a = 0 \\implies F_{\\text{net}} = m \\times 0 = \\mathbf{0\\text{ N}}$ (`उत्तर कुंजी प्रमाणित`)!' } },
    { num: 'Think Q7', q: { en: 'Think Q7 (`p.106`): Two children of DIFFERENT masses sit on identical swings. To produce the SAME initial acceleration in both, which child needs more pushing force and why?', hi: 'सोचिए 7 (`पृ.106`): अलग-अलग द्रव्यमान वाले दो बच्चे समान झूलों पर बैठे हैं — दोनों को बराबर प्रारंभिक त्वरण देने के लिए किस बच्चे पर अधिक बल लगाना होगा?' }, a: { en: 'By Newton’s Second Law ($F = m a$), at equal acceleration $a$, force scales directly with mass (**$F \\propto m$**). Thus the **HEAVIER child (`greater mass & greater inertia`) needs MORE Force**!', hi: 'न्यूटन के द्वितीय नियम ($F = ma$) से, समान त्वरण $a$ के लिए अधिक बल की आवश्यकता **अधिक द्रव्यमान (भारी बच्चे)** पर होगी क्योंकि $F \\propto m$ होता है!' } },
    { num: 'Think Q8', q: { en: 'Think Q8 (`p.106`): Why are fragile glass items packed in bubble-wrap plastic sheets or dry straw during transport?', hi: 'सोचिए 8 (`पृ.106`): काँच की वस्तुओं को परिवहन में टूट-फूट से बचाने के लिए बबल-रैप या सूखी घास में क्यों लपेटा जाता है?' }, a: { en: 'During bumps or drops, compressible air-filled bubbles / straw **extend the collision stopping time (`Δt`)**, reducing average decelerating **Impact Force (`F = Δp / Δt`)** cleanly so fragile glass avoids cracking (`Newton II Impulse`)!', hi: 'झटके लगने पर हवा भरे बुलबुले या सूखी घास **टक्कर व वेग-परिवर्तन का समय (`Δt`) बढ़ा** देते हैं जिससे काँच पर लगने वाला प्रहार बल ($F = \\Delta p/\\Delta t$) बहुत कम हो जाता है व काँच नहीं टूटता!' } },
    { num: 'Think Q9', q: { en: 'Think Q9 (`p.110`): Why do firefighters often struggle hard just to grip a gushing firehose steady?', hi: 'सोचिए 9 (`पृ.110`): कभी-कभी तेज जल फेंकने वाले पाइप (firehose) को थामे रखने के लिए दमकलकर्मी को काफी संघर्ष क्यों करना पड़ता है?' }, a: { en: 'By **Newton’s Third Law**, the nozzle accelerates a massive high-speed stream of water **forward (`Action`)**, which exerts an equally powerful **backward Reaction Force** slamming the firehose toward the firefighter!', hi: 'नोजल से भारी मात्रा में जल अत्यंत तीव्र वेग से **आगे** निकलता है (`क्रिया`); **न्यूटन के तृतीय नियम** से जल की यह धार पाइप पर उतने ही प्रबल परिमाण का **पीछे की ओर प्रतिक्रिया बल** लगाती है, जिससे पाइप को थामना कठिन हो जाता है!' } },
    { num: 'Think Q10', q: { en: 'Think Q10 (`p.110`): A spacecraft cruises through deep space where gravity is negligible. Suggest how it can alter its velocity/direction without anything to push off.', hi: 'सोचिए 10 (`पृ.110`): शून्य गुरुत्व अंतरिक्ष में गतिमान अंतरिक्ष यान अपनी चाल या दिशा कैसे बदल सकता है?' }, a: { en: 'It can fire onboard **rockets / thrusters releasing gas opposite to the desired change (`Newton III`)**: exhausting gas forward **brakes** it (`like Chandrayaan-3 Vikram`), firing sideways **turns** it, and firing backward **speeds** it up — requiring NO outside air!', hi: 'ऑनबोर्ड थ्रस्टरों से वांछित दिशा के विपरीत तीव्र गति से **गैस निष्कासित करके** (`न्यूटन III`): सामने की ओर गैस छोड़ने से यान **धीमा (`जैसे चंद्रयान-3 विक्रम लैंडर`)**, पीछे छोड़ने से **तेज**, व बगल में छोड़ने से **मुड़** सकता है — इसके लिए बाहरी हवा आवश्यक नहीं!' } },
  ],

  exercises: [
    { num: 1, q: { en: 'Ex Q1: A table is moved over a floor at CONSTANT velocity using a horizontal push `F`. What is the magnitude & direction of Friction force exerted by floor on table?', hi: 'अभ्यास 1: क्षैतिज बल `F` लगाकर किसी मेज को फर्श पर **नियत वेग** से चलाया जाता है। फर्श द्वारा मेज पर लगाया गया घर्षण बल कितना होगा?' }, a: { en: '**Magnitude `F`, acting OPPOSITE to the applied push/motion!** Constant velocity means $a = 0 \\implies F_{\\text{net}} = 0$, so backward Friction balances forward `F` exactly.', hi: '**परिमाण `F` के ठीक बराबर, प्रयुक्त बल (गति) की विपरीत दिशा में!** नियत वेग पर परिणामी बल शून्य ($F_{\\text{net}}=0$) होने हेतु घर्षण को $F$ के बराबर व विपरीत होना ही होगा।' } },
    { num: 2, q: { en: 'Ex Q2: Ball on smooth frictionless surface: Pick correct choice (`stays same / increases / decreases`) if Net Force is (i) zero, (ii) along motion, (iii) opposite motion.', hi: 'अभ्यास 2 (घर्षण-रहित सतह पर गेंद — `समान / बढ़ेगा / घटेगा`): (i) कोई परिणामी बल न लगे, (ii) गति की दिशा में लगे, (iii) गति की विपरीत दिशा में लगे।' }, a: { en: '**(i) Stays SAME (`समान रहेगा`, Newton I)**; **(ii) INCREASES (`बढ़ेगा`, positive acceleration)**; **(iii) DECREASES (`घटेगा`, deceleration opposing velocity)**.', hi: '**(i) समान रहेगा**, **(ii) बढ़ेगा** (`+त्वरण`), **(iii) घटेगा** (`मंदन`)!' } },
    { num: 3, q: { en: 'Ex Q3 (`Fig 6.36`): Block P experiences opposing `5 N` left & `4 N` right on smooth floor; Block Q glides at constant velocity. Pick true statement `(i)–(iv)`.', hi: 'अभ्यास 3 (`चित्र 6.36`): चिकनी सतह पर गुटके P पर बाएँ `5 N` व दाएँ `4 N` बल लगा है; गुटका Q नियत वेग से गतिमान है — सत्य कथन `(i)–(iv)` चुनें।' }, a: { en: '**Option `(i)`**: **Net Force acts on P** (`5 − 4 = 1 N` leftward), while **NO Net Force acts on Q** (`constant velocity -> a = 0 -> F_net = 0`)!', hi: '**विकल्प `(i)` सत्य है:** गुटके **P पर परिणामी बल लगता है (`5 − 4 = 1 N बाएँ`)**, किंतु नियत वेग से चल रहे **Q पर कोई परिणामी बल (`0 N`) नहीं लगता**!' } },
    { num: 4, q: { en: 'Ex Q4 (`Vallam Kali` Snake Boat, Kerala): Out of `100` rowers (`200 N` horizontal force each), `95` row backward propelling forward while `5` accidentally row forward! Ignoring water drag, find Net Force on boat.', hi: 'अभ्यास 4 (`केरल वल्लुम कल्ली सर्प नौका दौड़`): `100` नाविकों (`200 N प्रत्येक`) में `95` आगे बढ़ाने हेतु पीछे चप्पू चलाते हैं व `5` भूल से विपरीत दिशा में। जल कर्षण उपेक्षा करते हुए परिणामी बल ज्ञात करें।' }, a: { en: 'Forward reaction from `95` rowers $= 95 \\times 200 = 19,000\\text{ N}$ ahead; `5` errant rowers push backward $= 5 \\times 200 = 1,000\\text{ N}$ back. Net Force $= 19,000 - 1,000 = \\mathbf{18,000\\text{ N\\ forward}}$ (`(95−5) × 200 N`)!', hi: '`95` नाविक आगे बल लगाएँगे $= 95 \\times 200 = 19,000\\text{ N}$, जबकि `5` विपरीत $= 1,000\\text{ N}$ $\\implies$ परिणामी बल $= 19,000 - 1,000 = \\mathbf{18,000\\text{ N आगे की ओर}}$!' } },
    { num: 5, q: { en: 'Ex Q5: When a Net Force acts on an object, it accelerates — choose true option `(i)–(iv)`.', hi: 'अभ्यास 5: जब किसी वस्तु पर परिणामी बल लगता है तो त्वरण की दिशा व संबंध बताएं `(i)–(iv)`।' }, a: { en: '**Option `(iv)`**: **Acceleration is IN THE DIRECTION of the Net Force and DIRECTLY PROPORTIONAL to it (`Newton II: a = F/m`)**!', hi: '**विकल्प `(iv)`:** **त्वरण बल की ही दिशा में और वस्तु पर लगने वाले बल के समानुपाती होता है** (`a = F/m`)!' } },
    { num: 6, q: { en: 'Ex Q6 (`Fig 6.37`, `x-t` graphs of objects A, B, C, D): Which object feels a non-zero Net Force?', hi: 'अभ्यास 6 (`चित्र 6.37`, वस्तु A, B, C, D के `x-t` ग्राफ): इनमें से किस पर कोई परिणामी बल कार्य कर रहा है?' }, a: { en: '**`(iii) Object C`!** A (`straight upward line -> const +v`), B (`horizontal -> rest`), D (`straight downward -> const −v`) ALL have zero acceleration (`zero net force`). ONLY **C shows a curved `x-t` parabola**, proving velocity is changing -> non-zero **Net Force**!', hi: '**`(iii) वस्तु C`!** ग्राफ A (सीधी ऊपर जाती रेखा = नियत +वेग), B (क्षैतिज = विराम) व D (सीधी नीचे आती रेखा = नियत −वेग) में वेग नियत व त्वरण शून्य है; केवल **वक्र C की ढलान लगातार बदल रही (त्वरित गति)** है — अतः **C पर परिणामी बल** लग रहा है!' } },
    { num: 7, q: { en: 'Ex Q7 (`Fig 6.38`): A sailor jumps forward out of a small boat onto shore. Does the boat move? In which direction and why?', hi: 'अभ्यास 7 (`चित्र 6.38`): कोई नाविक छोटी नौका से आगे तट पर कूदता है — क्या नौका गति करेगी? किस दिशा में और क्यों?' }, a: { en: '**YES — the boat glides BACKWARD (`away from shore`)!** While pushing feet against the boat to propel himself forward (`Action`), the sailor exerts an equal and opposite **backward Reaction Force** on the light boat (`Newton III`)!', hi: '**हाँ — नौका विपरीत दिशा (`तट से पीछे की ओर`) गति करेगी!** नाविक आगे कूदने हेतु पैरों से नाव को पीछे धकेलता है — **न्यूटन के तृतीय नियम** से नाव पर पीछे प्रतिक्रिया बल लगने से नाव पीछे हट जाती है!' } },
    { num: 8, q: { en: 'Ex Q8 (`Fig 6.39`): Why are loose sand or soft foam mats placed at high-jump landing zones?', hi: 'अभ्यास 8 (`चित्र 6.39`): ऊँची कूद प्रतियोगिता में खिलाड़ियों के सुरक्षित गिरने हेतु रेत या फोम के गद्दे क्यों बिछाए जाते हैं?' }, a: { en: 'Sinking gently into loose sand / foam cushion **extends the stopping duration (`Δt`)** needed for the jumper’s momentum to drop to zero. By Newton’s Second Law ($F = \\frac{\\Delta p}{\\Delta t}$), a longer `Δt` markedly lowers upward impact Force on limbs, preventing fractures (`vs bare concrete`)!', hi: 'गद्दे या ढीली रेत पर गिरते समय खिलाड़ी के वेग को शून्य होने में **अधिक समय (`Δt`)** लगता है। न्यूटन के द्वितीय नियम ($F = \\Delta p / \\Delta t$) से समय बढ़ने पर कम मंदन व **बहुत कम प्रहार बल** शरीर पर लगता है जिससे गंभीर चोट से बचाव होता है!' } },
    { num: 9, q: { en: 'Ex Q9: A loaded vegetable pushcart collides head-on with an identical EMPTY pushcart. Compare collision force magnitudes `(i)–(iv)`.', hi: 'अभ्यास 9: सब्जियों से भरी ठेलागाड़ी अपने जैसी एक खाली ठेलागाड़ी से टकराती है। टकराव के समय दोनों पर लगने वाले बल की तुलना `(i)–(iv)` से करें।' }, a: { en: '**Option `(iv)`**: **Both carts exert EQUAL magnitude (`opposite`) Forces on each other!** *(By Newton III, mutual forces are ALWAYS identical regardless of mass difference — only the empty lighter cart suffers larger recoil acceleration!)*', hi: '**विकल्प `(iv)` सत्य है:** **भरी हुई ठेलागाड़ी और खाली ठेलागाड़ी दोनों एक-दूसरे पर बिल्कुल समान परिमाण का बल लगाती हैं!** (`न्यूटन तृतीय नियम — द्रव्यमान अंतर केवल खाली गाड़ी में अधिक त्वरण पैदा करेगा`।)' } },
    { num: 10, q: { en: 'Ex Q10 (`Fig 6.40` `a-m` curve): Points read `(1 kg, 10 m/s²)`, `(2 kg, 5 m/s²)`, `(4 kg, 2.5 m/s²)`, `(5 kg, 2 m/s²)`. Describe/plot the Force–Mass (`F-m`) graph.', hi: 'अभ्यास 10 (`चित्र 6.40` `a–m` वक्र): बिंदुओं `(1, 10), (2, 5), (4, 2.5), (5, 2)` से इस स्थिति हेतु बल–द्रव्यमान (`F–m`) ग्राफ कैसा बनेगा?' }, a: { en: 'Calculate $F = m \\times a$ at EVERY point: $1 \\times 10 = 10\\text{ N}$, $2 \\times 5 = 10\\text{ N}$, $4 \\times 2.5 = 10\\text{ N}$, $5 \\times 2 = 10\\text{ N}$! Thus the **Force–Mass (`F-m`) graph is a flat HORIZONTAL STRAIGHT LINE at constant `F = 10 N`** parallel to the Mass axis!', hi: 'प्रत्येक बिंदु पर $F = m \\times a$ समान आता है: $1\\times 10 = 2\\times 5 = 4\\times 2.5 = 5\\times 2 = \\mathbf{10\\text{ N}}$! अतः **बल–द्रव्यमान (`F–m`) ग्राफ द्रव्यमान-अक्ष के समानांतर `F = 10 N` पर एक क्षैतिज सीधी रेखा** बनेगा!' } },
    { num: 11, q: { en: 'Ex Q11 (`Fig 6.41` `v-t` line): Object of mass `10 kg` moves linearly with $v(0\\text{ s}) = 10\\text{ m/s}$, $v(4\\text{ s}) = 20\\text{ m/s}$, $v(8\\text{ s}) = 30\\text{ m/s}$. Find Net Force.', hi: 'अभ्यास 11 (`चित्र 6.41` `v–t` ग्राफ): `10 kg` वस्तु का वेग `(0s, 10) -> (4s, 20) -> (8s, 30)` बढ़ता है। वस्तु पर कार्यरत बल ज्ञात करें।' }, a: { en: 'Slope acceleration $a = \\frac{30 - 10}{8 - 0} = \\frac{20}{8} = \\mathbf{2.5\\text{ m s}^{-2}}$. Force **$F = m a = 10 \\times 2.5 = \\mathbf{25\\text{ N}}$**!', hi: 'त्वरण (ग्राफ ढलान) $a = \\frac{30 - 10}{8 - 0} = 2.5\\text{ m s}^{-2} \\implies F = ma = 10 \\times 2.5 = \\mathbf{25\\text{ N}}$!' } },
    { num: 12, q: { en: 'Ex Q12: A `50 g` bullet travelling at `100 m s⁻¹` penetrates `50 cm` into a fixed heavy wooden block before stopping. Estimate average resistive Force.', hi: 'अभ्यास 12: `100 m s⁻¹` वेग की `50 g` गोली भारी लकड़ी के गुटके में `50 cm` धँसकर रुकती है। अवरोधक बल ज्ञात करें।' }, a: { en: '$m = 0.05\\text{ kg}$, $u = 100\\text{ m/s}$, $v = 0$, $s = 0.5\\text{ m}$.\n$0 - 100^2 = 2 a (0.5) \\implies a = \\mathbf{-10,000\\text{ m s}^{-2}}$.\n$F = 0.05 \\times (-10,000) = \\mathbf{-500\\text{ N}}$ (**`500 N` opposing bullet motion**)!', hi: '$m = 0.05\\text{ kg}, u = 100\\text{ m/s}, v = 0, s = 0.5\\text{ m} \\implies a = \\frac{0 - 10000}{2 \\times 0.5} = -10,000\\text{ m s}^{-2} \\implies F = 0.05 \\times (-10000) = \\mathbf{500\\text{ N गति की विपरीत दिशा में}}$!' } },
    { num: 13, q: { en: 'Ex Q13: Football (`0.4 kg`) kicked at `108 km h⁻¹` using estimated force `800 N`. Find foot-to-ball contact duration.', hi: 'अभ्यास 13: `0.4 kg` फुटबॉल को `800 N` बल से प्रहार कर `108 km h⁻¹` वेग दिया गया। पैर और गेंद के संपर्क समय की गणना करें।' }, a: { en: 'Convert speed first! $v = 108 \\times \\frac{5}{18} = \\mathbf{30\\text{ m s}^{-1}}$ (`u = 0`).\nUsing Impulse $F \\Delta t = m(v - u) \\implies \\Delta t = \\frac{0.4 \\times 30}{800} = \\frac{12}{800} = \\mathbf{0.015\\text{ s}}$ (`15 milliseconds`)!', hi: '$v = 108 \\times \\frac{5}{18} = 30\\text{ m/s}, u = 0$। आवेग सूत्र $F \\Delta t = m(v-u) \\implies \\Delta t = \\frac{0.4 \\times 30}{800} = \\frac{12}{800} = \\mathbf{0.015\\text{ s}}$!' } },
    { num: 14, q: { en: 'Ex Q14: `2 kg` object moving at `10 m s⁻¹` enters a rough patch (`friction = 7 N`) while an extra constant opposing push of `3 N` also acts. Distance slid before stopping?', hi: 'अभ्यास 14: `2 kg` वस्तु `10 m s⁻¹` वेग से ऐसे खुरदरे क्षेत्र में प्रवेश करती है जहाँ घर्षण बल `7 N` व विपरीत दिशा में `3 N` का अतिरिक्त बल लगता है। रुकने से पहले तय दूरी बताएं।' }, a: { en: 'Total opposing Net Force $= 7 + 3 = 10\\text{ N}$ (`against motion`, so $F = -10\\text{ N}$).\nDeceleration $a = \\frac{-10}{2} = -5\\text{ m s}^{-2}$.\nFrom $v^2 = u^2 + 2as \\implies 0 = 10^2 + 2(-5)s \\implies s = \\frac{100}{10} = \\mathbf{10\\text{ m}}$!', hi: 'कुल अवरोधक बल $= 7 + 3 = 10\\text{ N} \\implies$ मंदन $a = -10/2 = -5\\text{ m s}^{-2}$। अतः $0 = 10^2 - 2(5)s \\implies s = 100 / 10 = \\mathbf{10\\text{ m}}$!' } },
    { num: 15, q: { en: 'Ex Q15: Tractor pulls harrow (`m₁`) under Force `F` giving acceleration `a₁`, and pulls empty trolley (`m₂`) under same `F` giving `a₂`. Now tractor loads harrow ONTO trolley and pulls both under same `F`—express combined acceleration `a` in terms of `a₁` & `a₂`!', hi: 'अभ्यास 15: एक ट्रैक्टर `F` बल से हैरो (`m₁`) में `a₁` त्वरण तथा ट्रॉली (`m₂`) में `a₂` त्वरण उत्पन्न करता है। यदि हैरो को ट्रॉली पर रखकर उसी बल `F` से खींचे तो `a₁` व `a₂` के पदों में संयुक्त त्वरण ज्ञात करें।' }, a: { en: '$m_1 = \\frac{F}{a_1}$ and $m_2 = \\frac{F}{a_2}$.\nCombined mass $M = m_1 + m_2 = F\\left(\\frac{1}{a_1} + \\frac{1}{a_2}\\right) = F\\left(\\frac{a_1 + a_2}{a_1 a_2}\\right)$.\nBy Newton II: $a = \\frac{F}{M} = \\mathbf{\\frac{a_1 a_2}{a_1 + a_2}}$!', hi: '$m_1 = F/a_1$ व $m_2 = F/a_2$। संयुक्त द्रव्यमान $m_1+m_2$ पर वही बल लगाने से $a = \\frac{F}{F/a_1 + F/a_2} = \\mathbf{\\frac{a_1 a_2}{a_1 + a_2}}$ (`आधिकारिक उत्तर कुंजी प्रमाणित`)!' } },
    { num: 16, q: { en: 'Ex Q16 (`Fig 6.42`): Bar magnet & compass needle exert EQUAL opposite magnetic forces on each other (`Newton III`). Why does the compass needle swing sharply while the bar magnet stays still?', hi: 'अभ्यास 16 (`चित्र 6.42`): दंड चुंबक व दिक्सूचक सुई एक-दूसरे पर बराबर व विपरीत चुंबकीय बल लगाते हैं, फिर भी दिक्सूचक सुई घूमती है जबकि भारी दंड चुंबक स्थिर रहता है — क्यों?' }, a: { en: 'Both feel equal magnetic force `F` (`Newton III`), yet the **tiny compass needle has negligible mass (`low inertia`) and rests on a near-frictionless pivot**, yielding large noticeable acceleration ($a = F/m_{\\text{tiny}}$). The **massive bar magnet (`high inertia`)** faces **static table friction** easily larger than `F`, so it stays motionless!', hi: 'दोनों पर बल समान होने के बावजूद, **सूक्ष्म व हल्की दिक्सूचक सुई** (`नगण्य जड़त्व` व अत्यंत कम घर्षण वाले कीलक पर टिकी) तुरंत बड़े त्वरण ($a=F/m$) से घूम जाती है, जबकि **भारी दंड चुंबक** के अधिक द्रव्यमान व मेज के स्थैतिक घर्षण के कारण वह स्थिर बना रहता है!' } },
  ],

  flashcards: [
    { front: { en: 'SI spelling rule for Newton unit (`NCERT p.95 & 100`)?', hi: 'बल के SI मात्रक न्यूटन के लिखने का सही नियम क्या है?' }, back: { en: 'Full word: `newton` (small `n`) | Symbol: `N` (CAPITAL `N`)!', hi: 'पूरा नाम: `newton` (छोटा अक्षर `n`) | प्रतीक: `N` (बड़ा अक्षर `N`)!' } },
    { front: { en: 'Magnitude of Net Force on ANY body at Constant Velocity?', hi: 'नियत वेग से गतिमान किसी भी वस्तु पर परिणामी बल कितना?' }, back: { en: 'ZERO (0 N)! Constant velocity -> a = 0 -> F_net = 0!', hi: 'शून्य (`0 N`)! क्योंकि नियत वेग में त्वरण a = 0 होता है।' } },
    { front: { en: 'What physical quantity directly measures Inertia?', hi: 'जड़त्व (Inertia) किस भौतिक राशि पर सीधा निर्भर करता है?' }, back: { en: 'Mass (m) ONLY! Greater mass = Greater inertia.', hi: 'केवल द्रव्यमान (m) पर! (भारी वस्तु = अधिक जड़त्व)' } },
    { front: { en: 'Momentum formula & SI Unit (`Vector`)?', hi: 'संवेग (Momentum) का सूत्र व मानक SI मात्रक?' }, back: { en: 'p = m × v | SI Unit: kg·m·s⁻¹ (or N·s, Vector)', hi: 'p = mv | SI मात्रक: kg m s⁻¹ (सदिश राशि)' } },
    { front: { en: 'Why does a fielder pull hands back catching a fast ball?', hi: 'क्रिकेट क्षेत्ररक्षक कैच पकड़ते समय हाथ पीछे क्यों खींचता है?' }, back: { en: 'Increases stopping time Δt -> lowers Force F = Δp/Δt preventing injury!', hi: 'संपर्क समय Δt बढ़ाकर वेग परिवर्तन बल F = Δp/Δt घटाने हेतु!' } },
    { front: { en: 'Why DON’T Action & Reaction cancel out to zero?', hi: 'बराबर व विपरीत होने पर भी क्रिया-प्रतिक्रिया निरस्त क्यों नहीं होती?' }, back: { en: 'Because they ALWAYS act on TWO DIFFERENT OBJECTS!', hi: 'क्योंकि दोनों बल सदैव दो अलग-अलग वस्तुओं पर कार्य करते हैं!' } },
    { front: { en: 'Chandrayaan-3 Vikram Lander orbital braking direction (`p.109`)?', hi: 'चंद्रयान-3 के विक्रम लैंडर ने वेग कम करने हेतु गैस किस ओर छोड़ी?' }, back: { en: 'Fired thrusters IN direction of motion -> opposite Newton III reaction slowed lander!', hi: 'अपनी गति की ही दिशा में गैस छोड़कर विपरीत प्रतिक्रिया से मंदन किया!' } },
    { front: { en: 'Why was `newton` chosen as SI unit (`PYQ #18`)?', hi: 'SI में बल का मात्रक न्यूटन क्यों चुना गया?' }, back: { en: 'To make proportionality constant k = 1 in F = k·m·a!', hi: 'ताकि समीकरण F = kma में आनुपातिकता स्थिरांक k = 1 बन जाए!' } },
    { front: { en: 'Combined acceleration of tractor pulling m₁ (a₁) + m₂ (a₂) together (`Ex 15`)?', hi: 'एक ही बल से a₁ व a₂ त्वरित होने वाले m₁+m₂ को जोड़ने पर त्वरण?' }, back: { en: 'a = (a₁ · a₂) / (a₁ + a₂) | General coupled: F / (m₁ + m₂)!', hi: 'a = (a₁ · a₂) / (a₁ + a₂) | सामान्य निकाय सूत्र: F / (m₁ + m₂)!' } },
    { front: { en: 'Friction ordering: Static vs Sliding vs Rolling (`Wheel invention p.115`)?', hi: 'स्थैतिक, सर्पी व लोटनिक घर्षण का क्रम क्या है?' }, back: { en: 'Static > Sliding > Rolling Friction (lowest -> why wheel transformed transport!)', hi: 'स्थैतिक > सर्पी > लोटनिक (न्यूनतम होने से ही पहिया क्रांतिकारी बना)!' } },
  ],

  pyqBank: [
    {
      id: 1,
      examTag: 'RRB Group D 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Newton II Law',
      question: {
        en: "When a net force acts on a body, what does Newton's second law predict will happen to the body?",
        hi: 'जब किसी पिंड पर नेट बल कार्य करता है , तो न्यूटन का द्वितीय नियम , पिंड के साथ क्या होने का पूर्वानुमान करता है ?',
      },
      options: {
        en: ['The body will remain stationary', 'The body will always move in the opposite direction', 'The body will accelerate in the direction of the force', 'The body will move at constant speed'],
        hi: ['पिंड स्थिर रहेगा', 'पिंड सदैव विपरीत दिशा में गतिमान होगा', 'पिंड बल की दिशा में त्वरित होगा', 'पिंड नियत चाल से गतिमान होगा'],
      },
      correctIndex: 2,
      solution: {
        en: 'Newton II (`Sec 6.5`): Whenever Net Force acts on a body, the body accelerates specifically IN THE DIRECTION of the Net Force ($a = F/m$).',
        hi: 'न्यूटन के द्वितीय नियम अनुसार परिणामी बल लगने पर वस्तु बल की ही दिशा में त्वरित होती है।',
      },
    },
    {
      id: 2,
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Unbalanced Forces',
      question: {
        en: 'What is the effect of unbalanced forces on an object at rest?',
        hi: 'विरामावस्था में रखी किसी वस्तु पर असंतुलित बलों का क्या प्रभाव पड़ता है ?',
      },
      options: {
        en: ['It causes the object to start moving', 'It always increases the mass of the object', 'It keeps the object at rest', 'It changes the color of the object'],
        hi: ['इससे वस्तु गतिमान हो जाती है', 'यह वस्तु के द्रव्यमान को सदैव बढ़ाता है', 'यह वस्तु को विरामावस्था में रखता है', 'यह वस्तु का रंग परिवर्तित कर देता है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Non-zero unbalanced Net Force breaks stationary inertia, accelerating the object into motion (`NCERT Sec 6.2`).',
        hi: 'असंतुलित (अशून्य) परिणामी बल विराम वस्तु के वेग में परिवर्तन लाकर उसे गतिमान कर देता है।',
      },
    },
    {
      id: 3,
      examTag: 'RRB Group D 2025 Shift 19',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Balanced vs Unbalanced',
      question: {
        en: 'Which scenario best demonstrates an unbalanced force acting on an object?',
        hi: 'निम्नलिखित में से कौन - सा परिदृश्य किसी वस्तु पर कार्यरत असंतुलित बल को सर्वोत्तम रूप से प्रदर्शित करता है ?',
      },
      options: {
        en: ['A picture hanging stationary on a wall', 'A soccer ball starts rolling after being kicked', 'A cup sitting on a desk not moving', 'A car parked at rest in a garage'],
        hi: ['दीवार पर टंगी हुई स्थिर तस्वीर', 'किक मारने के पश्चात सॉकर बॉल का लुढ़कना प्रारंभ करना', 'डेस्क पर रखा हुआ स्थिर कप', 'गैराज में विराम अवस्था में खड़ी एक कार'],
      },
      correctIndex: 1,
      solution: {
        en: 'Only the kicked ball experiences acceleration (`rest -> moving`, `Fig 6.1a`); hanging/stationary items sit in zero-net-force equilibrium.',
        hi: 'केवल किक लगने से सॉकर बॉल में वेग परिवर्तन/गति प्रारंभ हुई — अतः यही असंतुलित बल का उदाहरण है।',
      },
    },
    {
      id: 4,
      examTag: 'RRB Group D 2025 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Newton I & Galileo',
      question: {
        en: 'According to the first law of motion, what will happen to a ball rolling on a smooth, horizontal surface if no external force acts on it?',
        hi: 'गति के प्रथम नियम के अनुसार , यदि किसी चिकने , क्षैतिज पृष्ठ पर लुढ़कती हुई गेंद पर कोई बाह्य बल कार्य नहीं कर रहा है , तो उस पर क्या प्रभाव पड़ेगा ?',
      },
      options: {
        en: ['The ball will continue to roll at a constant speed in the same direction.', 'The ball will change its direction automatically.', 'The ball will gradually slow down and stop by itself.', 'The ball will speed up on its own.'],
        hi: ['गेंद समान दिशा में नियत गति पर लुढ़कती रहेगी।', 'गेंद स्वतः अपनी दिशा बदल लेगी।', 'गेंद धीरे - धीरे धीमी हो जाएगी और अपने आप रुक जाएगी।', 'गेंद अपने आप तेज हो जाएगी।'],
      },
      correctIndex: 0,
      solution: {
        en: 'Direct Galileo & Newton First Law statement (`NCERT Sec 6.3–6.4 p.100`): zero net force keeps constant speed in the same direction.',
        hi: 'शून्य बाह्य बल/घर्षण होने पर गेंद समान दिशा में नियत चाल से निरंतर लुढ़कती रहेगी (गैलीलियो व न्यूटन I)।',
      },
    },
    {
      id: 5,
      examTag: 'RRB Group D 2025 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Inertia',
      question: {
        en: 'Why is it difficult to push a heavy box from rest, according to the first law of motion?',
        hi: 'गति के प्रथम नियम के अनुसार , किसी भारी बॉक्स को विराम से धके लना क्यों कठिन होता है ?',
      },
      options: {
        en: ['The box has no wheels to roll', 'The box resists changes to its state due to inertia', 'The box is glued to the floor', 'The box is pulled back by gravity'],
        hi: ['क्योंकि बॉक्स में लुढ़कने के लिए कोई पहिया नहीं होता है', 'क्योंकि बॉक्स , जड़त्व के कारण अपनी स्थिति में परिवर्तन का विरोध करता है', 'क्योंकि बॉक्स , फर्श पर चिपक जाता है।', 'क्योंकि बॉक्स को गुरुत्व द्वारा पीछे खींचा जाता है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Greater mass produces greater **Inertia**—the natural resistance to changing rest/motion state (`NCERT Sec 6.4`).',
        hi: 'अधिक द्रव्यमान के कारण भारी बॉक्स का जड़त्व अधिक होता है जिससे वह अपनी विराम अवस्था में परिवर्तन का विरोध करता है।',
      },
    },
    {
      id: 6,
      examTag: 'RRB Group D 2025 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: F = ma Ratio',
      question: {
        en: "A student pushes two carts, one heavy and one light, with the same force. According to Newton's second law, what will happen to their accelerations?",
        hi: 'कोई विद्यार्थी एक भारी और एक हल्की गाड़ी को समान बल के साथ धक्का देता है। न्यूटन के द्वितीय नियम के अनुसार , उनके त्वरणों पर क्या प्रभाव पड़ेगा ?',
      },
      options: {
        en: ['The lighter cart will accelerate more than the heavier cart', 'Both carts will accelerate equally', 'The heavier cart will accelerate more than the lighter cart', 'The heavier cart will move with zero acceleration'],
        hi: ['भारी गाड़ी की तुलना में हल्की गाड़ी अधिक त्वरित होगी', 'दोनों गाड़ियां समान रूप से त्वरित होंगी', 'हल्की गाड़ी की तुलना में भारी गाड़ी अधिक त्वरित होगी', 'भारी गाड़ी शून्य त्वरण के साथ गति करेगी'],
      },
      correctIndex: 0,
      solution: {
        en: 'Since $a = F / m$ (`inverse relation, Activity 6.4`), for equal $F$, smaller mass gains **greater acceleration**!',
        hi: 'समान बल पर $a \\propto 1/m$ (`क्रियाकलाप 6.4`) होने से कम द्रव्यमान वाली **हल्की गाड़ी** अधिक त्वरित होगी!',
      },
    },
    {
      id: 7,
      examTag: 'RRB Group D 2025 Shift 24',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Law of Inertia',
      question: {
        en: 'What property of an object does the first law of motion primarily describe?',
        hi: 'गति का प्रथम नियम प्राथमिक रूप से वस्तु के किस गुणधर्म का वर्णन करता है ?',
      },
      options: { en: ['Momentum', 'Acceleration', 'Energy', 'Inertia'], hi: ['संवेग', 'त्वरण', 'ऊर्जा', 'जड़त्व'] },
      correctIndex: 3,
      solution: {
        en: 'Newton’s First Law directly defines and describes **Inertia** (`NCERT Bio Box p.100`).',
        hi: 'गति का प्रथम नियम वस्तु के **जड़त्व (Inertia)** गुणधर्म का वर्णन करता है।',
      },
    },
    {
      id: 8,
      examTag: 'RRB Group D 2025 Shift 28',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Newton III',
      question: {
        en: "In a tug-of-war, Team A pulls Team B with a force of 300 N. According to Newton's Third Law, what force does Team B exert on Team A?",
        hi: 'एक रस्साकशी में , टीम A, टीम B को 300 N के बल से खींचती है। न्यूटन के तृतीय नियम के अनुसार , टीम B, टीम A पर कितना बल लगाती है ?',
      },
      options: {
        en: ['600 N in the opposite direction', '300 N in the same direction', '150 N in the same direction', '300 N in the opposite direction'],
        hi: ['विपरीत दिशा में 600 N', 'समान दिशा में 300 N', 'समान दिशा में 150 N', 'विपरीत दिशा में 300 N'],
      },
      correctIndex: 3,
      solution: {
        en: 'Mutual tension pulls (`Activity 6.6`): Team B pulls Team A with exact equal magnitude **`300 N`** in the **opposite direction**!',
        hi: 'न्यूटन III व क्रियाकलाप 6.6 अनुसार पारस्परिक बल परिमाण में बिल्कुल बराबर (**`300 N`**) तथा दिशा में **विपरीत** होते हैं!',
      },
    },
    {
      id: 9,
      examTag: 'RRB Group D 2025 Shift 31',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: F = ma',
      question: {
        en: "A 0.6 kg soccer ball and a 1.0 kg basketball are kicked with the same acceleration. Which will experience a greater force, according to Newton's second law?",
        hi: '0.6 kg की सॉकर बॉल और 1.0 kg की बास्के टबॉल को समान त्वरण के साथ किक किया जाता है। न्यूटन के द्वितीय नियम के अनुसार , कौन अधिक बल का अनुभव करेगी ?',
      },
      options: {
        en: ['The ball with higher acceleration, regardless of mass', 'The soccer ball, because it is lighter', 'Both experience the same force', 'The basketball, because it has greater mass'],
        hi: ['द्रव्यमान के असापेक्ष उच्चतर त्वरण वाली बॉल', 'सॉकर बॉल , क्योंकि यह हल्की है', 'दोनों समान बल का अनुभव करती है', 'बास्के टबॉल , क्योंकि इसका द्रव्यमान अधिक है'],
      },
      correctIndex: 3,
      solution: {
        en: 'With equal acceleration $a$, Force $F = ma \\propto m$ -> **`1.0 kg` Basketball** experiences greater force (`Think Q7` mirror!).',
        hi: 'समान त्वरण के लिए $F = ma \\propto m$, अतः अधिक द्रव्यमान वाली **1.0 kg बास्केटबॉल** अधिक बल अनुभव करेगी!',
      },
    },
    {
      id: 10,
      examTag: 'RRB Group D 2025 Shift 32',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Newton II Comparison',
      question: {
        en: 'Which situation demonstrates Newton’s second law of motion?',
        hi: 'निम्नलिखित में से कौन - सी स्थिति न्यूटन के गति के द्वितीय नियम को निरूपित करती है ?',
      },
      options: {
        en: ['A ball rolling at a constant speed on a flat surface', 'A heavy truck requires more force to accelerate than a small car', 'A swimmer pushes water backward and moves forward', 'A stationary object resting on a table'],
        hi: ['एक समतल पृष्ठ पर नियत चाल से लुढ़कती हुई गेंद', 'एक भारी ट्रक को छोटी कार की तुलना में त्वरित करने के लिए अधिक बल की आवश्यकता होती है', 'एक तैराक पानी को पीछे की ओर धके लता है और आगे बढ़ता है', 'मेज पर विराम में रखी स्थिर वस्तु'],
      },
      correctIndex: 1,
      solution: {
        en: 'Heavy truck requiring proportionally greater force $F = ma$ exemplifies Newton II; swimmer = Newton III, flat roll/desk = Newton I.',
        hi: 'भारी ट्रक को त्वरित करने में $F = ma$ अनुसार अधिक बल की आवश्यकता न्यूटन के द्वितीय नियम को दर्शाती है।',
      },
    },
    {
      id: 11,
      examTag: 'RRB Group D 2025 Shift 37',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: F = ma Inverse',
      question: {
        en: 'If a car and a truck are pushed with the same force, which will accelerate more according to the second law of motion?',
        hi: 'यदि एक कार और एक ट्रक को समान बल से धके ला जाए , तो न्यूटन के गति के दूसरे नियम के अनुसार कौन अधिक त्वरण प्रदर्शित करेगा ?',
      },
      options: {
        en: ['The truck will accelerate more', 'Both will accelerate equally', 'The car will accelerate more', 'Neither will accelerate'],
        hi: ['ट्रक अधिक त्वरित होगा', 'दोनों समान रूप से त्वरित होंगे', 'कार अधिक त्वरित होगी', 'दोनों में से कोई भी त्वरित नहीं होगा'],
      },
      correctIndex: 2,
      solution: {
        en: 'For identical Net Force $F$, lighter mass **Car** accelerates faster ($a = F/m$, `Activity 6.4`).',
        hi: 'समान बल लगने पर कम द्रव्यमान होने के कारण **कार** में अधिक त्वरण उत्पन्न होगा।',
      },
    },
    {
      id: 12,
      examTag: 'RRB Group D 2025 Shift 38',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: SI Unit Definition',
      question: {
        en: 'If the unit of force is newton, which combination of fundamental SI units makes up one newton?',
        hi: 'यदि बल का मात्रक न्यूटन है , तो मूल SI मात्रकों का कौन - सा संयोजन एक न्यूटन बनाता है ?',
      },
      options: {
        en: ['Kilogram meter per second squared', 'Kilogram per meter per second', 'Kilogram meter per second', 'Meter per kilogram per second squared'],
        hi: ['किलोग्राम मीटर प्रति वर्ग सेकं ड', 'किलोग्राम प्रति मीटर प्रति सेकं ड', 'किलोग्राम मीटर प्रति सेकं ड', 'मीटर प्रति किलोग्राम प्रति वर्ग सेकं ड'],
      },
      correctIndex: 0,
      solution: {
        en: 'From $F = m \\cdot a$: $1\\text{ N} = 1\\text{ kg} \\times 1\\text{ m s}^{-2}$ (`NCERT Eq 6.2 p.104`).',
        hi: '$F = ma \\implies 1\\text{ N} = 1\\text{ kg}\\cdot\\text{m s}^{-2}$ (किलोग्राम मीटर प्रति वर्ग सेकंड)।',
      },
    },
    {
      id: 13,
      examTag: 'RRB Group D 2025 Shift 39',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Newton III Boat',
      question: {
        en: 'According to the Newton’s Third Law of Motion, what happens to a stationary rowing boat when a sailor jumps forward from it?',
        hi: 'न्यूटन के गति के तीसरे नियम के अनुसार जब कोई नाविक , चप्पू नौका से आगे की ओर कू दता है , तो स्थिर चप्पू नौका (stationary rowing boat) पर क्या प्रभाव पड़ता है ?',
      },
      options: {
        en: ['The boat remains stationary since only the sailor moves.', 'The boat moves backward due to an equal and opposite reaction force', 'The boat moves forward along with the sailor.', 'The boat moves unpredictably due to water resistance.'],
        hi: ['नौका स्थिर बनी रहती है क्योंकि केवल नाविक ही गति करता है।', 'नौका , समान और विपरीत प्रतिक्रिया बल के कारण पीछे की ओर गति करती है।', 'नौका , नाविक के अनुदिश आगे की ओर गति करती है।', 'जल प्रतिरोध के कारण नौका अप्रत्याशित रूप से गति करती है।'],
      },
      correctIndex: 1,
      solution: {
        en: 'Matches **NCERT Exercise Q7 (`Fig 6.38`)** directly: pushing off pushes boat backward cleanly!',
        hi: 'सीधा NCERT **अभ्यास प्रश्न 7 (`चित्र 6.38`)**: नाविक द्वारा आगे कूदने पर प्रतिक्रिया बल से नाव पीछे की ओर हटती है।',
      },
    },
    {
      id: 14,
      examTag: 'RRB Group D 2025 Shift 40',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Why k = 1',
      question: {
        en: 'Which of the following best describes why the unit of force is chosen as newton?',
        hi: 'निम्नलिखित में से कौन - सा कथन सर्वोत्तम रूप से यह स्पष्ट करता है कि बल के मात्रक को न्यूटन के रूप में क्यों चुना गया है ?',
      },
      options: {
        en: ['It makes mass and acceleration equal in value', 'It makes the constant k in the formula "F = k ma" equal to 1', 'It changes the value of acceleration', 'It simplifies the calculation of velocity'],
        hi: ['यह द्रव्यमान और त्वरण को मान में बराबर बनाता है', 'यह सूत्र "F = k ma" में स्थिरांक k को 1 के बराबर बनाता है', 'यह त्वरण के मान को बदलता है', 'यह वेग की गणना को सरल बनाता है'],
      },
      correctIndex: 1,
      solution: {
        en: 'Defining $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m s}^{-2}$ fixes proportionality constant $k = 1$, simplifying $F = kma$ to $F = ma$!',
        hi: '1 N को `1 kg × 1 m/s²` परिभाषित करने से आनुपातिकता स्थिरांक $k = 1$ हो जाता है और सूत्र $F = ma$ बनता है।',
      },
    },
    {
      id: 15,
      examTag: 'RRB Group D 2025 Shift 42',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: First Law Scenario',
      question: {
        en: 'Which scenario best demonstrates the first law of motion as stated by Newton regarding an object’s tendency to maintain its state of at rest or uniform motion?',
        hi: 'किसी वस्तु की विराम अवस्था या एकसमान गति को बनाए रखने की उसकी प्रवृत्ति के संबंध में न्यूटन द्वारा प्रतिपादित गति के प्रथम नियम को कौन - सा परिदृश्य सर्वोत्तम रूप से प्रदर्शित करता है ?',
      },
      options: {
        en: ['A tree sways in the wind', 'A ball rolling down a hill accelerates', 'A car speeds up as the driver presses the accelerator', 'A book lying on a table stays still until someone pushes it'],
        hi: ['वायु में किसी पेड़ का हिलना', 'पहाड़ी से नीचे लुढ़कती हुई गेंद त्वरित होती है', 'ड्राइवर द्वारा एक्सीलरेटर दबाते ही कार की स्पीड बढ़ जाना', 'किसी मेज पर रखी कोई पुस्तक तब तक स्थिर रहती है जब तक कोई उसे धक्का न दे'],
      },
      correctIndex: 3,
      solution: {
        en: 'Stationary book resting unchanged until an unbalanced push acts directly mirrors **Newton I (`Rest Inertia`)**!',
        hi: 'बाह्य असंतुलित बल न लगने तक पुस्तक का स्थिर रहना **विराम के जड़त्व (न्यूटन I)** का सटीक उदाहरण है।',
      },
    },
    {
      id: 16,
      examTag: 'RRB Group D 2025 Shift 43',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Action-Reaction Check',
      question: {
        en: "Which situation does NOT correctly illustrate an action- reaction pair as per Newton's third law?",
        hi: 'न्यूटन के गति के तृतीय नियम के अनुसार , कौन - सी स्थिति एक क्रिया - प्रतिक्रिया युग्म (action-reaction pair) को सही रूप से प्रदर्शित नहीं करती है ?',
      },
      options: {
        en: ['A foot kicks a ball, ball pushes foot back', 'A hammer strikes a nail, nail pushes hammer back', 'A hand pushes a wall, wall pushes hand back', 'A car accelerating due to its engine'],
        hi: ['एक पैर गेंद को किक मारता है , गेंद पैर को वापस पीछे धके लती है', 'एक हथौड़ा , कील पर प्रहार करता है , कील , हथौड़े को वापस पीछे धके लती है', 'एक हाथ दीवार पर धक्का लगाता है , दीवार हाथ को वापस पीछे धके लती है', 'एक कार अपने इंजन के कारण त्वरित हो जाती है'],
      },
      correctIndex: 3,
      solution: {
        en: 'First 3 state explicit two-body reciprocal pushes (`A->B & B->A`); stating solely *"car accelerates due to its engine"* omits road reaction completely (`actually road friction on tyres moves the car`)!',
        hi: 'प्रथम 3 विकल्पों में दो अलग पिंडों के बीच पारस्परिक क्रिया-प्रतिक्रिया स्पष्ट है; अकेला *"इंजन से कार त्वरित होना"* दो पिंडों के पारस्परिक युग्म को नहीं दर्शाता (सड़क की प्रतिक्रिया से टायर आगे बढ़ते हैं)।',
      },
    },
    {
      id: 17,
      examTag: 'RRB Group D 2025 Shift 46',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Gun Recoil',
      question: {
        en: 'Why does a gun recoil backward when it is fired? The bullet pushes forward, and the gun',
        hi: 'गोली चलाने पर बंदूक पीछे की ओर धक्‍का क्यों मारती है ?',
      },
      options: {
        en: ['experiences an equal and opposite backward force', 'The trigger causes the gun to move backward', 'The gun is heavy and naturally moves backward', 'The air resistance pushes the gun backward'],
        hi: ['गोली आगे की ओर बढ़ती है और बंदूक एक समान और विपरीत पश्च बल का अनुभव करती है', 'ट्रिगर बंदूक को पीछे की ओर ले जाने का कारण बनता है', 'बंदूक भारी होती है और स्वाभाविक रूप से पीछे की ओर जाती है', 'वायु प्रतिरोध बंदूक को पीछे की ओर धके लता है'],
      },
      correctIndex: 0,
      solution: {
        en: 'Matches **NCERT Example 6.8**: bullet push forward triggers equal & opposite backward reaction on gun.',
        hi: 'NCERT **उदाहरण 6.8**: गोली को आगे धकेलने पर बंदूक पर बराबर और विपरीत दिशा में प्रतिक्षेप बल लगता है।',
      },
    },
    {
      id: 18,
      examTag: 'RRB Group D 2025 Shift 48',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Third Law Properties',
      question: {
        en: 'What happens to the magnitude of action and reaction forces in Newton’s third law pairs?',
        hi: 'न्यूटन के तृतीय नियम के युग्मों में क्रिया और प्रतिक्रिया बलों के परिमाण पर क्या प्रभाव पड़ता है ?',
      },
      options: {
        en: ['They depend on which object is heavier', 'They cancel each other completely', 'They combine to make a stronger force', 'They are always equal in magnitude and opposite in direction'],
        hi: ['ये इस बात पर निर्भर करते हैं कि कौन - सी वस्तु अधिक भारी है', 'ये एक - दूसरे को पूरी तरह से निरस्त कर देते हैं', 'ये मिलकर एक अधिक प्रबल बल का निर्माण करते हैं', 'ये परिमाण में सदैव बराबर और दिशा में विपरीत होते हैं'],
      },
      correctIndex: 3,
      solution: {
        en: 'Action and Reaction pairs ALWAYS hold equal magnitude and opposite directions (`regardless of mass`, `NCERT p.108–110`).',
        hi: 'क्रिया और प्रतिक्रिया बल सदैव **परिमाण में बराबर और दिशा में विपरीत** होते हैं (द्रव्यमान असमान होने पर भी)।',
      },
    },
    {
      id: 19,
      examTag: 'RRB Group D 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: F = ma Numerical',
      question: {
        en: "A car with a mass 2000 kg accelerates at 4 m/s². According to Newton's Second Law, what is the magnitude of the force applied to the car?",
        hi: '2000 kg द्रव्यमान की एक कार 4 m/s² की दर से त्वरित होती है। न्यूटन के द्वितीय नियम के अनुसार , कार पर आरोपित बल का परिमाण ज्ञात कीजिए।',
      },
      options: { en: ['1000 N', '8000 N', '2500 N', '500 N'], hi: ['1000 N', '8000 N', '2500 N', '500 N'] },
      correctIndex: 1,
      solution: {
        en: '$F = m \\times a = 2000\\text{ kg} \\times 4\\text{ m s}^{-2} = \\mathbf{8000\\text{ N}}$ (`NCERT Eq 6.2`).',
        hi: '$F = m \\times a = 2000 \\times 4 = \\mathbf{8000\\text{ N}}$।',
      },
    },
    {
      id: 20,
      examTag: 'RRB NTPC UG 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Impulse',
      question: {
        en: 'Impulse is defined as _________.',
        hi: 'आवेग को _________ के रूप में परिभाषित किया गया है।',
      },
      options: {
        en: ['rate of change of force', 'change in displacement', 'product of mass and velocity', 'product of force and time'],
        hi: ['बल के परिवर्तन की दर', 'विस्थापन में परिवर्तन', 'द्रव्यमान और वेग का गुणनफल', 'बल और समय का गुणनफल'],
      },
      correctIndex: 3,
      solution: {
        en: 'Impulse $J = F \\times \\Delta t = \\Delta p$ (`product of force and contact duration`, `NCERT Sec 6.5 & Ex Q13`).',
        hi: 'आवेग = **बल × संपर्क समय** ($F \\times \\Delta t = \\text{संवेग में परिवर्तन}$)।',
      },
    },
    {
      id: 21,
      examTag: 'RRB Tech Gr-III 2024 Shift 14',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Momentum SI Unit',
      question: {
        en: 'What is the SI unit of momentum?',
        hi: 'संवेग का SI मात्रक क्या है?',
      },
      options: {
        en: ['$\\text{kg m s}$', '$\\text{kg m}^{-1}\\text{ s}^{-1}$', '$\\text{kg m s}^{-1}$', '$\\text{kg m}$'],
        hi: ['$\\text{kg m s}$', '$\\text{kg m}^{-1}\\text{ s}^{-1}$', '$\\text{kg m s}^{-1}$', '$\\text{kg m}$'],
      },
      correctIndex: 2,
      solution: {
        en: 'From $p = m \\times v$: $\\text{kg} \\times \\text{m s}^{-1} = \\mathbf{\\text{kg m s}^{-1}}$ (`NCERT Sec 6.5 p.104`).',
        hi: 'संवेग $p = mv$ होने से मात्रक = **$\\text{kg m s}^{-1}$**।',
      },
    },
    {
      id: 22,
      examTag: 'RRB Tech Gr-III 2024 Shift 21',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Momentum Formula',
      question: {
        en: 'What is the momentum $p$, of an object of mass $m$, moving with a velocity $v$?',
        hi: '$v$ वेग से गतिमान $m$ द्रव्यमान की किसी वस्तु का संवेग $p$ क्या होगा?',
      },
      options: {
        en: ['$P = v m^{-1}$', '$P = m v$', '$P = m v^{-2}$', '$p = (mv)^{-2}$'],
        hi: ['$P = v m^{-1}$', '$P = m v$', '$P = m v^{-2}$', '$p = (mv)^{-2}$'],
      },
      correctIndex: 1,
      solution: {
        en: 'NCERT Sec 6.5 (`p.104`): Momentum is directly defined as the product of mass and velocity (`p = m·v`).',
        hi: 'वस्तु के द्रव्यमान ($m$) एवं वेग ($v$) के गुणनफल को संवेग ($p = mv$) कहते हैं।',
      },
    },
    {
      id: 23,
      examTag: 'RRB Tech Gr-III 2024 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Mass & Inertia',
      question: {
        en: 'Which of the following options is correct in the relation between mass and inertia?',
        hi: 'द्रव्यमान और जड़त्व के संबंध में निम्नलिखित में से कौन-सा विकल्प सही है?',
      },
      options: {
        en: ['Inertia is inversely proportional to mass.', 'Inertia is independent of mass.', 'Inertia is proportional to mass.', 'The data provided here is not adequate to draw any conclusion.'],
        hi: ['जड़त्व, द्रव्यमान के व्युत्क्रमानुपाती होता है।', 'जड़त्व, द्रव्यमान से स्वतंत्र होता है।', 'जड़त्व, द्रव्यमान के समानुपाती होता है।', 'उपलब्ध आंकड़े, किसी निष्कर्ष पर पहुंचने के लिए पर्याप्त नहीं हैं।'],
      },
      correctIndex: 2,
      solution: {
        en: 'Inertia is DIRECTLY proportional to mass (`heavier bodies resist acceleration more strongly`).',
        hi: '**जड़त्व, द्रव्यमान के समानुपाती** होता है — द्रव्यमान बढ़ने से जड़त्व बढ़ता है।',
      },
    },
    {
      id: 24,
      examTag: 'RRB Tech Gr-III 2024 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 6: Two-Body Rule',
      question: {
        en: "According to the Newton's third law of motion, to every action:",
        hi: 'न्यूटन की गति के तीसरे नियम के अनुसार, प्रत्येक क्रिया के लिए:',
      },
      options: {
        en: ['there is an equal and opposite reaction and they act on two different bodies', 'there is an equal and perpendicular reaction and they act on two different bodies', 'there is an unequal and opposite reaction and they act on the same body', 'there is an equal and opposite reaction and they act on the same body'],
        hi: ['एक समान और विपरीत प्रतिक्रिया होती है तथा वे दो अलग-अलग वस्तुओं पर कार्य करती हैं', 'एक समान और लंबवत प्रतिक्रिया होती है तथा वे दो अलग-अलग वस्तुओं पर कार्य करती हैं', 'एक असमान और विपरीत प्रतिक्रिया होती है तथा वे एक ही वस्तु पर कार्य करती हैं', 'एक समान और विपरीत प्रतिक्रिया होती है तथा वे एक ही वस्तु पर कार्य करती हैं'],
      },
      correctIndex: 0,
      solution: {
        en: 'NCERT Margin Note (`p.108 & 109`): Action-reaction forces are ALWAYS equal, opposite, and act on **TWO DIFFERENT BODIES**!',
        hi: 'NCERT टिप्पणी (`पृ. 108 व 109`): प्रत्येक क्रिया के लिए समान व विपरीत प्रतिक्रिया होती है तथा **ये दो अलग-अलग वस्तुओं पर** कार्य करती हैं!',
      },
    },
  ],
};
