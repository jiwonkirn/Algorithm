function solution(n) {
  const arr = [2];
  for (let i = 3; i <= n; i += 2) {
    let isPrime = true;
    const sqrt = Math.sqrt(i); // 하지 않으면 효율성 검사 탈락
    for (const item of arr) {
      if (item > sqrt) {
        break;
      }
      if (i % item === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr.push(i);
    }
  }
  return arr.length;
}

function solution(n) {
  const primes = [];
  for (let j = 2; j <= n; j++) {
    let isPrime = true;
    const sqrt = Math.sqrt(j);
    console.log(sqrt);
    for (let i = 0; primes[i] <= sqrt; i++) {
      if (j % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(j);
    }
  }
  return primes.length;
}
