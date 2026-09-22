import Image from 'next/image';
import CenterCarousel from '@/components/CenterCarousel';
import SplitContent from '@/components/SplitContent';
import MendozaContactForm from '@/components/MendozaContactForm';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Mendoza' };

const HIGHLIGHTS = [
  {
    src: '/img/mendoza/espacios-verdes-mendoza.jpg',
    alt: 'Espacios verdes',
    title: 'Deporte & naturaleza',
    text: 'Vista a la cordillera y canchas propias de pádel y fútbol al aire libre.',
    href: '/mendoza/deporte-naturaleza',
  },
  {
    src: '/img/mendoza/pileta-mendoza.jpg',
    alt: 'Pileta exterior',
    title: 'Pileta exterior',
    text: 'Una piscina exterior rodeada de verde, ideal para relajarte al aire libre.',
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

      <div className="mt-0 md:mt-24">
        <SplitContent
          imageSrc="/img/mendoza/recepcion-mendoza.jpg"
          imageAlt="Recepción Hotel Savoia Mendoza"
          imageSide="left"
          title="HOTEL SAVOIA MENDOZA"
          subtitle="En el corazón del vino, rodeado de naturaleza"
          paragraphs={[
            'Te recibimos en un espacio cálido y elegante, listo para acompañarte durante toda tu estadía en Mendoza, con atención personalizada de principio a fin.',
          ]}
        />
      </div>

      <div className="mb-16 mt-0 md:mb-24 md:mt-24">
        <SplitContent
          imageSrc="/img/mendoza/salon-de-fiesta.jpg"
          imageAlt="Salón de eventos"
          imageSide="right"
          title="EVENTOS"
          subtitle="Un salón amplio y versátil"
          paragraphs={[
            'Preparado para reuniones, celebraciones y eventos de todo tipo, con gran capacidad e ideal para grupos.',
          ]}
        />
      </div>

      <RevealSection className="mx-auto max-w-[1400px] px-6 pb-16 text-center md:px-8 md:pb-24">
        <a
          href="/mendoza/servicios"
          className="inline-block border border-savoia-charcoal px-6 py-3 text-xs font-medium uppercase tracking-widest text-savoia-charcoal transition-colors hover:bg-savoia-charcoal hover:text-white"
        >
          Ver todos los servicios
        </a>
      </RevealSection>

      <MendozaContactForm />

      <div className="h-[450px] w-full">
        <iframe
          title="Ubicación Hotel Savoia Mendoza"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13403.67843106654!2d-68.7812728!3d-32.8738464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0ee88023a90d%3A0x93f08f6380c71b44!2sHotel%20SAVOIA!5e0!3m2!1ses!2sar!4v1729803999933!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </main>
  );
}
