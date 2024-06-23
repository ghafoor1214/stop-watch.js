var [milliseconds , seconds , minutes , hours] = [0 , 0 , 0 , 0];
var timeRef = document.querySelector(".timer");
var int = null;


document.getElementById("start").addEventListener("click" , () =>{
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer , 10);
});


document.getElementById("pause").addEventListener("click" , () =>{
    clearInterval(int);
});


document.getElementById("Reset").addEventListener("click" , () =>{
    clearInterval(int);
     [milliseconds , seconds , minutes , hours] = [0 , 0 , 0 , 0];
     timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }

    }

var h = hours < 10 ? "0" + hours : hours;
var m = minutes < 10 ? "0" + minutes : minutes;
var s = seconds < 10 ? "0" + seconds : seconds;
var ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;


}