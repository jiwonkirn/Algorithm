# 181102 TIL axios practice

## axios

프로미스를 기반으로 해서 서버와 통신할 수 있는 라이브러리이다.

*Promise based HTTP client for the browser and node.js*

[axios github](https://github.com/axios/axios)

라이브러리 원서설명

-`axios(url[, config])`: 여기서 '[]'는 배열이 아니라 생략이 가능하다는 의미이다.
- Request method aliases: aliase는 별명이라는 뜻이다.
- URL parameters = query string

---

실습하기

[REST API 실습](https://www.npmjs.com/package/fds-json-server)
[json-server 예제](https://glitch.com/edit/#!/weak-perch?path=.env:1:42)
[json-server github](https://github.com/typicode/json-server)
[할 일 목록 + 로그인](https://codepen.io/jiwonkirn/pen/vQBJjd?editors=1011)

> json--server: 가짜 서버를 띄울 수 있는 라이브러리

```js
const axios = require('axios')

// axios.get('https://weak-perch.glitch.me/db')
//   .then(res => {
//     console.log(res.data)
//   })

async function main(username, password) {

  const res = await axios.post('https://weak-perch.glitch.me/users/login', {
    username,
    password
  })
  
  console.log(res.data.token)

  const res2 = await axios.get('https://weak-perch.glitch.me/todos', {
      headers: {
        'Authorization': 'Bearer ' + res.data.token
      }
  })

  console.log(res2.data)

  const res3 = await axios.post('https://weak-perch.glitch.me/todos', {
    body: "learning REACT",
    complete: false
  }, {
    headers: {
      'Authorization': 'Bearer ' + res.data.token
    }
  }) 

  console.log(res3.data)

}

main('kjw1925', '920913')

console.log('conneting server....')
```

- 서버의 정보를 전부 받아서 전부 다시 그린다는 점은 비효율적인 것 처럼 보인다.
- 만약 여러사람이 쓸 수 있는 할일 목록을 만든다고 하면 개인에게는 하나씩 추가되지만, 서버에는 여러개가 생긴다.
- 믿을 수 있는 상태저장소는 하나만 두는 것이 좋다: single source of truth (진리의 유일한 원천)

실시간 웹(real time web)
- 웹 소켓: 연결이 서버랑 계속 유지되어 요청을 보내지 않아도 응답을 받을 수 있다.

---