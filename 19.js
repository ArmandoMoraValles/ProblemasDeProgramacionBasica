function startClock() {
    let hour = parseInt(prompt('Introduce la hora (0-23):')) || 0;
    let minute = parseInt(prompt('Introduce el minuto (0-59):')) || 0;
    let second = parseInt(prompt('Introduce el segundo (0-59):')) || 0;
  
    function updateClock() {
        second++;
        if (second === 60) {
            second = 0;
            minute++;
            if (minute === 60) {
            minute = 0;
            hour++;
            if (hour === 24) {
                hour = 0;
            }
            }
        }
    
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        const formattedSecond = second.toString().padStart(2, '0');
        
        console.log(`${formattedHour}:${formattedMinute}:${formattedSecond}`);
    }
  
    updateClock();
    setInterval(updateClock, 1000);
}
  
startClock();
  