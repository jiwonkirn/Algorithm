# 181113 TIL 예외처리

## 예외처리

JavaScript에는 코드 실행 중에 예기치 못한 에러가 발생했을 때, 이로부터 코드의 실행 흐름을 복구할 수 있는 기능이 내장되어 있다. 이런 기능을 일러 예외 처리(exception handling)라고 한다.

### 동기식 코드에서의 예외 처리

### Promiss

Promiss는 작업에 실패했을 때의 결과물도 담는다.

    - pending - Promise 객체에 결과값이 채워지지 않은 상태
    - fulfilled(resolve) - Promise 객체에 결과값이 채워진 상태
    - rejected - Promise 객체에 결과값을 채우려고 시도하다가 에러가 난 상태