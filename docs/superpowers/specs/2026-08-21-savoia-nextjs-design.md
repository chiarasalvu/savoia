# Savoia — Next.js/Tailwind/Framer Motion prototype — Design

## Context

`chiarasalvucci1@gmail.com` maintains the Savoia hotels website as static HTML/CSS at
`/Users/chiara/Desktop/Savoia` (pages: `index.html`, `nosotros.html`, `hoteles.html`,
`contacto.html`, `mendoza.html`, `san-bernardo.html`, plus a separate `ostende/` micro-site,
shared `css/style.css` + `mobile.css`, and images under `img/`).

This is a **personal learning prototype**: rebuild the same six pages with Next.js (App
Router), Tailwind CSS, and Framer Motion, in a brand-new project folder. The existing
`Savoia` folder and live site are not touched. No CMS, no working contact form backend,
no analytics, no automated tests — the goal is a working, good-looking recreation to
practice the stack, not a production replacement.

## Goals

- New project at `/Users/chiara/Desktop/savoia-nextjs`, created with `create-next-app`
  (JavaScript, App Router, Tailwind CSS, ESLint).
- Six routes mirroring the current site's structure and content:
  `/`, `/nosotros`, `/hoteles`, `/contacto`, `/mendoza`, `/san-bernardo`.
- Shared `Header` (logo + animated hamburger nav) and `Footer` in `app/layout.tsx`.
- Visual language ported from `css/style.css` into Tailwind (colors, spacing, typography),
  not a pixel-perfect clone — cleaned up where Tailwind's defaults are simpler.
- Framer Motion used purposefully in three places: home image carousel, mobile menu
  open/close, and scroll-reveal on card/section entrances.
- Icons via `lucide-react` (confirmed with user) instead of Font Awesome.

## Non-goals

- No working `/contacto` form submission (formspree action dropped; form is UI-only,
  or a simple `alert`/console stub — decide at implementation time, no backend work).
- No Google Analytics / gtag.
- No `.swf` carousel remnants (dead Flash asset in the original, already unused).
- No SEO/meta polish beyond basic `<title>`/`<meta description>` per page.
- No automated tests; manual check in the browser is enough for a prototype.
- `ostende/` micro-site stays out of scope — the "Hotel Savoia Ostende" card/link in
  `hoteles`/home just links out as before (can be a plain external `<a>`, or omitted
  if there's nothing to link to yet — implementation can point it at `#` if unsure).

## Project structure

```
savoia-nextjs/
  app/
    layout.js            # Header + Footer + WhatsApp float wrap all pages
    page.js               # / (home)
    nosotros/page.js
    hoteles/page.js
    contacto/page.js
    mendoza/page.js
    san-bernardo/page.js
    globals.css          # Tailwind directives + @font-face fallback stack
  components/
    Header.jsx             # logo, desktop nav, animated mobile menu (client component)
    Footer.jsx
    WhatsAppFloat.jsx
    Carousel.jsx           # home hero image carousel (client, Framer Motion)
    HotelCard.jsx           # reusable card used on home + hoteles (hover reveal)
    ContactInfoBar.jsx      # the location/phone/email 3-box section reused on every page
    RevealSection.jsx       # thin wrapper: fade/slide-in on scroll via whileInView
  public/
    img/...                # copied 1:1 from the current site's img/ folder
  docs/
    superpowers/specs/2026-08-21-savoia-nextjs-design.md   # this file, committed
```

## Page-by-page content mapping

- **Home (`/`)**: 3-image auto-advancing carousel (Ostende entrance, portada, Mendoza
  portada) → `Carousel`. Grid of 6 `HotelCard`s (Ostende, Puerto Hamlet, Mendoza, San
  Bernardo, Córdoba, Molise Viajes) with name/address/phone, each linking out per the
  original `href`s. `ContactInfoBar`. `WhatsAppFloat`.
- **Nosotros (`/nosotros`)**: hero image band (`nosotros.jpeg`), "Nuestra Historia" copy
  block (ported verbatim, Spanish text as in `nosotros.html`), `ContactInfoBar`.
- **Hoteles (`/hoteles`)**: 6 photo cards (`imagen1`–`imagen6` in the CSS) with
  hover-reveal overlay showing hotel name + address + phone + "Ver más", each linking
  out. `ContactInfoBar`.
- **Contacto (`/contacto`)**: form UI — name, email, hotel `<select>` (4 options), a
  guest counter widget (adults/children +/- stepper, client component with local
  state), check-in/check-out date inputs, message textarea, submit button (no real
  submission — see Non-goals). `ContactInfoBar`.
- **Mendoza (`/mendoza`)**: hero image band, title + intro + "Reservar ahora" CTA
  (→ `/contacto`), "Habitaciones" 2-photo row, "Servicios" 6-photo hover-reveal grid
  (pileta, paisajes, salón de eventos, gastronomía, cancha de tenis, salón de juegos),
  embedded Google Maps iframe, `ContactInfoBar`.
- **San Bernardo (`/san-bernardo`)**: hero image band, title + intro + CTA, 2-photo
  "Habitaciones" row, one large lifestyle image, embedded Google Maps iframe,
  `ContactInfoBar`.

All addresses, phone numbers, `tel:`/`mailto:`/Google Maps links are ported verbatim
from the current HTML.

## Styling → Tailwind mapping

Key tokens pulled from `style.css`, defined as Tailwind theme extensions in
`tailwind.config.js` so component code reads as `bg-savoia-dark` etc. instead of raw hex:

| Token | Hex | Original usage |
|---|---|---|
| `savoia-dark` | `#373f47` | buttons, `.bg-dark` sections |
| `savoia-footer` | `#333c46` | footer background |
| `savoia-light` | `#f4f4f4` | light section backgrounds, cards |
| `savoia-accent` | `#f7c08a` | `.text-primary` accent (sparingly used) |
| `whatsapp-green` | `#25D366` | floating WhatsApp button |

Font: `'Gill Sans'` isn't a web font in the original (relies on it being installed
locally, e.g. macOS) — keep it as the first choice in a Tailwind `fontFamily.sans`
stack with system sans-serif fallbacks (`ui-sans-serif`, `system-ui`, etc.), no
`@font-face`/Google Fonts needed.

Layout patterns to recreate with Tailwind utilities instead of the original's custom
CSS: `.container`/`.container2` → `max-w-[1100px] mx-auto px-5`; the hover-reveal photo
cards (`#imagenN` + `#info`) → a `group` + `group-hover:opacity-100` pattern; the
guest-counter dropdown → Tailwind for layout, React state for open/close instead of
inline `onclick` handlers.

## Animation → Framer Motion

1. **`Carousel`** (home): `AnimatePresence` + `motion.img` cross-fade or slide,
   auto-advance every ~4s via `useEffect` interval, pause-on-hover optional.
2. **`Header` mobile menu**: `motion.div` slide-in from the right with fade, animated
   hamburger → X icon (`lucide-react` `Menu`/`X`, or a simple rotate transform).
3. **`RevealSection`**: wraps hotel cards / content blocks, `initial={{opacity:0,
   y:20}}`, `whileInView={{opacity:1,y:0}}`, `viewport={{once:true}}` — applied to the
   `HotelCard` grids, the Mendoza/San Bernardo services grids, and the about-text
   blocks.
4. Hover-reveal photo cards use CSS-only `group-hover` (no Framer Motion needed there —
   it's an instant/short transition, not worth the extra client JS).

## Assets

Copy `img/` from the current site into `public/img/` with the same subfolder layout
(`home/`, `hoteles/`, `mendoza/`, `san-bernardo/`, plus `logo-savoia.jpg`, `icon.jpg`,
`hotel.jpg`, `nosotros.jpeg`). Skip `.swf` files (dead Flash asset) and `.DS_Store`.
Use Next's `<Image>` where a fixed/known aspect ratio makes sense (hero bands, cards);
plain `<img>` is fine for the carousel if `<Image>`'s `fill` mode adds friction.

## Verification

Since there's no automated test suite for this prototype: `npm run dev`, click through
all six routes, confirm nav (desktop + mobile hamburger), carousel auto-advances,
hover-reveal cards work, contact form fields are usable (no submission), maps embeds
load, WhatsApp float link opens `wa.me`. `npm run build` should complete with no
type/lint errors before calling it done.
