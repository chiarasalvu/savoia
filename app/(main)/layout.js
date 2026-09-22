import Header from '@/components/Header';
import ScrollLogo from '@/components/ScrollLogo';
import Footer from '@/components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <ScrollLogo />
      {children}
      <Footer />
    </>
  );
}
