// first
function solution = (n) => {
  waterMelon = '수박'
  return waterMelon.repeat(n).slice(0,n)
  }

// second
function solution(n) {
  let result = ''
  for (let i = 1; i <= n; i++) {
   i % 2 !== 0 ? result += '수' : result += '박'
  }
  return result
}
