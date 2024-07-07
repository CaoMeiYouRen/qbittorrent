import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  minify: false,
  external: ['cookie', 'node-fetch-native', 'ofetch', 'ufo', '@cao-mei-you-ren/crypto-hash', '@cao-mei-you-ren/torrent-file'],
  noExternal: ['@ctrl/magnet-link', '@ctrl/shared-torrent', 'uint8array-extras'], // /(.*)/
})
