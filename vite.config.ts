import { defineConfig } from 'vite'

import React from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import SVGR from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    Unocss(),
    Pages({
      dirs: 'src/pages',
      exclude: ['**/components/*.tsx'],
    }),
    AutoImport({
      include: [/\.[tj]sx?$/],
      dts: './src/auto-imports.d.ts',
      defaultExportByFilename: true,
      dirs: [
        './src',
        './src/hooks/**',
        './src/state/**',
        './src/layouts/**',
        './src/components/**',
        './src/pages/**/components/**',
      ],
      imports: [
        'react',
        'react-router-dom',
        {
          'react': ['Suspense', 'Fragment', 'StrictMode'],
          'react-dom/client': ['createRoot'],
          'react-router-dom': [['BrowserRouter', 'Router']],
          '@iconify/react': ['Icon'],
        }
      ],
    }),
    SVGR(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: false },
    }),
  ],
})
