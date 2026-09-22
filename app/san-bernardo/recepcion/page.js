import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | San Bernardo — Recepción' };

const IMAGES = [
  { src: '/img/san-bernardo/recepcion.jpg', alt: 'Recepción Hotel Savoia San Bernardo' },
];

const AMENITIES = [
  'Atención personalizada',
  'A metros de la playa',
  'Ambiente familiar y tranquilo',
];

export default function RecepcionPage() {
  return (
    <main>
      <RoomDetail title="Recepción" description={'Te recibimos en un espacio cálido y luminoso, listo para acompañarte durante toda tu estadía en San Bernardo.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
