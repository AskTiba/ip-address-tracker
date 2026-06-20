# Error Log

> Newest entries at top. Every non-trivial bug gets an entry at the time it's resolved.

| Date | Symptom | Root Cause | Resolution | Prevention |
|---|---|---|---|---|
| 2026-06-20 | Map showed London instead of user's fetched location | `initMap()` called after `store.setState()` in `main.js` — the store subscriber that calls `updateMap()` fired before the map module had initialized, so the `if (!map) return` guard silently dropped the update | Moved `initMap('map')` before the try/catch in `src/js/main.js:17` | Check execution order of init vs async callbacks when using subscriber pattern |
