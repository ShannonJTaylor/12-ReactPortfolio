import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  ssr: false,
  plugins: [react()],
  server: {
    open: true,
    port: 5173,
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
  },
})
