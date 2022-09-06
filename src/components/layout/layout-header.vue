<!--
 * @use: 
 * @description: header 组件 进行基本信息的展示和对菜单栏的收缩控制
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-26 14:00:15
 * @LastEditTime: 2022-09-02 13:37:47
 * @FilePath: /vite-vue3-antdv/src/components/layout/layout-header.vue
-->
<template>
  <div>
    <a-layout-header class="header-bgc">
      <div class="header-line">
        <menu-unfold-outlined
          v-if="state.getSliderStates"
          class="trigger"
          @click="changeCollapsed"
        />
        <menu-fold-outlined v-else class="trigger" @click="changeCollapsed" />
      </div>
    </a-layout-header>
  </div>
</template>
<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { ref, onMounted } from "vue";
import useStore from "../../pinia/index.js";
const { state } = useStore();
const collapsed = ref(false);
let changeCollapsed = () => {
  state.changeSliderStates();
};
</script>
<style lang="scss" scoped>
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
.header-bgc {
  background: $nav-bgc;
  width: 100%;
  padding: 0;

  .header-line {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
