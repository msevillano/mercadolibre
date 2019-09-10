import cosineLaw from '../../src/utils/cosineLaw'

test('cosineLaw(sideA, sideB, angle): it should return 3rd side of triangle', async () => {
  const testResult = cosineLaw(5, 6, Math.PI/4);

  expect(testResult).toBe(1.0028145451213648);
});
