<template>
  <div class="com-container">
    <div class="com-chart" id="area" style="width: 100%;height:200px;"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                title:{
                    show: true,
                    text: "会员地域分布",
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
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    textStyle: {
                        color: '#fff'
                    },
                    data: ['华东', '华南', '东北', '西北', '华中', '西南', '海外', '港澳台'],
                    icon:"circle",
                    itemWidth:8,
                    itemHeight:8,
                },
                series: [
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                        show: true,
                        fontSize: '12',
                        fontWeight: '100'
                        }
                    },
                    data: [
                        { value: 20.83, name: '华东', itemStyle: {color: '#735c3c'}},
                        { value: 20.83, name: '华南', itemStyle: {color: '#ce9d6d'}},
                        { value: 16.67, name: '东北', itemStyle: {color: '#5c4937'}},
                        { value: 12.5, name: '西北', itemStyle: {color: '#6c5d4a'}},
                        { value: 12.5, name: '华中', itemStyle: {color: '#534229'}},
                        { value: 8.33, name: '西南', itemStyle: {color: '#7d776a'}},
                        { value: 4.17, name: '海外', itemStyle: {color: '#7c7461'}},
                        { value: 4.17, name: '港澳台', itemStyle: {color: '#766953'}}
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
            var myChart = this.$echarts.init(document.getElementById('area'))
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