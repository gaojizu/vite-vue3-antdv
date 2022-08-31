<!--
 * @use: 
 * @description: 首页-仪表板-气泡图
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-29 08:17:23
 * @LastEditTime: 2022-08-30 10:24:14
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/components/dashboard/bubble/index.vue
-->
<template>
  <div>
    <div class="dash-bubble" id="bubble"></div>
  </div>
</template>

<script setup>
// 引入echart
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";
import { options } from "./data.js";
let myEcahrt = null;
let setEchartOptions = () => {
  let bubble = document.getElementById("bubble");
  myEcahrt = echarts.init(bubble);
  options && myEcahrt.setOption(options);
};
onMounted(() => {
  //绘制气泡图
  setEchartOptions();
});
onUnmounted(() => {
  myEcahrt.dispose();
});
</script>

<style lang='scss' scoped>
.dash-bubble {
  width: 800px;
  height: 400px;
}
</style>
