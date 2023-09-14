const todayDate = document.getElementById('today');
const todayTime = document.getElementById('time');
const timer1 = document.getElementById('timer1');
const timer2 = document.getElementById('timer2');
const timer3 = document.getElementById('timer3');
const button1 = document.getElementById('timer1btn');
const button2 = document.getElementById('timer2btn');
const button3 = document.getElementById('timer3btn');



function getTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    month = month < 10 ? `0${month}` : month
    date = date < 10 ? `0${date}` : date
    hour = hour < 10 ? `0${hour}` : hour
    minute = minute < 10 ? `0${minute}` : minute
    second = second < 10 ? `0${second}` : second
    todayDate.textContent = `${year}년 ${month}월 ${date}일`;
    todayTime.textContent = `${hour}:${minute}:${second}`;
}

getTime();
setInterval(getTime, 1000);



function timercheck(timer, time) {
    function minustime() {
        if (time !== 0) {
            time -= 1000;
            if ((time < 10 * 1000 && time >= 60 * 1000) || ((time-60000) < 10 * 1000 && time >= 60 * 1000)) {
                timer.textContent = `00:0${Math.floor(time/60000)}:0${(time-60000)/1000}`;
            } else if (time >= 10 * 1000 && time >= 60 * 1000) {
                timer.textContent = `00:0${Math.floor(time/60000)}:${(time-60000)/1000}`;
            } else if (time < 10 * 1000 && time < 60 * 1000) {
                timer.textContent = `00:00:0${time/1000}`;
            } else { timer.textContent = `00:00:${time/1000}`; }
        } else {
            alert('타이머가 종료되었습니다.');
            clearInterval(interval);
        }
    }
    let interval = setInterval(minustime, 1000);
}

timer1.textContent = `00:00:30`;
button1.addEventListener('click', () => {timercheck(timer1, 30000)});
timer2.textContent = `00:01:00`;
button2.addEventListener('click', () => {timercheck(timer2, 60000)});
timer3.textContent = `00:02:00`;
button3.addEventListener('click', () => {timercheck(timer3, 120000)});