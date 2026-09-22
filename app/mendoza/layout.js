import PropertyHeader from '@/components/PropertyHeader';
import Footer from '@/components/Footer';

const NAV_LINKS = [
  { href: '/mendoza/servicios', label: 'Servicios' },
  { href: '/mendoza/grupos-eventos', label: 'Grupos & Eventos' },
  { href: '/mendoza#contacto', label: 'Contacto' },
];

export default function MendozaLayout({ children }) {
  return (
    <>
      <PropertyHeader
        propertyName="Mendoza"
        homeHref="/mendoza"
        logoSrc="/img/logo-savoia-hires.png"
        logoHeight={30}
        logoAlt="Hotel Savoia Mendoza"
        navLinks={NAV_LINKS}
        bookHref="/mendoza#contacto"
      />
      {children}
      <Footer />
    </>
  );
}
