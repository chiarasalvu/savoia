import RoomDetail from '@/components/RoomDetail';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Tres Ambientes' };

const IMAGES = [
  { src: '/img/puerto-hamlet/cabanas/tres-ambientes-portada.jpg', alt: 'Dormitorio con dos camas de una plaza de la cabaña Tres Ambientes de Puerto Hamlet' },
  { src: '/img/puerto-hamlet/cabanas/tres-ambientes-dormitorio.jpg', alt: 'Dormitorio matrimonial de la cabaña Tres Ambientes de Puerto Hamlet' },
  { src: '/img/puerto-hamlet/cabanas/tres-ambientes-4.jpg', alt: 'Baño de la cabaña Tres Ambientes de Puerto Hamlet' },
  { src: '/img/puerto-hamlet/cabanas/tres-ambientes-6.jpg', alt: 'Cocina de la cabaña Tres Ambientes de Puerto Hamlet' },
];

const AMENITIES = [
  'Dormitorio principal con 1 baño y sommier matrimonial',
  'Dormitorio secundario con 1 baño y dos camas de una plaza',
  'Living comedor con diván cama',
  'Split frío/calor',
  'TV',
  'Hogar a leños',
  'Horno, heladera con freezer y microondas',
  'Vajilla completa',
  'Parrilla individual',
];

export default function TresAmbientesPage() {
  return (
    <main>
      <RoomDetail
        title="Tres Ambientes"
        description="Tres ambientes con 2 dormitorios y 2 baños, para 5 a 6 personas y living comedor con diván cama."
        images={IMAGES}
        maxCapacity="5 a 6 personas · 75 m²"
        amenities={AMENITIES}
      />
    </main>
  );
}
