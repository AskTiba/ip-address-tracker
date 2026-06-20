# Roadmap

## Vision

Build a polished IP Address Tracker that matches the Frontend Mentor design spec with **flawless responsiveness** across every screen size from 320px mobile to ultrawide desktop. Users can view their own IP location on a map, search any IP address or domain, and see key info (IP, location, timezone, ISP). The project uses Vite + vanilla JS ES modules + vanilla CSS custom properties — a professional, right-sized stack that demonstrates solid frontend fundamentals.

## Non-Functional Requirements

| Dimension | Target | Notes |
|---|---|---|
| Responsiveness | **Fluid: 320px → 2560px** | Not just design breakpoints (375px, 1440px) — the layout, typography, and spacing must scale gracefully across all viewport widths using CSS Grid, custom properties, and `clamp()` |
| Layout breakpoints | Mobile < 768px · Tablet 768-1024px · Desktop 1024-1440px · Wide > 1440px | Hero overlay, info cards strip, and map must reflow naturally at each range |
| Expected scale | Single user, personal project | No backend, client-side only |
| Latency budget | API responses within 2s | IPify geolocation API + Leaflet tile loading |
| Uptime / reliability | N/A — static site | Hosted on GitHub Pages or similar |
| Accessibility | WCAG AA minimum | Semantic HTML, keyboard nav, ARIA live regions for dynamic results, focus management |
| Other constraints | API key for IPify must not leak | `.env` file, `VITE_` prefix for Vite, never committed |

## Milestones

### Phase 1 — Project Scaffold
| Detail | Info |
|---|---|
| **Status** | Not started |
| **Files** | `package.json`, `vite.config.js`, `index.html`, `src/` directory tree |
| **Steps** | Scaffold with `npm create vite@latest . -- --template vanilla`. Install Leaflet (`npm install leaflet`). Create `src/js/`, `src/css/` structure. Set up `.env` with `VITE_IPIFY_API_KEY` placeholder. Verify `npm run dev` starts. |
| **Verification** | `npm run dev` opens browser, Vite HMR works |

### Phase 2 — Semantic HTML
| Detail | Info |
|---|---|
| **Status** | Not started |
| **Files** | `index.html` |
| **Steps** | Overwrite with semantic structure: header/hero (background pattern, heading, search form), main info section (4 cards: IP, Location, Timezone, ISP in a flex/grid row), map container section, footer. Accessible labels, landmarks, ARIA live region for dynamic results. |
| **Verification** | Validates as semantic HTML, passes basic accessibility audit |

### Phase 3 — CSS (Mobile-First Responsive)
| Detail | Info |
|---|---|
| **Status** | Not started |
| **Files** | `src/css/style.css` |
| **Steps** | Custom properties on `:root` for colors, font, spacing. Mobile-first base styles (375px). Layout: hero ~30vh with pattern bg, info cards overlap hero/map boundary, map fills remaining height. Use CSS Grid for card layout. Responsive via `clamp()` for fluid typography and spacing. Media queries at tablet (768px) and desktop (1024px+). Hover/focus states. Loading skeleton styles. Error state styles. |
| **Verification** | Visual match to design JPGs at 375px and 1440px. Layout holds at every viewport width between 320-2560px. |

### Phase 4 — State & API Layer
| Detail | Info |
|---|---|
| **Status** | Not started |
| **Files** | `src/js/state/store.js`, `src/js/api/ipify.js` |
| **Steps** | Store: simple observable object with fields (ip, location, timezone, isp, lat, lng, loading, error). Subscribe pattern for UI updates. API: `fetchIPInfo(ipOrDomain?)` — GET to IPify, error handling (network, HTTP, invalid input), response normalization. |
| **Verification** | `fetchIPInfo()` returns correct data. `fetchIPInfo('invalid')` returns error. Store subscribers fire on state change. |

### Phase 5 — Map Module
| Detail | Info |
|---|---|
| **Status** | Not started |
| **Files** | `src/js/map/init.js` |
| **Steps** | Initialize Leaflet map in container. Set tile layer (OpenStreetMap). Expose `updateMap(lat, lng)` to move marker and re-center view. Handle map container resize on responsive layout changes. |
| **Verification** | Map renders at correct coordinates. Marker updates on `updateMap()`. Map responds to container resize. |

### Phase 6 — UI Modules
| Detail | Info |
|---|---|
| **Status** | Not started |
| **Files** | `src/js/ui/search.js`, `src/js/ui/results.js`, `src/js/ui/map.js` |
| **Steps** | **Search**: form submit → validate input (IP regex + domain pattern) → trigger API call. **Results**: render IP, location, timezone, ISP from store state → handle loading skeleton → handle error message. **Map wrapper**: connect store to map module → update on new coordinates. |
| **Verification** | Search triggers API. Results render correctly. Loading/error states display properly. |

### Phase 7 — Integration
| Detail | Info |
|---|---|
| **Status** | Not started |
| **Files** | `src/js/main.js` |
| **Steps** | On load: fetch user's IP → initialize map at coordinates → render results. Wire search to trigger new fetch → update results + map. Wire store subscribers to all UI modules. Handle initial loading state. |
| **Verification** | Full flow works: initial load → search valid IP → search domain → search invalid input |

### Phase 8 — Verification
| Detail | Info |
|---|---|
| **Status** | Not started |
| **Files** | All |
| **Steps** | Manual test all user stories. Test responsiveness at 320px, 375px, 768px, 1024px, 1440px, 1920px. Keyboard navigation audit. Screen reader test. `npm run build` → verify `dist/` works. |
| **Verification** | All user stories pass. No responsive breakage. Builds cleanly. |

### Phase 9 — Deploy
| Detail | Info |
|---|---|
| **Status** | Not started |
| **Files** | GitHub repo |
| **Steps** | Push to GitHub. Deploy `dist/` via GitHub Pages (or Netlify/Vercel). Verify live URL. Update README.md with live link. |
| **Verification** | Live URL loads and functions identically to local dev |

## Tech Debt & Risk Register

| Date Identified | Item | Risk if Unaddressed | Deferred Because | Revisit When |
|---|---|---|---|---|
| 2026-06-20 | No formatter/linter configured yet | Inconsistent code style across session | Stack decision came first; can add ESLint + Prettier in a single commit anytime before Phase 8 | Before Phase 8 (verification) |
| 2026-06-20 | Leaflet tile layer requires internet | Map won't work offline | Static site, always online by nature | N/A |
| 2026-06-20 | IPify free tier rate limits | Unknown — if exceeded, app breaks silently | Haven't hit limit yet; add error handling in Phase 4 regardless | If user reports issues |

## Backlog (Unscheduled)

- ESLint + Prettier configuration
- Light CI pipeline (GitHub Actions: lint + build on push)
- Write tests for API client (DOM-isolated code — test-first mandated by skill section 6.1)
