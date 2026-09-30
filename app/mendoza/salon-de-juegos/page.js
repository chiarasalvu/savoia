import RoomDetail from '@/components/RoomDetail';

export const metadata = {
  title: 'Salón de Juegos — Hotel Savoia Mendoza',
  description: 'Espacio de recreación con pool y ping pong, ideal para disfrutar en familia o con amigos. Hotel Savoia Mendoza.',
};

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
