/*
 * @use: 
 * @description:获取到echarts line 的数据
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-29 09:04:20
 * @LastEditTime: 2022-08-29 09:26:05
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/http/apis/echart/index.js
 */

import options from '../../index.js'
const getLineDatas = (data) => {
    return options.get({
        url: '/asset/data/aqi-beijing.json',
        data
    })
}
export default {
    getLineDatas
}