import * as faceapi from "face-api.js";

// 初始化Face-api.js
async function initializeFaceAPI() {
	await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
	await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
	await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
}

// 识别图片中的人像
async function detectFacesInImage(imagePath: string) {
	const img = await faceapi.fetchImage(imagePath);
	const detections = await faceapi
		.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
		.withFaceLandmarks()
		.withFaceDescriptors();
	return detections;
}

export { initializeFaceAPI, detectFacesInImage };
