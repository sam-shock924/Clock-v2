function showTimeDate() {
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
    
    //12 hour format
    hours = hours > 12 ? hours - 12 : hours;

    //leading zeroes
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    //bring it all together now 
    time = hours + ':' + minutes + ':' + seconds + "" + ampm;
    date = dayName + ',' + ' ' + monthName + ' ' + day + ',' + ' ' + year;
    

    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;

}


setInterval(showTimeDate, 1000);
