<script lang="ts" setup>
import * as echarts from "echarts"
import { onMounted, onUnmounted } from 'vue';
import { useEventListener } from '../../../composables/useEventListener'
import Api from "../../../api";
// echarts实例对象
let myChart: any = null;
// 挂载函数
onMounted(() => {
    initChart();
})
// 卸载函数
onUnmounted(() => {
    destoryChart();
})
// 初始化图表
function initChart() {
    // 初始化容器
    myChart = echarts.init(document.getElementById("map-echarts") as HTMLElement);
    // 注册地图
    Api.getMapJson("100000").then((res: { data: any }) => {
        // 地图类型
        const mapType = "currentmap";
        // 注册地图
        echarts.registerMap(mapType, res.data);
        // 配置
        myChart.setOption({
            series: [{
                type: "map",
                map: mapType
            }]
        });
    });
}
// 销毁图表
function destoryChart() {
    // 销毁图表实例
    myChart && myChart.dispose();
}
// resize
function handleResize() {
    // 响应容器大小变化
    myChart && myChart.resize();
}
// 注册事件监听
useEventListener(window, 'resize', handleResize);
</script>

<template>
    <div id="map-echarts" ref="domecharts" class="map-echarts"></div>
</template>

<style scoped>
.map-echarts {
    width: 100%;
    height: 100%;
}
</style>