import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_HREF = 'https://wa.me/5491158958380?text=Hola!%20Quiero%20consultar%20por%20grupos%20y%20eventos.';

export default function GruposEventosSection() {
  return (
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-8">
      <div>
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">GRUPOS Y EVENTOS</h2>
        <p className="mt-6 max-w-[480px] text-savoia-taupe-text">
          Ponemos todos nuestros hoteles a disposición de grupos y eventos: reuniones empresariales, convenciones,
          celebraciones y estadías grupales.
        </p>
        <p className="mt-4 max-w-[480px] text-savoia-taupe-text">
          Cada uno de nuestros espacios ofrece la infraestructura y el acompañamiento necesarios para que su
          evento salga tal como lo imaginó.
        </p>
        <p className="mt-4 max-w-[480px] text-savoia-taupe-text">
          Cuéntenos qué necesita y lo ayudamos a planificarlo, desde la logística hasta el alojamiento del grupo.
        </p>

        <Link
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-savoia-charcoal px-5 py-2 text-xs font-medium tracking-wide text-savoia-charcoal transition-colors hover:bg-savoia-charcoal hover:text-white"
        >
          CONSULTANOS POR WHATSAPP
        </Link>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src="/img/grupos-eventos-savoia.jpg"
          alt="Grupos y eventos en Hoteles Savoia"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
