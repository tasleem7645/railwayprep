import alpShift1Questions from './alpShift1Bilingual.json';

// Build Sectional Tests from Shift 1
const scienceQuestions = alpShift1Questions.filter(q => q.section === 'General Science');
const mathsQuestions = alpShift1Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions = alpShift1Questions.filter(q => q.section === 'General Intelligence & Reasoning');
const gaQuestions = alpShift1Questions.filter(q => q.section === 'General Awareness');

export const RAILWAY_TESTS = [
  // 1. Full Length Shift 1 Test (75 Questions - Mixed TCS iON Format)
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
      'General Intelligence & Reasoning',
      'General Awareness'
    ],
    sectionDistribution: {
      'General Science': scienceQuestions.length,
      'Mathematics': mathsQuestions.length,
      'General Intelligence & Reasoning': reasoningQuestions.length,
      'General Awareness': gaQuestions.length
    },
    questions: alpShift1Questions
  },

  // 2. Sectional Test - General Science (Shift 1)
  {
    id: 'rrb-alp-2026-sec-science-s1',
    title: 'RRB ALP 2026: General Science Sectional (Shift 1)',
    subTitle: 'Physics, Chemistry & Biology Official Questions from 03 Nov Shift 1',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Science',
    badgeColor: 'teal',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 1',
    durationMinutes: 15,
    totalQuestions: scienceQuestions.length,
    maxMarks: scienceQuestions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    questions: scienceQuestions.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
  },

  // 3. Sectional Test - Mathematics (Shift 1)
  {
    id: 'rrb-alp-2026-sec-maths-s1',
    title: 'RRB ALP 2026: Mathematics Sectional (Shift 1)',
    subTitle: 'Arithmetic, Algebra, Geometry, Mensuration & Trigonometry Official Questions',
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
    questions: mathsQuestions.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
  },

  // 4. Sectional Test - General Intelligence & Reasoning (Shift 1)
  {
    id: 'rrb-alp-2026-sec-reasoning-s1',
    title: 'RRB ALP 2026: Reasoning & Intelligence Sectional (Shift 1)',
    subTitle: 'Puzzles, Seating Arrangements, Coding-Decoding & Analogy Official Questions',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • Reasoning',
    badgeColor: 'purple',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 1',
    durationMinutes: 30,
    totalQuestions: reasoningQuestions.length,
    maxMarks: reasoningQuestions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    questions: reasoningQuestions.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
  },

  // 5. Sectional Test - General Awareness (Shift 1)
  {
    id: 'rrb-alp-2026-sec-ga-s1',
    title: 'RRB ALP 2026: General Awareness Sectional (Shift 1)',
    subTitle: 'Indian Polity, Constitution & Current Affairs Official Questions',
    exam: 'RRB ALP 2026',
    stage: 'CBT-1',
    category: 'sectional',
    badge: 'Sectional • GA',
    badgeColor: 'amber',
    shiftDate: '03/11/2026',
    shiftTime: 'Shift 1',
    durationMinutes: 5,
    totalQuestions: gaQuestions.length,
    maxMarks: gaQuestions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Awareness'],
    questions: gaQuestions.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
  },

  // 6. NTPC CBT-1 Interactive Demo Test
  {
    id: 'rrb-ntpc-live-cbt-1',
    title: 'RRB NTPC 2026: Live All-India Free CBT-1 Full Mock Test',
    subTitle: 'High-Yield Expected Questions for NTPC Undergraduate & Graduate',
    exam: 'RRB NTPC 2026',
    stage: 'CBT-1',
    category: 'full-shift',
    badge: 'Trending Live',
    badgeColor: 'emerald',
    durationMinutes: 20,
    totalQuestions: 10,
    maxMarks: 10,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['All Sections', 'General Science', 'Mathematics', 'General Intelligence & Reasoning', 'General Awareness'],
    questions: alpShift1Questions.slice(0, 10).map((q, idx) => ({ ...q, id: idx + 1 }))
  }
];
