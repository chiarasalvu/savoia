import Image from 'next/image';
import VideoHero from '@/components/VideoHero';
import CenterCarousel from '@/components/CenterCarousel';
import RoomCard from '@/components/RoomCard';
import { CATEGORIES } from '@/lib/ostendeRooms';
import SplitContent from '@/components/SplitContent';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Bienvenidos' };

const HIGHLIGHTS = [
  {
    src: '/img/ostende/home/mar-ostende.jpeg',
    alt: 'A metros de la playa',
    title: 'A metros de la playa',
    text: 'Ubicados en primera línea de playa con vistas al mar.',
  },
  {
    src: '/img/ostende/pile-home.jpg',
    alt: 'Pileta & Bar Naples',
    title: 'Pileta & Bar Naples',
    text: 'Sector para niños y adultos, con el Bar Naples al lado para comer y beber todo el día.',
    href: '/ostende/pileta',
  },
  {
    src: '/img/ostende/desayuno/desayuno-1.jpg',
    alt: 'Gastronomía Savoia',
    title: 'Gastronomía Savoia',
    text: 'Desayuno buffet estilo americano y cenas con menús temáticos cada noche.',
    href: '/ostende/gastronomia-savoia',
  },
];

export default function OstendeHomePage() {
  return (
    <main>
      <VideoHero src="/img/ostende/home/video-savoia.mp4" poster="/img/ostende/home/video-savoia-poster.jpg" />

      <h1 className="mx-auto mt-16 max-w-[1400px] px-6 text-2xl font-medium tracking-tight md:mt-24 md:px-8 md:text-3xl">
        VIVÍ UNA EXPERIENCIA ÚNICA
      </h1>

      <RevealSection className="py-10 md:py-14">
        <CenterCarousel items={HIGHLIGHTS} initialActive={1} />
      </RevealSection>

      <div className="relative mx-auto my-6 h-[300px] w-full max-w-[1200px] md:h-[550px]">
        <Image
          src="/img/ostende/home/pileta-savoia.jpg"
          alt="Pileta del Hotel Savoia Ostende"
          fill
          sizes="(min-width: 1200px) 1200px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto mt-16 max-w-[1400px] px-6 md:mt-24 md:px-8">
        <p className="text-sm uppercase tracking-wide text-savoia-taupe-text">Descansá y renová tus energías con nosotros</p>
        <h2 className="mt-1 text-2xl font-medium tracking-tight md:text-3xl">HABITACIONES</h2>
      </div>

      <RevealSection className="mx-auto max-w-[1400px] px-6 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((room) => (
            <RoomCard key={room.href} {...room} />
          ))}
        </div>
      </RevealSection>

      <div className="mt-0 md:mt-24">
        <SplitContent
          imageSrc="/img/ostende/foto-diario.jpg"
          imageAlt="Comida"
          imageSide="left"
          title="EXPERIENCIA SAVOIA"
          subtitle="Descubrí todo lo que tenemos para ofrecerte"
          paragraphs={[
            'Ubicados frente al mar, le ofrecemos la combinación perfecta de hotelería con máximo confort y una exquisita gastronomía gourmet.',
            'Disponemos de habitaciones, suites y departamentos equipados para sus vacaciones y escapadas. En el Hotel Savoia encontrará un ambiente cordial y familiar, tranquilidad, distensión, y una organización dispuesta a asesorarlo para que sus días de vacaciones sean inolvidables.',
          ]}
        />
      </div>

      <div className="mb-16 mt-0 md:mb-24 md:mt-24">
        <SplitContent
          imageSrc="/img/ostende/home/collage-gastronomia.jpg"
          imageAlt="Comida"
          imageSide="right"
          title="GASTRONOMÍA"
          subtitle="Desayuno, brunch y cena frente al mar"
          paragraphs={[
            'Durante las mañanas, podrá disfrutar de un exquisito desayuno buffet estilo americano. Al mediodía, podrá almorzar a la carta en el bar de la pileta o en el del salón de planta baja. Por la noche, lo espera una propuesta única: variedad de platos en el buffet frío, minutas elaboradas por el chef ejecutivo y un menú temático diferente cada noche.',
          ]}
        />
      </div>

      <RevealSection className="mx-auto max-w-[1400px] px-6 pb-16 text-center md:px-8 md:pb-24">
        <a
          href="/ostende/servicios"
          className="inline-block border border-[#00244D] bg-[#00244D] px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#00244D]"
        >
          Ver todos los servicios
        </a>
      </RevealSection>
    </main>
  );
}
