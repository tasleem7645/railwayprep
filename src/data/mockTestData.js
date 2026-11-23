import alpShift1Questions from './alpShift1Bilingual.json';
import alpShift2Questions from './alpShift2Bilingual.json';

// --- SHIFT 1 SECTIONAL SUBSETS ---
// Strict pure separation as per user commands:
// 1. Mathematics: Pure Maths only (24 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (41 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (10 Questions)
const scienceQuestionsS1 = alpShift1Questions.filter(q => q.section === 'General Science');
const mathsQuestionsS1 = alpShift1Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsS1 = alpShift1Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// --- SHIFT 2 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (40 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (10 Questions)
const scienceQuestionsS2 = alpShift2Questions.filter(q => q.section === 'General Science');
const mathsQuestionsS2 = alpShift2Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsS2 = alpShift2Questions.filter(q => q.section === 'General Intelligence & Reasoning');

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
      'General Science': scienceQuestionsS1.length,
      'Mathematics': mathsQuestionsS1.length,
      'General Intelligence & Reasoning': reasoningQuestionsS1.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestionsS1.length}), Maths (${mathsQuestionsS1.length}), Reasoning (${reasoningQuestionsS1.length})`,
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
    shiftName: '03 Nov Shift 1',
    durationMinutes: 12,
    totalQuestions: scienceQuestionsS1.length,
    maxMarks: scienceQuestionsS1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK / CA (${scienceQuestionsS1.length} Questions)`,
    questions: scienceQuestionsS1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsS1.length,
    maxMarks: mathsQuestionsS1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsS1.length} Questions)`,
    questions: mathsQuestionsS1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsS1.length,
    maxMarks: reasoningQuestionsS1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsS1.length} Questions)`,
    questions: reasoningQuestionsS1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alpShift2Questions.length,
    maxMarks: alpShift2Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': scienceQuestionsS2.length,
      'Mathematics': mathsQuestionsS2.length,
      'General Intelligence & Reasoning': reasoningQuestionsS2.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestionsS2.length}), Maths (${mathsQuestionsS2.length}), Reasoning (${reasoningQuestionsS2.length})`,
    questions: alpShift2Questions
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
    totalQuestions: scienceQuestionsS2.length,
    maxMarks: scienceQuestionsS2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK / CA (${scienceQuestionsS2.length} Questions)`,
    questions: scienceQuestionsS2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsS2.length,
    maxMarks: mathsQuestionsS2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsS2.length} Questions)`,
    questions: mathsQuestionsS2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsS2.length,
    maxMarks: reasoningQuestionsS2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsS2.length} Questions)`,
    questions: reasoningQuestionsS2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
  }
];
