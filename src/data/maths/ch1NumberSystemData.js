/**
 * Railway Mathematics Mastery • Chapter 1 (Smart Board Edition v2)
 * Number System, Divisibility, HCF–LCM & Simplification (VBODMAS, Recurring Decimals, Surds & Indices)
 * Design Style: Top Coaching Smart Board Slides (Crisp Formula Box + Scannable Points + Trap + Worked Example)
 * - English math terms preferred + easy Hinglish reasoning (default) + clean Pure English toggle
 * - Clickable Weightage Bars & Module Blueprint Jumps
 * - 31 Verified Type-Wise Real Railway PYQs (2–4 Methods Each)
 */

export const CH1_NUMBER_SYSTEM_DATA = {
  id: 'math-ch1-number-system',
  chapterNumber: 1,
  subjectId: 'maths',
  subjectLabel: { en: 'Mathematics', hi: 'गणित (हिन्दी Smart Board)' },
  taxonomyChapterName: 'Number System, HCF/LCM & Simplification',
  sourceCode: 'Railway Maths Mastery • Ch 1: Number System, HCF–LCM & Simplification (Smart Board Edition)',
  blueprintSvgKey: 'ch1-blueprint-mindmap',
  hero: {
    imageUrl: '/maths-notes/ch1-number-system/hero-number-system.webp',
    caption: {
      en: 'Ch 1 Smart Board Engine: Classification, Divisibility (2–99), Unit Digit & C9, HCF–LCM, VBODMAS, Recurring Decimals & Surds.',
      hi: 'अध्याय 1 स्मार्ट बोर्ड: Number Tree, Divisibility (2–99), Unit Digit व C9, HCF–LCM, VBODMAS, बार दशमलव (p/q) व करणी।',
    },
  },
  metrics: {
    pages: 26,
    modules: 7,
    tables: 5,
    svgLabs: 5,
    vectorPlates: 5,
    typesCount: 12,
    pyqsSolved: 31,
  },
  weightageBars: [
    {
      label: { en: 'VBODMAS, Brackets, Algebraic & Surds Simplification', hi: 'VBODMAS, कोष्ठक, बीजगणितीय सूत्र व करणी सरलीकरण' },
      pct: 38,
      targetTab: 'concepts',
      targetSectionId: 'mod-6-vbodmas-simplification',
      targetPyqTypeId: 'type-9-vbodmas-brackets',
    },
    {
      label: { en: 'Divisibility Rules (8, 9, 11, 24, 72, 88, 99) & Digit x', hi: 'विभाज्यता नियम (8, 9, 11, 24, 72, 88, 99) व लुप्त अंक x' },
      pct: 24,
      targetTab: 'concepts',
      targetSectionId: 'mod-2-divisibility',
      targetPyqTypeId: 'type-2-composite-divisibility',
    },
    {
      label: { en: 'HCF–LCM (Product, Ratio, Decimals, Bells & Remainder)', hi: 'HCF–LCM (गुणनफल, अनुपात, दशमलव, घंटी व शेषफल नियम)' },
      pct: 20,
      targetTab: 'concepts',
      targetSectionId: 'mod-5-hcf-lcm',
      targetPyqTypeId: 'type-3-hcf-lcm-basics-decimals',
    },
    {
      label: { en: 'Prime, Co-Prime, Unit Digit, C9 Factors & Bar p/q', hi: 'Prime, Co-Prime, Unit Digit, C9, गुणनखंड व बार दशमलव' },
      pct: 18,
      targetTab: 'concepts',
      targetSectionId: 'mod-3-unit-c9',
      targetPyqTypeId: 'type-7-unit-digit-perfect-sq',
    },
  ],
  title: {
    en: 'Ch 1: Number System, Divisibility, HCF–LCM & Simplification',
    hi: 'अध्याय 1: संख्या पद्धति (Number System), विभाज्यता, HCF–LCM व सरलीकरण',
  },
  subtitle: {
    en: 'Smart Board Complete Class • 7 Rule Boards, 5 Interactive SVG Labs & 31 Real PYQs (Basic + Smart + 3-Sec Tricks)',
    hi: 'स्मार्ट बोर्ड कम्प्लीट क्लास • सभी नियम पॉइंट-टू-पॉइंट + 5 SVG लैब्स + 31 रियल PYQs (2–4 विधियाँ)',
  },
  quickRevision60Sec: [
    {
      title: { en: 'Prime & Parity Gold Rules', hi: 'Prime व सम-विषम स्वर्णिम नियम' },
      targetSectionId: 'mod-1-classification',
      points: {
        en: '• 1 = NEITHER Prime NOR Composite; 2 = ONLY Even Prime.\n• 4 = Smallest Composite | 9 = Smallest Odd Composite.\n• 1–100 Primes = 25 total (1–50: 15 | 51–100: 10).\n• Sum of 3 primes = EVEN ⇒ one MUST be 2!',
        hi: '• 1 न तो Prime है और न Composite; 2 अकेली Even Prime संख्या है।\n• 4 = सबसे छोटी Composite (भाज्य) | 9 = सबसे छोटी विषम भाज्य संख्या।\n• 1–100 में कुल 25 Prime संख्याएँ होती हैं (1–50: 15 | 51–100: 10)।\n• यदि 3 Prime संख्याओं का योग EVEN हो ⇒ उनमें से एक पक्का 2 होगी!',
      },
    },
    {
      title: { en: 'Composite Divisibility & C9', hi: 'विभाज्यता (72/88/99) व C9 ट्रिक' },
      targetSectionId: 'mod-2-divisibility',
      points: {
        en: '• Split into Co-Prime ONLY: 72 = 8×9, 88 = 8×11, 99 = 9×11.\n• Always check 8 (last 3 digits) FIRST, then 9 or 11.\n• Rule of 11: |Odd Sum − Even Sum| = 0, 11, 22...\n• C9 (Mod 9): +/−/× me LHS C9 = Option C9!',
        hi: '• बड़े भाजक को हमेशा Co-Prime में तोड़ें: 72 = 8×9, 88 = 8×11, 99 = 9×11।\n• पहले 8 (अंतिम 3 अंक) lock करें, फिर 9 या 11 जाँचें।\n• 11 का नियम: |विषम स्थान योग − सम स्थान योग| = 0 या 11 का गुणज।\n• C9 जाँच: +/−/× में प्रश्न का C9 = सही Option का C9 (Approx में वर्जित!)।',
      },
    },
    {
      title: { en: 'Unit Digit & Remainder Rules', hi: 'Unit Digit (इकाई अंक) व शेषफल ±1' },
      targetSectionId: 'mod-3-unit-c9',
      points: {
        en: '• 0, 1, 5, 6 → Unit digit NEVER changes (power n ≥ 1).\n• 4^Odd=4, 4^Even=6  |  9^Odd=9, 9^Even=1.\n• 2, 3, 7, 8 → Divide power last 2 digits by 4 (r=0 ⇒ power 4).\n• Perfect square NEVER ends in 2, 3, 7, 8!',
        hi: '• 0, 1, 5, 6 → कोई भी घात (power) हो, Unit Digit वही रहता है।\n• 4^Odd=4, 4^Even=6  |  9^Odd=9, 9^Even=1।\n• 2, 3, 7, 8 → घात ÷ 4 करें (शेष 0 आए तो घात 4 लें!)।\n• किसी भी Perfect Square के अंत में 2, 3, 7, 8 कभी नहीं आता!',
      },
    },
    {
      title: { en: 'HCF–LCM & VBODMAS Shortcuts', hi: 'HCF–LCM, VBODMAS व बार (p/q)' },
      targetSectionId: 'mod-5-hcf-lcm',
      points: {
        en: '• A × B = HCF × LCM  |  Decimal: ×10^k → solve → ÷10^k.\n• Unknown Same Rem: HCF(|a−b|, |b−c|, |c−a|).\n• VBODMAS: Bar (¯) → ( ) → { } → [ ] → Of → ÷ → × → +/−.\n• 0.a(bc)̅ = (abc − a) / 990 (9 per bar, 0 per non-bar).',
        hi: '• A × B = HCF × LCM  |  दशमलव (1.3, 0.13) → ×100 करके हल करें।\n• अज्ञात समान शेष: HCF(|a−b|, |b−c|, |c−a|) निकालें।\n• VBODMAS: "Of (का)" हमेशा ÷ से पहले हल होता है!\n• बार p/q: जितने अंकों पर बार उतने 9, बिना बार उतने 0 नीचे रखें।',
      },
    },
  ],

  /**
   * 7 SMART BOARD TEACHING MODULES
   * Each `boardCard` = 1 Crisp Classroom Slide: Title + Formula Box + Short Bullets + Trap + Worked Example
   */
  sections: [
    {
      id: 'mod-1-classification',
      number: '1.1',
      diagramKey: 'ch1-number-tree',
      title: {
        en: 'Module 1: Number Classification, Primes, Co-Primes & √N Test',
        hi: 'मॉड्यूल 1: संख्या वर्गीकरण, Prime, Co-Prime व √N अभाज्य जाँच',
      },
      summaryTag: {
        en: 'Real Tree • Rational (p/q) vs Irrational • 0 & 1 Traps • √N Prime Check • Parity Theorem',
        hi: 'संख्या परिवार ट्री • p/q बनाम π जाल • 0, 1, 2, 4 नियम • √N Prime टेस्ट',
      },
      boardCards: [
        {
          id: 'card-1-1-1',
          title: {
            en: '1. Number Family Tree (Natural, Whole, Integers, Rational & Irrational)',
            hi: '1. संख्या परिवार (Natural, Whole, Integers, Rational व Irrational)',
          },
          formula: '$$\\text{Sum}(1..n) = \\frac{n(n+1)}{2} \\quad|\\quad \\frac{22}{7} = \\text{Rational } (p/q), \\quad \\pi = \\text{Irrational}$$',
          points: [
            { en: 'Natural (N): {1, 2, 3, ...} — counting starts from 1.', hi: 'Natural (प्राकृत N): {1, 2, 3, ...} — गिनती 1 से शुरू होती है।' },
            { en: 'Whole (W): {0, 1, 2, 3, ...} — 0 is Whole, NOT Natural.', hi: 'Whole (पूर्ण W): {0, 1, 2, 3, ...} — 0 पूर्ण संख्या है, प्राकृत नहीं।' },
            { en: 'Integers (Z): {..., -2, -1, 0, 1, 2, ...} — 0 is an EVEN integer (neither +ve nor -ve).', hi: 'Integers (पूर्णांक Z): 0 एक सम (Even) पूर्णांक है (न धनात्मक, न ऋणात्मक)।' },
            { en: 'Rational (p/q, q ≠ 0): Terminating (0.25), Repeating (0.333...), & 22/7.', hi: 'Rational (परिमेय p/q, q ≠ 0): सांत दशमलव (0.25), बार (0.3̅), व 22/7।' },
            { en: 'Irrational: Never ends, never repeats — e.g. π, √2, √3, e.', hi: 'Irrational (अपरिमेय): जो न रुके न दोहराए — जैसे π, √2, √3, e।' },
            { en: 'Face Value = digit itself (5 in 75482) | Place Value = position value (5000).', hi: 'Face Value = स्वयं अंक (5) | Place Value = स्थानीय मान (5000, अंतर = 4995)।' },
          ],
          trap: {
            en: 'Exam Trap: 22/7 is RATIONAL (exact p/q), whereas π is IRRATIONAL!',
            hi: 'Exam Trap: 22/7 एक Rational (परिमेय) संख्या है, जबकि π Irrational (अपरिमेय) है!',
          },
          example: {
            title: { en: 'Classify: 0.121121112... vs 22/7', hi: 'तुरंत जाँचें: 0.121121112... और 22/7 क्या हैं?' },
            basic: {
              en: '22/7 is exact $p/q$ with $q = 7 \\neq 0$ ⇒ Rational.\n0.121121112... digits change (`12, 112, 1112`) ⇒ Irrational.',
              hi: '22/7 सीधे $p/q$ ($q = 7 \\neq 0$) रूप में है ⇒ Rational (परिमेय)।\n0.121121112... न रुकता है न समान क्रम दोहराता है ⇒ Irrational (अपरिमेय)।',
            },
            smart: {
              en: 'Instant Rule: Bar (¯) or Fraction $p/q$ = Rational | Unsolved √ or π = Irrational.',
              hi: '5-Sec नियम: बार (¯) या भिन्न $p/q$ = Rational | अपूर्ण √ या π = Irrational।',
            },
          },
        },
        {
          id: 'card-1-1-2',
          title: {
            en: '2. Prime, Composite, Co-Prime Pairs & √N Prime Test',
            hi: '2. Prime (अभाज्य), Composite, Co-Prime व √N जाँच ट्रिक',
          },
          formula: '$$\\text{Prime} \\implies \\text{Exactly 2 factors } (1, N) \\quad|\\quad \\text{Co-Prime} \\implies \\text{HCF}(a, b) = 1$$',
          points: [
            { en: '1 is NEITHER Prime NOR Composite (has only 1 factor).', hi: '1 न तो Prime है और न ही Composite (केवल 1 गुणनखंड होता है)।' },
            { en: '2 = Smallest Prime & ONLY Even Prime | 4 = Smallest Composite | 9 = Odd Composite.', hi: '2 = सबसे छोटी व अकेली Even Prime | 4 = सबसे छोटी Composite | 9 = विषम Composite।' },
            { en: 'Primes 1–50 = 15 | 51–100 = 10 | Total 1–100 = 25 (Sum = 1060).', hi: 'Prime गिनती: 1–50 = 15 | 51–100 = 10 | कुल 1–100 = 25 (योग = 1060)।' },
            { en: 'Twin Primes (gap 2): 8 pairs from 1–100 — e.g. (3,5), (5,7), (11,13), (17,19).', hi: 'Twin Primes (अंतर 2): 1–100 में 8 जोड़े — जैसे (3,5), (5,7), (11,13)।' },
            { en: 'Co-Prime Rule: Consecutive integers (n, n+1) or composite pairs like (8, 15) with HCF = 1.', hi: 'Co-Prime (सह-अभाज्य): HCF(a, b) = 1 (संख्याओं का खुद Prime होना ज़रूरी नहीं — जैसे 8 और 15!)।' },
            { en: 'Parity Theorem: If sum of 3 primes is EVEN, one prime MUST be 2!', hi: 'सम-विषम नियम: यदि 3 Primes का योग EVEN है, तो उनमें एक संख्या पक्का 2 होगी!' },
          ],
          example: {
            title: { en: 'Is 137 Prime? (Check in 4 Seconds via √N)', hi: 'बोर्ड उदाहरण: क्या 137 अभाज्य (Prime) है? (√N ट्रिक)' },
            basic: {
              en: 'Nearest square above 137 is $12^2 = 144$ ($\\sqrt{137} < 12$). Test primes $< 12$: `2, 3, 5, 7, 11`. None divides 137 ⇒ **PRIME**.',
              hi: '137 के ठीक ऊपर वर्ग $12^2 = 144$ ($k=12$) ⇒ केवल `2, 3, 5, 7, 11` से भाग दें। किसी से नहीं कटा ⇒ **137 Prime है!**',
            },
            smart: {
              en: 'Compare 221: $\\sqrt{221} < 15$, check `2..13` → $13 \\times 17 = 221$ ⇒ NOT Prime.',
              hi: 'तुलना 221: $\\sqrt{221} < 15$, `13` से कट गया ($13 \\times 17 = 221$) ⇒ Composite।',
            },
          },
        },
      ],
    },
    {
      id: 'mod-2-divisibility',
      number: '1.2',
      diagramKey: 'ch1-divisibility-map',
      title: {
        en: 'Module 2: Divisibility Rules (2–19), 1001 & Composite Splitting (72, 88, 99)',
        hi: 'मॉड्यूल 2: विभाज्यता नियम (2–19), 1001 व संयुक्त भाजक (72, 88, 99)',
      },
      summaryTag: {
        en: 'Last-Digit 8 Trick • Cast Out 9s • 11 Alternating Diff • 7 & 13 Osculator • Composite Co-Prime Split',
        hi: '8 की Odd/Even ट्रिक • Casting Out 9s • 11 नियम • 7/13 ऑस्कुलेटर • 72/88/99 हल',
      },
      boardCards: [
        {
          id: 'card-1-2-1',
          title: {
            en: '1. Fast Tests for Powers of 2, 5, 3, 9 & 11',
            hi: '1. तेज़ जाँच नियम: 2, 4, 8, 16 | 5, 25 | 3, 9 व 11',
          },
          formula: '$$\\div 8: \\text{Last 3 Digits} \\quad|\\quad \\div 9: \\text{Sum of Digits} \\quad|\\quad \\div 11: |\\text{Odd Pos} - \\text{Even Pos}| = 0, 11k$$',
          points: [
            { en: '2, 4, 8, 16: Check last 1, 2, 3, 4 digits respectively.', hi: '2, 4, 8, 16: अंतिम क्रमशः 1, 2, 3, 4 अंकों की विभाज्यता जाँचें।' },
            { en: '3-Sec Trick for 8: If 3rd-last digit EVEN → check last 2 digits; if ODD → last 2 digits + 4.', hi: '8 की 3-Sec ट्रिक: सैकड़े (3rd-last) का अंक सम (Even) हो तो अंतिम 2 अंक ÷ 8; विषम (Odd) हो तो अंतिम 2 + 4 जाँचें!' },
            { en: '3 & 9 (Casting Out 9s): Cancel digit pairs summing to 9 — leftover = exact remainder.', hi: '3 व 9 (Casting Out 9s): अंक जोड़ते समय 9 के जोड़े काट दें — बचा योग ही शेषफल होगा।' },
            { en: '11 Rule: Add alternating digits in same order (Odd Sum − Even Sum) = 0 or ±11, ±22.', hi: '11 का नियम: विषम स्थान योग − सम स्थान योग = 0 या ±11, ±22 होना चाहिए।' },
          ],
        },
        {
          id: 'card-1-2-2',
          title: {
            en: '2. Composite Splitting (72, 88, 99, 24) + Rules of 7, 13 & 19',
            hi: '2. बड़े भाजक तोड़ना (72, 88, 99, 24) + 7, 13, 19 ऑस्कुलेटर',
          },
          formula: '$$72 = 8 \\times 9 \\quad|\\quad 88 = 8 \\times 11 \\quad|\\quad 99 = 9 \\times 11 \\quad|\\quad 1001 = 7 \\times 11 \\times 13$$',
          points: [
            { en: 'Always break big divisor into CO-PRIME factors (HCF = 1): 24 = 8×3 (NEVER 4×6!).', hi: 'बड़े भाजक को हमेशा CO-PRIME गुणनखंडों में तोड़ें: 24 = 8×3 (कभी 4×6 न लें!)।' },
            { en: 'Lock Order: Check 8 / 4 / 5 FIRST (locks end digit x), THEN check 9 or 11 (finds y).', hi: 'क्रम नियम: पहले 8 / 4 / 5 से अंतिम अंक x निश्चित करें, उसके बाद 9 या 11 लगाएं!' },
            { en: '1001 Magic: Any 6-digit xyzxyz (e.g. 458458) ALWAYS divides by 7, 11, and 13.', hi: '1001 नियम: कोई भी 6-अंकीय xyzxyz संख्या (जैसे 458458) हमेशा 7, 11 व 13 से कटती है।' },
            { en: '7 Rule (−2 Osculator): Subtract 2×last digit (343 → 34 − 6 = 28 ÷ 7 ✓). For 13 (+4) & 19 (+2): Add.', hi: '7 नियम: इकाई अंक × 2 घटाएं (343 → 34 − 6 = 28) | 13 में ×4 जोड़ें | 19 में ×2 जोड़ें।' },
          ],
          example: {
            title: { en: 'If 10-digit 5432y1749x ÷ 72, find (5x − 4y)', hi: 'बोर्ड प्रश्न: यदि 5432y1749x, 72 से विभाज्य है, तो (5x − 4y)?' },
            basic: {
              en: '1) Split $72 = 8 \\times 9$. Apply 8 on last 3 digits `49x`: $496 \\div 8 = 62 \\Rightarrow \\mathbf{x = 6}$.\n2) Sum for 9 (`cancel 5+4, 7+2, 9`): $3 + y + 1 + 4 + 6 = 14 + y \\Rightarrow \\mathbf{y = 4}$.\n3) $5(6) - 4(4) = 30 - 16 = \\mathbf{14}$.',
              hi: '1) $72 = 8 \\times 9$। पहले `49x ÷ 8` से **$x = 6$** lock (`496÷8=62`)।\n2) `9` के जोड़े काटें (`5+4, 7+2, 9`): बचा `3+y+1+4+6 = 14+y` ⇒ **$y = 4$** (`18`)।\n3) $5(6) - 4(4) = 30 - 16 = \\mathbf{14}$!',
            },
            smart: {
              en: 'Fast check for `49x`: 3rd digit `4` is even → check `9x ÷ 8` directly ⇒ `96 ÷ 8` ⇒ $x = 6$ in 2 sec!',
              hi: '`49x` में तीसरा अंक `4` सम (Even) है ⇒ सीधे `9x ÷ 8` जाँचा (`96`) ⇒ $x = 6$ केवल 2 सेकंड में!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-3-unit-c9',
      number: '1.3',
      diagramKey: 'ch1-unit-digit-c9',
      title: {
        en: 'Module 3: Unit Digit Cyclicity + Digital Sum (C9) Masterclass',
        hi: 'मॉड्यूल 3: Unit Digit (इकाई अंक चक्र) + Digital Sum (C9) मास्टरक्लास',
      },
      summaryTag: {
        en: '0/1/5/6, 4/9, 2/3/7/8 Cycles • Negative Borrow Trap • C9 Inverse Division & Where Not to Use C9',
        hi: 'घात चक्रीयता • ऋण उधार (Borrow) जाल • C9 भाग व्युत्क्रम व वर्जित स्थितियाँ',
      },
      boardCards: [
        {
          id: 'card-1-3-1',
          title: {
            en: '1. Unit Digit (इकाई अंक) Power Rules & 2 Exam Traps',
            hi: '1. Unit Digit (इकाई अंक) घात नियम व 2 प्रमुख परीक्षा जाल',
          },
          formula: '$$0,1,5,6 \\to \\text{Same} \\quad|\\quad 4,9 \\to \\text{Odd/Even} \\quad|\\quad 2,3,7,8 \\to (\\text{Power } \\bmod 4) \\; [r=0 \\implies p=4]$$',
          points: [
            { en: 'Cycle 1 (0, 1, 5, 6): Unit digit NEVER changes for any natural power n ≥ 1.', hi: 'समूह 1 (0, 1, 5, 6): किसी भी प्राकृत घात n ≥ 1 पर Unit Digit अपरिवर्तित रहता है।' },
            { en: 'Cycle 2 (4 & 9): 4^Odd = 4, 4^Even = 6  |  9^Odd = 9, 9^Even = 1.', hi: 'समूह 2 (4 व 9): विषम (Odd) घात पर 4, 9 तथा सम (Even) घात पर 6, 1।' },
            { en: 'Cycle 4 (2, 3, 7, 8): Divide last 2 digits of power by 4. If r = 0, MUST use power 4 (NOT 0!).', hi: 'समूह 4 (2, 3, 7, 8): घात के अंतिम 2 अंक ÷ 4 करें; शेष 0 आने पर घात 4 लें (0 नहीं!)।' },
            { en: 'Factorial (n!): 1! = 1, 2! = 2, 3! = 6, 4! = 4; all n ≥ 5 end in 0.', hi: 'Factorial (n!): n ≥ 5 के बाद प्रत्येक n! का Unit Digit हमेशा 0 होता है।' },
          ],
          trap: {
            en: 'Borrow Trap: In ...3 − ...7, NEVER write 4 as −4! Borrow 10: 13 − 7 = 6!',
            hi: 'घटाव जाल: ...3 − ...7 आए तो कभी 4 न लिखें! दहाई (+10) उधार लें: 13 − 7 = 6!',
          },
        },
        {
          id: 'card-1-3-2',
          title: {
            en: '2. Digital Sum (C9 / Casting Out 9s) — 3-Second Calculation Checker',
            hi: '2. Digital Sum (C9 / नवांक) — 3 सेकंड में सही Option मिलान',
          },
          formula: '$$\\div 2 \\equiv \\times 5 \\quad|\\quad \\div 4 \\equiv \\times 7 \\quad|\\quad \\div 5 \\equiv \\times 2 \\quad|\\quad \\div 7 \\equiv \\times 4 \\quad|\\quad \\div 8 \\equiv \\times 8$$',
          points: [
            { en: 'How to find C9: Add digits until 1 digit (9 = 0, drop any pairs summing to 9!).', hi: 'C9 निकालना: अंकों को 1 अंक तक जोड़ें (9 को 0 मानकर 9 बनाने वाले जोड़े काट दें)।' },
            { en: 'Rule: Ignore decimal points & % signs — LHS C9 MUST match Option C9 in exact +, −, ×!', hi: 'नियम: दशमलव व % चिह्न नज़रअंदाज़ करें — प्रश्न का C9 = सही Option का C9।' },
            { en: 'Division C9: Multiply top & bottom to turn denominator C9 into 1 (table above).', hi: 'भाग में C9: हर (Den) का C9 = 1 बनाने हेतु अंश व हर में व्युत्क्रम (ऊपर टेबल) से गुणा करें।' },
            { en: 'STRICTLY FORBIDDEN: Never apply C9 in Approximation Qs or Denominator C9 = 3, 6, 9!', hi: 'कहाँ वर्जित है: लगभग (Approx) वाले प्रश्नों व हर में 3, 6, 9 आने पर C9 न लगाएं!' },
          ],
          example: {
            title: { en: 'ALP Shift 4 PYQ: Simplify (52² − 12³) / (4³ − 16 × 3)', hi: 'ALP Shift 4: (52² − 12³) / (4³ − 16 × 3) को C9 से हल करें' },
            basic: {
              en: '$(2704 - 1728) / (64 - 48) = 976 / 16 = \\mathbf{61}$.',
              hi: '$(2704 - 1728) / (64 - 48) = 976 / 16 = \\mathbf{61}$।',
            },
            smart: {
              en: 'C9: $52 \\to 7^2 = 49 \\to 4$; $12^3 \\to 0$. Num `4`, Den `16 -> 7`. So `4 ÷ 7 ≡ 4 × 4 = 16 -> 7`! Among `[72(9), 61(7), 57(3), 66(3)]`, ONLY **61** has C9 = 7!',
              hi: 'C9: $52 \\to 7^2 \\to 4$, $12^3 \\to 0$। हर $16 \\to 7$। अतः $4 \\div 7 \\equiv 4 \\times 4 = 7$! केवल **61** का C9 = 7 है!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-4-factors-remainders',
      number: '1.4',
      title: {
        en: 'Module 4: Factors (Count/Sum/Product), Trailing Zeroes & Remainders',
        hi: 'मॉड्यूल 4: गुणनखंड (संख्या/योग/गुणनफल), शून्यों की संख्या व शेषफल प्रमेय',
      },
      summaryTag: {
        en: 'Prime Power Factors • Odd/Even Divisors • ⌊n/5⌋ Zeroes • Negative Remainder (−1) & Binomial',
        hi: 'अभाज्य घात सूत्र • शून्यों की संख्या • ऋणात्मक शेषफल (−1) व द्विपद नियम',
      },
      boardCards: [
        {
          id: 'card-1-4-1',
          title: {
            en: '1. Prime Power Factor Formulas & Trailing Zeroes in n!',
            hi: '1. कुल, सम/विषम गुणनखंड, योग, गुणनफल व अंतिम शून्यों की संख्या',
          },
          formula: '$$N = 2^a \\cdot 3^b \\cdot 5^c \\implies \\text{Total} = (a+1)(b+1)(c+1), \\quad \\text{Zeroes}(n!) = \\lfloor n/5 \\rfloor + \\lfloor n/25 \\rfloor + \\dots$$',
          points: [
            { en: 'Odd Factors: Drop power of 2 completely → (b+1)(c+1)...', hi: 'विषम गुणनखंड (Odd Factors): 2 की घात पूरी तरह छोड़ दें → (b+1)(c+1)...।' },
            { en: 'Even Factors: Total − Odd  OR  a × (b+1)(c+1)...', hi: 'सम गुणनखंड (Even Factors): a × (b+1)(c+1)... या (कुल − विषम)।' },
            { en: 'Sum of Factors = (2⁰+...+2ᵃ)(3⁰+...+3ᵇ)... | Product = N^(Total / 2).', hi: 'योग = (2⁰+2¹+...)(3⁰+3¹+...) | गुणनफल = N^(कुल गुणनखंड / 2)।' },
            { en: 'Prime p has 2 factors (1, p); Square of prime p² has exactly 3 factors.', hi: 'किसी भी Prime संख्या के ठीक 2 गुणनखंड, तथा Prime वर्ग p² (4, 9, 25, 49) के ठीक 3 गुणनखंड होते हैं।' },
          ],
          example: {
            title: { en: 'Find Total, Odd, Even Factors of 360 & Zeroes in 100!', hi: 'बोर्ड उदाहरण: 360 के गुणनखंड व 100! के अंतिम शून्य ज्ञात करें' },
            basic: {
              en: '$360 = 2^3 \\cdot 3^2 \\cdot 5^1 \\Rightarrow$ Total $= (4)(3)(2) = \\mathbf{24}$; Odd $= (3)(2) = \\mathbf{6}$; Even $= 24 - 6 = \\mathbf{18}$.',
              hi: '$360 = 2^3 \\cdot 3^2 \\cdot 5^1 \\Rightarrow$ कुल $= 4 \\times 3 \\times 2 = \\mathbf{24}$; विषम $= 3 \\times 2 = \\mathbf{6}$; सम $= \\mathbf{18}$।',
            },
            smart: {
              en: 'Zeroes in `100!`: $\\lfloor 100/5 \\rfloor + \\lfloor 100/25 \\rfloor = 20 + 4 = \\mathbf{24}$ zeroes!',
              hi: '100! में अंतिम शून्य: $100 \\div 5 = 20$, $20 \\div 5 = 4 \\Rightarrow 20 + 4 = \\mathbf{24}$ शून्य!',
            },
          },
        },
        {
          id: 'card-1-4-2',
          title: {
            en: '2. Remainder Theorem (±1 Negative Trick) & Binomial Divisibility',
            hi: '2. Remainder Theorem (धनात्मक-ऋणात्मक ±1 शेषफल) व द्विपद नियम',
          },
          formula: '$$\\text{Rem}(A \\times B \\div D) = \\text{Rem}(r_A \\times r_B \\div D) \\quad|\\quad -r \\equiv (D - r) \\pmod D$$',
          points: [
            { en: 'Never multiply giant numbers first — take remainder of EACH term before multiplying/adding!', hi: 'बड़ी संख्याओं का पहले गुणा न करें — प्रत्येक पद का छोटा शेषफल निकाल कर हल करें।' },
            { en: 'Negative Remainder: 16 ÷ 17 gives +16 OR −1 (powers of ±1 compute in 1 sec!).', hi: 'ऋणात्मक शेषफल: 16 ÷ 17 का शेष −1 लें; यदि अंत में −r आए तो भाजक D जोड़ दें।' },
            { en: 'Binomial: (xⁿ − aⁿ) ALWAYS ÷ (x − a); (xⁿ + aⁿ) ÷ (x + a) when n is ODD.', hi: 'द्विपद नियम: (xⁿ − aⁿ) सदैव (x−a) से कटता है; (xⁿ + aⁿ) विषम n पर (x+a) से विभाज्य है।' },
          ],
          example: {
            title: { en: 'Find Remainder of 67⁶⁷ + 67 when divided by 68', hi: '67⁶⁷ + 67 को 68 से भाग देने पर शेषफल क्या होगा?' },
            basic: {
              en: 'Divide `67` by `68` ⇒ remainder is **`−1`**.\n$(-1)^{67} + (-1) = -1 - 1 = -2$. Add divisor `68`: $68 - 2 = \\mathbf{66}$.',
              hi: '67 ÷ 68 का शेषफल **`−1`**।\n$(-1)^{67} + (-1) = -2$। भाजक जोड़ें: $68 - 2 = \\mathbf{66}$!',
            },
            smart: {
              en: 'Tech 3 Shift 8 `(171 × 173) ÷ 17`: remainders `1` and `3` ⇒ $1 \\times 3 = \\mathbf{3}$!',
              hi: 'Tech 3 Shift 8: `(171 × 173) ÷ 17` में शेषफल $1 \\times 3 = \\mathbf{3}$ केवल 2 सेकंड में!',
            },
          },
        },
      ],
    },
    {
      id: 'mod-5-hcf-lcm',
      number: '1.5',
      diagramKey: 'ch1-hcf-lcm-map',
      title: {
        en: 'Module 5: Complete HCF–LCM Engine (Decimals, Fractions, Pairs & Remainders)',
        hi: 'मॉड्यूल 5: कम्प्लीट HCF व LCM (दशमलव, भिन्न, Co-Prime जोड़े व शेषफल)',
      },
      summaryTag: {
        en: 'Difference Trick • Decimal Equalization • Fraction Formula • Co-Prime Pairs 2^(k-1) • 4 Remainder Cases',
        hi: 'अंतर ट्रिक • दशमलव LCM • भिन्न HCF/LCM • जोड़ों की संख्या • 4 प्रमुख शेषफल केस',
      },
      boardCards: [
        {
          id: 'card-1-5-1',
          title: {
            en: '1. HCF Difference Trick, Decimals & Fractions Formulas',
            hi: '1. अंतर से HCF ट्रिक, दशमलव (1.3, 7.6, 0.13) व भिन्न सूत्र',
          },
          formula: '$$A \\times B = \\text{HCF} \\times \\text{LCM} \\quad|\\quad \\text{Frac HCF} = \\frac{\\text{HCF(Num)}}{\\text{LCM(Den)}}, \\quad \\text{LCM} = \\frac{\\text{LCM(Num)}}{\\text{HCF(Den)}}$$',
          points: [
            { en: 'Difference Trick: HCF of A, B ALWAYS equals or divides their smallest gap |A − B|!', hi: 'अंतर ट्रिक: HCF हमेशा संख्याओं के सबसे छोटे अंतर |A−B| को पूर्णतः विभाजित करता है।' },
            { en: 'Decimals (e.g. 1.3, 7.6, 0.13): Equalize decimals (×100 → 130, 760, 13) → solve → ÷100!', hi: 'दशमलव नियम: सभी में दशमलव स्थान बराबर करें (×100) → हल करें → वापस ÷100 करें!' },
            { en: 'Ratio a:b (co-prime) & HCF = H ⇒ Numbers = Ha, Hb & LCM = H·a·b.', hi: 'अनुपात a:b व HCF=H दिया हो ⇒ दोनों संख्याएँ Ha, Hb तथा LCM = H × a × b होगा।' },
            { en: 'Co-Prime Pairs (NTPC): A = Hx, B = Hy where HCF(x,y) = 1. Distinct primes k ⇒ 2^(k−1) pairs!', hi: 'जोड़ों की गिनती (NTPC): A=Hx, B=Hy (x,y सह-अभाज्य)। भिन्न अभाज्य k हों तो 2^(k−1) जोड़े बनते हैं!' },
          ],
        },
        {
          id: 'card-1-5-2',
          title: {
            en: '2. All 4 RRB Remainder Cases in HCF & LCM (1-Glance Chart)',
            hi: '2. HCF व LCM के 4 निश्चित RRB शेषफल केस (1-नज़र चार्ट)',
          },
          formula: '$$\\text{LCM Same Rem: } L + r \\quad|\\quad \\text{Diff Rem } (d_i - r_i = k): L - k \\quad|\\quad \\text{HCF Unknown Rem: HCF}(|a-b|, |b-c|)$$',
          points: [
            { en: 'LCM Case 1 (Same Rem r by divisors d): Answer = LCM(divisors) × m + r.', hi: 'केस 1 (समान शेष r बचे): उत्तर = LCM × m + r।' },
            { en: 'LCM Case 2 (Different r₁, r₂ with fixed gap k = d − r): Answer = LCM × m − k.', hi: 'केस 2 (अलग-अलग शेष पर d−r = k समान हो): उत्तर = LCM × m − k।' },
            { en: 'HCF Case 3 (Greatest dividing a, b leaving r₁, r₂): HCF(a − r₁, b − r₂).', hi: 'केस 3 (सबसे बड़ी भाजक जो r₁, r₂ शेष दे): पहले शेष घटाएं → HCF(a−r₁, b−r₂)।' },
            { en: 'HCF Case 4 (Same UNKNOWN remainder on a, b, c): HCF(|a−b|, |b−c|, |c−a|).', hi: 'केस 4 (अज्ञात समान शेष बचे): आपसी अंतरों का HCF लें = HCF(|a−b|, |b−c|, |c−a|)।' },
          ],
        },
      ],
    },
    {
      id: 'mod-6-vbodmas-simplification',
      number: '1.6',
      diagramKey: 'ch1-vbodmas-ladder',
      title: {
        en: 'Module 6: VBODMAS Precision, Algebraic Identities (4ab) & Ladders',
        hi: 'मॉड्यूल 6: VBODMAS क्रम, बीजगणितीय सूत्र (4ab) व सतत (सीढ़ी) भिन्न',
      },
      summaryTag: {
        en: 'Vinculum (¯) Trap • Of vs ÷ Priority • (a+b)²−(a−b)² = 4ab • Telescoping Series',
        hi: 'Bar Vinculum जाल • Of बनाम ÷ • 4ab / a³±b³ कैंसिलेशन • सीढ़ी भिन्न',
      },
      boardCards: [
        {
          id: 'card-1-6-1',
          title: {
            en: '1. VBODMAS Order & The Two Deadly Sign Traps',
            hi: '1. VBODMAS प्राथमिकता क्रम व 2 घातक चिह्न जाल (Vinculum + Of)',
          },
          formula: '$$\\text{V (Bar } \\overline{a-b}\\text{)} \\to (\\;) \\to \\{\\;\\} \\to [\\;] \\to \\text{Of} \\to \\div \\to \\times \\to + \\to -$$',
          points: [
            { en: 'Vinculum Trap: In 12 − (8 − 3)̄, the bar ONLY covers (8 − 3) = 5 (NOT −8!) ⇒ 12 − 5 = 7.', hi: 'बार (Vinculum) जाल: 12 − 8−3̄ में बार केवल 8−3 पर है (− चिह्न बाहर है!) ⇒ 12 − 5 = 7।' },
            { en: 'Of vs ÷ Trap: 24 ÷ 4 of 3 = 24 ÷ 12 = 2 (solve "of" BEFORE "÷"!).', hi: '"Of (का)" जाल: 24 ÷ 4 of 3 में पहले 4×3 = 12 हल होगा, फिर 24 ÷ 12 = 2!' },
            { en: 'Parallel Chunking: Split expression at top-level + and − outside brackets to prevent errors.', hi: 'ब्लॉक ट्रिक: कोष्ठक के बाहर वाले + व − से व्यंजक को छोटे ब्लॉकों में बाँटें — गलती कभी नहीं होगी।' },
          ],
        },
        {
          id: 'card-1-6-2',
          title: {
            en: '2. Algebraic Identities & Telescopic Fraction Series',
            hi: '2. सरलीकरण बीजगणितीय सूत्र (4ab, a³±b³) व टेलिस्कोपिक श्रेणी',
          },
          formula: '$$(a+b)^2 - (a-b)^2 = 4ab \\quad|\\quad \\frac{a^4 - b^4}{a^2 + b^2} = a^2 - b^2 \\quad|\\quad \\text{Series} = \\frac{1}{d}\\left(\\frac{1}{\\text{First}} - \\frac{1}{\\text{Last}}\\right)$$',
          points: [
            { en: '(a + b)² + (a − b)² = 2(a² + b²)  |  (a + b)² − (a − b)² = 4ab.', hi: '(a+b)² + (a−b)² = 2(a²+b²)  |  (a+b)² − (a−b)² = 4ab (ALP PYQ!)।' },
            { en: '(a³ + b³) / (a² − ab + b²) = a + b  |  (a³ − b³) / (a² + ab + b²) = a − b.', hi: '(a³ + b³) / (a² − ab + b²) = a + b — सीधे जोड़ें या घटाएं!' },
            { en: 'Telescoping Fractions: 1/(1·2) + 1/(2·3) + ... + 1/(9·10) = (1/1) × (1 − 1/10) = 9/10.', hi: 'टेलिस्कोपिक श्रेणी: अंतर d = 1 ⇒ सीधे (1/प्रथम − 1/अंतिम) सूत्र लगाएं!' },
          ],
        },
      ],
    },
    {
      id: 'mod-7-recurring-surds-indices',
      number: '1.7',
      title: {
        en: 'Module 7: Recurring Decimals (p/q), Indices & Surds Rationalisation',
        hi: 'मॉड्यूल 7: आवर्त बार दशमलव (p/q), घातांक नियम व करणी परिमेयीकरण',
      },
      summaryTag: {
        en: '9s & 0s Rule • Terminating 2^m·5^n • Group D Indices (x^z = y^k) • √(a ± 2√b) & Infinite Roots',
        hi: '9 व 0 हर नियम • सांत जाँच • Group D घातांक • करणी परिमेयीकरण',
      },
      boardCards: [
        {
          id: 'card-1-7-1',
          title: {
            en: '1. Recurring Bar Decimals (p/q) & Terminating Test',
            hi: '1. आवर्त बार दशमलव (p/q) सूत्र व सांत दशमलव जाँच',
          },
          formula: '$$0.\\overline{ab} = \\frac{ab}{99} \\quad|\\quad 0.a\\overline{bc} = \\frac{abc - a}{990} \\quad|\\quad \\text{Terminating } \\iff q = 2^m \\cdot 5^n$$',
          points: [
            { en: 'Numerator: Take all digits − non-bar part (e.g. 8.46̅ = (846 − 8)/99 = 838/99).', hi: 'अंश (Numerator): पूरी संख्या में से बिना बार वाला हिस्सा घटाएं (8.46̅ = (846−8)/99)।' },
            { en: 'Denominator: Count digits RIGHT of decimal — put 9 per bar digit & 0 per non-bar digit.', hi: 'हर (Denominator): दशमलव के दायीं ओर — जितने बार अंक उतने 9, बिना बार उतने 0।' },
            { en: 'Tail Cancel Trick: In 6.841̄ − 2.691̄, identical repeating .001̄ cancels leaving 4.15 = 3735/900!', hi: 'Tail Cut ट्रिक: 6.841̄ − 2.691̄ में दोनों का .001̄ आपस में कट गया ⇒ सीधे 4.15!' },
            { en: 'Terminating Check: Reduced p/q terminates ONLY if q has no prime other than 2 and 5.', hi: 'सांत दशमलव नियम: सरल भिन्न p/q तभी सांत (Terminating) होगा जब हर q के गुणनखंड केवल 2 व 5 हों।' },
          ],
        },
        {
          id: 'card-1-7-2',
          title: {
            en: '2. Group D Indices Law + Surds Conjugates & Infinite Roots',
            hi: '2. Group D घातांक नियम, संयुग्मी करणी व अनंत वर्गमूल श्रेणी',
          },
          formula: '$$B^p = x, B^q = y, x^z = y^k \\implies z = \\frac{q \\cdot k}{p} \\quad|\\quad \\frac{1}{\\sqrt{a} \\mp \\sqrt{b}} = \\frac{\\sqrt{a} \\pm \\sqrt{b}}{a - b}$$',
          points: [
            { en: 'Indices Trick: Ignore dummy base B completely — just equate pz = qk!', hi: 'Group D घातांक ट्रिक: समान आधार B को छोड़ें और सीधे pz = qk बराबर करें!' },
            { en: 'Conjugate Surd: Flip middle sign in numerator and divide by (a − b).', hi: 'परिमेयीकरण: बीच का चिह्न पलट कर ऊपर लिखें व नीचे अंतर (a − b) से भाग दें।' },
            { en: 'Square Root √(a ± 2√b): Find p, q where p+q = a and p×q = b ⇒ Ans = √p ± √q.', hi: 'वर्गमूल √(a ± 2√b): ऐसे p, q चुनें कि p+q = a व pq = b हो ⇒ उत्तर = √p ± √q।' },
            { en: 'Infinite Roots: If x = n(n+1), √(x + √(x + ...)) = n+1 (+ve) and n (−ve).', hi: 'अनंत करणी: यदि x = n(n+1) हो तो (+) में बड़ा गुणनखंड (n+1) तथा (−) में छोटा (n)।' },
          ],
        },
      ],
    },
  ],

  decisionMatrix: {
    title: {
      en: 'Exam-Hall 3-Second Decision Matrix (Which Method First?)',
      hi: 'एग्ज़ाम-हॉल 3-सेकंड निर्णय तालिका (पहले कौन-सी ट्रिक लगाएं?)',
    },
    rows: [
      {
        trigger: { en: 'Exact Arithmetic (+ / − / × / Squares / Cubes)', hi: 'सटीक अंकगणित (+ / − / × / 52² − 12³)' },
        firstCheck: { en: 'Unit Digit (UD) first → Split ties with C9 (Digital Sum)', hi: 'पहले Unit Digit जाँचें → टाई होने पर C9 (Digital Sum) लगाएं!' },
        avoid: { en: 'Never use C9 on "Approximate / Closest" Qs', hi: 'लगभग (Approximation) वाले प्रश्नों में C9 कभी न लगाएं!' },
      },
      {
        trigger: { en: 'Composite Divisibility (72, 88, 99, 24, 19×46)', hi: 'संयुक्त भाजक विभाज्यता (72, 88, 99, 24, 19×46)' },
        firstCheck: { en: 'Check Parity (÷2) & Last Digits (÷8/4/5) BEFORE 9 or 11', hi: '9/11 से पहले सम-विषम (÷2) व अंतिम अंक (÷8/4/5) lock करें!' },
        avoid: { en: 'Never split 24 as 4×6 (Use Co-Prime 8×3!)', hi: '24 को 4×6 में न तोड़ें — हमेशा Co-Prime 8×3 लें!' },
      },
      {
        trigger: { en: 'Divided by d leaving Remainder r / Difference k', hi: 'शेषफल आधारित LCM प्रश्न (r₁, r₂, r₃ बचे)' },
        firstCheck: { en: 'Check option remainder mod 5 (last digit) & mod 9 (C9) FIRST', hi: 'विकल्पों पर सीधे ÷5 (इकाई अंक) व ÷9 (C9) जाँचें — 3 सेकंड में उत्तर!' },
        avoid: { en: 'Avoid long division until < 3 options remain', hi: 'जब तक विकल्प न कटें, लंबी LCM भाग विधि से बचें।' },
      },
      {
        trigger: { en: 'HCF & LCM Product / Indices B^p=x, B^q=y', hi: 'HCF×LCM = A×B या Group D नियम B^p=x, B^q=y' },
        firstCheck: { en: 'Check Unit Digit of product OR equate pz = qk directly', hi: 'गुणनफल का Unit Digit मिलाएं या आधार छोड़कर सीधे pz = qk लगाएं!' },
        avoid: { en: 'Don’t multiply 3-digit × 3-digit fully unnecessarily', hi: 'अनावश्यक रूप से पूरा 3-अंकीय × 3-अंकीय गुणा अंत तक न करें!' },
      },
    ],
  },

  trapAlerts: [
    {
      title: { en: 'Trap 1: 1 is Prime / 0 is Natural or Odd', hi: 'जाल 1: 1 को Prime या 0 को प्राकृत/विषम मान लेना' },
      detail: { en: '1 = Neither Prime nor Composite. 0 = Even Whole Integer (not Natural).', hi: '1 न तो Prime है न Composite। 0 एक सम पूर्णांक (Even Integer) है, प्राकृत नहीं।' },
    },
    {
      title: { en: 'Trap 2: Unit Digit Power Remainder r=0 → Putting Power 0', hi: 'जाल 2: घात ÷ 4 पर शेष r=0 आने पर घात 0 रख देना' },
      detail: { en: 'When exponent ÷ 4 leaves r = 0, ALWAYS raise to power 4 (2⁴=6, 7⁴=1), NEVER power 0!', hi: 'शेष 0 आए तो कभी a⁰ = 1 न मानें — सदैव घात 4 (2⁴=6, 7⁴=1) लें!' },
    },
    {
      title: { en: 'Trap 3: Subtraction Borrow Error (...3 − ...7)', hi: 'जाल 3: Unit Digit में 3 − 7 = 4 लिख देना' },
      detail: { en: 'Always borrow +10 when left digit is smaller: 13 − 7 = 6!', hi: 'बायाँ अंक छोटा हो तो हमेशा +10 उधार लें: 13 − 7 = 6!' },
    },
    {
      title: { en: 'Trap 4: Doing ÷ BEFORE "Of (का)" in VBODMAS', hi: 'जाल 4: VBODMAS में "Of (का)" से पहले ÷ कर देना' },
      detail: { en: '18 ÷ 3 of 2 = 18 ÷ 6 = 3 (Of binds tighter than ÷!).', hi: '18 ÷ 3 of 2 में पहले 3×2 = 6 हल होगा ⇒ 18 ÷ 6 = 3!' },
    },
    {
      title: { en: 'Trap 5: Splitting 24 into (4×6) instead of (8×3)', hi: 'जाल 5: 24 को 4×6 में तोड़ना (Non Co-Prime गलती)' },
      detail: { en: '12 divides by 4 and 6 yet NOT 24! Always pick Co-Prime splits (8×3, 8×9, 8×11).', hi: '12 संख्या 4 व 6 दोनों से कटती है पर 24 से नहीं! सदैव Co-Prime (8×3) चुनें।' },
    },
    {
      title: { en: 'Trap 6: Decimal LCM Missing Zeros (1.3 vs 0.13)', hi: 'जाल 6: दशमलव LCM (1.3 बनाम 0.13) में 0 बराबर न करना' },
      detail: { en: 'Equalize ALL to max decimal places FIRST: 1.3 → 1.30 (×100 → 130, NOT 13!).', hi: 'पहले अधिकतम दशमलव स्थान बराबर करें: 1.3 को 1.30 (130) बनाएं, 13 नहीं!' },
    },
  ],

  tables: [
    {
      id: 'tbl-primes-ref',
      title: { en: 'Table 1: Primes (1–100), Must-Know Squares & Cubes', hi: 'तालिका 1: अभाज्य संख्याएँ (1–100), प्रमुख वर्ग व घन' },
      headers: { en: ['Category', 'Exact List / Values', 'Exam Fact'], hi: ['श्रेणी', 'सटीक मान', 'परीक्षा तथ्य / ट्रिक'] },
      rows: [
        [{ en: 'Primes 1–50 (15)', hi: 'Prime 1–50 (15)' }, { en: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47', hi: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47' }, { en: 'Sum = 328; 2 = ONLY even prime', hi: 'योग = 328; 2 = अकेली सम अभाज्य' }],
        [{ en: 'Primes 51–100 (10)', hi: 'Prime 51–100 (10)' }, { en: '53, 59, 61, 67, 71, 73, 79, 83, 89, 97', hi: '53, 59, 61, 67, 71, 73, 79, 83, 89, 97' }, { en: 'Total 1–100 = 25 (Sum = 1060)', hi: 'कुल = 25; सबसे बड़ी 2-अंकीय = 97' }],
        [{ en: 'Key Squares (16–29)', hi: 'प्रमुख वर्ग (16–29)' }, { en: '16²=256, 17²=289, 18²=324, 19²=361, 23²=529, 24²=576, 26²=676, 27²=729, 29²=841', hi: '16²=256, 17²=289, 18²=324, 19²=361, 23²=529, 24²=576, 26²=676, 27²=729, 29²=841' }, { en: 'No square ends in 2, 3, 7, 8', hi: 'अंत में कभी 2, 3, 7, 8 नहीं आता' }],
        [{ en: 'Key Cubes (6–17)', hi: 'प्रमुख घन (6–17)' }, { en: '6³=216, 7³=343, 8³=512, 9³=729, 11³=1331, 12³=1728, 13³=2197, 15³=3375, 17³=4913', hi: '6³=216, 7³=343, 8³=512, 9³=729, 11³=1331, 12³=1728, 13³=2197, 17³=4913' }, { en: '∛4913 = 17, ⁴√1296 = 6 (ALP 2025)', hi: '∛4913 = 17, ⁴√1296 = 6 (सीधा PYQ)' }],
      ],
    },
    {
      id: 'tbl-divisibility-rules',
      title: { en: 'Table 2: Quick Divisibility Matrix (2–99)', hi: 'तालिका 2: विभाज्यता नियम चीट-टेबल (2–99)' },
      headers: { en: ['Divisor', 'Rule', 'Example'], hi: ['भाजक', 'नियम', 'परीक्षा उदाहरण'] },
      rows: [
        [{ en: '2, 4, 8, 16', hi: '2, 4, 8, 16' }, { en: 'Last 1, 2, 3, 4 digits divisible', hi: 'अंतिम 1, 2, 3, 4 अंक जाँचें' }, { en: '17688 → 688÷8=86 ✓', hi: '17688 → 688÷8=86 ✓' }],
        [{ en: '3 & 9', hi: '3 व 9' }, { en: 'Sum of digits divisible (Cast out 9s)', hi: 'अंकों का योग ÷ 3 या 9' }, { en: '285219 → Sum = 27 ÷ 9 ✓', hi: '285219 → योग = 27 ÷ 9 ✓' }],
        [{ en: '11', hi: '11' }, { en: '|Odd Pos Sum − Even Pos Sum| = 0, 11k', hi: '|विषम − सम स्थान योग| = 0 या 11k' }, { en: '(2+5+1)−(8+2+9) = -11 ✓', hi: '(2+5+1)−(8+2+9) = -11 ✓' }],
        [{ en: '7, 11, 13', hi: '7, 11, 13' }, { en: 'xyzxyz (1001) or |Block2 − Block1|', hi: 'xyzxyz (1001) / 3-अंकीय ब्लॉक अंतर' }, { en: '168168 ÷ 7, 11, 13 ✓', hi: '168168 ÷ 7, 11, 13 ✓' }],
        [{ en: '72, 88, 99', hi: '72, 88, 99' }, { en: 'Co-Prime split: 8×9, 8×11, 9×11', hi: 'Co-Prime विभाजन: 8×9, 8×11, 9×11' }, { en: 'Always check 8 FIRST!', hi: 'हमेशा 8 पहले निश्चित करें!' }],
      ],
    },
    {
      id: 'tbl-unit-c9',
      title: { en: 'Table 3: Unit Digit Cyclicity & C9 Inversion Key', hi: 'तालिका 3: Unit Digit चक्र व C9 भाग व्युत्क्रम' },
      headers: { en: ['Item', 'Cycle / Map', 'Shortcut'], hi: ['अंक / विषय', 'चक्र / व्युत्क्रम नियम', 'शॉर्टकट'] },
      rows: [
        [{ en: '0, 1, 5, 6', hi: '0, 1, 5, 6' }, { en: 'Cycle = 1 (No Change)', hi: 'चक्र = 1 (अपरिवर्तित)' }, { en: '(2025)⁹⁹ → ends in 5', hi: '(2025)⁹⁹ → 5' }],
        [{ en: '4, 9', hi: '4, 9' }, { en: 'Cycle = 2 (Odd / Even)', hi: 'चक्र = 2 (सम / विषम)' }, { en: '4^Odd=4, 4^Even=6 | 9^Odd=9, 9^Even=1', hi: '4^Odd=4, 4^Even=6 | 9^Odd=9, 9^Even=1' }],
        [{ en: '2, 3, 7, 8', hi: '2, 3, 7, 8' }, { en: 'Cycle = 4 (Power mod 4)', hi: 'चक्र = 4 (घात ÷ 4)' }, { en: 'r = 0 ⇒ use Power 4!', hi: 'r = 0 आए तो घात 4 लें!' }],
        [{ en: 'C9 Division', hi: 'C9 भाग नियम' }, { en: '÷2≡×5, ÷4≡×7, ÷5≡×2, ÷7≡×4, ÷8≡×8', hi: '÷2≡×5, ÷4≡×7, ÷5≡×2, ÷7≡×4, ÷8≡×8' }, { en: '3, 6, 9 in Den: cancel 3 first!', hi: 'हर में 3, 6, 9 आने पर पहले 3 काटें' }],
      ],
    },
    {
      id: 'tbl-hcf-lcm-cases',
      title: { en: 'Table 4: HCF–LCM Remainder Laws & Algebraic Shortcuts', hi: 'तालिका 4: HCF–LCM शेषफल नियम व 4ab सर्वसमिकाएँ' },
      headers: { en: ['Case / Rule', 'Formula', 'Exam Tip'], hi: ['स्थिति / सूत्र', 'फॉर्मूला', 'कब प्रयोग करें'] },
      rows: [
        [{ en: 'Fractions HCF / LCM', hi: 'भिन्न HCF / LCM' }, { en: '$\\text{HCF}=\\frac{\\text{HCF(Num)}}{\\text{LCM(Den)}}$, $\\text{LCM}=\\frac{\\text{LCM(Num)}}{\\text{HCF(Den)}}$', hi: '$\\text{HCF}=\\frac{\\text{HCF(Num)}}{\\text{LCM(Den)}}$, $\\text{LCM}=\\frac{\\text{LCM(Num)}}{\\text{HCF(Den)}}$' }, { en: 'Reduce fraction first!', hi: 'पहले भिन्न को सरल करें' }],
        [{ en: 'Same Rem r (LCM)', hi: 'समान शेष r (LCM)' }, { en: 'LCM(divisors) × m + r', hi: 'LCM(भाजक) × m + r' }, { en: 'Check option − r first', hi: 'पहले Option − r जाँचें' }],
        [{ en: 'Fixed Gap k = d − r', hi: 'निश्चित अंतर k = d − r' }, { en: 'LCM(divisors) × m − k', hi: 'LCM(भाजक) × m − k' }, { en: 'NTPC 6-digit PYQ!', hi: 'पहले ÷5 व C9 जाँचें' }],
        [{ en: 'Same Unknown Rem', hi: 'अज्ञात समान शेष' }, { en: 'HCF(|a − b|, |b − c|, |c − a|)', hi: 'HCF(|a − b|, |b − c|, |c − a|)' }, { en: 'Remainder cancels in diff', hi: 'अंतर लेने पर शेष कट जाता है' }],
        [{ en: '4ab & a² − b²', hi: '4ab व a² − b²' }, { en: '(a+b)² − (a−b)² = 4ab', hi: '(a+b)² − (a−b)² = 4ab' }, { en: 'Direct ALP 2026 hit!', hi: 'ALP 2026 में सीधे पूछा गया!' }],
      ],
    },
    {
      id: 'tbl-recurring-surds',
      title: { en: 'Table 5: Bar Decimals (p/q) & Surds Shortcuts', hi: 'तालिका 5: बार दशमलव (p/q), घातांक व करणी शॉर्टकट' },
      headers: { en: ['Pattern', 'Formula', 'Quick Example'], hi: ['पैटर्न', 'फॉर्मूला', 'त्वरित उदाहरण'] },
      rows: [
        [{ en: 'Pure Bar $0.\\overline{ab}$', hi: 'शुद्ध बार $0.\\overline{ab}$' }, { en: '$\\frac{ab}{99}$', hi: '$\\frac{ab}{99}$' }, { en: '$0.\\overline{52} = \\frac{52}{99}$', hi: '$0.\\overline{52} = \\frac{52}{99}$' }],
        [{ en: 'Mixed Bar $0.a\\overline{bc}$', hi: 'मिश्रित बार $0.a\\overline{bc}$' }, { en: '$\\frac{abc - a}{990}$', hi: '$\\frac{abc - a}{990}$' }, { en: '$8.\\overline{46} = \\frac{846-8}{99} = \\frac{838}{99}$', hi: '$8.\\overline{46} = \\frac{838}{99}$' }],
        [{ en: '$\\sqrt{a \\pm 2\\sqrt{b}}$', hi: '$\\sqrt{a \\pm 2\\sqrt{b}}$' }, { en: '$\\sqrt{p} \\pm \\sqrt{q}$ ($p+q=a, pq=b$)', hi: '$\\sqrt{p} \\pm \\sqrt{q}$ ($p+q=a, pq=b$)' }, { en: '$\\sqrt{7+2\\sqrt{10}} = \\sqrt{5}+\\sqrt{2}$', hi: '$\\sqrt{7+2\\sqrt{10}} = \\sqrt{5}+\\sqrt{2}$' }],
        [{ en: 'Infinite Nest $\\sqrt{x \\pm \\dots}$', hi: 'अनंत करणी $\\sqrt{x \\pm \\dots}$' }, { en: '$x=n(n+1) \\implies +: n+1, -: n$', hi: '$x=n(n+1) \\implies +: n+1, -: n$' }, { en: '$\\sqrt{12+\\sqrt{12+\\dots}} = 4$', hi: '$\\sqrt{12+\\sqrt{12+\\dots}} = 4$' }],
      ],
    },
  ],

  typeWiseGroups: [
    {
      typeId: 'type-1-primes-parity',
      typeNumber: 1,
      title: { en: 'Type 1: Prime, Co-Prime, Sum & Parity Theorems', hi: 'Type 1: अभाज्य (Prime), सह-अभाज्य (Co-Prime) व योग नियम PYQs' },
      conceptHint: { en: 'Sum of 3 primes EVEN ⇒ one MUST be 2! Co-Prime ⇒ HCF = 1.', hi: '3 अभाज्यों का योग सम (EVEN) ⇒ एक पक्का 2 होगी! Co-Prime ⇒ HCF = 1।' },
      questionIds: ['ch1-pyq-1', 'ch1-pyq-2'],
    },
    {
      typeId: 'type-2-composite-divisibility',
      typeNumber: 2,
      title: { en: 'Type 2: Divisibility (9, 11, 22, 24, 19×46) & Missing Digit x', hi: 'Type 2: संयुक्त विभाज्यता (9, 11, 22, 24, 19×46) व लुप्त अंक x' },
      conceptHint: { en: 'Split composite into Co-Primes! Check Parity & 8 BEFORE 9 or 11.', hi: 'Co-Prime में तोड़ें (24 = 8×3); पहले सम/8 जाँचें, फिर 9 या 11 लगाएं!' },
      questionIds: ['ch1-pyq-3', 'ch1-pyq-4', 'ch1-pyq-5', 'ch1-pyq-6'],
    },
    {
      typeId: 'type-3-hcf-lcm-basics-decimals',
      typeNumber: 3,
      title: { en: 'Type 3: HCF/LCM Direct, Product & Decimals (1.3, 7.6, 0.13)', hi: 'Type 3: HCF/LCM गुणनफल सूत्र व दशमलव आधारित प्रश्न' },
      conceptHint: { en: 'A × B = HCF × LCM; Equalize decimal places before solving.', hi: 'A × B = HCF × LCM; दशमलव प्रश्नों में पहले शून्य बराबर कर के हल करें।' },
      questionIds: ['ch1-pyq-7', 'ch1-pyq-8', 'ch1-pyq-9', 'ch1-pyq-10'],
    },
    {
      typeId: 'type-4-hcf-lcm-ratio-pairs',
      typeNumber: 4,
      title: { en: 'Type 4: Ratio, HCF–LCM Equations & Co-Prime Pair Counting', hi: 'Type 4: अनुपात, LCM–HCF समीकरण व Co-Prime जोड़ों की संख्या' },
      conceptHint: { en: 'Ratio a:b ⇒ LCM = H·a·b; Pairs use ONLY gcd(x, y) = 1.', hi: 'अनुपात a:b ⇒ LCM = H·a·b; जोड़ों में केवल Co-Prime (gcd=1) गिनें।' },
      questionIds: ['ch1-pyq-11', 'ch1-pyq-12', 'ch1-pyq-13'],
    },
    {
      typeId: 'type-5-hcf-lcm-remainder-cases',
      typeNumber: 5,
      title: { en: 'Type 5: Remainder Cases (LCM − k & HCF Diff)', hi: 'Type 5: सबसे बड़ी/छोटी संख्या व शेषफल आधारित प्रश्न' },
      conceptHint: { en: 'Check remainder mod 5 (last digit) & mod 9 (C9) on options FIRST!', hi: 'विकल्पों पर पहले ÷5 (इकाई अंक) व ÷9 (C9) जाँचें → 3 सेकंड में उत्तर!' },
      questionIds: ['ch1-pyq-14', 'ch1-pyq-15'],
    },
    {
      typeId: 'type-6-bells-lights-sync',
      typeNumber: 6,
      title: { en: 'Type 6: Blinking Lights, Bells & Sync Problems', hi: 'Type 6: बत्तियाँ / घंटियाँ एक साथ बजने वाले प्रश्न' },
      conceptHint: { en: '"Together again" ALWAYS asks for LCM of periods!', hi: '"पुनः एक साथ" का अर्थ सदैव समयांतरालों का LCM निकालना होता है!' },
      questionIds: ['ch1-pyq-16'],
    },
    {
      typeId: 'type-7-unit-digit-perfect-sq',
      typeNumber: 7,
      title: { en: 'Type 7: Unit Digit & Perfect Square Properties', hi: 'Type 7: Unit Digit (इकाई अंक चक्र) व पूर्ण वर्ग नियम' },
      conceptHint: { en: 'Perfect square NEVER ends in 2, 3, 7, 8!', hi: 'किसी भी पूर्ण वर्ग (Perfect Square) के अंत में 2, 3, 7, 8 कभी नहीं आता!' },
      questionIds: ['ch1-pyq-17', 'ch1-pyq-18'],
    },
    {
      typeId: 'type-8-remainder-consecutive',
      typeNumber: 8,
      title: { en: 'Type 8: Remainder Theorem & Consecutive Natural Numbers', hi: 'Type 8: शेषफल प्रमेय व क्रमागत प्राकृत संख्याएँ' },
      conceptHint: { en: 'Reduce each term mod D; for n(n+1) = P, check squares near √P!', hi: 'प्रत्येक पद का छोटा शेषफल लें; n(n+1)=P में √P के समीप वर्ग देखें।' },
      questionIds: ['ch1-pyq-19', 'ch1-pyq-20'],
    },
    {
      typeId: 'type-9-vbodmas-brackets',
      typeNumber: 9,
      title: { en: 'Type 9: VBODMAS Nested Brackets (ALP CBT-1 & CBT-2)', hi: 'Type 9: VBODMAS कोष्ठक व चिह्न नियम (ALP CBT-1 व CBT-2)' },
      conceptHint: { en: 'Peel ( ) → { } → [ ], ÷ strictly before ×/−!', hi: 'क्रम: ( ) → { } → [ ], घटाने से पहले ÷ अनिवार्यतः पूरा करें!' },
      questionIds: ['ch1-pyq-21', 'ch1-pyq-22', 'ch1-pyq-23'],
    },
    {
      typeId: 'type-10-algebraic-simplification-ladder',
      typeNumber: 10,
      title: { en: 'Type 10: Powers, Algebraic Identities (4ab) & Ladders', hi: 'Type 10: घनमूल/घात, 4ab सर्वसमिका व सीढ़ी (सतत) भिन्न' },
      conceptHint: { en: 'Spot (a+b)² − (a−b)² = 4ab & simplify bottom-up in ladders!', hi: '(a+b)² − (a−b)² = 4ab पहचानें; सीढ़ी भिन्न को दशमलव में बदलें!' },
      questionIds: ['ch1-pyq-24', 'ch1-pyq-25', 'ch1-pyq-26'],
    },
    {
      typeId: 'type-11-recurring-decimals',
      typeNumber: 11,
      title: { en: 'Type 11: Recurring / Bar Decimals (p/q & Subtraction)', hi: 'Type 11: आवर्त बार दशमलव (p/q व घटाव)' },
      conceptHint: { en: '9 per bar digit, 0 per non-bar digit; matching bar tails cancel!', hi: 'बार जितने 9, बिना बार उतने 0; समान अंत (.001̄) सीधे कट जाते हैं!' },
      questionIds: ['ch1-pyq-27', 'ch1-pyq-28', 'ch1-pyq-29'],
    },
    {
      typeId: 'type-12-surds-indices',
      typeNumber: 12,
      title: { en: 'Type 12: Surds Rationalisation & Group D Laws of Indices', hi: 'Type 12: करणी परिमेयीकरण व Group D घातांक नियम' },
      conceptHint: { en: 'Ignore dummy base in B^p=x, B^q=y ⇒ equate pz = qk directly!', hi: 'समान आधार छोड़कर सीधे pz = qk बराबर करें; संयुग्मी में चिह्न पलटें!' },
      questionIds: ['ch1-pyq-30', 'ch1-pyq-31'],
    },
  ],

  pyqBank: [
    {
      id: 'ch1-pyq-1',
      examTag: 'RRB Group D Level-1 (10 Aug 2026 Shift 18)',
      level: 'level3_hard',
      question: {
        en: 'The sum of three prime numbers is 112. If one number exceeds the other by 36, what is the product of these numbers?',
        hi: 'तीन अभाज्य (Prime) संख्याओं का योग 112 है। यदि एक संख्या दूसरी से 36 अधिक है, तो इन संख्याओं का गुणनफल क्या होगा?',
      },
      options: { en: ['5678', '4516', '4826', '5402'], hi: ['5678', '4516', '4826', '5402'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**5402**). The three primes are **2, 37, and 73**.',
        keyConcept: 'Only Even Prime = 2 (Odd + Odd + Odd ≠ Even!)',
        pyqType: { en: 'Type 1 • Prime Parity Theorem', hi: 'Type 1 • अभाज्य सम-विषम नियम' },
        optionTrick: {
          en: 'Sum = 112 (Even) ⇒ one prime MUST be **2**! Remaining sum 110 with gap 36 ⇒ **37 & 73**. Unit digit of $2 \\times 37 \\times 73 \\to \\mathbf{2}$! Only **5402** ends in 2!',
          hi: 'योग 112 (Even) ⇒ एक Prime पक्का **2** होगी! शेष 110 में 36 अंतर ⇒ **37 व 73**। Unit Digit $2 \\times 7 \\times 3 \\to \\mathbf{2}$! केवल **5402** के अंत में 2 है!',
        },
        trapAlert: {
          en: '3 odd primes ALWAYS sum to an ODD number — picking 2 is mandatory here!',
          hi: '3 विषम (Odd) अभाज्य संख्याओं का योग कभी सम (112) नहीं हो सकता — अतः 2 लेना अनिवार्य है!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Basic Algebra + Parity', hi: 'विधि 1: Basic अवधारणा (स्टेप-बाय-स्टेप)' },
            audience: { en: 'Basic Learners', hi: 'बेसिक छात्र' },
            timeTag: '40 sec',
            tone: 'teal',
            steps: {
              en: '1) $a + b + c = 112$ (even). Since Odd + Odd + Odd = Odd, one prime MUST be $a = 2$.\n2) $b + (b + 36) = 110 \\Rightarrow 2b = 74 \\Rightarrow b = 37, c = 73$.\n3) Product $= 2 \\times 37 \\times 73 = \\mathbf{5402}$.',
              hi: '1) $a + b + c = 112$ (सम) ⇒ एक Prime $a = 2$ होगी।\n2) शेष दोनों $b + (b+36) = 110 \\Rightarrow b = 37, c = 73$।\n3) गुणनफल $= 2 \\times 37 \\times 73 = \\mathbf{5402}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Smart Split (110 ± 36)/2', hi: 'विधि 2: स्मार्ट एग्ज़ाम-हॉल विभाजन' },
            audience: { en: 'Smart Solver', hi: 'स्मार्ट विधि' },
            timeTag: '12 sec',
            tone: 'amber',
            steps: {
              en: 'Drop 2 → split 110 by gap 36: $(110-36)/2 = 37$ and **73**.\nMultiply $74 \\times 73 = 73^2 + 73 = 5329 + 73 = \\mathbf{5402}$.',
              hi: '2 हटाकर 110 को 36 अंतर में बाँटें: 37 व **73**।\n$74 \\times 73 = 73^2 + 73 = 5329 + 73 = \\mathbf{5402}$।',
            },
          },
          {
            id: 'trick',
            title: { en: 'Method 3: Unit Digit 3-Sec Elimination', hi: 'विधि 3: Unit Digit 3-Sec ट्रिक' },
            audience: { en: 'Ranker Speed', hi: 'टॉपर स्पीड' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Once you get `(2, 37, 73)`, do NOT multiply! Unit digit $= 2 \\times 7 \\times 3 \\to \\mathbf{2}$. Only Option D (**5402**) ends in 2!',
              hi: '`(2, 37, 73)` मिलते ही पूरा गुणा न करें! अंतिम अंक $2 \\times 7 \\times 3 \\to \\mathbf{2}$ ⇒ केवल **5402**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-2',
      examTag: 'RRB Group D Level-1 (18 Aug 2026 Shift 34)',
      level: 'level1_basic',
      question: {
        en: 'Which of the following pairs of numbers are co-prime?',
        hi: 'निम्नलिखित में से कौन-सा युग्म Co-Prime (सह-अभाज्य) है?',
      },
      options: { en: ['49, 217', '119, 239', '30, 201', '48, 111'], hi: ['49, 217', '119, 239', '30, 201', '48, 111'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**119, 239**). HCF = 1.',
        keyConcept: 'Co-Prime ⇒ HCF(a, b) = 1 (No common factor > 1)',
        pyqType: { en: 'Type 1 • Co-Prime Recognition', hi: 'Type 1 • Co-Prime पहचान' },
        optionTrick: {
          en: 'Spot common `3` or `7` immediately! `(30, 201)` & `(48, 111)` divide by 3; `(49, 217)` both divide by 7. Only `(119, 239)` left!',
          hi: 'उभयनिष्ठ `3` व `7` से काटें: `(30, 201)` व `(48, 111)` दोनों ÷ 3; `(49, 217)` ÷ 7 ⇒ केवल **(119, 239)** बचा!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Factor Test Each Pair', hi: 'विधि 1: प्रत्येक युग्म की गुणनखंड जाँच' },
            timeTag: '25 sec',
            tone: 'teal',
            steps: {
              en: '• (49, 217): both ÷ 7 ($49=7\\times7, 217=7\\times31$).\n• (30, 201) & (48, 111): both ÷ 3 (digit sums ÷ 3).\n• (119, 239): $119 = 7 \\times 17$; 239 divides by neither 7 nor 17 ⇒ **HCF = 1**!',
              hi: '• (49, 217) → 7 से कटते हैं; (30, 201) व (48, 111) → 3 से।\n• **(119, 239)**: $119 = 7\\times17$, पर 239 किसी से नहीं कटता ⇒ **Co-Prime!**',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Euclid 2k+1 Shortcut (3 sec)', hi: 'विधि 2: यूक्लिड 2×119 + 1 शॉर्टकट' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Spot **$239 = 2 \\times 119 + 1$**! Any $a$ and $ka + 1$ ALWAYS have $\\text{HCF} = 1$!',
              hi: 'देखें **$239 = 2 \\times 119 + 1$**! $a$ तथा $ka+1$ सदैव Co-Prime होते हैं (`HCF = 1`)!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-3',
      examTag: 'RRB ALP 2025 CBT-1 (18 Feb 2026 Shift 3)',
      level: 'level2_mod',
      question: {
        en: 'Find the smallest digit x such that the 6-digit number 28x219 is divisible by both 9 and 11.',
        hi: '6-अंकीय संख्या 28x219 दोनों 9 और 11 से विभाज्य हो, इसके लिए x का न्यूनतम अंक क्या होगा?',
      },
      options: { en: ['3', '5', '4', '6'], hi: ['3', '5', '4', '6'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**5**). Full number = `285219`.',
        keyConcept: 'Rule of 9 (Digit Sum) + Rule of 11 (Alternating Diff)',
        pyqType: { en: 'Type 2 • Missing Digit for 9 & 11', hi: 'Type 2 • लुप्त अंक x ज्ञात करना' },
        optionTrick: {
          en: 'Check **Rule of 9 ONLY**: drop `9` and `8+1=9` from `28x219`. Left: $2 + x + 2 = 4 + x$. Only single digit $x = \\mathbf{5}$ works!',
          hi: 'केवल **9 का नियम** लगाएं (`9` और `8+1` काटें): बचा $2+x+2 = 4+x$ ⇒ केवल **x = 5** एकल अंक संभव है!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Verify Both 9 & 11', hi: 'विधि 1: 9 व 11 दोनों से सत्यापन' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '1) Sum = $2 + 8 + x + 2 + 1 + 9 = 22 + x \\Rightarrow x = 27 - 22 = \\mathbf{5}$.\n2) Check 11 on `285219`: $(2+5+1) - (8+2+9) = 8 - 19 = -11$ (divisible by 11 ✓).',
              hi: '1) योग $= 22 + x \\Rightarrow x = \\mathbf{5}$ (`27`)।\n2) 11 जाँच (`285219`): $(2+5+1)-(8+2+9) = -11$ (÷11 ✓)।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cast-Out-9s Instant Lock (3 sec)', hi: 'विधि 2: Cast-Out-9s 3-Sec ट्रिक' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'In `28x219`, cancel `(9)` & `(8+1)`. Remainder sum $4 + x = 9 \\Rightarrow x = \\mathbf{5}$ in 3 sec!',
              hi: '`9` व `8+1` काटने पर $4+x = 9 \\Rightarrow \\mathbf{x = 5}$ (11 जाँचने की भी आवश्यकता नहीं)!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-4',
      examTag: 'RRB ALP 2026 CBT-1 (04 Nov 2026 Shift 6)',
      level: 'level2_mod',
      question: {
        en: 'Which of the following numbers is divisible by both 11 and 24?',
        hi: 'निम्नलिखित में से कौन-सी संख्या 11 और 24 दोनों से विभाज्य है?',
      },
      options: { en: ['16811', '17688', '19640', '19408'], hi: ['16811', '17688', '19640', '19408'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**17688**).',
        keyConcept: 'Split 24 = 8 × 3 (Co-Prime) — Check 3 Digit Sum First!',
        pyqType: { en: 'Type 2 • Composite 11 & 24', hi: 'Type 2 • 11 व 24 से विभाज्यता' },
        optionTrick: {
          en: 'Test `÷ 3` digit sum: `16811(17✗)`, **`17688(30✓)`**, `19640(20✗)`, `19408(22✗)`. ONLY **17688** divides by 3!',
          hi: 'केवल **`÷ 3` (अंकों का योग)** जाँचें: `16811(17✗)`, **`17688(30✓)`**, `19640(20✗)`, `19408(22✗)` — **3 सेकंड में उत्तर B**!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Check 8, 3 and 11', hi: 'विधि 1: 8, 3 व 11 की जाँच' },
            timeTag: '22 sec',
            tone: 'teal',
            steps: {
              en: '• `16811` is odd (fails 8).\n• `19640` (sum 20) & `19408` (sum 22) fail 3.\n• **`17688`**: `688 ÷ 8 = 86 ✓`, sum `30 ÷ 3 ✓`, `(1+6+8)−(7+8) = 0 ÷ 11 ✓`!',
              hi: '`17688`: `688÷8=86✓`, योग `30÷3✓`, तथा `(1+6+8)−(7+8) = 0 ÷ 11✓`!',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cast-Out-3 Trick (3 sec)', hi: 'विधि 2: 3 के नियम से 3-Sec ट्रिक' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Only **17688** has digit sum divisible by 3 (`30`) ⇒ Option B immediately!',
              hi: 'चारों विकल्पों में केवल **17688** ही `3` से कटता है ⇒ सीधे उत्तर B!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-5',
      examTag: 'RRB ALP 2026 CBT-1 (Shift 1)',
      level: 'level1_basic',
      question: {
        en: 'Which of the following numbers is divisible by both 9 and 22?',
        hi: 'निम्नलिखित में से कौन-सी संख्या 9 और 22 दोनों से विभाज्य है?',
      },
      options: { en: ['6464', '5544', '5152', '4642'], hi: ['6464', '5544', '5152', '4642'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**5544**).',
        keyConcept: '22 = 2 × 11 + Check Digit Sum ÷ 9',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Check 9, 2 and 11', hi: 'विधि 1: 9, 2 व 11 की जाँच' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Digit sums: `6464(20✗)`, **`5544(18✓)`**, `5152(13✗)`, `4642(16✗)`. Also `5544` is even & `(5+4)−(5+4)=0`.',
              hi: 'अंकों का योग केवल **5544** (`18`) का 9 से कटता है, सम भी है व `(5+4)−(5+4)=0` (÷11)!',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `aabb` Palindrome Check (3 sec)', hi: 'विधि 2: `aabb` पैटर्न व C9 जाँच' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '`5544` (`aabb` form) is always ÷ 11; check `5+5+4+4 = 18` ÷ 9 ✓!',
              hi: '`aabb` रूप सदैव 11 से कटता है; योग `18` ⇒ ÷ 9 ✓!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-6',
      examTag: 'RRB ALP 2026 CBT-1 (04 Nov 2026 Shift 5)',
      level: 'level3_hard',
      question: {
        en: 'Which of the following numbers is divisible by both 19 and 46?',
        hi: 'निम्नलिखित में से कौन-सी संख्या 19 और 46 दोनों से विभाज्य है?',
      },
      options: { en: ['17039', '17849', '15005', '16606'], hi: ['17039', '17849', '15005', '16606'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**16606**).',
        keyConcept: 'Always Check Even/Odd Parity BEFORE Dividing by Primes (19, 23)!',
        optionTrick: {
          en: '`46` is **EVEN**! Look at options: `17039` (Odd✗), `17849` (Odd✗), `15005` (Odd✗), **`16606` (ONLY EVEN OPTION ✓)** — 1-second knockout!',
          hi: '`46` **सम (EVEN)** है! विकल्प देखें: 3 विषम हैं, केवल **`16606` सम (EVEN) है** — 19 से भाग देने की आवश्यकता ही नहीं (1 सेकंड में उत्तर)!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Divide Check by 46 & 19', hi: 'विधि 1: 46 व 19 से सत्यापन' },
            timeTag: '40 sec',
            tone: 'teal',
            steps: {
              en: '$16606 \\div 46 = 361$, and $361 = 19 \\times 19 \\Rightarrow 16606 = 46 \\times 19^2$. Divisible by both ✓!',
              hi: '$16606 \\div 46 = 361 = 19^2$, दोनों से पूर्णतः विभाज्य है ✓।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Parity (÷ 2) 1-Sec Knockout', hi: 'विधि 2: सम-विषम 1-Sec नॉकआउट' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Multiple of even `46` MUST be even. A, B, C end in `9, 9, 5` (all odd) ⇒ **D (`16606`)** wins instantly!',
              hi: '46 का गुणज सम होगा ⇒ A(`9`), B(`9`), C(`5`) बाहर → केवल **D (`16606`)**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-7',
      examTag: 'RRB ALP 2025 CBT-1 (16 Feb 2026 Shift 3)',
      level: 'level1_basic',
      question: {
        en: 'Two positive integers have HCF = 12 and LCM = 924. If one of the numbers is 84, what is the other number?',
        hi: 'दो धनात्मक पूर्णांकों का HCF = 12 व LCM = 924 है। यदि एक संख्या 84 है, तो दूसरी संख्या क्या होगी?',
      },
      options: { en: ['96', '72', '132', '180'], hi: ['96', '72', '132', '180'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**132**).',
        keyConcept: 'Product of 2 Numbers = HCF × LCM',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Formula A × B = HCF × LCM', hi: 'विधि 1: सूत्र A × B = HCF × LCM' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$84 \\times B = 12 \\times 924 \\Rightarrow B = \\frac{12 \\times 924}{84} = \\frac{924}{7} = \\mathbf{132}$.',
              hi: '$B = \\frac{12 \\times 924}{84} = \\frac{924}{7} = \\mathbf{132}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: 11-Factor Cancellation (4 sec)', hi: 'विधि 2: 11-गुणनखंड विभाजन (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '`924 ÷ 11` (`9+4-2=11`), whereas `84` has no `11` factor ⇒ other number MUST divide by 11 ⇒ only **132**!',
              hi: '924 में `11` है पर 84 में नहीं ⇒ दूसरी संख्या `11` की गुणज होगी ⇒ केवल **132**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-8',
      examTag: 'RRB Group D Level-1 (06 Aug 2026 Shift 10)',
      level: 'level1_basic',
      question: {
        en: 'The HCF of two numbers is 11 and their LCM is 1870. If one number is 22, then find the unit’s digit of the other number.',
        hi: 'दो संख्याओं का HCF = 11 व LCM = 1870 है। यदि एक संख्या 22 है, तो दूसरी संख्या का Unit Digit (इकाई अंक) ज्ञात करें।',
      },
      options: { en: ['4', '7', '3', '5'], hi: ['4', '7', '3', '5'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**5**). Other number = 935.',
        keyConcept: 'Other = (HCF × LCM) / First Number',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Formula + Unit Digit', hi: 'विधि 1: सूत्र स्टेप-बाय-स्टेप' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Other $= \\frac{11 \\times 1870}{22} = \\frac{1870}{2} = 935 \\implies$ Unit digit = **5**.',
              hi: 'दूसरी संख्या $= \\frac{11 \\times 1870}{22} = 935 \\implies$ Unit digit = **5**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `...0 ÷ 2` Ending Check (2 sec)', hi: 'विधि 2: अंत-में-0 भाग ट्रिक (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`1870 ÷ 2`: number ending in `0` divided by `2` ends in **5** or **0** (`only 5 in options!`) ⇒ **5**!',
              hi: '1870 (अंत में 0) को 2 से भाग देने पर अंतिम अंक `5` या `0` आएगा (विकल्पों में केवल **5**)!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-9',
      examTag: 'RRB ALP 2025 CBT-1 (13 Feb 2026 Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'The LCM of the numbers 1.3, 7.6 and 0.13 is:',
        hi: 'संख्याओं 1.3, 7.6 तथा 0.13 का LCM क्या होगा?',
      },
      options: { en: ['102', '107', '98.8', '100'], hi: ['102', '107', '98.8', '100'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**98.8**).',
        keyConcept: 'Equalize Decimal Places (×100) -> Solve Integer LCM -> ÷100',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Scale by ×100 -> LCM -> ÷100', hi: 'विधि 1: ×100 करके पूर्णांक LCM' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '1) Write as `1.30, 7.60, 0.13` → integers `130, 760, 13`.\n2) $\\text{LCM}(130, 760, 13) = 13 \\times 76 \\times 10 = 9880$.\n3) Divide by 100 ⇒ **98.8**.',
              hi: '1) `130, 760, 13` का LCM $= 13 \\times 760 = 9880$।\n2) वापस ÷100 ⇒ **98.8**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `1.3 × 76` Decimal Ending Check (4 sec)', hi: 'विधि 2: `1.3 × 76` दशमलव जाँच' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '`0.13` divides `1.3` cleanly; `13` & `76` are co-prime ⇒ $1.3 \\times 76 = \\mathbf{98.8}$ (only `.8` option!).',
              hi: '`0.13` से `1.3` पूरा कटता है व 13, 76 सह-अभाज्य हैं ⇒ $1.3 \\times 76 = \\mathbf{98.8}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-10',
      examTag: 'RRB ALP 2025 CBT-1 (16 Feb 2026 Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'The LCM of the numbers 0.9, 3.7 and 0.54 is:',
        hi: '0.9, 3.7 तथा 0.54 का LCM ज्ञात करें:',
      },
      options: { en: ['99.9', '106', '105', '100'], hi: ['99.9', '106', '105', '100'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**99.9**).',
        keyConcept: 'Multiply by 100 -> Co-Prime 37 × 270 -> ÷100 = 99.9',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Scale ×100 Integer Method', hi: 'विधि 1: ×100 पूर्णांक विधि' },
            timeTag: '22 sec',
            tone: 'teal',
            steps: {
              en: 'Integers `90, 370, 54`: $\\text{LCM}(90, 54) = 270$; multiply co-prime 37 ⇒ $270 \\times 37 = 9990 \\div 100 = \\mathbf{99.9}$.',
              hi: '`90, 54` का LCM = 270; सह-अभाज्य 37 गुणा ⇒ $9990 \\div 100 = \\mathbf{99.9}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Divisible by 9 Check (2 sec)', hi: 'विधि 2: 9-गुणज शॉर्टकट (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'LCM MUST divide by 0.9 (`digit sum ÷ 9`!). Only **99.9** (`9+9+9=27`) divides by 9!',
              hi: 'उत्तर 0.9 का गुणज होगा (`अंक योग ÷ 9`) — केवल **99.9** (`27`) ही 9 से कटता है!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-11',
      examTag: 'RRB NTPC UG 2024 (14 Aug 2025 Shift 3)',
      level: 'level1_basic',
      question: {
        en: 'The ratio of two numbers is 5 : 6 and their HCF is 7. Find their LCM.',
        hi: 'दो संख्याओं का अनुपात 5 : 6 है और उनका HCF = 7 है। इनका LCM ज्ञात करें।',
      },
      options: { en: ['210', '42', '84', '35'], hi: ['210', '42', '84', '35'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**210**).',
        keyConcept: 'Ratio a:b (co-prime) & HCF H ⇒ LCM = H × a × b',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Find Numbers First', hi: 'विधि 1: संख्याएँ निकालकर LCM' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Numbers $= 5 \\times 7 = 35$ & $6 \\times 7 = 42 \\Rightarrow \\text{LCM}(35, 42) = \\mathbf{210}$.',
              hi: 'संख्याएँ $= 35, 42 \\Rightarrow \\text{LCM} = \\mathbf{210}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct Formula H × a × b (2 sec)', hi: 'विधि 2: सीधा सूत्र H × a × b (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '$7 \\times 5 \\times 6 = \\mathbf{210}$ in 1 line!',
              hi: '$7 \\times 5 \\times 6 = \\mathbf{210}$ (केवल 1 पंक्ति में)!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-12',
      examTag: 'RRB NTPC UG 2024 (18 Aug 2025 Shift 3)',
      level: 'level2_mod',
      question: {
        en: 'The LCM of two numbers is seven times their HCF. The difference between the HCF and LCM is 222. Find the product of the two numbers.',
        hi: 'दो संख्याओं का LCM उनके HCF का 7 गुना है तथा HCF व LCM का अंतर 222 है। दोनों संख्याओं का गुणनफल क्या होगा?',
      },
      options: { en: ['9158', '9086', '9276', '9583'], hi: ['9158', '9086', '9276', '9583'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**9583**).',
        keyConcept: 'Product = HCF × LCM = 7 × (HCF)²',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Solve HCF & LCM', hi: 'विधि 1: समीकरण हल विधि' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '$7H - H = 222 \\Rightarrow 6H = 222 \\Rightarrow H = 37, L = 259$.\nProduct $= 37 \\times 259 = \\mathbf{9583}$.',
              hi: '$6H = 222 \\Rightarrow H = 37, L = 259$। गुणनफल $= 37 \\times 259 = \\mathbf{9583}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Unit Digit of 7 × 37² (3 sec)', hi: 'विधि 2: Unit Digit 3-Sec ट्रिक' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$H = 222/6 = 37$. Product $= 7 \\times 37^2 \\to$ ends in $7 \\times 9 \\to \\mathbf{3}$. Only **9583** ends in 3!',
              hi: 'गुणनफल $= 7 \\times 37^2$ → अंतिम अंक $7 \\times 9 \\to \\mathbf{3}$! केवल **9583** के अंत में 3 है!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-13',
      examTag: 'RRB NTPC UG 2024 (19 Aug 2025 Shift 2)',
      level: 'level3_hard',
      question: {
        en: 'The HCF of two numbers is 9 and the product of the two numbers is 8100. How many pairs of numbers satisfy the given conditions?',
        hi: 'दो संख्याओं का HCF = 9 तथा गुणनफल = 8100 है। ऐसे कितने वैध युग्म (Pairs) संभव हैं?',
      },
      options: { en: ['2', '3', '5', '4'], hi: ['2', '3', '5', '4'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**2**). Pairs: (9, 900) and (36, 225).',
        keyConcept: 'Numbers = 9x, 9y with Co-Prime x, y ONLY ⇒ Formula 2^(k−1)',
        trapAlert: {
          en: '100 has 5 factor pairs, NOT all valid! Only co-prime pairs (1,100) & (4,25) maintain HCF = 9.',
          hi: '100 के 5 गुणनखंड युग्म बनते हैं पर (2,50), (5,20), (10,10) सह-अभाज्य नहीं हैं — केवल **2 युग्म** वैध हैं!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 9x · 9y = 8100 (Co-Prime Filter)', hi: 'विधि 1: 9x · 9y = 8100 व Co-Prime जाँच' },
            timeTag: '22 sec',
            tone: 'teal',
            steps: {
              en: '$81xy = 8100 \\Rightarrow xy = 100$. Co-prime pairs of 100: **(1, 100)** & **(4, 25)** ⇒ **2 pairs**.',
              hi: '$xy = 100$। इसके केवल **2 सह-अभाज्य युग्म** हैं: `(1, 100)` और `(4, 25)`!',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Distinct Prime Formula 2^(k−1) (3 sec)', hi: 'विधि 2: भिन्न अभाज्य 2^(k−1) सूत्र' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$xy = 100 = 2^2 \\times 5^2 \\implies$ distinct primes $k = 2$ (2 & 5). Pairs $= 2^{k-1} = 2^{2-1} = \\mathbf{2}$!',
              hi: '$100 = 2^2 \\times 5^2$ में $k = 2$ अभाज्य ⇒ युग्म $= 2^{k-1} = 2^1 = \\mathbf{2}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-14',
      examTag: 'RRB NTPC UG 2024 (19 Aug 2025 Shift 1)',
      level: 'level3_hard',
      question: {
        en: 'The largest six digit number which when divided by 3, 5, 7 and 9 leaves remainders 1, 3, 5 and 7, respectively, is:',
        hi: 'वह सबसे बड़ी 6-अंकीय संख्या जिसे 3, 5, 7 और 9 से भाग देने पर क्रमशः 1, 3, 5 और 7 शेष बचे?',
      },
      options: { en: ['999808', '999998', '999685', '999893'], hi: ['999808', '999998', '999685', '999893'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**999808**).',
        keyConcept: 'Constant Gap k = 2 ⇒ Multiple of LCM − 2 (or Option Mod 5 + Mod 9!)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: LCM(3,5,7,9)=315 Division', hi: 'विधि 1: LCM = 315 व 999999 भाग विधि' },
            timeTag: '35 sec',
            tone: 'teal',
            steps: {
              en: 'Gap $k = 3-1 = 2$. $\\text{LCM}(3,5,7,9) = 315$.\nLargest 6-digit multiple of 315: $999999 - 189 = 999810$.\nSubtract $k = 2 \\implies 999810 - 2 = \\mathbf{999808}$.',
              hi: 'अंतर $k=2$; $\\text{LCM} = 315$। सबसे बड़ा गुणज = 999810।\nउत्तर $= 999810 - 2 = \\mathbf{999808}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Mod 5 + Mod 9 Option Check (3 sec)', hi: 'विधि 2: ÷5 व C9 3-Sec विकल्प ट्रिक' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '1) ÷5 leaves 3 ⇒ ends in `3` or `8` (`999685✗`).\n2) ÷9 leaves 7 ⇒ C9 MUST be 7! Check: **999808 (`8+8=16 -> 7✓`)**, `999998(8✗)`, `999893(2✗)` ⇒ **Option A!**',
              hi: '÷5 शेष 3 (अंत `3/8`) व ÷9 शेष 7 (`C9 = 7`) ⇒ चारों में केवल **999808** (`C9=7`, अंत में `8`) पास होता है!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-15',
      examTag: 'RRB NTPC UG 2024 (08 Aug 2025 Shift 2)',
      level: 'level2_mod',
      question: {
        en: 'The greatest number that divides 131, 91, and 215, leaving remainders 8, 9, and 10 respectively, is:',
        hi: 'वह सबसे बड़ी संख्या जो 131, 91 और 215 को विभाजित कर क्रमशः 8, 9 और 10 शेषफल दे:',
      },
      options: { en: ['37', '57', '41', '61'], hi: ['37', '57', '41', '61'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**41**).',
        keyConcept: 'HCF(131−8, 91−9, 215−10) = HCF(123, 82, 205)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Subtract Remainders -> HCF', hi: 'विधि 1: शेषफल घटाकर HCF निकालें' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '$131-8 = 123$, $91-9 = 82$, $215-10 = 205 \\Rightarrow \\text{HCF}(123, 82, 205) = \\mathbf{41}$.',
              hi: '**123, 82, 205** का HCF $= \\mathbf{41}$ (`41×3, 41×2, 41×5`)।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Pick Smallest `91 − 9 = 82` (4 sec)', hi: 'विधि 2: सबसे छोटा अंतर 91 − 9 = 82 ट्रिक (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Compute ONLY $91 - 9 = 82$. Which option divides 82? Only **41** (`41 × 2 = 82`)!',
              hi: 'केवल $91 - 9 = 82$ निकालें — विकल्पों में अकेला **41** ही 82 को विभाजित करता है!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-16',
      examTag: 'RRB Group D Level-1 (03 Aug 2026 Shift 1)',
      level: 'level1_basic',
      question: {
        en: 'A blue light blinks every 6 seconds and a red light blinks every 9 seconds. After how many seconds will both lights blink together again?',
        hi: 'एक नीली बत्ती हर 6 सेकंड में तथा लाल बत्ती हर 9 सेकंड में चमकती है। दोनों फिर से एक साथ कितने सेकंड बाद चमकेंगी?',
      },
      options: { en: ['9 seconds', '18 seconds', '3 seconds', '12 seconds'], hi: ['9 सेकंड', '18 सेकंड', '3 सेकंड', '12 सेकंड'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**18 seconds**).',
        keyConcept: '"Together Again" Sync Problems = LCM',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Multiples Timeline', hi: 'विधि 1: गुणज समय-सारणी' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'Blue: `6, 12, 18...` | Red: `9, 18...` ⇒ First common sync = **18 seconds**.',
              hi: 'नीली: `6, 12, 18...` | लाल: `9, 18...` ⇒ पहली एक साथ झपक = **18 सेकंड**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct LCM(6, 9) (2 sec)', hi: 'विधि 2: सीधा LCM(6, 9) (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '$\\text{LCM}(6, 9) = \\mathbf{18\\text{ s}}$. (Trap warning: 3 s is HCF, NOT LCM!).',
              hi: '$\\text{LCM}(6, 9) = \\mathbf{18\\text{ s}}$ (सावधान: 3 s HCF है — जल्दबाजी में गलती न करें!)।',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-17',
      examTag: 'RRB Tech Gr-III 2024 (29 Dec 2024 Shift 2)',
      level: 'level1_basic',
      question: {
        en: "A perfect square number can never have the digit ______ at the units' place.",
        hi: 'किसी भी पूर्ण वर्ग (Perfect Square) संख्या के इकाई स्थान पर कौन-सा अंक कभी नहीं आ सकता?',
      },
      options: { en: ['4', '8', '1', '9'], hi: ['4', '8', '1', '9'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**8**).',
        keyConcept: 'Forbidden Unit Digits of Perfect Squares: 2, 3, 7, 8',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Test Squares 0² to 9²', hi: 'विधि 1: 0² से 9² के इकाई अंक जाँचें' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: 'Squares end ONLY in `{0, 1, 4, 5, 6, 9}`. Digits `{2, 3, 7, 8}` NEVER occur ⇒ **8**.',
              hi: 'पूर्ण वर्ग के अंत में केवल `0, 1, 4, 5, 6, 9` आते हैं — `2, 3, 7, 8` कभी नहीं ⇒ **8**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: 2-3-7-8 Recall Rule (1 sec)', hi: 'विधि 2: 2-3-7-8 त्वरित नियम (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Instant recall: **2, 3, 7, 8** cannot end a perfect square ⇒ **8**!',
              hi: '**2, 3, 7, 8** कभी किसी पूर्ण वर्ग के अंत में नहीं आते ⇒ **8**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-18',
      examTag: 'RRB ALP Cyclicity Master Drill',
      level: 'level2_mod',
      question: {
        en: 'What is the unit digit of $(2137)^{754}$?',
        hi: '$(2137)^{754}$ का इकाई अंक (Unit Digit) क्या होगा?',
      },
      options: { en: ['1', '3', '7', '9'], hi: ['1', '3', '7', '9'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**9**).',
        keyConcept: 'Cycle of 7 = 4: Divide Last 2 Digits of Power by 4',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Full Power Cycle of 7', hi: 'विधि 1: 7 का पूर्ण घात चक्र' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$7^1=7, 7^2=9, 7^3=3, 7^4=1$. $754 \\div 4$ leaves remainder 2 ⇒ $7^2 = 49 \\to \\mathbf{9}$.',
              hi: '7 की चक्रीयता 4 है (`7, 9, 3, 1`)। $754 \\div 4$ से शेष 2 ⇒ $7^2 = \\mathbf{9}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Last 2 Digits `54 ÷ 4` (2 sec)', hi: 'विधि 2: अंतिम 2 अंक `54 ÷ 4` (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Just check $54 \\bmod 4 = 2 \\implies 7^2 \\to \\mathbf{9}$!',
              hi: 'केवल $54 \\div 4$ का शेष 2 लें ⇒ $7^2 = \\mathbf{9}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-19',
      examTag: 'RRB Tech Gr-III 2024 (24 Dec 2024 Shift 3)',
      level: 'level1_basic',
      question: {
        en: 'What is the remainder when the product of 171 and 173 is divided by 17?',
        hi: '171 और 173 के गुणनफल को 17 से विभाजित करने पर शेषफल क्या आएगा?',
      },
      options: { en: ['11', '3', '1', '7'], hi: ['11', '3', '1', '7'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**3**).',
        keyConcept: 'Individual Remainder Product: Rem(A×B ÷ D) = Rem(r_A × r_B ÷ D)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Multiply & Divide', hi: 'विधि 1: गुणा व भाग विधि' },
            timeTag: '30 sec',
            tone: 'teal',
            steps: {
              en: '$171 \\times 173 = 29583$; $17 \\times 1740 = 29580$ ⇒ Remainder $= \\mathbf{3}$.',
              hi: '$29583 \\div 17$ में **29580** कटता है ⇒ शेषफल $= \\mathbf{3}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Remainder Theorem (2 sec)', hi: 'विधि 2: शेषफल प्रमेय (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`171 ÷ 17` gives **1**; `173 ÷ 17` gives **3** ⇒ $1 \\times 3 = \\mathbf{3}$!',
              hi: '`171 ÷ 17` से शेष `1`; `173 ÷ 17` से शेष `3` ⇒ $1 \\times 3 = \\mathbf{3}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-20',
      examTag: 'RRB NTPC UG 2024 (12 Aug 2025 Shift 1)',
      level: 'level1_basic',
      question: {
        en: 'The product of two consecutive natural numbers is 702. The greater of the two numbers is:',
        hi: 'दो क्रमागत प्राकृत संख्याओं का गुणनफल 702 है। उनमें से बड़ी संख्या कौन-सी है?',
      },
      options: { en: ['27', '38', '26', '24'], hi: ['27', '38', '26', '24'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**27**). Pair = `26 × 27`.',
        keyConcept: 'Split Product Around √P: 26² < 702 < 27²',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Quadratic x(x+1) = 702', hi: 'विधि 1: द्विघात समीकरण' },
            timeTag: '25 sec',
            tone: 'teal',
            steps: {
              en: '$x^2 + x - 702 = 0 \\Rightarrow (x+27)(x-26)=0 \\Rightarrow x = 26$, greater $= \\mathbf{27}$.',
              hi: '$(x+27)(x-26)=0 \\Rightarrow 26, 27 \\Rightarrow$ बड़ी संख्या = **27**।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Square Sandwich 26² < 702 < 27² (3 sec)', hi: 'विधि 2: वर्ग सीमा ट्रिक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$26^2 = 676 < 702 < 27^2 = 729 \\Rightarrow$ Pair is **26 × 27** ⇒ Greater = **27**!',
              hi: '$26^2=676 < 702 < 27^2=729 \\Rightarrow$ संख्याएँ 26 व 27 ⇒ बड़ी = **27**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-21',
      examTag: 'RRB ALP 2026 CBT-1 (Shift 3)',
      level: 'level1_basic',
      question: {
        en: 'Simplify: 75 − {18 ÷ 3 × (4 + 2) − 5 × 3} + 28 ÷ 7',
        hi: 'सरल करें (Simplify): 75 − {18 ÷ 3 × (4 + 2) − 5 × 3} + 28 ÷ 7',
      },
      options: { en: ['54', '56', '52', '58'], hi: ['54', '56', '52', '58'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**58**).',
        keyConcept: 'VBODMAS Order: ( ) -> ÷ -> × inside { }',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Bracket Peeling Step-by-Step', hi: 'विधि 1: कोष्ठक क्रम से हल करें' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '1) `(4+2) = 6` → `{18÷3×6 − 15} = {6×6 − 15} = 21`.\n2) `28÷7 = 4` → $75 - 21 + 4 = \\mathbf{58}$.',
              hi: '1) `(4+2) = 6` → `{6×6 − 15} = 21`।\n2) $75 - 21 + 4 = \\mathbf{58}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Parallel 3-Block Split (8 sec)', hi: 'विधि 2: समानांतर ब्लॉक विधि (8 sec)' },
            timeTag: '8 sec',
            tone: 'emerald',
            steps: {
              en: '`[75]` − `[36−15]` + `[4]` $= 79 - 21 = \\mathbf{58}$!',
              hi: '`[75] − [21] + [4] = 58`!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-22',
      examTag: 'RRB ALP 2025 CBT-2 Part A (28 Jul 2026 Shift 1)',
      level: 'level3_hard',
      question: {
        en: 'Simplify: 60 − {(-8) × (-16 − 19 − 2)} ÷ [5 × {2 + (-1) × (-1)}]',
        hi: 'सरल करें (Simplify): 60 − {(-8) × (-16 − 19 − 2)} ÷ [5 × {2 + (-1) × (-1)}]',
      },
      options: { en: ['594 / 15', '614 / 15', '608 / 15', '604 / 15'], hi: ['594 / 15', '614 / 15', '608 / 15', '604 / 15'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**604 / 15**).',
        keyConcept: 'Negative × Negative = Positive + Division BEFORE Subtraction!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Careful Sign + Brackets', hi: 'विधि 1: चिह्न व कोष्ठक क्रम विधि' },
            timeTag: '35 sec',
            tone: 'teal',
            steps: {
              en: '1) `{(-8) × (-37)} = +296`; `[5 × {2 + 1}] = 15`.\n2) $60 - \\frac{296}{15} = \\frac{900 - 296}{15} = \\mathbf{\\frac{604}{15}}$.',
              hi: '1) `{(-8)×(-37)} = +296`; `[5×3] = 15`।\n2) $60 - 296/15 = (900 - 296)/15 = \\mathbf{604/15}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `900 − 296` Last-Digit Speed (6 sec)', hi: 'विधि 2: अनुमान व इकाई अंक जाँच (6 sec)' },
            timeTag: '6 sec',
            tone: 'emerald',
            steps: {
              en: '$8 \\times 37 \\approx 300$ (`ends in 6`), so $900 - 296$ sits right above `600` ending in `4` ⇒ **604 / 15**!',
              hi: '$8 \\times 37 \\approx 300$, अतः $900 - 296$ सीधे `600` के ऊपर `4` अंत वाला ⇒ **604/15**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-23',
      examTag: 'RRB ALP 2026 CBT-1 (04 Nov 2026 Shift 4)',
      level: 'level2_mod',
      question: {
        en: 'Simplify: (52² - 12³) / (4³ - 16 × 3)',
        hi: 'सरल करें (Simplify): (52² - 12³) / (4³ - 16 × 3)',
      },
      options: { en: ['72', '61', '57', '66'], hi: ['72', '61', '57', '66'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**61**).',
        keyConcept: 'Factor Common 16 OR Solve in 3 Sec via C9!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Compute Squares & Cubes', hi: 'विधि 1: सीधा वर्ग/घन गणना विधि' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '$\\frac{2704 - 1728}{64 - 48} = \\frac{976}{16} = \\mathbf{61}$.',
              hi: '$\\frac{2704 - 1728}{64 - 48} = \\frac{976}{16} = \\mathbf{61}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Factor Out 16 First (7 sec)', hi: 'विधि 2: 16 कॉमन काटकर हल (7 sec)' },
            timeTag: '7 sec',
            tone: 'amber',
            steps: {
              en: 'Pull out `16`: $52^2 = 16\\times 169$, $12^3 = 16\\times 108$, Den = `16`. Answer $= 169 - 108 = \\mathbf{61}$!',
              hi: '`16` कॉमन काटें: $169 - 108 = \\mathbf{61}$!',
            },
          },
          {
            id: 'trick',
            title: { en: 'Method 3: C9 Digital Sum (3 sec)', hi: 'विधि 3: C9 डिजिटल सम (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Num C9 $= 7^2 - 0 = 4$; Den C9 $= 7$. `4 ÷ 7 ≡ 4 × 4 = 7`. Only **61** has digit sum 7!',
              hi: 'अंश C9 = `4`, हर C9 = `7` → `4 ÷ 7 ≡ 4 × 4 = 7`। केवल **61** के अंकों का योग 7 है!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-24',
      examTag: 'RRB ALP 2026 CBT-1 (04 Nov 2026 Shift 5)',
      level: 'level2_mod',
      question: {
        en: 'Simplify (17pq + 16q)² − (17pq − 16q)².',
        hi: 'सरल करें (Simplify): (17pq + 16q)² − (17pq − 16q)²',
      },
      options: { en: ['544pq²', '1088pq²', '544p²q²', '1088p²q'], hi: ['544pq²', '1088pq²', '544p²q²', '1088p²q'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**1088pq²**).',
        keyConcept: 'Identity: (a + b)² − (a − b)² = 4ab',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Expand Both Binomials', hi: 'विधि 1: पूर्ण वर्ग विस्तार विधि' },
            timeTag: '30 sec',
            tone: 'teal',
            steps: {
              en: '$289p^2q^2 + 544pq^2 + 256q^2 - (289p^2q^2 - 544pq^2 + 256q^2) = \\mathbf{1088pq^2}$.',
              hi: '$544pq^2 + 544pq^2 = \\mathbf{1088pq^2}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `4ab` Shortcut (3 sec)', hi: 'विधि 2: `4ab` सूत्र शॉर्टकट (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$4ab = 4(17pq)(16q) = 64 \\times 17\\,pq^2 = \\mathbf{1088pq^2}$!',
              hi: '$4ab = 4 \\times 17pq \\times 16q = \\mathbf{1088pq^2}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-25',
      examTag: 'RRB ALP 2026 CBT-1 (04 Nov 2026 Shift 6)',
      level: 'level2_mod',
      question: {
        en: 'Find the value of 48.3 − [7 + 1 / (7 + 1/7)] − [3 + 1 / (3 + 1/3)]',
        hi: 'मान ज्ञात करें: 48.3 − [7 + 1 / (7 + 1/7)] − [3 + 1 / (3 + 1/3)]',
      },
      options: { en: ['38.30', '31.75', '37.86', '46.18'], hi: ['38.30', '31.75', '37.86', '46.18'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**37.86**).',
        keyConcept: 'Convert Small Continued Fractions to Decimals Instantly',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Fraction -> Decimal Method', hi: 'विधि 1: भिन्न से दशमलव विधि' },
            timeTag: '25 sec',
            tone: 'teal',
            steps: {
              en: '1) $7 + \\frac{1}{50/7} = 7 + \\frac{7}{50} = 7.14$.\n2) $3 + \\frac{1}{10/3} = 3 + \\frac{3}{10} = 3.30$.\n3) $48.30 - 7.14 - 3.30 = \\mathbf{37.86}$.',
              hi: '1) `7 + 7/50 = 7.14` | `3 + 3/10 = 3.30`।\n2) $48.30 - 10.44 = \\mathbf{37.86}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cancel `.3` First (5 sec)', hi: 'विधि 2: `.3` पहले काटने की ट्रिक (5 sec)' },
            timeTag: '5 sec',
            tone: 'emerald',
            steps: {
              en: '`48.3 − 3.3 = 45` cleanly! Subtract `7.14` ⇒ **37.86**!',
              hi: '`48.3 − 3.3 = 45` → इसमें से `7.14` घटाया = **37.86**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-26',
      examTag: 'RRB ALP 2025 CBT-1 (18 Feb 2026 Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'Find the simplified value of (∛4913 / ⁴√1296) × (3 / 51) × 168',
        hi: 'सरल करें (Simplify): (∛4913 / ⁴√1296) × (3 / 51) × 168',
      },
      options: { en: ['38', '26', '30', '28'], hi: ['38', '26', '30', '28'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**28**).',
        keyConcept: '∛4913 = 17 and ⁴√1296 = 6',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Substitute Cube/4th Roots', hi: 'विधि 1: घनमूल व चतुर्थमूल मान रखें' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$\\frac{17}{6} \\times \\frac{3}{51} \\times 168 = \\frac{1}{2} \\times \\frac{1}{3} \\times 168 = \\frac{168}{6} = \\mathbf{28}$.',
              hi: '$\\frac{17}{6} \\times \\frac{3}{51} \\times 168 = \\frac{168}{6} = \\mathbf{28}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cross-Cancel 17×3 = 51 (4 sec)', hi: 'विधि 2: तुरंत 17×3 = 51 काटें (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '`4913` ends in `3` ⇒ `∛ = 17`. `17 × 3 = 51` cancels completely! Left: `168 ÷ 6 = 28`!',
              hi: '`17 × 3 = 51` पूरा कट गया! केवल `168 ÷ 6 = 28`!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-27',
      examTag: 'RRB Tech Gr-III 2024 (28 Dec 2024 Shift 2)',
      level: 'level1_basic',
      question: {
        en: 'Express $0.\\overline{52}$ in the form $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\neq 0$.',
        hi: '$0.\\overline{52}$ को $\\frac{p}{q}$ भिन्न के रूप में व्यक्त करें (जहाँ $p$, $q$ पूर्णांक व $q \\neq 0$):',
      },
      options: { en: ['$\\frac{53}{99}$', '$\\frac{50}{99}$', '$\\frac{52}{90}$', '$\\frac{52}{99}$'], hi: ['$\\frac{53}{99}$', '$\\frac{50}{99}$', '$\\frac{52}{90}$', '$\\frac{52}{99}$'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**52/99**).',
        keyConcept: '0.(ab)̅ = ab / 99',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 100x − x Equation', hi: 'विधि 1: 100x − x समीकरण विधि' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$x = 0.5252\\dots \\Rightarrow 100x = 52.52\\dots \\Rightarrow 99x = 52 \\Rightarrow \\mathbf{\\frac{52}{99}}$.',
              hi: '$99x = 52 \\Rightarrow x = \\mathbf{\\frac{52}{99}}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: 9s Rule (1 sec)', hi: 'विधि 2: बार-से-9 नियम (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '2 bar digits ⇒ `99` in denominator ⇒ **52 / 99**!',
              hi: '2 अंकों पर बार ⇒ नीचे `99` ⇒ **52 / 99**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-28',
      examTag: 'RRB Tech Gr-III 2024 (26 Dec 2024 Shift 1)',
      level: 'level1_basic',
      question: {
        en: 'The correct expression of $8.\\overline{46}$ in the fractional form is ______.',
        hi: '$8.\\overline{46}$ का सटीक भिन्न ($p/q$) रूप क्या होगा?',
      },
      options: { en: ['$\\frac{838}{99}$', '$\\frac{83}{99}$', '$\\frac{846}{99}$', '$\\frac{84}{99}$'], hi: ['$\\frac{838}{99}$', '$\\frac{83}{99}$', '$\\frac{846}{99}$', '$\\frac{84}{99}$'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**838/99**).',
        keyConcept: 'Mixed: (846 − 8) / 99 = 838 / 99 (Never forget to subtract 8!)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Split 8 + 46/99', hi: 'विधि 1: 8 + 46/99 विभाजन विधि' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$8 + \\frac{46}{99} = \\frac{792 + 46}{99} = \\mathbf{\\frac{838}{99}}$.',
              hi: '$8 + \\frac{46}{99} = \\frac{792 + 46}{99} = \\mathbf{\\frac{838}{99}}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `(846 − 8) / 99` (2 sec)', hi: 'विधि 2: `(846 − 8)/99` सूत्र (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '$\\frac{846 - 8}{99} = \\mathbf{\\frac{838}{99}}$ directly!',
              hi: 'सीधे $(846 - 8)/99 = \\mathbf{838/99}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-29',
      examTag: 'RRB ALP 2025 CBT-1 (16 Feb 2026 Shift 3)',
      level: 'level2_mod',
      question: {
        en: 'Evaluate 6.841̄ − 2.691̄.',
        hi: 'मान ज्ञात करें: 6.841̄ − 2.691̄ (ध्यान दें: बार केवल अंतिम अंक 1 पर है!)',
      },
      options: { en: ['3635/909', '3835/1100', '3735/900', '4035/900'], hi: ['3635/909', '3835/1100', '3735/900', '4035/900'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**3735/900**).',
        keyConcept: 'Identical Infinite Tails (.001̄) Cancel Completely → 4.15',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Convert Both over 900', hi: 'विधि 1: दोनों को /900 रूप में बदलें' },
            timeTag: '25 sec',
            tone: 'teal',
            steps: {
              en: '$6 + \\frac{757}{900} = \\frac{6157}{900}$; $2 + \\frac{622}{900} = \\frac{2422}{900} \\implies \\frac{6157-2422}{900} = \\mathbf{\\frac{3735}{900}}$.',
              hi: '$\\frac{6157}{900} - \\frac{2422}{900} = \\mathbf{\\frac{3735}{900}}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Tail Cancel (`6.84 − 2.69 = 4.15`) (3 sec)', hi: 'विधि 2: अनंत आवर्त भाग काट ट्रिक (`3 sec`)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Both end in `.00111...`, so tail cancels! Left: $6.84 - 2.69 = 4.15 = 4.15 \\times \\frac{900}{900} = \\mathbf{\\frac{3735}{900}}$!',
              hi: 'दोनों से `.00111...` कट गया! बचा $6.84 - 2.69 = 4.15 \\implies \\frac{4.15 \\times 900}{900} = \\mathbf{\\frac{3735}{900}}$!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-30',
      examTag: 'RRB ALP 2026 CBT-1 (04 Nov 2026 Shift 4)',
      level: 'level2_mod',
      question: {
        en: 'Simplify: 3 − √5 + 1/(√5 − √3) + 1/(√5 − √3)',
        hi: 'सरल करें (Simplify): 3 − √5 + 1/(√5 − √3) + 1/(√5 − √3)',
      },
      options: { en: ['3', '3 + √3', '2 + √5', '√3 − √5'], hi: ['3', '3 + √3', '2 + √5', '√3 − √5'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**3 + √3**).',
        keyConcept: 'Combine Identical Fractions Before Rationalising!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Merge & Rationalise', hi: 'विधि 1: जोड़कर परिमेयीकरण करें' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '$\\frac{2}{\\sqrt{5}-\\sqrt{3}} = \\frac{2(\\sqrt{5}+\\sqrt{3})}{5-3} = \\sqrt{5}+\\sqrt{3}$.\nAdd $3 - \\sqrt{5}$ ⇒ **3 + √3**.',
              hi: '$\\frac{2}{\\sqrt{5}-\\sqrt{3}} = \\sqrt{5}+\\sqrt{3}$।\n$(3-\\sqrt{5}) + (\\sqrt{5}+\\sqrt{3}) = \\mathbf{3 + \\sqrt{3}}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Gap `5−3=2` Instant Flip (3 sec)', hi: 'विधि 2: अंतर 2 कैंसिल व चिह्न पलटें (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Sum `2` cancels denominator gap `5 − 3 = 2`, leaving `+√5 + √3` ⇒ `−√5` cancels ⇒ **3 + √3**!',
              hi: '2 से अंतर `5−3=2` कट गया ⇒ `+√5 + √3` प्राप्त हुआ ⇒ `−√5` कटकर **3 + √3**!',
            },
          },
        ],
      },
    },
    {
      id: 'ch1-pyq-31',
      examTag: 'RRB Group D Level-1 (03 Aug 2026 Shift 1)',
      level: 'level2_mod',
      question: {
        en: 'Given that $113^{0.99} = x$, $113^{0.77} = y$ and $x^z = y^2$, then the value of $z$ is close to:',
        hi: 'यदि $113^{0.99} = x$, $113^{0.77} = y$ तथा $x^z = y^2$ है, तो $z$ का मान किसके निकटतम होगा?',
      },
      options: { en: ['1.48', '1.56', '3.04', '2.89'], hi: ['1.48', '1.56', '3.04', '2.89'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**1.56**). ($14/9 = 1.555...$)',
        keyConcept: 'Base Substitute: B^{pz} = B^{qk} ⇒ z = qk / p',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Substitute Base 113', hi: 'विधि 1: आधार समान करने की विधि' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$113^{0.99z} = 113^{1.54} \\implies 0.99z = 1.54 \\implies z = \\frac{154}{99} = \\frac{14}{9} \\approx \\mathbf{1.56}$.',
              hi: '$0.99z = 0.77 \\times 2 = 1.54 \\implies z = \\frac{154}{99} = \\frac{14}{9} \\approx \\mathbf{1.56}$।',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Skip Base 113 (`0.77:0.99 = 7:9`) (3 sec)', hi: 'विधि 2: आधार 113 छोड़ें ट्रिक (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Reduce `77 : 99 = 7 : 9` ⇒ $z = (7 \\times 2)/9 = 14/9 \\approx \\mathbf{1.56}$!',
              hi: '113 छोड़ें! `0.77 : 0.99 = 7 : 9` ⇒ $14/9 \\approx \\mathbf{1.56}$!',
            },
          },
        ],
      },
    },
  ],

  flashcards: [
    { front: { en: 'Smallest Prime vs Smallest Odd Composite?', hi: 'सबसे छोटी Prime बनाम सबसे छोटी विषम Composite?' }, back: { en: 'Prime = 2 (also ONLY even prime) | Odd Composite = 9 (1 = neither)', hi: 'Prime = 2 (अकेली सम अभाज्य) | विषम Composite = 9 (1 दोनों नहीं!)' } },
    { front: { en: 'Total Primes 1–100 & 1–50?', hi: '1–100 व 1–50 में कुल कितनी Prime संख्याएँ हैं?' }, back: { en: '1–50: 15 | 51–100: 10 | Total 1–100 = 25 (Sum = 1060)', hi: '1–50: 15 | 51–100: 10 | कुल = 25 (योग = 1060)' } },
    { front: { en: 'π vs 22/7 — Which is Rational?', hi: 'π और 22/7 में से Rational (परिमेय) कौन है?' }, back: { en: '22/7 = Rational (p/q) | π = Irrational', hi: '22/7 = Rational (p/q) | π = Irrational (अपरिमेय)' } },
    { front: { en: '72, 88, 99 Divisibility Split?', hi: '72, 88, 99 को किन गुणनखंडों में तोड़ें?' }, back: { en: 'Co-Prime pairs: 72 = 8×9 | 88 = 8×11 | 99 = 9×11 (Lock 8 FIRST!)', hi: 'Co-Prime: 72 = 8×9 | 88 = 8×11 | 99 = 9×11 (पहले 8 जाँचें!)' } },
    { front: { en: '6-digit `xyzxyz` (e.g. 437437) divides by?', hi: '`xyzxyz` (जैसे 437437) किन संख्याओं से सदैव कटती है?' }, back: { en: '7, 11, 13, and 1001 (7 × 11 × 13 = 1001)', hi: '7, 11, 13 व 1001 (7 × 11 × 13 = 1001)' } },
    { front: { en: 'Forbidden Unit Digits of Perfect Squares?', hi: 'पूर्ण वर्ग (Perfect Square) के अंत में क्या कभी नहीं आता?' }, back: { en: '2, 3, 7, 8 (and single trailing zero)', hi: '2, 3, 7, 8 (तथा अकेला शून्य)' } },
    { front: { en: 'Power ÷ 4 remainder = 0 ⇒ What power?', hi: 'घात ÷ 4 पर शेष r = 0 आए तो कौन-सी घात लें?' }, back: { en: 'Always raise to Power 4 (2⁴=6, 3⁴=1, 7⁴=1, 8⁴=6) — NEVER 0!', hi: 'सदैव घात 4 (2⁴=6, 3⁴=1, 7⁴=1, 8⁴=6) — कभी 0 नहीं!' } },
    { front: { en: 'C9 Division Map (÷2, ÷4, ÷5, ÷7, ÷8)?', hi: 'C9 भाग व्युत्क्रम शॉर्टकट तालिका?' }, back: { en: '÷2≡×5 | ÷4≡×7 | ÷5≡×2 | ÷7≡×4 | ÷8≡×8', hi: '÷2≡×5 | ÷4≡×7 | ÷5≡×2 | ÷7≡×4 | ÷8≡×8' } },
    { front: { en: 'Greatest divisor leaving SAME UNKNOWN remainder?', hi: 'समान अज्ञात शेषफल देने वाली सबसे बड़ी संख्या?' }, back: { en: 'HCF(|a − b|, |b − c|, |c − a|)', hi: 'HCF(|a − b|, |b − c|, |c − a|)' } },
    { front: { en: '360 Total Factors & 100! Trailing Zeroes?', hi: '360 के कुल गुणनखंड व 100! में अंतिम शून्य?' }, back: { en: '360 = 2³·3²·5¹ → 24 factors | 100! → 20 + 4 = 24 zeroes', hi: '360 → 24 गुणनखंड | 100! → ⌊100/5⌋ + ⌊100/25⌋ = 24 शून्य' } },
    { front: { en: '12 ÷ 3 of 2 = ?', hi: '12 ÷ 3 of 2 = ?' }, back: { en: '2 (Solve 3 of 2 = 6 BEFORE dividing!)', hi: '2 ("Of" हमेशा ÷ से पहले हल होता है: 12 ÷ 6 = 2)' } },
    { front: { en: '0.2(37)̅ in p/q form = ?', hi: '0.2(37)̅ का p/q भिन्न रूप = ?' }, back: { en: '(237 − 2) / 990 = 235 / 990 = 47 / 198', hi: '(237 − 2) / 990 = 235 / 990 = 47 / 198' } },
  ],
};
