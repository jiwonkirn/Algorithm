// mine
function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map(i => i.replace(/^\w/, a => a.toUpperCase()))
    .join(" ");
}

// other's
function solution(s) {
  return s
    .split(" ")
    .map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
