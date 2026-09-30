// Structured data (schema.org Hotel) so Google can show address, phone and
// rating widgets directly in search results instead of just a blue link.
// One of these renders on each property's own home page. Every field here
// is real data already used elsewhere on the site (lib/hotelContacts.js) —
// never invented, since fabricated structured data risks a manual penalty.
const HOTELS = {
  ostende: {
    name: 'Hotel Savoia Ostende',
    description: 'Hotel frente al mar en Ostende, Pinamar, con Pileta & Bar Naples y gastronomía con desayuno buffet y cenas temáticas.',
    url: 'https://www.hotelessavoia.com/ostende',
    image: 'https://www.hotelessavoia.com/img/home/portada-ostende-cartel.jpg',
    telephone: '+54 2254 496600',
    streetAddress: 'Biarritz 184 e/ Defensa y Progreso',
    addressLocality: 'Ostende, Pinamar',
    addressRegion: 'Buenos Aires',
  },
  'puerto-hamlet': {
    name: 'Puerto Hamlet',
    description: 'Cabañas entre los pinos en Cariló, a metros de la playa, con pileta climatizada, gimnasio y Club de chicos.',
    url: 'https://www.hotelessavoia.com/puerto-hamlet',
    image: 'https://www.hotelessavoia.com/img/home/puerto-hamlet-portada.jpg',
    telephone: '+54 2254 571623',
    streetAddress: 'Cerezo 104',
    addressLocality: 'Cariló, Pinamar',
    addressRegion: 'Buenos Aires',
  },
  mendoza: {
    name: 'Hotel Savoia Mendoza',
    description: 'Hotel Savoia Mendoza, rodeado de naturaleza, con pileta olímpica exterior, instalaciones deportivas y salones para eventos.',
    url: 'https://www.hotelessavoia.com/mendoza',
    image: 'https://www.hotelessavoia.com/img/hoteles/hotel-mendoza.jpeg',
    telephone: '+54 261 4510959',
    streetAddress: 'Avellaneda 3653, Bermejo',
    addressLocality: 'Guaymallén',
    addressRegion: 'Mendoza',
  },
  'san-bernardo': {
    name: 'Hotel Savoia San Bernardo',
    description: 'Hotel Savoia San Bernardo: habitaciones, gastronomía y atención personalizada a metros de la playa.',
    url: 'https://www.hotelessavoia.com/san-bernardo',
    image: 'https://www.hotelessavoia.com/img/hoteles/san-bernardo.jpeg',
    telephone: '+54 2257 460211',
    streetAddress: 'Strobel 2099',
    addressLocality: 'San Bernardo',
    addressRegion: 'Buenos Aires',
  },
};

export default function HotelJsonLd({ hotel }) {
  const h = HOTELS[hotel];
  if (!h) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: h.name,
    description: h.description,
    url: h.url,
    image: h.image,
    telephone: h.telephone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: h.streetAddress,
      addressLocality: h.addressLocality,
      addressRegion: h.addressRegion,
      addressCountry: 'AR',
    },
  };

  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
