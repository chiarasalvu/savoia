import PuertoHamletContactForm from '@/components/PuertoHamletContactForm';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Contacto' };

export default function HamletContactoPage() {
  return (
    <main>
      <PuertoHamletContactForm
        title="CONTACTO"
        subtitle="¡Contactanos y viví una experiencia inolvidable!"
      />

      <div className="h-[450px] w-full">
        <iframe
          title="Ubicación Puerto Hamlet"
          src="https://www.google.com/maps?q=Cerezo+y+Avutarda,+Carilo,+Buenos+Aires,+Argentina&output=embed"
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
