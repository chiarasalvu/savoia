import Image from 'next/image';
import Link from 'next/link';

function CardInner({ src, alt, headline, infoLines }) {
  // The always-visible caption is the headline if there is one, otherwise the
  // first info line stands in for it (e.g. cards with no title, just a single
  // service name). Everything else stays tucked under the gradient until hover.
  const primaryLabel = headline || infoLines?.[0];
  const secondaryLines = headline ? infoLines : infoLines?.slice(1);
  const hasOverlay = Boolean(primaryLabel);

  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[463px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 400px, 90vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {hasOverlay && (
        <div className="absolute inset-x-0 bottom-0 max-h-16 overflow-hidden bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pb-3 pt-8 transition-[max-height] duration-300 ease-out group-hover:max-h-40">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-white">{primaryLabel}</p>
          <span className="mt-1 block h-0.5 w-0 bg-savoia-accent transition-all duration-300 group-hover:w-10" />
          {secondaryLines && secondaryLines.length > 0 && (
            <div className="mt-2 space-y-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {secondaryLines.map((line) => (
                <p key={line} className="text-xs text-white/80">
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

// The wrapper below needs an explicit, non-content-derived size: every child of
// CardInner is absolutely positioned (the `fill` image, the hover overlay), so the
// card has no in-flow content of its own. Inside a `flex flex-wrap` grid, a flex
// item with no explicit width/flex-basis sizes itself from its content — with
// nothing in-flow to measure, it collapses to ~0px and the whole card disappears.
// `flex-1` (flex-basis: 0%) plus min/max width sidesteps that: the item gets a
// definite basis before flexbox ever looks at content, so it can't collapse, while
// still growing/shrinking fluidly between the two clamps.
const WRAPPER_CLASSNAME =
  'group m-4 flex-1 basis-[260px] min-w-[260px] max-w-[400px] rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';

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
