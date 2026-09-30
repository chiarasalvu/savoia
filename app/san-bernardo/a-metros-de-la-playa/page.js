import RoomDetail from '@/components/RoomDetail';

export const metadata = {
  title: 'A Metros de la Playa — Hotel Savoia San Bernardo',
  description: 'Recepción cálida y luminosa, con atención personalizada en un ambiente familiar y tranquilo, a metros de la playa. Hotel Savoia San Bernardo.',
};

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
