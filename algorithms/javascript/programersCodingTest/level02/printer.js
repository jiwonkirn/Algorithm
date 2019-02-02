function solution(priorities, location) {
  const order = priorities.map((_, i) => [_, i]);
  let count = 0;
  while (order.length > 0) {
    const first = order.shift();
    const max = order.some(c => c[0] > first[0]);
    if (max) {
      order.push(first);
    } else {
      count++;
      if (first[1] === location) return count;
    }
  }
}
