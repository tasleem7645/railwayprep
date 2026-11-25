/**
 * Helper utilities for Topic-Wise PYQ Explorer & Instant Topic Quiz.
 */

export const PYQ_EXAM_PACKS = [
  {
    key: 'alp2026',
    label: '🎯 RRB ALP 2026 CBT-1',
    shortLabel: 'ALP 2026',
    filter: (t) => t.category === 'full-shift' && t.exam === 'RRB ALP 2026',
  },
  {
    key: 'alp2025',
    label: '⚡ RRB ALP 2025 CBT-1',
    shortLabel: 'ALP 2025',
    filter: (t) => t.category === 'full-shift' && t.exam === 'RRB ALP 2025',
  },
  {
    key: 'cbt2PartA',
    label: '🚀 ALP CBT-2 Part A',
    shortLabel: 'CBT-2 Part A',
    filter: (t) => t.stage === 'CBT-2' && t.category === 'official',
  },
  {
    key: 'groupd',
    label: '🚆 RRB Group D 2025',
    shortLabel: 'Group D (48 Shifts)',
    filter: (t) => t.examYear === 'groupd-2025' && t.category === 'full-mock',
  },
  {
    key: 'trades',
    label: '⚙️ CBT-2 Trades (Part B)',
    shortLabel: 'ITI Trades',
    filter: (t) => t.stage === 'CBT-2 Part B',
  },
];

export const HOT_PYQ_KEYWORDS = [
  "Ohm's Law",
  'Newton',
  'Trigonometry',
  'Percentage',
  'Profit',
  'Ratio',
  'Syllogism',
  'Blood',
  'Periodic',
  'Vitamin',
  'Light',
  'Series',
];

export function normalizeTopicName(rawTopic, fallbackSection = 'General') {
  if (!rawTopic || typeof rawTopic !== 'string') {
    return fallbackSection || 'General';
  }
  // Strip trailing shift/cycle suffixes like "• RRB Group D Level-1 (03 Aug 2026 Shift 1)"
  let cleaned = rawTopic.split('•')[0].trim();
  // Strip trailing parenthetical shift date markers (closed or split by '•')
  cleaned = cleaned.replace(/\s*\(\d{1,2}\s+\w+\s+\d{4}[^)]*\)?$/i, '').trim();
  if (!cleaned || cleaned.length < 2) {
    return fallbackSection || 'General';
  }
  return cleaned;
}

export function getPyqOptions(q, lang = 'hi') {
  if (!q || !q.options) return [];
  if (Array.isArray(q.options)) {
    return q.options.map((o) =>
      typeof o === 'object' && o !== null ? o[lang] || o.en || o.hi || '' : String(o)
    );
  }
  return q.options[lang] || q.options.en || q.options.hi || [];
}

export function getPyqCorrectIndex(q, lang = 'hi') {
  if (!q) return 0;
  if (lang === 'hi' && q.correctIndexHi !== undefined) {
    return q.correctIndexHi;
  }
  return q.correctIndex ?? 0;
}

export function buildCustomTopicQuiz({ packLabel, topicLabel, questions, maxQuestions = 10 }) {
  const pool = [...questions];
  // Shuffle deterministically-fair using Fisher-Yates so repeated quizzes feel fresh
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const picked = pool.slice(0, Math.max(1, Math.min(maxQuestions, pool.length)));
  const uniqueSections = Array.from(new Set(picked.map((q) => q.section || 'General')));

  const reindexed = picked.map((q, idx) => ({
    ...q,
    id: idx + 1,
    shiftQuestionNo: idx + 1,
    originalId: q.id,
  }));

  const titleTopic = topicLabel && topicLabel !== 'All' ? topicLabel : packLabel;

  return {
    id: `pyq_topic_${Date.now()}`,
    isCustomTopicQuiz: true,
    isFreeDemo: true,
    title: `Topic Quiz: ${titleTopic} (${reindexed.length} PYQs)`,
    subTitle: `Curated from Official Railway Answer Keys • Instant TCS iON CBT Drill`,
    exam: packLabel || 'Railway PYQ Bank',
    stage: 'Topic Drill',
    category: 'topic-quiz',
    badge: 'Topic PYQ Quiz',
    badgeColor: 'teal',
    shiftDate: 'Official PYQ Mix',
    durationMinutes: Math.max(5, reindexed.length),
    totalQuestions: reindexed.length,
    maxMarks: reindexed.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['All Sections', ...uniqueSections],
    questions: reindexed,
  };
}
