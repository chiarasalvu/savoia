import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Monoambiente' };

const IMAGES = [{ src: '/img/puerto-hamlet/cabanas/real-1.jpg', alt: 'Cabaña Monoambiente de Puerto Hamlet entre los pinos' }];

const AMENITIES = [
  'Placard',
  'Baño y kitchenette',
  'LCD y reproductor de DVD',
  'Calefactor de tiro balanceado',
  'Split frío/calor',
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
        description="Un ambiente con placard, baño y kitchenette, pensado para 2 personas. Cuenta con parrillas de uso compartido a disposición."
        images={IMAGES}
        maxCapacity="2 personas · 28 m²"
        amenities={AMENITIES}
      />
    </main>
  );
}
