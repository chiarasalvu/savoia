/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Trimmed from the defaults: nothing on the site needs the 2048/3840
    // variants, and every extra width is another cold-cache transform.
    deviceSizes: [360, 420, 640, 828, 1080, 1280, 1600, 1920],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      // /nosotros, /hoteles and /contacto were folded into the landing's own
      // sections when Home/Nosotros/Hoteles/Contacto were consolidated into
      // one page — redirect old links to the matching anchor instead of
      // 404ing.
      {
        source: '/nosotros',
        destination: '/#historia',
        permanent: true,
      },
      {
        source: '/hoteles',
        destination: '/#hoteles',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/#contacto',
        permanent: true,
      },
      // The Hamlet microsite was previewed at /hamlet before this redesign
      // moved it to /puerto-hamlet — keep old shared links working.
      {
        source: '/hamlet',
        destination: '/puerto-hamlet',
        permanent: true,
      },
      {
        source: '/hamlet/:path*',
        destination: '/puerto-hamlet/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.puertohamlet.com',
          },
        ],
        destination: 'https://www.hotelessavoia.com/puerto-hamlet',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.puertohamlet.com.ar',
          },
        ],
        destination: 'https://www.hotelessavoia.com/puerto-hamlet',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
