<!-- slider menu菜单栏 -->
<template>
    <div>
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo">logo</div>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <div v-for="i in 30">
                    <a-menu-item :key='i + ""'>
                        <user-outlined />
                        <span>nav {{i}}</span>
                    </a-menu-item>
                </div>
            </a-menu>
        </a-layout-sider>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';

const selectedKeys = ref(['1'])
//接收父组传递过来的值
const props = defineProps({
    collapsed: Boolean
})
</script>
<style scoped lang="scss">
.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>