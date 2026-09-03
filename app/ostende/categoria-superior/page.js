import HeroBand from '@/components/HeroBand';
import AmenityDetail from '@/components/AmenityDetail';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };

const IMAGES = [
  { src: '/img/ostende/categoria-superior/foto1-superior.jpg', alt: 'Categoría Superior' },
  { src: '/img/ostende/categoria-superior/foto2-superior.jpg', alt: 'Categoría Superior' },
];

const DETAILS = [
  {
    label: 'Camas',
    text: 'Habitaciones dobles que se pueden colocar camas adicionales para convertirlas en triples; contamos con habitaciónes comunicadas para 4/5 personas',
  },
  {
    label: 'Tamaño',
    text: 'Las habitaciones doble superior poseen un amplio espacio de 28 y 30 m2 aproximadamente, y cuentan con una vista franca e imponente al Mar y al entorno natural.',
  },
  {
    label: 'Detalles',
    text: 'Se encuentran altamente equipadas con cerraduras magnéticas (Hotel Locking System), camas tamaño King size, Frigobar, LCD 42 pulgadas, aire acondicionado, secador de cabello, caja de seguridad, y un completo cuarto de baño con bañera.',
  },
];

export default function CategoriaSuperiorPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/categoria-superior/portada-superior.jpg" imageAlt="Categoría Superior" title="CATEGORÍA SUPERIOR" />
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
