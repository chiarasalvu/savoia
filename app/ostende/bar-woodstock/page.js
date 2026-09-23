import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Bar Woodstock' };

const IMAGES = [
  { src: '/img/ostende/servicios2/barPB/bar-portada.jpg', alt: 'Bar Woodstock' },
  { src: '/img/ostende/servicios2/barPB/bar1.jpg', alt: 'Bar Woodstock' },
  { src: '/img/ostende/servicios2/barPB/bar2.jpg', alt: 'Bar Woodstock' },
  { src: '/img/ostende/servicios2/barPB/bar3.jpg', alt: 'Bar Woodstock' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 10:00 a 00:00hs' },
  { label: 'Información', text: 'Los menores de 12 años deben estar siempre acompañados por un adulto responsable.' },
];

export default function BarWoodstockPage() {
  return (
    <main>
      <RoomDetail
        title="Bar Woodstock"
        description='Comida y coctelería en planta baja, con actividades recreativas a cargo de nuestro equipo de recreación (karaoke, bingo, truco, entre otras).'
        images={IMAGES}
        details={DETAILS}
      />
    </main>
  );
}
