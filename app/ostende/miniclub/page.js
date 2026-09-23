import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mini Club' };

const IMAGES = [
  { src: '/img/ostende/servicios2/salaJuegos/miniclub-portada.jpg', alt: 'Mini Club' },
  { src: '/img/ostende/servicios2/salaJuegos/miniclub1.jpg', alt: 'Mini Club' },
  { src: '/img/ostende/servicios2/salaJuegos/miniclub2.jpg', alt: 'Mini Club' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 9:00 a 19:00hs' },
  { label: 'Información', text: 'Los menores de 12 años deben estar siempre acompañados por un adulto responsable.' },
];

export default function MiniclubPage() {
  return (
    <main>
      <RoomDetail
        title="Sala de recreación"
        description='Actividades recreativas organizadas por nuestro equipo de recreación, con juegos habilitados durante todo el día.'
        images={IMAGES}
        details={DETAILS}
      />
    </main>
  );
}
