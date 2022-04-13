<template>
  <div class="com-container">
    <div class="com-chart" id="room" style="width: 100%;height:250px;"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            scatterList: [],
            options: {
                title:{
                    show: true,
                    text: "热门房型销量及实时余量",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    },
                    x: 'center',
                    y: 16
                },
                textStyle: {
                    color: "#ffffff"
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['商务大床房', '温馨双床房', '钟点房', '河景大床房', '特惠单人房', '河景三人房', 'LOFT大床房'],
                   
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                grid: {
                    x: 80
                },
                series: [
                    {
                        name: "salesall",
                        data: [70,33,40,50,63,25,46],
                        stack: 'total',//堆叠
                        type: 'bar',
                        itemStyle: {
                            color: "#dec592",
                            // barBorderRadius:[0, 6, 6, 0]
                        }
                    },
                    {
                        name: "salesrest",
                        data: [5,15,12,15,12,14,7],
                        stack: 'total', //堆叠
                        type: 'bar',
                        itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                        itemStyle: {
                            color: "#c19d6d",
                            // barBorderRadius:[0, 6, 6, 0]
                        }
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
            var myChart = this.$echarts.init(document.getElementById('room'))
            myChart.setOption(this.options);
            window.onresize = function () {
				myChart.resize();
			}
        },
    }
}
</script>

<style>
.com-chart {
    display: flex;
    justify-content: center;
}
</style>