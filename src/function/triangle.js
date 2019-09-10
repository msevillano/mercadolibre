import cosineLaw from '../utils/cosineLaw';
import parseAngle from '../utils/parseAngle';

const PLANET_1_DISTANCE = parseInt(process.env.PLANET_1_DISTANCE);
const PLANET_1_SPEED = parseInt(process.env.PLANET_1_SPEED);
const PLANET_2_DISTANCE = parseInt(process.env.PLANET_2_DISTANCE);
const PLANET_2_SPEED = parseInt(process.env.PLANET_2_SPEED);
const PLANET_3_DISTANCE = parseInt(process.env.PLANET_3_DISTANCE);
const PLANET_3_SPEED = parseInt(process.env.PLANET_3_SPEED);

/**
 * retrieves the triangle perimeter for a given day.
 * @param {number} day - desired day (from the beginning of time).
 *
 * @return {Object} - perimeter.
 */
export function todayTriangle(day) {
  return {
    a: cosineLaw(PLANET_1_DISTANCE, PLANET_2_DISTANCE, Math.abs((PLANET_1_SPEED - PLANET_2_SPEED))*day),
    b: cosineLaw(PLANET_1_DISTANCE, PLANET_3_DISTANCE, Math.abs((PLANET_1_SPEED - PLANET_3_SPEED))*day),
    c: cosineLaw(PLANET_2_DISTANCE, PLANET_3_DISTANCE, Math.abs((PLANET_2_SPEED - PLANET_3_SPEED))*day),
  };
}

/**
 * the sun is inside the triangle.
 * @param {number} day - desired day (from the beginning of time).
 *
 * @return {boolean} - is sun inside or not.
 */
export function isInsideTriangle(day) {
  const angle = parseAngle(Math.abs((PLANET_1_SPEED - PLANET_2_SPEED))*day) +
    parseAngle(Math.abs((PLANET_1_SPEED - PLANET_3_SPEED))*day) +
    parseAngle(Math.abs((PLANET_2_SPEED - PLANET_3_SPEED))*day);
  return angle === 360 || angle === 0;
}

/**
 * checks the side ratio of a given triangle if side ratio becomes 0, triangle has become a line.
 * @param {Object} triangle - triangle to check.
 * @param {number} triangle.a - side a of the triangle to check.
 * @param {number} triangle.b - side b of the triangle to check.
 * @param {number} triangle.c - side c of the triangle to check.
 *
 * @return {number} - is sun inside or not.
 */
export function sideRatio(triangle) {
  const orderedSides = Object.values(triangle).sort((a, b) => {
    return b-a;
  });
  return (orderedSides[1] + orderedSides[2]) - orderedSides[0];
}
