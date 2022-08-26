/**
 * 页面异常路由文件
 */
const other = [
  {
    path: "/:path(.*)",
    component: () => import("../view/other/notFoundPage.vue"),
  },
];
export default other;
