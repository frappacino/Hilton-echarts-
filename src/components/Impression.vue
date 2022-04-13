<template>
  <div class="com-container">
    <div class="com-chart" id="impression" style="width: 100%;height:200px;"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                title:{
                    show: true,
                    text: "酒店印象",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14,
                    },
                    x: 'center',
                    y: 0
                },
                textStyle: {
                    color: "#ffffff"
                },
                radar: {
                    center: ['50%', '60%'],
                    radius: 70,
                    shape: 'circle',
                    indicator: [
                    { name: '设施全面'},
                    { name: '服务热情'},
                    { name: '干净整洁'},
                    { name: '性价比高'},
                    { name: '房间大'},
                    { name: '位置好'}
                    ],
                    startAngle: 0,
                    name: {
                        textStyle: {
                            fontSize: 10,
                            color: '#f1e1b2'
                        }
                    },
                    axisLine: { // (圆内的几条直线)坐标轴轴线相关设置
                        lineStyle: {
                            color: '#f2e7c7',
                            // 坐标轴线线的颜色。
                            width: 1,
                            // 坐标轴线线宽。
                            type: 'solid',
                            // 坐标轴线线的类型。
                        }
                    },
                    splitLine: { // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
                        lineStyle: {
                            color: '#ffffff',
                            // 分隔线颜色
                            width: 1,
                            // 分隔线线宽
                        }
                    }
                },
                series: [
                    {
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#e5c993' // 图表中各个图区域的边框线颜色
                                },
                                areaStyle: {
                                    color: '#f1e1b2'
                                }
                            }
                        },
                        type: 'radar',
                        data: [
                            {
                                value: [5000, 4000, 5000, 4000, 4000, 3000]
                            }
                        ]
                    }
                ]   
            }
        };
    },
    mounted() {
        this.initechart()
    },
    methods: {
        initechart() {
            var myChart = this.$echarts.init(document.getElementById('impression'))
            myChart.setOption(this.options);
            window.onresize = function () {
				myChart.resize();
			}
        }
    }
}
</script>

<style>
.com-chart {
    display: flex;
    justify-content: center;
}
</style>