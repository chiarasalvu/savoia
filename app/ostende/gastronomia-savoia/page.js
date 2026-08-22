import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Gastronomía' };

const DESAYUNO_IMAGES = [
  { src: '/img/ostende/desayuno/desayuno1.jpg', alt: 'Desayuno Savoia' },
  { src: '/img/ostende/desayuno/desayuno2.jpg', alt: 'Desayuno Savoia' },
  { src: '/img/ostende/desayuno/desay515.jpg', alt: 'Desayuno Savoia' },
];

const DESAYUNO_DETAILS = [
  { label: 'Horarios', text: 'De 8:00 a 11:00hs' },
  { label: 'Información', text: 'Menores deben estar acompañados por un adulto responsable.' },
  { label: 'Servicio', text: 'Durante las mañanas, podrá disfrutar de un exquisito desayuno BUFFET estilo americano.' },
  { label: 'Importante', text: 'Contamos con alimentos aptos celíacos avisar en recepción y a la hora de realizar la reserva.' },
];

const CENA_IMAGES = [
  { src: '/img/ostende/cena/cena1.jpg', alt: 'Cena Savoia' },
  { src: '/img/ostende/gastronomia2/buffet/cena2.jpg', alt: 'Cena Savoia' },
  { src: '/img/ostende/gastronomia2/buffet/cena3.jpg', alt: 'Cena Savoia' },
];

const CENA_DETAILS = [
  { label: 'Horarios', text: 'De 20:30 a 22:30hs' },
  {
    label: 'Servicio',
    text: 'Todas las noches nuestro chef ejecutivo elabora distintas variedades de platos calientes servidas a la minuta para lograr el verdadero sabor de la comida hogareña. Además de ello se sirven menús temáticos como ser: La noche Mexicana con tacos y nachos · La noche Española con su tradicional Paella Savoia · La noche Oriental con variedad de Sushi · La noche Argentina con la Pata de ternera fileteada por el propio chef en el salón · La noche Italiana con su incomparable festival de pastas',
  },
  { label: 'Costo adicional', text: 'Consultar acerca de este servicio antes de reservar ya que es un servicio adicional.' },
  { label: 'Importante', text: 'Contamos con alimentos aptos celíacos avisar en recepción y a la hora de realizar la reserva.' },
];

export default function GastronomiaSavoiaPage() {
  return (
    <main>
      <AmenityDetail images={DESAYUNO_IMAGES} title="DESAYUNO SAVOIA" detailLines={DESAYUNO_DETAILS} />
      <AmenityDetail images={CENA_IMAGES} title="CENA SAVOIA" detailLines={CENA_DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
