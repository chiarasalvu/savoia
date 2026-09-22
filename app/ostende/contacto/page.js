'use client';

import { useState } from 'react';
import { User, Mail, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import GuestCounter from '@/components/GuestCounter';
import DatePicker from '@/components/DatePicker';
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
      <section className="pb-16 pt-24 text-center md:pb-24 md:pt-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-8">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">RESERVÁ TU ESTADÍA</h1>
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
