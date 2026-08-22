'use client';

import GuestCounter from '@/components/GuestCounter';
import ContactInfoBar from '@/components/ContactInfoBar';

export default function OstendeContactoPage() {
  return (
    <main>
      <section className="bg-savoia-light py-10 text-center">
        <div className="mx-auto max-w-[1100px] px-5">
          <h1 className="text-3xl font-medium">CONTACTO</h1>
          <h3 className="text-xl">¡Contactanos y viví una experiencia inolvidable!</h3>

          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Gracias por tu mensaje. Te contactaremos a la brevedad.');
              e.target.reset();
            }}
          >
            <div className="mb-5">
              <input type="text" name="nombre" placeholder="Nombre y apellido" required className="w-4/5 border border-[#ddd] p-3" />
            </div>
            <div className="mb-5">
              <input type="email" name="email" placeholder="Email" required className="w-4/5 border border-[#ddd] p-3" />
            </div>

            <div className="mx-auto mb-5 flex w-4/5 flex-wrap justify-between gap-5">
              <GuestCounter adultsName="adultos" childrenName="menores" />
              <div className="flex-1">
                <label htmlFor="fecha-entrada" className="mb-1 block text-left">
                  Fecha de entrada
                </label>
                <input type="date" id="fecha-entrada" name="fecha-entrada" required className="w-full border border-[#ddd] p-3" />
              </div>
              <div className="flex-1">
                <label htmlFor="fecha-salida" className="mb-1 block text-left">
                  Fecha de salida
                </label>
                <input type="date" id="fecha-salida" name="fecha-salida" required className="w-full border border-[#ddd] p-3" />
              </div>
            </div>

            <div className="mb-5">
              <textarea name="mensaje" placeholder="Mensaje" className="h-[200px] w-4/5 border border-[#ddd] p-3" />
            </div>

            <button
              type="submit"
              className="bg-savoia-dark px-5 py-3 text-[#f4f4f4] transition-colors hover:bg-[#d4d2d2] hover:text-[#00244d]"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
