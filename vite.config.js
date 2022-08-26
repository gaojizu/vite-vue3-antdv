/*
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-23 13:06:35
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  // 静态资源服务的文件夹
  publicDir: './assets',
  server: {
    port: 8080, //更改默认端口5173
    open: false | 'google', // 是否自动开启浏览器
    proxy: {
      '/api': {
        target: 'https://v-api.2345.com/shortVideo',//这是跨域的原本地址
        changeOrigin: true,//是否开启跨域
        // rewrite: api => api.replace(/^\/api/, '') // 将真正的请求使用正则替换掉api因为url本身就不存在api 这里相当于重写了路径
      }
    }
  },
  preview: {
    port: 9000,
    strictPort: true,//不可以替换别的端口
  },
  // 全局css 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/global.scss";'
      }
    }
  },
  plugins: [vue()],
  base: './' //  避免打包之后出现文件找不到资源 使用live Server打开
})


