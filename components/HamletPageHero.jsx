import Image from 'next/image';
import RevealSection from '@/components/RevealSection';

// Matches the Savoia site's own hero pattern (San Bernardo, Mendoza): a
// plain full-width photo, then the title/subtitle in a separate centered
// block below it — not text overlaid on the image.
export default function HamletPageHero({ image, alt, title, subtitle }) {
  return (
    <>
      {image && (
        <div className="relative h-[45vh] w-full">
          <Image src={image} alt={alt} fill priority className="object-cover" />
        </div>
      )}

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-center md:py-16">
        <h1 className="text-3xl font-medium md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-4 text-savoia-taupe-text">{subtitle}</p>}
      </RevealSection>
    </>
  );
}
