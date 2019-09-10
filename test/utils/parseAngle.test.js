import parseAngle from '../../src/utils/parseAngle'

test('cosineLaw(angle): it should return 60', async () => {
  const testResult = parseAngle(60);

  expect(testResult).toBe(60);
});

test('cosineLaw(angle): it should return 60', async () => {
  const testResult = parseAngle(300);

  expect(testResult).toBe(60);
});
