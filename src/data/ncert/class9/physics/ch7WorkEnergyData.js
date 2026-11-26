/**
 * Class 9 NCERT (2026-27 New Edition — ihsc107.pdf, Pages 116–139) + Railway CBT Deep-Dive Edition
 * Chapter 7: Work, Energy & Simple Machines (कार्य, ऊर्जा एवं सरल मशीनें) — Gold Standard v3
 * Brand-new 2026-27 NCERT Syllabus featuring Scientific Work, Work-Energy Theorem, KE/PE,
 * Mechanical Energy Conservation, Power/HP/kWh, Fixed/Movable Pulleys, Inclined Planes & Class 1-2-3 Levers.
 * Zero 3rd-party mentions, double-escaped KaTeX, all 15 Exercises solved cleanly & 24 Dated RRB PYQs.
 */

export const CH7_WORK_ENERGY_DATA = {
  id: 'c9-phy-ch7',
  classId: 'class9',
  subjectId: 'physics',
  subjectLabel: { en: 'Physics', hi: 'भौतिक विज्ञान (Physics)' },
  chapterNumber: 7,
  sourceCode: 'Class 9 NCERT (2026–27) • Ch 7: Work, Energy & Simple Machines (CBT Edition)',
  blueprintSvgKey: 'ch7-blueprint-mindmap',
  weightageBars: [
    { label: { en: 'Kinetic Energy, PE & Work-Energy Theorem', hi: 'गतिज ऊर्जा (KE), स्थितिज ऊर्जा (PE) व प्रमेय' }, pct: 34 },
    { label: { en: 'Simple Machines (Levers 1/2/3, Pulleys, Ramps)', hi: 'सरल मशीनें (उत्तोलक 1-2-3, घिरनी, आनत तल, MA)' }, pct: 30 },
    { label: { en: 'Scientific Work (+ / − / 0) & F-s Area', hi: 'कार्य (+ / − / 0) व बल-विस्थापन ग्राफ' }, pct: 20 },
    { label: { en: 'Power, Horsepower (746 W) & Units (kWh)', hi: 'शक्ति, अश्वशक्ति (746 W) व 1 kWh (3.6×10⁶ J)' }, pct: 16 },
  ],
  title: {
    en: 'Chapter 7: Work, Energy & Simple Machines',
    hi: 'अध्याय 7: कार्य, ऊर्जा एवं सरल मशीनें',
  },
  subtitle: {
    en: 'Complete 2026-27 NCERT Deep-Dive • Work-Energy Theorem, Conservation, kWh, Pulleys/Inclined Plane/Levers, Energy Lab & 24 Verified RRB PYQs',
    hi: 'नया 2026-27 NCERT पाठ्यक्रम संपूर्ण गहराई • कार्य-ऊर्जा प्रमेय, KE/PE, शक्ति/kWh, घिरनी-उत्तोलक (1-2-3), सभी 15 प्रश्न व 24 रेलवे PYQ',
  },
  metrics: {
    pages: 24,
    activities: 5,
    tables: 6,
    svgLabs: 1,
    hdVisuals: 5,
    exercisesSolved: 15,
    pyqsMatched: 24,
  },

  hero: {
    imageUrl: '/ncert-notes/class9-phy-ch7/hero-work-energy-machines.webp',
    caption: {
      en: 'Hydro-wind energy harvesting, Class-1 lever arm balance, pulley mechanical advantage, and mechanical PE ↔ KE oscillation.',
      hi: 'जल व पवन ऊर्जा रूपांतरण, प्रथम श्रेणी उत्तोलक, घिरनी यांत्रिक लाभ तथा स्थितिज-गतिज ऊर्जा संरक्षण का वैज्ञानिक दृश्य।',
    },
  },

  quickRevision60Sec: [
    {
      en: '**Scientific Work**: $W = F \\times s$ (displacement along force); **Scalar**, SI unit **Joule (J)** $= 1\\text{ N}\\cdot\\text{m} = 1\\text{ kg m}^2\\text{ s}^{-2}$. **$W = 0$** if $F=0$, $s=0$ (pushing brick wall), or **Force $\\perp$ Displacement ($90^\\circ$, e.g., porter walking flat)**!',
      hi: '**वैज्ञानिक कार्य**: $W = F \\times s$ (बल की दिशा में विस्थापन); **अदिश राशि**, SI मात्रक **जूल (J)** $= 1\\text{ N}\\cdot\\text{m}$। **$W = 0$** जब $s = 0$ (दीवार धकेलना) या **बल व विस्थापन $90^\\circ$ लंबवत हों** (सिर पर बोझ लिए क्षैतिज चलना)!',
    },
    {
      en: '**Work-Energy Theorem**: **Work done on object = Change in Kinetic Energy**: $W = \\frac{1}{2}m(v^2 - u^2)$. **Kinetic Energy**: $K = \\frac{1}{2}mv^2$ (doubling velocity multiplies KE by **$4\\times$**; $v \\propto \\sqrt{K}$!).',
      hi: '**कार्य-ऊर्जा प्रमेय**: किया गया कार्य = ऊर्जा परिवर्तन ($W = \\Delta K = \\frac{1}{2}m(v^2-u^2)$)। **गतिज ऊर्जा** $K = \\frac{1}{2}mv^2$ — वेग दोगुना करने पर $K$ **4 गुना** व तीन गुना करने पर **9 गुना** होता है!',
    },
    {
      en: '**Potential Energy & Conservation**: Gravitational $PE = mgh$ (`near surface, path-independent!`). Elastic springs, bows, magnets & dams store PE. Total Mechanical Energy **$E = KE + PE = mgh$** remains conserved; slide bottom velocity $v = \\sqrt{2gh}$!',
      hi: '**स्थितिज ऊर्जा व संरक्षण**: $PE = mgh$ *(पथ से स्वतंत्र, केवल ऊँचाई $h$ पर निर्भर)*। कुल यांत्रिक ऊर्जा $= KE + PE = \\text{नियत}$; घर्षण-रहित फिसलपट्टी के तल पर वेग $v = \\sqrt{2gh}$ (द्रव्यमान व आकार से स्वतंत्र)!',
    },
    {
      en: '**Power & Electricity Bill Unit**: $P = W / t$; SI Unit **Watt (W)** $= 1\\text{ J/s}$ (named after **James Watt**). **1 Horsepower (HP) = 746 W**. **1 kWh (1 Commercial Unit) = $3.6 \\times 10^6\\text{ J}$**!',
      hi: '**शक्ति व बिजली बिल मात्रक**: $P = W/t$; SI मात्रक **वाट (W)** (`जेम्स वाट`)। **1 अश्वशक्ति (HP) = 746 W**। **1 किलोवाट-घंटा (`1 kWh / 1 यूनिट`) $= 3.6 \\times 10^6\\text{ J}$**!',
    },
    {
      en: '**Simple Machines & MA**: **Mechanical Advantage** $MA = \\frac{\\text{Load}}{\\text{Effort}}$. Ideal machines **NEVER reduce total work**; they lower effort force OR reverse direction! **Fixed Pulley** (`MA = 1`, reverses direction), **Movable Pulley** (`MA = 2`), **Inclined Ramp** (`MA = L/h > 1`).',
      hi: '**सरल मशीन व यांत्रिक लाभ (MA)**: $MA = \\frac{\\text{भार (Load)}}{\\text{आयास (Effort)}}$। मशीनें कुल कार्य नहीं घटातीं, केवल बल को कम या दिशा को सुगम बनाती हैं! **स्थिर घिरनी (`MA = 1`)**, **चल घिरनी (`MA = 2`)**, **आनत तल (`MA = L/h > 1`)**।',
    },
    {
      en: '**Levers Formula & FLE 1-2-3 Rule (`NCERT Table 7.2`)**: **Effort × Effort Arm = Load × Load Arm ($F_1 d_1 = F_2 d_2$)** -> $MA = \\frac{d_1}{d_2}$. **1st Class** (`Fulcrum mid`: Scissors, Pliers, Crowbar, See-saw), **2nd Class** (`Load mid, MA > 1`: Nutcracker, Wheelbarrow, Bottle opener), **3rd Class** (`Effort mid, MA < 1`: Tongs/Chimta, Broom, Tweezers).',
      hi: '**उत्तोलक सूत्र व FLE 1-2-3 नियम (`तालिका 7.2`)**: $F_1 d_1 = F_2 d_2 \\implies MA = \\frac{\\text{आयास भुजा}}{\\text{भार भुजा}}$। **प्रथम श्रेणी** (`आलंब बीच`: कैंची, पिलास, दंड-तुला, सी-सॉ); **द्वितीय** (`भार बीच`: सरौता/नींबू निचोड़नी, हथठेला, बोतल ओपनर); **तृतीय** (`आयास बीच`: चिमटा, झाड़ू, चिमटी)!',
    },
  ],

  sections: [
    {
      id: 'scientific-work-theorem',
      number: '7.1–7.2',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Scientific Work (Positive, Negative, Zero), F–s Graph Area & Work–Energy Theorem',
        hi: 'वैज्ञानिक कार्य (धनात्मक, ऋणात्मक व शून्य), F–s ग्राफ क्षेत्रफल एवं कार्य-ऊर्जा प्रमेय',
      },
      summaryTag: { en: 'NCERT Pages 116–120 + Examples 7.1–7.2 + Sign Cases', hi: 'NCERT पृष्ठ 116–120 + उदाहरण 7.1–7.2 + कार्य चिह्न' },
      blocks: [
        {
          heading: {
            en: '1. Why Physics Says Pushing a Wall Does ZERO Work — Conditions, Signs & F–s Area',
            hi: '1. दीवार धकेलने पर थकान क्यों पर वैज्ञानिक कार्य शून्य क्यों? (+ / − / 0 कार्य व प्रमेय)',
          },
          conceptStory: {
            en: 'Everyday speech calls studying hard or holding a heavy suitcase standing at a railway platform "work"—yet Physics uses a strict **Scientific Definition (`Pages 117–119`)**: Constant force **$F$** performs **Work $W = F \\times s$** ONLY when the object undergoes net **displacement $s$ along the line of force**! Notice **both Force and Displacement are Vectors, whereas Work $W$ is a SCALAR quantity** (no direction, simply `+`, `−`, or `0`, measured in **Joule `1 J = 1 N·m = 1 kg m² s⁻²`**).\nCheck ALL THREE ZERO-WORK scenarios asked repeatedly in RRB shifts: (1) **$F = 0$**, (2) **$s = 0$** (pushing a solid wall till muscles exhaust—internal muscle fibre contractions burn chemical food ATP inside your arms producing fatigue, yet external work on the wall = `0`!), and (3) **Force perpendicular (`90°`) to Displacement** (lifting a bag vertically upward balanced against gravity while walking along a **horizontal floor** -> **`W = 0 J`**!). When force moves a wheelchair forward (**same direction**), work is **Positive (`+`)**; when a goalkeeper’s gloves push backward opposing an incoming ball (`Ex 7.2: 200 N × (-0.15 m) = -30 J`) or lowering a dumbbell slowly (`Ex 7.1`), work is **Negative (`−`)**! Crucially, even if force varies (`Fig 7.4`), **Area under Force–Displacement (`F–s`) Graph = Total Work Done**—and by the **Work–Energy Theorem (`Eq 7.3`)**, **Net Work Done = Change in Object’s Energy ($W = K_f - K_i$)**!',
            hi: 'दैनिक जीवन की बोलचाल में कड़ी पढ़ाई या दीवार को जोर से धकेलना भी "काम" लगता है, किंतु भौतिकी में **वैज्ञानिक कार्य (Work)** तभी होता है जब **बल $F$** के कारण वस्तु में **बल की दिशा में विस्थापन $s$** हो (`W = F × s`, SI मात्रक **जूल 1 J = 1 N·m = 1 kg m² s⁻²**)। यद्यपि बल और विस्थापन **सदिश** हैं, **कार्य एक अदिश राशि (Scalar)** है जिसे केवल `+`, `−` या `0` से लिखा जाता है!\n• **शून्य कार्य (`W = 0`) की 3 परीक्षा शर्तें:** (1) $F = 0$, (2) **$s = 0$** (चट्टान या पक्की दीवार को धकेलना; भारोत्तोलक द्वारा डंड को हाथ में स्थिर पकड़ना — माँसपेशियों के आंतरिक संकुचन से थकान आती है पर वस्तु पर बाहरी कार्य **शून्य** है!), तथा (3) **बल व विस्थापन परस्पर लंबवत ($90^\\circ$)** हों (जैसे बॉक्स/बोरी को ऊपर बल लगाकर संतुलित रखते हुए **क्षैतिज समतल पर चलना** — चित्र 7.6)!\n• **धनात्मक बनाम ऋणात्मक कार्य (`उदाहरण 7.1–7.2`):** डंबल को ऊपर उठाते समय या पहिएदार कुर्सी धकेलते समय ($F$ व $s$ एक ही दिशा में) **कार्य धनात्मक**; जबकि डंबल नीचे लाते समय, गोलकीपर द्वारा `200 N` विपरीत बल से फुटबॉल `15 cm` में रोकने पर (`200 × (-0.15) = -30 J`) या ब्रेक/घर्षण बल द्वारा **कार्य ऋणात्मक** होता है! ध्यान दें: किसी **बल-विस्थापन (`F–s`) ग्राफ के नीचे का क्षेत्रफल (`चित्र 7.4`)** सदैव किया गया कुल कार्य देता है, और **कार्य-ऊर्जा प्रमेय (`W = ऊर्जा में परिवर्तन`)** अनुसार यही ऊर्जा बदलाव में प्रकट होता है!',
          },
          bullets: [
            {
              en: '**==Negative Work Caution (`NCERT Margin Note p.119`):==** When footballer & goalkeeper collide or brakes stop a cycle: **Force opposes displacement** -> Work by stopping force is **Negative (`W < 0`)** pulling Kinetic Energy down!',
              hi: '**==ऋणात्मक कार्य नियम (पृष्ठ 119):==** जब बल वस्तु की गति/विस्थापन की **विपरीत दिशा** में लगे (जैसे ब्रेक, घर्षण या गुरुत्व जब पत्थर ऊपर फेंका जाए — **अभ्यास 10!**), तो कार्य **ऋणात्मक (`−`)** होता है और चाल घटती है।',
            },
          ],
          diagramKey: 'work-signs-f-s-area',
          inlinePyqIds: [10, 16, 19, 20],
        },
      ],
    },

    {
      id: 'kinetic-potential-conservation',
      number: '7.3–7.4',
      flowDiagramKey: null,
      svgLab: 'energy-machines-lab',
      svgLabTitle: {
        en: 'Conservation of Energy (PE ↔ KE Drop) & Lever MA Simulator',
        hi: 'यांत्रिक ऊर्जा संरक्षण (PE ↔ KE रूपांतरण) एवं उत्तोलक यांत्रिक लाभ लैब',
      },
      title: {
        en: 'Energy Forms, Kinetic Energy (½mv²), Gravitational/Elastic PE & Conservation Law (+ Gharat)',
        hi: 'ऊर्जा के रूप, गतिज ऊर्जा (½mv²), स्थितिज ऊर्जा (mgh व प्रत्यास्थ), संरक्षण नियम एवं घराट पनचक्की',
      },
      summaryTag: { en: 'NCERT Pages 120–129 + Examples 7.3–7.9 + Activity 7.1–7.2 + Real Dam/Coaster/Mill', hi: 'NCERT पृष्ठ 120–129 + उदाहरण 7.3–7.9 + टिहरी बाँध व घराट फोटो' },
      blocks: [
        {
          heading: {
            en: '1. Kinetic Energy Formula, PE Mechanisms (Spring, Magnets, Gravity) & Conservation Proof',
            hi: '1. गतिज ऊर्जा व्यंजक (½mv²), स्थितिज ऊर्जा (प्रत्यास्थ/चुंबकीय/गुरुत्वीय) व संरक्षण नियम',
          },
          conceptStory: {
            en: 'An object possessing capability to do work holds **Energy** (food fuels muscles, electricity spins fans, car fuel moves vehicles, chemical bonds lock energy inside fuel, nuclear energy resides in nuclei). By applying Newton’s 2nd Law ($F=ma$) + $v^2-u^2=2as$ into Work $W=Fs$: **$W = \\frac{1}{2}m(v^2 - u^2)$ (`Eq 7.5`)**! Starting from rest ($u=0$) yields **Kinetic Energy $K = \\frac{1}{2}mv^2$**—doubling speed multiplies KE **$4\\times$ (`Ex 7.4`)**; tripling speed multiplies KE **$9\\times$**! Check NCERT Worked Numbers (`Ex 7.5 & 7.6`): Indian fast bowler bowling `0.2 kg` ball at `154.8 km/h = 43 m/s` packs `K = 0.5 × 0.2 × 43² = 184.9 J`; `15,000 kg` carrier jet arrested cleanly by deck cable exerting `367,500 N` backward over `100 m` proves landing speed `v = 70 m/s = 252 km/h`!\nNext, **Potential Energy (`स्थितिज ऊर्जा`)** arises in TWO ways (`NCERT Pages 123–125`): **(a) Deformation (`विकृति`)** inside stretched rubber catapults, archer bows & compressed springs (`Fig 7.14`), OR **(b) Relative position** in magnetic, electrostatic & Earth-object **Gravitational systems** (`U = mgh`, valid near Earth surface; `Ex 7.7`: `0.2 kg` ball tossed `10 m` high holds `20 J`). Friction is NOT conservative (heat is lost)! When gravity alone acts (`Eq 7.9–7.10` + `Activity 7.1–7.2` Sand crater & Simple Pendulum): at top peak `A`, $PE=mgh, KE=0$; mid-fall `B`, $PE$ drop converts completely into equal $KE$ gain; bottom `Q/C`, $PE=0, KE=mgh$ -> giving Frictionless Slide Exit Speed **$v = \\sqrt{2gh}$ (`Ex 7.8`, independent of mass or slide curve shape!)** and **Highway Escape Ramp (`Ex 7.9`: `10,000 kg` truck at `72 km/h = 20 m/s` stopped by `50,000 N` gravel drag on `30°` ramp needs minimum length $d = 20\\text{ m}$)**! Look also at traditional **Himalayan Gharat Watermill (`पनचक्की`, Fig 7.36)** & modern Hydro Dams: stored elevated water’s Potential Energy races down chutes converting to Kinetic Energy spinning paddle wheels & millstones cleanly! Finally, modern cosmology’s frontier box (`Page 139`) notes **Dark Energy (`अदीप्त ऊर्जा`)** accelerating cosmic universe expansion!',
            hi: '• **गतिज ऊर्जा (`K = ½mv²` — समीकरण 7.5–7.6):** कार्य-ऊर्जा प्रमेय से $W = \\frac{1}{2}m(v^2 - u^2)$ प्राप्त होता है। यदि वस्तु विराम ($u=0$) से वेग $v$ पाए तो **$K = \\frac{1}{2}mv^2$** (SI मात्रक **जूल**)। वेग दोगुना करने पर $K$ **4 गुना (`उदा. 7.4`)** और 3 गुना करने पर **9 गुना** हो जाता है! (`उदा. 7.5:` भारतीय तेज गेंदबाज की `0.2 kg`, `154.8 km/h = 43 m/s` गेंद में $K = 184.9\\text{ J}$; `उदा. 7.6:` विमान वाहक पोत पर `15000 kg` जेट `367500 N` अवरोध से `100 m` में रुके तो उतरते समय वेग $v = 70\\text{ m/s} = 252\\text{ km/h}$!)।\n• **स्थितिज ऊर्जा (`PE = mgh` व आंतरिक बल):** किसी गुलेल के खिंचाव, तीर-कमान, संपीडित स्प्रिंग की **विकृति**, अथवा दो चुंबकों (`N-S`), विद्युत आवेशों (`+ / −`) व **पृथ्वी-गेंद की सापेक्ष ऊँचाई** (`चित्र 7.15–7.16`) से ऊर्जा संचित होती है *(किंतु घर्षण विरुद्ध कार्य ऊष्मा बनकर खो जाता है — संचित नहीं होता, पृष्ठ 125!)*। पृष्ठ के निकट **$PE = mgh$** केवल ऊँचाई $h$ व द्रव्यमान पर निर्भर है (न कि रास्ते के आकार पर — **अभ्यास 5**)! (`उदा. 7.7`: `200 g = 0.2 kg` गेंद `10 m` पर $\\to 20\\text{ J}$)\n• **यांत्रिक ऊर्जा संरक्षण (`समीकरण 7.9–7.10` व लोलक `क्रियाकलाप 7.2`):** मुक्त गिरती गेंद या सरल लोलक में **चरम बिंदुओं ($P, R$) पर $KE=0, PE=\\text{अधिकतम}$** तथा **मध्य निम्नतम बिंदु ($Q$) पर $PE=0, KE=\\text{अधिकतम}$**, पर योग **$KE+PE = mgh$ अचर** रहता है! **उदाहरण 7.8 (फिसलपट्टी):** आधार पर वेग **$v = \\sqrt{2gh}$** — बच्चों के द्रव्यमान व पट्टी के आकार से बिल्कुल स्वतंत्र! **उदाहरण 7.9 (हाईवे बचाव ढलान):** `72 km/h` (`20 m/s`) व `10,000 kg` ब्रेक-फेल ट्रक (`30°` ढलान व `50,000 N` रेत घर्षण) को रोकने हेतु रैंप की न्यूनतम लंबाई `20 m` होगी।\n• **पनचक्की (`घराट`, चित्र 7.36) व टिहरी बाँध (`विज्ञान एवं समाज`):** ऊँचाई पर रुके जल की स्थितिज ऊर्जा (`mgh`) पाइप से बहते जल की गतिज ऊर्जा बनती है जो घराट के पहिए (`चक्की`) या बाँध की विद्युत टर्बाइन घुमाती है। **खोज जारी है (पृष्ठ 139):** वैज्ञानिकों ने ब्रह्माण्ड के त्वरित विस्तार हेतु रहस्यमयी **अदीप्त ऊर्जा (Dark Energy)** प्रस्तावित की है।',
          },
          diagramKey: 'mechanical-energy-conservation',
          realImage: {
            url: '/ncert-notes/class9-phy-ch7/real/tehri-hydro-dam.webp',
            secondaryUrl: '/ncert-notes/class9-phy-ch7/real/roller-coaster-energy.webp',
            title: {
              en: 'Real-World Energy Conservation: Tehri Dam Hydro PE Reservoir & Roller Coaster PE ↔ KE Track',
              hi: 'ऊर्जा संरक्षण के वास्तविक दृश्य: टिहरी जलविद्युत बाँध (बाएँ) एवं रोलर कोस्टर ऊँचाई-चाल रूपांतरण (दाएँ)',
            },
            caption: {
              en: 'Left: High water column stores vast mgh potential energy driving turbines. Right: Coaster peak mgh turns smoothly into ½mv² down loops.',
              hi: 'बाएँ: ऊँचे जलाशय में संचित स्थितिज ऊर्जा (`mgh`) टर्बाइन घुमाकर विद्युत बनाती है। दाएँ: शीर्ष PE नीचे गतिज ऊर्जा (`½mv²`) बनती है।',
            },
          },
          trapAlert: {
            en: '**Same-Energy Velocity Compare Trap (`Think Q4 & Group D 2025`):** If Body A (`mass m`) and Body B (`mass 4m`) hold EQUAL Kinetic Energy ($K_A = K_B$): **lightest body MUST move FASTER!** $\\frac{1}{2}m v_A^2 = \\frac{1}{2}(4m) v_B^2 \\implies v_A : v_B = \\mathbf{2 : 1}$!',
            hi: '**-0.33 Trap Alert (`सोचिए प्रश्न 4`):** यदि $m$ व $4m$ द्रव्यमान की दो वस्तुओं की **गतिज ऊर्जा बराबर** है, तो भारी वस्तु धीरे व **हल्की वस्तु तेज** चलेगी — वेग अनुपात $v_A : v_B = \\sqrt{4/1} = \\mathbf{2 : 1}$ होगा!',
          },
          inlinePyqIds: [1, 2, 3, 6, 13, 21, 22],
        },
      ],
    },

    {
      id: 'power-commercial-units',
      number: '7.5',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Power (Rate of Work), James Watt, Horsepower (746 W) & Commercial Unit (kWh = 3.6×10⁶ J)',
        hi: 'शक्ति (कार्य करने की दर P = W/t), अश्वशक्ति (746 W) एवं व्यावसायिक मात्रक (1 kWh = 3.6×10⁶ J)',
      },
      summaryTag: { en: 'NCERT Pages 129 + Worked Examples 7.10–7.11 + kWh Numerals', hi: 'NCERT पृष्ठ 129 + उदाहरण 7.10–7.11 + बिजली यूनिट संख्यात्मक' },
      blocks: [
        {
          heading: {
            en: '1. Why Climbing in 1 Minute Beats 5 Minutes — Power Formulas & Commercial Electricity Bills',
            hi: '1. सीढ़ियाँ 1 मिनट बनाम 5 मिनट में चढ़ना — शक्ति (Watt), HP व बिजली बिल kWh गणना',
          },
          conceptStory: {
            en: 'Running up school stairs in 1 minute versus strolling slowly in 5 minutes performs **EXACTLY identical Mechanical Work ($mgh$)**—what differs is **POWER (`शक्ति`)**, defined as the **Time Rate of doing Work (`कार्य करने की दर`)**: **$P = \\frac{W}{t}$** (`Eq 7.11`). Its SI unit is **Watt (`W`)** $= 1\\text{ J s}^{-1}$, honouring **James Watt**, inventor of the practical rotary steam engine! Large engines and water pumps also rate **1 Kilowatt (`1 kW = 1000 W = 1000 J s⁻¹`)** and **1 Horsepower (`1 HP = 746 W`, NCERT Margin Box p.129)**.\nCheck NCERT Worked Examples cleanly: **Example 7.10:** Weightlifter lifting `75 kg` by `2 m` in `5 s` ($g=10$) does work $mgh = 1500\\text{ J} \\implies P = 1500/5 = \\mathbf{300\\text{ W}}$! **Example 7.11:** `1000 kg` car accelerating `0 -> 72 km/h (20 m/s)` in `10 s` gains $\\Delta K = \\frac{1}{2}(1000)(20^2) = 200,000\\text{ J} \\implies P = 200,000 / 10 = \\mathbf{20,000\\text{ W} = 20\\text{ kW}}$!\n**Biggest Railway Numerical Formula — Commercial Energy Unit:** One **Kilowatt-hour (`1 kWh` = `1 Unit`)** equals consuming `1000 W` (`1000 J/s`) continuously for `1 hour (3600 s)`: **$1\\text{ kWh} = 1000 \\times 3600 = \\mathbf{3.6 \\times 10^6\\text{ J}}$**! Quick household/workshop formula: **Units (`kWh`) $= \\frac{\\text{Qty} \\times \\text{Watt} \\times \\text{Hours/day} \\times \\text{Days}}{1000}$**!',
            hi: 'स्कूल की सीढ़ियाँ 1 मिनट में दौड़कर चढ़ना बनाम 5 मिनट में टहलकर चढ़ना — दोनों में गुरुत्व विरुद्ध **कुल कार्य ($mgh$) बिल्कुल समान** है; अंतर केवल समय में है! **कार्य करने की दर को शक्ति (Power)** कहते हैं: **$P = \\frac{W}{t}$** (SI मात्रक **वाट `W = 1 J/s`**, भाप-इंजन के आविष्कारक **जेम्स वाट** के सम्मान में)।\n• **शक्ति के अन्य मात्रक (`पृष्ठ 129`):** **$1\\text{ kW} = 1000\\text{ W} = 1000\\text{ J/s}$** तथा इंजन/जल पंप मापन हेतु **1 अश्वशक्ति (`1 Horsepower / HP`) $= 746\\text{ W}$**।\n• **उदाहरण 7.10:** भारोत्तोलक `5 s` में `75 kg` को `2 m` उठाए ($g=10$) → कार्य $= 75 \\times 10 \\times 2 = 1500\\text{ J} \\implies$ शक्ति $P = 1500/5 = \\mathbf{300\\text{ W}}$।\n• **उदाहरण 7.11:** `1000 kg` कार `10 s` में `0` से `72 km/h (20 m/s)` पकड़े तो $\\Delta K = \\frac{1}{2} \\times 1000 \\times 400 = 200,000\\text{ J} \\implies$ इंजन शक्ति $= 200,000/10 = \\mathbf{20,000\\text{ W} = 20\\text{ kW}}$।\n• **व्यावसायिक विद्युत मात्रक (`1 kWh`):** $1\\text{ kWh} = 1000\\text{ W} \\times 3600\\text{ s} = \\mathbf{3.6 \\times 10^6\\text{ J}}$ (`Tech Gr-III & ALP 2025` में सर्वाधिक पूछा जाने वाला मान!)। बिल यूनिट सूत्र: **कुल यूनिट (`kWh`) $= \\frac{\\text{यंत्र संख्या} \\times \\text{वाट} \\times \\text{घंटे} \\times \\text{दिन}}{1000}$**।',
          },
          viralTrick: {
            en: '**Zero-Confusion Unit Check (`Group D 2025 Trap`):** **Kilowatt (`kW`)** is a unit of **POWER**, whereas **Kilowatt-HOUR (`kWh`)** and **Watt-SECOND (`W·s`)** are units of **ENERGY / WORK**!',
            hi: '**-0.33 Trap Shield:** **किलोवाट (`kW`)** व **वाट (`W`)** = **शक्ति** के मात्रक हैं; जबकि **किलोवाट-घंटा (`kWh`)**, **जूल (`J`)** व **वाट-सेकंड (`W·s`)** = **ऊर्जा / कार्य** के मात्रक हैं (`पास्कल` दाब का मात्रक है)!',
          },
          inlinePyqIds: [11, 23, 24],
        },
      ],
    },

    {
      id: 'simple-machines-pulley-lever',
      number: '7.6.1–7.6.3',
      flowDiagramKey: null,
      svgLab: null,
      title: {
        en: 'Simple Machines: Mechanical Advantage, Fixed vs Movable Pulleys, Inclined Planes & 3 Classes of Levers',
        hi: 'सरल मशीनें: यांत्रिक लाभ (MA), घिरनी (स्थिर/चल), आनत तल एवं उत्तोलक के 3 वर्ग (FLE 1-2-3)',
      },
      summaryTag: { en: 'NCERT Pages 130–136 + Table 7.1–7.2 + Activities 7.3–7.5 + Waterwheel Photo', hi: 'NCERT पृष्ठ 130–136 + तालिका 7.1–7.2 + क्रियाकलाप 7.3–7.5 + घराट फोटो' },
      blocks: [
        {
          heading: {
            en: '1. Pulleys & Inclined Planes — Machines Reduce Force OR Change Direction, NEVER Total Work!',
            hi: '1. सरल मशीन सिद्धांत (MA), घिरनी निकाय एवं आनत तल (Ex 7.12 = 1.67 MA)',
          },
          conceptStory: {
            en: 'Machines do NOT create free energy (`Perpetual Motion Machines are IMPOSSIBLE because friction steadily turns mechanical energy into heat — Think Q13!`) and do NOT reduce total Work needed (`W = F·s` stays identical ideally!). Instead, a **Simple Machine (`सरल मशीन`)** trades force for distance OR changes push direction (`Page 130`): **Load (`भार`)** is the resistance overcome; **Effort (`आयास`)** is your input force; and **Mechanical Advantage (`यांत्रिक लाभ / MA`, Eq 7.12)** = **$\\frac{\\text{Load}}{\\text{Effort}}$**!\n• **Pulley (`घिरनी`, Fig 7.23–7.25):** A grooved wheel over which rope passes. A **Single Fixed Pulley** (`एक स्थिर घिरनी` — crane top / flag hoist) has **MA = 1** (`Effort = Load`); it helps solely because **pulling downward is ergonomically easier than lifting straight upward** (`efforts & loads move opposite!`, Group D 2025!). A **Movable Pulley (`चल घिरनी`)** carries the load supported by two rope segments -> **MA = 2** (`halves effort`, though you pull twice as much rope!).\n• **Inclined Plane (`आनत तल`, Activity 7.3 + Eq 7.13):** Pushing weight $mg$ up a smooth ramp of slope length **$L$** to height **$h$** takes Effort $F\' = mg \\cdot \\frac{h}{L}$, giving **$MA = \\frac{L}{h} > 1$**! Lowering ramp angle increases $L$ for same $h$, reducing effort further (`Ex 7.12`: height $30\\text{ cm}$, horizontal run $40\\text{ cm} \\implies$ ramp hypotenuse $L = 50\\text{ cm} \\implies MA = 50/30 = \\mathbf{1.67}$!). This explains **winding mountain roads (`Think Q9`)** & **slanted staircases over vertical ladders (`Think Q10`)**!',
            hi: 'सरल मशीनें ऊर्जा उत्पन्न नहीं करतीं (बिना ईंधन **सदैव चलने वाली मशीनें संभव नहीं** क्योंकि घर्षण से यांत्रिक ऊर्जा ऊष्मा बन कर घटती है!) और कुल कार्य को कम नहीं करतीं; ये केवल **आयास बल का परिमाण घटाकर या दिशा बदलकर** काम आसान करती हैं।\n**यांत्रिक लाभ (Mechanical Advantage — Eq 7.12):** **$MA = \\frac{\\text{भार (Load)}}{\\text{आयास (Effort)}}$**\n• **घिरनी (`Pulley`, 7.6.1):** खाँचेदार पहिया जिसमें रस्सी चलती है:\n  1. **स्थिर घिरनी (`MA = 1`):** केवल **बल की दिशा बदलकर** (नीचे खींचना ऊपर उठाने से आसान है!) सुविधा देती है — यहाँ आयास व भार **विपरीत दिशा में** चलते हैं (`Group D 2025 PYQ`)।\n  2. **चल घिरनी या घिरनी निकाय (`MA > 1`, चित्र 7.25):** भार गतिशील घिरनी से जुड़ा रहता है, अतः **कम आयास में अधिक भार** उठता है (जैसे क्रेन व लिफ्ट में चल घिरनी पर **`MA = 2`** — रस्सी दोगुनी खींचनी पड़ती है)।\n• **आनत तल (`Inclined Plane`, क्रियाकलाप 7.3 व Eq 7.13):** $h$ ऊँचाई तक $L$ लंबाई के चिकने आनत पटरे पर खिसकाने पर किया कार्य $F\' \\times L = mgh$, अतः **$MA = \\frac{L}{h} > 1$**! ढलान कोण कम करने से $L$ बढ़ता है, आयास घटता है और MA बढ़ता है (**उदाहरण 7.12:** ऊँचाई `30 cm`, क्षैतिज आधार `40 cm` $\\implies$ लंबाई $L = \\sqrt{30^2+40^2} = 50\\text{ cm} \\implies MA = 50/30 = \\mathbf{1.67}$!)। इसी कारण **पहाड़ी सड़कें घुमावदार (`सोचिए 9`)** व **सीढ़ियाँ तिरछी (`सोचिए 10`)** बनती हैं!',
          },
          diagramKey: 'simple-machines-pulley-ramp',
          realImage: {
            url: '/ncert-notes/class9-phy-ch7/real/waterwheel-gharat.webp',
            title: {
              en: 'Traditional Watermill (Himalayan Gharat — NCERT Page 136): PE -> KE -> Mechanical Milling',
              hi: 'परंपरागत जल-पनचक्की (हिमालयी घराट — चित्र 7.36): गिरते जल की गतिज ऊर्जा से चक्की घुमाना',
            },
            caption: {
              en: 'Elevated stream potential energy drops through chute (A) driving waterwheel (B) linked to top grinding millstone (C).',
              hi: 'ऊँचाई पर स्थित जल पाइप (A) से नीचे आकर पहिए (B) और ऊपर जुड़ी चक्की के पत्थर (C) को घुमाकर अनाज पीसता है।',
            },
          },
          inlinePyqIds: [4, 8, 9, 12, 14, 18],
        },
        {
          heading: {
            en: '2. Levers Law (F₁d₁ = F₂d₂), Example 7.13 Seesaw & FLE 1-2-3 Classification (Table 7.2)',
            hi: '2. उत्तोलक सिद्धांत (F₁·d₁ = F₂·d₂), उदाहरण 7.13 व उत्तोलकों की तीनों श्रेणियाँ (तालिका 7.2)',
          },
          conceptStory: {
            en: 'Rigid bar rotating around fixed **Fulcrum (`आलंब F`)** balancing **Load (`भार F₂`)** with **Effort (`आयास F₁`)** (`Activity 7.4 Ruler lift & 7.5 Coin Balance`) obeys **Law of Levers (`Eq 7.15–7.16`)**: **$F_1 \\times d_1 = F_2 \\times d_2$** (`Effort × Effort Arm = Load × Load Arm`), giving **$\\text{Mechanical Advantage} = \\frac{d_1}{d_2} = \\frac{\\text{Effort Arm}}{\\text{Load Arm}}$**! See **Example 7.13:** Seesaw with centre `C`, seats `A, E` at `2 m` and `B, D` at `1 m` -> placing `15 kg` at `A (2 m)` (`15 × 2 = 30`) balances `30 kg` at **`D (1 m)`** (`30 × 1 = 30`)! Placing **hard nut near hinge of scissors** shortens Load Arm $d_2$, multiplying cutting MA cleanly (`Think Q12` & spoon opening tight lid `Think Q11`!).\nBased on what sits in the MIDDLE (`NCERT Table 7.2`), classify EVERY tool instantly:\n1. **Class 1 (`Fulcrum` mid):** Scissors (`कैंची`), Pliers (`पिलास`), Tongs (`संडासी` heavy workshop pincers), Crowbar (`सब्बल`), Beam Balance (`दंड-तुला`), See-saw (`सी-सॉ`). `MA` can be `<1`, `=1`, or `>1`.\n2. **Class 2 (`Load` mid — `Effort arm > Load arm` ALWAYS -> `MA > 1`):** Lemon squeezer/Nutcracker (`नींबू निचोड़नी / सरौता`), Wheelbarrow (`हथठेला`), Bottle opener (`बोतल खोलना`).\n3. **Class 3 (`Effort` mid — `Effort arm < Load arm` ALWAYS -> `MA < 1`):** Kitchen Tongs (`रोटी चिमटा`), Broom (`झाड़ू`), Hammer swing (`हथौड़ी`), Oar/Tweezers (`चप्पू / चिमटी`), Human Forearm — gives speed/reach over small range!',
            hi: '**उत्तोलक (`Lever`)** एक दृढ़ छड़ है जो एक स्थिर **आलंब (Fulcrum)** के परितः घूमकर **आयास (`F₁`)** द्वारा **भार (`F₂`)** उठाती है (`क्रियाकलाप 7.4 पैमाना व 7.5 सिक्का-दंड तुला`): **$F_1 \\times d_1 = F_2 \\times d_2$ (`समीकरण 7.15`)**, अतः **यांत्रिक लाभ (`Eq 7.16`) $= \\frac{\\text{आयास भुजा } (d_1)}{\\text{भार भुजा } (d_2)}$**!\n• **उदाहरण 7.13:** आलंब `C` वाले सी-सॉ झूले में `AC = 2 m, DC = 1 m` है — बाएँ `A (2 m)` पर `15 kg` (`15×2 = 30`) को संतुलित करने हेतु `30 kg` बच्चे को दाएँ **`D (1 m)`** पर बैठना होगा (`30×1 = 30`)! कठोर वस्तु को कैंची के आलंब के पास रखने (`सोचिए 12`) से **भार भुजा कम** होकर बल कई गुना बढ़ता है; और चम्मच के लंबे हत्थे से डिब्बे का ढक्कन खुलना (`सोचिए 11`) भी प्रथम श्रेणी उत्तोलक का उदाहरण है।\n• **उत्तोलक की 3 श्रेणियाँ (`तालिका 7.2` — FLE 1-2-3 नियम से बीच वाला भाग याद करें):**\n  1. **प्रथम श्रेणी (`आलंब F बीच में`, MA `>1, =1, <1`):** संडासी, कैंची, सब्बल, पिलास, दंड-तुला, सी-सॉ झूला, डिब्बा खोलने वाला चम्मच।\n  2. **द्वितीय श्रेणी (`भार L बीच में`, MA सदैव `> 1`):** नींबू निचोड़नी (सरौता), एकपहिया हथठेला (Wheelbarrow), बोतल खोलने की मशीन।\n  3. **तृतीय श्रेणी (`आयास E बीच में`, MA सदैव `< 1`):** रोटी पकड़ने वाला चिमटा, झाड़ू, हथौड़ी, चप्पू (Oar), चिमटी व मानव की कोहनी-बाँह!',
          },
          diagramKey: 'three-lever-classes',
          viralTrick: {
            en: '**FLE 1–2–3 Super Shortcut (Never Forget Which Lever!):** Look strictly at what sits in the **MIDDLE**: **1 = F** (`Fulcrum`), **2 = L** (`Load`), **3 = E** (`Effort`)! So **Wheelbarrow** carries Load in tray middle -> **Class 2**; **Chimta/Tongs** pressed in middle -> **Class 3**; **Scissors/See-saw** pivot in middle -> **Class 1**!',
            hi: '**FLE 1-2-3 वायरल ट्रिक (हमेशा "बीच वाला भाग" देखें):** **1 → F (आलंब बीच में)** | **2 → L (भार बीच में)** | **3 → E (आयास बीच में)**!\n• **कैंची/पिलास/सी-सॉ**: कील (आलंब) बीच → **1st** | **हथठेला/सरौता**: भार/नींबू बीच → **2nd** | **चिमटा/झाड़ू**: हाथ (आयास) बीच → **3rd**!',
          },
          inlinePyqIds: [5, 7, 15, 17],
        },
      ],
    },
  ],

  confusionBreakers: [
    {
      pair: { en: 'Scientific Work vs Biological Fatigue', hi: 'वैज्ञानिक कार्य बनाम शारीरिक थकान' },
      trap: { en: 'Saying a porter holding 30 kg motionless or pushing a wall did huge Physics Work.', hi: 'सिर पर बोझ लिए क्षैतिज चलना या दीवार धकेलने पर थकान को भौतिक कार्य मान लेना।' },
      truth: { en: 'Push wall ($s=0$) OR horizontal carry ($90^\\circ$) -> **Scientific Work = ZERO (`0 J`)**! Fatigue happens inside muscle cells only.', hi: 'विस्थापन $s=0$ (दीवार) या बल-विस्थापन कोण $90^\\circ$ होने पर भौतिकी में **कार्य = शून्य (`0 J`)** होता है!' },
    },
    {
      pair: { en: 'Conservative Gravity vs Friction Dissipation', hi: 'संरक्षी गुरुत्व/स्प्रिंग बनाम घर्षण हानि' },
      trap: { en: 'Thinking friction against a sliding coin builds usable potential energy.', hi: 'खुरदरी मेज पर घर्षण के विरुद्ध किए कार्य को स्थितिज ऊर्जा के रूप में संचित मान लेना।' },
      truth: { en: 'Gravity/Spring/Magnetic forces store PE cleanly; **Friction destroys mechanical energy irreversibly into Heat** (`NCERT p.125`)!', hi: 'केवल गुरुत्व/प्रत्यास्थ/चुंबक बल ऊर्जा संचित करते हैं; **घर्षण ऊर्जा को ऊष्मा में नष्ट** कर देता है।' },
    },
    {
      pair: { en: 'Power (kW / W) vs Energy / Work (kWh / J)', hi: 'शक्ति (`kW / HP`) बनाम ऊर्जा (`kWh / जूल`)' },
      trap: { en: 'Confusing `Kilowatt-hour (kWh)` as a unit of electric Power.', hi: '`किलोवाट-घंटा (kWh)` को "शक्ति" का मात्रक समझ बैठना।' },
      truth: { en: '**Watt / kW / HP (746 W)** measure **Power** (`W/t`); **kWh (`3.6 × 10⁶ J`)** measures **Electrical Energy**!', hi: '**वाट (`W`), `kW`, `HP (746 W)`** = **शक्ति**; **किलोवाट-घंटा (`kWh = 3.6×10⁶ J`)** = **विद्युत ऊर्जा**!' },
    },
    {
      pair: { en: 'Machines Reduce FORCE vs Never Total WORK', hi: 'सरल मशीनें बल घटाती हैं vs कुल कार्य नहीं' },
      trap: { en: 'Believing a long ramp or movable pulley saves Energy/Work!', hi: 'लंबे आनत तल या चल घिरनी से कुल कार्य कम हो जाने की गलतफहमी!' },
      truth: {
        en: 'Ideally $W_{\\text{in}} = W_{\\text{out}}$! Machines shrink **Effort Force** only by requiring a **longer pull distance** (`MA = 2 -> 2× rope length`)!',
        hi: 'आदर्श मशीनों में कुल कार्य सदैव समान रहता है ($W_{\\text{in}} = W_{\\text{out}}$)! कम बल के बदले अधिक दूरी तक खींचना पड़ता है।',
      },
    },
    {
      pair: { en: 'Sandasi (Class 1 Pincers) vs Chimta (Class 3 Tongs)', hi: 'संडासी (`Class 1`) बनाम चिमटा (`Class 3`) — NCERT तालिका 7.2!' },
      trap: { en: 'Grouping metal pincers (संडासी) & kitchen tongs (चिमटा) in the same class.', hi: 'संडासी व चिमटा दोनों को एक ही श्रेणी उत्तोलक मान लेना।' },
      truth: { en: '**संडासी (`Pincers`) has hinge Fulcrum in middle -> Class 1**; **चिमटा (`Tongs`) has finger Effort in middle -> Class 3**!', hi: '**संडासी** में पेंच (आलंब) बीच में → **प्रथम श्रेणी**, जबकि **चिमटा** में हाथ (आयास) बीच में → **तृतीय श्रेणी** (`तालिका 7.2`)!' },
    },
    {
      pair: { en: 'Equal KE of Heavy vs Light Mass', hi: 'समान गतिज ऊर्जा होने पर हल्की बनाम भारी वस्तु का वेग' },
      trap: { en: 'Thinking a 4m mass travels faster or equal to mass m at equal KE.', hi: 'समान गतिज ऊर्जा पर भारी पिंड का वेग अधिक मान लेना।' },
      truth: { en: 'At constant $K = \\frac{1}{2}mv^2$, **$v \\propto 1/\\sqrt{m}$**: Lighter **bullet (`Think Q4: m vs 4m -> 2:1`)** always flies **FASTER**!', hi: 'समान $K$ पर हल्की वस्तु सदैव अधिक वेग से चलती है ($v \\propto 1/\\sqrt{m}$; $m$ बनाम $4m$ में वेग **2:1**)! ' },
    },
  ],

  pioneers: [
    {
      name: { en: 'James Watt (1736–1819)', hi: 'जेम्स वाट (1736–1819)' },
      country: { en: 'Scottish Engineer • SI Unit of Power (W)', hi: 'स्कॉटिश इंजीनियर • शक्ति का SI मात्रक वाट' },
      badge: { en: '1 W = 1 J/s • 1 HP = 746 W', hi: '1 वाट = 1 J/s • 1 HP = 746 W' },
      fact: {
        en: 'Featured in NCERT Bio Box (p.129): Engineered efficient rotary steam engines turning transport wheels; defined **Horsepower (`746 W`)** comparing engines against draft horses.',
        hi: 'NCERT पृष्ठ 129 के अनुसार पहियों को घूर्णन गति देने वाले दक्ष भाप इंजन का आविष्कार किया; इन्हीं के सम्मान में शक्ति का मात्रक **वाट (`W`)** व इंजन तुलना हेतु **1 अश्वशक्ति = 746 W** प्रचलित हुआ।',
      },
    },
    {
      name: { en: 'James Prescott Joule (1818–1889)', hi: 'जेम्स प्रेस्कॉट जूल (1818–1889)' },
      country: { en: 'British Physicist • SI Unit of Work & Energy (J)', hi: 'भौतिक विज्ञानी • कार्य व ऊर्जा मात्रक जूल (J)' },
      badge: { en: 'Mechanical Equivalent of Heat', hi: 'यांत्रिक व ऊष्मीय ऊर्जा तुल्यता' },
      fact: {
        en: 'Paddle-wheel experiments proved mechanical Work turns quantitatively into Thermal Heat—founding Universal Conservation of Energy.',
        hi: 'प्रयोगों से सिद्ध किया कि यांत्रिक कार्य एक निश्चित अनुपात में ऊष्मा ऊर्जा में बदलता है — ऊर्जा संरक्षण सिद्धांत के आधार स्तंभ।',
      },
    },
    {
      name: { en: 'Himalayan Gharat Tradition (Gharat Watermill)', hi: 'हिमालयी घराट परंपरा (पनचक्की ऊर्जा)' },
      country: { en: 'Indian Indigenous Clean Tech • NCERT p.136', hi: 'पारंपरिक भारतीय स्वच्छ ऊर्जा तकनीक • पृ. 136' },
      badge: { en: 'Gravity PE -> Turbine -> Grain Mill', hi: 'पहाड़ी जल स्थितिज ऊर्जा → चक्की' },
      fact: {
        en: 'Highlighted in NCERT Science & Society (Fig 7.36): harnesses mountain stream PE -> KE spinning wooden wheels to grind wheat cleanly without fossil fuel.',
        hi: 'NCERT चित्र 7.36 में वर्णित: पर्वतीय ढलान से गिरते जल की स्थितिज व गतिज ऊर्जा का उपयोग कर बिना ईंधन/बिजली के आटा पीसने की टिकाऊ भारतीय तकनीक।',
      },
    },
  ],

  visualGallery: [
    {
      id: 'vis-tehri-dam',
      figRef: { en: 'Science & Society p.136 (Hydro Potential Energy)', hi: 'चित्र 7.36 संदर्भ (बाँध स्थितिज ऊर्जा → विद्युत)' },
      title: { en: 'Tehri Hydro Dam Reservoir — Massive Gravitational PE Storage', hi: 'टिहरी जलविद्युत बाँध — संचित जल की विशाल स्थितिज ऊर्जा (`mgh`) → विद्युत ऊर्जा' },
      imageUrl: '/ncert-notes/class9-phy-ch7/real/tehri-hydro-dam.webp',
      hotspots: [
        { en: 'Stored headwater holds `mgh` Potential Energy -> races down turbines producing kinetic spin -> electrical power.', hi: 'बाँध में ऊँचाई पर रुका जल `mgh` स्थितिज ऊर्जा संचित रखता है जो टर्बाइन से विद्युत ऊर्जा में बदलता है।' },
      ],
    },
    {
      id: 'vis-roller-coaster',
      figRef: { en: 'Think Q8 & Section 7.4.3 (Mechanical Energy Loop)', hi: 'चित्र 7.22 / ऊर्जा संरक्षण (रोलर कोस्टर लूप)' },
      title: { en: 'Roller Coaster Loop — Live PE ↔ KE Trading Along Track Hills', hi: 'रोलर कोस्टर ट्रैक — ऊँचे शिखर पर अधिकतम PE व निचले लूप पर अधिकतम KE' },
      imageUrl: '/ncert-notes/class9-phy-ch7/real/roller-coaster-energy.webp',
      hotspots: [
        { en: 'Successive hills step lower only because friction sheds mechanical energy as heat!', hi: 'घर्षण के कारण कुछ ऊर्जा ऊष्मा में बदलने से बाद के शिखर क्रमशः छोटे बनाए जाते हैं (सोचिए 8)!' },
      ],
    },
    {
      id: 'vis-gharat-waterwheel',
      figRef: { en: 'Figure 7.36 (Himalayan Gharat / Waterwheel)', hi: 'चित्र 7.36 (परंपरागत पनचक्की / घराट)' },
      title: { en: 'Wooden Overshot Waterwheel — Gravity Stream Turning Stone Grinder', hi: 'लकड़ी का पनचक्की पहिया — बहते पानी की गतिज ऊर्जा से यांत्रिक कार्य' },
      imageUrl: '/ncert-notes/class9-phy-ch7/real/waterwheel-gharat.webp',
      hotspots: [
        { en: 'Direct kinetic push of falling water (B) rotates shaft stone (C) grinding flour sustainably.', hi: 'गिरते जल की धार पहिए (B) को घुमाती है जिससे चक्की का पाट (C) घूर्णन कार्य करता है।' },
      ],
    },
  ],

  activities: [
    {
      num: '7.1',
      title: { en: 'Dry Sand Impact Crater Test From 1 m vs 2 m Drop Height (Fig 7.17)', hi: 'रेत पात्र में 1 m बनाम 2 m ऊँचाई से भारी गेंद गिराकर गड्ढा गहराई जाँच (चित्र 7.17)' },
      materials: { en: 'Heavy steel/metal ball + deep tray filled evenly with loose dry sand', hi: 'भारी धातु की गेंद व सूखी समतल रेत से भरा चौड़ा पात्र' },
      steps: {
        en: '1. Drop heavy ball cleanly from `1 m` onto dry sand -> measure crater depth.\n2. Drop same ball from `2 m` on untouched sand -> compare crater depth!',
        hi: '1. गेंद को रेत से `1 m` ऊँचाई से गिराकर बने गड्ढे की गहराई देखें।\n2. उसी गेंद को नई जगह पर `2 m` ऊँचाई से गिराकर दोनों गड्ढों की गहराई की तुलना करें।',
      },
      examTakeaway: { en: 'Higher drop height (`2 m vs 1 m`) packs **DOUBLE Potential Energy ($mgh$)** -> converts to double Kinetic Energy pushing deeper crater into sand!', hi: '`2 m` ऊँचाई पर **स्थितिज ऊर्जा (`mgh`) दोगुनी** होने से रेत में गड्ढा भी अधिक गहरा बनता है!' },
      predictQuestion: {
        prompt: { en: 'If an identical ball is dropped from 3 m vs 1 m onto soft sand, how much Gravitational PE did it hold just before release?', hi: 'यदि समान गेंद को 1 m के बजाय 3 m ऊँचाई से छोड़ा जाए, तो छोड़ते समय उसकी स्थितिज ऊर्जा कितने गुना होगी?' },
        options: { en: ['Same PE', '3 Times PE (PE ∝ h)', '9 Times PE'], hi: ['समान ऊर्जा', '3 गुना स्थितिज ऊर्जा (PE ∝ h)', '9 गुना ऊर्जा'] },
        correctIndex: 1,
        reason: { en: 'Gravitational Potential Energy $U = mgh \\implies$ for equal mass & $g$, PE rises linearly with height ($3\\times$)!', hi: 'समान द्रव्यमान के लिए $PE = mgh$, अतः ऊँचाई 3 गुना करने पर स्थितिज ऊर्जा भी **3 गुना** होती है!' },
      },
    },
    {
      num: '7.2',
      title: { en: 'Simple Pendulum Height Conservation Check (`P <-> Q <-> R`, Fig 7.20)', hi: 'सरल लोलक दोलन में PE ↔ KE संरक्षण व क्षैतिज स्तर जाँच (चित्र 7.20)' },
      materials: { en: 'Simple pendulum bob + white paper line behind bob marking release height P', hi: 'सरल लोलक, स्टैंड व पीछे ऊँचाई की क्षैतिज रेखा वाला सफेद कागज' },
      steps: {
        en: 'Mark horizontal start height P above resting bob Q; pull bob to P & release calmly watching opposite peak R over early swings.',
        hi: 'संतुलन बिंदु Q के ऊपर बिंदु P ऊँचाई की रेखा खींचकर गोलक को P से छोड़ें व प्रारंभिक दोलनों में विपरीत सिरे R की ऊँचाई देखें।',
      },
      examTakeaway: { en: 'At extreme peaks `P` & `R`, `KE = 0` & `PE = mgh`; at lowest arc `Q`, `PE = 0` & `KE = max`! Air drag slowly dampens peak height.', hi: 'चरम बिंदुओं `P` व `R` पर **$KE=0, PE=\\text{अधिकतम}$** तथा तल `Q` पर **$PE=0, KE=\\text{अधिकतम}$**; वायु-घर्षण से अंततः दोलन रुकते हैं।' },
      predictQuestion: {
        prompt: { en: 'At the exact lowest midpoint Q of an oscillating pendulum swing, which statement holds true?', hi: 'दोलन करते सरल लोलक के ठीक निचले मध्य बिंदु Q पर कौन-सा कथन सत्य है?' },
        options: { en: ['Both PE & KE are zero', 'Potential Energy is maximum, KE = 0', 'Kinetic Energy is MAXIMUM, PE = 0 (at ref)'], hi: ['PE व KE दोनों शून्य', 'स्थितिज ऊर्जा अधिकतम व KE = 0', 'गतिज ऊर्जा अधिकतम एवं स्थितिज ऊर्जा शून्य (संदर्भ तल)'] },
        correctIndex: 2,
        reason: { en: 'Every bit of initial $mgh$ potential energy turns into maximum speed Kinetic Energy right at the lowest point Q!', hi: 'निचले बिंदु Q पर संपूर्ण स्थितिज ऊर्जा गतिज ऊर्जा में बदल चुकी होती है, अतः चाल व KE यहाँ अधिकतम होते हैं!' },
      },
    },
    {
      num: '7.3',
      title: { en: 'Spring-Balance Ramp Angle vs Force Needed (`Inclined Plane`, Fig 7.27)', hi: 'कमानीदार तुला से आनत तल का कोण घटाकर आवश्यक बल मापना (चित्र 7.27)' },
      materials: { en: '1.5 m smooth plank, toy cart, spring balance, book stack height 0.5 m', hi: '1.5 m चिकना पटरा, खिलौना गाड़ी, कमानीदार तुला व किताबों का 0.5 m ढेर' },
      steps: {
        en: 'Compare spring reading: (1) Lifting cart straight up `0.5 m`, (2) Pulling along steep plank, (3) Pulling along longer gentler low-angle plank.',
        hi: 'कमानीदार तुला से खिलौना गाड़ी को (1) सीधे ऊपर `0.5 m` उठाने, (2) खड़ी ढलान व (3) कम ढलान लंबे पटरे पर खींचने का बल नापें।',
      },
      examTakeaway: { en: 'Lower slope angle reduces Effort needed ($F\' = mgh/L$) while pulling farther, keeping ideal total Work **$mgh$ CONSTANT**!', hi: 'कोण कम करने पर **कम बल (अधिक यांत्रिक लाभ)** से वही भार ऊपर पहुँचता है, किंतु अधिक दूरी तक खींचना पड़ता है (कुल कार्य नियत)!' },
      predictQuestion: {
        prompt: { en: 'Making a truck loading ramp LONGER for the same vertical 2 m platform height changes what?', hi: 'समान 2 m ऊँचाई के चबूतरे पर चढ़ने के लिए रैंप की लंबाई 4 m से बढ़ाकर 8 m करने पर क्या होगा?' },
        options: { en: ['Effort doubles & Work halves', 'Effort HALVES, Mechanical Advantage doubles (Work stays same!)', 'Work done doubles cleanly'], hi: ['आयास दोगुना व कार्य आधा', 'आयास आधा व यांत्रिक लाभ दोगुना (कुल कार्य अपरिवर्तित!)', 'किया गया कार्य दोगुना'] },
        correctIndex: 1,
        reason: { en: '$MA = L/h$ rises from $4/2=2$ to $8/2=4$ -> cutting effort in half, while $mgh$ Work stays unchanged!', hi: '$MA = L/h$ दोगुना होने से आवश्यक बल आधा रह जाता है, पर कुल कार्य $mgh$ अपरिवर्तित रहता है (`ALP CBT-2 PYQ`)!' },
      },
    },
    {
      num: '7.4',
      title: { en: '30 cm Scale + Pencil Lever Lifting Heavy Stapler Using Small Eraser (Fig 7.31)', hi: 'पेंसिल व पैमाने के उत्तोलक से हल्के रबड़ द्वारा भारी स्टेपलर उठाना (चित्र 7.31)' },
      materials: { en: '30 cm wooden/plastic ruler, pencil fulcrum, 2–3 erasers, heavy stapler', hi: '30 cm लंबा पैमाना, पेंसिल, 2–3 रबड़ एवं भारी स्टेपलर' },
      steps: {
        en: 'Place pencil fulcrum VERY close to the stapler end, then press tiny erasers gently at the long opposite end!',
        hi: 'पेंसिल (आलंब) को पैमाने के एक सिरे (स्टेपलर के निकट) रखकर लंबे विपरीत सिरे पर हल्के रबड़ रखें।',
      },
      examTakeaway: { en: 'Long Effort Arm + Short Load Arm gives **MA > 1**, letting tiny force lift a heavy stapler effortlessly!', hi: 'बड़ी **आयास भुजा** व छोटी **भार भुजा** से हल्के रबड़ भी भारी स्टेपलर उठा लेते हैं (`MA > 1`)!' },
      predictQuestion: {
        prompt: { en: 'A rescue worker uses a crowbar lever to pry a heavy concrete block. Where should the fulcrum brick go?', hi: 'बचाव दल एक लंबी लोहे की छड़ (उत्तोलक) से भारी कंक्रीट स्लैब उठाना चाहता है — आलंब ईंट कहाँ रखनी चाहिए?' },
        options: { en: ['Midway exact', 'Right next to worker hand', 'Very CLOSE to the heavy concrete slab (`short load arm`)'], hi: ['छड़ के ठीक बीच में', 'श्रमिक के हाथ के पास', 'भारी स्लैब के अत्यंत निकट (`कम भार भुजा, बड़ी आयास भुजा`)'] },
        correctIndex: 2,
        reason: { en: 'Placing Fulcrum closest to Load maximizes `Effort Arm / Load Arm` MA ratio (`Group D 2025 Shift 30`)!', hi: 'आलंब स्लैब के पास रखने पर **आयास भुजा / भार भुजा (`MA`) अधिकतम** होकर कम बल से भारी स्लैब उठ जाता है!' },
      },
    },
    {
      num: '7.5',
      title: { en: 'Hanging Ruler Beam-Balance Coin Experiment (`n1·L1 = n2·L2` — Table 7.1)', hi: 'दंड-तुला पर दोनों पलड़ों के सिक्के व आलंब दूरी गुणनफल का सत्यापन (तालिका 7.1)' },
      materials: { en: '50 cm ruler hung at centre string (`Fulcrum`), 2 paper cup pans, identical coins', hi: 'मध्य बिंदु से डोरी द्वारा लटका 50 cm पैमाना, 2 कागज के गिलास व एकसमान सिक्के' },
      steps: {
        en: 'Keep `1` coin on left pan (`L1`); balance `2, 4, 8` coins on right pan by sliding right pan closer to fulcrum (`L2`), recording `n1·L1 vs n2·L2` in Table 7.1.',
        hi: 'बाएँ पलड़े में `1` सिक्का व दाएँ में क्रमशः `2, 4, 8` सिक्के रखकर दाएँ पलड़े को आलंब की ओर खिसकाते हुए क्षैतिज संतुलन दूरी $L_2$ तालिका 7.1 में नोट करें।',
      },
      examTakeaway: { en: 'In every balanced case, **$\\mathbf{n_1 \\times L_1 = n_2 \\times L_2}$** (`Effort × Effort Arm = Load × Load Arm`) holds exactly!', hi: 'हर संतुलित अवस्था में **$n_1 \\times L_1 = n_2 \\times L_2$ (`आयास × आयास भुजा = भार × भार भुजा`)** बिल्कुल बराबर आता है!' },
      predictQuestion: {
        prompt: { en: 'A 15 kg child sits 2 m left of a seesaw pivot. Where must a 30 kg friend sit on the right to balance (`Ex 7.13`)?', hi: 'एक झूले के आलंब से `2 m` बाईं ओर `15 kg` का बच्चा बैठा है — `30 kg` वाले बच्चे को दाईं ओर कहाँ बैठना होगा?' },
        options: { en: ['2 m from pivot', '1 m from pivot (`15×2 = 30×1`)', '4 m from pivot'], hi: ['2 m दूर', '1 m दूर (`15×2 = 30×1`)', '4 m दूर'] },
        correctIndex: 1,
        reason: { en: 'Lever balance $n_1 L_1 = n_2 L_2 \\implies 15 \\times 2 = 30 \\times d_2 \\implies d_2 = \\mathbf{1\\text{ m}}$!', hi: 'संतुलन नियम $15 \\times 2 = 30 \\times L_2 \\implies L_2 = \\mathbf{1\\text{ m}}$ (`NCERT उदाहरण 7.13`)!' },
      },
    },
  ],

  tables: [
    {
      id: 'table-7-work-signs',
      title: { en: 'Work Done Sign Scenarios (+, −, Zero) — Complete NCERT Matrix', hi: 'वैज्ञानिक कार्य के सभी परीक्षा उदाहरण (धनात्मक, ऋणात्मक व शून्य)' },
      headers: {
        en: ['Work Type', 'Force vs Displacement Angle / State', 'Concrete Example'],
        hi: ['कार्य का प्रकार', 'बल व विस्थापन की स्थिति', 'प्रत्यक्ष NCERT व CBT उदाहरण'],
      },
      rows: [
        [{ en: 'Positive (`+W`)', hi: 'धनात्मक कार्य (`+W`)' }, { en: 'Displacement strictly IN force direction (`0°`)', hi: 'बल की ही दिशा में विस्थापन (`0°`)' }, { en: 'Pushing wheelchair, lifting bag UP, free-fall gravity work', hi: 'डंबल ऊपर उठाना, पहिएदार कुर्सी धकेलना, गिरती गेंद पर गुरुत्व' }],
        [{ en: 'Negative (`−W`)', hi: 'ऋणात्मक कार्य (`−W`)' }, { en: 'Force OPPOSES displacement (`180°`)', hi: 'बल विस्थापन के ठीक विपरीत (`180°`)' }, { en: 'Goalkeeper stopping ball (`−30 J`), Friction, Gravity on upward throw', hi: 'गोलकीपर (`−30 J`), ब्रेक/घर्षण, ऊपर फेंकी गेंद पर गुरुत्व' }],
        [{ en: 'Zero (`0 J`)', hi: 'शून्य कार्य (`0 J`)' }, { en: '$F=0$ OR $s=0$ OR **Perpendicular (`90°`)**', hi: '$F=0$ या $s=0$ या **लंबवत (`90°`)**' }, { en: 'Pushing concrete wall, holding barbell still, porter walking horizontal', hi: 'दीवार धकेलना, भार स्थिर पकड़ना, क्षैतिज सतह पर बोझ ले चलना' }],
      ],
    },
    {
      id: 'table-7-transformations',
      title: { en: 'NCERT Exercise Q4 — Energy Conversions Across 9 Everyday Devices', hi: 'NCERT अभ्यास प्रश्न 4 — 9 दैनिक उपकरणों व घटनाओं में ऊर्जा रूपांतरण' },
      headers: {
        en: ['Device / Phenomenon', 'Input Energy Form', 'Converted Output Form(s)'],
        hi: ['उपकरण / घटना', 'प्रारंभिक (इनपुट) ऊर्जा', 'परिवर्तित (आउटपुट) ऊर्जा'],
      },
      rows: [
        [{ en: 'Truck climbing hill / Waterfall / Dam', hi: 'पहाड़ी चढ़ता ट्रक / बाँध से गिरता जल' }, { en: 'Chemical Fuel / Gravitational PE', hi: 'ईंधन रासायनिक / जल स्थितिज (`mgh`)' }, { en: 'Gravitational PE (`hill`) / KE -> Electricity (`dam`)', hi: 'स्थितिज ऊर्जा (ट्रक) / गतिज → विद्युत (बाँध)' }],
        [{ en: 'Unwinding clock spring / Solar panel', hi: 'घड़ी की स्प्रिंग / सौर-पैनल' }, { en: 'Elastic PE / Light Solar Energy', hi: 'प्रत्यास्थ स्थितिज / सौर विकिरण' }, { en: 'Kinetic gear motion / Electrical Energy', hi: 'गतिज ऊर्जा (सुइयाँ) / विद्युत ऊर्जा' }],
        [{ en: 'Green Leaf Photosynthesis / Matchstick / Cracker', hi: 'प्रकाश-संश्लेषण / माचिस / पटाखा विस्फोट' }, { en: 'Solar / Chemical / Chemical', hi: 'सौर प्रकाश / रासायनिक' }, { en: 'Chemical Glucose / Light + Heat (+ Sound)', hi: 'रासायनिक भोजन / ऊष्मा + प्रकाश (+ ध्वनि)' }],
        [{ en: 'Microphone / Electric Bulb', hi: 'माइक्रोफोन / दीप्त विद्युत बल्ब' }, { en: 'Sound Waves / Electrical Energy', hi: 'ध्वनि ऊर्जा / विद्युत ऊर्जा' }, { en: 'Electrical Signals / Light + Heat', hi: 'विद्युत संकेत / प्रकाश + ऊष्मा' }],
      ],
    },
    {
      id: 'table-7-1-coins',
      title: { en: 'NCERT Table 7.1 — Beam Balance Coin Verification (`n₁ × L₁ = n₂ × L₂`)', hi: 'NCERT तालिका 7.1 — दंड-तुला में सिक्कों की संख्या × दूरी संतुलन नियम' },
      headers: {
        en: ['Left Pan Coins (`n₁`)', 'Left Arm `L₁` (cm)', 'Right Pan Coins (`n₂`)', 'Balanced Right Arm `L₂` (cm)'],
        hi: ['बाएँ पलड़े में सिक्के (`n₁`)', 'बाएँ पलड़े की दूरी `L₁` (cm)', 'दाएँ पलड़े में सिक्के (`n₂`)', 'संतुलित दाईं दूरी `L₂` (cm)'],
      },
      rows: [
        [{ en: '1', hi: '1' }, { en: '24 cm (Example ref)', hi: '24 cm (संदर्भ)' }, { en: '1 coin (`equal`)', hi: '1 सिक्का' }, { en: '24 cm (`1×24 = 1×24`)', hi: '24 cm (`1×24 = 1×24`)' }],
        [{ en: '1', hi: '1' }, { en: '24 cm', hi: '24 cm' }, { en: '2 coins (`2× load`)', hi: '2 सिक्के' }, { en: '12 cm (`1×24 = 2×12`)', hi: '12 cm (`1×24 = 2×12`)' }],
        [{ en: '1', hi: '1' }, { en: '24 cm', hi: '24 cm' }, { en: '4 coins (`4× load`)', hi: '4 सिक्के' }, { en: '6 cm (`1×24 = 4×6`)', hi: '6 cm (`1×24 = 4×6`)' }],
        [{ en: '1', hi: '1' }, { en: '24 cm', hi: '24 cm' }, { en: '8 coins (`8× load`)', hi: '8 सिक्के' }, { en: '3 cm (`1×24 = 8×3`)', hi: '3 cm (`1×24 = 8×3`)' }],
      ],
    },
    {
      id: 'table-7-power-units',
      title: { en: 'Power, Energy & Work Units Master Conversion Table', hi: 'कार्य, शक्ति और ऊर्जा मात्रकों का संपूर्ण रूपांतरण चार्ट' },
      headers: {
        en: ['Physical Quantity', 'SI Unit & Equivalent', 'Exam Conversion Fact'],
        hi: ['भौतिक राशि', 'SI मात्रक व सूत्र', 'अति-महत्वपूर्ण परीक्षा रूपांतरण'],
      },
      rows: [
        [{ en: 'Work & Energy', hi: 'कार्य एवं ऊर्जा (अदिश)' }, { en: 'Joule (`1 J = 1 N·m = 1 kg m²/s²`)', hi: 'जूल (`1 J = 1 N·m = 1 W·s`)' }, { en: 'CGS unit = **erg** (`1 J = 10⁷ erg`)' }],
        [{ en: 'Power', hi: 'शक्ति ($P = W/t$, अदिश)' }, { en: 'Watt (`1 W = 1 J/s`)', hi: 'वाट (`1 W = 1 J/s`, जेम्स वाट)' }, { en: '**1 kW = 1000 W** | **1 Horsepower (HP) = 746 W**' }],
        [{ en: 'Commercial Energy', hi: 'व्यावसायिक विद्युत ऊर्जा' }, { en: 'Kilowatt-hour (**1 kWh** = 1 Unit)', hi: 'किलोवाट-घंटा (**1 kWh** = 1 यूनिट)' }, { en: '**1 kWh = $3.6 \\times 10^6\\text{ J}$** (`3.6 MJ`)' }],
      ],
    },
    {
      id: 'table-7-machines-ma',
      title: { en: 'Simple Machines Summary — Formula & Ideal Mechanical Advantage', hi: 'तीनों सरल मशीनें — यांत्रिक लाभ (MA) सूत्र एवं कार्य सिद्धांत' },
      headers: {
        en: ['Simple Machine', 'MA Formula (`Load / Effort`)', 'Typical MA Value', 'Advantage Mechanism'],
        hi: ['सरल मशीन', 'यांत्रिक लाभ सूत्र', 'MA का मान', 'मुख्य लाभ क्या है?'],
      },
      rows: [
        [{ en: 'Single Fixed Pulley', hi: 'एकल स्थिर घिरनी' }, { en: '`Load / Effort`', hi: 'भार ÷ आयास' }, { en: '**MA = 1**', hi: '**MA = 1**' }, { en: 'Reverses downward pull direction only', hi: 'बल की दिशा सुगम (नीचे खींचना)' }],
        [{ en: 'Movable Pulley', hi: 'चल घिरनी निकाय' }, { en: 'Number of load-bearing ropes (`n`)', hi: 'रस्सी खंडों की संख्या' }, { en: '**MA = 2** (`> 1`)', hi: '**MA = 2** (`> 1`)' }, { en: 'Halves required effort (`pull 2× rope`)', hi: 'आधा आयास बल (दोगुनी रस्सी खींचकर)' }],
        [{ en: 'Inclined Plane (Ramp)', hi: 'आनत तल (ढालू पटरा)' }, { en: '**$MA = L / h$** (`Length / Height`)', hi: '**$L / h$** (`लंबाई ÷ ऊँचाई`)' }, { en: '**MA > 1** (always)', hi: '**MA > 1** (सदैव)' }, { en: 'Smaller slope reduces force linearly', hi: 'कम कोण व लंबी ढलान → कम बल' }],
        [{ en: 'Lever (`F₁d₁ = F₂d₂`)', hi: 'उत्तोलक (छड़ + आलंब)' }, { en: '**$d_1 / d_2$** (`Effort Arm / Load Arm`)', hi: '**आयास भुजा ÷ भार भुजा**' }, { en: 'Class 1: any | C2: **>1** | C3: **<1**', hi: 'C1: कोई भी | C2: **>1** | C3: **<1**' }, { en: 'Amplifies force OR speed/distance', hi: 'बल बढ़ाना (C2) या चाल/दूरी (C3)' }],
      ],
    },
    {
      id: 'table-7-2-levers',
      title: { en: 'NCERT Table 7.2 Complete — Three Classes of Levers (Exact Textbook Examples)', hi: 'NCERT तालिका 7.2 — उत्तोलकों का तीनों श्रेणियों में संपूर्ण वर्गीकरण' },
      headers: {
        en: ['Lever Class', 'What sits in MIDDLE? (`FLE`)', 'MA Range', 'All NCERT Examples (`Memorize Word-by-Word!`)'],
        hi: ['उत्तोलक श्रेणी', 'मध्य बिंदु (`FLE 1-2-3`)', 'यांत्रिक लाभ', 'NCERT पुस्तक में दिए समस्त उदाहरण'],
      },
      rows: [
        [{ en: 'First Class (`Class 1`)', hi: 'प्रथम श्रेणी' }, { en: '**F**ulcrum (`आलंब बीच में`)', hi: '**आलंब (F)** मध्य में' }, { en: '`> 1`, `= 1`, or `< 1`', hi: '`>1`, `=1`, या `<1`' }, { en: 'Pincers (`संडासी`), Scissors (`कैंची`), Crowbar (`सब्बल`), Pliers (`पिलास`), Beam Balance (`दंड-तुला`), See-saw (`सी-सॉ`), Lid spoon (`ढक्कन चम्मच`)', hi: 'संडासी, कैंची, सब्बल, पिलास, दंड-तुला, सी-सॉ झूला, डिब्बे का ढक्कन खोलने वाला चम्मच' }],
        [{ en: 'Second Class (`Class 2`)', hi: 'द्वितीय श्रेणी' }, { en: '**L**oad (`भार बीच में`)', hi: '**भार (L)** मध्य में' }, { en: 'ALWAYS **> 1**', hi: 'सदैव **> 1**' }, { en: 'Lemon squeezer / Nutcracker (`नींबू निचोड़नी`), Wheelbarrow (`एकपहिया हथठेला`), Bottle opener (`बोतल खोलने की मशीन`)', hi: 'नींबू निचोड़नी (सरौता), एकपहिया हथठेला, बोतल खोलने की मशीन' }],
        [{ en: 'Third Class (`Class 3`)', hi: 'तृतीय श्रेणी' }, { en: '**E**ffort (`आयास बीच में`)', hi: '**आयास (E)** मध्य में' }, { en: 'ALWAYS **< 1**', hi: 'सदैव **< 1**' }, { en: 'Kitchen Tongs (`रोटी चिमटा`), Broom (`झाड़ू`), Hammer (`हथौड़ी`), Boat Oar (`चप्पू`), Tweezers (`चिमटी`)', hi: 'चिमटा (रोटी वाला), झाड़ू, हथौड़ी, चप्पू, चिमटी' }],
      ],
    },
  ],

  inTextQuestions: [
    { num: 'Think Q1', q: { en: 'Think Q1: A weightlifter holds a loaded barbell stationary in mid-air (`Fig 6.8`). Is she doing Work holding it still?', hi: 'सोचिए 1: एक भारोत्तोलक ने भारोत्तोलन दंड को हाथों में ऊपर स्थिर पकड़ रखा है। क्या वह इसे स्थिर पकड़े रखने में कोई कार्य करती है?' }, a: { en: '**ZERO mechanical work ($s = 0$)**! Muscle tension causes chemical internal fatigue, yet because barbell displacement is zero, external work on the barbell = `0 J`.', hi: '**शून्य वैज्ञानिक कार्य (`0 J`)!** क्योंकि दंड में कोई विस्थापन ($s=0$) नहीं हो रहा है; शारीरिक थकान केवल आंतरिक मांसपेशीय तनाव से होती है।' } },
    { num: 'Think Q2', q: { en: 'Think Q2: Work done by friction on stacked sliding coins across a rough surface is Positive, Negative, or Zero?', hi: 'सोचिए 2: खुरदरी सतह पर गतिमान सिक्कों के ढेर पर घर्षण द्वारा किया गया कार्य धनात्मक, ऋणात्मक या शून्य होगा?' }, a: { en: '**Negative (`−`)**, because sliding Friction always acts **opposite** to the object’s direction of motion, slowing it down.', hi: '**ऋणात्मक (`−`)**, क्योंकि घर्षण बल सदैव गति/विस्थापन की **विपरीत दिशा** में लगकर वेग कम करता है।' } },
    { num: 'Think Q3', q: { en: 'Think Q3: Can a Carrom striker knock a black coin by sliding gently instead of flicking hard?', hi: 'सोचिए 3: कैरम खेल में क्या स्ट्राइकर को धीरे से सरकाकर दूर रखी काली गोटी को हिलाया जा सकता है? गतिज ऊर्जा से संबंध बताएं।' }, a: { en: 'A fast flicked striker carries higher speed (`K = ½mv²`), enabling enough work on collision to knock targets; gently creeping with near-zero velocity holds negligible kinetic energy.', hi: 'तेज स्ट्राइकर का वेग अधिक होने से उसकी गतिज ऊर्जा ($K = \\frac{1}{2}mv^2$) अधिक होती है, जिससे टकराने पर गोटी को आवश्यक कार्य/ऊर्जा मिल जाती है; बहुत धीमे सरकाने पर कार्य की क्षमता कम रहती है।' } },
    { num: 'Think Q4', q: { en: 'Think Q4: Objects A (`m`) & B (`4m`) possess EQUAL Kinetic Energy. Find the ratio of their speeds ($v_A : v_B$).', hi: 'सोचिए 4: वस्तु A (`m`) व B (`4m`) की गतिज ऊर्जा समान है। उनके वेगो का अनुपात बताएं।' }, a: { en: '$\\frac{1}{2}m v_A^2 = \\frac{1}{2}(4m) v_B^2 \\implies \\frac{v_A^2}{v_B^2} = 4 \\implies v_A : v_B = \\mathbf{2 : 1}$!', hi: '$\\frac{1}{2}mv_A^2 = \\frac{1}{2}(4m)v_B^2 \\implies v_A : v_B = \\mathbf{2 : 1}$ (हल्की वस्तु दोगुनी तेज चलेगी)!' } },
    { num: 'Think Q5', q: { en: 'Think Q5: Does the Kinetic Energy of an object moving at CONSTANT velocity change as its position shifts?', hi: 'सोचिए 5: क्या नियत वेग से गतिमान वस्तु की गतिज ऊर्जा उसकी स्थिति बदलने के साथ परिवर्तित होती है?' }, a: { en: '**NO!** Because $K = \\frac{1}{2}mv^2$ depends ONLY on mass $m$ and speed $v$ (both fixed!), position alone leaves KE unchanged.', hi: '**नहीं!** क्योंकि $K = \\frac{1}{2}mv^2$ केवल द्रव्यमान व वेग पर निर्भर है, स्थिति बदलने पर गतिज ऊर्जा समान रहेगी।' } },
    { num: 'Think Q6', q: { en: 'Think Q6: Does Gravitational PE change when a ball glides horizontally at constant speed vs lifted slowly upward?', hi: 'सोचिए 6: यदि गेंद पृथ्वी सतह के निकट क्षैतिज चलती है तो क्या स्थितिज ऊर्जा बदलती है? और धीरे-धीरे ऊपर उठाने पर?' }, a: { en: 'Horizontal near surface (`Δh = 0`) -> **No PE change**! Slowly lifted upward (`h` rises) -> **PE INCREASES** linearly as $mgh$!', hi: 'क्षैतिज दिशा में ऊँचाई $h$ अपरिवर्तित रहने से स्थितिज ऊर्जा **नहीं बदलती**; किंतु धीरे-धीरे ऊपर उठाने पर $h$ बढ़ने से स्थितिज ऊर्जा **$mgh$ बढ़ती है**!' } },
    { num: 'Think Q7', q: { en: 'Think Q7: Show Mechanical Energy right as a dropped ball (`h`) hits the ground (`Fig 7.19`) STILL equals `mgh`.', hi: 'सोचिए 7: चित्र 7.19 के अनुसार जब गिरती गेंद ठीक भूतल से टकराती है, तब सिद्ध करें कि उसकी यांत्रिक ऊर्जा अभी भी `mgh` है।' }, a: { en: 'At ground ($h\'=0$): $PE = 0$, while $v^2 = 0 + 2gh \\implies KE = \\frac{1}{2}m(2gh) = mgh \\implies \\text{Total} = 0 + mgh = \\mathbf{mgh}$!', hi: 'भूतल पर $PE = 0$, जबकि $v^2 = 2gh \\implies KE = \\frac{1}{2}m(2gh) = mgh \\implies$ कुल यांत्रिक ऊर्जा $= \\mathbf{mgh}$!' } },
    { num: 'Think Q8', q: { en: 'Think Q8: Why does every next hill (`C, D, E`) in a gravity roller coaster (`Fig 7.22`) stand LOWER than previous hills?', hi: 'सोचिए 8: रोलर कोस्टर प्रदर्ष (चित्र 7.22) में प्रारंभिक शीर्ष A से बाद के शीर्ष C, D, E क्रमशः कम ऊँचाई के क्यों होते हैं?' }, a: { en: 'Rolling friction & air drag convert a portion of mechanical energy irreversibly into Thermal Heat—so remaining energy cannot hoist the ball back up to original height `A`!', hi: 'ट्रैक घर्षण व वायु प्रतिरोध से कुछ यांत्रिक ऊर्जा **ऊष्मा** में नष्ट हो जाती है, अतः बची ऊर्जा गेंद को पुनः पहले जितनी ऊँचाई पर नहीं चढ़ा पाती!' } },
    { num: 'Think Q9', q: { en: 'Think Q9: Why are mountain roads constructed as long winding switchbacks instead of straight vertical climbs?', hi: 'सोचिए 9: पहाड़ों पर सड़कें सीधे ऊपर न बनाकर लंबी व कम ढलान वाली घुमावदार क्यों बनाई जाती हैं?' }, a: { en: 'A winding gentler slope acts as an **Inclined Plane (`MA = L/h`)** with vast length $L$, slashing forward engine/pull force sharply so vehicles climb without stalling!', hi: 'घुमावदार सड़क **कम ढलान वाले आनत तल** जैसा कार्य करती है ($MA = L/h$ अधिक होने से वाहन को बहुत कम बल लगाना पड़ता है और फिसलन/लोड घटता है)!' } },
    { num: 'Think Q10', q: { en: 'Think Q10: Why is a slanted staircase far easier to climb to a rooftop than a steep straight vertical ladder (`Fig 7.30`)?', hi: 'सोचिए 10: छत तक चढ़ने के लिए सीधी खड़ी सीढ़ी की तुलना में तिरछी आनत सीढ़ी सुविधाजनक क्यों लगती है?' }, a: { en: 'Total height work $mgh$ is identical, yet sloping staircase spreads work across longer slant length (`Inclined Plane` `MA > 1`), reducing per-step leg force!', hi: 'कुल कार्य ($mgh$) समान होने पर भी आनत सीढ़ी लंबी दूरी तक बल बांटकर आवश्यक चरण-बल (`आयास`) को काफी कम कर देती है।' } },
    { num: 'Think Q11', q: { en: 'Think Q11: Why is opening a tight tin can lid with a long spoon handle (`Fig 7.35`) so easy?', hi: 'सोचिए 11: चित्र 7.35 में चम्मच की सहायता से डिब्बे का कसा ढक्कन खोलना सरल क्यों होता है?' }, a: { en: 'The spoon serves as a **Class-1 Lever** pivoting on the can rim (`Fulcrum`): long handle (`Effort arm`) vastly exceeds short lip tip (`Load arm`), multiplying force (`MA >> 1`)!', hi: 'चम्मच यहाँ **प्रथम श्रेणी उत्तोलक** बनती है — डिब्बे का किनारा आलंब व लंबी डंडी बड़ी आयास भुजा होने से थोड़ा बल ढक्कन पर कई गुना बड़ा बल लगाता है!' } },
    { num: 'Think Q12 & 13', q: { en: 'Think Q12 & Q13: Why tuck thick cardboard close to Scissors pivot, AND why do real machines NEVER run forever perpetually?', hi: 'सोचिए 12 व 13: कठोर वस्तु को कैंची के आलंब के पास क्यों रखते हैं, तथा बिना ईंधन सदा चलने वाली मशीन संभव क्यों नहीं?' }, a: { en: '**(12)** Near Fulcrum shrinks Load Arm $d_2$, boosting mechanical cutting force $d_1/d_2$! **(13)** Friction/air resistance drains energy continually as Heat; without fresh input Work, motion dies down (`Law of Conservation of Energy`).', hi: '**(12)** आलंब के पास रखने से भार भुजा घटती है व बल बढ़ता है। **(13)** घर्षण से यांत्रिक ऊर्जा लगातार ऊष्मा में क्षय होती है, अतः बिना बाह्य ऊर्जा कोई मशीन अनंत काल नहीं चल सकती।' } },
  ],

  exercises: [
    { num: 1, q: { en: 'Ex Q1: True/False: (i) Force without motion does Work. (ii) Lifting bucket vertically is +ve Work. (iii) Work & Energy share Joule. (iv) Stretched rubber band motionless holds KE. (v) Energy transforms forms.', hi: 'अभ्यास 1 (सत्य/असत्य): (i) बिना गति बल कार्य करता है। (ii) बाल्टी ऊपर उठाना +कार्य। (iii) कार्य व ऊर्जा मात्रक जूल। (iv) स्थिर तने रबड़ में KE होती है। (v) ऊर्जा रूप बदलती है।' }, a: { en: '(i) **False** (`s = 0 -> W = 0`), (ii) **True**, (iii) **True**, (iv) **False** (`Elastic Potential Energy`, not KE!), (v) **True**.', hi: '(i) **असत्य** ($s=0 \implies W=0$), (ii) **सत्य**, (iii) **सत्य**, (iv) **असत्य** (तने रबड़ में **प्रत्यास्थ स्थितिज ऊर्जा** होती है, KE नहीं!), (v) **सत्य**।' } },
    { num: 2, q: { en: 'Ex Q2: Fill Blanks: (i) W = ___ × ___ (along force). (ii) Force of ___ N over 1 m = 1 J. (iii) KE = ___. (iv) PE = ___. (v) ___ of doing work = Power.', hi: 'अभ्यास 2 (रिक्त स्थान): (i) कार्य = __ × __ (दिशा में)। (ii) __ N बल से 1 m = 1 J। (iii) गतिज ऊर्जा = __। (iv) स्थितिज ऊर्जा = __। (v) कार्य करने की __ को शक्ति कहते हैं।' }, a: { en: '(i) **Force (`बल`) × Displacement (`विस्थापन`)**, (ii) **1 N**, (iii) **$\\frac{1}{2}mv^2$**, (iv) **$mgh$**, (v) **Rate (`दर`)**.', hi: '(i) **बल × विस्थापन**, (ii) **1 N**, (iii) **$\\frac{1}{2}mv^2$**, (iv) **$mgh$**, (v) **दर (Rate)**।' } },
    { num: 3, q: { en: 'Ex Q3: At peak height of an upward-thrown ball: which of Force=0, Accel=0, KE=0, PE=max is true?', hi: 'अभ्यास 3: ऊपर फेंकी गेंद अपने उच्चतम बिंदु पर हो तो कौन-सा कथन सही है — (i) F=0, (ii) a=0, (iii) KE=0, (iv) PE अधिकतम?' }, a: { en: '**(iii) Kinetic Energy = ZERO (`v = 0`) AND (iv) Potential Energy = MAXIMUM** (`Force = mg` and `a = g` downward stay non-zero!).', hi: '**(iii) गतिज ऊर्जा शून्य** तथा **(iv) स्थितिज ऊर्जा अधिकतम** दोनों सत्य हैं! (*शीर्ष पर भी गुरुत्व बल $mg$ व त्वरण $g$ शून्य नहीं होते!*)' } },
    { num: 4, q: { en: 'Ex Q4: Energy transformations across (i) uphill truck, (ii) clock spring, (iii) leaf photosynthesis, (iv) dam water, (v) matchstick, (vi) firecracker, (vii) mic, (viii) bulb, (ix) solar cell.', hi: 'अभ्यास 4: 9 स्थितियों (पहाड़ चढ़ता ट्रक, घड़ी स्प्रिंग, प्रकाश-संश्लेषण, बाँध जल, माचिस, पटाखा, माइक्रोफोन, बल्ब, सौर-पैनल) में ऊर्जा रूपांतरण बताएं।' }, a: { en: '(i) Chemical -> KE+PE, (ii) Elastic PE -> KE, (iii) Light -> Chemical, (iv) PE -> KE -> Electricity, (v) Chemical -> Heat+Light, (vi) Chemical -> Heat+Light+Sound, (vii) Sound -> Electrical, (viii) Electrical -> Light+Heat, (ix) Solar Light -> Electrical.', hi: '(i) रासायनिक→PE+KE, (ii) प्रत्यास्थ PE→KE, (iii) सौर→रासायनिक, (iv) PE→KE→विद्युत, (v) रासायनिक→ऊष्मा+प्रकाश, (vi) रासायनिक→ऊष्मा+प्रकाश+ध्वनि, (vii) ध्वनि→विद्युत, (viii) विद्युत→प्रकाश+ऊष्मा, (ix) सौर→विद्युत।' } },
    { num: 5, q: { en: 'Ex Q5: Student (`50 kg`) reaches rooftop `72.5 m` high (`g=10`): (i) by Lift, (ii) by Stairs. Compare PE gain & path dependence.', hi: 'अभ्यास 5: `50 kg` विद्यार्थी `72.5 m` ऊँची छत पर (`g=10`): (i) लिफ्ट व (ii) सीढ़ियों से पहुँचे तो दोनों स्थितिज ऊर्जा वृद्धि व पथ निर्भरता बताएं।' }, a: { en: '**(i) Lift PE** $= 50 \\times 10 \\times 72.5 = \\mathbf{36,250\\text{ J}}$. **(ii) Stairs PE** $= \\mathbf{36,250\\text{ J}}$ identically! **(iii)** Gravitational PE change depends ONLY on vertical height gain, **independent of path taken**!', hi: 'लिफ्ट व सीढ़ियाँ **दोनों में बराबर वृद्धि $= 50 \\times 10 \\times 72.5 = \\mathbf{36,250\\text{ J}}$**! इससे सिद्ध होता है कि स्थितिज ऊर्जा **तय रास्ते पर नहीं, केवल ऊँचाई पर निर्भर** करती है।' } },
    { num: 6, q: { en: 'Ex Q6: Crane lifts `m` to 10th floor in time `t`, then lifts `m` to 20th floor in `2t`. Extra Energy & Power needed?', hi: 'अभ्यास 6: एक क्रेन `m` द्रव्यमान को `t` समय में 10वें तल तक और `2t` समय में 20वें तल तक उठाती है। अतिरिक्त ऊर्जा व शक्ति बताएं।' }, a: { en: 'Height doubles (`20th = 2×10th`) -> Energy **DOUBLES (`2×mgh`, `+100%` extra)**. Since time also doubles (`2t`), Power $P = \\frac{2E}{2t} = \\frac{E}{t}$ stays **EXACTLY UNCHANGED (`Zero extra Power!`)**!', hi: 'दोगुनी ऊँचाई से **ऊर्जा दोगुनी (अतिरिक्त `+E = mgh`)** चाहिए, किंतु समय भी दोगुना (`2t`) होने से **आवश्यक शक्ति बिल्कुल नहीं बदलती (0 अतिरिक्त शक्ति)**!' } },
    { num: 7, q: { en: 'Ex Q7: Energy hoisting flag using pulley: Factors? Does pulling slowly vs quickly alter Total Work OR Power?', hi: 'अभ्यास 7: घिरनी से झंडा फहराने में ऊर्जा किन कारकों पर निर्भर है? क्या तेज या धीरे खींचने से कार्य या शक्ति बदलती है?' }, a: { en: 'Energy depends on flag mass, gravity & mast height ($mgh$). Pulling faster keeps **Total Work ($mgh$) IDENTICAL**, yet **DOUBLING hoist speed DOUBLES required Power ($P = W/t$)**!', hi: 'ऊर्जा भार व ऊँचाई (`mgh`) पर निर्भर है। धीरे या तेज खींचने पर **कुल कार्य समान** रहता है, परंतु दोगुनी चाल से समय आधा हो जाता है अतः **आवश्यक शक्ति दोगुनी** हो जाएगी!' } },
    { num: 8, q: { en: 'Ex Q8: Day 1: Rider (`60 kg`) + Scooter (`100 kg`) hits velocity `v`. Day 2: Son (`40 kg`) joins hitting same `v`. Fuel ratio?', hi: 'अभ्यास 8: दिन 1 में व्यक्ति (`60 kg`) + स्कूटर (`100 kg`); दिन 2 में पुत्र (`40 kg`) भी बैठकर समान वेग $v$ पाते हैं। ईंधन खपत का अनुपात बताएं।' }, a: { en: 'Fuel $= \\Delta KE = \\frac{1}{2}M_{total}v^2$. Day 1 Mass $= 160\\text{ kg}$; Day 2 Mass $= 200\\text{ kg}$. Ratio $\\frac{E_1}{E_2} = \\frac{160}{200} = \\mathbf{4 : 5}$!', hi: 'गतिज ऊर्जा $\\propto M_{total}$: पहले दिन $= 160\\text{ kg}$, दूसरे दिन $= 200\\text{ kg}$ $\\implies$ ईंधन अनुपात $= 160 : 200 = \\mathbf{4 : 5}$!' } },
    { num: 9, q: { en: 'Ex Q9: Adult (`2W`) balances Child (`W`) on seesaw. Draw / state fulcrum distances relation.', hi: 'अभ्यास 9: सी-सॉ झूले पर वयस्क का भार बच्चे से दोगुना (`2W`) है फिर भी संतुलित है — आलंब से दोनों की दूरी का संबंध बताएं।' }, a: { en: 'By $F_1 d_1 = F_2 d_2 \\implies 2W \\cdot d_{\\text{adult}} = W \\cdot d_{\\text{child}} \\implies$ **Child must sit TWICE as far from fulcrum as the Adult (`d_child = 2 × d_adult`)**!', hi: '$2W \\times d_{\\text{वयस्क}} = W \\times d_{\\text{बच्चा}} \\implies$ **बच्चा आलंब से वयस्क की तुलना में ठीक दोगुनी दूरी पर** बैठेगा!' } },
    { num: 10, q: { en: 'Ex Q10: Ball thrown up at `20 m/s` reaches `19.4 m` (`g=10`): (i) Gravity work signs up & down? (ii) Air drag work (`per kg mass`)?', hi: 'अभ्यास 10: `20 m/s` से ऊपर फेंकी गेंद `19.4 m` तक जाती है (`g=10`) — (i) ऊपर व नीचे गुरुत्व कार्य के चिह्न, (ii) वायु प्रतिरोध कार्य बताएं।' }, a: { en: '**(i)** Going UP: gravity pulls opposite -> **Negative (`−`)**; falling DOWN: **Positive (`+`)**. **(ii)** Initial $K = \\frac{1}{2}m(20)^2 = 200m\\text{ J}$; peak $PE = m(10)(19.4) = 194m\\text{ J} \\implies W_{\\text{air}} = 194m - 200m = \\mathbf{-6m\\text{ Joules}}$ (`−6 J per kg`, opposing flight)!', hi: '**(i)** ऊपर जाते समय गुरुत्व कार्य **ऋणात्मक**, नीचे आते समय **धनात्मक**! **(ii)** प्रारंभिक KE $= 200m\\text{ J}$, शीर्ष पर PE $= 194m\\text{ J} \\implies$ वायु प्रतिरोध कार्य $= \\mathbf{-6m\\text{ J}}$ (प्रति `kg` `-6 J` की हानि)!' } },
    { num: 11, q: { en: 'Ex Q11 (`Fig 7.37 F-s Graph`): `10 kg` block starts with `KE₀ = 180 J`; Force forms trapezium `(0,0) -> (1,50) -> (3,50) -> (4,0)`. Find speeds at `0 m`, `4 m` & whether `a` is ever negative.', hi: 'अभ्यास 11 (`चित्र 7.37 F-s समलंब`): `10 kg` गुटका `KE₀ = 180 J`, बल `(0,0)→(1,50)→(3,50)→(4,0)` हो तो `0 m` व `4 m` पर चाल तथा ऋणात्मक त्वरण जाँचें।' }, a: { en: 'At `0 m`: $\\frac{1}{2}(10)v_0^2 = 180 \\implies v_0 = \\mathbf{6\\text{ m/s}}$. Work $W = \\text{Trapezium Area} = \\frac{1}{2}(4+2) \\times 50 = 150\\text{ J} \\implies K_4 = 180+150 = 330\\text{ J} \\implies v_4 = \\sqrt{66} \\approx \\mathbf{8.12\\text{ m/s}}$. **Acceleration is NEVER negative** (`F` stays positive along motion even while decreasing on `3–4 m`)!', hi: '`0 m` पर $v_0 = \\sqrt{36} = \\mathbf{6\\text{ m/s}}$। समलंब क्षेत्रफल $= \\frac{1}{2}(4+2)\\times 50 = 150\\text{ J} \\implies K_4 = 330\\text{ J} \\implies v_4 = \\sqrt{66} \\approx \\mathbf{8.12\\text{ m/s}}$! त्वरण कहीं भी ऋणात्मक **नहीं** है क्योंकि बल पूरे समय धनात्मक रहा।' } },
    { num: 12, q: { en: 'Ex Q12: Moon gravity = `g/6`. Astronaut throws ball up to `8 m` on Earth; throwing with same speed on Moon reaches?', hi: 'अभ्यास 12: चंद्रमा पर गुरुत्व पृथ्वी का 1/6 है। पृथ्वी पर `8 m` ऊँची फेंकी गई गेंद समान वेग से चंद्रमा पर कितनी ऊँचाई तक जाएगी?' }, a: { en: 'Same launch KE $\\implies mgh_{\\text{Earth}} = m(g/6)h_{\\text{Moon}} \\implies h_{\\text{Moon}} = 6 \\times 8 = \\mathbf{48\\text{ m}}$!', hi: 'समान वेग से दोनों जगह प्रारंभिक KE बराबर $\\implies mg(8) = m(g/6)h_m \\implies h_m = 8 \\times 6 = \\mathbf{48\\text{ m}}$!' } },
    { num: 13, q: { en: 'Ex Q13 (`Fig 7.38 Speed-Time`): `1000 kg` car steady at `35 m/s` (`A->B` `0–1s`), brakes stop `B->C` (`1–3s`). (i) Motion A-B, (ii) KE at A, (iii) Brake Work B-C, (iv) Energy shift?', hi: 'अभ्यास 13 (`चित्र 7.38`): `1000 kg` कार `35 m/s` (`0–1 s`) से `3 s` पर रुकती है — (i) A-B गति, (ii) KE_A, (iii) ब्रेक कार्य B-C, (iv) ऊर्जा रूपांतरण बताएं।' }, a: { en: '**(i)** `A->B`: **Uniform Constant Speed (`35 m/s`)** (`reaction phase`); **(ii)** $K_A = \\frac{1}{2}(1000)(35^2) = \\mathbf{612,500\\text{ J}}$; **(iii)** Brake Work $W = \\Delta K = \\mathbf{-612,500\\text{ J}}$; **(iv)** Converts into **Heat** (and minor Sound)!', hi: '**(i)** A-B: **नियत एकसमान चाल (`35 m/s`)**, **(ii)** $KE_A = \\mathbf{612,500\\text{ J}}$, **(iii)** ब्रेक द्वारा कार्य $= \\mathbf{-612,500\\text{ J}}$, **(iv)** **ऊष्मा** (व ध्वनि) में रूपांतरण!' } },
    { num: 14, q: { en: 'Ex Q14 (`Fig 7.39 Frictionless PE Track`): `0.5 kg` ball starts at `O` (`v=0, PE=30 J`). Curve reads `PE_P = 20 J`, `PE_Q = 30 J`, `PE_R = 40 J`. Find velocities!', hi: 'अभ्यास 14 (`चित्र 7.39`): `0.5 kg` गेंद पर कुल यांत्रिक ऊर्जा `30 J` है; `PE_P=20`, `PE_Q=30`, `PE_R=40 J` पर वेग बताएं!' }, a: { en: 'Total $E = 30\\text{ J}$: **At P** ($PE=20\\text{ J}$): $K = 10\\text{ J} \\implies v_P = \\sqrt{\\frac{20}{0.5}} = \\sqrt{40} \\approx \\mathbf{6.32\\text{ m/s}}$. **At Q** ($PE=30\\text{ J}$): $K=0 \\implies \\mathbf{v_Q = 0\\text{ m/s}}$. **At R** ($PE=40\\text{ J} > 30\\text{ J}$): **Ball CANNOT reach point R!**', hi: 'कुल ऊर्जा `30 J`: **P पर** $KE = 10\\text{ J} \\implies v_P = \\sqrt{40} \\approx \\mathbf{6.32\\text{ m/s}}$; **Q पर** $KE=0 \\implies \\mathbf{v_Q = 0}$; **R (`40 J`) पर कुल ऊर्जा से अधिक होने के कारण गेंद वहाँ नहीं पहुँच सकती!**' } },
    { num: 15, q: { en: 'Ex Q15: `1.5 kg` coconut drops `10 m` onto wet sand (`g=10`): (i) Speed just before impact, (ii) Crater depth if sand average drag = `3000 N`?', hi: 'अभ्यास 15: `1.5 kg` नारियल `10 m` पेड़ से रेत पर गिरता है (`g=10`): (i) टकराने का वेग व (ii) `3000 N` औसत प्रतिरोधी बल पर रेत गड्ढे की गहराई बताएं।' }, a: { en: '**(i)** $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 10} = \\mathbf{14.14\\text{ m/s}}$! **(ii)** Impact KE $= mgh = 1.5 \\times 10 \\times 10 = 150\\text{ J}$. Sand Work $-F\\cdot d = -150 \\implies d = 150/3000 = \\mathbf{0.05\\text{ m (5 cm)}}$!', hi: '**(i)** $v = \\sqrt{2gh} = \\sqrt{200} \\approx \\mathbf{14.14\\text{ m/s}}$! **(ii)** संपूर्ण ऊर्जा `150 J` गड्ढा बनाने में लगी $\\implies d = 150 / 3000 = \\mathbf{0.05\\text{ m (5 cm)}}$!' } },
  ],

  flashcards: [
    { front: { en: 'When is Scientific Work ZERO despite large Force?', hi: 'बड़े बल के बावजूद वैज्ञानिक कार्य शून्य कब होता है?' }, back: { en: 'When displacement s=0 (wall) OR Force ⊥ Displacement (90°)', hi: 'जब विस्थापन s=0 (दीवार) या बल ⊥ विस्थापन (90° कोण) हो!' } },
    { front: { en: 'If car speed TRIPLES, Kinetic Energy becomes?', hi: 'वाहन का वेग 3 गुना करने पर गतिज ऊर्जा कितनी होगी?' }, back: { en: '9 Times (KE = ½mv² ∝ v²)', hi: '9 गुना (K ∝ v²)' } },
    { front: { en: '1 Kilowatt-Hour (`1 Unit`) in Joules?', hi: '1 किलोवाट-घंटा (1 kWh) कितने जूल के बराबर है?' }, back: { en: '3.6 × 10⁶ Joules (1000 W × 3600 s)', hi: '3.6 × 10⁶ जूल (36 लाख जूल!)' } },
    { front: { en: '1 Horsepower (HP) in Watts?', hi: '1 अश्वशक्ति (Horsepower) में कितने वाट?' }, back: { en: '746 Watts (Engines & water pumps)', hi: '746 वाट (वाहन इंजन व पंप क्षमता)' } },
    { front: { en: 'Single Fixed Pulley MA vs Movable Pulley MA?', hi: 'स्थिर घिरनी व चल घिरनी का यांत्रिक लाभ?' }, back: { en: 'Fixed = 1 (reverses direction) | Movable = 2 (halves effort!)', hi: 'स्थिर = 1 (दिशा बदलती है) | चल = 2 (आधा बल लगता है)' } },
    { front: { en: 'Inclined Plane Mechanical Advantage Formula?', hi: 'आनत तल (Inclined Plane) के यांत्रिक लाभ का सूत्र?' }, back: { en: 'MA = Ramp Length (L) / Vertical Height (h) > 1', hi: 'MA = आनत तल लंबाई (L) ÷ ऊँचाई (h) > 1' } },
    { front: { en: 'FLE 1-2-3 Lever Rule: Middle Component?', hi: 'उत्तोलक वर्गीकरण FLE 1-2-3 नियम?' }, back: { en: 'C1: Fulcrum mid | C2: Load mid | C3: Effort mid', hi: '1: आलंब बीच | 2: भार बीच | 3: आयास बीच!' } },
    { front: { en: 'Which class is Scissors vs Wheelbarrow vs Chimta/Broom?', hi: 'कैंची, हथठेला व चिमटा किस श्रेणी के उत्तोलक?' }, back: { en: 'Scissors = C1 | Wheelbarrow = C2 | Chimta/Broom = C3', hi: 'कैंची = प्रथम | हथठेला = द्वितीय | चिमटा/झाड़ू = तृतीय' } },
    { front: { en: 'Speed at bottom of frictionless slide of height h?', hi: 'घर्षण-रहित h ऊँचाई फिसलपट्टी के आधार पर वेग?' }, back: { en: 'v = √(2gh) — independent of mass & shape!', hi: 'v = √(2gh) — द्रव्यमान व आकार से स्वतंत्र!' } },
    { front: { en: 'Area under Force–Displacement (F–s) Graph?', hi: 'बल-विस्थापन (F-s) ग्राफ का क्षेत्रफल क्या देता है?' }, back: { en: 'Total Work Done (W), equal to ΔKE!', hi: 'किया गया कुल कार्य (W) = गतिज ऊर्जा परिवर्तन!' } },
  ],

  pyqBank: [
    {
      id: 1,
      examTag: 'RRB ALP 2025 CBT-2 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'A roller coaster at the top of its track has maximum potential energy. As it descends and speeds up, what principle explains why the sum of its kinetic and potential energies remains constant if we ignore friction and air resistance?',
        hi: 'एक रोलर कोस्टर में उसके ट्रैक के शीर्ष पर अधिकतम स्थितिज ऊर्जा होती है। जैसे-जैसे यह नीचे उतरता है और इसकी गति में वृद्धि होती है, घर्षण और वायु प्रतिरोध की उपेक्षा करने पर इसकी गतिज और स्थितिज ऊर्जा का योग नियत होने के कारण की व्याख्या कौन-सा सिद्धांत करता है?',
      },
      options: {
        en: ['Law of inertia', 'Principle of inertia', 'Law of conservation of energy', 'Principle of superposition'],
        hi: ['जड़त्व का नियम', 'जड़त्व का सिद्धांत', 'ऊर्जा संरक्षण का नियम', 'अध्यारोपण सिद्धांत'],
      },
      correctIndex: 2,
      solution: { en: 'Without external dissipative friction, total Mechanical Energy (KE + PE) remains strictly conserved (NCERT Sec 7.4.3).', hi: 'घर्षण व बाह्य बल अनुपस्थित होने पर यांत्रिक ऊर्जा (KE + PE) नियत अर्थात संरक्षित रहती है।' },
    },
    {
      id: 2,
      examTag: 'RRB ALP 2025 CBT-2 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'When a moving car suddenly applies brakes, its kinetic energy is transformed mainly into which form of energy?',
        hi: 'जब एक गतिमान कार में अचानक ब्रेक लगाया जाता है, तो उसकी गतिज ऊर्जा मुख्यतः किस प्रकार की ऊर्जा में रूपांतरित हो जाती है?',
      },
      options: { en: ['Light energy', 'Sound energy', 'Potential energy', 'Heat energy'], hi: ['प्रकाश ऊर्जा', 'ध्वनि ऊर्जा', 'स्थितिज ऊर्जा', 'ऊष्मा ऊर्जा'] },
      correctIndex: 3,
      solution: { en: 'Braking friction between pads/discs and tyres dissipates Kinetic Energy directly into Heat Energy (NCERT Ex Q13 iv).', hi: 'ब्रेक पैड व पहियों के घर्षण के कारण गतिज ऊर्जा मुख्यतः ऊष्मा ऊर्जा में बदलती है।' },
    },
    {
      id: 3,
      examTag: 'RRB ALP 2025 CBT-2 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'A car of mass 1200 kg accelerates from rest to a speed of 20 m/s on a straight road. If the kinetic energy gained by the car is completely due to the work done by the engine, which of the following best represents the total kinetic energy acquired by the car at this speed?',
        hi: '1200 kg द्रव्यमान वाली एक कार सीधी सड़क पर विरामावस्था से 20 m/s की चाल तक त्वरित होती है। यदि कार द्वारा प्राप्त गतिज ऊर्जा पूर्णतया इंजन द्वारा किए गए कार्य के कारण है तो निम्नलिखित में से कौन-सा, इस गति पर कार द्वारा प्राप्त कुल गतिज ऊर्जा को यथार्थ रूप से दर्शाता है?',
      },
      options: { en: ['480,000 joules', '12,000 joules', '24,000 joules', '240,000 joules'], hi: ['480,000 जूल', '12,000 जूल', '24,000 जूल', '240,000 जूल'] },
      correctIndex: 3,
      solution: { en: 'KE = 0.5 × m × v² = 0.5 × 1200 × 20² = 600 × 400 = 240,000 J.', hi: 'KE = ½ × 1200 × 20² = 600 × 400 = 240,000 J।' },
    },
    {
      id: 4,
      examTag: 'RRB ALP 2025 CBT-2 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'A ramp is used to lift a box to a platform 2 m high. To reduce the effort required, the ramp length is increased from 4 m to 8 m. Assuming negligible friction, what remains unchanged?',
        hi: 'एक रैंप का उपयोग एक बॉक्स को 2 m ऊँचे चबूतरे तक उठाने के लिए किया जाता है। आवश्यक आयास को कम करने के लिए, रैंप की लंबाई 4 m से बढ़ाकर 8 m कर दी जाती है। घर्षण को नगण्य मानते हुए, निम्नलिखित में से कौन-सा अपरिवर्तित रहता है?',
      },
      options: {
        en: ['The mechanical advantage', 'The work done in raising the box', 'The force required', 'The distance moved along the ramp'],
        hi: ['यांत्रिक लाभ', 'बॉक्स को ऊपर उठाने में किया गया कार्य', 'अभीष्ट बल', 'रैंप के अनुदिश तय की जाने वाली दूरी'],
      },
      correctIndex: 1,
      solution: { en: 'Ideally Work W = mgh stays identical for height 2 m; MA doubles (4/2 -> 8/2) and Effort halves (NCERT Note p.131).', hi: 'घर्षण नगण्य होने पर बॉक्स को 2 m ऊँचाई तक उठाने में कुल कार्य (mgh) अपरिवर्तित रहता है; केवल बल घटता व यांत्रिक लाभ बढ़ता है।' },
    },
    {
      id: 5,
      examTag: 'RRB ALP 2025 CBT-2 Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'A boy uses a wheelbarrow to carry sand. The wheel acts as the pivot, the sand is placed in the tray, and the boy lifts the handles. In this arrangement, the sand represents ________.',
        hi: 'एक लड़का बालू (sand) ढोने के लिए एकपहिया ठेले का उपयोग करता है। पहिया, धुराग्र के रूप में कार्य करता है, बालू को ट्रे (tray) में रखा जाता है और लड़का हैंडल को उठाता है। इस व्यवस्था में, बालू ________ को निरूपित करती है।',
      },
      options: { en: ['Effort', 'Fulcrum', 'Load', 'Arm'], hi: ['आयास', 'फलक्रम', 'लोड (भार)', 'भुजा'] },
      correctIndex: 2,
      solution: { en: 'Wheelbarrow is a Class-2 lever (`Table 7.2`): Wheel = Fulcrum, middle sand tray = LOAD, lifted handle = Effort!', hi: 'एकपहिया हथठेला द्वितीय श्रेणी उत्तोलक है: पहिया = आलंब, बीच की बालू = भार (Load), हैंडल = आयास!' },
    },
    {
      id: 6,
      examTag: 'RRB ALP 2025 Shift 10',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'A body of mass 4 kg has a kinetic energy of 72 J. Its speed is:',
        hi: '4 kg द्रव्यमान वाले एक पिंड की गतिज ऊर्जा 72 J है। उसकी चाल ज्ञात कीजिए।',
      },
      options: { en: ['3 m/s', '6 m/s', '9 m/s', '4 m/s'], hi: ['3 m/s', '6 m/s', '9 m/s', '4 m/s'] },
      correctIndex: 1,
      solution: { en: '0.5 × 4 × v² = 72 -> 2v² = 72 -> v² = 36 -> v = 6 m/s.', hi: '½ × 4 × v² = 72 → v² = 36 → v = 6 m/s।' },
    },
    {
      id: 7,
      examTag: 'RRB ALP 2025 Shift 1',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'Which type of lever has the load positioned between the fulcrum and the effort?',
        hi: 'किस प्रकार के उत्तोलक में भार (लोड), आलंब और आयास के बीच स्थित होता है?',
      },
      options: {
        en: ['Third class lever', 'Fourth class lever', 'First class lever', 'Second class lever'],
        hi: ['तृतीय श्रेणी उत्तोलक', 'चतुर्थ श्रेणी उत्तोलक', 'प्रथम श्रेणी उत्तोलक', 'द्वितीय श्रेणी उत्तोलक'],
      },
      correctIndex: 3,
      solution: { en: 'By FLE 1-2-3 rule (`NCERT Table 7.2`), Load (`L`) sitting between Fulcrum & Effort makes it a Second Class lever.', hi: 'FLE 1-2-3 नियम से भार (Load) बीच में होने पर वह द्वितीय श्रेणी का उत्तोलक होता है (जैसे सरौता, हथठेला)।' },
    },
    {
      id: 8,
      examTag: 'RRB ALP 2025 Shift 7',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'A ramp is used to load boxes onto a truck. If the ramp is made longer but the height remains the same, what will happen to the mechanical advantage and why?',
        hi: 'ट्रक में बक्सों को चढ़ाने के लिए रैंप (ramp) का उपयोग किया जाता है। यदि रैंप की लंबाई बढ़ा दी जाए परंतु ऊँचाई अपरिवर्ती रखी जाए, तो यांत्रिक लाभ पर क्या प्रभाव पड़ेगा और क्यों?',
      },
      options: {
        en: [
          'The mechanical advantage increases because the input force is spread over a greater distance',
          'The mechanical advantage decreases because the ramp is shorter',
          'The mechanical advantage decreases because the ramp becomes steeper',
          'The mechanical advantage increases because the ramp is higher',
        ],
        hi: [
          'यांत्रिक लाभ में वृद्धि होगी, क्योंकि इनपुट बल अधिक दूरी में विस्तारित हो जाएगा',
          'यांत्रिक लाभ में कमी होगी, क्योंकि रैंप छोटा हो जाएगा',
          'यांत्रिक लाभ में कमी होगी, क्योंकि रैंप की ढलान और खड़ी हो जाएगी',
          'यांत्रिक लाभ में वृद्धि होगी, क्योंकि रैंप अधिक ऊँचा हो जाएगा',
        ],
      },
      correctIndex: 0,
      solution: { en: 'MA = L / h (Eq 7.13): longer L for fixed h scales up MA and spreads effort cleanly over a gentler incline.', hi: 'MA = L / h होने से लंबाई L बढ़ाने पर यांत्रिक लाभ बढ़ता है व कम बल अधिक दूरी पर वितरित होता है।' },
    },
    {
      id: 9,
      examTag: 'RRB ALP 2025 Shift 8',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'A worker uses a pulley system to lift a load vertically upwards with a constant speed. If the effort applied is 100 N and the load is 200 N, which statement best describes the system?',
        hi: 'कोई श्रमिक एक घिरनी निकाय का उपयोग करके एक भार (लोड) को अपरिवर्ती चाल से ऊर्ध्वाधर ऊपर की ओर उठाता है। यदि अनुप्रयुक्त आयास 100 N है और भार 200 N है, तो कौन-सा कथन निकाय का सर्वोत्तम वर्णन करता है?',
      },
      options: {
        en: ['The system is an ideal machine', 'The system has a mechanical advantage of one', 'The system has a mechanical advantage of two', 'The effort is greater than the load'],
        hi: ['निकाय एक आदर्श मशीन है', 'निकाय का यांत्रिक लाभ एक है', 'निकाय का यांत्रिक लाभ दो है', 'आयास, भार से अधिक है'],
      },
      correctIndex: 2,
      solution: { en: 'MA = Load / Effort = 200 N / 100 N = 2 (typical single movable pulley lifting arrangement, NCERT p.130).', hi: 'MA = भार / आयास = 200 / 100 = 2 (चल घिरनी निकाय जैसा)।' },
    },
    {
      id: 10,
      examTag: 'RRB ALP 2025 Shift 9',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'Which situation best illustrates the scientific definition of work done by a force?',
        hi: 'निम्नलिखित में से कौन-सी स्थिति, किसी बल द्वारा किए गए कार्य की वैज्ञानिक परिभाषा को सर्वोत्तम रूप से दर्शाती है?',
      },
      options: {
        en: ['Carrying a bag at constant speed across a level floor', 'Placing a book gently onto a table without sliding it', 'Pushing against a stationary wall with maximum effort', 'A person lifts a box vertically upward against gravity'],
        hi: ['एक समतल फर्श पर अपरिवर्ती चाल से बैग ले जाना', 'एक पुस्तक को खिसकाए बिना धीरे से मेज पर रखना', 'अधिकतम आयास के साथ एक स्थिर दीवार को धक्का देना', 'किसी व्यक्ति द्वारा एक बक्से को गुरुत्व के विरुद्ध ऊर्ध्वाधर ऊपर की ओर उठाना'],
      },
      correctIndex: 3,
      solution: { en: 'Carrying flat = 90° (0 J), stationary wall = s=0 (0 J); lifting box up displaces box along upward applied force!', hi: 'क्षैतिज बैग ले जाना (90°) व दीवार धकेलना (s=0) शून्य कार्य हैं; बक्सा ऊपर उठाने पर बल की दिशा में विस्थापन होता है!' },
    },
    {
      id: 11,
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Power & kWh',
      question: {
        en: 'A heater is rated at 1000 W. If it is used for 2 hours, how much energy does it consume in kilowatt hours?',
        hi: 'एक हीटर 1000 W पर रेटेड है। यदि इसे 2 घंटे के लिए उपयोग किया जाए, तो यह किलोवाट-घंटे में कितनी ऊर्जा की खपत करेगा?',
      },
      options: { en: ['1 kWh', '0.5 kWh', '2 kWh', '3 kWh'], hi: ['1 kWh', '0.5 kWh', '2 kWh', '3 kWh'] },
      correctIndex: 2,
      solution: { en: '1000 W = 1 kW. Energy = 1 kW × 2 h = 2 kWh.', hi: '1000 W = 1 kW → ऊर्जा = 1 kW × 2 घंटे = 2 kWh।' },
    },
    {
      id: 12,
      examTag: 'RRB Group D 2025 Shift 16',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'A machine lifts a load of 600 N using an effort of 150 N. What is the mechanical advantage of the machine?',
        hi: 'एक मशीन 150 N के आयास का उपयोग करके 600 N का लोड उठाती है। मशीन का यांत्रिक लाभ कितना होगा?',
      },
      options: { en: ['2', '3', '5', '4'], hi: ['2', '3', '5', '4'] },
      correctIndex: 3,
      solution: { en: 'Mechanical Advantage = Load / Effort = 600 / 150 = 4 (Eq 7.12).', hi: 'MA = भार / आयास = 600 / 150 = 4।' },
    },
    {
      id: 13,
      examTag: 'RRB Group D 2025 Shift 20',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'A vehicle of mass M travels at velocity V. If its kinetic energy increases by a factor of 9, how much does its velocity change?',
        hi: 'M द्रव्यमान का एक वाहन V वेग से यात्रा करता है। यदि इसकी गतिज ऊर्जा 9 गुना बढ़ जाती है, तो इसके वेग में कितना परिवर्तन होगा?',
      },
      options: {
        en: ['The velocity is quadrupled', 'The velocity is doubled', 'The velocity is increased nine times', 'The velocity is tripled'],
        hi: ['वेग चार गुना हो जाता है', 'वेग दोगुना हो जाता है', 'वेग नौ गुना बढ़ जाता है', 'वेग तीन गुना हो जाता है'],
      },
      correctIndex: 3,
      solution: { en: 'Since KE ∝ v², increasing KE 9× requires velocity to become √9 = 3 times (tripled)!', hi: 'KE ∝ v² होने से ऊर्जा 9 गुना होने पर वेग √9 = 3 गुना (तीन गुना) हो जाता है!' },
    },
    {
      id: 14,
      examTag: 'RRB Group D 2025 Shift 23',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'Which observation would provide the strongest evidence that a machine is a fixed pulley?',
        hi: 'निम्नलिखित में से कौन-सा अवलोकन इस बात का सबसे प्रबल साक्ष्य प्रदान करेगा कि कोई मशीन एक स्थिर घिरनी (fixed pulley) है?',
      },
      options: {
        en: ['The machine stores energy while lifting.', 'The applied force is smaller than the load.', 'The load becomes lighter during lifting.', 'The effort and load move in opposite directions.'],
        hi: ['मशीन को उठाने के दौरान वह ऊर्जा संचित करती है।', 'अनुप्रयुक्त बल, लोड से कम है।', 'लोड को उठाने के दौरान वह हल्का हो जाता है।', 'आयास और लोड विपरीत दिशाओं में गति करते हैं।'],
      },
      correctIndex: 3,
      solution: { en: 'A fixed pulley maintains MA=1 (effort = load), solely pulling DOWN effort to lift UP load in opposite directions (NCERT Sec 7.6.1).', hi: 'स्थिर घिरनी केवल दिशा बदलती है — रस्सी को नीचे खींचने पर भार विपरीत (ऊपर) उठता है!' },
    },
    {
      id: 15,
      examTag: 'RRB Group D 2025 Shift 24',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'A worker is choosing among four levers to lift a heavy concrete block. To reduce the effort required as much as possible, which lever should the worker select?',
        hi: 'एक श्रमिक एक भारी कंक्रीट ब्लॉक को उठाने के लिए चार उत्तोलकों में से किसी एक का चयन कर रहा है। आवश्यक आयास को यथासंभव कम करने के लिए, श्रमिक को किस उत्तोलक का चयन करना चाहिए?',
      },
      options: {
        en: ['Effort arm = 40 cm, Load arm = 10 cm', 'Effort arm = 30 cm, Load arm = 15 cm', 'Effort arm = 20 cm, Load arm = 20 cm', 'Effort arm = 50 cm, Load arm = 25 cm'],
        hi: ['आयास भुजा = 40 cm, लोड भुजा = 10 cm', 'आयास भुजा = 30 cm, लोड भुजा = 15 cm', 'आयास भुजा = 20 cm, लोड भुजा = 20 cm', 'आयास भुजा = 50 cm, लोड भुजा = 25 cm'],
      },
      correctIndex: 0,
      solution: { en: 'MA = Effort arm / Load arm: 40/10 = 4 (largest!) vs 30/15 = 2, 20/20 = 1, 50/25 = 2.', hi: 'MA = आयास भुजा / भार भुजा: 40/10 = 4 सर्वाधिक होने से सबसे कम आयास लगेगा!' },
    },
    {
      id: 16,
      examTag: 'RRB Group D 2025 Shift 29',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'If a force of 1 N displaces an object by 1 m along the line of force, the work done is:',
        hi: 'यदि 1 N के बल द्वारा किसी वस्तु को बल-रेखा के अनुदिश 1 m तक विस्थापित किया जाता है, तो किया गया कार्य क्या होगा?',
      },
      options: { en: ['1 J', '0.1 J', '0.5 J', '10 J'], hi: ['1 J', '0.1 J', '0.5 J', '10 J'] },
      correctIndex: 0,
      solution: { en: 'Definition of 1 Joule (NCERT p.117): 1 J = 1 N × 1 m.', hi: '1 जूल की मानक परिभाषा: 1 N × 1 m = 1 J।' },
    },
    {
      id: 17,
      examTag: 'RRB Group D 2025 Shift 41',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'While operating a lever, which part serves as the fixed point around which the lever rotates?',
        hi: 'एक उत्तोलक को प्रचालित करते समय, निम्नलिखित में से कौन-सा भाग उस नियत बिंदु के रूप में कार्य करता है जिसके परितः उत्तोलक घूमता है?',
      },
      options: { en: ['Fulcrum', 'Effort arm', 'Load', 'Effort'], hi: ['आलंब (Fulcrum)', 'आयास-भुजा (Effort arm)', 'भार (Load)', 'आयास (Effort)'] },
      correctIndex: 0,
      solution: { en: 'Fulcrum is the stationary pivot point supporting the rigid lever bar (NCERT Sec 7.6.3).', hi: 'उत्तोलक जिस स्थिर बिंदु के परितः घूमता है, उसे आलंब (Fulcrum) कहते हैं।' },
    },
    {
      id: 18,
      examTag: 'RRB Group D 2025 Shift 44',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Simple Machines',
      question: {
        en: 'An ideal inclined plane is 20 m long and raises a load through a vertical height of 4 m. Compared to lifting the load straight up, the effort required to move the load up the plane is ________.',
        hi: 'एक आदर्श आनत तल 20 m लंबा है और एक लोड को 4 m की ऊर्ध्वाधर ऊँचाई ऊपर ले जाने के लिए आवश्यक आयास ________ होता है।',
      },
      options: { en: ['One-fifth of the load', 'Equal to the load', 'One-fourth of the load', 'One-half of the load'], hi: ['लोड का 1/5 भाग', 'लोड के बराबर', 'लोड का एक-चौथाई', 'लोड का आधा'] },
      correctIndex: 0,
      solution: { en: 'MA = L / h = 20 / 4 = 5 -> Effort = Load / 5 (one-fifth, Eq 7.13).', hi: 'MA = 20 / 4 = 5 → आवश्यक आयास भार का 1/5वाँ भाग होगा!' },
    },
    {
      id: 19,
      examTag: 'RRB Group D 2025 Shift 44',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'Which of the following is NOT a correct unit of work done?',
        hi: 'निम्नलिखित में से कौन-सा किए गए कार्य का सही मात्रक नहीं है?',
      },
      options: { en: ['newton-meter', 'pascal', 'watt-second', 'joule'], hi: ['न्यूटन-मीटर', 'पास्कल', 'वाट-सेकंड', 'जूल'] },
      correctIndex: 1,
      solution: { en: 'Pascal (N/m²) measures Pressure, whereas N·m, W·s, and Joule all measure Work/Energy!', hi: 'पास्कल (N/m²) दाब का मात्रक है; शेष तीनों (न्यूटन-मीटर, वाट-सेकंड, जूल) कार्य के मात्रक हैं!' },
    },
    {
      id: 20,
      examTag: 'RRB Group D 2025 Shift 48',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'An object moving with kinetic energy 800 J experiences a net work of −600 J. What happens to the object?',
        hi: '800 J की गतिज ऊर्जा वाली किसी गतिशील वस्तु पर −600 J का नेट कार्य किया जा रहा है। वस्तु पर क्या प्रभाव पड़ेगा?',
      },
      options: {
        en: ['It continues with same speed', 'It stops moving', 'It moves with half speed', 'It doubles its speed'],
        hi: ['वह समान चाल से गति करती रहेगी', 'वह गति करना बंद कर देगी', 'वह आधी चाल से गति करेगी', 'इससे उसकी चाल दो गुनी हो जाएगी'],
      },
      correctIndex: 2,
      solution: { en: 'Final KE = 800 + (−600) = 200 J = 1/4 of initial 800 J -> Since KE ∝ v², speed drops to √(1/4) = 1/2 (half speed)!', hi: 'अंतिम KE = 800 − 600 = 200 J (प्रारंभिक का 1/4 भाग) → वेग √(1/4) = आधी चाल रह जाएगी!' },
    },
    {
      id: 21,
      examTag: 'RRB Group D 2025 Shift 6',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'A car with a mass of 1000 kg is moving at a speed of 25 m/s. If the driver applies the brakes and brings the car to a stop, how much kinetic energy is lost during this process?',
        hi: '1000 kg द्रव्यमान वाली एक कार 25 m/s की चाल से गतिमान है। यदि चालक ब्रेक लगाकर कार को रोक देता है, तो इस प्रक्रिया के दौरान कितनी गतिज ऊर्जा नष्ट होती है?',
      },
      options: { en: ['312500 J', '12500 J', '25000 J', '625000 J'], hi: ['312500 J', '12500 J', '25000 J', '625000 J'] },
      correctIndex: 0,
      solution: { en: 'KE lost = 0.5 × 1000 × 25² = 500 × 625 = 312,500 J.', hi: 'नष्ट गतिज ऊर्जा = ½ × 1000 × 625 = 312,500 J।' },
    },
    {
      id: 22,
      examTag: 'RRB Tech Gr-III 2024 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Work & Energy',
      question: {
        en: 'An object with a mass of 10 kg is moving with an initial velocity of 3 m/s and its final velocity becomes 5 m/s. Then the change in its kinetic energy is:',
        hi: '10 kg द्रव्यमान वाली एक वस्तु 3 m/s के आरंभिक वेग से गति कर रही है और इसका अंतिम वेग 5 m/s हो जाता है। तब इसकी गतिज ऊर्जा में परिवर्तन कितना होगा?',
      },
      options: { en: ['160 J', '50 J', '40 J', '80 J'], hi: ['160 J', '50 J', '40 J', '80 J'] },
      correctIndex: 3,
      solution: { en: 'ΔK = 0.5 × 10 × (5² − 3²) = 5 × (25 − 9) = 5 × 16 = 80 J (Eq 7.5).', hi: 'ΔK = ½ × 10 × (5² − 3²) = 5 × 16 = 80 J।' },
    },
    {
      id: 23,
      examTag: 'RRB Tech Gr-III 2024 Shift 3',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Power & kWh',
      question: {
        en: 'What is the value of 1 kWh in Joule (J)?',
        hi: 'जूल (J) में 1 kWh का मान क्या है?',
      },
      options: { en: ['$3.6 \\times 10^5$', '3.6', '$3.6 \\times 10^6$', '$3.6 \\times 10^{-5}$'], hi: ['$3.6 \\times 10^5$', '3.6', '$3.6 \\times 10^6$', '$3.6 \\times 10^{-5}$'] },
      correctIndex: 2,
      solution: { en: '1 kWh = 1000 J/s × 3600 s = 3,600,000 J = 3.6 × 10⁶ J.', hi: '1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ जूल।' },
    },
    {
      id: 24,
      examTag: 'RRB ALP 2025 CBT-2 Trade Shift 2',
      section: 'General Science',
      subject: 'General Science',
      topic: 'NCERT Class 9 Phy Ch 7: Power & kWh',
      question: {
        en: 'An electrical workshop uses 15 lamps of 100 W each for 5 hours daily. If the workshop operates 25 days in a month, what is the total energy consumed in kilowatt-hours (kWh) per month?',
        hi: 'एक विद्युत कार्यशाला में प्रतिदिन 5 घंटे के लिए प्रत्येक 100 W के 15 लैंपों का उपयोग किया जाता है। यदि कार्यशाला एक महीने में 25 दिन कार्य करती है, तो प्रति माह किलोवाट घंटा (kWh) में उपभुक्त कुल ऊर्जा कितनी होगी?',
      },
      options: { en: ['150.0', '187.5', '125.0', '112.5'], hi: ['150.0', '187.5', '125.0', '112.5'] },
      correctIndex: 1,
      solution: { en: 'Units = (15 × 100 W × 5 h × 25 days) / 1000 = 187,500 / 1000 = 187.5 kWh.', hi: 'कुल ऊर्जा = (15 × 100 × 5 × 25) / 1000 = 187.5 kWh।' },
    },
  ],
};
