var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var ampm = hours >= '12' ? 'pm' : 'am';
var dayWeek = today.getDay();
var nameOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = nameOfWeek[dayWeek];
var month = today.getMonth();
var nameOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthName = nameOfMonth[month];
var day = today.getDate();
var year = today.getFullYear();


// function formatTime(time) {
//     var hours = today.getHours();
//     var minutes = today.getMinutes();
//     var seconds = today.getSeconds();
//     hours = 0 ? hours: 12;
//     hours < 12 ? '0' + hours : hours;
//     minutes < 10 ? '0' + minutes : minutes;
//     seconds < 10 ? '0' + seconds : seconds;
// }


time = hours + ':' + minutes + ':' + seconds + "" + ampm;

date = dayName + ',' + ' ' + monthName + ' ' + day + ',' + ' ' + year;

document.getElementById('time').innerHTML = time;
document.getElementById('date').innerHTML = date;

 
