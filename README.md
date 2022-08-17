# Vue3 + Vite

模板是自己搭建，所以不一定适合您的项目规划，下载之后根据自己的需要进行功能的分离和拆解，这里不做万能模板的处理，项目会持续更新
vue3的版本加上目前的vite 构建 UI库使用的是antdv的最新版本，组件是全局引入，项目如果需要按需引入的自行处理配置文件即可！

##### 代码提交说明
- feat  新功能
- fix 修复bug
- docs 更新文档
- style 更新代码格式
- refactot 重构 不进行bug修复 也不进行新功能添加
- perf 性能优化
- test 增加测试
- chore 构建过程或者是辅助工具的变动
- revert 代码回退
- build 项目打包
### 该项目创建过程

#### 安装vite
##### 使用yarn安装vite，创建vue项目
```shell
yarn create vite
```
> 然后直接一步一步的按照提示操作即可
##### 使用快捷方式进行创建一个vue项目
> 该项目不是这个方式创建的，这里只是提供一种方便快捷的方式
```shell
yarn create vite my-vue-app --template vue
```
> 将my-vue-app 改为自己的项目名字 直接回车就可以创建好了一个vue项目
#### 安装sass node-sass sass-loader
```shell
npm install --save-dev sass-loader node-sass sass
```
#### 全局配置sass
- vite.config.js文件
```js
export default defineConfig({
  plugins: [vue()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalDate : `@import "./src/assets/css/global.scss"` // 这是我本地创建的一个全局的scss文件，你们请自行创建
      }
    }
  }
})
```
#### 创建路由文件
```js
import { createRouter, createWebHashHistory } from 'vue-router' // 引入创建路由的基本模块
import reports from './report' // 引入报表模块的路由文件
import roles from './roles' //引入角色模块的路由文件
const routes_index = [
    {
        path: '/',
        name: 'main',
        component: () => import('../view/main/index.vue') // 使用懒加载的方式进行引入文件
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login/index.vue')
    }
]
//将所有的路由文件合并
const routes = routes_index.concat(reports, roles)
//创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
//设置全局守卫
router.beforeEach((to, from, next) => {
    console.log(to) //到哪儿去
    console.log(from) //从哪儿来
    next() //继续执行
})
//导致路由配置
export default router
```
#### 配置路由文件
- main.js文件
```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/routers/index.js'
const app = createApp(App)
//进行错误和警告拦截
app.config.errorHandler = (err,vm,info)=>{
    console.error(err)
    console.log(vm)
    console.error(info)
}
// 进行挂载路由文件
app.use(router)
app.mount("#app")
```
#### 安装ant-design-Vue UI库
```shell
npm i --save ant-design-vue
```
#### 配置antdv-UI库
- main.js文件
```js
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
app.use(antd)
```
#### 添加本地调试网络地址
```json
 "scripts": {
    "dev": "vite --host 192.168.31.181",
    "build": "vite build",
    "preview": "vite preview"
  },
```
> use --host 192.168.31.181 暴露出去可以供局域网内访问的地址
