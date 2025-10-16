/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  // Ensure proper error handling
  onError: (err) => {
    console.error('Next.js Error:', err)
  },
  // Add custom error handling in development
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      // Ensure proper source maps in development
      config.devtool = 'source-map'
    }
    return config
  }
}