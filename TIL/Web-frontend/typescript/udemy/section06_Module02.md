# Module

## es6 module

es6에서 module을 불러오는 방법은 다음과 같다.

- circle.ts

  ```ts
  export const PI = 3.14;

  export function calculateCirumcumference(diameter: number) {
    return diameter * PI;
  }
  ```

- app.ts

  ```ts
  import { PI, calculateCirumcumference } from "./math/circle";

  console.log(PI); // 3.14
  console.log(calculateCirumcumference(10)); // 31.4
  ```

다음과 같이 객체의 메소드로 정의해서 불러오는 방식을 사용할 수도 있다.

- app.ts

  ```ts
  import * as Circle from "./math/circle";

  console.log(Circle.PI); // 3.14
  console.log(Circle.calculateCirumcumference(10)); // 31.4
  ```

`export default` 키워드로 하나만 객체가 아닌 전역으로 `export` 시키는 방식을 사용할 수도 있다.

- circle.ts

  ```ts
  export default function calculateCirumcumference(diameter: number) {
    return diameter * 3.14;
  }
  ```

- app.ts

  ```ts
  import calcCircle from "./math/circle";

  console.log(calcCircle(10)); // 31.4
  ```

---

## import

모듈을 import 시킬 때는 다음과 같은 규칙을 가진다.

`import 식별자 from "./경로"`: 현재 파일 위치를 기준으로 한 로컬 경로의 파일을 가리키게 된다.
`import 식별자 from "모듈 이름"`: node_modules에 정의된 모듈(혹은 라이브러리)를 불러온다.

---

## namespace와 modules

두 방식은 코드조각을 분할한다는 의미에서는 같은 목적을 가지지만 뚜렷한 차이점을 가진다.

- namespace

  - 자바스크립트 객체를 사용해서 어플리케이션을 조직한다. (결국 루트 파일에 모두 정의되는 방식)
  - `module loader` 같은 것이 필요하지 않다.
  - 규모가 큰 어플리케이션에서 의존성을 관리하기가 힘들다. (객체 이름 중복 등)

- modules

  - 진짜 모듈시스템을 이용해서 어플리케이션을 조직한다.
  - `module loader`가 필요하다.
  - 명시적인 의존성 선언 (의존성 관리가 좋다)
