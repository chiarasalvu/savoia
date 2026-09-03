import { Clock, UtensilsCrossed, ShieldCheck, Music, Users, Waves, Coffee, Baby, Activity, Flame, Puzzle } from 'lucide-react';
import ServiceRow from '@/components/ServiceRow';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Servicios' };

const SERVICES = [
  {
    src: '/img/ostende/servicios/cocina-ostende.jpg',
    alt: 'Gastronomía Savoia',
    badge: 'Gastronomía',
    title: 'GASTRONOMÍA SAVOIA',
    description:
      'Una propuesta gastronómica única, elaborada en el hotel: desayuno buffet estilo americano por las mañanas y cenas con menús temáticos cada noche.',
    features: [
      { icon: Clock, text: 'Desayuno de 8 a 11hs · Cena de 20:30 a 22:30hs' },
      { icon: UtensilsCrossed, text: 'Menús temáticos: mexicana, española, oriental e italiana' },
      { icon: ShieldCheck, text: 'Opciones aptas para celíacos (avisar en recepción)' },
    ],
    href: '/ostende/gastronomia-savoia',
  },
  {
    src: '/img/ostende/servicios/bar-abajo.jpg',
    alt: 'Bar Woodstock',
    badge: 'Bar',
    title: 'BAR WOODSTOCK',
    description:
      'Comida y coctelería en planta baja, con actividades recreativas como karaoke y bingo musical para disfrutar en familia.',
    features: [
      { icon: Clock, text: 'Abierto de 10:00 a 00:00hs' },
      { icon: Music, text: 'Karaoke y bingo musical' },
      { icon: Users, text: 'Menores de 12 acompañados por un adulto' },
    ],
    href: '/ostende/bar-woodstock',
  },
  {
    src: '/img/ostende/servicios/bar-piso5.jpg',
    alt: 'Bar Saint Jean',
    badge: 'Vista al mar',
    title: 'BAR SAINT JEAN',
    description:
      'Infusiones y coctelería en el 5to piso, con una vista panorámica al mar y al muelle de Pinamar.',
    features: [
      { icon: Clock, text: 'Abierto de 18:00 a 00:00hs' },
      { icon: Waves, text: 'Vista al mar y al muelle de Pinamar' },
      { icon: Coffee, text: 'Infusiones y coctelería' },
    ],
    href: '/ostende/bar-saintjean',
  },
  {
    src: '/img/ostende/servicios/pileta-ostende.jpg',
    alt: 'Piscina climatizada',
    badge: 'Relax',
    title: 'PISCINA CLIMATIZADA',
    description:
      'Piscina exterior climatizada con sector especial para niños, solárium y actividades recreativas guiadas.',
    features: [
      { icon: Clock, text: 'Abierto de 9:00 a 19:00hs' },
      { icon: Baby, text: 'Sector especial para niños' },
      { icon: Activity, text: 'Actividades recreativas guiadas' },
    ],
    href: '/ostende/pileta',
  },
  {
    src: '/img/ostende/servicios/gimnasio.jpg',
    alt: 'Gimnasio y sauna',
    badge: 'Bienestar',
    title: 'GIMNASIO Y SAUNA',
    description:
      'Gimnasio equipado y sauna con turno reservable en recepción, ideal para mantener tu rutina durante las vacaciones.',
    features: [
      { icon: Clock, text: 'Gimnasio de 7:00 a 22:00hs' },
      { icon: Flame, text: 'Sauna con turno previo en recepción' },
      { icon: Users, text: 'Mayores de 18 años' },
    ],
    href: '/ostende/gym-sauna',
  },
  {
    src: '/img/ostende/servicios/saladejuegos.jpg',
    alt: 'Mini Club',
    badge: 'Para los más chicos',
    title: 'MINI CLUB',
    description:
      'Sala de recreación con juegos y actividades organizadas por nuestro equipo, pensada para que los más chicos se diviertan todo el día.',
    features: [
      { icon: Clock, text: 'Abierto de 9:00 a 19:00hs' },
      { icon: Puzzle, text: 'Juegos y actividades todo el día' },
      { icon: Users, text: 'Menores de 12 con presencia de un adulto' },
    ],
    href: '/ostende/miniclub',
  },
];

export default function OstendeServiciosPage() {
  return (
    <main>
      <h1 className="mt-16 text-center text-3xl font-medium text-savoia-charcoal md:mt-10 md:text-4xl">SERVICIOS</h1>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 py-10 md:gap-24 md:px-8 md:py-16">
        {SERVICES.map((service, index) => (
          <RevealSection key={service.href}>
            <ServiceRow {...service} imageSide={index % 2 === 0 ? 'left' : 'right'} />
          </RevealSection>
        ))}
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
