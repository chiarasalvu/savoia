'use client';

import GuestCounter from '@/components/GuestCounter';
import ContactInfoBar from '@/components/ContactInfoBar';
import FormField from '@/components/FormField';
import Button from '@/components/Button';

export default function ContactoPage() {
  return (
    <main>
      <section className="bg-savoia-stone py-16 text-center md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-8">
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">CONTACTO</h1>
          <span className="mx-auto mt-4 block h-0.5 w-10 bg-savoia-accent" />
          <h3 className="mt-4 text-lg text-savoia-taupe-text">¡Contactanos y viví una experiencia inolvidable!</h3>

          <form
            className="mx-auto mt-10 max-w-[600px] text-left"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Gracias por tu mensaje. Te contactaremos a la brevedad.');
              e.target.reset();
            }}
          >
            <FormField label="Nombre y apellido" name="name" required className="mb-6" />
            <FormField label="Email" name="email" type="email" required className="mb-6" />
            <FormField label="Hotel" name="hotel" as="select" required defaultValue="" className="mb-6">
              <option value="" disabled>
                Seleccione un hotel
              </option>
              <option value="ostende">Hotel Savoia Ostende</option>
              <option value="mendoza">Hotel Savoia Mendoza</option>
              <option value="san bernardo">Hotel Savoia San Bernardo</option>
              <option value="cariló">Puerto Hamlet Cariló</option>
            </FormField>

            <div className="mb-6">
              <GuestCounter />
            </div>

            <div className="mb-6 flex flex-wrap gap-5">
              <FormField label="Fecha de entrada" name="fecha-entrada" type="date" required className="flex-1" />
              <FormField label="Fecha de salida" name="fecha-salida" type="date" required className="flex-1" />
            </div>

            <FormField label="Mensaje" name="message" as="textarea" rows={5} className="mb-8" />

            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </section>

      <ContactInfoBar />
    </main>
  );
}
