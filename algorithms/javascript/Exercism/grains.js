import BigInt from "./lib/big-integer";

export default class Grains {
  square(input) {
    return BigInt(2)
      .pow(input - 1)
      .toString();
  }

  total() {
    return BigInt(2)
      .pow(64)
      .minus(1)
      .toString();
  }
}
