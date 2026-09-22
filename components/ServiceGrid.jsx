import Image from 'next/image';
import Link from 'next/link';

// Uniform grid — every card the same size so the page reads as an ordered
// list of services (same card structure as RoomCard).
export default function ServiceGrid({ services }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const photo = (
          <Image
            src={service.src}
            alt={service.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover ${service.href ? 'transition-transform duration-300 group-hover:scale-105' : ''}`}
          />
        );
        return (
          <div key={service.title}>
            {service.href ? (
              <Link href={service.href} className="group relative block aspect-[4/3] w-full overflow-hidden bg-savoia-stone">
                {photo}
              </Link>
            ) : (
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-savoia-stone">{photo}</div>
            )}
            <h3 className="mt-4 text-lg font-medium text-savoia-charcoal">{service.title}</h3>
            <p className="mt-2 text-sm text-savoia-taupe-text">{service.description}</p>
            {service.href && (
              <Link
                href={service.href}
                className="mt-3 inline-block text-xs font-medium uppercase tracking-wide text-savoia-charcoal underline underline-offset-4 hover:opacity-70"
              >
                Ver más
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
