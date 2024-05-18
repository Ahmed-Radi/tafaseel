import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  async rewrites() {
    // The rewrites function is used when you want to make the file name different from the path
    return [
      {
        source: '/user/sent-text-message', // full path
        destination: '/user/sentTextMessage', // full file name
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