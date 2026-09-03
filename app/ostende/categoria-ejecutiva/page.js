import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };

const IMAGES = [
  { src: '/img/ostende/habitaciones2/piso4/p404.jpg', alt: 'Categoría Ejecutiva' },
  { src: '/img/ostende/habitaciones2/piso4/ejecutiva2.jpg', alt: 'Categoría Ejecutiva' },
  { src: '/img/ostende/habitaciones2/piso4/p407.jpg', alt: 'Categoría Ejecutiva' },
];

const DETAILS = [
  {
    label: 'Camas',
    text: 'Habitaciones dobles que se pueden colocar camas adicionales para convertirlas en triples; contamos con habitaciónes comunicadas para 4/5 personas',
  },
  {
    label: 'Tamaño',
    text: 'Las habitaciones en Categoría ejecutiva cuentan con una superficie de 20 m2 y una fabulosa vista al Mar.',
  },
  {
    label: 'Detalles',
    text: 'Las mismas están equipadas con cerraduras magnéticas (Hotel Locking System), confortables camas tamaño Queen size (matrimonial) o Twins de 1 plaza, Frigobar, LCD 32 pulgadas, aire acondicionado, ventilador de techo, secador de cabello, caja de seguridad y baño con bañera.',
  },
];

export default function CategoriaEjecutivaPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/habitaciones2/piso4/portada-ejecutiva.jpg" imageAlt="Categoría Ejecutiva" title="CATEGORÍA EJECUTIVA" />
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
