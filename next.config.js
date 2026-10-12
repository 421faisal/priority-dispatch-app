/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Merge duplicate blog posts with 301 redirects
      {
        source: '/blog/ai-machine-learning-dispatching',
        destination: '/blog/ai-dispatching-co-pilot-model',
        permanent: true,
      },
      {
        source: '/blog/autonomous-trucks-2026',
        destination: '/blog/impact-of-autonomous-trucking-2026',
        permanent: true,
      },
      {
        source: '/blog/evolution-of-logistics',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
