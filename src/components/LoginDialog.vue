<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { ElMessage } from 'element-plus'
// 定义属性传递
const props = defineProps({
    // 显示
    showDialog: {
        type: Boolean,
        default() {
            return false;
        }
    }
})
// 定义事件
const emit = defineEmits(['close'])
// 对话框显示
const dialogVisible = ref(false);
// 创建一个表单响应式模型
const formModel = reactive({
    // 用户名
    userName: "",
    // 密码
    password: ""
});
// 使用状态管理
const store = useStore();
// 处理用户登录
function handleUserLogin() {
    // 用户登录
    store.dispatch('userLogin', formModel).then((result) => {
        if (result) {
            // 关闭对话框
            return handleDialogClose();
        }
        ElMessage.error("用户名或密码不正确");
    })
}
// 关闭对话框
function handleDialogClose() {
    // 关闭对话框
    dialogVisible.value = false;
    // 提交关闭事件
    emit('close');
}

// 监听对话框的显示
watch(() => props.showDialog, (newVal) => dialogVisible.value = newVal)
</script>

<template>
    <el-dialog v-model="dialogVisible"
        width="375px"
        :modal="true"
        :show-close="false"
        :align-center="false"
        :center="true"
        :close-on-press-escape="true" 
        :close-on-click-modal="true"
        :before-close="handleDialogClose"
        class="login-dialog" 
    >
        <template #header>
            <h4>用户登录</h4>
        </template>
        <el-form :model="formModel">
            <el-form-item>
                <el-input v-model="formModel.userName" class="login-input" placeholder="请使用账号登录"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="formModel.password" class="login-input" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item class="form-footer">
                <el-button @click="handleUserLogin" type="primary" class="login-btn">登录</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<style lang="scss" scoped>
.login-dialog {

    .el-form {

        .login-input {

            :deep(.el-input__wrapper) {
                padding-top: 4px;
                padding-bottom: 4px;
            }
        }

        .form-footer {
            margin-bottom: 0;

            .login-btn {
                width: 100%;
                height: 36px;
            }
        }
    }
}
</style>