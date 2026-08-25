import Image from 'next/image';

export default function HeroBand({ imageSrc, imageAlt, title }) {
  return (
    <div className="relative flex h-[50vh] w-full items-center justify-center md:h-[70vh]">
      <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
      {title && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-savoia-charcoal/70 via-savoia-charcoal/10 to-transparent" />
          <h1 className="relative z-10 px-4 text-center text-4xl font-medium tracking-tight text-white md:text-5xl">
            {title}
          </h1>
        </>
      )}
    </div>
  );
}
