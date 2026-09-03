import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function LocationCard({ src, alt, name, address, phoneText, phoneHref, href }) {
  const isExternal = href.startsWith('http');
  const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <div className="flex flex-col items-center text-center">
      <Link href={href} {...linkProps} className="group relative block aspect-[3/4] w-full overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <h3 className="mt-5 text-lg font-semibold text-savoia-charcoal">{name}</h3>
      <p className="mt-1 text-sm text-savoia-taupe-text">{address}</p>
      <a href={phoneHref} className="mt-2 flex items-center gap-2 text-sm text-savoia-charcoal transition-colors hover:opacity-70">
        <Phone size={14} className="shrink-0" />
        {phoneText}
      </a>

      <Link
        href={href}
        {...linkProps}
        className="mt-4 self-center rounded-full bg-savoia-charcoal px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Ver más
      </Link>
    </div>
  );
}
