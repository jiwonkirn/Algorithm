/* ==============

목차

1. 객체의 선언

2. 배열의 선언

3. 정수 & 실수 판별

4.  NaN (Not a Number) 판별

5. 값이 같은지를 알아보는 메소드

6. 유한한 수인지 무한한 수인지 판별하는 메소드

7. string타입을 number타입으로 바꿔주는 메소드

8. Math 객체의 메소드

9. number 타입의 메소드

=============== */



/* ===============
    객체의 선언
=============== */

const obj1 = { x: 1, y: 2, z: 3 }

const obj2 = {
    x: 1, // 'x: 1'(속성), 'x'(속성명), '1'(속성값)
    'y': 2, 
    'fast campus': 3, //작은 따옴표를 붙이면 식별자 규칙에 어긋나도 속성명을 지정할 수 있다.
    z: {
        a: 1,
        b: 2
    }, //객체 안에 객체
    increaseX: function() {
        this.x = this.x + 1; //this 는 자기자신
    } //객체 안에 함수 - 메소드(method)
}



/* ===============
    배열의 선언
=============== */

// 배열(array)의 생성
const arr = ['one', 'two', 'three'];

// 배열 호출
arr[0] // 'one'



/* ==================
    정수 & 실수 판별
=================== */

// 정수(integer)를 판별하는 메소드(method)로 정수와 실수 판별
Number.isInteger(1); // true
Number.isInteger(0.1); // false



/* ===========================
    NaN (Not a Number) 판별
===========================+ */

// NaN을 판별하는 메소드
const thisIsNan = NaN;

Number.isNaN(thisIsNan); // true
Object.is(thisIsNan, NaN); // true




/* ===========================
    값이 같은지를 알아보는 메소드
=========================== */

Object.is(0, -0); // false



/* =====================================
    유한한 수인지 무한한 수인지 판별하는 메소드
====================================== */

Number.isFinite(1); // true
Number.isFinite(Infinity); // false
Number.isFinite('1'); // false
isFinite('1'); // true - `isFinite`는 문자열을 숫자로 변환한다.
//Finite = 유한한



/* ========================================
    string타입을 number타입으로 바꿔주는 메소드
========================================= */

parseInt('123'); // 123
parseInt('110', 2); // 6 (문자열을 2진수로 간주한다.)
parseFloat('12.345'); // 12.345
parseInt('hello'); // NaN



/* ===================
    Math 객체의 메소드
==================== */

// 상수
Math.E // 자연상수 (2.71...)
Math.PI // 원주율 (3.14...)

// 삼각함수, 로그함수, 지수함수
Math.sin // 사인
Math.cos // 코사인
Math.tan // 탄젠트
Math.log // 밑을 자연상수로 하는 로그함수
Math.exp // 밑을 자연상수로 하는 지수함수
Math.sqrt // 제곱근

// 절대값, 올림, 내림, 반올림, 소수점 아래 잘라내기
Math.abs // 절댓값
Math.ceil // 올림
Math.floor // 내림
Math.round // 반올림
Math.trunc // 소수점 아래 잘라내기

// 최대값, 최소값
Math.max
Math.min

// 랜덤
Math.random



/* =====================
    number 타입의 메소드
====================== */

(12345).toString(); // '12345'
(12345).toLocaleString(); // '12,345'
(1.2345).toFixed(2); // '1.23'

