# ES6 with Typescript

## let, const 블록스코프

`let`과 `const`는 블록스코프를 가진다.

```js
if (1) {
  let a = 1;
}

console.log(a); // error!
```

바깥 스코프에 있는 변수를 읽을 수는 있지만, 바깥 스코프에 있는 변수를 재선언하면, 재선언한 위치 상위에서 읽더라도 읽지 못하고 undefined로 읽는다.

```js
const b = 1;
if (1) {
  console.log(b); // 1
}

const a = 1;
if (1) {
  console.log(a); // undefined
  const a = 2;
  console.log(a); // 2
}
```

---

## 화살표 함수

es6에서는 화살표 함수를 작성할 수 있다.

```ts
const add = (a: number, b: number): number => a + b;

const sub = (a: number, b: number): number => {
  return a + b;
};

const mul: (a: number, b: number) => number = (a, b) => a * b;
```

매개변수가 하나일때 자바스크립트는 괄호를 생략할 수 있지만 타입스크립트는 생략할 수 없다.

```ts
// javascript
const printName = name => console.log(name);
// typescript
const printAge = (age: number) => console.log(name);
```

---

## 매개변수의 기본값 (default parameter)

es6부터는 매개변수의 기본값을 설정할 수 있다. 타입스크립트에서는 `(arg: 타입 = 매개변수 기본값)`과 같은 문법으로 정의할 수 있다.

```ts
const countdown = (start: number = 10, end: number = start - 5): void => {
  while (start > 0) {
    start--;
  }
  console.log("Done!", start, end);
};
countdown(); // "Done! 0 5"
```

---

## 나머지 매개변수 (rest parameters)

es6에 추가된 나머지 매개변수와 type지정을 같이 해주려면 `(...args: 타입)` 과 같이 정의할 수 있다.

```ts
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers)); // [1, 10, 99, -5]

function makeArray(name: string, ...args: number[]) {
  return args;
}

console.log(makeArray("jiwon", 1, 2, 3)); // "jiwon", [1,2,3]
```

tuple 타입같은 경우는 아래와 같이 타입 지정을 할 수 있다. tuple 타입 특성상 매개변수의 개수를 제한한다.

```ts
// tuple
function printInfo(...info: [string, number]) {
  console.log("My name is " + info[0] + " and I am " + info[1] + " years old!");
}
console.log(printInfo("jiwon", 28)); // "My name is jiwon and I am 28 years old!"
console.log(printInfo("jiwon", 28, "incheon")); // error!
```

---

## 분해 대입 (Destructuring)

es6 이 전에는 객체의 속성 혹은 배열의 요소를 각각 변수에 담아두려면 아래와 같이 선언해야 했다.

```ts
const myHobbies = ["Cooking", "Sports"];
const hobby1 = myHobbies[0];
const hobby2 = myHobbies[1];
console.log(hobby1, hobby2); // "Cooking", "Sports"
```

하지만 아래와 같이 배열의 각 요소를 분해하여 대입할 수 있다.

```ts
const [a, b, ...rest] = [1, 2, 3, 4];
console.log(a, b, rest); // 1, 2, [3, 4]
```

같은 배열 리터럴 안에 변수를 선언하면 변수 순서대로 값이 할당된다. 위와 같이 나머지 매개변수 또한 활용할 수 있다.

객체의 경우는 아래와 같은 문법을 사용한다.

```ts
const userData = {
  name: "jiwon",
  age: 28,
  address: "Incheon",
  hobby: "Cooking"
};
const { name, age, ...rest } = userData;
console.log(name, age, rest); // "jiwon", 28, {address: "Incheon", hobby: "Cooking"}
```

만약 속성 키와 변수의 이름을 다르게 주고싶다면 아래와 같이 할 수 있다.

```ts
const userData2 = { name: "Seho", age: 25 };
const { name: userName, age: userAge } = userData2;
console.log(userName, userAge); // "Seho", 25
```

---

## 템플릿 리터럴 (Templete literal)

템블릿 리터럴은 백틱(`\``)을 사용하여 문자열을 작성하는 문법이다. es6에서 변수와 함께 문자열을 작성하려면 다음과 같이 했어야했다.

```ts
const hisName = "jiwon";
const greeting = "Hello " + hisName + ", \nwelcome!";
console.log(greeting);
// Hello jiwon,
// welcome!
```

템플릿 리터럴로 작성하면 다음과 같이 할 수 있다.

```ts
const hisName = "jiwon";
const greeting = `Hello ${hisName}, 
welcome!`;
console.log(greeting);
// Hello jiwon,
// welcome!
```

---

## 그 밖의 변경

`symbol`, `iterator`, `promise`, `generator` 등이 있지만 본 강의에서는 다루지 않는다.

---

## 과제

다음 코드를 es6 문법으로 바꿔서 작성해보시오.

```js
// Exercise 1 - Maybe use an Arrow Function?
var double = function(value) {
  return value * 2;
};
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
var greet = function(name) {
  if (name === undefined) {
    name = "Max";
  }
  console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
```

작성한 답

```js
// Exercise 1 - Maybe use an Arrow Function?

const doubleES6 = value => value * 2;
console.log(doubleES6(10));

// Exercise 2 - If only we could provide some default values...
const greetES6 = (name = "Max") => console.log(`Hello, ${name}`);

greetES6();
greetES6("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push(...numbers);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];

const [res1, res2, res3] = testResults;
console.log(res1, res2, res3);

// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };

const { firstName: first, experience: exp } = scientist;
console.log(first, exp);
```
