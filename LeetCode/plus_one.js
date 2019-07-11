var plusOne = function(digits) {
  function helper(index) {
      if (index === -1) {
          digits.unshift(1);
          return;
      }
      if (digits[index] === 9) {
          digits[index] = 0
          return helper(index - 1);
      } else {
          digits[index] += 1;
          return;
      }
  }
  helper(digits.length - 1);
  return digits;
};