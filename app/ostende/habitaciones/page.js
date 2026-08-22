import HeroBand from '@/components/HeroBand';
import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Habitaciones' };

const CATEGORIES = [
  { src: '/img/ostende/home/habitacion-superior.webp', alt: 'Categoría Superior', headline: 'SUPERIOR', infoLines: ['Ver más'], href: '/ostende/categoria-superior' },
  { src: '/img/ostende/home/habitacion-ejecutiva.webp', alt: 'Categoría Ejecutiva', headline: 'EJECUTIVA', infoLines: ['Ver más'], href: '/ostende/categoria-ejecutiva' },
  { src: '/img/ostende/home/habitacion-estandar.webp', alt: 'Categoría Estandar', headline: 'ESTANDAR', infoLines: ['Ver más'], href: '/ostende/categoria-standard' },
];

export default function OstendeHabitacionesPage() {
  return (
    <main>
      <HeroBand imageSrc="/img/ostende/habitaciones/imagen-habitacion-opacidad.png" imageAlt="Habitaciones" title="HABITACIONES" />

      <RevealSection className="flex flex-wrap justify-center py-10">
        {CATEGORIES.map((card) => (
          <PhotoRevealCard key={card.src} {...card} />
        ))}
      </RevealSection>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
