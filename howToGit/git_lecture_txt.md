# git
개인적으로 학습하도록 한다.

* git push -u origin master 

* origin은 원격저장소의 위치이다. 보통은 기본값이 origin이다.

master는 branch인데 기본값이 master이다. 

* git pull --rebase origin master

---

* git fetch
* git merge

---

* upstream은 원래의 저장소이고 fork를 통해 그 repository를 내 저장소에 가져올 수 있다. 내 저장소는 origin
* upstream 저장소의 내용을 pull받을 때는 `git pull --rebase upstream master`를 사용한다.
* pull request는 upstream에 origin의 코드를 올려달라는 요청이다.

---

* master는 기본 branch이다. 혼자 작업할 때는 master만 사용한다.

* git remote -v: 어떤 브랜치(or 저장소)만 등록되어있는지 알려줌

* fork한 저장소에 upstream 저장소를 등록하기 위해
`git remote add upstream 업스트림 저장소 SSH주소`를 입력한다.

* fork한 저장소를 최신 상태로 만들고 싶다면?
`git pull --rebase upstream master`