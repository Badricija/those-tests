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
