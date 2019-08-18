// mine
// 1.80ms ~ 2.11ms
function solution(n, computers) {
  const arr = new Array(n).fill(0);
  let count = 0;
  function helper(idx) {
    if (arr[idx]) return;
    arr[idx] = 1;
    count++;
    const queue = [idx];
    while (queue.length) {
      const len = queue.length;
      for (var i = 0; i < len; i++) {
        const cur = queue.shift();
        for (var j = 0; j < n; j++) {
          if (arr[j] || j === cur) continue;
          if (computers[cur][j] === 1) {
            queue.push(j);
            arr[j] = 1;
          }
        }
      }
    }
  }
  for (var i = 0; i < n; i++) {
    helper(i);
  }
  return count;
}
