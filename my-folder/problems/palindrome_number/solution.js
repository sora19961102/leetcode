/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const numToStr = String(x);
  const reverseString = numToStr.split('').reverse().join('');
  return reverseString == numToStr;
};