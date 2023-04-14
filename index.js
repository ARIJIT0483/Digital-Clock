const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const milisecondsEl = document.getElementById("miliseconds")
const ampmEl = document.getElementById("ampm")
function clock (){
 let h = new Date().getHours()
 let m = new Date().getMinutes()
 let s = new Date().getSeconds()
 let ms = new Date().getMilliseconds()
 let ampm = "AM"
 if(h>12){
    h = h - 12;
   ampm = "PM";
 }
 h = h<10 ? "0"+ h : h
 m = m<10 ? "0"+ m : m
 s = s<10 ? "0"+ s : s
 ms = ms<10 ? "0"+ ms : ms
 hoursEl.innerText = h
 minutesEl.innerText = m
 secondsEl.innerText = s
//  milisecondsEl.innerText = ms
 ampmEl.innerText = ampm
 setTimeout(()=>{
    clock()
 },1)
}
clock()