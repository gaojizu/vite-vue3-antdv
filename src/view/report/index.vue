<!--
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-31 08:11:55
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/view/report/index.vue
-->
<template>
  <div>
    <h1>report</h1>
  </div>
</template>
<script>
import { onMounted, getCurrentInstance } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log(getCurrentInstance());
    });
    let test = () => {
      console.log("success");
    };
    return {
      test
    }
  },
  
};
</script>
<style scoped lang="scss"></style>
