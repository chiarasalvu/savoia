import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Dos Ambientes' };

const IMAGES = [
  { src: '/img/puerto-hamlet/cabanas/dos-ambientes-portada.jpg', alt: 'Dormitorio matrimonial con ventana de la cabaña Dos Ambientes de Puerto Hamlet' },
  { src: '/img/puerto-hamlet/cabanas/dos-ambientes-cama.jpg', alt: 'Dormitorio matrimonial de la cabaña Dos Ambientes de Puerto Hamlet' },
  { src: '/img/puerto-hamlet/cabanas/dos-ambientes-3.jpg', alt: 'Cocina y sofá cama del living de la cabaña Dos Ambientes de Puerto Hamlet' },
  { src: '/img/puerto-hamlet/cabanas/dos-ambientes-4.jpg', alt: 'Comedor con hogar a leños de la cabaña Dos Ambientes de Puerto Hamlet' },
];

const AMENITIES = [
  'Baño y cocina completos',
  'Dormitorio con TV y split frío/calor',
  'Dormitorio matrimonial con sommier',
  'Living comedor con dos sofá cama de una plaza',
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
