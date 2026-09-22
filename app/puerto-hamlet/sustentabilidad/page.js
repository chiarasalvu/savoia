import Image from 'next/image';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Puerto Hamlet — Sustentabilidad' };

const PRACTICAS = [
  'Uso racional del agua',
  'Menor impacto de residuos',
  'Solo las luces y electrodomésticos necesarios',
  'Menor uso de toallas',
];

const PILARES = [
  {
    title: 'Uso responsable de los recursos',
    text: 'Controlamos y disminuimos el uso innecesario de recursos, con prácticas simples que se suman todos los días.',
    list: PRACTICAS,
  },
  {
    title: 'Eco etiquetado de hotelería sustentable',
    text: 'Nuestro complejo forma parte del programa de Eco Etiquetado de Hotelería Sustentable de la República Argentina, sumándose al compromiso de cumplir los principios del turismo sustentable.',
  },
  {
    title: 'Cumplimiento y mejora continua',
    text: 'Aseguramos el cumplimiento de las normas ambientales, de seguridad y sanitarias, y de protección de la biodiversidad y el patrimonio cultural. Asumimos los principios de la Carta Mundial de Turismo Sostenible+20 y buscamos la mejora continua a través de la capacitación y el trabajo en equipo.',
  },
  {
    title: 'Desarrollo local',
    text: 'Promovemos el desarrollo local apoyando a productores de nuestra región y priorizando la compra a proveedores locales o eco amigables, siempre en un marco de comercio justo. Participamos activamente en iniciativas locales para el desarrollo sustentable de Cariló.',
  },
  {
    title: 'Huéspedes conscientes',
    text: 'Invitamos a nuestros huéspedes a ayudarnos a valorar los recursos naturales y culturales de nuestra región y a cuidarlos.',
  },
];

const CERTIFICACIONES = [
  { src: '/img/puerto-hamlet/sustentabilidad/certificaciones/aht.png', alt: 'Certificación AHT', width: 150, height: 150 },
  {
    src: '/img/puerto-hamlet/sustentabilidad/certificaciones/hoteles-mas-verdes.png',
    alt: 'Certificación Hoteles Más Verdes — Bronce',
    width: 157,
    height: 131,
  },
  { src: '/img/puerto-hamlet/sustentabilidad/certificaciones/ecolideres.png', alt: 'Certificación Ecolíderes', width: 204, height: 80 },
];

export default function HamletSustentabilidadPage() {
  return (
    <main>
      <RevealSection className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 pb-14 pt-24 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-8 md:pb-20 md:pt-32">
        <h1 className="text-3xl font-medium leading-tight text-savoia-charcoal md:text-4xl">
          Cuidamos el ambiente y a la comunidad de Cariló
        </h1>
        <div>
          <p className="text-savoia-taupe-text">
            En Puerto Hamlet estamos comprometidos con el cuidado del ambiente y la biodiversidad, manteniendo la
            armonía con nuestro entorno y prestando servicios de calidad a nuestros huéspedes. Buscamos
            permanentemente la innovación y la mejora continua, y asumimos el compromiso de propagar prácticas
            sustentables para disminuir el impacto negativo sobre nuestro medio ambiente.
          </p>
        </div>
      </RevealSection>

      <div className="relative mx-auto mb-14 h-64 w-full max-w-[1400px] overflow-hidden px-6 md:mb-20 md:h-96 md:px-8">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/img/puerto-hamlet/sustentabilidad/parque-soleado.jpg"
            alt="Parque de Puerto Hamlet en un día soleado"
            fill
            sizes="(min-width: 1400px) 1336px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <RevealSection className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pb-14 md:grid-cols-[0.8fr_1.6fr] md:gap-16 md:px-8 md:pb-20">
        <div className="relative aspect-[4/5] w-full overflow-hidden md:sticky md:top-32 md:self-start">
          <Image
            src="/img/puerto-hamlet/sustentabilidad/hero.jpg"
            alt="Cartel informativo entre la vegetación del parque de Puerto Hamlet"
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-widest text-savoia-charcoal">Nuestros compromisos</h2>
          <ol className="mt-6 border-t border-savoia-taupe/20">
            {PILARES.map((pilar, i) => (
              <li
                key={pilar.title}
                className="grid grid-cols-1 gap-3 border-b border-savoia-taupe/20 py-8 md:grid-cols-[64px_1fr_1.4fr] md:gap-8"
              >
                <span className="text-2xl font-light text-savoia-taupe-text">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-medium text-savoia-charcoal">{pilar.title}</h3>
                <div>
                  <p className="text-sm text-savoia-taupe-text">{pilar.text}</p>
                  {pilar.list && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {pilar.list.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-savoia-taupe-text">
                          <span aria-hidden="true" className="text-savoia-charcoal">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 pb-14 md:grid-cols-2 md:gap-16 md:px-8 md:pb-20">
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <Image
            src="/img/puerto-hamlet/sustentabilidad/certificacion-bronce.jpg"
            alt="Certificación Bronce Hoteles Más Verdes de Puerto Hamlet"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-widest text-savoia-charcoal">Certificaciones</h2>
          <div className="mt-6 flex flex-wrap items-center gap-8">
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
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-[900px] px-6 pb-16 text-center md:px-8 md:pb-24">
        <p className="text-xl font-light leading-relaxed text-savoia-charcoal md:text-2xl">
          Puerto Hamlet no es sólo un lugar de descanso para quienes visitan Cariló. Es también patrimonio natural de
          todos sus habitantes, de hoy y de mañana.
        </p>
      </RevealSection>
    </main>
  );
}
