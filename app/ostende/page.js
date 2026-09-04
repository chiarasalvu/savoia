import Image from 'next/image';
import VideoHero from '@/components/VideoHero';
import PhotoRevealCard from '@/components/PhotoRevealCard';
import SplitContent from '@/components/SplitContent';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Bienvenidos' };

const HIGHLIGHTS = [
  {
    src: '/img/ostende/home/mar-ostende.jpeg',
    alt: 'A metros de la playa',
    headline: 'A METROS DE LA PLAYA',
    infoLines: ['Ubicados en primera línea de playa con vistas al mar.'],
  },
  {
    src: '/img/ostende/pile-home.jpg',
    alt: 'Piscina climatizada',
    headline: 'PISCINA CLIMATIZADA',
    infoLines: [
      'Piscina exterior climatizada con sector especial para niños junto a nuestro exclusivo bar de piscina. Solarium, sauna y gimnasio.',
    ],
    href: '/ostende/pileta',
  },
  {
    src: '/img/ostende/desayuno/desayuno-1.jpg',
    alt: 'Gastronomía Savoia',
    headline: 'GASTRONOMÍA SAVOIA',
    infoLines: [
      'Una propuesta gastronómica única, todas elaboradas en el hotel. Un exquisito desayuno BUFFET estilo americano y cenas imperdibles.',
    ],
    href: '/ostende/gastronomia-savoia',
  },
];

const ROOM_CATEGORIES = [
  { src: '/img/ostende/home/habitacion-superior.webp', alt: 'Categoría Superior', headline: 'CATEGORÍA SUPERIOR', href: '/ostende/categoria-superior' },
  { src: '/img/ostende/home/habitacion-ejecutiva.webp', alt: 'Categoría Ejecutiva', headline: 'CATEGORÍA EJECUTIVA', href: '/ostende/categoria-ejecutiva' },
  { src: '/img/ostende/home/habitacion-estandar.webp', alt: 'Categoría Estandar', headline: 'CATEGORÍA ESTANDAR', href: '/ostende/categoria-standard' },
];

export default function OstendeHomePage() {
  return (
    <main>
      <VideoHero src="/img/ostende/home/video-savoia.mp4" poster="/img/ostende/home/video-savoia-poster.jpg" />

      <h1 className="mt-16 text-center text-3xl font-medium md:mt-24 md:text-4xl">VIVÍ UNA EXPERIENCIA ÚNICA</h1>

      <RevealSection className="flex flex-wrap justify-center py-6">
        {HIGHLIGHTS.map((card) => (
          <PhotoRevealCard key={card.src} {...card} />
        ))}
      </RevealSection>

      <div className="relative mx-auto my-6 h-[300px] w-full max-w-[1200px] md:h-[550px]">
        <Image
          src="/img/ostende/home/lobby-ostende.webp"
          alt="Lobby Hotel Savoia Ostende"
          fill
          sizes="(min-width: 1200px) 1200px, 100vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-16 text-center text-xl md:mt-24">DESCANSÁ Y RENOVÁ TUS ENERGÍAS CON NOSOTROS</h3>
      <h2 className="mb-6 text-center text-3xl font-medium md:text-4xl">HABITACIONES</h2>

      <RevealSection className="flex flex-wrap justify-center py-6">
        {ROOM_CATEGORIES.map((card) => (
          <PhotoRevealCard key={card.src} {...card} />
        ))}
      </RevealSection>

      <div className="mt-16 md:mt-24">
        <SplitContent
          imageSrc="/img/ostende/foto-diario.jpg"
          imageAlt="Comida"
          imageSide="left"
          title="EXPERIENCIA SAVOIA"
          subtitle="Descubrí todo lo que tenemos para ofrecerte"
          paragraphs={[
            'Ubicados frente al mar, le ofrecemos la combinación perfecta de hotelería con máximo confort y una exquisita gastronomía gourmet.',
            'Disponemos habitaciones, suites y departamentos equipados para tus vacaciones y escapadas. En el Hotel Savoia encontrará un cordial ambiente familiar, tranquilidad, distensión y toda una organización dispuesta a asesorarlo para que sus días de vacaciones sean inolvidables.',
          ]}
        />
      </div>

      <div className="mt-0 md:mt-24">
        <SplitContent
          imageSrc="/img/ostende/home/collage-gastronomia.jpg"
          imageAlt="Comida"
          imageSide="right"
          title="GASTRONOMÍA"
          subtitle="Desayuno, brunch y cena frente al mar"
          paragraphs={[
            'Durante las mañanas, podrá disfrutar de un exquisito desayuno BUFFET estilo americano. Un almuerzo a la carta en el bar de piscina o en el de planta baja. Por la noche, podra deleitarse con una propuesta única: variedad de platos disponibles en el buffet Froid, minutas elaboradas por el chef ejecutivo y un menú temático por noche.',
          ]}
        />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar (C.P. 7167)"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
