import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Servicios' };

const CARDS = [
  { src: '/img/ostende/servicios/cocina-ostende.jpg', alt: 'Gastronomía Savoia', headline: 'GASTRONOMÍA SAVOIA', infoLines: ['Ver más'], href: '/ostende/gastronomia-savoia' },
  { src: '/img/ostende/servicios/bar-abajo.jpg', alt: 'Bar Woodstock', headline: 'BAR WOODSTOCK', infoLines: ['Ver más'], href: '/ostende/bar-woodstock' },
  { src: '/img/ostende/servicios/bar-piso5.jpg', alt: 'Bar Saint Jean', headline: 'BAR SAINT JEAN', infoLines: ['Ver más'], href: '/ostende/bar-saintjean' },
  { src: '/img/ostende/servicios/pileta-ostende.jpg', alt: 'Piscina climatizada', headline: 'PISCINA CLIMATIZADA', infoLines: ['Ver más'], href: '/ostende/pileta' },
  { src: '/img/ostende/servicios/gimnasio.jpg', alt: 'Gimnasio y sauna', headline: 'GIMNASIO Y SAUNA', infoLines: ['Ver más'], href: '/ostende/gym-sauna' },
  { src: '/img/ostende/servicios/saladejuegos.jpg', alt: 'Mini Club', headline: 'MINI CLUB', infoLines: ['Ver más'], href: '/ostende/miniclub' },
];

export default function OstendeServiciosPage() {
  return (
    <main>
      <h1 className="mt-8 text-center text-3xl font-medium">SERVICIOS</h1>

      <RevealSection className="flex flex-wrap justify-center py-10">
        {CARDS.map((card) => (
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
