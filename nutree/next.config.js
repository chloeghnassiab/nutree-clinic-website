/** @type {import('next').NextConfig} */
// STATIC_EXPORT=true builds a plain HTML site for static hosting (Hostinger Premium).
// Server-only features (chat, API routes, admin, middleware) are removed by
// scripts/build-static.sh before that build.
const isStatic = process.env.STATIC_EXPORT === 'true'

// Old URLs that still get Google impressions (from Search Console) or are
// linked from elsewhere, pointed at their current page.
const legacyRedirects = [
  ['/blog/do-glp-1-medications-reduce-inflammation-the-research-behind-semaglutide-tirzepatide-and-metabolic-healthglp-1-medications-reduce-inflammation', '/blog/glp-1-medications-reduce-inflammation'],
  ['/blog/glp-1-and-lipedema', '/blog/glp-1-and-lipedema-what-science-says'],
  ['/blog/glp-1-and-lipedema-what-science-says-about-semaglutide', '/blog/glp-1-and-lipedema-what-science-says'],
  ['/blog/glp-1-and-lipedema-what-science-says-about-semaglutide-tirzepatide', '/blog/glp-1-and-lipedema-what-science-says'],
  ['/blog/is-nad-therapy-for-energy-worth-it', '/blog/nad-therapy-for-energy'],
  ['/blog/how-much-protein-for-weight-loss', '/blog/protecting-your-muscle-while-you-lose-weight'],
  ['/glp1-microdosing/:path*', '/glp-1microdosing/:path*'],
  ['/glp-1microdosing/florida/ellul', '/glp-1microdosing/florida'],
  ['/ozempic', '/glp-1'],
  ['/sweepstake-march-2026', '/'],
]

const nextConfig = {
  ...(isStatic && { output: 'export', trailingSlash: true }),
  async redirects() {
    return [
      // Serve everything from www, matching the live site's canonical URLs
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'nutreeclinic.com' }],
        destination: 'https://www.nutreeclinic.com/:path*',
        permanent: true,
      },
      ...legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
    ]
  },
  images: {
    unoptimized: isStatic,
    remotePatterns: [
      { protocol: 'https', hostname: 'umsousercontent.com' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'static.legitscript.com' },
    ],
  },
}

module.exports = nextConfig
