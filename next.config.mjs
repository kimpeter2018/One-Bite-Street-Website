/*
/** @type {import('next').NextConfig} */

const nextConfig = {
  // Enable static exports if deploying to static hosting
  // output: 'export',

  images: {
    // Configure image optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com", // Replace with your image CDN domain
      },
    ],
    // If using static export, you'll need to use the 'unoptimized' option
    // unoptimized: true,
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Add environment variables if needed
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "https://onebitestr.com",
    // Add Supabase keys when ready
    // NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    // NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
};

export default nextConfig;
