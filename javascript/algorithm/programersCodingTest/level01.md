# 프로그래머스 코딩 테스트

## LEVEL 1

### 서울에서 김서방 찾기

String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

제한 사항

- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
- Kim은 반드시 seoul 안에 포함되어 있습니다.


```js
function solution(seoul) {
    let index = seoul.indexOf('Kim')
    return `김서방은 ${index}에 있다`
}

solution(["Jane", "Kim", "Wayne", "Jessi"])
```

---

### 두 정수 사이의 합

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요. 
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

```js
function solution(a, b) {
    return (a+b)/2 * (Math.abs(b-a)+1)
}
```

---

### 약수의 합

자연수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

- 제한 사항

n은 0 이상 3000이하인 자연수입니다.

```js

function solution(n) {
    let result = 0
    fot(let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result += i
        }
    }
    return result
}

solution(12) // 28
```

---

### 수박수박수박수박수박수?


길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

```js
function solution = (n) => {
    waterMelon = '수박'
    return waterMelon.repeat(n).slice(0,n)
    }

solution(7) //'수박수박수박수'
```

```js
function solution(n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
     i % 2 !== 0 ? result += '수' : result += '박'
    }
    return result
}

solution(5) // '수박수박수'
```

---

### 완주하지 못한 선수

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
* 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
* completion의 길이는 participant의 길이보다 1 작습니다.
* 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
* 참가자 중에는 동명이인이 있을 수 있습니다.

```js
function solution(participant, completion) {
  const parArr = [...participant]   
  const comArr = [...completion]
  // 만약 합격자 명단에 있는 사람이 참가자 명단에 있으면, 참가자 명단에서 제거해나간다.
  for (let item of comArr) {
      parArr.splice(parArr.indexOf(item), 1)
  }
  return parArr[0]
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]) // "mislav"
```

---

### 모의고사

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

- 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
- 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
- 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
* 시험은 최대 10,000 문제로 구성되어있습니다.
* 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
* 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.


```js
function solution(answers) {
    const first = [1, 2, 3, 4, 5]
    const second = [ 2, 1, 2, 3, 2, 4, 2, 5]
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let score1 = 0
    let score2 = 0
    let score3 = 0
    
    answers.forEach((item, index) => {
        if (item === first[index % first.length]) {
            score1++
        }
    })

    answers.forEach((item, index) => {
        if (item === second[index % second.length]) {
            score2++
        }
    })

    answers.forEach((item, index) => {
        if (item === third[index % third.length]) {
            score3++
        }
    })

    if (score1 > score2 && score1 > score3) {
      return [1]
    } else if (score2 > score1 && score2 > score3) {
      return [2]
    } else if (score3 > score1 && score3 > score2) {
      return [3]
    } else if (score1 === score2 && score1 > score3) {
      return [1, 2]
    } else if (score1 === score3 && score1 > score2) {
      return [1, 3]
    } else if (score2 === score3 && score2 > score1) {
      return [2, 3]
    } else {
      return [1, 2, 3]
    }    
}
```

```js
function solution(answers) {
    const answer = [];
    const a1 = [1, 2, 3, 4, 5];
    const a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    const a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    const a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    const max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}
```

---

### K번째 수

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
* array의 길이는 1 이상 100 이하입니다.
* array의 각 원소는 1 이상 100 이하입니다.
* commands의 길이는 1 이상 50 이하입니다.
* commands의 각 원소는 길이가 3입니다.

```js
function solution(array, com) {
    const result = []
    for (let item of com) {
        const arr = [...array]
        const sliceArr = arr.splice(item[0] - 1 , item[1] - item[0] + 1)
        sliceArr.sort((x, y) => x - y)
        result.push(sliceArr[item[2] - 1])
    }
    return result    
}
```

```js
function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}
```

---

### 체육복

오늘은 체육수업이 있는 날입니다. 그런데 점심시간에 도둑이 들어 몇몇 학생의 체육복이 도난을 당했습니다. 다행히 일부 학생들이 여벌의 체육복을 가져왔습니다. 학생들의 번호는 체격 순으로 매겨져 있기 때문에 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려주려고 합니다.

예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 당연히 체육복을 2벌 가져온 학생의 체육복이 도난을 당했다면, 여벌의 체육복을 빌려줄 수 없습니다.

체육복이 없으면 체육수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 듣고 싶습니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
* 전체 학생의 수는 2명 이상 30명 이하입니다.
* 체육복을 도난당한 학생의 수는 2명 이상 n명 이하이고 중복되는 번호는 없습니다.
* 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.

나의 풀이
```js
function solution(n, lost = 0, reserve = 0) {
    const lostCopy = [...lost]
    const reserveCopy = [...reserve]
    
    for (let item of reserve) {
        if (lostCopy.includes(item)) {
            reserveCopy.splice(reserveCopy.indexOf(item), 1)
            lostCopy.splice(lostCopy.indexOf(item), 1)
        }
    }
    
    for (let item of reserveCopy) {
      let idx1 = lostCopy.indexOf(item - 1)
      let idx2 = lostCopy.indexOf(item + 1)
      if (idx1 !== -1) {
          lostCopy.splice(idx1, 1)
          continue
      } else if (idx2 !== -1) {
          lostCopy.splice(idx2, 1)
      }
    }   
    return n - lostCopy.length
}
```

다른사람의 풀이
```js
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}
```