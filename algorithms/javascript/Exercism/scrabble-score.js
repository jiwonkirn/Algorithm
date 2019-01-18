// mine
export const score = input => {
  const str = input.toUpperCase();
  let result = 0;
  for (let item of str) {
    if (item.match(/[AEIOULNRST]/g)) result += 1;
    if (item.match(/[DG]/g)) result += 2;
    if (item.match(/[BCMP]/g)) result += 3;
    if (item.match(/[FHVWY]/g)) result += 4;
    if (item.match(/[K]/g)) result += 5;
    if (item.match(/[JX]/g)) result += 8;
    if (item.match(/[QZ]/g)) result += 10;
  }
  return result;
};

// other's
const VALUE = {
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
};

export default function(word) {
  return [...(word || "").toUpperCase()].reduce((score, letter) => {
    return score + (VALUE[letter] || 1);
  }, 0);
}
