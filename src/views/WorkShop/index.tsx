import { Divider, Flex, Layout } from "antd";
import { AndroidOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
const { Content, Header } = Layout;

export default function workshop() {
	const [data, setData] = useState([
		{
			id: "001",
			name: "1号生产车间",
			wendu: 21.3,
			shidu: 56.1,
			phoneNum: 7,
		},
		{
			id: "002",
			name: "2号生产车间",
			wendu: 24.1,
			shidu: 52.4,
			phoneNum: 11,
		},
		{
			id: "003",
			name: "4号生产车间",
			wendu: 19.6,
			shidu: 63.3,
			phoneNum: 8,
		},
		{
			id: "005",
			name: "4号生产车间",
			wendu: 21.4,
			shidu: 59.1,
			phoneNum: 8,
		},
		{
			id: "004",
			name: "8号生产车间",
			wendu: 20.0,
			shidu: 48.2,
			phoneNum: 3,
		},
	]);
	useEffect(() => {
		const _i = setInterval(() => {
			setData(state => {
				const result = state.map(item => {
					return {
						...item,
						wendu: parseFloat(
							(
								item.wendu +
								(Math.random() > 0.8 ? parseFloat(Math.random().toFixed(1)) : 0)
							).toFixed(1)
						),
						shidu: parseFloat(
							(
								item.shidu +
								(Math.random() > 0.8 ? parseFloat(Math.random().toFixed(1)) : 0)
							).toFixed(1)
						),
					};
				});
				console.log(result);
				return result;
			});
		}, 1000 * 3);
		return () => clearInterval(_i);
	}, []);
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
				{data.map(item => (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							padding: "10px",
							gap: "10px",
							border: "0.2px #fafafa solid",
							borderRadius: "4px",
							backgroundColor: "white",
						}}
						key={item.id}
					>
						<div style={{ display: "flex" }}>
							<p style={{ width: "60px" }}>
								<span style={{ color: "#237804", fontWeight: 600 }}>
									{item.wendu}{" "}
								</span>
								<span>℃</span>
							</p>
							<p style={{ width: "60px" }}>
								{" "}
								<span style={{ color: "#0958d9", fontWeight: 600 }}>
									{item.shidu}
								</span>{" "}
								RH
							</p>
							<p style={{ color: "#08979c" }}>
								{item.phoneNum} <AndroidOutlined />
							</p>
						</div>
						<div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
							<p
								style={{
									boxSizing: "content-box",
									width: 5,
									height: 5,
									padding: 5,
									backgroundColor: "#389e0d",
									backgroundClip: "content-box",
									borderRadius: "50%",
									outline: "0.4px #f6ffed gray",
								}}
							></p>
							<span style={{ color: "gray", fontSize: "10px" }}>{item.name}</span>
						</div>
					</div>
				))}
			</Content>
		</div>
	);
}
