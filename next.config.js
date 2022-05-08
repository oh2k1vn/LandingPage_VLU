/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['vlset.vlu.edu.vn', 'uniworld.io', 'www.vanlanguni.edu.vn'],
  },
}

module.exports = nextConfig
