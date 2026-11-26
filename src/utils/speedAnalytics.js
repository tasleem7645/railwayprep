/**
 * Pure Per-Question Speed Analytics ("You vs Ideal Benchmark") and
 * multi-device Speed Profile persistence for Railway CBT mock exams.
 */

import { notifyStudyStateChanged } from './studySyncEvents.js';

export const SPEED_PROFILES_KEY = 'railwayprep_speed_profiles_v1';
const MAX_SAVED_PROFILES = 20;

export function getIdealQuestionSeconds(question = {}) {
  const sec = String(question.section || question.subject || '').toLowerCase();
  if (
    sec.includes('math') ||
    sec.includes('quant') ||
    sec.includes('arith') ||
    sec.includes('reason') ||
    sec.includes('intel')
  ) {
    return 54;
  }
  return 36;
}

export function classifyQuestionSpeed(question = {}, rawSeconds = 0, userAns) {
  const seconds = Math.max(0, Math.round(Number(rawSeconds || 0)));
  const idealSeconds = getIdealQuestionSeconds(question);
  const isAttempted = userAns !== undefined;
  const isCorrect = isAttempted && userAns === question.correctIndex;

  if (!isAttempted) {
    const isSunkCost = seconds >= 45;
    return {
      seconds,
      idealSeconds,
      isAttempted: false,
      isCorrect: false,
      bucket: isSunkCost ? 'sunk_cost_skip' : 'skipped_fast',
      label: isSunkCost ? 'Sunk-Cost Skip' : 'Skipped',
      tone: isSunkCost ? 'amber' : 'slate',
    };
  }

  if (isCorrect) {
    if (seconds > 0 && seconds <= Math.round(idealSeconds * 0.55)) {
      return {
        seconds,
        idealSeconds,
        isAttempted: true,
        isCorrect: true,
        bucket: 'superfast_right',
        label: 'Superfast ✓',
        tone: 'emerald',
      };
    }
    if (seconds > Math.round(idealSeconds * 1.35)) {
      return {
        seconds,
        idealSeconds,
        isAttempted: true,
        isCorrect: true,
        bucket: 'overtime_right',
        label: 'Slow Correct',
        tone: 'sky',
      };
    }
    return {
      seconds,
      idealSeconds,
      isAttempted: true,
      isCorrect: true,
      bucket: 'ideal_right',
      label: 'Ideal Pace ✓',
      tone: 'teal',
    };
  }

  if (seconds > 0 && seconds <= 12) {
    return {
      seconds,
      idealSeconds,
      isAttempted: true,
      isCorrect: false,
      bucket: 'rush_mistake',
      label: 'Speed Mistake ⚡',
      tone: 'rose',
    };
  }

  if (seconds >= Math.round(idealSeconds * 1.15)) {
    return {
      seconds,
      idealSeconds,
      isAttempted: true,
      isCorrect: false,
      bucket: 'overtime_wrong',
      label: 'Time-Waster Trap',
      tone: 'orange',
    };
  }

  return {
    seconds,
    idealSeconds,
    isAttempted: true,
    isCorrect: false,
    bucket: 'normal_wrong',
    label: 'Incorrect',
    tone: 'rose',
  };
}

export function computeTestSpeedReport(questions = [], answers = {}, questionTimes = {}) {
  const safeQuestions = Array.isArray(questions) ? questions : [];
  const qTimesObj = questionTimes && typeof questionTimes === 'object' ? questionTimes : {};
  const hasRealTiming = Object.values(qTimesObj).some((sec) => Number(sec) > 0);

  const buckets = {
    superfastRight: [],
    rushMistakes: [],
    overtimeTraps: [],
    overtimeRight: [],
    sunkCostSkips: [],
  };

  const sectionAcc = {};
  let rightSecSum = 0;
  let rightCount = 0;
  let wrongSecSum = 0;
  let wrongCount = 0;
  let skipSecSum = 0;
  let skipCount = 0;
  let totalTrackedSec = 0;
  let fastestCorrect = null;
  let slowestQuestion = null;

  safeQuestions.forEach((q, idx) => {
    const qId = q.id;
    const qNo = q.shiftQuestionNo || qId || idx + 1;
    const rawSec = Number(qTimesObj[qId] || 0);
    const userAns = answers?.[qId];
    const info = classifyQuestionSpeed(q, rawSec, userAns);
    const secName = q.section || q.subject || 'General';

    if (!sectionAcc[secName]) {
      sectionAcc[secName] = {
        section: secName,
        totalSec: 0,
        idealTotalSec: 0,
        count: 0,
        correctCount: 0,
        wrongCount: 0,
      };
    }

    sectionAcc[secName].count += 1;
    sectionAcc[secName].totalSec += info.seconds;
    sectionAcc[secName].idealTotalSec += info.idealSeconds;
    totalTrackedSec += info.seconds;

    const itemSummary = {
      id: qId,
      qNo,
      reviewTargetIdx: idx,
      section: secName,
      topic: q.topic || secName,
      seconds: info.seconds,
      idealSeconds: info.idealSeconds,
      label: info.label,
    };

    if (info.isAttempted && info.isCorrect) {
      rightSecSum += info.seconds;
      rightCount += 1;
      sectionAcc[secName].correctCount += 1;
      if (info.bucket === 'superfast_right') buckets.superfastRight.push(itemSummary);
      if (info.bucket === 'overtime_right') buckets.overtimeRight.push(itemSummary);
      if (
        info.seconds > 0 &&
        (!fastestCorrect || info.seconds < fastestCorrect.seconds)
      ) {
        fastestCorrect = itemSummary;
      }
    } else if (info.isAttempted && !info.isCorrect) {
      wrongSecSum += info.seconds;
      wrongCount += 1;
      sectionAcc[secName].wrongCount += 1;
      if (info.bucket === 'rush_mistake') buckets.rushMistakes.push(itemSummary);
      if (info.bucket === 'overtime_wrong') buckets.overtimeTraps.push(itemSummary);
    } else {
      skipSecSum += info.seconds;
      skipCount += 1;
      if (info.bucket === 'sunk_cost_skip') buckets.sunkCostSkips.push(itemSummary);
    }

    if (info.seconds > 0 && (!slowestQuestion || info.seconds > slowestQuestion.seconds)) {
      slowestQuestion = itemSummary;
    }
  });

  const sectionSpeed = Object.values(sectionAcc).map((s) => {
    const avgSec = s.count > 0 ? Math.round(s.totalSec / s.count) : 0;
    const sharePct = totalTrackedSec > 0 ? Math.round((s.totalSec / totalTrackedSec) * 100) : 0;
    const paceRatio = s.idealTotalSec > 0 ? s.totalSec / s.idealTotalSec : 1;
    const paceStatus = paceRatio > 1.2 ? 'slow' : paceRatio < 0.7 ? 'fast' : 'balanced';
    return { ...s, avgSec, sharePct, paceStatus };
  });

  return {
    hasRealTiming,
    totalTrackedSec,
    avgCorrectSec: rightCount > 0 ? Math.round(rightSecSum / rightCount) : 0,
    avgWrongSec: wrongCount > 0 ? Math.round(wrongSecSum / wrongCount) : 0,
    avgSkipSec: skipCount > 0 ? Math.round(skipSecSum / skipCount) : 0,
    wastedTimeSec: wrongSecSum + buckets.sunkCostSkips.reduce((acc, s) => acc + s.seconds, 0),
    fastestCorrect,
    slowestQuestion,
    buckets,
    sectionSpeed,
  };
}

export function formatShortSec(seconds = 0) {
  const s = Math.max(0, Math.round(Number(seconds || 0)));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return rem > 0 ? `${m}m ${rem}s` : `${m}m`;
}

export function readAllSpeedProfiles() {
  try {
    const raw = localStorage.getItem(SPEED_PROFILES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    }
  } catch (e) {}
  return {};
}

export function writeAllSpeedProfiles(map = {}) {
  try {
    const entries = Object.entries(map || {})
      .filter(([, v]) => v && typeof v === 'object')
      .sort((a, b) => Number(b[1].updatedAt || 0) - Number(a[1].updatedAt || 0))
      .slice(0, MAX_SAVED_PROFILES);
    localStorage.setItem(SPEED_PROFILES_KEY, JSON.stringify(Object.fromEntries(entries)));
  } catch (e) {}
}

export function saveTestSpeedProfile(testId, questionTimes) {
  if (!testId || !questionTimes || typeof questionTimes !== 'object') return;
  const hasAny = Object.values(questionTimes).some((sec) => Number(sec) > 0);
  if (!hasAny) return;
  const current = readAllSpeedProfiles();
  current[testId] = {
    questionTimes,
    updatedAt: Date.now(),
  };
  writeAllSpeedProfiles(current);
  notifyStudyStateChanged();
}

export function getTestSpeedProfile(testId) {
  if (!testId) return null;
  const all = readAllSpeedProfiles();
  return all[testId] || null;
}

export function mergeSpeedProfiles(localMap = {}, cloudMap = {}) {
  const merged = {};
  const keys = new Set([
    ...Object.keys(localMap || {}),
    ...Object.keys(cloudMap || {}),
  ]);

  keys.forEach((k) => {
    const loc = localMap?.[k];
    const cld = cloudMap?.[k];
    if (loc && !cld) {
      merged[k] = loc;
    } else if (cld && !loc) {
      merged[k] = cld;
    } else if (loc && cld) {
      merged[k] = Number(loc.updatedAt || 0) >= Number(cld.updatedAt || 0) ? loc : cld;
    }
  });

  const sorted = Object.entries(merged)
    .sort((a, b) => Number(b[1]?.updatedAt || 0) - Number(a[1]?.updatedAt || 0))
    .slice(0, MAX_SAVED_PROFILES);
  return Object.fromEntries(sorted);
}
