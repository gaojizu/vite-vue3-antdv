<!--
 * @use: 
 * @description: K线图
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-30 10:16:17
 * @LastEditTime: 2022-08-31 08:39:33
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/components/dashboard/candlestick/index.vue
-->
<template>
  <div>
    <div class="dash-candlestick" id="candlestick"></div>
  </div>
</template>

<script setup>
import { options } from "./data.js";
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue-demi";
let myEcahrt = null;
let setEchartOptions = () => {
  let domCand = document.getElementById("candlestick");
  myEcahrt = echarts.init(domCand);
  myEcahrt.setOption(options);
};

onMounted(() => {
  setEchartOptions();
});
onUnmounted(() => {
  myEcahrt.dispose();
});
</script>

<style lang='scss' scoped>
.dash-candlestick {
  width: 750px;
  height: 400px;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#cdcfd4), to(#fff));
}
</style>
