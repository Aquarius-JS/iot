import * as echarts from "echarts";

export const init = (id: string, xData: string[], yData: number[]) => {
	const chartDom = document.getElementById(id);
	const myChart = echarts.init(chartDom, 'light', {
		height: 180,
	});
	window.addEventListener("resize", function () {
		myChart.resize();
	});
	const option = {
		xAxis: {
			type: "category",
			data: xData,
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: yData,
				type: "line",
				smooth: true,
			},
		],
		grid: {
			left: 0,
			right: 0,
			top: 10,
			bottom: 0,
			containLabel: true, // 如果使用 `containLabel: true`，则会保证标签（label）不会溢出容器
		},
	};

	option && myChart.setOption(option);
};
