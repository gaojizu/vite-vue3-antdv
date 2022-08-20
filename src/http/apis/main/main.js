import options from '../../index.js'
const getWeather = data => {
    return options.get({
        url: "/GetListByLocation",
        data
    })
}

export default {
    getWeather
}