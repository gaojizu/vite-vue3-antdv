import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3030, //更改默认端口5173
    open: false | 'google', // 是否自动开启浏览器
    proxy: {
      './path': {
        target: 'https://urlyouself.com',//这是跨域的原本地址
        changeOrigin: true,//是否开启跨域
        rewrite: path => path.replace(/^\/path/, '') // 将真正的请求使用正则替换掉path 因为url本身就不存在path 这里相当于重写了路径
      }
    }
  },
  preview: {
    port: 9000,
    strictPort: true,//不可以替换别的端口
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalDate: `@import "./src/assets/css/global.scss"`
      }
    }
  }
})
