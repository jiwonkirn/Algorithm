export default function proverb(...str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const first = str[i];
    const second = str[i + 1];
    if (typeof second === "object") {
      result.push(`And all for the want of a ${second.qualifier} ${str[0]}.`);
      break;
    }
    if (i === str.length - 1) {
      result.push(`And all for the want of a ${str[0]}.`);
      continue;
    }
    result.push(`For want of a ${first} the ${second} was lost.`);
  }
  return result.join("\n");
}
