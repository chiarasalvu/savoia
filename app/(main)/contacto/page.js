'use client';

import { useState } from 'react';
import { User, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import GuestCounter from '@/components/GuestCounter';
import HotelSelect from '@/components/HotelSelect';
import DatePicker from '@/components/DatePicker';
import Captcha from '@/components/Captcha';
import ContactInfoBar from '@/components/ContactInfoBar';
import FormField from '@/components/FormField';

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <section className="bg-savoia-stone py-16 text-center md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-8">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">CONTACTO</h1>
          <h3 className="mt-4 text-lg text-savoia-taupe-text">¡Contactanos y viví una experiencia inolvidable!</h3>

          {submitted ? (
            <div className="mx-auto mt-10 max-w-[600px] rounded-2xl border border-savoia-taupe/30 bg-white px-8 py-14">
              <CheckCircle2 size={40} className="mx-auto mb-4 text-savoia-charcoal" />
              <p className="text-lg font-medium text-savoia-charcoal">Consulta enviada</p>
              <p className="mt-2 text-savoia-taupe-text">Nos pondremos en contacto pronto.</p>
            </div>
          ) : (
            <form
              className="mx-auto mt-10 max-w-[600px] text-left"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <FormField icon={User} label="Nombre y apellido" name="name" required className="mb-6" />
              <FormField icon={Mail} label="Email" name="email" type="email" required className="mb-6" />
              <div className="mb-6">
                <HotelSelect required />
              </div>

              <div className="mb-6">
                <GuestCounter />
              </div>

              <div className="mb-6 flex flex-col gap-5 sm:flex-row">
                <DatePicker label="Fecha de entrada" name="fecha-entrada" required className="flex-1" />
                <DatePicker label="Fecha de salida" name="fecha-salida" required className="flex-1" />
              </div>

              <FormField icon={MessageSquare} label="Mensaje" name="message" as="textarea" rows={5} className="mb-6" />

              <Captcha className="mb-8" />

              <button
                type="submit"
                className="w-full rounded-2xl bg-savoia-charcoal py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </section>

      <ContactInfoBar />
    </main>
  );
}
