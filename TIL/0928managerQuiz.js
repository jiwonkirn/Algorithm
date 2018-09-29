const x = 12;

// 미터를 밀로미터
function meterKilometer(input){
  return input * 1000;
}

// 인치를 센티미터
function inchToCentimeter(input) {
  return input * 2.54;
}

// 섭씨를 화씨로
function celciusToFahrenheit(input) {
    return c * 1.8 + 32;
}

// 평을 제곱미터로
function pyeongToMeter2(input) {
    return input * 3.305785 +'m2'
  }
  
  pyeongToMeter2(5);


// 오늘 가진 돈에 따라서 점심 메뉴를 선택하는 프로그램을 만들기로 했습니다. 
// 1만원 이상이면 “에머이에서 쌀국수”를, 5천원에서 1만원 사이이면 “서브웨이에서 샌드위치”
// 를, 5천원 이하이면 “편의점에서 삼각김밥과 라면”을 먹으라고 출력해 주는 프로그램을 
// 만들어 보세요.

const money = prompt("금액을 입력해주세요: ");

if (money > 10000) {
  console.log("어메이 쌀국수");
} else if (10000 >= money && money >= 5000) {
  console.log("서브웨이에서 샌드위치")
} else {
  console.log("편의점에서 삼각김밥과 라면")
}


// 1004를 10번 출력하는 프로그램을 만들어 보세요.
for (i=0; i<10; i++) {
    console.log(1004)
  }

//입력된 수를 10번 출력하는 프로그램을 만들어 보세요.
const x = prompt("수를 입력해주세요")

for (i=0; i<10; i++) {
  console.log(x);
}

// 1부터 20까지의 수를 출력하는 프로그램을 만들어보세요.
for (i = 1; i <21; i++) {
    console.log(i);
}

// 1부터 입력된 수까지 출력하는 프로그램을 만들어 보세요. (단, 입력된 수는 1보다 큰 정수입니다.)
const x = prompt("숫자를 입력해주세요")

for(i = 1; i <= x; i++){
  console.log(i);
}

// 1부터 20까지의 수가 짝수인지 홀수인지를 출력하는 프로그램을 만들어보세요.
for (i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
      console.log(i + '짝수');
    } else {
      console.log(i + '홀수');
    }
  }

// 1부터 입력된 수까지의 수가 짝수인지 홀수인지를 출력하는 프로그램을 만들어 보세요. (단, 입력된 수는 1보다 큰 정수입니다.)
const x = prompt("숫자를 입력하세요")

for (i = 1; i <= x; i++) {
  if(i % 2 === 0) {
    console.log(i + "짝수");
  } else {
    console.log(i + "홀수");
  }
}
