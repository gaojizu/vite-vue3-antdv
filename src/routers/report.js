/**
 * 报表相关的路由文件
 */
const reports = [
    {
        path: '/reports',
        name: 'reports',
        component: () => import('../view/report/index.vue')
    }
]
export default reports