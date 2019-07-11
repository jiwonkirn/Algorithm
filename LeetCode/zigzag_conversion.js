// mine (100ms)
var convert = function(s, numRows) {
  const arr = [];
  const point = 2 * numRows - 2 || 1;
  for (let i = 0; i < s.length; i++) {
    const index = i % point;
    if (index < numRows) {
      arr[index] ? (arr[index] += s[i]) : (arr[index] = s[i]);
    } else {
      arr[numRows - index + numRows - 2] += s[i];
    }
  }
  return arr.join('');
};

// other's (88ms)
var convert = function(s, numRows) {
  var rowstring = [],
    rownum = 1,
    flag = 1,
    size = s.length;
  if (numRows <= 1 || numRows >= size) {
    return s;
  }
  for (var i = 0; i < numRows; i++) {
    rowstring.push('');
  }

  for (var i = 0; i < size; i++) {
    rowstring[rownum - 1] += s[i];
    if (rownum == numRows) {
      flag = -1;
    }
    if (rownum == 1) {
      flag = 1;
    }
    rownum += flag;
  }

  var result = '';
  for (var i = 0; i < numRows; ++i) {
    result += rowstring[i];
  }

  return result;
};
