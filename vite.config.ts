import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host:'0.0.0.0',
    port:7529,
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://localhost:7529',
        changeOrigin: true,
        ///^\/api/
        //rewrite: (path) => path.replace("^/api", '')
      }
    }
  }
})