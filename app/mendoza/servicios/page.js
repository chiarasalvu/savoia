import ServiceGrid from '@/components/ServiceGrid';
import RevealSection from '@/components/RevealSection';
import { SERVICIOS } from '@/lib/mendozaServices';

export const metadata = { title: 'Hoteles Savoia | Mendoza — Servicios' };

export default function MendozaServiciosPage() {
  return (
    <main>
      <RevealSection className="mx-auto max-w-[1400px] px-6 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <h1 className="text-2xl font-medium text-savoia-charcoal md:text-3xl">Servicios</h1>
        <div className="mt-10">
          <ServiceGrid services={SERVICIOS} />
        </div>
      </RevealSection>
    </main>
  );
}
