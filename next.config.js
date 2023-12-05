/** @type {import('next').NextConfig} */
const { CONSOLE_URL } = process.env

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/serverless-ai",
        destination: "/serverless-gpu",
        permanent: true,
      },
      {
        source: "/gsc",
        destination: "/console/gpu-secure-cloud",
        permanent: true,
      },
      {
        source: "/my-pods",
        destination: "/console/pods",
        permanent: true,
      },
      {
        source: "/gpu-secure-cloud",
        destination: "/console/gpu-secure-cloud",
        permanent: true,
      },
      {
        source: "/gpu-browse",
        destination: "/console/gpu-browse",
        permanent: true,
      },
      {
        source: "/host/machines",
        destination: "/console/host/machines",
        permanent: true,
      },
      {
        source: "/client/payment-success",
        destination: "/console/client/payment-success",
        permanent: true,
      },
      {
        source: "/client/crypto-payment-success",
        destination: "/console/client/crypto-payment-success",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/docs/faq",
        permanent: true,
      },
      {
        source: "/recipes",
        destination: "/blog/tag/recipes",
        permanent: true,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      }
    ]
  },
  reactStrictMode: true,
  images: { domains: ["imagedelivery.net"] },
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer(nextConfig)
