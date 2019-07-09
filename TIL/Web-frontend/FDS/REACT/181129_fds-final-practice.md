# 181129 마지막 실습 메모

- 서버의 데이터 구조, 이름에 의존한다면 그 것은 좋은 설계가 아니다. 만약 서버의 구조가 바뀌면 모든 코드를 바꿔줘야 한다. 보통 container component에서 데이터 이름을 바꿔준 뒤 presentational component에 뿌려준다.

  > presentational component는 최대한 간결하게 작성하는 것이 재사용성에 좋다.

- 로딩인디케이터와 같이 여러군데에서 공유해야 하는 기능은 hoc로 작성한다.

- switch가 있을 때는 if else 처럼 동작하고, 없으면 전부 if만 있는 것처럼 동작한다.

- container component를 hoc로 둘러주어 바로 export해주는 경우도 많다.

```js
// Header.js
import { withUser } from "../contexts/UserContext";
import HeaderView from "../components/HeaderView";

export default withUser(HeaderView);
```

- 같은 페이지에서 같은 페이지로 redirect할 경우 컴포넌트가 unmount되지 않기 때문에 상태가 날아가지 않는다. 결국 redirect가 컴포넌트로서 그대로 그려지기 때문에 요소들이 없어져 보인다. 이를 해결하기 위해서는 key를 강제로 바꾸어 컴포넌트를 다시 mount할 필요가 있다.
