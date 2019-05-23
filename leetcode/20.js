/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') {
      return true;
  }
  let arr = s.split('');
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
          if (i === arr.length - 1) {
              return false;
          } else {
              finalArr.push(arr[i]);
          }
      } else if (arr[i] === ')') {
          if (finalArr[finalArr.length - 1] !== '(') {
              return false;
          } else {
              finalArr.pop();
          }
      } else if (arr[i] === ']') {
          if (finalArr[finalArr.length - 1] !== '[') {
              return false;
          } else {
              finalArr.pop();
          }
      } else if (arr[i] === '}') {
          if (finalArr[finalArr.length - 1] !== '{') {
              return false;
          } else {
              finalArr.pop();
          }
      }
  }
  if (finalArr.length === 0) {
      return true;
  } else {
      return false;
  }
};