# 18. Applying Redux Middleware

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
```
