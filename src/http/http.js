/**
 * 封装axios请求
 * 使用promise和axios进行数据请求
 */

import axios from 'axios'
// import qs  from 'qs'

const config = {
    baseUrl: 'http://localhost:3000',
    timeOut: 30000,
    header: 'no-header'
}

const server = axios.create(config)
const Token = new Date() //设置一个Token 临时的

//配置默认post请求头信息
server.defaults.headers.post["Content-Type"] = "multipart/form-data;charset=UTF-8";
//允许跨域运行
server.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*";

//封装请求拦截器
server.interceptors.request.use((config) => {
    //进行Token的设置
    // config.headers.common['Authorization'] = Token
    return config
}, (error) => {
    return Promise.reject(error)
})
//进行响应拦截
server.interceptors.response.use((response) => {
    // 2**范围内的都会触发该函数
    if (response.status == 200) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(response)
    }
}, (error) => {
    return Promise.reject(error)
})

/**
 * @params url 请求参数
 * @params method 请求方式
 * @params p 请求参数
 */
server((url, method, p) => {
    return new Promise((resolve, reject) => {
        const _Params = method == 'get' ? { params: p } : { data: p }
        axios({
            method,
            url,
            _Params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
})

//导出默认axios配置
export default server