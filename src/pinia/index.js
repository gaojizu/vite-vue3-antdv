/*
 * @use: 用于全局数据状态和数据中心 替换之前使用的vuex pinia 是vuex最新版本的替代版
 * @description: paramsStore 数据仓库中心 该文件是出口文件，模块文件请写到对应的模块中
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-26 14:18:05
 * @LastEditTime: 2022-08-26 15:05:29
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/pinia/index.js
 */
import { paramsStore } from './statesMange.js'
// 将出口文件导出
export default function useStore() {
    return {
        state: paramsStore(),//当前的状态管理相关 导出模块
    }
}