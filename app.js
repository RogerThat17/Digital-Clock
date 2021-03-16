//jshint esversion: 6

function getCurrentTime() {

    let dateTime = new Date();

    let hour = dateTime.getHours();

    let minute = dateTime.getMinutes();

    let second = dateTime.getSeconds();

    let meridiem = getMeridiem(hour);

    hour = formatHour(hour);

    hour = updateTime(hour);

    minute = updateTime(minute);

    second = updateTime(second);

    let exactTime = hour + " : " + minute + " : " + second + " "+ meridiem;

    document.getElementById("clk").innerHTML = exactTime;

    let interval = setTimeout(function() {
        getCurrentTime();
    }, 1000);
}

function updateTime(timeValue) {
    if (timeValue < 10) {
        return "0" + timeValue;
    } else {
        return timeValue;
    }
}

function formatHour(hourValue) {
    if(hourValue == 0) {
        return 12;
    }
    else if(hourValue > 12) {
        return hourValue - 12;
    }
    else {
        return hourValue;
    }
}

function getMeridiem(hourValue) {
    if(hourValue >= 12) {
        return "PM";
    }
    else {
        return "AM";
    }
}

getCurrentTime();
