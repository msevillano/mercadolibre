/**
 * Parses an angle into the 0-179 format.
 * @param {number} angle - angle to parse.
 *
 * @return {number} - is sun inside or not.
 */
export default function parseAngle(angle) {
  return angle%360 < 180 ? angle%180 : 180 - angle%180;
}
