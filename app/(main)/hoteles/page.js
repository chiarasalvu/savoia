import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Hoteles' };

const CARDS = [
  {
    src: '/img/hoteles/ostende-inicio.jpeg',
    alt: 'Hotel Savoia Ostende',
    headline: 'HOTEL SAVOIA OSTENDE',
    infoLines: ['Biarritz 184 e/ Defensa y Progreso', 'Tel: (02254) 49-6600', 'Ver más'],
    href: '/ostende',
  },
  {
    src: '/img/hoteles/puerto-hamlet.jpeg',
    alt: 'Puerto Hamlet Cariló',
    headline: 'PUERTO HAMLET CARILÓ',
    infoLines: ['Cerezo 104 - Cariló', 'Tel: (02254) 57-1623', 'Ver más'],
    href: 'https://www.puertohamlet.com/',
  },
  {
    src: '/img/hoteles/hotel-mendoza.jpeg',
    alt: 'Hotel Savoia Mendoza',
    headline: 'HOTEL SAVOIA MENDOZA',
    infoLines: ['Avellaneda 3653, Bermejo - Mendoza', 'Tel: (+54) 11 5737-9702', 'Ver más'],
    href: '/mendoza',
  },
  {
    src: '/img/hoteles/san-bernardo.jpeg',
    alt: 'Hotel San Bernardo',
    headline: 'HOTEL SAN BERNARDO',
    infoLines: ['Strobel 2099 - San Bernardo', 'Tel: (02257) 460-211 / 250', 'Ver más'],
    href: '/san-bernardo',
  },
  {
    src: '/img/hoteles/logo-molisana-molise.jpg',
    alt: 'Molise Viajes',
    infoLines: [
      'MOLISE VIAJES',
      'Central de reservas de Hoteles Savoia',
      'F.D. Roosevelt 2445 1D / CABA',
      'Tel: (011) 4788-6969',
    ],
  },
];

export default function HotelesPage() {
  return (
    <main>
      <RevealSection className="flex flex-wrap justify-center bg-savoia-stone py-16 md:py-24">
        {CARDS.map((card) => (
          <PhotoRevealCard key={card.src} {...card} />
        ))}
      </RevealSection>
      <ContactInfoBar />
    </main>
  );
}
