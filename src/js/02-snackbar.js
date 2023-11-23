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

  const promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (form.elements.state.value === 'fulfilled') {
          resolve();
        } else if (form.elements.state.value === 'rejected') {
          reject();
        }
      }, form.elements.delay.value);
    });
  };

  promise()
    .then(value => successfulMessage())
    .catch(error => errorMessage());
});
