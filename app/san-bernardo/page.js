import Image from 'next/image';
import CenterCarousel from '@/components/CenterCarousel';
import SplitContent from '@/components/SplitContent';
import SanBernardoContactForm from '@/components/SanBernardoContactForm';
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
    src: '/img/san-bernardo/recepcion.jpg',
    alt: 'Recepción Hotel Savoia San Bernardo',
    title: 'Recepción',
    text: 'Atención personalizada, a metros de la playa, en un ambiente familiar y tranquilo.',
    href: '/san-bernardo/recepcion',
  },
  {
    src: '/img/san-bernardo/comedor.jpg',
    alt: 'Comedor Hotel Savoia San Bernardo',
    title: 'Comedor',
    text: 'Servicio de desayuno y cena, en un espacio ideal para toda la familia.',
    href: '/san-bernardo/comedor',
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

      <div className="mt-0 md:mt-24">
        <SplitContent
          imageSrc="/img/san-bernardo/recepcion.jpg"
          imageAlt="Recepción Hotel Savoia San Bernardo"
          imageSide="left"
          title="SAN BERNARDO"
          subtitle="Ubicado a metros de la playa"
          paragraphs={[
            'Te recibimos en un espacio cálido y luminoso, listo para acompañarte durante toda tu estadía, con atención personalizada en un ambiente familiar y tranquilo.',
          ]}
        />
      </div>

      <div className="mb-16 mt-0 md:mb-24 md:mt-24">
        <SplitContent
          imageSrc="/img/san-bernardo/comedor.jpg"
          imageAlt="Comedor Hotel Savoia San Bernardo"
          imageSide="right"
          title="GASTRONOMÍA"
          subtitle="Desayuno y cena en un ambiente familiar"
          paragraphs={[
            'Un espacio amplio y cómodo para disfrutar de tus comidas durante la estadía, pensado para vacacionar en familia.',
          ]}
        />
      </div>

      <RevealSection className="mx-auto max-w-[1400px] px-6 pb-16 text-center md:px-8 md:pb-24">
        <a
          href="/san-bernardo/servicios"
          className="inline-block border border-savoia-charcoal px-6 py-3 text-xs font-medium uppercase tracking-widest text-savoia-charcoal transition-colors hover:bg-savoia-charcoal hover:text-white"
        >
          Ver todos los servicios
        </a>
      </RevealSection>

      <SanBernardoContactForm />

      <div className="h-[450px] w-full">
        <iframe
          title="Ubicación Hotel Savoia San Bernardo"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12796.569928213892!2d-56.6774767!3d-36.6951139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c6f03f1549355%3A0xe761e17d72025964!2sHotel%20Savoia%20San%20Bernardo!5e0!3m2!1ses!2sar!4v1729802520886!5m2!1ses!2sar"
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
