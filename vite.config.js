import { defineConfig } from 'vite'
import { copy } from 'vite-plugin-copy';
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import sass from 'sass';

export default defineConfig({
  base: "/portfolio",
  plugins: [
    react(),
    svgr(),
    copy({
      targets: [{ src: 'node_modules/pdfjs-dist/build/pdf.worker.min.js', dest: 'public/static/js' }],
      hook: 'writeBundle', // Trigger the copy operation during the build process
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
  },
})
