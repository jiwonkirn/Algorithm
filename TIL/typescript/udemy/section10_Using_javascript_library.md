# Using javascript library with Typescript

외부 라이브러리를 끌어다 쓰게 되면, 직접 타입을 지정 및 선언을 해준 적이 없기 때문에 타입스크립트 컴파일러가 해당 라이브러리를 읽어올 수 없다.

```ts
// jQuery에 대한 type definition이 필요하다는 에러를 발생시킨다.
$("button").click(function() {
  alert("Button was clicked");
});
```

때문에 해당 속성, 메소드 등의 식별자가 어떤 타입을 가지고 있는지 타입스크립트 레벨에서 선언해줄 필요가 있다.

### declare

```ts
declare var $: any;
```

만약 변수를 읽기 전용으로 선언하고 싶다면 `const` 키워드를, 재할당이 가능하면서 block scope를 가지게 하고 싶으면 `let` 키워드를 사용하도록 한다.

### file.d.ts

타입스트립트는 타입을 정의하는 파일을 만들어 타입스크립트 컴파일러가 이를 고려하게 할 수 있다. 파일 형식은 `파일이름.d.ts`라고 정의한다.

file.d.ts

```ts
declare var $: any;
```

file.ts

```ts
$("button").click(function() {
  alert("Button was clicked");
}); // ok!
```

하지만 \$ 객체 (혹은 함수) 내에 있는 모든 속성, 메소드들에 대한 정보를 알 수 없다.

### Definitely Types

다행히도 라이브러리에 대한 타입을 정의해놓은 파일들이 많이 업로드 되어있다.

- [Definitely Types github](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [Definitely Types - Package type search](https://microsoft.github.io/TypeSearch/)

가령 jquery의 type definition 파일을 다운받고 싶다면 `npm install --save-dev @types/jquery`명령어를 동해 jquery에 대한 definition 패키지 파일을 다운받을 수 있다.

[Definitely Types - Package type search](https://microsoft.github.io/TypeSearch/) 사이트 검색을 통해 라이브러리 definition 파일들을 확인할 수 있다.
