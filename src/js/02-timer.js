import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timerValues = document.querySelector('.timer');
timerValues.style.display = "flex";

const startBtn = document.querySelector('button[data-start]');

const field = document.querySelectorAll('.field');
console.log("field", field);
for (const el of field) {
  console.log(el);
  el.style.display = "flex";
  el.style.flexDirection = "column";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";
  el.style.width = "50px";
  el.style.marginTop = "10px";
};

const value = document.querySelectorAll('.value');
for (const el of value) {
		el.style.fontSize = "30px";
    el.style.textTransform = "uppercase";
};
const label = document.querySelectorAll('.label');
//console.log("label", label);
for (const el of label) {
		el.style.fontSize = "10px";
    el.style.fontWeight = "500";
};
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // console.log(options.defaultDate);
    if (selectedDates[0] < options.defaultDate) {
        startBtn.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future");  
    }
    else { 
    startBtn.disabled = false;
    let timer;
    startBtn.addEventListener('click', ()=> {
      timer = setInterval(() => {
        const chosenData = selectedDates[0].getTime();
        // console.log(chosenData);
        const now = new Date().getTime();
        // console.log(now);
        const ms = chosenData - now;
        // console.log(ms); 
        convertMs(ms);
        
        days.textContent = addLeadingZero(convertMs(ms).days);
        hours.textContent = addLeadingZero(convertMs(ms).hours);
        minutes.textContent = addLeadingZero(convertMs(ms).minutes);
        seconds.textContent = addLeadingZero(convertMs(ms).seconds);
            

        if (ms < 0) {
          clearInterval(timer);
          days.textContent = addLeadingZero(0);
          hours.textContent = addLeadingZero(0);
          minutes.textContent = addLeadingZero(0);
          seconds.textContent = addLeadingZero(0);
        }
        }, 1000)
        });
    }               
    },
    
};

flatpickr("#datetime-picker", options);


function addLeadingZero (value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
  
}
