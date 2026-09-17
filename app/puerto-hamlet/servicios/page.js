import { Waves, Sun, Flame, Droplet, Clock, Coffee, Dumbbell, Baby, Gamepad2 } from 'lucide-react';
import HamletPageHero from '@/components/HamletPageHero';
import ServiceRow from '@/components/ServiceRow';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Servicios' };

const SERVICES = [
  {
    src: '/img/puerto-hamlet/servicios/pileta-descubierta-portada.jpg',
    alt: 'Piscina descubierta de Puerto Hamlet con reposeras y sombrillas',
    badge: 'Octubre a marzo',
    title: 'SECTOR DESCUBIERTO',
    description: 'Piscina climatizada, hidromasaje y solarium con reposeras, rodeado de pinos.',
    features: [
      { icon: Waves, text: 'Piscina climatizada' },
      { icon: Flame, text: 'Hidromasaje' },
      { icon: Sun, text: 'Solarium con reposeras' },
    ],
  },
  {
    images: [
      { src: '/img/puerto-hamlet/servicios/pileta-climatizada.jpg', alt: 'Pileta climatizada cubierta de Puerto Hamlet' },
      { src: '/img/puerto-hamlet/servicios/sauna.jpg', alt: 'Sauna seco de madera en Puerto Hamlet' },
    ],
    badge: 'Todo el año',
    title: 'SECTOR CUBIERTO',
    description: 'Piscina climatizada, hidromasaje, ducha escocesa y sauna seco, disponibles todo el año.',
    features: [
      { icon: Waves, text: 'Piscina climatizada' },
      { icon: Droplet, text: 'Ducha escocesa' },
      { icon: Flame, text: 'Sauna seco' },
    ],
  },
  {
    src: '/img/puerto-hamlet/servicios/club-house.jpg',
    alt: 'Salón de desayuno del Club House de Puerto Hamlet',
    badge: 'Desayuno incluido',
    title: 'CLUB HOUSE',
    description:
      'Un espacio confortable para disfrutar de nuestro desayuno buffet: tortas, fiambres, pastelería, variedad de facturas, quesos, yogurt, cereales, panes y ensaladas de frutas. Dos TV con cable digital, hogar a leños, rincón de lectura, biblioteca de uso libre, pool, Wi-Fi y pantalla gigante para películas y eventos deportivos.',
    features: [
      { icon: Coffee, text: 'Desayuno buffet' },
      { icon: Clock, text: 'Wi-Fi y pantalla para eventos deportivos' },
    ],
  },
  {
    src: '/img/puerto-hamlet/servicios/gimnasio.jpg',
    alt: 'Gimnasio de Puerto Hamlet',
    badge: 'Uso libre',
    title: 'GIMNASIO',
    description:
      'En planta alta, sobre el club de chicos, en un espacio de gran aislamiento y privacidad con ventanales y vista al bosque. Equipamiento profesional para ejercicios localizados y bicicletas de spinning.',
    features: [{ icon: Dumbbell, text: 'Equipamiento profesional' }],
  },
  {
    src: '/img/puerto-hamlet/servicios/club-de-chicos.jpg',
    alt: 'Sala de juegos del Club de chicos de Puerto Hamlet',
    badge: '3 a 13 años · 10 a 18hs',
    title: 'CLUB DE CHICOS',
    description:
      'Mesa de ping pong, metegol, mesa de manualidades, TV, computadoras, internet libre y juegos de plaza. Entre las 10 y las 18hs, los chicos de 3 a 13 años tienen una variada oferta de actividades dentro y fuera del complejo: en el bosque, en las piscinas o en la playa.',
    features: [
      { icon: Baby, text: 'Recreación desde los 3 años' },
      { icon: Gamepad2, text: 'Juegos y actividades todo el día' },
    ],
  },
];

const INCLUYE = [
  'Desayuno en su cabaña sin cargo.',
  'Recreación para niños a partir de los 3 años.',
  'Uso del gimnasio y sectores comunes.',
  'Mucama, ropa blanca y lavado de vajilla.',
  'Amplia DVDteca para disfrutar en su cabaña.',
  'Sombrilla y reposeras para llevar a la playa.',
  'Servicio de sombrilla en Balneario Hemingwey con costo adicional (en Temporada Alta).',
];

export default function HamletServiciosPage() {
  return (
    <main>
      <HamletPageHero
        title="SERVICIOS"
        subtitle="Atentos al entusiasmo y las necesidades de quienes nos visitan, con la más amplia libertad de horarios para disfrutar todos nuestros servicios."
      />

      <div className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 pb-10 md:gap-24 md:px-8 md:pb-16">
        {SERVICES.map((service, index) => (
          <RevealSection key={service.title}>
            <ServiceRow {...service} href="/puerto-hamlet/contacto" ctaLabel="Consultar" imageSide={index % 2 === 0 ? 'left' : 'right'} />
          </RevealSection>
        ))}
      </div>

      <RevealSection className="mx-auto mb-16 max-w-[1100px] rounded-2xl bg-savoia-stone px-6 py-8 md:mb-24 md:px-8">
        <h2 className="text-center text-2xl font-medium text-savoia-charcoal">Además podrá disfrutar de</h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {INCLUYE.map((item) => (
            <li
              key={item}
              className="rounded-2xl bg-white px-4 py-3 text-center text-sm text-savoia-taupe-text"
            >
              {item}
            </li>
          ))}
        </ul>
      </RevealSection>
    </main>
  );
}
