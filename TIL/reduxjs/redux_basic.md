# Redux basic

## 소개

상태 변화가 일어나는 시점에 제약을 두어 상태 변화를 예측 가능하게 하는 상태 관리 라이브러리이다.

### 3가지 원칙

1. 진실은 하나의 소스로부터

   어플리케이션의 모든 상태는 하나의 `store`에 저장된다.

2. 상태는 읽기 전용이다.

   상태를 변경하는 유일한 방법은 `action`객체를 전달하는 방법 뿐이다.

3. 변화는 순수 함수로 작성되어야한다.

   상태가 어떻게 변화할지 순수 `reducer`함수로 정의한다.

---

## 기초

### `action`

`app`에서 `store`로 보내는 데이터 묶음이다. `store.dispath` 라는 메소드로 `store`에 보낼 수 있으며, 이는 상태를 변경할 수 있는 유일한 방법이다.

```js
// action type
const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// action
const addTodo = text => ({
  type: ADD_TODO, // 어떤 상태 변화를 해야하는 지에 대한 설명이 담긴 속성, action type
  text // reducer에 전달되는 데이터 속성
});

const completeTodo = index => ({
  type: COMPLETE_TODO,
  text
});

const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  text
});
```

---

### `reducer`

이전 상태와 `action`객체를 받아 다음 상태가 어떻게 변경되어야 하는지를 정의하는 순수 함수이다.

- `reducer`에서 절대 하지 말아야 할 것

  - 인수를 변경하기
  - API 호출이나 라우팅 전환같은 사이드이펙트 일으키기
  - Date.now()나 Math.random() 같이 순수하지 않은 함수를 호출하기.
