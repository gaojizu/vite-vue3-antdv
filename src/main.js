import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/routers/index.js'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 进行挂载路由文件
const app = createApp(App)
//进行错误和警告拦截
app.config.errorHandler = (err,vm,info)=>{
    console.error(err)
    console.log(vm)
    console.error(info)
}
app.use(antd)
app.use(router)
app.mount("#app")
