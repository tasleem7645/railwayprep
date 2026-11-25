/**
 * Consecutive Daily Study Streak & Aspirant Milestone Badges Engine.
 * Uses local calendar dates (YYYY-MM-DD) so streaks stay genuine across Mock Tests & Daily Quizzes.
 */

import { notifyStudyStateChanged } from './studySyncEvents.js';

const STREAK_STORAGE_KEY = 'railwayprep_study_streak_v1';

export const STREAK_BADGES = [
  { id: 'starter', icon: '🌱', title: 'First Step', desc: 'Complete 1st Test or Quiz', check: (s) => s.totalSessions >= 1 },
  { id: 'spark3', icon: '🔥', title: '3-Day Spark', desc: '3 consecutive study days', check: (s) => s.bestStreak >= 3 },
  { id: 'week7', icon: '⚡', title: '7-Day Focus', desc: '7 consecutive study days', check: (s) => s.bestStreak >= 7 },
  { id: 'warrior30', icon: '🚂', title: 'Rail Warrior', desc: 'Complete 10+ practice sets', check: (s) => s.totalSessions >= 10 },
  { id: 'sniper', icon: '🎯', title: '80%+ Sniper', desc: 'Score 80%+ accuracy in a test', check: (s) => s.bestAccuracy >= 80 },
];

function formatDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getYesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return formatDateKey(d);
}

function readRawStreak() {
  try {
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        currentStreak: Number(parsed.currentStreak || 0),
        bestStreak: Number(parsed.bestStreak || 0),
        totalSessions: Number(parsed.totalSessions || 0),
        totalQuestions: Number(parsed.totalQuestions || 0),
        bestAccuracy: Number(parsed.bestAccuracy || 0),
        lastActiveDate: parsed.lastActiveDate || null,
      };
    }
  } catch {}
  return {
    currentStreak: 0,
    bestStreak: 0,
    totalSessions: 0,
    totalQuestions: 0,
    bestAccuracy: 0,
    lastActiveDate: null,
  };
}

export function getStudyStreak() {
  const data = readRawStreak();
  const today = formatDateKey();
  const yesterday = getYesterdayKey();
  const isAlive = data.lastActiveDate === today || data.lastActiveDate === yesterday;
  const activeStreak = isAlive ? data.currentStreak : 0;

  return {
    ...data,
    activeStreak,
    practicedToday: data.lastActiveDate === today,
    unlockedBadges: STREAK_BADGES.filter((b) => b.check(data)).map((b) => b.id),
  };
}

export function recordStudyActivity({ questionsCount = 0, accuracy = 0 } = {}) {
  const prev = readRawStreak();
  const today = formatDateKey();
  const yesterday = getYesterdayKey();

  let nextStreak = prev.currentStreak;
  if (prev.lastActiveDate === today) {
    nextStreak = Math.max(1, prev.currentStreak);
  } else if (prev.lastActiveDate === yesterday) {
    nextStreak = prev.currentStreak + 1;
  } else {
    nextStreak = 1;
  }

  const nextBest = Math.max(prev.bestStreak, nextStreak);
  const nextData = {
    currentStreak: nextStreak,
    bestStreak: nextBest,
    totalSessions: prev.totalSessions + 1,
    totalQuestions: prev.totalQuestions + Math.max(0, Number(questionsCount) || 0),
    bestAccuracy: Math.max(prev.bestAccuracy, Number(accuracy) || 0),
    lastActiveDate: today,
  };

  try {
    localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(nextData));
  } catch {}
  notifyStudyStateChanged();

  return getStudyStreak();
}
