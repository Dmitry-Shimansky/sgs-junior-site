import type { NextConfig } from 'next'

// Set by actions/configure-pages in .github/workflows/deploy.yml (e.g. "/sgs-junior-site").
const basePath = process.env.PAGES_BASE_PATH

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath ?? '' },
}

export default nextConfig
