# Savoia Next.js — Site-wide Redesign, Phase 1 (Design System + Pilot Pages)

## Context

`chiarasalvucci1@gmail.com` wants a full modernization of the Savoia hotels Next.js
site (`/Users/chiara/Desktop/savoia-nextjs` — 21 routes across the parent site and
the Ostende micro-site, built across two prior plans). The request covers margins,
spacing, typography scale, every shared component, the contact form, and photo
presentation, while explicitly keeping the palette minimal/neutral and keeping Gill
Sans as the typeface.

Given the size (21 pages + ~13 shared components), the user chose a phased approach:
**this spec is Phase 1 only** — the design system itself (tokens, spacing/type scale)
plus every *shared* component, applied end-to-end on two pilot pages (`/hoteles` and
`/contacto`) so the direction can be reviewed on real pages before the remaining 19
pages are migrated in a separate Phase 2 plan. Phase 2 is out of scope here — it will
reuse the tokens and components this phase establishes, applying spacing/token
touch-ups page by page.

## Goals

- Replace the current cool navy palette (`#373f47` navy, `#f4f4f4` cool gray) with a
  warm neutral palette (sand/stone/charcoal/taupe) plus the client's existing gold
  accent (`#f7c08a`, already defined but almost unused on the live site) used as the
  one deliberate color signature — a thin gold hairline rule as a recurring
  structural device (dividers, hover states, underlines).
- Keep Gill Sans as the typeface (client's explicit choice) but establish an
  intentional type scale instead of the current page-by-page ad hoc sizing.
- Establish a consistent spacing/rhythm scale — current sections feel cramped
  (`py-6`/`py-10`); modern hospitality sites read as more spacious.
- Redesign every *shared* component's visual treatment: `Header`, `OstendeHeader`,
  `Footer`, `ContactInfoBar`, `GuestCounter`, `Carousel`, `HeroBand`, `VideoHero`,
  `AmenityDetail`, `SplitContent` (plus the already-redesigned `PhotoRevealCard`/
  `HotelCard`, which just need their colors re-pointed at the new tokens).
- Add two new shared primitives — `Button` and `FormField` — to replace the
  duplicated inline button/input styling currently copy-pasted across the two
  contact-form pages (and, in Phase 2, the "Reservar ahora" CTAs on Mendoza/San
  Bernardo).
- Modernize the contact form pattern (floating labels, underline-style inputs
  instead of full boxes) — applied to `/contacto` in this phase; `/ostende/contacto`
  gets it in Phase 2 alongside its own page migration.
- Improve photo presentation using the images already in `public/img/` — consistent
  crops/treatment via the card and hero components' own styling (already largely
  handled by the `PhotoRevealCard`/`HeroBand` redesign) — **no new photography**;
  the user has new content coming later and will swap files in themselves.
- Prove the whole system on two real pages: `/hoteles` (a card-grid page) and
  `/contacto` (the form page) — chosen because between them they exercise every
  shared component this phase touches.

## Non-goals

- The other 19 pages (Home, Nosotros, Mendoza, San Bernardo, and all 15 Ostende
  pages) are **not touched** in this phase beyond what they get "for free" from the
  token-alias strategy below (see Design Tokens) — their layout/spacing/copy stays
  exactly as-is. That is Phase 2, a separate plan.
- No typography change (Gill Sans stays).
- No new/replacement photography — presentation only, same files.
- No changes to `WhatsAppFloat`'s green — it's a platform-brand-required color
  (WhatsApp's own green), not part of the site's own palette, so it's outside the
  neutral-palette redesign.
- No behavior changes to the contact form (still a stub `alert()` submission, per
  the original build's non-goals) — this phase is visual only.
- No changes to Ostende-specific pages/components beyond `OstendeHeader` (a shared
  component) in this phase.

## Design Tokens

Six named colors, defined in `app/globals.css`'s `@theme` block:

| Token | Hex | Use |
|---|---|---|
| `savoia-sand` | `#F7F4EF` | Page background (new — the body currently has no explicit background, relying on browser default white) |
| `savoia-stone` | `#EDE7DC` | Alternating section backgrounds (replaces the old cool `savoia-light` `#f4f4f4`) |
| `savoia-charcoal` | `#2B2823` | Primary text, dark sections, footer, buttons (replaces the old navy `savoia-dark`/`savoia-footer`) |
| `savoia-taupe` | `#948C7E` | Secondary/muted text, borders, dividers |
| `savoia-accent` | `#F7C08A` | The one color accent — unchanged value, already defined, now actually used |
| `whatsapp-green` | `#25D366` | Unchanged, brand-required, out of scope |

**Backward-compatible aliasing (the key mechanism that makes Phase 1 safe and
high-leverage):** the legacy token names `savoia-dark`, `savoia-footer`,
`savoia-light` stay defined in `@theme`, but their *hex values* are redefined to
point at the new palette (`savoia-dark`/`savoia-footer` → charcoal's hex,
`savoia-light` → stone's hex). Every one of the 19 not-yet-migrated pages already
uses these token names (`bg-savoia-dark`, `bg-savoia-light`, `bg-savoia-footer`) —
so the instant Phase 1 lands, the *entire site* picks up the new warm-neutral
palette with zero changes to those 19 page files. Freshly-touched Phase 1 code uses
the new semantic names (`savoia-charcoal`, `savoia-stone`) for clarity; Phase 2 can
later do a pure find-and-replace rename across the untouched pages at its leisure —
not urgent, since the aliases work correctly either way.

`body`'s default background becomes `savoia-sand` (a plain CSS rule, not a Tailwind
class, in `app/globals.css`) and its default text color becomes `savoia-charcoal`
(`app/layout.js`'s `<body className="font-sans text-savoia-charcoal">`, replacing
the current `text-[#333]`).

## Typography Scale

Gill Sans stays as the only typeface (via the existing `font-sans` token). New
intentional scale, applied consistently across Phase 1's components:

| Role | Classes | Used for |
|---|---|---|
| Display | `text-4xl md:text-5xl font-medium tracking-tight` | Page-level H1s |
| Section heading | `text-2xl md:text-3xl font-medium` | H2s |
| Subheading | `text-lg` | H3s, card titles |
| Body | `text-base leading-relaxed` | Paragraphs |
| Label (eyebrow) | `text-xs font-medium uppercase tracking-[0.15em]` | Overline labels, form field labels, `AmenityDetail`'s bold detail labels (replacing the current plain `font-bold`) |
| Caption | `text-sm text-savoia-taupe` | Secondary info (addresses, phone numbers) |

## Spacing Scale

Sections move from the current `py-6`/`py-10` to a more generous, consistent
rhythm: `py-16 md:py-24` for standalone sections, `py-10 md:py-16` for tighter
in-page blocks (e.g. between a hero and the section right below it). Container
width stays `max-w-[1100px]` (unchanged, already consistent site-wide) with
`px-6 md:px-8` (up from the current `px-5`, slightly more breathing room on the
edges).

## Component-by-Component Treatment

**`Header` / `OstendeHeader`** — lighter touch: `bg-savoia-sand` instead of pure
white, thinner nav padding, `hover:bg-savoia-stone` instead of the current
hardcoded `hover:bg-[#ece9e3]`, active-link state gets a thin gold underline
instead of a background fill.

**`Footer`** — `bg-savoia-charcoal` (automatic via the token alias), more vertical
padding, muted `text-savoia-stone/70` instead of plain white text.

**`ContactInfoBar`** — same 3-column structure, icon treatment matches `HotelCard`'s
new circular gold-tinted badge (`bg-savoia-accent/20` circle) instead of a bare
icon, `bg-savoia-charcoal` (automatic via alias), more generous column spacing.

**`GuestCounter`** — borders move from hardcoded `#ccc` to `border-savoia-taupe/40`,
stepper buttons restyled from flat gray circles to `bg-savoia-charcoal` with a
gold-tinted hover state, consistent with the new `Button` primitive's language.

**`PhotoRevealCard`** (already redesigned last session) — swap the overlay
gradient's `black/90…black/50` for a `savoia-charcoal`-tinted gradient (warmer, ties
into the neutral palette instead of a neutral-cool black), otherwise unchanged —
its rounded corners, lift-on-hover, and gold accent line already fit this system.

**`HotelCard`** (already redesigned) — swap its two hardcoded `#333` refs for
`savoia-charcoal` (same visual result, now token-driven), otherwise unchanged.

**`Carousel`** — no code change expected (`bg-savoia-light` placeholder already
becomes stone automatically via the token alias); verify no other hardcoded colors
during implementation.

**`HeroBand`** — add a bottom gradient scrim (`bg-gradient-to-t from-savoia-charcoal/70 to-transparent`) behind the title for legibility — currently the white title text sits directly on the photo with no protection, which can be unreadable on light images.

**`VideoHero`** — same bottom-scrim treatment as `HeroBand`, for consistency (it
currently has no overlay content, but the scrim keeps the visual language uniform
if a caption is ever added).

**`AmenityDetail`** — its bold detail labels (`Horarios:`, `Detalles:`, etc.) move
from plain `font-bold` to the new eyebrow label style (`text-xs uppercase
tracking-[0.15em] text-savoia-taupe`) with the value text below in body style,
instead of inline on the same line — reads cleaner, matches the label scale defined
above.

**`SplitContent`** — verify no hardcoded colors; text inherits the new body color
automatically.

**New: `Button`** (`components/Button.jsx`) — a small shared component wrapping
either a `<button type="submit">` or a `next/link` `<Link>` (decided by whether an
`href` prop is passed), styled `bg-savoia-charcoal text-savoia-sand px-6 py-3
transition-colors hover:bg-savoia-accent hover:text-savoia-charcoal`. Replaces the
duplicated inline submit-button classes in both contact-form pages (this phase:
`/contacto`; Phase 2: `/ostende/contacto`, Mendoza/San Bernardo's "Reservar ahora").

**New: `FormField`** (`components/FormField.jsx`) — a floating-label wrapper for
text/email/date/textarea inputs: label sits inside the field at rest, shrinks and
floats above the input when focused or filled (pure CSS, using the `:placeholder-shown`
pseudo-class trick — no JS state needed), underline-only border
(`border-b border-savoia-taupe/40 focus:border-savoia-charcoal`) instead of the
current full box border. Used by `/contacto` in this phase.

## Pilot Pages

**`/hoteles`** — apply the new spacing scale (`py-16 md:py-24` on the card
section), confirm the card grid reads correctly against the new `savoia-stone`
section background (automatic via token alias) and the redesigned `ContactInfoBar`.

**`/contacto`** — full modernization: replace the raw `<input>`/`<textarea>`
elements with `FormField`, replace the submit button with `Button`, apply the new
spacing scale, remove the now-redundant hardcoded `border-[#ddd]`/`bg-[#d4d2d2]`/
`text-[#00244d]` classes in favor of the new components/tokens.

## Verification

Same standard as prior phases: `npm run build` clean, then a check across **all 21
routes** (not just the 2 pilots) that nothing broke from the token-alias change —
every page using `bg-savoia-dark`/`bg-savoia-light`/`bg-savoia-footer` should now
render with the new warm palette automatically; a route-by-route curl/grep pass
confirms 200s and that the relevant classes are still present in the markup (no
real browser in this environment, same adapted method used throughout this
project). Visually confirming the aesthetic itself (does it *look* good) is
something only the user can do — flagged clearly at the end of implementation
for their review before Phase 2 proceeds.
