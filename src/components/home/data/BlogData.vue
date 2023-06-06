<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SubTable from '../../subel/SubTable.vue'
import Api from '../../../api/index'
import BlogApi from '../../../api/api-blog'
import * as _ from "lodash"

// 操作列
const operateColumn = {
    // 操作列-prop为空
    prop: "",
    // 操作列-label
    label: "操作",
    // 对齐
    align: "center",
    // render
    render: (createElement: any, params: any) => {
        return createElement('span', [
            // 修改按钮
            createElement('button', {
                class: "text-btn info",
                onClick: () => {
                    handleBlogUpdate(params.row);
                }
            }, "修改"),
            // 删除
            createElement('button', {
                class: "text-btn info",
                onClick: () => {
                    handleBlogDelete(params.row);
                }
            }, "删除")
        ]);
    }
};
// 表格列
const columns = ref(_.concat(Api.getTableColumn('blogTable'), operateColumn));
// 数据
const tableData = ref([]);

onMounted(() => {
    // 初始化博客数据
    initTableData();
})

// 初始化博客数据
function initTableData() {
    // 获取博客列表
    BlogApi.getBlogList({}, (result: any) => {
        // 获取返回结果
        const resultLength = result.data == null ? 0 : result.data.length;
        // 设置结果
        if (resultLength) tableData.value = result.data;
    })
}

// 更新博客
function handleBlogUpdate(row: any) {
    
}
// 删除博客
function handleBlogDelete(row: any) {

}
</script>

<template>
    <div class="blog-data">

        <div class="section">
            <SubTable :columns="columns" :table-data="tableData"></SubTable>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-data {

}
</style>