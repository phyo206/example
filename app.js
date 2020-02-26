let clock=document.querySelector(".clock");
let timeclock=()=>{
    const now=new Date();
    let sec=now.getSeconds();
    let min=now.getMinutes();
    let hour=now.getHours();
    let ampm=hour>12? 'PM' : 'AM';
    clock.innerHTML=`
        <div class="hour">${hour}:</div>
        <div class="min">${min}:</div>
        <div class="sec">${sec}</div>
        <div class="ampm">${ampm}</div>
                    `;
};
setInterval(timeclock,1000);