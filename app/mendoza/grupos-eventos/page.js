import Image from 'next/image';
import Link from 'next/link';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Grupos & Eventos' };

const WHATSAPP_HREF = 'https://wa.me/5491158958380?text=Hola!%20Quiero%20consultar%20por%20grupos%20y%20eventos%20en%20Mendoza.';

const SALONES = [
  { title: 'Salón Azul', text: 'Ideal para reuniones corporativas. Capacidad para 120 personas en formato gala y 220 en formato auditorio.' },
  { title: 'Salón Colonial', text: 'Pensado para bodas y galas. Capacidad para 300 personas en formato gala y 550 en formato auditorio.' },
  { title: 'Salón Comedor', text: 'Con gastronomía propia del hotel. Capacidad para 500 personas en formato gala.' },
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
            pensados para reuniones empresariales, convenciones, celebraciones y todo tipo de eventos grupales.
          </p>

          <ul className="mt-6 flex flex-col divide-y divide-savoia-taupe/20 border-y border-savoia-taupe/20">
            {SALONES.map((salon) => (
              <li key={salon.title} className="py-4">
                <h2 className="text-sm font-medium uppercase tracking-wide text-savoia-charcoal">{salon.title}</h2>
                <p className="mt-1 text-sm text-savoia-taupe-text">{salon.text}</p>
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
