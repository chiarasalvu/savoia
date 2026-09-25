import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Gastronomía' };

const IMAGES = [
  { src: '/img/mendoza/gastronomia-mendoza.jpg', alt: 'Gastronomía Savoia' },
];

const AMENITIES = [
  'Servicio de desayuno',
  'Cenas buffet (temporada alta)',
  'Elaboración propia',
  'Ambiente familiar',
];

export default function GastronomiaPage() {
  return (
    <main>
      <RoomDetail title="Gastronomía Savoia" description={'Nuestra hotelería es reconocida por su exquisita y variada oferta gastronómica, elaborada en cada establecimiento con materia prima de primera calidad, logrando sabores propios de la mejor cocina casera.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
