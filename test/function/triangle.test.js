import {todayTriangle, isInsideTriangle, sideRatio} from '../../src/function/triangle';

test('todayTriangle(day): it should return the triangle sides', async () => {
  const testResult = todayTriangle(0);

  expect(testResult.a).toBe(1500);
  expect(testResult.b).toBe(500);
  expect(testResult.c).toBe(1000);
});

test('isInsideTriangle(day): it should return true', async () => {
  const testResult = isInsideTriangle(80);

  expect(testResult).toBe(true);
});

test('isInsideTriangle(day): it should return false', async () => {
  const testResult = isInsideTriangle(1);

  expect(testResult).toBe(false);
});

test('sideRatio(triangle): it should return 0', async () => {
  const triangle = {a:15,b: 5, c: 10};

  const testResult = sideRatio(triangle);

  expect(testResult).toBe(0);
});

test('isInsideTriangle(day): it should return false', async () => {
  const triangle = {a:4,b: 5, c: 6};

  const testResult = sideRatio(triangle);

  expect(testResult).toBe(3);
});
