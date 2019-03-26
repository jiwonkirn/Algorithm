# Module

## modules

앞서 `namespace` 섹션에서 언급했듯, 코드를 조각으로 분리해서 관리하고, 불러오는 것이 필요해 짐에 따라 ES6 이전에 여러가지 시도가 있었다. 대표적으로 `commonjs`와 `amd`가 존재하는데, `commonjs`는 자바스크립트를 클라이언트단을 초월해서 다루기 위해 생겨났고, `commonjs`가 클라이언트 단에서 비동기 처리가 아쉽다는 단점을 극복하기 위해 `amd`가 만들어 졌다.

commonjs

```js
// fileA.js
const a = 3;
const b = 4;
export.sum = function(c, d) {
  return a + b + c + d
}

// fileB.js
const a = 5;
const b = 6;
// commonjs 방식으로 모듈을 불러옴
var moduleA = require("fileA");
moduleA.sum(a,b); // 3+4+5+6 = 18
```

amd

```js
define("alpha", ["require", "exports", "beta"], function(
  require,
  exports,
  beta
) {
  exports.verb = function() {
    // 인수를 사용해도 되고
    return beta.verb();

    // 또는 require()를 이용해 얻어 온 모듈을 사용해도 된다.
    return require("beta").verb();
  };
});
```

두 방식 모두 코드를 (객체와 같은) 블록스코프 안에 가두고 필요시 불러와 작성하는 방식으로 동작을 하게 되는데, es6에서는 `import`, `export`라는 문법으로 작성이 가능하게 됐다.

하지만 typescript는 `tsconfig.json`내 `target`이라는 키의 값에 트랜스파일할 버젼을 명시하도록 돼있고, 트랜스파일을 했을 때 어떤 방식으로 모듈을 불러올지 명시하도록 돼있다.

es6아래 버전일 경우 `commonjs`나 `amd` 방식으로 모듈을 불러오도록 설정을 하게 될 것이다. `commonjs`와 `amd`는 사용할 때 문법을 정의한 `module loader`를 필요로 하는데, `commonjs`, `amd`, `import/export` 모두 대응하는 `systemjs`를 많이 사용하는 편이다.

---

## systemjs

다음과 같이 파일들을 정의한다고 가정을 해보자

circle.ts

```ts
export const PI = 3.14;

export function calculateCirumcumference(diameter: number) {
  return diameter * PI;
}
```

app.ts

```ts
import { PI, calculateCirumcumference } from "./math/circle";

console.log(PI);
console.log(calculateCirumcumference(10));
```

`app.ts`는 `circle.ts`에 정의된 변수와 함수에 접근할 수 있게 된다. 이를 컴파일하게 되면 다음과 같은 코드가 `app.js`에 튀어나오게 된다.

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./math/circle");
console.log(circle_1.PI);
console.log(circle_1.calculateCirumcumference(10));
```

실행시키면 브라우저는 `exports`가 뭔지, `require`가 뭔지 모르게 된다.

때문에 `system.js`를 사용해서 `commonjs` 문법을 사용할 수 있도록 하게 한다.

```shell
npm install --save systemjs@0.21.5
```

```html
<!-- scrtpt -->
<script src="node_modules/systemjs/dist/system.js"></script>
<script>
  // baseURL을 설정하고, 확장자 기본값을 정의한다.
  SystemJS.config({
    baseURL: "/", // root
    packages: {
      "/": {
        defaultExtension: "js"
      }
    }
  });

  // 어떤 파일을 루트로 해서 가져올지 정의한다.
  SystemJS.import("app.js");
</script>
```
