<!--
 * @use: 
 * @description: main 页面
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-26 16:36:37
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/view/main/index.vue
-->
<template>
  <div><h1>Main</h1></div>
</template>
<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import api from "../../http/apis/main/main.js";
const collapsed = ref(false);
const { ctx } = getCurrentInstance();
// 生命周期测试第一个阶段
onMounted(() => {
  console.log(ctx);
  console.log(ctx.$data);
  console.log(getCurrentInstance());
  //开始请求数据 使用的是测试数据 天气预报 测试的是目的是配置跨域请求
  const data = {
    page: 1,
    size: 100,
    location: "tianqihome-shortMovie",
    _: Date.now(),
  };
  api
    .getWeather(data)
    .then((res) => {
      console.log(data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
<style scoped lang="scss">
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