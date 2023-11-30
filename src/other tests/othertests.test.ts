/* eslint-disable linebreak-style */
import axios from 'axios';
import {
  add, multiply, processData, fetchData,
} from './othertests';

describe('add ', () => {
  it('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('adds -1 + -1 to equal -2', () => {
    expect(add(-1, -1)).toBe(-2);
  });
  it('adds -1 + 3 to equal 2', () => {
    expect(add(-1, 3)).toBe(2);
  });
  it('adds 0 + 5 to equal 5', () => {
    expect(add(0, 5)).toBe(5);
  });
  it('adds -5 + 0 to equal -5', () => {
    expect(add(-5, 0)).toBe(-5);
  });
});
describe('multiply', () => {
  it('should return the product of two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });
  it('should return 0 when one of the factors is 0', () => {
    expect(multiply(0, 5)).toBe(0);
  });
  it('should return a negative product for mixed sign factors', () => {
    expect(multiply(-3, 4)).toBe(-12);
  });
  it('should return a positive product for two negative factors', () => {
    expect(multiply(-3, -4)).toBe(12);
  });
  it('should return the product of two numbers', () => {
    expect(multiply(10, 20)).toBe(200);
  });
});
describe('processData', () => {
  it('should return 0 for an empty array', () => {
    expect(processData([])).toBe(0);
  });
  it('should return the same number for an array with a single element', () => {
    expect(processData([5])).toBe(5);
  });
  it('should return the sum of all elements in a non-empty array', () => {
    expect(processData([1, 2, 3, 4, 5])).toBe(15);
  });
  it('should correctly sum to a negative number for an array with all negative numbers', () => {
    expect(processData([-1, -2, -3, -4, -5])).toBe(-15);
  });
  it('should correctly sum to the right number for an array with both positive and negative numbers', () => {
    expect(processData([-1, 2, -3, 4, -5])).toBe(-3);
  });
});
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('fetchData', () => {
  it('should fetch data and return the result', async () => {
    const fakeData = 'response data';
    mockedAxios.get.mockResolvedValue({ data: fakeData });
    const data = await fetchData();
    expect(data).toBe(fakeData);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.example.com/data');
  });
});
