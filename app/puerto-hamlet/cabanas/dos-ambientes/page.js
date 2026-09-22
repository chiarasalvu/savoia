import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Dos Ambientes' };

const IMAGES = [{ src: '/img/puerto-hamlet/cabanas/real-3.jpg', alt: 'Senderos y cabañas Dos Ambientes de Puerto Hamlet entre los pinos' }];

const AMENITIES = [
  'Baño y cocina completos',
  'Dormitorio con LCD y split frío/calor',
  'Dormitorio matrimonial con sommier y placard',
  'Living comedor con dos sofá cama de una plaza',
  'LCD y reproductor de DVD en living',
  'Hogar a leños',
  'Horno, heladera y microondas',
  'Vajilla completa',
  'Parrilla individual',
];

export default function DosAmbientesPage() {
  return (
    <main>
      <RoomDetail
        title="Dos Ambientes"
        description="Dos ambientes con baño y cocina completos, para 3 a 4 personas. Living comedor con dos sofá cama de una plaza y hogar a leños."
        images={IMAGES}
        maxCapacity="3 a 4 personas · 45 m²"
        amenities={AMENITIES}
      />
    </main>
  );
}
