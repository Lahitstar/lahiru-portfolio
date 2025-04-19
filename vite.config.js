import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/lahiru-portfolio",
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei', 'react-parallax-tilt'],
  },

  server: {
    fs: {
      strict: false // Allows serving files from outside project root if needed
    }
  },

  
    rollupOptions: {
      external: ['prop-types'],
    },
    // build: {
    //   outDir: 'dist',  // Must match Netlify's `publish`
    //   emptyOutDir: true,
    //   rollupOptions: {
    //     output: {
    //       entryFileNames: `[name].js`,
    //       chunkFileNames: `[name].js`,
    //       assetFileNames: `[name].[ext]`
    //     }
    //   }
    // },
  
})
