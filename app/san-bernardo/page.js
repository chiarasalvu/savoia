import Image from 'next/image';
import CenterCarousel from '@/components/CenterCarousel';
import SplitContent from '@/components/SplitContent';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | San Bernardo' };

const HIGHLIGHTS = [
  {
    src: '/img/san-bernardo/habitacion.jpg',
    alt: 'Habitación Hotel Savoia San Bernardo',
    title: 'Habitaciones',
    text: 'Cómodas y equipadas, para un descanso placentero después de un día de playa.',
    href: '/san-bernardo/habitaciones',
  },
  {
    src: '/img/san-bernardo/playa.jpg',
    alt: 'Hotel Savoia San Bernardo',
    title: 'A metros de la playa',
    text: 'Atención personalizada, a metros de la playa, en un ambiente familiar y tranquilo.',
    href: '/san-bernardo/a-metros-de-la-playa',
  },
  {
    src: '/img/ostende/cena/cena-6.jpg',
    alt: 'Postres del buffet de Hoteles Savoia',
    title: 'Gastronomía',
    text: 'Servicio de desayuno y cena, en un espacio ideal para toda la familia.',
    href: '/san-bernardo/gastronomia',
  },
];

export default function SanBernardoPage() {
  return (
    <main>
      <div id="property-hero" className="relative flex h-screen w-full items-center justify-center">
        <Image
          src="/img/san-bernardo/san-bernardo-7.jpg"
          alt="Hotel Savoia San Bernardo"
          fill
          priority
          className="object-cover object-[75%_center] md:object-center"
        />
      </div>

      <h2 className="mx-auto mt-10 max-w-[1400px] px-6 text-2xl font-medium tracking-tight md:mt-14 md:px-8 md:text-3xl">
        VIVÍ UNA EXPERIENCIA ÚNICA
      </h2>

      <RevealSection className="py-10 md:py-14">
        <CenterCarousel items={HIGHLIGHTS} initialActive={1} />
      </RevealSection>

      <div className="mt-14 md:mt-24">
        <SplitContent
          imageSrc="/img/san-bernardo/playa.jpg"
          imageAlt="Hotel Savoia San Bernardo"
          imageSide="left"
          title="SAN BERNARDO"
          subtitle="Ubicado a metros de la playa"
          paragraphs={[
            'Lo recibimos en un espacio cálido y luminoso, listo para acompañarlo durante toda su estadía, con atención personalizada en un ambiente familiar y tranquilo.',
          ]}
        />
      </div>

      <div className="mb-16 mt-14 md:mb-24 md:mt-24">
        <SplitContent
          imageSrc="/img/ostende/cena/cena-4.jpg"
          imageAlt="Ensaladas del buffet de Hoteles Savoia"
          imageSide="right"
          title="GASTRONOMÍA"
          subtitle="Desayuno y cena en un ambiente familiar"
          paragraphs={[
            'Un espacio amplio y cómodo para disfrutar de sus comidas durante la estadía, pensado para vacacionar en familia.',
          ]}
        />
      </div>

      <RevealSection className="mx-auto max-w-[1400px] px-6 pb-16 text-center md:px-8 md:pb-24">
        <a
          href="/san-bernardo/servicios"
          className="inline-block border border-savoia-charcoal bg-savoia-charcoal px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-savoia-charcoal"
        >
          Ver todos los servicios
        </a>
      </RevealSection>
    </main>
  );
}
