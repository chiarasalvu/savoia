import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | San Bernardo — Comedor' };

const IMAGES = [
  { src: '/img/san-bernardo/comedor.jpg', alt: 'Comedor Hotel Savoia San Bernardo' },
];

const AMENITIES = [
  'Servicio de desayuno y cena',
  'Espacio ideal para toda la familia',
];

export default function ComedorPage() {
  return (
    <main>
      <RoomDetail title="Comedor" description={'Un espacio amplio y cómodo para disfrutar de tus comidas durante la estadía, pensado para vacacionar en familia.'} images={IMAGES} amenities={AMENITIES} />
    </main>
  );
}
