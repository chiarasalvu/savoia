import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Pileta' };

const IMAGES = [
  { src: '/img/ostende/pileta-exteriores/pileta-portada.jpg', alt: 'Pileta climatizada' },
  { src: '/img/ostende/pileta-exteriores/pileta1.jpg', alt: 'Pileta climatizada' },
  { src: '/img/ostende/pileta-exteriores/pileta4.jpg', alt: 'Pileta climatizada' },
  { src: '/img/ostende/pileta-exteriores/pileta3.jpg', alt: 'Pileta climatizada' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 9:00 a 19:00hs' },
  { label: 'Información', text: 'Menores de 12 años deben estar acompañados por un adulto responsable.' },
];

export default function PiletaPage() {
  return (
    <main>
      <RoomDetail
        title="Pileta climatizada"
        description='Cuenta con sección para menores y sección para adultos con más metros de profundidad. Se realizan actividades recreativas dentro de la pileta, guiadas por el área de recreación.'
        images={IMAGES}
        details={DETAILS}
      />
    </main>
  );
}
