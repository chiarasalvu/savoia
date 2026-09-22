import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Categoría Ejecutiva' };

const IMAGES = [
  { src: '/img/ostende/habitaciones2/piso4/portada-ejecutiva.jpg', alt: 'Categoría Ejecutiva' },
  { src: '/img/ostende/habitaciones2/piso4/p404.jpg', alt: 'Categoría Ejecutiva' },
  { src: '/img/ostende/habitaciones2/piso4/ejecutiva2.jpg', alt: 'Categoría Ejecutiva' },
  { src: '/img/ostende/habitaciones2/piso4/p407.jpg', alt: 'Categoría Ejecutiva' },
];

const AMENITIES = [
  'Cerraduras magnéticas (Hotel Locking System)',
  'Camas tamaño King size (matrimonial) o Twins de 1 plaza',
  'Frigobar',
  'LCD 32 pulgadas',
  'Aire acondicionado',
  'Ventilador de techo',
  'Secador de cabello',
  'Caja de seguridad',
  'Baño con bañera',
];

export default function CategoriaEjecutivaPage() {
  return (
    <main>
      <RoomDetail
        title="Categoría Ejecutiva"
        description="Habitaciones dobles de 20 m² con una fabulosa vista al mar. Se pueden agregar camas adicionales para convertirlas en triples, y contamos con habitaciones comunicadas para 4/5 personas."
        images={IMAGES}
        maxCapacity="2 adultos (hasta 3 con cama adicional)"
        amenities={AMENITIES}
      />
    </main>
  );
}
