/**
 * 封装axios请求
 * 使用promise和axios进行数据请求
 */

import axios from 'axios'
// import qs  from 'qs'
console.log(import.meta.env)
const config = {
    baseURL: import.meta.env.VITE_APP_BASE_URL, //配置区分环境
    timeOut: 30000,
    header: {
        "Content-Type": "application/json;charset=UTF-8",  //配置默认post请求头信息
        "Access-Control-Allow-Origin-Type": "*", //允许跨域运行
        Authorization: '687689698760879870',// 这里需要注意的token里面不可以出现中文，否则会直接报错 
    }
}
const server = axios.create(config)

//配置默认post请求头信息 上方直接配置 这里默认不配置
// server.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// server.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*";

//封装请求拦截器
server.interceptors.request.use((config) => {
    // config当前的请求信息配置文件对象 可以进行数据的拦截处理
    return config
}, (error) => {
    return Promise.reject(error)
})
//进行响应拦截
server.interceptors.response.use((response) => {
    console.log('res', response)
    // 2**范围内的都会触发该函数
    if (response.status == 200) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(response)
    }
}, (error) => {
    return Promise.reject(error)
})

//导出默认axios配置
export default server