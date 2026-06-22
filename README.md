# Unibera Towers

A premium real-estate marketing website for **Unibera Towers** — Sector 1, Greater Noida West.

The structure follows the Unibera content brief, styled in a light, airy, rounded-card
design language (glassmorphic pill navigation, floating preview cards, editorial serif
type) with a forest-green + champagne-gold brand palette.

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 3** (utility-only, custom design tokens in `tailwind.config.js`)
- **Framer Motion** — scroll reveals, staggered entrances, animated counters
- **Swiper** — the "Everything Within Reach" distance carousel
- **Lucide React** + **React Icons** — iconography

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Structure

```
src/
├── components/
│   ├── common/     Navbar, Logo, SectionHeading, StatCounter, FloatingActions
│   ├── hero/       Hero (video bg + glass pills + preview cards)
│   ├── about/      About / masterpiece intro
│   ├── location/   ConnectivityMap (SVG node map), LocationIntro, DistanceCarousel
│   ├── lifestyle/  40% stat + display headline
│   ├── gallery/    Gallery grid, Harmony (in harmony with nature)
│   ├── amenities/  Numbered amenity list with hover image reveals
│   ├── forms/      TourForm (submits via WhatsApp)
│   └── footer/     ReraDetails, Footer (+ embedded map)
├── data/           site, location, amenities, media, rera
├── hooks/          useScrolled, useCountUp
├── utils/          cn, motion variants
└── pages/Home.jsx
```

## Notes

- **Hero video** streams from a remote CDN with an Unsplash poster fallback. Swap
  `src/data/media.js → hero.videoMp4` with a self-hosted asset for production.
- Imagery uses Unsplash placeholders; replace the IDs in `src/data/*.js` with final renders.
- The **regulatory notice** (RERA under renewal) is rendered verbatim per the brief.
- The tour form has no backend — it opens a prefilled WhatsApp message. Wire to an API
  or form service before launch.
