'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DEFAULT_CONTACT, contactForPath } from '@/lib/hotelContacts';

// lucide-react doesn't ship brand icons — small inline outline SVGs instead
// of pulling in a whole extra icon package for two glyphs.
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 4h-2.5A3.5 3.5 0 0 0 9 7.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7.5c0-.55.45-1 1-1H15V4Z" />
    </svg>
  );
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myzgqqrl';

const HOTELS = [
  { href: '/ostende', label: 'Hotel Savoia Ostende' },
  { href: '/puerto-hamlet', label: 'Puerto Hamlet' },
  { href: '/mendoza', label: 'Hotel Savoia Mendoza' },
  { href: '/san-bernardo', label: 'Hotel Savoia San Bernardo' },
];

export default function Footer() {
  const pathname = usePathname();
  const contact = contactForPath(pathname);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  const hasSocial = contact !== DEFAULT_CONTACT && (contact.facebookHref || contact.instagramHref);

  return (
    <footer className="border-t border-savoia-taupe/20 bg-savoia-body text-savoia-charcoal">
      <div className={`mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 ${hasSocial ? 'lg:grid-cols-[1fr_1fr_1fr_1fr_1.4fr]' : 'lg:grid-cols-[1fr_1fr_1fr_1.4fr]'} lg:px-8`}>
        <div>
          <Image src={contact.logoSrc} alt="Hoteles Savoia" width={contact.logoW} height={contact.logoH} style={{ height: 'auto', width: `${contact.logoFooterW ?? 140}px` }} />
        </div>

        <div>
          <h3 className="text-xs font-medium tracking-wide">HOTELES</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-savoia-taupe-text">
            {HOTELS.map((hotel) => (
              <li key={hotel.href}>
                <Link href={hotel.href} className="hover:text-savoia-charcoal">
                  {hotel.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium tracking-wide">CONTACTO</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-savoia-taupe-text">
            <a href={contact.locationHref} className="hover:text-savoia-charcoal">
              {contact.locationText}
            </a>
            <a href={contact.phoneHref} className="hover:text-savoia-charcoal">
              {contact.phoneText}
            </a>
            <a href={contact.emailHref} className="hover:text-savoia-charcoal">
              {contact.emailText}
            </a>
          </div>
        </div>

        {/* No general Hoteles Savoia account — only shown once a specific
            property (with at least one verified social link) is active. */}
        {hasSocial && (
          <div>
            <h3 className="text-xs font-medium tracking-wide">REDES</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-savoia-taupe-text">
              {contact.instagramHref && (
                <a
                  href={contact.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-savoia-charcoal"
                >
                  <InstagramIcon width={18} height={18} className="shrink-0" />
                  <span>{contact.instagramHandle}</span>
                </a>
              )}
              {contact.facebookHref && (
                <a
                  href={contact.facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-savoia-charcoal"
                >
                  <FacebookIcon width={18} height={18} className="shrink-0" />
                  <span>{contact.facebookHandle}</span>
                </a>
              )}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-xs font-medium tracking-wide">SUMATE AL NEWSLETTER</h3>

          {submitted ? (
            <p className="mt-4 text-sm text-savoia-taupe-text">¡Gracias! Ya estás suscripto.</p>
          ) : (
            <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
              <input type="hidden" name="motivo" value="Suscripción newsletter" />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  aria-label="Nombre"
                  className="w-full border border-savoia-taupe/40 bg-white px-4 py-2.5 text-sm text-savoia-charcoal outline-none placeholder:text-savoia-taupe-text focus:border-savoia-charcoal"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Apellido"
                  aria-label="Apellido"
                  className="w-full border border-savoia-taupe/40 bg-white px-4 py-2.5 text-sm text-savoia-charcoal outline-none placeholder:text-savoia-taupe-text focus:border-savoia-charcoal"
                />
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                aria-label="Email"
                className="w-full border border-savoia-taupe/40 bg-white px-4 py-2.5 text-sm text-savoia-charcoal outline-none placeholder:text-savoia-taupe-text focus:border-savoia-charcoal"
              />
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 self-start bg-savoia-charcoal px-6 py-2.5 text-xs font-medium tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? 'ENVIANDO...' : 'SUSCRIBIRME'}
              </button>
            </form>
          )}
        </div>
      </div>

      <p className="border-t border-savoia-taupe/20 py-5 text-center text-xs text-savoia-taupe-text">
        Hoteles Savoia &copy; {new Date().getFullYear()} - Todos los derechos reservados
      </p>
    </footer>
  );
}
