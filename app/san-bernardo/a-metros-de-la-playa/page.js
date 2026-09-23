import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | San Bernardo — A metros de la playa' };

const IMAGES = [
  { src: '/img/san-bernardo/playa.jpg', alt: 'Hotel Savoia San Bernardo' },
];

export default function AMetrosDeLaPlayaPage() {
  return (
    <main>
      <RoomDetail
        title="A metros de la playa"
        description="Lo recibimos en un espacio cálido y luminoso, listo para acompañarlo durante toda su estadía, con atención personalizada en un ambiente familiar y tranquilo."
        images={IMAGES}
      />
    </main>
  );
}
