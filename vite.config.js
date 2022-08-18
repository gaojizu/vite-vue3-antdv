import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const isProduction = false;
export default defineConfig({
  // 在生产中服务时的基本公共路径
  base: isProduction ? './' : '',
  // 配置中指明将会把 serve 和 build 时的模式都覆盖掉,serve 时默认 'development'，build 时默认 'production'
  mode: 'development',
  // 在开发时会被定义为全局变量，而在构建时则是静态替换
  define: '',
  // 静态资源服务的文件夹
  publicDir: 'assets',
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
  // 全局css 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/global.scss";'
      }
    }
  },
  plugins: [vue()],

})
