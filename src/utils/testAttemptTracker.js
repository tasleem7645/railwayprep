// Local + Cloud Attempted Test Summary Tracker for TestCard Score/Reattempt Badges

const STORAGE_KEY = 'railwayprep_test_attempts_summary_v1';
const MAX_CACHED_ANSWERS = 25;

export function loadAttemptSummaries() {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function persistSummaries(map) {
  if (typeof window === 'undefined') return;
  try {
    // Keep answers_json only for the 25 most recent tests to protect localStorage quota
    const entries = Object.entries(map).sort(
      (a, b) => (b[1]?.timestamp || 0) - (a[1]?.timestamp || 0)
    );
    const trimmed = {};
    entries.forEach(([k, v], idx) => {
      if (idx < MAX_CACHED_ANSWERS) {
        trimmed[k] = v;
      } else {
        const { answers, ...rest } = v || {};
        trimmed[k] = rest;
      }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // Ignore storage quota errors cleanly
  }
}

export function saveAttemptSummary({
  testId,
  attemptId = null,
  score = 0,
  totalMarks = 100,
  correctCount = 0,
  wrongCount = 0,
  accuracy = 0,
  timeTakenSeconds = 0,
  answers = null,
  timestamp = Date.now(),
}) {
  if (!testId) return loadAttemptSummaries();
  const current = loadAttemptSummaries();
  const prev = current[testId];
  const next = {
    ...current,
    [testId]: {
      testId,
      attemptId: attemptId || prev?.attemptId || null,
      score,
      totalMarks,
      correctCount,
      wrongCount,
      accuracy,
      timeTakenSeconds,
      answers: answers || prev?.answers || null,
      timestamp,
      attemptCount: (prev?.attemptCount || 0) + 1,
    },
  };
  persistSummaries(next);
  return next;
}

export function hydrateAttemptSummariesFromCloud(cloudRows = []) {
  if (!Array.isArray(cloudRows) || cloudRows.length === 0) {
    return loadAttemptSummaries();
  }
  const current = loadAttemptSummaries();
  const merged = { ...current };

  // cloudRows expected sorted newest-first or arbitrary order
  for (const row of cloudRows) {
    if (!row?.test_id) continue;
    const rowTs = row.created_at ? new Date(row.created_at).getTime() : 0;
    const existing = merged[row.test_id];
    if (!existing || rowTs >= (existing.timestamp || 0)) {
      merged[row.test_id] = {
        testId: row.test_id,
        attemptId: row.id || existing?.attemptId || null,
        score: Number(row.score ?? 0),
        totalMarks: Number(row.total_marks ?? 100),
        correctCount: Number(row.correct_count ?? 0),
        wrongCount: Number(row.wrong_count ?? 0),
        accuracy: Number(row.accuracy ?? 0),
        timeTakenSeconds: Number(row.time_taken_seconds ?? 0),
        answers: row.answers_json || existing?.answers || null,
        timestamp: rowTs || Date.now(),
        attemptCount: Math.max(existing?.attemptCount || 1, 1),
      };
    }
  }

  persistSummaries(merged);
  return merged;
}
