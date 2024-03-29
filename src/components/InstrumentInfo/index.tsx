import { useEffect } from "react";
import { init } from "../../utils/echarts";
import { Button, Card, Divider } from "antd";

export default function InstrumentInfo({ info }) {
	useEffect(() => {
		init(info.ai, info.data.xData, info.data.yData);
	}, []);
	return (
		<div style={{ width: "32.5%", margin: "2px 0" }}>
			<Card title="" bordered={false} style={{ height: 300 }}>
				<div id={info.ai} />
				<Divider style={{ margin: "15px 0 3px" }} />
				<p>{info.id}</p>
				<p>
					<Button type="link" style={{ padding: 0 }}>
						{info.ai}
					</Button>
					({info.key})
				</p>
			</Card>
		</div>
	);
}
