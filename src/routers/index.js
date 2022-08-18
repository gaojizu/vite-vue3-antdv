import { createRouter, createWebHashHistory } from 'vue-router'
import reports from './report'
import roles from './roles'
import other from './other'

const routes_index = [
    {
        path: '/',
        redirect:'/main',
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../view/main/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login/index.vue')
    }
]
//将所有的路由文件合并 请将other一直放到最后 因为里面涉及到匹配是否存在当前路由文件，放到最后进行检查文件匹配程度
const routes = routes_index.concat(reports, roles, other)
//创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
//设置全局守卫
router.beforeEach((to, from, next) => {
    console.log(to) //到哪儿去
    console.log(from) //从哪儿来
    next() //继续执行
})

export default router