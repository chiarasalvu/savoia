import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | San Bernardo — Gastronomía' };

const IMAGES = [
  { src: '/img/ostende/desayuno/desayuno-1.jpg', alt: 'Masitas del desayuno de Hoteles Savoia' },
  { src: '/img/ostende/cena/cena-6.jpg', alt: 'Postres del buffet de Hoteles Savoia' },
  { src: '/img/ostende/cena/cena-4.jpg', alt: 'Ensaladas del buffet de Hoteles Savoia' },
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
