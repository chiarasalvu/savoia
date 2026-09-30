import RoomDetail from '@/components/RoomDetail';
import { SALONES } from '@/lib/mendozaSalones';

export const metadata = {
  title: 'Salones de Eventos — Hotel Savoia Mendoza',
  description: 'Tres salones amplios y versátiles para reuniones, conferencias, celebraciones y eventos de todo tipo. Hotel Savoia Mendoza.',
};

const IMAGES = [
  { src: '/img/mendoza/salon-de-fiesta.jpg', alt: 'Salón de eventos del Hotel Savoia Mendoza' },
];

const DETAILS = SALONES.map((salon) => ({ label: salon.title, text: salon.text }));

export default function SalonesDeEventosPage() {
  return (
    <main>
      <RoomDetail
        title="Salones de eventos"
        description="Hotel Savoia Mendoza cuenta con tres salones amplios y versátiles, preparados para reuniones, conferencias, celebraciones y eventos de todo tipo."
        images={IMAGES}
        details={DETAILS}
        cta={{ href: '/mendoza/grupos-eventos', label: 'Ver grupos y eventos' }}
      />
    </main>
  );
}
