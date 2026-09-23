import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Pileta' };

const IMAGES = [
  { src: '/img/ostende/pileta-exteriores/pileta-portada.jpg', alt: 'Pileta & Bar Naples' },
  { src: '/img/ostende/pileta-exteriores/pileta1.jpg', alt: 'Pileta & Bar Naples' },
  { src: '/img/ostende/pileta-exteriores/pileta4.jpg', alt: 'Pileta & Bar Naples' },
  { src: '/img/ostende/pileta-exteriores/pileta3.jpg', alt: 'Pileta & Bar Naples' },
  { src: '/img/ostende/pileta-exteriores/pileta5.jpg', alt: 'Pileta & Bar Naples' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 9:00 a 19:00hs' },
  { label: 'Información', text: 'Los menores de 12 años deben estar siempre acompañados por un adulto responsable.' },
];

export default function PiletaPage() {
  return (
    <main>
      <RoomDetail
        title="Pileta & Bar Naples"
        description="Cuenta con sector para niños y sector para adultos, con mayor profundidad. Durante el día se realizan actividades recreativas dentro del agua, a cargo de nuestro equipo de recreación. Junto a la pileta, el Bar Naples ofrece opciones para comer y beber durante todo el día: almuerzos, meriendas, licuados y tragos."
        images={IMAGES}
        details={DETAILS}
      />
    </main>
  );
}
