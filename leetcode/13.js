/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let finalNum = 0;
  if (s.includes('IV')) {
      finalNum += 4;
      s = s.replace('IV', '');
  }
  if (s.includes('IX')) {
      finalNum += 9;
      s = s.replace('IX', '');
  }
  if (s.includes('XL')) {
      finalNum += 40;
      s = s.replace('XL', '');
  }
  if (s.includes('XC')) {
      finalNum += 90;
      s = s.replace('XC', '');
  }
  if (s.includes('CD')) {
      finalNum += 400;
      s = s.replace('CD', '');
  }
  if (s.includes('CM')) {
      finalNum += 900;
      s = s.replace('CM', '');
  }
  let arr = s.split('');
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'I') {
          finalNum += 1;
      }
      if (s[i] === 'V') {
          finalNum += 5;
      }
      if (s[i] === 'X') {
          finalNum += 10;
      }
      if (s[i] === 'L') {
          finalNum += 50;
      }
      if (s[i] === 'C') {
          finalNum += 100;
      }
      if (s[i] === 'D') {
          finalNum += 500;
      }
      if (s[i] === 'M') {
          finalNum += 1000;
      }
  }
  return finalNum;
};