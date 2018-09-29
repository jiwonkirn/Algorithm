//이름을 입력받는 함수
const input = prompt("이름을 입력하세요");

if (input) { // = input.length > 0 // falsy의 성질을 활용함.
  alert(`안녕하세요 ${input}님`);
} else {
  prompt("이름을 입력하세요");
}

//아래 경우는 조심해야 한다.
let a = null;

if(a) {
  console.log('0이 아닙니다.')
} else {
  console.log('0입니다.')
}
//a = 정확히 0이 아니다.


// 정확한 타입값을 받아야 한다.
function add(x, y) {
    if (typeof x === number && typeof y === number) {
      return x + y;
    } else {
      throw new Error('x혹은 y의 타입이 number가 아닙니다.')
    }
  }

//??????
  function add(x, y) {
    if (typeof x === number || typeof y === number){
      throw new Error('숫자를 입력하세요')
    }
  }



'1' || '2' || '3' // '1' 이 truthy이기 때문에 다른것은 보지도 않고 '1'을 반환한다.



//  console.log를 이용하여 오류가 없는지 시험해 볼 수 있다.
function count(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      console.log('모음')
    } else {
      console.log('자음')
    }
  }
}