// first
var merge = function(intervals) {
  if (!intervals.length) return [];
  intervals.sort((x, y) => x[0] - y[0]);
  let cur = 0;
  const result = [[intervals[0][0], intervals[0][1]]];
  for (let i = 1; i < intervals.length; i++) {
    const item = intervals[i];
    if (result[cur][1] < item[0]) {
      cur++;
      result[cur] = [item[0], item[1]];
      continue;
    }
    if (item[0] < result[cur][0]) {
      result[cur][0] = item[0];
    }
    if (item[1] > result[cur][1]) {
      result[cur][1] = item[1];
    }
  }
  return result;
};

//second
var merge = function(intervals) {
  if (!intervals.length) return [];
  intervals.sort((x, y) => x[0] - y[0]);
  let cur = intervals[0];
  const res = [cur];
  for (let i = 1; i < intervals.length; i++) {
    const curInt = intervals[i];
    if (cur[1] < curInt[0]) {
      res.push(curInt);
      cur = curInt;
    } else {
      if (cur[1] < curInt[1]) {
        cur[1] = curInt[1];
      }
    }
  }
  return res;
};
