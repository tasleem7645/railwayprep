import { CBT2_PART_B_TESTS } from './tradeTestsData';
import { GROUP_D_TESTS } from './groupDTestsData';
import { NTPC_UG_TESTS } from './ntpcUgTestsData';


// --- SHIFT 1 SECTIONAL SUBSETS ---
// Strict pure separation as per user commands:
// 1. Mathematics: Pure Maths only (24 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (41 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (10 Questions)

// --- SHIFT 2 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (40 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (10 Questions)

// --- SHIFT 3 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (22 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (40 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (13 Questions)

// --- SHIFT 4 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)

// --- SHIFT 5 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)

// --- SHIFT 6 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)

// --- SHIFT 7 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)

// --- SHIFT 8 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)

// --- SHIFT 9 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)

// ==========================================
// 2025 CYCLE: SHIFT 1 (13 Feb 2026 - 9:00 AM)
// ==========================================

// ==========================================
// 2025 CYCLE: SHIFT 2 (16 Feb 2026 - 9:00 AM)
// ==========================================

// ==========================================
// 2025 CYCLE: SHIFT 3 (16 Feb 2026 - 12:30 PM)
// ==========================================

// ==========================================
// 2025 CYCLE: SHIFT 4 (16 Feb 2026 - 04:00 PM)
// ==========================================

// ==========================================
// 2025 CYCLE: SHIFT 5 (17 Feb 2026 - 09:00 AM)
// ==========================================

// ==========================================
// 2025 CYCLE: SHIFT 6 (17 Feb 2026 - 12:30 PM)
// ==========================================

// ==========================================
// 2025 CYCLE: SHIFT 7 (17 Feb 2026 - 04:00 PM)
// ==========================================

// ==========================================
// 2025 CYCLE: SHIFT 8 (18 Feb 2026 - 09:00 AM)
// ==========================================

// ==========================================
// 2025 CYCLE: SHIFT 9 (18 Feb 2026 - 12:30 PM)
// ==========================================

// ==========================================
// 2025 CYCLE: SHIFT 10 (18 Feb 2026 - 04:00 PM)
// ==========================================


// --- CBT-2 PART A SHIFT 1 & 2 SUBSETS ---


export const RAILWAY_TESTS = [
  // ==========================================
  // SHIFT 1: 03 Nov 2026 (9:00 AM - 10:00 AM)
  // ==========================================
  // 1. Full Length Shift 1 Test (75 Questions)
  {
    id: 'rrb-alp-2026-cbt1-shift1',
    title: 'RRB ALP 2026 CBT-1: 03 Nov Shift 1 Official Full Paper',
    subTitle: 'Original Bilingual Paper as per RRB TCS iON Official Answer Key',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'full-shift',
    badge: 'Official Answer Key',
    badgeColor: 'emerald',
    shiftDate: '03/11/2026',
    shiftTime: '9:00 AM - 10:00 AM',
    shiftName: '03 Nov Shift 1',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': 10,
      'Mathematics': 24,
      'General Intelligence & Reasoning': 41
    },
    sectionSummary: `Covers: General Science & GK (10), Maths (24), Reasoning (41)`,
    questionSource: { file: './alpShift1Bilingual.json' }
  },

  // 2. Sectional Test - General Science & Current Affairs (Shift 1)
  {
    id: 'rrb-alp-2026-sec-science-s1',
    title: 'RRB ALP 2026: General Science & GK Sectional (Shift 1)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & Indian Polity / GK from 03 Nov Shift 1',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 1',
    shiftName: '03 Nov Shift 1',
    durationMinutes: 12,
    totalQuestions: 10,
    maxMarks: 10,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK / CA (10 Questions)`,
    questionSource: { file: './alpShift1Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 3. Sectional Test - Mathematics (Shift 1)
  {
    id: 'rrb-alp-2026-sec-maths-s1',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 1)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 1',
    shiftName: '03 Nov Shift 1',
    durationMinutes: 25,
    totalQuestions: 24,
    maxMarks: 24,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (24 Questions)`,
    questionSource: { file: './alpShift1Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 4. Sectional Test - General Intelligence & Reasoning (Shift 1)
  {
    id: 'rrb-alp-2026-sec-reasoning-s1',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 1)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Analogies',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 1',
    shiftName: '03 Nov Shift 1',
    durationMinutes: 35,
    totalQuestions: 41,
    maxMarks: 41,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (41 Questions)`,
    questionSource: { file: './alpShift1Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 2: 03 Nov 2026 (12:30 PM - 1:30 PM)
  // ==========================================
  // 5. Full Length Shift 2 Test (75 Questions)
  {
    id: 'rrb-alp-2026-cbt1-shift2',
    title: 'RRB ALP 2026 CBT-1: 03 Nov Shift 2 Official Full Paper',
    subTitle: 'Original Bilingual Paper as per RRB TCS iON Official Answer Key',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'full-shift',
    badge: 'Official Answer Key',
    badgeColor: 'emerald',
    shiftDate: '03/11/2026',
    shiftTime: '12:30 PM - 1:30 PM',
    shiftName: '03 Nov Shift 2',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': 10,
      'Mathematics': 25,
      'General Intelligence & Reasoning': 40
    },
    sectionSummary: `Covers: General Science & GK (10), Maths (25), Reasoning (40)`,
    questionSource: { file: './alpShift2Bilingual.json' }
  },

  // 6. Sectional Test - General Science & Current Affairs (Shift 2)
  {
    id: 'rrb-alp-2026-sec-science-s2',
    title: 'RRB ALP 2026: General Science & GK Sectional (Shift 2)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & Indian Polity / GK from 03 Nov Shift 2',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 2',
    shiftName: '03 Nov Shift 2',
    durationMinutes: 12,
    totalQuestions: 10,
    maxMarks: 10,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK / CA (10 Questions)`,
    questionSource: { file: './alpShift2Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 7. Sectional Test - Mathematics (Shift 2)
  {
    id: 'rrb-alp-2026-sec-maths-s2',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 2)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 2',
    shiftName: '03 Nov Shift 2',
    durationMinutes: 25,
    totalQuestions: 25,
    maxMarks: 25,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (25 Questions)`,
    questionSource: { file: './alpShift2Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 8. Sectional Test - General Intelligence & Reasoning (Shift 2)
  {
    id: 'rrb-alp-2026-sec-reasoning-s2',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 2)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 2',
    shiftName: '03 Nov Shift 2',
    durationMinutes: 35,
    totalQuestions: 40,
    maxMarks: 40,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (40 Questions)`,
    questionSource: { file: './alpShift2Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 3: 03 Nov 2026 (4:00 PM - 5:00 PM)
  // ==========================================
  // 9. Full Length Shift 3 Test (75 Questions)
  {
    id: 'rrb-alp-2026-cbt1-shift3',
    title: 'RRB ALP 2026 CBT-1: 03 Nov Shift 3 Official Full Paper',
    subTitle: 'Original Bilingual Paper as per RRB TCS iON Official Answer Key',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'full-shift',
    badge: 'Official Answer Key',
    badgeColor: 'emerald',
    shiftDate: '03/11/2026',
    shiftTime: '4:00 PM - 5:00 PM',
    shiftName: '03 Nov Shift 3',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': 13,
      'Mathematics': 22,
      'General Intelligence & Reasoning': 40
    },
    sectionSummary: `Covers: General Science & GK (13), Maths (22), Reasoning (40)`,
    questionSource: { file: './alpShift3Bilingual.json' }
  },

  // 10. Sectional Test - General Science & Current Affairs (Shift 3)
  {
    id: 'rrb-alp-2026-sec-science-s3',
    title: 'RRB ALP 2026: General Science & GK Sectional (Shift 3)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & Indian Polity / GK from 03 Nov Shift 3',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 3',
    shiftName: '03 Nov Shift 3',
    durationMinutes: 15,
    totalQuestions: 13,
    maxMarks: 13,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK / CA (13 Questions)`,
    questionSource: { file: './alpShift3Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 11. Sectional Test - Mathematics (Shift 3)
  {
    id: 'rrb-alp-2026-sec-maths-s3',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 3)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 3',
    shiftName: '03 Nov Shift 3',
    durationMinutes: 25,
    totalQuestions: 22,
    maxMarks: 22,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (22 Questions)`,
    questionSource: { file: './alpShift3Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 12. Sectional Test - General Intelligence & Reasoning (Shift 3)
  {
    id: 'rrb-alp-2026-sec-reasoning-s3',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 3)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 3',
    shiftName: '03 Nov Shift 3',
    durationMinutes: 35,
    totalQuestions: 40,
    maxMarks: 40,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (40 Questions)`,
    questionSource: { file: './alpShift3Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 4: 04 Nov 2026 (9:00 AM - 10:00 AM)
  // ==========================================
  // 13. Full Length Shift 4 Test (75 Questions)
  {
    id: 'rrb-alp-2026-cbt1-shift4',
    title: 'RRB ALP 2026 CBT-1: 04 Nov Shift 4 Official Full Paper',
    subTitle: 'Original TCS iON CBT exam held on 04 Nov 2026 (Shift 4: 9:00 AM - 10:00 AM)',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'full-shift',
    badge: 'Official Answer Key',
    badgeColor: 'emerald',
    shiftDate: '04/11/2026',
    shiftTime: '9:00 AM - 10:00 AM',
    shiftName: '04 Nov Shift 4',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': 8,
      'Mathematics': 25,
      'General Intelligence & Reasoning': 42
    },
    sectionSummary: `Covers: General Science & GK (8), Maths (25), Reasoning (42)`,
    questionSource: { file: './alpShift4Bilingual.json' }
  },

  // 14. Sectional Test - General Science & Current Affairs (Shift 4)
  {
    id: 'rrb-alp-2026-sec-science-s4',
    title: 'RRB ALP 2026: General Science & GK Sectional (Shift 4)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 04 Nov Shift 4',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '04/11/2026',
    shiftTime: 'Shift 4',
    shiftName: '04 Nov Shift 4',
    durationMinutes: 15,
    totalQuestions: 8,
    maxMarks: 8,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (8 Questions)`,
    questionSource: { file: './alpShift4Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 15. Sectional Test - Mathematics (Shift 4)
  {
    id: 'rrb-alp-2026-sec-maths-s4',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 4)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '04/11/2026',
    shiftTime: 'Shift 4',
    shiftName: '04 Nov Shift 4',
    durationMinutes: 25,
    totalQuestions: 25,
    maxMarks: 25,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (25 Questions)`,
    questionSource: { file: './alpShift4Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 16. Sectional Test - General Intelligence & Reasoning (Shift 4)
  {
    id: 'rrb-alp-2026-sec-reasoning-s4',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 4)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '04/11/2026',
    shiftTime: 'Shift 4',
    shiftName: '04 Nov Shift 4',
    durationMinutes: 35,
    totalQuestions: 42,
    maxMarks: 42,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (42 Questions)`,
    questionSource: { file: './alpShift4Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 5: 04 Nov 2026 (12:30 PM - 1:30 PM)
  // ==========================================
  // 17. Full Length Shift 5 Test (75 Questions)
  {
    id: 'rrb-alp-2026-cbt1-shift5',
    title: 'RRB ALP 2026 CBT-1: 04 Nov Shift 5 Official Full Paper',
    subTitle: 'Original TCS iON CBT exam held on 04 Nov 2026 (Shift 5: 12:30 PM - 1:30 PM)',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'full-shift',
    badge: 'Official Answer Key',
    badgeColor: 'emerald',
    shiftDate: '04/11/2026',
    shiftTime: '12:30 PM - 1:30 PM',
    shiftName: '04 Nov Shift 5',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': 8,
      'Mathematics': 25,
      'General Intelligence & Reasoning': 42
    },
    sectionSummary: `Covers: General Science & GK (8), Maths (25), Reasoning (42)`,
    questionSource: { file: './alpShift5Bilingual.json' }
  },

  // 18. Sectional Test - General Science & Current Affairs (Shift 5)
  {
    id: 'rrb-alp-2026-sec-science-s5',
    title: 'RRB ALP 2026: General Science & GK Sectional (Shift 5)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 04 Nov Shift 5',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '04/11/2026',
    shiftTime: 'Shift 5',
    shiftName: '04 Nov Shift 5',
    durationMinutes: 15,
    totalQuestions: 8,
    maxMarks: 8,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (8 Questions)`,
    questionSource: { file: './alpShift5Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 19. Sectional Test - Mathematics (Shift 5)
  {
    id: 'rrb-alp-2026-sec-maths-s5',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 5)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '04/11/2026',
    shiftTime: 'Shift 5',
    shiftName: '04 Nov Shift 5',
    durationMinutes: 25,
    totalQuestions: 25,
    maxMarks: 25,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (25 Questions)`,
    questionSource: { file: './alpShift5Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 20. Sectional Test - General Intelligence & Reasoning (Shift 5)
  {
    id: 'rrb-alp-2026-sec-reasoning-s5',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 5)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '04/11/2026',
    shiftTime: 'Shift 5',
    shiftName: '04 Nov Shift 5',
    durationMinutes: 35,
    totalQuestions: 42,
    maxMarks: 42,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (42 Questions)`,
    questionSource: { file: './alpShift5Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 6: 04 Nov 2026 (4:00 PM - 5:00 PM)
  // ==========================================

  // 21. Official Full Mock Test (Shift 6)
  {
    id: 'rrb-alp-2026-cbt1-shift6',
    title: 'RRB ALP 2026: CBT-1 Official Mock Test (04 Nov 2026 - Shift 6)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 6 • 04 Nov (4-5 PM)',
    badgeColor: 'emerald',
    shiftDate: '04/11/2026',
    shiftTime: '4:00 PM - 5:00 PM',
    shiftName: '04 Nov Shift 6',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 8,
      'Mathematics': 25,
      'General Intelligence & Reasoning': 42
    },
    sectionSummary: `Covers: General Science & GK (8), Maths (25), Reasoning (42)`,
    questionSource: { file: './alpShift6Bilingual.json' }
  },

  // 22. Sectional Test - General Science & Current Affairs (Shift 6)
  {
    id: 'rrb-alp-2026-sec-science-s6',
    title: 'RRB ALP 2026: General Science & GK Sectional (Shift 6)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 04 Nov Shift 6',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '04/11/2026',
    shiftTime: 'Shift 6',
    shiftName: '04 Nov Shift 6',
    durationMinutes: 15,
    totalQuestions: 8,
    maxMarks: 8,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (8 Questions)`,
    questionSource: { file: './alpShift6Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 23. Sectional Test - Mathematics (Shift 6)
  {
    id: 'rrb-alp-2026-sec-maths-s6',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 6)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '04/11/2026',
    shiftTime: 'Shift 6',
    shiftName: '04 Nov Shift 6',
    durationMinutes: 25,
    totalQuestions: 25,
    maxMarks: 25,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (25 Questions)`,
    questionSource: { file: './alpShift6Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 24. Sectional Test - General Intelligence & Reasoning (Shift 6)
  {
    id: 'rrb-alp-2026-sec-reasoning-s6',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 6)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '04/11/2026',
    shiftTime: 'Shift 6',
    shiftName: '04 Nov Shift 6',
    durationMinutes: 35,
    totalQuestions: 42,
    maxMarks: 42,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (42 Questions)`,
    questionSource: { file: './alpShift6Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 7: 05 Nov 2026 (9:00 AM - 10:00 AM)
  // ==========================================

  // 25. Official Full Mock Test (Shift 7)
  {
    id: 'rrb-alp-2026-cbt1-shift7',
    title: 'RRB ALP 2026: CBT-1 Official Mock Test (05 Nov 2026 - Shift 7)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 7 • 05 Nov (9-10 AM)',
    badgeColor: 'emerald',
    shiftDate: '05/11/2026',
    shiftTime: '9:00 AM - 10:00 AM',
    shiftName: '05 Nov Shift 7',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 8,
      'Mathematics': 25,
      'General Intelligence & Reasoning': 42
    },
    sectionSummary: `Covers: General Science & GK (8), Maths (25), Reasoning (42)`,
    questionSource: { file: './alpShift7Bilingual.json' }
  },

  // 26. Sectional Test - General Science & Current Affairs (Shift 7)
  {
    id: 'rrb-alp-2026-sec-science-s7',
    title: 'RRB ALP 2026: General Science & GK Sectional (Shift 7)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 05 Nov Shift 7',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '05/11/2026',
    shiftTime: 'Shift 7',
    shiftName: '05 Nov Shift 7',
    durationMinutes: 15,
    totalQuestions: 8,
    maxMarks: 8,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (8 Questions)`,
    questionSource: { file: './alpShift7Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 27. Sectional Test - Mathematics (Shift 7)
  {
    id: 'rrb-alp-2026-sec-maths-s7',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 7)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '05/11/2026',
    shiftTime: 'Shift 7',
    shiftName: '05 Nov Shift 7',
    durationMinutes: 25,
    totalQuestions: 25,
    maxMarks: 25,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (25 Questions)`,
    questionSource: { file: './alpShift7Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 28. Sectional Test - General Intelligence & Reasoning (Shift 7)
  {
    id: 'rrb-alp-2026-sec-reasoning-s7',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 7)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '05/11/2026',
    shiftTime: 'Shift 7',
    shiftName: '05 Nov Shift 7',
    durationMinutes: 35,
    totalQuestions: 42,
    maxMarks: 42,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (42 Questions)`,
    questionSource: { file: './alpShift7Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 8: 05 Nov 2026 (12:30 PM - 1:30 PM)
  // ==========================================

  // 29. Official Full Mock Test (Shift 8)
  {
    id: 'rrb-alp-2026-cbt1-shift8',
    title: 'RRB ALP 2026: CBT-1 Official Mock Test (05 Nov 2026 - Shift 8)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 8 • 05 Nov (12:30-1:30 PM)',
    badgeColor: 'emerald',
    shiftDate: '05/11/2026',
    shiftTime: '12:30 PM - 1:30 PM',
    shiftName: '05 Nov Shift 8',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 8,
      'Mathematics': 25,
      'General Intelligence & Reasoning': 42
    },
    sectionSummary: `Covers: General Science & GK (8), Maths (25), Reasoning (42)`,
    questionSource: { file: './alpShift8Bilingual.json' }
  },

  // 30. Sectional Test - General Science & Current Affairs (Shift 8)
  {
    id: 'rrb-alp-2026-sec-science-s8',
    title: 'RRB ALP 2026: General Science & GK Sectional (Shift 8)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 05 Nov Shift 8',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '05/11/2026',
    shiftTime: 'Shift 8',
    shiftName: '05 Nov Shift 8',
    durationMinutes: 15,
    totalQuestions: 8,
    maxMarks: 8,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (8 Questions)`,
    questionSource: { file: './alpShift8Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 31. Sectional Test - Mathematics (Shift 8)
  {
    id: 'rrb-alp-2026-sec-maths-s8',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 8)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '05/11/2026',
    shiftTime: 'Shift 8',
    shiftName: '05 Nov Shift 8',
    durationMinutes: 25,
    totalQuestions: 25,
    maxMarks: 25,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (25 Questions)`,
    questionSource: { file: './alpShift8Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 32. Sectional Test - General Intelligence & Reasoning (Shift 8)
  {
    id: 'rrb-alp-2026-sec-reasoning-s8',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 8)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '05/11/2026',
    shiftTime: 'Shift 8',
    shiftName: '05 Nov Shift 8',
    durationMinutes: 35,
    totalQuestions: 42,
    maxMarks: 42,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (42 Questions)`,
    questionSource: { file: './alpShift8Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 9: 05 Nov 2026 (4:00 PM - 5:00 PM)
  // ==========================================

  // 33. Official Full Mock Test (Shift 9)
  {
    id: 'rrb-alp-2026-cbt1-shift9',
    title: 'RRB ALP 2026: CBT-1 Official Mock Test (05 Nov 2026 - Shift 9)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 9 • 05 Nov (4:00-5:00 PM)',
    badgeColor: 'emerald',
    shiftDate: '05/11/2026',
    shiftTime: '4:00 PM - 5:00 PM',
    shiftName: '05 Nov Shift 9',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 8,
      'Mathematics': 25,
      'General Intelligence & Reasoning': 42
    },
    sectionSummary: `Covers: General Science & GK (8), Maths (25), Reasoning (42)`,
    questionSource: { file: './alpShift9Bilingual.json' }
  },

  // 34. Sectional Test - General Science & Current Affairs (Shift 9)
  {
    id: 'rrb-alp-2026-sec-science-s9',
    title: 'RRB ALP 2026: General Science & GK Sectional (Shift 9)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 05 Nov Shift 9',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '05/11/2026',
    shiftTime: 'Shift 9',
    shiftName: '05 Nov Shift 9',
    durationMinutes: 15,
    totalQuestions: 8,
    maxMarks: 8,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (8 Questions)`,
    questionSource: { file: './alpShift9Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 35. Sectional Test - Mathematics (Shift 9)
  {
    id: 'rrb-alp-2026-sec-maths-s9',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 9)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '05/11/2026',
    shiftTime: 'Shift 9',
    shiftName: '05 Nov Shift 9',
    durationMinutes: 25,
    totalQuestions: 25,
    maxMarks: 25,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (25 Questions)`,
    questionSource: { file: './alpShift9Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 36. Sectional Test - General Intelligence & Reasoning (Shift 9)
  {
    id: 'rrb-alp-2026-sec-reasoning-s9',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 9)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '05/11/2026',
    shiftTime: 'Shift 9',
    shiftName: '05 Nov Shift 9',
    durationMinutes: 35,
    totalQuestions: 42,
    maxMarks: 42,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (42 Questions)`,
    questionSource: { file: './alpShift9Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ===================================================
  // 2025 CYCLE: SHIFT 1 (13 Feb 2026 - 9:00 to 10:00 AM)
  // ===================================================

  // 37. Official Full Mock Test (2025 Shift 1)
  {
    id: 'rrb-alp-2025-cbt1-shift1',
    examYear: '2025',
    title: 'RRB ALP 2025: CBT-1 Official Mock Test (13 Feb 2026 - Shift 1)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 1 • 13 Feb (9:00-10:00 AM)',
    badgeColor: 'emerald',
    shiftDate: '13/02/2026',
    shiftTime: '9:00 AM - 10:00 AM',
    shiftName: '13 Feb Shift 1',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 10,
      'Mathematics': 25,
      'General Intelligence & Reasoning': 40
    },
    sectionSummary: `Covers: General Science & GK (10), Maths (25), Reasoning (40)`,
    questionSource: { file: './alp2025Shift1Bilingual.json' }
  },

  // 38. Sectional Test - General Science & Current Affairs (2025 Shift 1)
  {
    id: 'rrb-alp-2025-sec-science-s1',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 1)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 13 Feb Shift 1',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '13/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '13 Feb Shift 1',
    durationMinutes: 15,
    totalQuestions: 10,
    maxMarks: 10,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (10 Questions)`,
    questionSource: { file: './alp2025Shift1Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 39. Sectional Test - Mathematics (2025 Shift 1)
  {
    id: 'rrb-alp-2025-sec-maths-s1',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 1)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '13/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '13 Feb Shift 1',
    durationMinutes: 25,
    totalQuestions: 25,
    maxMarks: 25,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (25 Questions)`,
    questionSource: { file: './alp2025Shift1Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 40. Sectional Test - General Intelligence & Reasoning (2025 Shift 1)
  {
    id: 'rrb-alp-2025-sec-reasoning-s1',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 1)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '13/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '13 Feb Shift 1',
    durationMinutes: 35,
    totalQuestions: 40,
    maxMarks: 40,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (40 Questions)`,
    questionSource: { file: './alp2025Shift1Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ===================================================
  // 2025 CYCLE: SHIFT 2 (16 Feb 2026 - 9:00 to 10:00 AM)
  // ===================================================

  // 41. Official Full Mock Test (2025 Shift 2)
  {
    id: 'rrb-alp-2025-cbt1-shift2',
    examYear: '2025',
    title: 'RRB ALP 2025: CBT-1 Official Mock Test (16 Feb 2026 - Shift 1)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 2 • 16 Feb (9:00-10:00 AM)',
    badgeColor: 'emerald',
    shiftDate: '16/02/2026',
    shiftTime: '9:00 AM - 10:00 AM',
    shiftName: '16 Feb Shift 1',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 16,
      'Mathematics': 20,
      'General Intelligence & Reasoning': 39
    },
    sectionSummary: `Covers: General Science & GK (16), Maths (20), Reasoning (39)`,
    questionSource: { file: './alp2025Shift2Bilingual.json' }
  },

  // 42. Sectional Test - General Science & Current Affairs (2025 Shift 2)
  {
    id: 'rrb-alp-2025-sec-science-s2',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 2)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 16 Feb Shift 1',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '16/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '16 Feb Shift 1',
    durationMinutes: 15,
    totalQuestions: 16,
    maxMarks: 16,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (16 Questions)`,
    questionSource: { file: './alp2025Shift2Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 43. Sectional Test - Mathematics (2025 Shift 2)
  {
    id: 'rrb-alp-2025-sec-maths-s2',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 2)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '16/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '16 Feb Shift 1',
    durationMinutes: 25,
    totalQuestions: 20,
    maxMarks: 20,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (20 Questions)`,
    questionSource: { file: './alp2025Shift2Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 44. Sectional Test - General Intelligence & Reasoning (2025 Shift 2)
  {
    id: 'rrb-alp-2025-sec-reasoning-s2',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 2)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '16/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '16 Feb Shift 1',
    durationMinutes: 35,
    totalQuestions: 39,
    maxMarks: 39,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (39 Questions)`,
    questionSource: { file: './alp2025Shift2Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ===================================================
  // 2025 CYCLE: SHIFT 3 (16 Feb 2026 - 12:30 to 01:30 PM)
  // ===================================================

  // 45. Official Full Mock Test (2025 Shift 3)
  {
    id: 'rrb-alp-2025-cbt1-shift3',
    examYear: '2025',
    title: 'RRB ALP 2025: CBT-1 Official Mock Test (16 Feb 2026 - Shift 2)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 3 • 16 Feb (12:30-1:30 PM)',
    badgeColor: 'emerald',
    shiftDate: '16/02/2026',
    shiftTime: '12:30 PM - 01:30 PM',
    shiftName: '16 Feb Shift 2',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 10,
      'Mathematics': 20,
      'General Intelligence & Reasoning': 45
    },
    sectionSummary: `Covers: General Science & GK (10), Maths (20), Reasoning (45)`,
    questionSource: { file: './alp2025Shift3Bilingual.json' }
  },

  // 46. Sectional Test - General Science & Current Affairs (2025 Shift 3)
  {
    id: 'rrb-alp-2025-sec-science-s3',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 3)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 16 Feb Shift 2',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '16/02/2026',
    shiftTime: 'Shift 2',
    shiftName: '16 Feb Shift 2',
    durationMinutes: 15,
    totalQuestions: 10,
    maxMarks: 10,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (10 Questions)`,
    questionSource: { file: './alp2025Shift3Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 47. Sectional Test - Mathematics (2025 Shift 3)
  {
    id: 'rrb-alp-2025-sec-maths-s3',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 3)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '16/02/2026',
    shiftTime: 'Shift 2',
    shiftName: '16 Feb Shift 2',
    durationMinutes: 25,
    totalQuestions: 20,
    maxMarks: 20,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (20 Questions)`,
    questionSource: { file: './alp2025Shift3Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 48. Sectional Test - General Intelligence & Reasoning (2025 Shift 3)
  {
    id: 'rrb-alp-2025-sec-reasoning-s3',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 3)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '16/02/2026',
    shiftTime: 'Shift 2',
    shiftName: '16 Feb Shift 2',
    durationMinutes: 35,
    totalQuestions: 45,
    maxMarks: 45,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (45 Questions)`,
    questionSource: { file: './alp2025Shift3Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ===================================================
  // 2025 CYCLE: SHIFT 4 (16 Feb 2026 - 04:00 to 05:00 PM)
  // ===================================================

  // 49. Official Full Mock Test (2025 Shift 4)
  {
    id: 'rrb-alp-2025-cbt1-shift4',
    examYear: '2025',
    title: 'RRB ALP 2025: CBT-1 Official Mock Test (16 Feb 2026 - Shift 3)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 4 • 16 Feb (4:00-5:00 PM)',
    badgeColor: 'emerald',
    shiftDate: '16/02/2026',
    shiftTime: '04:00 PM - 05:00 PM',
    shiftName: '16 Feb Shift 3',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 12,
      'Mathematics': 17,
      'General Intelligence & Reasoning': 46
    },
    sectionSummary: `Covers: General Science & GK (12), Maths (17), Reasoning (46)`,
    questionSource: { file: './alp2025Shift4Bilingual.json' }
  },

  // 50. Sectional Test - General Science & Current Affairs (2025 Shift 4)
  {
    id: 'rrb-alp-2025-sec-science-s4',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 4)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 16 Feb Shift 3',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '16/02/2026',
    shiftTime: 'Shift 3',
    shiftName: '16 Feb Shift 3',
    durationMinutes: 15,
    totalQuestions: 12,
    maxMarks: 12,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (12 Questions)`,
    questionSource: { file: './alp2025Shift4Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 51. Sectional Test - Mathematics (2025 Shift 4)
  {
    id: 'rrb-alp-2025-sec-maths-s4',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 4)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '16/02/2026',
    shiftTime: 'Shift 3',
    shiftName: '16 Feb Shift 3',
    durationMinutes: 25,
    totalQuestions: 17,
    maxMarks: 17,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (17 Questions)`,
    questionSource: { file: './alp2025Shift4Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 52. Sectional Test - General Intelligence & Reasoning (2025 Shift 4)
  {
    id: 'rrb-alp-2025-sec-reasoning-s4',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 4)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '16/02/2026',
    shiftTime: 'Shift 3',
    shiftName: '16 Feb Shift 3',
    durationMinutes: 35,
    totalQuestions: 46,
    maxMarks: 46,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (46 Questions)`,
    questionSource: { file: './alp2025Shift4Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ===================================================
  // 2025 CYCLE: SHIFT 5 (17 Feb 2026 - 09:00 to 10:00 AM)
  // ===================================================

  // 53. Official Full Mock Test (2025 Shift 5)
  {
    id: 'rrb-alp-2025-cbt1-shift5',
    examYear: '2025',
    title: 'RRB ALP 2025: CBT-1 Official Mock Test (17 Feb 2026 - Shift 1)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 5 • 17 Feb (9:00-10:00 AM)',
    badgeColor: 'emerald',
    shiftDate: '17/02/2026',
    shiftTime: '09:00 AM - 10:00 AM',
    shiftName: '17 Feb Shift 1',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 15,
      'Mathematics': 10,
      'General Intelligence & Reasoning': 50
    },
    sectionSummary: `Covers: General Science & GK (15), Maths (10), Reasoning (50)`,
    questionSource: { file: './alp2025Shift5Bilingual.json' }
  },

  // 54. Sectional Test - General Science & Current Affairs (2025 Shift 5)
  {
    id: 'rrb-alp-2025-sec-science-s5',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 5)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 17 Feb Shift 1',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '17/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '17 Feb Shift 1',
    durationMinutes: 15,
    totalQuestions: 15,
    maxMarks: 15,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (15 Questions)`,
    questionSource: { file: './alp2025Shift5Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 55. Sectional Test - Mathematics (2025 Shift 5)
  {
    id: 'rrb-alp-2025-sec-maths-s5',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 5)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '17/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '17 Feb Shift 1',
    durationMinutes: 25,
    totalQuestions: 10,
    maxMarks: 10,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (10 Questions)`,
    questionSource: { file: './alp2025Shift5Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 56. Sectional Test - General Intelligence & Reasoning (2025 Shift 5)
  {
    id: 'rrb-alp-2025-sec-reasoning-s5',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 5)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '17/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '17 Feb Shift 1',
    durationMinutes: 35,
    totalQuestions: 50,
    maxMarks: 50,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (50 Questions)`,
    questionSource: { file: './alp2025Shift5Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ===================================================
  // 2025 CYCLE: SHIFT 6 (17 Feb 2026 - 12:30 to 01:30 PM)
  // ===================================================

  // 57. Official Full Mock Test (2025 Shift 6)
  {
    id: 'rrb-alp-2025-cbt1-shift6',
    examYear: '2025',
    title: 'RRB ALP 2025: CBT-1 Official Mock Test (17 Feb 2026 - Shift 2)',
    subTitle: 'Official Question Paper with 100% Bilingual Questions, Options & Solutions',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'official',
    badge: 'Shift 6 • 17 Feb (12:30-1:30 PM)',
    badgeColor: 'emerald',
    shiftDate: '17/02/2026',
    shiftTime: '12:30 PM - 01:30 PM',
    shiftName: '17 Feb Shift 2',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 14,
      'Mathematics': 17,
      'General Intelligence & Reasoning': 44
    },
    sectionSummary: `Covers: General Science & GK (14), Maths (17), Reasoning (44)`,
    questionSource: { file: './alp2025Shift6Bilingual.json' }
  },

  // 58. Sectional Test - General Science & Current Affairs (2025 Shift 6)
  {
    id: 'rrb-alp-2025-sec-science-s6',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 6)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 17 Feb Shift 2',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '17/02/2026',
    shiftTime: 'Shift 2',
    shiftName: '17 Feb Shift 2',
    durationMinutes: 15,
    totalQuestions: 14,
    maxMarks: 14,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (14 Questions)`,
    questionSource: { file: './alp2025Shift6Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 59. Sectional Test - Mathematics (2025 Shift 6)
  {
    id: 'rrb-alp-2025-sec-maths-s6',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 6)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '17/02/2026',
    shiftTime: 'Shift 2',
    shiftName: '17 Feb Shift 2',
    durationMinutes: 25,
    totalQuestions: 17,
    maxMarks: 17,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (17 Questions)`,
    questionSource: { file: './alp2025Shift6Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 60. Sectional Test - General Intelligence & Reasoning (2025 Shift 6)
  {
    id: 'rrb-alp-2025-sec-reasoning-s6',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 6)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '17/02/2026',
    shiftTime: 'Shift 2',
    shiftName: '17 Feb Shift 2',
    durationMinutes: 35,
    totalQuestions: 44,
    maxMarks: 44,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (44 Questions)`,
    questionSource: { file: './alp2025Shift6Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 7: 17 Feb 2026 (04:00 PM - 05:00 PM) • 2025 Cycle
  // ==========================================
  // 61. Full Mock Test (Shift 7)
  {
    id: 'rrb-alp-2025-cbt1-shift-7',
    examYear: '2025',
    title: 'RRB ALP 2025 Official Mock 07 (17 Feb Shift 3)',
    subTitle: 'Official RRB ALP CBT-1 Question Paper (17/02/2026 • 04:00 PM - 05:00 PM)',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'full',
    badge: 'Shift 7 • Official Paper',
    badgeColor: 'blue',
    shiftDate: '17/02/2026',
    shiftTime: '04:00 PM - 05:00 PM',
    shiftName: '17 Feb Shift 3',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 16,
      'Mathematics': 17,
      'General Intelligence & Reasoning': 42
    },
    sectionSummary: `Covers: General Science & GK (16), Maths (17), Reasoning (42)`,
    questionSource: { file: './alp2025Shift7Bilingual.json' }
  },

  // 62. Sectional Test - General Science & Current Affairs (2025 Shift 7)
  {
    id: 'rrb-alp-2025-sec-science-s7',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 7)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 17 Feb Shift 3',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '17/02/2026',
    shiftTime: 'Shift 3',
    shiftName: '17 Feb Shift 3',
    durationMinutes: 15,
    totalQuestions: 16,
    maxMarks: 16,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (16 Questions)`,
    questionSource: { file: './alp2025Shift7Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 63. Sectional Test - Mathematics (2025 Shift 7)
  {
    id: 'rrb-alp-2025-sec-maths-s7',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 7)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '17/02/2026',
    shiftTime: 'Shift 3',
    shiftName: '17 Feb Shift 3',
    durationMinutes: 25,
    totalQuestions: 17,
    maxMarks: 17,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (17 Questions)`,
    questionSource: { file: './alp2025Shift7Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 64. Sectional Test - General Intelligence & Reasoning (2025 Shift 7)
  {
    id: 'rrb-alp-2025-sec-reasoning-s7',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 7)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '17/02/2026',
    shiftTime: 'Shift 3',
    shiftName: '17 Feb Shift 3',
    durationMinutes: 35,
    totalQuestions: 42,
    maxMarks: 42,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (42 Questions)`,
    questionSource: { file: './alp2025Shift7Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 8: 18 Feb 2026 (09:00 AM - 10:00 AM) • 2025 Cycle
  // ==========================================
  // 65. Full Mock Test (Shift 8)
  {
    id: 'rrb-alp-2025-cbt1-shift-8',
    examYear: '2025',
    title: 'RRB ALP 2025 Official Mock 08 (18 Feb Shift 1)',
    subTitle: 'Official RRB ALP CBT-1 Question Paper (18/02/2026 • 09:00 AM - 10:00 AM)',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'full',
    badge: 'Shift 8 • Official Paper',
    badgeColor: 'blue',
    shiftDate: '18/02/2026',
    shiftTime: '09:00 AM - 10:00 AM',
    shiftName: '18 Feb Shift 1',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 11,
      'Mathematics': 22,
      'General Intelligence & Reasoning': 42
    },
    sectionSummary: `Covers: General Science & GK (11), Maths (22), Reasoning (42)`,
    questionSource: { file: './alp2025Shift8Bilingual.json' }
  },

  // 66. Sectional Test - General Science & Current Affairs (2025 Shift 8)
  {
    id: 'rrb-alp-2025-sec-science-s8',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 8)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 18 Feb Shift 1',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '18/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '18 Feb Shift 1',
    durationMinutes: 15,
    totalQuestions: 11,
    maxMarks: 11,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (11 Questions)`,
    questionSource: { file: './alp2025Shift8Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 67. Sectional Test - Mathematics (2025 Shift 8)
  {
    id: 'rrb-alp-2025-sec-maths-s8',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 8)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '18/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '18 Feb Shift 1',
    durationMinutes: 25,
    totalQuestions: 22,
    maxMarks: 22,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (22 Questions)`,
    questionSource: { file: './alp2025Shift8Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 68. Sectional Test - General Intelligence & Reasoning (2025 Shift 8)
  {
    id: 'rrb-alp-2025-sec-reasoning-s8',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 8)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '18/02/2026',
    shiftTime: 'Shift 1',
    shiftName: '18 Feb Shift 1',
    durationMinutes: 35,
    totalQuestions: 42,
    maxMarks: 42,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (42 Questions)`,
    questionSource: { file: './alp2025Shift8Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 9: 18 Feb 2026 (12:30 PM - 01:30 PM) • 2025 Cycle
  // ==========================================
  // 69. Full Mock Test (Shift 9)
  {
    id: 'rrb-alp-2025-cbt1-shift-9',
    examYear: '2025',
    title: 'RRB ALP 2025 Official Mock 09 (18 Feb Shift 2)',
    subTitle: 'Official RRB ALP CBT-1 Question Paper (18/02/2026 • 12:30 PM - 01:30 PM)',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'full',
    badge: 'Shift 9 • Official Paper',
    badgeColor: 'blue',
    shiftDate: '18/02/2026',
    shiftTime: '12:30 PM - 01:30 PM',
    shiftName: '18 Feb Shift 2',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 15,
      'Mathematics': 17,
      'General Intelligence & Reasoning': 43
    },
    sectionSummary: `Covers: General Science & GK (15), Maths (17), Reasoning (43)`,
    questionSource: { file: './alp2025Shift9Bilingual.json' }
  },

  // 70. Sectional Test - General Science & Current Affairs (2025 Shift 9)
  {
    id: 'rrb-alp-2025-sec-science-s9',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 9)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 18 Feb Shift 2',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '18/02/2026',
    shiftTime: 'Shift 2',
    shiftName: '18 Feb Shift 2',
    durationMinutes: 15,
    totalQuestions: 15,
    maxMarks: 15,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (15 Questions)`,
    questionSource: { file: './alp2025Shift9Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 71. Sectional Test - Mathematics (2025 Shift 9)
  {
    id: 'rrb-alp-2025-sec-maths-s9',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 9)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '18/02/2026',
    shiftTime: 'Shift 2',
    shiftName: '18 Feb Shift 2',
    durationMinutes: 25,
    totalQuestions: 17,
    maxMarks: 17,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (17 Questions)`,
    questionSource: { file: './alp2025Shift9Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 72. Sectional Test - General Intelligence & Reasoning (2025 Shift 9)
  {
    id: 'rrb-alp-2025-sec-reasoning-s9',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 9)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '18/02/2026',
    shiftTime: 'Shift 2',
    shiftName: '18 Feb Shift 2',
    durationMinutes: 35,
    totalQuestions: 43,
    maxMarks: 43,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (43 Questions)`,
    questionSource: { file: './alp2025Shift9Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // SHIFT 10: 18 Feb 2026 (04:00 PM - 05:00 PM) • 2025 Cycle
  // ==========================================
  // 73. Full Mock Test (Shift 10)
  {
    id: 'rrb-alp-2025-cbt1-shift-10',
    examYear: '2025',
    title: 'RRB ALP 2025 Official Mock 10 (18 Feb Shift 3)',
    subTitle: 'Official RRB ALP CBT-1 Question Paper (18/02/2026 • 04:00 PM - 05:00 PM)',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'full',
    badge: 'Shift 10 • Official Paper',
    badgeColor: 'blue',
    shiftDate: '18/02/2026',
    shiftTime: '04:00 PM - 05:00 PM',
    shiftName: '18 Feb Shift 3',
    durationMinutes: 60,
    totalQuestions: 75,
    maxMarks: 75,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': 15,
      'Mathematics': 19,
      'General Intelligence & Reasoning': 41
    },
    sectionSummary: `Covers: General Science & GK (15), Maths (19), Reasoning (41)`,
    questionSource: { file: './alp2025Shift10Bilingual.json' }
  },

  // 74. Sectional Test - General Science & Current Affairs (2025 Shift 10)
  {
    id: 'rrb-alp-2025-sec-science-s10',
    examYear: '2025',
    title: 'RRB ALP 2025: General Science & GK Sectional (Shift 10)',
    subTitle: 'Pure Science (Physics, Chemistry, Biology) & GK from 18 Feb Shift 3',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science & GK',
    badgeColor: 'teal',
    shiftDate: '18/02/2026',
    shiftTime: 'Shift 3',
    shiftName: '18 Feb Shift 3',
    durationMinutes: 15,
    totalQuestions: 15,
    maxMarks: 15,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (15 Questions)`,
    questionSource: { file: './alp2025Shift10Bilingual.json', sectionFilter: 'General Science', reindex: true }
  },

  // 75. Sectional Test - Mathematics (2025 Shift 10)
  {
    id: 'rrb-alp-2025-sec-maths-s10',
    examYear: '2025',
    title: 'RRB ALP 2025: Mathematics Sectional (Shift 10)',
    subTitle: 'Pure Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '18/02/2026',
    shiftTime: 'Shift 3',
    shiftName: '18 Feb Shift 3',
    durationMinutes: 25,
    totalQuestions: 19,
    maxMarks: 19,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (19 Questions)`,
    questionSource: { file: './alp2025Shift10Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 76. Sectional Test - General Intelligence & Reasoning (2025 Shift 10)
  {
    id: 'rrb-alp-2025-sec-reasoning-s10',
    examYear: '2025',
    title: 'RRB ALP 2025: Reasoning & Intelligence Sectional (Shift 10)',
    subTitle: 'Pure Reasoning: Puzzles, Seating Arrangements, Coding-Decoding, Series & Direction',
    exam: 'RRB ALP 2025',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '18/02/2026',
    shiftTime: 'Shift 3',
    shiftName: '18 Feb Shift 3',
    durationMinutes: 35,
    totalQuestions: 41,
    maxMarks: 41,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (41 Questions)`,
    questionSource: { file: './alp2025Shift10Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // ==========================================
  // RRB ALP 2025 CBT-2 PART A OFFICIAL TESTS
  // ==========================================

  // 77. Full Mock Test 1 - CBT-2 Part A (28 Jul Shift 1) - FREE DEMO
  {
    id: 'rrb-alp-2025-cbt2-mock-01',
    examYear: 'cbt2',
    title: 'RRB ALP 2025 CBT-2 Part A: Official Full Mock Test (28 Jul Shift 1)',
    subTitle: '100 Qs • 90 Mins • Basic Science & Engineering, Maths, Reasoning & General Awareness',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'official',
    badge: 'CBT-2 Official Mock',
    badgeColor: 'teal',
    isFreeDemo: true,
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 1 (09:30 AM - 12:00 PM)',
    shiftName: '28 Jul Shift 1',
    durationMinutes: 90,
    totalQuestions: 100,
    maxMarks: 100,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Basic Science & Engineering', 'Mathematics', 'General Intelligence & Reasoning', 'General Awareness'],
    sectionSummary: 'Part A Pattern: 42 BS&E • 19 Maths • 19 Reasoning • 20 General Awareness',
    questionSource: { file: './alp2025Cbt2Shift1Bilingual.json' }
  },

  // 78. Sectional - BS&E (CBT-2 Shift 1)
  {
    id: 'rrb-alp-2025-cbt2-sec-bse-s1',
    examYear: 'cbt2',
    title: 'RRB ALP CBT-2: Basic Science & Engineering Sectional (Shift 1)',
    subTitle: 'Engineering Drawing, Levers & Simple Machines, Electricity, Heat & Work-Power',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'sectional',
    badge: 'Sectional • BS&E',
    badgeColor: 'amber',
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 1',
    shiftName: '28 Jul Shift 1',
    durationMinutes: 35,
    totalQuestions: 42,
    maxMarks: 42,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Basic Science & Engineering'],
    sectionSummary: `Covers: Pure Basic Science & Engineering (42 Questions)`,
    questionSource: { file: './alp2025Cbt2Shift1Bilingual.json', sectionFilter: 'Basic Science & Engineering', reindex: true }
  },

  // 79. Sectional - Mathematics (CBT-2 Shift 1)
  {
    id: 'rrb-alp-2025-cbt2-sec-maths-s1',
    examYear: 'cbt2',
    title: 'RRB ALP CBT-2: Mathematics Sectional (Shift 1)',
    subTitle: 'Algebra, Trigonometry, Statistics, Mensuration, Speed-Time & Train Problems',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 1',
    shiftName: '28 Jul Shift 1',
    durationMinutes: 25,
    totalQuestions: 19,
    maxMarks: 19,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (19 Questions)`,
    questionSource: { file: './alp2025Cbt2Shift1Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 80. Sectional - Reasoning (CBT-2 Shift 1)
  {
    id: 'rrb-alp-2025-cbt2-sec-reasoning-s1',
    examYear: 'cbt2',
    title: 'RRB ALP CBT-2: Reasoning & Intelligence Sectional (Shift 1)',
    subTitle: 'Puzzles, Seating Arrangement, Coding-Decoding, Syllogism & Letter-Number Series',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 1',
    shiftName: '28 Jul Shift 1',
    durationMinutes: 25,
    totalQuestions: 19,
    maxMarks: 19,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (19 Questions)`,
    questionSource: { file: './alp2025Cbt2Shift1Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // 81. Sectional - General Awareness (CBT-2 Shift 1)
  {
    id: 'rrb-alp-2025-cbt2-sec-ga-s1',
    examYear: 'cbt2',
    title: 'RRB ALP CBT-2: General Awareness Sectional (Shift 1)',
    subTitle: 'Current Affairs, Science & Technology, Sports, Awards & Indian Polity',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'sectional',
    badge: 'Sectional • GA',
    badgeColor: 'emerald',
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 1',
    shiftName: '28 Jul Shift 1',
    durationMinutes: 10,
    totalQuestions: 20,
    maxMarks: 20,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Awareness'],
    sectionSummary: `Covers: General Awareness & Current Affairs (20 Questions)`,
    questionSource: { file: './alp2025Cbt2Shift1Bilingual.json', sectionFilter: 'General Awareness', reindex: true }
  },

  // 82. Full Mock Test 2 - CBT-2 Part A (28 Jul Shift 2) - PASS PRO
  {
    id: 'rrb-alp-2025-cbt2-mock-02',
    examYear: 'cbt2',
    title: 'RRB ALP 2025 CBT-2 Part A: Official Full Mock Test (28 Jul Shift 2)',
    subTitle: '100 Qs • 90 Mins • Basic Science & Engineering, Maths, Reasoning & General Awareness',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'official',
    badge: 'CBT-2 Official Mock',
    badgeColor: 'teal',
    isFreeDemo: false,
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 2 (02:30 PM - 05:00 PM)',
    shiftName: '28 Jul Shift 2',
    durationMinutes: 90,
    totalQuestions: 100,
    maxMarks: 100,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Basic Science & Engineering', 'Mathematics', 'General Intelligence & Reasoning', 'General Awareness'],
    sectionSummary: 'Part A Pattern: 45 BS&E • 17 Maths • 21 Reasoning • 17 General Awareness',
    questionSource: { file: './alp2025Cbt2Shift2Bilingual.json' }
  },

  // 83. Sectional - BS&E (CBT-2 Shift 2)
  {
    id: 'rrb-alp-2025-cbt2-sec-bse-s2',
    examYear: 'cbt2',
    title: 'RRB ALP CBT-2: Basic Science & Engineering Sectional (Shift 2)',
    subTitle: 'Engineering Drawing, Levers & Simple Machines, Electricity, Heat & Work-Power',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'sectional',
    badge: 'Sectional • BS&E',
    badgeColor: 'amber',
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 2',
    shiftName: '28 Jul Shift 2',
    durationMinutes: 35,
    totalQuestions: 45,
    maxMarks: 45,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Basic Science & Engineering'],
    sectionSummary: `Covers: Pure Basic Science & Engineering (45 Questions)`,
    questionSource: { file: './alp2025Cbt2Shift2Bilingual.json', sectionFilter: 'Basic Science & Engineering', reindex: true }
  },

  // 84. Sectional - Mathematics (CBT-2 Shift 2)
  {
    id: 'rrb-alp-2025-cbt2-sec-maths-s2',
    examYear: 'cbt2',
    title: 'RRB ALP CBT-2: Mathematics Sectional (Shift 2)',
    subTitle: 'Algebra, Trigonometry, Statistics, Mensuration, Speed-Time & Train Problems',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'sectional',
    badge: 'Sectional • Maths',
    badgeColor: 'indigo',
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 2',
    shiftName: '28 Jul Shift 2',
    durationMinutes: 25,
    totalQuestions: 17,
    maxMarks: 17,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (17 Questions)`,
    questionSource: { file: './alp2025Cbt2Shift2Bilingual.json', sectionFilter: 'Mathematics', reindex: true }
  },

  // 85. Sectional - Reasoning (CBT-2 Shift 2)
  {
    id: 'rrb-alp-2025-cbt2-sec-reasoning-s2',
    examYear: 'cbt2',
    title: 'RRB ALP CBT-2: Reasoning & Intelligence Sectional (Shift 2)',
    subTitle: 'Puzzles, Seating Arrangement, Coding-Decoding, Syllogism & Letter-Number Series',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 2',
    shiftName: '28 Jul Shift 2',
    durationMinutes: 25,
    totalQuestions: 21,
    maxMarks: 21,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (21 Questions)`,
    questionSource: { file: './alp2025Cbt2Shift2Bilingual.json', sectionFilter: 'General Intelligence & Reasoning', reindex: true }
  },

  // 86. Sectional - General Awareness (CBT-2 Shift 2)
  {
    id: 'rrb-alp-2025-cbt2-sec-ga-s2',
    examYear: 'cbt2',
    title: 'RRB ALP CBT-2: General Awareness Sectional (Shift 2)',
    subTitle: 'Current Affairs, Science & Technology, Sports, Awards & Indian Polity',
    exam: 'RRB ALP CBT-2 Part A',
    stage: 'CBT-2',
    category: 'sectional',
    badge: 'Sectional • GA',
    badgeColor: 'emerald',
    shiftDate: '28/07/2026',
    shiftTime: 'Shift 2',
    shiftName: '28 Jul Shift 2',
    durationMinutes: 10,
    totalQuestions: 17,
    maxMarks: 17,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Awareness'],
    sectionSummary: `Covers: General Awareness & Current Affairs (17 Questions)`,
    questionSource: { file: './alp2025Cbt2Shift2Bilingual.json', sectionFilter: 'General Awareness', reindex: true }
  },

  // ==========================================
  // RRB ALP 2025 CBT-2 PART B TRADE TESTS
  // ==========================================
  ...CBT2_PART_B_TESTS,

  // ==========================================
  // RRB GROUP D 2025 LEVEL-1 TESTS (ALL 48 SHIFTS + SECTIONALS)
  // ==========================================
  ...GROUP_D_TESTS,

  // ==========================================
  // RRB NTPC UG 2024 CBT-1 (CEN 06/2024 - 57 SHIFTS + SECTIONALS)
  // ==========================================
  ...NTPC_UG_TESTS
];
