# Boolean type 복습

## 연산자 우선순위 (Operator Precedence)
and 연산자는 or 연산자보다 우선순위를 가진다.
```js
true || false && false; // true
```

---
##  논리 연산의 여러 가지 법칙
이중부정
```js
// 이중 부정
!!a === a;
```

이를 이용해서 truthy를 이중부정하면 true라는 값이 반환, falsy를 이중부정하면 false가 된다.
```js
!!12 // true
!27 // false
!!null // false
!0 // true
```

다음 값은 falsy이고 그 외의 값들은 truthy이다.

	* false
	* null
	* undefined
	* 0
	* NaN
	* ''

논리연산에는 다음과 같은 여러법칙이 존재하며 코드를 효율적으로 작성할 수 있다.
```js
// 결합 법칙
(a || b) || c === a || (b || c);
(a && b) && c === a && (b && c);

// 분배 법칙
a || (b && c) === (a || b) && (a || c);
a && (b || c) === (a && b) || (a && c);

// 흡수 법칙
a && (a || b) === a;
a || (a && b) === a;

// 드 모르간의 법칙
!(a || b) === !a && !b;
!(a && b) === !a || !b;
```

---
## 다른 타입을 진리값으로 변환하는 방법
어떤 값을 명시적으로 boolean 타입으로 변환해야 할 때가 있는데, 그 때에는 두 가지 방법을 사용할 수 있습니다.

```js
!!'hello'; // true
Boolean('hello'); // true
```