import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  sourcemap: true,
  format: ['cjs', 'esm'],
  target: 'es6',
  clean: true,
  dts: true,
  platform: 'browser',
  legacyOutput: true,
})
