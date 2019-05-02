var isPalindrome = function(x) {
  const str = String(x);
  for (let i = str.length - 1, j = 0; i >= 0; i--) {
    if (str[j] !== str[i]) {
      return false;
    }
    j++;
  }
  return true;
};
