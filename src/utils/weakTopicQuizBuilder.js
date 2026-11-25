/**
 * Builds a targeted 15-Question Timed Mini-CBT Mock directly from any Weak Topic item
 * using unlocked official shifts and the 5-level PYQ Taxonomy classifier.
 */

import { classifyQuestionTaxonomy } from './pyqTaxonomy.js';
import { buildCustomTopicQuiz } from './pyqHelper.js';

function normalizeSubjectBucket(raw = '') {
  const s = String(raw || '').toLowerCase();
  if (s.includes('engineering') || s.includes('bse') || s.includes('trade')) return 'bse';
  if (s.includes('science') || s.includes('physics') || s.includes('chem') || s.includes('bio')) return 'science';
  if (s.includes('math') || s.includes('quant') || s.includes('arith')) return 'math';
  if (s.includes('reason') || s.includes('intel')) return 'reasoning';
  if (s.includes('awareness') || s.includes('gk') || s.includes('current') || s === 'ga') return 'ga';
  return s;
}

function getSearchTokens(text = '') {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((tok) => tok.length >= 3 && !['and', 'the', 'for', 'with', 'mix', 'all', 'practice', 'official'].includes(tok));
}

export function selectWeakTopicQuestions(classifiedQuestions = [], weakItem = {}, maxQuestions = 15) {
  const safePool = Array.isArray(classifiedQuestions) ? classifiedQuestions : [];
  if (safePool.length === 0) return [];

  const targetTopic = String(weakItem?.topic || '').trim().toLowerCase();
  const targetSubjectBucket = normalizeSubjectBucket(weakItem?.subject || '');
  const topicTokens = getSearchTokens(targetTopic);

  const tier1 = [];
  const tier2 = [];
  const tier3 = [];
  const seenPrompts = new Set();

  safePool.forEach((q) => {
    const qText = (q.question?.en || q.question?.hi || String(q.question || '')).slice(0, 120).trim();
    if (!qText || seenPrompts.has(qText)) return;
    seenPrompts.add(qText);

    const taxTopic = String(q._topic || q.topic || '').toLowerCase();
    const taxChapter = String(q._chapter || '').toLowerCase();
    const taxSubjectBucket = normalizeSubjectBucket(q._subject || q.section || '');
    const blob = `${taxTopic} ${taxChapter} ${qText.toLowerCase()}`;

    const isExactTopic = targetTopic && (taxTopic === targetTopic || taxTopic.includes(targetTopic) || targetTopic.includes(taxTopic));
    const tokenHits = topicTokens.filter((tok) => blob.includes(tok)).length;

    if (isExactTopic) {
      tier1.push(q);
    } else if (tokenHits >= 1 && (!targetSubjectBucket || taxSubjectBucket === targetSubjectBucket)) {
      tier2.push(q);
    } else if (targetSubjectBucket && taxSubjectBucket === targetSubjectBucket) {
      tier3.push(q);
    }
  });

  const combined = [...tier1, ...tier2];
  if (combined.length < maxQuestions) {
    combined.push(...tier3.slice(0, maxQuestions - combined.length));
  }
  if (combined.length === 0) {
    combined.push(...safePool.slice(0, maxQuestions));
  }

  return combined.slice(0, maxQuestions);
}

export async function buildWeakTopicMiniTest({
  weakItem,
  railwayTests = [],
  getTestAccess,
  maxQuestions = 15,
}) {
  const { loadTestQuestions } = await import('../data/testQuestionLoader.js');

  const accessibleTests = (Array.isArray(railwayTests) ? railwayTests : []).filter((t) => {
    if (!t || t.category === 'sectional') return false;
    return getTestAccess ? getTestAccess(t) === 'open' : Boolean(t.isFreeDemo);
  });

  // Balance shifts across ALP, NTPC UG, Group D & CBT-2 so General Awareness, Maths & Reasoning all find deep matches
  const bucketMap = new Map();
  accessibleTests.forEach((t) => {
    const key = t.examYear || (t.stage?.includes('CBT-2') ? 'cbt2' : 'alp-2026');
    if (!bucketMap.has(key)) bucketMap.set(key, []);
    bucketMap.get(key).push(t);
  });

  const targetBucket = normalizeSubjectBucket(weakItem?.subject || '');
  const preferredOrder = targetBucket === 'ga'
    ? ['ntpc-ug-2025', 'groupd-2025', 'cbt2', '2025', '2026']
    : ['ntpc-ug-2025', '2026', 'groupd-2025', '2025', 'cbt2'];
  const allBucketKeys = [...new Set([...preferredOrder.filter((k) => bucketMap.has(k)), ...bucketMap.keys()])];

  const prioritizedShifts = [];
  let roundIdx = 0;
  while (prioritizedShifts.length < 16) {
    let addedInRound = false;
    for (const key of allBucketKeys) {
      const list = bucketMap.get(key);
      if (roundIdx < list.length) {
        prioritizedShifts.push(list[roundIdx]);
        addedInRound = true;
        if (prioritizedShifts.length >= 16) break;
      }
    }
    if (!addedInRound) break;
    roundIdx += 1;
  }

  const loadedChunks = await Promise.all(
    prioritizedShifts.map(async (test) => {
      try {
        const qs = await loadTestQuestions(test);
        return (qs || []).map((q, idx) => {
          const tax = classifyQuestionTaxonomy(q);
          return {
            ...q,
            _uid: `${test.id}_${q.id || idx}`,
            _subject: tax.subject,
            _chapter: tax.chapter,
            _topic: tax.topic,
          };
        });
      } catch (e) {
        return [];
      }
    })
  );

  const selected = selectWeakTopicQuestions(loadedChunks.flat(), weakItem, maxQuestions);
  if (selected.length === 0) return null;

  const baseQuiz = buildCustomTopicQuiz({
    examLabel: 'Weak-Topic Target',
    subjectLabel: weakItem?.subject || 'Railway Mixed',
    chapterLabel: weakItem?.topic || 'Weak Topic Drill',
    topicLabel: weakItem?.topic || weakItem?.subject || 'Weak Topic',
    questions: selected,
    maxQuestions,
  });

  return {
    ...baseQuiz,
    id: `pyq_topic_weak_${Date.now()}`,
    isWeakTopicDrill: true,
    targetWeakTopic: weakItem?.topic || weakItem?.subject || 'Weak Topic',
    title: `Weak Topic Drill: ${weakItem?.topic || weakItem?.subject || 'Targeted Practice'} (${selected.length} Qs)`,
    subTitle: `Weak-Topic Radar 15-Q Timed Mini-CBT • ${weakItem?.subject || 'Railway'} • +1 / -1/3 Negative Marking`,
    badge: 'Weak Topic 15-Q CBT',
    badgeColor: 'amber',
    durationMinutes: Math.max(8, selected.length),
  };
}
