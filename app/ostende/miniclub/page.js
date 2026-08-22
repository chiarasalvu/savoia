import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Mini Club' };

const IMAGES = [
  { src: '/img/ostende/servicios2/salaJuegos/miniclub1.jpg', alt: 'Mini Club' },
  { src: '/img/ostende/servicios2/salaJuegos/miniclub2.jpg', alt: 'Mini Club' },
  { src: '/img/ostende/servicios2/salaJuegos/miniclub-portada.jpg', alt: 'Mini Club' },
];

const DETAILS = [
  { label: 'Horarios', text: 'De 9:00 a 19:00hs' },
  { label: 'Información', text: 'Menores de 12 años requieren la presencia de un adulto.' },
  { label: 'Actividades', text: 'Actividades recreativas organizadas por el área de recreación. Juegos habilitados durante todo el día.' },
];

export default function MiniclubPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/servicios2/salaJuegos/miniclub-portada.jpg" imageAlt="Mini Club" />
      <AmenityDetail images={IMAGES} title="SALA DE RECREACIÓN" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
