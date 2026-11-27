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
  subjectLabel: { en: 'Mathematics', hi: 'Maths (Hinglish Class Mode)' },
  taxonomyChapterName: 'Number System, HCF/LCM & Simplification',
  sourceCode: 'Railway Maths Mastery • Ch 1: Number System, HCF–LCM & Simplification (Smart Board Edition)',
  blueprintSvgKey: 'ch1-blueprint-mindmap',
  hero: {
    imageUrl: '/maths-notes/ch1-number-system/hero-number-system.webp',
    caption: {
      en: 'Ch 1 Smart Board Engine: Classification, Divisibility (2–99), Unit Digit & C9, HCF–LCM, VBODMAS, Recurring Decimals & Surds.',
      hi: 'Ch 1 Smart Board: Number Tree, Divisibility (2–99), Unit Digit & C9, HCF–LCM, VBODMAS, Bar p/q & Surds.',
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
      label: { en: 'VBODMAS, Brackets, Algebraic & Surds Simplification', hi: 'VBODMAS, Brackets, Algebraic & Surds Simplification' },
      pct: 38,
      targetTab: 'concepts',
      targetSectionId: 'mod-6-vbodmas-simplification',
      targetPyqTypeId: 'type-9-vbodmas-brackets',
    },
    {
      label: { en: 'Divisibility Rules (8, 9, 11, 24, 72, 88, 99) & Digit x', hi: 'Divisibility Rules (8, 9, 11, 24, 72, 88, 99) & Digit x' },
      pct: 24,
      targetTab: 'concepts',
      targetSectionId: 'mod-2-divisibility',
      targetPyqTypeId: 'type-2-composite-divisibility',
    },
    {
      label: { en: 'HCF–LCM (Product, Ratio, Decimals, Bells & Remainder)', hi: 'HCF–LCM (Product, Ratio, Decimals, Bells & Remainder)' },
      pct: 20,
      targetTab: 'concepts',
      targetSectionId: 'mod-5-hcf-lcm',
      targetPyqTypeId: 'type-3-hcf-lcm-basics-decimals',
    },
    {
      label: { en: 'Prime, Co-Prime, Unit Digit, C9 Factors & Bar p/q', hi: 'Prime, Co-Prime, Unit Digit, C9 Factors & Bar p/q' },
      pct: 18,
      targetTab: 'concepts',
      targetSectionId: 'mod-3-unit-c9',
      targetPyqTypeId: 'type-7-unit-digit-perfect-sq',
    },
  ],
  title: {
    en: 'Ch 1: Number System, Divisibility, HCF–LCM & Simplification',
    hi: 'Ch 1: Number System, Divisibility, HCF–LCM & Simplification',
  },
  subtitle: {
    en: 'Smart Board Complete Class • 7 Rule Boards, 5 Interactive SVG Labs & 31 Real PYQs (Basic + Smart + 3-Sec Tricks)',
    hi: 'Smart Board Complete Class • All Concepts Point-to-Point + 5 SVG Labs + 31 Real PYQs (2–4 Methods Each)',
  },
  quickRevision60Sec: [
    {
      title: { en: 'Prime & Parity Gold Rules', hi: 'Prime & Parity Gold Rules (अभाज्य नियम)' },
      targetSectionId: 'mod-1-classification',
      points: {
        en: '• 1 = NEITHER Prime NOR Composite; 2 = ONLY Even Prime.\n• 4 = Smallest Composite | 9 = Smallest Odd Composite.\n• 1–100 Primes = 25 total (1–50: 15 | 51–100: 10).\n• Sum of 3 primes = EVEN ⇒ one MUST be 2!',
        hi: '• 1 na Prime hai na Composite; 2 akeli Even Prime hai.\n• 4 = Smallest Composite | 9 = Smallest Odd Composite.\n• 1–100 me 25 Primes (1–50: 15 | 51–100: 10).\n• 3 Primes ka sum EVEN ho ⇒ unme se ek pakka 2 hoga!',
      },
    },
    {
      title: { en: 'Composite Divisibility & C9', hi: 'Divisibility (72/88/99) & C9 Trick' },
      targetSectionId: 'mod-2-divisibility',
      points: {
        en: '• Split into Co-Prime ONLY: 72 = 8×9, 88 = 8×11, 99 = 9×11.\n• Always check 8 (last 3 digits) FIRST, then 9 or 11.\n• Rule of 11: |Odd Sum − Even Sum| = 0, 11, 22...\n• C9 (Mod 9): +/−/× me LHS C9 = Option C9!',
        hi: '• Hamesha Co-Prime me todo: 72 = 8×9, 88 = 8×11, 99 = 9×11.\n• Pehle 8 (last 3 digits) lock karo, phir 9 ya 11 check karo.\n• 11 ka rule: |Odd Sum − Even Sum| = 0 ya 11 multiple.\n• C9 Check: +/−/× me Question ka C9 = Option ka C9 (Approx me mana!).',
      },
    },
    {
      title: { en: 'Unit Digit & Remainder Rules', hi: 'Unit Digit (UD) & Remainder ±1' },
      targetSectionId: 'mod-3-unit-c9',
      points: {
        en: '• 0, 1, 5, 6 → Unit digit NEVER changes (power n ≥ 1).\n• 4^Odd=4, 4^Even=6  |  9^Odd=9, 9^Even=1.\n• 2, 3, 7, 8 → Divide power last 2 digits by 4 (r=0 ⇒ power 4).\n• Perfect square NEVER ends in 2, 3, 7, 8!',
        hi: '• 0, 1, 5, 6 → koi bhi power ho, Unit Digit SAME rahega.\n• 4^Odd=4, 4^Even=6  |  9^Odd=9, 9^Even=1.\n• 2, 3, 7, 8 → power ÷ 4 karein (remainder 0 ho toh power 4 lein!).\n• Kisi bhi Perfect Square ke end me 2, 3, 7, 8 kabhi nahi aata!',
      },
    },
    {
      title: { en: 'HCF–LCM & VBODMAS Shortcuts', hi: 'HCF–LCM, VBODMAS & Bar (p/q)' },
      targetSectionId: 'mod-5-hcf-lcm',
      points: {
        en: '• A × B = HCF × LCM  |  Decimal: ×10^k → solve → ÷10^k.\n• Unknown Same Rem: HCF(|a−b|, |b−c|, |c−a|).\n• VBODMAS: Bar (¯) → ( ) → { } → [ ] → Of → ÷ → × → +/−.\n• 0.a(bc)̅ = (abc − a) / 990 (9 per bar, 0 per non-bar).',
        hi: '• A × B = HCF × LCM  |  Decimals (1.3, 0.13) → ×100 kar ke solve.\n• Unknown Same Rem: HCF(|a−b|, |b−c|, |c−a|).\n• VBODMAS: "Of (का)" hamesha ÷ se PEHLE solve hota hai!\n• Bar p/q: Jitne digits par bar utne 9, bina bar utne 0.',
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
        hi: 'Module 1: Number Classification, Primes, Co-Primes & √N Test (संख्या परिवार)',
      },
      summaryTag: {
        en: 'Real Tree • Rational (p/q) vs Irrational • 0 & 1 Traps • √N Prime Check • Parity Theorem',
        hi: 'Zero-to-Pro Smart Board • p/q vs π Trap • 0, 1, 2, 4 Rules • √N Prime Check',
      },
      boardCards: [
        {
          id: 'card-1-1-1',
          title: {
            en: '1. Number Family Tree (Natural, Whole, Integers, Rational & Irrational)',
            hi: '1. Number Family Tree (प्राकृत, पूर्ण, पूर्णांक, परिमेय व अपरिमेय)',
          },
          formula: '$$\\text{Sum}(1..n) = \\frac{n(n+1)}{2} \\quad|\\quad \\frac{22}{7} = \\text{Rational } (p/q), \\quad \\pi = \\text{Irrational}$$',
          points: [
            { en: 'Natural (N): {1, 2, 3, ...} — counting starts from 1.', hi: 'Natural (N): {1, 2, 3, ...} — ginti 1 se shuru hoti hai.' },
            { en: 'Whole (W): {0, 1, 2, 3, ...} — 0 is Whole, NOT Natural.', hi: 'Whole (W): {0, 1, 2, 3, ...} — 0 Whole hai, Natural nahi.' },
            { en: 'Integers (Z): {..., -2, -1, 0, 1, 2, ...} — 0 is an EVEN integer (neither +ve nor -ve).', hi: 'Integers (Z): 0 ek EVEN integer hai (na +ve, na -ve).' },
            { en: 'Rational (p/q, q ≠ 0): Terminating (0.25), Repeating (0.333...), & 22/7.', hi: 'Rational (p/q, q ≠ 0): Terminating (0.25), Bar decimals (0.3̅), aur 22/7.' },
            { en: 'Irrational: Never ends, never repeats — e.g. π, √2, √3, e.', hi: 'Irrational: Jo na ruke na repeat ho — jaise π, √2, √3, e.' },
            { en: 'Face Value = digit itself (5 in 75482) | Place Value = position value (5000).', hi: 'Face Value = khud digit (5) | Place Value = sthaan maan (5000, diff = 4995).' },
          ],
          trap: {
            en: 'Exam Trap: 22/7 is RATIONAL (exact p/q), whereas π is IRRATIONAL!',
            hi: 'Exam Trap: 22/7 RATIONAL (परिमेय) hai, jabki π IRRATIONAL (अपरिमेय) hai!',
          },
          example: {
            title: { en: 'Classify: 0.121121112... vs 22/7', hi: 'Quick Check: 0.121121112... aur 22/7 kya hain?' },
            basic: {
              en: '22/7 is exact $p/q$ with $q = 7 \\neq 0$ ⇒ Rational.\n0.121121112... digits change (`12, 112, 1112`) ⇒ Irrational.',
              hi: '22/7 seedha $p/q$ form me hai ⇒ Rational.\n0.121121112... repeat nahi ho raha (`12, 112, 1112`) ⇒ Irrational.',
            },
            smart: {
              en: 'Instant Rule: Bar (¯) or Fraction $p/q$ = Rational | Unsolved √ or π = Irrational.',
              hi: 'Rule: Bar (¯) ya Fraction = Rational | Unsolved √ ya π = Irrational.',
            },
          },
        },
        {
          id: 'card-1-1-2',
          title: {
            en: '2. Prime, Composite, Co-Prime Pairs & √N Prime Test',
            hi: '2. Prime, Composite, Co-Prime & √N Prime Check Shortcut',
          },
          formula: '$$\\text{Prime} \\implies \\text{Exactly 2 factors } (1, N) \\quad|\\quad \\text{Co-Prime} \\implies \\text{HCF}(a, b) = 1$$',
          points: [
            { en: '1 is NEITHER Prime NOR Composite (has only 1 factor).', hi: '1 na Prime hai na Composite (sirf 1 factor hota hai).' },
            { en: '2 = Smallest Prime & ONLY Even Prime | 4 = Smallest Composite | 9 = Odd Composite.', hi: '2 = Sabse chhota & akela Even Prime | 4 = Smallest Composite | 9 = Odd Composite.' },
            { en: 'Primes 1–50 = 15 | 51–100 = 10 | Total 1–100 = 25 (Sum = 1060).', hi: 'Primes 1–50 = 15 | 51–100 = 10 | Total 1–100 = 25 (Sum = 1060).' },
            { en: 'Twin Primes (gap 2): 8 pairs from 1–100 — e.g. (3,5), (5,7), (11,13), (17,19).', hi: 'Twin Primes (gap 2): 1–100 me 8 pairs — e.g. (3,5), (5,7), (11,13).' },
            { en: 'Co-Prime Rule: Consecutive integers (n, n+1) or composite pairs like (8, 15) with HCF = 1.', hi: 'Co-Prime: HCF(a, b) = 1 (numbers khud prime hona zaroori nahi — jaise 8 aur 15!).' },
            { en: 'Parity Theorem: If sum of 3 primes is EVEN, one prime MUST be 2!', hi: 'Parity Rule: Agar 3 primes ka sum EVEN hai, toh unme ek number pakka 2 hoga!' },
          ],
          example: {
            title: { en: 'Is 137 Prime? (Check in 4 Seconds via √N)', hi: 'Board Demo: Kya 137 Prime hai? (√N Check Trick)' },
            basic: {
              en: 'Nearest square above 137 is $12^2 = 144$ ($\\sqrt{137} < 12$). Test primes $< 12$: `2, 3, 5, 7, 11`. None divides 137 ⇒ **PRIME**.',
              hi: '137 ke upar varg $12^2 = 144$ ($k=12$) ⇒ sirf `2, 3, 5, 7, 11` se divide check karein. Kisi se nahi kata ⇒ **137 Prime hai!**',
            },
            smart: {
              en: 'Compare 221: $\\sqrt{221} < 15$, check `2..13` → $13 \\times 17 = 221$ ⇒ NOT Prime.',
              hi: '221 check: $\\sqrt{221} < 15$, `13` se kat gaya ($13 \\times 17 = 221$) ⇒ Composite.',
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
        hi: 'Module 2: Divisibility (2–19), 1001 & Composite Splits (72, 88, 99)',
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
            hi: '1. Fast Tests: 2, 4, 8, 16 | 5, 25 | 3, 9 | 11',
          },
          formula: '$$\\div 8: \\text{Last 3 Digits} \\quad|\\quad \\div 9: \\text{Sum of Digits} \\quad|\\quad \\div 11: |\\text{Odd Pos} - \\text{Even Pos}| = 0, 11k$$',
          points: [
            { en: '2, 4, 8, 16: Check last 1, 2, 3, 4 digits respectively.', hi: '2, 4, 8, 16: End ke 1, 2, 3, 4 digits check karein.' },
            { en: '3-Sec Trick for 8: If 3rd-last digit EVEN → check last 2 digits; if ODD → last 2 digits + 4.', hi: '8 ka Fast Shortcut: 3rd-last digit EVEN ho toh sirf last 2 digits ÷ 8; ODD ho toh last 2 + 4 karein!' },
            { en: '3 & 9 (Casting Out 9s): Cancel digit pairs summing to 9 — leftover = exact remainder.', hi: '3 & 9: Sum karte waqt jahan 9 bane use kaat dein (Casting out 9s).' },
            { en: '11 Rule: Add alternating digits in same order (Odd Sum − Even Sum) = 0 or ±11, ±22.', hi: '11 Rule: Odd positions sum − Even positions sum = 0 ya ±11.' },
          ],
        },
        {
          id: 'card-1-2-2',
          title: {
            en: '2. Composite Splitting (72, 88, 99, 24) + Rules of 7, 13 & 19',
            hi: '2. Big Divisors Splitting (72, 88, 99) + 7, 13, 19 Osculator',
          },
          formula: '$$72 = 8 \\times 9 \\quad|\\quad 88 = 8 \\times 11 \\quad|\\quad 99 = 9 \\times 11 \\quad|\\quad 1001 = 7 \\times 11 \\times 13$$',
          points: [
            { en: 'Always break big divisor into CO-PRIME factors (HCF = 1): 24 = 8×3 (NEVER 4×6!).', hi: 'Hamesha CO-PRIME factors me todein: 24 = 8×3 (kabhi 4×6 mat lena!).' },
            { en: 'Lock Order: Check 8 / 4 / 5 FIRST (locks end digit x), THEN check 9 or 11 (finds y).', hi: 'Order Rule: Pehle 8 / 4 / 5 se last digit x fix karein, uske baad 9 ya 11 lagayein!' },
            { en: '1001 Magic: Any 6-digit xyzxyz (e.g. 458458) ALWAYS divides by 7, 11, and 13.', hi: '1001 Rule: xyzxyz (jaise 458458) hamesha 7, 11 aur 13 teeno se katta hai.' },
            { en: '7 Rule (−2 Osculator): Subtract 2×last digit (343 → 34 − 6 = 28 ÷ 7 ✓). For 13 (+4) & 19 (+2): Add.', hi: '7 Rule: Last digit × 2 ghatayein (343 → 34 − 6 = 28) | 13 me ×4 jodein | 19 me ×2 jodein.' },
          ],
          example: {
            title: { en: 'If 10-digit 5432y1749x ÷ 72, find (5x − 4y)', hi: 'Board Q: 5432y1749x agar 72 se divisible hai, toh (5x − 4y)?' },
            basic: {
              en: '1) Split $72 = 8 \\times 9$. Apply 8 on last 3 digits `49x`: $496 \\div 8 = 62 \\Rightarrow \\mathbf{x = 6}$.\n2) Sum for 9 (`cancel 5+4, 7+2, 9`): $3 + y + 1 + 4 + 6 = 14 + y \\Rightarrow \\mathbf{y = 4}$.\n3) $5(6) - 4(4) = 30 - 16 = \\mathbf{14}$.',
              hi: '1) $72 = 8 \\times 9$. Pehle `49x ÷ 8` se **$x = 6$** lock (`496÷8=62`).\n2) `9` ke pairs kaatein: बचा `3+y+1+4+6 = 14+y` ⇒ **$y = 4$** (`18`).\n3) $5(6) - 4(4) = 30 - 16 = \\mathbf{14}$!',
            },
            smart: {
              en: 'Fast check for `49x`: 3rd digit `4` is even → check `9x ÷ 8` directly ⇒ `96 ÷ 8` ⇒ $x = 6$ in 2 sec!',
              hi: '`49x` me `4` even hai, toh seedha `9x ÷ 8` socha ⇒ `96` ⇒ $x = 6$ in 2 sec!',
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
        hi: 'Module 3: Unit Digit Cyclicity + Digital Sum (C9) Speed Engine',
      },
      summaryTag: {
        en: '0/1/5/6, 4/9, 2/3/7/8 Cycles • Negative Borrow Trap • C9 Inverse Division & Where Not to Use C9',
        hi: 'Power Cyclicity • Negative Borrow Trap • C9 (Mod 9) Division Inversion & Warnings',
      },
      boardCards: [
        {
          id: 'card-1-3-1',
          title: {
            en: '1. Unit Digit (इकाई अंक) Power Rules & 2 Exam Traps',
            hi: '1. Unit Digit Power Rules & 2 Common Exam Traps',
          },
          formula: '$$0,1,5,6 \\to \\text{Same} \\quad|\\quad 4,9 \\to \\text{Odd/Even} \\quad|\\quad 2,3,7,8 \\to (\\text{Power } \\bmod 4) \\; [r=0 \\implies p=4]$$',
          points: [
            { en: 'Cycle 1 (0, 1, 5, 6): Unit digit NEVER changes for any natural power n ≥ 1.', hi: '0, 1, 5, 6: Koi bhi natural power n ≥ 1 ho, Unit Digit wahi rahega.' },
            { en: 'Cycle 2 (4 & 9): 4^Odd = 4, 4^Even = 6  |  9^Odd = 9, 9^Even = 1.', hi: '4 & 9: Odd power par 4, 9 aur Even power par 6, 1.' },
            { en: 'Cycle 4 (2, 3, 7, 8): Divide last 2 digits of power by 4. If r = 0, MUST use power 4 (NOT 0!).', hi: '2, 3, 7, 8: Power ke last 2 digits ÷ 4; remainder 0 aaye toh power 4 lein (0 nahi!).' },
            { en: 'Factorial (n!): 1! = 1, 2! = 2, 3! = 6, 4! = 4; all n ≥ 5 end in 0.', hi: 'Factorial: n ≥ 5 ke baad har n! ka Unit Digit 0 hota hai.' },
          ],
          trap: {
            en: 'Borrow Trap: In ...3 − ...7, NEVER write 4 as −4! Borrow 10: 13 − 7 = 6!',
            hi: 'Subtraction Trap: 3 − 7 = −4 aaye toh +10 borrow lein: 13 − 7 = 6!',
          },
        },
        {
          id: 'card-1-3-2',
          title: {
            en: '2. Digital Sum (C9 / Casting Out 9s) — 3-Second Calculation Checker',
            hi: '2. Digital Sum (C9 / Navank) — 3 Second Option Matcher',
          },
          formula: '$$\\div 2 \\equiv \\times 5 \\quad|\\quad \\div 4 \\equiv \\times 7 \\quad|\\quad \\div 5 \\equiv \\times 2 \\quad|\\quad \\div 7 \\equiv \\times 4 \\quad|\\quad \\div 8 \\equiv \\times 8$$',
          points: [
            { en: 'How to find C9: Add digits until 1 digit (9 = 0, drop any pairs summing to 9!).', hi: 'C9 nikalna: Digits ko single digit tak jodein (9 ko 0 maankar kaat dein).' },
            { en: 'Rule: Ignore decimal points & % signs — LHS C9 MUST match Option C9 in exact +, −, ×!', hi: 'Decimal aur % ignore karein — Question ka C9 = Sahi Option ka C9.' },
            { en: 'Division C9: Multiply top & bottom to turn denominator C9 into 1 (table above).', hi: 'Divide me har (Den) ka C9 = 1 banane ke liye upar-niche inverse multiply karein.' },
            { en: 'STRICTLY FORBIDDEN: Never apply C9 in Approximation Qs or Denominator C9 = 3, 6, 9!', hi: 'Kahan MANA hai: Approx/Nearest Qs me aur jab niche 3, 6, 9 bacha ho tab C9 na lagayein!' },
          ],
          example: {
            title: { en: 'ALP Shift 4 PYQ: Simplify (52² − 12³) / (4³ − 16 × 3)', hi: 'ALP Shift 4: (52² − 12³) / (4³ − 16 × 3) via C9' },
            basic: {
              en: '$(2704 - 1728) / (64 - 48) = 976 / 16 = \\mathbf{61}$.',
              hi: '$(2704 - 1728) / (64 - 48) = 976 / 16 = \\mathbf{61}$.',
            },
            smart: {
              en: 'C9: $52 \\to 7^2 = 49 \\to 4$; $12^3 \\to 0$. Num `4`, Den `16 -> 7`. So `4 ÷ 7 ≡ 4 × 4 = 16 -> 7`! Among `[72(9), 61(7), 57(3), 66(3)]`, ONLY **61** has C9 = 7!',
              hi: 'C9: $52 \\to 7^2 \\to 4$, $12^3 \\to 0$. Den $16 \\to 7$. So $4 \\div 7 \\equiv 4 \\times 4 = 7$! Sirf **61** ka C9 = 7 hai!',
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
        hi: 'Module 4: Factors, Trailing Zeroes (n!) & Remainder Theorem',
      },
      summaryTag: {
        en: 'Prime Power Factors • Odd/Even Divisors • ⌊n/5⌋ Zeroes • Negative Remainder (−1) & Binomial',
        hi: 'गुणनखंड सूत्र • शून्यों की संख्या • Negative Remainder (−1) ट्रिक',
      },
      boardCards: [
        {
          id: 'card-1-4-1',
          title: {
            en: '1. Prime Power Factor Formulas & Trailing Zeroes in n!',
            hi: '1. Total / Odd / Even Factors, Sum, Product & Trailing Zeroes',
          },
          formula: '$$N = 2^a \\cdot 3^b \\cdot 5^c \\implies \\text{Total} = (a+1)(b+1)(c+1), \\quad \\text{Zeroes}(n!) = \\lfloor n/5 \\rfloor + \\lfloor n/25 \\rfloor + \\dots$$',
          points: [
            { en: 'Odd Factors: Drop power of 2 completely → (b+1)(c+1)...', hi: 'Odd Factors: 2 ki power chhod kar baaki powers me +1 karke multiply karein.' },
            { en: 'Even Factors: Total − Odd  OR  a × (b+1)(c+1)...', hi: 'Even Factors: a × (b+1)(c+1)... (ya Total − Odd).' },
            { en: 'Sum of Factors = (2⁰+...+2ᵃ)(3⁰+...+3ᵇ)... | Product = N^(Total / 2).', hi: 'Sum = (2⁰+2¹+...)(3⁰+3¹+...) | Product = N^(Total/2).' },
            { en: 'Prime p has 2 factors (1, p); Square of prime p² has exactly 3 factors.', hi: 'Har Prime ke 2 factors hote hain; Prime square (4, 9, 25, 49) ke theek 3 factors.' },
          ],
          example: {
            title: { en: 'Find Total, Odd, Even Factors of 360 & Zeroes in 100!', hi: 'Board Example: 360 ke Factors & 100! ke Trailing Zeroes' },
            basic: {
              en: '$360 = 2^3 \\cdot 3^2 \\cdot 5^1 \\Rightarrow$ Total $= (4)(3)(2) = \\mathbf{24}$; Odd $= (3)(2) = \\mathbf{6}$; Even $= 24 - 6 = \\mathbf{18}$.',
              hi: '$360 = 2^3 \\cdot 3^2 \\cdot 5^1 \\Rightarrow$ Total $= 4 \\times 3 \\times 2 = \\mathbf{24}$; Odd $= 3 \\times 2 = \\mathbf{6}$; Even $= \\mathbf{18}$.',
            },
            smart: {
              en: 'Zeroes in `100!`: $\\lfloor 100/5 \\rfloor + \\lfloor 100/25 \\rfloor = 20 + 4 = \\mathbf{24}$ zeroes!',
              hi: '100! me Zeroes: $100 \\div 5 = 20$, $20 \\div 5 = 4 \\Rightarrow 20 + 4 = \\mathbf{24}$ zeroes!',
            },
          },
        },
        {
          id: 'card-1-4-2',
          title: {
            en: '2. Remainder Theorem (±1 Negative Trick) & Binomial Divisibility',
            hi: '2. Remainder Theorem (±1 Negative Remainder) & Binomial Rules',
          },
          formula: '$$\\text{Rem}(A \\times B \\div D) = \\text{Rem}(r_A \\times r_B \\div D) \\quad|\\quad -r \\equiv (D - r) \\pmod D$$',
          points: [
            { en: 'Never multiply giant numbers first — take remainder of EACH term before multiplying/adding!', hi: 'Pehle multiply na karein — har term ka chhota remainder nikal kar operation lagayein.' },
            { en: 'Negative Remainder: 16 ÷ 17 gives +16 OR −1 (powers of ±1 compute in 1 sec!).', hi: 'Negative Remainder: 16 ÷ 17 ka shesh −1 lein; agar last me −r aaye toh D add kar dein.' },
            { en: 'Binomial: (xⁿ − aⁿ) ALWAYS ÷ (x − a); (xⁿ + aⁿ) ÷ (x + a) when n is ODD.', hi: 'Binomial: (xⁿ − aⁿ) hamesha (x−a) se katta hai; (xⁿ + aⁿ) odd n par (x+a) se katta hai.' },
          ],
          example: {
            title: { en: 'Find Remainder of 67⁶⁷ + 67 when divided by 68', hi: '67⁶⁷ + 67 ko 68 se divide karne par remainder?' },
            basic: {
              en: 'Divide `67` by `68` ⇒ remainder is **`−1`**.\n$(-1)^{67} + (-1) = -1 - 1 = -2$. Add divisor `68`: $68 - 2 = \\mathbf{66}$.',
              hi: '67 ÷ 68 ka remainder **`−1`**.\n$(-1)^{67} + (-1) = -2$. Divisor jodein: $68 - 2 = \\mathbf{66}$!',
            },
            smart: {
              en: 'Tech 3 Shift 8 `(171 × 173) ÷ 17`: remainders `1` and `3` ⇒ $1 \\times 3 = \\mathbf{3}$!',
              hi: 'Tech 3 Shift 8: `(171 × 173) ÷ 17` me remainder $1 \\times 3 = \\mathbf{3}$ in 2 seconds!',
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
        hi: 'Module 5: HCF & LCM Complete Engine (Decimals, Fractions, Pairs & Remainder Cases)',
      },
      summaryTag: {
        en: 'Difference Trick • Decimal Equalization • Fraction Formula • Co-Prime Pairs 2^(k-1) • 4 Remainder Cases',
        hi: 'Difference Trick • Decimal LCM • Fraction HCF/LCM • Pair Counting • 4 Remainder Cases',
      },
      boardCards: [
        {
          id: 'card-1-5-1',
          title: {
            en: '1. HCF Difference Trick, Decimals & Fractions Formulas',
            hi: '1. Difference HCF Trick, Decimals (1.3, 7.6, 0.13) & Fractions',
          },
          formula: '$$A \\times B = \\text{HCF} \\times \\text{LCM} \\quad|\\quad \\text{Frac HCF} = \\frac{\\text{HCF(Num)}}{\\text{LCM(Den)}}, \\quad \\text{LCM} = \\frac{\\text{LCM(Num)}}{\\text{HCF(Den)}}$$',
          points: [
            { en: 'Difference Trick: HCF of A, B ALWAYS equals or divides their smallest gap |A − B|!', hi: 'Difference Trick: HCF hamesha numbers ke sabse chhote gap |A−B| ko divide karta hai.' },
            { en: 'Decimals (e.g. 1.3, 7.6, 0.13): Equalize decimals (×100 → 130, 760, 13) → solve → ÷100!', hi: 'Decimals: Sabme max decimal places barabar karein (×100) → solve → wapas ÷100 karein!' },
            { en: 'Ratio a:b (co-prime) & HCF = H ⇒ Numbers = Ha, Hb & LCM = H·a·b.', hi: 'Ratio a:b aur HCF=H diya ho ⇒ LCM = H × a × b seedhe nikalta hai.' },
            { en: 'Co-Prime Pairs (NTPC): A = Hx, B = Hy where HCF(x,y) = 1. Distinct primes k ⇒ 2^(k−1) pairs!', hi: 'Pairs Count: A=Hx, B=Hy (x,y co-prime). Distinct primes k ho toh 2^(k−1) pairs bante hain!' },
          ],
        },
        {
          id: 'card-1-5-2',
          title: {
            en: '2. All 4 RRB Remainder Cases in HCF & LCM (1-Glance Chart)',
            hi: '2. HCF & LCM ke 4 Confirm RRB Remainder Cases',
          },
          formula: '$$\\text{LCM Same Rem: } L + r \\quad|\\quad \\text{Diff Rem } (d_i - r_i = k): L - k \\quad|\\quad \\text{HCF Unknown Rem: HCF}(|a-b|, |b-c|)$$',
          points: [
            { en: 'LCM Case 1 (Same Rem r by divisors d): Answer = LCM(divisors) × m + r.', hi: 'Case 1 (Divisible leaving same rem r): LCM × m + r.' },
            { en: 'LCM Case 2 (Different r₁, r₂ with fixed gap k = d − r): Answer = LCM × m − k.', hi: 'Case 2 (Alag-alag rem par d−r = k barabar): LCM × m − k.' },
            { en: 'HCF Case 3 (Greatest dividing a, b leaving r₁, r₂): HCF(a − r₁, b − r₂).', hi: 'Case 3 (Greatest divisor leaving r₁, r₂): Pehle r₁, r₂ ghatayein → HCF(a−r₁, b−r₂).' },
            { en: 'HCF Case 4 (Same UNKNOWN remainder on a, b, c): HCF(|a−b|, |b−c|, |c−a|).', hi: 'Case 4 (Equal unknown rem): Gaps ka HCF lein = HCF(|a−b|, |b−c|, |c−a|).' },
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
        hi: 'Module 6: VBODMAS Order, Algebraic Shortcuts (4ab) & Continued Fractions',
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
            hi: '1. VBODMAS Order & Two Exam Traps (Vinculum + Of)',
          },
          formula: '$$\\text{V (Bar } \\overline{a-b}\\text{)} \\to (\\;) \\to \\{\\;\\} \\to [\\;] \\to \\text{Of} \\to \\div \\to \\times \\to + \\to -$$',
          points: [
            { en: 'Vinculum Trap: In 12 − (8 − 3)̄, the bar ONLY covers (8 − 3) = 5 (NOT −8!) ⇒ 12 − 5 = 7.', hi: 'Bar Trap: 12 − 8−3̄ me bar sirf 8−3 par hai (− bahar hai!) ⇒ 12 − 5 = 7.' },
            { en: 'Of vs ÷ Trap: 24 ÷ 4 of 3 = 24 ÷ 12 = 2 (solve "of" BEFORE "÷"!).', hi: '"Of (का)" Trap: 24 ÷ 4 of 3 me pehle 4×3 = 12 hoga, phir 24 ÷ 12 = 2!' },
            { en: 'Parallel Chunking: Split expression at top-level + and − outside brackets to prevent errors.', hi: 'Chunking Trick: Brackets ke bahar wale + aur − se question ko chhote blocks me baantein.' },
          ],
        },
        {
          id: 'card-1-6-2',
          title: {
            en: '2. Algebraic Identities & Telescopic Fraction Series',
            hi: '2. Simplification Identities (4ab, a³±b³) & Telescopic Series',
          },
          formula: '$$(a+b)^2 - (a-b)^2 = 4ab \\quad|\\quad \\frac{a^4 - b^4}{a^2 + b^2} = a^2 - b^2 \\quad|\\quad \\text{Series} = \\frac{1}{d}\\left(\\frac{1}{\\text{First}} - \\frac{1}{\\text{Last}}\\right)$$',
          points: [
            { en: '(a + b)² + (a − b)² = 2(a² + b²)  |  (a + b)² − (a − b)² = 4ab.', hi: '(a+b)² + (a−b)² = 2(a²+b²)  |  (a+b)² − (a−b)² = 4ab (ALP PYQ!).' },
            { en: '(a³ + b³) / (a² − ab + b²) = a + b  |  (a³ − b³) / (a² + ab + b²) = a − b.', hi: '(a³ + b³) / (a² − ab + b²) = a + b — seedhe add/subtract karein!' },
            { en: 'Telescoping Fractions: 1/(1·2) + 1/(2·3) + ... + 1/(9·10) = (1/1) × (1 − 1/10) = 9/10.', hi: 'Telescopic Series: Gap d = 1 → (1/First − 1/Last) lagayein!' },
          ],
        },
      ],
    },
    {
      id: 'mod-7-recurring-surds-indices',
      number: '1.7',
      title: {
        en: 'Module 7: Recurring Decimals (p/q), Indices & Surds Rationalisation',
        hi: 'Module 7: Recurring Decimals (p/q), Laws of Indices & Surds',
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
            hi: '1. Bar Decimals (p/q) Formula & Terminating Decimal Test',
          },
          formula: '$$0.\\overline{ab} = \\frac{ab}{99} \\quad|\\quad 0.a\\overline{bc} = \\frac{abc - a}{990} \\quad|\\quad \\text{Terminating } \\iff q = 2^m \\cdot 5^n$$',
          points: [
            { en: 'Numerator: Take all digits − non-bar part (e.g. 8.46̅ = (846 − 8)/99 = 838/99).', hi: 'Numerator: Puri sankhya me se bina bar wala hissa ghatayein (8.46̅ = (846−8)/99).' },
            { en: 'Denominator: Count digits RIGHT of decimal — put 9 per bar digit & 0 per non-bar digit.', hi: 'Denominator: Decimal ke RIGHT se — jitne bar utne 9, bina bar utne 0.' },
            { en: 'Tail Cancel Trick: In 6.841̄ − 2.691̄, identical repeating .001̄ cancels leaving 4.15 = 3735/900!', hi: 'Tail Cancel: 6.841̄ − 2.691̄ me dono ke piche .001̄ cut gaya ⇒ seedha 4.15!' },
            { en: 'Terminating Check: Reduced p/q terminates ONLY if q has no prime other than 2 and 5.', hi: 'Terminating Rule: Simplified p/q tabhi rukega jab har q ke factors sirf 2 aur 5 hon.' },
          ],
        },
        {
          id: 'card-1-7-2',
          title: {
            en: '2. Group D Indices Law + Surds Conjugates & Infinite Roots',
            hi: '2. Laws of Indices, Conjugate Surds & Infinite Nested Roots',
          },
          formula: '$$B^p = x, B^q = y, x^z = y^k \\implies z = \\frac{q \\cdot k}{p} \\quad|\\quad \\frac{1}{\\sqrt{a} \\mp \\sqrt{b}} = \\frac{\\sqrt{a} \\pm \\sqrt{b}}{a - b}$$',
          points: [
            { en: 'Indices Trick: Ignore dummy base B completely — just equate pz = qk!', hi: 'Group D Indices: Base B ignore karein aur seedhe pz = qk lagayein!' },
            { en: 'Conjugate Surd: Flip middle sign in numerator and divide by (a − b).', hi: 'Rationalisation: Beech ka sign palat kar upar likhein aur niche (a − b) se bhag dein.' },
            { en: 'Square Root √(a ± 2√b): Find p, q where p+q = a and p×q = b ⇒ Ans = √p ± √q.', hi: 'Square Root √(a ± 2√b): Aise p, q sochein ki p+q = a aur pq = b ⇒ Ans = √p ± √q.' },
            { en: 'Infinite Roots: If x = n(n+1), √(x + √(x + ...)) = n+1 (+ve) and n (−ve).', hi: 'Infinite Roots: x = n(n+1) ho toh + wale me bada factor (n+1), − wale me chhota (n).' },
          ],
        },
      ],
    },
  ],

  decisionMatrix: {
    title: {
      en: 'Exam-Hall 3-Second Decision Matrix (Which Method First?)',
      hi: 'Exam-Hall 3-Second Trick Selector (Kaunsi Trick Pehle Lagayein?)',
    },
    rows: [
      {
        trigger: { en: 'Exact Arithmetic (+ / − / × / Squares / Cubes)', hi: 'Big Exact Arithmetic (+ / − / × / 52² − 12³)' },
        firstCheck: { en: 'Unit Digit (UD) first → Split ties with C9 (Digital Sum)', hi: 'Pehle Unit Digit (UD) check → tie ho toh C9 (Digital Sum) lagayein!' },
        avoid: { en: 'Never use C9 on "Approximate / Closest" Qs', hi: 'Approximation wale Qs me C9 kabhi na lagayein!' },
      },
      {
        trigger: { en: 'Composite Divisibility (72, 88, 99, 24, 19×46)', hi: 'Composite Divisibility (72, 88, 99, 24, 19×46)' },
        firstCheck: { en: 'Check Parity (÷2) & Last Digits (÷8/4/5) BEFORE 9 or 11', hi: 'Pehle Even/Odd (÷2) aur Last Digits (÷8/4/5) lock karein, phir 9/11!' },
        avoid: { en: 'Never split 24 as 4×6 (Use Co-Prime 8×3!)', hi: '24 ko 4×6 me mat todo — 8×3 lo!' },
      },
      {
        trigger: { en: 'Divided by d leaving Remainder r / Difference k', hi: 'Remainder LCM Questions (Leaves r₁, r₂, r₃)' },
        firstCheck: { en: 'Check option remainder mod 5 (last digit) & mod 9 (C9) FIRST', hi: 'Options par seedhe ÷5 (last digit) & ÷9 (C9) check karein — 3 sec answer!' },
        avoid: { en: 'Avoid long division until < 3 options remain', hi: 'Lamba LCM divide tabhi karein jab options eliminate na hon.' },
      },
      {
        trigger: { en: 'HCF & LCM Product / Indices B^p=x, B^q=y', hi: 'HCF×LCM = A×B ya Group D B^p=x, B^q=y' },
        firstCheck: { en: 'Check Unit Digit of product OR equate pz = qk directly', hi: 'Product ka Unit Digit milayein ya base ignore kar pz = qk lagayein!' },
        avoid: { en: 'Don’t multiply 3-digit × 3-digit fully unnecessarily', hi: 'Poora 3-digit × 3-digit multiply end tak na karein!' },
      },
    ],
  },

  trapAlerts: [
    {
      title: { en: 'Trap 1: 1 is Prime / 0 is Natural or Odd', hi: 'Trap 1: 1 ko Prime ya 0 ko Natural maan lena' },
      detail: { en: '1 = Neither Prime nor Composite. 0 = Even Whole Integer (not Natural).', hi: '1 na Prime hai na Composite. 0 ek Even integer hai (Natural nahi).' },
    },
    {
      title: { en: 'Trap 2: Unit Digit Power Remainder r=0 → Putting Power 0', hi: 'Trap 2: Power ÷ 4 par r=0 aane par Power 0 rakh dena' },
      detail: { en: 'When exponent ÷ 4 leaves r = 0, ALWAYS raise to power 4 (2⁴=6, 7⁴=1), NEVER power 0!', hi: 'r = 0 aaye toh kabhi a⁰ = 1 mat lein — hamesha Power 4 (2⁴=6, 7⁴=1) lein!' },
    },
    {
      title: { en: 'Trap 3: Subtraction Borrow Error (...3 − ...7)', hi: 'Trap 3: Unit Digit me 3 − 7 = 4 likh dena' },
      detail: { en: 'Always borrow +10 when left digit is smaller: 13 − 7 = 6!', hi: 'Left digit chhota ho toh +10 borrow lein: 13 − 7 = 6!' },
    },
    {
      title: { en: 'Trap 4: Doing ÷ BEFORE "Of (का)" in VBODMAS', hi: 'Trap 4: "Of (का)" se pehle ÷ kar dena' },
      detail: { en: '18 ÷ 3 of 2 = 18 ÷ 6 = 3 (Of binds tighter than ÷!).', hi: '18 ÷ 3 of 2 me pehle 3×2 = 6 hoga ⇒ 18 ÷ 6 = 3!' },
    },
    {
      title: { en: 'Trap 5: Splitting 24 into (4×6) instead of (8×3)', hi: 'Trap 5: 24 ko 4×6 me todna (Non Co-Prime Error)' },
      detail: { en: '12 divides by 4 and 6 yet NOT 24! Always pick Co-Prime splits (8×3, 8×9, 8×11).', hi: '12, 4 aur 6 dono se katta hai par 24 se nahi! Hamesha Co-Prime (8×3) chunein.' },
    },
    {
      title: { en: 'Trap 6: Decimal LCM Missing Zeros (1.3 vs 0.13)', hi: 'Trap 6: Decimal LCM (1.3, 0.13) me 0 barabar na karna' },
      detail: { en: 'Equalize ALL to max decimal places FIRST: 1.3 → 1.30 (×100 → 130, NOT 13!).', hi: 'Pehle max decimals barabar karein: 1.3 ko 1.30 (130) banayein, 13 nahi!' },
    },
  ],

  tables: [
    {
      id: 'tbl-primes-ref',
      title: { en: 'Table 1: Primes (1–100), Must-Know Squares & Cubes', hi: 'Table 1: Primes (1–100), Squares (11–30) & Cubes (6–20)' },
      headers: { en: ['Category', 'Exact List / Values', 'Exam Fact'], hi: ['Category', 'Exact Values', 'Exam Fact / Trick'] },
      rows: [
        [{ en: 'Primes 1–50 (15)', hi: 'Primes 1–50 (15)' }, { en: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47', hi: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47' }, { en: 'Sum = 328; 2 = ONLY even prime', hi: 'Sum = 328; 2 = only even prime' }],
        [{ en: 'Primes 51–100 (10)', hi: 'Primes 51–100 (10)' }, { en: '53, 59, 61, 67, 71, 73, 79, 83, 89, 97', hi: '53, 59, 61, 67, 71, 73, 79, 83, 89, 97' }, { en: 'Total 1–100 = 25 (Sum = 1060)', hi: 'Total = 25; Largest 2-digit = 97' }],
        [{ en: 'Key Squares (16–29)', hi: 'Key Squares (16–29)' }, { en: '16²=256, 17²=289, 18²=324, 19²=361, 23²=529, 24²=576, 26²=676, 27²=729, 29²=841', hi: '16²=256, 17²=289, 18²=324, 19²=361, 23²=529, 24²=576, 26²=676, 27²=729, 29²=841' }, { en: 'No square ends in 2, 3, 7, 8', hi: 'Square end me kabhi 2, 3, 7, 8 nahi' }],
        [{ en: 'Key Cubes (6–17)', hi: 'Key Cubes (6–17)' }, { en: '6³=216, 7³=343, 8³=512, 9³=729, 11³=1331, 12³=1728, 13³=2197, 15³=3375, 17³=4913', hi: '6³=216, 7³=343, 8³=512, 9³=729, 11³=1331, 12³=1728, 13³=2197, 17³=4913' }, { en: '∛4913 = 17, ⁴√1296 = 6 (ALP 2025)', hi: '∛4913 = 17, ⁴√1296 = 6 direct PYQ' }],
      ],
    },
    {
      id: 'tbl-divisibility-rules',
      title: { en: 'Table 2: Quick Divisibility Matrix (2–99)', hi: 'Table 2: Divisibility Rules Cheat Table (2–99)' },
      headers: { en: ['Divisor', 'Rule', 'Example'], hi: ['Divisor', 'Rule', 'Exam Demo'] },
      rows: [
        [{ en: '2, 4, 8, 16', hi: '2, 4, 8, 16' }, { en: 'Last 1, 2, 3, 4 digits divisible', hi: 'Last 1, 2, 3, 4 digits check' }, { en: '17688 → 688÷8=86 ✓', hi: '17688 → 688÷8=86 ✓' }],
        [{ en: '3 & 9', hi: '3 & 9' }, { en: 'Sum of digits divisible (Cast out 9s)', hi: 'Digit sum ÷ 3 ya 9' }, { en: '285219 → Sum = 27 ÷ 9 ✓', hi: '285219 → Sum = 27 ÷ 9 ✓' }],
        [{ en: '11', hi: '11' }, { en: '|Odd Pos Sum − Even Pos Sum| = 0, 11k', hi: '|Odd − Even Pos| = 0 ya 11k' }, { en: '(2+5+1)−(8+2+9) = -11 ✓', hi: '(2+5+1)−(8+2+9) = -11 ✓' }],
        [{ en: '7, 11, 13', hi: '7, 11, 13' }, { en: 'xyzxyz (1001) or |Block2 − Block1|', hi: 'xyzxyz (1001) / 3-digit block diff' }, { en: '168168 ÷ 7, 11, 13 ✓', hi: '168168 ÷ 7, 11, 13 ✓' }],
        [{ en: '72, 88, 99', hi: '72, 88, 99' }, { en: 'Co-Prime split: 8×9, 8×11, 9×11', hi: 'Co-Prime split: 8×9, 8×11, 9×11' }, { en: 'Always check 8 FIRST!', hi: 'Hamesha 8 pehle lock karein!' }],
      ],
    },
    {
      id: 'tbl-unit-c9',
      title: { en: 'Table 3: Unit Digit Cyclicity & C9 Inversion Key', hi: 'Table 3: Unit Digit Cycles & C9 Inverse Division' },
      headers: { en: ['Item', 'Cycle / Map', 'Shortcut'], hi: ['Item', 'Cycle / Inverse Map', 'Shortcut'] },
      rows: [
        [{ en: '0, 1, 5, 6', hi: '0, 1, 5, 6' }, { en: 'Cycle = 1 (No Change)', hi: 'Cycle = 1 (Same)' }, { en: '(2025)⁹⁹ → ends in 5', hi: '(2025)⁹⁹ → 5' }],
        [{ en: '4, 9', hi: '4, 9' }, { en: 'Cycle = 2 (Odd / Even)', hi: 'Cycle = 2 (Odd/Even)' }, { en: '4^Odd=4, 4^Even=6 | 9^Odd=9, 9^Even=1', hi: '4^Odd=4, 4^Even=6 | 9^Odd=9, 9^Even=1' }],
        [{ en: '2, 3, 7, 8', hi: '2, 3, 7, 8' }, { en: 'Cycle = 4 (Power mod 4)', hi: 'Cycle = 4 (Power ÷ 4)' }, { en: 'r = 0 ⇒ use Power 4!', hi: 'r = 0 aaye toh Power 4 lein!' }],
        [{ en: 'C9 Division', hi: 'C9 Divide Map' }, { en: '÷2≡×5, ÷4≡×7, ÷5≡×2, ÷7≡×4, ÷8≡×8', hi: '÷2≡×5, ÷4≡×7, ÷5≡×2, ÷7≡×4, ÷8≡×8' }, { en: '3, 6, 9 in Den: cancel 3 first!', hi: 'Den me 3, 6, 9 par pehle 3 kaatein' }],
      ],
    },
    {
      id: 'tbl-hcf-lcm-cases',
      title: { en: 'Table 4: HCF–LCM Remainder Laws & Algebraic Shortcuts', hi: 'Table 4: HCF–LCM Remainder Cases & 4ab Identities' },
      headers: { en: ['Case / Rule', 'Formula', 'Exam Tip'], hi: ['Case / Identity', 'Formula', 'When to Apply'] },
      rows: [
        [{ en: 'Fractions HCF / LCM', hi: 'Fractions HCF / LCM' }, { en: '$\\text{HCF}=\\frac{\\text{HCF(Num)}}{\\text{LCM(Den)}}$, $\\text{LCM}=\\frac{\\text{LCM(Num)}}{\\text{HCF(Den)}}$', hi: '$\\text{HCF}=\\frac{\\text{HCF(Num)}}{\\text{LCM(Den)}}$, $\\text{LCM}=\\frac{\\text{LCM(Num)}}{\\text{HCF(Den)}}$' }, { en: 'Reduce fraction first!', hi: 'Pehle fraction cut karein' }],
        [{ en: 'Same Rem r (LCM)', hi: 'Same Rem r (LCM)' }, { en: 'LCM(divisors) × m + r', hi: 'LCM(divisors) × m + r' }, { en: 'Check option − r first', hi: 'Option − r check karein' }],
        [{ en: 'Fixed Gap k = d − r', hi: 'Fixed Gap k = d − r' }, { en: 'LCM(divisors) × m − k', hi: 'LCM(divisors) × m − k' }, { en: 'NTPC 6-digit PYQ!', hi: 'Check mod 5 & C9 first' }],
        [{ en: 'Same Unknown Rem', hi: 'Unknown Same Rem' }, { en: 'HCF(|a − b|, |b − c|, |c − a|)', hi: 'HCF(|a − b|, |b − c|, |c − a|)' }, { en: 'Remainder cancels in diff', hi: 'Difference me rem cutta hai' }],
        [{ en: '4ab & a² − b²', hi: '4ab & a² − b²' }, { en: '(a+b)² − (a−b)² = 4ab', hi: '(a+b)² − (a−b)² = 4ab' }, { en: 'Direct ALP 2026 hit!', hi: 'Direct ALP 2026 hit!' }],
      ],
    },
    {
      id: 'tbl-recurring-surds',
      title: { en: 'Table 5: Bar Decimals (p/q) & Surds Shortcuts', hi: 'Table 5: Bar Decimals (p/q), Indices & Surds' },
      headers: { en: ['Pattern', 'Formula', 'Quick Example'], hi: ['Pattern', 'Formula', 'Quick Example'] },
      rows: [
        [{ en: 'Pure Bar $0.\\overline{ab}$', hi: 'Pure Bar $0.\\overline{ab}$' }, { en: '$\\frac{ab}{99}$', hi: '$\\frac{ab}{99}$' }, { en: '$0.\\overline{52} = \\frac{52}{99}$', hi: '$0.\\overline{52} = \\frac{52}{99}$' }],
        [{ en: 'Mixed Bar $0.a\\overline{bc}$', hi: 'Mixed Bar $0.a\\overline{bc}$' }, { en: '$\\frac{abc - a}{990}$', hi: '$\\frac{abc - a}{990}$' }, { en: '$8.\\overline{46} = \\frac{846-8}{99} = \\frac{838}{99}$', hi: '$8.\\overline{46} = \\frac{838}{99}$' }],
        [{ en: '$\\sqrt{a \\pm 2\\sqrt{b}}$', hi: '$\\sqrt{a \\pm 2\\sqrt{b}}$' }, { en: '$\\sqrt{p} \\pm \\sqrt{q}$ ($p+q=a, pq=b$)', hi: '$\\sqrt{p} \\pm \\sqrt{q}$ ($p+q=a, pq=b$)' }, { en: '$\\sqrt{7+2\\sqrt{10}} = \\sqrt{5}+\\sqrt{2}$', hi: '$\\sqrt{7+2\\sqrt{10}} = \\sqrt{5}+\\sqrt{2}$' }],
        [{ en: 'Infinite Nest $\\sqrt{x \\pm \\dots}$', hi: 'Infinite $\\sqrt{x \\pm \\dots}$' }, { en: '$x=n(n+1) \\implies +: n+1, -: n$', hi: '$x=n(n+1) \\implies +: n+1, -: n$' }, { en: '$\\sqrt{12+\\sqrt{12+\\dots}} = 4$', hi: '$\\sqrt{12+\\sqrt{12+\\dots}} = 4$' }],
      ],
    },
  ],

  typeWiseGroups: [
    {
      typeId: 'type-1-primes-parity',
      typeNumber: 1,
      title: { en: 'Type 1: Prime, Co-Prime, Sum & Parity Theorems', hi: 'Type 1: Prime, Co-Prime & Sum Parity PYQs' },
      conceptHint: { en: 'Sum of 3 primes EVEN ⇒ one MUST be 2! Co-Prime ⇒ HCF = 1.', hi: '3 primes ka sum EVEN ⇒ ek pakka 2 hoga! Co-Prime ⇒ HCF = 1.' },
      questionIds: ['ch1-pyq-1', 'ch1-pyq-2'],
    },
    {
      typeId: 'type-2-composite-divisibility',
      typeNumber: 2,
      title: { en: 'Type 2: Divisibility (9, 11, 22, 24, 19×46) & Missing Digit x', hi: 'Type 2: Composite Divisibility (9, 11, 22, 24, 19×46) & Digit x' },
      conceptHint: { en: 'Split composite into Co-Primes! Check Parity & 8 BEFORE 9 or 11.', hi: 'Co-Prime me todein (24 = 8×3); pehle Even/8 check karein phir 9/11!' },
      questionIds: ['ch1-pyq-3', 'ch1-pyq-4', 'ch1-pyq-5', 'ch1-pyq-6'],
    },
    {
      typeId: 'type-3-hcf-lcm-basics-decimals',
      typeNumber: 3,
      title: { en: 'Type 3: HCF/LCM Direct, Product & Decimals (1.3, 7.6, 0.13)', hi: 'Type 3: HCF/LCM Product Formula & Decimals' },
      conceptHint: { en: 'A × B = HCF × LCM; Equalize decimal places before solving.', hi: 'A × B = HCF × LCM; Decimals me zeros barabar karke solve karein.' },
      questionIds: ['ch1-pyq-7', 'ch1-pyq-8', 'ch1-pyq-9', 'ch1-pyq-10'],
    },
    {
      typeId: 'type-4-hcf-lcm-ratio-pairs',
      typeNumber: 4,
      title: { en: 'Type 4: Ratio, HCF–LCM Equations & Co-Prime Pair Counting', hi: 'Type 4: Ratio, LCM–HCF Equation & Co-Prime Pairs' },
      conceptHint: { en: 'Ratio a:b ⇒ LCM = H·a·b; Pairs use ONLY gcd(x, y) = 1.', hi: 'Ratio a:b ⇒ LCM = H·a·b; Pairs me sirf co-prime (gcd=1) count karein.' },
      questionIds: ['ch1-pyq-11', 'ch1-pyq-12', 'ch1-pyq-13'],
    },
    {
      typeId: 'type-5-hcf-lcm-remainder-cases',
      typeNumber: 5,
      title: { en: 'Type 5: Remainder Cases (LCM − k & HCF Diff)', hi: 'Type 5: Greatest/Largest Number Remainder Cases' },
      conceptHint: { en: 'Check remainder mod 5 (last digit) & mod 9 (C9) on options FIRST!', hi: 'Options par mod 5 (last digit) & mod 9 (C9) check karein → 3 sec answer!' },
      questionIds: ['ch1-pyq-14', 'ch1-pyq-15'],
    },
    {
      typeId: 'type-6-bells-lights-sync',
      typeNumber: 6,
      title: { en: 'Type 6: Blinking Lights, Bells & Sync Problems', hi: 'Type 6: Lights/Bells Together Sync Problems' },
      conceptHint: { en: '"Together again" ALWAYS asks for LCM of periods!', hi: '"Together again" matlab hamesha LCM nikalna hai!' },
      questionIds: ['ch1-pyq-16'],
    },
    {
      typeId: 'type-7-unit-digit-perfect-sq',
      typeNumber: 7,
      title: { en: 'Type 7: Unit Digit & Perfect Square Properties', hi: 'Type 7: Unit Digit Cycles & Perfect Square Check' },
      conceptHint: { en: 'Perfect square NEVER ends in 2, 3, 7, 8!', hi: 'Perfect square ke end me kabhi 2, 3, 7, 8 nahi hota!' },
      questionIds: ['ch1-pyq-17', 'ch1-pyq-18'],
    },
    {
      typeId: 'type-8-remainder-consecutive',
      typeNumber: 8,
      title: { en: 'Type 8: Remainder Theorem & Consecutive Natural Numbers', hi: 'Type 8: Remainder Theorem & Consecutive Numbers' },
      conceptHint: { en: 'Reduce each term mod D; for n(n+1) = P, check squares near √P!', hi: 'Har number ka chhota remainder lein; n(n+1)=P me √P ke paas square dekhein.' },
      questionIds: ['ch1-pyq-19', 'ch1-pyq-20'],
    },
    {
      typeId: 'type-9-vbodmas-brackets',
      typeNumber: 9,
      title: { en: 'Type 9: VBODMAS Nested Brackets (ALP CBT-1 & CBT-2)', hi: 'Type 9: VBODMAS Nested Brackets & Sign Rules' },
      conceptHint: { en: 'Peel ( ) → { } → [ ], ÷ strictly before ×/−!', hi: 'Order: ( ) → { } → [ ], subtract karne se pehle ÷ complete karein!' },
      questionIds: ['ch1-pyq-21', 'ch1-pyq-22', 'ch1-pyq-23'],
    },
    {
      typeId: 'type-10-algebraic-simplification-ladder',
      typeNumber: 10,
      title: { en: 'Type 10: Powers, Algebraic Identities (4ab) & Ladders', hi: 'Type 10: Cubes/Roots, 4ab Identity & Continued Fractions' },
      conceptHint: { en: 'Spot (a+b)² − (a−b)² = 4ab & simplify bottom-up in ladders!', hi: '(a+b)² − (a−b)² = 4ab lagayein; ladder fraction ko decimal me convert karein!' },
      questionIds: ['ch1-pyq-24', 'ch1-pyq-25', 'ch1-pyq-26'],
    },
    {
      typeId: 'type-11-recurring-decimals',
      typeNumber: 11,
      title: { en: 'Type 11: Recurring / Bar Decimals (p/q & Subtraction)', hi: 'Type 11: Recurring Bar Decimals (p/q & Subtraction)' },
      conceptHint: { en: '9 per bar digit, 0 per non-bar digit; matching bar tails cancel!', hi: 'Bar jitne 9, bina bar utne 0; matching tail (.001̄) seedha cut jaati hai!' },
      questionIds: ['ch1-pyq-27', 'ch1-pyq-28', 'ch1-pyq-29'],
    },
    {
      typeId: 'type-12-surds-indices',
      typeNumber: 12,
      title: { en: 'Type 12: Surds Rationalisation & Group D Laws of Indices', hi: 'Type 12: Surds Conjugates & Group D Laws of Indices' },
      conceptHint: { en: 'Ignore dummy base in B^p=x, B^q=y ⇒ equate pz = qk directly!', hi: 'Base same hai toh pz = qk seedhe equate karein; conjugate me sign paltein!' },
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
        hi: 'Three prime numbers ka sum 112 hai. Agar ek number doosre se 36 zyada hai, toh inka product kya hoga? (तीन अभाज्य संख्याओं का योगफल 112 है...)',
      },
      options: { en: ['5678', '4516', '4826', '5402'], hi: ['5678', '4516', '4826', '5402'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**5402**). The three primes are **2, 37, and 73**.',
        keyConcept: 'Only Even Prime = 2 (Odd + Odd + Odd ≠ Even!)',
        pyqType: { en: 'Type 1 • Prime Parity Theorem', hi: 'Type 1 • Prime Parity Theorem' },
        optionTrick: {
          en: 'Sum = 112 (Even) ⇒ one prime MUST be **2**! Remaining sum 110 with gap 36 ⇒ **37 & 73**. Unit digit of $2 \\times 37 \\times 73 \\to \\mathbf{2}$! Only **5402** ends in 2!',
          hi: 'Sum 112 (Even) ⇒ ek prime pakka **2**! Baaki 110 me 36 gap ⇒ **37 & 73**. Unit digit $2 \\times 7 \\times 3 \\to \\mathbf{2}$! Sirf **5402** ke end me 2 hai!',
        },
        trapAlert: {
          en: '3 odd primes ALWAYS sum to an ODD number — picking 2 is mandatory here!',
          hi: '3 odd primes ka sum kabhi Even (112) nahi ho sakta — isliye 2 lena zaroori hai!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Basic Algebra + Parity', hi: 'Method 1: Basic Concept (Step-by-Step)' },
            audience: { en: 'Basic Learners', hi: 'Basic Learners' },
            timeTag: '40 sec',
            tone: 'teal',
            steps: {
              en: '1) $a + b + c = 112$ (even). Since Odd + Odd + Odd = Odd, one prime MUST be $a = 2$.\n2) $b + (b + 36) = 110 \\Rightarrow 2b = 74 \\Rightarrow b = 37, c = 73$.\n3) Product $= 2 \\times 37 \\times 73 = \\mathbf{5402}$.',
              hi: '1) $a + b + c = 112$ (Even) ⇒ ek prime $a = 2$ hoga.\n2) Baaki dono $b + (b+36) = 110 \\Rightarrow b = 37, c = 73$.\n3) Product $= 2 \\times 37 \\times 73 = \\mathbf{5402}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Smart Split (110 ± 36)/2', hi: 'Method 2: Smart Exam-Hall Split' },
            audience: { en: 'Smart Solver', hi: 'Smart Solver' },
            timeTag: '12 sec',
            tone: 'amber',
            steps: {
              en: 'Drop 2 → split 110 by gap 36: $(110-36)/2 = 37$ and **73**.\nMultiply $74 \\times 73 = 73^2 + 73 = 5329 + 73 = \\mathbf{5402}$.',
              hi: '2 hatakar 110 ko 36 gap me baantein: 37 aur 73.\n$74 \\times 73 = 73^2 + 73 = 5329 + 73 = \\mathbf{5402}$.',
            },
          },
          {
            id: 'trick',
            title: { en: 'Method 3: Unit Digit 3-Sec Elimination', hi: 'Method 3: Unit Digit 3-Sec Trick' },
            audience: { en: 'Ranker Speed', hi: 'Topper Speed' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Once you get `(2, 37, 73)`, do NOT multiply! Unit digit $= 2 \\times 7 \\times 3 \\to \\mathbf{2}$. Only Option D (**5402**) ends in 2!',
              hi: '`(2, 37, 73)` milte hi poora multiply mat karo! Last digit $2 \\times 7 \\times 3 \\to \\mathbf{2}$ ⇒ sirf **5402**!',
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
        hi: 'Inme se kaun-sa pair Co-Prime (सह-अभाज्य) hai?',
      },
      options: { en: ['49, 217', '119, 239', '30, 201', '48, 111'], hi: ['49, 217', '119, 239', '30, 201', '48, 111'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**119, 239**). HCF = 1.',
        keyConcept: 'Co-Prime ⇒ HCF(a, b) = 1 (No common factor > 1)',
        pyqType: { en: 'Type 1 • Co-Prime Recognition', hi: 'Type 1 • Co-Prime Recognition' },
        optionTrick: {
          en: 'Spot common `3` or `7` immediately! `(30, 201)` & `(48, 111)` divide by 3; `(49, 217)` both divide by 7. Only `(119, 239)` left!',
          hi: 'Common `3` aur `7` se kaatein: `(30, 201)` & `(48, 111)` ÷ 3; `(49, 217)` ÷ 7 ⇒ sirf **(119, 239)** bacha!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Factor Test Each Pair', hi: 'Method 1: Factor Check Each Option' },
            timeTag: '25 sec',
            tone: 'teal',
            steps: {
              en: '• (49, 217): both ÷ 7 ($49=7\\times7, 217=7\\times31$).\n• (30, 201) & (48, 111): both ÷ 3 (digit sums ÷ 3).\n• (119, 239): $119 = 7 \\times 17$; 239 divides by neither 7 nor 17 ⇒ **HCF = 1**!',
              hi: '• (49, 217) → 7 se katte hain; (30, 201) & (48, 111) → 3 se.\n• **(119, 239)**: $119 = 7\\times17$, par 239 kisi se nahi katta ⇒ **Co-Prime!**',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Euclid 2k+1 Shortcut (3 sec)', hi: 'Method 2: Euclid 2×119 + 1 Shortcut' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Spot **$239 = 2 \\times 119 + 1$**! Any $a$ and $ka + 1$ ALWAYS have $\\text{HCF} = 1$!',
              hi: 'Dekhein **$239 = 2 \\times 119 + 1$**! $a$ aur $ka+1$ hamesha Co-Prime hote hain (`HCF = 1`)!',
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
        hi: '6-digit number 28x219 dono 9 aur 11 se divisible ho, iske liye x ka smallest digit kya hoga?',
      },
      options: { en: ['3', '5', '4', '6'], hi: ['3', '5', '4', '6'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**5**). Full number = `285219`.',
        keyConcept: 'Rule of 9 (Digit Sum) + Rule of 11 (Alternating Diff)',
        pyqType: { en: 'Type 2 • Missing Digit for 9 & 11', hi: 'Type 2 • Missing Digit x' },
        optionTrick: {
          en: 'Check **Rule of 9 ONLY**: drop `9` and `8+1=9` from `28x219`. Left: $2 + x + 2 = 4 + x$. Only single digit $x = \\mathbf{5}$ works!',
          hi: 'Sirf **9 ka rule** lagayein (`9` aur `8+1` kaatein): बचा $2+x+2 = 4+x$ ⇒ sirf **x = 5** single digit possible hai!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Verify Both 9 & 11', hi: 'Method 1: 9 aur 11 Dono Verify Karein' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '1) Sum = $2 + 8 + x + 2 + 1 + 9 = 22 + x \\Rightarrow x = 27 - 22 = \\mathbf{5}$.\n2) Check 11 on `285219`: $(2+5+1) - (8+2+9) = 8 - 19 = -11$ (divisible by 11 ✓).',
              hi: '1) Sum $= 22 + x \\Rightarrow x = \\mathbf{5}$ (`27`).\n2) 11 Check (`285219`): $(2+5+1)-(8+2+9) = -11$ (÷11 ✓).',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cast-Out-9s Instant Lock (3 sec)', hi: 'Method 2: Cast-Out-9s 3-Sec Trick' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'In `28x219`, cancel `(9)` & `(8+1)`. Remainder sum $4 + x = 9 \\Rightarrow x = \\mathbf{5}$ in 3 sec!',
              hi: '`9` aur `8+1` kaatne par $4+x = 9 \\Rightarrow \\mathbf{x = 5}$ (11 check karne ki bhi zaroorat nahi)!',
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
        hi: 'Inme se kaun-sa number 11 aur 24 dono se divisible hai?',
      },
      options: { en: ['16811', '17688', '19640', '19408'], hi: ['16811', '17688', '19640', '19408'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**17688**).',
        keyConcept: 'Split 24 = 8 × 3 (Co-Prime) — Check 3 Digit Sum First!',
        pyqType: { en: 'Type 2 • Composite 11 & 24', hi: 'Type 2 • Divisible by 11 & 24' },
        optionTrick: {
          en: 'Test `÷ 3` digit sum: `16811(17✗)`, **`17688(30✓)`**, `19640(20✗)`, `19408(22✗)`. ONLY **17688** divides by 3!',
          hi: 'Sirf **`÷ 3` (digit sum)** check karein: `16811(17✗)`, **`17688(30✓)`**, `19640(20✗)`, `19408(22✗)` — **3 sec answer B**!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Check 8, 3 and 11', hi: 'Method 1: 8, 3 aur 11 Check' },
            timeTag: '22 sec',
            tone: 'teal',
            steps: {
              en: '• `16811` is odd (fails 8).\n• `19640` (sum 20) & `19408` (sum 22) fail 3.\n• **`17688`**: `688 ÷ 8 = 86 ✓`, sum `30 ÷ 3 ✓`, `(1+6+8)−(7+8) = 0 ÷ 11 ✓`!',
              hi: '`17688`: `688÷8=86✓`, sum `30÷3✓`, aur `(1+6+8)−(7+8) = 0 ÷ 11✓`!',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cast-Out-3 Trick (3 sec)', hi: 'Method 2: Digit Sum mod 3 (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Only **17688** has digit sum divisible by 3 (`30`) ⇒ Option B immediately!',
              hi: 'Charon options me sirf **17688** hi `3` se katta hai ⇒ direct B!',
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
        hi: 'Inme se kaun-sa number 9 aur 22 dono se divisible hai?',
      },
      options: { en: ['6464', '5544', '5152', '4642'], hi: ['6464', '5544', '5152', '4642'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**5544**).',
        keyConcept: '22 = 2 × 11 + Check Digit Sum ÷ 9',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Check 9, 2 and 11', hi: 'Method 1: Check 9, 2 & 11' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Digit sums: `6464(20✗)`, **`5544(18✓)`**, `5152(13✗)`, `4642(16✗)`. Also `5544` is even & `(5+4)−(5+4)=0`.',
              hi: 'Digit sum sirf **5544** (`18`) ka 9 se katta hai, even bhi hai & `(5+4)−(5+4)=0` (÷11)!',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `aabb` Palindrome Check (3 sec)', hi: 'Method 2: `aabb` Pattern & C9 Check' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '`5544` (`aabb` form) is always ÷ 11; check `5+5+4+4 = 18` ÷ 9 ✓!',
              hi: '`aabb` hamesha 11 se katta hai; sum `18` ⇒ ÷ 9 ✓!',
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
        hi: 'Inme se kaun-sa number 19 aur 46 dono se divisible hai?',
      },
      options: { en: ['17039', '17849', '15005', '16606'], hi: ['17039', '17849', '15005', '16606'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**16606**).',
        keyConcept: 'Always Check Even/Odd Parity BEFORE Dividing by Primes (19, 23)!',
        optionTrick: {
          en: '`46` is **EVEN**! Look at options: `17039` (Odd✗), `17849` (Odd✗), `15005` (Odd✗), **`16606` (ONLY EVEN OPTION ✓)** — 1-second knockout!',
          hi: '`46` **EVEN** hai! Options dekhein: 3 odd hain, sirf **`16606` EVEN hai** — 19 se divide karne ki zaroorat hi nahi (1 sec answer)!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Divide Check by 46 & 19', hi: 'Method 1: 46 & 19 Verification' },
            timeTag: '40 sec',
            tone: 'teal',
            steps: {
              en: '$16606 \\div 46 = 361$, and $361 = 19 \\times 19 \\Rightarrow 16606 = 46 \\times 19^2$. Divisible by both ✓!',
              hi: '$16606 \\div 46 = 361 = 19^2$, dono se poora divisible hai ✓.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Parity (÷ 2) 1-Sec Knockout', hi: 'Method 2: Even-Odd 1-Sec Knockout' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Multiple of even `46` MUST be even. A, B, C end in `9, 9, 5` (all odd) ⇒ **D (`16606`)** wins instantly!',
              hi: '46 ka multiple EVEN hoga ⇒ A(`9`), B(`9`), C(`5`) bahar → sirf **D (`16606`)**!',
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
        hi: 'Do numbers ka HCF = 12 aur LCM = 924 hai. Ek number 84 hai toh doosra kya hoga?',
      },
      options: { en: ['96', '72', '132', '180'], hi: ['96', '72', '132', '180'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**132**).',
        keyConcept: 'Product of 2 Numbers = HCF × LCM',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Formula A × B = HCF × LCM', hi: 'Method 1: Formula A × B = HCF × LCM' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$84 \\times B = 12 \\times 924 \\Rightarrow B = \\frac{12 \\times 924}{84} = \\frac{924}{7} = \\mathbf{132}$.',
              hi: '$B = \\frac{12 \\times 924}{84} = \\frac{924}{7} = \\mathbf{132}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: 11-Factor Cancellation (4 sec)', hi: 'Method 2: 11-Factor Split (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '`924 ÷ 11` (`9+4-2=11`), whereas `84` has no `11` factor ⇒ other number MUST divide by 11 ⇒ only **132**!',
              hi: '924 me `11` hai par 84 me nahi ⇒ doosra number `11` ka multiple hoga ⇒ sirf **132**!',
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
        hi: 'HCF = 11, LCM = 1870 aur ek number 22 hai, toh doosre number ka Unit Digit kya hoga?',
      },
      options: { en: ['4', '7', '3', '5'], hi: ['4', '7', '3', '5'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**5**). Other number = 935.',
        keyConcept: 'Other = (HCF × LCM) / First Number',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Formula + Unit Digit', hi: 'Method 1: Formula Step-by-Step' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: 'Other $= \\frac{11 \\times 1870}{22} = \\frac{1870}{2} = 935 \\implies$ Unit digit = **5**.',
              hi: 'Doosri sankhya $= \\frac{11 \\times 1870}{22} = 935 \\implies$ Unit digit = **5**.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `...0 ÷ 2` Ending Check (2 sec)', hi: 'Method 2: End-in-0 Division Trick (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`1870 ÷ 2`: number ending in `0` divided by `2` ends in **5** or **0** (`only 5 in options!`) ⇒ **5**!',
              hi: '1870 (end in 0) ko 2 se divide karne par last digit `5` ya `0` aayega (options me sirf **5**)!',
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
        hi: '1.3, 7.6 aur 0.13 ka LCM kya hoga?',
      },
      options: { en: ['102', '107', '98.8', '100'], hi: ['102', '107', '98.8', '100'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**98.8**).',
        keyConcept: 'Equalize Decimal Places (×100) -> Solve Integer LCM -> ÷100',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Scale by ×100 -> LCM -> ÷100', hi: 'Method 1: ×100 karke Integer LCM' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '1) Write as `1.30, 7.60, 0.13` → integers `130, 760, 13`.\n2) $\\text{LCM}(130, 760, 13) = 13 \\times 76 \\times 10 = 9880$.\n3) Divide by 100 ⇒ **98.8**.',
              hi: '1) `130, 760, 13` ka LCM $= 13 \\times 760 = 9880$.\n2) Wapas ÷100 ⇒ **98.8**.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `1.3 × 76` Decimal Ending Check (4 sec)', hi: 'Method 2: `1.3 × 76` Decimal End Check' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '`0.13` divides `1.3` cleanly; `13` & `76` are co-prime ⇒ $1.3 \\times 76 = \\mathbf{98.8}$ (only `.8` option!).',
              hi: '`0.13` se `1.3` katta hai aur 13, 76 co-prime hain ⇒ $1.3 \\times 76 = \\mathbf{98.8}$!',
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
        hi: '0.9, 3.7 aur 0.54 ka LCM nikaalein:',
      },
      options: { en: ['99.9', '106', '105', '100'], hi: ['99.9', '106', '105', '100'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**99.9**).',
        keyConcept: 'Multiply by 100 -> Co-Prime 37 × 270 -> ÷100 = 99.9',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Scale ×100 Integer Method', hi: 'Method 1: ×100 Integer Method' },
            timeTag: '22 sec',
            tone: 'teal',
            steps: {
              en: 'Integers `90, 370, 54`: $\\text{LCM}(90, 54) = 270$; multiply co-prime 37 ⇒ $270 \\times 37 = 9990 \\div 100 = \\mathbf{99.9}$.',
              hi: '`90, 54` ka LCM 270; co-prime 37 multiply ⇒ $9990 \\div 100 = \\mathbf{99.9}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Divisible by 9 Check (2 sec)', hi: 'Method 2: 9-Multiple Shortcut (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'LCM MUST divide by 0.9 (`digit sum ÷ 9`!). Only **99.9** (`9+9+9=27`) divides by 9!',
              hi: 'Answer 0.9 ka multiple hoga (`digit sum ÷ 9`) — sirf **99.9** (`27`) katta hai!',
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
        hi: 'Do numbers ka ratio 5 : 6 hai aur unka HCF = 7 hai. LCM kya hoga?',
      },
      options: { en: ['210', '42', '84', '35'], hi: ['210', '42', '84', '35'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**210**).',
        keyConcept: 'Ratio a:b (co-prime) & HCF H ⇒ LCM = H × a × b',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Find Numbers First', hi: 'Method 1: Numbers Nikalkar LCM' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: 'Numbers $= 5 \\times 7 = 35$ & $6 \\times 7 = 42 \\Rightarrow \\text{LCM}(35, 42) = \\mathbf{210}$.',
              hi: 'Numbers $= 35, 42 \\Rightarrow \\text{LCM} = \\mathbf{210}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct Formula H × a × b (2 sec)', hi: 'Method 2: Seedha H × a × b (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '$7 \\times 5 \\times 6 = \\mathbf{210}$ in 1 line!',
              hi: '$7 \\times 5 \\times 6 = \\mathbf{210}$!',
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
        hi: 'LCM, HCF ka 7 times hai aur unka difference 222 hai. Dono numbers ka product kya hoga?',
      },
      options: { en: ['9158', '9086', '9276', '9583'], hi: ['9158', '9086', '9276', '9583'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**9583**).',
        keyConcept: 'Product = HCF × LCM = 7 × (HCF)²',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Solve HCF & LCM', hi: 'Method 1: Equation Solve' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '$7H - H = 222 \\Rightarrow 6H = 222 \\Rightarrow H = 37, L = 259$.\nProduct $= 37 \\times 259 = \\mathbf{9583}$.',
              hi: '$6H = 222 \\Rightarrow H = 37, L = 259$. Product $= 37 \\times 259 = \\mathbf{9583}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Unit Digit of 7 × 37² (3 sec)', hi: 'Method 2: Unit Digit 3-Sec Trick' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$H = 222/6 = 37$. Product $= 7 \\times 37^2 \\to$ ends in $7 \\times 9 \\to \\mathbf{3}$. Only **9583** ends in 3!',
              hi: 'Product $= 7 \\times 37^2$ → last digit $7 \\times 9 \\to \\mathbf{3}$! Sirf **9583** ke end me 3 hai!',
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
        hi: 'Do numbers ka HCF = 9 aur product = 8100 hai. Kitne valid pairs possible hain?',
      },
      options: { en: ['2', '3', '5', '4'], hi: ['2', '3', '5', '4'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**2**). Pairs: (9, 900) and (36, 225).',
        keyConcept: 'Numbers = 9x, 9y with Co-Prime x, y ONLY ⇒ Formula 2^(k−1)',
        trapAlert: {
          en: '100 has 5 factor pairs, NOT all valid! Only co-prime pairs (1,100) & (4,25) maintain HCF = 9.',
          hi: '100 ke 5 factors pairs bante hain par (2,50), (5,20), (10,10) co-prime nahi hain — sirf **2 pairs** valid!',
        },
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 9x · 9y = 8100 (Co-Prime Filter)', hi: 'Method 1: 9x · 9y = 8100 & Co-Prime Check' },
            timeTag: '22 sec',
            tone: 'teal',
            steps: {
              en: '$81xy = 8100 \\Rightarrow xy = 100$. Co-prime pairs of 100: **(1, 100)** & **(4, 25)** ⇒ **2 pairs**.',
              hi: '$xy = 100$. Iske sirf **2 co-prime pairs** hain: `(1, 100)` aur `(4, 25)`!',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Distinct Prime Formula 2^(k−1) (3 sec)', hi: 'Method 2: Distinct Prime 2^(k−1) Formula' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$xy = 100 = 2^2 \\times 5^2 \\implies$ distinct primes $k = 2$ (2 & 5). Pairs $= 2^{k-1} = 2^{2-1} = \\mathbf{2}$!',
              hi: '$100 = 2^2 \\times 5^2$ me $k = 2$ primes ⇒ Pairs $= 2^{k-1} = 2^1 = \\mathbf{2}$!',
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
        hi: 'Sabse bada 6-digit number jo 3, 5, 7 aur 9 se divide karne par क्रमशः 1, 3, 5 aur 7 remainder de?',
      },
      options: { en: ['999808', '999998', '999685', '999893'], hi: ['999808', '999998', '999685', '999893'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**999808**).',
        keyConcept: 'Constant Gap k = 2 ⇒ Multiple of LCM − 2 (or Option Mod 5 + Mod 9!)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: LCM(3,5,7,9)=315 Division', hi: 'Method 1: LCM = 315 & 999999 Division' },
            timeTag: '35 sec',
            tone: 'teal',
            steps: {
              en: 'Gap $k = 3-1 = 2$. $\\text{LCM}(3,5,7,9) = 315$.\nLargest 6-digit multiple of 315: $999999 - 189 = 999810$.\nSubtract $k = 2 \\implies 999810 - 2 = \\mathbf{999808}$.',
              hi: 'Gap $k=2$; $\\text{LCM} = 315$. Largest multiple = 999810.\nAnswer $= 999810 - 2 = \\mathbf{999808}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Mod 5 + Mod 9 Option Check (3 sec)', hi: 'Method 2: ÷5 & C9 3-Sec Option Trick' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '1) ÷5 leaves 3 ⇒ ends in `3` or `8` (`999685✗`).\n2) ÷9 leaves 7 ⇒ C9 MUST be 7! Check: **999808 (`8+8=16 -> 7✓`)**, `999998(8✗)`, `999893(2✗)` ⇒ **Option A!**',
              hi: '÷5 rem 3 (end `3/8`) & ÷9 rem 7 (`C9 = 7`) ⇒ charon me sirf **999808** (`C9=7`, ends in `8`) pass hota hai!',
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
        hi: 'Sabse bada number jo 131, 91 aur 215 ko divide karke 8, 9 aur 10 remainder chhode?',
      },
      options: { en: ['37', '57', '41', '61'], hi: ['37', '57', '41', '61'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**41**).',
        keyConcept: 'HCF(131−8, 91−9, 215−10) = HCF(123, 82, 205)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Subtract Remainders -> HCF', hi: 'Method 1: Remainders Ghatakar HCF' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '$131-8 = 123$, $91-9 = 82$, $215-10 = 205 \\Rightarrow \\text{HCF}(123, 82, 205) = \\mathbf{41}$.',
              hi: '**123, 82, 205** ka HCF $= \\mathbf{41}$ (`41×3, 41×2, 41×5`).',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Pick Smallest `91 − 9 = 82` (4 sec)', hi: 'Method 2: Smallest 91 − 9 = 82 Trick (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: 'Compute ONLY $91 - 9 = 82$. Which option divides 82? Only **41** (`41 × 2 = 82`)!',
              hi: 'Sirf $91 - 9 = 82$ nikaalein — options me akela **41** hi 82 ko divide karta hai!',
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
        hi: 'Ek blue light har 6 sec me aur red light har 9 sec me blink hoti hai. Dono ek saath kab blink hongi?',
      },
      options: { en: ['9 seconds', '18 seconds', '3 seconds', '12 seconds'], hi: ['9 seconds', '18 seconds', '3 seconds', '12 seconds'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**18 seconds**).',
        keyConcept: '"Together Again" Sync Problems = LCM',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Multiples Timeline', hi: 'Method 1: Multiples Timeline' },
            timeTag: '10 sec',
            tone: 'teal',
            steps: {
              en: 'Blue: `6, 12, 18...` | Red: `9, 18...` ⇒ First common sync = **18 seconds**.',
              hi: 'Blue: `6, 12, 18...` | Red: `9, 18...` ⇒ First sync = **18 seconds**.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Direct LCM(6, 9) (2 sec)', hi: 'Method 2: Seedha LCM(6, 9) (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '$\\text{LCM}(6, 9) = \\mathbf{18\\text{ s}}$. (Trap warning: 3 s is HCF, NOT LCM!).',
              hi: '$\\text{LCM}(6, 9) = \\mathbf{18\\text{ s}}$ (3 s HCF hai — jaldbaazi me galti na karein!).',
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
        hi: 'Kisi bhi Perfect Square (पूर्ण वर्ग) number ke unit place par kaun-sa digit kabhi nahi aa sakta?',
      },
      options: { en: ['4', '8', '1', '9'], hi: ['4', '8', '1', '9'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**8**).',
        keyConcept: 'Forbidden Unit Digits of Perfect Squares: 2, 3, 7, 8',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Test Squares 0² to 9²', hi: 'Method 1: Check 0² to 9² Unit Digits' },
            timeTag: '8 sec',
            tone: 'teal',
            steps: {
              en: 'Squares end ONLY in `{0, 1, 4, 5, 6, 9}`. Digits `{2, 3, 7, 8}` NEVER occur ⇒ **8**.',
              hi: 'Squares ke end me sirf `0, 1, 4, 5, 6, 9` aate hain — `2, 3, 7, 8` kabhi nahi ⇒ **8**.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: 2-3-7-8 Recall Rule (1 sec)', hi: 'Method 2: 2-3-7-8 Rule (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: 'Instant recall: **2, 3, 7, 8** cannot end a perfect square ⇒ **8**!',
              hi: '**2, 3, 7, 8** kabhi perfect square ke end me nahi aate ⇒ **8**!',
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
        hi: '$(2137)^{754}$ ka Unit Digit kya hoga?',
      },
      options: { en: ['1', '3', '7', '9'], hi: ['1', '3', '7', '9'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**9**).',
        keyConcept: 'Cycle of 7 = 4: Divide Last 2 Digits of Power by 4',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Full Power Cycle of 7', hi: 'Method 1: Power Cycle of 7' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$7^1=7, 7^2=9, 7^3=3, 7^4=1$. $754 \\div 4$ leaves remainder 2 ⇒ $7^2 = 49 \\to \\mathbf{9}$.',
              hi: '7 ka cycle 4 hai (`7, 9, 3, 1`). $754 \\div 4$ remainder 2 ⇒ $7^2 = \\mathbf{9}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Last 2 Digits `54 ÷ 4` (2 sec)', hi: 'Method 2: Last 2 Digits `54 ÷ 4` (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: 'Just check $54 \\bmod 4 = 2 \\implies 7^2 \\to \\mathbf{9}$!',
              hi: 'Sirf $54 \\div 4$ ka remainder 2 lein ⇒ $7^2 = \\mathbf{9}$!',
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
        hi: '171 aur 173 ke product ko 17 se divide karne par remainder kya aayega?',
      },
      options: { en: ['11', '3', '1', '7'], hi: ['11', '3', '1', '7'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**3**).',
        keyConcept: 'Individual Remainder Product: Rem(A×B ÷ D) = Rem(r_A × r_B ÷ D)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Multiply & Divide', hi: 'Method 1: Multiply & Divide' },
            timeTag: '30 sec',
            tone: 'teal',
            steps: {
              en: '$171 \\times 173 = 29583$; $17 \\times 1740 = 29580$ ⇒ Remainder $= \\mathbf{3}$.',
              hi: '$29583 \\div 17$ me **29580** katta hai ⇒ Remainder $= \\mathbf{3}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Remainder Theorem (2 sec)', hi: 'Method 2: Remainder Theorem (2 sec)' },
            timeTag: '2 sec',
            tone: 'emerald',
            steps: {
              en: '`171 ÷ 17` gives **1**; `173 ÷ 17` gives **3** ⇒ $1 \\times 3 = \\mathbf{3}$!',
              hi: '`171 ÷ 17` remainder `1`; `173 ÷ 17` remainder `3` ⇒ $1 \\times 3 = \\mathbf{3}$!',
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
        hi: 'Do consecutive natural numbers ka product 702 hai. Unme se bada number kaun-sa hai?',
      },
      options: { en: ['27', '38', '26', '24'], hi: ['27', '38', '26', '24'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**27**). Pair = `26 × 27`.',
        keyConcept: 'Split Product Around √P: 26² < 702 < 27²',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Quadratic x(x+1) = 702', hi: 'Method 1: Quadratic Equation' },
            timeTag: '25 sec',
            tone: 'teal',
            steps: {
              en: '$x^2 + x - 702 = 0 \\Rightarrow (x+27)(x-26)=0 \\Rightarrow x = 26$, greater $= \\mathbf{27}$.',
              hi: '$(x+27)(x-26)=0 \\Rightarrow 26, 27 \\Rightarrow$ Greater = **27**.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Square Sandwich 26² < 702 < 27² (3 sec)', hi: 'Method 2: Square Range Trick (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: '$26^2 = 676 < 702 < 27^2 = 729 \\Rightarrow$ Pair is **26 × 27** ⇒ Greater = **27**!',
              hi: '$26^2=676 < 702 < 27^2=729 \\Rightarrow$ numbers 26 & 27 ⇒ Greater = **27**!',
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
        hi: 'Simplify: 75 − {18 ÷ 3 × (4 + 2) − 5 × 3} + 28 ÷ 7',
      },
      options: { en: ['54', '56', '52', '58'], hi: ['54', '56', '52', '58'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**58**).',
        keyConcept: 'VBODMAS Order: ( ) -> ÷ -> × inside { }',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Bracket Peeling Step-by-Step', hi: 'Method 1: Bracket-by-Bracket' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '1) `(4+2) = 6` → `{18÷3×6 − 15} = {6×6 − 15} = 21`.\n2) `28÷7 = 4` → $75 - 21 + 4 = \\mathbf{58}$.',
              hi: '1) `(4+2) = 6` → `{6×6 − 15} = 21`.\n2) $75 - 21 + 4 = \\mathbf{58}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Parallel 3-Block Split (8 sec)', hi: 'Method 2: Parallel Chunking (8 sec)' },
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
        hi: 'Simplify: 60 − {(-8) × (-16 − 19 − 2)} ÷ [5 × {2 + (-1) × (-1)}]',
      },
      options: { en: ['594 / 15', '614 / 15', '608 / 15', '604 / 15'], hi: ['594 / 15', '614 / 15', '608 / 15', '604 / 15'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**604 / 15**).',
        keyConcept: 'Negative × Negative = Positive + Division BEFORE Subtraction!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Careful Sign + Brackets', hi: 'Method 1: Sign & Brackets Step-by-Step' },
            timeTag: '35 sec',
            tone: 'teal',
            steps: {
              en: '1) `{(-8) × (-37)} = +296`; `[5 × {2 + 1}] = 15`.\n2) $60 - \\frac{296}{15} = \\frac{900 - 296}{15} = \\mathbf{\\frac{604}{15}}$.',
              hi: '1) `{(-8)×(-37)} = +296`; `[5×3] = 15`.\n2) $60 - 296/15 = (900 - 296)/15 = \\mathbf{604/15}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `900 − 296` Last-Digit Speed (6 sec)', hi: 'Method 2: Approx & Unit Check (6 sec)' },
            timeTag: '6 sec',
            tone: 'emerald',
            steps: {
              en: '$8 \\times 37 \\approx 300$ (`ends in 6`), so $900 - 296$ sits right above `600` ending in `4` ⇒ **604 / 15**!',
              hi: '$8 \\times 37 \\approx 300$, toh $900 - 296$ seedha `600` ke upar `4` end wala ⇒ **604/15**!',
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
        hi: 'Simplify: (52² - 12³) / (4³ - 16 × 3)',
      },
      options: { en: ['72', '61', '57', '66'], hi: ['72', '61', '57', '66'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**61**).',
        keyConcept: 'Factor Common 16 OR Solve in 3 Sec via C9!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Compute Squares & Cubes', hi: 'Method 1: Direct Value Calculation' },
            timeTag: '20 sec',
            tone: 'teal',
            steps: {
              en: '$\\frac{2704 - 1728}{64 - 48} = \\frac{976}{16} = \\mathbf{61}$.',
              hi: '$\\frac{2704 - 1728}{64 - 48} = \\frac{976}{16} = \\mathbf{61}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Factor Out 16 First (7 sec)', hi: 'Method 2: 16 Common Cut (7 sec)' },
            timeTag: '7 sec',
            tone: 'amber',
            steps: {
              en: 'Pull out `16`: $52^2 = 16\\times 169$, $12^3 = 16\\times 108$, Den = `16`. Answer $= 169 - 108 = \\mathbf{61}$!',
              hi: '`16` common kaatein: $169 - 108 = \\mathbf{61}$!',
            },
          },
          {
            id: 'trick',
            title: { en: 'Method 3: C9 Digital Sum (3 sec)', hi: 'Method 3: C9 Digital Sum (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Num C9 $= 7^2 - 0 = 4$; Den C9 $= 7$. `4 ÷ 7 ≡ 4 × 4 = 7`. Only **61** has digit sum 7!',
              hi: 'Num C9 `4`, Den C9 `7` → `4 ÷ 7 ≡ 4 × 4 = 7`. Sirf **61** ka sum 7 hai!',
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
        hi: 'Simplify: (17pq + 16q)² − (17pq − 16q)²',
      },
      options: { en: ['544pq²', '1088pq²', '544p²q²', '1088p²q'], hi: ['544pq²', '1088pq²', '544p²q²', '1088p²q'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**1088pq²**).',
        keyConcept: 'Identity: (a + b)² − (a − b)² = 4ab',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Expand Both Binomials', hi: 'Method 1: Full Square Expansion' },
            timeTag: '30 sec',
            tone: 'teal',
            steps: {
              en: '$289p^2q^2 + 544pq^2 + 256q^2 - (289p^2q^2 - 544pq^2 + 256q^2) = \\mathbf{1088pq^2}$.',
              hi: '$544pq^2 + 544pq^2 = \\mathbf{1088pq^2}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `4ab` Shortcut (3 sec)', hi: 'Method 2: `4ab` Shortcut (3 sec)' },
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
        hi: 'Value find karein: 48.3 − [7 + 1 / (7 + 1/7)] − [3 + 1 / (3 + 1/3)]',
      },
      options: { en: ['38.30', '31.75', '37.86', '46.18'], hi: ['38.30', '31.75', '37.86', '46.18'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**37.86**).',
        keyConcept: 'Convert Small Continued Fractions to Decimals Instantly',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Fraction -> Decimal Method', hi: 'Method 1: Step-by-Step Fraction Solve' },
            timeTag: '25 sec',
            tone: 'teal',
            steps: {
              en: '1) $7 + \\frac{1}{50/7} = 7 + \\frac{7}{50} = 7.14$.\n2) $3 + \\frac{1}{10/3} = 3 + \\frac{3}{10} = 3.30$.\n3) $48.30 - 7.14 - 3.30 = \\mathbf{37.86}$.',
              hi: '1) `7 + 7/50 = 7.14` | `3 + 3/10 = 3.30`.\n2) $48.30 - 10.44 = \\mathbf{37.86}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cancel `.3` First (5 sec)', hi: 'Method 2: `.3` Cancellation Trick (5 sec)' },
            timeTag: '5 sec',
            tone: 'emerald',
            steps: {
              en: '`48.3 − 3.3 = 45` cleanly! Subtract `7.14` ⇒ **37.86**!',
              hi: '`48.3 − 3.3 = 45` → usme se `7.14` ghataya = **37.86**!',
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
        hi: 'Simplify: (∛4913 / ⁴√1296) × (3 / 51) × 168',
      },
      options: { en: ['38', '26', '30', '28'], hi: ['38', '26', '30', '28'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**28**).',
        keyConcept: '∛4913 = 17 and ⁴√1296 = 6',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Substitute Cube/4th Roots', hi: 'Method 1: Cube/4th Root Put Karein' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$\\frac{17}{6} \\times \\frac{3}{51} \\times 168 = \\frac{1}{2} \\times \\frac{1}{3} \\times 168 = \\frac{168}{6} = \\mathbf{28}$.',
              hi: '$\\frac{17}{6} \\times \\frac{3}{51} \\times 168 = \\frac{168}{6} = \\mathbf{28}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Cross-Cancel 17×3 = 51 (4 sec)', hi: 'Method 2: Instant 17×3 = 51 Cut (4 sec)' },
            timeTag: '4 sec',
            tone: 'emerald',
            steps: {
              en: '`4913` ends in `3` ⇒ `∛ = 17`. `17 × 3 = 51` cancels completely! Left: `168 ÷ 6 = 28`!',
              hi: '`17 × 3 = 51` cut gaya! Sirf `168 ÷ 6 = 28`!',
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
        hi: '$0.\\overline{52}$ ko $\\frac{p}{q}$ fraction form me likhein:',
      },
      options: { en: ['$\\frac{53}{99}$', '$\\frac{50}{99}$', '$\\frac{52}{90}$', '$\\frac{52}{99}$'], hi: ['$\\frac{53}{99}$', '$\\frac{50}{99}$', '$\\frac{52}{90}$', '$\\frac{52}{99}$'] },
      correctIndex: 3,
      solution: {
        approach: 'Official Answer: Option D (**52/99**).',
        keyConcept: '0.(ab)̅ = ab / 99',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: 100x − x Equation', hi: 'Method 1: 100x − x Equation' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$x = 0.5252\\dots \\Rightarrow 100x = 52.52\\dots \\Rightarrow 99x = 52 \\Rightarrow \\mathbf{\\frac{52}{99}}$.',
              hi: '$99x = 52 \\Rightarrow x = \\mathbf{\\frac{52}{99}}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: 9s Rule (1 sec)', hi: 'Method 2: Bar-to-9 Rule (1 sec)' },
            timeTag: '1 sec',
            tone: 'emerald',
            steps: {
              en: '2 bar digits ⇒ `99` in denominator ⇒ **52 / 99**!',
              hi: '2 digits par bar ⇒ niche `99` ⇒ **52 / 99**!',
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
        hi: '$8.\\overline{46}$ ka exact fraction $p/q$ roop kya hoga?',
      },
      options: { en: ['$\\frac{838}{99}$', '$\\frac{83}{99}$', '$\\frac{846}{99}$', '$\\frac{84}{99}$'], hi: ['$\\frac{838}{99}$', '$\\frac{83}{99}$', '$\\frac{846}{99}$', '$\\frac{84}{99}$'] },
      correctIndex: 0,
      solution: {
        approach: 'Official Answer: Option A (**838/99**).',
        keyConcept: 'Mixed: (846 − 8) / 99 = 838 / 99 (Never forget to subtract 8!)',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Split 8 + 46/99', hi: 'Method 1: 8 + 46/99 Method' },
            timeTag: '12 sec',
            tone: 'teal',
            steps: {
              en: '$8 + \\frac{46}{99} = \\frac{792 + 46}{99} = \\mathbf{\\frac{838}{99}}$.',
              hi: '$8 + \\frac{46}{99} = \\frac{792 + 46}{99} = \\mathbf{\\frac{838}{99}}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: `(846 − 8) / 99` (2 sec)', hi: 'Method 2: `(846 − 8)/99` Formula (2 sec)' },
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
        hi: 'Evaluate: 6.841̄ − 2.691̄ (ध्यान दें: bar sirf last 1 par hai!)',
      },
      options: { en: ['3635/909', '3835/1100', '3735/900', '4035/900'], hi: ['3635/909', '3835/1100', '3735/900', '4035/900'] },
      correctIndex: 2,
      solution: {
        approach: 'Official Answer: Option C (**3735/900**).',
        keyConcept: 'Identical Infinite Tails (.001̄) Cancel Completely → 4.15',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Convert Both over 900', hi: 'Method 1: Dono ko /900 Form Me Badlein' },
            timeTag: '25 sec',
            tone: 'teal',
            steps: {
              en: '$6 + \\frac{757}{900} = \\frac{6157}{900}$; $2 + \\frac{622}{900} = \\frac{2422}{900} \\implies \\frac{6157-2422}{900} = \\mathbf{\\frac{3735}{900}}$.',
              hi: '$\\frac{6157}{900} - \\frac{2422}{900} = \\mathbf{\\frac{3735}{900}}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Tail Cancel (`6.84 − 2.69 = 4.15`) (3 sec)', hi: 'Method 2: Infinite Tail Cut (`3 sec`)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Both end in `.00111...`, so tail cancels! Left: $6.84 - 2.69 = 4.15 = 4.15 \\times \\frac{900}{900} = \\mathbf{\\frac{3735}{900}}$!',
              hi: 'Dono me `.00111...` cut gaya! Bacha $6.84 - 2.69 = 4.15 \\implies \\frac{4.15 \\times 900}{900} = \\mathbf{\\frac{3735}{900}}$!',
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
        hi: 'Simplify: 3 − √5 + 1/(√5 − √3) + 1/(√5 − √3)',
      },
      options: { en: ['3', '3 + √3', '2 + √5', '√3 − √5'], hi: ['3', '3 + √3', '2 + √5', '√3 − √5'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**3 + √3**).',
        keyConcept: 'Combine Identical Fractions Before Rationalising!',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Merge & Rationalise', hi: 'Method 1: Add & Rationalise' },
            timeTag: '18 sec',
            tone: 'teal',
            steps: {
              en: '$\\frac{2}{\\sqrt{5}-\\sqrt{3}} = \\frac{2(\\sqrt{5}+\\sqrt{3})}{5-3} = \\sqrt{5}+\\sqrt{3}$.\nAdd $3 - \\sqrt{5}$ ⇒ **3 + √3**.',
              hi: '$\\frac{2}{\\sqrt{5}-\\sqrt{3}} = \\sqrt{5}+\\sqrt{3}$.\n$(3-\\sqrt{5}) + (\\sqrt{5}+\\sqrt{3}) = \\mathbf{3 + \\sqrt{3}}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Gap `5−3=2` Instant Flip (3 sec)', hi: 'Method 2: Gap 2 Cancel & Flip (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Sum `2` cancels denominator gap `5 − 3 = 2`, leaving `+√5 + √3` ⇒ `−√5` cancels ⇒ **3 + √3**!',
              hi: '2 se gap `5−3=2` cut gaya ⇒ `+√5 + √3` aaya ⇒ `−√5` cancel ⇒ **3 + √3**!',
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
        hi: 'Agar $113^{0.99} = x$, $113^{0.77} = y$ aur $x^z = y^2$ hai, toh $z$ kiske paas hoga?',
      },
      options: { en: ['1.48', '1.56', '3.04', '2.89'], hi: ['1.48', '1.56', '3.04', '2.89'] },
      correctIndex: 1,
      solution: {
        approach: 'Official Answer: Option B (**1.56**). ($14/9 = 1.555...$)',
        keyConcept: 'Base Substitute: B^{pz} = B^{qk} ⇒ z = qk / p',
        methods: [
          {
            id: 'basic',
            title: { en: 'Method 1: Substitute Base 113', hi: 'Method 1: Base Equating Method' },
            timeTag: '15 sec',
            tone: 'teal',
            steps: {
              en: '$113^{0.99z} = 113^{1.54} \\implies 0.99z = 1.54 \\implies z = \\frac{154}{99} = \\frac{14}{9} \\approx \\mathbf{1.56}$.',
              hi: '$0.99z = 0.77 \\times 2 = 1.54 \\implies z = \\frac{154}{99} = \\frac{14}{9} \\approx \\mathbf{1.56}$.',
            },
          },
          {
            id: 'smart',
            title: { en: 'Method 2: Skip Base 113 (`0.77:0.99 = 7:9`) (3 sec)', hi: 'Method 2: Dummy Base Skip Trick (3 sec)' },
            timeTag: '3 sec',
            tone: 'emerald',
            steps: {
              en: 'Reduce `77 : 99 = 7 : 9` ⇒ $z = (7 \\times 2)/9 = 14/9 \\approx \\mathbf{1.56}$!',
              hi: '113 skip karein! `0.77 : 0.99 = 7 : 9` ⇒ $14/9 \\approx \\mathbf{1.56}$!',
            },
          },
        ],
      },
    },
  ],

  flashcards: [
    { front: { en: 'Smallest Prime vs Smallest Odd Composite?', hi: 'Smallest Prime vs Smallest Odd Composite?' }, back: { en: 'Prime = 2 (also ONLY even prime) | Odd Composite = 9 (1 = neither)', hi: 'Prime = 2 (akela even prime) | Odd Composite = 9 (1 dono nahi!)' } },
    { front: { en: 'Total Primes 1–100 & 1–50?', hi: '1–100 & 1–50 me total Primes?' }, back: { en: '1–50: 15 | 51–100: 10 | Total 1–100 = 25 (Sum = 1060)', hi: '1–50: 15 | 51–100: 10 | Total = 25 (Sum = 1060)' } },
    { front: { en: 'π vs 22/7 — Rational kaun hai?', hi: 'π aur 22/7 me Rational kaun hai?' }, back: { en: '22/7 = Rational (p/q) | π = Irrational', hi: '22/7 = Rational (p/q) | π = Irrational' } },
    { front: { en: '72, 88, 99 Divisibility Split?', hi: '72, 88, 99 ko kaise split karein?' }, back: { en: 'Co-Prime pairs: 72 = 8×9 | 88 = 8×11 | 99 = 9×11 (Lock 8 FIRST!)', hi: 'Co-Prime: 72 = 8×9 | 88 = 8×11 | 99 = 9×11 (Pehle 8 check karein!)' } },
    { front: { en: '6-digit `xyzxyz` (e.g. 437437) divides by?', hi: '`xyzxyz` (jaise 437437) kis-kis se katta hai?' }, back: { en: '7, 11, 13, and 1001 (7 × 11 × 13 = 1001)', hi: '7, 11, 13 aur 1001 (7 × 11 × 13 = 1001)' } },
    { front: { en: 'Forbidden Unit Digits of Perfect Squares?', hi: 'Perfect Square ke end me kya kabhi nahi aata?' }, back: { en: '2, 3, 7, 8 (and single trailing zero)', hi: '2, 3, 7, 8 (aur single 0)' } },
    { front: { en: 'Power ÷ 4 remainder = 0 ⇒ What power?', hi: 'Power ÷ 4 par r = 0 aaye toh kaun-si power lein?' }, back: { en: 'Always raise to Power 4 (2⁴=6, 3⁴=1, 7⁴=1, 8⁴=6) — NEVER 0!', hi: 'Hamesha Power 4 (2⁴=6, 3⁴=1, 7⁴=1, 8⁴=6) — kabhi 0 nahi!' } },
    { front: { en: 'C9 Division Map (÷2, ÷4, ÷5, ÷7, ÷8)?', hi: 'C9 Division Inversion Shortcut?' }, back: { en: '÷2≡×5 | ÷4≡×7 | ÷5≡×2 | ÷7≡×4 | ÷8≡×8', hi: '÷2≡×5 | ÷4≡×7 | ÷5≡×2 | ÷7≡×4 | ÷8≡×8' } },
    { front: { en: 'Greatest divisor leaving SAME UNKNOWN remainder?', hi: 'Same Unknown remainder par greatest divisor?' }, back: { en: 'HCF(|a − b|, |b − c|, |c − a|)', hi: 'HCF(|a − b|, |b − c|, |c − a|)' } },
    { front: { en: '360 Total Factors & 100! Trailing Zeroes?', hi: '360 ke Factors & 100! me Zeroes?' }, back: { en: '360 = 2³·3²·5¹ → 24 factors | 100! → 20 + 4 = 24 zeroes', hi: '360 → 24 factors | 100! → ⌊100/5⌋ + ⌊100/25⌋ = 24 zeroes' } },
    { front: { en: '12 ÷ 3 of 2 = ?', hi: '12 ÷ 3 of 2 = ?' }, back: { en: '2 (Solve 3 of 2 = 6 BEFORE dividing!)', hi: '2 (Of hamesha ÷ se pehle solve hota hai: 12 ÷ 6 = 2)' } },
    { front: { en: '0.2(37)̅ in p/q form = ?', hi: '0.2(37)̅ ka p/q fraction = ?' }, back: { en: '(237 − 2) / 990 = 235 / 990 = 47 / 198', hi: '(237 − 2) / 990 = 235 / 990 = 47 / 198' } },
  ],
};
