import Forecast from '../model/forecast';
import dbConnection from '../core/dbConnection';
import logger from '../core/logger';

dbConnection(process.env.MONGO_DB).then(() => logger.info('connected to DB'))
    .catch(() => logger.error('DB is unavailable on given connectionString'));

/**
 * Returns requested forecast if available on DB.
 * @param {Object} event - HTTP event info.
 * @param {String} event.queryStringParameters - parameters of the request.
 * @param {String} event.queryStringParameters.day - requested forecast day.
 *
 * @return {Object} - it returns an HTTP response.
 */
export async function getForecast(event) {
  try {
    if (!event.queryStringParameters || !event.queryStringParameters.day) {
      return {statusCode: 400, body: JSON.stringify({message: `date must be provided`})};
    }

    const day = event.queryStringParameters.day;
    const forecast = await Forecast.findOne({day: day}, {}, {sort: {'day': -1}});
    if (forecast) return {statusCode: 200, body: JSON.stringify({forecast: forecast.forecast})};
    return {statusCode: 404, body: JSON.stringify({message: `can't find forecast fo day ${day}`})};
  } catch (err) {
    logger.error(err);
    return {statusCode: 500, body: JSON.stringify({message: `internal server error`})};
  }
}
