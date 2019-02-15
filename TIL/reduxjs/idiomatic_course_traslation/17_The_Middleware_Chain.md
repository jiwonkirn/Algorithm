# 17. The Middleware Chain

## index

- [Translation](##Translation)
- [Code](##Code)

---

## Code

### Previos Code

```js
import { createStore } from "redux";
import todoApp from "./ducks";

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;

  return action => {
    if (typeof action.then === "function") {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

const configureStore = () => {
  const store = createStore(todoApp);

  // "production"은 배포 모드
  // "development"는 개발 모드이다.
  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }

  store.dispatch = addPromiseSupportToDispatch(store);

  return store;
};

export default configureStore;
```

### Current code

```js
import { createStore } from "redux";
import todoApp from "./ducks";

// logging 하는 함수
const logger = store => next => {
  if (!console.group) {
    return next;
  }

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);

    const returnValue = next(action);

    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

// promise action을 처리하는 함수
const promise = store => next => action => {
  if (typeof action.then === "function") {
    return action.then(next);
  }
  return next(action);
};

// 미들웨어에 dispatch까지 주입(실행)한 함수
const wrapDispatchWithMiddlewares = (store, middlewares) =>
  middlewares
    .slice()
    .reverse()
    .forEach(middleware => {
      store.dispatch = middleware(store)(store.dispatch);
    });

// store 설정
const configureStore = () => {
  const store = createStore(todoApp);
  const middlewares = [promise];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  wrapDispatchWithMiddlewares(store, middlewares);

  return store;
};

export default configureStore;
```

---

## Translation

저번 강의에서 우리는 임의의 작업을 위해 `dispatch` 함수를 덮어씌우는 두가지 함수를 작성했습니다. 이 함수들이 어떻게 동작하는지 자세히 살펴봅시다.

```js
const configureStore = () => {
  const store = createStore(todoApp);

  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }

  store.dispatch = addPromiseSupportToDispatch(store);

  return store;
};
```

`store`를 반환하기 전에 있는 마지막 `dispatch`함수는 `addPromiseSupportToDispatch`함수를 호출한 결과물입니다.

#### addPromiseSupportToDispatch Before:

```js
const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;

  return action => {
    if (typeof action.then === "function") {
      return action.then(rawDispatch);
    }
    return rawDispatch;
  };
};
```

`addPromiseSupportToDispatch`에 의해 반환된 함수는 일반적인 `dispatch`합수처럼 동작합니다. 하지만, `action` 매개변수에 프로미스 객체(인스턴스)를 인자로 받는다면 인자로 들어온 프로미스의 반환값을 인자로 하여 `rawDispatch`함수를 실행합니다.

> `action.then(response => rawDispatch(response))`

프로미스가 아닌 경우에는 `rawDispatch`를 반환하며, 호출했을 때 인자로 받았던 `store.dispatch`와 동일합니다.

### `dispatch`함수 리팩토링

`store.dispatch`함수는 앞서 재할당 됐으므로 `addPromiseSupportToDispatch` 함수 내에서 `rawDispatch`를 사용하는 것은 부적절합니다.

`rawDispatch`는 `next`로 바꿀 것입니다. 이는 체인에 있어 다음 번의 `dispatch` 함수이기 때문입니다.

> 원문: We'll rename rawDispatch to next, because this is the next dispatch function in the chain.

#### `addPromiseSupportToDispatch` After:

```js
const addPromiseSupportToDispatch = store => {
  const next = store.dispatch;
  return action => {
    if (typeof action.then === "function") {
      return action.then(next);
    }
    return next(action);
  };
};
```

위의 `next`는 `addLoggingToDispatch()`함수에서 반환된 `store.dispatch`를 나타냅니다.

`addLoggingToDispatch`함수는 기존 redux api와 같은 `dispatch` 메소드를 반환하지만, action의 `type`, 이전 상태와 action, 다음 상태를 기록한다는 것을 기억하세요.

`addLoggingToDispatch`은 `rawDispatch`를 호출하는데, 이것은 `addLoggingToDispatch`함수가 호출됐을 때의 `store.dispatch`와 동일합니다.

그러나 logging 기능을 추가하기 전에 duspatch의 기능을 재정의할 수 있음을 우리는 알 수 있습니다.

일관성을 위해 우리는 `rawDispatch`를 모두 `next`로 바꿀 것입니다. 특별한 경우에 `next`는 원래의 `store.dispatch`를 가리킵니다.

> action의 타입이 객체일 경우 `next`는 원래의 `store.dispatch`를 가리킵니다.

#### addLoggingToDispatch()

```js
const addLoggingToDispatch = store => {
  const next = store.dispatch;
  if (!console.group) {
    return next;
  }

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);

    const returnValue = next(action);

    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};
```

### 미들웨어 함수를 소개

이러한 스토어 확장 방법은 효과가 있지만, public API를 덮어씌우고, 임의의 함수로 대체하는 것은 매우 좋지 않습니다.

이러한 패턴을 탈피하기위해 우리가 썼던 부가 기능의 멋진 이름일 뿐인 미들웨어 기능을 담은 배열을 선언할 것입니다.(?)

이 미들웨어 배열은 단일 단계(single step)로 적용될 함수가 포함될 것입니다.

> single step: (프로그램에) 한 조작마다 하나씩 명령을 주다

우리는 배열에 `addLoggingToDispatch`와 `addPromiseSupportToDispatch` 함수를 추가(push)할 것입니다.

이제 `store`를 첫번째 인수로 가지고, 미들웨어들의 배열을 두번째 인수로 하는 `wrapDispatchWithMiddlewares`함수를 만듭니다.

```js
const configureStore = () => {
  const store = createStore(todoApp);
  const middlewares = [promise];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  wrapDispatchWithMiddlewares(store, middlewares);

  return store;
};
```

`wrapDispatchWithMiddlewares`함수 내에서 `middlewares`배열에 `forEach`메소드를 사용하여 middleware들을 실행시킬 것입니다.

명확하게 말하자면, `store.dispatch`함수에 `store`를 인수로 한 `middleware`함수를 할당합니다.

```js
const wrapDispatchWithMiddlewares = (store, middlewares) =>
  middlewares.forEach(middleware =>
    store.dispatch = middleware(store);
  );
```

미들웨어 함수 내부에는 반드시 반복해야할 패턴들이 있다는 것을 상기시키세요. 나중에 호출하기 위해서 `next` 변수에 `store.dispatch`의 값을 저장합니다.

To make it part of the middleware contract, you can make "next" an external argument, such as "store" in front and "action" after it.

#### Updating addLoggingToDispatch()

```js
const addLoggingToDispatch = store => {
  return next => {
    if (!console.group) {
      return next;
    }

    return action => {
      console.group(action.type);
      console.log("%c prev state", "color: gray", store.getState());
      console.log("%c action", "color: blue", action);

      const returnValue = next(action);

      console.log("%c next state", "color: green", store.getState());
      console.groupEnd(action.type);
      return returnValue;
    };
  };
};
```

이런 변화와 함께, 미들웨어는 함수에서 함수를 반환하고 또 함수를 반환하는 함수가 됐습니다.

이러한 패턴을 `curring`이라고 부릅니다. 이것은 자바스크립트에서는 흔하지 않지만 함수형 언어에서는 매우 흔합니다.

#### `addPromiseSupportToDispatch` 업데이트

```js
const addPromiseSupportToDispatch = store => {
  return next => {
    return action => {
      if (typeof action.then === "function") {
        return action.then(next);
      }
      return next(action);
    };
  };
};
```

스토어로부터 다음 미들웨어를 가져오는 것 보다는 미들웨어를 호출하는 함수가 마들웨어를 넘길 수 있도록 인수로서 주입할 수 있게 만들었다.

마지막으로 store는 주입된 인수가 아니므로 `store.dispatch`의 이전 값인 다음 미들웨어도 주입해야 합니다.

#### wrapDispatchWithMiddlewares 업데이트

```js
const wrapDispatchWithMiddlewares = (store, middlewares) =>
  middlewares
    .slice()
    .reverse()
    .forEach(middleware => {
      store.dispatch = middleware(store)(store.dispatch);
    });
```

이제 미들웨어가 1등급 개념(?, first class)이므로 `AddLoggingToDispatch`의 이름을 `logger`로 변경하고 `addPromiseSupportToDispatch`의 이름을 `promise`으로 변경할 수 있습니다.

#### Arrow-ifying our promise Middleware

이런 커리 스타일 함수 선언은 매우 읽기가 힘들 수 있습니다. 운좋겠도, 우린 화살표 함수로 사용할 수 있고 그 자체가 표현식인 점에 의지할 수 있습니다.

```js
// Before
const addPromiseSupportToDispatch = store => {
  return next => {
    return action => {
      if (typeof action.then === "function") {
        return action.then(next);
      }
      return next(action);
    };
  };
};

// After
const promise = store => next => action => {
  if (typeof action.then === "function") {
    return action.then(next);
  }
  return next(action);
};
```

이것은 여전히 함수를 반환하는 함수이지만 가독성이 더 좋아졌다.

이에 사용할 수 있는 정신적 모델은 "이것은 단지 사용할 수 있게 될 때 적용되는 몇 가지 인수를 가진 함수이다"입니다.

> The mental model you can use for this is "this is just a function with several arguments that are applied as they become available".

#### Wrapping up Middleware

우리의 미들웨어는 현재, `dispatch`함수를 override하는 순서로 지정되어 있지만, 미들웨이를 통해 전파되는 순서로 지정하는 것이 더 자연스러울 것입니다.

미들웨어 선언을 변경하여 작업이 진행 중인 순서대로 지정할 것입니다.

```js
const configureStore = () => {
  const store = createStore(todoApp);
  const middlewares = [promise];
  .
  .
  .
```

또한 과거 `array`를 복사한 다음 반대로 배치함으로써(reverse 메소드) 미들웨어를 읽어들이는 순서를 바꿀 것입니다.
