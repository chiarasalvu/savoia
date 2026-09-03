import HeroBand from '@/components/HeroBand';
import RoomCategoryRow from '@/components/RoomCategoryRow';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };

const CATEGORIES = [
  { src: '/img/ostende/home/habitacion-superior.webp', alt: 'Categoría Superior', title: 'SUPERIOR', href: '/ostende/categoria-superior' },
  { src: '/img/ostende/home/habitacion-ejecutiva.webp', alt: 'Categoría Ejecutiva', title: 'EJECUTIVA', href: '/ostende/categoria-ejecutiva' },
  { src: '/img/ostende/home/habitacion-estandar.webp', alt: 'Categoría Estandar', title: 'ESTANDAR', href: '/ostende/categoria-standard' },
];

export default function OstendeHabitacionesPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/habitaciones/hero-habitaciones.jpg" imageAlt="Habitaciones" title="HABITACIONES" />

      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-5 py-10 md:py-16">
        {CATEGORIES.map((category) => (
          <RevealSection key={category.href}>
            <RoomCategoryRow {...category} />
          </RevealSection>
        ))}
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
