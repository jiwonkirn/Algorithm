var getPermutation = function(n, k) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  const fac = factorial();
  let result = '';
  k--;
  for (let i = n - 1; i > 0; i--) {
    const rest = fac(i);
    const index = Math.floor(k / rest);
    result += arr.splice(index, 1);
    k %= rest;
  }
  return result + arr.join('');
};

function factorial() {
  const arr = [1, 2];
  function inner(n) {
    if (!arr[n - 1] && n > 1) {
      arr[n - 1] = n * inner(n - 1);
    }
    return arr[n - 1];
  }
  return inner;
}
