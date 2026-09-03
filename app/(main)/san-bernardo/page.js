import Image from 'next/image';
import Link from 'next/link';
import PhotoRevealCard from '@/components/PhotoRevealCard';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | San Bernardo' };

const HABITACIONES = [
  { src: '/img/san-bernardo/san-bernardo-6.jpg', alt: 'Habitación triple', infoLines: ['HABITACIÓN TRIPLE'] },
  { src: '/img/san-bernardo/san-bernardo.jpg', alt: 'Habitación doble', infoLines: ['HABITACIÓN DOBLE'] },
];

export default function SanBernardoPage() {
  return (
    <main>
      <div className="relative flex h-[70vh] w-full items-center justify-center">
        <Image src="/img/san-bernardo/san-bernardo-7.jpg" alt="Hotel Savoia San Bernardo" fill priority className="object-cover" />
      </div>

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-center">
        <h2 className="text-3xl font-medium md:text-4xl">HOTEL SAVOIA SAN BERNARDO</h2>
        <p className="mt-4">
          Ubicado en el corazón de la costa, a metros de la playa.
          <br />
          Hotel Savoia San Bernardo es el lugar perfecto para disfrutar de tus vacaciones.
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

      <h2 className="text-center text-3xl font-medium md:text-4xl">DESCANSÁ Y RENOVÁ TUS ENERGÍAS CON NOSOTROS</h2>
      <RevealSection className="flex justify-center py-6">
        <div className="relative h-[400px] w-full max-w-[1200px]">
          <Image
            src="/img/san-bernardo/sala-sanber.jpg"
            alt="Hotel Savoia San Bernardo"
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
      </RevealSection>

      <h2 className="text-center text-3xl font-medium md:text-4xl">UBICACIÓN</h2>
      <div className="flex justify-center py-6">
        <iframe
          title="Ubicación Hotel Savoia San Bernardo"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12796.569928213892!2d-56.6774767!3d-36.6951139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c6f03f1549355%3A0xe761e17d72025964!2sHotel%20Savoia%20San%20Bernardo!5e0!3m2!1ses!2sar!4v1729802520886!5m2!1ses!2sar"
          width="1000"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/tT5bGSmaVbJpzRU6A"
        locationText="Strobel 2099 - San Bernardo"
        phoneHref="tel:02257460211"
        phoneText="Tel: (02257) 460-211 / 250"
      />
    </main>
  );
}
