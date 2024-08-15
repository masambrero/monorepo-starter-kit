import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options): Options => {
  return {
    clean: !options.watch,
    entry: ['src/index.ts', 'src/components/**/*.{ts,tsx}'],
    format: ['esm'],
    target: 'es2022',
    splitting: true,
    external: ['react', 'react-dom'],
    loader: {
      '.css': 'local-css',
    },
    onSuccess: 'tsc --emitDeclarationOnly --declaration || true',
    banner: {
      js: '"use client"',
    },
    silent: options.watch,
    ...options,
  };
});
