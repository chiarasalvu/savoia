import Carousel from '@/components/Carousel';
import HotelCard from '@/components/HotelCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

const SLIDES = [
  { src: '/img/home/entrada-hamlet.jpeg', alt: 'Entrada Hotel Savoia' },
  { src: '/img/home/portada.jpg', alt: 'Hoteles Savoia' },
  { src: '/img/home/portada-mendoza.jpg', alt: 'Hotel Savoia Mendoza' },
];

const HOTELS = [
  {
    title: 'Hotel Savoia Ostende',
    titleHref: '/ostende',
    addressHref: 'https://maps.app.goo.gl/YmDr8pttmDuPLWZp7',
    addressText: 'Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar',
    phoneHref: 'tel:02254496600',
    phoneText: 'Tel: (02254) 49-6600',
  },
  {
    title: 'Puerto Hamlet',
    titleHref: 'https://www.puertohamlet.com/index.html',
    addressHref: 'https://maps.app.goo.gl/XCG5uryNonStL4ms6',
    addressText: 'Cerezo 104 - Cariló',
    phoneHref: 'tel:02254571623',
    phoneText: 'Tel: (02254) 57-1623',
  },
  {
    title: 'Hotel Savoia Mendoza',
    titleHref: '/mendoza',
    addressHref: 'https://maps.app.goo.gl/5tZqW9x7ouJCyS276',
    addressText: 'Avellaneda 3653, Bermejo - Mendoza',
    phoneHref: 'tel:1157379702',
    phoneText: 'Tel: (+54) 11 5737-9702',
  },
  {
    title: 'Hotel Savoia San Bernardo',
    titleHref: '/san-bernardo',
    addressHref: 'https://maps.app.goo.gl/tT5bGSmaVbJpzRU6A',
    addressText: 'Strobel 2099 - San Bernardo',
    phoneHref: 'tel:02257460211',
    phoneText: 'Tel: (02257) 460-211 / 250',
  },
  {
    title: 'Hotel Savoia Córdoba',
    titleHref: '#',
    addressHref: 'https://maps.app.goo.gl/REYafKwb5dTTgCmHA',
    addressText: 'La falda - Córdoba',
    phoneHref: 'tel:03548421292',
    phoneText: 'Tel: (03548) 42-1292',
  },
  {
    title: 'Molise viajes - central de reservas',
    titleHref: '#',
    addressHref: 'https://maps.app.goo.gl/6gZ1Gr2gGvhAJ3CR7',
    addressText: 'F.D. Roosevelt 2445 1D / CABA',
    phoneHref: 'tel:1147886969',
    phoneText: 'Tel: (011) 4788-6969',
  },
];

export const metadata = { title: 'Hoteles Savoia | Bienvenidos' };

export default function HomePage() {
  return (
    <main>
      <Carousel slides={SLIDES} showArrows={false} />
      <RevealSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {HOTELS.map((hotel) => (
          <HotelCard key={hotel.title} {...hotel} />
        ))}
      </RevealSection>
      <ContactInfoBar />
    </main>
  );
}
