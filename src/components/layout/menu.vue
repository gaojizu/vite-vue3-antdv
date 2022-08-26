<!--
 * @use: 
 * @description: 菜单栏组件 进行处理路由的跳转和功能的展示
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-26 10:34:50
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/components/layout/menu.vue
-->
<!-- slider menu菜单栏 -->
<template>
  <div>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">logo</div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <div v-for="i in 30" :key="i" @click="toPage(i)">
          <a-menu-item :key="i + ''">
            <!-- icon  -->
            <user-outlined />
            <span>nav {{ i }}</span>
          </a-menu-item>
        </div>
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";

const selectedKeys = ref(["1"]);
const router = useRouter();
//接收父组传递过来的值
const props = defineProps({
  collapsed: Boolean,
});
let toPage = (p) => {
  router.push("reports");
  console.log(p);
};
</script>
<style scoped lang="scss">
.logo {
  height: 64px;
  background: $logo-color-bgc;
  //   background: rgba(0, 0, 0, 0.85);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 999999;
  @extend .flex-row-center;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>