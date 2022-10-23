import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import SVGR from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), SVGR()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
  server: {
    port: 3000,
  },
});
