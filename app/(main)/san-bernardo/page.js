import Image from 'next/image';
import { Users, MapPin, Sparkles, UtensilsCrossed, BedDouble, Bath } from 'lucide-react';
import ServiceRow from '@/components/ServiceRow';
import SanBernardoContactForm from '@/components/SanBernardoContactForm';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | San Bernardo' };

const SERVICES = [
  {
    src: '/img/san-bernardo/recepcion.jpg',
    alt: 'Recepción Hotel Savoia San Bernardo',
    badge: 'Bienvenida',
    title: 'RECEPCIÓN',
    description: 'Te recibimos en un espacio cálido y luminoso, listo para acompañarte durante toda tu estadía en San Bernardo.',
    features: [
      { icon: Users, text: 'Atención personalizada' },
      { icon: MapPin, text: 'A metros de la playa' },
      { icon: Sparkles, text: 'Ambiente familiar y tranquilo' },
    ],
    href: '#contacto',
    ctaLabel: 'Reservar ahora',
  },
  {
    src: '/img/san-bernardo/comedor.jpg',
    alt: 'Comedor Hotel Savoia San Bernardo',
    badge: 'Gastronomía',
    title: 'COMEDOR',
    description: 'Un espacio amplio y cómodo para disfrutar de tus comidas durante la estadía, pensado para vacacionar en familia.',
    features: [
      { icon: UtensilsCrossed, text: 'Servicio de desayuno y cena' },
      { icon: Users, text: 'Espacio ideal para toda la familia' },
    ],
    href: '#contacto',
    ctaLabel: 'Reservar ahora',
  },
  {
    src: '/img/san-bernardo/habitacion.jpg',
    alt: 'Habitación Hotel Savoia San Bernardo',
    badge: 'Descanso',
    title: 'HABITACIONES',
    description: 'Habitaciones cómodas y equipadas para que disfrutes de un descanso placentero después de un día de playa.',
    features: [
      { icon: BedDouble, text: 'Camas dobles y triples' },
      { icon: Bath, text: 'Baño privado' },
    ],
    href: '#contacto',
    ctaLabel: 'Reservar ahora',
  },
];

export default function SanBernardoPage() {
  return (
    <main>
      <div className="relative flex h-[70vh] w-full items-center justify-center">
        <Image
          src="/img/san-bernardo/san-bernardo-7.jpg"
          alt="Hotel Savoia San Bernardo"
          fill
          priority
          className="object-cover object-[75%_center] md:object-center"
        />
      </div>

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-center md:py-16">
        <h1 className="text-3xl font-medium md:text-4xl">HOTEL SAVOIA SAN BERNARDO</h1>
        <p className="mt-4 text-savoia-taupe-text">
          Ubicado en el corazón de la costa, a metros de la playa.
          <br />
          El lugar perfecto para disfrutar de tus vacaciones.
        </p>
      </RevealSection>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 pb-10 md:gap-24 md:px-8 md:pb-16">
        {SERVICES.map((service, index) => (
          <RevealSection key={service.title}>
            <ServiceRow {...service} imageSide={index % 2 === 0 ? 'left' : 'right'} />
          </RevealSection>
        ))}
      </div>

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

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/tT5bGSmaVbJpzRU6A"
        locationText="Strobel 2099 - San Bernardo"
        phoneHref="tel:02257460211"
        phoneText="Tel: (02257) 460-211 / 250"
      />
    </main>
  );
}
