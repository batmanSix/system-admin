import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src'),
      'comps': resolve('./src/components')
    },
    extensions: ['.js','.ts','.tsx','.jsx',]
  },
  build: { 
    minify: "terser", 
    terserOptions: { 
      compress: { 
        drop_console: true, 
        drop_debugger: true 
      } 
    } 
  },
})
