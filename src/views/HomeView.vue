<script setup lang="ts">
import TopMenu from "../components/home/TopMenu.vue"
import SideMenu from "../components/home/SideMenu.vue"
import Api from "../api/index"
import { RouterView } from 'vue-router'
import { useStore} from 'vuex'
import { computed, onMounted } from "vue";

// 使用store
const store = useStore();
// 展示侧边栏
const showAside = computed(() => {
  return store.state.menu.sideMenu && store.state.menu.sideMenu.length;
})
// 挂载函数
onMounted(() => {
  initMenu();
})

// 初始化菜单数据
function initMenu() {
  // 获取总菜单数据
  Api.getTotalMenuData({}, (resultList: Array<any>) => {
    // 提交更新
    store.commit("updateTotalMenu", { totalMenu: resultList});
  })
}

</script>

<template>

  <el-container class="home-view">

    <el-header>
      <TopMenu></TopMenu>
    </el-header>
    
    <el-container class="home-body">

      <el-aside width="280px" v-show="showAside">
        <SideMenu></SideMenu>
      </el-aside>

      <el-main>
        <RouterView />
      </el-main>

    </el-container>
  </el-container>
</template>


<style lang="scss" scoped>
.home-view {
  width: 100vw;
  height: 100vh;

  .el-header {
    border-bottom: 1px solid #dcdfe6;
  }

  .home-body {
    height: calc(100vh - 60px);
  }
}
</style>