# 18. Applying Redux Middleware

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

---

## Translation

모든 사람들이 미들웨어를 스스로 구현해야한다면 그것은 실용적이지 못할 것입니다.

우리는 이것들을 제거하고 `Redux`로 부터 `applyMiddleware`함수를 불러올 것입니다.

#### configureStore Before:

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

우리는 `configureStore`함수를 보고 `store(createStore)`가 당장 필요한 것이 아님을 알 수 있습니다. 미들웨어들을 일일이 열거하는 코드 아래로 `store`를 이동시킬 수 있습니다.

또한 임의로 만든 `wrapDispatchWithMiddlewares` 함수를 제거하고, 대신 미들웨어와 함께 `store`를 만들 것입니다.

`createStore`의 두번쩨 인수에는 `applyMiddleware`함수의 반환값이 들어갈 것이도 `applyMiddleware` 함수의 인수에는 미들웨어들이 들어갈 것입니다.

`createStore`의 마지막 인수는 `enhancer`라고하며 선택적입니다. persistedState를 지정하려면 `enhancer` 이전에 인수로 부여해야 합니다. (persistedState가없는 경우 건너 뛸 수도 있습니다).

ex)

```js
createStore(
  todoApp,
  persistedState, // persistedState, optional
  applyMiddleware(...middlewares) // enhancer, optional
);

// persistedState가 없을 경우
createStore(
  todoApp,
  applyMiddleware(...middlewares)
);
```

많은 미들웨어를 npm 패키지에서 설치 가능합니다. 우리가 쓴 `promise`와 `logger` 미들웨어도 예외는 아닙니다.

터미널에서 `npm install --save redex-promise`를 실행하면 Promise 지원을 실행하는 미들웨어가 설치됩니다.

`redex-logger`라는 패키지로 이전에 작성한 `logger` 미들웨어로 대체할 수 수 있지만 커스터마이징을 원한다면 직접 작성하는 것이 더 용이합니다.

`configureStore.js` 내에서 이제 새 미들웨어를 가져와 사용할 수 있습니다. 더 이상 스토어를 참조할 필요가 없으므로 `configureStore`에서 직접 반환하면 됩니다.

#### Updated configureStore.js

```js
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import todoApp from './reducers';

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
    // Note: you can supply options to `createLogger()`
  }

  return createStore(
    todoApp,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
```