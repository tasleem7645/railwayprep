/**
 * Lightweight browser event bus to trigger debounced Cloud Study State sync
 * whenever local mistakes, PYQ mastery, bookmarks, streaks, or topic stats change.
 */

export const STUDY_SYNC_EVENT = 'railwayprep:study-sync';

export function notifyStudyStateChanged() {
  try {
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new CustomEvent(STUDY_SYNC_EVENT));
    }
  } catch (e) {}
}
