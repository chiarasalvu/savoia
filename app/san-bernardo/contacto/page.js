import SanBernardoContactForm from '@/components/SanBernardoContactForm';

export const metadata = { title: 'Hoteles Savoia | San Bernardo — Contacto' };

export default function SanBernardoContactoPage() {
  return (
    <main>
      <SanBernardoContactForm />

      <div className="h-[450px] w-full">
        <iframe
          title="Ubicación Hotel Savoia San Bernardo"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12796.569928213892!2d-56.6774767!3d-36.6951139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c6f03f1549355%3A0xe761e17d72025964!2sHotel%20Savoia%20San%20Bernardo!5e0!3m2!1ses!2sar!4v1729802520886!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </main>
  );
}
