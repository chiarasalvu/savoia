import ServiceGrid from '@/components/ServiceGrid';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Servicios' };

const SERVICES = [
  {
    src: '/img/puerto-hamlet/servicios/pileta-descubierta-portada.jpg',
    alt: 'Piscina descubierta de Puerto Hamlet con reposeras y sombrillas',
    title: 'Sector descubierto',
    description: 'Piscina climatizada, hidromasaje y solarium con reposeras, rodeado de pinos. Octubre a marzo.',
  },
  {
    src: '/img/puerto-hamlet/servicios/pileta-climatizada.jpg',
    alt: 'Pileta climatizada cubierta de Puerto Hamlet',
    title: 'Sector cubierto',
    description: 'Piscina climatizada, hidromasaje, ducha escocesa y sauna seco, disponibles todo el año.',
  },
  {
    src: '/img/puerto-hamlet/servicios/club-house.jpg',
    alt: 'Salón de desayuno del Club House de Puerto Hamlet',
    title: 'Club house',
    description: 'Desayuno buffet, dos TV con cable digital, hogar a leña, rincón de lectura, mesa de pool y pantalla gigante para eventos deportivos.',
  },
  {
    src: '/img/puerto-hamlet/servicios/gimnasio.jpg',
    alt: 'Gimnasio de Puerto Hamlet',
    title: 'Gimnasio',
    description: 'En planta alta, con ventanales y vista al bosque. Equipamiento profesional y bicicletas de spinning.',
  },
  {
    src: '/img/puerto-hamlet/servicios/club-de-chicos.jpg',
    alt: 'Sala de juegos del Club de chicos de Puerto Hamlet',
    title: 'Club de chicos',
    description: 'Ping pong, metegol, manualidades y juegos de plaza. De 10 a 18hs, para chicos de 3 a 13 años.',
  },
];

const INCLUYE = [
  'Desayuno en su cabaña sin cargo.',
  'Recreación para niños a partir de los 3 años.',
  'Uso del gimnasio y sectores comunes.',
  'Mucama, ropa blanca y lavado de vajilla.',
  'Servicio de sombrilla en Balneario Hemingwey con costo adicional (en Temporada Alta).',
];

export default function HamletServiciosPage() {
  return (
    <main>
      <RevealSection className="mx-auto max-w-[1400px] px-6 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <h1 className="text-2xl font-medium text-savoia-charcoal md:text-3xl">Servicios</h1>
        <p className="mt-4 max-w-[640px] text-savoia-taupe-text">
          Atentos al entusiasmo y las necesidades de quienes nos visitan, con la más amplia libertad de horarios
          para disfrutar todos nuestros servicios.
        </p>
        <div className="mt-10">
          <ServiceGrid services={SERVICES} />
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mb-16 max-w-[1100px] rounded-2xl bg-savoia-body px-6 py-8 md:mb-24 md:px-8">
        <h2 className="text-center text-2xl font-medium text-savoia-charcoal">Además podrá disfrutar de</h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {INCLUYE.map((item) => (
            <li key={item} className="rounded-2xl bg-white px-4 py-3 text-center text-sm text-savoia-taupe-text">
              {item}
            </li>
          ))}
        </ul>
      </RevealSection>
    </main>
  );
}
