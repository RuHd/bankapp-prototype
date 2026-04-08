import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.15.13:3000', '192.168.15.10:3000', 'localhost:3000'],
  /* config options here */
};

export default nextConfig;
