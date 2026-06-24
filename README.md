# Crisis Bureau 2025 — Interactive Report

An interactive, scroll-driven report on the Crisis Bureau's 2025 Country Office Support — deployments, crisis response, talent network & marketplace, roster infrastructure, special measures, readiness & training, workforce intelligence tools, and future outlook.

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Content was drafted from Tim's original Crisis Bureau report/dashboard and is still being reviewed for accuracy.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

- `lib/data.ts` — single source of truth for all report content (stats, copy, region/crisis/cohort data, etc.). Most content edits only need to happen here.
- `components/` — one component per report chapter (e.g. `GlobalImpactSection.tsx`, `CrisisResponseSection.tsx`), plus shared UI (`Header`, `Footer`, `ScrollProgress`, `CounterMetric`).
- `app/page.tsx` — assembles the chapters in order; `app/globals.css` holds global styles, including the print stylesheet.

## Printing / exporting

The header has a **🖨️ Print Report** button. It auto-scrolls through the page first (so scroll-triggered content renders) before opening the browser's print dialog, and uses a dedicated print stylesheet to produce a compact, accurate PDF/printout — use your browser's "Save as PDF" option in the print dialog to export.

## Deployment

Deployed on [Vercel](https://vercel.com), connected to this repo's `main` branch — every push to `main` auto-deploys.
