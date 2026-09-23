import ServiceGrid from '@/components/ServiceGrid';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Servicios' };

const SERVICES = [
  {
    src: '/img/ostende/servicios/cocina-ostende.jpg',
    alt: 'Gastronomía Savoia',
    title: 'Gastronomía Savoia',
    description: 'Desayuno buffet estilo americano por las mañanas y cenas con menús temáticos cada noche.',
    href: '/ostende/gastronomia-savoia',
  },
  {
    src: '/img/ostende/servicios/bar-abajo.jpg',
    alt: 'Bar Woodstock',
    title: 'Bar Woodstock',
    description: 'Comida y coctelería en planta baja, con karaoke y bingo musical para disfrutar en familia.',
    href: '/ostende/bar-woodstock',
  },
  {
    src: '/img/ostende/servicios/bar-piso5.jpg',
    alt: 'Bar Saint Jean',
    title: 'Bar Saint Jean',
    description: 'Infusiones y coctelería en el 5to piso, con vista panorámica al mar y al muelle de Pinamar.',
    href: '/ostende/bar-saintjean',
  },
  {
    src: '/img/ostende/servicios/pileta-ostende.jpg',
    alt: 'Pileta & Bar Naples',
    title: 'Pileta & Bar Naples',
    description: 'Sector para niños y adultos, con el Bar Naples al lado para comer y beber todo el día.',
    href: '/ostende/pileta',
  },
  {
    src: '/img/ostende/servicios/saladejuegos.jpg',
    alt: 'Mini Club',
    title: 'Mini club',
    description: 'Sala de recreación con juegos y actividades para que los más chicos se diviertan todo el día.',
    href: '/ostende/miniclub',
  },
  {
    src: '/img/ostende/servicios/gimnasio.jpg',
    alt: 'Gimnasio y sauna',
    title: 'Gimnasio y sauna',
    description: 'Gimnasio equipado y sauna con turno reservable en recepción.',
    href: '/ostende/gym-sauna',
  },
];

export default function OstendeServiciosPage() {
  return (
    <main>
      <RevealSection className="mx-auto max-w-[1400px] px-6 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <h1 className="text-2xl font-medium text-savoia-charcoal md:text-3xl">Servicios</h1>
        <div className="mt-10">
          <ServiceGrid services={SERVICES} />
        </div>
      </RevealSection>
    </main>
  );
}
