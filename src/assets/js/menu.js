/*
 * @use:
 * @description: 菜单栏js数组
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-26 09:41:29
 * @LastEditTime: 2022-08-26 16:13:50
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/assets/js/menu.js
 */
const menuLists = [
  {
    name: "首页",
    icon: "iconyingyong",
    path: "main",
    meta: {},
    children: null,
  },
  {
    name: "报表",
    icon: "iconshuzhuangtu",
    path: "reports",
    meta: {},
  },
  {
    name: "角色",
    icon: "iconjiaoseguanli",
    path: "roles",
    meta: {},
    children: [
      {
        name: "角色1",
        path: "roleone",
        icon: "",
        meta: {},
      },
      {
        name: "角色2",
        path: "roletwo",
        icon: "",
        meta: {},
      },
    ],
  },
];

export default menuLists;
