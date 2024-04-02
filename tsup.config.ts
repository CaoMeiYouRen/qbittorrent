import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  minify: false,
  external: ['cookie', 'node-fetch-native', 'ofetch', 'ufo', 'crypto-hash'],
  noExternal: ['@ctrl/magnet-link', '@ctrl/shared-torrent', '@ctrl/torrent-file', 'uint8array-extras'], // /(.*)/
})
