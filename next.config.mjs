import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["planetofhotels.com","siliconvalleygazette.com","placehold.co",'www.pngmart.com','images.unsplash.com','cdn.pixabay.com', 'media.istockphoto.com','images.ctfassets.net',"cruip-tutorials.vercel.app",'wallpapercave.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },{
        protocol:"https",
        hostname:"wallpapercave.com"
      }
    ],
  },
  experimental: {
    taint: true,
  },
  // ...other config settings
};

export default withNextIntl(nextConfig);
 