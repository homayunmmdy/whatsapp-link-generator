import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Your existing Next.js configuration
  reactStrictMode: true,
  // Other configurations...
};

export default withNextIntl(nextConfig);