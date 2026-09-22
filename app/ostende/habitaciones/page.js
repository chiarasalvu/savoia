import HeroBand from '@/components/HeroBand';
import RoomCard from '@/components/RoomCard';
import RevealSection from '@/components/RevealSection';
import { CATEGORIES } from '@/lib/ostendeRooms';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };


export default function OstendeHabitacionesPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/habitaciones/hero-habitaciones.jpg" imageAlt="Habitaciones" title="HABITACIONES" />

      <RevealSection className="mx-auto max-w-[1400px] px-6 py-16 md:px-8 md:py-24">
        <h1 className="text-2xl font-medium text-savoia-charcoal md:text-3xl">Habitaciones</h1>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <RoomCard key={category.href} {...category} />
          ))}
        </div>
      </RevealSection>
    </main>
  );
}
