// first
function solution(clothes) {
  const hash = {};
  for (const item of clothes) {
    if (!hash[item[1]]) {
      hash[item[1]] = [];
    }
    hash[item[1]].push(item[0]);
  }
  let count = 1;
  Object.values(hash).forEach(c => {
    count *= c.length + 1;
  });
  return count - 1;
}

// second
function solution(clothes) {
  return (
    Object.entries(
      clothes.reduce((a, i) => {
        a[i[1]] ? a[i[1]]++ : (a[i[1]] = 1);
        return a;
      }, {})
    ).reduce((a, i) => a * (i[1] + 1), 1) - 1
  );
}

// another's
function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}
