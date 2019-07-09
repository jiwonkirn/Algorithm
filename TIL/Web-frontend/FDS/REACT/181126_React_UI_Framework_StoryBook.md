# 181126 TIL

[simentic UI](https://semantic-ui.com/)

[React용 simentic UI](https://react.semantic-ui.com/): 컴포넌트들을 미리 만들어두었고, 컴포넌트를 import 하면 스타일이 먹여져있다.

[부트스트랩](https://getbootstrap.com/)

[React용 부트스트랩](https://reactstrap.github.io/)

`install semantic-ui-react`, `npm install semantic-ui-css`

`import 'semantic-ui-css/semantic.min.css'`: 앱 전역에 해당되는 모듈은 `index.js`에서 import한다.

## StoryBook

```js
import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```

.stories.js가 붙은 파일을 다 stories에 추가해준다.

> 서버와의 통신과 같이 부작용이 없는 컴포넌트만 스토리북에서 테스트하도록 한다. 컴포넌트 자체 단위로 판단해야 한다.(prop에 상태를 바꾸거나 통신을 하는 함수가 들어있다고 해도 컴포넌트 단위이기 때문에 해당 컴포넌트에 그런 기능이 정의돼있지 않다면 괜찮다.) 때문에 통신등을 하는 컴포넌트와 화면을 그리는 컴포넌트를 따로 작성하여 관리하는 것이 관례이다.

[presentational component, container component***](https://medium.com/@seungha_kim_IT/presentational-and-container-components-%EB%B2%88%EC%97%AD-1b1fb2e36afb)