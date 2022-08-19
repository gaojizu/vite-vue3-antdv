import { createApp } from 'vue'
import './style.css'
// import '../src/assets/css/global.scss'
import App from './App.vue'
import router from '../src/routers/index.js'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 进行挂载路由文件
const app = createApp(App)
//进行错误和警告拦截
app.config.errorHandler = (err, vm, info) => {
    console.error(err)
    console.log(vm)
    console.error(info)
}
// 进行警告信息捕捉
app.config.warnHandler = (warn, vm, info) => {
    console.warn(warn)
    console.log(vm)
    console.error(info)
}
//配置全局的请求封装
app.use(antd)
app.use(router)
app.mount("#app")
