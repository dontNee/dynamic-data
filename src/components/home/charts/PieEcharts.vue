<script lang="ts" setup>
import Api from "../../../api/index";
import { initChart } from '../../../composables/initEchart'

// 获取总配置
const option = Object.assign(Api.getEchartOptions("pie"), Api.getEchartDataset("pie"));
// 初始化图表
initChart("pie-echarts", option);
</script>

<template>
    <div id="pie-echarts" ref="domechart" class="pie-echarts"></div>
</template>

<style scoped>
.pie-echarts {
    width: 100%;
    height: 100%;
}
</style>