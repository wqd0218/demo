/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x >= 0) {
      let tempString = String(x);
      let resultString = tempString.split('').reverse().join('');
      let resultNumber = Number(resultString);
      if (resultNumber > Math.pow(2, 31) - 1) {
          return 0;
      } else {
          return resultNumber;
      }
  } else {
      x *= -1;
      let tempString = String(x);
      let resultString = tempString.split('').reverse().join('');
      let resultNumber = Number(resultString);
      resultNumber *= -1;
      if (resultNumber < Math.pow(2, 31) * -1) {
          return 0;
      } else {
          return resultNumber;
      }
  }
};