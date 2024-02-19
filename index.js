let x = 10;

const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + x);

const d = document.getElementById("day");
const h = document.getElementById("hour");
const m = document.getElementById("min");
const s = document.getElementById("sec");



const timer = setInterval(count,1000);

count();


function count() {
    const now = new Date().getTime();

    const distance = countdownDate - now;
    
    const days =   Math.floor(distance/ (1000*60*60*24));
    const hours =  Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minute = Math.floor((distance % (1000*60*60))/(1000*60));
    const secs =   Math.floor((distance % (1000*60))/1000);
    d.innerHTML= `${days}`;
    h.innerHTML= `${hours}`;
    m.innerHTML= `${minute}`;
    s.innerHTML= `${secs}`;

    if (distance < 0){
        clearInterval(timer);
    }
    console.log("hello world");
}
