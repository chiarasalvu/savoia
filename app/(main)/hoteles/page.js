import LocationCard from '@/components/LocationCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Hoteles' };

const LOCATIONS = [
  {
    src: '/img/home/portada.jpg',
    alt: 'Hotel Savoia Ostende',
    name: 'Hotel Savoia Ostende',
    address: 'Biarritz 184 e/ Defensa y Progreso, Pinamar',
    phoneText: 'Tel: (02254) 49-6600',
    phoneHref: 'tel:02254496600',
    href: '/ostende',
  },
  {
    src: '/img/home/entrada-hamlet.jpeg',
    alt: 'Puerto Hamlet Cariló',
    name: 'Puerto Hamlet',
    address: 'Cerezo 104, Cariló',
    phoneText: 'Tel: (02254) 57-1623',
    phoneHref: 'tel:02254571623',
    href: 'https://www.puertohamlet.com/',
  },
  {
    src: '/img/hoteles/hotel-mendoza.jpeg',
    alt: 'Hotel Savoia Mendoza',
    name: 'Hotel Savoia Mendoza',
    address: 'Avellaneda 3653, Bermejo - Mendoza',
    phoneText: 'Tel: (+54) 11 5737-9702',
    phoneHref: 'tel:1157379702',
    href: '/mendoza',
  },
  {
    src: '/img/hoteles/san-bernardo.jpeg',
    alt: 'Hotel San Bernardo',
    name: 'Hotel Savoia San Bernardo',
    address: 'Strobel 2099, San Bernardo',
    phoneText: 'Tel: (02257) 460-211 / 250',
    phoneHref: 'tel:02257460211',
    href: '/san-bernardo',
  },
];

export default function HotelesPage() {
  return (
    <main>
      <RevealSection className="bg-savoia-stone pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <h1 className="mb-12 text-center text-3xl font-medium uppercase tracking-tight text-savoia-charcoal md:mb-16 md:text-4xl">
            Nuestras ubicaciones
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
          </div>
        </div>
      </RevealSection>

      <ContactInfoBar />
    </main>
  );
}
