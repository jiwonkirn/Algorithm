// switch case
function solution(arrangement) {
  let result = 0;
  let blocks = 0;
  const arr = arrangement.replace(/\(\)/g, "l");
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "(":
        blocks++;
        continue;
      case "l":
        result += blocks;
        continue;
      case ")":
        result++;
        blocks--;
        continue;
      default:
        continue;
    }
  }
  return result;
}

// if statement
function solution(arrangement) {
  let result = 0;
  let blocks = 0;
  const arr = arrangement.replace(/\(\)/g, "l");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      blocks++;
      continue; // continue 를 썼을 때 효율성 증가. (혹은 else if를 사용.)
    }
    if (arr[i] === "l") {
      result += blocks;
      continue;
    }
    if (arr[i] === ")") {
      result++;
      blocks--;
    }
  }
  return result;
}
