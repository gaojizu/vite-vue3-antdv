<template>
    <div>
        <h1>这是一个mian首页</h1>
        <div class="content">
            这是content的样式
            <div class="child">
                这是child的样式
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.content {
    font-size: 30px;
    color: '#f40';
    .child{
        font-size: 20px;
        color:'#000'
    }
}
</style>