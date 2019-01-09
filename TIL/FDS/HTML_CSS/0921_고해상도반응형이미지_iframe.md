
---

#  0921 TIL(Today I Learned)

<br>

## 0. 목차 

1. 고 해상도 이미지 및 반응형 이미지 처리

2. video 태그

3. iframe

4. TIF

5. Reference

<br>

---

## 1. 고 해상도 이미지 및 반응형 이미지 처리

### 1-1. 고 해상도 이미지

디바이스 마다 고유의 픽셀 배율이 존재한다. 이를 `픽셀의 배수` 혹은 `DIP(Density-Independent Pixels, DP)`라고 한다. 

`x1의 값 경우 96의 96의 dpi(dot per inch)를 가지며` x2는 192로 더해간다.

원리는 하나의 물리펙셀을 가로와 세로로 두등분하여 총 4개의 영역으로 나누는 것이 x2 배율이다.

때문에 높은 dpi를 가진 디바이스에게는 높은 해상도의 이미지를 지원해주어야 한다.

> 현재 galaxy 9의 경우 x4까지 지원하며, ppi(pixel per inch)는 520이다.

<br>

    - 

---
### 1-2. 반응형 이미지

다양한 해상도의 브라우저에 같은 디자인 혹은 이미지 비율을 출력하기 위해 여러 방법으로 속성을 부여하게 된다.

---
### 1-3. 대응 방법

- srcset 속성

    어떤 배율에 어떤 이미지를 출력할지를 정하는 속성이다.


    ```html
    <!-- 각 배율마다 다른 이미지를 사용함. -->
    <div class="rwd-container">
        <img class="rwd-srcset-img" src="../images/image-src.png" alt="고해상도 컨텐츠 이미지"
        srcset="../images/image-1x.png 1x, ../images/image-2x.png 2x, ../images/image-3x.png 3x, ../images/image-4x.png 4x">
    </div>


    <!-- 설정한 너비부터 저 이미지를 출력한다는 코드이지만 2배율 이상일 때는 설정 값 중 가까운 값을 입력한 이미지가 출력된다. -->
    <div class="rwd-container">
        <img class="rwd-srcset-img" src="../images/normal.jpg" alt="고해상도 컨텐츠 이미지"
        srcset="../images/small.jpg 550w, ../images/medium.jpg 1024w, ../images/large.jpg 1600w"
        sizes="(max-width: 999px) 50vw, 100vw">
        <!-- 999px내에서는 50vw, 아닐때는 100vw -->
    </div>
    ```

- picture 태그

    picture 태그는 이미지를 담고 있는 태그로써, 기기의 환경 및 조건에 따라 이미지를 다르게 출력해준다. `picture 태그 안에는 반드시 이미지 태그를 포함해야 한다.`

    반응형을 위한 클래스는 img 태그에 부여한다.

    ```html
        <picture>
            <!-- 너비 999px 이하에서는 배율에 따라 아래의 이미지를 출력 -->
            <source media="(max-width: 999px"" srcset="../images/image-1x.png 1x, ../images/image-2x.png 2x">
            <!-- 999를 넘어가면 3x 이미지가 출력 -->
            <source srcset="../images/image-3x.png 3x">
            <img  class="rwd-img" src="../images/normal.jpg" alt="고해상도 콘텐츠 이미지">
        </picture>
    ```

- background 속성을 이용한 반응형 이미지 처리

    background-size 속성을 이용하면 지정한 화면을 꽉 채우는 반응형 이미지를 만들 수 있다.

    반응형으로 처리할 시 컨테이너 박스를 두는 것이 좋다.

    ```html
    <div class="rwd-container">
        <div class="rwd-bg">
            <!-- 배경이미지가 보여질 영역 -->
        </div>
    </div>
    ```
    ```css
    .rwd-container{
        width: 50%;    
        }

    .rwd-bg {
        background-color: #ff0;
        background-image: url("../images/small.jpg");
        background-repeat: no-repeat;
        background-position: 0 0;
        /* 
        background-size 속성
        cover: 비율을 유지한 채 주어진 크기를 꽉 채운다. 이미지가 짤릴 수 있다.
        contain: 비율을 유지한 채 이미지가 짤리지 않는 선에서 주어진 크기를 채운다. 주어진 크기를 다 채우지 못할 수 있다. (남는 영역 발생)
         */
        background-size: contain;
        /* 부모의 너비만큼 자동으로 부여됨 */
        width: 100%;
        /* 부모 컨테이너 너비를 기준으로 세로로도 늘어남 */
        height: 0;
        padding-top: 90%;
    }
    ```
    
- 



---
## 2. video 태그

영상을 삽입하는 태그이다. html속성으로 영상을 컨트롤 할 수 있다.

```html
<div class="rwd-container">
    <!-- 스타일 속성을 부여하기 위해 클래스를 부여할 땐 source가 아닌 video 태그에 클래스를 부여한다. -->
    <video class="rwd-video" autoplay controls poster="../media/poster.jpg" muted>
        
        <!-- 영상의 소스, 경로 -->
        <source src="../media/stories.mp4">
        
        <!-- track은 자막을 관리하는 태그이다. kind는 종류, srclang은 언어를 의미한다. -->
        <track src="../media/stories-en.vtt" kind="captions" srclang="en" label="English">
        <!-- 비디오태그가 먹지 않는 경우의 대체. 비디오가 나올 경우 출력되지 않는다. -->
        <a href="../media/stories.mp4">구글 개발자 이야기</a>
    </video>
</div>
```

- video의 속성

    - autoplay: `값을 가지지 않는 논리속성으로서 자동 재생을 나타낸다.` 최근 chrome 브라우저는 접근성을 이유로 autoplay 속성만을 선언했을 경우 자동으로 실행되지 않는다. `chrome에서 autoplay 속성을 실해시키기 위해서는 muted(음소거) 속성을 부여`해야한다.

    - controls: 논리속성, 재생 및 일시정지 등 영상을 컨트롤할 수 있는 도구를 제공한다.

    - poster: 영상이 재생되기 전 썸네일 이미지를 지정한다.

    - muted: 영상의 소리를 제거한다.


---
## 3. iframe





## 3. TIF (Today I Found Out)

---

지원

```javascript
브라우저 지원 속성을 체크하면서 공부할 필요성을 느꼈다.
좋은 속성과 방법들이 있음에도 브라우저가 지원하지 않으면 쓸 수 없다는 점이 안타깝다.
```

윤재

```javascript
```

---

### 5. Reference

---

[유즈풀 패러다임 - 반응형웹과 Responsive Image 처리]("http://www.usefulparadigm.com/2014/11/03/processing-images-on-responsive-web/)

[Grid garden - grid 속성 학습]("http://cssgridgarden.com/#ko)

---
