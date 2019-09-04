/**
 * Check status, it responds  with a health check of the project.
 * It should be removed since this project is serverless based (used as example).
 *
 * @return {Object} - it returns an HTTP response.
 */
export async function status() {
  return {
    statusCode: 200,
    body: JSON.stringify({health: 'ok'}),
  };
}
