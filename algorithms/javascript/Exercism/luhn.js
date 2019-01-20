/* ==================== 
  Using array methods
======================= */
export default class Luhn {
  constructor(input) {
    this.dig = input.replace(/\s/g, "");
  }

  get valid() {
    const { dig } = this;

    if (dig.length <= 1 || dig.match(/[^0-9]/g)) return false;

    return (
      dig
        .split("")
        .reverse()
        .map((item, index) => {
          let num = Number(item);
          if (index % 2 === 1) {
            num *= 2;
            return num >= 10 ? num - 9 : num;
          } else {
            return num;
          }
        })
        .reduce((acc, item) => acc + item, 0) %
        10 ===
      0
    );
  }
}


/* ==================== 
  Using `for` statement
======================= */
export default class Luhn {
  constructor(input) {
    this.dig = input.replace(/\s/g, "");
  }
  get valid() {
    const { dig } = this;

    if (dig.length <= 1 || dig.match(/[^0-9]+/)) return false;

    let result = 0;

    for (let i = 0; i < dig.length; i++) {
      const index = dig.length - i - 1;

      if (i % 2 === 1) {
        const num = Number(dig[index]) * 2;

        num >= 10 ? (result += num - 9) : (result += num);
        continue;
      }

      result += Number(dig[index]);
    }
    return result % 10 === 0;
  }
}
