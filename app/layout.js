import Script from 'next/script';
import './globals.css';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { GA_MEASUREMENT_ID, GSC_VERIFICATION } from '@/lib/analytics';

export const metadata = {
  title: { default: 'Hoteles Savoia', template: '%s | Hoteles Savoia' },
  description:
    'Hoteles Savoia: hotel frente al mar en Ostende (Pinamar), cabañas entre los pinos en Puerto Hamlet (Cariló), y hoteles en Mendoza y San Bernardo. Habitaciones, pileta, gastronomía y salones para grupos y eventos.',
  metadataBase: new URL('https://www.hotelessavoia.com'),
  openGraph: { siteName: 'Hoteles Savoia', locale: 'es_AR', type: 'website' },
  twitter: { card: 'summary_large_image' },
  ...(GSC_VERIFICATION && { verification: { google: GSC_VERIFICATION } }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans text-savoia-charcoal">
        {children}
        <WhatsAppFloat />
        {GA_MEASUREMENT_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
