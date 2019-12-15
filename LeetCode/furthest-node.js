function solution(n, edge) {
  if (!n) return 0;
  const map = {};
  const numSet = new Set([1]);
  for (let i = 0; i < edge.length; i++) {
    const [start, end] = edge[i];
    if (!map[start]) map[start] = [];
    if (!map[end]) map[end] = [];
    map[start].push(end);
    map[end].push(start);
  }

  let res = 0;
  const queue = [1];

  while (queue.length) {
    res = queue.length;
    for (let j = 0; j < res; j++) {
      const el = queue.shift();
      const conn = map[el];
      for (let cur of conn) {
        if (!numSet.has(cur)) {
          numSet.add(cur);
          queue.push(cur);
        }
      }
    }
  }
  return res;
}
