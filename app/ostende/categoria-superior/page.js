import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Categoría Superior' };

const IMAGES = [
  { src: '/img/ostende/categoria-superior/portada-superior.jpg', alt: 'Categoría Superior' },
  { src: '/img/ostende/categoria-superior/foto1-superior.jpg', alt: 'Categoría Superior' },
  { src: '/img/ostende/categoria-superior/foto2-superior.jpg', alt: 'Categoría Superior' },
];

const AMENITIES = [
  'Cerraduras magnéticas (Hotel Locking System)',
  'Camas tamaño King size',
  'Frigobar',
  'LCD 42 pulgadas',
  'Aire acondicionado',
  'Secador de cabello',
  'Caja de seguridad',
  'Baño con bañera',
];

export default function CategoriaSuperiorPage() {
  return (
    <main>
      <RoomDetail
        title="Categoría Superior"
        description="Habitaciones dobles de 28 a 30 m² aproximadamente, con una vista franca e imponente al mar y al entorno natural. Se pueden agregar camas adicionales para convertirlas en triples, y contamos con habitaciones comunicadas para 4/5 personas."
        images={IMAGES}
        maxCapacity="2 adultos (hasta 3 con cama adicional)"
        amenities={AMENITIES}
      />
    </main>
  );
}
