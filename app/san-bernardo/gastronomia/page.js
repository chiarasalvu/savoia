import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | San Bernardo — Gastronomía' };

const IMAGES = [
  { src: '/img/ostende/desayuno/desayuno-1.jpg', alt: 'Buffet de Hoteles Savoia' },
];

export default function GastronomiaPage() {
  return (
    <main>
      <RoomDetail
        title="Gastronomía"
        description="Un espacio amplio y cómodo para disfrutar de sus comidas durante la estadía, pensado para vacacionar en familia."
        images={IMAGES}
      />
    </main>
  );
}
