import { ExclamationOutlined } from "@ant-design/icons";
import { Button, Input, Tag } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useRef } from "react";

export default function NewPerson() {
	const videoEl = useRef(null);
	const wrapper = useRef(null);

	const shoot = () => {
		if (!videoEl || !wrapper) return;
		console.log(wrapper.current);
		const canvas = document.createElement("canvas");
		canvas.width = videoEl.current.videoWidth;
		canvas.height = videoEl.current.videoHeight;
		//拿到 canvas 上下文对象
		const ctx = canvas.getContext("2d");
		ctx?.drawImage(videoEl.current, 0, 0, canvas.width, canvas.height);
		wrapper.current.innerHTML = "";
		wrapper.current.appendChild(canvas);
	};

	useEffect(() => {
		async function checkCamera() {
			const navigator = window.navigator.mediaDevices;
			const devices = await navigator.enumerateDevices();
			if (devices) {
				const stream = await navigator.getUserMedia({
					audio: false,
					video: {
						width: 300,
						height: 300,
						// facingMode: { exact: "environment" }, //强制后置摄像头
						facingMode: "user", //前置摄像头
					},
				});
				if (!videoEl.current) return;
				videoEl.current.srcObject = stream;
				videoEl.current.play();
			}
		}
		checkCamera();
	});
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "10px",
					alignItems: "center",
				}}
			>
				<div style={{ position: "relative" }}>
					<video src="" ref={videoEl}></video>
					<Button
						onClick={shoot}
						style={{
							position: "absolute",
							left: "50%",
							top: "80%",
							translate: "-50% 0",
						}}
					>
						拍摄
					</Button>
				</div>
				<span ref={wrapper}></span>
			</div>
			<div
				style={{
					width: 300,
					display: "flex",
					gap: "15px",
					flexDirection: "column",
					padding: "20px 0",
				}}
			>
				<Input addonBefore="No." placeholder="输入工号" />
				<Input addonBefore="姓名" placeholder="输入姓名" />
				<TextArea placeholder="备注" autoSize={{ minRows: 1, maxRows: 5 }} />
				<Button type="primary" block>
					录入
				</Button>
				<Tag icon={<ExclamationOutlined />} bordered={false}>
					注意:相同工号会覆盖已有数据
				</Tag>
			</div>
		</div>
	);
}
