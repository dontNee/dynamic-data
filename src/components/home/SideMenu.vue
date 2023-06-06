<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import Api from "../../api/index"
import { useStore } from 'vuex'
import * as _ from 'lodash'

// 使用vuex
const store = useStore()

// 初始化组件内部数据
const menus = ref([] as any[]);

// 初始化数据
function getMenusByRoute(route: string) {
    // 如果当前点击的是侧边栏的导航，则返回
    if (_.findIndex(menus.value, (o: { route: string }) => o.route == route) > -1) {
        return;
    }
    // 重新获取新的侧边栏菜单
    menus.value = store.getters.sideMenuList(route);
    // 更新侧边栏菜单数据
    store.commit("updateSideMenu", { menus: menus.value });
}

// 路由对象
const route = useRoute();
// 侦听器路由变化
watch(() => route.path, (newValue) => {
    // 获取菜单路由
    getMenusByRoute(newValue);
})
// 路由
const router = useRouter();
// 处理点击
function handleSideMenuClick({ route }: { route : string}) {
    // 路由跳转
    route && router.push(route);
}
</script>

<template>
    <div class="side-menu">
        <el-menu>
            <el-menu-item v-for="item in menus" :key="item.id" @click="handleSideMenuClick(item)">
                {{ item && item.menuName }}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
.side-menu {

    height: 100%;
    .el-menu {

        height: 100%;
        overflow-y: auto;
    }
}
</style>