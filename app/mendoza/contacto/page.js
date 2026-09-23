import MendozaContactForm from '@/components/MendozaContactForm';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Contacto' };

export default function MendozaContactoPage() {
  return (
    <main>
      <MendozaContactForm />

      <div className="h-[450px] w-full">
        <iframe
          title="Ubicación Hotel Savoia Mendoza"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13403.67843106654!2d-68.7812728!3d-32.8738464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0ee88023a90d%3A0x93f08f6380c71b44!2sHotel%20SAVOIA!5e0!3m2!1ses!2sar!4v1729803999933!5m2!1ses!2sar"
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
