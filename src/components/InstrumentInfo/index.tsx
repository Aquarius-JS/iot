import { useEffect } from "react";
import { init } from "../../utils/echarts";
import Card from "antd/es/card/Card";

export default function InstrumentInfo({ info }) {
	useEffect(() => {
		init(info.ai, info.data.xData, info.data.yData);
	}, []);
	return (
		<div style={{ width: "32.5%", margin: "15px 0"}}>
			<Card title="" bordered={false} style={{height:300}}>
				<div id={info.ai} />
			</Card>
		</div>
	);
}
