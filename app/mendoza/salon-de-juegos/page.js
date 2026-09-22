import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Salón de juegos' };

const IMAGES = [
  { src: '/img/mendoza/salon-de-juegos.jpg', alt: 'Salón de juegos' },
];

const AMENITIES = [
  'Mesa de pool y ping pong',
  'Para toda la familia',
];

export default function SalonDeJuegosPage() {
  return (
    <main>
      <RoomDetail title="Salón de juegos" description={'Un espacio de recreación con pool y ping pong, ideal para disfrutar en familia o con amigos.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
