<template>
    <div class="content">
        <div class="l-desc">
            <h1>
                LOGIN-前端小鸣人
            </h1>
        </div>
        <div class="r-login">
            <div class="l-show-img">
                <h1>THIS IS IMG</h1>
            </div>
            <div class="r-form">
                form
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.content {
    width: 100vw;
    height: 100vh;
    display: flex;
    place-items: center;
    background-color: black;
    color: #fff;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 100px;

    .l-desc {
        h1 {
            color: #fff;
        }
    }

    .r-login {
        width: 50%;
        height: 45%;
        background-color: #fff;
        border-radius: 10px;
        margin-left: 100px;
        min-width: 500px;
        min-height: 450px;
        display: flex;
        flex-direction: row;
        // justify-content: space-between;
        color: #000;

        .l-show-img {
            width: 35%;
            height: 100%;
            border: 1px solid #f40;
            // @extend .flex-row-center;
            writing-mode: vertical-lr;
        }

        .r-form {
            border: 1px solid #f90;
        }
    }

}
</style>