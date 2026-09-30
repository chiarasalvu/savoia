import RoomDetail from '@/components/RoomDetail';

export const metadata = {
  title: 'Categoría Familiar — Hotel Savoia Ostende',
  description: 'Departamentos con 2 baños y habitación cuádruple con 1 baño, pensados para viajar en familia. Hotel Savoia Ostende, Pinamar.',
};

const IMAGES = [
  { src: '/img/ostende/categoria-familiar/familiar-1.webp', alt: 'Habitación Categoría Familiar del Hotel Savoia Ostende' },
  { src: '/img/ostende/categoria-familiar/familiar-2.webp', alt: 'Habitación Categoría Familiar del Hotel Savoia Ostende' },
  { src: '/img/ostende/categoria-familiar/familiar-3.webp', alt: 'Habitación Categoría Familiar del Hotel Savoia Ostende' },
];

const DETAILS = [
  { label: 'Comodidades — Habitaciones', text: 'Aire acondicionado, TV, frigobar, caja de seguridad, 1 baño.' },
  { label: 'Comodidades — Departamentos', text: 'Aire acondicionado, TV, frigobar, caja de seguridad, 2 baños.' },
];

export default function CategoriaFamiliarPage() {
  return (
    <main>
      <RoomDetail
        title="Categoría Familiar"
        description="Pensado para grupo familiar. Contamos con habitaciones cuádruples con 1 baño para 4 personas, y departamentos con 2 baños para 4/5 personas."
        images={IMAGES}
        maxCapacity="Habitación cuádruple: 4 personas · Departamento: 4 a 5 personas"
        details={DETAILS}
      />
    </main>
  );
}
