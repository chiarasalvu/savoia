import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | San Bernardo — Habitaciones' };

const IMAGES = [
  { src: '/img/san-bernardo/habitacion.jpg', alt: 'Habitación Hotel Savoia San Bernardo' },
];

const AMENITIES = [
  'Camas dobles y triples',
  'Baño privado',
];

export default function HabitacionesPage() {
  return (
    <main>
      <RoomDetail title="Habitaciones" description={'Habitaciones cómodas y equipadas para que disfrutes de un descanso placentero después de un día de playa.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
