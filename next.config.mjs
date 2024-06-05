import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "./src");
    return config; // Always return the modified config
  },
  async rewrites() {
    return [
      {
        source: '/user/sent-text-message',
        destination: '/user/sentTextMessage',
      },
      {
        source: '/user/schedule-message',
        destination: '/user/scheduleMessage',
      },
      {
        source: '/user/auth-key',
        destination: '/user/authKey',
      },
      {
        source: '/not-found',
        destination: '/notFound',
      },
    ];
  },
};

export default nextConfig;