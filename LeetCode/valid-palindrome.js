// first
var isPalindrome = function(s) {
  // 97 - 122
  let str = '';
  let rev = '';
  for (var i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    const code = char.charCodeAt(0);
    if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
      str += char;
      rev = char + rev;
    }
  }
  return str === rev;
};

// second
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^0-9a-z]/g, '');
  let left = 0,
    right = s.length - 1;
  while (left < s.length) {
    if (s[left++] !== s[right--]) return false;
  }
  return true;
};
