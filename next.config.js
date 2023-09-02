/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stepanusriodefa.my.id",
      },
    ],
  },
  experimental:{
    serverActions:true
  }
};

module.exports = nextConfig;
