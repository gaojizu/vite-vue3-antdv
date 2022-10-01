<!--
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2022-08-26 16:27:25
 * @LastEditTime: 2022-09-02 13:53:50
 * @FilePath: /vite-vue3-antdv/src/App.vue
-->
<template>
	<div>
		<!-- 头部 -->
		<a-layout has-sider>
			<!-- 菜单 -->
			<layout-menu :collapsed="state.getSliderStates"></layout-menu>
			<a-layout>
				<div class="bfc-layout">
					<layout-header></layout-header>
					<div class="bfc">
						<a-layout-content :class="
                state.getSliderStates ? 'layout-content-min' : 'layout-content'
              ">
							<router-view></router-view>
						</a-layout-content>
					</div>
					<!-- <a-layout-footer class="l-footer" :style="{ textAlign: 'center' }">
            VITE VUE3 ©2022 Created by Clearlove
          </a-layout-footer> -->
				</div>
			</a-layout>
		</a-layout>
	</div>
</template>
<script setup>
	import {
		MenuUnfoldOutlined,
		MenuFoldOutlined
	} from "@ant-design/icons-vue";
	import LayoutMenu from "../src/components/layout/layout-menu.vue";
	import LayoutHeader from "./components/layout/layout-header.vue";

	import useStore from "../src/pinia/index.js";
	const {
		state
	} = useStore();
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

	.bfc-layout {
		position: fixed;
		width: 100%;

		// display: flow-root;
		.bfc {
			position: relative;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 100vh;
			padding-bottom: 60px;
			overflow-y: scroll;

			.layout-content {
				width: calc(100% - 200px); //将menu宽度去掉
				min-width: 1400px;
				// overflow-x: scroll;
			}

			.layout-content-min {
				width: calc(100% - 80px); //将min状态下menu宽度去掉
			}
		}
	}

	// 这里不做任何样式限制，为了直接可以获取到使用区域的正常使用范围

	.l-footer {
		height: 50px;
		position: sticky;
		bottom: 0px;
	}
</style>
