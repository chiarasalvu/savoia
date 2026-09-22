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
  { label: 'Información', text: 'Menores deben estar acompañados por un adulto responsable.' },
  { label: 'Importante', text: 'Contamos con alimentos aptos celíacos avisar en recepción y a la hora de realizar la reserva.' },
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
  { label: 'Costo adicional', text: 'Consultar acerca de este servicio antes de reservar ya que es un servicio adicional.' },
  { label: 'Importante', text: 'Contamos con alimentos aptos celíacos avisar en recepción y a la hora de realizar la reserva.' },
];

export default function GastronomiaSavoiaPage() {
  return (
    <main>
      <RoomDetail
        title="Desayuno Savoia"
        description="Durante las mañanas, podrá disfrutar de un exquisito desayuno buffet estilo americano."
        images={DESAYUNO_IMAGES}
        details={DESAYUNO_DETAILS}
      />
      <RoomDetail
        compact
        headingTag="h2"
        title="Cena Savoia"
        description="Todas las noches nuestro chef ejecutivo elabora distintas variedades de platos calientes servidas a la minuta para lograr el verdadero sabor de la comida hogareña. Además se sirven menús temáticos: la noche Mexicana con tacos y nachos, la noche Española con su tradicional Paella Savoia, la noche Oriental con variedad de sushi, la noche Argentina con la pata de ternera fileteada por el propio chef en el salón y la noche Italiana con su incomparable festival de pastas."
        images={CENA_IMAGES}
        details={CENA_DETAILS}
      />
    </main>
  );
}
