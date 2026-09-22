import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Recepción' };

const IMAGES = [
  { src: '/img/mendoza/recepcion-mendoza.jpg', alt: 'Recepción Hotel Savoia Mendoza' },
];

const AMENITIES = [
  'Atención personalizada',
  'Ambiente cálido y elegante',
];

export default function RecepcionPage() {
  return (
    <main>
      <RoomDetail title="Recepción" description={'Te recibimos en un espacio cálido y elegante, listo para acompañarte durante toda tu estadía en Mendoza.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
