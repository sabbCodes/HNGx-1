const timeEl = document.getElementById("time");
const dayEl = document.getElementById("day");

const currTime = Date.now();

timeEl.innerHTML = currTime;

function getDayOfWeek(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = date.getDay();

    return daysOfWeek[dayIndex];
}

const today = new Date();
const dayOfWeek = getDayOfWeek(today);

dayEl.innerHTML = dayOfWeek;