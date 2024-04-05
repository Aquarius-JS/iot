import { Button, Input, Table } from "antd";
import { equipmentList } from "../../stores/equipment";
export default function EquipmentList() {
	const columns = [
		{
			title: "设备id",
			dataIndex: "key",
			width: 150,
			fixed: "left",
			render: id => <a>{id}</a>,
		},
		{
			title: "工厂",
			dataIndex: "factory",
			width: 150,
		},
		{
			title: "车间",
			dataIndex: "workShop",
			width: 150,
		},
		{
			title: "网关",
			dataIndex: "internetAdd",
			width: 150,
		},
		{
			title: "地址",
			dataIndex: "address",
			width: 150,
		},
		{
			title: "Action",
			key: "operation",
			fixed: "right",
			width: 100,
			render: () => <a>action</a>,
		},
	];
	return (
		<div>
			<div
				style={{
					height: "50px",
					display: "flex",
					alignItems: "center",
					gap: 10,
					padding: "0 20px",
				}}
			>
				<Input placeholder=" 设备id/车间名称" style={{ width: 300 }} />
				<Button value="larger" type="primary">
					搜索
				</Button>
				<Button value="larger" type="primary">
					新增设备
				</Button>
			</div>
			<div style={{ margin: "20px" }}>
				<Table
					columns={columns}
					dataSource={equipmentList}
					pagination={{ pageSize: 50 }}
					scroll={{ y: 600 }}
				/>
			</div>
		</div>
	);
}
