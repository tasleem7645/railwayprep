import alpShift1Questions from './alpShift1Bilingual.json';
import alpShift2Questions from './alpShift2Bilingual.json';
import alpShift3Questions from './alpShift3Bilingual.json';
import alpShift4Questions from './alpShift4Bilingual.json';
import alpShift5Questions from './alpShift5Bilingual.json';
import alpShift6Questions from './alpShift6Bilingual.json';
import alpShift7Questions from './alpShift7Bilingual.json';
import alpShift8Questions from './alpShift8Bilingual.json';
import alpShift9Questions from './alpShift9Bilingual.json';
import alp2025Shift1Questions from './alp2025Shift1Bilingual.json';
import alp2025Shift2Questions from './alp2025Shift2Bilingual.json';
import alp2025Shift3Questions from './alp2025Shift3Bilingual.json';
import alp2025Shift4Questions from './alp2025Shift4Bilingual.json';
import alp2025Shift5Questions from './alp2025Shift5Bilingual.json';
import alp2025Shift6Questions from './alp2025Shift6Bilingual.json';
import alp2025Shift7Questions from './alp2025Shift7Bilingual.json';
import alp2025Shift8Questions from './alp2025Shift8Bilingual.json';
import alp2025Shift9Questions from './alp2025Shift9Bilingual.json';
import alp2025Shift10Questions from './alp2025Shift10Bilingual.json';
import alp2025Cbt2Shift1Questions from './alp2025Cbt2Shift1Bilingual.json';
import alp2025Cbt2Shift2Questions from './alp2025Cbt2Shift2Bilingual.json';


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

// --- SHIFT 9 SECTIONAL SUBSETS ---
// 1. Mathematics: Pure Maths only (25 Questions)
// 2. Reasoning: Pure Intelligence & Reasoning only (42 Questions)
// 3. General Science: Physics, Chemistry, Biology + Indian Polity/Current Affairs (8 Questions)
const scienceQuestionsS9 = alpShift9Questions.filter(q => q.section === 'General Science');
const mathsQuestionsS9 = alpShift9Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsS9 = alpShift9Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 1 (13 Feb 2026 - 9:00 AM)
// ==========================================
const scienceQuestions2025S1 = alp2025Shift1Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S1 = alp2025Shift1Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S1 = alp2025Shift1Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 2 (16 Feb 2026 - 9:00 AM)
// ==========================================
const scienceQuestions2025S2 = alp2025Shift2Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S2 = alp2025Shift2Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S2 = alp2025Shift2Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 3 (16 Feb 2026 - 12:30 PM)
// ==========================================
const scienceQuestions2025S3 = alp2025Shift3Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S3 = alp2025Shift3Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S3 = alp2025Shift3Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 4 (16 Feb 2026 - 04:00 PM)
// ==========================================
const scienceQuestions2025S4 = alp2025Shift4Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S4 = alp2025Shift4Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S4 = alp2025Shift4Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 5 (17 Feb 2026 - 09:00 AM)
// ==========================================
const scienceQuestions2025S5 = alp2025Shift5Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S5 = alp2025Shift5Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S5 = alp2025Shift5Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 6 (17 Feb 2026 - 12:30 PM)
// ==========================================
const scienceQuestions2025S6 = alp2025Shift6Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S6 = alp2025Shift6Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S6 = alp2025Shift6Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 7 (17 Feb 2026 - 04:00 PM)
// ==========================================
const scienceQuestions2025S7 = alp2025Shift7Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S7 = alp2025Shift7Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S7 = alp2025Shift7Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 8 (18 Feb 2026 - 09:00 AM)
// ==========================================
const scienceQuestions2025S8 = alp2025Shift8Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S8 = alp2025Shift8Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S8 = alp2025Shift8Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 9 (18 Feb 2026 - 12:30 PM)
// ==========================================
const scienceQuestions2025S9 = alp2025Shift9Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S9 = alp2025Shift9Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S9 = alp2025Shift9Questions.filter(q => q.section === 'General Intelligence & Reasoning');

// ==========================================
// 2025 CYCLE: SHIFT 10 (18 Feb 2026 - 04:00 PM)
// ==========================================
const scienceQuestions2025S10 = alp2025Shift10Questions.filter(q => q.section === 'General Science');
const mathsQuestions2025S10 = alp2025Shift10Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestions2025S10 = alp2025Shift10Questions.filter(q => q.section === 'General Intelligence & Reasoning');


// --- CBT-2 PART A SHIFT 1 & 2 SUBSETS ---
const bseQuestionsCbt2S1 = alp2025Cbt2Shift1Questions.filter(q => q.section === 'Basic Science & Engineering');
const mathsQuestionsCbt2S1 = alp2025Cbt2Shift1Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsCbt2S1 = alp2025Cbt2Shift1Questions.filter(q => q.section === 'General Intelligence & Reasoning');
const gaQuestionsCbt2S1 = alp2025Cbt2Shift1Questions.filter(q => q.section === 'General Awareness');

const bseQuestionsCbt2S2 = alp2025Cbt2Shift2Questions.filter(q => q.section === 'Basic Science & Engineering');
const mathsQuestionsCbt2S2 = alp2025Cbt2Shift2Questions.filter(q => q.section === 'Mathematics');
const reasoningQuestionsCbt2S2 = alp2025Cbt2Shift2Questions.filter(q => q.section === 'General Intelligence & Reasoning');
const gaQuestionsCbt2S2 = alp2025Cbt2Shift2Questions.filter(q => q.section === 'General Awareness');

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
    totalQuestions: alpShift9Questions.length,
    maxMarks: alpShift9Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestionsS9.length,
      'Mathematics': mathsQuestionsS9.length,
      'General Intelligence & Reasoning': reasoningQuestionsS9.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestionsS9.length}), Maths (${mathsQuestionsS9.length}), Reasoning (${reasoningQuestionsS9.length})`,
    questions: alpShift9Questions
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
    totalQuestions: scienceQuestionsS9.length,
    maxMarks: scienceQuestionsS9.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestionsS9.length} Questions)`,
    questions: scienceQuestionsS9.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsS9.length,
    maxMarks: mathsQuestionsS9.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsS9.length} Questions)`,
    questions: mathsQuestionsS9.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsS9.length,
    maxMarks: reasoningQuestionsS9.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsS9.length} Questions)`,
    questions: reasoningQuestionsS9.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alp2025Shift1Questions.length,
    maxMarks: alp2025Shift1Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestions2025S1.length,
      'Mathematics': mathsQuestions2025S1.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S1.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S1.length}), Maths (${mathsQuestions2025S1.length}), Reasoning (${reasoningQuestions2025S1.length})`,
    questions: alp2025Shift1Questions
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
    totalQuestions: scienceQuestions2025S1.length,
    maxMarks: scienceQuestions2025S1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S1.length} Questions)`,
    questions: scienceQuestions2025S1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S1.length,
    maxMarks: mathsQuestions2025S1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S1.length} Questions)`,
    questions: mathsQuestions2025S1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S1.length,
    maxMarks: reasoningQuestions2025S1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S1.length} Questions)`,
    questions: reasoningQuestions2025S1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alp2025Shift2Questions.length,
    maxMarks: alp2025Shift2Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestions2025S2.length,
      'Mathematics': mathsQuestions2025S2.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S2.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S2.length}), Maths (${mathsQuestions2025S2.length}), Reasoning (${reasoningQuestions2025S2.length})`,
    questions: alp2025Shift2Questions
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
    totalQuestions: scienceQuestions2025S2.length,
    maxMarks: scienceQuestions2025S2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S2.length} Questions)`,
    questions: scienceQuestions2025S2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S2.length,
    maxMarks: mathsQuestions2025S2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S2.length} Questions)`,
    questions: mathsQuestions2025S2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S2.length,
    maxMarks: reasoningQuestions2025S2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S2.length} Questions)`,
    questions: reasoningQuestions2025S2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alp2025Shift3Questions.length,
    maxMarks: alp2025Shift3Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestions2025S3.length,
      'Mathematics': mathsQuestions2025S3.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S3.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S3.length}), Maths (${mathsQuestions2025S3.length}), Reasoning (${reasoningQuestions2025S3.length})`,
    questions: alp2025Shift3Questions
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
    totalQuestions: scienceQuestions2025S3.length,
    maxMarks: scienceQuestions2025S3.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S3.length} Questions)`,
    questions: scienceQuestions2025S3.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S3.length,
    maxMarks: mathsQuestions2025S3.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S3.length} Questions)`,
    questions: mathsQuestions2025S3.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S3.length,
    maxMarks: reasoningQuestions2025S3.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S3.length} Questions)`,
    questions: reasoningQuestions2025S3.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alp2025Shift4Questions.length,
    maxMarks: alp2025Shift4Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestions2025S4.length,
      'Mathematics': mathsQuestions2025S4.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S4.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S4.length}), Maths (${mathsQuestions2025S4.length}), Reasoning (${reasoningQuestions2025S4.length})`,
    questions: alp2025Shift4Questions
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
    totalQuestions: scienceQuestions2025S4.length,
    maxMarks: scienceQuestions2025S4.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S4.length} Questions)`,
    questions: scienceQuestions2025S4.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S4.length,
    maxMarks: mathsQuestions2025S4.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S4.length} Questions)`,
    questions: mathsQuestions2025S4.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S4.length,
    maxMarks: reasoningQuestions2025S4.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S4.length} Questions)`,
    questions: reasoningQuestions2025S4.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alp2025Shift5Questions.length,
    maxMarks: alp2025Shift5Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestions2025S5.length,
      'Mathematics': mathsQuestions2025S5.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S5.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S5.length}), Maths (${mathsQuestions2025S5.length}), Reasoning (${reasoningQuestions2025S5.length})`,
    questions: alp2025Shift5Questions
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
    totalQuestions: scienceQuestions2025S5.length,
    maxMarks: scienceQuestions2025S5.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S5.length} Questions)`,
    questions: scienceQuestions2025S5.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S5.length,
    maxMarks: mathsQuestions2025S5.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S5.length} Questions)`,
    questions: mathsQuestions2025S5.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S5.length,
    maxMarks: reasoningQuestions2025S5.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S5.length} Questions)`,
    questions: reasoningQuestions2025S5.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: alp2025Shift6Questions.length,
    maxMarks: alp2025Shift6Questions.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: [
      'All Sections',
      'General Science',
      'Mathematics',
      'General Intelligence & Reasoning'
    ],
    sectionCounts: {
      'General Science': scienceQuestions2025S6.length,
      'Mathematics': mathsQuestions2025S6.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S6.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S6.length}), Maths (${mathsQuestions2025S6.length}), Reasoning (${reasoningQuestions2025S6.length})`,
    questions: alp2025Shift6Questions
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
    totalQuestions: scienceQuestions2025S6.length,
    maxMarks: scienceQuestions2025S6.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S6.length} Questions)`,
    questions: scienceQuestions2025S6.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S6.length,
    maxMarks: mathsQuestions2025S6.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S6.length} Questions)`,
    questions: mathsQuestions2025S6.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S6.length,
    maxMarks: reasoningQuestions2025S6.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S6.length} Questions)`,
    questions: reasoningQuestions2025S6.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
      'General Science': scienceQuestions2025S7.length,
      'Mathematics': mathsQuestions2025S7.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S7.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S7.length}), Maths (${mathsQuestions2025S7.length}), Reasoning (${reasoningQuestions2025S7.length})`,
    questions: alp2025Shift7Questions
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
    totalQuestions: scienceQuestions2025S7.length,
    maxMarks: scienceQuestions2025S7.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S7.length} Questions)`,
    questions: scienceQuestions2025S7.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S7.length,
    maxMarks: mathsQuestions2025S7.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S7.length} Questions)`,
    questions: mathsQuestions2025S7.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S7.length,
    maxMarks: reasoningQuestions2025S7.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S7.length} Questions)`,
    questions: reasoningQuestions2025S7.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
      'General Science': scienceQuestions2025S8.length,
      'Mathematics': mathsQuestions2025S8.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S8.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S8.length}), Maths (${mathsQuestions2025S8.length}), Reasoning (${reasoningQuestions2025S8.length})`,
    questions: alp2025Shift8Questions
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
    totalQuestions: scienceQuestions2025S8.length,
    maxMarks: scienceQuestions2025S8.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S8.length} Questions)`,
    questions: scienceQuestions2025S8.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S8.length,
    maxMarks: mathsQuestions2025S8.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S8.length} Questions)`,
    questions: mathsQuestions2025S8.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S8.length,
    maxMarks: reasoningQuestions2025S8.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S8.length} Questions)`,
    questions: reasoningQuestions2025S8.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
      'General Science': scienceQuestions2025S9.length,
      'Mathematics': mathsQuestions2025S9.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S9.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S9.length}), Maths (${mathsQuestions2025S9.length}), Reasoning (${reasoningQuestions2025S9.length})`,
    questions: alp2025Shift9Questions
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
    totalQuestions: scienceQuestions2025S9.length,
    maxMarks: scienceQuestions2025S9.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S9.length} Questions)`,
    questions: scienceQuestions2025S9.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S9.length,
    maxMarks: mathsQuestions2025S9.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S9.length} Questions)`,
    questions: mathsQuestions2025S9.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S9.length,
    maxMarks: reasoningQuestions2025S9.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S9.length} Questions)`,
    questions: reasoningQuestions2025S9.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
      'General Science': scienceQuestions2025S10.length,
      'Mathematics': mathsQuestions2025S10.length,
      'General Intelligence & Reasoning': reasoningQuestions2025S10.length
    },
    sectionSummary: `Covers: General Science & GK (${scienceQuestions2025S10.length}), Maths (${mathsQuestions2025S10.length}), Reasoning (${reasoningQuestions2025S10.length})`,
    questions: alp2025Shift10Questions
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
    totalQuestions: scienceQuestions2025S10.length,
    maxMarks: scienceQuestions2025S10.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Science'],
    sectionSummary: `Covers: Pure General Science & GK (${scienceQuestions2025S10.length} Questions)`,
    questions: scienceQuestions2025S10.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestions2025S10.length,
    maxMarks: mathsQuestions2025S10.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestions2025S10.length} Questions)`,
    questions: mathsQuestions2025S10.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestions2025S10.length,
    maxMarks: reasoningQuestions2025S10.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestions2025S10.length} Questions)`,
    questions: reasoningQuestions2025S10.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    questions: alp2025Cbt2Shift1Questions
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
    totalQuestions: bseQuestionsCbt2S1.length,
    maxMarks: bseQuestionsCbt2S1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Basic Science & Engineering'],
    sectionSummary: `Covers: Pure Basic Science & Engineering (${bseQuestionsCbt2S1.length} Questions)`,
    questions: bseQuestionsCbt2S1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsCbt2S1.length,
    maxMarks: mathsQuestionsCbt2S1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsCbt2S1.length} Questions)`,
    questions: mathsQuestionsCbt2S1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsCbt2S1.length,
    maxMarks: reasoningQuestionsCbt2S1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsCbt2S1.length} Questions)`,
    questions: reasoningQuestionsCbt2S1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: gaQuestionsCbt2S1.length,
    maxMarks: gaQuestionsCbt2S1.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Awareness'],
    sectionSummary: `Covers: General Awareness & Current Affairs (${gaQuestionsCbt2S1.length} Questions)`,
    questions: gaQuestionsCbt2S1.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    questions: alp2025Cbt2Shift2Questions
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
    totalQuestions: bseQuestionsCbt2S2.length,
    maxMarks: bseQuestionsCbt2S2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Basic Science & Engineering'],
    sectionSummary: `Covers: Pure Basic Science & Engineering (${bseQuestionsCbt2S2.length} Questions)`,
    questions: bseQuestionsCbt2S2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: mathsQuestionsCbt2S2.length,
    maxMarks: mathsQuestionsCbt2S2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['Mathematics'],
    sectionSummary: `Covers: Pure Mathematics (${mathsQuestionsCbt2S2.length} Questions)`,
    questions: mathsQuestionsCbt2S2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: reasoningQuestionsCbt2S2.length,
    maxMarks: reasoningQuestionsCbt2S2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Intelligence & Reasoning'],
    sectionSummary: `Covers: Pure Reasoning & Intelligence (${reasoningQuestionsCbt2S2.length} Questions)`,
    questions: reasoningQuestionsCbt2S2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
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
    totalQuestions: gaQuestionsCbt2S2.length,
    maxMarks: gaQuestionsCbt2S2.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['General Awareness'],
    sectionSummary: `Covers: General Awareness & Current Affairs (${gaQuestionsCbt2S2.length} Questions)`,
    questions: gaQuestionsCbt2S2.map((q, idx) => ({ ...q, id: idx + 1, originalId: q.id }))
  }

];
