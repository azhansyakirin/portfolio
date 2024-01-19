import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import sass from 'sass';

export default defineConfig({
  base: "/portfolio",
  plugins: [
    react(),
    svgr(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
