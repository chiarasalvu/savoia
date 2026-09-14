import Image from 'next/image';
import { TreePine, Wifi, Waves, Flame, Users, CalendarCheck, Leaf, Store, Coffee, Dumbbell, Baby, Gamepad2 } from 'lucide-react';
import ServiceRow from '@/components/ServiceRow';
import PuertoHamletContactForm from '@/components/PuertoHamletContactForm';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet' };

const PUERTO_HAMLET_URL = 'https://www.puertohamlet.com/';

const SERVICIOS = [
  {
    images: [
      { src: '/img/puerto-hamlet/cabanas/1.jpg', alt: 'Cabañas de Puerto Hamlet entre los pinos' },
      { src: '/img/puerto-hamlet/cabanas/2.jpg', alt: 'Habitación de una cabaña de Puerto Hamlet' },
    ],
    badge: 'Alojamiento',
    title: 'CABAÑAS',
    description:
      '31 cabañas distribuidas alrededor de nuestro amplio parque, amplias y luminosas, con mueblería de algarrobo y Wi-Fi.',
    features: [
      { icon: TreePine, text: 'Rodeadas de bosque de pinos' },
      { icon: Wifi, text: 'Wi-Fi en todas las cabañas' },
    ],
    ctaLabel: 'Ver cabañas',
  },
  {
    images: [
      { src: '/img/puerto-hamlet/servicios/1.jpg', alt: 'Pileta exterior e hidromasaje de Puerto Hamlet' },
      { src: '/img/puerto-hamlet/servicios/2.jpg', alt: 'Pileta climatizada cubierta de Puerto Hamlet' },
      { src: '/img/puerto-hamlet/servicios/3.jpg', alt: 'Sauna de Puerto Hamlet' },
      { src: '/img/puerto-hamlet/servicios/4.jpg', alt: 'Gimnasio de Puerto Hamlet' },
    ],
    badge: 'Relax',
    title: 'SERVICIOS',
    description:
      'Pileta climatizada, hidromasaje, sauna seco y solarium, desayuno y gimnasio — todo incluido en la tarifa.',
    features: [
      { icon: Waves, text: 'Pileta climatizada' },
      { icon: Flame, text: 'Sauna seco e hidromasaje' },
      { icon: Coffee, text: 'Desayuno incluido' },
      { icon: Dumbbell, text: 'Gimnasio equipado' },
    ],
    ctaLabel: 'Ver servicios',
  },
  {
    src: '/img/puerto-hamlet/grupos-eventos.jpg',
    alt: 'Salón de usos múltiples de Puerto Hamlet para grupos y eventos',
    badge: 'Eventos',
    title: 'GRUPOS & EVENTOS',
    description: 'Un lugar distinto y confortable para tus reuniones y eventos, en el centro de Cariló.',
    features: [
      { icon: Users, text: 'Espacios para grupos' },
      { icon: CalendarCheck, text: 'Reuniones y eventos a medida' },
    ],
    ctaLabel: 'Ver grupos & eventos',
  },
  {
    src: '/img/puerto-hamlet/kids-club/1.jpg',
    alt: 'Sala de juegos del Kids Club de Puerto Hamlet',
    badge: 'Para los más chicos',
    title: 'KIDS CLUB',
    description: 'Un espacio pensado para que los más chicos jueguen y se diviertan durante toda la estadía.',
    features: [
      { icon: Baby, text: 'Espacio para chicos' },
      { icon: Gamepad2, text: 'Juegos y entretenimiento' },
    ],
    ctaLabel: 'Ver kids club',
  },
  {
    src: '/img/puerto-hamlet/sustentabilidad.jpg',
    alt: 'Certificación Bronce Hoteles Más Verdes de Puerto Hamlet',
    badge: 'Compromiso ambiental',
    title: 'SUSTENTABILIDAD',
    description: 'Comprometidos con el cuidado del ambiente y la biodiversidad de Cariló.',
    features: [
      { icon: Leaf, text: 'Cuidado del ambiente' },
      { icon: TreePine, text: 'Biodiversidad de Cariló' },
    ],
    ctaLabel: 'Ver sustentabilidad',
  },
  {
    images: [
      { src: '/img/puerto-hamlet/ubicacion/1.jpg', alt: 'Acceso a la playa cerca de Puerto Hamlet, Cariló' },
      { src: '/img/puerto-hamlet/ubicacion/2.jpg', alt: 'Centro comercial de Cariló, cerca de Puerto Hamlet' },
    ],
    badge: 'Ubicación',
    title: 'UBICACIÓN',
    description: 'Cerezo y Avutarda — a 100 metros de la playa y 300 del centro comercial de Cariló.',
    features: [
      { icon: Waves, text: 'A 100 metros de la playa' },
      { icon: Store, text: 'A 300 metros del centro comercial' },
    ],
    ctaLabel: 'Ver ubicación',
  },
];

export default function PuertoHamletPage() {
  return (
    <main>
      <div className="relative flex h-[70vh] w-full items-center justify-center">
        <Image
          src="/img/home/entrada-hamlet.jpeg"
          alt="Entrada Puerto Hamlet Cariló"
          fill
          priority
          className="object-cover"
        />
      </div>

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-center md:py-16">
        <h1 className="text-3xl font-medium md:text-4xl">PUERTO HAMLET</h1>
        <p className="mt-4 text-savoia-taupe-text">
          Cariló goza de un paisaje privilegiado: su bosque de altos pinos a la orilla del mar debe sus amplios
          espacios verdes al particular loteo con fracciones de más de 1000m² de superficie. En Puerto Hamlet
          siempre hemos respetado ese Cariló agreste y original, nuestro parque tiene 4600m² de superficie
          rodeados de cerco vivo para dar a nuestros huéspedes tranquilidad y privacidad. Más de 700 ejemplares
          en 100 variedades de plantas convierten nuestros paseos internos en un atractivo de invalorable
          belleza.
        </p>
      </RevealSection>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 pb-10 md:gap-24 md:px-8 md:pb-16">
        {SERVICIOS.map((servicio, index) => (
          <RevealSection key={servicio.title}>
            <ServiceRow
              {...servicio}
              href={PUERTO_HAMLET_URL}
              target="_blank"
              imageSide={index % 2 === 0 ? 'left' : 'right'}
            />
          </RevealSection>
        ))}
      </div>

      <RevealSection className="mx-auto flex max-w-[700px] flex-col items-center gap-4 px-6 py-16 text-center md:py-24">
        <h2 className="text-3xl font-medium md:text-4xl">DESCUBRÍ PUERTO HAMLET</h2>
        <p className="text-savoia-taupe-text">
          Conocé todas las cabañas, tarifas y disponibilidad en el sitio oficial de Puerto Hamlet.
        </p>
        <a
          href={PUERTO_HAMLET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-full bg-savoia-charcoal px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-savoia-charcoal/90"
        >
          Ir a puertohamlet.com
        </a>
      </RevealSection>

      <PuertoHamletContactForm />

      <div className="h-[450px] w-full">
        <iframe
          title="Ubicación Puerto Hamlet"
          src="https://www.google.com/maps?q=Cerezo+y+Avutarda,+Carilo,+Buenos+Aires,+Argentina&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/XCG5uryNonStL4ms6"
        locationText="Cerezo 104 - Cariló"
        phoneHref="tel:02254571623"
        phoneText="Tel: (02254) 57-1623"
      />
    </main>
  );
}
