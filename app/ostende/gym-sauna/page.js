import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Gimnasio y sauna' };

const IMAGES = [
  { src: '/img/ostende/servicios2/Gimnasio/gym-hero.jpg', alt: 'Gimnasio y sauna' },
  { src: '/img/ostende/servicios2/Gimnasio/gym1.jpg', alt: 'Gimnasio y sauna' },
  { src: '/img/ostende/servicios2/sauna-masajes/sauna2.jpg', alt: 'Gimnasio y sauna' },
  { src: '/img/ostende/servicios2/sauna-masajes/sauna3.jpg', alt: 'Gimnasio y sauna' },
];

const DETAILS = [
  { label: 'Horario gimnasio', text: 'De 7:00 a 22:00hs' },
  { label: 'Información', text: 'Los menores de 18 años deben estar siempre acompañados por un adulto responsable.' },
];

export default function GymSaunaPage() {
  return (
    <main>
      <RoomDetail
        title="Gimnasio y sauna"
        description='Contamos con gimnasio equipado y sauna. Para utilizar el sauna es necesario solicitar turno en recepción y consultar los días disponibles.'
        images={IMAGES}
        details={DETAILS}
      />
    </main>
  );
}
