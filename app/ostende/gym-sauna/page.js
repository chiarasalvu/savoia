import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Gimnasio y sauna' };

const IMAGES = [
  { src: '/img/ostende/servicios2/Gimnasio/gym1.jpg', alt: 'Gimnasio y sauna' },
  { src: '/img/ostende/servicios2/sauna-masajes/sauna2.jpg', alt: 'Gimnasio y sauna' },
  { src: '/img/ostende/servicios2/sauna-masajes/sauna3.jpg', alt: 'Gimnasio y sauna' },
];

const DETAILS = [
  { label: 'Horario gimnasio', text: 'De 7:00 a 22:00hs' },
  { label: 'Información', text: 'Menores de 18 años deben estar acompañados por un adulto responsable.' },
  { label: 'Sauna', text: 'Pedir turno para que habiliten el sauna en recepción. Consultar días disponibles para reservar.' },
];

export default function GymSaunaPage() {
  return (
    <main>
      <AmenityDetail images={IMAGES} title="GIMNASIO Y SAUNA" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
