import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Bar Woodstock' };

const IMAGES = [
  { src: '/img/ostende/servicios2/barPB/bar1.jpg', alt: 'Bar Woodstock' },
  { src: '/img/ostende/servicios2/barPB/bar2.jpg', alt: 'Bar Woodstock' },
  { src: '/img/ostende/servicios2/barPB/bar3.jpg', alt: 'Bar Woodstock' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 10:00 a 00:00hs' },
  { label: 'Información', text: 'Menores de 12 años deben estar acompañados por un adulto responsable.' },
  { label: 'Detalles', text: 'Comida y coctelería.' },
  { label: 'Actividades recreativas', text: 'Karaoke, bingo, bingo musical, entre otras.' },
];

export default function BarWoodstockPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/servicios2/barPB/bar-portada.jpg" imageAlt="Bar Woodstock" />
      <AmenityDetail images={IMAGES} title="BAR WOODSTOCK" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
