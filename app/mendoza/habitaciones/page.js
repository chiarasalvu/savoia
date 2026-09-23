import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Habitaciones' };

const IMAGES = [
  { src: '/img/mendoza/habitacion1-mendoza.jpg', alt: 'Habitación Hotel Savoia Mendoza' },
];

const AMENITIES = [
  'Camas dobles y triples',
  'Baño privado',
];

export default function HabitacionesPage() {
  return (
    <main>
      <RoomDetail
        title="Habitaciones"
        description="Hotel Savoia Mendoza cuenta con 103 habitaciones entre dobles, triples y departamentos, pensadas para que disfrute de un descanso placentero durante toda su estadía."
        images={IMAGES}
        amenities={AMENITIES}
      />
    </main>
  );
}
