import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Pileta exterior' };

const IMAGES = [
  { src: '/img/mendoza/pileta-mendoza.jpg', alt: 'Pileta olímpica exterior' },
];

export default function PiletaPage() {
  return (
    <main>
      <RoomDetail title="Pileta exterior" description="Una pileta olímpica exterior, rodeada de verde, ideal para disfrutar." images={IMAGES} />
    </main>
  );
}
