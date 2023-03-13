/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  serverRuntimeConfig: {
    // 10 segundos de timeout para API
    apiTimeout: 10000,
  },
}

module.exports = nextConfig