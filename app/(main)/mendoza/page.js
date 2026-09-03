import Image from 'next/image';
import Link from 'next/link';
import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Mendoza' };

const HABITACIONES = [
  { src: '/img/mendoza/habitacion1-mendoza.jpg', alt: 'Habitación Hotel Savoia Mendoza' },
  { src: '/img/mendoza/habitacion2-mendoza.jpg', alt: 'Habitación Hotel Savoia Mendoza' },
];

const SERVICIOS = [
  { src: '/img/mendoza/pileta-mendoza.jpg', alt: 'Pileta climatizada', infoLines: ['PILETA CLIMATIZADA'] },
  { src: '/img/mendoza/paisaje1-mendoza.jpg', alt: 'Paisajes', infoLines: ['PAISAJES INCREIBLES'] },
  { src: '/img/mendoza/salon-de-fiesta.jpg', alt: 'Salón de eventos', infoLines: ['SALÓN DE EVENTOS'] },
  { src: '/img/mendoza/gastronomia-mendoza.jpg', alt: 'Gastronomía Savoia', infoLines: ['GASTRONOMÍA SAVOIA'] },
  { src: '/img/mendoza/cancha-tenis.jpg', alt: 'Cancha de tenis', infoLines: ['CANCHA DE TENIS'] },
  { src: '/img/mendoza/salon-de-juegos.jpg', alt: 'Salón de juegos', infoLines: ['SALÓN DE JUEGOS'] },
];

export default function MendozaPage() {
  return (
    <main>
      <div className="relative flex h-[70vh] w-full items-center justify-center">
        <Image src="/img/home/portada-mendozaaa.jpeg" alt="Hotel Savoia Mendoza" fill priority className="object-cover" />
      </div>

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-center">
        <h2 className="text-3xl font-medium md:text-4xl">HOTEL SAVOIA MENDOZA</h2>
        <p className="mt-4">
          Ubicado en el corazón del vino, rodeado de naturaleza.
          <br />
          Hotel Savoia Mendoza es el lugar perfecto para disfrutar de tus vacaciones.
        </p>
        <Link href="/contacto" className="mt-6 inline-block bg-savoia-dark px-5 py-3 text-white">
          Reservar ahora
        </Link>
      </RevealSection>

      <h2 className="text-center text-3xl font-medium md:text-4xl">HABITACIONES</h2>
      <RevealSection className="flex flex-wrap justify-center py-6">
        {HABITACIONES.map((room) => (
          <PhotoRevealCard key={room.src} {...room} />
        ))}
      </RevealSection>

      <h2 className="text-center text-3xl font-medium md:text-4xl">SERVICIOS</h2>
      <RevealSection className="flex flex-wrap justify-center py-6">
        {SERVICIOS.map((servicio) => (
          <PhotoRevealCard key={servicio.src} {...servicio} />
        ))}
      </RevealSection>

      <h2 className="text-center text-3xl font-medium md:text-4xl">UBICACIÓN</h2>
      <div className="flex justify-center py-6">
        <iframe
          title="Ubicación Hotel Savoia Mendoza"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13403.67843106654!2d-68.7812728!3d-32.8738464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0ee88023a90d%3A0x93f08f6380c71b44!2sHotel%20SAVOIA!5e0!3m2!1ses!2sar!4v1729803999933!5m2!1ses!2sar"
          width="1000"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/5tZqW9x7ouJCyS276"
        locationText="Avellaneda 3653, Bermejo - Mendoza"
        phoneHref="tel:1157379702"
        phoneText="Tel: (+54) 11 5737-9702"
      />
    </main>
  );
}
