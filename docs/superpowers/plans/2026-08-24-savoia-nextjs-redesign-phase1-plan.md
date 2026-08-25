# Savoia Redesign — Phase 1 (Design System + Pilot Pages) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the site's cool navy palette with a warm-neutral design system (sand/stone/charcoal/taupe + the existing gold accent), establish a type/spacing scale, redesign every shared component, add two new primitives (`Button`, `FormField`), and prove the whole system on two pilot pages (`/hoteles`, `/contacto`) — without touching the other 19 pages' code.

**Architecture:** A token-aliasing strategy is the core mechanism: the legacy Tailwind color token names (`savoia-dark`, `savoia-footer`, `savoia-light`) stay defined but get new hex values pointing at the warm palette, so every one of the 19 not-yet-migrated pages picks up the new colors automatically with zero code changes. New/touched code in this phase uses the new semantic token names directly.

**Tech Stack:** Next.js (JavaScript, App Router), Tailwind CSS v4, Framer Motion, lucide-react — unchanged, no new dependencies.

**Spec:** `docs/superpowers/specs/2026-08-24-savoia-nextjs-redesign-phase1-design.md` (copied into the project in Task 1).

## Global Constraints

- Extends the existing project at `/Users/chiara/Desktop/savoia-nextjs` (git branch `main`).
- Gill Sans stays the only typeface — no typography/font changes.
- No new photography — same image files, presentation only.
- `WhatsAppFloat`'s green is out of scope (platform-required color, not part of the site's palette).
- The 19 pages outside this phase's scope (Home, Nosotros, Mendoza, San Bernardo, all 15 Ostende pages) get NO code changes — they inherit the new palette only via the token-alias mechanism in Task 1.
- No behavior changes to the contact form — still a stub `alert()` on submit.
- No automated test suite — verification is `npm run build` passing cleanly plus route-by-route `curl`/`grep` checks (no real browser in this environment).
- Exact token values: `savoia-sand #F7F4EF`, `savoia-stone #EDE7DC`, `savoia-charcoal #2B2823`, `savoia-taupe #948C7E`, `savoia-accent #F7C08A` (unchanged value).

---

### Task 1: Design tokens

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.js`

**Interfaces:**
- Produces: 5 new Tailwind color utilities (`bg-savoia-sand`, `bg-savoia-stone`, `bg-savoia-charcoal`, `text-savoia-taupe`, etc.) plus 3 legacy names (`savoia-dark`, `savoia-footer`, `savoia-light`) now pointing at the new palette — every later task and every untouched page relies on this.

- [ ] **Step 1: Replace `app/globals.css`'s `@theme` block**

```css
@import "tailwindcss";

@theme {
  /* Warm-neutral palette */
  --color-savoia-sand: #F7F4EF;
  --color-savoia-stone: #EDE7DC;
  --color-savoia-charcoal: #2B2823;
  --color-savoia-taupe: #948C7E;
  --color-savoia-accent: #F7C08A;

  /* Legacy token names kept as aliases so the 19 pages not yet migrated in
     this phase automatically pick up the new palette with zero code changes. */
  --color-savoia-dark: #2B2823;
  --color-savoia-footer: #2B2823;
  --color-savoia-light: #EDE7DC;

  --color-whatsapp-green: #25D366;
  --font-sans: "Gill Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}

body {
  margin: 0;
  background: #F7F4EF;
}
```

- [ ] **Step 2: Update `app/layout.js`'s body text color**

Change:
```jsx
<body className="font-sans text-[#333]">
```
to:
```jsx
<body className="font-sans text-savoia-charcoal">
```

- [ ] **Step 3: Copy the redesign spec and this plan into the project, and commit**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
mkdir -p docs/superpowers/specs docs/superpowers/plans
cp /private/tmp/claude-501/-Users-chiara-Desktop-Savoia/624764ef-1247-47e3-9366-23c1ccb71cbf/scratchpad/2026-08-24-savoia-nextjs-redesign-phase1-design.md docs/superpowers/specs/
cp /private/tmp/claude-501/-Users-chiara-Desktop-Savoia/624764ef-1247-47e3-9366-23c1ccb71cbf/scratchpad/2026-08-24-savoia-nextjs-redesign-phase1-plan.md docs/superpowers/plans/
```

- [ ] **Step 4: Verify the build and a sample of the NOT-yet-migrated pages**

```bash
lsof -i :3000 -sTCP:LISTEN -t 2>/dev/null | xargs -r kill
npm run build
npm run start &
sleep 3
curl -s http://localhost:3000/ | grep -o 'bg-savoia-dark\|bg-savoia-light\|bg-savoia-footer' | sort -u
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/mendoza
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/ostende
kill %1
lsof -i :3000 2>&1 || echo "port 3000 free"
```

Expected: build clean, all 3 sampled routes return 200 — confirms the token rename didn't break anything for pages this phase never touches (they still reference the legacy class names, which now resolve to the new palette automatically).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: replace navy palette with warm-neutral design tokens"
```

---

### Task 2: Header and OstendeHeader

**Files:**
- Modify: `components/Header.jsx`
- Modify: `components/OstendeHeader.jsx`

**Interfaces:**
- Consumes: `savoia-sand`, `savoia-charcoal`, `savoia-accent` tokens (Task 1).
- Produces: no prop/signature changes — both components keep their existing `<Header />` / `<OstendeHeader />` (no props) interface, only their internal styling changes.

Both files get the identical treatment — only their `NAV_LINKS` array and logo differ, which are untouched.

- [ ] **Step 1: In `components/Header.jsx`, replace the header background**

Change:
```jsx
<header className="bg-white">
```
to:
```jsx
<header className="bg-savoia-sand">
```

- [ ] **Step 2: Replace the desktop nav link markup**

Change:
```jsx
<Link
  href={link.href}
  className={`block px-8 py-8 text-center transition-colors hover:bg-[#ece9e3] ${
    pathname === link.href ? 'bg-[#ece9e3]' : ''
  }`}
>
  {link.label}
</Link>
```
to:
```jsx
<Link
  href={link.href}
  className={`group relative block px-8 py-8 text-center text-sm tracking-wide transition-colors ${
    pathname === link.href ? 'text-savoia-charcoal' : 'text-savoia-charcoal/70 hover:text-savoia-charcoal'
  }`}
>
  {link.label}
  <span
    className={`absolute bottom-6 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-savoia-accent transition-transform duration-300 ${
      pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
    }`}
  />
</Link>
```

- [ ] **Step 3: Replace the mobile menu panel background**

Change:
```jsx
className="fixed bottom-0 right-0 top-0 z-50 w-64 bg-white p-6 shadow-lg"
```
to:
```jsx
className="fixed bottom-0 right-0 top-0 z-50 w-64 bg-savoia-sand p-6 shadow-lg"
```

- [ ] **Step 4: Apply the identical three changes to `components/OstendeHeader.jsx`**

Same three replacements (header bg, nav link markup, mobile panel bg) — the file is structurally identical to `Header.jsx` apart from `NAV_LINKS` and the logo `src`/`alt`, which stay untouched.

- [ ] **Step 5: Build check**

```bash
npm run build
```

- [ ] **Step 6: Verify in the dev server**

```bash
npm run start &
sleep 3
curl -s http://localhost:3000/ | grep -o 'bg-savoia-sand' | head -1
curl -s http://localhost:3000/ostende | grep -o 'bg-savoia-sand' | head -1
kill %1
lsof -i :3000 2>&1 || echo "port 3000 free"
```

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: redesign Header and OstendeHeader for the warm-neutral system"
```

---

### Task 3: Footer

**Files:**
- Modify: `components/Footer.jsx`

**Interfaces:**
- Consumes: `savoia-stone` token (Task 1). `savoia-footer` (already aliased to charcoal) is unchanged.
- Produces: no interface change — still `<Footer />`, no props.

- [ ] **Step 1: Replace `components/Footer.jsx`'s content**

```jsx
export default function Footer() {
  return (
    <footer className="bg-savoia-footer py-10 text-center text-savoia-stone/70">
      <p>Hoteles Savoia &copy; {new Date().getFullYear()} - Todos los derechos reservados</p>
    </footer>
  );
}
```

- [ ] **Step 2: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: restyle Footer for the warm-neutral system"
```

---

### Task 4: ContactInfoBar

**Files:**
- Modify: `components/ContactInfoBar.jsx`

**Interfaces:**
- Consumes: `savoia-accent`, `savoia-stone` tokens (Task 1).
- Produces: no prop signature change — same 6 optional override props as before.

- [ ] **Step 1: Replace `components/ContactInfoBar.jsx`'s content**

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
      <div className="mx-auto flex max-w-[1100px] flex-col justify-center gap-10 px-6 py-16 md:flex-row md:px-8">
        {items.map(({ Icon, title, href, text }) => (
          <div key={title} className="flex-1 text-center">
            <a href={href} className="text-white">
              <span className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-savoia-accent/15 text-savoia-accent">
                <Icon size={28} />
              </span>
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-savoia-stone/70">{title}</h3>
            </a>
            <a href={href} className="mt-2 block text-white">
              {text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

- [ ] **Step 3: Verify in the dev server**

```bash
npm run start &
sleep 3
curl -s http://localhost:3000/hoteles | grep -o 'bg-savoia-accent/15' | head -1
kill %1
lsof -i :3000 2>&1 || echo "port 3000 free"
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: restyle ContactInfoBar with circular icon badges"
```

---

### Task 5: GuestCounter

**Files:**
- Modify: `components/GuestCounter.jsx`

**Interfaces:**
- Consumes: `savoia-taupe`, `savoia-charcoal`, `savoia-accent` tokens (Task 1).
- Produces: no signature change — still `<GuestCounter adultsName? childrenName? />`.

- [ ] **Step 1: Replace `components/GuestCounter.jsx`'s content**

```jsx
'use client';

import { useState } from 'react';

export default function GuestCounter({ adultsName = 'adults', childrenName = 'children' }) {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="relative mx-auto mb-5 w-full max-w-[400px]">
      <label htmlFor="guest-field" className="mb-1 block text-left text-xs font-medium uppercase tracking-[0.15em] text-savoia-taupe">
        Cantidad de huéspedes
      </label>
      <button
        type="button"
        id="guest-field"
        onClick={() => setOpen((o) => !o)}
        className="flex w-4/5 items-center border-b border-savoia-taupe/40 bg-transparent p-2 text-left transition-colors hover:border-savoia-charcoal"
      >
        {adults} Adulto{adults !== 1 ? 's' : ''}, {children} Menor{children !== 1 ? 'es' : ''}
      </button>

      {open && (
        <div className="absolute left-0 top-full z-10 rounded border border-savoia-taupe/40 bg-savoia-sand p-3 shadow-md">
          <Stepper label="Adultos" value={adults} min={1} onChange={setAdults} />
          <Stepper label="Menores (menor de 12 años)" value={children} min={0} onChange={setChildren} />
        </div>
      )}

      <input type="hidden" name={adultsName} value={adults} />
      <input type="hidden" name={childrenName} value={children} />
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
        className="h-8 w-8 rounded-full bg-savoia-charcoal text-savoia-sand transition-colors hover:bg-savoia-accent hover:text-savoia-charcoal"
      >
        -
      </button>
      <input readOnly value={value} className="w-12 border border-savoia-taupe/40 bg-transparent text-center" />
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="h-8 w-8 rounded-full bg-savoia-charcoal text-savoia-sand transition-colors hover:bg-savoia-accent hover:text-savoia-charcoal"
      >
        +
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: restyle GuestCounter for the warm-neutral system"
```

---

### Task 6: Realign PhotoRevealCard and HotelCard to the new tokens

**Files:**
- Modify: `components/PhotoRevealCard.jsx`
- Modify: `components/HotelCard.jsx`

**Interfaces:**
- Consumes: `savoia-charcoal` token (Task 1). No prop signature changes to either component — both were already redesigned in a prior session; this task only re-points their remaining hardcoded/legacy color references at the new palette.

- [ ] **Step 1: In `components/PhotoRevealCard.jsx`, recolor the overlay gradient from neutral black to charcoal-tinted**

Change:
```jsx
<div className="absolute inset-x-0 bottom-0 max-h-16 overflow-hidden bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pb-3 pt-8 transition-[max-height] duration-300 ease-out group-hover:max-h-40">
```
to:
```jsx
<div className="absolute inset-x-0 bottom-0 max-h-16 overflow-hidden bg-gradient-to-t from-savoia-charcoal/95 via-savoia-charcoal/60 to-transparent px-4 pb-3 pt-8 transition-[max-height] duration-300 ease-out group-hover:max-h-40">
```

- [ ] **Step 2: In `components/HotelCard.jsx`, replace the two hardcoded `#333` references with the `savoia-charcoal` token**

Change:
```jsx
<span className="my-3 h-px w-10 bg-[#333]/15" />
<a href={addressHref} className="text-sm text-[#333]/75 transition-colors hover:text-savoia-dark">
```
to:
```jsx
<span className="my-3 h-px w-10 bg-savoia-charcoal/15" />
<a href={addressHref} className="text-sm text-savoia-charcoal/75 transition-colors hover:text-savoia-dark">
```

(`text-[#333]` in the outer wrapper div's className is left as-is if present elsewhere — check the file for any other `#333` occurrence beyond these two and apply the same token swap if found.)

- [ ] **Step 3: Build check**

```bash
npm run build
```

- [ ] **Step 4: Verify in the dev server**

```bash
npm run start &
sleep 3
curl -s http://localhost:3000/hoteles | grep -o 'from-savoia-charcoal' | head -1
curl -s http://localhost:3000/ | grep -o 'bg-savoia-charcoal/15' | head -1
kill %1
lsof -i :3000 2>&1 || echo "port 3000 free"
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: realign PhotoRevealCard and HotelCard colors to the warm-neutral tokens"
```

---

### Task 7: HeroBand scrim (VideoHero verified, no change needed)

**Files:**
- Modify: `components/HeroBand.jsx`

**Interfaces:**
- Consumes: `savoia-charcoal` token (Task 1).
- Produces: no prop signature change — still `<HeroBand imageSrc imageAlt title? />`.

`components/VideoHero.jsx` is deliberately left unchanged in this task: it has no title/caption prop and none of its current call sites pass one, so a decorative scrim would only ever darken the video for no functional reason — that's scope creep the spec didn't actually need (YAGNI). If a caption is ever added to `VideoHero` in a later phase, add the same scrim treatment then.

- [ ] **Step 1: Add a bottom gradient scrim behind `HeroBand`'s title for legibility**

Change:
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
to:
```jsx
export default function HeroBand({ imageSrc, imageAlt, title }) {
  return (
    <div className="relative flex h-[50vh] w-full items-center justify-center md:h-[70vh]">
      <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
      {title && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-savoia-charcoal/70 via-savoia-charcoal/10 to-transparent" />
          <h1 className="relative z-10 px-4 text-center text-4xl font-medium tracking-tight text-white md:text-5xl">
            {title}
          </h1>
        </>
      )}
    </div>
  );
}
```

(The scrim only renders when `title` is present — pages using `HeroBand` with no title, per the earlier Ostende plan's ruling for pages with no visible `<h1>` in the source, get no scrim either, matching that no photo needs darkening if there's no text sitting on top of it.)

- [ ] **Step 2: Build check**

```bash
npm run build
```

- [ ] **Step 3: Verify in the dev server**

```bash
npm run start &
sleep 3
curl -s http://localhost:3000/ostende/categoria-ejecutiva | grep -o 'from-savoia-charcoal/70' | head -1
kill %1
lsof -i :3000 2>&1 || echo "port 3000 free"
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add legibility scrim to HeroBand titles"
```

---

### Task 8: AmenityDetail

**Files:**
- Modify: `components/AmenityDetail.jsx`

**Interfaces:**
- Consumes: `savoia-taupe`, `savoia-accent` tokens (Task 1).
- Produces: no prop signature change — still `<AmenityDetail images title detailLines />`.

- [ ] **Step 1: Replace `components/AmenityDetail.jsx`'s content**

```jsx
import Carousel from '@/components/Carousel';

export default function AmenityDetail({ images, title, detailLines }) {
  return (
    <section className="flex flex-col gap-8 px-6 py-10 md:flex-row md:px-8 md:py-16">
      <div className="md:w-1/2">
        <Carousel slides={images} />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-medium">{title}</h2>
        <span className="mb-6 mt-2 block h-0.5 w-10 bg-savoia-accent" />
        {detailLines.map(({ label, text }) => (
          <div key={label} className="mb-4">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-savoia-taupe">{label}</p>
            <p className="mt-1">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: restyle AmenityDetail's labels and add accent underline"
```

---

### Task 9: SplitContent

**Files:**
- Modify: `components/SplitContent.jsx`

**Interfaces:**
- Consumes: `savoia-accent` token (Task 1).
- Produces: no prop signature change.

- [ ] **Step 1: Replace `components/SplitContent.jsx`'s content**

```jsx
import Image from 'next/image';

export default function SplitContent({ imageSrc, imageAlt, imageSide = 'left', title, subtitle, paragraphs }) {
  const image = (
    <div className="relative h-[300px] md:h-auto md:flex-1">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </div>
  );
  const text = (
    <div className="flex flex-col justify-center gap-3 px-6 py-12 md:flex-1 md:px-10 md:py-16">
      <h2 className="text-2xl font-medium">{title}</h2>
      <span className="block h-0.5 w-10 bg-savoia-accent" />
      {subtitle && <h3 className="text-lg text-savoia-taupe">{subtitle}</h3>}
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

- [ ] **Step 2: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: restyle SplitContent with accent underline and new spacing"
```

---

### Task 10: New `Button` component

**Files:**
- Create: `components/Button.jsx`

**Interfaces:**
- Produces: `<Button href? type? className?>{children}</Button>` — renders a `next/link` `<Link>` when `href` is provided, otherwise a `<button>` (defaulting `type` to `'button'`, so callers must pass `type="submit"` explicitly for form submission — matching standard HTML button semantics).

- [ ] **Step 1: Create `components/Button.jsx`**

```jsx
import Link from 'next/link';

export default function Button({ href, children, type = 'button', className = '' }) {
  const classes = `inline-block bg-savoia-charcoal px-6 py-3 text-sm font-medium uppercase tracking-wide text-savoia-sand transition-colors duration-300 hover:bg-savoia-accent hover:text-savoia-charcoal ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

Expected: clean build (not consumed by any page yet — this task only verifies the file compiles; Task 12 wires it into `/contacto`).

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Button component"
```

---

### Task 11: New `FormField` component

**Files:**
- Create: `components/FormField.jsx`

**Interfaces:**
- Produces: `<FormField label name type? required? as? className? children? {...rest} />`.
  - `as`: `'input'` (default), `'textarea'`, or `'select'`.
  - `type`: only relevant when `as='input'` (defaults to `'text'`; pass `'email'`, `'date'`, etc.).
  - `children`: only relevant when `as='select'` (the `<option>` elements).
  - Any other prop (`defaultValue`, `rows`, `readOnly`, etc.) is spread onto the underlying field element via `{...rest}`.
  - `select` and `type="date"` fields render with a static label always above the field (neither supports the CSS `:placeholder-shown` trick reliably). `text`/`email`/`textarea` fields render with a floating label that starts inside the field and floats up on focus or once filled, implemented with pure CSS (`peer` + `:placeholder-shown`) — no component state.

- [ ] **Step 1: Create `components/FormField.jsx`**

```jsx
export default function FormField({ label, name, type = 'text', required, className = '', as = 'input', children, ...rest }) {
  const useStaticLabel = as === 'select' || type === 'date';

  if (useStaticLabel) {
    const Tag = as;
    return (
      <div className={className}>
        <label htmlFor={name} className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-savoia-taupe">
          {label}
        </label>
        <Tag
          id={name}
          name={name}
          {...(as === 'input' ? { type } : {})}
          required={required}
          className="w-full border-b border-savoia-taupe/40 bg-transparent px-1 pb-2 pt-1 text-savoia-charcoal outline-none transition-colors focus:border-savoia-charcoal"
          {...rest}
        >
          {children}
        </Tag>
      </div>
    );
  }

  const Tag = as;
  return (
    <div className={`relative ${className}`}>
      <Tag
        id={name}
        name={name}
        {...(as === 'input' ? { type } : {})}
        required={required}
        placeholder=" "
        className="peer w-full border-b border-savoia-taupe/40 bg-transparent px-1 pb-2 pt-5 text-savoia-charcoal outline-none transition-colors focus:border-savoia-charcoal"
        {...rest}
      >
        {children}
      </Tag>
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-1 top-5 text-savoia-taupe transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-[0.1em] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:tracking-[0.1em]"
      >
        {label}
      </label>
    </div>
  );
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add FormField component"
```

---

### Task 12: Pilot page — `/contacto`

**Files:**
- Modify: `app/(main)/contacto/page.js`

**Interfaces:**
- Consumes: `Button({ href?, type?, className? })` (Task 10), `FormField({ label, name, type?, required?, as?, className?, children?, ...rest })` (Task 11), `GuestCounter()` (unchanged, Task 5), `ContactInfoBar()` (unchanged, Task 4).

Content, field names, and validation stay identical to the current form — this task only replaces the raw HTML form elements with the new components.

- [ ] **Step 1: Replace `app/(main)/contacto/page.js`'s content**

```jsx
'use client';

import GuestCounter from '@/components/GuestCounter';
import ContactInfoBar from '@/components/ContactInfoBar';
import FormField from '@/components/FormField';
import Button from '@/components/Button';

export default function ContactoPage() {
  return (
    <main>
      <section className="bg-savoia-stone py-16 text-center md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-8">
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">CONTACTO</h1>
          <span className="mx-auto mt-4 block h-0.5 w-10 bg-savoia-accent" />
          <h3 className="mt-4 text-lg text-savoia-taupe">¡Contactanos y viví una experiencia inolvidable!</h3>

          <form
            className="mx-auto mt-10 max-w-[600px] text-left"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Gracias por tu mensaje. Te contactaremos a la brevedad.');
              e.target.reset();
            }}
          >
            <FormField label="Nombre y apellido" name="name" required className="mb-6" />
            <FormField label="Email" name="email" type="email" required className="mb-6" />
            <FormField label="Hotel" name="hotel" as="select" required defaultValue="" className="mb-6">
              <option value="" disabled>
                Seleccione un hotel
              </option>
              <option value="ostende">Hotel Savoia Ostende</option>
              <option value="mendoza">Hotel Savoia Mendoza</option>
              <option value="san bernardo">Hotel Savoia San Bernardo</option>
              <option value="cariló">Puerto Hamlet Cariló</option>
            </FormField>

            <div className="mb-6">
              <GuestCounter />
            </div>

            <div className="mb-6 flex flex-wrap gap-5">
              <FormField label="Fecha de entrada" name="fecha-entrada" type="date" required className="flex-1" />
              <FormField label="Fecha de salida" name="fecha-salida" type="date" required className="flex-1" />
            </div>

            <FormField label="Mensaje" name="message" as="textarea" rows={5} className="mb-8" />

            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </section>

      <ContactInfoBar />
    </main>
  );
}
```

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/contacto | grep -o 'name="name"\|name="email"\|name="hotel"\|name="fecha-entrada"\|name="fecha-salida"\|name="message"'
curl -s http://localhost:3000/contacto | grep -o 'peer w-full border-b' | head -1
kill %1
lsof -i :3000 2>&1 || echo "port 3000 free"
```

Expected: all 6 field-name markers present, `FormField`'s floating-label class present.

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: modernize the /contacto form with FormField and Button"
```

---

### Task 13: Pilot page — `/hoteles`

**Files:**
- Modify: `app/(main)/hoteles/page.js`

**Interfaces:**
- Consumes: `PhotoRevealCard` (Task 6), `ContactInfoBar` (Task 4), `RevealSection` (unchanged).

Only the wrapping section's classes change — the `CARDS` data array stays byte-for-byte identical (same photos, same content, per the spec's non-goals).

- [ ] **Step 1: Update the `RevealSection` wrapper's className**

Change:
```jsx
<RevealSection className="flex flex-wrap justify-center bg-savoia-light py-10">
```
to:
```jsx
<RevealSection className="flex flex-wrap justify-center bg-savoia-stone py-16 md:py-24">
```

Nothing else in the file changes — the `CARDS` array and the `<main>`/`<ContactInfoBar />` structure stay exactly as they are.

- [ ] **Step 2: Verify in the dev server**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/hoteles | grep -o 'bg-savoia-stone py-16' | head -1
kill %1
lsof -i :3000 2>&1 || echo "port 3000 free"
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build
git add -A
git commit -m "feat: apply the new spacing scale to /hoteles"
```

---

### Task 14: Final verification pass

**Files:** none (verification only)

- [ ] **Step 1: Full production build**

```bash
cd /Users/chiara/Desktop/savoia-nextjs
lsof -i :3000 -sTCP:LISTEN -t 2>/dev/null | xargs -r kill
npm run build
```

Expected: clean build, all 21 routes still listed.

- [ ] **Step 2: Route-by-route check — confirm nothing broke on the 19 untouched pages, and the 2 pilots show the new system**

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

# Confirm the token alias is doing its job on an untouched page
curl -s http://localhost:3000/ | grep -o 'bg-savoia-dark\|bg-savoia-light'

# Confirm the pilot pages show the redesigned system
curl -s http://localhost:3000/hoteles | grep -o 'bg-savoia-stone'
curl -s http://localhost:3000/contacto | grep -o 'peer w-full border-b'

# Confirm the shared-component redesigns (Tasks 7-9) reach their REAL consumers,
# not just the 2 declared pilot pages — HeroBand/AmenityDetail are used across
# 9 Ostende pages this plan never edits directly, only via the component change.
curl -s http://localhost:3000/ostende/categoria-ejecutiva | grep -o 'from-savoia-charcoal/70' | head -1
curl -s http://localhost:3000/ostende/bar-saintjean | grep -o 'tracking-\[0.15em\] text-savoia-taupe' | head -1

# Confirm Carousel.jsx has no leftover hardcoded colors (spec explicitly called
# this out as "no code change expected, verify during implementation")
grep -oE '#[0-9a-fA-F]{3,6}|bg-\[[^]]*\]|text-\[[^]]*\]' components/Carousel.jsx || echo "Carousel.jsx: no hardcoded colors found"

kill %1
lsof -i :3000 2>&1 || echo "port 3000 free"
```

Expected: all 21 routes return 200; the untouched home page still references the legacy token names (proving the alias mechanism is what's carrying the new palette there, not a page edit); both pilot pages show their new markup; the HeroBand scrim and AmenityDetail label style both show up on Ostende pages this plan never touched directly; `Carousel.jsx` grep returns nothing (confirming it needed no changes).

- [ ] **Step 3: Note the manual-browser gap for the human**

No real browser exists in this environment — the actual aesthetic (does the new palette/spacing/component styling look right) can only be judged by opening `npm run dev` in a browser. Flag this clearly: Phase 1's code-level verification (build clean, routes 200, expected classes present) is complete, but the visual review is the user's to do before Phase 2 (rolling the same system out to the remaining 19 pages) proceeds.

- [ ] **Step 4: Final commit**

```bash
git commit -m "chore: final verification pass for redesign phase 1" --allow-empty
```
