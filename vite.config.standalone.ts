import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'app/published/index.ts',
      name: 'Next',
      fileName: (format) => `next.${format}.js`,
      formats: ['umd'],
    },
    sourcemap: true,
    target: 'es2017',
    minify: false,
  },
  plugins: [
    components({}),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (key) => key.startsWith('next-'),
        }
      }
    }),
  ]
});
