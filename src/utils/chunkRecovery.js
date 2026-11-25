/**
 * Auto-recovery helpers for stale Vite lazy-chunk deployments on Cloudflare Pages.
 * Prevents "Failed to fetch dynamically imported module" / MIME errors when an old
 * open browser tab tries to load a chunk hash replaced by a newer deployment.
 */

const RELOAD_GUARD_KEY = 'rp_chunk_reload_ts';
const RELOAD_COOLDOWN_MS = 15000;

export function isChunkLoadError(err) {
  const msg = String(err?.message || err || '').toLowerCase();
  return (
    msg.includes('failed to fetch dynamically imported module') ||
    msg.includes('importing a module script failed') ||
    msg.includes('error loading dynamically imported module') ||
    msg.includes('chunkloaderror') ||
    msg.includes('loading chunk')
  );
}

export async function forceFreshReload({ clearSessionKey = false, clearAllStorage = false } = {}) {
  try {
    if (clearAllStorage) {
      localStorage.clear();
      sessionStorage.clear();
    } else if (clearSessionKey) {
      localStorage.removeItem('railwayprep_active_test_session');
    }
  } catch (e) {}

  try {
    if (typeof caches !== 'undefined' && caches.keys) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
  } catch (e) {}

  try {
    const url = new URL(window.location.href);
    url.searchParams.set('_r', Date.now().toString(36));
    window.location.replace(url.toString());
  } catch {
    window.location.reload();
  }
}

export function triggerOneTimeChunkReload() {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_GUARD_KEY) || 0);
    const now = Date.now();
    if (!last || now - last > RELOAD_COOLDOWN_MS) {
      sessionStorage.setItem(RELOAD_GUARD_KEY, String(now));
      forceFreshReload();
      return true;
    }
  } catch (e) {}
  return false;
}

export function lazyWithRetry(factory, reactLazy) {
  return reactLazy(() =>
    factory().catch((err) => {
      if (isChunkLoadError(err) && triggerOneTimeChunkReload()) {
        // Return never-resolving promise while the browser replaces the page
        return new Promise(() => {});
      }
      throw err;
    })
  );
}
