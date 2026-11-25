/**
 * Pure, framework-agnostic bidirectional merge logic for Cloud Study State sync.
 * Ensures local offline practice is never overwritten by older/empty cloud state.
 */

import { mergeTopicStats } from './topicPerformance.js';

export function mergeMistakes(localList = [], cloudList = []) {
  const localArr = Array.isArray(localList) ? localList : [];
  const cloudArr = Array.isArray(cloudList) ? cloudList : [];
  const combined = [...cloudArr, ...localArr];
  const byId = new Map();

  combined.forEach((item) => {
    if (!item || !item.id) return;
    byId.set(item.id, item);
  });

  const all = Array.from(byId.values());
  const nonSample = all.filter((m) => !String(m.id).startsWith('sample_'));
  // Drop built-in starter sample entries once the student accumulates real mistakes
  const result = nonSample.length > 0 ? nonSample : all;
  return result.slice(-300);
}

export function mergePyqProgress(localProg = {}, cloudProg = {}) {
  const locAtt = localProg?.attempts && typeof localProg.attempts === 'object' ? localProg.attempts : {};
  const cldAtt = cloudProg?.attempts && typeof cloudProg.attempts === 'object' ? cloudProg.attempts : {};
  const attempts = { ...cldAtt };

  Object.entries(locAtt).forEach(([uid, entry]) => {
    if (!entry) return;
    const prev = attempts[uid];
    if (!prev || Number(entry.updatedAt || 0) >= Number(prev.updatedAt || 0)) {
      attempts[uid] = entry;
    }
  });

  const locBm = localProg?.bookmarks && typeof localProg.bookmarks === 'object' ? localProg.bookmarks : {};
  const cldBm = cloudProg?.bookmarks && typeof cloudProg.bookmarks === 'object' ? cloudProg.bookmarks : {};
  const bookmarks = { ...cldBm, ...locBm };

  return { attempts, bookmarks };
}

export function mergeStreakState(localRaw = {}, cloudRaw = {}) {
  const loc = localRaw && typeof localRaw === 'object' ? localRaw : {};
  const cld = cloudRaw && typeof cloudRaw === 'object' ? cloudRaw : {};

  const locDate = loc.lastActiveDate || '';
  const cldDate = cld.lastActiveDate || '';
  const useLocCurrent =
    locDate > cldDate ||
    (locDate === cldDate && Number(loc.currentStreak || 0) >= Number(cld.currentStreak || 0));

  return {
    currentStreak: useLocCurrent ? Number(loc.currentStreak || 0) : Number(cld.currentStreak || 0),
    bestStreak: Math.max(Number(loc.bestStreak || 0), Number(cld.bestStreak || 0)),
    totalSessions: Math.max(Number(loc.totalSessions || 0), Number(cld.totalSessions || 0)),
    totalQuestions: Math.max(Number(loc.totalQuestions || 0), Number(cld.totalQuestions || 0)),
    bestAccuracy: Math.max(Number(loc.bestAccuracy || 0), Number(cld.bestAccuracy || 0)),
    lastActiveDate: (useLocCurrent ? locDate : cldDate) || null,
    topicStats: mergeTopicStats(loc.topicStats || {}, cld.topicStats || {}),
  };
}
