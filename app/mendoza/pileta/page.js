import RoomDetail from '@/components/RoomDetail';

export const metadata = {
  title: 'Pileta Exterior — Hotel Savoia Mendoza',
  description: 'Pileta olímpica exterior, rodeada de verde, ideal para disfrutar. Hotel Savoia Mendoza.',
};

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
