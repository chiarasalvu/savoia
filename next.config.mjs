/** @type {import('next').NextConfig} */
const nextConfig = {
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
