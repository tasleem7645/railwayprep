/**
 * Supabase Cloud Sync for Mistake Notebook, PYQ Mastery/Bookmarks, Study Streak & Topic Stats.
 */

import { supabase } from '../lib/supabaseClient';
import { PROGRESS_KEY, loadPyqProgress } from './pyqProgress';
import { TOPIC_STATS_KEY, readTopicStats, writeTopicStats } from './topicPerformance';
import { mergeMistakes, mergePyqProgress, mergeStreakState } from './studyStateMerge';

const MISTAKE_STORAGE_KEY = 'railwayprep_mistake_notebook';
const STREAK_STORAGE_KEY = 'railwayprep_study_streak_v1';

function readLocalMistakes() {
  try {
    const raw = localStorage.getItem(MISTAKE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (e) {}
  return [];
}

function readLocalRawStreak() {
  try {
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    }
  } catch (e) {}
  return {};
}

export function getLocalCloudPayload() {
  const rawStreak = readLocalRawStreak();
  const topicStats = readTopicStats();
  return {
    mistakes_json: readLocalMistakes(),
    pyq_progress_json: loadPyqProgress(),
    streak_json: {
      ...rawStreak,
      topicStats,
    },
  };
}

export async function pushStudyStateToCloud(userId) {
  if (!userId) return false;
  try {
    const payload = getLocalCloudPayload();
    const { error } = await supabase.from('user_study_state').upsert(
      {
        user_id: userId,
        ...payload,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );
    if (error) {
      console.warn('Cloud study push notice:', error.message);
      return false;
    }
    return true;
  } catch (e) {
    console.warn('Cloud study push warning:', e);
    return false;
  }
}

export async function syncStudyStateOnLogin(userId) {
  if (!userId) return null;
  try {
    const localPayload = getLocalCloudPayload();
    const { data: cloudRow, error } = await supabase
      .from('user_study_state')
      .select('mistakes_json, pyq_progress_json, streak_json, updated_at')
      .eq('user_id', userId)
      .maybeSingle();

    if (error) {
      console.warn('Cloud study fetch notice:', error.message);
      return null;
    }

    const mergedMistakes = mergeMistakes(localPayload.mistakes_json, cloudRow?.mistakes_json || []);
    const mergedPyq = mergePyqProgress(localPayload.pyq_progress_json, cloudRow?.pyq_progress_json || {});
    const mergedStreakAll = mergeStreakState(localPayload.streak_json, cloudRow?.streak_json || {});
    const { topicStats: mergedTopicStats, ...mergedStreakOnly } = mergedStreakAll;

    try {
      if (mergedMistakes.length > 0 || (cloudRow && Array.isArray(cloudRow.mistakes_json))) {
        localStorage.setItem(MISTAKE_STORAGE_KEY, JSON.stringify(mergedMistakes));
      }
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(mergedPyq));
      if (mergedStreakOnly.lastActiveDate || mergedStreakOnly.totalSessions > 0) {
        localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(mergedStreakOnly));
      }
      writeTopicStats(mergedTopicStats || {});
    } catch (e) {}

    // Push merged state back up if cloud row was missing or local held newer items
    await supabase.from('user_study_state').upsert(
      {
        user_id: userId,
        mistakes_json: mergedMistakes,
        pyq_progress_json: mergedPyq,
        streak_json: mergedStreakAll,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );

    return {
      mistakes: mergedMistakes,
      pyqProgress: mergedPyq,
      streak: mergedStreakOnly,
      topicStats: mergedTopicStats || {},
      syncedAt: Date.now(),
    };
  } catch (e) {
    console.warn('Cloud study login sync notice:', e);
    return null;
  }
}
