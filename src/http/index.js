import server from './config.js'

const get = (config) => {
    console.log(config)
    return server({
        ...config,
        method: 'get',
        params: config.data
    })
}
const post = (config) => {
    return server({
        ...config,
        method: 'post',
        data: config.data
    })
}


export default {
    get, post
}