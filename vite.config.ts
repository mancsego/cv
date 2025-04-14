import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import path from 'path'

export default defineConfig({
  base: '/cv/',
  plugins: [
    VitePWA({
      devOptions: {
        enabled: false
      },
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /.*firebasedatabase\.app\/(en|de|hu)\.json/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'cms-cache',
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 7
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /.*\.([jt]s[x]?|css)/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'asset-cache',
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 7
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /.*\.(jp[e]g|svg|png|ico)/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      manifest: {
        name: 'Istvan Abraham | DevOps engineer',
        short_name: 'Istvan Abraham',
        description:
          'A professional software engineer with over 4 years of experience. You can learn more about me hereby.',
        theme_color: '#242424',
        display: 'standalone',
        icons: [
          {
            src: 'icons/icon-48x48.webp',
            sizes: '48x48',
            type: 'image/webp'
          },
          {
            src: 'icons/icon-72x72.webp',
            sizes: '72x72',
            type: 'image/webp'
          },
          {
            src: 'icons/icon-96x96.webp',
            sizes: '96x96',
            type: 'image/webp'
          },
          {
            src: 'icons/icon-128x128.webp',
            sizes: '128x128',
            type: 'image/webp'
          },
          {
            src: 'icons/icon-144x144.webp',
            sizes: '144x144',
            type: 'image/webp'
          },
          {
            src: 'icons/icon-152x152.webp',
            sizes: '152x152',
            type: 'image/webp'
          },
          {
            src: 'icons/icon-192x192.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: 'icons/icon-256x256.webp',
            sizes: '256x256',
            type: 'image/webp'
          },
          {
            src: 'icons/icon-384x384.webp',
            sizes: '384x384',
            type: 'image/webp'
          },
          {
            src: 'icons/icon-512x512.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      }
    }),
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
