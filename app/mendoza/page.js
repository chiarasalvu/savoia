import Image from 'next/image';
import CenterCarousel from '@/components/CenterCarousel';
import SplitContent from '@/components/SplitContent';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Mendoza' };

const HIGHLIGHTS = [
  {
    src: '/img/mendoza/espacios-verdes-mendoza.jpg',
    alt: 'Deporte, parques y recreación',
    title: 'Deporte, parques y recreación',
    text: 'Instalaciones deportivas propias, rodeadas de montañas y espacios verdes.',
    href: '/mendoza/deporte-naturaleza',
  },
  {
    src: '/img/mendoza/pileta-mendoza.jpg',
    alt: 'Pileta olímpica exterior',
    title: 'Pileta exterior',
    text: 'Una pileta olímpica exterior, rodeada de verde, ideal para disfrutar.',
    href: '/mendoza/pileta',
  },
  {
    src: '/img/mendoza/gastronomia-mendoza.jpg',
    alt: 'Gastronomía Savoia',
    title: 'Gastronomía Savoia',
    text: 'Servicio de desayuno y cena, con la calidez de Hoteles Savoia.',
    href: '/mendoza/gastronomia',
  },
];

export default function MendozaPage() {
  return (
    <main>
      <div id="property-hero" className="relative flex h-screen w-full items-center justify-center">
        <Image src="/img/home/portada-mendozaaa.jpeg" alt="Hotel Savoia Mendoza" fill priority className="object-cover" />
      </div>

      <h2 className="mx-auto mt-10 max-w-[1400px] px-6 text-2xl font-medium tracking-tight md:mt-14 md:px-8 md:text-3xl">
        VIVÍ UNA EXPERIENCIA ÚNICA
      </h2>

      <RevealSection className="py-10 md:py-14">
        <CenterCarousel items={HIGHLIGHTS} initialActive={1} />
      </RevealSection>

      <div className="mt-14 md:mt-24">
        <SplitContent
          imageSrc="/img/mendoza/recepcion-mendoza.jpg"
          imageAlt="Recepción Hotel Savoia Mendoza"
          imageSide="left"
          title="HOTEL SAVOIA MENDOZA"
          subtitle="En el corazón del vino, rodeado de naturaleza"
          paragraphs={[
            'Lo recibimos en un espacio cálido y elegante, listo para acompañarlo durante toda su estadía en Mendoza, con atención personalizada de principio a fin.',
          ]}
        />
      </div>

      <div className="mb-16 mt-14 md:mb-24 md:mt-24">
        <SplitContent
          imageSrc="/img/mendoza/salon-de-fiesta.jpg"
          imageAlt="Salón de eventos"
          imageSide="right"
          title="GRUPOS & EVENTOS"
          subtitle="Salones amplios y versátiles"
          paragraphs={[
            'Preparado para reuniones, celebraciones y eventos de todo tipo.',
          ]}
          cta={{ href: '/mendoza/grupos-eventos', label: 'Ver grupos y eventos' }}
        />
      </div>

      <RevealSection className="mx-auto max-w-[1400px] px-6 pb-16 text-center md:px-8 md:pb-24">
        <a
          href="/mendoza/servicios"
          className="inline-block border border-savoia-charcoal bg-savoia-charcoal px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-savoia-charcoal"
        >
          Ver todos los servicios
        </a>
      </RevealSection>
    </main>
  );
}
