export default class RotationalCipher {
  static rotate(str, num) {
    const alp = "abcdefghijklmnopqrstuvwxyz";
    const upperAlp = alp.toUpperCase();

    return str.replace(/[a-z]|[A-z]/g, item => {
      if (alp.includes(item)) return alp[(alp.indexOf(item) + num) % 26];
      if (upperAlp.includes(item)) {
        return upperAlp[(upperAlp.indexOf(item) + num) % 26];
      }
    });
  }
}
