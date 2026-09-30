import Image from 'next/image';
import Link from 'next/link';
import { Ruler, Users } from 'lucide-react';

// OKU-style room grid card: square photo, name, a row of specs (size,
// capacity, view — small icons match the reference), a short description
// and a "Ver más" link into the full detail page.
export default function RoomCard({ href, src, alt, title, size, capacity, view }) {
  return (
    <div>
      <Link href={href} className="group relative block aspect-[4/5] w-full lg:aspect-[4/3] overflow-hidden bg-savoia-stone">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <h3 className="mt-4 text-base font-medium text-savoia-charcoal">{title}</h3>

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wide text-savoia-taupe-text">
        {size && (
          <>
            <span className="flex items-center gap-1">
              <Ruler size={14} /> {size}
            </span>
            <span aria-hidden="true">|</span>
          </>
        )}
        <span className="flex items-center gap-1">
          <Users size={14} /> {capacity}
        </span>
        {view && (
          <>
            <span aria-hidden="true">|</span>
            <span>{view}</span>
          </>
        )}
      </div>

      <Link
        href={href}
        className="mt-4 inline-block text-xs font-medium uppercase tracking-wide text-savoia-charcoal underline underline-offset-4 hover:opacity-70"
      >
        Ver más
      </Link>
    </div>
  );
}
