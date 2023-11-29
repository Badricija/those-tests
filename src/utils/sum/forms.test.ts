/* eslint-disable linebreak-style */

import $ from 'jquery';
import { isValidName, isValidEmail, isValidPassword } from './forms';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};
describe('isValidName', () => {
  test('returns true for a valid name with only alphabetic characters', () => {
    expect(isValidName('John')).toBe(true);
  });
  test('returns false for a name with less than 2 characters', () => {
    expect(isValidName('J')).toBe(false);
  });
  test('returns false for a name with more than 50 characters', () => {
    expect(isValidName('J'.repeat(51))).toBe(false);
  });
  test('returns false for a name with numbers', () => {
    expect(isValidName('John123')).toBe(false);
  });
  test('returns false for a name with special characters', () => {
    expect(isValidName('John@Doe')).toBe(false);
  });
});

describe('isValidEmail', () => {
  test('returns true for a valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });
  test('returns false for an email without "@"', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });
  test('returns false for an email without a domain', () => {
    expect(isValidEmail('test@.com')).toBe(false);
  });
  test('returns false for an email with spaces', () => {
    expect(isValidEmail('te st@example.com')).toBe(false);
  });
  test('returns false for an email with multiple consecutive dots', () => {
    expect(isValidEmail('test@..example.com')).toBe(false);
  });
});

describe('isValidPassword', () => {
  test('returns true for a valid password with at least one digit, one special character, and a minimum length of 8 characters', () => {
    expect(isValidPassword('Password1!')).toBe(true);
  });
  test('returns false for a password without any digits', () => {
    expect(isValidPassword('Password!')).toBe(false);
  });
  test('returns false for a password without any special characters', () => {
    expect(isValidPassword('Password1')).toBe(false);
  });
  test('returns false for a password with less than 8 characters', () => {
    expect(isValidPassword('Pass1!')).toBe(false);
  });
  test('returns false for a password with only numbers and special characters but no alphabets', () => {
    expect(isValidPassword('1234567!')).toBe(false);
  });
});

