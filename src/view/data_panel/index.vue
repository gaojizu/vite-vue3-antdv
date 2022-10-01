<!--
 * @use: 
 * @description: 数据看板 展示一些常见的数据内容
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-09-02 10:21:36
 * @LastEditTime: 2022-09-06 16:00:56
 * @FilePath: /vite-vue3-antdv/src/view/data_panel/index.vue
-->
<template>
  <div>
    <div class="data-show">
      <!-- 项目列表 -->
      <div class="data-list">
        <div class="data-item">
          <div class="data-title">项目列表</div>
          <div class="item" v-for="i in dataLists.projectsList">
            <p><span>项目名字:</span>{{ i.name }}</p>
            <p><span>项目描述:</span>{{ i.desc }}</p>
          </div>
        </div>
        <!-- 在线用户 -->
        <div class="data-item">
          <div class="data-title">在线用户</div>
          <div class="item" v-for="i in dataLists.onLineLists">
            <p><span>用户名称:</span>{{ i.name }}</p>
            <p><span>手机号:</span>{{ i.phone }}</p>
          </div>
        </div>
        <!-- 关注人数 -->
        <div class="data-item">
          <div class="data-title">关注人数</div>
          <div class="item" v-for="i in dataLists.focusLists">
            <p><span>用户名称:</span>{{ i.name }}</p>
            <p><span>关注时间:</span>{{ i.focusTime }}</p>
          </div>
        </div>
        <!-- 完成项目 -->
        <div class="data-item">
          <div class="data-title">完成项目</div>
          <div class="item" v-for="i in dataLists.finishLists">
            <p><span>项目名字:</span>{{ i.name }}</p>
            <p><span>完成时间:</span>{{ i.finishDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance, onMounted } from "vue";
import {dataLists} from '../../../src/assets/mock/data_panel.js'
// onMounted(() => {
//   const { proxy } = getCurrentInstance();
//   console.log(proxy);
// });
</script>
<style lang="scss" scoped>
.data-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5px;
  .data-item {
    width: 24%;
    height: 300px;
    overflow-y: hidden;
    background-color: #001529;
    border: none;
    border-radius: 10px;
    .data-title {
      text-align: center;
      font-weight: 700;
      position: sticky;
      top: 0;
      height: 40px;
      background-color: #fff;
      line-height: 40px;
    }
    .item {
      padding: 5px 5px 0 10px;
    }
    .item > p {
      font-weight: 600;
      color: #fff;
    }
  }
  .data-item:hover {
    height: 350px;
    transition: 0.5s;
  }
}
</style>