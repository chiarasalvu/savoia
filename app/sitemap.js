const BASE_URL = 'https://www.hotelessavoia.com';

const ROUTES = [
  '',
  '/ostende',
  '/ostende/habitaciones',
  '/ostende/categoria-superior',
  '/ostende/categoria-ejecutiva',
  '/ostende/categoria-standard',
  '/ostende/categoria-familiar',
  '/ostende/servicios',
  '/ostende/pileta',
  '/ostende/gastronomia-savoia',
  '/ostende/bar-woodstock',
  '/ostende/bar-saintjean',
  '/ostende/miniclub',
  '/ostende/gym-sauna',
  '/ostende/grupos-eventos',
  '/ostende/contacto',
  '/puerto-hamlet',
  '/puerto-hamlet/cabanas',
  '/puerto-hamlet/cabanas/monoambiente',
  '/puerto-hamlet/cabanas/monoambiente-full',
  '/puerto-hamlet/cabanas/dos-ambientes',
  '/puerto-hamlet/cabanas/tres-ambientes',
  '/puerto-hamlet/servicios',
  '/puerto-hamlet/sustentabilidad',
  '/puerto-hamlet/grupos-eventos',
  '/puerto-hamlet/contacto',
  '/mendoza',
  '/mendoza/habitaciones',
  '/mendoza/servicios',
  '/mendoza/pileta',
  '/mendoza/gastronomia',
  '/mendoza/deporte-naturaleza',
  '/mendoza/salones-de-eventos',
  '/mendoza/salon-de-juegos',
  '/mendoza/grupos-eventos',
  '/mendoza/contacto',
  '/san-bernardo',
  '/san-bernardo/a-metros-de-la-playa',
  '/san-bernardo/gastronomia',
  '/san-bernardo/habitaciones',
  '/san-bernardo/servicios',
  '/san-bernardo/grupos-eventos',
  '/san-bernardo/contacto',
];

// Next.js App Router convention (app/sitemap.js) — auto-served at /sitemap.xml.
export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.split('/').length === 2 ? 0.8 : 0.6,
  }));
}
