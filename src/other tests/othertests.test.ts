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
  it('should return the sum of all numbers in the array', () => {
    expect(processData([1, 2, 3, 4, 5])).toBe(15);
  });
  it('should return 0 for an empty array', () => {
    expect(processData([])).toBe(0);
  });
  it('should return the correct sum when array contains negative numbers', () => {
    expect(processData([-1, -2, -3, 4, 5])).toBe(3);
  });
  it('should correctly process an array with a single number', () => {
    expect(processData([100])).toBe(100);
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
