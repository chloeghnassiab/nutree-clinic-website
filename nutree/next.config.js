/** @type {import('next').NextConfig} */
// STATIC_EXPORT=true builds a plain HTML site for static hosting (Hostinger Premium).
// Server-only features (chat, API routes, admin, middleware) are removed by
// scripts/build-static.sh before that build.
const isStatic = process.env.STATIC_EXPORT === 'true'

const nextConfig = {
  ...(isStatic && { output: 'export', trailingSlash: true }),
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
