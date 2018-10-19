# `hexo`로 블로그 만들기

*2018년 10월 19일 금요일*

> hex 공식 홈페이지 설명[hex](https://hexo.io/docs/)

---

## hexo 블로그 런칭 순서

1. 노드 버전 사용 : `nvm use v8.9.4`

2. 빈 폴더를 만들고 `npm install hexo-cli -g`한다.

3. `hexo init`

4. `npm install`

5. `hexo server`서버를 구동한다. ctrl + C로 끌 수 있다.

6. `hexo new post "post name"` : post를 만든다. (markdown 파일)

7. `hexo clean && hexo generate`: static files를 생성하고 올린다.

8. `npm install hexo-deployer-git --save`

9. `vi _config.yml`의 deploy 를 바꾼다. 
    
> [hexo deployment](https://hexo.io/ko/docs/deployment)

10. hexo deploy

