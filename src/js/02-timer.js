import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const timer = document.querySelector('.timer');
console.log("timer", timer);
timer.style.display = flex;
timer.style.flexDirection = row;

const myInput = document.querySelector("input");

myInput.addEventListener()

const fp = flatpickr(myInput, {
		enableTime: true,
		time_24hr: true,
		defaultDate: new Date(),
		minuteIncrement: 1,
		onClose(selectedDates) {
			console.log(selectedDates[0]);
		},
	});

