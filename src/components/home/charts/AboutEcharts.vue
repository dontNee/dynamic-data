<script lang="ts" setup>
import CodeTag from '../../code/CodeTag.vue';
import CodeContent from '../../code/CodeContent.vue'

</script>

<template>
    <div class="about-echarts">
        <h1>Apache ECharts</h1>
        <p>一个基于 JavaScript 的开源可视化图表库</p>

        <div class="section">
            <h2>1.如何绘制一个简单图表</h2>
            <p>在绘图前我们需要为 ECharts 准备一个定义了高宽的 DOM 容器。例如：</p>
            <div>
                <CodeContent>
                    <CodeTag tag="body">
                        <CodeTag tag="div" :attrs="{id: 'main', styles: {width: '600px', height: '400px'}}"></CodeTag>
                    </CodeTag>
                </CodeContent>
            </div>
            <p>然后就可以通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图</p>
            <div>
                <CodeContent>
                    <CodeTag tag="script">
                        <p>// 基于准备好的dom，初始化echarts实例</p>
                        <p>var myChart = echarts.init(document.getElementById('main'));</p>
                        <p>// 指定图表的配置项和数据</p>
                        <p>var option = {...}</p>
                        <p>// 使用刚指定的配置项和数据显示图表。</p>
                        <p>myChart.setOption(option);</p>
                    </CodeTag>
                </CodeContent>
            </div>
        </div>

        <div class="section">
            <h2>2.数据集</h2>
            <p>
                <span>数据集（dataset）是专门用来管理数据的组件。虽然每个系列都可以在 series.data 中设置数据，但是从 ECharts4 支持数据集开始，更推荐使用数据集来管理数据。</span>
                <span>因为这样，数据可以被多个组件复用，也方便进行 “数据和其他配置” 分离的配置风格。毕竟，在运行时，数据是最常改变的，而其他配置大多并不会改变。</span>
            </p>
            <div>
                <CodeContent>
                    <CodeTag tag="script">
                        <p :style="{'text-indent': 0}">
                            <code>
                                1.dataSet: {
                                    source: {...}
                                }
                            </code><br>
                            <code>
                                2.source: [
                                    ['product', '2015', '2016', '2017'],
                                    ['Matcha Latte', 43.3, 85.8, 93.7],
                                    ['Milk Tea', 83.1, 73.4, 55.1],
                                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                                ]
                            </code><br>
                        </p>
                    </CodeTag>
                </CodeContent>
            </div>
        </div>

        <div class="section">
            <h2>3.坐标轴</h2>
            <p>直角坐标系中的 x/y 轴。x 轴和 y 轴都由轴线、刻度、刻度标签、轴标题四个部分组成。部分图表中还会有网格线来帮助查看和计算数据</p>
            <p>
                <img src="../../../assets/charts_axis_img02.jpg" />
            </p>
        </div>

        <div class="section">
            <h2>4.图例</h2>
            <p>图例是图表中对内容区元素的注释、用不同形状、颜色、文字等来标示不同数据列，通过点击对应数据列的标记，可以显示或隐藏该数据列。图例虽然不是图表中的主要信息、却是了解图表信息的钥匙。</p>
            <div>
                <CodeContent>
                    <CodeTag tag="script">
                        <p :style="{'text-indent': 0}">
                            <code>
                                legend: {orient: 'vertical', right: 10, top: 'center'}
                            </code>
                        </p>
                    </CodeTag>
                </CodeContent>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-echarts {

    h1 {
        font-weight: 700;
        font-size: 2rem;
    }

    .section {
        padding: 30px 0;
        border-bottom: 1px solid #aaa;

        h2 {
            padding: 5px 0;
        }

        p {
            margin: 10px 0;
        }

        img {
            height: 320px;
        }
    }
}
</style>