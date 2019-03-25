# Namespaces

## Namespaces

namespace는 단순히 자바스크립트의 객체에 붙은 이름과 비슷한 것이다. 다만 파일을 분리하고 불러올 수 있는 기능을 제공하며, 특별한 문법으로 분리된 코드를 루트 파일 등에 불러와 사용할 수 있다.

### namespace 정의, 사용하기

namespace는 마치 class를 정의하는 것처럼 다음과 같이 정의한다.

```ts
namespace Person {
  export const name = "jiwon";
  const age = 28;
}

console.log(Person.name); // "jiwon"
console.log(Person.age); // error! export를 해야합니다.
```

namespace 내의 속성에 접근하기 위해서는 export 키워드를 붙여주어야 하며, 붙이지 않는다면 마치 private 접근 제어자를 붙인 class의 속성처럼 외부에서 접근할 수 없다.

### 분리된 코드들을 namespace를 이용해서 합치기

circle.ts

```ts
namespace MyMath {
  export namespace Circle {
    const PI = 3.14;
    export function calculateCircle(diamenter: number) {
      return diamenter * PI;
    }
  }
}
```

rectangle.ts

```ts
namespace MyMath {
  export function calculateRectangle(width: number, length: number) {
    return width * length;
  }
}
```

app.ts (root file)

```ts
// 아래와 같은 방법으로 해당 파일에 불러오게 되고, 해당 namespace들에 접근할 수 있습니다.
/// <reference path="./circleMath.ts" />
/// <reference path="./rectangleMath.ts" />

import CircleMath = MyMath.Circle;

const PI = 2.99; // ok!

console.log(MyMath.calculateRectangle(10, 20)); // 200;
console.log(CircleMath.calculateCircle(12)); // 37.68;
console.log(PI); // 2.99;
```

컴파일을 할 때는 루트가 되는 파일을 다음과 같은 형태로 호출하면 루트 파일에 코드들이 합쳐진다.

```zsh
tsc [루트파일.ts] --outFile [컴파일된 루트 파일.js]
```

app.ts를 컴파일한 자바스크립트 코드는 다음과 같은 모습을 가진다.

```js
var MyMath;
(function(MyMath) {
  var Circle;
  (function(Circle) {
    var PI = 3.14;
    function calculateCircle(diamenter) {
      return diamenter * PI;
    }
    Circle.calculateCircle = calculateCircle;
  })((Circle = MyMath.Circle || (MyMath.Circle = {})));
})(MyMath || (MyMath = {}));
var MyMath;
(function(MyMath) {
  function calculateRectangle(width, length) {
    return width * length;
  }
  MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="./circleMath.ts" />
/// <reference path="./rectangleMath.ts" />
var CircleMath = MyMath.Circle;
var PI = 2.99; // ok!
console.log(MyMath.calculateRectangle(10, 20)); // 200;
console.log(CircleMath.calculateCircle(12)); // 37.68;
console.log(PI); // 2.99;
```

### namespace의 장, 단점

namespace는 일정양의 코드를 조직화할 때 사용한다. 작은 규모의 어플리케이션에서 코드를 구조화하기에 좋은 방법이다. 하지만 프로젝트 규모가 커질수록 파일간의 의존성을 관리하기가 어려워지기 때문에 중간, 대규모의 프로젝트에서는 사용을 지양한다.

> 즉 namespace를 불러오는 코드의 순서에 따라 실행이 안될 수도 있다.
