<!--
 * @use: 
 * @description: 首页-仪表板-折线图
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-29 08:35:43
 * @LastEditTime: 2022-08-30 10:25:19
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/components/dashboard/line/index.vue
-->
<template>
  <div>
    <div id="line" class="dash-line"></div>
  </div>
</template>

<script setup>
import api from "../../../http/apis/echart/index.js";
import * as echarts from "echarts";
import { onMounted } from "vue";
let options = [];
let setEchartOptions = () => {
  let domLine = document.getElementById("line");
  let myEchart = echarts.init(domLine);
  api
    .getLineDatas()
    .then((data) => {
      myEchart.setOption(
        (options = {
          title: {
            text: "Beijing AQI",
            left: "1%",
          },
          tooltip: {
            trigger: "axis",
          },
          grid: {
            left: "5%",
            right: "15%",
            bottom: "10%",
          },
          xAxis: {
            data: data.map(function (item) {
              return item[0];
            }),
          },
          yAxis: {},
          toolbox: {
            right: 10,
            feature: {
              dataZoom: {
                yAxisIndex: "none",
              },
              restore: {},
              saveAsImage: {},
            },
          },
          dataZoom: [
            {
              startValue: "2014-06-01",
            },
            {
              type: "inside",
            },
          ],
          visualMap: {
            top: 50,
            right: 10,
            pieces: [
              {
                gt: 0,
                lte: 50,
                color: "#93CE07",
              },
              {
                gt: 50,
                lte: 100,
                color: "#FBDB0F",
              },
              {
                gt: 100,
                lte: 150,
                color: "#FC7D02",
              },
              {
                gt: 150,
                lte: 200,
                color: "#FD0100",
              },
              {
                gt: 200,
                lte: 300,
                color: "#AA069F",
              },
              {
                gt: 300,
                color: "#AC3B2A",
              },
            ],
            outOfRange: {
              color: "#999",
            },
          },
          series: {
            name: "Beijing AQI",
            type: "line",
            data: data.map(function (item) {
              return item[1];
            }),
            markLine: {
              silent: true,
              lineStyle: {
                color: "#333",
              },
              data: [
                {
                  yAxis: 50,
                },
                {
                  yAxis: 100,
                },
                {
                  yAxis: 150,
                },
                {
                  yAxis: 200,
                },
                {
                  yAxis: 300,
                },
              ],
            },
          },
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  setEchartOptions();
});
</script>

<style lang='scss' scoped>
.dash-line {
  width: 100vw;
  height: 400px;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#cdcfd4), to(#fff));
}
</style>
