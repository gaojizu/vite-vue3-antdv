<!--
 * @use: 
 * @description: main 页面
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-30 14:00:17
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/view/main/index.vue
-->
<template>
  <div class="content">
    <div class="datashow">
      <div class="dbCom dbOne">
        <div class="desc"></div>
      </div>
      <div class="dbCom dbTwo">
        <div class="desc"></div>
      </div>
      <div class="dbCom dbThree">
        <div class="desc"></div>
      </div>
    </div>
    <hr />
    <div class="dashborad">
      <dashBoardBubble></dashBoardBubble>
      <candlestick></candlestick>
      <div style="margin-top: 10px"></div>
      <dashBoardLine></dashBoardLine>
    </div>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import dashBoardBubble from "../../components/dashboard/bubble/index.vue";
import dashBoardLine from "../../components/dashboard/line/index.vue";
import candlestick from "../../components/dashboard/candlestick/index.vue";

import api from "../../http/apis/main/main.js";
const collapsed = ref(false);
const { ctx } = getCurrentInstance();
// 生命周期测试第一个阶段
onMounted(() => {
  // console.log(getCurrentInstance());
  //开始请求数据 使用的是测试数据 天气预报 测试的是目的是配置跨域请求
  // const data = {
  //   page: 1,
  //   size: 100,
  //   location: "tianqihome-shortMovie",
  //   _: Date.now(),
  // };
  // api
  //   .getWeather(data)
  //   .then((res) => {
  //     console.log(data);
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});
</script>
<style scoped lang="scss">
.content {
  padding: 0;
}
.datashow {
  padding: 10px;
  @extend .flex-row-center;
  justify-content: space-between;
  .dbCom {
    width: 32%;
    height: 100px;
    position: relative;
    .desc {
      position: absolute;
      bottom: 0px;
      height: 30px;
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .dbOne {
    background-color: #6badec;
  }
  .dbTwo {
    background-color: #f5b426;
  }
  .dbThree {
    background-color: #f54df3;
  }
}
.dashborad {
  padding: 10px;
  background-color: #fff;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
