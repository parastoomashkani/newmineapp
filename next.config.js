/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        return config
      },
}

// module.exports = nextConfig
// module.exports = {
  images: {
    domains: ['https://randomuser.me/','localhost']
  }
// };
module.exports = {
  images: {
    domains: ['randomuser.me'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:3000',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
  env: {
BaseUrl:'https://zarkav.liara.run/api',
  }
}