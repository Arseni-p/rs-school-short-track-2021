/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const str1 = s1.split('').sort();
  const str2 = s2.split('').sort();

  // eslint-disable-next-line consistent-return
  str1.forEach((item) => {
    for (let i = 0; i < str2.length; i++) {
      if (item === str2[i]) {
        str2.splice(str2.indexOf(str2[i]), 1);
        return counter++;
      }
    }
  });
  return counter;
}

module.exports = getCommonCharacterCount;
