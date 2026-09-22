'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'INICIO' },
  { href: '/#historia', label: 'NOSOTROS' },
  { href: '/#contacto', label: 'CONTACTO' },
];

const HOTELS = [
  { href: '/ostende', label: 'HOTEL SAVOIA OSTENDE', src: '/img/home/portada.jpg' },
  { href: '/puerto-hamlet', label: 'PUERTO HAMLET', src: '/img/home/entrada-hamlet.jpeg' },
  { href: '/mendoza', label: 'HOTEL SAVOIA MENDOZA', src: '/img/hoteles/hotel-mendoza.jpeg' },
  { href: '/san-bernardo', label: 'HOTEL SAVOIA SAN BERNARDO', src: '/img/hoteles/san-bernardo.jpeg' },
];

// OKU-style header: hamburger + "HOTELS" label on the left (the label opens
// its own small dropdown right in the header, independent of the full side
// menu), the logo docks here once ScrollLogo finishes rising out of the
// hero, and a CTA on the right. The side panel opens from the left, with
// HOTELS repeated there as an expandable accordion — both places to reach
// the four properties, per the brief.
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hotelsOpen, setHotelsOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(true);

  return (
    // Backdrop + slide-in panel live OUTSIDE <header> on purpose (see below):
    // header stays z-30 so ScrollLogo (z-40) can dock visibly on top of its
    // plain background, but header is `sticky`, which opens its own
    // stacking context — anything nested inside it would get capped at
    // header's z-30 for comparisons against page siblings like ScrollLogo,
    // no matter what z-index it declares internally. Keeping the panel a
    // sibling of <header> (and of ScrollLogo) instead lets it use z-50 for
    // real, above both the plain header and the docked logo.
    <>
    <header className="sticky top-0 z-30 border-b border-savoia-taupe/20 bg-savoia-body">
      <nav className="relative mx-auto flex h-[88px] max-w-[1400px] items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex flex-col gap-[5px] p-2"
            aria-label="Abrir menú"
            onMouseEnter={() => setMenuOpen(true)}
            onClick={() => setMenuOpen(true)}
          >
            <span className="block h-[2px] w-6 bg-savoia-charcoal" />
            <span className="block h-[2px] w-6 bg-savoia-charcoal" />
            <span className="block h-[2px] w-6 bg-savoia-charcoal" />
          </button>

          <div
            className="relative"
            onMouseEnter={() => setHotelsOpen(true)}
            onMouseLeave={() => setHotelsOpen(false)}
          >
            <button
              type="button"
              className="text-xs font-medium tracking-wide text-savoia-charcoal"
              onClick={() => setHotelsOpen((v) => !v)}
            >
              HOTELES
            </button>

            {hotelsOpen && (
              // pt-4 (not mt-4) keeps this padded gap inside the hoverable
              // box — a margin here would create a dead zone between the
              // button and panel that closes the dropdown mid-move.
              <div className="absolute left-0 top-full z-40 w-80 pt-4">
                <div className="border border-savoia-taupe/20 bg-savoia-sand shadow-lg">
                  {HOTELS.map((hotel) => (
                    <Link
                      key={hotel.href}
                      href={hotel.href}
                      className="group flex items-center gap-4 border-b border-savoia-taupe/10 px-5 py-3 text-savoia-charcoal transition-colors last:border-b-0 hover:bg-savoia-nav-hover"
                    >
                      <span className="relative h-12 w-12 shrink-0 overflow-hidden">
                        <Image src={hotel.src} alt="" fill sizes="48px" className="object-cover" />
                      </span>
                      <span className="flex-1 text-xs tracking-wide">{hotel.label}</span>
                      <span
                        aria-hidden="true"
                        className="text-savoia-taupe-text transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Logo docks here once ScrollLogo finishes its rise from the hero. */}
        <div className="w-[150px]" aria-hidden="true" />

        <Link
          href="/#contacto"
          className="hidden border border-savoia-charcoal px-5 py-2 text-xs font-medium tracking-wide text-savoia-charcoal transition-colors hover:bg-savoia-charcoal hover:text-white sm:block"
        >
          RESERVAR
        </Link>
      </nav>
    </header>

    {/* Backdrop */}
    <div
      role="presentation"
      onClick={() => setMenuOpen(false)}
      className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
        menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    />

    {/* Slide-in panel — opens from the left */}
    <div
        onMouseLeave={() => setMenuOpen(false)}
        className={`fixed bottom-0 left-0 top-0 z-50 w-80 bg-savoia-sand p-8 shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          className="absolute right-6 top-6 text-2xl leading-none"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <ul className="mt-16 flex flex-col gap-6">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-lg tracking-wide text-savoia-charcoal">
              INICIO
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setAccordionOpen((v) => !v)}
              className="flex items-center gap-2 text-lg tracking-wide text-savoia-charcoal"
            >
              HOTELES
              <span aria-hidden="true">{accordionOpen ? '−' : '+'}</span>
            </button>
            {accordionOpen && (
              <ul className="mt-3 flex flex-col gap-3 pl-3">
                {HOTELS.map((hotel) => (
                  <li key={hotel.href}>
                    <Link
                      href={hotel.href}
                      onClick={() => setMenuOpen(false)}
                      className="whitespace-nowrap text-xs tracking-wide text-savoia-taupe-text"
                    >
                      {hotel.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {NAV_LINKS.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg tracking-wide text-savoia-charcoal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
