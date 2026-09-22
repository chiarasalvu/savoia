import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Salón de eventos' };

const IMAGES = [
  { src: '/img/mendoza/salon-de-fiesta.jpg', alt: 'Salón de eventos' },
];

const AMENITIES = [
  'Gran capacidad',
  'Ideal para eventos y celebraciones',
];

export default function SalonDeEventosPage() {
  return (
    <main>
      <RoomDetail title="Salón de eventos" description={'Un salón amplio y versátil, preparado para reuniones, celebraciones y eventos de todo tipo.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
