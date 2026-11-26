/**
 * Per-topic & per-subject accuracy tracker and Smart Weak-Topic Radar analyzer.
 * Aggregates Mock Test question stats + PYQ Explorer mastery + Mistake Notebook backlog.
 */

import { notifyStudyStateChanged } from './studySyncEvents.js';

export const TOPIC_STATS_KEY = 'railwayprep_topic_stats_v1';

export function readTopicStats() {
  try {
    const raw = localStorage.getItem(TOPIC_STATS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    }
  } catch (e) {}
  return {};
}

export function writeTopicStats(stats) {
  try {
    localStorage.setItem(TOPIC_STATS_KEY, JSON.stringify(stats || {}));
  } catch (e) {}
}

export function recordMockTopicStats(questions = [], answers = {}) {
  if (!Array.isArray(questions) || questions.length === 0) return readTopicStats();
  const next = { ...readTopicStats() };
  const now = Date.now();

  questions.forEach((q) => {
    const userAns = answers?.[q.id];
    if (userAns === undefined) return;
    const isCorrect = userAns === q.correctIndex;

    const subject = String(q.subject || q.section || 'General Science').trim();
    const topic = String(q.topic || 'Mixed Practice').trim();
    const key = `${subject}::${topic}`;
    const prev = next[key] || { subject, topic, correct: 0, wrong: 0, updatedAt: now };

    next[key] = {
      subject,
      topic,
      correct: Number(prev.correct || 0) + (isCorrect ? 1 : 0),
      wrong: Number(prev.wrong || 0) + (isCorrect ? 0 : 1),
      updatedAt: now,
    };
  });

  writeTopicStats(next);
  notifyStudyStateChanged();
  return next;
}

export function mergeTopicStats(localStats = {}, cloudStats = {}) {
  const merged = {};
  const allKeys = new Set([
    ...Object.keys(localStats || {}),
    ...Object.keys(cloudStats || {}),
  ]);

  allKeys.forEach((k) => {
    const loc = localStats?.[k];
    const cld = cloudStats?.[k];
    if (loc && !cld) {
      merged[k] = loc;
    } else if (cld && !loc) {
      merged[k] = cld;
    } else if (loc && cld) {
      const locTotal = Number(loc.correct || 0) + Number(loc.wrong || 0);
      const cldTotal = Number(cld.correct || 0) + Number(cld.wrong || 0);
      const locTs = Number(loc.updatedAt || 0);
      const cldTs = Number(cld.updatedAt || 0);
      // Keep whichever record reflects more solved questions, tie-breaking by latest timestamp
      if (locTotal > cldTotal || (locTotal === cldTotal && locTs >= cldTs)) {
        merged[k] = loc;
      } else {
        merged[k] = cld;
      }
    }
  });

  return merged;
}

function normalizeSubjectGroup(subject = '') {
  const s = String(subject).toLowerCase();
  if (s.includes('engineering') || s.includes('bse') || s.includes('trade')) {
    return 'Basic Sci & Engg / Trade';
  }
  if (s.includes('science') || s.includes('physics') || s.includes('chem') || s.includes('bio')) {
    return 'General Science';
  }
  if (s.includes('math') || s.includes('quant') || s.includes('arith')) {
    return 'Mathematics';
  }
  if (s.includes('reason') || s.includes('intel')) {
    return 'Reasoning';
  }
  if (s.includes('awareness') || s.includes('gk') || s.includes('current') || s === 'ga') {
    return 'General Awareness';
  }
  return subject || 'General';
}

export function analyzeWeakTopics({
  topicStats = {},
  mistakes = [],
  pyqProgress = { attempts: {}, bookmarks: {} },
  testAttempts = [],
} = {}) {
  const topicAgg = {};
  const addTopic = (subjectRaw, topicRaw, corrDelta, wrongDelta, mistakeDelta) => {
    const subject = normalizeSubjectGroup(subjectRaw);
    const topic = String(topicRaw || 'Official Question').trim();
    const key = `${subject}::${topic}`;
    if (!topicAgg[key]) {
      topicAgg[key] = { subject, topic, correct: 0, wrong: 0, mistakeCount: 0 };
    }
    topicAgg[key].correct += corrDelta;
    topicAgg[key].wrong += wrongDelta;
    topicAgg[key].mistakeCount += mistakeDelta;
  };

  // 1. Mock test topic stats
  Object.values(topicStats || {}).forEach((entry) => {
    if (!entry || !entry.topic) return;
    addTopic(entry.subject, entry.topic, Number(entry.correct || 0), Number(entry.wrong || 0), 0);
  });

  // 2. PYQ Explorer attempts that carry subject/topic metadata
  const pyqAttemptsObj = pyqProgress?.attempts || {};
  Object.values(pyqAttemptsObj).forEach((att) => {
    if (!att || !att.topic) return;
    addTopic(att.subject || 'Railway PYQ', att.topic, att.isCorrect ? 1 : 0, att.isCorrect ? 0 : 1, 0);
  });

  // 3. Real mistakes from Mistake Notebook (ignore built-in starter samples)
  const realMistakes = Array.isArray(mistakes)
    ? mistakes.filter((m) => m && !String(m.id || '').startsWith('sample_'))
    : [];
  realMistakes.forEach((m) => {
    addTopic(m.subject || 'General Science', m.topic || 'Official Question', 0, 0, 1);
  });

  // Subject breakdown
  const subjectMap = {};
  Object.values(topicAgg).forEach((t) => {
    if (!subjectMap[t.subject]) {
      subjectMap[t.subject] = { subject: t.subject, correct: 0, wrong: 0, mistakeBacklog: 0 };
    }
    subjectMap[t.subject].correct += t.correct;
    subjectMap[t.subject].wrong += t.wrong;
    subjectMap[t.subject].mistakeBacklog += t.mistakeCount;
  });

  const subjectStats = Object.values(subjectMap)
    .map((s) => {
      const total = s.correct + s.wrong;
      const accuracy = total > 0 ? Math.round((s.correct / total) * 100) : 0;
      const status =
        total === 0
          ? s.mistakeBacklog > 0
            ? 'weak'
            : 'untested'
          : accuracy < 55
          ? 'weak'
          : accuracy < 75
          ? 'average'
          : 'strong';
      return { ...s, total, accuracy, status };
    })
    .sort((a, b) => a.accuracy - b.accuracy || b.mistakeBacklog - a.mistakeBacklog);

  // Rank Weak Topics (prioritize lowest accuracy or unresolved mistakes)
  const allTopics = Object.values(topicAgg).map((t) => {
    const total = t.correct + t.wrong;
    const effectiveWrong = Math.max(t.wrong, t.mistakeCount);
    const accuracy = total > 0 ? Math.round((t.correct / total) * 100) : t.mistakeCount > 0 ? 0 : 100;
    return { ...t, total, effectiveWrong, accuracy };
  });

  const weakTopics = allTopics
    .filter((t) => (t.total >= 1 && t.accuracy < 70) || t.mistakeCount > 0)
    .sort((a, b) => b.effectiveWrong - a.effectiveWrong || a.accuracy - b.accuracy)
    .slice(0, 6);

  const strongTopics = allTopics
    .filter((t) => t.total >= 2 && t.accuracy >= 75)
    .sort((a, b) => b.accuracy - a.accuracy || b.correct - a.correct)
    .slice(0, 4);

  const totalMocks = Array.isArray(testAttempts) ? testAttempts.length : 0;
  const avgAccuracy =
    totalMocks > 0
      ? Math.round(
          testAttempts.reduce((acc, a) => acc + Number(a.accuracy || 0), 0) / totalMocks
        )
      : 0;
  const bestAttempt =
    totalMocks > 0
      ? testAttempts.reduce(
          (best, cur) => (Number(cur.score || 0) > Number(best.score || -1) ? cur : best),
          testAttempts[0]
        )
      : null;

  const recentTrend = (Array.isArray(testAttempts) ? testAttempts : [])
    .slice(0, 6)
    .reverse()
    .map((a) => ({
      id: a.id,
      label: String(a.test_title || 'Mock').slice(0, 22),
      accuracy: Math.round(Number(a.accuracy || 0)),
      score: Number(a.score || 0),
      totalMarks: Number(a.total_marks || 100),
    }));

  return {
    summary: {
      totalMocks,
      avgAccuracy,
      bestScoreText: bestAttempt ? `${bestAttempt.score}/${bestAttempt.total_marks}` : '--',
      pyqsPracticed: Object.keys(pyqAttemptsObj).length,
      bookmarksCount: Object.keys(pyqProgress?.bookmarks || {}).length,
      activeMistakesCount: realMistakes.length,
    },
    subjectStats,
    weakTopics,
    strongTopics,
    recentTrend,
  };
}
