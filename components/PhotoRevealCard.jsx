import Image from 'next/image';

function CardInner({ src, alt, headline, infoLines }) {
  const hasOverlay = Boolean(headline) || (infoLines && infoLines.length > 0);
  return (
    <div className="group relative h-[300px] w-full max-w-[400px] overflow-hidden md:h-[463px]">
      <Image src={src} alt={alt} fill className="object-cover" />
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

export default function PhotoRevealCard({ src, alt, headline, infoLines, href }) {
  const inner = <CardInner src={src} alt={alt} headline={headline} infoLines={infoLines} />;
  if (href) {
    return (
      <a href={href} className="m-4 block">
        {inner}
      </a>
    );
  }
  return <div className="m-4">{inner}</div>;
}
