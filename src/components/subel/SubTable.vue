<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import SubRender from './SubRender.vue';

interface Column {
    // 属性
    prop: string,
    // 标签
    label: string,
    // 渲染函数
    render: any,
    // 对其
    align: string
}
// 定义props
const props = defineProps({
    // 列
    columns: {
        type: Array<Column>,
        default() {
            return [];
        }
    },
    // 数据
    tableData: {
        type: Array,
        default() {
            return [];
        }
    }
})
// 创建列的响应式对象
const columns = ref([] as Column[]);
// 创建数据的响应式对象
const dataSource = ref([] as any[]);
// 挂载函数
onMounted(() => {
    initData();
})
// 初始化数据
function initData() {
    // 获取父组件传入的columns
    const columnsLength = props.columns == null ? 0 : props.columns.length;
    // 判断是否为空
    if (columnsLength) {
        // 获取组件内部的列
        columns.value = props.columns.slice();
    }
}
// 初始化表格数据
function initTableData() {
    // 获取父组件传入的数据
    const tableDataLength = props.tableData == null ? 0 : props.tableData.length;
    // 判断是否为空
    dataSource.value = tableDataLength ? props.tableData.slice() : [];
}

watch(() => props.tableData, initTableData, { immediate: true })
</script>

<template>
    <el-table :data="dataSource" :border="true" style="width: 100%">
        <el-table-column type="index" label="序号" width="75px" align="center"></el-table-column>
        <el-table-column v-for="item in columns" 
            :prop="item.prop" 
            :label="item.label" 
            :show-overflow-tooltip="true"
            :align="item.align"
        >
            <template #default="scope">
                <div v-if="item.prop">
                    <span>{{ scope.row[item.prop] }}</span>
                </div>
                <div v-else>
                    <SubRender :render="item.render" :params="scope" />
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>