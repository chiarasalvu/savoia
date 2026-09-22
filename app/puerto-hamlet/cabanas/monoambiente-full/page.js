import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Monoambiente Full' };

const IMAGES = [{ src: '/img/puerto-hamlet/cabanas/real-2.jpg', alt: 'Dormitorio de una cabaña Monoambiente Full de Puerto Hamlet' }];

const AMENITIES = [
  'Placard',
  'Baño y cocina completos',
  'LCD y reproductor de DVD',
  'Split frío/calor',
  'Ventilador de techo',
  'Hogar a leños',
  'Horno, heladera, microondas y tostadora',
  'Vajilla completa',
  'Sommier matrimonial (convertible a dos individuales)',
  'Parrilla individual',
];

export default function MonoambienteFullPage() {
  return (
    <main>
      <RoomDetail
        title="Monoambiente Full"
        description="Un ambiente con placard, baño y cocina completos, para 2 a 3 personas. Sommier matrimonial convertible a dos camas individuales y parrilla individual."
        images={IMAGES}
        maxCapacity="2 a 3 personas · 35 m²"
        amenities={AMENITIES}
      />
    </main>
  );
}
