import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };

const IMAGES = [
  { src: '/img/ostende/habitaciones2/piso2/foto1-standard.jpg', alt: 'Categoría Estandar' },
  { src: '/img/ostende/habitaciones2/piso2/foto2-standard.jpg', alt: 'Categoría Estandar' },
];

const DETAILS = [
  {
    label: 'Camas',
    text: 'Habitaciones dobles que se pueden colocar camas adicionales para convertirlas en triples; contamos con habitaciónes comunicadas para 4/5 personas',
  },
  { label: 'Tamaño', text: 'Las habitaciones doble Standard poseen una superficie de 20 m2.' },
  {
    label: 'Detalles',
    text: 'Dichas habitaciones disponen de camas Sommier, Frigobar, LCD 32 pulgadas, aire acondicionado, ventilador de techo, secador de pelo, caja de seguridad, baño con ducha.',
  },
];

export default function CategoriaStandardPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/habitaciones2/piso2/portada-standard.jpg" imageAlt="Categoría Estandar" title="CATEGORÍA ESTANDAR" />
      <AmenityDetail images={IMAGES} title="DESCRIPCIÓN" detailLines={DETAILS} />
      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
