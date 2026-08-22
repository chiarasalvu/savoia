# Savoia Next.js — Ostende Micro-site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the Ostende micro-site (15 pages) as real routes under `/ostende/*` inside the existing `savoia-nextjs` project, reusing existing components where their contract already fits and adding new ones only where the pattern doesn't exist yet (video hero, background-image hero band, carousel+description detail pages, split image/text blocks).

**Architecture:** A route group `app/(main)/` holds the 6 already-shipped parent-site routes under their own `Header`-bearing layout; `app/ostende/` is a sibling segment with its own `OstendeHeader`-bearing layout. Both share the root layout's `<html><body>` shell, `Footer`, and `WhatsAppFloat`. Ostende pages reuse `Footer`, `WhatsAppFloat`, `Carousel`, `PhotoRevealCard`, `RevealSection`, `ContactInfoBar` (with override props) as-is, plus 5 new components and one small backward-compatible extension to `GuestCounter`.

**Tech Stack:** Next.js (JavaScript, App Router), Tailwind CSS v4, Framer Motion, lucide-react — same stack as the existing project, no new dependencies.

**Spec:** `docs/superpowers/specs/2026-08-21-savoia-nextjs-ostende-design.md` (copied into the project in Task 1).

## Global Constraints

- Extends the existing project at `/Users/chiara/Desktop/savoia-nextjs` (git branch `main`) — no new repo, no worktree.
- JavaScript only, App Router only, icons via lucide-react only, Framer Motion only where the parent plan already established it (`Carousel`, any `Header`-family mobile menu, `RevealSection`) — no new Framer Motion usage beyond `OstendeHeader`'s mobile menu (mirroring `Header`).
- Route group `(main)` changes file locations, not URLs — `/`, `/nosotros`, `/hoteles`, `/contacto`, `/mendoza`, `/san-bernardo` must resolve exactly as before after Task 1.
- Ostende assets live under `public/img/ostende/...` (their own namespace, mirroring the source's own subfolder layout) — never mixed into the parent's `public/img/...`.
- Out of scope: the 4 orphaned draft Ostende pages (`categoria-standart.html`, `categoria-superior.html` with no accent, `contacto2.html`, `galeria-de-fotos.html`) and their PHP/JS backends; the unused Bootstrap/jQuery/datepicker/lightbox library files in `ostende/css/`, `ostende/js/`, `ostende/fonts/`; a working contact-form backend (same stub `alert()` pattern as the parent site); the broken `nosotros.html` link (dropped from Ostende's nav entirely).
- `/ostende/categoria-superior` is the route slug (de-accented) per explicit user decision; the page's own title/heading keeps "CATEGORÍA SUPERIOR" with the accent.
- `video-savoia.mov` (44MB) is copied as-is per explicit user decision (repo-size cost accepted).
- No automated test suite — verification is `npm run build` passing cleanly plus route-by-route `curl`/`grep` checks (no real browser in this environment, same method the parent plan's Task 14 used).
- Ostende's `ContactInfoBar` override values, used on every Ostende page: `locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"`, `locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"`, `phoneHref="tel:02254496600"`, `phoneText="(02254) 49-6600"` (email stays the default).

---

### Task 1: Route-group restructure (`(main)` route group + trim Header from root layout)

This is the highest-risk task in the plan — it touches already-shipped, already-reviewed files. Its own deliverable (all 6 existing routes still working, byte-identical content, just relocated) must be verified before any Ostende work begins.

**Files:**
- Modify: `app/layout.js` (remove `Header` import/render)
- Create: `app/(main)/layout.js`
- Move (via `git mv`, content unchanged): `app/page.js` → `app/(main)/page.js`; `app/nosotros/` → `app/(main)/nosotros/`; `app/hoteles/` → `app/(main)/hoteles/`; `app/contacto/` → `app/(main)/contacto/`; `app/mendoza/` → `app/(main)/mendoza/`; `app/san-bernardo/` → `app/(main)/san-bernardo/`

**Interfaces:**
- Produces: every later task assumes the 6 parent-site page files live under `app/(main)/...` and that `app/(main)/layout.js` is what renders `<Header />` for them — Task 22 (link updates) modifies `app/(main)/page.js` and `app/(main)/hoteles/page.js` at their new location.

- [ ] **Step 1: Move the 6 existing routes into the `(main)` route group**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
mkdir -p "app/(main)"
git mv app/page.js "app/(main)/page.js"
git mv app/nosotros "app/(main)/nosotros"
git mv app/hoteles "app/(main)/hoteles"
git mv app/contacto "app/(main)/contacto"
git mv app/mendoza "app/(main)/mendoza"
git mv app/san-bernardo "app/(main)/san-bernardo"
```

A route group (a folder name in parentheses) does not appear in the URL — `app/(main)/nosotros/page.js` still serves `/nosotros`, not `/(main)/nosotros`.

- [ ] **Step 2: Create `app/(main)/layout.js`**

```jsx
import Header from '@/components/Header';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
```

- [ ] **Step 3: Remove `Header` from the root `app/layout.js`**

Replace its contents with:

```jsx
import './globals.css';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Hoteles Savoia',
  description: 'Bienvenidos a hoteles savoia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans text-[#333]">
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
```

`Footer` and `WhatsAppFloat` stay in the root layout (identical on every route, parent and Ostende alike) — only `Header` moves down into `(main)/layout.js`, since Ostende needs a *different* header.

- [ ] **Step 4: Verify the build**

```bash
npm run build
```

Expected: clean build, and the route table still lists exactly `/`, `/_not-found`, `/contacto`, `/hoteles`, `/mendoza`, `/nosotros`, `/san-bernardo` (the route group must not appear as a URL segment).

- [ ] **Step 5: Verify all 6 routes still serve correctly**

```bash
npm run start &
sleep 3
for route in / /nosotros /hoteles /contacto /mendoza /san-bernardo; do
  echo "=== $route ==="
  curl -s "http://localhost:3000$route" | grep -o '<title>[^<]*</title>'
  curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3000$route"
done
curl -s http://localhost:3000/ | grep -c '<header'
curl -s http://localhost:3000/ | grep -c 'whatsapp_float\|wa.me'
kill %1
```

Expected: all 6 routes return `200`, each with its correct `<title>`; the home page's HTML contains exactly one `<header` element (not zero, not two) and exactly one WhatsApp float reference (confirms `Footer`/`WhatsAppFloat` weren't accidentally duplicated by being in both the root layout and `(main)/layout.js`).

- [ ] **Step 6: Copy the Ostende spec and this plan into the project, and commit**

```bash
mkdir -p docs/superpowers/specs docs/superpowers/plans
cp /private/tmp/claude-501/-Users-chiara-Desktop-Savoia/624764ef-1247-47e3-9366-23c1ccb71cbf/scratchpad/2026-08-21-savoia-nextjs-ostende-design.md docs/superpowers/specs/
cp /private/tmp/claude-501/-Users-chiara-Desktop-Savoia/624764ef-1247-47e3-9366-23c1ccb71cbf/scratchpad/2026-08-21-savoia-nextjs-ostende-plan.md docs/superpowers/plans/
git add -A
git commit -m "refactor: move parent-site routes into (main) route group for per-section headers"
```

---

### Task 2: `OstendeHeader` and `app/ostende/layout.js`

**Files:**
- Create: `components/OstendeHeader.jsx`
- Create: `app/ostende/layout.js`

**Interfaces:**
- Consumes: Tailwind tokens from the existing project (`bg-[#ece9e3]` hover, matches `Header`'s own inline hex), `lucide-react` `Menu`/`X`, `framer-motion`.
- Produces: `<OstendeHeader />` (no props) — every Ostende page task from Task 7 onward gets this for free via `app/ostende/layout.js`, they never import it directly.

- [ ] **Step 1: Create `components/OstendeHeader.jsx`**

```jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'INICIO' },
  { href: '/ostende/habitaciones', label: 'HABITACIONES' },
  { href: '/ostende/servicios', label: 'SERVICIOS' },
  { href: '/ostende/ubicacion', label: 'UBICACIÓN' },
  { href: '/ostende/contacto', label: 'CONTACTO' },
];

export default function OstendeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-5">
        <Link href="/ostende">
          <Image src="/img/ostende/logonuevo-savoia.jpg" alt="Hotel Savoia Ostende" width={140} height={80} />
        </Link>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

        <ul className="hidden md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-8 py-8 text-center transition-colors hover:bg-[#ece9e3] ${
                  pathname === link.href ? 'bg-[#ece9e3]' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed bottom-0 right-0 top-0 z-50 w-64 bg-white p-6 shadow-lg"
          >
            <button
              type="button"
              aria-label="Cerrar menú"
              className="absolute right-4 top-4"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <ul className="mt-12 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)} className="text-lg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

Note: `INICIO` intentionally links to `/` (the parent site's home), not `/ostende` — this matches the original Ostende site's own behavior (logo click stays on Ostende's home, the nav's INICIO item always goes back to the main Savoia site).

- [ ] **Step 2: Create `app/ostende/layout.js`**

```jsx
import OstendeHeader from '@/components/OstendeHeader';

export default function OstendeLayout({ children }) {
  return (
    <>
      <OstendeHeader />
      {children}
    </>
  );
}
```

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: clean build. There is no `/ostende` route yet (this layout has no sibling `page.js` in `app/ostende/` itself, only in descendant folders that later tasks create), so this only verifies the file compiles — full rendering is verified once Task 7 adds the first real Ostende page.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add OstendeHeader and app/ostende layout"
```

---

### Task 3: `HeroBand` and `VideoHero`

**Files:**
- Create: `components/HeroBand.jsx`
- Create: `components/VideoHero.jsx`

**Interfaces:**
- Produces: `<HeroBand imageSrc imageAlt title? />` (full-width background-image band, `title` renders an `<h1>` overlay only if provided) and `<VideoHero src />` (full-width autoplaying/muted/looping background video, no overlay content).

- [ ] **Step 1: Create `components/HeroBand.jsx`**

```jsx
import Image from 'next/image';

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

- [ ] **Step 2: Create `components/VideoHero.jsx`**

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

Note: the actual source file is `video-savoia.mov` (QuickTime container, copied as-is in Task 6). Browsers that can't decode it via a `type="video/mp4"` `<source>` tag will just show a blank video area — acceptable for this prototype (flagged again in Task 23's verification).

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: clean build (neither component is consumed by a page yet).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add HeroBand and VideoHero components"
```

---

### Task 4: `AmenityDetail` and `SplitContent`

**Files:**
- Create: `components/AmenityDetail.jsx`
- Create: `components/SplitContent.jsx`

**Interfaces:**
- Consumes: `Carousel({ slides })` from the existing project (Task 6 of the parent plan).
- Produces: `<AmenityDetail images title detailLines />` (`images` is `{src,alt}[]` passed straight to `Carousel`; `detailLines` is `{label,text}[]`, rendered as `<span class="font-bold">{label}: </span>{text}` paragraphs) and `<SplitContent imageSrc imageAlt imageSide? title subtitle? paragraphs />` (`imageSide` is `'left'` (default) or `'right'`; `paragraphs` is `string[]`).

- [ ] **Step 1: Create `components/AmenityDetail.jsx`**

```jsx
import Carousel from '@/components/Carousel';

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

Note: `Carousel` was built for a full-width hero (fixed `h-[400px] md:h-[650px]`); reused here inside a half-width column it will look tall-and-narrow rather than perfectly proportioned. This is an accepted cosmetic trade-off of reuse, not a bug to fix — `Carousel`'s height is relied on as-is by the parent site's home page, so it isn't modified here.

- [ ] **Step 2: Create `components/SplitContent.jsx`**

```jsx
import Image from 'next/image';

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
      {paragraphs.map((p) => (
        <p key={p.slice(0, 20)}>{p}</p>
      ))}
    </div>
  );
  return (
    <section className="flex flex-col md:flex-row">
      {imageSide === 'left' ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </section>
  );
}
```

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add AmenityDetail and SplitContent components"
```

---

### Task 5: Extend `GuestCounter` with configurable field names

**Files:**
- Modify: `components/GuestCounter.jsx`

**Interfaces:**
- Produces: `<GuestCounter adultsName? childrenName? />` — both optional, defaulting to `"adults"`/`"children"` (unchanged behavior for the parent site's existing `<GuestCounter />` call at `app/(main)/contacto/page.js`). Task 11 calls `<GuestCounter adultsName="adultos" childrenName="menores" />`.

- [ ] **Step 1: Change the component signature and the two hidden inputs**

In `components/GuestCounter.jsx`, change:

```jsx
export default function GuestCounter() {
```

to:

```jsx
export default function GuestCounter({ adultsName = 'adults', childrenName = 'children' }) {
```

And change:

```jsx
      <input type="hidden" name="adults" value={adults} />
      <input type="hidden" name="children" value={children} />
```

to:

```jsx
      <input type="hidden" name={adultsName} value={adults} />
      <input type="hidden" name={childrenName} value={children} />
```

Nothing else in the file changes — the `Stepper` sub-component, labels, and min-floor logic stay exactly as they are.

- [ ] **Step 2: Build check**

```bash
npm run build
```

Expected: clean build. `app/(main)/contacto/page.js`'s existing `<GuestCounter />` call is unaffected (uses the new defaults, which equal its old hardcoded behavior).

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: make GuestCounter field names configurable"
```

---

### Task 6: Copy Ostende image and video assets

**Files:**
- Create: `public/img/ostende/` (and subfolders, mirroring the source layout)

**Interfaces:**
- Produces: every `/img/ostende/...` path referenced by Tasks 7–21.

- [ ] **Step 1: Create the folder structure and copy files**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
mkdir -p public/img/ostende/home public/img/ostende/habitaciones public/img/ostende/servicios \
  public/img/ostende/habitaciones2/piso4 public/img/ostende/habitaciones2/piso2 \
  public/img/ostende/categoria-superior public/img/ostende/servicios2/bar5to public/img/ostende/servicios2/barPB \
  public/img/ostende/gastronomia public/img/ostende/cena public/img/ostende/desayuno \
  public/img/ostende/gastronomia2/buffet public/img/ostende/servicios2/Gimnasio public/img/ostende/servicios2/sauna-masajes \
  public/img/ostende/servicios2/salaJuegos public/img/ostende/pileta-exteriores

SRC=/Users/chiara/Desktop/Savoia/ostende/img

cp "$SRC/logonuevo-savoia.jpg" public/img/ostende/

cp "$SRC/home/video-savoia.mov" public/img/ostende/home/
cp "$SRC/home/lobby-ostende.webp" public/img/ostende/home/
cp "$SRC/home/collage-gastronomia.jpg" public/img/ostende/home/
cp "$SRC/home/mar-ostende.jpeg" public/img/ostende/home/
cp "$SRC/home/cocina-home.jpg" public/img/ostende/home/
cp "$SRC/home/habitacion-superior.webp" public/img/ostende/home/
cp "$SRC/home/habitacion-ejecutiva.webp" public/img/ostende/home/
cp "$SRC/home/habitacion-estandar.webp" public/img/ostende/home/

cp "$SRC/foto-diario.jpg" public/img/ostende/
cp "$SRC/pile-home.jpg" public/img/ostende/

cp "$SRC/habitaciones/imagen-habitacion-opacidad.png" public/img/ostende/habitaciones/
cp "$SRC/habitaciones/logos.png" public/img/ostende/habitaciones/

cp "$SRC/servicios/cocina-ostende.jpg" public/img/ostende/servicios/
cp "$SRC/servicios/bar-abajo.jpg" public/img/ostende/servicios/
cp "$SRC/servicios/bar-piso5.jpg" public/img/ostende/servicios/
cp "$SRC/servicios/pileta-ostende.jpg" public/img/ostende/servicios/
cp "$SRC/servicios/gimnasio.jpg" public/img/ostende/servicios/
cp "$SRC/servicios/saladejuegos.jpg" public/img/ostende/servicios/

cp "$SRC/habitaciones2/piso4/p404.jpg" public/img/ostende/habitaciones2/piso4/
cp "$SRC/habitaciones2/piso4/ejecutiva2.jpg" public/img/ostende/habitaciones2/piso4/
cp "$SRC/habitaciones2/piso4/p407.jpg" public/img/ostende/habitaciones2/piso4/
cp "$SRC/habitaciones2/piso2/foto1-standard.jpg" public/img/ostende/habitaciones2/piso2/
cp "$SRC/habitaciones2/piso2/foto2-standard.jpg" public/img/ostende/habitaciones2/piso2/
cp "$SRC/habitaciones2/piso2/standard3.jpg" public/img/ostende/habitaciones2/piso2/

cp "$SRC/categoria-superior/foto1-superior.jpg" public/img/ostende/categoria-superior/
cp "$SRC/categoria-superior/foto2-superior.jpg" public/img/ostende/categoria-superior/
cp "$SRC/categoria-superior/foto3-superior.jpg" public/img/ostende/categoria-superior/

cp "$SRC/servicios2/bar5to/saintjean-portada.jpg" public/img/ostende/servicios2/bar5to/
cp "$SRC/servicios2/bar5to/saintjean1.jpg" public/img/ostende/servicios2/bar5to/
cp "$SRC/servicios2/bar5to/saintjean2.jpg" public/img/ostende/servicios2/bar5to/
cp "$SRC/servicios2/bar5to/saintjean3.jpg" public/img/ostende/servicios2/bar5to/

cp "$SRC/servicios2/barPB/bar-portada.jpg" public/img/ostende/servicios2/barPB/
cp "$SRC/servicios2/barPB/bar1.jpg" public/img/ostende/servicios2/barPB/
cp "$SRC/servicios2/barPB/bar2.jpg" public/img/ostende/servicios2/barPB/
cp "$SRC/servicios2/barPB/bar3.jpg" public/img/ostende/servicios2/barPB/

cp "$SRC/gastronomia/portada-gastronomia.jpeg" public/img/ostende/gastronomia/

cp "$SRC/cena/cena1.jpg" public/img/ostende/cena/

cp "$SRC/desayuno/desay515.jpg" public/img/ostende/desayuno/
cp "$SRC/desayuno/desayuno1.jpg" public/img/ostende/desayuno/
cp "$SRC/desayuno/desayuno2.jpg" public/img/ostende/desayuno/

cp "$SRC/gastronomia2/buffet/cena2.jpg" public/img/ostende/gastronomia2/buffet/
cp "$SRC/gastronomia2/buffet/cena3.jpg" public/img/ostende/gastronomia2/buffet/

cp "$SRC/servicios2/Gimnasio/gym1.jpg" public/img/ostende/servicios2/Gimnasio/
cp "$SRC/servicios2/sauna-masajes/sauna2.jpg" public/img/ostende/servicios2/sauna-masajes/
cp "$SRC/servicios2/sauna-masajes/sauna3.jpg" public/img/ostende/servicios2/sauna-masajes/

cp "$SRC/servicios2/salaJuegos/miniclub-portada.jpg" public/img/ostende/servicios2/salaJuegos/
cp "$SRC/servicios2/salaJuegos/miniclub1.jpg" public/img/ostende/servicios2/salaJuegos/
cp "$SRC/servicios2/salaJuegos/miniclub2.jpg" public/img/ostende/servicios2/salaJuegos/

cp "$SRC/pileta-exteriores/pileta-portada.jpg" public/img/ostende/pileta-exteriores/
cp "$SRC/pileta-exteriores/pileta1.jpg" public/img/ostende/pileta-exteriores/
cp "$SRC/pileta-exteriores/pileta3.jpg" public/img/ostende/pileta-exteriores/
cp "$SRC/pileta-exteriores/pileta4.jpg" public/img/ostende/pileta-exteriores/
```

Deliberately excluded (confirmed dead/unused — see spec's Assets section): `logo-png.png`, `savoia-logo2.jpeg`, `habitaciones/suite.jpg` (only ever referenced inside HTML comments), `foto-blanco.png` (replaced by reusing the `home/habitacion-*.webp` images already copied above), `icon.jpg` (the project already has its own favicon), the entire `css/`/`js/`/`fonts/` library folders, and `servicios/portada-servicios.jpg` (its CSS rule `#showcase-servicio` is never referenced by any live page's markup — confirmed `servicios.html` has no showcase element at all).

- [ ] **Step 2: Verify the file count and spot-check the video**

```bash
find public/img/ostende -type f | wc -l
```

Expected: `53` (52 images/logo + 1 video).

```bash
file public/img/ostende/home/video-savoia.mov
ls -lh public/img/ostende/home/video-savoia.mov
```

Expected: a QuickTime/MP4 movie file, ~44MB.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: copy Ostende image and video assets into public/img/ostende"
```

---

### Task 7: `/ostende` (Ostende home page)

**Files:**
- Create: `app/ostende/page.js`

**Interfaces:**
- Consumes: `VideoHero({ src })`, `PhotoRevealCard({ src, alt, headline, infoLines, href })`, `SplitContent({ imageSrc, imageAlt, imageSide, title, subtitle, paragraphs })`, `ContactInfoBar({ locationHref, locationText, phoneHref, phoneText })`, `RevealSection({ children, className })`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/index.html`. This is the first real page under `app/ostende/`, so it also exercises `app/ostende/layout.js` (Task 2) for the first time — a key integration check.

- [ ] **Step 1: Create `app/ostende/page.js`**

```jsx
import Image from 'next/image';
import VideoHero from '@/components/VideoHero';
import PhotoRevealCard from '@/components/PhotoRevealCard';
import SplitContent from '@/components/SplitContent';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Bienvenidos' };

const HIGHLIGHTS = [
  {
    src: '/img/ostende/home/mar-ostende.jpeg',
    alt: 'A metros de la playa',
    headline: 'A METROS DE LA PLAYA',
    infoLines: ['Ubicados en primera línea de playa con vistas al mar.'],
  },
  {
    src: '/img/ostende/pile-home.jpg',
    alt: 'Piscina climatizada',
    headline: 'PISCINA CLIMATIZADA',
    infoLines: [
      'Piscina exterior climatizada con sector especial para niños junto a nuestro exclusivo bar de piscina. Solarium, sauna y gimnasio.',
    ],
  },
  {
    src: '/img/ostende/home/cocina-home.jpg',
    alt: 'Gastronomía Savoia',
    headline: 'GASTRONOMÍA SAVOIA',
    infoLines: [
      'Una propuesta gastronómica única, todas elaboradas en el hotel. Un exquisito desayuno BUFFET estilo americano y cenas imperdibles.',
    ],
  },
];

const ROOM_CATEGORIES = [
  { src: '/img/ostende/home/habitacion-superior.webp', alt: 'Categoría Superior', headline: 'CATEGORÍA SUPERIOR', href: '/ostende/categoria-superior' },
  { src: '/img/ostende/home/habitacion-ejecutiva.webp', alt: 'Categoría Ejecutiva', headline: 'CATEGORÍA EJECUTIVA', href: '/ostende/categoria-ejecutiva' },
  { src: '/img/ostende/home/habitacion-estandar.webp', alt: 'Categoría Estandar', headline: 'CATEGORÍA ESTANDAR', href: '/ostende/categoria-standard' },
];

export default function OstendeHomePage() {
  return (
    <main>
      <VideoHero src="/img/ostende/home/video-savoia.mov" />

      <h1 className="mt-6 text-center text-2xl font-medium md:text-4xl">VIVÍ UNA EXPERIENCIA ÚNICA</h1>

      <RevealSection className="flex flex-wrap justify-center py-6">
        {HIGHLIGHTS.map((card) => (
          <PhotoRevealCard key={card.src} {...card} />
        ))}
      </RevealSection>

      <div className="relative mx-auto my-6 h-[300px] w-full max-w-[1200px] md:h-[550px]">
        <Image src="/img/ostende/home/lobby-ostende.webp" alt="Lobby Hotel Savoia Ostende" fill className="object-cover" />
      </div>

      <h3 className="text-center text-xl">DESCANSÁ Y RENOVÁ TUS ENERGÍAS CON NOSOTROS</h3>
      <h2 className="mb-6 text-center text-2xl font-medium md:text-4xl">HABITACIONES</h2>

      <RevealSection className="flex flex-wrap justify-center py-6">
        {ROOM_CATEGORIES.map((card) => (
          <PhotoRevealCard key={card.src} {...card} />
        ))}
      </RevealSection>

      <SplitContent
        imageSrc="/img/ostende/foto-diario.jpg"
        imageAlt="Comida"
        imageSide="left"
        title="EXPERIENCIA SAVOIA"
        subtitle="Descubrí todo lo que tenemos para ofrecerte"
        paragraphs={[
          'Ubicados frente al mar, le ofrecemos la combinación perfecta de hotelería con máximo confort y una exquisita gastronomía gourmet.',
          'Disponemos habitaciones, suites y departamentos equipados para tus vacaciones y escapadas. En el Hotel Savoia encontrará un cordial ambiente familiar, tranquilidad, distensión y toda una organización dispuesta a asesorarlo para que sus días de vacaciones sean inolvidables.',
        ]}
      />

      <SplitContent
        imageSrc="/img/ostende/home/collage-gastronomia.jpg"
        imageAlt="Comida"
        imageSide="right"
        title="GASTRONOMÍA"
        subtitle="Desayuno, brunch y cena frente al mar"
        paragraphs={[
          'Durante las mañanas, podrá disfrutar de un exquisito desayuno BUFFET estilo americano. Un almuerzo a la carta en el bar de piscina o en el de planta baja. Por la noche, podra deleitarse con una propuesta única: variedad de platos disponibles en el buffet Froid, minutas elaboradas por el chef ejecutivo y un menú temático por noche.',
        ]}
      />

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar (C.P. 7167)"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende | grep -o '<title>[^<]*</title>'
curl -s http://localhost:3000/ostende | grep -c 'video-savoia.mov'
curl -s http://localhost:3000/ostende | grep -o 'A METROS DE LA PLAYA\|PISCINA CLIMATIZADA\|CATEGORÍA SUPERIOR\|EXPERIENCIA SAVOIA'
kill %1
```

Expected: 200 response, the video source path present, all the highlighted headings present.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende home page"
```

---

### Task 8: `/ostende/habitaciones`

**Files:**
- Create: `app/ostende/habitaciones/page.js`

**Interfaces:**
- Consumes: `HeroBand`, `PhotoRevealCard`, `ContactInfoBar`, `RevealSection`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/habitaciones.html`. Note: the original page's 3 category tiles use a generic blank placeholder image (`foto-blanco.png`) — per the spec's Assets decision, this build substitutes the real room photos already copied in Task 6 (`home/habitacion-superior.webp` etc.) instead.

- [ ] **Step 1: Create `app/ostende/habitaciones/page.js`**

```jsx
import HeroBand from '@/components/HeroBand';
import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };

const CATEGORIES = [
  { src: '/img/ostende/home/habitacion-superior.webp', alt: 'Categoría Superior', headline: 'SUPERIOR', infoLines: ['Ver más'], href: '/ostende/categoria-superior' },
  { src: '/img/ostende/home/habitacion-ejecutiva.webp', alt: 'Categoría Ejecutiva', headline: 'EJECUTIVA', infoLines: ['Ver más'], href: '/ostende/categoria-ejecutiva' },
  { src: '/img/ostende/home/habitacion-estandar.webp', alt: 'Categoría Estandar', headline: 'ESTANDAR', infoLines: ['Ver más'], href: '/ostende/categoria-standard' },
];

export default function OstendeHabitacionesPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/habitaciones/imagen-habitacion-opacidad.png" imageAlt="Habitaciones" title="HABITACIONES" />

      <RevealSection className="flex flex-wrap justify-center py-10">
        {CATEGORIES.map((card) => (
          <PhotoRevealCard key={card.src} {...card} />
        ))}
      </RevealSection>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/habitaciones | grep -o 'HABITACIONES\|SUPERIOR\|EJECUTIVA\|ESTANDAR'
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/ostende/habitaciones
kill %1
```

Expected: 200, all four labels present.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende habitaciones page"
```

---

### Task 9: `/ostende/servicios`

**Files:**
- Create: `app/ostende/servicios/page.js`

**Interfaces:**
- Consumes: `PhotoRevealCard`, `ContactInfoBar`, `RevealSection`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/servicios.html`.

- [ ] **Step 1: Create `app/ostende/servicios/page.js`**

```jsx
import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Servicios' };

const CARDS = [
  { src: '/img/ostende/servicios/cocina-ostende.jpg', alt: 'Gastronomía Savoia', headline: 'GASTRONOMÍA SAVOIA', infoLines: ['Ver más'], href: '/ostende/gastronomia-savoia' },
  { src: '/img/ostende/servicios/bar-abajo.jpg', alt: 'Bar Woodstock', headline: 'BAR WOODSTOCK', infoLines: ['Ver más'], href: '/ostende/bar-woodstock' },
  { src: '/img/ostende/servicios/bar-piso5.jpg', alt: 'Bar Saint Jean', headline: 'BAR SAINT JEAN', infoLines: ['Ver más'], href: '/ostende/bar-saintjean' },
  { src: '/img/ostende/servicios/pileta-ostende.jpg', alt: 'Piscina climatizada', headline: 'PISCINA CLIMATIZADA', infoLines: ['Ver más'], href: '/ostende/pileta' },
  { src: '/img/ostende/servicios/gimnasio.jpg', alt: 'Gimnasio y sauna', headline: 'GIMNASIO Y SAUNA', infoLines: ['Ver más'], href: '/ostende/gym-sauna' },
  { src: '/img/ostende/servicios/saladejuegos.jpg', alt: 'Mini Club', headline: 'MINI CLUB', infoLines: ['Ver más'], href: '/ostende/miniclub' },
];

export default function OstendeServiciosPage() {
  return (
    <main>
      <h1 className="mt-8 text-center text-3xl font-medium">SERVICIOS</h1>

      <RevealSection className="flex flex-wrap justify-center py-10">
        {CARDS.map((card) => (
          <PhotoRevealCard key={card.src} {...card} />
        ))}
      </RevealSection>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/servicios | grep -o 'GASTRONOMÍA SAVOIA\|BAR WOODSTOCK\|BAR SAINT JEAN\|PISCINA CLIMATIZADA\|GIMNASIO Y SAUNA\|MINI CLUB'
kill %1
```

Expected: all 6 labels present.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende servicios page"
```

---

### Task 10: `/ostende/ubicacion`

**Files:**
- Create: `app/ostende/ubicacion/page.js`

**Interfaces:**
- Consumes: `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/ubicacion.html`.

- [ ] **Step 1: Create `app/ostende/ubicacion/page.js`**

```jsx
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Ubicación' };

export default function OstendeUbicacionPage() {
  return (
    <main>
      <h1 className="mt-8 text-center text-3xl font-medium">UBICACIÓN</h1>

      <div className="flex justify-center py-8">
        <iframe
          title="Ubicación Hotel Savoia Ostende"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12723.625231051108!2d-56.8684199!3d-37.131144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cf89da86d41%3A0x5b77ff8c0445755d!2shotel%20savoia!5e0!3m2!1ses!2sar!4v1708469455151!5m2!1ses!2sar"
          width="1000"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/ubicacion | grep -o 'UBICACIÓN\|google.com/maps/embed'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende ubicacion page"
```

---

### Task 11: `/ostende/contacto`

**Files:**
- Create: `app/ostende/contacto/page.js`
- Create: `app/ostende/contacto/layout.js`

**Interfaces:**
- Consumes: `GuestCounter({ adultsName, childrenName })` (Task 5), `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/contacto.html`. Unlike the parent site's `/contacto`, this form has no hotel `<select>` (the original has none — Ostende is a single-hotel site) and uses Spanish field names (`nombre`, `mensaje`, `adultos`, `menores`).

- [ ] **Step 1: Create `app/ostende/contacto/page.js`**

```jsx
'use client';

import GuestCounter from '@/components/GuestCounter';
import ContactInfoBar from '@/components/ContactInfoBar';

export default function OstendeContactoPage() {
  return (
    <main>
      <section className="bg-savoia-light py-10 text-center">
        <div className="mx-auto max-w-[1100px] px-5">
          <h1 className="text-3xl font-medium">CONTACTO</h1>
          <h3 className="text-xl">¡Contactanos y viví una experiencia inolvidable!</h3>

          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Gracias por tu mensaje. Te contactaremos a la brevedad.');
              e.target.reset();
            }}
          >
            <div className="mb-5">
              <input type="text" name="nombre" placeholder="Nombre y apellido" required className="w-4/5 border border-[#ddd] p-3" />
            </div>
            <div className="mb-5">
              <input type="email" name="email" placeholder="Email" required className="w-4/5 border border-[#ddd] p-3" />
            </div>

            <div className="mx-auto mb-5 flex w-4/5 flex-wrap justify-between gap-5">
              <GuestCounter adultsName="adultos" childrenName="menores" />
              <div className="flex-1">
                <label htmlFor="fecha-entrada" className="mb-1 block text-left">
                  Fecha de entrada
                </label>
                <input type="date" id="fecha-entrada" name="fecha-entrada" required className="w-full border border-[#ddd] p-3" />
              </div>
              <div className="flex-1">
                <label htmlFor="fecha-salida" className="mb-1 block text-left">
                  Fecha de salida
                </label>
                <input type="date" id="fecha-salida" name="fecha-salida" required className="w-full border border-[#ddd] p-3" />
              </div>
            </div>

            <div className="mb-5">
              <textarea name="mensaje" placeholder="Mensaje" className="h-[200px] w-4/5 border border-[#ddd] p-3" />
            </div>

            <button
              type="submit"
              className="bg-savoia-dark px-5 py-3 text-[#f4f4f4] transition-colors hover:bg-[#d4d2d2] hover:text-[#00244d]"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Create `app/ostende/contacto/layout.js`**

The page is a Client Component (inline `onSubmit`), so — same as the parent site's `/contacto` — the per-route `<title>` has to come from a sibling Server Component layout:

```jsx
export const metadata = { title: 'Hoteles Savoia | Contacto' };

export default function OstendeContactoLayout({ children }) {
  return children;
}
```

- [ ] **Step 3: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/contacto | grep -o '<title>[^<]*</title>'
curl -s http://localhost:3000/ostende/contacto | grep -o 'name="nombre"\|name="adultos"\|name="menores"\|name="mensaje"\|name="fecha-entrada"\|name="fecha-salida"'
kill %1
```

Expected: title "Hoteles Savoia | Contacto", all six field-name markers present (no `name="hotel"` — there is no hotel select on this page).

- [ ] **Step 4: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende contacto page"
```

---

### Task 12: `/ostende/categoria-ejecutiva`

**Files:**
- Create: `app/ostende/categoria-ejecutiva/page.js`

**Interfaces:**
- Consumes: `HeroBand`, `AmenityDetail({ images, title, detailLines })`, `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/categoria-ejecutiva.html`.

- [ ] **Step 1: Create `app/ostende/categoria-ejecutiva/page.js`**

```jsx
import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };

const IMAGES = [
  { src: '/img/ostende/habitaciones2/piso4/p404.jpg', alt: 'Categoría Ejecutiva' },
  { src: '/img/ostende/habitaciones2/piso4/ejecutiva2.jpg', alt: 'Categoría Ejecutiva' },
  { src: '/img/ostende/habitaciones2/piso4/p407.jpg', alt: 'Categoría Ejecutiva' },
];

const DETAILS = [
  {
    label: 'Camas',
    text: 'Habitaciones dobles que se pueden colocar camas adicionales para convertirlas en triples; contamos con habitaciónes comunicadas para 4/5 personas',
  },
  {
    label: 'Tamaño',
    text: 'Las habitaciones en Categoría ejecutiva cuentan con una superficie de 20 m2 y una fabulosa vista al Mar.',
  },
  {
    label: 'Detalles',
    text: 'Las mismas están equipadas con cerraduras magnéticas (Hotel Locking System), confortables camas tamaño Queen size (matrimonial) o Twins de 1 plaza, Frigobar, LCD 32 pulgadas, aire acondicionado, ventilador de techo, secador de cabello, caja de seguridad y baño con bañera.',
  },
];

export default function CategoriaEjecutivaPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/habitaciones/imagen-habitacion-opacidad.png" imageAlt="Categoría Ejecutiva" title="CATEGORÍA EJECUTIVA" />
      <AmenityDetail images={IMAGES} title="DESCRIPCIÓN" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/categoria-ejecutiva | grep -o 'CATEGORÍA EJECUTIVA\|DESCRIPCIÓN\|Queen size'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende categoria-ejecutiva page"
```

---

### Task 13: `/ostende/categoria-standard`

**Files:**
- Create: `app/ostende/categoria-standard/page.js`

**Interfaces:**
- Consumes: `HeroBand`, `AmenityDetail`, `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/categoria-standard.html`.

- [ ] **Step 1: Create `app/ostende/categoria-standard/page.js`**

```jsx
import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };

const IMAGES = [
  { src: '/img/ostende/habitaciones2/piso2/foto1-standard.jpg', alt: 'Categoría Estandar' },
  { src: '/img/ostende/habitaciones2/piso2/foto2-standard.jpg', alt: 'Categoría Estandar' },
  { src: '/img/ostende/habitaciones2/piso2/standard3.jpg', alt: 'Categoría Estandar' },
];

const DETAILS = [
  {
    label: 'Camas',
    text: 'Habitaciones dobles que se pueden colocar camas adicionales para convertirlas en triples; contamos con habitaciónes comunicadas para 4/5 personas',
  },
  { label: 'Tamaño', text: 'Las habitaciones doble Standard poseen una superficie de 20 m2.' },
  {
    label: 'Detalles',
    text: 'Dichas habitaciones disponen de camas Sommier, Frigobar, LCD 32 pulgadas, aire acondicionado, ventilador de techo, secador de pelo, caja de seguridad, baño con ducha.',
  },
];

export default function CategoriaStandardPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/habitaciones/imagen-habitacion-opacidad.png" imageAlt="Categoría Estandar" title="CATEGORÍA ESTANDAR" />
      <AmenityDetail images={IMAGES} title="DESCRIPCIÓN" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/categoria-standard | grep -o 'CATEGORÍA ESTANDAR\|Sommier'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende categoria-standard page"
```

---

### Task 14: `/ostende/categoria-superior`

**Files:**
- Create: `app/ostende/categoria-superior/page.js`

**Interfaces:**
- Consumes: `HeroBand`, `AmenityDetail`, `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/categoría-superior.html` (note: source *filename* has the accent; the Next.js *route* is de-accented per the Global Constraints — the page's own title/heading keeps "CATEGORÍA SUPERIOR" with the accent).

- [ ] **Step 1: Create `app/ostende/categoria-superior/page.js`**

```jsx
import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };

const IMAGES = [
  { src: '/img/ostende/categoria-superior/foto1-superior.jpg', alt: 'Categoría Superior' },
  { src: '/img/ostende/categoria-superior/foto2-superior.jpg', alt: 'Categoría Superior' },
  { src: '/img/ostende/categoria-superior/foto3-superior.jpg', alt: 'Categoría Superior' },
];

const DETAILS = [
  {
    label: 'Camas',
    text: 'Habitaciones dobles que se pueden colocar camas adicionales para convertirlas en triples; contamos con habitaciónes comunicadas para 4/5 personas',
  },
  {
    label: 'Tamaño',
    text: 'Las habitaciones doble superior poseen un amplio espacio de 28 y 30 m2 aproximadamente, y cuentan con una vista franca e imponente al Mar y al entorno natural.',
  },
  {
    label: 'Detalles',
    text: 'Se encuentran altamente equipadas con cerraduras magnéticas (Hotel Locking System), camas tamaño King size, Frigobar, LCD 42 pulgadas, aire acondicionado, secador de cabello, caja de seguridad, y un completo cuarto de baño con bañera.',
  },
];

export default function CategoriaSuperiorPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/habitaciones/imagen-habitacion-opacidad.png" imageAlt="Categoría Superior" title="CATEGORÍA SUPERIOR" />
      <AmenityDetail images={IMAGES} title="DESCRIPCIÓN" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/categoria-superior | grep -o 'CATEGORÍA SUPERIOR\|King size'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende categoria-superior page"
```

---

### Task 15: `/ostende/bar-saintjean`

**Files:**
- Create: `app/ostende/bar-saintjean/page.js`

**Interfaces:**
- Consumes: `HeroBand`, `AmenityDetail`, `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/bar-saintjean.html`.

- [ ] **Step 1: Create `app/ostende/bar-saintjean/page.js`**

```jsx
import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Bar Saint jean' };

const IMAGES = [
  { src: '/img/ostende/servicios2/bar5to/saintjean1.jpg', alt: 'Bar Saint Jean' },
  { src: '/img/ostende/servicios2/bar5to/saintjean2.jpg', alt: 'Bar Saint Jean' },
  { src: '/img/ostende/servicios2/bar5to/saintjean3.jpg', alt: 'Bar Saint Jean' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 18:00 a 00:00hs' },
  { label: 'Información', text: 'Menores de 12 años deben estar acompañados por un adulto responsable.' },
  { label: 'Detalles', text: 'Infusiones y coctelería.' },
  { label: 'Ubicación', text: 'Se encuentra ubicado en el 5to piso con una hermosa vista al mar y muelle de pinamar.' },
];

export default function BarSaintJeanPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/servicios2/bar5to/saintjean-portada.jpg" imageAlt="Bar Saint Jean" />
      <AmenityDetail images={IMAGES} title="BAR SAINT JEAN" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

Note: no `title` prop on `HeroBand` — the original's `<h1>` for this page is HTML-commented-out (never shown).

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/bar-saintjean | grep -o 'BAR SAINT JEAN\|Infusiones y coctelería'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende bar-saintjean page"
```

---

### Task 16: `/ostende/bar-woodstock`

**Files:**
- Create: `app/ostende/bar-woodstock/page.js`

**Interfaces:**
- Consumes: `HeroBand`, `AmenityDetail`, `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/bar-woodstock.html`.

- [ ] **Step 1: Create `app/ostende/bar-woodstock/page.js`**

```jsx
import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Bar Woodstock' };

const IMAGES = [
  { src: '/img/ostende/servicios2/barPB/bar1.jpg', alt: 'Bar Woodstock' },
  { src: '/img/ostende/servicios2/barPB/bar2.jpg', alt: 'Bar Woodstock' },
  { src: '/img/ostende/servicios2/barPB/bar3.jpg', alt: 'Bar Woodstock' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 10:00 a 00:00hs' },
  { label: 'Información', text: 'Menores de 12 años deben estar acompañados por un adulto responsable.' },
  { label: 'Detalles', text: 'Comida y coctelería.' },
  { label: 'Actividades recreativas', text: 'Karaoke, bingo, bingo musical, entre otras.' },
];

export default function BarWoodstockPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/servicios2/barPB/bar-portada.jpg" imageAlt="Bar Woodstock" />
      <AmenityDetail images={IMAGES} title="BAR WOODSTOCK" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/bar-woodstock | grep -o 'BAR WOODSTOCK\|Karaoke'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende bar-woodstock page"
```

---

### Task 17: `/ostende/gastronomia-savoia`

**Files:**
- Create: `app/ostende/gastronomia-savoia/page.js`

**Interfaces:**
- Consumes: `AmenityDetail` (twice), `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/gastronomia-savoia.html`. No `HeroBand` — the original's `#showcase9` has no `background-image` rule anywhere in `ostende/css/style.css` (confirmed by direct inspection), so this page's hero band is genuinely blank in the source; skip `HeroBand` entirely rather than inventing a background. This page has two stacked "detail" sections (Desayuno Savoia, Cena Savoia), so `AmenityDetail` is used twice.

- [ ] **Step 1: Create `app/ostende/gastronomia-savoia/page.js`**

```jsx
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Gastronomía' };

const DESAYUNO_IMAGES = [
  { src: '/img/ostende/desayuno/desayuno1.jpg', alt: 'Desayuno Savoia' },
  { src: '/img/ostende/desayuno/desayuno2.jpg', alt: 'Desayuno Savoia' },
  { src: '/img/ostende/desayuno/desay515.jpg', alt: 'Desayuno Savoia' },
];

const DESAYUNO_DETAILS = [
  { label: 'Horarios', text: 'De 8:00 a 11:00hs' },
  { label: 'Información', text: 'Menores deben estar acompañados por un adulto responsable.' },
  { label: 'Servicio', text: 'Durante las mañanas, podrá disfrutar de un exquisito desayuno BUFFET estilo americano.' },
  { label: 'Importante', text: 'Contamos con alimentos aptos celíacos avisar en recepción y a la hora de realizar la reserva.' },
];

const CENA_IMAGES = [
  { src: '/img/ostende/cena/cena1.jpg', alt: 'Cena Savoia' },
  { src: '/img/ostende/gastronomia2/buffet/cena2.jpg', alt: 'Cena Savoia' },
  { src: '/img/ostende/gastronomia2/buffet/cena3.jpg', alt: 'Cena Savoia' },
];

const CENA_DETAILS = [
  { label: 'Horarios', text: 'De 20:30 a 22:30hs' },
  {
    label: 'Servicio',
    text: 'Todas las noches nuestro chef ejecutivo elabora distintas variedades de platos calientes servidas a la minuta para lograr el verdadero sabor de la comida hogareña. Además de ello se sirven menús temáticos como ser: La noche Mexicana con tacos y nachos · La noche Española con su tradicional Paella Savoia · La noche Oriental con variedad de Sushi · La noche Argentina con la Pata de ternera fileteada por el propio chef en el salón · La noche Italiana con su incomparable festival de pastas',
  },
  { label: 'Costo adicional', text: 'Consultar acerca de este servicio antes de reservar ya que es un servicio adicional.' },
  { label: 'Importante', text: 'Contamos con alimentos aptos celíacos avisar en recepción y a la hora de realizar la reserva.' },
];

export default function GastronomiaSavoiaPage() {
  return (
    <main>
      <AmenityDetail images={DESAYUNO_IMAGES} title="DESAYUNO SAVOIA" detailLines={DESAYUNO_DETAILS} />
      <AmenityDetail images={CENA_IMAGES} title="CENA SAVOIA" detailLines={CENA_DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/gastronomia-savoia | grep -o 'DESAYUNO SAVOIA\|CENA SAVOIA\|noche Mexicana'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende gastronomia-savoia page"
```

---

### Task 18: `/ostende/gastronomia`

**Files:**
- Create: `app/ostende/gastronomia/page.js`

**Interfaces:**
- Consumes: `HeroBand`, `ContactInfoBar`.
- Produces: a page-local `FlipCard` helper (not exported, not a shared component — used only on this one page, which is the only page in the whole site with this hover-flip pattern).

Content source: `/Users/chiara/Desktop/Savoia/ostende/gastronomia.html`. This page is structurally different from the "detail" pages: it's an overview with hover-flip informational cards (Desayuno/Almuerzo/Cena, then Bar Woodstock/Bar Saint Jean), not a carousel. Two of the five cards' "back" content in the source is literally the placeholder text `"B"` (a content gap in the original site itself, ported verbatim rather than invented) — only the Cena card and the two bar cards' real link targets exist elsewhere (`/ostende/gastronomia-savoia`, `/ostende/bar-woodstock`, `/ostende/bar-saintjean`), but the original page's cards themselves carry no `href` at all, so none are ported as links here either.

- [ ] **Step 1: Create `app/ostende/gastronomia/page.js`**

```jsx
import Image from 'next/image';
import HeroBand from '@/components/HeroBand';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Gastronomía' };

const CENA_TEXT =
  'Nuestras cenas se caracterizan por su amplia variedad de platos disponibles en el Buffet Froid. Todas las noches nuestro chef ejecutivo elabora distintas variedades de platos calientes servidas a la minuta para lograr el verdadero sabor de la comida hogareña. Además de ello se sirven menús temáticos como ser: La noche Mexicana con tacos y nachos · La noche Española con su tradicional Paella Savoia · La noche Oriental con variedad de Sushi · La noche Argentina con la Pata de ternera fileteada por el propio chef en el salón · La noche Italiana con su incomparable festival de pastas';

function FlipCard({ title, back }) {
  return (
    <div className="group relative m-4 flex h-[200px] w-[280px] items-center justify-center overflow-hidden bg-savoia-dark">
      <h3 className="px-4 text-center text-lg text-white transition-opacity group-hover:opacity-0">{title}</h3>
      <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
        {back}
      </p>
    </div>
  );
}

export default function OstendeGastronomiaPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/gastronomia/portada-gastronomia.jpeg" imageAlt="Gastronomía" />

      <section className="py-8 text-center">
        <h3 className="text-lg">DELÉITESE CON NUESTRAS PROPUESTAS GASTRONÓMICAS, TODAS ELABORADAS EN EL HOTEL</h3>
        <h1 className="mt-2 text-3xl font-medium">GASTRONOMÍA</h1>
      </section>

      <div className="flex flex-wrap justify-center">
        <FlipCard title="DESAYUNO" back="B" />
        <FlipCard title="ALMUERZO" back="B" />
        <FlipCard title="CENA" back={CENA_TEXT} />
      </div>

      <div className="relative mx-auto my-6 h-[300px] w-full max-w-[1200px]">
        <Image src="/img/ostende/home/collage-gastronomia.jpg" alt="Savoia" fill className="object-cover" />
      </div>

      <section className="py-8 text-center">
        <h3 className="text-lg">DISFRUTE DE LOS MEJORES COCKTAILS FRENTE AL MAR</h3>
        <h1 className="mt-2 text-3xl font-medium">DRINKS</h1>
      </section>

      <div className="flex flex-wrap justify-center">
        <FlipCard title="BAR WOODSTOCK" back="B" />
        <FlipCard title="BAR SAINT JEAN" back="B" />
      </div>

      <div className="relative mx-auto my-6 h-[300px] w-full max-w-[1200px]">
        <Image src="/img/ostende/home/collage-gastronomia.jpg" alt="Savoia" fill className="object-cover" />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/gastronomia | grep -o 'GASTRONOMÍA\|DRINKS\|DESAYUNO\|ALMUERZO\|CENA\|BAR WOODSTOCK\|BAR SAINT JEAN'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende gastronomia page"
```

---

### Task 19: `/ostende/gym-sauna`

**Files:**
- Create: `app/ostende/gym-sauna/page.js`

**Interfaces:**
- Consumes: `AmenityDetail`, `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/gym-sauna.html`. No `HeroBand` — `#showcase8` has no `background-image` rule in `ostende/css/style.css` (confirmed by direct inspection), same gap as `gastronomia-savoia`.

- [ ] **Step 1: Create `app/ostende/gym-sauna/page.js`**

```jsx
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Gimnasio y sauna' };

const IMAGES = [
  { src: '/img/ostende/servicios2/Gimnasio/gym1.jpg', alt: 'Gimnasio y sauna' },
  { src: '/img/ostende/servicios2/sauna-masajes/sauna2.jpg', alt: 'Gimnasio y sauna' },
  { src: '/img/ostende/servicios2/sauna-masajes/sauna3.jpg', alt: 'Gimnasio y sauna' },
];

const DETAILS = [
  { label: 'Horario gimnasio', text: 'De 7:00 a 22:00hs' },
  { label: 'Información', text: 'Menores de 18 años deben estar acompañados por un adulto responsable.' },
  { label: 'Sauna', text: 'Pedir turno para que habiliten el sauna en recepción. Consultar días disponibles para reservar.' },
];

export default function GymSaunaPage() {
  return (
    <main>
      <AmenityDetail images={IMAGES} title="GIMNASIO Y SAUNA" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/gym-sauna | grep -o 'GIMNASIO Y SAUNA\|Horario gimnasio'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende gym-sauna page"
```

---

### Task 20: `/ostende/miniclub`

**Files:**
- Create: `app/ostende/miniclub/page.js`

**Interfaces:**
- Consumes: `HeroBand`, `AmenityDetail`, `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/miniclub.html`.

- [ ] **Step 1: Create `app/ostende/miniclub/page.js`**

```jsx
import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Mini Club' };

const IMAGES = [
  { src: '/img/ostende/servicios2/salaJuegos/miniclub1.jpg', alt: 'Mini Club' },
  { src: '/img/ostende/servicios2/salaJuegos/miniclub2.jpg', alt: 'Mini Club' },
  { src: '/img/ostende/servicios2/salaJuegos/miniclub-portada.jpg', alt: 'Mini Club' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 9:00 a 19:00hs' },
  { label: 'Información', text: 'Menores de 12 años requieren la presencia de un adulto.' },
  { label: 'Actividades', text: 'Actividades recreativas organizadas por el área de recreación. Juegos habilitados durante todo el día.' },
];

export default function MiniclubPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/servicios2/salaJuegos/miniclub-portada.jpg" imageAlt="Mini Club" />
      <AmenityDetail images={IMAGES} title="SALA DE RECREACIÓN" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/miniclub | grep -o 'SALA DE RECREACIÓN\|Juegos habilitados'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende miniclub page"
```

---

### Task 21: `/ostende/pileta`

**Files:**
- Create: `app/ostende/pileta/page.js`

**Interfaces:**
- Consumes: `HeroBand`, `AmenityDetail`, `ContactInfoBar`.

Content source: `/Users/chiara/Desktop/Savoia/ostende/pileta.html`.

- [ ] **Step 1: Create `app/ostende/pileta/page.js`**

```jsx
import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Pileta' };

const IMAGES = [
  { src: '/img/ostende/pileta-exteriores/pileta1.jpg', alt: 'Pileta climatizada' },
  { src: '/img/ostende/pileta-exteriores/pileta4.jpg', alt: 'Pileta climatizada' },
  { src: '/img/ostende/pileta-exteriores/pileta3.jpg', alt: 'Pileta climatizada' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 9:00 a 19:00hs' },
  { label: 'Información', text: 'Menores de 12 años deben estar acompañados por un adulto responsable.' },
  { label: 'Tamaño', text: 'Cuenta con sección para menores y sección para adultos con más metros de profundidad.' },
  { label: 'Actividades', text: 'Se realizan actividades recreativas dentro de la pileta guiadas por el área de recreación.' },
];

export default function PiletaPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/pileta-exteriores/pileta-portada.jpg" imageAlt="Pileta climatizada" />
      <AmenityDetail images={IMAGES} title="PILETA CLIMATIZADA" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ostende/pileta | grep -o 'PILETA CLIMATIZADA\|sección para menores'
kill %1
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build ostende pileta page"
```

---

### Task 22: Update the parent site's Ostende links

**Files:**
- Modify: `app/(main)/page.js`
- Modify: `app/(main)/hoteles/page.js`

**Interfaces:**
- Consumes: nothing new — this only changes two string values in already-existing data arrays.

Now that `/ostende` is a real route (Task 7), the parent site's two "Hotel Savoia Ostende" entries should link internally instead of to the external production URL.

- [ ] **Step 1: Update `app/(main)/page.js`**

In the `HOTELS` array, change the Ostende entry's `titleHref` from:

```js
titleHref: 'https://www.hotelessavoia.com/ostende/index.html',
```

to:

```js
titleHref: '/ostende',
```

- [ ] **Step 2: Update `app/(main)/hoteles/page.js`**

In the `CARDS` array, change the Ostende entry's `href` from:

```js
href: 'https://www.hotelessavoia.com/ostende/index.html',
```

to:

```js
href: '/ostende',
```

- [ ] **Step 3: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/ | grep -o 'href="/ostende"'
curl -s http://localhost:3000/hoteles | grep -o 'href="/ostende"'
kill %1
```

Expected: both routes now contain `href="/ostende"` and no longer reference `hotelessavoia.com/ostende`.

- [ ] **Step 4: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: point parent-site Ostende links to the internal /ostende route"
```

---

### Task 23: Final verification pass

**Files:** none (verification only)

- [ ] **Step 1: Full production build**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
npm run build
```

Expected: clean build, route table lists `/`, `/_not-found`, `/contacto`, `/hoteles`, `/mendoza`, `/nosotros`, `/san-bernardo`, `/ostende`, `/ostende/habitaciones`, `/ostende/servicios`, `/ostende/ubicacion`, `/ostende/contacto`, `/ostende/categoria-ejecutiva`, `/ostende/categoria-standard`, `/ostende/categoria-superior`, `/ostende/bar-saintjean`, `/ostende/bar-woodstock`, `/ostende/gastronomia-savoia`, `/ostende/gastronomia`, `/ostende/gym-sauna`, `/ostende/miniclub`, `/ostende/pileta` — 21 routes total.

- [ ] **Step 2: Route-by-route check against the production server**

```bash
npm run start &
sleep 3

for route in / /nosotros /hoteles /contacto /mendoza /san-bernardo \
  /ostende /ostende/habitaciones /ostende/servicios /ostende/ubicacion /ostende/contacto \
  /ostende/categoria-ejecutiva /ostende/categoria-standard /ostende/categoria-superior \
  /ostende/bar-saintjean /ostende/bar-woodstock /ostende/gastronomia-savoia /ostende/gastronomia \
  /ostende/gym-sauna /ostende/miniclub /ostende/pileta; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$route")
  echo "$route -> $code"
done

# Ostende chrome + data checks
curl -s http://localhost:3000/ostende | grep -c 'HABITACIONES\|SERVICIOS\|UBICACIÓN\|CONTACTO'
curl -s http://localhost:3000/ostende | grep -o '(02254) 49-6600'
curl -s http://localhost:3000/ostende | grep -c 'F.D. Roosevelt'
curl -s http://localhost:3000/ostende | grep -o 'video-savoia.mov'

# Parent-site link update check
curl -s http://localhost:3000/ | grep -o 'href="/ostende"'
curl -s http://localhost:3000/hoteles | grep -o 'href="/ostende"'

kill %1
```

Expected: every route returns `200`; `/ostende`'s nav shows all 4 Ostende-specific links; its `ContactInfoBar` shows the Ostende phone number and does **not** contain "F.D. Roosevelt" (the parent site's CABA office — confirms the override props, not the defaults, are in effect); the video source path is present in the HTML; both parent-site pages now link internally to `/ostende`.

- [ ] **Step 3: Confirm the original Savoia source folders are untouched**

```bash
find /Users/chiara/Desktop/Savoia -newer /private/tmp/claude-501/-Users-chiara-Desktop-Savoia/624764ef-1247-47e3-9366-23c1ccb71cbf/scratchpad/2026-08-21-savoia-nextjs-ostende-plan.md 2>/dev/null
```

Expected: empty output (this plan file itself is newer than anything in the source tree, since nothing there was modified while building from it).

- [ ] **Step 4: Note the manual-browser gaps for the human to check**

No real browser exists in this environment. Two things were verified only by code-reading/build success, not by an actual click-through or video playback, and are worth a five-minute manual check once this lands: (1) `OstendeHeader`'s mobile hamburger menu — same pattern as the parent site's `Header`, already flagged there; (2) the `video-savoia.mov` hero on `/ostende` actually plays — `.mov` via a `type="video/mp4"` `<source>` tag works in most browsers but isn't guaranteed everywhere.

- [ ] **Step 5: Final commit**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
git add -A
git commit -m "chore: final verification pass for ostende micro-site" --allow-empty
```
