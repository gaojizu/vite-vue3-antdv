<!--
 * @use: 
 * @description: 菜单栏组件 进行处理路由的跳转和功能的展示
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-08-30 08:15:08
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/components/layout/layout-menu.vue
-->
<template>
  <div>
    <a-layout-sider
      :style="{ height: '100vh' }"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo"><h3>LOGO</h3></div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <div v-for="(item, index) in menuLists" :key="index">
          <template v-if="item.children && item.children.length > 0">
            <a-sub-menu :key="index" @click="toPage(item.path)">
              <template #title>
                <span>
                  <local-icon :type="item.icon" />
                  <span>{{ item.name }}</span>
                </span>
              </template>
              <div v-for="(it, inde) in item.children" :key="inde">
                <a-menu-item @click.stop="toPage(it.path)" :key="inde">{{
                  it.name
                }}</a-menu-item>
              </div>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="index + ''" @click="toPage(item.path)">
              <local-icon :type="item.icon" />
              <span>{{ item.name }}</span>
            </a-menu-item></template
          >
        </div>
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import menuLists from "../../assets/js/menu.js";

const selectedKeys = ref(["0"]);
const router = useRouter();
//接收父组传递过来的值
const props = defineProps({
  collapsed: Boolean,
});
let toPage = (path) => {
  router.push(path);
};
</script>
<style scoped lang="scss">
.logo {
  height: 64px;
  background: $logo-color-bgc;
  //   background: rgba(0, 0, 0, 0.85);
  position: sticky;
  top: 0;
  @extend .flex-row-center;
  h3{
    color: #fff;
  }
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
