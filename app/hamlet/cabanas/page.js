import { Users, Ruler } from 'lucide-react';
import HamletPageHero from '@/components/HamletPageHero';
import ServiceRow from '@/components/ServiceRow';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Cabañas' };

const UNITS = [
  {
    src: '/img/hamlet/cabanas/real-1.jpg',
    alt: 'Cabaña de Puerto Hamlet entre los pinos',
    badge: '2 personas · 28m²',
    title: 'MONOAMBIENTE',
    description:
      'Un ambiente con placard, baño y kitchenette. LCD, reproductor de DVD, calefactor de tiro balanceado y split frío/calor. Anafe de 2 hornallas, heladera bajo mesada, microondas, tostadora y vajilla completa. Sommier matrimonial. Parrillas de uso compartido a disposición.',
    features: [
      { icon: Users, text: '2 personas' },
      { icon: Ruler, text: '28m²' },
    ],
  },
  {
    src: '/img/hamlet/cabanas/real-2.jpg',
    alt: 'Dormitorio de una cabaña de Puerto Hamlet',
    badge: '2 a 3 personas · 35m²',
    title: 'MONOAMBIENTE FULL',
    description:
      'Un ambiente con placard, baño y cocina completos. LCD, reproductor de DVD, split frío/calor, ventilador de techo, hogar a leños. Cocina con horno, heladera, microondas, tostadora y vajilla completa. Sommier matrimonial (convertible a dos individuales) y parrilla individual.',
    features: [
      { icon: Users, text: '2 a 3 personas' },
      { icon: Ruler, text: '35m²' },
    ],
  },
  {
    src: '/img/hamlet/cabanas/real-3.jpg',
    alt: 'Senderos y cabañas de Puerto Hamlet entre los pinos',
    badge: '3 a 4 personas · 45m²',
    title: 'DOS AMBIENTES',
    description:
      'Dos ambientes con baño y cocina completos. Dormitorio con LCD, split frío/calor, juego de dormitorio matrimonial con sommier, placard. Living comedor con dos sofá cama de una plaza, LCD, reproductor de DVD y hogar a leños. Cocina con horno, heladera, microondas y vajilla completa. Parrilla individual.',
    features: [
      { icon: Users, text: '3 a 4 personas' },
      { icon: Ruler, text: '45m²' },
    ],
  },
  {
    src: '/img/hamlet/cabanas/real-1.jpg',
    alt: 'Cabaña de Puerto Hamlet entre los pinos',
    badge: '5 personas · 55m²',
    title: 'DOS Y ½ AMBIENTES',
    description:
      'Cabaña única en Puerto Hamlet, con patio y parrilla individual: la de mayor intimidad y privacidad del complejo por su distancia con las demás unidades. Dos ambientes con baño y cocina completos, con LCD y reproductor de DVD, más un dormitorio en entrepiso con dos camas de una plaza, aire acondicionado y LCD.',
    features: [
      { icon: Users, text: '5 personas' },
      { icon: Ruler, text: '55m²' },
    ],
  },
  {
    src: '/img/hamlet/cabanas/real-2.jpg',
    alt: 'Dormitorio de una cabaña de Puerto Hamlet',
    badge: '5 a 6 personas · 75m²',
    title: 'TRES AMBIENTES',
    description:
      'Tres ambientes con baño y toilette. Dormitorio principal con split frío/calor y sommier matrimonial. Living comedor con diván cama, reproductor de DVD y hogar a leños. Dormitorio secundario con dos camas de una plaza. Cocina con horno, heladera con freezer, microondas y vajilla completa. Parrilla individual.',
    features: [
      { icon: Users, text: '5 a 6 personas' },
      { icon: Ruler, text: '75m²' },
    ],
  },
];

export default function HamletCabanasPage() {
  return (
    <main>
      <HamletPageHero
        title="CABAÑAS"
        subtitle="31 cabañas distribuidas alrededor de nuestro amplio parque, para 2 a 6 personas."
      />

      <div className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 pb-10 md:gap-24 md:px-8 md:pb-16">
        {UNITS.map((unit, index) => (
          <RevealSection key={unit.title}>
            <ServiceRow {...unit} href="/hamlet/contacto" ctaLabel="Consultar" imageSide={index % 2 === 0 ? 'left' : 'right'} />
          </RevealSection>
        ))}
      </div>

      <RevealSection className="mx-auto mb-16 max-w-[1100px] rounded-2xl bg-savoia-stone px-6 py-8 text-center md:mb-24 md:px-8">
        <p className="text-savoia-taupe-text">
          Todas las unidades cuentan con mueblería de algarrobo, estacionamiento individual descubierto, caja de
          seguridad y Wi-Fi. Consulte por cabañas combinadas para 4 y 6 pasajeros.
        </p>
      </RevealSection>
    </main>
  );
}
