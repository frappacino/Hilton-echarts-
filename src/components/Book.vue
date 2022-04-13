<template>
  <div class="com-container">
    <div class="com-chart" id="bookChart" style="width: 100%;height:200px;"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                animation: true,
				animationDuration: 2000,
				animationEasing : 'bounceOut',
                title:{
                    show: true,
                    text: "近10天入住率",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    },
                    x: 'center'
                },
                textStyle: {
                    color: "#ffffff"
                },
                legend: {
                    show: true,
                    data: ["普通入住", "会员入住"],
                    bottom: "2%",
                    textStyle: {
                        color: "#fff",
                        fontSize: 10
                    },
                    itemWidth: 8,
                    itemHeight: 8,
                    selected: {
                        "普通入住": true, "会员入住": true
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['10.15', '10.16', '10.17', '10.18', '10.19', '10.20', '10.21', '10.22', '10.23', '10.24'],
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            fontSize: 10
                        }
                    }
                },
                yAxis: {
                    type: 'value'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                series: [
                    {
                        name: "普通入住",
                        data: [195, 285, 275, 280, 330, 350, 346, 325, 300, 285],
                        type: 'bar',
                        itemStyle: {
                            color: "#dec592",
                            barBorderRadius:[20,20, 0, 0]
                        }
                    },
                    {
                        name: "会员入住",
                        data: [200, 300, 250, 295, 389, 395, 385, 350, 310, 288],
                        type: 'bar',
                        itemStyle: {
                            color: "#ebdaaf",
                            barBorderRadius:[20,20, 0, 0]
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
            var myChart = this.$echarts.init(document.getElementById('bookChart'))
            myChart.setOption(this.options);
            window.onresize = function () {
				myChart.resize();
			}
        }
    }
};
</script>

<style lang="less" scoped>
.com-chart {
    display: flex;
    justify-content: center;
}
</style>