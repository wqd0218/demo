/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length !== 0) {
      let firstLength = strs[0].length;
      for (let i = 1; i <= firstLength; i++) {
          let temp = strs[0].substring(0, i);
          for (let j = 0; j < strs.length; j++) {
              if (strs[j].indexOf(temp) !== 0) {
                  return temp.substring(0, temp.length - 1);
              }
          }
      }
      return strs[0];
  } else {
      return "";
  }
};