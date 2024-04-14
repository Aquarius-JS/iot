import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { message } from "antd";

export default function Attendance() {
	const [messageApi, contextHolder] = message.useMessage();
	useEffect(() => {
		async function run() {
			const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
			const videoEl = document.getElementById("video") as any;
			videoEl.srcObject = stream;
		}
		run();
		async function init() {
			const MODEL_URL = "/models";
			await faceapi.nets.tinyFaceDetector.load(MODEL_URL);
			await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
			await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
			await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
			// await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
			// await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
			faceapi.tf.dispose();
			faceapi.tf.tidy(() => {
				return 0.5;
			});
		}
		init();
		const options = new faceapi.TinyFaceDetectorOptions({
			inputSize: 416, // 输入的数据源大小，这个值越小，处理速度越快。常用值：128, 160, 224, 320, 416, 512, 608
			scoreThreshold: 0.3, // 用于过滤边界的分数阈值，大于等于这个值才被认为检测到了人脸，然后返回一个detection对象
		});
		async function onPlay() {
			let _t;
			if (_t) clearTimeout(_t);
			const videoEl = document.getElementById("video") as any;
			const testImg = document.getElementById("te") as any;
			if (videoEl.paused || videoEl.ended) {
				setTimeout(() => onPlay());
				return;
			}
			const result = await faceapi
				.detectAllFaces(videoEl, options)
				.withFaceLandmarks()
				.withFaceDescriptors();
			if (result.length === 0) {
				_t = setTimeout(() => onPlay(), 3000);
				return;
			}
			const faceMatcher = new faceapi.FaceMatcher(result);
			let bestMatcher = [1, null];
			for (let i of ["张培.jpg", "张鹏.png"]) {
				const img = document.createElement("img");
				img.src = `/${i}`;
				img.id = i;
				const test = await faceapi
					.detectSingleFace(img)
					.withFaceLandmarks()
					.withFaceDescriptor();
				const best = faceMatcher.findBestMatch(test?.descriptor);
				bestMatcher =
					bestMatcher[0] > best.distance ? [best.distance, i.split(".")[0]] : bestMatcher;
			}
			if (bestMatcher[0] < 0.4) {
				const content = bestMatcher[1] + "打卡成功, " + new Date();
				messageApi.open({
					type: "success",
					content,
				});
			}
			_t = setTimeout(() => onPlay(), 3000);
		}
		onPlay();
	}, []);
	return (
		<div style={{ padding: "20px" }}>
			{contextHolder}
			<div style={{ position: "relative" }}>
				<video id="video" width={500} autoPlay></video>
			</div>
		</div>
	);
}
