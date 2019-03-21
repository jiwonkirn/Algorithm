# 컴파일 옵션

## 몇몇 유용한 컴파일 옵션들

`tsconfig.json`파일에는 여러가지 컴파일 옵션들을 작성할 수 있고, 다음과 같은 구조를 가진다.

```json
{
  "conpilerOptions": {
    // ...
  },
  "files": [
    // ...
  ],
  "include": [
    // ...
  ],
  "exclude": [
    // ...
  ]
}
```

강의에서 소개한 컴파일 옵션들과 설명은 다음과 같다.

```json
{
  "compilerOptions": {
    "target": "es5", // 1)
    "module": "commonjs", // 2)
    "strictNullChecks": true, // 3)
    "noEmitOnError": true, // 4)
    "sourceMap": true, // 5)
    "noImplicitAny": true, // 6)
    "noUnusedParameters": true // 7)
  }
}
```

1. `target`: 어떤 자바스크립트 버전으로 타입스크립트를 컴파일할 것인지 설정하는 옵션이다. es5는 거의 모든 브라우저를 지원한다.

2. `module`: 모듈을 불러오는 방식을 지정한다.

3. `strictNullChecks`: 값을 할당하기 전 까지는 사용할 수 없다. 예를들어 선언만 한 변수에 값을 할당할 수 없다.

```ts
function controlMe(isTrue: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  return result;
  // isTrue가 false면 result가 선언만 되고
  // 값이 할당되지 않은 것이므로 에러를 발생시킨다.
}
```

4. `noEmitOnError`: 컴파일 에러가 났을 때, 컴파일된 자바스크립트 코드를 생성시킬지 말지를 설정하는 옵션. default는 false이며, true로 설정하면 에러가 났을 때 컴파일된 코드를 밷지 않는다.

5. `sourceMap`: 컴파일을 하게 되면 [파일 이름].js.map 파일을 생성하며, 브라우저 개발자 도구 Sources에서 ts 파일을 확인할 수 있다. Sources에서 라인(breaking point)을 찍어 디버깅을 할 수 있다.

6. `noImplicitAny`: 타입을 지정하지 않아 해당 변수가 any타입을 갖게 된다면 경고를 해준다.

7. `noUnusedParameters`: 사용하지 않는 매개변수 있으면 에러를 발생시키는 컴파일 옵션이다. (?를 주어도 소용이 없더라...)

### 문서 링크

- [타입스크립트 tsconfig 문서](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

- [타입스크립트 컴파일러 옵션 리스트](http://www.typescriptlang.org/docs/handbook/compiler-options.html)
