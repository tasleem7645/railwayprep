/**
 * Class 9 NCERT (2026-27 New Edition — ihsc104.pdf, Pages 48–71) + Railway CBT Deep-Dive Edition
 * Chapter 4: Describing Motion Around Us (अपने परिवेश में गति का वर्णन) — Gold Standard v3
 * Zero 3rd-party mentions, full classroom lecture depth, bilingual terminology,
 * Interactive x-t/v-t & Kinematics SVG Lab, 6 Print+Web Vector Plates, Real Photos,
 * 5 Activities with Predictors, 7 Tables, 5 Think Qs, All 16 Exercises Solved & 24 Dated RRB PYQs.
 */

export const CH4_MOTION_DATA = {
  id: 'c9-phy-ch4',
  classId: 'class9',
  subjectId: 'physics',
  subjectLabel: { en: 'Physics', hi: 'भौतिक विज्ञान (Physics)' },
  chapterNumber: 4,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 4: Describing Motion Around Us (Complete CBT Edition)',
  blueprintSvgKey: 'ch4-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Graphs (x-t Slope, v-t Slope & Area)', hi: 'गति ग्राफ (x-t ढलान व v-t क्षेत्रफल)' }, pct: 32 },
    { label: { en: '3 Kinematic Equations & Free Fall', hi: 'शुद्धगतिक समीकरण व मुक्त पतन संख्यात्मक' }, pct: 28 },
    { label: { en: 'Distance, Displacement, Speed & Velocity', hi: 'दूरी, विस्थापन, चाल, वेग व इकाई बदलाव' }, pct: 24 },
    { label: { en: 'Uniform Circular Motion (v = 2πR/T)', hi: 'एकसमान वृत्तीय गति व स्पर्शरेखीय वेग' }, pct: 16 },
  ],
  title: {
    en: 'Chapter 4: Describing Motion Around Us (Kinematics & Graphs)',
    hi: 'अध्याय 4: अपने परिवेश में गति का वर्णन (गतिकी, ग्राफ व समीकरण)',
  },
  subtitle: {
    en: 'Complete Physics Teacher Lecture • Distance/Displacement, Speed/Velocity/Acceleration, Interactive Graph Lab, 3 Equations, Circular Motion & 24 RRB PYQs',
    hi: 'शिक्षक व्याख्या सहित संपूर्ण गहराई • 6 वेक्टर चित्र, इंटरैक्टिव ग्राफ लैब, सभी 16 अभ्यास प्रश्न, ब्रांडेड A4 PDF व 24 रेलवे PYQ',
  },
  metrics: {
    pages: 24,
    activities: 5,
    tables: 7,
    svgLabs: 1,
    hdVisuals: 6,
    exercisesSolved: 16,
    pyqsMatched: 24,
  },

  hero: {
    imageUrl: '/ncert-notes/class9-phy-ch4/hero-motion-physics.webp',
    caption: {
      en: 'Rectilinear track trains, accelerating distance-time curves, strobe free-fall under gravity g, and circular satellite orbits.',
      hi: 'सरल रेखीय ट्रेन गति, परवलयिक स्थिति-समय ग्राफ, गुरुत्व अधीन मुक्त पतन (g) तथा वृत्ताकार कक्षीय उपग्रह गति का वैज्ञानिक दृश्य।',
    },
  },

  quickRevision60Sec: [
    {
      en: '**Scalar vs Vector**: **Distance & Speed** = Scalar (`magnitude only`, always ≥ 0); **Displacement, Velocity & Acceleration** = Vector (`magnitude + direction`, can be +, −, or 0). **Distance ≥ |Displacement|** always!',
      hi: '**अदिश बनाम सदिश**: **दूरी व चाल** = अदिश (`केवल परिमाण`, ≥ 0); **विस्थापन, वेग व त्वरण** = सदिश (`परिमाण + दिशा`, +, − या 0)। **दूरी सदैव ≥ |विस्थापन|**!',
    },
    {
      en: '**Speed Unit Bridge**: $\\text{km h}^{-1} \\to \\text{m s}^{-1}$: multiply by **5/18** ($36\\text{ km/h} = 10\\text{ m/s}$, $54 = 15$, $72 = 20$, $108 = 30$). **Odometer** = Total distance; **Speedometer** = Instantaneous speed.',
      hi: '**मात्रक सूत्र**: $\\text{km/h} \\to \\text{m/s}$ के लिए **5/18** से गुणा करें ($36 = 10$, $54 = 15$, $72 = 20$, $108 = 30\\text{ m/s}$)। **ओडोमीटर** = कुल दूरी; **चालमापी (Speedometer)** = तात्क्षणिक चाल।',
    },
    {
      en: '**Graph Rules (PYQ Favourite!)**: Slope of **$x\\text{--}t$ (Position-Time)** graph = **Velocity** (horizontal line = at rest). Slope of **$v\\text{--}t$ (Velocity-Time)** graph = **Acceleration**; **Area enclosed under $v\\text{--}t$ curve** = **Displacement ($s$)**.',
      hi: '**ग्राफ के अचूक नियम (PYQ)**: **$x\\text{--}t$ की ढलान (Slope)** = **वेग** (क्षैतिज रेखा = विरामावस्था)। **$v\\text{--}t$ की ढलान** = **त्वरण**; **$v\\text{--}t$ व समय अक्ष का क्षेत्रफल** = **विस्थापन ($s$)**।',
    },
    {
      en: '**3 Kinematic Equations (ONLY for Constant $a$)**: **$v = u + at$**, **$s = ut + \\frac{1}{2}at^2$**, **$v^2 = u^2 + 2as$** (plus average form **$s = \\frac{u+v}{2}t$**). **Braking Distance** $s = u^2/(2|a|)$ -> doubling speed **quadruples ($4\\times$)** stopping distance!',
      hi: '**3 शुद्धगतिक समीकरण (केवल नियत $a$ पर मान्य)**: **$v = u + at$**, **$s = ut + \\frac{1}{2}at^2$**, **$v^2 = u^2 + 2as$**। **रुकने की दूरी** $s \\propto u^2$ — चाल दोगुनी करने पर रुकने की दूरी **4 गुना** हो जाती है!',
    },
    {
      en: '**Uniform Circular Motion**: Speed is **constant** ($v = 2\\pi R / T$), yet **velocity changes continuously** due to direction change -> **Accelerated motion** directed **inward along radius**; on release, body flies strictly along straight **Tangent**!',
      hi: '**एकसमान वृत्तीय गति**: चाल **अचर** ($v = 2\\pi R / T$) रहती है, फिर भी दिशा लगातार बदलने से **वेग परिवर्ती → त्वरित गति** (त्वरण **त्रिज्या के अनुदिश केंद्र की ओर**)! मुक्त करने पर वस्तु **स्पर्शरेखा (Tangent)** पर जाती है।',
    },
    {
      en: '**1D / 2D / 3D + Indian Heritage**: **1D** (straight train/free fall), **2D** (overtaking car, kicked ball, circular satellite), **3D** (bird/plane/mountain spiral). *Aryabhatiya* (5th c. CE) & *Ganita Kaumudi* (14th c. CE) formulated $v = d/t$.',
      hi: '**1D / 2D / 3D गति व भारतीय योगदान**: 1D (सीधी ट्रेन), 2D (प्रक्षेप्य/उपग्रह), 3D (पक्षी/पहाड़ी मोड़)। **आर्यभटीय** (5वीं शती) व **गणित कौमुदी** (14वीं शती) में गति-सूत्र वर्णित थे।',
    },
  ],

  sections: [
    {
      id: 'frame-distance-displacement',
      number: '4.1.1–4.1.2',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Reference Point, Rest vs Motion, Scalar Distance vs Vector Displacement',
        hi: 'संदर्भ बिंदु (Reference Frame), विराम बनाम गति, अदिश दूरी एवं सदिश विस्थापन',
      },
      summaryTag: { en: 'NCERT Pages 48–51 + Activity 4.1 + Straight/2D Vectors', hi: 'NCERT पृष्ठ 48–51 + क्रियाकलाप 4.1 + सदिश चित्र' },
      blocks: [
        {
          heading: {
            en: '1. Reference Point (Origin O), Instant vs Time Interval & Relativity of Rest',
            hi: '1. संदर्भ बिंदु, समय का क्षण बनाम अंतराल तथा गति की सापेक्ष प्रकृति',
          },
          conceptStory: {
            en: 'Look around: from Earth orbiting the Sun to butterflies flapping wings and dust motes dancing in sunlight, everything in nature moves! To study complex 3D motions scientifically, physicists begin with three simplified models: **Rectilinear (`सरल रेखीय`), Circular (`वृत्तीय`), and Oscillatory (`दोलनी`) motion**. How do we state an object’s exact position? First fix an agreed **Reference Point / Origin (`संदर्भ बिंदु O`)**: you must specify BOTH **distance** from `O` and **direction** (`+` right / `−` left on a track, NCERT Fig 4.3!). If position relative to `O` changes over time, the body is **In Motion (`गतिशील`)**; if unchanging, it is **At Rest (`विरामावस्था`)**. Crucially, Rest and Motion are relative (`Exercise Q11`): a book lying on a desk is at rest relative to Earth’s floor even while Earth spins around the Sun! Also distinguish carefully between an **Instant of Time (`समय का क्षण` — single clock reading like 8:00 am)** and a **Time Interval (`समय अंतराल` — elapsed duration between two readings, e.g., $t_2 - t_1 = 4\\text{ s}$)**.',
            hi: 'प्रकृति में खगोलीय पिंडों से अवपरमाणुक कणों तक सब गतिमान है। जटिल गतियों को समझने के लिए वैज्ञानिक इन्हें पहले **सरल रेखीय (Rectilinear), वृत्तीय (Circular) और दोलनी (Oscillatory)** आदर्श रूपों में पढ़ते हैं।\n• **स्थिति निर्धारण (संदर्भ बिंदु O):** किसी वस्तु की स्थिति बताने हेतु पहले एक नियत **संदर्भ बिंदु / मूल बिंदु O** तय करना अनिवार्य है, फिर **दूरी के साथ दिशा** (+ दाईं ओर, − बाईं ओर — चित्र 4.3) भी बतानी होती है। यदि संदर्भ बिंदु के सापेक्ष समय के साथ स्थिति बदले तो वस्तु **गतिशील**, और न बदले तो **विरामावस्था (Rest)** में मानी जाती है *(अतः एक ही वस्तु पृथ्वी के सापेक्ष स्थिर किंतु सूर्य के सापेक्ष गतिमान हो सकती है — अभ्यास प्रश्न 11!)*।\n• **महत्वपूर्ण अंतर (टिप्पणी पृष्ठ 50):** **समय का एक क्षण (Instant of time)** घड़ी का एकल पाठ्यांक है (जैसे ठीक 8:00 बजे), जबकि दो पाठ्यांकों का अंतर **समय अंतराल (Time interval $= t_2 - t_1$)** कहलाता है।',
          },
          bullets: [
            {
              en: '**==Scalar vs Vector Quantities (`NCERT Marginal Box p.50`):==** Quantities specified completely by numerical value + unit ONLY are **Scalar (`अदिश` — Distance, Speed, Time, Mass)**. Quantities needing BOTH **Magnitude (`परिमाण`) + Direction (`दिशा`)** are **Vector (`सदिश` — Displacement, Velocity, Acceleration, Force)**.',
              hi: '**==अदिश बनाम सदिश राशियाँ (NCERT पृष्ठ 50):==** केवल आंकिक मान व मात्रक से पूर्ण होने वाली **अदिश राशियाँ** (**दूरी, चाल, समय, द्रव्यमान**); तथा **परिमाण + दिशा दोनों** आवश्यक होने पर **सदिश राशियाँ** (**विस्थापन, वेग, त्वरण, बल**) कहलाती हैं।',
            },
            {
              en: '**==Runner Track & Vertical Ball Proof (`Fig 4.4 & Activity 4.1`):==** Runner Neena starts at `O (0 m)`, runs to `A (100 m)`, and jogs back to `B (40 m)`: **Total Distance** = $100 + 60 = 160\\text{ m}$, whereas **Displacement** = $OB = +40\\text{ m}$! Similarly, throwing a ball vertically up `140 cm` to peak `B` and catching it back at `O` gives **Distance = `280 cm`** yet **Displacement = `0 cm`**!',
              hi: '**==धावक व गेंद प्रयोग प्रमाण (चित्र 4.4 व क्रियाकलाप 4.1):==** धावक `O (0 m)` से `A (100 m)` जाकर `B (40 m)` पर लौटे तो **कुल चलित दूरी** $= 100 + 60 = 160\\text{ m}$, किंतु **विस्थापन** $= OB = +40\\text{ m}$ है! ऊपर `140 cm` फेंकी गेंद वापस हाथ `O` में लौटे तो **दूरी = `280 cm`**, पर **विस्थापन = `0 cm`**!',
            },
            {
              en: '**==Fuel Usage & Inclined Track (`Think Q2 & Q3`):==** Vehicle fuel consumption depends strictly on actual **Total Distance** driven along winding roads (even a round-trip returning to `O` with `0` displacement burns full fuel!). On two joined inclined tracks `O->A->B->C->D` changing direction, displacement magnitude becomes LESS than curved/bent path length.',
              hi: '**==ईंधन की खपत व आनत पथ (सोचिए प्रश्न 2–3):==** वाहन का ईंधन **कुल चलित दूरी** पर निर्भर करता है (न कि शून्य विस्थापन पर)। टेढ़े-मेढ़े या मुड़ने वाले आनत पथ में कुल दूरी सदैव विस्थापन के परिमाण से **बड़ी** होती है।',
            },
          ],
          diagramKey: 'reference-frame-displacement',
          realImage: {
            url: '/ncert-notes/class9-phy-ch4/real/vande-bharat-rectilinear.webp',
            title: {
              en: 'Rectilinear Track Reference Motion: High-Speed Train Along Straight Railway Line',
              hi: 'सरल रेखीय गति का व्यावहारिक उदाहरण: सीधी रेल पटरी पर गतिमान वंदे भारत एक्सप्रेस',
            },
            caption: {
              en: 'Along a straight one-way track without turning back, Total Distance travelled equals Magnitude of Displacement exactly!',
              hi: 'बिना दिशा बदले सीधी पटरी पर चलती ट्रेन के लिए किसी अंतराल में चलित दूरी और विस्थापन का परिमाण बिल्कुल बराबर होते हैं।',
            },
          },
          trapAlert: {
            en: '**Exam Golden Inequality (`Group D & ALP 2025`):** Always remember **Total Distance ≥ |Displacement|**! Equality holds **ONLY** when motion continues in a straight line WITHOUT reversing direction! Displacement can be **Zero** (round-trip) even when distance is huge; **Distance can NEVER be zero** once motion occurs and is NEVER negative.',
            hi: '**-0.33 Trap Alert:** **कुल दूरी सदैव ≥ |विस्थापन|** होती है — ये दोनों **केवल एकदिशीय सरल रेखीय गति (बिना लौटे)** में बराबर होते हैं! चक्कर पूरा कर लौटने पर विस्थापन **शून्य (0)** हो सकता है, पर चलित दूरी **कभी 0 या ऋणात्मक नहीं** हो सकती!',
          },
          inlinePyqIds: [3, 17, 24],
        },
      ],
    },

    {
      id: 'speed-velocity-acceleration',
      number: '4.1.3–4.1.4',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Average Speed & Velocity, Indian Heritage, Speedometer/Odometer & Acceleration/Free Fall',
        hi: 'माध्य चाल व वेग, आर्यभटीय-गणित कौमुदी, चालमापी/ओडोमीटर एवं त्वरण (मंदन व मुक्त पतन g)',
      },
      summaryTag: { en: 'NCERT Pages 51–55 + Solved Examples 4.1–4.4 + Strobe Ball Photo', hi: 'NCERT पृष्ठ 51–55 + उदाहरण 4.1–4.4 + मुक्त पतन फोटो' },
      blocks: [
        {
          heading: {
            en: '1. Uniform/Non-Uniform Rectilinear Motion, Unit Conversion (5/18) & Solved Examples 4.1–4.2',
            hi: '1. एकसमान/असमान चाल, भारतीय गणित ग्रंथ, चालमापी-ओडोमीटर व त्वरण-मुक्त पतन',
          },
          conceptStory: {
            en: 'How fast a body moves regardless of heading is its **Average Speed (`माध्य चाल`)**: $\\text{Average Speed} = \\frac{\\text{Total Distance Travelled}}{\\text{Time Interval}}$. Covering equal distances in ANY equal time intervals means **Uniform Rectilinear Motion (`एकसमान सरल रेखीय गति`)**; unequal distances mean **Non-Uniform Motion**. In real physics, direction matters equally—so **Average Velocity (`माध्य वेग`)** tracks **Displacement per unit time**: $v_{av} = s / t$ (SI unit **$\\text{m s}^{-1}$** for BOTH speed and velocity!). Dashboard note (`NCERT Box p.53`): a vehicle’s **Odometer (`ओडोमीटर`)** logs cumulative distance, whereas its **Speedometer (`चालमापी`)** reads **Instantaneous Speed (`तात्क्षणिक चाल` — magnitude of velocity at that exact instant, NOT average speed!)**.\nWhenever velocity changes—in **magnitude** (pressing accelerator or brakes) OR **direction** (turning a bend)—motion possesses **Acceleration (`त्वरण`)**: $a = \\frac{v - u}{t_2 - t_1}$ (SI unit **$\\text{m s}^{-2}$**). If velocity increases along the motion direction, $a$ is **positive**; if brakes reduce velocity, $a$ points **opposite to velocity (negative / Retardation `मंदन`)**! Crucially (`NCERT Note p.55`): a bullet train cruising at $300\\text{ km h}^{-1}$ straight at constant speed has **ZERO acceleration ($a = 0$)** because $\\Delta v = 0$!',
            hi: '• **माध्य चाल (Average Speed — अदिश):** कुल चलित दूरी ÷ समय अंतराल। यदि वस्तु सभी समान समय अंतरालों में समान दूरी चले तो यह **एकसमान सरल रेखीय गति** है, अन्यथा **असमान गति**। *(5वीं शती के **आर्यभटीय** व 14वीं शती के **गणित कौमुदी** में इसी सूत्र पर आधारित **उदाहरण 4.1** वर्णित है जहाँ 210 योजन दूर स्थित दो पत्रवाहक 9 व 5 योजन/दिन की चाल से 210 ÷ 14 = 15 दिन में मिलते हैं!)*\n• **माध्य वेग (Average Velocity — सदिश):** कुल विस्थापन ÷ समय अंतराल ($v_{av} = s/t$, SI मात्रक **$\\text{m s}^{-1}$**)। **उदाहरण 4.2:** तैराक सारंग `25 m` पूल के एक किनारे से जाकर लौटने (कुल दूरी `50 m`, विस्थापन `0 m`) में `50 s` ले तो माध्य चाल = `1 m/s`, पर माध्य वेग = **`0 m/s`**! डैशबोर्ड का **ओडोमीटर** कुल दूरी नापता है, जबकि **चालमापी (Speedometer)** उस क्षण की **तात्क्षणिक चाल** दिखाता है।\n• **माध्य त्वरण (Average Acceleration — सदिश):** वेग परिवर्तन की समय-दर, $a = \\frac{v - u}{t_2 - t_1}$ (SI मात्रक **$\\text{m s}^{-2}$**)। **उदाहरण 4.3:** बस $36\\text{ km/h}$ (`10 m/s`) से 10 s में $54\\text{ km/h}$ (`15 m/s`) पकड़े तो $a = +0.5\\text{ m/s}^2$ (त्वरण वेग की दिशा में); ब्रेक लगा कर 5 s में रुके तो $a = -3\\text{ m/s}^2$ (**मंदन — त्वरण वेग के विपरीत**)। याद रहे: **नियत तेज चाल से सीधी चलती बस का त्वरण शून्य ($a=0$)** होता है!\n• **मुक्त पतन (उदाहरण 4.4):** ऊँचाई से गिराई वस्तु का वेग हर सेकंड क्रमशः `9.8, 19.6, 29.4, 39.2 m/s` होता है → इसका नियत त्वरण **$g = 9.8\\text{ m s}^{-2}$** नीचे पृथ्वी की ओर लगता है!',
          },
          bullets: [
            {
              en: '**==Instant Formula Check (`Convert km/h <-> m/s`):==** $1\\text{ km/h} = \\frac{1000\\text{ m}}{3600\\text{ s}} = \\frac{5}{18}\\text{ m/s}$. Memorize: **$18\\text{ km/h} = 5\\text{ m/s}$**, **$36 = 10$**, **$54 = 15$**, **$72 = 20$**, **$90 = 25$**, **$108 = 30\\text{ m/s}$**!',
              hi: '**==शॉर्टकट रूपांतरण (5/18 नियम):==** $\\text{km/h} \\times \\frac{5}{18} = \\text{m/s}$। याद रखें: **$18=5$, $36=10$, $54=15$, $72=20$, $90=25$, $108=30\\text{ m/s}$**!',
            },
            {
              en: '**Equal-Distance Harmonic Average Speed Trap (Non-Uniform CBT Favorite):** Moving equal halves at $v_1$ and $v_2$ does NOT give $(v_1+v_2)/2$! True Average Speed = **$\\frac{2 v_1 v_2}{v_1 + v_2}$** *(Note: $(u+v)/2$ applies ONLY to uniform constant acceleration!)*',
              hi: '**समान दूरी पर औसत चाल का -0.33 ट्रिक:** आधी-आधी (बराबर) दूरी $v_1$ व $v_2$ से तय करने पर औसत चाल **$\\frac{2 v_1 v_2}{v_1 + v_2}$** होती है (*समान समय* होने पर ही $\\frac{v_1+v_2}{2}$ लगता है)!',
            },
          ],
          diagramKey: 'scalar-vs-vector-trio',
          realImage: {
            url: '/ncert-notes/class9-phy-ch4/real/falling-ball-strobe.webp',
            title: {
              en: 'Stroboscopic Free Fall Under Constant Acceleration g (Equal Time Flashes -> t² Spacing)',
              hi: 'गुरुत्वीय त्वरण (g) के अधीन मुक्त पतन का स्ट्रोबोस्कोपिक फोटो (0, 1, 4, 9, 16, 25... दूरी अनुपात)',
            },
            caption: {
              en: 'Because velocity rises by 9.8 m/s every second, vertical gap between equal-interval snapshots grows as 1 : 4 : 9 : 16... (s = ½gt²)!',
              hi: 'हर सेकंड वेग में +9.8 m/s वृद्धि होने के कारण बराबर समय पर खींची तस्वीरों के बीच दूरी $t^2$ (1, 4, 9, 16...) के अनुपात में बढ़ती है!',
            },
          },
          viralTrick: {
            en: '**Odometer vs Speedometer Hack:** **ODO**meter sounds like "**ROAD** travelled" -> Total Distance! **SPEED**ometer displays "**NOW** speed" -> Instantaneous Speed!',
            hi: '**स्मृति सूत्र:** **ओडोमीटर (`Odo`)** = यात्रा की **कुल दूरी (km)** पढ़ता है (चालक स्वयं Δd/Δt से औसत चाल निकाल सकता है — ALP 2025!), जबकि **चालमापी (`Speedometer`)** केवल **तत्क्षण चाल** दिखाता है।',
          },
          inlinePyqIds: [1, 2, 4, 19, 20],
        },
      ],
    },

    {
      id: 'graphical-motion-lab',
      number: '4.2.1–4.2.3',
      flowDiagramKey: null,
      svgLab: 'motion-graph-lab',
      svgLabTitle: {
        en: 'Motion Graph (x-t & v-t) & Kinematic Equations Simulator',
        hi: 'गति ग्राफ (x-t व v-t ढलान-क्षेत्रफल) एवं शुद्धगतिक समीकरण लैब',
      },
      title: {
        en: 'Graphical Analysis: Position-Time (x-t) Slope & Velocity-Time (v-t) Slope + Area Under Curve',
        hi: 'गति का आलेखीय निरूपण: स्थिति-समय (x-t) ढलान तथा वेग-समय (v-t) ढलान व क्षेत्रफल',
      },
      summaryTag: { en: 'NCERT Pages 56–63 + Activity 4.3–4.4 + Interactive Graph Simulator', hi: 'NCERT पृष्ठ 56–63 + क्रियाकलाप 4.3–4.4 + इंटरैक्टिव ग्राफ लैब' },
      blocks: [
        {
          heading: {
            en: '1. Position-Time (x-t) Graphs — Slope Reveals Velocity (Examples 4.5, 4.6, 4.7)',
            hi: '1. स्थिति-समय (x-t) ग्राफ — सरल रेखा की ढलान = वेग (नोट: ग्राफ यात्रा-पथ का नक्शा नहीं है!)',
          },
          conceptStory: {
            en: 'A graph is NOT a road map showing turns on Earth—as **NCERT Caution p.58** highlights explicitly, it plots **how position $x$ (Y-axis) evolves with time $t$ (X-axis)**! Choosing proper scale on grid paper (Activity 4.3: e.g., $5\\text{ div} = 1\\text{ s}$ on X, $20\\text{ m}$ on Y for Table 4.3), four critical $x\\text{--}t$ signatures appear in Railway CBT questions:\n1. **Horizontal straight line parallel to X-axis (`Example 4.6`)**: Position stays fixed ($40\\text{ m}$) as time ticks -> **Slope = 0 -> Object is AT REST (`विरामावस्था`)**!\n2. **Slanted straight line with constant rise (`Table 4.3, Activity 4.4`)**: Equal distance covered every second -> **Uniform Velocity**, calculated quantitatively via triangle slope **$\\text{Slope} = \\frac{BC}{CA} = \\frac{s_2 - s_1}{t_2 - t_1} = \\frac{80 - 40}{4 - 2} = 20\\text{ m s}^{-1}$**!\n3. **Two lines A & B from origin (`Example 4.7`)**: Steeper line (`B`) covers larger displacement in equal $\\Delta t$ -> **Greater Slope = Faster Speed ($v_B > v_A$)**!\n4. **Curved Graph (`Example 4.5 Table 4.4`: $t=0..12\\text{ s}, x=0,1,4,9,16,25,36\\text{ m}$)**: Slope curving **upward steeper** (`Increasing slope`) = **Acceleration (+)**; curve starting steep and **flattening horizontally** (`Decreasing slope`, Group D 2025 Shift 17!) = **Deceleration / Retardation (−)**!',
            hi: '**NCERT विशेष चेतावनी (पृष्ठ 58):** गति का ग्राफ **यात्रा-पथ का मानचित्र नहीं** होता (यह नहीं बताता कि सड़क बाएँ मुड़ी या दाएँ); यह केवल **समय (X-अक्ष) के साथ स्थिति (Y-अक्ष)** में बदलाव दर्शाता है! `x-t` (या एकदिशीय `दूरी-समय`) ग्राफ के **4 रेलवे परीक्षा रूप** पहचानें:\n1. **समय-अक्ष के समांतर क्षैतिज सरल रेखा (`उदाहरण 4.6`):** स्थिति स्थिर ($40\\text{ m}$) बनी रहती है → ढलान शून्य → वस्तु **विरामावस्था (Rest)** में है।\n2. **मूलबिंदु से सीधी झुकी सरल रेखा (`तालिका 4.3 व क्रियाकलाप 4.4`):** **एकसमान वेग**। किन्हीं दो बिंदुओं $A(2\\text{s}, 40\\text{m})$ व $B(4\\text{s}, 80\\text{m})$ से बनी **ढलान / प्रवणता (Slope)** $= \\frac{BC}{CA} = \\frac{s_2 - s_1}{t_2 - t_1} = \\frac{40}{2} = 20\\text{ m s}^{-1}$ ही वेग देती है।\n3. **दो रेखाओं की तुलना (`उदाहरण 4.7`):** जिसकी ढलान समय अक्ष से **अधिक खड़ी (Steep)** हो, उसका वेग अधिक होता है ($v_B > v_A$)।\n4. **वक्र रेखा (`उदाहरण 4.5 तालिका 4.4`: $x = 0,1,4,9,16,25,36$):** ऊपर मुड़कर बढ़ती ढलान = **त्वरण (बढ़ती चाल)**; और शुरू में खड़ी फिर **सपाट होती ढलान (Group D 2025!)** = **मंदन (Deceleration)**!',
          },
          diagramKey: 'position-time-graphs-master',
          inlinePyqIds: [9, 11, 12, 16, 19],
        },
        {
          heading: {
            en: '2. Velocity-Time (v-t) Graphs — Slope = Acceleration, Shaded Area = Displacement',
            hi: '2. वेग-समय (v-t) ग्राफ — प्रवणता (Slope) = त्वरण तथा क्षेत्रफल = विस्थापन (आयत + त्रिभुज)',
          },
          conceptStory: {
            en: 'The **Velocity-Time ($v\\text{--}t$) graph** unlocks TWO physical quantities at once (`NCERT Pages 61–63`):\n• **Height of graph at any moment $t$** = instantaneous velocity.\n• **Slope of $v\\text{--}t$ line ($BC/CA = \\frac{v - u}{t_2 - t_1}$)** = **Acceleration ($a$)**! Specifically: (a) **Horizontal line** (`20 m/s`, Fig 4.17a) -> **Zero Slope -> Constant Velocity, ZERO acceleration**; (b) **Upward straight line** (`Table 4.5`: `0, 2.5, 5.0, ..., 15 m/s` in `0–30 s`, Fig 4.17b) -> **Constant Positive Acceleration** $= (10 - 5)/(20 - 10) = +0.5\\text{ m s}^{-2}$; (c) **Downward straight line** (`Table 4.6`: `15.0 -> 0 m/s` in `30 s`, Fig 4.17c) -> **Uniform Retardation** $= -0.5\\text{ m s}^{-2}$!\n• **Area Enclosed Between $v\\text{--}t$ Curve and Time Axis (`Fig 4.18`)** = **Net Displacement ($s$)**! For constant velocity `20 m/s` from `0–6 s`, shaded rectangle area $= 20 \\times 6 = 120\\text{ m}$. For uniformly accelerated motion from `10 s` ($v=5$) to `20 s` ($v=10$) (`Fig 4.18b`), shaded trapezium $ABDE$ = Rectangle $ACDE$ ($5 \\times 10 = 50\\text{ m}$) + Triangle $ABC$ ($\\frac{1}{2} \\times 10 \\times 5 = 25\\text{ m}$) = **$75\\text{ m}$**!',
            hi: 'वेग-समय ($v\\text{--}t$) ग्राफ एक साथ दो बड़ी भौतिक राशियाँ हल कर देता है:\n1. **$v\\text{--}t$ ग्राफ की ढलान (Slope = $\\frac{v - u}{t_2 - t_1}$):** **त्वरण ($a$)** देती है:\n   • **X-अक्ष के समांतर क्षैतिज रेखा (`चित्र 4.17 क`):** वेग अचर ($20\\text{ m/s}$), प्रवणता = 0 → **त्वरण शून्य ($a=0$)**!\n   • **ऊपर उठती सीधी रेखा (`तालिका 4.5`):** **नियत धनात्मक त्वरण** ($a = \\frac{10-5}{20-10} = +0.5\\text{ m s}^{-2}$)।\n   • **नीचे गिरती सीधी रेखा (`तालिका 4.6`):** **नियत मंदन** ($a = -0.5\\text{ m s}^{-2}$, 30 s पर विराम)।\n2. **ग्राफ रेखा एवं समय-अक्ष के मध्य परिबद्ध क्षेत्रफल (`चित्र 4.18`):** **कुल विस्थापन ($s$)** देता है! जैसे नियत वेग $20\\text{ m/s}$ से 6 s में आयत का क्षेत्रफल = $20 \\times 6 = 120\\text{ m}$, और `10–20 s` के बीच समलंब $ABDE$ = **आयत ($5 \\times 10 = 50$) + त्रिभुज ($\\frac{1}{2} \\times 10 \\times 5 = 25$) = $75\\text{ m}$**!',
          },
          diagramKey: 'velocity-time-area-slope',
          trapAlert: {
            en: '**Double Check Axis Labels (`-0.33 Trap Alert`):** **Horizontal line** on **$x\\text{--}t$** = **At Rest ($v=0$)**, whereas **Horizontal line** above axis on **$v\\text{--}t$** = **Uniform Constant Velocity ($a=0$)**! Never confuse the two!',
            hi: '**-0.33 Trap Alert (सबसे सामान्य गलती):** **$x\\text{--}t$ ग्राफ** में क्षैतिज रेखा = **वस्तु रुकी है ($v=0$)**; लेकिन **$v\\text{--}t$ ग्राफ** में क्षैतिज रेखा = **वस्तु अचर वेग से चल रही है ($a=0$)**! परीक्षा में Y-अक्ष का नाम जरूर पढ़ें।',
          },
          inlinePyqIds: [7, 13, 14, 15],
        },
      ],
    },

    {
      id: 'kinematic-equations-braking',
      number: '4.3',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: '3+2 Kinematic Equations (Graphical Derivation), Free Fall Signs & Braking Safety (V2V)',
        hi: 'नियत त्वरण के शुद्धगतिक समीकरण (व्युत्पत्ति), मुक्त पतन चिह्न नियम एवं ब्रेक सुरक्षा (V2V)',
      },
      summaryTag: { en: 'NCERT Pages 63–65 + Trapezium Area Derivation + Ex 4.8', hi: 'NCERT पृष्ठ 63–65 + समलंब व्युत्पत्ति + उदा. 4.8' },
      blocks: [
        {
          heading: {
            en: '1. Complete Derivation of 3 Master Kinematic Equations + Stopping Distance Law (s ∝ u²)',
            hi: '1. गति के तीनों (एवं 2 अतिरिक्त) शुद्धगतिक समीकरण, मुक्त पतन व रुकने की दूरी ($s \\propto u^2$)',
          },
          conceptStory: {
            en: 'Suppose an object begins with initial velocity **$u$** at $t = 0$ and undergoes **CONSTANT acceleration $a$** until reaching final velocity **$v$** at time $t$ (NCERT Fig 4.19). Look at how effortlessly ALL three Kinematic Equations drop out of the $v\\text{--}t$ graph:\n1. By slope definition: $a = \\frac{v - u}{t} \\implies$ **Equation (4.4a): $v = u + at$**.\n2. Displacement $s$ = Area of trapezium $OABD$ = Rectangle $OACD$ ($u \\cdot t$) + Triangle $ABC$ ($\\frac{1}{2} \\cdot t \\cdot (v-u)$). Substituting $(v-u) = at$ yields **Equation (4.4b): $s = ut + \\frac{1}{2}at^2$**!\n3. Eliminating $t = \\frac{v-u}{a}$ into (4.4b) gives **Equation (4.4c): $v^2 = u^2 + 2as$** *(and combining gives 2 handy NCERT Project Equations: $s = \\frac{u+v}{2}t$ and $s = vt - \\frac{1}{2}at^2$!)*.\n**Condition & Real-Life Braking (`Example 4.8 + Science & Society p.65`):** These equations work **ONLY for Constant Acceleration ($a = \\text{const}$)**! In Example 4.8 ($a = -4\\text{ m s}^{-2}$, $v=0$), braking from **$54\\text{ km h}^{-1}$ (`15 m/s`)** needs **$28.1\\text{ m}$**, while doubling speed to **$108\\text{ km h}^{-1}$ (`30 m/s`)** shoots stopping distance up **4 TIMES to $112.5\\text{ m}$** ($s = u^2 / 2|a|$)! Total safe headway also includes **Driver Reaction Distance ($u \\cdot t_{react}$)** and depends on wet road friction, tyre tread wear, night fog & modern **V2V (`वाहन से वाहन संप्रेषण`) collision-warning systems** currently piloted across India!',
            hi: 'नियत त्वरण $a$ से सीधी रेखा में गति करती वस्तु ($t=0$ पर प्रारंभिक वेग $u$, $t$ समय बाद अंतिम वेग $v$) के 5 राशियों ($u, v, a, t, s$) के मध्य **$v\\text{--}t$ ग्राफ (समलंब $OABD$)** से तीनों शुद्धगतिक समीकरण प्राप्त होते हैं:\n1. **प्रथम समीकरण `(4.4 क)` — वेग-समय संबंध:** ढलान $a = \\frac{v-u}{t} \\implies$ **$v = u + at$**\n2. **द्वितीय समीकरण `(4.4 ख)` — स्थिति-समय संबंध:** विस्थापन $s =$ समलंब $OABD$ का क्षेत्रफल = आयत ($ut$) + त्रिभुज ($\\frac{1}{2} t (v-u)$) $\\implies$ **$s = ut + \\frac{1}{2}at^2$** *(समलंब सूत्र से सीधे **$s = \\frac{u+v}{2} t$** व परियोजना सूत्र **$s = vt - \\frac{1}{2}at^2$** भी मिलते हैं!)*\n3. **तृतीय समीकरण `(4.4 ग)` — वेग-स्थिति संबंध:** $t = \\frac{v-u}{a}$ रखने पर $\\implies$ **$v^2 = u^2 + 2as$**\n**अनिवार्य शर्त (`टिप्पणी पृष्ठ 65`):** ये समीकरण **केवल नियत त्वरण ($a = \\text{अचर}$)** की स्थिति में ही वैध हैं! **विज्ञान एवं समाज (`उदाहरण 4.8`):** ब्रेक लगाने पर अवरोध त्वरण $a = -4\\text{ m/s}^2$ हो तो **$54\\text{ km/h}$** (`15 m/s`) पर कार **$28.1\\text{ m}$** में रुकती है, पर चाल दोगुनी **$108\\text{ km/h}$** (`30 m/s`) करने पर रुकने की दूरी **4 गुना बढ़कर $112.5\\text{ m}$** हो जाती है ($s \\propto u^2$)! इसके अतिरिक्त वाहन-से-वाहन (**V2V**) तकनीक भारत सहित कई देशों में संभावित टक्कर की अग्रिम चेतावनी देने हेतु विकसित की जा रही है।',
          },
          diagramKey: 'kinematic-equations-sheet',
          viralTrick: {
            en: '**Which Equation to Pick in 3 Seconds (`CBT Cheat`):**\n• Question has NO Distance ($s$)? -> Pick **1st**: **$v = u + at$**\n• Question has NO Final Velocity ($v$)? -> Pick **2nd**: **$s = ut + \\frac{1}{2}at^2$**\n• Question has NO Time ($t$)? -> Pick **3rd**: **$v^2 = u^2 + 2as$** *(or Free fall $v^2 - u^2 = 2gh$!)*',
            hi: '**3 सेकंड में सही समीकरण चुनने का अचूक सूत्र:**\n• प्रश्न में **दूरी ($s$) गायब** हो → **पहला समीकरण:** **$v = u + at$**\n• प्रश्न में **अंतिम वेग ($v$) गायब** हो → **दूसरा समीकरण:** **$s = ut + \\frac{1}{2}at^2$**\n• प्रश्न में **समय ($t$) गायब** हो → **तीसरा समीकरण:** **$v^2 = u^2 + 2as$** *(गुरुत्व अधीन $v^2 - u^2 = 2gh$)!*',
          },
          inlinePyqIds: [5, 8, 21, 22],
        },
      ],
    },

    {
      id: 'plane-circular-motion',
      number: '4.4',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: '1D/2D/3D Motion & Uniform Circular Motion (Tangent Velocity, Centripetal Acceleration)',
        hi: 'समतल में गति (1D/2D/3D) एवं एकसमान वृत्तीय गति (स्पर्शरेखीय वेग व केंद्राभिमुख त्वरण)',
      },
      summaryTag: { en: 'NCERT Pages 65–67 + Activity 4.5 Ring-Marble Experiment + Ferris Photo', hi: 'NCERT पृष्ठ 65–67 + क्रियाकलाप 4.5 + चरखी फोटो' },
      blocks: [
        {
          heading: {
            en: '1. Motion in a Plane (2D) & Space (3D) + Why Uniform Circular Motion Is ALWAYS Accelerated',
            hi: '1. समतल व अंतरिक्ष में गति तथा एकसमान वृत्तीय गति "त्वरित" क्यों कहलाती है?',
          },
          conceptStory: {
            en: 'Moving along a straight railway line needs 1 axis (**1D**). Overtaking a car, kicking a parabolic ball across a field, or orbiting Earth in a flat plane requires **2D (`समतल में गति`, Fig 4.21)**, whereas driving up spiral Himalayan switchbacks or birds/aeroplanes swooping aloft move in **3D space (`त्रिविमीय गति`, Fig 4.26)**!\nNow ask the most tested concept in **RRB ALP, Group D & Tech Gr-III**: On a circular merry-go-round or track (`radius R, time period T`), one full lap traverses circumference **$2\\pi R$**, yet net displacement returns to **`0`**, so **Average Speed $= \\frac{2\\pi R}{T}$** (`Eq 4.5`) while **Average Velocity = `0`**! Think (`Fig 4.23`): an athlete running a rectangle changes direction **4 times** per lap; on a hexagon **6 times**; shrinking polygon sides infinitely forms a **circle** where direction switches **EVERY SINGLE INSTANT** along the **Tangent (`स्पर्शरेखा`)**! Prove it physically (`Activity 4.5`): spin a glass marble inside a tape ring on a smooth table, then lift the ring—the marble immediately shoots straight along the **Tangential path**! Therefore, **Uniform Circular Motion** keeps **SPEED constant** yet keeps **changing VELOCITY continuous direction** -> making it an **Accelerated Motion** whose acceleration vector points **inward along the radius towards the circle centre**!',
            hi: '• **1D, 2D एवं 3D गति (`पृष्ठ 65–67`):** सीधी रेखा में गति **एकविमीय (1D)**; वाहन ओवरटेक करना, उछाली गेंद का पथ व उपग्रह कक्षा **द्विविमीय / समतल में गति (2D)**; तथा पहाड़ी घुमावदार रास्ते पर चढ़ती कार, उड़ते पक्षी व वायुयान **त्रिविमीय (3D)** गति के उदाहरण हैं।\n• **वृत्तीय पथ की दूरी बनाम विस्थापन:** $R$ त्रिज्या के वृत्त का 1 चक्कर $T$ समय में लगाने पर चलित **दूरी $= 2\\pi R$**, किंतु आरंभिक बिंदु पर लौटने के कारण **विस्थापन = शून्य (`0`)**! अतः **माध्य चाल $v_{av} = \\frac{2\\pi R}{T}$**, जबकि **माध्य वेग $= 0$** होता है।\n• **एकसमान वृत्तीय गति सदैव त्वरित गति क्यों है? (`चित्र 4.23 व क्रियाकलाप 4.5`):** आयताकार पथ पर धावक 1 चक्कर में **4 बार**, षट्भुज पर **6 बार** और अनंत भुजाओं वाले वृत्त पर **हर सूक्ष्म बिंदु पर दिशा बदलता है**! टेप के छल्ले के भीतर घूमते कंचे से अचानक छल्ला उठा लेने पर (`क्रियाकलाप 4.5`) कंचा गोल न घूमकर **सीधी स्पर्शरेखा (Tangent)** पर निकल जाता है। चूँकि **चाल (Speed) अचर** रहते हुए भी **वेग की दिशा हर क्षण बदल रही है**, अतः यह एक **त्वरित गति** है जिसमें त्वरण **त्रिज्या के अनुदिश केंद्र की ओर (Inward)** लगता है!',
          },
          diagramKey: 'circular-motion-tangent',
          realImage: {
            url: '/ncert-notes/class9-phy-ch4/real/circular-ferris-wheel.webp',
            title: {
              en: 'Real Circular Motion (Giant Wheel / Ferris Wheel Rotating at Constant Speed)',
              hi: 'एकसमान वृत्तीय गति का उदाहरण: निश्चित चाल से घूमता विशाल चक्रीय झूला (लगातार बदलती वेग की दिशा)',
            },
            caption: {
              en: 'Each cabin travels at constant speed 2πR/T while changing tangent direction continuously around the axle centre.',
              hi: 'झूले का प्रत्येक डिब्बा अचर चाल $2\\pi R/T$ से चलता है, किंतु प्रत्येक बिंदु पर उसके वेग की दिशा केंद्र से लंबवत स्पर्शरेखा पर बदलती है।',
            },
          },
          viralTrick: {
            en: '**Circular Motion 4-Second Sweep:**\n• **Constant:** Speed (`चाल`), Kinetic Energy, Radius $R$.\n• **Changing:** Velocity (`वेग` — due to direction!), Momentum direction.\n• **Acceleration Direction:** Along Radius **Inward (`केंद्र की ओर`)** | Release Trajectory: **Tangent (`स्पर्शरेखा`)**!',
            hi: '**वृत्तीय गति का अचूक सार:** **चाल (`Speed`) = अचर** | **वेग (`Velocity` की दिशा) = निरंतर परिवर्ती** | **त्वरण = त्रिज्या के अनुदिश केंद्र की ओर** | **छूटने का पथ = स्पर्शरेखा (Tangent)**!',
          },
          inlinePyqIds: [6, 10, 18, 23],
        },
      ],
    },
  ],

  confusionBreakers: [
    {
      pair: { en: 'Distance (`दूरी`) vs Displacement (`विस्थापन`)', hi: 'दूरी (Distance) बनाम विस्थापन (Displacement)' },
      trap: { en: 'Assuming Distance and Displacement are always equal or Distance can be 0 after a walk.', hi: 'चक्कर लगाकर लौटने पर दूरी को शून्य मानना या दोनों को सदैव बराबर मान लेना।' },
      truth: { en: 'Distance ≥ |Displacement| ALWAYS! After returning home (round-trip), Displacement = 0 while Distance = full path length.', hi: 'दूरी सदैव ≥ |विस्थापन|! घर लौट आने पर विस्थापन = 0, परंतु कुल दूरी (और ईंधन खपत) पूरे पथ के बराबर होती है।' },
    },
    {
      pair: { en: 'Odometer vs Speedometer (`चालमापी`)', hi: 'ओडोमीटर बनाम चालमापी (Speedometer)' },
      trap: { en: 'Thinking Speedometer measures total distance or Average Speed over the trip.', hi: 'चालमापी को कुल दूरी या पूरी यात्रा की औसत चाल नापने वाला यंत्र समझना।' },
      truth: { en: '**Odometer** records cumulative **Distance**; **Speedometer** displays **Instantaneous Speed** right now!', hi: '**ओडोमीटर** कुल **दूरी** नापता है; **चालमापी (Speedometer)** उस क्षण की **तात्क्षणिक चाल** दिखाता है।' },
    },
    {
      pair: { en: 'Zero Velocity vs Zero Acceleration at High Speed', hi: 'शून्य त्वरण बनाम शून्य वेग' },
      trap: { en: 'Thinking a train rushing at 160 km/h MUST have large acceleration.', hi: 'तेज चाल से चलती ट्रेन में त्वरण हमेशा अधिक होने की भूल करना।' },
      truth: { en: 'Acceleration depends on **CHANGE** in velocity! Straight constant velocity at ANY high speed has **$a = 0$** (`NCERT Note p.55`).', hi: 'त्वरण वेग के **परिमाण पर नहीं, परिवर्तन पर** निर्भर करता है! तेज नियत वेग से सीधी चलती बस का त्वरण **शून्य ($a=0$)** होता है।' },
    },
    {
      pair: { en: 'Horizontal x-t Line vs Horizontal v-t Line', hi: 'x-t ग्राफ क्षैतिज रेखा vs v-t ग्राफ क्षैतिज रेखा' },
      trap: { en: 'Saying flat horizontal v-t line means "Object is stationary".', hi: 'v-t ग्राफ पर समय अक्ष के समांतर रेखा को "वस्तु स्थिर है" मान लेना।' },
      truth: { en: 'Flat **$x\\text{--}t$** line = **Object at Rest ($v=0$)**; Flat **$v\\text{--}t$** line above zero = **Constant Velocity ($a=0$)** moving steadily!', hi: '**$x\\text{--}t$ क्षैतिज रेखा** = **विरामावस्था ($v=0$)**; लेकिन **$v\\text{--}t$ क्षैतिज रेखा** = **एकसमान नियत वेग ($a=0$, वस्तु गतिशील है)**!' },
    },
    {
      pair: { en: 'Stopping Distance Proportionality ($s \\propto u^2$)', hi: 'ब्रेक लगाने पर रुकने की दूरी ($s \\propto u^2$)' },
      trap: { en: 'Assuming doubling car speed doubles the braking stopping distance.', hi: 'कार की चाल दोगुनी होने पर ब्रेक दूरी भी केवल दोगुनी मान लेना।' },
      truth: { en: 'From $v^2 = u^2 + 2as$, $s = u^2 / (2|a|)$ -> **Doubling speed quadruples (`4×`) stopping distance** (`NCERT Ex 4.8: 28.1 m -> 112.5 m`)!', hi: '$s = u^2 / (2|a|)$ के कारण चाल **दोगुनी ($2u$)** करने पर रुकने की दूरी **4 गुना ($28.1\\text{ m} \\to 112.5\\text{ m}$)** हो जाती है!' },
    },
    {
      pair: { en: 'Uniform Circular Motion: Constant Speed vs Velocity', hi: 'एकसमान वृत्तीय गति: अचर चाल बनाम परिवर्ती वेग' },
      trap: { en: 'Marking "Acceleration is ZERO" because speedometer reads constant 40 km/h on a circular ring road.', hi: 'वृत्त पर अचर चाल 40 km/h देखकर त्वरण को "शून्य" टिक कर देना (-0.33 गलत!)।' },
      truth: { en: 'Constant Speed + continuously turning Tangent Direction = **Changing Velocity = Accelerated Motion (`Centripetal inward`)**!', hi: 'अचर चाल के बावजूद दिशा हर क्षण बदलने से **वेग बदलता है → यह त्वरित गति है** और त्वरण **केंद्र की ओर** होता है!' },
    },
  ],

  pioneers: [
    {
      name: { en: 'Aryabhata (5th Century CE — Aryabhatiya)', hi: 'आर्यभट (5वीं शताब्दी ई. — आर्यभटीय)' },
      country: { en: 'Ancient Indian Mathematics & Astronomy', hi: 'प्राचीन भारतीय विज्ञान एवं गणित' },
      badge: { en: 'Speed = Distance / Time', hi: 'चाल = दूरी ÷ समय अवधारणा' },
      fact: {
        en: 'Recognized by NCERT Class 9 (p.52): *Aryabhatiya* systematically linked traversed arc/distance and elapsed time long before modern European kinematics.',
        hi: 'NCERT पृष्ठ 52 के अनुसार 5वीं शताब्दी के भारतीय ग्रंथ *आर्यभटीय* में किसी वस्तु की चाल ज्ञात करने हेतु चलित दूरी को समय से भाग देने का सिद्धांत सुस्थापित था।',
      },
    },
    {
      name: { en: 'Narayana Pandita (1356 CE — Ganita Kaumudi)', hi: 'नारायण पंडित (1356 ई. — गणित कौमुदी)' },
      country: { en: '14th Century Indian Treatise • Ex 4.1', hi: '14वीं शताब्दी भारतीय गणित • उदाहरण 4.1' },
      badge: { en: 'Relative Encounter Problem', hi: '210 योजन सापेक्ष गति प्रश्न' },
      fact: {
        en: 'Source of NCERT Worked Example 4.1: two couriers separated by `210 yojanas` traveling at `9` & `5 yojanas/day` meet after `210 / (9+5) = 15 days`!',
        hi: 'NCERT उदाहरण 4.1 का मूल स्रोत: एक-दूसरे से 210 योजन दूर स्थित दो पत्रवाहक 9 व 5 योजन/दिन से चलकर `210 ÷ 14 = 15 दिन` में मिलते हैं।',
      },
    },
    {
      name: { en: 'Galileo Galilei (1564–1642)', hi: 'गैलीलियो गैलीली (1564–1642)' },
      country: { en: 'Founder of Experimental Kinematics', hi: 'प्रायोगिक गतिकी के जनक' },
      badge: { en: 'Odd-Number Law & Free Fall', hi: 'मुक्त पतन व नियत त्वरण g' },
      fact: {
        en: 'Using inclined planes and timing balls, Galileo proved falling bodies gain velocity uniformly every second ($s \\propto t^2$) independent of mass!',
        hi: 'आनत तल व मुक्त पतन प्रयोगों से सिद्ध किया कि पृथ्वी के गुरुत्व से गिरती सभी वस्तुएँ समान नियत त्वरण ($g$) प्राप्त करती हैं और दूरी $t^2$ के अनुपात में बढ़ती है।',
      },
    },
  ],

  visualGallery: [
    {
      id: 'vis-vande-bharat',
      figRef: { en: 'Section 4.1 (Rectilinear Motion)', hi: 'चित्र 4.1 (सरल रेखीय गति)' },
      title: { en: 'Straight Track Railway Motion (Uniform vs Non-Uniform)', hi: 'सीधी रेल पटरी पर एकदिशीय गति — दूरी और विस्थापन समान' },
      imageUrl: '/ncert-notes/class9-phy-ch4/real/vande-bharat-rectilinear.webp',
      hotspots: [
        { en: 'Along an unreversed straight track, Total Distance = |Displacement| & Speed = Velocity.', hi: 'एक दिशा सीधी पटरी पर चलित दूरी = विस्थापन का परिमाण तथा चाल = वेग।' },
      ],
    },
    {
      id: 'vis-strobe-fall',
      figRef: { en: 'Example 4.4 (Constant Gravity Acceleration g = 9.8 m/s²)', hi: 'चित्र 4.10 व उदाहरण 4.4 (गुरुत्वीय मुक्त पतन)' },
      title: { en: 'Stroboscopic Free-Fall Sequence (s ∝ t²)', hi: 'नियत त्वरण (g) में गिरती गेंद के क्रमशः बढ़ते अंतराल (1, 4, 9, 16...)' },
      imageUrl: '/ncert-notes/class9-phy-ch4/real/falling-ball-strobe.webp',
      hotspots: [
        { en: 'Velocity jumps +9.8 m/s every second (`9.8, 19.6, 29.4, 39.2`), stretching equal-time intervals quadratically (`1:4:9:16`).', hi: 'प्रत्येक सेकंड वेग +9.8 m/s बढ़ता है, अतः समान समयांतरालों में विस्थापन $s = \\frac{1}{2}gt^2$ अनुसार तेजी से बढ़ता है।' },
      ],
    },
    {
      id: 'vis-ferris-ucm',
      figRef: { en: 'Section 4.4.1 (Uniform Circular Motion)', hi: 'चित्र 4.22–4.25 (एकसमान वृत्तीय गति)' },
      title: { en: 'Ferris Wheel Constant-Speed Orbit with Turning Velocity', hi: 'वृत्ताकार झूला — अचर चाल, लगातार बदलती वेग दिशा व स्पर्शरेखीय पथ' },
      imageUrl: '/ncert-notes/class9-phy-ch4/real/circular-ferris-wheel.webp',
      hotspots: [
        { en: 'Speed = `2πR/T` stays steady, while Tangent Velocity turns endlessly -> radial inward acceleration!', hi: 'चाल = `2πR/T` स्थिर रहती है, पर स्पर्शरेखा पर वेग की दिशा हर बिंदु पर बदलती रहती है!' },
      ],
    },
  ],

  activities: [
    {
      num: '4.1',
      title: { en: 'Vertical Ball Toss Analysis (Distance vs Displacement — Table 4.1, Fig 4.5)', hi: 'ऊपर फेंकी गेंद की दूरी व विस्थापन तालिका 4.1 (चित्र 4.5)' },
      materials: { en: 'Small rubber ball + vertical metric wall scale marked O (0), A (40 cm), C (100 cm), B (140 cm)', hi: 'रबड़ की गेंद एवं दीवार पर 0–140 cm ऊँचाई चिह्न (O, A, C, B)' },
      steps: {
        en: 'Toss the ball vertically from `O` up to peak `B (140 cm)` and catch it back down through `C` to `O`. Log Distance & Displacement at each step in Table 4.1.',
        hi: 'गेंद को मूल बिंदु `O (0 cm)` से ऊर्ध्वाधर ऊपर शीर्ष `B (140 cm)` तक उछालकर बिंदु `C (100 cm)` से होते हुए पुनः `O` पर लौटते समय की दूरी व विस्थापन तालिका 4.1 में भरें।',
      },
      examTakeaway: { en: 'Displacement can equal zero on return (`d=280 cm, s=0`), can equal distance on ascent, and **NEVER exceeds total distance (`|s| ≤ d`)**.', hi: 'विस्थापन का परिमाण कुल चलित दूरी से **या तो कम या बराबर** होता है — कभी बड़ा नहीं हो सकता!' },
      predictQuestion: {
        prompt: { en: 'On descending back to C (100 cm) after peaking at B (140 cm), what are Total Distance & Displacement from O?', hi: 'गेंद के O से 140 cm ऊपर B तक जाकर नीचे 100 cm बिंदु C पर लौटने तक कुल दूरी व विस्थापन कितना है?' },
        options: {
          en: ['Distance 100 cm, Displacement 100 cm', 'Distance 180 cm, Displacement 100 cm', 'Distance 140 cm, Displacement 40 cm'],
          hi: ['दूरी 100 cm, विस्थापन 100 cm', 'दूरी 180 cm, विस्थापन 100 cm', 'दूरी 140 cm, विस्थापन 40 cm'],
        },
        correctIndex: 1,
        reason: { en: 'Total path = 140 (up) + 40 (down B->C) = **180 cm**, while net displacement from O to C is **+100 cm upward**!', hi: 'कुल पथ = 140 + 40 = **180 cm**, पर आरंभ O से C की सीधी ऊँचाई केवल **100 cm** है!' },
      },
    },
    {
      num: '4.2',
      title: { en: 'Calculating Car Average Acceleration From 0 to 100 km/h Sprint Time (Table 4.2)', hi: '0 से 100 km/h पहुँचने के समय से कारों के माध्य त्वरण की गणना (तालिका 4.2)' },
      materials: { en: 'Published 0–100 km/h sprint times for different cars + unit conversion chart', hi: 'विभिन्न कारों के 0 से 100 km/h समय आँकड़े एवं मात्रक परिवर्तन' },
      steps: {
        en: '1. Convert final speed $v = 100\\text{ km h}^{-1} \\times \\frac{5}{18} \\approx 27.78\\text{ m s}^{-1}$ (from $u=0$).\n2. Compute average acceleration $a = 27.78 / t$ in $\\text{m s}^{-2}$.',
        hi: '1. $100\\text{ km/h}$ को $\\times \\frac{5}{18}$ से $27.78\\text{ m/s}$ में बदलें ($u = 0$)।\n2. प्रत्येक कार का माध्य त्वरण $a = \\frac{27.78 - 0}{t}\\text{ m s}^{-2}$ परिकलित करें।',
      },
      examTakeaway: { en: 'Shorter 0–100 km/h time means steeper velocity gain -> larger acceleration $a$.', hi: 'जितना कम समय ($t$), उतना ही अधिक माध्य त्वरण ($a \\propto 1/t$) होगा!' },
      predictQuestion: {
        prompt: { en: 'If a sports sedan jumps from 0 to 72 km/h in 5 seconds smoothly, what is its average acceleration?', hi: 'यदि कोई कार विराम (0) से 5 सेकंड में 72 km/h वेग प्राप्त करे, तो माध्य त्वरण कितना होगा?' },
        options: { en: ['14.4 m/s²', '4 m/s²', '2 m/s²'], hi: ['14.4 m/s²', '4 m/s²', '2 m/s²'] },
        correctIndex: 1,
        reason: { en: '$72\\text{ km/h} \\times 5/18 = 20\\text{ m/s}$. Acceleration $a = (20 - 0) / 5 = \\mathbf{4\\text{ m s}^{-2}}$.', hi: '$72\\text{ km/h} = 20\\text{ m/s}$, अतः $a = 20 / 5 = \\mathbf{4\\text{ m s}^{-2}}$।' },
      },
    },
    {
      num: '4.3',
      title: { en: 'Plotting Linear Position-Time Graph (Table 4.3, Fig 4.11)', hi: 'तालिका 4.3 से सरल रेखीय स्थिति-समय ग्राफ का आलेखन (चित्र 4.11)' },
      materials: { en: 'Millimetre graph paper, sharp pencil, scale (`X: 5 div = 1 s`, `Y: 5 div = 20 m`)', hi: 'ग्राफ पेपर (X-अक्ष: समय, Y-अक्ष: स्थिति), पेंसिल व पैमाना' },
      steps: {
        en: 'Plot points `(0,0), (1,20), (2,40), (3,60), (4,80), (5,100), (6,120)` along perpendicular OX/OY axes and join points.',
        hi: 'लंबवत OX (समय s) व OY (स्थिति m) अक्ष खींचकर बिंदुओं `(0,0), (1,20)... (6,120)` को अंकित कर मिलाएँ।',
      },
      examTakeaway: { en: 'Equal rises (`+20 m` every `1 s`) plot a **straight upward line** proving **Uniform Velocity ($20\\text{ m s}^{-1}$)**; midpoint readings match exact truth.', hi: 'समान वृद्धि (`+20 m / s`) से एक **सीधी सरल रेखा** प्राप्त होती है, जो **एकसमान वेग (`20 m/s`)** दर्शाती है।' },
      predictQuestion: {
        prompt: { en: 'What shape is produced when plotting Table 4.4 (x = 0, 1, 4, 9, 16, 25, 36 m at t = 0, 2, 4, 6, 8, 10, 12 s)?', hi: 'तालिका 4.4 (0s→0m, 2s→1m, 4s→4m, 6s→9m, 12s→36m) आलेखित करने पर कैसी आकृति बनेगी?' },
        options: {
          en: ['Horizontal flat line', 'Straight slanted line', 'Upward curving parabola (increasing slope)'],
          hi: ['क्षैतिज समतल रेखा', 'सीधी तिरछी सरल रेखा', 'ऊपर की ओर मुड़ता वक्र (बढ़ती ढलान)'],
        },
        correctIndex: 2,
        reason: { en: 'Distances increase rapidly with time (`+1, +3, +5, +7...`), producing an upward accelerating **curve**!', hi: 'समय के साथ स्थिति परिवर्तन तेजी से बढ़ रहा है, अतः **बढ़ती ढलान वाला वक्र** बनता है।' },
      },
    },
    {
      num: '4.4',
      title: { en: 'Finding Velocity From Slope BC/CA of x-t Graph (Fig 4.14)', hi: 'स्थिति-समय ग्राफ की ढलान BC/CA से वेग का परिकलन (चित्र 4.14)' },
      materials: { en: 'Plotted x-t straight graph `AB` spanning `t1 = 2 s (40 m)` to `t2 = 4 s (80 m)`', hi: 'चित्र 4.14 का आलेखित स्थिति-समय ग्राफ, त्रिभुज ABC' },
      steps: {
        en: 'Draw horizontal AC (`Δt = 4 - 2 = 2 s`) and vertical BC (`Δs = 80 - 40 = 40 m`) right triangle -> Compute **Slope $= BC/CA$**.',
        hi: 'दो बिंदुओं A व B के बीच क्षैतिज AC (`4-2 = 2 s`) व लंबवत BC (`80-40 = 40 m`) त्रिभुज बनाकर **प्रवणता = BC / CA** ज्ञात करें।',
      },
      examTakeaway: { en: 'Inclination / **Slope** of a Position-Time graph equals **Velocity** ($40 / 2 = 20\\text{ m s}^{-1}$)!', hi: 'स्थिति-समय ग्राफ की **प्रवणता (Slope)** सदैव वस्तु का **वेग** ($40/2 = 20\\text{ m s}^{-1}$) प्रदान करती है।' },
      predictQuestion: {
        prompt: { en: 'On a Position-Time graph, Object P makes a 30° line while Object Q makes a steeper 60° line. Who moves faster?', hi: 'एक ही स्थिति-समय ग्राफ पर वस्तु P की रेखा 30° झुकी है और Q की 60° खड़ी है। किसका वेग अधिक है?' },
        options: { en: ['Object P', 'Object Q (Steeper slope)', 'Both have identical velocity'], hi: ['वस्तु P', 'वस्तु Q (अधिक ढलान)', 'दोनों का वेग समान'] },
        correctIndex: 1,
        reason: { en: 'Steeper $x\\text{--}t$ line has larger vertical displacement per unit time -> faster velocity (`Example 4.7`)!', hi: 'अधिक खड़ी ढलान का अर्थ है उतने ही समय में अधिक विस्थापन — अतः **Q का वेग अधिक** है!' },
      },
    },
    {
      num: '4.5',
      title: { en: 'Marble Inside Adhesive-Tape Ring -> Instant Straight Tangent Release (Fig 4.24)', hi: 'टेप के छल्ले में कंचे की वृत्तीय गति एवं उठाते ही स्पर्शरेखीय पथ (चित्र 4.24)' },
      materials: { en: 'Empty circular tape core ring + glass marble + smooth tabletop', hi: 'आसंजक टेप का खाली गोल छल्ला, एक कंचा व चिकनी मेज' },
      steps: {
        en: 'Roll the marble swiftly along the inner wall of the flat ring; after 1–2 loops, lift the ring cleanly upward without nudging the marble.',
        hi: 'चिकनी मेज पर छल्ले के भीतर कंचे को गोल घुमाएँ और 1–2 चक्कर के बाद बिना कंचे को छुए छल्ले को ऊपर उठा लें।',
      },
      examTakeaway: { en: 'Immediately upon release, inward wall push vanishes and the marble travels **straight along the Tangent** (`स्पर्शरेखा`) at that exact release instant!', hi: 'छल्ला उठाते ही कंचा वृत्त न बनाकर उसी क्षण की **स्पर्शरेखा (Tangent) के अनुदिश सीधी सरल रेखा** में जाता है।' },
      predictQuestion: {
        prompt: { en: 'Why does wet mud splash off a spinning bicycle tyre straight along the rim tangent instead of spiralling?', hi: 'साइकिल के घूमते पहिये से कीचड़ के कण किस दिशा में और क्यों उछलते हैं?' },
        options: {
          en: ['Towards wheel centre (inward)', 'Straight along the rim Tangent at separation point', 'Backwards opposite spin only at top'],
          hi: ['पहिये के केंद्र की ओर', 'अलग होने के बिंदु से सीधी स्पर्शरेखा (Tangent) के अनुदिश', 'ऊपर की ओर ऊर्ध्वाधर'],
        },
        correctIndex: 1,
        reason: { en: 'Every particle in circular motion possesses instantaneous velocity strictly along the circular **Tangent**!', hi: 'वृत्तीय गति के प्रत्येक बिंदु पर वेग की दिशा **स्पर्शरेखीय** होती है (क्रियाकलाप 4.5)।' },
      },
    },
  ],

  tables: [
    {
      id: 'table-4-1-ball-toss',
      title: { en: 'Table 4.1 — Vertical Ball Distance vs Displacement (NCERT Page 51, Peak B = 140 cm)', hi: 'तालिका 4.1 — ऊपर फेंकी गेंद (O → B = 140 cm → वापस O) दूरी व विस्थापन मान' },
      headers: {
        en: ['Step', 'Position Marker', 'Total Distance from O', 'Displacement from O'],
        hi: ['क्रम', 'स्थिति बिंदु', 'कुल चलित दूरी', 'मूल बिंदु O से विस्थापन'],
      },
      rows: [
        [{ en: '1', hi: '1' }, { en: 'O (Start, `0 cm`)', hi: 'O (प्रस्थान, `0 cm`)' }, { en: '0 cm', hi: '0 cm' }, { en: '0 cm', hi: '0 cm' }],
        [{ en: '2', hi: '2' }, { en: 'A (`40 cm` going up)', hi: 'A (`40 cm` ऊपर जाते)' }, { en: '40 cm', hi: '40 cm' }, { en: '+40 cm (Upward)', hi: '40 cm (ऊपर की ओर)' }],
        [{ en: '3', hi: '3' }, { en: 'B (`140 cm` Peak)', hi: 'B (`140 cm` उच्चतम बिंदु)' }, { en: '140 cm', hi: '140 cm' }, { en: '+140 cm (Upward)', hi: '140 cm (ऊपर की ओर)' }],
        [{ en: '4', hi: '4' }, { en: 'C (`100 cm` falling back)', hi: 'C (`100 cm` लौटते समय)' }, { en: '140 + 40 = 180 cm', hi: '180 cm (140 + 40)' }, { en: '+100 cm (Upward)', hi: '100 cm (ऊपर की ओर)' }],
        [{ en: '5', hi: '5' }, { en: 'Back at O (`0 cm`)', hi: 'पुनः O (`0 cm` हाथ में वापस)' }, { en: '140 + 140 = 280 cm', hi: '280 cm (140 + 140)' }, { en: '0 cm (`Round trip!`)', hi: '0 cm (`विस्थापन शून्य!`)' }],
      ],
    },
    {
      id: 'table-4-scalar-vector-contrast',
      title: { en: 'Distance vs Displacement & Speed vs Velocity — Zero-Error Contrast', hi: 'दूरी बनाम विस्थापन तथा चाल बनाम वेग — परीक्षा अंतर सारणी' },
      headers: {
        en: ['Feature', 'Distance / Speed (Scalar)', 'Displacement / Velocity (Vector)'],
        hi: ['तुलना आधार', 'दूरी / चाल (अदिश)', 'विस्थापन / वेग (सदिश)'],
      },
      rows: [
        [{ en: 'Definition', hi: 'परिभाषा' }, { en: 'Actual path traversed / Rate per time', hi: 'तय कुल पथ / दूरी÷समय' }, { en: 'Shortest directed shift (`Δx`) / Disp÷time' }],
        [{ en: 'Direction Needed?', hi: 'दिशा आवश्यकता' }, { en: 'No (Magnitude + Unit only)', hi: 'नहीं (केवल परिमाण व मात्रक)' }, { en: 'YES (Magnitude + Exact Direction)' }],
        [{ en: 'Can it be 0 / Negative?', hi: 'शून्य / ऋणात्मक मान' }, { en: 'NEVER negative; >0 once moving', hi: 'गति पर शून्य नहीं, कभी ऋणात्मक नहीं' }, { en: 'YES! Zero (round trip) or Negative' }],
        [{ en: 'SI Unit & Instrument', hi: 'SI मात्रक व मापन यंत्र' }, { en: '`m` & `m/s` (`Odometer`, `Speedometer`)', hi: '`m` व `m/s` (`ओडोमीटर`, `चालमापी`)' }, { en: '`m` & `m/s` (Slope of $x\\text{--}t$ graph)' }],
      ],
    },
    {
      id: 'table-4-3-4-car-positions',
      title: { en: 'NCERT Tables 4.3 & 4.4 — Uniform Linear Motion vs Quadratic Accelerated Motion', hi: 'तालिका 4.3 एवं 4.4 — अचर चाल कार (उदा. 4.3) बनाम त्वरित कार (उदा. 4.5)' },
      headers: {
        en: ['Time (Table 4.3)', 'Position (Uniform v = 20 m/s)', 'Time (Table 4.4)', 'Position (Accelerating Curve)'],
        hi: ['समय (तालिका 4.3)', 'स्थिति (नियत 20 m/s — सरल रेखा)', 'समय (तालिका 4.4)', 'स्थिति (बढ़ती चाल — वक्र)'],
      },
      rows: [
        [{ en: '0 s', hi: '0 s' }, { en: '0 m', hi: '0 m' }, { en: '0 s', hi: '0 s' }, { en: '0 m', hi: '0 m' }],
        [{ en: '1 s', hi: '1 s' }, { en: '20 m', hi: '20 m' }, { en: '2 s', hi: '2 s' }, { en: '1 m', hi: '1 m' }],
        [{ en: '2 s', hi: '2 s' }, { en: '40 m', hi: '40 m' }, { en: '4 s', hi: '4 s' }, { en: '4 m', hi: '4 m' }],
        [{ en: '3 s', hi: '3 s' }, { en: '60 m', hi: '60 m' }, { en: '6 s', hi: '6 s' }, { en: '9 m', hi: '9 m' }],
        [{ en: '4 s', hi: '4 s' }, { en: '80 m', hi: '80 m' }, { en: '8 s', hi: '8 s' }, { en: '16 m', hi: '16 m' }],
        [{ en: '5 s / 6 s', hi: '5 s / 6 s' }, { en: '100 m / 120 m', hi: '100 m / 120 m' }, { en: '10 s / 12 s', hi: '10 s / 12 s' }, { en: '25 m / 36 m (`Quadratic!`)', hi: '25 m / 36 m (`अचर त्वरण वक्र!`)' }],
      ],
    },
    {
      id: 'table-4-5-6-velocity-time',
      title: { en: 'NCERT Tables 4.5 & 4.6 — Uniformly Increasing vs Decreasing Velocity Datasets', hi: 'तालिका 4.5 एवं 4.6 — बढ़ता हुआ वेग (+0.5 m/s²) बनाम घटता वेग (−0.5 m/s² मंदन)' },
      headers: {
        en: ['Time (s)', 'Car 2 Velocity (Table 4.5, a = +0.5 m/s²)', 'Car 3 Velocity (Table 4.6, a = −0.5 m/s²)'],
        hi: ['समय (s)', 'कार 2 वेग (तालिका 4.5: +0.5 m/s²)', 'कार 3 वेग (तालिका 4.6: −0.5 m/s²)'],
      },
      rows: [
        [{ en: '0 s', hi: '0 s' }, { en: '0 m/s', hi: '0 m/s' }, { en: '15.0 m/s', hi: '15.0 m/s' }],
        [{ en: '5 s', hi: '5 s' }, { en: '2.5 m/s', hi: '2.5 m/s' }, { en: '12.5 m/s', hi: '12.5 m/s' }],
        [{ en: '10 s', hi: '10 s' }, { en: '5.0 m/s', hi: '5.0 m/s' }, { en: '10.0 m/s', hi: '10.0 m/s' }],
        [{ en: '15 s', hi: '15 s' }, { en: '7.5 m/s', hi: '7.5 m/s' }, { en: '7.5 m/s', hi: '7.5 m/s' }],
        [{ en: '20 s', hi: '20 s' }, { en: '10.0 m/s', hi: '10.0 m/s' }, { en: '5.0 m/s', hi: '5.0 m/s' }],
        [{ en: '25 s / 30 s', hi: '25 s / 30 s' }, { en: '12.5 / 15.0 m/s', hi: '12.5 / 15.0 m/s' }, { en: '2.5 / 0 m/s (`Stops @ 30 s!`)', hi: '2.5 / 0 m/s (`30s पर विराम!`)' }],
      ],
    },
    {
      id: 'table-4-graph-interpretation',
      title: { en: 'High-Yield Graph Summary (Every Possible RRB Graph Question)', hi: 'सभी ग्राफ प्रश्नों की संक्षिप्त सारणी (x-t बनाम v-t ढलान व क्षेत्रफल)' },
      headers: {
        en: ['Graph Line Shape', 'On Position-Time (x-t)', 'On Velocity-Time (v-t)'],
        hi: ['ग्राफ आकृति', 'स्थिति-समय (x-t) ग्राफ का अर्थ', 'वेग-समय (v-t) ग्राफ का अर्थ'],
      },
      rows: [
        [{ en: 'Horizontal line `// t-axis`', hi: 'समय-अक्ष के समांतर रेखा' }, { en: 'At Rest ($v=0$, Slope = 0)', hi: 'वस्तु विरामावस्था में ($v = 0$)' }, { en: 'Constant Velocity ($a=0$, Slope = 0)' }],
        [{ en: 'Upward straight slanted line', hi: 'ऊपर उठती सीधी सरल रेखा' }, { en: 'Uniform Constant Velocity (+)', hi: 'नियत धनात्मक त्वरण ($a > 0$)' }],
        [{ en: 'Downward straight slanted line', hi: 'नीचे गिरती सीधी सरल रेखा' }, { en: 'Returning steadily towards origin', hi: 'नियत मंदन / ऋणात्मक त्वरण ($a < 0$)' }],
        [{ en: 'Steepening upward curve', hi: 'ऊपर मुड़ता बढ़ती ढलान वक्र' }, { en: 'Accelerating (Speed rising!)', hi: 'असमान बढ़ता त्वरण' }],
        [{ en: 'Flattening curve (Slope decreasing)', hi: 'सपाट होता घटती ढलान वक्र' }, { en: 'Decelerating / Slowing down', hi: 'असमान घटता वेग / मंदन' }],
        [{ en: 'Slope & Shaded Area', hi: 'ढलान एवं क्षेत्रफल' }, { en: 'Slope = Velocity; Area = Not physical', hi: 'ढलान = त्वरण $a$; **क्षेत्रफल = विस्थापन $s$**' }],
      ],
    },
    {
      id: 'table-4-unit-shortcuts',
      title: { en: 'Instant Railway Unit Conversions & Free-Fall Quick Values', hi: 'रेलवे परीक्षा में सेकंडों में बदलने वाले km/h ↔ m/s एवं g मान' },
      headers: {
        en: ['Speed (km/h)', 'Exact m/s (`× 5/18`)', 'Braking Dist (@ −4 m/s²)', 'Free Fall Speed from Rest ($g=10$)'],
        hi: ['चाल (km/h)', 'सटीक मान (`m/s`)', 'ब्रेक दूरी ($a = -4$)', 'मुक्त पतन वेग ($t$ सेकंड पर)'],
      },
      rows: [
        [{ en: '18 km/h', hi: '18 km/h' }, { en: '5 m/s', hi: '5 m/s' }, { en: '3.125 m', hi: '3.125 m' }, { en: 't = 1 s → 10 m/s (`g=9.8→9.8`)', hi: 't = 1 s → 10 m/s' }],
        [{ en: '36 km/h', hi: '36 km/h' }, { en: '10 m/s', hi: '10 m/s' }, { en: '12.5 m', hi: '12.5 m' }, { en: 't = 2 s → 20 m/s (`avg=10 m/s`)', hi: 't = 2 s → 20 m/s (`माध्य=10`)' }],
        [{ en: '54 km/h', hi: '54 km/h' }, { en: '15 m/s', hi: '15 m/s' }, { en: '28.1 m (`Ex 4.8`)', hi: '28.1 m (`उदा. 4.8`)' }, { en: 't = 3 s → 30 m/s (`h=45 m`)', hi: 't = 3 s → 30 m/s (`h=45 m`)' }],
        [{ en: '72 km/h', hi: '72 km/h' }, { en: '20 m/s', hi: '20 m/s' }, { en: '50.0 m', hi: '50.0 m' }, { en: 't = 4 s → 40 m/s (`h=80 m`)', hi: 't = 4 s → 40 m/s (`h=80 m`)' }],
        [{ en: '108 km/h', hi: '108 km/h' }, { en: '30 m/s', hi: '30 m/s' }, { en: '112.5 m (`4 × 28.1!`)', hi: '112.5 m (`4 × 28.1!`)' }, { en: 'Upward throw: $a = -g$', hi: 'ऊपर फेंकने पर: $a = -g$' }],
      ],
    },
    {
      id: 'table-4-1d-2d-3d',
      title: { en: '1D vs 2D vs 3D Motion & Uniform Circular vs Uniform Linear Motion', hi: '1D / 2D / 3D गति एवं एकसमान रेखीय बनाम वृत्तीय गति अंतर' },
      headers: {
        en: ['Category', 'Dimensions / Path', 'Acceleration Status', 'Real NCERT Examples'],
        hi: ['गति श्रेणी', 'विमा व पथ', 'त्वरण स्थिति', 'NCERT उदाहरण'],
      },
      rows: [
        [{ en: 'Uniform Rectilinear (1D)', hi: 'एकसमान सरल रेखीय (1D)' }, { en: '1D straight line, one-way', hi: '1D सीधी रेखा' }, { en: 'ZERO acceleration ($a = 0$)', hi: 'शून्य त्वरण ($a = 0$)' }, { en: 'Steady train on straight track', hi: 'सीधी पटरी पर स्थिर चाल ट्रेन' }],
        [{ en: 'Uniform Accel (1D)', hi: 'नियत त्वरित सरल रेखीय (1D)' }, { en: '1D vertical/straight', hi: '1D सीधी रेखा' }, { en: 'Constant $a \\ne 0$', hi: 'नियत अशून्य त्वरण' }, { en: 'Freely falling ball ($g=9.8$), car braking', hi: 'मुक्त पतन, ब्रेक लगती कार' }],
        [{ en: 'Motion in a Plane (2D)', hi: 'समतल में गति (2D)' }, { en: '2D plane curves & orbits', hi: 'द्विविमीय समतल पथ' }, { en: 'Accelerated (Centripetal or g)', hi: 'त्वरित (वेग दिशा परिवर्तन)' }, { en: 'Overtaking car, kicked ball, circular satellite', hi: 'ओवरटेक कार, उछली गेंद, उपग्रह' }],
        [{ en: 'Motion in Space (3D)', hi: 'अंतरिक्ष/आकाश में गति (3D)' }, { en: '3D x-y-z space curves', hi: 'त्रिविमीय आकाश पथ' }, { en: 'Continuously varying velocity', hi: 'सतत परिवर्ती वेग व दिशा' }, { en: 'Mountain spiral road car, soaring birds, planes', hi: 'पहाड़ी मोड़ कार, पक्षी व वायुयान' }],
      ],
    },
  ],

  inTextQuestions: [
    {
      num: 'Think Q1',
      q: {
        en: 'Think Q1 (p.51): When will a runner bouncing back and forth between two track ends have ZERO displacement? What is distance travelled then?',
        hi: 'सोचिए प्रश्न 1 (पृ. 51): सीधे पथ के दोनों सिरों के बीच इधर-उधर दौड़ते धावक का विस्थापन शून्य कब होगा और तब तय दूरी कितनी होगी?',
      },
      a: {
        en: 'Displacement hits **zero** the moment the runner **returns back to the starting end**! If length between ends is $L$, one full out-and-back trip covers Total Distance **$2L$**.',
        hi: 'जब धावक प्रारंभिक सिरे पर **वापस लौट आए**, तब विस्थापन **शून्य (`0`)** होगा। यदि दोनों सिरों के बीच लंबाई $L$ है, तो जाकर लौटने में कुल चलित दूरी **$2L$** होगी।',
      },
    },
    {
      num: 'Think Q2',
      q: {
        en: 'Think Q2 (p.51): Does vehicle fuel consumption depend on Total Distance travelled or Displacement?',
        hi: 'सोचिए प्रश्न 2 (पृ. 51): किसी वाहन में प्रयुक्त ईंधन का परिमाण कुल चलित दूरी पर निर्भर करता है या विस्थापन पर? तर्क दें।',
      },
      a: {
        en: 'Strictly **Total Distance Travelled**! Even a taxi making a round trip ending back home with `0` displacement consumes fuel proportional to every kilometre driven by the engine.',
        hi: '**कुल चलित दूरी** पर! यदि आप शहर का चक्कर लगाकर वापस घर लौट आएँ (विस्थापन = 0), तब भी इंजन पूरे मार्ग के बराबर ही ईंधन खर्च करता है।',
      },
    },
    {
      num: 'Think Q3',
      q: {
        en: 'Think Q3 (p.51): A ball rolls down segmented bent tracks O->A->B->C->D (`Fig 4.6`). Is it rectilinear? Are distance and displacement equal?',
        hi: 'सोचिए प्रश्न 3 (पृ. 51): आनत खंडित पथ O→A→B→C→D (चित्र 4.6) पर लुढ़कती गेंद की गति क्या सरल रेखीय है? क्या दूरी व विस्थापन बराबर हैं?',
      },
      a: {
        en: 'Each straight segment individually (`OA`, `AB`, etc.) is rectilinear, NOT the combined zig-zag path! Along a bent path changing direction, **Total Distance > Displacement** at `B, C, D` (only equal along the single initial segment `OA`).',
        hi: 'अलग-अलग खंडों में गति रेखीय है पर संपूर्ण पथ में **नहीं** क्योंकि दिशा बार-बार बदलती है। केवल खंड `OA` पर दूरी व विस्थापन समान हैं; `B, C, D` पर **कुल दूरी > विस्थापन** है।',
      },
    },
    {
      num: 'Think Q4',
      q: {
        en: 'Think Q4 (p.53): You drive 200 km North in 3 hours, then 200 km South in 2 hours. Find overall Average Speed and Average Velocity.',
        hi: 'सोचिए प्रश्न 4 (पृ. 53): आप 3 घंटे में 200 km उत्तर और अगले 2 घंटे में 200 km दक्षिण जाते हैं। पूरी यात्रा की माध्य चाल व माध्य वेग ज्ञात करें।',
      },
      a: {
        en: 'Total Distance $= 200 + 200 = 400\\text{ km}$, Total Time $= 5\\text{ h} \\implies$ **Average Speed $= 400/5 = 80\\text{ km h}^{-1}$**. Total Displacement $= 200\\text{ N} - 200\\text{ S} = 0\\text{ km} \\implies$ **Average Velocity $= 0\\text{ km h}^{-1}$**!',
        hi: 'कुल दूरी $= 400\\text{ km}$, कुल समय $= 5\\text{ h} \\implies$ **माध्य चाल $= 80\\text{ km h}^{-1}$**। वापस लौटने पर विस्थापन $= 0 \\implies$ **माध्य वेग $= 0\\text{ km h}^{-1}$**!',
      },
    },
    {
      num: 'Think Q5',
      q: {
        en: 'Think Q5 (p.53): Under what condition does (i) Magnitude of Average Velocity = Average Speed, and (ii) Average Velocity = 0 while Average Speed ≠ 0?',
        hi: 'सोचिए प्रश्न 5 (पृ. 53): किस दशा में (i) माध्य वेग का परिमाण = माध्य चाल होगा, तथा (ii) माध्य वेग = 0 पर माध्य चाल ≠ 0 होगी?',
      },
      a: {
        en: '**(i)** Moving in a **straight line in ONE fixed direction** without turning back ($\\text{Distance} = |\\text{Displacement}|$). **(ii)** Completing a **closed loop or returning to start point** so Displacement $= 0$ while Distance $> 0$.',
        hi: '**(i)** जब वस्तु **बिना मुड़े एक ही दिशा में सरल रेखा** पर चले (दूरी = |विस्थापन|)। **(ii)** जब वस्तु चक्कर लगाकर **पुनः आरंभिक स्थान पर लौट आए** (विस्थापन = 0, दूरी > 0)।',
      },
    },
  ],

  exercises: [
    {
      num: 1,
      q: { en: 'Ex Q1: Father walks straight 250 m to shop, forgets cloth bag, returns home, fetches bag back 250 m to shop, buys groceries & returns home. Distance & Displacement?', hi: 'अभ्यास 1: पिताजी घर से 250 m दूर दुकान जाकर थैला भूल आए, घर लौटकर थैला लेकर पुनः दुकान गए और सामान लेकर घर लौटे। कुल दूरी व विस्थापन बताएं।' },
      a: { en: '4 one-way trips ($O \\to S \\to O \\to S \\to O$): Total Distance $= 4 \\times 250 = \\mathbf{1000\\text{ m (1 km)}}$. Returned home -> **Displacement = `0 m`**!', hi: 'चार चक्कर ($250 \\times 4$): **कुल दूरी $= 1000\\text{ m}$ (`1 km`)**; अंतिम स्थिति घर ही है अतः **विस्थापन $= 0\\text{ m}$**!' },
    },
    {
      num: 2,
      q: { en: 'Ex Q2: Student runs from Ground floor up to 4th floor, then descends to 2nd-floor classroom (`floor height = 3 m`). Vertical distance & displacement?', hi: 'अभ्यास 2: विद्यार्थी भूतल से चतुर्थ तल (4th floor) तक जाकर द्वितीय तल की कक्षा में लौटता है (प्रत्येक तल 3 m ऊँचा)। ऊर्ध्वाधर दूरी व विस्थापन ज्ञात करें।' },
      a: { en: 'Ascent (`0 -> 4th` = $4 \\times 3 = 12\\text{ m}$) + Descent (`4th -> 2nd` = $2 \\times 3 = 6\\text{ m}$): **Total Distance $= 18\\text{ m}$**; **Net Displacement = $2 \\times 3 = 6\\text{ m}$ upward**!', hi: 'ऊपर जाना ($4 \\times 3 = 12\\text{ m}$) + नीचे आना ($2 \\times 3 = 6\\text{ m}$) $\\implies$ **कुल दूरी $= 18\\text{ m}$**, और भूतल से द्वितीय तल तक **विस्थापन $= 6\\text{ m}$ ऊपर**!' },
    },
    {
      num: 3,
      q: { en: 'Ex Q3: Girl rides scooter watching steady Speedometer reading. Can her scooter still be accelerating? Explain.', hi: 'अभ्यास 3: लड़की के स्कूटर के गतिमापी (Speedometer) का पाठ्यांक स्थिर है। क्या उसका स्कूटर त्वरित हो सकता है?' },
      a: { en: '**YES!** Speed is steady, yet if she **turns a curve or moves along a circular path**, her velocity **direction** keeps changing continuously—so acceleration is non-zero!', hi: '**हाँ!** अचर चाल होने पर भी यदि स्कूटर **वृत्ताकार मोड़ पर मुड़े या दिशा बदले**, तो वेग की दिशा बदलने के कारण वह **त्वरित (Accelerated)** होगा!' },
    },
    {
      num: 4,
      q: { en: 'Ex Q4: Car starts from rest (`u = 0`) reaching `v = 24 m/s` in `6 s`. Find acceleration and distance covered.', hi: 'अभ्यास 4: कार विराम से चलकर 6 s में 24 m/s वेग पाती है। त्वरण व चलित दूरी ज्ञात करें।' },
      a: { en: '$a = \\frac{24 - 0}{6} = \\mathbf{4\\text{ m s}^{-2}}$; $s = 0 + \\frac{1}{2} \\times 4 \\times 6^2 = \\mathbf{72\\text{ m}}$!', hi: '$a = \\frac{24 - 0}{6} = \\mathbf{4\\text{ m s}^{-2}}$ तथा $s = \\frac{1}{2} a t^2 = \\frac{1}{2} \\times 4 \\times 36 = \\mathbf{72\\text{ m}}$!' },
    },
    {
      num: 5,
      q: { en: 'Ex Q5: Motorcycle cruising at `u = 28 m/s` brakes with constant deceleration and halts after `98 m`. Find acceleration & stopping time.', hi: 'अभ्यास 5: `28 m/s` वेग से चलती मोटरसाइकिल `98 m` चलकर रुक जाती है। नियत त्वरण व रुकने का समय ज्ञात करें।' },
      a: { en: '$v^2 = u^2 + 2as \\implies 0 = 28^2 + 2a(98) \\implies a = -784/196 = \\mathbf{-4\\text{ m s}^{-2}}$; $t = (0 - 28)/(-4) = \\mathbf{7\\text{ s}}$.', hi: '$0 = 28^2 + 2a(98) \\implies a = \\mathbf{-4\\text{ m s}^{-2}}$ (मंदन); समय $t = \\frac{0-28}{-4} = \\mathbf{7\\text{ s}}$।' },
    },
    {
      num: 6,
      q: { en: 'Ex Q6: Two objects A & B on parallel tracks have straight `x-t` lines intersecting (`Fig 4.27`). Will their velocities EVER be equal?', hi: 'अभ्यास 6: समांतर पथ पर चलती वस्तुओं A व B के स्थिति-समय सरल रेखीय ग्राफ प्रतिच्छेद करते हैं (`चित्र 4.27`)। क्या उनके वेग कभी बराबर होंगे?' },
      a: { en: '**NO!** Straight `x-t` lines have constant slopes (= constant velocities). Since lines cross with **different slopes**, A & B NEVER have equal velocity (crossing merely shows same position at one moment)!', hi: '**नहीं!** दोनों की ग्राफ रेखाएँ सीधी किंतु अलग-अलग ढलान की हैं (वेग कभी समान नहीं; कटान बिंदु केवल एक क्षण पर दोनों की **समान स्थिति** दिखाता है, समान वेग नहीं)!' },
    },
    {
      num: 7,
      q: { en: 'Ex Q7: Curved A vs Straight B sharing same start `(0,0)` and meeting again at `t = 10 s` (`Fig 4.28`). Identify true option(s).', hi: 'अभ्यास 7: `0–10 s` में A वक्र व B सरल रेखा समान आरंभ व अंतिम स्थिति साझा करते हैं (`चित्र 4.28`)। सही विकल्प बताएं।' },
      a: { en: 'Statement **(i) is true**: over `0–10 s`, initial and final positions are identical so **Average Velocity of A = Average Velocity of B** (since movement is strictly positive without reversing, **(ii)** Average Speed matches too!).', hi: 'कथन **(i)** व **(ii)** सत्य हैं क्योंकि `0–10 s` अंतराल में दोनों की आरंभिक व अंतिम स्थितियाँ समान हैं — अतः **माध्य वेग व एकदिशीय माध्य चाल दोनों बराबर** हैं।' },
    },
    {
      num: 8,
      q: { en: 'Ex Q8: Truck decelerates uniformly from `54 km/h` down to `36 km/h` (`40 km/h` speed limit sign) in `36 s`. Calculate distance covered.', hi: 'अभ्यास 8: `54 km/h` चाल वाला ट्रक `36 s` में समान त्वरण से चाल घटाकर `36 km/h` कर लेता है। इस समय में चलित दूरी ज्ञात करें।' },
      a: { en: '$u = 54 \\times 5/18 = 15\\text{ m/s}$, $v = 36 \\times 5/18 = 10\\text{ m/s}$, $t = 36\\text{ s} \\implies s = \\frac{u+v}{2}t = \\frac{15+10}{2} \\times 36 = \\mathbf{450\\text{ m}}$.', hi: '$u = 15\\text{ m/s}$, $v = 10\\text{ m/s}$ $\\implies s = \\frac{15+10}{2} \\times 36 = 12.5 \\times 36 = \\mathbf{450\\text{ m}}$।' },
    },
    {
      num: 9,
      q: { en: 'Ex Q9: Car starts from rest accelerating to `20 m/s` in `5 s`, cruises at `20 m/s` for `10 s`, then brakes to rest in `6 s`. Total distance?', hi: 'अभ्यास 9: कार विराम से 5 s में `20 m/s` प्राप्त कर, 10 s तक नियत वेग से चलती है व ब्रेक लगाकर 6 s में रुक जाती है। कुल दूरी बताएं।' },
      a: { en: '$s_1 = \\frac{0+20}{2}(5) = 50\\text{ m}$; $s_2 = 20 \\times 10 = 200\\text{ m}$; $s_3 = \\frac{20+0}{2}(6) = 60\\text{ m} \\implies \\text{Total} = 50 + 200 + 60 = \\mathbf{310\\text{ m}}$!', hi: '$s_1 = 50\\text{ m}$ + $s_2 = 200\\text{ m}$ + $s_3 = 60\\text{ m} \\implies$ कुल दूरी $= \\mathbf{310\\text{ m}}$!' },
    },
    {
      num: 10,
      q: { en: 'Ex Q10: Bus runs at `36 km/h` noticing obstacle `30 m` ahead; reaction lag = `0.5 s`, then braking deceleration = `-2.5 m/s²`. Will bus stop safely?', hi: 'अभ्यास 10: `36 km/h` से चलती बस `30 m` आगे अवरोध देखती है; प्रतिक्रिया समय `0.5 s` व ब्रेक त्वरण `-2.5 m/s²` है। क्या बस टकराने से पहले रुकेगी?' },
      a: { en: '$u = 10\\text{ m/s}$. Reaction travel $= 10 \\times 0.5 = 5\\text{ m}$. Braking distance $= \\frac{u^2}{2|a|} = \\frac{100}{5} = 20\\text{ m}$. Total stopping $= 5 + 20 = \\mathbf{25\\text{ m} < 30\\text{ m}}$ -> **YES, stops safely 5 m short!**', hi: '$u = 10\\text{ m/s}$। प्रतिक्रिया दूरी $= 10 \\times 0.5 = 5\\text{ m}$ + ब्रेक दूरी $= \\frac{100}{2 \\times 2.5} = 20\\text{ m} \\implies$ कुल **25 m < 30 m** → **हाँ, अवरोध से 5 m पहले रुक जाएगी!**' },
    },
    {
      num: 11,
      q: { en: 'Ex Q11: "Earth orbits the Sun." Can an object sitting on Earth still be called "at rest"? Explain.', hi: 'अभ्यास 11: "पृथ्वी सूर्य के चारों ओर घूमती है।" क्या पृथ्वी पर रखी वस्तु को विरामावस्था में माना जा सकता है?' },
      a: { en: '**YES!** Rest and Motion depend strictly on your **Reference Frame**. Relative to Earth’s floor (our local reference), the object does not shift position—so it IS at rest on Earth even while orbiting the Sun!', hi: '**हाँ!** विराम व गति **संदर्भ बिंदु** के सापेक्ष होते हैं — पृथ्वी पर स्थित संदर्भ के सापेक्ष वस्तु की स्थिति न बदलने से वह पृथ्वी पर विरामावस्था में ही है!' },
    },
    {
      num: 12,
      q: { en: 'Ex Q12: Cyclist `v-t` graph `0–120 s` (`Fig 4.30`): How do you shade displacement during constant speed & deceleration, and find net displacement & average acceleration?', hi: 'अभ्यास 12: साइकिल चालक के `0–120 s` ग्राफ (चित्र 4.30) में नियत वेग व घटते वेग का विस्थापन क्षेत्र कैसे छायांकित व परिकलित करेंगे?' },
      a: { en: 'Shade flat horizontal segment area (rectangle = $v \\cdot \\Delta t$) for constant velocity, downward sloping segment triangle/trapezoid for deceleration! Sum all area segments under `v-t` curve for total Displacement, and compute $a_{av} = (v_{120} - v_0)/120$.', hi: 'नियत वेग भाग के नीचे आयत क्षेत्रफल तथा मंदन (गिरती ढलान) भाग के नीचे त्रिभुज क्षेत्रफल अलग रंगों से छायांकित करें; सभी क्षेत्रफलों का योग = **कुल विस्थापन** तथा **$a_{av} = (v_{120}-v_0)/120$** होगा!' },
    },
    {
      num: 13,
      q: { en: 'Ex Q13: Runner smartwatch `v-t` graph (`Fig 4.31`): Estimate distance run from the area under the plot.', hi: 'अभ्यास 13: स्मार्टवॉच से प्राप्त धाविका के `v-t` ग्राफ (चित्र 4.31) से दौड़ी गई कुल दूरी का आकलन कैसे करें?' },
      a: { en: 'Match time & velocity units first (`if v in km/h or km/s check axis`), then split shaded region between the `v-t` curve and time axis into rectangles & triangles: **Distance = Total Shaded Area**!', hi: 'अक्षों की इकाइयों का मिलान कर `v-t` रेखा व समय-अक्ष के बीच बने आयतों व त्रिभुजों का कुल क्षेत्रफल ज्ञात करें — यही **तय की गई कुल दूरी** देगा।' },
    },
    {
      num: 14,
      q: { en: 'Ex Q14: Highway car cruises `6 m/s` for `2 minutes`, then accelerates at `1 m/s²` for `6 s`. Find total displacement in `2 min 6 s`.', hi: 'अभ्यास 14: राजमार्ग पर कार 2 मिनट तक `6 m/s` से चलती है और फिर 6 s तक `1 m/s²` से त्वरित होती है। कुल विस्थापन ज्ञात करें।' },
      a: { en: 'Phase 1 (`120 s` steady): $s_1 = 6 \\times 120 = 720\\text{ m}$. Phase 2 (`6 s` accel): $s_2 = 6(6) + \\frac{1}{2}(1)(6^2) = 36 + 18 = 54\\text{ m}$. **Total $= 720 + 54 = \\mathbf{774\\text{ m}}$**!', hi: 'पहला चरण (120 s): $6 \\times 120 = 720\\text{ m}$; दूसरा चरण (6 s): $6(6) + \\frac{1}{2}(1)(36) = 54\\text{ m}$ $\\implies$ कुल विस्थापन $= \\mathbf{774\\text{ m}}$!' },
    },
    {
      num: 15,
      q: { en: 'Ex Q15: Cars A & B start from rest: A hits `5 m/s` in `5 s`; B hits `3 m/s` in `10 s`. Compare their accelerations & displacements.', hi: 'अभ्यास 15: विराम से कार A 5 s में `5 m/s` तथा कार B 10 s में `3 m/s` पाती है। दोनों का ग्राफ व विस्थापन ज्ञात करें।' },
      a: { en: '$a_A = 5/5 = \\mathbf{1\\text{ m s}^{-2}}$, displacement $s_A = \\frac{1}{2}(5)(5) = \\mathbf{12.5\\text{ m}}$. For B: $a_B = 3/10 = \\mathbf{0.3\\text{ m s}^{-2}}$, displacement $s_B = \\frac{1}{2}(10)(3) = \\mathbf{15\\text{ m}}$ *(B travels farther over 10 s despite smaller $a$)!*', hi: 'कार A: $a = 1\\text{ m/s}^2$, विस्थापन $s_A = \\frac{1}{2} \\times 5 \\times 5 = \\mathbf{12.5\\text{ m}}$। कार B: $a = 0.3\\text{ m/s}^2$, विस्थापन $s_B = \\frac{1}{2} \\times 10 \\times 3 = \\mathbf{15\\text{ m}}$।' },
    },
    {
      num: 16,
      q: { en: 'Ex Q16: Rohan studies `6:00 pm to 7:30 pm`; wall-clock minute hand length `R = 7 cm`. Find tip Distance, Displacement, Speed & Velocity.', hi: 'अभ्यास 16: रोहन शाम 6:00 से 7:30 बजे तक पढ़ता है; घड़ी की मिनट सुई `7 cm` लंबी है। सुई के सिरे की दूरी, विस्थापन, चाल व वेग निकालें।' },
      a: { en: 'Elapsed $T = 1.5\\text{ h} = 5400\\text{ s}$ (`1.5 full loops`). **(i) Distance** $= 1.5 \\times 2 \\times \\frac{22}{7} \\times 7 = \\mathbf{66\\text{ cm}}$; **(ii) Displacement** (12 -> 6 mark) = Diameter $= 2R = \\mathbf{14\\text{ cm}}$ down; **(iii) Speed** $= 66/5400 \\approx \\mathbf{0.0122\\text{ cm/s}}$ (`44 cm/h`); **(iv) Velocity** $= 14/5400 \\approx \\mathbf{0.00259\\text{ cm/s}}$ down (`9.33 cm/h`)!', hi: 'समय = `1.5 घंटे (5400 s)` (1.5 चक्कर): **(i) दूरी** $= 1.5 \\times 2\\pi R = 1.5 \\times 2 \\times \\frac{22}{7} \\times 7 = \\mathbf{66\\text{ cm}}$; **(ii) विस्थापन** (12 से 6 तक व्यास) $= \\mathbf{14\\text{ cm}}$ नीचे; **(iii) चाल** $= 66/5400 \\approx \\mathbf{0.0122\\text{ cm/s}}$; **(iv) वेग** $= 14/5400 \\approx \\mathbf{0.0026\\text{ cm/s}}$ नीचे!' },
    },
  ],

  flashcards: [
    { front: { en: 'When is Total Distance = |Displacement|?', hi: 'कुल दूरी व |विस्थापन| कब बराबर होते हैं?' }, back: { en: 'ONLY in straight-line motion in ONE direction without turning back.', hi: 'केवल एकदिशीय सरल रेखीय गति (बिना पीछे लौटे) में!' } },
    { front: { en: 'Convert 54 km/h and 108 km/h to m/s?', hi: '54 km/h व 108 km/h को m/s में बदलें?' }, back: { en: 'Multiply by 5/18 -> 15 m/s and 30 m/s!', hi: '× 5/18 करने पर क्रमशः 15 m/s तथा 30 m/s!' } },
    { front: { en: 'Slope of x-t graph = ?', hi: 'स्थिति-समय (x-t) ग्राफ की ढलान क्या बताती है?' }, back: { en: 'Velocity (Horizontal x-t = Object at Rest!)', hi: 'वेग (क्षैतिज x-t = विरामावस्था)!' } },
    { front: { en: 'Slope & Area under v-t graph?', hi: 'वेग-समय (v-t) की ढलान व क्षेत्रफल क्या देते हैं?' }, back: { en: 'Slope = Acceleration (a) | Area under curve = Displacement (s)!', hi: 'ढलान = त्वरण (a) | समय अक्ष से घिरा क्षेत्रफल = विस्थापन (s)!' } },
    { front: { en: 'Odometer vs Speedometer function?', hi: 'ओडोमीटर बनाम चालमापी (Speedometer)?' }, back: { en: 'Odometer = Cumulative Distance; Speedometer = Instantaneous Speed.', hi: 'ओडोमीटर = कुल दूरी; चालमापी = तात्क्षणिक (तत्काल) चाल।' } },
    { front: { en: 'Uniform acceleration with high constant speed (`300 km/h`)?', hi: '300 km/h नियत वेग से सीधी चलती ट्रेन का त्वरण?' }, back: { en: 'ZERO (a = 0)! Constant velocity means zero velocity change.', hi: 'शून्य (0)! वेग में कोई परिवर्तन नहीं हो रहा।' } },
    { front: { en: 'Doubling car speed multiplies stopping distance by?', hi: 'कार की चाल दोगुनी करने पर रुकने की दूरी कितनी बढ़ेगी?' }, back: { en: '4 Times (s ∝ u²: Ex 4.8 goes 28.1 m -> 112.5 m)', hi: '4 गुना (s ∝ u²: 28.1 m → 112.5 m)!' } },
    { front: { en: 'Acceleration direction in Uniform Circular Motion?', hi: 'एकसमान वृत्तीय गति में त्वरण की दिशा?' }, back: { en: 'Radial inward towards circle centre (velocity is Tangent!)', hi: 'त्रिज्या के अनुदिश केंद्र की ओर (वेग की दिशा स्पर्शरेखीय!)' } },
    { front: { en: 'Freely falling body from rest for 2 s (g = 10 m/s²): avg speed?', hi: 'विराम से 2 s मुक्त गिरती गेंद (g=10) की औसत चाल?' }, back: { en: 'v = 20 m/s -> Average Speed = (0+20)/2 = 10 m/s!', hi: 'v = 20 m/s → औसत चाल = (0+20)/2 = 10 m/s!' } },
    { front: { en: '1 round on circle R in time T: avg speed & avg velocity?', hi: 'त्रिज्या R का 1 चक्कर T समय में: चाल व वेग?' }, back: { en: 'Avg Speed = 2πR / T | Avg Velocity = 0 (disp = 0!)', hi: 'माध्य चाल = 2πR/T | माध्य वेग = 0 (विस्थापन = 0)!' } },
  ],

  pyqBank: [
    {
      id: 1,
      examTag: 'RRB ALP 2025 CBT-2 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: "A car travels on a highway, and its odometer records a reading of 180 km at 8:00 am and 240 km at 9:30 am. Based on this information, which statement best describes the car's average speed during this interval?",
        hi: 'एक कार राजमार्ग पर चल रही है और उसका ओडोमीटर 8:00 am पर 180 km और 9:30 am पर 240 km रीडिंग रिकॉर्ड करता है। इस जानकारी के आधार पर, कौन-सा कथन इस अंतराल के दौरान कार की औसत चाल का सबसे सटीक वर्णन करता है?',
      },
      options: {
        en: [
          "The car's average speed is 240 km per hour since that was the odometer reading at 9:30 am.",
          "The car's average speed is 60 km per hour based only on the change in odometer readings.",
          "The car's average speed is 40 km per hour as calculated from the odometer readings and time interval.",
          "The car's average speed is 180 km per hour since that was the odometer reading at 8:00 am.",
        ],
        hi: [
          'कार की औसत चाल 240 km प्रति घंटा है क्योंकि 9:30 am पर ओडोमीटर पर यही रीडिंग थी।',
          'कार की औसत चाल 60 km प्रति घंटा है, यह केवल ओडोमीटर रीडिंग में हुए परिवर्तन पर आधारित है।',
          'कार की औसत चाल 40 km प्रति घंटा है, जिसकी गणना ओडोमीटर रीडिंग और समय अंतराल के आधार पर की जाती है।',
          'कार की औसत चाल 180 km प्रति घंटा है क्योंकि 8:00 am पर ओडोमीटर पर यही रीडिंग थी।',
        ],
      },
      correctIndex: 2,
      solution: { en: 'Distance = 240 − 180 = 60 km; Time interval = 1.5 hours (8:00 to 9:30 am) -> Avg speed = 60 / 1.5 = 40 km/h.', hi: 'कुल दूरी = 240 − 180 = 60 km; समय = 1.5 घंटा → औसत चाल = 60 / 1.5 = 40 km/h।' },
    },
    {
      id: 2,
      examTag: 'RRB ALP 2025 CBT-2 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'A car travels 60 km north in 2 hours, then 40 km south in the next 1 hour. What is the car’s average velocity over the entire trip?',
        hi: 'एक कार 2 घंटे में 60 km उत्तर की ओर और फिर अगले 1 घंटे में 40 km दक्षिण की ओर यात्रा करती है। पूरी यात्रा के दौरान कार का औसत वेग कितना है?',
      },
      options: {
        en: ['20 km/h south', '6.7 km/h north', '33.3 km/h north', '0 km/h'],
        hi: ['20 km/h दक्षिण', '6.7 km/h उत्तर', '33.3 km/h उत्तर', '0 km/h'],
      },
      correctIndex: 1,
      solution: { en: 'Net displacement = 60 N − 40 S = 20 km north; Total time = 2 + 1 = 3 h -> Average velocity = 20 / 3 = 6.7 km/h north.', hi: 'नेट विस्थापन = 60 उत्तर − 40 दक्षिण = 20 km उत्तर; कुल समय = 3 घंटे → औसत वेग = 20 / 3 = 6.7 km/h उत्तर।' },
    },
    {
      id: 3,
      examTag: 'RRB ALP 2025 CBT-2 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'A car travels from point A to point B in a zigzag path, covering a total distance of 200 meters. If the shortest straight-line distance between A and B is 120 meters, which statement best describes the car’s distance and displacement?',
        hi: 'एक कार बिंदु A से बिंदु B तक टेढ़े-मेढ़े पथ पर चलती है, और कुल 200 मीटर की दूरी तय करती है। यदि A और B के बीच न्यूनतम ऋजु-रेखीय दूरी 120 मीटर है, तो कौन-सा कथन कार की दूरी और विस्थापन का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: ['The distance is 120 meters; the displacement is 200 meters', 'The distance is 200 meters; the displacement is 200 meters', 'The distance is 200 meters; the displacement is 120 meters', 'The distance is 120 meters; the displacement is 120 meters'],
        hi: ['दूरी 120 मीटर है; विस्थापन 200 मीटर है', 'दूरी 200 मीटर है; विस्थापन 200 मीटर है', 'दूरी 200 मीटर है; विस्थापन 120 मीटर है', 'दूरी 120 मीटर है; विस्थापन 120 मीटर है'],
      },
      correctIndex: 2,
      solution: { en: 'Actual curved path length = 200 m (Distance); shortest directed straight span A->B = 120 m (Displacement).', hi: 'वास्तविक टेढ़ा पथ = 200 m (दूरी) तथा A से B की सीधी न्यूनतम दूरी = 120 m (विस्थापन)।' },
    },
    {
      id: 4,
      examTag: 'RRB ALP 2025 CBT-2 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Which of the following best describes the function of a speedometer in a vehicle?',
        hi: 'निम्नलिखित में से कौन-सा विकल्प, वाहन में चालमापी के कार्य का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: ['It displays the current speed at which the vehicle is moving.', 'It measures the total distance the vehicle has traveled.', 'It shows the rate at which the vehicle’s speed changes.', 'It calculates the average speed over a journey.'],
        hi: ['यह उस वर्तमान चाल को प्रदर्शित करता है जिस पर वाहन गतिमान है', 'यह वाहन द्वारा तय की गई कुल दूरी को मापता है', 'यह वाहन की चाल में परिवर्तन की दर को दर्शाता है', 'यह यात्रा के लिए औसत चाल की गणना करता है'],
      },
      correctIndex: 0,
      solution: { en: 'Speedometer displays current instantaneous speed (NCERT p.53 Box); Odometer measures cumulative distance.', hi: 'चालमापी (Speedometer) तात्क्षणिक वर्तमान चाल प्रदर्शित करता है; ओडोमीटर कुल दूरी नापता है।' },
    },
    {
      id: 5,
      examTag: 'RRB ALP 2025 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'A ball is dropped from a height and falls freely for 2 seconds. Its average speed during this time is: (Consider: acceleration due to gravity = 10 m/s²)',
        hi: 'किसी गेंद को किसी ऊँचाई से गिराया जाता है और वह 2 सेकंड तक मुक्त रूप से गिरती है। इस काल के दौरान उसकी औसत चाल कितनी होगी? (मान लीजिए: गुरुत्वीय त्वरण = 10 m/s²)',
      },
      options: { en: ['15 m/s', '20 m/s', '10 m/s', '5 m/s'], hi: ['15 m/s', '20 m/s', '10 m/s', '5 m/s'] },
      correctIndex: 2,
      solution: { en: 'u = 0, a = g = 10 m/s², t = 2 s -> v = u + gt = 20 m/s -> Average speed = (0 + 20) / 2 = 10 m/s.', hi: 'u = 0, v = gt = 20 m/s → औसत चाल = (0 + 20)/2 = 10 m/s।' },
    },
    {
      id: 6,
      examTag: 'RRB ALP 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'In uniform circular motion, the acceleration is:',
        hi: 'एकसमान वृत्तीय गति में, त्वरण _____ होता है।',
      },
      options: {
        en: ['Zero', 'Tangential to the path', 'Along the radius outward', 'Along the radius inward'],
        hi: ['शून्य', 'पथ के स्पर्शरेखीय', 'त्रिज्या के अनुदिश बाहर की ओर', 'त्रिज्या के अनुदिश अंदर की ओर'],
      },
      correctIndex: 3,
      solution: { en: 'Velocity points along tangent; centripetal acceleration pulls perpendicular inward along radius toward centre.', hi: 'वेग स्पर्शरेखीय होता है जबकि अभिकेंद्रीय त्वरण त्रिज्या के अनुदिश अंदर केंद्र की ओर लगता है।' },
    },
    {
      id: 7,
      examTag: 'RRB ALP 2025 Shift 4',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'The displacement of an object between two instants can be determined from a velocity–time graph by calculating the:',
        hi: 'दो क्षणों के बीच किसी वस्तु का विस्थापन, वेग–समय ग्राफ से _________ की गणना करके निर्धारित किया जा सकता है।',
      },
      options: {
        en: ['area enclosed between the graph and the time axis.', 'slope of the graph.', 'intercept on the velocity axis.', 'length of the graph.'],
        hi: ['ग्राफ और समय अक्ष के बीच परिबद्ध क्षेत्रफल', 'ग्राफ की प्रवणता', 'वेग अक्ष पर अंतःखंड', 'ग्राफ की लंबाई'],
      },
      correctIndex: 0,
      solution: { en: 'NCERT Section 4.2.3 (Fig 4.18): Area enclosed between the v-t line and time axis gives exact displacement.', hi: 'वेग-समय ग्राफ की रेखा और समय-अक्ष के बीच परिबद्ध क्षेत्रफल विस्थापन देता है।' },
    },
    {
      id: 8,
      examTag: 'RRB ALP 2025 Shift 5',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'A car accelerates from rest at a constant rate. After 5 seconds, its velocity is 20 m/s. Using the graphical representation of motion, which equation would you use to find the distance covered in those 5 seconds, and what is the result?',
        hi: 'एक कार विरामावस्था से नियत दर से त्वरित होना शुरू करती है। 5 सेकंड के बाद, उसका वेग 20 m/s हो जाता है। गति के चित्रात्मक निरूपण का उपयोग करके, उन 5 सेकंड में तय की गई दूरी ज्ञात करने के लिए किस समीकरण का उपयोग किया जाएगा, और प्राप्त परिणाम कितना होगा?',
      },
      options: {
        en: ['Use s = ut + 1/2 at², so distance = 50 m', 'Use p = mv, so distance = 25 m', 'Use v = u + at, so distance = 20 m', 'Use F = ma, so distance = 100 m'],
        hi: ['s = ut + 1/2 at² सूत्र का उपयोग करेंगे, इसलिए दूरी = 50 m होगी', 'p = mv सूत्र का उपयोग करेंगे, इसलिए दूरी = 25 m होगी', 'v = u + at सूत्र का उपयोग करेंगे, इसलिए दूरी = 20 m होगी', 'F = ma सूत्र का उपयोग करेंगे, इसलिए दूरी = 100 m होगी'],
      },
      correctIndex: 0,
      solution: { en: 'a = (20-0)/5 = 4 m/s² -> s = 0 + 0.5 × 4 × 25 = 50 m (equals triangle area 0.5 × 5 × 20).', hi: 'त्वरण a = 20/5 = 4 m/s² → s = ut + ½at² से s = 0 + ½ × 4 × 25 = 50 m प्राप्त होता है।' },
    },
    {
      id: 9,
      examTag: 'RRB Group D 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Which statement best describes a straight line sloping upwards on a distance-time graph for an object moving with uniform speed?',
        hi: 'निम्नलिखित में से कौन-सा कथन, एकसमान चाल से गतिमान किसी वस्तु के लिए दूरी-समय ग्राफ पर ऊपर की ओर ढलान वाली एक सरल रेखा का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: ['The object is stationary at all times', 'The object covers equal distances in equal intervals of time', 'The object moves with varying speed throughout', 'The object returns to its starting point repeatedly'],
        hi: ['वस्तु सभी समयों पर स्थिर रहती है', 'वस्तु समान समयांतरालों में समान दूरियां तय करती है', 'वस्तु पूरी अवधि में परिवर्ती चाल से गति करती है', 'वस्तु बार-बार अपने प्रारंभिक बिंदु पर लौटती है'],
      },
      correctIndex: 1,
      solution: { en: 'A straight upward-sloping line indicates constant slope -> uniform speed covering equal distances in equal intervals.', hi: 'सीधी ऊपर जाती सरल रेखा एकसमान ढलान अर्थात समान समय में समान दूरी तय होना दर्शाती है।' },
    },
    {
      id: 10,
      examTag: 'RRB Group D 2025 Shift 12',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Which quantity changes continuously for an object in uniform circular motion?',
        hi: 'एकसमान वृत्तीय गति में किसी वस्तु के लिए कौन-सी राशि निरंतर बदलती रहती है?',
      },
      options: {
        en: ['The direction of velocity changes', 'The kinetic energy changes', 'The mass changes', 'The speed changes'],
        hi: ['वेग की दिशा बदलती है', 'गतिज ऊर्जा बदलती है', 'द्रव्यमान बदलता है', 'चाल बदलती है'],
      },
      correctIndex: 0,
      solution: { en: 'Speed, mass and kinetic energy stay constant; direction of tangent velocity shifts at every instant.', hi: 'चाल, द्रव्यमान व गतिज ऊर्जा स्थिर रहते हैं; केवल वेग की दिशा लगातार बदलती है।' },
    },
    {
      id: 11,
      examTag: 'RRB Group D 2025 Shift 17',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'A Distance-Time graph shows a curve that starts steep and gradually becomes flatter (slope decreasing). This motion represents __________.',
        hi: 'दूरी-समय ग्राफ़ एक ऐसा वक्र दिखाता है जो शुरू में तो अतिप्रवण (steep) होता है, लेकिन धीरे-धीरे सपाट (प्रवणता कम होती है) होता जाता है। यह गति __________ को दर्शाती है।',
      },
      options: {
        en: ['Positive acceleration', 'Constant, negative velocity', 'Deceleration', 'Zero acceleration'],
        hi: ['धनात्मक त्वरण (Positive acceleration)', 'स्थिर, ऋणात्मक वेग', 'मंदन (Deceleration)', 'शून्य त्वरण'],
      },
      correctIndex: 2,
      solution: { en: 'Slope of d-t graph equals speed; flattening slope means speed is dropping over time -> Deceleration!', hi: 'd-t ग्राफ की ढलान चाल है; ढलान घटते-घटते सपाट होना चाल में कमी अर्थात मंदन (Deceleration) दर्शाता है!' },
    },
    {
      id: 12,
      examTag: 'RRB Group D 2025 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'From a distance-time graph, how can the uniform speed of an object be calculated?',
        hi: 'दूरी-समय के ग्राफ से किसी वस्तु की एकसमान चाल की गणना कैसे की जा सकती है?',
      },
      options: {
        en: ['By measuring the slope of the graph', 'By measuring the area under the graph', 'By measuring the total time only', 'By measuring the total distance only'],
        hi: ['ग्राफ की ढलान मापकर', 'ग्राफ के अंतर्गत क्षेत्रफल मापकर', 'केवल कुल समय मापकर', 'केवल कुल दूरी मापकर'],
      },
      correctIndex: 0,
      solution: { en: 'Distance-time slope BC/CA = (s₂ - s₁) / (t₂ - t₁) directly calculates uniform speed (Activity 4.4).', hi: 'दूरी-समय ग्राफ की ढलान मापकर एकसमान चाल ज्ञात की जाती है।' },
    },
    {
      id: 13,
      examTag: 'RRB Group D 2025 Shift 27',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Which feature of a velocity-time graph for uniform acceleration determines the value of acceleration?',
        hi: 'एकसमान त्वरण के लिए वेग-समय ग्राफ की कौन-सी विशेषता त्वरण का मान निर्धारित करती है?',
      },
      options: {
        en: ['The slope of the velocity-time graph', 'The area under the velocity-time graph', 'The maximum value on the velocity axis', 'The intercept on the velocity axis'],
        hi: ['वेग-समय आरेख की प्रवणता', 'वेग-समय आरेख द्वारा परिबद्ध क्षेत्रफल', 'वेग अक्ष पर अधिकतम मान', 'वेग अक्ष पर अंतःखंड'],
      },
      correctIndex: 0,
      solution: { en: 'Slope of v-t graph = Δv / Δt = Acceleration, while area under v-t graph gives Displacement.', hi: 'वेग-समय ग्राफ की प्रवणता (ढलान) त्वरण का मान निर्धारित करती है।' },
    },
    {
      id: 14,
      examTag: 'RRB Group D 2025 Shift 28',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'On a velocity-time graph, what does a horizontal straight line above the time axis indicate about the motion of the object?',
        hi: 'वेग-समय ग्राफ पर, समय अक्ष के ऊपर क्षैतिज सीधी रेखा वस्तु की गति के संबंध में क्या इंगित करती है?',
      },
      options: {
        en: ['Constant velocity', 'Changing direction', 'Increasing velocity', 'Constant acceleration'],
        hi: ['नियत वेग', 'परिवर्ती दिशा', 'वर्धमान वेग', 'नियत त्वरण'],
      },
      correctIndex: 0,
      solution: { en: 'Horizontal v-t line means velocity value remains unchanged with time (a = 0, constant velocity).', hi: 'समय-अक्ष के ऊपर क्षैतिज रेखा नियत अचर वेग (शून्य त्वरण) दर्शाती है।' },
    },
    {
      id: 15,
      examTag: 'RRB Group D 2025 Shift 29',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'A velocity-time graph for a body moving with uniform acceleration is a straight line that slopes upwards. What does the area under this line between two time points represent?',
        hi: 'एकसमान त्वरण से गतिमान किसी पिंड के लिए वेग-समय ग्राफ में ऊपर की ओर ढाल वाली एक सीधी रेखा होती है। दो समय बिंदुओं के बीच इस रेखा के अंतर्गत क्षेत्रफल क्या दर्शाता है?',
      },
      options: {
        en: ['The average velocity during that time interval', 'The acceleration of the body during that time interval', 'The displacement of the body during that time interval', 'The total change in velocity during that time interval'],
        hi: ['उस समय अंतराल के दौरान औसत वेग', 'उस समय अंतराल के दौरान पिंड का त्वरण', 'उस समय अंतराल के दौरान पिंड का विस्थापन', 'उस समय अंतराल के दौरान वेग में कुल परिवर्तन'],
      },
      correctIndex: 2,
      solution: { en: 'Geometric trapezium/triangle area under the v-t graph equals Displacement over that interval.', hi: 'दो समय बिंदुओं के मध्य v-t ग्राफ के नीचे का क्षेत्रफल पिंड के विस्थापन को दर्शाता है।' },
    },
    {
      id: 16,
      examTag: 'RRB Group D 2025 Shift 38',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Which quantity is represented by the slope of a position-time graph for an object moving in a straight line?',
        hi: 'सीधी रेखा में गतिमान किसी वस्तु के स्थिति-समय ग्राफ की ढाल (slope) द्वारा किस राशि को दर्शाया जाता है?',
      },
      options: {
        en: ['Momentum', 'Force', 'Linear velocity', 'Acceleration'],
        hi: ['संवेग', 'बल', 'रैखिक वेग', 'त्वरण'],
      },
      correctIndex: 2,
      solution: { en: 'Slope of x-t (position-time) curve = Δx / Δt = Linear velocity.', hi: 'स्थिति-समय ग्राफ की ढाल रैखिक वेग (Linear velocity) दर्शाती है।' },
    },
    {
      id: 17,
      examTag: 'RRB Group D 2025 Shift 4',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'What is required to fully describe the displacement of a moving body?',
        hi: 'किसी गतिमान पिंड के विस्थापन का पूर्ण वर्णन करने के लिए क्या आवश्यक है?',
      },
      options: {
        en: ['Only magnitude', 'Both magnitude and direction', 'Position at the origin', 'Only direction'],
        hi: ['केवल परिमाण', 'परिमाण और दिशा दोनों', 'मूल बिंदु पर स्थिति', 'केवल दिशा'],
      },
      correctIndex: 1,
      solution: { en: 'Displacement is a vector physical quantity requiring both Magnitude (with units) and Direction.', hi: 'विस्थापन सदिश राशि है जिसके पूर्ण वर्णन हेतु परिमाण व दिशा दोनों आवश्यक हैं।' },
    },
    {
      id: 18,
      examTag: 'RRB Group D 2025 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Which statement best describes uniform circular motion in the context of motion and force?',
        hi: 'निम्नलिखित में से कौन-सा कथन, गति और बल के संदर्भ में एकसमान वृत्तीय गति का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: ['An object moves in a straight line at changing speed.', 'An object moves in a circle at constant speed but its velocity changes due to change in direction.', 'An object moves in a circle with changing speed and constant direction.', 'An object moves in a circle with both constant speed and constant direction.'],
        hi: ['कोई वस्तु किसी सीधी रेखा में परिवर्ती चाल से चलती है', 'कोई वस्तु किसी वृत्त में नियत चाल से चलती है, लेकिन दिशा में परिवर्तन के कारण इसका वेग बदल जाता है', 'कोई वस्तु किसी वृत्त में परिवर्ती चाल और नियत दिशा में चलती है', 'कोई वस्तु किसी वृत्त में नियत चाल और नियत दिशा दोनों के साथ चलती है'],
      },
      correctIndex: 1,
      solution: { en: 'Uniform circular motion maintains uniform speed while constantly altering velocity direction.', hi: 'इसमें चाल नियत रहती है पर दिशा के निरंतर परिवर्तन से वेग बदलता है।' },
    },
    {
      id: 19,
      examTag: 'RRB Group D 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'A car starts from rest and gradually increases its speed. Which of the following best describes its distance-time graph?',
        hi: 'एक कार विराम अवस्था से चलना शुरू करती है और धीरे-धीरे अपनी चाल बढ़ाती है। निम्नलिखित में से कौन-सा, इसके दूरी-समय ग्राफ का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: ['A horizontal line starting from the origin', 'A curve starting from the origin with decreasing slope', 'A straight line with constant slope starting from the origin', 'A curve starting from the origin with increasing slope'],
        hi: ['मूल-बिंदु से आरंभ होने वाली क्षैतिज रेखा', 'घटती ढाल के साथ मूल-बिंदु से आरंभ होने वाला वक्र', 'मूल-बिंदु से आरंभ होने वाली तथा नियत ढाल वाली सरल रेखा', 'बढ़ती ढाल के साथ मूल-बिंदु से आरंभ होने वाला वक्र'],
      },
      correctIndex: 3,
      solution: { en: 'Increasing speed means distance-time slope rises smoothly upward (upward curve as in NCERT Ex 4.5).', hi: 'चाल बढ़ने पर ग्राफ मूल बिंदु से बढ़ती ढाल वाले ऊपर मुड़ते वक्र जैसा होगा (उदा. 4.5)।' },
    },
    {
      id: 20,
      examTag: 'RRB Group D 2025 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'A car increases its velocity from 10 m/s to 30 m/s in 5 seconds. What is the acceleration of the car?',
        hi: 'एक कार 5 सेकंड में अपना वेग 10 m/s से बढ़ाकर 30 m/s कर लेती है। कार का त्वरण क्या है?',
      },
      options: { en: ['6 m/s²', '2 m/s²', '10 m/s²', '4 m/s²'], hi: ['6 m/s²', '2 m/s²', '10 m/s²', '4 m/s²'] },
      correctIndex: 3,
      solution: { en: 'a = (v - u) / t = (30 - 10) / 5 = 20 / 5 = 4 m/s².', hi: 'a = (30 − 10) / 5 = 20 / 5 = 4 m/s²।' },
    },
    {
      id: 21,
      examTag: 'RRB Tech Gr-III 2024 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Starting from rest, a car is moving with a uniform acceleration of 0.5 $\\text{m/s}^2$. The velocity of the car after 20 s is:',
        hi: 'विरामावस्था से प्रारंभ करके, एक कार 0.5 $\\text{m/s}^2$ के एकसमान त्वरण से चल रही है। 20 s के बाद कार का वेग कितना होगा?',
      },
      options: { en: ['5 m/s', '0 m/s', '10 m/s', '15 m/s'], hi: ['5 m/s', '0 m/s', '10 m/s', '15 m/s'] },
      correctIndex: 2,
      solution: { en: 'v = u + at = 0 + 0.5 × 20 = 10 m/s.', hi: 'v = u + at = 0 + 0.5 × 20 = 10 m/s।' },
    },
    {
      id: 22,
      examTag: 'RRB Tech Gr-III 2024 Shift 13',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Ram applied the brakes to his cycle and an acceleration of $2\\text{ m s}^{-2}$ is produced in the opposite direction to the motion. If the cycle takes 10 s to stop after the application of brakes, calculate the distance it travels during this time.',
        hi: 'राम अपनी साइकिल के ब्रेक लगाता है और साइकिल की गति की विपरीत दिशा में $2\\text{ m s}^{-2}$ का एक त्वरण उत्पन्न हो जाता है। यदि ब्रेक लगाने के बाद साइकिल को रुकने में 10 s का समय लगता है, तो साइकिल द्वारा इस समय अवधि में तय की गई दूरी की गणना कीजिए।',
      },
      options: { en: ['100 m', '150 m', '50 m', '200 m'], hi: ['100 m', '150 m', '50 m', '200 m'] },
      correctIndex: 0,
      solution: { en: 'v = 0, a = -2 m/s², t = 10 s -> u = v - at = 0 - (-2)(10) = 20 m/s -> s = ut + 0.5at² = 200 - 100 = 100 m.', hi: 'प्रारंभिक वेग u = 20 m/s (चूँकि v = u − 2×10 = 0), अतः s = ½ × 2 × 10² = 100 m!' },
    },
    {
      id: 23,
      examTag: 'RRB Tech Gr-III 2024 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Which of the following is an example of an object moving in uniform circular motion?',
        hi: 'निम्नलिखित में से कौन-सा विकल्प एकसमान वृत्तीय गति में गतिमान वस्तु का उदाहरण है?',
      },
      options: {
        en: ['A person walking on a footpath', 'A bird flying in the sky', 'A satellite orbiting the Earth in a circular orbit', 'A car moving straight on a highway'],
        hi: ['फुटपाथ पर चल रहा एक व्यक्ति', 'आकाश में उड़ता हुआ एक पक्षी', 'पृथ्वी के चारों ओर वृत्ताकार कक्षा में एक उपग्रह', 'राजमार्ग पर सीधी चलती हुई एक कार'],
      },
      correctIndex: 2,
      solution: { en: 'A circular Earth satellite maintains uniform orbital speed around a circular trajectory (NCERT Sec 4.4).', hi: 'पृथ्वी की वृत्ताकार कक्षा में घूमता उपग्रह एकसमान वृत्तीय गति का प्रमुख उदाहरण है (NCERT खंड 4.4)।' },
    },
    {
      id: 24,
      examTag: 'RRB Tech Gr-III 2024 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 4: Motion',
      question: {
        en: 'Uma swims in a 60 m long pool. She covers 120 m in one minute by swimming from one end to the other and back along the same straight path. The average velocity of Uma is:',
        hi: 'उमा 60 m लंबे पूल में तैरती है। वह एक मिनट में एक छोर से दूसरे छोर तक, और वापस उसी सीधे रास्ते पर तैरते हुए 120 m की दूरी तय करती है। उमा का औसत वेग कितना है?',
      },
      options: { en: ['1 m/s', '2 m/s', '0 m/s', '3 m/s'], hi: ['1 m/s', '2 m/s', '0 m/s', '3 m/s'] },
      correctIndex: 2,
      solution: { en: 'Returning to starting wall makes net Displacement = 0 m -> Average velocity = 0/60 = 0 m/s (NCERT Ex 4.2 exact match!).', hi: 'उसी बिंदु पर लौट आने से विस्थापन = 0 m अतः औसत वेग = 0 m/s होगा (NCERT उदाहरण 4.2 जैसा सीधा प्रश्न!)।' },
    },
  ],
};
