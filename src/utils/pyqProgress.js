/**
 * Persistent PYQ Explorer Progress & Starred Bookmarks Storage
 */

import { notifyStudyStateChanged } from './studySyncEvents.js';

export const PROGRESS_KEY = 'railwayprep_pyq_progress_v1';

export function loadPyqProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        attempts: parsed?.attempts && typeof parsed.attempts === 'object' ? parsed.attempts : {},
        bookmarks: parsed?.bookmarks && typeof parsed.bookmarks === 'object' ? parsed.bookmarks : {},
      };
    }
  } catch {}
  return { attempts: {}, bookmarks: {} };
}

function persistProgress(state) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
  } catch {}
  notifyStudyStateChanged();
}

export function savePyqAttempt(uid, pickedOpt, isCorrect, meta = null) {
  const cur = loadPyqProgress();
  const prevEntry = cur.attempts?.[uid] || {};
  const next = {
    ...cur,
    attempts: {
      ...cur.attempts,
      [uid]: {
        pickedOpt,
        isCorrect: Boolean(isCorrect),
        updatedAt: Date.now(),
        ...(meta?.subject ? { subject: meta.subject } : prevEntry.subject ? { subject: prevEntry.subject } : {}),
        ...(meta?.chapter ? { chapter: meta.chapter } : prevEntry.chapter ? { chapter: prevEntry.chapter } : {}),
        ...(meta?.topic ? { topic: meta.topic } : prevEntry.topic ? { topic: prevEntry.topic } : {}),
      },
    },
  };
  persistProgress(next);
  return next;
}

export function clearPyqAttempt(uid) {
  const cur = loadPyqProgress();
  const nextAttempts = { ...cur.attempts };
  delete nextAttempts[uid];
  const next = { ...cur, attempts: nextAttempts };
  persistProgress(next);
  return next;
}

export function togglePyqBookmark(uid) {
  const cur = loadPyqProgress();
  const nextBookmarks = { ...cur.bookmarks };
  if (nextBookmarks[uid]) {
    delete nextBookmarks[uid];
  } else {
    nextBookmarks[uid] = true;
  }
  const next = { ...cur, bookmarks: nextBookmarks };
  persistProgress(next);
  return next;
}
