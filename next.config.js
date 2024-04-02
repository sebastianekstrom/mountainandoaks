/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    dirs: ["__tests__", "src", "tooling"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/recipes/:path*",
        destination: "/food-and-drinks/:path*",
        permanent: true,
      },
      {
        source: "/food-and-drinks/sebbys",
        destination: "/pizza/sebbys",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
