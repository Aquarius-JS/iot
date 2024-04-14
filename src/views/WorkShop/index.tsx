import { Divider, Layout } from "antd";
const { Content, Header } = Layout;
import InstrumentInfo from "../../components/InstrumentInfo";
import { data, personNum } from "../../stores/instrumentList";

export default function workshop() {
	return (
		<div>
			<Header
				style={{
					padding: 0,
					backgroundColor: "white",
					position: "sticky",
					left: 0,
					top: 0,
					zIndex: 99,
				}}
			></Header>
			<Content
				style={{
					display: "flex",
					justifyContent: "flex-start",
					flexWrap: "wrap",
					gap: 10,
					padding: 13,
				}}
			>
				<Divider orientation="left" plain>
					环境检测数据
				</Divider>
				{data.map(item => (
					<InstrumentInfo info={item} key={item.ai} />
				))}
				<Divider orientation="left" plain>
					车间人数表
				</Divider>
				{personNum.map(item => (
					<InstrumentInfo info={item} key={item.ai} />
				))}
			</Content>
		</div>
	);
}
