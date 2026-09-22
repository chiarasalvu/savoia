import Image from 'next/image';
import Link from 'next/link';

// Three columns, photo on top and text underneath, with the middle one
// dropped a little for the uneven editorial feel. The corner "leader line"
// runs from the heading to the column's right edge and ticks down.
export default function HighlightsStagger({ items }) {
  return (
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-8 gap-y-14 px-6 md:grid-cols-3 md:px-8">
      {items.map((item, i) => (
        <div key={item.title} className={i === 1 ? 'md:mt-16' : ''}>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-savoia-stone">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-6 flex items-start gap-4">
            <h3 className="shrink-0 text-xl font-medium leading-tight text-savoia-charcoal md:text-2xl">{item.title}</h3>
            <span aria-hidden="true" className="mt-3 hidden h-4 flex-1 border-r border-t border-savoia-charcoal md:block" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-savoia-taupe-text md:text-base">{item.text}</p>
          {item.href && (
            <Link
              href={item.href}
              className="mt-4 inline-block text-xs font-medium uppercase tracking-wide text-savoia-charcoal underline underline-offset-4 hover:opacity-70"
            >
              Ver más
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
