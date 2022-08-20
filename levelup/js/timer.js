var countdown;
var timerDisplay = document.querySelector(".display__time-left");
var endTime = document.querySelector(".display__end-time");
var buttons = document.querySelectorAll("[data-time]");

function timer() {
    clearInterval(countdown);

    var now = Date.now();
    var then = now + 30 * 60 * 1000;

    countdown = setInterval(() => {
        var secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimer(secondsLeft)
    }, 1000);
}

function displayTimer(timeSeconds) {
    var minutes = Math.trunc(timeSeconds / 60)
    var seconds = timeSeconds - minutes * 60
    document.getElementById("timer").innerHTML = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
}

timer()