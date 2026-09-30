// Next.js App Router convention (app/robots.js) — auto-served at /robots.txt.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.hotelessavoia.com/sitemap.xml',
  };
}
