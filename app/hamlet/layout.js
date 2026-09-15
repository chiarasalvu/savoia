import HamletHeader from '@/components/HamletHeader';
import HamletInfoBar from '@/components/HamletInfoBar';
import HamletFooter from '@/components/HamletFooter';

export default function HamletLayout({ children }) {
  return (
    <>
      <HamletHeader />
      {children}
      <HamletInfoBar />
      <HamletFooter />
    </>
  );
}
