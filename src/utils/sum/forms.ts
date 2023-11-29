/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import $ from 'jquery';

export const isValidName = (name: string): boolean => {
  const nameRegex = /^[A-Za-z]{2,50}$/;
  return nameRegex.test(name);
};
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^\S+@(?!.*\.\.)\S+\.\S+$/;
  return emailRegex.test(email);
};
export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
};
export const validateAndSubmitForm = (event: JQuery.TriggeredEvent): void => {
  event.preventDefault();
  const name = $('#name').val() as string;
  const email = $('#email').val() as string;
  const password = $('#password').val() as string;
  const validationMessage = $('#validation-message');
  validationMessage.text('');
  if (!isValidName(name)) {
    validationMessage.text('Name must be between 2 and 50 characters and can only contain letters.');
    return;
  }
  if (!isValidEmail(email)) {
    validationMessage.text('Please enter a valid email address.');
    return;
  }
  if (!isValidPassword(password)) {
    validationMessage.text('Password must be at least 8 characters long and contain at least 1 number and 1 special character.');
    return;
  }
  validationMessage.text('Form submitted successfully!');
};

/*$(document).ready(() => {
  $('.logIn-form').on('submit', validateAndSubmitForm);
});*/
