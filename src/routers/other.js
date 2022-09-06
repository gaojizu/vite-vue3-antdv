/*
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-09-06 09:07:00
 * @FilePath: /vite-vue3-antdv/src/routers/other.js
 */
/**
 * 页面异常路由文件
 */
const other = [
  {
    path: "/rolling",
    component: () => import(/* @vite-ignore */ "../view/other/rolling.vue"),
  },
  {
    path: "/:path(.*)",
    component: () => import(/* @vite-ignore */ "../view/other/notFoundPage.vue"),
  },
];
export default other;
