/*
 * @use:
 * @description: 菜单栏js数组
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-26 09:41:29
 * @LastEditTime: 2022-09-02 14:07:22
 * @FilePath: /vite-vue3-antdv/src/assets/js/menu.js
 */
const menuLists = [
  {
    name: "首页",
    icon: "iconyingyong",
    path: "main",
    meta: {
      anchorId: "0"
    },
    children: null,
  },
  {
    name: "数据看板",
    icon: "iconshujukanban",
    path: "dataPanel",
    meta: {
      anchorId: "1"
    },
    children: null,
  },
  {
    name: "报表",
    icon: "iconshuzhuangtu",
    path: "reports",
    meta: {
      anchorId: "2"
    },
  },
  {
    name: "表格",
    icon: "iconbiaoge",
    path: "table",
    meta: {
      anchorId: "3"
    },
  },
  {
    name: "滚动",
    icon: "icon-gundong",
    path: "rolling",
    meta: {
      anchorId: ""
    },
  },
  {
    name: "角色",
    icon: "iconjiaoseguanli",
    path: "roles",
    meta: {
      anchorId: "4"
    },
    children: [
      {
        name: "角色1",
        path: "roleone",
        icon: "",
        meta: {
          anchorId: "4 - 1"
        },
      },
      {
        name: "角色2",
        path: "roletwo",
        icon: "",
        meta: {
          anchorId: "4 - 2"
        },
      },
    ],
  },
];

export default menuLists;
