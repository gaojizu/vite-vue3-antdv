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
import { ref, onMounted , getCurrentInstance} from 'vue'
import Menu from '../../components/layout/menu.vue'
const { proxy } = getCurrentInstance();
const collapsed = ref(false)
// 生命周期测试第一个阶段
onMounted(() => {
    console.log('passing')
    //开始请求数据
    const params = {
        name: 'jim'
    }
    console.log(proxy)
    // proxy.$axios(('api', 'get', params)=> { })
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