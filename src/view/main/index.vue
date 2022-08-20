<template>
    <div>
        <a-layout>
            <Menu :collapsed="collapsed"></Menu>
            <a-layout>
                <div style="width: 100%;position:fixed;">
                    <a-layout-header style="background: #fff; padding: 0;">
                        <menu-unfold-outlined v-if="collapsed" class="trigger"
                            @click="() => (collapsed = !collapsed)" />
                        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                    </a-layout-header>
                    <a-layout-content
                        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                        Content
                    </a-layout-content>
                </div>
            </a-layout>
        </a-layout>
    </div>
</template>
<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { ref, onMounted, getCurrentInstance, inject } from 'vue'
import Menu from '../../components/layout/menu.vue'
import api from '../../http/apis/main/main.js'

const collapsed = ref(false)
// 生命周期测试第一个阶段
onMounted(() => {
    console.log(import.meta.env)
    //开始请求数据 使用的是测试数据 天气预报 测试的是目的是配置跨域请求
    const data = {
        page: 1,
        size: 100,
        location: 'tianqihome-shortMovie',
        _: Date.now()
    }
    api.getWeather(data).then(res => {
        console.log(data)
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

})
</script>
<style scoped lang="scss">
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
</style>