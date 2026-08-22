import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Pileta' };

const IMAGES = [
  { src: '/img/ostende/pileta-exteriores/pileta1.jpg', alt: 'Pileta climatizada' },
  { src: '/img/ostende/pileta-exteriores/pileta4.jpg', alt: 'Pileta climatizada' },
  { src: '/img/ostende/pileta-exteriores/pileta3.jpg', alt: 'Pileta climatizada' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 9:00 a 19:00hs' },
  { label: 'Información', text: 'Menores de 12 años deben estar acompañados por un adulto responsable.' },
  { label: 'Tamaño', text: 'Cuenta con sección para menores y sección para adultos con más metros de profundidad.' },
  { label: 'Actividades', text: 'Se realizan actividades recreativas dentro de la pileta guiadas por el área de recreación.' },
];

export default function PiletaPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/pileta-exteriores/pileta-portada.jpg" imageAlt="Pileta climatizada" />
      <AmenityDetail images={IMAGES} title="PILETA CLIMATIZADA" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
