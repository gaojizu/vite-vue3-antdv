/*
 * @use:
 * @description:
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-09-06 09:07:11
 * @FilePath: /vite-vue3-antdv/src/routers/roles.js
 */
const roles = [
  {
    path: "/roles",
    name: "roles",
    component: () => import(/* @vite-ignore */ "../view/roles/index.vue"),
  },
  {
    path: "/roleone",
    name: "roleone",
    component: () => import(/* @vite-ignore */ "../view/roles/roleOne.vue"),
  },
  {
    path: "/roletwo",
    name: "roletwo",
    component: () => import(/* @vite-ignore */ "../view/roles/roleTwo.vue"),
  },
];
export default roles;
