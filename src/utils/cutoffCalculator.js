/**
 * Expected Cutoff & Qualifying benchmark utility for Indian Railway exams.
 * Aligns with official RRB qualifying norms (e.g., 35% for CBT-2 Part B Trade)
 * and historical RRB CBT normalization ranges across exam stages.
 */

export const CUTOFF_CATEGORIES = ['UR', 'OBC', 'EWS', 'SC', 'ST'];

const RATIO_SETS = {
  tradeQualifying: {
    label: 'RRB ALP CBT-2 Part B (Official 35% Qualifying)',
    mode: 'qualifying',
    note: 'Part B Trade test strictly requires 35% qualifying marks across all categories.',
    ratios: { UR: 0.35, OBC: 0.35, EWS: 0.35, SC: 0.35, ST: 0.35 },
  },
  groupD: {
    label: 'RRB Group D Level-1 Expected Benchmark',
    mode: 'merit',
    note: 'Reference safe-score benchmarks based on past RRB Group D PET shortlist cutoffs.',
    ratios: { UR: 0.67, OBC: 0.63, EWS: 0.60, SC: 0.56, ST: 0.51 },
  },
  alpCbt2PartA: {
    label: 'RRB ALP CBT-2 Part A Merit Benchmark',
    mode: 'merit',
    note: 'Part A decides CBAT / DV shortlist merit across railway zones.',
    ratios: { UR: 0.72, OBC: 0.68, EWS: 0.65, SC: 0.58, ST: 0.50 },
  },
  alpCbt1: {
    label: 'RRB ALP CBT-1 Expected Cutoff Benchmark',
    mode: 'merit',
    note: 'Safe CBT-2 shortlisting range (15x vacancies) based on previous RRB ALP cycles.',
    ratios: { UR: 0.62, OBC: 0.57, EWS: 0.54, SC: 0.48, ST: 0.40 },
  },
};

export function getCutoffBenchmark(test) {
  const maxMarks = Number(test?.maxMarks || test?.questions?.length || 75);
  let preset = RATIO_SETS.alpCbt1;

  if (test?.stage === 'CBT-2 Part B' || test?.category === 'cbt2-part-b') {
    preset = RATIO_SETS.tradeQualifying;
  } else if (test?.examYear === 'groupd-2025' || test?.exam?.includes('Group D')) {
    preset = RATIO_SETS.groupD;
  } else if (test?.stage === 'CBT-2' || test?.examYear === 'cbt2') {
    preset = RATIO_SETS.alpCbt2PartA;
  }

  const cutoffs = {};
  for (const cat of CUTOFF_CATEGORIES) {
    cutoffs[cat] = Number((maxMarks * preset.ratios[cat]).toFixed(2));
  }

  return {
    maxMarks,
    label: preset.label,
    mode: preset.mode,
    note: preset.note,
    cutoffs,
  };
}

export function evaluateCutoffStatus(score, threshold, maxMarks) {
  const safeMax = Math.max(1, maxMarks || 100);
  const delta = Number((score - threshold).toFixed(2));
  const scorePct = Math.min(100, Math.max(0, (score / safeMax) * 100));
  const cutoffPct = Math.min(100, Math.max(0, (threshold / safeMax) * 100));

  let status = 'below';
  if (score >= threshold) {
    status = 'safe';
  } else if (score >= threshold - safeMax * 0.08) {
    status = 'borderline';
  }

  return { status, delta, scorePct, cutoffPct };
}
