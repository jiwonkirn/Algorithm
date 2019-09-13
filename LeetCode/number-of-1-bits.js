// EASY

// mine
var hammingWeight = function(n) {
  return [...n.toString(2)].reduce(
    (acc, cur) => (cur === '1' ? acc + 1 : acc),
    0
  );
};

// other's
var hammingWeight = function(n) {
  var sum = 0;
  while (n !== 0) {
    sum++;
    n = n & (n - 1);
  }
  return sum;
};
