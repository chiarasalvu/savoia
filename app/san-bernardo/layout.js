import PropertyHeader from '@/components/PropertyHeader';
import Footer from '@/components/Footer';

const NAV_LINKS = [
  { href: '/san-bernardo/servicios', label: 'Servicios' },
  { href: '/san-bernardo/grupos-eventos', label: 'Grupos & Eventos' },
  { href: '/san-bernardo/contacto', label: 'Contacto' },
];

export default function SanBernardoLayout({ children }) {
  return (
    <>
      <PropertyHeader
        propertyName="San Bernardo"
        homeHref="/san-bernardo"
        logoSrc="/img/logo-savoia-hires.png"
        logoHeight={30}
        logoAlt="Hotel Savoia San Bernardo"
        navLinks={NAV_LINKS}
      />
      {children}
      <Footer />
    </>
  );
}
