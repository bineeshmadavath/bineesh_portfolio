import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the build works on GitHub Pages under /Portfolio/ without config changes.
export default defineConfig({
  plugins: [react()],
  base: './',
});
