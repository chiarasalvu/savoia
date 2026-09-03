import Image from 'next/image';
import ContactInfoBar from '@/components/ContactInfoBar';

export const metadata = { title: 'Hoteles Savoia | Gastronomía' };

const CENA_TEXT =
  'Nuestras cenas se caracterizan por su amplia variedad de platos disponibles en el Buffet Froid. Todas las noches nuestro chef ejecutivo elabora distintas variedades de platos calientes servidas a la minuta para lograr el verdadero sabor de la comida hogareña. Además de ello se sirven menús temáticos como ser: La noche Mexicana con tacos y nachos · La noche Española con su tradicional Paella Savoia · La noche Oriental con variedad de Sushi · La noche Argentina con la Pata de ternera fileteada por el propio chef en el salón · La noche Italiana con su incomparable festival de pastas';

function FlipCard({ title, back }) {
  return (
    <div className="group relative m-4 flex h-[200px] w-[280px] items-center justify-center overflow-hidden bg-savoia-dark">
      <h3 className="px-4 text-center text-lg text-white transition-opacity group-hover:opacity-0">{title}</h3>
      <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
        {back}
      </p>
    </div>
  );
}

export default function OstendeGastronomiaPage() {
  return (
    <main>
      <section className="mt-8 py-8 text-center">
        <h3 className="text-lg">DELÉITESE CON NUESTRAS PROPUESTAS GASTRONÓMICAS, TODAS ELABORADAS EN EL HOTEL</h3>
        <h1 className="mt-2 text-3xl font-medium md:text-4xl">GASTRONOMÍA</h1>
      </section>

      <div className="flex flex-wrap justify-center">
        <FlipCard title="DESAYUNO" back="B" />
        <FlipCard title="ALMUERZO" back="B" />
        <FlipCard title="CENA" back={CENA_TEXT} />
      </div>

      <div className="relative mx-auto my-6 h-[300px] w-full max-w-[1200px]">
        <Image
          src="/img/ostende/home/collage-gastronomia.jpg"
          alt="Savoia"
          fill
          sizes="(min-width: 1200px) 1200px, 100vw"
          className="object-cover"
        />
      </div>

      <section className="py-8 text-center">
        <h3 className="text-lg">DISFRUTE DE LOS MEJORES COCKTAILS FRENTE AL MAR</h3>
        <h1 className="mt-2 text-3xl font-medium md:text-4xl">DRINKS</h1>
      </section>

      <div className="flex flex-wrap justify-center">
        <FlipCard title="BAR WOODSTOCK" back="B" />
        <FlipCard title="BAR SAINT JEAN" back="B" />
      </div>

      <div className="relative mx-auto my-6 h-[300px] w-full max-w-[1200px]">
        <Image
          src="/img/ostende/home/collage-gastronomia.jpg"
          alt="Savoia"
          fill
          sizes="(min-width: 1200px) 1200px, 100vw"
          className="object-cover"
        />
      </div>

      <ContactInfoBar
        locationHref="https://maps.app.goo.gl/7KvrAK9TjD1MjuA89"
        locationText="Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar"
        phoneHref="tel:02254496600"
        phoneText="(02254) 49-6600"
      />
    </main>
  );
}
