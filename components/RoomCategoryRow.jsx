import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Tv, UtensilsCrossed, Coffee } from 'lucide-react';

// A photo on one side, the category name + amenity icons + a "Ver más"
// button on the other. The whole row reads as one card floating on the page
// (gap + shadow), not a flush strip.
export default function RoomCategoryRow({ src, alt, title, href }) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] md:flex-row"
    >
      <div className="relative h-[280px] w-full overflow-hidden md:h-[350px] md:w-1/2">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-savoia-sand px-6 py-10 text-center md:h-[350px] md:w-1/2">
        <h2 className="text-2xl font-medium text-savoia-charcoal">{title}</h2>
        <div className="flex items-center gap-4 text-savoia-charcoal">
          <Wifi size={20} />
          <span className="text-savoia-taupe">|</span>
          <Tv size={20} />
          <span className="text-savoia-taupe">|</span>
          <UtensilsCrossed size={20} />
          <span className="text-savoia-taupe">|</span>
          <Coffee size={20} />
        </div>
        <span className="mt-2 rounded-full bg-savoia-charcoal px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors group-hover:opacity-90">
          Ver más
        </span>
      </div>
    </Link>
  );
}
