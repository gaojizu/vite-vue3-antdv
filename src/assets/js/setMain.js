/*
 * @use:
 * @description: 将mainjs中文件抽离出来
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-26 15:08:43
 * @LastEditTime: 2022-09-02 14:06:55
 * @FilePath: /vite-vue3-antdv/src/assets/js/setMain.js
 */
import router from "../../routers/index.js";
import antd from "ant-design-vue";
//引入pinia插件
import { createPinia } from "pinia";
// ali-icon-font
import { createFromIconfontCN } from "@ant-design/icons-vue";
const font = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_2362040_t5tgnlsrwsh.js",
});
export { router, antd, createPinia, createFromIconfontCN, font };
