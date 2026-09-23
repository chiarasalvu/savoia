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

export default function DeporteNaturalezaPage() {
  return (
    <main>
      <RoomDetail
        title="Deporte, parques y recreación"
        description="Un entorno único rodeado de montañas y espacios verdes, con instalaciones deportivas propias para disfrutar al aire libre."
        images={IMAGES}
        amenities={AMENITIES}
      />
    </main>
  );
}
