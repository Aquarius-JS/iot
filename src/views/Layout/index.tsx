import { Layout } from "antd";
import { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Menu, Watermark } from "antd";
import { ApiOutlined, DeploymentUnitOutlined, StockOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;

export default function Index() {
	const navigate = useNavigate();
	const location = useLocation();
	const [collapsed, setCollapsed] = useState(false);
	const [current, setCurrent] = useState(location.pathname);
	console.log(location);
	const items = [
		{
			key: "/instrument_list",
			label: "数据监控",
			icon: <StockOutlined />,
		},
		{
			key: "/workshop",
			label: "车间数据监控",
			icon: <DeploymentUnitOutlined />,
		},
		{
			key: "/equipment",
			label: "设备管理",
			icon: <ApiOutlined />,
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
						selectedKeys={[current]}
						items={items}
						onClick={e => {
							navigate(e.key);
							setCurrent(e.key);
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
