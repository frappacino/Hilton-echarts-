<template>
  <div class="com-container">
    <div class="com-chart" id="price" style="width: 100%;height:250px;"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                title:{
                    show: true,
                    text: "热门房型价格变化",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    },
                    x: 'center'
                },
                textStyle: {
                    color: "#ffffff"
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend:{
                    itemWidth: 12,
                    itemHeight: 8,
                    textStyle: {color: '#ffffff'},
                    x: 'center',
                    y: '24',
                    data: ['温馨双床房', 'LOFE大床房', '商务大床房', '金卡', '铂金卡', '钻石卡']
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '温馨双床房',
                        data: [199, 204, 99, 250, 159, 300, 329],
                        type: 'line',
                        itemStyle: {color: '#e5c993'}
                    },
                    {
                        name: 'LOFE大床房',
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line',
                        itemStyle: {color: '#d2b083'}
                    },
                    {
                        name: '商务大床房',
                        data: [229, 347, 259, 159, 150, 250, 199],
                        type: 'line',
                        itemStyle: {color: '#9d783e'}
                    },
                ]
            }
        };
    },
    mounted() {
        this.initechart()
    },
    methods: {
        initechart() {
            var myChart = this.$echarts.init(document.getElementById('price'))
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