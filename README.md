# Vue3 + Vite

模板是自己搭建，所以不一定适合您的项目规划，下载之后根据自己的需要进行功能的分离和拆解，这里不做万能模板的处理，项目会持续更新
vue3 的版本加上目前的 vite 构建 UI 库使用的是 antdv 的最新版本，组件是全局引入，项目如果需要按需引入的自行处理配置文件即可！

##### 代码提交说明

- feat 新功能
- fix 修复 bug
- docs 更新文档
- style 更新代码格式
- refactot 重构 不进行 bug 修复 也不进行新功能添加
- perf 性能优化
- test 增加测试
- chore 构建过程或者是辅助工具的变动
- revert 代码回退
- build 项目打包

### 该项目创建过程

#### 安装 vite

##### 使用 yarn 安装 vite，创建 vue 项目

```shell
yarn create vite
```

> 然后直接一步一步的按照提示操作即可

##### 使用快捷方式进行创建一个 vue 项目

> 该项目不是这个方式创建的，这里只是提供一种方便快捷的方式

```shell
yarn create vite my-vue-app --template vue
```

> 将 my-vue-app 改为自己的项目名字 直接回车就可以创建好了一个 vue 项目

#### 安装 sass node-sass sass-loader

```shell
npm install --save-dev sass-loader node-sass sass
```

#### 全局配置 sass

- vite.config.js 文件

```js
export default defineConfig({
  plugins: [vue()],
  // 全局css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/global.scss";', // 此处最后的分号不要忘记，可能会出错
      },
    },
  },
});
```

#### 创建路由文件

```js
import { createRouter, createWebHashHistory } from "vue-router"; // 引入创建路由的基本模块
import reports from "./report"; // 引入报表模块的路由文件
import roles from "./roles"; //引入角色模块的路由文件
const routes_index = [
  {
    path: "/",
    name: "main",
    component: () => import("../view/main/index.vue"), // 使用懒加载的方式进行引入文件
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../view/login/index.vue"),
  },
];
//将所有的路由文件合并
const routes = routes_index.concat(reports, roles);
//创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
//设置全局守卫
router.beforeEach((to, from, next) => {
  console.log(to); //到哪儿去
  console.log(from); //从哪儿来
  next(); //继续执行
});
//导致路由配置
export default router;
```

#### 配置路由文件

- main.js 文件

```js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../src/routers/index.js";
const app = createApp(App);
//进行错误和警告拦截
app.config.errorHandler = (err, vm, info) => {
  console.error(err);
  console.log(vm);
  console.error(info);
};
// 进行挂载路由文件
app.use(router);
app.mount("#app");
```

#### 安装 ant-design-Vue UI 库

```shell
npm i --save ant-design-vue
```

#### 配置 antdv-UI 库

- main.js 文件

```js
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
app.use(antd);
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

#### 配置全局主题样式

> 仅供测试样式使用

```scss
//   设置基本颜色值
$baseColor: #000; //@error
$nav-bgc: #fff !default; //顶部nav背景颜色
$nav-color: #000 !default; //顶部nav字体颜色
$font-color: #fff; //
$button-color: #1890ff !default; //
$left-menu-bgc: #011528 !default; // 左侧菜单栏背景颜色
$left-font-color: #fff !default; //左侧菜单栏文字颜色
$content-bgc: #f0f0f0 !default; //主题内容区背景颜色
$test-color: #000 !default; //默认测试颜色
```

#### 全局样式使用例子

```vue
> 以下代码仅供测试
<style scoped lang="scss">
.l-show-img {
  width: 35%;
  height: 100%;
  writing-mode: vertical-lr;
  @extend .flex-row-center;
  h1 {
    @extend .common-color;
  }
}
</style>
```

#### 引入 pinia 进行全局状态管理

> 这里需要进行布局封装，所以这里的菜单栏的收缩需要进行全局状态的管理，使用 pinia 进行初级管理

- 执行脚本

```shell
yarn add pinia
```

- 配置 main.js

```js
import { createPinia } from "pinia";
app.use(createPinia());
```

#### 配置 icon-font

> 因为要动态配置 font，这里需要进行引入阿里图标进行使用，使用方法如下

- 打开[阿里 icon 官网](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)
- 打开资源管理- 我的项目
- 新建一个项目（如果没有的话）
- 点击右侧 symbol
- 生成链接

##### 配置 icon-font 文件

```js
import antd from "ant-design-vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";
const font = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_2362040_zxazlef1if8.js", //这里就是在aliicon里面生成的链接地址
});
app.use(antd).component("localIcon", font);
```

#### 封装请求

> 后续优化之后贴出来

#### 配置代码格式监管文件

- 安装 prettier

```shell
yarn add --dev --exact prettier
```
- 格式化代码
```shell
yarn prettier --write .  
```
- 代码格式检查
```shell
yarn prettier --check .  
```
- 格式化指定文件代码
```shell
yarn prettier --write src/components/table.vue
```

- 添加配置文件

#### 配置代理，处理跨域

- vite.config.js

```js
 server: {
    port: 3030, //更改默认端口5173
    open: false | 'google', // 是否自动开启浏览器
    proxy: {
      '/api': {
        target: 'https://v-api.2345.com/shortVideo',//这是跨域的原本地址
        changeOrigin: true,//是否开启跨域
        // rewrite: api => api.replace(/^\/api/, '') // 将真正的请求使用正则替换掉api因为url本身就不存在api 这里相当于重写了路径
      }
    }
  },
```

#### 配置打包部署环境地址

```shell
// in project
touch .env.development
touch .env.production
```

- .env.development

```js
# 开发环境地址配置
ENV = 'development'
VITE_APP_BASE_URL ='/api/'
VITE_APP_BASE_NAME  =  'vite development'
```

- .env.production

```js
# 生产环境地址配置
ENV = 'production'
# 测试使用 天气预报API
VITE_APP_BASE_URL = 'https://v-api.2345.com/shortVideo'
VITE_APP_BASE_NAME ='vite production'
```
