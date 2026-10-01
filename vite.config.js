import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base './' so the build works on GitHub Pages under /Portfolio/ without config changes.
// Tailwind is scoped to the Green Eye and Rewake case studies; see src/styles/greeneye.css + rewake.css.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
});
