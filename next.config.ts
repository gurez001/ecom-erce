// next.config.js or next.config.ts (recommended if using TypeScript)

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['us', 'fr', 'nl-NL'],
    defaultLocale: 'us',
  },
  // trailingSlash: true,
  // Add any other config options here
};

export default nextConfig;
