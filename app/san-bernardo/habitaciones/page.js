import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | San Bernardo — Habitaciones' };

const IMAGES = [
  { src: '/img/san-bernardo/habitacion.jpg', alt: 'Habitación Hotel Savoia San Bernardo' },
];

const AMENITIES = ['Wifi', 'Aire acondicionado', 'TV'];

export default function HabitacionesPage() {
  return (
    <main>
      <RoomDetail
        title="Habitaciones"
        description="Dobles y triples, equipadas para un descanso placentero."
        images={IMAGES}
        amenities={AMENITIES}
      />
    </main>
  );
}
