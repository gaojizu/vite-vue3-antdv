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
                <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
                    autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
                    <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入你的用户名' }]">
                        <a-input v-model:value="formState.username" />
                    </a-form-item>

                    <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入你的密码' }]">
                        <a-input-password v-model:value="formState.password" />
                    </a-form-item>

                    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                    </a-form-item>

                    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                        <a-button type="primary" html-type="submit">登录</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import tools from '../../assets/js/tools.js'
const formState = reactive({
    username: '',
    password: '',
    remember: true
})
const router = useRouter()
const onFinish = (value) => {
    if (value.username == 'admin' && value.password === 'admin123') {
        //登录成功 跳转到首页
        // 提示登录成功
        tools.message('info', '登录成功')
        //开启进度条
        //页面跳转 到首页
        router.push('/')

    }
    console.log(value)
}
const onFinishFailed = (errInfo) => {
    console.log(errInfo)
}
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
            writing-mode: vertical-lr;
            @extend .flex-row-center;

            h1 {
                @extend .common-color;
            }
        }

        .r-form {
            width: 60%;
            @extend .flex-row-center;
        }
    }

}
</style>