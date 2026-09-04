import Image from 'next/image';

export default function SplitContent({ imageSrc, imageAlt, imageSide = 'left', title, subtitle, paragraphs }) {
  // On mobile every row stacks as text-then-photo, whichever `imageSide` says —
  // that's what keeps a text/photo/text/photo rhythm when two of these sit
  // back to back. `order` restores the left/right split once md:flex-row
  // kicks in, instead of swapping DOM order (which would fix desktop but
  // flip the mobile stack back to photo-first for the 'left' side).
  const imageOrder = imageSide === 'left' ? 'order-2 md:order-1' : 'order-2';
  const textOrder = imageSide === 'left' ? 'order-1 md:order-2' : 'order-1';

  return (
    <section className="flex flex-col md:flex-row">
      <div className={`relative h-[300px] md:h-auto md:flex-1 ${imageOrder}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className={`flex flex-col justify-center gap-3 px-6 py-12 md:flex-1 md:px-10 md:py-16 ${textOrder}`}>
        <h2 className="text-2xl font-medium">{title}</h2>
        {subtitle && <h3 className="text-lg text-savoia-taupe-text">{subtitle}</h3>}
        {paragraphs.map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </div>
    </section>
  );
}
