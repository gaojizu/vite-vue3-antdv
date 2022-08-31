/*
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-29 09:13:28
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/http/apis/main/main.js
 */
import options from "../../index.js";
const getWeather = (data) => {
  return options.get({
    url: "/GetListByLocation",
    data,
  });
};

export default {
  getWeather
};
