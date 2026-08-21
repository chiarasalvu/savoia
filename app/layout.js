import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Hoteles Savoia',
  description: 'Bienvenidos a hoteles savoia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans text-[#333]">
        <Header />
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
