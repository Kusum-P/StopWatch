let timer=document.querySelector('.timerdisplay');
let Resetbtn=document.getElementById('Resetbtn');
let Stopbtn =document.getElementById('Stopbtn');
let Startbtn =document.getElementById('Startbtn');

let min = 00;
let sec = 00;
let milsec = 00;

let timerID = null;

Startbtn.addEventListener('click', function(){
    if (timerID !== null){
        clearInterval(timerID);
    }
    timerID = setInterval(start, 10);
});

Stopbtn.addEventListener('click', function(){
    clearInterval(timerID);
});

Resetbtn.addEventListener('click', function(){
        clearInterval(timerID);
    timer.innerHTML = `00 : 00 : 00` ;
    milsec=sec=min= 0;
});

function start(){
    milsec++;
    if (milsec == 100){
        milsec = 0;
        sec++;
        if (sec == 60){
            sec = 0;
            min++;
        }
    }

    let mes = milsec < 10 ? `0${milsec}` : milsec ;
    let secStr = sec < 10 ? `0${sec}` : sec ;
    let minStr = min < 10 ? `0${min}` : min ;

    timer.innerHTML = `${minStr} : ${secStr} : ${mes}`;
}