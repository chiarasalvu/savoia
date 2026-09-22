import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Categoría Familiar' };

// TODO: reemplazar por fotos reales de la Categoría Familiar — no había
// ninguna disponible todavía, así que usamos una foto general del hotel
// como placeholder temporal.
const IMAGES = [{ src: '/img/ostende/home/lobby-ostende.webp', alt: 'Hotel Savoia Ostende' }];

const AMENITIES = [
  'Departamento con 2 baños',
  'Habitación cuádruple con 1 baño',
  'Frigobar',
  'LCD',
  'Aire acondicionado',
  'Caja de seguridad',
];

export default function CategoriaFamiliarPage() {
  return (
    <main>
      <RoomDetail
        title="Categoría Familiar"
        description="Pensada para grupos familiares numerosos: departamentos para 4/5 personas con 2 baños, y habitación cuádruple con 1 baño. La opción ideal para viajar en familia sin resignar comodidad ni privacidad."
        images={IMAGES}
        maxCapacity="4 a 5 personas"
        amenities={AMENITIES}
      />
    </main>
  );
}
