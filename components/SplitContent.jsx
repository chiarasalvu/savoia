import Image from 'next/image';
import Carousel from '@/components/Carousel';

// Photo + text side by side, inset within the site's usual max-w-1400/px-6
// margins (no full-bleed edge, no panel background) — sits directly on the
// page's own background like every other component. Pass `images` (array of
// {src, alt}) instead of imageSrc/imageAlt to show a photo carousel there
// instead of a single static image. An optional `cta` ({href, label}) renders
// a button under the paragraphs.
export default function SplitContent({
  imageSrc,
  imageAlt,
  images,
  imageSide = 'left',
  title,
  subtitle,
  paragraphs,
  cta,
}) {
  const imageOrder = imageSide === 'left' ? 'order-2 md:order-1' : 'order-2';
  const textOrder = imageSide === 'left' ? 'order-1 md:order-2' : 'order-1';

  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-12 lg:gap-16">
        <div className={`relative h-[340px] w-full md:h-[480px] md:flex-1 ${imageOrder}`}>
          {images ? (
            <Carousel slides={images} className="relative h-full w-full overflow-hidden" />
          ) : (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          )}
        </div>
        <div className={`flex flex-col justify-center md:flex-1 ${textOrder}`}>
          <div className="max-w-[560px]">
            {subtitle && <p className="text-xs font-medium uppercase tracking-widest text-savoia-taupe-text">{subtitle}</p>}
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-savoia-charcoal md:text-3xl">{title}</h2>
            <div className="mt-5 flex flex-col gap-4">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="text-justify leading-relaxed text-savoia-taupe-text">
                  {p}
                </p>
              ))}
            </div>
            {cta && (
              <a
                href={cta.href}
                className="mt-6 inline-block w-fit border border-savoia-charcoal bg-savoia-charcoal px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-savoia-charcoal"
              >
                {cta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
