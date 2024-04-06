import { useEffect } from "react";
import * as faceapi from "face-api.js";

export default function NewPerson() {
	useEffect(() => {
		async function run() {
			const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
			const videoEl = document.getElementById("video") as any;
			videoEl.srcObject = stream;
		}
		run();
		async function init() {
			const MODEL_URL = "/models";
			faceapi.nets.tinyFaceDetector.load(MODEL_URL);
			faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
			faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
			faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
			faceapi.tf.dispose();
			faceapi.tf.tidy(() => {
				return 0.5;
			});
			faceapi.matchDimensions(document.getElementById("canvas") as any, {
				width: 300,
				height: 300,
			});
		}
		init();
		const options = new faceapi.TinyFaceDetectorOptions({
			inputSize: 416, // 输入的数据源大小，这个值越小，处理速度越快。常用值：128, 160, 224, 320, 416, 512, 608
			scoreThreshold: 0.3, // 用于过滤边界的分数阈值，大于等于这个值才被认为检测到了人脸，然后返回一个detection对象
		});
		async function onPlay() {
			const videoEl = document.getElementById("video") as any;

			if (videoEl.paused || videoEl.ended) {
				setTimeout(() => onPlay());
				return;
			}

			const result = await faceapi.detectAllFaces(videoEl, options);

			if (result) {
				const canvas = document.getElementById("canvas") as any;
				const dims = faceapi.matchDimensions(canvas, videoEl, true);
				faceapi.draw.drawDetections(canvas, faceapi.resizeResults(result, dims));
			}
			setTimeout(() => onPlay(),500);
		}
		onPlay();
	}, []);
	return (
		<div>
			<div style={{ position: "relative" }}>
				<video id="video" width={640} height={480} autoPlay></video>
				<canvas
					id="canvas"
					style={{ position: "absolute", left: 0, top: 0 }}
					width={460}
					height={300}
				/>
			</div>
		</div>
	);
}
