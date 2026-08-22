import OstendeHeader from '@/components/OstendeHeader';

export default function OstendeLayout({ children }) {
  return (
    <>
      <OstendeHeader />
      {children}
    </>
  );
}
