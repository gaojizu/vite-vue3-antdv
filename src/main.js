/*
 * @use:
 * @description:
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-26 16:34:28
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/main.js
 */
import { createApp } from "vue";
import "./style.css";
// import '../src/assets/css/global.scss'
import App from "./App.vue";
import {
  router,
  antd,
  createPinia,
  createFromIconfontCN,
  font,
} from "../src/assets/js/setMain.js";
import "ant-design-vue/dist/antd.css";
//引入echart插件
// import * as echarts from 'echarts'
// 进行挂载路由文件
const app = createApp(App);
//进行错误信息捕捉
app.config.errorHandler = (err, vm, info) => {
  console.error(err);
  console.log(vm);
  console.error(info);
};
// 进行警告信息捕捉
app.config.warnHandler = (warn, vm, info) => {
  console.warn(warn);
  console.log(vm);
  console.error(info);
};
//配置全局的请求封装
app.use(antd).component("localIcon", font);
app.use(router);
app.use(createPinia());
app.config.globalProperties.test = () => {
  return true;
};
app.mount("#app");
