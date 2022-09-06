<!--
 * @use: 
 * @description: 滚动测试 测试布局用
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-09-02 14:02:14
 * @LastEditTime: 2022-09-02 14:24:26
 * @FilePath: /vite-vue3-antdv/src/view/other/rolling.vue
-->
<template>
  <div class="content">
    <p id="top">往下滚动 进行测试滚动条 往下滚动 进行测试滚动条</p>
    <p v-for="i in 100">{{ i }}</p>
    <a href="#rolling">顶部</a>
    <button @click="toTop">顶部</button>
  </div>
</template>
<script setup>
window.addEventListener("scroll", () => {
  console.log("1");
});
let toTop = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};
</script>
<style lang="scss" scoped>
.content {
  @extend .flex-col-center;
}
</style>