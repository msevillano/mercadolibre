import {predictForecast} from '../../src/function/predictForecast'

test('predictForecast(today, yesterday, tomorrow): it should return drought', async () => {
  const today = {perimeter: 1, sideRatio: 1, isSunInside: true};
  const yesterday = {perimeter: 1, sideRatio: 2, isSunInside: true};
  const tomorrow = {perimeter: 1, sideRatio: 2, isSunInside: true};

  const testResult = predictForecast(today, yesterday, tomorrow);

  expect(testResult).toBe('drought');
});

test('predictForecast(today, yesterday, tomorrow): it should return maxRain', async () => {
  const today = {perimeter: 2, sideRatio: 2, isSunInside: true};
  const yesterday = {perimeter: 1, sideRatio: 2, isSunInside: true};
  const tomorrow = {perimeter: 1, sideRatio: 2, isSunInside: true};

  const testResult = predictForecast(today, yesterday, tomorrow);

  expect(testResult).toBe('maxRain');
});

test('predictForecast(today, yesterday, tomorrow): it should return rain', async () => {
  const today = {perimeter: 1, sideRatio: 2, isSunInside: true};
  const yesterday = {perimeter: 1, sideRatio: 2, isSunInside: true};
  const tomorrow = {perimeter: 1, sideRatio: 2, isSunInside: true};

  const testResult = predictForecast(today, yesterday, tomorrow);

  expect(testResult).toBe('rain');
});

test('predictForecast(today, yesterday, tomorrow): it should return optimal', async () => {
  const today = {perimeter: 1, sideRatio: 1, isSunInside: false};
  const yesterday = {perimeter: 1, sideRatio: 2, isSunInside: true};
  const tomorrow = {perimeter: 1, sideRatio: 2, isSunInside: true};

  const testResult = predictForecast(today, yesterday, tomorrow);

  expect(testResult).toBe('optimal');
});

test('predictForecast(today, yesterday, tomorrow): it should return normal', async () => {
  const today = {perimeter: 1, sideRatio: 2, isSunInside: false};
  const yesterday = {perimeter: 1, sideRatio: 2, isSunInside: true};
  const tomorrow = {perimeter: 1, sideRatio: 2, isSunInside: true};

  const testResult = predictForecast(today, yesterday, tomorrow);

  expect(testResult).toBe('normal');
});
