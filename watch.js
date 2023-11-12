var imag=document.getElementById("im")
var clk=document.getElementById("timer")
var hr=document.getElementById("hours")
var mn=document.getElementById("minutes")
var sc=document.getElementById("seconds")
const time=setInterval(timer,1000)  
function timer(){
    var date=new Date();
    if(date.getHours()<10){
        hr.innerHTML="0"+date.getHours();
    }
    else {
        hr.innerHTML=date.getHours();
    }
mn.innerHTML=(date.getMinutes()<10?"0":"")+date.getMinutes();
sc.innerHTML=(date.getSeconds()<10?"0":"")+date.getSeconds();
}
function red(){
    imag.src="https://i.imgur.com/PTgQlim.png"
}
function black(){
    imag.src="https://i.imgur.com/iOeUBV7.png"
}
function blue(){
    imag.src="https://i.imgur.com/Mplj1YR.png"
}
function pink(){
    imag.src="https://i.imgur.com/Zygu7I3.png"
}
function purple(){
    imag.src="https://i.imgur.com/xSIK4M8.png"
}

