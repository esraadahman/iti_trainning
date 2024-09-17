var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');

var hour = 0;
var minute = 0;
var second = 0;
var count = 0;
var timer = false;

function start() {
    if (!timer) {
        timer = true;
        startBtn.disabled = true; 
        stopWatch();
    }
}
startBtn.addEventListener('click', start);

function stop() {
    timer = false;
    startBtn.disabled = false; 
}
stopBtn.addEventListener('click', stop);

function reset() {
    timer = false;
    startBtn.disabled = false; 
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateDisplay();
}
resetBtn.addEventListener('click', reset);

function updateDisplay() {
    document.getElementById('hr').innerHTML = hour.toString().padStart(2, '0');
    document.getElementById('min').innerHTML = minute.toString().padStart(2, '0');
    document.getElementById('sec').innerHTML = second.toString().padStart(2, '0');
    document.getElementById('count').innerHTML = count.toString().padStart(2, '0');
}

function stopWatch() {
    if (timer) {
        setTimeout(stopWatch, 10); 
        
        count++;

        if (count === 100) {
            second++;
            count = 0;
        }

        if (second === 60) {
            minute++;
            second = 0;
        }

        if (minute === 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        updateDisplay();
    }
}
