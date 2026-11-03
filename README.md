# RWANDA — From History to Vision

A premium, interactive React digital museum exploring Rwanda's journey from 1954 to Vision 2030.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Stack

React 18 · Vite · React Router · Tailwind CSS · Framer Motion · Lucide React · Recharts

## Project structure

```
src/
├── components/   Reusable UI: Navbar, Hero, Timeline, ImageCard, StatCard, Footer, ScrollProgress
├── pages/        Home, History, TimelinePage, Culture, RwandaToday, MapPage, GalleryPage, Quiz, Vision2030
├── data/         timeline.js, culture.js, statistics.js, vision2030.js — all sourced content lives here
├── App.jsx
└── main.jsx
```

## Images

Real, freely-licensed photographs (Wikimedia Commons, CC BY / CC BY-SA / public domain) are wired
in via `src/data/images.js` and served through Wikimedia's `Special:FilePath` redirect, so no image
files are bundled in this repo — they load live from Commons and always resolve to the current file.
Each `ImageCard` shows a visible credit line linking back to the Commons file page, satisfying CC
attribution requirements. Topics without a verified, clearly-licensed photo (the 1994 section, a
few culture entries) intentionally render a labeled "Historical image unavailable" placeholder
instead of a mismatched or fabricated image — swap in your own licensed photography for those as
you extend the site.

## Content & accuracy notes

- Historical dates, events and statistics in `src/data/` are compiled from publicly documented
  sources (UN records, World Bank, government of Rwanda publications, academic works on Rwandan
  history). Each data point carries a `source` field — verify against the cited source before any
  academic or publication use.
- The 1994 genocide against the Tutsi is presented in a dedicated, respectful section in
  `src/pages/History.jsx` — factual, non-graphic, without invented victim stories.
- **No real photographs or video are bundled.** The `ImageCard` component intentionally renders a
  labeled "Historical image unavailable" placeholder rather than fabricating imagery. To finish the
  visual experience, source properly licensed photographs (e.g. from the Kigali Genocide Memorial,
  Rwanda Development Board, or a licensed stock/archive provider) and swap them into `ImageCard`.
- Vision 2030/2050 content in `src/data/vision2030.js` is explicitly split into `officialGoal`,
  `currentProject`, and `possibleFuture` so speculative aspirations are never presented as fact.
- The interactive map (`src/pages/MapPage.jsx`) is a stylized illustrative panel, not a
  geographically precise map. Swap in Leaflet + real GeoJSON boundaries for a GIS-accurate version.
- A dedicated video system (YouTube embeds) was intentionally left as a follow-up: add a
  `VideoCard.jsx` component and a `data/videos.js` file with real, licensed video IDs before
  launch, since no fabricated video sources are included here.

## Extending this project

- Add real historical/cultural photography (with sources) into `ImageCard` calls.
- Add a `VideoCard` + video modal for the documentary video system described in the original brief.
- Swap `MapPage`'s stylized SVG for `react-leaflet` with real Rwanda province GeoJSON for a
  production-grade interactive map.
- Add a youth-submission section with backend storage, moderation and privacy protections before
  collecting any real user input.

This is an educational project. Historical information, photographs and statistics should be
verified against authoritative sources before any formal or public use.
"# MUCYO-" 
