import Image from 'next/image';
import Link from 'next/link';

// Editorial zigzag row: photo on one side, badge + title + description +
// feature bullets + outlined CTA on the other. Image side alternates per row.
export default function ServiceRow({ src, alt, badge, title, description, features, href, imageSide = 'left' }) {
  const reverse = imageSide === 'right';

  return (
    <div className={`flex flex-col items-center gap-10 md:gap-16 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="relative h-[280px] w-full overflow-hidden rounded-2xl md:h-[420px] md:w-1/2">
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className="flex w-full flex-col items-start md:w-1/2">
        <span className="rounded-full bg-savoia-nav-hover px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-savoia-charcoal">
          {badge}
        </span>
        <h2 className="mt-4 text-2xl font-medium text-savoia-charcoal md:text-3xl">{title}</h2>
        <p className="mt-4 text-savoia-taupe-text">{description}</p>

        <ul className="mt-6 flex flex-col gap-3">
          {features.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-sm text-savoia-charcoal">
              <Icon size={18} className="shrink-0 text-savoia-charcoal" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-8 rounded-full border border-savoia-charcoal px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-savoia-charcoal transition-colors hover:bg-savoia-charcoal hover:text-white"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
