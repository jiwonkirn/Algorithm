# 181106 TIL

## 서버와 통신하는 작업을 할 때 고려할 점 

멀리 떨어져 있는 서버에 통신을 해야하기 때문에 아래의 상황을 고려해야 한다. 보통 사용자가 어떤 것을 기대하는지에 따라 결정된다.

1. 비관적 업데이트 (pessimistic)

	사용자 입력 => 수정요청 => 성공 시 화면 갱신
	
	단점: 수정된 결과물을 출력하는 브라우저 상태 갱신이 느리다.
	
    > 예: 카페 등의 게시판

2. 낙관적 업데이트 (optimistic)

	사용자 입력 => 화면 갱신 => 수정 요청 
	
	단점: 네트워크 상황이 좋지 않는 등의 이유로 수정 요청에 실패한다면 상태를 원상복구 할 수 있어야한다.
	
    > 예: 트렐로

로딩 인디케이터(loading indicator): 비관적 업데이트를 할 때에는 로딩중이라는 표시를 보여주면 사용자들이 기다릴 수 있다.

---

### 비동기 함수

비동기 함수를 호출하면 프로미스 객체가 반환된다. 그 객체에는 그 함수의 반환값이 담긴다.

---

### 환경변수

`.env`

개발용 서버와 운영용 서버는 분리되어야 하기 때문에, 그 서버 등의 설정을 주입하는 것을 보통 환경변수에서 한다.

[parcel 환경변수](https://en.parceljs.org/env.html)

---

### json-server 서버

docs 읽어보기: [json-server](https://github.com/typicode/json-server)

[]()


#### Filter

원하는 정보를 필터해서 정보를 응답받는다.

```js
GET /posts?title=json-server&author=typicode // 타이틀이 json이고, author가 tyoicode인
GET /posts?id=1&id=2 // 아이딕가 1이거나 2
GET /comments?author.name=typicode // 객체 안에 객체가 들어있는 경우
```

#### Pagenate (페이지 나누는 작업)

```js
GET /posts?_page=7 // 7페이지를 출력한다. (한 페이지의 자료는 default가 10개)
GET /posts?_page=7&_limit=20 // 한 페이지당 자료를 20개씩 나누어 7페이지를 응답받는다.
```

> link 헤더는 뒤로가기 앞으로 가기 등의 기능을 위한 링크값이 저장되어있다.

#### Sort

```js
GET /posts?_sort=views&_order=asc // view의 값을 오름차순하여 응답받음
GET /posts/1/comments?_sort=votes&_order=asc
GET /posts?_sort=id&_order=desc // 최신 글부터 보여주고 싶다.

GET /posts?_sort=user,views&_order=desc,asc // 여러 자료를 컨트롤 
```

> asc = ascending(오름차순 정렬) / desc = descending(내림차순 정렬)

#### Slice

아이디가 20번인 사람부터 30번인 사람의 정보를 가져온다.

#### Operators

- `_gte`: (greater than or equal) : 크거나 같은
- `_lte`: (less thna or equal) : 작거나 같은

```js
GET /posts?views_gte=10&views_lte=20 // 뷰가 10보다 이상 20 이하
```

```js
GET /posts?id_ne=1 // 값이 1인 것만 제외한다.
GET /posts?title_like=server // server라는 단어를 포함하고 있는지.
```

#### Full-text search

키워드로 상품 검색하기 등 단어로 자료를 검색한다.

```js
GET /posts?q=internet // internet이라는 단어를 포함한 응답을 받는다.
```

#### Relationships

자료들간에 관계가 있을 때

- `_embed`: 자식자원을 포함하고 있을 때

```js
GET /posts?_embed=comments // command 라는 자식요소를 불러온다.
GET /posts/1?_embed=comments // 특정 경로의 ~
```

- `_expand`

```js
GET /comments?_expand=post // 부모 요소의 post라는 키를 찾아간다.
```

```js
GET  /posts/1/comments
POST /posts/1/comments // 댓글 생성
```
---

### Axios에서 URLSearchParams 사용하기

[axios params](https://github.com/axios/axios#request-config)

아래처럼 순수 객체를 사용해서 만들 수 있다
```js
  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  // 여기에 넣은 것이 쿼리스트링으로 저장된다.
  params: {
    ID: 12345
  }, // ex) ?id=1&id=2
```

하지만 같은 키를 사용할 수 없고, 아래 키가 상위 키를 덮어씌운다. 때문에 [URLSearchParams](https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams#%EB%A9%94%EC%86%8C%EB%93%9C)를 사용하여 같은 이름의 키를 사용할 수 있다.

---

### bbs 실습

netlify에서 환경변수를 줄 수 있는 방법이 따로 있다.

환경변수를 적용하기 위해서는 서버를 껐다가 켜야한다.(npm start)

parcel은 cache 폴더나 dist폴더에 캐시를 등록한다. 캐시 때문에 로그인이 안되는 이슈가 있기 때문에 두 폴더를 터미널로 지우고, 다시 npm install 한다.