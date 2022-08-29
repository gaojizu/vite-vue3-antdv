/*
 * @use: 该文件只有状态管理相关的配置
 * @description: 状态管理js
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-26 14:55:34
 * @LastEditTime: 2022-08-26 17:14:13
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/pinia/statesMange.js
 */
import { defineStore } from "pinia";
export const paramsStore = defineStore("storeParams", {
    // 参数状态值 初始值
    state: () => {
        return {
            sliderStates: false, // 当前菜单收缩状态
        };
    },
    getters: {
        // 这里使用getters进行状态的获取，利用他的混存进行性能的优化
        getSliderStates: (state) => state.sliderStates,
    },
    actions: {
        //改变菜单栏状态的函数，每次都进行取反操作即可
        changeSliderStates() {
            this.sliderStates = !this.sliderStates;
        },
    },
});
