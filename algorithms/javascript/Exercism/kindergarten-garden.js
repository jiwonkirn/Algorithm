const plants = {
  R: "radishes",
  C: "clover",
  G: "grass",
  V: "violets"
};

const students = [
  "alice",
  "bob",
  "charlie",
  "david",
  "eve",
  "fred",
  "ginny",
  "harriet",
  "ileana",
  "joseph",
  "kincaid",
  "larry"
];

export default class Garden {
  constructor(str, arr = students) {
    this.plantsArray = str.split("\n");
    arr
      .sort()
      .map(i => i.toLowerCase())
      .forEach((c, i) => {
        this[c] = this.distribute()[i];
      });
  }

  distribute() {
    const result = [];
    const { plantsArray: plant } = this;
    for (let i = 0; i < this.plantsArray[0].length - 1; i += 2) {
      const arr = [];
      arr.push(plant[0][i], plant[0][i + 1], plant[1][i], plant[1][i + 1]);
      result.push(arr.map(i => plants[i]));
    }
    return result;
  }
}
