/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import $ from 'jquery'; 
import { isValidName, isValidEmail, isValidPassword } from './utils/sum/forms';

$('.logIn-form').on('submit', (event) => {
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
      });