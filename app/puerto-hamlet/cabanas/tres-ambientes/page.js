import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Tres Ambientes' };

const IMAGES = [{ src: '/img/puerto-hamlet/cabanas/real-2.jpg', alt: 'Dormitorio de una cabaña Tres Ambientes de Puerto Hamlet' }];

const AMENITIES = [
  'Baño y toilette',
  'Dormitorio principal con split frío/calor y sommier matrimonial',
  'Dormitorio secundario con dos camas de una plaza',
  'Living comedor con diván cama',
  'Reproductor de DVD',
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
        description="Tres ambientes con baño y toilette, para 5 a 6 personas. Dormitorio principal, dormitorio secundario y living comedor con diván cama."
        images={IMAGES}
        maxCapacity="5 a 6 personas · 75 m²"
        amenities={AMENITIES}
      />
    </main>
  );
}
