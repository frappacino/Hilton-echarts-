<template>
  <div class="com-container">
    <div class="com-chart" id="store" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            airData: [{
						name: '北京',
						value: 1000
					}, {
						name: '天津',
						value: 800
					}, {
						name: '上海',
						value: 31
					}, {
						name: '重庆',
						value: 66
					}, {
						name: '河北',
						value: 700
					}, {
						name: '河南',
						value: 650
					}, {
						name: '云南',
						value: 11
					}, {
						name: '辽宁',
						value: 50
					}, {
						name: '黑龙江',
						value: 114
					}, {
						name: '湖南',
						value: 700
					}, {
						name: '安徽',
						value: 117
					}, {
						name: '山东',
						value: 1140
					}, {
						name: '新疆',
						value: 84
					}, {
						name: '江苏',
						value: 2100
					},
					{
						name: '浙江',
						value: 84
					}, {
						name: '江西',
						value: 680
					}, {
						name: '湖北',
						value: 850
					}, {
						name: '广西',
						value: 750
					}, {
						name: '甘肃',
						value: 99
					}, {
						name: '山西',
						value: 39
					}, {
						name: '内蒙古',
						value: 58
					}, {
						name: '陕西',
						value: 61
					}, {
						name: '吉林',
						value: 51
					}, {
						name: '福建',
						value: 1330
					}, {
						name: '贵州',
						value: 71
					}, {
						name: '广东',
						value: 2750
					}, {
						name: '青海',
						value: 57
					}, {
						name: '西藏',
						value: 24
					}, {
						name: '四川',
						value: 58
					}, {
						name: '宁夏',
						value: 52
					}, {
						name: '海南',
						value: 54
					}, {
						name: '台湾',
						value: 0
					}, {
						name: '香港',
						value: 66
					}, {
						name: '澳门',
						value: 77
					}, {
						name: '南海诸岛',
						value: 55
					}
				],
            scatterData: [ // 散点的坐标, 使用的是经纬度
				{value: [120.301663, 31.574729]},
				{value: [120.63132, 31.30227]},
				{value: [118.8921, 31.32751]},
				{value: [117.30794, 31.79322]},
				{value: [114.53952, 38.03647]},
				{value: [117.30983, 39.71755]},
				{value: [116.23128, 40.22077]},
				{value: [120.39629, 36.30744]},
				{value: [116.75199, 36.55358]},
				{value: [113.27324, 23.15792]},
				{value: [113.75179, 23.02067]},
				{value: [110.30188, 25.31402]},
				{value: [113.88308, 22.55329]},
				{value: [112.98626, 28.25591]},
				{value: [115.94422, 28.54538]},
				{value: [119.27345, 26.04769]},
				{value: [118.03394, 24.48405]},
				{value: [114.02919, 30.58203]}
			]
        };
    },
    mounted() {
        this.initechart()
    },
    methods: {
        initechart() {
            var myChart6 = this.$echarts.init(document.getElementById('store'))
			// this.$http.get('http://localhost:8999/static/js/china.json').then((res) => {
			   this.$http.get('/static/map/china.json').then((res) => {

                //赋值
                console.log(res);
				var options = {};
				options= {
                geo: {
						
						type: 'map', // map是一个固定的值
						map: 'chinaMap', //chinaMap需要和registerMap中的第一个参数保持一致,
						roam: true,
						label: {
							show: true,
							textStyle: {color: '#d2b083'},
						},
						zoom: 1,
						itemStyle: {
							normal: {
								// // areaColor: "#e5c993",
								// shadowColor: "#e5c993",
								// shadowOffsetX: 0,
								// shadowOffsetY: 10,
								// borderColor: "#f2e7c7",
								// borderWidth: 1.5,
								// areaColor: "#f1e1b2",
							},
							emphasis: {
								areaColor: "#ffffc0",
								borderWidth: 0,
								color: "green",
							},
						},
					},
					title:{
							show: true,
							text: "全国门店分布",
							textStyle: {
								color: "#fff",
								fontSize: 14,
							},
							x: 'left',
							y: '50'
						},

					series: [{
							data: this.airData,
							geoIndex: 0,
							type: 'map',
							showLegendSymbol: false, // 显示图例的颜色标识
						},
						{
							data: this.scatterData,
							type: 'effectScatter',
							coordinateSystem: 'geo',
							// symbolSize:function(data){ return Math.sqrt(data[2])/5e2; },
							itemStyle: {
								color: 'red'
							},
							rippleEffect: {
								scale: 4
							},
						}
					],
					visualMap: {
						min: 0, // 最小值
						max: 2200, // 最大值
						inRange: {
							color: ['white', '#e5c993'] // 颜色的范围
						},
						//     calculable: true // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
					}
            }
                this.$echarts.registerMap('chinaMap', res.data);
				myChart6.setOption(options);
				window.onresize = function () {
					myChart6.resize();
				}
			})			
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