/*
 * @use: 
 * @description: 路由统一出口文件
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-09-06 09:06:36
 * @FilePath: /vite-vue3-antdv/src/routers/index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import reports from "./report";
import roles from "./roles";
import other from "./other";
import commonRouters from "./common";

const routes_index = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: () => import(/* @vite-ignore */ "../view/main/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* @vite-ignore */ "../view/login/index.vue"),
  },
];
//将所有的路由文件合并 请将other一直放到最后 因为里面涉及到匹配是否存在当前路由文件，放到最后进行检查文件匹配程度
const routes = routes_index.concat(reports, roles, commonRouters, other);
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

export default router;
