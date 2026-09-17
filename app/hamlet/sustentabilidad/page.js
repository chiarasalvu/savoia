import Image from 'next/image';
import HamletPageHero from '@/components/HamletPageHero';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Sustentabilidad' };

const PRACTICAS = [
  'Uso racional del agua',
  'Creando menor impacto de residuos',
  'Utilizando solo las luces y electrodomésticos necesarios',
  'Disminuyendo el uso de toallas',
];

const CERTIFICACIONES = [
  { src: '/img/hamlet/sustentabilidad/certificaciones/aht.png', alt: 'Certificación AHT', width: 150, height: 150 },
  {
    src: '/img/hamlet/sustentabilidad/certificaciones/hoteles-mas-verdes.png',
    alt: 'Certificación Hoteles Más Verdes — Bronce',
    width: 157,
    height: 131,
  },
  { src: '/img/hamlet/sustentabilidad/certificaciones/ecolideres.png', alt: 'Certificación Ecolíderes', width: 204, height: 80 },
];

export default function HamletSustentabilidadPage() {
  return (
    <main>
      <HamletPageHero
        title="SUSTENTABILIDAD"
        subtitle="Comprometidos con el cuidado del ambiente y la biodiversidad de Cariló."
      />

      <RevealSection className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 px-6 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pb-24">
        <div>
          <p className="text-savoia-taupe-text">
            Nuestro complejo forma parte del programa de Eco Etiquetado de Hotelería Sustentable de la República
            Argentina, sumándose al compromiso de cumplir los principios de turismo sustentable, controlando y
            disminuyendo el uso innecesario de recursos y actuando en armonía y respeto con nuestra comunidad.
          </p>
          <p className="mt-4 text-savoia-taupe-text">
            Asumimos el compromiso de propagar prácticas sustentables tratando de disminuir el impacto negativo
            que causa directamente sobre nuestro medio ambiente, cumpliendo la normativa aplicable y buscando
            mejorar cada día más.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {PRACTICAS.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center rounded-2xl bg-savoia-stone px-4 py-3 text-center text-sm text-savoia-charcoal"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-full">
          <Image
            src="/img/hamlet/sustentabilidad/certificacion-bronce.jpg"
            alt="Certificación Bronce Hoteles Más Verdes de Puerto Hamlet"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </RevealSection>

      <div className="relative h-64 w-full overflow-hidden md:h-80">
        <Image
          src="/img/hamlet/sustentabilidad/parque-soleado.jpg"
          alt="Parque de Puerto Hamlet en un día soleado"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <RevealSection className="mx-auto max-w-[720px] px-6 py-16 md:px-8 md:py-24">
        <h2 className="text-2xl font-medium text-savoia-charcoal">Política sustentable</h2>
        <p className="mt-4 text-savoia-taupe-text">
          En Puerto Hamlet estamos comprometidos con el cuidado del ambiente y la biodiversidad, manteniendo la
          armonía con nuestro entorno y prestando servicios de calidad a nuestros huéspedes. Para lograrlo,
          buscamos permanentemente la innovación y la mejora continua, a través de la capacitación y el trabajo
          en equipo, así como participando activamente en iniciativas locales para el desarrollo sustentable de
          la localidad de Cariló.
        </p>
        <p className="mt-4 text-savoia-taupe-text">
          Aseguramos el cumplimiento de las normas ambientales, de seguridad y sanitarias, de protección de la
          biodiversidad y el patrimonio cultural, y demás reglamentaciones aplicables a nuestra actividad. De
          igual forma, asumimos los principios de turismo sustentable definidos en la Carta Mundial de Turismo
          Sostenible+20. Identificamos y nos esforzamos por la prevención y minimización de nuestros impactos
          ambientales a través de buenas prácticas en el uso de los recursos, en la gestión de los residuos, y en
          la conservación de nuestro entorno. Invitamos a nuestros huéspedes a ayudarnos a valorar los recursos
          naturales y culturales de nuestra región y a cuidarlos.
        </p>
        <p className="mt-4 text-savoia-taupe-text">
          Promovemos el desarrollo local a través del apoyo a productores de nuestra región, así como priorizando
          la compra a proveedores locales o eco amigables, siempre en un marco de comercio justo. Porque Puerto
          Hamlet no es sólo un lugar de descanso para quienes visitan Cariló. Es también patrimonio natural de
          todos sus habitantes, de hoy y de mañana.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {CERTIFICACIONES.map((cert) => (
            <div key={cert.src} className="flex h-20 items-center">
              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                className="h-20 w-auto max-w-[220px] object-contain"
              />
            </div>
          ))}
        </div>
      </RevealSection>
    </main>
  );
}
