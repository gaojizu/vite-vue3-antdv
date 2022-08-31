<!--
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-26 16:27:25
 * @LastEditTime: 2022-08-30 09:28:26
 * @FilePath: /vue3STUBYLOCAL/Users/leimingwei/Desktop/LeiMingWei/viteItems/vite-vue3-antdv/src/App.vue
-->
<template>
  <div>
    <!-- 头部 -->
    <a-layout has-sider>
      <!-- 菜单 -->
      <layout-menu :collapsed="state.getSliderStates"></layout-menu>
      <a-layout>
        <div style="width: 100%; position: fixed">
          <layout-header></layout-header>
          <a-layout-content class="layout-content">
            <router-view></router-view>
          </a-layout-content>
          <!-- <a-layout-footer class="l-footer" :style="{ textAlign: 'center' }">
            VITE VUE3 ©2022 Created by Clearlove
          </a-layout-footer> -->
        </div>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import LayoutMenu from "../src/components/layout/layout-menu.vue";
import LayoutHeader from "./components/layout/layout-header.vue";

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
// 这里不做任何样式限制，为了直接可以获取到使用区域的正常使用范围
.layout-content {
  width: calc(100% - 200px); //将menu宽度去掉
  // margin: 24px 16px;
  // padding: 24px;
  // background: #fff;
  // min-height: 300px;
}
.l-footer {
  height: 50px;
  position: sticky;
  bottom: 0px;
}
</style>
