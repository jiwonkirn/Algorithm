# Express tutorials

## Express 사용해보기

단순하게 Node.js만으로 웹서버에 필요한 기능들을 하나하나 짜는 것이 번거롭기 때문에 프레임워크를 사용한다. 그 중 가장 많이 사용되는 프레임워크는 `express`이다.

### 예제

router/main.js

```js
// 라우터를 등록한다.
module.exports = app => {
  // '/' 경로로 접속하면 index.html을 렌더링해라
  app.get("/", (req, res) => {
    res.render("index.html");
  });
  // '/about' 경로로 접속하면 about.html을 렌더링해라
  app.get("/about", (req, res) => {
    res.render("about.html");
  });
};
```

server.js

```js
// express를 불러온다.
const express = require("express");

const app = express();

// 라우터를 불러온다.
const router = require("./router/main")(app);

// 서버가 읽을 수 있도록 html의 위치를 정의해준다. (views/index.html...)
app.set("views", __dirname + "/views");

// 서버가 HTML을 렌더링할 때 ejs 엔진을 사용하도록 설정한다.
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// express 서버 생성
const server = app.listen(3000, () => {
  console.log("Express server has started on port 3000");
});

// 정적 파일 다루기: `express.static()` 메소드를 사용하면 정적 파일을 다룰 수 있다. (./public/css/style.css)
app.use(express.static("public"));
```
