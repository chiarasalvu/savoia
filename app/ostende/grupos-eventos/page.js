import Image from 'next/image';
import HeroBand from '@/components/HeroBand';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Grupos & Eventos' };

// TODO: foto provisoria (compartida con la landing) — reemplazar por fotos
// reales de salones/eventos de Ostende.
export default function OstendeGruposEventosPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/home/lobby-ostende.webp" imageAlt="Hotel Savoia Ostende" title="Grupos & Eventos" />

      <RevealSection className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        <div>
          <p className="text-savoia-taupe-text">
            Ponemos todos nuestros hoteles a disposición de grupos y eventos: reuniones empresariales,
            convenciones, celebraciones o estadías grupales. Frente al mar, en Pinamar, Hotel Savoia Ostende ofrece
            el espacio y la organización necesarios para que tu evento salga como lo imaginaste.
          </p>
          <p className="mt-4 text-savoia-taupe-text">
            Contános qué necesitás y te ayudamos a planificarlo, desde la logística hasta el alojamiento del
            grupo.
          </p>
        </div>
        <div className="relative h-[280px] w-full overflow-hidden md:h-[360px]">
          <Image
            src="/img/grupos-eventos.webp"
            alt="Grupos y eventos en Hoteles Savoia"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </RevealSection>
    </main>
  );
}
