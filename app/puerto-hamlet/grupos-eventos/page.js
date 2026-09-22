import Image from 'next/image';
import HamletPageHero from '@/components/HamletPageHero';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Grupos & Eventos' };

export default function HamletGruposEventosPage() {
  return (
    <main>
      <HamletPageHero
        title="Grupos & Eventos"
        subtitle="Grupos, convenciones, conferencias — un lugar distinto y confortable para tus reuniones y eventos."
      />

      <RevealSection className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 px-6 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pb-24">
        <div>
          <p className="text-savoia-taupe-text">
            Si buscás un lugar distinto, confortable, con las más amplias comodidades y servicios para esas
            reuniones o eventos tan importantes en la vida empresarial, Puerto Hamlet es el lugar que necesitás.
            Ubicados en el centro de Cariló, rodeados de tranquilos bosques y del suntuoso mar, te invitamos a
            organizar tu evento.
          </p>
          <p className="mt-4 text-savoia-taupe-text">
            Podemos y queremos ayudarte. Somos tu complemento ideal, el socio perfecto para montar los espíritus.
            Empecemos a planear juntos, háganos llegar tu consulta.
          </p>
        </div>
        <div className="relative h-[280px] w-full overflow-hidden md:h-[360px]">
          <Image
            src="/img/grupos-eventos.webp"
            alt="Grupos y eventos en Hoteles Savoia"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </RevealSection>
    </main>
  );
}
