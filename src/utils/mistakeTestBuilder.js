/**
 * Pure helper utilities for Mistake Notebook (गलती डायरी) CBT Re-Test builder
 * and ephemeral quiz session classification.
 */

export const MISTAKE_SUBJECT_FILTERS = [
  { id: 'all', label: 'सभी सवाल (All)' },
  { id: 'science', label: 'General Science' },
  { id: 'math', label: 'Mathematics' },
  { id: 'reasoning', label: 'Reasoning' },
  { id: 'ga', label: 'GA & Current Affairs' },
  { id: 'other', label: 'Trade / Basic Sci & Engg' },
];

export function normalizeMistakeCategory(subject = '') {
  const s = String(subject).toLowerCase();
  if (
    s.includes('engineering') ||
    s.includes('bse') ||
    s.includes('trade') ||
    s.includes('electrician') ||
    s.includes('fitter') ||
    s.includes('mechanic')
  ) {
    return 'other';
  }
  if (s.includes('science') || s.includes('physics') || s.includes('chem') || s.includes('bio')) {
    return 'science';
  }
  if (s.includes('math') || s.includes('quant') || s.includes('arith')) {
    return 'math';
  }
  if (s.includes('reason') || s.includes('intel')) {
    return 'reasoning';
  }
  if (s.includes('awareness') || s.includes('gk') || s.includes('current') || s === 'ga') {
    return 'ga';
  }
  return 'other';
}

export function isEphemeralQuizId(testId) {
  if (!testId) return false;
  const id = String(testId);
  return id.startsWith('pyq_topic_') || id.startsWith('mistake_retest_');
}

function normalizeBilingualField(val) {
  if (val && typeof val === 'object' && !Array.isArray(val)) {
    return {
      en: val.en || val.hi || '',
      hi: val.hi || val.en || '',
    };
  }
  const str = val == null ? '' : String(val);
  return { en: str, hi: str };
}

function normalizeBilingualOptions(options) {
  if (Array.isArray(options)) {
    return {
      en: options.map((o) => (typeof o === 'object' && o !== null ? o.en || o.hi || '' : String(o))),
      hi: options.map((o) => (typeof o === 'object' && o !== null ? o.hi || o.en || '' : String(o))),
    };
  }
  if (options && typeof options === 'object') {
    const en = Array.isArray(options.en) ? options.en : Array.isArray(options.hi) ? options.hi : [];
    const hi = Array.isArray(options.hi) ? options.hi : en;
    return { en, hi };
  }
  return { en: [], hi: [] };
}

export function buildMistakeReTest(mistakes = [], filterId = 'all', maxQuestions = null) {
  if (!Array.isArray(mistakes) || mistakes.length === 0) {
    return null;
  }

  const limit = maxQuestions && maxQuestions > 0 ? Math.min(maxQuestions, mistakes.length) : mistakes.length;
  const picked = mistakes.slice(0, limit);

  const reindexed = picked.map((m, idx) => {
    const secLabel = m.subject || 'Mistake Review';
    return {
      id: idx + 1,
      shiftQuestionNo: m.shiftQuestionNo || idx + 1,
      mistakeId: m.id,
      section: secLabel,
      subject: secLabel,
      topic: m.topic || 'Mistake Re-Test',
      question: normalizeBilingualField(m.question),
      options: normalizeBilingualOptions(m.options),
      correctIndex: Number.isFinite(Number(m.correctIndex)) ? Number(m.correctIndex) : 0,
      ...(m.correctIndexHi !== undefined ? { correctIndexHi: Number(m.correctIndexHi) } : {}),
      ...(m.image ? { image: m.image } : {}),
      ...(m.image_hi ? { image_hi: m.image_hi } : {}),
      solution: m.solution
        ? normalizeBilingualField(m.solution)
        : {
            en: 'Review your Mistake Notebook notes and solve carefully next time.',
            hi: 'अपनी गलती डायरी के नोट्स की समीक्षा करें और अगली बार ध्यान से हल करें।',
          },
    };
  });

  const uniqueSections = Array.from(new Set(reindexed.map((q) => q.section)));
  const filterMeta = MISTAKE_SUBJECT_FILTERS.find((f) => f.id === filterId);
  const scopeLabel = filterId === 'all' ? 'Complete गलती डायरी' : filterMeta?.label || 'Filtered Mistakes';

  return {
    id: `mistake_retest_${Date.now()}`,
    isCustomTopicQuiz: true,
    isMistakeReTest: true,
    isFreeDemo: true,
    title: `Mistake Re-Test: ${scopeLabel} (${reindexed.length} Qs)`,
    subTitle: 'गलती डायरी Custom Re-Attempt CBT • +1 / -1/3 Negative Marking',
    exam: 'Mistake Notebook Re-Test',
    stage: 'Revision CBT',
    category: 'mistake-retest',
    badge: 'गलती डायरी CBT',
    badgeColor: 'amber',
    shiftDate: 'Personal Error Drill',
    durationMinutes: Math.max(5, reindexed.length),
    totalQuestions: reindexed.length,
    maxMarks: reindexed.length,
    positiveMarks: 1.0,
    negativeMarks: 0.33,
    sections: ['All Sections', ...uniqueSections],
    questions: reindexed,
  };
}
