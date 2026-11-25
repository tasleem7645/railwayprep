/**
 * Lightweight SM-2 Spaced Repetition Engine for Mistake Notebook (गलती डायरी).
 * Revision Schedule: Day 1 -> Day 3 -> Day 7 -> Day 21.
 * Two consecutive correct recalls promote a mistake to Mastered ✓.
 */

const DAY_MS = 86_400_000;
const SRS_INTERVALS = [1, 3, 7, 21];

export function isMistakeDue(mistake, now = Date.now()) {
  if (!mistake) return false;
  if (mistake.srsMastered && Number(mistake.srsNextReviewAt || 0) > now) {
    return false;
  }
  const nextAt = Number(mistake.srsNextReviewAt || 0);
  return nextAt <= now;
}

export function formatMistakeSrsStatus(mistake, now = Date.now()) {
  if (!mistake) {
    return { label: 'Due Today', badgeType: 'due', detail: 'Needs review' };
  }
  const streak = Number(mistake.srsStreak || 0);
  const nextAt = Number(mistake.srsNextReviewAt || 0);

  if (mistake.srsMastered) {
    return {
      label: `Mastered ✓ (${streak}/2+)`,
      badgeType: 'mastered',
      detail: nextAt > now ? `Refresher in ${Math.max(1, Math.ceil((nextAt - now) / DAY_MS))}d` : 'Mastered',
    };
  }

  if (nextAt <= now) {
    return {
      label: streak > 0 ? `Due Today (${streak}/2)` : 'Due Today',
      badgeType: 'due',
      detail: streak > 0 ? '1 more right answer → Mastered!' : 'First spaced recall',
    };
  }

  const daysLeft = Math.max(1, Math.ceil((nextAt - now) / DAY_MS));
  return {
    label: `Scheduled in ${daysLeft}d (${streak}/2)`,
    badgeType: 'scheduled',
    detail: `1 more right recall → Mastered`,
  };
}

export function applyMistakeReviewOutcome(mistake, isCorrect, now = Date.now()) {
  if (!mistake) return mistake;
  const prevReviews = Number(mistake.srsReviewCount || 0);

  if (isCorrect) {
    const nextStreak = Number(mistake.srsStreak || 0) + 1;
    const intervalIdx = Math.min(SRS_INTERVALS.length - 1, Math.max(0, nextStreak - 1));
    const intervalDays = SRS_INTERVALS[intervalIdx];
    const mastered = nextStreak >= 2;
    return {
      ...mistake,
      srsStreak: nextStreak,
      srsIntervalDays: intervalDays,
      srsReviewCount: prevReviews + 1,
      srsMastered: mastered,
      srsLastReviewedAt: now,
      srsNextReviewAt: now + intervalDays * DAY_MS,
    };
  }

  return {
    ...mistake,
    srsStreak: 0,
    srsIntervalDays: 0,
    srsReviewCount: prevReviews + 1,
    srsMastered: false,
    srsLastReviewedAt: now,
    srsNextReviewAt: now, // Remains due immediately until recalled correctly
  };
}

export function summarizeMistakeSrs(mistakes = [], now = Date.now()) {
  const safeList = Array.isArray(mistakes) ? mistakes : [];
  let dueCount = 0;
  let scheduledCount = 0;
  let masteredCount = 0;

  safeList.forEach((m) => {
    if (m?.srsMastered) {
      masteredCount += 1;
    } else if (isMistakeDue(m, now)) {
      dueCount += 1;
    } else {
      scheduledCount += 1;
    }
  });

  return { dueCount, scheduledCount, masteredCount, total: safeList.length };
}

export function applySrsBatchFromReTest(storedMistakes = [], testQuestions = [], answers = {}, now = Date.now()) {
  if (!Array.isArray(storedMistakes) || storedMistakes.length === 0) return storedMistakes;
  if (!Array.isArray(testQuestions) || testQuestions.length === 0) return storedMistakes;

  const outcomeByMistakeId = new Map();
  testQuestions.forEach((q) => {
    if (!q?.mistakeId) return;
    const userAns = answers?.[q.id];
    if (userAns === undefined) return;
    const isCorrect =
      userAns === q.correctIndex ||
      (q.correctIndexHi !== undefined && userAns === q.correctIndexHi);
    outcomeByMistakeId.set(q.mistakeId, isCorrect);
  });

  if (outcomeByMistakeId.size === 0) return storedMistakes;

  return storedMistakes.map((item) => {
    if (!item || !outcomeByMistakeId.has(item.id)) return item;
    return applyMistakeReviewOutcome(item, outcomeByMistakeId.get(item.id), now);
  });
}
