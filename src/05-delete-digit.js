/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr1 = [];
  const arr2 = String(n).split('');
  for (let i = 0; i < arr2.length; i++) {
    const newArr = arr2.slice();
    newArr.splice(i, 1);
    arr1.push(newArr.join(''));
  }
  return Math.max(...arr1);
}

module.exports = deleteDigit;
