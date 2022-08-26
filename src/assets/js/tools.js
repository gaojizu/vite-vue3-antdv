/*
 * @use: 
 * @description: 工具类js
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-26 08:49:30
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/assets/js/tools.js
 */

import { message } from 'ant-design-vue'
const tools = {
    /**
      * @desc message全局提示工具
      * @param {*} type success error warning info(default)
      * @param {*} info string
      */
    message: (type = 'info', info) => {
        if (type == 'info') {
            message.info(info)
        } else if (type == 'warning') {
            message.warning(info)
        } else if (type == 'success') {
            message.success(info)
        } else {
            message.error(info)
        }
    }
}

// const message = (type = 'info', info) => {
//     message[type](info)
// }
// 将工具类内容导出
export default tools