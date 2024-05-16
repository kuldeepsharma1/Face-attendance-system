const video = document.getElementById('video');

async function setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 720, height: 560 }
    });
    video.srcObject = stream;
    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
}

async function loadModels() {
    await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    ]);
    console.log("Models Loaded");
}

async function start() {
    await setupCamera();
    await loadModels();
    console.log("Camera and models are ready.");
}

start();

const registerButton = document.getElementById('register');
const nameInput = document.getElementById('name');

registerButton.addEventListener('click', async () => {
    const name = nameInput.value;
    if (!name) {
        alert('Please enter a name');
        return;
    }

    const faceDescriptor = await detectFace();
    if (faceDescriptor) {
        const registeredFaces = JSON.parse(localStorage.getItem('registeredFaces')) || [];
        registeredFaces.push({ name: name, descriptor: Array.from(faceDescriptor) });
        localStorage.setItem('registeredFaces', JSON.stringify(registeredFaces));
        alert('Face registered successfully!');
    }
});

async function detectFace() {
    const options = new faceapi.TinyFaceDetectorOptions();
    const detections = await faceapi.detectSingleFace(video, options).withFaceLandmarks().withFaceDescriptor();

    if (detections) {
        return detections.descriptor;
    }
    alert('No face detected. Please try again.');
    return null;
}

const recognizeButton = document.getElementById('recognize');

recognizeButton.addEventListener('click', async () => {
    const faceDescriptor = await detectFace();
    if (faceDescriptor) {
        const registeredFaces = JSON.parse(localStorage.getItem('registeredFaces')) || [];
        const labeledDescriptors = registeredFaces.map(f => new faceapi.LabeledFaceDescriptors(f.name, [new Float32Array(f.descriptor)]));
        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);

        const bestMatch = faceMatcher.findBestMatch(faceDescriptor);
        if (bestMatch.label !== 'unknown') {
            markAttendance(bestMatch.label);
            alert(`Face recognized! Attendance marked for ${bestMatch.label}.`);
        } else {
            alert('Face not recognized.');
        }
    }
});

function markAttendance(name) {
    const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    const date = new Date().toISOString().split('T')[0];
    attendanceRecords.push({ name: name, date: date });
    localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
}

const exportButton = document.getElementById('export');

exportButton.addEventListener('click', () => {
    const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    const csvContent = "data:text/csv;charset=utf-8," 
        + ["Name,Date"].concat(attendanceRecords.map(record => `${record.name},${record.date}`)).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance.csv");
    document.body.appendChild(link);
    link.click();
});
