# AGENTS.md

## Cursor Cloud specific instructions

`Obrona fizjo` is a single-page web app (no backend) for studying the practical part
of a physiotherapy diploma defense. Stack: React 18 + TypeScript + Vite 5 + Tailwind CSS 3.
All state (study progress) lives in the browser `localStorage` under key
`obrona-fizjo-progress`, with an in-memory fallback. There is no database, API, or auth.

### Running the app
- Dev server: `npm run dev` (Vite, serves on `http://localhost:5173`).
- Lint / type-check: `npm run lint` (alias for `tsc --noEmit`).
- Build: `npm run build` (`tsc --noEmit && vite build`); preview with `npm run preview`.

There are no automated unit/integration tests in this repo; `npm run lint` is the only
programmatic check. Verify behavior by running the dev server and exercising the UI
(tabs: Metoda, Szablony, Pytania, Fiszki). Core flow: mark questions "Umiem" and watch
the `Umiem X / 72` counter in the header update (persisted in `localStorage`).

### Notes
- Node 18+ is required (developed/verified on Node 22).
- The app content is in Polish.
