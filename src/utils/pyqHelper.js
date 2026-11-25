/**
 * Helper utilities for Topic-Wise PYQ Explorer & Instant Topic Quiz.
 */

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

export function buildCustomTopicQuiz({ examLabel, subjectLabel, chapterLabel, topicLabel, questions, maxQuestions = 10 }) {
  const pool = [...questions];
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

  const drillTitle =
    topicLabel && topicLabel !== 'All'
      ? topicLabel
      : chapterLabel && chapterLabel !== 'All'
      ? chapterLabel
      : subjectLabel && subjectLabel !== 'All'
      ? subjectLabel
      : examLabel || 'Railway PYQ Mix';

  return {
    id: `pyq_topic_${Date.now()}`,
    isCustomTopicQuiz: true,
    isFreeDemo: true,
    title: `${drillTitle} (${reindexed.length} PYQs)`,
    subTitle: `${examLabel || 'Railway'} • Official Answer Key Questions • TCS iON CBT Drill`,
    exam: examLabel || 'Railway PYQ Bank',
    stage: 'Topic Drill',
    category: 'topic-quiz',
    badge: 'Chapter PYQ Mock',
    badgeColor: 'teal',
    shiftDate: 'Official PYQ Drill',
    durationMinutes: Math.max(5, reindexed.length),
    totalQuestions: reindexed.length,
    maxMarks: reindexed.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['All Sections', ...uniqueSections],
    questions: reindexed,
  };
}
