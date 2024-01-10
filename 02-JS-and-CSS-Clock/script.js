const hourHandle =document.querySelector('.hour-hand')
const minuteHandle = document.querySelector('.minute-hand')
const secondHandle = document.querySelector('.second-hand')

setInterval(()=>{
    const date = new Date();
    // get time
    let hour  = date.getHours();
    let minute =  date.getMinutes()
    let second =  date.getSeconds() 
    
    // calculate the clock hand angle
    let secondAngel =  second*6
    let minuteAngel  = minute*6;
    let hourAngel  = (hour * 30)+(minute * 0.5)

    //rotate clock hand
    hourHandle.style.transform = `rotate(${hourAngel}deg)`;
    minuteHandle.style.transform = `rotate(${minuteAngel}deg)`
    secondHandle.style.transform = `rotate(${secondAngel}deg)`
},1000)


