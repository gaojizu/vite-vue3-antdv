/**
 * 角色相关的路由文件
 */
const roles = [
    {
        path : '/roles',
        name : 'roles',
        component : ()=> import('../view/roles/index.vue')
    }
]
export default roles