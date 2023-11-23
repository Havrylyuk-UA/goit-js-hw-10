import iziToast from 'izitoast';

const form = document.querySelector('.form');

const errorMessage = () =>
  iziToast.show({
    icon: 'icon-false',
    backgroundColor: '#FC5A5A',
    message: `Rejected promise in ${form.elements.delay.value} ms`,
    messageColor: '#FAFAFB',
    messageSize: '16px',
    position: 'topCenter',
    close: false,
  });

const successfulMessage = () =>
  iziToast.show({
    icon: 'icon-true',
    backgroundColor: '#82C43C',
    message: `Fulfilled promise in ${form.elements.delay.value} ms`,
    messageColor: '#FAFAFB',
    messageSize: '16px',
    position: 'topCenter',
    close: false,
  });

form.addEventListener('submit', e => {
  e.preventDefault();

  const state = form.elements.state.value;

  const promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve();
        } else if (state === 'rejected') {
          reject();
        }
      }, form.elements.delay.value);
    });
  };

  promise()
    .then(value => successfulMessage())
    .catch(error => errorMessage());
});
