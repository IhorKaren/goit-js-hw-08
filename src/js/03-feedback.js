const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value;
    onInputFormValue();
  }, 500));

populateFormInput();

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log({
    login: email.value,
    password: message.value,
  });
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputFormValue() {
    const inputValue = JSON.stringify(formData)
 localStorage.setItem(STORAGE_KEY, inputValue);
}

function populateFormInput() {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

  formData[savedText.email, savedText.message]

  if (formData) {
    emailInput.value = savedText.email;
    messageInput.value = savedText.message;
  }
}