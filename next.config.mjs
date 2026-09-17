/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
