'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: 'https://www.hotelessavoia.com', label: 'INICIO', external: true },
  { href: '/hamlet/cabanas', label: 'CABAÑAS' },
  { href: '/hamlet/servicios', label: 'SERVICIOS' },
  // Grupos & Eventos: oculto del nav por pedido del cliente, la página sigue
  // existiendo en /hamlet/grupos-eventos.
  { href: '/hamlet/sustentabilidad', label: 'SUSTENTABILIDAD' },
  { href: '/hamlet/contacto', label: 'CONTACTO' },
];

export default function HamletHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-savoia-sand">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 md:px-8">
        <Link href="/hamlet" className="py-4">
          <Image
            src="/img/hamlet/logo-hamlet.png"
            alt="Puerto Hamlet — Hoteles Savoia"
            width={200}
            height={63}
            style={{ height: '56px', width: 'auto' }}
            priority
          />
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
          {NAV_LINKS.map((link) =>
            link.external ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-6 py-8 text-center text-sm tracking-wide text-savoia-charcoal transition-colors hover:bg-savoia-nav-hover"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-6 py-8 text-center text-sm tracking-wide text-savoia-charcoal transition-colors ${
                    pathname === link.href ? 'bg-savoia-nav-hover' : 'hover:bg-savoia-nav-hover'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Backdrop */}
      <div
        role="presentation"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-64 bg-savoia-sand p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
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
          {NAV_LINKS.map((link) =>
            link.external ? (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="text-lg">
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)} className="text-lg">
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
}
