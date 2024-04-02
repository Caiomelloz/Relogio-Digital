const hoursElement = document.getElementById('horas')
const minutesElement = document.getElementById("minutos")
const secondsElement = document.getElementById("segundos")


setInterval(() => {
    
    const data = new Date();
    const hours = data.getHours()
    const minutes = data.getMinutes()
    const seconds = data.getSeconds()
    
    hoursElement.innerHTML = hours < 10 ? "0" + hours : hours;
    minutesElement.innerHTML = minutes < 10? "0" + minutes : minutes;
    secondsElement.innerHTML = seconds < 10? "0" + seconds : seconds
    
    
    hours.innerHTML = data.hours
    
}, 1000);




setInterval();