/**
 * Use the law of cosines to find the desired side of a triangle.
 * @param {number} sideA - one side of the triangle.
 * @param {number} sideB - other side of the triangle.
 * @param {number} angle - angle between sideA and sideB (in radians).
 *
 * @return {number} - 3rd side of the given triangle.
 */
export default function triangleSide(sideA, sideB, angle) {
  return Math.sqrt(sideA ** 2 + sideB ** 2 - 2 * sideA * sideB * Math.cos((2*Math.PI*angle)/360));
}
