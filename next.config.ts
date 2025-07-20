import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* conf'ig options here */
  typescript : {
    ignoreBuildErrors  :true 
  },
  images : {
    remotePatterns : [
          {
            hostname : 'img.clerk.com'
          }
    ]
  }
};

export default nextConfig;
