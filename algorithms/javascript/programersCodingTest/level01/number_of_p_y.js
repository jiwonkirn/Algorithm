// first
function solution(s) {
  let strP = 0;
  let strY = 0;
  for (let item of s.toLowerCase()) {
    if (item === "p") strP++;
    else if (item === "y") strY++;
  }
  return strP === strY ? true : false;
}

// second
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// third
function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
