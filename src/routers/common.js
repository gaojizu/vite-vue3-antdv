/*
 * @use: 
 * @description: 用于普通页面的路由文件
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-09-02 10:22:39
 * @LastEditTime: 2022-09-06 09:06:54
 * @FilePath: /vite-vue3-antdv/src/routers/common.js
 */
const commonRouters = [
    {
        path: '/dataPanel',
        meta: {
            name: 'dataPanel',
            desc : ''
        },
        component: () => import(/* @vite-ignore */ '../view/data_panel/index.vue')
    },
    {
        path: '/table',
        meta: {
            name: 'table',
            desc : ''
        },
        component: () => import(/* @vite-ignore */ '../view/tables/index.vue')
    }
]
export default commonRouters