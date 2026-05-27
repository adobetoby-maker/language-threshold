import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/*.png', 'word-cache.json'],
      manifest: false, // we use our own /public/manifest.json
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        globIgnores: ['word-cache.json'],
        runtimeCaching: [
          {
            urlPattern: /\/src\/data\/book\/.+\.json$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'book-chapters',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 90 },
            },
          },
          {
            urlPattern: /\/word-cache\.json$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'word-cache',
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 7 },
            },
          },
        ],
      },
    }),
  ],
  server: { port: 3000 },
})
