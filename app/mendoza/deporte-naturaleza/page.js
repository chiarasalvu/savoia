import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Deporte & naturaleza' };

const IMAGES = [
  { src: '/img/mendoza/espacios-verdes-mendoza.jpg', alt: 'Espacios verdes' },
  { src: '/img/mendoza/cancha-tenis.jpg', alt: 'Cancha de pádel' },
  { src: '/img/mendoza/cancha-futbol.jpg', alt: 'Cancha de fútbol' },
];

const AMENITIES = [
  'Vista a la cordillera',
  'Canchas de pádel y fútbol',
];

export default function DeporteNaturalezaPage() {
  return (
    <main>
      <RoomDetail title="Deporte & naturaleza" description={'Un entorno único rodeado de montañas y espacios verdes, con canchas propias de pádel y fútbol para disfrutar al aire libre.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
