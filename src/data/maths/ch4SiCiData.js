/**
 * Railway Mathematics Mastery • Chapter 4 (Smart Board Edition)
 * Simple & Compound Interest + Installments
 * SI Engine (RT%), "k-Times" Rule, Two SI Amounts, 4-Method CI Engine (Ratio, Tree, Effective Rate, Difference),
 * Half-Yearly & Quarterly Compounding, 2-Yr & 3-Yr (CI − SI) Diff, CI k^n Time, Grandson Split & Installments.
 * Language: Devanagari Hindi + Standard English Math Terms (Default `hi`) + Pure English (`en`).
 */

export const CH4_SI_CI_DATA = {
  id: 'math-ch4-si-ci',
  chapterNumber: 4,
  subjectId: 'maths',
  subjectLabel: { en: 'Mathematics', hi: 'गणित (हिन्दी Smart Board)' },
  taxonomyChapterName: 'Simple & Compound Interest',
  sourceCode: 'Railway Maths Mastery • Ch 4: Simple & Compound Interest + Installments (Smart Board Edition)',
  blueprintSvgKey: 'ch4-blueprint-mindmap',
  labKey: 'ch4-si-ci',
  labMeta: {
    featureTitle: {
      en: '5-in-1 Interactive Animated SI, CI & Installments Lab',
      hi: '5-in-1 इंटरैक्टिव साधारण व चक्रवृद्धि ब्याज सिम्युलेटर लैब',
    },
    featureSubtitle: {
      en: 'SI k-Times Engine, Live 3-Yr CI Tree, Half-Yr/Quarterly Converter, 2/3-Yr CI−SI Diff & Equal Maturity/Installments.',
      hi: 'SI k-गुना इंजन, लाइव 3-वर्ष ब्याज ट्री, छमाही/तिमाही कन्वर्टर, 2/3-वर्ष अंतर व किस्त लैब।',
    },
  },
  hero: {
    imageUrl: '/maths-notes/ch4-si-ci/hero-si-ci.webp',
    caption: {
      en: 'Ch 4 Smart Board Engine: 3-Year Interest Tree, Ratio Powers, Half-Yearly/Quarterly, CI−SI Diff & Installments.',
      hi: 'अध्याय 4 स्मार्ट बोर्ड: 3-वर्ष गोल्डन ट्री, घन अनुपात, छमाही/तिमाही, 2 व 3 वर्ष CI−SI अंतर व किस्त नियम।',
    },
  },
  metrics: {
    pages: 28,
    modules: 7,
    tables: 5,
    svgLabs: 5,
    vectorPlates: 6,
    typesCount: 10,
    pyqHits: 348,
    pyqsSolved: 35,
  },
  weightageBars: [
    {
      label: { en: '4-Method CI Core (Ratio, Tree, Effective %) & Missing R / T', hi: 'चक्रवृद्धि ब्याज (रेश्यो, ट्री व प्रभावी दर) एवं दर R / समय T ज्ञात करना' },
      pct: 32,
      targetTab: 'concepts',
      targetSectionId: 'mod-2-ci-4method-engine',
      targetPyqTypeId: 'type-4-ci-4method-engine',
    },
    {
      label: { en: 'Half-Yearly, Quarterly Compounding & (CI − SI) 2-Yr / 3-Yr Diff', hi: 'अर्धवार्षिक, तिमाही संयोजन एवं 2-वर्ष व 3-वर्ष (CI − SI) अंतर' },
      pct: 30,
      targetTab: 'concepts',
      targetSectionId: 'mod-4-ci-si-difference',
      targetPyqTypeId: 'type-7-ci-si-difference',
    },
    {
      label: { en: 'Simple Interest (RT%), Two SI Amounts, Bank Gap & Per-Month Trap', hi: 'साधारण ब्याज (RT%), दो मिश्रधन अंतराल व मासिक दर (per month) जाल' },
      pct: 22,
      targetTab: 'concepts',
      targetSectionId: 'mod-1-si-basics-amounts',
      targetPyqTypeId: 'type-2-si-k-times-two-amounts',
    },
    {
      label: { en: 'CI k^n Exponential Times, Grandson Split & Loan Installments', hi: 'CI घात k^n समय नियम ("कितने और वर्ष?"), आयु विभाजन व किस्त (EMI)' },
      pct: 16,
      targetTab: 'concepts',
      targetSectionId: 'mod-6-exponential-equal-split',
      targetPyqTypeId: 'type-9-ci-exponential-times',
    },
  ],
  title: {
    en: 'Ch 4: Simple & Compound Interest + Installments',
    hi: 'अध्याय 4: साधारण एवं चक्रवृद्धि ब्याज (ट्री, रेश्यो व किस्त)',
  },
  subtitle: {
    en: 'Smart Board Class • 7 Rule Modules, 5 Interactive SVG Labs & 35 Verified Real PYQs (2–3 Methods Each)',
    hi: 'स्मार्ट बोर्ड कम्प्लीट क्लास • सभी नियम पॉइंट-टू-पॉइंट + 5 SVG लैब्स + 35 रियल PYQs (2–3 विधियाँ)',
  },
  quickRevision60Sec: [
    {
      title: { en: 'SI Engine & k-Times Rule', hi: 'साधारण ब्याज व k-गुना नियम' },
      targetSectionId: 'mod-1-si-basics-amounts',
      points: {
        en: '• Think `SI% = R × T` directly (e.g. `15% × 3 yr = 45%` ⇒ `Amount = 145%`).\n• Sum becomes `k` times in SI: `R × T = (k − 1) × 100`.\n• Two SI Amounts (`A₁` in `t₁`, `A₂` in `t₂`): Yearly SI $= \\frac{A_2 - A_1}{t_2 - t_1}$ ⇒ Subtract `t₁ × SI` for Principal!',
        hi: '• सदैव सीधे `SI% = R × T` गिनें (जैसे `15% × 3 = 45%` ⇒ मिश्रधन `145%`)।\n• SI में `k`-गुना नियम: `R × T = (k − 1) × 100`।\n• दो मिश्रधन (`A₁, A₂`): `1` वर्ष का SI $= \\frac{A_2 - A_1}{t_2 - t_1}$ ⇒ पहले समय का ब्याज घटाकर मूलधन पाएं!',
      },
    },
    {
      title: { en: '4-Method CI Engine & Tree', hi: 'चक्रवृद्धि ब्याज की 4 प्रमुख विधियाँ' },
      targetSectionId: 'mod-2-ci-4method-engine',
      points: {
        en: '• Ratio Power (`r = a/b`): 2 Yr `(b² : (a+b)²)`; 3 Yr `(b³ : (a+b)³)`.\n• Golden Tree (`3 Yr`): `3a + 3b + c` (`b = r% of a`, `c = r% of b`).\n• Given 2-Yr `SI = 2a` & `CI = 2a + b`: Principal $P = \\frac{a^2}{b}$ in 3 seconds!',
        hi: '• रेश्यो घात: 2 वर्ष में वर्ग व 3 वर्ष में घन (`20% ⇒ 125 : 216`)।\n• 3-वर्ष गोल्डन ट्री: `3a + 3b + c` (`b = a` का `r%`, `c = b` का `r%`)।\n• 2 वर्ष का `SI = 2a` व `CI = 2a + b` दिया हो ⇒ सीधा सूत्र $P = \\frac{a^2}{b}$!',
      },
    },
    {
      title: { en: 'Half-Yr, Quarterly & Diff Rules', hi: 'छमाही, तिमाही व (CI − SI) अंतर' },
      targetSectionId: 'mod-3-half-quarterly-compounding',
      points: {
        en: '• Half-Yearly: Rate `r/2`, Cycles `2n` | Quarterly: Rate `r/4`, Cycles `4n` (`10% × 4 = +46.41%`).\n• 2-Yr Diff: $\\text{Diff}_2 = P\\left(\\frac{r}{100}\\right)^2$ (`10% ⇒ 1%`, `12% ⇒ 1.44%`).\n• 3-Yr Diff: $\\text{Diff}_3 = P\\left(\\frac{r}{100}\\right)^2\\left(3 + \\frac{r}{100}\\right)$ (`20% ⇒ 12.8%`).',
        hi: '• अर्धवार्षिक: दर आधी (`r/2`), समय दोगुना (`2n`) | तिमाही: दर चौथाई (`r/4`), समय चौगुना (`4n`)।\n• 2-वर्ष अंतर: $\\text{Diff}_2 = P\\left(\\frac{r}{100}\\right)^2$ | दर $R = 100\\sqrt{\\frac{\\text{Diff}}{P}}$।\n• 3-वर्ष अंतर: $\\text{Diff}_3 = \\text{Diff}_2 \\times \\left(3 + \\frac{r}{100}\\right)$ (`20% ⇒ 12.8%`)।',
      },
    },
    {
      title: { en: 'Exp Time, Age Split & EMI', hi: 'CI समय घात, आयु विभाजन व किस्त' },
      targetSectionId: 'mod-6-exponential-equal-split',
      points: {
        en: '• CI `k` times in `t` yrs ⇒ `k^m` times in `m × t` yrs. Read carefully if it asks **"how many MORE years"**!\n• Equal Share at Age `T`: Younger : Elder = `1 : (1 + r%)^Δt`.\n• Annual CI Installment: Equalize right-side powers `(b→a+b)`, `(b²→(a+b)²)`!',
        hi: '• CI में `t` वर्ष में `k` गुना ⇒ `m × t` वर्ष में `k^m` गुना। ध्यान दें: **"कितने और वर्ष?"** पूछे तो प्रथम `t` घटाएं!\n• समान राशि विभाजन (अंतर `Δt`): छोटा : बड़ा = `1 : (1 + r%)^Δt`।\n• वार्षिक CI किस्त: दाएं स्तंभ में `(b : b+a)` व `(b² : (b+a)²)` के हर बराबर करें!',
      },
    },
  ],

  sections: [
    {
      id: 'mod-1-si-basics-amounts',
      number: '4.1',
      shortLabel: '4.1 SI & Amounts',
      pyqTypeId: 'type-1-si-basics-per-month',
      diagramKey: 'ch4-si-scaling-times',
      title: {
        en: 'Module 1: Simple Interest (RT%), Two-Amount Principal Lock & Monthly Rate Traps',
        hi: 'मॉड्यूल 1: साधारण ब्याज (RT%), दो मिश्रधनों से मूलधन व मासिक दर (per month) जाल',
      },
      summaryTag: {
        en: 'Total SI% = R × T • Sum Becomes k Times • Yearly Gap (A₂−A₁)/(t₂−t₁) • Monthly vs Annual Trap',
        hi: 'कुल ब्याज = R × T% • k-गुना सूत्र • दो मिश्रधनों का अंतराल • मासिक बनाम वार्षिक जाल',
      },
      boardCards: [
        {
          id: 'card-4-1-1',
          title: {
            en: '1. Effective SI Percentage (R × T%), "Per Month" Trap & k-Times Theorem',
            hi: '1. प्रभावी SI प्रतिशत (R × T%), "मासिक दर" जाल व k-गुना प्रमेय',
          },
          formula: '$$\\text{SI}\\% = R \\times T \\quad|\\quad \\text{Amount} = (100 + R\\,T)\\% \\quad|\\quad k\\text{-Times}: R \\times T = (k - 1)\\times 100$$',
          points: [
            { en: 'Think in % units first: `12.5%` for `2 yrs` = `25%` SI ⇒ Maturity Amount = `125%` of Principal!', hi: 'सदैव प्रतिशत में सोचें: `12.5%` दर से `2` वर्ष का ब्याज = `25%` तथा कुल मिश्रधन = `125%`!' },
            { en: 'Per-Month Trap: "7% PER MONTH for 9 months" means `R × T = 7 × 9 = 63%` straight (NEVER divide `9` by `12`!).', hi: 'मासिक दर जाल: यदि दर `7% प्रति माह` और समय `9 माह` हो, तो `12` से भाग न दें — सीधे `7 × 9 = 63%` लगाएं!' },
            { en: 'Sum Doubles/Triples in SI: Money doubles (`k=2`) ⇒ Earned SI = `100%` ⇒ `T = 100 / R` (`20% ⇒ 5 yrs`, `8 yrs ⇒ 12.5%`).', hi: 'SI दोगुना (`2×`): ब्याज `100%` के बराबर ⇒ `R × T = 100` (`20%` पर `5` वर्ष, `8` वर्ष में `12.5%`)!' },
          ],
          example: {
            title: { en: 'Tech Gr-III S21 PYQ: Sum at 12½% p.a. SI amounts to ₹8,250 after 2 yrs. 1-yr SI?', hi: 'Tech Gr-III S21: 12½% वार्षिक SI पर कोई राशि 2 वर्ष में ₹8,250 हो जाती है। 1 वर्ष का ब्याज?' },
            basic: {
              en: 'Total SI for 2 yrs $= 2 \\times 12.5\\% = 25\\%$. Amount $= 125\\% = 8250$.\n$1\\% = 8250 / 125 = 66 \\implies 1\\text{-yr SI } (12.5\\%) = 66 \\times 12.5 =$ **₹825**.',
              hi: '`2` वर्ष ब्याज `= 25%` ⇒ मिश्रधन `125% = 8250` ⇒ `100% = 6600`।\n`1` वर्ष ब्याज (`12.5%`) $= 6600 \\div 8 =$ **₹825**।',
            },
            smart: {
              en: 'Zero-Principal Trick: `125%` (`10 parts of 12.5%`) `= ₹8,250`. Ask is `12.5%` (`1 part`) ⇒ `8250 ÷ 10 =` **₹825** in 1 sec!',
              hi: 'बिना मूलधन निकाले 1-सेकंड कट: `125%` (`10 भाग`) `= ₹8,250`। पूछा गया `12.5%` केवल `1 भाग` है ⇒ सीधे `÷ 10 =` **₹825**!',
            },
          },
        },
        {
          id: 'card-4-1-2',
          title: {
            en: '2. Two SI Amounts in Different Years (A₁ in t₁ yrs, A₂ in t₂ yrs) & Two Banks Gap',
            hi: '2. अलग-अलग वर्षों के दो SI मिश्रधनों से मूलधन/दर व दो बैंकों के ब्याज का अंतर',
          },
          formula: '$$1\\text{-Year SI} = \\frac{A_2 - A_1}{t_2 - t_1} \\quad|\\quad P = A_1 - (t_1 \\times \\text{SI}_{1\\text{yr}}) \\quad|\\quad \\text{Bank Gap} = P \\cdot \\Delta R \\cdot T$$',
          points: [
            { en: 'In SI, annual interest NEVER changes! Subtract two amounts directly to lock exact 1-Year Simple Interest.', hi: 'साधारण ब्याज हर वर्ष समान रहता है — दोनों मिश्रधनों के अंतर में समय-अंतर से भाग देने पर तुरंत `1` वर्ष का ब्याज मिलता है।' },
            { en: 'Two Banks Comparison: Do NOT compute bank A & B interests separately — multiply Principal directly by `(R₂ − R₁) × T%`!', hi: 'दो बैंकों का अंतर: दोनों ब्याज अलग-अलग कभी न निकालें — सीधे `मूलधन × (दर अंतर) × समय %` निकालें!' },
          ],
          example: {
            title: { en: 'ALP CBT-2 S2 PYQ: SI sum amounts to ₹21,500 in 5 yrs and ₹26,000 in 8 yrs. Principal?', hi: 'ALP CBT-2 S2: साधारण ब्याज पर धनराशि 5 वर्ष में ₹21,500 व 8 वर्ष में ₹26,000 हो जाती है। मूलधन?' },
            basic: {
              en: '3-yr SI $= 26,000 - 21,500 = 4,500 \\implies$ 1-yr SI $= 1,500$.\n5-yr SI $= 7,500 \\implies P = 21,500 - 7,500 =$ **₹14,000**.',
              hi: '`3` वर्ष का SI $= 26,000 - 21,500 = 4,500$ ⇒ `1` वर्ष का `= 1,500`।\n`5` वर्ष का ब्याज `= 7,500` ⇒ मूलधन $= 21,500 - 7,500 =$ **₹14,000**।',
            },
            smart: {
              en: 'Oral Step: Gap `3 yrs → 4,500` means `+1,500/yr`. Simply pull back 5 steps: `21.5k − 7.5k =` **₹14,000**!',
              hi: 'मौखिक नियम: `3` साल में `+4,500` अर्थात् `+1,500/वर्ष`। `5` वर्ष पीछे आएं: `21,500 − 7,500 =` **₹14,000**!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-2-ci-4method-engine',
      number: '4.2',
      shortLabel: '4.2 CI 4-Method',
      pyqTypeId: 'type-4-ci-4method-engine',
      diagramKey: 'ch4-ci-4methods-tree',
      title: {
        en: 'Module 2: 4-Method CI Engine (Ratio, Tree, Effective Rate & Missing R/T)',
        hi: 'मॉड्यूल 2: चक्रवृद्धि ब्याज (CI) की 4 विधियाँ — रेश्यो, गोल्डन ट्री, प्रभावी दर व R/T निकालना',
      },
      summaryTag: {
        en: 'Ratio Powers b²/(b+a)² & b³/(b+a)³ • Tree 3a+3b+c • Successive % • Square/Cube Root for Rate & Time',
        hi: 'रेश्यो वर्ग/घन • ट्री 3a+3b+c • प्रभावी दर % • वर्गमूल/घनमूल से दर R व समय T',
      },
      boardCards: [
        {
          id: 'card-4-2-1',
          title: {
            en: '1. Choose Fastest of 4 CI Methods: Ratio Powers vs Effective % vs Golden Tree',
            hi: '1. प्रश्न देख कर CI की सही विधि चुनें (रेश्यो घात vs प्रभावी दर % vs 3-वर्ष ट्री)',
          },
          formula: '$$2\\text{ Yr Tree}: 2a + b \\quad|\\quad 3\\text{ Yr Tree}: 3a + 3b + c \\quad|\\quad r = \\frac{x}{y} \\implies A/P = \\left(\\frac{x+y}{y}\\right)^n$$',
          points: [
            { en: 'Method A (Effective %): Unbeatable for 2 Yrs clean rates (`4% ⇒ 8.16%`, `6% ⇒ 12.36%`, `10% 3-Yr ⇒ 33.1%`)!', hi: 'विधि A (प्रभावी %): साफ पूर्णांक दरों (`4% ⇒ 8.16%`, `6% ⇒ 12.36%`, `10% 3-Yr ⇒ 33.1%`) में सबसे तेज़!' },
            { en: 'Method B (Ratio Powers): For `5% (20→21)`, `20% (5→6 ⇒ 125→216)`, `25% (4→5 ⇒ 64→125)` or fractional rates (`12.5% = 8→9`).', hi: 'विधि B (रेश्यो घात): भिन्न दरों (`20% ⇒ 125→216`, `25% ⇒ 64→125`, `12.5% ⇒ 8→9`) में दशमलव से बचाता है!' },
            { en: 'Method C (Golden Tree `3a+3b+c`): Essential when yearly breakdown, 2nd yr CI, or `(CI₂, SI₂) → CI₃` is asked!', hi: 'विधि C (ट्री): जब केवल दूसरे/तीसरे वर्ष का ब्याज या `CI₂` व `SI₂` से `CI₃` निकालना हो तब सर्वश्रेष्ठ!' },
          ],
          example: {
            title: { en: 'Group D S23 PYQ: CI on ₹7,625 after 3 years at 20% p.a. compounded annually?', hi: 'Group D S23: ₹7,625 पर 20% वार्षिक दर से 3 वर्ष का चक्रवृद्धि ब्याज (CI) कितना होगा?' },
            basic: {
              en: 'Successive `20%` 3 times $= 72.8\\%$. CI $= 7625 \\times 0.728 =$ **₹5,551**.',
              hi: '`20%` का 3-वर्ष प्रभावी % $= 72.8\\%$ ⇒ `7625 × 0.728 =` **₹5,551**।',
            },
            smart: {
              en: 'Cube Ratio (`20% = 1/5`): $P : A = 5^3 : 6^3 = 125 : 216 \\implies \\text{CI} = 91\\text{ units}$.\nSince `7625 ÷ 125 = 61`, CI $= 91 \\times 61 =$ **₹5,551** (`91 × 60 + 91`)!',
              hi: 'घन अनुपात (`20% = 1/5`): $125 : 216 \\implies \\text{CI} = 91$ इकाई। यहाँ `7625 ÷ 125 = 61` ⇒ `91 × 61 =` **₹5,551**!',
            },
          },
        },
        {
          id: 'card-4-2-2',
          title: {
            en: '2. Finding Missing Rate (R%) & Time (T) by Canceling Principal : Amount to Squares/Cubes',
            hi: '2. P : A अनुपात को काटकर वर्गमूल/घनमूल से दर R% व समय T तुरंत निकालें',
          },
          formula: '$$2\\text{ Yr}: \\sqrt{P} : \\sqrt{A} = y : (y+x) \\implies R = \\frac{x}{y}\\times 100 \\quad|\\quad 3\\text{ Yr}: \\sqrt[3]{P} : \\sqrt[3]{A}$$',
          points: [
            { en: 'Never expand `(1 + R/100)^n`! Write `P : A`, simplify by GCD until perfect squares (2 yrs) or cubes (3 yrs) appear!', hi: 'कभी सूत्र न फैलाएं! सीधे `P : A` अनुपात को सबसे छोटे रूप में काटें — 2 वर्ष में पूर्ण वर्ग व 3 वर्ष में पूर्ण घन दिखेगा!' },
            { en: 'For Time `T`: Express `A / P` as powers of `(1 + R/100)` (`625 : 841 = 25² : 29² ⇒ T = 2 yrs`).', hi: 'समय `T` हेतु: `P : A` को काटने पर वह आधार दर भिन्न की जिस घात पर बैठे, वही उत्तर होगा (`625:841 = 25²:29² ⇒ T=2`)।' },
          ],
          example: {
            title: { en: 'NTPC UG S19 PYQ: ₹625 at 16% p.a. CI becomes ₹841. Find Time Period!', hi: 'NTPC UG S19: ₹625 की राशि 16% वार्षिक CI दर पर ₹841 हो जाती है। समय ज्ञात करें।' },
            basic: {
              en: '$\\left(\\frac{116}{100}\\right)^T = \\left(\\frac{29}{25}\\right)^T = \\frac{841}{625} = \\left(\\frac{29}{25}\\right)^2 \\implies T =$ **2 years**.',
              hi: '$\\left(\\frac{29}{25}\\right)^T = \\frac{841}{625} = \\left(\\frac{29}{25}\\right)^2 \\implies T =$ **2 वर्ष**।',
            },
            smart: {
              en: 'Square Recognition (`25² = 625`, `29² = 841`): Exponent is directly **2 years** in 1 second!',
              hi: 'वर्ग पहचान (`25² = 625, 29² = 841`): घात `2` दिखते ही उत्तर = **2 वर्ष** (1 सेकंड में!)।',
            },
          },
        },
      ],
    },
    {
      id: 'mod-3-half-quarterly-compounding',
      number: '4.3',
      shortLabel: '4.3 HalfYr/Qtr',
      pyqTypeId: 'type-6-ci-half-yearly-quarterly',
      diagramKey: 'ch4-halfyearly-quarterly',
      title: {
        en: 'Module 3: Half-Yearly, Quarterly Compounding & Ratio Comparison Traps',
        hi: 'मॉड्यूल 3: अर्धवार्षिक (Half-Yearly) व तिमाही (Quarterly) संयोजन नियम',
      },
      summaryTag: {
        en: 'Half-Yearly (r/2, 2n) • Quarterly (r/4, 4n) • 8% Yearly vs Half-Yearly Ratio (50:51)',
        hi: 'अर्धवार्षिक (r/2, 2n) • तिमाही (r/4, 4n) • 10%×4 = 46.41% • 8% वार्षिक vs छमाही अनुपात',
      },
      boardCards: [
        {
          id: 'card-4-3-1',
          title: {
            en: '1. Frequency Conversion Table & 10% 4-Cycle Champion Pattern (46.41%)',
            hi: '1. संयोजन रूपांतरण सूत्र व सबसे प्रसिद्ध 4-चक्र शॉर्टकट (+46.41%)',
          },
          formula: '$$\\text{Half-Yearly}: R_{\\text{eff}} = \\frac{r}{2},\\; T_{\\text{eff}} = 2t \\quad|\\quad \\text{Quarterly}: R_{\\text{eff}} = \\frac{r}{4},\\; T_{\\text{eff}} = 4t$$',
          points: [
            { en: 'Railway Favorite Pattern: BOTH `20% for 2 yrs Half-Yearly` AND `40% for 1 yr Quarterly` turn into **`10%` for 4 cycles** $= 10^4 \\to 11^4 = 10000 \\to 14641 \\;(\\mathbf{+46.41\\%})$!', hi: 'रेलवे फेवरिट: `20%` (2 वर्ष छमाही) व `40%` (1 वर्ष तिमाही) दोनों ही **`10%` के 4 चक्र** (`+46.41%`) बन जाते हैं!' },
            { en: 'Ratio Cheat (Yearly vs Half-Yearly for 1 Yr): Ignore ₹10,000 Principal! Simply take ratio of effective rates: `8.16% : 8.00% = 51 : 50`!', hi: 'अनुपात शॉर्टकट (वार्षिक बनाम छमाही 1 वर्ष): मूलधन ₹10,000 छोड़ें! सीधे प्रभावी दरों का अनुपात `8.16 : 8.00 = 51 : 50` लें!' },
          ],
          example: {
            title: { en: 'Group D S32 PYQ: CI earned in 1 yr on ₹2,50,000 at 40% p.a. compounded QUARTERLY?', hi: 'Group D S32: ₹2,50,000 पर 40% वार्षिक दर से 1 वर्ष का तिमाही चक्रवृद्धि ब्याज?' },
            basic: {
              en: 'Quarterly `r = 40/4 = 10%`, `n = 4` cycles.\nAmount factor $= 1.1^4 = 1.4641 \\implies \\text{CI} = 2,50,000 \\times 0.4641 =$ **₹1,16,025**.',
              hi: 'तिमाही `r = 10%`, `n = 4` चक्र ⇒ प्रभावी दर $= 46.41\\%$।\n`CI = 2,50,000 × 0.4641 =` **₹1,16,025**।',
            },
            smart: {
              en: 'Divide by 4 Trick (`× 2,50,000 = 10⁶ / 4`): Compute `464100 ÷ 4 =` **₹1,16,025** orally!',
              hi: '4 से भाग ट्रिक (`× 2,50,000 = ×10⁶/4`): बस `464,100 ÷ 4 =` **₹1,16,025** मौखिक निकालें!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-4-ci-si-difference',
      number: '4.4',
      shortLabel: '4.4 CI−SI Diff',
      pyqTypeId: 'type-7-ci-si-difference',
      diagramKey: 'ch4-ci-si-diff-2yr3yr',
      title: {
        en: 'Module 4: 2-Year & 3-Year (CI − SI) Difference + Tree Recovery (SI₂, CI₂ → CI₃)',
        hi: 'मॉड्यूल 4: 2-वर्ष व 3-वर्ष (CI − SI) अंतर के सूत्र तथा (SI₂, CI₂) से 3-वर्ष CI ज्ञात करना',
      },
      summaryTag: {
        en: '2-Yr P(r/100)² • 3-Yr P(r/100)²(3 + r/100) • Find R = 100√(Diff/P) • P = a² / b Recovery Formula',
        hi: '2-वर्ष अंतर P(r/100)² • 3-वर्ष अंतर सूत्र • दर R = 100√(Diff/P) • P = a²/b रिकवरी सूत्र',
      },
      boardCards: [
        {
          id: 'card-4-4-1',
          title: {
            en: '1. Exact 2-Year & 3-Year (CI − SI) Formulas + Reverse Principal Recovery (P = a²/b)',
            hi: '1. 2 व 3 वर्ष अंतर सूत्र, अज्ञात दर R% तथा 2-वर्ष ब्याज से मूलधन (P = a²/b)',
          },
          formula: '$$\\text{Diff}_2 = P\\left(\\frac{r}{100}\\right)^2 \\quad|\\quad \\text{Diff}_3 = P\\left(\\frac{r}{100}\\right)^2\\left(3 + \\frac{r}{100}\\right) \\quad|\\quad P = \\frac{a^2}{b}$$',
          points: [
            { en: 'Find Missing Rate R% (`Diff₂` & `P` given): Direct square-root shortcut $R = 100\\sqrt{\\frac{\\text{Diff}_2}{P}}$!', hi: 'अज्ञात दर `R%` (`Diff₂` व `P` दिए हों): बिना किसी समीकरण के $R = 100\\sqrt{\\frac{\\text{Diff}_2}{P}}$ लगाएं!' },
            { en: 'Recover Principal from `(SI₂, CI₂)`: `a = SI₂ / 2` (1 yr SI), `b = CI₂ − SI₂` (interest on `a`!) ⇒ Rate $r = \\frac{b}{a} \\times 100$, Principal $P = \\frac{a^2}{b}$!', hi: '2 वर्ष का `SI` व `CI` दिया हो: `a = SI/2`, `b = CI − SI` ⇒ दर $r = \\frac{b}{a}\\times 100$ और मूलधन $P = \\frac{a^2}{b}$ तुरंत पाएं!' },
          ],
          example: {
            title: { en: 'Group D S6 PYQ: 2-Yr CI = ₹1,560 & SI = ₹1,500 on same sum & rate. Find 3-Yr CI!', hi: 'Group D S6: समान धनराशि व दर पर 2 वर्ष का CI = ₹1,560 व SI = ₹1,500 है। 3 वर्ष का CI?' },
            basic: {
              en: '1-yr SI `a = 1500/2 = 750`. Gap `b = 1560 − 1500 = 60`.\nRate $= 60 / 750 = 8\\%$. Yr 3 adds `750 + 2(60) + 8%(60) = 750 + 120 + 4.80 = 874.80`.\nTotal 3-Yr CI $= 1560 + 874.80 =$ **₹2,434.80**.',
              hi: '`1` वर्ष SI `a = 750`, अंतर `b = 60` ⇒ दर $= 60/750 = 8\\%$।\nतीसरे वर्ष का ब्याज `= 750 + 2(60) + 60 का 8% = 874.80` ⇒ कुल `3` वर्ष CI $= 1560 + 874.80 =$ **₹2,434.80**।',
            },
            smart: {
              en: 'Golden Tree Shortcut (`3a + 3b + c`): Need ZERO Principal! `a = 750`, `b = 60` (`8%` rate), `c = 8%(60) = 4.80` ⇒ `3(750) + 3(60) + 4.80 = 2250 + 180 + 4.80 =` **₹2,434.80**!',
              hi: 'बिना मूलधन निकाले गोल्डन ट्री: `3a + 3b + c` = `3(750) + 3(60) + 4.80` = `2250 + 180 + 4.80` = **₹2,434.80**!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-5-3yr-diff-and-tree-tricks',
      number: '4.5',
      shortLabel: '4.5 3-Yr Diff',
      pyqTypeId: 'type-8-ci-tree-and-equal-split',
      title: {
        en: 'Module 5: 3-Year (CI − SI) Fast Fraction Method & Last-Digit Elimination',
        hi: 'मॉड्यूल 5: 3-वर्ष (CI − SI) अंतर के तेज़ भिन्न गुणक व अंक-जाँच शॉर्टकट्स',
      },
      summaryTag: {
        en: 'Ratio Table (3r+1) / r³ vs Rate Fraction • Diff₃ Decimal Matching without Full Division',
        hi: 'भिन्न अनुपात (3x+1) / x³ • 3-वर्ष अंतराल में दशमलव-मुक्ति गणना ट्रिक्स',
      },
      boardCards: [
        {
          id: 'card-4-5-1',
          title: {
            en: '1. Clean Fraction Trick for 3-Year Difference (Let P = x³ when r = 1/x)',
            hi: '1. जब दर r = 1/x हो तो मूलधन P = x³ मानें (3 वर्ष अंतर = 3x + 1 इकाई!)',
          },
          formula: '$$r = \\frac{1}{x} \\implies \\text{Let } P = x^3 \\implies \\text{Diff}_2 = x,\\; \\text{Diff}_3 = 3x + 1$$',
          points: [
            { en: 'At `r = 20% = 1/5` ⇒ Let `P = 5³ = 125`, `Diff₃ = 3(5) + 1 = 16 units` (`12.8%`). Instant divide `624 ÷ 16 = 39` ⇒ `125 × 39 = ₹4,875`!', hi: 'यदि दर `20% = 1/5` हो: `P = 125`, अंतर `3(5)+1 = 16` इकाई! बस `624 ÷ 16 = 39` ⇒ `P = 125 × 39 = ₹4,875`!' },
            { en: 'When Rate is Dirty (like `18%`): Use percentage gap $\\text{Diff}_3\\% = r\\%^2 \\times (3 + r\\%) = 3.24 \\times 3.18 = 10.3032\\%$ or last-digit multiples!', hi: 'जब दर `18%` जैसी हो: `18² × 318 = 324 × 318` से आखिरी अंक देखें (`25758 ÷ 103032` स्पष्ट रूप से `0.25` गुणा है = `₹2,50,000`)!' },
          ],
        },
      ],
    },
    {
      id: 'mod-6-exponential-equal-split',
      number: '4.6',
      shortLabel: '4.6 Exp & Split',
      pyqTypeId: 'type-9-ci-exponential-times',
      diagramKey: 'ch4-split-installment',
      title: {
        en: 'Module 6: CI Exponential Time Rule (k^m Times) & Equal-Maturity Grandson Splits',
        hi: 'मॉड्यूल 6: चक्रवृद्धि ब्याज में समय घात नियम (k^m गुना) व समान परिपक्वता आयु विभाजन',
      },
      summaryTag: {
        en: 'k Times in t Yrs ⇒ k^m Times in mt Yrs • "How Many MORE Years?" Trap • Ratio 1 : (1+r)^Δt',
        hi: 't वर्ष में k गुना ⇒ mt वर्ष में k^m गुना • "कितने और वर्ष?" जाल • आयु अंतर विभाजन',
      },
      boardCards: [
        {
          id: 'card-4-6-1',
          title: {
            en: '1. Exponential Multiplier k^m Rule vs "How Many MORE Years?" RRB Trap',
            hi: '1. घात समय नियम (k^m) व "कितने और वर्ष लगेंगे?" रेलवे परीक्षा का सबसे बड़ा जाल',
          },
          formula: '$$t \\text{ yrs} \\to k \\text{ times} \\implies (m \\times t) \\text{ yrs} \\to k^m \\text{ times} \\quad|\\quad \\text{"MORE Years"} = (m - 1)t$$',
          points: [
            { en: 'CRITICAL WORD TRAP: Read whether the question asks **"In how many years"** (`= m × t`) OR **"In how many MORE years"** (`= m×t − t`)!', hi: 'खतरनाक शब्द जाल: सदैव पढ़ें कि प्रश्न पूछ रहा है **"कितने वर्षों में"** (`= m × t`) या **"कितने और (MORE) वर्षों में"** (`= m×t − t`)!' },
            { en: 'Equal-Maturity Age Split (`Atul & Akshay` PYQs): If age gap is `Δt` yrs (`1` yr at `10%` or `5%`), ELDER grandson has LESS time left, so ELDER gets BIGGER share (`11 : 10` at `10%`, `21 : 20` at `5%`)!', hi: 'समान राशि विभाजन: जिस पोते/पुत्र की आयु अधिक (समय कम बचा है), उसे अधिक हिस्सा मिलता है (`10%` पर `11:10`, `5%` पर `21:20`)!' },
          ],
          example: {
            title: { en: 'ALP S4 PYQ: ₹25,200 divided between 13-yr Akshay & 14-yr Atul at 10% CI (equal at 23). Atul?', hi: 'ALP S4: ₹25,200 को 13-वर्षीय अक्षय व 14-वर्षीय अतुल में 10% CI पर बाँटा गया कि 23 की उम्र में समान राशि मिले। अतुल का भाग?' },
            basic: {
              en: 'Akshay grows for `10 yrs`, Atul grows for `9 yrs` (`Δt = 1`).\n$A(1.1)^{10} = B(1.1)^9 \\implies A : B = 10 : 11$. Atul (`B`) $= 25200 \\times \\frac{11}{21} =$ **₹13,200**.',
              hi: 'अक्षय `10` वर्ष व अतुल `9` वर्ष निवेश करेगा ⇒ `अक्षय : अतुल = 10 : 11`।\nअतुल $= 25200 \\times \\frac{11}{21} =$ **₹13,200**।',
            },
            smart: {
              en: 'Gap `1 yr @ 10%` ⇒ Instant Split Ratio `10 : 11` (Sum `21 = 25,200 ⇒ 1 part = 1,200`). Elder Atul gets `11 × 1,200 =` **₹13,200**!',
              hi: '1 वर्ष अंतर @ 10% ⇒ सीधा अनुपात `10 : 11` (`21 = 25,200 ⇒ ×1,200`)। बड़ा अतुल `11 × 1200 =` **₹13,200**!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-7-installments-emi',
      number: '4.7',
      shortLabel: '4.7 Installments',
      pyqTypeId: 'type-10-installments-repayment',
      title: {
        en: 'Module 7: Monthly SI Loan EMIs + Equal Annual CI & SI Installment Ratio Ladder',
        hi: 'मॉड्यूल 7: मासिक SI किस्त (EMI) व वार्षिक समान चक्रवृद्धि/साधारण किस्त रेश्यो विधि',
      },
      summaryTag: {
        en: 'Monthly Loan EMI = Total Amount / Months • Annual CI Installment Ratio (10:11 & 100:121)',
        hi: 'मासिक ऋण किस्त = (मूलधन + ब्याज) ÷ माह • वार्षिक CI किस्त रेश्यो सीढ़ी',
      },
      boardCards: [
        {
          id: 'card-4-7-1',
          title: {
            en: '1. Monthly Repayment EMI (Group D 2025) & Annual CI Installment Ladder',
            hi: '1. मासिक ऋण किस्त सूत्र व वार्षिक CI किस्त (10:11 → 100:121) सीढ़ी विधि',
          },
          formula: '$$\\text{Monthly EMI} = \\frac{P + \\text{SI}}{\\text{Total Months}} \\quad|\\quad \\text{2-Yr CI Inst}: P = \\frac{X}{1+r} + \\frac{X}{(1+r)^2}$$',
          points: [
            { en: 'Fixed-Loan Monthly EMI (Group D S3/S5): Compute Total Maturity `P(1 + RT/100)`, then divide by `Total Months` (`5 yrs = 60 months`)!', hi: 'बैंक मासिक किस्त (Group D): पहले कुल देय राशि `P(1 + RT/100)` निकालें व सीधे कुल महीनों (`5 वर्ष = 60 माह`) से भाग दें।' },
            { en: 'Annual Equal CI Installment (`10%`, `2` equal yrs): Write Year 1 `10 : 11` & Year 2 `100 : 121`. Make right-side Installment EQUAL (`×11` on row 1 ⇒ `110 : 121` & `100 : 121`) ⇒ Loan `210` units, Each Installment `121` units!', hi: 'वार्षिक समान CI किस्त (`10%` पर 2 वर्ष): पंक्ति 1 (`10:11`) व पंक्ति 2 (`100:121`) में दाईं किस्त बराबर (`121`) करें ⇒ ऋण `110 + 100 = 210` इकाई, प्रत्येक किस्त `121` इकाई!' },
          ],
          example: {
            title: { en: 'Group D S3 PYQ: ₹15 lakhs borrowed at 7% p.a. SI for 5 yrs. Find equal monthly installment!', hi: 'Group D S3: ₹15 लाख 7% वार्षिक SI पर 5 वर्ष के लिए उधार लिए। समान मासिक किस्त ज्ञात करें!' },
            basic: {
              en: 'Total SI $= 7\\% \\times 5 = 35\\% \\implies$ Amount $= 15,00,000 \\times 1.35 = 20,25,000$.\nMonthly EMI $= 20,25,000 \\div 60 =$ **₹33,750**.',
              hi: 'कुल ब्याज `= 7 × 5 = 35%` ⇒ देय राशि `= 15,00,000 × 1.35 = 20,25,000`।\nमासिक किस्त $= 20,25,000 \\div 60 =$ **₹33,750**।',
            },
            smart: {
              en: 'Per-Month Principal + Interest: Monthly P `= 15,00,000 ÷ 60 = 25,000`. Add 35% interest `= 25,000 × 1.35 =` **₹33,750**!',
              hi: 'तेज़ विभाजन ट्रिक: `15 लाख ÷ 60 माह = ₹25,000/माह`। इस पर `35%` जोड़ें: `25,000 + 8,750 =` **₹33,750**!',
            },
          },
        },
      ],
    },
  ],

  decisionMatrix: {
    title: {
      en: 'Exam-Hall 3-Second Method Selector (SI, CI & Installments)',
      hi: 'एग्ज़ाम-हॉल 3-सेकंड निर्णय तालिका (कब कौन-सी विधि लगाएं?)',
    },
    rows: [
      {
        trigger: { en: '2-Year / 3-Year CI with Clean Integers (`4%`, `6%`, `10%`, `20%`)', hi: 'साफ दरें (`4%, 6%, 10%, 20%`) पर 2 या 3 वर्ष का CI पूछें' },
        firstCheck: { en: 'Use Effective % (`8.16%`, `12.36%`, `33.1%`) or Cube Ratio (`125→216`)!', hi: 'सीधे प्रभावी दर % (`8.16%, 33.1%`) या घन अनुपात (`125→216`) लगाएं!' },
        avoid: { en: 'Never compute `P(1 + r/100)³ − P` by multiplying 1.2³ manually unless needed.', hi: 'बेवजह `(1 + r/100)³` खोलकर लंबी गुणा न करें।' },
      },
      {
        trigger: { en: 'CI Amount Given (`P : A` like `4000:4410` or `625:841`), Find `R%` or `T`', hi: 'मूलधन P व मिश्रधन A दिए हों, दर R% या समय T पूछें' },
        firstCheck: { en: 'Cancel `P : A` to simplest form and take √ (2 Yr) or ∛ (3 Yr)!', hi: '`P : A` काटकर वर्गमूल (2 वर्ष) या घनमूल (3 वर्ष) लें!' },
        avoid: { en: 'Never try solving quadratic equations for `R`!', hi: '`R` के लिए कभी द्विघात समीकरण न बनाएं।' },
      },
      {
        trigger: { en: 'Half-Yearly / Quarterly Compounding OR `2-Yr / 3-Yr` `(CI − SI)` Diff', hi: 'छमाही / तिमाही ब्याज या `2/3` वर्ष का `(CI − SI)` अंतर पूछें' },
        firstCheck: { en: 'Convert to `(r/2, 2n)` or `(r/4, 4n)` | Use `P(r/100)²` or `Diff₃/Diff₂`!', hi: 'छमाही `(r/2, 2n)` / तिमाही `(r/4, 4n)` बदलें | अंतर हेतु `P(r/100)²` लगाएं!' },
        avoid: { en: 'Don’t forget: `40% Quarterly` & `20% 2-Yr Half-Yearly` are BOTH `10%` × 4 (`46.41%`)!', hi: 'याद रखें: `40%` तिमाही (1 Yr) व `20%` छमाही (2 Yr) दोनों `46.41%` होते हैं।' },
      },
      {
        trigger: { en: '`t` Yrs to `k` Times (`2× → 16×`) OR Equal Share by Age Difference', hi: 'समय घात नियम (`2× → 16×`) या आयु अंतर विभाजन प्रश्न' },
        firstCheck: { en: 'Count exponents `k^m ⇒ m×t` (check `"MORE yrs?"`); Split `1 : (1+r)^Δt`!', hi: 'घात `k^m ⇒ m×t` ("और वर्ष?" जांचें!); विभाजन हेतु `1 : (1+r)^Δt`!' },
        avoid: { en: 'NEVER apply SI proportionality (`k−1`) to Compound Interest!', hi: 'चक्रवृद्धि ब्याज में कभी साधारण ब्याज वाला `(k−1)` सूत्र न लगाएं!' },
      },
    ],
  },

  trapAlerts: [
    {
      title: { en: 'Trap 1: Confusing "In How Many Yrs" vs "In How Many MORE Yrs" (Tech3 Favorite)', hi: 'जाल 1: "कितने वर्षों में" बनाम "कितने और (MORE) वर्षों में" (Tech Gr-III जाल)' },
      detail: { en: 'If sum doubles in 10 yrs on CI, 16 times (`2⁴`) takes `4 × 10 = 40` TOTAL years — so only **`40 − 10 = 30 MORE years`**!', hi: 'यदि 10 वर्ष में दोगुना, तो 16 गुना (`2⁴`) कुल 40 वर्ष में होगा — अतः **और (MORE) वर्ष = 40 − 10 = 30 वर्ष**!' },
    },
    {
      title: { en: 'Trap 2: Dividing "Rate Per Month" Interest Time by 12 (Tech3 PYQ)', hi: 'जाल 2: "7% मासिक (per month)" ब्याज में समय महीनों को 12 से भाग दे देना' },
      detail: { en: 'When rate itself is `per month`, time in `months` multiplies directly (`7% × 9 months = 63%`), NEVER `9/12`!', hi: 'जब दर स्वयं "प्रति माह" दी हो, तो महीनों (`9`) को `12` से भाग न दें — सीधे `7 × 9 = 63%` निकालें!' },
    },
    {
      title: { en: 'Trap 3: Applying SI (k − 1) Logic to CI Doubling/Tripling', hi: 'जाल 3: चक्रवृद्धि ब्याज में k-गुना समय के लिए SI सूत्र (k−1) लगा देना' },
      detail: { en: 'In SI, triples in 10 yrs (`+200%`) → 9× (`+800%`) takes 40 yrs; in CI, triples in 10 yrs → 9× (`3²`) takes `2 × 10 = 20 yrs`!', hi: 'SI में `+200%` जुड़ता है जबकि CI में गुणा (`3¹ → 3² → 3³`) होता है — दोनों के नियम बिल्कुल अलग हैं!' },
    },
    {
      title: { en: 'Trap 4: Giving Smaller Share to Elder Brother in Equal-Maturity CI Split', hi: 'जाल 4: समान परिपक्वता विभाजन में बड़े भाई/पोते को कम हिस्सा दे देना' },
      detail: { en: 'Elder child has FEWER years in the bank to earn compound interest ⇒ Elder MUST receive the LARGER initial share!', hi: 'जिसकी उम्र अधिक है उसका पैसा बैंक में कम समय रहेगा — अतः बराबरी के लिए बड़े को सदैव अधिक हिस्सा मिलेगा!' },
    },
    {
      title: { en: 'Trap 5: Computing Half-Yearly 2n Incorrectly for Fractional Years', hi: 'जाल 5: 1.5 वर्ष या तिमाही संयोजन में चक्रों (2n / 4n) की गलत गिनती' },
      detail: { en: '1.5 years half-yearly = `3 cycles` of `r/2`; 1 year quarterly = `4 cycles` of `r/4` (NOT 3 cycles!).', hi: '1.5 वर्ष अर्धवार्षिक = 3 चक्र (`r/2` दर पर); 1 वर्ष तिमाही = 4 चक्र (`r/4` दर पर)!' },
    },
    {
      title: { en: 'Trap 6: Dividing Total Monthly EMI Amount Only by Years Instead of Months', hi: 'जाल 6: मासिक किस्त (EMI) निकालने हेतु कुल राशि को वर्ष के बजाय महीनों से भाग न देना' },
      detail: { en: 'For 5-year SI loan, convert 5 years → `60 months` before dividing Total Amount (`P + SI`) for monthly installment!', hi: 'मासिक किस्त हेतु 5 वर्ष को सदैव `60 माह` में बदलकर कुल देय राशि में भाग दें!' },
    },
  ],

  tables: [
    {
      id: 'tbl-eff-ci-rates',
      title: { en: 'Table 1: Ready-to-Use Compound Interest Effective Rates (Save 25 Sec/Question!)', hi: 'तालिका 1: रेडी-टू-यूज़ चक्रवृद्धि ब्याज प्रभावी दरें (25 सेकंड/प्रश्न बचाएं!)' },
      headers: { en: ['Rate p.a.', '2 Years CI %', '3 Years CI % (Ratio / %)'], hi: ['वार्षिक दर', '2 वर्ष CI %', '3 वर्ष CI % (अनुपात / %)'] },
      rows: [
        [{ en: '4% / 5% / 6%', hi: '4% / 5% / 6%' }, { en: '8.16% / 10.25% / 12.36%', hi: '8.16% / 10.25% / 12.36%' }, { en: '12.4864% / 15.7625% / 19.1016%', hi: '12.49% / 15.76% / 19.10%' }],
        [{ en: '8% / 10% / 12%', hi: '8% / 10% / 12%' }, { en: '16.64% / 21% / 25.44%', hi: '16.64% / 21% / 25.44%' }, { en: '25.9712% / 33.1% / 40.4928%', hi: '25.97% / 33.1% / 40.49%' }],
        [{ en: '15% / 20% / 25%', hi: '15% / 20% / 25%' }, { en: '32.25% / 44% / 56.25%', hi: '32.25% / 44% / 56.25%' }, { en: '52.09% / 72.8% (125→216) / 95.31% (64→125)', hi: '52.09% / 72.8% (125→216) / 95.31% (64→125)' }],
        [{ en: '10% × 4 (40% Qtr / 20% HY 2Y)', hi: '10% × 4 चक्र (तिमाही/छमाही)' }, { en: '4 Cycles = 10000 → 14641', hi: '4 चक्र = 10000 → 14641' }, { en: 'Exact Net Rate = +46.41%!', hi: 'सटीक प्रभावी ब्याज = +46.41%!' }],
      ],
    },
    {
      id: 'tbl-si-vs-ci',
      title: { en: 'Table 2: Side-by-Side Comparison — Simple Interest (SI) vs Compound Interest (CI)', hi: 'तालिका 2: साधारण ब्याज (SI) बनाम चक्रवृद्धि ब्याज (CI) — मुख्य अंतर तालिका' },
      headers: { en: ['Property', 'Simple Interest (SI)', 'Compound Interest (CI)'], hi: ['विशेषता', 'साधारण ब्याज (SI)', 'चक्रवृद्धि ब्याज (CI)'] },
      rows: [
        [{ en: 'Base Each Year', hi: 'प्रति वर्ष आधार' }, { en: 'Fixed Initial Principal P', hi: 'सदैव स्थिर मूलधन P' }, { en: 'Previous Year Amount (A)', hi: 'पिछले वर्ष का मिश्रधन (P + ब्याज)' }],
        [{ en: 'k-Times Growth', hi: 'k-गुना वृद्धि समय' }, { en: 'Linear: R×T = (k − 1)×100', hi: 'रेखीय: R×T = (k − 1)×100' }, { en: 'Exponential: t → k, m×t → k^m', hi: 'घातीय: t → k गुना, m×t → k^m गुना' }],
        [{ en: 'Year-1 Interest', hi: 'प्रथम वर्ष का ब्याज' }, { en: 'SI₁ = P·r/100', hi: 'SI₁ = P·r/100' }, { en: 'ALWAYS Equal to SI₁ (Annually)!', hi: 'वार्षिक संयोजन में पहले वर्ष SI = CI!' }],
        [{ en: 'Annual Ratios', hi: 'क्रमिक वर्ष अनुपात' }, { en: 'Equal ₹ gap (A₂−A₁)/(t₂−t₁)', hi: 'समान ₹ अंतर हर साल जुड़ता है' }, { en: 'Equal Ratio (A₂/A₁ = 1+r%)', hi: 'समान गुणा कारक हर साल बढ़ता है' }],
      ],
    },
    {
      id: 'tbl-ci-si-diff-rates',
      title: { en: 'Table 3: Instant 2-Year & 3-Year (CI − SI) % Difference Lookup', hi: 'तालिका 3: 2-वर्ष व 3-वर्ष (CI − SI) अंतर के सीधा प्रतिशत मान' },
      headers: { en: ['Rate r%', '2-Yr Diff % (r²/100)', '3-Yr Diff % = r²(300+r)/100²'], hi: ['ब्याज दर r%', '2-वर्ष अंतर % (r²/100)', '3-वर्ष अंतर %'] },
      rows: [
        [{ en: '5% / 8%', hi: '5% / 8%' }, { en: '0.25% / 0.64%', hi: '0.25% / 0.64%' }, { en: '0.7625% / 1.9712%', hi: '0.7625% / 1.9712%' }],
        [{ en: '10% / 12%', hi: '10% / 12%' }, { en: '1.00% / 1.44%', hi: '1.00% / 1.44%' }, { en: '3.10% / 4.4928%', hi: '3.10% / 4.4928%' }],
        [{ en: '15% / 18%', hi: '15% / 18%' }, { en: '2.25% / 3.24%', hi: '2.25% / 3.24%' }, { en: '7.0875% / 10.3032%', hi: '7.0875% / 10.3032%' }],
        [{ en: '20% / 25%', hi: '20% / 25%' }, { en: '4.00% / 6.25%', hi: '4.00% / 6.25%' }, { en: '12.80% / 20.3125%', hi: '12.80% / 20.3125%' }],
      ],
    },
    {
      id: 'tbl-compounding-modes',
      title: { en: 'Table 4: Half-Yearly, Quarterly & Fractional Period Rules', hi: 'तालिका 4: अर्धवार्षिक, तिमाही व भिन्नात्मक समय संयोजन तालिका' },
      headers: { en: ['Compounding Type', 'New Rate r′', 'New Cycles n′ & Example'], hi: ['संयोजन प्रकार', 'नई दर r′', 'चक्र n′ व उदाहरण'] },
      rows: [
        [{ en: 'Annually', hi: 'वार्षिक (12 माह)' }, { en: 'r %', hi: 'r %' }, { en: 'n = yrs (10% 2 yr = 21%)', hi: 'n = वर्ष' }],
        [{ en: 'Half-Yearly', hi: 'अर्धवार्षिक (6 माह)' }, { en: 'r / 2 %', hi: 'r / 2 %' }, { en: '2n cycles (10% 1 yr ⇒ 5% × 2 = 10.25%)', hi: '2n चक्र (10% 1Yr ⇒ 10.25%)' }],
        [{ en: 'Quarterly', hi: 'तिमाही (3 माह)' }, { en: 'r / 4 %', hi: 'r / 4 %' }, { en: '4n cycles (40% 1 yr ⇒ 10% × 4 = 46.41%)', hi: '4n चक्र (40% 1Yr ⇒ 46.41%)' }],
        [{ en: 'Split Fraction Time (2½ yrs)', hi: 'भिन्नात्मक समय (जैसे 2½ वर्ष)' }, { en: 'Full yrs r%, Half yr r/2%', hi: 'पूर्ण वर्ष r%, आधे हेतु r/2%' }, { en: '10% for 2½ yr = 1.1² × 1.05', hi: 'सीधे क्रमशः अनुपात गुणा करें' }],
      ],
    },
    {
      id: 'tbl-installments-formula',
      title: { en: 'Table 5: Quick Installments & Principal Recovery Cheat Sheet', hi: 'तालिका 5: किस्त (Installments) व 2-वर्ष से मूलधन निकालने के शॉर्टकट' },
      headers: { en: ['Scenario', 'Fast Formula / Ratio', 'Key Takeaway'], hi: ['स्थिति (Scenario)', 'त्वरित सूत्र / अनुपात', 'मुख्य ट्रिक'] },
      rows: [
        [{ en: 'Equal Monthly SI EMI', hi: 'मासिक साधारण किस्त (EMI)' }, { en: '$(P + P \\cdot R \\cdot T/100) \\div (12T)$', hi: 'कुल मिश्रधन ÷ कुल माह' }, { en: 'Include FULL SI in numerator first', hi: 'अंश में कुल मूलधन + कुल ब्याज रखें' }],
        [{ en: '2-Yr CI Equal Installment (10%)', hi: '2-वर्ष समान CI किस्त (10%)' }, { en: 'Row 1: 110:121 | Row 2: 100:121', hi: 'ऋण = 210, किस्त = 121' }, { en: 'Always equalize right-column power!', hi: 'दाईं ओर किस्त मान बराबर करें' }],
        [{ en: '2-Yr SI & CI Given (`a`, `b`)', hi: '2 वर्ष SI व CI ज्ञात होने पर' }, { en: '$r = \\frac{b}{a}\\times100,\\; P = \\frac{a^2}{b}$', hi: '$P = a^2 / b$ (जहाँ $a = \\text{SI}_1, b = \\text{CI}_2 - \\text{SI}_2$)' }, { en: 'Zero algebra (`66, 67 ⇒ 33²/1 = 1089`)', hi: 'बिना समीकरण तुरंत उत्तर!' }],
        [{ en: 'Grandson Equal Share (Gap Δt)', hi: 'आयु अंतर पर समान राशि बाँटना' }, { en: 'Young : Elder = $1 : (1+r)^{\\Delta t}$', hi: 'छोटा : बड़ा = $1 : (1+r)^{\\Delta t}$' }, { en: 'Elder ALWAYS gets bigger share', hi: 'बड़े सदस्य को सदैव अधिक धन मिलेगा' }],
      ],
    },
  ],

  typeWiseGroups: [
    {
      typeId: 'type-1-si-basics-per-month',
      typeNumber: 1,
      title: { en: 'Type 1: Basic SI (RT%), Amount Reverse & "Per Month" Trap PYQs', hi: 'Type 1: मूल SI (RT%), मिश्रधन से 1-वर्ष ब्याज व मासिक दर (per month) जाल' },
      conceptHint: { en: 'Use SI% = R×T directly; never divide months by 12 when rate is "per month"!', hi: 'SI% = R×T लगाएं; "प्रति माह" दर होने पर महीनों को 12 से भाग न दें!' },
      questionIds: ['ch4-pyq-1', 'ch4-pyq-2', 'ch4-pyq-3', 'ch4-pyq-4'],
    },
    {
      typeId: 'type-2-si-k-times-two-amounts',
      typeNumber: 2,
      title: { en: 'Type 2: SI k-Times Rule (RT = (k−1)×100) & Two SI Amounts Gap', hi: 'Type 2: SI k-गुना नियम व अलग-अलग वर्षों के दो SI मिश्रधनों के प्रश्न' },
      conceptHint: { en: 'Doubles ⇒ RT = 100; Two amounts ⇒ 1-yr SI = (A₂−A₁)/(t₂−t₁)!', hi: 'दोगुना ⇒ R×T = 100; दो मिश्रधन ⇒ 1-वर्ष SI = (A₂−A₁)/(t₂−t₁)!' },
      questionIds: ['ch4-pyq-5', 'ch4-pyq-6', 'ch4-pyq-7', 'ch4-pyq-8'],
    },
    {
      typeId: 'type-3-two-banks-si-split',
      typeNumber: 3,
      title: { en: 'Type 3: Two-Bank SI Rate Difference, Time & Principal Reverse', hi: 'Type 3: दो बैंकों की ब्याज दर में अंतर, समय व मूलधन गणना PYQs' },
      conceptHint: { en: 'Multiply Principal directly by (ΔR × T)% to save time!', hi: 'दो बैंकों के अंतर हेतु सीधे P × (दर अंतर × समय)% निकालें!' },
      questionIds: ['ch4-pyq-9', 'ch4-pyq-10', 'ch4-pyq-11'],
    },
    {
      typeId: 'type-4-ci-4method-engine',
      typeNumber: 4,
      title: { en: 'Type 4: Compound Interest 2-Yr & 3-Yr Core (Ratio & Effective Rate)', hi: 'Type 4: चक्रवृद्धि ब्याज (2 व 3 वर्ष — प्रभावी दर % व घन अनुपात PYQs)' },
      conceptHint: { en: 'Pick Effective % for 4%, 6%, 10% and Cube Ratio (125:216) for 20%!', hi: '4%, 6%, 10% में प्रभावी % तथा 20% में घन अनुपात (125:216) अपनाएं!' },
      questionIds: ['ch4-pyq-12', 'ch4-pyq-13', 'ch4-pyq-14', 'ch4-pyq-15'],
    },
    {
      typeId: 'type-5-ci-rate-time-finder',
      typeNumber: 5,
      title: { en: 'Type 5: Finding CI Rate R% or Time T from P : A Square/Cube Ratios', hi: 'Type 5: P : A अनुपात के वर्ग/घन से अज्ञात दर R% व समय T ज्ञात करना' },
      conceptHint: { en: 'Reduce P : A by GCD until perfect squares (T=2) or cubes (T=3) pop out!', hi: 'P : A को काटकर पूर्ण वर्ग (T=2) या पूर्ण घन (T=3) पहचानें!' },
      questionIds: ['ch4-pyq-16', 'ch4-pyq-17', 'ch4-pyq-18'],
    },
    {
      typeId: 'type-6-ci-half-yearly-quarterly',
      typeNumber: 6,
      title: { en: 'Type 6: Half-Yearly (r/2, 2n), Quarterly (r/4, 4n) & Yearly Ratios', hi: 'Type 6: अर्धवार्षिक (r/2, 2n), तिमाही (r/4, 4n) व वार्षिक अनुपात PYQs' },
      conceptHint: { en: 'Both 20% HY (2 yr) & 40% Qtr (1 yr) reduce cleanly to 10% × 4 = 46.41%!', hi: '20% छमाही (2Yr) व 40% तिमाही (1Yr) दोनों ही 10% के 4 चक्र = 46.41% बनते हैं!' },
      questionIds: ['ch4-pyq-19', 'ch4-pyq-20', 'ch4-pyq-21', 'ch4-pyq-22'],
    },
    {
      typeId: 'type-7-ci-si-difference',
      typeNumber: 7,
      title: { en: 'Type 7: 2-Year & 3-Year (CI − SI) Difference Formulas (Find P or R)', hi: 'Type 7: 2-वर्ष व 3-वर्ष (CI − SI) अंतर सूत्र (मूलधन व दर R% ज्ञात करना)' },
      conceptHint: { en: '2-Yr = P(r/100)², Find R = 100√(Diff/P); 3-Yr at 20% = 12.8% of P!', hi: '2-वर्ष अंतर = P(r/100)², दर R = 100√(Diff/P); 20% पर 3-वर्ष अंतर = 12.8%!' },
      questionIds: ['ch4-pyq-23', 'ch4-pyq-24', 'ch4-pyq-25', 'ch4-pyq-26'],
    },
    {
      typeId: 'type-8-ci-tree-and-equal-split',
      typeNumber: 8,
      title: { en: 'Type 8: 2-Yr CI/SI → 3-Yr CI Tree, P = a²/b & Grandson Age Split', hi: 'Type 8: 2-वर्ष SI/CI से 3-वर्ष ट्री, P = a²/b व समान आयु विभाजन PYQs' },
      conceptHint: { en: 'Use 3a+3b+c from 2-yr values, P=a²/b instantly, or ratio 1:(1+r) for elder share!', hi: 'ट्री (3a+3b+c), सीधा सूत्र P=a²/b, तथा आयु विभाजन में बड़े हेतु (1+r) अनुपात!' },
      questionIds: ['ch4-pyq-27', 'ch4-pyq-28', 'ch4-pyq-29', 'ch4-pyq-30'],
    },
    {
      typeId: 'type-9-ci-exponential-times',
      typeNumber: 9,
      title: { en: 'Type 9: CI Exponential Growth (k^m Times) & "How Many MORE Yrs" Trap', hi: 'Type 9: CI घात k^m समय नियम व "कितने और वर्ष?" परीक्षा जाल PYQs' },
      conceptHint: { en: 'Multiply exponent × base time, then subtract initial years ONLY if "MORE" is asked!', hi: 'घात को आधार समय से गुणा करें; केवल "और (MORE)" पूछने पर प्रारंभिक समय घटाएं!' },
      questionIds: ['ch4-pyq-31', 'ch4-pyq-32', 'ch4-pyq-33'],
    },
    {
      typeId: 'type-10-installments-repayment',
      typeNumber: 10,
      title: { en: 'Type 10: Equal Monthly Installments (EMI) & Reverse Interest Rate', hi: 'Type 10: समान मासिक किस्त (EMI) व मासिक भुगतान से ब्याज दर % निकालना' },
      conceptHint: { en: 'Monthly EMI = (P + Total SI) ÷ Months; Total Paid − Borrowed = Total SI!', hi: 'मासिक किस्त = (मूलधन + ब्याज) ÷ माह; कुल चुकाया − उधार = कुल साधारण ब्याज!' },
      questionIds: ['ch4-pyq-34', 'ch4-pyq-35'],
    },
  ],
  pyqBank: [
    // TYPE 1 (4 PYQs)
    {
      id: 'ch4-pyq-1',
      examTag: 'RRB ALP 2025 CBT-2 (Shift 1)',
      level: 'level1_basic',
      question: {
        en: 'The simple interest earned on a certain sum of money for 3 years at 15% per annum is ₹2,700. Find the sum.',
        hi: 'एक निश्चित राशि पर 15% की वार्षिक दर से 3 वर्ष में ₹2,700 साधारण ब्याज के रूप में अर्जित होता है। वह राशि ज्ञात कीजिए।',
      },
      options: { en: ['₹5,000', '₹9,000', '₹6,000', '₹8,000'], hi: ['₹5,000', '₹9,000', '₹6,000', '₹8,000'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**₹6,000**).',
        keyConcept: 'SI % = R × T = 15% × 3 = 45% ⇒ 45% = ₹2,700',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Formula PRT / 100', hi: 'विधि 1: सूत्र PRT / 100 से हल' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '$2700 = \\frac{P \\times 15 \\times 3}{100} \\implies P = \\frac{2700 \\times 100}{45} =$ **₹6,000**.',
              hi: '$2700 = \\frac{P \\times 15 \\times 3}{100} \\implies P = \\frac{270000}{45} =$ **₹6,000**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Percentage Scaling 45% = 2,700 (2 sec)', hi: 'विधि 2: प्रतिशत 45% = 2,700 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`45% = 2,700`. Divide both by `9`: `5% = 300` ⇒ `100% =` **₹6,000** orally!',
              hi: 'कुल ब्याज `15 × 3 = 45% = ₹2,700`। दोनों ओर `9` से भाग दें: `5% = 300` ⇒ `100% =` **₹6,000**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-2',
      examTag: 'RRB Tech Gr-III 2024 (Shift 1)',
      level: 'level1_basic',
      question: {
        en: 'A woman has invested ₹85,000 at a rate of $7\\frac{1}{2}\\%$ per annum simple interest for 4 years. Find the amount that she will receive after 4 years.',
        hi: 'एक महिला ने 4 वर्ष के लिए $7\\frac{1}{2}\\%$ वार्षिक साधारण ब्याज की दर पर ₹85,000 का निवेश किया। वह धनराशि ज्ञात कीजिए जो उसे 4 वर्ष बाद प्राप्त होगी।',
      },
      options: { en: ['₹1,08,750', '₹69,600', '₹1,10,500', '₹75,000'], hi: ['₹1,08,750', '₹69,600', '₹1,10,500', '₹75,000'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**₹1,10,500**).',
        keyConcept: 'Amount = Principal × (100 + 7.5 × 4)% = 130% of ₹85,000!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Find SI then Add to Principal', hi: 'विधि 1: पहले ब्याज निकालकर जोड़ें' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'SI $= \\frac{85000 \\times 15 \\times 4}{2 \\times 100} = 850 \\times 30 = 25,500$.\nTotal Amount $= 85,000 + 25,500 =$ **₹1,10,500**.',
              hi: 'SI $= 85,000 \\times 30\\% = 25,500$।\nकुल धनराशि $= 85,000 + 25,500 =$ **₹1,10,500**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct 130% Multiplier (3 sec)', hi: 'विधि 2: सीधा 130% गुणज ट्रिक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '`7.5% × 4 = +30%`. Direct Amount $= 85,000 \\times 1.3 = 85,000 + 25,500 =$ **₹1,10,500**!',
              hi: '`7.5 × 4 = 30%` ब्याज ⇒ सीधे `85,000` का `130%` = `85,000 + 25,500 =` **₹1,10,500**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-3',
      examTag: 'RRB Tech Gr-III 2024 (Shift 21)',
      level: 'level2_mod',
      question: {
        en: 'A sum when invested at $12\\frac{1}{2}\\%$ simple interest per annum amounts to ₹8,250 after 2 years. What is the simple interest in 1 year?',
        hi: 'एक धनराशि जब $12\\frac{1}{2}\\%$ वार्षिक साधारण ब्याज की दर पर निवेश की जाती है, तो वह धनराशि 2 वर्षों के बाद ₹8,250 हो जाती है। 1 वर्ष में साधारण ब्याज कितना होगा?',
      },
      options: { en: ['₹1,650', '₹825', '₹910', '₹1,700'], hi: ['₹1,650', '₹825', '₹910', '₹1,700'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**₹825**).',
        keyConcept: 'Fraction 12½% = 1/8 ⇒ 2 yrs = 2/8 = 1/4 ⇒ Amount = 5/4 (10 parts = 8,250)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Recover Principal First', hi: 'विधि 1: पहले मूलधन ज्ञात करें' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '2-yr SI $= 25\\% \\implies$ Amount `125% = 8,250` $\\implies P = 6,600$.\n1-yr SI $= \\frac{6600}{8} =$ **₹825**.',
              hi: '`125% = 8,250` ⇒ `P = 6,600`। `1` वर्ष का ब्याज (`12.5% = 1/8`) $= 6600 \\div 8 =$ **₹825**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Zero-Principal Divide by 10 (1 sec)', hi: 'विधि 2: सीधा 10 से भाग ट्रिक (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Notice `125% = 10 × 12.5%`! Since Amount (`125%`) `= 8,250`, 1-yr SI (`12.5%`) `= 8250 ÷ 10 =` **₹825**!',
              hi: 'देखें `125%` खुद `12.5%` का `10` गुना है! अतः सीधे `8,250 ÷ 10 =` **₹825**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-4',
      examTag: 'RRB Tech Gr-III 2024 (Shift 3)',
      level: 'level1_basic',
      question: {
        en: 'Find the simple interest on ₹800 at 7% per month in 9 months.',
        hi: '7% मासिक ब्याज की दर पर 9 माह में ₹800 पर साधारण ब्याज ज्ञात कीजिए।',
      },
      options: { en: ['₹514', '₹534', '₹504', '₹524'], hi: ['₹514', '₹534', '₹504', '₹524'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**₹504**).',
        keyConcept: 'Time & Rate Units Match ("Per Month" & "Months") — Do NOT Divide by 12!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Direct Monthly Rate Formula', hi: 'विधि 1: मासिक दर सूत्र से हल' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: 'Since rate is `7% per month`, multiply `T = 9 months` straight:\n$\\text{SI} = \\frac{800 \\times 7 \\times 9}{100} = 8 \\times 63 =$ **₹504**.',
              hi: 'दर मासिक (`7% प्रति माह`) दी है, अतः समय `9 माह` से सीधे गुणा करें:\n$\\text{SI} = \\frac{800 \\times 7 \\times 9}{100} = 8 \\times 63 =$ **₹504**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral 8 × 63 (2 sec)', hi: 'विधि 2: मौखिक 8 × 63 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Zeroes cancel `800 / 100 = 8`. Simply compute `8 × (7 × 9) = 8 × 63 =` **₹504**!',
              hi: '`800/100 = 8` और `7 × 9 = 63` ⇒ `8 × 63 =` **₹504**!',
            },
          },
        ],
      },
    },

    // TYPE 2 (4 PYQs)
    {
      id: 'ch4-pyq-5',
      examTag: 'RRB Tech Gr-III 2024 (Shift 1)',
      level: 'level1_basic',
      question: {
        en: 'In what duration will a sum of money double itself at 20% per annum simple interest?',
        hi: 'कोई धनराशि, 20% वार्षिक साधारण ब्याज की दर पर कितनी अवधि में स्वयं की दोगुनी हो जाएगी?',
      },
      options: { en: ['10 years', '8 years', '12 years', '5 years'], hi: ['10 वर्ष', '8 वर्ष', '12 वर्ष', '5 वर्ष'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**5 years**).',
        keyConcept: 'Double in SI means Earned Interest = 100% of Principal ⇒ T = 100 / R!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Let Principal = 100, Amount = 200', hi: 'विधि 1: P = 100 व A = 200 मानें' },
            timeTag: '6 sec',
            tone: 'teal',
            steps: {
              en: 'SI earned $= 200 - 100 = 100$. At `20%/yr`: $T = \\frac{100 \\times 100}{100 \\times 20} =$ **5 years**.',
              hi: 'ब्याज $= 200 - 100 = 100$ ⇒ $T = \\frac{100}{20} =$ **5 वर्ष**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Formula (k − 1) × 100 / R (1 sec)', hi: 'विधि 2: सीधा सूत्र (k − 1) × 100 / R (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Double (`k = 2`) $\\implies T = \\frac{(2 - 1) \\times 100}{20} = \\frac{100}{20} =$ **5 years**!',
              hi: 'दोगुना (`k = 2`) $\\implies T = \\frac{100}{20} =$ **5 वर्ष**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-6',
      examTag: 'RRB Tech Gr-III 2024 (Shift 19)',
      level: 'level1_basic',
      question: {
        en: 'At what rate (in percentage) per annum simple interest will a sum of money double itself in 8 years?',
        hi: 'किस वार्षिक साधारण ब्याज की दर पर (प्रतिशत में) कोई धनराशि 8 वर्ष में दोगुनी हो जाएगी?',
      },
      options: { en: ['12.5%', '5.6%', '2.5%', '6.25%'], hi: ['12.5%', '5.6%', '2.5%', '6.25%'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**12.5%**).',
        keyConcept: 'R = 100% / 8 years = 12.5%!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base 100 Interest Split', hi: 'विधि 1: 100 पर वार्षिक विभाजन' },
            timeTag: '6 sec',
            tone: 'teal',
            steps: {
              en: 'Total SI in `8` yrs `= 100%` ⇒ Rate/year $= 100 \\div 8 = \\mathbf{12.5\\%}$.',
              hi: '`8` वर्ष में कुल ब्याज `= 100%` ⇒ प्रति वर्ष दर $= 100 \\div 8 = \\mathbf{12.5\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Golden Fraction 1/8 = 12.5% (1 sec)', hi: 'विधि 2: भिन्न 1/8 = 12.5% (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Recall golden table `1/8 = 12.5%` ⇒ Zero division needed!',
              hi: 'स्वर्णिम भिन्न चार्ट से सीधे `1/8 =` **12.5%**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-7',
      examTag: 'RRB ALP 2025 CBT-2 (Shift 2)',
      level: 'level2_mod',
      question: {
        en: 'A sum of money invested at simple interest amounts to ₹21,500 in 5 years and ₹26,000 in 8 years. Find the principal amount (in ₹).',
        hi: 'साधारण ब्याज पर निवेश की गई कोई धनराशि 5 वर्षों में ₹21,500 और 8 वर्षों में ₹26,000 हो जाती है। मूलधन (₹ में) ज्ञात कीजिए।',
      },
      options: { en: ['7,500', '15,500', '12,000', '14,000'], hi: ['7,500', '15,500', '12,000', '14,000'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**14,000**).',
        keyConcept: 'Constant Annual SI: Difference (₹4,500) divided over 3 yrs = ₹1,500/yr!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Yearly Interest Subtraction', hi: 'विधि 1: 1 वर्ष का SI निकालकर घटाएं' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '3-yr SI $= 26,000 - 21,500 = 4,500 \\implies$ 1-yr SI $= 1,500$.\n5-yr SI $= 7,500 \\implies P = 21,500 - 7,500 = \\mathbf{14,000}$.',
              hi: '`3` वर्ष का ब्याज `= 4,500` ⇒ `1` वर्ष `= 1,500` ⇒ `5` वर्ष `= 7,500`।\nमूलधन $= 21,500 - 7,500 =$ **14,000**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Gap Pullback (3 sec)', hi: 'विधि 2: मौखिक अंतराल घटाव (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '`3 yrs = +4,500` (`+1,500/yr`) ⇒ Subtract `5 × 1,500 = 7,500` from `21,500` = **14,000**!',
              hi: '`3` साल अंतर `4,500` (`1,500/साल`) ⇒ `21,500 − 7,500 =` **14,000**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-8',
      examTag: 'RRB Tech Gr-III 2024 (Shift 7)',
      level: 'level2_mod',
      question: {
        en: 'On simple interest, a certain sum of money amounts to ₹1,400 in 2 years and to ₹2,000 in 5 years. Find the rate of interest per annum.',
        hi: 'एक निश्चित धनराशि, साधारण ब्याज पर 2 वर्ष में ₹1,400 और 5 वर्ष में ₹2,000 हो जाती है। वार्षिक ब्याज की दर ज्ञात कीजिए।',
      },
      options: { en: ['25%', '11.11%', '20%', '16.67%'], hi: ['25%', '11.11%', '20%', '16.67%'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**20%**).',
        keyConcept: 'Find 1-Yr SI (₹200), Subtract 2-Yr SI (₹400) ⇒ P = ₹1,000 ⇒ Rate = 200/1000!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Recover Principal then Rate', hi: 'विधि 1: पहले मूलधन फिर ब्याज दर' },
            timeTag: '14 sec',
            tone: 'teal',
            steps: {
              en: '3-yr SI $= 2000 - 1400 = 600 \\implies$ 1-yr SI $= 200$.\n$P = 1400 - 2(200) = 1,000 \\implies R = \\frac{200}{1000} \\times 100 = \\mathbf{20\\%}$.',
              hi: '`3` वर्ष का ब्याज `= 600` ⇒ `1` वर्ष `= 200`।\nमूलधन `= 1400 − 400 = 1,000` ⇒ दर $= 200/1000 =$ **20%**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Clean Base 1,000 (3 sec)', hi: 'विधि 2: मौखिक आधार 1,000 (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '`+600 / 3 = +200/yr` ⇒ `1400 − 400 = 1,000` principal ⇒ `200` per `1,000` = **20%**!',
              hi: '`600 ÷ 3 = 200/वर्ष` ⇒ `1400 − 400 = 1000` मूलधन ⇒ `200/1000 =` **20%**!',
            },
          },
        ],
      },
    },

    // TYPE 3 (3 PYQs)
    {
      id: 'ch4-pyq-9',
      examTag: 'RRB Tech Gr-III 2024 (Shift 2)',
      level: 'level1_basic',
      question: {
        en: 'Two banks, A and B, offered loans at 5.5% and 6.5% per annum, respectively. Ramesh borrowed an amount of ₹3,00,000 from each bank. Find the positive difference between the amounts of simple interest paid to the two banks by Ramesh after 2 years.',
        hi: 'दो बैंक, A और B ने क्रमशः 5.5% और 6.5% की वार्षिक दर पर ऋण की पेशकश की। रमेश ने प्रत्येक बैंक से ₹3,00,000 की धनराशि ऋण पर ली। 2 वर्ष बाद रमेश द्वारा दोनों बैंकों को भुगतान की गई साधारण ब्याज की धनराशि के बीच का अंतर ज्ञात कीजिए।',
      },
      options: { en: ['₹ 6,000', '₹ 8,000', '₹ 2,000', '₹ 4,000'], hi: ['₹ 6,000', '₹ 8,000', '₹ 2,000', '₹ 4,000'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**₹ 6,000**).',
        keyConcept: 'Compute Difference Rate FIRST: (6.5% − 5.5%) × 2 yrs = Direct 2%!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Separate Interest Calculation', hi: 'विधि 1: दोनों ब्याज अलग-अलग निकालें' },
            timeTag: '14 sec',
            tone: 'teal',
            steps: {
              en: 'Bank B: `3,00,000 × 13% = 39,000`; Bank A: `3,00,000 × 11% = 33,000`.\nDifference $= 39,000 - 33,000 =$ **₹ 6,000**.',
              hi: 'बैंक B: `3 लाख × 13% = 39,000`; बैंक A: `3 लाख × 11% = 33,000` ⇒ अंतर = **₹ 6,000**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Net Rate Gap × Time (2 sec)', hi: 'विधि 2: सीधा दर अंतर × समय (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Rate gap `6.5% − 5.5% = 1%/yr` ⇒ Over 2 yrs = `2%` of `₹3,00,000` = **₹ 6,000**!',
              hi: 'दर अंतर `1% प्रति वर्ष` ⇒ `2` वर्ष में `₹3,00,000` का सीधा `2%` = **₹ 6,000**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-10',
      examTag: 'RRB Tech Gr-III 2024 (Shift 12)',
      level: 'level1_basic',
      question: {
        en: 'How long will it take for ₹1,500 to become ₹1,860 at 8% per annum simple interest?',
        hi: '8% वार्षिक साधारण ब्याज की दर पर ₹1,500 को ₹1,860 बनने में कितना समय लगेगा?',
      },
      options: {
        en: ['3 years', '2 years', '$4\\frac{3}{4}$ years', '$4\\frac{1}{2}$ years'],
        hi: ['3 वर्ष', '2 वर्ष', '$4\\frac{3}{4}$ वर्ष', '$4\\frac{1}{2}$ वर्ष'],
      },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**3 years**).',
        keyConcept: 'SI = 360 over Annual Interest 8% of 1500 (= ₹120/yr) ⇒ 360 ÷ 120 = 3!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Formula Method', hi: 'विधि 1: मानक सूत्र विधि' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: 'SI $= 1860 - 1500 = 360$. $T = \\frac{360 \\times 100}{1500 \\times 8} = \\frac{360}{120} =$ **3 years**.',
              hi: 'SI $= 360$। $T = \\frac{360 \\times 100}{1500 \\times 8} = \\frac{360}{120} =$ **3 वर्ष**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Annual Interest Step (2 sec)', hi: 'विधि 2: वार्षिक ब्याज भाग ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`8%` of `1,500 = ₹120/yr`. Needed SI `= 360` ⇒ `360 ÷ 120 =` **3 years**!',
              hi: '`1,500` का `8%` = `₹120/वर्ष`। कुल ब्याज `₹360` ⇒ `360 ÷ 120 =` **3 वर्ष**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-11',
      examTag: 'RRB Tech Gr-III 2024 (Shift 14)',
      level: 'level1_basic',
      question: {
        en: 'What sum will earn a simple interest of ₹960 in 3 years at 16% per year rate of interest?',
        hi: '16% वार्षिक ब्याज की दर पर 3 वर्ष में कितनी धनराशि पर ₹960 का साधारण ब्याज प्राप्त होगा?',
      },
      options: { en: ['₹2,200', '₹1,800', '₹2,000', '₹1,600'], hi: ['₹2,200', '₹1,800', '₹2,000', '₹1,600'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**₹2,000**).',
        keyConcept: 'Effective SI = 16% × 3 = 48% ⇒ 48% = ₹960 (Exact Double!)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Formula P = (SI×100)/(R×T)', hi: 'विधि 1: सूत्र से मूलधन' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '$P = \\frac{960 \\times 100}{16 \\times 3} = \\frac{96000}{48} =$ **₹2,000**.',
              hi: '$P = \\frac{960 \\times 100}{48} =$ **₹2,000**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral 48% = 960 Double Check (1 sec)', hi: 'विधि 2: मौखिक 48% = 960 (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '`16 × 3 = 48% = 960` ⇒ `1% = 20` ⇒ `100% =` **₹2,000**!',
              hi: '`48% = 960` (`48 × 20`) ⇒ `100% =` **₹2,000**!',
            },
          },
        ],
      },
    },

    // TYPE 4 (4 PYQs)
    {
      id: 'ch4-pyq-12',
      examTag: 'RRB Tech Gr-III 2024 (Shift 11)',
      level: 'level1_basic',
      question: {
        en: 'The compound interest on ₹2,500 after 2 years, at a rate of 6% per annum, compounded annually, will be:',
        hi: '₹2,500 पर 2 वर्ष बाद 6% वार्षिक की दर से (वार्षिक रूप से संयोजित) चक्रवृद्धि ब्याज क्या होगा?',
      },
      options: { en: ['₹309', '₹322', '₹320', '₹318'], hi: ['₹309', '₹322', '₹320', '₹318'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**₹309**).',
        keyConcept: '6% Effective for 2 Yrs = 12.36% | Or Tree: 150 + 150 + 9!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Golden 2-Year Tree (2a + b)', hi: 'विधि 1: 2-वर्ष गोल्डन ट्री (2a + b)' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: 'Yr 1 (`a`): `6%` of `2500 = 150`.\nYr 2 (`a + b`): `150 + 6%` of `150` (`= 9`).\nTotal CI $= 150 + 150 + 9 =$ **₹309**.',
              hi: 'वर्ष 1 (`a`): `150` | वर्ष 2: `150 + (150 का 6% = 9)` ⇒ कुल CI $= 300 + 9 =$ **₹309**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Effective Rate 12.36% × 2500 (3 sec)', hi: 'विधि 2: प्रभावी दर 12.36% (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '`2500 × 12.36% = 1236 ÷ 4 =` **₹309** (`2500 = 10000 ÷ 4`)!',
              hi: '`2500 × 12.36% = 1236 ÷ 4 =` **₹309**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-13',
      examTag: 'RRB Tech Gr-III 2024 (Shift 14)',
      level: 'level1_basic',
      question: {
        en: 'Find the compound interest on ₹13,000 in 2 years at 4% p.a., interest compounded yearly.',
        hi: '₹13,000 पर 2 वर्ष में, वार्षिक रूप से संयोजित 4% वार्षिक ब्याज की दर पर चक्रवृद्धि ब्याज ज्ञात कीजिए।',
      },
      options: { en: ['₹1,086.60', '₹1,060.80', '₹997.60', '₹996.50'], hi: ['₹1,086.60', '₹1,060.80', '₹997.60', '₹996.50'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**₹1,060.80**).',
        keyConcept: 'Effective 4% for 2 Yrs = 8.16% | Notice 130 × 8.16 Ends in .80!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 2-Year Interest Tree', hi: 'विधि 1: ब्याज ट्री विधि' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'Yr 1: `4%` of `13000 = 520`.\nYr 2: `520 + 4%` of `520` (`= 20.80`) ⇒ Total $= 1040 + 20.80 =$ **₹1,060.80**.',
              hi: 'वर्ष 1: `520` | वर्ष 2: `520 + 20.80` ⇒ कुल CI $= 1040 + 20.80 =$ **₹1,060.80**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Estimation > ₹1,040 (130 × 8) (2 sec)', hi: 'विधि 2: SI 1040 से ठीक बड़ा अनुमान (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '2-yr SI is `8%` `= 1,040`, so CI MUST exceed `1,040` by `20.80` ⇒ **₹1,060.80** (`1086.60` too big, others `<1040`!).',
              hi: '2-वर्ष SI `1,040` से ठीक थोड़ा अधिक (`+20.80`) केवल **₹1,060.80** विकल्पों में उपयुक्त है!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-14',
      examTag: 'RRB Tech Gr-III 2024 (Shift 20)',
      level: 'level1_basic',
      question: {
        en: 'Find the compound interest on ₹12,000 in 3 years at a rate of 10% per annum, compounded annually.',
        hi: '10% वार्षिक की दर पर ₹12,000 पर 3 वर्षों में चक्रवृद्धि ब्याज ज्ञात कीजिए, जो वार्षिक रूप से संयोजित होता है।',
      },
      options: { en: ['₹3,972', '₹3,672', '₹3,772', '₹3,872'], hi: ['₹3,972', '₹3,672', '₹3,772', '₹3,872'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**₹3,972**).',
        keyConcept: '10% for 3 Yrs = ALWAYS Exact 33.1% (`1000 → 1331`)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 3-Year Golden Tree (3a+3b+c)', hi: 'विधि 1: 3-वर्ष गोल्डन ट्री' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: '`a = 1200`, `b = 120`, `c = 12`.\nCI $= 3(1200) + 3(120) + 12 = 3600 + 360 + 12 =$ **₹3,972**.',
              hi: '`a = 1200, b = 120, c = 12` ⇒ `3600 + 360 + 12 =` **₹3,972**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral 33.1% × 12,000 (2 sec)', hi: 'विधि 2: मौखिक 33.1% × 12,000 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Multiply `331 × 12` (unit digit `2`, `12 × 331 = 3310 + 662`) = **₹3,972**!',
              hi: 'सीधे `33.1% × 12,000 = 331 × 12 =` **₹3,972**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-15',
      examTag: 'RRB Group D 2025 (Shift 23)',
      level: 'level2_mod',
      question: {
        en: 'What will be the compound interest on a sum of ₹7,625 after 3 years at the rate of 20% per annum, interest being compounded annually?',
        hi: 'यदि ब्याज वार्षिक रूप से संयोजित होता है, तो 20% वार्षिक दर से ₹7,625 की धनराशि पर 3 वर्षों में प्राप्त चक्रवृद्धि ब्याज ज्ञात कीजिए।',
      },
      options: { en: ['₹5,551', '₹5,571', '₹5,561', '₹5,581'], hi: ['₹5,551', '₹5,571', '₹5,561', '₹5,581'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**₹5,551**).',
        keyConcept: 'Cube Ratio (5³ : 6³ = 125 : 216) ⇒ CI = 91 Units (`7625 / 125 = 61`)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 3-Year Cube Ratio Method', hi: 'विधि 1: 3-वर्ष घन अनुपात विधि' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '`20% = 1/5` $\\implies P : A = 5^3 : 6^3 = 125 : 216$.\n`125 units = 7625` (`÷125 = ×61`) ⇒ $\\text{CI} = 91 \\times 61 =$ **₹5,551**.',
              hi: '`20% = 1/5` ⇒ $125 : 216 \\implies \\text{CI} = 91$ इकाई। `7625 ÷ 125 = 61` ⇒ `91 × 61 =` **₹5,551**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Divisibility by 7 & 13 (91 = 7 × 13) (3 sec)', hi: 'विधि 2: 91 (7 × 13) की विभाज्यता ट्रिक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Since CI $= 91 \\times 61$, answer MUST be divisible by `7`, `13`, and `61` (and tens digit `91 × 61`: `5551`) ⇒ **₹5,551**!',
              hi: '`91 × 61 = 91 × 60 + 91 = 5460 + 91 =` **₹5,551**!',
            },
          },
        ],
      },
    },

    // TYPE 5 (3 PYQs)
    {
      id: 'ch4-pyq-16',
      examTag: 'RRB Group D 2025 (Shift 10)',
      level: 'level1_basic',
      question: {
        en: 'A sum of ₹4,000 amounts to ₹4,410 in 2 years at compound interest, compounded annually. Find the annual rate of interest (in percentage).',
        hi: '₹4,000 की धनराशि 2 वर्षों में वार्षिक रूप से संयोजित चक्रवृद्धि ब्याज पर ₹4,410 हो जाती है। वार्षिक ब्याज दर (प्रतिशत में) ज्ञात कीजिए।',
      },
      options: { en: ['5%', '10%', '2.5%', '7.5%'], hi: ['5%', '10%', '2.5%', '7.5%'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**5%**).',
        keyConcept: 'Simplify 4000 : 4410 ⇒ 400 : 441 = 20² : 21² ⇒ +1/20 = 5%!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Formula A = P(1+R/100)²', hi: 'विधि 1: मानक मिश्रधन सूत्र' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: '$\\left(1 + \\frac{R}{100}\\right)^2 = \\frac{4410}{4000} = \\frac{441}{400} \\implies 1 + \\frac{R}{100} = \\frac{21}{20} \\implies R = \\mathbf{5\\%}$.',
              hi: '$\\frac{441}{400} = \\left(\\frac{21}{20}\\right)^2 \\implies +\\frac{1}{20} = \\mathbf{5\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cancel & Take Square Root (2 sec)', hi: 'विधि 2: अनुपात काटकर वर्गमूल ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Drop zero: `√400 : √441 = 20 : 21` ⇒ `+1/20 =` **5%** orally!',
              hi: 'शून्य हटाएं: `√400 : √441 = 20 : 21` ⇒ `+1/20 =` **5%**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-17',
      examTag: 'RRB NTPC UG 2025 (Shift 19)',
      level: 'level1_basic',
      question: {
        en: 'A sum of ₹625 is invested in a bank at 16% interest per annum compounded annually. On maturity, the amount payable becomes ₹841. Find the time period of the investment.',
        hi: 'किसी बैंक में ₹625 की धनराशि, वार्षिक रूप से संयोजित होने वाले 16% वार्षिक ब्याज दर पर निवेश की जाती है। परिपक्वता पर देय धनराशि ₹841 हो जाती है। निवेश की समयावधि ज्ञात कीजिए।',
      },
      options: { en: ['1 year', '2.5 years', '1.5 years', '2 years'], hi: ['1 वर्ष', '2.5 वर्ष', '1.5 वर्ष', '2 वर्ष'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**2 years**).',
        keyConcept: '625 = 25² and 841 = 29² (16% = +4/25) ⇒ Exponent = 2!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base Power Comparison', hi: 'विधि 1: आधार घात तुलना' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '$\\left(1 + \\frac{16}{100}\\right)^T = \\left(\\frac{29}{25}\\right)^T = \\frac{841}{625} = \\left(\\frac{29}{25}\\right)^2 \\implies T =$ **2 years**.',
              hi: '$\\left(\\frac{29}{25}\\right)^T = \\frac{841}{625} = \\left(\\frac{29}{25}\\right)^2 \\implies T =$ **2 वर्ष**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Instant Square Identification (1 sec)', hi: 'विधि 2: वर्ग पहचान 25² → 29² (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '`625 = 25²`, `841 = 29²` ⇒ Straight power `2` = **2 years**!',
              hi: '`625 = 25²` व `841 = 29²` देखते ही समय `=` **2 वर्ष**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-18',
      examTag: 'RRB Tech Gr-III 2024 (Shift 18)',
      level: 'level1_basic',
      question: {
        en: 'In how many years will a sum of ₹12,000 become ₹14,520 at a rate of 10% per annum on compound interest, compounded annually?',
        hi: 'वार्षिक रूप से संयोजित 10% वार्षिक चक्रवृद्धि ब्याज की दर से ₹12,000 की धनराशि कितने वर्षों में ₹14,520 हो जाएगी?',
      },
      options: { en: ['4', '2', '5', '3'], hi: ['4', '2', '5', '3'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**2**).',
        keyConcept: 'Divide 12000 : 14520 by 120 ⇒ 100 : 121 = 10² : 11² ⇒ 2 Years!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Simplify Ratio P : A', hi: 'विधि 1: P : A अनुपात सरल करें' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '$\\left(\\frac{11}{10}\\right)^T = \\frac{14520}{12000} = \\frac{121}{100} = \\left(\\frac{11}{10}\\right)^2 \\implies T =$ **2**.',
              hi: '$\\frac{14520}{12000} = \\frac{121}{100} = \\left(\\frac{11}{10}\\right)^2 \\implies T =$ **2 वर्ष**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Net % Check 21% of 12,000 (2 sec)', hi: 'विधि 2: ब्याज 21% जांच (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'CI `= 14,520 − 12,000 = 2,520`. Notice `2,520 / 12,000 = 21%` = exact 2 yrs at 10% ⇒ **2**!',
              hi: 'ब्याज `2,520`, जो `12,000` का ठीक `21%` है ⇒ `10%` पर `21%` केवल **2 वर्ष** में होता है!',
            },
          },
        ],
      },
    },

    // TYPE 6 (4 PYQs)
    {
      id: 'ch4-pyq-19',
      examTag: 'RRB Tech Gr-III 2024 (Shift 19)',
      level: 'level1_basic',
      question: {
        en: 'Rajveer has invested ₹16,000 at 10% p.a. for 1 year on compound interest, compounded half-yearly. The amount received by him will be:',
        hi: 'राजवीर ने अर्ध-वार्षिक रूप से संयोजित 10% वार्षिक चक्रवृद्धि ब्याज की दर पर 1 वर्ष के लिए ₹16,000 का निवेश किया। उसे प्राप्त होने वाली धनराशि कितनी होगी?',
      },
      options: { en: ['₹16,542', '₹16,354', '₹17,830', '₹17,640'], hi: ['₹16,542', '₹16,354', '₹17,830', '₹17,640'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹17,640**).',
        keyConcept: 'Half-Yearly (10% p.a., 1 Yr) ⇒ 5% for 2 Cycles ⇒ +10.25%!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Ratio 20→21 Squared (400 : 441)', hi: 'विधि 1: अनुपात 400 : 441 विधि' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'Half-yearly `r = 5%` (`1/20`), `2` cycles ⇒ $P : A = 400 : 441$.\n`400 = 16,000` (`×40`) $\\implies A = 441 \\times 40 =$ **₹17,640**.',
              hi: 'अर्धवार्षिक दर `= 5%` (`1/20`), `2` चक्र ⇒ `400 : 441`। `400 = 16,000 (×40)` ⇒ `441 × 40 =` **₹17,640**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Effective 10.25% of 16,000 (2 sec)', hi: 'विधि 2: प्रभावी दर 10.25% ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'CI $= 10.25\\%$ of `16,000` $= 1600 + 40 = 1640 \\implies$ Amount $= 16000 + 1640 =$ **₹17,640**!',
              hi: '`16,000` का `10%` (`1600`) + `0.25%` (`40`) `= 1640` ⇒ `16000 + 1640 =` **₹17,640**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-20',
      examTag: 'RRB Group D 2025 (Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'A sum of ₹10,000 is invested for 2 years at 20% per annum interest, compounded half-yearly. What is the compound interest earned at the end of 2 years? (use $(1.10)^4 = 1.4641$)',
        hi: '₹10,000 की राशि अर्धवार्षिक रूप से संयोजित होने वाले 20% वार्षिक ब्याज दर पर 2 वर्षों के लिए निवेश की जाती है। 2 वर्षों के अंत में अर्जित चक्रवृद्धि ब्याज ज्ञात कीजिए। ($(1.10)^4 = 1.4641$ का उपयोग कीजिए)',
      },
      options: { en: ['₹4,641', '₹4,440', '₹4,660', '₹4,461'], hi: ['₹4,641', '₹4,440', '₹4,660', '₹4,461'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**₹4,641**).',
        keyConcept: '20% p.a. Half-Yearly for 2 Yrs = 10% for 4 Cycles = +46.41%!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Direct Formula Multiplier', hi: 'विधि 1: मानक सूत्र गुणन' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '`r = 10%`, `n = 4`. $A = 10000 \\times 1.4641 = 14,641$.\nCI $= 14,641 - 10,000 =$ **₹4,641**.',
              hi: '`r = 10%`, `4` चक्र ⇒ $A = 14,641$ ⇒ CI $= 14,641 - 10,000 =$ **₹4,641**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral 46.41% Base 10,000 (1 sec)', hi: 'विधि 2: 1-सेकंड 46.41% ट्रिक (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Given `1.4641`, pure CI fraction $= 0.4641 \\times 10,000 =$ **₹4,641** instantaneously!',
              hi: 'दिए गए मान `1.4641` से सीधे ब्याज भाग `0.4641 × 10,000 =` **₹4,641**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-21',
      examTag: 'RRB Group D 2025 (Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'Find the ratio of compound interest on ₹10,000 for 1 year at the rate 8% compounded half-yearly and yearly.',
        hi: '₹10,000 पर 1 वर्ष के लिए 8% की दर से अर्धवार्षिक रूप से संयोजित चक्रवृद्धि ब्याज और वार्षिक रूप से संयोजित चक्रवृद्धि ब्याज का अनुपात ज्ञात कीजिए।',
      },
      options: { en: ['53 : 45', '62 : 49', '61 : 52', '51 : 50'], hi: ['53 : 45', '62 : 49', '61 : 52', '51 : 50'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**51 : 50**).',
        keyConcept: 'Ignore Principal ₹10,000 Completely — Take Ratio of Effective CI %!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Compare Effective Rates', hi: 'विधि 1: प्रभावी ब्याज दरों का अनुपात' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: 'Half-yearly (`4% + 4%`): $4 + 4 + \\frac{16}{100} = 8.16\\%$ (`₹816`).\nYearly (`8%`): `₹800`. Ratio $= 816 : 800 = \\mathbf{51 : 50}$.',
              hi: 'छमाही (`4%+4%`): `8.16%` (`₹816`) बनाम वार्षिक (`8%` = `₹800`)। काटने (`÷16`) पर अनुपात = **51 : 50**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Zero-₹ Rate Ratio 8.16 : 8.00 (2 sec)', hi: 'विधि 2: बिना ₹ दर अनुपात 8.16 : 8 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Divide `8.16 : 8.00` mentally by `0.16`: `51 : 50`!',
              hi: 'दोनों `8.16` व `8.00` को `0.16` से काटते ही **51 : 50**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-22',
      examTag: 'RRB Group D 2025 (Shift 32)',
      level: 'level2_mod',
      question: {
        en: 'The compound interest earned in 1 year on ₹2,50,000 at the rate of 40% per annum, compounded quarterly, is:',
        hi: 'ब्याज की गणना तिमाही चक्रवृद्धि आधार पर करते हुए, ₹2,50,000 की राशि पर 40% वार्षिक दर से 1 वर्ष में प्राप्त चक्रवृद्धि ब्याज कितना होगा?',
      },
      options: { en: ['₹1,16,025', '₹1,16,033', '₹1,15,931', '₹1,16,416'], hi: ['₹1,16,025', '₹1,16,033', '₹1,15,931', '₹1,16,416'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**₹1,16,025**).',
        keyConcept: '40% Quarterly = 10% × 4 Cycles = 46.41% ⇒ 4641 × 25 = 464100 ÷ 4!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Ratio Power 10⁴ : 11⁴', hi: 'विधि 1: रेश्यो घात 10⁴ : 11⁴ विधि' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Quarterly `r = 40/4 = 10%`, `n = 4` ⇒ $P : A = 10^4 : 11^4 = 10000 : 14641$.\nCI $= 4641 \\times 25 =$ **₹1,16,025**.',
              hi: 'तिमाही `r = 10%`, `4` चक्र ⇒ `10,000 : 14,641` (`×25`) ⇒ CI $= 4641 \\times 25 =$ **₹1,16,025**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Unit-5 Multiplication & Last Two Digits (2 sec)', hi: 'विधि 2: अंतिम दो अंक 25 व ÷4 ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Since `4641` is multiplied by `25` (`464100 ÷ 4`), the product MUST end in `25` (`...025`) ⇒ **₹1,16,025**!',
              hi: '`464,100 ÷ 4` का अंतिम दो अंक `25` पक्का होगा — विकल्पों में केवल **₹1,16,025** है!',
            },
          },
        ],
      },
    },

    // TYPE 7 (4 PYQs)
    {
      id: 'ch4-pyq-23',
      examTag: 'RRB ALP CBT-1 (Shift 7)',
      level: 'level1_basic',
      question: {
        en: 'The difference between the compound interest (compounded annually) and simple interest on a certain sum for 2 years at 12% per annum is ₹57.60. Calculate the principal.',
        hi: 'किसी निश्चित राशि पर 12% वार्षिक दर से 2 वर्ष के लिए चक्रवृद्धि ब्याज (वार्षिक रूप से संयोजित) और साधारण ब्याज के बीच अंतर ₹57.60 है। मूलधन की गणना कीजिए।',
      },
      options: { en: ['₹3500', '₹4500', '₹4000', '₹3000'], hi: ['₹3500', '₹4500', '₹4000', '₹3000'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**₹4000**).',
        keyConcept: '2-Yr (CI − SI)% = r² / 100 % = 144 / 100 = 1.44%!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Formula P(r/100)² = 57.60', hi: 'विधि 1: सूत्र P(r/100)² से हल' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: '$P \\times \\left(\\frac{12}{100}\\right)^2 = 57.60 \\implies P \\times \\frac{144}{10000} = 57.6 \\implies P =$ **₹4000**.',
              hi: '$P \\times \\frac{144}{10000} = 57.6 \\implies P = 400 \\times 10 =$ **₹4000**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral 144 × 4 = 576 Match (2 sec)', hi: 'विधि 2: मौखिक 144 × 4 = 576 कट (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`1.44% = 57.60`. Note `144 × 4 = 576` ⇒ `100% =` **₹4000**!',
              hi: '`1.44% = 57.60` (`144 × 4 = 576` सीधा कट!) ⇒ `100% =` **₹4000**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-24',
      examTag: 'RRB Group D 2025 (Shift 16)',
      level: 'level2_mod',
      question: {
        en: 'The difference between compound interest, compounded annually and simple interest at the same rate of interest R% per annum on an amount of ₹20,000 for 2 years is ₹162. What is the value of R?',
        hi: '₹20,000 की धनराशि पर R% वार्षिक ब्याज दर से 2 वर्षों के लिए चक्रवृद्धि ब्याज (वार्षिक रूप से संयोजित) और साधारण ब्याज के बीच का अंतर ₹162 है। R का मान ज्ञात कीजिए।',
      },
      options: { en: ['8', '6', '7', '9'], hi: ['8', '6', '7', '9'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**9**).',
        keyConcept: 'Instant Rate Formula: R = 100 × √(Diff₂ / P)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Substitute in P(R/100)²', hi: 'विधि 1: मानक सूत्र में मान रखें' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: '$20000 \\times \\frac{R^2}{10000} = 162 \\implies 2\\,R^2 = 162 \\implies R^2 = 81 \\implies R = \\mathbf{9}$.',
              hi: '$2\\,R^2 = 162 \\implies R^2 = 81 \\implies R =$ **9**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Square Root (162/2 = 81 ⇒ 9) (2 sec)', hi: 'विधि 2: मौखिक वर्गमूल 162/2 = 81 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`20,000 ÷ 10,000 = 2`. Divide `162 ÷ 2 = 81` ⇒ √81 = **9**!',
              hi: '`162 ÷ 2 = 81` का वर्गमूल सीधे **9**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-25',
      examTag: 'RRB Group D 2025 (Shift 21)',
      level: 'level2_mod',
      question: {
        en: 'The difference between compound interest (compounded annually) and simple interest for 3 years at the rate of 20% per annum is ₹624. What is the principal lent?',
        hi: '20% वार्षिक ब्याज दर से 3 वर्ष में प्राप्त चक्रवृद्धि ब्याज (वार्षिक रूप से संयोजित) और साधारण ब्याज के बीच का अंतर ₹624 है। मूलधन ज्ञात कीजिए।',
      },
      options: { en: ['₹3,775', '₹5,975', '₹4,875', '₹6,075'], hi: ['₹3,775', '₹5,975', '₹4,875', '₹6,075'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**₹4,875**).',
        keyConcept: 'Let P = 5³ = 125 (for 20% = 1/5) ⇒ 3-Yr Diff = 3(5) + 1 = 16 Units!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Effective Rate Gap (72.8% − 60%)', hi: 'विधि 1: प्रभावी अंतर 12.8% = ₹624' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '3-yr CI at `20% = 72.8%`; 3-yr SI `= 60%` ⇒ Diff $= 12.8\\% = 624$.\n$P = 624 \\times \\frac{1000}{128} =$ **₹4,875**.',
              hi: 'अंतर `72.8% − 60% = 12.8% = 624` ⇒ $P = 624 \\times \\frac{1000}{128} =$ **₹4,875**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cube Ratio Trick 125 : 16 (4 sec)', hi: 'विधि 2: घन रेश्यो P = 125, अंतर = 16 (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '`r = 1/5` ⇒ Take `P = 125`, `Diff₃ = 3(5) + 1 = 16 units = 624` (`÷16 = ×39`).\n$P = 125 \\times 39 = 5000 - 125 =$ **₹4,875**!',
              hi: '`r = 1/5` ⇒ `P = 125`, अंतर `16 = 624 (×39)` ⇒ `125 × 39 = 5000 − 125 =` **₹4,875**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-26',
      examTag: 'RRB Group D 2025 (Shift 12)',
      level: 'level3_hard',
      question: {
        en: 'The difference between compound interest (compounded annually) and simple interest for 3 years at the rate of 18% per annum is ₹25,758. What is the principal lent?',
        hi: '18% वार्षिक ब्याज दर से 3 वर्ष में प्राप्त चक्रवृद्धि ब्याज (वार्षिक रूप से संयोजित) और साधारण ब्याज के बीच का अंतर ₹25,758 है। मूलधन ज्ञात कीजिए।',
      },
      options: { en: ['₹3,50,000', '₹3,00,000', '₹4,00,000', '₹2,50,000'], hi: ['₹3,50,000', '₹3,00,000', '₹4,00,000', '₹2,50,000'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹2,50,000**).',
        keyConcept: 'Diff₃ Formula: P × (18/100)² × (318/100) = ₹25,758 ⇒ Use Option Multiples!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 3-Year Difference Formula', hi: 'विधि 1: 3-वर्ष (CI−SI) अंतर सूत्र' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '$P \\times \\frac{324}{10000} \\times \\frac{318}{100} = 25758$.\nNote `324 × 318 = 103,032`, and `25,758 × 4 = 103,032`! Thus $P = \\frac{1000000}{4} =$ **₹2,50,000**.',
              hi: '$P \\times \\frac{324 \\times 318}{10^6} = 25758$। देखें `25,758 × 4 = 1,03,032` (`= 324 × 318`), अतः $P = 10^6 ÷ 4 =$ **₹2,50,000**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Approx 10% Diff Estimate + Quarter Check (4 sec)', hi: 'विधि 2: 10.3% सन्निकटन + 4 गुना जांच (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Roughly `3.24% × 3.18 ≈ 10.3%` (`≈ 1/10`). Wait: `25,758 × 10 ≈ 2.5 lakh` ⇒ Exact check **₹2,50,000** (`3.5L` gives `~36k`, `3L` gives `~30.9k`)!',
              hi: 'लगभग दर अंतर `3.24 × 3.18 ≈ 10.3%`। `25,758 ÷ 0.103 ≈` सीधा **₹2,50,000** (`3L` पर `30.9k+` होगा)!',
            },
          },
        ],
      },
    },

    // TYPE 8 (4 PYQs)
    {
      id: 'ch4-pyq-27',
      examTag: 'RRB Group D 2025 (Shift 6)',
      level: 'level3_hard',
      question: {
        en: 'The compound interest on a sum for two years is ₹1,560 and the corresponding simple interest is ₹1,500. Find the compound interest on the same sum at the same rate of interest for three years.',
        hi: 'किसी धनराशि पर दो वर्षों में प्राप्त चक्रवृद्धि ब्याज ₹1,560 है और संगत साधारण ब्याज ₹1,500 है। उसी धनराशि पर समान ब्याज दर से तीन वर्षों के लिए चक्रवृद्धि ब्याज ज्ञात कीजिए।',
      },
      options: { en: ['₹2,466.50', '₹2,245.60', '₹2,345.30', '₹2,434.80'], hi: ['₹2,466.50', '₹2,245.60', '₹2,345.30', '₹2,434.80'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹2,434.80**).',
        keyConcept: 'Build 3-Yr Tree Directly Without Principal: a = 750, b = 60, c = 8% of 60 = 4.80!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Golden Tree Year-by-Year (a, b, c)', hi: 'विधि 1: 3-वर्ष गोल्डन ट्री विधि' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '2-Yr SI `1500` ⇒ `a = 750/yr`; Gap `b = 1560 − 1500 = 60`.\nRate $= \\frac{60}{750} = 8\\%$. Year 3 extra on `b`: `c = 8%(60) = 4.80`.\n3-Yr CI $= 1560 + (750 + 2(60) + 4.80) =$ **₹2,434.80**.',
              hi: '`a = 750`, `b = 60` ⇒ दर $= 60/750 = 8\\%$, `c = 60 का 8% = 4.80`।\n`3` वर्ष CI $= 3(750) + 3(60) + 4.80 = 2250 + 180 + 4.80 =$ **₹2,434.80**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Notice Unique .80 Last Decimal (4 sec)', hi: 'विधि 2: अंतिम दशमलव .80 लॉक (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'From `a=750, b=60`, `c = 60² / 750 = 3600 / 750 = 4.80`! Only **₹2,434.80** ends in `.80`!',
              hi: 'सिर्फ इतना देखें: `c = b²/a = 3600/750 = 4.80`! विकल्पों में केवल **₹2,434.80** के अंत में `.80` है!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-28',
      examTag: 'RRB ALP 2025 CBT-1 (Shift 2)',
      level: 'level2_mod',
      question: {
        en: 'On a certain sum, if at the same rate of interest, for 2 years, the simple interest is ₹66 and compound interest is ₹67, then what is the sum (in ₹)?',
        hi: 'किसी निश्चित राशि पर, यदि समान ब्याज दर पर 2 वर्षों के लिए साधारण ब्याज ₹66 और चक्रवृद्धि ब्याज ₹67 है, तो राशि (₹ में) ज्ञात कीजिए।',
      },
      options: { en: ['1093', '1089', '1084', '1082'], hi: ['1093', '1089', '1084', '1082'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**1089**).',
        keyConcept: 'Master Shortcut: Principal P = a² / b where a = SI₁ (33), b = CI₂ − SI₂ (1)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Rate Ratio a → b → P', hi: 'विधि 1: 1-वर्ष ब्याज से दर व मूलधन' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '1-yr SI `a = 66/2 = 33`; 2nd yr extra `b = 67 − 66 = 1`.\nRate fraction `r = b / a = 1 / 33` ⇒ $P \\times \\frac{1}{33} = 33 \\implies P = 33^2 =$ **1089**.',
              hi: '`a = 33`, `b = 1` ⇒ दर भिन्न $= 1/33$ ⇒ $P \\times \\frac{1}{33} = 33 \\implies P = 33^2 =$ **1089**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Zero-Fraction Formula P = a² / b (2 sec)', hi: 'विधि 2: सीधा सूत्र P = a² / b (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '$P = \\frac{a^2}{b} = \\frac{33^2}{1} =$ **1089** in 2 seconds!',
              hi: 'गोल्डन सूत्र $P = \\frac{a^2}{b} = \\frac{33^2}{1} =$ **1089**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-29',
      examTag: 'RRB ALP 2025 CBT-1 (Shift 4)',
      level: 'level3_hard',
      question: {
        en: 'Gopal distributed ₹25,200 between his two grandsons 13-year-old Akshay and 14-year-old Atul such that they get equal money when they turn 23 years old. Till then the money is in a bank getting compound interest at 10% per annum, compounded annually. How much (in ₹) did Gopal deposit in the name of Atul?',
        hi: 'गोपाल ने अपने दो पोतों, 13 वर्षीय अक्षय और 14 वर्षीय अतुल के बीच ₹25,200 इस प्रकार वितरित किए कि 23 वर्ष की आयु होने पर दोनों को बराबर राशि प्राप्त होगी। तब तक यह राशि बैंक में 10% वार्षिक चक्रवृद्धि ब्याज दर पर जमा रहेगी जहाँ ब्याज वार्षिक रूप से संयोजित होता है। गोपाल ने अतुल के नाम पर कितनी राशि (₹ में) जमा की?',
      },
      options: { en: ['11750', '12000', '13550', '13200'], hi: ['11750', '12000', '13550', '13200'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**13200**).',
        keyConcept: 'Age gap 14 − 13 = 1 yr ⇒ Akshay(10) : Atul(11) at 10% ⇒ Atul = 11/21!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Equate Maturity at Age 23', hi: 'विधि 1: 23 वर्ष पर समान मिश्रधन समीकरण' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Akshay (`10 yrs`), Atul (`9 yrs`): $A(1.1)^{10} = B(1.1)^9 \\implies A : B = 10 : 11$.\nAtul (`B`) $= 25200 \\times \\frac{11}{21} = 1200 \\times 11 =$ **13200**.',
              hi: 'अक्षय `10` वर्ष व अतुल `9` वर्ष ⇒ `A : B = 10 : 11`।\nअतुल $= 25,200 \\times \\frac{11}{21} =$ **13200**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Gap Ratio 10 : 11 (3 sec)', hi: 'विधि 2: 1-वर्ष अंतर पर सीधा 10:11 (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '1-yr age diff at `10%` (`1/10`) ⇒ Share ratio `10 : 11` (`21 parts = 25200 ⇒ ×1200`). Elder Atul gets `11 × 1200 =` **13200**!',
              hi: '`1` वर्ष अंतर व `10%` ⇒ अनुपात `10 : 11` (`21 = 25,200`)। बड़े अतुल का भाग `11 × 1200 =` **13200**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-30',
      examTag: 'RRB Group D 2025 (Shift 7)',
      level: 'level2_mod',
      question: {
        en: 'Rishi has ₹1,681, which he distributes between his two sons, Shan and Piyush. He instructs them to invest their respective amounts at a compound interest rate of 5% per annum, compounded annually. After 13 years, Shan’s investment matures to the same amount as Piyush’s investment after 14 years. Determine the amount (in ₹) that Rishi gave to Shan.',
        hi: 'ऋषि के पास ₹1,681 है, जिसे वह अपने दो पुत्रों, शान और पीयूष के बीच वितरित करता है। वह उन्हें निर्देश देता है कि वे अपनी-अपनी धनराशि को 5% वार्षिक चक्रवृद्धि ब्याज दर पर निवेश करें जबकि ब्याज वार्षिक रूप से संयोजित होता हो। 13 वर्षों के बाद शान के निवेश पर उतनी ही राशि प्राप्त होती है जितनी 14 वर्षों के बाद पीयूष के निवेश पर प्राप्त होती है। ज्ञात कीजिए कि ऋषि ने शान को कितनी धनराशि (₹ में) दी थी।',
      },
      options: { en: ['861', '820', '711', '920'], hi: ['861', '820', '711', '920'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**861**).',
        keyConcept: 'Shorter Horizon (Shan 13 yrs vs Piyush 14 yrs) Gets BIGGER Ratio `21 : 20` (`5% = 1/20`)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Equate A₁₃ and A₁₄', hi: 'विधि 1: 13 व 14 वर्ष का मिश्रधन बराबर करें' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$S(1.05)^{13} = P(1.05)^{14} \\implies \\frac{S}{P} = \\frac{21}{20}$.\nShan $= 1681 \\times \\frac{21}{41} = 41 \\times 21 =$ **861**.',
              hi: '$S : P = 21 : 20$ (`41 = 1681 ⇒ 41²`) ⇒ शान $= 41 \\times 21 =$ **861**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: 41² = 1681 Instant Split (3 sec)', hi: 'विधि 2: वर्ग 41² = 1681 पहचान (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '`5% = 1/20` ⇒ `20 + 21 = 41 units = 1681` (`41²`). Shan has fewer yrs (`13`), gets `21 × 41 =` **861**!',
              hi: '`20 + 21 = 41 = 41²`। शान का समय कम (`13`), अतः बड़ा हिस्सा `21 × 41 =` **861**!',
            },
          },
        ],
      },
    },

    // TYPE 9 (3 PYQs)
    {
      id: 'ch4-pyq-31',
      examTag: 'RRB NTPC UG 2025 (Shift 11)',
      level: 'level1_basic',
      question: {
        en: 'A sum of money triples itself at a certain rate of compound interest in 11 years. In how many years will it amount to 27 times of itself?',
        hi: 'एक धनराशि चक्रवृद्धि ब्याज की एक निश्चित दर पर 11 वर्षों में तीन गुनी हो जाती है। कितने वर्षों में यह धनराशि 27 गुना हो जाएगी?',
      },
      options: { en: ['31 years', '33 years', '37 years', '26 years'], hi: ['31 वर्ष', '33 वर्ष', '37 वर्ष', '26 वर्ष'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**33 years**).',
        keyConcept: '27 = 3³ ⇒ Multiply 11 years by exponent 3 = 33 years!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Exponential Factor Matching', hi: 'विधि 1: घातीय गुणक नियम' },
            timeTag: '6 sec',
            tone: 'teal',
            steps: {
              en: '$3^1$ takes `11` yrs ⇒ $27 = 3^3$ takes $3 \\times 11 =$ **33 years**.',
              hi: '$3^1 \\to 11$ वर्ष ⇒ $27 = 3^3 \\to 3 \\times 11 =$ **33 वर्ष**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Chain 1 → 3 → 9 → 27 (1 sec)', hi: 'विधि 2: मौखिक चरण 1→3→9→27 (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '`11` + `11` + `11` = **33 years**!',
              hi: 'हर `11` साल में `×3` ⇒ `11 + 11 + 11 =` **33 वर्ष**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-32',
      examTag: 'RRB Tech Gr-III 2024 (Shift 17)',
      level: 'level2_mod',
      question: {
        en: 'If a sum of money doubles itself in 10 years on compound interest, then in how many more years will it become 16 times of itself at the same rate of interest?',
        hi: 'यदि कोई धनराशि चक्रवृद्धि ब्याज पर 10 वर्षों में स्वयं की दोगुनी हो जाती है, तो समान ब्याज दर पर यह धनराशि कितने और वर्षों में स्वयं की 16 गुना हो जाएगी?',
      },
      options: { en: ['40', '20', '10', '30'], hi: ['40', '20', '10', '30'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**30**).',
        keyConcept: 'TRAP ALERT: "In How Many MORE Years" = 40 − 10 = 30 (NOT 40)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Total Years Minus Initial 10 Yrs', hi: 'विधि 1: कुल समय घटाकर "और वर्ष" निकालें' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '$2^1 \\to 10$ yrs ⇒ $16 = 2^4 \\to 4 \\times 10 = 40$ TOTAL years.\nExtra **MORE years** needed $= 40 - 10 =$ **30**.',
              hi: 'कुल समय `2⁴ = 4 × 10 = 40` वर्ष। चूँकि प्रश्न पूछता है **कितने और वर्ष** ⇒ `40 − 10 =` **30**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: (m − 1) × t Instant Trap Filter (2 sec)', hi: 'विधि 2: सीधा (m−1)×t ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'From `2×` to `16×` needs remaining `8×` (`2³`) ⇒ `3 × 10 =` **30** more years!',
              hi: '`2` गुने से `16` गुने तक केवल `3` चक्र (`×8`) और लगेंगे ⇒ `3 × 10 =` **30** वर्ष!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-33',
      examTag: 'RRB Tech Gr-III 2024 (Shift 13)',
      level: 'level1_basic',
      question: {
        en: 'A sum of money doubles itself on compound interest in 15 years. In what duration will it become 8 times of itself, considering annual compounding?',
        hi: 'चक्रवृद्धि ब्याज पर एक धनराशि 15 वर्षों में स्वयं की दोगुनी हो जाती है। यही धनराशि कितनी अवधि में स्वयं की 8 गुना हो जाएगी, यदि धनराशि वार्षिक रूप से संयोजित होती है?',
      },
      options: { en: ['60 years', '40 years', '30 years', '45 years'], hi: ['60 वर्ष', '40 वर्ष', '30 वर्ष', '45 वर्ष'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**45 years**).',
        keyConcept: 'Unlike #32, Here Question Asks "Total Duration" ⇒ 3 × 15 = 45 Years!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Power Matching 8 = 2³', hi: 'विधि 1: घात मिलान 8 = 2³' },
            timeTag: '5 sec',
            tone: 'teal',
            steps: {
              en: '$2^1 \\to 15$ yrs ⇒ $8 = 2^3 \\to 3 \\times 15 =$ **45 years**.',
              hi: '$2^1 \\to 15$ वर्ष ⇒ $8 = 2^3 \\to 3 \\times 15 =$ **45 वर्ष**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Chain 15 + 15 + 15 (1 sec)', hi: 'विधि 2: मौखिक श्रृंखला 15+15+15 (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Total duration requested (NOT "more") ⇒ `3 × 15 =` **45 years**!',
              hi: 'यहाँ कुल अवधि पूछी गई है ("और" नहीं) ⇒ `3 × 15 =` **45 वर्ष**!',
            },
          },
        ],
      },
    },

    // TYPE 10 (2 PYQs)
    {
      id: 'ch4-pyq-34',
      examTag: 'RRB Group D 2025 (Shift 3)',
      level: 'level2_mod',
      question: {
        en: 'A person borrowed an amount of ₹15 lakhs at a simple interest rate of 7% per annum for 5 years. If he wants to pay the total amount in equal monthly installments, then find the monthly installment.',
        hi: 'एक व्यक्ति ने 7% वार्षिक साधारण ब्याज दर पर 5 वर्षों के लिए ₹15 लाख उधार लिए। यदि वह कुल राशि को समान मासिक किश्तों में चुकाना चाहता है, तो मासिक किश्त ज्ञात कीजिए।',
      },
      options: { en: ['₹44,000', '₹41,640', '₹33,750', '₹32,600'], hi: ['₹44,000', '₹41,640', '₹33,750', '₹32,600'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**₹33,750**).',
        keyConcept: 'Convert 5 Years = 60 Months; Total Maturity = 135% of ₹15,00,000!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Total Payable ÷ 60 Months', hi: 'विधि 1: कुल देय राशि ÷ 60 माह' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '5-yr SI $= 7 \\times 5 = 35\\% \\implies$ Total payable $= 15,00,000 \\times 1.35 = 20,25,000$.\nMonthly EMI $= 20,25,000 \\div 60 =$ **₹33,750**.',
              hi: 'कुल ब्याज `= 35%` ⇒ कुल देय राशि `= 15,00,000 × 1.35 = 20,25,000`।\nमासिक किस्त $= 20,25,000 \\div 60 =$ **₹33,750**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Divide Principal First 25,000 × 1.35 (4 sec)', hi: 'विधि 2: पहले मूलधन बांटें 25,000 × 1.35 (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Monthly P `= 15,00,000 ÷ 60 = 25,000`. Add 35%: `25,000 + 8,750 =` **₹33,750**!',
              hi: 'मासिक मूलधन `15,00,000 ÷ 60 = ₹25,000`। इसमें `35%` (`+8,750`) जोड़ें = **₹33,750**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch4-pyq-35',
      examTag: 'RRB Group D 2025 (Shift 5)',
      level: 'level2_mod',
      question: {
        en: 'Mr. X borrowed an amount of ₹50,000 for 40 months. If he repaid ₹1,625 as monthly installment, then find the simple rate of interest.',
        hi: 'श्रीमान X ने 40 महीनों के लिए ₹50,000 की राशि उधार ली। यदि उन्होंने मासिक किस्त के रूप में ₹1,625 चुकाए, तो साधारण ब्याज दर ज्ञात कीजिए।',
      },
      options: { en: ['9%', '8%', '7.5%', '6.8%'], hi: ['9%', '8%', '7.5%', '6.8%'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**9%**).',
        keyConcept: 'Total Paid = 40 × 1,625 = ₹65,000 ⇒ Earned SI = ₹15,000 (30%) in 10/3 Years!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Total Paid Minus Principal', hi: 'विधि 1: कुल भुगतान से ब्याज व दर निकालें' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Total paid $= 1625 \\times 40 = 65,000 \\implies$ Total SI $= 15,000$.\n$T = \\frac{40}{12} = \\frac{10}{3}$ yrs. $R = \\frac{15000 \\times 100}{50000 \\times (10/3)} = \\mathbf{9\\%}$.',
              hi: 'कुल चुकाया `= 1625 × 40 = ₹65,000` ⇒ ब्याज `= ₹15,000` (`40/12 = 10/3` वर्ष)।\nदर $= \\frac{15000 \\times 100}{50000 \\times (10/3)} = \\mathbf{9\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Net Percentage ÷ Time in Years (4 sec)', hi: 'विधि 2: कुल ब्याज % ÷ वर्ष में समय (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Total SI `= 15,000` on `50,000` = `30%` for `40/12 = 10/3` yrs ⇒ Yearly Rate $= 30 \\div \\frac{10}{3} = 3 \\times 3 =$ **9%**!',
              hi: 'कुल `₹15,000` ब्याज (`30%`), `40/12 = 10/3` वर्ष में ⇒ वार्षिक दर $= 30 × \\frac{3}{10} =$ **9%**!',
            },
          },
        ],
      },
    },
  ],

  flashcards: [
    { front: { en: 'Fastest way to think of Simple Interest?', hi: 'साधारण ब्याज को बिना सूत्र 2 सेकंड में कैसे सोचें?' }, back: { en: 'Effective SI % = Rate × Time (Amount = 100 + R·T %)', hi: 'सीधा प्रभावी ब्याज = R × T% (मिश्रधन = 100 + RT %)' } },
    { front: { en: 'Sum doubles/k-times in SI: Time Formula?', hi: 'SI में धनराशि k-गुना होने का समय सूत्र?' }, back: { en: 'R × T = (k − 1) × 100 (Double ⇒ R×T = 100)', hi: 'R × T = (k − 1) × 100 (दोगुना ⇒ R×T = 100)' } },
    { front: { en: 'Two SI Amounts: A₁ in t₁, A₂ in t₂ yrs ⇒ P?', hi: 'दो मिश्रधनों A₁ (t₁) व A₂ (t₂) से मूलधन कैसे निकालें?' }, back: { en: '1-Yr SI = (A₂ − A₁)/(t₂ − t₁), then subtract t₁ × SI₁', hi: '1-वर्ष SI = (A₂−A₁)/(t₂−t₁) निकालकर A₁ से घटाएं' } },
    { front: { en: 'Ready-to-use 10% CI (2 Yr, 3 Yr, 4 Yr)?', hi: '10% पर 2, 3 व 4 वर्ष का प्रभावी CI%?' }, back: { en: '2 Yr = 21%, 3 Yr = 33.1%, 4 Yr = 46.41%', hi: '2 वर्ष = 21%, 3 वर्ष = 33.1%, 4 वर्ष = 46.41%' } },
    { front: { en: '3-Year Golden Tree breakdown?', hi: '3-वर्ष गोल्डन ब्याज ट्री संरचना क्या है?' }, back: { en: 'Total CI = 3a + 3b + c (b = r% of a, c = r% of b)', hi: 'कुल CI = 3a + 3b + c (जहाँ b = a का r%, c = b का r%)' } },
    { front: { en: 'Given 2-Yr SI (2a) & CI (2a+b) ⇒ Principal?', hi: '2 वर्ष का SI (2a) व CI (2a+b) ज्ञात हो तो मूलधन?' }, back: { en: 'P = a² / b (and Rate = (b / a) × 100%)', hi: 'P = a² / b व दर = (b / a) × 100%' } },
    { front: { en: 'Half-Yearly & Quarterly Conversion Rules?', hi: 'अर्धवार्षिक व तिमाही संयोजन में दर और समय?' }, back: { en: 'Half-Yearly: r/2, 2n cycles | Quarterly: r/4, 4n cycles', hi: 'छमाही: दर आधी (r/2), 2n | तिमाही: दर चौथाई (r/4), 4n' } },
    { front: { en: '2-Yr (CI − SI) Diff & Fast Rate Formula?', hi: '2 वर्ष (CI − SI) अंतर व दर R% का शॉर्टकट?' }, back: { en: 'Diff₂ = P(r/100)² | Rate R = 100 × √(Diff₂ / P)', hi: 'अंतर = P(r/100)² | दर R = 100 × √(Diff₂ / P)' } },
    { front: { en: '3-Yr (CI − SI) Diff when r = 1/x (e.g. 20%)?', hi: 'जब r = 1/x (जैसे 20%) तो 3 वर्ष अंतर अनुपात?' }, back: { en: 'Let P = x³ ⇒ Diff₃ = 3x + 1 (For 20%: 16/125 = 12.8%)', hi: 'माना P = x³ ⇒ अंतर = 3x + 1 (20% पर 16/125 = 12.8%)' } },
    { front: { en: 'CI sum doubles in 10 yrs → MORE yrs for 16×?', hi: '10 वर्ष में 2× → कितने और वर्ष में 16× होगा?' }, back: { en: '16 = 2⁴ ⇒ Total 40 yrs ⇒ MORE yrs = 40 − 10 = 30!', hi: 'कुल 40 वर्ष − पहले 10 वर्ष = 30 और वर्ष!' } },
    { front: { en: 'Grandson Equal Share Split (Age gap Δt)?', hi: 'आयु अंतर Δt पर समान राशि विभाजन अनुपात?' }, back: { en: 'Younger : Elder = 1 : (1+r)^Δt (Elder gets more!)', hi: 'छोटा : बड़ा = 1 : (1+r)^Δt (बड़े को अधिक धन!)' } },
    { front: { en: 'Annual Equal CI Installment at 10% (2 Yrs)?', hi: '10% पर 2 समान वार्षिक CI किस्तों का अनुपात?' }, back: { en: 'Row 1: 110→121 | Row 2: 100→121 ⇒ Loan 210, Each 121', hi: 'ऋण = 110 + 100 = 210 इकाई, प्रत्येक किस्त = 121' } },
  ],
};
