import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";

export default function Attendance() {
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
				_t = setTimeout(() => onPlay(), 4000);
				return;
			}
			const faceMatcher = new faceapi.FaceMatcher(result);
			const test = await faceapi
				.detectSingleFace(testImg)
				.withFaceLandmarks()
				.withFaceDescriptor();
			const best = faceMatcher.findBestMatch(test?.descriptor);
			_t = setTimeout(() => onPlay(), 4000);
		}
		onPlay();
	}, []);
	return (
		<div style={{ padding: "20px" }}>
			<div style={{ position: "relative" }}>
				<video id="video" width={500} autoPlay></video>
			</div>
			<img id="te" src="/张培.jpg" alt="test" style={{ display: "none" }} />
		</div>
	);
}
