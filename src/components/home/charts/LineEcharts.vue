<script lang="ts" setup>
import Api from "../../../api/index";
import { initChart } from '../../../composables/initEchart'

// 获取总配置
const option = Object.assign(Api.getEchartOptions("line"), Api.getEchartDataset("line"));
// 初始化图表
initChart("line-echarts", option);
</script>

<template>
    <div id="line-echarts" ref="domechart" class="line-echarts"></div>
</template>

<style scoped>
.line-echarts {
    width: 100%;
    height: 100%;
}
</style>