<script lang="ts" setup>
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router'
import { useStore } from 'vuex';
// 仓库
const store = useStore();
// router
const router = useRouter();
// 挂载函数
onMounted(() => {
    // 重定向路由
    redirectRoute();
})
// 重定向路由
function redirectRoute() {
    // 获取侧边栏菜单
    const sideMenuList = store.state.menu.sideMenu;
    // 重定向
    sideMenuList[0] && router.push(sideMenuList[0].route);
}
</script>

<template>
    <RouterView></RouterView>
</template>