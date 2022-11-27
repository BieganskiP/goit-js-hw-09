import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datePicker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

let todaysDate = new Date();
let selectedDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= todaysDate.getTime()) {
      window.alert('Please choose a date in the future');
      startBtn.setAttribute('disabled', '');
    } else {
      startBtn.removeAttribute('disabled');
      selectedDate = selectedDates[0];
      todaysDate = new Date();
    }
  },
};
flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {
  setInterval(() => {
    if (selectedDate.getTime() > todaysDate.getTime()) {
      todaysDate = new Date();
      let timeDiff = selectedDate.getTime() - todaysDate.getTime();
      let timeDiffSeconds = Math.floor(timeDiff / 1000);
      let timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
      let timeDiffHours = Math.floor(timeDiffMinutes / 60);
      let timeDiffDays = Math.floor(timeDiffHours / 24);

      timerDays.innerHTML = timeDiffDays;
      timerHours.innerHTML = timeDiffHours;
      timerMinutes.innerHTML = timeDiffMinutes;
      timerSeconds.innerHTML = timeDiffSeconds;
    } else {
      clearInterval();
    }
  }, 1000);
});
