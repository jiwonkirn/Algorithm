// first
export default class Sieve {
  constructor(num) {
    this.num = num;
  }

  get primes() {
    const { num } = this;
    const arr = [2];
    for (let i = 3; i <= num; i++) {
      let isPrime = true;
      for (let item of arr) {
        if (item > Math.sqrt(i)) {
          break;
        }
        if (i % item === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        arr.push(i);
      }
    }
    return arr;
  }
}

// second
export default class Sieve {
  constructor(num) {
    this.num = num;
  }

  get primes() {
    const { num } = this;
    const arr = [];
    for (let i = 2; i <= num; i++) {
      if (!arr.some(item => i % item === 0)) arr.push(i);
    }
    return arr;
  }
}
