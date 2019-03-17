# typescript section02

## 타입 추론

타입스크립트는 타입을 지정하지 않고 변수에 값을 할당하면, 다른 타입의 값으로 변수를 재할당할 경우 에러를 발생시킨다.

```ts
let myName = "jiwon";
myName = 28;
// error TS2322: Type '27' is not assignable to type 'string'.
```

## Number & Boolean

타입스크립트는 정수와 소수를 구분하지 않고 `number`라는 타입을 사용한다.

## 타입 할당

### string, number, boolean, any

다음 코드는 에러를 발생시키지 않는다. 선언만 했을 경우 default type이 `any`로 설정된다.

```ts
let myRealAge; // type "any"
myRealAge = 28;
myRealAge = "28"; // ok
```

하지만 any 타입은 모든 타입을 허용하기 때문에 typescript의 강점을 활용하지 못하는 타입이다. 타입 할당은 다음과 같이 한다.

```ts
let myRealAge: number;
myRealAge = 28;
myRealAge = "28"; // error TS2322: Type '"28"' is not assignable to type 'number'.
```

```ts
let str: string = "string";
let num: number = 28;
let bool: boolean = true;
```

### array

배열은 다음과 같이 할당했다고 가정하자 일반적인 자바스크립트이므로, 별다른 에러가 발생하지 않는다.

```ts
let hobbies = ["cooking", "sports"];
console.log(hobbies[0]); // "cooking"
console.log(typeof hobbies); // object
```

하지만 hobbies를 다른 타입의 요소(element)를 집어넣을 경우 에러를 발생시킨다.

```ts
let hobbies = ["cooking", "sports"];
console.log(hobbies[0]); // "cooking"
console.log(typeof hobbies); // objec
hobbies = [100]; // error TS2322: Type 'number' is not assignable to type 'string'.
```

타입스크립트는 타입 추론을 통해 `string`값만 담을 수 있는 배열로 변수의 타입을 정의했기 때문이다.

array는 다음과 같이 정의할 수 있다.

```ts
let hobbies: any[] = ["cooking", "sports"];
hobbies = [100];
hobbies = 100; // error!
```

```ts
let hobbies: string[] = ["cooking", "sports"];
// let hobbies: Array<string> = ["cooking", "sports"];
hobbies = [100]; // error!
```

### tuples

tuple은 각기 다른 타입을 가지는 element 정의하는 타입이다.

```ts
// 첫번째 요소는 string, 두번째 요소는 number 타입
let address: [string, number] = ["Inchoem", 33]; // ok

// error!
let address2: [string, number] = [99, "Inchoem", 33];

// error!
let address3: [string, number] = ["Inchoem", 33, 99];

// ok...!
let address4: [string, number] = ["Inchoem", 33];
address.push(2);
console.log(adress4); // ["Inchoem", 33, 2];
```

### enums

`enums`타입은 다음과 같은 성격을 가진다.

- 키값만 선언만다하면
  - 객체의 키로 접근 => default 인덱스값
  - 배열처럼 index값으로 접군 => index에 맞는 키값

예제로 보면 다음과 같다

```ts
enum Color {
  Gray,
  Red,
  Green
}

console.log(Color.Gray); // 0
console.log(Color.Red); // 1
console.log(Color.Green); // 2
console.log(Color[2]); // "Green"

enum Color {
  Gray,
  Red = 100,
  Green
}

console.log(Color.Gray); // 0
console.log(Color.Red); // 100
console.log(Color.Green); // 101
console.log(Color[100]); // "Red"
```

```ts
enum Color {
  Gray, // 0
  Red,
  Green = 100, // 100
  White, // 101
  Blue = 2 // 2
}

let myRed: Color = Color.Red;
let myGreen: Color = Color.Green;
let myBlue: Color = Color.Blue;
let myZero: string = Color[0];
let myHundred: string = Color[100];
let mySecond: string = Color[2];
console.log(myRed); // 1
console.log(myGreen); // 100
console.log(myBlue); // 2
console.log(myZero); // Gray
console.log(myHundred); // Grwen
console.log(mySecond); // Blue
```

위 예제의 `Color`객체는 다음과 같이 생겼다.

```js

{ '0': 'Gray',
  '1': 'Red',
  '2': 'Blue',
  '100': 'Green',
  '101': 'White',
  Gray: 0,
  Red: 1,
  Green: 100,
  White: 101,
  Blue: 2 }
```

enum 객체 키에 값으로 string 값을 할당하면 일단적인 객체처럼 동작한다,

```ts
enum Person {
  name,
  age,
  city = "Incheon"
}

console.log(Person.city); // "Incheon"
console.log(Person["Incheon"]); // error!
console.log(Person);
/*
{ 
  '0': 'name', 
  '1': 'age', 
  name: 0, 
  age: 1, 
  city: 'Incheon'
}
*/
```

### any

`any`타입은 모든 타입을 할당할 수 있는 타입이다.

```ts
let car: any = "BMW";
console.log(car); // "BMW"
car = { brand: "BMW", series: 3 }; // ok!
console.log(car); // {brand: "BMW", series: 3}
```

위에서 언급한 바와 같이 any 타입은 모든 타입을 허용하기 때문에 typescript의 강점을 활용하지 못하는 타입이므로 지양하도록 한다.
