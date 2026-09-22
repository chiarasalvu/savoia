import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

// Casa Cook's "HOTELS" grid, sized to match: bold caps name + small arrow,
// a pin + location line, then a short description. All 4 show at once —
// no arrows needed.
export default function HotelesCarousel({ hotels }) {
  return (
    <div>
      <h2 className="mb-8 text-2xl font-medium tracking-tight md:mb-12 md:text-3xl">HOTELES</h2>

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {hotels.map((hotel) => (
          <div key={hotel.href}>
            <Link href={hotel.href} className="group relative block aspect-square w-full overflow-hidden">
              <Image
                src={hotel.src}
                alt={hotel.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <Link href={hotel.href} className="mt-5 flex items-center gap-2 whitespace-nowrap text-base font-semibold">
              {hotel.name}
              <span aria-hidden="true">↗</span>
            </Link>
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-savoia-charcoal">
              <MapPin size={16} className="shrink-0" />
              {hotel.location}
            </p>
            <p className="mt-2 text-sm text-savoia-taupe-text">{hotel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
