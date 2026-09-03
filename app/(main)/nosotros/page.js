import Image from 'next/image';
import ContactInfoBar from '@/components/ContactInfoBar';
import SplitContent from '@/components/SplitContent';

export const metadata = { title: 'Hoteles Savoia | Nosotros' };

export default function NosotrosPage() {
  return (
    <main>
      <div className="relative h-[300px] w-full md:h-[600px]">
        <Image src="/img/nosotros.jpeg" alt="Hoteles Savoia" fill priority className="object-cover" />
      </div>

      <div className="md:mt-16 lg:mt-24">
        <SplitContent
        imageSrc="/img/nosotros/historia.jpg"
        imageAlt="Historia de Hoteles Savoia"
        imageSide="right"
        title="NUESTRA HISTORIA"
        paragraphs={[
          'Hoteles Savoia, 83 años de experiencia.',
          'Sus orígenes se remontan al año 1941 con la inauguración del primer Hotel Savoia en la Costa Atlántica, desde entonces se ha ido especializando en la Administración de Hoteles y Gastronomia en general. A lo largo de estos años se ha caracterizado por estar siempre un paso adelante en la implementación de medidas dirigidas a elevar y mejorar la calidad de los servicios al cliente.',
          'Nuestra Hotelería es reconocida por su exquisita y variada oferta gastronómica elaborada en cada establecimiento con materia prima de primera calidad, logrando sabores propios de la mejor cocina casera.',
          'Molise Viajes S.R.L. es la empresa de viajes y turismo operadora exclusiva de los Hoteles Savoia Ostende (Pinamar), Savoia San Bernardo (San Bernardo), Ejercito de los Andes (Savoia Mendoza en Guaymallén, Mendoza), Molino de Oro (Savoia Cordoba en La Falda, Córdoba), además de todas las opciones que pueden brindarse tanto en el turismo Nacional como Internacional.',
          'La empresa Gastronomía Molisana es la encargada de administrar las distintas concesiones gastronómicas con que cuenta el grupo, tanto en sanatorios y clínicas como en hoteles y colonias de vacaciones. Además se ocupa de la organización de eventos exclusivamente en los lugares que administra.',
          ]}
        />
      </div>

      <div className="md:mt-16 lg:mt-24">
        <ContactInfoBar />
      </div>
    </main>
  );
}
