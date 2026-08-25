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
    <header className="bg-savoia-sand">
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
            className="fixed bottom-0 right-0 top-0 z-50 w-64 bg-savoia-sand p-6 shadow-lg"
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
