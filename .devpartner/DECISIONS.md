# Decisions Log

> Architecture, technology, and process decisions, including overridden disagreements,
> dependency choices, and git conventions.

## Decision Records

| Date | Decision | Persona | Reasoning | Alternatives Considered | User Override? |
|---|---|---|---|---|---|---|
| 2026-06-20 | Bootstrap project with senior-dev-partner skill | Staff Engineer | Establishes persistent project state, error logging, decision tracking, and commit discipline from the start | None | No |
| 2026-06-20 | **Stack: Vite + vanilla JS ES modules + vanilla CSS custom properties** | Frontend Architect | Project has ~3 UI sections, 1 API, 1 map library — a framework adds unnecessary weight and raises "overengineering" questions in portfolio review. Vite gives professional dev workflow (HMR, ES modules, .env) with minimal config. Vanilla CSS handles the 2-color/1-font design trivially via custom properties. | React/Vue/Svelte (overkill), Plain files (no HMR/modules), SCSS/Tailwind (unnecessary abstraction for this scope), Leaflet via CDN vs npm (npm cleaner with Vite bundling) | No |
| 2026-06-20 | **Responsiveness: full-range fluid** (320px → 2560px) | Frontend Architect | User explicitly requested complete perfect responsiveness across desktop, tablet, and mobile. Not just design breakpoints (375px, 1440px) but fluid scaling across all viewports. CSS Grid + custom properties + clamp() for fluid typography/spacing. | Fixed breakpoints only (insufficient per user requirement) | No |

## Git Conventions for This Project

| Aspect | Convention |
|---|---|
| Commit message format | Conventional Commits — `type: description`, ≤12 words, imperative |
| Commit types in use | feat, fix, refactor, docs, test, chore, build, perf, style, wip (default) |
| Scopes used? | No (default) |
| Default branch | main |
| Branch naming convention | TBD |
| Force-push allowed on | Never without per-instance confirmation (default) |
| Amend policy notes | Default per skill |
| Commit attribution trailer | None (default) |
