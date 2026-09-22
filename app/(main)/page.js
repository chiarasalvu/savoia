import Image from 'next/image';
import LandingContactForm from '@/components/LandingContactForm';
import HotelesCarousel from '@/components/HotelesCarousel';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import LandingHero from '@/components/LandingHero';
import GruposEventosSection from '@/components/GruposEventosSection';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Bienvenidos' };

const LOCATIONS = [
  {
    src: '/img/home/portada.jpg',
    alt: 'Hotel Savoia Ostende',
    name: 'HOTEL SAVOIA OSTENDE',
    location: 'Pinamar, Buenos Aires',
    description: 'Frente al mar, en Pinamar.',
    href: '/ostende',
  },
  {
    src: '/img/home/entrada-hamlet.jpeg',
    alt: 'Puerto Hamlet Cariló',
    name: 'PUERTO HAMLET',
    location: 'Cariló, Buenos Aires',
    description: 'Cabañas entre los pinos, a metros de la playa.',
    href: '/puerto-hamlet',
  },
  {
    src: '/img/hoteles/hotel-mendoza.jpeg',
    alt: 'Hotel Savoia Mendoza',
    name: 'HOTEL SAVOIA MENDOZA',
    location: 'Guaymallén, Mendoza',
    description: 'En el corazón del vino, rodeado de naturaleza.',
    href: '/mendoza',
  },
  {
    src: '/img/hoteles/san-bernardo.jpeg',
    alt: 'Hotel San Bernardo',
    name: 'HOTEL SAVOIA SAN BERNARDO',
    location: 'San Bernardo, Buenos Aires',
    description: 'Ubicado a metros de la playa.',
    href: '/san-bernardo',
  },
];

const REVIEWS = [
  {
    text: 'EXCELENTE!!! El mejor lugar... desayuno de lujo incluido... todo impecable... y la atención de todo el personal es algo único. Son cálidos, conocen a los huéspedes, te hacen sentir espectacular. La mejor estadía. ¡Gracias!',
    author: 'Gabriela Oucinde',
    hotel: 'Ostende',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Excelente atencion, mucha paz , desayuno completisimo y la piscina climatizada genial, el servicio de limpieza impecable , me encanto y su belleza esa en esos pinos que rodea la cabaña , muy lindo lugar',
    author: 'carmen garcia',
    hotel: 'Cariló',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Muy buen hotel. En cuanto a instalaciones y atención. La mejor atención, es la de Gustavo. Que te sirve el desayuno, almuerzo y cena muy bueno. Y el en particular, es una excelente persona. Que te hace sentir muy bien, y cómodo. Como en tu casa.',
    author: 'Diego Martin Gonzalez',
    hotel: 'Mendoza',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Excelente experiencia. Desde el primer momento recibí una atención impecable por parte del encargado y de todo el personal. Destaco especialmente a los chicos del buffet, siempre atentos y muy amables. La comida es excelente, las habitaciones muy cómodas y la ubicación ideal para descansar y despejarse. ¡Todo fue más que positivo!',
    author: 'lissitte guillin',
    hotel: 'San Bernardo',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Hermoso lugar para descansar, relajarse y disfrutar con familia ó amigos. Destaco la excelente atención y buena predisposición de todos y cada uno de los empleados del hotel, todos muy gentiles, amables y siempre con una sonrisa.',
    author: 'Silvina Lusero',
    hotel: 'Ostende',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Excelente estadía, me voy maravillada, personal muy atentos todos, cabañas espectaculares, desayuno impecable. Muy cerca de la playa, si buscas tranquilidad y conexión con la naturaleza este es tu lugar. Muchas gracias por todo.',
    author: 'Valeria Lencina',
    hotel: 'Cariló',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Volví ayer del hotel, excelente atención por parte de todo el personal del hotel. el desayuno y cena muy variado y abundante, muy recomendado.',
    author: 'Silvia Gonzalez',
    hotel: 'Mendoza',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Personal amable. Ubicado en el centro y a cien metros de la playa. Gastronomía muy buena.',
    author: 'Sergio Pellegrini',
    hotel: 'San Bernardo',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Muy buena atención del personal, hermoso lugar para pasar en familia. Muchas actividades para hacer dentro del complejo. Precio moderado.',
    author: 'Inerrin S.',
    source: 'Tripadvisor',
    rating: 4,
  },
  {
    text: 'Excelente hotel, destaco la muy buena atención del personal, la vista al mar desde la habitación que contraté fue maravillosa. La comida, desayuno y cena, es de primer nivel, un placer haber estado. Lo recomiendo.',
    author: 'Fernando A.',
    source: 'Tripadvisor',
    rating: 5,
  },
  {
    text: 'Excelente ubicación y la mejor gastronomía, desayunos y cenas con la mejor calidad, variedad y cantidad. La atención de los empleados es esmerada como siempre. Está pegado a la playa, sólo hay que cruzar una calle. Muy recomendable.',
    author: 'Oscar C.',
    source: 'Tripadvisor',
    rating: 5,
  },
  {
    text: 'Excelente ubicación, a pasos de la playa, además cuenta con una hermosa pileta que podés aprovechar siempre, especialmente cuando el clima en la playa no acompaña. Muy bueno el servicio de gastronomía, tanto el desayuno como la cena. El personal es muy servicial. Vamos todos los veranos.',
    author: 'Silvia C.',
    source: 'Tripadvisor',
    rating: 5,
  },
  {
    text: 'Muy bueno el hotel, ideal para ir en familia, pileta climatizada, club de niños con animadores excelentes, actividades variadas para todos los pasajeros, cena muy rica y variada, la atención y limpieza acordes con el lugar.',
    author: 'Hernán A.',
    source: 'Tripadvisor',
    rating: 5,
  },
  {
    text: 'Muy buena la atención de todo el personal, especialmente en el comedor. Desayuno y cena para todos los gustos, en calidad y cantidad excelentes. Recreación libre muy buena. Muy recomendable, no varía con el tiempo.',
    author: 'Mirta Y.',
    source: 'Tripadvisor',
    rating: 5,
  },
  {
    text: '¡Este hotel es realmente extraordinario! Habitaciones, comedor, piscina, vista a la playa, y el desayuno y la cena son increíbles. Es el lugar ideal para descansar y disfrutar tus vacaciones, solo, en pareja o en familia.',
    author: 'Alicia707',
    source: 'Tripadvisor',
    rating: 5,
  },
  {
    text: 'El servicio fue muy bueno y me gustó mucho, la comida excelente y las habitaciones limpias y cómodas. A mi familia le gustó mucho. Buena ubicación.',
    author: 'Milagros M.',
    source: 'Tripadvisor',
    rating: 4,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero en video — el logo vive en <ScrollLogo>, que arranca acá
          centrado grande y sube hasta el header a medida que se scrollea. */}
      <LandingHero />

      {/* Nuestra historia */}
      <RevealSection id="historia" className="mx-auto max-w-[1400px] px-6 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div className="text-left">
            <h1 className="text-2xl font-medium tracking-tight md:text-3xl">85 AÑOS DE TRAYECTORIA</h1>
            <p className="mt-6 text-savoia-taupe-text">
              Desde 1941, nos dedicamos a la Administración Hotelera y Gastronómica con un compromiso constante
              hacia la excelencia.
            </p>
            <p className="mt-4 text-savoia-taupe-text">
              Nuestra historia comienza con Don José Salvucci, quien se dedicaba al transporte hacia la costa
              bonaerense. Fue en esos viajes donde descubrió y se enamoró de San Clemente, un vínculo que sentó las
              bases para dar sus primeros pasos en la actividad hotelera.
            </p>
            <p className="mt-4 text-savoia-taupe-text">
              A lo largo de más de ocho décadas, hemos consolidado una propuesta gastronómica reconocida por su
              calidad y variedad, elaborada en cada uno de nuestros establecimientos con insumos de primer nivel.
              El resultado es una cocina que honra las raíces de la mejor tradición casera, ofrecida con los
              estándares de excelencia que nos caracterizan.
            </p>
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              src="/img/nosotros/camion-don-jose.webp"
              alt="Don José Salvucci junto a su camión de transportes"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </RevealSection>

      {/* Hoteles */}
      <RevealSection id="hoteles" className="py-10 md:py-14">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <HotelesCarousel hotels={LOCATIONS} />
        </div>
      </RevealSection>

      {/* Grupos y eventos */}
      <RevealSection className="py-10 md:py-14">
        <GruposEventosSection />
      </RevealSection>

      {/* Reseñas */}
      <RevealSection className="py-10 md:py-14">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <ReviewsCarousel reviews={REVIEWS} />
        </div>
      </RevealSection>

      <LandingContactForm />
    </main>
  );
}
