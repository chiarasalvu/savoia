import Image from 'next/image';
import Link from 'next/link';
import HamletPageHero from '@/components/HamletPageHero';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Grupos & Eventos' };

const WHATSAPP_HREF = 'https://wa.me/5491158958380?text=Hola!%20Quiero%20consultar%20por%20grupos%20y%20eventos%20en%20Puerto%20Hamlet.';

export default function HamletGruposEventosPage() {
  return (
    <main>
      <HamletPageHero
        title="Grupos & Eventos"
        subtitle="Grupos, convenciones, conferencias: un lugar distinto y confortable para sus reuniones y eventos."
      />

      <RevealSection className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 px-6 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pb-24">
        <div>
          <p className="text-savoia-taupe-text">
            Si busca un lugar distinto y confortable, con las más amplias comodidades y servicios para esas
            reuniones o eventos tan importantes en la vida empresarial, Puerto Hamlet es el lugar que necesita.
            Ubicados en el centro de Cariló, rodeados de tranquilos bosques y del mar, lo invitamos a organizar su
            evento con nosotros.
          </p>
          <p className="mt-4 text-savoia-taupe-text">
            Podemos y queremos ayudarlo. Somos su complemento ideal, el socio perfecto para que su evento salga
            como lo imaginó. Empecemos a planear juntos: háganos llegar su consulta.
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
        <div className="relative h-[280px] w-full overflow-hidden md:h-[360px]">
          <Image
            src="/img/puerto-hamlet/ubicacion/fachada.jpg"
            alt="Fachada de Puerto Hamlet"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </RevealSection>
    </main>
  );
}
