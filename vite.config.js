import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import alias from 'vite-plugin-alias';

export default defineConfig({
  plugins: [
    vue(),
    alias({
      entries: [
        { find: '@', replacement: resolve(__dirname, 'src') },
      ],
    }),
  ],
});
