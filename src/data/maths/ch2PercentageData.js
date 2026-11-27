/**
 * Railway Mathematics Mastery • Chapter 2 (Smart Board Edition)
 * Percentage (%) — Golden Fractions, Base Comparison, AB Constant Rule, Successive %,
 * Population/Depreciation, Income–Expenditure–Savings & Alligation, Marks/Venn, Elections & Mixtures.
 * Language: Devanagari Hindi + Standard English Math Terms (Default `hi`) + Pure English (`en`).
 */

export const CH2_PERCENTAGE_DATA = {
  id: 'math-ch2-percentage',
  chapterNumber: 2,
  subjectId: 'maths',
  subjectLabel: { en: 'Mathematics', hi: 'गणित (हिन्दी Smart Board)' },
  taxonomyChapterName: 'Percentage',
  sourceCode: 'Railway Maths Mastery • Ch 2: Percentage (%) Complete Smart Board Edition',
  blueprintSvgKey: 'ch2-blueprint-mindmap',
  labKey: 'ch2-percentage',
  labMeta: {
    featureTitle: {
      en: '5-in-1 Interactive Animated Percentage Simulator',
      hi: '5-in-1 इंटरैक्टिव एनिमेटेड प्रतिशत सिम्युलेटर लैब',
    },
    featureSubtitle: {
      en: 'Fraction ↔ % Bridge, AB Constant Scale, Successive Multiplier, Income–Savings Alligation & Exam Pass Ruler.',
      hi: 'भिन्न ↔ % ब्रिज, AB संतुलन तराजू, क्रमिक % चेन, आय-व्यय Alligation व परीक्षा अंक स्केल।',
    },
  },
  hero: {
    imageUrl: '/maths-notes/ch2-percentage/hero-percentage.webp',
    caption: {
      en: 'Ch 2 Smart Board Engine: Golden Fractions (1/2..1/16), AB Rule, Successive %, Income–Alligation, Exam Scoreline & Elections.',
      hi: 'अध्याय 2 स्मार्ट बोर्ड: स्वर्णिम भिन्न ↔ %, AB नियम, क्रमिक %, आय-व्यय Alligation, परीक्षा व चुनाव प्रश्न।',
    },
  },
  metrics: {
    pages: 26,
    modules: 7,
    tables: 5,
    svgLabs: 5,
    vectorPlates: 6,
    typesCount: 10,
    pyqHits: 127,
    pyqsSolved: 32,
  },
  weightageBars: [
    {
      label: { en: 'Income–Expenditure–Savings, Remaining Chain & Alligation', hi: 'आय–व्यय–बचत, "शेष का" श्रृंखला व Alligation ट्रिक्स' },
      pct: 32,
      targetTab: 'concepts',
      targetSectionId: 'mod-4-income-savings',
      targetPyqTypeId: 'type-7-income-exp-sav-alligation',
    },
    {
      label: { en: 'Successive % Change, Population & Asset Depreciation', hi: 'क्रमिक % परिवर्तन, जनसंख्या व मशीन मूल्यह्रास (Depreciation)' },
      pct: 26,
      targetTab: 'concepts',
      targetSectionId: 'mod-3-successive-population',
      targetPyqTypeId: 'type-4-successive-net-change',
    },
    {
      label: { en: 'Fraction Bridge, Base Comparison & AB Constant Rule', hi: 'भिन्न ↔ % रूपांतरण, आधार तुलना व AB स्थिर नियम' },
      pct: 24,
      targetTab: 'concepts',
      targetSectionId: 'mod-2-ab-rule',
      targetPyqTypeId: 'type-3-ab-constant-consumption',
    },
    {
      label: { en: 'Elections, Exam Pass–Fail Scoreline, Mixtures & Weighted Cost', hi: 'चुनाव, परीक्षा पास–फेल स्केल, मिश्रण व भारित लागत %' },
      pct: 18,
      targetTab: 'concepts',
      targetSectionId: 'mod-6-elections',
      targetPyqTypeId: 'type-9-elections-voters',
    },
  ],
  title: {
    en: 'Ch 2: Percentage (%) — Fraction Engine & RRB Applications',
    hi: 'अध्याय 2: प्रतिशत (Percentage %) — भिन्न सूत्र व रेलवे अनुप्रयोग',
  },
  subtitle: {
    en: 'Smart Board Class • 7 Rule Modules, 5 Interactive SVG Labs & 32 Verified Real PYQs (2–3 Methods Each)',
    hi: 'स्मार्ट बोर्ड कम्प्लीट क्लास • सभी नियम पॉइंट-टू-पॉइंट + 5 SVG लैब्स + 32 रियल PYQs (2–3 विधियाँ)',
  },
  quickRevision60Sec: [
    {
      title: { en: 'Fraction Bridge & Base Rule', hi: 'भिन्न ↔ % ब्रिज व आधार नियम' },
      targetSectionId: 'mod-1-fraction-bridge',
      points: {
        en: '• $x\\% \\text{ of } y = y\\% \\text{ of } x$ (Flip whichever looks easier!).\n• Key Fractions: $1/6=16\\frac{2}{3}\\%, 1/7=14.28\\%, 1/8=12.5\\%, 3/8=37.5\\%, 5/8=62.5\\%$.\n• "X is what % more/less than Y?" ⇒ ALWAYS put Y ("than / से") in Denominator!',
        hi: '• $x\\%$ का $y = y\\%$ का $x$ (जो आसान लगे उसे पलट दें!)।\n• मुख्य भिन्न: $1/6=16\\frac{2}{3}\\%, 1/7=14.28\\%, 1/8=12.5\\%, 3/8=37.5\\%, 5/8=62.5\\%$।\n• "X, Y से कितना % अधिक/कम है?" ⇒ तुलनात्मक शब्द "से / than" वाली संख्या Y सदैव हर (Denominator) में रखें!',
      },
    },
    {
      title: { en: 'AB Rule & Successive Tricks', hi: 'AB नियम व क्रमिक % शॉर्टकट' },
      targetSectionId: 'mod-2-ab-rule',
      points: {
        en: '• Fixed Product ($A \\times B$): $+x/y \\implies -x/(x+y)$; $+25\\% (+1/4) \\implies -20\\% (-1/5)$.\n• Successive 2 steps: $a + b + \\frac{ab}{100}$; equal $+x\\%, -x\\% \\implies -\\frac{x^2}{100}\\%$ (ALWAYS Loss!).\n• 3+ steps or mixed %: Use Ratio Chain $(10\\to11) \\times (5\\to6) \\times (4\\to5)$.',
        hi: '• स्थिर गुणनफल ($A \\times B$): $+x/y \\implies -x/(x+y)$; $+25\\% \\implies -20\\%$, $+33\\frac{1}{3}\\% \\implies -25\\%$।\n• क्रमिक बदलाव: $a + b + \\frac{ab}{100}$; समान $+x\\%, -x\\% \\implies -\\frac{x^2}{100}\\%$ (सदैव हानि!)।\n• 3+ चरण: सीधे रेश्यो चेन $(10\\to11) \\times (5\\to6) \\times (4\\to5)$ से गुणा करें।',
      },
    },
    {
      title: { en: 'Income–Savings & Alligation', hi: 'आय–व्यय व Alligation ट्रिक' },
      targetSectionId: 'mod-4-income-savings',
      points: {
        en: '• Direct spend vs "of remaining": Multiply leftovers $I \\times (1-a\\%)(1-b\\%)$!\n• Weighted Income Change: $\\Delta I = \\frac{E\\%(\\Delta E) + S\\%(\\Delta S)}{100}$.\n• Given $\\Delta I, \\Delta E, \\Delta S$: Use Alligation Cross $(\\Delta E - \\Delta I : \\Delta I - \\Delta S)$ for instant $S\\%$!',
        hi: '• सीधा खर्च vs "शेष का": क्रमशः बचे भागों का गुणा $I \\times (1-a\\%)(1-b\\%)$ करें!\n• भारित आय बदलाव: $\\Delta I = \\frac{E\\%(\\Delta E) + S\\%(\\Delta S)}{100}$।\n• यदि $\\Delta I, \\Delta E, \\Delta S$ दिए हों: Alligation Cross से केवल 4 सेकंड में बचत % ज्ञात करें!',
      },
    },
    {
      title: { en: 'Exam Gap, Elections & Mixtures', hi: 'परीक्षा, चुनाव व मिश्रण नियम' },
      targetSectionId: 'mod-5-marks-venn',
      points: {
        en: '• 1 fails by $f$, other $+p$ above pass ⇒ $(b - a)\\% = f + p$!\n• Elections: Registered $\\times$ Cast% $\\times$ Valid% $\\times |W\\% - L\\%| = \\text{Win Margin}$.\n• Adding Salt/Sugar to Solution: Fix non-changing component (Water) to get exact answer!',
        hi: '• 1 छात्र $f$ से फेल व दूसरा $+p$ अधिक लाए ⇒ $(b - a)\\% = f + p$ अंक!\n• चुनाव: कुल वोटर $\\times$ डाले % $\\times$ वैध % $\\times |W\\% - L\\%| = \\text{जीत अंतर}$।\n• चीनी/नमक मिलाने पर: अपरिवर्तित घटक (पानी) की मात्रा बराबर कर तुरंत उत्तर निकालें!',
      },
    },
  ],

  sections: [
    {
      id: 'mod-1-fraction-bridge',
      number: '2.1',
      shortLabel: '2.1 Fraction ↔ %',
      pyqTypeId: 'type-1-fraction-base-pct',
      diagramKey: 'ch2-fraction-wheel',
      title: {
        en: 'Module 1: Fraction ↔ Percentage Bridge, Reverse Flip & Base Rule',
        hi: 'मॉड्यूल 1: भिन्न ↔ प्रतिशत रूपांतरण, रिवर्स ट्रिक व आधार (Base) तुलना',
      },
      summaryTag: {
        en: '1/2 to 1/20 Fractions • A% of B = B% of A • "More/Less Than" Denominator Lock',
        hi: 'स्वर्णिम भिन्न चार्ट (1/2..1/16) • x% का y = y% का x • "से अधिक/कम" आधार नियम',
      },
      boardCards: [
        {
          id: 'card-2-1-1',
          title: {
            en: '1. % Meaning, Golden Fractions & Reverse Flip (A% of B = B% of A)',
            hi: '1. प्रतिशत का अर्थ, स्वर्णिम भिन्न मान व Reverse Flip नियम',
          },
          formula: '$$x\\% = \\frac{x}{100} \\quad|\\quad x\\% \\text{ of } y = y\\% \\text{ of } x \\quad|\\quad 37.5\\% = \\frac{3}{8}, \\; 16\\frac{2}{3}\\% = \\frac{1}{6}$$',
          points: [
            { en: '% to Fraction: Divide by 100 | Fraction to %: Multiply by 100.', hi: '% से भिन्न बदलना: 100 से भाग (÷ 100) | भिन्न से % बदलना: 100 से गुणा (× 100)।' },
            { en: 'Base Family 1/8 = 12.5%: Know 3/8 = 37.5%, 5/8 = 62.5%, 7/8 = 87.5% by heart.', hi: '1/8 परिवार (12.5%): 3/8 = 37.5%, 5/8 = 62.5%, व 7/8 = 87.5% सदैव याद रखें।' },
            { en: 'Base Family 1/6 = 16⅔% & 1/7 = 14.28%: 5/6 = 83⅓%, 2/7 = 28.56%, 4/7 = 57.14%.', hi: '1/6 व 1/7 परिवार: 1/6 = 16⅔%, 5/6 = 83⅓%; 1/7 = 14.28%, 4/7 = 57.14%।' },
            { en: 'Reverse Flip Trick: Instead of 64% of 25, compute 25% of 64 = 1/4 × 64 = 16 in 1 second!', hi: 'रिवर्स ट्रिक: 64 का 25% = 25 का 64% = 64 × (1/4) = 16 केवल 1 सेकंड में!' },
          ],
          example: {
            title: { en: 'NTPC UG PYQ: How much is 65% of 65 greater than 1/5 of 45?', hi: 'NTPC UG उदाहरण: 65 का 65%, 45 के 1/5 से कितना अधिक है?' },
            basic: {
              en: '1) $65\\% \\text{ of } 65 = \\frac{65 \\times 65}{100} = 42.25$.\n2) $\\frac{1}{5} \\text{ of } 45 = 9 \\Rightarrow 42.25 - 9 = \\mathbf{33.25}$.',
              hi: '1) $65 \\times 65 \\div 100 = 4225 \\div 100 = 42.25$।\n2) $45 \\div 5 = 9 \\Rightarrow 42.25 - 9 = \\mathbf{33.25}$।',
            },
            smart: {
              en: 'Unit 5 square shortcut: $65^2 = (6\\times7)|25 = 42.25$. Subtract `9` ⇒ **33.25** orally!',
              hi: 'इकाई 5 वर्ग ट्रिक: $65^2 = (6\\times7)|25 = 42.25$। सीधे `9` घटाएं = **33.25**!',
            },
          },
        },
        {
          id: 'card-2-1-2',
          title: {
            en: '2. Base Lock Rule: "X is What % of Y?" vs "% More / Less Than Y?"',
            hi: '2. आधार (Denominator) पहचान नियम — सबसे सामान्य परीक्षा गलती से बचें!',
          },
          formula: '$$\\text{"What \\% of Y?"} = \\frac{X}{Y} \\times 100 \\quad|\\quad \\text{"\\% More/Less than Y?"} = \\frac{|X - Y|}{Y} \\times 100$$',
          points: [
            { en: 'Golden Rule: The value attached to "of" or "than" ("का / से") ALWAYS sits in Denominator.', hi: 'अटल नियम: प्रश्न में जिस संख्या के साथ "का (of)" या "से (than)" जुड़ा हो, वही सदैव नीचे (हर में) आएगी!' },
            { en: 'Difference Check: "5% is what % of 4%" = (5/4)×100 = 125%; whereas "% MORE than 4%" = (1/4)×100 = 25%.', hi: 'अंतर समझें: "5%, 4% का कितना %" = (5/4)×100 = 125%; जबकि "4% से कितना % अधिक" = (1/4)×100 = 25%।' },
          ],
          trap: {
            en: 'Exam Trap: Never divide by the first number blindly — read whether it asks "of Y" or "more/less than Y"!',
            hi: 'परीक्षा जाल: आँख मूँद कर पहली संख्या नीचे न रखें — देखें प्रश्न "का Y" पूछ रहा है या "से अधिक/कम Y"!',
          },
        },
      ],
    },
    {
      id: 'mod-2-ab-rule',
      number: '2.2',
      shortLabel: '2.2 AB Rule',
      pyqTypeId: 'type-3-ab-constant-consumption',
      diagramKey: 'ch2-ab-constant',
      title: {
        en: 'Module 2: AB Constant Product Rule & Modified Expenditure Ratios',
        hi: 'मॉड्यूल 2: AB स्थिर गुणनफल नियम व परिवर्तित बजट (खर्च) शॉर्टकट्स',
      },
      summaryTag: {
        en: 'Price × Consumption = Const • Salary Reverse % • Area Side Compensation • Modified Exp Ratio',
        hi: 'कीमत × खपत = स्थिर • वेतन तुलना • आयत भुजा संतुलन • सीमित व्यय वृद्धि',
      },
      boardCards: [
        {
          id: 'card-2-2-1',
          title: {
            en: '1. Pure AB Rule (A × B = Constant) — 1-Second Mental Formula',
            hi: '1. शुद्ध AB नियम (A × B = Constant) — बिना पेन 1-सेकंड उत्तर',
          },
          formula: '$$A \\uparrow \\frac{x}{y} \\implies B \\downarrow \\frac{x}{x + y} \\quad|\\quad A \\downarrow \\frac{x}{y} \\implies B \\uparrow \\frac{x}{y - x}$$',
          points: [
            { en: 'Applies wherever Product = Fixed: Price×Qty = Exp, Length×Breadth = Area, Speed×Time = Dist.', hi: 'कहाँ लागू करें: जहाँ गुणनफल नियत हो — कीमत×खपत=व्यय, लंबाई×चौड़ाई=क्षेत्रफल, चाल×समय=दूरी।' },
            { en: 'Salary Comparison (A vs B): If A earns 33⅓% (+1/3) MORE than B ⇒ B earns 1/(3+1) = 1/4 = 25% LESS.', hi: 'वेतन तुलना: यदि A, B से 33⅓% (+1/3) अधिक कमाता है ⇒ B, A से 1/(3+1) = 1/4 = 25% कम कमाता है।' },
            { en: 'Numerator NEVER changes! Simply ADD to denominator when first value rises; SUBTRACT when it drops.', hi: 'याद करने की ट्रिक: अंश x कभी नहीं बदलता! पहले मान में वृद्धि (+) हो तो हर जोड़ें (x+y), कमी (−) हो तो घटाएं (y−x)।' },
          ],
          example: {
            title: { en: 'Group D S45 PYQ: Sugar rises 25%. How much % must consumption drop for same Exp?', hi: 'Group D उदाहरण: चीनी की कीमत 25% बढ़ी; व्यय स्थिर रखने हेतु खपत कितने % घटाएं?' },
            basic: {
              en: 'Let Price $= 100 \\to 125$. Keep Exp $= 100$ ⇒ Reduce Qty from `125` to `100`: $\\frac{25}{125} \\times 100 = \\mathbf{20\\%}$.',
              hi: 'कीमत $100 \\to 125$। व्यय 100 रखने हेतु खपत `125` से `100` करें: $\\frac{25}{125} \\times 100 = \\mathbf{20\\%}$।',
            },
            smart: {
              en: '$+25\\% = +\\frac{1}{4} \\implies$ Opposite drop $= \\frac{1}{4+1} = \\frac{1}{5} = \\mathbf{20\\%}$ in 1 sec!',
              hi: '$+25\\% = +\\frac{1}{4} \\implies$ विपरीत कमी $= \\frac{1}{4+1} = \\frac{1}{5} = \\mathbf{20\\%}$ केवल 1 सेकंड में!',
            },
          },
        },
        {
          id: 'card-2-2-2',
          title: {
            en: '2. Modified Expenditure (When Exp is NOT Fixed — Price +a%, Exp +b%)',
            hi: '2. संशोधित व्यय नियम (जब कीमत +a% बढ़े पर व्यय केवल +b% बढ़े)',
          },
          formula: '$$\\text{Qty Ratio}: \\; \\text{New Price }(100+a) \\longrightarrow \\text{Target Exp }(100+b) \\implies \\%\Delta = \\frac{b - a}{100 + a} \\times 100$$',
          points: [
            { en: 'Never use 1/x AB trick here because Expenditure also shifts (e.g. +5% allowed).', hi: 'सावधान: यहाँ व्यय भी बदल रहा है, अतः साधारण AB सूत्र न लगाएं — सीधा अनुपात लिखें!' },
            { en: 'One-Line Template: Write Price bottom line = 100+a, Desired Exp = 100+b ⇒ gap over (100+a).', hi: '1-पंक्ति विधि: नई कीमत (100+a) से लक्ष्य व्यय (100+b) तक कमी/वृद्धि % निकालें।' },
          ],
          example: {
            title: { en: 'Group D S4 PYQ: Petrol +10%, cut consumption so expenditure grows by only +5%', hi: 'Group D S4: पेट्रोल +10% महँगा हुआ; खपत कितनी घटाएं कि व्यय केवल +5% बढ़े?' },
            basic: {
              en: 'Old Exp $= 100$. New Price $= 110$, Target Exp $= 105$. Reduction $= \\frac{110-105}{110} = \\frac{5}{110} \\times 100 = \\mathbf{4.55\\%}$.',
              hi: 'नई कीमत $= 110$, लक्ष्य व्यय $= 105$। कमी $= \\frac{110-105}{110} \\times 100 = \\frac{50}{11} = \\mathbf{4.55\\%}$।',
            },
            smart: {
              en: 'Fraction Recall: $\\frac{5}{110} = \\frac{1}{2} \\times \\frac{1}{11} = \\frac{1}{2} \\times 9.09\\% = \\mathbf{4.55\\%}$ immediately!',
              hi: 'भिन्न शॉर्टकट: $\\frac{1}{22} = \\frac{1}{2} \\times 9.09\\% = \\mathbf{4.55\\%}$ (बिना भाग दिए)!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-3-successive-population',
      number: '2.3',
      shortLabel: '2.3 Successive %',
      pyqTypeId: 'type-4-successive-net-change',
      diagramKey: 'ch2-successive-chain',
      title: {
        en: 'Module 3: Successive % Change (Formula vs Ratio Chain) & Population/Depreciation',
        hi: 'मॉड्यूल 3: क्रमिक % परिवर्तन (सूत्र बनाम रेश्यो चेन), जनसंख्या व मूल्यह्रास',
      },
      summaryTag: {
        en: 'a + b + ab/100 • Equal ±x% Loss −x²/100 • Multi-Step Ratio Chain • Compound Growth & Machine Value',
        hi: 'a + b + ab/100 • −x²/100 हानि नियम • 3–4 चरण रेश्यो • जनसंख्या व कार मूल्यह्रास',
      },
      boardCards: [
        {
          id: 'card-2-3-1',
          title: {
            en: '1. Successive Formula vs Multi-Step Fraction Ratio Method',
            hi: '1. क्रमिक बदलाव की 2 प्रमुख विधियाँ (2-चरण सूत्र बनाम बहु-चरण रेश्यो चेन)',
          },
          formula: '$$\\text{Net}\\% = a + b + \\frac{ab}{100} \\quad|\\quad (+x\\%, \\; -x\\%) \\implies -\\frac{x^2}{100}\\% \\; (\\text{ALWAYS Loss!})$$',
          points: [
            { en: 'Formula Method: Best for 2 clean integer rates like +12%, +12% ⇒ 24 + 1.44 = +25.44%.', hi: 'सीधा सूत्र: 2 साधारण पूर्णांकों (+12%, +12%) के लिए उत्तम ⇒ 24 + 1.44 = +25.44%।' },
            { en: 'Symmetric ±x% Rule: +30% & −30% NEVER cancels to 0%! Always yields −(30²)/100 = −9%.', hi: 'समान बदलाव जाल: +30% फिर −30% कभी शून्य नहीं होता — सदैव −(30²)/100 = 9% कमी होगी!' },
            { en: 'Ratio Chain: For 3–4 steps (+10%, +20%, +25%) or fractions (16⅔%), multiply Initial → Final ratios.', hi: 'रेश्यो चेन: 3–4 चरणों (+10%, +20%, +25%) या भिन्न दरों में सीधे अनुपात गुणा करें व तिरछा काटें।' },
          ],
          example: {
            title: { en: 'ALP CBT-2 PYQ: Salary rises +10%, +20%, +25% over 3 years. Net % increase?', hi: 'ALP CBT-2 उदाहरण: वेतन क्रमशः 10%, 20% और 25% बढ़ा। कुल % वृद्धि ज्ञात करें।' },
            basic: {
              en: 'Let Salary $= 100$. Year 1: `110`; Year 2: $110 \\times 1.2 = 132$; Year 3: $132 \\times 1.25 = 165 \\implies \\mathbf{+65\\%}$.',
              hi: 'माना वेतन $= 100$। वर्ष 1: `110`; वर्ष 2: `132`; वर्ष 3: $132 \\times 1.25 = 165 \\implies \\mathbf{+65\\%}$।',
            },
            smart: {
              en: 'Ratio Chain: $(10 \\to 11) \\times (5 \\to 6) \\times (4 \\to 5)$. Cancel `5` ⇒ $40 \\to 66 = 20 \\to 33 = \\frac{+13}{20} = \\mathbf{+65\\%}$!',
              hi: 'रेश्यो चेन: $(10 \\to 11) \\times (5 \\to 6) \\times (4 \\to 5)$। `5` काटें ⇒ $20 \\to 33$ ⇒ $+13/20 = \\mathbf{65\\%}$!',
            },
          },
        },
        {
          id: 'card-2-3-2',
          title: {
            en: '2. Population Growth & Machine Depreciation (Forward & Backward)',
            hi: '2. जनसंख्या वृद्धि व मशीन मूल्यह्रास (आगे व पीछे की गणना)',
          },
          formula: '$$P_n = P_0\\left(1 \\pm \\frac{r_1}{100}\\right)\\left(1 \\pm \\frac{r_2}{100}\\right)\\dots \\quad|\\quad P_0 = \\frac{P_n}{(1 \\pm r/100)^n}$$',
          points: [
            { en: 'Forward (After n years): Multiply P₀ directly by fraction multipliers (e.g. +25% = ×5/4).', hi: 'भविष्य (n वर्ष बाद): P₀ में सीधे वृद्धि/कमी भिन्न (जैसे +25% = 5/4) गुणा करें।' },
            { en: 'Backward (n years ago / Initial price): NEVER multiply backwards by (1−r)! Divide or invert ratio.', hi: 'अतीत (n वर्ष पूर्व): कभी वर्तमान मान का −r% न घटाएं — भिन्न अनुपात उल्टा कर के गुणा करें!' },
            { en: 'Cube Pattern Shortcut: 20% depreciation for 3 yrs ⇒ (5→4)³ = 125 → 64; 25% growth ⇒ (4→5)³ = 64 → 125.', hi: 'घन अनुपात शॉर्टकट: 3 वर्ष में 20% ह्रास ⇒ 5³(125) → 4³(64); 25% वृद्धि ⇒ 4³(64) → 5³(125)!' },
          ],
          example: {
            title: { en: 'Group D S35 PYQ: Car depreciates 20%/yr. Worth ₹32,768 after 3 yrs. Initial price?', hi: 'Group D S35: कार कीमत प्रति वर्ष 20% घटती है। 3 वर्ष बाद ₹32,768 है, तो प्रारंभिक कीमत?' },
            basic: {
              en: '$P_0 \\times \\left(\\frac{4}{5}\\right)^3 = 32768 \\implies P_0 = 32768 \\times \\frac{125}{64} = 512 \\times 125 = \\mathbf{₹64,000}$.',
              hi: '$P_0 \\times \\frac{64}{125} = 32768 \\implies P_0 = 512 \\times 125 = \\mathbf{₹64,000}$।',
            },
            smart: {
              en: 'Instant Powers: $20\\% = 1/5 \\implies 5^3(125) \\to 4^3(64)$. Here $64 = 32768 \\;(\\times 512) \\implies 125 \\times 512 = \\mathbf{₹64,000}$!',
              hi: 'रेश्यो घात: $5^3(125) \\to 4^3(64)$। चूँकि $64 \\times 512 = 32768$, अतः $125 \\times 512 = \\mathbf{₹64,000}$!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-4-income-savings',
      number: '2.4',
      shortLabel: '2.4 Income/Save',
      pyqTypeId: 'type-7-income-exp-sav-alligation',
      diagramKey: 'ch2-income-alligation',
      title: {
        en: 'Module 4: Income, Expenditure, Savings, "Remaining" Chain & Alligation Cross',
        hi: 'मॉड्यूल 4: आय, व्यय, बचत, "शेष का" श्रृंखला व Alligation क्रॉस ट्रिक',
      },
      summaryTag: {
        en: 'Direct vs Remaining Spend • Weighted % Income Change • Alligation Cross for Raman/Sudha/Vikram PYQs',
        hi: 'सीधा जोड़ vs "शेष का" चेन • भारित बदलाव सूत्र • Alligation से 4-Sec बचत %',
      },
      boardCards: [
        {
          id: 'card-2-4-1',
          title: {
            en: '1. Direct Spend Sum vs Sequential "Of Remaining / शेष का" Chain',
            hi: '1. सीधा कुल खर्च (%) बनाम "शेष का (Remaining)" क्रमिक खर्च',
          },
          formula: '$$\\text{Direct}: \\text{Save} = 100\\% - (a + b + c)\\% \\quad|\\quad \\text{Remaining}: \\text{Save} = I\\left(1 - \\frac{a}{100}\\right)\\left(1 - \\frac{b}{100}\\right)$$',
          points: [
            { en: 'Case 1 (No "remaining" word): 25% rent, 35% food, 20% transport ⇒ Add directly = 80% spent (20% saved).', hi: 'केस 1 (सीधा खर्च): 25% किराया, 35% भोजन, 20% यातायात ⇒ सीधे जोड़ें = 80% खर्च ⇒ 20% बचत।' },
            { en: 'Case 2 ("Of the remaining" / "शेष का"): Multiply remaining fractions: 45% spent ⇒ 55% left; 20% left spent ⇒ ×80%.', hi: 'केस 2 ("शेष का"): सदैव बचे हुए हिस्से गुणा करें: 45% खर्च (55% बचा) फिर शेष का 20% (×80% बचा) ⇒ 44% शेष!' },
          ],
          example: {
            title: { en: 'Group D S32 PYQ: 45% household, 20% of remaining transport, saves ₹88,000. Salary?', hi: 'Group D S32: 45% घरेलू, शेष का 20% परिवहन खर्च, तथा बचत ₹88,000। मासिक वेतन?' },
            basic: {
              en: '$S \\times \\frac{55}{100} \\times \\frac{80}{100} = 88000 \\implies S \\times 0.44 = 88000 \\implies S = \\mathbf{₹2,00,000}$.',
              hi: '$S \\times 0.55 \\times 0.80 = 0.44\\,S = 88000 \\implies S = \\mathbf{₹2,00,000}$।',
            },
            smart: {
              en: 'Mental Chain: Left $= 55\\% - 20\\%\\text{ of }55 = 55 - 11 = 44\\%$. Double `44` is `88` ⇒ Salary $= \\mathbf{₹2,00,000}$!',
              hi: 'मेंटल ट्रिक: बचा $= 55\\% - (55\\text{ का }20\\%) = 44\\%$। $44\\% = 88,000$ ⇒ $100\\% = \\mathbf{₹2,00,000}$!',
            },
          },
        },
        {
          id: 'card-2-4-2',
          title: {
            en: '2. Dynamic Income–Exp–Savings Shifts & Alligation Cross (RRB Group D 2025 Hot!)',
            hi: '2. गतिशील आय–व्यय–बचत बदलाव व Alligation क्रॉस (Group D 2025 का हॉट टॉपिक!)',
          },
          formula: '$$I = E + S \\implies \\Delta I = \\frac{E\\%(\\Delta E) + S\\%(\\Delta S)}{100} \\quad|\\quad \\text{Ratio } (E:S) = |\\Delta S - \\Delta I| : |\\Delta I - \\Delta E|$$',
          points: [
            { en: 'Skip Finding ₹ Amounts When Finding %! Take Income = 100 (or clean Exp:Sav ratio like 2:1 or 3:1).', hi: 'यदि उत्तर % में पूछा हो तो ₹ मूल्य मानने की आवश्यकता नहीं! सीधे कुल आय = 100 या अनुपात (जैसे 2:1, 3:1) लें।' },
            { en: 'Weighted Change Formula (₹ change): Net ΔSavings = Income×ΔI% − Expenditure×ΔE%.', hi: 'रुपयों में बदलाव: बचत में बदलाव ($\\Delta S$) = आय में वृद्धि ($I\\times\\Delta I\\%$) − व्यय में वृद्धि ($E\\times\\Delta E\\%$)।' },
            { en: 'Alligation Trick: Put ΔExp% and ΔSav% at corners, ΔInc% in middle → opposite differences give Exp : Sav!', hi: 'Alligation क्रॉस: कोनों पर $\\Delta E\\%$ व $\\Delta S\\%$ और बीच में $\\Delta I\\%$ रखें → तिरछे अंतर से तुरंत Exp : Sav अनुपात मिलेगा!' },
          ],
          example: {
            title: { en: 'Group D S22 PYQ: Vikram saves r%. Income +22%, Exp +16%, Sav +40%. Find r!', hi: 'Group D S22: विक्रम r% बचाता है। आय +22%, व्यय +16% व बचत +40% बढ़ी। r ज्ञात करें!' },
            basic: {
              en: 'Let $I = 100, S = r, E = 100 - r$.\n$0.16(100-r) + 0.40r = 22 \\implies 0.24r = 6 \\implies r = \\mathbf{25\\%}$.',
              hi: 'माना $I=100, S=r, E=100-r$।\n$0.16(100-r) + 0.40r = 22 \\implies 0.24r = 6 \\implies r = \\mathbf{25}$।',
            },
            smart: {
              en: 'Alligation (4 sec): Exp `+16` & Sav `+40` around `+22` ⇒ Ratio `E : S = (40−22) : (22−16) = 18 : 6 = 3 : 1` ⇒ $S = \\frac{1}{4} = \\mathbf{25\\%}$!',
              hi: 'Alligation (4 sec): `16` और `40` के बीच `22` ⇒ अनुपात `E : S = 18 : 6 = 3 : 1` ⇒ बचत $= \\frac{1}{3+1} = \\mathbf{25\\%}$!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-5-marks-venn',
      number: '2.5',
      shortLabel: '2.5 Marks & Venn',
      pyqTypeId: 'type-8-marks-exam-venn',
      diagramKey: 'ch2-exam-election-venn',
      title: {
        en: 'Module 5: Exam Marks Scoreline Gap, Passing % & 2-Set Venn Diagrams',
        hi: 'मॉड्यूल 5: परीक्षा पास–फेल अंक रेखा, न्यूनतम पास % व 2-सेट वेन आरेख',
      },
      summaryTag: {
        en: 'Scored + Failed By = Pass% • Two-Candidate Scoreline Gap • Venn Pass/Fail Inclusion-Exclusion',
        hi: 'प्राप्त + फेल अंक = पास % • 2-छात्र अंक अंतर • वेन आरेख पास/फेल सूत्र',
      },
      boardCards: [
        {
          id: 'card-2-5-1',
          title: {
            en: '1. Pass Threshold Formula & Two-Student Scoreline Gap Rule',
            hi: '1. उत्तीर्णांक सीमा सूत्र व दो विद्यार्थियों की अंक-रेखा ट्रिक',
          },
          formula: '$$\\text{Pass Marks} = \\text{Scored} + \\text{Failed By} \\quad|\\quad \\text{2 Students: } |(b - a)\\%| = \\text{Fail } f + \\text{Extra } p$$',
          points: [
            { en: 'Single Student: Add "failed by" marks to his score (or subtract "extra" marks) to lock Pass% = Marks.', hi: 'एकल छात्र: उसके प्राप्त अंकों में "फेल अंक" जोड़ें (या अधिक अंक घटाएं) ⇒ सीधे पास % के बराबर मान मिलेगा!' },
            { en: 'Two Students (Opposites): One scores a% and fails by f; another scores b% and gets +p extra ⇒ (b−a)% = f + p.', hi: 'दो छात्र (विपरीत): एक a% पाकर f से फेल हो, दूसरा b% पाकर p अधिक लाए ⇒ (b − a)% = f + p अंक!' },
            { en: 'Target-Marks Gap Type: Required pass marks 780, Priya scored 728 and failed by 5% ⇒ 5% = 780 − 728 = 52!', hi: 'निश्चित उत्तीर्णांक: पास होने हेतु 780 चाहिए, सोनल 728 लाई और 5% से फेल हुई ⇒ 5% = 780 − 728 = 52!' },
          ],
          example: {
            title: { en: 'Tech Gr-III PYQ: Pass 55%, student got 120 and failed by 78. Find Total Marks.', hi: 'Tech Gr-III उदाहरण: पास हेतु 55% अनिवार्य हैं। छात्र 120 लाकर 78 से फेल हुआ। कुल अंक?' },
            basic: {
              en: 'Passing marks $= 120 + 78 = 198$.\n$55\\% \\text{ of Max} = 198 \\implies \\text{Max} = \\frac{198 \\times 100}{55} = \\mathbf{360}$.',
              hi: 'उत्तीर्णांक $= 120 + 78 = 198$।\n$55\\% = 198 \\implies 100\\% = \\frac{198 \\times 100}{55} = \\mathbf{360}$।',
            },
            smart: {
              en: 'Divide by 11: $55\\% = 198 \\xrightarrow{\\div 11} 5\\% = 18 \\xrightarrow{\\times 20} 100\\% = \\mathbf{360}$ orally!',
              hi: '11 से काटें: $55\\% = 198 \\xrightarrow{\\div 11} 5\\% = 18 \\xrightarrow{\\times 20} 100\\% = \\mathbf{360}$ बिना पेन!',
            },
          },
        },
        {
          id: 'card-2-5-2',
          title: {
            en: '2. 2-Set Venn Diagrams & Weighted Literacy Shortcut',
            hi: '2. दो-विषय वेन आरेख (Venn Sets) व समग्र साक्षरता भारित ट्रिक',
          },
          formula: '$$100\\% = n(A) + n(B) - n(A \\cap B) + \\text{Neither} \\quad|\\quad \\text{Both Fail}\\% = 100\\% - \\text{At Least 1 Pass}\\%$$',
          points: [
            { en: 'Same-Unit Trap: Keep ALL three values in SAME direction (all PASS% or all FAIL%!) before adding.', hi: 'समान इकाई नियम: सूत्र में हमेशा एक ही दिशा रखें — या तो तीनों को PASS% में बदलें या तीनों को FAIL% में!' },
            { en: 'Exact Shortcut: If overall group literacy = k% and Male group = k%, Female group MUST ALSO = k% (0 sec!).', hi: 'वेटर शॉर्टकट: यदि कुल जनसंख्या की साक्षरता k% है और पुरुष भी k% साक्षर हैं, तो महिलाएँ भी सदैव k% ही होंगी (0 सेकंड में उत्तर)!' },
          ],
        },
      ],
    },
    {
      id: 'mod-6-elections',
      number: '2.6',
      shortLabel: '2.6 Elections',
      pyqTypeId: 'type-9-elections-voters',
      title: {
        en: 'Module 6: Election Voter-List Tree (Registered → Cast → Valid → Winner Margin)',
        hi: 'मॉड्यूल 6: चुनाव व मतदाता सूची (पंजीकृत → डाले गए → वैध मत → जीत अंतर)',
      },
      summaryTag: {
        en: 'Voter Funnel Multiplication • Invalid Votes Deduction • Winner − Loser % Margin • Tie Counterfactual',
        hi: 'मतदाता क्रमिक चेन • अवैध मत घटाना • विजेता बनाम हारने वाला अंतर • बराबरी शर्त प्रश्न',
      },
      boardCards: [
        {
          id: 'card-2-6-1',
          title: {
            en: '1. Complete Election One-Line Chain Formula',
            hi: '1. एक-पंक्ति चुनाव मतदाता चेन (Registered → Valid → Win Margin)',
          },
          formula: '$$R \\times \\left(\\frac{\\text{Cast}\\%}{100}\\right) \\times \\left(\\frac{\\text{Valid}\\%}{100}\\right) \\times \\frac{|W\\% - L\\%|}{100} = \\text{Margin Votes}$$',
          points: [
            { en: 'Margin shortcut: If winner gets W% of valid votes (and only 2 candidates), margin = (2W − 100)% directly!', hi: 'सीधा अंतर ट्रिक: यदि 2 ही उम्मीदवार हों और विजेता को वैध मतों का W% मिले ⇒ जीत का अंतर = (2W − 100)% होगा!' },
            { en: 'Read Base Carefully: Sometimes Invalid votes are fixed COUNT (not %), or Candidate B shares fixed valid %.', hi: 'आधार ध्यान से पढ़ें: देखें कि W% "कुल सूची" का दिया है या "वैध मतों" का; कभी-कभी अवैध मत संख्या (count) में होते हैं।' },
          ],
          example: {
            title: { en: 'NTPC UG S46 PYQ: 96% voted, 10% invalid, winner got 57% of valid & won by 378. Voters?', hi: 'NTPC UG S46: 96% ने वोट डाले, 10% अवैध हुए, विजेता को वैध का 57% मिला व 378 से जीता। कुल मतदाता?' },
            basic: {
              en: 'Margin $= 57\\% - 43\\% = 14\\%$ of Valid.\n$R \\times \\frac{96}{100} \\times \\frac{90}{100} \\times \\frac{14}{100} = 378 \\implies R = \\mathbf{3125}$.',
              hi: 'अंतर $= 57\\% - 43\\% = 14\\%$।\n$R \\times \\frac{96}{100} \\times \\frac{90}{100} \\times \\frac{14}{100} = 378 \\implies R = \\mathbf{3125}$।',
            },
            smart: {
              en: 'Fraction Cut: $14 \\times 9 = 126$ divides `378` cleanly ($= 3$)! So $R = \\frac{3 \\times 25 \\times 1000}{24} = \\frac{25000}{8} = \\mathbf{3125}$!',
              hi: 'तेज़ कट: $14 \\times 9 = 126$ से `378` सीधा 3 बार कटता है! बचा $R = \\frac{3 \\times 25 \\times 1000}{24} = \\mathbf{3125}$!',
            },
          },
        },
        {
          id: 'card-2-6-2',
          title: {
            en: '2. Tie Condition & Multi-Candidate Election Shortcuts',
            hi: '2. बराबरी (Tie) शर्त व बहु-उम्मीदवार चुनाव प्रश्न',
          },
          formula: '$$Y(1 + r\\%) = X \\implies X:Y = (100+r) : 100 \\implies \\text{Valid Votes} = (X + Y) \\text{ Units}$$',
          points: [
            { en: 'Group D Special: "If Y got 50% more votes, it would tie with X" ⇒ X = 1.5 Y ⇒ Ratio X : Y = 3 : 2!', hi: 'Group D विशेष: "यदि Y को 50% अधिक वोट मिलते तो बराबरी होती" ⇒ X = 1.5 Y ⇒ अनुपात X : Y = 3 : 2!' },
            { en: 'Never assume 100% voted in tie problems — convert total valid votes (X+Y) by dividing by Cast%!', hi: 'अंतिम चरण ध्यान रखें: प्राप्त (X+Y) कुल डाले गए/वैध मत हैं; कुल पंजीकृत मतदाता हेतु Cast% (जैसे 75% = 3/4) से भाग दें।' },
          ],
        },
      ],
    },
    {
      id: 'mod-7-mixtures-commission',
      number: '2.7',
      shortLabel: '2.7 Mixtures/Cost',
      pyqTypeId: 'type-10-mixture-multiasset-weighted',
      title: {
        en: 'Module 7: Sugar/Water Mixtures, Weighted Multi-Asset Cost % & Error %',
        hi: 'मॉड्यूल 7: मिश्रण (स्थिर घटक विधि), बहु-वस्तु भारित लागत % व त्रुटि प्रतिशत',
      },
      summaryTag: {
        en: 'Fix Non-Changing Component (Water) • WM + TV Weighted Cost • Commission Slab • Fraction Error %',
        hi: 'अपरिवर्तित घटक (पानी) विधि • WM+TV भारित कीमत बदलाव • कमीशन बोनस • गुणा त्रुटि %',
      },
      boardCards: [
        {
          id: 'card-2-7-1',
          title: {
            en: '1. Sugar / Salt Solution Mixing — Constant Component & Alligation Tricks',
            hi: '1. विलयन मिश्रण — अपरिवर्तित घटक (पानी) विधि व Alligation शॉर्टकट',
          },
          formula: '$$\\text{Water}_1 = \\text{Water}_2 \\implies Q_1 \\times (100 - s_1)\\% = (Q_1 + x) \\times (100 - s_2)\\%$$',
          points: [
            { en: 'Golden Rule: Focus ONLY on the component NOT added/evaporated (e.g. if Sugar is added, Water kg stays CONSTANT!).', hi: 'अटल नियम: सदैव उस घटक पर काम करें जिसकी मात्रा बदली नहीं गई (यदि चीनी मिलाई जाए तो पानी का वज़न स्थिर रहेगा!)।' },
            { en: 'Alligation Method: Pure sugar added = 100% sugar! Mix s₁% & 100% to target s₂% → ratio (100−s₂) : (s₂−s₁).', hi: 'Alligation विधि: मिलाई गई शुद्ध चीनी = 100% चीनी! $s_1\\%$ व $100\\%$ के बीच $s_2\\%$ रख अनुपात निकालें।' },
          ],
          example: {
            title: { en: 'Group D S6 PYQ: 430 g sugar solution has 20% sugar. Add sugar to make it 50%?', hi: 'Group D S6: 430 g विलयन में 20% चीनी है। इसे 50% बनाने हेतु कितनी चीनी मिलाई जाए?' },
            basic: {
              en: 'Water $= 80\\%$ of $430 = 344\\text{ g}$. At $50\\%$ sugar, Water is $50\\%$ ⇒ Total $= 344 \\times 2 = 688\\text{ g}$.\nSugar added $= 688 - 430 = \\mathbf{258\\text{ g}}$.',
              hi: 'पानी $= 430$ का $80\\% = 344\\text{ g}$। नए विलयन में 50% चीनी ⇒ 50% पानी = $344\\text{ g}$ ⇒ कुल = $688\\text{ g}$।\nमिलाई चीनी $= 688 - 430 = \\mathbf{258\\text{ g}}$।',
            },
            smart: {
              en: 'Alligation: Mix `20%` & `100%` to get `50%` ⇒ Ratio `50 : 30 = 5 : 3`. Here `5 parts = 430` (`×86`) ⇒ Add `3 × 86` = **258 g**!',
              hi: 'Alligation (4 sec): `20%` व `100%` के बीच `50%` ⇒ अनुपात `50 : 30 = 5 : 3`। `5 = 430 (×86)` ⇒ मिलाएं `3 × 86` = **258 g**!',
            },
          },
        },
        {
          id: 'card-2-7-2',
          title: {
            en: '2. Multi-Asset Weighted Change (WM + TV PYQs) & Multiplication Error %',
            hi: '2. बहु-वस्तु भारित कीमत बदलाव (Group D WM+TV) व त्रुटि % सूत्र',
          },
          formula: '$$\\text{Net}\\% = \\frac{\\sum (\\text{Unit Cost} \\times \\text{Qty} \\times \\Delta\\%)}{\\sum (\\text{Unit Cost} \\times \\text{Qty})} \\quad|\\quad \\text{Error}\\% = \\frac{|\\text{Wrong} - \\text{True}|}{\\text{True}} \\times 100$$',
          points: [
            { en: 'Multi-Asset (WM + TV): Assume clean base TV = 100, then WM = 50 (if 50% less). Multiply Qty × Price × %change!', hi: 'WM + TV प्रश्न: TV की कीमत 100 मानें (WM 50% कम ⇒ 50)। फिर केवल (वस्तु संख्या × कीमत × %बदलाव) का औसत निकालें!' },
            { en: 'Multiplication Error: Multiplied by 3/5 instead of 5/3 ⇒ pick LCM(5,3)=15 ⇒ True 25, Wrong 9 ⇒ Error = 16/25 = 64%.', hi: 'त्रुटि % (5/3 के स्थान पर 3/5): हरों का LCM (15) मानें ⇒ सही 25, गलत 9 ⇒ त्रुटि = 16/25 = 64%!' },
          ],
        },
      ],
    },
  ],

  decisionMatrix: {
    title: {
      en: 'Exam-Hall 3-Second Method Selector (Which Shortcut Wins Fastest?)',
      hi: 'एग्ज़ाम-हॉल 3-सेकंड निर्णय तालिका (कब कौन-सी ट्रिक लगाएं?)',
    },
    rows: [
      {
        trigger: { en: 'Dirty Percentages like 12.5%, 37.5%, 16⅔%, 14.28%', hi: 'जटिल प्रतिशत: 12.5%, 37.5%, 16⅔%, 14.28%' },
        firstCheck: { en: 'Convert immediately to Fractions (1/8, 3/8, 1/6, 1/7) & cancel!', hi: 'तुरंत भिन्न (1/8, 3/8, 1/6, 1/7) में बदलें और काटें!' },
        avoid: { en: 'Never multiply decimals (× 0.375) manually in exam', hi: 'एग्ज़ाम में दशमलव (× 0.375) से लंबा गुणा कभी न करें।' },
      },
      {
        trigger: { en: 'Fixed Product / A is x% more than B / Sugar Exp Fixed', hi: 'स्थिर व्यय / A, B से x% अधिक / क्षेत्रफल नियत रखना' },
        firstCheck: { en: 'Apply AB Rule: +x/y ⇒ −x/(x+y) OR ratio (100+a) → (100+b)', hi: 'सीधे AB नियम (+x/y ⇒ −x/(x+y)) या रेश्यो (100+a)→(100+b) लगाएं!' },
        avoid: { en: 'Don’t assume same reverse percentage (+25% ≠ −25%!)', hi: '+25% के विपरीत कभी −25% उत्तर न मान लें (−20% होगा!)' },
      },
      {
        trigger: { en: 'Income +A%, Exp +B%, Sav +C% (Find Savings % r)', hi: 'आय +A%, व्यय +B%, बचत +C% (बचत % r पूछें)' },
        firstCheck: { en: 'Draw 4-sec Alligation Cross (Exp & Sav around Total Income)', hi: '4-सेकंड Alligation क्रॉस बनाएं — बिना किसी समीकरण के r मिलेगा!' },
        avoid: { en: 'Avoid long ₹ calculations when question asks pure %', hi: 'जब उत्तर % में पूछा हो, तो असली ₹ मान का उपयोग व्यर्थ न करें।' },
      },
      {
        trigger: { en: '3–4 Successive Changes or Population/Depreciation (n yrs)', hi: '3–4 क्रमिक बदलाव या जनसंख्या / मूल्यह्रास (n वर्ष)' },
        firstCheck: { en: 'Use Fraction Ratio Chain (a→b × c→d) or Power Ratio (4³:5³)', hi: 'भिन्न रेश्यो चेन या घात अनुपात (4³:5³) का उपयोग करें!' },
        avoid: { en: 'Never multiply backwards by (1 − r%) for past population', hi: 'पिछले वर्ष की जनसंख्या निकालने हेतु कभी सीधे (1 − r%) न घटाएं!' },
      },
    ],
  },

  trapAlerts: [
    {
      title: { en: 'Trap 1: Equal +30% and −30% Equals 0% Change', hi: 'जाल 1: +30% और −30% को 0% मान लेना' },
      detail: { en: 'Net change is ALWAYS −(x²/100)% loss: +30% then −30% = −9% decrease!', hi: 'समान +x% और −x% सदैव −(x²/100)% कमी देते हैं: +30% व −30% ⇒ 9% कमी!' },
    },
    {
      title: { en: 'Trap 2: Wrong Base in "% More / Less Than" Comparison', hi: 'जाल 2: तुलना करते समय गलत संख्या को हर (Denominator) में रखना' },
      detail: { en: 'The number after "of" or "than" ("का / से") MUST go in denominator! (+25% inverse is −20%, NOT −25%).', hi: 'जिस संख्या के साथ "से / का" जुड़ा हो वही सदैव हर में आती है!' },
    },
    {
      title: { en: 'Trap 3: Ignoring "Of the Remaining" ("शेष का") Word', hi: 'जाल 3: आय खर्च प्रश्नों में "शेष का (Of the remaining)" शब्द अनदेखा करना' },
      detail: { en: '10% then 50% of remaining = 100 → 90 → 45 (55% left spent total), NOT 60%!', hi: '10% खर्च व शेष का 50% ⇒ कुल खर्च 60% नहीं, बल्कि 10% + (90 का 50%) = 55% होगा!' },
    },
    {
      title: { en: 'Trap 4: Backward Population (−10% on Current Value)', hi: 'जाल 4: पिछली जनसंख्या हेतु वर्तमान का −10% घटा देना' },
      detail: { en: '13,200 after +10% means 110% = 13,200 ⇒ Past = 12,000 (NEVER 13,200 − 1,320 = 11,880!).', hi: '+10% के बाद 13,200 का अर्थ 110% = 13,200 ⇒ पहले = 12,000 (कभी 11,880 नहीं!)।' },
    },
    {
      title: { en: 'Trap 5: Adding Water Instead of Sugar Without Fixing Water', hi: 'जाल 5: मिश्रण में चीनी मिलाने पर कुल मात्रा पुरानी मान लेना' },
      detail: { en: 'When adding sugar, total solution weight increases! Keep pure Water weight equal on both sides.', hi: 'चीनी मिलाने पर कुल विलयन का भार बढ़ता है — दोनों तरफ केवल पानी (स्थिर घटक) की मात्रा बराबर करें।' },
    },
    {
      title: { en: 'Trap 6: Different Bases in Election Invalid Votes', hi: 'जाल 6: चुनाव में कुल सूची बनाम वैध मतों का भ्रम' },
      detail: { en: 'Check whether winner % is of Valid Votes (chain 96% × 90% × Diff%) or Total Polled.', hi: 'हमेशा जांचें कि विजेता का % वैध मतों पर दिया है या कुल डाले गए वोटों पर!' },
    },
  ],

  tables: [
    {
      id: 'tbl-golden-fractions',
      title: { en: 'Table 1: Complete Golden Fraction ↔ % Memory Chart (1/1 to 1/20 + Key Multiples)', hi: 'तालिका 1: स्वर्णिम भिन्न ↔ प्रतिशत चार्ट (1/1 से 1/20 व मुख्य गुणज)' },
      headers: { en: ['Fraction', 'Exact %', 'Decimal % & Derived Tip'], hi: ['भिन्न', 'सटीक %', 'दशमलव % व मुख्य व्युत्पन्न मान'] },
      rows: [
        [{ en: '1/2, 1/3, 1/4, 1/5', hi: '1/2, 1/3, 1/4, 1/5' }, { en: '50%, 33⅓%, 25%, 20%', hi: '50%, 33⅓%, 25%, 20%' }, { en: '2/3 = 66⅔%, 3/4 = 75%, 3/5 = 60%, 4/5 = 80%', hi: '2/3 = 66⅔%, 3/4 = 75%, 3/5 = 60%, 4/5 = 80%' }],
        [{ en: '1/6, 1/7, 1/8, 1/9', hi: '1/6, 1/7, 1/8, 1/9' }, { en: '16⅔%, 14²⁄₇%, 12½%, 11¹⁄₉%', hi: '16⅔%, 14²⁄₇%, 12½%, 11¹⁄₉%' }, { en: '5/6 = 83⅓%, 3/8 = 37.5%, 5/8 = 62.5%, 4/7 = 57.14%', hi: '5/6 = 83⅓%, 3/8 = 37.5%, 5/8 = 62.5%, 4/7 = 57.14%' }],
        [{ en: '1/11, 1/12, 1/13, 1/14', hi: '1/11, 1/12, 1/13, 1/14' }, { en: '9¹⁄₁₁%, 8⅓%, 7⁹⁄₁₃%, 7¹⁄₇%', hi: '9¹⁄₁₁%, 8⅓%, 7⁹⁄₁₃%, 7¹⁄₇%' }, { en: '9.09%, 8.33%, 7.69%, 7.14% (5/12 = 41⅔%)', hi: '9.09%, 8.33%, 7.69%, 7.14% (5/12 = 41⅔%)' }],
        [{ en: '1/15, 1/16, 1/20, 1/25', hi: '1/15, 1/16, 1/20, 1/25' }, { en: '6⅔%, 6¼%, 5%, 4%', hi: '6⅔%, 6¼%, 5%, 4%' }, { en: '6.67%, 6.25%, 5%, 4% (1/40 = 2.5%, 3/16 = 18.75%)', hi: '6.67%, 6.25%, 5%, 4% (1/40 = 2.5%, 3/16 = 18.75%)' }],
      ],
    },
    {
      id: 'tbl-ab-pairs',
      title: { en: 'Table 2: Instant AB Rule Pairs (Price ↑ vs Consumption ↓ / A vs B Salary)', hi: 'तालिका 2: AB स्थिर नियम जोड़े (कीमत ↑ बनाम खपत ↓ / A व B वेतन तुलना)' },
      headers: { en: ['First Change (+)', 'Opposite Reduction (−)', 'Reverse (+ if First Decreases)'], hi: ['प्रथम वृद्धि (+)', 'विपरीत कमी (−)', 'प्रथम कमी (−) पर विपरीत वृद्धि (+)'] },
      rows: [
        [{ en: '+10% (+1/10)', hi: '+10% (+1/10)' }, { en: '−9¹⁄₁₁% (−9.09%)', hi: '−9¹⁄₁₁% (−9.09%)' }, { en: '−10% ⇒ +11¹⁄₉% (+11.11%)', hi: '−10% ⇒ +11¹⁄₉% (+11.11%)' }],
        [{ en: '+20% (+1/5)', hi: '+20% (+1/5)' }, { en: '−16⅔% (−16.67%)', hi: '−16⅔% (−16.67%)' }, { en: '−20% ⇒ +25% (+1/4)', hi: '−20% ⇒ +25% (+1/4)' }],
        [{ en: '+25% (+1/4)', hi: '+25% (+1/4)' }, { en: '−20% (−1/5)', hi: '−20% (−1/5)' }, { en: '−25% ⇒ +33⅓% (+1/3)', hi: '−25% ⇒ +33⅓% (+1/3)' }],
        [{ en: '+33⅓% (+1/3)', hi: '+33⅓% (+1/3)' }, { en: '−25% (−1/4)', hi: '−25% (−1/4)' }, { en: '−50% ⇒ +100% (+1/1)', hi: '−50% ⇒ +100% (+1/1)' }],
        [{ en: '+50% (+1/2)', hi: '+50% (+1/2)' }, { en: '−33⅓% (−1/3)', hi: '−33⅓% (−1/3)' }, { en: '−16⅔% ⇒ +20% (+1/5)', hi: '−16⅔% ⇒ +20% (+1/5)' }],
      ],
    },
    {
      id: 'tbl-successive-ready',
      title: { en: 'Table 3: Ready-to-Use Successive Net Percentages (Save 15 Sec per Question)', hi: 'तालिका 3: रेडी-टू-यूज़ क्रमिक % मान (हर प्रश्न में 15 सेकंड बचाएं)' },
      headers: { en: ['Rates Applied', '2-Year / 2-Step Net', '3-Year Net'], hi: ['लागू दरें', '2-चरण परिणाम', '3-चरण परिणाम'] },
      rows: [
        [{ en: '+10% each yr', hi: '+10% प्रति वर्ष' }, { en: '+21% (1.21×)', hi: '+21% (1.21×)' }, { en: '+33.1% (1.331× = 1000→1331)', hi: '+33.1% (1000 → 1331)' }],
        [{ en: '+20% each yr', hi: '+20% प्रति वर्ष' }, { en: '+44% (1.44×)', hi: '+44% (1.44×)' }, { en: '+72.8% (125 → 216)', hi: '+72.8% (125 → 216)' }],
        [{ en: '+25% each yr', hi: '+25% प्रति वर्ष' }, { en: '+56.25% (16→25)', hi: '+56.25% (16→25)' }, { en: '+95.3125% (64 → 125)', hi: '+95.3125% (64 → 125)' }],
        [{ en: '−10% / −20% each yr', hi: '−10% व −20% ह्रास' }, { en: '−19% (10%×2) / −36% (20%×2)', hi: '−19% (10%×2) / −36% (20%×2)' }, { en: '−27.1% (10%×3) / −48.8% (20%×3: 125→64)', hi: '−27.1% (10%×3) / −48.8% (20%×3: 125→64)' }],
      ],
    },
    {
      id: 'tbl-income-marks-keys',
      title: { en: 'Table 4: Income, Exam Scoreline & Mixture Master Formulas', hi: 'तालिका 4: आय, परीक्षा अंक रेखा व मिश्रण मास्टर सूत्र' },
      headers: { en: ['Topic', 'Exact Exam Formula', 'Topper Shortcut'], hi: ['टॉपिक', 'एग्ज़ाम फॉर्मूला', 'टॉपर शॉर्टकट'] },
      rows: [
        [{ en: 'Remaining Spend', hi: 'शेष खर्च श्रृंखला' }, { en: '$I \\times (1-a\\%)(1-b\\%) = \\text{Left}$', hi: '$I \\times (1-a\\%)(1-b\\%) = \\text{बचत}$' }, { en: 'Convert to fractions first', hi: 'पहले साधारण भिन्न में बदलें' }],
        [{ en: 'Income Alligation', hi: 'आय–बचत Alligation' }, { en: '$\\text{Exp}:\\text{Sav} = |\\Delta S - \\Delta I| : |\\Delta I - \\Delta E|$', hi: '$\\text{Exp}:\\text{Sav} = |\\Delta S - \\Delta I| : |\\Delta I - \\Delta E|$' }, { en: 'Zero ₹ needed for Savings %', hi: 'बचत % हेतु ₹ की आवश्यकता नहीं' }],
        [{ en: 'Pass–Fail Gap', hi: 'पास–फेल अंतर' }, { en: '$|(b - a)\\%| = \\text{Fail } f + \\text{Extra } p$', hi: '$|(b - a)\\%| = \\text{फेल } f + \\text{अधिक } p$' }, { en: 'Divide difference by 1% value', hi: 'सीधे 1% का मान निकालें' }],
        [{ en: 'Adding Sugar/Salt', hi: 'चीनी/नमक मिलाना' }, { en: '$Q_1(100-s_1) = (Q_1+x)(100-s_2)$', hi: '$Q_1(100-s_1) = (Q_1+x)(100-s_2)$' }, { en: 'Alligation $(s_1, 100) \\to s_2$', hi: 'Alligation $(s_1, 100) \\to s_2$' }],
      ],
    },
    {
      id: 'tbl-2d3d-scaling',
      title: { en: 'Table 5: Bonus Geometry Area & Volume Percentage Shifts (Square/Circle/Cube)', hi: 'तालिका 5: ज्यामिति क्षेत्रफल (2D) व आयतन (3D) में प्रतिशत बदलाव' },
      headers: { en: ['Shape Dimension Change', 'Area % (2D)', 'Volume % (3D)'], hi: ['भुजा / त्रिज्या बदलाव', 'क्षेत्रफल % (2D)', 'आयतन % (3D)'] },
      rows: [
        [{ en: 'Side / Radius +10%', hi: 'भुजा / त्रिज्या +10%' }, { en: '+21% (10→11 square)', hi: '+21% (वर्ग/वृत्त)' }, { en: '+33.1% (1000→1331 cube/sphere)', hi: '+33.1% (घन/गोला)' }],
        [{ en: 'Side / Radius +20%', hi: 'भुजा / त्रिज्या +20%' }, { en: '+44% (5→6 square)', hi: '+44% (5² → 6²)' }, { en: '+72.8% (5³=125 → 6³=216)', hi: '+72.8% (125 → 216)' }],
        [{ en: 'Side / Radius −10%', hi: 'भुजा / त्रिज्या −10%' }, { en: '−19% (10² → 9²)', hi: '−19% (100 → 81)' }, { en: '−27.1% (1000 → 729)', hi: '−27.1% (1000 → 729)' }],
        [{ en: 'Length +a%, Breadth −b%', hi: 'लंबाई +a%, चौड़ाई −b%' }, { en: '$a + b + \\frac{ab}{100}$', hi: '$a - b - \\frac{ab}{100}$' }, { en: 'Multiply 3 dimension ratios', hi: 'तीनों भुजा अनुपात गुणा करें' }],
      ],
    },
  ],

  typeWiseGroups: [
    {
      typeId: 'type-1-fraction-base-pct',
      typeNumber: 1,
      title: { en: 'Type 1: Fraction ↔ % Computation & Base Identification', hi: 'Type 1: भिन्न ↔ प्रतिशत गणना व आधार (Base) तुलना PYQs' },
      conceptHint: { en: 'Put "of / than" value in Denominator; use fraction equivalents & x5² shortcuts!', hi: 'जिसके साथ "का / से" जुड़ा हो उसे सदैव हर (नीचे) रखें; भिन्न व 5² ट्रिक लगाएं!' },
      questionIds: ['ch2-pyq-1', 'ch2-pyq-2', 'ch2-pyq-3'],
    },
    {
      typeId: 'type-2-equation-pct-comparison',
      typeNumber: 2,
      title: { en: 'Type 2: Reverse Equations & Number Split Percentages', hi: 'Type 2: प्रतिशत समीकरण व दो संख्याओं का प्रतिशत अनुपात' },
      conceptHint: { en: 'Scale direct percentage difference (`15% = 24 ⇒ 75% = ×5`) without finding 100%!', hi: 'बिना 100% निकाले सीधा गुणज स्केल (`15% = 24 ⇒ 75% = 5 गुना`) लगाएं!' },
      questionIds: ['ch2-pyq-4', 'ch2-pyq-5', 'ch2-pyq-6'],
    },
    {
      typeId: 'type-3-ab-constant-consumption',
      typeNumber: 3,
      title: { en: 'Type 3: AB Constant Rule (Price × Qty & Salary Inverse)', hi: 'Type 3: AB स्थिर नियम (कीमत × खपत व वेतन तुलना)' },
      conceptHint: { en: '+x/y ⇒ −x/(x+y); if Exp allowed to rise by b%, reduce ratio from (100+a) to (100+b)!', hi: 'शुद्ध स्थिर में +x/y ⇒ −x/(x+y); व्यय b% बढ़ने पर (100+a) से (100+b) तुलना करें!' },
      questionIds: ['ch2-pyq-7', 'ch2-pyq-8', 'ch2-pyq-9'],
    },
    {
      typeId: 'type-4-successive-net-change',
      typeNumber: 4,
      title: { en: 'Type 4: Successive % Net Change (2, 3, 4 Steps & ±x%)', hi: 'Type 4: क्रमिक % परिवर्तन (2, 3, 4 चरण व समान ±x% नियम)' },
      conceptHint: { en: 'Equal ±x% gives −x²/100%; for 3–4 steps multiply clean fraction ratios!', hi: 'समान ±x% पर सदैव −x²/100% हानि; 3–4 चरणों में भिन्न रेश्यो गुणा करें!' },
      questionIds: ['ch2-pyq-10', 'ch2-pyq-11', 'ch2-pyq-12', 'ch2-pyq-13'],
    },
    {
      typeId: 'type-5-population-depreciation',
      typeNumber: 5,
      title: { en: 'Type 5: Population Growth & Machine Depreciation (RRB Hot!)', hi: 'Type 5: जनसंख्या वृद्धि व वाहन/मशीन मूल्यह्रास (Forward व Backward)' },
      conceptHint: { en: 'Never subtract r% backwards! Use cube ratio powers (4³→5³ or 5³→4³).', hi: 'अतीत मान के लिए कभी −r% न घटाएं! सीधे घन अनुपात (4³→5³ या 5³→4³) लगाएं।' },
      questionIds: ['ch2-pyq-14', 'ch2-pyq-15', 'ch2-pyq-16', 'ch2-pyq-17'],
    },
    {
      typeId: 'type-6-income-remaining-chain',
      typeNumber: 6,
      title: { en: 'Type 6: Income Direct Split vs "Of the Remaining" Chains', hi: 'Type 6: आय खर्च (सीधा जोड़ बनाम "शेष का" क्रमिक श्रृंखला)' },
      conceptHint: { en: 'Check whether "remaining / शेष का" appears — if YES, multiply remaining percentages!', hi: 'यदि "शेष का" लिखा हो तो सदैव बचे प्रतिशतों को क्रमशः गुणा करें!' },
      questionIds: ['ch2-pyq-18', 'ch2-pyq-19', 'ch2-pyq-20'],
    },
    {
      typeId: 'type-7-income-exp-sav-alligation',
      typeNumber: 7,
      title: { en: 'Type 7: Dynamic Income–Exp–Savings & Alligation (2025 Hot)', hi: 'Type 7: आय–व्यय–बचत बदलाव व Alligation क्रॉस (Group D 2025)' },
      conceptHint: { en: 'Compute ΔSavings directly as (ΔIncome − ΔExp), or use Alligation for r%!', hi: 'बचत अंतर हेतु सीधा (आय वृद्धि − व्यय वृद्धि), या r% हेतु Alligation क्रॉस लगाएं!' },
      questionIds: ['ch2-pyq-21', 'ch2-pyq-22', 'ch2-pyq-23', 'ch2-pyq-24'],
    },
    {
      typeId: 'type-8-marks-exam-venn',
      typeNumber: 8,
      title: { en: 'Type 8: Exam Pass/Fail Thresholds, Score Gaps & Weighted Literacy', hi: 'Type 8: परीक्षा पास/फेल अंक सीमा, अंक अंतर व भारित साक्षरता %' },
      conceptHint: { en: 'Pass Marks = Scored + Failed By; if Total % = Male %, Female % MUST match!', hi: 'पास अंक = प्राप्त + फेल अंक; यदि कुल % = पुरुष %, तो महिला % भी बराबर होगा!' },
      questionIds: ['ch2-pyq-25', 'ch2-pyq-26', 'ch2-pyq-27'],
    },
    {
      typeId: 'type-9-elections-voters',
      typeNumber: 9,
      title: { en: 'Type 9: Elections (Valid Votes, Margin & Tie Condition)', hi: 'Type 9: चुनाव प्रश्न (वैध मत, जीत अंतर व बराबरी Tie शर्त)' },
      conceptHint: { en: 'Chain Cast% × Valid% × |W% − L%| = Margin; Tie ⇒ X : Y = (100+r) : 100!', hi: 'चेन: डाले% × वैध% × |W%−L%| = अंतर; बराबरी शर्त ⇒ X : Y = (100+r) : 100!' },
      questionIds: ['ch2-pyq-28', 'ch2-pyq-29', 'ch2-pyq-30'],
    },
    {
      typeId: 'type-10-mixture-multiasset-weighted',
      typeNumber: 10,
      title: { en: 'Type 10: Sugar Mixing & Washing Machine + TV Weighted Cost %', hi: 'Type 10: शर्करा विलयन मिश्रण व वॉशिंग मशीन + TV भारित कीमत %' },
      conceptHint: { en: 'Keep Water fixed in sugar mixing; use WM=50, TV=100 for weighted asset cost!', hi: 'शर्करा मिलाने पर पानी स्थिर रखें; वस्तुओं हेतु सरल अनुपात (50, 100) मानकर हल करें!' },
      questionIds: ['ch2-pyq-31', 'ch2-pyq-32'],
    },
  ],

  pyqBank: [
    // TYPE 1 (3 PYQs)
    {
      id: 'ch2-pyq-1',
      examTag: 'RRB NTPC UG 2024 (Shift 10)',
      level: 'level1_basic',
      question: {
        en: 'By how much is 65% of 65 greater than $\\frac{1}{5}$ of 45?',
        hi: '65 का 65%, 45 के $\\frac{1}{5}$ से कितना अधिक है?',
      },
      options: { en: ['31.25', '30.25', '27.25', '33.25'], hi: ['31.25', '30.25', '27.25', '33.25'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**33.25**).',
        keyConcept: 'Unit-5 Square Shortcut: 65² = (6 × 7) | 25 = 4225',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Basic Multiplication', hi: 'विधि 1: बेसिक गुणा-भाग' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '1) $65\\% \\text{ of } 65 = \\frac{65 \\times 65}{100} = 42.25$.\n2) $\\frac{1}{5} \\times 45 = 9 \\implies 42.25 - 9 = \\mathbf{33.25}$.',
              hi: '1) $65 \\times 65 \\div 100 = 42.25$।\n2) $45 \\div 5 = 9 \\implies 42.25 - 9 = \\mathbf{33.25}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Ending-5 Square (4 sec)', hi: 'विधि 2: अंत-5 वर्ग ट्रिक (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Instant $65^2 = (6\\times7)|25 = 42.25$; subtract `9` ⇒ **33.25** (note all decimals end in `.25`!).',
              hi: 'तुरंत $65^2 = 42.25$, इसमें से `9` घटाएं = **33.25**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-2',
      examTag: 'RRB Tech Gr-III 2024 (Shift 10)',
      level: 'level1_basic',
      question: {
        en: '25% of 30% of 45% of 1 is equal to:',
        hi: '1 के 45% के 30% का 25% किसके बराबर होगा?',
      },
      options: { en: ['0.3375', '0.03375', '33.75', '3.375'], hi: ['0.3375', '0.03375', '33.75', '3.375'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**0.03375**).',
        keyConcept: 'Count Total Decimal Places (Zero-Cancellation Trap!)',
        optionTrick: {
          en: 'All options share `3375`! Just compute $0.25 \\times 0.3 \\times 0.45$: approximate $1/4 \\times 0.135 \\approx 0.033... \\implies$ **0.03375**!',
          hi: 'सभी विकल्पों में अंक `3375` समान हैं! केवल दशमलव स्थान देखें: $1/4 \\times 0.3 \\times 0.45 = 0.25 \\times 0.135 \\approx 0.033...$ ⇒ **0.03375**!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Fraction Multiplication', hi: 'विधि 1: भिन्न गुणन विधि' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$\\frac{1}{4} \\times \\frac{3}{10} \\times \\frac{9}{20} = \\frac{27}{800} = \\mathbf{0.03375}$.',
              hi: '$\\frac{1}{4} \\times \\frac{3}{10} \\times \\frac{9}{20} = \\frac{27}{800} = \\mathbf{0.03375}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Zero Count Estimation (3 sec)', hi: 'विधि 2: दशमलव स्थान अनुमान ट्रिक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$25\\% \\times 30\\% = 7.5\\% = 0.075$; multiply by `0.45` must lie near `0.03+` ⇒ **0.03375**!',
              hi: '$0.075 \\times 0.45$ स्पष्टतः `0.03...` के समीप होगा ⇒ केवल **0.03375**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-3',
      examTag: 'RRB ALP 2025 CBT-1 (Shift 1)',
      level: 'level1_basic',
      question: {
        en: '5% of a number is what percentage of 4% of the same number?',
        hi: 'किसी संख्या का 5%, उसी संख्या के 4% का कितना प्रतिशत है?',
      },
      options: { en: ['125%', '27.78%', '55.55%', '80%'], hi: ['125%', '27.78%', '55.55%', '80%'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**125%**).',
        keyConcept: 'Dummy Variable Cancels + Denominator Holds "of 4%"',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Let Number = 100', hi: 'विधि 1: संख्या = 100 मानकर हल' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: '5% of 100 = 5; 4% of 100 = 4 ⇒ $\\frac{5}{4} \\times 100 = \\mathbf{125\\%}$.',
              hi: '100 का 5% = 5; 100 का 4% = 4 ⇒ $\\frac{5}{4} \\times 100 = \\mathbf{125\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct Ratio 5/4 (2 sec)', hi: 'विधि 2: सीधा अनुपात 5/4 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Common number cancels! `5 / 4 = 1.25 =` **125%**! (Trap: 4/5 = 80% is opposite mistake!)',
              hi: 'समान संख्या कट जाती है! `5 / 4` सदैव 100% से बड़ा होगा ⇒ सीधा **125%**! (सावधान: 80% उल्टी गलती है!)',
            },
          },
        ],
      },
    },

    // TYPE 2 (3 PYQs)
    {
      id: 'ch2-pyq-4',
      examTag: 'RRB Tech Gr-III 2024 (Shift 2)',
      level: 'level1_basic',
      question: {
        en: 'If 75% of $x$ is 15 less than 15% of 1500, then the value of $x$ is:',
        hi: 'यदि $x$ का 75%, 1500 के 15% से 15 कम है, तो $x$ का मान ज्ञात कीजिए।',
      },
      options: { en: ['300', '150', '280', '120'], hi: ['300', '150', '280', '120'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**280**).',
        keyConcept: 'Convert 75% → 3/4 Instantly',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Linear Equation', hi: 'विधि 1: रैखिक समीकरण' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$\\frac{3}{4}x = (0.15 \\times 1500) - 15 = 225 - 15 = 210 \\implies x = 210 \\times \\frac{4}{3} = \\mathbf{280}$.',
              hi: '$\\frac{3}{4}x = 225 - 15 = 210 \\implies x = 70 \\times 4 = \\mathbf{280}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cancel Factor 15 First (4 sec)', hi: 'विधि 2: 15 कॉमन काटें (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'RHS $= 15 \\times (15 - 1) = 15 \\times 14 = 210$; `3 parts = 210` ⇒ `4 parts` = **280**!',
              hi: '$15\\% \\times 1500 = 225 \\implies 225 - 15 = 210$। यदि `3 = 210 (×70)`, तो `4` = **280**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-5',
      examTag: 'RRB Tech Gr-III 2024 (Shift 13)',
      level: 'level2_mod',
      question: {
        en: 'If 85% of a number is added to 24, then the result is the same number. 75% of the same number is:',
        hi: 'यदि किसी संख्या का 85%, 24 में जोड़ा जाए, तो परिणामस्वरूप वही संख्या प्राप्त होती है। उसी संख्या का 75% कितना है?',
      },
      options: { en: ['160', '120', '90', '150'], hi: ['160', '120', '90', '150'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**120**). Number = 160; 75% of 160 = 120.',
        keyConcept: 'Missing Piece: (100% − 85%) = 15% = 24',
        trapAlert: {
          en: 'Option A (160) is the FULL number! Question specifically asks for **75%** of it (120).',
          hi: 'सावधान: Option A (160) पूरी संख्या (100%) है! प्रश्न ने इसका **75%** (120) पूछा है।',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Find 100% First', hi: 'विधि 1: पहले 100% (संख्या) निकालें' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$100\\% - 85\\% = 15\\% = 24 \\implies N = 24 \\times \\frac{100}{15} = 160$.\n`160` × $75\\% = \\frac{3}{4} \\times 160 = \\mathbf{120}$.',
              hi: '$15\\% = 24 \\implies 100\\% = 160$।\n`160` का $75\\% = \\frac{3}{4} \\times 160 = \\mathbf{120}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct ×5 Scaling (15% × 5 = 75%) (3 sec)', hi: 'विधि 2: सीधा 5-गुना स्केल (15% × 5 = 75%) (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Do NOT find 100%! Since $15\\% = 24$ and $75\\% = 5 \\times 15\\%$, Answer $= 5 \\times 24 = \\mathbf{120}$!',
              hi: '100% निकालने की ज़रूरत ही नहीं! जब $15\\% = 24$, तो $75\\% = 5 \\times 15\\% = 5 \\times 24 = \\mathbf{120}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-6',
      examTag: 'RRB Group D Level-1 (Shift 44)',
      level: 'level2_mod',
      question: {
        en: 'The sum of two numbers is 1040. If the bigger number is decreased by 4% and the smaller number is increased by 12%, then the numbers obtained are equal. Find the two numbers.',
        hi: 'दो संख्याओं का योगफल 1040 है। यदि बड़ी संख्या में 4% की कमी तथा छोटी संख्या में 12% की वृद्धि कर दी जाए, तो प्राप्त संख्याएँ बराबर होती हैं। दोनों संख्याएँ ज्ञात कीजिए।',
      },
      options: { en: ['500, 640', '560, 480', '600, 440', '520, 520'], hi: ['500, 640', '560, 480', '600, 440', '520, 520'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**560, 480**).',
        keyConcept: '96% of Bigger = 112% of Smaller ⇒ Direct Inverse Ratio B : S = 112 : 96 = 7 : 6',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Ratio from Equality', hi: 'विधि 1: समानता से अनुपात निकालें' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '$96\\% B = 112\\% S \\implies \\frac{B}{S} = \\frac{112}{96} = \\frac{7}{6}$.\n`13` units $= 1040 \\;(\\times 80) \\implies B = \\mathbf{560}, S = \\mathbf{480}$.',
              hi: '$96\\% B = 112\\% S \\implies B : S = 112 : 96 = 7 : 6$।\n`13` इकाई $= 1040 \\;(\\times 80) \\implies \\mathbf{560, 480}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Option Multiple Check of 7 : 6 (4 sec)', hi: 'विधि 2: 7 : 6 अनुपात विकल्प जाँच (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Notice $96 = 16 \\times 6$ and $112 = 16 \\times 7 \implies B : S = 7 : 6$. Only **(560, 480)** has ratio `7 : 6` & sum 1040!',
              hi: '$B : S = 7 : 6$ तुरंत पहचानें। विकल्पों में केवल **(560, 480)** ही `7 : 6` व योग 1040 पर सटीक बैठता है!',
            },
          },
        ],
      },
    },

    // TYPE 3 (3 PYQs)
    {
      id: 'ch2-pyq-7',
      examTag: 'RRB Group D Level-1 (Shift 45)',
      level: 'level1_basic',
      question: {
        en: 'If the price of sugar increases by 25%, by what percent must a household reduce its consumption so that expenditure remains unchanged?',
        hi: 'यदि चीनी की कीमत में 25% की वृद्धि होती है, तो एक परिवार को अपनी खपत में कितने प्रतिशत की कमी करनी चाहिए ताकि व्यय अपरिवर्तित रहे?',
      },
      options: { en: ['20%', '25%', '16.67%', '15%'], hi: ['20%', '25%', '16.67%', '15%'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**20%**).',
        keyConcept: 'AB Rule: +1/4 Price ⇒ −1/(4+1) = −1/5 Consumption = −20%',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base 100 Comparison', hi: 'विधि 1: 100 आधार तुलना' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Price $100 \\to 125$. Reduction needed $= \\frac{125 - 100}{125} \\times 100 = \\mathbf{20\\%}$.',
              hi: 'कीमत $100 \\to 125$। कमी $= \\frac{25}{125} \\times 100 = \\mathbf{20\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: AB Rule (+1/4 → −1/5) (1 sec)', hi: 'विधि 2: AB नियम (+1/4 → −1/5) (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '$+25\\% = +\\frac{1}{4} \\implies \\text{Drop} = \\frac{1}{4+1} = \\frac{1}{5} = \\mathbf{20\\%}$!',
              hi: '$+25\\% = +\\frac{1}{4} \\implies$ कमी $= \\frac{1}{4+1} = \\frac{1}{5} = \\mathbf{20\\%}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-8',
      examTag: 'RRB Tech Gr-III 2024 (Shift 3)',
      level: 'level2_mod',
      question: {
        en: 'If A earns $33\\frac{1}{3}\\%$ more than B, then B earns less than A by:',
        hi: 'यदि A, B से $33\\frac{1}{3}\\%$ अधिक कमाता है, तो B, A से कितने प्रतिशत कम कमाता है?',
      },
      options: { en: ['50%', '$16\\frac{2}{3}\\%$', '$33\\frac{1}{3}\\%$', '25%'], hi: ['50%', '$16\\frac{2}{3}\\%$', '$33\\frac{1}{3}\\%$', '25%'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**25%**).',
        keyConcept: 'Fraction AB Rule: +1/3 ⇒ −1/(3+1) = −1/4 = 25%',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Ratio 3 : 4', hi: 'विधि 1: अनुपात 3 : 4 विधि' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$33\\frac{1}{3}\\% = \\frac{1}{3}$. Let $B = 3 \\implies A = 4$.\nB less than A $= \\frac{4 - 3}{4} \\times 100 = \\mathbf{25\\%}$.',
              hi: '$33\\frac{1}{3}\\% = \\frac{1}{3}$। यदि $B = 3$, तो $A = 4$। कमी $= \\frac{1}{4} \\times 100 = \\mathbf{25\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: AB Denominator +1 (1 sec)', hi: 'विधि 2: AB नियम हर +1 (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '$+\\frac{1}{3}$ more $\\implies \\frac{1}{3+1} = \\frac{1}{4} = \\mathbf{25\\%}$ less instantly!',
              hi: '$+\\frac{1}{3}$ अधिक $\\implies \\frac{1}{3+1} = \\frac{1}{4} = \\mathbf{25\\%}$ कम!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-9',
      examTag: 'RRB Group D Level-1 (Shift 4)',
      level: 'level2_mod',
      question: {
        en: 'The price of petrol increases by 10%. By what percentage must a person reduce consumption so that the total expenditure on petrol increases by only 5%? (Round off to two decimal places)',
        hi: 'पेट्रोल की कीमत में 10% की वृद्धि होती है। किसी व्यक्ति को खपत में कितने प्रतिशत की कमी करनी चाहिए, जिससे कि पेट्रोल पर कुल व्यय में केवल 5% की वृद्धि हो?',
      },
      options: { en: ['4.15%', '4.45%', '4.55%', '4.35%'], hi: ['4.15%', '4.45%', '4.55%', '4.35%'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**4.55%**).',
        keyConcept: 'Modified Budget Ratio: New Price (110) → Target Exp (105)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base 100 Ratio', hi: 'विधि 1: 100 आधार अनुपात विधि' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Price $= 100 \\to 110$, Exp $= 100 \\to 105$.\nConsumption cut $= \\frac{110 - 105}{110} \\times 100 = \\frac{50}{11} = 4.545\\% \\approx \\mathbf{4.55\\%}$.',
              hi: 'कीमत $= 110$, लक्ष्य व्यय $= 105$।\nकमी $= \\frac{5}{110} \\times 100 = \\frac{50}{11} = 4.545\\% \\approx \\mathbf{4.55\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Recall 1/22 = 4.545% (3 sec)', hi: 'विधि 2: भिन्न मान 1/22 = 4.55% (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Reduction $= \\frac{5}{110} = \\frac{1}{22} = \\frac{1}{2} \\times 9.09\\% = \\mathbf{4.55\\%}$!',
              hi: 'कमी $= \\frac{5}{110} = \\frac{1}{22} = \\frac{9.09\\%}{2} = \\mathbf{4.55\\%}$!',
            },
          },
        ],
      },
    },

    // TYPE 4 (4 PYQs)
    {
      id: 'ch2-pyq-10',
      examTag: 'RRB Group D Level-1 (Shift 21)',
      level: 'level1_basic',
      question: {
        en: 'An item undergoes two successive price increases of 12% each. Find the single equivalent percentage increase in the price of the item.',
        hi: 'किसी वस्तु की कीमत में 12% की दो क्रमिक वृद्धि होती है। वस्तु की कीमत में एकल तुल्य प्रतिशत वृद्धि ज्ञात कीजिए।',
      },
      options: { en: ['24%', '25.44%', '22%', '24.44%'], hi: ['24%', '25.44%', '22%', '24.44%'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**25.44%**).',
        keyConcept: 'Equal +r% Twice = 2r + r²/100',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Successive Formula', hi: 'विधि 1: क्रमिक सूत्र विधि' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '$12 + 12 + \\frac{12 \\times 12}{100} = 24 + 1.44 = \\mathbf{25.44\\%}$.',
              hi: '$12 + 12 + \\frac{144}{100} = 24 + 1.44 = \\mathbf{25.44\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral (2a | a²) Pattern (2 sec)', hi: 'विधि 2: मौखिक (2a . a²) पैटर्न (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`2×12` before decimal, `12² = 144` after decimal (carry 1) ⇒ `24 + 1.44` = **25.44%**!',
              hi: 'दशमलव से पहले `2×12=24` व बाद में `12²=144` (हासिल 1 जोड़ें) ⇒ **25.44%**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-11',
      examTag: 'RRB Group D Level-1 (Shift 16)',
      level: 'level1_basic',
      question: {
        en: 'The price of a commodity is increased by 30% and later decreased by 30%. What is the overall percentage change in the price of the commodity?',
        hi: 'किसी वस्तु की कीमत में पहले 30% की वृद्धि की जाती है और फिर 30% की कमी की जाती है। वस्तु की कीमत में समग्र प्रतिशत परिवर्तन ज्ञात कीजिए।',
      },
      options: { en: ['18% decrease', 'Neither increase nor decrease', '9% decrease', '9% increase'], hi: ['18% की कमी', 'न तो वृद्धि और न ही कमी', '9% की कमी', '9% की वृद्धि'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**9% decrease**).',
        keyConcept: 'Symmetric +x% & −x% ALWAYS Yields −x²/100% Loss!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base 100 Step-by-Step', hi: 'विधि 1: 100 आधार विधि' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: '$100 \\xrightarrow{+30\\%} 130 \\xrightarrow{-30\\% (-39)} 91 \\implies \\mathbf{9\\%\\text{ decrease}}$.',
              hi: '$100 \\xrightarrow{+30\\%} 130 \\xrightarrow{-30\\% (-39)} 91 \\implies \\mathbf{9\\%\\text{ की कमी}}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: −x²/100 (1 sec)', hi: 'विधि 2: −x²/100 शॉर्टकट (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '$-\\frac{30^2}{100} = -\\frac{900}{100} = \\mathbf{-9\\%}$ (**9% decrease**)!',
              hi: '$-\\frac{30^2}{100} = \\mathbf{-9\\%}$ (**9% की कमी**)!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-12',
      examTag: 'RRB ALP 2025 CBT-2 Part A (Shift 2)',
      level: 'level2_mod',
      question: {
        en: 'The salary of a person is increased by 10%, 20% and 25% successively in three consecutive years. Find the overall percentage increase in the salary at the end of the third year.',
        hi: 'एक व्यक्ति के वेतन में तीन क्रमागत वर्षों में क्रमशः 10%, 20% और 25% की वृद्धि होती है। तीसरे वर्ष के अंत में वेतन में कुल प्रतिशत वृद्धि ज्ञात कीजिए।',
      },
      options: { en: ['65%', '60%', '30%', '50%'], hi: ['65%', '60%', '30%', '50%'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**65%**).',
        keyConcept: '3-Step Ratio Chain Multiplication',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Apply 2-Step Formula Twice', hi: 'विधि 1: दो बार क्रमिक सूत्र' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '1) $10 + 20 + 2 = 32\\%$.\n2) $32 + 25 + \\frac{32 \\times 25}{100} = 57 + 8 = \\mathbf{65\\%}$.',
              hi: '1) पहले 10% व 20% $= 32\\%$।\n2) अब 32% व 25% $= 32 + 25 + 8 = \\mathbf{65\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Fraction Ratio Chain (5 sec)', hi: 'विधि 2: भिन्न अनुपात चेन (5 sec)' },
            timeTag: '5 sec',
            tone: 'emerald',
            steps: {
              en: '$10\\to11$, $5\\to6$, $4\\to5$. Cancel `5` ⇒ $40 \\to 66 = 20 \\to 33$ ⇒ $\\frac{13}{20} \\times 100 = \\mathbf{65\\%}$!',
              hi: '$(10\\to11) \\times (5\\to6) \\times (4\\to5)$ में `5` काटने पर $20 \\to 33$ ⇒ $+13/20 = \\mathbf{65\\%}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-13',
      examTag: 'RRB Group D Level-1 (Shift 25)',
      level: 'level3_hard',
      question: {
        en: 'A number is first increased by 45%, then decreased by 20%, again increased by 10%, and then decreased by 25%. What is the overall increase/decrease percentage in the number?',
        hi: 'एक संख्या में पहले 45% की वृद्धि, फिर 20% की कमी, फिर 10% की वृद्धि और अंत में 25% की कमी की जाती है। संख्या में समग्र वृद्धि / कमी प्रतिशत ज्ञात कीजिए।',
      },
      options: { en: ['4.3% increase', '4.3% decrease', '4.1% decrease', '5.2% increase'], hi: ['4.3% की वृद्धि', '4.3% की कमी', '4.1% की कमी', '5.2% की वृद्धि'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**4.3% decrease**).',
        keyConcept: '4-Step Fraction Multiplier Chain → Beats Formula Every Time!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Pair +45% & −20%, +10% & −25%', hi: 'विधि 1: दो जोड़ों का क्रमिक सूत्र' },
            timeTag: '30 sec',
            tone: 'teal',
            steps: {
              en: '1) $45 - 20 - 9 = +16\\%$; $10 - 25 - 2.5 = -17.5\\%$.\n2) $16 - 17.5 - \\frac{16 \\times 17.5}{100} = -1.5 - 2.8 = \\mathbf{-4.3\\%}$.',
              hi: '1) $(+45, -20) = +16\\%$; $(+10, -25) = -17.5\\%$।\n2) $16 - 17.5 - 2.8 = -4.3\\% \\implies$ **4.3% की कमी**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct Fraction Multiplier (6 sec)', hi: 'विधि 2: प्रत्यक्ष भिन्न गुणक (6 sec)' },
            timeTag: '6 sec',
            tone: 'emerald',
            steps: {
              en: '$\\frac{29}{20} \\times \\frac{4}{5} \\times \\frac{11}{10} \\times \\frac{3}{4} = \\frac{29 \\times 33}{1000} = \\frac{957}{1000} = -43/1000 = \\mathbf{-4.3\\%}$ (**4.3% decrease**)!',
              hi: '$\\frac{29}{20} \\times \\frac{4}{5} \\times \\frac{11}{10} \\times \\frac{3}{4} = \\frac{957}{1000} \\implies \\frac{-43}{1000} = \\mathbf{4.3\\%\\text{ की कमी}}$!',
            },
          },
        ],
      },
    },

    // TYPE 5 (4 PYQs)
    {
      id: 'ch2-pyq-14',
      examTag: 'RRB ALP 2026 CBT-1 (Shift 9)',
      level: 'level1_basic',
      question: {
        en: 'A wildlife survey reported that the deer population in a reserve became 13,200 after a 10% annual increase. What was the deer population one year earlier?',
        hi: 'एक वन्यजीव सर्वेक्षण के अनुसार, एक रिज़र्व में हिरणों की संख्या 10% की वार्षिक वृद्धि के बाद 13,200 हो गई। एक वर्ष पूर्व हिरणों की संख्या कितनी थी?',
      },
      options: { en: ['12000', '12120', '14520', '11880'], hi: ['12000', '12120', '14520', '11880'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**12000**).',
        keyConcept: 'Backward Value: 110% = 13,200 ⇒ Never Subtract 10% of 13,200!',
        trapAlert: {
          en: 'Option D (`11,880`) is a TRAP from computing `13,200 − 10% of 13,200`! Previous base was 100%, new is 110%.',
          hi: 'सावधान जाल: `13,200` का सीधे 10% घटाने से गलत विकल्प **11,880** आता है! वर्तमान मान 110% के बराबर है।',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 110% = 13,200', hi: 'विधि 1: 110% से 100% निकालें' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: '$110\\% = 13200 \\implies 100\\% = \\frac{13200 \\times 100}{110} = \\mathbf{12,000}$.',
              hi: '$110\\% = 13200 \\implies 100\\% = 1200 \\times 10 = \\mathbf{12,000}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Divide by 11 (10 → 11) (2 sec)', hi: 'विधि 2: अनुपात 11 → 10 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`11 parts = 132` (`×12`) ⇒ `10 parts` = **12,000** orally!',
              hi: '`11 = 13,200` (`×1200`) ⇒ `10` = **12,000** केवल 2 सेकंड में!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-15',
      examTag: 'RRB Group D Level-1 (Shift 19)',
      level: 'level2_mod',
      question: {
        en: 'A town’s population increases by 25% every year. If the current population is 16,000, what will be the population after 3 years?',
        hi: 'एक शहर की जनसंख्या में प्रति वर्ष 25% की वृद्धि होती है। यदि वर्तमान जनसंख्या 16,000 है, तो 3 वर्ष बाद जनसंख्या कितनी होगी?',
      },
      options: { en: ['30,250', '32,000', '28,800', '31,250'], hi: ['30,250', '32,000', '28,800', '31,250'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**31,250**).',
        keyConcept: '25% Growth for 3 yrs ⇒ (4 → 5)³ = 64 → 125 Ratio!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Compound Multiplication', hi: 'विधि 1: क्रमिक भिन्न गुणा' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$16000 \\times \\frac{5}{4} \\times \\frac{5}{4} \\times \\frac{5}{4} = 250 \\times 125 = \\mathbf{31,250}$.',
              hi: '$16000 \\times \\frac{125}{64} = 250 \\times 125 = \\mathbf{31,250}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Ratio Cube 64 → 125 (3 sec)', hi: 'विधि 2: अनुपात घन 64 → 125 (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Notice `64 = 16,000 ÷ 250`. Multiply `125 × 250 = 125000 / 4` = **31,250**!',
              hi: 'यहाँ `64 इकाई = 16,000 (×250)` ⇒ `125 × 250` = **31,250**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-16',
      examTag: 'RRB Group D Level-1 (Shift 31)',
      level: 'level2_mod',
      question: {
        en: 'A city has a population of 80,000. The population increases by 10% in the first year, decreases by 5% in the second year, and again increases by 20% in the third year. What is the final population?',
        hi: 'एक शहर की जनसंख्या 80,000 है। पहले वर्ष 10% की वृद्धि, दूसरे वर्ष 5% की कमी तथा तीसरे वर्ष पुनः 20% की वृद्धि होती है। अंतिम जनसंख्या कितनी होगी?',
      },
      options: { en: ['1,00,320', '1,07,320', '1,01,320', '1,10,320'], hi: ['1,00,320', '1,07,320', '1,01,320', '1,10,320'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**1,00,320**).',
        keyConcept: 'Fraction Multipliers Cancel Zeros Cleanly + Unit/19-Factor Check!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Successive Fractions', hi: 'विधि 1: क्रमिक भिन्न गुणक' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '$80000 \\times \\frac{11}{10} \\times \\frac{19}{20} \\times \\frac{6}{5} = 80 \\times 11 \\times 19 \\times 6 = \\mathbf{1,00,320}$.',
              hi: '$80000 \\times \\frac{11}{10} \\times \\frac{19}{20} \\times \\frac{6}{5} = 80 \\times 11 \\times 114 = \\mathbf{1,00,320}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Divisible by 11 & 3 Check (3 sec)', hi: 'विधि 2: 11 व 3 की विभाज्यता ट्रिक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Notice `+10% = ×11`, `+20% = ×6 (div by 3)`! Sum digits of `1,00,320` = `6` (÷ 3✓); options B, C, D fail 3 (`13, 8, 7`) ⇒ **Option A**!',
              hi: '`+10%` से `11` और `+20%` से `3` गुणज आएगा! अंकों का योग केवल **1,00,320** (`6`) का 3 से कटता है ⇒ **3 सेकंड में Option A**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-17',
      examTag: 'RRB Group D Level-1 (Shift 35)',
      level: 'level3_hard',
      question: {
        en: 'A company car loses 20% of its value each year. Three years later, the car is worth ₹32,768. What was the initial value of the car?',
        hi: 'किसी कंपनी की कार की कीमत प्रति वर्ष 20% कम हो जाती है। तीन वर्ष बाद कार की कीमत ₹32,768 है। कार की प्रारंभिक कीमत क्या थी?',
      },
      options: { en: ['₹59,800', '₹67,800', '₹61,200', '₹64,000'], hi: ['₹59,800', '₹67,800', '₹61,200', '₹64,000'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹64,000**).',
        keyConcept: 'Backward Depreciation: Invert Ratio 5³ : 4³ = 125 : 64!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Reverse Fraction Cube', hi: 'विधि 1: प्रतिलोम घन अनुपात विधि' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '$P_0 \\times \\left(\\frac{4}{5}\\right)^3 = 32768 \\implies P_0 = 32768 \\times \\frac{125}{64} = 512 \\times 125 = \\mathbf{₹64,000}$.',
              hi: '$P_0 \\times \\frac{64}{125} = 32768 \\implies P_0 = 512 \\times 125 = \\mathbf{₹64,000}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Multiple of 125 Check (2 sec)', hi: 'विधि 2: 125 के गुणज की जाँच (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Initial $= 125 \\times (\\text{even number } 512)$ MUST end in `000`! Only **₹64,000** ends in `000`!',
              hi: 'प्रारंभिक कीमत $= 5^3(125) \\times 512$ के अंत में निश्चित रूप से `000` आएगा — केवल **₹64,000** में तीन शून्य हैं!',
            },
          },
        ],
      },
    },

    // TYPE 6 (3 PYQs)
    {
      id: 'ch2-pyq-18',
      examTag: 'RRB ALP 2026 CBT-1 (Shift 7)',
      level: 'level1_basic',
      question: {
        en: "A woman's monthly income is ₹50,000. She spends 25% on rent, 35% on food, and 20% on transportation, saving the remaining amount. How much does she save each month?",
        hi: 'किसी महिला की मासिक आय ₹50,000 है। वह किराए पर 25%, भोजन पर 35% और परिवहन पर 20% व्यय करती है, और शेष राशि की बचत करती है। वह प्रत्येक माह कितनी बचत करती है?',
      },
      options: { en: ['₹8,000', '₹12,500', '₹10,000', '₹15,000'], hi: ['₹8,000', '₹12,500', '₹10,000', '₹15,000'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**₹10,000**).',
        keyConcept: 'Direct Total Spend (No "remaining" word!) ⇒ Add All % First',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Add Expenditures Then Subtract', hi: 'विधि 1: कुल खर्च % जोड़ें' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: 'Spent $= 25 + 35 + 20 = 80\\% \\implies \\text{Saved} = 20\\%$ of $50000 = \\mathbf{₹10,000}$.',
              hi: 'कुल व्यय $= 25 + 35 + 20 = 80\\% \\implies$ बचत $= 50,000$ का $20\\% = \\mathbf{₹10,000}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: 20% = Divide by 5 (1 sec)', hi: 'विधि 2: 20% = 1/5 (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Saved $= 20\\% = \\frac{1}{5}$ of `50,000` = **₹10,000** orally!',
              hi: 'बचत $= 20\\% = \\frac{1}{5} \\times 50,000$ = **₹10,000**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-19',
      examTag: 'RRB Group D Level-1 (Shift 32)',
      level: 'level2_mod',
      question: {
        en: 'A man spends 45% of his monthly salary on the household, 20% of the remaining on transport and saves the remaining amount of ₹88,000. What is his monthly salary (in ₹)?',
        hi: 'एक व्यक्ति अपने मासिक वेतन का 45% घरेलू खर्चों पर, शेष का 20% परिवहन पर खर्च करता है तथा शेष ₹88,000 की बचत करता है। उसका मासिक वेतन (₹ में) कितना है?',
      },
      options: { en: ['2,40,000', '2,50,000', '2,00,000', '2,22,500'], hi: ['2,40,000', '2,50,000', '2,00,000', '2,22,500'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**2,00,000**).',
        keyConcept: '"Of the Remaining" Chain ⇒ Remaining Product = 55% × 80% = 44%',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Multiplicative Remaining Chain', hi: 'विधि 1: शेष मान गुणन विधि' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$S \\times \\frac{55}{100} \\times \\frac{80}{100} = 88000 \\implies 0.44\\,S = 88000 \\implies S = \\mathbf{₹2,00,000}$.',
              hi: '$S \\times 0.55 \\times 0.80 = 0.44\\,S = 88000 \\implies S = \\mathbf{₹2,00,000}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Instant 44% = 88,000 (2 sec)', hi: 'विधि 2: तुरंत 44% = 88,000 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Left after 45% is `55`; 20% of 55 is `11` ⇒ Final saved `44%` = `88,000` (`×2000`) ⇒ `100%` = **2,00,000**!',
              hi: 'बचा `55 − (55 का 20% = 11) = 44%`। जब `44% = 88,000`, तो `100%` = **2,00,000**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-20',
      examTag: 'RRB Group D Level-1 (Shift 12)',
      level: 'level2_mod',
      question: {
        en: 'An officer spends 10% of his salary on house rent. From the remaining amount, he spends 50% on conveyance. He is left with ₹20,556. What was his total salary?',
        hi: 'एक अधिकारी अपने वेतन का 10% घर के किराए पर खर्च करता है। शेष राशि में से वह 50% परिवहन पर खर्च करता है। उसके पास ₹20,556 शेष हैं। उसका कुल वेतन कितना था?',
      },
      options: { en: ['₹47,680', '₹48,680', '₹45,680', '₹46,680'], hi: ['₹47,680', '₹48,680', '₹45,680', '₹46,680'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**₹45,680**).',
        keyConcept: '90% Remaining × 50% Left = 45% (or C9 = 9 Shortcut!)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Remaining Percent = 45%', hi: 'विधि 1: शेष प्रतिशत = 45%' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Left $= 0.90 \\times 0.50 = 45\\% = \\frac{9}{20}$.\n$S = 20556 \\times \\frac{20}{9} = 2284 \\times 20 = \\mathbf{₹45,680}$.',
              hi: 'शेष $= 0.90 \\times 0.50 = 45\\% = \\frac{9}{20}$।\n$S = 20556 \\times \\frac{20}{9} = 2284 \\times 20 = \\mathbf{₹45,680}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Double First + C9 Check (4 sec)', hi: 'विधि 2: पहले दोगुना + 9 से भाग (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Before 50% spend he had `2 × 20,556 = 41,112` (`= 90%`). Divide by 9 (`C9(41112) = 9`, wait check exact unit digits: `41112 / 0.9 = 45,680`) ⇒ **₹45,680**!',
              hi: '50% से पहले राशि $= 2 \\times 20556 = 41,112$ (`= 90%`)। $41,112 \\div 9 = 4568 \\implies \\mathbf{₹45,680}$!',
            },
          },
        ],
      },
    },

    // TYPE 7 (4 PYQs)
    {
      id: 'ch2-pyq-21',
      examTag: 'RRB Group D Level-1 (Shift 43)',
      level: 'level1_basic',
      question: {
        en: 'Sheela earns ₹48,000 per month. She spends 75% of her income and saves the rest. If her expenditure increases by 10%, what will be her new monthly savings (in ₹)?',
        hi: 'शीला की मासिक आय ₹48,000 है। वह अपनी आय का 75% व्यय करती है और शेष की बचत करती है। यदि उसके व्यय में 10% की वृद्धि होती है, तो उसकी नई मासिक बचत (₹ में) क्या होगी?',
      },
      options: { en: ['12,000', '10,800', '9,600', '8,400'], hi: ['12,000', '10,800', '9,600', '8,400'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**8,400**).',
        keyConcept: 'New Savings = Old Savings − Expenditure Increase',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Income − New Expenditure', hi: 'विधि 1: आय − नया व्यय' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Exp $= 75\\%$ of $48000 = 36,000$; Old Sav $= 12,000$.\nNew Exp $= 36000 + 3600 = 39,600 \\implies$ Sav $= 48000 - 39600 = \\mathbf{₹8,400}$.',
              hi: 'व्यय $= 36,000$; पुरानी बचत $= 12,000$।\nव्यय 10% (`+3,600`) बढ़ा ⇒ नई बचत $= 12,000 - 3,600 = \\mathbf{₹8,400}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Save Ratio Direct Subtract (4 sec)', hi: 'विधि 2: बचत % सीधे घटाएं (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Exp `+10% of 75% = +7.5%`! So Savings % drops from `25%` to `25 − 7.5 = 17.5%` of 48,000 = `4800 + 3600` = **₹8,400**!',
              hi: 'व्यय में `+7.5%` वृद्धि ⇒ नई बचत $= 25 - 7.5 = 17.5\\%$ ($= 25\\% - 7.5\\%$) ⇒ **₹8,400**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-22',
      examTag: 'RRB Tech Gr-III 2024 (Shift 16)',
      level: 'level2_mod',
      question: {
        en: 'Arvind spends 75% of his income. His income is increased by 20% and he increased his expenditure by 10%. His savings are increased by:',
        hi: 'अरविन्द अपनी आय का 75% खर्च करता है। उसकी आय में 20% की वृद्धि हो जाती है और वह अपने व्यय में 10% की वृद्धि कर लेता है। उसकी बचत में हुई वृद्धि कितनी है?',
      },
      options: { en: ['37.5%', '25%', '10%', '50%'], hi: ['37.5%', '25%', '10%', '50%'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**50%**).',
        keyConcept: 'Weighted Percentage Equation: 100 = 75 + 25 (or Ratio 4 = 3 + 1)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base 100 Table', hi: 'विधि 1: 100 आधार तालिका' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$I=100, E=75, S=25$.\n$\Delta I = +20, \Delta E = +7.5 \\implies \Delta S = 20 - 7.5 = +12.5$.\n$\%\\Delta S = \\frac{12.5}{25} \\times 100 = \\mathbf{50\\%}$.',
              hi: '$I=100, E=75, S=25$।\nआय `+20` बढ़ी, व्यय `+7.5` बढ़ा ⇒ बचत $+12.5$ बढ़ी ⇒ $\\frac{12.5}{25} \\times 100 = \\mathbf{50\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Ratio 3 : 1 Weighted Avg (3 sec)', hi: 'विधि 2: अनुपात 3 : 1 भारित ट्रिक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '`E : S = 3 : 1`, Total `4`! So `3(10%) + 1(x%) = 4(20%)` ⇒ $30 + x = 80 \\implies x = \\mathbf{50\\%}$!',
              hi: '`E : S = 3 : 1` (कुल 4)! अतः $3(10\\%) + 1(x\\%) = 4(20\\%) \\implies x = 80 - 30 = \\mathbf{50\\%}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-23',
      examTag: 'RRB Group D Level-1 (Shift 33)',
      level: 'level3_hard',
      question: {
        en: 'The expenditure of Sudha is 100% more than her savings. If her expenditure decreases by 2% and savings increase by 22%, then by what percentage does her income increase?',
        hi: 'सुधा का व्यय उसकी बचत से 100% अधिक है। यदि उसका व्यय 2% कम हो जाता है और बचत 22% बढ़ जाती है, तो उसकी आय कितने प्रतिशत बढ़ जाती है?',
      },
      options: { en: ['2%', '6%', '1%', '3%'], hi: ['2%', '6%', '1%', '3%'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**6%**).',
        keyConcept: '"100% more than S" Means Ratio E : S = 2 : 1 (NOT 1 : 1!)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Ratio 200 : 100 → Total 300', hi: 'विधि 1: 200 : 100 मानकर हल करें' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Let $S=100 \\implies E=200, I=300$.\n$\\Delta E = -4, \\Delta S = +22 \\implies \\Delta I = +18$.\n$\%\\Delta I = \\frac{18}{300} \\times 100 = \\mathbf{6\\%}$.',
              hi: 'माना $S=100 \\implies E=200, I=300$।\n$\\Delta I = -4 + 22 = +18 \\implies \\frac{18}{300} \\times 100 = \\mathbf{6\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Weighted Deviation E:S = 2:1 (3 sec)', hi: 'विधि 2: अनुपात 2 : 1 भारित ट्रिक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$E : S = 2 : 1 \\implies \\Delta I = \\frac{2(-2\\%) + 1(+22\\%)}{2 + 1} = \\frac{18\\%}{3} = \\mathbf{6\\%}$!',
              hi: '$E : S = 2 : 1 \\implies \\Delta I = \\frac{2(-2) + 1(+22)}{3} = \\frac{18}{3} = \\mathbf{6\\%}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-24',
      examTag: 'RRB Group D Level-1 (Shift 22)',
      level: 'level3_hard',
      question: {
        en: 'Vikram saves r% of his earnings. If his earnings increase by 22% and his expenditure increases by 16%, his savings grow by 40%. What is the value of r?',
        hi: 'विक्रम अपनी कमाई से r% की बचत करता है। यदि उसकी कमाई में 22% की वृद्धि होती है और उसके व्यय में 16% की वृद्धि होती है, तो उसकी बचत में 40% की वृद्धि होती है। r का मान ज्ञात कीजिए।',
      },
      options: { en: ['22', '16', '25', '27'], hi: ['22', '16', '25', '27'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**25**).',
        keyConcept: 'Alligation Cross Solves Income–Exp–Sav Unknown % in 4 Seconds!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Linear Equation', hi: 'विधि 1: रैखिक समीकरण' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '$(100-r)(16) + r(40) = 100(22) \\implies 1600 + 24r = 2200 \\implies 24r = 600 \\implies r = \\mathbf{25}$.',
              hi: '$(100-r)(16) + 40r = 2200 \\implies 24r = 600 \\implies r = \\mathbf{25}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Alligation Cross (4 sec)', hi: 'विधि 2: Alligation क्रॉस ट्रिक (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Exp `16%` & Sav `40%` around Income `22%` ⇒ `E : S = (40−22) : (22−16) = 18 : 6 = 3 : 1` ⇒ $r = \\frac{1}{4} \\times 100 = \\mathbf{25}$!',
              hi: 'Alligation: `16` व `40` के बीच `22` ⇒ अनुपात `E : S = 18 : 6 = 3 : 1` ⇒ $r = \\frac{1}{3+1} \\times 100 = \\mathbf{25}$!',
            },
          },
        ],
      },
    },

    // TYPE 8 (3 PYQs)
    {
      id: 'ch2-pyq-25',
      examTag: 'RRB Tech Gr-III 2024 (Shift 4)',
      level: 'level1_basic',
      question: {
        en: 'For a candidate to clear an examination, he/she must score 55% marks. If he/she gets 120 marks and fails by 78 marks, the total marks of the examination is:',
        hi: 'एक परीक्षार्थी को परीक्षा उत्तीर्ण करने के लिए 55% अंक प्राप्त करना अनिवार्य है। यदि उसे 120 अंक प्राप्त होते हैं और वह 78 अंकों से अनुत्तीर्ण हो जाता है, तो परीक्षा के कुल अंक कितने हैं?',
      },
      options: { en: ['400', '360', '320', '300'], hi: ['400', '360', '320', '300'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**360**).',
        keyConcept: 'Passing Marks = Scored + Failed By',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Equate Pass% to Marks', hi: 'विधि 1: पास % = आवश्यक अंक' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Pass $= 120 + 78 = 198$. $55\\% \\text{ of } M = 198 \\implies M = \\frac{198 \\times 100}{55} = \\mathbf{360}$.',
              hi: 'उत्तीर्णांक $= 120 + 78 = 198$। $55\\% = 198 \\implies 100\\% = \\frac{19800}{55} = \\mathbf{360}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cancel by 11 (5% = 18) (3 sec)', hi: 'विधि 2: 11 से काटें (5% = 18) (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$55\\% = 198 \\xrightarrow{\\div 11} 5\\% = 18 \\xrightarrow{\\times 20} 100\\%$ = **360**!',
              hi: '$55\\% = 198 \\xrightarrow{\\div 11} 5\\% = 18 \\xrightarrow{\\times 20}$ **360**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-26',
      examTag: 'RRB Tech Gr-III 2024 (Shift 2)',
      level: 'level2_mod',
      question: {
        en: 'In order to pass in an examination, a student is required to get 975 marks out of the maximum aggregate marks. Priya got 870 marks and was declared failed by 7%. What is the maximum aggregate marks that a student can get in the examination?',
        hi: 'किसी परीक्षा में उत्तीर्ण होने के लिए 975 अंक प्राप्त करना अनिवार्य है। प्रिया ने 870 अंक प्राप्त किए और उसे 7% से अनुत्तीर्ण घोषित किया गया। परीक्षा के अधिकतम कुल अंक कितने हैं?',
      },
      options: { en: ['1200', '1500', '1400', '1000'], hi: ['1200', '1500', '1400', '1000'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**1500**).',
        keyConcept: 'Mark Shortage Equals % Shortage: 975 − 870 = 105 = 7%',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Difference % = Marks Gap', hi: 'विधि 1: % कमी = अंकों की कमी' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'Shortage $= 975 - 870 = 105$ marks $= 7\\% \\implies 1\\% = 15 \\implies 100\\% = \\mathbf{1500}$.',
              hi: 'अंकों की कमी $= 975 - 870 = 105 = 7\\% \\implies 1\\% = 15 \\implies 100\\% = \\mathbf{1500}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral 105 ÷ 7 = 15 (2 sec)', hi: 'विधि 2: मौखिक 105 ÷ 7 = 15 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`105 / 7 = 15` ⇒ append two zeros = **1500**!',
              hi: '`105 ÷ 7 = 15` ⇒ दो शून्य लगाएं = **1500**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-27',
      examTag: 'RRB Group D Level-1 (Shift 37)',
      level: 'level2_mod',
      question: {
        en: 'The population of a district is 3,35,000, out of which 2,14,000 are males. 31% of the population is literate. If 31% males are literate, then what percentage of females are literate?',
        hi: 'एक जिले की जनसंख्या 3,35,000 है, जिसमें से 2,14,000 पुरुष हैं। कुल जनसंख्या का 31% साक्षर है। यदि 31% पुरुष साक्षर हैं, तो साक्षर महिलाओं का प्रतिशत ज्ञात कीजिए।',
      },
      options: { en: ['33%', '28%', '30%', '31%'], hi: ['33%', '28%', '30%', '31%'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**31%**).',
        keyConcept: 'Weighted Average Identity: If Overall Avg = Group 1 Avg ⇒ Group 2 Avg MUST Equal Both!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Explicit Counts', hi: 'विधि 1: संख्यात्मक गणना विधि' },
            timeTag: '25 sec',
            tone: 'teal',
            steps: {
              en: 'Females $= 335000 - 214000 = 121000$.\n$0.31(335000) - 0.31(214000) = 0.31(121000) \\implies \\mathbf{31\\%}$.',
              hi: 'महिलाएँ $= 1,21,000$।\nसाक्षर महिलाएँ $= 0.31(335000 - 214000) = 0.31 \\times 121000 \\implies \\mathbf{31\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Zero-Calculation Average Law (0 sec)', hi: 'विधि 2: शून्य-गणना औसत नियम (0 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Total Average (`31%`) = Male Average (`31%`) ⇒ Female Average MUST also be **31%** without multiplying ANY number!',
              hi: 'जब समग्र साक्षरता (`31%`) = पुरुष साक्षरता (`31%`), तो महिला साक्षरता भी बिना किसी गणना के पक्का **31%** होगी!',
            },
          },
        ],
      },
    },

    // TYPE 9 (3 PYQs)
    {
      id: 'ch2-pyq-28',
      examTag: 'RRB ALP 2026 CBT-1 (Shift 1)',
      level: 'level1_basic',
      question: {
        en: 'Out of 1500 students in a school, 300 did not participate in the voting. Candidate X got 40% of the valid votes, and Candidate Y got 28% of the valid votes. What is the difference in votes between Candidate X and Candidate Y?',
        hi: 'किसी विद्यालय के 1500 छात्रों में से 300 ने मतदान में भाग नहीं लिया। उम्मीदवार X को वैध मतों का 40% तथा उम्मीदवार Y को वैध मतों का 28% प्राप्त हुआ। X और Y के मतों का अंतर कितना है?',
      },
      options: { en: ['348', '240', '144', '120'], hi: ['348', '240', '144', '120'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**144**).',
        keyConcept: 'Find Valid Votes First (`1500 − 300 = 1200`), Then Multiply |40% − 28%|',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Separate Vote Counts', hi: 'विधि 1: दोनों के अलग मत निकालें' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Valid $= 1500 - 300 = 1200$.\n$X = 40\\%$ of $1200 = 480$; $Y = 28\\%$ of $1200 = 336 \\implies 480 - 336 = \\mathbf{144}$.',
              hi: 'वैध मत $= 1500 - 300 = 1200$।\n$X = 480$, $Y = 336 \\implies$ अंतर $= 480 - 336 = \\mathbf{144}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct Percentage Gap (3 sec)', hi: 'विधि 2: सीधा प्रतिशत अंतर (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Gap $= 40\\% - 28\\% = 12\\%$ of Valid (`1200`). Compute $12 \\times 12 = \\mathbf{144}$!',
              hi: 'अंतर $= (40\\% - 28\\%) = 12\\%$ of $1200 = 12 \\times 12 = \\mathbf{144}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-29',
      examTag: 'RRB Group D Level-1 (Shift 30)',
      level: 'level2_mod',
      question: {
        en: 'In an election between two candidates, 10% of the total votes were declared invalid, and all valid votes were cast in favour of either of the two candidates. If the winner secured 53% of the valid votes and won the election by 1,620 votes, find the total number of votes polled.',
        hi: 'दो उम्मीदवारों के चुनाव में कुल वोटों में से 10% अवैध घोषित किए गए और सभी वैध वोट दोनों उम्मीदवारों में से किसी एक को मिले। यदि विजेता को वैध वोटों का 53% मिला व वह 1,620 वोटों से जीता, तो कुल डाले गए वोटों की संख्या ज्ञात करें।',
      },
      options: { en: ['27,000', '32,000', '28,000', '30,000'], hi: ['27,000', '32,000', '28,000', '30,000'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**30,000**).',
        keyConcept: 'Margin = 53% − 47% = 6% of Valid Votes (= 90% of Total)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Reverse from Winner Margin', hi: 'विधि 1: जीत अंतर से पीछे की ओर गणना' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Loser $= 100 - 53 = 47\\%$; Margin $= 6\\%$ of Valid $= 1620 \\implies$ Valid $= 27,000$.\nSince Valid $= 90\\%$ of Total $\\implies$ Total $= \\frac{27000}{0.90} = \\mathbf{30,000}$.',
              hi: 'हारने वाला $= 47\\%$, अंतर $= 6\\%$ of Valid $= 1620 \\implies$ वैध मत $= 27,000$।\n$90\\%$ of Total $= 27000 \\implies$ कुल $= \\mathbf{30,000}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Single Chain Multiplication (4 sec)', hi: 'विधि 2: एक-पंक्ति क्रमिक चेन (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '$T \\times \\frac{9}{10} \\times \\frac{6}{100} = 1620 \\implies 54\\,T = 1620 \\times 1000 \\implies T = 30 \\times 1000 = \\mathbf{30,000}$!',
              hi: '$T \\times \\frac{9}{10} \\times \\frac{6}{100} = 1620 \\implies 54\\,T = 1620000 \\implies T = \\mathbf{30,000}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-30',
      examTag: 'RRB NTPC UG 2024 (Shift 46) • RRB Group D S28',
      level: 'level3_hard',
      question: {
        en: 'In an election between two candidates, 96% of the registered voters cast their vote and 10% of the votes polled were found invalid. Winning candidate got 57% of the valid votes and won by a margin of 378 votes. How many voters were registered?',
        hi: 'दो उम्मीदवारों के चुनाव में 96% पंजीकृत मतदाताओं ने मतदान किया व डाले गए 10% मत अवैध पाए गए। विजेता को वैध मतों का 57% मिला और वह 378 मतों से जीता। कुल कितने मतदाता पंजीकृत थे?',
      },
      options: { en: ['3123', '21872', '3122', '3125'], hi: ['3123', '21872', '3122', '3125'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**3125**).',
        keyConcept: 'Registered × 96% × 90% × (57% − 43%) = 378',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Full Chain Cancellation', hi: 'विधि 1: क्रमिक भिन्न समीकरण' },
            timeTag: '22 sec',
            tone: 'teal',
            steps: {
              en: 'Margin $= 57\\% - 43\\% = 14\\%$.\n$R \\times \\frac{96}{100} \\times \\frac{90}{100} \\times \\frac{14}{100} = 378 \\implies R = \\frac{378 \\times 25 \\times 10 \\times 50}{24 \\times 9 \\times 7} = \\mathbf{3125}$.',
              hi: 'अंतर $= 14\\%$। $R \\times \\frac{24}{25} \\times \\frac{9}{10} \\times \\frac{14}{100} = 378 \\implies R = \\mathbf{3125}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Divisibility + Unit Check (3 sec)', hi: 'विधि 2: 25-गुणज व इकाई अंक ट्रिक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Notice denominator has factors `25 × 5 × 25`, while `378` gives NO `5`s! So Registered Voters **MUST be a multiple of 25** (ends in `00, 25, 50, 75`)! Looking at options `[3123, 21872, 3122, 3125]`, ONLY **3125** divides by 25!',
              hi: 'समीकरण के हर में `25` के गुणज हैं पर `378` में कोई `5` नहीं — अतः पंजीकृत मतदाता निश्चित रूप से **25 का गुणज** होगा (अंत `00, 25, 50, 75`)! चारों विकल्पों में केवल **3125** ही 25 से कटता है (3 सेकंड में उत्तर D)!',
            },
          },
        ],
      },
    },

    // TYPE 10 (2 PYQs)
    {
      id: 'ch2-pyq-31',
      examTag: 'RRB Group D Level-1 (Shift 6)',
      level: 'level2_mod',
      question: {
        en: '430 grams of sugar solution has 20% of sugar in it. How much sugar should be added to make it 50% in the solution?',
        hi: '430 ग्राम शर्करा विलयन में 20% शर्करा है। विलयन में शर्करा की मात्रा 50% करने के लिए इसमें कितनी शर्करा मिलाई जानी चाहिए?',
      },
      options: { en: ['248 grams', '258 grams', '278 grams', '268 grams'], hi: ['248 ग्राम', '258 ग्राम', '278 ग्राम', '268 ग्राम'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**258 grams**).',
        keyConcept: 'Keep Water Constant (Not Sugar!) OR Apply Alligation (20%, 100% → 50%)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Constant Water Weight', hi: 'विधि 1: स्थिर पानी मात्रा विधि' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Water $= 80\\%$ of $430 = 344\\text{ g}$.\nAt $50\\%$ sugar, Water is $50\\% = 344\\text{ g} \\implies$ Sugar must also equal $344\\text{ g}$.\nInitial Sugar $= 86\\text{ g} \\implies$ Add $344 - 86 = \\mathbf{258\\text{ g}}$.',
              hi: 'पानी $= 430$ का $80\\% = 344\\text{ g}$। अंत में 50% शर्करा ⇒ 50% पानी = $344\\text{ g}$ ⇒ शर्करा भी $344\\text{ g}$ चाहिए। पहले $86\\text{ g}$ थी ⇒ मिलाएं $344 - 86 = \\mathbf{258\\text{ ग्राम}}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Alligation Cross (4 sec)', hi: 'विधि 2: Alligation क्रॉस (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Old `20%` mixed with Pure Sugar `100%` to form `50%` ⇒ Ratio `50 : 30 = 5 : 3`.\n`5 parts = 430` (`×86`) ⇒ Sugar Added `3 parts = 3 × 86` = **258 grams**!',
              hi: '`20%` व शुद्ध शर्करा `100%` को मिलाकर `50%` ⇒ अनुपात `50 : 30 = 5 : 3`। `5 = 430 (×86)` ⇒ मिलाई शर्करा `3 × 86` = **258 ग्राम**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch2-pyq-32',
      examTag: 'RRB Group D Level-1 (Shift 17)',
      level: 'level3_hard',
      question: {
        en: 'The cost of a washing machine is 50% less than the cost of a TV. If the cost of the washing machine increases by 76% and that of the TV decreases by 37%, then what is the percentage change in the total cost of 4 washing machines and 3 TVs?',
        hi: 'एक वॉशिंग मशीन की कीमत एक TV की कीमत से 50% कम है। यदि वॉशिंग मशीन की कीमत में 76% की वृद्धि व TV की कीमत में 37% की कमी होती है, तो 4 वॉशिंग मशीनों और 3 TV की कुल कीमत में प्रतिशत परिवर्तन कितना होगा?',
      },
      options: { en: ['Decrease by 5%', 'Increase by 8.2%', 'Increase by 13%', 'Decrease by 16%'], hi: ['5% की कमी', '8.2% की वृद्धि', '13% की वृद्धि', '16% की कमी'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**Increase by 8.2%**).',
        keyConcept: 'Weighted Asset Ratio: Let TV = 100 (or 2), WM = 50 (or 1)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base 100 & 50 Cost Table', hi: 'विधि 1: 100 व 50 कीमत मानकर गणना' },
            timeTag: '22 sec',
            tone: 'teal',
            steps: {
              en: 'Let $TV = 100, WM = 50$. Old Total $= 4(50) + 3(100) = 200 + 300 = 500$.\nNet Change $= 200(+0.76) + 300(-0.37) = +152 - 111 = +41$.\n$\\%\\Delta = \\frac{+41}{500} \\times 100 = \\mathbf{+8.2\\%}$ (**Increase by 8.2%**).',
              hi: 'माना $TV = 100, WM = 50$। कुल लागत $= 4(50) + 3(100) = 500$।\nबदलाव $= 200(+76\\%) + 300(-37\\%) = +152 - 111 = +41$।\n$\\frac{+41}{500} \\times 100 = \\mathbf{8.2\\%\\text{ की वृद्धि}}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Minimal Ratio Weight 2 : 3 (5 sec)', hi: 'विधि 2: न्यूनतम लागत अनुपात 2 : 3 (5 sec)' },
            timeTag: '5 sec',
            tone: 'emerald',
            steps: {
              en: 'Spend Share `WM(4×1) : TV(3×2) = 4 : 6 = 2 : 3`! Weighted `% = (2×76 − 3×37) / 5 = (152 − 111)/5 = 41/5 =` **+8.2%**!',
              hi: 'कुल हिस्सा `WM(4×1) : TV(3×2) = 2 : 3`! औसत बदलाव $= \\frac{2(76) - 3(37)}{5} = \\frac{41}{5} = \\mathbf{+8.2\\%}$!',
            },
          },
        ],
      },
    },
  ],

  flashcards: [
    { front: { en: '3/8, 5/8, 1/6, 5/6 & 1/7 in %?', hi: '3/8, 5/8, 1/6, 5/6 व 1/7 का % मान?' }, back: { en: '3/8=37.5%, 5/8=62.5%, 1/6=16⅔%, 5/6=83⅓%, 1/7=14.28%', hi: '3/8=37.5%, 5/8=62.5%, 1/6=16⅔%, 5/6=83⅓%, 1/7=14.28%' } },
    { front: { en: '64% of 25 mental trick = ?', hi: '64% का 25 बिना पेन कैसे निकालें?' }, back: { en: 'Flip it: 25% of 64 = 1/4 × 64 = 16!', hi: 'पलटें: 25% का 64 = 1/4 × 64 = 16!' } },
    { front: { en: 'Price +25% → Fixed Exp cut %?', hi: 'कीमत +25% → स्थिर व्यय हेतु खपत कमी %?' }, back: { en: '+1/4 ⇒ −1/(4+1) = −1/5 = 20% decrease', hi: '+1/4 ⇒ −1/(4+1) = −1/5 = 20% कमी' } },
    { front: { en: 'Price −20% → Fixed Exp extra %?', hi: 'कीमत −20% → स्थिर व्यय हेतु खपत वृद्धि %?' }, back: { en: '−1/5 ⇒ +1/(5−1) = +1/4 = 25% increase', hi: '−1/5 ⇒ +1/(5−1) = +1/4 = 25% वृद्धि' } },
    { front: { en: 'Two equal changes +x% and −x% = ?', hi: 'समान +x% और −x% बदलाव का परिणाम?' }, back: { en: 'ALWAYS Decrease of (x² / 100)% (e.g. ±30% ⇒ −9%)', hi: 'सदैव (x² / 100)% की कमी (जैसे ±30% ⇒ −9%)' } },
    { front: { en: '+10%, +20%, +25% successive = ?', hi: '+10%, +20%, +25% का एकल समतुल्य %?' }, back: { en: '(10→11)(5→6)(4→5) = 20→33 ⇒ +65%', hi: '(10→11)(5→6)(4→5) = 20→33 ⇒ +65%' } },
    { front: { en: 'Car drops 20%/yr for 3 yrs: Ratio?', hi: 'कार 20%/वर्ष घटती है 3 वर्ष बाद: अनुपात?' }, back: { en: '(5→4)³ = 125 → 64 (−48.8% drop)', hi: '(5→4)³ = 125 → 64 (कुल 48.8% गिरावट)' } },
    { front: { en: 'Spend 45% then 20% OF REMAINING: Saved %?', hi: '45% खर्च, फिर शेष का 20% खर्च: बचत %?' }, back: { en: '55% × 80% = 44% Saved (NOT 35%!)', hi: '55% × 80% = 44% बचत (कभी 35% नहीं!)' } },
    { front: { en: 'Inc +22%, Exp +16%, Sav +40% ⇒ Sav %?', hi: 'आय +22%, व्यय +16%, बचत +40% ⇒ बचत %?' }, back: { en: 'Alligation E:S = (40−22):(22−16) = 3:1 ⇒ 25%', hi: 'Alligation E:S = 18:6 = 3:1 ⇒ बचत 1/4 = 25%' } },
    { front: { en: 'Scored 120, Failed by 78 (Pass 55%): Max?', hi: '120 अंक पाए, 78 से फेल (पास 55%): कुल अंक?' }, back: { en: '55% = 120 + 78 = 198 ⇒ 5% = 18 ⇒ 360', hi: '55% = 198 ⇒ 5% = 18 ⇒ 360' } },
    { front: { en: 'Winner got 57% of Valid Votes: Margin %?', hi: 'विजेता को वैध मतों का 57%: जीत अंतर %?' }, back: { en: '57% − (100−57)% = 14% of Valid Votes', hi: '57% − 43% = वैध मतों का 14%' } },
    { front: { en: 'Pure Sugar added to 20% Solution for 50%?', hi: '20% शर्करा विलयन में चीनी मिला 50% बनाना?' }, back: { en: 'Fix Water weight OR Alligate (20%, 100% → 50%) = 5:3', hi: 'पानी स्थिर रखें या Alligation (20%, 100% → 50%) = 5:3' } },
  ],
};
