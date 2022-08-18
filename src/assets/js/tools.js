/**
 * 工具类js 
 */

import { message } from 'ant-design-vue'
const tools = {
    /**
      * 
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