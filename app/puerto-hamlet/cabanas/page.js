import RoomCard from '@/components/RoomCard';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Cabañas' };

const UNITS = [
  {
    href: '/puerto-hamlet/cabanas/monoambiente',
    src: '/img/puerto-hamlet/cabanas/monoambiente-portada.jpg',
    alt: 'Cama matrimonial de la cabaña Monoambiente de Puerto Hamlet',
    title: 'Monoambiente',
    size: '28 m²',
    capacity: '2 personas',
    description: 'Un ambiente con baño y kitchenette, con parrillas de uso compartido.',
  },
  {
    href: '/puerto-hamlet/cabanas/monoambiente-full',
    src: '/img/puerto-hamlet/cabanas/real-2.jpg',
    alt: 'Dormitorio de una cabaña Monoambiente Full de Puerto Hamlet',
    title: 'Monoambiente Full',
    size: '35 m²',
    capacity: '2 a 3 personas',
    description: 'Un ambiente con baño y cocina completos, y parrilla individual.',
  },
  {
    href: '/puerto-hamlet/cabanas/dos-ambientes',
    src: '/img/puerto-hamlet/cabanas/dos-ambientes-portada.jpg',
    alt: 'Dormitorio matrimonial de la cabaña Dos Ambientes de Puerto Hamlet',
    title: 'Dos Ambientes',
    size: '45 m²',
    capacity: '3 a 4 personas',
    description: 'Dos ambientes con baño y cocina completos, living comedor con hogar a leños.',
  },
  {
    href: '/puerto-hamlet/cabanas/tres-ambientes',
    src: '/img/puerto-hamlet/cabanas/tres-ambientes-portada.jpg',
    alt: 'Dormitorio de una cabaña Tres Ambientes de Puerto Hamlet',
    title: 'Tres Ambientes',
    size: '75 m²',
    capacity: '5 a 6 personas',
    description: 'Tres ambientes con 2 baños, dos dormitorios y living comedor.',
  },
];

export default function HamletCabanasPage() {
  return (
    <main>
      <RevealSection className="mx-auto max-w-[1400px] px-6 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <h1 className="text-2xl font-medium text-savoia-charcoal md:text-3xl">Cabañas</h1>
        <p className="mt-4 max-w-[640px] text-savoia-taupe-text">
          31 cabañas distribuidas alrededor de nuestro amplio parque, para 2 a 6 personas.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {UNITS.map((unit) => (
            <RoomCard key={unit.href} {...unit} />
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mb-16 max-w-[1100px] rounded-2xl bg-savoia-body px-6 py-8 text-center md:mb-24 md:px-8">
        <p className="text-savoia-taupe-text">
          Todas las unidades cuentan con estacionamiento individual descubierto, caja de seguridad y Wi-Fi. Consulte por cabañas combinadas para 4 y 6 pasajeros.
        </p>
      </RevealSection>
    </main>
  );
}
