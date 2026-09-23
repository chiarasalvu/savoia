import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | San Bernardo — Habitaciones' };

const IMAGES = [
  { src: '/img/san-bernardo/habitacion.jpg', alt: 'Habitación Hotel Savoia San Bernardo' },
];

const AMENITIES = ['TV', 'Ventiladores', 'Baño privado'];

export default function HabitacionesPage() {
  return (
    <main>
      <RoomDetail
        title="Habitaciones"
        description="Dobles, triples y departamentos para 4, 5 y 6 personas con un baño."
        images={IMAGES}
        amenities={AMENITIES}
      />
    </main>
  );
}
