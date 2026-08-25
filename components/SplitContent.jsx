import Image from 'next/image';

export default function SplitContent({ imageSrc, imageAlt, imageSide = 'left', title, subtitle, paragraphs }) {
  const image = (
    <div className="relative h-[300px] md:h-auto md:flex-1">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </div>
  );
  const text = (
    <div className="flex flex-col justify-center gap-3 px-6 py-12 md:flex-1 md:px-10 md:py-16">
      <h2 className="text-2xl font-medium">{title}</h2>
      <span className="block h-0.5 w-10 bg-savoia-accent" />
      {subtitle && <h3 className="text-lg text-savoia-taupe-text">{subtitle}</h3>}
      {paragraphs.map((p) => (
        <p key={p.slice(0, 20)}>{p}</p>
      ))}
    </div>
  );
  return (
    <section className="flex flex-col md:flex-row">
      {imageSide === 'left' ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </section>
  );
}
