import { Layout } from "antd";
const { Content, Header } = Layout;
import InstrumentInfo from "../../components/InstrumentInfo";
import { data } from "../../stores/instrumentList";

export default function InstrumentList() {
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
			<Content style={{ display: "flex", justifyContent: "space-around" }}>
				{data.map(item => (
					<InstrumentInfo
						info={item}
						key={item.ai}
					/>
				))}
			</Content>
		</div>
	);
}
