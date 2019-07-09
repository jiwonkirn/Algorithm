# mysql 패스워드 변경하기

1. 서비스 종료

mac

```zsh
brew services stop mysql
```

linux

```
service stop mysql
```

2. 인증 생략 옵션 + 안전모드로 데몬 실행

```zsh
/usr/bin/mysqld_safe --skip-grant-tables
```

3. 패스워드 없이 콘솔 접속

```zsh
mysql -u root mysql
```

4. 비밀번호 변경

```sql
UPDATE mysql.user SET authentication_string="NEWPASSWORD" WHERE user="root";
```
