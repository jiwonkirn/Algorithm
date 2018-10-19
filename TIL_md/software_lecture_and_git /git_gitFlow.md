# git / git flow 활용해서 협업하기

*2018년 10월 18일 목요일*

## Index

1. [메모](##메모)
1. [git flow](##git-flow)
1. [vim](##vim)
1. [git](##git)
1. [협업](##협업)
1. [릴리즈](##릴리즈)

---

## 메모

계속해서 기술은 변하기 때문에 한 기술에 매몰되어서는 안된다. 계속해서 공부해야한다.

- Golang : 서버에서 사용하기 위해 구글에서 만들었지만 블록체인에서 많이 쓰인다.

---

## git-flow

gitforwindow.org > git flow 라는 툴을 탑재하고 있다.

homebrew: 패키지를 깔 때 그 관리자 역할을 한다. (macOS)

homwbrew를 설치한 뒤 터미널에 `brew install git-flow-avh` => 맥에 gitflow를 설치한다.

---

## vim 

`~`는 틸드 라고 해서 문서 행이 비어있다는 의미히다.

> editor war

vim을 들어오면 normal mode로 들어온다.

텍스트를 편집하기 위해 `i`를 눌러 insert mode로 들어간다.

`esc`를 누르면 normal mode로 돌아온다.

- `: 숫자` => 몇 번 줄로 이동해라

- `:q` => 나가다

- `:w` => write의 약자. 저장한다는 의미

- `:wq` => 저장하고 나간다.

- `q!` => 강제로 나간다.

나간뒤에 `cat 파일명`하게되면 내용을 읽어준다.

---

## git 

git 명령어

- `git remote add origin git@github.com:jiwonkirn/react-sample.git`: 여기서 origin은 별명이다.
- `git remote`: origin(저장소 별명)이 출력된다.
- `git remote get-url origin` : 연결된 원격저장소 주소(git@github.com:jiwonkirn/react-sample.git)가 출력된다.
- `git remote remove origin`: origin 원격 저장소와의 연결이 삭제된다. //git remote => ''
- `git config --global core.editor "vim"`: git에서 에디터를 vim으로 쓰겠다는 명력어이다.
- `git config --list`: 환경설정된 리스트 보여준다.

---

### git에서의 commit 메세지 작성 TIP

`Doc`: 문서를 작성했을 때 커밋메세지로 사용한다.

```js
Doc: Create README.md

I created README.md for describe this project.
```

`Feat`: 기능 관련된 파일 커밋메세지

`conf`: 환경설정 관련한 파일

---

### github 라이센스

- MIT : 이 것은 오픈소스이다.

- Apache : 마음대로 써도 되지만 나의 것이다.

- GPL : 저작권, 상업적 이용 불가. 

---

### git ignore

`git`이 무시해야할 파일 경로나 파일 확장자 등을 등록한 파일이다.

보통 `Node.js`의 경우, `npm install`로 각각 다운받을 수 있기 때문에 저장소 용량문제로 `Node.js`를 무시하는 경우가 많다.

`.gitignore` 스스로를 막는 경우도 있다.

---

### commit

commit 을 작성할 때 아래와 같이 가능하다.

```js
git commit -m "커밋제목
커밋 내용"
```

---

### branch

함수가 완벽하게 동작해야 커밋한다.

브랜치 상태 확인
- `git branch` : 브랜치 상황을 보여줌
- `git branch -r` : 원격저장소의 브랜치 상황을 보여줌
- `git branch -a` : 둘 다 보여줌

브랜치 생성, 따로 설정하지 않는다면 master의 마지막 시점에서 브랜치를 친다.
- `git branch 브랜치 이름` : 새로운 브랜치 생성
- `git checkout 브랜치 이름` : 브랜치를 바꾼다.

브랜치의 작업 끌어오기
- `git merge 브랜치 이름`

브랜치 삭제: 브랜치의 역할을 다 했을 때 사용한다.
- `git branch -D 브랜치 이름`

하지만 어떤 시점(version)에 가서 브랜치를 치고 싶다면 `chechout`을 한다. (master에서 과거 시점에 돌아가서 변경을 하면 기존 시점에 문제가 생길 수 있기 때문이다.)
- `git checkout 커밋 고유번호`
- `git checkout -b 브랜치 이름` : 그 시점에서 브랜치를 생성한 뒤 들어간다.
- `git push origin 브랜치 이름` : 브랜치로 푸시하기 위해서는 master 대신 브랜치 이름을 입력한다.

다른 브랜치를 merge하려고 하면 conflict가 발생한다. 해당 파일을 들어가서 conflict 문제를 해결한 뒤 `git status`를 해보면

`both modified: 파일경로` 모두 해결되었다는 메세지가 뜬다.

`add`, `commit`, `push`하게 되면 github network상에서 성공적으로 merge되었다는 그래프가 보인다.

---

### fork 실습

1. 상대방의 repo를 방문해서 fork한다.

2. 내 원격 저장소에 복제되어 저장된다.

3. 포크한 repo의 주소를 복사해서 `clone`한다.

4. develope브랜치를 따서 develope 브랜치로 이동한다.

5. develope에서 feature 브랜치를 딴다. ex) git branch feature/editREADME

6. feature 브랜치에서 파일을 수정한 뒤 add, commit, push한다.

7. develope 브랜치로 checkout해서 feature브랜치를 merge하고 push한다.

8. master 브랜치로 checkout해서 develope브랜치를 merge하고 push한다.

9. github에서 pull request한다.

10. upstream에서 pull request한 내용을 merge하거나 취소한다.

---

## 협업

- upstream 저장소의 관리인은 upstream(또는 pm))이라 한다.

- 협업하는 사람1(Dev team)을 제 2자라고 한다.

- 협업하는 사람2(Dev team)을 제 3자라고 한다.

---

### git flow & 협업 (제 2자)의 입장

fork를 해오더라도 git flow init은 다시 해주어야 한다.

`git flow feature start addcontents`  feature/addcontents 로 브랜치를 따서 들어감

`git flow feature finish addcontents` 기능 개발이 끝났으니 feature/addcontents 브랜치를 종료(및 삭제)하겠다. => `devolop`으로 들어옴

fork를 뜬 다음에 `develop`에서 `feature`를 딴 다음 작업하고, `feature`의 작업이 끝나면 develop에 merge시킨뒤 종료한다. 

---

### 협업 (제 2자)의 pull request

`develop`의 내용을 `upstream`(제 1자)에 `pull request`한다.

`pull request`를 받으면 `upstream`은 label 추가를 할 수 있다.

`pull request`가 열러있으면 `pull request`를 한 사람이 지속적으로 push를 했을 때, 또 `pull request`를 하지 않아도 commit추가 추가되면서 그 변경사항이 계속 `pull request`에 저장된다.

---

### 협업 (제 3자): 제 2자의 pull request를 upstream이 받아줬을 때 conplict이슈 해결

`git remote add pmorigin ssh주소` 를 해서 origin 말고 원본 repository의 `develop` 주소를 별명을 붙여 등록한다.

`develop` 브랜치에 가서 `git pull pmorigin develop`을 한다. 

`conflict`가 발생할 것이다. `conflict`을 해결한 뒤 add, commit, push(`origin develop`)한다.

제 1자의 `develop`에 `pull request`한다. (conplict를 해결했다.)

* 주의: 절대 master 브랜치는 사용하지 않는다. (develop 에서 develop으로 보낸다.)

---

## 릴리즈

release는 마스터와 브랜치에 똑같은 버전을 보내주고 닫힌다. master브랜치를 push하면 해당 버전으로 업로드된다.

`git flow release start 버젼`

`git flow release finish 버젼`

---