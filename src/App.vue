<template>
  <div>
    <!-- 头部 -->
    <a-layout has-sider>
      <!-- 菜单 -->
      <Menu :collapsed="state.getSliderStates"></Menu>
      <a-layout>
        <div style="width: 100%; position: fixed">
          <Header></Header>
          <a-layout-content class="layout-content">
            <router-view></router-view>
          </a-layout-content>
          <a-layout-footer :style="{ textAlign: 'center' }">
            VITE VUE3 ©2022 Created by Clearlove
          </a-layout-footer>
        </div>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import Menu from "../src/components/layout/menu.vue";
import Header from "../src/components/layout/header.vue";
import useStore from "../src/pinia/index.js";
const { state } = useStore();
</script>
<style lang="scss" scoped>
// @import './assets/css/global.scss'
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
.layout-content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 300px;
}
</style>
