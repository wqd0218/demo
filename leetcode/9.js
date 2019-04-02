/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let before = String(x);
  let after = before.split('').reverse().join('');
  if (before === after) {
      return true;
  } else {
      return false;
  }
};