import { defineConfig, type Options } from 'tsup';
import Icons from 'unplugin-icons/esbuild';

export default defineConfig((options) => {
  const commonOptions: Options = {
    clean: !options.watch,
    external: ['react', 'react-dom'],
    splitting: true,
    loader: {
      '.css': 'local-css',
    },
    env: process.env as Record<string, string>,
    esbuildPlugins: [
      Icons({ compiler: 'jsx', jsx: 'react', autoInstall: true }),
    ],
    silent: options.watch,
    ...options,
  };

  return [
    {
      ...commonOptions,
      entry: ['src/index.ts', 'src/**/*.{ts,tsx}', '!src/**/*.test.ts'],
      onSuccess: 'tsc --emitDeclarationOnly --declaration || true',
      format: ['esm'],
    },
    {
      ...commonOptions,
      entry: [
        'src/constants/envConfig.ts',
        ...(options.watch ? [] : ['src/constants/envConfig.ts}']),
      ],
      format: ['cjs'],
    },
  ];
});
