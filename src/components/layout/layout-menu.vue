<!--
 * @use: 
 * @description: 菜单栏组件 进行处理路由的跳转和功能的展示
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-23 12:59:43
 * @LastEditTime: 2022-09-02 15:39:46
 * @FilePath: /vite-vue3-antdv/src/components/layout/layout-menu.vue
-->
<template>
  <div>
    <a-layout-sider
      :style="{ height: '100vh' }"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      class="layout-slider"
    >
      <div class="logo"><h3>LOGO</h3></div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <div v-for="(item, index) in menuLists" :key="index">
          <template v-if="item.children && item.children.length > 0">
            <a-sub-menu :key="index" @click="toPage(item)">
              <template #title>
                <span>
                  <local-icon :type="item.icon" />
                  <span>{{ item.name }}</span>
                </span>
              </template>
              <div v-for="(it, inde) in item.children" :key="inde">
                <a-menu-item @click.stop="toPage(it)" :key="inde">{{
                  it.name
                }}</a-menu-item>
              </div>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="index + ''" @click="toPage(item)">
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
const router = useRouter();
console.log(router.currentRoute._value.meta.name);
console.log(router.currentRoute);
let { _value } = router.currentRoute;
console.log(_value);
// TODO: 设置当前的菜单位置
const selectedKeys = ref(["1"]);
const props = defineProps({
  collapsed: Boolean,
});
let toPage = (v) => {
  router.push({
    path: v.path,
    query: {
      // meta : JSON.stringify(v.meta)
    },
  });
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
  h3 {
    color: #fff;
  }
}

.site-layout .site-layout-background {
  background: #fff;
}
// .layout-slider{
//   position: absolute;
//   top: 0;
//   width: 200px;
// }
</style>
