/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
      return 0;
  } else {
      return haystack.indexOf(needle);
  }
};