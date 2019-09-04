import {status} from '../../src/controller/handler'

test('status(): it should retrieve the server status', async () => {
  const testResult = await status();

  expect(testResult.statusCode).toBe(200);
  expect(testResult.body).toBe('{"health":"ok"}');
});
