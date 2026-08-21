# Savoia Next.js/Tailwind/Framer Motion Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recreate the six-page Savoia hotels static site as a Next.js (JavaScript, App Router) + Tailwind CSS + Framer Motion prototype at `/Users/chiara/Desktop/savoia-nextjs`, without modifying the existing site at `/Users/chiara/Desktop/Savoia`.

**Architecture:** A single Next.js App Router project. Shared chrome (`Header`, `Footer`, `WhatsAppFloat`) lives in `app/layout.js`. Six route folders under `app/` hold the pages, built from a small set of reusable presentational components (`Carousel`, `HotelCard`, `PhotoRevealCard`, `ContactInfoBar`, `RevealSection`, `GuestCounter`). Content (copy, addresses, phone numbers, image paths) is ported verbatim from the existing HTML/CSS.

**Tech Stack:** Next.js (latest, JavaScript, App Router), Tailwind CSS, Framer Motion, lucide-react.

**Spec:** `docs/superpowers/specs/2026-08-21-savoia-nextjs-design.md` (copied into the new project in Task 1) — executors should read the spec alongside this plan.

## Global Constraints

- JavaScript only — no TypeScript, no `.ts`/`.tsx` files.
- App Router (`app/`), not the Pages Router.
- Icons via `lucide-react` only — no Font Awesome.
- Framer Motion is used only for: the home carousel, the mobile menu open/close, and scroll-reveal (`RevealSection`). Hover-reveal photo cards use plain CSS (`group-hover`), not Framer Motion.
- No working contact-form backend, no analytics/gtag, no automated test suite (per spec, this is a personal learning prototype). Verification throughout this plan is: `npm run build` completes with no errors, and a manual check in `npm run dev` — there are no unit/integration tests to write or run.
- All copy (addresses, phone numbers, body text, links) is ported verbatim from `/Users/chiara/Desktop/Savoia`; the source file for each page's content is named in that task.
- Tailwind theme tokens: `savoia-dark #373f47`, `savoia-footer #333c46`, `savoia-light #f4f4f4`, `savoia-accent #f7c08a`, `whatsapp-green #25D366`; font stack leads with `"Gill Sans"` then system sans-serif fallbacks.
- `ostende/` (the separate hotel micro-site) is out of scope — its link points to the live production URL `https://www.hotelessavoia.com/ostende/index.html` instead of being rebuilt.
- The existing `/Users/chiara/Desktop/Savoia` folder is read-only reference material — never edit files there.

---

### Task 1: Scaffold the Next.js project

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/` (entire project, via `create-next-app`)
- Create: `/Users/chiara/Desktop/savoia-nextjs/docs/superpowers/specs/2026-08-21-savoia-nextjs-design.md`
- Create: `/Users/chiara/Desktop/savoia-nextjs/docs/superpowers/plans/2026-08-21-savoia-nextjs-plan.md`

**Interfaces:**
- Produces: a running Next.js JS/App Router project with Tailwind CSS pre-wired, plus `framer-motion` and `lucide-react` installed, that every later task builds inside.

- [ ] **Step 1: Run create-next-app**

From `/Users/chiara/Desktop`, run:

```bash
npx create-next-app@latest savoia-nextjs --js --eslint --tailwind --app --no-src-dir --import-alias "@/*" --use-npm
```

If it prompts interactively for anything not covered by a flag, accept the shown default.

- [ ] **Step 2: Verify the dev server boots**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
npm run dev
```

Expected: server starts on `http://localhost:3000` with no errors; the default Next.js starter page loads in a browser. Stop the server (Ctrl+C) once confirmed.

- [ ] **Step 3: Install Framer Motion and lucide-react**

```bash
npm install framer-motion lucide-react
```

- [ ] **Step 4: Confirm git was initialized**

```bash
git -C /Users/chiara/Desktop/savoia-nextjs status
```

Expected: it's already a git repo with an initial commit (create-next-app does this automatically). If it is NOT a git repo, run `git init` and `git add -A && git commit -m "chore: initial create-next-app scaffold"` inside `/Users/chiara/Desktop/savoia-nextjs`.

- [ ] **Step 5: Copy the spec and this plan into the new project**

```bash
mkdir -p /Users/chiara/Desktop/savoia-nextjs/docs/superpowers/specs /Users/chiara/Desktop/savoia-nextjs/docs/superpowers/plans
cp /private/tmp/claude-501/-Users-chiara-Desktop-Savoia/624764ef-1247-47e3-9366-23c1ccb71cbf/scratchpad/2026-08-21-savoia-nextjs-design.md /Users/chiara/Desktop/savoia-nextjs/docs/superpowers/specs/
cp /private/tmp/claude-501/-Users-chiara-Desktop-Savoia/624764ef-1247-47e3-9366-23c1ccb71cbf/scratchpad/2026-08-21-savoia-nextjs-plan.md /Users/chiara/Desktop/savoia-nextjs/docs/superpowers/plans/
```

- [ ] **Step 6: Commit**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
git add -A
git commit -m "chore: install framer-motion, lucide-react; add spec and plan docs"
```

---

### Task 2: Tailwind theme tokens and global styles

**Files:**
- Modify: `/Users/chiara/Desktop/savoia-nextjs/app/globals.css`
- Create (only if Tailwind v3 was scaffolded): `/Users/chiara/Desktop/savoia-nextjs/tailwind.config.js`

**Interfaces:**
- Produces: Tailwind utility classes `bg-savoia-dark`, `bg-savoia-footer`, `bg-savoia-light`, `text-savoia-accent`, `bg-whatsapp-green`, and `font-sans` (leading with `"Gill Sans"`), usable by every component/page from Task 4 onward.

- [ ] **Step 1: Check which Tailwind config style was scaffolded**

```bash
ls /Users/chiara/Desktop/savoia-nextjs/tailwind.config.*
```

- If a `tailwind.config.js` (or `.ts`) file exists (Tailwind v3 style), do Step 2a.
- If no such file exists and `app/globals.css` starts with `@import "tailwindcss";` (Tailwind v4 style), do Step 2b.

- [ ] **Step 2a: (Tailwind v3) Add theme tokens to `tailwind.config.js`**

Replace the `theme` key with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'savoia-dark': '#373f47',
        'savoia-footer': '#333c46',
        'savoia-light': '#f4f4f4',
        'savoia-accent': '#f7c08a',
        'whatsapp-green': '#25D366',
      },
      fontFamily: {
        sans: [
          '"Gill Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
```

Then skip to Step 3.

- [ ] **Step 2b: (Tailwind v4) Add theme tokens to `app/globals.css`**

At the top of `app/globals.css`, right after the `@import "tailwindcss";` line, add:

```css
@theme {
  --color-savoia-dark: #373f47;
  --color-savoia-footer: #333c46;
  --color-savoia-light: #f4f4f4;
  --color-savoia-accent: #f7c08a;
  --color-whatsapp-green: #25D366;
  --font-sans: "Gill Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

- [ ] **Step 3: Reset body margin**

Make sure `app/globals.css` has (add if missing, don't duplicate if create-next-app already added a `body` rule — merge into the existing one):

```css
body {
  margin: 0;
}
```

- [ ] **Step 4: Verify the build**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
npm run build
```

Expected: build completes with no errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "style: add Savoia Tailwind theme tokens"
```

---

### Task 3: Copy and normalize image assets

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/public/img/` (and subfolders `home/`, `hoteles/`, `mendoza/`, `san-bernardo/`)

**Interfaces:**
- Produces: every image path referenced by later page tasks, served from `/img/...` under `public/`.

- [ ] **Step 1: Create the folder structure and copy files**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
mkdir -p public/img/home public/img/hoteles public/img/mendoza public/img/san-bernardo

cp /Users/chiara/Desktop/Savoia/img/logo-savoia.jpg public/img/
cp /Users/chiara/Desktop/Savoia/img/icon.jpg public/img/
cp /Users/chiara/Desktop/Savoia/img/nosotros.jpeg public/img/

cp /Users/chiara/Desktop/Savoia/img/home/entrada-hamlet.jpeg public/img/home/
cp /Users/chiara/Desktop/Savoia/img/home/portada.jpg public/img/home/
cp /Users/chiara/Desktop/Savoia/img/home/portada-mendoza.jpg public/img/home/
cp /Users/chiara/Desktop/Savoia/img/home/portada-mendozaaa.jpeg public/img/home/

cp /Users/chiara/Desktop/Savoia/img/hoteles/ostende-inicio.jpeg public/img/hoteles/
cp /Users/chiara/Desktop/Savoia/img/hoteles/puerto-hamlet.jpeg public/img/hoteles/
cp /Users/chiara/Desktop/Savoia/img/hoteles/hotel-mendoza.jpeg public/img/hoteles/
cp /Users/chiara/Desktop/Savoia/img/hoteles/san-bernardo.jpeg public/img/hoteles/
cp /Users/chiara/Desktop/Savoia/img/hoteles/logo-molisana-molise.jpg public/img/hoteles/

cp /Users/chiara/Desktop/Savoia/img/mendoza/habitacion1-mendoza.jpg public/img/mendoza/
cp /Users/chiara/Desktop/Savoia/img/mendoza/habitacion2-mendoza.jpg public/img/mendoza/
cp /Users/chiara/Desktop/Savoia/img/mendoza/pileta-mendoza.jpg public/img/mendoza/
cp /Users/chiara/Desktop/Savoia/img/mendoza/paisaje1-mendoza.jpg public/img/mendoza/
cp /Users/chiara/Desktop/Savoia/img/mendoza/salon-de-fiesta.jpg public/img/mendoza/
cp /Users/chiara/Desktop/Savoia/img/mendoza/gastronomia-mendoza.jpg public/img/mendoza/
cp /Users/chiara/Desktop/Savoia/img/mendoza/cancha-tenis.jpg public/img/mendoza/
cp /Users/chiara/Desktop/Savoia/img/mendoza/salon-de-juegos.jpg public/img/mendoza/

cp "/Users/chiara/Desktop/Savoia/img/san-bernardo/san-bernardo 7.jpg" public/img/san-bernardo/san-bernardo-7.jpg
cp "/Users/chiara/Desktop/Savoia/img/san-bernardo/san-bernardo 6.jpg" public/img/san-bernardo/san-bernardo-6.jpg
cp /Users/chiara/Desktop/Savoia/img/san-bernardo/san-bernardo.jpg public/img/san-bernardo/
cp /Users/chiara/Desktop/Savoia/img/san-bernardo/sala-sanber.jpg public/img/san-bernardo/
```

Note: filenames with spaces are renamed to hyphenated versions during copy (`san-bernardo 7.jpg` → `san-bernardo-7.jpg`) so they work cleanly as URL paths without encoding.

- [ ] **Step 2: Verify all expected files are present**

```bash
find public/img -type f | sort
```

Expected output (order may vary slightly, but exactly these 21 files):

```
public/img/home/entrada-hamlet.jpeg
public/img/home/portada-mendoza.jpg
public/img/home/portada-mendozaaa.jpeg
public/img/home/portada.jpg
public/img/hoteles/hotel-mendoza.jpeg
public/img/hoteles/logo-molisana-molise.jpg
public/img/hoteles/ostende-inicio.jpeg
public/img/hoteles/puerto-hamlet.jpeg
public/img/hoteles/san-bernardo.jpeg
public/img/icon.jpg
public/img/logo-savoia.jpg
public/img/mendoza/cancha-tenis.jpg
public/img/mendoza/gastronomia-mendoza.jpg
public/img/mendoza/habitacion1-mendoza.jpg
public/img/mendoza/habitacion2-mendoza.jpg
public/img/mendoza/paisaje1-mendoza.jpg
public/img/mendoza/pileta-mendoza.jpg
public/img/mendoza/salon-de-fiesta.jpg
public/img/mendoza/salon-de-juegos.jpg
public/img/nosotros.jpeg
public/img/san-bernardo/sala-sanber.jpg
public/img/san-bernardo/san-bernardo-6.jpg
public/img/san-bernardo/san-bernardo-7.jpg
public/img/san-bernardo/san-bernardo.jpg
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: copy Savoia image assets into public/img"
```

---

### Task 4: Header, Footer, WhatsAppFloat, and root layout

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/components/Header.jsx`
- Create: `/Users/chiara/Desktop/savoia-nextjs/components/Footer.jsx`
- Create: `/Users/chiara/Desktop/savoia-nextjs/components/WhatsAppFloat.jsx`
- Modify: `/Users/chiara/Desktop/savoia-nextjs/app/layout.js`

**Interfaces:**
- Produces: `<Header />`, `<Footer />`, `<WhatsAppFloat />` (no props on any of them), wired into every route automatically via `app/layout.js`.

- [ ] **Step 1: Create `components/Header.jsx`**

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
  { href: '/nosotros', label: 'NOSOTROS' },
  { href: '/hoteles', label: 'HOTELES' },
  { href: '/contacto', label: 'CONTACTO' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-5">
        <Link href="/">
          <Image src="/img/logo-savoia.jpg" alt="Hoteles Savoia" width={130} height={80} />
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

- [ ] **Step 2: Create `components/Footer.jsx`**

```jsx
export default function Footer() {
  return (
    <footer className="bg-savoia-footer py-5 text-center text-white">
      <p>Hoteles Savoia &copy; {new Date().getFullYear()} - Todos los derechos reservados</p>
    </footer>
  );
}
```

- [ ] **Step 3: Create `components/WhatsAppFloat.jsx`**

```jsx
export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5491158958380"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-[1000] flex h-[45px] w-[45px] items-center justify-center rounded-full bg-whatsapp-green text-white shadow-lg"
    >
      <svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.9C21.96 6.45 17.51 2 12.04 2Zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.37 1.47.29.15.46.13.63-.08.17-.21.72-.84.91-1.13.19-.29.38-.24.64-.15.26.1 1.66.78 1.94.93.28.15.47.22.54.34.07.13.07.71-.17 1.39Z" />
      </svg>
    </a>
  );
}
```

- [ ] **Step 4: Wire up `app/layout.js`**

Replace its contents with:

```jsx
import './globals.css';
import Header from '@/components/Header';
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
        <Header />
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify in the browser**

```bash
npm run dev
```

Open `http://localhost:3000` — expected: white header with the Savoia logo and nav links (desktop) or hamburger icon (narrow window), the default Next.js starter content in the middle, a green WhatsApp button bottom-right, and a dark footer at the bottom. Click the hamburger (narrow window) — a panel slides in from the right with the four nav links and a close button. Stop the server.

- [ ] **Step 6: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: add Header, Footer, WhatsAppFloat and wire root layout"
```

---

### Task 5: ContactInfoBar and RevealSection

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/components/ContactInfoBar.jsx`
- Create: `/Users/chiara/Desktop/savoia-nextjs/components/RevealSection.jsx`
- Modify: `/Users/chiara/Desktop/savoia-nextjs/app/page.js` (temporary — for visual verification only; a later task replaces this file's content entirely)

**Interfaces:**
- Produces: `<ContactInfoBar locationHref? locationText? phoneHref? phoneText? emailHref? emailText? />` (all props optional, defaulting to the central Molise Viajes office) and `<RevealSection className? delay?>{children}</RevealSection>` (fades/slides children in on scroll into view).

- [ ] **Step 1: Create `components/ContactInfoBar.jsx`**

```jsx
import { Hotel, Phone, Mail } from 'lucide-react';

export default function ContactInfoBar({
  locationHref = 'https://maps.app.goo.gl/6gZ1Gr2gGvhAJ3CR7',
  locationText = 'F.D. Roosevelt 2445 1D / CABA',
  phoneHref = 'tel:1147886969',
  phoneText = '+ 54 (011) 4788-6969',
  emailHref = 'mailto:reservas@hotelessavoia.com',
  emailText = 'reservas@hotelessavoia.com',
}) {
  const items = [
    { Icon: Hotel, title: 'Ubicación', href: locationHref, text: locationText },
    { Icon: Phone, title: 'Número', href: phoneHref, text: phoneText },
    { Icon: Mail, title: 'Correo electrónico', href: emailHref, text: emailText },
  ];

  return (
    <section className="bg-savoia-dark text-white">
      <div className="mx-auto flex max-w-[1100px] flex-col justify-center gap-8 px-5 py-10 md:flex-row">
        {items.map(({ Icon, title, href, text }) => (
          <div key={title} className="flex-1 text-center">
            <a href={href} className="text-white">
              <Icon size={40} className="mx-auto mb-2" />
              <h3 className="text-lg font-medium">{title}</h3>
            </a>
            <a href={href} className="text-white">
              {text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/RevealSection.jsx`**

```jsx
'use client';

import { motion } from 'framer-motion';

export default function RevealSection({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Temporarily render both under the starter content in `app/page.js`**

Add these two imports at the top of `app/page.js` and render `<RevealSection><h2>Reveal test</h2></RevealSection>` and `<ContactInfoBar />` at the bottom of the returned JSX, right before the closing tag of the top-level element. This is throwaway wiring — Task 8 replaces the whole file.

- [ ] **Step 4: Verify in the browser**

```bash
npm run dev
```

Scroll to the bottom of `http://localhost:3000` — expected: "Reveal test" fades/slides up into view as it scrolls into the viewport, followed by a dark section with three columns (Ubicación / Número / Correo electrónico), each with an icon, heading, and the Molise Viajes office contact details. Stop the server.

- [ ] **Step 5: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: add ContactInfoBar and RevealSection components"
```

---

### Task 6: Carousel, HotelCard, and PhotoRevealCard

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/components/Carousel.jsx`
- Create: `/Users/chiara/Desktop/savoia-nextjs/components/HotelCard.jsx`
- Create: `/Users/chiara/Desktop/savoia-nextjs/components/PhotoRevealCard.jsx`

**Interfaces:**
- Consumes: none beyond Tailwind tokens from Task 2 and image files from Task 3.
- Produces:
  - `<Carousel slides={[{ src, alt }]} />`
  - `<HotelCard title titleHref addressHref addressText phoneHref phoneText />`
  - `<PhotoRevealCard src alt headline? infoLines? href? />` — `infoLines` is an array of strings; if both `headline` and `infoLines` are omitted, no hover overlay renders; if `href` is omitted, the card renders as a plain (non-clickable) tile.

- [ ] **Step 1: Create `components/Carousel.jsx`**

```jsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-savoia-light md:h-[650px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/HotelCard.jsx`**

```jsx
import { Hotel } from 'lucide-react';

export default function HotelCard({ title, titleHref, addressHref, addressText, phoneHref, phoneText }) {
  return (
    <div className="w-full bg-savoia-light p-8 text-center text-[#333]">
      <a href={titleHref}>
        <Hotel size={40} className="mx-auto mb-2" />
        <h2 className="mt-2 uppercase">{title}</h2>
      </a>
      <a href={addressHref}>{addressText}</a>
      <br />
      <a href={phoneHref}>{phoneText}</a>
    </div>
  );
}
```

- [ ] **Step 3: Create `components/PhotoRevealCard.jsx`**

```jsx
import Image from 'next/image';

function CardInner({ src, alt, headline, infoLines }) {
  const hasOverlay = Boolean(headline) || (infoLines && infoLines.length > 0);
  return (
    <div className="group relative h-[300px] w-full max-w-[400px] overflow-hidden md:h-[463px]">
      <Image src={src} alt={alt} fill className="object-cover" />
      {hasOverlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[rgba(31,31,31,0.9)] px-4 text-center text-[#ddd] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {headline && <p className="text-xl">{headline}</p>}
          {infoLines?.map((line) => (
            <p key={line} className="text-[#f4f4f4]">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PhotoRevealCard({ src, alt, headline, infoLines, href }) {
  const inner = <CardInner src={src} alt={alt} headline={headline} infoLines={infoLines} />;
  if (href) {
    return (
      <a href={href} className="m-4 block">
        {inner}
      </a>
    );
  }
  return <div className="m-4">{inner}</div>;
}
```

- [ ] **Step 4: Build check**

```bash
npm run build
```

Expected: build completes with no errors (these components aren't wired into a page yet, but Next's build still type-checks/lints all files under `components/`).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Carousel, HotelCard, and PhotoRevealCard components"
```

---

### Task 7: GuestCounter

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/components/GuestCounter.jsx`

**Interfaces:**
- Produces: `<GuestCounter />` (no props) — renders two hidden inputs, `name="adults"` and `name="children"`, so it can sit inside a plain HTML `<form>` and submit its values along with the rest of the fields.

- [ ] **Step 1: Create `components/GuestCounter.jsx`**

```jsx
'use client';

import { useState } from 'react';

export default function GuestCounter() {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="relative mx-auto mb-5 w-full max-w-[400px]">
      <label htmlFor="guest-field" className="mb-1 block text-left">
        Cantidad de huéspedes
      </label>
      <button
        type="button"
        id="guest-field"
        onClick={() => setOpen((o) => !o)}
        className="flex w-4/5 items-center border border-[#ccc] bg-white p-2 text-left"
      >
        {adults} Adulto{adults !== 1 ? 's' : ''}, {children} Menor{children !== 1 ? 'es' : ''}
      </button>

      {open && (
        <div className="absolute left-0 top-full z-10 rounded border border-[#ccc] bg-white p-3 shadow-md">
          <Stepper label="Adultos" value={adults} min={1} onChange={setAdults} />
          <Stepper label="Menores (menor de 12 años)" value={children} min={0} onChange={setChildren} />
        </div>
      )}

      <input type="hidden" name="adults" value={adults} />
      <input type="hidden" name="children" value={children} />
    </div>
  );
}

function Stepper({ label, value, min, onChange }) {
  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      <label className="mr-2">{label}</label>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="h-8 w-8 rounded-full bg-gray-500 text-white"
      >
        -
      </button>
      <input readOnly value={value} className="w-12 border border-[#ccc] text-center" />
      <button type="button" onClick={() => onChange(value + 1)} className="h-8 w-8 rounded-full bg-gray-500 text-white">
        +
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

Expected: build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add GuestCounter component"
```

---

### Task 8: Home page

**Files:**
- Modify: `/Users/chiara/Desktop/savoia-nextjs/app/page.js` (overwrite the temporary content from Task 5 entirely)

**Interfaces:**
- Consumes: `Carousel` (Task 6), `HotelCard` (Task 6), `ContactInfoBar` (Task 5), `RevealSection` (Task 5).

Content source: `/Users/chiara/Desktop/Savoia/index.html`.

- [ ] **Step 1: Replace `app/page.js` with**

```jsx
import Carousel from '@/components/Carousel';
import HotelCard from '@/components/HotelCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

const SLIDES = [
  { src: '/img/home/entrada-hamlet.jpeg', alt: 'Entrada Hotel Savoia' },
  { src: '/img/home/portada.jpg', alt: 'Hoteles Savoia' },
  { src: '/img/home/portada-mendoza.jpg', alt: 'Hotel Savoia Mendoza' },
];

const HOTELS = [
  {
    title: 'Hotel Savoia Ostende',
    titleHref: 'https://www.hotelessavoia.com/ostende/index.html',
    addressHref: 'https://maps.app.goo.gl/YmDr8pttmDuPLWZp7',
    addressText: 'Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar',
    phoneHref: 'tel:02254496600',
    phoneText: 'Tel: (02254) 49-6600',
  },
  {
    title: 'Puerto Hamlet',
    titleHref: 'https://www.puertohamlet.com/index.html',
    addressHref: 'https://maps.app.goo.gl/XCG5uryNonStL4ms6',
    addressText: 'Cerezo 104 - Cariló',
    phoneHref: 'tel:02254571623',
    phoneText: 'Tel: (02254) 57-1623',
  },
  {
    title: 'Hotel Savoia Mendoza',
    titleHref: '/mendoza',
    addressHref: 'https://maps.app.goo.gl/5tZqW9x7ouJCyS276',
    addressText: 'Avellaneda 3653, Bermejo - Mendoza',
    phoneHref: 'tel:1157379702',
    phoneText: 'Tel: (+54) 11 5737-9702',
  },
  {
    title: 'Hotel Savoia San Bernardo',
    titleHref: '/san-bernardo',
    addressHref: 'https://maps.app.goo.gl/tT5bGSmaVbJpzRU6A',
    addressText: 'Strobel 2099 - San Bernardo',
    phoneHref: 'tel:02257460211',
    phoneText: 'Tel: (02257) 460-211 / 250',
  },
  {
    title: 'Hotel Savoia Córdoba',
    titleHref: '#',
    addressHref: 'https://maps.app.goo.gl/REYafKwb5dTTgCmHA',
    addressText: 'La falda - Córdoba',
    phoneHref: 'tel:03548421292',
    phoneText: 'Tel: (03548) 42-1292',
  },
  {
    title: 'Molise viajes - central de reservas',
    titleHref: '#',
    addressHref: 'https://maps.app.goo.gl/6gZ1Gr2gGvhAJ3CR7',
    addressText: 'F.D. Roosevelt 2445 1D / CABA',
    phoneHref: 'tel:1147886969',
    phoneText: 'Tel: (011) 4788-6969',
  },
];

export const metadata = { title: 'Hoteles Savoia | Bienvenidos' };

export default function HomePage() {
  return (
    <main>
      <Carousel slides={SLIDES} />
      <RevealSection className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 px-5 py-10 md:grid-cols-2 lg:grid-cols-3">
        {HOTELS.map((hotel) => (
          <HotelCard key={hotel.title} {...hotel} />
        ))}
      </RevealSection>
      <ContactInfoBar />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the browser**

```bash
npm run dev
```

Open `http://localhost:3000` — expected: the 3-image carousel auto-advances every ~4s with a cross-fade, followed by a 6-card grid (Ostende, Puerto Hamlet, Mendoza, San Bernardo, Córdoba, Molise Viajes) that fades/slides in as you scroll to it, then the dark contact info bar. Click "Hotel Savoia Mendoza" and "Hotel Savoia San Bernardo" — both should 404 for now (their routes don't exist until Tasks 12–13). Stop the server.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build home page"
```

---

### Task 9: Nosotros page

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/app/nosotros/page.js`

**Interfaces:**
- Consumes: `ContactInfoBar` (Task 5), `RevealSection` (Task 5).

Content source: `/Users/chiara/Desktop/Savoia/nosotros.html`.

- [ ] **Step 1: Create `app/nosotros/page.js`**

```jsx
import Image from 'next/image';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Nosotros' };

export default function NosotrosPage() {
  return (
    <main>
      <div className="relative h-[300px] w-full md:h-[600px]">
        <Image src="/img/nosotros.jpeg" alt="Hoteles Savoia" fill priority className="object-cover" />
      </div>

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-justify">
        <h1 className="text-3xl font-medium">NUESTRA HISTORIA</h1>
        <p className="mt-4">Hoteles Savoia, 83 años de experiencia.</p>
        <p className="mt-4">
          Sus orígenes se remontan al año 1941 con la inauguración del primer Hotel Savoia en la
          Costa Atlántica, desde entonces se ha ido especializando en la Administración de
          Hoteles y Gastronomia en general. A lo largo de estos años se ha caracterizado por
          estar siempre un paso adelante en la implementación de medidas dirigidas a elevar y
          mejorar la calidad de los servicios al cliente.
        </p>
        <p className="mt-4">
          Nuestra Hotelería es reconocida por su exquisita y variada oferta gastronómica
          elaborada en cada establecimiento con materia prima de primera calidad, logrando
          sabores propios de la mejor cocina casera.
        </p>
        <p className="mt-4">
          Molise Viajes S.R.L. es la empresa de viajes y turismo operadora exclusiva de los
          Hoteles Savoia Ostende (Pinamar), Savoia San Bernardo (San Bernardo), Ejercito de los
          Andes (Savoia Mendoza en Guaymallén, Mendoza), Molino de Oro (Savoia Cordoba en La
          Falda, Córdoba), además de todas las opciones que pueden brindarse tanto en el turismo
          Nacional como Internacional.
        </p>
        <p className="mt-4">
          La empresa Gastronomía Molisana es la encargada de administrar las distintas
          concesiones gastronómicas con que cuenta el grupo, tanto en sanatorios y clínicas como
          en hoteles y colonias de vacaciones. Además se ocupa de la organización de eventos
          exclusivamente en los lugares que administra.
        </p>
      </RevealSection>

      <ContactInfoBar />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the browser**

```bash
npm run dev
```

Open `http://localhost:3000/nosotros` — expected: full-width hero image, "Nuestra Historia" heading and five paragraphs of body text (fading in on scroll), then the contact info bar. Stop the server.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build nosotros page"
```

---

### Task 10: Hoteles page

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/app/hoteles/page.js`

**Interfaces:**
- Consumes: `PhotoRevealCard` (Task 6), `ContactInfoBar` (Task 5), `RevealSection` (Task 5).

Content source: `/Users/chiara/Desktop/Savoia/hoteles.html`.

- [ ] **Step 1: Create `app/hoteles/page.js`**

```jsx
import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Hoteles' };

const CARDS = [
  {
    src: '/img/hoteles/ostende-inicio.jpeg',
    alt: 'Hotel Savoia Ostende',
    headline: 'HOTEL SAVOIA OSTENDE',
    infoLines: ['Biarritz 184 e/ Defensa y Progreso', 'Tel: (02254) 49-6600', 'Ver más'],
    href: 'https://www.hotelessavoia.com/ostende/index.html',
  },
  {
    src: '/img/hoteles/puerto-hamlet.jpeg',
    alt: 'Puerto Hamlet Cariló',
    headline: 'PUERTO HAMLET CARILÓ',
    infoLines: ['Cerezo 104 - Cariló', 'Tel: (02254) 57-1623', 'Ver más'],
    href: 'https://www.puertohamlet.com/',
  },
  {
    src: '/img/hoteles/hotel-mendoza.jpeg',
    alt: 'Hotel Savoia Mendoza',
    headline: 'HOTEL SAVOIA MENDOZA',
    infoLines: ['Avellaneda 3653, Bermejo - Mendoza', 'Tel: (+54) 11 5737-9702', 'Ver más'],
    href: '/mendoza',
  },
  {
    src: '/img/hoteles/san-bernardo.jpeg',
    alt: 'Hotel San Bernardo',
    headline: 'HOTEL SAN BERNARDO',
    infoLines: ['Strobel 2099 - San Bernardo', 'Tel: (02257) 460-211 / 250', 'Ver más'],
    href: '/san-bernardo',
  },
  {
    src: '/img/hoteles/logo-molisana-molise.jpg',
    alt: 'Molise Viajes',
    infoLines: [
      'MOLISE VIAJES',
      'Central de reservas de Hoteles Savoia',
      'F.D. Roosevelt 2445 1D / CABA',
      'Tel: (011) 4788-6969',
    ],
  },
];

export default function HotelesPage() {
  return (
    <main>
      <RevealSection className="flex flex-wrap justify-center bg-savoia-light py-10">
        {CARDS.map((card) => (
          <PhotoRevealCard key={card.src} {...card} />
        ))}
      </RevealSection>
      <ContactInfoBar />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the browser**

```bash
npm run dev
```

Open `http://localhost:3000/hoteles` — expected: 5 photo tiles; hovering each (Ostende, Puerto Hamlet, Mendoza, San Bernardo, Molise Viajes) reveals a dark overlay with the hotel name/details, then the contact info bar below. Stop the server.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build hoteles page"
```

---

### Task 11: Contacto page

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/app/contacto/page.js`

**Interfaces:**
- Consumes: `GuestCounter` (Task 7), `ContactInfoBar` (Task 5).

Content source: `/Users/chiara/Desktop/Savoia/contacto.html`.

- [ ] **Step 1: Create `app/contacto/page.js`**

```jsx
'use client';

import GuestCounter from '@/components/GuestCounter';
import ContactInfoBar from '@/components/ContactInfoBar';

export default function ContactoPage() {
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
              <input
                type="text"
                name="name"
                placeholder="Nombre y apellido"
                required
                className="w-4/5 border border-[#ddd] p-3"
              />
            </div>
            <div className="mb-5">
              <input type="email" name="email" placeholder="Email" required className="w-4/5 border border-[#ddd] p-3" />
            </div>
            <div className="mb-5">
              <select name="hotel" required defaultValue="" className="w-4/5 border border-[#ddd] p-3">
                <option value="" disabled>
                  Seleccione un hotel
                </option>
                <option value="ostende">Hotel Savoia Ostende</option>
                <option value="mendoza">Hotel Savoia Mendoza</option>
                <option value="san bernardo">Hotel Savoia San Bernardo</option>
                <option value="cariló">Puerto Hamlet Cariló</option>
              </select>
            </div>

            <div className="mx-auto mb-5 flex w-4/5 flex-wrap justify-between gap-5">
              <GuestCounter />
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
              <textarea name="message" placeholder="Mensaje" className="h-[200px] w-4/5 border border-[#ddd] p-3" />
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

      <ContactInfoBar />
    </main>
  );
}
```

Note: this page is marked `'use client'` because the inline `onSubmit` handler needs a client component boundary; per the spec's non-goals, submission is a stub `alert`, not a real backend call.

- [ ] **Step 2: Verify in the browser**

```bash
npm run dev
```

Open `http://localhost:3000/contacto` — expected: name/email fields, hotel dropdown, the guest counter (click it to expand +/- steppers for adults/children), two date pickers, a message textarea, and a submit button. Fill it in and submit — expected: an alert saying "Gracias por tu mensaje..." and the form resets. Stop the server.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build contacto page"
```

---

### Task 12: Mendoza page

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/app/mendoza/page.js`

**Interfaces:**
- Consumes: `PhotoRevealCard` (Task 6), `ContactInfoBar` (Task 5), `RevealSection` (Task 5).

Content source: `/Users/chiara/Desktop/Savoia/mendoza.html`.

- [ ] **Step 1: Create `app/mendoza/page.js`**

```jsx
import Image from 'next/image';
import Link from 'next/link';
import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Mendoza' };

const HABITACIONES = [
  { src: '/img/mendoza/habitacion1-mendoza.jpg', alt: 'Habitación Hotel Savoia Mendoza' },
  { src: '/img/mendoza/habitacion2-mendoza.jpg', alt: 'Habitación Hotel Savoia Mendoza' },
];

const SERVICIOS = [
  { src: '/img/mendoza/pileta-mendoza.jpg', alt: 'Pileta climatizada', infoLines: ['PILETA CLIMATIZADA'] },
  { src: '/img/mendoza/paisaje1-mendoza.jpg', alt: 'Paisajes', infoLines: ['PAISAJES INCREIBLES'] },
  { src: '/img/mendoza/salon-de-fiesta.jpg', alt: 'Salón de eventos', infoLines: ['SALÓN DE EVENTOS'] },
  { src: '/img/mendoza/gastronomia-mendoza.jpg', alt: 'Gastronomía Savoia', infoLines: ['GASTRONOMÍA SAVOIA'] },
  { src: '/img/mendoza/cancha-tenis.jpg', alt: 'Cancha de tenis', infoLines: ['CANCHA DE TENIS'] },
  { src: '/img/mendoza/salon-de-juegos.jpg', alt: 'Salón de juegos', infoLines: ['SALÓN DE JUEGOS'] },
];

export default function MendozaPage() {
  return (
    <main>
      <div className="relative flex h-[70vh] w-full items-center justify-center">
        <Image src="/img/home/portada-mendozaaa.jpeg" alt="Hotel Savoia Mendoza" fill priority className="object-cover" />
      </div>

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-center">
        <h2 className="text-3xl font-medium">HOTEL SAVOIA MENDOZA</h2>
        <p className="mt-4">
          Ubicado en el corazón del vino, rodeado de naturaleza.
          <br />
          Hotel Savoia Mendoza es el lugar perfecto para disfrutar de tus vacaciones.
        </p>
        <Link href="/contacto" className="mt-6 inline-block bg-savoia-dark px-5 py-3 text-white">
          Reservar ahora
        </Link>
      </RevealSection>

      <h2 className="text-center text-3xl font-medium">HABITACIONES</h2>
      <RevealSection className="flex flex-wrap justify-center py-6">
        {HABITACIONES.map((room) => (
          <PhotoRevealCard key={room.src} {...room} />
        ))}
      </RevealSection>

      <h2 className="text-center text-3xl font-medium">SERVICIOS</h2>
      <RevealSection className="flex flex-wrap justify-center py-6">
        {SERVICIOS.map((servicio) => (
          <PhotoRevealCard key={servicio.src} {...servicio} />
        ))}
      </RevealSection>

      <h2 className="text-center text-3xl font-medium">UBICACIÓN</h2>
      <div className="flex justify-center py-6">
        <iframe
          title="Ubicación Hotel Savoia Mendoza"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13403.67843106654!2d-68.7812728!3d-32.8738464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0ee88023a90d%3A0x93f08f6380c71b44!2sHotel%20SAVOIA!5e0!3m2!1ses!2sar!4v1729803999933!5m2!1ses!2sar"
          width="1000"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/5tZqW9x7ouJCyS276"
        locationText="Avellaneda 3653, Bermejo - Mendoza"
        phoneHref="tel:1157379702"
        phoneText="Tel: (+54) 11 5737-9702"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the browser**

```bash
npm run dev
```

Open `http://localhost:3000/mendoza` — expected: hero image, title/intro/"Reservar ahora" button (linking to `/contacto`), a 2-photo "Habitaciones" row, a 6-photo "Servicios" hover-reveal grid, an embedded Google Map, and a contact info bar showing the Mendoza address/phone (not the CABA office). Stop the server.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build mendoza page"
```

---

### Task 13: San Bernardo page

**Files:**
- Create: `/Users/chiara/Desktop/savoia-nextjs/app/san-bernardo/page.js`

**Interfaces:**
- Consumes: `PhotoRevealCard` (Task 6), `ContactInfoBar` (Task 5), `RevealSection` (Task 5).

Content source: `/Users/chiara/Desktop/Savoia/san-bernardo.html`.

- [ ] **Step 1: Create `app/san-bernardo/page.js`**

```jsx
import Image from 'next/image';
import Link from 'next/link';
import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | San Bernardo' };

const HABITACIONES = [
  { src: '/img/san-bernardo/san-bernardo-6.jpg', alt: 'Habitación triple', infoLines: ['HABITACIÓN TRIPLE'] },
  { src: '/img/san-bernardo/san-bernardo.jpg', alt: 'Habitación doble', infoLines: ['HABITACIÓN DOBLE'] },
];

export default function SanBernardoPage() {
  return (
    <main>
      <div className="relative flex h-[70vh] w-full items-center justify-center">
        <Image src="/img/san-bernardo/san-bernardo-7.jpg" alt="Hotel Savoia San Bernardo" fill priority className="object-cover" />
      </div>

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-center">
        <h2 className="text-3xl font-medium">HOTEL SAVOIA SAN BERNARDO</h2>
        <p className="mt-4">
          Ubicado en el corazón de la costa, a metros de la playa.
          <br />
          Hotel Savoia San Bernardo es el lugar perfecto para disfrutar de tus vacaciones.
        </p>
        <Link href="/contacto" className="mt-6 inline-block bg-savoia-dark px-5 py-3 text-white">
          Reservar ahora
        </Link>
      </RevealSection>

      <h2 className="text-center text-3xl font-medium">HABITACIONES</h2>
      <RevealSection className="flex flex-wrap justify-center py-6">
        {HABITACIONES.map((room) => (
          <PhotoRevealCard key={room.src} {...room} />
        ))}
      </RevealSection>

      <h2 className="text-center text-3xl font-medium">DESCANSÁ Y RENOVÁ TUS ENERGÍAS CON NOSOTROS</h2>
      <RevealSection className="flex justify-center py-6">
        <div className="relative h-[400px] w-full max-w-[1200px]">
          <Image src="/img/san-bernardo/sala-sanber.jpg" alt="Hotel Savoia San Bernardo" fill className="object-cover" />
        </div>
      </RevealSection>

      <h2 className="text-center text-3xl font-medium">UBICACIÓN</h2>
      <div className="flex justify-center py-6">
        <iframe
          title="Ubicación Hotel Savoia San Bernardo"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12796.569928213892!2d-56.6774767!3d-36.6951139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c6f03f1549355%3A0xe761e17d72025964!2sHotel%20Savoia%20San%20Bernardo!5e0!3m2!1ses!2sar!4v1729802520886!5m2!1ses!2sar"
          width="1000"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/tT5bGSmaVbJpzRU6A"
        locationText="Strobel 2099 - San Bernardo"
        phoneHref="tel:02257460211"
        phoneText="Tel: (02257) 460-211 / 250"
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the browser**

```bash
npm run dev
```

Open `http://localhost:3000/san-bernardo` — expected: hero image, title/intro/"Reservar ahora" button, 2-photo "Habitaciones" row, large lifestyle image, embedded Google Map, and a contact info bar showing the San Bernardo address/phone. Stop the server.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: build san bernardo page"
```

---

### Task 14: Final verification pass

**Files:** none (verification only)

- [ ] **Step 1: Full production build**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
npm run build
```

Expected: build completes with no errors or warnings about missing images/broken imports.

- [ ] **Step 2: Manual click-through**

```bash
npm run start
```

With the production server running on `http://localhost:3000`, check every route:

- `/` — carousel auto-advances, 6 hotel cards fade in, Mendoza/San Bernardo cards now link to working pages, contact bar shows the CABA office.
- `/nosotros` — hero + history text renders, contact bar shows the CABA office.
- `/hoteles` — 5 hover-reveal cards work, external links (Ostende, Puerto Hamlet) open in a new consideration (they'll 404 externally if not live, that's expected — just confirm the `href` is correct), internal links to `/mendoza` and `/san-bernardo` work.
- `/contacto` — all fields fillable, guest counter steppers work, submitting shows the confirmation alert and resets the form.
- `/mendoza` — hero, CTA to `/contacto`, habitaciones + servicios grids, map embed loads, contact bar shows the Mendoza address/phone.
- `/san-bernardo` — hero, CTA to `/contacto`, habitaciones row, large image, map embed loads, contact bar shows the San Bernardo address/phone.
- On every page: header nav highlights the current page (desktop), hamburger menu opens/closes smoothly (resize the window below `768px` or use responsive dev tools), WhatsApp button is visible bottom-right and links to `wa.me/5491158958380`, footer shows the current year.

Stop the server (Ctrl+C) once everything checks out.

- [ ] **Step 3: Confirm the original site is untouched**

```bash
git -C /Users/chiara/Desktop/Savoia status 2>&1 || echo "not a git repo, checking mtimes instead"
ls -la /Users/chiara/Desktop/Savoia/*.html
```

Expected: no changes to any file under `/Users/chiara/Desktop/Savoia` (modification times unchanged from before this project started).

- [ ] **Step 4: Final commit**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
git add -A
git commit -m "chore: final verification pass" --allow-empty
```
