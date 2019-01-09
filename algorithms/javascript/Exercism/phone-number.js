// Mine
class PhoneNumber {
  constructor(input) {
    this.phoneNum = input;
  }

  check0or1(input) {
    return (
      input[0] === "0" ||
      input[0] === "1" ||
      input[3] === "0" ||
      input[3] === "1"
    );
  }

  number() {
    const num = this.phoneNum.replace(/\D/g, "");
    if (num.length === 11) {
      if (num[0] !== "1") return null;
      const slicedNum = num.slice(1, 12);
      if (this.check0or1(slicedNum)) {
        return null;
      }
      return slicedNum;
    }
    if (num.length < 10 || num.length > 11 || this.check0or1(num)) {
      return null;
    }
    return num;
  }
}

export default PhoneNumber;
