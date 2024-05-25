// Define the time table
const timetable = {
    "Monday": [
        { time: "09:00 AM", event: "Class 1", teacher: "Amanda", status: "False" },
        { time: "10:00 AM", event: "Class 2", teacher: "Amanda", status: "False" },
        { time: "10:45 AM", event: "Tea Break" },
        { time: "11:00 AM", event: "Class 3", teacher: "Amanda", status: "False" },
        { time: "12:00 PM", event: "Class 4", teacher: "Amanda", status: "False" },
        { time: "01:00 PM", event: "Lunch Break" },
        { time: "02:00 PM", event: "Class 5", teacher: "Amanda", status: "False" },
        { time: "03:00 PM", event: "Class 6", teacher: "Amanda", status: "False" },
        { time: "04:00 PM", event: "Class 7", teacher: "Amanda", status: "False" },
        { time: "05:00 PM", event: "Class 8", teacher: "Amanda", status: "False" }
    ],
    "Tuesday": [
        { time: "09:00 AM", event: "Class 1", teacher: "Amanda", status: "False" },
        { time: "10:00 AM", event: "Class 2", teacher: "Amanda", status: "False" },
        { time: "10:45 AM", event: "Tea Break" },
        { time: "11:00 AM", event: "Class 3", teacher: "Amanda", status: "False" },
        { time: "12:00 PM", event: "Class 4", teacher: "Amanda", status: "False" },
        { time: "01:00 PM", event: "Lunch Break" },
        { time: "02:00 PM", event: "Class 5", teacher: "Amanda", status: "False" },
        { time: "03:00 PM", event: "Class 6", teacher: "Amanda", status: "False" },
        { time: "04:00 PM", event: "Class 7", teacher: "Amanda", status: "False" },
        { time: "05:00 PM", event: "Class 8", teacher: "Amanda", status: "False" }
    ],
    // Timetables for other days of the week
    "Wednesday": [{ time: "09:00 AM", event: "Class 1", teacher: "Amanda", status: "False" },
    { time: "10:00 AM", event: "Class 2", teacher: "Amanda", status: "False" },
    { time: "10:45 AM", event: "Tea Break" },
    { time: "11:00 AM", event: "Class 3", teacher: "Amanda", status: "False" },
    { time: "12:00 PM", event: "Class 4", teacher: "Amanda", status: "False" },
    { time: "01:00 PM", event: "Lunch Break" },
    { time: "02:00 PM", event: "Class 5", teacher: "Amanda", status: "False" },
    { time: "03:00 PM", event: "Class 6", teacher: "Amanda", status: "False" },
    { time: "04:00 PM", event: "Class 7", teacher: "Amanda", status: "False" },
    { time: "05:00 PM", event: "Class 8", teacher: "Amanda", status: "False" }],
    "Thursday": [  { time: "09:00 AM", event: "Class 1", teacher: "Amanda", status: "False" },
    { time: "10:00 AM", event: "Class 2", teacher: "Amanda", status: "False" },
    { time: "10:45 AM", event: "Tea Break" },
    { time: "11:00 AM", event: "Class 3", teacher: "Amanda", status: "False" },
    { time: "12:00 PM", event: "Class 4", teacher: "Amanda", status: "False" },
    { time: "01:00 PM", event: "Lunch Break" },
    { time: "02:00 PM", event: "Class 5", teacher: "Amanda", status: "False" },
    { time: "03:00 PM", event: "Class 6", teacher: "Amanda", status: "False" },
    { time: "04:00 PM", event: "Class 7", teacher: "Amanda", status: "False" },
    { time: "05:00 PM", event: "Class 8", teacher: "Amanda", status: "False" }],
    "Friday": [  { time: "09:00 AM", event: "Class 1", teacher: "Amanda", status: "False" },
    { time: "10:00 AM", event: "Class 2", teacher: "Amanda", status: "False" },
    { time: "10:45 AM", event: "Tea Break" },
    { time: "11:00 AM", event: "Class 3", teacher: "Amanda", status: "False" },
    { time: "12:00 PM", event: "Class 4", teacher: "Amanda", status: "False" },
    { time: "01:00 PM", event: "Lunch Break" },
    { time: "02:00 PM", event: "Class 5", teacher: "Amanda", status: "False" },
    { time: "03:00 PM", event: "Class 6", teacher: "Amanda", status: "False" },
    { time: "04:00 PM", event: "Class 7", teacher: "Amanda", status: "False" },
    { time: "05:00 PM", event: "Class 8", teacher: "Amanda", status: "False" }],
    "Saturday": [  { time: "09:00 AM", event: "Class 1", teacher: "Amanda", status: "False" },
    { time: "10:00 AM", event: "Class 2", teacher: "Amanda", status: "False" },
    { time: "10:45 AM", event: "Tea Break" },
    { time: "11:00 AM", event: "Class 3", teacher: "Amanda", status: "False" },
    { time: "12:00 PM", event: "Class 4", teacher: "Amanda", status: "False" },
    { time: "01:00 PM", event: "Lunch Break" },
    { time: "02:00 PM", event: "Class 5", teacher: "Amanda", status: "False" },
    { time: "03:00 PM", event: "Class 6", teacher: "Amanda", status: "False" },
    { time: "04:00 PM", event: "Class 7", teacher: "Amanda", status: "False" },
    { time: "05:00 PM", event: "Class 8", teacher: "Amanda", status: "False" }],

};
const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
console.log(today)
const todaysTimetable = timetable[today];

// Function to display the timetable
function displayTimetable() {

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Clear any existing content

    // Iterate through the timetable for today and create table rows
    todaysTimetable.forEach(item => {
        const row = document.createElement('tr');

        // Create table cells for time, event, and teacher
        const timeCell = document.createElement('td');
        timeCell.className = "size-px whitespace-nowrap";
        timeCell.innerHTML = `<div class="px-6 py-2"><span class="text-sm text-gray-600">${item.time}</span></div>`;
        row.appendChild(timeCell);

        const eventCell = document.createElement('td');
        eventCell.className = "size-px whitespace-nowrap";
        eventCell.innerHTML = `<div class="px-6 py-2"><span class="text-sm text-gray-600">${item.event}</span></div>`;
        row.appendChild(eventCell);

        const teacherCell = document.createElement('td');
        teacherCell.className = "size-px whitespace-nowrap";
        if (item.teacher) {
            teacherCell.innerHTML = `<div class="px-6 py-2"><span class="text-sm text-gray-600">${item.teacher}</span></div>`;
        } else {
            teacherCell.innerHTML = `<div class="px-6 py-2"><span class="text-sm text-gray-600"></span></div>`;
        }
        row.appendChild(teacherCell);

        const statusCell = document.createElement('td');
        statusCell.className = "size-px whitespace-nowrap";
        if (item.status) {
            statusCell.innerHTML = `<div class="px-6 py-2"><span class="text-sm text-gray-600">${item.status}</span></div>`;
        } else {
            statusCell.innerHTML = `<div class="px-6 py-2"><span class="text-sm text-gray-600"></span></div>`;
        }
        row.appendChild(statusCell);
        // Append the row to the table body
        tbody.appendChild(row);
    });
}
const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');

// Function to update the time
function updateTime() {
    const currentTime = new Date();
    dateElement.textContent = currentTime.toLocaleDateString('en-US');
    timeElement.textContent = currentTime.toLocaleTimeString('en-US');
}

// Update the time immediately
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Display the timetable when the page loads
window.addEventListener('load', displayTimetable);



