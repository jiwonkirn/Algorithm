var lengthOfLastWord = function(s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ' ' && length) {
          return length;
      } else if (s[i] === ' ') {
          continue;
      } else {
          length++
      }
  }
  return length;
};