import Image from 'next/image';
import Link from 'next/link';

const HOTELS = [
  { href: '/ostende/grupos-eventos', label: 'Hotel Savoia Ostende' },
  { href: '/puerto-hamlet/grupos-eventos', label: 'Puerto Hamlet' },
  { href: '/mendoza/grupos-eventos', label: 'Hotel Savoia Mendoza' },
  { href: '/san-bernardo/grupos-eventos', label: 'Hotel Savoia San Bernardo' },
];

export default function GruposEventosSection() {
  return (
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-8">
      <div>
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">GRUPOS Y EVENTOS</h2>
        <p className="mt-6 max-w-[480px] text-savoia-taupe-text">
          Nuestros hoteles reciben grupos y eventos: reuniones, celebraciones y estadías grupales.
        </p>

        <ul className="mt-6 flex max-w-[480px] flex-col divide-y divide-savoia-taupe/20 border-y border-savoia-taupe/20">
          {HOTELS.map((hotel) => (
            <li key={hotel.href}>
              <Link
                href={hotel.href}
                className="group flex items-center justify-between py-3 text-sm text-savoia-charcoal transition-colors hover:text-savoia-taupe-text"
              >
                {hotel.label}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contacto"
          className="mt-8 inline-block border border-savoia-charcoal px-5 py-2 text-xs font-medium tracking-wide text-savoia-charcoal transition-colors hover:bg-savoia-charcoal hover:text-white"
        >
          CONSULTANOS
        </Link>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src="/img/grupos-eventos.webp"
          alt="Grupos y eventos en Hoteles Savoia"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
