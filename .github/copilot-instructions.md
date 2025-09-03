# Copilot Instructions for Sprouse-Prouse Family Research

This guide enables AI coding agents to work productively in this Next.js/TypeScript static site project. It summarizes key architecture, workflows, and conventions specific to this codebase.

## Project Overview
- **Purpose:** Static site visualizing 800 years of Sprouse-Prouse family history, with interactive maps, timelines, and genealogical data.
- **Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Leaflet.js, Vercel (for hosting), GitHub Pages (for deployment).

## Architecture & Structure
- All source code is in `src/app/`:
  - `data.ts`: Contains family and historical data objects. Update here for new people/events.
  - `globals.css`: Tailwind and global styles. Use utility classes for layout and design.
  - `layout.tsx`: Root layout, wraps all pages/components.
  - `page.tsx`: Main page, renders interactive features (timeline, map, register, etc).
- Interactive map uses Leaflet.js (see usage in main page/component).
- All UI is responsive; use Tailwind breakpoints and flex/grid utilities.

## Developer Workflows
- **Install:** `npm install`
- **Dev server:** `npm run dev` (http://localhost:3000)
- **Build static site:** `npm run build` (outputs to `out/`)
- **Deploy:** Push to `main` triggers GitHub Actions workflow (`.github/workflows/nextjs.yml`) for GitHub Pages. Manual deploy: upload `out/` to static host.
- **Test build before PR:** Always run `npm run build` to verify static export.

## Conventions & Patterns
- **Data-driven UI:** All family/timeline/map data is in `data.ts`. Avoid hardcoding data in components.
- **Component structure:** Keep all logic in `src/app/`. Use functional React components and hooks.
- **Styling:** Use Tailwind CSS classes. Avoid custom CSS unless necessary.
- **Map integration:** Use Leaflet.js for maps. See main page/component for integration pattern.
- **Document viewer:** Modal system for historical documents is implemented in main page/component.
- **No backend/server code:** All logic is client-side/static.

## Integration Points
- **Leaflet.js:** For migration map. Data from `data.ts`.
- **GitHub Actions:** `.github/workflows/nextjs.yml` automates build/deploy to GitHub Pages.
- **Vercel:** Used for preview/deployment (if configured).

## Examples
- To add a new family member/event: update `src/app/data.ts` and ensure UI components read from this data.
- To add a new feature: create a new component in `src/app/`, import in `page.tsx`, and style with Tailwind.

## References
- See `README.md` for setup, build, and deployment details.
- See `.github/workflows/nextjs.yml` for CI/CD workflow.
- See `src/app/data.ts` for data structure and conventions.

---

**Feedback:** If any section is unclear or missing, please specify so it can be improved for future AI agents.
