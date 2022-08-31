<!--
 * @use: 
 * @description: main 页面
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-31 08:38:06
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/view/main/index.vue
-->
<template>
  <div class="content">
    <div class="datashow">
      <div class="dbCom dbOne">
        <div class="desc">
          详情
          <div class="desc-show">第一个板块</div>
        </div>
      </div>
      <div class="dbCom dbTwo">
        <div class="desc">
          详情
          <div class="desc-show">第二个板块</div>
        </div>
      </div>
      <div class="dbCom dbThree">
        <div class="desc">
          详情
          <div class="desc-show">第三个板块</div>
        </div>
      </div>
    </div>
    <hr />
    <div class="dashborad">
      <div class="first-echart">
        <dashBoardBubble></dashBoardBubble>
        <candlestick></candlestick>
      </div>
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
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #fff;
      .desc-show {
        display: none;
      }
    }
    .desc:hover {
      background: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      height: 100%;
      .desc-show {
        display: block;
      }
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
  .first-echart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
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
