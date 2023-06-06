<script lang="ts" setup>
import SubTable from '../subel/SubTable.vue'
import Api from '../../api/index'
import { computed, ref } from 'vue'
import * as _ from "lodash"
import { useStore } from 'vuex';

// 初始化操作列
const operateColumn = {
    // 操作列-prop为空
    prop: "",
    // 操作列-label
    label: "操作",
    // 对齐
    align: "center",
    // render
    render: (createElement: any, params: any) => {
        // 打印列
        const enable = params.row.enable;
        // 返回btns
        return createElement('span', [
            // 按钮
            createElement('button', {
                class: "text-btn info",
                onClick: () => {
                    handleBtnClick(params.row)
                }
            }, enable ? '设置禁用' : '重新启用')
        ])
    }
}

// 初始化表格列
const columns = ref(_.concat(Api.getTableColumn("menuSetting"), operateColumn));

// 获取仓库
const store = useStore();
// 初始化数据
const tableData = computed(() => store.getters.menuSettingList);
// 处理按钮点击
function handleBtnClick(item: any) {
    // 更换状态
    item.enable = !item.enable;
    // 提交更新
    store.commit('updateTotalMenuById', item);
}
</script>

<template>
    <div class="menu-setting">

        <div class="section">
            <SubTable :columns="columns" :table-data="tableData"></SubTable>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menu-setting {

    .section {

    }
}
</style>