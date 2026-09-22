import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Pileta exterior' };

const IMAGES = [
  { src: '/img/mendoza/pileta-mendoza.jpg', alt: 'Pileta exterior' },
];

const AMENITIES = [
  'Piscina exterior',
  'Entorno natural y arbolado',
];

export default function PiletaPage() {
  return (
    <main>
      <RoomDetail title="Pileta exterior" description={'Una piscina exterior rodeada de verde, ideal para refrescarte o simplemente relajarte al aire libre.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
