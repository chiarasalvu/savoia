import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Gastronomía' };

const DESAYUNO_IMAGES = [
  { src: '/img/ostende/desayuno/desayuno-1.jpg', alt: 'Masitas Desayuno Savoia' },
  { src: '/img/ostende/desayuno/desayuno-2.jpg', alt: 'Masitas Desayuno Savoia' },
  { src: '/img/ostende/desayuno/desayuno-3.jpg', alt: 'Desayuno Savoia' },
  { src: '/img/ostende/desayuno/desayuno-4.jpg', alt: 'Huevos revueltos Desayuno Savoia' },
];

const DESAYUNO_DETAILS = [
  { label: 'Horarios', text: 'De 8:00 a 11:00hs' },
  { label: 'Información', text: 'Los menores de 12 años deben estar siempre acompañados por un adulto responsable.' },
  { label: 'Importante', text: 'Contamos con alimentos aptos para celíacos. Por favor, avisar en recepción o al momento de realizar la reserva.' },
];

const CENA_IMAGES = [
  { src: '/img/ostende/cena/cena-1.jpg', alt: 'Cena Savoia' },
  { src: '/img/ostende/cena/cena-2.jpg', alt: 'Cena Savoia' },
  { src: '/img/ostende/cena/cena-3.jpg', alt: 'Cena Savoia' },
  { src: '/img/ostende/cena/cena-4.jpg', alt: 'Cena Savoia' },
  { src: '/img/ostende/cena/cena-5.jpg', alt: 'Cena Savoia' },
  { src: '/img/ostende/cena/cena-6.jpg', alt: 'Cena Savoia' },
];

const CENA_DETAILS = [
  { label: 'Horarios', text: 'De 20:30 a 22:30hs' },
  { label: 'Costo adicional', text: 'Este es un servicio adicional. Te recomendamos consultar por su disponibilidad y costo antes de realizar la reserva.' },
  { label: 'Importante', text: 'Contamos con alimentos aptos para celíacos. Por favor, avisar en recepción o al momento de realizar la reserva.' },
];

export default function GastronomiaSavoiaPage() {
  return (
    <main>
      <RoomDetail
        title="Desayuno Savoia"
        description="Cada mañana podrá disfrutar de un desayuno buffet estilo americano, con una variada selección de opciones dulces y saladas."
        images={DESAYUNO_IMAGES}
        details={DESAYUNO_DETAILS}
      />
      <RoomDetail
        compact
        reverse
        headingTag="h2"
        title="Cena Savoia"
        description="Todas las noches, nuestro chef ejecutivo elabora una variedad de platos calientes servidos a la minuta, buscando el verdadero sabor de la comida hogareña. Además, ofrecemos menús temáticos especiales: la noche Mexicana, con tacos y nachos; la noche Española, con nuestra tradicional Paella Savoia; la noche Oriental, con variedad de sushi; la noche Argentina, con la pata de ternera fileteada por el propio chef en el salón; y la noche Italiana, con su incomparable festival de pastas."
        images={CENA_IMAGES}
        details={CENA_DETAILS}
      />
    </main>
  );
}
