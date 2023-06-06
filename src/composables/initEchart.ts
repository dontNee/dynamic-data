import * as echarts from "echarts"
import { onMounted, onUnmounted, ref } from 'vue'

export function initChart(domId: any, option?: any) {
    // 声明一个myChart对象
    let myChart: any = null;
    // 初始化
    function initCharts() {
        // 初始化容器
        myChart = echarts.init(document.getElementById(domId) as HTMLElement);
        // 设置option
        option && myChart.setOption(option);
        // 设置监听
        window.addEventListener("resize", handleResize);
    }
    // 卸载
    function detoryInstance() {
        // 取消监听
        window.removeEventListener("resize", handleResize);
        // 删除元素
        myChart && myChart.dispose();
    }
    // resize
    function handleResize() {
        // 响应容器大小变化
        myChart && myChart.resize();
    }
    // 挂载函数
    onMounted(() => {
        // 初始化图表
        initCharts();
    })
    // 卸载函数
    onUnmounted(() => {
        // 销毁实例
        detoryInstance();
    })

    return { myChart }
}