import './globals.css';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Hoteles Savoia',
  description: 'Bienvenidos a hoteles savoia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans text-savoia-charcoal">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
