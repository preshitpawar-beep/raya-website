/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.legacyimprint.co.uk',
      },
    ],
  },
};

export default nextConfig;
