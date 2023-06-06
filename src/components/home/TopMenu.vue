<script lang="ts" setup>
import { computed, ref } from 'vue';
import { UserFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import LoginDialog from '../LoginDialog.vue';

// 使用vuex
const store = useStore()
// 获取顶部菜单
const menus = computed(() => store.getters.topMenuList);
// 获取用户
const user = computed(() => store.state.user.user);
// 路由
const router = useRouter()
// 处理Brand点击事件
function handleBrandClick() {
    router.push('/');
}
// 处理头部表单的点击事件
function handleTopMenuClick(item: any) {
    // 查询路由
    const route = item && item.route;
    // 如果路由不为空
    route && router.push(route);
}

// 定义用户登录显示的变量
const showLoginDialog = ref(false);
// 处理用户登录
function handleSignIn() {
    showLoginDialog.value = true;
}
// 处理用户退出
function handleLogout() {
    // 删除当前用户
    store.commit('deleteUser');
}
// 关闭用户登录对话框
function closeLoginDialog() {
    showLoginDialog.value = false;
}

// 处理系统设置
function handleSetting() {
    // 导航到系统设置
    router.push('/setting');
}

</script>

<template>
    <div class="top-menu">
        
        <div class="brand">
            <el-button link class="btn-brand" @click="handleBrandClick">Dynamic-Data</el-button>
        </div>

        <div class="top-menu-list">
            <ul>
                <li>
                    <el-popover trigger="hover">
                        <template #reference>
                            <el-avatar class="user-avatar" :icon="UserFilled" />
                        </template>
                        <template #default>
                            <ul v-show="user == null" class="popover-setting">
                                <li>
                                    <el-button link @click="handleSignIn">
                                        <el-icon><User /></el-icon>
                                        <span>登录</span>
                                    </el-button>
                                </li>
                            </ul>
                            <ul v-show="user != null" class="popover-setting">
                                <li>
                                    <el-button link @click="handleSetting">
                                        <el-icon><Setting /></el-icon>
                                        <span>设置</span>
                                    </el-button>
                                </li>
                                <li>
                                    <el-button link @click="handleLogout">
                                        <el-icon><SwitchButton /></el-icon>
                                        <span>退出</span>
                                    </el-button>
                                </li>
                            </ul>
                        </template>
                    </el-popover>    
                </li>
                <li v-for="item in menus" :key="item.id">
                    <el-button link @click="handleTopMenuClick(item)">{{ item.menuName }}</el-button>
                </li>
            </ul>
        </div>

        <LoginDialog :showDialog="showLoginDialog" @close="closeLoginDialog"></LoginDialog>
    </div>
</template>

<style lang="scss" scoped>
.top-menu {

    display: flex;
    align-items: stretch;
    height: 100%;

    .brand {

        .btn-brand {
            height: 100%;
        }
    }

    .top-menu-list {
        flex-grow: 1;

        ul {
            list-style: none;
            height: 100%;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;

            li {
                margin: 0 20px;
            }
        }

        .user-avatar {
            cursor: pointer;
        }
    }
}

.popover-setting {
    list-style: none;
    padding-inline-start: 0;

    li {

        &:hover {
            background-color: #f3f3f3;
        }

        .el-button {
            width: 100%;
            height: 30px;

            .el-icon {
                margin: 0 5px;
            }

            span {
                letter-spacing: 2px;
            }
        }
    }
}
</style>