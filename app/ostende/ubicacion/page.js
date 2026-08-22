import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Ubicación' };

export default function OstendeUbicacionPage() {
  return (
    <main>
      <h1 className="mt-8 text-center text-3xl font-medium">UBICACIÓN</h1>

      <div className="flex justify-center py-8">
        <iframe
          title="Ubicación Hotel Savoia Ostende"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12723.625231051108!2d-56.8684199!3d-37.131144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cf89da86d41%3A0x5b77ff8c0445755d!2shotel%20savoia!5e0!3m2!1ses!2sar!4v1708469455151!5m2!1ses!2sar"
          width="1000"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
