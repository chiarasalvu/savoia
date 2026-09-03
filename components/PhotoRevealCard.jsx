import Image from 'next/image';
import Link from 'next/link';

function CardInner({ src, alt, headline, infoLines }) {
  // Matches the live site: the whole card is just the photo until hover, when
  // a solid dark overlay fades in with the title and every info line at once
  // (nothing partially visible in between).
  const primaryLabel = headline || infoLines?.[0];
  const secondaryLines = headline ? infoLines : infoLines?.slice(1);

  return (
    <div className="group relative h-[300px] w-[400px] max-w-[90vw] overflow-hidden md:h-[463px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 400px, 90vw"
        className="object-cover"
      />
      {primaryLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#1f1f1f]/90 px-6 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <p className="text-lg uppercase text-[#ddd]">{primaryLabel}</p>
          {secondaryLines && secondaryLines.length > 0 && (
            <div className="space-y-1">
              {secondaryLines.map((line) => (
                <p key={line} className="text-sm text-[#f4f4f4]">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// CardInner now carries its own fixed width (400px, matching the live site's
// #imagenN boxes), so the card sizes itself in any parent — flex row or grid —
// without depending on that parent to hand it a width. The wrapper just adds
// breathing room: margin (not gap), so the outer edges get the same 30px the
// live site uses, not only the space between cards.
const WRAPPER_CLASSNAME = 'm-[15px] md:m-[30px]';

export default function PhotoRevealCard({ src, alt, headline, infoLines, href }) {
  const inner = <CardInner src={src} alt={alt} headline={headline} infoLines={infoLines} />;
  if (href) {
    return (
      <Link href={href} className={`${WRAPPER_CLASSNAME} block`}>
        {inner}
      </Link>
    );
  }
  return <div className={WRAPPER_CLASSNAME}>{inner}</div>;
}
