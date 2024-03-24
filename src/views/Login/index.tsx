import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Flex, FloatButton } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { GIT_URL } from "../../configs";

export default function Login() {
	const navigate = useNavigate();
	const [account, setAccount] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	return (
		<>
			<FloatButton
				icon={<GithubOutlined />}
				type="default"
				style={{ right: 24, top: 10 }}
				href={GIT_URL}
			/>
			<div className="login-container">
				<div className="text">
					<p>
						<span className="title">IOT</span>{" "}
						<span className="sub-title">工业互联网</span>
					</p>
					<p className="sentence">基于万物互联与现代智能的工业一体化系统</p>
				</div>
				<div className="login">
					<div className="icon">登录</div>
					<div className="form">
						<TextField
							label="账号"
							variant="standard"
							value={account}
							onChange={e => {
								setAccount(e.target.value);
							}}
						/>
						<TextField
							label="密码"
							variant="standard"
							type="password"
							value={password}
							onChange={e => {
								setPassword(e.target.value);
							}}
						/>
						<Flex gap="small">
							<Button
								type="primary"
								size="middle"
								onClick={() => {
									navigate("/");
								}}
							>
								登录
							</Button>
							<Button type="link" size="middle">
								注册
							</Button>
						</Flex>
					</div>
				</div>
			</div>
		</>
	);
}
