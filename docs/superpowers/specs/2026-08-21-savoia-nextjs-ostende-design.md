# Savoia Next.js — Ostende micro-site — Design

## Context

`chiarasalvucci1@gmail.com`'s Next.js/Tailwind/Framer Motion recreation of the Savoia
hotels site (`/Users/chiara/Desktop/savoia-nextjs`, spec/plan at
`docs/superpowers/specs/2026-08-21-savoia-nextjs-design.md` and
`docs/superpowers/plans/2026-08-21-savoia-nextjs-plan.md`) originally scoped the
`ostende/` micro-site out — its link just pointed at the live production URL. This
follow-up brings `ostende/` in as real routes in the same project, and re-reads the
current state of every source file (no assumption of staleness — this spec is built
from a fresh read of `/Users/chiara/Desktop/Savoia/ostende`).

`ostende/` is itself a small multi-page site (Hotel Savoia Ostende's own site,
nested at `hotelessavoia.com/ostende/...`) with its own header/nav, its own contact
info, and 15 pages. It shares the parent site's exact chrome pattern (nav with
hamburger menu, `#contact-info` 3-box section, WhatsApp float, footer) but adds a
few page types the parent site doesn't have (video hero, image-carousel-plus-detail
pages, a services grid).

## Goals

- 15 new routes under `app/ostende/*`, mirroring the site graph actually reachable
  from `ostende/index.html`'s nav (verified by grepping every live page's links —
  see Page Inventory below). Four leftover draft files
  (`categoria-standart.html`, `categoria-superior.html` with no accent,
  `contacto2.html`, `galeria-de-fotos.html`, all dated Nov 2024 vs. the live set's
  Mar 2025, plus their `gracias.php`/`gracias2.php`/`process.php`/`contact.js`
  backends) are **out of scope** — confirmed orphaned, only linking to each other,
  unreachable from the live nav.
- Reuse existing components (`Footer`, `WhatsAppFloat`, `ContactInfoBar`, `Carousel`,
  `PhotoRevealCard`, `RevealSection`) wherever their contract already fits.
- Four new components for patterns the parent site doesn't have: `OstendeHeader`,
  `HeroBand`, `VideoHero`, `AmenityDetail`, `SplitContent` (five, see Components).
- `GuestCounter` gains two optional, backward-compatible props (`adultsName`,
  `childrenName`) so Ostende's contact form (`name="adultos"/"menores"`) can reuse it
  without breaking the parent site's existing `<GuestCounter />` call.
- Update the parent site's "Hotel Savoia Ostende" link (home page `HOTELS` array and
  `/hoteles` page's `CARDS` array) from the external production URL to the internal
  `/ostende` route, now that it's real.
- Content ported verbatim from the current `/Users/chiara/Desktop/Savoia/ostende`
  files, per the same fidelity standard as the parent site's build.

## Non-goals

- The 4 orphaned draft pages and their PHP backends (out of scope, see above).
- Real contact-form backend (same as the parent site — stub `alert()` submission,
  no Formspree POST).
- The unused Bootstrap/jQuery/datepicker/lightbox library files sitting in
  `ostende/css/`, `ostende/js/`, `ostende/fonts/` — verified none of the 15 live
  pages actually load them (only `css/style.css`, `mobile.css`, the Font Awesome
  CDN link, and `script.js` are referenced in `<head>`/before `</body>`); the pages'
  own carousels/hover-cards/menu are hand-rolled, not Bootstrap components.
- `nosotros.html`, linked from 8 of the 15 pages' nav-adjacent code but never
  present in `ostende/` (a broken link in the original) — dropped from the ported
  nav entirely, not pointed anywhere.

## Page inventory and site graph

Verified by grepping every live page's `href="...html"` values — this is the real,
reachable graph, not a guess from folder contents:

| Page | Route | Pattern |
|---|---|---|
| `index.html` | `/ostende` | `VideoHero` + 3 `PhotoRevealCard` (highlights) + big lobby image + 3 `PhotoRevealCard` (room categories, linking to the 3 categoria pages) + 2 `SplitContent` blocks + `ContactInfoBar` |
| `habitaciones.html` | `/ostende/habitaciones` | `HeroBand` + 3 room-category tiles (small icon overlay, "Ver más", linking to the 3 categoria pages) + `ContactInfoBar` |
| `servicios.html` | `/ostende/servicios` | 6 `PhotoRevealCard` tiles linking to gastronomia-savoia, bar-woodstock, bar-saintjean, pileta, gym-sauna, miniclub + `ContactInfoBar` |
| `ubicacion.html` | `/ostende/ubicacion` | Heading + Google Maps iframe + `ContactInfoBar` |
| `contacto.html` | `/ostende/contacto` | Form (nombre/email/`GuestCounter`/fechas/mensaje) + `ContactInfoBar` |
| `categoria-ejecutiva.html` | `/ostende/categoria-ejecutiva` | `HeroBand` + `AmenityDetail` (3-image carousel + labeled description) + `ContactInfoBar` |
| `categoria-standard.html` | `/ostende/categoria-standard` | same pattern as ejecutiva |
| `categoría-superior.html` | `/ostende/categoria-superior` (URL de-accented per user decision; page content/title keeps the accent) | same pattern |
| `bar-saintjean.html` | `/ostende/bar-saintjean` | `HeroBand` + `AmenityDetail` + `ContactInfoBar` |
| `bar-woodstock.html` | `/ostende/bar-woodstock` | same pattern |
| `gastronomia-savoia.html` | `/ostende/gastronomia-savoia` | `HeroBand` + `AmenityDetail` (or equivalent gallery/description — implementer reads the live source) + `ContactInfoBar` |
| `gastronomia.html` | `/ostende/gastronomia` | simpler page, reuses `home/collage-gastronomia.jpg` — implementer reads the live source, it's short |
| `gym-sauna.html` | `/ostende/gym-sauna` | `HeroBand` + `AmenityDetail` + `ContactInfoBar` |
| `miniclub.html` | `/ostende/miniclub` | same pattern |
| `pileta.html` | `/ostende/pileta` | same pattern |

Nav (same 5 links on every Ostende page, via `OstendeHeader`): INICIO (→ the
**parent** site's `/`, not `/ostende` — this is the original site's own behavior:
the logo click stays on Ostende's home, but the nav's "INICIO" item always goes
back to the main Savoia site), HABITACIONES (`/ostende/habitaciones`), SERVICIOS
(`/ostende/servicios`), UBICACIÓN (`/ostende/ubicacion`), CONTACTO
(`/ostende/contacto`).

For the 6 pages listed above with "implementer reads the live source" or a
partially-specified `AmenityDetail` pattern, the implementation task's brief will
name the exact source file and instruct verbatim porting, cross-checked by that
task's reviewer against the source — the same successful method the parent site's
6-page build used. This spec fixes the *architecture* (which shared components,
which routes, which data flows where); it does not re-transcribe every paragraph of
Spanish copy inline.

## Components

### Reused as-is (no changes)
`Footer`, `WhatsAppFloat`, `Carousel`, `PhotoRevealCard`, `RevealSection`.

### Reused with Ostende-specific override props (no code changes)
`ContactInfoBar` — every Ostende page passes:
```
locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
phoneHref="tel:02254496600"
phoneText="(02254) 49-6600"
```
(email stays the default `reservas@hotelessavoia.com`). These already match the
Ostende entry's data on the parent site's home/hoteles pages — verified consistent.

### Extended, backward-compatible
`GuestCounter` gains two optional props:
```js
export default function GuestCounter({ adultsName = 'adults', childrenName = 'children' }) { ... }
```
used only on the two hidden `<input name={...}>` elements. The parent site's
existing `<GuestCounter />` call is unaffected (same defaults). Ostende's
`/ostende/contacto` calls `<GuestCounter adultsName="adultos" childrenName="menores" />`.

### New components

**`OstendeHeader`** (`components/OstendeHeader.jsx`) — same structural pattern as
the parent `Header` (client component, `useState` mobile-menu toggle, Framer
Motion `AnimatePresence` slide panel, `usePathname` active-link highlight, `Menu`/
`X` from lucide-react), but:
- logo `logonuevo-savoia.jpg` (Ostende's own), links to `/ostende`
- nav: `INICIO` → `/` (parent site), `HABITACIONES` → `/ostende/habitaciones`,
  `SERVICIOS` → `/ostende/servicios`, `UBICACIÓN` → `/ostende/ubicacion`,
  `CONTACTO` → `/ostende/contacto`

A separate component (not a parameterized `Header`) because the nav item count,
targets, and the "logo goes one place, INICIO goes another" behavior are
Ostende-specific and would otherwise turn `Header` into a prop-soup.

**`HeroBand`** (`components/HeroBand.jsx`) — full-width background-image band with
an optional centered heading, replacing the original's `#showcaseN` CSS-background
pattern:
```jsx
export default function HeroBand({ imageSrc, imageAlt, title }) {
  return (
    <div className="relative flex h-[50vh] w-full items-center justify-center md:h-[70vh]">
      <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
      {title && (
        <h1 className="relative z-10 px-4 text-center text-3xl font-medium text-white md:text-5xl">
          {title}
        </h1>
      )}
    </div>
  );
}
```
Used by `habitaciones`, the 3 `categoria-*` pages, both bar pages,
`gastronomia-savoia`, `gym-sauna`, `miniclub`, `pileta` (each with its own
`imageSrc` per the hero image mapping already found in `ostende/css/style.css`'s
`#showcaseN` rules — the implementer confirms the exact rule for their page).

**`VideoHero`** (`components/VideoHero.jsx`) — index-page-only autoplaying,
muted, looping background video:
```jsx
export default function VideoHero({ src }) {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden md:h-[80vh]">
      <video autoPlay muted loop playsInline className="h-full w-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
```
Note: the source file is `video-savoia.mov` (QuickTime container) — copied as-is
into `public/`; browsers that can't play `.mov` via a `type="video/mp4"` source tag
will just show a blank/black hero (acceptable for a prototype; flagged in
Verification).

**`AmenityDetail`** (`components/AmenityDetail.jsx`) — carousel + labeled
description, the pattern shared by the 3 `categoria-*` pages, both bar pages, and
(implementer-confirmed per page) `gastronomia-savoia`/`gym-sauna`/`miniclub`/
`pileta`:
```jsx
import Carousel from './Carousel';

export default function AmenityDetail({ images, title, detailLines }) {
  return (
    <section className="flex flex-col gap-8 px-5 py-10 md:flex-row md:px-10">
      <div className="md:w-1/2">
        <Carousel slides={images} />
      </div>
      <div className="md:w-1/2">
        <h2 className="mb-4 text-2xl font-medium">{title}</h2>
        {detailLines.map(({ label, text }) => (
          <p key={label} className="mb-3">
            <span className="font-bold">{label}: </span>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
```
`detailLines` is `{ label: string, text: string }[]`, ported verbatim from each
page's own `<span class="texto-negrita">Label:</span> text` pairs.

**`SplitContent`** (`components/SplitContent.jsx`) — image + text side by side,
used by the index page's two "opciones" blocks (Experiencia Savoia, Gastronomía):
```jsx
export default function SplitContent({ imageSrc, imageAlt, imageSide = 'left', title, subtitle, paragraphs }) {
  const image = (
    <div className="relative h-[300px] md:h-auto md:flex-1">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </div>
  );
  const text = (
    <div className="flex flex-col justify-center gap-3 px-5 py-8 md:flex-1 md:px-10">
      <h2 className="text-2xl font-medium">{title}</h2>
      {subtitle && <h3 className="text-lg">{subtitle}</h3>}
      {paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
    </div>
  );
  return (
    <section className="flex flex-col md:flex-row">
      {imageSide === 'left' ? <>{image}{text}</> : <>{text}{image}</>}
    </section>
  );
}
```

## Assets

Copy from `/Users/chiara/Desktop/Savoia/ostende/img/` into
`public/img/ostende/` (preserving the source subfolder layout, e.g.
`public/img/ostende/home/lobby-ostende.webp`), **only** the files actually rendered
by the 15 live pages — verified by grepping every page's `src="./img/..."` and the
`background-image` rules in `ostende/css/style.css` tied to the CSS IDs those pages
actually use (`#imagen1`–`#imagen12`, `#showcase2`–`#showcase7`). The exact file
list is enumerated in the implementation plan's asset-copy task.

Excluded, confirmed dead/unused by direct inspection:
- `logo-png.png`, `savoia-logo2.jpeg`, `habitaciones/suite.jpg` — referenced only
  inside HTML comments (`<!-- ... -->`) on every page that mentions them, never
  actually rendered.
- `foto-blanco.png` (`#imagen13`/`#imagen14`/`#imagen15`, the 3 category tiles on
  `habitaciones.html`) — a generic blank placeholder in the original. **Decision:**
  the Next.js version substitutes the real room photos already used elsewhere on
  the site (`home/habitacion-superior.webp`, `habitacion-ejecutiva.webp`,
  `habitacion-estandar.webp`) instead of porting the placeholder verbatim — a
  content-quality fix, not a content-fidelity break (the placeholder was clearly an
  oversight in the original, and the correct images already exist and are already
  being copied for the home page's own room-category cards).
- The whole `css/` (Bootstrap family), `js/` (jQuery/datepicker/lightbox/superfish),
  and most of `fonts/` folders — unused by any live page (see Non-goals).

`video-savoia.mov` (44MB) is copied as-is per explicit user decision (accepted the
repo-size cost to keep the video hero faithful to the original).

## Verification

Same standard as the parent site: `npm run build` clean, then a route-by-route
check (curl/grep in this environment, since there's no real browser available — the
same adapted method Task 14 used for the parent site) confirming each of the 15
routes returns 200 and contains its expected content markers, that
`/ostende`'s nav and `ContactInfoBar` show the correct Ostende-specific data (not
the parent site's CABA office), that the parent site's home/hoteles "Hotel Savoia
Ostende" links now point at `/ostende`, and that the `.mov` video tag is present in
`/ostende`'s HTML (playback itself can't be verified without a real browser — flag
this the same way Task 14 flagged the mobile-menu-animation gap).
