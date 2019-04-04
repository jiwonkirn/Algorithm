# Express Tutorial (RESTful API)

## Express로 RESTful API 서버 만들기

---

### `./data/user.json`

```json
{
  "first_user": {
    "password": "first_password",
    "name": "jiwon"
  },
  "second_user": {
    "password": "second_password",
    "name": "seho"
  }
}
```

---

### `./router/main.js`

1. `GET METHOD`

   ```js
   // user 정보를 응답하는 api [GET METHOD]
   app.get("/user/:username", (req, res) => {
     // user.json 을 읽는다.
     fs.readFile(__dirname + "/../data/user.json", "utf-8", (err, data) => {
       // data는 텍스트 형태이기 때문에 JSON.parse를 해야한다.
       const users = JSON.parse(data);
       // res.json()는 JSON 응답을 전송한다.
       res.json(users[req.params.username]);
     });
   });
   ```

2) `POST METHOD`

   ```js
   // 가입을 요청하는 api
   app.post("/register", (req, res) => {
     // 응답받을 객체를 미리 선언한다.
     let result = {};
     const username = req.body["username"];

     // 제대로된 요청 바디를 보냈는지 판단
     if (!req.body["password"] || !req.body["username"]) {
       result["success"] = 0;
       result["error"] = "invalid request";
       res.json(result);
       return;
     }

     // 데이터를 로드 & 중복 체크
     fs.readFile(__dirname + "/../data/user.json", "utf-8", (err, data) => {
       const users = JSON.parse(data);
       if (users[username]) {
         result["success"] = 0;
         result["error"] = "duplicate";
         res.json(result);
         return;
       }

       // 중복이 없다면 데이터를 추가한다.
       users[username] = req.body;

       // 데이터를 저장한다.
       fs.writeFile(
         __dirname + "/../data/user.json",
         JSON.stringify(users, null, "\t"),
         "utf-8",
         (err, data) => {
           result = { success: 1 };
           res.json(result);
         }
       );
     });
   });
   ```

3) `PATCH METHOD`

   ```js
   // user 비밀번호를 수정하는 api
   app.patch("/edit", (req, res) => {
     let result = {};

     // 모든 필드값을 입력했는지 확인한다.
     if (!(req.body.username && req.body.password)) {
       result["success"] = 0;
       result["error"] = "username과 password를 모두 입력해주세요";
       res.json(result);
       return;
     }

     // db 파일을 읽는다.
     fs.readFile(__dirname + "/../data/user.json", "utf-8", (err, data) => {
       const users = JSON.parse(data);
       // 수정할 아이디가 실제로 존재하는지 확인한다.
       if (!users[req.body.username]) {
         result["success"] = 0;
         result["error"] = "일치하는 id가 없습니다.";
         res.json(result);
         return;
       }

       // db를 수정한다.
       users[req.body.username] = req.body;

       // db를 덮어씌운다.
       fs.writeFile(
         __dirname + "/../data/user.json",
         JSON.stringify(users, null, "\t"),
         "utf-8",
         (err, data) => {
           result = {
             success: 1,
             message: req.body // message로 수정된 결과값을 반환한다.
           };
           res.json(result);
           return;
         }
       );
     });
   });
   ```

4. `DELETE METHOD`

   ```js
   // user 정보를 지우는 api
   app.delete("/delete", (req, res) => {
     let result = {};

     fs.readFile(__dirname + "/../data/user.json", "utf-8", (err, data) => {
       const users = JSON.parse(data);

       // 만약 자료가 없다면...
       if (!users[req.body.username]) {
         result["success"] = 0;
         result["error"] = "not found";
         res.json(result);
         return;
       }

       // 해당 유저정보를 지운다.
       delete users[req.body.username];

       // 지운 정보로 덮어씌운다.
       fs.writeFile(
         __dirname + "/../data/user.json",
         JSON.stringify(users, null, "\t"),
         "utf-8",
         (err, data) => {
           result["success"] = 1;
           res.json(result);
           return;
         }
       );
     });
   });
   ```

---

### 전체 코드

```js
module.exports = (app, fs) => {
  // 계정 정보 리스트를 보는 라우터(api)
  app.get("/list", (req, res) => {
    // json 파일을 읽어야 하기 때문에 fs 모듈을 불러온다. 여기서 __dirname은 현재 모듈의 위치를 나타낸다.
    fs.readFile(__dirname + "/../data/user.json", "utf-8", (err, data) => {
      console.log(data);
      console.log(err);
      res.end(data);
    });
  });

  // user 정보를 응답하는 api [GET METHOD]
  app.get("/user/:username", (req, res) => {
    // user.json 을 읽는다.
    fs.readFile(__dirname + "/../data/user.json", "utf-8", (err, data) => {
      // data는 텍스트 형태이기 때문에 JSON.parse를 해야한다.
      const users = JSON.parse(data);
      // res.json()는 JSON 응답을 전송한다.
      res.json(users[req.params.username]);
    });
  });

  // 가입을 요청하는 api
  app.post("/register", (req, res) => {
    // 응답받을 객체를 미리 선언한다.
    let result = {};
    const username = req.body["username"];

    // 제대로된 요청 바디를 보냈는지 판단
    if (!req.body["password"] || !req.body["username"]) {
      result["success"] = 0;
      result["error"] = "invalid request";
      res.json(result);
      return;
    }

    // 데이터를 로드 & 중복 체크
    fs.readFile(__dirname + "/../data/user.json", "utf-8", (err, data) => {
      const users = JSON.parse(data);
      if (users[username]) {
        result["success"] = 0;
        result["error"] = "duplicate";
        res.json(result);
        return;
      }

      // 중복이 없다면 데이터를 추가한다.
      users[username] = req.body;

      // 데이터를 저장한다.
      fs.writeFile(
        __dirname + "/../data/user.json",
        JSON.stringify(users, null, "\t"),
        "utf-8",
        (err, data) => {
          result = { success: 1 };
          res.json(result);
        }
      );
    });
  });

  // user 비밀번호를 수정하는 api
  app.patch("/edit", (req, res) => {
    let result = {};

    // 모든 필드값을 입력했는지 확인한다.
    if (!(req.body.username && req.body.password)) {
      result["success"] = 0;
      result["error"] = "username과 password를 모두 입력해주세요";
      res.json(result);
      return;
    }

    // db 파일을 읽는다.
    fs.readFile(__dirname + "/../data/user.json", "utf-8", (err, data) => {
      const users = JSON.parse(data);
      // 수정할 아이디가 실제로 존재하는지 확인한다.
      if (!users[req.body.username]) {
        result["success"] = 0;
        result["error"] = "일치하는 id가 없습니다.";
        res.json(result);
        return;
      }

      // db를 수정한다.
      users[req.body.username] = req.body;

      // db를 덮어씌운다.
      fs.writeFile(
        __dirname + "/../data/user.json",
        JSON.stringify(users, null, "\t"),
        "utf-8",
        (err, data) => {
          result = {
            success: 1,
            message: req.body // message로 수정된 결과값을 반환한다.
          };
          res.json(result);
          return;
        }
      );
    });
  });

  // user 정보를 지우는 api
  app.delete("/delete", (req, res) => {
    let result = {};

    fs.readFile(__dirname + "/../data/user.json", "utf-8", (err, data) => {
      const users = JSON.parse(data);

      // 만약 자료가 없다면...
      if (!users[req.body.username]) {
        result["success"] = 0;
        result["error"] = "not found";
        res.json(result);
        return;
      }

      // 해당 유저정보를 지운다.
      delete users[req.body.username];

      // 지운 정보로 덮어씌운다.
      fs.writeFile(
        __dirname + "/../data/user.json",
        JSON.stringify(users, null, "\t"),
        "utf-8",
        (err, data) => {
          result["success"] = 1;
          res.json(result);
          return;
        }
      );
    });
  });
};
```
