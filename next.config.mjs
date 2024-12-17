/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'plus.unsplash.com'
    ]
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': './app/components',
      '@/lib': './lib',
    }
    return config
  },
  async devServer(server) {
    server.on('listening', () => {
      server.address().port = 3000
    })
  }
}

export default nextConfig
