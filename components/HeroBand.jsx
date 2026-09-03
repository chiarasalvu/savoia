import Image from 'next/image';

export default function HeroBand({ imageSrc, imageAlt, title }) {
  return (
    <div className="relative flex h-[50vh] w-full items-end justify-end md:h-[70vh]">
      <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
      {title && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <h1 className="relative z-10 px-6 pb-8 text-right text-3xl font-medium tracking-tight text-white md:px-12 md:pb-12 md:text-5xl">
            {title}
          </h1>
        </>
      )}
    </div>
  );
}
