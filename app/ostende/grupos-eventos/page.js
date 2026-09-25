import Image from 'next/image';
import { whatsappHref } from '@/lib/whatsapp';
import Link from 'next/link';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Grupos & Eventos' };

const WHATSAPP_HREF = whatsappHref('/ostende', 'Hola! Quiero consultar por grupos y eventos en Ostende.');

export default function OstendeGruposEventosPage() {
  return (
    <main>
      <RevealSection className="mx-auto max-w-[1100px] px-5 pb-10 pt-24 text-center md:pb-16 md:pt-32">
        <h1 className="text-3xl font-medium md:text-4xl">Grupos & Eventos</h1>
      </RevealSection>

      <RevealSection className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 px-6 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pb-24">
        <div>
          <p className="text-savoia-taupe-text">
            Frente al mar, nuestro hotel cuenta con un comedor compuesto por dos salones, con capacidad para más
            de 300 personas, además de espacios alternativos como el Bar Woodstock, en planta baja, y el Bar
            Saint Jean, en el 5to piso con vista al mar. Reuniones empresariales, convenciones, celebraciones y
            estadías grupales encuentran aquí el espacio ideal para cada ocasión.
          </p>
          <p className="mt-4 text-savoia-taupe-text">
            Cuéntenos qué necesita y lo ayudamos a planificarlo, desde la logística hasta el alojamiento del
            grupo.
          </p>
          <Link
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border border-savoia-charcoal px-5 py-2 text-xs font-medium tracking-wide text-savoia-charcoal transition-colors hover:bg-savoia-charcoal hover:text-white"
          >
            CONSULTANOS POR WHATSAPP
          </Link>
        </div>
        <div className="relative h-[280px] w-full overflow-hidden md:h-[360px]">
          <Image
            src="/img/ostende/servicios/gastronomia-hero.jpg"
            alt="Comedor del Hotel Savoia Ostende"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </RevealSection>
    </main>
  );
}
