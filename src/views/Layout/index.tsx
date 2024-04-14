import { Layout } from "antd";
import { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Menu, Watermark } from "antd";
import {
	ApiOutlined,
	DeploymentUnitOutlined,
	StockOutlined,
	TeamOutlined,
	UserAddOutlined,
	VideoCameraOutlined,
	SolutionOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

export default function Index() {
	const navigate = useNavigate();
	const location = useLocation();
	const [collapsed, setCollapsed] = useState(false);
	const [current, setCurrent] = useState(location.pathname);
	console.log(location);
	const items = [
		{
			key: "/workshop",
			label: "数据监控",
			icon: <DeploymentUnitOutlined />,
		},
		{
			key: "/instrument_list",
			label: "数据报表",
			icon: <StockOutlined />,
		},
		{
			key: "/equipment",
			label: "设备管理",
			icon: <ApiOutlined />,
		},
		{
			key: "/person_info",
			label: "人员信息",
			icon: <TeamOutlined />,
			children: [
				{
					key: "/person_info/new",
					label: "信息录入",
					icon: <UserAddOutlined />,
				},
				{
					key: "/person_info/monitoring",
					label: "车间监控",
					icon: <VideoCameraOutlined />,
				},
				{
					key: "/attendance",
					label: "人脸打卡",
					icon: <SolutionOutlined />,
				},
			],
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
					width={180}
					style={{ height: "100vh", position: "sticky", left: 0, top: 0 }}
				>
					<Menu
						theme="dark"
						defaultSelectedKeys={["/person_info"]}
						selectedKeys={[current]}
						items={items}
						mode="inline"
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
