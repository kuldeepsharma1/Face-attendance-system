# Face Recognition Attendance System

A web-based attendance system using TensorFlow.js and FaceAPI.js for face recognition. Teachers can register students' faces, recognize them in real-time, and export attendance records to a CSV file. All data is stored locally in the browser's localStorage.

## Features

- **Face Registration**: Register students' faces with their names.
- **Face Recognition**: Recognize students in real-time using the webcam.
- **Attendance Marking**: Automatically mark attendance for recognized faces.
- **Export to CSV**: Export attendance records to a CSV file.

## Setup

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/kuldeepsharma1/Face-attendance-system.git
    ```
    ```sh
    cd face-recognition-attendance-system
    ```

2. **Serve the `index.html` File Locally**:
    You can use index.html to access:
    ```sh
    index.html
    ```

3. **Access the Application**:
    Open your web browser and navigate to `http://localhost/index.html`.

## Usage

1. **Load the Application**:
    - Open the application in your web browser.
    - Allow access to the webcam if prompted.

2. **Register a Face**:
    - Enter the student's name in the input field.
    - Click the "Register Face" button to capture and store the face data.

3. **Recognize a Face**:
    - Click the "Recognize Face" button.
    - If a registered face is detected, attendance is marked automatically.

4. **Export Attendance**:
    - Click the "Export Attendance" button to download the attendance records as a CSV file.

## Files

- `index.html`: The main HTML file.
- `app.js`: The JavaScript file containing the face recognition logic.
- `face-api.min.js`: The JavaScript file containing the face recognition logic basically library.
- `models/`: Directory containing the face-api.js models.

## Dependencies

- [TensorFlow.js](https://www.tensorflow.org/js)
- [FaceAPI.js](https://justadudewhohacks.github.io/face-api.js/)

## License

This project is licensed under the GNU License. See the [LICENSE](LICENSE) file for details.

---

**Note**: Ensure that the models are correctly placed in the `/models` directory and paths are correctly set up in your local environment.
