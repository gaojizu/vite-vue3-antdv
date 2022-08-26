<template>
  <div>
    <!-- 头部 -->
    <a-layout>
      <!-- 菜单 -->
      <Menu :collapsed="collapsed"></Menu>
      <a-layout>
        <div style="width: 100%; position: fixed">
          <a-layout-header style="background: #fff; padding: 0">
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
          </a-layout-header>
          <a-layout-content
            class="layout-content"
          >
            <!-- content -->
            <router-view></router-view>
          </a-layout-content>
        </div>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import Menu from "../src/components/layout/menu.vue";
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
  min-height: 280px;
}
</style>
