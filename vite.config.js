import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  ssr: false,
  plugins: [react()],
  assetsInclude: ["**/*.jpg","**/*.png","**/*.jpeg","**/*.gif"],
  server: {
    open: true,
    port: 5173,
    strictPort: true,  

  },
  build: {
    outDir: 'dist',
  },
})
