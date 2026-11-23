import alpShift1Questions from './alpShift1Bilingual.json';

// Build Sectional Tests from Shift 1
// Strict pure separation as per user commands:
// 1. Mathematics: Pure Maths only (24 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (41 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (10 Questions)
const scienceQuestions = alpShift1Questions.filter(q => q.section === 'General Science');
const mathsQuestions = alpShift1Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions = alpShift1Questions.filter(q => q.section === 'General Intelligence & Reasoning');

export const RAILWAY_TESTS = [
  // 1. Full Length Shift 1 Test (75 Questions - Mixed Official TCS iON Order)
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
    shiftName: 'Shift 1',
    durationMinutes: 60,
    totalQuestions: alpShift1Questions.length,
    maxMarks: alpShift1Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': scienceQuestions.length,
      'Mathematics': mathsQuestions.length,
      'General Intelligence & Reasoning': reasoningQuestions.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions.length}), Maths (${mathsQuestions.length}), Reasoning (${reasoningQuestions.length})`,
    questions: alpShift1Questions
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
    durationMinutes: 12,
    totalQuestions: scienceQuestions.length,
    maxMarks: scienceQuestions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK / CA (${scienceQuestions.length} Questions)`,
    questions: scienceQuestions.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    durationMinutes: 25,
    totalQuestions: mathsQuestions.length,
    maxMarks: mathsQuestions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions.length} Questions)`,
    questions: mathsQuestions.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    durationMinutes: 35,
    totalQuestions: reasoningQuestions.length,
    maxMarks: reasoningQuestions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions.length} Questions)`,
    questions: reasoningQuestions.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
  }
];
