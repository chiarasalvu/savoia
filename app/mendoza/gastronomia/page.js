import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Gastronomía' };

const IMAGES = [
  { src: '/img/mendoza/gastronomia-mendoza.jpg', alt: 'Gastronomía Savoia' },
];

const AMENITIES = [
  'Servicio de desayuno y cena',
  'Ambiente familiar',
];

export default function GastronomiaPage() {
  return (
    <main>
      <RoomDetail title="Gastronomía Savoia" description={'Un espacio cálido para disfrutar tus comidas, con la calidez y la calidad que caracterizan a Hoteles Savoia.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
