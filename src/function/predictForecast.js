/**
 * the sun is inside the triangle.
 * @param {Object} today - desired day.
 * @param {boolean} today.isSunInside - sun inside of today's triangle.
 * @param {number} today.sideRatio - side ratio of today's triangle.
 * @param {number} today.perimeter - perimeter of today's triangle.
 * @param {Object} yesterday - day before of the prediction.
 * @param {number} yesterday.sideRatio - side ratio of yesterday's triangle.
 * @param {number} yesterday.perimeter - perimeter of yesterday's triangle.
 * @param {Object} tomorrow - day after the prediction.
 * @param {number} tomorrow.sideRatio - side ratio of tomorrow's triangle.
 * @param {number} tomorrow.perimeter - perimeter of tomorrow's triangle.
 *
 * @return {string} - forecast for the given day.
 */
export function predictForecast(today, yesterday, tomorrow) {
  if (today.isSunInside) {
    return (today.sideRatio < yesterday.sideRatio && today.sideRatio < tomorrow.sideRatio) ? 'drought' :
      (today.perimeter > yesterday.perimeter && today.perimeter > tomorrow.perimeter) ? 'maxRain' : 'rain';
  } else {
    return (today.sideRatio < yesterday.sideRatio && today.sideRatio < tomorrow.sideRatio) ? 'optimal' : 'normal';
  }
}
