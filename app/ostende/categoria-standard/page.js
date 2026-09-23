import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Categoría Estándar' };

const IMAGES = [
  { src: '/img/ostende/habitaciones2/piso2/portada-standard.jpg', alt: 'Categoría Estandar' },
  { src: '/img/ostende/habitaciones2/piso2/foto1-standard.jpg', alt: 'Categoría Estandar' },
  { src: '/img/ostende/habitaciones2/piso2/foto2-standard.jpg', alt: 'Categoría Estandar' },
];

const AMENITIES = [
  'Camas tamaño Queen size',
  'Frigobar',
  'LCD 32 pulgadas',
  'Aire acondicionado',
  'Ventilador de techo',
  'Secador de pelo',
  'Caja de seguridad',
  'Baño con ducha',
];

export default function CategoriaStandardPage() {
  return (
    <main>
      <RoomDetail
        title="Categoría Estándar"
        description="Habitaciones dobles de 20 m², ideales para una estadía cómoda y funcional. También ofrecen la posibilidad de agregar cama adicional para uso triple, o combinarse como habitaciones comunicadas para 4/5 personas."
        images={IMAGES}
        maxCapacity="2 adultos (hasta 3 con cama adicional)"
        amenities={AMENITIES}
      />
    </main>
  );
}
