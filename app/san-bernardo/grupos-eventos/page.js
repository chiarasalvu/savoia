import Image from 'next/image';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Grupos & Eventos' };

export default function SanBernardoGruposEventosPage() {
  return (
    <main>
      <RevealSection className="mx-auto max-w-[1100px] px-5 pb-10 pt-24 text-center md:pb-16 md:pt-32">
        <h1 className="text-3xl font-medium md:text-4xl">Grupos & Eventos</h1>
      </RevealSection>

      <RevealSection className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 px-6 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pb-24">
        <div>
          <p className="text-savoia-taupe-text">
            Ponemos todos nuestros hoteles a disposición de grupos y eventos: reuniones empresariales,
            convenciones, celebraciones o estadías grupales. En el corazón de la costa, a metros de la playa,
            Hotel Savoia San Bernardo ofrece el espacio y la organización necesarios para que tu evento salga
            como lo imaginaste.
          </p>
          <p className="mt-4 text-savoia-taupe-text">
            Contános qué necesitás y te ayudamos a planificarlo, desde la logística hasta el alojamiento del
            grupo.
          </p>
        </div>
        <div className="relative h-[280px] w-full overflow-hidden md:h-[360px]">
          <Image
            src="/img/san-bernardo/comedor.jpg"
            alt="Comedor del Hotel Savoia San Bernardo"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </RevealSection>
    </main>
  );
}
