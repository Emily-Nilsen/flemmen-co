/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/medarbeidere/stine-kalkvik-stenberg',
        destination: '/medarbeidere/stine-stenberg-slyngstadli',
        permanent: true,
      },
      {
        source: '/en/medarbeidere/stine-kalkvik-stenberg',
        destination: '/en/medarbeidere/stine-stenberg-slyngstadli',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
