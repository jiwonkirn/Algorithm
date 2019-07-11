// mine
const judgement = input => {
  return input.includes("()") || input.includes("{}") || input.includes("[]");
};

export const bracketPush = input => {
  let result = input;
  while (judgement(result)) {
    if (result.includes("()")) {
      result = result.replace("()", "");
    }
    if (result.includes("{}")) {
      result = result.replace("{}", "");
    }
    if (result.includes("[]")) {
      result = result.replace("[]", "");
    }
  }
  return !result;
};

// others
const Expected = { '{': '}', '(': ')', '[': ']'};

const bracketPush = stream => {
  let stack = [];
  for (let token of stream)
    if (token in Expected) stack.push(Expected[token]);
    else if (stack.pop() !== token) return false;
  return !stack.length;
}