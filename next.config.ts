/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images6.alphacoders.com",
      },
      {
        protocol: "https",
        hostname: "wallpaperaccess.com",
      },
      {
        protocol: "https",
        hostname: "www.pngwing.com",
      },
      {
        protocol: "http",
        hostname: "wonderfulengineering.com",
      },
      {
        protocol: "https",
        hostname: "wallpapers.com",
      },
      {
        protocol: "https",
        hostname: "motionbgs.com",
      },
      {
        protocol: "https",
        hostname: "getwallpapers.com",
      },
      {
        protocol: "https",
        hostname: "images.hdqwalls.com",
      },
      {
        protocol: "https",
        hostname: "www.hdwallpapers.in",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
      },
      {
        protocol: "https",
        hostname: "images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com",
      },
      {
        protocol: "https",
        hostname: "wallpaperbat.com",
      },
      {
        protocol: "https",
        hostname: "images.wallpapersden.com",
      },
      {
        protocol: "https",
        hostname: "wallpaperaccess.com",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
      {
        protocol: "https",
        hostname: "images7.alphacoders.com",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
      },
      {
        protocol: "http",
        hostname: "vignette1.wikia.nocookie.net",
      },
    ],
  },
};

module.exports = nextConfig;
