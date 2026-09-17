import Image from 'next/image';
import PhotoRevealCard from '@/components/PhotoRevealCard';
import SplitContent from '@/components/SplitContent';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet' };

const TEASERS = [
  {
    src: '/img/puerto-hamlet/home/playa.jpg',
    alt: 'Acceso a la playa cerca de Puerto Hamlet, Cariló',
    headline: 'A METROS DE LA PLAYA',
    infoLines: ['A 100 metros de la playa, en la intersección de Cerezo y Avutarda.'],
    href: '/puerto-hamlet/contacto',
  },
  {
    src: '/img/puerto-hamlet/ubicacion/centro-comercial.jpg',
    alt: 'Centro comercial de Cariló, cerca de Puerto Hamlet',
    headline: 'CERCA DEL CENTRO',
    infoLines: ['A 300 metros del centro comercial de Cariló, lejos del bullicio en temporada alta.'],
    href: '/puerto-hamlet/contacto',
  },
  {
    src: '/img/puerto-hamlet/servicios/pileta-climatizada.jpg',
    alt: 'Pileta climatizada cubierta de Puerto Hamlet',
    headline: 'SERVICIOS',
    infoLines: ['Pileta climatizada, hidromasaje, sauna seco y solarium — todo incluido en la tarifa.'],
    href: '/puerto-hamlet/servicios',
  },
];

export default function HamletHomePage() {
  return (
    <main>
      <div className="relative flex h-[70vh] w-full items-center justify-center">
        <Image src="/img/home/entrada-hamlet.jpeg" alt="Puerto Hamlet Cariló" fill priority className="object-cover" />
      </div>

      <h1 className="mt-16 text-center text-3xl font-medium md:mt-24 md:text-4xl">DESCUBRÍ PUERTO HAMLET</h1>

      <RevealSection className="flex flex-wrap justify-center py-6">
        {TEASERS.map((card) => (
          <PhotoRevealCard key={card.headline} {...card} />
        ))}
      </RevealSection>

      <div className="relative mx-auto my-6 h-[300px] w-full max-w-[1200px] md:h-[550px]">
        <Image
          src="/img/puerto-hamlet/servicios/pileta-descubierta-portada.jpg"
          alt="Piscina descubierta de Puerto Hamlet con reposeras y sombrillas"
          fill
          sizes="(min-width: 1200px) 1200px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-0 md:mt-24">
        <SplitContent
          imageSrc="/img/puerto-hamlet/home/bosque-pinos-v2.jpg"
          imageAlt="Sendero arbolado de Puerto Hamlet de noche"
          imageSide="left"
          title="PUERTO HAMLET"
          subtitle="Bosque de pinos en el corazón de Cariló"
          height="420px"
          paragraphs={[
            'Cariló goza de un paisaje privilegiado: su bosque de altos pinos a la orilla del mar debe sus amplios espacios verdes al particular loteo con fracciones de más de 1000m² de superficie. En Puerto Hamlet siempre hemos respetado ese Cariló agreste y original.',
            'Nuestro parque tiene 4600m² de superficie rodeados de cerco vivo para dar a nuestros huéspedes tranquilidad y privacidad. Más de 700 ejemplares en 100 variedades de plantas convierten nuestros paseos internos en un atractivo de invalorable belleza.',
          ]}
        />
      </div>

      <div className="mt-0 md:mt-24">
        <SplitContent
          imageSrc="/img/puerto-hamlet/servicios/club-de-chicos.jpg"
          imageAlt="Sala de juegos del Club de chicos de Puerto Hamlet"
          imageSide="right"
          title="SERVICIOS"
          subtitle="Todo incluido en la tarifa"
          height="420px"
          paragraphs={[
            'Pileta climatizada, hidromasaje, sauna seco y solarium. Desayuno buffet en el Club House, gimnasio con vista al bosque y un club de chicos para que los más pequeños se diviertan todo el día.',
          ]}
        />
      </div>
    </main>
  );
}
