import PropertyHeader from '@/components/PropertyHeader';
import Footer from '@/components/Footer';

const NAV_LINKS = [
  { href: '/ostende/habitaciones', label: 'Habitaciones' },
  { href: '/ostende/servicios', label: 'Servicios' },
  { href: '/ostende/grupos-eventos', label: 'Grupos & Eventos' },
  { href: '/ostende/contacto', label: 'Contacto' },
];

export default function OstendeLayout({ children }) {
  return (
    <div className="ostende-theme">
      <PropertyHeader
        propertyName="Ostende"
        homeHref="/ostende"
        logoSrc="/img/ostende/logonuevo-savoia.png"
        logoHeight={38}
        logoAlt="Hotel Savoia Ostende"
        navLinks={NAV_LINKS}
      />
      {children}
      <Footer />
    </div>
  );
}
