import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Deporte, parques y recreación' };

const IMAGES = [
  { src: '/img/mendoza/espacios-verdes-mendoza.jpg', alt: 'Espacios verdes' },
  { src: '/img/mendoza/cancha-tenis.jpg', alt: 'Cancha de tenis' },
  { src: '/img/mendoza/cancha-futbol.jpg', alt: 'Cancha de fútbol' },
];

const AMENITIES = [
  'Vista a la cordillera',
  'Cancha de fútbol 11 de césped natural',
  'Cancha de básquet',
  'Cancha de vóley',
  'Canchas de tenis de polvo de ladrillo',
  'Cancha de pádel',
  'Área de juegos para chicos',
  'Quincho con parrillas y pileta',
];

const DETAILS = [
  {
    label: 'Deportivos Savoia',
    text: 'Para los equipos deportivos que buscan un lugar donde descansar y prepararse para sus competencias, el Hotel Savoia es la elección perfecta. Nuestras instalaciones ofrecen un equilibrio ideal entre entrenamiento y relajación: habitaciones amplias y cómodas, áreas de descanso o entrenamiento y un servicio personalizado que se adapta a las necesidades de su equipo.',
  },
];

export default function DeporteNaturalezaPage() {
  return (
    <main>
      <RoomDetail
        title="Deporte, parques y recreación"
        description="Complejo deportivo al aire libre, ideal para quienes buscan mantenerse activos y disfrutar de un entorno natural revitalizante, rodeado de montañas y espacios verdes."
        images={IMAGES}
        details={DETAILS}
        amenities={AMENITIES}
      />
    </main>
  );
}
