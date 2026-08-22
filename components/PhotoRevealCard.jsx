import Image from 'next/image';
import Link from 'next/link';

function CardInner({ src, alt, headline, infoLines }) {
  const hasOverlay = Boolean(headline) || (infoLines && infoLines.length > 0);
  return (
    <div className="group relative h-[300px] w-full overflow-hidden md:h-[463px]">
      <Image src={src} alt={alt} fill sizes="(min-width: 640px) 400px, 90vw" className="object-cover" />
      {hasOverlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[rgba(31,31,31,0.9)] px-4 text-center text-[#ddd] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {headline && <p className="text-xl">{headline}</p>}
          {infoLines?.map((line) => (
            <p key={line} className="text-[#f4f4f4]">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// The wrapper below needs an explicit, non-content-derived size: every child of
// CardInner is absolutely positioned (the `fill` image, the hover overlay), so the
// card has no in-flow content of its own. Inside a `flex flex-wrap` grid, a flex
// item with no explicit width/flex-basis sizes itself from its content — with
// nothing in-flow to measure, it collapses to ~0px and the whole card disappears.
// `flex-1` (flex-basis: 0%) plus min/max width sidesteps that: the item gets a
// definite basis before flexbox ever looks at content, so it can't collapse, while
// still growing/shrinking fluidly between the two clamps.
const WRAPPER_CLASSNAME = 'm-4 flex-1 basis-[260px] min-w-[260px] max-w-[400px]';

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
