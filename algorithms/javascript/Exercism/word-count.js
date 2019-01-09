// mine
export default class Words {
  constructor(input) {}

  count(input) {
    const result = {};
    input
      .split(/\s/g)
      .filter(x => x !== "")
      .map(i => i.toLowerCase())
      .forEach(item =>
        typeof result[item] === "number" ? result[item]++ : (result[item] = 1)
      );
    return result;
  }
}
