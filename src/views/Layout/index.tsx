import { Layout } from "antd";
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Menu, Watermark } from "antd";
import { StockOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;

export default function Index() {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(false);
	const items = [
		{
			key: "1",
			label: "数据监控",
			icon: <StockOutlined />,
		},
	];
	return (
		<Watermark content="iot 工业互联网" font={{ color: "rgba(0,0,0,0.05)" }}>
			<Layout>
				<Sider
					collapsible
					collapsed={collapsed}
					collapsedWidth={50}
					onCollapse={value => setCollapsed(value)}
					width={150}
					style={{ height: "100vh", position: "sticky", left: 0, top: 0 }}
				>
					<Menu
						theme="dark"
						defaultSelectedKeys={["1"]}
						mode="inline"
						items={items}
						onClick={() => {
							navigate("/instrument_list");
						}}
					/>
				</Sider>
				<Layout>
					<Content style={{ minHeight: "80vh" }}>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Watermark>
	);
}
