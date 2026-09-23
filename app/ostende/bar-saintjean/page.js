import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Bar Saint Jean' };

const IMAGES = [
  { src: '/img/ostende/servicios2/bar5to/saintjean-portada.jpg', alt: 'Bar Saint Jean' },
  { src: '/img/ostende/servicios2/bar5to/saintjean1.jpg', alt: 'Bar Saint Jean' },
  { src: '/img/ostende/servicios2/bar5to/saintjean2.jpg', alt: 'Bar Saint Jean' },
  { src: '/img/ostende/servicios2/bar5to/saintjean3.jpg', alt: 'Bar Saint Jean' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 18:00 a 00:00hs' },
  { label: 'Información', text: 'Los menores de 12 años deben estar siempre acompañados por un adulto responsable.' },
];

export default function BarSaintJeanPage() {
  return (
    <main>
      <RoomDetail
        title="Bar Saint Jean"
        description='Infusiones y coctelería en el 5to piso, con una hermosa vista al mar y al muelle de Pinamar.'
        images={IMAGES}
        details={DETAILS}
      />
    </main>
  );
}
