import type { NextConfig } from 'next'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const basePath = process.env.BASEPATH ?? ''

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  ...(isGitHubPages
    ? {
        output: 'export',
        trailingSlash: true,
        images: {
          unoptimized: true
        }
      }
    : {
        redirects: async () => [
          {
            source: '/',
            destination: '/dashboard/orders',
            permanent: true
          },
          {
            source: '/apps/users',
            destination: '/apps/users/list',
            permanent: true
          }
        ]
      })
}

export default nextConfig
