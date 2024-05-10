import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import renderer from 'vite-plugin-electron-renderer';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;',
      },
    },
  },
  define: {
    'process.env': process.env
  },
  root: 'app/renderer',
  plugins: [react(), renderer()],
});
