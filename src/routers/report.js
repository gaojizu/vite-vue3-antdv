/*
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-09-06 09:07:08
 * @FilePath: /vite-vue3-antdv/src/routers/report.js
 */
/**
 * 报表相关的路由文件
 */
const reports = [
  {
    path: "/reports",
    name: "reports",
    component: () => import(/* @vite-ignore */ "../view/report/index.vue"),
  },
];
export default reports;
