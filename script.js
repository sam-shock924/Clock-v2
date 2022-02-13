// function showTimeDate() {
//     var today = new Date();
//     var hours = today.getHours();
//     var minutes = today.getMinutes();
//     var seconds = today.getSeconds();
//     var ampm = hours >= '12' ? 'pm' : 'am';
//     var dayWeek = today.getDay();
//     var nameOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     var dayName = nameOfWeek[dayWeek];
//     var month = today.getMonth();
//     var nameOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     var monthName = nameOfMonth[month];
//     var day = today.getDate();
//     var year = today.getFullYear();    
    
//     //12 hour format
//     hours = hours > 12 ? hours - 12 : hours;

//     //leading zeroes
//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;


//     //bring it all together now 
//     time = hours + ':' + minutes + ':' + seconds + "" + ampm;
//     date = dayName + ',' + ' ' + monthName + ' ' + day + ',' + ' ' + year;
    

//     document.getElementById('time').innerHTML = time;
//     document.getElementById('date').innerHTML = date;

// }


// setInterval(showTimeDate, 1000);


function showTime() {
    const time = new Date();
    let hours = addLeadingZero(time.getHours());
    const minutes = addLeadingZero(time.getMinutes());
    const seconds = addLeadingZero(time.getSeconds());
    const isAm = hours < 12 || hours === 0;
    const amPm = isAm ? 'AM' : 'PM';
    const timeDisplay = `${formatHour(hours)}:${minutes}:${seconds} ${amPm}`;

    document.getElementById('time').textContent = timeDisplay;
}

function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
    hour = hour >= 13 ? hour - 12 : hour;
    hour = hour === 0 ? hour + 12 : hour;
    return hour;
}

function showDate() {
    const today = new Date();
    const day = dayOfWeek[today.getDay()];
    const month = nameOfMonth[today.getMonth()];
    const date = appendDateSuffix(today.getDate());
    const year = today.getFullYear();
    const dateDisplay = `${day}, ${month} ${date}, ${year}`;
    document.getElementById('date').textContent = dateDisplay;
}

function appendDateSuffix(date) {
    if (date < 10 || date > 20) {
        switch (date % 10) {
            case 1:
                return `${date}st`;
            case 2:
                return `${date}nd`;
            case 3:
                return `${date}rd`;
        }
    }
    return `${date}th`;
}

const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const nameOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

showTime();
showDate();

setInterval(() => {
    showTime();
    showDate();
}, 1000);