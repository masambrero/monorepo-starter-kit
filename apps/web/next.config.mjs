import withBundleAnalyzer from '@next/bundle-analyzer';
import { envConfig } from '@monorepo-starter/common';
import packageConfig from './package.json' assert { type: 'json' };

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    turbo: {
      resolveAlias: {
        '#*': 'src/*',
      },
    },
    optimizePackageImports: ['@monorepo-starter/common'],
  },
  env: {
    PACKAGE_VERSION: packageConfig.version,
  },
};

export default function (phase, defaultConfig) {
  const plugins = [bundleAnalyzer];

  const config = plugins.reduce(
    (acc, plugin) => {
      const update = plugin(acc);
      return typeof update === 'function'
        ? update(phase, defaultConfig)
        : update;
    },
    { ...nextConfig }
  );

  return config;
}
