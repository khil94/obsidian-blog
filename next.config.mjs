import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,

      use: ["@svgr/webpack"],
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

export default withContentlayer(nextConfig);
