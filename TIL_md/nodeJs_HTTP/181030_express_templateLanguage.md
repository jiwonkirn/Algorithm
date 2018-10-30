# 181030 TIL (EXPRESS, Template Language)

## EXPRESS

Node.js 생태계에서 가장 널리 쓰이는 **웹 프레임워크**. 내장기능(코어)는 기능이 매우 적기 때문에 **미들웨어**를 주입한다.

- 미들웨어: 코어에 붙이는 추가기능.

[EXPRESS Official Hompage](https://expressjs.com/ko/)

> 서버(혹은 EXPRESS)는 요청을 보내서 응다을 받는 형식이다.

요청의 구성 요소

- 메소드: GET, POST ..
- 주소
- 헤더: 정보를 담고 있다.
- 바디: 본문 (컨텐츠)를 담아 보내는 역할

응답의 구성 요소

- 상태코드
- 헤더
- 바디

```js
// Express 인스턴스 생성
const app = express() // 서버를 app이라는 변수에 담는다.

// 미들웨어 주입
app.use(sessionMiddleware())
app.use(authenticationMiddleware())

// 라우트 핸들러 등록
// request: 요청 매개변수, response: 응답을 send등의 메소드로 출력할 수 있다.
app.get('/', (request, response) => { // '/'에서 일어난 요청에 대해.
  response.send('Hello express!')
})

// 서버 구동
// 나는 3000 포트에서 요청이 오기를 기다리고 있겠다.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
```

ROUTING
```js
// HTTP 요청 메소드(GET, POST, ...)와 같은 이름의 메소드를 사용
// get 메ㅔ소드로 해당 경로에 요청이 들어왔을 때 응답으로 'Hello Routing!'를 출력해라.
app.get('/articles', (req, res) => {
  res.send('Hello Routing!')
})
// 특정 경로에만 미들웨어를 주입하는 것도 가능
app.post('/articles', bodyParserMiddleware(), (req, res) => {
  database.articles.create(req.body)
    .then(() => {
      res.send({ok: true})
    })
})
// 경로의 특정 부분을 함수의 인자처럼 입력받을 수 있음
// 예를 들어 articles/1 이라는 경로로 요청이 들어오면 다음 코드가 실행된다.
app.get('/articles/:id', (req, res) => {
  database.articles.find(req.params.id) // `req.params`에 저장됨 // req.params.id 는 1과 같다.
    .then(article => {
      res.send(article)
    })
})
```

Request 객체 (라우트 핸들러의 request 매개변수에 들어가는 인수와 같다)

- `req.body`: 요청 바디를 적절한 형태의 자바스크립트 객체로 변환하여 이곳에 저장 (body-parser 미들웨어에 의해 처리됨)
- `req.ip`: 요청한 쪽의 IP
- `req.params`: route parameter
- `req.query`: query string이 객체로 저장됨 (주소의 ? 뒷부분

Response 객체 (라우트 핸들러의 reponse 매개변수에 들어가는 인수와 같다)

- `res.status(...)`: 응답의 상태 코드를 지정하는 메소드
- `res.append(...)`: 응답의 헤더를 지정하는 메소드
- `res.send(...)`: 응답의 바디를 지정하는 메소드 인자가 텍스트(string)면 text/html(content type), 객체면 application/json 타입으로 응답

[실습](https://glitch.com/edit/#!/pretty-chatter?path=server.js:12:3)

---

## Template Language

### Template Engine

**템플릿과 데이터를 결합**해 문서를 생성하는 프로그램, 혹은 라이브러리, 템플릿을 작성할 때 사용하는 **언어를 템플릿 언어**라고 한다.

요즘은 템플릿 언어를 사용하기 보다는 REACT같은 프레임워크로 많이 한다.

> ex) HTML안에 JSP, ASP, PHP, EJS(모두 Template Engine)를 넣는다.

---

### EJS(Embedded JavaScript Template)

Node.js 생태계에서 가장 많이 사용되는 템플릿 엔진으로, JavaScript 코드를 템플릿 안에서 그대로 쓸 수 있다.

[vscode 확장프로그램](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)
[EJS 에서 EMET 사용](http://blog.daum.net/_blog/BlogTypeView.do?blogid=0Mst5&articleno=7691304&categoryId=807820&regdt=20171113095204)


Express에서 EJS 사용하기

- EJS 설치

`$ npm install --save ejs`

- template engine 설정

`app.set('view engine', 'ejs')`

- res.render()

```js
const data = {
  title: 'Template Language',
  message: 'Hello EJS!',
  showSecret: true
}
res.render('index.ejs', data) // index.ejs라는 템플릿에 data를 입혀서 응답해라.
```

[EJS 예제](https://glitch.com/edit/#!/laser-infinity?path=README.md:1:0)

[EJS 실습](https://glitch.com/edit/#!/wax-bit?path=README.md:1:0)

* **slug**: 특정 자료(객체)를 대표하는 짧은 문자열. 객체에 들어있고, url에 사용하기 위해 넣는다.