import Image from 'next/image';
import { Sun, TreePine, Users, CalendarCheck, UtensilsCrossed, Trophy, Gamepad2, BedDouble, Bath, Goal } from 'lucide-react';
import ServiceRow from '@/components/ServiceRow';
import MendozaContactForm from '@/components/MendozaContactForm';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Mendoza' };

const SERVICIOS = [
  {
    src: '/img/mendoza/habitacion1-mendoza.jpg',
    alt: 'Habitación Hotel Savoia Mendoza',
    badge: 'Descanso',
    title: 'HABITACIONES',
    description: 'Habitaciones cómodas y equipadas para que disfrutes de un descanso placentero durante tu estadía.',
    features: [
      { icon: BedDouble, text: 'Camas dobles y triples' },
      { icon: Bath, text: 'Baño privado' },
    ],
  },
  {
    src: '/img/mendoza/pileta-mendoza.jpg',
    alt: 'Pileta climatizada',
    badge: 'Relax',
    title: 'PILETA CLIMATIZADA',
    description: 'Una piscina climatizada rodeada de verde, ideal para refrescarte o simplemente relajarte al aire libre.',
    features: [
      { icon: Sun, text: 'Piscina climatizada' },
      { icon: TreePine, text: 'Entorno natural y arbolado' },
    ],
  },
  {
    src: '/img/mendoza/cancha-futbol.jpg',
    alt: 'Cancha de fútbol',
    badge: 'Deportes',
    title: 'CANCHA DE FÚTBOL',
    description: 'Una cancha de fútbol propia rodeada de árboles, ideal para organizar un partido durante tu estadía.',
    features: [
      { icon: Goal, text: 'Cancha propia' },
      { icon: Sun, text: 'Al aire libre' },
    ],
  },
  {
    src: '/img/mendoza/salon-de-fiesta.jpg',
    alt: 'Salón de eventos',
    badge: 'Eventos',
    title: 'SALÓN DE EVENTOS',
    description: 'Un salón amplio y versátil, preparado para reuniones, celebraciones y eventos de todo tipo.',
    features: [
      { icon: Users, text: 'Gran capacidad' },
      { icon: CalendarCheck, text: 'Ideal para eventos y celebraciones' },
    ],
  },
  {
    src: '/img/mendoza/gastronomia-mendoza.jpg',
    alt: 'Gastronomía Savoia',
    badge: 'Gastronomía',
    title: 'GASTRONOMÍA SAVOIA',
    description: 'Un espacio cálido para disfrutar tus comidas, con la calidez y la calidad que caracterizan a Hoteles Savoia.',
    features: [
      { icon: UtensilsCrossed, text: 'Servicio de desayuno y cena' },
      { icon: Users, text: 'Ambiente familiar' },
    ],
  },
  {
    src: '/img/mendoza/cancha-tenis.jpg',
    alt: 'Cancha de tenis',
    badge: 'Deportes',
    title: 'CANCHA DE TENIS',
    description: 'Una cancha propia para practicar tenis o pádel durante tu estadía, rodeada de un entorno arbolado.',
    features: [
      { icon: Trophy, text: 'Cancha propia' },
      { icon: Sun, text: 'Al aire libre' },
    ],
  },
  {
    src: '/img/mendoza/salon-de-juegos.jpg',
    alt: 'Salón de juegos',
    badge: 'Recreación',
    title: 'SALÓN DE JUEGOS',
    description: 'Un espacio de recreación con pool y ping pong, ideal para disfrutar en familia o con amigos.',
    features: [
      { icon: Gamepad2, text: 'Mesa de pool y ping pong' },
      { icon: Users, text: 'Para toda la familia' },
    ],
  },
];

export default function MendozaPage() {
  return (
    <main>
      <div className="relative flex h-[70vh] w-full items-center justify-center">
        <Image src="/img/home/portada-mendozaaa.jpeg" alt="Hotel Savoia Mendoza" fill priority className="object-cover" />
      </div>

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-center md:py-16">
        <h1 className="text-3xl font-medium md:text-4xl">HOTEL SAVOIA MENDOZA</h1>
        <p className="mt-4 text-savoia-taupe-text">
          Ubicado en el corazón del vino, rodeado de naturaleza.
          <br />
          El lugar perfecto para disfrutar de tus vacaciones.
        </p>
      </RevealSection>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 pb-10 pt-10 md:gap-24 md:px-8 md:pb-16 md:pt-16">
        {SERVICIOS.map((servicio, index) => (
          <RevealSection key={servicio.title}>
            <ServiceRow {...servicio} href="#contacto" ctaLabel="Reservar ahora" imageSide={index % 2 === 0 ? 'left' : 'right'} />
          </RevealSection>
        ))}
      </div>

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

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/5tZqW9x7ouJCyS276"
        locationText="Avellaneda 3653, Bermejo - Mendoza"
        phoneHref="tel:1157379702"
        phoneText="Tel: (+54) 11 5737-9702"
      />
    </main>
  );
}
