
---

#  0919 수요일 TIL(Today I Learned)

---

## 0. 목차 

1. conuter 속성 (CSS)

2. q 태그 & blockquote 태그 (Html)

3. footer 태그 (Html)
    - address 태그
    - small 태그

4. TIF

5. Reference

<br>

---

## 1. conuter 속성 (CSS)

`counter` 속성은 HTML 마크업을 하지 않아도 문서의 순서를 매길 수 있도록 도와주는 CSS 속성이다. 

- `counter-reset`

    `counter-reset` 은 counter의 이름과 초기값을 설정한다.

    ```css
    ol {
        /* 리스트 스타일 초기화 */
        list-style: none;

        /* counter의 이름은 'counterName' 이고 시작값이 '0'이라는 속성 선언이다. */
        counter-reset: counterName 0; /* 0 is default value */
    }
    ```

- `counter-increment`

    `counter-reset`에서 선언한 이름과 초기값에 얼마나 증가 혹은 감소시킬지 정한다.

    ```css
    li::before {
        /* counterName이라는 이름, 값에 1씩 더해나간다. */
        counter-increment: counterName 1; /* 숫자에 음수를 부여하면 감소해 나간다. */

        /* 부여된 속성에 따라 번호를 출력합니다.(그것이 알파벳 등이 될 수 있습니다.) */
        content: counter(counterName) "번"; /* 번호 뒤에 접미사를 붙이려면 "(부여할 단어)"를 사용합니다 */
    }
    ```

    결과는 다음과 같이 출력된다.

    ```html
    <ol>
        <li> 순서1</li>
        <li> 순서2</li>
        <li> 순서3</li>
        <li> 순서4</li>
    </ol>
    ```

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>counter</title>
    <style>
        ol.ordered-list {
            list-style: none;
            counter-reset: counterName 0;
        }
        .ordered-list li::before {
            counter-increment: counterName 1;
            content: counter(counterName) "번";
        }
    </style>
</head>
<body></body>
    <ol class="ordered-list">
        <li> 순서1</li>
        <li> 순서2</li>
        <li> 순서3</li>
        <li> 순서4</li>
    </ol>
</body>
</html>


<br>

---

## 2. q 태그 & blockquote 태그 (Html)

- `q` 태그는 짧은 인용구, `blockquote` 태그는 긴 인용구일 때 사용한다.

    ```html
    
    <!-- cite는 출처의 링크를 첨부하는 속성입니다. -->
    <q cite="링크">짧은 인용구</q>

    <blockquote cite="링크">긴 인용구</blockquote>

    ```

    `blockquote` 는 블록레벨 태그로 줄바꿈과 들여쓰기가 되어 표시되지만, 
    
    `q` 태그는 인라인 태그로 줄바꿈 없이 다른 내용과 한 줄에 표시된다.

<br>

---

## 3. footer 태그 (Html)

footer는 문서의 하단을 의미하는 태그로써 body뿐만 아니라 section과 같은 문서영역의 하단으로서 올 수도 있다. 또한 heading을 가지지 않아도 웹 표준에 어긋나지 않는다.

- `address` 태그

    홈페이지와 관련된 연락처 정보를 포함한다는 의미를 가진 태그이다. 

- `small` 태그

    전형적으로 책임 한계에 대한 고지, 경고, 법적 제한 또는 저작권등을 나타낸다. 또한 법적인 귀속이나 저작권 요구사항을 만족시키기 위해 사용되기도 한다.

<br>

---

## 4. TIF (Today I Found Out)

---

지원

```javascript
정보를 담는 다른 태그들을 알아보고자 한다.
```

윤재

```javascript
```

---

### 5. Reference

---

[null]

---