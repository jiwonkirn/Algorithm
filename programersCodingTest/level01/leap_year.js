// first
function solution(a, b) {
  const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`${a} ${b}, 2016`);
  return dayArr[date.getDay()];
}

// second
function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date
    .toString()
    .slice(0, 3)
    .toUpperCase();
}

// third
function getDayName(a, b) {
  var dayList = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daySum;
  if (a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
  return dayList[daySum % 7];
}
