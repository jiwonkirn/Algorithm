// first
function solution(A, B) {
  const a = quick(A, "bigger");
  const b = quick(B, "smaller");
  return a.reduce((a, c, i) => a + c * b[i], 0);
}

const quick = (arr, howSort) => {
  if (arr.length <= 0) return [];

  const left = [];
  const right = [];
  const middle = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (howSort === "bigger") {
      if (arr[i] > middle) right.push(arr[i]);
      else left.push(arr[i]);
    }
    if (howSort === "smaller") {
      if (arr[i] < middle) right.push(arr[i]);
      else left.push(arr[i]);
    }
  }

  return quick(left, howSort).concat(middle, quick(right, howSort));
};
