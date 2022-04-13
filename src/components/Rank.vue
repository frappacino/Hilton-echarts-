<template>
  <div class="com-container">
    <div class="com-chart" id="rank" style="width: 100%;height:200px;"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                title:{
                    show: true,
                    text: "会员等级",
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
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}%'
                },
                legend:{
                    itemWidth: 8,
                    itemHeight: 8,
                    textStyle: {color: '#ffffff'},
                    orient: 'vertical',
                    x: 'left',
                    y: 'center',
                    data: ['铜卡', '银卡', '白金卡', '金卡', '铂金卡', '钻石卡']
                },
                series: [
                    {
                    name: 'Funnel',
                    type: 'funnel',
                    top: 22,
                    bottom: 4,
                    left: 0,
                    width: '100%',
                    min: 0,
                    max: 100,
                    sort: 'descending',
                    gap: 0,
                    label: {
                        show: false,
                        position: 'left',
                    },
                    itemStyle: {
                        borderWidth: 0
                    },
                    emphasis: {
                        label: {
                        fontSize: 12
                        }
                    },
                    data: [
                        { value: 32, name: '铜卡', itemStyle: {color: '#e5c993'}},
                        { value: 28, name: '银卡', itemStyle: {color: '#f1e1b2'}},
                        { value: 15, name: '白金卡', itemStyle: {color: '#f2e7c7'}},
                        { value: 12, name: '金卡', itemStyle: {color: '#9d783e'}},
                        { value: 9, name: '铂金卡', itemStyle: {color: '#d2b083'}},
                        { value: 4, name: '钻石卡', itemStyle: {color: '#b88d5f'}}
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
            var myChart = this.$echarts.init(document.getElementById('rank'))
            myChart.setOption(this.options);
            window.onresize = function () {
				myChart.resize();
			}
            this.options.series.data = [];
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