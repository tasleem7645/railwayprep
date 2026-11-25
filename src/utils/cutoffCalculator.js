/**
 * Expected Cutoff, RRB Zone-Wise Predictor & Shift Normalization utility
 * for Indian Railway exams (ALP, CBT-2 Part A/B, Group D).
 */

export const CUTOFF_CATEGORIES = ['UR', 'OBC', 'EWS', 'SC', 'ST'];

export const RRB_ZONES = [
  { code: 'ALL', name: 'All-India Average', competition: 'Standard', offsetRatio: 0, expectedCutoff: 48 },
  { code: 'PRYJ', name: 'Prayagraj (Allahabad)', competition: 'Very High', offsetRatio: 0.03, expectedCutoff: 54 },
  { code: 'CDG', name: 'Chandigarh', competition: 'Very High', offsetRatio: 0.03, expectedCutoff: 55 },
  { code: 'PNBE', name: 'Patna', competition: 'High', offsetRatio: 0.02, expectedCutoff: 52 },
  { code: 'AII', name: 'Ajmer', competition: 'High', offsetRatio: 0.02, expectedCutoff: 52 },
  { code: 'KOAA', name: 'Kolkata', competition: 'High', offsetRatio: 0.01, expectedCutoff: 50 },
  { code: 'RNC', name: 'Ranchi', competition: 'Moderate', offsetRatio: 0.01, expectedCutoff: 50 },
  { code: 'ADI', name: 'Ahmedabad', competition: 'Moderate', offsetRatio: 0, expectedCutoff: 48 },
  { code: 'SC', name: 'Secunderabad', competition: 'Moderate', offsetRatio: -0.01, expectedCutoff: 47 },
  { code: 'MAS', name: 'Chennai', competition: 'Moderate', offsetRatio: -0.01, expectedCutoff: 47 },
  { code: 'BB', name: 'Mumbai', competition: 'Moderate', offsetRatio: -0.015, expectedCutoff: 46 },
  { code: 'BSP', name: 'Bilaspur', competition: 'Moderate', offsetRatio: -0.02, expectedCutoff: 45 },
  { code: 'SBC', name: 'Bengaluru', competition: 'Moderate', offsetRatio: -0.025, expectedCutoff: 44 },
  { code: 'BPL', name: 'Bhopal', competition: 'Moderate', offsetRatio: -0.01, expectedCutoff: 47 },
  { code: 'GKP', name: 'Gorakhpur', competition: 'Moderate', offsetRatio: 0, expectedCutoff: 49 },
  { code: 'GHY', name: 'Guwahati', competition: 'Low', offsetRatio: -0.04, expectedCutoff: 42 },
];

export const SHIFT_DIFFICULTY_LEVELS = [
  { id: 'tough', label: 'Tough Shift', bonusRatio: 0.08, badge: '+6–8 Est.' },
  { id: 'moderate', label: 'Moderate Shift', bonusRatio: 0.04, badge: '+3–4 Est.' },
  { id: 'easy', label: 'Easy Shift', bonusRatio: 0.008, badge: '+0.5 Est.' },
];

const RATIO_SETS = {
  tradeQualifying: {
    label: 'RRB ALP CBT-2 Part B (Official 35% Qualifying)',
    mode: 'qualifying',
    note: 'Part B Trade test strictly requires 35% qualifying marks across all categories & zones.',
    ratios: { UR: 0.35, OBC: 0.35, EWS: 0.35, SC: 0.35, ST: 0.35 },
  },
  groupD: {
    label: 'RRB Group D Level-1 Expected Benchmark',
    mode: 'merit',
    note: 'Zone-calibrated safe marks based on historical RRB Group D PET shortlists.',
    ratios: { UR: 0.67, OBC: 0.63, EWS: 0.60, SC: 0.56, ST: 0.51 },
  },
  alpCbt2PartA: {
    label: 'RRB ALP CBT-2 Part A Merit Benchmark',
    mode: 'merit',
    note: 'Part A accounts for 70% merit weight alongside 30% CBAT T-Score.',
    ratios: { UR: 0.72, OBC: 0.68, EWS: 0.65, SC: 0.58, ST: 0.50 },
  },
  alpCbt1: {
    label: 'RRB ALP CBT-1 Expected Cutoff Benchmark',
    mode: 'merit',
    note: 'Safe CBT-2 shortlisting range (15x vacancies) calibrated across RRB zones.',
    ratios: { UR: 0.62, OBC: 0.57, EWS: 0.54, SC: 0.48, ST: 0.40 },
  },
};

export function getCutoffBenchmark(test, zoneCode = 'ALL') {
  const maxMarks = Number(test?.maxMarks || test?.questions?.length || 75);
  let preset = RATIO_SETS.alpCbt1;

  if (test?.stage === 'CBT-2 Part B' || test?.category === 'cbt2-part-b') {
    preset = RATIO_SETS.tradeQualifying;
  } else if (test?.examYear === 'groupd-2025' || test?.exam?.includes('Group D')) {
    preset = RATIO_SETS.groupD;
  } else if (test?.stage === 'CBT-2' || test?.examYear === 'cbt2') {
    preset = RATIO_SETS.alpCbt2PartA;
  }

  const zone = RRB_ZONES.find((z) => z.code === zoneCode) || RRB_ZONES[0];
  const zoneOffset = preset.mode === 'qualifying' ? 0 : Number(zone.offsetRatio || 0);

  const cutoffs = {};
  for (const cat of CUTOFF_CATEGORIES) {
    const adjustedRatio = Math.max(0.28, Math.min(0.92, preset.ratios[cat] + zoneOffset));
    cutoffs[cat] = Number((maxMarks * adjustedRatio).toFixed(2));
  }

  return {
    maxMarks,
    zone,
    label: preset.label,
    mode: preset.mode,
    note: preset.note,
    cutoffs,
  };
}

export function estimateNormalizedScore(rawScore, maxMarks = 75, difficultyId = 'moderate') {
  const safeMax = Math.max(1, Number(maxMarks || 75));
  const safeRaw = Math.max(0, Number(rawScore || 0));
  const lvl = SHIFT_DIFFICULTY_LEVELS.find((l) => l.id === difficultyId) || SHIFT_DIFFICULTY_LEVELS[1];
  // Scale bonus gently so scores near top saturate cleanly under maxMarks
  const headroom = Math.max(0, 1 - safeRaw / safeMax);
  const boost = Number((safeMax * lvl.bonusRatio * (0.45 + 0.55 * headroom)).toFixed(2));
  return {
    normalizedScore: Number(Math.min(safeMax, safeRaw + boost).toFixed(2)),
    boost,
    difficulty: lvl,
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
