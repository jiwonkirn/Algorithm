# typescript

## section01

타입스크립트 파일을 컴파일을 하기 위한 사전 설정

- `yarn init`
- `yarn add typescript`
- `yarn add lite-server -D`: 개발용 서버, nodemon이나 live-server와 같은 역할을 한다.
  - `package.json` scripts에 `"start": "lite-server"`
- `tsc --init`: `tsconfig.json`파일 생성, 컴파일 옵션 등을 설정할 수 있고 default로는 커맨드라인에 `tsc`만 입력하면 모든 타입스트립트 파일이 컴파일된다.
