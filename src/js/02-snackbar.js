import iziToast from 'izitoast';

const form = document.querySelector('.form');

const errorMessage = (delay) =>
  iziToast.show({
    icon: 'icon-false',
    backgroundColor: '#FC5A5A',
    message: `Rejected promise in ${delay} ms`,
    messageColor: '#FAFAFB',
    messageSize: '16px',
    position: 'topCenter',
    close: false,
  });

const successfulMessage = (delay) =>
  iziToast.show({
    icon: 'icon-true',
    backgroundColor: '#82C43C',
    message: `Fulfilled promise in ${delay} ms`,
    messageColor: '#FAFAFB',
    messageSize: '16px',
    position: 'topCenter',
    close: false,
  });

form.addEventListener('submit', e => {
  e.preventDefault();

  const time = form.elements.delay.value;
  const state = form.elements.state.value;

  const promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve();
        } else if (state === 'rejected') {
          reject();
        }
      }, time);
    });
  };

  promise()
    .then(value => successfulMessage(time))
    .catch(error => errorMessage(time));
});
