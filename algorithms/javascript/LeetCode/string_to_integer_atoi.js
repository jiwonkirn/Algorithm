// mine (76 ms, 100% / 37.2 MB, 9.65%)
var myAtoi = function(str) {
  let isNumber = false;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNumber && str[i].match(/[-+]/)) {
      isNumber = true;
      result += str[i];
    } else if (!isNumber && str[i] === ' ') {
      continue;
    } else if (str[i].match(/[0-9]/)) {
      isNumber = true;
      result += str[i];
    } else {
      break;
    }
  }
  const num = Number(result) || 0;
  if (num > 2 ** 31 - 1) return 2 ** 31 - 1;
  if (num < -1 * 2 ** 31) return -1 * 2 ** 31;
  return num;
};

// other's (76 ms, 100% / 35.6 MB, 88.28%)
var myAtoi = function(str) {
  let trimedString = str.trim();
  if (trimedString.length <= 1) {
    if (!isNaN(parseInt(trimedString))) {
      return parseInt(trimedString);
    } else {
      return 0;
    }
  }

  if (
    (trimedString.charAt(0) !== '+' || trimedString.charAt(0) !== '-') &&
    isNaN(parseInt(trimedString))
  ) {
    return 0;
  } else {
    if (parseInt(trimedString) < -2147483648) {
      return -2147483648;
    } else if (parseInt(trimedString) >= 2147483648) {
      return 2147483647;
    } else {
      return parseInt(trimedString);
    }
  }
};
