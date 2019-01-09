/* ======================
  # Roman numberials
    숫자를 로마숫자로 바꾸시오.
======================== */

// 최종 풀이
export default function roman(input) {
  const romanNum = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]
  ];
  let result = "";
  for (const item of romanNum.reverse()) {
    while (input >= item[0]) {
      input -= item[0];
      result += item[1];
    }
  }
  return result;
}



// 초기 풀이
export default function roman(input) {
const romanNum = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};
  const arr = input.toString().split("");
  const result = arr
    .map((item, index) =>
      Array.from("1".repeat(item)).map(
        it => it * 10 ** (arr.length - index - 1)
      )
    )
    .map(item => {
      if (item.length === 9) {
        item.splice(0, 9, item[0] * 9);
      } else if (item.length >= 5) {
        item.splice(0, 5, item[0] * 5);
      } else if (item.length >= 4) {
        item.splice(0, 4, item[0] * 4);
      }
      return item;
    });
  return result
    .map(item => item.map(inner => romanNum[inner]).join(""))
    .join("");
}
