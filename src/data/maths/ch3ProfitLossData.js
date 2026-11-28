/**
 * Railway Mathematics Mastery • Chapter 3 (Smart Board Edition)
 * Profit, Loss, Discount & Dishonest Dealer
 * CP–SP–MP 3-Line Triangle, Magic Ratio (100−D):(100+P), Successive Discount & Free Articles,
 * Article Equilibrium, Same SP Trap, Dishonest Dealer Ratio Chain, Shifted CP/SP & Merchant Chains.
 * Language: Devanagari Hindi + Standard English Math Terms (Default `hi`) + Pure English (`en`).
 */

export const CH3_PROFIT_LOSS_DATA = {
  id: 'math-ch3-profit-loss',
  chapterNumber: 3,
  subjectId: 'maths',
  subjectLabel: { en: 'Mathematics', hi: 'गणित (हिन्दी Smart Board)' },
  taxonomyChapterName: 'Profit, Loss & Discount',
  sourceCode: 'Railway Maths Mastery • Ch 3: Profit, Loss, Discount & Dishonest Dealer (Smart Board Edition)',
  blueprintSvgKey: 'ch3-blueprint-mindmap',
  labKey: 'ch3-profit-loss',
  labMeta: {
    featureTitle: {
      en: '5-in-1 Interactive Animated Profit, Loss & Discount Simulator',
      hi: '5-in-1 इंटरैक्टिव एनिमेटेड लाभ, हानि व बट्टा सिम्युलेटर लैब',
    },
    featureSubtitle: {
      en: 'CP–SP–MP Triangle & Ratio, Successive vs Buy-Free Scheme, Same SP vs Articles, Dishonest Scale & Lot Split.',
      hi: 'CP–SP–MP मैजिक अनुपात, क्रमिक छूट बनाम Buy-Free, समान SP जाल, बेईमान तराजू व लॉट बंटवारा।',
    },
  },
  hero: {
    imageUrl: '/maths-notes/ch3-profit-loss/hero-profit-loss.webp',
    caption: {
      en: 'Ch 3 Smart Board Engine: CP–SP–MP Magic Ratio, Free Articles, Article Equilibrium, Same SP Trap & Dishonest Dealer.',
      hi: 'अध्याय 3 स्मार्ट बोर्ड: CP–SP–MP मैजिक अनुपात, क्रमिक बट्टा, मुफ़्त वस्तु, समान SP जाल व बेईमान दुकानदार तराजू।',
    },
  },
  metrics: {
    pages: 28,
    modules: 7,
    tables: 5,
    svgLabs: 5,
    vectorPlates: 6,
    typesCount: 11,
    pyqHits: 578,
    pyqsSolved: 35,
  },
  weightageBars: [
    {
      label: { en: 'Markup, Successive Discounts, Buy X Get Y Free & CP:MP Ratio', hi: 'अंकित मूल्य (MP), क्रमिक छूट, Buy X Get Y मुफ़्त व CP:MP अनुपात' },
      pct: 34,
      targetTab: 'concepts',
      targetSectionId: 'mod-2-discount-markup-free',
      targetPyqTypeId: 'type-4-cp-mp-magic-ratio',
    },
    {
      label: { en: 'Basic CP/SP, Damaged Lots & Direct SP Scaling (85% → 115%)', hi: 'मूल CP/SP, क्षतिग्रस्त माल व सीधा SP स्केलिंग (85% → 115%)' },
      pct: 24,
      targetTab: 'concepts',
      targetSectionId: 'mod-1-cp-sp-basics',
      targetPyqTypeId: 'type-2-sp-scaling-multi-profit',
    },
    {
      label: { en: 'Article Equilibrium (CP of m = SP of n), Same SP Trap & Rate/₹1', hi: 'वस्तु-संख्या नियम (m CP = n SP), समान SP जाल व ₹1 में वस्तुएँ' },
      pct: 24,
      targetTab: 'concepts',
      targetSectionId: 'mod-4-article-same-sp',
      targetPyqTypeId: 'type-6-article-count-rate',
    },
    {
      label: { en: 'Dishonest Dealer Balance, Shifted CP/SP Cross & Split Lots', hi: 'बेईमान दुकानदार बाट तराजू, CP–SP क्रॉस शिफ्ट व विभाजित लॉट' },
      pct: 18,
      targetTab: 'concepts',
      targetSectionId: 'mod-5-dishonest-dealer',
      targetPyqTypeId: 'type-9-dishonest-dealer',
    },
  ],
  title: {
    en: 'Ch 3: Profit, Loss, Discount & Dishonest Dealer',
    hi: 'अध्याय 3: लाभ, हानि, बट्टा (Discount) एवं बेईमान दुकानदार',
  },
  subtitle: {
    en: 'Smart Board Class • 7 Rule Modules, 5 Interactive SVG Labs & 35 Verified Real PYQs (2–3 Methods Each)',
    hi: 'स्मार्ट बोर्ड कम्प्लीट क्लास • सभी नियम पॉइंट-टू-पॉइंट + 5 SVG लैब्स + 35 रियल PYQs (2–3 विधियाँ)',
  },
  quickRevision60Sec: [
    {
      title: { en: 'CP–SP–MP & Magic Ratio Key', hi: 'CP–SP–MP व मैजिक अनुपात सूत्र' },
      targetSectionId: 'mod-1-cp-sp-basics',
      points: {
        en: '• Profit / Loss % ALWAYS sits on `CP` (unless "on SP" stated!); Discount % ALWAYS sits on `MP`.\n• Golden Bridge: $\\text{CP} : \\text{MP} = (100 - D\\%) : (100 \\pm P/L\\%)$.\n• Direct SP Scaling: $SP_1 \\to (100\\pm r_1)\\%$, $SP_2 = SP_1 \\times \\frac{100\\pm r_2}{100\\pm r_1}$.',
        hi: '• लाभ या हानि % सदैव `CP` पर, जबकि छूट (Discount %) सदैव `MP` पर गिनी जाती है।\n• गोल्डन ब्रिज सूत्र: $\\text{CP} : \\text{MP} = (100 - D\\%) : (100 \\pm P/L\\%)$।\n• सीधा SP स्केल: यदि `30%` हानि पर SP ज्ञात हो, तो `5%` लाभ के लिए सीधे $\\frac{105}{70}$ गुणा करें!',
      },
    },
    {
      title: { en: 'Successive Discounts & Free Articles', hi: 'क्रमिक बट्टा व मुफ़्त वस्तु नियम' },
      targetSectionId: 'mod-2-discount-markup-free',
      points: {
        en: '• 2 Discounts: $D_{\\text{net}} = d_1 + d_2 - \\frac{d_1 d_2}{100}$ (smallest product $d_1 d_2$ gives MAX discount when sum equal!).\n• Buy `X` Get `Y` Free: Effective Discount $= \\frac{Y}{X + Y} \\times 100\\%$.\n• With Extra Trade/Cash Disc: Simply multiply paid-ratio factors $\\frac{X}{X+Y} \\times (1-d\\%)$.',
        hi: '• 2 क्रमिक छूट: $D_{\\text{net}} = d_1 + d_2 - \\frac{d_1 d_2}{100}$ (योग समान हो तो कम $d_1 \\times d_2$ = सर्वाधिक छूट!)।\n• `X` खरीदें `Y` मुफ़्त: प्रभावी छूट $= \\frac{Y}{X + Y} \\times 100\\%$।\n• अतिरिक्त छूट के साथ: सीधे अनुपात कारक $\\frac{X}{X+Y} \\times (1-d\\%)$ गुणा करें!',
      },
    },
    {
      title: { en: 'Articles Equilibrium & Same SP Trap', hi: 'वस्तु-संख्या नियम व समान SP जाल' },
      targetSectionId: 'mod-4-article-same-sp',
      points: {
        en: '• If `CP of m = SP of n`: Invert immediately $\\Rightarrow CP:SP = n:m$.\n• Cross Qty–Price: Put Bought `(Qty, ₹)` over Sold `(Qty, ₹)` → Cross-multiply `(CP = Buy₹ × SellQty)` vs `(SP = Sell₹ × BuyQty)`.\n• Same `SP` (`+x% & -x%`): ALWAYS Loss $= \\frac{x^2}{100}\\%$; Same `CP` (`+x% & -x%`): `0%` Net!',
        hi: '• `m का CP = n का SP` ⇒ उलट दें: $CP : SP = n : m$!\n• क्रॉस विधि: खरीद `(मात्रा, ₹)` व बिक्री `(मात्रा, ₹)` से तिरछा गुणा करें (`CP = खरीद₹×बिक्रीमात्रा`, `SP = बिक्री₹×खरीदमात्रा`)।\n• समान `SP` (`+x%, -x%`): सदैव $\\frac{x^2}{100}\\%$ हानि; समान `CP`: सदैव `0%`!',
      },
    },
    {
      title: { en: 'Dishonest Scale & Shift Cross', hi: 'बेईमान बाट व शिफ्ट क्रॉस नियम' },
      targetSectionId: 'mod-5-dishonest-dealer',
      points: {
        en: '• Dishonest Ratio Chain: Multiply `(Actual Given Wt : Claimed Wt) × (100 : 100 + Claim% )` straight down!\n• Shifted CP & SP: Solve `x(p₁ − p₂) = (1+p₂)ΔCP − ΔSP` in one clean arithmetic line.\n• Split Lot Profit: Weighted average $\\frac{w_1(+p_1) + w_2(-L_2)}{w_1 + w_2}$ — zero ₹ values needed!',
        hi: '• बेईमान रेश्यो चेन: `(दिया वज़न : अंकित वज़न) × (100 : 100 + लाभ%)` सीधे गुणा करें!\n• दोनों CP व SP बदलाव: `x(p₁ − p₂) = (1+p₂)ΔCP − ΔSP` से तुरंत मूल CP निकलेगा।\n• लॉट बंटवारा: भारित औसत $\\frac{w_1(+p_1) + w_2(-L_2)}{w_1 + w_2}$ बिना ₹ संख्या निकाले लागू करें!',
      },
    },
  ],

  sections: [
    {
      id: 'mod-1-cp-sp-basics',
      number: '3.1',
      shortLabel: '3.1 CP–SP Basics',
      pyqTypeId: 'type-1-basic-cp-sp-overheads',
      diagramKey: 'ch3-cp-sp-mp-triangle',
      title: {
        en: 'Module 1: CP, SP, Overheads, Profit/Loss Scaling & Golden Bridges',
        hi: 'मॉड्यूल 1: CP, SP, अतिरिक्त खर्च (Overheads) व सीधा विक्रय मूल्य स्केलिंग',
      },
      summaryTag: {
        en: 'Real CP = Buy + Repair • Damaged Stock Rule • Direct (100+r₂)/(100+r₁) Scaling',
        hi: 'वास्तविक CP = खरीद + मरम्मत • क्षतिग्रस्त माल नियम • 1-पंक्ति SP स्केल',
      },
      boardCards: [
        {
          id: 'card-3-1-1',
          title: {
            en: '1. True Cost Price (CP + Repair/Transport) & Damaged Stock Loss Absorption',
            hi: '1. वास्तविक क्रय मूल्य (CP + मरम्मत) व टूटे/क्षतिग्रस्त माल की गणना',
          },
          formula: '$$\\text{Effective CP} = \\text{Buy Price} + \\text{Repair/Transport} \\quad|\\quad P\\% = \\frac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100$$',
          points: [
            { en: 'Include EVERY overhead (repair, paint, transport, packing) inside Total CP before computing Profit %.', hi: 'मरम्मत, पेंट, किराया व पैकिंग सदैव कुल CP में जोड़ें — लाभ % हमेशा इस कुल CP पर निकलता है!' },
            { en: 'Broken/Damaged Stock Rule: Pay for all bought items (N), divide only over GOOD sellable items (N − damaged).', hi: 'टूटे/खराब माल का नियम: लागत सभी N वस्तुओं की लगेगी, जबकि कमाई केवल बची अच्छी (N − खराब) वस्तुओं से होगी!' },
          ],
          example: {
            title: { en: 'ALP CBT-2 PYQ: 187 pens bought @ ₹23; 7 damaged; remaining 180 sold @ ₹27. Profit %?', hi: 'ALP CBT-2 उदाहरण: ₹23 की दर से 187 पेन खरीदे; 7 खराब; शेष 180 को ₹27 पर बेचा। लाभ %?' },
            basic: {
              en: 'Total CP $= 187 \\times 23 = 4301$; Total SP $= 180 \\times 27 = 4860$.\nGain\\% $= \\frac{4860 - 4301}{4301} \\times 100 = \\frac{55900}{4301} \\approx \\mathbf{13.0\\%}$.',
              hi: 'कुल CP $= 187 \\times 23 = 4301$; कुल SP $= 180 \\times 27 = 4860$।\nलाभ\\% $= \\frac{559}{4301} \\times 100 \\approx \\mathbf{13.0\\%}$।',
            },
            smart: {
              en: 'Approx Fraction Trick: `559 / 4301` ≈ `559 / 43` = **13.0%** in 2 seconds (`43 × 13 = 559` EXACT!!).',
              hi: 'तेज़ सन्निकटन ट्रिक: `43 × 13 = 559` सीधा कटता है! अतः `559 / 4301 ≈ 13 / 100` = **13.0%**!',
            },
          },
        },
        {
          id: 'card-3-1-2',
          title: {
            en: '2. Direct SP-to-SP Scaling (Skip Finding CP!) & Profit Shift Logic',
            hi: '2. बिना CP निकाले सीधा SP स्केलिंग (85% → 115%) व SP दोगुना करने के प्रश्न',
          },
          formula: '$$\\text{New SP} = \\text{Old SP} \\times \\frac{100 \\pm \\text{Target Rate}}{100 \\pm \\text{Old Rate}} \\quad|\\quad SP \\text{ Doubled} \\implies P=CP \\;(100\\%)$$',
          points: [
            { en: 'Never compute CP as intermediate step when Old SP, Old %, Target % are given — scale ratio directly!', hi: 'जब पुराना SP, पुरानी दर व नई लक्ष्य दर दी हो, तो CP निकाले बिना सीधे एक अनुपात से गुणा करें।' },
            { en: 'Special Theorem: If doubling SP triples the profit (`2·SP − CP = 3(SP − CP)`), ALWAYS `Profit = CP ⇒ 100%`!', hi: 'विशेष प्रमेय: यदि SP दोगुना करने पर लाभ तिगुना हो जाए (`2·SP − CP = 3(SP − CP)`), तो सदैव लाभ = 100% होता है!' },
          ],
          example: {
            title: { en: 'Tech Gr-III PYQ: TV sold at ₹18,700 incurs 15% loss. SP to gain 15%?', hi: 'Tech Gr-III उदाहरण: ₹18,700 में TV बेचने पर 15% हानि। 15% लाभ पाने हेतु नया विक्रय मूल्य?' },
            basic: {
              en: '$85\\% \\text{ of CP} = 18,700 \\implies CP = 22,000$. New SP $= 22,000 \\times 1.15 =$ **₹25,300**.',
              hi: '$85\\% = 18,700 \\implies 1\\% = 220 \\implies CP = 22,000$। नया SP $= 22,000 \\times 1.15 =$ **₹25,300**।',
            },
            smart: {
              en: 'One-Line Scale: $18,700 \\times \\frac{115}{85} = 18,700 \\times \\frac{23}{17} = 1,100 \\times 23 =$ **₹25,300** (`11 × 17 = 187`)!',
              hi: '1-पंक्ति कट: $18,700 \\times \\frac{115}{85} = 1100 \\times 23 =$ **₹25,300** (`17 × 11 = 187` तुरंत कटता है!)।',
            },
          },
        },
      ],
    },
    {
      id: 'mod-2-discount-markup-free',
      number: '3.2',
      shortLabel: '3.2 Discount & MP',
      pyqTypeId: 'type-3-successive-discount-mp',
      diagramKey: 'ch3-discount-free-ladder',
      title: {
        en: 'Module 2: Successive Discounts, CP–MP Magic Ratio & "Buy X Get Y Free"',
        hi: 'मॉड्यूल 2: क्रमिक बट्टा, CP:MP मैजिक अनुपात व "Buy X Get Y Free" स्कीम्स',
      },
      summaryTag: {
        en: 'd₁ + d₂ − d₁d₂/100 • Buy X Get Y Free = Y/(X+Y) • CP:MP = (100−D):(100+P)',
        hi: 'd₁+d₂−d₁d₂/100 • मुफ़्त % = Y/(X+Y) • मैजिक अनुपात (100−D):(100+P)',
      },
      boardCards: [
        {
          id: 'card-3-2-1',
          title: {
            en: '1. Successive Discounts & Best-Shopper Comparison Shortcut',
            hi: '1. क्रमिक बट्टा तुलना नियम व अज्ञात छूट (d₁%) निकालने की विधि',
          },
          formula: '$$D_{\\text{eq}} = d_1 + d_2 - \\frac{d_1 d_2}{100} \\quad|\\quad \\text{3 Discounts}: \\; \\text{Pay Fraction} = \\left(1-\\frac{d_1}{100}\\right)\\left(1-\\frac{d_2}{100}\\right)\\left(1-\\frac{d_3}{100}\\right)$$',
          points: [
            { en: 'Same-Sum Comparison Trap: When `d₁ + d₂` is constant (like 3%+7%, 2%+8%, flat 10%), SMALLEST product `d₁×d₂` wins MAX discount!', hi: 'तुलना ट्रिक: जब `d₁ + d₂` का योग समान हो (3%+7%, 2%+8%, 10% सीधा), तो जिसका `d₁×d₂` सबसे छोटा (या 0) वह अधिकतम छूट देता है!' },
            { en: 'Clean Ratio Method for Fractional Discounts (`12.5% = 1/8`): Always multiply paying fraction (`7/8`, `4/5`) instead of decimals.', hi: 'भिन्न बट्टा विधि: `12.5%` को `7/8`, `20%` को `4/5` लिखें — क्रमिक गुणा से अज्ञात `d₁%` 5 सेकंड में निकलता है।' },
          ],
          example: {
            title: { en: 'Tech Gr-III PYQ: Shirt MP ₹150 sold for ₹105 after d₁% and 12.5%. Find d₁%!', hi: 'Tech Gr-III: ₹150 अंकित मूल्य वाली शर्ट दो क्रमिक छूट (d₁% व 12.5%) के बाद ₹105 में मिली। d₁%?' },
            basic: {
              en: '$150 \\times \\left(1 - \\frac{d_1}{100}\\right) \\times \\frac{7}{8} = 105 \\implies 1 - \\frac{d_1}{100} = \\frac{105 \\times 8}{150 \\times 7} = \\frac{4}{5} \\implies d_1 = \\mathbf{20\\%}$.',
              hi: '$150 \\times (1 - d_1\\%) \\times \\frac{7}{8} = 105 \\implies (1 - d_1\\%) = \\frac{4}{5} \\implies d_1 = \\mathbf{20\\%}$।',
            },
            smart: {
              en: 'Total Paid Ratio $= \\frac{105}{150} = \\frac{7}{10}$. Remove 2nd disc $\\frac{7}{8}$ ⇒ Remaining paid fraction $= \\frac{7/10}{7/8} = \\frac{8}{10} = \\frac{4}{5} \\implies$ **20%**!',
              hi: 'रेश्यो भाग: कुल भुगतान $\\frac{105}{150} = \\frac{7}{10}$। इसमें से दूसरी छूट $\\frac{7}{8}$ हटाएं ⇒ $\\frac{7/10}{7/8} = \\frac{4}{5} \\implies$ **20% छूट**!',
            },
          },
        },
        {
          id: 'card-3-2-2',
          title: {
            en: '2. "CP : MP = (100 − D) : (100 + P)" Magic Formula & Buy X Get Y Combo',
            hi: '2. गोल्डन अनुपात CP:MP = (100−D):(100+P) व Buy X Get Y + छूट कॉम्बो',
          },
          formula: '$$\\frac{\\text{CP}}{\\text{MP}} = \\frac{100 - D\\%}{100 + P\\%} \\quad|\\quad \\text{Buy } X \\text{ Get } Y \\text{ Free} \\implies \\text{Discount}\\% = \\frac{Y}{X + Y} \\times 100$$',
          points: [
            { en: 'Zero-Algebra Bridge: Whether Markup%, Profit%, or Discount% is missing, plug directly into `(100 − D) : (100 + P)`!', hi: 'बिना X माने सीधा हल: जब भी छूट % और लाभ % दोनों हों, सीधे `CP : MP = (100 − D%) : (100 + P%)` लगाएं।' },
            { en: 'Free-Book + Profit PYQ: If 1 book free per 15 (`paid=15, taken=16`), effective item factor = `15/16`! Combine right inside `CP:MP`.', hi: 'मुफ़्त वस्तु + लाभ कॉम्बो: हर `15` पर `1` मुफ़्त का अर्थ `16` वस्तुओं के पैसे केवल `15` के बराबर (फैक्टर = `15/16`)।' },
          ],
          example: {
            title: { en: 'NTPC UG PYQ: 4% discount + 1 book free per 15 bought, still gains 35%. MP % above CP?', hi: 'NTPC UG: 4% छूट + प्रत्येक 15 पर 1 पुस्तक मुफ़्त देने पर भी 35% लाभ। MP, CP से कितना % अधिक है?' },
            basic: {
              en: 'Let 1 book `CP = 100`. For 16 books given, `Total CP = 1600`. To gain 35%, `Total SP = 1600 × 1.35 = 2160` collected on 15 books (`144/book`). At 4% discount: $0.96 \\times MP = 144 \\implies MP = 150 \\implies$ **50% above CP**!',
              hi: 'माना 1 पुस्तक `CP = 100`। `16` की लागत $= 1600$। 35% लाभ पर कुल SP $= 2160$ (`15` पर `144/पुस्तक`)। 4% छूट पर `0.96 × MP = 144 ⇒ MP = 150` ⇒ **50% अधिक**!',
            },
            smart: {
              en: 'Fraction Chain (`SP` bridge): $\\frac{\\text{MP}}{\\text{CP}} = \\frac{135}{100} \\times \\frac{100}{96} \\times \\frac{16}{15} = \\frac{27}{20} \\times \\frac{25}{24} \\times \\frac{16}{15} = \\frac{3}{2} \\implies +50\\%$!',
              hi: '4-सेकंड रेश्यो गुणा: $\\frac{\\text{MP}}{\\text{CP}} = \\frac{135}{96} \\times \\frac{16}{15} = \\frac{9}{6} = \\frac{3}{2} \\implies +\\frac{1}{2} = \\mathbf{50\\%}$!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-3-gst-vat-markup-combos',
      number: '3.3',
      shortLabel: '3.3 Markup & GST',
      pyqTypeId: 'type-5-free-articles-gst',
      title: {
        en: 'Module 3: Markup + Successive Discounts, Trade/Cash Schemes & GST/VAT Trap',
        hi: 'मॉड्यूल 3: मार्कअप + क्रमिक बट्टा, व्यापार/नकद छूट स्कीम व GST/VAT जाल',
      },
      summaryTag: {
        en: 'Net Multiplier (1+M)(1−D₁)(1−D₂) • Dealer Profit Excludes GST • Multi-Tier Scheme Billing',
        hi: 'कुल गुणक (1+M)(1−D₁)(1−D₂) • व्यापारी लाभ GST छोड़कर • थोक बिलिंग स्कीम',
      },
      boardCards: [
        {
          id: 'card-3-3-1',
          title: {
            en: '1. Markup + Two Successive Discounts vs Trade + Scheme + Cash Discount Bills',
            hi: '1. मार्कअप + दो क्रमिक बट्टा तथा थोक व्यापार/स्कीम/नकद छूट गणना',
          },
          formula: '$$\\frac{\\text{SP}}{\\text{CP}} = \\left(1 + \\frac{M}{100}\\right)\\left(1 - \\frac{d_1}{100}\\right)\\left(1 - \\frac{d_2}{100}\\right)$$',
          points: [
            { en: 'Chain Order Independence: Whether you apply Trade Discount (`-25%`), Free-Qty Factor (`5/6`), or Cash Discount (`-8%`), multiplying ratios in ANY order gives identical per-unit price!', hi: 'क्रम-स्वतंत्र नियम: व्यापार छूट (`×3/4`), स्कीम (`×5/6`), व नकद छूट (`×0.92`) किसी भी क्रम में गुणा करें — उत्तर समान आएगा!' },
            { en: 'GST Exclusion Alert: "Customer pays 5% GST on SP" goes to Govt, NOT dealer profit unless stated otherwise!', hi: 'GST नियम: विक्रय मूल्य पर ग्राहक द्वारा दिया गया GST सरकार के पास जाता है — व्यापारी का लाभ बिना GST (SP − CP) पर ही गिनें।' },
          ],
          example: {
            title: { en: 'Group D S37 PYQ: MP ₹1,200; 25% trade disc + 1 free per 5 + 8% cash disc. Effective price/unit?', hi: 'Group D S37: MP ₹1,200; 25% व्यापार छूट + 5 पर 1 मुफ़्त + 8% नकद छूट। प्रति यूनिफॉर्म प्रभावी मूल्य?' },
            basic: {
              en: 'For 72 uniforms (`12 sets` of 5 paid + 1 free = 60 billed): After 25% off, each costs `900`. Total bill $= 60 \\times 900 \\times 0.92 = 49,680$. Per uniform $= 49,680 / 72 =$ **₹690**.',
              hi: '`72` कुल (`12×6`, अतः `60` का बिल): 25% छूट के बाद `₹900`। नकद 8% छूट के बाद `60 × 900 × 0.92 = 49,680`। प्रति नग $= 49,680 \\div 72 =$ **₹690**।',
            },
            smart: {
              en: 'Single Unit Multiplier: $1200 \\times \\frac{3}{4} \\times \\frac{5}{6} \\times \\frac{92}{100} = 150 \\times 5 \\times 0.92 = 750 \\times 0.92 =$ **₹690** in 6 sec!',
              hi: '6-सेकंड डायरेक्ट गुणक: $1200 \\times \\frac{3}{4} \\times \\frac{5}{6} \\times 0.92 = 750 \\times 0.92 =$ **₹690**!',
            },
          },
        },
        {
          id: 'card-3-3-2',
          title: {
            en: '2. "No Discount Offered ⇒ Profit P%" Reverse Bridge',
            hi: '2. "यदि कोई छूट न दें तो इतना लाभ" प्रकार के प्रश्नों का 2-चरण ब्रिज',
          },
          formula: '$$\\text{No Discount} \\implies \\text{SP} = \\text{MP} \\implies \\text{CP} = \\frac{\\text{MP}}{1 + P_{\\text{nodisc}}/100}$$',
          points: [
            { en: 'Step 1: Unwind the successive discounts from given SP up to MP.', hi: 'चरण 1: दिए गए SP पर क्रमिक छूट उलट कर तुरंत MP निकालें।' },
            { en: 'Step 2: When no discount is given, MP ITSELF becomes SP ⇒ divide directly by `(1 + P%)` to lock CP!', hi: 'चरण 2: बिना छूट बेचने का अर्थ MP ही नया SP है — अतः सीधे `(1 + लाभ%)` से भाग देकर CP पाएं।' },
          ],
        },
      ],
    },
    {
      id: 'mod-4-article-same-sp',
      number: '3.4',
      shortLabel: '3.4 Articles/SameSP',
      pyqTypeId: 'type-6-article-count-rate',
      diagramKey: 'ch3-article-same-sp',
      title: {
        en: 'Module 4: Article Equilibrium (m CP = n SP), Gain = SP of n, & Same SP Trap',
        hi: 'मॉड्यूल 4: वस्तु-संख्या नियम (m CP = n SP), लाभ = n का SP, व समान विक्रय मूल्य जाल',
      },
      summaryTag: {
        en: 'm CP = n SP ⇒ n:m • Qty×₹ Cross • Profit = SP of k ⇒ CP = n−k • Same SP (−x²/100%)',
        hi: 'm CP = n SP ⇒ n:m • मात्रा×₹ क्रॉस • लाभ = k का SP ⇒ CP = n−k • समान SP (−x²/100%)',
      },
      boardCards: [
        {
          id: 'card-3-4-1',
          title: {
            en: '1. Article-Count Ratio, Cross Rate (Buy p for ₹q, Sell r for ₹s) & "x for ₹1"',
            hi: '1. वस्तु-संख्या अनुपात, मात्रा-दर क्रॉस विधि व "₹1 में कितनी वस्तुएँ" ट्रिक',
          },
          formula: '$$m\\,\\text{CP} = n\\,\\text{SP} \\implies P/L\\% = \\frac{m - n}{n}\\times 100 \\quad|\\quad N_{\\text{new}} = N_{\\text{old}} \\times \\frac{100 \\pm r_1}{100 \\pm r_2}$$',
          points: [
            { en: 'Same-Money Inverse Qty Law: Because Amount (`₹1`) is fixed, MORE profit means FEWER articles sold per ₹1 (`× (100±r₁)/(100±r₂)`!).', hi: 'समान धन में व्युत्क्रम नियम: जब ₹ निश्चित हो (जैसे ₹1), तो अधिक लाभ हेतु कम वस्तुएँ बेची जाएंगी ⇒ सीधे `× (100±r₁)/(100±r₂)`!' },
            { en: 'Gain/Loss = SP of k articles: Selling `n` items gives SP = `n`. Profit = `+k ⇒ CP = n − k`; Loss = `k ⇒ CP = n + k`!', hi: 'लाभ/हानि = `k` का SP नियम: यदि `n` बेचकर `k` के SP बराबर लाभ हो ⇒ `CP = n − k`; और यदि `k` के SP बराबर हानि हो ⇒ `CP = n + k`!' },
          ],
          example: {
            title: { en: 'NTPC UG PYQ: Selling 6 articles for ₹1 loses 30%. How many for ₹1 to gain 40%?', hi: 'NTPC UG: ₹1 में 6 वस्तुएँ बेचने पर 30% हानि होती है। 40% लाभ पाने हेतु ₹1 में कितनी बेचनी होंगी?' },
            basic: {
              en: 'SP of 1 = ₹`1/6` (`70%` of CP) $\\implies CP = \\frac{1}{6} \\times \\frac{100}{70}$. For `140%` gain: New SP $= \\frac{1}{6} \\times \\frac{140}{70} = \\frac{1}{3} \\implies$ **3 articles/₹1**.',
              hi: '1 का SP = ₹`1/6` (`70%`)। 40% लाभ (`140%`) हेतु नया SP $= \\frac{1}{6} \\times \\frac{140}{70} = \\frac{1}{3} \\implies$ **₹1 में 3 वस्तुएँ**।',
            },
            smart: {
              en: '2-Sec Inverse Ratio: Rate ratio `70% : 140% = 1 : 2` ⇒ Quantity flips `2 : 1` ⇒ `6 →` **3 articles** orally!',
              hi: '2-सेकंड व्युत्क्रम ट्रिक: कीमत `70 : 140 = 1 : 2` ⇒ वस्तु मात्रा उल्टी `2 : 1` ⇒ `6` की आधी **3**!',
            },
          },
        },
        {
          id: 'card-3-4-2',
          title: {
            en: '2. Same SP (+x%, −x%) vs Same CP (+x%, −x%) — Classic Railway Comparison',
            hi: '2. समान SP (+x%, −x%) बनाम समान CP (+x%, −x%) — सबसे प्रसिद्ध अंतर',
          },
          formula: '$$\\text{Same SP } (+x\\%,\\,-x\\%) \\implies \\text{Loss} = \\frac{x^2}{100}\\% \\quad|\\quad \\text{Same CP } (+x\\%,\\,-x\\%) \\implies 0\\% \\text{ (Even!)}$$',
          points: [
            { en: 'Same SP (`+5%`, `−5%`): Even if SP ₹ amount looks huge (`₹1.995 lakh each`), ignore ₹ completely! Net ALWAYS `−25/100 = 0.25% loss`!', hi: 'समान SP: चाहे SP करोड़ों (`₹1.995 लाख`) में क्यों न हो, यदि % पूछें तो ₹ संख्या भूल जाएं — सीधे `x²/100% = 0.25%` हानि!' },
            { en: 'Same CP (`20% profit`, `−10% loss`): Average % straight `(20 − 10)/2 = +5%` overall! Check word "cost price each" vs "sold each".', hi: 'समान CP (`+20%` व `−10%`): दोनों CP बराबर हैं, अतः कुल SP = `1.2 + 0.9 = 2.1 CP` सीधे जोड़े जा सकते हैं!' },
          ],
        },
      ],
    },
    {
      id: 'mod-5-dishonest-dealer',
      number: '3.5',
      shortLabel: '3.5 Dishonest Wt',
      pyqTypeId: 'type-9-dishonest-dealer',
      diagramKey: 'ch3-dishonest-scale',
      title: {
        en: 'Module 5: Dishonest Shopkeeper — False Weight & Double-Cheating Ratio Engine',
        hi: 'मॉड्यूल 5: बेईमान दुकानदार — गलत बाट (800g/1000g) व दोहरी धोखाधड़ी चेन',
      },
      summaryTag: {
        en: 'Real Paid vs Charged Ratio • Gain% → False Wt = 1000/(1+P) • Markup + Less Weight Combo',
        hi: 'असली वज़न बनाम वसूला मूल्य • लाभ% से बाट निकालना • मार्कअप + कम तौल कॉम्बो',
      },
      boardCards: [
        {
          id: 'card-3-5-1',
          title: {
            en: '1. Single Ratio-Column Rule: Real Cost (Left) vs Customer Charged (Right)',
            hi: '1. एकल रेश्यो स्तंभ विधि (जेब से गया CP : जेब में आया SP)',
          },
          formula: '$$\\text{Wt Ratio}: \\text{Given} : \\text{Claimed} \\quad|\\quad \\text{False Wt for Profit } P\\%: \\; W = \\frac{1000}{1 + P/100}$$',
          points: [
            { en: 'Selling 800g as 1000g at CP: Dealer spends `800` units of cost, charges customer for `1000` units ⇒ Gain = `+200/800 = +25%`!', hi: 'सरल तराजू तर्क: दुकानदार ने वास्तव में जेब से `800g` दिया पर पैसे `1000g` के लिए ⇒ लाभ = `(1000−800)/800 = 25%`!' },
            { en: 'Double Fraud (Markup `+a%` + Less Wt `−w%`): Put `100−w : 100` AND `100 : 100+a` → Net ratio `(100−w) : (100+a)` in 1 line!', hi: 'दोहरा जाल (लाभ दावा `+a%` व `−w%` कम बाट): सीधे `(100 − w) : (100 + a)` अनुपात लिखें — दोनों `100` आपस में कट जाते हैं!' },
          ],
          example: {
            title: { en: 'NTPC UG S34 PYQ: Trader claims +44% profit AND uses weight 10% less than printed. Net gain %?', hi: 'NTPC UG S34: व्यापारी 44% लाभ का दावा करता है तथा 10% कम बाट इस्तेमाल करता है। कुल लाभ %?' },
            basic: {
              en: 'Assume 1g costs ₹1. Gives `900g` (`Real CP = ₹900`), charges for `1000g + 44% = ₹1440`. Net Profit $= \\frac{1440 - 900}{900} \\times 100 = \\frac{540}{9} = \\mathbf{60\\%}$.',
              hi: 'माना 1g = ₹1। दुकानदार ने दिया `900g` (`CP = 900`), वसूला `1440`। लाभ $= \\frac{540}{900} \\times 100 =$ **60%**।',
            },
            smart: {
              en: '1-Line Direct Cancellation: `(100 − 10) : (100 + 44) = 90 : 144 = 5 : 8` ⇒ `+3/5 =` **60%** instantly!',
              hi: '1-पंक्ति सूत्र: `(100 − 10) : (100 + 44) = 90 : 144 = 5 : 8` ⇒ `+3/5 =` **60%**!',
            },
          },
        },
        {
          id: 'card-3-5-2',
          title: {
            en: '2. Reversing Weight from Given Profit % (e.g. +25% or +11¹⁄₉%)',
            hi: '2. लाभ % से झूठा बाट (ग्राम में) निकालना — 2-सेकंड भिन्न व्युत्क्रम',
          },
          formula: '$$+\\frac{1}{n} \\text{ Profit} \\implies \\text{True Wt} : \\text{False Wt} = (n + 1) : n \\implies W_{\\text{false}} = 1000 \\times \\frac{n}{n + 1}$$',
          points: [
            { en: 'Profit `25% = +1/4` ⇒ Ratio `4 : 5` (`5 parts = 1000g`) ⇒ `4 parts = 800g`! NEVER compute 75% (`750g`) by mistake!', hi: 'चेतावनी: 25% लाभ = `1/4`, अतः अनुपात `4 : 5` (`5 = 1000g ⇒ 4 = 800g`)! कभी गलती से 75% (`750g`) न लगाएं!' },
            { en: 'Profit `11¹⁄₉% = +1/9` ⇒ Ratio `9 : 10` (`10 parts = 1000g`) ⇒ `9 parts = 900g` orally!', hi: '`11¹⁄₉%` = `+1/9` लाभ ⇒ अनुपात `9 : 10` (`10 = 1000g`) ⇒ झूठा बाट = **900g**!' },
          ],
        },
      ],
    },
    {
      id: 'mod-6-shift-cross-method',
      number: '3.6',
      shortLabel: '3.6 Shift Cross',
      pyqTypeId: 'type-10-both-shifted-cross-multi',
      diagramKey: 'ch3-shift-cross-method',
      title: {
        en: 'Module 6: Conditional CP & SP Both Shifted by ₹ (Cross-Multiplication)',
        hi: 'मॉड्यूल 6: जब CP और SP दोनों ₹ में बदल जाएं (क्रॉस-गुणन शॉर्टकट)',
      },
      summaryTag: {
        en: 'Old Rate p₁ → New Rate p₂ when CP+a, SP−b • Zero-Mess Cross Equation',
        hi: 'यदि CP में +a व SP में −b करें तो नया लाभ p₂% • 1-समीकरण क्रॉस विधि',
      },
      boardCards: [
        {
          id: 'card-3-6-1',
          title: {
            en: '1. Clean Cross-Multiplication & Direct Gap Formula for (CP ± Δ, SP ± Δ)',
            hi: '1. CP ± ₹Δ व SP ± ₹Δ के लिए 1-पंक्ति गैप सूत्र व क्रॉस-गुणन विधि',
          },
          formula: '$$x\\,(p_1 - p_2) = (1 + p_2)\\,\\Delta\\text{CP} - \\Delta\\text{SP} \\quad|\\quad \\text{Cross Ratio: } (\\text{CP}_1 : \\text{SP}_1) \\xrightarrow{\\Delta\\text{CP}, \\Delta\\text{SP}} (\\text{CP}_2 : \\text{SP}_2)$$',
          points: [
            { en: 'Same-Sign Rule in Formula: Put `+` for increase in CP/SP (`+28`), `−` for decrease (`−84`). Plug right in!', hi: 'चिह्न नियम: वृद्धि (`+`) व कमी (`−`) सहित ΔCP और ΔSP सीधे रखें — केवल 1 भाग देकर उत्तर पाएं!' },
            { en: 'Cross Method (When Ratios Clean): For `40%` (`5:7`) and `37.5%` (`8:11`), cross `5×11 − 7×8` units = `|8(−84) − 11(+28)|`. Both give exact integer CP!', hi: 'रेश्यो क्रॉस विधि (`5:7` व `8:11`): तिरछा अंतर `55 − 56 = 1 इकाई` = `11×28 + 8×84 = 980 ⇒ CP = 5×980 = ₹4,900`!' },
          ],
          example: {
            title: { en: 'ALP 2025 S8 PYQ: Sold at 40% gain; if CP +₹28 & SP −₹84, profit becomes 37.5%. Old CP?', hi: 'ALP S8: 40% लाभ पर बिक्री; यदि CP +₹28 और SP −₹84 करें, तो लाभ 37.5%। मूल CP?' },
            basic: {
              en: 'Let $CP = x, SP = 1.4x$. New cond: $\\frac{1.4x - 84}{x + 28} = 1.375 \\implies 0.025x = 84 + 38.5 = 122.5 \\implies x =$ **₹4,900**.',
              hi: 'माना $CP = x, SP = 1.4x$। शर्त: $1.4x - 84 = 1.375(x + 28) \\implies 0.025x = 122.5 \\implies x =$ **₹4,900**।',
            },
            smart: {
              en: 'Fraction Cross (`40% = 5:7`, `37.5% = 8:11`): `|5×11 − 7×8| = 1 part`. Gap $= 11(+28) - 8(-84) = 308 + 672 = 980 \\implies 5 \\times 980 =$ **₹4,900**!',
              hi: 'रेश्यो क्रॉस (`5:7` व `8:11`): `56−55 = 1 भाग` = `11×28 + 8×84 = 980` ⇒ मूल `CP = 5 × 980` = **₹4,900**!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-7-split-lots-chains',
      number: '3.7',
      shortLabel: '3.7 Lots & A→B→C',
      pyqTypeId: 'type-11-weighted-split-merchant-chain',
      title: {
        en: 'Module 7: Weighted Split Lots (Goods Sold in Parts) & Merchant Chain (A → B → C)',
        hi: 'मॉड्यूल 7: भागों में बिक्री (Weighted Split Lots) व बहु-व्यापारी श्रृंखला (A → B → C)',
      },
      summaryTag: {
        en: 'Skip Total CP for % Split • Fraction Weight Avg • Step-by-Step Backward Chain With Repair',
        hi: 'भागों में बिक्री भारित % • कुल लाभ से कुल मात्रा • मरम्मत सहित उल्टी चेन A→B→C',
      },
      boardCards: [
        {
          id: 'card-3-7-1',
          title: {
            en: '1. Weighted Average Profit on Split Lots & Multi-Merchant Chain with Repairs',
            hi: '1. टुकड़ों में बिक्री का भारित औसत व मरम्मत खर्च सहित A → B → C श्रृंखला',
          },
          formula: '$$\\text{Net } P/L\\% = \\frac{\\sum w_i\\,(\\%\\Delta_i)}{\\sum w_i} \\quad|\\quad \\text{Chain With Repair}: \\; \\text{CP}_B = \\text{Buy}_B + \\text{Repair}_B$$',
          points: [
            { en: 'Weighted Split Shortcut: Ignore CP per item (`₹10`, `₹500`) whenever only overall `% profit/loss` is asked — multiply Qty Weights × Rates directly!', hi: 'भारित शॉर्टकट: यदि उत्तर % में पूछा हो, तो वस्तु कीमत (`₹10`) नजरअंदाज करें — सीधे `(मात्रा अनुपात × %दर)` का औसत निकालें!' },
            { en: 'Repair in Chain Trap (`A → B + Repair → C`): When unwinding backwards from `C`, FIRST divide out `B` profit/loss %, THEN SUBTRACT `B` repair ₹ BEFORE dividing `A` %!', hi: 'चेन मरम्मत जाल: `C` से उल्टा `A` पर लौटते समय पहले `B` का % भाग दें, फिर `B` का मरम्मत खर्च घटाएं, तब `A` पर लौटें!' },
          ],
          example: {
            title: { en: 'ALP S4 PYQ: Nikhil → Ravi (−24%). Ravi +₹486 repair, sells Vikas ₹2,875 (+15%). Nikhil CP?', hi: 'ALP S4: निखिल → रवि (−24%)। रवि ने ₹486 मरम्मत जोड़ ₹2,875 (+15%) में विकास को बेचा। निखिल का CP?' },
            basic: {
              en: 'Ravi total CP $= \\frac{2875}{1.15} =$ ₹2,500. Before ₹486 repair, Ravi paid $= 2500 - 486 =$ ₹2,014. Thus `76%` of Nikhil CP $= 2014 \\implies$ **₹2,650**.',
              hi: 'रवि की कुल लागत $= 2875 \\div 1.15 = 2500$। मरम्मत से पहले $= 2500 - 486 = 2014$ (`76%`) ⇒ निखिल CP $= 2014 \\div 0.76 =$ **₹2,650**।',
            },
            smart: {
              en: 'Clean Fractions: `15% = 23/20 ⇒ 2875/23 = 125 ⇒ ×20 = 2500`. Minus `486 = 2014`. `76% = 19/25 ⇒ 2014/19 = 106 ⇒ 106×25 =` **₹2,650**!',
              hi: 'तेज़ भिन्न कट: `2875 ÷ 23 × 20 = 2500`; `2500 − 486 = 2014`; `76% = 19/25` ⇒ `2014 ÷ 19 × 25 = 106 × 25` = **₹2,650**!',
            },
          },
        },
      ],
    },
  ],

  decisionMatrix: {
    title: {
      en: 'Exam-Hall 3-Second Method Selector (Profit, Loss & Discount)',
      hi: 'एग्ज़ाम-हॉल 3-सेकंड निर्णय तालिका (कब कौन-सी ट्रिक लगाएं?)',
    },
    rows: [
      {
        trigger: { en: 'Markup % + Discount % + Profit % (Find MP/CP or Discount %)', hi: 'मार्कअप %, छूट % व लाभ % का आपसी संबंध पूछें' },
        firstCheck: { en: 'Plug directly into CP : MP = (100 − D%) : (100 + P%)!', hi: 'सीधे `CP : MP = (100 − D%) : (100 + P%)` अनुपात लगाएं!' },
        avoid: { en: 'Never assume CP = 100 and build 3 algebraic equations.', hi: 'कभी X मानकर 3 अलग समीकरण न बनाएं।' },
      },
      {
        trigger: { en: '"Buy X Get Y Free" + Trade/Cash Discount %', hi: '"X खरीदें Y मुफ़्त पाएं" या अतिरिक्त बट्टा स्कीम' },
        firstCheck: { en: 'Free Disc = Y/(X+Y); Total Unit Cost = MP × PaidRatio × (1 − d%)', hi: 'मुफ़्त छूट = `Y/(X+Y)`; कुल मूल्य हेतु सभी कारक एक पंक्ति में गुणा करें!' },
        avoid: { en: 'Never put X instead of (X + Y) in the denominator!', hi: 'हर में कभी केवल `X` न रखें — कुल प्राप्त वस्तु `(X + Y)` आएगी!' },
      },
      {
        trigger: { en: 'Same SP with +x% & −x% OR Dishonest Dealer Weights', hi: 'समान SP (+x%, −x%) या बेईमान दुकानदार गलत बाट' },
        firstCheck: { en: 'Same SP ⇒ Loss x²/100%; False Wt ⇒ Given : Claimed × (100 : 100+a)', hi: 'समान SP ⇒ `−x²/100%` हानि; बाट हेतु `दिया : अंकित` अनुपात सीधा गुणा करें!' },
        avoid: { en: 'Never take Base 1000g for % profit — profit always sits on Given Weight!', hi: 'कम तौल पर लाभ `1000g` पर नहीं, बल्कि दिए गए कम बाट (CP) पर निकलता है!' },
      },
      {
        trigger: { en: 'CP of m = SP of n OR Both CP & SP shifted by ₹Δ', hi: 'm वस्तु का CP = n का SP या CP व SP दोनों ₹ में बदल जाएं' },
        firstCheck: { en: 'Invert m:n for Ratio; use Cross-Product for Shifted CP/SP!', hi: '`CP:SP = n:m` उलटें; दोनों बदलने पर रेश्यो क्रॉस-गुणन लगाएं!' },
        avoid: { en: 'Don’t confuse Profit = SP of k (CP = n−k) vs CP of k (CP = n).', hi: '`k के विक्रय मूल्य` और `k के क्रय मूल्य` वाले लाभ में अंतर अवश्य देखें!' },
      },
    ],
  },

  trapAlerts: [
    {
      title: { en: 'Trap 1: Comparing Successive Discounts (2% + 8% vs 10% Flat)', hi: 'जाल 1: 2% + 8% को 10% एकल छूट के बराबर समझ लेना' },
      detail: { en: '2% + 8% equals 2 + 8 − 0.16 = 9.84% (NOT 10%!). Flat 10% ALWAYS saves the customer more money!', hi: '2% + 8% वास्तव में 9.84% छूट होती है, 10% नहीं! ग्राहक के लिए सदैव सीधी 10% छूट सबसे फायदेमंद होती है।' },
    },
    {
      title: { en: 'Trap 2: Dividing Free Articles by "Bought X" Instead of "(X + Y)"', hi: 'जाल 2: "Buy 3 Get 1 Free" की छूट 1/3 (33.3%) बता देना' },
      detail: { en: 'Customer takes home 4 articles total, paying for 3 ⇒ Discount = 1/4 = 25% (ALWAYS Paid + Free in denominator!).', hi: 'ग्राहक घर कुल 4 वस्तुएँ ले जाता है, अतः छूट = 1 / (3+1) = 25% होगी (न कि 33.3%)!' },
    },
    {
      title: { en: 'Trap 3: Profit Calculated on Stated 1000g Instead of Given False Weight', hi: 'जाल 3: गलत तौल में लाभ की गणना 1000g पर कर देना' },
      detail: { en: 'If dealer gives 800g for 1000g, his investment is 800g! Gain = 200/800 = 25% (NOT 200/1000 = 20%!).', hi: '800g देने पर दुकानदार की लागत केवल 800g है — अतः लाभ = 200/800 = 25% होगा, 20% नहीं!' },
    },
    {
      title: { en: 'Trap 4: Confusing "Same SP (±x%)" with "Same CP (±x%)"', hi: 'जाल 4: "समान SP" व "समान CP" के उत्तर आपस में बदल देना' },
      detail: { en: 'Same CP at ±10% cancels to 0% No Profit/Loss; ONLY Same Selling Price yields −x²/100% loss!', hi: 'जब दोनों का क्रय मूल्य (CP) बराबर हो तो ±x% पर 0% होता है; −x²/100% हानि केवल "समान SP" में होती है!' },
    },
    {
      title: { en: 'Trap 5: "Profit = SP of 12 Articles" vs "Profit = CP of 12 Articles"', hi: 'जाल 5: 24 बेचकर "12 के विक्रय मूल्य" बराबर लाभ पर हर 24 रख देना' },
      detail: { en: 'Since profit is measured in SP units, Let SP(1)=1 ⇒ SP=24, Profit=12 ⇒ CP = 24 − 12 = 12 ⇒ 100% (NOT 50%!).', hi: 'यहाँ लाभ SP की इकाई में है ⇒ SP = 24, लाभ = 12 ⇒ CP = 24 − 12 = 12 ⇒ लाभ = 12/12 = 100% (न कि 50%)!' },
    },
    {
      title: { en: 'Trap 6: Adding Government GST Inside Shopkeeper Profit Margin', hi: 'जाल 6: विक्रेता लाभ गणना में ग्राहक द्वारा दिया गया GST जोड़ लेना' },
      detail: { en: 'Tax/GST collected on SP goes straight to government; dealer’s net profit % is strictly based on pre-GST SP vs CP.', hi: 'बिक्री पर वसूला गया GST सरकार के पास जाता है — जब तक प्रश्न न कहे, लाभ % बिना GST मूल्य पर ही निकालें!' },
    },
  ],

  tables: [
    {
      id: 'tbl-pl-formulas',
      title: { en: 'Table 1: Complete CP, SP, MP & Profit/Loss Master Formula Sheet', hi: 'तालिका 1: CP, SP, MP व क्रमिक बट्टा मास्टर सूत्र चार्ट' },
      headers: { en: ['Concept', 'Exact Formula', 'Speed / Mental Rule'], hi: ['प्रकरण (Concept)', 'मुख्य सूत्र', 'टॉपर शॉर्टकट'] },
      rows: [
        [{ en: 'Basic Gain / Loss %', hi: 'साधारण लाभ / हानि %' }, { en: '$(|\\text{SP} - \\text{CP}| / \\text{CP}) \\times 100$', hi: '$(|\\text{SP} - \\text{CP}| / \\text{CP}) \\times 100$' }, { en: 'Convert P/L % to Fraction first', hi: 'P/L% को पहले भिन्न (`+1/5 => 5:6`) बनाएं' }],
        [{ en: 'CP ↔ MP Magic Bridge', hi: 'CP : MP मैजिक अनुपात' }, { en: '$\\text{CP} : \\text{MP} = (100-D\\%) : (100+P\\%)$', hi: '$\\text{CP} : \\text{MP} = (100-D\\%) : (100+P\\%)$' }, { en: 'Directly locks CP, MP, or P%', hi: 'सीधे एक पंक्ति में उत्तर' }],
        [{ en: '2 Successive Discounts', hi: '2 क्रमिक बट्टा संतुल्य' }, { en: '$d_1 + d_2 - \\frac{d_1 d_2}{100}$', hi: '$d_1 + d_2 - \\frac{d_1 d_2}{100}$' }, { en: 'For equal sum, smaller `d₁d₂` = larger disc', hi: 'समान योग में कम `d₁d₂` ⇒ अधिक छूट' }],
        [{ en: 'Buy X Get Y Free', hi: 'X खरीदें Y मुफ़्त पाएं' }, { en: '$\\text{Disc}\\% = \\frac{Y}{X + Y} \\times 100$', hi: '$\\text{छूट}\\% = \\frac{Y}{X + Y} \\times 100$' }, { en: 'Put TOTAL (`Paid + Free`) below!', hi: 'हर में कुल वस्तुएं (`X + Y`) रखें' }],
      ],
    },
    {
      id: 'tbl-pl-ratios',
      title: { en: 'Table 2: Profit/Loss Golden Fraction Pairs (Skip ×100 Calculations)', hi: 'तालिका 2: लाभ व हानि के स्वर्णिम भिन्न जोड़े (CP → SP 1-सेकंड अनुपात)' },
      headers: { en: ['Profit / Loss %', 'CP : SP Ratio', 'Reverse Check Tip'], hi: ['लाभ / हानि %', 'CP : SP अनुपात', 'रिवर्स जाँच ट्रिक'] },
      rows: [
        [{ en: '+20% Profit / −20% Loss', hi: '+20% लाभ / −20% हानि' }, { en: '5 : 6 / 5 : 4', hi: '5 : 6 / 5 : 4' }, { en: '6→5 drop = 16⅔% on SP', hi: 'SP पर गिनने हेतु हर में SP रखें' }],
        [{ en: '+25% Profit / −25% Loss', hi: '+25% लाभ / −25% हानि' }, { en: '4 : 5 / 4 : 3', hi: '4 : 5 / 4 : 3' }, { en: 'Dishonest +25% ⇒ 800g weight', hi: 'बेईमान +25% ⇒ 800g बाट' }],
        [{ en: '+16⅔% / +14²⁄₇% Profit', hi: '+16⅔% / +14²⁄₇% लाभ' }, { en: '6 : 7 / 7 : 8', hi: '6 : 7 / 7 : 8' }, { en: 'Never use decimals for 16⅔%', hi: '16⅔% में दशमलव कभी न लें' }],
        [{ en: '+37.5% / −37.5% Change', hi: '+37.5% / −37.5% बदलाव' }, { en: '8 : 11 / 8 : 5', hi: '8 : 11 / 8 : 5' }, { en: 'Critical for CP–SP Shift Cross PYQs', hi: 'शिफ्ट क्रॉस प्रश्नों में अति उपयोगी' }],
      ],
    },
    {
      id: 'tbl-article-rules',
      title: { en: 'Table 3: Article Count & "Gain = SP/CP of k" Decision Guide', hi: 'तालिका 3: वस्तु-संख्या व "लाभ = k का SP/CP" तुरंत पहचान तालिका' },
      headers: { en: ['Question Pattern', 'Quick Formula', 'Sample Exam Outcome'], hi: ['प्रश्न पैटर्न', 'त्वरित सूत्र', 'परीक्षा उदाहरण'] },
      rows: [
        [{ en: 'CP of m = SP of n', hi: 'm का CP = n का SP' }, { en: '$((m - n) / n) \\times 100$', hi: '$((m - n) / n) \\times 100$' }, { en: '28 CP = 25 SP ⇒ +3/25 = +12%', hi: '28 CP = 25 SP ⇒ +12% लाभ' }],
        [{ en: 'Sell n, Gain SP of k', hi: 'n बेचने पर k का SP लाभ' }, { en: '$k / (n - k) \\times 100$', hi: '$k / (n - k) \\times 100$' }, { en: 'Sell 24, Gain 12 SP ⇒ 12/12 = 100%', hi: '24 पर 12 SP लाभ ⇒ 100%' }],
        [{ en: 'Sell n, Lose SP of k', hi: 'n बेचने पर k का SP हानि' }, { en: '$k / (n + k) \\times 100$', hi: '$k / (n + k) \\times 100$' }, { en: 'CP exceeds SP by k', hi: 'क्योंकि CP = n + k होगा' }],
        [{ en: 'Same SP (+x%, −x%)', hi: 'समान SP पर +x% व −x%' }, { en: 'ALWAYS Loss $(x^2 / 100)\\%$', hi: 'सदैव हानि $(x^2 / 100)\\%$' }, { en: '±5% ⇒ −0.25% | ±20% ⇒ −4%', hi: '±5% ⇒ 0.25% | ±20% ⇒ 4% हानि' }],
      ],
    },
    {
      id: 'tbl-dishonest-cases',
      title: { en: 'Table 4: All 4 Dishonest Shopkeeper Variations & Ratio Columns', hi: 'तालिका 4: बेईमान दुकानदार के सभी 4 प्रकार व सीधी रेश्यो तालिका' },
      headers: { en: ['Dealer Trick Variant', 'CP : SP Multiplier', 'Real Exam Example'], hi: ['बेईमानी प्रकार', 'CP : SP अनुपात गुणक', 'रियल परीक्षा उदाहरण'] },
      rows: [
        [{ en: 'False Weight w instead of 1000g', hi: '1000g की जगह w ग्राम बाट' }, { en: '$w : 1000$', hi: '$w : 1000$' }, { en: '800g for 1000g ⇒ 4 : 5 (+25%)', hi: '800g ⇒ 4 : 5 (+25% लाभ)' }],
        [{ en: '+a% Profit Claim + w% Less Wt', hi: '+a% लाभ दावा + w% कम बाट' }, { en: '$(100 - w) : (100 + a)$', hi: '$(100 - w) : (100 + a)$' }, { en: '+44% & −10% ⇒ 90:144 (+60%)', hi: '+44% व −10% ⇒ 90:144 (+60%)' }],
        [{ en: 'Marks +M%, Disc d%, Less Wt', hi: '+M% अंकित, d% छूट व कम बाट' }, { en: '$\\text{Given}:1000 \\times 100:(100+M)(1-d)$', hi: '$\\text{दिया}:1000 \\times 100:(100+M)(1-d)$' }, { en: 'Chain every percentage cleanly', hi: 'सारे बदलाव एक स्तंभ में गुणा करें' }],
        [{ en: 'Find Weight for P% Profit', hi: 'P% लाभ हेतु झूठा बाट भार?' }, { en: '$1000 / (1 + P\\%)$', hi: '$1000 / (1 + P\\%)$' }, { en: '+11¹⁄₉% ⇒ 1000×(9/10) = 900g', hi: '+11¹⁄₉% ⇒ 900g भार' }],
      ],
    },
    {
      id: 'tbl-free-schemes',
      title: { en: 'Table 5: Instant "Buy X Get Y Free" Discount Percentages', hi: 'तालिका 5: प्रसिद्ध "Buy X Get Y Free" स्कीम्स व उनका सीधा छूट %' },
      headers: { en: ['Store Scheme', 'Paid / Total Ratio', 'Net Discount %'], hi: ['स्टोर स्कीम', 'भुगतान / कुल वस्तु', 'शुद्ध छूट %'] },
      rows: [
        [{ en: 'Buy 3 Get 1 Free', hi: '3 खरीदें 1 मुफ़्त' }, { en: 'Pay 3 / Get 4 (`3/4`)', hi: '3 के पैसे / 4 मिलीं' }, { en: '25%', hi: '25%' }],
        [{ en: 'Buy 4 Get 2 Free', hi: '4 खरीदें 2 मुफ़्त' }, { en: 'Pay 4 / Get 6 (`2/3`)', hi: '4 के पैसे / 6 मिलीं' }, { en: '33⅓% (33.33%)', hi: '33⅓% (33.33%)' }],
        [{ en: 'Buy 5 Get 1 Free', hi: '5 खरीदें 1 मुफ़्त' }, { en: 'Pay 5 / Get 6 (`5/6`)', hi: '5 के पैसे / 6 मिलीं' }, { en: '16⅔% (16.67%)', hi: '16⅔% (16.67%)' }],
        [{ en: 'Buy 6 Get 4 Free / Buy 30 Get 10', hi: '6 पर 4 मुफ़्त / 30 पर 10 मुफ़्त' }, { en: '6/10 & 30/40', hi: '6/10 व 30/40' }, { en: '40% & 25%', hi: '40% व 25%' }],
      ],
    },
  ],

  typeWiseGroups: [
    {
      typeId: 'type-1-basic-cp-sp-overheads',
      typeNumber: 1,
      title: { en: 'Type 1: Basic Profit/Loss %, Repair Overheads & Damaged Stock', hi: 'Type 1: मूल लाभ/हानि %, मरम्मत व क्षतिग्रस्त माल PYQs' },
      conceptHint: { en: 'Count ALL items inside Total CP, then divide ONLY by surviving good items!', hi: 'लागत सभी वस्तुओं पर गिनें और विक्रय मूल्य केवल बचे सही माल पर!' },
      questionIds: ['ch3-pyq-1', 'ch3-pyq-2', 'ch3-pyq-3'],
    },
    {
      typeId: 'type-2-sp-scaling-multi-profit',
      typeNumber: 2,
      title: { en: 'Type 2: Direct SP-to-SP Scaling & SP Doubling Profit Theorems', hi: 'Type 2: सीधा विक्रय मूल्य स्केलिंग (85%→115%) व SP दोगुना नियम' },
      conceptHint: { en: 'Scale SP directly with ratio (100+target)/(100+old) without wasting steps on CP.', hi: 'CP निकाले बिना सीधे (100±लक्ष्य)/(100±पुरानी) अनुपात से गुणा करें।' },
      questionIds: ['ch3-pyq-4', 'ch3-pyq-5', 'ch3-pyq-6'],
    },
    {
      typeId: 'type-3-successive-discount-mp',
      typeNumber: 3,
      title: { en: 'Type 3: Successive Discounts Comparison, Net % & Finding d₁%', hi: 'Type 3: क्रमिक बट्टा तुलना, एकल समतुल्य छूट व अज्ञात छूट (d₁%)' },
      conceptHint: { en: 'For equal sums, lowest product (d₁×d₂) yields maximum discount to buyer!', hi: 'समान योग में सबसे छोटा गुणनफल (d₁×d₂) ग्राहक को सबसे अधिक छूट देता है!' },
      questionIds: ['ch3-pyq-7', 'ch3-pyq-8', 'ch3-pyq-9', 'ch3-pyq-10'],
    },
    {
      typeId: 'type-4-cp-mp-magic-ratio',
      typeNumber: 4,
      title: { en: 'Type 4: CP : MP = (100 − D) : (100 + P) Magic Ratio & Markup Combos', hi: 'Type 4: मैजिक अनुपात (100−D):(100+P) व मार्कअप–छूट कॉम्बो PYQs' },
      conceptHint: { en: 'Plug directly into CP:MP = (100−D):(100+P) or multiply chain (1+M)(1−d₁)(1−d₂)!', hi: 'सीधे CP:MP = (100−D):(100+P) या गुणक चेन (1+M)(1−d₁)(1−d₂) लगाएं!' },
      questionIds: ['ch3-pyq-11', 'ch3-pyq-12', 'ch3-pyq-13', 'ch3-pyq-14'],
    },
    {
      typeId: 'type-5-free-articles-gst',
      typeNumber: 5,
      title: { en: 'Type 5: Buy X Get Y Free Schemes & Multi-Tier Wholesale Billing', hi: 'Type 5: मुफ़्त वस्तु स्कीम्स (Buy X Get Y Free) व थोक बिलिंग PYQs' },
      conceptHint: { en: 'Combine free-article ratio X/(X+Y) seamlessly with trade & cash discounts!', hi: 'मुफ़्त वस्तु अनुपात X/(X+Y) को व्यापार व नकद छूट संग एक साथ गुणा करें!' },
      questionIds: ['ch3-pyq-15', 'ch3-pyq-16', 'ch3-pyq-17'],
    },
    {
      typeId: 'type-6-article-count-rate',
      typeNumber: 6,
      title: { en: 'Type 6: Article-Count Equilibrium (m CP = n SP) & Cross-Rate PYQs', hi: 'Type 6: वस्तु-संख्या संतुलन (m CP = n SP) व मात्रा-दर क्रॉस PYQs' },
      conceptHint: { en: 'Invert m CP = n SP ⇒ CP:SP = n:m; or put Bought over Sold to cross-multiply!', hi: 'm CP = n SP को पलटकर CP:SP = n:m करें; भिन्न मात्रा हेतु क्रॉस गुणा लगाएं!' },
      questionIds: ['ch3-pyq-18', 'ch3-pyq-19', 'ch3-pyq-20', 'ch3-pyq-21'],
    },
    {
      typeId: 'type-7-gain-loss-eq-sp',
      typeNumber: 7,
      title: { en: 'Type 7: Gain = SP of k Articles, "x for ₹1" & Target ₹ Profit Qty', hi: 'Type 7: लाभ = k का विक्रय मूल्य, ₹1 में वस्तुएँ व निश्चित ₹ लाभ मात्रा' },
      conceptHint: { en: 'Gain = k SP ⇒ CP = n − k! Fixed ₹1 rate ⇒ flip price ratio for new quantity!', hi: 'लाभ = k का SP ⇒ CP = n − k! समान ₹1 पर दर पलटने से सीधे नई मात्रा मिलेगी!' },
      questionIds: ['ch3-pyq-22', 'ch3-pyq-23', 'ch3-pyq-24'],
    },
    {
      typeId: 'type-8-same-sp-same-cp',
      typeNumber: 8,
      title: { en: 'Type 8: Same Selling Price (±x% Trap) vs Same CP & Cashback Combos', hi: 'Type 8: समान विक्रय मूल्य (±x% जाल) बनाम समान क्रय मूल्य PYQs' },
      conceptHint: { en: 'Same SP (+x%, −x%) ALWAYS loses x²/100%; Same CP averages (P₁ − L₂)/2!', hi: 'समान SP पर सदैव x²/100% हानि; समान CP पर सीधे (लाभ − हानि)/2 औसत निकालें!' },
      questionIds: ['ch3-pyq-25', 'ch3-pyq-26', 'ch3-pyq-27'],
    },
    {
      typeId: 'type-9-dishonest-dealer',
      typeNumber: 9,
      title: { en: 'Type 9: Dishonest Shopkeeper (False Weight & Weight + Profit Combo)', hi: 'Type 9: बेईमान दुकानदार (कम बाट निकालना व दोहरी धोखाधड़ी PYQs)' },
      conceptHint: { en: 'Always place actual Given Weight as CP on left and Claimed/(100+a) as SP on right!', hi: 'सदैव बाएं दिया गया वास्तविक वज़न (CP) और दाएं वसूला मूल्य (SP) रखें!' },
      questionIds: ['ch3-pyq-28', 'ch3-pyq-29', 'ch3-pyq-30'],
    },
    {
      typeId: 'type-10-both-shifted-cross-multi',
      typeNumber: 10,
      title: { en: 'Type 10: Conditional Shifts When Both CP & SP Change by Fixed ₹', hi: 'Type 10: जब CP व SP दोनों ₹ में बदलें (क्रॉस-गुणन विधि PYQs)' },
      conceptHint: { en: 'Apply clean cross-product on fractions (5:7 → 8:11) or x(p₁−p₂) gap formula!', hi: 'भिन्न रेश्यो (5:7 से 8:11) पर क्रॉस-गुणन या 1-पंक्ति अंतर सूत्र लगाएं!' },
      questionIds: ['ch3-pyq-31', 'ch3-pyq-32'],
    },
    {
      typeId: 'type-11-weighted-split-merchant-chain',
      typeNumber: 11,
      title: { en: 'Type 11: Split Lot Weighted Profit & Multi-Merchant Chain (A → B → C)', hi: 'Type 11: भागों में बिक्री (भारित औसत) व श्रृंखला लेन-देन (A → B → C)' },
      conceptHint: { en: 'Weight split parts directly; unwind chains backward dividing % THEN subtracting repair!', hi: 'लॉट भागों का भारित औसत निकालें; उल्टी चेन में पहले % हटाएं फिर मरम्मत घटाएं!' },
      questionIds: ['ch3-pyq-33', 'ch3-pyq-34', 'ch3-pyq-35'],
    },
  ],
  pyqBank: [
    // TYPE 1 (3 PYQs)
    {
      id: 'ch3-pyq-1',
      examTag: 'RRB ALP 2025 CBT-2 (Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'A trader buys 187 pens at ₹23 each. During transportation, 7 pens get damaged and cannot be sold. He sells the remaining pens at ₹27 each. Find his profit percentage (rounded off to one decimal place).',
        hi: 'एक व्यापारी ₹23 प्रति पेन की दर से 187 पेन खरीदता है। परिवहन के दौरान 7 पेन क्षतिग्रस्त हो जाते हैं और बेचे नहीं जा सकते। वह शेष पेन ₹27 प्रति पेन की दर से बेचता है। उसका लाभ प्रतिशत (दशमलव के एक स्थान तक) ज्ञात कीजिए।',
      },
      options: { en: ['13.7%', '14.1%', '13.0%', '12.6%'], hi: ['13.7%', '14.1%', '13.0%', '12.6%'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**13.0%**).',
        keyConcept: 'Pay CP on ALL 187 pens, earn SP ONLY on (187 − 7) = 180 sellable pens!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Total CP vs Sellable SP', hi: 'विधि 1: कुल CP बनाम विक्रय योग्य SP' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: 'Total CP $= 187 \\times 23 = 4301$. Sellable $= 187 - 7 = 180$ pens.\nTotal SP $= 180 \\times 27 = 4860$. Profit $= 4860 - 4301 = 559$.\n$\\text{Profit}\\% = \\frac{559}{4301} \\times 100 \\approx \\mathbf{13.0\\%}$.',
              hi: 'कुल CP $= 187 \\times 23 = 4301$। सही पेन $= 180$ ⇒ कुल SP $= 180 \\times 27 = 4860$।\nलाभ $= 559$ ⇒ $\\frac{559}{4301} \\times 100 \\approx \\mathbf{13.0\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Clean Factor Shortcut (43 × 13 = 559) (4 sec)', hi: 'विधि 2: 43 × 13 सन्निकटन ट्रिक (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Ratio SP/CP $= \\frac{180 \\times 27}{187 \\times 23}$. Numerator exceeds by `559`. Since `43 × 13 = 559`, `559 / 4301 ≈ 13 / 100` = **13.0%**!',
              hi: 'लाभ `559`, लागत `4301`। तुरंत देखें `43 × 13 = 559` बिलकुल पूरा कटता है ⇒ `559/4301` ≈ **13.0%**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-2',
      examTag: 'RRB ALP CBT-1 (Shift 3)',
      level: 'level1_basic',
      question: {
        en: 'A shopkeeper buys 57 dozen articles at ₹720 per dozen. He sells each article for ₹81. What is his profit percentage?',
        hi: 'एक दुकानदार ₹720 प्रति दर्जन की दर से 57 दर्जन वस्तुएं खरीदता है। वह प्रत्येक वस्तु को ₹81 में बेचता है। उसका लाभ प्रतिशत कितना है?',
      },
      options: { en: ['34%', '35%', '37%', '33%'], hi: ['34%', '35%', '37%', '33%'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**35%**).',
        keyConcept: 'Dummy Lot Count (`57 dozen`) Cancels Completely — Work on Single Item!',
        optionTrick: {
          en: 'Ignore `57`! Single item CP $= 720 \\div 12 = 60$, SP $= 81 \\implies$ Profit $= 21/60 = 7/20 = 35\\%$.',
          hi: '`57` का प्रयोग ही न करें! 1 वस्तु की लागत $= 720 \\div 12 = 60$, बिक्री `81` ⇒ लाभ $= 21/60 =$ **35%**!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Per-Article CP & SP', hi: 'विधि 1: प्रति वस्तु क्रय व विक्रय मूल्य' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'CP of `1` $= 720 / 12 = 60$. SP of `1` $= 81$.\n$\\%P = \\frac{81 - 60}{60} \\times 100 = \\frac{21}{60} \\times 100 = \\mathbf{35\\%}$.',
              hi: '1 वस्तु का CP $= 720 \\div 12 = 60$, SP $= 81$।\nलाभ\\% $= \\frac{21}{60} \\times 100 = \\mathbf{35\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Base 20 Conversion (2 sec)', hi: 'विधि 2: अनुपात 20 आधार ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Ratio CP : SP $= 60 : 81$. Divide both by `3` $\\implies 20 : 27 \\implies +7/20 = +35\\%$!',
              hi: 'CP : SP $= 60 : 81$। 3 से भाग दें ⇒ `20 : 27` (`+7` प्रति `20`) ⇒ `7 × 5` = **35%**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-3',
      examTag: 'RRB ALP 2025 CBT-1 (Shift 7)',
      level: 'level1_basic',
      question: {
        en: '100 bananas were bought at the rate of ₹1,200 per hundred and were sold at a profit of ₹1,100. Find the selling price (in ₹) per dozen bananas.',
        hi: '100 केले ₹1,200 प्रति सैकड़ा की दर से खरीदे गए और ₹1,100 के लाभ पर बेचे गए। प्रति दर्जन केले का विक्रय मूल्य (₹ में) ज्ञात कीजिए।',
      },
      options: { en: ['281', '276', '271', '286'], hi: ['281', '276', '271', '286'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**276**).',
        keyConcept: 'Total SP = 1200 + 1100 = ₹2,300 for 100 bananas ⇒ SP(12) = 23 × 12',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Per-Banana SP × 12', hi: 'विधि 1: 1 केले का SP × 12' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Total SP of `100` bananas $= 1200 + 1100 = 2300$.\nSP of `1` banana $= 23 \\implies$ SP of `12` bananas $= 23 \\times 12 =$ **₹276**.',
              hi: '100 केलों का कुल SP $= 1200 + 1100 = 2300$ ⇒ 1 केले का SP $= 23$।\n1 दर्जन (`12`) का SP $= 23 \\times 12 =$ **₹276**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Unit Digit Lock (3 × 2 = 6) (2 sec)', hi: 'विधि 2: इकाई अंक 3 × 2 = 6 ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'SP/banana $= 12 + 11 = 23$. Multiply by `12` (`23 × 12` ends in `6`!). Divisible by `3`: **276** (`281`, `271`, `286` end in `1,6` — `286` not div by `3`)!',
              hi: 'प्रति केला SP $= 12 + 11 = 23$। `23 × 12` में 3 व 4 दोनों का गुणज तथा इकाई अंक `6` ⇒ केवल **276**!',
            },
          },
        ],
      },
    },

    // TYPE 2 (3 PYQs)
    {
      id: 'ch3-pyq-4',
      examTag: 'RRB Tech Gr-III 2024 (Shift 15)',
      level: 'level1_basic',
      question: {
        en: 'A blanket is sold for ₹1,148, which results in a loss of 30%. For how much should it be sold to gain 5%?',
        hi: 'एक कंबल ₹1,148 में बेचा जाता है, जिसके परिणामस्वरूप 30% की हानि होती है। 5% लाभ अर्जित करने के लिए इसे कितने में बेचा जाना चाहिए?',
      },
      options: { en: ['₹1,722', '₹1,734', '₹1,423', '₹1,543'], hi: ['₹1,722', '₹1,734', '₹1,423', '₹1,543'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**₹1,722**).',
        keyConcept: 'Scale Ratio 70% → 105% = Exact 2 : 3 (`×1.5`)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Find CP First', hi: 'विधि 1: पहले CP निकालें' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$70\\% = 1148 \\implies CP = 1148 \\times \\frac{100}{70} = 1640$.\n$105\\% \\text{ of } 1640 = 1640 + 82 =$ **₹1,722**.',
              hi: '$70\\% = 1148 \\implies CP = 1640$। अब `1640` का $105\\% = 1640 + 82 =$ **₹1,722**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct ×1.5 Scale (70% → 105%) (2 sec)', hi: 'विधि 2: सीधा 1.5 गुना शॉर्टकट (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '$\\frac{105\\%}{70\\%} = \\frac{3}{2} = 1.5$! Multiply directly: $1148 \\times 1.5 = 1148 + 574 =$ **₹1,722**!',
              hi: '$\\frac{105}{70} = 1.5$ गुना! बस जोड़ दें: $1148 + (1148 \\text{ का आधा } 574) =$ **₹1,722**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-5',
      examTag: 'RRB Tech Gr-III 2024 (Shift 4)',
      level: 'level1_basic',
      question: {
        en: 'When the selling price of a TV is ₹18,700, the shopkeeper incurs a loss of 15%. What should be the selling price of that TV so as to gain 15%?',
        hi: 'जब एक टीवी का विक्रय मूल्य ₹18,700 है, तो दुकानदार को 15% की हानि होती है। 15% का लाभ अर्जित करने के लिए उस टीवी का विक्रय मूल्य कितना होना चाहिए?',
      },
      options: { en: ['₹43,200', '₹34,200', '₹19,800', '₹25,300'], hi: ['₹43,200', '₹34,200', '₹19,800', '₹25,300'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹25,300**).',
        keyConcept: 'Direct Ratio `85% → 115%` = `17 : 23` (`18,700 ÷ 17 = 1,100`!)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Find 100% CP First', hi: 'विधि 1: पहले क्रय मूल्य निकालें' },
            timeTag: '14 sec',
            tone: 'teal',
            steps: {
              en: '$85\\% = 18700 \\implies CP = 22000$. New SP $= 22000 \\times 1.15 =$ **₹25,300**.',
              hi: '$85\\% = 18,700 \\implies 1\\% = 220 \\implies CP = 22,000$। नया SP $= 22,000 \\times 1.15 =$ **₹25,300**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Divisibility by 23 & Ratio 17:23 (3 sec)', hi: 'विधि 2: अनुपात 17:23 व 23 की विभाज्यता (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$SP_{\\text{new}} = 18700 \\times \\frac{115}{85} = 1100 \\times 23 =$ **₹25,300**! (Bonus check: `253` = `11 × 23`!).',
              hi: '$18,700 \\times \\frac{23}{17} = 1100 \\times 23 =$ **₹25,300**! (विकल्पों में केवल `25,300` ही `11` और `23` का गुणज है!)।',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-6',
      examTag: 'RRB Tech Gr-III 2024 (Shift 10)',
      level: 'level2_mod',
      question: {
        en: 'If the selling price of an almirah is doubled, then the profit is tripled. Find the initial profit percentage.',
        hi: 'यदि एक अलमारी के विक्रय मूल्य को दुगुना कर दिया जाए, तो लाभ तिगुना हो जाता है। प्रारंभिक लाभ प्रतिशत ज्ञात कीजिए।',
      },
      options: { en: ['10%', '50%', '25%', '100%'], hi: ['10%', '50%', '25%', '100%'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**100%**).',
        keyConcept: 'New SP − Old SP = Old SP adds `(3P − P) = 2P` profit!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Direct Profit Equation', hi: 'विधि 1: समीकरण विधि' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$2\\,\\text{SP} - \\text{CP} = 3(\\text{SP} - \\text{CP}) \\implies 2\\,\\text{SP} - \\text{CP} = 3\\,\\text{SP} - 3\\,\\text{CP} \\implies \\text{SP} = 2\\,\\text{CP}$.\nInitial Profit $= 100\\%$!',
              hi: '$2\\,\\text{SP} - \\text{CP} = 3(\\text{SP} - \\text{CP}) \\implies \\text{SP} = 2\\,\\text{CP}$ ⇒ प्रारंभिक लाभ $= \\mathbf{100\\%}$!',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Gap Thinking SP = 2P (3 sec)', hi: 'विधि 2: मौखिक अंतर नियम SP = 2P (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Adding `1 × SP` raises Profit by `2P` ⇒ `SP = 2P` ⇒ `CP = SP − P = P`! Thus `Profit = CP` ⇒ **100%**!',
              hi: 'SP दुगुना करने पर बढ़ा हुआ मूल्य (`+SP`) लाभ को `2P` बढ़ा देता है ⇒ `SP = 2P`, अतः `CP = 2P − P = P` ⇒ **100%**!',
            },
          },
        ],
      },
    },

    // TYPE 3 (4 PYQs)
    {
      id: 'ch3-pyq-7',
      examTag: 'RRB ALP 2025 CBT-2 (Shift 2)',
      level: 'level2_mod',
      question: {
        en: 'The first shopkeeper allows two successive discounts of 3% and 7%, while a second shopkeeper allows two successive discounts of 2% and 8%. A third shopkeeper allows 10% discount on the same item. From which shopkeeper should a customer buy if the marked price is the same at the three shops?',
        hi: 'पहला दुकानदार 3% और 7% की दो क्रमिक छूट देता है, जबकि दूसरा दुकानदार 2% और 8% की दो क्रमिक छूट देता है। तीसरा दुकानदार उसी वस्तु पर 10% की छूट देता है। यदि तीनों दुकानों पर अंकित मूल्य समान है, तो ग्राहक को किस दुकानदार से वस्तु खरीदनी चाहिए?',
      },
      options: {
        en: [
          'Buy from the first shopkeeper',
          'Buy from the first or the second shopkeeper as both are the same.',
          'Buy from the second shopkeeper',
          'Buy from the third shopkeeper',
        ],
        hi: [
          'पहले दुकानदार से खरीदें',
          'पहले या दूसरे दुकानदार से खरीदें क्योंकि दोनों समान हैं।',
          'दूसरे दुकानदार से खरीदें',
          'तीसरे दुकानदार से खरीदें',
        ],
      },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**Buy from the third shopkeeper**).',
        keyConcept: 'When (d₁ + d₂) Sums Are Equal (10%), Zero/Smallest (d₁ × d₂) Product Gives MAX Discount!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Net Discount Formula', hi: 'विधि 1: समतुल्य छूट सूत्र' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '1st: $3 + 7 - 0.21 = 9.79\\%$.\n2nd: $2 + 8 - 0.16 = 9.84\\%$.\n3rd: Flat `10.00%` ⇒ Highest savings at **3rd shopkeeper**!',
              hi: 'पहला: $9.79\\%$; दूसरा: $9.84\\%$; तीसरा: सीधा `10.00%` ⇒ **तीसरे दुकानदार** पर सर्वाधिक छूट!',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Zero Calculation Product Rule (2 sec)', hi: 'विधि 2: बिना पेन गुणनफल नियम (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'All sums equal `10%` (`3+7`, `2+8`, `0+10`). Since Net $= \\text{Sum} - \\frac{d_1 d_2}{100}$, ZERO subtraction (`10%` flat) ALWAYS wins!',
              hi: 'तीनों का योग `10%` समान है; अतः घटाई जाने वाली राशि (`d₁d₂/100`) जहाँ शून्य हो यानी सीधी `10%` छूट सदैव अधिकतम होगी!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-8',
      examTag: 'RRB Tech Gr-III 2024 (Shift 16)',
      level: 'level1_basic',
      question: {
        en: 'Two successive discounts of 12% and 15% on any number of toys bought are equivalent to a single discount of:',
        hi: 'खरीदे गए खिलौनों की किसी भी संख्या पर 12% और 15% की दो क्रमिक छूट किस एकल छूट के बराबर है?',
      },
      options: { en: ['25.2%', '26%', '26.2%', '27%'], hi: ['25.2%', '26%', '26.2%', '27%'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**25.2%**).',
        keyConcept: 'd₁ + d₂ − (d₁d₂ / 100) = 27 − 1.8 = 25.2%',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base 100 Reduction', hi: 'विधि 1: आधार 100 मानकर हल' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$100 \\xrightarrow{-12\\%} 88 \\xrightarrow{-15\\%\\,(-13.2)} 74.8 \\implies$ Net Discount $= 100 - 74.8 = \\mathbf{25.2\\%}$.',
              hi: '$100 \\xrightarrow{-12\\%} 88 \\xrightarrow{-15\\%\\,(-13.2)} 74.8 \\implies$ कुल छूट $= 100 - 74.8 = \\mathbf{25.2\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Formula (27 − 1.8) (2 sec)', hi: 'विधि 2: मौखिक सूत्र (27 − 1.8) (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '$12 + 15 - \\frac{12 \\times 15}{100} = 27 - 1.80 = \\mathbf{25.2\\%}$!',
              hi: '$12 + 15 - \\frac{180}{100} = 27 - 1.8 = \\mathbf{25.2\\%}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-9',
      examTag: 'RRB Tech Gr-III 2024 (Shift 15)',
      level: 'level1_basic',
      question: {
        en: 'The sale bill of an article after two successive discounts of 20% each is ₹16,000. The MRP of the article is:',
        hi: 'प्रत्येक 20% की दो क्रमिक छूटों के बाद एक वस्तु का विक्रय बिल ₹16,000 होता है। वस्तु का अधिकतम खुदरा मूल्य (MRP) ज्ञात कीजिए।',
      },
      options: { en: ['₹24,000', '₹24,560', '₹25,220', '₹25,000'], hi: ['₹24,000', '₹24,560', '₹25,220', '₹25,000'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹25,000**).',
        keyConcept: '20% = 4/5 twice ⇒ (4/5)² = 16/25 paid ⇒ Flip 25/16!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Reverse 0.8 × 0.8', hi: 'विधि 1: क्रमिक समीकरण विधि' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$\\text{MRP} \\times \\frac{80}{100} \\times \\frac{80}{100} = 16000 \\implies \\text{MRP} \\times 0.64 = 16000 \\implies$ **₹25,000**.',
              hi: '$\\text{MRP} \\times 0.64 = 16,000 \\implies \\text{MRP} = 16000 \\div 0.64 =$ **₹25,000**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Square Ratio 16 : 25 (2 sec)', hi: 'विधि 2: वर्ग रेश्यो 16 : 25 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`-20%` = `5 → 4` twice ⇒ `25 → 16`. Since `16 units = ₹16,000`, `25 units =` **₹25,000** orally!',
              hi: '`5→4` दो बार ⇒ `25 → 16`। यहाँ `16 = ₹16,000`, अतः `25 =` **₹25,000** (बिना पेन!)।',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-10',
      examTag: 'RRB Tech Gr-III 2024 (Shift 23)',
      level: 'level2_mod',
      question: {
        en: 'After getting two successive discounts, a shirt with a list price of ₹150 is available at ₹105. If the second discount is 12.5%, then find the first discount.',
        hi: 'दो क्रमिक छूट मिलने के बाद ₹150 अंकित मूल्य वाली एक शर्ट ₹105 पर उपलब्ध है। यदि दूसरी छूट 12.5% है, तो पहली छूट ज्ञात कीजिए।',
      },
      options: { en: ['25%', '12%', '20%', '15%'], hi: ['25%', '12%', '20%', '15%'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**20%**).',
        keyConcept: 'Convert 12.5% Discount = Paying Fraction 7/8!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Reverse 12.5% Step', hi: 'विधि 1: पीछे से दूसरी छूट हटाएं' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Price before 2nd discount (`7/8` of it = `105`) $= 105 \\times \\frac{8}{7} = 120$.\n1st discount on `150` $= \\frac{150 - 120}{150} \\times 100 = \\frac{30}{150} \\times 100 = \\mathbf{20\\%}$.',
              hi: 'दूसरी छूट (`7/8`) से पहले मूल्य $= 105 \\times \\frac{8}{7} = 120$।\nअब `150` से `120` पर पहली छूट $= \\frac{30}{150} \\times 100 = \\mathbf{20\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Parallel Ratio Division (4 sec)', hi: 'विधि 2: अनुपात भाग विधि (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Total Ratio `150 : 105 = 10 : 7`. Remove `12.5%` (`8 : 7`) by dividing columns: `(10÷8) : (7÷7) = 5 : 4` ⇒ **20%**!',
              hi: 'कुल अनुपात `150 : 105 = 10 : 7`। दूसरी छूट (`8 : 7`) से भाग दें ⇒ `10/8 : 7/7 = 5 : 4` ⇒ `-1/5 =` **20%**!',
            },
          },
        ],
      },
    },

    // TYPE 4 (4 PYQs)
    {
      id: 'ch3-pyq-11',
      examTag: 'RRB ALP 2025 CBT-1 (Shift 1)',
      level: 'level1_basic',
      question: {
        en: 'A shopkeeper fixes the marked price of an item 20% above its cost price. What percentage of discount should he offer to gain 2%?',
        hi: 'एक दुकानदार किसी वस्तु का अंकित मूल्य उसके क्रय मूल्य से 20% अधिक निर्धारित करता है। 2% लाभ अर्जित करने के लिए उसे कितने प्रतिशत की छूट देनी होगी?',
      },
      options: { en: ['15%', '18%', '17%', '12%'], hi: ['15%', '18%', '17%', '12%'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**15%**).',
        keyConcept: 'MP = 120, SP = 102 ⇒ Discount ALWAYS on MP (120)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base CP = 100', hi: 'विधि 1: CP = 100 मानकर हल' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: 'Let $CP = 100 \\implies MP = 120, SP = 102$.\n$D\\% = \\frac{120 - 102}{120} \\times 100 = \\frac{18}{120} \\times 100 = \\mathbf{15\\%}$.',
              hi: 'माना $CP = 100 \\implies MP = 120, SP = 102$।\nछूट\\% $= \\frac{18}{120} \\times 100 = \\mathbf{15\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral 3/20 Recognition (2 sec)', hi: 'विधि 2: भिन्न 3/20 पहचान (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Gap `20 − 2 = 18` over `MP = 120` ⇒ $\\frac{18}{120} = \\frac{3}{20} =$ **15%**!',
              hi: '`20 − 2 = 18` की छूट `120` पर ⇒ `18/120 = 3/20` = **15%**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-12',
      examTag: 'RRB Tech Gr-III 2024 (Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'What price should a shopkeeper mark on an article, which costs him ₹153, to gain 20% after allowing a discount of 15%?',
        hi: '15% की छूट देने के बाद 20% का लाभ अर्जित करने के लिए, एक दुकानदार को किसी वस्तु पर कितना मूल्य अंकित करना चाहिए, जिसका क्रय मूल्य उसके लिए ₹153 है?',
      },
      options: { en: ['₹224', '₹184', '₹162', '₹216'], hi: ['₹224', '₹184', '₹162', '₹216'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹216**).',
        keyConcept: 'Magic Ratio CP : MP = (100 − D) : (100 + P) = 85 : 120 = 17 : 24!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: SP Bridge via 100', hi: 'विधि 1: विक्रय मूल्य सेतु विधि' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Desired SP $= 153 \\times 1.2 = 183.6$.\nSince `85% of MP = 183.6`, $\\text{MP} = \\frac{183.6 \\times 100}{85} =$ **₹216**.',
              hi: 'वांछित SP $= 153 \\times 1.2 = 183.6$। अब $MP \\times 0.85 = 183.6 \\implies MP =$ **₹216**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Magic Ratio (100 − D) : (100 + P) (3 sec)', hi: 'विधि 2: मैजिक अनुपात (100−D):(100+P) (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$\\text{CP} : \\text{MP} = (100 - 15) : (100 + 20) = 85 : 120 = 17 : 24$.\nHere `17 units = 153` (`×9`) ⇒ $\\text{MP} = 24 \\times 9 =$ **₹216**!',
              hi: 'सीधा सूत्र: $CP : MP = 85 : 120 = 17 : 24$। यहाँ `17 = 153 (×9)` ⇒ `MP = 24 × 9` = **₹216**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-13',
      examTag: 'RRB ALP 2025 CBT-2 (Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'A trader marks an article 25% above its cost price. He allows a discount of 10% on the marked price. After giving the discount, he makes a profit of ₹180 on the article. What is the cost price of the article?',
        hi: 'एक व्यापारी किसी वस्तु का मूल्य उसके क्रय मूल्य से 25% अधिक अंकित करता है। वह अंकित मूल्य पर 10% की छूट प्रदान करता है। छूट देने के बाद, उसे उस वस्तु पर ₹180 का लाभ प्राप्त होता है। वस्तु का क्रय मूल्य कितना था?',
      },
      options: { en: ['₹1,260', '₹1,200', '₹1,380', '₹1,440'], hi: ['₹1,260', '₹1,200', '₹1,380', '₹1,440'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹1,440**).',
        keyConcept: 'Net Profit % = +25 − 10 − (250/100) = +12.5% = 1/8 of CP!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Net Percentage via CP = 100', hi: 'विधि 1: CP = 100 से कुल लाभ %' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$CP = 100 \\implies MP = 125 \\xrightarrow{-10\\%\\,(-12.5)} SP = 112.5$.\nProfit `12.5% = 180` $\\implies 100\\% = 180 \\times 8 =$ **₹1,440**.',
              hi: '$CP = 100 \\implies MP = 125 \\xrightarrow{-10\\%} SP = 112.5$। लाभ `12.5%` (`1/8`) `= 180` ⇒ $CP = 180 \\times 8 =$ **₹1,440**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral 1/8 = ₹180 Multiplier (2 sec)', hi: 'विधि 2: सीधा 1/8 = ₹180 गुणन (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Successive `+25%` & `-10%` $= +12.5\\% = \\frac{1}{8}$. Therefore `CP = 8 × Profit = 8 × 180` = **₹1,440**!',
              hi: '`+25%` व `-10%` = `+12.5% = 1/8`। अतः `CP = 8 × 180` = **₹1,440**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-14',
      examTag: 'RRB ALP 2025 CBT-2 (Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'A shopkeeper marks a product 75% above cost price and offers two successive discounts of 30% and 40%. What is the profit or loss percentage?',
        hi: 'एक दुकानदार किसी उत्पाद पर क्रय मूल्य से 75% अधिक मूल्य अंकित करता है तथा 30% और 40% की दो क्रमिक छूट प्रदान करता है। लाभ या हानि प्रतिशत ज्ञात कीजिए।',
      },
      options: { en: ['15.7% profit', '20.9% profit', '26.5% loss', '22.6% profit'], hi: ['15.7% लाभ', '20.9% लाभ', '26.5% हानि', '22.6% लाभ'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**26.5% loss**).',
        keyConcept: 'Multiply Ratios: (7/4) × (7/10) × (3/5) = 147 / 200 ⇒ −53/200 = −26.5%',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Base 100 Chain', hi: 'विधि 1: CP = 100 श्रृंखला' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$CP = 100 \\implies MP = 175$.\n$SP = 175 \\times 0.70 \\times 0.60 = 175 \\times 0.42 = 73.5$.\nLoss $= 100 - 73.5 = \\mathbf{26.5\\%\\text{ loss}}$.',
              hi: '$CP = 100 \\implies MP = 175$।\n$SP = 175 \\times 0.7 \\times 0.6 = 73.5 \\implies$ हानि $= \\mathbf{26.5\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Fraction Chain 7/4 × 7/10 × 3/5 (4 sec)', hi: 'विधि 2: भिन्न चेन 147/200 (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '$\\frac{7}{4} \\times \\frac{7}{10} \\times \\frac{3}{5} = \\frac{147}{200} = \\frac{73.5}{100} \\implies$ **26.5% loss**!',
              hi: '$\\frac{7}{4} \\times \\frac{7}{10} \\times \\frac{3}{5} = \\frac{147}{200} = 73.5\\% \\implies$ **26.5% हानि**!',
            },
          },
        ],
      },
    },

    // TYPE 5 (3 PYQs)
    {
      id: 'ch3-pyq-15',
      examTag: 'RRB NTPC UG 2025 (Shift 11)',
      level: 'level1_basic',
      question: {
        en: 'A shopkeeper offers the following three schemes. Which scheme has the maximum discount percent? I. Two successive discounts of 15% and 20%. II. Buy 4 get 2 free. III. Buy 6 get 4 free.',
        hi: 'एक दुकानदार निम्नलिखित तीन योजनाएँ प्रदान करता है। किस योजना में अधिकतम छूट प्रतिशत है? I. 15% और 20% की दो क्रमिक छूट। II. 4 खरीदें 2 मुफ़्त पाएँ। III. 6 खरीदें 4 मुफ़्त पाएँ।',
      },
      options: { en: ['III only', 'II only', 'I only', 'Both I and II'], hi: ['केवल III', 'केवल II', 'केवल I', 'I और II दोनों'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**III only**).',
        keyConcept: 'Buy X Get Y Free = Y / (X + Y) × 100%',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Compare All 3 Discounts', hi: 'विधि 1: तीनों स्कीम्स की छूट % निकालें' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'I: $15 + 20 - \\frac{300}{100} = 32\\%$.\nII: $\\frac{2}{4+2} = 33.33\\%$.\nIII: $\\frac{4}{6+4} = \\mathbf{40\\%}$ (Maximum!).',
              hi: 'I: `32%` | II: `2/6 = 33.33%` | III: `4/10 =` **40%** (सर्वाधिक!)।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Visual Fraction Inspection (2 sec)', hi: 'विधि 2: भिन्न तुलना ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Note `4/10 = 40%` beats both `1/3 (33.3%)` and `15+20 (<35%)` in 2 seconds ⇒ **III only**!',
              hi: 'सीधे दिख रहा है कि `4/10 = 40%` दोनों (`33.3%` व `<35%`) से बड़ा है ⇒ **केवल III**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-16',
      examTag: 'RRB NTPC UG 2025 (Shift 12)',
      level: 'level3_hard',
      question: {
        en: 'A book seller gives a 4% discount on the marked price and gives one book free during vacation for buying every pack of 15 books of the same cost, and thus gains 35%. By what percentage is the marked price higher than the cost price?',
        hi: 'एक पुस्तक विक्रेता अंकित मूल्य पर 4% की छूट देता है और छुट्टियों के दौरान समान क्रय मूल्य की 15 पुस्तकों के प्रत्येक पैक को खरीदने पर एक पुस्तक मुफ्त देता है, और इस प्रकार 35% का लाभ अर्जित करता है। अंकित मूल्य, क्रय मूल्य से कितने प्रतिशत अधिक है?',
      },
      options: { en: ['25%', '35%', '40%', '50%'], hi: ['25%', '35%', '40%', '50%'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**50%**).',
        keyConcept: 'Free book adds quantity factor `16/15` onto `MP / CP = (100+P)/(100−D)`!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 16 Books CP = 100/book', hi: 'विधि 1: 16 पुस्तकों की कुल लागत मानें' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: 'Let CP of `1` book $= 100$. Seller parts with `16` books (`CP = 1600`) for `35%` profit ⇒ Collects $1600 \\times 1.35 = 2160$ from `15` billed books (`SP/book = 144`).\nAt 4% discount: $0.96 \\times \\text{MP} = 144 \\implies \\text{MP} = 150 \\implies$ **50%** higher!',
              hi: '1 पुस्तक `CP = 100` ⇒ `16` का कुल CP $= 1600$। 35% लाभ पर कुल SP $= 2160$ (`15` पर `₹144/पुस्तक`)।\n`96% of MP = 144 ⇒ MP = 150` ⇒ **50% अधिक**!',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Combined Magic Ratio Bridge (4 sec)', hi: 'विधि 2: मैजिक अनुपात + वस्तु कारक (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '$\\frac{\\text{MP}}{\\text{CP}} = \\frac{100 + 35}{100 - 4} \\times \\frac{16}{15} = \\frac{135}{96} \\times \\frac{16}{15} = \\frac{9}{6} = \\frac{3}{2} \\implies +\\frac{1}{2} =$ **50%**!',
              hi: '$\\frac{\\text{MP}}{\\text{CP}} = \\frac{135}{96} \\times \\frac{16}{15} = \\frac{9}{6} = \\frac{3}{2} \\implies$ **50% अधिक** (`135÷15 = 9`, `96÷16 = 6`)!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-17',
      examTag: 'RRB Group D 2025 (Shift 37)',
      level: 'level3_hard',
      question: {
        en: 'A wholesaler marked school uniforms at ₹1,200 each. He offered a 25% trade discount to a retailer. The retailer also received a scheme discount of 1 uniform free for every 5 purchased. Additionally, if payment was made within 10 days, a cash discount of 8% on the billed amount (after trade discount) was offered. If the retailer received 72 uniforms in total and paid within 10 days, find the effective price per uniform (in ₹).',
        hi: 'एक थोक विक्रेता स्कूल यूनिफॉर्म का अंकित मूल्य ₹1,200 प्रति यूनिफॉर्म रखता है। वह खुदरा विक्रेता को 25% की व्यापारिक छूट देता है। प्रत्येक 5 यूनिफॉर्म खरीदने पर 1 यूनिफॉर्म मुफ्त की स्कीम छूट भी मिलती है। यदि भुगतान 10 दिनों में किया जाए, तो बिल राशि पर 8% की नकद छूट दी जाती है। यदि खुदरा विक्रेता को कुल 72 यूनिफॉर्म मिलीं और उसने समय पर भुगतान किया, तो प्रति यूनिफॉर्म प्रभावी मूल्य (₹ में) ज्ञात कीजिए।',
      },
      options: { en: ['₹668', '₹700', '₹672', '₹690'], hi: ['₹668', '₹700', '₹672', '₹690'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹690**).',
        keyConcept: '`72` total uniforms (`12 × 6`) contains ONLY `60` billed uniforms!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Total 72-Uniform Bill Calculation', hi: 'विधि 1: कुल 72 यूनिफॉर्म का बिल निकालें' },
            timeTag: '22 sec',
            tone: 'teal',
            steps: {
              en: 'Pack of `5 paid + 1 free = 6`. In `72`, paid units $= 72 \\times \\frac{5}{6} = 60$.\nAfter 25% trade off, each costs `900`. Total $= 60 \\times 900 \\times 0.92 = 49,680$.\nPer uniform $= 49,680 \\div 72 =$ **₹690**.',
              hi: '`6` में से `5` का भुगतान ⇒ `72` में `60` का बिल। 25% छूट से `₹900/नग`। नकद 8% छूट के बाद `60×900×0.92 = ₹49,680`।\nप्रति यूनिफॉर्म $= 49680 \\div 72 =$ **₹690**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Skip 72! Single Multiplier Chain (5 sec)', hi: 'विधि 2: 72 को भूलकर सीधे प्रति-नग चेन (5 sec)' },
            timeTag: '5 sec',
            tone: 'emerald',
            steps: {
              en: 'Per-uniform price $= 1200 \\times \\frac{3}{4} \\times \\frac{5}{6} \\times \\frac{92}{100} = 150 \\times 5 \\times 0.92 = 750 \\times 0.92 =$ **₹690** (`72` is unnecessary noise!).',
              hi: 'एक पंक्ति गुणन (`72` केवल ध्यान भटकाने को है!): $1200 \\times \\frac{3}{4} \\times \\frac{5}{6} \\times 0.92 = 750 \\times 0.92 =$ **₹690**!',
            },
          },
        ],
      },
    },

    // TYPE 6 (4 PYQs)
    {
      id: 'ch3-pyq-18',
      examTag: 'RRB ALP 2025 CBT-1 (Shift 10)',
      level: 'level1_basic',
      question: {
        en: 'The cost price of 28 mangoes is the same as the selling price of 25 mangoes. Find the profit percentage.',
        hi: '28 आमों का क्रय मूल्य 25 आमों के विक्रय मूल्य के बराबर है। लाभ प्रतिशत ज्ञात कीजिए।',
      },
      options: { en: ['10%', '11.6%', '10.9%', '12%'], hi: ['10%', '11.6%', '10.9%', '12%'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**12%**).',
        keyConcept: '28 × CP = 25 × SP ⇒ Invert immediately CP : SP = 25 : 28!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Ratio Swap (m CP = n SP)', hi: 'विधि 1: अनुपात पलटना (CP : SP = n : m)' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '$28\\,\\text{CP} = 25\\,\\text{SP} \\implies \\frac{\\text{CP}}{\\text{SP}} = \\frac{25}{28}$.\nGain $= \\frac{28 - 25}{25} \\times 100 = \\frac{3}{25} \\times 100 = \\mathbf{12\\%}$.',
              hi: '$28\\,\\text{CP} = 25\\,\\text{SP} \\implies CP : SP = 25 : 28$।\nलाभ\\% $= \\frac{3}{25} \\times 100 = \\mathbf{12\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Save 3 on 25 Orally (2 sec)', hi: 'विधि 2: 25 पर 3 आम की बचत (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Sold only `25` to recover cost of `28` ⇒ `3 mangoes` saved per `25` sold $= \\frac{3}{25} =$ **12%**!',
              hi: '`25` आम बेचकर `28` की लागत निकल गई ⇒ `25` पर `3` की बचत $= 3 \\times 4 =$ **12%**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-19',
      examTag: 'RRB NTPC UG 2025 (Shift 27)',
      level: 'level1_basic',
      question: {
        en: 'The selling price of 40 books is equal to the cost price of 28 books. Find the loss or gain percentage.',
        hi: '40 पुस्तकों का विक्रय मूल्य, 28 पुस्तकों के क्रय मूल्य के बराबर है। हानि या लाभ प्रतिशत ज्ञात कीजिए।',
      },
      options: {
        en: ['$\\frac{100}{12}\\%$ loss', '30% loss', '$\\frac{100}{12}\\%$ gain', '30% gain'],
        hi: ['$\\frac{100}{12}\\%$ हानि', '30% हानि', '$\\frac{100}{12}\\%$ लाभ', '30% लाभ'],
      },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**30% loss**).',
        keyConcept: 'ALWAYS divide by Sold Quantity (`40`), NEVER by `12` (`40 − 28`)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: CP : SP Ratio Inversion', hi: 'विधि 1: अनुपात विधि (CP : SP)' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '$40\\,\\text{SP} = 28\\,\\text{CP} \\implies \\frac{\\text{CP}}{\\text{SP}} = \\frac{40}{28}$.\nSince `SP < CP`, Loss $= \\frac{40 - 28}{40} \\times 100 = \\frac{12}{40} \\times 100 = \\mathbf{30\\%\\text{ loss}}$.',
              hi: '$40\\,\\text{SP} = 28\\,\\text{CP} \\implies CP : SP = 40 : 28$।\nहानि\\% $= \\frac{12}{40} \\times 100 = \\mathbf{30\\%\\text{ हानि}}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral 12 / 40 = 3/10 (2 sec)', hi: 'विधि 2: मौखिक 12/40 = 3/10 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Gave out `40`, only got back cost of `28` ⇒ Loss of `12` on `40` sold $= \\frac{3}{10} =$ **30% loss**!',
              hi: '`40` पुस्तकें देकर केवल `28` के दाम मिले ⇒ `40` पर `12` की हानि $= 3/10 =$ **30% हानि**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-20',
      examTag: 'RRB Tech Gr-III 2024 (Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'If a man bought 6 pencils for ₹5, and sold them at 5 pencils for ₹6, then the gain percentage is ______.',
        hi: 'यदि एक व्यक्ति ₹5 में 6 पेंसिलें खरीदता है, और ₹6 में 5 पेंसिलें बेचता है, तो लाभ प्रतिशत ______ है।',
      },
      options: { en: ['41%', '42%', '43%', '44%'], hi: ['41%', '42%', '43%', '44%'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**44%**).',
        keyConcept: 'Cross Qty–₹ Grid OR Equalize Items via LCM(6, 5) = 30 Pencils!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: LCM Quantity Balancing (30 pencils)', hi: 'विधि 1: वस्तु संख्या बराबर करें (LCM = 30)' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Buy `30` pencils (`×5`): Cost $= 5 \\times 5 =$ ₹25.\nSell `30` pencils (`×6`): Revenue $= 6 \\times 6 =$ ₹36.\nGain $= \\frac{36 - 25}{25} \\times 100 = \\frac{11}{25} \\times 100 = \\mathbf{44\\%}$.',
              hi: '`30` खरीदें: `5 × 5 = ₹25`। `30` बेचें: `6 × 6 = ₹36`।\nलाभ $= \\frac{11}{25} \\times 100 = \\mathbf{44\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cross-Multiplication Square (2 sec)', hi: 'विधि 2: तिरछा वर्ग शॉर्टकट (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'CP $= 5^2 = 25$, SP $= 6^2 = 36 \\implies +\\frac{11}{25} = 11 \\times 4 =$ **44%** instantly!',
              hi: 'सीधा तिरछा वर्ग: $CP = 5^2 = 25$, $SP = 6^2 = 36$ ⇒ `11 / 25` = **44%**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-21',
      examTag: 'RRB Tech Gr-III 2024 (Shift 14)',
      level: 'level2_mod',
      question: {
        en: 'By selling 8 oranges for ₹40, a man loses 20%. How many should he sell for ₹30 to gain 20% in the transaction?',
        hi: '₹40 में 8 संतरे बेचने पर एक व्यक्ति को 20% की हानि होती है। लेन-देन में 20% लाभ अर्जित करने के लिए उसे ₹30 में कितने संतरे बेचने चाहिए?',
      },
      options: { en: ['3', '4', '2', '5'], hi: ['3', '4', '2', '5'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**4**).',
        keyConcept: 'Master Equation: (Rupees₁ / Qty₁ × Rate₁) = (Rupees₂ / Qty₂ × Rate₂)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Per-Orange Price Scaling', hi: 'विधि 1: 1 संतरे की दर से हल' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Old SP of `1` $= 40 / 8 =$ ₹5 (`80%`).\nFor `120%` gain: New SP of `1` $= 5 \\times \\frac{120}{80} =$ ₹7.5.\nFor ₹30: Qty $= 30 \\div 7.5 =$ **4**.',
              hi: '1 का पुराना SP = `₹5` (`80%`)। नया SP (`120%`) $= 5 \\times \\frac{3}{2} =$ ₹7.5।\n₹30 में संतरे $= 30 \\div 7.5 =$ **4**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: MDH-Style Rate Chain (4 sec)', hi: 'विधि 2: 1-पंक्ति समानुपात चेन (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '$\\frac{\\text{Rs}_1}{N_1 \\times \\text{Rate}_1} = \\frac{\\text{Rs}_2}{N_2 \\times \\text{Rate}_2} \\implies \\frac{40}{8 \\times 80} = \\frac{30}{N_2 \\times 120} \\implies \\frac{1}{16} = \\frac{1}{4\\,N_2} \\implies N_2 =$ **4**!',
              hi: '$\\frac{40}{8 \\times 80} = \\frac{30}{N_2 \\times 120} \\implies \\frac{1}{16} = \\frac{1}{4 N_2} \\implies N_2 =$ **4**!',
            },
          },
        ],
      },
    },

    // TYPE 7 (3 PYQs)
    {
      id: 'ch3-pyq-22',
      examTag: 'RRB Group D 2025 (Shift 35)',
      level: 'level2_mod',
      question: {
        en: 'By selling 24 articles, a shopkeeper gains the selling price of 12 articles. What is his gain percentage?',
        hi: 'एक दुकानदार 24 वस्तुएं बेचकर 12 वस्तुओं के विक्रय मूल्य के बराबर लाभ अर्जित करता है। उसका लाभ प्रतिशत ज्ञात कीजिए।',
      },
      options: { en: ['100%', '150%', '50%', '200%'], hi: ['100%', '150%', '50%', '200%'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**100%**).',
        keyConcept: 'When Profit = SP of `k`, then CP = (n − k), NEVER n!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Assume SP of 1 Item = ₹1', hi: 'विधि 1: 1 वस्तु का SP = ₹1 मानें' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'Total SP $= 24$, Gain $= 12 \\implies CP = SP - \\text{Gain} = 24 - 12 = 12$.\n$\\%\\text{Gain} = \\frac{12}{12} \\times 100 = \\mathbf{100\\%}$.',
              hi: 'कुल SP $= 24$, लाभ $= 12 \\implies CP = 24 - 12 = 12$।\nलाभ\\% $= \\frac{12}{12} \\times 100 = \\mathbf{100\\%}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Formula k / (n − k) (2 sec)', hi: 'विधि 2: सीधा सूत्र k / (n − k) (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Gain $= \\frac{12}{24 - 12} \\times 100 = \\frac{12}{12} \\times 100 =$ **100%** (`50%` is the trap option!).',
              hi: 'सीधा सूत्र: $\\frac{12}{24 - 12} \\times 100 =$ **100%** (`50%` केवल जाल विकल्प है!)।',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-23',
      examTag: 'RRB NTPC UG 2025 (Shift 13)',
      level: 'level1_basic',
      question: {
        en: 'By selling 6 articles for a rupee, a man loses 30%. To gain 40% how many must he sell for a rupee?',
        hi: 'किसी व्यक्ति को एक रुपये में 6 वस्तु बेचने पर 30% की हानि होती है। 40% लाभ अर्जित करने के लिए उसे एक रुपये में कितनी वस्तु बेचनी होंगी?',
      },
      options: { en: ['4', '5', '3', '2'], hi: ['4', '5', '3', '2'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**3**).',
        keyConcept: 'Doubling SP Rate (`70% → 140%`) Halves Articles per ₹1 (`6 → 3`)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Unit SP Transformation', hi: 'विधि 1: 1 वस्तु के मूल्य से हल' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'Old Rate `70%` = ₹`1/6`. New Rate `140%` $= \\frac{1}{6} \\times \\frac{140}{70} = \\frac{1}{3} \\implies$ Sell **3 articles** per ₹1.',
              hi: 'पुरानी दर (`70%`) = ₹`1/6`। `140%` हेतु नई दर $= \\frac{1}{6} \\times \\frac{140}{70} = ₹1/3 \\implies$ **3 वस्तुएँ**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Inverse Rate Ratio (2 sec)', hi: 'विधि 2: व्युत्क्रम अनुपात ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Price ratio `70 : 140 = 1 : 2` ⇒ Articles ratio flips `2 : 1` ⇒ Half of `6` = **3** orally!',
              hi: 'मूल्य अनुपात `70 : 140 = 1 : 2` ⇒ वस्तुएँ उलटें `2 : 1` ⇒ `6` की आधी **3**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-24',
      examTag: 'RRB Tech Gr-III 2024 (Shift 22)',
      level: 'level1_basic',
      question: {
        en: 'Surendra buys mangoes at the rate of 3 kg for ₹21 and sells them at 5 kg for ₹50. To earn ₹102 as profit, he must sell:',
        hi: 'सुरेंद्र ₹21 में 3 kg आम खरीदता है और ₹50 में 5 kg आम बेचता है। ₹102 का लाभ अर्जित करने के लिए, उसे कितने kg आम बेचना होगा?',
      },
      options: { en: ['56 kg', '34 kg', '26 kg', '32 kg'], hi: ['56 kg', '34 kg', '26 kg', '32 kg'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**34 kg**).',
        keyConcept: 'Find Per-Kg Profit = SP(1kg) − CP(1kg) ⇒ Divide Target ₹102!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Per-Kg Profit Division', hi: 'विधि 1: 1 kg का लाभ निकालकर भाग दें' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'CP of 1 kg $= 21 / 3 =$ ₹7; SP of 1 kg $= 50 / 5 =$ ₹10.\nProfit/kg = ₹3 $\\implies$ Qty $= 102 \\div 3 = \\mathbf{34\\text{ kg}}$.',
              hi: '1 kg का CP $= 21\\div3 =$ ₹7; SP $= 50\\div5 =$ ₹10 ⇒ लाभ = `₹3/kg`।\nकुल आम $= 102 \\div 3 =$ **34 kg**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Divisibility by 3 (2 sec)', hi: 'विधि 2: मौखिक 102 ÷ 3 = 34 (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Margin `10 − 7 = ₹3/kg` instantly gives `102 ÷ 3 =` **34 kg** without writing!',
              hi: 'अंतर `10 − 7 = ₹3/kg` से सीधे `102 ÷ 3 =` **34 kg**!',
            },
          },
        ],
      },
    },

    // TYPE 8 (3 PYQs)
    {
      id: 'ch3-pyq-25',
      examTag: 'RRB Tech Gr-III 2024 (Shift 20)',
      level: 'level1_basic',
      question: {
        en: 'A man sells two houses at the rate of ₹1.995 lakhs each. On one he gains 5% and on the other he loses 5%. His gain or loss percentage in the whole transaction is:',
        hi: 'एक व्यक्ति दो घरों को प्रत्येक ₹1.995 लाख की दर से बेचता है। एक पर उसे 5% का लाभ होता है और दूसरे पर उसे 5% की हानि होती है। पूरे लेन-देन में उसका लाभ या हानि प्रतिशत कितना है?',
      },
      options: { en: ['25% loss', '0.25% loss', '0.25% gain', '2.5% loss'], hi: ['25% हानि', '0.25% हानि', '0.25% लाभ', '2.5% हानि'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**0.25% loss**).',
        keyConcept: 'Same SP (+x%, −x%) ALWAYS Gives Loss (x²/100)% — Ignore ₹1.995 Lakh!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Ratio Scaling without Decimals', hi: 'विधि 1: भिन्न अनुपात (SP बराबर करके)' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '1st (`+5%`): `20 → 21` | 2nd (`-5%`): `20 → 19`. Equalize SP to `21 × 19 = 399`.\nTotal `CP = 20(19) + 20(21) = 800`, Total `SP = 798` ⇒ Loss $= 2/800 = \\mathbf{0.25\\%\\text{ loss}}$.',
              hi: '`+5%`: `20→21`; `-5%`: `20→19`। SP बराबर (`399`) करने पर कुल `CP = 380 + 420 = 800`, कुल `SP = 798` ⇒ हानि $= 2/800 =$ **0.25% हानि**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Zero-Pen Formula −x²/100% (1 sec)', hi: 'विधि 2: 1-सेकंड सूत्र −x²/100% (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Ignore `₹1.995 lakh` trap! Whenever **each SP equal** (`+5%`, `−5%`): Net $= -\\frac{5^2}{100} =$ **0.25% loss**!',
              hi: '`₹1.995 लाख` से न उलझें! जब **दोनों का SP समान** हो (`+5%, −5%`) ⇒ सदैव हानि $= \\frac{5^2}{100} =$ **0.25% हानि**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-26',
      examTag: 'RRB Group D 2025 (Shift 15)',
      level: 'level2_mod',
      question: {
        en: 'Ramesh bought two identical washing machines. He sold one at a profit of 20% and the other at a loss of 10%. If the total selling price of both machines was ₹33,600, what was the cost price of each washing machine?',
        hi: 'रमेश दो एकसमान वाशिंग मशीन खरीदता है। वह एक को 20% लाभ पर और दूसरी को 10% हानि पर बेचता है। यदि दोनों मशीनों का कुल विक्रय मूल्य ₹33,600 था, तो प्रत्येक वाशिंग मशीन का क्रय मूल्य ज्ञात कीजिए।',
      },
      options: { en: ['₹16,000', '₹16,800', '₹18,000', '₹15,800'], hi: ['₹16,000', '₹16,800', '₹18,000', '₹15,800'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**₹16,000**).',
        keyConcept: 'Identical Items = Equal `CP` (`100` each) ⇒ Total SP = 120 + 90 = 210!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Let Each CP = x', hi: 'विधि 1: प्रत्येक CP = x मानकर हल' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$1.20x + 0.90x = 33,600 \\implies 2.1x = 33,600 \\implies x = \\frac{336000}{21} =$ **₹16,000**.',
              hi: '$1.2x + 0.9x = 33,600 \\implies 2.1x = 33,600 \\implies x =$ **₹16,000**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Divisibility by 21 (336/21 = 16) (3 sec)', hi: 'विधि 2: मौखिक 336 ÷ 21 = 16 (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Total SP $= 210\\%$ of `1 machine`. Since `336 ÷ 21 = 16`, single CP = **₹16,000** orally!',
              hi: 'कुल SP $= (120 + 90) = 210\\%$ (1 मशीन का)। चूँकि `336 ÷ 21 = 16`, अतः प्रत्येक `CP` = **₹16,000**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-27',
      examTag: 'RRB Group D 2025 (Shift 4)',
      level: 'level1_basic',
      question: {
        en: 'A shopkeeper buys two watches for ₹1,200 each. He sells the first watch at a profit of 15% and the second watch at a loss of 10%. He then gives ₹100 cashback to the buyer who bought the first watch. What is the shopkeeper’s overall profit or loss?',
        hi: 'एक दुकानदार ने ₹1,200 प्रत्येक की दर से दो घड़ियाँ खरीदीं। उसने पहली घड़ी 15% के लाभ पर और दूसरी घड़ी 10% की हानि पर बेची। फिर उसने पहली घड़ी खरीदने वाले ग्राहक को ₹100 कैशबैक दिया। दुकानदार का समग्र लाभ या हानि ज्ञात कीजिए।',
      },
      options: { en: ['₹60 profit', '₹15 profit', '₹30 loss', '₹40 loss'], hi: ['₹60 का लाभ', '₹15 का लाभ', '₹30 की हानि', '₹40 की हानि'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹40 loss**).',
        keyConcept: 'Net ₹ = +15%(1200) − 10%(1200) − 100 Cashback!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Find Both SPs Minus ₹100', hi: 'विधि 1: दोनों विक्रय मूल्य घटाएं' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Total CP $= 2400$. First net SP $= 1380 - 100 = 1280$; Second SP $= 1080$.\nTotal Net Inflow $= 2360 \\implies$ **₹40 loss**.',
              hi: 'कुल CP $= 2400$। पहली से शुद्ध `1380 − 100 = 1280`, दूसरी से `1080` ⇒ कुल `2360` ⇒ **₹40 की हानि**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Net % + Direct ₹ Deviation (3 sec)', hi: 'विधि 2: शुद्ध अंतर + कैशबैक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Net on equal `₹1200` base $= (+15\\% - 10\\%) = +5\\%$ of `1200` $= +60$. Minus ₹100 cashback $= 60 - 100 =$ **₹40 loss**!',
              hi: 'समान ₹1200 आधार पर शुद्ध अंतर `(+15 − 10)% = +5%` (`+₹60`)। `-₹100` कैशबैक घटाएं ⇒ `60 − 100 =` **₹40 की हानि**!',
            },
          },
        ],
      },
    },

    // TYPE 9 (3 PYQs)
    {
      id: 'ch3-pyq-28',
      examTag: 'RRB Tech Gr-III 2024 (Shift 16)',
      level: 'level1_basic',
      question: {
        en: 'A dishonest shopkeeper professes to sell his goods at cost price. However, he uses a false weight and thus gains 25%. For a kg, he uses a weight of:',
        hi: 'एक बेईमान दुकानदार अपना माल क्रय मूल्य पर बेचने का दावा करता है। हालांकि, वह गलत भार का उपयोग करता है और इस प्रकार 25% का लाभ अर्जित करता है। वह एक kg भार के लिए निम्नलिखित में से किस भार का उपयोग करता है?',
      },
      options: { en: ['700 gm', '800 gm', '900 gm', '850 gm'], hi: ['700 gm', '800 gm', '900 gm', '850 gm'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**800 gm**).',
        keyConcept: '+25% = +1/4 ⇒ Ratio Given : True = 4 : 5 (`5 = 1000g ⇒ 4 = 800g`)!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Ratio Formula 1000 / (1 + P%)', hi: 'विधि 1: मानक सूत्र विधि' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'Let false weight be $x$ gm. Profit $\\frac{1000 - x}{x} = 0.25 \\implies 1.25x = 1000 \\implies x =$ **800 gm**.',
              hi: 'माना गलत भार $x$ ग्राम। $\\frac{1000 - x}{x} = \\frac{1}{4} \\implies 1.25x = 1000 \\implies x =$ **800 gm**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: AB Inverse Fraction 4 : 5 (1 sec)', hi: 'विधि 2: भिन्न 4 : 5 1-सेकंड ट्रिक (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '`25% = 1/4` gain ⇒ True `5 parts = 1000g` (`×200`) ⇒ False `4 parts =` **800 gm**! (Avoid 750 gm trap!).',
              hi: '`25% = +1/4` ⇒ असली `5 इकाई = 1000g` ⇒ दिया `4 इकाई =` **800 gm**! (`750g` कभी न चुनें)।',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-29',
      examTag: 'RRB Tech Gr-III 2024 (Shift 18)',
      level: 'level2_mod',
      question: {
        en: 'A dishonest shopkeeper pretends to sell his goods at cost price, but uses a false weight and gains $11\\frac{1}{9}\\%$. For a weight of 1 kg, he uses:',
        hi: 'एक बेईमान दुकानदार अपना माल क्रय मूल्य पर बेचने का दावा करता है, लेकिन गलत भार का उपयोग करके $11\\frac{1}{9}\\%$ लाभ अर्जित करता है। एक kg भार के लिए वह उपयोग करता है:',
      },
      options: { en: ['900 gm weight', '875 gm weight', '950 gm weight', '850 gm weight'], hi: ['900 gm भार', '875 gm भार', '950 gm भार', '850 gm भार'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**900 gm weight**).',
        keyConcept: 'Fraction 11¹⁄₉% = 1/9 ⇒ False : True = 9 : 10 ⇒ 900 gm!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Convert Fraction 1/9 First', hi: 'विधि 1: प्रतिशत को 1/9 में बदलें' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: '$11\\frac{1}{9}\\% = \\frac{100}{9}\\% = \\frac{1}{9}$. Thus $W = \\frac{1000}{1 + 1/9} = 1000 \\times \\frac{9}{10} =$ **900 gm weight**.',
              hi: '$11\\frac{1}{9}\\% = \\frac{1}{9}$। अतः $W = 1000 \\times \\frac{9}{10} =$ **900 gm भार**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Oral Ratio 9 : 10 (1 sec)', hi: 'विधि 2: अनुपात 9 : 10 मौखिक ट्रिक (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '`1/9` gain means Seller spends `9` (`900 gm`), charges for `10` (`1000 gm`) ⇒ **900 gm**!',
              hi: '`+1/9` लाभ अर्थात् ग्राहक से `10` (`1000g`) के पैसे वसूले और दिए केवल `9` = **900 gm**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-30',
      examTag: 'RRB NTPC UG 2025 (Shift 34)',
      level: 'level2_mod',
      question: {
        en: 'A trader claims to sell flour at a profit of 44%, but also dishonestly uses a weight which is 10% less than what is mentioned on it. Find the total percentage of profit earned by the trader.',
        hi: 'एक व्यापारी 44% लाभ पर आटा बेचने का दावा करता है, लेकिन बेईमानी से उस बाट का इस्तेमाल करता है जो उस पर उल्लिखित वजन से 10% कम है। व्यापारी द्वारा अर्जित लाभ का कुल प्रतिशत ज्ञात कीजिए।',
      },
      options: { en: ['62%', '60%', '61%', '63%'], hi: ['62%', '60%', '61%', '63%'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**60%**).',
        keyConcept: 'Double Cheat Ratio: (100 − 10) : (100 + 44) = 90 : 144 = 5 : 8!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Assume 1g Costs ₹1', hi: 'विधि 1: 1 ग्राम = ₹1 मानकर गणना' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Gives `900g` (`Real CP = 900`), charges for `1000g + 44% = 1440`.\nNet Gain $= \\frac{1440 - 900}{900} \\times 100 = \\frac{540}{9} = \\mathbf{60\\%}$.',
              hi: 'दिया `900g` (`CP = 900`), वसूला `1440`। लाभ $= \\frac{540}{900} \\times 100 =$ **60%**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Ratio Column (100 − w) : (100 + p) (3 sec)', hi: 'विधि 2: सीधा रेश्यो 90 : 144 (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Direct Ratio `90 : 144`. Divide both by `18` ⇒ `5 : 8` ⇒ `+3/5 =` **60%**!',
              hi: 'सीधा `90 : 144` (18 से काटें) ⇒ `5 : 8` ⇒ `+3/5 =` **60%**!',
            },
          },
        ],
      },
    },

    // TYPE 10 (2 PYQs)
    {
      id: 'ch3-pyq-31',
      examTag: 'RRB ALP 2025 CBT-1 (Shift 8)',
      level: 'level3_hard',
      question: {
        en: 'An article is sold at a profit of 40%. If the cost price is increased by ₹28 and the selling price is reduced by ₹84, then the profit would be 37.5%. What is the original cost price (in ₹) of the article?',
        hi: 'एक वस्तु 40% लाभ पर बेची जाती है। यदि क्रय मूल्य में ₹28 की वृद्धि कर दी जाए और विक्रय मूल्य में ₹84 की कमी कर दी जाए, तो लाभ 37.5% होगा। वस्तु का मूल क्रय मूल्य (₹ में) ज्ञात कीजिए।',
      },
      options: { en: ['4,900', '5,000', '4,700', '4,800'], hi: ['4,900', '5,000', '4,700', '4,800'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**4,900**).',
        keyConcept: 'Fraction Cross (`5:7` & `8:11`) OR 1-Line Formula `0.025x = 122.5`!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Clean Linear Shift Equation', hi: 'विधि 1: रैखिक समीकरण विधि' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: 'Old `CP = x`, `SP = 1.4x`. Condition: $1.4x - 84 = 1.375(x + 28) = 1.375x + 38.5$.\n$0.025x = 122.5 \\implies x = 122.5 \\times 40 =$ **4,900**.',
              hi: '$1.4x - 84 = 1.375(x + 28) = 1.375x + 38.5 \\implies 0.025x = 122.5 \\implies x = 122.5 \\times 40 =$ **4,900**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Ratio Cross Multiplication (5:7 vs 8:11) (6 sec)', hi: 'विधि 2: अनुपात क्रॉस गुणन 5:7 व 8:11 (6 sec)' },
            timeTag: '6 sec',
            tone: 'emerald',
            steps: {
              en: 'Write `5 : 7` (`40%`) above `8 : 11` (`37.5% = 3/8`) with shifts `+28`, `−84`.\nTop cross gap `|5×11 − 7×8| = 1 unit`.\nBottom cross gap `|11(+28) − 8(−84)| = 308 + 672 = 980`.\nOrig `CP = 5 units = 5 × 980 =` **4,900**!',
              hi: 'अनुपात `5 : 7` व `8 : 11` के नीचे `+28, −84` लिखें।\nऊपरी क्रॉस `|55 − 56| = 1 इकाई`; निचला क्रॉस `308 + 672 = 980` ⇒ `CP = 5 × 980 =` **4,900**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-32',
      examTag: 'RRB NTPC UG 2025 (Shift 38)',
      level: 'level3_hard',
      question: {
        en: 'An article is sold at a profit of 57%. If the cost price is increased by ₹20 and the selling price is reduced by ₹18, then the profit would be 47.5%. What is the original cost price (in ₹) of the article?',
        hi: 'एक वस्तु 57% लाभ पर बेची जाती है। यदि क्रय मूल्य में ₹20 की वृद्धि कर दी जाए और विक्रय मूल्य में ₹18 की कमी कर दी जाए, तो लाभ 47.5% होगा। वस्तु का मूल क्रय मूल्य (₹ में) कितना होगा?',
      },
      options: { en: ['300', '400', '200', '500'], hi: ['300', '400', '200', '500'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**500**).',
        keyConcept: 'One-Line Gap Formula: `x(p₁ − p₂) = (1 + p₂)·ΔCP − ΔSP`!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Linear Balance Equation', hi: 'विधि 1: मानक समीकरण विधि' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '$1.57x - 18 = 1.475(x + 20) = 1.475x + 29.5$.\n$0.095x = 47.5 \\implies x = \\frac{47.5}{0.095} =$ **500**.',
              hi: '$1.57x - 18 = 1.475x + 29.5 \\implies 0.095x = 47.5 \\implies x =$ **500**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Gap Check + Half Recognition (4 sec)', hi: 'विधि 2: 9.5% = 47.5 सीधा कट (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Rate gap `57% − 47.5% = 9.5%`. Value gap `1.475(20) + 18 = 29.5 + 18 = 47.5`.\nNotice `47.5 = 5 × 9.5` ⇒ `100% =` **500**!',
              hi: 'दर अंतर `57 − 47.5 = 9.5%` = `29.5 + 18 = 47.5` (`9.5 × 5 = 47.5`) ⇒ मूल `CP =` **500**!',
            },
          },
        ],
      },
    },

    // TYPE 11 (3 PYQs)
    {
      id: 'ch3-pyq-33',
      examTag: 'RRB ALP 2025 CBT-1 (Shift 3)',
      level: 'level1_basic',
      question: {
        en: 'A shopkeeper bought 50 mangoes at ₹10 each. He sold 30 mangoes at a profit of 20% and the remaining 20 mangoes at a loss of 10%. What is his overall profit or loss percentage?',
        hi: 'एक दुकानदार ने ₹10 प्रति आम के हिसाब से 50 आम खरीदे। उसने 30 आम 20% लाभ पर और शेष 20 आम 10% हानि पर बेचे। उसका कुल लाभ या हानि प्रतिशत ज्ञात कीजिए।',
      },
      options: { en: ['8% profit', '6% loss', '2% loss', '4% profit'], hi: ['8% लाभ', '6% हानि', '2% हानि', '4% लाभ'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**8% profit**).',
        keyConcept: 'Weighted Avg by Quantity Ratio `30 : 20 = 3 : 2` (Ignore ₹10 Price!)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Total ₹ Profit Calculation', hi: 'विधि 1: कुल ₹ लाभ से गणना' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Total CP $= 500$. Profit on `30` $= +60$; Loss on `20` $= -20$.\nNet Profit $= +40$ on `500` $= \\mathbf{8\\%\\text{ profit}}$.',
              hi: 'कुल `CP = 500`। `30` पर `+60` लाभ, `20` पर `-20` हानि ⇒ कुल `+₹40 / 500` = **8% लाभ**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Zero-₹ Ratio Weighting (3 sec)', hi: 'विधि 2: बिना ₹ भारित औसत 3:2 (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Qty ratio `30 : 20 = 3 : 2`.\nNet `% = (3×20 − 2×10) ÷ (3 + 2) = 40 ÷ 5 =` **8% profit**!',
              hi: 'मात्रा अनुपात `3 : 2` ⇒ औसत `% = (3×20 − 2×10) ÷ 5 = 40/5 =` **8% लाभ**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-34',
      examTag: 'RRB Group D 2025 (Shift 17)',
      level: 'level3_hard',
      question: {
        en: 'Mukesh, a trader, buys a certain number of pens at ₹5 per pen. He sells two-thirds of the pens at a 25% profit and the remaining pens at a 10% loss. If the overall profit made by Mukesh is ₹360, how many pens did he buy?',
        hi: 'व्यापारी मुकेश ₹5 प्रति पेन की दर से कुछ पेन खरीदता है। वह दो-तिहाई पेन 25% लाभ पर और शेष पेन 10% हानि पर बेचता है। यदि मुकेश का कुल लाभ ₹360 है, तो बताएं कि उसने कितने पेन खरीदे थे?',
      },
      options: { en: ['530', '580', '550', '540'], hi: ['530', '580', '550', '540'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**540**).',
        keyConcept: 'Weighted Lot % = (2×25 − 1×10) / 3 = 40/3 % ⇒ Match Total Profit ₹360!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Let Total Pens = 3x', hi: 'विधि 1: कुल पेन = 3x मानें' },
            timeTag: '16 sec',
            tone: 'teal',
            steps: {
              en: 'Total CP $= 3x \\times 5 = 15x$. Profit on `2x` $= 10x(0.25) = +2.5x$; Loss on `x` $= -0.5x$.\nNet Profit $= 2x = 360 \\implies x = 180 \\implies 3x =$ **540 pens**!',
              hi: 'माना कुल पेन `3x` (`CP = 15x`)। लाभ $= 2x(5)(0.25) - x(5)(0.10) = 2x = 360 \\implies x = 180 \\implies 3x =$ **540**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Weighted Rate 40/3 % = ₹360 (5 sec)', hi: 'विधि 2: भारित दर 40/3% = ₹360 (5 sec)' },
            timeTag: '5 sec',
            tone: 'emerald',
            steps: {
              en: 'Net Profit `% = (2×25 − 1×10) / 3 = 40/3 %` (`= 2/15` of Total CP) `= ₹360`.\nTotal CP $= 360 \\times \\frac{15}{2} = 2700 \\implies$ Pens $= 2700 \\div 5 =$ **540**!',
              hi: 'कुल लाभ% $= (50 − 10)/3 = 40/3\\% = 2/15$ ⇒ कुल CP $= 360 \\times 15/2 = 2700$ ⇒ पेन $= 2700 \\div 5 =$ **540**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch3-pyq-35',
      examTag: 'RRB ALP 2025 CBT-1 (Shift 4)',
      level: 'level3_hard',
      question: {
        en: 'Nikhil sold his cycle to Ravi at a loss of 24%. Ravi spent ₹486 on its repairs and sold the cycle to Vikas for ₹2,875, thereby making a profit of 15%. Find the cost price of the cycle for Nikhil.',
        hi: 'निखिल ने अपनी साइकिल रवि को 24% हानि पर बेची। रवि ने उसकी मरम्मत पर ₹486 खर्च किए और साइकिल को विकास को ₹2,875 में बेचकर 15% लाभ कमाया। निखिल के लिए साइकिल का लागत मूल्य ज्ञात कीजिए।',
      },
      options: { en: ['₹2,710', '₹2,540', '₹2,460', '₹2,650'], hi: ['₹2,710', '₹2,540', '₹2,460', '₹2,650'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**₹2,650**).',
        keyConcept: 'Backward Unwind: Divide 1.15 FIRST, THEN Subtract ₹486 Repair, THEN Divide 0.76!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Step-by-Step Reverse Chain', hi: 'विधि 1: पीछे से उल्टी श्रृंखला हल' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '1) Ravi Total CP $= \\frac{2875}{1.15} = 2500$.\n2) Purchase price Ravi paid Nikhil $= 2500 - 486 = 2014$.\n3) `76% of Nikhil CP = 2014` $\\implies$ **₹2,650**.',
              hi: '1) रवि की कुल लागत $= 2875 \\div 1.15 = 2500$।\n2) मरम्मत घटाएं $= 2500 - 486 = 2014$ (`76%`)।\n3) निखिल का CP $= 2014 \\div 0.76 =$ **₹2,650**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Exact Fraction Cut 23/20 & 19/25 (5 sec)', hi: 'विधि 2: भिन्न कट 23/20 व 19/25 (5 sec)' },
            timeTag: '5 sec',
            tone: 'emerald',
            steps: {
              en: '`2875 ÷ 23 × 20 = 125 × 20 = 2500`. Minus `486 = 2014`.\n`2014 ÷ 19 × 25 = 106 × 25 =` **₹2,650**!',
              hi: '`2875 ÷ 23 × 20 = 2500`; `2500 − 486 = 2014`; `2014 ÷ 19 × 25 = 106 × 25` = **₹2,650**!',
            },
          },
        ],
      },
    },
  ],

  flashcards: [
    { front: { en: 'Golden Ratio connecting CP, MP, D% & P%?', hi: 'CP, MP, छूट% व लाभ% का गोल्डन अनुपात?' }, back: { en: 'CP : MP = (100 − D%) : (100 + P%)', hi: 'CP : MP = (100 − D%) : (100 + P%)' } },
    { front: { en: 'Buy X Get Y Free ⇒ Net Discount % = ?', hi: 'X खरीदें Y मुफ़्त पाएं ⇒ प्रभावी छूट %?' }, back: { en: 'Y / (X + Y) × 100% (Paid + Free in denominator!)', hi: 'Y / (X + Y) × 100% (हर में कुल Paid + Free)' } },
    { front: { en: 'Equal-Sum Successive Discounts (2+8% vs 3+7% vs 10%)?', hi: '2%+8%, 3%+7% व 10% में सर्वाधिक छूट?' }, back: { en: 'Flat 10% (smallest product d₁d₂ gives MAX discount!)', hi: '10% एकल छूट (सबसे कम d₁d₂ = सर्वाधिक छूट!)' } },
    { front: { en: 'If CP of m articles = SP of n articles?', hi: 'm वस्तुओं का CP = n वस्तुओं का SP हो तो?' }, back: { en: 'Invert: CP : SP = n : m ⇒ ((m−n)/n)×100%', hi: 'उलटें: CP : SP = n : m ⇒ ((m−n)/n)×100%' } },
    { front: { en: 'Selling n articles gains SP of k articles?', hi: 'n वस्तु बेचने पर k के SP बराबर लाभ हो तो?' }, back: { en: 'Profit % = k / (n − k) × 100 (NOT k / n!)', hi: 'लाभ % = k / (n − k) × 100 (हर में n−k!)' } },
    { front: { en: 'Same SP (+x% & −x%) vs Same CP (+x% & −x%)?', hi: 'समान SP बनाम समान CP (+x%, −x%) अंतर?' }, back: { en: 'Same SP ⇒ ALWAYS (x²/100)% Loss; Same CP ⇒ 0%', hi: 'समान SP ⇒ सदैव (x²/100)% हानि; समान CP ⇒ 0%' } },
    { front: { en: 'Dishonest dealer gives 800g for 1kg ⇒ Profit %?', hi: '1kg के बजाय 800g तौलने पर लाभ %?' }, back: { en: '200 / 800 = 1/4 = +25% (Divide by Given Wt 800g!)', hi: '200 / 800 = +25% (दिए गए 800g से भाग!)' } },
    { front: { en: 'Dishonest dealer gains 11¹⁄₉% at CP ⇒ Weight/kg?', hi: 'बेईमानी से 11¹⁄₉% लाभ ⇒ 1 kg का बाट?' }, back: { en: '+1/9 ⇒ False : True = 9 : 10 ⇒ 900 gm', hi: '+1/9 ⇒ बाट अनुपात 9 : 10 ⇒ 900 ग्राम' } },
    { front: { en: 'Claims +a% profit & gives w% less weight?', hi: '+a% लाभ दावा तथा w% कम बाट इस्तेमाल करे तो?' }, back: { en: 'Direct Ratio CP : SP = (100 − w) : (100 + a)', hi: 'सीधा अनुपात CP : SP = (100 − w) : (100 + a)' } },
    { front: { en: 'SP doubled makes Profit tripled ⇒ Initial P%?', hi: 'SP दुगुना करने पर लाभ तिगुना ⇒ प्रारंभिक लाभ %?' }, back: { en: 'SP = 2P ⇒ CP = P ⇒ 100% Profit ALWAYS!', hi: 'SP = 2P ⇒ CP = P ⇒ सदैव 100% लाभ!' } },
    { front: { en: 'By selling 6 for ₹1 loses 30%. Gain 40% ⇒ Qty/₹1?', hi: '₹1 में 6 बेच 30% हानि; 40% लाभ हेतु कितनी?' }, back: { en: 'Rate 70→140 (×2) ⇒ Articles halve: 6 ÷ 2 = 3', hi: 'दर 70→140 (दुगुनी) ⇒ वस्तु आधी: 6 ÷ 2 = 3' } },
    { front: { en: 'Chain A → B (+Repair) → C: How to go backward?', hi: 'श्रृंखला A → B (+मरम्मत) → C उल्टा हल कैसे करें?' }, back: { en: 'Divide B rate FIRST, THEN subtract B repair before A!', hi: 'पहले B की % दर हटाएं, फिर B का मरम्मत खर्च घटाएं!' } },
  ],
};
