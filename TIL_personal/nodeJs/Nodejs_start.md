# node.js 1일차 (20181223)

[velopert](https://velopert.com/)님 블로그의 nodejs tutorial

- 목차

  - [간단한 서버 만들기](##간단한-서버-만들기)
  - [Evnet Loop](##Evnet-Loop)
  - [웹서버, 웹 클라이언트 코딩](##웹서버,-웹-클라이언트-코딩)

## 간단한 서버 만들기

```js
let http = require("http");

http
  .createServer((request, response) => {
    /* 
      HTTP 헤더 전송
      HTTP Status: 200 : OK
      Content Type: text/plain
    */
    response.writeHead(200, { "Content-Type": "text/plain" });

    /*
      Response Body 를 "Hello World" 로 설정
    */
    response.end("Hello World\n");
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081");
```

---

## Evnet Loop

Nodejs에서는 Event를 매우 많이 사용하고, 때문에 빠른 속도를 자랑한다. 이벤트 위주 (Event-Driven) 어플리케이션에서는, 이벤트를 대기하는 메인 루프가 있다.
그리고 이벤트가 감지되었을시 Callback함수를 호출한다.

이벤트핸들링은 [옵저버 패턴](https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4)에 의해 작동된다. `EventListeners`함수들이 옵저버 역할을 하고, 이벤트를 기다리다가 이벤트가 발생하면 함수(callback)을 실행시킨다.

```js
// events 모듈 사용
var events = require("events");

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

// event와 EventHandler 를 연동(bind)
eventEmitter.on("eventName", eventHandler);

// event를 발생시킨다
eventEmitter.emit("eventName");
```

예제

```js
// evnet 모듈 사용
const events = require("events");

// EventEmitter 객체 생성
const eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
const connectHandler = () => {
  console.log("Connection Successful");

  //data_received 이벤트 발생시키기
  eventEmitter.emit("data_received");
};

// connection 이벤트와 connectHandler 이벤트 핸들러를 연동
eventEmitter.on("connection", connectHandler);

// data_received 이벤트와 익명 함수 연동
// 함수를 변수에 담는 대신에 .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on("data_received", () => {
  console.log("Data Received");
});

// connection 이벤트 발생시키기
eventEmitter.emit("connection");

console.log("Program has ended");

// 출력 결과
/*
Connection Successful
Data Received
Program has ended
*/
```

---

## 웹서버, 웹 클라이언트 코딩

index.html 생성

```html
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

server.js 생성

```js
const http = require("http");
const fs = require("fs");
const url = require("url");

// 서버 생성
http
  .createServer((req, res) => {
    // URL 뒤에 있는 디렉토리 / 파일 이름 파싱
    let pathname = url.parse(req.url).pathname;

    console.log("Request for " + pathname + " received.");

    // 파일 이름이 비어있다면 index.html로 설정
    if (pathname == "/") {
      pathname = "/index.html";
    }

    // 파일을 읽기
    fs.readFile(pathname.substr(1), (err, data) => {
      if (err) {
        console.log(err);
        // 페이지를 찾을 수 없음
        // HTTP Status: 404 : NOT FOUND
        // Content Type: text/plain
        res.writeHead(404, { "Content-Type": "text/html" });
      } else {
        // 페이지를 찾음
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        res.writeHead(200, { "Content-Type": "text/html" });

        // 파일 읽어와서 responseBody에 작성
        res.write(data.toString());
      }
      // responseBody에 전송
      res.end();
    });
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
```

서버를 실행시키면 아래와 같이 출력된다.

```js
$ node server.js //Server running at http://127.0.0.1:8081/

Request for / received. // http://127.0.0.1:8081/

Request for /showmeerror received. // http://127.0.0.1:8081/showmeerror
{ [Error: ENOENT: no such file or directory, open 'showmeerror']
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'showmeerror' }

Request for /index.html received. // http://127.0.0.1:8081/index.html
```

client.js 생성

```js
const http = require("http");

// HTTPRequest의 옵션 설정
const options = {
  host: "localhost",
  port: "8081",
  path: "/index.html"
};

// 콜백 함수로 Response를 받아온다.
const callback = res => {
  // response 이벤트가 감지되면 데이터를 body에 받아온다.
  let body = "";
  res.on("data", data => {
    body += data;
  });

  res.on("end", () => {
    // 데이터 수신 완료
    console.log(body);
  });
};

// 서버에 HTTP Request를 날린다.
const req = http.request(options, callback);
req.end();
```

node로 client를 실행시키면 다음과 같이 실행된다.

```js
$ node client.js

/*
<html>
    <head>
        <title>Sample Page</title>
    </head>
    <body>
        Hello World!
    </body>
</html>
*/
```
