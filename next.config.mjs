// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'
const REPO = isProd ? 'blink-auto-detailing' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // enables `next export`
  images: { unoptimized: true }, // GH Pages cannot run the optimizer
  trailingSlash: true,           // safer on static hosts
  basePath: REPO ? `/${REPO}` : '',
  assetPrefix: REPO ? `/${REPO}/` : '',
}
export default nextConfig
