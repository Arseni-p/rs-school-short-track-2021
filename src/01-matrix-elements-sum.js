/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rowsCount = matrix.length;
  const colCount = matrix[0].length;
  let total = 0;
  for (let i = 0; i < colCount; i++) {
    for (let j = 0; j < rowsCount; j++) {
      if (j === 0 || matrix[j - 1][i]) {
        total += matrix[j][i];
      }
    }
  }
  return total;
}

module.exports = getMatrixElementsSum;
