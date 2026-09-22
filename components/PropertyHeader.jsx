'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SCROLL_THRESHOLD = 90;

const HOTELS = [
  { href: '/ostende', label: 'HOTEL SAVOIA OSTENDE', src: '/img/home/portada.jpg' },
  { href: '/puerto-hamlet', label: 'PUERTO HAMLET', src: '/img/home/entrada-hamlet.jpeg' },
  { href: '/mendoza', label: 'HOTEL SAVOIA MENDOZA', src: '/img/hoteles/hotel-mendoza.jpeg' },
  { href: '/san-bernardo', label: 'HOTEL SAVOIA SAN BERNARDO', src: '/img/hoteles/san-bernardo.jpeg' },
];

// OKU-style header: at the top of the page it's transparent and shows two
// stacked bars (menu/logo/book on top, property name + nav below) floating
// over the hero. Past SCROLL_THRESHOLD it collapses into one solid bar:
// logo left, nav centered, Reservar right. `fixed` the whole time — pages
// using this need a full-bleed hero that starts at the very top and their
// own content only needs to clear the COLLAPSED height.
//
// Expanded state only: hamburger + "HOTELES" dropdown on the left, so a property page can jump back to the
// landing or across to another property. Collapsed keeps the hamburger on
// mobile only, where the inline nav is hidden.
export default function PropertyHeader({ propertyName, homeHref, logoSrc, logoAlt, logoHeight = 34, navLinks, bookHref = '#contacto' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hotelsOpen, setHotelsOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(true);
  const pathname = usePathname();
  const rafRef = useRef(null);

  useEffect(() => {
    function measure() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    function onScroll() {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        measure();
        rafRef.current = null;
      });
    }
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pathname]);

  // Every page opens with the full double-bar header and collapses on
  // scroll. Colors come from CSS variables (see .ph in globals.css): over a
  // #property-hero the top state is transparent/white, on pages without one
  // it's solid — resolved in CSS so there's no flash before hydration.
  const collapsed = scrolled;
  const barColor = 'bg-[var(--ph-fg)]';

  const hamburger = (
    <button
      type="button"
      className="flex flex-col gap-[5px] p-2"
      aria-label="Abrir menú"
      onMouseEnter={() => setMenuOpen(true)}
      onClick={() => setMenuOpen(true)}
    >
      <span className={`block h-[2px] w-5 transition-colors duration-300 ${barColor}`} />
      <span className={`block h-[2px] w-5 transition-colors duration-300 ${barColor}`} />
      <span className={`block h-[2px] w-5 transition-colors duration-300 ${barColor}`} />
    </button>
  );

  return (
    <>
    <header
      data-top={!collapsed}
      className={`ph fixed inset-x-0 top-0 z-30 bg-[var(--ph-bg)] transition-colors duration-300 ${collapsed ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.08)]' : ''}`}
    >
      <div
        className={`mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-6 transition-[height] duration-300 md:px-8 ${
          collapsed ? 'h-[72px]' : 'h-24'
        }`}
      >
        {collapsed ? (
          <div className="flex items-center gap-3">
            <div className="md:hidden">{hamburger}</div>
            <Link href={homeHref} className="shrink-0">
              <Image src={logoSrc} alt={logoAlt} width={220} height={70} style={{ height: `${logoHeight}px`, width: 'auto' }} priority />
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {hamburger}

            <div
              className="relative hidden md:block"
              onMouseEnter={() => setHotelsOpen(true)}
              onMouseLeave={() => setHotelsOpen(false)}
            >
              <button
                type="button"
                className={`text-xs font-medium uppercase tracking-widest text-[var(--ph-fg)] transition-colors duration-300`}
                onClick={() => setHotelsOpen((v) => !v)}
              >
                Hoteles
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
                        <span aria-hidden="true" className="text-savoia-taupe-text transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {collapsed ? (
          <nav className="hidden items-center justify-center gap-5 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-xs uppercase tracking-widest transition-colors ${
                  pathname === link.href ? 'text-savoia-charcoal' : 'text-savoia-taupe-text hover:text-savoia-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : (
          <Link href={homeHref} className="justify-self-center">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={220}
              height={70}
              style={{ height: `${Math.round(logoHeight * 1.3)}px`, width: 'auto' }}
              priority
              className="[filter:var(--ph-logo-filter)]"
            />
          </Link>
        )}

        <div className="flex justify-end">
          <Link
            href={bookHref}
            className="hidden bg-[var(--ph-btn-bg)] px-5 py-2 text-xs font-medium uppercase tracking-widest text-[var(--ph-btn-fg)] transition-opacity hover:opacity-90 sm:block"
          >
            Reservar
          </Link>
        </div>
      </div>

      {/* Second bar — only in the "at top" state, the OKU double-header look. */}
      <div
        className={`hidden overflow-hidden border-t border-[var(--ph-bar2-border)] bg-[var(--ph-bar2-bg)] backdrop-blur-[2px] transition-[max-height,opacity] duration-300 md:block ${
          collapsed ? 'max-h-0 border-t-0 opacity-0' : 'max-h-16 opacity-100'
        }`}
      >
        <div className="mx-auto flex h-12 max-w-[1400px] items-center justify-between px-6 md:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--ph-fg)]">{propertyName}</span>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  pathname === link.href ? 'text-[var(--ph-fg)]' : 'text-[var(--ph-fg-soft)] hover:text-[var(--ph-fg)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      <div
        role="presentation"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Slide-in panel — opens from the left, same as the landing Header */}
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
              Inicio
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setAccordionOpen((v) => !v)}
              className="flex items-center gap-2 text-lg tracking-wide text-savoia-charcoal"
            >
              Hoteles
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
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)} className="text-lg tracking-wide text-savoia-charcoal">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>

    {/* Pages without a hero start below the tall top state: the fixed header
        is 72px taller expanded than collapsed, and page content is only
        padded for the collapsed height. */}
    <div aria-hidden="true" className="hidden h-6 md:h-[72px] [body:not(:has(#property-hero))_&]:block" />
    </>
  );
}
