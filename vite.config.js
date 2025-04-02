import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei'],
    include: ['react-parallax-tilt'],
  },

  
    rollupOptions: {
      external: ['prop-types'],
    },
    build: {
      outDir: 'dist',  // Must match Netlify's `publish`
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`
        }
      }
    },
  
})
