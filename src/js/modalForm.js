import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const formInput = form.querySelectorAll('.form__input');

let dataForm = {};

const handleFormInput = e => {
  dataForm[e.target.name] = e.target.value;
};

const handleContactFormSybmit = e => {
  e.preventDefault();
  if (Object.entries(dataForm).length < formInput.length) {
    Notify.info('Please fill in the blank fields of the form!');
    return;
  }

  const invalidEl = Object.values(dataForm)
    .filter(data => data.trim().length < 2)
    .find(el => el.trim().length < 2);

  if (invalidEl !== undefined) {
    Notify.failure('Value must be more than 2 symbols!');
    return;
  }
  Notify.success('Form submitted successfully!');
  console.table(dataForm);
  e.currentTarget.reset();
  dataForm = {};
};

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleContactFormSybmit);
