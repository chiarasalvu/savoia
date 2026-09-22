import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mini Club' };

const IMAGES = [
  { src: '/img/ostende/servicios2/salaJuegos/miniclub-portada.jpg', alt: 'Mini Club' },
  { src: '/img/ostende/servicios2/salaJuegos/miniclub1.jpg', alt: 'Mini Club' },
  { src: '/img/ostende/servicios2/salaJuegos/miniclub2.jpg', alt: 'Mini Club' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 9:00 a 19:00hs' },
  { label: 'Información', text: 'Menores de 12 años requieren la presencia de un adulto.' },
];

export default function MiniclubPage() {
  return (
    <main>
      <RoomDetail
        title="Sala de recreación"
        description='Actividades recreativas organizadas por el área de recreación, con juegos habilitados durante todo el día.'
        images={IMAGES}
        details={DETAILS}
      />
    </main>
  );
}
