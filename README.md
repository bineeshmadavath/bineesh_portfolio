# Bineesh Madavath — portfolio

Vite + React 18 + react-router. Plain CSS with custom-property design tokens (light / dark). No UI library.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview    # serve the build locally
```

## Deploy to GitHub Pages

`vite.config.js` uses `base: './'` and the app uses `HashRouter`, so the `dist/` folder works
at any path (e.g. `/Portfolio/`) with no server rewrites. Push `dist/` to the `gh-pages` branch,
or point Pages at a `docs/` folder after `npm run build` and renaming `dist` → `docs`.

## Structure

```
src/
  data/            content only — profile, caseStudies, creative, resume (swap for an API later)
  context/         ThemeContext (light/dark, persisted, respects prefers-color-scheme)
  hooks/           useParallax (hero background), useDocumentTitle
  components/
    layout/        Nav, Footer, Layout, Band (closing CTA), HeroBackground, ThemeToggle
    ui/            Primitives (Section, SectionHead, Button, Card, Frame, lists, StepTracker, Stats), Icons
    home/          Hero, WorkGrid (bento), Process, Competencies
    case/          CaseHero, Glance, Tabs, blocks (one component per section type), CaseSection (dispatcher)
    creative/      CollectionModal
    contact/       ContactForm
  pages/           Home, CaseStudy, Creative, Contact, Resume, NotFound
  styles/          tokens.css, base.css, layout.css, components.css, pages.css
public/images/     portrait-*.png (blended silhouette stand-ins), art-*.jpg (low-res thumbnails from the old site)
```

## Replacing placeholders

- **Screenshots:** every `image: null` in `src/data/caseStudies.js` renders a labelled placeholder frame. Drop a file
  in `public/images/` and set `image: \`${import.meta.env.BASE_URL}images/your-file.png\``.
- **Photo:** replace `public/images/portrait-dark.png` (for light theme) and `portrait-light.png` (for dark theme) with a
  cut-out PNG of yourself; the blend + radial mask in `.hero__portrait` does the rest.
- **Metrics:** `[−XX%]` values in the data files are deliberate placeholders — replace with real figures or remove the section.
- **Contact form:** `send()` in `ContactForm.jsx` opens a prefilled `mailto:`. Replace with a `fetch()` to Formspree, a
  Netlify/Cloudflare function, or your own endpoint.
- **Gallery:** `CollectionModal` shows placeholder tiles; give each collection an `items` array of image paths and map over it.
