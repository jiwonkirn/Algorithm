# graphQL

## REST API의 단점

- (보통의 경우) 각각의 자원마다 경로가 따로 있기 때문에 여러 자원이 동시에 필요할 경우에는 요청을 여러 번 보내야 한다. (요청 횟수의 비효율)
- (보통의 경우) 자원의 필요한 속성만 얻어올 수 없음. 즉, 일부 속성이 필요하더라고 전체 속성을 가져와야만 한다. (요청 용량의 비효율)

---

## GraphQL

- Facebook에서 2015년 공개한 **데이터 질의 언어**
- REST API를 대체하기 위해 만들어졌다.
- 클라이언트에서 필요한 데이터의 구조를 GraphQL 언어로 정의한 후 질의할 수 있고, 서버는 그에 맞게 구조화된 데이터를 응답한다.
- 서버에서는 GraphQL 질의를 해석하기 위해 별도의 해석기가 필요하며, [여러 언어의 구현체](https://graphql.org/code/)가 나와있는 상태이다.

[github API 실습](https://developer.github.com/v4/explorer/)

[apollo graphQL](https://www.apollographql.com/): graphQL 서버와 클라이언트 모두 지원하고 있다. 나중에 grapgQL을 따로 공부해보고 싶으면 이 링크에 들어가서 배우도록 한다.

[서버와의 통신을 위한 책 추천: ]()

> github v3는 REST API, v4는 GraphQL