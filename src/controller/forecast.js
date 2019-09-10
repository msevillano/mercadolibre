import moment from 'moment';
import {isInsideTriangle, sideRatio, todayTriangle} from '../function/triangle';
import {predictForecast} from '../function/predictForecast';
import dbConnection from '../core/dbConnection';
import Forecast from '../model/forecast';
import logger from '../core/logger';

const START_DATE = process.env.START_DATE;
const PREDICTION_PERIOD = parseInt(process.env.PREDICTION_PERIOD);

dbConnection(process.env.MONGO_DB).then(() => logger.info('connected to DB'))
    .catch(() => logger.error('DB is unavailable on given connectionString'));
/**
 * Cron job that calculates forecast for next 10 years.
 */
export async function calculate() {
  logger.info('calculating boundaries for forecast prediction.');
  const daysFromBeginning = moment().diff(moment(START_DATE), 'days');
  const lastForecast = await Forecast.findOne({}, {}, {sort: {'day': -1}});
  const lastForecastDay = lastForecast && typeof lastForecast.day === 'number' ? lastForecast.day : -1;
  logger.info(`calculating forecast since ${lastForecastDay + 1} up to ${daysFromBeginning + PREDICTION_PERIOD}.`);

  const arr = [];
  for (let i = lastForecastDay; i <= daysFromBeginning + PREDICTION_PERIOD; i++) {
    const triangle = todayTriangle(i);
    arr.push({
      perimeter: triangle.a + triangle.b + triangle.c,
      isSunInside: isInsideTriangle(i),
      sideRatio: sideRatio(triangle),
    });
  }

  const weatherForecast = arr.map((day, index, array) => {
    const prevDay = array[index - 1];
    const nextDay = array[index + 1];

    if (!prevDay) return;
    if (!nextDay) return;

    return new Forecast({day: lastForecastDay + index, forecast: predictForecast(day, prevDay, nextDay)});
  });
  weatherForecast.shift();
  weatherForecast.pop();
  logger.info(`calculated forecast for ${weatherForecast.length} days, proceeding to save...`);

  await Forecast.insertMany(weatherForecast).then(() => logger.info(`successfully saved.`))
      .catch(() => logger.error(`failed to save forecasts.`));

  logger.info(`job completed.`);
}
