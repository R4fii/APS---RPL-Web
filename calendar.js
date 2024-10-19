// Inisialisasi tanggal saat ini
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthAndYear = document.getElementById("monthAndYear");
const daysContainer = document.getElementById("days");

function renderCalendar(month, year) {
    // Set month and year in header
    monthAndYear.innerHTML = `${months[month]}<br><span style="font-size:18px">${year}</span>`;

    // Get first day of the month and total days in the month
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    // Clear any existing days in the calendar
    daysContainer.innerHTML = "";

    // Mendapatkan tanggal hari ini
    let today = new Date();
    let todayDay = today.getDate();
    let todayMonth = today.getMonth();
    let todayYear = today.getFullYear();

    // Add blank days for the starting weekday (adjust for Monday start)
    let blankDays = firstDay === 0 ? 6 : firstDay - 1;
    for (let i = 0; i < blankDays; i++) {
        daysContainer.innerHTML += `<li></li>`;
    }

    // Populate days in the calendar
    for (let day = 1; day <= daysInMonth; day++) {
        // Check if this day is today and highlight it
        if (day === todayDay && month === todayMonth && year === todayYear) {
            daysContainer.innerHTML += `<li class="highlight">${day}</li>`;
        } else {
            daysContainer.innerHTML += `<li>${day}</li>`;
        }
    }
}

function moveDate(direction) {
    if (direction === 'prev') {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    } else if (direction === 'next') {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    }
    renderCalendar(currentMonth, currentYear);
}

// Render kalender pertama kali dengan bulan dan tahun saat ini
renderCalendar(currentMonth, currentYear);
