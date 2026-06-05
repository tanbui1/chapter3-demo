import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  base: '/chapter3-demo/',
  plugins: [react()],
}));
