import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Monoambiente' };

const IMAGES = [
  { src: '/img/puerto-hamlet/cabanas/monoambiente-portada.jpg', alt: 'Cama matrimonial de la cabaña Monoambiente de Puerto Hamlet' },
  { src: '/img/puerto-hamlet/cabanas/monoambiente-2.jpg', alt: 'Kitchenette con anafe y heladera de la cabaña Monoambiente de Puerto Hamlet' },
  { src: '/img/puerto-hamlet/cabanas/monoambiente-3.jpg', alt: 'Parrilla de uso compartido de la cabaña Monoambiente de Puerto Hamlet' },
];

const AMENITIES = [
  'Baño y kitchenette',
  'TV',
  'Calefactor',
  'Anafe de 2 hornallas',
  'Heladera bajo mesada, microondas y tostadora',
  'Vajilla completa',
  'Sommier matrimonial',
  'Parrillas de uso compartido',
];

export default function MonoambientePage() {
  return (
    <main>
      <RoomDetail
        title="Monoambiente"
        description="Un ambiente con baño y kitchenette, pensado para 2 personas. Cuenta con parrillas de uso compartido a disposición."
        images={IMAGES}
        maxCapacity="2 personas · 28 m²"
        amenities={AMENITIES}
      />
    </main>
  );
}
