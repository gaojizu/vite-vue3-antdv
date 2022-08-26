/*
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-26 16:14:13
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/routers/roles.js
 */
const roles = [
    {
        path: '/roles',
        name: 'roles',
        component: () => import('../view/roles/index.vue')
    },
    {
        path: '/roleone',
        name: 'roleone',
        component: () => import('../view/roles/roleOne.vue')
    },
    {
        path: '/roletwo',
        name: 'roletwo',
        component: () => import('../view/roles/roleTwo.vue')
    },
]
export default roles