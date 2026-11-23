import alpShift1Questions from './alpShift1Bilingual.json';
import alpShift2Questions from './alpShift2Bilingual.json';
import alpShift3Questions from './alpShift3Bilingual.json';
import alpShift4Questions from './alpShift4Bilingual.json';
import alpShift5Questions from './alpShift5Bilingual.json';
import alpShift6Questions from './alpShift6Bilingual.json';
import alpShift7Questions from './alpShift7Bilingual.json';
import alpShift8Questions from './alpShift8Bilingual.json';

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

// --- SHIFT 3 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (22 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (40 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (13 Questions)
const scienceQuestionsS3 = alpShift3Questions.filter(q => q.section === 'General Science');
const mathsQuestionsS3 = alpShift3Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsS3 = alpShift3Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// --- SHIFT 4 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)
const scienceQuestionsS4 = alpShift4Questions.filter(q => q.section === 'General Science');
const mathsQuestionsS4 = alpShift4Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsS4 = alpShift4Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// --- SHIFT 5 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)
const scienceQuestionsS5 = alpShift5Questions.filter(q => q.section === 'General Science');
const mathsQuestionsS5 = alpShift5Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsS5 = alpShift5Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// --- SHIFT 6 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)
const scienceQuestionsS6 = alpShift6Questions.filter(q => q.section === 'General Science');
const mathsQuestionsS6 = alpShift6Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsS6 = alpShift6Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// --- SHIFT 7 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)
const scienceQuestionsS7 = alpShift7Questions.filter(q => q.section === 'General Science');
const mathsQuestionsS7 = alpShift7Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsS7 = alpShift7Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// --- SHIFT 8 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)
const scienceQuestionsS8 = alpShift8Questions.filter(q => q.section === 'General Science');
const mathsQuestionsS8 = alpShift8Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsS8 = alpShift8Questions.filter(q => q.section === 'General Intelligence & Reasoning');

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
    totalQuestions: alpShift3Questions.length,
    maxMarks: alpShift3Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': scienceQuestionsS3.length,
      'Mathematics': mathsQuestionsS3.length,
      'General Intelligence & Reasoning': reasoningQuestionsS3.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestionsS3.length}), Maths (${mathsQuestionsS3.length}), Reasoning (${reasoningQuestionsS3.length})`,
    questions: alpShift3Questions
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
    totalQuestions: scienceQuestionsS3.length,
    maxMarks: scienceQuestionsS3.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK / CA (${scienceQuestionsS3.length} Questions)`,
    questions: scienceQuestionsS3.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsS3.length,
    maxMarks: mathsQuestionsS3.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsS3.length} Questions)`,
    questions: mathsQuestionsS3.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsS3.length,
    maxMarks: reasoningQuestionsS3.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsS3.length} Questions)`,
    questions: reasoningQuestionsS3.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alpShift4Questions.length,
    maxMarks: alpShift4Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': scienceQuestionsS4.length,
      'Mathematics': mathsQuestionsS4.length,
      'General Intelligence & Reasoning': reasoningQuestionsS4.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestionsS4.length}), Maths (${mathsQuestionsS4.length}), Reasoning (${reasoningQuestionsS4.length})`,
    questions: alpShift4Questions
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
    totalQuestions: scienceQuestionsS4.length,
    maxMarks: scienceQuestionsS4.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestionsS4.length} Questions)`,
    questions: scienceQuestionsS4.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsS4.length,
    maxMarks: mathsQuestionsS4.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsS4.length} Questions)`,
    questions: mathsQuestionsS4.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsS4.length,
    maxMarks: reasoningQuestionsS4.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsS4.length} Questions)`,
    questions: reasoningQuestionsS4.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alpShift5Questions.length,
    maxMarks: alpShift5Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionDistribution: {
      'General Science': scienceQuestionsS5.length,
      'Mathematics': mathsQuestionsS5.length,
      'General Intelligence & Reasoning': reasoningQuestionsS5.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestionsS5.length}), Maths (${mathsQuestionsS5.length}), Reasoning (${reasoningQuestionsS5.length})`,
    questions: alpShift5Questions
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
    totalQuestions: scienceQuestionsS5.length,
    maxMarks: scienceQuestionsS5.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestionsS5.length} Questions)`,
    questions: scienceQuestionsS5.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsS5.length,
    maxMarks: mathsQuestionsS5.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsS5.length} Questions)`,
    questions: mathsQuestionsS5.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsS5.length,
    maxMarks: reasoningQuestionsS5.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsS5.length} Questions)`,
    questions: reasoningQuestionsS5.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alpShift6Questions.length,
    maxMarks: alpShift6Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestionsS6.length,
      'Mathematics': mathsQuestionsS6.length,
      'General Intelligence & Reasoning': reasoningQuestionsS6.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestionsS6.length}), Maths (${mathsQuestionsS6.length}), Reasoning (${reasoningQuestionsS6.length})`,
    questions: alpShift6Questions
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
    totalQuestions: scienceQuestionsS6.length,
    maxMarks: scienceQuestionsS6.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestionsS6.length} Questions)`,
    questions: scienceQuestionsS6.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsS6.length,
    maxMarks: mathsQuestionsS6.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsS6.length} Questions)`,
    questions: mathsQuestionsS6.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsS6.length,
    maxMarks: reasoningQuestionsS6.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsS6.length} Questions)`,
    questions: reasoningQuestionsS6.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alpShift7Questions.length,
    maxMarks: alpShift7Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestionsS7.length,
      'Mathematics': mathsQuestionsS7.length,
      'General Intelligence & Reasoning': reasoningQuestionsS7.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestionsS7.length}), Maths (${mathsQuestionsS7.length}), Reasoning (${reasoningQuestionsS7.length})`,
    questions: alpShift7Questions
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
    totalQuestions: scienceQuestionsS7.length,
    maxMarks: scienceQuestionsS7.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestionsS7.length} Questions)`,
    questions: scienceQuestionsS7.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsS7.length,
    maxMarks: mathsQuestionsS7.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsS7.length} Questions)`,
    questions: mathsQuestionsS7.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsS7.length,
    maxMarks: reasoningQuestionsS7.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsS7.length} Questions)`,
    questions: reasoningQuestionsS7.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alpShift8Questions.length,
    maxMarks: alpShift8Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestionsS8.length,
      'Mathematics': mathsQuestionsS8.length,
      'General Intelligence & Reasoning': reasoningQuestionsS8.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestionsS8.length}), Maths (${mathsQuestionsS8.length}), Reasoning (${reasoningQuestionsS8.length})`,
    questions: alpShift8Questions
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
    totalQuestions: scienceQuestionsS8.length,
    maxMarks: scienceQuestionsS8.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestionsS8.length} Questions)`,
    questions: scienceQuestionsS8.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsS8.length,
    maxMarks: mathsQuestionsS8.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsS8.length} Questions)`,
    questions: mathsQuestionsS8.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsS8.length,
    maxMarks: reasoningQuestionsS8.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsS8.length} Questions)`,
    questions: reasoningQuestionsS8.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
  }
];
