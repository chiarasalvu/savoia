'use client';

import { useState } from 'react';
import { User, Mail, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import GuestCounter from '@/components/GuestCounter';
import DatePicker from '@/components/DatePicker';
import ContactInfoBar from '@/components/ContactInfoBar';
import FormField from '@/components/FormField';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xldryqnw';

export default function OstendeContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

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
            <form className="mx-auto mt-10 max-w-[600px] text-left" onSubmit={handleSubmit}>
              <FormField icon={User} label="Nombre y apellido" name="nombre" required className="mb-6" />
              <FormField icon={Mail} label="Email" name="email" type="email" required className="mb-6" />

              <div className="mb-6">
                <GuestCounter adultsName="adultos" childrenName="menores" />
              </div>

              <div className="mb-6 flex flex-col gap-5 sm:flex-row">
                <DatePicker label="Fecha de entrada" name="fecha-entrada" required className="flex-1" />
                <DatePicker label="Fecha de salida" name="fecha-salida" required className="flex-1" />
              </div>

              <FormField icon={MessageSquare} label="Mensaje" name="mensaje" as="textarea" rows={5} className="mb-6" />

              {error && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-red-700">
                  <AlertCircle size={20} className="shrink-0" />
                  <span>No pudimos enviar tu consulta. Probá de nuevo en unos minutos.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-2xl bg-[#00244D] py-4 text-base font-medium text-white transition-colors hover:bg-[#003a75] disabled:opacity-60"
              >
                {submitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          )}
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
