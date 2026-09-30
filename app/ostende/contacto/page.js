import OstendeContactForm from '@/components/OstendeContactForm';

export const metadata = {
  title: 'Contacto — Hotel Savoia Ostende',
  description:
    'Contactá al Hotel Savoia Ostende, frente al mar en Biarritz 184, Pinamar, para consultar disponibilidad y reservar tu estadía.',
};

export default function OstendeContactoPage() {
  return (
    <main>
      <OstendeContactForm />

      <div className="h-[500px] w-full">
        <iframe
          title="Ubicación Hotel Savoia Ostende"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12723.625231051108!2d-56.8684199!3d-37.131144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cf89da86d41%3A0x5b77ff8c0445755d!2shotel%20savoia!5e0!3m2!1ses!2sar!4v1708469455151!5m2!1ses!2sar"
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
