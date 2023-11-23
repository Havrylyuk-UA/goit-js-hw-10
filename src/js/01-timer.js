import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const dateInput = document.querySelector('input[type="text"]'),
  startBtn = document.querySelector('[data-start]'),
  dataDays = document.querySelector('span[data-days]'),
  dataHours = document.querySelector('span[data-hours]'),
  dataMinutes = document.querySelector('span[data-minutes]'),
  dataSeconds = document.querySelector('span[data-seconds]');

let userSelectedDate;

const disabledBtn = () => {
  startBtn.disabled = true;
};

disabledBtn();

const activeBtn = () => {
  startBtn.disabled = false;
  startBtn.style.background = '#4e75ff';
  startBtn.style.color = '#fff';
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    if (selectedDates[0] > new Date()) {
      userSelectedDate = selectedDates[0];
      activeBtn();
      iziToast.show({
        iconUrl: 'images/svg/bi_check2-circle.svg',
        backgroundColor: '#82C43C',
        message: 'You can start the countdown',
        messageColor: '#FAFAFB',
        messageSize: '16px',
        position: 'topCenter',
        close: false,
      });
    } else {
      iziToast.show({
        iconUrl: 'images/svg/bi_x-octagon.svg',
        backgroundColor: '#FC5A5A',
        message: 'Please choose a date in the future',
        messageColor: '#FAFAFB',
        messageSize: '16px',
        position: 'topCenter',
        close: false,
      });
      disabledBtn();
    }
  },
};

startBtn.addEventListener('click', e => {
  e.preventDefault();

  const startCountdown = setInterval(() => {
    disabledBtn();

    const countdown = userSelectedDate - Date.now();
    const convertDate = convertMs(countdown);

    if (countdown > 0) {
      dataDays.textContent = addLeadingZero(convertDate.days);
      dataHours.textContent = addLeadingZero(convertDate.hours);
      dataMinutes.textContent = addLeadingZero(convertDate.minutes);
      dataSeconds.textContent = addLeadingZero(convertDate.seconds);
    } else {
      clearInterval(startCountdown);
      iziToast.show({
        iconUrl: '../img/svg/bi_check2-circle.svg',
        backgroundColor: '#FC5A5A',
        message: 'The timer has stopped',
        messageColor: '#FAFAFB',
        messageSize: '16px',
        position: 'topCenter',
        close: false,
      });
    }
  }, 1000);
});

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

function addLeadingZero(value) {
  let time = String(value);
  if (time.length < 2) {
    return time.padStart(2, '0');
  } else {
    return time;
  }
}

flatpickr(dateInput, options);
