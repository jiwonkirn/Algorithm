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
