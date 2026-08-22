import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Bar Saint jean' };

const IMAGES = [
  { src: '/img/ostende/servicios2/bar5to/saintjean1.jpg', alt: 'Bar Saint Jean' },
  { src: '/img/ostende/servicios2/bar5to/saintjean2.jpg', alt: 'Bar Saint Jean' },
  { src: '/img/ostende/servicios2/bar5to/saintjean3.jpg', alt: 'Bar Saint Jean' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 18:00 a 00:00hs' },
  { label: 'Información', text: 'Menores de 12 años deben estar acompañados por un adulto responsable.' },
  { label: 'Detalles', text: 'Infusiones y coctelería.' },
  { label: 'Ubicación', text: 'Se encuentra ubicado en el 5to piso con una hermosa vista al mar y muelle de pinamar.' },
];

export default function BarSaintJeanPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/servicios2/bar5to/saintjean-portada.jpg" imageAlt="Bar Saint Jean" />
      <AmenityDetail images={IMAGES} title="BAR SAINT JEAN" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
