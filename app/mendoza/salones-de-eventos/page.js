import RoomDetail from '@/components/RoomDetail';
import { SALONES } from '@/lib/mendozaSalones';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Salones de eventos' };

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
