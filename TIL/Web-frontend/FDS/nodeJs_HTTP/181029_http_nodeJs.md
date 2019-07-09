# 181029 HTTP & Node TIL

프론트엔드 개발자는 서버에 요청하고 응답할 줄 알아야한다.

`HTTP`는 요청하고 응답하는 방식의 대표적인 예.

## `POSTMAN`으로 REST API 체험, 실습

[POSTMAN](https://www.getpostman.com/)

REST API를 시험해 볼 수 있는 도구이다. 웹사이트의 주소를 입력하면 해당 사이트의 `HTML` 코드를 보여준다.

[Github REST API](https://developer.github.com/v3/#authentication)

체험

- Authentication: 통신을 할 때 내가 누군지를 밝히는 절차

- token: 내가 누군지를 증명하는 (주민등록증, 보안카드와 비슷한)

- 토큰을 생성한다.

    github profile의 settings => Developer settings => Personal access tokens => Generate token

    아래 설정값을 건들면 권한을 부여하는 것.

- repositories => List your repositories

    1. send as a parameter
    `https://api.github.com/user/repos?access_token=7ff956f855610efd3ae11402211027c72d8f9a07` => send

    응답으로 JSON파일을 반환받는다. (Js에서 `obj = JSON.parse()`)

    2. HEADER

    ```html
    key: Authorization
    VALUE: token 7ff956f855610efd3ae11402211027c72d8f9a07
    https://api.github.com/user/repos 로 전송
    ```

---

## Node.js

### Node.js란?

**Node.js**는V8 엔진(chrome)을 바탕으로한 javascript runtime 이다. Node.js는 통신을 이벤트 핸들러를 통해 동작할 수 있어 코딩하기 편하고, 빠른 속도를 자랑한다.

---

### npm

**npm**은 node.js npm 패키지 생태계이다

`npm init`: npm 초기화

`package.json` => `dependencies`: 어떤 라이브러리를 설치했는지 입력되어있다. 때문에 삭제가 되더라고 `dependencies`에 그 내용이 있다면 삭제가 되더라도, npm install로 설치 할 수 있다.

때문에 협업시에 node_modules를 원격저장소에 올리지 않고도 각자 npm install을 통해 받을 수 있다.

npm에서 실행할 때,
```js
// package.json
  "scripts": {
    "start": "node index.js"
    //"start1": "node index.js"
  }
```
`npm start`하면 실행된다. 아래는 `npm run start1` 이라고 해야 출력된다. start이름만 짧게 가능하다.

(강의 교재의 랜덤문자열 라이브러리 링크)[https://www.npmjs.com/package/randomstring]

예전에는 bower라는 곳에서 프론트엔드에서 받았지만, 빌드 도구들(wexkpack, pasel..)이 전부 node위에서 동작하기 때문에 한번에 같이 받는 등의 편의를 위해 많은 **프론트엔드 라이브러리들이 npm에 올라가게 됐다.**

---

## HTTP

### HTTP

**웹 브라우저와 웹 서버 간의 통신**을 위해 개발된 통신규약

모바일 앱, 모든 서버 에서 모두 서버와 통신할 때 쓰이며 **80번 포트를 기본으로 사용**한다.

> `interpark.com:80`해도 적용된다.

클라이언트의 **요청(request)**과 서버의 **응답(response)**으로 이루어진다.

http는 문서만 보내준다면 더 이상의 기능이 필요 없기 때문에 연결을 끊는다. (연결을 계속 해야하는 게임과는 대조적이다.)

---

### HTTPS (HTTP over SSL)

HTTP 통신을 암호화해 주고받는 내용을 중간에서 가로챌 수 없도록 한다.

**443번 포트**를 기본으로 사용한다.

> `www.daum.net:443`해도 적용된다.

---

### HTTP/2

**구글의 SPDY 프로토콜**을 기반으로 2015년에 확정된 새로운 HTTP 표준으로, 속도개선에 중점을 두고 개발됐다. 

반드시 HTTPS를 사용해야 하고, 전체 웹사이트의 30% 이상을 사용하고 있다.

[HTTP/2사용비율](https://w3techs.com/technologies/details/ce-http2/all/all)

> http/2를 사용하는 웹사이트가 아니라면 network에서 header의 속성의 단어 첫글자가 대문자다

---

### HTTP의 구성요소

#### 1. Request & Response

웹 브라우저(또는 클라이언트)는 웹 서버에 요청, 서버는 클라이언트에 응답을 보낸다.

웹 브라우저의 경우, HTML 문서 형태의 응답이 오면 해당 문서를 분석한 후, **문서에 포함된 모든 자원에 대한 요청을 각각 추가로 보낸다. (이미지, 동영상, 오디오, CSS, JS, 폰트, ...)**

---

#### 2. Request Methods

[8가지요청메소드](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods)

* `GET`: 정보를 받는다. (자료의 본문을 요청)
* `POST`: 정보를 서버에 등록한다. (새로운 자료를 등록)
* `PUT`: 정보를 교체한다.

웹 브라우저는 **특정 상황에서 특정 메소드로 요청을 보내도록 만들어져 있다.**

---

#### 3. URL

https://www.example.com:3000/path/resource?id=123#section-id
https://www.example.com:3000(여기까지 서버주소)/path/resource?id=123#section-id(여기까지 resourse 주소)

1. Scheme(https:)
```html
<!-- 메일을 보내게 메일 앱을 열어준다. -->
<a href="mailto:seungha.me@gmail.com">메일</a>
<!-- 모바일에서 누르면 전화앱을 열어서 전화를 걸어준다. -->
<a href="tel:01012345678">전화걸기</a>
```
2. Subdomain(www)
3. Domain(example)
4. Top-level Domain
5. port
6. path
7. QueryString: 보통 `?`이 후, 요청을 어떻게 보낼지에 대한 정보들
8. Fragment Identify(또는 Hash): 해당 id값

---

#### 4. Percent Encoding

URL은 **ASCII 문자**(128개의 영문자+특수문자+제어문자)밖에 사용하지 못하기 때문에, non-ASCII 문자를 위한 표현방법이 필요하다.

**Percent encoding**은 **non-ASCII 문자를 위한 웹 표준 인코딩 방법**으로, JavaScript에 관련 기능이 포함되어 있다.

한글은 [퓨니코드](https://ko.wikipedia.org/wiki/%ED%93%A8%EB%8B%88%EC%BD%94%EB%93%9C)라는 인코딩 방식이 쓰인다.

```html
<!-- 아래 두 주소는 같지만 위 주소는 아스키문자가 아니기 때문에 퓨니코드라는 안코딩 방식을 통해 서버에 전송된다.  -->
구글검색: 한국 한글주소: https://www.google.co.kr/search?q=한국
구글검색: 한국 아스키 변환 주소: https://www.google.co.kr/search?q=%ED%95%9C%EA%B5%AD
```

```js
> encodeURIComponent("한글")
"%ED%95%9C%EA%B8%80"
> decodeURIComponent("%ED%95%9C%EA%B8%80")
"한글"
```

---

#### 5. Response Status (응답의 상태)

응답의 성공, 실패 여부와 종류를 나타냄

[HTTP Status Codes](https://httpstatuses.com/)

Status Category (몇번대-)

- 200- : 성공
    - 200 OK: 성공
    - 201 Create: 자료가 성공적으로 생성됨

- 300- : 추가 작업이 필요함
    - 301 Moved Permanently (Redirection): 자료가 완전히 다른 곳으로 이동했음 (location이라는 헤더에 가야할 주소가 있음..)
    - 302 Found (Redirection): 자료가 일시적으로 다른 곳에 있음
    - 304 Not Modified (Cache): 클라이언트가 이미 가지고 있던 자료가 수정되지 않았음 (가진 자료를 그대로 사용하면 돤다, 브라우저에 자료를 저장해뒀다.)

- 400- : 살패, 클라이언트 책임
    - 400 Bad Request: 요청의 형태가 잘못되어 응답할 수 없음
    - 403 Forbidden: 요청한 자료에 접근할 권한이 없음
    - 404 Not Found: 요청한 자료가 없음

- 500- : 실패, 서버책임
    - 500 Internal Server Error: 요청을 처리하던 중에 예상치 못한 오류가 발생함
    - 503 Service Unavailable: 서버가 일시적으로 응답을 할 수 없음

---

#### 6. Header

**요청과 응답**에 대한 **추가정보**를 표현하는 데 사용되며, 인증, 캐싱, 쿠키, 보안, 프록시 등 웹 표준에 정의된 **많은 기능을 제어**하는 데 사용된다.

- Authorization: 요청의 인증 정보
- User-Agent: 요청 중인 클라이언트의 정보 (***)
- Location: 301, 302 응답에서 자료의 위치 (***)
- Accept: 요청이 어떤 형태의 자료를 원하는지 나타냄
- Content-Type: 요청 혹은 응답이 어떤 형태의 자료인지 나타냄

---

## Express

서버에서 react와 같이 코드를 간결하게 만들어주는 프레임워크이다.

환경변수: 운영체제상에 저장된 변수 (터미널에서 `env`)

만약 HOME이라는 환경변수에 접근하려면 node에서 `process.env.HOME`이라고 입력하면 된다.

`FOO=BAR node`: 환경변수를 선언한채로 node를 실행시킨다.

`process.env.FOO` => BAR




