# Fetch API

## Fetch API

웹 브라우저의 XMLHttpRequest를 대체하기 위해 만들어진 새로운 HTTP client 표준이다. 예전 브라우저에서는 지원하지 않기 때문에 다음을 지원해야 한다.

[Fetch Polyfill](https://github.com/github/fetch): 구형 브라우저를 위해 사용한다.

- 트랜스 파일러: 최신 문법을 옛날 문법으로 바꿔주는 것 (babel)
- 폴리필: 최신 **기능**을 예전 브라우저에서도 쓸 수 있게 구형 언어로 구현한 라이브러리
    
    ex) Array.prototype.includes polyfill

---

### Axios vs Fetch API

- Axios: 사용하기 편하나, 옛날 기술인 XMLHttpRequest을 사용하고 있기 때문에 (fetch랑만 연동해서 사용할 수 있는)Service Worker를 사용해야 한다면 Fetch API를 사용해야 한다.

[blog - 정말 멋진 Fetch API](http://hacks.mozilla.or.kr/2015/05/this-api-is-so-fetching/)

http는 헤더가 먼저 전송되고 그 다음 바디를 전송되는 방식인데, fetch는 헤더 프로미스 객체 를 받고, 그 응답이 성공이면 다시 바디 프로미스 객체를 받아서 일을 진행한다. axios가 한번에 헤더와 바디의 응답을 받아내는 것과는 대조적이다.

> 현재는 둘의 점유율이 반반이나 fetch가 최신 문법을 지원하므로 점유율이 높아질 것으로 보인다.

---

