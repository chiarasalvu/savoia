import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Habitaciones' };

const IMAGES = [
  { src: '/img/mendoza/habitacion-doble.jpg', alt: 'Habitación doble del Hotel Savoia Mendoza' },
  { src: '/img/mendoza/habitacion-twin.jpg', alt: 'Habitación doble con camas individuales (Twin) del Hotel Savoia Mendoza' },
  { src: '/img/mendoza/habitacion-triple.jpg', alt: 'Habitación triple del Hotel Savoia Mendoza' },
  { src: '/img/mendoza/bano.jpg', alt: 'Baño privado de las habitaciones del Hotel Savoia Mendoza' },
];

const DETAILS = [
  {
    label: 'Habitación doble',
    text: 'El espacio ideal para adaptarse a sus necesidades. Disfrute de un descanso reparador en una cama matrimonial cómoda y amplia, o bien, opte por la versatilidad de dos camas individuales (Twin) para mayor comodidad.',
  },
  {
    label: 'Habitación triple',
    text: 'Ofrece la flexibilidad perfecta para su viaje. Puede elegir entre una cómoda cama matrimonial y una cama individual auxiliar, o bien, optar por tres camas individuales para mayor independencia.',
  },
];

const AMENITIES = [
  'Wifi',
  'TV por cable',
  'Secador de pelo',
  'Amenities',
  'Ropa blanca',
  'Caja de seguridad',
  'Baño privado',
  'Sector con aire acondicionado y calefacción',
  'Sector con ventilador y calefacción por radiadores',
  'Lavandería',
];

export default function HabitacionesPage() {
  return (
    <main>
      <RoomDetail
        title="Habitaciones"
        description="Hotel Savoia Mendoza cuenta con 103 habitaciones: dobles, triples, cuádruples y departamentos para 4 y 5 personas. Todas con baño. Los departamentos para 4 y 5 personas son dos habitaciones comunicadas y cuentan con un solo baño."
        images={IMAGES}
        details={DETAILS}
        amenities={AMENITIES}
      />
    </main>
  );
}
