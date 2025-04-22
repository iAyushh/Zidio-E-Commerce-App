import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: 'localhost',
    strictPort: true,
    watch: {
      ignored: ['**/public/auth/**'], // Keep this for the watcher
    },
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        // Add other entry points for your main app if needed
      },
    },
  },
  optimizeDeps: {
    exclude: [
      '/auth/index.html',
      '/Zidio-Internship/src/*', // Exclude the entire source directory of the built app
    ],
  },
});