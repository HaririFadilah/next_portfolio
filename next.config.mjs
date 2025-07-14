import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = true; // Hanya nonaktifkan cache saat development
    }
    return config;
  },
};

export default withMDX(nextConfig);
