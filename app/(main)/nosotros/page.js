import Image from 'next/image';
import ContactInfoBar from '@/components/ContactInfoBar';
import RevealSection from '@/components/RevealSection';

export const metadata = { title: 'Hoteles Savoia | Nosotros' };

export default function NosotrosPage() {
  return (
    <main>
      <div className="relative h-[300px] w-full md:h-[600px]">
        <Image src="/img/nosotros.jpeg" alt="Hoteles Savoia" fill priority className="object-cover" />
      </div>

      <RevealSection className="mx-auto max-w-[1100px] px-5 py-10 text-justify">
        <h1 className="text-3xl font-medium">NUESTRA HISTORIA</h1>
        <p className="mt-4">Hoteles Savoia, 83 años de experiencia.</p>
        <p className="mt-4">
          Sus orígenes se remontan al año 1941 con la inauguración del primer Hotel Savoia en la
          Costa Atlántica, desde entonces se ha ido especializando en la Administración de
          Hoteles y Gastronomia en general. A lo largo de estos años se ha caracterizado por
          estar siempre un paso adelante en la implementación de medidas dirigidas a elevar y
          mejorar la calidad de los servicios al cliente.
        </p>
        <p className="mt-4">
          Nuestra Hotelería es reconocida por su exquisita y variada oferta gastronómica
          elaborada en cada establecimiento con materia prima de primera calidad, logrando
          sabores propios de la mejor cocina casera.
        </p>
        <p className="mt-4">
          Molise Viajes S.R.L. es la empresa de viajes y turismo operadora exclusiva de los
          Hoteles Savoia Ostende (Pinamar), Savoia San Bernardo (San Bernardo), Ejercito de los
          Andes (Savoia Mendoza en Guaymallén, Mendoza), Molino de Oro (Savoia Cordoba en La
          Falda, Córdoba), además de todas las opciones que pueden brindarse tanto en el turismo
          Nacional como Internacional.
        </p>
        <p className="mt-4">
          La empresa Gastronomía Molisana es la encargada de administrar las distintas
          concesiones gastronómicas con que cuenta el grupo, tanto en sanatorios y clínicas como
          en hoteles y colonias de vacaciones. Además se ocupa de la organización de eventos
          exclusivamente en los lugares que administra.
        </p>
      </RevealSection>

      <ContactInfoBar />
    </main>
  );
}
