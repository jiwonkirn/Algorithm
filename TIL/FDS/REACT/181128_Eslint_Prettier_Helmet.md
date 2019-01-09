# 181126 TIL 라이브러리

## Component 분할

presentation component가 가장 아래 있고 그 위에 container component, 그 위에 page component 그 위에 Route 순서로 컴포넌트를 작성한다.

굳이 통신을 하지 않거나 따로 수정할 일이 없을 경우는 그냥 page component에 모두 작성할 수 있다.

---

## --save-dev

개발의존성, packages.json의 `devDependencies`에만 들어가며, 빌드할 때는 설치하지 않는다. (개발할 때만 필요한 도구)

---

## Pritter & eslint

`npx eslint --fix .`: 모든 문제를 한번에 고친다. 여기서 . 은 현재폴더에 있는 모든 문제를 고치라는 의미이다.
`npx`: node module에 안들어있으면 다운받아 실행시키고 있으면 그 것을 실행시킨다.
