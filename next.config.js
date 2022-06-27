/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config) {
    config.resolve = {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@contexts': path.resolve(__dirname, 'src/contexts'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
