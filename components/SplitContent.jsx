import Image from 'next/image';

// Photo + text side by side, inset within the site's usual max-w-1400/px-6
// margins (no full-bleed edge, no panel background) — sits directly on the
// page's own background like every other component.
export default function SplitContent({ imageSrc, imageAlt, imageSide = 'left', title, subtitle, paragraphs }) {
  const imageOrder = imageSide === 'left' ? 'order-2 md:order-1' : 'order-2';
  const textOrder = imageSide === 'left' ? 'order-1 md:order-2' : 'order-1';

  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-12 lg:gap-16">
        <div className={`relative h-[340px] w-full md:h-[480px] md:flex-1 ${imageOrder}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className={`flex flex-col justify-center md:flex-1 ${textOrder}`}>
          <div className="max-w-[560px]">
            {subtitle && <p className="text-xs font-medium uppercase tracking-widest text-savoia-taupe-text">{subtitle}</p>}
            <div className="mt-3 flex items-center gap-3">
              <h2 className="text-2xl font-medium tracking-tight text-savoia-charcoal md:text-3xl">{title}</h2>
              <span aria-hidden="true" className="mt-1 hidden h-4 w-16 shrink-0 border-r border-t border-savoia-charcoal md:block" />
            </div>
            <div className="mt-5 flex flex-col gap-4">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="text-justify leading-relaxed text-savoia-taupe-text">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
