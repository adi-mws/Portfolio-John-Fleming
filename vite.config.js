import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: '/Portfolio-John-Fleming/',
    cssCodeSplit: false, // Disable CSS code splitting (if necessary)
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]', // Keep original file names for assets
      },
    },
  },
})

