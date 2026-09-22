import PropertyHeader from '@/components/PropertyHeader';
import Footer from '@/components/Footer';

const NAV_LINKS = [
  { href: '/puerto-hamlet/cabanas', label: 'Cabañas' },
  { href: '/puerto-hamlet/servicios', label: 'Servicios' },
  { href: '/puerto-hamlet/sustentabilidad', label: 'Sustentabilidad' },
  { href: '/puerto-hamlet/grupos-eventos', label: 'Grupos & Eventos' },
  { href: '/puerto-hamlet/contacto', label: 'Contacto' },
];

export default function HamletLayout({ children }) {
  return (
    <>
      <PropertyHeader
        propertyName="Cariló"
        homeHref="/puerto-hamlet"
        logoSrc="/img/puerto-hamlet/logo-hamlet-carilo.png"
        logoHeight={26}
        logoAlt="Puerto Hamlet — Hoteles Savoia"
        navLinks={NAV_LINKS}
        bookHref="/puerto-hamlet/contacto"
      />
      {children}
      <Footer />
    </>
  );
}
