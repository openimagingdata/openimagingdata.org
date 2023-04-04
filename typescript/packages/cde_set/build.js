const { build } = require('esbuild');

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'neutral',
  target: 'es2020',
  outdir: 'dist',
  sourcemap: true,
  minify: true,
  format: 'cjs', // Change this to 'esm' for ES modules or 'iife' for browsers
}).catch(() => process.exit(1));
