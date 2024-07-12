/** @type {import('next').NextConfig} */
const { CONSOLE_URL } = process.env;

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self'",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/endpoints",
        destination:
          "https://blog.runpod.io/refocusing-core-strengths-shift-managed-ai-apis-serverless-flexibility/",
        permanent: true,
      },
      {
        source: "/gpu-instance/pricing",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/serverless-ai",
        destination: "/serverless-gpu",
        permanent: true,
      },
      {
        source: "/gsc",
        destination: "/console/gpu-cloud",
        permanent: true,
      },
      {
        source: "/my-pods",
        destination: "/console/pods",
        permanent: true,
      },
      {
        source: "/gpu-secure-cloud",
        destination: "/console/gpu-cloud",
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
      },
      {
        permanent: true,
        basePath: false,
        source: "/blog/:slug",
        destination: "https://blog.runpod.io/:slug",
      },
      {
        permanent: true,
        basePath: false,
        source: "/blog",
        destination: "https://blog.runpod.io",
      },
      {
        permanent: true,
        basePath: false,
        source: "/contact",
        destination: "https://contact.runpod.io",
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/console",
        destination: `${CONSOLE_URL}/console`,
      },
      {
        source: "/console/:path*",
        destination: `${CONSOLE_URL}/console/:path*`,
      },
    ];
  },
  reactStrictMode: true,
  images: { domains: ["imagedelivery.net"] },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
