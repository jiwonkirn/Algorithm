// 기지국 설치

function solution(n, stations, w) {
  let current = n;
  let count = 0;
  for (let i = stations.length - 1; i >= 0; i--) {
    const rest = current >= stations[i] + w ? current - stations[i] - w : 0;
    count += Math.ceil(rest / (w * 2 + 1));
    current = stations[i] - w - 1;
  }
  count += Math.ceil(current / (w * 2 + 1));
  return count;
}
