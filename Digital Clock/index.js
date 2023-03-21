const clock = document.getElementById("clock");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

  let x = new Date();
        let day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let date=x.getDate();
        let month=['January','February','March','April','May','June','July','August','September','October','November','December'];
        let year=x.getFullYear();
        var elem0 = document.getElementById('dates');
        elem0.innerHTML =`  ${day[x.getDay()]} | ${date} , ${month[x.getMonth()]}  ${year} `;

let hour = x.getHours();
        let min =x.getMinutes();
        let sec=x.getSeconds();
        let tz ="A.M";
        var elem1 = document.getElementById('clock');
        function display(){
            elem1.innerHTML = ` ${hour} : ${min} : ${sec  }  ${tz} ` ;
            sec+=1;
            if(hour>=12){
                tz= "P.M";
                hour =hour-12;
            }
            if(sec>=60){
                sec=1;
                min+=1
            }
            if(min>60){
                min =1
                hour+=1
            }
        }
        
       

function startClock() {
  intervalId = setInterval(display, 1000);
}

function stopClock() {
  clearInterval(intervalId);
}

function resetClock() {
  stopClock();
  clock.textContent = "00:00:00";
}
