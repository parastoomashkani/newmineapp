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
    domains: ['fa.wikipedia.org'],
  },
  env: {
BaseUrl:'https://zarkav.liara.run/api',
  }
}