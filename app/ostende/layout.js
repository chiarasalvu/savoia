import OstendeHeader from '@/components/OstendeHeader';
import Footer from '@/components/Footer';

export default function OstendeLayout({ children }) {
  return (
    <div className="ostende-theme">
      <OstendeHeader />
      {children}
      <Footer />
    </div>
  );
}
