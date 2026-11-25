/**
 * All-India Weekend Live Mega Mock Scheduler & State Manager (IST Timezone).
 * Runs every Saturday 00:00 IST -> Sunday 23:59:59 IST cleanly using rotating flagship papers.
 */

const IST_OFFSET_MS = 5.5 * 3600 * 1000;
const DAY_MS = 86_400_000;
const LIVE_ATTEMPTS_KEY = 'railwayprep_live_mega_attempts_v1';

function getIsoWeekPartsIst(nowMs = Date.now()) {
  const ist = new Date(nowMs + IST_OFFSET_MS);
  const dow = ist.getUTCDay(); // 0=Sun, 1=Mon..5=Fri, 6=Sat

  // Compute Monday start of current IST week
  const daysSinceMon = (dow + 6) % 7;
  const monMidnightIstMs =
    Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate()) - daysSinceMon * DAY_MS;

  // Compute Sat 00:00 IST -> Sun 23:59:59 IST of this Mon-Sun week
  const satStartUtcMs = monMidnightIstMs + 5 * DAY_MS - IST_OFFSET_MS;
  const sunEndUtcMs = monMidnightIstMs + 7 * DAY_MS - IST_OFFSET_MS - 1;

  // ISO week number for consistent week key across clients worldwide
  const d = new Date(Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / DAY_MS + 1) / 7);
  const weekKey = `${d.getUTCFullYear()}_w${String(weekNo).padStart(2, '0')}`;

  // Previous week key (Mon-Fri countdown / previous weekend ranklist)
  const prevD = new Date(monMidnightIstMs - 3 * DAY_MS);
  const prevYearStart = new Date(Date.UTC(prevD.getUTCFullYear(), 0, 1));
  const prevWeekNo = Math.ceil(((prevD - prevYearStart) / DAY_MS + 1) / 7);
  const prevWeekKey = `${prevD.getUTCFullYear()}_w${String(prevWeekNo).padStart(2, '0')}`;

  return {
    dow,
    weekNo,
    weekKey,
    prevWeekNo,
    prevWeekKey,
    satStartUtcMs,
    sunEndUtcMs,
    isWeekendLive: dow === 6 || dow === 0,
  };
}

export function getWeeklyMegaMockStatus(railwayTests = [], nowMs = Date.now()) {
  const eligible = (Array.isArray(railwayTests) ? railwayTests : []).filter(
    (t) =>
      t &&
      t.category !== 'sectional' &&
      t.stage !== 'CBT-2 Part B' &&
      t.questionSource?.file
  );

  const pool = eligible.length > 0 ? eligible : Array.isArray(railwayTests) ? railwayTests : [];
  const {
    weekNo,
    weekKey,
    prevWeekNo,
    prevWeekKey,
    satStartUtcMs,
    sunEndUtcMs,
    isWeekendLive,
  } = getIsoWeekPartsIst(nowMs);

  const pickShiftByWeek = (wk) => {
    if (pool.length === 0) return null;
    return pool[Math.abs(wk) % pool.length];
  };

  const baseShift = pickShiftByWeek(weekNo);
  const prevBaseShift = pickShiftByWeek(prevWeekNo);
  const liveTestId = `live_mega_${weekKey}`;
  const prevLiveTestId = `live_mega_${prevWeekKey}`;

  const phase = isWeekendLive ? 'live' : 'upcoming';
  const countdownMs = isWeekendLive
    ? Math.max(0, sunEndUtcMs - nowMs)
    : Math.max(0, satStartUtcMs - nowMs);

  return {
    phase,
    isWeekendLive,
    weekKey,
    prevWeekKey,
    liveTestId,
    prevLiveTestId,
    baseShift,
    prevBaseShift,
    startsAtMs: satStartUtcMs,
    endsAtMs: sunEndUtcMs,
    countdownMs,
  };
}

export function createLiveMegaTestPayload(baseShift, liveTestId, weekKey = '') {
  if (!baseShift) return null;
  return {
    ...baseShift,
    id: liveTestId,
    baseTestId: baseShift.id,
    isLiveMegaMock: true,
    isFreeDemo: true,
    title: `All-India Live Mega Mock (${weekKey.replace('_', ' • ').toUpperCase()}): ${baseShift.title}`,
    badge: 'ALL-INDIA LIVE MEGA',
    badgeColor: 'amber',
    shiftDate: 'Sat–Sun Scheduled All-India Test',
  };
}

export function formatCountdownParts(ms = 0) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
}

export function saveLiveMegaAttemptLocal(liveTestId, summary) {
  if (!liveTestId) return;
  try {
    const raw = localStorage.getItem(LIVE_ATTEMPTS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    const next = parsed && typeof parsed === 'object' ? parsed : {};
    next[liveTestId] = {
      ...summary,
      submittedAt: Date.now(),
    };
    localStorage.setItem(LIVE_ATTEMPTS_KEY, JSON.stringify(next));
  } catch (e) {}
}

export function getLiveMegaAttemptLocal(liveTestId) {
  if (!liveTestId) return null;
  try {
    const raw = localStorage.getItem(LIVE_ATTEMPTS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.[liveTestId] || null;
  } catch (e) {
    return null;
  }
}
