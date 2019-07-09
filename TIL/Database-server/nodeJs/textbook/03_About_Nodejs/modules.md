# 노드 내장 모듈

## 1. os

노드의 `os`모듈에는 운영체제의 정보들이 담겨있다. 웹 서비스를 제작할 때는 많은 필요가 없지만, 운영체제별로 다른 서비스를 제공할 때는 유용하다.

### 운영체제 정보

- `os.arch()`: 프로세서 아키텍쳐 버전
- `os.platform()`: 운영체제 플랫폼 정보
- `os.type()`: 운영체제의 종류
- `os.uptime()`: 운영체제 부팅 후 흐른 시간
- `os.hostname()`: 컴퓨터 이름
- `os.release()`: 운영체제 버전

### 경로

- `os.homedir()`: 홈 디렉토리 경로
- `os.tmpdir()`: 임시 파일 저장 경로

### cpu 정보

- `os.cpus()`: 컴퓨터 코어 정보
- `os.cpus().length`: 코어 개수

### 메모리 정보

- `os.freemem()`: 사용 가능한 메모리(RAM)
- `os.totalmem()`: 전체 메모리 용량

### 에러

- `os.constants`: 에러와 신호에 대한 정보, 코드가 너무 많아서 발생할때 찾아보는 것이 좋다.

---

## path

폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈이다. path 모듈이 필요한 이유중 하나는 윈도우와 unix기반 운영체제간 경로구분자가 다르기 때문이다.

- windows: ₩, \
- POSIX(unix 기반 macos, linux): /

### path 모듈의 methods

- `path.sep`: 운영체제의 경로구분자(`\` or `/`)
- `path.delimiter`: 환경변수 구분자.
  - window는 `;`, POSIX는 `:`
  - process.env.PATH를 입력하면 해당 구분자로 여러 경로가 구분되어 있다.
- `path.dirname(path)`: 파일이 위치한 폴더 경로
- `path.extrname(path)`: 파일의 확장자
- `path.basename(path, extension)`: 파일의 이름을 확장자와 함꼐 보여준다. 파일 이름만 출력하고 싶다면 두번째 인자로 확장자를 대입해준다.
- `path.parse(path)`: 파일 경로를 root, dir, base, ext, name으로 분리해준다.
- `path.format(object)`: path.parse()한 객체를 파일 경로로 합친다.
- `path.normalize(path)`: `/`나 `\`를 혼용했을 때 정상적인 경로로 바꿔준다.
- `path.isAbsolute(path)`: 파일의 경로가 상대경로인지 절대경로인지 `true`, `false`로 알려준다.
- `path.relative(기준경로, 비교경로)`: 경로를 두 개 넣으면 첫 번째 경로에서 두번째 경로로 가는 법을 알려준다.
  ```js
  path.relative("/User/kimjiwon/dev/nodejs/node_textbook/path.js", "/User");
  // '../../../../..'
  ```
- `path.join(path, ...)`: 여러 인자를 넣으면 하나의 경로로 합쳐준다. 상대경로인 ..과 현위치를 나타내는 .도 알아서 처리해준다.
- `path.resolve(path, ...)`: `path.join()`과 비슷하지만 /를 만나면 절대경로로 인식하여 맨 앞의 경로는 무시한다.
  ```js
  path.join("/a", "/b", "/c"); // "/a/b/c"
  path.resolve("/a", "/b", "/c"); // "/b/c"
  ```

> 가끔 windows 에서 POSIX 스타일 path를 사용할 때가 있고, 그 반대일 때가 있다.
> window 에서는 path.posix.sep이나 path.posix.join() 같이 사용하면 되고,
> POSIX 에서는 path.win32.sep이나 path.win32.join() 같이 사용하면 된다.

---

## url

인터넷 주소를 쉽게 조작하게 하는 모듈이다.

- `new url.URL(주소)`: 주소를 정해진 분류로 나눠준다.

```js
const url = require("url");

const { URL } = url;
const myURL = new URL(
  "https://github.com/jiwonkirn/Review/tree/master/TIL/nodeJs/velopert?name=jiwon&age=28"
);
/*
URL {
  href:
   'https://github.com/jiwonkirn/Review/tree/master/TIL/nodeJs/velopert?name=jiwon&age=28',
  origin: 'https://github.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'github.com',
  hostname: 'github.com',
  port: '',
  pathname: '/jiwonkirn/Review/tree/master/TIL/nodeJs/velopert',
  search: '?name=jiwon&age=28',
  searchParams: URLSearchParams { 'name' => 'jiwon', 'age' => '28' },
  hash: '' }
*/
```

- `url.parse(주소)`: 주소를 node방식의 분류로 나눠준다.
- `url.parse(객체)`: 주소를 다시 합쳐준다.
