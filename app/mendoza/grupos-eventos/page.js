import Image from 'next/image';
import { whatsappHref } from '@/lib/whatsapp';
import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import { SALONES } from '@/lib/mendozaSalones';

export const metadata = { title: 'Hoteles Savoia | Grupos & Eventos' };

const WHATSAPP_HREF = whatsappHref('/mendoza', 'Hola! Quiero consultar por grupos y eventos en Mendoza.');

const EVENTOS = [
  'Conferencias',
  'Bautizos',
  'Casamientos',
  'Quince años',
  'Graduaciones',
  'Noches de gala',
  'Eventos corporativos',
  'Cumpleaños',
  'Eventos culturales',
];


export default function MendozaGruposEventosPage() {
  return (
    <main>
      <RevealSection className="mx-auto max-w-[1100px] px-5 pb-10 pt-24 text-center md:pb-16 md:pt-32">
        <h1 className="text-3xl font-medium md:text-4xl">Grupos & Eventos</h1>
      </RevealSection>

      <RevealSection className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-10 px-6 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pb-24">
        <div>
          <p className="text-savoia-taupe-text">
            En el corazón del vino y rodeado de naturaleza, Hotel Savoia Mendoza cuenta con tres salones propios,
            pensados para reuniones empresariales, convenciones, celebraciones y todo tipo de eventos grupales:
            el escenario perfecto, donde la tradición se encuentra con la innovación.
          </p>
          <p className="mt-4 text-savoia-taupe-text">
            A diez minutos del aeropuerto y de la terminal de buses, con rápido acceso desde la ruta 7 (Acceso Este).
          </p>

          <ul className="mt-6 flex flex-col divide-y divide-savoia-taupe/20 border-y border-savoia-taupe/20">
            {SALONES.map((salon) => (
              <li key={salon.title} className="py-4">
                <h2 className="text-sm font-medium uppercase tracking-wide text-savoia-charcoal">{salon.title}</h2>
                <p className="mt-1 text-sm text-savoia-taupe-text">{salon.text}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-xs font-medium uppercase tracking-widest text-savoia-charcoal">Eventos</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
            {EVENTOS.map((evento) => (
              <li key={evento} className="flex items-start gap-2 text-sm text-savoia-taupe-text">
                <span aria-hidden="true" className="mt-0.5 text-savoia-charcoal">✓</span>
                <span>{evento}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-savoia-taupe-text">
            Cuéntenos qué necesita y lo ayudamos a planificar su evento, desde la logística hasta el alojamiento
            del grupo.
          </p>
          <Link
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border border-savoia-charcoal px-5 py-2 text-xs font-medium tracking-wide text-savoia-charcoal transition-colors hover:bg-savoia-charcoal hover:text-white"
          >
            CONSULTANOS POR WHATSAPP
          </Link>
        </div>
        <div className="relative h-[280px] w-full overflow-hidden md:h-[480px]">
          <Image
            src="/img/mendoza/salon-de-fiesta.jpg"
            alt="Salón de eventos del Hotel Savoia Mendoza"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </RevealSection>
    </main>
  );
}
