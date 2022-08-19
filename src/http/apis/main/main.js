import options from '../../index.js'
const testApi = data => {
    return options.post({
        url: "/api/test",
        data
    })
}

export default {
    testApi
}