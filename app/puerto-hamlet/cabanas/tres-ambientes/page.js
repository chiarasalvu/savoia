import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Tres Ambientes' };

const IMAGES = [{ src: '/img/puerto-hamlet/cabanas/real-2.jpg', alt: 'Dormitorio de una cabaña Tres Ambientes de Puerto Hamlet' }];

const AMENITIES = [
  'Dormitorio principal con 1 baño y sommier matrimonial',
  'Dormitorio secundario con 1 baño y dos camas de una plaza',
  'Living comedor con diván cama',
  'Split frío/calor',
  'TV',
  'Hogar a leños',
  'Horno, heladera con freezer y microondas',
  'Vajilla completa',
  'Parrilla individual',
];

export default function TresAmbientesPage() {
  return (
    <main>
      <RoomDetail
        title="Tres Ambientes"
        description="Tres ambientes con 2 baños, para 5 a 6 personas. Dos dormitorios y living comedor con diván cama."
        images={IMAGES}
        maxCapacity="5 a 6 personas · 75 m²"
        amenities={AMENITIES}
      />
    </main>
  );
}
