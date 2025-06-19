import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AlphaMole-v2/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})
