<script setup lang="ts">
import Api from "../../../api/index";
import { initChart } from '../../../composables/initEchart'

// 获取总配置
const option = Object.assign(Api.getEchartOptions("bar"), Api.getEchartDataset("bar"));
// 初始化图表
initChart("bar-echarts", option);
</script>

<template>
    <div id="bar-echarts" ref="domechart" class="bar-echarts"></div>
</template>

<style lang="scss" scoped>
.bar-echarts {
    width: 100%;
    height: 100%;
}
</style>