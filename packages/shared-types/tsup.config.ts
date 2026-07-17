import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    // IMPORTANT: Mark zod as external
    external: ['zod'],
    // Ensure proper module resolution
    platform: 'neutral',
    target: 'es2020',

});